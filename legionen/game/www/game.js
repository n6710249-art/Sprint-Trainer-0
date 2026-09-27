(()=>{var Fc="170";var Ou=0,Ml=1,Bu=2;var Ch=1,kc=2,kn=3,ai=0,Ne=1,ye=2,si=0,os=1,bl=2,wl=3,Sl=4,Hu=5,wi=100,Vu=101,Gu=102,Wu=103,Xu=104,qu=200,Yu=201,$u=202,Zu=203,_o=204,vo=205,Ju=206,Ku=207,ju=208,Qu=209,td=210,ed=211,nd=212,id=213,sd=214,Mo=0,bo=1,wo=2,us=3,So=4,Eo=5,To=6,Ao=7,ya=0,rd=1,ad=2,ri=0,od=1,cd=2,ld=3,hd=4,ud=5,dd=6,fd=7;var Ih=300,ds=301,fs=302,Ro=303,Co=304,_a=306,Io=1e3,Ti=1001,Po=1002,Qe=1003,pd=1004;var mr=1005;var bn=1006,Ba=1007;var Ai=1008;var Hn=1009,Ph=1010,Dh=1011,Ys=1012,Lc=1013,Ri=1014,wn=1015,nr=1016,Oc=1017,Bc=1018,ps=1020,zh=35902,Uh=1021,Nh=1022,mn=1023,Fh=1024,kh=1025,cs=1026,ms=1027,Hc=1028,Vc=1029,Lh=1030,Gc=1031;var Wc=1033,Br=33776,Hr=33777,Vr=33778,Gr=33779,Do=35840,zo=35841,Uo=35842,No=35843,Fo=36196,ko=37492,Lo=37496,Oo=37808,Bo=37809,Ho=37810,Vo=37811,Go=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,$o=37817,Zo=37818,Jo=37819,Ko=37820,jo=37821,Wr=36492,Qo=36494,tc=36495,Oh=36283,ec=36284,nc=36285,ic=36286;var Xr=2300,sc=2301,Ha=2302,El=2400,Tl=2401,Al=2402;var md=3200,gd=3201;var Xc=0,xd=1,ii="",ln="srgb",_s="srgb-linear",va="linear",oe="srgb";var Xi=7680;var Rl=519,yd=512,_d=513,vd=514,Bh=515,Md=516,bd=517,wd=518,Sd=519,Cl=35044,ir=35048;var Il="300 es",On=2e3,qr=2001,oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Va=Math.PI/180,rc=180/Math.PI;function sr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function $e(s,t,e){return Math.max(t,Math.min(e,s))}function Ed(s,t){return(s%t+t)%t}function Ga(s,t,e){return(1-e)*s+e*t}function Fs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var qt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],p=n[5],g=n[8],y=i[0],x=i[3],m=i[6],M=i[1],b=i[4],_=i[7],U=i[2],P=i[5],I=i[8];return r[0]=o*y+a*M+c*U,r[3]=o*x+a*b+c*P,r[6]=o*m+a*_+c*I,r[1]=l*y+u*M+d*U,r[4]=l*x+u*b+d*P,r[7]=l*m+u*_+d*I,r[2]=f*y+p*M+g*U,r[5]=f*x+p*b+g*P,r[8]=f*m+p*_+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=e*d+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(i*l-u*n)*y,t[2]=(a*n-i*o)*y,t[3]=f*y,t[4]=(u*e-i*c)*y,t[5]=(i*r-a*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new Gt;function Hh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Td(){let s=Yr("canvas");return s.style.display="block",s}var Pl={};function Ws(s){s in Pl||(Pl[s]=!0,console.warn(s))}function Ad(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Rd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?va:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Dl=[.64,.33,.3,.6,.15,.06],zl=[.2126,.7152,.0722],Ul=[.3127,.329],Nl=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[_s]:{primaries:Dl,whitePoint:Ul,transfer:va,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:zl,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:Dl,whitePoint:Ul,transfer:oe,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:zl,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});var qi,ac=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=Yr("canvas")),qi.width=t.width,qi.height=t.height;let n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Id=0,$r=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xa(i[o].image)):r.push(Xa(i[o]))}else r=Xa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xa(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ac.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pd=0,tn=class s extends oi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ti,i=Ti,r=bn,o=Ai,a=mn,c=Hn,l=s.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=sr(),this.name="",this.source=new $r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Io:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Io:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Ih;tn.DEFAULT_ANISOTROPY=1;var ve=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],y=c[2],x=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+x)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,_=(p+1)/2,U=(m+1)/2,P=(u+f)/4,I=(d+y)/4,D=(g+x)/4;return b>_&&b>U?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=P/n,r=I/n):_>U?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=P/i,r=D/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=I/r,i=D/r),this.set(n,i,r,e),this}let M=Math.sqrt((x-g)*(x-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(x-g)/M,this.y=(d-y)/M,this.z=(f-u)/M,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oc=class extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new $r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zr=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var cc=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],f=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(d!==y||c!==f||l!==p||u!==g){let x=1-a,m=c*f+l*p+u*g+d*y,M=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let U=Math.sqrt(b),P=Math.atan2(U,m*M);x=Math.sin(x*P)/U,a=Math.sin(a*P)/U}let _=a*M;if(c=c*x+f*_,l=l*x+p*_,u=u*x+g*_,d=d*x+y*_,x===1-a){let U=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=U,l*=U,u*=U,d*=U}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*p-l*f,t[e+1]=c*g+u*f+l*d-a*p,t[e+2]=l*g+u*p+a*f-c*d,t[e+3]=u*g-a*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=i+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qa.copy(this).projectOnVector(t),this.sub(qa)}reflect(t){return this.sub(qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qa=new B,kl=new Ve,Gn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),xr.subVectors(this.max,ks),Yi.subVectors(t.a,ks),$i.subVectors(t.b,ks),Zi.subVectors(t.c,ks),Kn.subVectors($i,Yi),jn.subVectors(Zi,$i),gi.subVectors(Yi,Zi);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-gi.z,gi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,gi.z,0,-gi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-gi.y,gi.x,0];return!Ya(e,Yi,$i,Zi,xr)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,Yi,$i,Zi,xr))?!1:(yr.crossVectors(Kn,jn),e=[yr.x,yr.y,yr.z],Ya(e,Yi,$i,Zi,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new B,new B,new B,new B,new B,new B,new B,new B],dn=new B,gr=new Gn,Yi=new B,$i=new B,Zi=new B,Kn=new B,jn=new B,gi=new B,ks=new B,xr=new B,yr=new B,xi=new B;function Ya(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){xi.fromArray(s,r);let a=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Dd=new Gn,Ls=new B,$a=new B,ci=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add($a)),this.expandByPoint(Ls.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new B,Za=new B,_r=new B,Qn=new B,Ja=new B,vr=new B,Ka=new B,$s=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Za.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Za);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=Qn.dot(this.direction),c=-Qn.dot(_r),l=Qn.lengthSq(),u=Math.abs(1-o*o),d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Za).addScaledVector(_r,f),p}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,i,r){Ja.subVectors(e,t),vr.subVectors(n,t),Ka.crossVectors(Ja,vr);let o=this.direction.dot(Ka),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);let c=a*this.direction.dot(vr.crossVectors(Qn,vr));if(c<0)return null;let l=a*this.direction.dot(Ja.cross(Qn));if(l<0||c+l>o)return null;let u=-a*Qn.dot(Ka);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class s{constructor(t,e,n,i,r,o,a,c,l,u,d,f,p,g,y,x){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,d,f,p,g,y,x)}set(t,e,n,i,r,o,a,c,l,u,d,f,p,g,y,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=y,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,p=o*d,g=a*u,y=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,p=c*d,g=l*u,y=l*d;e[0]=f+y*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,p=c*d,g=l*u,y=l*d;e[0]=f-y*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,p=o*d,g=a*u,y=a*d;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+y,e[1]=c*d,e[5]=y*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=y-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*d+g,e[10]=f-y*d}else if(t.order==="XZY"){let f=o*c,p=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+y,e[5]=o*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,Ud)}lookAt(t,e,n){let i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ti.crossVectors(n,Ke),ti.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ti.crossVectors(n,Ke)),ti.normalize(),Mr.crossVectors(Ke,ti),i[0]=ti.x,i[4]=Mr.x,i[8]=Ke.x,i[1]=ti.y,i[5]=Mr.y,i[9]=Ke.y,i[2]=ti.z,i[6]=Mr.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],p=n[13],g=n[2],y=n[6],x=n[10],m=n[14],M=n[3],b=n[7],_=n[11],U=n[15],P=i[0],I=i[4],D=i[8],E=i[12],h=i[1],v=i[5],w=i[9],A=i[13],z=i[2],N=i[6],F=i[10],W=i[14],V=i[3],tt=i[7],K=i[11],dt=i[15];return r[0]=o*P+a*h+c*z+l*V,r[4]=o*I+a*v+c*N+l*tt,r[8]=o*D+a*w+c*F+l*K,r[12]=o*E+a*A+c*W+l*dt,r[1]=u*P+d*h+f*z+p*V,r[5]=u*I+d*v+f*N+p*tt,r[9]=u*D+d*w+f*F+p*K,r[13]=u*E+d*A+f*W+p*dt,r[2]=g*P+y*h+x*z+m*V,r[6]=g*I+y*v+x*N+m*tt,r[10]=g*D+y*w+x*F+m*K,r[14]=g*E+y*A+x*W+m*dt,r[3]=M*P+b*h+_*z+U*V,r[7]=M*I+b*v+_*N+U*tt,r[11]=M*D+b*w+_*F+U*K,r[15]=M*E+b*A+_*W+U*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],p=t[14],g=t[3],y=t[7],x=t[11],m=t[15];return g*(+r*c*d-i*l*d-r*a*f+n*l*f+i*a*p-n*c*p)+y*(+e*c*p-e*l*f+r*o*f-i*o*p+i*l*u-r*c*u)+x*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*u-n*l*u)+m*(-i*a*u-e*c*d+e*a*f+i*o*d-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],g=t[12],y=t[13],x=t[14],m=t[15],M=d*x*l-y*f*l+y*c*p-a*x*p-d*c*m+a*f*m,b=g*f*l-u*x*l-g*c*p+o*x*p+u*c*m-o*f*m,_=u*y*l-g*d*l+g*a*p-o*y*p-u*a*m+o*d*m,U=g*d*c-u*y*c-g*a*f+o*y*f+u*a*x-o*d*x,P=e*M+n*b+i*_+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return t[0]=M*I,t[1]=(y*f*r-d*x*r-y*i*p+n*x*p+d*i*m-n*f*m)*I,t[2]=(a*x*r-y*c*r+y*i*l-n*x*l-a*i*m+n*c*m)*I,t[3]=(d*c*r-a*f*r-d*i*l+n*f*l+a*i*p-n*c*p)*I,t[4]=b*I,t[5]=(u*x*r-g*f*r+g*i*p-e*x*p-u*i*m+e*f*m)*I,t[6]=(g*c*r-o*x*r-g*i*l+e*x*l+o*i*m-e*c*m)*I,t[7]=(o*f*r-u*c*r+u*i*l-e*f*l-o*i*p+e*c*p)*I,t[8]=_*I,t[9]=(g*d*r-u*y*r-g*n*p+e*y*p+u*n*m-e*d*m)*I,t[10]=(o*y*r-g*a*r+g*n*l-e*y*l-o*n*m+e*a*m)*I,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*p-e*a*p)*I,t[12]=U*I,t[13]=(u*y*i-g*d*i+g*n*f-e*y*f-u*n*x+e*d*x)*I,t[14]=(g*a*i-o*y*i-g*n*c+e*y*c+o*n*x-e*a*x)*I,t[15]=(o*d*i-u*a*i+u*n*c-e*d*c-o*n*f+e*a*f)*I,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,f=r*l,p=r*u,g=r*d,y=o*u,x=o*d,m=a*d,M=c*l,b=c*u,_=c*d,U=n.x,P=n.y,I=n.z;return i[0]=(1-(y+m))*U,i[1]=(p+_)*U,i[2]=(g-b)*U,i[3]=0,i[4]=(p-_)*P,i[5]=(1-(f+m))*P,i[6]=(x+M)*P,i[7]=0,i[8]=(g+b)*I,i[9]=(x-M)*I,i[10]=(1-(f+y))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ji.set(i[0],i[1],i[2]).length(),o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);let l=1/r,u=1/o,d=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=On){let c=this.elements,l=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,g;if(a===On)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=On){let c=this.elements,l=1/(e-t),u=1/(n-i),d=1/(o-r),f=(e+t)*l,p=(n+i)*u,g,y;if(a===On)g=(o+r)*d,y=-2*d;else if(a===qr)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ji=new B,fn=new Zt,zd=new B(0,0,0),Ud=new B(1,1,1),ti=new B,Mr=new B,Ke=new B,Ll=new Zt,Ol=new Ve,Ce=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ce.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nd=0,Bl=new B,Ki=new Ve,Un=new Zt,br=new B,Os=new B,Fd=new B,kd=new Ve,Hl=new B(1,0,0),Vl=new B(0,1,0),Gl=new B(0,0,1),Wl={type:"added"},Ld={type:"removed"},ji={type:"childadded",child:null},ja={type:"childremoved",child:null},Fe=class s extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new B,e=new Ce,n=new Ve,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Gt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Os,br,this.up):Un.lookAt(br,Os,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Un),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wl),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ld),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wl),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Fe.DEFAULT_UP=new B(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new B,Nn=new B,Qa=new B,Fn=new B,Qi=new B,ts=new B,Xl=new B,to=new B,eo=new B,no=new B,io=new ve,so=new ve,ro=new ve,Si=class s{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){pn.subVectors(i,e),Nn.subVectors(n,e),Qa.subVectors(t,e);let o=pn.dot(pn),a=pn.dot(Nn),c=pn.dot(Qa),l=Nn.dot(Nn),u=Nn.dot(Qa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return io.setScalar(0),so.setScalar(0),ro.setScalar(0),io.fromBufferAttribute(t,e),so.fromBufferAttribute(t,n),ro.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(io,r.x),o.addScaledVector(so,r.y),o.addScaledVector(ro,r.z),o}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),Nn.subVectors(t,e),pn.cross(Nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),pn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Qi.subVectors(i,n),ts.subVectors(r,n),to.subVectors(t,n);let c=Qi.dot(to),l=ts.dot(to);if(c<=0&&l<=0)return e.copy(n);eo.subVectors(t,i);let u=Qi.dot(eo),d=ts.dot(eo);if(u>=0&&d<=u)return e.copy(i);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Qi,o);no.subVectors(t,r);let p=Qi.dot(no),g=ts.dot(no);if(g>=0&&p<=g)return e.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ts,a);let x=u*g-p*d;if(x<=0&&d-u>=0&&p-g>=0)return Xl.subVectors(r,i),a=(d-u)/(d-u+(p-g)),e.copy(i).addScaledVector(Xl,a);let m=1/(x+y+f);return o=y*m,a=f*m,e.copy(n).addScaledVector(Qi,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},wr={h:0,s:0,l:0};function ao(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Ed(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ao(o,r,t+1/3),this.g=ao(o,r,t),this.b=ao(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Qt.fromWorkingColorSpace(Ue.copy(this),t),Math.round($e(Ue.r*255,0,255))*65536+Math.round($e(Ue.g*255,0,255))*256+Math.round($e(Ue.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ue.copy(this),e);let n=Ue.r,i=Ue.g,r=Ue.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=ln){Qt.fromWorkingColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,i=Ue.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(wr);let n=Ga(ei.h,wr.h,e),i=Ga(ei.s,wr.s,e),r=Ga(ei.l,wr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new ft;ft.NAMES=Vh;var Od=0,Wn=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=sr(),this.name="",this.blending=os,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=vo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_o&&(n.blendSrc=this.blendSrc),this.blendDst!==vo&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},me=class extends Wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var be=new B,Sr=new qt,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cl&&(t.usage=this.usage),t}};var Jr=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Kr=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bd=0,cn=new Zt,oo=new Fe,es=new B,je=new Gn,Bs=new Gn,Re=new B,he=class s extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hh(t)?Kr:Jr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(je.min,Bs.min),je.expandByPoint(Re),Re.addVectors(je.max,Bs.max),je.expandByPoint(Re)):(je.expandByPoint(Bs.min),je.expandByPoint(Bs.max))}je.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Re.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(t,l),Re.add(es)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new B,c[D]=new B;let l=new B,u=new B,d=new B,f=new qt,p=new qt,g=new qt,y=new B,x=new B;function m(D,E,h){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,h),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,h),u.sub(l),d.sub(l),p.sub(f),g.sub(f);let v=1/(p.x*g.y-g.x*p.y);isFinite(v)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(v),x.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(v),a[D].add(y),a[E].add(y),a[h].add(y),c[D].add(x),c[E].add(x),c[h].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,E=M.length;D<E;++D){let h=M[D],v=h.start,w=h.count;for(let A=v,z=v+w;A<z;A+=3)m(t.getX(A+0),t.getX(A+1),t.getX(A+2))}let b=new B,_=new B,U=new B,P=new B;function I(D){U.fromBufferAttribute(i,D),P.copy(U);let E=a[D];b.copy(E),b.sub(U.multiplyScalar(U.dot(E))).normalize(),_.crossVectors(P,E);let v=_.dot(c[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,v)}for(let D=0,E=M.length;D<E;++D){let h=M[D],v=h.start,w=h.count;for(let A=v,z=v+w;A<z;A+=3)I(t.getX(A+0)),I(t.getX(A+1)),I(t.getX(A+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new B,r=new B,o=new B,a=new B,c=new B,l=new B,u=new B,d=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),y=t.getX(f+1),x=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let y=0,x=c.length;y<x;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*u;for(let m=0;m<u;m++)f[g++]=l[p++]}return new _e(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ql=new Zt,yi=new $s,Er=new ci,Yl=new B,Tr=new B,Ar=new B,Rr=new B,co=new B,Cr=new B,$l=new B,Ir=new B,Ft=class extends Fe{constructor(t=new he,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],d=r[c];u!==0&&(co.fromBufferAttribute(d,t),o?Cr.addScaledVector(co,u):Cr.addScaledVector(co.sub(e),u))}e.add(Cr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(Er.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Er,Yl)===null||yi.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(ql.copy(r).invert(),yi.copy(t.ray).applyMatrix4(ql),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let x=f[g],m=o[x.materialIndex],M=Math.max(x.start,p.start),b=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let _=M,U=b;_<U;_+=3){let P=a.getX(_),I=a.getX(_+1),D=a.getX(_+2);i=Pr(this,m,t,n,l,u,d,P,I,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let x=g,m=y;x<m;x+=3){let M=a.getX(x),b=a.getX(x+1),_=a.getX(x+2);i=Pr(this,o,t,n,l,u,d,M,b,_),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let x=f[g],m=o[x.materialIndex],M=Math.max(x.start,p.start),b=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let _=M,U=b;_<U;_+=3){let P=_,I=_+1,D=_+2;i=Pr(this,m,t,n,l,u,d,P,I,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let x=g,m=y;x<m;x+=3){let M=x,b=x+1,_=x+2;i=Pr(this,o,t,n,l,u,d,M,b,_),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}};function Hd(s,t,e,n,i,r,o,a){let c;if(t.side===Ne?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===ai,a),c===null)return null;Ir.copy(a),Ir.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Ir);return l<e.near||l>e.far?null:{distance:l,point:Ir.clone(),object:s}}function Pr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Tr),s.getVertexPosition(c,Ar),s.getVertexPosition(l,Rr);let u=Hd(s,t,e,n,Tr,Ar,Rr,$l);if(u){let d=new B;Si.getBarycoord($l,Tr,Ar,Rr,d),i&&(u.uv=Si.getInterpolatedAttribute(i,a,c,l,d,new qt)),r&&(u.uv1=Si.getInterpolatedAttribute(r,a,c,l,d,new qt)),o&&(u.normal=Si.getInterpolatedAttribute(o,a,c,l,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new B,materialIndex:0};Si.getNormal(Tr,Ar,Rr,f.normal),u.face=f,u.barycoord=d}return u}var en=class s extends he{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2));function g(y,x,m,M,b,_,U,P,I,D,E){let h=_/I,v=U/D,w=_/2,A=U/2,z=P/2,N=I+1,F=D+1,W=0,V=0,tt=new B;for(let K=0;K<F;K++){let dt=K*v-A;for(let St=0;St<N;St++){let Jt=St*h-w;tt[y]=Jt*M,tt[x]=dt*b,tt[m]=z,l.push(tt.x,tt.y,tt.z),tt[y]=0,tt[x]=0,tt[m]=P>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(St/I),d.push(1-K/D),W+=1}}for(let K=0;K<D;K++)for(let dt=0;dt<I;dt++){let St=f+dt+N*K,Jt=f+dt+N*(K+1),Z=f+(dt+1)+N*(K+1),it=f+(dt+1)+N*K;c.push(St,Jt,it),c.push(Jt,Z,it),V+=6}a.addGroup(p,V,E),p+=V,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(s){let t={};for(let e=0;e<s.length;e++){let n=gs(s[e]);for(let i in n)t[i]=n[i]}return t}function Vd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Gd={clone:gs,merge:Be},Wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},jr=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new B,Zl=new qt,Jl=new qt,He=class extends jr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Zl,Jl),e.subVectors(Jl,Zl)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Va*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ns=-90,is=1,lc=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new He(ns,is,t,e);i.layers=this.layers,this.add(i);let r=new He(ns,is,t,e);r.layers=this.layers,this.add(r);let o=new He(ns,is,t,e);o.layers=this.layers,this.add(o);let a=new He(ns,is,t,e);a.layers=this.layers,this.add(a);let c=new He(ns,is,t,e);c.layers=this.layers,this.add(c);let l=new He(ns,is,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qr=class extends tn{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hc=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Qr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new en(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:si});r.uniforms.tEquirect.value=e;let o=new Ft(i,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=bn),new lc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},lo=new B,qd=new B,Yd=new Gt,Ln=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=lo.subVectors(n,e).cross(qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yd.getNormalMatrix(t),i=this.coplanarPoint(lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new ci,Dr=new B,Js=class{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],g=i[9],y=i[10],x=i[11],m=i[12],M=i[13],b=i[14],_=i[15];if(n[0].setComponents(c-r,f-l,x-p,_-m).normalize(),n[1].setComponents(c+r,f+l,x+p,_+m).normalize(),n[2].setComponents(c+o,f+u,x+g,_+M).normalize(),n[3].setComponents(c-o,f-u,x-g,_-M).normalize(),n[4].setComponents(c-a,f-d,x-y,_-b).normalize(),e===On)n[5].setComponents(c+a,f+d,x+y,_+b).normalize();else if(e===qr)n[5].setComponents(a,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Dr.x=i.normal.x>0?t.max.x:t.min.x,Dr.y=i.normal.y>0?t.max.y:t.min.y,Dr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $d(s){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];s.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var nn=class s extends he{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=t/a,f=e/c,p=[],g=[],y=[],x=[];for(let m=0;m<u;m++){let M=m*f-o;for(let b=0;b<l;b++){let _=b*d-r;g.push(_,-M,0),y.push(0,0,1),x.push(b/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let b=M+l*m,_=M+l*(m+1),U=M+1+l*(m+1),P=M+1+l*m;p.push(b,_,P),p.push(_,U,P)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_f=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,If=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$f=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,im=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Am=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Zd,alphahash_pars_fragment:Jd,alphamap_fragment:Kd,alphamap_pars_fragment:jd,alphatest_fragment:Qd,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:af,beginnormal_vertex:of,bsdfs:cf,iridescence_fragment:lf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:xf,color_vertex:yf,common:_f,cube_uv_reflection_fragment:vf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:bf,displacementmap_vertex:wf,emissivemap_fragment:Sf,emissivemap_pars_fragment:Ef,colorspace_fragment:Tf,colorspace_pars_fragment:Af,envmap_fragment:Rf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:If,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:Vf,envmap_vertex:Df,fog_vertex:zf,fog_pars_vertex:Uf,fog_fragment:Nf,fog_pars_fragment:Ff,gradientmap_pars_fragment:kf,lightmap_pars_fragment:Lf,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:Hf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:qf,lights_physical_fragment:Yf,lights_physical_pars_fragment:$f,lights_fragment_begin:Zf,lights_fragment_maps:Jf,lights_fragment_end:Kf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:ep,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:sp,map_particle_pars_fragment:rp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:op,morphinstance_vertex:cp,morphcolor_vertex:lp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:xp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:bp,opaque_fragment:wp,packing:Sp,premultiplied_alpha_fragment:Ep,project_vertex:Tp,dithering_fragment:Ap,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Pp,shadowmap_pars_vertex:Dp,shadowmap_vertex:zp,shadowmask_pars_fragment:Up,skinbase_vertex:Np,skinning_pars_vertex:Fp,skinning_vertex:kp,skinnormal_vertex:Lp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Vp,transmission_fragment:Gp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:$p,background_vert:Zp,background_frag:Jp,backgroundCube_vert:Kp,backgroundCube_frag:jp,cube_vert:Qp,cube_frag:tm,depth_vert:em,depth_frag:nm,distanceRGBA_vert:im,distanceRGBA_frag:sm,equirect_vert:rm,equirect_frag:am,linedashed_vert:om,linedashed_frag:cm,meshbasic_vert:lm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:dm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:xm,meshphong_frag:ym,meshphysical_vert:_m,meshphysical_frag:vm,meshtoon_vert:Mm,meshtoon_frag:bm,points_vert:wm,points_frag:Sm,shadow_vert:Em,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Rm},lt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Mn={basic:{uniforms:Be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Be([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Be([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Be([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Be([lt.points,lt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Be([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Be([lt.common,lt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Be([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Be([lt.sprite,lt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Be([lt.common,lt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Be([lt.lights,lt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Mn.physical={uniforms:Be([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var zr={r:0,b:0,g:0},vi=new Ce,Cm=new Zt;function Im(s,t,e,n,i,r,o){let a=new ft(0),c=r===!0?0:1,l,u,d=null,f=0,p=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function y(M){let b=!1,_=g(M);_===null?m(a,c):_&&_.isColor&&(m(_,1),b=!0);let U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,b){let _=g(b);_&&(_.isCubeTexture||_.mapping===_a)?(u===void 0&&(u=new Ft(new en(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:gs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),vi.copy(b.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(vi)),u.material.toneMapped=Qt.getTransfer(_.colorSpace)!==oe,(d!==_||f!==_.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ft(new nn(2,2),new Sn({name:"BackgroundMaterial",uniforms:gs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==oe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,b){M.getRGB(zr,Gh(s)),n.buffers.color.setClear(zr.r,zr.g,zr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),c=b,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:y,addToRenderList:x}}function Pm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(h,v,w,A,z){let N=!1,F=d(A,w,v);r!==F&&(r=F,l(r.object)),N=p(h,A,w,z),N&&g(h,A,w,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,_(h,v,w,A),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return s.createVertexArray()}function l(h){return s.bindVertexArray(h)}function u(h){return s.deleteVertexArray(h)}function d(h,v,w){let A=w.wireframe===!0,z=n[h.id];z===void 0&&(z={},n[h.id]=z);let N=z[v.id];N===void 0&&(N={},z[v.id]=N);let F=N[A];return F===void 0&&(F=f(c()),N[A]=F),F}function f(h){let v=[],w=[],A=[];for(let z=0;z<e;z++)v[z]=0,w[z]=0,A[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:w,attributeDivisors:A,object:h,attributes:{},index:null}}function p(h,v,w,A){let z=r.attributes,N=v.attributes,F=0,W=w.getAttributes();for(let V in W)if(W[V].location>=0){let K=z[V],dt=N[V];if(dt===void 0&&(V==="instanceMatrix"&&h.instanceMatrix&&(dt=h.instanceMatrix),V==="instanceColor"&&h.instanceColor&&(dt=h.instanceColor)),K===void 0||K.attribute!==dt||dt&&K.data!==dt.data)return!0;F++}return r.attributesNum!==F||r.index!==A}function g(h,v,w,A){let z={},N=v.attributes,F=0,W=w.getAttributes();for(let V in W)if(W[V].location>=0){let K=N[V];K===void 0&&(V==="instanceMatrix"&&h.instanceMatrix&&(K=h.instanceMatrix),V==="instanceColor"&&h.instanceColor&&(K=h.instanceColor));let dt={};dt.attribute=K,K&&K.data&&(dt.data=K.data),z[V]=dt,F++}r.attributes=z,r.attributesNum=F,r.index=A}function y(){let h=r.newAttributes;for(let v=0,w=h.length;v<w;v++)h[v]=0}function x(h){m(h,0)}function m(h,v){let w=r.newAttributes,A=r.enabledAttributes,z=r.attributeDivisors;w[h]=1,A[h]===0&&(s.enableVertexAttribArray(h),A[h]=1),z[h]!==v&&(s.vertexAttribDivisor(h,v),z[h]=v)}function M(){let h=r.newAttributes,v=r.enabledAttributes;for(let w=0,A=v.length;w<A;w++)v[w]!==h[w]&&(s.disableVertexAttribArray(w),v[w]=0)}function b(h,v,w,A,z,N,F){F===!0?s.vertexAttribIPointer(h,v,w,z,N):s.vertexAttribPointer(h,v,w,A,z,N)}function _(h,v,w,A){y();let z=A.attributes,N=w.getAttributes(),F=v.defaultAttributeValues;for(let W in N){let V=N[W];if(V.location>=0){let tt=z[W];if(tt===void 0&&(W==="instanceMatrix"&&h.instanceMatrix&&(tt=h.instanceMatrix),W==="instanceColor"&&h.instanceColor&&(tt=h.instanceColor)),tt!==void 0){let K=tt.normalized,dt=tt.itemSize,St=t.get(tt);if(St===void 0)continue;let Jt=St.buffer,Z=St.type,it=St.bytesPerElement,_t=Z===s.INT||Z===s.UNSIGNED_INT||tt.gpuType===Lc;if(tt.isInterleavedBufferAttribute){let ut=tt.data,zt=ut.stride,Ot=tt.offset;if(ut.isInstancedInterleavedBuffer){for(let Xt=0;Xt<V.locationSize;Xt++)m(V.location+Xt,ut.meshPerAttribute);h.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Xt=0;Xt<V.locationSize;Xt++)x(V.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let Xt=0;Xt<V.locationSize;Xt++)b(V.location+Xt,dt/V.locationSize,Z,K,zt*it,(Ot+dt/V.locationSize*Xt)*it,_t)}else{if(tt.isInstancedBufferAttribute){for(let ut=0;ut<V.locationSize;ut++)m(V.location+ut,tt.meshPerAttribute);h.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ut=0;ut<V.locationSize;ut++)x(V.location+ut);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let ut=0;ut<V.locationSize;ut++)b(V.location+ut,dt/V.locationSize,Z,K,dt*it,dt/V.locationSize*ut*it,_t)}}else if(F!==void 0){let K=F[W];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(V.location,K);break;case 3:s.vertexAttrib3fv(V.location,K);break;case 4:s.vertexAttrib4fv(V.location,K);break;default:s.vertexAttrib1fv(V.location,K)}}}}M()}function U(){D();for(let h in n){let v=n[h];for(let w in v){let A=v[w];for(let z in A)u(A[z].object),delete A[z];delete v[w]}delete n[h]}}function P(h){if(n[h.id]===void 0)return;let v=n[h.id];for(let w in v){let A=v[w];for(let z in A)u(A[z].object),delete A[z];delete v[w]}delete n[h.id]}function I(h){for(let v in n){let w=n[v];if(w[h.id]===void 0)continue;let A=w[h.id];for(let z in A)u(A[z].object),delete A[z];delete w[h.id]}}function D(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:x,disableUnusedAttributes:M}}function Dm(s,t,e){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(s.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];e.update(p,n,1)}function c(l,u,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function zm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==mn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let D=I===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Hn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==wn&&!D)}function c(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:U,maxSamples:P}}function Um(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ln,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,y=d.clipIntersection,x=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!x)r?u(null):l();else{let M=r?0:n,b=M*4,_=m.clippingState||null;c.value=_,_=u(g,f,b,p);for(let U=0;U!==b;++U)_[U]=e[U];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,p,g){let y=d!==null?d.length:0,x=null;if(y!==0){if(x=c.value,g!==!0||x===null){let m=p+y*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<m)&&(x=new Float32Array(m));for(let b=0,_=p;b!==y;++b,_+=4)o.copy(d[b]).applyMatrix4(M,a),o.normal.toArray(x,_),x[_+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}function Nm(s){let t=new WeakMap;function e(o,a){return a===Ro?o.mapping=ds:a===Co&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ro||a===Co)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new hc(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ta=class extends jr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},as=4,Kl=[.125,.215,.35,.446,.526,.582],Ei=20,ho=new ta,jl=new ft,uo=null,fo=0,po=0,mo=!1,bi=(1+Math.sqrt(5))/2,ss=1/bi,Ql=[new B(-bi,ss,0),new B(bi,ss,0),new B(-ss,0,bi),new B(ss,0,bi),new B(0,bi,-ss),new B(0,bi,ss),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],ea=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:nr,format:mn,colorSpace:_s,depthBuffer:!1},i=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(r)),this._blurMaterial=km(r,t,e)}return i}_compileMaterial(t){let e=new Ft(this._lodPlanes[0],t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,n,i){let a=new He(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(jl),u.toneMapping=ri,u.autoClear=!1;let p=new me({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new Ft(new en,p),y=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,y=!0):(p.color.copy(jl),y=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let b=this._cubeSize;Ur(i,M*b,m>2?b:0,b,b),u.setRenderTarget(i),y&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ds||t.mapping===fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ho)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ql[(i-r-1)%Ql.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ft(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),y=r/g,x=isFinite(r)?1+Math.floor(u*y):Ei;x>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ei}`);let m=[],M=0;for(let I=0;I<Ei;++I){let D=I/y,E=Math.exp(-D*D/2);m.push(E),I===0?M+=E:I<x&&(M+=2*E)}for(let I=0;I<m.length;I++)m[I]=m[I]/M;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let _=this._sizeLods[i],U=3*_*(i>b-as?i-b+as:0),P=4*(this._cubeSize-_);Ur(e,U,P,3*_,2*_),c.setRenderTarget(e),c.render(d,ho)}};function Fm(s){let t=[],e=[],n=[],i=s,r=s-as+1+Kl.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-as?c=Kl[o-s+as-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,x=2,m=1,M=new Float32Array(y*g*p),b=new Float32Array(x*g*p),_=new Float32Array(m*g*p);for(let P=0;P<p;P++){let I=P%3*2/3-1,D=P>2?0:-1,E=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];M.set(E,y*g*P),b.set(f,x*g*P);let h=[P,P,P,P,P,P];_.set(h,m*g*P)}let U=new he;U.setAttribute("position",new _e(M,y)),U.setAttribute("uv",new _e(b,x)),U.setAttribute("faceIndex",new _e(_,m)),t.push(U),i>as&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function th(s,t,e){let n=new Vn(s,t,e);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function km(s,t,e){let n=new Float32Array(Ei),i=new B(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function eh(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function nh(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ro||c===Co,u=c===ds||c===fs;if(l||u){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ea(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new ea(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Om(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bm(s,t,e,n){let i={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let x=0,m=y.length;x<m;x++)t.remove(y[x])}f.removeEventListener("dispose",o),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let y=p[g];for(let x=0,m=y.length;x<m;x++)t.update(y[x],s.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,g=d.attributes.position,y=0;if(p!==null){let M=p.array;y=p.version;for(let b=0,_=M.length;b<_;b+=3){let U=M[b+0],P=M[b+1],I=M[b+2];f.push(U,P,P,I,I,U)}}else if(g!==void 0){let M=g.array;y=g.version;for(let b=0,_=M.length/3-1;b<_;b+=3){let U=b+0,P=b+1,I=b+2;f.push(U,P,P,I,I,U)}}else return;let x=new(Hh(f)?Kr:Jr)(f,1);x.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,x)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Hm(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let x=0;for(let m=0;m<g;m++)x+=p[m];e.update(x,n,1)}function d(f,p,g,y){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<f.length;m++)l(f[m]/o,p[m],y[m]);else{x.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,g);let m=0;for(let M=0;M<g;M++)m+=p[M]*y[M];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Vm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Gm(s,t,e){let n=new WeakMap,i=new ve;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==d){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let _=a.attributes.position.count*b,U=1;_>t.maxTextureSize&&(U=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let P=new Float32Array(_*U*4*d),I=new Zr(P,_,U,d);I.type=wn,I.needsUpdate=!0;let D=b*4;for(let h=0;h<d;h++){let v=x[h],w=m[h],A=M[h],z=_*U*4*h;for(let N=0;N<v.count;N++){let F=N*D;p===!0&&(i.fromBufferAttribute(v,N),P[z+F+0]=i.x,P[z+F+1]=i.y,P[z+F+2]=i.z,P[z+F+3]=0),g===!0&&(i.fromBufferAttribute(w,N),P[z+F+4]=i.x,P[z+F+5]=i.y,P[z+F+6]=i.z,P[z+F+7]=0),y===!0&&(i.fromBufferAttribute(A,N),P[z+F+8]=i.x,P[z+F+9]=i.y,P[z+F+10]=i.z,P[z+F+11]=A.itemSize===4?i.w:1)}}f={count:d,texture:I,size:new qt(_,U)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Wm(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,d=t.get(c,u);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var na=class extends tn{constructor(t,e,n,i,r,o,a,c,l,u=cs){if(u!==cs&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cs&&(n=Ri),n===void 0&&u===ms&&(n=ps),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xh=new tn,ih=new na(1,1),qh=new Zr,Yh=new cc,$h=new Qr,sh=[],rh=[],ah=new Float32Array(16),oh=new Float32Array(9),ch=new Float32Array(4);function vs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=sh[i];if(r===void 0&&(r=new Float32Array(i),sh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ma(s,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Xm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function Ym(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function $m(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function Zm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;ch.set(n),s.uniformMatrix2fv(this.addr,!1,ch),Ee(e,n)}}function Jm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;oh.set(n),s.uniformMatrix3fv(this.addr,!1,oh),Ee(e,n)}}function Km(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;ah.set(n),s.uniformMatrix4fv(this.addr,!1,ah),Ee(e,n)}}function jm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function t0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function e0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function n0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function s0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function r0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function a0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ih.compareFunction=Bh,r=ih):r=Xh,e.setTexture2D(t||r,i)}function o0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yh,i)}function c0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$h,i)}function l0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qh,i)}function h0(s){switch(s){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return $m;case 35674:return Zm;case 35675:return Jm;case 35676:return Km;case 5124:case 35670:return jm;case 35667:case 35671:return Qm;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return l0}}function u0(s,t){s.uniform1fv(this.addr,t)}function d0(s,t){let e=vs(t,this.size,2);s.uniform2fv(this.addr,e)}function f0(s,t){let e=vs(t,this.size,3);s.uniform3fv(this.addr,e)}function p0(s,t){let e=vs(t,this.size,4);s.uniform4fv(this.addr,e)}function m0(s,t){let e=vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function g0(s,t){let e=vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function x0(s,t){let e=vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function y0(s,t){s.uniform1iv(this.addr,t)}function _0(s,t){s.uniform2iv(this.addr,t)}function v0(s,t){s.uniform3iv(this.addr,t)}function M0(s,t){s.uniform4iv(this.addr,t)}function b0(s,t){s.uniform1uiv(this.addr,t)}function w0(s,t){s.uniform2uiv(this.addr,t)}function S0(s,t){s.uniform3uiv(this.addr,t)}function E0(s,t){s.uniform4uiv(this.addr,t)}function T0(s,t,e){let n=this.cache,i=t.length,r=Ma(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Xh,r[o])}function A0(s,t,e){let n=this.cache,i=t.length,r=Ma(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Yh,r[o])}function R0(s,t,e){let n=this.cache,i=t.length,r=Ma(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||$h,r[o])}function C0(s,t,e){let n=this.cache,i=t.length,r=Ma(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||qh,r[o])}function I0(s){switch(s){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return x0;case 5124:case 35670:return y0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return M0;case 5125:return b0;case 36294:return w0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}var uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=h0(e.type)}},dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=I0(e.type)}},fc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},go=/(\w+)(\])?(\[|\.)?/g;function lh(s,t){s.seq.push(t),s.map[t.id]=t}function P0(s,t,e){let n=s.name,i=n.length;for(go.lastIndex=0;;){let r=go.exec(n),o=go.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){lh(e,l===void 0?new uc(a,s,t):new dc(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new fc(a),lh(e,d)),e=d}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);P0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function hh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var D0=37297,z0=0;function U0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var uh=new Gt;function N0(s){Qt._getMatrix(uh,Qt.workingColorSpace,s);let t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case va:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+U0(s.getShaderSource(t),o)}else return i}function F0(s,t){let e=N0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function k0(s,t){let e;switch(t){case od:e="Linear";break;case cd:e="Reinhard";break;case ld:e="Cineon";break;case hd:e="ACESFilmic";break;case dd:e="AgX";break;case fd:e="Neutral";break;case ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nr=new B;function L0(){Qt.getLuminanceCoefficients(Nr);let s=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function B0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function H0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Xs(s){return s!==""}function fh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(s){return s.replace(V0,W0)}var G0=new Map;function W0(s,t){let e=Wt[t];if(e===void 0){let n=G0.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}var X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(s){return s.replace(X0,q0)}function q0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function $0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ds:case fs:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function J0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ya:t="ENVMAP_BLENDING_MULTIPLY";break;case rd:t="ENVMAP_BLENDING_MIX";break;case ad:t="ENVMAP_BLENDING_ADD";break}return t}function K0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function j0(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Y0(e),l=$0(e),u=Z0(e),d=J0(e),f=K0(e),p=O0(e),g=B0(r),y=i.createProgram(),x,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`)):(x=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),m=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ri?k0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,F0("linearToOutputTexel",e.outputColorSpace),L0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),o=pc(o),o=fh(o,e),o=ph(o,e),a=pc(a),a=fh(a,e),a=ph(a,e),o=mh(o),a=mh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=M+x+o,_=M+m+a,U=hh(i,i.VERTEX_SHADER,b),P=hh(i,i.FRAGMENT_SHADER,_);i.attachShader(y,U),i.attachShader(y,P),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function I(v){if(s.debug.checkShaderErrors){let w=i.getProgramInfoLog(y).trim(),A=i.getShaderInfoLog(U).trim(),z=i.getShaderInfoLog(P).trim(),N=!0,F=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,U,P);else{let W=dh(i,U,"vertex"),V=dh(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+w+`
`+W+`
`+V)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(A===""||z==="")&&(F=!1);F&&(v.diagnostics={runnable:N,programLog:w,vertexShader:{log:A,prefix:x},fragmentShader:{log:z,prefix:m}})}i.deleteShader(U),i.deleteShader(P),D=new hs(i,y),E=H0(i,y)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let h=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return h===!1&&(h=i.getProgramParameter(y,D0)),h},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=P,this}var Q0=0,mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gc(t),e.set(t,n)),n}},gc=class{constructor(t){this.id=Q0++,this.code=t,this.usedTimes=0}};function tg(s,t,e,n,i,r,o){let a=new Zs,c=new mc,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return l.add(E),E===0?"uv":`uv${E}`}function x(E,h,v,w,A){let z=w.fog,N=A.geometry,F=E.isMeshStandardMaterial?w.environment:null,W=(E.isMeshStandardMaterial?e:t).get(E.envMap||F),V=W&&W.mapping===_a?W.image.height:null,tt=g[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,dt=K!==void 0?K.length:0,St=0;N.morphAttributes.position!==void 0&&(St=1),N.morphAttributes.normal!==void 0&&(St=2),N.morphAttributes.color!==void 0&&(St=3);let Jt,Z,it,_t;if(tt){let Kt=Mn[tt];Jt=Kt.vertexShader,Z=Kt.fragmentShader}else Jt=E.vertexShader,Z=E.fragmentShader,c.update(E),it=c.getVertexShaderID(E),_t=c.getFragmentShaderID(E);let ut=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),Ot=A.isInstancedMesh===!0,Xt=A.isBatchedMesh===!0,re=!!E.map,Yt=!!E.matcap,ge=!!W,L=!!E.aoMap,De=!!E.lightMap,Et=!!E.bumpMap,Pt=!!E.normalMap,Rt=!!E.displacementMap,ne=!!E.emissiveMap,Tt=!!E.metalnessMap,C=!!E.roughnessMap,S=E.anisotropy>0,G=E.clearcoat>0,Q=E.dispersion>0,et=E.iridescence>0,$=E.sheen>0,vt=E.transmission>0,ct=S&&!!E.anisotropyMap,gt=G&&!!E.clearcoatMap,Ct=G&&!!E.clearcoatNormalMap,nt=G&&!!E.clearcoatRoughnessMap,xt=et&&!!E.iridescenceMap,It=et&&!!E.iridescenceThicknessMap,Nt=$&&!!E.sheenColorMap,yt=$&&!!E.sheenRoughnessMap,$t=!!E.specularMap,kt=!!E.specularColorMap,ae=!!E.specularIntensityMap,k=vt&&!!E.transmissionMap,ht=vt&&!!E.thicknessMap,Y=!!E.gradientMap,j=!!E.alphaMap,at=E.alphaTest>0,ot=!!E.alphaHash,Dt=!!E.extensions,ce=ri;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ce=s.toneMapping);let Me={shaderID:tt,shaderType:E.type,shaderName:E.name,vertexShader:Jt,fragmentShader:Z,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Xt,batchingColor:Xt&&A._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&A.instanceColor!==null,instancingMorph:Ot&&A.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:_s,alphaToCoverage:!!E.alphaToCoverage,map:re,matcap:Yt,envMap:ge,envMapMode:ge&&W.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:De,bumpMap:Et,normalMap:Pt,displacementMap:f&&Rt,emissiveMap:ne,normalMapObjectSpace:Pt&&E.normalMapType===xd,normalMapTangentSpace:Pt&&E.normalMapType===Xc,metalnessMap:Tt,roughnessMap:C,anisotropy:S,anisotropyMap:ct,clearcoat:G,clearcoatMap:gt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:nt,dispersion:Q,iridescence:et,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:$,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:$t,specularColorMap:kt,specularIntensityMap:ae,transmission:vt,transmissionMap:k,thicknessMap:ht,gradientMap:Y,opaque:E.transparent===!1&&E.blending===os&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:at,alphaHash:ot,combine:E.combine,mapUv:re&&y(E.map.channel),aoMapUv:L&&y(E.aoMap.channel),lightMapUv:De&&y(E.lightMap.channel),bumpMapUv:Et&&y(E.bumpMap.channel),normalMapUv:Pt&&y(E.normalMap.channel),displacementMapUv:Rt&&y(E.displacementMap.channel),emissiveMapUv:ne&&y(E.emissiveMap.channel),metalnessMapUv:Tt&&y(E.metalnessMap.channel),roughnessMapUv:C&&y(E.roughnessMap.channel),anisotropyMapUv:ct&&y(E.anisotropyMap.channel),clearcoatMapUv:gt&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:It&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:yt&&y(E.sheenRoughnessMap.channel),specularMapUv:$t&&y(E.specularMap.channel),specularColorMapUv:kt&&y(E.specularColorMap.channel),specularIntensityMapUv:ae&&y(E.specularIntensityMap.channel),transmissionMapUv:k&&y(E.transmissionMap.channel),thicknessMapUv:ht&&y(E.thicknessMap.channel),alphaMapUv:j&&y(E.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Pt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!N.attributes.uv&&(re||j),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:zt,skinning:A.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:St,numDirLights:h.directional.length,numPointLights:h.point.length,numSpotLights:h.spot.length,numSpotLightMaps:h.spotLightMap.length,numRectAreaLights:h.rectArea.length,numHemiLights:h.hemi.length,numDirLightShadows:h.directionalShadowMap.length,numPointLightShadows:h.pointShadowMap.length,numSpotLightShadows:h.spotShadowMap.length,numSpotLightShadowsWithMaps:h.numSpotLightShadowsWithMaps,numLightProbes:h.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&v.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:re&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===oe,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(E.emissiveMap.colorSpace)===oe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ye,flipSided:E.side===Ne,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(E){let h=[];if(E.shaderID?h.push(E.shaderID):(h.push(E.customVertexShaderID),h.push(E.customFragmentShaderID)),E.defines!==void 0)for(let v in E.defines)h.push(v),h.push(E.defines[v]);return E.isRawShaderMaterial===!1&&(M(h,E),b(h,E),h.push(s.outputColorSpace)),h.push(E.customProgramCacheKey),h.join()}function M(E,h){E.push(h.precision),E.push(h.outputColorSpace),E.push(h.envMapMode),E.push(h.envMapCubeUVHeight),E.push(h.mapUv),E.push(h.alphaMapUv),E.push(h.lightMapUv),E.push(h.aoMapUv),E.push(h.bumpMapUv),E.push(h.normalMapUv),E.push(h.displacementMapUv),E.push(h.emissiveMapUv),E.push(h.metalnessMapUv),E.push(h.roughnessMapUv),E.push(h.anisotropyMapUv),E.push(h.clearcoatMapUv),E.push(h.clearcoatNormalMapUv),E.push(h.clearcoatRoughnessMapUv),E.push(h.iridescenceMapUv),E.push(h.iridescenceThicknessMapUv),E.push(h.sheenColorMapUv),E.push(h.sheenRoughnessMapUv),E.push(h.specularMapUv),E.push(h.specularColorMapUv),E.push(h.specularIntensityMapUv),E.push(h.transmissionMapUv),E.push(h.thicknessMapUv),E.push(h.combine),E.push(h.fogExp2),E.push(h.sizeAttenuation),E.push(h.morphTargetsCount),E.push(h.morphAttributeCount),E.push(h.numDirLights),E.push(h.numPointLights),E.push(h.numSpotLights),E.push(h.numSpotLightMaps),E.push(h.numHemiLights),E.push(h.numRectAreaLights),E.push(h.numDirLightShadows),E.push(h.numPointLightShadows),E.push(h.numSpotLightShadows),E.push(h.numSpotLightShadowsWithMaps),E.push(h.numLightProbes),E.push(h.shadowMapType),E.push(h.toneMapping),E.push(h.numClippingPlanes),E.push(h.numClipIntersection),E.push(h.depthPacking)}function b(E,h){a.disableAll(),h.supportsVertexTextures&&a.enable(0),h.instancing&&a.enable(1),h.instancingColor&&a.enable(2),h.instancingMorph&&a.enable(3),h.matcap&&a.enable(4),h.envMap&&a.enable(5),h.normalMapObjectSpace&&a.enable(6),h.normalMapTangentSpace&&a.enable(7),h.clearcoat&&a.enable(8),h.iridescence&&a.enable(9),h.alphaTest&&a.enable(10),h.vertexColors&&a.enable(11),h.vertexAlphas&&a.enable(12),h.vertexUv1s&&a.enable(13),h.vertexUv2s&&a.enable(14),h.vertexUv3s&&a.enable(15),h.vertexTangents&&a.enable(16),h.anisotropy&&a.enable(17),h.alphaHash&&a.enable(18),h.batching&&a.enable(19),h.dispersion&&a.enable(20),h.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),h.fog&&a.enable(0),h.useFog&&a.enable(1),h.flatShading&&a.enable(2),h.logarithmicDepthBuffer&&a.enable(3),h.reverseDepthBuffer&&a.enable(4),h.skinning&&a.enable(5),h.morphTargets&&a.enable(6),h.morphNormals&&a.enable(7),h.morphColors&&a.enable(8),h.premultipliedAlpha&&a.enable(9),h.shadowMapEnabled&&a.enable(10),h.doubleSided&&a.enable(11),h.flipSided&&a.enable(12),h.useDepthPacking&&a.enable(13),h.dithering&&a.enable(14),h.transmission&&a.enable(15),h.sheen&&a.enable(16),h.opaque&&a.enable(17),h.pointsUvs&&a.enable(18),h.decodeVideoTexture&&a.enable(19),h.decodeVideoTextureEmissive&&a.enable(20),h.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){let h=g[E.type],v;if(h){let w=Mn[h];v=Gd.clone(w.uniforms)}else v=E.uniforms;return v}function U(E,h){let v;for(let w=0,A=u.length;w<A;w++){let z=u[w];if(z.cacheKey===h){v=z,++v.usedTimes;break}}return v===void 0&&(v=new j0(s,h,E,r),u.push(v)),v}function P(E){if(--E.usedTimes===0){let h=u.indexOf(E);u[h]=u[u.length-1],u.pop(),E.destroy()}}function I(E){c.remove(E)}function D(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:_,acquireProgram:U,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:D}}function eg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ng(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function xh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,f,p,g,y,x){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:x},s[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=y,m.group=x),t++,m}function a(d,f,p,g,y,x){let m=o(d,f,p,g,y,x);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function c(d,f,p,g,y,x){let m=o(d,f,p,g,y,x);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function l(d,f){e.length>1&&e.sort(d||ng),n.length>1&&n.sort(f||xh),i.length>1&&i.sort(f||xh)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function ig(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new yh,s.set(n,[o])):i>=r.length?(o=new yh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function sg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new ft};break;case"SpotLight":e={position:new B,direction:new B,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function rg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ag=0;function og(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cg(s){let t=new sg,e=rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let i=new B,r=new Zt,o=new Zt;function a(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,y=0,x=0,m=0,M=0,b=0,_=0,U=0,P=0,I=0;l.sort(og);for(let E=0,h=l.length;E<h;E++){let v=l[E],w=v.color,A=v.intensity,z=v.distance,N=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)u+=w.r*A,d+=w.g*A,f+=w.b*A;else if(v.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(v.sh.coefficients[F],A);I++}else if(v.isDirectionalLight){let F=t.get(v);if(F.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let W=v.shadow,V=e.get(v);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=N,n.directionalShadowMatrix[p]=v.shadow.matrix,M++}n.directional[p]=F,p++}else if(v.isSpotLight){let F=t.get(v);F.position.setFromMatrixPosition(v.matrixWorld),F.color.copy(w).multiplyScalar(A),F.distance=z,F.coneCos=Math.cos(v.angle),F.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),F.decay=v.decay,n.spot[y]=F;let W=v.shadow;if(v.map&&(n.spotLightMap[U]=v.map,U++,W.updateMatrices(v),v.castShadow&&P++),n.spotLightMatrix[y]=W.matrix,v.castShadow){let V=e.get(v);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=N,_++}y++}else if(v.isRectAreaLight){let F=t.get(v);F.color.copy(w).multiplyScalar(A),F.halfWidth.set(v.width*.5,0,0),F.halfHeight.set(0,v.height*.5,0),n.rectArea[x]=F,x++}else if(v.isPointLight){let F=t.get(v);if(F.color.copy(v.color).multiplyScalar(v.intensity),F.distance=v.distance,F.decay=v.decay,v.castShadow){let W=v.shadow,V=e.get(v);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=v.shadow.matrix,b++}n.point[g]=F,g++}else if(v.isHemisphereLight){let F=t.get(v);F.skyColor.copy(v.color).multiplyScalar(A),F.groundColor.copy(v.groundColor).multiplyScalar(A),n.hemi[m]=F,m++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==x||D.hemiLength!==m||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==_||D.numSpotMaps!==U||D.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=x,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,D.directionalLength=p,D.pointLength=g,D.spotLength=y,D.rectAreaLength=x,D.hemiLength=m,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=_,D.numSpotMaps=U,D.numLightProbes=I,n.version=ag++)}function c(l,u){let d=0,f=0,p=0,g=0,y=0,x=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){let b=l[m];if(b.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(x),d++}else if(b.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(x),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(x),p++}else if(b.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(x),o.identity(),r.copy(b.matrixWorld),r.premultiply(x),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(x),f++}else if(b.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(x),y++}}}return{setup:a,setupView:c,state:n}}function _h(s){let t=new cg(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function lg(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new _h(s),t.set(i,[a])):r>=o.length?(a=new _h(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var xc=class extends Wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yc=class extends Wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dg(s,t,e){let n=new Js,i=new qt,r=new qt,o=new ve,a=new xc({depthPacking:gd}),c=new yc,l={},u=e.maxTextureSize,d={[ai]:Ne,[Ne]:ai,[ye]:ye},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:hg,fragmentShader:ug}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ft(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let m=this.type;this.render=function(P,I,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;let E=s.getRenderTarget(),h=s.getActiveCubeFace(),v=s.getActiveMipmapLevel(),w=s.state;w.setBlending(si),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let A=m!==kn&&this.type===kn,z=m===kn&&this.type!==kn;for(let N=0,F=P.length;N<F;N++){let W=P[N],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let tt=V.getFrameExtents();if(i.multiply(tt),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/tt.x),i.x=r.x*tt.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/tt.y),i.y=r.y*tt.y,V.mapSize.y=r.y)),V.map===null||A===!0||z===!0){let dt=this.type!==kn?{minFilter:Qe,magFilter:Qe}:{};V.map!==null&&V.map.dispose(),V.map=new Vn(i.x,i.y,dt),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let K=V.getViewportCount();for(let dt=0;dt<K;dt++){let St=V.getViewport(dt);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),w.viewport(o),V.updateMatrices(W,dt),n=V.getFrustum(),_(I,D,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===kn&&M(V,D),V.needsUpdate=!1}m=this.type,x.needsUpdate=!1,s.setRenderTarget(E,h,v)};function M(P,I){let D=t.update(y);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Vn(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(I,null,D,f,y,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(I,null,D,p,y,null)}function b(P,I,D,E){let h=null,v=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(v!==void 0)h=v;else if(h=D.isPointLight===!0?c:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let w=h.uuid,A=I.uuid,z=l[w];z===void 0&&(z={},l[w]=z);let N=z[A];N===void 0&&(N=h.clone(),z[A]=N,I.addEventListener("dispose",U)),h=N}if(h.visible=I.visible,h.wireframe=I.wireframe,E===kn?h.side=I.shadowSide!==null?I.shadowSide:I.side:h.side=I.shadowSide!==null?I.shadowSide:d[I.side],h.alphaMap=I.alphaMap,h.alphaTest=I.alphaTest,h.map=I.map,h.clipShadows=I.clipShadows,h.clippingPlanes=I.clippingPlanes,h.clipIntersection=I.clipIntersection,h.displacementMap=I.displacementMap,h.displacementScale=I.displacementScale,h.displacementBias=I.displacementBias,h.wireframeLinewidth=I.wireframeLinewidth,h.linewidth=I.linewidth,D.isPointLight===!0&&h.isMeshDistanceMaterial===!0){let w=s.properties.get(h);w.light=D}return h}function _(P,I,D,E,h){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&h===kn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);let A=t.update(P),z=P.material;if(Array.isArray(z)){let N=A.groups;for(let F=0,W=N.length;F<W;F++){let V=N[F],tt=z[V.materialIndex];if(tt&&tt.visible){let K=b(P,tt,E,h);P.onBeforeShadow(s,P,I,D,A,K,V),s.renderBufferDirect(D,null,A,K,P,V),P.onAfterShadow(s,P,I,D,A,K,V)}}}else if(z.visible){let N=b(P,z,E,h);P.onBeforeShadow(s,P,I,D,A,N,null),s.renderBufferDirect(D,null,A,N,P,null),P.onAfterShadow(s,P,I,D,A,N,null)}}let w=P.children;for(let A=0,z=w.length;A<z;A++)_(w[A],I,D,E,h)}function U(P){P.target.removeEventListener("dispose",U);for(let D in l){let E=l[D],h=P.target.uuid;h in E&&(E[h].dispose(),delete E[h])}}}var fg={[Mo]:bo,[wo]:To,[So]:Ao,[us]:Eo,[bo]:Mo,[To]:wo,[Ao]:So,[Eo]:us};function pg(s,t){function e(){let k=!1,ht=new ve,Y=null,j=new ve(0,0,0,0);return{setMask:function(at){Y!==at&&!k&&(s.colorMask(at,at,at,at),Y=at)},setLocked:function(at){k=at},setClear:function(at,ot,Dt,ce,Me){Me===!0&&(at*=ce,ot*=ce,Dt*=ce),ht.set(at,ot,Dt,ce),j.equals(ht)===!1&&(s.clearColor(at,ot,Dt,ce),j.copy(ht))},reset:function(){k=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let k=!1,ht=!1,Y=null,j=null,at=null;return{setReversed:function(ot){if(ht!==ot){let Dt=t.get("EXT_clip_control");ht?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let ce=at;at=null,this.setClear(ce)}ht=ot},getReversed:function(){return ht},setTest:function(ot){ot?ut(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(ot){Y!==ot&&!k&&(s.depthMask(ot),Y=ot)},setFunc:function(ot){if(ht&&(ot=fg[ot]),j!==ot){switch(ot){case Mo:s.depthFunc(s.NEVER);break;case bo:s.depthFunc(s.ALWAYS);break;case wo:s.depthFunc(s.LESS);break;case us:s.depthFunc(s.LEQUAL);break;case So:s.depthFunc(s.EQUAL);break;case Eo:s.depthFunc(s.GEQUAL);break;case To:s.depthFunc(s.GREATER);break;case Ao:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ot}},setLocked:function(ot){k=ot},setClear:function(ot){at!==ot&&(ht&&(ot=1-ot),s.clearDepth(ot),at=ot)},reset:function(){k=!1,Y=null,j=null,at=null,ht=!1}}}function i(){let k=!1,ht=null,Y=null,j=null,at=null,ot=null,Dt=null,ce=null,Me=null;return{setTest:function(Kt){k||(Kt?ut(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(Kt){ht!==Kt&&!k&&(s.stencilMask(Kt),ht=Kt)},setFunc:function(Kt,Oe,Ze){(Y!==Kt||j!==Oe||at!==Ze)&&(s.stencilFunc(Kt,Oe,Ze),Y=Kt,j=Oe,at=Ze)},setOp:function(Kt,Oe,Ze){(ot!==Kt||Dt!==Oe||ce!==Ze)&&(s.stencilOp(Kt,Oe,Ze),ot=Kt,Dt=Oe,ce=Ze)},setLocked:function(Kt){k=Kt},setClear:function(Kt){Me!==Kt&&(s.clearStencil(Kt),Me=Kt)},reset:function(){k=!1,ht=null,Y=null,j=null,at=null,ot=null,Dt=null,ce=null,Me=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,y=!1,x=null,m=null,M=null,b=null,_=null,U=null,P=null,I=new ft(0,0,0),D=0,E=!1,h=null,v=null,w=null,A=null,z=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,W=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=W>=2);let tt=null,K={},dt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),Jt=new ve().fromArray(dt),Z=new ve().fromArray(St);function it(k,ht,Y,j){let at=new Uint8Array(4),ot=s.createTexture();s.bindTexture(k,ot),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<Y;Dt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(ht+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return ot}let _t={};_t[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(s.DEPTH_TEST),o.setFunc(us),Et(!1),Pt(Ml),ut(s.CULL_FACE),L(si);function ut(k){u[k]!==!0&&(s.enable(k),u[k]=!0)}function zt(k){u[k]!==!1&&(s.disable(k),u[k]=!1)}function Ot(k,ht){return d[k]!==ht?(s.bindFramebuffer(k,ht),d[k]=ht,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ht),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Xt(k,ht){let Y=p,j=!1;if(k){Y=f.get(ht),Y===void 0&&(Y=[],f.set(ht,Y));let at=k.textures;if(Y.length!==at.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Dt=at.length;ot<Dt;ot++)Y[ot]=s.COLOR_ATTACHMENT0+ot;Y.length=at.length,j=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,j=!0);j&&s.drawBuffers(Y)}function re(k){return g!==k?(s.useProgram(k),g=k,!0):!1}let Yt={[wi]:s.FUNC_ADD,[Vu]:s.FUNC_SUBTRACT,[Gu]:s.FUNC_REVERSE_SUBTRACT};Yt[Wu]=s.MIN,Yt[Xu]=s.MAX;let ge={[qu]:s.ZERO,[Yu]:s.ONE,[$u]:s.SRC_COLOR,[_o]:s.SRC_ALPHA,[td]:s.SRC_ALPHA_SATURATE,[ju]:s.DST_COLOR,[Ju]:s.DST_ALPHA,[Zu]:s.ONE_MINUS_SRC_COLOR,[vo]:s.ONE_MINUS_SRC_ALPHA,[Qu]:s.ONE_MINUS_DST_COLOR,[Ku]:s.ONE_MINUS_DST_ALPHA,[ed]:s.CONSTANT_COLOR,[nd]:s.ONE_MINUS_CONSTANT_COLOR,[id]:s.CONSTANT_ALPHA,[sd]:s.ONE_MINUS_CONSTANT_ALPHA};function L(k,ht,Y,j,at,ot,Dt,ce,Me,Kt){if(k===si){y===!0&&(zt(s.BLEND),y=!1);return}if(y===!1&&(ut(s.BLEND),y=!0),k!==Hu){if(k!==x||Kt!==E){if((m!==wi||_!==wi)&&(s.blendEquation(s.FUNC_ADD),m=wi,_=wi),Kt)switch(k){case os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bl:s.blendFunc(s.ONE,s.ONE);break;case wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,b=null,U=null,P=null,I.set(0,0,0),D=0,x=k,E=Kt}return}at=at||ht,ot=ot||Y,Dt=Dt||j,(ht!==m||at!==_)&&(s.blendEquationSeparate(Yt[ht],Yt[at]),m=ht,_=at),(Y!==M||j!==b||ot!==U||Dt!==P)&&(s.blendFuncSeparate(ge[Y],ge[j],ge[ot],ge[Dt]),M=Y,b=j,U=ot,P=Dt),(ce.equals(I)===!1||Me!==D)&&(s.blendColor(ce.r,ce.g,ce.b,Me),I.copy(ce),D=Me),x=k,E=!1}function De(k,ht){k.side===ye?zt(s.CULL_FACE):ut(s.CULL_FACE);let Y=k.side===Ne;ht&&(Y=!Y),Et(Y),k.blending===os&&k.transparent===!1?L(si):L(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let j=k.stencilWrite;a.setTest(j),j&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(k){h!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),h=k)}function Pt(k){k!==Ou?(ut(s.CULL_FACE),k!==v&&(k===Ml?s.cullFace(s.BACK):k===Bu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),v=k}function Rt(k){k!==w&&(F&&s.lineWidth(k),w=k)}function ne(k,ht,Y){k?(ut(s.POLYGON_OFFSET_FILL),(A!==ht||z!==Y)&&(s.polygonOffset(ht,Y),A=ht,z=Y)):zt(s.POLYGON_OFFSET_FILL)}function Tt(k){k?ut(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function C(k){k===void 0&&(k=s.TEXTURE0+N-1),tt!==k&&(s.activeTexture(k),tt=k)}function S(k,ht,Y){Y===void 0&&(tt===null?Y=s.TEXTURE0+N-1:Y=tt);let j=K[Y];j===void 0&&(j={type:void 0,texture:void 0},K[Y]=j),(j.type!==k||j.texture!==ht)&&(tt!==Y&&(s.activeTexture(Y),tt=Y),s.bindTexture(k,ht||_t[k]),j.type=k,j.texture=ht)}function G(){let k=K[tt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(k){Jt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Jt.copy(k))}function yt(k){Z.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Z.copy(k))}function $t(k,ht){let Y=l.get(ht);Y===void 0&&(Y=new WeakMap,l.set(ht,Y));let j=Y.get(k);j===void 0&&(j=s.getUniformBlockIndex(ht,k.name),Y.set(k,j))}function kt(k,ht){let j=l.get(ht).get(k);c.get(ht)!==j&&(s.uniformBlockBinding(ht,j,k.__bindingPointIndex),c.set(ht,j))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},tt=null,K={},d={},f=new WeakMap,p=[],g=null,y=!1,x=null,m=null,M=null,b=null,_=null,U=null,P=null,I=new ft(0,0,0),D=0,E=!1,h=null,v=null,w=null,A=null,z=null,Jt.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:zt,bindFramebuffer:Ot,drawBuffers:Xt,useProgram:re,setBlending:L,setMaterial:De,setFlipSided:Et,setCullFace:Pt,setLineWidth:Rt,setPolygonOffset:ne,setScissorTest:Tt,activeTexture:C,bindTexture:S,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:xt,texImage3D:It,updateUBOMapping:$t,uniformBlockBinding:kt,texStorage2D:Ct,texStorage3D:nt,texSubImage2D:$,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Nt,viewport:yt,reset:ae}}function vh(s,t,e,n){let i=mg(n);switch(e){case Uh:return s*t;case Fh:return s*t;case kh:return s*t*2;case Hc:return s*t/i.components*i.byteLength;case Vc:return s*t/i.components*i.byteLength;case Lh:return s*t*2/i.components*i.byteLength;case Gc:return s*t*2/i.components*i.byteLength;case Nh:return s*t*3/i.components*i.byteLength;case mn:return s*t*4/i.components*i.byteLength;case Wc:return s*t*4/i.components*i.byteLength;case Br:case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zo:case No:return Math.max(s,16)*Math.max(t,8)/4;case Do:case Uo:return Math.max(s,8)*Math.max(t,8)/2;case Fo:case ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case qo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case jo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Wr:case Qo:case tc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Oh:case ec:return Math.ceil(s/4)*Math.ceil(t/4)*8;case nc:case ic:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mg(s){switch(s){case Hn:case Ph:return{byteLength:1,components:1};case Ys:case Dh:case nr:return{byteLength:2,components:1};case Oc:case Bc:return{byteLength:2,components:4};case Ri:case Lc:case wn:return{byteLength:4,components:1};case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function gg(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):Yr("canvas")}function y(C,S,G){let Q=1,et=Tt(C);if((et.width>G||et.height>G)&&(Q=G/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let $=Math.floor(Q*et.width),vt=Math.floor(Q*et.height);d===void 0&&(d=g($,vt));let ct=S?g($,vt):d;return ct.width=$,ct.height=vt,ct.getContext("2d").drawImage(C,0,0,$,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+$+"x"+vt+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function x(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(C,S,G,Q,et=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=S;if(S===s.RED&&(G===s.FLOAT&&($=s.R32F),G===s.HALF_FLOAT&&($=s.R16F),G===s.UNSIGNED_BYTE&&($=s.R8)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.R8UI),G===s.UNSIGNED_SHORT&&($=s.R16UI),G===s.UNSIGNED_INT&&($=s.R32UI),G===s.BYTE&&($=s.R8I),G===s.SHORT&&($=s.R16I),G===s.INT&&($=s.R32I)),S===s.RG&&(G===s.FLOAT&&($=s.RG32F),G===s.HALF_FLOAT&&($=s.RG16F),G===s.UNSIGNED_BYTE&&($=s.RG8)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RG8UI),G===s.UNSIGNED_SHORT&&($=s.RG16UI),G===s.UNSIGNED_INT&&($=s.RG32UI),G===s.BYTE&&($=s.RG8I),G===s.SHORT&&($=s.RG16I),G===s.INT&&($=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGB8UI),G===s.UNSIGNED_SHORT&&($=s.RGB16UI),G===s.UNSIGNED_INT&&($=s.RGB32UI),G===s.BYTE&&($=s.RGB8I),G===s.SHORT&&($=s.RGB16I),G===s.INT&&($=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGBA8UI),G===s.UNSIGNED_SHORT&&($=s.RGBA16UI),G===s.UNSIGNED_INT&&($=s.RGBA32UI),G===s.BYTE&&($=s.RGBA8I),G===s.SHORT&&($=s.RGBA16I),G===s.INT&&($=s.RGBA32I)),S===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),S===s.RGBA){let vt=et?va:Qt.getTransfer(Q);G===s.FLOAT&&($=s.RGBA32F),G===s.HALF_FLOAT&&($=s.RGBA16F),G===s.UNSIGNED_BYTE&&($=vt===oe?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(C,S){let G;return C?S===null||S===Ri||S===ps?G=s.DEPTH24_STENCIL8:S===wn?G=s.DEPTH32F_STENCIL8:S===Ys&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ri||S===ps?G=s.DEPTH_COMPONENT24:S===wn?G=s.DEPTH_COMPONENT32F:S===Ys&&(G=s.DEPTH_COMPONENT16),G}function U(C,S){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){let S=C.target;S.removeEventListener("dispose",P),D(S),S.isVideoTexture&&u.delete(S)}function I(C){let S=C.target;S.removeEventListener("dispose",I),h(S)}function D(C){let S=n.get(C);if(S.__webglInit===void 0)return;let G=C.source,Q=f.get(G);if(Q){let et=Q[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(C),Object.keys(Q).length===0&&f.delete(G)}n.remove(C)}function E(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let G=C.source,Q=f.get(G);delete Q[S.__cacheKey],o.memory.textures--}function h(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let et=0;et<S.__webglFramebuffer[Q].length;et++)s.deleteFramebuffer(S.__webglFramebuffer[Q][et]);else s.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[Q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=C.textures;for(let Q=0,et=G.length;Q<et;Q++){let $=n.get(G[Q]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(C)}let v=0;function w(){v=0}function A(){let C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function z(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function N(C,S){let G=n.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,C,S);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function F(C,S){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Z(G,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function W(C,S){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Z(G,C,S);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function V(C,S){let G=n.get(C);if(C.version>0&&G.__version!==C.version){it(G,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}let tt={[Io]:s.REPEAT,[Ti]:s.CLAMP_TO_EDGE,[Po]:s.MIRRORED_REPEAT},K={[Qe]:s.NEAREST,[pd]:s.NEAREST_MIPMAP_NEAREST,[mr]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[Ba]:s.LINEAR_MIPMAP_NEAREST,[Ai]:s.LINEAR_MIPMAP_LINEAR},dt={[yd]:s.NEVER,[Sd]:s.ALWAYS,[_d]:s.LESS,[Bh]:s.LEQUAL,[vd]:s.EQUAL,[wd]:s.GEQUAL,[Md]:s.GREATER,[bd]:s.NOTEQUAL};function St(C,S){if(S.type===wn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===Ba||S.magFilter===mr||S.magFilter===Ai||S.minFilter===bn||S.minFilter===Ba||S.minFilter===mr||S.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,tt[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,tt[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,tt[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,K[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,dt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qe||S.minFilter!==mr&&S.minFilter!==Ai||S.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Jt(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));let Q=S.source,et=f.get(Q);et===void 0&&(et={},f.set(Q,et));let $=z(S);if($!==C.__cacheKey){et[$]===void 0&&(et[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[$].usedTimes++;let vt=et[C.__cacheKey];vt!==void 0&&(et[C.__cacheKey].usedTimes--,vt.usedTimes===0&&E(S)),C.__cacheKey=$,C.__webglTexture=et[$].texture}return G}function Z(C,S,G){let Q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=s.TEXTURE_3D);let et=Jt(C,S),$=S.source;e.bindTexture(Q,C.__webglTexture,s.TEXTURE0+G);let vt=n.get($);if($.version!==vt.__version||et===!0){e.activeTexture(s.TEXTURE0+G);let ct=Qt.getPrimaries(Qt.workingColorSpace),gt=S.colorSpace===ii?null:Qt.getPrimaries(S.colorSpace),Ct=S.colorSpace===ii||ct===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let nt=y(S.image,!1,i.maxTextureSize);nt=ne(S,nt);let xt=r.convert(S.format,S.colorSpace),It=r.convert(S.type),Nt=b(S.internalFormat,xt,It,S.colorSpace,S.isVideoTexture);St(Q,S);let yt,$t=S.mipmaps,kt=S.isVideoTexture!==!0,ae=vt.__version===void 0||et===!0,k=$.dataReady,ht=U(S,nt);if(S.isDepthTexture)Nt=_(S.format===ms,S.type),ae&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Nt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Nt,nt.width,nt.height,0,xt,It,null));else if(S.isDataTexture)if($t.length>0){kt&&ae&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,$t[0].width,$t[0].height);for(let Y=0,j=$t.length;Y<j;Y++)yt=$t[Y],kt?k&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,yt.width,yt.height,xt,It,yt.data):e.texImage2D(s.TEXTURE_2D,Y,Nt,yt.width,yt.height,0,xt,It,yt.data);S.generateMipmaps=!1}else kt?(ae&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,nt.width,nt.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,xt,It,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,nt.width,nt.height,0,xt,It,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Nt,$t[0].width,$t[0].height,nt.depth);for(let Y=0,j=$t.length;Y<j;Y++)if(yt=$t[Y],S.format!==mn)if(xt!==null)if(kt){if(k)if(S.layerUpdates.size>0){let at=vh(yt.width,yt.height,S.format,S.type);for(let ot of S.layerUpdates){let Dt=yt.data.subarray(ot*at/yt.data.BYTES_PER_ELEMENT,(ot+1)*at/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ot,yt.width,yt.height,1,xt,Dt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,nt.depth,xt,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Nt,yt.width,yt.height,nt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,nt.depth,xt,It,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Nt,yt.width,yt.height,nt.depth,0,xt,It,yt.data)}else{kt&&ae&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,$t[0].width,$t[0].height);for(let Y=0,j=$t.length;Y<j;Y++)yt=$t[Y],S.format!==mn?xt!==null?kt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Nt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?k&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,yt.width,yt.height,xt,It,yt.data):e.texImage2D(s.TEXTURE_2D,Y,Nt,yt.width,yt.height,0,xt,It,yt.data)}else if(S.isDataArrayTexture)if(kt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Nt,nt.width,nt.height,nt.depth),k)if(S.layerUpdates.size>0){let Y=vh(nt.width,nt.height,S.format,S.type);for(let j of S.layerUpdates){let at=nt.data.subarray(j*Y/nt.data.BYTES_PER_ELEMENT,(j+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,xt,It,at)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,It,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,nt.width,nt.height,nt.depth,0,xt,It,nt.data);else if(S.isData3DTexture)kt?(ae&&e.texStorage3D(s.TEXTURE_3D,ht,Nt,nt.width,nt.height,nt.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,It,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,nt.width,nt.height,nt.depth,0,xt,It,nt.data);else if(S.isFramebufferTexture){if(ae)if(kt)e.texStorage2D(s.TEXTURE_2D,ht,Nt,nt.width,nt.height);else{let Y=nt.width,j=nt.height;for(let at=0;at<ht;at++)e.texImage2D(s.TEXTURE_2D,at,Nt,Y,j,0,xt,It,null),Y>>=1,j>>=1}}else if($t.length>0){if(kt&&ae){let Y=Tt($t[0]);e.texStorage2D(s.TEXTURE_2D,ht,Nt,Y.width,Y.height)}for(let Y=0,j=$t.length;Y<j;Y++)yt=$t[Y],kt?k&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,xt,It,yt):e.texImage2D(s.TEXTURE_2D,Y,Nt,xt,It,yt);S.generateMipmaps=!1}else if(kt){if(ae){let Y=Tt(nt);e.texStorage2D(s.TEXTURE_2D,ht,Nt,Y.width,Y.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,It,nt)}else e.texImage2D(s.TEXTURE_2D,0,Nt,xt,It,nt);x(S)&&m(Q),vt.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function it(C,S,G){if(S.image.length!==6)return;let Q=Jt(C,S),et=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);let $=n.get(et);if(et.version!==$.__version||Q===!0){e.activeTexture(s.TEXTURE0+G);let vt=Qt.getPrimaries(Qt.workingColorSpace),ct=S.colorSpace===ii?null:Qt.getPrimaries(S.colorSpace),gt=S.colorSpace===ii||vt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ct=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!Ct&&!nt?xt[j]=y(S.image[j],!0,i.maxCubemapSize):xt[j]=nt?S.image[j].image:S.image[j],xt[j]=ne(S,xt[j]);let It=xt[0],Nt=r.convert(S.format,S.colorSpace),yt=r.convert(S.type),$t=b(S.internalFormat,Nt,yt,S.colorSpace),kt=S.isVideoTexture!==!0,ae=$.__version===void 0||Q===!0,k=et.dataReady,ht=U(S,It);St(s.TEXTURE_CUBE_MAP,S);let Y;if(Ct){kt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,$t,It.width,It.height);for(let j=0;j<6;j++){Y=xt[j].mipmaps;for(let at=0;at<Y.length;at++){let ot=Y[at];S.format!==mn?Nt!==null?kt?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,at,0,0,ot.width,ot.height,Nt,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,at,$t,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,at,0,0,ot.width,ot.height,Nt,yt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,at,$t,ot.width,ot.height,0,Nt,yt,ot.data)}}}else{if(Y=S.mipmaps,kt&&ae){Y.length>0&&ht++;let j=Tt(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,$t,j.width,j.height)}for(let j=0;j<6;j++)if(nt){kt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,Nt,yt,xt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,xt[j].width,xt[j].height,0,Nt,yt,xt[j].data);for(let at=0;at<Y.length;at++){let Dt=Y[at].image[j].image;kt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,at+1,0,0,Dt.width,Dt.height,Nt,yt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,at+1,$t,Dt.width,Dt.height,0,Nt,yt,Dt.data)}}else{kt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Nt,yt,xt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,Nt,yt,xt[j]);for(let at=0;at<Y.length;at++){let ot=Y[at];kt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,at+1,0,0,Nt,yt,ot.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,at+1,$t,Nt,yt,ot.image[j])}}}x(S)&&m(s.TEXTURE_CUBE_MAP),$.__version=et.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function _t(C,S,G,Q,et,$){let vt=r.convert(G.format,G.colorSpace),ct=r.convert(G.type),gt=b(G.internalFormat,vt,ct,G.colorSpace),Ct=n.get(S),nt=n.get(G);if(nt.__renderTarget=S,!Ct.__hasExternalTextures){let xt=Math.max(1,S.width>>$),It=Math.max(1,S.height>>$);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,$,gt,xt,It,S.depth,0,vt,ct,null):e.texImage2D(et,$,gt,xt,It,0,vt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Pt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,et,nt.__webglTexture,0,Et(S)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,et,nt.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(C,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let Q=S.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,$=_(S.stencilBuffer,et),vt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=Et(S);Pt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,$,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,$,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,$,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,C)}else{let Q=S.textures;for(let et=0;et<Q.length;et++){let $=Q[et],vt=r.convert($.format,$.colorSpace),ct=r.convert($.type),gt=b($.internalFormat,vt,ct,$.colorSpace),Ct=Et(S);G&&Pt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,gt,S.width,S.height):Pt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,gt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,gt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let et=Q.__webglTexture,$=Et(S);if(S.depthTexture.format===cs)Pt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(S.depthTexture.format===ms)Pt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ot(C){let S=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=Q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");zt(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=s.createRenderbuffer(),ut(S.__webglDepthbuffer[Q],C,!1);else{let et=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ut(S.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(C,S,G){let Q=n.get(C);S!==void 0&&_t(Q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ot(C)}function re(C){let S=C.texture,G=n.get(C),Q=n.get(S);C.addEventListener("dispose",I);let et=C.textures,$=C.isWebGLCubeRenderTarget===!0,vt=et.length>1;if(vt||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=S.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ct]=[];for(let gt=0;gt<S.mipmaps.length;gt++)G.__webglFramebuffer[ct][gt]=s.createFramebuffer()}else G.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)G.__webglFramebuffer[ct]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(vt)for(let ct=0,gt=et.length;ct<gt;ct++){let Ct=n.get(et[ct]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Pt(C)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){let gt=et[ct];G.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ct]);let Ct=r.convert(gt.format,gt.colorSpace),nt=r.convert(gt.type),xt=b(gt.internalFormat,Ct,nt,gt.colorSpace,C.isXRRenderTarget===!0),It=Et(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,xt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,G.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),St(s.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)_t(G.__webglFramebuffer[ct][gt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else _t(G.__webglFramebuffer[ct],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);x(S)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ct=0,gt=et.length;ct<gt;ct++){let Ct=et[ct],nt=n.get(Ct);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),St(s.TEXTURE_2D,Ct),_t(G.__webglFramebuffer,C,Ct,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),x(Ct)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),St(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)_t(G.__webglFramebuffer[gt],C,S,s.COLOR_ATTACHMENT0,ct,gt);else _t(G.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ct,0);x(S)&&m(ct),e.unbindTexture()}C.depthBuffer&&Ot(C)}function Yt(C){let S=C.textures;for(let G=0,Q=S.length;G<Q;G++){let et=S[G];if(x(et)){let $=M(C),vt=n.get(et).__webglTexture;e.bindTexture($,vt),m($),e.unbindTexture()}}}let ge=[],L=[];function De(C){if(C.samples>0){if(Pt(C)===!1){let S=C.textures,G=C.width,Q=C.height,et=s.COLOR_BUFFER_BIT,$=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(C),ct=S.length>1;if(ct)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[gt]);let Ct=n.get(S[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ct,0)}s.blitFramebuffer(0,0,G,Q,0,0,G,Q,et,s.NEAREST),c===!0&&(ge.length=0,L.length=0,ge.push(s.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ge.push($),L.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[gt]);let Ct=n.get(S[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Ct,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Et(C){return Math.min(i.maxSamples,C.samples)}function Pt(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(C){let S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ne(C,S){let G=C.colorSpace,Q=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==_s&&G!==ii&&(Qt.getTransfer(G)===oe?(Q!==mn||et!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Tt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=A,this.resetTextureUnits=w,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=Xt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Pt}function xg(s,t){function e(n,i=ii){let r,o=Qt.getTransfer(i);if(n===Hn)return s.UNSIGNED_BYTE;if(n===Oc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return s.BYTE;if(n===Dh)return s.SHORT;if(n===Ys)return s.UNSIGNED_SHORT;if(n===Lc)return s.INT;if(n===Ri)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===nr)return s.HALF_FLOAT;if(n===Uh)return s.ALPHA;if(n===Nh)return s.RGB;if(n===mn)return s.RGBA;if(n===Fh)return s.LUMINANCE;if(n===kh)return s.LUMINANCE_ALPHA;if(n===cs)return s.DEPTH_COMPONENT;if(n===ms)return s.DEPTH_STENCIL;if(n===Hc)return s.RED;if(n===Vc)return s.RED_INTEGER;if(n===Lh)return s.RG;if(n===Gc)return s.RG_INTEGER;if(n===Wc)return s.RGBA_INTEGER;if(n===Br||n===Hr||n===Vr||n===Gr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===zo||n===Uo||n===No)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fo||n===ko||n===Lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fo||n===ko)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oo||n===Bo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===Jo||n===Ko||n===jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===Qo||n===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oh||n===ec||n===nc||n===ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var _c=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pe=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},yg={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let x=e.getJointPose(y,n),m=this._getHandJoint(l,y);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new tn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Sn({vertexShader:_g,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends oi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,y=new vc,x=e.getContextAttributes(),m=null,M=null,b=[],_=[],U=new qt,P=null,I=new He;I.viewport=new ve;let D=new He;D.viewport=new ve;let E=[I,D],h=new _c,v=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=b[Z];return it===void 0&&(it=new qs,b[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=b[Z];return it===void 0&&(it=new qs,b[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=b[Z];return it===void 0&&(it=new qs,b[Z]=it),it.getHandSpace()};function A(Z){let it=_.indexOf(Z.inputSource);if(it===-1)return;let _t=b[it];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,l||o),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",N);for(let Z=0;Z<b.length;Z++){let it=_[Z];it!==null&&(_[Z]=null,b[Z].disconnect(it))}v=null,w=null,y.reset(),t.setRenderTarget(m),p=null,f=null,d=null,i=null,M=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",z),i.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(U),i.renderState.layers===void 0){let it={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Vn(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let it=null,_t=null,ut=null;x.depth&&(ut=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=x.stencil?ms:cs,_t=x.stencil?ps:Ri);let zt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(zt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Vn(f.textureWidth,f.textureHeight,{format:mn,type:Hn,depthTexture:new na(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function N(Z){for(let it=0;it<Z.removed.length;it++){let _t=Z.removed[it],ut=_.indexOf(_t);ut>=0&&(_[ut]=null,b[ut].disconnect(_t))}for(let it=0;it<Z.added.length;it++){let _t=Z.added[it],ut=_.indexOf(_t);if(ut===-1){for(let Ot=0;Ot<b.length;Ot++)if(Ot>=_.length){_.push(_t),ut=Ot;break}else if(_[Ot]===null){_[Ot]=_t,ut=Ot;break}if(ut===-1)break}let zt=b[ut];zt&&zt.connect(_t)}}let F=new B,W=new B;function V(Z,it,_t){F.setFromMatrixPosition(it.matrixWorld),W.setFromMatrixPosition(_t.matrixWorld);let ut=F.distanceTo(W),zt=it.projectionMatrix.elements,Ot=_t.projectionMatrix.elements,Xt=zt[14]/(zt[10]-1),re=zt[14]/(zt[10]+1),Yt=(zt[9]+1)/zt[5],ge=(zt[9]-1)/zt[5],L=(zt[8]-1)/zt[0],De=(Ot[8]+1)/Ot[0],Et=Xt*L,Pt=Xt*De,Rt=ut/(-L+De),ne=Rt*-L;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ne),Z.translateZ(Rt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),zt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Tt=Xt+Rt,C=re+Rt,S=Et-ne,G=Pt+(ut-ne),Q=Yt*re/C*Tt,et=ge*re/C*Tt;Z.projectionMatrix.makePerspective(S,G,Q,et,Tt,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function tt(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let it=Z.near,_t=Z.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(_t=y.depthFar)),h.near=D.near=I.near=it,h.far=D.far=I.far=_t,(v!==h.near||w!==h.far)&&(i.updateRenderState({depthNear:h.near,depthFar:h.far}),v=h.near,w=h.far),I.layers.mask=Z.layers.mask|2,D.layers.mask=Z.layers.mask|4,h.layers.mask=I.layers.mask|D.layers.mask;let ut=Z.parent,zt=h.cameras;tt(h,ut);for(let Ot=0;Ot<zt.length;Ot++)tt(zt[Ot],ut);zt.length===2?V(h,I,D):h.projectionMatrix.copy(I.projectionMatrix),K(Z,h,ut)};function K(Z,it,_t){_t===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=rc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return h},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(h)};let dt=null;function St(Z,it){if(u=it.getViewerPose(l||o),g=it,u!==null){let _t=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ut=!1;_t.length!==h.cameras.length&&(h.cameras.length=0,ut=!0);for(let Ot=0;Ot<_t.length;Ot++){let Xt=_t[Ot],re=null;if(p!==null)re=p.getViewport(Xt);else{let ge=d.getViewSubImage(f,Xt);re=ge.viewport,Ot===0&&(t.setRenderTargetTextures(M,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(M))}let Yt=E[Ot];Yt===void 0&&(Yt=new He,Yt.layers.enable(Ot),Yt.viewport=new ve,E[Ot]=Yt),Yt.matrix.fromArray(Xt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Xt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(re.x,re.y,re.width,re.height),Ot===0&&(h.matrix.copy(Yt.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale)),ut===!0&&h.cameras.push(Yt)}let zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Ot=d.getDepthInformation(_t[0]);Ot&&Ot.isValid&&Ot.texture&&y.init(t,Ot,i.renderState)}}for(let _t=0;_t<b.length;_t++){let ut=_[_t],zt=b[_t];ut!==null&&zt!==void 0&&zt.update(ut,it,l||o)}dt&&dt(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let Jt=new Wh;Jt.setAnimationLoop(St),this.setAnimationLoop=function(Z){dt=Z},this.dispose=function(){}}},Mi=new Ce,Mg=new Zt;function bg(s,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,Gh(s)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function i(x,m,M,b,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),d(x,m)):m.isMeshPhongMaterial?(r(x,m),u(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&p(x,m,_)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),y(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?c(x,m,M,b):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Ne&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Ne&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let M=t.get(m),b=M.envMap,_=M.envMapRotation;b&&(x.envMap.value=b,Mi.copy(_),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),x.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(Mi)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,M,b){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*M,x.scale.value=b*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function u(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function d(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function p(x,m,M){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ne&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function y(x,m){let M=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wg(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let _=b.program;n.uniformBlockBinding(M,_)}function l(M,b){let _=i[M.id];_===void 0&&(g(M),_=u(M),i[M.id]=_,M.addEventListener("dispose",x));let U=b.program;n.updateUBOMapping(M,U);let P=t.render.frame;r[M.id]!==P&&(f(M),r[M.id]=P)}function u(M){let b=d();M.__bindingPointIndex=b;let _=s.createBuffer(),U=M.__size,P=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,U,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,_),_}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let b=i[M.id],_=M.uniforms,U=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let P=0,I=_.length;P<I;P++){let D=Array.isArray(_[P])?_[P]:[_[P]];for(let E=0,h=D.length;E<h;E++){let v=D[E];if(p(v,P,E,U)===!0){let w=v.__offset,A=Array.isArray(v.value)?v.value:[v.value],z=0;for(let N=0;N<A.length;N++){let F=A[N],W=y(F);typeof F=="number"||typeof F=="boolean"?(v.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,w+z,v.__data)):F.isMatrix3?(v.__data[0]=F.elements[0],v.__data[1]=F.elements[1],v.__data[2]=F.elements[2],v.__data[3]=0,v.__data[4]=F.elements[3],v.__data[5]=F.elements[4],v.__data[6]=F.elements[5],v.__data[7]=0,v.__data[8]=F.elements[6],v.__data[9]=F.elements[7],v.__data[10]=F.elements[8],v.__data[11]=0):(F.toArray(v.__data,z),z+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,w,v.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,b,_,U){let P=M.value,I=b+"_"+_;if(U[I]===void 0)return typeof P=="number"||typeof P=="boolean"?U[I]=P:U[I]=P.clone(),!0;{let D=U[I];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return U[I]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(M){let b=M.uniforms,_=0,U=16;for(let I=0,D=b.length;I<D;I++){let E=Array.isArray(b[I])?b[I]:[b[I]];for(let h=0,v=E.length;h<v;h++){let w=E[h],A=Array.isArray(w.value)?w.value:[w.value];for(let z=0,N=A.length;z<N;z++){let F=A[z],W=y(F),V=_%U,tt=V%W.boundary,K=V+tt;_+=tt,K!==0&&U-K<W.storage&&(_+=U-K),w.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=_,_+=W.storage}}}let P=_%U;return P>0&&(_+=U-P),M.__size=_,M.__cache={},this}function y(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function x(M){let b=M.target;b.removeEventListener("dispose",x);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}var ia=class{constructor(t={}){let{canvas:e=Td(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),x=null,m=null,M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=ri,this.toneMappingExposure=1;let _=this,U=!1,P=0,I=0,D=null,E=-1,h=null,v=new ve,w=new ve,A=null,z=new ft(0),N=0,F=e.width,W=e.height,V=1,tt=null,K=null,dt=new ve(0,0,F,W),St=new ve(0,0,F,W),Jt=!1,Z=new Js,it=!1,_t=!1,ut=new Zt,zt=new Zt,Ot=new B,Xt=new ve,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function ge(){return D===null?V:1}let L=n;function De(T,O){return e.getContext(T,O)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){let O="webgl2";if(L=De(O,T),L===null)throw De(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Et,Pt,Rt,ne,Tt,C,S,G,Q,et,$,vt,ct,gt,Ct,nt,xt,It,Nt,yt,$t,kt,ae,k;function ht(){Et=new Om(L),Et.init(),kt=new xg(L,Et),Pt=new zm(L,Et,t,kt),Rt=new pg(L,Et),Pt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),ne=new Vm(L),Tt=new eg,C=new gg(L,Et,Rt,Tt,Pt,kt,ne),S=new Nm(_),G=new Lm(_),Q=new $d(L),ae=new Pm(L,Q),et=new Bm(L,Q,ne,ae),$=new Wm(L,et,Q,ne),Nt=new Gm(L,Pt,C),nt=new Um(Tt),vt=new tg(_,S,G,Et,Pt,ae,nt),ct=new bg(_,Tt),gt=new ig,Ct=new lg(Et),It=new Im(_,S,G,Rt,$,p,c),xt=new dg(_,$,Pt),k=new wg(L,ne,Pt,Rt),yt=new Dm(L,Et,ne),$t=new Hm(L,Et,ne),ne.programs=vt.programs,_.capabilities=Pt,_.extensions=Et,_.properties=Tt,_.renderLists=gt,_.shadowMap=xt,_.state=Rt,_.info=ne}ht();let Y=new Mc(_,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=Et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(F,W,!1))},this.getSize=function(T){return T.set(F,W)},this.setSize=function(T,O,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,W=O,e.width=Math.floor(T*V),e.height=Math.floor(O*V),X===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(F*V,W*V).floor()},this.setDrawingBufferSize=function(T,O,X){F=T,W=O,V=X,e.width=Math.floor(T*X),e.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(dt)},this.setViewport=function(T,O,X,q){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,O,X,q),Rt.viewport(v.copy(dt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(St)},this.setScissor=function(T,O,X,q){T.isVector4?St.set(T.x,T.y,T.z,T.w):St.set(T,O,X,q),Rt.scissor(w.copy(St).multiplyScalar(V).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(T){Rt.setScissorTest(Jt=T)},this.setOpaqueSort=function(T){tt=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(T=!0,O=!0,X=!0){let q=0;if(T){let H=!1;if(D!==null){let rt=D.texture.format;H=rt===Wc||rt===Gc||rt===Vc}if(H){let rt=D.texture.type,mt=rt===Hn||rt===Ri||rt===Ys||rt===ps||rt===Oc||rt===Bc,Mt=It.getClearColor(),bt=It.getClearAlpha(),Bt=Mt.r,Vt=Mt.g,wt=Mt.b;mt?(g[0]=Bt,g[1]=Vt,g[2]=wt,g[3]=bt,L.clearBufferuiv(L.COLOR,0,g)):(y[0]=Bt,y[1]=Vt,y[2]=wt,y[3]=bt,L.clearBufferiv(L.COLOR,0,y))}else q|=L.COLOR_BUFFER_BIT}O&&(q|=L.DEPTH_BUFFER_BIT),X&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),gt.dispose(),Ct.dispose(),Tt.dispose(),S.dispose(),G.dispose(),$.dispose(),ae.dispose(),k.dispose(),vt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ae),Y.removeEventListener("sessionend",Gi),mi.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let T=ne.autoReset,O=xt.enabled,X=xt.autoUpdate,q=xt.needsUpdate,H=xt.type;ht(),ne.autoReset=T,xt.enabled=O,xt.autoUpdate=X,xt.needsUpdate=q,xt.type=H}function ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dt(T){let O=T.target;O.removeEventListener("dispose",Dt),ce(O)}function ce(T){Me(T),Tt.remove(T)}function Me(T){let O=Tt.get(T).programs;O!==void 0&&(O.forEach(function(X){vt.releaseProgram(X)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,q,H,rt){O===null&&(O=re);let mt=H.isMesh&&H.matrixWorld.determinant()<0,Mt=Fu(T,O,X,q,H);Rt.setMaterial(q,mt);let bt=X.index,Bt=1;if(q.wireframe===!0){if(bt=et.getWireframeAttribute(X),bt===void 0)return;Bt=2}let Vt=X.drawRange,wt=X.attributes.position,te=Vt.start*Bt,le=(Vt.start+Vt.count)*Bt;rt!==null&&(te=Math.max(te,rt.start*Bt),le=Math.min(le,(rt.start+rt.count)*Bt)),bt!==null?(te=Math.max(te,0),le=Math.min(le,bt.count)):wt!=null&&(te=Math.max(te,0),le=Math.min(le,wt.count));let de=le-te;if(de<0||de===1/0)return;ae.setup(H,q,Mt,X,bt);let qe,ie=yt;if(bt!==null&&(qe=Q.get(bt),ie=$t,ie.setIndex(qe)),H.isMesh)q.wireframe===!0?(Rt.setLineWidth(q.wireframeLinewidth*ge()),ie.setMode(L.LINES)):ie.setMode(L.TRIANGLES);else if(H.isLine){let At=q.linewidth;At===void 0&&(At=1),Rt.setLineWidth(At*ge()),H.isLineSegments?ie.setMode(L.LINES):H.isLineLoop?ie.setMode(L.LINE_LOOP):ie.setMode(L.LINE_STRIP)}else H.isPoints?ie.setMode(L.POINTS):H.isSprite&&ie.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ie.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))ie.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let At=H._multiDrawStarts,Pn=H._multiDrawCounts,se=H._multiDrawCount,un=bt?Q.get(bt).bytesPerElement:1,Wi=Tt.get(q).currentProgram.getUniforms();for(let Je=0;Je<se;Je++)Wi.setValue(L,"_gl_DrawID",Je),ie.render(At[Je]/un,Pn[Je])}else if(H.isInstancedMesh)ie.renderInstances(te,de,H.count);else if(X.isInstancedBufferGeometry){let At=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Pn=Math.min(X.instanceCount,At);ie.renderInstances(te,de,Pn)}else ie.render(te,de)};function Kt(T,O,X){T.transparent===!0&&T.side===ye&&T.forceSinglePass===!1?(T.side=Ne,T.needsUpdate=!0,pr(T,O,X),T.side=ai,T.needsUpdate=!0,pr(T,O,X),T.side=ye):pr(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),m=Ct.get(X),m.init(O),b.push(m),X.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==X&&T.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let q=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let rt=H.material;if(rt)if(Array.isArray(rt))for(let mt=0;mt<rt.length;mt++){let Mt=rt[mt];Kt(Mt,X,H),q.add(Mt)}else Kt(rt,X,H),q.add(rt)}),b.pop(),m=null,q},this.compileAsync=function(T,O,X=null){let q=this.compile(T,O,X);return new Promise(H=>{function rt(){if(q.forEach(function(mt){Tt.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){H(T);return}setTimeout(rt,10)}Et.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Oe=null;function Ze(T){Oe&&Oe(T)}function Ae(){mi.stop()}function Gi(){mi.start()}let mi=new Wh;mi.setAnimationLoop(Ze),typeof self!="undefined"&&mi.setContext(self),this.setAnimationLoop=function(T){Oe=T,Y.setAnimationLoop(T),T===null?mi.stop():mi.start()},Y.addEventListener("sessionstart",Ae),Y.addEventListener("sessionend",Gi),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,O,D),m=Ct.get(T,b.length),m.init(O),b.push(m),zt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(zt),_t=this.localClippingEnabled,it=nt.init(this.clippingPlanes,_t),x=gt.get(T,M.length),x.init(),M.push(x),Y.enabled===!0&&Y.isPresenting===!0){let rt=_.xr.getDepthSensingMesh();rt!==null&&Oa(rt,O,-1/0,_.sortObjects)}Oa(T,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(tt,K),Yt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Yt&&It.addToRenderList(x,T),this.info.render.frame++,it===!0&&nt.beginShadows();let X=m.state.shadowsArray;xt.render(X,T,O),it===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=x.opaque,H=x.transmissive;if(m.setupLights(),O.isArrayCamera){let rt=O.cameras;if(H.length>0)for(let mt=0,Mt=rt.length;mt<Mt;mt++){let bt=rt[mt];gl(q,H,T,bt)}Yt&&It.render(T);for(let mt=0,Mt=rt.length;mt<Mt;mt++){let bt=rt[mt];ml(x,T,bt,bt.viewport)}}else H.length>0&&gl(q,H,T,O),Yt&&It.render(T),ml(x,T,O);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(_,T,O),ae.resetDefaultState(),E=-1,h=null,b.pop(),b.length>0?(m=b[b.length-1],it===!0&&nt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function Oa(T,O,X,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){q&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(zt);let mt=$.update(T),Mt=T.material;Mt.visible&&x.push(T,mt,Mt,X,Xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){let mt=$.update(T),Mt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Xt.copy(mt.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(zt)),Array.isArray(Mt)){let bt=mt.groups;for(let Bt=0,Vt=bt.length;Bt<Vt;Bt++){let wt=bt[Bt],te=Mt[wt.materialIndex];te&&te.visible&&x.push(T,mt,te,X,Xt.z,wt)}}else Mt.visible&&x.push(T,mt,Mt,X,Xt.z,null)}}let rt=T.children;for(let mt=0,Mt=rt.length;mt<Mt;mt++)Oa(rt[mt],O,X,q)}function ml(T,O,X,q){let H=T.opaque,rt=T.transmissive,mt=T.transparent;m.setupLightsView(X),it===!0&&nt.setGlobalState(_.clippingPlanes,X),q&&Rt.viewport(v.copy(q)),H.length>0&&fr(H,O,X),rt.length>0&&fr(rt,O,X),mt.length>0&&fr(mt,O,X),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function gl(T,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Vn(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?nr:Hn,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let rt=m.state.transmissionRenderTarget[q.id],mt=q.viewport||v;rt.setSize(mt.z,mt.w);let Mt=_.getRenderTarget();_.setRenderTarget(rt),_.getClearColor(z),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),Yt&&It.render(X);let bt=_.toneMapping;_.toneMapping=ri;let Bt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),it===!0&&nt.setGlobalState(_.clippingPlanes,q),fr(T,X,q),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let wt=0,te=O.length;wt<te;wt++){let le=O[wt],de=le.object,qe=le.geometry,ie=le.material,At=le.group;if(ie.side===ye&&de.layers.test(q.layers)){let Pn=ie.side;ie.side=Ne,ie.needsUpdate=!0,xl(de,X,q,qe,ie,At),ie.side=Pn,ie.needsUpdate=!0,Vt=!0}}Vt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}_.setRenderTarget(Mt),_.setClearColor(z,N),Bt!==void 0&&(q.viewport=Bt),_.toneMapping=bt}function fr(T,O,X){let q=O.isScene===!0?O.overrideMaterial:null;for(let H=0,rt=T.length;H<rt;H++){let mt=T[H],Mt=mt.object,bt=mt.geometry,Bt=q===null?mt.material:q,Vt=mt.group;Mt.layers.test(X.layers)&&xl(Mt,O,X,bt,Bt,Vt)}}function xl(T,O,X,q,H,rt){T.onBeforeRender(_,O,X,q,H,rt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(_,O,X,q,T,rt),H.transparent===!0&&H.side===ye&&H.forceSinglePass===!1?(H.side=Ne,H.needsUpdate=!0,_.renderBufferDirect(X,O,q,H,T,rt),H.side=ai,H.needsUpdate=!0,_.renderBufferDirect(X,O,q,H,T,rt),H.side=ye):_.renderBufferDirect(X,O,q,H,T,rt),T.onAfterRender(_,O,X,q,H,rt)}function pr(T,O,X){O.isScene!==!0&&(O=re);let q=Tt.get(T),H=m.state.lights,rt=m.state.shadowsArray,mt=H.state.version,Mt=vt.getParameters(T,H.state,rt,O,X),bt=vt.getProgramCacheKey(Mt),Bt=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?G:S).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",Dt),Bt=new Map,q.programs=Bt);let Vt=Bt.get(bt);if(Vt!==void 0){if(q.currentProgram===Vt&&q.lightsStateVersion===mt)return _l(T,Mt),Vt}else Mt.uniforms=vt.getUniforms(T),T.onBeforeCompile(Mt,_),Vt=vt.acquireProgram(Mt,bt),Bt.set(bt,Vt),q.uniforms=Mt.uniforms;let wt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(wt.clippingPlanes=nt.uniform),_l(T,Mt),q.needsLights=Lu(T),q.lightsStateVersion=mt,q.needsLights&&(wt.ambientLightColor.value=H.state.ambient,wt.lightProbe.value=H.state.probe,wt.directionalLights.value=H.state.directional,wt.directionalLightShadows.value=H.state.directionalShadow,wt.spotLights.value=H.state.spot,wt.spotLightShadows.value=H.state.spotShadow,wt.rectAreaLights.value=H.state.rectArea,wt.ltc_1.value=H.state.rectAreaLTC1,wt.ltc_2.value=H.state.rectAreaLTC2,wt.pointLights.value=H.state.point,wt.pointLightShadows.value=H.state.pointShadow,wt.hemisphereLights.value=H.state.hemi,wt.directionalShadowMap.value=H.state.directionalShadowMap,wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,wt.spotShadowMap.value=H.state.spotShadowMap,wt.spotLightMatrix.value=H.state.spotLightMatrix,wt.spotLightMap.value=H.state.spotLightMap,wt.pointShadowMap.value=H.state.pointShadowMap,wt.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Vt,q.uniformsList=null,Vt}function yl(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=hs.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function _l(T,O){let X=Tt.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Fu(T,O,X,q,H){O.isScene!==!0&&(O=re),C.resetTextureUnits();let rt=O.fog,mt=q.isMeshStandardMaterial?O.environment:null,Mt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:_s,bt=(q.isMeshStandardMaterial?G:S).get(q.envMap||mt),Bt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),wt=!!X.morphAttributes.position,te=!!X.morphAttributes.normal,le=!!X.morphAttributes.color,de=ri;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(de=_.toneMapping);let qe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=qe!==void 0?qe.length:0,At=Tt.get(q),Pn=m.state.lights;if(it===!0&&(_t===!0||T!==h)){let on=T===h&&q.id===E;nt.setState(q,T,on)}let se=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Pn.state.version||At.outputColorSpace!==Mt||H.isBatchedMesh&&At.batching===!1||!H.isBatchedMesh&&At.batching===!0||H.isBatchedMesh&&At.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&At.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&At.instancing===!1||!H.isInstancedMesh&&At.instancing===!0||H.isSkinnedMesh&&At.skinning===!1||!H.isSkinnedMesh&&At.skinning===!0||H.isInstancedMesh&&At.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&At.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&At.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&At.instancingMorph===!1&&H.morphTexture!==null||At.envMap!==bt||q.fog===!0&&At.fog!==rt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==nt.numPlanes||At.numIntersection!==nt.numIntersection)||At.vertexAlphas!==Bt||At.vertexTangents!==Vt||At.morphTargets!==wt||At.morphNormals!==te||At.morphColors!==le||At.toneMapping!==de||At.morphTargetsCount!==ie)&&(se=!0):(se=!0,At.__version=q.version);let un=At.currentProgram;se===!0&&(un=pr(q,O,H));let Wi=!1,Je=!1,Us=!1,fe=un.getUniforms(),vn=At.uniforms;if(Rt.useProgram(un.program)&&(Wi=!0,Je=!0,Us=!0),q.id!==E&&(E=q.id,Je=!0),Wi||h!==T){Rt.buffers.depth.getReversed()?(ut.copy(T.projectionMatrix),Rd(ut),Cd(ut),fe.setValue(L,"projectionMatrix",ut)):fe.setValue(L,"projectionMatrix",T.projectionMatrix),fe.setValue(L,"viewMatrix",T.matrixWorldInverse);let Zn=fe.map.cameraPosition;Zn!==void 0&&Zn.setValue(L,Ot.setFromMatrixPosition(T.matrixWorld)),Pt.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&fe.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),h!==T&&(h=T,Je=!0,Us=!0)}if(H.isSkinnedMesh){fe.setOptional(L,H,"bindMatrix"),fe.setOptional(L,H,"bindMatrixInverse");let on=H.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),fe.setValue(L,"boneTexture",on.boneTexture,C))}H.isBatchedMesh&&(fe.setOptional(L,H,"batchingTexture"),fe.setValue(L,"batchingTexture",H._matricesTexture,C),fe.setOptional(L,H,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",H._indirectTexture,C),fe.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",H._colorsTexture,C));let Ns=X.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&Nt.update(H,X,un),(Je||At.receiveShadow!==H.receiveShadow)&&(At.receiveShadow=H.receiveShadow,fe.setValue(L,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(vn.envMap.value=bt,vn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(vn.envMapIntensity.value=O.environmentIntensity),Je&&(fe.setValue(L,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&ku(vn,Us),rt&&q.fog===!0&&ct.refreshFogUniforms(vn,rt),ct.refreshMaterialUniforms(vn,q,V,W,m.state.transmissionRenderTarget[T.id]),hs.upload(L,yl(At),vn,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(hs.upload(L,yl(At),vn,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&fe.setValue(L,"center",H.center),fe.setValue(L,"modelViewMatrix",H.modelViewMatrix),fe.setValue(L,"normalMatrix",H.normalMatrix),fe.setValue(L,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let on=q.uniformsGroups;for(let Zn=0,Jn=on.length;Zn<Jn;Zn++){let vl=on[Zn];k.update(vl,un),k.bind(vl,un)}}return un}function ku(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Lu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,O,X){Tt.get(T.texture).__webglTexture=O,Tt.get(T.depthTexture).__webglTexture=X;let q=Tt.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){let X=Tt.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,X=0){D=T,P=O,I=X;let q=!0,H=null,rt=!1,mt=!1;if(T){let bt=Tt.get(T);if(bt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(bt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(bt.__hasExternalTextures)C.rebindTextures(T,Tt.get(T.texture).__webglTexture,Tt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let wt=T.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&Tt.has(wt)&&(T.width!==wt.image.width||T.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}let Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);let Vt=Tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?H=Vt[O][X]:H=Vt[O],rt=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?H=Tt.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[X]:H=Vt,v.copy(T.viewport),w.copy(T.scissor),A=T.scissorTest}else v.copy(dt).multiplyScalar(V).floor(),w.copy(St).multiplyScalar(V).floor(),A=Jt;if(Rt.bindFramebuffer(L.FRAMEBUFFER,H)&&q&&Rt.drawBuffers(T,H),Rt.viewport(v),Rt.scissor(w),Rt.setScissorTest(A),rt){let bt=Tt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,X)}else if(mt){let bt=Tt.get(T.texture),Bt=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.__webglTexture,X||0,Bt)}E=-1},this.readRenderTargetPixels=function(T,O,X,q,H,rt,mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){Rt.bindFramebuffer(L.FRAMEBUFFER,Mt);try{let bt=T.texture,Bt=bt.format,Vt=bt.type;if(!Pt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&X>=0&&X<=T.height-H&&L.readPixels(O,X,q,H,kt.convert(Bt),kt.convert(Vt),rt)}finally{let bt=D!==null?Tt.get(D).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(T,O,X,q,H,rt,mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){let bt=T.texture,Bt=bt.format,Vt=bt.type;if(!Pt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-q&&X>=0&&X<=T.height-H){Rt.bindFramebuffer(L.FRAMEBUFFER,Mt);let wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.bufferData(L.PIXEL_PACK_BUFFER,rt.byteLength,L.STREAM_READ),L.readPixels(O,X,q,H,kt.convert(Bt),kt.convert(Vt),0);let te=D!==null?Tt.get(D).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,te);let le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ad(L,le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,rt),L.deleteBuffer(wt),L.deleteSync(le),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,X=0){T.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);let q=Math.pow(2,-X),H=Math.floor(T.image.width*q),rt=Math.floor(T.image.height*q),mt=O!==null?O.x:0,Mt=O!==null?O.y:0;C.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,mt,Mt,H,rt),Rt.unbindTexture()},this.copyTextureToTexture=function(T,O,X=null,q=null,H=0){T.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],O=arguments[2],H=arguments[3]||0,X=null);let rt,mt,Mt,bt,Bt,Vt,wt,te,le,de=T.isCompressedTexture?T.mipmaps[H]:T.image;X!==null?(rt=X.max.x-X.min.x,mt=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,bt=X.min.x,Bt=X.min.y,Vt=X.isBox3?X.min.z:0):(rt=de.width,mt=de.height,Mt=de.depth||1,bt=0,Bt=0,Vt=0),q!==null?(wt=q.x,te=q.y,le=q.z):(wt=0,te=0,le=0);let qe=kt.convert(O.format),ie=kt.convert(O.type),At;O.isData3DTexture?(C.setTexture3D(O,0),At=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),At=L.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),At=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let Pn=L.getParameter(L.UNPACK_ROW_LENGTH),se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),un=L.getParameter(L.UNPACK_SKIP_PIXELS),Wi=L.getParameter(L.UNPACK_SKIP_ROWS),Je=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vt);let Us=T.isDataArrayTexture||T.isData3DTexture,fe=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let vn=Tt.get(T),Ns=Tt.get(O),on=Tt.get(vn.__renderTarget),Zn=Tt.get(Ns.__renderTarget);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Jn=0;Jn<Mt;Jn++)Us&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.get(T).__webglTexture,H,Vt+Jn),T.isDepthTexture?(fe&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.get(O).__webglTexture,H,le+Jn),L.blitFramebuffer(bt,Bt,rt,mt,wt,te,rt,mt,L.DEPTH_BUFFER_BIT,L.NEAREST)):fe?L.copyTexSubImage3D(At,H,wt,te,le+Jn,bt,Bt,rt,mt):L.copyTexSubImage2D(At,H,wt,te,le+Jn,bt,Bt,rt,mt);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else fe?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(At,H,wt,te,le,rt,mt,Mt,qe,ie,de.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(At,H,wt,te,le,rt,mt,Mt,qe,de.data):L.texSubImage3D(At,H,wt,te,le,rt,mt,Mt,qe,ie,de):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,wt,te,rt,mt,qe,ie,de.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,wt,te,de.width,de.height,qe,de.data):L.texSubImage2D(L.TEXTURE_2D,H,wt,te,rt,mt,qe,ie,de);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,un),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Je),H===0&&O.generateMipmaps&&L.generateMipmap(At),Rt.unbindTexture()},this.copyTextureToTexture3D=function(T,O,X=null,q=null,H=0){return T.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,T=arguments[2],O=arguments[3],H=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,X,q,H)},this.initRenderTarget=function(T){Tt.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Rt.unbindTexture()},this.resetState=function(){P=0,I=0,D=null,Rt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}},sa=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ra=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ce,this.environmentIntensity=1,this.environmentRotation=new Ce,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var bc=class extends tn{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Qe,u=Qe,d,f){super(null,o,a,c,l,u,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ks=class extends _e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rs=new Zt,Mh=new Zt,Fr=[],bh=new Gn,Sg=new Zt,Hs=new Ft,Vs=new ci,Ci=class extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),bh.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Vs.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),t.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,rs),Mh.multiplyMatrices(n,rs),Hs.matrixWorld=Mh,Hs.raycast(t,Fr);for(let o=0,a=Fr.length;o<a;o++){let c=Fr[o];c.instanceId=r,c.object=this,e.push(c)}Fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bc(new Float32Array(i*this.count),i,this.count,Hc,wn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ii=class extends Wn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},aa=new B,oa=new B,wh=new Zt,Gs=new $s,kr=new ci,xo=new B,Sh=new B,js=class extends Fe{constructor(t=new he,e=new Ii){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)aa.fromBufferAttribute(e,i-1),oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=aa.distanceTo(oa);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;wh.copy(i).invert(),Gs.copy(t.ray).applyMatrix4(wh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=p,x=g-1;y<x;y+=l){let m=u.getX(y),M=u.getX(y+1),b=Lr(this,t,Gs,c,m,M);b&&e.push(b)}if(this.isLineLoop){let y=u.getX(g-1),x=u.getX(p),m=Lr(this,t,Gs,c,y,x);m&&e.push(m)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=p,x=g-1;y<x;y+=l){let m=Lr(this,t,Gs,c,y,y+1);m&&e.push(m)}if(this.isLineLoop){let y=Lr(this,t,Gs,c,g-1,p);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lr(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(aa.fromBufferAttribute(o,i),oa.fromBufferAttribute(o,r),e.distanceSqToSegment(aa,oa,xo,Sh)>n)return;xo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(xo);if(!(c<t.near||c>t.far))return{distance:c,point:Sh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Qs=class extends js{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Pi=class s extends he{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],d=[],f=[],p=[],g=0,y=[],x=n/2,m=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(p,2));function M(){let _=new B,U=new B,P=0,I=(e-t)/n;for(let D=0;D<=r;D++){let E=[],h=D/r,v=h*(e-t)+t;for(let w=0;w<=i;w++){let A=w/i,z=A*c+a,N=Math.sin(z),F=Math.cos(z);U.x=v*N,U.y=-h*n+x,U.z=v*F,d.push(U.x,U.y,U.z),_.set(N,I,F).normalize(),f.push(_.x,_.y,_.z),p.push(A,1-h),E.push(g++)}y.push(E)}for(let D=0;D<i;D++)for(let E=0;E<r;E++){let h=y[E][D],v=y[E+1][D],w=y[E+1][D+1],A=y[E][D+1];(t>0||E!==0)&&(u.push(h,v,A),P+=3),(e>0||E!==r-1)&&(u.push(v,w,A),P+=3)}l.addGroup(m,P,0),m+=P}function b(_){let U=g,P=new qt,I=new B,D=0,E=_===!0?t:e,h=_===!0?1:-1;for(let w=1;w<=i;w++)d.push(0,x*h,0),f.push(0,h,0),p.push(.5,.5),g++;let v=g;for(let w=0;w<=i;w++){let z=w/i*c+a,N=Math.cos(z),F=Math.sin(z);I.x=E*F,I.y=x*h,I.z=E*N,d.push(I.x,I.y,I.z),f.push(0,h,0),P.x=N*.5+.5,P.y=F*.5*h+.5,p.push(P.x,P.y),g++}for(let w=0;w<i;w++){let A=U+w,z=v+w;_===!0?u.push(z,z+1,A):u.push(z+1,z,A),D+=3}l.addGroup(m,D,_===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ca=class s extends Pi{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},tr=class s extends he{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let b=new B,_=new B,U=new B;for(let P=0;P<e.length;P+=3)p(e[P+0],b),p(e[P+1],_),p(e[P+2],U),c(b,_,U,M)}function c(M,b,_,U){let P=U+1,I=[];for(let D=0;D<=P;D++){I[D]=[];let E=M.clone().lerp(_,D/P),h=b.clone().lerp(_,D/P),v=P-D;for(let w=0;w<=v;w++)w===0&&D===P?I[D][w]=E:I[D][w]=E.clone().lerp(h,w/v)}for(let D=0;D<P;D++)for(let E=0;E<2*(P-D)-1;E++){let h=Math.floor(E/2);E%2===0?(f(I[D][h+1]),f(I[D+1][h]),f(I[D][h])):(f(I[D][h+1]),f(I[D+1][h+1]),f(I[D+1][h]))}}function l(M){let b=new B;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(M),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){let M=new B;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let _=x(M)/2/Math.PI+.5,U=m(M)/Math.PI+.5;o.push(_,1-U)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){let b=o[M+0],_=o[M+2],U=o[M+4],P=Math.max(b,_,U),I=Math.min(b,_,U);P>.9&&I<.1&&(b<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),U<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,b){let _=M*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function g(){let M=new B,b=new B,_=new B,U=new B,P=new qt,I=new qt,D=new qt;for(let E=0,h=0;E<r.length;E+=9,h+=6){M.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),P.set(o[h+0],o[h+1]),I.set(o[h+2],o[h+3]),D.set(o[h+4],o[h+5]),U.copy(M).add(b).add(_).divideScalar(3);let v=x(U);y(P,h+0,M,v),y(I,h+2,b,v),y(D,h+4,_,v)}}function y(M,b,_,U){U<0&&M.x===1&&(o[b]=M.x-1),_.x===0&&_.z===0&&(o[b]=U/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},la=class s extends tr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var li=class s extends tr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Xn=class s extends he{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],u=[],d=t,f=(e-t)/i,p=new B,g=new qt;for(let y=0;y<=i;y++){for(let x=0;x<=n;x++){let m=r+x/n*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}d+=f}for(let y=0;y<i;y++){let x=y*(n+1);for(let m=0;m<n;m++){let M=m+x,b=M,_=M+n+1,U=M+n+2,P=M+1;a.push(b,_,P),a.push(_,U,P)}}this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var xs=class s extends he{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new B,f=new B,p=[],g=[],y=[],x=[];for(let m=0;m<=n;m++){let M=[],b=m/n,_=0;m===0&&o===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let U=0;U<=e;U++){let P=U/e;d.x=-t*Math.cos(i+P*r)*Math.sin(o+b*a),d.y=t*Math.cos(o+b*a),d.z=t*Math.sin(i+P*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),x.push(P+_,1-b),M.push(l++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let b=u[m][M+1],_=u[m][M],U=u[m+1][M],P=u[m+1][M+1];(m!==0||o>0)&&p.push(b,_,P),(m!==n-1||c<Math.PI)&&p.push(_,U,P)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ha=class s extends tr{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ua=class s extends he{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],u=new B,d=new B,f=new B;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let y=g/i*r,x=p/n*Math.PI*2;d.x=(t+e*Math.cos(x))*Math.cos(y),d.y=(t+e*Math.cos(x))*Math.sin(y),d.z=e*Math.sin(x),a.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let y=(i+1)*p+g-1,x=(i+1)*(p-1)+g-1,m=(i+1)*(p-1)+g,M=(i+1)*p+g;o.push(y,x,M),o.push(x,m,M)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var da=class extends Wn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Te=class extends Wn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Or(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Eg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ys=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wc=class extends ys{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tl:r=t,a=2*e-n;break;case Al:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Tl:o=t,c=2*n-e;break;case Al:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),y=g*g,x=y*g,m=-f*x+2*f*y-f*g,M=(1+f)*x+(-1.5-2*f)*y+(-.5+f)*g+1,b=(-1-p)*x+(1.5+p)*y+.5*g,_=p*x-p*y;for(let U=0;U!==a;++U)r[U]=m*o[u+U]+M*o[l+U]+b*o[c+U]+_*o[d+U];return r}},Sc=class extends ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(i-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*u;return r}},Ec=class extends ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},gn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Or(e,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Or(t.times,Array),values:Or(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Xr:e=this.InterpolantFactoryMethodDiscrete;break;case sc:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return sc;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Eg(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ha,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[f+g]||y!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=sc;var Di=class extends gn{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Xr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends gn{};Tc.prototype.ValueTypeName="color";var Ac=class extends gn{};Ac.prototype.ValueTypeName="number";var Rc=class extends ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let u=l+a;l!==u;l+=4)Ve.slerpFlat(r,0,o,l-a,o,l,c);return r}},fa=class extends gn{InterpolantFactoryMethodLinear(t){return new Rc(this.times,this.values,this.getValueSize(),t)}};fa.prototype.ValueTypeName="quaternion";fa.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends gn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Xr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends gn{};Cc.prototype.ValueTypeName="vector";var Ic=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Tg=new Ic,Pc=class{constructor(t){this.manager=t!==void 0?t:Tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},pa=class extends er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},yo=new Zt,Eh=new B,Th=new B,Dc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var zc=class extends Dc{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ma=class extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new zc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ga=class extends er{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Yc="\\[\\]\\.:\\/",Ag=new RegExp("["+Yc+"]","g"),$c="[^"+Yc+"]",Rg="[^"+Yc.replace("\\.","")+"]",Cg=/((?:WC+[\/:])*)/.source.replace("WC",$c),Ig=/(WCOD+)?/.source.replace("WCOD",Rg),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),zg=new RegExp("^"+Cg+Ig+Pg+Dg+"$"),Ug=["material","materials","bones","map"],Uc=class{constructor(t,e,n){let i=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ag,"")}static parseTrackName(t){let e=zg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ug.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Uc;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var px=new Float32Array(1);var Ah=new Zt,xa=class{constructor(t,e,n=0,i=1/0){this.ray=new $s(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ah),this}intersectObject(t,e=!0,n=[]){return Nc(t,this,n,e),n.sort(Rh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Nc(t[i],this,n,e);return n.sort(Rh),n}};function Rh(s,t){return s.distance-t.distance}function Nc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Nc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);var xn={legion:{id:"legion",value:1,size:32,cols:8,spacing:1.25,hp:10,atk:3.2,def:3,speed:2.7,range:0,names:["Legion\xE4re","Pl\xFCnderer"],desc:["Schwert & Scutum. Der verl\xE4ssliche Kern jeder Armee.","Axt & Rundschild. Wild und z\xE4h."],stats:{Angriff:3,Abwehr:3,Tempo:3,"Reichw.":1}},pike:{id:"pike",value:.9,size:36,cols:9,spacing:1.2,hp:10,atk:2.6,def:2.8,speed:2.25,range:0,vsCav:2.6,names:["Pikeniere","Speerm\xE4nner"],desc:["Lange Piken. Brechen jeden Reiterangriff.","Speerwall gegen Reiter."],stats:{Angriff:2,Abwehr:3,Tempo:2,"Reichw.":2}},archer:{id:"archer",value:.75,size:24,cols:8,spacing:1.35,hp:8,atk:1.4,def:1.2,speed:2.8,range:36,volley:2.9,arrowDmg:3.6,names:["Bogensch\xFCtzen","J\xE4ger"],desc:["Pfeilhagel auf gro\xDFe Distanz. Schwach im Nahkampf.","T\xF6dliche Sch\xFCtzen aus dem Hinterhalt."],stats:{Angriff:3,Abwehr:1,Tempo:3,"Reichw.":5}},cavalry:{id:"cavalry",value:1.25,size:20,cols:5,spacing:1.9,hp:16,atk:3.5,def:2.4,speed:5.4,range:0,charge:2.3,names:["Reiterei","Wolfsreiter"],desc:["Schnell und wuchtig. Sturmangriff in Flanke und R\xFCcken.","Schnelle Reiter f\xFCr \xDCberf\xE4lle."],stats:{Angriff:4,Abwehr:2,Tempo:5,"Reichw.":1}},guard:{id:"guard",value:1.3,size:24,cols:6,spacing:1.3,hp:14,atk:3.3,def:5,speed:2.1,range:0,arrowResist:.45,names:["Pr\xE4torianer","Eisenwache"],desc:["Elite mit Turmschilden. H\xE4lt jede Stellung, trotzt Pfeilen.","Schwer gepanzerte Elite."],stats:{Angriff:4,Abwehr:5,Tempo:1,"Reichw.":1}}},Zh=["legion","pike","archer","cavalry","guard"],qn=[{id:0,name:"L\xF6wenlegion",short:"Du",ui:"#4a8cf0",uiDark:"#1f4c9a",colors:{primary:3105732,secondary:14922817,metal:13225686,helm:14264634,crest:12857387,skin:14856588,dark:4863268,wood:9067058,cloth:15722194,horse:8014634,mane:2759698,banner:3105732,hood:4155973}},{id:1,name:"Rabenclan",short:"Bot",ui:"#e0473c",uiDark:"#8e1f1a",colors:{primary:10691356,secondary:2829104,metal:7304060,helm:5593183,crest:15261900,skin:14197372,dark:2761504,wood:6110498,cloth:3816e3,horse:3879985,mane:1380882,banner:10691356,hood:2829104}}],En={summer:{name:"Sommer",sky:[9356784,15267071],fog:13625077,grass:[7319119,8239960,6266437,8962658],dirt:11569754,sand:14206092,rock:[9276038,10197138,8157557],cliff:[10127992,9075304],water:4034249,leaf:[4164154,5216832,5941322,3701300],pine:[3107642,2776885],trunk:7031342,flower:[15917388,15760040,16777215,11565808],sun:16773590,hemi:[14676223,6982218]},autumn:{name:"Herbst",sky:[15251850,16509136],fog:15718847,grass:[10133580,11118679,9146948,11839578],dirt:10648142,sand:13744260,rock:[9274750,10129801,8024940],cliff:[10256230,9072472],water:4884136,leaf:[14251818,14916146,12865578,15253834],pine:[4023104,3496504],trunk:6176552,flower:[15253834,14251818,16777215,12865578],sun:16769208,hemi:[16771280,8022586]},winter:{name:"Winter",sky:[12176864,15660282],fog:14674160,grass:[15660023,14936816,16251644,14279659],dirt:10195076,sand:13620956,rock:[9344670,10397358,8291982],cliff:[9081500,8028812],water:6131635,leaf:[14674416,13622760,15266037,12570845],pine:[3037770,2773060],trunk:5916214,flower:[16777215,14674416,13623534,16777215],sun:16054527,hemi:[15791871,9082530]},spring:{name:"Fr\xFChling",sky:[10473717,15923711],fog:14347767,grass:[7914071,9228134,6927692,10147954],dirt:11043930,sand:14470040,rock:[9407624,10328724,8289143],cliff:[10128508,9075820],water:4889302,leaf:[15902408,7323471,16239068,5942854],pine:[3108666,2777909],trunk:7031342,flower:[16777215,15902408,16179290,10124016],sun:16774882,hemi:[15135999,6986314]},highland:{name:"Hochland",sky:[9414333,14542316],fog:13226972,grass:[8230486,9085534,7112268,10132066],dirt:9073752,sand:12102280,rock:[8224904,9080470,7238008],cliff:[7369852,6448750,8027782],water:4157327,leaf:[5929530,6982210,9067146,4876850],pine:[3035704,2640434],trunk:5916214,flower:[10115752,11696832,15787760,14205024],sun:15790838,hemi:[15002352,6978138]},desert:{name:"W\xFCste",sky:[15780234,16773850],fog:16048834,grass:[14729344,14202483,15256204,13610604],dirt:12159573,sand:15520924,rock:[12093024,12883050,11040598],cliff:[12614220,11036222,13667932],water:4170680,leaf:[7313978,8366149,6261298,9087050],pine:[6261298,5208618],trunk:9071170,flower:[15245388,13658682,16777215,15255658],sun:16773328,hemi:[16773340,10517066]}},Ms={assault:{name:"Burg einnehmen",icon:"castle",desc:"Die feindliche Burg muss fallen. Brich das Tor und halte den Burghof.",goal:"Halte den Burghof 20 s lang oder vernichte den Feind. Zeitlimit 6:00.",time:360},defend:{name:"Burg verteidigen",icon:"shield",desc:"Der Rabenclan st\xFCrmt eure Mauern. Haltet bis zum Morgengrauen.",goal:"\xDCberlebe 5:00 oder vernichte die Angreifer. Der Burghof darf nicht fallen.",time:300},canyon:{name:"Canyon-Pass",icon:"canyon",desc:"Enge Schluchten, steile Felsen. Wer den Pass kontrolliert, gewinnt.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420},river:{name:"Flussfurt",icon:"river",desc:"Ein Fluss trennt die Heere. Br\xFCcke und Furten sind der Schl\xFCssel.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420},hill:{name:"K\xF6nigsh\xFCgel",icon:"hill",desc:"Der alte Steinkreis auf dem H\xFCgel. Wer ihn h\xE4lt, beherrscht das Land.",goal:"Halte den Steinkreis bis 100 Punkte \u2013 oder vernichte den Feind.",time:420},forest:{name:"Nebelwald",icon:"forest",desc:"Dichter Wald bietet Deckung vor Pfeilen \u2013 und Raum f\xFCr Hinterhalte.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420}},Zc=["assault","defend","canyon","river","hill","forest"],Ui={easy:{name:"Leicht",size:.85,think:3.5,smart:.35},normal:{name:"Normal",size:1,think:2,smart:.7},hard:{name:"Schwer",size:1.15,think:1,smart:1}};function Jh(s){return{move:"advance",waypoints:[],target:s==="cavalry"?"ranged":"nearest",targetId:-1,stance:"balanced",formation:s==="cavalry"?"wedge":"line",delay:s==="cavalry"?5:0,skirmish:s==="archer",retreatAt:.25,retreatTo:"camp",afterRetreat:"hold"}}var wa=class{constructor(t,e){this.canvas=t,this.quality=e,this.renderer=new ia({canvas:t,antialias:e.aa,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e.pixelRatio)),this.renderer.shadowMap.enabled=e.shadows,this.renderer.shadowMap.type=kc,this.scene=new ra,this.camera=new He(42,1,1,900),this.cam={x:0,z:4,dist:118,yaw:0,pitch:.95,tx:0,tz:4,tdist:118,tyaw:0,tpitch:.95},this.bounds={x:78,z:52},this.raycaster=new xa,this.resize(),window.addEventListener("resize",()=>this.resize())}setupEnvironment(t,e){let n=En[t],i=this.scene;if(this.lights)for(let p of this.lights)i.remove(p);this.sky&&i.remove(this.sky);let r=new pa(n.hemi[0],n.hemi[1],1.35),o=new ma(n.sun,2.1);if(o.position.set(-75,95,55),o.target.position.set(0,0,0),this.quality.shadows){o.castShadow=!0;let p=this.quality.shadowSize;o.shadow.mapSize.set(p,p);let g=o.shadow.camera;g.left=-95,g.right=95,g.top=70,g.bottom=-70,g.near=10,g.far=320,o.shadow.bias=-8e-4,o.shadow.normalBias=.4}let a=new ga(16777215,.25);i.add(r,o,o.target,a),this.lights=[r,o,o.target,a];let c=new xs(600,24,12),l=new ft(n.sky[0]),u=new ft(n.sky[1]),d=[],f=c.attributes.position;for(let p=0;p<f.count;p++){let g=f.getY(p)/600,y=u.clone().lerp(l,Math.max(0,Math.min(1,g*1.6+.1)));d.push(y.r,y.g,y.b)}c.setAttribute("color",new jt(d,3)),this.sky=new Ft(c,new me({vertexColors:!0,side:Ne,fog:!1,depthWrite:!1})),i.add(this.sky),i.fog=new sa(n.fog,e),i.background=new ft(n.fog)}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t/e<1.3?55:42,this.camera.updateProjectionMatrix()}updateCamera(t){let e=this.cam;if(this.vel){this.pan(this.vel.x*t,this.vel.y*t);let l=Math.exp(-t*4.5);this.vel.x*=l,this.vel.y*=l,Math.hypot(this.vel.x,this.vel.y)<15&&(this.vel=null)}let n=1-Math.exp(-t*9);e.tx=Math.max(-this.bounds.x,Math.min(this.bounds.x,e.tx)),e.tz=Math.max(-this.bounds.z,Math.min(this.bounds.z,e.tz)),e.tdist=Math.max(22,Math.min(150,e.tdist)),e.tpitch=Math.max(.42,Math.min(1.38,e.tpitch)),e.x+=(e.tx-e.x)*n,e.z+=(e.tz-e.z)*n,e.dist+=(e.tdist-e.dist)*n,e.yaw+=(e.tyaw-e.yaw)*n,e.pitch+=(e.tpitch-e.pitch)*n;let i=Math.cos(e.pitch),r=Math.sin(e.pitch),o=e.x+Math.sin(e.yaw)*i*e.dist,a=e.z+Math.cos(e.yaw)*i*e.dist,c=r*e.dist;this.groundFn&&(c=Math.max(c,this.groundFn(o,a)+4)),this.camera.position.set(o,c,a),this.camera.lookAt(e.x,0,e.z)}focus(t,e,n){this.cam.tx=t,this.cam.tz=e,n&&(this.cam.tdist=n)}pan(t,e){let n=this.cam,i=n.dist*1.1/window.innerHeight,r=Math.cos(n.yaw),o=Math.sin(n.yaw),a=r,c=-o,l=-o,u=-r;n.tx-=(a*t-l*e)*i,n.tz-=(c*t-u*e)*i}fling(t,e){let n=Math.hypot(t,e);if(n<120)return;let i=Math.min(1,2400/n);this.vel={x:t*i,y:e*i}}stopFling(){this.vel=null}zoom(t){this.cam.tdist*=t}rotate(t){this.cam.tyaw+=t}tilt(t){this.cam.tpitch+=t}pick(t,e,n){let i=new qt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1);this.raycaster.setFromCamera(i,this.camera);let r=this.raycaster.intersectObjects(n,!1)[0];return r?r.point:null}project(t,e,n,i){let r=new B(t,e,n).project(this.camera);return i.x=(r.x*.5+.5)*window.innerWidth,i.y=(-r.y*.5+.5)*window.innerHeight,i.visible=r.z<1&&r.z>-1,i}render(){this.renderer.render(this.scene,this.camera)}},Sa=class{constructor(t,e){this.scene=t,this.map=e,this.group=new pe,t.add(this.group),this.zoneMeshes=[],this.routeGroup=new pe,this.group.add(this.routeGroup),this.objMesh=null,this.makeZones(),this.makeObjective()}terrainPatch(t,e,n,i,r,o,a=.25){let c=Math.max(2,Math.ceil((n-t)/2)),l=Math.max(2,Math.ceil((i-e)/2)),u=new nn(n-t,i-e,c,l);u.rotateX(-Math.PI/2);let d=u.attributes.position;for(let p=0;p<d.count;p++){let g=d.getX(p)+(t+n)/2,y=d.getZ(p)+(e+i)/2;d.setXYZ(p,g,Math.max(this.map.getHeight(g,y),this.map.hasWater?this.map.waterLevel:-99)+a,y)}u.computeVertexNormals();let f=new Ft(u,new me({color:r,transparent:!0,opacity:o,depthWrite:!1}));return f.renderOrder=2,f}makeZones(){for(let t=0;t<2;t++){let e=this.map.zones[t],n=t===0?4885744:14698300,i=new pe;i.add(this.terrainPatch(e.x0,e.z0,e.x1,e.z1,n,.16));let r=[],o=(c,l)=>r.push(new B(c,this.map.getHeight(c,l)+.4,l));for(let c=e.x0;c<=e.x1;c+=1.5)o(c,e.z0);for(let c=e.z0;c<=e.z1;c+=1.5)o(e.x1,c);for(let c=e.x1;c>=e.x0;c-=1.5)o(c,e.z1);for(let c=e.z1;c>=e.z0;c-=1.5)o(e.x0,c);let a=new he().setFromPoints(r);i.add(new js(a,new Ii({color:n,transparent:!0,opacity:.9}))),this.group.add(i),this.zoneMeshes.push(i)}}showZones(t,e=-1){this.zoneMeshes.forEach((n,i)=>{n.visible=t&&(e<0||e===i)})}makeObjective(){let t=this.map.objective;if(!t)return;let e=new Xn(t.r-.6,t.r,48,1);e.rotateX(-Math.PI/2);let n=new me({color:16769146,transparent:!0,opacity:.55,depthWrite:!1,side:ye}),i=new Ft(e,n);i.position.set(t.x,this.map.getHeight(t.x,t.z)+.35,t.z),i.renderOrder=2,this.group.add(i),this.objMesh=i;let r=this.terrainPatch(t.x-t.r,t.z-t.r,t.x+t.r,t.z+t.r,16769146,0,.2);this.group.add(r)}updateObjective(t){let e=this.map.objective;if(!this.objMesh)return;let n=16769146;e.present&&(e.present[0]>0&&e.present[1]===0?n=4885744:e.present[1]>0&&e.present[0]===0?n=14698300:e.present[0]>0&&e.present[1]>0&&(n=16777215)),this.objMesh.material.color.setHex(n),this.objMesh.material.opacity=.45+Math.sin(t*3)*.15,this.objMesh.rotation.y=t*.2}clearRoutes(){for(let t of[...this.routeGroup.children])this.routeGroup.remove(t),t.geometry&&t.geometry.dispose()}addRoute(t,e,n=!1,i=.7){if(t.length<2)return;let r=[];for(let I=0;I<t.length-1;I++){let[D,E]=t[I],[h,v]=t[I+1],w=Math.hypot(h-D,v-E),A=Math.max(1,Math.ceil(w/1.2));for(let z=0;z<A;z++)r.push([D+(h-D)*(z/A),E+(v-E)*(z/A)])}r.push(t[t.length-1]);let o=[],a=.35,c=(I,D)=>Math.max(this.map.getHeight(I,D),this.map.hasWater?this.map.waterLevel:-99)+a;for(let I=0;I<r.length-1;I++){if(n&&I%3===2)continue;let[D,E]=r[I],[h,v]=r[I+1],w=h-D,A=v-E,z=Math.hypot(w,A)||1,N=-A/z*i/2,F=w/z*i/2,W=c(D,E),V=c(h,v);o.push(D+N,W,E+F,h+N,V,v+F,D-N,W,E-F),o.push(h+N,V,v+F,h-N,V,v-F,D-N,W,E-F)}let l=r.length,[u,d]=r[l-1],[f,p]=r[Math.max(0,l-3)],g=u-f,y=d-p,x=Math.hypot(g,y)||1,m=g/x,M=y/x,b=c(u,d),_=i*2.4;o.push(u+m*_,b,d+M*_,u-M*_,b,d+m*_,u+M*_,b,d-m*_);let U=new he;U.setAttribute("position",new jt(o,3));let P=new Ft(U,new me({color:e,transparent:!0,opacity:.8,depthWrite:!1,side:ye}));P.renderOrder=4,this.routeGroup.add(P)}addMarker(t,e,n,i=3){let r=new Xn(i-.45,i,32,1);r.rotateX(-Math.PI/2);let o=new Ft(r,new me({color:n,transparent:!0,opacity:.85,depthWrite:!1,side:ye}));return o.position.set(t,this.map.getHeight(t,e)+.45,e),o.renderOrder=4,this.routeGroup.add(o),o}addFlag(t,e,n,i){let r=new pe,o=new Ft(new Pi(.07,.07,3,4),new me({color:2763306}));o.position.y=1.5;let a=new Ft(new nn(1.2,.8),new me({color:n,side:ye}));a.position.set(.6,2.6,0),r.add(o,a),r.position.set(t,this.map.getHeight(t,e),e),this.routeGroup.add(r)}updateFootprints(t,e,n,i,r){if(!this.fp){this.fp=new Map;let c=new he;c.setAttribute("position",new jt([0,0,1.6,-1.3,0,-.6,1.3,0,-.6,-.55,0,-.6,.55,0,-.6,0,0,-1.9,.55,0,-.6,-.55,0,-1.9,.55,0,-1.9],3)),this.arrow=new Ft(c,new me({color:16765802,transparent:!0,opacity:.9,depthWrite:!1,side:ye})),this.arrow.renderOrder=5,this.group.add(this.arrow)}let o=(c,l)=>Math.max(this.map.getHeight(c,l),this.map.hasWater?this.map.waterLevel:-99)+.45;for(let c of t){let l=this.fp.get(c);if(!l){let _=new he;_.setAttribute("position",new _e(new Float32Array(33*3),3)),l=new Qs(_,new Ii({color:6988543,transparent:!0,opacity:.85,depthWrite:!1})),l.renderOrder=5,l.frustumCulled=!1,this.group.add(l),this.fp.set(c,l)}if(l.visible=n&&c.alive,!l.visible)continue;let u=c===e;l.material.color.setHex(u?16765802:6988543),l.material.opacity=u?.95:.6;let d=c.fwdX,f=c.fwdZ,p=f,g=-d,y=c.halfW+.3,x=c.halfD+.3,m=[[-y,x],[y,x],[y,-x],[-y,-x]],M=l.geometry.attributes.position,b=0;for(let _=0;_<4;_++){let[U,P]=m[_],[I,D]=m[(_+1)%4];for(let E=0;E<8;E++){let h=E/8,v=U+(I-U)*h,w=P+(D-P)*h,A=c.x+p*v+d*w,z=c.z+g*v+f*w;M.setXYZ(b++,A,o(A,z),z)}}M.setXYZ(b,M.getX(0),M.getY(0),M.getZ(0)),M.needsUpdate=!0}let a=this.arrow;if(a.visible=!!(i&&e&&e.alive&&e.side===0),a.visible){let c=e,l=c.halfD+3.2+Math.sin(r*4)*.25,u=c.x+c.fwdX*l,d=c.z+c.fwdZ*l;a.position.set(u,o(u,d)+.1,d),a.rotation.y=c.face,a.scale.setScalar(1.8)}}rectAt(t,e,n,i,r,o){let a=(I,D)=>Math.max(this.map.getHeight(I,D),this.map.hasWater?this.map.waterLevel:-99)+.5,c=Math.sin(i),l=Math.cos(i),u=l,d=-c,f=t.halfW+.2,p=t.halfD+.2,g=[],y=[[-f,p],[f,p],[f,-p],[-f,-p]];for(let I=0;I<4;I++){let[D,E]=y[I],[h,v]=y[(I+1)%4];for(let w=0;w<6;w++){let A=w/6,z=D+(h-D)*A,N=E+(v-E)*A,F=e+u*z+c*N,W=n+d*z+l*N;g.push(new B(F,a(F,W),W))}}let x=new he().setFromPoints(g),m=new Qs(x,new Ii({color:r,transparent:!0,opacity:o,depthWrite:!1}));m.renderOrder=6;let M=e+c*(p+1.2),b=n+l*(p+1.2),_=new he;_.setAttribute("position",new jt([0,0,.9,-.7,0,-.5,.7,0,-.5],3));let U=new Ft(_,new me({color:r,transparent:!0,opacity:o,depthWrite:!1,side:ye}));U.position.set(M,a(M,b),b),U.rotation.y=i,U.renderOrder=6;let P=new pe;return P.add(m,U),P}showGhosts(t){this.clearGhosts(),this.ghosts=new pe;for(let e of t)this.ghosts.add(this.rectAt(e.L,e.x,e.z,e.face,16769146,.9));this.group.add(this.ghosts)}clearGhosts(){this.ghosts&&(this.group.remove(this.ghosts),this.ghosts.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.ghosts=null)}pingMove(t,e,n,i=8380538){this.pings=this.pings||[];let r=new Xn(.75,1,32,1);r.rotateX(-Math.PI/2);let o=new Ft(r,new me({color:i,transparent:!0,opacity:.9,depthWrite:!1,side:ye}));o.position.set(t,Math.max(this.map.getHeight(t,e),this.map.hasWater?this.map.waterLevel:-99)+.6,e),o.renderOrder=6,this.group.add(o),this.pings.push({obj:o,t:0,ttl:.9,kind:"ring"});for(let a of n||[]){let c=this.rectAt(a.L,a.x,a.z,a.face,i,.85);this.group.add(c),this.pings.push({obj:c,t:0,ttl:1.6,kind:"rect"})}}pingAttack(t){this.pings=this.pings||[];let e=Math.max(t.halfW,t.halfD)+1.5,n=new Xn(e-.5,e,40,1);n.rotateX(-Math.PI/2);let i=new Ft(n,new me({color:16730682,transparent:!0,opacity:.95,depthWrite:!1,side:ye}));i.position.set(t.x,this.map.getHeight(t.x,t.z)+.6,t.z),i.renderOrder=6,this.group.add(i),this.pings.push({obj:i,t:0,ttl:.8,kind:"attack",L:t})}updatePings(t){if(!this.pings||!this.pings.length)return;for(let n of this.pings){n.t+=t;let i=n.t/n.ttl;if(n.kind==="ring"){let r=1+i*3.5;n.obj.scale.set(r,1,r),n.obj.material.opacity=.9*(1-i)}else if(n.kind==="attack"){let r=1.25-i*.3;n.obj.scale.set(r,1,r),n.obj.position.x=n.L.x,n.obj.position.z=n.L.z,n.obj.material.opacity=.95*(1-i)}else n.obj.traverse(r=>{r.material&&(r.material.opacity=.85*(1-i*i))})}let e=[];for(let n of this.pings){if(n.t<n.ttl){e.push(n);continue}this.group.remove(n.obj),n.obj.traverse(i=>{i.geometry&&i.geometry.dispose()})}this.pings=e}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose()})}};function yn(s){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,i)=>n+(i-n)*e(),e.int=(n,i)=>Math.floor(n+(i-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}function Kh(s){let t=yn(s*7919+13),e=new Uint8Array(512),n=[...Array(256).keys()];for(let a=255;a>0;a--){let c=Math.floor(t()*(a+1));[n[a],n[c]]=[n[c],n[a]]}for(let a=0;a<512;a++)e[a]=n[a&255];let i=(a,c,l)=>{switch(a&7){case 0:return c+l;case 1:return-c+l;case 2:return c-l;case 3:return-c-l;case 4:return c;case 5:return-c;case 6:return l;default:return-l}},r=a=>a*a*a*(a*(a*6-15)+10),o=(a,c)=>{let l=Math.floor(a)&255,u=Math.floor(c)&255;a-=Math.floor(a),c-=Math.floor(c);let d=r(a),f=r(c),p=e[l]+u,g=e[l+1]+u,y=i(e[p],a,c)+d*(i(e[g],a-1,c)-i(e[p],a,c)),x=i(e[p+1],a,c-1)+d*(i(e[g+1],a-1,c-1)-i(e[p+1],a,c-1));return y+f*(x-y)};return o.fbm=(a,c,l=4)=>{let u=0,d=.5,f=1;for(let p=0;p<l;p++)u+=d*o(a*f,c*f),f*=2,d*=.5;return u},o}var sn=(s,t,e)=>s<t?t:s>e?e:s,Ni=(s,t,e)=>s+(t-s)*e,hi=(s,t,e)=>{let n=sn((e-s)/(t-s),0,1);return n*n*(3-2*n)};var bs=150,ws=100,Ss=112,Es=80,Fi=1.5,rn=2,Ea=0,ki=1,rr=2,Li=3,ar=4,Jc=5,Kc=6,jc=7,Ta=class{constructor(t,e,n){this.scenario=t,this.biome=e,this.seed=n,this.rng=yn(n),this.noise=Kh(n),this.nx=Math.round(Ss*2/Fi)+1,this.nz=Math.round(Es*2/Fi)+1,this.heights=new Float32Array(this.nx*this.nz),this.ground=new Uint8Array(this.nx*this.nz),this.gw=bs/rn,this.gd=ws/rn;let i=this.gw*this.gd;this.blocked=new Uint8Array(i),this.cost=new Float32Array(i).fill(1),this.flags=new Uint8Array(i),this.clear=new Uint8Array(i),this.waterLevel=-.55,this.hasWater=!1,this.structures=[],this.decor={trees:[],rocks:[],tufts:[],flowers:[],tents:[],menhirs:[],bushes:[],fences:[],ruins:[],torches:[],reeds:[],lilies:[],logs:[],mushrooms:[],fields:[],farms:[],mill:null},this.forests=[],this.roads=[],this.bridges=[],this.castle=null,this.gate=null,this.objective=null,this.zones=[null,null],this.camps=[null,null],this.fogDensity=t==="forest"?.0068:.0042,this.generate()}generate(){let t=this.rng,e=this.noise,n=this.scenario;if(this.phase=t.range(0,Math.PI*2),this.roadZ=t.range(-12,12),n==="assault"||n==="defend"){let r=n==="assault"?1:-1;this.castle={cx:48*r,cz:t.range(-6,6),half:19,owner:n==="assault"?1:0,face:-r,base:1.6}}if(n==="river"){this.hasWater=!0,this.river={amp:t.range(5,9),freq:t.range(.035,.06),ph:this.phase,half:5.2};let r=t.range(-22,22);this.bridgeZ=r;let o=[],a=r>0?t.range(-40,-18):t.range(18,40);if(o.push(a),t.chance(.6)){let c=t.range(-40,40);Math.abs(c-r)>16&&Math.abs(c-a)>16&&o.push(c)}this.fords=o}n==="canyon"&&(this.canyon={amp:t.range(8,13),ph:this.phase,pinch:t.range(-15,15),top:12},this.biomeTint=!0),n==="hill"&&(this.objective={type:"hill",x:t.range(-5,5),z:t.range(-5,5),r:9,score:[0,0],need:100}),(n==="hill"||n==="forest")&&(this.hasWater=!0),(n==="castle"||this.castle)&&(this.hasWater=!0),this.hilly=n==="canyon"?1:t.range(.55,1.7)*(this.biome==="highland"?1.35:1),this.freq=t.range(.016,.03),this.features=this.pickFeatures(),this.features.some(r=>r.type==="marsh"||r.type==="lake")&&(this.hasWater=!0);let i=(r,o)=>this.heightFn(r,o);for(let r=0;r<this.nz;r++)for(let o=0;o<this.nx;o++){let a=-Ss+o*Fi,c=-Es+r*Fi,l=r*this.nx+o,[u,d]=i(a,c);this.heights[l]=u,this.ground[l]=d}this.placeStructures(),this.buildNav(),this.placeDecor(),this.buildTreeHash()}canyonCenter(t){let e=this.canyon;return Math.sin(t*.035+e.ph)*e.amp+Math.sin(t*.09+e.ph*2)*2.5}canyonHalf(t){let e=this.canyon;return 15-6*Math.exp(-(((t-e.pinch)/16)**2))+this.noise(t*.08,3.3)*2.5}riverX(t){let e=this.river;return Math.sin(t*e.freq+e.ph)*e.amp+this.noise(t*.05,9.1)*3}pickFeatures(){let t=this.rng,e=this.scenario,n=[];if(e==="canyon")return n;let i=this.castle,r=i?i.cx>0?[-38,12]:[-12,38]:[-38,38],o=e==="forest"?["marsh","village","ridge","hedges","lake","ruins","pillars"]:e==="river"?["ridge","village","hedges","plateau","pillars","ruins","marsh"]:i?["village","hedges","ridge","marsh","pillars","ruins"]:["ridge","plateau","village","marsh","lake","hedges","pillars","ruins"],a=i?t.int(1,2):t.int(2,3),c={ridge:10,plateau:12,village:11,marsh:10,lake:9,hedges:12,pillars:7,ruins:5},l=(d,f,p)=>this.objective&&Math.hypot(d-this.objective.x,f-this.objective.z)<p+12||this.river&&Math.abs(d-this.riverX(f))<p+9||i&&Math.max(Math.abs(d-i.cx),Math.abs(f-i.cz))<i.half+10+p?!1:!n.some(g=>Math.hypot(g.x-d,g.z-f)<g.rad+p+6),u=o.slice();for(let d=0;d<a&&u.length;d++){let f=u.splice(t.int(0,Math.min(u.length-1,3)),1)[0],p=c[f]*t.range(.85,1.2),g=null;for(let x=0;x<60&&!g;x++){let m=t.range(r[0]+p*.6,r[1]-p*.6),M=t.range(-40+p*.5,40-p*.5);l(m,M,p)&&(g={type:f,x:m,z:M,rad:p})}if(!g)continue;let y=g;if(f==="ridge"){let x=t.range(-.6,.6)+Math.PI/2;y.len=t.range(26,44),y.a=x,y.h=t.range(3.5,6),y.w=t.range(5,8),y.gap=t.chance(.7)?t.range(-.3,.3):null,y.rad=y.len/2}else f==="plateau"?(y.h=t.range(4,6),y.ramps=[t.range(0,6.28)],y.ramps.push(y.ramps[0]+Math.PI+t.range(-.6,.6))):f==="village"?y.houses=t.int(5,8):f==="hedges"&&(y.kind=this.biome==="desert"||this.biome==="winter"||this.biome==="highland"?"wall":"hedge");n.push(y)}return n}featureHeight(t,e,n,i){var o;let r=this.noise;for(let a of this.features){let c=t-a.x,l=e-a.z;if(Math.abs(c)>a.rad+16||Math.abs(l)>a.rad+16)continue;let u=Math.hypot(c,l);switch(a.type){case"ridge":{let d=Math.cos(a.a),f=Math.sin(a.a),p=(c*d+l*f)/(a.len/2),g=Math.max(-1,Math.min(1,p)),y=a.x+d*g*a.len/2,x=a.z+f*g*a.len/2,m=Math.hypot(t-y,e-x)+Math.max(0,Math.abs(p)-1)*4,M=Math.exp(-((m/a.w)**2));a.gap!==null&&(M*=1-.9*Math.exp(-(((p-a.gap)*a.len/2/4.5)**2))),n+=a.h*M*(.85+.3*r(t*.15,e*.15)),M>.75&&i===Ea&&r(t*.3,e*.3)>.1&&(i=Li);break}case"plateau":{let d=Math.atan2(l,c),f=0;for(let x of a.ramps){let m=Math.abs((d-x+Math.PI*3)%(Math.PI*2)-Math.PI);f=Math.max(f,Math.max(0,1-m/.45))}let p=2.2+f*13,g=a.rad+r(d*2,3.3)*1.5,y=1-Math.max(0,Math.min(1,(u-g+p)/p));n=Math.max(n,n*.3+a.h*y+(y>.98?r(t*.2,e*.2)*.2:0)),y>.08&&y<.92&&f<.3&&(i=Li);break}case"marsh":{let d=a.rad*(1+r(t*.08,e*.08)*.35),f=1-Math.max(0,Math.min(1,(u-d*.6)/(d*.4)));f>0&&(n=n*(1-f)+(this.waterLevel-.12+r(t*.22,e*.22)*.45)*f,f>.3&&(i=jc));break}case"lake":{let d=a.rad*(1+r(t*.07,e*.07+5)*.3),f=1-Math.max(0,Math.min(1,(u-d*.55)/(d*.45)));f>0&&(n=n*(1-f)+-2.6*f,i=f>.55?ar:rr);break}case"village":{let d=1-Math.max(0,Math.min(1,(u-a.rad)/7));d>0&&(n=n*(1-d)+((o=a.h0)!=null?o:a.h0=n)*d),(u<a.rad*.38||u<a.rad&&Math.abs(r(t*.3,e*.3))<.06)&&(i=ki);break}}}return[n,i]}heightFn(t,e){let n=this.noise,i=this.freq||.022,r=n.fbm(t*i,e*i,4)*3.2*(this.hilly||1)+n(t*.09,e*.09)*.35;this.biome==="desert"&&this.scenario!=="canyon"&&(r+=Math.abs(n(t*.035+e*.012,e*.02))*2.2-.6);let o=Ea;this.features&&this.features.length&&([r,o]=this.featureHeight(t,e,r,o));let a=Math.max(0,Math.abs(t)-74),c=Math.max(0,Math.abs(e)-49),l=Math.sqrt(a*a+c*c),u=0;l>0&&(u=Math.pow(l/12,1.4)*(6+10*(.5+.5*n(t*.05,e*.05))));let d=this.scenario;if(d==="canyon"){let f=this.canyonCenter(t),p=this.canyonHalf(t),g=Math.abs(e-f),y=hi(p,p+3.5,g),x=this.canyon.top+n.fbm(t*.03,e*.03,3)*4,m=n.fbm(t*.04,e*.04,3)*1.2,M=Math.floor(y*4)/4*.35+y*.65;r=Ni(m,x,M),o=y>.12?y>.95?Ea:Li:Kc,g<3&&Math.abs(t)<70&&(o=ki),u*=.5}else if(d==="river"){let f=this.riverX(e),p=Math.abs(t-f),g=this.river.half+n(e*.1,1.7)*1,y=1-hi(g-1.5,g+2.5,p),x=-2.2;for(let m of this.fords){let M=Math.abs(e-m);M<5&&(x=Ni(-.2,x,hi(2.5,5,M)))}r=Ni(r*.6,x,y),y>.25?o=ar:y>.02&&(o=rr)}else if(d==="hill"){let f=this.objective,p=Math.hypot(t-f.x,e-f.z),g=7.5*Math.exp(-((p/21)**2));r=r*.8+g,p<11&&(r=Ni(r,7.5+n(t*.1,e*.1)*.2,hi(11,8,p)),p<10&&(o=ki))}else d==="forest"&&(r=r*1.2);if(this.castle){let f=this.castle,p=Math.abs(t-f.cx),g=Math.abs(e-f.cz),y=Math.max(p,g),x=hi(f.half+12,f.half+5,y);r=Ni(r,f.base,x);let m=f.half+3,M=f.half+7.5;if(y>m-1&&y<M+1){let b=hi(m-1,m+1,y)*(1-hi(M-1,M+1,y));r=Ni(r,-2,b),b>.3?o=ar:b>.02&&(o=rr)}y<f.half+1&&(o=ki)}if(d!=="canyon"&&Math.abs(t)<74){let f=this.roadZ+Math.sin(t*.05+this.phase)*6;Math.abs(e-f)<1.6&&o===Ea&&(o=ki)}return r+=u,l>6&&r>14&&this.biome!=="desert"?o=Jc:l>3&&u>9&&(o=Li),[r,o]}terrainHeight(t,e){let n=(t+Ss)/Fi,i=(e+Es)/Fi,r=Math.floor(n),o=Math.floor(i);r=sn(r,0,this.nx-2),o=sn(o,0,this.nz-2);let a=sn(n-r,0,1),c=sn(i-o,0,1),l=this.heights,u=this.nx,d=l[o*u+r],f=l[o*u+r+1],p=l[(o+1)*u+r],g=l[(o+1)*u+r+1];return a+c<=1?d+(f-d)*a+(p-d)*c:g+(p-g)*(1-a)+(f-g)*(1-c)}getHeight(t,e){let n=this.terrainHeight(t,e);for(let i of this.bridges){let r=(t-i.x)*i.cos+(e-i.z)*i.sin,o=-(t-i.x)*i.sin+(e-i.z)*i.cos;if(Math.abs(r)<i.len/2&&Math.abs(o)<i.width/2){let a=1-(r/(i.len/2))**2;n=Math.max(n,i.y+a*i.arch)}}return this.hasWater&&n<this.waterLevel-.35&&(n=Math.max(n,this.waterLevel-.35)),n}placeFeatureStructures(){let t=this.rng;for(let e of this.features)if(e.type==="village"){let n=e.houses;for(let i=0;i<n;i++)for(let r=0;r<20;r++){let o=i/n*Math.PI*2+t.range(-.3,.3),a=e.rad*t.range(.5,.95),c=e.x+Math.cos(o)*a,l=e.z+Math.sin(o)*a,u=[0,Math.PI/2,Math.PI,-Math.PI/2][Math.round((o+Math.PI)/(Math.PI/2))%4],d=Math.abs(Math.sin(u))>.5?4:5,f=d===4?5:4;if(!this.structures.some(p=>p.kind==="house"&&Math.hypot(p.x-c,p.z-l)<7.5)){this.structures.push({kind:"house",x:c,z:l,rot:u+Math.PI,w:d,d:f,village:!0,roof:t.int(0,2)});break}}this.structures.push({kind:"well",x:e.x+t.range(-1.5,1.5),z:e.z+t.range(-1.5,1.5)});for(let i=0;i<3;i++){let r=t()*6.28,o=e.rad*.3;this.decor.stalls=this.decor.stalls||[],this.decor.stalls.push({x:e.x+Math.cos(r)*o+3,z:e.z+Math.sin(r)*o,rot:r,col:t.int(0,3)})}}else if(e.type==="hedges"){let n=t.int(3,5);for(let i=0;i<n;i++){let r=Math.max(-38,Math.min(38,e.x+t.range(-e.rad,e.rad))),o=Math.max(-42,Math.min(42,e.z+t.range(-e.rad,e.rad)));if(this.castle&&Math.max(Math.abs(r-this.castle.cx),Math.abs(o-this.castle.cz))<this.castle.half+14)continue;let a=t.chance(.6)?Math.PI/2+t.range(-.3,.3):t.range(-.3,.3);this.structures.push({kind:"hedge",x:r,z:o,len:t.range(7,13),rot:a,style:e.kind})}}else if(e.type==="pillars"){let n=t.int(3,6);for(let i=0;i<n;i++){let r=t()*6.28,o=t()*e.rad;this.structures.push({kind:"spire",x:e.x+Math.cos(r)*o,z:e.z+Math.sin(r)*o,r:t.range(1.2,2.2),h:t.range(5,11)})}}else if(e.type==="ruins"){this.decor.ruins.push({x:e.x,z:e.z,r:2.6});for(let n=0;n<3;n++){let i=t()*6.28;this.structures.push({kind:"hedge",x:e.x+Math.cos(i)*5,z:e.z+Math.sin(i)*5,len:t.range(3,6),rot:i+Math.PI/2,style:"ruin"})}}}placeStructures(){let t=this.rng,e=this.castle;if(this.placeFeatureStructures(),e){let l=e.half,u=e.face,d=e.cx+u*l;e.gateX=d;let f=3.4,p=(x,m,M,b)=>this.structures.push({kind:"wall",x,z:m,w:M,d:b,h:6.2});p(e.cx-u*l,e.cz,2.2,l*2),p(e.cx,e.cz-l,l*2,2.2),p(e.cx,e.cz+l,l*2,2.2);let g=l-f;p(d,e.cz-f-g/2,2.2,g),p(d,e.cz+f+g/2,2.2,g);for(let x of[-1,1])for(let m of[-1,1])this.structures.push({kind:"tower",x:e.cx+x*l,z:e.cz+m*l,r:3.2,h:9.5});this.structures.push({kind:"tower",x:d,z:e.cz-f-1.4,r:2.4,h:8.4,small:!0}),this.structures.push({kind:"tower",x:d,z:e.cz+f+1.4,r:2.4,h:8.4,small:!0}),this.gate={x:d,z:e.cz,w:f*2,owner:e.owner,hp:520,maxHp:520,face:u,alive:!0,shake:0},this.structures.push({kind:"gate",ref:this.gate,x:d,z:e.cz,w:f*2,h:5.4});let y=e.cx-u*(l-8);this.structures.push({kind:"keep",x:y,z:e.cz,w:9,d:9,h:13}),this.structures.push({kind:"house",x:e.cx-u*(l-4),z:e.cz-l+5,rot:0}),this.structures.push({kind:"house",x:e.cx-u*(l-4),z:e.cz+l-5,rot:Math.PI}),this.structures.push({kind:"well",x:e.cx+u*2,z:e.cz+8}),this.bridges.push({x:d+u*5.5,z:e.cz,len:12,width:6.4,y:e.base+.15,arch:.2,cos:1,sin:0,wood:!0}),this.objective={type:"keep",x:y+u*9.5,z:e.cz,r:8,hold:0,need:20,owner:e.owner};for(let x of[-1,1])this.decor.torches.push({x:d+u*1.6,z:e.cz+x*(f+.2),y:e.base+3.5})}if(this.scenario==="river"){let a=this.bridgeZ,c=this.riverX(a),l=(this.riverX(a+1)-this.riverX(a-1))/2,u=Math.atan(l)*-1;this.bridges.push({x:c,z:a,len:22,width:5.6,y:.1,arch:1.4,cos:Math.cos(u),sin:Math.sin(u),wood:!1})}if(this.scenario==="hill"){let a=this.objective,c=9;for(let l=0;l<c;l++){let u=l/c*Math.PI*2+.3;this.decor.menhirs.push({x:a.x+Math.cos(u)*8.6,z:a.z+Math.sin(u)*8.6,h:t.range(2.4,3.6),rot:u,fallen:t.chance(.15)})}this.decor.menhirs.push({x:a.x,z:a.z,h:1.2,rot:0,altar:!0})}if(this.scenario==="canyon"){let a=this.canyon.pinch+t.range(-6,6),c=this.canyonCenter(a);this.decor.ruins.push({x:a,z:c+(t.chance(.5)?-1:1)*(this.canyonHalf(a)-4),r:2.6})}let n=24,i=60,r={x0:-73,x1:-73+n,z0:-i/2,z1:i/2},o={x0:73-n,x1:73,z0:-i/2,z1:i/2};if(this.zones=[r,o],e){let a=e.half-2.2,c={x0:e.cx-a,x1:e.cx+a,z0:e.cz-a,z1:e.cz+a,castle:!0};this.zones[e.owner]=c;let l=1-e.owner;this.zones[l]=l===0?{x0:-73,x1:-45,z0:-32,z1:32}:{x0:45,x1:73,z0:-32,z1:32}}this.scenario==="canyon"&&(this.zones=[{x0:-73,x1:-52,z0:-40,z1:40},{x0:52,x1:73,z0:-40,z1:40}]);for(let a=0;a<2;a++){let c=this.zones[a],l=a===0?-71:71,u=(c.z0+c.z1)/2;if(this.scenario==="canyon"&&(u=this.canyonCenter(l)),this.camps[a]={x:l,z:u},!(e&&e.owner===a))for(let d=0;d<4;d++){let f=l-(a===0?-1:1)*t.range(-1,2)+(a===0?-1:1)*1.5,p=u+(d-1.5)*6+t.range(-1,1);this.decor.tents.push({x:a===0?-76-t.range(0,3):76+t.range(0,3),z:p,side:a,rot:t.range(-.4,.4)+(a===0?Math.PI/2:-Math.PI/2),big:d===1})}}}cellIndex(t,e){let n=Math.floor((t+bs/2)/rn),i=Math.floor((e+ws/2)/rn);return n<0||i<0||n>=this.gw||i>=this.gd?-1:i*this.gw+n}cellCenter(t){let e=t%this.gw,n=t/this.gw|0;return[-bs/2+(e+.5)*rn,-ws/2+(n+.5)*rn]}buildNav(){let t=this.gw,e=this.gd;for(let i=0;i<e;i++)for(let r=0;r<t;r++){let o=i*t+r,a=-bs/2+r*rn,c=-ws/2+i*rn,l=1e9,u=-1e9,d=0,f=0;for(let g=0;g<=2;g++)for(let y=0;y<=2;y++){let x=this.terrainHeight(a+g,c+y);l=Math.min(l,x),u=Math.max(u,x),d+=x,f++}let p=d/f;(r===0||i===0||r===t-1||i===e-1)&&(this.blocked[o]=1),u-l>2.6&&(this.blocked[o]=1),this.scenario==="canyon"&&p>5&&(this.blocked[o]=1),this.hasWater&&p<this.waterLevel-.9&&(this.blocked[o]=1),this.hasWater&&p<this.waterLevel+.1&&p>=this.waterLevel-.9&&(this.flags[o]|=2,this.cost[o]+=1.6)}for(let i of this.bridges)for(let r=0;r<t*e;r++){let[o,a]=this.cellCenter(r),c=(o-i.x)*i.cos+(a-i.z)*i.sin,l=-(o-i.x)*i.sin+(a-i.z)*i.cos;Math.abs(c)<i.len/2+.5&&Math.abs(l)<i.width/2-.3&&(this.blocked[r]=0,this.flags[r]=this.flags[r]&-3|4,this.cost[r]=1)}for(let i of this.structures)if(i.kind==="wall"||i.kind==="keep"||i.kind==="house"){let r=(i.w||5)/2+.9,o=(i.d||4)/2+.9;this.markRect(i.x-r,i.z-o,i.x+r,i.z+o,a=>{this.blocked[a]=1})}else if(i.kind==="hedge"){let r=Math.ceil(i.len/1);for(let o=0;o<=r;o++){let a=o/r-.5,c=i.x+Math.cos(i.rot)*a*i.len,l=i.z+Math.sin(i.rot)*a*i.len,u=this.cellIndex(c,l);u>=0&&(this.blocked[u]=1)}}else if(i.kind==="spire"){let r=i.r+.6;this.markRect(i.x-r,i.z-r,i.x+r,i.z+r,o=>{let[a,c]=this.cellCenter(o);Math.hypot(a-i.x,c-i.z)<r+.4&&(this.blocked[o]=1)})}else if(i.kind==="tower"||i.kind==="well"){let r=(i.r||1.2)+.8;this.markRect(i.x-r,i.z-r,i.x+r,i.z+r,o=>{let[a,c]=this.cellCenter(o);Math.hypot(a-i.x,c-i.z)<r+.6&&(this.blocked[o]=1)})}let n=this.castle;if(n){let i=n.half-1.2;this.markRect(n.cx-i,n.cz-i,n.cx+i,n.cz+i,o=>{this.flags[o]|=16});let r=this.gate;r.cells=[],this.markRect(r.x-1.6,r.z-r.w/2+.4,r.x+1.6,r.z+r.w/2-.4,o=>{this.blocked[o]=0,this.flags[o]|=8,r.cells.push(o)})}for(let i of this.decor.menhirs){if(i.altar)continue;let r=this.cellIndex(i.x,i.z);r>=0&&(this.blocked[r]=1)}for(let i of this.decor.ruins)this.markRect(i.x-i.r,i.z-i.r,i.x+i.r,i.z+i.r,r=>{this.blocked[r]=1});this.makeForests();for(let i of this.forests)this.markRect(i.x-i.r,i.z-i.r,i.x+i.r,i.z+i.r,r=>{let[o,a]=this.cellCenter(r);Math.hypot((o-i.x)/i.r,(a-i.z)/i.r*i.rx)<1&&!this.blocked[r]&&(this.flags[r]|=1,this.cost[r]+=.6)});if(this.scenario==="canyon"){let i=this.rng;for(let r=0;r<7;r++){let o=i.range(-44,44),c=this.canyonCenter(o)+i.range(-1,1)*(this.canyonHalf(o)-5),l=i.range(1.4,2.6);this.decor.rocks.push({x:o,z:c,s:l*1.35,big:!0,rot:i()*6}),this.markRect(o-l,c-l,o+l,c+l,u=>{let[d,f]=this.cellCenter(u);Math.hypot(d-o,f-c)<l+.4&&(this.blocked[u]=1)})}}this.computeClearance()}makeForests(){let t=this.rng,e=this.scenario==="forest"?t.int(11,14):this.scenario==="canyon"?0:t.int(2,4),n=0;for(;this.forests.length<e&&n++<300;){let i=t.range(-44,44),r=t.range(-44,44),o=this.scenario==="forest"?t.range(6,11):t.range(5,8);if(this.nearStructure(i,r,o+4)||this.objective&&Math.hypot(i-this.objective.x,r-this.objective.z)<o+12||this.scenario==="river"&&Math.abs(i-this.riverX(r))<o+7||this.forests.some(c=>Math.hypot(c.x-i,c.z-r)<c.r+o+3))continue;let a=this.cellIndex(i,r);a<0||this.blocked[a]||this.forests.push({x:i,z:r,r:o,rx:t.range(.8,1.25)})}}nearStructure(t,e,n){for(let i of this.features||[])if((i.type==="village"||i.type==="lake"||i.type==="pillars"||i.type==="ruins")&&Math.hypot(t-i.x,e-i.z)<i.rad+n)return!0;if(this.castle&&Math.max(Math.abs(t-this.castle.cx),Math.abs(e-this.castle.cz))<this.castle.half+9+n*.3)return!0;for(let i of this.bridges)if(Math.hypot(t-i.x,e-i.z)<n+i.len/2)return!0;return!!(this.scenario==="river"&&this.fords.some(i=>Math.abs(e-i)<n&&Math.abs(t-this.riverX(i))<n+6))}markRect(t,e,n,i,r){let o=Math.max(0,Math.floor((t+bs/2)/rn)),a=Math.min(this.gw-1,Math.floor((n+bs/2)/rn)),c=Math.max(0,Math.floor((e+ws/2)/rn)),l=Math.min(this.gd-1,Math.floor((i+ws/2)/rn));for(let u=c;u<=l;u++)for(let d=o;d<=a;d++)r(u*this.gw+d)}computeClearance(){let t=this.gw,e=this.gd,n=t*e,i=this.clear;i.fill(255);let r=new Int32Array(n),o=0,a=0;for(let c=0;c<n;c++)this.blocked[c]&&(i[c]=0,r[a++]=c);for(;o<a;){let c=r[o++],l=c%t,u=c/t|0;for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){let p=l+f,g=u+d;if(p<0||g<0||p>=t||g>=e)continue;let y=g*t+p;i[y]>i[c]+1&&(i[y]=i[c]+1,r[a++]=y)}}}clearanceAt(t,e){let n=this.cellIndex(t,e);return n<0?0:this.clear[n]*rn-1}isPassable(t,e,n=-1){let i=this.cellIndex(t,e);return!(i<0||this.blocked[i]||this.flags[i]&8&&this.gate&&this.gate.alive&&n!==this.gate.owner)}flagAt(t,e){let n=this.cellIndex(t,e);return n<0?0:this.flags[n]}inCastle(t,e){let n=this.castle;return!!n&&Math.abs(t-n.cx)<n.half-.8&&Math.abs(e-n.cz)<n.half-.8}placeDecor(){let t=this.rng,e=this.decor,n=this.biome,i=(o,a,c)=>this.zones.some(l=>o>l.x0-c&&o<l.x1+c&&a>l.z0-c&&a<l.z1+c);for(let o of this.forests){let a=Math.round(o.r*o.r*.22);for(let c=0;c<a;c++){let l=t()*Math.PI*2,u=Math.sqrt(t())*o.r,d=o.x+Math.cos(l)*u,f=o.z+Math.sin(l)*u/o.rx,p=this.cellIndex(d,f);p<0||this.blocked[p]||e.trees.push({x:d,z:f,s:t.range(.8,1.35),kind:this.treeKind(),rot:t()*6})}for(let c=0;c<a*.4;c++){let l=t()*Math.PI*2,u=Math.sqrt(t())*(o.r+2);e.bushes.push({x:o.x+Math.cos(l)*u,z:o.z+Math.sin(l)*u,s:t.range(.5,1)})}}for(let o=0;o<70;o++){let a=t.range(-74,74),c=t.range(-49,49),l=this.cellIndex(a,c);l<0||this.blocked[l]||this.flags[l]&30||i(a,c,3)||this.nearStructure(a,c,3)||this.objective&&Math.hypot(a-this.objective.x,c-this.objective.z)<12||this.scenario==="canyon"&&this.terrainHeight(a,c)>3||(t.chance(.55)?e.trees.push({x:a,z:c,s:t.range(.8,1.3),kind:this.treeKind(),rot:t()*6}):e.rocks.push({x:a,z:c,s:t.range(.5,1.1),rot:t()*6}))}for(let o=0;o<420;o++){let a=t.range(-Ss+4,Ss-4),c=t.range(-Es+4,Es-4);Math.abs(a)<77&&Math.abs(c)<52||this.terrainHeight(a,c)>20||(t.chance(.72)?e.trees.push({x:a,z:c,s:t.range(.9,1.6),kind:this.treeKind(!0),rot:t()*6}):e.rocks.push({x:a,z:c,s:t.range(.8,2.2),rot:t()*6}))}if(this.scenario==="canyon")for(let o=0;o<90;o++){let a=t.range(-74,74),c=t.range(-49,49);this.terrainHeight(a,c)<10||(t.chance(.5)?e.trees.push({x:a,z:c,s:t.range(.8,1.2),kind:this.treeKind(!0),rot:t()*6}):e.rocks.push({x:a,z:c,s:t.range(.6,1.8),rot:t()*6}))}let r=n==="desert"?120:260;for(let o=0;o<r;o++){let a=t.range(-80,80),c=t.range(-54,54),l=this.cellIndex(a,c);l>=0&&(this.blocked[l]||this.flags[l]&22)||this.terrainHeight(a,c)<this.waterLevel+.2&&this.hasWater||(t.chance(.2)?e.flowers.push({x:a,z:c,c:t.int(0,3)}):e.tufts.push({x:a,z:c,s:t.range(.6,1.2),rot:t()*6}))}if(n!=="desert")for(let o=0;o<9;o++){let a=t.range(-70,70),c=t.range(-46,46),l=this.cellIndex(a,c);if(l<0||this.blocked[l]||this.flags[l]&19)continue;let u=t.int(0,3);for(let d=0;d<14;d++){let f=t()*6.28,p=Math.sqrt(t())*4;e.flowers.push({x:a+Math.cos(f)*p,z:c+Math.sin(f)*p,c:t.chance(.8)?u:t.int(0,3)})}}if(this.hasWater){for(let o=0;o<900&&e.reeds.length<90;o++){let a=t.range(-100,100),c=t.range(-70,70),l=this.terrainHeight(a,c);this.castle&&Math.max(Math.abs(a-this.castle.cx),Math.abs(c-this.castle.cz))<this.castle.half+2.5||l>this.waterLevel-.3&&l<this.waterLevel+.3&&e.reeds.push({x:a,z:c,s:t.range(.7,1.2),rot:t()*6})}if(n!=="winter")for(let o=0;o<900&&e.lilies.length<40;o++){let a=t.range(-100,100),c=t.range(-70,70),l=this.terrainHeight(a,c);l<this.waterLevel-.6&&l>this.waterLevel-2.4&&!this.bridges.some(u=>Math.hypot(u.x-a,u.z-c)<u.len/2+2)&&e.lilies.push({x:a,z:c,s:t.range(.5,.9),flower:t.chance(.25)})}}for(let o of this.forests){let a=t.int(1,2);for(let c=0;c<a;c++){let l=t()*6.28,u=t()*o.r*.8,d=o.x+Math.cos(l)*u,f=o.z+Math.sin(l)*u,p=this.cellIndex(d,f);p>=0&&!this.blocked[p]&&e.logs.push({x:d,z:f,rot:t()*6,len:t.range(2.5,4.5)})}for(let c=0;c<6;c++){let l=t()*6.28,u=t()*o.r;e.mushrooms.push({x:o.x+Math.cos(l)*u,z:o.z+Math.sin(l)*u,s:t.range(.6,1.1),red:t.chance(.5)})}}if(n!=="desert"||t.chance(.5)){let o=(a,c,l)=>{let u=1e9,d=-1e9;for(let[f,p]of[[-l,-l],[l,-l],[-l,l],[l,l],[0,0]]){let g=this.terrainHeight(a+f,c+p);u=Math.min(u,g),d=Math.max(d,g)}return d-u<1.4&&u>this.waterLevel+.3&&d<9};for(let a=0;a<400&&e.fields.length<10;a++){let c=t.range(-104,104),l=t.range(-74,74);if(Math.abs(c)<81&&Math.abs(l)<55)continue;let u=t.range(8,14),d=t.range(6,10);o(c,l,Math.max(u,d)/2)&&(e.fields.some(f=>Math.hypot(f.x-c,f.z-l)<14)||e.fields.push({x:c,z:l,w:u,d,rot:t.range(-.5,.5),kind:t.int(0,3)}))}for(let a of e.fields.slice(0,4)){let c=a.x+Math.cos(a.rot)*(a.w/2+4),l=a.z+Math.sin(a.rot)*(a.w/2+4);o(c,l,2.5)&&e.farms.push({x:c,z:l,rot:a.rot})}for(let a=0;a<200&&!e.mill;a++){let c=t.range(-100,100),l=t.range(-70,70);Math.abs(c)<82&&Math.abs(l)<56||o(c,l,2.5)&&!e.fields.some(u=>Math.hypot(u.x-c,u.z-l)<9)&&(e.mill={x:c,z:l,rot:t()*6})}}if(this.scenario!=="canyon")for(let o=0;o<3;o++){let a=t.range(-40,40),c=this.roadZ+Math.sin(a*.05+this.phase)*6+(t.chance(.5)?3:-3),l=this.cellIndex(a,c);l<0||this.blocked[l]||this.nearStructure(a,c,6)||e.fences.push({x:a,z:c,len:t.int(3,6),rot:Math.atan2(Math.cos(a*.05+this.phase)*.3,1)})}}buildTreeHash(){this.treeGrid={W:42,D:30,cells:Array.from({length:42*30},()=>[])};for(let n of this.decor.trees){if(Math.abs(n.x)>80||Math.abs(n.z)>56)continue;let i=Math.floor((n.x+84)/4),r=Math.floor((n.z+60)/4);if(i<0||r<0||i>=42||r>=30)continue;let o=(n.kind==="pine"?1.05:n.kind==="palm"||n.kind==="cactus"?.7:.85)*n.s;this.treeGrid.cells[r*42+i].push({x:n.x,z:n.z,r:o})}}avoidTrees(t,e,n,i=0){let r=this.treeGrid;if(!r)return!1;let o=Math.floor((t+84)/4),a=Math.floor((e+60)/4),c=!1;for(let l=-1;l<=1;l++){let u=a+l;if(!(u<0||u>=r.D))for(let d=-1;d<=1;d++){let f=o+d;if(!(f<0||f>=r.W))for(let p of r.cells[u*r.W+f]){let g=p.r+i,y=t-p.x,x=e-p.z,m=y*y+x*x;if(m<g*g){let M=Math.sqrt(m)||.001;t=p.x+(m>1e-6?y/M:1)*g,e=p.z+(m>1e-6?x/M:0)*g,c=!0}}}}return n[0]=t,n[1]=e,c}treesNear(t,e,n){let i=this.treeGrid;if(!i)return 0;let r=0,o=Math.floor((t+84)/4),a=Math.floor((e+60)/4),c=Math.ceil(n/4);for(let l=a-c;l<=a+c;l++)for(let u=o-c;u<=o+c;u++)if(!(u<0||l<0||u>=i.W||l>=i.D))for(let d of i.cells[l*i.W+u])Math.abs(d.x-t)<n&&Math.abs(d.z-e)<n&&r++;return r}treeKind(t=!1){let e=this.biome,n=this.rng;return e==="desert"?n.chance(.6)?"palm":"cactus":e==="winter"?n.chance(.8)?"pine":"bare":e==="highland"?n.chance(.6)?"pine":n.chance(.5)?"bare":"oak":e==="spring"?n.chance(.3)?"pine":n.chance(.75)?"oak":"birch":this.scenario==="forest"?n.chance(.55)?"pine":"oak":n.chance(t?.5:.35)?"pine":n.chance(.85)?"oak":"birch"}get extent(){return{EXT_X:Ss,EXT_Z:Es,STEP:Fi}}};function Qc(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new he,l=0;for(let u=0;u<s.length;++u){let d=s[u],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0,d=[];for(let f=0;f<s.length;++f){let p=s[f].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+u);u+=s[f].attributes.position.count}c.setIndex(d)}for(let u in r){let d=jh(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<d;++f){let p=[];for(let y=0;y<o[u].length;++y)p.push(o[u][y][f]);let g=jh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function jh(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new _e(o,e,n),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let d=c/e;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<e;g++){let y=u.getComponent(f,g);a.setComponent(f+d,g,y)}}else o.set(u.array,c);c+=u.count*e}return i!==void 0&&(a.gpuType=i),a}var Qh=new Zt,tu=new Ve,eu=new Ce,Ng=new B,Fg=new B;function ui(s){let t=s.index?s.toNonIndexed():s;return t.deleteAttribute("uv"),t.attributes.uv1&&t.deleteAttribute("uv1"),t.computeVertexNormals(),t}function Ut(s,t=0,e=0,n=0,i=0,r=0,o=0,a=1,c=1,l=1){return eu.set(i,r,o),tu.setFromEuler(eu),Qh.compose(Ng.set(t,e,n),tu,Fg.set(a,c,l)),s.applyMatrix4(Qh),s}var ee=(s,t,e)=>ui(new en(s,t,e)),Tn=(s,t,e,n=6)=>ui(new Pi(s,t,e,n,1)),Oi=(s,t,e=6)=>ui(new ca(s,t,e,1)),Aa=(s,t=0)=>ui(new li(s,t)),kg=s=>ui(new la(s,0)),Ge=s=>Qc(s.map(t=>t.index?ui(t):t),!1);function nu(){let s={};return s.leg=Ut(ee(.16,.78,.2),0,-.39,0),s.torso=Ge([Ut(Tn(.25,.2,.62,6),0,0,0),Ut(ee(.72,.14,.2),0,.26,0)]),s.chest=Ut(Tn(.28,.24,.36,6),0,.1,0),s.skirt=Ut(Tn(.22,.3,.26,6),0,0,0),s.head=Aa(.17,0),s.helmRoman=Ge([ui(new xs(.2,6,3,0,Math.PI*2,0,Math.PI/2)),Ut(ee(.44,.04,.12),0,0,-.14)]),s.crest=Ut(ee(.06,.16,.42),0,.26,0),s.plume=Ge([Ut(ee(.07,.3,.46),0,.3,-.02),Ut(ee(.07,.2,.22),0,.28,-.28,.5)]),s.helmCone=Ge([Oi(.21,.36,6),Ut(ee(.05,.16,.04),0,-.1,.19)]),s.horns=Ge([Ut(Oi(.05,.28,5),.2,.06,0,0,0,-1),Ut(Oi(.05,.28,5),-.2,.06,0,0,0,1)]),s.hood=Ut(Oi(.22,.42,5),0,.06,-.02),s.scutum=Ut(ee(.62,.95,.08),0,0,0),s.boss=Ut(Aa(.08,0),0,0,.05),s.round=Ut(Tn(.36,.36,.07,8),0,0,0,Math.PI/2),s.buckler=Ut(Tn(.24,.24,.06,7),0,0,0,Math.PI/2),s.tower=Ut(ee(.76,1.3,.1),0,0,0),s.towerRim=Ge([Ut(ee(.8,.07,.11),0,.62,0),Ut(ee(.8,.07,.11),0,-.62,0),Ut(ee(.07,1.3,.11),0,0,0)]),s.sword=Ge([Ut(ee(.06,.04,.62),0,0,.38),Ut(ee(.2,.05,.05),0,0,.06)]),s.axe=Ge([Ut(ee(.05,.05,.75),0,0,.3),Ut(ee(.04,.26,.18),0,.05,.62)]),s.pike=Ge([Ut(Tn(.028,.028,4.3,4),0,0,1.2,Math.PI/2),Ut(Oi(.06,.3,4),0,0,3.45,Math.PI/2)]),s.spear=Ge([Ut(Tn(.03,.03,3,4),0,0,.9,Math.PI/2),Ut(Oi(.06,.28,4),0,0,2.5,Math.PI/2)]),s.bow=Ut(ui(new ua(.46,.03,3,8,Math.PI)),0,0,0,0,Math.PI/2,Math.PI/2),s.quiver=Ut(Tn(.08,.07,.55,5),0,0,0,.35),s.cape=Ut(ee(.56,.9,.05),0,-.45,0),s.horse=Ge([Ut(ee(.56,.62,1.5),0,0,0),Ut(ee(.36,.72,.4),0,.42,.72,-.55),Ut(ee(.3,.3,.62),0,.72,1.08,.35),Ut(ee(.12,.5,.12),0,.05,-.8,.6),Ut(ee(.08,.14,.08),.1,.92,.9),Ut(ee(.08,.14,.08),-.1,.92,.9)]),s.mane=Ge([Ut(ee(.1,.62,.36),0,.55,.62,-.55),Ut(ee(.14,.52,.14),0,.02,-.82,.5)]),s.saddle=Ge([Ut(ee(.66,.36,.72),0,.12,-.02),Ut(ee(.3,.1,.4),0,.33,-.05)]),s.hleg=Ge([Ut(ee(.13,.8,.14),.18,-.4,0),Ut(ee(.13,.8,.14),-.18,-.4,0)]),s.pole=Ut(Tn(.04,.04,3.4,4),0,1.7,0),s.eagle=Ge([Ut(Aa(.14,0),0,3.55,0),Ut(ee(.5,.08,.1),0,3.6,0,0,0,.3),Ut(ee(.5,.08,.1),0,3.6,0,0,0,-.3)]),s}function iu(s,t){let e=s===0,n=[],i=(c,l,u,d,f,p="none",g=0,y=0,x=0)=>n.push({g:c,role:l,p:[u,d,f],anim:p,r:[g,y,x]}),r=t==="cavalry",o=r?.95:0;switch(r?(i("horse","horse",0,1.15,0,"horse"),i("mane","mane",0,1.15,0,"horse"),i("saddle","primary",0,1.47,-.05,"horse"),i("hleg","horse",0,.85,.55,"hlegF"),i("hleg","horse",0,.85,-.55,"hlegB"),i("leg","dark",.3,.78+o,.05,"ride",-1.2,0,.35),i("leg","dark",-.3,.78+o,.05,"ride",-1.2,0,-.35)):(i("leg","dark",.11,.78,0,"legL"),i("leg","dark",-.11,.78,0,"legR")),i("torso",t==="archer"?e?"hood":"cloth":"primary",0,1.08+o,0),t!=="archer"&&i("skirt",e?"primary":"dark",0,.8+o,0),(t==="legion"||t==="guard"||t==="cavalry"||t==="pike")&&i("chest","metal",0,1.08+o,0),i("head","skin",0,1.56+o,0),t==="archer"?(i("hood",e?"hood":"cloth",0,1.62+o,0),i("quiver","wood",-.1,1.2+o,-.22),i("bow","wood",.3,1.25+o,.32,"bow")):e?(i("helmRoman","helm",0,1.6+o,0),i(t==="guard"||t==="cavalry"?"plume":"crest","crest",0,1.6+o,0)):(i("helmCone","helm",0,1.72+o,0),t!=="pike"&&i("horns","crest",0,1.68+o,0)),t){case"legion":e?(i("scutum","primary",.34,1.02,.24,"shield"),i("boss","secondary",.34,1.02,.29,"shield"),i("sword","metal",-.34,1.12,.1,"arm")):(i("round","primary",.36,1.1,.22,"shield"),i("boss","metal",.36,1.1,.27,"shield"),i("axe","metal",-.34,1.12,.1,"arm"));break;case"pike":i("buckler",e?"secondary":"primary",.32,1.12,.2,"shield"),i("pike","wood",-.28,1.2,0,"pike");break;case"guard":i("tower","primary",.36,1.05,.26,"shield"),i("towerRim","secondary",.36,1.05,.26,"shield"),i("sword","metal",-.34,1.12,.1,"arm"),i("cape",e?"crest":"dark",0,1.36,-.2);break;case"cavalry":i("round","primary",.36,1.1+o,.05,"shield"),i("spear","wood",-.32,1.2+o,0,"lance"),i("cape",e?"crest":"primary",0,1.36+o,-.2);break}return n}var Ra=class{constructor(){this.geos=[]}add(t,e,n=0,i=0,r=0,o=0,a=0,c=0,l=1,u=1,d=1){let f=t.clone();Ut(f,n,i,r,o,a,c,l,u,d);let p=f.attributes.position.count,g=new Float32Array(p*3),y=e instanceof ft?e:new ft(e);for(let x=0;x<p;x++)g[x*3]=y.r,g[x*3+1]=y.g,g[x*3+2]=y.b;return f.setAttribute("color",new _e(g,3)),this.geos.push(f),f}build(t){if(!this.geos.length)return null;let e=Qc(this.geos,!1);this.geos=[];let n=new Ft(e,t);return n.castShadow=!0,n.receiveShadow=!0,n}},J={cone:(s,t,e=6)=>Oi(s,t,e),cyl:(s,t,e,n=6)=>Tn(s,t,e,n),box:ee,ico:Aa,dode:kg};function ue(s,t,e=.06){let n=new ft(s),i=1+(t()-.5)*2*e;return n.r*=i,n.g*=i,n.b*=i,n}function Lg(s,t,e){let n=s/2,i=t/2,r=[[-n,0,-i],[n,0,-i],[n,e,0],[-n,0,-i],[n,e,0],[-n,e,0],[-n,0,i],[-n,e,0],[n,e,0],[-n,0,i],[n,e,0],[n,0,i],[-n,0,-i],[-n,e,0],[-n,0,i],[n,0,-i],[n,0,i],[n,e,0]],o=new he;return o.setAttribute("position",new jt(r.flat(),3)),o.computeVertexNormals(),o}var su=new Zt,tl=new Ve,ru=new Ce,Og=new B,Bg=new B;function au(s,t){var E;let e=En[s.biome],n=yn(s.seed+99),i=new pe,r=new Te({vertexColors:!0,flatShading:!0}),o={group:i,dynamic:[],gateMesh:null,water:null,clouds:[],torches:[],flags:[]};{let{EXT_X:h,EXT_Z:v,STEP:w}=s.extent,A=s.nx,z=s.nz,N=(A-1)*(z-1)*2,F=new Float32Array(N*9),W=new Float32Array(N*9),V=s.heights,tt=s.ground,K=new ft,dt=e.grass.map(Et=>new ft(Et)),St=(e.cliff||e.rock).map(Et=>new ft(Et)),Jt=e.rock.map(Et=>new ft(Et)),Z=new ft(e.dirt),it=new ft(e.sand),_t=new ft(16054266),ut=new ft(e.sand).lerp(new ft(e.dirt),.3),zt=new ft(e.leaf[3]||e.leaf[0]).multiplyScalar(.7).lerp(new ft(e.dirt),.35),Ot=new ft(e.cliff[0]),Xt=new ft(e.grass[2]).lerp(new ft(e.dirt),.5).multiplyScalar(.72),re=0,Yt=s.noise,ge=(Et,Pt,Rt,ne,Tt,C,S,G,Q)=>{let et=V[Pt*A+Et],$=V[ne*A+Rt],vt=V[C*A+Tt],ct=Ae=>-h+Ae*w,gt=Ae=>-v+Ae*w,Ct=[ct(Et),et,gt(Pt),ct(Rt),$,gt(ne),ct(Tt),vt,gt(C)];F.set(Ct,re);let nt=Ct[3]-Ct[0],xt=Ct[4]-Ct[1],It=Ct[5]-Ct[2],Nt=Ct[6]-Ct[0],yt=Ct[7]-Ct[1],$t=Ct[8]-Ct[2],kt=It*Nt-nt*$t,ae=xt*$t-It*yt,k=nt*yt-xt*Nt,ht=Math.hypot(ae,kt,k)||1;kt=Math.abs(kt/ht);let Y=(Ct[0]+Ct[3]+Ct[6])/3,j=(Ct[2]+Ct[5]+Ct[8])/3,at=(et+$+vt)/3,ot=[0,0,0,0,0,0,0,0];ot[S]++,ot[G]++,ot[Q]++;let Dt=ot.indexOf(Math.max(...ot)),ce=Yt(Y*.045,j*.045),Me=Yt(Y*.014+7.3,j*.014-3.1),Kt=Yt(Y*.21,j*.21),Oe=s.waterLevel;if(Dt===Jc||at>22&&s.biome!=="desert")K.copy(_t);else if(kt<.72||Dt===Li){let Ae=Math.floor(at*.85+Kt*.9);K.copy(St[(Ae%St.length+St.length)%St.length]),kt>=.55&&K.lerp(Jt[Math.abs(Math.floor(ce*7))%Jt.length],.55),K.multiplyScalar(Ae%2?.93:1.05),s.scenario==="canyon"&&K.lerp(Ot,.35),kt>.64&&Dt!==Li&&K.lerp(dt[1],.3)}else if(Dt===ar)K.copy(it).multiplyScalar(.62+Math.max(0,Math.min(1,(at-Oe+2.2)/2))*.3);else if(Dt===rr)K.copy(it).lerp(dt[0],Math.max(0,Kt)*.25);else if(Dt===ki)K.copy(Z).lerp(dt[0],.1+Math.max(0,Kt)*.25);else if(Dt===Kc)K.copy(it).lerp(Z,.35+ce*.4);else if(Dt===jc)K.copy(Xt).lerp(dt[0],Math.max(0,Kt)*.4);else{let Ae=Math.max(0,Math.min(.999,ce*.85+.5))*(dt.length-1),Gi=Math.floor(Ae);K.copy(dt[Gi]).lerp(dt[Math.min(dt.length-1,Gi+1)],Ae-Gi),Me>.1?K.lerp(ut,Math.min(.28,(Me-.1)*.7)):Me<-.15&&K.multiplyScalar(1+(Me+.15)*.35),s.flagAt(Y,j)&1&&K.lerp(zt,.45),s.hasWater&&at<Oe+.5&&K.lerp(it,Math.min(1,(Oe+.5-at)*1.4)),K.multiplyScalar(1+Math.max(-.05,Math.min(.08,at/60))),at>14&&s.biome!=="desert"&&K.lerp(_t,Math.min(1,(at-14)/8))}let Ze=.965+n()*.07;K.r*=Ze,K.g*=Ze,K.b*=Ze;for(let Ae=0;Ae<3;Ae++)W[re+Ae*3]=K.r,W[re+Ae*3+1]=K.g,W[re+Ae*3+2]=K.b;re+=9};for(let Et=0;Et<z-1;Et++)for(let Pt=0;Pt<A-1;Pt++){let Rt=tt[Et*A+Pt],ne=tt[Et*A+Pt+1],Tt=tt[(Et+1)*A+Pt],C=tt[(Et+1)*A+Pt+1];ge(Pt,Et,Pt,Et+1,Pt+1,Et,Rt,Tt,ne),ge(Pt+1,Et+1,Pt+1,Et,Pt,Et+1,C,ne,Tt)}let L=new he;L.setAttribute("position",new _e(F,3)),L.setAttribute("color",new _e(W,3)),L.computeVertexNormals();let De=new Ft(L,r);De.receiveShadow=!0,De.name="terrain",i.add(De),o.terrain=De}if(s.hasWater){let h=new nn(230,170,70,52).toNonIndexed();h.rotateX(-Math.PI/2);let v=new ft(e.water);s.biome==="winter"&&v.lerp(new ft(15266554),.35);let w=v.clone().lerp(new ft(4176048),.4).multiplyScalar(1.05),A=v.clone().multiplyScalar(.62),z=h.attributes.position,N=new Float32Array(z.count*3),F=new ft;for(let tt=0;tt<z.count;tt++){let K=s.waterLevel-s.terrainHeight(z.getX(tt),z.getZ(tt)),dt=Math.max(0,Math.min(1,K/2.2));F.copy(w).lerp(A,dt),K<.2&&F.lerp(new ft(14677236),.14),N[tt*3]=F.r,N[tt*3+1]=F.g,N[tt*3+2]=F.b}h.setAttribute("color",new _e(N,3));let W=new da({vertexColors:!0,transparent:!0,opacity:.84,flatShading:!0,shininess:80,specular:10139848}),V=new Ft(h,W);V.position.y=s.waterLevel,V.receiveShadow=!0,i.add(V),o.water=V,o.waterBase=Float32Array.from(h.attributes.position.array)}let a=new Ra,c=s.biome==="desert"?13808778:11840930,l=s.biome==="desert"?12097130:9406590,u=s.castle?qn[s.castle.owner].colors.primary:9058858,d=(h,v,w,A,z,N=1.6,F=.8)=>{let W=Math.hypot(w-h,A-v),V=Math.floor(W/N);for(let tt=0;tt<=V;tt++){let K=tt/V;a.add(J.box(F,.9,F),l,h+(w-h)*K,z+.45,v+(A-v)*K)}};for(let h of s.structures){let v=s.terrainHeight(h.x,h.z);if(h.kind==="wall"){let w=Math.min(v,s.castle?s.castle.base:v)-1.5,A=h.h+(s.castle.base-w);a.add(J.box(h.w,A,h.d),ue(c,n,.03),h.x,w+A/2,h.z);let z=w+A;h.w>h.d?(d(h.x-h.w/2,h.z-h.d/2+.3,h.x+h.w/2,h.z-h.d/2+.3,z),d(h.x-h.w/2,h.z+h.d/2-.3,h.x+h.w/2,h.z+h.d/2-.3,z)):(d(h.x-h.w/2+.3,h.z-h.d/2,h.x-h.w/2+.3,h.z+h.d/2,z),d(h.x+h.w/2-.3,h.z-h.d/2,h.x+h.w/2-.3,h.z+h.d/2,z)),a.add(J.box(h.w+.2,.35,h.d+.2),l,h.x,w+A-1.2,h.z)}else if(h.kind==="tower"){let w=v-2,A=h.h+(s.castle.base-w)+1.5;a.add(J.cyl(h.r,h.r*1.12,A,8),ue(c,n,.03),h.x,w+A/2,h.z),a.add(J.cyl(h.r+.35,h.r+.35,.6,8),l,h.x,w+A,h.z);for(let z=0;z<8;z++){let N=z/8*Math.PI*2;a.add(J.box(.8,.9,.8),l,h.x+Math.cos(N)*(h.r+.1),w+A+.75,h.z+Math.sin(N)*(h.r+.1),0,-N)}a.add(J.cone(h.r+.6,h.small?3:4.2,8),ue(u,n,.05),h.x,w+A+(h.small?2.3:2.9),h.z);for(let z=0;z<3;z++){let N=n()*Math.PI*2;a.add(J.box(.25,.9,.3),2762274,h.x+Math.cos(N)*h.r,w+A*(.5+z*.12),h.z+Math.sin(N)*h.r,0,-N)}o.flags.push({x:h.x,y:w+A+(h.small?4:5.1),z:h.z,side:s.castle.owner,size:h.small?.7:1})}else if(h.kind==="gate"){let w=h.ref,A=s.castle.base;a.add(J.box(2.6,2.2,h.w+1),c,h.x,A+6.2,h.z),d(h.x,h.z-h.w/2,h.x,h.z+h.w/2,A+7.3,1.4,.7),a.add(J.box(2.8,.5,h.w+1.2),l,h.x,A+5.1,h.z);let z=new pe,N=new Te({color:7030054,flatShading:!0}),F=new Te({color:3814962,flatShading:!0});for(let W=0;W<6;W++){let V=new Ft(J.box(.35,5,h.w/6-.06),N);V.position.set(0,2.5,-h.w/2+(W+.5)*(h.w/6)),V.castShadow=!0,z.add(V)}for(let W of[1.2,3.8]){let V=new Ft(J.box(.45,.28,h.w),F);V.position.set(0,W,0),z.add(V)}z.position.set(h.x,A,h.z),i.add(z),o.gateMesh=z}else if(h.kind==="keep"){let w=v-1;a.add(J.box(h.w,h.h,h.d),ue(c,n,.02),h.x,w+h.h/2,h.z),a.add(J.box(h.w+.8,.6,h.d+.8),l,h.x,w+h.h,h.z),d(h.x-h.w/2,h.z-h.d/2,h.x+h.w/2,h.z-h.d/2,w+h.h+.3,1.5),d(h.x-h.w/2,h.z+h.d/2,h.x+h.w/2,h.z+h.d/2,w+h.h+.3,1.5),d(h.x-h.w/2,h.z-h.d/2,h.x-h.w/2,h.z+h.d/2,w+h.h+.3,1.5),d(h.x+h.w/2,h.z-h.d/2,h.x+h.w/2,h.z+h.d/2,w+h.h+.3,1.5),a.add(J.cyl(1.8,1.8,4,8),c,h.x+h.w/2-1.5,w+h.h+2,h.z-h.d/2+1.5),a.add(J.cone(2.4,3.4,8),u,h.x+h.w/2-1.5,w+h.h+5.7,h.z-h.d/2+1.5),a.add(J.box(1.6,2.6,.3),3811868,h.x-s.castle.face*-h.w/2,w+1.3,h.z,0,Math.PI/2);for(let A=0;A<4;A++)a.add(J.box(.3,1.2,.6),2762274,h.x+(A%2?1:-1)*h.w/2,w+h.h*.7,h.z+(A<2?-2:2));o.flags.push({x:h.x,y:w+h.h+6,z:h.z,side:s.castle.owner,size:1.8,big:!0}),a.add(J.cyl(.08,.08,6,4),5917242,h.x,w+h.h+3,h.z)}else if(h.kind==="house"){let w=[10111538,12097102,6121592],A=s.biome==="desert"?14731416:ue(15656140,n,.04),z=5913122,N=Math.sin(h.rot),F=Math.cos(h.rot);a.add(J.box(5,3,4),A,h.x,v+1.5,h.z,0,h.rot),a.add(J.box(5.3,.5,4.3),8024166,h.x,v+.2,h.z,0,h.rot);for(let W of[-2.45,2.45])a.add(J.box(.22,3,.22),z,h.x+F*W+N*2.02,v+1.5,h.z-N*W+F*2.02);a.add(J.box(5.05,.2,.2),z,h.x+N*2.03,v+2.2,h.z+F*2.03,0,h.rot),a.add(J.box(.2,.2,2.9),z,h.x+N*2.04,v+1.4,h.z+F*2.04,.9,h.rot+Math.PI/2),a.add(Lg(6,5.2,2.2),s.biome==="winter"?15922937:w[(E=h.roof)!=null?E:0],h.x,v+3,h.z,0,h.rot),a.add(J.box(.95,1.7,.2),z,h.x+N*2.06,v+.85,h.z+F*2.06,0,h.rot);for(let W of[-1.5,1.5])a.add(J.box(.7,.6,.1),9418968,h.x+F*W+N*2.06,v+2,h.z-N*W+F*2.06,0,h.rot);a.add(J.box(.5,1.6,.5),9076856,h.x-F*1.5,v+4.6,h.z+N*1.5)}else h.kind==="well"&&(a.add(J.cyl(1.1,1.2,1,8),c,h.x,v+.5,h.z),a.add(J.cyl(.8,.8,.1,8),4026266,h.x,v+.95,h.z),a.add(J.box(.15,2.2,.15),7031344,h.x-1,v+1.6,h.z),a.add(J.box(.15,2.2,.15),7031344,h.x+1,v+1.6,h.z),a.add(J.cone(1.7,1,4),10111538,h.x,v+3,h.z,0,Math.PI/4))}for(let h of s.structures)if(h.kind==="hedge"){let v=Math.ceil(h.len/1.2);for(let w=0;w<=v;w++){let A=w/v-.5,z=h.x+Math.cos(h.rot)*A*h.len,N=h.z+Math.sin(h.rot)*A*h.len,F=s.terrainHeight(z,N);if(h.style==="hedge")a.add(J.ico(.85+n()*.25,0),ue(e.leaf[n()*e.leaf.length|0],n,.1).multiplyScalar(.8),z,F+.75,N,n()*3,n()*3,0,1,1.05,1);else if(h.style==="wall")a.add(J.box(1.3,1,.7),ue(c,n,.07),z,F+.45,N,0,-h.rot),a.add(J.box(1.25,.18,.85),l,z,F+1,N,0,-h.rot);else{let W=.6+n()*2.2;n()<.8?a.add(J.box(1.25,W,.8),ue(l,n,.08),z,F+W/2-.1,N,0,-h.rot):a.add(J.dode(.5),l,z,F+.2,N,n()*3)}}}else if(h.kind==="spire"){let v=s.terrainHeight(h.x,h.z),w=ue(e.cliff[0],n,.06);a.add(J.cyl(h.r*.35,h.r,h.h,6),w,h.x,v+h.h/2-.3,h.z,(n()-.5)*.1,n()*3,(n()-.5)*.1),a.add(J.cyl(h.r*.25,h.r*.4,h.h*.25,5),w.clone().multiplyScalar(1.08),h.x,v+h.h+h.h*.1,h.z,0,n()*3);for(let A=0;A<4;A++){let z=n()*6.28;a.add(J.dode(.4+n()*.5),w.clone().multiplyScalar(.9),h.x+Math.cos(z)*(h.r+.6),v+.2,h.z+Math.sin(z)*(h.r+.6),n()*3)}}for(let h of s.decor.stalls||[]){let v=s.terrainHeight(h.x,h.z),w=[12857387,3105732,14922817,5214010];a.add(J.box(2.2,.9,1.2),8084026,h.x,v+.45,h.z,0,h.rot);for(let[A,z]of[[-1,-.55],[1,-.55],[-1,.55],[1,.55]]){let N=h.x+Math.cos(h.rot)*A+Math.sin(h.rot)*z,F=h.z-Math.sin(h.rot)*A+Math.cos(h.rot)*z;a.add(J.box(.1,2.2,.1),5913122,N,v+1.1,F)}a.add(J.box(2.6,.1,1.6),w[h.col],h.x,v+2.25,h.z,.12,h.rot);for(let A=0;A<4;A++)a.add(J.ico(.16,0),[15245388,12857387,8372042,15917388][A],h.x-.7+A*.45,v+1,h.z,0,h.rot)}for(let h of s.bridges){let v=Math.atan2(h.sin,h.cos),w=12;for(let A=0;A<w;A++){let N=((A+.5)/w-.5)*h.len,F=h.y+(1-(N/(h.len/2))**2)*h.arch,W=h.x+h.cos*N,V=h.z+h.sin*N,tt=h.wood?ue(8016432,n,.08):ue(c,n,.04);if(a.add(J.box(h.len/w+.05,h.wood?.35:.8,h.width),tt,W,F-(h.wood?.18:.4),V,0,-v),h.wood)for(let K of[-1,1])a.add(J.box(.18,1.1,.18),5913122,W-h.sin*K*(h.width/2),F+.5,V+h.cos*K*(h.width/2));else for(let K of[-1,1])a.add(J.box(h.len/w+.05,.7,.35),l,W-h.sin*K*(h.width/2),F+.35,V+h.cos*K*(h.width/2),0,-v)}if(h.wood)for(let A of[-1,1])a.add(J.cyl(.05,.05,7,3),2762274,h.x-s.castle.face*3,h.y+3.2,h.z+A*(h.width/2-.2),0,0,s.castle.face*.9);else for(let A of[-.2,.2]){let z=h.x+h.cos*A*h.len,N=h.z+h.sin*A*h.len;a.add(J.box(1.6,3,h.width-.4),l,z,-1.2,N,0,-v)}}let f=e.leaf,p=e.pine;for(let h of s.decor.trees){let v=s.terrainHeight(h.x,h.z),w=h.s;switch(h.kind){case"pine":{let A=ue(p[n()*p.length|0],n,.08);a.add(J.cyl(.18*w,.28*w,1.6*w,5),e.trunk,h.x,v+.8*w,h.z),a.add(J.cone(1.7*w,2.4*w,7),A,h.x,v+2.4*w,h.z,0,h.rot),a.add(J.cone(1.35*w,2.1*w,7),A.clone().multiplyScalar(1.07),h.x,v+3.5*w,h.z,0,h.rot+.4),a.add(J.cone(.9*w,1.8*w,7),A.clone().multiplyScalar(1.13),h.x,v+4.5*w,h.z,0,h.rot+.8),s.biome==="winter"&&a.add(J.cone(.55*w,.8*w,7),16185851,h.x,v+5.1*w,h.z,0,h.rot);break}case"oak":{let A=ue(f[n()*f.length|0],n,.08);a.add(J.cyl(.22*w,.34*w,2.2*w,5),e.trunk,h.x,v+1.1*w,h.z),a.add(J.ico(1.5*w,0),A,h.x,v+3.2*w,h.z,h.rot,h.rot),a.add(J.ico(1*w,0),A.clone().multiplyScalar(1.1),h.x+.9*w,v+2.8*w,h.z+.4*w,h.rot),a.add(J.ico(1.05*w,0),A.clone().multiplyScalar(.92),h.x-.7*w,v+3*w,h.z-.6*w,h.rot);break}case"birch":{let A=ue(f[n()*f.length|0],n,.1).multiplyScalar(1.1);a.add(J.cyl(.14*w,.18*w,3*w,5),15262940,h.x,v+1.5*w,h.z),a.add(J.ico(1*w,0),A,h.x,v+3.4*w,h.z,h.rot,0,0,.9,1.4,.9);break}case"bare":{a.add(J.cyl(.14*w,.26*w,3*w,5),4864558,h.x,v+1.5*w,h.z);for(let A=0;A<3;A++)a.add(J.cyl(.05*w,.09*w,1.4*w,4),4864558,h.x,v+(2.2+A*.4)*w,h.z,.8,h.rot+A*2.1,0);break}case"palm":{let A=h.x,z=v,N=h.z,F=.25;for(let W=0;W<5;W++)a.add(J.cyl(.16*w,.2*w,.9*w,5),ue(e.trunk,n,.1),A,z+.45*w,N,0,0,F*(W/5)),A-=Math.sin(F*(W/5))*.9*w,z+=.88*w;for(let W=0;W<6;W++){let V=W/6*Math.PI*2+h.rot;a.add(J.box(.5*w,.06,2.2*w),ue(f[W%f.length],n,.08),A+Math.cos(V)*.9*w,z-.2*w,N+Math.sin(V)*.9*w,.35,-V+Math.PI/2,0)}break}case"cactus":{let A=ue(6261306,n,.08);a.add(J.cyl(.3*w,.34*w,2.4*w,6),A,h.x,v+1.2*w,h.z),a.add(J.cyl(.18*w,.2*w,1*w,6),A,h.x+.55*w,v+1.4*w,h.z),a.add(J.cyl(.18*w,.2*w,.9*w,6),A,h.x-.5*w,v+1.8*w,h.z);break}}}for(let h of s.decor.rocks){let v=s.terrainHeight(h.x,h.z),w=ue(e.rock[n()*e.rock.length|0],n,.06);a.add(J.dode(h.s),w,h.x,v+h.s*.3,h.z,h.rot,h.rot*2,0,1.2,h.big?1.5:.8,1),h.big&&a.add(J.dode(h.s*.6),w.clone().multiplyScalar(.9),h.x+h.s*.8,v+h.s*.2,h.z+.4,h.rot)}for(let h of s.decor.bushes){let v=s.terrainHeight(h.x,h.z);a.add(J.ico(.7*h.s,0),ue(f[n()*f.length|0],n,.1).multiplyScalar(.85),h.x,v+.35*h.s,h.z,n()*3,0,0,1.2,.8,1.2)}let g=new ft(e.grass[2]).multiplyScalar(.85);for(let h of s.decor.tufts){let v=s.terrainHeight(h.x,h.z);for(let w=0;w<3;w++)a.add(J.cone(.09*h.s,.6*h.s,3),g,h.x+(w-1)*.12,v+.25*h.s,h.z+w%2*.1,(w-1)*.3,h.rot)}for(let h of s.decor.flowers){let v=s.terrainHeight(h.x,h.z);for(let w=0;w<4;w++)a.add(J.ico(.12,0),e.flower[h.c],h.x+(n()-.5)*1.2,v+.12,h.z+(n()-.5)*1.2)}for(let h of s.decor.menhirs){let v=s.terrainHeight(h.x,h.z);if(h.altar){a.add(J.box(3,.8,1.8),10262415,h.x,v+.4,h.z,0,.3);continue}h.fallen?a.add(J.box(1.1,h.h,.7),ue(9341572,n),h.x,v+.35,h.z,Math.PI/2-.1,h.rot):a.add(J.box(1.1,h.h,.7),ue(9341572,n),h.x,v+h.h/2-.2,h.z,(n()-.5)*.12,-h.rot,(n()-.5)*.12,1,1,1)}for(let h of s.decor.ruins){let v=s.terrainHeight(h.x,h.z);a.add(J.cyl(h.r,h.r*1.1,4.5,8),ue(c,n),h.x,v+2.2,h.z),a.add(J.cyl(h.r*.7,h.r*.8,6.5,6),ue(l,n),h.x+.4,v+3.5,h.z-.3,.1);for(let w=0;w<6;w++)a.add(J.dode(.5+n()*.5),l,h.x+(n()-.5)*7,v+.2,h.z+(n()-.5)*7,n()*3)}for(let h of s.decor.fences)for(let v=0;v<=h.len;v++){let w=h.x+Math.cos(h.rot)*v*1.6,A=h.z+Math.sin(h.rot)*v*1.6,z=s.terrainHeight(w,A);a.add(J.box(.16,1.1,.16),7031344,w,z+.5,A),v<h.len&&(a.add(J.box(1.6,.1,.08),8084026,w+Math.cos(h.rot)*.8,z+.75,A+Math.sin(h.rot)*.8,0,-h.rot),a.add(J.box(1.6,.1,.08),8084026,w+Math.cos(h.rot)*.8,z+.4,A+Math.sin(h.rot)*.8,0,-h.rot))}let y=new ft(s.biome==="winter"?12101768:s.biome==="autumn"?11049554:7311166);for(let h of s.decor.reeds){let v=s.terrainHeight(h.x,h.z);for(let w=0;w<4;w++){let A=(n()-.5)*.8,z=(n()-.5)*.8,N=(1+n()*.7)*h.s;a.add(J.cyl(.03,.05,N,3),y,h.x+A,v+N/2,h.z+z,(n()-.5)*.3,0,(n()-.5)*.3),w===0&&a.add(J.cyl(.07,.07,.3,4),5913122,h.x+A,v+N+.1,h.z+z)}}for(let h of s.decor.lilies)a.add(J.cyl(.6*h.s,.6*h.s,.04,7),ue(5214010,n,.08),h.x,s.waterLevel+.1,h.z,0,n()*6),h.flower&&a.add(J.ico(.16,0),n()<.5?16183544:15895224,h.x+.2,s.waterLevel+.22,h.z);for(let h of s.decor.logs){let v=s.terrainHeight(h.x,h.z);a.add(J.cyl(.32,.36,h.len,6),6177584,h.x,v+.3,h.z,0,h.rot,Math.PI/2),a.add(J.cyl(.26,.26,.05,6),12096616,h.x+Math.cos(h.rot)*h.len/2,v+.3,h.z-Math.sin(h.rot)*h.len/2,0,h.rot,Math.PI/2),a.add(J.ico(.35,0),5208634,h.x,v+.55,h.z,0,0,0,1.4,.5,1)}for(let h of s.decor.mushrooms){let v=s.terrainHeight(h.x,h.z);for(let w=0;w<3;w++){let A=(n()-.5)*.7,z=(n()-.5)*.7,N=h.s*(.6+n()*.5);a.add(J.cyl(.05*N,.07*N,.3*N,5),15722194,h.x+A,v+.15*N,h.z+z),a.add(J.cone(.2*N,.16*N,6),h.red?12857387:11042894,h.x+A,v+.36*N,h.z+z)}}let x=s.biome==="winter"?[[15265523,14015972],[14673902,13226972],[15002608,12167320],[15791351,14410730]]:s.biome==="autumn"?[[14264634,12882478],[9071162,7295536],[12097082,10649392],[10133580,8818751]]:[[15124058,13938762],[8038474,6985278],[9071170,7624762],[11978842,10466378]];for(let h of s.decor.fields){let[v,w]=x[h.kind],A=Math.max(4,Math.round(h.d/1.1)),z=Math.cos(h.rot),N=Math.sin(h.rot);for(let F=0;F<A;F++){let W=(F-(A-1)/2)*(h.d/A),V=h.x-N*W,tt=h.z+z*W,K=s.terrainHeight(V,tt);a.add(J.box(h.w,.35,h.d/A*.82),F%2?v:w,V,K+.05,tt,0,-h.rot)}for(let F of[-1,1]){for(let tt=0;tt<=4;tt++){let K=(tt/4-.5)*h.w,dt=h.x+z*K-N*F*(h.d/2+.6),St=h.z+N*K+z*F*(h.d/2+.6);a.add(J.box(.15,.9,.15),7031344,dt,s.terrainHeight(dt,St)+.4,St)}let W=h.x-N*F*(h.d/2+.6),V=h.z+z*F*(h.d/2+.6);a.add(J.box(h.w,.08,.08),8084026,W,s.terrainHeight(W,V)+.65,V,0,-h.rot)}}for(let h of s.decor.farms){let v=s.terrainHeight(h.x,h.z);a.add(J.box(4.6,2.6,3.4),15721676,h.x,v+1.3,h.z,0,-h.rot),a.add(J.cone(3.6,2.2,4),10111538,h.x,v+3.7,h.z,0,Math.PI/4-h.rot,0,1,1,.8),a.add(J.box(.5,1.4,.5),9076856,h.x+1.2,v+3.8,h.z+.3),a.add(J.box(3.2,1.6,2.6),9067058,h.x+Math.cos(h.rot)*4.2,v+.8,h.z+Math.sin(h.rot)*4.2,0,-h.rot),a.add(J.cone(2.5,1.4,4),7027238,h.x+Math.cos(h.rot)*4.2,v+2.3,h.z+Math.sin(h.rot)*4.2,0,Math.PI/4-h.rot);for(let w=0;w<3;w++)a.add(J.cyl(.5,.5,.8,6),14268506,h.x-3+w*1.2,v+.4,h.z-3,Math.PI/2,w)}if(s.decor.mill){let h=s.decor.mill,v=s.terrainHeight(h.x,h.z);a.add(J.cyl(1.4,2.1,7,8),15721676,h.x,v+3.5,h.z),a.add(J.cone(2,2.6,8),10111538,h.x,v+8.3,h.z),a.add(J.box(1,1.8,.3),5913122,h.x+Math.sin(h.rot)*2,v+.9,h.z+Math.cos(h.rot)*2,0,h.rot);let w=new pe,A=new Te({color:15260864,flatShading:!0}),z=new Te({color:7031344,flatShading:!0});for(let F=0;F<4;F++){let W=new pe,V=new Ft(J.box(.2,5.2,.15),z);V.position.y=2.6;let tt=new Ft(J.box(1.3,3.8,.06),A);tt.position.set(.72,3.2,0),W.add(V,tt),W.rotation.z=F*Math.PI/2,w.add(W)}w.position.set(h.x+Math.sin(h.rot)*2.1,v+6.6,h.z+Math.cos(h.rot)*2.1),w.rotation.y=h.rot,w.traverse(F=>{F.castShadow=!0});let N=new pe;N.add(w),i.add(N),o.mill=w}for(let h of s.decor.tents){let v=s.terrainHeight(h.x,h.z),w=qn[h.side].colors,A=h.big?1.4:1;a.add(J.cone(2.3*A,2.8*A,h.big?8:4),ue(h.big?w.primary:w.cloth===3816e3?5526620:15722194,n,.04),h.x,v+1.35*A,h.z,0,h.rot+Math.PI/4),a.add(J.cyl(.05,.05,1.4,3),5917242,h.x,v+3*A,h.z),a.add(J.box(.7,.45,.04),w.primary,h.x+.35,v+3.4*A,h.z)}for(let h of s.camps){if(!h)continue;let v=h.x+(h.x<0?-5:5),w=h.z,A=s.terrainHeight(v,w);for(let z=0;z<7;z++){let N=z/7*Math.PI*2;a.add(J.dode(.28),7170145,v+Math.cos(N)*.9,A+.1,w+Math.sin(N)*.9)}o.torches.push({x:v,y:A+.3,z:w,fire:!0})}for(let h of s.decor.torches)o.torches.push(h);let m=a.build(r);m&&i.add(m);let M=qn.map(h=>new Te({color:h.colors.banner,side:ye,flatShading:!0}));for(let h of o.flags){let v=new nn(2.2*h.size,1.3*h.size,4,1);v.translate(1.1*h.size,0,0);let w=new Ft(v,M[h.side]);w.position.set(h.x,h.y,h.z),w.userData.base=Float32Array.from(v.attributes.position.array),w.castShadow=!0,i.add(w);let A=new Ft(J.cyl(.06,.06,1.6*h.size+1,4),new Te({color:4864554}));A.position.set(h.x,h.y-.3,h.z),i.add(A),h.mesh=w}let b=new me({color:16753210}),_=new me({color:16769146});for(let h of o.torches){let v=new pe,w=new Ft(J.cone(h.fire?.6:.22,h.fire?1.4:.6,5),b),A=new Ft(J.cone(h.fire?.35:.12,h.fire?.9:.4,5),_);if(w.position.y=h.fire?.6:.3,A.position.y=h.fire?.5:.26,v.add(w,A),!h.fire){let z=new Ft(J.cyl(.06,.06,.9,4),new Te({color:4864554}));z.position.y=-.4,v.add(z)}v.position.set(h.x,h.y,h.z),i.add(v),h.mesh=v}let U=new Te({color:16777215,flatShading:!0,emissive:3355443});for(let h=0;h<9;h++){let v=new pe,w=3+(n()*3|0);for(let z=0;z<w;z++){let N=new Ft(J.ico(2.5+n()*2.5,0),U);N.position.set(z*3.2-w*1.5,n()*1.5,(n()-.5)*3),N.scale.y=.6,v.add(N)}let A=h%2===0;v.position.set((n()-.5)*240,34+n()*12,(A?-1:1)*(72+n()*25)),v.userData.speed=.6+n()*.8,i.add(v),o.clouds.push(v)}let P=new me({color:s.biome==="winter"?3817288:2763312,side:ye,fog:!0}),I=new he;I.setAttribute("position",new jt([0,0,.3,0,0,-.3,1.1,0,0],3)),o.birds=[];for(let h=0;h<2;h++){let v=n()*6.28,w={cx:Math.cos(v)*80,cz:Math.sin(v)*58,r:14+n()*12,y:16+n()*8,sp:(.12+n()*.1)*(n()<.5?1:-1),ph:n()*6,list:[]};for(let A=0;A<6;A++){let z=new pe,N=new Ft(I,P),F=new Ft(I,P);F.scale.x=-1,z.add(N,F),z.scale.setScalar(.55),z.userData={l:N,r:F,off:[(n()-.5)*6,(n()-.5)*2,(n()-.5)*6],fl:n()*6},i.add(z),w.list.push(z)}o.birds.push(w)}let D={summer:{n:70,col:16773792,size:.1,fall:-.15,drift:.6,flutter:1.2},autumn:{n:160,col:14251818,size:.22,fall:1.1,drift:1.4,flutter:2.5,leaf:!0},winter:{n:420,col:16777215,size:.13,fall:2.2,drift:.6,flutter:.8},desert:{n:180,col:15257498,size:.12,fall:.1,drift:5,flutter:.4},spring:{n:140,col:16239068,size:.18,fall:.7,drift:1.2,flutter:2.2,leaf:!0,petals:!0},highland:{n:380,col:13162210,size:.05,fall:16,drift:2,flutter:.2,rain:!0}}[s.biome];if(D){let h=D.rain?new en(.03,1.1,.03):D.leaf?new nn(D.size*2,D.size*1.3):new li(D.size,0),v=new me({color:D.col,side:ye,transparent:s.biome==="desert"||D.rain,opacity:D.rain?.45:.6}),w=new Ci(h,v,D.n);w.frustumCulled=!1,w.instanceMatrix.setUsage(ir);let A=[];for(let z=0;z<D.n;z++)A.push({x:(n()-.5)*90,y:n()*40,z:(n()-.5)*70,p:n()*6,s:.7+n()*.6});if(D.leaf){let z=(D.petals?[16239068,15902408,16777215]:e.leaf).map(N=>new ft(N));for(let N=0;N<D.n;N++)w.setColorAt(N,z[N%z.length])}i.add(w),o.weather={mesh:w,parts:A,W:D}}return t.add(i),o}function ou(s,t,e,n){if(s.water){let i=s.water.geometry.attributes.position,r=i.array,o=s.waterBase;for(let a=0;a<r.length;a+=3){let c=o[a],l=o[a+2];r[a+1]=Math.sin(c*.35+t*1.3)*.08+Math.cos(l*.4+t*1.1)*.08}i.needsUpdate=!0,s.water.geometry.computeVertexNormals()}if(s.mill&&(s.mill.rotation.z+=e*.8),s.birds)for(let i of s.birds){i.ph+=i.sp*e;let r=i.cx+Math.cos(i.ph)*i.r,o=i.cz+Math.sin(i.ph)*i.r,a=Math.atan2(-Math.sin(i.ph)*i.sp,Math.cos(i.ph)*i.sp);for(let c of i.list){let l=c.userData;c.position.set(r+l.off[0],i.y+l.off[1]+Math.sin(t*.7+l.fl)*.6,o+l.off[2]),c.rotation.y=a+Math.PI/2*Math.sign(i.sp);let u=Math.sin(t*9+l.fl)*.6;l.l.rotation.z=u,l.r.rotation.z=-u}}if(s.weather&&s.camTarget){let{mesh:i,parts:r,W:o}=s.weather,a=s.camTarget.x,c=s.camTarget.z;for(let l=0;l<r.length;l++){let u=r[l];u.y-=o.fall*u.s*e,u.x+=(o.drift+Math.sin(t*o.flutter+u.p)*o.drift*.6)*e,u.z+=Math.cos(t*o.flutter*.8+u.p)*.5*e,u.y<0&&(u.y+=40),u.y>40&&(u.y-=40);let d=((u.x-a)%90+135)%90-45,f=((u.z-c)%70+105)%70-35,p=a+d,g=c+f,y=n.terrainHeight(p,g);o.rain?tl.setFromEuler(ru.set(0,0,.15)):tl.setFromEuler(ru.set(t*1.5+u.p,u.p,t*o.flutter+u.p)),su.compose(Og.set(p,y+u.y*.9+.3,g),tl,Bg.set(u.s,u.s,u.s)),i.setMatrixAt(l,su)}i.instanceMatrix.needsUpdate=!0}for(let i of s.clouds)i.position.x+=i.userData.speed*e,i.position.x>130&&(i.position.x=-130);for(let i of s.flags){let r=i.mesh.geometry.attributes.position,o=i.mesh.userData.base;for(let a=0;a<r.count;a++){let c=o[a*3];r.array[a*3+2]=Math.sin(c*2-t*4+i.x)*.18*(c/2)}r.needsUpdate=!0}for(let i of s.torches){let r=.85+Math.sin(t*17+i.x)*.1+Math.sin(t*23+i.z)*.08;i.mesh.children[0].scale.set(1,r,1),i.mesh.children[1].scale.set(1,2-r,1)}if(s.gateMesh&&n.gate){let i=n.gate;i.alive?i.shake>0&&(i.shake-=e,s.gateMesh.position.x=i.x+Math.sin(t*60)*.06):(s.gateFall||(s.gateFall=0),s.gateFall=Math.min(1,s.gateFall+e*1.5),s.gateMesh.rotation.z=i.face*s.gateFall*1.45,s.gateMesh.position.y=n.castle.base-s.gateFall*.6)}}var cu=1;function lu(){cu=1}function Hg(s,t,e,n){let i=[];if(n==="wedge"){let a=0,c=0;for(;c<s;){let l=Math.min(1+a*2,s-c);for(let u=0;u<l;u++)i.push([(u-(l-1)/2)*e,a*e*.9]);c+=l,a++}}else{let a=t;n==="block"&&(a=Math.max(3,Math.ceil(Math.sqrt(s*1.1)))),a=Math.max(2,Math.min(a,s));let c=Math.ceil(s/a);for(let l=0;l<s;l++){let u=Math.floor(l/a),d=u===c-1?s-u*a:a,f=l%a;i.push([(f-(d-1)/2)*e,u*e])}}let r=0,o=0;for(let a of i)r=Math.max(r,a[1]),o=Math.max(o,Math.abs(a[0]));for(let a of i)a[1]-=r/2;return{slots:i,halfW:o+.7,halfD:r/2+.7}}var or=class{constructor(t,e,n,i,r=1){this.id=cu++,this.side=t,this.typeId=e,this.T=xn[e],this.maxCount=Math.max(20,Math.round(this.T.size*r)),this.count=this.maxCount,this.maxHp=this.maxCount*this.T.hp,this.hp=this.maxHp,this.x=n,this.z=i,this.face=t===0?Math.PI/2:-Math.PI/2,this.orders=Jh(e),this.state="idle",this.path=[],this.target=null,this.melee=null,this.speedCur=0,this.vx=0,this.vz=0,this.kills=0,this.dealt=0,this.volleyT=Math.random()*1.5,this.chargeT=0,this.chargeReady=e==="cavalry",this.movedFast=0,this.repathT=0,this.retreated=0,this.regroupT=0,this.flankPlan=null,this.holdX=n,this.holdZ=i,this.lastHitT=99,this.underFire=0,this.cols=this.T.cols,this.formDirty=!0,this.soldiers=[],this.name=this.T.names[t],this.index=0,this.buildSoldiers()}get alive(){return this.count>0}get ratio(){return this.count/this.maxCount}get isRanged(){return this.T.range>0}get fwdX(){return Math.sin(this.face)}get fwdZ(){return Math.cos(this.face)}buildSoldiers(){this.soldiers=[],this.layout();for(let t=0;t<this.maxCount;t++){let[e,n]=this.slotWorld(t);this.soldiers.push({x:e+(Math.random()-.5)*.3,z:n+(Math.random()-.5)*.3,y:0,yaw:this.face,alive:!0,slot:t,phase:Math.random()*6.28,swing:0,deadT:0,fall:Math.random()<.5?1:-1,walk:0,jx:(Math.random()-.5)*.25,jz:(Math.random()-.5)*.25,hit:0})}}layout(t=99){let e=this.T.cols,n=this.orders.formation;n==="line"&&this.typeId!=="cavalry"&&(e=Math.ceil(e*1.25));let i=this.T.spacing*(this.loose?1.35:1),r=Math.max(2,Math.floor(t*2/i));this.cols=Math.min(e,r);let o=this.cols<e&&n!=="block"?"line":n,a=Hg(Math.max(1,this.count),this.cols,i,o);this.slots=a.slots,this.halfW=a.halfW,this.halfD=a.halfD,this.formDirty=!1}slotWorld(t){let e=this.slots[Math.min(t,this.slots.length-1)]||[0,0],n=this.fwdX,i=this.fwdZ,r=i,o=-n;return[this.x+r*e[0]-n*e[1],this.z+o*e[0]-i*e[1]]}support(t,e){let n=this.fwdX,i=this.fwdZ,r=Math.abs(t*n+e*i),o=Math.abs(t*i-e*n);return r*this.halfD+o*this.halfW}reassign(){let t=0,e=this.soldiers.filter(n=>n.alive).sort((n,i)=>n.slot-i.slot);for(let n of e)n.slot=t++;this.formDirty=!0}killSoldier(t,e,n){let i=null,r=1e9;for(let o of this.soldiers){if(!o.alive)continue;let a;n?a=Math.random():a=(o.x-t)**2+(o.z-e)**2+Math.random()*2,a<r&&(r=a,i=o)}if(i){i.alive=!1,i.deadT=1e-4;let o=i.x-t,a=i.z-e;i.yaw=Math.atan2(-o,-a)}return i}};var el=class{constructor(){this.k=[],this.p=[]}push(t,e){let n=this.k,i=this.p,r=n.length;for(n.push(t),i.push(e);r>0;){let o=r-1>>1;if(i[o]<=e)break;n[r]=n[o],i[r]=i[o],r=o}n[r]=t,i[r]=e}pop(){let t=this.k,e=this.p,n=t[0],i=t.pop(),r=e.pop();if(t.length){let o=0,a=t.length;for(;;){let c=2*o+1;if(c>=a||(c+1<a&&e[c+1]<e[c]&&c++,e[c]>=r))break;t[o]=t[c],e[o]=e[c],o=c}t[o]=i,e[o]=r}return n}get size(){return this.k.length}},Ca=class{constructor(t){this.map=t;let e=t.gw*t.gd;this.g=new Float32Array(e),this.from=new Int32Array(e),this.stamp=new Uint32Array(e),this.closed=new Uint32Array(e),this.cur=1}cellBlocked(t,e){return!!this.map.blocked[t]}cellCost(t,e,n){let i=this.map,r=i.cost[t];i.flags[t]&8&&i.gate&&i.gate.alive&&e!==i.gate.owner&&(r+=5);let o=Math.min(4,Math.ceil(n/4));return i.clear[t]<o&&(r+=(o-i.clear[t])*.6),r}nearestFree(t,e){let n=this.map,i=n.gw,r=n.gd;if(t>=0&&!this.cellBlocked(t,e))return t;let o=t>=0?t%i:0,a=t>=0?t/i|0:0;for(let c=1;c<20;c++){let l=-1,u=1e9;for(let d=-c;d<=c;d++)for(let f=-c;f<=c;f++){if(Math.max(Math.abs(f),Math.abs(d))!==c)continue;let p=o+f,g=a+d;if(p<0||g<0||p>=i||g>=r)continue;let y=g*i+p;if(!this.cellBlocked(y,e)){let x=f*f+d*d;x<u&&(u=x,l=y)}}if(l>=0)return l}return-1}find(t,e,n,i,r,o=8){let a=this.map,c=a.gw,l=a.gd,u=this.nearestFree(a.cellIndex(t,e),r),d=this.nearestFree(a.cellIndex(n,i),r);if(u<0||d<0)return[[n,i]];if(u===d)return[[n,i]];let f=++this.cur,p=this.g,g=this.from,y=this.stamp,x=this.closed,m=d%c,M=d/c|0,b=A=>{let z=Math.abs(A%c-m),N=Math.abs((A/c|0)-M);return(z+N+(1.4142-2)*Math.min(z,N))*1},_=new el;y[u]=f,p[u]=0,g[u]=-1,_.push(u,b(u));let U=!1,P=0,I=u,D=b(u);for(;_.size&&P++<6e3;){let A=_.pop();if(x[A]===f)continue;if(x[A]=f,A===d){U=!0;break}let z=b(A);z<D&&(D=z,I=A);let N=A%c,F=A/c|0;for(let W=0;W<8;W++){let V=Vg[W],tt=Gg[W],K=N+V,dt=F+tt;if(K<0||dt<0||K>=c||dt>=l)continue;let St=dt*c+K;if(this.cellBlocked(St,r)||x[St]===f||V&&tt&&(this.cellBlocked(F*c+K,r)||this.cellBlocked(dt*c+N,r)))continue;let Jt=p[A]+(V&&tt?1.4142:1)*this.cellCost(St,r,o);(y[St]!==f||Jt<p[St])&&(y[St]=f,p[St]=Jt,g[St]=A,_.push(St,Jt+b(St)))}}let E=U?d:I,h=[];for(let A=E;A>=0;A=g[A])h.push(A);h.reverse();let v=[],w=0;v.push(a.cellCenter(h[0]));for(let A=2;A<h.length;A++)this.lineFree(h[w],h[A],r,o)||(w=A-1,v.push(a.cellCenter(h[w])));return U?v.push([n,i]):v.push(a.cellCenter(E)),v.shift(),v}lineFree(t,e,n,i){let r=this.map,o=r.gw,a=t%o,c=t/o|0,l=e%o,u=e/o|0,d=Math.abs(l-a),f=Math.abs(u-c),p=a<l?1:-1,g=c<u?1:-1,y=d-f,x=r.cost[t],m=Math.min(3,Math.ceil(i/5));for(;;){let M=c*o+a;if(this.cellBlocked(M,n)||r.cost[M]>x+.4||r.clear[M]<m&&r.clear[t]>=m||r.flags[M]&8)return!1;if(a===l&&c===u)return!0;let b=2*y;b>-f&&(y-=f,a+=p),b<d&&(y+=d,c+=g)}}},Vg=[1,-1,0,0,1,1,-1,-1],Gg=[0,0,1,-1,1,-1,1,-1];var nl=Math.PI*2,il=(s,t)=>{let e=(t-s)%nl;return e>Math.PI&&(e-=nl),e<-Math.PI&&(e+=nl),e},we=(s,t)=>Math.hypot(s.x-t.x,s.z-t.z),Ts=[0,0],Ia=class{constructor(t,e,n){this.map=t,this.legions=e,this.pf=new Ca(t),this.time=0,this.timeLimit=n.time,this.over=!1,this.winner=-1,this.reason="",this.events=[],this.volleys=[],this.arrows=[],this.thinkAcc=0,this.checkAcc=0,this.start=[0,0],this.lost=[0,0];for(let i of e)this.start[i.side]+=i.maxCount;this.started=!1}enemiesOf(t){return this.legions.filter(e=>e.side!==t&&e.alive)}alliesOf(t){return this.legions.filter(e=>e.side===t&&e.alive)}begin(){this.started=!0;for(let t of this.legions)t.holdX=t.x,t.holdZ=t.z,t.startX=t.x,t.startZ=t.z,this.applyOrders(t);this.events.push({type:"horn"})}applyOrders(t){let e=t.orders;t.wp=[],t.wpIdx=0,t.path=[],t.formDirty=!0,e.move==="flankL"||e.move==="flankR"?t.wp=this.flankWaypoints(t,e.move==="flankL"?1:-1):e.move==="path"&&(t.wp=e.waypoints.map(n=>[n[0],n[1]])),e.move==="hold"&&this.started&&this.time>0&&(t.holdX=t.x,t.holdZ=t.z),t.state!=="retreat"&&t.state!=="regroup"&&t.state!=="dead"&&(t.state="idle")}planMove(t,e,n,i=null){if(t=t.filter(b=>b.alive),!t.length)return[];let r=0,o=0;for(let b of t)r+=b.x,o+=b.z;r/=t.length,o/=t.length,i===null&&(i=Math.hypot(e-r,n-o)>1?Math.atan2(e-r,n-o):t[0].face);let a=Math.sin(i),c=Math.cos(i),l=c,u=-a,d=t.filter(b=>!b.isRanged&&b.typeId!=="cavalry"),f=t.filter(b=>b.isRanged),p=t.filter(b=>b.typeId==="cavalry"),g=d.slice();p.forEach((b,_)=>_%2?g.push(b):g.unshift(b));let y=f;g.length||(g=y,y=[]);let x=2.2,m=[],M=(b,_)=>{let P=(b.reduce((I,D)=>I+D.halfW*2,0)+x*(b.length-1))/2;for(let I of b){P-=I.halfW;let[D,E]=this.snapFree(e+l*P+a*_,n+u*P+c*_,I.side);m.push({L:I,x:D,z:E,face:i}),P-=I.halfW+x}};if(M(g,0),y.length){let b=Math.max(...g.map(U=>U.halfD)),_=Math.max(...y.map(U=>U.halfD));M(y,-(b+_+3))}return m}commandMove(t,e,n,i=null){let r=this.planMove(t,e,n,i),o=Math.min(...r.map(a=>a.L.T.speed));for(let a of r){let c=a.L;c.state==="retreat"||c.state==="regroup"||(c.orders.move="path",c.orders.waypoints=[[a.x,a.z]],c.cmd={x:a.x,z:a.z,face:a.face},c.cmdFace=null,c.moveOnly=!0,c.orders.delay=0,c.groupSpeed=r.length>1?o:null,c.melee&&(c.melee=null),this.applyOrders(c),c.target=null)}return r}commandAttack(t,e){for(let n of t)!n.alive||n.state==="retreat"||(this.clearCommand(n),n.orders.target="legion",n.orders.targetId=e.id,n.orders.move="advance",n.orders.delay=0,n.melee&&n.melee!==e&&(n.melee=null),this.applyOrders(n),n.target=e)}commandHalt(t){for(let e of t)!e.alive||e.state==="retreat"||(this.clearCommand(e),e.orders.move="hold",e.path=[],this.applyOrders(e),e.holdX=e.x,e.holdZ=e.z,e.cmdFace=e.face)}commandRetreat(t){for(let e of t)e.alive&&e.state!=="retreat"&&e.state!=="regroup"&&(this.clearCommand(e),this.startRetreat(e))}clearCommand(t){t.cmd=null,t.cmdFace=null,t.moveOnly=!1,t.groupSpeed=null}flankWaypoints(t,e){let n=this.enemiesOf(t.side),i=t.side===0?50:-50,r=0;if(n.length){i=0,r=0;for(let p of n)i+=p.x,r+=p.z;i/=n.length,r/=n.length}let o=i-t.x,a=r-t.z,c=Math.hypot(o,a)||1;o/=c,a/=c;let l=a*e,u=-o*e,d=[t.x+o*c*.38+l*24,t.z+a*c*.38+u*24],f=[i-o*4+l*17,r-a*4+u*17];return[d,f].map(p=>this.snapFree(p[0],p[1],t.side))}snapFree(t,e,n){t=sn(t,-70,70),e=sn(e,-46,46);let i=this.map,r=this.pf.nearestFree(i.cellIndex(t,e),n);return r<0?[t,e]:i.cellIndex(t,e)===r?[t,e]:i.cellCenter(r)}previewRoute(t){let e=t.orders,n=[[t.x,t.z]],i=t.x,r=t.z,o=(l,u)=>{let d=this.pf.find(i,r,l,u,t.side,t.halfW*2);for(let f of d)n.push(f);i=l,r=u},a=[];e.move==="flankL"||e.move==="flankR"?a=this.flankWaypoints(t,e.move==="flankL"?1:-1):e.move==="path"&&(a=e.waypoints);for(let l of a)o(l[0],l[1]);let c=null;if(e.move==="hold")this.isRangedInRange(t)&&(c=null);else if(e.target==="objective"&&this.map.objective)c=[this.map.objective.x,this.map.objective.z];else{let l=this.chooseTarget(t,[i,r]);if(l)if(t.isRanged){let u=l.x-i,d=l.z-r,f=Math.hypot(u,d),p=t.T.range*.8;f>p&&(c=[i+u/f*(f-p),r+d/f*(f-p)])}else c=[l.x,l.z]}return c&&o(c[0],c[1]),{pts:n,target:e.move!=="hold"?this.chooseTarget(t,[i,r]):null}}isRangedInRange(t){return t.isRanged}chooseTarget(t,e=null,n=1e9){let i=e?e[0]:t.x,r=e?e[1]:t.z,o=t.orders,a=null,c=1e9,l=this.enemiesOf(t.side);if(o.target==="legion"){let u=l.find(d=>d.id===o.targetId);if(u&&Math.hypot(u.x-i,u.z-r)<Math.max(n,40))return u}for(let u of l){let d=Math.hypot(u.x-i,u.z-r);if(d>n)continue;let f=d;switch(o.target){case"weakest":f=u.count*1.6+d*.35;break;case"strongest":f=-u.count*1.6+d*.35;break;case"ranged":f=d+(u.isRanged?0:55);break;case"objective":{let p=this.map.objective;p&&(f=Math.hypot(u.x-p.x,u.z-p.z)+d*.3);break}}u.state==="retreat"&&(f+=30),t.typeId==="cavalry"&&u.typeId==="pike"&&t.aiSmart&&(f+=45),t.aiSmart&&u.inCastleCover&&(f+=20),f<c&&(c=f,a=u)}return a}aggroRadius(t){let e=t.orders.stance,n=e==="aggressive"?24:e==="defensive"?10:16;return(t.orders.move==="flankL"||t.orders.move==="flankR")&&t.wp&&t.wpIdx<t.wp.length&&(n=7),t.isRanged&&(n=t.T.range),n}nearestEnemy(t,e,n){let i=null,r=e;for(let o of this.legions){if(o.side===t.side||!o.alive||n&&!n(o))continue;let a=we(t,o)-o.support((t.x-o.x)/(we(t,o)||1),(t.z-o.z)/(we(t,o)||1));a<r&&(r=a,i=o)}return i}contactDist(t,e){let n=we(t,e)||.001,i=(e.x-t.x)/n,r=(e.z-t.z)/n;return t.support(i,r)+e.support(i,r)+.5}step(t){if(this.over)return;this.time+=t,this.thinkAcc+=t;let e=this.thinkAcc>.25;e&&(this.thinkAcc=0);for(let n of this.legions)n.alive&&(e&&this.think(n),this.act(n,t));if(this.separate(t),this.resolveVolleys(),this.soldiersInStep!==!1)for(let n of this.legions)this.updateSoldiers(n,t);this.arrows=this.arrows.filter(n=>this.time<n.t0+n.dur+.05),this.checkAcc+=t,this.checkAcc>.2&&(this.updateObjective(this.checkAcc),this.checkAcc=0,this.checkVictory())}think(t){let e=t.orders,n=this.map;if(t.inCastleCover=n.castle&&n.castle.owner===t.side&&n.inCastle(t.x,t.z),t.state!=="retreat"&&t.state!=="regroup"&&e.retreatAt>0){let c=e.retreatAt/(1+t.retreated*1.5);if(t.ratio<=c){this.startRetreat(t);return}}if(t.state==="retreat"||t.state==="regroup")return;if(t.melee){let c=t.melee;if(!c.alive||we(t,c)>this.contactDist(t,c)+3.5||c.state==="retreat"&&t.orders.stance==="defensive")t.melee=null,t.state="idle";else{t.state="melee";return}}let i=this.legions.find(c=>c.alive&&c.side!==t.side&&c.melee===t);if(i&&!t.isRanged){t.melee=i,t.state="melee";return}if(i&&t.isRanged&&we(t,i)<this.contactDist(t,i)+.5){t.melee=i,t.state="melee";return}if(n.gate&&n.gate.alive&&t.side!==n.gate.owner&&t.state!=="breach"&&!t.isRanged&&Math.hypot(n.gate.x-t.x,n.gate.z-t.z)<t.halfD+11&&this.wantsInside(t)&&this.legions.some(c=>c!==t&&c.side===t.side&&c.state==="breach")&&(t.state="breach",t.path=[]),t.state==="breach"&&n.gate&&n.gate.alive){let c=this.nearestEnemy(t,3);c&&this.engage(t,c);return}if(this.time<e.delay&&t.lastHitT>1.5){t.state="wait";return}if(t.isRanged)return this.thinkRanged(t);let r=this.aggroRadius(t);if(t.cmd&&t.wp&&t.wpIdx>=t.wp.length){t.orders.move="hold",t.holdX=t.cmd.x,t.holdZ=t.cmd.z,t.cmdFace=t.cmd.face,t.cmd=null,t.moveOnly=!1,t.groupSpeed=null,t.wp=[],t.state="hold",t.path=[];return}if(t.wp&&t.wpIdx<t.wp.length){if(!t.moveOnly){if(this.keepEngaging(t,r))return;let l=this.nearestEnemy(t,r);if(l){this.engage(t,l);return}}let c=t.wp[t.wpIdx];if(Math.hypot(c[0]-t.x,c[1]-t.z)<(t.cmd?2.4:4)){t.wpIdx++,t.path=[];return}this.moveTo(t,c[0],c[1],"move");return}if(e.move==="hold"){if(this.keepEngaging(t,r,!0))return;let c=this.nearestEnemy(t,r);if(c&&Math.hypot(c.x-t.holdX,c.z-t.holdZ)<r+10){this.engage(t,c);return}Math.hypot(t.holdX-t.x,t.holdZ-t.z)>2.5?this.moveTo(t,t.holdX,t.holdZ,"move"):(t.state="hold",t.path=[]);return}let o=n.objective;if(e.target==="objective"&&o){if(this.keepEngaging(t,Math.min(r,12)))return;let c=this.nearestEnemy(t,Math.min(r,12));if(c){this.engage(t,c);return}if(Math.hypot(o.x-t.x,o.z-t.z)>o.r*.5)this.moveTo(t,o.x,o.z,"move");else{let u=this.nearestEnemy(t,22);u?this.engage(t,u):(t.state="hold",t.path=[])}return}let a=this.nearestEnemy(t,Math.min(r,9));a||(a=this.chooseTarget(t)),a?this.engage(t,a):(t.state="idle",t.path=[])}thinkRanged(t){let e=t.orders,n=t.T.range;if(e.skirmish&&!t.moveOnly){let a=this.nearestEnemy(t,9,c=>!c.isRanged&&c.state!=="retreat");if(a){let c=t.x-a.x,l=t.z-a.z,u=Math.hypot(c,l)||1,d=t.x+c/u*12,f=t.z+l/u*12;if(this.map.isPassable(d,f,t.side)&&a.typeId!=="cavalry"){this.moveTo(t,d,f,"kite"),t.target=a;return}}}let i=null,r=this.chooseTarget(t,null,n);if(r&&(i=r),t.cmd&&t.wp&&t.wpIdx>=t.wp.length){t.orders.move="hold",t.holdX=t.cmd.x,t.holdZ=t.cmd.z,t.cmdFace=t.cmd.face,t.cmd=null,t.moveOnly=!1,t.groupSpeed=null,t.wp=[],t.state="hold",t.path=[];return}if(t.wp&&t.wpIdx<t.wp.length){if(!t.moveOnly&&i&&we(t,i)<n*.9){t.target=i,t.state="shoot",t.path=[];return}let a=t.wp[t.wpIdx];if(Math.hypot(a[0]-t.x,a[1]-t.z)<(t.cmd?2.4:4)){t.wpIdx++,t.path=[];return}this.moveTo(t,a[0],a[1],"move");return}if(i){t.target=i,t.state="shoot",t.path=[];return}if(e.move==="hold"){Math.hypot(t.holdX-t.x,t.holdZ-t.z)>2.5?this.moveTo(t,t.holdX,t.holdZ,"move"):(t.state="hold",t.path=[]);return}let o=this.chooseTarget(t);if(e.target==="objective"&&this.map.objective&&(!o||we(t,o)>n*1.4)){let a=this.map.objective;if(Math.hypot(a.x-t.x,a.z-t.z)>n*.6){this.moveTo(t,a.x,a.z,"move");return}}if(o){t.target=o;let a=o.x-t.x,c=o.z-t.z,l=Math.hypot(a,c),u=n*.82;this.moveTo(t,t.x+a/l*(l-u+1),t.z+c/l*(l-u+1),"move")}else t.state="idle",t.path=[]}keepEngaging(t,e,n=!1){let i=t.target;return t.state!=="engage"||!i||!i.alive||i.state==="retreat"||we(t,i)-i.support((t.x-i.x)/(we(t,i)||1),(t.z-i.z)/(we(t,i)||1))>e+8||n&&Math.hypot(i.x-t.holdX,i.z-t.holdZ)>e+18?!1:(this.engage(t,i),!0)}wantsInside(t){let e=this.map;if(!e.castle)return!1;if(t.orders.target==="objective")return!0;let n=t.target;return n&&n.alive&&e.inCastle(n.x,n.z)?!0:!!(t.pathGoal&&e.inCastle(t.pathGoal[0],t.pathGoal[1]))}engage(t,e){t.target=e;let n=this.contactDist(t,e);if(we(t,e)<n){this.startMelee(t,e);return}this.moveTo(t,e.x,e.z,"engage",e)}moveTo(t,e,n,i,r=null){t.state=i;let o=t.pathGoal,a=!o||Math.hypot(o[0]-e,o[1]-n)>(r?3:1);t.repathT-=.25,(!t.path.length||a||t.repathT<=0)&&(t.path=this.pf.find(t.x,t.z,e,n,t.side,t.halfW*2),t.pathGoal=[e,n],t.repathT=r?1.2:4)}startMelee(t,e){t.melee=e,t.state="melee",t.path=[];let n=we(t,e)||1;if(t.typeId==="cavalry"&&t.chargeReady&&t.speedCur>t.T.speed*.55)if(t.chargeReady=!1,t.movedFast=0,e.typeId==="pike"&&e.state!=="retreat")this.damage(t,t.count*1.1,e,!1),this.events.push({type:"impact",x:(t.x+e.x)/2,z:(t.z+e.z)/2,big:!1,broken:!0});else{t.chargeT=2.8;let i=this.flankMult(t,e),r=t.orders.formation==="wedge"?1.25:1;this.damage(e,t.count*1.05*i*r,t,!1),this.events.push({type:"impact",x:(t.x+e.x)/2,z:(t.z+e.z)/2,big:!0}),e.knock={x:(e.x-t.x)/n,z:(e.z-t.z)/n,t:.5}}!e.melee&&e.state!=="retreat"&&e.alive&&(e.melee=t,e.state="melee"),this.events.push({type:"clash",x:(t.x+e.x)/2,z:(t.z+e.z)/2})}startRetreat(t){t.state="retreat",t.melee=null,t.retreated++,t.target=null;let e,n,i=t.orders,r=this.map.camps[t.side];if(e=r.x+(t.side===0?6:-6),n=r.z,i.retreatTo==="ally"){let o=null,a=1e9;for(let c of this.alliesOf(t.side)){if(c===t||c.state==="retreat")continue;let l=we(t,c);l<a&&(a=l,o=c)}if(o){let c=this.enemiesOf(t.side),l=0,u=0;for(let g of c)l+=g.x,u+=g.z;c.length&&(l/=c.length,u/=c.length);let d=o.x-l,f=o.z-u,p=Math.hypot(d,f)||1;e=o.x+d/p*10,n=o.z+f/p*10}}if(this.map.castle&&this.map.castle.owner===t.side){let o=this.map.objective;e=o.x,n=o.z}[e,n]=this.snapFree(e,n,t.side),t.retreatGoal=[e,n],t.path=this.pf.find(t.x,t.z,e,n,t.side,t.halfW*2),this.events.push({type:"retreat",side:t.side,legion:t})}act(t,e){t.lastHitT+=e,t.chargeT-=e,t.knock&&(t.knock.t-=e,t.knock.t<=0&&(t.knock=null));let n=this.map,i=t.T,r=0,o=null;switch(t.typeId==="cavalry"&&!t.chargeReady&&!t.melee&&(t.speedCur>i.speed*.6&&(t.movedFast+=e),t.movedFast>1.6&&(t.chargeReady=!0)),t.state){case"melee":{let a=t.melee;if(!a||!a.alive){t.melee=null,t.state="idle";break}o=a;let c=this.contactDist(t,a);we(t,a)>c-.2&&(r=Math.min(i.speed,1.6),this.stepToward(t,a.x,a.z,r,e)),this.dealMelee(t,a,e);break}case"shoot":{let a=t.target;if(!a||!a.alive){t.state="idle";break}if(o=a,we(t,a)>i.range*1.05){t.state="idle";break}t.volleyT-=e,t.volleyT<=0&&(this.fireVolley(t,a),t.volleyT=i.volley*(.9+Math.random()*.2));break}case"retreat":{r=i.speed*1.12,this.followPath(t,r,e)&&(t.state="regroup",t.regroupT=7);break}case"regroup":{t.regroupT-=e,t.hp=Math.min(t.count*i.hp,t.hp+i.hp*.25*e);let a=this.nearestEnemy(t,4);if(a){t.melee=a,t.state="melee";break}t.regroupT<=0&&(t.holdX=t.x,t.holdZ=t.z,t.orders.afterRetreat==="hold"&&(t.orders.move="hold"),t.wp=[],t.wpIdx=0,t.state="idle",this.events.push({type:"rally",legion:t}));break}case"move":case"engage":case"kite":{if(r=i.speed,t.state==="engage"&&t.target&&t.target.alive){let a=t.target;if(we(t,a)<this.contactDist(t,a)){this.startMelee(t,a);break}}if(t.isRanged&&t.target&&t.target.alive&&we(t,t.target)<i.range*.95&&t.state!=="kite"){t.state="shoot",t.path=[];break}this.followPath(t,r,e)&&(t.path=[]);break}case"breach":{let a=n.gate;if(!a||!a.alive){t.state="idle";break}o={x:a.x,z:a.z};let c=Math.hypot(a.x-t.x,a.z-t.z);if(c>t.halfD+4&&this.stepToward(t,a.x,a.z,1.4,e),c>t.halfD+12){t.state="idle";break}let l=t.count*i.atk*.09*(t.typeId==="guard"?1.3:t.typeId==="cavalry"?.5:t.typeId==="archer"?.3:1);if(a.hp-=l*e,a.shake=.25,t.gateHitT=(t.gateHitT||0)-e,t.gateHitT<=0&&(t.gateHitT=.7,this.events.push({type:"gatehit",x:a.x,z:a.z})),a.hp<=0){a.hp=0,a.alive=!1,this.events.push({type:"gatebroken",x:a.x,z:a.z});for(let d of this.legions)d.path=[]}let u=this.nearestEnemy(t,3);u&&this.engage(t,u);break}case"hold":case"idle":case"wait":default:{let a=this.nearestEnemy(t,t.cmdFace!=null?18:45);a?o=a:t.cmdFace!=null&&(o={x:t.x+Math.sin(t.cmdFace)*10,z:t.z+Math.cos(t.cmdFace)*10});break}}if(t.state!=="move"&&t.state!=="engage"&&t.state!=="retreat"&&t.state!=="kite"&&t.state!=="melee"&&t.state!=="breach"&&(t.speedCur=Math.max(0,t.speedCur-6*e)),o&&this.turnToward(t,Math.atan2(o.x-t.x,o.z-t.z),e),t.knock){let a=t.x+t.knock.x*2.2*e,c=t.z+t.knock.z*2.2*e;n.isPassable(a,c,t.side)&&(t.x=a,t.z=c)}if(t.clearT=(t.clearT||0)-e,t.clearT<=0||t.formDirty){t.clearT=.4;let a=this.map.clearanceAt(t.x,t.z),l=t.state==="move"||t.state==="engage"||t.state==="retreat"||t.state==="kite"?a+1:99,u=t.cols,d=!!(this.map.flagAt(t.x,t.z)&1)||this.map.treesNear(t.x,t.z,Math.max(t.halfW,t.halfD))>2;d!==!!t.loose&&(t.loose=d,t.formDirty=!0),(t.formDirty||l!==t.lastClear)&&(t.lastClear=l,t.layout(l),u!==t.cols&&(t.formDirty=!1))}}turnToward(t,e,n){let i=t.typeId==="cavalry"?2.6:t.isRanged?2.2:1.8,r=il(t.face,e),o=sn(r,-i*n,i*n);t.face+=o}stepToward(t,e,n,i,r){let o=e-t.x,a=n-t.z,c=Math.hypot(o,a);if(c<.01)return;let l=Math.min(c,i*r),u=t.x+o/c*l,d=t.z+a/c*l;this.map.isPassable(u,d,t.side)&&(t.x=u,t.z=d)}followPath(t,e,n){let i=this.map;if(!t.path.length)return!0;let r=t.path[0],o=r[0]-t.x,a=r[1]-t.z,c=Math.hypot(o,a),l=t.path.length===1?t.state==="retreat"?3.5:1.8:t.blockCool>0?.5:1.6;if(c<l)return t.path.shift(),t.path.length===0;if(o/=c,a/=c,t.path.length>1&&c<5){let U=t.path[1],P=U[0]-t.x,I=U[1]-t.z,D=Math.hypot(P,I)||1,E=o*(P/D)+a*(I/D),h=E>0?(1-c/5)*.6*E:0;o=o*(1-h)+P/D*h,a=a*(1-h)+I/D*h;let v=Math.hypot(o,a)||1;o/=v,a/=v}let u=i.flagAt(t.x,t.z),d=e;u&1&&(d*=.72),u&2&&(d*=.55),t.orders.formation==="block"&&(d*=.9),t.orders.stance==="aggressive"&&(d*=1.05),t.groupSpeed&&t.state!=="retreat"&&(d=Math.min(d,t.groupSpeed));let f=i.getHeight(t.x,t.z);i.getHeight(t.x+o*2,t.z+a*2)-f>.4&&(d*=.8),t.path.length===1&&(d*=sn(c/5,.35,1));let g=Math.atan2(o,a),y=il(t.face,g);this.turnToward(t,g,n);let x=Math.abs(y);if(t.blockCool=Math.max(0,(t.blockCool||0)-n),x<1.3&&c>l*2&&t.blockCool<=0){let U=Math.sin(t.face),P=Math.cos(t.face);o=o*.55+U*.45,a=a*.55+P*.45;let I=Math.hypot(o,a)||1;o/=I,a/=I}t.blockCool<=0&&(d*=x<1.3?.55+.45*Math.cos(y):.5),t.speedCur+=sn(d-t.speedCur,-5*n,2.4*n);let m=Math.min(c,t.speedCur*n),M=t.x+o*m,b=t.z+a*m,_=i.gate;if(_&&_.alive&&t.side!==_.owner){let U=i.cellIndex(M+o*(t.halfD+1),b+a*(t.halfD+1));if(U>=0&&i.flags[U]&8)return t.state="breach",this.events.push({type:"breach",legion:t}),!1}if(i.isPassable(M,b,t.side))t.x=M,t.z=b,t.blockT=0;else if(i.isPassable(M,t.z,t.side)?t.x=M:i.isPassable(t.x,b,t.side)&&(t.z=b),t.blockT=(t.blockT||0)+n,t.blockCool=1.2,t.blockT>.35){t.blockT=0;let U=t.state==="retreat"&&t.retreatGoal?t.retreatGoal:t.path[t.path.length-1],P=this.pf.find(t.x,t.z,U[0],U[1],t.side,t.halfW*2),I=this.pf.nearestFree(i.cellIndex(t.x,t.z),t.side);I>=0&&P.unshift(i.cellCenter(I)),t.path=P}return!1}flankMult(t,e){let n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i)||1,o=n/r*e.fwdX+i/r*e.fwdZ;return o<-.45?1.6:o<.4?1.3:1}mods(t,e,n){let i=1,r=1,o=t.orders,a=e.orders;o.stance==="aggressive"?i*=1.15:o.stance==="defensive"&&(i*=.9),a.stance==="aggressive"?r*=.9:a.stance==="defensive"&&(r*=1.2),o.formation==="wedge"&&(i*=1.1),a.formation==="wedge"&&(r*=.9),o.formation==="block"&&(i*=.95),a.formation==="block"&&(r*=1.15);let c=this.map,l=c.getHeight(t.x,t.z),u=c.getHeight(e.x,e.z);l-u>1.5?i*=1.2:u-l>1.5&&(i*=.85),c.castle&&c.castle.owner===e.side&&c.inCastle(e.x,e.z)&&(r*=n&&!c.inCastle(t.x,t.z)?1.6:1.3);let d=c.flagAt(e.x,e.z);return d&2&&(r*=.75),n&&d&1&&(r*=1.6),e.state==="retreat"&&(r*=.6),e.state==="breach"&&(r*=.85),[i,r]}dealMelee(t,e,n){let i=t.T,[r,o]=this.mods(t,e,!1);t.typeId==="pike"&&e.typeId==="cavalry"&&(r*=i.vsCav),t.typeId==="cavalry"&&e.isRanged&&(r*=1.5),t.chargeT>0&&(r*=i.charge||1),r*=this.flankMult(t,e),t.isRanged&&(r*=.9);let c=t.count*i.atk*.1*r/(1+e.T.def*o*.22)*n;this.damage(e,c,t,!1),t.clashT=(t.clashT||0)-n,t.clashT<=0&&(t.clashT=.35+Math.random()*.5,this.events.push({type:"clash",x:(t.x+e.x)/2+(Math.random()-.5)*t.halfW,z:(t.z+e.z)/2+(Math.random()-.5)*2,soft:!0}))}fireVolley(t,e){let n=t.T,i=we(t,e),r=.46-.24*(i/n.range);e.melee&&(r*=.75);let[o,a]=this.mods(t,e,!0),l=t.count*r,u=e.T.arrowResist||1,d=l*n.arrowDmg*o*u/(1+e.T.def*a*.12),f=.9+i/40;this.volleys.push({A:t,B:e,dmg:d,t:this.time+f});let p=t.soldiers.filter(y=>y.alive),g=Math.min(p.length,18);for(let y=0;y<g;y++){let x=p[(y*7+Math.random()*3|0)%p.length];x.shoot=.6;let m=e.soldiers.filter(b=>b.alive),M=m.length?m[Math.random()*m.length|0]:e;this.arrows.push({x0:x.x,y0:x.y+1.5,z0:x.z,x1:M.x+(Math.random()-.5)*3,z1:M.z+(Math.random()-.5)*3,y1:(M.y||0)+.6,t0:this.time+Math.random()*.25,dur:f,arc:4+i*.18})}this.events.push({type:"volley",x:t.x,z:t.z})}resolveVolleys(){let t=this.time;for(let e=this.volleys.length-1;e>=0;e--){let n=this.volleys[e];t>=n.t&&(n.B.alive&&(this.damage(n.B,n.dmg,n.A,!0),n.B.underFire=1,this.events.push({type:"arrowhit",x:n.B.x,z:n.B.z})),this.volleys.splice(e,1))}}damage(t,e,n,i){if(!t.alive||e<=0)return;t.hp-=e,n.dealt+=e,t.lastHitT=0;let r=Math.max(0,Math.ceil(t.hp/t.T.hp-1e-6)),o=!1;for(;t.count>r;){t.count--;let a=t.killSoldier(n.x,n.z,i);n.kills++,this.lost[t.side]++,o=!0,a&&this.events.push({type:"death",x:a.x,z:a.z,side:t.side})}if(t.count<=0){t.hp=0,t.state="dead",t.melee=null;for(let a of this.legions)a.melee===t&&(a.melee=null,a.state="idle"),a.target===t&&(a.target=null);this.events.push({type:"legionlost",side:t.side,legion:t})}else o&&t.reassign()}separate(t){let e=this.legions.filter(r=>r.alive),n=this.map,i=r=>r.state==="move"||r.state==="engage"||r.state==="kite"||r.state==="breach";for(let r=0;r<e.length;r++)for(let o=r+1;o<e.length;o++){let a=e[r],c=e[o];if(a.melee===c||c.melee===a||a.state==="retreat"||c.state==="retreat")continue;let l=we(a,c)||.01,u=this.contactDist(a,c),d,f;if(a.side===c.side){let p=i(a),g=i(c);p&&g?(d=u*.45,f=1.2):p||g?(d=u*.35,f=.8):(d=u*.78,f=4)}else{if(l<u*.98){if(!a.melee&&!a.isRanged){this.startMelee(a,c);continue}if(!c.melee&&!c.isRanged){this.startMelee(c,a);continue}}d=u*.95,f=4}if(l<d){let p=Math.min(d-l,f*t),g=(c.x-a.x)/l,y=(c.z-a.z)/l,x=a.melee||a.state==="hold"||a.state==="shoot"||a.state==="breach",m=c.melee||c.state==="hold"||c.state==="shoot"||c.state==="breach",M=x&&!m?.15:m&&!x?.85:.5,b=1-M,_=a.x-g*p*M*2,U=a.z-y*p*M*2,P=c.x+g*p*b*2,I=c.z+y*p*b*2;n.isPassable(_,U,a.side)&&(a.x=_,a.z=U),n.isPassable(P,I,c.side)&&(c.x=P,c.z=I)}}}updateSoldiers(t,e){let n=this.map,i=this.time,r=t.state==="melee"&&t.melee,o=t.speedCur>.2,a=t.T.speed*1.5+1,c=r?t.melee:null;for(let l of t.soldiers){if(!l.alive){l.deadT>0&&l.deadT<30&&(l.deadT+=e);continue}let[u,d]=t.slotWorld(l.slot);u+=l.jx,d+=l.jz;let f=t.slots[l.slot]?t.slots[l.slot][1]+t.halfD-.7:0;if(c){let _=c.x-u,U=c.z-d,P=Math.hypot(_,U)||1,D=f<t.T.spacing*1.6?.7:.25;u+=_/P*D+Math.sin(i*2+l.phase)*.15,d+=U/P*D+Math.cos(i*2.3+l.phase)*.15}if(!n.isPassable(u,d,t.side)){let _=!1;for(let U=1;U<=4;U++){let P=U/4,I=u+(t.x-u)*P,D=d+(t.z-d)*P;if(n.isPassable(I,D,t.side)){u=I,d=D,_=!0;break}}_||(u=t.x,d=t.z)}n.avoidTrees(u,d,Ts,t.typeId==="cavalry"?.45:0)&&(u=Ts[0],d=Ts[1]),n.avoidTrees(l.x,l.z,Ts,.5)&&(l.x=Ts[0],l.z=Ts[1]);let p=u-l.x,g=d-l.z,y=Math.hypot(p,g),x=Math.min(y,Math.min(a+y*1.2,y*3.2+.35)*e);if(y>.02){let _=l.x+p/y*x,U=l.z+g/y*x;!n.isPassable(_,U,t.side)&&n.isPassable(l.x,l.z,t.side)&&(_=l.x,U=l.z),l.x=_,l.z=U}let m=x/Math.max(e,1e-4);l.walk+=x*2.2,l.moving=m>.5;let M;c?M=Math.atan2(c.x-l.x,c.z-l.z):m>.6&&y>.3?M=Math.atan2(p,g):t.state==="shoot"&&t.target?M=Math.atan2(t.target.x-l.x,t.target.z-l.z):M=t.face;let b=il(l.yaw,M);if(l.yaw+=sn(b,-5*e,5*e),l.y=n.getHeight(l.x,l.z),c){let _=f<t.T.spacing*2.2;l.swing=_?Math.sin(i*7+l.phase)*.5+.5:0}else l.swing=Math.max(0,l.swing-e*3);l.shoot>0&&(l.shoot-=e),l.hit>0&&(l.hit-=e)}(o||r)&&(t.lastMove=i)}updateObjective(t){let e=this.map.objective;if(!e)return;let n=[0,0];for(let i of this.legions)!i.alive||i.state==="retreat"||Math.hypot(i.x-e.x,i.z-e.z)<e.r+i.halfW*.5&&(n[i.side]+=i.count);if(e.present=n,e.type==="keep"){let i=1-e.owner;n[i]>0&&n[e.owner]===0?e.hold+=t:e.hold=Math.max(0,e.hold-t*.5)}else e.type==="hill"&&(n[0]>0&&n[1]===0&&(e.score[0]+=t*1.6),n[1]>0&&n[0]===0&&(e.score[1]+=t*1.6))}strength(t){let e=0;for(let n of this.legions)n.side===t&&n.alive&&(e+=n.count);return e}checkVictory(){if(!this.started||this.over)return;let t=this.strength(0),e=this.strength(1),n=o=>{let a=this.legions.filter(c=>c.side===o&&c.alive);return a.length>0&&a.every(c=>c.state==="retreat")},i=this.map.objective,r=(o,a)=>{this.over=!0,this.winner=o,this.reason=a,this.events.push({type:"end",winner:o})};if(t<=this.start[0]*.08||t===0)return r(1,"Deine Legionen wurden vernichtet.");if(e<=this.start[1]*.08||e===0)return r(0,"Das feindliche Heer wurde vernichtet.");if(n(1)&&e<t*.6)return r(0,"Der Feind flieht vom Schlachtfeld!");if(n(0)&&t<e*.6)return r(1,"Deine Legionen fliehen vom Schlachtfeld.");if(i&&i.type==="keep"&&i.hold>=i.need){let o=1-i.owner;return r(o,o===0?"Der Burghof ist eingenommen \u2013 die Burg geh\xF6rt dir!":"Der Feind hat den Burghof eingenommen.")}if(i&&i.type==="hill"){if(i.score[0]>=i.need)return r(0,"Der Steinkreis ist in deiner Hand!");if(i.score[1]>=i.need)return r(1,"Der Feind h\xE4lt den Steinkreis.")}if(this.time>=this.timeLimit){if(i&&i.type==="keep"){let c=i.owner;return r(c,c===0?"Die Mauern haben gehalten. Die Burg ist sicher!":"Die Zeit ist abgelaufen \u2013 die Burg h\xE4lt stand.")}if(i&&i.type==="hill"&&Math.abs(i.score[0]-i.score[1])>3){let c=i.score[0]>i.score[1]?0:1;return r(c,"Zeit abgelaufen \u2013 Punktsieg am Steinkreis.")}let o=t/this.start[0],a=e/this.start[1];return r(o>=a?0:1,"Zeit abgelaufen \u2013 Sieg nach verbliebener St\xE4rke.")}}};function sl(s,t,e){let n=s.length,i=t==="defend"?["legion","legion","guard","cavalry","archer","pike"]:t==="assault"?["archer","pike","guard","legion","archer","legion"]:["legion","archer","pike","cavalry","guard","legion"],r=[],o=s.filter(c=>c==="cavalry").length,a=s.filter(c=>c==="archer").length;for(let c=0;c<n;c++){let l=i[(c+e.int(0,2))%i.length];c===0&&(l=t==="assault"?"archer":"legion"),o>=2&&c===1&&(l="pike"),a>=2&&c===2&&t!=="assault"&&(l="cavalry"),r.push(l)}return r}function hu(s,t,e){let n=i=>i.reduce((r,o)=>r+xn[o].size*xn[o].value,0);return n(s)/Math.max(1,n(t))*e}function Pa(s,t,e,n,i){let r=e===0?t.x1-6:t.x0+6,o=e===0?t.x0+6:t.x1-6,a=n.canyon?n.canyonCenter(r):(t.z0+t.z1)/2;for(let p of s)p.placed=!1;let c=s.filter(p=>!p.isRanged&&p.typeId!=="cavalry"),l=s.filter(p=>p.isRanged),u=s.filter(p=>p.typeId==="cavalry"),d=(p,g,y)=>{let[x,m]=rl(n,t,g,y,p,e,s);p.x=x,p.z=m,p.face=e===0?Math.PI/2:-Math.PI/2,p.buildSoldiers()},f=(p,g,y)=>{p.forEach((x,m)=>{let M=a+(m-(p.length-1)/2)*y;d(x,g,M)})};if(t.castle){let p=n.castle,g=p.face,y=p.gateX-g*7;c.forEach((x,m)=>d(x,y-g*(m%2)*7,p.cz+(m-(c.length-1)/2)*11)),l.forEach((x,m)=>d(x,p.gateX-g*4,p.cz+(m%2?1:-1)*(9+m*3))),u.forEach((x,m)=>d(x,n.objective.x,n.objective.z+(m-.5)*10));return}f(c,r,13),f(l,(r+o)/2+(e===0?-3:3),14),u.forEach((p,g)=>d(p,r-(e===0?4:-4),a+(g%2?1:-1)*(c.length*7+8+Math.floor(g/2)*9)))}function rl(s,t,e,n,i,r,o){let a=[[0,0]];for(let c=2;c<44;c+=2)for(let l=0;l<12;l++)a.push([Math.cos(l*.5236)*c,Math.sin(l*.5236)*c]);for(let[c,l]of[[9,3],[6,2.5],[0,1]])for(let[u,d]of a){let f=Math.max(t.x0+3,Math.min(t.x1-3,e+u)),p=Math.max(t.z0+3,Math.min(t.z1-3,n+d));if(s.isPassable(f,p,r)&&!(s.clearanceAt(f,p)<l)&&!o.some(g=>g!==i&&g.placed&&Math.hypot(g.x-f,g.z-p)<c))return i.placed=!0,[f,p]}return i.placed=!0,[e,n]}function al(s,t,e,n,i){let r=Ui[n];for(let o of s){o.aiSmart=i()<r.smart;let a=o.orders;switch(a.retreatAt=i()<.5?.25:.2,a.retreatTo="camp",a.afterRetreat="return",a.stance="balanced",o.typeId){case"archer":a.move="hold",a.target="nearest",a.skirmish=!0;break;case"cavalry":a.move=i()<.5?"flankL":"flankR",a.target="ranged",a.formation="wedge",a.delay=i.int(3,8);break;case"guard":a.move="advance",a.target="strongest",a.formation="block",a.stance="defensive";break;case"pike":a.move="advance",a.target="nearest",a.delay=2;break;default:a.move="advance",a.target=i()<.5?"nearest":"weakest"}t==="assault"&&(a.retreatAt=0,o.isRanged?(a.move="hold",a.skirmish=!1):o.typeId==="cavalry"?(a.move="hold",a.target="objective",a.delay=0):(a.move="hold",a.stance="balanced")),t==="defend"&&(o.isRanged?(a.move="advance",a.target="nearest"):(a.move="advance",a.target="objective",a.stance="aggressive"),o.typeId==="cavalry"&&(a.move="advance",a.delay=25)),t==="hill"&&(!o.isRanged&&i()<.7&&(a.target="objective"),o.isRanged&&(a.move="advance",a.target="nearest")),t==="canyon"&&o.typeId==="cavalry"&&(a.move="advance")}}var cr=class{constructor(t,e,n,i=1){this.side=i,this.b=t,this.D=Ui[e],this.rng=n,this.t=0}update(t){if(this.t+=t,this.t<this.D.think)return;this.t=0;let e=this.b,n=this.side,i=1-n,r=e.legions.filter(u=>u.side===n&&u.alive),o=e.legions.filter(u=>u.side===i&&u.alive);if(!o.length)return;let a=r.reduce((u,d)=>u+d.count,0),c=o.reduce((u,d)=>u+d.count,0),l=e.map.objective;for(let u of r){if(u.state==="retreat"||u.state==="regroup"||u.state==="melee"||this.rng()>this.D.smart+.2)continue;let d=u.orders;if(e.map.castle&&e.map.castle.owner===n){!e.map.gate.alive&&u.typeId==="cavalry"&&d.move==="hold"&&(d.move="advance",d.target="ranged",e.applyOrders(u)),l&&l.present&&l.present[i]>0&&!u.isRanged&&d.move==="hold"&&(d.move="advance",d.target="objective",e.applyOrders(u));continue}if(l&&l.type==="hill"&&l.score[i]>l.score[n]+10&&!u.isRanged&&d.target!=="objective"){d.target="objective",e.applyOrders(u);continue}a>c*1.3&&d.stance!=="aggressive"&&!u.isRanged?d.stance="aggressive":a<c*.7&&d.stance==="aggressive"&&(d.stance="balanced"),(u.state==="hold"||u.state==="idle")&&!u.isRanged&&e.time>25&&d.move==="hold"&&!(e.map.castle&&e.map.castle.owner===n)&&(d.move="advance",e.applyOrders(u)),u.isRanged&&u.state==="hold"&&e.time>12&&(e.chooseTarget(u,null,u.T.range)||(d.move="advance",e.applyOrders(u))),u.typeId==="cavalry"&&u.aiSmart&&u.target&&u.target.typeId==="pike"&&(u.target=null,u.path=[])}}};var uu=new Zt,du=new Zt,di=new Zt,Bi=new Ve,Da=new Ve,fi=new Ce,Wg=new Ce(0,0,0,"YXZ"),Rs=new B,Cs=new B(1,1,1),As=new ft,Kx=new B(0,1,0),za=new Zt().makeScale(0,0,0),Ua=class{constructor(t,e,n,i){var a;this.scene=t,this.map=n,this.legions=e,this.group=new pe,t.add(this.group),this.geos=nu(),this.mat=new Te({flatShading:!0});let r={};this.defs={};for(let c of e){let l=c.side+":"+c.typeId;this.defs[l]||(this.defs[l]=iu(c.side,c.typeId));for(let u of this.defs[l])r[u.g]=(r[u.g]||0)+c.maxCount}this.meshes={},this.counters={};for(let c in r){let l=new Ci(this.geos[c],this.mat,r[c]);l.instanceMatrix.setUsage(ir),l.castShadow=i,l.receiveShadow=!1,l.frustumCulled=!1,l.count=r[c];for(let u=0;u<r[c];u++)l.setMatrixAt(u,za);this.meshes[c]=l,this.counters[c]=0,this.group.add(l)}for(let c of e){let l=this.defs[c.side+":"+c.typeId],u=qn[c.side].colors;for(let d of c.soldiers){d.pi=[];let f=.9+Math.random()*.14;for(let p of l){let g=this.counters[p.g]++;d.pi.push(g),As.setHex((a=u[p.role])!=null?a:16711935);let y=p.role==="skin"||p.role==="horse"?.82+Math.random()*.3:f;As.multiplyScalar(y),this.meshes[p.g].setColorAt(g,As)}d.colored=!0}}for(let c in this.meshes)this.meshes[c].instanceColor&&(this.meshes[c].instanceColor.needsUpdate=!0);this.standards=new Map;let o=new Te({color:5914664,flatShading:!0});for(let c of e){let l=qn[c.side],u=new pe,d=new Ft(this.geos.pole,o);u.add(d);let f=new Te({color:c.side===0?14922817:2829104,flatShading:!0}),p=new Ft(this.geos.eagle,f);u.add(p);let g=new nn(1.3,1.6,3,1);g.translate(0,2.35,.08);let y=new Ft(g,new Te({color:l.colors.banner,side:ye,flatShading:!0}));y.userData.base=Float32Array.from(g.attributes.position.array),u.add(y);let x=new Ft(new en(1.5,.08,.08),f);x.position.y=3.2,u.add(x),u.traverse(m=>{m.castShadow=i}),this.group.add(u),this.standards.set(c,{g:u,flag:y})}this.ringMat=new me({color:16769146,transparent:!0,opacity:.85,depthWrite:!1}),this.rings=new Map,this.fx=new ol(t)}ringFor(t){let e=this.rings.get(t);if(!e){let n=new Xn(.92,1,40,1);n.rotateX(-Math.PI/2);let i=this.ringMat.clone();i.color.set(t.side===0?16769146:16738906),e=new Ft(n,i),e.renderOrder=3,this.group.add(e),this.rings.set(t,e)}return e}update(t,e,n,i){let r=a=>n instanceof Set?n.has(a):n===a,o=this.map;for(let a of this.legions){let c=this.defs[a.side+":"+a.typeId],l=a.typeId==="cavalry",u=a.state==="melee",d=a.state==="shoot";for(let g of a.soldiers){if(!g.alive&&g.deadT>2.2){if(g.settled)continue;g.settled=!0}let y=!g.alive,x=y?Math.min(1,g.deadT/.6):0;fi.set(0,g.yaw,0),Bi.setFromEuler(fi);let m=g.y;if(!y&&g.moving&&(m+=Math.abs(Math.sin(g.walk*(l?.9:1.4)))*(l?.12:.07)),y){let b=x*x*(l?1.45:1.5)*g.fall;fi.set(l?0:-b,0,l?b:0),Da.setFromEuler(fi),Bi.multiply(Da),m-=x*.15}uu.compose(Rs.set(g.x,m,g.z),Bi,Cs.set(1,1,1));let M=g.walk*(l?.9:1.4);for(let b=0;b<c.length;b++){let _=c[b],U=_.r[0],P=_.r[1],I=_.r[2],D=_.p[0],E=_.p[1],h=_.p[2];if(!y)switch(_.anim){case"legL":U+=g.moving?Math.sin(M)*.55:0;break;case"legR":U-=g.moving?Math.sin(M)*.55:0;break;case"hlegF":U+=g.moving?Math.sin(M*1.3)*.6:0;break;case"hlegB":U-=g.moving?Math.sin(M*1.3)*.6:0;break;case"horse":U+=g.moving?Math.sin(M*1.3)*.04:0;break;case"arm":U+=u?-1.4+g.swing*2:.35+(g.moving?Math.sin(M)*.2:0);break;case"pike":U+=u?.02+g.swing*.08:-1.48,u&&(h+=g.swing*.35);break;case"lance":U+=u||a.chargeT>0?.08+g.swing*.2:a.speedCur>a.T.speed*.6?.1:-1.1;break;case"shield":u&&(h+=.08);break;case"bow":(g.shoot>0||d)&&(U-=.5,E+=.15);break}fi.set(U,P,I),Da.setFromEuler(fi),du.compose(Rs.set(D,E,h),Da,Cs.set(1,1,1)),di.multiplyMatrices(uu,du),this.meshes[_.g].setMatrixAt(g.pi[b],di)}if(y&&!g.darkened){g.darkened=!0;for(let b=0;b<c.length;b++){let _=this.meshes[c[b].g];_.getColorAt(g.pi[b],As),As.multiplyScalar(.62),_.setColorAt(g.pi[b],As),_.instanceColor.needsUpdate=!0}}}let f=this.standards.get(a);if(a.alive){f.g.visible=!0;let g=a.soldiers.find(b=>b.alive&&b.slot===Math.floor(a.cols/2))||a.soldiers.find(b=>b.alive),y=g?g.x:a.x,x=g?g.z:a.z;f.g.position.set(y-a.fwdX*.2,o.getHeight(y,x)+(a.typeId==="cavalry"?1.3:.4),x-a.fwdZ*.2),f.g.rotation.y=a.face+Math.PI/2;let m=f.flag.geometry.attributes.position,M=f.flag.userData.base;for(let b=0;b<m.count;b++){let _=M[b*3];m.array[b*3+2]=M[b*3+2]+Math.sin(_*3+t*5+a.id)*.12*(_+.65)}m.needsUpdate=!0}else f.g.visible&&(f.g.rotation.z=Math.min(1.4,(f.g.rotation.z||0)+e*2),f.g.rotation.z>=1.4&&(f.g.visible=!1));if((r(a)||i===a)&&a.alive){let g=this.ringFor(a);g.visible=!0;let y=Math.max(a.halfW,a.halfD)+1.2;g.scale.set(y,1,y),g.position.set(a.x,o.getHeight(a.x,a.z)+.25,a.z),g.material.opacity=r(a)?.65+Math.sin(t*5)*.2:.45}else this.rings.has(a)&&(this.rings.get(a).visible=!1)}for(let a in this.meshes)this.meshes[a].instanceMatrix.needsUpdate=!0;this.fx.update(t,e,o)}dispose(){this.scene.remove(this.group),this.fx.dispose(),this.group.traverse(t=>{t.geometry&&t.geometry.dispose()})}},Is=class{constructor(t,e,n,i){this.mesh=new Ci(e,n,i),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(ir),this.items=[],this.n=i,t.add(this.mesh);for(let r=0;r<i;r++)this.mesh.setMatrixAt(r,za)}spawn(t){this.items.length<this.n&&this.items.push(t)}},ol=class{constructor(t){this.scene=t,this.sparks=new Is(t,new ha(.12),new me({color:16773296}),260),this.dust=new Is(t,new li(.5,0),new Te({color:13153684,flatShading:!0}),220);let e=new en(.05,.05,1);this.arrows=new Is(t,e,new me({color:3811866}),420),this.debris=new Is(t,new en(.4,.15,.7),new Te({color:7030054,flatShading:!0}),60),this.battleArrows=[]}burst(t,e,n,i=8,r=!1){for(let o=0;o<i;o++)this.sparks.spawn({x:t,y:e,z:n,vx:(Math.random()-.5)*6,vy:2+Math.random()*4,vz:(Math.random()-.5)*6,life:.35+Math.random()*.25,t:0,s:r?1.6:1})}puff(t,e,n,i=3,r=1){for(let o=0;o<i;o++)this.dust.spawn({x:t+(Math.random()-.5)*2,y:e+.3,z:n+(Math.random()-.5)*2,vx:(Math.random()-.5)*1.5,vy:.6+Math.random(),vz:(Math.random()-.5)*1.5,life:.9+Math.random()*.6,t:0,s:r*(.6+Math.random()*.6)})}splinters(t,e,n){for(let i=0;i<24;i++)this.debris.spawn({x:t,y:e+2+Math.random()*2,z:n+(Math.random()-.5)*5,vx:(Math.random()-.5)*8,vy:3+Math.random()*5,vz:(Math.random()-.5)*8,life:2.5,t:0,rx:Math.random()*6,ry:Math.random()*6})}update(t,e,n){let i=(c,l)=>{let u=c.items,d=0;for(let f=0;f<u.length;f++){let p=u[f];p.t+=e,p.t<p.life&&(u[d++]=p)}u.length=d;for(let f=0;f<c.n;f++)f<u.length?(l(u[f]),c.mesh.setMatrixAt(f,di)):f<c.lastCount&&c.mesh.setMatrixAt(f,za);c.lastCount=u.length,c.mesh.instanceMatrix.needsUpdate=!0};i(this.sparks,c=>{c.vy-=14*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e;let l=(1-c.t/c.life)*c.s;di.compose(Rs.set(c.x,c.y,c.z),Bi.setFromEuler(fi.set(c.t*9,c.t*7,0)),Cs.set(l,l,l))}),i(this.dust,c=>{c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e,c.vy*=.96;let l=Math.sin(c.t/c.life*Math.PI)*c.s;di.compose(Rs.set(c.x,c.y,c.z),Bi.identity(),Cs.set(l,l,l))}),i(this.debris,c=>{c.vy-=14*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e;let l=n.getHeight(c.x,c.z)+.1;c.y<l?(c.y=l,c.vx*=.5,c.vz*=.5,c.vy=0):c.rx+=e*6,di.compose(Rs.set(c.x,c.y,c.z),Bi.setFromEuler(fi.set(c.rx,c.ry,0)),Cs.set(1,1,1))});let r=this.battleArrows,o=this.arrows,a=0;for(let c of r){let l=(this.simTime-c.t0)/c.dur;if(l<0||l>1||a>=o.n)continue;let u=c.x0+(c.x1-c.x0)*l,d=c.z0+(c.z1-c.z0)*l,f=c.y0+(c.y1-c.y0)*l+Math.sin(l*Math.PI)*c.arc,p=c.x1-c.x0,g=c.z1-c.z0,y=c.y1-c.y0+Math.cos(l*Math.PI)*Math.PI*c.arc,x=Math.hypot(p,g),m=Math.atan2(p,g),M=-Math.atan2(y,x);di.compose(Rs.set(u,f,d),Bi.setFromEuler(Wg.set(M,m,0)),Cs.set(1,1,1)),o.mesh.setMatrixAt(a++,di)}for(let c=a;c<(o.lastCount||0);c++)o.mesh.setMatrixAt(c,za);o.lastCount=a,o.mesh.instanceMatrix.needsUpdate=!0}dispose(){for(let t of[this.sparks,this.dust,this.arrows,this.debris])this.scene.remove(t.mesh),t.mesh.geometry.dispose()}};var Na=class{constructor(){this.ctx=null,this.enabled=!0,this.last={}}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*1.5;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1;this.startAmbience()}catch{this.ctx=null}}setEnabled(t){this.enabled=t,this.master&&(this.master.gain.value=t?.55:0)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}throttle(t,e){let n=performance.now();return this.last[t]&&n-this.last[t]<e?!1:(this.last[t]=n,!0)}noise(t,e,n,i,r="bandpass",o=0){let a=this.ctx,c=a.currentTime+o,l=a.createBufferSource();l.buffer=this.noiseBuf;let u=a.createBiquadFilter();u.type=r,u.frequency.value=e,u.Q.value=n;let d=a.createGain();return d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(i,c+.01),d.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(u),u.connect(d),d.connect(this.master),l.start(c,Math.random()*1,t+.05),u}tone(t,e,n,i,r=0,o=0){let a=this.ctx,c=a.currentTime+r,l=a.createOscillator();l.type=n,l.frequency.setValueAtTime(t,c),o&&l.frequency.exponentialRampToValueAtTime(t*o,c+e);let u=a.createGain();u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(i,c+.02),u.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(u),u.connect(this.master),l.start(c),l.stop(c+e+.05)}play(t,e=1){if(!(!this.ctx||!this.enabled))switch(t){case"click":this.tone(880,.06,"triangle",.08*e);break;case"select":this.tone(520,.07,"triangle",.08*e),this.tone(780,.08,"triangle",.06*e,.05);break;case"place":this.noise(.12,300,1,.25*e,"lowpass");break;case"clash":if(!this.throttle("clash",70))return;this.noise(.09,3200+Math.random()*2e3,8,.18*e),this.tone(1800+Math.random()*900,.14,"square",.015*e);break;case"impact":this.noise(.5,180,.8,.6*e,"lowpass"),this.noise(.25,2500,3,.25*e);break;case"volley":if(!this.throttle("volley",200))return;this.noise(.5,1800,2,.12*e,"bandpass");break;case"arrowhit":if(!this.throttle("ahit",120))return;for(let n=0;n<4;n++)this.noise(.05,900+Math.random()*600,4,.08*e,"bandpass",n*.04+Math.random()*.05);break;case"death":if(!this.throttle("death",160))return;this.noise(.18,260,1.5,.1*e,"lowpass");break;case"gate":if(!this.throttle("gate",250))return;this.noise(.35,140,1,.5*e,"lowpass"),this.tone(70,.3,"sine",.3*e,0,.6);break;case"gatebroken":this.noise(1.4,200,.7,.8*e,"lowpass"),this.noise(.8,900,1,.3*e,"bandpass",.1);break;case"horn":{this.tone(146.8,1.6,"sawtooth",.09*e,0,1),this.tone(146.8*1.5,1.2,"sawtooth",.05*e,.35),this.tone(146.8*2,.9,"sawtooth",.04*e,.9);break}case"retreat":this.tone(330,.3,"sawtooth",.05*e),this.tone(262,.5,"sawtooth",.05*e,.28);break;case"victory":{let n=[392,523,659,784,659,784,1046];n.forEach((i,r)=>this.tone(i,r===n.length-1?1.2:.22,"triangle",.12*e,r*.16)),n.forEach((i,r)=>this.tone(i/2,r===n.length-1?1.2:.22,"sawtooth",.03*e,r*.16));break}case"defeat":{[392,349,311,262].forEach((i,r)=>this.tone(i,.5,"triangle",.1*e,r*.35)),this.tone(131,1.8,"sawtooth",.04*e,.9);break}case"drum":this.tone(90,.25,"sine",.35*e,0,.5),this.noise(.08,400,1,.15*e,"lowpass");break}}startAmbience(){let t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=420;let i=t.createGain();i.gain.value=.035;let r=t.createOscillator();r.frequency.value=.08;let o=t.createGain();o.gain.value=180,r.connect(o),o.connect(n.frequency),e.connect(n),n.connect(i),i.connect(this.master),e.start(),r.start(),this.amb=i}};var hn=(s,t="0 0 48 48")=>`<svg viewBox="${t}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;function Ps(s,t=0){let e=t===0?"#4a8cf0":"#e0473c",n=t===0?"#1f4c9a":"#8e1f1a",i=t===0?"#e3b441":"#cfd3da",r=`<circle cx="24" cy="24" r="22" fill="${n}" opacity=".55"/><circle cx="24" cy="24" r="22" fill="none" stroke="${e}" stroke-width="2"/>`;switch(s){case"legion":return hn(`${r}<rect x="11" y="13" width="15" height="22" rx="3" fill="${e}" stroke="${i}" stroke-width="1.6"/><circle cx="18.5" cy="24" r="2.4" fill="${i}"/>
        <path d="M28 33 L37 12 L39 13 L31 34 Z" fill="#e8edf5"/><path d="M26.5 31 L33.5 34.5" stroke="${i}" stroke-width="2.6" stroke-linecap="round"/>`);case"pike":return hn(`${r}<path d="M13 38 L35 9" stroke="#caa06a" stroke-width="2.4" stroke-linecap="round"/><path d="M35 9 L38 5 L37.5 11.5 Z" fill="#e8edf5"/>
        <path d="M20 38 L38 15" stroke="#caa06a" stroke-width="2.4" stroke-linecap="round"/><path d="M38 15 L41 11 L40.5 17.5 Z" fill="#e8edf5"/>
        <circle cx="16" cy="28" r="6" fill="${e}" stroke="${i}" stroke-width="1.6"/>`);case"archer":return hn(`${r}<path d="M16 9 Q34 24 16 39" fill="none" stroke="#caa06a" stroke-width="2.8" stroke-linecap="round"/><path d="M16 9 L16 39" stroke="#f0ead8" stroke-width="1"/>
        <path d="M13 24 L37 24" stroke="#e8edf5" stroke-width="1.8"/><path d="M37 24 L32 21 L32 27 Z" fill="#e8edf5"/><path d="M13 24 L10 21 M13 24 L10 27" stroke="${i}" stroke-width="1.6"/>`);case"cavalry":return hn(`${r}<path d="M14 38 L16 27 Q15 18 22 13 L25 8 L27 13 Q34 14 36 22 L34 25 L29 22 L27 26 Q30 31 28 38 Z" fill="${e}" stroke="${i}" stroke-width="1.6" stroke-linejoin="round"/>
        <circle cx="29" cy="17" r="1.4" fill="${i}"/><path d="M22 13 Q17 19 18 27" stroke="${i}" stroke-width="2" fill="none"/>`);case"guard":return hn(`${r}<rect x="13" y="9" width="22" height="30" rx="3" fill="${e}" stroke="${i}" stroke-width="2"/><path d="M24 11 L24 37 M15 24 L33 24" stroke="${i}" stroke-width="1.8"/>
        <circle cx="24" cy="24" r="3.4" fill="${i}"/>`)}return""}function fu(s){let t='stroke="#f5d27a" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"';switch(s){case"random":return hn(`<rect x="9" y="9" width="30" height="30" rx="6" ${t}/><circle cx="17" cy="17" r="2.4" fill="#f5d27a"/><circle cx="31" cy="31" r="2.4" fill="#f5d27a"/><circle cx="24" cy="24" r="2.4" fill="#f5d27a"/><circle cx="31" cy="17" r="2.4" fill="#f5d27a"/><circle cx="17" cy="31" r="2.4" fill="#f5d27a"/>`);case"assault":return hn(`<path d="M8 40 L8 18 L12 18 L12 14 L16 14 L16 18 L20 18 L20 14 L24 14 L24 18 L28 18 L28 14 L32 14 L32 18 L36 18 L36 14 L40 14 L40 40 Z" ${t}/><path d="M20 40 L20 30 Q24 25 28 30 L28 40" ${t}/><path d="M34 6 L42 12 M42 6 L34 12" stroke="#e0473c" stroke-width="2.4" stroke-linecap="round"/>`);case"defend":return hn(`<path d="M24 6 L39 11 L37 28 Q33 37 24 42 Q15 37 11 28 L9 11 Z" ${t}/><path d="M17 24 L22 29 L31 18" stroke="#4a8cf0" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`);case"canyon":return hn(`<path d="M4 14 L14 14 L18 22 L16 40 L4 40 Z" ${t}/><path d="M44 12 L32 12 L29 22 L32 40 L44 40 Z" ${t}/><path d="M21 40 Q24 30 22 22 Q25 17 27 14" stroke="#caa06a" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`);case"river":return hn(`<path d="M6 16 Q12 12 18 16 T30 16 T42 16" ${t}/><path d="M6 24 Q12 20 18 24 T30 24 T42 24" stroke="#6ab4f0" stroke-width="2" fill="none"/><path d="M6 32 Q12 28 18 32 T30 32 T42 32" ${t}/><path d="M16 38 Q24 30 32 38" stroke="#caa06a" stroke-width="2.4" fill="none"/>`);case"hill":return hn(`<path d="M4 40 Q24 8 44 40 Z" ${t}/><rect x="18" y="18" width="3" height="7" fill="#f5d27a"/><rect x="23" y="16" width="3" height="8" fill="#f5d27a"/><rect x="28" y="18" width="3" height="7" fill="#f5d27a"/>`);case"forest":return hn(`<path d="M14 40 L14 34 M14 34 L6 34 L14 20 L22 34 Z M9 26 L14 14 L19 26" ${t}/><path d="M32 40 L32 32 M32 32 L22 32 L32 12 L42 32 Z M26 22 L32 8 L38 22" ${t}/>`)}return""}var cl={melee:"\u2694",shoot:"\u27B6",retreat:"\u21A9",regroup:"\u26FA",wait:"\u23F3",hold:"\u26E8",move:"\u279C",engage:"\u279C",kite:"\u21B6",breach:"\u2692",idle:"\xB7",dead:"\u271D"},Ds=["I","II","III","IV","V","VI","VII","VIII"];var pt=s=>document.querySelector(s),dr=s=>Array.from(document.querySelectorAll(s)),An={get(s,t){try{let e=localStorage.getItem("legionen."+s);return e?JSON.parse(e):t}catch{return t}},set(s,t){try{localStorage.setItem("legionen."+s,JSON.stringify(t))}catch{}}},pu={high:{shadows:!0,shadowSize:2048,pixelRatio:2,aa:!0},medium:{shadows:!0,shadowSize:1024,pixelRatio:1.5,aa:!0},low:{shadows:!1,shadowSize:512,pixelRatio:1,aa:!1}},We=Object.assign({sound:!0,quality:"high"},An.get("settings",{})),Pe=Object.assign({wins:0,losses:0,streak:0,best:0},An.get("stats",{})),Lt=new wa(pt("#c"),pu[We.quality]||pu.high),Ht=new Na;Ht.setEnabled(We.sound);var R={phase:"loading",cfg:Object.assign({scenario:"random",biome:"random",diff:"normal",army:["legion","legion","archer","cavalry"]},An.get("cfg",{})),cur:null,selected:null,speed:1,paused:!1,mode:null,tab:"move",slotSel:0,sel:[],last:null};function Xg(s){let t=yn(Math.random()*1e9|0),e=s.scenario==="random"?t.pick(Zc):s.scenario,n=s.biome==="random"?t.pick(Object.keys(En)):s.biome;return{scenario:e,biome:n,diff:s.diff,army:s.army.slice(),seed:Math.random()*1e9|0}}function yu(s){qg(),lu();let t=new Ta(s.scenario,s.biome,s.seed);Lt.setupEnvironment(s.biome,t.fogDensity),Lt.groundFn=(x,m)=>t.terrainHeight(x,m);let e=au(t,Lt.scene),n=yn(s.seed+7),i=Ui[s.diff],r=s.demo?sl(["legion","archer","cavalry","pike"],s.scenario,n):s.army,o=r.map((x,m)=>{let M=new or(0,x,0,0,1);return M.index=m,M}),a=s.botTypes||sl(r,s.scenario,n),c=hu(r,a,s.demo?1:i.size),l=a.map((x,m)=>{let M=new or(1,x,0,0,c);return M.index=m,M}),u=[...o,...l];Pa(o,t.zones[0],0,t,n),Pa(l,t.zones[1],1,t,n),al(l,s.scenario,t,s.diff,n),s.demo&&al(o,s.scenario,t,"normal",n);let d=new Ia(t,u,Ms[s.scenario]);d.soldiersInStep=!1;let f=new cr(d,s.diff,n),p=new Ua(Lt.scene,u,t,Lt.quality.shadows),g=new Sa(Lt.scene,t),y={opts:s,map:t,world:e,legions:u,player:o,bot:l,battle:d,brain:f,units:p,overlays:g,labels:new Map,time:0,dustT:0};return s.demo&&(y.brain0=new cr(d,"normal",n,0)),R.cur=y,Yg(y),g.showZones(!1),y}function qg(){let s=R.cur;s&&(Lt.scene.remove(s.world.group),s.world.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose&&t.material.dispose()}),s.units.dispose(),s.overlays.dispose(),pt("#labels").innerHTML="",R.cur=null,R.selected=null,R.mode=null)}function an(s){return`${Ds[s.index]||s.index+1}. ${s.name}`}function Yg(s){let t=pt("#labels");t.innerHTML="";for(let e of s.legions){let n=document.createElement("div");n.className="lbl"+(e.side===1?" e":""),n.innerHTML=`<div class="plate">${Ps(e.typeId,e.side)}<span class="n">${Ds[e.index]}</span><span class="c">${e.count}</span><span class="s"></span></div><div class="hpb"><i></i></div>`,n.addEventListener("pointerdown",i=>{i.stopPropagation(),Eu(i,e)}),t.appendChild(n),s.labels.set(e,{el:n,c:n.querySelector(".c"),s:n.querySelector(".s"),hp:n.querySelector(".hpb i"),lastC:-1,lastS:""})}if(s.map.gate){let e=document.createElement("div");e.className="gatelbl",e.innerHTML='Burgtor<div class="hpb"><i></i></div>',t.appendChild(e),s.gateLbl={el:e,hp:e.querySelector("i")}}}var Ie={x:0,y:0,visible:!1};function $g(s){let t=R.phase==="deploy"||R.phase==="orders"||R.phase==="battle";for(let e of s.legions){let n=s.labels.get(e);if(!t||!e.alive){n.el.style.display!=="none"&&(n.el.style.display="none");continue}let i=s.map.getHeight(e.x,e.z)+(e.typeId==="cavalry"?5.2:4.4);if(Lt.project(e.x,i,e.z,Ie),!Ie.visible||Ie.x<-60||Ie.y<-60||Ie.x>innerWidth+60||Ie.y>innerHeight+60){n.el.style.display="none";continue}n.el.style.display="",n.el.style.transform=`translate(${Ie.x.toFixed(1)}px, ${Ie.y.toFixed(1)}px) translate(-50%, -100%)`,n.lastC!==e.count&&(n.c.textContent=e.count,n.hp.style.width=(e.ratio*100).toFixed(0)+"%",n.lastC=e.count);let r=R.phase==="battle"&&cl[e.state]||"";n.lastS!==r&&(n.s.textContent=r,n.lastS=r);let o=ul(e)&&e.side===0||R.selected===e,a=R.selected&&R.selected.side===0&&R.selected.orders.target==="legion"&&R.selected.orders.targetId===e.id;n.el.classList.toggle("sel",o),n.el.classList.toggle("tgt",!!a)}if(s.gateLbl){let e=s.map.gate;t&&e.alive&&R.phase==="battle"&&e.hp<e.maxHp?(Lt.project(e.x,s.map.castle.base+8,e.z,Ie),s.gateLbl.el.style.display=Ie.visible?"":"none",s.gateLbl.el.style.left=Ie.x+"px",s.gateLbl.el.style.top=Ie.y+"px",s.gateLbl.hp.style.width=(e.hp/e.maxHp*100).toFixed(0)+"%"):s.gateLbl.el.style.display="none"}}function ka(s){for(let t of dr(".screen"))t.id!=="dlg"&&t.classList.toggle("show",t.id===s)}function La(){R.phase="menu",R.sel=[],R.paused=!1,pt("#hud").classList.add("hidden"),ka("scr-menu"),pt("#menu-stats").innerHTML=Pe.wins+Pe.losses>0?`Siege <b>${Pe.wins}</b> \xB7 Niederlagen <b>${Pe.losses}</b> \xB7 Beste Serie <b>${Pe.best}</b>`:"Deine erste Schlacht wartet.",_u()}function _u(){let s=yn(Math.random()*1e9|0),t=s.pick(["canyon","river","hill","forest","river","hill"]),e=s.pick(Object.keys(En)),n=yu({scenario:t,biome:e,diff:"normal",army:[],seed:Math.random()*1e9|0,demo:!0});n.battle.begin(),n.battle.events.length=0,R.demo=!0,R.speed=1,Lt.cam.tx=0,Lt.cam.tz=0,Lt.cam.tdist=78,Lt.cam.tpitch=.62,Lt.cam.tyaw=s.range(-.6,.6)}function Zg(){R.phase="setup",ka("scr-setup"),vu()}function vu(){let s=R.cfg,t=pt("#scen-grid");t.innerHTML=["random",...Zc].map(n=>`<div class="scen ${s.scenario===n?"on":""}" data-s="${n}">${fu(n)}<span>${n==="random"?"Zufall":Ms[n].name}</span></div>`).join(""),pt("#scen-desc").textContent=s.scenario==="random"?"Ein zuf\xE4lliges Szenario auf einer zuf\xE4lligen Karte \u2013 lass dich \xFCberraschen.":Ms[s.scenario].desc,pt("#biome-chips").innerHTML=[["random","Zufall"],...Object.entries(En).map(([n,i])=>[n,i.name])].map(([n,i])=>`<button class="chip ${s.biome===n?"on":""}" data-b="${n}">${i}</button>`).join(""),pt("#diff-chips").innerHTML=Object.entries(Ui).map(([n,i])=>`<button class="chip ${s.diff===n?"on":""}" data-d="${n}">${i.name}</button>`).join("");let e=[];for(let n=0;n<5;n++){let i=s.army[n],r=R.slotSel===n?" sel":"";i?e.push(`<div class="slot filled${r}" data-slot="${n}"><span class="num">${Ds[n]}</span>${Ps(i,0)}<span>${xn[i].names[0]}</span><small>${xn[i].size} Mann</small>${s.army.length>1?`<span class="x" data-rm="${n}">\u2715</span>`:""}</div>`):e.push(`<div class="slot${r}" data-slot="${n}"><span class="plus">+</span><span>Legion</span></div>`)}pt("#army-slots").innerHTML=e.join(""),pt("#type-grid").innerHTML=Zh.map(n=>{let i=xn[n],r=Object.entries(i.stats).map(([o,a])=>`<span>${o}</span><div class="bar"><i style="width:${a*20}%"></i></div>`).join("");return`<div class="tcard" data-t="${n}">${Ps(n,0)}<div><b>${i.names[0]} <span style="color:var(--muted);font-weight:400;font-size:11px">\xB7 ${i.size} Mann</span></b><small>${i.desc[0]}</small></div><div class="bars">${r}</div></div>`}).join(""),An.set("cfg",s)}pt("#scr-setup").addEventListener("click",s=>{let t=R.cfg,e=s.target.closest("[data-s]"),n=s.target.closest("[data-b]"),i=s.target.closest("[data-d]"),r=s.target.closest("[data-rm]"),o=s.target.closest("[data-slot]"),a=s.target.closest("[data-t]");if(e)t.scenario=e.dataset.s;else if(n)t.biome=n.dataset.b;else if(i)t.diff=i.dataset.d;else if(r)t.army.splice(+r.dataset.rm,1),R.slotSel=Math.min(t.army.length,4);else if(o)R.slotSel=Math.min(+o.dataset.slot,t.army.length);else if(a){let c=R.slotSel;c<t.army.length?t.army[c]=a.dataset.t:t.army.length<5&&t.army.push(a.dataset.t),R.slotSel=Math.min(t.army.length,4),t.army.length===5&&c===4&&(R.slotSel=4)}else return;Ht.play("click"),vu()});function mu(s){Ht.unlock(),R.demo=!1;let t=Xg(s);R.last=t,hl(t)}function hl(s){R.sel=[];let t=yu(s);R.phase="deploy",R.paused=!1,R.speed=1,ka(null),pt("#hud").classList.remove("hidden"),t.overlays.showZones(!0);let e=t.map.zones[0];Lt.cam.tyaw=0,Lt.cam.tpitch=.95,Lt.focus((e.x0+e.x1)/2*.45,2,100),Cn(),pi(null),Le("Legion ziehen \u2013 oder antippen und Zielort tippen \xB7 gelber Pfeil = drehen"),pt("#feed").innerHTML=""}function Jg(){let s=R.cur;R.phase="orders",s.overlays.showZones(!1),Cn(),pi(s.player[0]),Le("W\xE4hle eine Legion und lege Marschroute, Angriff und R\xFCckzug fest"),Xe()}function Kg(){let s=R.cur;R.phase="battle",R.mode=null,s.battle.begin(),s.overlays.clearRoutes(),Cn(),Le(""),$n(),R.selected=null,R.sel=[],fl("ZUM ANGRIFF!"),setTimeout(()=>{R.phase==="battle"&&!R.sel.length&&Le("Legion antippen \u2192 Boden = marschieren \xB7 Feind = angreifen \xB7 lang dr\xFCcken & ziehen = Rahmen / Ausrichtung")},2400),Ht.play("drum"),setTimeout(()=>Ht.play("drum"),350)}function Cn(){let s=R.cur,t=R.phase,e=Ms[s.opts.scenario];pt("#hud-phase").textContent=t==="deploy"?`Aufstellung \xB7 ${e.name}`:t==="orders"?`Befehle \xB7 ${e.name}`:e.name,pt("#hud-goal").textContent=e.goal+` (${En[s.opts.biome].name})`,pt("#hud-battle").style.visibility=t==="battle"?"visible":"hidden",pt("#speed-ctl").style.display=t==="battle"?"":"none",pt("#hud-time").style.display=t==="battle"?"":"none",pt("#pause-banner").classList.toggle("show",t==="battle"&&R.paused),pt("#btn-pause").classList.toggle("on",R.paused);for(let n of dr("[data-speed]"))n.classList.toggle("on",+n.dataset.speed===R.speed);pt("#btn-sound").textContent=We.sound?"\u{1F50A}":"\u{1F507}",jg(),In()}function In(){let s=pt("#actions");if(R.mode==="waypoints"){s.innerHTML='<button class="btn" data-a="wp-clear">Zur\xFCcksetzen</button><button class="btn primary" data-a="wp-done">\u2713 Route fertig</button>';return}if(R.mode==="pickTarget"){s.innerHTML='<button class="btn" data-a="mode-cancel">Abbrechen</button>';return}switch(R.phase){case"deploy":{let t=R.selected&&R.selected.side===0?R.selected:null,e=t?{line:"Linie",block:"Block",wedge:"Keil"}[t.orders.formation]:"Formation";s.innerHTML=`<button class="btn" data-a="auto">Auto</button><button class="btn icon" data-a="rotL" ${t?"":"disabled"} aria-label="Links drehen">\u27F2</button><button class="btn icon" data-a="rotR" ${t?"":"disabled"} aria-label="Rechts drehen">\u27F3</button><button class="btn" data-a="form" ${t?"":"disabled"}>\u25A6 ${e}</button><button class="btn primary" data-a="to-orders">Befehle \u25B6</button>`}break;case"orders":s.innerHTML='<button class="btn" data-a="to-deploy">\u25C0 Aufstellung</button><button class="btn primary" data-a="fight">\u2694 Schlacht beginnen</button>';break;case"battle":R.sel.length?s.innerHTML='<button class="btn" data-a="cmd-halt">\u270B Halt</button><button class="btn" data-a="cmd-retreat">\u21A9 R\xFCckzug</button>'+(pt("#orders").classList.contains("show")?"":'<button class="btn" data-a="open-orders">\u2630 Befehle</button>')+'<button class="btn icon" data-a="cmd-clear" aria-label="Auswahl aufheben">\u2715</button>':s.innerHTML='<button class="btn" data-a="sel-all">\u25A3 Alle w\xE4hlen</button>';break;default:s.innerHTML=""}}pt("#actions").addEventListener("click",s=>{let t=s.target.closest("[data-a]");if(!t)return;let e=R.cur;switch(Ht.play("click"),t.dataset.a){case"auto":{for(let n of e.player)n.placed=!1;Pa(e.player,e.map.zones[0],0,e.map,yn(Date.now()|0)),ke("Legionen automatisch aufgestellt");break}case"rotL":case"rotR":R.selected&&(R.selected.face+=(t.dataset.a==="rotL"?1:-1)*Math.PI/6,R.selected.formDirty=!0);break;case"form":if(R.selected){let n=["line","block","wedge"],i=R.selected;i.orders.formation=n[(n.indexOf(i.orders.formation)+1)%3],i.formDirty=!0,ke(`${an(i)}: Formation ${{line:"Linie",block:"Block",wedge:"Keil"}[i.orders.formation]}`),In()}break;case"to-orders":Jg();break;case"to-deploy":$n(),e.overlays.clearRoutes(),R.phase="deploy",e.overlays.showZones(!0),Cn(),Le("Legion ziehen \u2013 oder antippen und Zielort tippen \xB7 gelber Pfeil = drehen");break;case"fight":Kg();break;case"wp-clear":R.selected&&(R.selected.orders.waypoints=[],Xe());break;case"wp-done":Su();break;case"mode-cancel":R.mode=null,Le(""),R.selected&&(R.selected.orders.target==="legion"&&R.selected.orders.targetId<0&&(R.selected.orders.target="nearest"),Vi(R.selected)),In();break;case"open-orders":R.selected&&Vi(R.selected);break;case"cmd-halt":e.battle.commandHalt(R.sel),ke("Halt! Stellung halten"),Xe();break;case"cmd-retreat":e.battle.commandRetreat(R.sel),ke("R\xFCckzug!"),Xe();break;case"cmd-clear":Rn([]);break;case"sel-all":Rn(e.player.filter(n=>n.alive));break}});function jg(){let s=R.cur,t=pt("#roster");t.innerHTML=s.player.map((e,n)=>`<div class="lchip" data-l="${n}">${Ps(e.typeId,0)}<div class="t"><b>${Ds[e.index]}. ${e.name}</b><span class="cnt">${e.count}/${e.maxCount}</span></div><span class="st"></span><div class="hp"><i style="width:${e.ratio*100}%"></i></div></div>`).join(""),R.rosterEls=dr("#roster .lchip").map(e=>({el:e,cnt:e.querySelector(".cnt"),st:e.querySelector(".st"),hp:e.querySelector(".hp i")})),ur()}function ur(){let s=R.cur;!s||!R.rosterEls||s.player.forEach((t,e)=>{let n=R.rosterEls[e];if(!n)return;n.el.classList.toggle("sel",ul(t)),n.el.classList.toggle("dead",!t.alive),n.cnt.textContent=`${t.count}/${t.maxCount}`,n.hp.style.width=(t.ratio*100).toFixed(0)+"%";let i=R.phase==="battle"?cl[t.state]||"":t.orders.delay?"\u23F3":"";n.st.textContent=i,n.st.style.display=i?"":"none"})}pt("#roster").addEventListener("click",s=>{let t=s.target.closest("[data-l]");if(!t)return;let e=R.cur.player[+t.dataset.l];if(e.alive){if(R.rosterLong){R.rosterLong=!1;return}Ht.play("select"),R.selected===e&&Lt.focus(e.x,e.z,Math.min(Lt.cam.tdist,60)),pi(e,!0)}});pt("#roster").addEventListener("pointerdown",s=>{let t=s.target.closest("[data-l]");!t||R.phase!=="battle"||(clearTimeout(R.rosterT),R.rosterT=setTimeout(()=>{let e=R.cur.player[+t.dataset.l];!e||!e.alive||(R.rosterLong=!0,Rn(R.sel.includes(e)?R.sel.filter(n=>n!==e):[...R.sel,e]),navigator.vibrate&&navigator.vibrate(12),Ht.play("select"))},420))});for(let s of["pointerup","pointercancel","pointerleave"])pt("#roster").addEventListener(s,()=>clearTimeout(R.rosterT));function Rn(s,t=!1){R.sel=s.filter(e=>e&&e.alive&&e.side===0),R.selected=R.sel[0]||null,(!R.sel.length||pt("#orders").classList.contains("show")&&!R.sel.includes(R.selected))&&$n(),pt("#orders").classList.contains("show")&&R.selected&&Vi(R.selected),t&&R.selected&&Lt.focus(R.selected.x,R.selected.z),R.sel.length?Le(R.sel.length===1?`${an(R.selected)} \xB7 Boden tippen = marschieren \xB7 Feind tippen = angreifen`:`${R.sel.length} Legionen gew\xE4hlt \xB7 Boden tippen = in Formation marschieren`):Le(""),ur(),In(),Xe()}var ul=s=>R.sel.includes(s)||R.selected===s;function Mu(s,t,e=null){let n=R.cur,i=n.battle.commandMove(R.sel,s,t,e);n.overlays.pingMove(s,t,i),Ht.play("place"),Ht.play("select",.6),Xe()}function pi(s,t=!1){if(R.phase==="battle"&&s&&s.side===0){Rn([s],t);return}if(R.selected=s,s&&s.side===0&&(R.phase==="orders"||R.phase==="battle")?Vi(s):$n(),s&&s.side===1){let e=xn[s.typeId];ke(`Feind: ${an(s)} \xB7 ${s.count} Mann`)}t&&s&&R.phase==="battle"&&Lt.focus(s.x,s.z),ur(),In(),R.phase==="orders"&&Xe()}var bu={move:[{key:"move",label:"Marschroute",opts:[["advance","Vorr\xFCcken"],["hold","Halten"],["flankL","\u21B0 Flanke links"],["flankR","Flanke rechts \u21B1"],["path","\u270E Eigene Route"]],help:{advance:"R\xFCckt direkt auf das gew\xE4hlte Ziel vor.",hold:"H\xE4lt die Stellung und greift nur Feinde in der N\xE4he an.",flankL:"Weiter Bogen links herum \u2013 Angriff in Flanke oder R\xFCcken (+30 % / +60 %).",flankR:"Weiter Bogen rechts herum \u2013 Angriff in Flanke oder R\xFCcken (+30 % / +60 %).",path:"Tippe bis zu 4 Wegpunkte auf die Karte. Danach wird das Ziel angegriffen."}},{key:"formation",label:"Formation",opts:[["line","Linie"],["block","Block"],["wedge","Keil"]],help:{line:"Breite Front \u2013 ausgewogen, viele K\xE4mpfer im Kontakt.",block:"Kompakt: +15 % Verteidigung, weniger Pfeilschaden, etwas langsamer.",wedge:"Keil: +10 % Angriff, st\xE4rkerer Sturmangriff, aber verwundbarer."}},{key:"delay",label:"Startsignal",opts:[[0,"Sofort"],[5,"+5 s"],[10,"+10 s"],[20,"+20 s"]],help:{0:"Marschiert beim Hornsignal los.",5:"Wartet 5 Sekunden \u2013 gut f\xFCr gestaffelte Angriffe.",10:"Wartet 10 Sekunden \u2013 z. B. bis die Front gebunden ist.",20:"Wartet 20 Sekunden \u2013 ideal als Reserve oder Hinterhalt."}}],attack:[{key:"target",label:"Angriffsziel",opts:[["nearest","N\xE4chster"],["weakest","Schw\xE4chster"],["strongest","St\xE4rkster"],["ranged","Fernk\xE4mpfer"],["legion","\u25CE Legion w\xE4hlen"],["objective","Zielgebiet"]],help:{nearest:"Greift den n\xE4chstgelegenen Feind an.",weakest:"Sucht angeschlagene Legionen, um sie zu vernichten.",strongest:"Bindet die st\xE4rkste feindliche Legion.",ranged:"Jagt Bogensch\xFCtzen \u2013 ideal f\xFCr Reiterei.",legion:"Tippe auf eine feindliche Legion als festes Ziel.",objective:"Zieht zum Missionsziel und h\xE4lt es."}},{key:"stance",label:"Haltung",opts:[["aggressive","Aggressiv"],["balanced","Ausgewogen"],["defensive","Defensiv"]],help:{aggressive:"+15 % Angriff, \u221210 % Verteidigung, verfolgt Feinde weit.",balanced:"Ausgewogenes Verhalten.",defensive:"+20 % Verteidigung, \u221210 % Angriff, bleibt eher in Position."}},{key:"skirmish",label:"Ausweichen (Sch\xFCtzen)",only:"archer",opts:[[!0,"An"],[!1,"Aus"]],help:{true:"Weicht anr\xFCckender Infanterie aus und schie\xDFt weiter.",false:"Bleibt stehen und schie\xDFt, bis der Feind da ist."}}],retreat:[{key:"retreatAt",label:"R\xFCckzug bei St\xE4rke",opts:[[0,"Nie"],[.25,"unter 25 %"],[.5,"unter 50 %"]],help:{0:"K\xE4mpft bis zum letzten Mann.",.25:"Zieht sich bei schweren Verlusten zur\xFCck.",.5:"Zieht sich fr\xFCh zur\xFCck, um die Legion zu retten."}},{key:"retreatTo",label:"R\xFCckzug nach",opts:[["camp","Ins Lager"],["ally","Zu Verb\xFCndeten"]],help:{camp:"Flieht zum eigenen Lager (bei Burgen: zum Burghof).",ally:"Zieht sich hinter die n\xE4chste eigene Legion zur\xFCck."}},{key:"afterRetreat",label:"Nach dem Sammeln",opts:[["hold","Stellung halten"],["return","Erneut angreifen"]],help:{hold:"Sammelt sich und verteidigt die Position.",return:"Sammelt sich und kehrt in den Kampf zur\xFCck."}}]};function Vi(s){let t=R.cur;pt("#orders").classList.add("show"),document.body.classList.add("orders-open"),pt("#oh-icon").innerHTML=Ps(s.typeId,0),pt("#oh-name").textContent=an(s);let e=xn[s.typeId];pt("#oh-sub").textContent=`${s.count}/${s.maxCount} Mann \xB7 ${e.desc[0]}`;for(let n of dr("#tabs button"))n.classList.toggle("on",n.dataset.tab===R.tab);wu(s),In()}function $n(){pt("#orders").classList.remove("show"),document.body.classList.remove("orders-open"),In()}function wu(s){let t=R.cur,e=t.map.objective,n=s.orders,i=bu[R.tab].filter(r=>!r.only||r.only===s.typeId);pt("#tab-body").innerHTML=i.map(r=>{let o=r.opts;r.key==="target"&&(o=o.filter(([u])=>u!=="objective"||e).map(([u,d])=>[u,u==="objective"?e.type==="keep"?"\u{1F3F0} Burghof":"\u26F0 Steinkreis":d]));let a=n[r.key],c=o.map(([u,d])=>`<button class="chip ${String(a)===String(u)?"on":""}" data-k="${r.key}" data-v="${u}">${d}</button>`).join(""),l="";if(r.key==="target"&&a==="legion"){let u=t.legions.find(d=>d.id===n.targetId&&d.alive);l=u?` Ziel: <b>${an(u)}</b>`:" Noch kein Ziel gew\xE4hlt."}return r.key==="move"&&a==="path"&&(l=` ${n.waypoints.length}/4 Wegpunkte gesetzt.`),`<div class="og"><label>${r.label}</label><div class="chips">${c}</div><p>${r.help[String(a)]||""}${l}</p></div>`}).join("")}pt("#tabs").addEventListener("click",s=>{let t=s.target.closest("[data-tab]");!t||!R.selected||(R.tab=t.dataset.tab,Ht.play("click"),Vi(R.selected))});pt("#oh-close").addEventListener("click",()=>{$n(),Ht.play("click")});pt("#tab-body").addEventListener("click",s=>{let t=s.target.closest("[data-k]"),e=R.selected;if(!t||!e)return;let n=t.dataset.k,i=t.dataset.v;(n==="delay"||n==="retreatAt")&&(i=+i),n==="skirmish"&&(i=i==="true"),e.orders[n]=i,Ht.play("click"),n==="move"&&i==="path"?(e.orders.waypoints=[],R.mode="waypoints",Le("Tippe bis zu 4 Wegpunkte auf die Karte"),$n()):n==="target"&&i==="legion"?(R.mode="pickTarget",Le("Tippe auf eine feindliche (rote) Legion"),$n()):R.mode&&(R.mode=null,Le("")),n==="formation"&&(e.formDirty=!0),R.phase==="battle"&&R.mode!=="waypoints"&&(R.cur.battle.clearCommand(e),R.cur.battle.applyOrders(e)),wu(e),In(),Xe()});pt("#btn-copy").addEventListener("click",()=>{let s=R.selected;if(!s)return;let t=bu[R.tab].map(e=>e.key).filter(e=>e!=="move"&&e!=="target"&&e!=="skirmish");R.tab==="attack"&&t.push("target");for(let e of R.cur.player)if(!(e===s||!e.alive)){for(let n of t){if(n==="target"&&s.orders.target==="legion"){e.orders.target="legion",e.orders.targetId=s.orders.targetId;continue}e.orders[n]=s.orders[n]}R.tab==="move"&&(e.orders.formation=e.typeId==="cavalry"&&s.orders.formation==="line"?"wedge":s.orders.formation,e.formDirty=!0),R.phase==="battle"&&R.cur.battle.applyOrders(e)}Ht.play("select"),ke("Einstellungen f\xFCr alle Legionen \xFCbernommen"),Xe()});function Su(){let s=R.selected;R.mode=null,Le(""),s&&!s.orders.waypoints.length&&(s.orders.move="advance",ke("Keine Wegpunkte \u2013 Legion r\xFCckt direkt vor")),s&&R.phase==="battle"&&R.cur.battle.applyOrders(s),s&&Vi(s),In(),Xe()}function Xe(){let s=R.cur;if(!s)return;let t=s.overlays;if(t.clearRoutes(),R.phase!=="orders"&&!(R.phase==="battle"&&R.selected))return;let e=R.phase==="orders"?s.player:R.sel.length?R.sel:[R.selected];for(let n of e){if(!n.alive||n.side!==0)continue;let i=ul(n);if(R.phase==="orders"){let{pts:r,target:o}=s.battle.previewRoute(n);r.length>1&&t.addRoute(r,i?16765802:6988543,!i,i?.8:.55),i&&o&&t.addMarker(o.x,o.z,16734794,Math.max(o.halfW,o.halfD)+1.6),n.orders.move==="hold"&&i&&t.addMarker(n.x,n.z,6988543,s.battle.aggroRadius(n))}else{let r=[[n.x,n.z],...n.path];if(n.wp)for(let a=n.wpIdx;a<n.wp.length;a++)r.push(n.wp[a]);r.length>1&&t.addRoute(r,16765802,!1,.7);let o=n.melee||n.target;o&&o.alive&&t.addMarker(o.x,o.z,16734794,Math.max(o.halfW,o.halfD)+1.6)}i&&n.orders.move==="path"&&n.orders.waypoints.forEach((r,o)=>t.addFlag(r[0],r[1],16765802))}}var _n=new Map,st=null,dl=pt("#c");function Yn(s,t){let e=R.cur;return e?Lt.pick(s,t,e.world.water?[e.world.terrain,e.world.water]:[e.world.terrain]):null}function Qg(s,t,e=0){let n=R.cur,i=Yn(s,t);if(!i)return null;let r=null,o=1e9;for(let a of n.legions){if(!a.alive)continue;let c=Math.hypot(a.x-i.x,a.z-i.z),l=Math.max(a.halfW,a.halfD)+2.5+(a.side===0?e:0);c<l&&c<o&&(o=c,r=a)}return r}function Eu(s,t=null){if(Ht.unlock(),Lt.stopFling(),!(R.phase==="menu"||R.phase==="setup"||R.phase==="result"||R.phase==="loading")){if(_n.set(s.pointerId,{x:s.clientX,y:s.clientY}),_n.size===1){let e=t,n=!1,i=Yn(s.clientX,s.clientY);if(R.phase==="deploy"&&R.selected&&R.selected.side===0&&i){let r=R.selected,o=i.x-r.x,a=i.z-r.z,c=o*r.fwdX+a*r.fwdZ,l=o*r.fwdZ-a*r.fwdX,u=Math.abs(c)<r.halfD+.8&&Math.abs(l)<r.halfW+.8,d=r.x+r.fwdX*(r.halfD+3.2),f=r.z+r.fwdZ*(r.halfD+3.2);!u&&Math.hypot(i.x-d,i.z-f)<3.4?(e=r,n=!0):u&&!e&&(e=r)}e||(e=Qg(s.clientX,s.clientY,R.phase==="deploy"?1.5:0)),clearTimeout(R.lpT),R.phase==="battle"&&!(e&&e.side===0)&&(R.lpT=setTimeout(()=>{if(!(!st||st.type!=="tap"))if(navigator.vibrate&&navigator.vibrate(12),R.sel.length)st.type="facing",st.fp=Yn(st.sx,st.sy),Le("Ziehen = Blickrichtung am Ziel festlegen");else{st.type="box";let r=pt("#selbox");r.style.display="block",Au(st.sx,st.sy)}},330)),st={type:"tap",vx:0,vy:0,sx:s.clientX,sy:s.clientY,lx:s.clientX,ly:s.clientY,t:performance.now(),legion:e,button:s.button,turn:n,g0:i}}else if(_n.size===2){let[e,n]=[..._n.values()];st={type:"pinch",d:Math.hypot(e.x-n.x,e.y-n.y),ang:Math.atan2(n.y-e.y,n.x-e.x),mx:(e.x+n.x)/2,my:(e.y+n.y)/2}}}}dl.addEventListener("pointerdown",s=>Eu(s));window.addEventListener("pointermove",s=>{let t=_n.get(s.pointerId);if(!t||!st)return;if(t.x=s.clientX,t.y=s.clientY,st.type==="pinch"&&_n.size>=2){let[r,o]=[..._n.values()],a=Math.hypot(r.x-o.x,r.y-o.y),c=Math.atan2(o.y-r.y,o.x-r.x),l=(r.x+o.x)/2,u=(r.y+o.y)/2;a>10&&Lt.zoom(st.d/a);let d=c-st.ang;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),Lt.rotate(-d);let f=l-st.mx,p=u-st.my;Math.abs(a-st.d)<4&&Math.abs(p)>Math.abs(f)*1.5?Lt.tilt(p*.004):Lt.pan(f,p),st.d=a,st.ang=c,st.mx=l,st.my=u;return}let e=s.clientX-st.lx,n=s.clientY-st.ly;st.lx=s.clientX,st.ly=s.clientY;let i=Math.hypot(s.clientX-st.sx,s.clientY-st.sy);if(st.type==="box"){Au(s.clientX,s.clientY);return}if(st.type==="facing"){ex(s.clientX,s.clientY);return}if(st.type==="tap"&&i>9){clearTimeout(R.lpT);let r=st.legion;R.phase==="deploy"&&r&&r.side===0&&st.button!==2?(st.type=st.turn?"turn":"drag",st.off=st.g0?[r.x-st.g0.x,r.z-st.g0.z]:[0,0],R.selected!==r&&pi(r)):st.type=st.button===2?"rotate":"pan"}if(st.type==="pan"){Lt.pan(e,n);let r=performance.now(),o=Math.max(8,r-(st.lt||r-16));st.lt=r,st.vx=st.vx*.5+e/o*1e3*.5,st.vy=st.vy*.5+n/o*1e3*.5}else st.type==="rotate"?(Lt.rotate(-e*.006),Lt.tilt(n*.004)):st.type==="drag"?(rx(s.clientX,s.clientY),ix(st.legion,s.clientX,s.clientY,st.off)):st.type==="turn"&&sx(st.legion,s.clientX,s.clientY)});var Tu=s=>{_n.has(s.pointerId)&&(_n.delete(s.pointerId),clearTimeout(R.lpT),st&&(st.type==="box"&&tx(s.clientX,s.clientY),st.type==="facing"&&nx(s.clientX,s.clientY),st.type==="tap"&&_n.size===0&&performance.now()-st.t<450&&ax(s.clientX,s.clientY,st.legion),st.type==="drag"&&(Cu(st.legion),Ht.play("place")),st.type==="pan"&&performance.now()-(st.lt||0)<80&&Lt.fling(st.vx,st.vy),_n.size===0?st=null:st.type==="pinch"&&(st={type:"none"})))};window.addEventListener("pointerup",Tu);window.addEventListener("pointercancel",Tu);dl.addEventListener("contextmenu",s=>s.preventDefault());dl.addEventListener("wheel",s=>{s.preventDefault(),Lt.zoom(s.deltaY>0?1.1:.9)},{passive:!1});window.addEventListener("keydown",s=>{if(!R.cur)return;let t=s.key;(t==="ArrowLeft"||t==="a")&&Lt.pan(40,0),(t==="ArrowRight"||t==="d")&&Lt.pan(-40,0),(t==="ArrowUp"||t==="w")&&Lt.pan(0,40),(t==="ArrowDown"||t==="s")&&Lt.pan(0,-40),t==="q"&&Lt.rotate(.15),t==="e"&&Lt.rotate(-.15),t===" "&&R.phase==="battle"&&Uu()});function Au(s,t){let e=pt("#selbox"),n=Math.min(st.sx,s),i=Math.min(st.sy,t);e.style.left=n+"px",e.style.top=i+"px",e.style.width=Math.abs(s-st.sx)+"px",e.style.height=Math.abs(t-st.sy)+"px"}function tx(s,t){pt("#selbox").style.display="none";let e=R.cur,n=Math.min(st.sx,s)-14,i=Math.max(st.sx,s)+14,r=Math.min(st.sy,t)-14,o=Math.max(st.sy,t)+14,a=e.player.filter(c=>c.alive?(Lt.project(c.x,e.map.getHeight(c.x,c.z)+1,c.z,Ie),Ie.visible&&Ie.x>=n&&Ie.x<=i&&Ie.y>=r&&Ie.y<=o):!1);Rn(a),a.length&&Ht.play("select")}function ex(s,t){let e=Yn(s,t);if(!e||!st.fp)return;let n=e.x-st.fp.x,i=e.z-st.fp.z;st.face=Math.hypot(n,i)>2?Math.atan2(n,i):null,R.cur.overlays.showGhosts(R.cur.battle.planMove(R.sel,st.fp.x,st.fp.z,st.face))}function nx(){var s;R.cur.overlays.clearGhosts(),st.fp&&Mu(st.fp.x,st.fp.z,(s=st.face)!=null?s:null),Rn(R.sel)}function Ru(s,t){let e=R.cur,n=e.map.zones[0],i=(a,c)=>e.map.isPassable(a,c,0)&&e.map.clearanceAt(a,c)>=2.5,r=a=>Math.max(n.x0+3,Math.min(n.x1-3,a)),o=a=>Math.max(n.z0+3,Math.min(n.z1-3,a));if(s=r(s),t=o(t),i(s,t))return[s,t];for(let a=1;a<=12;a+=1)for(let c=0;c<16;c++){let l=r(s+Math.cos(c*Math.PI/8)*a),u=o(t+Math.sin(c*Math.PI/8)*a);if(i(l,u))return[l,u]}return null}function ix(s,t,e,n=[0,0]){let i=Yn(t,e);if(!i)return;let r=Ru(i.x+n[0],i.z+n[1]);r&&(s.x=r[0],s.z=r[1])}function sx(s,t,e){let n=Yn(t,e);if(!n)return;let i=n.x-s.x,r=n.z-s.z;Math.hypot(i,r)<1.5||(s.face=Math.atan2(i,r),s.formDirty=!0)}function Cu(s){let t=R.cur;if(!t.player.filter(o=>o!==s&&o.alive).some(o=>Math.hypot(o.x-s.x,o.z-s.z)<(Math.max(o.halfW,o.halfD)+Math.max(s.halfW,s.halfD))*.75))return;for(let o of t.player)o.placed=!0;let[i,r]=rl(t.map,t.map.zones[0],s.x,s.z,s,0,t.player);s.x=i,s.z=r}function rx(s,t){let i=0,r=0;s<48?i=9:s>innerWidth-48&&(i=-9),t<88?r=9:t>innerHeight-48-50&&(r=-9),(i||r)&&Lt.pan(i,r)}function ax(s,t,e){let n=R.cur;if(n){if(R.mode==="waypoints"){let i=R.selected,r=Yn(s,t);if(!i||!r)return;if(!n.map.isPassable(r.x,r.z,0)){ke("Dort ist kein Durchkommen");return}i.orders.waypoints.push([r.x,r.z]),Ht.play("place"),Xe(),Le(`Wegpunkt ${i.orders.waypoints.length}/4 gesetzt \u2013 weitere tippen oder \u201ERoute fertig\u201C`),i.orders.waypoints.length>=4&&Su();return}if(R.mode==="pickTarget"){let i=R.selected;e&&e.side===1&&i?(i.orders.target="legion",i.orders.targetId=e.id,R.mode=null,Le(""),Ht.play("select"),ke(`Ziel: ${an(e)}`),R.phase==="battle"&&n.battle.applyOrders(i),Vi(i),Xe()):ke("Tippe auf eine feindliche (rote) Legion");return}if(R.phase==="battle"){let i=performance.now();if(e&&e.side===0){R.lastTap&&R.lastTap.L===e&&i-R.lastTap.t<380?(Rn(n.player.filter(r=>r.alive&&r.typeId===e.typeId)),ke(`Alle ${e.name} gew\xE4hlt`)):R.sel.length===1&&R.sel[0]===e?Rn([]):Rn([e]),R.lastTap={L:e,t:i},Ht.play("select");return}if(e&&e.side===1){R.sel.length?(n.battle.commandAttack(R.sel,e),n.overlays.pingAttack(e),Ht.play("clash",.7),ke(`Angriff auf ${an(e)}!`),Xe()):ke(`Feind: ${an(e)} \xB7 ${e.count} Mann`);return}if(R.sel.length){let r=Yn(s,t);r&&Mu(r.x,r.z)}return}if(e){Ht.play("select"),pi(e);return}if(R.phase==="deploy"&&R.selected&&R.selected.side===0){let i=Yn(s,t),r=n.map.zones[0];if(i&&i.x>r.x0&&i.x<r.x1&&i.z>r.z0&&i.z<r.z1){let o=Ru(i.x,i.z);if(o){R.selected.x=o[0],R.selected.z=o[1],Cu(R.selected),Ht.play("place");return}}i&&ke("Aufstellen nur in der blauen Zone"),pi(null);return}R.selected&&(pi(null),R.phase==="orders"&&Xe())}}function Iu(s){return s=Math.max(0,Math.ceil(s)),`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}function ox(){let s=R.cur;if(!s||R.phase!=="battle"){ur();return}let t=s.battle,e=t.strength(0),n=t.strength(1);pt("#str0").textContent=e,pt("#str1").textContent=n;let i=Math.max(1,e+n);pt("#sbar0").style.width=e/i*100+"%",pt("#sbar1").style.width=n/i*100+"%",pt("#hud-time").textContent=Iu(t.timeLimit-t.time);let r=s.map.objective,o=pt("#hud-obj");if(r)if(o.classList.add("show"),r.type==="keep"){let a=1-r.owner,c=a===0?"#6aa2ff":"#ff6a5a";o.innerHTML=`\u{1F3F0} Burghof ${a===0?"einnehmen":"verteidigen"} <span class="pbar"><i style="width:${r.hold/r.need*100}%;background:${c}"></i></span> ${Math.floor(r.hold)}/${r.need} s`}else o.innerHTML=`\u26F0 <b style="color:#8fb8ff">${Math.floor(r.score[0])}</b> <span class="pbar"><i style="width:${r.score[0]}%;background:#6aa2ff"></i></span><span class="pbar"><i style="width:${r.score[1]}%;background:#ff6a5a;margin-left:auto"></i></span> <b style="color:#ff8f86">${Math.floor(r.score[1])}</b> / 100`;else o.classList.remove("show");if(ur(),R.selected&&pt("#orders").classList.contains("show")){let a=R.selected;pt("#oh-sub").textContent=a.alive?`${a.count}/${a.maxCount} Mann \xB7 ${cx(a)}`:"Vernichtet"}}function cx(s){return{melee:"im Nahkampf",shoot:"schie\xDFt",retreat:"zieht sich zur\xFCck",regroup:"sammelt sich",wait:"wartet auf Signal",hold:"h\xE4lt Stellung",move:"marschiert",engage:"r\xFCckt vor",kite:"weicht aus",breach:"berennt das Tor",idle:"bereit",dead:"vernichtet"}[s.state]||s.state}function zs(s,t=-1){let e=pt("#feed"),n=document.createElement("div");for(n.className=t>=0?"p"+t:"",n.textContent=s,e.appendChild(n);e.children.length>5;)e.removeChild(e.firstChild);setTimeout(()=>n.remove(),6e3)}var gu=0;function ke(s){let t=pt("#toast");t.textContent=s,t.classList.add("show"),clearTimeout(gu),gu=setTimeout(()=>t.classList.remove("show"),1900)}function Le(s){pt("#hint").textContent=s}function fl(s){let t=document.createElement("div");t.className="big-banner",t.textContent=s,document.body.appendChild(t),setTimeout(()=>t.remove(),2300)}function lx(s){let t=s.battle,e=s.units.fx,n=R.demo,i=Lt.cam,r=(o,a)=>Math.max(.05,1-Math.hypot(o-i.x,a-i.z)/110)*(n?.35:1)*Math.max(.35,1-i.dist/220);for(let o of t.events){let a=o.x!==void 0?s.map.getHeight(o.x,o.z):0;switch(o.type){case"clash":e.burst(o.x,a+1.3,o.z,o.soft?4:8),Ht.play("clash",r(o.x,o.z));break;case"impact":e.burst(o.x,a+1.3,o.z,20,!0),e.puff(o.x,a,o.z,8,1.4),Ht.play("impact",r(o.x,o.z)),!n&&o.broken&&zs("Die Piken brechen den Reiterangriff!");break;case"volley":Ht.play("volley",r(o.x,o.z));break;case"arrowhit":Ht.play("arrowhit",r(o.x,o.z)),e.puff(o.x,a,o.z,2,.6);break;case"death":Ht.play("death",r(o.x,o.z)*.8);break;case"gatehit":e.puff(o.x,a+1,o.z,3,1),e.burst(o.x,a+2.5,o.z,4),Ht.play("gate",r(o.x,o.z));break;case"gatebroken":e.splinters(o.x,s.map.castle.base,o.z),e.puff(o.x,a,o.z,14,2.2),Ht.play("gatebroken",r(o.x,o.z)+.3),n||(zs("Das Burgtor ist gefallen!"),fl("DAS TOR F\xC4LLT"));break;case"breach":!n&&!o.legion.breachAnnounced&&(o.legion.breachAnnounced=!0,zs(`${an(o.legion)} berennt das Tor`,o.legion.side));break;case"retreat":n||(zs(`${an(o.legion)} zieht sich zur\xFCck`,o.side),Ht.play("retreat",.8));break;case"rally":n||zs(`${an(o.legion)} hat sich gesammelt`,o.legion.side);break;case"legionlost":n||zs(`${an(o.legion)} wurde vernichtet`,o.side),R.phase==="battle"&&R.sel.includes(o.legion)?Rn(R.sel.filter(c=>c.alive)):R.selected===o.legion&&pi(null);break;case"horn":Ht.play("horn",n?.3:1);break}}if(t.events.length=0,s.dustT-=1/60,s.dustT<=0){s.dustT=.12;for(let o of s.legions){if(!o.alive)continue;let a=o.typeId==="cavalry"&&o.speedCur>2.5;if(a||o.state==="melee"&&Math.random()<.3){let c=o.soldiers[Math.random()*o.soldiers.length|0];c&&c.alive&&s.map.biome!=="winter"&&e.puff(c.x,c.y,c.z,1,a?.9:.6)}}}}function hx(){let s=R.cur,t=s.battle,e=t.winner===0;R.phase="result",$n(),e?(Pe.wins++,Pe.streak++,Pe.best=Math.max(Pe.best,Pe.streak)):(Pe.losses++,Pe.streak=0),An.set("stats",Pe),Ht.play(e?"victory":"defeat"),fl(e?"SIEG":"NIEDERLAGE"),setTimeout(()=>{if(R.cur!==s)return;let n=pt("#res-title");n.textContent=e?"SIEG":"NIEDERLAGE",n.className="result-title "+(e?"win":"lose"),pt("#res-reason").textContent=t.reason;let i=o=>{let a=s.legions.filter(c=>c.side===o);return`<div class="rs-col p${o}"><h4>${qn[o].name}</h4>${a.map(c=>`<div class="rs-line"><span>${an(c)}</span><span>${c.alive?c.count+"/"+c.maxCount:"\u271D"} \xB7 \u2694 ${c.kills}</span></div>`).join("")}</div>`},r=s.player.slice().sort((o,a)=>a.kills-o.kills)[0];pt("#res-stats").innerHTML=i(0)+i(1)+`<div class="rs-sum"><div>Dauer<b>${Iu(t.time)}</b></div><div>Eigene Verluste<b>${t.lost[0]}</b></div><div>Feindliche Verluste<b>${t.lost[1]}</b></div><div>Beste Legion<b>${r?Ds[r.index]+". "+r.name:"\u2013"}</b></div></div>`,ka("scr-result")},2200)}function pl(s,t){pt("#dlg-body").innerHTML=s;let e=pt("#dlg-actions");e.innerHTML="";for(let[n,i,r]of t){let o=document.createElement("button");o.className="btn"+(r?" primary":""),o.textContent=n,o.onclick=()=>{Ht.play("click"),Pu(),i&&i()},e.appendChild(o)}pt("#dlg").classList.add("show")}function Pu(){pt("#dlg").classList.remove("show")}var ux=()=>pt("#dlg").classList.contains("show");function dx(){pl(`<h2>Anleitung</h2>
  <h4>Ablauf</h4>
  <ul><li><b>Vorbereitung:</b> W\xE4hle Schlachtfeld und 1\u20135 Legionen.</li>
  <li><b>Aufstellung:</b> Ziehe deine Legionen innerhalb der blauen Zone an ihre Startposition. \u201E\u27F3\u201C dreht die gew\xE4hlte Legion.</li>
  <li><b>Befehle:</b> Lege f\xFCr jede Legion Marschroute, Angriff und R\xFCckzug fest. Die Routen werden auf der Karte angezeigt.</li>
  <li><b>Schlacht:</b> Die Legionen f\xFChren ihre Befehle aus. Mit \u275A\u275A pausierst du jederzeit und kannst Befehle \xE4ndern.</li></ul>
  <h4>Kamera</h4>
  <ul><li>Ein Finger: Karte verschieben (mit Schwung) \xB7 Zwei Finger: Zoomen & Drehen \xB7 beide Finger hoch/runter: Neigen</li></ul>
  <h4>Direkte Steuerung in der Schlacht (wie in Age of Empires)</h4>
  <ul><li><b>Legion antippen</b> = w\xE4hlen \xB7 <b>Doppeltipp</b> = alle Legionen dieses Typs \xB7 <b>\u25A3 Alle w\xE4hlen</b></li>
  <li><b>Lang dr\xFCcken & ziehen</b> auf freiem Feld = Auswahlrahmen</li>
  <li>Mit Auswahl: <b>Boden antippen</b> = dorthin marschieren (Gruppen in Formation, gleiches Tempo) \xB7 <b>Feind antippen</b> = angreifen</li>
  <li>Mit Auswahl: <b>lang dr\xFCcken & ziehen</b> = Zielpunkt und Blickrichtung festlegen</li>
  <li>\u270B Halt \xB7 \u21A9 R\xFCckzug \xB7 \u2630 Befehle (Detailbefehle) \xB7 Legionen-Leiste: lang dr\xFCcken = zur Auswahl hinzuf\xFCgen</li></ul>
  <h4>Taktik</h4>
  <ul><li><b>Pikeniere</b> brechen Reiterangriffe (\xD72,6 Schaden gegen Reiter).</li>
  <li><b>Reiterei</b> zerschl\xE4gt Bogensch\xFCtzen und trifft mit Sturmangriff hart \u2013 am besten in Flanke oder R\xFCcken.</li>
  <li><b>Bogensch\xFCtzen</b> zerm\xFCrben aus der Distanz, Wald und Mauern bieten dem Ziel Deckung.</li>
  <li><b>Pr\xE4torianer</b> trotzen Pfeilen und halten jede Stellung.</li>
  <li>Angriffe in die <b>Flanke</b> (+30 %) oder den <b>R\xFCcken</b> (+60 %) entscheiden Schlachten. <b>H\xF6he</b> gibt +20 %.</li>
  <li>Furten verlangsamen und schw\xE4chen die Verteidigung. Burgtore m\xFCssen erst eingeschlagen werden.</li>
  <li>Ein rechtzeitiger <b>R\xFCckzug</b> rettet Legionen \u2013 gesammelt kehren sie zur\xFCck.</li></ul>`,[["Verstanden",null,!0]])}function Du(){let s=We.quality;pl(`<h2>Einstellungen</h2>
    <div class="set-row"><span>Ton</span><div class="chips"><button class="chip ${We.sound?"on":""}" data-set="sound" data-v="1">An</button><button class="chip ${We.sound?"":"on"}" data-set="sound" data-v="0">Aus</button></div></div>
    <div class="set-row"><span>Grafik</span><div class="chips">${[["high","Hoch"],["medium","Mittel"],["low","Niedrig"]].map(([t,e])=>`<button class="chip ${s===t?"on":""}" data-set="quality" data-v="${t}">${e}</button>`).join("")}</div></div>
    <div class="set-row"><span>Statistik</span><button class="btn small" data-set="reset">Zur\xFCcksetzen</button></div>
    <p style="color:var(--muted);font-size:11px">\u201ENiedrig\u201C schaltet Schatten und Kantengl\xE4ttung ab \u2013 f\xFCr \xE4ltere Ger\xE4te.</p>`,[["Fertig",null,!0]]),pt("#dlg-body").onclick=t=>{let e=t.target.closest("[data-set]");if(e){if(Ht.play("click"),e.dataset.set==="sound"&&(We.sound=e.dataset.v==="1",Ht.setEnabled(We.sound)),e.dataset.set==="quality"){We.quality=e.dataset.v,An.set("settings",We),ke("Grafik wird neu geladen \u2026"),setTimeout(()=>location.reload(),500);return}e.dataset.set==="reset"&&(Object.assign(Pe,{wins:0,losses:0,streak:0,best:0}),An.set("stats",Pe),ke("Statistik zur\xFCckgesetzt")),An.set("settings",We),Du()}}}function zu(){let s=R.paused;R.phase==="battle"&&(R.paused=!0,Cn()),pl(`<h2>Schlacht</h2><p>${Ms[R.cur.opts.scenario].name} \xB7 ${En[R.cur.opts.biome].name} \xB7 ${Ui[R.cur.opts.diff].name}</p>`,[["Weiter",()=>{R.phase==="battle"&&(R.paused=s,Cn())},!0],["Neu starten",()=>hl({...R.last,seed:R.last.seed})],["Aufgeben",()=>{R.phase==="battle"&&(Pe.losses++,Pe.streak=0,An.set("stats",Pe)),La()}]])}function Uu(){R.paused=!R.paused,Ht.play("click"),Cn()}document.addEventListener("click",s=>{let t=s.target.closest("[data-act]");if(t)switch(Ht.unlock(),Ht.play("click"),t.dataset.act){case"new":Zg();break;case"quick":{let e=yn(Date.now()|0),n=e.int(3,4),i=[];for(let r=0;r<n;r++)i.push(e.pick(["legion","legion","archer","cavalry","pike","guard"]));mu({scenario:"random",biome:"random",diff:R.cfg.diff,army:i});break}case"help":dx();break;case"settings":Du();break;case"menu":La();break;case"deploy":mu(R.cfg);break;case"rematch":hl({...R.last});break}});pt("#btn-exit").addEventListener("click",()=>{Ht.play("click"),zu()});pt("#btn-pause").addEventListener("click",Uu);pt("#btn-sound").addEventListener("click",()=>{We.sound=!We.sound,Ht.setEnabled(We.sound),An.set("settings",We),Cn()});for(let s of dr("[data-speed]"))s.addEventListener("click",()=>{R.speed=+s.dataset.speed,R.paused&&(R.paused=!1),Ht.play("click"),Cn()});window.onAndroidBack=()=>ux()?(Pu(),!0):R.mode?(R.mode=null,Le(""),In(),!0):pt("#orders").classList.contains("show")?($n(),!0):R.phase==="deploy"||R.phase==="orders"||R.phase==="battle"?(zu(),!0):R.phase==="setup"||R.phase==="result"?(La(),!0):!1;window.onAndroidPause=()=>{R.phase==="battle"&&!R.paused&&(R.paused=!0,Cn()),Ht.suspend()};document.addEventListener("visibilitychange",()=>{document.hidden?window.onAndroidPause():Ht.resume()});var xu=performance.now(),Fa=0,ll=0,lr=0,Hi=0,hr=1/60;function Nu(s){requestAnimationFrame(Nu);let t=Math.min(.05,Math.max(.001,(s-xu)/1e3));xu=s,Hi+=t;let e=R.cur;if(e){let n=e.battle;if((R.phase==="battle"&&!R.paused||R.demo&&(R.phase==="menu"||R.phase==="setup"))&&!n.over){Fa+=t*R.speed;let r=0;for(;Fa>=hr&&r<12;)n.step(hr),e.brain.update(hr),e.brain0&&e.brain0.update(hr),Fa-=hr,r++;r>=12&&(Fa=0);for(let o of e.legions)n.updateSoldiers(o,t*R.speed);lx(e)}else if(R.phase==="deploy"||R.phase==="orders")for(let r of e.legions)r.formDirty&&r.layout(),n.updateSoldiers(r,R.phase==="deploy"?t*2.2:t);else R.phase==="result"||R.phase==="battle"&&R.paused;R.demo&&n.over&&!e.restartAt&&(e.restartAt=Hi+4),R.demo&&e.restartAt&&Hi>e.restartAt&&(R.phase==="menu"||R.phase==="setup")&&_u(),!R.demo&&R.phase==="battle"&&n.over&&hx(),e.units.fx.simTime=n.time,e.units.fx.battleArrows=n.arrows,e.units.update(Hi,t,R.phase==="battle"?new Set(R.sel):R.selected,null),e.overlays.updatePings(t),e.world.camTarget=Lt.cam,ou(e.world,Hi,t,e.map),e.overlays.updateObjective(Hi),e.overlays.updateFootprints(e.player,R.selected,R.phase==="deploy"||R.phase==="orders",R.phase==="deploy",Hi),$g(e),ll-=t,ll<=0&&(ll=.2,ox()),lr-=t,R.phase==="battle"&&R.selected&&lr<=0?(lr=.5,Xe()):R.phase==="battle"&&!R.selected&&lr<=0&&(lr=.5,e.overlays.clearRoutes())}(R.phase==="menu"||R.phase==="setup")&&(Lt.cam.tyaw+=t*.035),Lt.updateCamera(t),Lt.render()}function fx(){try{La(),pt("#loading").classList.remove("show"),requestAnimationFrame(Nu)}catch(s){throw pt("#loading").innerHTML=`<div style="padding:20px;color:#fff">Fehler beim Start: ${s.message}</div>`,s}}window.__G=R;window.__stage=Lt;setTimeout(fx,30);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
