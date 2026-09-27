#!/usr/bin/env bash
# Baut die Legionen-APK ohne Android-SDK-Download:
#   benötigt: node/npm, javac (JDK), aapt, dalvik-exchange (dx), zipalign, apksigner
#   (Ubuntu: sudo apt-get install aapt dalvik-exchange zipalign apksigner)
set -euo pipefail
cd "$(dirname "$0")"
ROOT=$(pwd)
OUT="$ROOT/build"
ANDROID_JAR="$ROOT/tools/android-33.jar"
KEYSTORE="$ROOT/android/legionen-debug.keystore"
DX=$(command -v dalvik-exchange || command -v dx)

if [ ! -f "$ANDROID_JAR" ]; then
  echo "» lade android.jar (API 33)"
  curl -sSfLo "$ANDROID_JAR" https://raw.githubusercontent.com/Sable/android-platforms/master/android-33/android.jar
fi

echo "» baue Spiel (esbuild)"
(cd game && npm install --no-audit --no-fund --silent && npm run build --silent)

rm -rf "$OUT" && mkdir -p "$OUT/classes" "$OUT/gen" "$OUT/apk/assets"
cp -r game/www "$OUT/apk/assets/www"

echo "» Ressourcen (aapt)"
aapt package -f -m -J "$OUT/gen" -M android/AndroidManifest.xml -S android/res \
  -I "$ANDROID_JAR" -A "$OUT/apk/assets" -F "$OUT/unsigned.apk"

echo "» Java kompilieren"
javac -nowarn --release 8 -classpath "$ANDROID_JAR" -d "$OUT/classes" \
  $(find android/src "$OUT/gen" -name '*.java') 2>&1 | grep -v "JAVA_TOOL_OPTIONS" || true

echo "» dex"
"$DX" --dex --output="$OUT/classes.dex" "$OUT/classes"
(cd "$OUT" && zip -q -j unsigned.apk classes.dex)

if [ ! -f "$KEYSTORE" ]; then
  keytool -genkeypair -v -keystore "$KEYSTORE" -storepass legionen -keypass legionen \
    -alias legionen -keyalg RSA -keysize 2048 -validity 10000 \
    -dname "CN=Legionen, O=StrideLab, C=DE" >/dev/null 2>&1
fi

echo "» zipalign + signieren"
zipalign -f 4 "$OUT/unsigned.apk" "$OUT/aligned.apk"
mkdir -p dist
apksigner sign --ks "$KEYSTORE" --ks-pass pass:legionen --key-pass pass:legionen \
  --ks-key-alias legionen --min-sdk-version 24 --out dist/Legionen.apk "$OUT/aligned.apk"
apksigner verify dist/Legionen.apk
ls -la dist/Legionen.apk
echo "✔ fertig: dist/Legionen.apk"
