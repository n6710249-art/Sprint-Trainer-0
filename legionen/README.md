# Legionen – Lowpoly-Mini-Schlachten (Android)

Taktisches Einzelspieler-Spiel: Führe **1–5 Legionen** der *Löwenlegion* gegen den Bot-Gegner *Rabenclan*.

**APK:** [`dist/Legionen.apk`](dist/Legionen.apk) – auf dem Handy öffnen und installieren
(„Installation aus unbekannten Quellen“ erlauben). Android 7.0+.

## Spielablauf
1. **Vorbereitung** – Schlachtfeld (oder Zufall), Jahreszeit, Schwierigkeit und bis zu 5 Legionen wählen.
2. **Aufstellung** – in der blauen Zone:
   - Legion **ziehen** – oder **antippen und Zielort tippen**
   - am **gelben Pfeil** ziehen zum Ausrichten, alternativ ⟲ / ⟳ (30°-Schritte)
   - **▦** wechselt die Formation (Linie/Block/Keil); überlappende Legionen rücken beim Absetzen auseinander
3. **Befehle** – je Legion:
   - *Bewegung:* Vorrücken, Halten, Flanke links/rechts, eigene Route (bis 4 Wegpunkte), Formation (Linie/Block/Keil), Startsignal (sofort bis +20 s)
   - *Angriff:* Ziel (nächster, schwächster, stärkster Feind, Fernkämpfer, bestimmte Legion, Missionsziel), Haltung (aggressiv/ausgewogen/defensiv), Ausweichen für Schützen
   - *Rückzug:* ab 25 % / 50 % Stärke oder nie, ins Lager oder zu Verbündeten, danach halten oder erneut angreifen
4. **Schlacht** – läuft in Echtzeit (1×/2×/3×). Mit ❚❚ pausieren und Befehle jederzeit ändern.

## Truppen
| Legion (Löwen / Raben) | Mann | Stärke |
|---|---|---|
| Legionäre / Plünderer | 32 | Allrounder mit Schild |
| Pikeniere / Speermänner | 36 | ×2,6 gegen Reiter, brechen Sturmangriffe |
| Bogenschützen / Jäger | 24 | Reichweite 36, Pfeilsalven |
| Reiterei / Wolfsreiter | 20 | schnell, Sturmangriff, jagt Schützen |
| Prätorianer / Eisenwache | 24 | Turmschilde, hohe Abwehr, Pfeilschutz |

## Szenarien
Burg einnehmen · Burg verteidigen · Canyon-Pass · Flussfurt · Königshügel · Nebelwald –
jeweils zufällig generiert, in Sommer, Herbst, Winter oder Wüste.

## Technik & Build
- Spiel: Three.js + eigene Simulation (`game/src`), gebündelt mit esbuild nach `game/www/game.js`.
  Im Browser testbar: `game/www/index.html` öffnen.
- Android-Hülle: minimale WebView-Activity (`android/`), Vollbild, Querformat.
- `./build-apk.sh` baut die APK ohne Android-SDK-Download
  (braucht Node, JDK und die Ubuntu-Pakete `aapt dalvik-exchange zipalign apksigner`).
- GitHub Actions (`.github/workflows/legionen-apk.yml`) baut die APK bei jedem Push als Artefakt.
- Headless-Tests (im Ordner `game/`): `test/sim.mjs` (alle Szenarien), `test/stuck.mjs` (Feststecken/Verkeilen), `test/duel.mjs` (Truppenbalance).
- Beispiel: `npx esbuild test/sim.mjs --bundle --platform=node --outfile=/tmp/sim.cjs && node /tmp/sim.cjs 3` (im Ordner `game/`).
