(()=>{var Tc="170";var Eu=0,ul=1,Tu=2;var yh=1,Ac=2,Dn=3,Qn=0,Pe=1,we=2,Kn=0,Ji=1,dl=2,fl=3,pl=4,Au=5,xi=100,Ru=101,Cu=102,Iu=103,Pu=104,Du=200,Uu=201,zu=202,Nu=203,co=204,lo=205,Lu=206,Fu=207,ku=208,Ou=209,Bu=210,Hu=211,Vu=212,Gu=213,Wu=214,ho=0,uo=1,fo=2,ts=3,po=4,mo=5,go=6,xo=7,Rc=0,Xu=1,qu=2,jn=0,Yu=1,$u=2,Zu=3,Ju=4,Ku=5,ju=6,Qu=7;var vh=300,es=301,ns=302,_o=303,yo=304,aa=306,vo=1e3,vi=1001,Mo=1002,Xe=1003,td=1004;var ir=1005;var gn=1006,Ia=1007;var Mi=1008;var Ln=1009,Mh=1010,bh=1011,Os=1012,Cc=1013,bi=1014,xn=1015,$s=1016,Ic=1017,Pc=1018,is=1020,Sh=35902,wh=1021,Eh=1022,ln=1023,Th=1024,Ah=1025,Ki=1026,ss=1027,Dc=1028,Uc=1029,Rh=1030,zc=1031;var Nc=1033,Rr=33776,Cr=33777,Ir=33778,Pr=33779,bo=35840,So=35841,wo=35842,Eo=35843,To=36196,Ao=37492,Ro=37496,Co=37808,Io=37809,Po=37810,Do=37811,Uo=37812,zo=37813,No=37814,Lo=37815,Fo=37816,ko=37817,Oo=37818,Bo=37819,Ho=37820,Vo=37821,Dr=36492,Go=36494,Wo=36495,Ch=36283,Xo=36284,qo=36285,Yo=36286;var Ur=2300,$o=2301,Pa=2302,ml=2400,gl=2401,xl=2402;var ed=3200,nd=3201;var Ih=0,id=1,Jn="",Ke="srgb",ls="srgb-linear",oa="linear",oe="srgb";var zi=7680;var _l=519,sd=512,rd=513,ad=514,Ph=515,od=516,cd=517,ld=518,hd=519,yl=35044,Lc=35048;var vl="300 es",zn=2e3,zr=2001,ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Da=Math.PI/180,Zo=180/Math.PI;function Zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function ud(i,t){return(i%t+t)%t}function Ua(i,t,e){return(1-e)*i+e*t}function Rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],x=n[8],_=s[0],g=s[3],m=s[6],S=s[1],T=s[4],u=s[7],A=s[2],y=s[5],E=s[8];return r[0]=a*_+o*S+c*A,r[3]=a*g+o*T+c*y,r[6]=a*m+o*u+c*E,r[1]=l*_+h*S+d*A,r[4]=l*g+h*T+d*y,r[7]=l*m+h*u+d*E,r[2]=p*_+f*S+x*A,r[5]=p*g+f*T+x*y,r[8]=p*m+f*u+x*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,p=o*c-h*r,f=l*r-a*c,x=e*d+n*p+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(za.makeScale(t,e)),this}rotate(t){return this.premultiply(za.makeRotation(-t)),this}translate(t,e){return this.premultiply(za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},za=new Ft;function Dh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=Nr("canvas");return i.style.display="block",i}var Ml={};function Ls(i){i in Ml||(Ml[i]=!0,console.warn(i))}function fd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function md(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=Nn(i.r),i.g=Nn(i.g),i.b=Nn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?oa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bl=[.64,.33,.3,.6,.15,.06],Sl=[.2126,.7152,.0722],wl=[.3127,.329],El=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[ls]:{primaries:bl,whitePoint:wl,transfer:oa,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:Sl,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:bl,whitePoint:wl,transfer:oe,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:Sl,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});var Ni,Jo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=Nr("canvas")),Ni.width=t.width,Ni.height=t.height;let n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gd=0,Lr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Na(s[a].image)):r.push(Na(s[a]))}else r=Na(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Na(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xd=0,qe=class i extends ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vi,s=vi,r=gn,a=Mi,o=ln,c=Ln,l=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Zs(),this.name="",this.source=new Lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vo:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vo:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=vh;qe.DEFAULT_ANISOTROPY=1;var pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],x=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+_)<.1&&Math.abs(x+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,u=(f+1)/2,A=(m+1)/2,y=(h+p)/4,E=(d+_)/4,C=(x+g)/4;return T>u&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=y/n,r=E/n):u>A?u<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(u),n=y/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=C/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-x)*(g-x)+(d-_)*(d-_)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(g-x)/S,this.y=(d-_)/S,this.z=(p-h)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ko=class extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Lr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Ko{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fr=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ye=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],p=r[a+0],f=r[a+1],x=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=x,t[e+3]=_;return}if(d!==_||c!==p||l!==f||h!==x){let g=1-o,m=c*p+l*f+h*x+d*_,S=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){let A=Math.sqrt(T),y=Math.atan2(A,m*S);g=Math.sin(g*y)/A,o=Math.sin(o*y)/A}let u=o*S;if(c=c*g+p*u,l=l*g+f*u,h=h*g+x*u,d=d*g+_*u,g===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],p=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+h*d+c*f-l*p,t[e+1]=c*x+h*p+l*d-o*f,t[e+2]=l*x+h*f+o*p-c*d,t[e+3]=h*x-o*d-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),p=c(n/2),f=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*f*x,this._y=l*f*d-p*h*x,this._z=l*h*x+p*f*d,this._w=l*h*d-p*f*x;break;case"YXZ":this._x=p*h*d+l*f*x,this._y=l*f*d-p*h*x,this._z=l*h*x-p*f*d,this._w=l*h*d+p*f*x;break;case"ZXY":this._x=p*h*d-l*f*x,this._y=l*f*d+p*h*x,this._z=l*h*x+p*f*d,this._w=l*h*d-p*f*x;break;case"ZYX":this._x=p*h*d-l*f*x,this._y=l*f*d+p*h*x,this._z=l*h*x-p*f*d,this._w=l*h*d+p*f*x;break;case"YZX":this._x=p*h*d+l*f*x,this._y=l*f*d+p*h*x,this._z=l*h*x-p*f*d,this._w=l*h*d-p*f*x;break;case"XZY":this._x=p*h*d-l*f*x,this._y=l*f*d-p*h*x,this._z=l*h*x+p*f*d,this._w=l*h*d+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+o+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},La=new F,Al=new Ye,kn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),rr.subVectors(this.max,Cs),Li.subVectors(t.a,Cs),Fi.subVectors(t.b,Cs),ki.subVectors(t.c,Cs),Wn.subVectors(Fi,Li),Xn.subVectors(ki,Fi),hi.subVectors(Li,ki);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-hi.z,hi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,hi.z,0,-hi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-hi.y,hi.x,0];return!Fa(e,Li,Fi,ki,rr)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,Li,Fi,ki,rr))?!1:(ar.crossVectors(Wn,Xn),e=[ar.x,ar.y,ar.z],Fa(e,Li,Fi,ki,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},An=[new F,new F,new F,new F,new F,new F,new F,new F],an=new F,sr=new kn,Li=new F,Fi=new F,ki=new F,Wn=new F,Xn=new F,hi=new F,Cs=new F,rr=new F,ar=new F,ui=new F;function Fa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);let o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var _d=new kn,Is=new F,ka=new F,ei=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);let e=Is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(ka)),this.expandByPoint(Is.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new F,Oa=new F,or=new F,qn=new F,Ba=new F,cr=new F,Ha=new F,Bs=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oa.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Oa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(or),o=qn.dot(this.direction),c=-qn.dot(or),l=qn.lengthSq(),h=Math.abs(1-a*a),d,p,f,x;if(h>0)if(d=a*c-o,p=a*o-c,x=r*h,d>=0)if(p>=-x)if(p<=x){let _=1/h;d*=_,p*=_,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-x?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l):p<=x?(d=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Oa).addScaledVector(or,p),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){Ba.subVectors(e,t),cr.subVectors(n,t),Ha.crossVectors(Ba,cr);let a=this.direction.dot(Ha),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);let c=o*this.direction.dot(cr.crossVectors(qn,cr));if(c<0)return null;let l=o*this.direction.dot(Ba.cross(qn));if(l<0||c+l>a)return null;let h=-o*qn.dot(Ha);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class i{constructor(t,e,n,s,r,a,o,c,l,h,d,p,f,x,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,p,f,x,_,g)}set(t,e,n,s,r,a,o,c,l,h,d,p,f,x,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=p,m[3]=f,m[7]=x,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=a*h,f=a*d,x=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+x*l,e[5]=p-_*l,e[9]=-o*c,e[2]=_-p*l,e[6]=x+f*l,e[10]=a*c}else if(t.order==="YXZ"){let p=c*h,f=c*d,x=l*h,_=l*d;e[0]=p+_*o,e[4]=x*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=_+p*o,e[10]=a*c}else if(t.order==="ZXY"){let p=c*h,f=c*d,x=l*h,_=l*d;e[0]=p-_*o,e[4]=-a*d,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=_-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let p=a*h,f=a*d,x=o*h,_=o*d;e[0]=c*h,e[4]=x*l-f,e[8]=p*l+_,e[1]=c*d,e[5]=_*l+p,e[9]=f*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let p=a*c,f=a*l,x=o*c,_=o*l;e[0]=c*h,e[4]=_-p*d,e[8]=x*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+x,e[10]=p-_*d}else if(t.order==="XZY"){let p=a*c,f=a*l,x=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+_,e[5]=a*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=o*h,e[10]=_*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,vd)}lookAt(t,e,n){let s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Yn.crossVectors(n,Ge),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Yn.crossVectors(n,Ge)),Yn.normalize(),lr.crossVectors(Ge,Yn),s[0]=Yn.x,s[4]=lr.x,s[8]=Ge.x,s[1]=Yn.y,s[5]=lr.y,s[9]=Ge.y,s[2]=Yn.z,s[6]=lr.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],x=n[2],_=n[6],g=n[10],m=n[14],S=n[3],T=n[7],u=n[11],A=n[15],y=s[0],E=s[4],C=s[8],M=s[12],v=s[1],I=s[5],k=s[9],U=s[13],O=s[2],q=s[6],W=s[10],j=s[14],G=s[3],it=s[7],ct=s[11],xt=s[15];return r[0]=a*y+o*v+c*O+l*G,r[4]=a*E+o*I+c*q+l*it,r[8]=a*C+o*k+c*W+l*ct,r[12]=a*M+o*U+c*j+l*xt,r[1]=h*y+d*v+p*O+f*G,r[5]=h*E+d*I+p*q+f*it,r[9]=h*C+d*k+p*W+f*ct,r[13]=h*M+d*U+p*j+f*xt,r[2]=x*y+_*v+g*O+m*G,r[6]=x*E+_*I+g*q+m*it,r[10]=x*C+_*k+g*W+m*ct,r[14]=x*M+_*U+g*j+m*xt,r[3]=S*y+T*v+u*O+A*G,r[7]=S*E+T*I+u*q+A*it,r[11]=S*C+T*k+u*W+A*ct,r[15]=S*M+T*U+u*j+A*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],f=t[14],x=t[3],_=t[7],g=t[11],m=t[15];return x*(+r*c*d-s*l*d-r*o*p+n*l*p+s*o*f-n*c*f)+_*(+e*c*f-e*l*p+r*a*p-s*a*f+s*l*h-r*c*h)+g*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+m*(-s*o*h-e*c*d+e*o*p+s*a*d-n*a*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],f=t[11],x=t[12],_=t[13],g=t[14],m=t[15],S=d*g*l-_*p*l+_*c*f-o*g*f-d*c*m+o*p*m,T=x*p*l-h*g*l-x*c*f+a*g*f+h*c*m-a*p*m,u=h*_*l-x*d*l+x*o*f-a*_*f-h*o*m+a*d*m,A=x*d*c-h*_*c-x*o*p+a*_*p+h*o*g-a*d*g,y=e*S+n*T+s*u+r*A;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/y;return t[0]=S*E,t[1]=(_*p*r-d*g*r-_*s*f+n*g*f+d*s*m-n*p*m)*E,t[2]=(o*g*r-_*c*r+_*s*l-n*g*l-o*s*m+n*c*m)*E,t[3]=(d*c*r-o*p*r-d*s*l+n*p*l+o*s*f-n*c*f)*E,t[4]=T*E,t[5]=(h*g*r-x*p*r+x*s*f-e*g*f-h*s*m+e*p*m)*E,t[6]=(x*c*r-a*g*r-x*s*l+e*g*l+a*s*m-e*c*m)*E,t[7]=(a*p*r-h*c*r+h*s*l-e*p*l-a*s*f+e*c*f)*E,t[8]=u*E,t[9]=(x*d*r-h*_*r-x*n*f+e*_*f+h*n*m-e*d*m)*E,t[10]=(a*_*r-x*o*r+x*n*l-e*_*l-a*n*m+e*o*m)*E,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*f-e*o*f)*E,t[12]=A*E,t[13]=(h*_*s-x*d*s+x*n*p-e*_*p-h*n*g+e*d*g)*E,t[14]=(x*o*s-a*_*s-x*n*c+e*_*c+a*n*g-e*o*g)*E,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*p+e*o*p)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,p=r*l,f=r*h,x=r*d,_=a*h,g=a*d,m=o*d,S=c*l,T=c*h,u=c*d,A=n.x,y=n.y,E=n.z;return s[0]=(1-(_+m))*A,s[1]=(f+u)*A,s[2]=(x-T)*A,s[3]=0,s[4]=(f-u)*y,s[5]=(1-(p+m))*y,s[6]=(g+S)*y,s[7]=0,s[8]=(x+T)*E,s[9]=(g-S)*E,s[10]=(1-(p+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Oi.set(s[0],s[1],s[2]).length(),a=Oi.set(s[4],s[5],s[6]).length(),o=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);let l=1/r,h=1/a,d=1/o;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=zn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),f,x;if(o===zn)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===zr)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),p=(e+t)*l,f=(n+s)*h,x,_;if(o===zn)x=(a+r)*d,_=-2*d;else if(o===zr)x=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Oi=new F,on=new jt,yd=new F(0,0,0),vd=new F(1,1,1),Yn=new F,lr=new F,Ge=new F,Rl=new jt,Cl=new Ye,Le=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Le.DEFAULT_ORDER="XYZ";var Hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Md=0,Il=new F,Bi=new Ye,Cn=new jt,hr=new F,Ps=new F,bd=new F,Sd=new Ye,Pl=new F(1,0,0),Dl=new F(0,1,0),Ul=new F(0,0,1),zl={type:"added"},wd={type:"removed"},Hi={type:"childadded",child:null},Va={type:"childremoved",child:null},De=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Le,n=new Ye,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return Il.copy(t).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ps,hr,this.up):Cn.lookAt(hr,Ps,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new F(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=new F,In=new F,Ga=new F,Pn=new F,Vi=new F,Gi=new F,Nl=new F,Wa=new F,Xa=new F,qa=new F,Ya=new pe,$a=new pe,Za=new pe,_i=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),In.subVectors(n,e),Ga.subVectors(t,e);let a=cn.dot(cn),o=cn.dot(In),c=cn.dot(Ga),l=In.dot(In),h=In.dot(Ga),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,f=(l*c-o*h)*p,x=(a*h-o*c)*p;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ya.setScalar(0),$a.setScalar(0),Za.setScalar(0),Ya.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Za.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ya,r.x),a.addScaledVector($a,r.y),a.addScaledVector(Za,r.z),a}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),In.subVectors(t,e),cn.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),cn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Gi.subVectors(r,n),Wa.subVectors(t,n);let c=Vi.dot(Wa),l=Gi.dot(Wa);if(c<=0&&l<=0)return e.copy(n);Xa.subVectors(t,s);let h=Vi.dot(Xa),d=Gi.dot(Xa);if(h>=0&&d<=h)return e.copy(s);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Vi,a);qa.subVectors(t,r);let f=Vi.dot(qa),x=Gi.dot(qa);if(x>=0&&f<=x)return e.copy(r);let _=f*l-c*x;if(_<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(Gi,o);let g=h*x-f*d;if(g<=0&&d-h>=0&&f-x>=0)return Nl.subVectors(r,s),o=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(Nl,o);let m=1/(g+_+p);return a=_*m,o=p*m,e.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=ud(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ja(a,r,t+1/3),this.g=Ja(a,r,t),this.b=Ja(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=Uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Kt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(He(Ie.r*255,0,255))*65536+Math.round(He(Ie.g*255,0,255))*256+Math.round(He(Ie.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ke){Kt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(ur);let n=Ua($n.h,ur.h,e),s=Ua($n.s,ur.s,e),r=Ua($n.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new St;St.NAMES=Uh;var Ed=0,ni=class extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Zs(),this.name="",this.blending=Ji,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=lo,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==co&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ve=class extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Le,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new F,dr=new Xt,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yl,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yl&&(t.usage=this.usage),t}};var kr=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Or=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Td=0,Je=new jt,Ka=new De,Wi=new F,We=new kn,Ds=new kn,Se=new F,xe=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dh(t)?Or:kr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(We.min,Ds.min),We.expandByPoint(Se),Se.addVectors(We.max,Ds.max),We.expandByPoint(Se)):(We.expandByPoint(Ds.min),We.expandByPoint(Ds.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Se.fromBufferAttribute(o,l),c&&(Wi.fromBufferAttribute(t,l),Se.add(Wi)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new F,c[C]=new F;let l=new F,h=new F,d=new F,p=new Xt,f=new Xt,x=new Xt,_=new F,g=new F;function m(C,M,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,v),p.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),x.fromBufferAttribute(r,v),h.sub(l),d.sub(l),f.sub(p),x.sub(p);let I=1/(f.x*x.y-x.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(I),o[C].add(_),o[M].add(_),o[v].add(_),c[C].add(g),c[M].add(g),c[v].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,M=S.length;C<M;++C){let v=S[C],I=v.start,k=v.count;for(let U=I,O=I+k;U<O;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let T=new F,u=new F,A=new F,y=new F;function E(C){A.fromBufferAttribute(s,C),y.copy(A);let M=o[C];T.copy(M),T.sub(A.multiplyScalar(A.dot(M))).normalize(),u.crossVectors(y,M);let I=u.dot(c[C])<0?-1:1;a.setXYZW(C,T.x,T.y,T.z,I)}for(let C=0,M=S.length;C<M;++C){let v=S[C],I=v.start,k=v.count;for(let U=I,O=I+k;U<O;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(t)for(let p=0,f=t.count;p<f;p+=3){let x=t.getX(p+0),_=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h),f=0,x=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)p[x++]=l[f++]}return new ge(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ll=new jt,di=new Bs,fr=new ei,Fl=new F,pr=new F,mr=new F,gr=new F,ja=new F,xr=new F,kl=new F,_r=new F,Ot=class extends De{constructor(t=new xe,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(ja.fromBufferAttribute(d,t),a?xr.addScaledVector(ja,h):xr.addScaledVector(ja.sub(e),h))}e.add(xr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(fr.containsPoint(di.origin)===!1&&(di.intersectSphere(fr,Fl)===null||di.origin.distanceToSquared(Fl)>(t.far-t.near)**2))&&(Ll.copy(r).invert(),di.copy(t.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=p.length;x<_;x++){let g=p[x],m=a[g.materialIndex],S=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let u=S,A=T;u<A;u+=3){let y=o.getX(u),E=o.getX(u+1),C=o.getX(u+2);s=yr(this,m,t,n,l,h,d,y,E,C),s&&(s.faceIndex=Math.floor(u/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=x,m=_;g<m;g+=3){let S=o.getX(g),T=o.getX(g+1),u=o.getX(g+2);s=yr(this,a,t,n,l,h,d,S,T,u),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,_=p.length;x<_;x++){let g=p[x],m=a[g.materialIndex],S=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let u=S,A=T;u<A;u+=3){let y=u,E=u+1,C=u+2;s=yr(this,m,t,n,l,h,d,y,E,C),s&&(s.faceIndex=Math.floor(u/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=x,m=_;g<m;g+=3){let S=g,T=g+1,u=g+2;s=yr(this,a,t,n,l,h,d,S,T,u),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Ad(i,t,e,n,s,r,a,o){let c;if(t.side===Pe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Qn,o),c===null)return null;_r.copy(o),_r.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_r);return l<e.near||l>e.far?null:{distance:l,point:_r.clone(),object:i}}function yr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,pr),i.getVertexPosition(c,mr),i.getVertexPosition(l,gr);let h=Ad(i,t,e,n,pr,mr,gr,kl);if(h){let d=new F;_i.getBarycoord(kl,pr,mr,gr,d),s&&(h.uv=_i.getInterpolatedAttribute(s,o,c,l,d,new Xt)),r&&(h.uv1=_i.getInterpolatedAttribute(r,o,c,l,d,new Xt)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,c,l,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new F,materialIndex:0};_i.getNormal(pr,mr,gr,p.normal),h.face=p,h.barycoord=d}return h}var hn=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],p=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function x(_,g,m,S,T,u,A,y,E,C,M){let v=u/E,I=A/C,k=u/2,U=A/2,O=y/2,q=E+1,W=C+1,j=0,G=0,it=new F;for(let ct=0;ct<W;ct++){let xt=ct*I-U;for(let Ct=0;Ct<q;Ct++){let Jt=Ct*v-k;it[_]=Jt*S,it[g]=xt*T,it[m]=O,l.push(it.x,it.y,it.z),it[_]=0,it[g]=0,it[m]=y>0?1:-1,h.push(it.x,it.y,it.z),d.push(Ct/E),d.push(1-ct/C),j+=1}}for(let ct=0;ct<C;ct++)for(let xt=0;xt<E;xt++){let Ct=p+xt+q*ct,Jt=p+xt+q*(ct+1),Y=p+(xt+1)+q*(ct+1),Q=p+(xt+1)+q*ct;c.push(Ct,Jt,Q),c.push(Jt,Y,Q),G+=6}o.addGroup(f,G,M),f+=G,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){let t={};for(let e=0;e<i.length;e++){let n=rs(i[e]);for(let s in n)t[s]=n[s]}return t}function Rd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Cd={clone:rs,merge:ze},Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Br=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new F,Ol=new Xt,Bl=new Xt,Ne=class extends Br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Ol,Bl),e.subVectors(Bl,Ol)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Da*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xi=-90,qi=1,Qo=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Xi,qi,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Xi,qi,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Xi,qi,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Xi,qi,t,e);o.layers=this.layers,this.add(o);let c=new Ne(Xi,qi,t,e);c.layers=this.layers,this.add(c);let l=new Ne(Xi,qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Hr=class extends qe{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tc=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Kn});r.uniforms.tEquirect.value=e;let a=new Ot(s,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=gn),new Qo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Qa=new F,Dd=new F,Ud=new Ft,Un=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qa.subVectors(n,e).cross(Dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ud.getNormalMatrix(t),s=this.coplanarPoint(Qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new ei,vr=new F,Vs=class{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],p=s[7],f=s[8],x=s[9],_=s[10],g=s[11],m=s[12],S=s[13],T=s[14],u=s[15];if(n[0].setComponents(c-r,p-l,g-f,u-m).normalize(),n[1].setComponents(c+r,p+l,g+f,u+m).normalize(),n[2].setComponents(c+a,p+h,g+x,u+S).normalize(),n[3].setComponents(c-a,p-h,g-x,u-S).normalize(),n[4].setComponents(c-o,p-d,g-_,u-T).normalize(),e===zn)n[5].setComponents(c+o,p+d,g+_,u+T).normalize();else if(e===zr)n[5].setComponents(o,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(vr.x=s.normal.x>0?t.max.x:t.min.x,vr.y=s.normal.y>0?t.max.y:t.min.y,vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zd(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,x)=>f.start-x.start);let p=0;for(let f=1;f<d.length;f++){let x=d[p],_=d[f];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++p,d[p]=_)}d.length=p+1;for(let f=0,x=d.length;f<x;f++){let _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var je=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,p=e/c,f=[],x=[],_=[],g=[];for(let m=0;m<h;m++){let S=m*p-a;for(let T=0;T<l;T++){let u=T*d-r;x.push(u,-S,0),_.push(0,0,1),g.push(T/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){let T=S+l*m,u=S+l*(m+1),A=S+1+l*(m+1),y=S+1+l*m;f.push(T,u,y),f.push(u,A,y)}this.setIndex(f),this.setAttribute("position",new re(x,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ld=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
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
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
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
#endif`,Wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Zd=`#ifdef USE_BUMPMAP
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rf=`#define PI 3.141592653589793
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
} // validated`,af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uf=`PhysicalMaterial material;
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
#endif`,zf=`struct PhysicalMaterial {
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
}`,Nf=`
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xf=`#if defined( USE_POINTS_UV )
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
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
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
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vp=`float getShadowMask() {
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
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,Gp=`#define DISTANCE
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Kp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,Qp=`#define MATCAP
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
}`,tm=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,nm=`#define NORMAL
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
}`,im=`#define PHONG
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
}`,sm=`#define PHONG
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
}`,rm=`#define STANDARD
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
}`,am=`#define STANDARD
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
}`,om=`#define TOON
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
}`,cm=`#define TOON
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
}`,lm=`uniform float size;
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,dm=`uniform vec3 color;
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
}`,fm=`uniform float rotation;
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
}`,pm=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Nd,alphahash_pars_fragment:Ld,alphamap_fragment:Fd,alphamap_pars_fragment:kd,alphatest_fragment:Od,alphatest_pars_fragment:Bd,aomap_fragment:Hd,aomap_pars_fragment:Vd,batching_pars_vertex:Gd,batching_vertex:Wd,begin_vertex:Xd,beginnormal_vertex:qd,bsdfs:Yd,iridescence_fragment:$d,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:Qd,color_fragment:tf,color_pars_fragment:ef,color_pars_vertex:nf,color_vertex:sf,common:rf,cube_uv_reflection_fragment:af,defaultnormal_vertex:of,displacementmap_pars_vertex:cf,displacementmap_vertex:lf,emissivemap_fragment:hf,emissivemap_pars_fragment:uf,colorspace_fragment:df,colorspace_pars_fragment:ff,envmap_fragment:pf,envmap_common_pars_fragment:mf,envmap_pars_fragment:gf,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Rf,envmap_vertex:_f,fog_vertex:yf,fog_pars_vertex:vf,fog_fragment:Mf,fog_pars_fragment:bf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:wf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:Tf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:If,lights_phong_fragment:Pf,lights_phong_pars_fragment:Df,lights_physical_fragment:Uf,lights_physical_pars_fragment:zf,lights_fragment_begin:Nf,lights_fragment_maps:Lf,lights_fragment_end:Ff,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:Hf,map_fragment:Vf,map_pars_fragment:Gf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:$f,morphcolor_vertex:Zf,morphnormal_vertex:Jf,morphtarget_pars_vertex:Kf,morphtarget_vertex:jf,normal_fragment_begin:Qf,normal_fragment_maps:tp,normal_pars_fragment:ep,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:op,iridescence_pars_fragment:cp,opaque_fragment:lp,packing:hp,premultiplied_alpha_fragment:up,project_vertex:dp,dithering_fragment:fp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:_p,shadowmap_vertex:yp,shadowmask_pars_fragment:vp,skinbase_vertex:Mp,skinning_pars_vertex:bp,skinning_vertex:Sp,skinnormal_vertex:wp,specularmap_fragment:Ep,specularmap_pars_fragment:Tp,tonemapping_fragment:Ap,tonemapping_pars_fragment:Rp,transmission_fragment:Cp,transmission_pars_fragment:Ip,uv_pars_fragment:Pp,uv_pars_vertex:Dp,uv_vertex:Up,worldpos_vertex:zp,background_vert:Np,background_frag:Lp,backgroundCube_vert:Fp,backgroundCube_frag:kp,cube_vert:Op,cube_frag:Bp,depth_vert:Hp,depth_frag:Vp,distanceRGBA_vert:Gp,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:$p,meshbasic_vert:Zp,meshbasic_frag:Jp,meshlambert_vert:Kp,meshlambert_frag:jp,meshmatcap_vert:Qp,meshmatcap_frag:tm,meshnormal_vert:em,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:sm,meshphysical_vert:rm,meshphysical_frag:am,meshtoon_vert:om,meshtoon_frag:cm,points_vert:lm,points_frag:hm,shadow_vert:um,shadow_frag:dm,sprite_vert:fm,sprite_frag:pm},rt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},mn={basic:{uniforms:ze([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:ze([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new St(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:ze([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:ze([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:ze([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new St(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:ze([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:ze([rt.points,rt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:ze([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:ze([rt.common,rt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:ze([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:ze([rt.sprite,rt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:ze([rt.common,rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:ze([rt.lights,rt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};mn.physical={uniforms:ze([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Mr={r:0,b:0,g:0},pi=new Le,mm=new jt;function gm(i,t,e,n,s,r,a){let o=new St(0),c=r===!0?0:1,l,h,d=null,p=0,f=null;function x(S){let T=S.isScene===!0?S.background:null;return T&&T.isTexture&&(T=(S.backgroundBlurriness>0?e:t).get(T)),T}function _(S){let T=!1,u=x(S);u===null?m(o,c):u&&u.isColor&&(m(u,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,T){let u=x(T);u&&(u.isCubeTexture||u.mapping===aa)?(h===void 0&&(h=new Ot(new hn(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:rs(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(T.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,u.isCubeTexture&&u.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=u,h.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(pi)),h.material.toneMapped=Kt.getTransfer(u.colorSpace)!==oe,(d!==u||p!==u.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=u,p=u.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):u&&u.isTexture&&(l===void 0&&(l=new Ot(new je(2,2),new _n({name:"BackgroundMaterial",uniforms:rs(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=u,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(u.colorSpace)!==oe,u.matrixAutoUpdate===!0&&u.updateMatrix(),l.material.uniforms.uvTransform.value.copy(u.matrix),(d!==u||p!==u.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=u,p=u.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,T){S.getRGB(Mr,zh(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),c=T,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,m(o,c)},render:_,addToRenderList:g}}function xm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(v,I,k,U,O){let q=!1,W=d(U,k,I);r!==W&&(r=W,l(r.object)),q=f(v,U,k,O),q&&x(v,U,k,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,u(v,I,k,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,I,k){let U=k.wireframe===!0,O=n[v.id];O===void 0&&(O={},n[v.id]=O);let q=O[I.id];q===void 0&&(q={},O[I.id]=q);let W=q[U];return W===void 0&&(W=p(c()),q[U]=W),W}function p(v){let I=[],k=[],U=[];for(let O=0;O<e;O++)I[O]=0,k[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:U,object:v,attributes:{},index:null}}function f(v,I,k,U){let O=r.attributes,q=I.attributes,W=0,j=k.getAttributes();for(let G in j)if(j[G].location>=0){let ct=O[G],xt=q[G];if(xt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(xt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(xt=v.instanceColor)),ct===void 0||ct.attribute!==xt||xt&&ct.data!==xt.data)return!0;W++}return r.attributesNum!==W||r.index!==U}function x(v,I,k,U){let O={},q=I.attributes,W=0,j=k.getAttributes();for(let G in j)if(j[G].location>=0){let ct=q[G];ct===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor));let xt={};xt.attribute=ct,ct&&ct.data&&(xt.data=ct.data),O[G]=xt,W++}r.attributes=O,r.attributesNum=W,r.index=U}function _(){let v=r.newAttributes;for(let I=0,k=v.length;I<k;I++)v[I]=0}function g(v){m(v,0)}function m(v,I){let k=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;k[v]=1,U[v]===0&&(i.enableVertexAttribArray(v),U[v]=1),O[v]!==I&&(i.vertexAttribDivisor(v,I),O[v]=I)}function S(){let v=r.newAttributes,I=r.enabledAttributes;for(let k=0,U=I.length;k<U;k++)I[k]!==v[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function T(v,I,k,U,O,q,W){W===!0?i.vertexAttribIPointer(v,I,k,O,q):i.vertexAttribPointer(v,I,k,U,O,q)}function u(v,I,k,U){_();let O=U.attributes,q=k.getAttributes(),W=I.defaultAttributeValues;for(let j in q){let G=q[j];if(G.location>=0){let it=O[j];if(it===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){let ct=it.normalized,xt=it.itemSize,Ct=t.get(it);if(Ct===void 0)continue;let Jt=Ct.buffer,Y=Ct.type,Q=Ct.bytesPerElement,st=Y===i.INT||Y===i.UNSIGNED_INT||it.gpuType===Cc;if(it.isInterleavedBufferAttribute){let et=it.data,At=et.stride,Pt=it.offset;if(et.isInstancedInterleavedBuffer){for(let zt=0;zt<G.locationSize;zt++)m(G.location+zt,et.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let zt=0;zt<G.locationSize;zt++)g(G.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let zt=0;zt<G.locationSize;zt++)T(G.location+zt,xt/G.locationSize,Y,ct,At*Q,(Pt+xt/G.locationSize*zt)*Q,st)}else{if(it.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)m(G.location+et,it.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let et=0;et<G.locationSize;et++)g(G.location+et);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let et=0;et<G.locationSize;et++)T(G.location+et,xt/G.locationSize,Y,ct,xt*Q,xt/G.locationSize*et*Q,st)}}else if(W!==void 0){let ct=W[j];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(G.location,ct);break;case 3:i.vertexAttrib3fv(G.location,ct);break;case 4:i.vertexAttrib4fv(G.location,ct);break;default:i.vertexAttrib1fv(G.location,ct)}}}}S()}function A(){C();for(let v in n){let I=n[v];for(let k in I){let U=I[k];for(let O in U)h(U[O].object),delete U[O];delete I[k]}delete n[v]}}function y(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let k in I){let U=I[k];for(let O in U)h(U[O].object),delete U[O];delete I[k]}delete n[v.id]}function E(v){for(let I in n){let k=n[I];if(k[v.id]===void 0)continue;let U=k[v.id];for(let O in U)h(U[O].object),delete U[O];delete k[v.id]}}function C(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function _m(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let x=0;x<d;x++)f+=h[x];e.update(f,n,1)}function c(l,h,d,p){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)a(l[x],h[x],p[x]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let x=0;for(let _=0;_<d;_++)x+=h[_]*p[_];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ym(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==ln&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let C=E===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ln&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==xn&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),u=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:u,vertexTextures:A,maxSamples:y}}function vm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Un,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){let x=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let S=r?0:n,T=S*4,u=m.clippingState||null;c.value=u,u=h(x,p,T,f);for(let A=0;A!==T;++A)u[A]=e[A];m.clippingState=u,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,x){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=c.value,x!==!0||g===null){let m=f+_*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,u=f;T!==_;++T,u+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(g,u),g[u+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Mm(i){let t=new WeakMap;function e(a,o){return o===_o?a.mapping=es:o===yo&&(a.mapping=ns),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===_o||o===yo)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new tc(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vr=class extends Br{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zi=4,Hl=[.125,.215,.35,.446,.526,.582],yi=20,to=new Vr,Vl=new St,eo=null,no=0,io=0,so=!1,gi=(1+Math.sqrt(5))/2,Yi=1/gi,Gl=[new F(-gi,Yi,0),new F(gi,Yi,0),new F(-Yi,0,gi),new F(Yi,0,gi),new F(0,gi,-Yi),new F(0,gi,Yi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Gr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(eo,no,io),this._renderer.xr.enabled=so,t.scissorTest=!1,br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:$s,format:ln,colorSpace:ls,depthBuffer:!1},s=Wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bm(r)),this._blurMaterial=Sm(r,t,e)}return s}_compileMaterial(t){let e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,to)}_sceneToCubeUV(t,e,n,s){let o=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Vl),h.toneMapping=jn,h.autoClear=!1;let f=new ve({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),x=new Ot(new hn,f),_=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Vl),_=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):S===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let T=this._cubeSize;br(s,S*T,m>2?T:0,T,T),h.setRenderTarget(s),_&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;br(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,to)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gl[(s-r-1)%Gl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ot(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),_=r/x,g=isFinite(r)?1+Math.floor(h*_):yi;g>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);let m=[],S=0;for(let E=0;E<yi;++E){let C=E/_,M=Math.exp(-C*C/2);m.push(M),E===0?S+=M:E<g&&(S+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/S;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:T}=this;p.dTheta.value=x,p.mipInt.value=T-n;let u=this._sizeLods[s],A=3*u*(s>T-Zi?s-T+Zi:0),y=4*(this._cubeSize-u);br(e,A,y,3*u,2*u),c.setRenderTarget(e),c.render(d,to)}};function bm(i){let t=[],e=[],n=[],s=i,r=i-Zi+1+Hl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Zi?c=Hl[a-i+Zi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,_=3,g=2,m=1,S=new Float32Array(_*x*f),T=new Float32Array(g*x*f),u=new Float32Array(m*x*f);for(let y=0;y<f;y++){let E=y%3*2/3-1,C=y>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];S.set(M,_*x*y),T.set(p,g*x*y);let v=[y,y,y,y,y,y];u.set(v,m*x*y)}let A=new xe;A.setAttribute("position",new ge(S,_)),A.setAttribute("uv",new ge(T,g)),A.setAttribute("faceIndex",new ge(u,m)),t.push(A),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wl(i,t,e){let n=new Fn(i,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sm(i,t,e){let n=new Float32Array(yi),s=new F(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Xl(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ql(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Fc(){return`

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
	`}function wm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===_o||c===yo,h=c===es||c===ns;if(l||h){let d=t.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Gr(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Gr(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Em(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tm(i,t,e,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);for(let x in p.morphAttributes){let _=p.morphAttributes[x];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(d){let p=d.attributes;for(let x in p)t.update(p[x],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let x in f){let _=f[x];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(d){let p=[],f=d.index,x=d.attributes.position,_=0;if(f!==null){let S=f.array;_=f.version;for(let T=0,u=S.length;T<u;T+=3){let A=S[T+0],y=S[T+1],E=S[T+2];p.push(A,y,y,E,E,A)}}else if(x!==void 0){let S=x.array;_=x.version;for(let T=0,u=S.length/3-1;T<u;T+=3){let A=T+0,y=T+1,E=T+2;p.push(A,y,y,E,E,A)}}else return;let g=new(Dh(p)?Or:kr)(p,1);g.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let p=r.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Am(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*a),e.update(f,n,1)}function l(p,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,p*a,x),e.update(f,n,x))}function h(p,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,x);let g=0;for(let m=0;m<x;m++)g+=f[m];e.update(g,n,1)}function d(p,f,x,_){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<p.length;m++)l(p[m]/a,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,_,0,x);let m=0;for(let S=0;S<x;S++)m+=f[S]*_[S];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Rm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==d){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;f===!0&&(T=1),x===!0&&(T=2),_===!0&&(T=3);let u=o.attributes.position.count*T,A=1;u>t.maxTextureSize&&(A=Math.ceil(u/t.maxTextureSize),u=t.maxTextureSize);let y=new Float32Array(u*A*4*d),E=new Fr(y,u,A,d);E.type=xn,E.needsUpdate=!0;let C=T*4;for(let v=0;v<d;v++){let I=g[v],k=m[v],U=S[v],O=u*A*4*v;for(let q=0;q<I.count;q++){let W=q*C;f===!0&&(s.fromBufferAttribute(I,q),y[O+W+0]=s.x,y[O+W+1]=s.y,y[O+W+2]=s.z,y[O+W+3]=0),x===!0&&(s.fromBufferAttribute(k,q),y[O+W+4]=s.x,y[O+W+5]=s.y,y[O+W+6]=s.z,y[O+W+7]=0),_===!0&&(s.fromBufferAttribute(U,q),y[O+W+8]=s.x,y[O+W+9]=s.y,y[O+W+10]=s.z,y[O+W+11]=U.itemSize===4?s.w:1)}}p={count:d,texture:E,size:new Xt(u,A)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let x=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Im(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Wr=class extends qe{constructor(t,e,n,s,r,a,o,c,l,h=Ki){if(h!==Ki&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=bi),n===void 0&&h===ss&&(n=is),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Lh=new qe,Yl=new Wr(1,1),Fh=new Fr,kh=new jo,Oh=new Hr,$l=[],Zl=[],Jl=new Float32Array(16),Kl=new Float32Array(9),jl=new Float32Array(4);function hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$l[s];if(r===void 0&&(r=new Float32Array(s),$l[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ca(i,t){let e=Zl[t];e===void 0&&(e=new Int32Array(t),Zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Nm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),be(e,n)}}function Lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Kl.set(n),i.uniformMatrix3fv(this.addr,!1,Kl),be(e,n)}}function Fm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Jl.set(n),i.uniformMatrix4fv(this.addr,!1,Jl),be(e,n)}}function km(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Vm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function qm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=Ph,r=Yl):r=Lh,e.setTexture2D(t||r,s)}function Ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kh,s)}function $m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Oh,s)}function Zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fh,s)}function Jm(i){switch(i){case 5126:return Pm;case 35664:return Dm;case 35665:return Um;case 35666:return zm;case 35674:return Nm;case 35675:return Lm;case 35676:return Fm;case 5124:case 35670:return km;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return Hm;case 5125:return Vm;case 36294:return Gm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Zm}}function Km(i,t){i.uniform1fv(this.addr,t)}function jm(i,t){let e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function Qm(i,t){let e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function tg(i,t){let e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function eg(i,t){let e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ng(i,t){let e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ig(i,t){let e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sg(i,t){i.uniform1iv(this.addr,t)}function rg(i,t){i.uniform2iv(this.addr,t)}function ag(i,t){i.uniform3iv(this.addr,t)}function og(i,t){i.uniform4iv(this.addr,t)}function cg(i,t){i.uniform1uiv(this.addr,t)}function lg(i,t){i.uniform2uiv(this.addr,t)}function hg(i,t){i.uniform3uiv(this.addr,t)}function ug(i,t){i.uniform4uiv(this.addr,t)}function dg(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Lh,r[a])}function fg(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kh,r[a])}function pg(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Oh,r[a])}function mg(i,t,e){let n=this.cache,s=t.length,r=ca(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Fh,r[a])}function gg(i){switch(i){case 5126:return Km;case 35664:return jm;case 35665:return Qm;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return cg;case 36294:return lg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}var ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jm(e.type)}},nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gg(e.type)}},ic=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ro=/(\w+)(\])?(\[|\.)?/g;function Ql(i,t){i.seq.push(t),i.map[t.id]=t}function xg(i,t,e){let n=i.name,s=n.length;for(ro.lastIndex=0;;){let r=ro.exec(n),a=ro.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ql(e,l===void 0?new ec(o,i,t):new nc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ic(o),Ql(e,d)),e=d}}}var Qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);xg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function th(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _g=37297,yg=0;function vg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var eh=new Ft;function Mg(i){Kt._getMatrix(eh,Kt.workingColorSpace,i);let t=`mat3( ${eh.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+vg(i.getShaderSource(t),a)}else return s}function bg(i,t){let e=Mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sg(i,t){let e;switch(t){case Yu:e="Linear";break;case $u:e="Reinhard";break;case Zu:e="Cineon";break;case Ju:e="ACESFilmic";break;case ju:e="AgX";break;case Qu:e="Neutral";break;case Ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sr=new F;function wg(){Kt.getLuminanceCoefficients(Sr);let i=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function Tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fs(i){return i!==""}function ih(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(Rg,Ig)}var Cg=new Map;function Ig(i,t){let e=kt[t];if(e===void 0){let n=Cg.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sc(e)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(i){return i.replace(Pg,Dg)}function Dg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ug(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function zg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ng(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Lg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Xu:t="ENVMAP_BLENDING_MIX";break;case qu:t="ENVMAP_BLENDING_ADD";break}return t}function Fg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Ug(e),l=zg(e),h=Ng(e),d=Lg(e),p=Fg(e),f=Eg(e),x=Tg(r),_=s.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Fs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(g=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?kt.tonemapping_pars_fragment:"",e.toneMapping!==jn?Sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),a=sc(a),a=ih(a,e),a=sh(a,e),o=sc(o),o=ih(o,e),o=sh(o,e),a=rh(a),o=rh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=S+g+a,u=S+m+o,A=th(s,s.VERTEX_SHADER,T),y=th(s,s.FRAGMENT_SHADER,u);s.attachShader(_,A),s.attachShader(_,y),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(I){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(y).trim(),q=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,y);else{let j=nh(s,A,"vertex"),G=nh(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+j+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(U===""||O==="")&&(W=!1);W&&(I.diagnostics={runnable:q,programLog:k,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(A),s.deleteShader(y),C=new Qi(s,_),M=Ag(s,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,_g)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=y,this}var Og=0,rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ac(t),e.set(t,n)),n}},ac=class{constructor(t){this.id=Og++,this.code=t,this.usedTimes=0}};function Bg(i,t,e,n,s,r,a){let o=new Hs,c=new rc,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,v,I,k,U){let O=k.fog,q=U.geometry,W=M.isMeshStandardMaterial?k.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),G=j&&j.mapping===aa?j.image.height:null,it=x[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=ct!==void 0?ct.length:0,Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let Jt,Y,Q,st;if(it){let se=mn[it];Jt=se.vertexShader,Y=se.fragmentShader}else Jt=M.vertexShader,Y=M.fragmentShader,c.update(M),Q=c.getVertexShaderID(M),st=c.getFragmentShaderID(M);let et=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Pt=U.isInstancedMesh===!0,zt=U.isBatchedMesh===!0,ae=!!M.map,$t=!!M.matcap,de=!!j,L=!!M.aoMap,Ue=!!M.lightMap,Gt=!!M.bumpMap,Wt=!!M.normalMap,Et=!!M.displacementMap,ie=!!M.emissiveMap,ht=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,B=M.clearcoat>0,Z=M.dispersion>0,K=M.iridescence>0,$=M.sheen>0,yt=M.transmission>0,ot=b&&!!M.anisotropyMap,mt=B&&!!M.clearcoatMap,Zt=B&&!!M.clearcoatNormalMap,tt=B&&!!M.clearcoatRoughnessMap,gt=K&&!!M.iridescenceMap,Tt=K&&!!M.iridescenceThicknessMap,Rt=$&&!!M.sheenColorMap,ut=$&&!!M.sheenRoughnessMap,Ht=!!M.specularMap,Dt=!!M.specularColorMap,Vt=!!M.specularIntensityMap,D=yt&&!!M.transmissionMap,lt=yt&&!!M.thicknessMap,X=!!M.gradientMap,J=!!M.alphaMap,pt=M.alphaTest>0,dt=!!M.alphaHash,Nt=!!M.extensions,fe=jn;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(fe=i.toneMapping);let Re={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:Jt,fragmentShader:Y,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:st,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:zt,batchingColor:zt&&U._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&U.instanceColor!==null,instancingMorph:Pt&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ls,alphaToCoverage:!!M.alphaToCoverage,map:ae,matcap:$t,envMap:de,envMapMode:de&&j.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:Ue,bumpMap:Gt,normalMap:Wt,displacementMap:p&&Et,emissiveMap:ie,normalMapObjectSpace:Wt&&M.normalMapType===id,normalMapTangentSpace:Wt&&M.normalMapType===Ih,metalnessMap:ht,roughnessMap:R,anisotropy:b,anisotropyMap:ot,clearcoat:B,clearcoatMap:mt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:K,iridescenceMap:gt,iridescenceThicknessMap:Tt,sheen:$,sheenColorMap:Rt,sheenRoughnessMap:ut,specularMap:Ht,specularColorMap:Dt,specularIntensityMap:Vt,transmission:yt,transmissionMap:D,thicknessMap:lt,gradientMap:X,opaque:M.transparent===!1&&M.blending===Ji&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:dt,combine:M.combine,mapUv:ae&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:Ue&&_(M.lightMap.channel),bumpMapUv:Gt&&_(M.bumpMap.channel),normalMapUv:Wt&&_(M.normalMap.channel),displacementMapUv:Et&&_(M.displacementMap.channel),emissiveMapUv:ie&&_(M.emissiveMap.channel),metalnessMapUv:ht&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:ot&&_(M.anisotropyMap.channel),clearcoatMapUv:mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(M.sheenRoughnessMap.channel),specularMapUv:Ht&&_(M.specularMap.channel),specularColorMapUv:Dt&&_(M.specularColorMap.channel),specularIntensityMapUv:Vt&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:lt&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Wt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(ae||J),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ct,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&Kt.getTransfer(M.map.colorSpace)===oe,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(M.emissiveMap.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===we,flipSided:M.side===Pe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Nt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&M.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function m(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)v.push(I),v.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(S(v,M),T(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function S(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function T(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function u(M){let v=x[M.type],I;if(v){let k=mn[v];I=Cd.clone(k.uniforms)}else I=M.uniforms;return I}function A(M,v){let I;for(let k=0,U=h.length;k<U;k++){let O=h[k];if(O.cacheKey===v){I=O,++I.usedTimes;break}}return I===void 0&&(I=new kg(i,v,M,r),h.push(I)),I}function y(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:u,acquireProgram:A,releaseProgram:y,releaseShaderCache:E,programs:h,dispose:C}}function Hg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Vg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function oh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ch(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,f,x,_,g){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:p,material:f,groupOrder:x,renderOrder:d.renderOrder,z:_,group:g},i[t]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=f,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=_,m.group=g),t++,m}function o(d,p,f,x,_,g){let m=a(d,p,f,x,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(d,p,f,x,_,g){let m=a(d,p,f,x,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(d,p){e.length>1&&e.sort(d||Vg),n.length>1&&n.sort(p||oh),s.length>1&&s.sort(p||oh)}function h(){for(let d=t,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Gg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ch,i.set(n,[a])):s>=r.length?(a=new ch,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new St};break;case"SpotLight":e={position:new F,direction:new F,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Xg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var qg=0;function Yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $g(i){let t=new Wg,e=Xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new jt,a=new jt;function o(l){let h=0,d=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,x=0,_=0,g=0,m=0,S=0,T=0,u=0,A=0,y=0,E=0;l.sort(Yg);for(let M=0,v=l.length;M<v;M++){let I=l[M],k=I.color,U=I.intensity,O=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*U,d+=k.g*U,p+=k.b*U;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],U);E++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,G=e.get(I);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=I.shadow.matrix,S++}n.directional[f]=W,f++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(k).multiplyScalar(U),W.distance=O,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[_]=W;let j=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,j.updateMatrices(I),I.castShadow&&y++),n.spotLightMatrix[_]=j.matrix,I.castShadow){let G=e.get(I);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,u++}_++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(k).multiplyScalar(U),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=W,g++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let j=I.shadow,G=e.get(I);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[x]=G,n.pointShadowMap[x]=q,n.pointShadowMatrix[x]=I.shadow.matrix,T++}n.point[x]=W,x++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(U),W.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[m]=W,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let C=n.hash;(C.directionalLength!==f||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==S||C.numPointShadows!==T||C.numSpotShadows!==u||C.numSpotMaps!==A||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=u,n.spotShadowMap.length=u,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=u+A-y,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=E,C.directionalLength=f,C.pointLength=x,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=S,C.numPointShadows=T,C.numSpotShadows=u,C.numSpotMaps=A,C.numLightProbes=E,n.version=qg++)}function c(l,h){let d=0,p=0,f=0,x=0,_=0,g=h.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){let T=l[m];if(T.isDirectionalLight){let u=n.directional[d];u.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),u.direction.sub(s),u.direction.transformDirection(g),d++}else if(T.isSpotLight){let u=n.spot[f];u.position.setFromMatrixPosition(T.matrixWorld),u.position.applyMatrix4(g),u.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),u.direction.sub(s),u.direction.transformDirection(g),f++}else if(T.isRectAreaLight){let u=n.rectArea[x];u.position.setFromMatrixPosition(T.matrixWorld),u.position.applyMatrix4(g),a.identity(),r.copy(T.matrixWorld),r.premultiply(g),a.extractRotation(r),u.halfWidth.set(T.width*.5,0,0),u.halfHeight.set(0,T.height*.5,0),u.halfWidth.applyMatrix4(a),u.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){let u=n.point[p];u.position.setFromMatrixPosition(T.matrixWorld),u.position.applyMatrix4(g),p++}else if(T.isHemisphereLight){let u=n.hemi[_];u.direction.setFromMatrixPosition(T.matrixWorld),u.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function lh(i){let t=new $g(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Zg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new lh(i),t.set(s,[o])):r>=a.length?(o=new lh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var oc=class extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cc=class extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
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
}`;function jg(i,t,e){let n=new Vs,s=new Xt,r=new Xt,a=new pe,o=new oc({depthPacking:nd}),c=new cc,l={},h=e.maxTextureSize,d={[Qn]:Pe,[Pe]:Qn,[we]:we},p=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Jg,fragmentShader:Kg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let x=new xe;x.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ot(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let m=this.type;this.render=function(y,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Kn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let U=m!==Dn&&this.type===Dn,O=m===Dn&&this.type!==Dn;for(let q=0,W=y.length;q<W;q++){let j=y[q],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let it=G.getFrameExtents();if(s.multiply(it),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||U===!0||O===!0){let xt=this.type!==Dn?{minFilter:Xe,magFilter:Xe}:{};G.map!==null&&G.map.dispose(),G.map=new Fn(s.x,s.y,xt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ct=G.getViewportCount();for(let xt=0;xt<ct;xt++){let Ct=G.getViewport(xt);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),k.viewport(a),G.updateMatrices(j,xt),n=G.getFrustum(),u(E,C,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Dn&&S(G,C),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(M,v,I)};function S(y,E){let C=t.update(_);p.defines.VSM_SAMPLES!==y.blurSamples&&(p.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Fn(s.x,s.y)),p.uniforms.shadow_pass.value=y.map.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(E,null,C,p,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(E,null,C,f,_,null)}function T(y,E,C,M){let v=null,I=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)v=I;else if(v=C.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let k=v.uuid,U=E.uuid,O=l[k];O===void 0&&(O={},l[k]=O);let q=O[U];q===void 0&&(q=v.clone(),O[U]=q,E.addEventListener("dispose",A)),v=q}if(v.visible=E.visible,v.wireframe=E.wireframe,M===Dn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:d[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let k=i.properties.get(v);k.light=C}return v}function u(y,E,C,M,v){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Dn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);let U=t.update(y),O=y.material;if(Array.isArray(O)){let q=U.groups;for(let W=0,j=q.length;W<j;W++){let G=q[W],it=O[G.materialIndex];if(it&&it.visible){let ct=T(y,it,M,v);y.onBeforeShadow(i,y,E,C,U,ct,G),i.renderBufferDirect(C,null,U,ct,y,G),y.onAfterShadow(i,y,E,C,U,ct,G)}}}else if(O.visible){let q=T(y,O,M,v);y.onBeforeShadow(i,y,E,C,U,q,null),i.renderBufferDirect(C,null,U,q,y,null),y.onAfterShadow(i,y,E,C,U,q,null)}}let k=y.children;for(let U=0,O=k.length;U<O;U++)u(k[U],E,C,M,v)}function A(y){y.target.removeEventListener("dispose",A);for(let C in l){let M=l[C],v=y.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var Qg={[ho]:uo,[fo]:go,[po]:xo,[ts]:mo,[uo]:ho,[go]:fo,[xo]:po,[mo]:ts};function t0(i,t){function e(){let D=!1,lt=new pe,X=null,J=new pe(0,0,0,0);return{setMask:function(pt){X!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){D=pt},setClear:function(pt,dt,Nt,fe,Re){Re===!0&&(pt*=fe,dt*=fe,Nt*=fe),lt.set(pt,dt,Nt,fe),J.equals(lt)===!1&&(i.clearColor(pt,dt,Nt,fe),J.copy(lt))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,X=null,J=null,pt=null;return{setReversed:function(dt){if(lt!==dt){let Nt=t.get("EXT_clip_control");lt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);let fe=pt;pt=null,this.setClear(fe)}lt=dt},getReversed:function(){return lt},setTest:function(dt){dt?et(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(dt){X!==dt&&!D&&(i.depthMask(dt),X=dt)},setFunc:function(dt){if(lt&&(dt=Qg[dt]),J!==dt){switch(dt){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=dt}},setLocked:function(dt){D=dt},setClear:function(dt){pt!==dt&&(lt&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){D=!1,X=null,J=null,pt=null,lt=!1}}}function s(){let D=!1,lt=null,X=null,J=null,pt=null,dt=null,Nt=null,fe=null,Re=null;return{setTest:function(se){D||(se?et(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(se){lt!==se&&!D&&(i.stencilMask(se),lt=se)},setFunc:function(se,sn,En){(X!==se||J!==sn||pt!==En)&&(i.stencilFunc(se,sn,En),X=se,J=sn,pt=En)},setOp:function(se,sn,En){(dt!==se||Nt!==sn||fe!==En)&&(i.stencilOp(se,sn,En),dt=se,Nt=sn,fe=En)},setLocked:function(se){D=se},setClear:function(se){Re!==se&&(i.clearStencil(se),Re=se)},reset:function(){D=!1,lt=null,X=null,J=null,pt=null,dt=null,Nt=null,fe=null,Re=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},p=new WeakMap,f=[],x=null,_=!1,g=null,m=null,S=null,T=null,u=null,A=null,y=null,E=new St(0,0,0),C=0,M=!1,v=null,I=null,k=null,U=null,O=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=j>=2);let it=null,ct={},xt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Jt=new pe().fromArray(xt),Y=new pe().fromArray(Ct);function Q(D,lt,X,J){let pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(D,dt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<X;Nt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(lt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}let st={};st[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(ts),Gt(!1),Wt(ul),et(i.CULL_FACE),L(Kn);function et(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function At(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Pt(D,lt){return d[D]!==lt?(i.bindFramebuffer(D,lt),d[D]=lt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function zt(D,lt){let X=f,J=!1;if(D){X=p.get(lt),X===void 0&&(X=[],p.set(lt,X));let pt=D.textures;if(X.length!==pt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Nt=pt.length;dt<Nt;dt++)X[dt]=i.COLOR_ATTACHMENT0+dt;X.length=pt.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function ae(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let $t={[xi]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};$t[Iu]=i.MIN,$t[Pu]=i.MAX;let de={[Du]:i.ZERO,[Uu]:i.ONE,[zu]:i.SRC_COLOR,[co]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[Lu]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[lo]:i.ONE_MINUS_SRC_ALPHA,[Ou]:i.ONE_MINUS_DST_COLOR,[Fu]:i.ONE_MINUS_DST_ALPHA,[Hu]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,lt,X,J,pt,dt,Nt,fe,Re,se){if(D===Kn){_===!0&&(At(i.BLEND),_=!1);return}if(_===!1&&(et(i.BLEND),_=!0),D!==Au){if(D!==g||se!==M){if((m!==xi||u!==xi)&&(i.blendEquation(i.FUNC_ADD),m=xi,u=xi),se)switch(D){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,T=null,A=null,y=null,E.set(0,0,0),C=0,g=D,M=se}return}pt=pt||lt,dt=dt||X,Nt=Nt||J,(lt!==m||pt!==u)&&(i.blendEquationSeparate($t[lt],$t[pt]),m=lt,u=pt),(X!==S||J!==T||dt!==A||Nt!==y)&&(i.blendFuncSeparate(de[X],de[J],de[dt],de[Nt]),S=X,T=J,A=dt,y=Nt),(fe.equals(E)===!1||Re!==C)&&(i.blendColor(fe.r,fe.g,fe.b,Re),E.copy(fe),C=Re),g=D,M=!1}function Ue(D,lt){D.side===we?At(i.CULL_FACE):et(i.CULL_FACE);let X=D.side===Pe;lt&&(X=!X),Gt(X),D.blending===Ji&&D.transparent===!1?L(Kn):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ie(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){v!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),v=D)}function Wt(D){D!==Eu?(et(i.CULL_FACE),D!==I&&(D===ul?i.cullFace(i.BACK):D===Tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),I=D}function Et(D){D!==k&&(W&&i.lineWidth(D),k=D)}function ie(D,lt,X){D?(et(i.POLYGON_OFFSET_FILL),(U!==lt||O!==X)&&(i.polygonOffset(lt,X),U=lt,O=X)):At(i.POLYGON_OFFSET_FILL)}function ht(D){D?et(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function R(D){D===void 0&&(D=i.TEXTURE0+q-1),it!==D&&(i.activeTexture(D),it=D)}function b(D,lt,X){X===void 0&&(it===null?X=i.TEXTURE0+q-1:X=it);let J=ct[X];J===void 0&&(J={type:void 0,texture:void 0},ct[X]=J),(J.type!==D||J.texture!==lt)&&(it!==X&&(i.activeTexture(X),it=X),i.bindTexture(D,lt||st[D]),J.type=D,J.texture=lt)}function B(){let D=ct[it];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){Jt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Jt.copy(D))}function ut(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Ht(D,lt){let X=l.get(lt);X===void 0&&(X=new WeakMap,l.set(lt,X));let J=X.get(D);J===void 0&&(J=i.getUniformBlockIndex(lt,D.name),X.set(D,J))}function Dt(D,lt){let J=l.get(lt).get(D);c.get(lt)!==J&&(i.uniformBlockBinding(lt,J,D.__bindingPointIndex),c.set(lt,J))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ct={},d={},p=new WeakMap,f=[],x=null,_=!1,g=null,m=null,S=null,T=null,u=null,A=null,y=null,E=new St(0,0,0),C=0,M=!1,v=null,I=null,k=null,U=null,O=null,Jt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:At,bindFramebuffer:Pt,drawBuffers:zt,useProgram:ae,setBlending:L,setMaterial:Ue,setFlipSided:Gt,setCullFace:Wt,setLineWidth:Et,setPolygonOffset:ie,setScissorTest:ht,activeTexture:R,bindTexture:b,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:gt,texImage3D:Tt,updateUBOMapping:Ht,uniformBlockBinding:Dt,texStorage2D:Zt,texStorage3D:tt,texSubImage2D:$,texSubImage3D:yt,compressedTexSubImage2D:ot,compressedTexSubImage3D:mt,scissor:Rt,viewport:ut,reset:Vt}}function hh(i,t,e,n){let s=e0(n);switch(e){case wh:return i*t;case Th:return i*t;case Ah:return i*t*2;case Dc:return i*t/s.components*s.byteLength;case Uc:return i*t/s.components*s.byteLength;case Rh:return i*t*2/s.components*s.byteLength;case zc:return i*t*2/s.components*s.byteLength;case Eh:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case Nc:return i*t*4/s.components*s.byteLength;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case Eo:return Math.max(i,16)*Math.max(t,8)/4;case bo:case wo:return Math.max(i,8)*Math.max(t,8)/2;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Dr:case Go:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ch:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e0(i){switch(i){case Ln:case Mh:return{byteLength:1,components:1};case Os:case bh:case $s:return{byteLength:2,components:1};case Ic:case Pc:return{byteLength:2,components:4};case bi:case Cc:case xn:return{byteLength:4,components:1};case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,h=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,b){return f?new OffscreenCanvas(R,b):Nr("canvas")}function _(R,b,B){let Z=1,K=ht(R);if((K.width>B||K.height>B)&&(Z=B/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let $=Math.floor(Z*K.width),yt=Math.floor(Z*K.height);d===void 0&&(d=x($,yt));let ot=b?x($,yt):d;return ot.width=$,ot.height=yt,ot.getContext("2d").drawImage(R,0,0,$,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+yt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,b,B,Z,K=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=b;if(b===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),b===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),b===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),b===i.RGBA){let yt=K?oa:Kt.getTransfer(Z);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=yt===oe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function u(R,b){let B;return R?b===null||b===bi||b===is?B=i.DEPTH24_STENCIL8:b===xn?B=i.DEPTH32F_STENCIL8:b===Os&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bi||b===is?B=i.DEPTH_COMPONENT24:b===xn?B=i.DEPTH_COMPONENT32F:b===Os&&(B=i.DEPTH_COMPONENT16),B}function A(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xe&&R.minFilter!==gn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function y(R){let b=R.target;b.removeEventListener("dispose",y),C(b),b.isVideoTexture&&h.delete(b)}function E(R){let b=R.target;b.removeEventListener("dispose",E),v(b)}function C(R){let b=n.get(R);if(b.__webglInit===void 0)return;let B=R.source,Z=p.get(B);if(Z){let K=Z[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(R),Object.keys(Z).length===0&&p.delete(B)}n.remove(R)}function M(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let B=R.source,Z=p.get(B);delete Z[b.__cacheKey],a.memory.textures--}function v(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let K=0;K<b.__webglFramebuffer[Z].length;K++)i.deleteFramebuffer(b.__webglFramebuffer[Z][K]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let B=R.textures;for(let Z=0,K=B.length;Z<K;Z++){let $=n.get(B[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(R)}let I=0;function k(){I=0}function U(){let R=I;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function O(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function q(R,b){let B=n.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,R,b);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function W(R,b){let B=n.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function j(R,b){let B=n.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function G(R,b){let B=n.get(R);if(R.version>0&&B.__version!==R.version){Q(B,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}let it={[vo]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},ct={[Xe]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},xt={[sd]:i.NEVER,[hd]:i.ALWAYS,[rd]:i.LESS,[Ph]:i.LEQUAL,[ad]:i.EQUAL,[ld]:i.GEQUAL,[od]:i.GREATER,[cd]:i.NOTEQUAL};function Ct(R,b){if(b.type===xn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===gn||b.magFilter===Ia||b.magFilter===ir||b.magFilter===Mi||b.minFilter===gn||b.minFilter===Ia||b.minFilter===ir||b.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,it[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,it[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,it[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,xt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xe||b.minFilter!==ir&&b.minFilter!==Mi||b.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Jt(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",y));let Z=b.source,K=p.get(Z);K===void 0&&(K={},p.set(Z,K));let $=O(b);if($!==R.__cacheKey){K[$]===void 0&&(K[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[$].usedTimes++;let yt=K[R.__cacheKey];yt!==void 0&&(K[R.__cacheKey].usedTimes--,yt.usedTimes===0&&M(b)),R.__cacheKey=$,R.__webglTexture=K[$].texture}return B}function Y(R,b,B){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);let K=Jt(R,b),$=b.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+B);let yt=n.get($);if($.version!==yt.__version||K===!0){e.activeTexture(i.TEXTURE0+B);let ot=Kt.getPrimaries(Kt.workingColorSpace),mt=b.colorSpace===Jn?null:Kt.getPrimaries(b.colorSpace),Zt=b.colorSpace===Jn||ot===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let tt=_(b.image,!1,s.maxTextureSize);tt=ie(b,tt);let gt=r.convert(b.format,b.colorSpace),Tt=r.convert(b.type),Rt=T(b.internalFormat,gt,Tt,b.colorSpace,b.isVideoTexture);Ct(Z,b);let ut,Ht=b.mipmaps,Dt=b.isVideoTexture!==!0,Vt=yt.__version===void 0||K===!0,D=$.dataReady,lt=A(b,tt);if(b.isDepthTexture)Rt=u(b.format===ss,b.type),Vt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Rt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,gt,Tt,null));else if(b.isDataTexture)if(Ht.length>0){Dt&&Vt&&e.texStorage2D(i.TEXTURE_2D,lt,Rt,Ht[0].width,Ht[0].height);for(let X=0,J=Ht.length;X<J;X++)ut=Ht[X],Dt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,ut.width,ut.height,gt,Tt,ut.data):e.texImage2D(i.TEXTURE_2D,X,Rt,ut.width,ut.height,0,gt,Tt,ut.data);b.generateMipmaps=!1}else Dt?(Vt&&e.texStorage2D(i.TEXTURE_2D,lt,Rt,tt.width,tt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,gt,Tt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,gt,Tt,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Dt&&Vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Rt,Ht[0].width,Ht[0].height,tt.depth);for(let X=0,J=Ht.length;X<J;X++)if(ut=Ht[X],b.format!==ln)if(gt!==null)if(Dt){if(D)if(b.layerUpdates.size>0){let pt=hh(ut.width,ut.height,b.format,b.type);for(let dt of b.layerUpdates){let Nt=ut.data.subarray(dt*pt/ut.data.BYTES_PER_ELEMENT,(dt+1)*pt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,dt,ut.width,ut.height,1,gt,Nt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ut.width,ut.height,tt.depth,gt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Rt,ut.width,ut.height,tt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ut.width,ut.height,tt.depth,gt,Tt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Rt,ut.width,ut.height,tt.depth,0,gt,Tt,ut.data)}else{Dt&&Vt&&e.texStorage2D(i.TEXTURE_2D,lt,Rt,Ht[0].width,Ht[0].height);for(let X=0,J=Ht.length;X<J;X++)ut=Ht[X],b.format!==ln?gt!==null?Dt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ut.width,ut.height,gt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Rt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,ut.width,ut.height,gt,Tt,ut.data):e.texImage2D(i.TEXTURE_2D,X,Rt,ut.width,ut.height,0,gt,Tt,ut.data)}else if(b.isDataArrayTexture)if(Dt){if(Vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Rt,tt.width,tt.height,tt.depth),D)if(b.layerUpdates.size>0){let X=hh(tt.width,tt.height,b.format,b.type);for(let J of b.layerUpdates){let pt=tt.data.subarray(J*X/tt.data.BYTES_PER_ELEMENT,(J+1)*X/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,gt,Tt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,gt,Tt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,tt.width,tt.height,tt.depth,0,gt,Tt,tt.data);else if(b.isData3DTexture)Dt?(Vt&&e.texStorage3D(i.TEXTURE_3D,lt,Rt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,gt,Tt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,tt.width,tt.height,tt.depth,0,gt,Tt,tt.data);else if(b.isFramebufferTexture){if(Vt)if(Dt)e.texStorage2D(i.TEXTURE_2D,lt,Rt,tt.width,tt.height);else{let X=tt.width,J=tt.height;for(let pt=0;pt<lt;pt++)e.texImage2D(i.TEXTURE_2D,pt,Rt,X,J,0,gt,Tt,null),X>>=1,J>>=1}}else if(Ht.length>0){if(Dt&&Vt){let X=ht(Ht[0]);e.texStorage2D(i.TEXTURE_2D,lt,Rt,X.width,X.height)}for(let X=0,J=Ht.length;X<J;X++)ut=Ht[X],Dt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt,Tt,ut):e.texImage2D(i.TEXTURE_2D,X,Rt,gt,Tt,ut);b.generateMipmaps=!1}else if(Dt){if(Vt){let X=ht(tt);e.texStorage2D(i.TEXTURE_2D,lt,Rt,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Tt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,gt,Tt,tt);g(b)&&m(Z),yt.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Q(R,b,B){if(b.image.length!==6)return;let Z=Jt(R,b),K=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let $=n.get(K);if(K.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);let yt=Kt.getPrimaries(Kt.workingColorSpace),ot=b.colorSpace===Jn?null:Kt.getPrimaries(b.colorSpace),mt=b.colorSpace===Jn||yt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,tt=b.image[0]&&b.image[0].isDataTexture,gt=[];for(let J=0;J<6;J++)!Zt&&!tt?gt[J]=_(b.image[J],!0,s.maxCubemapSize):gt[J]=tt?b.image[J].image:b.image[J],gt[J]=ie(b,gt[J]);let Tt=gt[0],Rt=r.convert(b.format,b.colorSpace),ut=r.convert(b.type),Ht=T(b.internalFormat,Rt,ut,b.colorSpace),Dt=b.isVideoTexture!==!0,Vt=$.__version===void 0||Z===!0,D=K.dataReady,lt=A(b,Tt);Ct(i.TEXTURE_CUBE_MAP,b);let X;if(Zt){Dt&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ht,Tt.width,Tt.height);for(let J=0;J<6;J++){X=gt[J].mipmaps;for(let pt=0;pt<X.length;pt++){let dt=X[pt];b.format!==ln?Rt!==null?Dt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Rt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Ht,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Rt,ut,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Ht,dt.width,dt.height,0,Rt,ut,dt.data)}}}else{if(X=b.mipmaps,Dt&&Vt){X.length>0&&lt++;let J=ht(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ht,J.width,J.height)}for(let J=0;J<6;J++)if(tt){Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,gt[J].width,gt[J].height,Rt,ut,gt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,gt[J].width,gt[J].height,0,Rt,ut,gt[J].data);for(let pt=0;pt<X.length;pt++){let Nt=X[pt].image[J].image;Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Nt.width,Nt.height,Rt,ut,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Ht,Nt.width,Nt.height,0,Rt,ut,Nt.data)}}else{Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Rt,ut,gt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,Rt,ut,gt[J]);for(let pt=0;pt<X.length;pt++){let dt=X[pt];Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Rt,ut,dt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Ht,Rt,ut,dt.image[J])}}}g(b)&&m(i.TEXTURE_CUBE_MAP),$.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function st(R,b,B,Z,K,$){let yt=r.convert(B.format,B.colorSpace),ot=r.convert(B.type),mt=T(B.internalFormat,yt,ot,B.colorSpace),Zt=n.get(b),tt=n.get(B);if(tt.__renderTarget=b,!Zt.__hasExternalTextures){let gt=Math.max(1,b.width>>$),Tt=Math.max(1,b.height>>$);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,$,mt,gt,Tt,b.depth,0,yt,ot,null):e.texImage2D(K,$,mt,gt,Tt,0,yt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Wt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,K,tt.__webglTexture,0,Gt(b)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,K,tt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(R,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let Z=b.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,$=u(b.stencilBuffer,K),yt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Gt(b);Wt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,$,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,R)}else{let Z=b.textures;for(let K=0;K<Z.length;K++){let $=Z[K],yt=r.convert($.format,$.colorSpace),ot=r.convert($.type),mt=T($.internalFormat,yt,ot,$.colorSpace),Zt=Gt(b);B&&Wt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,mt,b.width,b.height):Wt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,mt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,mt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let K=Z.__webglTexture,$=Gt(b);if(b.depthTexture.format===Ki)Wt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===ss)Wt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Pt(R){let b=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");At(b.__webglFramebuffer,R)}else if(B){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),et(b.__webglDepthbuffer[Z],R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),et(b.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(R,b,B){let Z=n.get(R);b!==void 0&&st(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Pt(R)}function ae(R){let b=R.texture,B=n.get(R),Z=n.get(b);R.addEventListener("dispose",E);let K=R.textures,$=R.isWebGLCubeRenderTarget===!0,yt=K.length>1;if(yt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let mt=0;mt<b.mipmaps.length;mt++)B.__webglFramebuffer[ot][mt]=i.createFramebuffer()}else B.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)B.__webglFramebuffer[ot]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ot=0,mt=K.length;ot<mt;ot++){let Zt=n.get(K[ot]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Wt(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){let mt=K[ot];B.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);let Zt=r.convert(mt.format,mt.colorSpace),tt=r.convert(mt.type),gt=T(mt.internalFormat,Zt,tt,mt.colorSpace,R.isXRRenderTarget===!0),Tt=Gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),et(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,b);for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)st(B.__webglFramebuffer[ot][mt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,mt);else st(B.__webglFramebuffer[ot],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ot=0,mt=K.length;ot<mt;ot++){let Zt=K[ot],tt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Ct(i.TEXTURE_2D,Zt),st(B.__webglFramebuffer,R,Zt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),g(Zt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Ct(ot,b),b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)st(B.__webglFramebuffer[mt],R,b,i.COLOR_ATTACHMENT0,ot,mt);else st(B.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,ot,0);g(b)&&m(ot),e.unbindTexture()}R.depthBuffer&&Pt(R)}function $t(R){let b=R.textures;for(let B=0,Z=b.length;B<Z;B++){let K=b[B];if(g(K)){let $=S(R),yt=n.get(K).__webglTexture;e.bindTexture($,yt),m($),e.unbindTexture()}}}let de=[],L=[];function Ue(R){if(R.samples>0){if(Wt(R)===!1){let b=R.textures,B=R.width,Z=R.height,K=i.COLOR_BUFFER_BIT,$=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(R),ot=b.length>1;if(ot)for(let mt=0;mt<b.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let mt=0;mt<b.length;mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);let Zt=n.get(b[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,K,i.NEAREST),c===!0&&(de.length=0,L.length=0,de.push(i.COLOR_ATTACHMENT0+mt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(de.push($),L.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let mt=0;mt<b.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);let Zt=n.get(b[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Gt(R){return Math.min(s.maxSamples,R.samples)}function Wt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function ie(R,b){let B=R.colorSpace,Z=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ls&&B!==Jn&&(Kt.getTransfer(B)===oe?(Z!==ln||K!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function ht(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=zt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Wt}function i0(i,t){function e(n,s=Jn){let r,a=Kt.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.BYTE;if(n===bh)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Cc)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===$s)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===ln)return i.RGBA;if(n===Th)return i.LUMINANCE;if(n===Ah)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===Dc)return i.RED;if(n===Uc)return i.RED_INTEGER;if(n===Rh)return i.RG;if(n===zc)return i.RG_INTEGER;if(n===Nc)return i.RGBA_INTEGER;if(n===Rr||n===Cr||n===Ir||n===Pr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===So||n===wo||n===Eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===Ao||n===Ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===Ao)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Io||n===Po||n===Do||n===Uo||n===zo||n===No||n===Lo||n===Fo||n===ko||n===Oo||n===Bo||n===Ho||n===Vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dr||n===Go||n===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dr)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ch||n===Xo||n===qo||n===Yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lc=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ye=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},s0={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,x=.005;l.inputState.pinching&&p>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},r0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a0=`
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

}`,hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _n({vertexShader:r0,fragmentShader:a0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uc=class extends ti{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,x=null,_=new hc,g=e.getContextAttributes(),m=null,S=null,T=[],u=[],A=new Xt,y=null,E=new Ne;E.viewport=new pe;let C=new Ne;C.viewport=new pe;let M=[E,C],v=new lc,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=T[Y];return Q===void 0&&(Q=new ks,T[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=T[Y];return Q===void 0&&(Q=new ks,T[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=T[Y];return Q===void 0&&(Q=new ks,T[Y]=Q),Q.getHandSpace()};function U(Y){let Q=u.indexOf(Y.inputSource);if(Q===-1)return;let st=T[Q];st!==void 0&&(st.update(Y.inputSource,Y.frame,l||a),st.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<T.length;Y++){let Q=u[Y];Q!==null&&(u[Y]=null,T[Y].disconnect(Q))}I=null,k=null,_.reset(),t.setRenderTarget(m),f=null,p=null,d=null,s=null,S=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Fn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,st=null,et=null;g.depth&&(et=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?ss:Ki,st=g.stencil?is:bi);let At={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(At),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new Fn(p.textureWidth,p.textureHeight,{format:ln,type:Ln,depthTexture:new Wr(p.textureWidth,p.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let Q=0;Q<Y.removed.length;Q++){let st=Y.removed[Q],et=u.indexOf(st);et>=0&&(u[et]=null,T[et].disconnect(st))}for(let Q=0;Q<Y.added.length;Q++){let st=Y.added[Q],et=u.indexOf(st);if(et===-1){for(let Pt=0;Pt<T.length;Pt++)if(Pt>=u.length){u.push(st),et=Pt;break}else if(u[Pt]===null){u[Pt]=st,et=Pt;break}if(et===-1)break}let At=T[et];At&&At.connect(st)}}let W=new F,j=new F;function G(Y,Q,st){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(st.matrixWorld);let et=W.distanceTo(j),At=Q.projectionMatrix.elements,Pt=st.projectionMatrix.elements,zt=At[14]/(At[10]-1),ae=At[14]/(At[10]+1),$t=(At[9]+1)/At[5],de=(At[9]-1)/At[5],L=(At[8]-1)/At[0],Ue=(Pt[8]+1)/Pt[0],Gt=zt*L,Wt=zt*Ue,Et=et/(-L+Ue),ie=Et*-L;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ie),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let ht=zt+Et,R=ae+Et,b=Gt-ie,B=Wt+(et-ie),Z=$t*ae/R*ht,K=de*ae/R*ht;Y.projectionMatrix.makePerspective(b,B,Z,K,ht,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,st=Y.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(st=_.depthFar)),v.near=C.near=E.near=Q,v.far=C.far=E.far=st,(I!==v.near||k!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,k=v.far),E.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,v.layers.mask=E.layers.mask|C.layers.mask;let et=Y.parent,At=v.cameras;it(v,et);for(let Pt=0;Pt<At.length;Pt++)it(At[Pt],et);At.length===2?G(v,E,C):v.projectionMatrix.copy(E.projectionMatrix),ct(Y,v,et)};function ct(Y,Q,st){st===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(st.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Zo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let xt=null;function Ct(Y,Q){if(h=Q.getViewerPose(l||a),x=Q,h!==null){let st=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let et=!1;st.length!==v.cameras.length&&(v.cameras.length=0,et=!0);for(let Pt=0;Pt<st.length;Pt++){let zt=st[Pt],ae=null;if(f!==null)ae=f.getViewport(zt);else{let de=d.getViewSubImage(p,zt);ae=de.viewport,Pt===0&&(t.setRenderTargetTextures(S,de.colorTexture,p.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(S))}let $t=M[Pt];$t===void 0&&($t=new Ne,$t.layers.enable(Pt),$t.viewport=new pe,M[Pt]=$t),$t.matrix.fromArray(zt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(zt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ae.x,ae.y,ae.width,ae.height),Pt===0&&(v.matrix.copy($t.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),et===!0&&v.cameras.push($t)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){let Pt=d.getDepthInformation(st[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let st=0;st<T.length;st++){let et=u[st],At=T[st];et!==null&&At!==void 0&&At.update(et,Q,l||a)}xt&&xt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}let Jt=new Nh;Jt.setAnimationLoop(Ct),this.setAnimationLoop=function(Y){xt=Y},this.dispose=function(){}}},mi=new Le,o0=new jt;function c0(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,zh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,T,u){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&f(g,m,u)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,S,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Pe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Pe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),T=S.envMap,u=S.envMapRotation;T&&(g.envMap.value=T,mi.copy(u),mi.x*=-1,mi.y*=-1,mi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),g.envMapRotation.value.setFromMatrix4(o0.makeRotationFromEuler(mi)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){let u=T.program;n.uniformBlockBinding(S,u)}function l(S,T){let u=s[S.id];u===void 0&&(x(S),u=h(S),s[S.id]=u,S.addEventListener("dispose",g));let A=T.program;n.updateUBOMapping(S,A);let y=t.render.frame;r[S.id]!==y&&(p(S),r[S.id]=y)}function h(S){let T=d();S.__bindingPointIndex=T;let u=i.createBuffer(),A=S.__size,y=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,u),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,u),u}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let T=s[S.id],u=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let y=0,E=u.length;y<E;y++){let C=Array.isArray(u[y])?u[y]:[u[y]];for(let M=0,v=C.length;M<v;M++){let I=C[M];if(f(I,y,M,A)===!0){let k=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],O=0;for(let q=0;q<U.length;q++){let W=U[q],j=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,k+O,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,T,u,A){let y=S.value,E=T+"_"+u;if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:A[E]=y.clone(),!0;{let C=A[E];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return A[E]=y,!0}else if(C.equals(y)===!1)return C.copy(y),!0}return!1}function x(S){let T=S.uniforms,u=0,A=16;for(let E=0,C=T.length;E<C;E++){let M=Array.isArray(T[E])?T[E]:[T[E]];for(let v=0,I=M.length;v<I;v++){let k=M[v],U=Array.isArray(k.value)?k.value:[k.value];for(let O=0,q=U.length;O<q;O++){let W=U[O],j=_(W),G=u%A,it=G%j.boundary,ct=G+it;u+=it,ct!==0&&A-ct<j.storage&&(u+=A-ct),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=u,u+=j.storage}}}let y=u%A;return y>0&&(u+=A-y),S.__size=u,S.__cache={},this}function _(S){let T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),T}function g(S){let T=S.target;T.removeEventListener("dispose",g);let u=a.indexOf(T.__bindingPointIndex);a.splice(u,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Xr=class{constructor(t={}){let{canvas:e=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let x=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,S=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=jn,this.toneMappingExposure=1;let u=this,A=!1,y=0,E=0,C=null,M=-1,v=null,I=new pe,k=new pe,U=null,O=new St(0),q=0,W=e.width,j=e.height,G=1,it=null,ct=null,xt=new pe(0,0,W,j),Ct=new pe(0,0,W,j),Jt=!1,Y=new Vs,Q=!1,st=!1,et=new jt,At=new jt,Pt=new F,zt=new pe,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function de(){return C===null?G:1}let L=n;function Ue(w,z){return e.getContext(w,z)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){let z="webgl2";if(L=Ue(z,w),L===null)throw Ue(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Gt,Wt,Et,ie,ht,R,b,B,Z,K,$,yt,ot,mt,Zt,tt,gt,Tt,Rt,ut,Ht,Dt,Vt,D;function lt(){Gt=new Em(L),Gt.init(),Dt=new i0(L,Gt),Wt=new ym(L,Gt,t,Dt),Et=new t0(L,Gt),Wt.reverseDepthBuffer&&p&&Et.buffers.depth.setReversed(!0),ie=new Rm(L),ht=new Hg,R=new n0(L,Gt,Et,ht,Wt,Dt,ie),b=new Mm(u),B=new wm(u),Z=new zd(L),Vt=new xm(L,Z),K=new Tm(L,Z,ie,Vt),$=new Im(L,K,Z,ie),Rt=new Cm(L,Wt,R),tt=new vm(ht),yt=new Bg(u,b,B,Gt,Wt,Vt,tt),ot=new c0(u,ht),mt=new Gg,Zt=new Zg(Gt),Tt=new gm(u,b,B,Et,$,f,c),gt=new jg(u,$,Wt),D=new l0(L,ie,Wt,Et),ut=new _m(L,Gt,ie),Ht=new Am(L,Gt,ie),ie.programs=yt.programs,u.capabilities=Wt,u.extensions=Gt,u.properties=ht,u.renderLists=mt,u.shadowMap=gt,u.state=Et,u.info=ie}lt();let X=new uc(u,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=Gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(W,j,!1))},this.getSize=function(w){return w.set(W,j)},this.setSize=function(w,z,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,j=z,e.width=Math.floor(w*G),e.height=Math.floor(z*G),H===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(W*G,j*G).floor()},this.setDrawingBufferSize=function(w,z,H){W=w,j=z,G=H,e.width=Math.floor(w*H),e.height=Math.floor(z*H),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(xt)},this.setViewport=function(w,z,H,V){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,z,H,V),Et.viewport(I.copy(xt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Ct)},this.setScissor=function(w,z,H,V){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,z,H,V),Et.scissor(k.copy(Ct).multiplyScalar(G).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(w){Et.setScissorTest(Jt=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){ct=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(w=!0,z=!0,H=!0){let V=0;if(w){let N=!1;if(C!==null){let nt=C.texture.format;N=nt===Nc||nt===zc||nt===Uc}if(N){let nt=C.texture.type,ft=nt===Ln||nt===bi||nt===Os||nt===is||nt===Ic||nt===Pc,vt=Tt.getClearColor(),Mt=Tt.getClearAlpha(),Ut=vt.r,Lt=vt.g,bt=vt.b;ft?(x[0]=Ut,x[1]=Lt,x[2]=bt,x[3]=Mt,L.clearBufferuiv(L.COLOR,0,x)):(_[0]=Ut,_[1]=Lt,_[2]=bt,_[3]=Mt,L.clearBufferiv(L.COLOR,0,_))}else V|=L.COLOR_BUFFER_BIT}z&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),Zt.dispose(),ht.dispose(),b.dispose(),B.dispose(),$.dispose(),Vt.dispose(),D.dispose(),yt.dispose(),X.dispose(),X.removeEventListener("sessionstart",il),X.removeEventListener("sessionend",sl),li.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=ie.autoReset,z=gt.enabled,H=gt.autoUpdate,V=gt.needsUpdate,N=gt.type;lt(),ie.autoReset=w,gt.enabled=z,gt.autoUpdate=H,gt.needsUpdate=V,gt.type=N}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){let z=w.target;z.removeEventListener("dispose",Nt),fe(z)}function fe(w){Re(w),ht.remove(w)}function Re(w){let z=ht.get(w).programs;z!==void 0&&(z.forEach(function(H){yt.releaseProgram(H)}),w.isShaderMaterial&&yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,H,V,N,nt){z===null&&(z=ae);let ft=N.isMesh&&N.matrixWorld.determinant()<0,vt=bu(w,z,H,V,N);Et.setMaterial(V,ft);let Mt=H.index,Ut=1;if(V.wireframe===!0){if(Mt=K.getWireframeAttribute(H),Mt===void 0)return;Ut=2}let Lt=H.drawRange,bt=H.attributes.position,Qt=Lt.start*Ut,ce=(Lt.start+Lt.count)*Ut;nt!==null&&(Qt=Math.max(Qt,nt.start*Ut),ce=Math.min(ce,(nt.start+nt.count)*Ut)),Mt!==null?(Qt=Math.max(Qt,0),ce=Math.min(ce,Mt.count)):bt!=null&&(Qt=Math.max(Qt,0),ce=Math.min(ce,bt.count));let le=ce-Qt;if(le<0||le===1/0)return;Vt.setup(N,V,vt,H,Mt);let Oe,ee=ut;if(Mt!==null&&(Oe=Z.get(Mt),ee=Ht,ee.setIndex(Oe)),N.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*de()),ee.setMode(L.LINES)):ee.setMode(L.TRIANGLES);else if(N.isLine){let wt=V.linewidth;wt===void 0&&(wt=1),Et.setLineWidth(wt*de()),N.isLineSegments?ee.setMode(L.LINES):N.isLineLoop?ee.setMode(L.LINE_LOOP):ee.setMode(L.LINE_STRIP)}else N.isPoints?ee.setMode(L.POINTS):N.isSprite&&ee.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let wt=N._multiDrawStarts,Tn=N._multiDrawCounts,ne=N._multiDrawCount,rn=Mt?Z.get(Mt).bytesPerElement:1,Ui=ht.get(V).currentProgram.getUniforms();for(let Ve=0;Ve<ne;Ve++)Ui.setValue(L,"_gl_DrawID",Ve),ee.render(wt[Ve]/rn,Tn[Ve])}else if(N.isInstancedMesh)ee.renderInstances(Qt,le,N.count);else if(H.isInstancedBufferGeometry){let wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Tn=Math.min(H.instanceCount,wt);ee.renderInstances(Qt,le,Tn)}else ee.render(Qt,le)};function se(w,z,H){w.transparent===!0&&w.side===we&&w.forceSinglePass===!1?(w.side=Pe,w.needsUpdate=!0,nr(w,z,H),w.side=Qn,w.needsUpdate=!0,nr(w,z,H),w.side=we):nr(w,z,H)}this.compile=function(w,z,H=null){H===null&&(H=w),m=Zt.get(H),m.init(z),T.push(m),H.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),w!==H&&w.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let nt=N.material;if(nt)if(Array.isArray(nt))for(let ft=0;ft<nt.length;ft++){let vt=nt[ft];se(vt,H,N),V.add(vt)}else se(nt,H,N),V.add(nt)}),T.pop(),m=null,V},this.compileAsync=function(w,z,H=null){let V=this.compile(w,z,H);return new Promise(N=>{function nt(){if(V.forEach(function(ft){ht.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){N(w);return}setTimeout(nt,10)}Gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let sn=null;function En(w){sn&&sn(w)}function il(){li.stop()}function sl(){li.start()}let li=new Nh;li.setAnimationLoop(En),typeof self!="undefined"&&li.setContext(self),this.setAnimationLoop=function(w){sn=w,X.setAnimationLoop(w),w===null?li.stop():li.start()},X.addEventListener("sessionstart",il),X.addEventListener("sessionend",sl),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(z),z=X.getCamera()),w.isScene===!0&&w.onBeforeRender(u,w,z,C),m=Zt.get(w,T.length),m.init(z),T.push(m),At.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(At),st=this.localClippingEnabled,Q=tt.init(this.clippingPlanes,st),g=mt.get(w,S.length),g.init(),S.push(g),X.enabled===!0&&X.isPresenting===!0){let nt=u.xr.getDepthSensingMesh();nt!==null&&Ca(nt,z,-1/0,u.sortObjects)}Ca(w,z,0,u.sortObjects),g.finish(),u.sortObjects===!0&&g.sort(it,ct),$t=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,$t&&Tt.addToRenderList(g,w),this.info.render.frame++,Q===!0&&tt.beginShadows();let H=m.state.shadowsArray;gt.render(H,w,z),Q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,N=g.transmissive;if(m.setupLights(),z.isArrayCamera){let nt=z.cameras;if(N.length>0)for(let ft=0,vt=nt.length;ft<vt;ft++){let Mt=nt[ft];al(V,N,w,Mt)}$t&&Tt.render(w);for(let ft=0,vt=nt.length;ft<vt;ft++){let Mt=nt[ft];rl(g,w,Mt,Mt.viewport)}}else N.length>0&&al(V,N,w,z),$t&&Tt.render(w),rl(g,w,z);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(u,w,z),Vt.resetDefaultState(),M=-1,v=null,T.pop(),T.length>0?(m=T[T.length-1],Q===!0&&tt.setGlobalState(u.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Ca(w,z,H,V){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){V&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(At);let ft=$.update(w),vt=w.material;vt.visible&&g.push(w,ft,vt,H,zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){let ft=$.update(w),vt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),zt.copy(ft.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(At)),Array.isArray(vt)){let Mt=ft.groups;for(let Ut=0,Lt=Mt.length;Ut<Lt;Ut++){let bt=Mt[Ut],Qt=vt[bt.materialIndex];Qt&&Qt.visible&&g.push(w,ft,Qt,H,zt.z,bt)}}else vt.visible&&g.push(w,ft,vt,H,zt.z,null)}}let nt=w.children;for(let ft=0,vt=nt.length;ft<vt;ft++)Ca(nt[ft],z,H,V)}function rl(w,z,H,V){let N=w.opaque,nt=w.transmissive,ft=w.transparent;m.setupLightsView(H),Q===!0&&tt.setGlobalState(u.clippingPlanes,H),V&&Et.viewport(I.copy(V)),N.length>0&&er(N,z,H),nt.length>0&&er(nt,z,H),ft.length>0&&er(ft,z,H),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function al(w,z,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Fn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?$s:Ln,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let nt=m.state.transmissionRenderTarget[V.id],ft=V.viewport||I;nt.setSize(ft.z,ft.w);let vt=u.getRenderTarget();u.setRenderTarget(nt),u.getClearColor(O),q=u.getClearAlpha(),q<1&&u.setClearColor(16777215,.5),u.clear(),$t&&Tt.render(H);let Mt=u.toneMapping;u.toneMapping=jn;let Ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),Q===!0&&tt.setGlobalState(u.clippingPlanes,V),er(w,H,V),R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let bt=0,Qt=z.length;bt<Qt;bt++){let ce=z[bt],le=ce.object,Oe=ce.geometry,ee=ce.material,wt=ce.group;if(ee.side===we&&le.layers.test(V.layers)){let Tn=ee.side;ee.side=Pe,ee.needsUpdate=!0,ol(le,H,V,Oe,ee,wt),ee.side=Tn,ee.needsUpdate=!0,Lt=!0}}Lt===!0&&(R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt))}u.setRenderTarget(vt),u.setClearColor(O,q),Ut!==void 0&&(V.viewport=Ut),u.toneMapping=Mt}function er(w,z,H){let V=z.isScene===!0?z.overrideMaterial:null;for(let N=0,nt=w.length;N<nt;N++){let ft=w[N],vt=ft.object,Mt=ft.geometry,Ut=V===null?ft.material:V,Lt=ft.group;vt.layers.test(H.layers)&&ol(vt,z,H,Mt,Ut,Lt)}}function ol(w,z,H,V,N,nt){w.onBeforeRender(u,z,H,V,N,nt),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(u,z,H,V,w,nt),N.transparent===!0&&N.side===we&&N.forceSinglePass===!1?(N.side=Pe,N.needsUpdate=!0,u.renderBufferDirect(H,z,V,N,w,nt),N.side=Qn,N.needsUpdate=!0,u.renderBufferDirect(H,z,V,N,w,nt),N.side=we):u.renderBufferDirect(H,z,V,N,w,nt),w.onAfterRender(u,z,H,V,N,nt)}function nr(w,z,H){z.isScene!==!0&&(z=ae);let V=ht.get(w),N=m.state.lights,nt=m.state.shadowsArray,ft=N.state.version,vt=yt.getParameters(w,N.state,nt,z,H),Mt=yt.getProgramCacheKey(vt),Ut=V.programs;V.environment=w.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(w.isMeshStandardMaterial?B:b).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",Nt),Ut=new Map,V.programs=Ut);let Lt=Ut.get(Mt);if(Lt!==void 0){if(V.currentProgram===Lt&&V.lightsStateVersion===ft)return ll(w,vt),Lt}else vt.uniforms=yt.getUniforms(w),w.onBeforeCompile(vt,u),Lt=yt.acquireProgram(vt,Mt),Ut.set(Mt,Lt),V.uniforms=vt.uniforms;let bt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=tt.uniform),ll(w,vt),V.needsLights=wu(w),V.lightsStateVersion=ft,V.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Lt,V.uniformsList=null,Lt}function cl(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=Qi.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function ll(w,z){let H=ht.get(w);H.outputColorSpace=z.outputColorSpace,H.batching=z.batching,H.batchingColor=z.batchingColor,H.instancing=z.instancing,H.instancingColor=z.instancingColor,H.instancingMorph=z.instancingMorph,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function bu(w,z,H,V,N){z.isScene!==!0&&(z=ae),R.resetTextureUnits();let nt=z.fog,ft=V.isMeshStandardMaterial?z.environment:null,vt=C===null?u.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ls,Mt=(V.isMeshStandardMaterial?B:b).get(V.envMap||ft),Ut=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Lt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),bt=!!H.morphAttributes.position,Qt=!!H.morphAttributes.normal,ce=!!H.morphAttributes.color,le=jn;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(le=u.toneMapping);let Oe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=Oe!==void 0?Oe.length:0,wt=ht.get(V),Tn=m.state.lights;if(Q===!0&&(st===!0||w!==v)){let Ze=w===v&&V.id===M;tt.setState(V,w,Ze)}let ne=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Tn.state.version||wt.outputColorSpace!==vt||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==Mt||V.fog===!0&&wt.fog!==nt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==tt.numPlanes||wt.numIntersection!==tt.numIntersection)||wt.vertexAlphas!==Ut||wt.vertexTangents!==Lt||wt.morphTargets!==bt||wt.morphNormals!==Qt||wt.morphColors!==ce||wt.toneMapping!==le||wt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,wt.__version=V.version);let rn=wt.currentProgram;ne===!0&&(rn=nr(V,z,N));let Ui=!1,Ve=!1,Ts=!1,he=rn.getUniforms(),pn=wt.uniforms;if(Et.useProgram(rn.program)&&(Ui=!0,Ve=!0,Ts=!0),V.id!==M&&(M=V.id,Ve=!0),Ui||v!==w){Et.buffers.depth.getReversed()?(et.copy(w.projectionMatrix),pd(et),md(et),he.setValue(L,"projectionMatrix",et)):he.setValue(L,"projectionMatrix",w.projectionMatrix),he.setValue(L,"viewMatrix",w.matrixWorldInverse);let Vn=he.map.cameraPosition;Vn!==void 0&&Vn.setValue(L,Pt.setFromMatrixPosition(w.matrixWorld)),Wt.logarithmicDepthBuffer&&he.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&he.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Ve=!0,Ts=!0)}if(N.isSkinnedMesh){he.setOptional(L,N,"bindMatrix"),he.setOptional(L,N,"bindMatrixInverse");let Ze=N.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),he.setValue(L,"boneTexture",Ze.boneTexture,R))}N.isBatchedMesh&&(he.setOptional(L,N,"batchingTexture"),he.setValue(L,"batchingTexture",N._matricesTexture,R),he.setOptional(L,N,"batchingIdTexture"),he.setValue(L,"batchingIdTexture",N._indirectTexture,R),he.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(L,"batchingColorTexture",N._colorsTexture,R));let As=H.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Rt.update(N,H,rn),(Ve||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,he.setValue(L,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(pn.envMap.value=Mt,pn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&z.environment!==null&&(pn.envMapIntensity.value=z.environmentIntensity),Ve&&(he.setValue(L,"toneMappingExposure",u.toneMappingExposure),wt.needsLights&&Su(pn,Ts),nt&&V.fog===!0&&ot.refreshFogUniforms(pn,nt),ot.refreshMaterialUniforms(pn,V,G,j,m.state.transmissionRenderTarget[w.id]),Qi.upload(L,cl(wt),pn,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Qi.upload(L,cl(wt),pn,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&he.setValue(L,"center",N.center),he.setValue(L,"modelViewMatrix",N.modelViewMatrix),he.setValue(L,"normalMatrix",N.normalMatrix),he.setValue(L,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ze=V.uniformsGroups;for(let Vn=0,Gn=Ze.length;Vn<Gn;Vn++){let hl=Ze[Vn];D.update(hl,rn),D.bind(hl,rn)}}return rn}function Su(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function wu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,z,H){ht.get(w.texture).__webglTexture=z,ht.get(w.depthTexture).__webglTexture=H;let V=ht.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){let H=ht.get(w);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,H=0){C=w,y=z,E=H;let V=!0,N=null,nt=!1,ft=!1;if(w){let Mt=ht.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(Mt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Mt.__hasExternalTextures)R.rebindTextures(w,ht.get(w.texture).__webglTexture,ht.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let bt=w.depthTexture;if(Mt.__boundDepthTexture!==bt){if(bt!==null&&ht.has(bt)&&(w.width!==bt.image.width||w.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Ut=w.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ft=!0);let Lt=ht.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[z])?N=Lt[z][H]:N=Lt[z],nt=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?N=ht.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?N=Lt[H]:N=Lt,I.copy(w.viewport),k.copy(w.scissor),U=w.scissorTest}else I.copy(xt).multiplyScalar(G).floor(),k.copy(Ct).multiplyScalar(G).floor(),U=Jt;if(Et.bindFramebuffer(L.FRAMEBUFFER,N)&&V&&Et.drawBuffers(w,N),Et.viewport(I),Et.scissor(k),Et.setScissorTest(U),nt){let Mt=ht.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,H)}else if(ft){let Mt=ht.get(w.texture),Ut=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,H||0,Ut)}M=-1},this.readRenderTargetPixels=function(w,z,H,V,N,nt,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){Et.bindFramebuffer(L.FRAMEBUFFER,vt);try{let Mt=w.texture,Ut=Mt.format,Lt=Mt.type;if(!Wt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-V&&H>=0&&H<=w.height-N&&L.readPixels(z,H,V,N,Dt.convert(Ut),Dt.convert(Lt),nt)}finally{let Mt=C!==null?ht.get(C).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,z,H,V,N,nt,ft){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){let Mt=w.texture,Ut=Mt.format,Lt=Mt.type;if(!Wt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-V&&H>=0&&H<=w.height-N){Et.bindFramebuffer(L.FRAMEBUFFER,vt);let bt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.bufferData(L.PIXEL_PACK_BUFFER,nt.byteLength,L.STREAM_READ),L.readPixels(z,H,V,N,Dt.convert(Ut),Dt.convert(Lt),0);let Qt=C!==null?ht.get(C).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,Qt);let ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fd(L,ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,nt),L.deleteBuffer(bt),L.deleteSync(ce),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,H=0){w.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-H),N=Math.floor(w.image.width*V),nt=Math.floor(w.image.height*V),ft=z!==null?z.x:0,vt=z!==null?z.y:0;R.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ft,vt,N,nt),Et.unbindTexture()},this.copyTextureToTexture=function(w,z,H=null,V=null,N=0){w.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],z=arguments[2],N=arguments[3]||0,H=null);let nt,ft,vt,Mt,Ut,Lt,bt,Qt,ce,le=w.isCompressedTexture?w.mipmaps[N]:w.image;H!==null?(nt=H.max.x-H.min.x,ft=H.max.y-H.min.y,vt=H.isBox3?H.max.z-H.min.z:1,Mt=H.min.x,Ut=H.min.y,Lt=H.isBox3?H.min.z:0):(nt=le.width,ft=le.height,vt=le.depth||1,Mt=0,Ut=0,Lt=0),V!==null?(bt=V.x,Qt=V.y,ce=V.z):(bt=0,Qt=0,ce=0);let Oe=Dt.convert(z.format),ee=Dt.convert(z.type),wt;z.isData3DTexture?(R.setTexture3D(z,0),wt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(R.setTexture2DArray(z,0),wt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(z,0),wt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);let Tn=L.getParameter(L.UNPACK_ROW_LENGTH),ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ui=L.getParameter(L.UNPACK_SKIP_ROWS),Ve=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt);let Ts=w.isDataArrayTexture||w.isData3DTexture,he=z.isDataArrayTexture||z.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let pn=ht.get(w),As=ht.get(z),Ze=ht.get(pn.__renderTarget),Vn=ht.get(As.__renderTarget);Et.bindFramebuffer(L.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Gn=0;Gn<vt;Gn++)Ts&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ht.get(w).__webglTexture,N,Lt+Gn),w.isDepthTexture?(he&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ht.get(z).__webglTexture,N,ce+Gn),L.blitFramebuffer(Mt,Ut,nt,ft,bt,Qt,nt,ft,L.DEPTH_BUFFER_BIT,L.NEAREST)):he?L.copyTexSubImage3D(wt,N,bt,Qt,ce+Gn,Mt,Ut,nt,ft):L.copyTexSubImage2D(wt,N,bt,Qt,ce+Gn,Mt,Ut,nt,ft);Et.bindFramebuffer(L.READ_FRAMEBUFFER,null),Et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else he?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(wt,N,bt,Qt,ce,nt,ft,vt,Oe,ee,le.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(wt,N,bt,Qt,ce,nt,ft,vt,Oe,le.data):L.texSubImage3D(wt,N,bt,Qt,ce,nt,ft,vt,Oe,ee,le):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,bt,Qt,nt,ft,Oe,ee,le.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,bt,Qt,le.width,le.height,Oe,le.data):L.texSubImage2D(L.TEXTURE_2D,N,bt,Qt,nt,ft,Oe,ee,le);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ui),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve),N===0&&z.generateMipmaps&&L.generateMipmap(wt),Et.unbindTexture()},this.copyTextureToTexture3D=function(w,z,H=null,V=null,N=0){return w.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],z=arguments[3],N=arguments[4]||0),Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,z,H,V,N)},this.initRenderTarget=function(w){ht.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){y=0,E=0,C=null,Et.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}},qr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Yr=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Le,this.environmentIntensity=1,this.environmentRotation=new Le,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var dc=class extends qe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Xe,h=Xe,d,p){super(null,a,o,c,l,h,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gs=class extends ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$i=new jt,uh=new jt,wr=[],dh=new kn,h0=new jt,Us=new Ot,zs=new ei,Ws=class extends Ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,h0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),dh.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(dh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),zs.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),uh.multiplyMatrices(n,$i),Us.matrixWorld=uh,Us.raycast(t,wr);for(let a=0,o=wr.length;a<o;a++){let c=wr[a];c.instanceId=r,c.object=this,e.push(c)}wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dc(new Float32Array(s*this.count),s,this.count,Dc,xn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Xs=class extends ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$r=new F,Zr=new F,fh=new jt,Ns=new Bs,Er=new ei,ao=new F,ph=new F,Jr=class extends De{constructor(t=new xe,e=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)$r.fromBufferAttribute(e,s-1),Zr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=$r.distanceTo(Zr);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,t.ray.intersectsSphere(Er)===!1)return;fh.copy(s).invert(),Ns.copy(t.ray).applyMatrix4(fh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let _=f,g=x-1;_<g;_+=l){let m=h.getX(_),S=h.getX(_+1),T=Tr(this,t,Ns,c,m,S);T&&e.push(T)}if(this.isLineLoop){let _=h.getX(x-1),g=h.getX(f),m=Tr(this,t,Ns,c,_,g);m&&e.push(m)}}else{let f=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let _=f,g=x-1;_<g;_+=l){let m=Tr(this,t,Ns,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){let _=Tr(this,t,Ns,c,x-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Tr(i,t,e,n,s,r){let a=i.geometry.attributes.position;if($r.fromBufferAttribute(a,s),Zr.fromBufferAttribute(a,r),e.distanceSqToSegment($r,Zr,ao,ph)>n)return;ao.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ao);if(!(c<t.near||c>t.far))return{distance:c,point:ph.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Si=class i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],f=[],x=0,_=[],g=n/2,m=0;S(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(p,3)),this.setAttribute("uv",new re(f,2));function S(){let u=new F,A=new F,y=0,E=(e-t)/n;for(let C=0;C<=r;C++){let M=[],v=C/r,I=v*(e-t)+t;for(let k=0;k<=s;k++){let U=k/s,O=U*c+o,q=Math.sin(O),W=Math.cos(O);A.x=I*q,A.y=-v*n+g,A.z=I*W,d.push(A.x,A.y,A.z),u.set(q,E,W).normalize(),p.push(u.x,u.y,u.z),f.push(U,1-v),M.push(x++)}_.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let v=_[M][C],I=_[M+1][C],k=_[M+1][C+1],U=_[M][C+1];(t>0||M!==0)&&(h.push(v,I,U),y+=3),(e>0||M!==r-1)&&(h.push(I,k,U),y+=3)}l.addGroup(m,y,0),m+=y}function T(u){let A=x,y=new Xt,E=new F,C=0,M=u===!0?t:e,v=u===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*v,0),p.push(0,v,0),f.push(.5,.5),x++;let I=x;for(let k=0;k<=s;k++){let O=k/s*c+o,q=Math.cos(O),W=Math.sin(O);E.x=M*W,E.y=g*v,E.z=M*q,d.push(E.x,E.y,E.z),p.push(0,v,0),y.x=q*.5+.5,y.y=W*.5*v+.5,f.push(y.x,y.y),x++}for(let k=0;k<s;k++){let U=A+k,O=I+k;u===!0?h.push(O,O+1,U):h.push(O+1,O,U),C+=3}l.addGroup(m,C,u===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Kr=class i extends Si{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qs=class i extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let T=new F,u=new F,A=new F;for(let y=0;y<e.length;y+=3)f(e[y+0],T),f(e[y+1],u),f(e[y+2],A),c(T,u,A,S)}function c(S,T,u,A){let y=A+1,E=[];for(let C=0;C<=y;C++){E[C]=[];let M=S.clone().lerp(u,C/y),v=T.clone().lerp(u,C/y),I=y-C;for(let k=0;k<=I;k++)k===0&&C===y?E[C][k]=M:E[C][k]=M.clone().lerp(v,k/I)}for(let C=0;C<y;C++)for(let M=0;M<2*(y-C)-1;M++){let v=Math.floor(M/2);M%2===0?(p(E[C][v+1]),p(E[C+1][v]),p(E[C][v])):(p(E[C][v+1]),p(E[C+1][v+1]),p(E[C+1][v]))}}function l(S){let T=new F;for(let u=0;u<r.length;u+=3)T.x=r[u+0],T.y=r[u+1],T.z=r[u+2],T.normalize().multiplyScalar(S),r[u+0]=T.x,r[u+1]=T.y,r[u+2]=T.z}function h(){let S=new F;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];let u=g(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;a.push(u,1-A)}x(),d()}function d(){for(let S=0;S<a.length;S+=6){let T=a[S+0],u=a[S+2],A=a[S+4],y=Math.max(T,u,A),E=Math.min(T,u,A);y>.9&&E<.1&&(T<.2&&(a[S+0]+=1),u<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function f(S,T){let u=S*3;T.x=t[u+0],T.y=t[u+1],T.z=t[u+2]}function x(){let S=new F,T=new F,u=new F,A=new F,y=new Xt,E=new Xt,C=new Xt;for(let M=0,v=0;M<r.length;M+=9,v+=6){S.set(r[M+0],r[M+1],r[M+2]),T.set(r[M+3],r[M+4],r[M+5]),u.set(r[M+6],r[M+7],r[M+8]),y.set(a[v+0],a[v+1]),E.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),A.copy(S).add(T).add(u).divideScalar(3);let I=g(A);_(y,v+0,S,I),_(E,v+2,T,I),_(C,v+4,u,I)}}function _(S,T,u,A){A<0&&S.x===1&&(a[T]=S.x-1),u.x===0&&u.z===0&&(a[T]=A/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},jr=class i extends qs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var as=class i extends qs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var wi=class i extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=t,p=(e-t)/s,f=new F,x=new Xt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,h.push(x.x,x.y)}d+=p}for(let _=0;_<s;_++){let g=_*(n+1);for(let m=0;m<n;m++){let S=m+g,T=S,u=S+n+1,A=S+n+2,y=S+1;o.push(T,u,y),o.push(u,A,y)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var os=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new F,p=new F,f=[],x=[],_=[],g=[];for(let m=0;m<=n;m++){let S=[],T=m/n,u=0;m===0&&a===0?u=.5/e:m===n&&c===Math.PI&&(u=-.5/e);for(let A=0;A<=e;A++){let y=A/e;d.x=-t*Math.cos(s+y*r)*Math.sin(a+T*o),d.y=t*Math.cos(a+T*o),d.z=t*Math.sin(s+y*r)*Math.sin(a+T*o),x.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),g.push(y+u,1-T),S.push(l++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let T=h[m][S+1],u=h[m][S],A=h[m+1][S],y=h[m+1][S+1];(m!==0||a>0)&&f.push(T,u,y),(m!==n-1||c<Math.PI)&&f.push(u,A,y)}this.setIndex(f),this.setAttribute("position",new re(x,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Qr=class i extends qs{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ta=class i extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new F,d=new F,p=new F;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let _=x/s*r,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(_),d.y=(t+e*Math.cos(g))*Math.sin(_),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(x/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let _=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,m=(s+1)*(f-1)+x,S=(s+1)*f+x;a.push(_,g,S),a.push(g,m,S)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ee=class extends ni{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Le,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ar(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function u0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var cs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends cs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gl:r=t,o=2*e-n;break;case xl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gl:a=t,c=2*n-e;break;case xl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),_=x*x,g=_*x,m=-p*g+2*p*_-p*x,S=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*x+1,T=(-1-f)*g+(1.5+f)*_+.5*x,u=f*g-f*_;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+S*a[l+A]+T*a[c+A]+u*a[d+A];return r}},pc=class extends cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let p=0;p!==o;++p)r[p]=a[l+p]*d+a[c+p]*h;return r}},mc=class extends cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ar(e,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ar(t.times,Array),values:Ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case $o:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&u0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,p=d-n,f=d+n;for(let x=0;x!==n;++x){let _=e[d+x];if(_!==e[p+x]||_!==e[f+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,p=a*n;for(let f=0;f!==n;++f)e[p+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=$o;var Ei=class extends un{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Ur;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends un{};gc.prototype.ValueTypeName="color";var xc=class extends un{};xc.prototype.ValueTypeName="number";var _c=class extends cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Ye.slerpFlat(r,0,a,l-o,a,l,c);return r}},ea=class extends un{InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends un{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Ur;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends un{};yc.prototype.ValueTypeName="vector";var vc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let f=l[d],x=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},d0=new vc,Mc=class{constructor(t){this.manager=t!==void 0?t:d0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ys=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},na=class extends Ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},oo=new jt,mh=new F,gh=new F,bc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gh),e.updateMatrixWorld(),oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sc=class extends bc{constructor(){super(new Vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ia=class extends Ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},sa=class extends Ys{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var kc="\\[\\]\\.:\\/",f0=new RegExp("["+kc+"]","g"),Oc="[^"+kc+"]",p0="[^"+kc.replace("\\.","")+"]",m0=/((?:WC+[\/:])*)/.source.replace("WC",Oc),g0=/(WCOD+)?/.source.replace("WCOD",p0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),y0=new RegExp("^"+m0+g0+x0+_0+"$"),v0=["material","materials","bones","map"],wc=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(f0,"")}static parseTrackName(t){let e=y0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);v0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=wc;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y0=new Float32Array(1);var xh=new jt,ra=class{constructor(t,e,n=0,s=1/0){this.ray=new Bs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xh),this}intersectObject(t,e=!0,n=[]){return Ec(t,this,n,e),n.sort(_h),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ec(t[s],this,n,e);return n.sort(_h),n}};function _h(i,t){return i.distance-t.distance}function Ec(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ec(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);var yn={legion:{id:"legion",size:32,cols:8,spacing:1.25,hp:10,atk:3.2,def:3,speed:2.7,range:0,names:["Legion\xE4re","Pl\xFCnderer"],desc:["Schwert & Scutum. Der verl\xE4ssliche Kern jeder Armee.","Axt & Rundschild. Wild und z\xE4h."],stats:{Angriff:3,Abwehr:3,Tempo:3,"Reichw.":1}},pike:{id:"pike",size:36,cols:9,spacing:1.2,hp:10,atk:2.6,def:2.8,speed:2.25,range:0,vsCav:2.6,names:["Pikeniere","Speerm\xE4nner"],desc:["Lange Piken. Brechen jeden Reiterangriff.","Speerwall gegen Reiter."],stats:{Angriff:2,Abwehr:3,Tempo:2,"Reichw.":2}},archer:{id:"archer",size:24,cols:8,spacing:1.35,hp:8,atk:1.4,def:1.2,speed:2.8,range:36,volley:2.9,arrowDmg:3.6,names:["Bogensch\xFCtzen","J\xE4ger"],desc:["Pfeilhagel auf gro\xDFe Distanz. Schwach im Nahkampf.","T\xF6dliche Sch\xFCtzen aus dem Hinterhalt."],stats:{Angriff:3,Abwehr:1,Tempo:3,"Reichw.":5}},cavalry:{id:"cavalry",size:20,cols:5,spacing:1.9,hp:16,atk:3.5,def:2.4,speed:5.4,range:0,charge:2.3,names:["Reiterei","Wolfsreiter"],desc:["Schnell und wuchtig. Sturmangriff in Flanke und R\xFCcken.","Schnelle Reiter f\xFCr \xDCberf\xE4lle."],stats:{Angriff:4,Abwehr:2,Tempo:5,"Reichw.":1}},guard:{id:"guard",size:24,cols:6,spacing:1.3,hp:14,atk:3.3,def:5,speed:2.1,range:0,arrowResist:.45,names:["Pr\xE4torianer","Eisenwache"],desc:["Elite mit Turmschilden. H\xE4lt jede Stellung, trotzt Pfeilen.","Schwer gepanzerte Elite."],stats:{Angriff:4,Abwehr:5,Tempo:1,"Reichw.":1}}},Bh=["legion","pike","archer","cavalry","guard"],On=[{id:0,name:"L\xF6wenlegion",short:"Du",ui:"#4a8cf0",uiDark:"#1f4c9a",colors:{primary:3105732,secondary:14922817,metal:13225686,helm:14264634,crest:12857387,skin:14856588,dark:4863268,wood:9067058,cloth:15722194,horse:8014634,mane:2759698,banner:3105732,hood:4155973}},{id:1,name:"Rabenclan",short:"Bot",ui:"#e0473c",uiDark:"#8e1f1a",colors:{primary:10691356,secondary:2829104,metal:7304060,helm:5593183,crest:15261900,skin:14197372,dark:2761504,wood:6110498,cloth:3816e3,horse:3879985,mane:1380882,banner:10691356,hood:2829104}}],vn={summer:{name:"Sommer",sky:[9356784,15267071],fog:13625077,grass:[7319119,8239960,6266437,8962658],dirt:11569754,sand:14206092,rock:[9276038,10197138,8157557],cliff:[10127992,9075304],water:4034249,leaf:[4164154,5216832,5941322,3701300],pine:[3107642,2776885],trunk:7031342,flower:[15917388,15760040,16777215,11565808],sun:16773590,hemi:[14676223,6982218]},autumn:{name:"Herbst",sky:[15251850,16509136],fog:15718847,grass:[10133580,11118679,9146948,11839578],dirt:10648142,sand:13744260,rock:[9274750,10129801,8024940],cliff:[10256230,9072472],water:4884136,leaf:[14251818,14916146,12865578,15253834],pine:[4023104,3496504],trunk:6176552,flower:[15253834,14251818,16777215,12865578],sun:16769208,hemi:[16771280,8022586]},winter:{name:"Winter",sky:[12176864,15660282],fog:14674160,grass:[15660023,14936816,16251644,14279659],dirt:10195076,sand:13620956,rock:[9344670,10397358,8291982],cliff:[9081500,8028812],water:6131635,leaf:[14674416,13622760,15266037,12570845],pine:[3037770,2773060],trunk:5916214,flower:[16777215,14674416,13623534,16777215],sun:16054527,hemi:[15791871,9082530]},desert:{name:"W\xFCste",sky:[15780234,16773850],fog:16048834,grass:[14729344,14202483,15256204,13610604],dirt:12159573,sand:15520924,rock:[12093024,12883050,11040598],cliff:[12614220,11036222,13667932],water:4170680,leaf:[7313978,8366149,6261298,9087050],pine:[6261298,5208618],trunk:9071170,flower:[15245388,13658682,16777215,15255658],sun:16773328,hemi:[16773340,10517066]}},us={assault:{name:"Burg einnehmen",icon:"castle",desc:"Die feindliche Burg muss fallen. Brich das Tor und halte den Burghof.",goal:"Halte den Burghof 20 s lang oder vernichte den Feind. Zeitlimit 6:00.",time:360},defend:{name:"Burg verteidigen",icon:"shield",desc:"Der Rabenclan st\xFCrmt eure Mauern. Haltet bis zum Morgengrauen.",goal:"\xDCberlebe 5:00 oder vernichte die Angreifer. Der Burghof darf nicht fallen.",time:300},canyon:{name:"Canyon-Pass",icon:"canyon",desc:"Enge Schluchten, steile Felsen. Wer den Pass kontrolliert, gewinnt.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420},river:{name:"Flussfurt",icon:"river",desc:"Ein Fluss trennt die Heere. Br\xFCcke und Furten sind der Schl\xFCssel.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420},hill:{name:"K\xF6nigsh\xFCgel",icon:"hill",desc:"Der alte Steinkreis auf dem H\xFCgel. Wer ihn h\xE4lt, beherrscht das Land.",goal:"Halte den Steinkreis bis 100 Punkte \u2013 oder vernichte den Feind.",time:420},forest:{name:"Nebelwald",icon:"forest",desc:"Dichter Wald bietet Deckung vor Pfeilen \u2013 und Raum f\xFCr Hinterhalte.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420}},Bc=["assault","defend","canyon","river","hill","forest"],Ai={easy:{name:"Leicht",size:.85,think:3.5,smart:.35},normal:{name:"Normal",size:1,think:2,smart:.7},hard:{name:"Schwer",size:1.15,think:1,smart:1}};function Hh(i){return{move:"advance",waypoints:[],target:i==="cavalry"?"ranged":"nearest",targetId:-1,stance:"balanced",formation:i==="cavalry"?"wedge":"line",delay:i==="cavalry"?5:0,skirmish:i==="archer",retreatAt:.25,retreatTo:"camp",afterRetreat:"hold"}}var ha=class{constructor(t,e){this.canvas=t,this.quality=e,this.renderer=new Xr({canvas:t,antialias:e.aa,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e.pixelRatio)),this.renderer.shadowMap.enabled=e.shadows,this.renderer.shadowMap.type=Ac,this.scene=new Yr,this.camera=new Ne(42,1,1,900),this.cam={x:0,z:4,dist:118,yaw:0,pitch:.95,tx:0,tz:4,tdist:118,tyaw:0,tpitch:.95},this.bounds={x:78,z:52},this.raycaster=new ra,this.resize(),window.addEventListener("resize",()=>this.resize())}setupEnvironment(t,e){let n=vn[t],s=this.scene;if(this.lights)for(let f of this.lights)s.remove(f);this.sky&&s.remove(this.sky);let r=new na(n.hemi[0],n.hemi[1],1.35),a=new ia(n.sun,2.1);if(a.position.set(-60,110,70),a.target.position.set(0,0,0),this.quality.shadows){a.castShadow=!0;let f=this.quality.shadowSize;a.shadow.mapSize.set(f,f);let x=a.shadow.camera;x.left=-95,x.right=95,x.top=70,x.bottom=-70,x.near=10,x.far=320,a.shadow.bias=-8e-4,a.shadow.normalBias=.4}let o=new sa(16777215,.25);s.add(r,a,a.target,o),this.lights=[r,a,a.target,o];let c=new os(600,24,12),l=new St(n.sky[0]),h=new St(n.sky[1]),d=[],p=c.attributes.position;for(let f=0;f<p.count;f++){let x=p.getY(f)/600,_=h.clone().lerp(l,Math.max(0,Math.min(1,x*1.6+.1)));d.push(_.r,_.g,_.b)}c.setAttribute("color",new re(d,3)),this.sky=new Ot(c,new ve({vertexColors:!0,side:Pe,fog:!1,depthWrite:!1})),s.add(this.sky),s.fog=new qr(n.fog,e),s.background=new St(n.fog)}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t/e<1.3?55:42,this.camera.updateProjectionMatrix()}updateCamera(t){let e=this.cam,n=1-Math.exp(-t*9);e.tx=Math.max(-this.bounds.x,Math.min(this.bounds.x,e.tx)),e.tz=Math.max(-this.bounds.z,Math.min(this.bounds.z,e.tz)),e.tdist=Math.max(22,Math.min(150,e.tdist)),e.tpitch=Math.max(.42,Math.min(1.38,e.tpitch)),e.x+=(e.tx-e.x)*n,e.z+=(e.tz-e.z)*n,e.dist+=(e.tdist-e.dist)*n,e.yaw+=(e.tyaw-e.yaw)*n,e.pitch+=(e.tpitch-e.pitch)*n;let s=Math.cos(e.pitch),r=Math.sin(e.pitch),a=e.x+Math.sin(e.yaw)*s*e.dist,o=e.z+Math.cos(e.yaw)*s*e.dist,c=r*e.dist;this.groundFn&&(c=Math.max(c,this.groundFn(a,o)+4)),this.camera.position.set(a,c,o),this.camera.lookAt(e.x,0,e.z)}focus(t,e,n){this.cam.tx=t,this.cam.tz=e,n&&(this.cam.tdist=n)}pan(t,e){let n=this.cam,s=n.dist*1.1/window.innerHeight,r=Math.cos(n.yaw),a=Math.sin(n.yaw),o=r,c=-a,l=-a,h=-r;n.tx-=(o*t-l*e)*s,n.tz-=(c*t-h*e)*s}zoom(t){this.cam.tdist*=t}rotate(t){this.cam.tyaw+=t}tilt(t){this.cam.tpitch+=t}pick(t,e,n){let s=new Xt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=this.raycaster.intersectObjects(n,!1)[0];return r?r.point:null}project(t,e,n,s){let r=new F(t,e,n).project(this.camera);return s.x=(r.x*.5+.5)*window.innerWidth,s.y=(-r.y*.5+.5)*window.innerHeight,s.visible=r.z<1&&r.z>-1,s}render(){this.renderer.render(this.scene,this.camera)}},ua=class{constructor(t,e){this.scene=t,this.map=e,this.group=new ye,t.add(this.group),this.zoneMeshes=[],this.routeGroup=new ye,this.group.add(this.routeGroup),this.objMesh=null,this.makeZones(),this.makeObjective()}terrainPatch(t,e,n,s,r,a,o=.25){let c=Math.max(2,Math.ceil((n-t)/2)),l=Math.max(2,Math.ceil((s-e)/2)),h=new je(n-t,s-e,c,l);h.rotateX(-Math.PI/2);let d=h.attributes.position;for(let f=0;f<d.count;f++){let x=d.getX(f)+(t+n)/2,_=d.getZ(f)+(e+s)/2;d.setXYZ(f,x,Math.max(this.map.getHeight(x,_),this.map.hasWater?this.map.waterLevel:-99)+o,_)}h.computeVertexNormals();let p=new Ot(h,new ve({color:r,transparent:!0,opacity:a,depthWrite:!1}));return p.renderOrder=2,p}makeZones(){for(let t=0;t<2;t++){let e=this.map.zones[t],n=t===0?4885744:14698300,s=new ye;s.add(this.terrainPatch(e.x0,e.z0,e.x1,e.z1,n,.16));let r=[],a=(c,l)=>r.push(new F(c,this.map.getHeight(c,l)+.4,l));for(let c=e.x0;c<=e.x1;c+=1.5)a(c,e.z0);for(let c=e.z0;c<=e.z1;c+=1.5)a(e.x1,c);for(let c=e.x1;c>=e.x0;c-=1.5)a(c,e.z1);for(let c=e.z1;c>=e.z0;c-=1.5)a(e.x0,c);let o=new xe().setFromPoints(r);s.add(new Jr(o,new Xs({color:n,transparent:!0,opacity:.9}))),this.group.add(s),this.zoneMeshes.push(s)}}showZones(t,e=-1){this.zoneMeshes.forEach((n,s)=>{n.visible=t&&(e<0||e===s)})}makeObjective(){let t=this.map.objective;if(!t)return;let e=new wi(t.r-.6,t.r,48,1);e.rotateX(-Math.PI/2);let n=new ve({color:16769146,transparent:!0,opacity:.55,depthWrite:!1,side:we}),s=new Ot(e,n);s.position.set(t.x,this.map.getHeight(t.x,t.z)+.35,t.z),s.renderOrder=2,this.group.add(s),this.objMesh=s;let r=this.terrainPatch(t.x-t.r,t.z-t.r,t.x+t.r,t.z+t.r,16769146,0,.2);this.group.add(r)}updateObjective(t){let e=this.map.objective;if(!this.objMesh)return;let n=16769146;e.present&&(e.present[0]>0&&e.present[1]===0?n=4885744:e.present[1]>0&&e.present[0]===0?n=14698300:e.present[0]>0&&e.present[1]>0&&(n=16777215)),this.objMesh.material.color.setHex(n),this.objMesh.material.opacity=.45+Math.sin(t*3)*.15,this.objMesh.rotation.y=t*.2}clearRoutes(){for(let t of[...this.routeGroup.children])this.routeGroup.remove(t),t.geometry&&t.geometry.dispose()}addRoute(t,e,n=!1,s=.7){if(t.length<2)return;let r=[];for(let E=0;E<t.length-1;E++){let[C,M]=t[E],[v,I]=t[E+1],k=Math.hypot(v-C,I-M),U=Math.max(1,Math.ceil(k/1.2));for(let O=0;O<U;O++)r.push([C+(v-C)*(O/U),M+(I-M)*(O/U)])}r.push(t[t.length-1]);let a=[],o=.35,c=(E,C)=>Math.max(this.map.getHeight(E,C),this.map.hasWater?this.map.waterLevel:-99)+o;for(let E=0;E<r.length-1;E++){if(n&&E%3===2)continue;let[C,M]=r[E],[v,I]=r[E+1],k=v-C,U=I-M,O=Math.hypot(k,U)||1,q=-U/O*s/2,W=k/O*s/2,j=c(C,M),G=c(v,I);a.push(C+q,j,M+W,v+q,G,I+W,C-q,j,M-W),a.push(v+q,G,I+W,v-q,G,I-W,C-q,j,M-W)}let l=r.length,[h,d]=r[l-1],[p,f]=r[Math.max(0,l-3)],x=h-p,_=d-f,g=Math.hypot(x,_)||1,m=x/g,S=_/g,T=c(h,d),u=s*2.4;a.push(h+m*u,T,d+S*u,h-S*u,T,d+m*u,h+S*u,T,d-m*u);let A=new xe;A.setAttribute("position",new re(a,3));let y=new Ot(A,new ve({color:e,transparent:!0,opacity:.8,depthWrite:!1,side:we}));y.renderOrder=4,this.routeGroup.add(y)}addMarker(t,e,n,s=3){let r=new wi(s-.45,s,32,1);r.rotateX(-Math.PI/2);let a=new Ot(r,new ve({color:n,transparent:!0,opacity:.85,depthWrite:!1,side:we}));return a.position.set(t,this.map.getHeight(t,e)+.45,e),a.renderOrder=4,this.routeGroup.add(a),a}addFlag(t,e,n,s){let r=new ye,a=new Ot(new Si(.07,.07,3,4),new ve({color:2763306}));a.position.y=1.5;let o=new Ot(new je(1.2,.8),new ve({color:n,side:we}));o.position.set(.6,2.6,0),r.add(a,o),r.position.set(t,this.map.getHeight(t,e),e),this.routeGroup.add(r)}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose()})}};function dn(i){let t=i>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}function Vh(i){let t=dn(i*7919+13),e=new Uint8Array(512),n=[...Array(256).keys()];for(let o=255;o>0;o--){let c=Math.floor(t()*(o+1));[n[o],n[c]]=[n[c],n[o]]}for(let o=0;o<512;o++)e[o]=n[o&255];let s=(o,c,l)=>{switch(o&7){case 0:return c+l;case 1:return-c+l;case 2:return c-l;case 3:return-c-l;case 4:return c;case 5:return-c;case 6:return l;default:return-l}},r=o=>o*o*o*(o*(o*6-15)+10),a=(o,c)=>{let l=Math.floor(o)&255,h=Math.floor(c)&255;o-=Math.floor(o),c-=Math.floor(c);let d=r(o),p=r(c),f=e[l]+h,x=e[l+1]+h,_=s(e[f],o,c)+d*(s(e[x],o-1,c)-s(e[f],o,c)),g=s(e[f+1],o,c-1)+d*(s(e[x+1],o-1,c-1)-s(e[f+1],o,c-1));return _+p*(g-_)};return a.fbm=(o,c,l=4)=>{let h=0,d=.5,p=1;for(let f=0;f<l;f++)h+=d*a(o*p,c*p),p*=2,d*=.5;return h},a}var Qe=(i,t,e)=>i<t?t:i>e?e:i,Ri=(i,t,e)=>i+(t-i)*e,ii=(i,t,e)=>{let n=Qe((e-i)/(t-i),0,1);return n*n*(3-2*n)};var ds=150,fs=100,ps=112,ms=80,Ci=1.5,$e=2,Hc=0,gs=1,da=2,fa=3,pa=4,Vc=5,Gc=6,ma=class{constructor(t,e,n){this.scenario=t,this.biome=e,this.seed=n,this.rng=dn(n),this.noise=Vh(n),this.nx=Math.round(ps*2/Ci)+1,this.nz=Math.round(ms*2/Ci)+1,this.heights=new Float32Array(this.nx*this.nz),this.ground=new Uint8Array(this.nx*this.nz),this.gw=ds/$e,this.gd=fs/$e;let s=this.gw*this.gd;this.blocked=new Uint8Array(s),this.cost=new Float32Array(s).fill(1),this.flags=new Uint8Array(s),this.clear=new Uint8Array(s),this.waterLevel=-.55,this.hasWater=!1,this.structures=[],this.decor={trees:[],rocks:[],tufts:[],flowers:[],tents:[],menhirs:[],bushes:[],fences:[],ruins:[],torches:[]},this.forests=[],this.roads=[],this.bridges=[],this.castle=null,this.gate=null,this.objective=null,this.zones=[null,null],this.camps=[null,null],this.fogDensity=t==="forest"?.0068:.0042,this.generate()}generate(){let t=this.rng,e=this.noise,n=this.scenario;if(this.phase=t.range(0,Math.PI*2),this.roadZ=t.range(-12,12),n==="assault"||n==="defend"){let r=n==="assault"?1:-1;this.castle={cx:48*r,cz:t.range(-6,6),half:19,owner:n==="assault"?1:0,face:-r,base:1.6}}if(n==="river"){this.hasWater=!0,this.river={amp:t.range(5,9),freq:t.range(.035,.06),ph:this.phase,half:5.2};let r=t.range(-22,22);this.bridgeZ=r;let a=[],o=r>0?t.range(-40,-18):t.range(18,40);if(a.push(o),t.chance(.6)){let c=t.range(-40,40);Math.abs(c-r)>16&&Math.abs(c-o)>16&&a.push(c)}this.fords=a}n==="canyon"&&(this.canyon={amp:t.range(8,13),ph:this.phase,pinch:t.range(-15,15),top:12},this.biomeTint=!0),n==="hill"&&(this.objective={type:"hill",x:t.range(-5,5),z:t.range(-5,5),r:9,score:[0,0],need:100}),(n==="castle"||this.castle)&&(this.hasWater=!0);let s=(r,a)=>this.heightFn(r,a);for(let r=0;r<this.nz;r++)for(let a=0;a<this.nx;a++){let o=-ps+a*Ci,c=-ms+r*Ci,l=r*this.nx+a,[h,d]=s(o,c);this.heights[l]=h,this.ground[l]=d}this.placeStructures(),this.buildNav(),this.placeDecor()}canyonCenter(t){let e=this.canyon;return Math.sin(t*.035+e.ph)*e.amp+Math.sin(t*.09+e.ph*2)*2.5}canyonHalf(t){let e=this.canyon;return 15-6*Math.exp(-(((t-e.pinch)/16)**2))+this.noise(t*.08,3.3)*2.5}riverX(t){let e=this.river;return Math.sin(t*e.freq+e.ph)*e.amp+this.noise(t*.05,9.1)*3}heightFn(t,e){let n=this.noise,s=n.fbm(t*.022,e*.022,4)*3.2+n(t*.09,e*.09)*.35,r=Hc,a=Math.max(0,Math.abs(t)-74),o=Math.max(0,Math.abs(e)-49),c=Math.sqrt(a*a+o*o),l=0;c>0&&(l=Math.pow(c/12,1.4)*(6+10*(.5+.5*n(t*.05,e*.05))));let h=this.scenario;if(h==="canyon"){let d=this.canyonCenter(t),p=this.canyonHalf(t),f=Math.abs(e-d),x=ii(p,p+3.5,f),_=this.canyon.top+n.fbm(t*.03,e*.03,3)*4,g=n.fbm(t*.04,e*.04,3)*1.2,m=Math.floor(x*4)/4*.35+x*.65;s=Ri(g,_,m),r=x>.12?x>.95?Hc:fa:Gc,f<3&&Math.abs(t)<70&&(r=gs),l*=.5}else if(h==="river"){let d=this.riverX(e),p=Math.abs(t-d),f=this.river.half+n(e*.1,1.7)*1,x=1-ii(f-1.5,f+2.5,p),_=-2.2;for(let g of this.fords){let m=Math.abs(e-g);m<5&&(_=Ri(-.2,_,ii(2.5,5,m)))}s=Ri(s*.6,_,x),x>.25?r=pa:x>.02&&(r=da)}else if(h==="hill"){let d=this.objective,p=Math.hypot(t-d.x,e-d.z),f=7.5*Math.exp(-((p/21)**2));s=s*.8+f,p<11&&(s=Ri(s,7.5+n(t*.1,e*.1)*.2,ii(11,8,p)),p<10&&(r=gs))}else h==="forest"&&(s=s*1.2);if(this.castle){let d=this.castle,p=Math.abs(t-d.cx),f=Math.abs(e-d.cz),x=Math.max(p,f),_=ii(d.half+12,d.half+5,x);s=Ri(s,d.base,_);let g=d.half+3,m=d.half+7.5;if(x>g-1&&x<m+1){let S=ii(g-1,g+1,x)*(1-ii(m-1,m+1,x));s=Ri(s,-2,S),S>.3?r=pa:S>.02&&(r=da)}x<d.half+1&&(r=gs)}if(h!=="canyon"&&Math.abs(t)<74){let d=this.roadZ+Math.sin(t*.05+this.phase)*6;Math.abs(e-d)<1.6&&r===Hc&&(r=gs)}return s+=l,c>6&&s>14&&this.biome!=="desert"?r=Vc:c>3&&(r=l>3?fa:r),[s,r]}terrainHeight(t,e){let n=(t+ps)/Ci,s=(e+ms)/Ci,r=Math.floor(n),a=Math.floor(s);r=Qe(r,0,this.nx-2),a=Qe(a,0,this.nz-2);let o=Qe(n-r,0,1),c=Qe(s-a,0,1),l=this.heights,h=this.nx,d=l[a*h+r],p=l[a*h+r+1],f=l[(a+1)*h+r],x=l[(a+1)*h+r+1];return o+c<=1?d+(p-d)*o+(f-d)*c:x+(f-x)*(1-o)+(p-x)*(1-c)}getHeight(t,e){let n=this.terrainHeight(t,e);for(let s of this.bridges){let r=(t-s.x)*s.cos+(e-s.z)*s.sin,a=-(t-s.x)*s.sin+(e-s.z)*s.cos;if(Math.abs(r)<s.len/2&&Math.abs(a)<s.width/2){let o=1-(r/(s.len/2))**2;n=Math.max(n,s.y+o*s.arch)}}return this.hasWater&&n<this.waterLevel-.35&&(n=Math.max(n,this.waterLevel-.35)),n}placeStructures(){let t=this.rng,e=this.castle;if(e){let l=e.half,h=e.face,d=e.cx+h*l;e.gateX=d;let p=3.4,f=(g,m,S,T)=>this.structures.push({kind:"wall",x:g,z:m,w:S,d:T,h:6.2});f(e.cx-h*l,e.cz,2.2,l*2),f(e.cx,e.cz-l,l*2,2.2),f(e.cx,e.cz+l,l*2,2.2);let x=l-p;f(d,e.cz-p-x/2,2.2,x),f(d,e.cz+p+x/2,2.2,x);for(let g of[-1,1])for(let m of[-1,1])this.structures.push({kind:"tower",x:e.cx+g*l,z:e.cz+m*l,r:3.2,h:9.5});this.structures.push({kind:"tower",x:d,z:e.cz-p-1.4,r:2.4,h:8.4,small:!0}),this.structures.push({kind:"tower",x:d,z:e.cz+p+1.4,r:2.4,h:8.4,small:!0}),this.gate={x:d,z:e.cz,w:p*2,owner:e.owner,hp:520,maxHp:520,face:h,alive:!0,shake:0},this.structures.push({kind:"gate",ref:this.gate,x:d,z:e.cz,w:p*2,h:5.4});let _=e.cx-h*(l-8);this.structures.push({kind:"keep",x:_,z:e.cz,w:9,d:9,h:13}),this.structures.push({kind:"house",x:e.cx-h*(l-4),z:e.cz-l+5,rot:0}),this.structures.push({kind:"house",x:e.cx-h*(l-4),z:e.cz+l-5,rot:Math.PI}),this.structures.push({kind:"well",x:e.cx+h*2,z:e.cz+8}),this.bridges.push({x:d+h*5.5,z:e.cz,len:12,width:6.4,y:e.base+.15,arch:.2,cos:1,sin:0,wood:!0}),this.objective={type:"keep",x:_+h*9.5,z:e.cz,r:8,hold:0,need:20,owner:e.owner};for(let g of[-1,1])this.decor.torches.push({x:d+h*1.6,z:e.cz+g*(p+.2),y:e.base+3.5})}if(this.scenario==="river"){let o=this.bridgeZ,c=this.riverX(o),l=(this.riverX(o+1)-this.riverX(o-1))/2,h=Math.atan(l)*-1;this.bridges.push({x:c,z:o,len:22,width:5.6,y:.1,arch:1.4,cos:Math.cos(h),sin:Math.sin(h),wood:!1})}if(this.scenario==="hill"){let o=this.objective,c=9;for(let l=0;l<c;l++){let h=l/c*Math.PI*2+.3;this.decor.menhirs.push({x:o.x+Math.cos(h)*8.6,z:o.z+Math.sin(h)*8.6,h:t.range(2.4,3.6),rot:h,fallen:t.chance(.15)})}this.decor.menhirs.push({x:o.x,z:o.z,h:1.2,rot:0,altar:!0})}if(this.scenario==="canyon"){let o=this.canyon.pinch+t.range(-6,6),c=this.canyonCenter(o);this.decor.ruins.push({x:o,z:c+(t.chance(.5)?-1:1)*(this.canyonHalf(o)-4),r:2.6})}let n=24,s=60,r={x0:-73,x1:-73+n,z0:-s/2,z1:s/2},a={x0:73-n,x1:73,z0:-s/2,z1:s/2};if(this.zones=[r,a],e){let o=e.half-2.2,c={x0:e.cx-o,x1:e.cx+o,z0:e.cz-o,z1:e.cz+o,castle:!0};this.zones[e.owner]=c;let l=1-e.owner;this.zones[l]=l===0?{x0:-73,x1:-45,z0:-32,z1:32}:{x0:45,x1:73,z0:-32,z1:32}}this.scenario==="canyon"&&(this.zones=[{x0:-73,x1:-52,z0:-40,z1:40},{x0:52,x1:73,z0:-40,z1:40}]);for(let o=0;o<2;o++){let c=this.zones[o],l=o===0?-71:71,h=(c.z0+c.z1)/2;if(this.scenario==="canyon"&&(h=this.canyonCenter(l)),this.camps[o]={x:l,z:h},!(e&&e.owner===o))for(let d=0;d<4;d++){let p=l-(o===0?-1:1)*t.range(-1,2)+(o===0?-1:1)*1.5,f=h+(d-1.5)*6+t.range(-1,1);this.decor.tents.push({x:o===0?-76-t.range(0,3):76+t.range(0,3),z:f,side:o,rot:t.range(-.4,.4)+(o===0?Math.PI/2:-Math.PI/2),big:d===1})}}}cellIndex(t,e){let n=Math.floor((t+ds/2)/$e),s=Math.floor((e+fs/2)/$e);return n<0||s<0||n>=this.gw||s>=this.gd?-1:s*this.gw+n}cellCenter(t){let e=t%this.gw,n=t/this.gw|0;return[-ds/2+(e+.5)*$e,-fs/2+(n+.5)*$e]}buildNav(){let t=this.gw,e=this.gd;for(let s=0;s<e;s++)for(let r=0;r<t;r++){let a=s*t+r,o=-ds/2+r*$e,c=-fs/2+s*$e,l=1e9,h=-1e9,d=0,p=0;for(let x=0;x<=2;x++)for(let _=0;_<=2;_++){let g=this.terrainHeight(o+x,c+_);l=Math.min(l,g),h=Math.max(h,g),d+=g,p++}let f=d/p;(r===0||s===0||r===t-1||s===e-1)&&(this.blocked[a]=1),h-l>2.6&&(this.blocked[a]=1),this.scenario==="canyon"&&f>5&&(this.blocked[a]=1),this.hasWater&&f<this.waterLevel-.9&&(this.blocked[a]=1),this.hasWater&&f<this.waterLevel+.1&&f>=this.waterLevel-.9&&(this.flags[a]|=2,this.cost[a]+=1.6)}for(let s of this.bridges)for(let r=0;r<t*e;r++){let[a,o]=this.cellCenter(r),c=(a-s.x)*s.cos+(o-s.z)*s.sin,l=-(a-s.x)*s.sin+(o-s.z)*s.cos;Math.abs(c)<s.len/2+.5&&Math.abs(l)<s.width/2-.3&&(this.blocked[r]=0,this.flags[r]=this.flags[r]&-3|4,this.cost[r]=1)}for(let s of this.structures)if(s.kind==="wall"||s.kind==="keep"||s.kind==="house"){let r=(s.w||5)/2+.9,a=(s.d||4)/2+.9;this.markRect(s.x-r,s.z-a,s.x+r,s.z+a,o=>{this.blocked[o]=1})}else if(s.kind==="tower"||s.kind==="well"){let r=(s.r||1.2)+.8;this.markRect(s.x-r,s.z-r,s.x+r,s.z+r,a=>{let[o,c]=this.cellCenter(a);Math.hypot(o-s.x,c-s.z)<r+.6&&(this.blocked[a]=1)})}let n=this.castle;if(n){let s=n.half-1.2;this.markRect(n.cx-s,n.cz-s,n.cx+s,n.cz+s,a=>{this.flags[a]|=16});let r=this.gate;r.cells=[],this.markRect(r.x-1.6,r.z-r.w/2+.4,r.x+1.6,r.z+r.w/2-.4,a=>{this.blocked[a]=0,this.flags[a]|=8,r.cells.push(a)})}for(let s of this.decor.menhirs){if(s.altar)continue;let r=this.cellIndex(s.x,s.z);r>=0&&(this.blocked[r]=1)}for(let s of this.decor.ruins)this.markRect(s.x-s.r,s.z-s.r,s.x+s.r,s.z+s.r,r=>{this.blocked[r]=1});this.makeForests();for(let s of this.forests)this.markRect(s.x-s.r,s.z-s.r,s.x+s.r,s.z+s.r,r=>{let[a,o]=this.cellCenter(r);Math.hypot((a-s.x)/s.r,(o-s.z)/s.r*s.rx)<1&&!this.blocked[r]&&(this.flags[r]|=1,this.cost[r]+=.6)});if(this.scenario==="canyon"){let s=this.rng;for(let r=0;r<7;r++){let a=s.range(-44,44),c=this.canyonCenter(a)+s.range(-1,1)*(this.canyonHalf(a)-5),l=s.range(1.4,2.6);this.decor.rocks.push({x:a,z:c,s:l*1.35,big:!0,rot:s()*6}),this.markRect(a-l,c-l,a+l,c+l,h=>{let[d,p]=this.cellCenter(h);Math.hypot(d-a,p-c)<l+.4&&(this.blocked[h]=1)})}}this.computeClearance()}makeForests(){let t=this.rng,e=this.scenario==="forest"?t.int(11,14):this.scenario==="canyon"?0:t.int(2,4),n=0;for(;this.forests.length<e&&n++<300;){let s=t.range(-44,44),r=t.range(-44,44),a=this.scenario==="forest"?t.range(6,11):t.range(5,8);if(this.nearStructure(s,r,a+4)||this.objective&&Math.hypot(s-this.objective.x,r-this.objective.z)<a+12||this.scenario==="river"&&Math.abs(s-this.riverX(r))<a+7||this.forests.some(c=>Math.hypot(c.x-s,c.z-r)<c.r+a+3))continue;let o=this.cellIndex(s,r);o<0||this.blocked[o]||this.forests.push({x:s,z:r,r:a,rx:t.range(.8,1.25)})}}nearStructure(t,e,n){if(this.castle&&Math.max(Math.abs(t-this.castle.cx),Math.abs(e-this.castle.cz))<this.castle.half+9+n*.3)return!0;for(let s of this.bridges)if(Math.hypot(t-s.x,e-s.z)<n+s.len/2)return!0;return!!(this.scenario==="river"&&this.fords.some(s=>Math.abs(e-s)<n&&Math.abs(t-this.riverX(s))<n+6))}markRect(t,e,n,s,r){let a=Math.max(0,Math.floor((t+ds/2)/$e)),o=Math.min(this.gw-1,Math.floor((n+ds/2)/$e)),c=Math.max(0,Math.floor((e+fs/2)/$e)),l=Math.min(this.gd-1,Math.floor((s+fs/2)/$e));for(let h=c;h<=l;h++)for(let d=a;d<=o;d++)r(h*this.gw+d)}computeClearance(){let t=this.gw,e=this.gd,n=t*e,s=this.clear;s.fill(255);let r=new Int32Array(n),a=0,o=0;for(let c=0;c<n;c++)this.blocked[c]&&(s[c]=0,r[o++]=c);for(;a<o;){let c=r[a++],l=c%t,h=c/t|0;for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){let f=l+p,x=h+d;if(f<0||x<0||f>=t||x>=e)continue;let _=x*t+f;s[_]>s[c]+1&&(s[_]=s[c]+1,r[o++]=_)}}}clearanceAt(t,e){let n=this.cellIndex(t,e);return n<0?0:this.clear[n]*$e-1}isPassable(t,e,n=-1){let s=this.cellIndex(t,e);return!(s<0||this.blocked[s]||this.flags[s]&8&&this.gate&&this.gate.alive&&n!==this.gate.owner)}flagAt(t,e){let n=this.cellIndex(t,e);return n<0?0:this.flags[n]}inCastle(t,e){let n=this.castle;return!!n&&Math.abs(t-n.cx)<n.half-.8&&Math.abs(e-n.cz)<n.half-.8}placeDecor(){let t=this.rng,e=this.decor,n=this.biome,s=(a,o,c)=>this.zones.some(l=>a>l.x0-c&&a<l.x1+c&&o>l.z0-c&&o<l.z1+c);for(let a of this.forests){let o=Math.round(a.r*a.r*.22);for(let c=0;c<o;c++){let l=t()*Math.PI*2,h=Math.sqrt(t())*a.r,d=a.x+Math.cos(l)*h,p=a.z+Math.sin(l)*h/a.rx,f=this.cellIndex(d,p);f<0||this.blocked[f]||e.trees.push({x:d,z:p,s:t.range(.8,1.35),kind:this.treeKind(),rot:t()*6})}for(let c=0;c<o*.4;c++){let l=t()*Math.PI*2,h=Math.sqrt(t())*(a.r+2);e.bushes.push({x:a.x+Math.cos(l)*h,z:a.z+Math.sin(l)*h,s:t.range(.5,1)})}}for(let a=0;a<70;a++){let o=t.range(-74,74),c=t.range(-49,49),l=this.cellIndex(o,c);l<0||this.blocked[l]||this.flags[l]&30||s(o,c,3)||this.nearStructure(o,c,3)||this.objective&&Math.hypot(o-this.objective.x,c-this.objective.z)<12||this.scenario==="canyon"&&this.terrainHeight(o,c)>3||(t.chance(.55)?e.trees.push({x:o,z:c,s:t.range(.8,1.3),kind:this.treeKind(),rot:t()*6}):e.rocks.push({x:o,z:c,s:t.range(.5,1.1),rot:t()*6}))}for(let a=0;a<420;a++){let o=t.range(-ps+4,ps-4),c=t.range(-ms+4,ms-4);Math.abs(o)<77&&Math.abs(c)<52||this.terrainHeight(o,c)>20||(t.chance(.72)?e.trees.push({x:o,z:c,s:t.range(.9,1.6),kind:this.treeKind(!0),rot:t()*6}):e.rocks.push({x:o,z:c,s:t.range(.8,2.2),rot:t()*6}))}if(this.scenario==="canyon")for(let a=0;a<90;a++){let o=t.range(-74,74),c=t.range(-49,49);this.terrainHeight(o,c)<10||(t.chance(.5)?e.trees.push({x:o,z:c,s:t.range(.8,1.2),kind:this.treeKind(!0),rot:t()*6}):e.rocks.push({x:o,z:c,s:t.range(.6,1.8),rot:t()*6}))}let r=n==="desert"?120:260;for(let a=0;a<r;a++){let o=t.range(-80,80),c=t.range(-54,54),l=this.cellIndex(o,c);l>=0&&(this.blocked[l]||this.flags[l]&22)||this.terrainHeight(o,c)<this.waterLevel+.2&&this.hasWater||(t.chance(.2)?e.flowers.push({x:o,z:c,c:t.int(0,3)}):e.tufts.push({x:o,z:c,s:t.range(.6,1.2),rot:t()*6}))}if(this.scenario!=="canyon")for(let a=0;a<3;a++){let o=t.range(-40,40),c=this.roadZ+Math.sin(o*.05+this.phase)*6+(t.chance(.5)?3:-3),l=this.cellIndex(o,c);l<0||this.blocked[l]||this.nearStructure(o,c,6)||e.fences.push({x:o,z:c,len:t.int(3,6),rot:Math.atan2(Math.cos(o*.05+this.phase)*.3,1)})}}treeKind(t=!1){let e=this.biome,n=this.rng;return e==="desert"?n.chance(.6)?"palm":"cactus":e==="winter"?n.chance(.8)?"pine":"bare":this.scenario==="forest"?n.chance(.55)?"pine":"oak":n.chance(t?.5:.35)?"pine":n.chance(.85)?"oak":"birch"}get extent(){return{EXT_X:ps,EXT_Z:ms,STEP:Ci}}};function Wc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new xe,l=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let p=0;p<i.length;++p){let f=i[p].index;for(let x=0;x<f.count;++x)d.push(f.getX(x)+h);h+=i[p].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Gh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<d;++p){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][p]);let x=Gh(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function Gh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ge(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let p=0,f=h.count;p<f;p++)for(let x=0;x<e;x++){let _=h.getComponent(p,x);o.setComponent(p+d,x,_)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Wh=new jt,Xh=new Ye,qh=new Le,M0=new F,b0=new F;function si(i){let t=i.index?i.toNonIndexed():i;return t.deleteAttribute("uv"),t.attributes.uv1&&t.deleteAttribute("uv1"),t.computeVertexNormals(),t}function It(i,t=0,e=0,n=0,s=0,r=0,a=0,o=1,c=1,l=1){return qh.set(s,r,a),Xh.setFromEuler(qh),Wh.compose(M0.set(t,e,n),Xh,b0.set(o,c,l)),i.applyMatrix4(Wh),i}var te=(i,t,e)=>si(new hn(i,t,e)),Mn=(i,t,e,n=6)=>si(new Si(i,t,e,n,1)),Ii=(i,t,e=6)=>si(new Kr(i,t,e,1)),ga=(i,t=0)=>si(new as(i,t)),S0=i=>si(new jr(i,0)),Fe=i=>Wc(i.map(t=>t.index?si(t):t),!1);function Yh(){let i={};return i.leg=It(te(.16,.78,.2),0,-.39,0),i.torso=Fe([It(Mn(.25,.2,.62,6),0,0,0),It(te(.72,.14,.2),0,.26,0)]),i.chest=It(Mn(.28,.24,.36,6),0,.1,0),i.skirt=It(Mn(.22,.3,.26,6),0,0,0),i.head=ga(.17,0),i.helmRoman=Fe([si(new os(.2,6,3,0,Math.PI*2,0,Math.PI/2)),It(te(.44,.04,.12),0,0,-.14)]),i.crest=It(te(.06,.16,.42),0,.26,0),i.plume=Fe([It(te(.07,.3,.46),0,.3,-.02),It(te(.07,.2,.22),0,.28,-.28,.5)]),i.helmCone=Fe([Ii(.21,.36,6),It(te(.05,.16,.04),0,-.1,.19)]),i.horns=Fe([It(Ii(.05,.28,5),.2,.06,0,0,0,-1),It(Ii(.05,.28,5),-.2,.06,0,0,0,1)]),i.hood=It(Ii(.22,.42,5),0,.06,-.02),i.scutum=It(te(.62,.95,.08),0,0,0),i.boss=It(ga(.08,0),0,0,.05),i.round=It(Mn(.36,.36,.07,8),0,0,0,Math.PI/2),i.buckler=It(Mn(.24,.24,.06,7),0,0,0,Math.PI/2),i.tower=It(te(.76,1.3,.1),0,0,0),i.towerRim=Fe([It(te(.8,.07,.11),0,.62,0),It(te(.8,.07,.11),0,-.62,0),It(te(.07,1.3,.11),0,0,0)]),i.sword=Fe([It(te(.06,.04,.62),0,0,.38),It(te(.2,.05,.05),0,0,.06)]),i.axe=Fe([It(te(.05,.05,.75),0,0,.3),It(te(.04,.26,.18),0,.05,.62)]),i.pike=Fe([It(Mn(.028,.028,4.3,4),0,0,1.2,Math.PI/2),It(Ii(.06,.3,4),0,0,3.45,Math.PI/2)]),i.spear=Fe([It(Mn(.03,.03,3,4),0,0,.9,Math.PI/2),It(Ii(.06,.28,4),0,0,2.5,Math.PI/2)]),i.bow=It(si(new ta(.46,.03,3,8,Math.PI)),0,0,0,0,Math.PI/2,Math.PI/2),i.quiver=It(Mn(.08,.07,.55,5),0,0,0,.35),i.cape=It(te(.56,.9,.05),0,-.45,0),i.horse=Fe([It(te(.56,.62,1.5),0,0,0),It(te(.36,.72,.4),0,.42,.72,-.55),It(te(.3,.3,.62),0,.72,1.08,.35),It(te(.12,.5,.12),0,.05,-.8,.6),It(te(.08,.14,.08),.1,.92,.9),It(te(.08,.14,.08),-.1,.92,.9)]),i.mane=Fe([It(te(.1,.62,.36),0,.55,.62,-.55),It(te(.14,.52,.14),0,.02,-.82,.5)]),i.saddle=Fe([It(te(.66,.36,.72),0,.12,-.02),It(te(.3,.1,.4),0,.33,-.05)]),i.hleg=Fe([It(te(.13,.8,.14),.18,-.4,0),It(te(.13,.8,.14),-.18,-.4,0)]),i.pole=It(Mn(.04,.04,3.4,4),0,1.7,0),i.eagle=Fe([It(ga(.14,0),0,3.55,0),It(te(.5,.08,.1),0,3.6,0,0,0,.3),It(te(.5,.08,.1),0,3.6,0,0,0,-.3)]),i}function $h(i,t){let e=i===0,n=[],s=(c,l,h,d,p,f="none",x=0,_=0,g=0)=>n.push({g:c,role:l,p:[h,d,p],anim:f,r:[x,_,g]}),r=t==="cavalry",a=r?.95:0;switch(r?(s("horse","horse",0,1.15,0,"horse"),s("mane","mane",0,1.15,0,"horse"),s("saddle","primary",0,1.47,-.05,"horse"),s("hleg","horse",0,.85,.55,"hlegF"),s("hleg","horse",0,.85,-.55,"hlegB"),s("leg","dark",.3,.78+a,.05,"ride",-1.2,0,.35),s("leg","dark",-.3,.78+a,.05,"ride",-1.2,0,-.35)):(s("leg","dark",.11,.78,0,"legL"),s("leg","dark",-.11,.78,0,"legR")),s("torso",t==="archer"?e?"hood":"cloth":"primary",0,1.08+a,0),t!=="archer"&&s("skirt",e?"primary":"dark",0,.8+a,0),(t==="legion"||t==="guard"||t==="cavalry"||t==="pike")&&s("chest","metal",0,1.08+a,0),s("head","skin",0,1.56+a,0),t==="archer"?(s("hood",e?"hood":"cloth",0,1.62+a,0),s("quiver","wood",-.1,1.2+a,-.22),s("bow","wood",.3,1.25+a,.32,"bow")):e?(s("helmRoman","helm",0,1.6+a,0),s(t==="guard"||t==="cavalry"?"plume":"crest","crest",0,1.6+a,0)):(s("helmCone","helm",0,1.72+a,0),t!=="pike"&&s("horns","crest",0,1.68+a,0)),t){case"legion":e?(s("scutum","primary",.34,1.02,.24,"shield"),s("boss","secondary",.34,1.02,.29,"shield"),s("sword","metal",-.34,1.12,.1,"arm")):(s("round","primary",.36,1.1,.22,"shield"),s("boss","metal",.36,1.1,.27,"shield"),s("axe","metal",-.34,1.12,.1,"arm"));break;case"pike":s("buckler",e?"secondary":"primary",.32,1.12,.2,"shield"),s("pike","wood",-.28,1.2,0,"pike");break;case"guard":s("tower","primary",.36,1.05,.26,"shield"),s("towerRim","secondary",.36,1.05,.26,"shield"),s("sword","metal",-.34,1.12,.1,"arm"),s("cape",e?"crest":"dark",0,1.36,-.2);break;case"cavalry":s("round","primary",.36,1.1+a,.05,"shield"),s("spear","wood",-.32,1.2+a,0,"lance"),s("cape",e?"crest":"primary",0,1.36+a,-.2);break}return n}var xa=class{constructor(){this.geos=[]}add(t,e,n=0,s=0,r=0,a=0,o=0,c=0,l=1,h=1,d=1){let p=t.clone();It(p,n,s,r,a,o,c,l,h,d);let f=p.attributes.position.count,x=new Float32Array(f*3),_=e instanceof St?e:new St(e);for(let g=0;g<f;g++)x[g*3]=_.r,x[g*3+1]=_.g,x[g*3+2]=_.b;return p.setAttribute("color",new ge(x,3)),this.geos.push(p),p}build(t){if(!this.geos.length)return null;let e=Wc(this.geos,!1);this.geos=[];let n=new Ot(e,t);return n.castShadow=!0,n.receiveShadow=!0,n}},at={cone:(i,t,e=6)=>Ii(i,t,e),cyl:(i,t,e,n=6)=>Mn(i,t,e,n),box:te,ico:ga,dode:S0};function _e(i,t,e=.06){let n=new St(i),s=1+(t()-.5)*2*e;return n.r*=s,n.g*=s,n.b*=s,n}function Zh(i,t){let e=vn[i.biome],n=dn(i.seed+99),s=new ye,r=new Ee({vertexColors:!0,flatShading:!0}),a={group:s,dynamic:[],gateMesh:null,water:null,clouds:[],torches:[],flags:[]};{let{EXT_X:u,EXT_Z:A,STEP:y}=i.extent,E=i.nx,C=i.nz,M=(E-1)*(C-1)*2,v=new Float32Array(M*9),I=new Float32Array(M*9),k=i.heights,U=i.ground,O=new St,q=e.grass.map(st=>new St(st)),W=(e.cliff||e.rock).map(st=>new St(st)),j=e.rock.map(st=>new St(st)),G=new St(e.dirt),it=new St(e.sand),ct=new St(16054266),xt=0,Ct=i.noise,Jt=(st,et,At,Pt,zt,ae,$t,de,L)=>{let Ue=k[et*E+st],Gt=k[Pt*E+At],Wt=k[ae*E+zt],Et=Vt=>-u+Vt*y,ie=Vt=>-A+Vt*y,ht=[Et(st),Ue,ie(et),Et(At),Gt,ie(Pt),Et(zt),Wt,ie(ae)];v.set(ht,xt);let R=ht[3]-ht[0],b=ht[4]-ht[1],B=ht[5]-ht[2],Z=ht[6]-ht[0],K=ht[7]-ht[1],$=ht[8]-ht[2],yt=B*Z-R*$,ot=b*$-B*K,mt=R*K-b*Z,Zt=Math.hypot(ot,yt,mt)||1;yt=Math.abs(yt/Zt);let tt=(ht[0]+ht[3]+ht[6])/3,gt=(ht[2]+ht[5]+ht[8])/3,Tt=(Ue+Gt+Wt)/3,Rt=[0,0,0,0,0,0,0];Rt[$t]++,Rt[de]++,Rt[L]++;let ut=Rt.indexOf(Math.max(...Rt)),Ht=Ct(tt*.06,gt*.06);if(ut===Vc||Tt>22&&i.biome!=="desert")O.copy(ct);else if(yt<.72||ut===fa)O.copy(yt<.55?W[(Math.floor(Tt*.7)&65535)%W.length]:j[Math.abs(Math.floor(Ht*5))%j.length]),i.scenario==="canyon"&&O.lerp(new St(e.cliff[0]),.4);else if(ut===pa)O.copy(it).multiplyScalar(.75);else if(ut===da)O.copy(it);else if(ut===gs)O.copy(G).lerp(q[0],.12);else if(ut===Gc)O.copy(it).lerp(G,.4+Ht*.4);else{let Vt=Math.floor((Ht*.5+.5)*q.length*1.3)%q.length;O.copy(q[Math.max(0,Vt)]),Tt>14&&i.biome!=="desert"&&O.lerp(ct,Math.min(1,(Tt-14)/8))}let Dt=.94+n()*.1;O.r*=Dt,O.g*=Dt,O.b*=Dt;for(let Vt=0;Vt<3;Vt++)I[xt+Vt*3]=O.r,I[xt+Vt*3+1]=O.g,I[xt+Vt*3+2]=O.b;xt+=9};for(let st=0;st<C-1;st++)for(let et=0;et<E-1;et++){let At=U[st*E+et],Pt=U[st*E+et+1],zt=U[(st+1)*E+et],ae=U[(st+1)*E+et+1];Jt(et,st,et,st+1,et+1,st,At,zt,Pt),Jt(et+1,st+1,et+1,st,et,st+1,ae,Pt,zt)}let Y=new xe;Y.setAttribute("position",new ge(v,3)),Y.setAttribute("color",new ge(I,3)),Y.computeVertexNormals();let Q=new Ot(Y,r);Q.receiveShadow=!0,Q.name="terrain",s.add(Q),a.terrain=Q}if(i.hasWater){let u=new je(230,170,46,34).toNonIndexed();u.rotateX(-Math.PI/2);let A=new Ee({color:e.water,transparent:!0,opacity:.82,flatShading:!0});i.biome==="winter"&&A.color.lerp(new St(15266554),.35);let y=new Ot(u,A);y.position.y=i.waterLevel,y.receiveShadow=!0,s.add(y),a.water=y,a.waterBase=Float32Array.from(u.attributes.position.array)}let o=new xa,c=i.biome==="desert"?13808778:11840930,l=i.biome==="desert"?12097130:9406590,h=i.castle?On[i.castle.owner].colors.primary:9058858,d=(u,A,y,E,C,M=1.6,v=.8)=>{let I=Math.hypot(y-u,E-A),k=Math.floor(I/M);for(let U=0;U<=k;U++){let O=U/k;o.add(at.box(v,.9,v),l,u+(y-u)*O,C+.45,A+(E-A)*O)}};for(let u of i.structures){let A=i.terrainHeight(u.x,u.z);if(u.kind==="wall"){let y=Math.min(A,i.castle?i.castle.base:A)-1.5,E=u.h+(i.castle.base-y);o.add(at.box(u.w,E,u.d),_e(c,n,.03),u.x,y+E/2,u.z);let C=y+E;u.w>u.d?(d(u.x-u.w/2,u.z-u.d/2+.3,u.x+u.w/2,u.z-u.d/2+.3,C),d(u.x-u.w/2,u.z+u.d/2-.3,u.x+u.w/2,u.z+u.d/2-.3,C)):(d(u.x-u.w/2+.3,u.z-u.d/2,u.x-u.w/2+.3,u.z+u.d/2,C),d(u.x+u.w/2-.3,u.z-u.d/2,u.x+u.w/2-.3,u.z+u.d/2,C)),o.add(at.box(u.w+.2,.35,u.d+.2),l,u.x,y+E-1.2,u.z)}else if(u.kind==="tower"){let y=A-2,E=u.h+(i.castle.base-y)+1.5;o.add(at.cyl(u.r,u.r*1.12,E,8),_e(c,n,.03),u.x,y+E/2,u.z),o.add(at.cyl(u.r+.35,u.r+.35,.6,8),l,u.x,y+E,u.z);for(let C=0;C<8;C++){let M=C/8*Math.PI*2;o.add(at.box(.8,.9,.8),l,u.x+Math.cos(M)*(u.r+.1),y+E+.75,u.z+Math.sin(M)*(u.r+.1),0,-M)}o.add(at.cone(u.r+.6,u.small?3:4.2,8),_e(h,n,.05),u.x,y+E+(u.small?2.3:2.9),u.z);for(let C=0;C<3;C++){let M=n()*Math.PI*2;o.add(at.box(.25,.9,.3),2762274,u.x+Math.cos(M)*u.r,y+E*(.5+C*.12),u.z+Math.sin(M)*u.r,0,-M)}a.flags.push({x:u.x,y:y+E+(u.small?4:5.1),z:u.z,side:i.castle.owner,size:u.small?.7:1})}else if(u.kind==="gate"){let y=u.ref,E=i.castle.base;o.add(at.box(2.6,2.2,u.w+1),c,u.x,E+6.2,u.z),d(u.x,u.z-u.w/2,u.x,u.z+u.w/2,E+7.3,1.4,.7),o.add(at.box(2.8,.5,u.w+1.2),l,u.x,E+5.1,u.z);let C=new ye,M=new Ee({color:7030054,flatShading:!0}),v=new Ee({color:3814962,flatShading:!0});for(let I=0;I<6;I++){let k=new Ot(at.box(.35,5,u.w/6-.06),M);k.position.set(0,2.5,-u.w/2+(I+.5)*(u.w/6)),k.castShadow=!0,C.add(k)}for(let I of[1.2,3.8]){let k=new Ot(at.box(.45,.28,u.w),v);k.position.set(0,I,0),C.add(k)}C.position.set(u.x,E,u.z),s.add(C),a.gateMesh=C}else if(u.kind==="keep"){let y=A-1;o.add(at.box(u.w,u.h,u.d),_e(c,n,.02),u.x,y+u.h/2,u.z),o.add(at.box(u.w+.8,.6,u.d+.8),l,u.x,y+u.h,u.z),d(u.x-u.w/2,u.z-u.d/2,u.x+u.w/2,u.z-u.d/2,y+u.h+.3,1.5),d(u.x-u.w/2,u.z+u.d/2,u.x+u.w/2,u.z+u.d/2,y+u.h+.3,1.5),d(u.x-u.w/2,u.z-u.d/2,u.x-u.w/2,u.z+u.d/2,y+u.h+.3,1.5),d(u.x+u.w/2,u.z-u.d/2,u.x+u.w/2,u.z+u.d/2,y+u.h+.3,1.5),o.add(at.cyl(1.8,1.8,4,8),c,u.x+u.w/2-1.5,y+u.h+2,u.z-u.d/2+1.5),o.add(at.cone(2.4,3.4,8),h,u.x+u.w/2-1.5,y+u.h+5.7,u.z-u.d/2+1.5),o.add(at.box(1.6,2.6,.3),3811868,u.x-i.castle.face*-u.w/2,y+1.3,u.z,0,Math.PI/2);for(let E=0;E<4;E++)o.add(at.box(.3,1.2,.6),2762274,u.x+(E%2?1:-1)*u.w/2,y+u.h*.7,u.z+(E<2?-2:2));a.flags.push({x:u.x,y:y+u.h+6,z:u.z,side:i.castle.owner,size:1.8,big:!0}),o.add(at.cyl(.08,.08,6,4),5917242,u.x,y+u.h+3,u.z)}else u.kind==="house"?(o.add(at.box(5,3,4),15129798,u.x,A+1.5,u.z,0,u.rot),o.add(at.box(5.2,.4,4.2),7031344,u.x,A+.2,u.z,0,u.rot),o.add(at.cone(3.9,2.4,4),10111538,u.x,A+4.2,u.z,0,Math.PI/4+u.rot),o.add(at.box(.9,1.6,.2),5913122,u.x,A+.8,u.z+(u.rot?-2.05:2.05))):u.kind==="well"&&(o.add(at.cyl(1.1,1.2,1,8),c,u.x,A+.5,u.z),o.add(at.cyl(.8,.8,.1,8),4026266,u.x,A+.95,u.z),o.add(at.box(.15,2.2,.15),7031344,u.x-1,A+1.6,u.z),o.add(at.box(.15,2.2,.15),7031344,u.x+1,A+1.6,u.z),o.add(at.cone(1.7,1,4),10111538,u.x,A+3,u.z,0,Math.PI/4))}for(let u of i.bridges){let A=Math.atan2(u.sin,u.cos),y=12;for(let E=0;E<y;E++){let M=((E+.5)/y-.5)*u.len,v=u.y+(1-(M/(u.len/2))**2)*u.arch,I=u.x+u.cos*M,k=u.z+u.sin*M,U=u.wood?_e(8016432,n,.08):_e(c,n,.04);if(o.add(at.box(u.len/y+.05,u.wood?.35:.8,u.width),U,I,v-(u.wood?.18:.4),k,0,-A),u.wood)for(let O of[-1,1])o.add(at.box(.18,1.1,.18),5913122,I-u.sin*O*(u.width/2),v+.5,k+u.cos*O*(u.width/2));else for(let O of[-1,1])o.add(at.box(u.len/y+.05,.7,.35),l,I-u.sin*O*(u.width/2),v+.35,k+u.cos*O*(u.width/2),0,-A)}if(u.wood)for(let E of[-1,1])o.add(at.cyl(.05,.05,7,3),2762274,u.x-i.castle.face*3,u.y+3.2,u.z+E*(u.width/2-.2),0,0,i.castle.face*.9);else for(let E of[-.2,.2]){let C=u.x+u.cos*E*u.len,M=u.z+u.sin*E*u.len;o.add(at.box(1.6,3,u.width-.4),l,C,-1.2,M,0,-A)}}let p=e.leaf,f=e.pine;for(let u of i.decor.trees){let A=i.terrainHeight(u.x,u.z),y=u.s;switch(u.kind){case"pine":{let E=_e(f[n()*f.length|0],n,.08);o.add(at.cyl(.18*y,.28*y,1.6*y,5),e.trunk,u.x,A+.8*y,u.z),o.add(at.cone(1.7*y,2.4*y,7),E,u.x,A+2.4*y,u.z,0,u.rot),o.add(at.cone(1.35*y,2.1*y,7),E.clone().multiplyScalar(1.07),u.x,A+3.5*y,u.z,0,u.rot+.4),o.add(at.cone(.9*y,1.8*y,7),E.clone().multiplyScalar(1.13),u.x,A+4.5*y,u.z,0,u.rot+.8),i.biome==="winter"&&o.add(at.cone(.55*y,.8*y,7),16185851,u.x,A+5.1*y,u.z,0,u.rot);break}case"oak":{let E=_e(p[n()*p.length|0],n,.08);o.add(at.cyl(.22*y,.34*y,2.2*y,5),e.trunk,u.x,A+1.1*y,u.z),o.add(at.ico(1.5*y,0),E,u.x,A+3.2*y,u.z,u.rot,u.rot),o.add(at.ico(1*y,0),E.clone().multiplyScalar(1.1),u.x+.9*y,A+2.8*y,u.z+.4*y,u.rot),o.add(at.ico(1.05*y,0),E.clone().multiplyScalar(.92),u.x-.7*y,A+3*y,u.z-.6*y,u.rot);break}case"birch":{let E=_e(p[n()*p.length|0],n,.1).multiplyScalar(1.1);o.add(at.cyl(.14*y,.18*y,3*y,5),15262940,u.x,A+1.5*y,u.z),o.add(at.ico(1*y,0),E,u.x,A+3.4*y,u.z,u.rot,0,0,.9,1.4,.9);break}case"bare":{o.add(at.cyl(.14*y,.26*y,3*y,5),4864558,u.x,A+1.5*y,u.z);for(let E=0;E<3;E++)o.add(at.cyl(.05*y,.09*y,1.4*y,4),4864558,u.x,A+(2.2+E*.4)*y,u.z,.8,u.rot+E*2.1,0);break}case"palm":{let E=u.x,C=A,M=u.z,v=.25;for(let I=0;I<5;I++)o.add(at.cyl(.16*y,.2*y,.9*y,5),_e(e.trunk,n,.1),E,C+.45*y,M,0,0,v*(I/5)),E-=Math.sin(v*(I/5))*.9*y,C+=.88*y;for(let I=0;I<6;I++){let k=I/6*Math.PI*2+u.rot;o.add(at.box(.5*y,.06,2.2*y),_e(p[I%p.length],n,.08),E+Math.cos(k)*.9*y,C-.2*y,M+Math.sin(k)*.9*y,.35,-k+Math.PI/2,0)}break}case"cactus":{let E=_e(6261306,n,.08);o.add(at.cyl(.3*y,.34*y,2.4*y,6),E,u.x,A+1.2*y,u.z),o.add(at.cyl(.18*y,.2*y,1*y,6),E,u.x+.55*y,A+1.4*y,u.z),o.add(at.cyl(.18*y,.2*y,.9*y,6),E,u.x-.5*y,A+1.8*y,u.z);break}}}for(let u of i.decor.rocks){let A=i.terrainHeight(u.x,u.z),y=_e(e.rock[n()*e.rock.length|0],n,.06);o.add(at.dode(u.s),y,u.x,A+u.s*.3,u.z,u.rot,u.rot*2,0,1.2,u.big?1.5:.8,1),u.big&&o.add(at.dode(u.s*.6),y.clone().multiplyScalar(.9),u.x+u.s*.8,A+u.s*.2,u.z+.4,u.rot)}for(let u of i.decor.bushes){let A=i.terrainHeight(u.x,u.z);o.add(at.ico(.7*u.s,0),_e(p[n()*p.length|0],n,.1).multiplyScalar(.85),u.x,A+.35*u.s,u.z,n()*3,0,0,1.2,.8,1.2)}let x=new St(e.grass[2]).multiplyScalar(.85);for(let u of i.decor.tufts){let A=i.terrainHeight(u.x,u.z);for(let y=0;y<3;y++)o.add(at.cone(.09*u.s,.6*u.s,3),x,u.x+(y-1)*.12,A+.25*u.s,u.z+y%2*.1,(y-1)*.3,u.rot)}for(let u of i.decor.flowers){let A=i.terrainHeight(u.x,u.z);for(let y=0;y<4;y++)o.add(at.ico(.12,0),e.flower[u.c],u.x+(n()-.5)*1.2,A+.12,u.z+(n()-.5)*1.2)}for(let u of i.decor.menhirs){let A=i.terrainHeight(u.x,u.z);if(u.altar){o.add(at.box(3,.8,1.8),10262415,u.x,A+.4,u.z,0,.3);continue}u.fallen?o.add(at.box(1.1,u.h,.7),_e(9341572,n),u.x,A+.35,u.z,Math.PI/2-.1,u.rot):o.add(at.box(1.1,u.h,.7),_e(9341572,n),u.x,A+u.h/2-.2,u.z,(n()-.5)*.12,-u.rot,(n()-.5)*.12,1,1,1)}for(let u of i.decor.ruins){let A=i.terrainHeight(u.x,u.z);o.add(at.cyl(u.r,u.r*1.1,4.5,8),_e(c,n),u.x,A+2.2,u.z),o.add(at.cyl(u.r*.7,u.r*.8,6.5,6),_e(l,n),u.x+.4,A+3.5,u.z-.3,.1);for(let y=0;y<6;y++)o.add(at.dode(.5+n()*.5),l,u.x+(n()-.5)*7,A+.2,u.z+(n()-.5)*7,n()*3)}for(let u of i.decor.fences)for(let A=0;A<=u.len;A++){let y=u.x+Math.cos(u.rot)*A*1.6,E=u.z+Math.sin(u.rot)*A*1.6,C=i.terrainHeight(y,E);o.add(at.box(.16,1.1,.16),7031344,y,C+.5,E),A<u.len&&(o.add(at.box(1.6,.1,.08),8084026,y+Math.cos(u.rot)*.8,C+.75,E+Math.sin(u.rot)*.8,0,-u.rot),o.add(at.box(1.6,.1,.08),8084026,y+Math.cos(u.rot)*.8,C+.4,E+Math.sin(u.rot)*.8,0,-u.rot))}for(let u of i.decor.tents){let A=i.terrainHeight(u.x,u.z),y=On[u.side].colors,E=u.big?1.4:1;o.add(at.cone(2.3*E,2.8*E,u.big?8:4),_e(u.big?y.primary:y.cloth===3816e3?5526620:15722194,n,.04),u.x,A+1.35*E,u.z,0,u.rot+Math.PI/4),o.add(at.cyl(.05,.05,1.4,3),5917242,u.x,A+3*E,u.z),o.add(at.box(.7,.45,.04),y.primary,u.x+.35,A+3.4*E,u.z)}for(let u of i.camps){if(!u)continue;let A=u.x+(u.x<0?-5:5),y=u.z,E=i.terrainHeight(A,y);for(let C=0;C<7;C++){let M=C/7*Math.PI*2;o.add(at.dode(.28),7170145,A+Math.cos(M)*.9,E+.1,y+Math.sin(M)*.9)}a.torches.push({x:A,y:E+.3,z:y,fire:!0})}for(let u of i.decor.torches)a.torches.push(u);let _=o.build(r);_&&s.add(_);let g=On.map(u=>new Ee({color:u.colors.banner,side:we,flatShading:!0}));for(let u of a.flags){let A=new je(2.2*u.size,1.3*u.size,4,1);A.translate(1.1*u.size,0,0);let y=new Ot(A,g[u.side]);y.position.set(u.x,u.y,u.z),y.userData.base=Float32Array.from(A.attributes.position.array),y.castShadow=!0,s.add(y);let E=new Ot(at.cyl(.06,.06,1.6*u.size+1,4),new Ee({color:4864554}));E.position.set(u.x,u.y-.3,u.z),s.add(E),u.mesh=y}let m=new ve({color:16753210}),S=new ve({color:16769146});for(let u of a.torches){let A=new ye,y=new Ot(at.cone(u.fire?.6:.22,u.fire?1.4:.6,5),m),E=new Ot(at.cone(u.fire?.35:.12,u.fire?.9:.4,5),S);if(y.position.y=u.fire?.6:.3,E.position.y=u.fire?.5:.26,A.add(y,E),!u.fire){let C=new Ot(at.cyl(.06,.06,.9,4),new Ee({color:4864554}));C.position.y=-.4,A.add(C)}A.position.set(u.x,u.y,u.z),s.add(A),u.mesh=A}let T=new Ee({color:16777215,flatShading:!0,emissive:3355443});for(let u=0;u<9;u++){let A=new ye,y=3+(n()*3|0);for(let C=0;C<y;C++){let M=new Ot(at.ico(2.5+n()*2.5,0),T);M.position.set(C*3.2-y*1.5,n()*1.5,(n()-.5)*3),M.scale.y=.6,A.add(M)}let E=u%2===0;A.position.set((n()-.5)*240,34+n()*12,(E?-1:1)*(72+n()*25)),A.userData.speed=.6+n()*.8,s.add(A),a.clouds.push(A)}return t.add(s),a}function Jh(i,t,e,n){if(i.water){let s=i.water.geometry.attributes.position,r=s.array,a=i.waterBase;for(let o=0;o<r.length;o+=3){let c=a[o],l=a[o+2];r[o+1]=Math.sin(c*.35+t*1.3)*.08+Math.cos(l*.4+t*1.1)*.08}s.needsUpdate=!0,i.water.geometry.computeVertexNormals()}for(let s of i.clouds)s.position.x+=s.userData.speed*e,s.position.x>130&&(s.position.x=-130);for(let s of i.flags){let r=s.mesh.geometry.attributes.position,a=s.mesh.userData.base;for(let o=0;o<r.count;o++){let c=a[o*3];r.array[o*3+2]=Math.sin(c*2-t*4+s.x)*.18*(c/2)}r.needsUpdate=!0}for(let s of i.torches){let r=.85+Math.sin(t*17+s.x)*.1+Math.sin(t*23+s.z)*.08;s.mesh.children[0].scale.set(1,r,1),s.mesh.children[1].scale.set(1,2-r,1)}if(i.gateMesh&&n.gate){let s=n.gate;s.alive?s.shake>0&&(s.shake-=e,i.gateMesh.position.x=s.x+Math.sin(t*60)*.06):(i.gateFall||(i.gateFall=0),i.gateFall=Math.min(1,i.gateFall+e*1.5),i.gateMesh.rotation.z=s.face*i.gateFall*1.45,i.gateMesh.position.y=n.castle.base-i.gateFall*.6)}}var Kh=1;function jh(){Kh=1}function w0(i,t,e,n){let s=[];if(n==="wedge"){let o=0,c=0;for(;c<i;){let l=Math.min(1+o*2,i-c);for(let h=0;h<l;h++)s.push([(h-(l-1)/2)*e,o*e*.9]);c+=l,o++}}else{let o=t;n==="block"&&(o=Math.max(3,Math.ceil(Math.sqrt(i*1.1)))),o=Math.max(2,Math.min(o,i));let c=Math.ceil(i/o);for(let l=0;l<i;l++){let h=Math.floor(l/o),d=h===c-1?i-h*o:o,p=l%o;s.push([(p-(d-1)/2)*e,h*e])}}let r=0,a=0;for(let o of s)r=Math.max(r,o[1]),a=Math.max(a,Math.abs(o[0]));for(let o of s)o[1]-=r/2;return{slots:s,halfW:a+.7,halfD:r/2+.7}}var Js=class{constructor(t,e,n,s,r=1){this.id=Kh++,this.side=t,this.typeId=e,this.T=yn[e],this.maxCount=Math.max(20,Math.round(this.T.size*r)),this.count=this.maxCount,this.maxHp=this.maxCount*this.T.hp,this.hp=this.maxHp,this.x=n,this.z=s,this.face=t===0?Math.PI/2:-Math.PI/2,this.orders=Hh(e),this.state="idle",this.path=[],this.target=null,this.melee=null,this.speedCur=0,this.vx=0,this.vz=0,this.kills=0,this.dealt=0,this.volleyT=Math.random()*1.5,this.chargeT=0,this.chargeReady=e==="cavalry",this.movedFast=0,this.repathT=0,this.retreated=0,this.regroupT=0,this.flankPlan=null,this.holdX=n,this.holdZ=s,this.lastHitT=99,this.underFire=0,this.cols=this.T.cols,this.formDirty=!0,this.soldiers=[],this.name=this.T.names[t],this.index=0,this.buildSoldiers()}get alive(){return this.count>0}get ratio(){return this.count/this.maxCount}get isRanged(){return this.T.range>0}get fwdX(){return Math.sin(this.face)}get fwdZ(){return Math.cos(this.face)}buildSoldiers(){this.soldiers=[],this.layout();for(let t=0;t<this.maxCount;t++){let[e,n]=this.slotWorld(t);this.soldiers.push({x:e+(Math.random()-.5)*.3,z:n+(Math.random()-.5)*.3,y:0,yaw:this.face,alive:!0,slot:t,phase:Math.random()*6.28,swing:0,deadT:0,fall:Math.random()<.5?1:-1,walk:0,jx:(Math.random()-.5)*.25,jz:(Math.random()-.5)*.25,hit:0})}}layout(t=99){let e=this.T.cols,n=this.orders.formation;n==="line"&&this.typeId!=="cavalry"&&(e=Math.ceil(e*1.25));let s=Math.max(2,Math.floor(t*2/this.T.spacing));this.cols=Math.min(e,s);let r=this.cols<e&&n!=="block"?"line":n,a=w0(Math.max(1,this.count),this.cols,this.T.spacing,r);this.slots=a.slots,this.halfW=a.halfW,this.halfD=a.halfD,this.formDirty=!1}slotWorld(t){let e=this.slots[Math.min(t,this.slots.length-1)]||[0,0],n=this.fwdX,s=this.fwdZ,r=s,a=-n;return[this.x+r*e[0]-n*e[1],this.z+a*e[0]-s*e[1]]}support(t,e){let n=this.fwdX,s=this.fwdZ,r=Math.abs(t*n+e*s),a=Math.abs(t*s-e*n);return r*this.halfD+a*this.halfW}reassign(){let t=0,e=this.soldiers.filter(n=>n.alive).sort((n,s)=>n.slot-s.slot);for(let n of e)n.slot=t++;this.formDirty=!0}killSoldier(t,e,n){let s=null,r=1e9;for(let a of this.soldiers){if(!a.alive)continue;let o;n?o=Math.random():o=(a.x-t)**2+(a.z-e)**2+Math.random()*2,o<r&&(r=o,s=a)}if(s){s.alive=!1,s.deadT=1e-4;let a=s.x-t,o=s.z-e;s.yaw=Math.atan2(-a,-o)}return s}};var Xc=class{constructor(){this.k=[],this.p=[]}push(t,e){let n=this.k,s=this.p,r=n.length;for(n.push(t),s.push(e);r>0;){let a=r-1>>1;if(s[a]<=e)break;n[r]=n[a],s[r]=s[a],r=a}n[r]=t,s[r]=e}pop(){let t=this.k,e=this.p,n=t[0],s=t.pop(),r=e.pop();if(t.length){let a=0,o=t.length;for(;;){let c=2*a+1;if(c>=o||(c+1<o&&e[c+1]<e[c]&&c++,e[c]>=r))break;t[a]=t[c],e[a]=e[c],a=c}t[a]=s,e[a]=r}return n}get size(){return this.k.length}},_a=class{constructor(t){this.map=t;let e=t.gw*t.gd;this.g=new Float32Array(e),this.from=new Int32Array(e),this.stamp=new Uint32Array(e),this.closed=new Uint32Array(e),this.cur=1}cellBlocked(t,e){return!!this.map.blocked[t]}cellCost(t,e,n){let s=this.map,r=s.cost[t];s.flags[t]&8&&s.gate&&s.gate.alive&&e!==s.gate.owner&&(r+=5);let a=Math.min(4,Math.ceil(n/4));return s.clear[t]<a&&(r+=(a-s.clear[t])*.6),r}nearestFree(t,e){let n=this.map,s=n.gw,r=n.gd;if(t>=0&&!this.cellBlocked(t,e))return t;let a=t>=0?t%s:0,o=t>=0?t/s|0:0;for(let c=1;c<20;c++){let l=-1,h=1e9;for(let d=-c;d<=c;d++)for(let p=-c;p<=c;p++){if(Math.max(Math.abs(p),Math.abs(d))!==c)continue;let f=a+p,x=o+d;if(f<0||x<0||f>=s||x>=r)continue;let _=x*s+f;if(!this.cellBlocked(_,e)){let g=p*p+d*d;g<h&&(h=g,l=_)}}if(l>=0)return l}return-1}find(t,e,n,s,r,a=8){let o=this.map,c=o.gw,l=o.gd,h=this.nearestFree(o.cellIndex(t,e),r),d=this.nearestFree(o.cellIndex(n,s),r);if(h<0||d<0)return[[n,s]];if(h===d)return[[n,s]];let p=++this.cur,f=this.g,x=this.from,_=this.stamp,g=this.closed,m=d%c,S=d/c|0,T=U=>{let O=Math.abs(U%c-m),q=Math.abs((U/c|0)-S);return(O+q+(1.4142-2)*Math.min(O,q))*1},u=new Xc;_[h]=p,f[h]=0,x[h]=-1,u.push(h,T(h));let A=!1,y=0,E=h,C=T(h);for(;u.size&&y++<6e3;){let U=u.pop();if(g[U]===p)continue;if(g[U]=p,U===d){A=!0;break}let O=T(U);O<C&&(C=O,E=U);let q=U%c,W=U/c|0;for(let j=0;j<8;j++){let G=E0[j],it=T0[j],ct=q+G,xt=W+it;if(ct<0||xt<0||ct>=c||xt>=l)continue;let Ct=xt*c+ct;if(this.cellBlocked(Ct,r)||g[Ct]===p||G&&it&&(this.cellBlocked(W*c+ct,r)||this.cellBlocked(xt*c+q,r)))continue;let Jt=f[U]+(G&&it?1.4142:1)*this.cellCost(Ct,r,a);(_[Ct]!==p||Jt<f[Ct])&&(_[Ct]=p,f[Ct]=Jt,x[Ct]=U,u.push(Ct,Jt+T(Ct)))}}let M=A?d:E,v=[];for(let U=M;U>=0;U=x[U])v.push(U);v.reverse();let I=[],k=0;I.push(o.cellCenter(v[0]));for(let U=2;U<v.length;U++)this.lineFree(v[k],v[U],r,a)||(k=U-1,I.push(o.cellCenter(v[k])));return A?I.push([n,s]):I.push(o.cellCenter(M)),I.shift(),I}lineFree(t,e,n,s){let r=this.map,a=r.gw,o=t%a,c=t/a|0,l=e%a,h=e/a|0,d=Math.abs(l-o),p=Math.abs(h-c),f=o<l?1:-1,x=c<h?1:-1,_=d-p,g=r.cost[t],m=Math.min(3,Math.ceil(s/5));for(;;){let S=c*a+o;if(this.cellBlocked(S,n)||r.cost[S]>g+.4||r.clear[S]<m&&r.clear[t]>=m||r.flags[S]&8)return!1;if(o===l&&c===h)return!0;let T=2*_;T>-p&&(_-=p,o+=f),T<d&&(_+=d,c+=x)}}},E0=[1,-1,0,0,1,1,-1,-1],T0=[0,0,1,-1,1,-1,1,-1];var qc=Math.PI*2,Qh=(i,t)=>{let e=(t-i)%qc;return e>Math.PI&&(e-=qc),e<-Math.PI&&(e+=qc),e},Ae=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),ya=class{constructor(t,e,n){this.map=t,this.legions=e,this.pf=new _a(t),this.time=0,this.timeLimit=n.time,this.over=!1,this.winner=-1,this.reason="",this.events=[],this.volleys=[],this.arrows=[],this.thinkAcc=0,this.checkAcc=0,this.start=[0,0],this.lost=[0,0];for(let s of e)this.start[s.side]+=s.maxCount;this.started=!1}enemiesOf(t){return this.legions.filter(e=>e.side!==t&&e.alive)}alliesOf(t){return this.legions.filter(e=>e.side===t&&e.alive)}begin(){this.started=!0;for(let t of this.legions)t.holdX=t.x,t.holdZ=t.z,t.startX=t.x,t.startZ=t.z,this.applyOrders(t);this.events.push({type:"horn"})}applyOrders(t){let e=t.orders;t.wp=[],t.wpIdx=0,t.path=[],t.formDirty=!0,e.move==="flankL"||e.move==="flankR"?t.wp=this.flankWaypoints(t,e.move==="flankL"?1:-1):e.move==="path"&&(t.wp=e.waypoints.map(n=>[n[0],n[1]])),e.move==="hold"&&this.started&&this.time>0&&(t.holdX=t.x,t.holdZ=t.z),t.state!=="retreat"&&t.state!=="regroup"&&t.state!=="dead"&&(t.state="idle")}flankWaypoints(t,e){let n=this.enemiesOf(t.side),s=t.side===0?50:-50,r=0;if(n.length){s=0,r=0;for(let f of n)s+=f.x,r+=f.z;s/=n.length,r/=n.length}let a=s-t.x,o=r-t.z,c=Math.hypot(a,o)||1;a/=c,o/=c;let l=o*e,h=-a*e,d=[t.x+a*c*.38+l*24,t.z+o*c*.38+h*24],p=[s-a*4+l*17,r-o*4+h*17];return[d,p].map(f=>this.snapFree(f[0],f[1],t.side))}snapFree(t,e,n){t=Qe(t,-70,70),e=Qe(e,-46,46);let s=this.map,r=this.pf.nearestFree(s.cellIndex(t,e),n);return r<0?[t,e]:s.cellIndex(t,e)===r?[t,e]:s.cellCenter(r)}previewRoute(t){let e=t.orders,n=[[t.x,t.z]],s=t.x,r=t.z,a=(l,h)=>{let d=this.pf.find(s,r,l,h,t.side,t.halfW*2);for(let p of d)n.push(p);s=l,r=h},o=[];e.move==="flankL"||e.move==="flankR"?o=this.flankWaypoints(t,e.move==="flankL"?1:-1):e.move==="path"&&(o=e.waypoints);for(let l of o)a(l[0],l[1]);let c=null;if(e.move==="hold")this.isRangedInRange(t)&&(c=null);else if(e.target==="objective"&&this.map.objective)c=[this.map.objective.x,this.map.objective.z];else{let l=this.chooseTarget(t,[s,r]);if(l)if(t.isRanged){let h=l.x-s,d=l.z-r,p=Math.hypot(h,d),f=t.T.range*.8;p>f&&(c=[s+h/p*(p-f),r+d/p*(p-f)])}else c=[l.x,l.z]}return c&&a(c[0],c[1]),{pts:n,target:e.move!=="hold"?this.chooseTarget(t,[s,r]):null}}isRangedInRange(t){return t.isRanged}chooseTarget(t,e=null,n=1e9){let s=e?e[0]:t.x,r=e?e[1]:t.z,a=t.orders,o=null,c=1e9,l=this.enemiesOf(t.side);if(a.target==="legion"){let h=l.find(d=>d.id===a.targetId);if(h&&Math.hypot(h.x-s,h.z-r)<Math.max(n,40))return h}for(let h of l){let d=Math.hypot(h.x-s,h.z-r);if(d>n)continue;let p=d;switch(a.target){case"weakest":p=h.count*1.6+d*.35;break;case"strongest":p=-h.count*1.6+d*.35;break;case"ranged":p=d+(h.isRanged?0:55);break;case"objective":{let f=this.map.objective;f&&(p=Math.hypot(h.x-f.x,h.z-f.z)+d*.3);break}}h.state==="retreat"&&(p+=30),t.typeId==="cavalry"&&h.typeId==="pike"&&t.aiSmart&&(p+=45),t.aiSmart&&h.inCastleCover&&(p+=20),p<c&&(c=p,o=h)}return o}aggroRadius(t){let e=t.orders.stance,n=e==="aggressive"?24:e==="defensive"?10:16;return(t.orders.move==="flankL"||t.orders.move==="flankR")&&t.wp&&t.wpIdx<t.wp.length&&(n=7),t.isRanged&&(n=t.T.range),n}nearestEnemy(t,e,n){let s=null,r=e;for(let a of this.legions){if(a.side===t.side||!a.alive||n&&!n(a))continue;let o=Ae(t,a)-a.support((t.x-a.x)/(Ae(t,a)||1),(t.z-a.z)/(Ae(t,a)||1));o<r&&(r=o,s=a)}return s}contactDist(t,e){let n=Ae(t,e)||.001,s=(e.x-t.x)/n,r=(e.z-t.z)/n;return t.support(s,r)+e.support(s,r)+.5}step(t){if(this.over)return;this.time+=t,this.thinkAcc+=t;let e=this.thinkAcc>.25;e&&(this.thinkAcc=0);for(let n of this.legions)n.alive&&(e&&this.think(n),this.act(n,t));this.separate(t),this.resolveVolleys();for(let n of this.legions)this.updateSoldiers(n,t);this.arrows=this.arrows.filter(n=>this.time<n.t0+n.dur+.05),this.checkAcc+=t,this.checkAcc>.2&&(this.updateObjective(this.checkAcc),this.checkAcc=0,this.checkVictory())}think(t){let e=t.orders,n=this.map;if(t.inCastleCover=n.castle&&n.castle.owner===t.side&&n.inCastle(t.x,t.z),t.state!=="retreat"&&t.state!=="regroup"&&e.retreatAt>0){let c=e.retreatAt/(1+t.retreated*1.5);if(t.ratio<=c){this.startRetreat(t);return}}if(t.state==="retreat"||t.state==="regroup")return;if(t.melee){let c=t.melee;if(!c.alive||Ae(t,c)>this.contactDist(t,c)+3.5||c.state==="retreat"&&t.orders.stance==="defensive")t.melee=null,t.state="idle";else{t.state="melee";return}}let s=this.legions.find(c=>c.alive&&c.side!==t.side&&c.melee===t);if(s&&!t.isRanged){t.melee=s,t.state="melee";return}if(s&&t.isRanged&&Ae(t,s)<this.contactDist(t,s)+.5){t.melee=s,t.state="melee";return}if(t.state==="breach"&&n.gate&&n.gate.alive){let c=this.nearestEnemy(t,3);c&&this.engage(t,c);return}if(this.time<e.delay&&t.lastHitT>1.5){t.state="wait";return}if(t.isRanged)return this.thinkRanged(t);let r=this.aggroRadius(t);if(t.wp&&t.wpIdx<t.wp.length){let c=this.nearestEnemy(t,r);if(c){this.engage(t,c);return}let l=t.wp[t.wpIdx];if(Math.hypot(l[0]-t.x,l[1]-t.z)<4){t.wpIdx++,t.path=[];return}this.moveTo(t,l[0],l[1],"move");return}if(e.move==="hold"){let c=this.nearestEnemy(t,r);if(c&&Math.hypot(c.x-t.holdX,c.z-t.holdZ)<r+10){this.engage(t,c);return}Math.hypot(t.holdX-t.x,t.holdZ-t.z)>2.5?this.moveTo(t,t.holdX,t.holdZ,"move"):(t.state="hold",t.path=[]);return}let a=n.objective;if(e.target==="objective"&&a){let c=this.nearestEnemy(t,Math.min(r,12));if(c){this.engage(t,c);return}if(Math.hypot(a.x-t.x,a.z-t.z)>a.r*.5)this.moveTo(t,a.x,a.z,"move");else{let h=this.nearestEnemy(t,22);h?this.engage(t,h):(t.state="hold",t.path=[])}return}let o=this.nearestEnemy(t,Math.min(r,9));o||(o=this.chooseTarget(t)),o?this.engage(t,o):(t.state="idle",t.path=[])}thinkRanged(t){let e=t.orders,n=t.T.range;if(e.skirmish){let o=this.nearestEnemy(t,9,c=>!c.isRanged&&c.state!=="retreat");if(o){let c=t.x-o.x,l=t.z-o.z,h=Math.hypot(c,l)||1,d=t.x+c/h*12,p=t.z+l/h*12;if(this.map.isPassable(d,p,t.side)&&o.typeId!=="cavalry"){this.moveTo(t,d,p,"kite"),t.target=o;return}}}let s=null,r=this.chooseTarget(t,null,n);if(r&&(s=r),t.wp&&t.wpIdx<t.wp.length){if(s&&Ae(t,s)<n*.9){t.target=s,t.state="shoot",t.path=[];return}let o=t.wp[t.wpIdx];if(Math.hypot(o[0]-t.x,o[1]-t.z)<4){t.wpIdx++,t.path=[];return}this.moveTo(t,o[0],o[1],"move");return}if(s){t.target=s,t.state="shoot",t.path=[];return}if(e.move==="hold"){Math.hypot(t.holdX-t.x,t.holdZ-t.z)>2.5?this.moveTo(t,t.holdX,t.holdZ,"move"):(t.state="hold",t.path=[]);return}let a=this.chooseTarget(t);if(e.target==="objective"&&this.map.objective&&(!a||Ae(t,a)>n*1.4)){let o=this.map.objective;if(Math.hypot(o.x-t.x,o.z-t.z)>n*.6){this.moveTo(t,o.x,o.z,"move");return}}if(a){t.target=a;let o=a.x-t.x,c=a.z-t.z,l=Math.hypot(o,c),h=n*.82;this.moveTo(t,t.x+o/l*(l-h+1),t.z+c/l*(l-h+1),"move")}else t.state="idle",t.path=[]}engage(t,e){t.target=e;let n=this.contactDist(t,e);if(Ae(t,e)<n){this.startMelee(t,e);return}this.moveTo(t,e.x,e.z,"engage",e)}moveTo(t,e,n,s,r=null){t.state=s;let a=t.pathGoal,o=!a||Math.hypot(a[0]-e,a[1]-n)>(r?3:1);t.repathT-=.25,(!t.path.length||o||t.repathT<=0)&&(t.path=this.pf.find(t.x,t.z,e,n,t.side,t.halfW*2),t.pathGoal=[e,n],t.repathT=r?1.2:4)}startMelee(t,e){t.melee=e,t.state="melee",t.path=[];let n=Ae(t,e)||1;if(t.typeId==="cavalry"&&t.chargeReady&&t.speedCur>t.T.speed*.55)if(t.chargeReady=!1,t.movedFast=0,e.typeId==="pike"&&e.state!=="retreat")this.damage(t,t.count*1.1,e,!1),this.events.push({type:"impact",x:(t.x+e.x)/2,z:(t.z+e.z)/2,big:!1,broken:!0});else{t.chargeT=2.8;let s=this.flankMult(t,e),r=t.orders.formation==="wedge"?1.25:1;this.damage(e,t.count*1.05*s*r,t,!1),this.events.push({type:"impact",x:(t.x+e.x)/2,z:(t.z+e.z)/2,big:!0}),e.knock={x:(e.x-t.x)/n,z:(e.z-t.z)/n,t:.5}}!e.melee&&e.state!=="retreat"&&e.alive&&(e.melee=t,e.state="melee"),this.events.push({type:"clash",x:(t.x+e.x)/2,z:(t.z+e.z)/2})}startRetreat(t){t.state="retreat",t.melee=null,t.retreated++,t.target=null;let e,n,s=t.orders,r=this.map.camps[t.side];if(e=r.x+(t.side===0?6:-6),n=r.z,s.retreatTo==="ally"){let a=null,o=1e9;for(let c of this.alliesOf(t.side)){if(c===t||c.state==="retreat")continue;let l=Ae(t,c);l<o&&(o=l,a=c)}if(a){let c=this.enemiesOf(t.side),l=0,h=0;for(let x of c)l+=x.x,h+=x.z;c.length&&(l/=c.length,h/=c.length);let d=a.x-l,p=a.z-h,f=Math.hypot(d,p)||1;e=a.x+d/f*10,n=a.z+p/f*10}}if(this.map.castle&&this.map.castle.owner===t.side){let a=this.map.objective;e=a.x,n=a.z}[e,n]=this.snapFree(e,n,t.side),t.retreatGoal=[e,n],t.path=this.pf.find(t.x,t.z,e,n,t.side,t.halfW*2),this.events.push({type:"retreat",side:t.side,legion:t})}act(t,e){t.lastHitT+=e,t.chargeT-=e,t.knock&&(t.knock.t-=e,t.knock.t<=0&&(t.knock=null));let n=this.map,s=t.T,r=0,a=null;switch(t.typeId==="cavalry"&&!t.chargeReady&&!t.melee&&(t.speedCur>s.speed*.6&&(t.movedFast+=e),t.movedFast>1.6&&(t.chargeReady=!0)),t.state){case"melee":{let o=t.melee;if(!o||!o.alive){t.melee=null,t.state="idle";break}a=o;let c=this.contactDist(t,o);Ae(t,o)>c-.2&&(r=Math.min(s.speed,1.6),this.stepToward(t,o.x,o.z,r,e)),this.dealMelee(t,o,e);break}case"shoot":{let o=t.target;if(!o||!o.alive){t.state="idle";break}if(a=o,Ae(t,o)>s.range*1.05){t.state="idle";break}t.volleyT-=e,t.volleyT<=0&&(this.fireVolley(t,o),t.volleyT=s.volley*(.9+Math.random()*.2));break}case"retreat":{r=s.speed*1.12,this.followPath(t,r,e)&&(t.state="regroup",t.regroupT=7);break}case"regroup":{t.regroupT-=e,t.hp=Math.min(t.count*s.hp,t.hp+s.hp*.25*e);let o=this.nearestEnemy(t,4);if(o){t.melee=o,t.state="melee";break}t.regroupT<=0&&(t.holdX=t.x,t.holdZ=t.z,t.orders.afterRetreat==="hold"&&(t.orders.move="hold"),t.wp=[],t.wpIdx=0,t.state="idle",this.events.push({type:"rally",legion:t}));break}case"move":case"engage":case"kite":{if(r=s.speed,t.state==="engage"&&t.target&&t.target.alive){let o=t.target;if(Ae(t,o)<this.contactDist(t,o)){this.startMelee(t,o);break}}if(t.isRanged&&t.target&&t.target.alive&&Ae(t,t.target)<s.range*.95&&t.state!=="kite"){t.state="shoot",t.path=[];break}this.followPath(t,r,e)&&(t.path=[]);break}case"breach":{let o=n.gate;if(!o||!o.alive){t.state="idle";break}a={x:o.x,z:o.z},Math.hypot(o.x-t.x,o.z-t.z)>t.halfD+4&&this.stepToward(t,o.x,o.z,1.4,e);let l=t.count*s.atk*.09*(t.typeId==="guard"?1.3:t.typeId==="cavalry"?.5:t.typeId==="archer"?.3:1);if(o.hp-=l*e,o.shake=.25,t.gateHitT=(t.gateHitT||0)-e,t.gateHitT<=0&&(t.gateHitT=.7,this.events.push({type:"gatehit",x:o.x,z:o.z})),o.hp<=0){o.hp=0,o.alive=!1,this.events.push({type:"gatebroken",x:o.x,z:o.z});for(let d of this.legions)d.path=[]}let h=this.nearestEnemy(t,3);h&&this.engage(t,h);break}case"hold":case"idle":case"wait":default:{let o=this.nearestEnemy(t,45);(o&&t.state!=="wait"||o&&this.time>0)&&(a=o);break}}if(t.state!=="move"&&t.state!=="engage"&&t.state!=="retreat"&&t.state!=="kite"&&t.state!=="melee"&&t.state!=="breach"&&(t.speedCur=Math.max(0,t.speedCur-6*e)),a&&this.turnToward(t,Math.atan2(a.x-t.x,a.z-t.z),e),t.knock){let o=t.x+t.knock.x*2.2*e,c=t.z+t.knock.z*2.2*e;n.isPassable(o,c,t.side)&&(t.x=o,t.z=c)}if(t.clearT=(t.clearT||0)-e,t.clearT<=0||t.formDirty){t.clearT=.4;let o=this.map.clearanceAt(t.x,t.z),l=t.state==="move"||t.state==="engage"||t.state==="retreat"||t.state==="kite"?o+1:99,h=t.cols;(t.formDirty||l!==t.lastClear)&&(t.lastClear=l,t.layout(l),h!==t.cols&&(t.formDirty=!1))}}turnToward(t,e,n){let s=t.typeId==="cavalry"?3.2:2.2,r=Qh(t.face,e),a=Qe(r,-s*n,s*n);t.face+=a}stepToward(t,e,n,s,r){let a=e-t.x,o=n-t.z,c=Math.hypot(a,o);if(c<.01)return;let l=Math.min(c,s*r),h=t.x+a/c*l,d=t.z+o/c*l;this.map.isPassable(h,d,t.side)&&(t.x=h,t.z=d)}followPath(t,e,n){let s=this.map;if(!t.path.length)return!0;let r=t.path[0],a=r[0]-t.x,o=r[1]-t.z,c=Math.hypot(a,o);if(c<.9)return t.path.shift(),t.path.length===0;a/=c,o/=c;let l=s.flagAt(t.x,t.z),h=e;l&1&&(h*=.72),l&2&&(h*=.55),t.orders.formation==="block"&&(h*=.9),t.orders.stance==="aggressive"&&(h*=1.05);let d=s.getHeight(t.x,t.z);s.getHeight(t.x+a*2,t.z+o*2)-d>.4&&(h*=.8),t.speedCur+=Qe(h-t.speedCur,-6*n,3*n);let f=Math.min(c,t.speedCur*n),x=t.x+a*f,_=t.z+o*f,g=s.gate;if(g&&g.alive&&t.side!==g.owner){let m=s.cellIndex(x+a*(t.halfD+1),_+o*(t.halfD+1));if(m>=0&&s.flags[m]&8)return t.state="breach",this.events.push({type:"breach",legion:t}),!1}return s.isPassable(x,_,t.side)?(t.x=x,t.z=_):s.isPassable(x,t.z,t.side)?t.x=x:s.isPassable(t.x,_,t.side)?t.z=_:(t.path=[],t.repathT=0),this.turnToward(t,Math.atan2(a,o),n),!1}flankMult(t,e){let n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s)||1,a=n/r*e.fwdX+s/r*e.fwdZ;return a<-.45?1.6:a<.4?1.3:1}mods(t,e,n){let s=1,r=1,a=t.orders,o=e.orders;a.stance==="aggressive"?s*=1.15:a.stance==="defensive"&&(s*=.9),o.stance==="aggressive"?r*=.9:o.stance==="defensive"&&(r*=1.2),a.formation==="wedge"&&(s*=1.1),o.formation==="wedge"&&(r*=.9),a.formation==="block"&&(s*=.95),o.formation==="block"&&(r*=1.15);let c=this.map,l=c.getHeight(t.x,t.z),h=c.getHeight(e.x,e.z);l-h>1.5?s*=1.2:h-l>1.5&&(s*=.85),c.castle&&c.castle.owner===e.side&&c.inCastle(e.x,e.z)&&(r*=n&&!c.inCastle(t.x,t.z)?1.6:1.3);let d=c.flagAt(e.x,e.z);return d&2&&(r*=.75),n&&d&1&&(r*=1.6),e.state==="retreat"&&(r*=.6),e.state==="breach"&&(r*=.85),[s,r]}dealMelee(t,e,n){let s=t.T,[r,a]=this.mods(t,e,!1);t.typeId==="pike"&&e.typeId==="cavalry"&&(r*=s.vsCav),t.typeId==="cavalry"&&e.isRanged&&(r*=1.5),t.chargeT>0&&(r*=s.charge||1),r*=this.flankMult(t,e),t.isRanged&&(r*=.9);let c=t.count*s.atk*.1*r/(1+e.T.def*a*.22)*n;this.damage(e,c,t,!1),t.clashT=(t.clashT||0)-n,t.clashT<=0&&(t.clashT=.35+Math.random()*.5,this.events.push({type:"clash",x:(t.x+e.x)/2+(Math.random()-.5)*t.halfW,z:(t.z+e.z)/2+(Math.random()-.5)*2,soft:!0}))}fireVolley(t,e){let n=t.T,s=Ae(t,e),r=.46-.24*(s/n.range);e.melee&&(r*=.75);let[a,o]=this.mods(t,e,!0),l=t.count*r,h=e.T.arrowResist||1,d=l*n.arrowDmg*a*h/(1+e.T.def*o*.12),p=.9+s/40;this.volleys.push({A:t,B:e,dmg:d,t:this.time+p});let f=t.soldiers.filter(_=>_.alive),x=Math.min(f.length,18);for(let _=0;_<x;_++){let g=f[(_*7+Math.random()*3|0)%f.length];g.shoot=.6;let m=e.soldiers.filter(T=>T.alive),S=m.length?m[Math.random()*m.length|0]:e;this.arrows.push({x0:g.x,y0:g.y+1.5,z0:g.z,x1:S.x+(Math.random()-.5)*3,z1:S.z+(Math.random()-.5)*3,y1:(S.y||0)+.6,t0:this.time+Math.random()*.25,dur:p,arc:4+s*.18})}this.events.push({type:"volley",x:t.x,z:t.z})}resolveVolleys(){let t=this.time;for(let e=this.volleys.length-1;e>=0;e--){let n=this.volleys[e];t>=n.t&&(n.B.alive&&(this.damage(n.B,n.dmg,n.A,!0),n.B.underFire=1,this.events.push({type:"arrowhit",x:n.B.x,z:n.B.z})),this.volleys.splice(e,1))}}damage(t,e,n,s){if(!t.alive||e<=0)return;t.hp-=e,n.dealt+=e,t.lastHitT=0;let r=Math.max(0,Math.ceil(t.hp/t.T.hp-1e-6)),a=!1;for(;t.count>r;){t.count--;let o=t.killSoldier(n.x,n.z,s);n.kills++,this.lost[t.side]++,a=!0,o&&this.events.push({type:"death",x:o.x,z:o.z,side:t.side})}if(t.count<=0){t.hp=0,t.state="dead",t.melee=null;for(let o of this.legions)o.melee===t&&(o.melee=null,o.state="idle"),o.target===t&&(o.target=null);this.events.push({type:"legionlost",side:t.side,legion:t})}else a&&t.reassign()}separate(t){let e=this.legions.filter(s=>s.alive),n=this.map;for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){let a=e[s],o=e[r];if(a.melee===o||o.melee===a)continue;let c=Ae(a,o)||.01,l=this.contactDist(a,o)*(a.side===o.side?.78:.95);if(c<l){let h=Math.min(l-c,4*t),d=(o.x-a.x)/c,p=(o.z-a.z)/c,f=a.melee||a.state==="hold"||a.state==="shoot",x=o.melee||o.state==="hold"||o.state==="shoot",_=f&&!x?.15:.5,g=x&&!f?.15:.5,m=a.x-d*h*_*2,S=a.z-p*h*_*2,T=o.x+d*h*g*2,u=o.z+p*h*g*2;n.isPassable(m,S,a.side)&&(a.x=m,a.z=S),n.isPassable(T,u,o.side)&&(o.x=T,o.z=u)}}}updateSoldiers(t,e){let n=this.map,s=this.time,r=t.state==="melee"&&t.melee,a=t.speedCur>.2,o=t.T.speed*1.5+1,c=r?t.melee:null;for(let l of t.soldiers){if(!l.alive){l.deadT>0&&l.deadT<30&&(l.deadT+=e);continue}let[h,d]=t.slotWorld(l.slot);h+=l.jx,d+=l.jz;let p=t.slots[l.slot]?t.slots[l.slot][1]+t.halfD-.7:0;if(c){let u=c.x-h,A=c.z-d,y=Math.hypot(u,A)||1,C=p<t.T.spacing*1.6?.7:.25;h+=u/y*C+Math.sin(s*2+l.phase)*.15,d+=A/y*C+Math.cos(s*2.3+l.phase)*.15}if(!n.isPassable(h,d,t.side)){let u=!1;for(let A=1;A<=4;A++){let y=A/4,E=h+(t.x-h)*y,C=d+(t.z-d)*y;if(n.isPassable(E,C,t.side)){h=E,d=C,u=!0;break}}u||(h=t.x,d=t.z)}let f=h-l.x,x=d-l.z,_=Math.hypot(f,x),g=Math.min(_,(o+_*1.2)*e);if(_>.02){let u=l.x+f/_*g,A=l.z+x/_*g;!n.isPassable(u,A,t.side)&&n.isPassable(l.x,l.z,t.side)&&(u=l.x,A=l.z),l.x=u,l.z=A}let m=g/Math.max(e,1e-4);l.walk+=g*2.2,l.moving=m>.5;let S;c?S=Math.atan2(c.x-l.x,c.z-l.z):m>.6&&_>.3?S=Math.atan2(f,x):t.state==="shoot"&&t.target?S=Math.atan2(t.target.x-l.x,t.target.z-l.z):S=t.face;let T=Qh(l.yaw,S);if(l.yaw+=Qe(T,-5*e,5*e),l.y=n.getHeight(l.x,l.z),c){let u=p<t.T.spacing*2.2;l.swing=u?Math.sin(s*7+l.phase)*.5+.5:0}else l.swing=Math.max(0,l.swing-e*3);l.shoot>0&&(l.shoot-=e),l.hit>0&&(l.hit-=e)}(a||r)&&(t.lastMove=s)}updateObjective(t){let e=this.map.objective;if(!e)return;let n=[0,0];for(let s of this.legions)!s.alive||s.state==="retreat"||Math.hypot(s.x-e.x,s.z-e.z)<e.r+s.halfW*.5&&(n[s.side]+=s.count);if(e.present=n,e.type==="keep"){let s=1-e.owner;n[s]>0&&n[e.owner]===0?e.hold+=t:e.hold=Math.max(0,e.hold-t*.5)}else e.type==="hill"&&(n[0]>0&&n[1]===0&&(e.score[0]+=t*1.6),n[1]>0&&n[0]===0&&(e.score[1]+=t*1.6))}strength(t){let e=0;for(let n of this.legions)n.side===t&&n.alive&&(e+=n.count);return e}checkVictory(){if(!this.started||this.over)return;let t=this.strength(0),e=this.strength(1),n=a=>{let o=this.legions.filter(c=>c.side===a&&c.alive);return o.length>0&&o.every(c=>c.state==="retreat")},s=this.map.objective,r=(a,o)=>{this.over=!0,this.winner=a,this.reason=o,this.events.push({type:"end",winner:a})};if(t<=this.start[0]*.08||t===0)return r(1,"Deine Legionen wurden vernichtet.");if(e<=this.start[1]*.08||e===0)return r(0,"Das feindliche Heer wurde vernichtet.");if(n(1)&&e<t*.6)return r(0,"Der Feind flieht vom Schlachtfeld!");if(n(0)&&t<e*.6)return r(1,"Deine Legionen fliehen vom Schlachtfeld.");if(s&&s.type==="keep"&&s.hold>=s.need){let a=1-s.owner;return r(a,a===0?"Der Burghof ist eingenommen \u2013 die Burg geh\xF6rt dir!":"Der Feind hat den Burghof eingenommen.")}if(s&&s.type==="hill"){if(s.score[0]>=s.need)return r(0,"Der Steinkreis ist in deiner Hand!");if(s.score[1]>=s.need)return r(1,"Der Feind h\xE4lt den Steinkreis.")}if(this.time>=this.timeLimit){if(s&&s.type==="keep"){let c=s.owner;return r(c,c===0?"Die Mauern haben gehalten. Die Burg ist sicher!":"Die Zeit ist abgelaufen \u2013 die Burg h\xE4lt stand.")}if(s&&s.type==="hill"&&Math.abs(s.score[0]-s.score[1])>3){let c=s.score[0]>s.score[1]?0:1;return r(c,"Zeit abgelaufen \u2013 Punktsieg am Steinkreis.")}let a=t/this.start[0],o=e/this.start[1];return r(a>=o?0:1,"Zeit abgelaufen \u2013 Sieg nach verbliebener St\xE4rke.")}}};function Yc(i,t,e){let n=i.length,s=t==="defend"?["legion","legion","guard","cavalry","archer","pike"]:t==="assault"?["archer","pike","guard","legion","archer","legion"]:["legion","archer","pike","cavalry","guard","legion"],r=[],a=i.filter(c=>c==="cavalry").length,o=i.filter(c=>c==="archer").length;for(let c=0;c<n;c++){let l=s[(c+e.int(0,2))%s.length];c===0&&(l=t==="assault"?"archer":"legion"),a>=2&&c===1&&(l="pike"),o>=2&&c===2&&t!=="assault"&&(l="cavalry"),r.push(l)}return r}function tu(i,t,e){let n=s=>s.reduce((r,a)=>r+yn[a].size,0);return n(i)/Math.max(1,n(t))*e}function va(i,t,e,n,s){let r=e===0?t.x1-6:t.x0+6,a=e===0?t.x0+6:t.x1-6,o=n.canyon?n.canyonCenter(r):(t.z0+t.z1)/2;for(let f of i)f.placed=!1;let c=i.filter(f=>!f.isRanged&&f.typeId!=="cavalry"),l=i.filter(f=>f.isRanged),h=i.filter(f=>f.typeId==="cavalry"),d=(f,x,_)=>{let[g,m]=A0(n,t,x,_,f,e,i);f.x=g,f.z=m,f.face=e===0?Math.PI/2:-Math.PI/2,f.buildSoldiers()},p=(f,x,_)=>{f.forEach((g,m)=>{let S=o+(m-(f.length-1)/2)*_;d(g,x,S)})};if(t.castle){let f=n.castle,x=f.face,_=f.gateX-x*7;c.forEach((g,m)=>d(g,_-x*(m%2)*7,f.cz+(m-(c.length-1)/2)*11)),l.forEach((g,m)=>d(g,f.gateX-x*4,f.cz+(m%2?1:-1)*(9+m*3))),h.forEach((g,m)=>d(g,n.objective.x,n.objective.z+(m-.5)*10));return}p(c,r,13),p(l,(r+a)/2+(e===0?-3:3),14),h.forEach((f,x)=>d(f,r-(e===0?4:-4),o+(x%2?1:-1)*(c.length*7+8+Math.floor(x/2)*9)))}function A0(i,t,e,n,s,r,a){let o=[[0,0]];for(let c=2;c<44;c+=2)for(let l=0;l<12;l++)o.push([Math.cos(l*.5236)*c,Math.sin(l*.5236)*c]);for(let[c,l]of[[9,3],[6,2.5],[0,1]])for(let[h,d]of o){let p=Math.max(t.x0+3,Math.min(t.x1-3,e+h)),f=Math.max(t.z0+3,Math.min(t.z1-3,n+d));if(i.isPassable(p,f,r)&&!(i.clearanceAt(p,f)<l)&&!a.some(x=>x!==s&&x.placed&&Math.hypot(x.x-p,x.z-f)<c))return s.placed=!0,[p,f]}return s.placed=!0,[e,n]}function $c(i,t,e,n,s){let r=Ai[n];for(let a of i){a.aiSmart=s()<r.smart;let o=a.orders;switch(o.retreatAt=s()<.5?.25:.2,o.retreatTo="camp",o.afterRetreat="return",o.stance="balanced",a.typeId){case"archer":o.move="hold",o.target="nearest",o.skirmish=!0;break;case"cavalry":o.move=s()<.5?"flankL":"flankR",o.target="ranged",o.formation="wedge",o.delay=s.int(3,8);break;case"guard":o.move="advance",o.target="strongest",o.formation="block",o.stance="defensive";break;case"pike":o.move="advance",o.target="nearest",o.delay=2;break;default:o.move="advance",o.target=s()<.5?"nearest":"weakest"}t==="assault"&&(o.retreatAt=0,a.isRanged?(o.move="hold",o.skirmish=!1):a.typeId==="cavalry"?(o.move="hold",o.target="objective",o.delay=0):(o.move="hold",o.stance="balanced")),t==="defend"&&(a.isRanged?(o.move="advance",o.target="nearest"):(o.move="advance",o.target="objective",o.stance="aggressive"),a.typeId==="cavalry"&&(o.move="advance",o.delay=25)),t==="hill"&&(!a.isRanged&&s()<.7&&(o.target="objective"),a.isRanged&&(o.move="advance",o.target="nearest")),t==="canyon"&&a.typeId==="cavalry"&&(o.move="advance")}}var Ks=class{constructor(t,e,n,s=1){this.side=s,this.b=t,this.D=Ai[e],this.rng=n,this.t=0}update(t){if(this.t+=t,this.t<this.D.think)return;this.t=0;let e=this.b,n=this.side,s=1-n,r=e.legions.filter(h=>h.side===n&&h.alive),a=e.legions.filter(h=>h.side===s&&h.alive);if(!a.length)return;let o=r.reduce((h,d)=>h+d.count,0),c=a.reduce((h,d)=>h+d.count,0),l=e.map.objective;for(let h of r){if(h.state==="retreat"||h.state==="regroup"||h.state==="melee"||this.rng()>this.D.smart+.2)continue;let d=h.orders;if(e.map.castle&&e.map.castle.owner===n){!e.map.gate.alive&&h.typeId==="cavalry"&&d.move==="hold"&&(d.move="advance",d.target="ranged",e.applyOrders(h)),l&&l.present&&l.present[s]>0&&!h.isRanged&&d.move==="hold"&&(d.move="advance",d.target="objective",e.applyOrders(h));continue}if(l&&l.type==="hill"&&l.score[s]>l.score[n]+10&&!h.isRanged&&d.target!=="objective"){d.target="objective",e.applyOrders(h);continue}o>c*1.3&&d.stance!=="aggressive"&&!h.isRanged?d.stance="aggressive":o<c*.7&&d.stance==="aggressive"&&(d.stance="balanced"),(h.state==="hold"||h.state==="idle")&&!h.isRanged&&e.time>25&&d.move==="hold"&&!(e.map.castle&&e.map.castle.owner===n)&&(d.move="advance",e.applyOrders(h)),h.isRanged&&h.state==="hold"&&e.time>12&&(e.chooseTarget(h,null,h.T.range)||(d.move="advance",e.applyOrders(h))),h.typeId==="cavalry"&&h.aiSmart&&h.target&&h.target.typeId==="pike"&&(h.target=null,h.path=[])}}};var eu=new jt,nu=new jt,ri=new jt,Pi=new Ye,Ma=new Ye,ai=new Le,R0=new Le(0,0,0,"YXZ"),_s=new F,ys=new F(1,1,1),xs=new St,Ix=new F(0,1,0),ba=new jt().makeScale(0,0,0),Sa=class{constructor(t,e,n,s){var o;this.scene=t,this.map=n,this.legions=e,this.group=new ye,t.add(this.group),this.geos=Yh(),this.mat=new Ee({flatShading:!0});let r={};this.defs={};for(let c of e){let l=c.side+":"+c.typeId;this.defs[l]||(this.defs[l]=$h(c.side,c.typeId));for(let h of this.defs[l])r[h.g]=(r[h.g]||0)+c.maxCount}this.meshes={},this.counters={};for(let c in r){let l=new Ws(this.geos[c],this.mat,r[c]);l.instanceMatrix.setUsage(Lc),l.castShadow=s,l.receiveShadow=!1,l.frustumCulled=!1,l.count=r[c];for(let h=0;h<r[c];h++)l.setMatrixAt(h,ba);this.meshes[c]=l,this.counters[c]=0,this.group.add(l)}for(let c of e){let l=this.defs[c.side+":"+c.typeId],h=On[c.side].colors;for(let d of c.soldiers){d.pi=[];let p=.9+Math.random()*.14;for(let f of l){let x=this.counters[f.g]++;d.pi.push(x),xs.setHex((o=h[f.role])!=null?o:16711935);let _=f.role==="skin"||f.role==="horse"?.82+Math.random()*.3:p;xs.multiplyScalar(_),this.meshes[f.g].setColorAt(x,xs)}d.colored=!0}}for(let c in this.meshes)this.meshes[c].instanceColor&&(this.meshes[c].instanceColor.needsUpdate=!0);this.standards=new Map;let a=new Ee({color:5914664,flatShading:!0});for(let c of e){let l=On[c.side],h=new ye,d=new Ot(this.geos.pole,a);h.add(d);let p=new Ee({color:c.side===0?14922817:2829104,flatShading:!0}),f=new Ot(this.geos.eagle,p);h.add(f);let x=new je(1.3,1.6,3,1);x.translate(0,2.35,.08);let _=new Ot(x,new Ee({color:l.colors.banner,side:we,flatShading:!0}));_.userData.base=Float32Array.from(x.attributes.position.array),h.add(_);let g=new Ot(new hn(1.5,.08,.08),p);g.position.y=3.2,h.add(g),h.traverse(m=>{m.castShadow=s}),this.group.add(h),this.standards.set(c,{g:h,flag:_})}this.ringMat=new ve({color:16769146,transparent:!0,opacity:.85,depthWrite:!1}),this.rings=new Map,this.fx=new Zc(t)}ringFor(t){let e=this.rings.get(t);if(!e){let n=new wi(.92,1,40,1);n.rotateX(-Math.PI/2);let s=this.ringMat.clone();s.color.set(t.side===0?16769146:16738906),e=new Ot(n,s),e.renderOrder=3,this.group.add(e),this.rings.set(t,e)}return e}update(t,e,n,s){let r=this.map;for(let a of this.legions){let o=this.defs[a.side+":"+a.typeId],c=a.typeId==="cavalry",l=a.state==="melee",h=a.state==="shoot";for(let f of a.soldiers){if(!f.alive&&f.deadT>2.2){if(f.settled)continue;f.settled=!0}let x=!f.alive,_=x?Math.min(1,f.deadT/.6):0;ai.set(0,f.yaw,0),Pi.setFromEuler(ai);let g=f.y;if(!x&&f.moving&&(g+=Math.abs(Math.sin(f.walk*(c?.9:1.4)))*(c?.12:.07)),x){let S=_*_*(c?1.45:1.5)*f.fall;ai.set(c?0:-S,0,c?S:0),Ma.setFromEuler(ai),Pi.multiply(Ma),g-=_*.15}eu.compose(_s.set(f.x,g,f.z),Pi,ys.set(1,1,1));let m=f.walk*(c?.9:1.4);for(let S=0;S<o.length;S++){let T=o[S],u=T.r[0],A=T.r[1],y=T.r[2],E=T.p[0],C=T.p[1],M=T.p[2];if(!x)switch(T.anim){case"legL":u+=f.moving?Math.sin(m)*.55:0;break;case"legR":u-=f.moving?Math.sin(m)*.55:0;break;case"hlegF":u+=f.moving?Math.sin(m*1.3)*.6:0;break;case"hlegB":u-=f.moving?Math.sin(m*1.3)*.6:0;break;case"horse":u+=f.moving?Math.sin(m*1.3)*.04:0;break;case"arm":u+=l?-1.4+f.swing*2:.35+(f.moving?Math.sin(m)*.2:0);break;case"pike":u+=l?.02+f.swing*.08:-1.48,l&&(M+=f.swing*.35);break;case"lance":u+=l||a.chargeT>0?.08+f.swing*.2:a.speedCur>a.T.speed*.6?.1:-1.1;break;case"shield":l&&(M+=.08);break;case"bow":(f.shoot>0||h)&&(u-=.5,C+=.15);break}ai.set(u,A,y),Ma.setFromEuler(ai),nu.compose(_s.set(E,C,M),Ma,ys.set(1,1,1)),ri.multiplyMatrices(eu,nu),this.meshes[T.g].setMatrixAt(f.pi[S],ri)}if(x&&!f.darkened){f.darkened=!0;for(let S=0;S<o.length;S++){let T=this.meshes[o[S].g];T.getColorAt(f.pi[S],xs),xs.multiplyScalar(.62),T.setColorAt(f.pi[S],xs),T.instanceColor.needsUpdate=!0}}}let d=this.standards.get(a);if(a.alive){d.g.visible=!0;let f=a.soldiers.find(S=>S.alive&&S.slot===Math.floor(a.cols/2))||a.soldiers.find(S=>S.alive),x=f?f.x:a.x,_=f?f.z:a.z;d.g.position.set(x-a.fwdX*.2,r.getHeight(x,_)+(a.typeId==="cavalry"?1.3:.4),_-a.fwdZ*.2),d.g.rotation.y=a.face+Math.PI/2;let g=d.flag.geometry.attributes.position,m=d.flag.userData.base;for(let S=0;S<g.count;S++){let T=m[S*3];g.array[S*3+2]=m[S*3+2]+Math.sin(T*3+t*5+a.id)*.12*(T+.65)}g.needsUpdate=!0}else d.g.visible&&(d.g.rotation.z=Math.min(1.4,(d.g.rotation.z||0)+e*2),d.g.rotation.z>=1.4&&(d.g.visible=!1));if((n===a||s===a)&&a.alive){let f=this.ringFor(a);f.visible=!0;let x=Math.max(a.halfW,a.halfD)+1.2;f.scale.set(x,1,x),f.position.set(a.x,r.getHeight(a.x,a.z)+.25,a.z),f.material.opacity=n===a?.65+Math.sin(t*5)*.2:.45}else this.rings.has(a)&&(this.rings.get(a).visible=!1)}for(let a in this.meshes)this.meshes[a].instanceMatrix.needsUpdate=!0;this.fx.update(t,e,r)}dispose(){this.scene.remove(this.group),this.fx.dispose(),this.group.traverse(t=>{t.geometry&&t.geometry.dispose()})}},vs=class{constructor(t,e,n,s){this.mesh=new Ws(e,n,s),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(Lc),this.items=[],this.n=s,t.add(this.mesh);for(let r=0;r<s;r++)this.mesh.setMatrixAt(r,ba)}spawn(t){this.items.length<this.n&&this.items.push(t)}},Zc=class{constructor(t){this.scene=t,this.sparks=new vs(t,new Qr(.12),new ve({color:16773296}),260),this.dust=new vs(t,new as(.5,0),new Ee({color:13153684,flatShading:!0}),220);let e=new hn(.05,.05,1);this.arrows=new vs(t,e,new ve({color:3811866}),420),this.debris=new vs(t,new hn(.4,.15,.7),new Ee({color:7030054,flatShading:!0}),60),this.battleArrows=[]}burst(t,e,n,s=8,r=!1){for(let a=0;a<s;a++)this.sparks.spawn({x:t,y:e,z:n,vx:(Math.random()-.5)*6,vy:2+Math.random()*4,vz:(Math.random()-.5)*6,life:.35+Math.random()*.25,t:0,s:r?1.6:1})}puff(t,e,n,s=3,r=1){for(let a=0;a<s;a++)this.dust.spawn({x:t+(Math.random()-.5)*2,y:e+.3,z:n+(Math.random()-.5)*2,vx:(Math.random()-.5)*1.5,vy:.6+Math.random(),vz:(Math.random()-.5)*1.5,life:.9+Math.random()*.6,t:0,s:r*(.6+Math.random()*.6)})}splinters(t,e,n){for(let s=0;s<24;s++)this.debris.spawn({x:t,y:e+2+Math.random()*2,z:n+(Math.random()-.5)*5,vx:(Math.random()-.5)*8,vy:3+Math.random()*5,vz:(Math.random()-.5)*8,life:2.5,t:0,rx:Math.random()*6,ry:Math.random()*6})}update(t,e,n){let s=(c,l)=>{let h=c.items,d=0;for(let p=0;p<h.length;p++){let f=h[p];f.t+=e,f.t<f.life&&(h[d++]=f)}h.length=d;for(let p=0;p<c.n;p++)p<h.length?(l(h[p]),c.mesh.setMatrixAt(p,ri)):p<c.lastCount&&c.mesh.setMatrixAt(p,ba);c.lastCount=h.length,c.mesh.instanceMatrix.needsUpdate=!0};s(this.sparks,c=>{c.vy-=14*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e;let l=(1-c.t/c.life)*c.s;ri.compose(_s.set(c.x,c.y,c.z),Pi.setFromEuler(ai.set(c.t*9,c.t*7,0)),ys.set(l,l,l))}),s(this.dust,c=>{c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e,c.vy*=.96;let l=Math.sin(c.t/c.life*Math.PI)*c.s;ri.compose(_s.set(c.x,c.y,c.z),Pi.identity(),ys.set(l,l,l))}),s(this.debris,c=>{c.vy-=14*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e;let l=n.getHeight(c.x,c.z)+.1;c.y<l?(c.y=l,c.vx*=.5,c.vz*=.5,c.vy=0):c.rx+=e*6,ri.compose(_s.set(c.x,c.y,c.z),Pi.setFromEuler(ai.set(c.rx,c.ry,0)),ys.set(1,1,1))});let r=this.battleArrows,a=this.arrows,o=0;for(let c of r){let l=(this.simTime-c.t0)/c.dur;if(l<0||l>1||o>=a.n)continue;let h=c.x0+(c.x1-c.x0)*l,d=c.z0+(c.z1-c.z0)*l,p=c.y0+(c.y1-c.y0)*l+Math.sin(l*Math.PI)*c.arc,f=c.x1-c.x0,x=c.z1-c.z0,_=c.y1-c.y0+Math.cos(l*Math.PI)*Math.PI*c.arc,g=Math.hypot(f,x),m=Math.atan2(f,x),S=-Math.atan2(_,g);ri.compose(_s.set(h,p,d),Pi.setFromEuler(R0.set(S,m,0)),ys.set(1,1,1)),a.mesh.setMatrixAt(o++,ri)}for(let c=o;c<(a.lastCount||0);c++)a.mesh.setMatrixAt(c,ba);a.lastCount=o,a.mesh.instanceMatrix.needsUpdate=!0}dispose(){for(let t of[this.sparks,this.dust,this.arrows,this.debris])this.scene.remove(t.mesh),t.mesh.geometry.dispose()}};var wa=class{constructor(){this.ctx=null,this.enabled=!0,this.last={}}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*1.5;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;this.startAmbience()}catch{this.ctx=null}}setEnabled(t){this.enabled=t,this.master&&(this.master.gain.value=t?.55:0)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}throttle(t,e){let n=performance.now();return this.last[t]&&n-this.last[t]<e?!1:(this.last[t]=n,!0)}noise(t,e,n,s,r="bandpass",a=0){let o=this.ctx,c=o.currentTime+a,l=o.createBufferSource();l.buffer=this.noiseBuf;let h=o.createBiquadFilter();h.type=r,h.frequency.value=e,h.Q.value=n;let d=o.createGain();return d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(s,c+.01),d.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(h),h.connect(d),d.connect(this.master),l.start(c,Math.random()*1,t+.05),h}tone(t,e,n,s,r=0,a=0){let o=this.ctx,c=o.currentTime+r,l=o.createOscillator();l.type=n,l.frequency.setValueAtTime(t,c),a&&l.frequency.exponentialRampToValueAtTime(t*a,c+e);let h=o.createGain();h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(s,c+.02),h.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h),h.connect(this.master),l.start(c),l.stop(c+e+.05)}play(t,e=1){if(!(!this.ctx||!this.enabled))switch(t){case"click":this.tone(880,.06,"triangle",.08*e);break;case"select":this.tone(520,.07,"triangle",.08*e),this.tone(780,.08,"triangle",.06*e,.05);break;case"place":this.noise(.12,300,1,.25*e,"lowpass");break;case"clash":if(!this.throttle("clash",70))return;this.noise(.09,3200+Math.random()*2e3,8,.18*e),this.tone(1800+Math.random()*900,.14,"square",.015*e);break;case"impact":this.noise(.5,180,.8,.6*e,"lowpass"),this.noise(.25,2500,3,.25*e);break;case"volley":if(!this.throttle("volley",200))return;this.noise(.5,1800,2,.12*e,"bandpass");break;case"arrowhit":if(!this.throttle("ahit",120))return;for(let n=0;n<4;n++)this.noise(.05,900+Math.random()*600,4,.08*e,"bandpass",n*.04+Math.random()*.05);break;case"death":if(!this.throttle("death",160))return;this.noise(.18,260,1.5,.1*e,"lowpass");break;case"gate":if(!this.throttle("gate",250))return;this.noise(.35,140,1,.5*e,"lowpass"),this.tone(70,.3,"sine",.3*e,0,.6);break;case"gatebroken":this.noise(1.4,200,.7,.8*e,"lowpass"),this.noise(.8,900,1,.3*e,"bandpass",.1);break;case"horn":{this.tone(146.8,1.6,"sawtooth",.09*e,0,1),this.tone(146.8*1.5,1.2,"sawtooth",.05*e,.35),this.tone(146.8*2,.9,"sawtooth",.04*e,.9);break}case"retreat":this.tone(330,.3,"sawtooth",.05*e),this.tone(262,.5,"sawtooth",.05*e,.28);break;case"victory":{let n=[392,523,659,784,659,784,1046];n.forEach((s,r)=>this.tone(s,r===n.length-1?1.2:.22,"triangle",.12*e,r*.16)),n.forEach((s,r)=>this.tone(s/2,r===n.length-1?1.2:.22,"sawtooth",.03*e,r*.16));break}case"defeat":{[392,349,311,262].forEach((s,r)=>this.tone(s,.5,"triangle",.1*e,r*.35)),this.tone(131,1.8,"sawtooth",.04*e,.9);break}case"drum":this.tone(90,.25,"sine",.35*e,0,.5),this.noise(.08,400,1,.15*e,"lowpass");break}}startAmbience(){let t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=420;let s=t.createGain();s.gain.value=.035;let r=t.createOscillator();r.frequency.value=.08;let a=t.createGain();a.gain.value=180,r.connect(a),a.connect(n.frequency),e.connect(n),n.connect(s),s.connect(this.master),e.start(),r.start(),this.amb=s}};var tn=(i,t="0 0 48 48")=>`<svg viewBox="${t}" xmlns="http://www.w3.org/2000/svg">${i}</svg>`;function Ms(i,t=0){let e=t===0?"#4a8cf0":"#e0473c",n=t===0?"#1f4c9a":"#8e1f1a",s=t===0?"#e3b441":"#cfd3da",r=`<circle cx="24" cy="24" r="22" fill="${n}" opacity=".55"/><circle cx="24" cy="24" r="22" fill="none" stroke="${e}" stroke-width="2"/>`;switch(i){case"legion":return tn(`${r}<rect x="11" y="13" width="15" height="22" rx="3" fill="${e}" stroke="${s}" stroke-width="1.6"/><circle cx="18.5" cy="24" r="2.4" fill="${s}"/>
        <path d="M28 33 L37 12 L39 13 L31 34 Z" fill="#e8edf5"/><path d="M26.5 31 L33.5 34.5" stroke="${s}" stroke-width="2.6" stroke-linecap="round"/>`);case"pike":return tn(`${r}<path d="M13 38 L35 9" stroke="#caa06a" stroke-width="2.4" stroke-linecap="round"/><path d="M35 9 L38 5 L37.5 11.5 Z" fill="#e8edf5"/>
        <path d="M20 38 L38 15" stroke="#caa06a" stroke-width="2.4" stroke-linecap="round"/><path d="M38 15 L41 11 L40.5 17.5 Z" fill="#e8edf5"/>
        <circle cx="16" cy="28" r="6" fill="${e}" stroke="${s}" stroke-width="1.6"/>`);case"archer":return tn(`${r}<path d="M16 9 Q34 24 16 39" fill="none" stroke="#caa06a" stroke-width="2.8" stroke-linecap="round"/><path d="M16 9 L16 39" stroke="#f0ead8" stroke-width="1"/>
        <path d="M13 24 L37 24" stroke="#e8edf5" stroke-width="1.8"/><path d="M37 24 L32 21 L32 27 Z" fill="#e8edf5"/><path d="M13 24 L10 21 M13 24 L10 27" stroke="${s}" stroke-width="1.6"/>`);case"cavalry":return tn(`${r}<path d="M14 38 L16 27 Q15 18 22 13 L25 8 L27 13 Q34 14 36 22 L34 25 L29 22 L27 26 Q30 31 28 38 Z" fill="${e}" stroke="${s}" stroke-width="1.6" stroke-linejoin="round"/>
        <circle cx="29" cy="17" r="1.4" fill="${s}"/><path d="M22 13 Q17 19 18 27" stroke="${s}" stroke-width="2" fill="none"/>`);case"guard":return tn(`${r}<rect x="13" y="9" width="22" height="30" rx="3" fill="${e}" stroke="${s}" stroke-width="2"/><path d="M24 11 L24 37 M15 24 L33 24" stroke="${s}" stroke-width="1.8"/>
        <circle cx="24" cy="24" r="3.4" fill="${s}"/>`)}return""}function iu(i){let t='stroke="#f5d27a" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"';switch(i){case"random":return tn(`<rect x="9" y="9" width="30" height="30" rx="6" ${t}/><circle cx="17" cy="17" r="2.4" fill="#f5d27a"/><circle cx="31" cy="31" r="2.4" fill="#f5d27a"/><circle cx="24" cy="24" r="2.4" fill="#f5d27a"/><circle cx="31" cy="17" r="2.4" fill="#f5d27a"/><circle cx="17" cy="31" r="2.4" fill="#f5d27a"/>`);case"assault":return tn(`<path d="M8 40 L8 18 L12 18 L12 14 L16 14 L16 18 L20 18 L20 14 L24 14 L24 18 L28 18 L28 14 L32 14 L32 18 L36 18 L36 14 L40 14 L40 40 Z" ${t}/><path d="M20 40 L20 30 Q24 25 28 30 L28 40" ${t}/><path d="M34 6 L42 12 M42 6 L34 12" stroke="#e0473c" stroke-width="2.4" stroke-linecap="round"/>`);case"defend":return tn(`<path d="M24 6 L39 11 L37 28 Q33 37 24 42 Q15 37 11 28 L9 11 Z" ${t}/><path d="M17 24 L22 29 L31 18" stroke="#4a8cf0" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`);case"canyon":return tn(`<path d="M4 14 L14 14 L18 22 L16 40 L4 40 Z" ${t}/><path d="M44 12 L32 12 L29 22 L32 40 L44 40 Z" ${t}/><path d="M21 40 Q24 30 22 22 Q25 17 27 14" stroke="#caa06a" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`);case"river":return tn(`<path d="M6 16 Q12 12 18 16 T30 16 T42 16" ${t}/><path d="M6 24 Q12 20 18 24 T30 24 T42 24" stroke="#6ab4f0" stroke-width="2" fill="none"/><path d="M6 32 Q12 28 18 32 T30 32 T42 32" ${t}/><path d="M16 38 Q24 30 32 38" stroke="#caa06a" stroke-width="2.4" fill="none"/>`);case"hill":return tn(`<path d="M4 40 Q24 8 44 40 Z" ${t}/><rect x="18" y="18" width="3" height="7" fill="#f5d27a"/><rect x="23" y="16" width="3" height="8" fill="#f5d27a"/><rect x="28" y="18" width="3" height="7" fill="#f5d27a"/>`);case"forest":return tn(`<path d="M14 40 L14 34 M14 34 L6 34 L14 20 L22 34 Z M9 26 L14 14 L19 26" ${t}/><path d="M32 40 L32 32 M32 32 L22 32 L32 12 L42 32 Z M26 22 L32 8 L38 22" ${t}/>`)}return""}var Jc={melee:"\u2694",shoot:"\u27B6",retreat:"\u21A9",regroup:"\u26FA",wait:"\u23F3",hold:"\u26E8",move:"\u279C",engage:"\u279C",kite:"\u21B6",breach:"\u2692",idle:"\xB7",dead:"\u271D"},bs=["I","II","III","IV","V","VI","VII","VIII"];var _t=i=>document.querySelector(i),tr=i=>Array.from(document.querySelectorAll(i)),bn={get(i,t){try{let e=localStorage.getItem("legionen."+i);return e?JSON.parse(e):t}catch{return t}},set(i,t){try{localStorage.setItem("legionen."+i,JSON.stringify(t))}catch{}}},su={high:{shadows:!0,shadowSize:2048,pixelRatio:2,aa:!0},medium:{shadows:!0,shadowSize:1024,pixelRatio:1.5,aa:!0},low:{shadows:!1,shadowSize:512,pixelRatio:1,aa:!1}},ke=Object.assign({sound:!0,quality:"high"},bn.get("settings",{})),Te=Object.assign({wins:0,losses:0,streak:0,best:0},bn.get("stats",{})),Bt=new ha(_t("#c"),su[ke.quality]||su.high),Yt=new wa;Yt.setEnabled(ke.sound);var P={phase:"loading",cfg:Object.assign({scenario:"random",biome:"random",diff:"normal",army:["legion","legion","archer","cavalry"]},bn.get("cfg",{})),cur:null,selected:null,speed:1,paused:!1,mode:null,tab:"move",slotSel:0,last:null};function C0(i){let t=dn(Math.random()*1e9|0),e=i.scenario==="random"?t.pick(Bc):i.scenario,n=i.biome==="random"?t.pick(Object.keys(vn)):i.biome;return{scenario:e,biome:n,diff:i.diff,army:i.army.slice(),seed:Math.random()*1e9|0}}function cu(i){I0(),jh();let t=new ma(i.scenario,i.biome,i.seed);Bt.setupEnvironment(i.biome,t.fogDensity),Bt.groundFn=(g,m)=>t.terrainHeight(g,m);let e=Zh(t,Bt.scene),n=dn(i.seed+7),s=Ai[i.diff],r=i.demo?Yc(["legion","archer","cavalry","pike"],i.scenario,n):i.army,a=r.map((g,m)=>{let S=new Js(0,g,0,0,1);return S.index=m,S}),o=i.botTypes||Yc(r,i.scenario,n),c=tu(r,o,i.demo?1:s.size),l=o.map((g,m)=>{let S=new Js(1,g,0,0,c);return S.index=m,S}),h=[...a,...l];va(a,t.zones[0],0,t,n),va(l,t.zones[1],1,t,n),$c(l,i.scenario,t,i.diff,n),i.demo&&$c(a,i.scenario,t,"normal",n);let d=new ya(t,h,us[i.scenario]),p=new Ks(d,i.diff,n),f=new Sa(Bt.scene,h,t,Bt.quality.shadows),x=new ua(Bt.scene,t),_={opts:i,map:t,world:e,legions:h,player:a,bot:l,battle:d,brain:p,units:f,overlays:x,labels:new Map,time:0,dustT:0};return i.demo&&(_.brain0=new Ks(d,"normal",n,0)),P.cur=_,P0(_),x.showZones(!1),_}function I0(){let i=P.cur;i&&(Bt.scene.remove(i.world.group),i.world.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose&&t.material.dispose()}),i.units.dispose(),i.overlays.dispose(),_t("#labels").innerHTML="",P.cur=null,P.selected=null,P.mode=null)}function Bn(i){return`${bs[i.index]||i.index+1}. ${i.name}`}function P0(i){let t=_t("#labels");t.innerHTML="";for(let e of i.legions){let n=document.createElement("div");n.className="lbl"+(e.side===1?" e":""),n.innerHTML=`<div class="plate">${Ms(e.typeId,e.side)}<span class="n">${bs[e.index]}</span><span class="c">${e.count}</span><span class="s"></span></div><div class="hpb"><i></i></div>`,n.addEventListener("pointerdown",s=>{s.stopPropagation(),pu(s,e)}),t.appendChild(n),i.labels.set(e,{el:n,c:n.querySelector(".c"),s:n.querySelector(".s"),hp:n.querySelector(".hpb i"),lastC:-1,lastS:""})}if(i.map.gate){let e=document.createElement("div");e.className="gatelbl",e.innerHTML='Burgtor<div class="hpb"><i></i></div>',t.appendChild(e),i.gateLbl={el:e,hp:e.querySelector("i")}}}var en={x:0,y:0,visible:!1};function D0(i){let t=P.phase==="deploy"||P.phase==="orders"||P.phase==="battle";for(let e of i.legions){let n=i.labels.get(e);if(!t||!e.alive){n.el.style.display!=="none"&&(n.el.style.display="none");continue}let s=i.map.getHeight(e.x,e.z)+(e.typeId==="cavalry"?5.2:4.4);if(Bt.project(e.x,s,e.z,en),!en.visible||en.x<-60||en.y<-60||en.x>innerWidth+60||en.y>innerHeight+60){n.el.style.display="none";continue}n.el.style.display="",n.el.style.transform=`translate(${en.x.toFixed(1)}px, ${en.y.toFixed(1)}px) translate(-50%, -100%)`,n.lastC!==e.count&&(n.c.textContent=e.count,n.hp.style.width=(e.ratio*100).toFixed(0)+"%",n.lastC=e.count);let r=P.phase==="battle"&&Jc[e.state]||"";n.lastS!==r&&(n.s.textContent=r,n.lastS=r);let a=P.selected===e,o=P.selected&&P.selected.side===0&&P.selected.orders.target==="legion"&&P.selected.orders.targetId===e.id;n.el.classList.toggle("sel",a),n.el.classList.toggle("tgt",!!o)}if(i.gateLbl){let e=i.map.gate;t&&e.alive&&P.phase==="battle"&&e.hp<e.maxHp?(Bt.project(e.x,i.map.castle.base+8,e.z,en),i.gateLbl.el.style.display=en.visible?"":"none",i.gateLbl.el.style.left=en.x+"px",i.gateLbl.el.style.top=en.y+"px",i.gateLbl.hp.style.width=(e.hp/e.maxHp*100).toFixed(0)+"%"):i.gateLbl.el.style.display="none"}}function Aa(i){for(let t of tr(".screen"))t.id!=="dlg"&&t.classList.toggle("show",t.id===i)}function Ra(){P.phase="menu",P.paused=!1,_t("#hud").classList.add("hidden"),Aa("scr-menu"),_t("#menu-stats").innerHTML=Te.wins+Te.losses>0?`Siege <b>${Te.wins}</b> \xB7 Niederlagen <b>${Te.losses}</b> \xB7 Beste Serie <b>${Te.best}</b>`:"Deine erste Schlacht wartet.",lu()}function lu(){let i=dn(Math.random()*1e9|0),t=i.pick(["canyon","river","hill","forest","river","hill"]),e=i.pick(Object.keys(vn)),n=cu({scenario:t,biome:e,diff:"normal",army:[],seed:Math.random()*1e9|0,demo:!0});n.battle.begin(),n.battle.events.length=0,P.demo=!0,P.speed=1,Bt.cam.tx=0,Bt.cam.tz=0,Bt.cam.tdist=78,Bt.cam.tpitch=.62,Bt.cam.tyaw=i.range(-.6,.6)}function U0(){P.phase="setup",Aa("scr-setup"),hu()}function hu(){let i=P.cfg,t=_t("#scen-grid");t.innerHTML=["random",...Bc].map(n=>`<div class="scen ${i.scenario===n?"on":""}" data-s="${n}">${iu(n)}<span>${n==="random"?"Zufall":us[n].name}</span></div>`).join(""),_t("#scen-desc").textContent=i.scenario==="random"?"Ein zuf\xE4lliges Szenario auf einer zuf\xE4lligen Karte \u2013 lass dich \xFCberraschen.":us[i.scenario].desc,_t("#biome-chips").innerHTML=[["random","Zufall"],...Object.entries(vn).map(([n,s])=>[n,s.name])].map(([n,s])=>`<button class="chip ${i.biome===n?"on":""}" data-b="${n}">${s}</button>`).join(""),_t("#diff-chips").innerHTML=Object.entries(Ai).map(([n,s])=>`<button class="chip ${i.diff===n?"on":""}" data-d="${n}">${s.name}</button>`).join("");let e=[];for(let n=0;n<5;n++){let s=i.army[n],r=P.slotSel===n?" sel":"";s?e.push(`<div class="slot filled${r}" data-slot="${n}"><span class="num">${bs[n]}</span>${Ms(s,0)}<span>${yn[s].names[0]}</span><small>${yn[s].size} Mann</small>${i.army.length>1?`<span class="x" data-rm="${n}">\u2715</span>`:""}</div>`):e.push(`<div class="slot${r}" data-slot="${n}"><span class="plus">+</span><span>Legion</span></div>`)}_t("#army-slots").innerHTML=e.join(""),_t("#type-grid").innerHTML=Bh.map(n=>{let s=yn[n],r=Object.entries(s.stats).map(([a,o])=>`<span>${a}</span><div class="bar"><i style="width:${o*20}%"></i></div>`).join("");return`<div class="tcard" data-t="${n}">${Ms(n,0)}<div><b>${s.names[0]} <span style="color:var(--muted);font-weight:400;font-size:11px">\xB7 ${s.size} Mann</span></b><small>${s.desc[0]}</small></div><div class="bars">${r}</div></div>`}).join(""),bn.set("cfg",i)}_t("#scr-setup").addEventListener("click",i=>{let t=P.cfg,e=i.target.closest("[data-s]"),n=i.target.closest("[data-b]"),s=i.target.closest("[data-d]"),r=i.target.closest("[data-rm]"),a=i.target.closest("[data-slot]"),o=i.target.closest("[data-t]");if(e)t.scenario=e.dataset.s;else if(n)t.biome=n.dataset.b;else if(s)t.diff=s.dataset.d;else if(r)t.army.splice(+r.dataset.rm,1),P.slotSel=Math.min(t.army.length,4);else if(a)P.slotSel=Math.min(+a.dataset.slot,t.army.length);else if(o){let c=P.slotSel;c<t.army.length?t.army[c]=o.dataset.t:t.army.length<5&&t.army.push(o.dataset.t),P.slotSel=Math.min(t.army.length,4),t.army.length===5&&c===4&&(P.slotSel=4)}else return;Yt.play("click"),hu()});function ru(i){Yt.unlock(),P.demo=!1;let t=C0(i);P.last=t,jc(t)}function jc(i){let t=cu(i);P.phase="deploy",P.paused=!1,P.speed=1,Aa(null),_t("#hud").classList.remove("hidden"),t.overlays.showZones(!0);let e=t.map.zones[0];Bt.cam.tyaw=0,Bt.cam.tpitch=.95,Bt.focus((e.x0+e.x1)/2*.45,2,100),wn(),Di(null),nn("Ziehe deine Legionen in die blaue Zone \xB7 Tippe auf Feinde zum Aufkl\xE4ren"),_t("#feed").innerHTML=""}function z0(){let i=P.cur;P.phase="orders",i.overlays.showZones(!1),wn(),Di(i.player[0]),nn("W\xE4hle eine Legion und lege Marschroute, Angriff und R\xFCckzug fest"),Sn()}function N0(){let i=P.cur;P.phase="battle",P.mode=null,i.battle.begin(),i.overlays.clearRoutes(),wn(),nn(""),oi(),P.selected=null,el("ZUM ANGRIFF!"),Yt.play("drum"),setTimeout(()=>Yt.play("drum"),350)}function wn(){let i=P.cur,t=P.phase,e=us[i.opts.scenario];_t("#hud-phase").textContent=t==="deploy"?`Aufstellung \xB7 ${e.name}`:t==="orders"?`Befehle \xB7 ${e.name}`:e.name,_t("#hud-goal").textContent=e.goal+` (${vn[i.opts.biome].name})`,_t("#hud-battle").style.visibility=t==="battle"?"visible":"hidden",_t("#speed-ctl").style.display=t==="battle"?"":"none",_t("#hud-time").style.display=t==="battle"?"":"none",_t("#pause-banner").classList.toggle("show",t==="battle"&&P.paused),_t("#btn-pause").classList.toggle("on",P.paused);for(let n of tr("[data-speed]"))n.classList.toggle("on",+n.dataset.speed===P.speed);_t("#btn-sound").textContent=ke.sound?"\u{1F50A}":"\u{1F507}",L0(),ci()}function ci(){let i=_t("#actions");if(P.mode==="waypoints"){i.innerHTML='<button class="btn" data-a="wp-clear">Zur\xFCcksetzen</button><button class="btn primary" data-a="wp-done">\u2713 Route fertig</button>';return}if(P.mode==="pickTarget"){i.innerHTML='<button class="btn" data-a="mode-cancel">Abbrechen</button>';return}switch(P.phase){case"deploy":i.innerHTML=`<button class="btn" data-a="auto">Auto</button><button class="btn" data-a="rotate" ${P.selected?"":"disabled"}>\u27F3 Drehen</button><button class="btn primary" data-a="to-orders">Befehle \u25B6</button>`;break;case"orders":i.innerHTML='<button class="btn" data-a="to-deploy">\u25C0 Aufstellung</button><button class="btn primary" data-a="fight">\u2694 Schlacht beginnen</button>';break;case"battle":i.innerHTML=P.selected&&P.selected.side===0&&P.selected.alive&&!_t("#orders").classList.contains("show")?'<button class="btn" data-a="open-orders">Befehle</button>':"";break;default:i.innerHTML=""}}_t("#actions").addEventListener("click",i=>{let t=i.target.closest("[data-a]");if(!t)return;let e=P.cur;switch(Yt.play("click"),t.dataset.a){case"auto":{for(let n of e.player)n.placed=!1;va(e.player,e.map.zones[0],0,e.map,dn(Date.now()|0)),Hn("Legionen automatisch aufgestellt");break}case"rotate":P.selected&&(P.selected.face+=Math.PI/4,P.selected.formDirty=!0);break;case"to-orders":z0();break;case"to-deploy":oi(),e.overlays.clearRoutes(),P.phase="deploy",e.overlays.showZones(!0),wn(),nn("Ziehe deine Legionen in die blaue Zone");break;case"fight":N0();break;case"wp-clear":P.selected&&(P.selected.orders.waypoints=[],Sn());break;case"wp-done":fu();break;case"mode-cancel":P.mode=null,nn(""),P.selected&&(P.selected.orders.target==="legion"&&P.selected.orders.targetId<0&&(P.selected.orders.target="nearest"),Es(P.selected)),ci();break;case"open-orders":P.selected&&Es(P.selected);break}});function L0(){let i=P.cur,t=_t("#roster");t.innerHTML=i.player.map((e,n)=>`<div class="lchip" data-l="${n}">${Ms(e.typeId,0)}<div class="t"><b>${bs[e.index]}. ${e.name}</b><span class="cnt">${e.count}/${e.maxCount}</span></div><span class="st"></span><div class="hp"><i style="width:${e.ratio*100}%"></i></div></div>`).join(""),P.rosterEls=tr("#roster .lchip").map(e=>({el:e,cnt:e.querySelector(".cnt"),st:e.querySelector(".st"),hp:e.querySelector(".hp i")})),Ta()}function Ta(){let i=P.cur;!i||!P.rosterEls||i.player.forEach((t,e)=>{let n=P.rosterEls[e];if(!n)return;n.el.classList.toggle("sel",P.selected===t),n.el.classList.toggle("dead",!t.alive),n.cnt.textContent=`${t.count}/${t.maxCount}`,n.hp.style.width=(t.ratio*100).toFixed(0)+"%";let s=P.phase==="battle"?Jc[t.state]||"":t.orders.delay?"\u23F3":"";n.st.textContent=s,n.st.style.display=s?"":"none"})}_t("#roster").addEventListener("click",i=>{let t=i.target.closest("[data-l]");if(!t)return;let e=P.cur.player[+t.dataset.l];e.alive&&(Yt.play("select"),P.selected===e&&Bt.focus(e.x,e.z,Math.min(Bt.cam.tdist,60)),Di(e,!0))});function Di(i,t=!1){if(P.selected=i,i&&i.side===0&&(P.phase==="orders"||P.phase==="battle")?Es(i):oi(),i&&i.side===1){let e=yn[i.typeId];Hn(`Feind: ${Bn(i)} \xB7 ${i.count} Mann`)}t&&i&&P.phase==="battle"&&Bt.focus(i.x,i.z),Ta(),ci(),P.phase==="orders"&&Sn()}var uu={move:[{key:"move",label:"Marschroute",opts:[["advance","Vorr\xFCcken"],["hold","Halten"],["flankL","\u21B0 Flanke links"],["flankR","Flanke rechts \u21B1"],["path","\u270E Eigene Route"]],help:{advance:"R\xFCckt direkt auf das gew\xE4hlte Ziel vor.",hold:"H\xE4lt die Stellung und greift nur Feinde in der N\xE4he an.",flankL:"Weiter Bogen links herum \u2013 Angriff in Flanke oder R\xFCcken (+30 % / +60 %).",flankR:"Weiter Bogen rechts herum \u2013 Angriff in Flanke oder R\xFCcken (+30 % / +60 %).",path:"Tippe bis zu 4 Wegpunkte auf die Karte. Danach wird das Ziel angegriffen."}},{key:"formation",label:"Formation",opts:[["line","Linie"],["block","Block"],["wedge","Keil"]],help:{line:"Breite Front \u2013 ausgewogen, viele K\xE4mpfer im Kontakt.",block:"Kompakt: +15 % Verteidigung, weniger Pfeilschaden, etwas langsamer.",wedge:"Keil: +10 % Angriff, st\xE4rkerer Sturmangriff, aber verwundbarer."}},{key:"delay",label:"Startsignal",opts:[[0,"Sofort"],[5,"+5 s"],[10,"+10 s"],[20,"+20 s"]],help:{0:"Marschiert beim Hornsignal los.",5:"Wartet 5 Sekunden \u2013 gut f\xFCr gestaffelte Angriffe.",10:"Wartet 10 Sekunden \u2013 z. B. bis die Front gebunden ist.",20:"Wartet 20 Sekunden \u2013 ideal als Reserve oder Hinterhalt."}}],attack:[{key:"target",label:"Angriffsziel",opts:[["nearest","N\xE4chster"],["weakest","Schw\xE4chster"],["strongest","St\xE4rkster"],["ranged","Fernk\xE4mpfer"],["legion","\u25CE Legion w\xE4hlen"],["objective","Zielgebiet"]],help:{nearest:"Greift den n\xE4chstgelegenen Feind an.",weakest:"Sucht angeschlagene Legionen, um sie zu vernichten.",strongest:"Bindet die st\xE4rkste feindliche Legion.",ranged:"Jagt Bogensch\xFCtzen \u2013 ideal f\xFCr Reiterei.",legion:"Tippe auf eine feindliche Legion als festes Ziel.",objective:"Zieht zum Missionsziel und h\xE4lt es."}},{key:"stance",label:"Haltung",opts:[["aggressive","Aggressiv"],["balanced","Ausgewogen"],["defensive","Defensiv"]],help:{aggressive:"+15 % Angriff, \u221210 % Verteidigung, verfolgt Feinde weit.",balanced:"Ausgewogenes Verhalten.",defensive:"+20 % Verteidigung, \u221210 % Angriff, bleibt eher in Position."}},{key:"skirmish",label:"Ausweichen (Sch\xFCtzen)",only:"archer",opts:[[!0,"An"],[!1,"Aus"]],help:{true:"Weicht anr\xFCckender Infanterie aus und schie\xDFt weiter.",false:"Bleibt stehen und schie\xDFt, bis der Feind da ist."}}],retreat:[{key:"retreatAt",label:"R\xFCckzug bei St\xE4rke",opts:[[0,"Nie"],[.25,"unter 25 %"],[.5,"unter 50 %"]],help:{0:"K\xE4mpft bis zum letzten Mann.",.25:"Zieht sich bei schweren Verlusten zur\xFCck.",.5:"Zieht sich fr\xFCh zur\xFCck, um die Legion zu retten."}},{key:"retreatTo",label:"R\xFCckzug nach",opts:[["camp","Ins Lager"],["ally","Zu Verb\xFCndeten"]],help:{camp:"Flieht zum eigenen Lager (bei Burgen: zum Burghof).",ally:"Zieht sich hinter die n\xE4chste eigene Legion zur\xFCck."}},{key:"afterRetreat",label:"Nach dem Sammeln",opts:[["hold","Stellung halten"],["return","Erneut angreifen"]],help:{hold:"Sammelt sich und verteidigt die Position.",return:"Sammelt sich und kehrt in den Kampf zur\xFCck."}}]};function Es(i){let t=P.cur;_t("#orders").classList.add("show"),document.body.classList.add("orders-open"),_t("#oh-icon").innerHTML=Ms(i.typeId,0),_t("#oh-name").textContent=Bn(i);let e=yn[i.typeId];_t("#oh-sub").textContent=`${i.count}/${i.maxCount} Mann \xB7 ${e.desc[0]}`;for(let n of tr("#tabs button"))n.classList.toggle("on",n.dataset.tab===P.tab);du(i),ci()}function oi(){_t("#orders").classList.remove("show"),document.body.classList.remove("orders-open"),ci()}function du(i){let t=P.cur,e=t.map.objective,n=i.orders,s=uu[P.tab].filter(r=>!r.only||r.only===i.typeId);_t("#tab-body").innerHTML=s.map(r=>{let a=r.opts;r.key==="target"&&(a=a.filter(([h])=>h!=="objective"||e).map(([h,d])=>[h,h==="objective"?e.type==="keep"?"\u{1F3F0} Burghof":"\u26F0 Steinkreis":d]));let o=n[r.key],c=a.map(([h,d])=>`<button class="chip ${String(o)===String(h)?"on":""}" data-k="${r.key}" data-v="${h}">${d}</button>`).join(""),l="";if(r.key==="target"&&o==="legion"){let h=t.legions.find(d=>d.id===n.targetId&&d.alive);l=h?` Ziel: <b>${Bn(h)}</b>`:" Noch kein Ziel gew\xE4hlt."}return r.key==="move"&&o==="path"&&(l=` ${n.waypoints.length}/4 Wegpunkte gesetzt.`),`<div class="og"><label>${r.label}</label><div class="chips">${c}</div><p>${r.help[String(o)]||""}${l}</p></div>`}).join("")}_t("#tabs").addEventListener("click",i=>{let t=i.target.closest("[data-tab]");!t||!P.selected||(P.tab=t.dataset.tab,Yt.play("click"),Es(P.selected))});_t("#oh-close").addEventListener("click",()=>{oi(),Yt.play("click")});_t("#tab-body").addEventListener("click",i=>{let t=i.target.closest("[data-k]"),e=P.selected;if(!t||!e)return;let n=t.dataset.k,s=t.dataset.v;(n==="delay"||n==="retreatAt")&&(s=+s),n==="skirmish"&&(s=s==="true"),e.orders[n]=s,Yt.play("click"),n==="move"&&s==="path"?(e.orders.waypoints=[],P.mode="waypoints",nn("Tippe bis zu 4 Wegpunkte auf die Karte"),oi()):n==="target"&&s==="legion"?(P.mode="pickTarget",nn("Tippe auf eine feindliche (rote) Legion"),oi()):P.mode&&(P.mode=null,nn("")),n==="formation"&&(e.formDirty=!0),P.phase==="battle"&&P.mode!=="waypoints"&&P.cur.battle.applyOrders(e),du(e),ci(),Sn()});_t("#btn-copy").addEventListener("click",()=>{let i=P.selected;if(!i)return;let t=uu[P.tab].map(e=>e.key).filter(e=>e!=="move"&&e!=="target"&&e!=="skirmish");P.tab==="attack"&&t.push("target");for(let e of P.cur.player)if(!(e===i||!e.alive)){for(let n of t){if(n==="target"&&i.orders.target==="legion"){e.orders.target="legion",e.orders.targetId=i.orders.targetId;continue}e.orders[n]=i.orders[n]}P.tab==="move"&&(e.orders.formation=e.typeId==="cavalry"&&i.orders.formation==="line"?"wedge":i.orders.formation,e.formDirty=!0),P.phase==="battle"&&P.cur.battle.applyOrders(e)}Yt.play("select"),Hn("Einstellungen f\xFCr alle Legionen \xFCbernommen"),Sn()});function fu(){let i=P.selected;P.mode=null,nn(""),i&&!i.orders.waypoints.length&&(i.orders.move="advance",Hn("Keine Wegpunkte \u2013 Legion r\xFCckt direkt vor")),i&&P.phase==="battle"&&P.cur.battle.applyOrders(i),i&&Es(i),ci(),Sn()}function Sn(){let i=P.cur;if(!i)return;let t=i.overlays;if(t.clearRoutes(),P.phase!=="orders"&&!(P.phase==="battle"&&P.selected))return;let e=P.phase==="orders"?i.player:[P.selected];for(let n of e){if(!n.alive||n.side!==0)continue;let s=n===P.selected;if(P.phase==="orders"){let{pts:r,target:a}=i.battle.previewRoute(n);r.length>1&&t.addRoute(r,s?16765802:6988543,!s,s?.8:.55),s&&a&&t.addMarker(a.x,a.z,16734794,Math.max(a.halfW,a.halfD)+1.6),n.orders.move==="hold"&&s&&t.addMarker(n.x,n.z,6988543,i.battle.aggroRadius(n))}else{let r=[[n.x,n.z],...n.path];if(n.wp)for(let o=n.wpIdx;o<n.wp.length;o++)r.push(n.wp[o]);r.length>1&&t.addRoute(r,16765802,!1,.7);let a=n.melee||n.target;a&&a.alive&&t.addMarker(a.x,a.z,16734794,Math.max(a.halfW,a.halfD)+1.6)}s&&n.orders.move==="path"&&n.orders.waypoints.forEach((r,a)=>t.addFlag(r[0],r[1],16765802))}}var fn=new Map,qt=null,Qc=_t("#c");function tl(i,t){let e=P.cur;return e?Bt.pick(i,t,[e.world.terrain]):null}function F0(i,t){let e=P.cur,n=tl(i,t);if(!n)return null;let s=null,r=1e9;for(let a of e.legions){if(!a.alive)continue;let o=Math.hypot(a.x-n.x,a.z-n.z),c=Math.max(a.halfW,a.halfD)+2.5;o<c&&o<r&&(r=o,s=a)}return s}function pu(i,t=null){if(Yt.unlock(),!(P.phase==="menu"||P.phase==="setup"||P.phase==="result"||P.phase==="loading")){if(fn.set(i.pointerId,{x:i.clientX,y:i.clientY}),fn.size===1){let e=t||F0(i.clientX,i.clientY);qt={type:"tap",sx:i.clientX,sy:i.clientY,lx:i.clientX,ly:i.clientY,t:performance.now(),legion:e,button:i.button}}else if(fn.size===2){let[e,n]=[...fn.values()];qt={type:"pinch",d:Math.hypot(e.x-n.x,e.y-n.y),ang:Math.atan2(n.y-e.y,n.x-e.x),mx:(e.x+n.x)/2,my:(e.y+n.y)/2}}}}Qc.addEventListener("pointerdown",i=>pu(i));window.addEventListener("pointermove",i=>{let t=fn.get(i.pointerId);if(!t||!qt)return;if(t.x=i.clientX,t.y=i.clientY,qt.type==="pinch"&&fn.size>=2){let[r,a]=[...fn.values()],o=Math.hypot(r.x-a.x,r.y-a.y),c=Math.atan2(a.y-r.y,a.x-r.x),l=(r.x+a.x)/2,h=(r.y+a.y)/2;o>10&&Bt.zoom(qt.d/o);let d=c-qt.ang;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),Bt.rotate(-d);let p=l-qt.mx,f=h-qt.my;Math.abs(o-qt.d)<4&&Math.abs(f)>Math.abs(p)*1.5?Bt.tilt(f*.004):Bt.pan(p,f),qt.d=o,qt.ang=c,qt.mx=l,qt.my=h;return}let e=i.clientX-qt.lx,n=i.clientY-qt.ly;qt.lx=i.clientX,qt.ly=i.clientY;let s=Math.hypot(i.clientX-qt.sx,i.clientY-qt.sy);if(qt.type==="tap"&&s>9){let r=qt.legion;P.phase==="deploy"&&r&&r.side===0&&qt.button!==2?(qt.type="drag",Di(r)):qt.type=qt.button===2?"rotate":"pan"}qt.type==="pan"?Bt.pan(e,n):qt.type==="rotate"?(Bt.rotate(-e*.006),Bt.tilt(n*.004)):qt.type==="drag"&&k0(qt.legion,i.clientX,i.clientY)});var mu=i=>{fn.has(i.pointerId)&&(fn.delete(i.pointerId),qt&&(qt.type==="tap"&&fn.size===0&&performance.now()-qt.t<450&&O0(i.clientX,i.clientY,qt.legion),qt.type==="drag"&&Yt.play("place"),fn.size===0?qt=null:qt.type==="pinch"&&(qt={type:"none"})))};window.addEventListener("pointerup",mu);window.addEventListener("pointercancel",mu);Qc.addEventListener("contextmenu",i=>i.preventDefault());Qc.addEventListener("wheel",i=>{i.preventDefault(),Bt.zoom(i.deltaY>0?1.1:.9)},{passive:!1});window.addEventListener("keydown",i=>{if(!P.cur)return;let t=i.key;(t==="ArrowLeft"||t==="a")&&Bt.pan(40,0),(t==="ArrowRight"||t==="d")&&Bt.pan(-40,0),(t==="ArrowUp"||t==="w")&&Bt.pan(0,40),(t==="ArrowDown"||t==="s")&&Bt.pan(0,-40),t==="q"&&Bt.rotate(.15),t==="e"&&Bt.rotate(-.15),t===" "&&P.phase==="battle"&&vu()});function k0(i,t,e){let n=P.cur,s=tl(t,e);if(!s)return;let r=n.map.zones[0],a=Math.max(r.x0+3,Math.min(r.x1-3,s.x)),o=Math.max(r.z0+3,Math.min(r.z1-3,s.z));!n.map.isPassable(a,o,0)||n.map.clearanceAt(a,o)<2.5||(i.x=a,i.z=o)}function O0(i,t,e){let n=P.cur;if(n){if(P.mode==="waypoints"){let s=P.selected,r=tl(i,t);if(!s||!r)return;if(!n.map.isPassable(r.x,r.z,0)){Hn("Dort ist kein Durchkommen");return}s.orders.waypoints.push([r.x,r.z]),Yt.play("place"),Sn(),nn(`Wegpunkt ${s.orders.waypoints.length}/4 gesetzt \u2013 weitere tippen oder \u201ERoute fertig\u201C`),s.orders.waypoints.length>=4&&fu();return}if(P.mode==="pickTarget"){let s=P.selected;e&&e.side===1&&s?(s.orders.target="legion",s.orders.targetId=e.id,P.mode=null,nn(""),Yt.play("select"),Hn(`Ziel: ${Bn(e)}`),P.phase==="battle"&&n.battle.applyOrders(s),Es(s),Sn()):Hn("Tippe auf eine feindliche (rote) Legion");return}e?(Yt.play("select"),Di(e)):P.selected&&(Di(null),P.phase==="orders"&&Sn())}}function gu(i){return i=Math.max(0,Math.ceil(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`}function B0(){let i=P.cur;if(!i||P.phase!=="battle"){Ta();return}let t=i.battle,e=t.strength(0),n=t.strength(1);_t("#str0").textContent=e,_t("#str1").textContent=n;let s=Math.max(1,e+n);_t("#sbar0").style.width=e/s*100+"%",_t("#sbar1").style.width=n/s*100+"%",_t("#hud-time").textContent=gu(t.timeLimit-t.time);let r=i.map.objective,a=_t("#hud-obj");if(r)if(a.classList.add("show"),r.type==="keep"){let o=1-r.owner,c=o===0?"#6aa2ff":"#ff6a5a";a.innerHTML=`\u{1F3F0} Burghof ${o===0?"einnehmen":"verteidigen"} <span class="pbar"><i style="width:${r.hold/r.need*100}%;background:${c}"></i></span> ${Math.floor(r.hold)}/${r.need} s`}else a.innerHTML=`\u26F0 <b style="color:#8fb8ff">${Math.floor(r.score[0])}</b> <span class="pbar"><i style="width:${r.score[0]}%;background:#6aa2ff"></i></span><span class="pbar"><i style="width:${r.score[1]}%;background:#ff6a5a;margin-left:auto"></i></span> <b style="color:#ff8f86">${Math.floor(r.score[1])}</b> / 100`;else a.classList.remove("show");if(Ta(),P.selected&&_t("#orders").classList.contains("show")){let o=P.selected;_t("#oh-sub").textContent=o.alive?`${o.count}/${o.maxCount} Mann \xB7 ${H0(o)}`:"Vernichtet"}}function H0(i){return{melee:"im Nahkampf",shoot:"schie\xDFt",retreat:"zieht sich zur\xFCck",regroup:"sammelt sich",wait:"wartet auf Signal",hold:"h\xE4lt Stellung",move:"marschiert",engage:"r\xFCckt vor",kite:"weicht aus",breach:"berennt das Tor",idle:"bereit",dead:"vernichtet"}[i.state]||i.state}function Ss(i,t=-1){let e=_t("#feed"),n=document.createElement("div");for(n.className=t>=0?"p"+t:"",n.textContent=i,e.appendChild(n);e.children.length>5;)e.removeChild(e.firstChild);setTimeout(()=>n.remove(),6e3)}var au=0;function Hn(i){let t=_t("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(au),au=setTimeout(()=>t.classList.remove("show"),1900)}function nn(i){_t("#hint").textContent=i}function el(i){let t=document.createElement("div");t.className="big-banner",t.textContent=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2300)}function V0(i){let t=i.battle,e=i.units.fx,n=P.demo,s=Bt.cam,r=(a,o)=>Math.max(.05,1-Math.hypot(a-s.x,o-s.z)/110)*(n?.35:1)*Math.max(.35,1-s.dist/220);for(let a of t.events){let o=a.x!==void 0?i.map.getHeight(a.x,a.z):0;switch(a.type){case"clash":e.burst(a.x,o+1.3,a.z,a.soft?4:8),Yt.play("clash",r(a.x,a.z));break;case"impact":e.burst(a.x,o+1.3,a.z,20,!0),e.puff(a.x,o,a.z,8,1.4),Yt.play("impact",r(a.x,a.z)),!n&&a.broken&&Ss("Die Piken brechen den Reiterangriff!");break;case"volley":Yt.play("volley",r(a.x,a.z));break;case"arrowhit":Yt.play("arrowhit",r(a.x,a.z)),e.puff(a.x,o,a.z,2,.6);break;case"death":Yt.play("death",r(a.x,a.z)*.8);break;case"gatehit":e.puff(a.x,o+1,a.z,3,1),e.burst(a.x,o+2.5,a.z,4),Yt.play("gate",r(a.x,a.z));break;case"gatebroken":e.splinters(a.x,i.map.castle.base,a.z),e.puff(a.x,o,a.z,14,2.2),Yt.play("gatebroken",r(a.x,a.z)+.3),n||(Ss("Das Burgtor ist gefallen!"),el("DAS TOR F\xC4LLT"));break;case"breach":!n&&!a.legion.breachAnnounced&&(a.legion.breachAnnounced=!0,Ss(`${Bn(a.legion)} berennt das Tor`,a.legion.side));break;case"retreat":n||(Ss(`${Bn(a.legion)} zieht sich zur\xFCck`,a.side),Yt.play("retreat",.8));break;case"rally":n||Ss(`${Bn(a.legion)} hat sich gesammelt`,a.legion.side);break;case"legionlost":n||Ss(`${Bn(a.legion)} wurde vernichtet`,a.side),P.selected===a.legion&&Di(null);break;case"horn":Yt.play("horn",n?.3:1);break}}if(t.events.length=0,i.dustT-=1/60,i.dustT<=0){i.dustT=.12;for(let a of i.legions){if(!a.alive)continue;let o=a.typeId==="cavalry"&&a.speedCur>2.5;if(o||a.state==="melee"&&Math.random()<.3){let c=a.soldiers[Math.random()*a.soldiers.length|0];c&&c.alive&&i.map.biome!=="winter"&&e.puff(c.x,c.y,c.z,1,o?.9:.6)}}}}function G0(){let i=P.cur,t=i.battle,e=t.winner===0;P.phase="result",oi(),e?(Te.wins++,Te.streak++,Te.best=Math.max(Te.best,Te.streak)):(Te.losses++,Te.streak=0),bn.set("stats",Te),Yt.play(e?"victory":"defeat"),el(e?"SIEG":"NIEDERLAGE"),setTimeout(()=>{if(P.cur!==i)return;let n=_t("#res-title");n.textContent=e?"SIEG":"NIEDERLAGE",n.className="result-title "+(e?"win":"lose"),_t("#res-reason").textContent=t.reason;let s=a=>{let o=i.legions.filter(c=>c.side===a);return`<div class="rs-col p${a}"><h4>${On[a].name}</h4>${o.map(c=>`<div class="rs-line"><span>${Bn(c)}</span><span>${c.alive?c.count+"/"+c.maxCount:"\u271D"} \xB7 \u2694 ${c.kills}</span></div>`).join("")}</div>`},r=i.player.slice().sort((a,o)=>o.kills-a.kills)[0];_t("#res-stats").innerHTML=s(0)+s(1)+`<div class="rs-sum"><div>Dauer<b>${gu(t.time)}</b></div><div>Eigene Verluste<b>${t.lost[0]}</b></div><div>Feindliche Verluste<b>${t.lost[1]}</b></div><div>Beste Legion<b>${r?bs[r.index]+". "+r.name:"\u2013"}</b></div></div>`,Aa("scr-result")},2200)}function nl(i,t){_t("#dlg-body").innerHTML=i;let e=_t("#dlg-actions");e.innerHTML="";for(let[n,s,r]of t){let a=document.createElement("button");a.className="btn"+(r?" primary":""),a.textContent=n,a.onclick=()=>{Yt.play("click"),xu(),s&&s()},e.appendChild(a)}_t("#dlg").classList.add("show")}function xu(){_t("#dlg").classList.remove("show")}var W0=()=>_t("#dlg").classList.contains("show");function X0(){nl(`<h2>Anleitung</h2>
  <h4>Ablauf</h4>
  <ul><li><b>Vorbereitung:</b> W\xE4hle Schlachtfeld und 1\u20135 Legionen.</li>
  <li><b>Aufstellung:</b> Ziehe deine Legionen innerhalb der blauen Zone an ihre Startposition. \u201E\u27F3\u201C dreht die gew\xE4hlte Legion.</li>
  <li><b>Befehle:</b> Lege f\xFCr jede Legion Marschroute, Angriff und R\xFCckzug fest. Die Routen werden auf der Karte angezeigt.</li>
  <li><b>Schlacht:</b> Die Legionen f\xFChren ihre Befehle aus. Mit \u275A\u275A pausierst du jederzeit und kannst Befehle \xE4ndern.</li></ul>
  <h4>Steuerung</h4>
  <ul><li>Ein Finger: Karte verschieben \xB7 Tippen: Legion w\xE4hlen</li><li>Zwei Finger: Zoomen & Drehen \xB7 beide Finger hoch/runter: Neigen</li></ul>
  <h4>Taktik</h4>
  <ul><li><b>Pikeniere</b> brechen Reiterangriffe (\xD72,6 Schaden gegen Reiter).</li>
  <li><b>Reiterei</b> zerschl\xE4gt Bogensch\xFCtzen und trifft mit Sturmangriff hart \u2013 am besten in Flanke oder R\xFCcken.</li>
  <li><b>Bogensch\xFCtzen</b> zerm\xFCrben aus der Distanz, Wald und Mauern bieten dem Ziel Deckung.</li>
  <li><b>Pr\xE4torianer</b> trotzen Pfeilen und halten jede Stellung.</li>
  <li>Angriffe in die <b>Flanke</b> (+30 %) oder den <b>R\xFCcken</b> (+60 %) entscheiden Schlachten. <b>H\xF6he</b> gibt +20 %.</li>
  <li>Furten verlangsamen und schw\xE4chen die Verteidigung. Burgtore m\xFCssen erst eingeschlagen werden.</li>
  <li>Ein rechtzeitiger <b>R\xFCckzug</b> rettet Legionen \u2013 gesammelt kehren sie zur\xFCck.</li></ul>`,[["Verstanden",null,!0]])}function _u(){let i=ke.quality;nl(`<h2>Einstellungen</h2>
    <div class="set-row"><span>Ton</span><div class="chips"><button class="chip ${ke.sound?"on":""}" data-set="sound" data-v="1">An</button><button class="chip ${ke.sound?"":"on"}" data-set="sound" data-v="0">Aus</button></div></div>
    <div class="set-row"><span>Grafik</span><div class="chips">${[["high","Hoch"],["medium","Mittel"],["low","Niedrig"]].map(([t,e])=>`<button class="chip ${i===t?"on":""}" data-set="quality" data-v="${t}">${e}</button>`).join("")}</div></div>
    <div class="set-row"><span>Statistik</span><button class="btn small" data-set="reset">Zur\xFCcksetzen</button></div>
    <p style="color:var(--muted);font-size:11px">\u201ENiedrig\u201C schaltet Schatten und Kantengl\xE4ttung ab \u2013 f\xFCr \xE4ltere Ger\xE4te.</p>`,[["Fertig",null,!0]]),_t("#dlg-body").onclick=t=>{let e=t.target.closest("[data-set]");if(e){if(Yt.play("click"),e.dataset.set==="sound"&&(ke.sound=e.dataset.v==="1",Yt.setEnabled(ke.sound)),e.dataset.set==="quality"){ke.quality=e.dataset.v,bn.set("settings",ke),Hn("Grafik wird neu geladen \u2026"),setTimeout(()=>location.reload(),500);return}e.dataset.set==="reset"&&(Object.assign(Te,{wins:0,losses:0,streak:0,best:0}),bn.set("stats",Te),Hn("Statistik zur\xFCckgesetzt")),bn.set("settings",ke),_u()}}}function yu(){let i=P.paused;P.phase==="battle"&&(P.paused=!0,wn()),nl(`<h2>Schlacht</h2><p>${us[P.cur.opts.scenario].name} \xB7 ${vn[P.cur.opts.biome].name} \xB7 ${Ai[P.cur.opts.diff].name}</p>`,[["Weiter",()=>{P.phase==="battle"&&(P.paused=i,wn())},!0],["Neu starten",()=>jc({...P.last,seed:P.last.seed})],["Aufgeben",()=>{P.phase==="battle"&&(Te.losses++,Te.streak=0,bn.set("stats",Te)),Ra()}]])}function vu(){P.paused=!P.paused,Yt.play("click"),wn()}document.addEventListener("click",i=>{let t=i.target.closest("[data-act]");if(t)switch(Yt.unlock(),Yt.play("click"),t.dataset.act){case"new":U0();break;case"quick":{let e=dn(Date.now()|0),n=e.int(3,4),s=[];for(let r=0;r<n;r++)s.push(e.pick(["legion","legion","archer","cavalry","pike","guard"]));ru({scenario:"random",biome:"random",diff:P.cfg.diff,army:s});break}case"help":X0();break;case"settings":_u();break;case"menu":Ra();break;case"deploy":ru(P.cfg);break;case"rematch":jc({...P.last});break}});_t("#btn-exit").addEventListener("click",()=>{Yt.play("click"),yu()});_t("#btn-pause").addEventListener("click",vu);_t("#btn-sound").addEventListener("click",()=>{ke.sound=!ke.sound,Yt.setEnabled(ke.sound),bn.set("settings",ke),wn()});for(let i of tr("[data-speed]"))i.addEventListener("click",()=>{P.speed=+i.dataset.speed,P.paused&&(P.paused=!1),Yt.play("click"),wn()});window.onAndroidBack=()=>W0()?(xu(),!0):P.mode?(P.mode=null,nn(""),ci(),!0):_t("#orders").classList.contains("show")?(oi(),!0):P.phase==="deploy"||P.phase==="orders"||P.phase==="battle"?(yu(),!0):P.phase==="setup"||P.phase==="result"?(Ra(),!0):!1;window.onAndroidPause=()=>{P.phase==="battle"&&!P.paused&&(P.paused=!0,wn()),Yt.suspend()};document.addEventListener("visibilitychange",()=>{document.hidden?window.onAndroidPause():Yt.resume()});var ou=performance.now(),Ea=0,Kc=0,js=0,ws=0,Qs=1/30;function Mu(i){requestAnimationFrame(Mu);let t=Math.min(.05,Math.max(.001,(i-ou)/1e3));ou=i,ws+=t;let e=P.cur;if(e){let n=e.battle;if((P.phase==="battle"&&!P.paused||P.demo&&(P.phase==="menu"||P.phase==="setup"))&&!n.over){Ea+=t*P.speed;let r=0;for(;Ea>=Qs&&r<10;)n.step(Qs),e.brain.update(Qs),e.brain0&&e.brain0.update(Qs),Ea-=Qs,r++;r>=10&&(Ea=0),V0(e)}else if(P.phase==="deploy"||P.phase==="orders")for(let r of e.legions)r.formDirty&&r.layout(),n.updateSoldiers(r,t);else P.phase==="result"||P.phase==="battle"&&P.paused;P.demo&&n.over&&!e.restartAt&&(e.restartAt=ws+4),P.demo&&e.restartAt&&ws>e.restartAt&&(P.phase==="menu"||P.phase==="setup")&&lu(),!P.demo&&P.phase==="battle"&&n.over&&G0(),e.units.fx.simTime=n.time,e.units.fx.battleArrows=n.arrows,e.units.update(ws,t,P.selected,null),Jh(e.world,ws,t,e.map),e.overlays.updateObjective(ws),D0(e),Kc-=t,Kc<=0&&(Kc=.2,B0()),js-=t,P.phase==="battle"&&P.selected&&js<=0?(js=.5,Sn()):P.phase==="battle"&&!P.selected&&js<=0&&(js=.5,e.overlays.clearRoutes())}(P.phase==="menu"||P.phase==="setup")&&(Bt.cam.tyaw+=t*.035),Bt.updateCamera(t),Bt.render()}function q0(){try{Ra(),_t("#loading").classList.remove("show"),requestAnimationFrame(Mu)}catch(i){throw _t("#loading").innerHTML=`<div style="padding:20px;color:#fff">Fehler beim Start: ${i.message}</div>`,i}}window.__G=P;window.__stage=Bt;setTimeout(q0,30);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
