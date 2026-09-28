(()=>{var Wc="170";var sd=0,Al=1,rd=2;var Nh=1,Xc=2,Ln=3,li=0,Ft=1,vt=2,oi=0,ms=1,Rl=2,Cl=3,Il=4,ad=5,Ii=100,od=101,cd=102,ld=103,hd=104,ud=200,dd=201,fd=202,pd=203,Ao=204,Ro=205,md=206,gd=207,xd=208,yd=209,vd=210,_d=211,Md=212,bd=213,wd=214,Co=0,Io=1,Po=2,vs=3,zo=4,Do=5,Uo=6,No=7,Aa=0,Sd=1,Ed=2,ci=0,Td=1,Ad=2,Rd=3,Cd=4,Id=5,Pd=6,zd=7;var kh=300,_s=301,Ms=302,ko=303,Fo=304,Ra=306,Oo=1e3,Di=1001,Bo=1002,tn=1003,Dd=1004;var Er=1005;var En=1006,$a=1007;var Ui=1008;var Wn=1009,Fh=1010,Oh=1011,sr=1012,qc=1013,Ni=1014,Tn=1015,fr=1016,Yc=1017,$c=1018,bs=1020,Bh=35902,Lh=1021,Hh=1022,gn=1023,Vh=1024,Gh=1025,gs=1026,ws=1027,Zc=1028,Jc=1029,Wh=1030,Kc=1031;var jc=1033,Jr=33776,Kr=33777,jr=33778,Qr=33779,Lo=35840,Ho=35841,Vo=35842,Go=35843,Wo=36196,Xo=37492,qo=37496,Yo=37808,$o=37809,Zo=37810,Jo=37811,Ko=37812,jo=37813,Qo=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,ac=37821,ea=36492,oc=36494,cc=36495,Xh=36283,lc=36284,hc=36285,uc=36286;var ta=2300,dc=2301,Za=2302,Pl=2400,zl=2401,Dl=2402;var Ud=3200,Nd=3201;var Qc=0,kd=1,ai="",hn="srgb",As="srgb-linear",Ca="linear",ot="srgb";var Qi=7680;var Ul=519,Fd=512,Od=513,Bd=514,qh=515,Ld=516,Hd=517,Vd=518,Gd=519,Nl=35044,pr=35048;var kl="300 es",Vn=2e3,na=2001,hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ja=Math.PI/180,fc=180/Math.PI;function mr(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Jt(s,e,t){return Math.max(e,Math.min(t,s))}function Wd(s,e){return(s%e+e)%e}function Ka(s,e,t){return(1-t)*s+t*e}function Ys(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ye=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],x=n[8],y=i[0],g=i[3],m=i[6],M=i[1],_=i[4],v=i[7],D=i[2],C=i[5],I=i[8];return r[0]=o*y+a*M+c*D,r[3]=o*g+a*_+c*C,r[6]=o*m+a*v+c*I,r[1]=l*y+h*M+d*D,r[4]=l*g+h*_+d*C,r[7]=l*m+h*v+d*I,r[2]=f*y+p*M+x*D,r[5]=f*g+p*_+x*C,r[8]=f*m+p*v+x*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,f=a*c-h*r,p=l*r-o*c,x=t*d+n*f+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=d*y,e[1]=(i*l-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=f*y,e[4]=(h*t-i*c)*y,e[5]=(i*r-a*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ja=new We;function Yh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ia(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xd(){let s=ia("canvas");return s.style.display="block",s}var Fl={};function tr(s){s in Fl||(Fl[s]=!0,console.warn(s))}function qd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Yd(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $d(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var et={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Ca:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ol=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],Ll=[.3127,.329],Hl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[As]:{primaries:Ol,whitePoint:Ll,transfer:Ca,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:Ol,whitePoint:Ll,transfer:ot,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}});var es,pc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=ia("canvas")),es.width=e.width,es.height=e.height;let n=es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ia("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zd=0,sa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Qa(i[o].image)):r.push(Qa(i[o]))}else r=Qa(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qa(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?pc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jd=0,nn=class s extends hi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Di,i=Di,r=En,o=Ui,a=gn,c=Wn,l=s.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=mr(),this.name="",this.source=new sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=kh;nn.DEFAULT_ANISOTROPY=1;var Mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],x=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(x+g)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(p+1)/2,D=(m+1)/2,C=(h+f)/4,I=(d+y)/4,z=(x+g)/4;return _>v&&_>D?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=C/n,r=I/n):v>D?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=C/i,r=z/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=I/r,i=z/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-x)*(g-x)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(d-y)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mc=class extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new sa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ra=class extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gc=class extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],p=r[o+1],x=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=y;return}if(d!==y||c!==f||l!==p||h!==x){let g=1-a,m=c*f+l*p+h*x+d*y,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let D=Math.sqrt(_),C=Math.atan2(D,m*M);g=Math.sin(g*C)/D,a=Math.sin(a*C)/D}let v=a*M;if(c=c*g+f*v,l=l*g+p*v,h=h*g+x*v,d=d*g+y*v,g===1-a){let D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+h*d+c*p-l*f,e[t+1]=c*x+h*f+l*d-a*p,e[t+2]=l*x+h*p+a*f-c*d,e[t+3]=h*x-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),f=c(n/2),p=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*p*x,this._y=l*p*d-f*h*x,this._z=l*h*x+f*p*d,this._w=l*h*d-f*p*x;break;case"YXZ":this._x=f*h*d+l*p*x,this._y=l*p*d-f*h*x,this._z=l*h*x-f*p*d,this._w=l*h*d+f*p*x;break;case"ZXY":this._x=f*h*d-l*p*x,this._y=l*p*d+f*h*x,this._z=l*h*x+f*p*d,this._w=l*h*d-f*p*x;break;case"ZYX":this._x=f*h*d-l*p*x,this._y=l*p*d+f*h*x,this._z=l*h*x-f*p*d,this._w=l*h*d+f*p*x;break;case"YZX":this._x=f*h*d+l*p*x,this._y=l*p*d+f*h*x,this._z=l*h*x-f*p*d,this._w=l*h*d-f*p*x;break;case"XZY":this._x=f*h*d-l*p*x,this._y=l*p*d-f*h*x,this._z=l*h*x+f*p*d,this._w=l*h*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new B,Gl=new Wt,qn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Ar.subVectors(this.max,$s),ts.subVectors(e.a,$s),ns.subVectors(e.b,$s),is.subVectors(e.c,$s),ei.subVectors(ns,ts),ti.subVectors(is,ns),wi.subVectors(ts,is);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-wi.z,wi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,wi.z,0,-wi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-wi.y,wi.x,0];return!to(t,ts,ns,is,Ar)||(t=[1,0,0,0,1,0,0,0,1],!to(t,ts,ns,is,Ar))?!1:(Rr.crossVectors(ei,ti),t=[Rr.x,Rr.y,Rr.z],to(t,ts,ns,is,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Nn=[new B,new B,new B,new B,new B,new B,new B,new B],fn=new B,Tr=new qn,ts=new B,ns=new B,is=new B,ei=new B,ti=new B,wi=new B,$s=new B,Ar=new B,Rr=new B,Si=new B;function to(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Si.fromArray(s,r);let a=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Kd=new qn,Zs=new B,no=new B,ui=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);let t=Zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(no)),this.expandByPoint(Zs.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new B,io=new B,Cr=new B,ni=new B,so=new B,Ir=new B,ro=new B,rr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){io.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(io);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Cr),a=ni.dot(this.direction),c=-ni.dot(Cr),l=ni.lengthSq(),h=Math.abs(1-o*o),d,f,p,x;if(h>0)if(d=o*c-a,f=o*a-c,x=r*h,d>=0)if(f>=-x)if(f<=x){let y=1/h;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=x?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(io).addScaledVector(Cr,f),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){so.subVectors(t,e),Ir.subVectors(n,e),ro.crossVectors(so,Ir);let o=this.direction.dot(ro),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);let c=a*this.direction.dot(Ir.crossVectors(ni,Ir));if(c<0)return null;let l=a*this.direction.dot(so.cross(ni));if(l<0||c+l>o)return null;let h=-a*ni.dot(ro);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class s{constructor(e,t,n,i,r,o,a,c,l,h,d,f,p,x,y,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,d,f,p,x,y,g)}set(e,t,n,i,r,o,a,c,l,h,d,f,p,x,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=x,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*d,x=a*h,y=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+x*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=x+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*d,x=l*h,y=l*d;t[0]=f+y*a,t[4]=x*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-x,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*d,x=l*h,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*d,x=a*h,y=a*d;t[0]=c*h,t[4]=x*l-p,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=p*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,x=a*c,y=a*l;t[0]=c*h,t[4]=y-f*d,t[8]=x*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*d+x,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*c,p=o*l,x=a*c,y=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+y,t[5]=o*h,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*h,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Qd)}lookAt(e,t,n){let i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ii.crossVectors(n,Qt),ii.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ii.crossVectors(n,Qt)),ii.normalize(),Pr.crossVectors(Qt,ii),i[0]=ii.x,i[4]=Pr.x,i[8]=Qt.x,i[1]=ii.y,i[5]=Pr.y,i[9]=Qt.y,i[2]=ii.z,i[6]=Pr.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],x=n[2],y=n[6],g=n[10],m=n[14],M=n[3],_=n[7],v=n[11],D=n[15],C=i[0],I=i[4],z=i[8],E=i[12],u=i[1],b=i[5],w=i[9],A=i[13],U=i[2],N=i[6],k=i[10],W=i[14],V=i[3],ee=i[7],K=i[11],pe=i[15];return r[0]=o*C+a*u+c*U+l*V,r[4]=o*I+a*b+c*N+l*ee,r[8]=o*z+a*w+c*k+l*K,r[12]=o*E+a*A+c*W+l*pe,r[1]=h*C+d*u+f*U+p*V,r[5]=h*I+d*b+f*N+p*ee,r[9]=h*z+d*w+f*k+p*K,r[13]=h*E+d*A+f*W+p*pe,r[2]=x*C+y*u+g*U+m*V,r[6]=x*I+y*b+g*N+m*ee,r[10]=x*z+y*w+g*k+m*K,r[14]=x*E+y*A+g*W+m*pe,r[3]=M*C+_*u+v*U+D*V,r[7]=M*I+_*b+v*N+D*ee,r[11]=M*z+_*w+v*k+D*K,r[15]=M*E+_*A+v*W+D*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],x=e[3],y=e[7],g=e[11],m=e[15];return x*(+r*c*d-i*l*d-r*a*f+n*l*f+i*a*p-n*c*p)+y*(+t*c*p-t*l*f+r*o*f-i*o*p+i*l*h-r*c*h)+g*(+t*l*d-t*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+m*(-i*a*h-t*c*d+t*a*f+i*o*d-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],x=e[12],y=e[13],g=e[14],m=e[15],M=d*g*l-y*f*l+y*c*p-a*g*p-d*c*m+a*f*m,_=x*f*l-h*g*l-x*c*p+o*g*p+h*c*m-o*f*m,v=h*y*l-x*d*l+x*a*p-o*y*p-h*a*m+o*d*m,D=x*d*c-h*y*c-x*a*f+o*y*f+h*a*g-o*d*g,C=t*M+n*_+i*v+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return e[0]=M*I,e[1]=(y*f*r-d*g*r-y*i*p+n*g*p+d*i*m-n*f*m)*I,e[2]=(a*g*r-y*c*r+y*i*l-n*g*l-a*i*m+n*c*m)*I,e[3]=(d*c*r-a*f*r-d*i*l+n*f*l+a*i*p-n*c*p)*I,e[4]=_*I,e[5]=(h*g*r-x*f*r+x*i*p-t*g*p-h*i*m+t*f*m)*I,e[6]=(x*c*r-o*g*r-x*i*l+t*g*l+o*i*m-t*c*m)*I,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*p+t*c*p)*I,e[8]=v*I,e[9]=(x*d*r-h*y*r-x*n*p+t*y*p+h*n*m-t*d*m)*I,e[10]=(o*y*r-x*a*r+x*n*l-t*y*l-o*n*m+t*a*m)*I,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*p-t*a*p)*I,e[12]=D*I,e[13]=(h*y*i-x*d*i+x*n*f-t*y*f-h*n*g+t*d*g)*I,e[14]=(x*a*i-o*y*i-x*n*c+t*y*c+o*n*g-t*a*g)*I,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*f+t*a*f)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,f=r*l,p=r*h,x=r*d,y=o*h,g=o*d,m=a*d,M=c*l,_=c*h,v=c*d,D=n.x,C=n.y,I=n.z;return i[0]=(1-(y+m))*D,i[1]=(p+v)*D,i[2]=(x-_)*D,i[3]=0,i[4]=(p-v)*C,i[5]=(1-(f+m))*C,i[6]=(g+M)*C,i[7]=0,i[8]=(x+_)*I,i[9]=(g-M)*I,i[10]=(1-(f+y))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ss.set(i[0],i[1],i[2]).length(),o=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);let l=1/r,h=1/o,d=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Vn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,x;if(a===Vn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===na)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Vn){let c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(o-r),f=(t+e)*l,p=(n+i)*h,x,y;if(a===Vn)x=(o+r)*d,y=-2*d;else if(a===na)x=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ss=new B,pn=new Ke,jd=new B(0,0,0),Qd=new B(1,1,1),ii=new B,Pr=new B,Qt=new B,Wl=new Ke,Xl=new Wt,zt=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zt.DEFAULT_ORDER="XYZ";var ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ef=0,ql=new B,rs=new Wt,Fn=new Ke,zr=new B,Js=new B,tf=new B,nf=new Wt,Yl=new B(1,0,0),$l=new B(0,1,0),Zl=new B(0,0,1),Jl={type:"added"},sf={type:"removed"},as={type:"childadded",child:null},ao={type:"childremoved",child:null},Ot=class s extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new B,t=new zt,n=new Wt,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new We}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis($l,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis($l,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zr.copy(e):zr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Js,zr,this.up):Fn.lookAt(zr,Js,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(Fn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jl),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sf),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jl),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ot.DEFAULT_UP=new B(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new B,On=new B,oo=new B,Bn=new B,os=new B,cs=new B,Kl=new B,co=new B,lo=new B,ho=new B,uo=new Mt,fo=new Mt,po=new Mt,Pi=class s{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),On.subVectors(n,t),oo.subVectors(e,t);let o=mn.dot(mn),a=mn.dot(On),c=mn.dot(oo),l=On.dot(On),h=On.dot(oo),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return uo.setScalar(0),fo.setScalar(0),po.setScalar(0),uo.fromBufferAttribute(e,t),fo.fromBufferAttribute(e,n),po.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(uo,r.x),o.addScaledVector(fo,r.y),o.addScaledVector(po,r.z),o}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),On.subVectors(e,t),mn.cross(On).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;os.subVectors(i,n),cs.subVectors(r,n),co.subVectors(e,n);let c=os.dot(co),l=cs.dot(co);if(c<=0&&l<=0)return t.copy(n);lo.subVectors(e,i);let h=os.dot(lo),d=cs.dot(lo);if(h>=0&&d<=h)return t.copy(i);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(os,o);ho.subVectors(e,r);let p=os.dot(ho),x=cs.dot(ho);if(x>=0&&p<=x)return t.copy(r);let y=p*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(cs,a);let g=h*x-p*d;if(g<=0&&d-h>=0&&p-x>=0)return Kl.subVectors(r,i),a=(d-h)/(d-h+(p-x)),t.copy(i).addScaledVector(Kl,a);let m=1/(g+y+f);return o=y*m,a=f*m,t.copy(n).addScaledVector(os,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function mo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Wd(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mo(o,r,e+1/3),this.g=mo(o,r,e),this.b=mo(o,r,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){let n=$h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return et.fromWorkingColorSpace(kt.copy(this),e),Math.round(Jt(kt.r*255,0,255))*65536+Math.round(Jt(kt.g*255,0,255))*256+Math.round(Jt(kt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(kt.copy(this),t);let n=kt.r,i=kt.g,r=kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=hn){et.fromWorkingColorSpace(kt.copy(this),e);let t=kt.r,n=kt.g,i=kt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Dr);let n=Ka(si.h,Dr.h,t),i=Ka(si.s,Dr.s,t),r=Ka(si.l,Dr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new me;me.NAMES=$h;var rf=0,Yn=class extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=mr(),this.name="",this.blending=ms,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Ro,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ct=class extends Yn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new B,Ur=new Ye,_t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ys(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}};var aa=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oa=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},af=0,ln=new Ke,go=new Ot,ls=new B,en=new qn,Ks=new qn,Pt=new B,lt=class s extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?oa:aa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(en.min,Ks.min),en.expandByPoint(Pt),Pt.addVectors(en.max,Ks.max),en.expandByPoint(Pt)):(en.expandByPoint(Ks.min),en.expandByPoint(Ks.max))}en.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pt.fromBufferAttribute(a,l),c&&(ls.fromBufferAttribute(e,l),Pt.add(ls)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new B,c[z]=new B;let l=new B,h=new B,d=new B,f=new Ye,p=new Ye,x=new Ye,y=new B,g=new B;function m(z,E,u){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,u),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,u),h.sub(l),d.sub(l),p.sub(f),x.sub(f);let b=1/(p.x*x.y-x.x*p.y);isFinite(b)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(b),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(b),a[z].add(y),a[E].add(y),a[u].add(y),c[z].add(g),c[E].add(g),c[u].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let z=0,E=M.length;z<E;++z){let u=M[z],b=u.start,w=u.count;for(let A=b,U=b+w;A<U;A+=3)m(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let _=new B,v=new B,D=new B,C=new B;function I(z){D.fromBufferAttribute(i,z),C.copy(D);let E=a[z];_.copy(E),_.sub(D.multiplyScalar(D.dot(E))).normalize(),v.crossVectors(C,E);let b=v.dot(c[z])<0?-1:1;o.setXYZW(z,_.x,_.y,_.z,b)}for(let z=0,E=M.length;z<E;++z){let u=M[z],b=u.start,w=u.count;for(let A=b,U=b+w;A<U;A+=3)I(e.getX(A+0)),I(e.getX(A+1)),I(e.getX(A+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new B,r=new B,o=new B,a=new B,c=new B,l=new B,h=new B,d=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h),p=0,x=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let m=0;m<h;m++)f[x++]=l[p++]}return new _t(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jl=new Ke,Ei=new rr,Nr=new ui,Ql=new B,kr=new B,Fr=new B,Or=new B,xo=new B,Br=new B,eh=new B,Lr=new B,De=class extends Ot{constructor(e=new lt,t=new ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(xo.fromBufferAttribute(d,e),o?Br.addScaledVector(xo,h):Br.addScaledVector(xo.sub(t),h))}t.add(Br)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Nr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Nr,Ql)===null||Ei.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(jl.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(jl),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let g=f[x],m=o[g.materialIndex],M=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let v=M,D=_;v<D;v+=3){let C=a.getX(v),I=a.getX(v+1),z=a.getX(v+2);i=Hr(this,m,e,n,l,h,d,C,I,z),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=x,m=y;g<m;g+=3){let M=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);i=Hr(this,o,e,n,l,h,d,M,_,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let g=f[x],m=o[g.materialIndex],M=Math.max(g.start,p.start),_=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let v=M,D=_;v<D;v+=3){let C=v,I=v+1,z=v+2;i=Hr(this,m,e,n,l,h,d,C,I,z),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=x,m=y;g<m;g+=3){let M=g,_=g+1,v=g+2;i=Hr(this,o,e,n,l,h,d,M,_,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function of(s,e,t,n,i,r,o,a){let c;if(e.side===Ft?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===li,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Lr);return l<t.near||l>t.far?null:{distance:l,point:Lr.clone(),object:s}}function Hr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,kr),s.getVertexPosition(c,Fr),s.getVertexPosition(l,Or);let h=of(s,e,t,n,kr,Fr,Or,eh);if(h){let d=new B;Pi.getBarycoord(eh,kr,Fr,Or,d),i&&(h.uv=Pi.getInterpolatedAttribute(i,a,c,l,d,new Ye)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,a,c,l,d,new Ye)),o&&(h.normal=Pi.getInterpolatedAttribute(o,a,c,l,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new B,materialIndex:0};Pi.getNormal(kr,Fr,Or,f.normal),h.face=f,h.barycoord=d}return h}var sn=class s extends lt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(d,2));function x(y,g,m,M,_,v,D,C,I,z,E){let u=v/I,b=D/z,w=v/2,A=D/2,U=C/2,N=I+1,k=z+1,W=0,V=0,ee=new B;for(let K=0;K<k;K++){let pe=K*b-A;for(let Ee=0;Ee<N;Ee++){let je=Ee*u-w;ee[y]=je*M,ee[g]=pe*_,ee[m]=U,l.push(ee.x,ee.y,ee.z),ee[y]=0,ee[g]=0,ee[m]=C>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(Ee/I),d.push(1-K/z),W+=1}}for(let K=0;K<z;K++)for(let pe=0;pe<I;pe++){let Ee=f+pe+N*K,je=f+pe+N*(K+1),Z=f+(pe+1)+N*(K+1),se=f+(pe+1)+N*K;c.push(Ee,je,se),c.push(je,Z,se),V+=6}a.addGroup(p,V,E),p+=V,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ss(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(s){let e={};for(let t=0;t<s.length;t++){let n=Ss(s[t]);for(let i in n)e[i]=n[i]}return e}function cf(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Zh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var lf={clone:Ss,merge:Vt},hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Yn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ca=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ri=new B,th=new Ye,nh=new Ye,Gt=class extends ca{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fc*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,th,nh),t.subVectors(nh,th)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hs=-90,us=1,xc=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Gt(hs,us,e,t);i.layers=this.layers,this.add(i);let r=new Gt(hs,us,e,t);r.layers=this.layers,this.add(r);let o=new Gt(hs,us,e,t);o.layers=this.layers,this.add(o);let a=new Gt(hs,us,e,t);a.layers=this.layers,this.add(a);let c=new Gt(hs,us,e,t);c.layers=this.layers,this.add(c);let l=new Gt(hs,us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},la=class extends nn{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yc=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new la(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new sn(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:oi});r.uniforms.tEquirect.value=t;let o=new De(i,r),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=En),new xc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},yo=new B,df=new B,ff=new We,Hn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=yo.subVectors(n,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ff.getNormalMatrix(e),i=this.coplanarPoint(yo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new ui,Vr=new B,or=class{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],f=i[7],p=i[8],x=i[9],y=i[10],g=i[11],m=i[12],M=i[13],_=i[14],v=i[15];if(n[0].setComponents(c-r,f-l,g-p,v-m).normalize(),n[1].setComponents(c+r,f+l,g+p,v+m).normalize(),n[2].setComponents(c+o,f+h,g+x,v+M).normalize(),n[3].setComponents(c-o,f-h,g-x,v-M).normalize(),n[4].setComponents(c-a,f-d,g-y,v-_).normalize(),t===Vn)n[5].setComponents(c+a,f+d,g+y,v+_).normalize();else if(t===na)n[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Vr.x=i.normal.x>0?e.max.x:e.min.x,Vr.y=i.normal.y>0?e.max.y:e.min.y,Vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function pf(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){let x=d[f],y=d[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){let y=d[p];s.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var rn=class s extends lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,f=t/c,p=[],x=[],y=[],g=[];for(let m=0;m<h;m++){let M=m*f-o;for(let _=0;_<l;_++){let v=_*d-r;x.push(v,-M,0),y.push(0,0,1),g.push(_/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let _=M+l*m,v=M+l*(m+1),D=M+1+l*(m+1),C=M+1+l*m;p.push(_,v,C),p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new Je(x,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,bm=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,zm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Vm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:xf,alphamap_pars_fragment:yf,alphatest_fragment:vf,alphatest_pars_fragment:_f,aomap_fragment:Mf,aomap_pars_fragment:bf,batching_pars_vertex:wf,batching_vertex:Sf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:zf,clipping_planes_vertex:Df,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:kf,color_vertex:Ff,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Vf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Zf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:op,envmap_vertex:Kf,fog_vertex:jf,fog_pars_vertex:Qf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:ap,lights_toon_fragment:cp,lights_toon_pars_fragment:lp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:_p,map_fragment:Mp,map_pars_fragment:bp,map_particle_fragment:wp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:Tp,morphinstance_vertex:Ap,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Pp,normal_fragment_begin:zp,normal_fragment_maps:Dp,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:kp,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Hp,opaque_fragment:Vp,packing:Gp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Kp,shadowmap_vertex:jp,shadowmask_pars_fragment:Qp,skinbase_vertex:em,skinning_pars_vertex:tm,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:cm,transmission_pars_fragment:lm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:xm,cube_vert:ym,cube_frag:vm,depth_vert:_m,depth_frag:Mm,distanceRGBA_vert:bm,distanceRGBA_frag:wm,equirect_vert:Sm,equirect_frag:Em,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Rm,meshbasic_frag:Cm,meshlambert_vert:Im,meshlambert_frag:Pm,meshmatcap_vert:zm,meshmatcap_frag:Dm,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:km,meshphong_frag:Fm,meshphysical_vert:Om,meshphysical_frag:Bm,meshtoon_vert:Lm,meshtoon_frag:Hm,points_vert:Vm,points_frag:Gm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:qm,sprite_frag:Ym},he={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Sn={basic:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new me(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Vt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Vt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new me(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Vt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Vt([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Vt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Vt([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Vt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Vt([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Vt([he.common,he.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Vt([he.lights,he.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Sn.physical={uniforms:Vt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Gr={r:0,b:0,g:0},Ai=new zt,$m=new Ke;function Zm(s,e,t,n,i,r,o){let a=new me(0),c=r===!0?0:1,l,h,d=null,f=0,p=null;function x(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function y(M){let _=!1,v=x(M);v===null?m(a,c):v&&v.isColor&&(m(v,1),_=!0);let D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,_){let v=x(_);v&&(v.isCubeTexture||v.mapping===Ra)?(h===void 0&&(h=new De(new sn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Ss(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ai.copy(_.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(Ai)),h.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,(d!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new De(new rn(2,2),new An({name:"BackgroundMaterial",uniforms:Ss(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,p=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,_){M.getRGB(Gr,Zh(s)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:y,addToRenderList:g}}function Jm(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(u,b,w,A,U){let N=!1,k=d(A,w,b);r!==k&&(r=k,l(r.object)),N=p(u,A,w,U),N&&x(u,A,w,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(u,b,w,A),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return s.createVertexArray()}function l(u){return s.bindVertexArray(u)}function h(u){return s.deleteVertexArray(u)}function d(u,b,w){let A=w.wireframe===!0,U=n[u.id];U===void 0&&(U={},n[u.id]=U);let N=U[b.id];N===void 0&&(N={},U[b.id]=N);let k=N[A];return k===void 0&&(k=f(c()),N[A]=k),k}function f(u){let b=[],w=[],A=[];for(let U=0;U<t;U++)b[U]=0,w[U]=0,A[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:w,attributeDivisors:A,object:u,attributes:{},index:null}}function p(u,b,w,A){let U=r.attributes,N=b.attributes,k=0,W=w.getAttributes();for(let V in W)if(W[V].location>=0){let K=U[V],pe=N[V];if(pe===void 0&&(V==="instanceMatrix"&&u.instanceMatrix&&(pe=u.instanceMatrix),V==="instanceColor"&&u.instanceColor&&(pe=u.instanceColor)),K===void 0||K.attribute!==pe||pe&&K.data!==pe.data)return!0;k++}return r.attributesNum!==k||r.index!==A}function x(u,b,w,A){let U={},N=b.attributes,k=0,W=w.getAttributes();for(let V in W)if(W[V].location>=0){let K=N[V];K===void 0&&(V==="instanceMatrix"&&u.instanceMatrix&&(K=u.instanceMatrix),V==="instanceColor"&&u.instanceColor&&(K=u.instanceColor));let pe={};pe.attribute=K,K&&K.data&&(pe.data=K.data),U[V]=pe,k++}r.attributes=U,r.attributesNum=k,r.index=A}function y(){let u=r.newAttributes;for(let b=0,w=u.length;b<w;b++)u[b]=0}function g(u){m(u,0)}function m(u,b){let w=r.newAttributes,A=r.enabledAttributes,U=r.attributeDivisors;w[u]=1,A[u]===0&&(s.enableVertexAttribArray(u),A[u]=1),U[u]!==b&&(s.vertexAttribDivisor(u,b),U[u]=b)}function M(){let u=r.newAttributes,b=r.enabledAttributes;for(let w=0,A=b.length;w<A;w++)b[w]!==u[w]&&(s.disableVertexAttribArray(w),b[w]=0)}function _(u,b,w,A,U,N,k){k===!0?s.vertexAttribIPointer(u,b,w,U,N):s.vertexAttribPointer(u,b,w,A,U,N)}function v(u,b,w,A){y();let U=A.attributes,N=w.getAttributes(),k=b.defaultAttributeValues;for(let W in N){let V=N[W];if(V.location>=0){let ee=U[W];if(ee===void 0&&(W==="instanceMatrix"&&u.instanceMatrix&&(ee=u.instanceMatrix),W==="instanceColor"&&u.instanceColor&&(ee=u.instanceColor)),ee!==void 0){let K=ee.normalized,pe=ee.itemSize,Ee=e.get(ee);if(Ee===void 0)continue;let je=Ee.buffer,Z=Ee.type,se=Ee.bytesPerElement,_e=Z===s.INT||Z===s.UNSIGNED_INT||ee.gpuType===qc;if(ee.isInterleavedBufferAttribute){let fe=ee.data,ke=fe.stride,He=ee.offset;if(fe.isInstancedInterleavedBuffer){for(let qe=0;qe<V.locationSize;qe++)m(V.location+qe,fe.meshPerAttribute);u.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let qe=0;qe<V.locationSize;qe++)g(V.location+qe);s.bindBuffer(s.ARRAY_BUFFER,je);for(let qe=0;qe<V.locationSize;qe++)_(V.location+qe,pe/V.locationSize,Z,K,ke*se,(He+pe/V.locationSize*qe)*se,_e)}else{if(ee.isInstancedBufferAttribute){for(let fe=0;fe<V.locationSize;fe++)m(V.location+fe,ee.meshPerAttribute);u.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let fe=0;fe<V.locationSize;fe++)g(V.location+fe);s.bindBuffer(s.ARRAY_BUFFER,je);for(let fe=0;fe<V.locationSize;fe++)_(V.location+fe,pe/V.locationSize,Z,K,pe*se,pe/V.locationSize*fe*se,_e)}}else if(k!==void 0){let K=k[W];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(V.location,K);break;case 3:s.vertexAttrib3fv(V.location,K);break;case 4:s.vertexAttrib4fv(V.location,K);break;default:s.vertexAttrib1fv(V.location,K)}}}}M()}function D(){z();for(let u in n){let b=n[u];for(let w in b){let A=b[w];for(let U in A)h(A[U].object),delete A[U];delete b[w]}delete n[u]}}function C(u){if(n[u.id]===void 0)return;let b=n[u.id];for(let w in b){let A=b[w];for(let U in A)h(A[U].object),delete A[U];delete b[w]}delete n[u.id]}function I(u){for(let b in n){let w=n[b];if(w[u.id]===void 0)continue;let A=w[u.id];for(let U in A)h(A[U].object),delete A[U];delete w[u.id]}}function z(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:z,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function Km(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x];t.update(p,n,1)}function c(l,h,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let x=0;for(let y=0;y<d;y++)x+=h[y]*f[y];t.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==gn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let z=I===fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Wn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Tn&&!z)}function c(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=x>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:D,maxSamples:C}}function Qm(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Hn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let x=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||x===null||x.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,_=M*4,v=m.clippingState||null;c.value=v,v=h(x,f,_,p);for(let D=0;D!==_;++D)v[D]=t[D];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,x){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=c.value,x!==!0||g===null){let m=p+y*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=p;_!==y;++_,v+=4)o.copy(d[_]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function e0(s){let e=new WeakMap;function t(o,a){return a===ko?o.mapping=_s:a===Fo&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ko||a===Fo)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new yc(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ha=class extends ca{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ps=4,ih=[.125,.215,.35,.446,.526,.582],zi=20,vo=new ha,sh=new me,_o=null,Mo=0,bo=0,wo=!1,Ci=(1+Math.sqrt(5))/2,ds=1/Ci,rh=[new B(-Ci,ds,0),new B(Ci,ds,0),new B(-ds,0,Ci),new B(ds,0,Ci),new B(0,Ci,-ds),new B(0,Ci,ds),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],ua=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_o=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,Mo,bo),this._renderer.xr.enabled=wo,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:fr,format:gn,colorSpace:As,depthBuffer:!1},i=ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t0(r)),this._blurMaterial=n0(r,e,t)}return i}_compileMaterial(e){let t=new De(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,i){let a=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(sh),h.toneMapping=ci,h.autoClear=!1;let p=new ct({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),x=new De(new sn,p),y=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(sh),y=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let _=this._cubeSize;Wr(i,M*_,m>2?_:0,_,_),h.setRenderTarget(i),y&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===_s||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Wr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,vo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rh[(i-r-1)%rh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new De(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zi-1),y=r/x,g=isFinite(r)?1+Math.floor(h*y):zi;g>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);let m=[],M=0;for(let I=0;I<zi;++I){let z=I/y,E=Math.exp(-z*z/2);m.push(E),I===0?M+=E:I<g&&(M+=2*E)}for(let I=0;I<m.length;I++)m[I]=m[I]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;let v=this._sizeLods[i],D=3*v*(i>_-ps?i-_+ps:0),C=4*(this._cubeSize-v);Wr(t,D,C,3*v,2*v),c.setRenderTarget(t),c.render(d,vo)}};function t0(s){let e=[],t=[],n=[],i=s,r=s-ps+1+ih.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ps?c=ih[o-s+ps-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,y=3,g=2,m=1,M=new Float32Array(y*x*p),_=new Float32Array(g*x*p),v=new Float32Array(m*x*p);for(let C=0;C<p;C++){let I=C%3*2/3-1,z=C>2?0:-1,E=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];M.set(E,y*x*C),_.set(f,g*x*C);let u=[C,C,C,C,C,C];v.set(u,m*x*C)}let D=new lt;D.setAttribute("position",new _t(M,y)),D.setAttribute("uv",new _t(_,g)),D.setAttribute("faceIndex",new _t(v,m)),e.push(D),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ah(s,e,t){let n=new Xn(s,e,t);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function n0(s,e,t){let n=new Float32Array(zi),i=new B(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:el(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function oh(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ch(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function i0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ko||c===Fo,h=c===_s||c===Ms;if(l||h){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ua(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new ua(s)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s0(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function r0(s,e,t,n){let i={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let y=f.morphAttributes[x];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}f.removeEventListener("dispose",o),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let x in f)e.update(f[x],s.ARRAY_BUFFER);let p=d.morphAttributes;for(let x in p){let y=p[x];for(let g=0,m=y.length;g<m;g++)e.update(y[g],s.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,x=d.attributes.position,y=0;if(p!==null){let M=p.array;y=p.version;for(let _=0,v=M.length;_<v;_+=3){let D=M[_+0],C=M[_+1],I=M[_+2];f.push(D,C,C,I,I,D)}}else if(x!==void 0){let M=x.array;y=x.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let D=_+0,C=_+1,I=_+2;f.push(D,C,C,I,I,D)}}else return;let g=new(Yh(f)?oa:aa)(f,1);g.version=y;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function a0(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,x){x!==0&&(s.drawElementsInstanced(n,p,r,f*o,x),t.update(p,n,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let g=0;for(let m=0;m<x;m++)g+=p[m];t.update(g,n,1)}function d(f,p,x,y){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,p[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,x);let m=0;for(let M=0;M<x;M++)m+=p[M]*y[M];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function o0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function c0(s,e,t){let n=new WeakMap,i=new Mt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;p===!0&&(_=1),x===!0&&(_=2),y===!0&&(_=3);let v=a.attributes.position.count*_,D=1;v>e.maxTextureSize&&(D=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*D*4*d),I=new ra(C,v,D,d);I.type=Tn,I.needsUpdate=!0;let z=_*4;for(let u=0;u<d;u++){let b=g[u],w=m[u],A=M[u],U=v*D*4*u;for(let N=0;N<b.count;N++){let k=N*z;p===!0&&(i.fromBufferAttribute(b,N),C[U+k+0]=i.x,C[U+k+1]=i.y,C[U+k+2]=i.z,C[U+k+3]=0),x===!0&&(i.fromBufferAttribute(w,N),C[U+k+4]=i.x,C[U+k+5]=i.y,C[U+k+6]=i.z,C[U+k+7]=0),y===!0&&(i.fromBufferAttribute(A,N),C[U+k+8]=i.x,C[U+k+9]=i.y,C[U+k+10]=i.z,C[U+k+11]=A.itemSize===4?i.w:1)}}f={count:d,texture:I,size:new Ye(v,D)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function l0(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var da=class extends nn{constructor(e,t,n,i,r,o,a,c,l,h=gs){if(h!==gs&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gs&&(n=Ni),n===void 0&&h===ws&&(n=bs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Kh=new nn,lh=new da(1,1),jh=new ra,Qh=new gc,eu=new la,hh=[],uh=[],dh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function Rs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=hh[i];if(r===void 0&&(r=new Float32Array(i),hh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ia(s,e){let t=uh[e];t===void 0&&(t=new Int32Array(e),uh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function h0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function u0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function d0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function f0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function p0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;ph.set(n),s.uniformMatrix2fv(this.addr,!1,ph),Rt(t,n)}}function m0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;fh.set(n),s.uniformMatrix3fv(this.addr,!1,fh),Rt(t,n)}}function g0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;dh.set(n),s.uniformMatrix4fv(this.addr,!1,dh),Rt(t,n)}}function x0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function y0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function v0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function _0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function M0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function b0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function w0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function S0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function E0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lh.compareFunction=qh,r=lh):r=Kh,t.setTexture2D(e||r,i)}function T0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qh,i)}function A0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||eu,i)}function R0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jh,i)}function C0(s){switch(s){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return v0;case 35669:case 35673:return _0;case 5125:return M0;case 36294:return b0;case 36295:return w0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function I0(s,e){s.uniform1fv(this.addr,e)}function P0(s,e){let t=Rs(e,this.size,2);s.uniform2fv(this.addr,t)}function z0(s,e){let t=Rs(e,this.size,3);s.uniform3fv(this.addr,t)}function D0(s,e){let t=Rs(e,this.size,4);s.uniform4fv(this.addr,t)}function U0(s,e){let t=Rs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function N0(s,e){let t=Rs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function k0(s,e){let t=Rs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function F0(s,e){s.uniform1iv(this.addr,e)}function O0(s,e){s.uniform2iv(this.addr,e)}function B0(s,e){s.uniform3iv(this.addr,e)}function L0(s,e){s.uniform4iv(this.addr,e)}function H0(s,e){s.uniform1uiv(this.addr,e)}function V0(s,e){s.uniform2uiv(this.addr,e)}function G0(s,e){s.uniform3uiv(this.addr,e)}function W0(s,e){s.uniform4uiv(this.addr,e)}function X0(s,e,t){let n=this.cache,i=e.length,r=Ia(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Kh,r[o])}function q0(s,e,t){let n=this.cache,i=e.length,r=Ia(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qh,r[o])}function Y0(s,e,t){let n=this.cache,i=e.length,r=Ia(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||eu,r[o])}function $0(s,e,t){let n=this.cache,i=e.length,r=Ia(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||jh,r[o])}function Z0(s){switch(s){case 5126:return I0;case 35664:return P0;case 35665:return z0;case 35666:return D0;case 35674:return U0;case 35675:return N0;case 35676:return k0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return L0;case 5125:return H0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return $0}}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C0(t.type)}},_c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z0(t.type)}},Mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},So=/(\w+)(\])?(\[|\.)?/g;function mh(s,e){s.seq.push(e),s.map[e.id]=e}function J0(s,e,t){let n=s.name,i=n.length;for(So.lastIndex=0;;){let r=So.exec(n),o=So.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){mh(t,l===void 0?new vc(a,s,e):new _c(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Mc(a),mh(t,d)),t=d}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);J0(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function gh(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var K0=37297,j0=0;function Q0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var xh=new We;function eg(s){et._getMatrix(xh,et.workingColorSpace,s);let e=`mat3( ${xh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case Ca:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yh(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Q0(s.getShaderSource(e),o)}else return i}function tg(s,e){let t=eg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ng(s,e){let t;switch(e){case Td:t="Linear";break;case Ad:t="Reinhard";break;case Rd:t="Cineon";break;case Cd:t="ACESFilmic";break;case Pd:t="AgX";break;case zd:t="Neutral";break;case Id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xr=new B;function ig(){et.getLuminanceCoefficients(Xr);let s=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function rg(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ag(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function nr(s){return s!==""}function vh(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var og=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(s){return s.replace(og,lg)}var cg=new Map;function lg(s,e){let t=Xe[e];if(t===void 0){let n=cg.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}var hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(s){return s.replace(hg,ug)}function ug(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bh(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function fg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _s:case Ms:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function mg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Aa:e="ENVMAP_BLENDING_MULTIPLY";break;case Sd:e="ENVMAP_BLENDING_MIX";break;case Ed:e="ENVMAP_BLENDING_ADD";break}return e}function gg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xg(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=dg(t),l=fg(t),h=pg(t),d=mg(t),f=gg(t),p=sg(t),x=rg(r),y=i.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(nr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(nr).join(`
`),m.length>0&&(m+=`
`)):(g=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),m=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ci?ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,tg("linearToOutputTexel",t.outputColorSpace),ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),o=bc(o),o=vh(o,t),o=_h(o,t),a=bc(a),a=vh(a,t),a=_h(a,t),o=Mh(o),a=Mh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=M+g+o,v=M+m+a,D=gh(i,i.VERTEX_SHADER,_),C=gh(i,i.FRAGMENT_SHADER,v);i.attachShader(y,D),i.attachShader(y,C),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function I(b){if(s.debug.checkShaderErrors){let w=i.getProgramInfoLog(y).trim(),A=i.getShaderInfoLog(D).trim(),U=i.getShaderInfoLog(C).trim(),N=!0,k=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,D,C);else{let W=yh(i,D,"vertex"),V=yh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+w+`
`+W+`
`+V)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(A===""||U==="")&&(k=!1);k&&(b.diagnostics={runnable:N,programLog:w,vertexShader:{log:A,prefix:g},fragmentShader:{log:U,prefix:m}})}i.deleteShader(D),i.deleteShader(C),z=new ys(i,y),E=ag(i,y)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let u=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return u===!1&&(u=i.getProgramParameter(y,K0)),u},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=C,this}var yg=0,wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sc(e),t.set(e,n)),n}},Sc=class{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}};function vg(s,e,t,n,i,r,o){let a=new ar,c=new wc,l=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,u,b,w,A){let U=w.fog,N=A.geometry,k=E.isMeshStandardMaterial?w.environment:null,W=(E.isMeshStandardMaterial?t:e).get(E.envMap||k),V=W&&W.mapping===Ra?W.image.height:null,ee=x[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pe=K!==void 0?K.length:0,Ee=0;N.morphAttributes.position!==void 0&&(Ee=1),N.morphAttributes.normal!==void 0&&(Ee=2),N.morphAttributes.color!==void 0&&(Ee=3);let je,Z,se,_e;if(ee){let Qe=Sn[ee];je=Qe.vertexShader,Z=Qe.fragmentShader}else je=E.vertexShader,Z=E.fragmentShader,c.update(E),se=c.getVertexShaderID(E),_e=c.getFragmentShaderID(E);let fe=s.getRenderTarget(),ke=s.state.buffers.depth.getReversed(),He=A.isInstancedMesh===!0,qe=A.isBatchedMesh===!0,rt=!!E.map,$e=!!E.matcap,xt=!!W,O=!!E.aoMap,Ut=!!E.lightMap,Te=!!E.bumpMap,Ue=!!E.normalMap,Ie=!!E.displacementMap,nt=!!E.emissiveMap,Ae=!!E.metalnessMap,P=!!E.roughnessMap,S=E.anisotropy>0,G=E.clearcoat>0,Q=E.dispersion>0,te=E.iridescence>0,$=E.sheen>0,Me=E.transmission>0,le=S&&!!E.anisotropyMap,xe=G&&!!E.clearcoatMap,Pe=G&&!!E.clearcoatNormalMap,ne=G&&!!E.clearcoatRoughnessMap,ye=te&&!!E.iridescenceMap,ze=te&&!!E.iridescenceThicknessMap,Fe=$&&!!E.sheenColorMap,ve=$&&!!E.sheenRoughnessMap,Ze=!!E.specularMap,Oe=!!E.specularColorMap,at=!!E.specularIntensityMap,F=Me&&!!E.transmissionMap,de=Me&&!!E.thicknessMap,Y=!!E.gradientMap,j=!!E.alphaMap,oe=E.alphaTest>0,ce=!!E.alphaHash,Ne=!!E.extensions,ht=ci;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ht=s.toneMapping);let wt={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:Z,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:qe,batchingColor:qe&&A._colorsTexture!==null,instancing:He,instancingColor:He&&A.instanceColor!==null,instancingMorph:He&&A.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:As,alphaToCoverage:!!E.alphaToCoverage,map:rt,matcap:$e,envMap:xt,envMapMode:xt&&W.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:Ut,bumpMap:Te,normalMap:Ue,displacementMap:f&&Ie,emissiveMap:nt,normalMapObjectSpace:Ue&&E.normalMapType===kd,normalMapTangentSpace:Ue&&E.normalMapType===Qc,metalnessMap:Ae,roughnessMap:P,anisotropy:S,anisotropyMap:le,clearcoat:G,clearcoatMap:xe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ne,dispersion:Q,iridescence:te,iridescenceMap:ye,iridescenceThicknessMap:ze,sheen:$,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:Ze,specularColorMap:Oe,specularIntensityMap:at,transmission:Me,transmissionMap:F,thicknessMap:de,gradientMap:Y,opaque:E.transparent===!1&&E.blending===ms&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:oe,alphaHash:ce,combine:E.combine,mapUv:rt&&y(E.map.channel),aoMapUv:O&&y(E.aoMap.channel),lightMapUv:Ut&&y(E.lightMap.channel),bumpMapUv:Te&&y(E.bumpMap.channel),normalMapUv:Ue&&y(E.normalMap.channel),displacementMapUv:Ie&&y(E.displacementMap.channel),emissiveMapUv:nt&&y(E.emissiveMap.channel),metalnessMapUv:Ae&&y(E.metalnessMap.channel),roughnessMapUv:P&&y(E.roughnessMap.channel),anisotropyMapUv:le&&y(E.anisotropyMap.channel),clearcoatMapUv:xe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(E.sheenRoughnessMap.channel),specularMapUv:Ze&&y(E.specularMap.channel),specularColorMapUv:Oe&&y(E.specularColorMap.channel),specularIntensityMapUv:at&&y(E.specularIntensityMap.channel),transmissionMapUv:F&&y(E.transmissionMap.channel),thicknessMapUv:de&&y(E.thicknessMap.channel),alphaMapUv:j&&y(E.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ue||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!N.attributes.uv&&(rt||j),fog:!!U,useFog:E.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ke,skinning:A.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ee,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&b.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:rt&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===ot,decodeVideoTextureEmissive:nt&&E.emissiveMap.isVideoTexture===!0&&et.getTransfer(E.emissiveMap.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vt,flipSided:E.side===Ft,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function m(E){let u=[];if(E.shaderID?u.push(E.shaderID):(u.push(E.customVertexShaderID),u.push(E.customFragmentShaderID)),E.defines!==void 0)for(let b in E.defines)u.push(b),u.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(M(u,E),_(u,E),u.push(s.outputColorSpace)),u.push(E.customProgramCacheKey),u.join()}function M(E,u){E.push(u.precision),E.push(u.outputColorSpace),E.push(u.envMapMode),E.push(u.envMapCubeUVHeight),E.push(u.mapUv),E.push(u.alphaMapUv),E.push(u.lightMapUv),E.push(u.aoMapUv),E.push(u.bumpMapUv),E.push(u.normalMapUv),E.push(u.displacementMapUv),E.push(u.emissiveMapUv),E.push(u.metalnessMapUv),E.push(u.roughnessMapUv),E.push(u.anisotropyMapUv),E.push(u.clearcoatMapUv),E.push(u.clearcoatNormalMapUv),E.push(u.clearcoatRoughnessMapUv),E.push(u.iridescenceMapUv),E.push(u.iridescenceThicknessMapUv),E.push(u.sheenColorMapUv),E.push(u.sheenRoughnessMapUv),E.push(u.specularMapUv),E.push(u.specularColorMapUv),E.push(u.specularIntensityMapUv),E.push(u.transmissionMapUv),E.push(u.thicknessMapUv),E.push(u.combine),E.push(u.fogExp2),E.push(u.sizeAttenuation),E.push(u.morphTargetsCount),E.push(u.morphAttributeCount),E.push(u.numDirLights),E.push(u.numPointLights),E.push(u.numSpotLights),E.push(u.numSpotLightMaps),E.push(u.numHemiLights),E.push(u.numRectAreaLights),E.push(u.numDirLightShadows),E.push(u.numPointLightShadows),E.push(u.numSpotLightShadows),E.push(u.numSpotLightShadowsWithMaps),E.push(u.numLightProbes),E.push(u.shadowMapType),E.push(u.toneMapping),E.push(u.numClippingPlanes),E.push(u.numClipIntersection),E.push(u.depthPacking)}function _(E,u){a.disableAll(),u.supportsVertexTextures&&a.enable(0),u.instancing&&a.enable(1),u.instancingColor&&a.enable(2),u.instancingMorph&&a.enable(3),u.matcap&&a.enable(4),u.envMap&&a.enable(5),u.normalMapObjectSpace&&a.enable(6),u.normalMapTangentSpace&&a.enable(7),u.clearcoat&&a.enable(8),u.iridescence&&a.enable(9),u.alphaTest&&a.enable(10),u.vertexColors&&a.enable(11),u.vertexAlphas&&a.enable(12),u.vertexUv1s&&a.enable(13),u.vertexUv2s&&a.enable(14),u.vertexUv3s&&a.enable(15),u.vertexTangents&&a.enable(16),u.anisotropy&&a.enable(17),u.alphaHash&&a.enable(18),u.batching&&a.enable(19),u.dispersion&&a.enable(20),u.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),u.fog&&a.enable(0),u.useFog&&a.enable(1),u.flatShading&&a.enable(2),u.logarithmicDepthBuffer&&a.enable(3),u.reverseDepthBuffer&&a.enable(4),u.skinning&&a.enable(5),u.morphTargets&&a.enable(6),u.morphNormals&&a.enable(7),u.morphColors&&a.enable(8),u.premultipliedAlpha&&a.enable(9),u.shadowMapEnabled&&a.enable(10),u.doubleSided&&a.enable(11),u.flipSided&&a.enable(12),u.useDepthPacking&&a.enable(13),u.dithering&&a.enable(14),u.transmission&&a.enable(15),u.sheen&&a.enable(16),u.opaque&&a.enable(17),u.pointsUvs&&a.enable(18),u.decodeVideoTexture&&a.enable(19),u.decodeVideoTextureEmissive&&a.enable(20),u.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){let u=x[E.type],b;if(u){let w=Sn[u];b=lf.clone(w.uniforms)}else b=E.uniforms;return b}function D(E,u){let b;for(let w=0,A=h.length;w<A;w++){let U=h[w];if(U.cacheKey===u){b=U,++b.usedTimes;break}}return b===void 0&&(b=new xg(s,u,E,r),h.push(b)),b}function C(E){if(--E.usedTimes===0){let u=h.indexOf(E);h[u]=h[h.length-1],h.pop(),E.destroy()}}function I(E){c.remove(E)}function z(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:D,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:z}}function _g(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sh(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,p,x,y,g){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:y,group:g},s[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=y,m.group=g),e++,m}function a(d,f,p,x,y,g){let m=o(d,f,p,x,y,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function c(d,f,p,x,y,g){let m=o(d,f,p,x,y,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function l(d,f){t.length>1&&t.sort(d||Mg),n.length>1&&n.sort(f||wh),i.length>1&&i.sort(f||wh)}function h(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function bg(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Sh,s.set(n,[o])):i>=r.length?(o=new Sh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function wg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new me};break;case"SpotLight":t={position:new B,direction:new B,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function Sg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Eg=0;function Tg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ag(s){let e=new wg,t=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let i=new B,r=new Ke,o=new Ke;function a(l){let h=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,x=0,y=0,g=0,m=0,M=0,_=0,v=0,D=0,C=0,I=0;l.sort(Tg);for(let E=0,u=l.length;E<u;E++){let b=l[E],w=b.color,A=b.intensity,U=b.distance,N=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=w.r*A,d+=w.g*A,f+=w.b*A;else if(b.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(b.sh.coefficients[k],A);I++}else if(b.isDirectionalLight){let k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let W=b.shadow,V=t.get(b);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=N,n.directionalShadowMatrix[p]=b.shadow.matrix,M++}n.directional[p]=k,p++}else if(b.isSpotLight){let k=e.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(w).multiplyScalar(A),k.distance=U,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,n.spot[y]=k;let W=b.shadow;if(b.map&&(n.spotLightMap[D]=b.map,D++,W.updateMatrices(b),b.castShadow&&C++),n.spotLightMatrix[y]=W.matrix,b.castShadow){let V=t.get(b);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=N,v++}y++}else if(b.isRectAreaLight){let k=e.get(b);k.color.copy(w).multiplyScalar(A),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=k,g++}else if(b.isPointLight){let k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){let W=b.shadow,V=t.get(b);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[x]=V,n.pointShadowMap[x]=N,n.pointShadowMatrix[x]=b.shadow.matrix,_++}n.point[x]=k,x++}else if(b.isHemisphereLight){let k=e.get(b);k.skyColor.copy(b.color).multiplyScalar(A),k.groundColor.copy(b.groundColor).multiplyScalar(A),n.hemi[m]=k,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==p||z.pointLength!==x||z.spotLength!==y||z.rectAreaLength!==g||z.hemiLength!==m||z.numDirectionalShadows!==M||z.numPointShadows!==_||z.numSpotShadows!==v||z.numSpotMaps!==D||z.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,z.directionalLength=p,z.pointLength=x,z.spotLength=y,z.rectAreaLength=g,z.hemiLength=m,z.numDirectionalShadows=M,z.numPointShadows=_,z.numSpotShadows=v,z.numSpotMaps=D,z.numLightProbes=I,n.version=Eg++)}function c(l,h){let d=0,f=0,p=0,x=0,y=0,g=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){let _=l[m];if(_.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(_.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:n}}function Eh(s){let e=new Ag(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Rg(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Eh(s),e.set(i,[a])):r>=o.length?(a=new Eh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ec=class extends Yn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Pg(s,e,t){let n=new or,i=new Ye,r=new Ye,o=new Mt,a=new Ec({depthPacking:Nd}),c=new Tc,l={},h=t.maxTextureSize,d={[li]:Ft,[Ft]:li,[vt]:vt},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Cg,fragmentShader:Ig}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new lt;x.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new De(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let m=this.type;this.render=function(C,I,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let E=s.getRenderTarget(),u=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),w=s.state;w.setBlending(oi),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let A=m!==Ln&&this.type===Ln,U=m===Ln&&this.type!==Ln;for(let N=0,k=C.length;N<k;N++){let W=C[N],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let ee=V.getFrameExtents();if(i.multiply(ee),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,V.mapSize.y=r.y)),V.map===null||A===!0||U===!0){let pe=this.type!==Ln?{minFilter:tn,magFilter:tn}:{};V.map!==null&&V.map.dispose(),V.map=new Xn(i.x,i.y,pe),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let K=V.getViewportCount();for(let pe=0;pe<K;pe++){let Ee=V.getViewport(pe);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),w.viewport(o),V.updateMatrices(W,pe),n=V.getFrustum(),v(I,z,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Ln&&M(V,z),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,u,b)};function M(C,I){let z=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xn(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(I,null,z,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(I,null,z,p,y,null)}function _(C,I,z,E){let u=null,b=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)u=b;else if(u=z.isPointLight===!0?c:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let w=u.uuid,A=I.uuid,U=l[w];U===void 0&&(U={},l[w]=U);let N=U[A];N===void 0&&(N=u.clone(),U[A]=N,I.addEventListener("dispose",D)),u=N}if(u.visible=I.visible,u.wireframe=I.wireframe,E===Ln?u.side=I.shadowSide!==null?I.shadowSide:I.side:u.side=I.shadowSide!==null?I.shadowSide:d[I.side],u.alphaMap=I.alphaMap,u.alphaTest=I.alphaTest,u.map=I.map,u.clipShadows=I.clipShadows,u.clippingPlanes=I.clippingPlanes,u.clipIntersection=I.clipIntersection,u.displacementMap=I.displacementMap,u.displacementScale=I.displacementScale,u.displacementBias=I.displacementBias,u.wireframeLinewidth=I.wireframeLinewidth,u.linewidth=I.linewidth,z.isPointLight===!0&&u.isMeshDistanceMaterial===!0){let w=s.properties.get(u);w.light=z}return u}function v(C,I,z,E,u){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&u===Ln)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let A=e.update(C),U=C.material;if(Array.isArray(U)){let N=A.groups;for(let k=0,W=N.length;k<W;k++){let V=N[k],ee=U[V.materialIndex];if(ee&&ee.visible){let K=_(C,ee,E,u);C.onBeforeShadow(s,C,I,z,A,K,V),s.renderBufferDirect(z,null,A,K,C,V),C.onAfterShadow(s,C,I,z,A,K,V)}}}else if(U.visible){let N=_(C,U,E,u);C.onBeforeShadow(s,C,I,z,A,N,null),s.renderBufferDirect(z,null,A,N,C,null),C.onAfterShadow(s,C,I,z,A,N,null)}}let w=C.children;for(let A=0,U=w.length;A<U;A++)v(w[A],I,z,E,u)}function D(C){C.target.removeEventListener("dispose",D);for(let z in l){let E=l[z],u=C.target.uuid;u in E&&(E[u].dispose(),delete E[u])}}}var zg={[Co]:Io,[Po]:Uo,[zo]:No,[vs]:Do,[Io]:Co,[Uo]:Po,[No]:zo,[Do]:vs};function Dg(s,e){function t(){let F=!1,de=new Mt,Y=null,j=new Mt(0,0,0,0);return{setMask:function(oe){Y!==oe&&!F&&(s.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){F=oe},setClear:function(oe,ce,Ne,ht,wt){wt===!0&&(oe*=ht,ce*=ht,Ne*=ht),de.set(oe,ce,Ne,ht),j.equals(de)===!1&&(s.clearColor(oe,ce,Ne,ht),j.copy(de))},reset:function(){F=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let F=!1,de=!1,Y=null,j=null,oe=null;return{setReversed:function(ce){if(de!==ce){let Ne=e.get("EXT_clip_control");de?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);let ht=oe;oe=null,this.setClear(ht)}de=ce},getReversed:function(){return de},setTest:function(ce){ce?fe(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(ce){Y!==ce&&!F&&(s.depthMask(ce),Y=ce)},setFunc:function(ce){if(de&&(ce=zg[ce]),j!==ce){switch(ce){case Co:s.depthFunc(s.NEVER);break;case Io:s.depthFunc(s.ALWAYS);break;case Po:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case zo:s.depthFunc(s.EQUAL);break;case Do:s.depthFunc(s.GEQUAL);break;case Uo:s.depthFunc(s.GREATER);break;case No:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ce}},setLocked:function(ce){F=ce},setClear:function(ce){oe!==ce&&(de&&(ce=1-ce),s.clearDepth(ce),oe=ce)},reset:function(){F=!1,Y=null,j=null,oe=null,de=!1}}}function i(){let F=!1,de=null,Y=null,j=null,oe=null,ce=null,Ne=null,ht=null,wt=null;return{setTest:function(Qe){F||(Qe?fe(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(Qe){de!==Qe&&!F&&(s.stencilMask(Qe),de=Qe)},setFunc:function(Qe,Ht,Kt){(Y!==Qe||j!==Ht||oe!==Kt)&&(s.stencilFunc(Qe,Ht,Kt),Y=Qe,j=Ht,oe=Kt)},setOp:function(Qe,Ht,Kt){(ce!==Qe||Ne!==Ht||ht!==Kt)&&(s.stencilOp(Qe,Ht,Kt),ce=Qe,Ne=Ht,ht=Kt)},setLocked:function(Qe){F=Qe},setClear:function(Qe){wt!==Qe&&(s.clearStencil(Qe),wt=Qe)},reset:function(){F=!1,de=null,Y=null,j=null,oe=null,ce=null,Ne=null,ht=null,wt=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},d={},f=new WeakMap,p=[],x=null,y=!1,g=null,m=null,M=null,_=null,v=null,D=null,C=null,I=new me(0,0,0),z=0,E=!1,u=null,b=null,w=null,A=null,U=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,W=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=W>=2);let ee=null,K={},pe=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),je=new Mt().fromArray(pe),Z=new Mt().fromArray(Ee);function se(F,de,Y,j){let oe=new Uint8Array(4),ce=s.createTexture();s.bindTexture(F,ce),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<Y;Ne++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(de+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return ce}let _e={};_e[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(s.DEPTH_TEST),o.setFunc(vs),Te(!1),Ue(Al),fe(s.CULL_FACE),O(oi);function fe(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function ke(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function He(F,de){return d[F]!==de?(s.bindFramebuffer(F,de),d[F]=de,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=de),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=de),!0):!1}function qe(F,de){let Y=p,j=!1;if(F){Y=f.get(de),Y===void 0&&(Y=[],f.set(de,Y));let oe=F.textures;if(Y.length!==oe.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,Ne=oe.length;ce<Ne;ce++)Y[ce]=s.COLOR_ATTACHMENT0+ce;Y.length=oe.length,j=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,j=!0);j&&s.drawBuffers(Y)}function rt(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let $e={[Ii]:s.FUNC_ADD,[od]:s.FUNC_SUBTRACT,[cd]:s.FUNC_REVERSE_SUBTRACT};$e[ld]=s.MIN,$e[hd]=s.MAX;let xt={[ud]:s.ZERO,[dd]:s.ONE,[fd]:s.SRC_COLOR,[Ao]:s.SRC_ALPHA,[vd]:s.SRC_ALPHA_SATURATE,[xd]:s.DST_COLOR,[md]:s.DST_ALPHA,[pd]:s.ONE_MINUS_SRC_COLOR,[Ro]:s.ONE_MINUS_SRC_ALPHA,[yd]:s.ONE_MINUS_DST_COLOR,[gd]:s.ONE_MINUS_DST_ALPHA,[_d]:s.CONSTANT_COLOR,[Md]:s.ONE_MINUS_CONSTANT_COLOR,[bd]:s.CONSTANT_ALPHA,[wd]:s.ONE_MINUS_CONSTANT_ALPHA};function O(F,de,Y,j,oe,ce,Ne,ht,wt,Qe){if(F===oi){y===!0&&(ke(s.BLEND),y=!1);return}if(y===!1&&(fe(s.BLEND),y=!0),F!==ad){if(F!==g||Qe!==E){if((m!==Ii||v!==Ii)&&(s.blendEquation(s.FUNC_ADD),m=Ii,v=Ii),Qe)switch(F){case ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rl:s.blendFunc(s.ONE,s.ONE);break;case Cl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Il:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,_=null,D=null,C=null,I.set(0,0,0),z=0,g=F,E=Qe}return}oe=oe||de,ce=ce||Y,Ne=Ne||j,(de!==m||oe!==v)&&(s.blendEquationSeparate($e[de],$e[oe]),m=de,v=oe),(Y!==M||j!==_||ce!==D||Ne!==C)&&(s.blendFuncSeparate(xt[Y],xt[j],xt[ce],xt[Ne]),M=Y,_=j,D=ce,C=Ne),(ht.equals(I)===!1||wt!==z)&&(s.blendColor(ht.r,ht.g,ht.b,wt),I.copy(ht),z=wt),g=F,E=!1}function Ut(F,de){F.side===vt?ke(s.CULL_FACE):fe(s.CULL_FACE);let Y=F.side===Ft;de&&(Y=!Y),Te(Y),F.blending===ms&&F.transparent===!1?O(oi):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let j=F.stencilWrite;a.setTest(j),j&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(F){u!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),u=F)}function Ue(F){F!==sd?(fe(s.CULL_FACE),F!==b&&(F===Al?s.cullFace(s.BACK):F===rd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),b=F}function Ie(F){F!==w&&(k&&s.lineWidth(F),w=F)}function nt(F,de,Y){F?(fe(s.POLYGON_OFFSET_FILL),(A!==de||U!==Y)&&(s.polygonOffset(de,Y),A=de,U=Y)):ke(s.POLYGON_OFFSET_FILL)}function Ae(F){F?fe(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function P(F){F===void 0&&(F=s.TEXTURE0+N-1),ee!==F&&(s.activeTexture(F),ee=F)}function S(F,de,Y){Y===void 0&&(ee===null?Y=s.TEXTURE0+N-1:Y=ee);let j=K[Y];j===void 0&&(j={type:void 0,texture:void 0},K[Y]=j),(j.type!==F||j.texture!==de)&&(ee!==Y&&(s.activeTexture(Y),ee=Y),s.bindTexture(F,de||_e[F]),j.type=F,j.texture=de)}function G(){let F=K[ee];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(F){je.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function ve(F){Z.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function Ze(F,de){let Y=l.get(de);Y===void 0&&(Y=new WeakMap,l.set(de,Y));let j=Y.get(F);j===void 0&&(j=s.getUniformBlockIndex(de,F.name),Y.set(F,j))}function Oe(F,de){let j=l.get(de).get(F);c.get(de)!==j&&(s.uniformBlockBinding(de,j,F.__bindingPointIndex),c.set(de,j))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,K={},d={},f=new WeakMap,p=[],x=null,y=!1,g=null,m=null,M=null,_=null,v=null,D=null,C=null,I=new me(0,0,0),z=0,E=!1,u=null,b=null,w=null,A=null,U=null,je.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:ke,bindFramebuffer:He,drawBuffers:qe,useProgram:rt,setBlending:O,setMaterial:Ut,setFlipSided:Te,setCullFace:Ue,setLineWidth:Ie,setPolygonOffset:nt,setScissorTest:Ae,activeTexture:P,bindTexture:S,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:ye,texImage3D:ze,updateUBOMapping:Ze,uniformBlockBinding:Oe,texStorage2D:Pe,texStorage3D:ne,texSubImage2D:$,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:xe,scissor:Fe,viewport:ve,reset:at}}function Th(s,e,t,n){let i=Ug(n);switch(t){case Lh:return s*e;case Vh:return s*e;case Gh:return s*e*2;case Zc:return s*e/i.components*i.byteLength;case Jc:return s*e/i.components*i.byteLength;case Wh:return s*e*2/i.components*i.byteLength;case Kc:return s*e*2/i.components*i.byteLength;case Hh:return s*e*3/i.components*i.byteLength;case gn:return s*e*4/i.components*i.byteLength;case jc:return s*e*4/i.components*i.byteLength;case Jr:case Kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jr:case Qr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Go:return Math.max(s,16)*Math.max(e,8)/4;case Lo:case Vo:return Math.max(s,8)*Math.max(e,8)/2;case Wo:case Xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ea:case oc:case cc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xh:case lc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case hc:case uc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ug(s){switch(s){case Wn:case Fh:return{byteLength:1,components:1};case sr:case Oh:case fr:return{byteLength:2,components:1};case Yc:case $c:return{byteLength:2,components:4};case Ni:case qc:case Tn:return{byteLength:4,components:1};case Bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ng(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,S){return p?new OffscreenCanvas(P,S):ia("canvas")}function y(P,S,G){let Q=1,te=Ae(P);if((te.width>G||te.height>G)&&(Q=G/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let $=Math.floor(Q*te.width),Me=Math.floor(Q*te.height);d===void 0&&(d=x($,Me));let le=S?x($,Me):d;return le.width=$,le.height=Me,le.getContext("2d").drawImage(P,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Me+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){s.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(P,S,G,Q,te=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=S;if(S===s.RED&&(G===s.FLOAT&&($=s.R32F),G===s.HALF_FLOAT&&($=s.R16F),G===s.UNSIGNED_BYTE&&($=s.R8)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.R8UI),G===s.UNSIGNED_SHORT&&($=s.R16UI),G===s.UNSIGNED_INT&&($=s.R32UI),G===s.BYTE&&($=s.R8I),G===s.SHORT&&($=s.R16I),G===s.INT&&($=s.R32I)),S===s.RG&&(G===s.FLOAT&&($=s.RG32F),G===s.HALF_FLOAT&&($=s.RG16F),G===s.UNSIGNED_BYTE&&($=s.RG8)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RG8UI),G===s.UNSIGNED_SHORT&&($=s.RG16UI),G===s.UNSIGNED_INT&&($=s.RG32UI),G===s.BYTE&&($=s.RG8I),G===s.SHORT&&($=s.RG16I),G===s.INT&&($=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGB8UI),G===s.UNSIGNED_SHORT&&($=s.RGB16UI),G===s.UNSIGNED_INT&&($=s.RGB32UI),G===s.BYTE&&($=s.RGB8I),G===s.SHORT&&($=s.RGB16I),G===s.INT&&($=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGBA8UI),G===s.UNSIGNED_SHORT&&($=s.RGBA16UI),G===s.UNSIGNED_INT&&($=s.RGBA32UI),G===s.BYTE&&($=s.RGBA8I),G===s.SHORT&&($=s.RGBA16I),G===s.INT&&($=s.RGBA32I)),S===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),S===s.RGBA){let Me=te?Ca:et.getTransfer(Q);G===s.FLOAT&&($=s.RGBA32F),G===s.HALF_FLOAT&&($=s.RGBA16F),G===s.UNSIGNED_BYTE&&($=Me===ot?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(P,S){let G;return P?S===null||S===Ni||S===bs?G=s.DEPTH24_STENCIL8:S===Tn?G=s.DEPTH32F_STENCIL8:S===sr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ni||S===bs?G=s.DEPTH_COMPONENT24:S===Tn?G=s.DEPTH_COMPONENT32F:S===sr&&(G=s.DEPTH_COMPONENT16),G}function D(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function C(P){let S=P.target;S.removeEventListener("dispose",C),z(S),S.isVideoTexture&&h.delete(S)}function I(P){let S=P.target;S.removeEventListener("dispose",I),u(S)}function z(P){let S=n.get(P);if(S.__webglInit===void 0)return;let G=P.source,Q=f.get(G);if(Q){let te=Q[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(P),Object.keys(Q).length===0&&f.delete(G)}n.remove(P)}function E(P){let S=n.get(P);s.deleteTexture(S.__webglTexture);let G=P.source,Q=f.get(G);delete Q[S.__cacheKey],o.memory.textures--}function u(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let te=0;te<S.__webglFramebuffer[Q].length;te++)s.deleteFramebuffer(S.__webglFramebuffer[Q][te]);else s.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[Q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=P.textures;for(let Q=0,te=G.length;Q<te;Q++){let $=n.get(G[Q]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(P)}let b=0;function w(){b=0}function A(){let P=b;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),b+=1,P}function U(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function N(P,S){let G=n.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,P,S);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function k(P,S){let G=n.get(P);if(P.version>0&&G.__version!==P.version){Z(G,P,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function W(P,S){let G=n.get(P);if(P.version>0&&G.__version!==P.version){Z(G,P,S);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function V(P,S){let G=n.get(P);if(P.version>0&&G.__version!==P.version){se(G,P,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}let ee={[Oo]:s.REPEAT,[Di]:s.CLAMP_TO_EDGE,[Bo]:s.MIRRORED_REPEAT},K={[tn]:s.NEAREST,[Dd]:s.NEAREST_MIPMAP_NEAREST,[Er]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[$a]:s.LINEAR_MIPMAP_NEAREST,[Ui]:s.LINEAR_MIPMAP_LINEAR},pe={[Fd]:s.NEVER,[Gd]:s.ALWAYS,[Od]:s.LESS,[qh]:s.LEQUAL,[Bd]:s.EQUAL,[Vd]:s.GEQUAL,[Ld]:s.GREATER,[Hd]:s.NOTEQUAL};function Ee(P,S){if(S.type===Tn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===En||S.magFilter===$a||S.magFilter===Er||S.magFilter===Ui||S.minFilter===En||S.minFilter===$a||S.minFilter===Er||S.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ee[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ee[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ee[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,K[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==Er&&S.minFilter!==Ui||S.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function je(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",C));let Q=S.source,te=f.get(Q);te===void 0&&(te={},f.set(Q,te));let $=U(S);if($!==P.__cacheKey){te[$]===void 0&&(te[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[$].usedTimes++;let Me=te[P.__cacheKey];Me!==void 0&&(te[P.__cacheKey].usedTimes--,Me.usedTimes===0&&E(S)),P.__cacheKey=$,P.__webglTexture=te[$].texture}return G}function Z(P,S,G){let Q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=s.TEXTURE_3D);let te=je(P,S),$=S.source;t.bindTexture(Q,P.__webglTexture,s.TEXTURE0+G);let Me=n.get($);if($.version!==Me.__version||te===!0){t.activeTexture(s.TEXTURE0+G);let le=et.getPrimaries(et.workingColorSpace),xe=S.colorSpace===ai?null:et.getPrimaries(S.colorSpace),Pe=S.colorSpace===ai||le===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ne=y(S.image,!1,i.maxTextureSize);ne=nt(S,ne);let ye=r.convert(S.format,S.colorSpace),ze=r.convert(S.type),Fe=_(S.internalFormat,ye,ze,S.colorSpace,S.isVideoTexture);Ee(Q,S);let ve,Ze=S.mipmaps,Oe=S.isVideoTexture!==!0,at=Me.__version===void 0||te===!0,F=$.dataReady,de=D(S,ne);if(S.isDepthTexture)Fe=v(S.format===ws,S.type),at&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Fe,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ne.width,ne.height,0,ye,ze,null));else if(S.isDataTexture)if(Ze.length>0){Oe&&at&&t.texStorage2D(s.TEXTURE_2D,de,Fe,Ze[0].width,Ze[0].height);for(let Y=0,j=Ze.length;Y<j;Y++)ve=Ze[Y],Oe?F&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,ye,ze,ve.data):t.texImage2D(s.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,ye,ze,ve.data);S.generateMipmaps=!1}else Oe?(at&&t.texStorage2D(s.TEXTURE_2D,de,Fe,ne.width,ne.height),F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,ye,ze,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,ne.width,ne.height,0,ye,ze,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Fe,Ze[0].width,Ze[0].height,ne.depth);for(let Y=0,j=Ze.length;Y<j;Y++)if(ve=Ze[Y],S.format!==gn)if(ye!==null)if(Oe){if(F)if(S.layerUpdates.size>0){let oe=Th(ve.width,ve.height,S.format,S.type);for(let ce of S.layerUpdates){let Ne=ve.data.subarray(ce*oe/ve.data.BYTES_PER_ELEMENT,(ce+1)*oe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ce,ve.width,ve.height,1,ye,Ne)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ne.depth,ye,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Fe,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ne.depth,ye,ze,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Fe,ve.width,ve.height,ne.depth,0,ye,ze,ve.data)}else{Oe&&at&&t.texStorage2D(s.TEXTURE_2D,de,Fe,Ze[0].width,Ze[0].height);for(let Y=0,j=Ze.length;Y<j;Y++)ve=Ze[Y],S.format!==gn?ye!==null?Oe?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?F&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,ye,ze,ve.data):t.texImage2D(s.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,ye,ze,ve.data)}else if(S.isDataArrayTexture)if(Oe){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Fe,ne.width,ne.height,ne.depth),F)if(S.layerUpdates.size>0){let Y=Th(ne.width,ne.height,S.format,S.type);for(let j of S.layerUpdates){let oe=ne.data.subarray(j*Y/ne.data.BYTES_PER_ELEMENT,(j+1)*Y/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,ye,ze,oe)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ye,ze,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ne.width,ne.height,ne.depth,0,ye,ze,ne.data);else if(S.isData3DTexture)Oe?(at&&t.texStorage3D(s.TEXTURE_3D,de,Fe,ne.width,ne.height,ne.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ye,ze,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ne.width,ne.height,ne.depth,0,ye,ze,ne.data);else if(S.isFramebufferTexture){if(at)if(Oe)t.texStorage2D(s.TEXTURE_2D,de,Fe,ne.width,ne.height);else{let Y=ne.width,j=ne.height;for(let oe=0;oe<de;oe++)t.texImage2D(s.TEXTURE_2D,oe,Fe,Y,j,0,ye,ze,null),Y>>=1,j>>=1}}else if(Ze.length>0){if(Oe&&at){let Y=Ae(Ze[0]);t.texStorage2D(s.TEXTURE_2D,de,Fe,Y.width,Y.height)}for(let Y=0,j=Ze.length;Y<j;Y++)ve=Ze[Y],Oe?F&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ye,ze,ve):t.texImage2D(s.TEXTURE_2D,Y,Fe,ye,ze,ve);S.generateMipmaps=!1}else if(Oe){if(at){let Y=Ae(ne);t.texStorage2D(s.TEXTURE_2D,de,Fe,Y.width,Y.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,ze,ne)}else t.texImage2D(s.TEXTURE_2D,0,Fe,ye,ze,ne);g(S)&&m(Q),Me.__version=$.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function se(P,S,G){if(S.image.length!==6)return;let Q=je(P,S),te=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);let $=n.get(te);if(te.version!==$.__version||Q===!0){t.activeTexture(s.TEXTURE0+G);let Me=et.getPrimaries(et.workingColorSpace),le=S.colorSpace===ai?null:et.getPrimaries(S.colorSpace),xe=S.colorSpace===ai||Me===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let j=0;j<6;j++)!Pe&&!ne?ye[j]=y(S.image[j],!0,i.maxCubemapSize):ye[j]=ne?S.image[j].image:S.image[j],ye[j]=nt(S,ye[j]);let ze=ye[0],Fe=r.convert(S.format,S.colorSpace),ve=r.convert(S.type),Ze=_(S.internalFormat,Fe,ve,S.colorSpace),Oe=S.isVideoTexture!==!0,at=$.__version===void 0||Q===!0,F=te.dataReady,de=D(S,ze);Ee(s.TEXTURE_CUBE_MAP,S);let Y;if(Pe){Oe&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Ze,ze.width,ze.height);for(let j=0;j<6;j++){Y=ye[j].mipmaps;for(let oe=0;oe<Y.length;oe++){let ce=Y[oe];S.format!==gn?Fe!==null?Oe?F&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,ce.width,ce.height,Fe,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,Ze,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,ce.width,ce.height,Fe,ve,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,Ze,ce.width,ce.height,0,Fe,ve,ce.data)}}}else{if(Y=S.mipmaps,Oe&&at){Y.length>0&&de++;let j=Ae(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Ze,j.width,j.height)}for(let j=0;j<6;j++)if(ne){Oe?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ye[j].width,ye[j].height,Fe,ve,ye[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ze,ye[j].width,ye[j].height,0,Fe,ve,ye[j].data);for(let oe=0;oe<Y.length;oe++){let Ne=Y[oe].image[j].image;Oe?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,Ne.width,Ne.height,Fe,ve,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,Ze,Ne.width,Ne.height,0,Fe,ve,Ne.data)}}else{Oe?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Fe,ve,ye[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ze,Fe,ve,ye[j]);for(let oe=0;oe<Y.length;oe++){let ce=Y[oe];Oe?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,Fe,ve,ce.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,Ze,Fe,ve,ce.image[j])}}}g(S)&&m(s.TEXTURE_CUBE_MAP),$.__version=te.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function _e(P,S,G,Q,te,$){let Me=r.convert(G.format,G.colorSpace),le=r.convert(G.type),xe=_(G.internalFormat,Me,le,G.colorSpace),Pe=n.get(S),ne=n.get(G);if(ne.__renderTarget=S,!Pe.__hasExternalTextures){let ye=Math.max(1,S.width>>$),ze=Math.max(1,S.height>>$);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,$,xe,ye,ze,S.depth,0,Me,le,null):t.texImage2D(te,$,xe,ye,ze,0,Me,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Ue(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,te,ne.__webglTexture,0,Te(S)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,te,ne.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(P,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){let Q=S.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,$=v(S.stencilBuffer,te),Me=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=Te(S);Ue(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,$,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,$,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,$,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,P)}else{let Q=S.textures;for(let te=0;te<Q.length;te++){let $=Q[te],Me=r.convert($.format,$.colorSpace),le=r.convert($.type),xe=_($.internalFormat,Me,le,$.colorSpace),Pe=Te(S);G&&Ue(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,xe,S.width,S.height):Ue(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,xe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let te=Q.__webglTexture,$=Te(S);if(S.depthTexture.format===gs)Ue(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(S.depthTexture.format===ws)Ue(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function He(P){let S=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let Q=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){let te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Q}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ke(S.__webglFramebuffer,P)}else if(G){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=s.createRenderbuffer(),fe(S.__webglDepthbuffer[Q],P,!1);else{let te=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,$)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),fe(S.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(P,S,G){let Q=n.get(P);S!==void 0&&_e(Q.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&He(P)}function rt(P){let S=P.texture,G=n.get(P),Q=n.get(S);P.addEventListener("dispose",I);let te=P.textures,$=P.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=S.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let xe=0;xe<S.mipmaps.length;xe++)G.__webglFramebuffer[le][xe]=s.createFramebuffer()}else G.__webglFramebuffer[le]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)G.__webglFramebuffer[le]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Me)for(let le=0,xe=te.length;le<xe;le++){let Pe=n.get(te[le]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&Ue(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){let xe=te[le];G.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[le]);let Pe=r.convert(xe.format,xe.colorSpace),ne=r.convert(xe.type),ye=_(xe.internalFormat,Pe,ne,xe.colorSpace,P.isXRRenderTarget===!0),ze=Te(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,ye,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,G.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)_e(G.__webglFramebuffer[le][xe],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else _e(G.__webglFramebuffer[le],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(S)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,xe=te.length;le<xe;le++){let Pe=te[le],ne=n.get(Pe);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),Ee(s.TEXTURE_2D,Pe),_e(G.__webglFramebuffer,P,Pe,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),g(Pe)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),Ee(le,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)_e(G.__webglFramebuffer[xe],P,S,s.COLOR_ATTACHMENT0,le,xe);else _e(G.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,le,0);g(S)&&m(le),t.unbindTexture()}P.depthBuffer&&He(P)}function $e(P){let S=P.textures;for(let G=0,Q=S.length;G<Q;G++){let te=S[G];if(g(te)){let $=M(P),Me=n.get(te).__webglTexture;t.bindTexture($,Me),m($),t.unbindTexture()}}}let xt=[],O=[];function Ut(P){if(P.samples>0){if(Ue(P)===!1){let S=P.textures,G=P.width,Q=P.height,te=s.COLOR_BUFFER_BIT,$=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(P),le=S.length>1;if(le)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);let Pe=n.get(S[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pe,0)}s.blitFramebuffer(0,0,G,Q,0,0,G,Q,te,s.NEAREST),c===!0&&(xt.length=0,O.length=0,xt.push(s.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xt.push($),O.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);let Pe=n.get(S[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Te(P){return Math.min(i.maxSamples,P.samples)}function Ue(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ie(P){let S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function nt(P,S){let G=P.colorSpace,Q=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==As&&G!==ai&&(et.getTransfer(G)===ot?(Q!==gn||te!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ae(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=A,this.resetTextureUnits=w,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=qe,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ue}function kg(s,e){function t(n,i=ai){let r,o=et.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===Yc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return s.BYTE;if(n===Oh)return s.SHORT;if(n===sr)return s.UNSIGNED_SHORT;if(n===qc)return s.INT;if(n===Ni)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===fr)return s.HALF_FLOAT;if(n===Lh)return s.ALPHA;if(n===Hh)return s.RGB;if(n===gn)return s.RGBA;if(n===Vh)return s.LUMINANCE;if(n===Gh)return s.LUMINANCE_ALPHA;if(n===gs)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===Zc)return s.RED;if(n===Jc)return s.RED_INTEGER;if(n===Wh)return s.RG;if(n===Kc)return s.RG_INTEGER;if(n===jc)return s.RGBA_INTEGER;if(n===Jr||n===Kr||n===jr||n===Qr)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Ho||n===Vo||n===Go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wo||n===Xo)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yo||n===$o||n===Zo||n===Jo||n===Ko||n===jo||n===Qo||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ea||n===oc||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ea)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xh||n===lc||n===hc||n===uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Ac=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},dt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fg={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,x=.005;l.inputState.pinching&&f>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new nn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:Og,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cc=class extends hi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,x=null,y=new Rc,g=t.getContextAttributes(),m=null,M=null,_=[],v=[],D=new Ye,C=null,I=new Gt;I.viewport=new Mt;let z=new Gt;z.viewport=new Mt;let E=[I,z],u=new Ac,b=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=_[Z];return se===void 0&&(se=new ir,_[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=_[Z];return se===void 0&&(se=new ir,_[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=_[Z];return se===void 0&&(se=new ir,_[Z]=se),se.getHandSpace()};function A(Z){let se=v.indexOf(Z.inputSource);if(se===-1)return;let _e=_[se];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,l||o),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",N);for(let Z=0;Z<_.length;Z++){let se=v[Z];se!==null&&(v[Z]=null,_[Z].disconnect(se))}b=null,w=null,y.reset(),e.setRenderTarget(m),p=null,f=null,d=null,i=null,M=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",U),i.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){let se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Xn(p.framebufferWidth,p.framebufferHeight,{format:gn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,_e=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=g.stencil?ws:gs,_e=g.stencil?bs:Ni);let ke={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(ke),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Xn(f.textureWidth,f.textureHeight,{format:gn,type:Wn,depthTexture:new da(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function N(Z){for(let se=0;se<Z.removed.length;se++){let _e=Z.removed[se],fe=v.indexOf(_e);fe>=0&&(v[fe]=null,_[fe].disconnect(_e))}for(let se=0;se<Z.added.length;se++){let _e=Z.added[se],fe=v.indexOf(_e);if(fe===-1){for(let He=0;He<_.length;He++)if(He>=v.length){v.push(_e),fe=He;break}else if(v[He]===null){v[He]=_e,fe=He;break}if(fe===-1)break}let ke=_[fe];ke&&ke.connect(_e)}}let k=new B,W=new B;function V(Z,se,_e){k.setFromMatrixPosition(se.matrixWorld),W.setFromMatrixPosition(_e.matrixWorld);let fe=k.distanceTo(W),ke=se.projectionMatrix.elements,He=_e.projectionMatrix.elements,qe=ke[14]/(ke[10]-1),rt=ke[14]/(ke[10]+1),$e=(ke[9]+1)/ke[5],xt=(ke[9]-1)/ke[5],O=(ke[8]-1)/ke[0],Ut=(He[8]+1)/He[0],Te=qe*O,Ue=qe*Ut,Ie=fe/(-O+Ut),nt=Ie*-O;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(nt),Z.translateZ(Ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ke[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Ae=qe+Ie,P=rt+Ie,S=Te-nt,G=Ue+(fe-nt),Q=$e*rt/P*Ae,te=xt*rt/P*Ae;Z.projectionMatrix.makePerspective(S,G,Q,te,Ae,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ee(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let se=Z.near,_e=Z.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),u.near=z.near=I.near=se,u.far=z.far=I.far=_e,(b!==u.near||w!==u.far)&&(i.updateRenderState({depthNear:u.near,depthFar:u.far}),b=u.near,w=u.far),I.layers.mask=Z.layers.mask|2,z.layers.mask=Z.layers.mask|4,u.layers.mask=I.layers.mask|z.layers.mask;let fe=Z.parent,ke=u.cameras;ee(u,fe);for(let He=0;He<ke.length;He++)ee(ke[He],fe);ke.length===2?V(u,I,z):u.projectionMatrix.copy(I.projectionMatrix),K(Z,u,fe)};function K(Z,se,_e){_e===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return u},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(u)};let pe=null;function Ee(Z,se){if(h=se.getViewerPose(l||o),x=se,h!==null){let _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let fe=!1;_e.length!==u.cameras.length&&(u.cameras.length=0,fe=!0);for(let He=0;He<_e.length;He++){let qe=_e[He],rt=null;if(p!==null)rt=p.getViewport(qe);else{let xt=d.getViewSubImage(f,qe);rt=xt.viewport,He===0&&(e.setRenderTargetTextures(M,xt.colorTexture,f.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(M))}let $e=E[He];$e===void 0&&($e=new Gt,$e.layers.enable(He),$e.viewport=new Mt,E[He]=$e),$e.matrix.fromArray(qe.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(qe.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(rt.x,rt.y,rt.width,rt.height),He===0&&(u.matrix.copy($e.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale)),fe===!0&&u.cameras.push($e)}let ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")){let He=d.getDepthInformation(_e[0]);He&&He.isValid&&He.texture&&y.init(e,He,i.renderState)}}for(let _e=0;_e<_.length;_e++){let fe=v[_e],ke=_[_e];fe!==null&&ke!==void 0&&ke.update(fe,se,l||o)}pe&&pe(Z,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),x=null}let je=new Jh;je.setAnimationLoop(Ee),this.setAnimationLoop=function(Z){pe=Z},this.dispose=function(){}}},Ri=new zt,Lg=new Ke;function Hg(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Zh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,M,_):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ft&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ft&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),_=M.envMap,v=M.envMapRotation;_&&(g.envMap.value=_,Ri.copy(v),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(Ri)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ft&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vg(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){let v=_.program;n.uniformBlockBinding(M,v)}function l(M,_){let v=i[M.id];v===void 0&&(x(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",g));let D=_.program;n.updateUBOMapping(M,D);let C=e.render.frame;r[M.id]!==C&&(f(M),r[M.id]=C)}function h(M){let _=d();M.__bindingPointIndex=_;let v=s.createBuffer(),D=M.__size,C=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,D,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=i[M.id],v=M.uniforms,D=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let C=0,I=v.length;C<I;C++){let z=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,u=z.length;E<u;E++){let b=z[E];if(p(b,C,E,D)===!0){let w=b.__offset,A=Array.isArray(b.value)?b.value:[b.value],U=0;for(let N=0;N<A.length;N++){let k=A[N],W=y(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,w+U,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,U),U+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,w,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,_,v,D){let C=M.value,I=_+"_"+v;if(D[I]===void 0)return typeof C=="number"||typeof C=="boolean"?D[I]=C:D[I]=C.clone(),!0;{let z=D[I];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return D[I]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function x(M){let _=M.uniforms,v=0,D=16;for(let I=0,z=_.length;I<z;I++){let E=Array.isArray(_[I])?_[I]:[_[I]];for(let u=0,b=E.length;u<b;u++){let w=E[u],A=Array.isArray(w.value)?w.value:[w.value];for(let U=0,N=A.length;U<N;U++){let k=A[U],W=y(k),V=v%D,ee=V%W.boundary,K=V+ee;v+=ee,K!==0&&D-K<W.storage&&(v+=D-K),w.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=v,v+=W.storage}}}let C=v%D;return C>0&&(v+=D-C),M.__size=v,M.__cache={},this}function y(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}var fa=class{constructor(e={}){let{canvas:t=Xd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,M=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ci,this.toneMappingExposure=1;let v=this,D=!1,C=0,I=0,z=null,E=-1,u=null,b=new Mt,w=new Mt,A=null,U=new me(0),N=0,k=t.width,W=t.height,V=1,ee=null,K=null,pe=new Mt(0,0,k,W),Ee=new Mt(0,0,k,W),je=!1,Z=new or,se=!1,_e=!1,fe=new Ke,ke=new Ke,He=new B,qe=new Mt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function xt(){return z===null?V:1}let O=n;function Ut(T,L){return t.getContext(T,L)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wc}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),O===null){let L="webgl2";if(O=Ut(L,T),O===null)throw Ut(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Te,Ue,Ie,nt,Ae,P,S,G,Q,te,$,Me,le,xe,Pe,ne,ye,ze,Fe,ve,Ze,Oe,at,F;function de(){Te=new s0(O),Te.init(),Oe=new kg(O,Te),Ue=new jm(O,Te,e,Oe),Ie=new Dg(O,Te),Ue.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),nt=new o0(O),Ae=new _g,P=new Ng(O,Te,Ie,Ae,Ue,Oe,nt),S=new e0(v),G=new i0(v),Q=new pf(O),at=new Jm(O,Q),te=new r0(O,Q,nt,at),$=new l0(O,te,Q,nt),Fe=new c0(O,Ue,P),ne=new Qm(Ae),Me=new vg(v,S,G,Te,Ue,at,ne),le=new Hg(v,Ae),xe=new bg,Pe=new Rg(Te),ze=new Zm(v,S,G,Ie,$,p,c),ye=new Pg(v,$,Ue),F=new Vg(O,nt,Ue,Ie),ve=new Km(O,Te,nt),Ze=new a0(O,Te,nt),nt.programs=Me.programs,v.capabilities=Ue,v.extensions=Te,v.properties=Ae,v.renderLists=xe,v.shadowMap=ye,v.state=Ie,v.info=nt}de();let Y=new Cc(v,O);this.xr=Y,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(k,W,!1))},this.getSize=function(T){return T.set(k,W)},this.setSize=function(T,L,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,W=L,t.width=Math.floor(T*V),t.height=Math.floor(L*V),X===!0&&(t.style.width=T+"px",t.style.height=L+"px"),this.setViewport(0,0,T,L)},this.getDrawingBufferSize=function(T){return T.set(k*V,W*V).floor()},this.setDrawingBufferSize=function(T,L,X){k=T,W=L,V=X,t.width=Math.floor(T*X),t.height=Math.floor(L*X),this.setViewport(0,0,T,L)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(pe)},this.setViewport=function(T,L,X,q){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,L,X,q),Ie.viewport(b.copy(pe).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ee)},this.setScissor=function(T,L,X,q){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,L,X,q),Ie.scissor(w.copy(Ee).multiplyScalar(V).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(T){Ie.setScissorTest(je=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(T=!0,L=!0,X=!0){let q=0;if(T){let H=!1;if(z!==null){let re=z.texture.format;H=re===jc||re===Kc||re===Jc}if(H){let re=z.texture.type,ge=re===Wn||re===Ni||re===sr||re===bs||re===Yc||re===$c,be=ze.getClearColor(),we=ze.getClearAlpha(),Ve=be.r,Ge=be.g,Se=be.b;ge?(x[0]=Ve,x[1]=Ge,x[2]=Se,x[3]=we,O.clearBufferuiv(O.COLOR,0,x)):(y[0]=Ve,y[1]=Ge,y[2]=Se,y[3]=we,O.clearBufferiv(O.COLOR,0,y))}else q|=O.COLOR_BUFFER_BIT}L&&(q|=O.DEPTH_BUFFER_BIT),X&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),xe.dispose(),Pe.dispose(),Ae.dispose(),S.dispose(),G.dispose(),$.dispose(),at.dispose(),F.dispose(),Me.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",It),Y.removeEventListener("sessionend",Ki),bi.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let T=nt.autoReset,L=ye.enabled,X=ye.autoUpdate,q=ye.needsUpdate,H=ye.type;de(),nt.autoReset=T,ye.enabled=L,ye.autoUpdate=X,ye.needsUpdate=q,ye.type=H}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ne(T){let L=T.target;L.removeEventListener("dispose",Ne),ht(L)}function ht(T){wt(T),Ae.remove(T)}function wt(T){let L=Ae.get(T).programs;L!==void 0&&(L.forEach(function(X){Me.releaseProgram(X)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,L,X,q,H,re){L===null&&(L=rt);let ge=H.isMesh&&H.matrixWorld.determinant()<0,be=td(T,L,X,q,H);Ie.setMaterial(q,ge);let we=X.index,Ve=1;if(q.wireframe===!0){if(we=te.getWireframeAttribute(X),we===void 0)return;Ve=2}let Ge=X.drawRange,Se=X.attributes.position,tt=Ge.start*Ve,ut=(Ge.start+Ge.count)*Ve;re!==null&&(tt=Math.max(tt,re.start*Ve),ut=Math.min(ut,(re.start+re.count)*Ve)),we!==null?(tt=Math.max(tt,0),ut=Math.min(ut,we.count)):Se!=null&&(tt=Math.max(tt,0),ut=Math.min(ut,Se.count));let pt=ut-tt;if(pt<0||pt===1/0)return;at.setup(H,q,be,X,we);let $t,it=ve;if(we!==null&&($t=Q.get(we),it=Ze,it.setIndex($t)),H.isMesh)q.wireframe===!0?(Ie.setLineWidth(q.wireframeLinewidth*xt()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(H.isLine){let Re=q.linewidth;Re===void 0&&(Re=1),Ie.setLineWidth(Re*xt()),H.isLineSegments?it.setMode(O.LINES):H.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else H.isPoints?it.setMode(O.POINTS):H.isSprite&&it.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)it.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))it.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Re=H._multiDrawStarts,Un=H._multiDrawCounts,st=H._multiDrawCount,dn=we?Q.get(we).bytesPerElement:1,ji=Ae.get(q).currentProgram.getUniforms();for(let jt=0;jt<st;jt++)ji.setValue(O,"_gl_DrawID",jt),it.render(Re[jt]/dn,Un[jt])}else if(H.isInstancedMesh)it.renderInstances(tt,pt,H.count);else if(X.isInstancedBufferGeometry){let Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Un=Math.min(X.instanceCount,Re);it.renderInstances(tt,pt,Un)}else it.render(tt,pt)};function Qe(T,L,X){T.transparent===!0&&T.side===vt&&T.forceSinglePass===!1?(T.side=Ft,T.needsUpdate=!0,Sr(T,L,X),T.side=li,T.needsUpdate=!0,Sr(T,L,X),T.side=vt):Sr(T,L,X)}this.compile=function(T,L,X=null){X===null&&(X=T),m=Pe.get(X),m.init(L),_.push(m),X.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==X&&T.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let q=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let re=H.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){let be=re[ge];Qe(be,X,H),q.add(be)}else Qe(re,X,H),q.add(re)}),_.pop(),m=null,q},this.compileAsync=function(T,L,X=null){let q=this.compile(T,L,X);return new Promise(H=>{function re(){if(q.forEach(function(ge){Ae.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){H(T);return}setTimeout(re,10)}Te.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ht=null;function Kt(T){Ht&&Ht(T)}function It(){bi.stop()}function Ki(){bi.start()}let bi=new Jh;bi.setAnimationLoop(Kt),typeof self!="undefined"&&bi.setContext(self),this.setAnimationLoop=function(T){Ht=T,Y.setAnimationLoop(T),T===null?bi.stop():bi.start()},Y.addEventListener("sessionstart",It),Y.addEventListener("sessionend",Ki),this.render=function(T,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(L),L=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,L,z),m=Pe.get(T,_.length),m.init(L),_.push(m),ke.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Z.setFromProjectionMatrix(ke),_e=this.localClippingEnabled,se=ne.init(this.clippingPlanes,_e),g=xe.get(T,M.length),g.init(),M.push(g),Y.enabled===!0&&Y.isPresenting===!0){let re=v.xr.getDepthSensingMesh();re!==null&&Ya(re,L,-1/0,v.sortObjects)}Ya(T,L,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ee,K),$e=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,$e&&ze.addToRenderList(g,T),this.info.render.frame++,se===!0&&ne.beginShadows();let X=m.state.shadowsArray;ye.render(X,T,L),se===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,H=g.transmissive;if(m.setupLights(),L.isArrayCamera){let re=L.cameras;if(H.length>0)for(let ge=0,be=re.length;ge<be;ge++){let we=re[ge];bl(q,H,T,we)}$e&&ze.render(T);for(let ge=0,be=re.length;ge<be;ge++){let we=re[ge];Ml(g,T,we,we.viewport)}}else H.length>0&&bl(q,H,T,L),$e&&ze.render(T),Ml(g,T,L);z!==null&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),T.isScene===!0&&T.onAfterRender(v,T,L),at.resetDefaultState(),E=-1,u=null,_.pop(),_.length>0?(m=_[_.length-1],se===!0&&ne.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Ya(T,L,X,q){if(T.visible===!1)return;if(T.layers.test(L.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(L);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){q&&qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ke);let ge=$.update(T),be=T.material;be.visible&&g.push(T,ge,be,X,qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){let ge=$.update(T),be=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qe.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),qe.copy(ge.boundingSphere.center)),qe.applyMatrix4(T.matrixWorld).applyMatrix4(ke)),Array.isArray(be)){let we=ge.groups;for(let Ve=0,Ge=we.length;Ve<Ge;Ve++){let Se=we[Ve],tt=be[Se.materialIndex];tt&&tt.visible&&g.push(T,ge,tt,X,qe.z,Se)}}else be.visible&&g.push(T,ge,be,X,qe.z,null)}}let re=T.children;for(let ge=0,be=re.length;ge<be;ge++)Ya(re[ge],L,X,q)}function Ml(T,L,X,q){let H=T.opaque,re=T.transmissive,ge=T.transparent;m.setupLightsView(X),se===!0&&ne.setGlobalState(v.clippingPlanes,X),q&&Ie.viewport(b.copy(q)),H.length>0&&wr(H,L,X),re.length>0&&wr(re,L,X),ge.length>0&&wr(ge,L,X),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function bl(T,L,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Xn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?fr:Wn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let re=m.state.transmissionRenderTarget[q.id],ge=q.viewport||b;re.setSize(ge.z,ge.w);let be=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(U),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),$e&&ze.render(X);let we=v.toneMapping;v.toneMapping=ci;let Ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),se===!0&&ne.setGlobalState(v.clippingPlanes,q),wr(T,X,q),P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Se=0,tt=L.length;Se<tt;Se++){let ut=L[Se],pt=ut.object,$t=ut.geometry,it=ut.material,Re=ut.group;if(it.side===vt&&pt.layers.test(q.layers)){let Un=it.side;it.side=Ft,it.needsUpdate=!0,wl(pt,X,q,$t,it,Re),it.side=Un,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re))}v.setRenderTarget(be),v.setClearColor(U,N),Ve!==void 0&&(q.viewport=Ve),v.toneMapping=we}function wr(T,L,X){let q=L.isScene===!0?L.overrideMaterial:null;for(let H=0,re=T.length;H<re;H++){let ge=T[H],be=ge.object,we=ge.geometry,Ve=q===null?ge.material:q,Ge=ge.group;be.layers.test(X.layers)&&wl(be,L,X,we,Ve,Ge)}}function wl(T,L,X,q,H,re){T.onBeforeRender(v,L,X,q,H,re),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(v,L,X,q,T,re),H.transparent===!0&&H.side===vt&&H.forceSinglePass===!1?(H.side=Ft,H.needsUpdate=!0,v.renderBufferDirect(X,L,q,H,T,re),H.side=li,H.needsUpdate=!0,v.renderBufferDirect(X,L,q,H,T,re),H.side=vt):v.renderBufferDirect(X,L,q,H,T,re),T.onAfterRender(v,L,X,q,H,re)}function Sr(T,L,X){L.isScene!==!0&&(L=rt);let q=Ae.get(T),H=m.state.lights,re=m.state.shadowsArray,ge=H.state.version,be=Me.getParameters(T,H.state,re,L,X),we=Me.getProgramCacheKey(be),Ve=q.programs;q.environment=T.isMeshStandardMaterial?L.environment:null,q.fog=L.fog,q.envMap=(T.isMeshStandardMaterial?G:S).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?L.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",Ne),Ve=new Map,q.programs=Ve);let Ge=Ve.get(we);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===ge)return El(T,be),Ge}else be.uniforms=Me.getUniforms(T),T.onBeforeCompile(be,v),Ge=Me.acquireProgram(be,we),Ve.set(we,Ge),q.uniforms=be.uniforms;let Se=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=ne.uniform),El(T,be),q.needsLights=id(T),q.lightsStateVersion=ge,q.needsLights&&(Se.ambientLightColor.value=H.state.ambient,Se.lightProbe.value=H.state.probe,Se.directionalLights.value=H.state.directional,Se.directionalLightShadows.value=H.state.directionalShadow,Se.spotLights.value=H.state.spot,Se.spotLightShadows.value=H.state.spotShadow,Se.rectAreaLights.value=H.state.rectArea,Se.ltc_1.value=H.state.rectAreaLTC1,Se.ltc_2.value=H.state.rectAreaLTC2,Se.pointLights.value=H.state.point,Se.pointLightShadows.value=H.state.pointShadow,Se.hemisphereLights.value=H.state.hemi,Se.directionalShadowMap.value=H.state.directionalShadowMap,Se.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Se.spotShadowMap.value=H.state.spotShadowMap,Se.spotLightMatrix.value=H.state.spotLightMatrix,Se.spotLightMap.value=H.state.spotLightMap,Se.pointShadowMap.value=H.state.pointShadowMap,Se.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function Sl(T){if(T.uniformsList===null){let L=T.currentProgram.getUniforms();T.uniformsList=ys.seqWithValue(L.seq,T.uniforms)}return T.uniformsList}function El(T,L){let X=Ae.get(T);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function td(T,L,X,q,H){L.isScene!==!0&&(L=rt),P.resetTextureUnits();let re=L.fog,ge=q.isMeshStandardMaterial?L.environment:null,be=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:As,we=(q.isMeshStandardMaterial?G:S).get(q.envMap||ge),Ve=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Se=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color,pt=ci;q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(pt=v.toneMapping);let $t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=$t!==void 0?$t.length:0,Re=Ae.get(q),Un=m.state.lights;if(se===!0&&(_e===!0||T!==u)){let cn=T===u&&q.id===E;ne.setState(q,T,cn)}let st=!1;q.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Un.state.version||Re.outputColorSpace!==be||H.isBatchedMesh&&Re.batching===!1||!H.isBatchedMesh&&Re.batching===!0||H.isBatchedMesh&&Re.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Re.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Re.instancing===!1||!H.isInstancedMesh&&Re.instancing===!0||H.isSkinnedMesh&&Re.skinning===!1||!H.isSkinnedMesh&&Re.skinning===!0||H.isInstancedMesh&&Re.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Re.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Re.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Re.instancingMorph===!1&&H.morphTexture!==null||Re.envMap!==we||q.fog===!0&&Re.fog!==re||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ne.numPlanes||Re.numIntersection!==ne.numIntersection)||Re.vertexAlphas!==Ve||Re.vertexTangents!==Ge||Re.morphTargets!==Se||Re.morphNormals!==tt||Re.morphColors!==ut||Re.toneMapping!==pt||Re.morphTargetsCount!==it)&&(st=!0):(st=!0,Re.__version=q.version);let dn=Re.currentProgram;st===!0&&(dn=Sr(q,L,H));let ji=!1,jt=!1,Xs=!1,mt=dn.getUniforms(),wn=Re.uniforms;if(Ie.useProgram(dn.program)&&(ji=!0,jt=!0,Xs=!0),q.id!==E&&(E=q.id,jt=!0),ji||u!==T){Ie.buffers.depth.getReversed()?(fe.copy(T.projectionMatrix),Yd(fe),$d(fe),mt.setValue(O,"projectionMatrix",fe)):mt.setValue(O,"projectionMatrix",T.projectionMatrix),mt.setValue(O,"viewMatrix",T.matrixWorldInverse);let jn=mt.map.cameraPosition;jn!==void 0&&jn.setValue(O,He.setFromMatrixPosition(T.matrixWorld)),Ue.logarithmicDepthBuffer&&mt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),u!==T&&(u=T,jt=!0,Xs=!0)}if(H.isSkinnedMesh){mt.setOptional(O,H,"bindMatrix"),mt.setOptional(O,H,"bindMatrixInverse");let cn=H.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),mt.setValue(O,"boneTexture",cn.boneTexture,P))}H.isBatchedMesh&&(mt.setOptional(O,H,"batchingTexture"),mt.setValue(O,"batchingTexture",H._matricesTexture,P),mt.setOptional(O,H,"batchingIdTexture"),mt.setValue(O,"batchingIdTexture",H._indirectTexture,P),mt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&mt.setValue(O,"batchingColorTexture",H._colorsTexture,P));let qs=X.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Fe.update(H,X,dn),(jt||Re.receiveShadow!==H.receiveShadow)&&(Re.receiveShadow=H.receiveShadow,mt.setValue(O,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(wn.envMap.value=we,wn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&L.environment!==null&&(wn.envMapIntensity.value=L.environmentIntensity),jt&&(mt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&nd(wn,Xs),re&&q.fog===!0&&le.refreshFogUniforms(wn,re),le.refreshMaterialUniforms(wn,q,V,W,m.state.transmissionRenderTarget[T.id]),ys.upload(O,Sl(Re),wn,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ys.upload(O,Sl(Re),wn,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(O,"center",H.center),mt.setValue(O,"modelViewMatrix",H.modelViewMatrix),mt.setValue(O,"normalMatrix",H.normalMatrix),mt.setValue(O,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let cn=q.uniformsGroups;for(let jn=0,Qn=cn.length;jn<Qn;jn++){let Tl=cn[jn];F.update(Tl,dn),F.bind(Tl,dn)}}return dn}function nd(T,L){T.ambientLightColor.needsUpdate=L,T.lightProbe.needsUpdate=L,T.directionalLights.needsUpdate=L,T.directionalLightShadows.needsUpdate=L,T.pointLights.needsUpdate=L,T.pointLightShadows.needsUpdate=L,T.spotLights.needsUpdate=L,T.spotLightShadows.needsUpdate=L,T.rectAreaLights.needsUpdate=L,T.hemisphereLights.needsUpdate=L}function id(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,L,X){Ae.get(T.texture).__webglTexture=L,Ae.get(T.depthTexture).__webglTexture=X;let q=Ae.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,L){let X=Ae.get(T);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(T,L=0,X=0){z=T,C=L,I=X;let q=!0,H=null,re=!1,ge=!1;if(T){let we=Ae.get(T);if(we.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(we.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(we.__hasExternalTextures)P.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Se=T.depthTexture;if(we.__boundDepthTexture!==Se){if(Se!==null&&Ae.has(Se)&&(T.width!==Se.image.width||T.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}let Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ge=!0);let Ge=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[L])?H=Ge[L][X]:H=Ge[L],re=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?H=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[X]:H=Ge,b.copy(T.viewport),w.copy(T.scissor),A=T.scissorTest}else b.copy(pe).multiplyScalar(V).floor(),w.copy(Ee).multiplyScalar(V).floor(),A=je;if(Ie.bindFramebuffer(O.FRAMEBUFFER,H)&&q&&Ie.drawBuffers(T,H),Ie.viewport(b),Ie.scissor(w),Ie.setScissorTest(A),re){let we=Ae.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,we.__webglTexture,X)}else if(ge){let we=Ae.get(T.texture),Ve=L||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.__webglTexture,X||0,Ve)}E=-1},this.readRenderTargetPixels=function(T,L,X,q,H,re,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){Ie.bindFramebuffer(O.FRAMEBUFFER,be);try{let we=T.texture,Ve=we.format,Ge=we.type;if(!Ue.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=T.width-q&&X>=0&&X<=T.height-H&&O.readPixels(L,X,q,H,Oe.convert(Ve),Oe.convert(Ge),re)}finally{let we=z!==null?Ae.get(z).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,L,X,q,H,re,ge){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){let we=T.texture,Ve=we.format,Ge=we.type;if(!Ue.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=T.width-q&&X>=0&&X<=T.height-H){Ie.bindFramebuffer(O.FRAMEBUFFER,be);let Se=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Se),O.bufferData(O.PIXEL_PACK_BUFFER,re.byteLength,O.STREAM_READ),O.readPixels(L,X,q,H,Oe.convert(Ve),Oe.convert(Ge),0);let tt=z!==null?Ae.get(z).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,tt);let ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await qd(O,ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Se),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,re),O.deleteBuffer(Se),O.deleteSync(ut),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,L=null,X=0){T.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,T=arguments[1]);let q=Math.pow(2,-X),H=Math.floor(T.image.width*q),re=Math.floor(T.image.height*q),ge=L!==null?L.x:0,be=L!==null?L.y:0;P.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,ge,be,H,re),Ie.unbindTexture()},this.copyTextureToTexture=function(T,L,X=null,q=null,H=0){T.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],L=arguments[2],H=arguments[3]||0,X=null);let re,ge,be,we,Ve,Ge,Se,tt,ut,pt=T.isCompressedTexture?T.mipmaps[H]:T.image;X!==null?(re=X.max.x-X.min.x,ge=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,Ve=X.min.y,Ge=X.isBox3?X.min.z:0):(re=pt.width,ge=pt.height,be=pt.depth||1,we=0,Ve=0,Ge=0),q!==null?(Se=q.x,tt=q.y,ut=q.z):(Se=0,tt=0,ut=0);let $t=Oe.convert(L.format),it=Oe.convert(L.type),Re;L.isData3DTexture?(P.setTexture3D(L,0),Re=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(P.setTexture2DArray(L,0),Re=O.TEXTURE_2D_ARRAY):(P.setTexture2D(L,0),Re=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);let Un=O.getParameter(O.UNPACK_ROW_LENGTH),st=O.getParameter(O.UNPACK_IMAGE_HEIGHT),dn=O.getParameter(O.UNPACK_SKIP_PIXELS),ji=O.getParameter(O.UNPACK_SKIP_ROWS),jt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,we),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ve),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ge);let Xs=T.isDataArrayTexture||T.isData3DTexture,mt=L.isDataArrayTexture||L.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let wn=Ae.get(T),qs=Ae.get(L),cn=Ae.get(wn.__renderTarget),jn=Ae.get(qs.__renderTarget);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Qn=0;Qn<be;Qn++)Xs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.get(T).__webglTexture,H,Ge+Qn),T.isDepthTexture?(mt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.get(L).__webglTexture,H,ut+Qn),O.blitFramebuffer(we,Ve,re,ge,Se,tt,re,ge,O.DEPTH_BUFFER_BIT,O.NEAREST)):mt?O.copyTexSubImage3D(Re,H,Se,tt,ut+Qn,we,Ve,re,ge):O.copyTexSubImage2D(Re,H,Se,tt,ut+Qn,we,Ve,re,ge);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else mt?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Re,H,Se,tt,ut,re,ge,be,$t,it,pt.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(Re,H,Se,tt,ut,re,ge,be,$t,pt.data):O.texSubImage3D(Re,H,Se,tt,ut,re,ge,be,$t,it,pt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,Se,tt,re,ge,$t,it,pt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,Se,tt,pt.width,pt.height,$t,pt.data):O.texSubImage2D(O.TEXTURE_2D,H,Se,tt,re,ge,$t,it,pt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Un),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st),O.pixelStorei(O.UNPACK_SKIP_PIXELS,dn),O.pixelStorei(O.UNPACK_SKIP_ROWS,ji),O.pixelStorei(O.UNPACK_SKIP_IMAGES,jt),H===0&&L.generateMipmaps&&O.generateMipmap(Re),Ie.unbindTexture()},this.copyTextureToTexture3D=function(T,L,X=null,q=null,H=0){return T.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,T=arguments[2],L=arguments[3],H=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,L,X,q,H)},this.initRenderTarget=function(T){Ae.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Ie.unbindTexture()},this.resetState=function(){C=0,I=0,z=null,Ie.reset(),at.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}},pa=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ma=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zt,this.environmentIntensity=1,this.environmentRotation=new zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ic=class extends nn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=tn,h=tn,d,f){super(null,o,a,c,l,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cr=class extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fs=new Ke,Ah=new Ke,qr=[],Rh=new qn,Gg=new Ke,js=new De,Qs=new ui,ki=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),Rh.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(Rh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),Qs.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fs),Ah.multiplyMatrices(n,fs),js.matrixWorld=Ah,js.raycast(e,qr);for(let o=0,a=qr.length;o<a;o++){let c=qr[o];c.instanceId=r,c.object=this,t.push(c)}qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ic(new Float32Array(i*this.count),i,this.count,Zc,Tn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Fi=class extends Yn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ga=new B,xa=new B,Ch=new Ke,er=new rr,Yr=new ui,Eo=new B,Ih=new B,lr=class extends Ot{constructor(e=new lt,t=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ga.fromBufferAttribute(t,i-1),xa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ga.distanceTo(xa);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;Ch.copy(i).invert(),er.copy(e.ray).applyMatrix4(Ch);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let y=p,g=x-1;y<g;y+=l){let m=h.getX(y),M=h.getX(y+1),_=$r(this,e,er,c,m,M);_&&t.push(_)}if(this.isLineLoop){let y=h.getX(x-1),g=h.getX(p),m=$r(this,e,er,c,y,g);m&&t.push(m)}}else{let p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let y=p,g=x-1;y<g;y+=l){let m=$r(this,e,er,c,y,y+1);m&&t.push(m)}if(this.isLineLoop){let y=$r(this,e,er,c,x-1,p);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $r(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(ga.fromBufferAttribute(o,i),xa.fromBufferAttribute(o,r),t.distanceSqToSegment(ga,xa,Eo,Ih)>n)return;Eo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Eo);if(!(c<e.near||c>e.far))return{distance:c,point:Ih.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var hr=class extends lr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var ya=class s extends lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new B,h=new Ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=n+d/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Oi=class s extends lt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],p=[],x=0,y=[],g=n/2,m=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function M(){let v=new B,D=new B,C=0,I=(t-e)/n;for(let z=0;z<=r;z++){let E=[],u=z/r,b=u*(t-e)+e;for(let w=0;w<=i;w++){let A=w/i,U=A*c+a,N=Math.sin(U),k=Math.cos(U);D.x=b*N,D.y=-u*n+g,D.z=b*k,d.push(D.x,D.y,D.z),v.set(N,I,k).normalize(),f.push(v.x,v.y,v.z),p.push(A,1-u),E.push(x++)}y.push(E)}for(let z=0;z<i;z++)for(let E=0;E<r;E++){let u=y[E][z],b=y[E+1][z],w=y[E+1][z+1],A=y[E][z+1];(e>0||E!==0)&&(h.push(u,b,A),C+=3),(t>0||E!==r-1)&&(h.push(b,w,A),C+=3)}l.addGroup(m,C,0),m+=C}function _(v){let D=x,C=new Ye,I=new B,z=0,E=v===!0?e:t,u=v===!0?1:-1;for(let w=1;w<=i;w++)d.push(0,g*u,0),f.push(0,u,0),p.push(.5,.5),x++;let b=x;for(let w=0;w<=i;w++){let U=w/i*c+a,N=Math.cos(U),k=Math.sin(U);I.x=E*k,I.y=g*u,I.z=E*N,d.push(I.x,I.y,I.z),f.push(0,u,0),C.x=N*.5+.5,C.y=k*.5*u+.5,p.push(C.x,C.y),x++}for(let w=0;w<i;w++){let A=D+w,U=b+w;v===!0?h.push(U,U+1,A):h.push(U+1,U,A),z+=3}l.addGroup(m,z,v===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bi=class s extends Oi{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ur=class s extends lt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new B,v=new B,D=new B;for(let C=0;C<t.length;C+=3)p(t[C+0],_),p(t[C+1],v),p(t[C+2],D),c(_,v,D,M)}function c(M,_,v,D){let C=D+1,I=[];for(let z=0;z<=C;z++){I[z]=[];let E=M.clone().lerp(v,z/C),u=_.clone().lerp(v,z/C),b=C-z;for(let w=0;w<=b;w++)w===0&&z===C?I[z][w]=E:I[z][w]=E.clone().lerp(u,w/b)}for(let z=0;z<C;z++)for(let E=0;E<2*(C-z)-1;E++){let u=Math.floor(E/2);E%2===0?(f(I[z][u+1]),f(I[z+1][u]),f(I[z][u])):(f(I[z][u+1]),f(I[z+1][u+1]),f(I[z+1][u]))}}function l(M){let _=new B;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(M),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let M=new B;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let v=g(M)/2/Math.PI+.5,D=m(M)/Math.PI+.5;o.push(v,1-D)}x(),d()}function d(){for(let M=0;M<o.length;M+=6){let _=o[M+0],v=o[M+2],D=o[M+4],C=Math.max(_,v,D),I=Math.min(_,v,D);C>.9&&I<.1&&(_<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),D<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,_){let v=M*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function x(){let M=new B,_=new B,v=new B,D=new B,C=new Ye,I=new Ye,z=new Ye;for(let E=0,u=0;E<r.length;E+=9,u+=6){M.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),C.set(o[u+0],o[u+1]),I.set(o[u+2],o[u+3]),z.set(o[u+4],o[u+5]),D.copy(M).add(_).add(v).divideScalar(3);let b=g(D);y(C,u+0,M,b),y(I,u+2,_,b),y(z,u+4,v,b)}}function y(M,_,v,D){D<0&&M.x===1&&(o[_]=M.x-1),v.x===0&&v.z===0&&(o[_]=D/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},va=class s extends ur{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var di=class s extends ur{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var $n=class s extends lt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],d=e,f=(t-e)/i,p=new B,x=new Ye;for(let y=0;y<=i;y++){for(let g=0;g<=n;g++){let m=r+g/n*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,h.push(x.x,x.y)}d+=f}for(let y=0;y<i;y++){let g=y*(n+1);for(let m=0;m<n;m++){let M=m+g,_=M,v=M+n+1,D=M+n+2,C=M+1;a.push(_,v,C),a.push(v,D,C)}}this.setIndex(a),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var fi=class s extends lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new B,f=new B,p=[],x=[],y=[],g=[];for(let m=0;m<=n;m++){let M=[],_=m/n,v=0;m===0&&o===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let D=0;D<=t;D++){let C=D/t;d.x=-e*Math.cos(i+C*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(i+C*r)*Math.sin(o+_*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),g.push(C+v,1-_),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let _=h[m][M+1],v=h[m][M],D=h[m+1][M],C=h[m+1][M+1];(m!==0||o>0)&&p.push(_,v,C),(m!==n-1||c<Math.PI)&&p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new Je(x,3)),this.setAttribute("normal",new Je(y,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},_a=class s extends ur{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Es=class s extends lt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new B,d=new B,f=new B;for(let p=0;p<=n;p++)for(let x=0;x<=i;x++){let y=x/i*r,g=p/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(x/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=i;x++){let y=(i+1)*p+x-1,g=(i+1)*(p-1)+x-1,m=(i+1)*(p-1)+x,M=(i+1)*p+x;o.push(y,g,M),o.push(g,m,M)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ma=class extends Yn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ct=class extends Yn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Zr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Wg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ts=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pc=class extends Ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zl:r=e,a=2*t-n;break;case Dl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zl:o=e,c=2*n-t;break;case Dl:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(i-t),y=x*x,g=y*x,m=-f*g+2*f*y-f*x,M=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*x+1,_=(-1-p)*g+(1.5+p)*y+.5*x,v=p*g-p*y;for(let D=0;D!==a;++D)r[D]=m*o[h+D]+M*o[l+D]+_*o[c+D]+v*o[d+D];return r}},zc=class extends Ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*h;return r}},Dc=class extends Ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zr(t,this.TimeBufferType),this.values=Zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zr(e.times,Array),values:Zr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case dc:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Wg(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Za,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let d=a*n,f=d-n,p=d+n;for(let x=0;x!==n;++x){let y=t[d+x];if(y!==t[f+x]||y!==t[p+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=dc;var Li=class extends xn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ta;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends xn{};Uc.prototype.ValueTypeName="color";var Nc=class extends xn{};Nc.prototype.ValueTypeName="number";var kc=class extends Ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Wt.slerpFlat(r,0,o,l-a,o,l,c);return r}},ba=class extends xn{InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends xn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=ta;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends xn{};Fc.prototype.ValueTypeName="vector";var Oc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],x=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},Xg=new Oc,Bc=class{constructor(e){this.manager=e!==void 0?e:Xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},wa=class extends dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},To=new Ke,Ph=new B,zh=new B,Lc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zh),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Hc=class extends Lc{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sa=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Hc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ea=class extends dr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var tl="\\[\\]\\.:\\/",qg=new RegExp("["+tl+"]","g"),nl="[^"+tl+"]",Yg="[^"+tl.replace("\\.","")+"]",$g=/((?:WC+[\/:])*)/.source.replace("WC",nl),Zg=/(WCOD+)?/.source.replace("WCOD",Yg),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nl),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nl),jg=new RegExp("^"+$g+Zg+Jg+Kg+"$"),Qg=["material","materials","bones","map"],Vc=class{constructor(e,t,n){let i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qg,"")}static parseTrackName(e){let t=jg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Vc;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fx=new Float32Array(1);var Dh=new Ke,Ta=class{constructor(e,t,n=0,i=1/0){this.ray=new rr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(e,t=!0,n=[]){return Gc(e,this,n,t),n.sort(Uh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Gc(e[i],this,n,t);return n.sort(Uh),n}};function Uh(s,e){return s.distance-e.distance}function Gc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Gc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);var yn={legion:{id:"legion",value:1,size:32,cols:8,spacing:1.25,hp:10,atk:3.2,def:3,speed:2.7,range:0,perks:[{icon:"\u{1F5E1}",name:"Pilum-Salve",desc:"Wirft kurz vor dem Zusammenprall Speere: Sofortschaden und Moralschock (alle 30 s)."},{icon:"\u{1F6E1}",name:"Disziplin",desc:"Verliert 20 % weniger Moral. In Block-Formation: Pfeilschaden halbiert (Schildkr\xF6te)."}],names:["Legion\xE4re","Pl\xFCnderer"],desc:["Schwert & Scutum. Der verl\xE4ssliche Kern jeder Armee.","Axt & Rundschild. Wild und z\xE4h."],stats:{Angriff:3,Abwehr:3,Tempo:3,"Reichw.":1}},pike:{id:"pike",value:.9,size:36,cols:9,spacing:1.2,hp:10,atk:2.6,def:2.8,speed:2.25,range:0,vsCav:2.6,perks:[{icon:"\u{1F531}",name:"Speerwall",desc:"Steht die Legion still, zerschellen Reiterangriffe an ihr. \xD72,6 Schaden gegen Reiter."},{icon:"\u{1F4CF}",name:"Lange Piken",desc:"Drei Reihen k\xE4mpfen gleichzeitig (+50 % Frontbreite)."},{icon:"\u26A0",name:"Schwerf\xE4llig",desc:"Nimmt +25 % Schaden, wenn in Flanke oder R\xFCcken angegriffen."}],names:["Pikeniere","Speerm\xE4nner"],desc:["Lange Piken. Brechen jeden Reiterangriff.","Speerwall gegen Reiter."],stats:{Angriff:2,Abwehr:3,Tempo:2,"Reichw.":2}},archer:{id:"archer",value:.75,size:24,cols:8,spacing:1.35,hp:8,atk:1.4,def:1.2,speed:2.8,range:36,volley:2.9,arrowDmg:3.6,perks:[{icon:"\u{1F525}",name:"Brandpfeile",desc:"Salven ersch\xFCttern die Moral des Ziels zus\xE4tzlich."},{icon:"\u26F0",name:"Hochstand",desc:"Von erh\xF6hter Position +20 % Reichweite und Treffer."},{icon:"\u{1F4A8}",name:"Pl\xE4nkler",desc:"Weicht anr\xFCckender Infanterie aus; schwach im Nahkampf."}],names:["Bogensch\xFCtzen","J\xE4ger"],desc:["Pfeilhagel auf gro\xDFe Distanz. Schwach im Nahkampf.","T\xF6dliche Sch\xFCtzen aus dem Hinterhalt."],stats:{Angriff:3,Abwehr:1,Tempo:3,"Reichw.":5}},cavalry:{id:"cavalry",value:1.25,size:20,cols:5,spacing:1.9,hp:16,atk:3.5,def:2.4,speed:5.4,range:0,charge:2.3,perks:[{icon:"\u{1F40E}",name:"Sturmangriff",desc:"Mit Anlauf: wuchtiger Aufprall, gro\xDFer Moralschock \u2013 im R\xFCcken verheerend."},{icon:"\u21A9",name:"Hit & Run",desc:"L\xF6st sich nach einigen Sekunden Nahkampf und greift erneut mit Anlauf an."},{icon:"\u{1F3AF}",name:"Verfolger",desc:"+50 % Schaden gegen fliehende Einheiten und Sch\xFCtzen."}],names:["Reiterei","Wolfsreiter"],desc:["Schnell und wuchtig. Sturmangriff in Flanke und R\xFCcken.","Schnelle Reiter f\xFCr \xDCberf\xE4lle."],stats:{Angriff:4,Abwehr:2,Tempo:5,"Reichw.":1}},guard:{id:"guard",value:1.3,size:24,cols:6,spacing:1.3,hp:14,atk:3.3,def:5,speed:2.1,range:0,arrowResist:.45,perks:[{icon:"\u{1F985}",name:"Standarte",desc:"Verb\xFCndete im Umkreis erholen Moral schneller und verlieren 15 % weniger."},{icon:"\u{1F5FF}",name:"Unersch\xFCtterlich",desc:"Halbe Moralverluste; flieht erst unter 30 % St\xE4rke."},{icon:"\u{1F9F1}",name:"Turmschilde",desc:"Nur 45 % Schaden durch Pfeile."}],names:["Pr\xE4torianer","Eisenwache"],desc:["Elite mit Turmschilden. H\xE4lt jede Stellung, trotzt Pfeilen.","Schwer gepanzerte Elite."],stats:{Angriff:4,Abwehr:5,Tempo:1,"Reichw.":1}}},tu=["legion","pike","archer","cavalry","guard"],gr=[[14922817,12857387,15921902,4173418,10115792],[15261900,13662762,2829104,8034874,8370392]],Zn=[{id:0,name:"L\xF6wenlegion",short:"Du",ui:"#4a8cf0",uiDark:"#1f4c9a",colors:{primary:3105732,secondary:14922817,metal:13225686,helm:14264634,crest:12857387,skin:14856588,dark:4863268,wood:9067058,cloth:15722194,horse:8014634,mane:2759698,banner:3105732,hood:4155973,silver:15265010,leather:6965802,fur:5916210,furL:9075306,hairB:4861984,hairR:10111520,hairG:13150304,tunic2:3105732,tunic3:3105732,horse2:8014634}},{id:1,name:"Rabenclan",short:"Bot",ui:"#e0473c",uiDark:"#8e1f1a",colors:{primary:10691356,secondary:2829104,metal:7304060,helm:5593183,crest:15261900,skin:14197372,dark:2761504,wood:6110498,cloth:3816e3,horse:3879985,mane:1380882,banner:10691356,hood:2829104,silver:10133158,leather:4863012,fur:5916210,furL:9206890,hairB:3810840,hairR:10111520,hairG:13150304,tunic2:7218200,tunic3:4864554,horse2:6973024}}],Rn={summer:{name:"Sommer",sky:[9356784,15267071],fog:13625077,grass:[7319119,8239960,6266437,8962658],dirt:11569754,sand:14206092,rock:[9276038,10197138,8157557],cliff:[10127992,9075304],water:4034249,leaf:[4164154,5216832,5941322,3701300],pine:[3107642,2776885],trunk:7031342,flower:[15917388,15760040,16777215,11565808],sun:16773590,hemi:[14676223,6982218]},autumn:{name:"Herbst",sky:[15251850,16509136],fog:15718847,grass:[10133580,11118679,9146948,11839578],dirt:10648142,sand:13744260,rock:[9274750,10129801,8024940],cliff:[10256230,9072472],water:4884136,leaf:[14251818,14916146,12865578,15253834],pine:[4023104,3496504],trunk:6176552,flower:[15253834,14251818,16777215,12865578],sun:16769208,hemi:[16771280,8022586]},winter:{name:"Winter",sky:[12176864,15660282],fog:14674160,grass:[15660023,14936816,16251644,14279659],dirt:10195076,sand:13620956,rock:[9344670,10397358,8291982],cliff:[9081500,8028812],water:6131635,leaf:[14674416,13622760,15266037,12570845],pine:[3037770,2773060],trunk:5916214,flower:[16777215,14674416,13623534,16777215],sun:16054527,hemi:[15791871,9082530]},spring:{name:"Fr\xFChling",sky:[10473717,15923711],fog:14347767,grass:[7914071,9228134,6927692,10147954],dirt:11043930,sand:14470040,rock:[9407624,10328724,8289143],cliff:[10128508,9075820],water:4889302,leaf:[15902408,7323471,16239068,5942854],pine:[3108666,2777909],trunk:7031342,flower:[16777215,15902408,16179290,10124016],sun:16774882,hemi:[15135999,6986314]},highland:{name:"Hochland",sky:[9414333,14542316],fog:13226972,grass:[8230486,9085534,7112268,10132066],dirt:9073752,sand:12102280,rock:[8224904,9080470,7238008],cliff:[7369852,6448750,8027782],water:4157327,leaf:[5929530,6982210,9067146,4876850],pine:[3035704,2640434],trunk:5916214,flower:[10115752,11696832,15787760,14205024],sun:15790838,hemi:[15002352,6978138]},desert:{name:"W\xFCste",sky:[15780234,16773850],fog:16048834,grass:[14729344,14202483,15256204,13610604],dirt:12159573,sand:15520924,rock:[12093024,12883050,11040598],cliff:[12614220,11036222,13667932],water:4170680,leaf:[7313978,8366149,6261298,9087050],pine:[6261298,5208618],trunk:9071170,flower:[15245388,13658682,16777215,15255658],sun:16773328,hemi:[16773340,10517066]}},Cs={assault:{name:"Burg einnehmen",icon:"castle",desc:"Die feindliche Burg muss fallen. Brich das Tor und halte den Burghof.",goal:"Halte den Burghof 20 s lang oder vernichte den Feind. Zeitlimit 6:00.",time:360},defend:{name:"Burg verteidigen",icon:"shield",desc:"Der Rabenclan st\xFCrmt eure Mauern. Haltet bis zum Morgengrauen.",goal:"\xDCberlebe 5:00 oder vernichte die Angreifer. Der Burghof darf nicht fallen.",time:300},canyon:{name:"Canyon-Pass",icon:"canyon",desc:"Enge Schluchten, steile Felsen. Wer den Pass kontrolliert, gewinnt.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420},river:{name:"Flussfurt",icon:"river",desc:"Ein Fluss trennt die Heere. Br\xFCcke und Furten sind der Schl\xFCssel.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420},hill:{name:"K\xF6nigsh\xFCgel",icon:"hill",desc:"Der alte Steinkreis auf dem H\xFCgel. Wer ihn h\xE4lt, beherrscht das Land.",goal:"Halte den Steinkreis bis 100 Punkte \u2013 oder vernichte den Feind.",time:420},ambush:{name:"Hinterhalt",icon:"ambush",desc:"Dein Heer marschiert durchs Tal \u2013 da st\xFCrmt der Rabenclan von beiden H\xE4ngen herab.",goal:"Bring die H\xE4lfte deiner M\xE4nner zum Talausgang (Osten) oder vernichte den Feind. 5:00.",time:300},forest:{name:"Nebelwald",icon:"forest",desc:"Dichter Wald bietet Deckung vor Pfeilen \u2013 und Raum f\xFCr Hinterhalte.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420}},il=["assault","defend","canyon","river","hill","forest","ambush"],pi={day:{name:"Tag",range:1,sight:1,acc:1,desc:""},dawn:{name:"Morgengrauen",range:1,sight:.9,acc:1,desc:"Weiches Morgenlicht."},dusk:{name:"Abend",range:.95,sight:.9,acc:.95,desc:"Tiefe Sonne, lange Schatten."},night:{name:"Nacht",range:.7,sight:.7,acc:.85,desc:"Nacht: Reichweite der Sch\xFCtzen \u221230 %, Legionen erkennen Feinde sp\xE4ter."},fog:{name:"Nebel",range:.8,sight:.75,acc:.85,desc:"Nebel: Sch\xFCtzen sehen weniger weit, Flankenangriffe werden sp\xE4t bemerkt."}},nu=["day","dawn","dusk","night","fog"],Vi={easy:{name:"Leicht",size:.85,think:3.5,smart:.35},normal:{name:"Normal",size:1,think:2,smart:.7},hard:{name:"Schwer",size:1.15,think:1,smart:1}};function iu(s){return{move:"advance",waypoints:[],target:s==="cavalry"?"ranged":"nearest",targetId:-1,stance:"balanced",formation:s==="cavalry"?"wedge":"line",delay:s==="cavalry"?5:0,skirmish:s==="archer",retreatAt:.25,retreatTo:"camp",afterRetreat:"hold"}}var za=class{constructor(e,t){this.canvas=e,this.quality=t,this.renderer=new fa({canvas:e,antialias:t.aa,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.pixelRatio)),this.renderer.shadowMap.enabled=t.shadows,this.renderer.shadowMap.type=Xc,this.scene=new ma,this.camera=new Gt(42,1,1,900),this.cam={x:0,z:4,dist:118,yaw:0,pitch:.95,tx:0,tz:4,tdist:118,tyaw:0,tpitch:.95},this.bounds={x:78,z:52},this.raycaster=new Ta,this.resize(),window.addEventListener("resize",()=>this.resize())}setupEnvironment(e,t,n="day"){let i=Rn[e],r={day:null,dawn:{sky:[15905988,16639702],fog:15784144,sun:16766654,sunI:1.7,hemiI:1.15,amb:.22,pos:[95,45,-40]},dusk:{sky:[15237194,16764826],fog:15119498,sun:16754784,sunI:1.8,hemiI:.95,amb:.18,pos:[-115,38,30]},night:{sky:[461596,1713732],fog:1317940,sun:10466559,sunI:.75,hemiI:.5,amb:.14,pos:[60,90,-60],hemiC:[4872842,1317416]},fog:{sky:[11187390,13949406],fog:13160405,sun:15659766,sunI:1.1,hemiI:1.25,amb:.3,pos:[-60,110,50]}}[n],o=r?{...i,sky:r.sky,fog:r.fog,sun:r.sun,hemi:r.hemiC||i.hemi}:i,a=this.scene;if(this.lights)for(let g of this.lights)a.remove(g);this.sky&&a.remove(this.sky);let c=new wa(o.hemi[0],o.hemi[1],r?r.hemiI:1.35),l=new Sa(o.sun,r?r.sunI:2.1);if(r?l.position.set(...r.pos):l.position.set(-75,95,55),l.target.position.set(0,0,0),this.quality.shadows){l.castShadow=!0;let g=this.quality.shadowSize;l.shadow.mapSize.set(g,g);let m=l.shadow.camera;m.left=-95,m.right=95,m.top=70,m.bottom=-70,m.near=10,m.far=320,l.shadow.bias=-8e-4,l.shadow.normalBias=.4}let h=new Ea(16777215,r?r.amb:.25);a.add(c,l,l.target,h),this.lights=[c,l,l.target,h];let d=new fi(600,24,12),f=new me(o.sky[0]),p=new me(o.sky[1]),x=[],y=d.attributes.position;for(let g=0;g<y.count;g++){let m=y.getY(g)/600,M=p.clone().lerp(f,Math.max(0,Math.min(1,m*1.6+.1)));x.push(M.r,M.g,M.b)}d.setAttribute("color",new Je(x,3)),this.sky=new De(d,new ct({vertexColors:!0,side:Ft,fog:!1,depthWrite:!1})),a.add(this.sky),a.fog=new pa(o.fog,t),a.background=new me(o.fog)}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e/t<1.3?55:42,this.camera.updateProjectionMatrix()}updateCamera(e){let t=this.cam;if(this.vel){this.pan(this.vel.x*e,this.vel.y*e);let l=Math.exp(-e*4.5);this.vel.x*=l,this.vel.y*=l,Math.hypot(this.vel.x,this.vel.y)<15&&(this.vel=null)}let n=1-Math.exp(-e*9);t.tx=Math.max(-this.bounds.x,Math.min(this.bounds.x,t.tx)),t.tz=Math.max(-this.bounds.z,Math.min(this.bounds.z,t.tz)),t.tdist=Math.max(22,Math.min(150,t.tdist)),t.tpitch=Math.max(.42,Math.min(1.38,t.tpitch)),t.x+=(t.tx-t.x)*n,t.z+=(t.tz-t.z)*n,t.dist+=(t.tdist-t.dist)*n,t.yaw+=(t.tyaw-t.yaw)*n,t.pitch+=(t.tpitch-t.pitch)*n;let i=Math.cos(t.pitch),r=Math.sin(t.pitch),o=t.x+Math.sin(t.yaw)*i*t.dist,a=t.z+Math.cos(t.yaw)*i*t.dist,c=r*t.dist;this.groundFn&&(c=Math.max(c,this.groundFn(o,a)+4)),this.camera.position.set(o,c,a),this.camera.lookAt(t.x,0,t.z)}focus(e,t,n){this.cam.tx=e,this.cam.tz=t,n&&(this.cam.tdist=n)}pan(e,t){let n=this.cam,i=n.dist*1.1/window.innerHeight,r=Math.cos(n.yaw),o=Math.sin(n.yaw),a=r,c=-o,l=-o,h=-r;n.tx-=(a*e-l*t)*i,n.tz-=(c*e-h*t)*i}fling(e,t){let n=Math.hypot(e,t);if(n<120)return;let i=Math.min(1,2400/n);this.vel={x:e*i,y:t*i}}stopFling(){this.vel=null}zoom(e){this.cam.tdist*=e}rotate(e){this.cam.tyaw+=e}tilt(e){this.cam.tpitch+=e}pick(e,t,n){let i=new Ye(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);this.raycaster.setFromCamera(i,this.camera);let r=this.raycaster.intersectObjects(n,!1)[0];return r?r.point:null}project(e,t,n,i){let r=new B(e,t,n).project(this.camera);return i.x=(r.x*.5+.5)*window.innerWidth,i.y=(-r.y*.5+.5)*window.innerHeight,i.visible=r.z<1&&r.z>-1,i}render(){this.renderer.render(this.scene,this.camera)}},Da=class{constructor(e,t){this.scene=e,this.map=t,this.group=new dt,e.add(this.group),this.zoneMeshes=[],this.routeGroup=new dt,this.group.add(this.routeGroup),this.objMesh=null,this.makeZones(),this.makeObjective()}terrainPatch(e,t,n,i,r,o,a=.25){let c=Math.max(2,Math.ceil((n-e)/2)),l=Math.max(2,Math.ceil((i-t)/2)),h=new rn(n-e,i-t,c,l);h.rotateX(-Math.PI/2);let d=h.attributes.position;for(let p=0;p<d.count;p++){let x=d.getX(p)+(e+n)/2,y=d.getZ(p)+(t+i)/2;d.setXYZ(p,x,Math.max(this.map.getHeight(x,y),this.map.hasWater?this.map.waterLevel:-99)+a,y)}h.computeVertexNormals();let f=new De(h,new ct({color:r,transparent:!0,opacity:o,depthWrite:!1}));return f.renderOrder=2,f}makeZones(){let e=[this.map.zones[0],this.map.zones[1]];this.map.zoneExtra&&e.push(this.map.zoneExtra);for(let t=0;t<e.length;t++){let n=e[t],i=t===0?4885744:14698300,r=t===0?0:1,o=new dt;o.add(this.terrainPatch(n.x0,n.z0,n.x1,n.z1,i,.16));let a=[],c=(h,d)=>a.push(new B(h,this.map.getHeight(h,d)+.4,d));for(let h=n.x0;h<=n.x1;h+=1.5)c(h,n.z0);for(let h=n.z0;h<=n.z1;h+=1.5)c(n.x1,h);for(let h=n.x1;h>=n.x0;h-=1.5)c(h,n.z1);for(let h=n.z1;h>=n.z0;h-=1.5)c(n.x0,h);let l=new lt().setFromPoints(a);o.add(new lr(l,new Fi({color:i,transparent:!0,opacity:.9}))),this.group.add(o),this.zoneMeshes.push(o)}}showZones(e,t=-1){this.zoneMeshes.forEach((n,i)=>{n.visible=e&&(t<0||t===Math.min(i,1))})}makeObjective(){let e=this.map.objective;if(!e)return;let t=new $n(e.r-.6,e.r,48,1);t.rotateX(-Math.PI/2);let n=new ct({color:16769146,transparent:!0,opacity:.55,depthWrite:!1,side:vt}),i=new De(t,n);i.position.set(e.x,this.map.getHeight(e.x,e.z)+.35,e.z),i.renderOrder=2,this.group.add(i),this.objMesh=i;let r=this.terrainPatch(e.x-e.r,e.z-e.r,e.x+e.r,e.z+e.r,16769146,0,.2);this.group.add(r)}updateObjective(e){let t=this.map.objective;if(!this.objMesh)return;let n=16769146;t.present&&(t.present[0]>0&&t.present[1]===0?n=4885744:t.present[1]>0&&t.present[0]===0?n=14698300:t.present[0]>0&&t.present[1]>0&&(n=16777215)),this.objMesh.material.color.setHex(n),this.objMesh.material.opacity=.45+Math.sin(e*3)*.15,this.objMesh.rotation.y=e*.2}clearRoutes(){for(let e of[...this.routeGroup.children])this.routeGroup.remove(e),e.geometry&&e.geometry.dispose()}addRoute(e,t,n=!1,i=.7){if(e.length<2)return;let r=[];for(let I=0;I<e.length-1;I++){let[z,E]=e[I],[u,b]=e[I+1],w=Math.hypot(u-z,b-E),A=Math.max(1,Math.ceil(w/1.2));for(let U=0;U<A;U++)r.push([z+(u-z)*(U/A),E+(b-E)*(U/A)])}r.push(e[e.length-1]);let o=[],a=.35,c=(I,z)=>Math.max(this.map.getHeight(I,z),this.map.hasWater?this.map.waterLevel:-99)+a;for(let I=0;I<r.length-1;I++){if(n&&I%3===2)continue;let[z,E]=r[I],[u,b]=r[I+1],w=u-z,A=b-E,U=Math.hypot(w,A)||1,N=-A/U*i/2,k=w/U*i/2,W=c(z,E),V=c(u,b);o.push(z+N,W,E+k,u+N,V,b+k,z-N,W,E-k),o.push(u+N,V,b+k,u-N,V,b-k,z-N,W,E-k)}let l=r.length,[h,d]=r[l-1],[f,p]=r[Math.max(0,l-3)],x=h-f,y=d-p,g=Math.hypot(x,y)||1,m=x/g,M=y/g,_=c(h,d),v=i*2.4;o.push(h+m*v,_,d+M*v,h-M*v,_,d+m*v,h+M*v,_,d-m*v);let D=new lt;D.setAttribute("position",new Je(o,3));let C=new De(D,new ct({color:t,transparent:!0,opacity:.8,depthWrite:!1,side:vt}));C.renderOrder=4,this.routeGroup.add(C)}addMarker(e,t,n,i=3){let r=new $n(i-.45,i,32,1);r.rotateX(-Math.PI/2);let o=new De(r,new ct({color:n,transparent:!0,opacity:.85,depthWrite:!1,side:vt}));return o.position.set(e,this.map.getHeight(e,t)+.45,t),o.renderOrder=4,this.routeGroup.add(o),o}addFlag(e,t,n,i){let r=new dt,o=new De(new Oi(.07,.07,3,4),new ct({color:2763306}));o.position.y=1.5;let a=new De(new rn(1.2,.8),new ct({color:n,side:vt}));a.position.set(.6,2.6,0),r.add(o,a),r.position.set(e,this.map.getHeight(e,t),t),this.routeGroup.add(r)}updateFootprints(e,t,n,i,r){if(!this.fp){this.fp=new Map;let c=new lt;c.setAttribute("position",new Je([0,0,1.6,-1.3,0,-.6,1.3,0,-.6,-.55,0,-.6,.55,0,-.6,0,0,-1.9,.55,0,-.6,-.55,0,-1.9,.55,0,-1.9],3)),this.arrow=new De(c,new ct({color:16765802,transparent:!0,opacity:.9,depthWrite:!1,side:vt})),this.arrow.renderOrder=5,this.group.add(this.arrow)}let o=(c,l)=>Math.max(this.map.getHeight(c,l),this.map.hasWater?this.map.waterLevel:-99)+.45;for(let c of e){let l=this.fp.get(c);if(!l){let v=new lt;v.setAttribute("position",new _t(new Float32Array(33*3),3)),l=new hr(v,new Fi({color:6988543,transparent:!0,opacity:.85,depthWrite:!1})),l.renderOrder=5,l.frustumCulled=!1,this.group.add(l),this.fp.set(c,l)}if(l.visible=n&&c.alive,!l.visible)continue;let h=c===t;l.material.color.setHex(h?16765802:6988543),l.material.opacity=h?.95:.6;let d=c.fwdX,f=c.fwdZ,p=f,x=-d,y=c.halfW+.3,g=c.halfD+.3,m=[[-y,g],[y,g],[y,-g],[-y,-g]],M=l.geometry.attributes.position,_=0;for(let v=0;v<4;v++){let[D,C]=m[v],[I,z]=m[(v+1)%4];for(let E=0;E<8;E++){let u=E/8,b=D+(I-D)*u,w=C+(z-C)*u,A=c.x+p*b+d*w,U=c.z+x*b+f*w;M.setXYZ(_++,A,o(A,U),U)}}M.setXYZ(_,M.getX(0),M.getY(0),M.getZ(0)),M.needsUpdate=!0}let a=this.arrow;if(a.visible=!!(i&&t&&t.alive&&t.side===0),a.visible){let c=t,l=c.halfD+3.2+Math.sin(r*4)*.25,h=c.x+c.fwdX*l,d=c.z+c.fwdZ*l;a.position.set(h,o(h,d)+.1,d),a.rotation.y=c.face,a.scale.setScalar(1.8)}}rectAt(e,t,n,i,r,o){let a=(I,z)=>Math.max(this.map.getHeight(I,z),this.map.hasWater?this.map.waterLevel:-99)+.5,c=Math.sin(i),l=Math.cos(i),h=l,d=-c,f=e.halfW+.2,p=e.halfD+.2,x=[],y=[[-f,p],[f,p],[f,-p],[-f,-p]];for(let I=0;I<4;I++){let[z,E]=y[I],[u,b]=y[(I+1)%4];for(let w=0;w<6;w++){let A=w/6,U=z+(u-z)*A,N=E+(b-E)*A,k=t+h*U+c*N,W=n+d*U+l*N;x.push(new B(k,a(k,W),W))}}let g=new lt().setFromPoints(x),m=new hr(g,new Fi({color:r,transparent:!0,opacity:o,depthWrite:!1}));m.renderOrder=6;let M=t+c*(p+1.2),_=n+l*(p+1.2),v=new lt;v.setAttribute("position",new Je([0,0,.9,-.7,0,-.5,.7,0,-.5],3));let D=new De(v,new ct({color:r,transparent:!0,opacity:o,depthWrite:!1,side:vt}));D.position.set(M,a(M,_),_),D.rotation.y=i,D.renderOrder=6;let C=new dt;return C.add(m,D),C}showGhosts(e){this.clearGhosts(),this.ghosts=new dt;for(let t of e)this.ghosts.add(this.rectAt(t.L,t.x,t.z,t.face,16769146,.9));this.group.add(this.ghosts)}clearGhosts(){this.ghosts&&(this.group.remove(this.ghosts),this.ghosts.traverse(e=>{e.geometry&&e.geometry.dispose()}),this.ghosts=null)}pingMove(e,t,n,i=8380538){this.pings=this.pings||[];let r=new $n(.75,1,32,1);r.rotateX(-Math.PI/2);let o=new De(r,new ct({color:i,transparent:!0,opacity:.9,depthWrite:!1,side:vt}));o.position.set(e,Math.max(this.map.getHeight(e,t),this.map.hasWater?this.map.waterLevel:-99)+.6,t),o.renderOrder=6,this.group.add(o),this.pings.push({obj:o,t:0,ttl:.9,kind:"ring"});for(let a of n||[]){let c=this.rectAt(a.L,a.x,a.z,a.face,i,.85);this.group.add(c),this.pings.push({obj:c,t:0,ttl:1.6,kind:"rect"})}}pingAttack(e){this.pings=this.pings||[];let t=Math.max(e.halfW,e.halfD)+1.5,n=new $n(t-.5,t,40,1);n.rotateX(-Math.PI/2);let i=new De(n,new ct({color:16730682,transparent:!0,opacity:.95,depthWrite:!1,side:vt}));i.position.set(e.x,this.map.getHeight(e.x,e.z)+.6,e.z),i.renderOrder=6,this.group.add(i),this.pings.push({obj:i,t:0,ttl:.8,kind:"attack",L:e})}updatePings(e){if(!this.pings||!this.pings.length)return;for(let n of this.pings){n.t+=e;let i=n.t/n.ttl;if(n.kind==="ring"){let r=1+i*3.5;n.obj.scale.set(r,1,r),n.obj.material.opacity=.9*(1-i)}else if(n.kind==="attack"){let r=1.25-i*.3;n.obj.scale.set(r,1,r),n.obj.position.x=n.L.x,n.obj.position.z=n.L.z,n.obj.material.opacity=.95*(1-i)}else n.obj.traverse(r=>{r.material&&(r.material.opacity=.85*(1-i*i))})}let t=[];for(let n of this.pings){if(n.t<n.ttl){t.push(n);continue}this.group.remove(n.obj),n.obj.traverse(i=>{i.geometry&&i.geometry.dispose()})}this.pings=t}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose()})}};function vn(s){let e=s>>>0,t=()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return t.range=(n,i)=>n+(i-n)*t(),t.int=(n,i)=>Math.floor(n+(i-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}function su(s){let e=vn(s*7919+13),t=new Uint8Array(512),n=[...Array(256).keys()];for(let a=255;a>0;a--){let c=Math.floor(e()*(a+1));[n[a],n[c]]=[n[c],n[a]]}for(let a=0;a<512;a++)t[a]=n[a&255];let i=(a,c,l)=>{switch(a&7){case 0:return c+l;case 1:return-c+l;case 2:return c-l;case 3:return-c-l;case 4:return c;case 5:return-c;case 6:return l;default:return-l}},r=a=>a*a*a*(a*(a*6-15)+10),o=(a,c)=>{let l=Math.floor(a)&255,h=Math.floor(c)&255;a-=Math.floor(a),c-=Math.floor(c);let d=r(a),f=r(c),p=t[l]+h,x=t[l+1]+h,y=i(t[p],a,c)+d*(i(t[x],a-1,c)-i(t[p],a,c)),g=i(t[p+1],a,c-1)+d*(i(t[x+1],a-1,c-1)-i(t[p+1],a,c-1));return y+f*(g-y)};return o.fbm=(a,c,l=4)=>{let h=0,d=.5,f=1;for(let p=0;p<l;p++)h+=d*o(a*f,c*f),f*=2,d*=.5;return h},o}var an=(s,e,t)=>s<e?e:s>t?t:s,Gi=(s,e,t)=>s+(e-s)*t,Cn=(s,e,t)=>{let n=an((t-s)/(e-s),0,1);return n*n*(3-2*n)};var Is=150,Ps=100,zs=112,Ds=80,Wi=1.5,Bt=2,Ua=0,mi=1,Xi=2,qi=3,Us=4,sl=5,rl=6,al=7,Na=class{constructor(e,t,n){this.scenario=e,this.biome=t,this.seed=n,this.rng=vn(n),this.noise=su(n),this.nx=Math.round(zs*2/Wi)+1,this.nz=Math.round(Ds*2/Wi)+1,this.heights=new Float32Array(this.nx*this.nz),this.ground=new Uint8Array(this.nx*this.nz),this.gw=Is/Bt,this.gd=Ps/Bt;let i=this.gw*this.gd;this.blocked=new Uint8Array(i),this.cost=new Float32Array(i).fill(1),this.flags=new Uint8Array(i),this.clear=new Uint8Array(i),this.waterLevel=-.55,this.hasWater=!1,this.structures=[],this.decor={trees:[],rocks:[],tufts:[],flowers:[],tents:[],menhirs:[],bushes:[],fences:[],ruins:[],torches:[],reeds:[],lilies:[],logs:[],mushrooms:[],fields:[],farms:[],mill:null},this.forests=[],this.roads=[],this.bridges=[],this.castle=null,this.gate=null,this.objective=null,this.zones=[null,null],this.camps=[null,null],this.fogDensity=e==="forest"?.0068:.0042,this.generate()}generate(){let e=this.rng,t=this.noise,n=this.scenario;if(this.phase=e.range(0,Math.PI*2),this.roadZ=e.range(-12,12),n==="assault"||n==="defend"){let r=n==="assault"?1:-1;this.castle={cx:48*r,cz:e.range(-6,6),half:19,owner:n==="assault"?1:0,face:-r,base:1.6}}if(n==="river"){this.hasWater=!0,this.river={amp:e.range(5,9),freq:e.range(.035,.06),ph:this.phase,half:5.2};let r=e.range(-22,22);this.bridgeZ=r;let o=[],a=r>0?e.range(-40,-18):e.range(18,40);if(o.push(a),e.chance(.6)){let c=e.range(-40,40);Math.abs(c-r)>16&&Math.abs(c-a)>16&&o.push(c)}this.fords=o}n==="canyon"&&(this.canyon={amp:e.range(8,13),ph:this.phase,pinch:e.range(-15,15),top:12},this.biomeTint=!0),n==="ambush"&&(this.valley={amp:e.range(3,7),ph:this.phase},this.roadZ=0,this.objective={type:"exit",x:60,z:this.valleyZ(60),r:12,need:.5,escaped:0}),n==="hill"&&(this.objective={type:"hill",x:e.range(-5,5),z:e.range(-5,5),r:9,score:[0,0],need:100}),(n==="castle"||this.castle)&&(this.hasWater=!0),this.hilly=n==="canyon"?1:e.range(.55,1.7)*(this.biome==="highland"?1.35:1),this.freq=e.range(.016,.03),this.features=this.pickFeatures(),this.features.some(r=>r.type==="marsh"||r.type==="lake"||r.type==="pond")&&(this.hasWater=!0);let i=(r,o)=>this.heightFn(r,o);for(let r=0;r<this.nz;r++)for(let o=0;o<this.nx;o++){let a=-zs+o*Wi,c=-Ds+r*Wi,l=r*this.nx+o,[h,d]=i(a,c);this.heights[l]=h,this.ground[l]=d}this.placeStructures(),this.buildNav(),this.placeDecor(),this.buildTreeHash()}valleyZ(e){return Math.sin(e*.03+this.valley.ph)*this.valley.amp}canyonCenter(e){let t=this.canyon;return Math.sin(e*.035+t.ph)*t.amp+Math.sin(e*.09+t.ph*2)*2.5}canyonHalf(e){let t=this.canyon;return 15-6*Math.exp(-(((e-t.pinch)/16)**2))+this.noise(e*.08,3.3)*2.5}riverX(e){let t=this.river;return Math.sin(e*t.freq+t.ph)*t.amp+this.noise(e*.05,9.1)*3}pickFeatures(){let e=this.rng,t=this.scenario,n=[];if(t==="canyon")return n;let i=this.castle,r=i?i.cx>0?[-38,12]:[-12,38]:[-38,38],o=t==="ambush"?["pillars","ruins","pillars"]:t==="forest"?["marsh","village","ridge","hedges","lake","ruins","pillars"]:t==="river"?["ridge","village","hedges","plateau","pillars","ruins","marsh"]:i?["village","hedges","ridge","marsh","pillars","ruins"]:["ridge","plateau","village","marsh","lake","hedges","pillars","ruins"],a=i?e.int(1,2):e.int(2,3),c={ridge:10,plateau:12,village:11,marsh:10,lake:9,hedges:12,pillars:7,ruins:5},l=(f,p,x)=>t==="ambush"&&Math.abs(p-this.valleyZ(f))<x+14||this.objective&&Math.hypot(f-this.objective.x,p-this.objective.z)<x+12||this.river&&Math.abs(f-this.riverX(p))<x+9||i&&Math.max(Math.abs(f-i.cx),Math.abs(p-i.cz))<i.half+10+x?!1:!n.some(y=>Math.hypot(y.x-f,y.z-p)<y.rad+x+6),h=o.slice(),d=t==="river"||t==="ambush"?0:e.int(0,2);for(let f=0;f<d;f++){let p=e.range(3.5,5.5);for(let x=0;x<40;x++){let y=e.range(r[0],r[1]),g=e.range(-42,42);if(l(y,g,p)){n.push({type:"pond",x:y,z:g,rad:p});break}}}for(let f=0;f<a&&h.length;f++){let p=h.splice(e.int(0,Math.min(h.length-1,3)),1)[0],x=c[p]*e.range(.85,1.2),y=null;for(let m=0;m<60&&!y;m++){let M=e.range(r[0]+x*.6,r[1]-x*.6),_=e.range(-40+x*.5,40-x*.5);l(M,_,x)&&(y={type:p,x:M,z:_,rad:x})}if(!y)continue;let g=y;if(p==="ridge"){let m=e.range(-.6,.6)+Math.PI/2;g.len=e.range(26,44),g.a=m,g.h=e.range(3.5,6),g.w=e.range(5,8),g.gap=e.chance(.7)?e.range(-.3,.3):null,g.rad=g.len/2}else p==="plateau"?(g.h=e.range(4,6),g.ramps=[e.range(0,6.28)],g.ramps.push(g.ramps[0]+Math.PI+e.range(-.6,.6))):p==="village"?g.houses=e.int(5,8):p==="hedges"&&(g.kind=this.biome==="desert"||this.biome==="winter"||this.biome==="highland"?"wall":"hedge");n.push(g)}return n}featureHeight(e,t,n,i){var o;let r=this.noise;for(let a of this.features){let c=e-a.x,l=t-a.z;if(Math.abs(c)>a.rad+16||Math.abs(l)>a.rad+16)continue;let h=Math.hypot(c,l);switch(a.type){case"ridge":{let d=Math.cos(a.a),f=Math.sin(a.a),p=(c*d+l*f)/(a.len/2),x=Math.max(-1,Math.min(1,p)),y=a.x+d*x*a.len/2,g=a.z+f*x*a.len/2,m=Math.hypot(e-y,t-g)+Math.max(0,Math.abs(p)-1)*4,M=Math.exp(-((m/a.w)**2));a.gap!==null&&(M*=1-.9*Math.exp(-(((p-a.gap)*a.len/2/4.5)**2))),n+=a.h*M*(.85+.3*r(e*.15,t*.15)),M>.75&&i===Ua&&r(e*.3,t*.3)>.1&&(i=qi);break}case"plateau":{let d=Math.atan2(l,c),f=0;for(let g of a.ramps){let m=Math.abs((d-g+Math.PI*3)%(Math.PI*2)-Math.PI);f=Math.max(f,Math.max(0,1-m/.45))}let p=2.2+f*13,x=a.rad+r(d*2,3.3)*1.5,y=1-Math.max(0,Math.min(1,(h-x+p)/p));n=Math.max(n,n*.3+a.h*y+(y>.98?r(e*.2,t*.2)*.2:0)),y>.08&&y<.92&&f<.3&&(i=qi);break}case"marsh":{let d=a.rad*(1+r(e*.08,t*.08)*.35),f=1-Math.max(0,Math.min(1,(h-d*.6)/(d*.4)));f>0&&(n=n*(1-f)+(this.waterLevel-.12+r(e*.22,t*.22)*.45)*f,f>.3&&(i=al));break}case"pond":{let d=a.rad*(1+r(e*.12,t*.12+9)*.25),f=1-Math.max(0,Math.min(1,(h-d*.5)/(d*.5)));f>0&&(n=n*(1-f)+-1.8*f,i=f>.6?Us:Xi);break}case"lake":{let d=a.rad*(1+r(e*.07,t*.07+5)*.3),f=1-Math.max(0,Math.min(1,(h-d*.55)/(d*.45)));f>0&&(n=n*(1-f)+-2.6*f,i=f>.55?Us:Xi);break}case"village":{let d=1-Math.max(0,Math.min(1,(h-a.rad)/7));d>0&&(n=n*(1-d)+((o=a.h0)!=null?o:a.h0=n)*d),(h<a.rad*.38||h<a.rad&&Math.abs(r(e*.3,t*.3))<.06)&&(i=mi);break}}}return[n,i]}heightFn(e,t){let n=this.noise,i=this.freq||.022,r=n.fbm(e*i,t*i,4)*3.2*(this.hilly||1)+n(e*.09,t*.09)*.35;this.biome==="desert"&&this.scenario!=="canyon"&&(r+=Math.abs(n(e*.035+t*.012,t*.02))*2.2-.6);let o=this.waterLevel+.45;r<o&&(r=o+(r-o)*.12);let a=Ua;this.features&&this.features.length&&([r,a]=this.featureHeight(e,t,r,a));let c=Math.max(0,Math.abs(e)-74),l=Math.max(0,Math.abs(t)-49),h=Math.sqrt(c*c+l*l),d=0;h>0&&(d=Math.pow(h/12,1.4)*(6+10*(.5+.5*n(e*.05,t*.05))));let f=this.scenario;if(f==="canyon"){let p=this.canyonCenter(e),x=this.canyonHalf(e),y=Math.abs(t-p),g=Cn(x,x+3.5,y),m=this.canyon.top+n.fbm(e*.03,t*.03,3)*4,M=n.fbm(e*.04,t*.04,3)*1.2,_=Math.floor(g*4)/4*.35+g*.65;r=Gi(M,m,_),a=g>.12?g>.95?Ua:qi:rl,y<3&&Math.abs(e)<70&&(a=mi),d*=.5}else if(f==="river"){let p=this.riverX(t),x=Math.abs(e-p),y=this.river.half+n(t*.1,1.7)*1,g=1-Cn(y-1.5,y+2.5,x),m=-2.2;for(let M of this.fords){let _=Math.abs(t-M);_<5&&(m=Gi(-.2,m,Cn(2.5,5,_)))}r=Gi(r*.6,m,g),g>.25?a=Us:g>.02&&(a=Xi)}else if(f==="hill"){let p=this.objective,x=Math.hypot(e-p.x,t-p.z),y=7.5*Math.exp(-((x/21)**2));r=r*.8+y,x<11&&(r=Gi(r,7.5+n(e*.1,t*.1)*.2,Cn(11,8,x)),x<10&&(a=mi))}else if(f==="forest")r=r*1.2;else if(f==="ambush"){let p=Math.abs(t-this.valleyZ(e));r=r*.6+8*Cn(11,34,p)+n(e*.06,t*.06)*1.2*Cn(14,30,p),p<3.5&&Math.abs(e)<74&&(a=mi)}if(this.castle){let p=this.castle,x=Math.abs(e-p.cx),y=Math.abs(t-p.cz),g=Math.max(x,y),m=Cn(p.half+12,p.half+5,g);r=Gi(r,p.base,m);let M=p.half+3,_=p.half+7.5;if(g>M-1&&g<_+1){let v=Cn(M-1,M+1,g)*(1-Cn(_-1,_+1,g));r=Gi(r,-2,v),v>.3?a=Us:v>.02&&(a=Xi)}g<p.half+1&&(a=mi)}if(f!=="canyon"&&Math.abs(e)<74){let p=this.roadZ+Math.sin(e*.05+this.phase)*6;Math.abs(t-p)<1.6&&a===Ua&&(a=mi)}return r+=d,h>6&&r>14&&this.biome!=="desert"?a=sl:h>3&&d>9&&(a=qi),[r,a]}terrainHeight(e,t){let n=(e+zs)/Wi,i=(t+Ds)/Wi,r=Math.floor(n),o=Math.floor(i);r=an(r,0,this.nx-2),o=an(o,0,this.nz-2);let a=an(n-r,0,1),c=an(i-o,0,1),l=this.heights,h=this.nx,d=l[o*h+r],f=l[o*h+r+1],p=l[(o+1)*h+r],x=l[(o+1)*h+r+1];return a+c<=1?d+(f-d)*a+(p-d)*c:x+(p-x)*(1-a)+(f-x)*(1-c)}getHeight(e,t){let n=this.terrainHeight(e,t);for(let i of this.bridges){let r=(e-i.x)*i.cos+(t-i.z)*i.sin,o=-(e-i.x)*i.sin+(t-i.z)*i.cos;if(Math.abs(r)<i.len/2&&Math.abs(o)<i.width/2){let a=1-(r/(i.len/2))**2;n=Math.max(n,i.y+a*i.arch)}}return this.hasWater&&n<this.waterLevel-.35&&(n=Math.max(n,this.waterLevel-.35)),n}placeFeatureStructures(){let e=this.rng;for(let t of this.features)if(t.type==="village"){let n=t.houses;for(let i=0;i<n;i++)for(let r=0;r<20;r++){let o=i/n*Math.PI*2+e.range(-.3,.3),a=t.rad*e.range(.5,.95),c=t.x+Math.cos(o)*a,l=t.z+Math.sin(o)*a,h=[0,Math.PI/2,Math.PI,-Math.PI/2][Math.round((o+Math.PI)/(Math.PI/2))%4],d=Math.abs(Math.sin(h))>.5?4:5,f=d===4?5:4;if(!this.structures.some(p=>p.kind==="house"&&Math.hypot(p.x-c,p.z-l)<7.5)){this.structures.push({kind:"house",x:c,z:l,rot:h+Math.PI,w:d,d:f,village:!0,roof:e.int(0,2)});break}}this.structures.push({kind:"well",x:t.x+e.range(-1.5,1.5),z:t.z+e.range(-1.5,1.5)});for(let i=0;i<3;i++){let r=e()*6.28,o=t.rad*.3;this.decor.stalls=this.decor.stalls||[],this.decor.stalls.push({x:t.x+Math.cos(r)*o+3,z:t.z+Math.sin(r)*o,rot:r,col:e.int(0,3)})}}else if(t.type==="hedges"){let n=e.int(3,5);for(let i=0;i<n;i++){let r=Math.max(-38,Math.min(38,t.x+e.range(-t.rad,t.rad))),o=Math.max(-42,Math.min(42,t.z+e.range(-t.rad,t.rad)));if(this.castle&&Math.max(Math.abs(r-this.castle.cx),Math.abs(o-this.castle.cz))<this.castle.half+14)continue;let a=e.chance(.6)?Math.PI/2+e.range(-.3,.3):e.range(-.3,.3);this.structures.push({kind:"hedge",x:r,z:o,len:e.range(7,13),rot:a,style:t.kind})}}else if(t.type==="pillars"){let n=e.int(3,6);for(let i=0;i<n;i++){let r=e()*6.28,o=e()*t.rad;this.structures.push({kind:"spire",x:t.x+Math.cos(r)*o,z:t.z+Math.sin(r)*o,r:e.range(1.2,2.2),h:e.range(5,11)})}}else if(t.type==="ruins"){this.decor.ruins.push({x:t.x,z:t.z,r:2.6});for(let n=0;n<3;n++){let i=e()*6.28;this.structures.push({kind:"hedge",x:t.x+Math.cos(i)*5,z:t.z+Math.sin(i)*5,len:e.range(3,6),rot:i+Math.PI/2,style:"ruin"})}}}placeStructures(){let e=this.rng,t=this.castle;if(this.placeFeatureStructures(),t){let l=t.half,h=t.face,d=t.cx+h*l;t.gateX=d;let f=3.4,p=(g,m,M,_)=>this.structures.push({kind:"wall",x:g,z:m,w:M,d:_,h:6.2});p(t.cx-h*l,t.cz,2.2,l*2),p(t.cx,t.cz-l,l*2,2.2),p(t.cx,t.cz+l,l*2,2.2);let x=l-f;p(d,t.cz-f-x/2,2.2,x),p(d,t.cz+f+x/2,2.2,x);for(let g of[-1,1])for(let m of[-1,1])this.structures.push({kind:"tower",x:t.cx+g*l,z:t.cz+m*l,r:3.2,h:9.5});this.structures.push({kind:"tower",x:d,z:t.cz-f-1.4,r:2.4,h:8.4,small:!0}),this.structures.push({kind:"tower",x:d,z:t.cz+f+1.4,r:2.4,h:8.4,small:!0}),this.gate={x:d,z:t.cz,w:f*2,owner:t.owner,hp:520,maxHp:520,face:h,alive:!0,shake:0},this.structures.push({kind:"gate",ref:this.gate,x:d,z:t.cz,w:f*2,h:5.4});let y=t.cx-h*(l-8);this.structures.push({kind:"keep",x:y,z:t.cz,w:9,d:9,h:13}),this.structures.push({kind:"house",x:t.cx-h*(l-4),z:t.cz-l+5,rot:0}),this.structures.push({kind:"house",x:t.cx-h*(l-4),z:t.cz+l-5,rot:Math.PI}),this.structures.push({kind:"well",x:t.cx+h*2,z:t.cz+8}),this.bridges.push({x:d+h*5.5,z:t.cz,len:12,width:6.4,y:t.base+.15,arch:.2,cos:1,sin:0,wood:!0}),this.objective={type:"keep",x:y+h*9.5,z:t.cz,r:8,hold:0,need:20,owner:t.owner};for(let g of[-1,1])this.decor.torches.push({x:d+h*1.6,z:t.cz+g*(f+.2),y:t.base+3.5})}if(this.scenario==="river"){let a=this.bridgeZ,c=this.riverX(a),l=(this.riverX(a+1)-this.riverX(a-1))/2,h=Math.atan(l)*-1;this.bridges.push({x:c,z:a,len:22,width:5.6,y:.1,arch:1.4,cos:Math.cos(h),sin:Math.sin(h),wood:!1})}if(this.scenario==="hill"){let a=this.objective,c=9;for(let l=0;l<c;l++){let h=l/c*Math.PI*2+.3;this.decor.menhirs.push({x:a.x+Math.cos(h)*8.6,z:a.z+Math.sin(h)*8.6,h:e.range(2.4,3.6),rot:h,fallen:e.chance(.15)})}this.decor.menhirs.push({x:a.x,z:a.z,h:1.2,rot:0,altar:!0})}if(this.scenario==="canyon"){let a=this.canyon.pinch+e.range(-6,6),c=this.canyonCenter(a);this.decor.ruins.push({x:a,z:c+(e.chance(.5)?-1:1)*(this.canyonHalf(a)-4),r:2.6})}let n=24,i=60,r={x0:-73,x1:-73+n,z0:-i/2,z1:i/2},o={x0:73-n,x1:73,z0:-i/2,z1:i/2};if(this.zones=[r,o],t){let a=t.half-2.2,c={x0:t.cx-a,x1:t.cx+a,z0:t.cz-a,z1:t.cz+a,castle:!0};this.zones[t.owner]=c;let l=1-t.owner;this.zones[l]=l===0?{x0:-73,x1:-45,z0:-32,z1:32}:{x0:45,x1:73,z0:-32,z1:32}}if(this.scenario==="canyon"&&(this.zones=[{x0:-73,x1:-52,z0:-40,z1:40},{x0:52,x1:73,z0:-40,z1:40}]),this.scenario==="ambush"){let a=this.valleyZ(-40);this.zones=[{x0:-60,x1:-26,z0:a-10,z1:a+10},{x0:-22,x1:26,z0:27,z1:45}],this.zoneExtra={x0:-22,x1:26,z0:-45,z1:-27}}for(let a=0;a<2;a++){let c=this.zones[a],l=a===0?-71:71,h=(c.z0+c.z1)/2;if(this.scenario==="canyon"&&(h=this.canyonCenter(l)),this.camps[a]={x:l,z:h},!(t&&t.owner===a))for(let d=0;d<4;d++){let f=l-(a===0?-1:1)*e.range(-1,2)+(a===0?-1:1)*1.5,p=h+(d-1.5)*6+e.range(-1,1);this.decor.tents.push({x:a===0?-76-e.range(0,3):76+e.range(0,3),z:p,side:a,rot:e.range(-.4,.4)+(a===0?Math.PI/2:-Math.PI/2),big:d===1})}}}cellIndex(e,t){let n=Math.floor((e+Is/2)/Bt),i=Math.floor((t+Ps/2)/Bt);return n<0||i<0||n>=this.gw||i>=this.gd?-1:i*this.gw+n}cellCenter(e){let t=e%this.gw,n=e/this.gw|0;return[-Is/2+(t+.5)*Bt,-Ps/2+(n+.5)*Bt]}buildNav(){let e=this.gw,t=this.gd;this.waterBlocked=new Uint8Array(e*t);for(let i=0;i<t;i++)for(let r=0;r<e;r++){let o=i*e+r,a=-Is/2+r*Bt,c=-Ps/2+i*Bt,l=1e9,h=-1e9,d=0,f=0;for(let x=0;x<=2;x++)for(let y=0;y<=2;y++){let g=this.terrainHeight(a+x,c+y);l=Math.min(l,g),h=Math.max(h,g),d+=g,f++}let p=d/f;if((r===0||i===0||r===e-1||i===t-1)&&(this.blocked[o]=1),h-l>2.6&&(this.blocked[o]=1),this.scenario==="canyon"&&p>5&&(this.blocked[o]=1),this.hasWater&&p<this.waterLevel+.05){let x=a+1,y=c+1;this.isFordZone(x,y)&&p>this.waterLevel-1.2?(this.flags[o]|=2,this.cost[o]+=1.6):(this.blocked[o]=1,this.waterBlocked[o]=1)}}for(let i of this.bridges)for(let r=0;r<e*t;r++){let[o,a]=this.cellCenter(r),c=(o-i.x)*i.cos+(a-i.z)*i.sin,l=-(o-i.x)*i.sin+(a-i.z)*i.cos;Math.abs(c)<i.len/2+.5&&Math.abs(l)<i.width/2-.3&&(this.blocked[r]=0,this.flags[r]=this.flags[r]&-3|4,this.cost[r]=1)}for(let i of this.structures)if(i.kind==="wall"||i.kind==="keep"||i.kind==="house"){let r=(i.w||5)/2+.9,o=(i.d||4)/2+.9;this.markRect(i.x-r,i.z-o,i.x+r,i.z+o,a=>{this.blocked[a]=1})}else if(i.kind==="hedge"){let r=Math.ceil(i.len/1);for(let o=0;o<=r;o++){let a=o/r-.5,c=i.x+Math.cos(i.rot)*a*i.len,l=i.z+Math.sin(i.rot)*a*i.len,h=this.cellIndex(c,l);h>=0&&(this.blocked[h]=1)}}else if(i.kind==="spire"){let r=i.r+.6;this.markRect(i.x-r,i.z-r,i.x+r,i.z+r,o=>{let[a,c]=this.cellCenter(o);Math.hypot(a-i.x,c-i.z)<r+.4&&(this.blocked[o]=1)})}else if(i.kind==="tower"||i.kind==="well"){let r=(i.r||1.2)+.8;this.markRect(i.x-r,i.z-r,i.x+r,i.z+r,o=>{let[a,c]=this.cellCenter(o);Math.hypot(a-i.x,c-i.z)<r+.6&&(this.blocked[o]=1)})}let n=this.castle;if(n){let i=n.half-1.2;this.markRect(n.cx-i,n.cz-i,n.cx+i,n.cz+i,o=>{this.flags[o]|=16});let r=this.gate;r.cells=[],this.markRect(r.x-1.6,r.z-r.w/2+.4,r.x+1.6,r.z+r.w/2-.4,o=>{this.blocked[o]=0,this.flags[o]|=8,r.cells.push(o)})}for(let i of this.decor.menhirs){if(i.altar)continue;let r=this.cellIndex(i.x,i.z);r>=0&&(this.blocked[r]=1)}for(let i of this.decor.ruins)this.markRect(i.x-i.r,i.z-i.r,i.x+i.r,i.z+i.r,r=>{this.blocked[r]=1});this.makeForests();for(let i of this.forests)this.markRect(i.x-i.r,i.z-i.r,i.x+i.r,i.z+i.r,r=>{let[o,a]=this.cellCenter(r);Math.hypot((o-i.x)/i.r,(a-i.z)/i.r*i.rx)<1&&!this.blocked[r]&&(this.flags[r]|=1,this.cost[r]+=.6)});if(this.scenario==="canyon"){let i=this.rng;for(let r=0;r<7;r++){let o=i.range(-44,44),c=this.canyonCenter(o)+i.range(-1,1)*(this.canyonHalf(o)-5),l=i.range(1.4,2.6);this.decor.rocks.push({x:o,z:c,s:l*1.35,big:!0,rot:i()*6}),this.markRect(o-l,c-l,o+l,c+l,h=>{let[d,f]=this.cellCenter(h);Math.hypot(d-o,f-c)<l+.4&&(this.blocked[h]=1)})}}this.ensureConnectivity(),this.computeClearance()}flood(e){let t=this.gw*this.gd,n=new Uint8Array(t),i=[e];for(n[e]=1;i.length;){let r=i.pop(),o=r%this.gw,a=r/this.gw|0;for(let[c,l]of[[1,0],[-1,0],[0,1],[0,-1]]){let h=o+c,d=a+l;if(h<0||d<0||h>=this.gw||d>=this.gd)continue;let f=d*this.gw+h;n[f]||this.blocked[f]&&!(this.flags[f]&8)||(n[f]=1,i.push(f))}}return n}freeCellNear(e,t){for(let n=0;n<12;n++)for(let i=-n;i<=n;i++)for(let r=-n;r<=n;r++){let o=this.cellIndex(e+r*Bt,t+i*Bt);if(o>=0&&!this.blocked[o])return o}return-1}ensureConnectivity(){let e=a=>[(a.x0+a.x1)/2,(a.z0+a.z1)/2],[t,n]=e(this.zones[0]),[i,r]=e(this.zones[1]);this.castle&&([t,n]=e(this.zones[1-this.castle.owner]),i=this.gate.x+this.castle.face*12,r=this.gate.z);let o=[[i,r]];for(let a of this.zones)for(let c of[.2,.5,.8])o.push([(a.x0+a.x1)/2,a.z0+(a.z1-a.z0)*c]);for(let[a,c]of o)this.connect(t,n,a,c)}connect(e,t,n,i){let r=this.freeCellNear(e,t);for(let o=0;o<4;o++){let a=this.freeCellNear(n,i);if(r<0||a<0||this.flood(r)[a])return;let l=[0,14,-14,26][o],h=Math.ceil(Math.hypot(n-e,i-t));for(let d=0;d<=h;d++){let f=e+(n-e)*d/h,p=t+(i-t)*d/h+l*Math.sin(Math.PI*d/h);for(let x=-1;x<=1;x++){let y=this.cellIndex(f,p+x*Bt);y<0||!this.waterBlocked[y]||(this.waterBlocked[y]=0,this.blocked[y]=0,this.flags[y]|=2,this.cost[y]+=1.6,this.raiseCell(y,this.waterLevel-.3))}}}}raiseCell(e,t){let[n,i]=this.cellCenter(e),{EXT_X:r,EXT_Z:o,STEP:a}=this.extent,c=Math.floor((n-1.8+r)/a),l=Math.ceil((n+1.8+r)/a),h=Math.floor((i-1.8+o)/a),d=Math.ceil((i+1.8+o)/a);for(let f=h;f<=d;f++)for(let p=c;p<=l;p++){let x=f*this.nx+p;x>=0&&x<this.heights.length&&this.heights[x]<t&&(this.heights[x]=t,this.ground[x]=Xi)}}makeForests(){let e=this.rng,t=this.scenario==="forest"?e.int(11,14):this.scenario==="canyon"?0:this.scenario==="ambush"?e.int(6,9):e.int(2,4),n=0;for(;this.forests.length<t&&n++<300;){let i=e.range(-44,44),r=e.range(-44,44),o=this.scenario==="forest"?e.range(6,11):e.range(5,8);if(this.nearStructure(i,r,o+4)||this.objective&&Math.hypot(i-this.objective.x,r-this.objective.z)<o+12||this.scenario==="river"&&Math.abs(i-this.riverX(r))<o+7||this.scenario==="ambush"&&Math.abs(r-this.valleyZ(i))<o+12||this.forests.some(c=>Math.hypot(c.x-i,c.z-r)<c.r+o+3))continue;let a=this.cellIndex(i,r);a<0||this.blocked[a]||this.forests.push({x:i,z:r,r:o,rx:e.range(.8,1.25)})}}nearStructure(e,t,n){for(let i of this.features||[])if((i.type==="village"||i.type==="lake"||i.type==="pond"||i.type==="pillars"||i.type==="ruins")&&Math.hypot(e-i.x,t-i.z)<i.rad+n)return!0;if(this.castle&&Math.max(Math.abs(e-this.castle.cx),Math.abs(t-this.castle.cz))<this.castle.half+9+n*.3)return!0;for(let i of this.bridges)if(Math.hypot(e-i.x,t-i.z)<n+i.len/2)return!0;return!!(this.scenario==="river"&&this.fords.some(i=>Math.abs(t-i)<n&&Math.abs(e-this.riverX(i))<n+6))}markRect(e,t,n,i,r){let o=Math.max(0,Math.floor((e+Is/2)/Bt)),a=Math.min(this.gw-1,Math.floor((n+Is/2)/Bt)),c=Math.max(0,Math.floor((t+Ps/2)/Bt)),l=Math.min(this.gd-1,Math.floor((i+Ps/2)/Bt));for(let h=c;h<=l;h++)for(let d=o;d<=a;d++)r(h*this.gw+d)}computeClearance(){let e=this.gw,t=this.gd,n=e*t,i=this.clear;i.fill(255);let r=new Int32Array(n),o=0,a=0;for(let c=0;c<n;c++)this.blocked[c]&&(i[c]=0,r[a++]=c);for(;o<a;){let c=r[o++],l=c%e,h=c/e|0;for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){let p=l+f,x=h+d;if(p<0||x<0||p>=e||x>=t)continue;let y=x*e+p;i[y]>i[c]+1&&(i[y]=i[c]+1,r[a++]=y)}}}clearanceAt(e,t){let n=this.cellIndex(e,t);return n<0?0:this.clear[n]*Bt-1}isPassable(e,t,n=-1){let i=this.cellIndex(e,t);return!(i<0||this.blocked[i]||this.flags[i]&8&&this.gate&&this.gate.alive&&n!==this.gate.owner)}flagAt(e,t){let n=this.cellIndex(e,t);return n<0?0:this.flags[n]}inCastle(e,t){let n=this.castle;return!!n&&Math.abs(e-n.cx)<n.half-.8&&Math.abs(t-n.cz)<n.half-.8}placeDecor(){let e=this.rng,t=this.decor,n=this.biome,i=(o,a,c)=>this.zones.some(l=>o>l.x0-c&&o<l.x1+c&&a>l.z0-c&&a<l.z1+c);for(let o of this.forests){let a=Math.round(o.r*o.r*.22);for(let c=0;c<a;c++){let l=e()*Math.PI*2,h=Math.sqrt(e())*o.r,d=o.x+Math.cos(l)*h,f=o.z+Math.sin(l)*h/o.rx,p=this.cellIndex(d,f);p<0||this.blocked[p]||t.trees.push({x:d,z:f,s:e.range(.8,1.35),kind:this.treeKind(),rot:e()*6})}for(let c=0;c<a*.4;c++){let l=e()*Math.PI*2,h=Math.sqrt(e())*(o.r+2);t.bushes.push({x:o.x+Math.cos(l)*h,z:o.z+Math.sin(l)*h,s:e.range(.5,1)})}}for(let o=0;o<70;o++){let a=e.range(-74,74),c=e.range(-49,49),l=this.cellIndex(a,c);l<0||this.blocked[l]||this.flags[l]&30||i(a,c,3)||this.nearStructure(a,c,3)||this.objective&&Math.hypot(a-this.objective.x,c-this.objective.z)<12||this.scenario==="canyon"&&this.terrainHeight(a,c)>3||(e.chance(.55)?t.trees.push({x:a,z:c,s:e.range(.8,1.3),kind:this.treeKind(),rot:e()*6}):t.rocks.push({x:a,z:c,s:e.range(.5,1.1),rot:e()*6}))}for(let o=0;o<420;o++){let a=e.range(-zs+4,zs-4),c=e.range(-Ds+4,Ds-4);Math.abs(a)<77&&Math.abs(c)<52||this.terrainHeight(a,c)>20||(e.chance(.72)?t.trees.push({x:a,z:c,s:e.range(.9,1.6),kind:this.treeKind(!0),rot:e()*6}):t.rocks.push({x:a,z:c,s:e.range(.8,2.2),rot:e()*6}))}if(this.scenario==="canyon")for(let o=0;o<90;o++){let a=e.range(-74,74),c=e.range(-49,49);this.terrainHeight(a,c)<10||(e.chance(.5)?t.trees.push({x:a,z:c,s:e.range(.8,1.2),kind:this.treeKind(!0),rot:e()*6}):t.rocks.push({x:a,z:c,s:e.range(.6,1.8),rot:e()*6}))}let r=n==="desert"?120:260;for(let o=0;o<r;o++){let a=e.range(-80,80),c=e.range(-54,54),l=this.cellIndex(a,c);l>=0&&(this.blocked[l]||this.flags[l]&22)||this.terrainHeight(a,c)<this.waterLevel+.2&&this.hasWater||(e.chance(.2)?t.flowers.push({x:a,z:c,c:e.int(0,3)}):t.tufts.push({x:a,z:c,s:e.range(.6,1.2),rot:e()*6}))}if(n!=="desert")for(let o=0;o<9;o++){let a=e.range(-70,70),c=e.range(-46,46),l=this.cellIndex(a,c);if(l<0||this.blocked[l]||this.flags[l]&19)continue;let h=e.int(0,3);for(let d=0;d<14;d++){let f=e()*6.28,p=Math.sqrt(e())*4;t.flowers.push({x:a+Math.cos(f)*p,z:c+Math.sin(f)*p,c:e.chance(.8)?h:e.int(0,3)})}}if(this.hasWater){for(let o=0;o<900&&t.reeds.length<90;o++){let a=e.range(-100,100),c=e.range(-70,70),l=this.terrainHeight(a,c);this.castle&&Math.max(Math.abs(a-this.castle.cx),Math.abs(c-this.castle.cz))<this.castle.half+2.5||l>this.waterLevel-.3&&l<this.waterLevel+.3&&t.reeds.push({x:a,z:c,s:e.range(.7,1.2),rot:e()*6})}if(n!=="winter")for(let o=0;o<900&&t.lilies.length<40;o++){let a=e.range(-100,100),c=e.range(-70,70),l=this.terrainHeight(a,c);l<this.waterLevel-.6&&l>this.waterLevel-2.4&&!this.bridges.some(h=>Math.hypot(h.x-a,h.z-c)<h.len/2+2)&&t.lilies.push({x:a,z:c,s:e.range(.5,.9),flower:e.chance(.25)})}}for(let o of this.forests){let a=e.int(1,2);for(let c=0;c<a;c++){let l=e()*6.28,h=e()*o.r*.8,d=o.x+Math.cos(l)*h,f=o.z+Math.sin(l)*h,p=this.cellIndex(d,f);p>=0&&!this.blocked[p]&&t.logs.push({x:d,z:f,rot:e()*6,len:e.range(2.5,4.5)})}for(let c=0;c<6;c++){let l=e()*6.28,h=e()*o.r;t.mushrooms.push({x:o.x+Math.cos(l)*h,z:o.z+Math.sin(l)*h,s:e.range(.6,1.1),red:e.chance(.5)})}}if(n!=="desert"||e.chance(.5)){let o=(a,c,l)=>{let h=1e9,d=-1e9;for(let[f,p]of[[-l,-l],[l,-l],[-l,l],[l,l],[0,0]]){let x=this.terrainHeight(a+f,c+p);h=Math.min(h,x),d=Math.max(d,x)}return d-h<1.4&&h>this.waterLevel+.3&&d<9};for(let a=0;a<400&&t.fields.length<10;a++){let c=e.range(-104,104),l=e.range(-74,74);if(Math.abs(c)<81&&Math.abs(l)<55)continue;let h=e.range(8,14),d=e.range(6,10);o(c,l,Math.max(h,d)/2)&&(t.fields.some(f=>Math.hypot(f.x-c,f.z-l)<14)||t.fields.push({x:c,z:l,w:h,d,rot:e.range(-.5,.5),kind:e.int(0,3)}))}for(let a of t.fields.slice(0,4)){let c=a.x+Math.cos(a.rot)*(a.w/2+4),l=a.z+Math.sin(a.rot)*(a.w/2+4);o(c,l,2.5)&&t.farms.push({x:c,z:l,rot:a.rot})}for(let a=0;a<200&&!t.mill;a++){let c=e.range(-100,100),l=e.range(-70,70);Math.abs(c)<82&&Math.abs(l)<56||o(c,l,2.5)&&!t.fields.some(h=>Math.hypot(h.x-c,h.z-l)<9)&&(t.mill={x:c,z:l,rot:e()*6})}}if(this.scenario!=="canyon")for(let o=0;o<3;o++){let a=e.range(-40,40),c=this.roadZ+Math.sin(a*.05+this.phase)*6+(e.chance(.5)?3:-3),l=this.cellIndex(a,c);l<0||this.blocked[l]||this.nearStructure(a,c,6)||t.fences.push({x:a,z:c,len:e.int(3,6),rot:Math.atan2(Math.cos(a*.05+this.phase)*.3,1)})}}isFordZone(e,t){if(this.fords&&this.river){for(let n of this.fords)if(Math.abs(t-n)<5&&Math.abs(e-this.riverX(t))<this.river.half+4)return!0}for(let n of this.features||[])if(n.type==="marsh"&&Math.hypot(e-n.x,t-n.z)<n.rad*1.35)return!0;return!1}buildTreeHash(){this.treeGrid={W:42,D:30,cells:Array.from({length:42*30},()=>[])};for(let n of this.decor.trees){if(Math.abs(n.x)>80||Math.abs(n.z)>56)continue;let i=Math.floor((n.x+84)/4),r=Math.floor((n.z+60)/4);if(i<0||r<0||i>=42||r>=30)continue;let o=(n.kind==="pine"?1.05:n.kind==="palm"||n.kind==="cactus"?.7:.85)*n.s;this.treeGrid.cells[r*42+i].push({x:n.x,z:n.z,r:o})}}avoidTrees(e,t,n,i=0){let r=this.treeGrid;if(!r)return!1;let o=Math.floor((e+84)/4),a=Math.floor((t+60)/4),c=!1;for(let l=-1;l<=1;l++){let h=a+l;if(!(h<0||h>=r.D))for(let d=-1;d<=1;d++){let f=o+d;if(!(f<0||f>=r.W))for(let p of r.cells[h*r.W+f]){let x=p.r+i,y=e-p.x,g=t-p.z,m=y*y+g*g;if(m<x*x){let M=Math.sqrt(m)||.001;e=p.x+(m>1e-6?y/M:1)*x,t=p.z+(m>1e-6?g/M:0)*x,c=!0}}}}return n[0]=e,n[1]=t,c}treesNear(e,t,n){let i=this.treeGrid;if(!i)return 0;let r=0,o=Math.floor((e+84)/4),a=Math.floor((t+60)/4),c=Math.ceil(n/4);for(let l=a-c;l<=a+c;l++)for(let h=o-c;h<=o+c;h++)if(!(h<0||l<0||h>=i.W||l>=i.D))for(let d of i.cells[l*i.W+h])Math.abs(d.x-e)<n&&Math.abs(d.z-t)<n&&r++;return r}treeKind(e=!1){let t=this.biome,n=this.rng;return t==="desert"?n.chance(.6)?"palm":"cactus":t==="winter"?n.chance(.8)?"pine":"bare":t==="highland"?n.chance(.6)?"pine":n.chance(.5)?"bare":"oak":t==="spring"?n.chance(.3)?"pine":n.chance(.75)?"oak":"birch":this.scenario==="forest"?n.chance(.55)?"pine":"oak":n.chance(e?.5:.35)?"pine":n.chance(.85)?"oak":"birch"}get extent(){return{EXT_X:zs,EXT_Z:Ds,STEP:Wi}}};function ol(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new lt,l=0;for(let h=0;h<s.length;++h){let d=s[h],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,d=[];for(let f=0;f<s.length;++f){let p=s[f].index;for(let x=0;x<p.count;++x)d.push(p.getX(x)+h);h+=s[f].attributes.position.count}c.setIndex(d)}for(let h in r){let d=ru(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][f]);let x=ru(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function ru(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new _t(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let f=0,p=h.count;f<p;f++)for(let x=0;x<t;x++){let y=h.getComponent(f,x);a.setComponent(f+d,x,y)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}var au=new Ke,ou=new Wt,cu=new zt,ex=new B,tx=new B;function Mn(s){let e=s.index?s.toNonIndexed():s;return e.deleteAttribute("uv"),e.attributes.uv1&&e.deleteAttribute("uv1"),e.computeVertexNormals(),e}function ae(s,e=0,t=0,n=0,i=0,r=0,o=0,a=1,c=1,l=1){return cu.set(i,r,o),ou.setFromEuler(cu),au.compose(ex.set(e,t,n),ou,tx.set(a,c,l)),s.applyMatrix4(au),s}var Ce=(s,e,t)=>Mn(new sn(s,e,t)),_n=(s,e,t,n=6)=>Mn(new Oi(s,e,t,n,1)),gi=(s,e,t=6)=>Mn(new Bi(s,e,t,1)),xi=(s,e=0)=>Mn(new di(s,e)),nx=s=>Mn(new va(s,0)),gt=s=>ol(s.map(e=>e.index?Mn(e):e),!1);function lu(){let s={};return s.leg=ae(Ce(.16,.78,.2),0,-.39,0),s.torso=gt([ae(_n(.25,.2,.62,6),0,0,0),ae(Ce(.72,.14,.2),0,.26,0)]),s.chest=ae(_n(.28,.24,.36,6),0,.1,0),s.skirt=ae(_n(.22,.3,.26,6),0,0,0),s.head=xi(.17,0),s.helmRoman=gt([Mn(new fi(.2,6,3,0,Math.PI*2,0,Math.PI/2)),ae(Ce(.44,.04,.12),0,0,-.14)]),s.crest=ae(Ce(.06,.16,.42),0,.26,0),s.plume=gt([ae(Ce(.07,.3,.46),0,.3,-.02),ae(Ce(.07,.2,.22),0,.28,-.28,.5)]),s.helmCone=gt([gi(.21,.36,6),ae(Ce(.05,.16,.04),0,-.1,.19)]),s.horns=gt([ae(gi(.05,.28,5),.2,.06,0,0,0,-1),ae(gi(.05,.28,5),-.2,.06,0,0,0,1)]),s.hood=ae(gi(.22,.42,5),0,.06,-.02),s.scutum=ae(Ce(.62,.95,.08),0,0,0),s.boss=ae(xi(.08,0),0,0,.05),s.round=ae(_n(.36,.36,.07,8),0,0,0,Math.PI/2),s.buckler=ae(_n(.24,.24,.06,7),0,0,0,Math.PI/2),s.tower=ae(Ce(.76,1.3,.1),0,0,0),s.towerRim=gt([ae(Ce(.8,.07,.11),0,.62,0),ae(Ce(.8,.07,.11),0,-.62,0),ae(Ce(.07,1.3,.11),0,0,0)]),s.sword=gt([ae(Ce(.06,.04,.62),0,0,.38),ae(Ce(.2,.05,.05),0,0,.06)]),s.axe=gt([ae(Ce(.05,.05,.75),0,0,.3),ae(Ce(.04,.26,.18),0,.05,.62)]),s.pike=gt([ae(_n(.028,.028,4.3,4),0,0,1.2,Math.PI/2),ae(gi(.06,.3,4),0,0,3.45,Math.PI/2)]),s.spear=gt([ae(_n(.03,.03,3,4),0,0,.9,Math.PI/2),ae(gi(.06,.28,4),0,0,2.5,Math.PI/2)]),s.bow=ae(Mn(new Es(.46,.03,3,8,Math.PI)),0,0,0,0,Math.PI/2,Math.PI/2),s.quiver=ae(_n(.08,.07,.55,5),0,0,0,.35),s.cape=ae(Ce(.56,.9,.05),0,-.45,0),s.horse=gt([ae(Ce(.56,.62,1.5),0,0,0),ae(Ce(.36,.72,.4),0,.42,.72,-.55),ae(Ce(.3,.3,.62),0,.72,1.08,.35),ae(Ce(.12,.5,.12),0,.05,-.8,.6),ae(Ce(.08,.14,.08),.1,.92,.9),ae(Ce(.08,.14,.08),-.1,.92,.9)]),s.mane=gt([ae(Ce(.1,.62,.36),0,.55,.62,-.55),ae(Ce(.14,.52,.14),0,.02,-.82,.5)]),s.saddle=gt([ae(Ce(.66,.36,.72),0,.12,-.02),ae(Ce(.3,.1,.4),0,.33,-.05)]),s.hleg=gt([ae(Ce(.13,.8,.14),.18,-.4,0),ae(Ce(.13,.8,.14),-.18,-.4,0)]),s.crestT=ae(Ce(.5,.16,.07),0,.27,0),s.cheeks=gt([ae(Ce(.04,.16,.12),.18,-.08,.06),ae(Ce(.04,.16,.12),-.18,-.08,.06)]),s.emblemWing=gt([ae(Ce(.46,.05,.02),.1,.12,.05,0,0,.55),ae(Ce(.46,.05,.02),-.1,.12,.05,0,0,-.55),ae(Ce(.46,.05,.02),.1,-.12,.05,0,0,-.55),ae(Ce(.46,.05,.02),-.1,-.12,.05,0,0,.55),ae(Ce(.05,.8,.02),0,0,.05)]),s.shieldRim=gt([ae(Ce(.66,.05,.1),0,.48,0),ae(Ce(.66,.05,.1),0,-.48,0),ae(Ce(.05,.98,.1),.32,0,0),ae(Ce(.05,.98,.1),-.32,0,0)]),s.emblemCross=gt([ae(Ce(.62,.09,.02),0,0,.045),ae(Ce(.09,.62,.02),0,0,.045)]),s.emblemHalf=ae(Mn(new ya(.34,8,0,Math.PI)),0,0,.042),s.roundRim=ae(Mn(new Es(.34,.035,3,10)),0,0,.02),s.fur=ae(xi(.36,0),0,0,-.03,0,0,0,1.25,.42,1.05),s.beard=gt([ae(Ce(.22,.2,.1),0,-.1,.12),ae(Ce(.12,.14,.08),0,-.24,.12)]),s.braids=gt([ae(Ce(.06,.34,.06),.16,-.14,-.08),ae(Ce(.06,.34,.06),-.16,-.14,-.08)]),s.wings=gt([ae(Ce(.04,.32,.2),.2,.12,-.04,0,0,-.35),ae(Ce(.04,.32,.2),-.2,.12,-.04,0,0,.35)]),s.pauldrons=gt([ae(xi(.14,0),.3,0,0,0,0,0,1.2,.8,1.1),ae(xi(.14,0),-.3,0,0,0,0,0,1.2,.8,1.1)]),s.belt=ae(_n(.225,.225,.07,7),0,0,0),s.scarf=ae(Mn(new Es(.15,.05,3,8)),0,0,0,Math.PI/2),s.arrows=gt([0,1,2,3].map(e=>ae(Ce(.02,.22,.02),(e%2-.5)*.06,.36,e>1?.03:-.03))),s.barding=gt([ae(Ce(.66,.46,1.25),0,-.06,0),ae(Ce(.3,.3,.3),0,.3,.8,-.55)]),s.bardingTrim=ae(Ce(.68,.08,1.27),0,-.3,0),s.horsePlume=ae(gi(.07,.3,4),0,1.02,1,.3),s.wolfPelt=ae(xi(.4,0),0,.3,-.35,0,0,0,1.2,.35,1.3),s.pole=ae(_n(.04,.04,3.4,4),0,1.7,0),s.eagle=gt([ae(xi(.14,0),0,3.55,0),ae(Ce(.5,.08,.1),0,3.6,0,0,0,.3),ae(Ce(.5,.08,.1),0,3.6,0,0,0,-.3)]),s}function hu(s,e){let t=s===0,n=[],i=(l,h,d,f,p,x="none",y=0,g=0,m=0,M={})=>n.push({g:l,role:h,p:[d,f,p],anim:x,r:[y,g,m],...M}),r=e==="cavalry",o=r?.95:0,a=t?"primary":["primary","tunic2","tunic3"];switch(r?(i("horse",t?"horse":["horse","horse2"],0,1.15,0,"horse"),i("mane","mane",0,1.15,0,"horse"),i("saddle","primary",0,1.47,-.05,"horse"),t?(i("barding","primary",0,1.15,0,"horse"),i("bardingTrim","accent",0,1.15,0,"horse"),i("horsePlume","accent",0,1.15,0,"horse")):i("wolfPelt","fur",0,1.15,0,"horse"),i("hleg",t?"horse":["horse","horse2"],0,.85,.55,"hlegF"),i("hleg",t?"horse":["horse","horse2"],0,.85,-.55,"hlegB"),i("leg","dark",.3,.78+o,.05,"ride",-1.2,0,.35),i("leg","dark",-.3,.78+o,.05,"ride",-1.2,0,-.35)):(i("leg","dark",.11,.78,0,"legL"),i("leg","dark",-.11,.78,0,"legR")),i("torso",e==="archer"?t?"hood":["cloth","tunic3"]:a,0,1.08+o,0),e!=="archer"&&i("skirt",t?"primary":"dark",0,.8+o,0),i("belt",t?"leather":"dark",0,.86+o,0),(e==="legion"||e==="guard"||e==="cavalry"||e==="pike")&&i("chest","metal",0,1.08+o,0,"none",0,0,0,{noOff:t}),t&&e!=="archer"&&i("chest","silver",0,1.08+o,0,"none",0,0,0,{off:!0}),(e==="guard"||t&&e==="legion")&&i("pauldrons","metal",0,1.34+o,0),i("head","skin",0,1.56+o,0),t||(i("beard",["hairB","hairR","hairG"],0,1.56+o,0,"none",0,0,0,{chance:.75}),i("braids",["hairB","hairR","hairG"],0,1.56+o,0,"none",0,0,0,{chance:.4}),e!=="archer"&&i("fur",["fur","furL"],0,1.36+o,0,"none",0,0,0,{chance:e==="guard"?1:.6})),e==="archer"?(i("hood",t?"hood":["cloth","fur"],0,1.62+o,0),i("scarf","accent",0,1.42+o,0),i("quiver","leather",-.1,1.2+o,-.22,"none",.35),i("arrows","cloth",-.1,1.2+o,-.22,"none",.35),i("bow","wood",.3,1.25+o,.32,"bow")):t?(i("helmRoman","helm",0,1.6+o,0),i("cheeks","helm",0,1.6+o,0),e==="guard"||e==="cavalry"?i("plume","crest",0,1.6+o,0,"none",0,0,0,{noOff:!0}):i("crest","crest",0,1.6+o,0,"none",0,0,0,{noOff:!0}),i("crestT","accent",0,1.6+o,0,"none",0,0,0,{off:!0})):(i("helmCone","helm",0,1.72+o,0),i("horns","crest",0,1.68+o,0,"none",0,0,0,{v:["helm",0]}),i("wings","accent",0,1.68+o,0,"none",0,0,0,{v:["helm",1]}),i("horns","crest",0,1.68+o,0,"none",0,0,0,{off:!0})),e){case"legion":t?(i("scutum","primary",.34,1.02,.24,"shield"),i("shieldRim","secondary",.34,1.02,.24,"shield"),i("emblemWing","accent",.34,1.02,.24,"shield"),i("boss","secondary",.34,1.02,.29,"shield"),i("sword","metal",-.34,1.12,.1,"arm"),i("cape","crest",0,1.36,-.2,"none",0,0,0,{chance:.35})):(i("round","primary",.36,1.1,.22,"shield"),i("emblemCross","accent",.36,1.1,.22,"shield",0,0,0,{v:["shield",0]}),i("emblemHalf","accent",.36,1.1,.22,"shield",0,0,0,{v:["shield",1]}),i("roundRim","wood",.36,1.1,.22,"shield"),i("boss","metal",.36,1.1,.27,"shield"),i("axe","metal",-.34,1.12,.1,"arm"));break;case"pike":i("buckler",t?"secondary":"primary",.32,1.12,.2,"shield"),t||i("emblemCross","accent",.32,1.12,.2,"shield",0,0,0,{chance:.5}),i("pike","wood",-.28,1.2,0,"pike");break;case"guard":i("tower","primary",.36,1.05,.26,"shield"),i("towerRim","secondary",.36,1.05,.26,"shield"),i("emblemWing","accent",.36,1.05,.27,"shield"),i("sword","metal",-.34,1.12,.1,"arm"),i("cape",t?"crest":"fur",0,1.36,-.2);break;case"cavalry":i("round","primary",.36,1.1+o,.05,"shield"),i("roundRim","accent",.36,1.1+o,.05,"shield"),t||i("emblemHalf","accent",.36,1.1+o,.05,"shield"),i("spear","wood",-.32,1.2+o,0,"lance"),i("cape",t?"crest":"primary",0,1.36+o,-.2);break}return n}var ka=class{constructor(){this.geos=[]}add(e,t,n=0,i=0,r=0,o=0,a=0,c=0,l=1,h=1,d=1){let f=e.clone();ae(f,n,i,r,o,a,c,l,h,d);let p=f.attributes.position.count,x=new Float32Array(p*3),y=t instanceof me?t:new me(t);for(let g=0;g<p;g++)x[g*3]=y.r,x[g*3+1]=y.g,x[g*3+2]=y.b;return f.setAttribute("color",new _t(x,3)),this.geos.push(f),f}build(e){if(!this.geos.length)return null;let t=ol(this.geos,!1);this.geos=[];let n=new De(t,e);return n.castShadow=!0,n.receiveShadow=!0,n}},J={cone:(s,e,t=6)=>gi(s,e,t),cyl:(s,e,t,n=6)=>_n(s,e,t,n),box:Ce,ico:xi,dode:nx};function ft(s,e,t=.06){let n=new me(s),i=1+(e()-.5)*2*t;return n.r*=i,n.g*=i,n.b*=i,n}function ix(s,e,t){let n=s/2,i=e/2,r=[[-n,0,-i],[n,0,-i],[n,t,0],[-n,0,-i],[n,t,0],[-n,t,0],[-n,0,i],[-n,t,0],[n,t,0],[-n,0,i],[n,t,0],[n,0,i],[-n,0,-i],[-n,t,0],[-n,0,i],[n,0,-i],[n,0,i],[n,t,0]],o=new lt;return o.setAttribute("position",new Je(r.flat(),3)),o.computeVertexNormals(),o}var uu=new Ke,cl=new Wt,du=new zt,sx=new B,rx=new B;function fu(s,e){var E;let t=Rn[s.biome],n=vn(s.seed+99),i=new dt,r=new Ct({vertexColors:!0,flatShading:!0}),o={group:i,dynamic:[],gateMesh:null,water:null,clouds:[],torches:[],flags:[]};{let{EXT_X:u,EXT_Z:b,STEP:w}=s.extent,A=s.nx,U=s.nz,N=(A-1)*(U-1)*2,k=new Float32Array(N*9),W=new Float32Array(N*9),V=s.heights,ee=s.ground,K=new me,pe=t.grass.map(Te=>new me(Te)),Ee=(t.cliff||t.rock).map(Te=>new me(Te)),je=t.rock.map(Te=>new me(Te)),Z=new me(t.dirt),se=new me(t.sand),_e=new me(16054266),fe=new me(t.sand).lerp(new me(t.dirt),.3),ke=new me(t.leaf[3]||t.leaf[0]).multiplyScalar(.7).lerp(new me(t.dirt),.35),He=new me(t.cliff[0]),qe=new me(t.grass[2]).lerp(new me(t.dirt),.5).multiplyScalar(.72),rt=0,$e=s.noise,xt=(Te,Ue,Ie,nt,Ae,P,S,G,Q)=>{let te=V[Ue*A+Te],$=V[nt*A+Ie],Me=V[P*A+Ae],le=It=>-u+It*w,xe=It=>-b+It*w,Pe=[le(Te),te,xe(Ue),le(Ie),$,xe(nt),le(Ae),Me,xe(P)];k.set(Pe,rt);let ne=Pe[3]-Pe[0],ye=Pe[4]-Pe[1],ze=Pe[5]-Pe[2],Fe=Pe[6]-Pe[0],ve=Pe[7]-Pe[1],Ze=Pe[8]-Pe[2],Oe=ze*Fe-ne*Ze,at=ye*Ze-ze*ve,F=ne*ve-ye*Fe,de=Math.hypot(at,Oe,F)||1;Oe=Math.abs(Oe/de);let Y=(Pe[0]+Pe[3]+Pe[6])/3,j=(Pe[2]+Pe[5]+Pe[8])/3,oe=(te+$+Me)/3,ce=[0,0,0,0,0,0,0,0];ce[S]++,ce[G]++,ce[Q]++;let Ne=ce.indexOf(Math.max(...ce)),ht=$e(Y*.045,j*.045),wt=$e(Y*.014+7.3,j*.014-3.1),Qe=$e(Y*.21,j*.21),Ht=s.waterLevel;if(Ne===sl||oe>22&&s.biome!=="desert")K.copy(_e);else if(Oe<.72||Ne===qi){let It=Math.floor(oe*.85+Qe*.9);K.copy(Ee[(It%Ee.length+Ee.length)%Ee.length]),Oe>=.55&&K.lerp(je[Math.abs(Math.floor(ht*7))%je.length],.55),K.multiplyScalar(It%2?.93:1.05),s.scenario==="canyon"&&K.lerp(He,.35),Oe>.64&&Ne!==qi&&K.lerp(pe[1],.3)}else if(Ne===Us)K.copy(se).multiplyScalar(.62+Math.max(0,Math.min(1,(oe-Ht+2.2)/2))*.3);else if(Ne===Xi)K.copy(se).lerp(pe[0],Math.max(0,Qe)*.25);else if(Ne===mi)K.copy(Z).lerp(pe[0],.1+Math.max(0,Qe)*.25);else if(Ne===rl)K.copy(se).lerp(Z,.35+ht*.4);else if(Ne===al)K.copy(qe).lerp(pe[0],Math.max(0,Qe)*.4);else{let It=Math.max(0,Math.min(.999,ht*.85+.5))*(pe.length-1),Ki=Math.floor(It);K.copy(pe[Ki]).lerp(pe[Math.min(pe.length-1,Ki+1)],It-Ki),wt>.1?K.lerp(fe,Math.min(.28,(wt-.1)*.7)):wt<-.15&&K.multiplyScalar(1+(wt+.15)*.35),s.flagAt(Y,j)&1&&K.lerp(ke,.45),s.hasWater&&oe<Ht+.5&&K.lerp(se,Math.min(1,(Ht+.5-oe)*1.4)),K.multiplyScalar(1+Math.max(-.05,Math.min(.08,oe/60))),oe>14&&s.biome!=="desert"&&K.lerp(_e,Math.min(1,(oe-14)/8))}let Kt=.965+n()*.07;K.r*=Kt,K.g*=Kt,K.b*=Kt;for(let It=0;It<3;It++)W[rt+It*3]=K.r,W[rt+It*3+1]=K.g,W[rt+It*3+2]=K.b;rt+=9};for(let Te=0;Te<U-1;Te++)for(let Ue=0;Ue<A-1;Ue++){let Ie=ee[Te*A+Ue],nt=ee[Te*A+Ue+1],Ae=ee[(Te+1)*A+Ue],P=ee[(Te+1)*A+Ue+1];xt(Ue,Te,Ue,Te+1,Ue+1,Te,Ie,Ae,nt),xt(Ue+1,Te+1,Ue+1,Te,Ue,Te+1,P,nt,Ae)}let O=new lt;O.setAttribute("position",new _t(k,3)),O.setAttribute("color",new _t(W,3)),O.computeVertexNormals();let Ut=new De(O,r);Ut.receiveShadow=!0,Ut.name="terrain",i.add(Ut),o.terrain=Ut}if(s.hasWater){let u=new rn(230,170,70,52).toNonIndexed();u.rotateX(-Math.PI/2);let b=new me(t.water);s.biome==="winter"&&b.lerp(new me(15266554),.35);let w=b.clone().lerp(new me(4176048),.4).multiplyScalar(1.05),A=b.clone().multiplyScalar(.62),U=u.attributes.position,N=new Float32Array(U.count*3),k=new me;for(let ee=0;ee<U.count;ee++){let K=s.waterLevel-s.terrainHeight(U.getX(ee),U.getZ(ee)),pe=Math.max(0,Math.min(1,K/2.2));k.copy(w).lerp(A,pe),K<.2&&k.lerp(new me(14677236),.14),N[ee*3]=k.r,N[ee*3+1]=k.g,N[ee*3+2]=k.b}u.setAttribute("color",new _t(N,3));let W=new Ma({vertexColors:!0,transparent:!0,opacity:.84,flatShading:!0,shininess:80,specular:10139848}),V=new De(u,W);V.position.y=s.waterLevel,V.receiveShadow=!0,i.add(V),o.water=V,o.waterBase=Float32Array.from(u.attributes.position.array)}let a=new ka,c=s.biome==="desert"?13808778:11840930,l=s.biome==="desert"?12097130:9406590,h=s.castle?Zn[s.castle.owner].colors.primary:9058858,d=(u,b,w,A,U,N=1.6,k=.8)=>{let W=Math.hypot(w-u,A-b),V=Math.floor(W/N);for(let ee=0;ee<=V;ee++){let K=ee/V;a.add(J.box(k,.9,k),l,u+(w-u)*K,U+.45,b+(A-b)*K)}};for(let u of s.structures){let b=s.terrainHeight(u.x,u.z);if(u.kind==="wall"){let w=Math.min(b,s.castle?s.castle.base:b)-1.5,A=u.h+(s.castle.base-w);a.add(J.box(u.w,A,u.d),ft(c,n,.03),u.x,w+A/2,u.z);let U=w+A;u.w>u.d?(d(u.x-u.w/2,u.z-u.d/2+.3,u.x+u.w/2,u.z-u.d/2+.3,U),d(u.x-u.w/2,u.z+u.d/2-.3,u.x+u.w/2,u.z+u.d/2-.3,U)):(d(u.x-u.w/2+.3,u.z-u.d/2,u.x-u.w/2+.3,u.z+u.d/2,U),d(u.x+u.w/2-.3,u.z-u.d/2,u.x+u.w/2-.3,u.z+u.d/2,U)),a.add(J.box(u.w+.2,.35,u.d+.2),l,u.x,w+A-1.2,u.z)}else if(u.kind==="tower"){let w=b-2,A=u.h+(s.castle.base-w)+1.5;a.add(J.cyl(u.r,u.r*1.12,A,8),ft(c,n,.03),u.x,w+A/2,u.z),a.add(J.cyl(u.r+.35,u.r+.35,.6,8),l,u.x,w+A,u.z);for(let U=0;U<8;U++){let N=U/8*Math.PI*2;a.add(J.box(.8,.9,.8),l,u.x+Math.cos(N)*(u.r+.1),w+A+.75,u.z+Math.sin(N)*(u.r+.1),0,-N)}a.add(J.cone(u.r+.6,u.small?3:4.2,8),ft(h,n,.05),u.x,w+A+(u.small?2.3:2.9),u.z);for(let U=0;U<3;U++){let N=n()*Math.PI*2;a.add(J.box(.25,.9,.3),2762274,u.x+Math.cos(N)*u.r,w+A*(.5+U*.12),u.z+Math.sin(N)*u.r,0,-N)}o.flags.push({x:u.x,y:w+A+(u.small?4:5.1),z:u.z,side:s.castle.owner,size:u.small?.7:1})}else if(u.kind==="gate"){let w=u.ref,A=s.castle.base;a.add(J.box(2.6,2.2,u.w+1),c,u.x,A+6.2,u.z),d(u.x,u.z-u.w/2,u.x,u.z+u.w/2,A+7.3,1.4,.7),a.add(J.box(2.8,.5,u.w+1.2),l,u.x,A+5.1,u.z);let U=new dt,N=new Ct({color:7030054,flatShading:!0}),k=new Ct({color:3814962,flatShading:!0});for(let W=0;W<6;W++){let V=new De(J.box(.35,5,u.w/6-.06),N);V.position.set(0,2.5,-u.w/2+(W+.5)*(u.w/6)),V.castShadow=!0,U.add(V)}for(let W of[1.2,3.8]){let V=new De(J.box(.45,.28,u.w),k);V.position.set(0,W,0),U.add(V)}U.position.set(u.x,A,u.z),i.add(U),o.gateMesh=U}else if(u.kind==="keep"){let w=b-1;a.add(J.box(u.w,u.h,u.d),ft(c,n,.02),u.x,w+u.h/2,u.z),a.add(J.box(u.w+.8,.6,u.d+.8),l,u.x,w+u.h,u.z),d(u.x-u.w/2,u.z-u.d/2,u.x+u.w/2,u.z-u.d/2,w+u.h+.3,1.5),d(u.x-u.w/2,u.z+u.d/2,u.x+u.w/2,u.z+u.d/2,w+u.h+.3,1.5),d(u.x-u.w/2,u.z-u.d/2,u.x-u.w/2,u.z+u.d/2,w+u.h+.3,1.5),d(u.x+u.w/2,u.z-u.d/2,u.x+u.w/2,u.z+u.d/2,w+u.h+.3,1.5),a.add(J.cyl(1.8,1.8,4,8),c,u.x+u.w/2-1.5,w+u.h+2,u.z-u.d/2+1.5),a.add(J.cone(2.4,3.4,8),h,u.x+u.w/2-1.5,w+u.h+5.7,u.z-u.d/2+1.5),a.add(J.box(1.6,2.6,.3),3811868,u.x-s.castle.face*-u.w/2,w+1.3,u.z,0,Math.PI/2);for(let A=0;A<4;A++)a.add(J.box(.3,1.2,.6),2762274,u.x+(A%2?1:-1)*u.w/2,w+u.h*.7,u.z+(A<2?-2:2));o.flags.push({x:u.x,y:w+u.h+6,z:u.z,side:s.castle.owner,size:1.8,big:!0}),a.add(J.cyl(.08,.08,6,4),5917242,u.x,w+u.h+3,u.z)}else if(u.kind==="house"){let w=[10111538,12097102,6121592],A=s.biome==="desert"?14731416:ft(15656140,n,.04),U=5913122,N=Math.sin(u.rot),k=Math.cos(u.rot);a.add(J.box(5,3,4),A,u.x,b+1.5,u.z,0,u.rot),a.add(J.box(5.3,.5,4.3),8024166,u.x,b+.2,u.z,0,u.rot);for(let W of[-2.45,2.45])a.add(J.box(.22,3,.22),U,u.x+k*W+N*2.02,b+1.5,u.z-N*W+k*2.02);a.add(J.box(5.05,.2,.2),U,u.x+N*2.03,b+2.2,u.z+k*2.03,0,u.rot),a.add(J.box(.2,.2,2.9),U,u.x+N*2.04,b+1.4,u.z+k*2.04,.9,u.rot+Math.PI/2),a.add(ix(6,5.2,2.2),s.biome==="winter"?15922937:w[(E=u.roof)!=null?E:0],u.x,b+3,u.z,0,u.rot),a.add(J.box(.95,1.7,.2),U,u.x+N*2.06,b+.85,u.z+k*2.06,0,u.rot);for(let W of[-1.5,1.5])a.add(J.box(.7,.6,.1),9418968,u.x+k*W+N*2.06,b+2,u.z-N*W+k*2.06,0,u.rot);a.add(J.box(.5,1.6,.5),9076856,u.x-k*1.5,b+4.6,u.z+N*1.5)}else u.kind==="well"&&(a.add(J.cyl(1.1,1.2,1,8),c,u.x,b+.5,u.z),a.add(J.cyl(.8,.8,.1,8),4026266,u.x,b+.95,u.z),a.add(J.box(.15,2.2,.15),7031344,u.x-1,b+1.6,u.z),a.add(J.box(.15,2.2,.15),7031344,u.x+1,b+1.6,u.z),a.add(J.cone(1.7,1,4),10111538,u.x,b+3,u.z,0,Math.PI/4))}for(let u of s.structures)if(u.kind==="hedge"){let b=Math.ceil(u.len/1.2);for(let w=0;w<=b;w++){let A=w/b-.5,U=u.x+Math.cos(u.rot)*A*u.len,N=u.z+Math.sin(u.rot)*A*u.len,k=s.terrainHeight(U,N);if(u.style==="hedge")a.add(J.ico(.85+n()*.25,0),ft(t.leaf[n()*t.leaf.length|0],n,.1).multiplyScalar(.8),U,k+.75,N,n()*3,n()*3,0,1,1.05,1);else if(u.style==="wall")a.add(J.box(1.3,1,.7),ft(c,n,.07),U,k+.45,N,0,-u.rot),a.add(J.box(1.25,.18,.85),l,U,k+1,N,0,-u.rot);else{let W=.6+n()*2.2;n()<.8?a.add(J.box(1.25,W,.8),ft(l,n,.08),U,k+W/2-.1,N,0,-u.rot):a.add(J.dode(.5),l,U,k+.2,N,n()*3)}}}else if(u.kind==="spire"){let b=s.terrainHeight(u.x,u.z),w=ft(t.cliff[0],n,.06);a.add(J.cyl(u.r*.35,u.r,u.h,6),w,u.x,b+u.h/2-.3,u.z,(n()-.5)*.1,n()*3,(n()-.5)*.1),a.add(J.cyl(u.r*.25,u.r*.4,u.h*.25,5),w.clone().multiplyScalar(1.08),u.x,b+u.h+u.h*.1,u.z,0,n()*3);for(let A=0;A<4;A++){let U=n()*6.28;a.add(J.dode(.4+n()*.5),w.clone().multiplyScalar(.9),u.x+Math.cos(U)*(u.r+.6),b+.2,u.z+Math.sin(U)*(u.r+.6),n()*3)}}for(let u of s.decor.stalls||[]){let b=s.terrainHeight(u.x,u.z),w=[12857387,3105732,14922817,5214010];a.add(J.box(2.2,.9,1.2),8084026,u.x,b+.45,u.z,0,u.rot);for(let[A,U]of[[-1,-.55],[1,-.55],[-1,.55],[1,.55]]){let N=u.x+Math.cos(u.rot)*A+Math.sin(u.rot)*U,k=u.z-Math.sin(u.rot)*A+Math.cos(u.rot)*U;a.add(J.box(.1,2.2,.1),5913122,N,b+1.1,k)}a.add(J.box(2.6,.1,1.6),w[u.col],u.x,b+2.25,u.z,.12,u.rot);for(let A=0;A<4;A++)a.add(J.ico(.16,0),[15245388,12857387,8372042,15917388][A],u.x-.7+A*.45,b+1,u.z,0,u.rot)}for(let u of s.bridges){let b=Math.atan2(u.sin,u.cos),w=12;for(let A=0;A<w;A++){let N=((A+.5)/w-.5)*u.len,k=u.y+(1-(N/(u.len/2))**2)*u.arch,W=u.x+u.cos*N,V=u.z+u.sin*N,ee=u.wood?ft(8016432,n,.08):ft(c,n,.04);if(a.add(J.box(u.len/w+.05,u.wood?.35:.8,u.width),ee,W,k-(u.wood?.18:.4),V,0,-b),u.wood)for(let K of[-1,1])a.add(J.box(.18,1.1,.18),5913122,W-u.sin*K*(u.width/2),k+.5,V+u.cos*K*(u.width/2));else for(let K of[-1,1])a.add(J.box(u.len/w+.05,.7,.35),l,W-u.sin*K*(u.width/2),k+.35,V+u.cos*K*(u.width/2),0,-b)}if(u.wood)for(let A of[-1,1])a.add(J.cyl(.05,.05,7,3),2762274,u.x-s.castle.face*3,u.y+3.2,u.z+A*(u.width/2-.2),0,0,s.castle.face*.9);else for(let A of[-.2,.2]){let U=u.x+u.cos*A*u.len,N=u.z+u.sin*A*u.len;a.add(J.box(1.6,3,u.width-.4),l,U,-1.2,N,0,-b)}}let f=t.leaf,p=t.pine;for(let u of s.decor.trees){let b=s.terrainHeight(u.x,u.z),w=u.s;switch(u.kind){case"pine":{let A=ft(p[n()*p.length|0],n,.08);a.add(J.cyl(.18*w,.28*w,1.6*w,5),t.trunk,u.x,b+.8*w,u.z),a.add(J.cone(1.7*w,2.4*w,7),A,u.x,b+2.4*w,u.z,0,u.rot),a.add(J.cone(1.35*w,2.1*w,7),A.clone().multiplyScalar(1.07),u.x,b+3.5*w,u.z,0,u.rot+.4),a.add(J.cone(.9*w,1.8*w,7),A.clone().multiplyScalar(1.13),u.x,b+4.5*w,u.z,0,u.rot+.8),s.biome==="winter"&&a.add(J.cone(.55*w,.8*w,7),16185851,u.x,b+5.1*w,u.z,0,u.rot);break}case"oak":{let A=ft(f[n()*f.length|0],n,.08);a.add(J.cyl(.22*w,.34*w,2.2*w,5),t.trunk,u.x,b+1.1*w,u.z),a.add(J.ico(1.5*w,0),A,u.x,b+3.2*w,u.z,u.rot,u.rot),a.add(J.ico(1*w,0),A.clone().multiplyScalar(1.1),u.x+.9*w,b+2.8*w,u.z+.4*w,u.rot),a.add(J.ico(1.05*w,0),A.clone().multiplyScalar(.92),u.x-.7*w,b+3*w,u.z-.6*w,u.rot);break}case"birch":{let A=ft(f[n()*f.length|0],n,.1).multiplyScalar(1.1);a.add(J.cyl(.14*w,.18*w,3*w,5),15262940,u.x,b+1.5*w,u.z),a.add(J.ico(1*w,0),A,u.x,b+3.4*w,u.z,u.rot,0,0,.9,1.4,.9);break}case"bare":{a.add(J.cyl(.14*w,.26*w,3*w,5),4864558,u.x,b+1.5*w,u.z);for(let A=0;A<3;A++)a.add(J.cyl(.05*w,.09*w,1.4*w,4),4864558,u.x,b+(2.2+A*.4)*w,u.z,.8,u.rot+A*2.1,0);break}case"palm":{let A=u.x,U=b,N=u.z,k=.25;for(let W=0;W<5;W++)a.add(J.cyl(.16*w,.2*w,.9*w,5),ft(t.trunk,n,.1),A,U+.45*w,N,0,0,k*(W/5)),A-=Math.sin(k*(W/5))*.9*w,U+=.88*w;for(let W=0;W<6;W++){let V=W/6*Math.PI*2+u.rot;a.add(J.box(.5*w,.06,2.2*w),ft(f[W%f.length],n,.08),A+Math.cos(V)*.9*w,U-.2*w,N+Math.sin(V)*.9*w,.35,-V+Math.PI/2,0)}break}case"cactus":{let A=ft(6261306,n,.08);a.add(J.cyl(.3*w,.34*w,2.4*w,6),A,u.x,b+1.2*w,u.z),a.add(J.cyl(.18*w,.2*w,1*w,6),A,u.x+.55*w,b+1.4*w,u.z),a.add(J.cyl(.18*w,.2*w,.9*w,6),A,u.x-.5*w,b+1.8*w,u.z);break}}}for(let u of s.decor.rocks){let b=s.terrainHeight(u.x,u.z),w=ft(t.rock[n()*t.rock.length|0],n,.06);a.add(J.dode(u.s),w,u.x,b+u.s*.3,u.z,u.rot,u.rot*2,0,1.2,u.big?1.5:.8,1),u.big&&a.add(J.dode(u.s*.6),w.clone().multiplyScalar(.9),u.x+u.s*.8,b+u.s*.2,u.z+.4,u.rot)}for(let u of s.decor.bushes){let b=s.terrainHeight(u.x,u.z);a.add(J.ico(.7*u.s,0),ft(f[n()*f.length|0],n,.1).multiplyScalar(.85),u.x,b+.35*u.s,u.z,n()*3,0,0,1.2,.8,1.2)}let x=new me(t.grass[2]).multiplyScalar(.85);for(let u of s.decor.tufts){let b=s.terrainHeight(u.x,u.z);for(let w=0;w<3;w++)a.add(J.cone(.09*u.s,.6*u.s,3),x,u.x+(w-1)*.12,b+.25*u.s,u.z+w%2*.1,(w-1)*.3,u.rot)}for(let u of s.decor.flowers){let b=s.terrainHeight(u.x,u.z);for(let w=0;w<4;w++)a.add(J.ico(.12,0),t.flower[u.c],u.x+(n()-.5)*1.2,b+.12,u.z+(n()-.5)*1.2)}for(let u of s.decor.menhirs){let b=s.terrainHeight(u.x,u.z);if(u.altar){a.add(J.box(3,.8,1.8),10262415,u.x,b+.4,u.z,0,.3);continue}u.fallen?a.add(J.box(1.1,u.h,.7),ft(9341572,n),u.x,b+.35,u.z,Math.PI/2-.1,u.rot):a.add(J.box(1.1,u.h,.7),ft(9341572,n),u.x,b+u.h/2-.2,u.z,(n()-.5)*.12,-u.rot,(n()-.5)*.12,1,1,1)}for(let u of s.decor.ruins){let b=s.terrainHeight(u.x,u.z);a.add(J.cyl(u.r,u.r*1.1,4.5,8),ft(c,n),u.x,b+2.2,u.z),a.add(J.cyl(u.r*.7,u.r*.8,6.5,6),ft(l,n),u.x+.4,b+3.5,u.z-.3,.1);for(let w=0;w<6;w++)a.add(J.dode(.5+n()*.5),l,u.x+(n()-.5)*7,b+.2,u.z+(n()-.5)*7,n()*3)}for(let u of s.decor.fences)for(let b=0;b<=u.len;b++){let w=u.x+Math.cos(u.rot)*b*1.6,A=u.z+Math.sin(u.rot)*b*1.6,U=s.terrainHeight(w,A);a.add(J.box(.16,1.1,.16),7031344,w,U+.5,A),b<u.len&&(a.add(J.box(1.6,.1,.08),8084026,w+Math.cos(u.rot)*.8,U+.75,A+Math.sin(u.rot)*.8,0,-u.rot),a.add(J.box(1.6,.1,.08),8084026,w+Math.cos(u.rot)*.8,U+.4,A+Math.sin(u.rot)*.8,0,-u.rot))}let y=new me(s.biome==="winter"?12101768:s.biome==="autumn"?11049554:7311166);for(let u of s.decor.reeds){let b=s.terrainHeight(u.x,u.z);for(let w=0;w<4;w++){let A=(n()-.5)*.8,U=(n()-.5)*.8,N=(1+n()*.7)*u.s;a.add(J.cyl(.03,.05,N,3),y,u.x+A,b+N/2,u.z+U,(n()-.5)*.3,0,(n()-.5)*.3),w===0&&a.add(J.cyl(.07,.07,.3,4),5913122,u.x+A,b+N+.1,u.z+U)}}for(let u of s.decor.lilies)a.add(J.cyl(.6*u.s,.6*u.s,.04,7),ft(5214010,n,.08),u.x,s.waterLevel+.1,u.z,0,n()*6),u.flower&&a.add(J.ico(.16,0),n()<.5?16183544:15895224,u.x+.2,s.waterLevel+.22,u.z);for(let u of s.decor.logs){let b=s.terrainHeight(u.x,u.z);a.add(J.cyl(.32,.36,u.len,6),6177584,u.x,b+.3,u.z,0,u.rot,Math.PI/2),a.add(J.cyl(.26,.26,.05,6),12096616,u.x+Math.cos(u.rot)*u.len/2,b+.3,u.z-Math.sin(u.rot)*u.len/2,0,u.rot,Math.PI/2),a.add(J.ico(.35,0),5208634,u.x,b+.55,u.z,0,0,0,1.4,.5,1)}for(let u of s.decor.mushrooms){let b=s.terrainHeight(u.x,u.z);for(let w=0;w<3;w++){let A=(n()-.5)*.7,U=(n()-.5)*.7,N=u.s*(.6+n()*.5);a.add(J.cyl(.05*N,.07*N,.3*N,5),15722194,u.x+A,b+.15*N,u.z+U),a.add(J.cone(.2*N,.16*N,6),u.red?12857387:11042894,u.x+A,b+.36*N,u.z+U)}}let g=s.biome==="winter"?[[15265523,14015972],[14673902,13226972],[15002608,12167320],[15791351,14410730]]:s.biome==="autumn"?[[14264634,12882478],[9071162,7295536],[12097082,10649392],[10133580,8818751]]:[[15124058,13938762],[8038474,6985278],[9071170,7624762],[11978842,10466378]];for(let u of s.decor.fields){let[b,w]=g[u.kind],A=Math.max(4,Math.round(u.d/1.1)),U=Math.cos(u.rot),N=Math.sin(u.rot);for(let k=0;k<A;k++){let W=(k-(A-1)/2)*(u.d/A),V=u.x-N*W,ee=u.z+U*W,K=s.terrainHeight(V,ee);a.add(J.box(u.w,.35,u.d/A*.82),k%2?b:w,V,K+.05,ee,0,-u.rot)}for(let k of[-1,1]){for(let ee=0;ee<=4;ee++){let K=(ee/4-.5)*u.w,pe=u.x+U*K-N*k*(u.d/2+.6),Ee=u.z+N*K+U*k*(u.d/2+.6);a.add(J.box(.15,.9,.15),7031344,pe,s.terrainHeight(pe,Ee)+.4,Ee)}let W=u.x-N*k*(u.d/2+.6),V=u.z+U*k*(u.d/2+.6);a.add(J.box(u.w,.08,.08),8084026,W,s.terrainHeight(W,V)+.65,V,0,-u.rot)}}for(let u of s.decor.farms){let b=s.terrainHeight(u.x,u.z);a.add(J.box(4.6,2.6,3.4),15721676,u.x,b+1.3,u.z,0,-u.rot),a.add(J.cone(3.6,2.2,4),10111538,u.x,b+3.7,u.z,0,Math.PI/4-u.rot,0,1,1,.8),a.add(J.box(.5,1.4,.5),9076856,u.x+1.2,b+3.8,u.z+.3),a.add(J.box(3.2,1.6,2.6),9067058,u.x+Math.cos(u.rot)*4.2,b+.8,u.z+Math.sin(u.rot)*4.2,0,-u.rot),a.add(J.cone(2.5,1.4,4),7027238,u.x+Math.cos(u.rot)*4.2,b+2.3,u.z+Math.sin(u.rot)*4.2,0,Math.PI/4-u.rot);for(let w=0;w<3;w++)a.add(J.cyl(.5,.5,.8,6),14268506,u.x-3+w*1.2,b+.4,u.z-3,Math.PI/2,w)}if(s.decor.mill){let u=s.decor.mill,b=s.terrainHeight(u.x,u.z);a.add(J.cyl(1.4,2.1,7,8),15721676,u.x,b+3.5,u.z),a.add(J.cone(2,2.6,8),10111538,u.x,b+8.3,u.z),a.add(J.box(1,1.8,.3),5913122,u.x+Math.sin(u.rot)*2,b+.9,u.z+Math.cos(u.rot)*2,0,u.rot);let w=new dt,A=new Ct({color:15260864,flatShading:!0}),U=new Ct({color:7031344,flatShading:!0});for(let k=0;k<4;k++){let W=new dt,V=new De(J.box(.2,5.2,.15),U);V.position.y=2.6;let ee=new De(J.box(1.3,3.8,.06),A);ee.position.set(.72,3.2,0),W.add(V,ee),W.rotation.z=k*Math.PI/2,w.add(W)}w.position.set(u.x+Math.sin(u.rot)*2.1,b+6.6,u.z+Math.cos(u.rot)*2.1),w.rotation.y=u.rot,w.traverse(k=>{k.castShadow=!0});let N=new dt;N.add(w),i.add(N),o.mill=w}for(let u of s.decor.tents){let b=s.terrainHeight(u.x,u.z),w=Zn[u.side].colors,A=u.big?1.4:1;a.add(J.cone(2.3*A,2.8*A,u.big?8:4),ft(u.big?w.primary:w.cloth===3816e3?5526620:15722194,n,.04),u.x,b+1.35*A,u.z,0,u.rot+Math.PI/4),a.add(J.cyl(.05,.05,1.4,3),5917242,u.x,b+3*A,u.z),a.add(J.box(.7,.45,.04),w.primary,u.x+.35,b+3.4*A,u.z)}for(let u of s.camps){if(!u)continue;let b=u.x+(u.x<0?-5:5),w=u.z,A=s.terrainHeight(b,w);for(let U=0;U<7;U++){let N=U/7*Math.PI*2;a.add(J.dode(.28),7170145,b+Math.cos(N)*.9,A+.1,w+Math.sin(N)*.9)}o.torches.push({x:b,y:A+.3,z:w,fire:!0})}for(let u of s.decor.torches)o.torches.push(u);let m=a.build(r);m&&i.add(m);let M=Zn.map(u=>new Ct({color:u.colors.banner,side:vt,flatShading:!0}));for(let u of o.flags){let b=new rn(2.2*u.size,1.3*u.size,4,1);b.translate(1.1*u.size,0,0);let w=new De(b,M[u.side]);w.position.set(u.x,u.y,u.z),w.userData.base=Float32Array.from(b.attributes.position.array),w.castShadow=!0,i.add(w);let A=new De(J.cyl(.06,.06,1.6*u.size+1,4),new Ct({color:4864554}));A.position.set(u.x,u.y-.3,u.z),i.add(A),u.mesh=w}let _=new ct({color:16753210}),v=new ct({color:16769146});for(let u of o.torches){let b=new dt,w=new De(J.cone(u.fire?.6:.22,u.fire?1.4:.6,5),_),A=new De(J.cone(u.fire?.35:.12,u.fire?.9:.4,5),v);if(w.position.y=u.fire?.6:.3,A.position.y=u.fire?.5:.26,b.add(w,A),!u.fire){let U=new De(J.cyl(.06,.06,.9,4),new Ct({color:4864554}));U.position.y=-.4,b.add(U)}b.position.set(u.x,u.y,u.z),i.add(b),u.mesh=b}let D=new Ct({color:16777215,flatShading:!0,emissive:3355443});for(let u=0;u<9;u++){let b=new dt,w=3+(n()*3|0);for(let U=0;U<w;U++){let N=new De(J.ico(2.5+n()*2.5,0),D);N.position.set(U*3.2-w*1.5,n()*1.5,(n()-.5)*3),N.scale.y=.6,b.add(N)}let A=u%2===0;b.position.set((n()-.5)*240,34+n()*12,(A?-1:1)*(72+n()*25)),b.userData.speed=.6+n()*.8,i.add(b),o.clouds.push(b)}let C=new ct({color:s.biome==="winter"?3817288:2763312,side:vt,fog:!0}),I=new lt;I.setAttribute("position",new Je([0,0,.3,0,0,-.3,1.1,0,0],3)),o.birds=[];for(let u=0;u<2;u++){let b=n()*6.28,w={cx:Math.cos(b)*80,cz:Math.sin(b)*58,r:14+n()*12,y:16+n()*8,sp:(.12+n()*.1)*(n()<.5?1:-1),ph:n()*6,list:[]};for(let A=0;A<6;A++){let U=new dt,N=new De(I,C),k=new De(I,C);k.scale.x=-1,U.add(N,k),U.scale.setScalar(.55),U.userData={l:N,r:k,off:[(n()-.5)*6,(n()-.5)*2,(n()-.5)*6],fl:n()*6},i.add(U),w.list.push(U)}o.birds.push(w)}let z={summer:{n:70,col:16773792,size:.1,fall:-.15,drift:.6,flutter:1.2},autumn:{n:160,col:14251818,size:.22,fall:1.1,drift:1.4,flutter:2.5,leaf:!0},winter:{n:420,col:16777215,size:.13,fall:2.2,drift:.6,flutter:.8},desert:{n:180,col:15257498,size:.12,fall:.1,drift:5,flutter:.4},spring:{n:140,col:16239068,size:.18,fall:.7,drift:1.2,flutter:2.2,leaf:!0,petals:!0},highland:{n:380,col:13162210,size:.05,fall:16,drift:2,flutter:.2,rain:!0}}[s.biome];if(z){let u=z.rain?new sn(.03,1.1,.03):z.leaf?new rn(z.size*2,z.size*1.3):new di(z.size,0),b=new ct({color:z.col,side:vt,transparent:s.biome==="desert"||z.rain,opacity:z.rain?.45:.6}),w=new ki(u,b,z.n);w.frustumCulled=!1,w.instanceMatrix.setUsage(pr);let A=[];for(let U=0;U<z.n;U++)A.push({x:(n()-.5)*90,y:n()*40,z:(n()-.5)*70,p:n()*6,s:.7+n()*.6});if(z.leaf){let U=(z.petals?[16239068,15902408,16777215]:t.leaf).map(N=>new me(N));for(let N=0;N<z.n;N++)w.setColorAt(N,U[N%U.length])}i.add(w),o.weather={mesh:w,parts:A,W:z}}return e.add(i),o}function pu(s,e,t,n){if(s.water){let i=s.water.geometry.attributes.position,r=i.array,o=s.waterBase;for(let a=0;a<r.length;a+=3){let c=o[a],l=o[a+2];r[a+1]=Math.sin(c*.35+e*1.3)*.08+Math.cos(l*.4+e*1.1)*.08}i.needsUpdate=!0,s.water.geometry.computeVertexNormals()}if(s.mill&&(s.mill.rotation.z+=t*.8),s.birds)for(let i of s.birds){i.ph+=i.sp*t;let r=i.cx+Math.cos(i.ph)*i.r,o=i.cz+Math.sin(i.ph)*i.r,a=Math.atan2(-Math.sin(i.ph)*i.sp,Math.cos(i.ph)*i.sp);for(let c of i.list){let l=c.userData;c.position.set(r+l.off[0],i.y+l.off[1]+Math.sin(e*.7+l.fl)*.6,o+l.off[2]),c.rotation.y=a+Math.PI/2*Math.sign(i.sp);let h=Math.sin(e*9+l.fl)*.6;l.l.rotation.z=h,l.r.rotation.z=-h}}if(s.weather&&s.camTarget){let{mesh:i,parts:r,W:o}=s.weather,a=s.camTarget.x,c=s.camTarget.z;for(let l=0;l<r.length;l++){let h=r[l];h.y-=o.fall*h.s*t,h.x+=(o.drift+Math.sin(e*o.flutter+h.p)*o.drift*.6)*t,h.z+=Math.cos(e*o.flutter*.8+h.p)*.5*t,h.y<0&&(h.y+=40),h.y>40&&(h.y-=40);let d=((h.x-a)%90+135)%90-45,f=((h.z-c)%70+105)%70-35,p=a+d,x=c+f,y=n.terrainHeight(p,x);o.rain?cl.setFromEuler(du.set(0,0,.15)):cl.setFromEuler(du.set(e*1.5+h.p,h.p,e*o.flutter+h.p)),uu.compose(sx.set(p,y+h.y*.9+.3,x),cl,rx.set(h.s,h.s,h.s)),i.setMatrixAt(l,uu)}i.instanceMatrix.needsUpdate=!0}for(let i of s.clouds)i.position.x+=i.userData.speed*t,i.position.x>130&&(i.position.x=-130);for(let i of s.flags){let r=i.mesh.geometry.attributes.position,o=i.mesh.userData.base;for(let a=0;a<r.count;a++){let c=o[a*3];r.array[a*3+2]=Math.sin(c*2-e*4+i.x)*.18*(c/2)}r.needsUpdate=!0}for(let i of s.torches){let r=.85+Math.sin(e*17+i.x)*.1+Math.sin(e*23+i.z)*.08;i.mesh.children[0].scale.set(1,r,1),i.mesh.children[1].scale.set(1,2-r,1)}if(s.gateMesh&&n.gate){let i=n.gate;i.alive?i.shake>0&&(i.shake-=t,s.gateMesh.position.x=i.x+Math.sin(e*60)*.06):(s.gateFall||(s.gateFall=0),s.gateFall=Math.min(1,s.gateFall+t*1.5),s.gateMesh.rotation.z=i.face*s.gateFall*1.45,s.gateMesh.position.y=n.castle.base-s.gateFall*.6)}}var Ns=(s,e,t)=>s<e?e:s>t?t:s,ll=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z);function mu(s){s.morale=100,s.stamina=100,s.routed=!1,s.routCount=0,s.pilumCD=4,s.meleeT=0,s.dmgIn=0,s.dmgOut=0,s.floatT={},s.attackers=[],s.surrounded=!1,s.flanked=0,s.rear=0,s.stillT=0}function gu(s,e){let t=1;return e.typeId==="legion"&&(t*=.8),e.typeId==="guard"&&(t*=.5),e.orders.formation==="block"&&(t*=.85),e.aura&&(t*=.85),t}function un(s,e,t,n="",i=3){let r=s.time;e.floatT[t]&&r-e.floatT[t]<i||(e.floatT[t]=r,s.events.push({type:"float",legion:e,text:t,cls:n}))}function Yi(s,e,t){e.alive&&(e.morale=Ns(e.morale-t*gu(s,e),0,100))}function xu(s){let e=s.typeId==="pike"?3:2,t=s.orders.formation==="wedge"?Math.max(4,s.cols*.8):s.cols;return Math.max(4,Math.min(s.count,Math.round(t*e)))}function yu(s,e){let t=1,n=1;return s.stamina<12?t*=.7:s.stamina<35&&(t*=.86),e.stamina<12&&(n*=.85),s.morale<30&&(t*=.8),e.morale<30&&(n*=.9),e.surrounded&&(n*=.8),e.routed&&(n*=.6),[t,n]}function vu(s){return s.stamina<12?.72:s.stamina<35?.87:1}function _u(s){return s.typeId==="pike"&&s.stillT>1.2&&!s.routed}function Mu(s,e){let t=s.legions;for(let n of t)n.attackers.length=0,n.aura=!1;for(let n of t)n.alive&&n.melee&&n.melee.alive&&n.melee.attackers.push(n);for(let n of t)if(!(!n.alive||n.typeId!=="guard"||n.routed))for(let i of t)i!==n&&i.alive&&i.side===n.side&&ll(i,n)<18&&(i.aura=!0);for(let n of t)n.alive&&(ax(s,n,e),ox(s,n,e))}function ax(s,e,t){let n=e.speedCur>.5;n?e.stillT=0:e.stillT+=t;let i;e.state==="melee"?i=-1.5:n?i=-(e.typeId==="cavalry"?2.3:1.25)*Ns(e.speedCur/e.T.speed,.2,1.2):i=e.state==="shoot"?2:4.5,e.stamina=Ns(e.stamina+i*t,0,100),e.stamina<12&&e.state!=="retreat"&&un(s,e,"ERSCH\xD6PFT","warn",12)}function ox(s,e,t){let n=Math.min(1,t*1.5);e.dmgInRate=(e.dmgInRate||0)*(1-n)+e.dmgIn/Math.max(t,.001)*n,e.dmgOutRate=(e.dmgOutRate||0)*(1-n)+e.dmgOut/Math.max(t,.001)*n,e.dmgIn=0,e.dmgOut=0;let i=0,r=0,o=[];for(let f of e.attackers){let p=s.flankMult(f,e);p>=1.6?r++:p>=1.3&&i++,o.push(Math.atan2(f.x-e.x,f.z-e.z))}let a=0;for(let f=0;f<o.length;f++)for(let p=f+1;p<o.length;p++){let x=Math.abs(o[f]-o[p])%(Math.PI*2);x>Math.PI&&(x=Math.PI*2-x),a=Math.max(a,x)}let c=e.surrounded;e.surrounded=o.length>=2&&a>1.9||r>0&&o.length>=2,e.flanked=i,e.rear=r,i&&un(s,e,"FLANKE!","bad"),r&&un(s,e,"R\xDCCKEN!","bad"),e.surrounded&&!c&&un(s,e,"UMZINGELT!","bad",5);let l=0,h=e.state==="melee"||e.attackers.length>0;if(e.routed)l=s.nearestEnemy(e,18)?1:5;else if(h){l-=1.2+i*4+r*7+(e.surrounded?7:0);let f=(e.dmgOutRate-e.dmgInRate)/(e.T.hp*1.5);l+=Ns(f,-3,2),e.melee&&s.map.getHeight(e.x,e.z)-s.map.getHeight(e.melee.x,e.melee.z)>1.5&&(l+=.6)}else l+=s.nearestEnemy(e,16)?.6:2.5;e.underFire>0&&(l-=1.2,e.underFire=Math.max(0,e.underFire-t*.5)),e.aura&&(l+=1.5),e.stamina<12&&(l-=.6),l<0&&(l*=gu(s,e));let d=Ns(100-(1-e.ratio)*35-e.routCount*15,35,100);if(e.morale=Ns(e.morale+l*t,0,Math.max(d,Math.min(e.morale,100))),e.morale>d&&l>0&&(e.morale=Math.max(d,e.morale-t*2)),!e.routed&&e.morale<30&&e.morale>0&&un(s,e,"WANKT","warn",8),!e.routed&&e.morale<=0&&e.state!=="regroup"){if(e.typeId==="guard"&&e.ratio>.3){e.morale=5;return}cx(s,e)}}function cx(s,e){e.routed=!0,e.routCount++,s.startRetreat(e,!0),un(s,e,"FLIEHT!","bad",6),s.events.push({type:"rout",side:e.side,legion:e});for(let t of s.legions)!t.alive||t===e||ll(t,e)>24||(t.side===e.side?Yi(s,t,10):t.morale=Math.min(100,t.morale+6))}function bu(s,e,t,n){Yi(s,e,100/e.maxCount*(n?1.1:1.6))}function wu(s,e){for(let t of s.legions)t.alive&&t.side===e.side&&ll(t,e)<26&&Yi(s,t,12)}function Su(s,e,t,n){let i=12*n*(e.orders.formation==="wedge"?1.2:1);Yi(s,t,i),un(s,t,n>=1.6?"STURM IN DEN R\xDCCKEN!":"STURMANGRIFF!","bad",4)}var Eu=1;function Tu(){Eu=1}function lx(s,e,t,n){let i=[];if(n==="wedge"){let a=0,c=0;for(;c<s;){let l=Math.min(1+a*2,s-c);for(let h=0;h<l;h++)i.push([(h-(l-1)/2)*t,a*t*.9]);c+=l,a++}}else{let a=e;n==="block"&&(a=Math.max(3,Math.ceil(Math.sqrt(s*1.1)))),a=Math.max(2,Math.min(a,s));let c=Math.ceil(s/a);for(let l=0;l<s;l++){let h=Math.floor(l/a),d=h===c-1?s-h*a:a,f=l%a;i.push([(f-(d-1)/2)*t,h*t])}}let r=0,o=0;for(let a of i)r=Math.max(r,a[1]),o=Math.max(o,Math.abs(a[0]));for(let a of i)a[1]-=r/2;return{slots:i,halfW:o+.7,halfD:r/2+.7}}var ks=class{constructor(e,t,n,i,r=1){this.id=Eu++,this.side=e,this.typeId=t,this.T=yn[t],this.maxCount=Math.max(20,Math.round(this.T.size*r)),this.count=this.maxCount,this.maxHp=this.maxCount*this.T.hp,this.hp=this.maxHp,this.x=n,this.z=i,this.face=e===0?Math.PI/2:-Math.PI/2,this.orders=iu(t),this.state="idle",this.path=[],this.target=null,this.melee=null,this.speedCur=0,this.vx=0,this.vz=0,this.kills=0,this.dealt=0,this.volleyT=Math.random()*1.5,this.chargeT=0,this.chargeReady=t==="cavalry",this.movedFast=0,this.repathT=0,this.retreated=0,this.regroupT=0,this.flankPlan=null,this.holdX=n,this.holdZ=i,this.lastHitT=99,this.underFire=0,this.cols=this.T.cols,this.formDirty=!0,this.soldiers=[],this.name=this.T.names[e],this.index=0,mu(this),this.buildSoldiers()}get alive(){return this.count>0}get ratio(){return this.count/this.maxCount}get isRanged(){return this.T.range>0}get fwdX(){return Math.sin(this.face)}get fwdZ(){return Math.cos(this.face)}buildSoldiers(){this.soldiers=[],this.layout();for(let e=0;e<this.maxCount;e++){let[t,n]=this.slotWorld(e);this.soldiers.push({x:t+(Math.random()-.5)*.3,z:n+(Math.random()-.5)*.3,y:0,yaw:this.face,alive:!0,slot:e,phase:Math.random()*6.28,swing:0,deadT:0,fall:Math.random()<.5?1:-1,walk:0,jx:(Math.random()-.5)*.25,jz:(Math.random()-.5)*.25,hit:0})}}layout(e=99){let t=this.T.cols,n=this.orders.formation;n==="line"&&this.typeId!=="cavalry"&&(t=Math.ceil(t*1.25));let i=this.T.spacing*(this.loose?1.35:1),r=Math.max(2,Math.floor(e*2/i));this.cols=Math.min(t,r);let o=this.cols<t&&n!=="block"?"line":n,a=lx(Math.max(1,this.count),this.cols,i,o);this.slots=a.slots,this.halfW=a.halfW,this.halfD=a.halfD,this.formDirty=!1}slotWorld(e){let t=this.slots[Math.min(e,this.slots.length-1)]||[0,0],n=this.fwdX,i=this.fwdZ,r=i,o=-n;return[this.x+r*t[0]-n*t[1],this.z+o*t[0]-i*t[1]]}support(e,t){let n=this.fwdX,i=this.fwdZ,r=Math.abs(e*n+t*i),o=Math.abs(e*i-t*n);return r*this.halfD+o*this.halfW}reassign(){let e=0,t=this.soldiers.filter(n=>n.alive).sort((n,i)=>n.slot-i.slot);for(let n of t)n.slot=e++;this.formDirty=!0}killSoldier(e,t,n){let i=null,r=1e9;for(let o of this.soldiers){if(!o.alive)continue;let a;n?a=Math.random():a=(o.x-e)**2+(o.z-t)**2+Math.random()*2,a<r&&(r=a,i=o)}if(i){i.alive=!1,i.deadT=1e-4;let o=i.x-e,a=i.z-t;i.yaw=Math.atan2(-o,-a)}return i}};var hl=class{constructor(){this.k=[],this.p=[]}push(e,t){let n=this.k,i=this.p,r=n.length;for(n.push(e),i.push(t);r>0;){let o=r-1>>1;if(i[o]<=t)break;n[r]=n[o],i[r]=i[o],r=o}n[r]=e,i[r]=t}pop(){let e=this.k,t=this.p,n=e[0],i=e.pop(),r=t.pop();if(e.length){let o=0,a=e.length;for(;;){let c=2*o+1;if(c>=a||(c+1<a&&t[c+1]<t[c]&&c++,t[c]>=r))break;e[o]=e[c],t[o]=t[c],o=c}e[o]=i,t[o]=r}return n}get size(){return this.k.length}},Fa=class{constructor(e){this.map=e;let t=e.gw*e.gd;this.g=new Float32Array(t),this.from=new Int32Array(t),this.stamp=new Uint32Array(t),this.closed=new Uint32Array(t),this.cur=1}cellBlocked(e,t){return!!this.map.blocked[e]}cellCost(e,t,n){let i=this.map,r=i.cost[e];i.flags[e]&8&&i.gate&&i.gate.alive&&t!==i.gate.owner&&(r+=5);let o=Math.min(4,Math.ceil(n/4));return i.clear[e]<o&&(r+=(o-i.clear[e])*.6),r}nearestFree(e,t){let n=this.map,i=n.gw,r=n.gd;if(e>=0&&!this.cellBlocked(e,t))return e;let o=e>=0?e%i:0,a=e>=0?e/i|0:0;for(let c=1;c<20;c++){let l=-1,h=1e9;for(let d=-c;d<=c;d++)for(let f=-c;f<=c;f++){if(Math.max(Math.abs(f),Math.abs(d))!==c)continue;let p=o+f,x=a+d;if(p<0||x<0||p>=i||x>=r)continue;let y=x*i+p;if(!this.cellBlocked(y,t)){let g=f*f+d*d;g<h&&(h=g,l=y)}}if(l>=0)return l}return-1}find(e,t,n,i,r,o=8){let a=this.map,c=a.gw,l=a.gd,h=this.nearestFree(a.cellIndex(e,t),r),d=this.nearestFree(a.cellIndex(n,i),r);if(h<0||d<0)return[[n,i]];if(h===d)return[[n,i]];let f=++this.cur,p=this.g,x=this.from,y=this.stamp,g=this.closed,m=d%c,M=d/c|0,_=A=>{let U=Math.abs(A%c-m),N=Math.abs((A/c|0)-M);return(U+N+(1.4142-2)*Math.min(U,N))*1},v=new hl;y[h]=f,p[h]=0,x[h]=-1,v.push(h,_(h));let D=!1,C=0,I=h,z=_(h);for(;v.size&&C++<24e3;){let A=v.pop();if(g[A]===f)continue;if(g[A]=f,A===d){D=!0;break}let U=_(A);U<z&&(z=U,I=A);let N=A%c,k=A/c|0;for(let W=0;W<8;W++){let V=hx[W],ee=ux[W],K=N+V,pe=k+ee;if(K<0||pe<0||K>=c||pe>=l)continue;let Ee=pe*c+K;if(this.cellBlocked(Ee,r)||g[Ee]===f||V&&ee&&(this.cellBlocked(k*c+K,r)||this.cellBlocked(pe*c+N,r)))continue;let je=p[A]+(V&&ee?1.4142:1)*this.cellCost(Ee,r,o);(y[Ee]!==f||je<p[Ee])&&(y[Ee]=f,p[Ee]=je,x[Ee]=A,v.push(Ee,je+_(Ee)))}}let E=D?d:I,u=[];for(let A=E;A>=0;A=x[A])u.push(A);u.reverse();let b=[],w=0;b.push(a.cellCenter(u[0]));for(let A=2;A<u.length;A++)this.lineFree(u[w],u[A],r,o)||(w=A-1,b.push(a.cellCenter(u[w])));return D?b.push([n,i]):b.push(a.cellCenter(E)),b.shift(),b}lineFree(e,t,n,i){let r=this.map,o=r.gw,a=e%o,c=e/o|0,l=t%o,h=t/o|0,d=Math.abs(l-a),f=Math.abs(h-c),p=a<l?1:-1,x=c<h?1:-1,y=d-f,g=r.cost[e],m=Math.min(3,Math.ceil(i/5));for(;;){let M=c*o+a;if(this.cellBlocked(M,n)||r.cost[M]>g+.4||r.clear[M]<m&&r.clear[e]>=m||r.flags[M]&8)return!1;if(a===l&&c===h)return!0;let _=2*y;_>-f&&(y-=f,a+=p),_<d&&(y+=d,c+=x)}}},hx=[1,-1,0,0,1,1,-1,-1],ux=[0,0,1,-1,1,-1,1,-1];var ul=Math.PI*2,dl=(s,e)=>{let t=(e-s)%ul;return t>Math.PI&&(t-=ul),t<-Math.PI&&(t+=ul),t},St=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),Fs=[0,0],Oa=class{constructor(e,t,n){this.map=e,this.legions=t,this.pf=new Fa(e),this.time=0,this.timeLimit=n.time,this.over=!1,this.winner=-1,this.reason="",this.events=[],this.volleys=[],this.arrows=[],this.thinkAcc=0,this.checkAcc=0,this.start=[0,0],this.lost=[0,0];for(let i of t)this.start[i.side]+=i.maxCount;this.started=!1,this.tod=pi[e.tod||"day"]||pi.day}enemiesOf(e){return this.legions.filter(t=>t.side!==e&&t.alive)}alliesOf(e){return this.legions.filter(t=>t.side===e&&t.alive)}begin(){this.started=!0;for(let e of this.legions)e.holdX=e.x,e.holdZ=e.z,e.startX=e.x,e.startZ=e.z,this.applyOrders(e);this.events.push({type:"horn"})}applyOrders(e){let t=e.orders;e.wp=[],e.wpIdx=0,e.path=[],e.formDirty=!0,t.move==="flankL"||t.move==="flankR"?e.wp=this.flankWaypoints(e,t.move==="flankL"?1:-1):t.move==="path"&&(e.wp=t.waypoints.map(n=>[n[0],n[1]])),t.move==="hold"&&this.started&&this.time>0&&(e.holdX=e.x,e.holdZ=e.z),e.state!=="retreat"&&e.state!=="regroup"&&e.state!=="dead"&&(e.state="idle")}planMove(e,t,n,i=null){if(e=e.filter(_=>_.alive),!e.length)return[];let r=0,o=0;for(let _ of e)r+=_.x,o+=_.z;r/=e.length,o/=e.length,i===null&&(i=Math.hypot(t-r,n-o)>1?Math.atan2(t-r,n-o):e[0].face);let a=Math.sin(i),c=Math.cos(i),l=c,h=-a,d=e.filter(_=>!_.isRanged&&_.typeId!=="cavalry"),f=e.filter(_=>_.isRanged),p=e.filter(_=>_.typeId==="cavalry"),x=d.slice();p.forEach((_,v)=>v%2?x.push(_):x.unshift(_));let y=f;x.length||(x=y,y=[]);let g=2.2,m=[],M=(_,v)=>{let C=(_.reduce((I,z)=>I+z.halfW*2,0)+g*(_.length-1))/2;for(let I of _){C-=I.halfW;let[z,E]=this.snapFree(t+l*C+a*v,n+h*C+c*v,I.side);m.push({L:I,x:z,z:E,face:i}),C-=I.halfW+g}};if(M(x,0),y.length){let _=Math.max(...x.map(D=>D.halfD)),v=Math.max(...y.map(D=>D.halfD));M(y,-(_+v+3))}return m}commandMove(e,t,n,i=null){let r=this.planMove(e,t,n,i),o=Math.min(...r.map(a=>a.L.T.speed));for(let a of r){let c=a.L;c.state==="retreat"||c.state==="regroup"||c.routed||c.lockedUntil&&this.time<c.lockedUntil||(c.orders.move="path",c.orders.waypoints=[[a.x,a.z]],c.cmd={x:a.x,z:a.z,face:a.face},c.cmdFace=null,c.moveOnly=!0,c.orders.delay=0,c.groupSpeed=r.length>1?o:null,c.melee&&(c.melee=null),this.applyOrders(c),c.target=null)}return r}commandAttack(e,t){for(let n of e)!n.alive||n.state==="retreat"||n.routed||n.lockedUntil&&this.time<n.lockedUntil||(this.clearCommand(n),n.orders.target="legion",n.orders.targetId=t.id,n.orders.move="advance",n.orders.delay=0,n.melee&&n.melee!==t&&(n.melee=null),this.applyOrders(n),n.target=t)}commandHalt(e){for(let t of e)!t.alive||t.state==="retreat"||(this.clearCommand(t),t.orders.move="hold",t.path=[],this.applyOrders(t),t.holdX=t.x,t.holdZ=t.z,t.cmdFace=t.face)}commandRetreat(e){for(let t of e)t.alive&&t.state!=="retreat"&&t.state!=="regroup"&&(this.clearCommand(t),this.startRetreat(t))}clearCommand(e){e.cmd=null,e.cmdFace=null,e.moveOnly=!1,e.groupSpeed=null}flankWaypoints(e,t){let n=this.enemiesOf(e.side),i=e.side===0?50:-50,r=0;if(n.length){i=0,r=0;for(let p of n)i+=p.x,r+=p.z;i/=n.length,r/=n.length}let o=i-e.x,a=r-e.z,c=Math.hypot(o,a)||1;o/=c,a/=c;let l=a*t,h=-o*t,d=[e.x+o*c*.38+l*24,e.z+a*c*.38+h*24],f=[i-o*4+l*17,r-a*4+h*17];return[d,f].map(p=>this.snapFree(p[0],p[1],e.side))}snapFree(e,t,n){e=an(e,-70,70),t=an(t,-46,46);let i=this.map,r=this.pf.nearestFree(i.cellIndex(e,t),n);return r<0?[e,t]:i.cellIndex(e,t)===r?[e,t]:i.cellCenter(r)}previewRoute(e){let t=e.orders,n=[[e.x,e.z]],i=e.x,r=e.z,o=(l,h)=>{let d=this.pf.find(i,r,l,h,e.side,e.halfW*2);for(let f of d)n.push(f);i=l,r=h},a=[];t.move==="flankL"||t.move==="flankR"?a=this.flankWaypoints(e,t.move==="flankL"?1:-1):t.move==="path"&&(a=t.waypoints);for(let l of a)o(l[0],l[1]);let c=null;if(t.move==="hold")this.isRangedInRange(e)&&(c=null);else if(t.target==="objective"&&this.map.objective)c=[this.map.objective.x,this.map.objective.z];else{let l=this.chooseTarget(e,[i,r]);if(l)if(e.isRanged){let h=l.x-i,d=l.z-r,f=Math.hypot(h,d),p=e.T.range*.8;f>p&&(c=[i+h/f*(f-p),r+d/f*(f-p)])}else c=[l.x,l.z]}return c&&o(c[0],c[1]),{pts:n,target:t.move!=="hold"?this.chooseTarget(e,[i,r]):null}}isRangedInRange(e){return e.isRanged}chooseTarget(e,t=null,n=1e9){let i=t?t[0]:e.x,r=t?t[1]:e.z,o=e.orders,a=null,c=1e9,l=this.enemiesOf(e.side);if(o.target==="legion"){let h=l.find(d=>d.id===o.targetId);if(h&&Math.hypot(h.x-i,h.z-r)<Math.max(n,40))return h}for(let h of l){let d=Math.hypot(h.x-i,h.z-r);if(d>n)continue;let f=d;switch(o.target){case"weakest":f=h.count*1.6+d*.35;break;case"strongest":f=-h.count*1.6+d*.35;break;case"ranged":f=d+(h.isRanged?0:55);break;case"objective":{let p=this.map.objective;p&&(f=Math.hypot(h.x-p.x,h.z-p.z)+d*.3);break}}h.state==="retreat"&&(f+=30),e.typeId==="cavalry"&&h.typeId==="pike"&&e.aiSmart&&(f+=45),e.aiSmart&&h.inCastleCover&&(f+=20),e.aiSmart&&!e.isRanged&&h.melee&&h.melee.side===e.side&&(f-=14),h.routed&&(f+=25),f<c&&(c=f,a=h)}return a}aggroRadius(e){let t=e.orders.stance,n=t==="aggressive"?24:t==="defensive"?10:16;return(e.orders.move==="flankL"||e.orders.move==="flankR")&&e.wp&&e.wpIdx<e.wp.length&&(n=7),e.isRanged&&(n=this.rangeOf(e)),n*(e.isRanged?1:this.tod.sight)}nearestEnemy(e,t,n){let i=null,r=t;for(let o of this.legions){if(o.side===e.side||!o.alive||n&&!n(o))continue;let a=St(e,o)-o.support((e.x-o.x)/(St(e,o)||1),(e.z-o.z)/(St(e,o)||1));a<r&&(r=a,i=o)}return i}contactDist(e,t){let n=St(e,t)||.001,i=(t.x-e.x)/n,r=(t.z-e.z)/n;return e.support(i,r)+t.support(i,r)+.5}step(e){if(this.over)return;this.time+=e,this.thinkAcc+=e;let t=this.thinkAcc>.25;t&&(this.thinkAcc=0);let n=this.order||(this.order=this.legions.slice());for(let i=n.length-1;i>0;i--){let r=Math.random()*(i+1)|0,o=n[i];n[i]=n[r],n[r]=o}for(let i of n)i.alive&&(t&&this.think(i),this.act(i,e));if(this.separate(e),Mu(this,e),this.resolveVolleys(),this.soldiersInStep!==!1)for(let i of this.legions)this.updateSoldiers(i,e);this.arrows=this.arrows.filter(i=>this.time<i.t0+i.dur+.05),this.checkAcc+=e,this.checkAcc>.2&&(this.updateObjective(this.checkAcc),this.checkAcc=0,this.checkVictory())}think(e){let t=e.orders,n=this.map;if(e.inCastleCover=n.castle&&n.castle.owner===e.side&&n.inCastle(e.x,e.z),e.state!=="retreat"&&e.state!=="regroup"&&t.retreatAt>0){let c=t.retreatAt/(1+e.retreated*1.5);if(e.ratio<=c){this.startRetreat(e);return}}if(e.state==="retreat"||e.state==="regroup"||e.routed)return;if(e.withdrawT>0&&e.withdraw){this.moveTo(e,e.withdraw[0],e.withdraw[1],"move");return}if(e.melee){let c=e.melee;if(!c.alive||St(e,c)>this.contactDist(e,c)+3.5||c.state==="retreat"&&e.orders.stance==="defensive")e.melee=null,e.state="idle";else{e.state="melee";return}}let i=this.legions.find(c=>c.alive&&c.side!==e.side&&c.melee===e);if(i&&!e.isRanged){e.melee=i,e.state="melee";return}if(i&&e.isRanged&&St(e,i)<this.contactDist(e,i)+.5){e.melee=i,e.state="melee";return}if(n.gate&&n.gate.alive&&e.side!==n.gate.owner&&e.state!=="breach"&&!e.isRanged&&Math.hypot(n.gate.x-e.x,n.gate.z-e.z)<e.halfD+11&&this.wantsInside(e)&&this.legions.some(c=>c!==e&&c.side===e.side&&c.state==="breach")&&(e.state="breach",e.path=[]),e.state==="breach"&&n.gate&&n.gate.alive){let c=this.nearestEnemy(e,3);c&&this.engage(e,c);return}if(e.lockedUntil&&this.time<e.lockedUntil){e.state="wait";return}if(e.lockedUntil&&!e.arrived&&(e.arrived=!0,this.events.push({type:"reserve",legion:e})),this.time<t.delay&&e.lastHitT>1.5){e.state="wait";return}if(e.isRanged)return this.thinkRanged(e);let r=this.aggroRadius(e);if(e.cmd&&e.wp&&e.wpIdx>=e.wp.length){e.orders.move="hold",e.holdX=e.cmd.x,e.holdZ=e.cmd.z,e.cmdFace=e.cmd.face,e.cmd=null,e.moveOnly=!1,e.groupSpeed=null,e.wp=[],e.state="hold",e.path=[];return}if(e.wp&&e.wpIdx<e.wp.length){if(!e.moveOnly){if(this.keepEngaging(e,r))return;let l=this.nearestEnemy(e,r);if(l){this.engage(e,l);return}}let c=e.wp[e.wpIdx];if(Math.hypot(c[0]-e.x,c[1]-e.z)<(e.cmd?2.4:4)){e.wpIdx++,e.path=[];return}this.moveTo(e,c[0],c[1],"move");return}if(t.move==="hold"){if(this.keepEngaging(e,r,!0))return;let c=this.nearestEnemy(e,r);if(c&&Math.hypot(c.x-e.holdX,c.z-e.holdZ)<r+10){this.engage(e,c);return}Math.hypot(e.holdX-e.x,e.holdZ-e.z)>2.5?this.moveTo(e,e.holdX,e.holdZ,"move"):(e.state="hold",e.path=[]);return}let o=n.objective;if(t.target==="objective"&&o){if(this.keepEngaging(e,Math.min(r,12)))return;let c=this.nearestEnemy(e,Math.min(r,12));if(c){this.engage(e,c);return}if(Math.hypot(o.x-e.x,o.z-e.z)>o.r*.5)this.moveTo(e,o.x,o.z,"move");else{let h=this.nearestEnemy(e,22);h?this.engage(e,h):(e.state="hold",e.path=[])}return}let a=this.nearestEnemy(e,Math.min(r,9));a||(a=this.chooseTarget(e)),a?this.engage(e,a):(e.state="idle",e.path=[])}rangeOf(e,t=null){let n=this.map.getHeight(e.x,e.z),i=t?this.map.getHeight(t.x,t.z):1;return e.T.range*(n-i>2?1.2:1)*this.tod.range}thinkRanged(e){let t=e.orders,n=this.rangeOf(e);if(t.skirmish&&!e.moveOnly){let a=this.nearestEnemy(e,9,c=>!c.isRanged&&c.state!=="retreat");if(a){let c=e.x-a.x,l=e.z-a.z,h=Math.hypot(c,l)||1,d=e.x+c/h*12,f=e.z+l/h*12;if(this.map.isPassable(d,f,e.side)&&a.typeId!=="cavalry"){this.moveTo(e,d,f,"kite"),e.target=a;return}}}let i=null,r=this.chooseTarget(e,null,n);if(r&&(i=r),e.cmd&&e.wp&&e.wpIdx>=e.wp.length){e.orders.move="hold",e.holdX=e.cmd.x,e.holdZ=e.cmd.z,e.cmdFace=e.cmd.face,e.cmd=null,e.moveOnly=!1,e.groupSpeed=null,e.wp=[],e.state="hold",e.path=[];return}if(e.wp&&e.wpIdx<e.wp.length){if(!e.moveOnly&&i&&St(e,i)<n*.9){e.target=i,e.state="shoot",e.path=[];return}let a=e.wp[e.wpIdx];if(Math.hypot(a[0]-e.x,a[1]-e.z)<(e.cmd?2.4:4)){e.wpIdx++,e.path=[];return}this.moveTo(e,a[0],a[1],"move");return}if(i){e.target=i,e.state="shoot",e.path=[];return}if(t.move==="hold"){Math.hypot(e.holdX-e.x,e.holdZ-e.z)>2.5?this.moveTo(e,e.holdX,e.holdZ,"move"):(e.state="hold",e.path=[]);return}let o=this.chooseTarget(e);if(t.target==="objective"&&this.map.objective&&(!o||St(e,o)>n*1.4)){let a=this.map.objective;if(Math.hypot(a.x-e.x,a.z-e.z)>n*.6){this.moveTo(e,a.x,a.z,"move");return}}if(o){e.target=o;let a=o.x-e.x,c=o.z-e.z,l=Math.hypot(a,c),h=n*.82;this.moveTo(e,e.x+a/l*(l-h+1),e.z+c/l*(l-h+1),"move")}else e.state="idle",e.path=[]}keepEngaging(e,t,n=!1){let i=e.target;return e.state!=="engage"||!i||!i.alive||i.state==="retreat"||St(e,i)-i.support((e.x-i.x)/(St(e,i)||1),(e.z-i.z)/(St(e,i)||1))>t+8||n&&Math.hypot(i.x-e.holdX,i.z-e.holdZ)>t+18?!1:(this.engage(e,i),!0)}wantsInside(e){let t=this.map;if(!t.castle)return!1;if(e.orders.target==="objective")return!0;let n=e.target;return n&&n.alive&&t.inCastle(n.x,n.z)?!0:!!(e.pathGoal&&t.inCastle(e.pathGoal[0],e.pathGoal[1]))}engage(e,t){e.target=t;let n=this.contactDist(e,t);if(St(e,t)<n){this.startMelee(e,t);return}this.moveTo(e,t.x,t.z,"engage",t)}moveTo(e,t,n,i,r=null){e.state=i;let o=e.pathGoal,a=!o||Math.hypot(o[0]-t,o[1]-n)>(r?3:1);e.repathT-=.25,(!e.path.length||a||e.repathT<=0)&&(e.path=this.pf.find(e.x,e.z,t,n,e.side,e.halfW*2),e.pathGoal=[t,n],e.repathT=r?1.2:4)}startMelee(e,t){e.melee=t,e.state="melee",e.path=[],e.meleeT=0;let n=St(e,t)||1;if(e.typeId==="cavalry"&&e.chargeReady&&e.speedCur>e.T.speed*.55){e.chargeReady=!1,e.movedFast=0;let i=this.flankMult(e,t);if(_u(t)&&i<1.3)this.damage(e,e.count*1.3,t,!1),Yi(this,e,18),un(this,t,"SPEERWALL!","good",4),this.events.push({type:"impact",x:(e.x+t.x)/2,z:(e.z+t.z)/2,big:!1,broken:!0});else{e.chargeT=2.8;let r=i,o=e.orders.formation==="wedge"?1.25:1;Su(this,e,t,r),this.damage(t,e.count*1.05*r*o,e,!1),this.events.push({type:"impact",x:(e.x+t.x)/2,z:(e.z+t.z)/2,big:!0}),t.knock={x:(t.x-e.x)/n,z:(t.z-e.z)/n,t:.5}}}!t.melee&&t.state!=="retreat"&&t.alive&&(t.melee=e,t.state="melee"),this.events.push({type:"clash",x:(e.x+t.x)/2,z:(e.z+t.z)/2})}startRetreat(e,t=!1){e.state="retreat",e.melee=null,t||e.retreated++,e.target=null,e.withdrawT=0;let n,i,r=e.orders,o=this.map.camps[e.side];if(n=o.x+(e.side===0?6:-6),i=o.z,r.retreatTo==="ally"&&!t){let a=null,c=1e9;for(let l of this.alliesOf(e.side)){if(l===e||l.state==="retreat")continue;let h=St(e,l);h<c&&(c=h,a=l)}if(a){let l=this.enemiesOf(e.side),h=0,d=0;for(let y of l)h+=y.x,d+=y.z;l.length&&(h/=l.length,d/=l.length);let f=a.x-h,p=a.z-d,x=Math.hypot(f,p)||1;n=a.x+f/x*10,i=a.z+p/x*10}}if(this.map.castle&&this.map.castle.owner===e.side){let a=this.map.objective;n=a.x,i=a.z}[n,i]=this.snapFree(n,i,e.side),e.retreatGoal=[n,i],e.path=this.pf.find(e.x,e.z,n,i,e.side,e.halfW*2),this.events.push({type:"retreat",side:e.side,legion:e})}act(e,t){e.lastHitT+=t,e.chargeT-=t,e.pilumCD-=t,e.withdrawT>0&&(e.withdrawT-=t,e.withdrawT<=0&&(e.withdraw=null)),e.knock&&(e.knock.t-=t,e.knock.t<=0&&(e.knock=null));let n=this.map,i=e.T,r=0,o=null;switch(e.typeId==="cavalry"&&!e.chargeReady&&!e.melee&&(e.speedCur>i.speed*.6&&(e.movedFast+=t),e.movedFast>1.6&&(e.chargeReady=!0)),e.state){case"melee":{let a=e.melee;if(!a||!a.alive){e.melee=null,e.state="idle";break}o=a;let c=this.contactDist(e,a);if(St(e,a)>c-.2&&(r=Math.min(i.speed,1.6),this.stepToward(e,a.x,a.z,r,t)),this.dealMelee(e,a,t),e.meleeT+=t,e.typeId==="cavalry"&&e.meleeT>4.5&&e.orders.stance!=="defensive"&&e.stamina>22&&!a.routed&&a.state!=="retreat"&&!e.surrounded&&!e.moveOnly){let h=e.x-a.x,d=e.z-a.z,f=Math.hypot(h,d)||1;e.withdraw=this.snapFree(e.x+h/f*18,e.z+d/f*18,e.side),e.withdrawT=3.6,e.melee=null,a.melee===e&&(a.melee=null),e.state="move",e.path=this.pf.find(e.x,e.z,e.withdraw[0],e.withdraw[1],e.side,4),un(this,e,"HIT & RUN","good",6)}break}case"shoot":{let a=e.target;if(!a||!a.alive){e.state="idle";break}if(o=a,St(e,a)>this.rangeOf(e,a)*1.05){e.state="idle";break}e.volleyT-=t,e.volleyT<=0&&(this.fireVolley(e,a),e.volleyT=i.volley*(.9+Math.random()*.2));break}case"retreat":{r=i.speed*(e.routed?1.2:1.12),this.followPath(e,r,t)&&(e.state="regroup",e.regroupT=7);break}case"regroup":{e.regroupT-=t,e.hp=Math.min(e.count*i.hp,e.hp+i.hp*.25*t);let a=this.nearestEnemy(e,4);if(a){e.melee=a,e.state="melee";break}if(e.regroupT<=0){if(e.routed){if(e.morale<40){e.regroupT=2;break}e.routed=!1,un(this,e,"GESAMMELT","good",5)}e.holdX=e.x,e.holdZ=e.z,e.orders.afterRetreat==="hold"&&(e.orders.move="hold"),e.wp=[],e.wpIdx=0,e.state="idle",this.events.push({type:"rally",legion:e})}break}case"move":case"engage":case"kite":{if(r=i.speed,e.state==="engage"&&e.target&&e.target.alive){let a=e.target,c=St(e,a)-this.contactDist(e,a);if(e.typeId==="legion"&&e.pilumCD<=0&&c<8&&c>.5&&!a.routed&&this.throwPilum(e,a),c<0){this.startMelee(e,a);break}}if(e.isRanged&&e.target&&e.target.alive&&St(e,e.target)<i.range*.95&&e.state!=="kite"){e.state="shoot",e.path=[];break}this.followPath(e,r,t)&&(e.path=[]);break}case"breach":{let a=n.gate;if(!a||!a.alive){e.state="idle";break}o={x:a.x,z:a.z};let c=Math.hypot(a.x-e.x,a.z-e.z);if(c>e.halfD+4&&this.stepToward(e,a.x,a.z,1.4,t),c>e.halfD+12){e.state="idle";break}let l=e.count*i.atk*.09*(e.typeId==="guard"?1.3:e.typeId==="cavalry"?.5:e.typeId==="archer"?.3:1);if(a.hp-=l*t,a.shake=.25,e.gateHitT=(e.gateHitT||0)-t,e.gateHitT<=0&&(e.gateHitT=.7,this.events.push({type:"gatehit",x:a.x,z:a.z})),a.hp<=0){a.hp=0,a.alive=!1,this.events.push({type:"gatebroken",x:a.x,z:a.z});for(let d of this.legions)d.path=[]}let h=this.nearestEnemy(e,3);h&&this.engage(e,h);break}case"hold":case"idle":case"wait":default:{let a=this.nearestEnemy(e,e.cmdFace!=null?18:45);a?o=a:e.cmdFace!=null&&(o={x:e.x+Math.sin(e.cmdFace)*10,z:e.z+Math.cos(e.cmdFace)*10});break}}if(e.state!=="move"&&e.state!=="engage"&&e.state!=="retreat"&&e.state!=="kite"&&e.state!=="melee"&&e.state!=="breach"&&(e.speedCur=Math.max(0,e.speedCur-6*t)),o&&this.turnToward(e,Math.atan2(o.x-e.x,o.z-e.z),t),e.knock){let a=e.x+e.knock.x*2.2*t,c=e.z+e.knock.z*2.2*t;n.isPassable(a,c,e.side)&&(e.x=a,e.z=c)}if(e.clearT=(e.clearT||0)-t,e.clearT<=0||e.formDirty){e.clearT=.4;let a=this.map.clearanceAt(e.x,e.z),l=e.state==="move"||e.state==="engage"||e.state==="retreat"||e.state==="kite"?a+1:99,h=e.cols,d=!!(this.map.flagAt(e.x,e.z)&1)||this.map.treesNear(e.x,e.z,Math.max(e.halfW,e.halfD))>2;d!==!!e.loose&&(e.loose=d,e.formDirty=!0),(e.formDirty||l!==e.lastClear)&&(e.lastClear=l,e.layout(l),h!==e.cols&&(e.formDirty=!1))}}turnToward(e,t,n){let i=e.typeId==="cavalry"?2.6:e.isRanged?2.2:1.8,r=dl(e.face,t),o=an(r,-i*n,i*n);e.face+=o}stepToward(e,t,n,i,r){let o=t-e.x,a=n-e.z,c=Math.hypot(o,a);if(c<.01)return;let l=Math.min(c,i*r),h=e.x+o/c*l,d=e.z+a/c*l;this.map.isPassable(h,d,e.side)&&(e.x=h,e.z=d)}followPath(e,t,n){let i=this.map;if(!e.path.length)return!0;let r=e.path[0],o=r[0]-e.x,a=r[1]-e.z,c=Math.hypot(o,a),l=e.path.length===1?e.state==="retreat"?3.5:1.8:e.blockCool>0?.5:1.6;if(c<l)return e.path.shift(),e.path.length===0;if(e.progT=(e.progT||0)+n,e.progT>1.2){let D=e.progX===void 0?99:Math.hypot(e.x-e.progX,e.z-e.progZ);if(e.progX=e.x,e.progZ=e.z,e.progT=0,D<.35){let C=e.path[e.path.length-1];if(Math.hypot(C[0]-e.x,C[1]-e.z)<7)return e.path=[],(e.orders.move==="hold"||e.state==="move")&&(e.holdX=e.x,e.holdZ=e.z),e.wp&&e.wpIdx<e.wp.length&&Math.hypot(e.wp[e.wpIdx][0]-C[0],e.wp[e.wpIdx][1]-C[1])<3&&e.wpIdx++,e.cmd&&(e.cmd.x=e.x,e.cmd.z=e.z),!0;let z=this.pf.nearestFree(i.cellIndex(e.x+(Math.random()-.5)*4,e.z+(Math.random()-.5)*4),e.side),E=this.pf.find(e.x,e.z,C[0],C[1],e.side,2);return z>=0&&E.unshift(i.cellCenter(z)),e.path=E,e.blockCool=1.2,!1}}if(o/=c,a/=c,e.path.length>1&&c<5){let D=e.path[1],C=D[0]-e.x,I=D[1]-e.z,z=Math.hypot(C,I)||1,E=o*(C/z)+a*(I/z),u=E>0?(1-c/5)*.6*E:0;o=o*(1-u)+C/z*u,a=a*(1-u)+I/z*u;let b=Math.hypot(o,a)||1;o/=b,a/=b}let h=i.flagAt(e.x,e.z),d=t;h&1&&(d*=.72),h&2&&(d*=.55),e.orders.formation==="block"&&(d*=.9),e.orders.stance==="aggressive"&&(d*=1.05),e.groupSpeed&&e.state!=="retreat"&&(d=Math.min(d,e.groupSpeed)),d*=vu(e);let f=i.getHeight(e.x,e.z);i.getHeight(e.x+o*2,e.z+a*2)-f>.4&&(d*=.8),e.path.length===1&&(d*=an(c/5,.35,1));let x=Math.atan2(o,a),y=dl(e.face,x);this.turnToward(e,x,n);let g=Math.abs(y);if(e.blockCool=Math.max(0,(e.blockCool||0)-n),g<1.3&&c>l*2&&e.blockCool<=0){let D=Math.sin(e.face),C=Math.cos(e.face);o=o*.55+D*.45,a=a*.55+C*.45;let I=Math.hypot(o,a)||1;o/=I,a/=I}e.blockCool<=0&&(d*=g<1.3?.55+.45*Math.cos(y):.5),e.speedCur+=an(d-e.speedCur,-5*n,2.4*n);let m=Math.min(c,e.speedCur*n),M=e.x+o*m,_=e.z+a*m,v=i.gate;if(v&&v.alive&&e.side!==v.owner){let D=i.cellIndex(M+o*(e.halfD+1),_+a*(e.halfD+1));if(D>=0&&i.flags[D]&8)return e.state="breach",this.events.push({type:"breach",legion:e}),!1}if(i.isPassable(M,_,e.side))e.x=M,e.z=_,e.blockT=0;else if(i.isPassable(M,e.z,e.side)?e.x=M:i.isPassable(e.x,_,e.side)&&(e.z=_),e.blockT=(e.blockT||0)+n,e.blockCool=1.2,e.blockT>.35){e.blockT=0;let D=e.state==="retreat"&&e.retreatGoal?e.retreatGoal:e.path[e.path.length-1],C=this.pf.find(e.x,e.z,D[0],D[1],e.side,e.halfW*2),I=this.pf.nearestFree(i.cellIndex(e.x,e.z),e.side);I>=0&&C.unshift(i.cellCenter(I)),e.path=C}return!1}flankMult(e,t){let n=e.x-t.x,i=e.z-t.z,r=Math.hypot(n,i)||1,o=n/r*t.fwdX+i/r*t.fwdZ;return o<-.45?1.6:o<.4?1.3:1}mods(e,t,n){let i=1,r=1,o=e.orders,a=t.orders;o.stance==="aggressive"?i*=1.15:o.stance==="defensive"&&(i*=.9),a.stance==="aggressive"?r*=.9:a.stance==="defensive"&&(r*=1.2),o.formation==="wedge"&&(i*=1.1),a.formation==="wedge"&&(r*=.9),o.formation==="block"&&(i*=.95),a.formation==="block"&&(r*=1.15);let c=this.map,l=c.getHeight(e.x,e.z),h=c.getHeight(t.x,t.z);l-h>1.5?i*=1.2:h-l>1.5&&(i*=.85),c.castle&&c.castle.owner===t.side&&c.inCastle(t.x,t.z)&&(r*=n&&!c.inCastle(e.x,e.z)?1.6:1.3);let d=c.flagAt(t.x,t.z);d&2&&(r*=.75),n&&d&1&&(r*=1.6),t.state==="retreat"&&!t.routed&&(r*=.6),t.state==="breach"&&(r*=.85);let[f,p]=yu(e,t);return[i*f,r*p]}dealMelee(e,t,n){let i=e.T,[r,o]=this.mods(e,t,!1);e.typeId==="pike"&&t.typeId==="cavalry"&&(r*=i.vsCav),e.typeId==="cavalry"&&(t.isRanged||t.routed||t.state==="retreat")&&(r*=1.5),e.chargeT>0&&(r*=i.charge||1);let a=this.flankMult(e,t);r*=a,t.typeId==="pike"&&a>1&&(r*=1.25),e.isRanged&&(r*=.9);let l=xu(e)*i.atk*.14*r/(1+t.T.def*o*.22)*n;this.damage(t,l,e,!1),e.clashT=(e.clashT||0)-n,e.clashT<=0&&(e.clashT=.35+Math.random()*.5,this.events.push({type:"clash",x:(e.x+t.x)/2+(Math.random()-.5)*e.halfW,z:(e.z+t.z)/2+(Math.random()-.5)*2,soft:!0}))}fireVolley(e,t){let n=e.T,i=St(e,t),r=(.46-.24*Math.min(1,i/n.range))*this.tod.acc*(this.map.biome==="highland"?.9:1);t.melee&&(r*=.75);let[o,a]=this.mods(e,t,!0),l=e.count*r,h=t.T.arrowResist||1;t.typeId==="legion"&&t.orders.formation==="block"&&(h*=.5);let d=l*n.arrowDmg*o*h/(1+t.T.def*a*.12),f=.9+i/40;this.volleys.push({A:e,B:t,dmg:d,t:this.time+f,morale:l*.45});let p=e.soldiers.filter(y=>y.alive),x=Math.min(p.length,18);for(let y=0;y<x;y++){let g=p[(y*7+Math.random()*3|0)%p.length];g.shoot=.6;let m=t.soldiers.filter(_=>_.alive),M=m.length?m[Math.random()*m.length|0]:t;this.arrows.push({x0:g.x,y0:g.y+1.5,z0:g.z,x1:M.x+(Math.random()-.5)*3,z1:M.z+(Math.random()-.5)*3,y1:(M.y||0)+.6,t0:this.time+Math.random()*.25,dur:f,arc:4+i*.18})}this.events.push({type:"volley",x:e.x,z:e.z})}throwPilum(e,t){e.pilumCD=30;let n=St(e,t),i=(t.T.arrowResist||1)*(t.typeId==="legion"&&t.orders.formation==="block"?.6:1),r=e.count*1*i/(1+t.T.def*.1),o=.6+n/60;this.volleys.push({A:e,B:t,dmg:r,t:this.time+o,morale:8});let a=e.soldiers.filter(c=>c.alive);for(let c=0;c<Math.min(16,a.length);c++){let l=a[c];this.arrows.push({x0:l.x,y0:l.y+1.6,z0:l.z,x1:t.x+(Math.random()-.5)*t.halfW*1.6,z1:t.z+(Math.random()-.5)*3,y1:this.map.getHeight(t.x,t.z)+.8,t0:this.time+Math.random()*.15,dur:o,arc:2+n*.12,pilum:!0})}un(this,t,"PILUM!","bad",4),this.events.push({type:"volley",x:e.x,z:e.z})}resolveVolleys(){let e=this.time;for(let t=this.volleys.length-1;t>=0;t--){let n=this.volleys[t];e>=n.t&&(n.B.alive&&(this.damage(n.B,n.dmg,n.A,!0),n.morale&&Yi(this,n.B,n.morale),n.B.underFire=1,this.events.push({type:"arrowhit",x:n.B.x,z:n.B.z})),this.volleys.splice(t,1))}}damage(e,t,n,i){if(!e.alive||t<=0)return;e.hp-=t,n.dealt+=t,e.dmgIn+=t,n.dmgOut+=t,e.lastHitT=0;let r=Math.max(0,Math.ceil(e.hp/e.T.hp-1e-6)),o=!1;for(;e.count>r;){e.count--;let a=e.killSoldier(n.x,n.z,i);n.kills++,this.lost[e.side]++,o=!0,bu(this,e,n,i),a&&this.events.push({type:"death",x:a.x,z:a.z,side:e.side})}if(e.count<=0){e.hp=0,e.state="dead",e.melee=null;for(let a of this.legions)a.melee===e&&(a.melee=null,a.state="idle"),a.target===e&&(a.target=null);this.events.push({type:"legionlost",side:e.side,legion:e}),wu(this,e)}else o&&e.reassign()}separate(e){let t=this.order?this.order.filter(r=>r.alive):this.legions.filter(r=>r.alive),n=this.map,i=r=>r.state==="move"||r.state==="engage"||r.state==="kite"||r.state==="breach";for(let r=0;r<t.length;r++)for(let o=r+1;o<t.length;o++){let a=t[r],c=t[o];if(a.melee===c||c.melee===a||a.state==="retreat"||c.state==="retreat")continue;let l=St(a,c)||.01,h=this.contactDist(a,c),d,f;if(a.side===c.side){let p=i(a),x=i(c);p&&x?(d=h*.45,f=1.2):p||x?(d=h*.35,f=.8):(d=h*.78,f=4)}else{if(l<h*.98){let[p,x]=Math.random()<.5?[a,c]:[c,a];if(!p.melee&&!p.isRanged){this.startMelee(p,x);continue}if(!x.melee&&!x.isRanged){this.startMelee(x,p);continue}}d=h*.95,f=4}if(l<d){let p=Math.min(d-l,f*e),x=(c.x-a.x)/l,y=(c.z-a.z)/l,g=a.melee||a.state==="hold"||a.state==="shoot"||a.state==="breach",m=c.melee||c.state==="hold"||c.state==="shoot"||c.state==="breach",M=g&&!m?.15:m&&!g?.85:.5,_=1-M,v=a.x-x*p*M*2,D=a.z-y*p*M*2,C=c.x+x*p*_*2,I=c.z+y*p*_*2;n.isPassable(v,D,a.side)&&(a.x=v,a.z=D),n.isPassable(C,I,c.side)&&(c.x=C,c.z=I)}}}updateSoldiers(e,t){let n=this.map,i=this.time,r=e.state==="melee"&&e.melee,o=e.speedCur>.2,a=e.T.speed*1.5+1,c=r?e.melee:null;for(let l of e.soldiers){if(!l.alive){l.deadT>0&&l.deadT<30&&(l.deadT+=t);continue}let[h,d]=e.slotWorld(l.slot);h+=l.jx,d+=l.jz;let f=e.slots[l.slot]?e.slots[l.slot][1]+e.halfD-.7:0;if(c){let v=c.x-h,D=c.z-d,C=Math.hypot(v,D)||1,z=f<e.T.spacing*1.6?.7:.25;h+=v/C*z+Math.sin(i*2+l.phase)*.15,d+=D/C*z+Math.cos(i*2.3+l.phase)*.15}if(!n.isPassable(h,d,e.side)){let v=!1;for(let D=1;D<=4;D++){let C=D/4,I=h+(e.x-h)*C,z=d+(e.z-d)*C;if(n.isPassable(I,z,e.side)){h=I,d=z,v=!0;break}}v||(h=e.x,d=e.z)}n.avoidTrees(h,d,Fs,e.typeId==="cavalry"?.45:0)&&(h=Fs[0],d=Fs[1]),n.avoidTrees(l.x,l.z,Fs,.5)&&(l.x=Fs[0],l.z=Fs[1]);let p=h-l.x,x=d-l.z,y=Math.hypot(p,x),g=Math.min(y,Math.min(a+y*1.2,y*3.2+.35)*t);if(y>.02){let v=l.x+p/y*g,D=l.z+x/y*g;!n.isPassable(v,D,e.side)&&n.isPassable(l.x,l.z,e.side)&&(v=l.x,D=l.z),l.x=v,l.z=D}let m=g/Math.max(t,1e-4);l.walk+=g*2.2,l.moving=m>.5;let M;c?M=Math.atan2(c.x-l.x,c.z-l.z):m>.6&&y>.3?M=Math.atan2(p,x):e.state==="shoot"&&e.target?M=Math.atan2(e.target.x-l.x,e.target.z-l.z):M=e.face;let _=dl(l.yaw,M);if(l.yaw+=an(_,-5*t,5*t),l.y=n.getHeight(l.x,l.z),c){let v=f<e.T.spacing*2.2;l.swing=v?Math.sin(i*7+l.phase)*.5+.5:0}else l.swing=Math.max(0,l.swing-t*3);l.shoot>0&&(l.shoot-=t),l.hit>0&&(l.hit-=t)}(o||r)&&(e.lastMove=i)}updateObjective(e){let t=this.map.objective;if(!t)return;let n=[0,0];for(let i of this.legions)!i.alive||i.state==="retreat"||Math.hypot(i.x-t.x,i.z-t.z)<t.r+i.halfW*.5&&(n[i.side]+=i.count);if(t.present=n,t.type==="keep"){let i=1-t.owner;n[i]>0&&n[t.owner]===0?t.hold+=e:t.hold=Math.max(0,t.hold-e*.5)}else if(t.type==="exit"){let i=0;for(let r of this.legions)r.side===0&&r.alive&&!r.routed&&Math.hypot(r.x-t.x,r.z-t.z)<t.r+r.halfW*.5&&(i+=r.count);t.escaped=i}else t.type==="hill"&&(n[0]>0&&n[1]===0&&(t.score[0]+=e*1.6),n[1]>0&&n[0]===0&&(t.score[1]+=e*1.6))}strength(e){let t=0;for(let n of this.legions)n.side===e&&n.alive&&(t+=n.count);return t}checkVictory(){if(!this.started||this.over)return;let e=this.strength(0),t=this.strength(1),n=o=>{let a=this.legions.filter(c=>c.side===o&&c.alive);return a.length>0&&a.every(c=>c.state==="retreat")},i=this.map.objective,r=(o,a)=>{this.over=!0,this.winner=o,this.reason=a,this.events.push({type:"end",winner:o})};if(e<=this.start[0]*.08||e===0)return r(1,"Deine Legionen wurden vernichtet.");if(t<=this.start[1]*.08||t===0)return r(0,"Das feindliche Heer wurde vernichtet.");if(n(1)&&t<e*.6)return r(0,"Der Feind flieht vom Schlachtfeld!");if(n(0)&&e<t*.6)return r(1,"Deine Legionen fliehen vom Schlachtfeld.");if(i&&i.type==="keep"&&i.hold>=i.need){let o=1-i.owner;return r(o,o===0?"Der Burghof ist eingenommen \u2013 die Burg geh\xF6rt dir!":"Der Feind hat den Burghof eingenommen.")}if(i&&i.type==="exit"&&i.escaped>=this.start[0]*i.need)return r(0,"Der Ausbruch ist gelungen \u2013 dein Heer entkommt dem Hinterhalt!");if(i&&i.type==="hill"){if(i.score[0]>=i.need)return r(0,"Der Steinkreis ist in deiner Hand!");if(i.score[1]>=i.need)return r(1,"Der Feind h\xE4lt den Steinkreis.")}if(this.time>=this.timeLimit){if(i&&i.type==="exit")return r(1,"Die Zeit ist um \u2013 der Hinterhalt hat dich festgenagelt.");if(i&&i.type==="keep"){let c=i.owner;return r(c,c===0?"Die Mauern haben gehalten. Die Burg ist sicher!":"Die Zeit ist abgelaufen \u2013 die Burg h\xE4lt stand.")}if(i&&i.type==="hill"&&Math.abs(i.score[0]-i.score[1])>3){let c=i.score[0]>i.score[1]?0:1;return r(c,"Zeit abgelaufen \u2013 Punktsieg am Steinkreis.")}let o=e/this.start[0],a=t/this.start[1];return r(o>=a?0:1,"Zeit abgelaufen \u2013 Sieg nach verbliebener St\xE4rke.")}}};function fl(s,e,t){let n=s.length,i=e==="defend"?["legion","legion","guard","cavalry","archer","pike"]:e==="assault"?["archer","pike","guard","legion","archer","legion"]:["legion","archer","pike","cavalry","guard","legion"],r=[],o=s.filter(c=>c==="cavalry").length,a=s.filter(c=>c==="archer").length;for(let c=0;c<n;c++){let l=i[(c+t.int(0,2))%i.length];c===0&&(l=e==="assault"?"archer":"legion"),o>=2&&c===1&&(l="pike"),a>=2&&c===2&&e!=="assault"&&(l="cavalry"),r.push(l)}return r}function Au(s,e,t){let n=i=>i.reduce((r,o)=>r+yn[o].size*yn[o].value,0);return n(s)/Math.max(1,n(e))*t}function Os(s,e,t,n,i){if(s=s.filter(p=>!p.reserve),n.zoneExtra&&t===1&&!e.split){let p=s.filter((y,g)=>g%2===0),x=s.filter((y,g)=>g%2===1);Os(p,{...e,split:!0},t,n,i),Os(x,{...n.zoneExtra,split:!0},t,n,i);for(let y of p)y.face=Math.PI,y.buildSoldiers();for(let y of x)y.face=0,y.buildSoldiers();return}let r=t===0?e.x1-6:e.x0+6,o=t===0?e.x0+6:e.x1-6,a=n.canyon?n.canyonCenter(r):(e.z0+e.z1)/2;for(let p of s)p.placed=!1;let c=s.filter(p=>!p.isRanged&&p.typeId!=="cavalry"),l=s.filter(p=>p.isRanged),h=s.filter(p=>p.typeId==="cavalry"),d=(p,x,y)=>{let[g,m]=Ba(n,e,x,y,p,t,s);p.x=g,p.z=m,p.face=t===0?Math.PI/2:-Math.PI/2,p.buildSoldiers()},f=(p,x,y)=>{p.forEach((g,m)=>{let M=a+(m-(p.length-1)/2)*y;d(g,x,M)})};if(e.castle){let p=n.castle,x=p.face,y=p.gateX-x*7;c.forEach((g,m)=>d(g,y-x*(m%2)*7,p.cz+(m-(c.length-1)/2)*11)),l.forEach((g,m)=>d(g,p.gateX-x*4,p.cz+(m%2?1:-1)*(9+m*3))),h.forEach((g,m)=>d(g,n.objective.x,n.objective.z+(m-.5)*10));return}f(c,r,13),f(l,(r+o)/2+(t===0?-3:3),14),h.forEach((p,x)=>d(p,r-(t===0?4:-4),a+(x%2?1:-1)*(c.length*7+8+Math.floor(x/2)*9)))}function Ba(s,e,t,n,i,r,o){let a=[[0,0]];for(let c=2;c<44;c+=2)for(let l=0;l<12;l++)a.push([Math.cos(l*.5236)*c,Math.sin(l*.5236)*c]);for(let[c,l]of[[9,3],[6,2.5],[0,1]])for(let[h,d]of a){let f=Math.max(e.x0+3,Math.min(e.x1-3,t+h)),p=Math.max(e.z0+3,Math.min(e.z1-3,n+d));if(s.isPassable(f,p,r)&&!(s.clearanceAt(f,p)<l)&&!o.some(x=>x!==i&&x.placed&&Math.hypot(x.x-f,x.z-p)<c))return i.placed=!0,[f,p]}return i.placed=!0,[t,n]}function pl(s,e,t,n,i){let r=Vi[n];for(let o of s){o.aiSmart=i()<r.smart;let a=o.orders;switch(a.retreatAt=i()<.5?.25:.2,a.retreatTo="camp",a.afterRetreat="return",a.stance="balanced",o.typeId){case"archer":a.move="hold",a.target="nearest",a.skirmish=!0;break;case"cavalry":a.move=i()<.5?"flankL":"flankR",a.target="ranged",a.formation="wedge",a.delay=i.int(3,8);break;case"guard":a.move="advance",a.target="strongest",a.formation="block",a.stance="defensive";break;case"pike":a.move="advance",a.target="nearest",a.delay=2;break;default:a.move="advance",a.target=i()<.5?"nearest":"weakest"}e==="assault"&&(a.retreatAt=0,o.isRanged?(a.move="hold",a.skirmish=!1):o.typeId==="cavalry"?(a.move="hold",a.target="objective",a.delay=0):(a.move="hold",a.stance="balanced")),e==="defend"&&(o.isRanged?(a.move="advance",a.target="nearest"):(a.move="advance",a.target="objective",a.stance="aggressive"),o.typeId==="cavalry"&&(a.move="advance",a.delay=25)),e==="hill"&&(!o.isRanged&&i()<.7&&(a.target="objective"),o.isRanged&&(a.move="advance",a.target="nearest")),e==="canyon"&&o.typeId==="cavalry"&&(a.move="advance"),e==="ambush"&&(a.retreatAt=.2,o.isRanged?(a.move="hold",a.skirmish=!0):(a.move="advance",a.stance="aggressive",a.delay=o.typeId==="cavalry"?6:1))}}var xr=class{constructor(e,t,n,i=1){this.side=i,this.b=e,this.D=Vi[t],this.rng=n,this.t=0}update(e){if(this.t+=e,this.t<this.D.think)return;this.t=0;let t=this.b,n=this.side,i=1-n,r=t.legions.filter(h=>h.side===n&&h.alive),o=t.legions.filter(h=>h.side===i&&h.alive);if(!o.length)return;let a=r.reduce((h,d)=>h+d.count,0),c=o.reduce((h,d)=>h+d.count,0),l=t.map.objective;for(let h of r){if(h.state==="retreat"||h.state==="regroup"||h.state==="melee"||this.rng()>this.D.smart+.2)continue;let d=h.orders;if(t.map.castle&&t.map.castle.owner===n){!t.map.gate.alive&&h.typeId==="cavalry"&&d.move==="hold"&&(d.move="advance",d.target="ranged",t.applyOrders(h)),l&&l.present&&l.present[i]>0&&!h.isRanged&&d.move==="hold"&&(d.move="advance",d.target="objective",t.applyOrders(h));continue}if(l&&l.type==="hill"&&l.score[i]>l.score[n]+10&&!h.isRanged&&d.target!=="objective"){d.target="objective",t.applyOrders(h);continue}a>c*1.3&&d.stance!=="aggressive"&&!h.isRanged?d.stance="aggressive":a<c*.7&&d.stance==="aggressive"&&(d.stance="balanced"),(h.state==="hold"||h.state==="idle")&&!h.isRanged&&t.time>25&&d.move==="hold"&&!(t.map.castle&&t.map.castle.owner===n)&&(d.move="advance",t.applyOrders(h)),h.isRanged&&h.state==="hold"&&t.time>12&&(t.chooseTarget(h,null,h.T.range)||(d.move="advance",t.applyOrders(h))),h.typeId==="cavalry"&&h.aiSmart&&h.target&&h.target.typeId==="pike"&&(h.target=null,h.path=[])}}};var Ru=new Ke,Cu=new Ke,yi=new Ke,$i=new Wt,La=new Wt,vi=new zt,dx=new zt(0,0,0,"YXZ"),Ls=new B,Hs=new B(1,1,1),Bs=new me,Sy=new B(0,1,0),yr=new Ke().makeScale(0,0,0),Ha=class{constructor(e,t,n,i,r="day"){this.scene=e,this.map=n,this.legions=t,this.group=new dt,e.add(this.group),this.geos=lu(),this.mat=new Ct({flatShading:!0});let o={};this.defs={};for(let c of t){let l=c.side+":"+c.typeId;this.defs[l]||(this.defs[l]=hu(c.side,c.typeId));for(let h of this.defs[l])o[h.g]=(o[h.g]||0)+c.maxCount}this.meshes={},this.counters={};for(let c in o){let l=new ki(this.geos[c],this.mat,o[c]);l.instanceMatrix.setUsage(pr),l.castShadow=i,l.receiveShadow=!1,l.frustumCulled=!1,l.count=o[c];for(let h=0;h<o[c];h++)l.setMatrixAt(h,yr);this.meshes[c]=l,this.counters[c]=0,this.group.add(l)}for(let c of t){let l=this.defs[c.side+":"+c.typeId],h={...Zn[c.side].colors,accent:gr[c.side][c.index%gr[c.side].length]};c.accent=h.accent;let d={};for(let f of l)f.v&&(d[f.v[0]]=Math.max(d[f.v[0]]||0,f.v[1]+1));c.soldiers.forEach((f,p)=>{var M;f.pi=[],f.vis=[];let x=p===0,y={};for(let _ in d)y[_]=Math.random()*(d[_]+(_==="helm"?1:0))|0;let g=Math.random()*3|0,m=.9+Math.random()*.14;for(let _ of l){let v=this.counters[_.g]++;f.pi.push(v);let D=!0;_.off&&!x&&(D=!1),_.noOff&&x&&(D=!1),_.v&&y[_.v[0]]!==_.v[1]&&(D=!1),_.chance!==void 0&&!x&&Math.random()>_.chance&&(D=!1),f.vis.push(D);let C=Array.isArray(_.role)?_.role[g%_.role.length]:_.role;Bs.setHex((M=h[C])!=null?M:16711935);let I=C==="skin"||C.startsWith("horse")?.82+Math.random()*.3:C==="accent"?1:m;Bs.multiplyScalar(I),this.meshes[_.g].setColorAt(v,Bs)}f.colored=!0})}for(let c in this.meshes)this.meshes[c].instanceColor&&(this.meshes[c].instanceColor.needsUpdate=!0);this.standards=new Map;let a=new Ct({color:5914664,flatShading:!0});for(let c of t){let l=Zn[c.side],h=new dt,d=new De(this.geos.pole,a);h.add(d);let f=new Ct({color:gr[c.side][c.index%gr[c.side].length],flatShading:!0}),p=new De(this.geos.eagle,f);h.add(p);let x=new rn(1.3,1.6,3,1);x.translate(0,2.35,.08);let y=new De(x,new Ct({color:l.colors.banner,side:vt,flatShading:!0}));y.userData.base=Float32Array.from(x.attributes.position.array),h.add(y);let g=new De(new sn(1.5,.08,.08),f);g.position.y=3.2,h.add(g),h.traverse(M=>{M.castShadow=i});let m=null;if(r==="night"||r==="fog"||r==="dusk"){m=new dt;let M=new De(new Bi(.26,.7,5),new ct({color:16753210})),_=new De(new Bi(.14,.45,5),new ct({color:16773280}));M.position.y=.35,_.position.y=.3;let v=new De(new fi(.9,8,6),new ct({color:16752704,transparent:!0,opacity:r==="night"?.22:.12,depthWrite:!1}));v.position.y=.35,m.add(M,_,v),m.position.set(.75,3.3,0),h.add(m)}this.group.add(h),this.standards.set(c,{g:h,flag:y,torch:m})}this.ringMat=new ct({color:16769146,transparent:!0,opacity:.85,depthWrite:!1}),this.rings=new Map,this.fx=new ml(e)}ringFor(e){let t=this.rings.get(e);if(!t){let n=new $n(.92,1,40,1);n.rotateX(-Math.PI/2);let i=this.ringMat.clone();i.color.set(e.side===0?16769146:16738906),t=new De(n,i),t.renderOrder=3,this.group.add(t),this.rings.set(e,t)}return t}update(e,t,n,i){let r=a=>n instanceof Set?n.has(a):n===a,o=this.map;for(let a of this.legions){let c=this.defs[a.side+":"+a.typeId],l=a.typeId==="cavalry",h=a.state==="melee",d=a.state==="shoot";for(let x of a.soldiers){if(!x.alive&&x.deadT>2.2){if(x.settled)continue;x.settled=!0}let y=!x.alive,g=y?Math.min(1,x.deadT/.6):0;vi.set(0,x.yaw,0),$i.setFromEuler(vi);let m=x.y;if(!y&&x.moving&&(m+=Math.abs(Math.sin(x.walk*(l?.9:1.4)))*(l?.12:.07)),y){let _=g*g*(l?1.45:1.5)*x.fall;vi.set(l?0:-_,0,l?_:0),La.setFromEuler(vi),$i.multiply(La),m-=g*.15}Ru.compose(Ls.set(x.x,m,x.z),$i,Hs.set(1,1,1));let M=x.walk*(l?.9:1.4);for(let _=0;_<c.length;_++){let v=c[_];if(!x.vis[_]){x.hid||this.meshes[v.g].setMatrixAt(x.pi[_],yr);continue}let D=v.r[0],C=v.r[1],I=v.r[2],z=v.p[0],E=v.p[1],u=v.p[2];if(!y)switch(v.anim){case"legL":D+=x.moving?Math.sin(M)*.55:0;break;case"legR":D-=x.moving?Math.sin(M)*.55:0;break;case"hlegF":D+=x.moving?Math.sin(M*1.3)*.6:0;break;case"hlegB":D-=x.moving?Math.sin(M*1.3)*.6:0;break;case"horse":D+=x.moving?Math.sin(M*1.3)*.04:0;break;case"arm":D+=h?-1.4+x.swing*2:.35+(x.moving?Math.sin(M)*.2:0);break;case"pike":D+=h?.02+x.swing*.08:-1.48,h&&(u+=x.swing*.35);break;case"lance":D+=h||a.chargeT>0?.08+x.swing*.2:a.speedCur>a.T.speed*.6?.1:-1.1;break;case"shield":h&&(u+=.08);break;case"bow":(x.shoot>0||d)&&(D-=.5,E+=.15);break}vi.set(D,C,I),La.setFromEuler(vi),Cu.compose(Ls.set(z,E,u),La,Hs.set(1,1,1)),yi.multiplyMatrices(Ru,Cu),this.meshes[v.g].setMatrixAt(x.pi[_],yi)}if(x.hid=!0,y&&!x.darkened){x.darkened=!0;for(let _=0;_<c.length;_++){let v=this.meshes[c[_].g];v.getColorAt(x.pi[_],Bs),Bs.multiplyScalar(.62),v.setColorAt(x.pi[_],Bs),v.instanceColor.needsUpdate=!0}}}let f=this.standards.get(a);if(a.alive){f.g.visible=!0;let x=a.soldiers.find(_=>_.alive&&_.slot===Math.floor(a.cols/2))||a.soldiers.find(_=>_.alive),y=x?x.x:a.x,g=x?x.z:a.z;f.g.position.set(y-a.fwdX*.2,o.getHeight(y,g)+(a.typeId==="cavalry"?1.3:.4),g-a.fwdZ*.2),f.g.rotation.y=a.face+Math.PI/2;let m=f.flag.geometry.attributes.position,M=f.flag.userData.base;for(let _=0;_<m.count;_++){let v=M[_*3];m.array[_*3+2]=M[_*3+2]+Math.sin(v*3+e*5+a.id)*.12*(v+.65)}if(m.needsUpdate=!0,f.torch){let _=.85+Math.sin(e*19+a.id)*.1+Math.sin(e*27+a.id*3)*.07;f.torch.scale.set(1,_,1)}}else f.g.visible&&(f.g.rotation.z=Math.min(1.4,(f.g.rotation.z||0)+t*2),f.g.rotation.z>=1.4&&(f.g.visible=!1));if((r(a)||i===a)&&a.alive){let x=this.ringFor(a);x.visible=!0;let y=Math.max(a.halfW,a.halfD)+1.2;x.scale.set(y,1,y),x.position.set(a.x,o.getHeight(a.x,a.z)+.25,a.z),x.material.opacity=r(a)?.65+Math.sin(e*5)*.2:.45}else this.rings.has(a)&&(this.rings.get(a).visible=!1)}for(let a in this.meshes)this.meshes[a].instanceMatrix.needsUpdate=!0;this.fx.update(e,t,o)}dispose(){this.scene.remove(this.group),this.fx.dispose(),this.group.traverse(e=>{e.geometry&&e.geometry.dispose()})}},Vs=class{constructor(e,t,n,i){this.mesh=new ki(t,n,i),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(pr),this.items=[],this.n=i,e.add(this.mesh);for(let r=0;r<i;r++)this.mesh.setMatrixAt(r,yr)}spawn(e){this.items.length<this.n&&this.items.push(e)}},ml=class{constructor(e){this.scene=e,this.sparks=new Vs(e,new _a(.12),new ct({color:16773296}),260),this.dust=new Vs(e,new di(.5,0),new Ct({color:13153684,flatShading:!0}),220);let t=new sn(.05,.05,1);this.arrows=new Vs(e,t,new ct({color:3811866}),420),this.debris=new Vs(e,new sn(.4,.15,.7),new Ct({color:7030054,flatShading:!0}),60),this.battleArrows=[]}burst(e,t,n,i=8,r=!1){for(let o=0;o<i;o++)this.sparks.spawn({x:e,y:t,z:n,vx:(Math.random()-.5)*6,vy:2+Math.random()*4,vz:(Math.random()-.5)*6,life:.35+Math.random()*.25,t:0,s:r?1.6:1})}puff(e,t,n,i=3,r=1){for(let o=0;o<i;o++)this.dust.spawn({x:e+(Math.random()-.5)*2,y:t+.3,z:n+(Math.random()-.5)*2,vx:(Math.random()-.5)*1.5,vy:.6+Math.random(),vz:(Math.random()-.5)*1.5,life:.9+Math.random()*.6,t:0,s:r*(.6+Math.random()*.6)})}splinters(e,t,n){for(let i=0;i<24;i++)this.debris.spawn({x:e,y:t+2+Math.random()*2,z:n+(Math.random()-.5)*5,vx:(Math.random()-.5)*8,vy:3+Math.random()*5,vz:(Math.random()-.5)*8,life:2.5,t:0,rx:Math.random()*6,ry:Math.random()*6})}update(e,t,n){let i=(c,l)=>{let h=c.items,d=0;for(let f=0;f<h.length;f++){let p=h[f];p.t+=t,p.t<p.life&&(h[d++]=p)}h.length=d;for(let f=0;f<c.n;f++)f<h.length?(l(h[f]),c.mesh.setMatrixAt(f,yi)):f<c.lastCount&&c.mesh.setMatrixAt(f,yr);c.lastCount=h.length,c.mesh.instanceMatrix.needsUpdate=!0};i(this.sparks,c=>{c.vy-=14*t,c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t;let l=(1-c.t/c.life)*c.s;yi.compose(Ls.set(c.x,c.y,c.z),$i.setFromEuler(vi.set(c.t*9,c.t*7,0)),Hs.set(l,l,l))}),i(this.dust,c=>{c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.vy*=.96;let l=Math.sin(c.t/c.life*Math.PI)*c.s;yi.compose(Ls.set(c.x,c.y,c.z),$i.identity(),Hs.set(l,l,l))}),i(this.debris,c=>{c.vy-=14*t,c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t;let l=n.getHeight(c.x,c.z)+.1;c.y<l?(c.y=l,c.vx*=.5,c.vz*=.5,c.vy=0):c.rx+=t*6,yi.compose(Ls.set(c.x,c.y,c.z),$i.setFromEuler(vi.set(c.rx,c.ry,0)),Hs.set(1,1,1))});let r=this.battleArrows,o=this.arrows,a=0;for(let c of r){let l=(this.simTime-c.t0)/c.dur;if(l<0||l>1||a>=o.n)continue;let h=c.x0+(c.x1-c.x0)*l,d=c.z0+(c.z1-c.z0)*l,f=c.y0+(c.y1-c.y0)*l+Math.sin(l*Math.PI)*c.arc,p=c.x1-c.x0,x=c.z1-c.z0,y=c.y1-c.y0+Math.cos(l*Math.PI)*Math.PI*c.arc,g=Math.hypot(p,x),m=Math.atan2(p,x),M=-Math.atan2(y,g);yi.compose(Ls.set(h,f,d),$i.setFromEuler(dx.set(M,m,0)),Hs.set(1,1,1)),o.mesh.setMatrixAt(a++,yi)}for(let c=a;c<(o.lastCount||0);c++)o.mesh.setMatrixAt(c,yr);o.lastCount=a,o.mesh.instanceMatrix.needsUpdate=!0}dispose(){for(let e of[this.sparks,this.dust,this.arrows,this.debris])this.scene.remove(e.mesh),e.mesh.geometry.dispose()}};var Va=class{constructor(){this.ctx=null,this.enabled=!0,this.last={}}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination);let t=this.ctx.sampleRate*1.5;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;this.startAmbience()}catch{this.ctx=null}}setEnabled(e){this.enabled=e,this.master&&(this.master.gain.value=e?.55:0)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}throttle(e,t){let n=performance.now();return this.last[e]&&n-this.last[e]<t?!1:(this.last[e]=n,!0)}noise(e,t,n,i,r="bandpass",o=0){let a=this.ctx,c=a.currentTime+o,l=a.createBufferSource();l.buffer=this.noiseBuf;let h=a.createBiquadFilter();h.type=r,h.frequency.value=t,h.Q.value=n;let d=a.createGain();return d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(i,c+.01),d.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h),h.connect(d),d.connect(this.master),l.start(c,Math.random()*1,e+.05),h}tone(e,t,n,i,r=0,o=0){let a=this.ctx,c=a.currentTime+r,l=a.createOscillator();l.type=n,l.frequency.setValueAtTime(e,c),o&&l.frequency.exponentialRampToValueAtTime(e*o,c+t);let h=a.createGain();h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(i,c+.02),h.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(h),h.connect(this.master),l.start(c),l.stop(c+t+.05)}play(e,t=1){if(!(!this.ctx||!this.enabled))switch(e){case"click":this.tone(880,.06,"triangle",.08*t);break;case"select":this.tone(520,.07,"triangle",.08*t),this.tone(780,.08,"triangle",.06*t,.05);break;case"place":this.noise(.12,300,1,.25*t,"lowpass");break;case"clash":if(!this.throttle("clash",70))return;this.noise(.09,3200+Math.random()*2e3,8,.18*t),this.tone(1800+Math.random()*900,.14,"square",.015*t);break;case"impact":this.noise(.5,180,.8,.6*t,"lowpass"),this.noise(.25,2500,3,.25*t);break;case"volley":if(!this.throttle("volley",200))return;this.noise(.5,1800,2,.12*t,"bandpass");break;case"arrowhit":if(!this.throttle("ahit",120))return;for(let n=0;n<4;n++)this.noise(.05,900+Math.random()*600,4,.08*t,"bandpass",n*.04+Math.random()*.05);break;case"death":if(!this.throttle("death",160))return;this.noise(.18,260,1.5,.1*t,"lowpass");break;case"gate":if(!this.throttle("gate",250))return;this.noise(.35,140,1,.5*t,"lowpass"),this.tone(70,.3,"sine",.3*t,0,.6);break;case"gatebroken":this.noise(1.4,200,.7,.8*t,"lowpass"),this.noise(.8,900,1,.3*t,"bandpass",.1);break;case"horn":{this.tone(146.8,1.6,"sawtooth",.09*t,0,1),this.tone(146.8*1.5,1.2,"sawtooth",.05*t,.35),this.tone(146.8*2,.9,"sawtooth",.04*t,.9);break}case"retreat":this.tone(330,.3,"sawtooth",.05*t),this.tone(262,.5,"sawtooth",.05*t,.28);break;case"victory":{let n=[392,523,659,784,659,784,1046];n.forEach((i,r)=>this.tone(i,r===n.length-1?1.2:.22,"triangle",.12*t,r*.16)),n.forEach((i,r)=>this.tone(i/2,r===n.length-1?1.2:.22,"sawtooth",.03*t,r*.16));break}case"defeat":{[392,349,311,262].forEach((i,r)=>this.tone(i,.5,"triangle",.1*t,r*.35)),this.tone(131,1.8,"sawtooth",.04*t,.9);break}case"drum":this.tone(90,.25,"sine",.35*t,0,.5),this.noise(.08,400,1,.15*t,"lowpass");break}}startAmbience(){let e=this.ctx,t=e.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;let n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=420;let i=e.createGain();i.gain.value=.035;let r=e.createOscillator();r.frequency.value=.08;let o=e.createGain();o.gain.value=180,r.connect(o),o.connect(n.frequency),t.connect(n),n.connect(i),i.connect(this.master),t.start(),r.start(),this.amb=i}};var on=(s,e="0 0 48 48")=>`<svg viewBox="${e}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;function Gs(s,e=0){let t=e===0?"#4a8cf0":"#e0473c",n=e===0?"#1f4c9a":"#8e1f1a",i=e===0?"#e3b441":"#cfd3da",r=`<circle cx="24" cy="24" r="22" fill="${n}" opacity=".55"/><circle cx="24" cy="24" r="22" fill="none" stroke="${t}" stroke-width="2"/>`;switch(s){case"legion":return on(`${r}<rect x="11" y="13" width="15" height="22" rx="3" fill="${t}" stroke="${i}" stroke-width="1.6"/><circle cx="18.5" cy="24" r="2.4" fill="${i}"/>
        <path d="M28 33 L37 12 L39 13 L31 34 Z" fill="#e8edf5"/><path d="M26.5 31 L33.5 34.5" stroke="${i}" stroke-width="2.6" stroke-linecap="round"/>`);case"pike":return on(`${r}<path d="M13 38 L35 9" stroke="#caa06a" stroke-width="2.4" stroke-linecap="round"/><path d="M35 9 L38 5 L37.5 11.5 Z" fill="#e8edf5"/>
        <path d="M20 38 L38 15" stroke="#caa06a" stroke-width="2.4" stroke-linecap="round"/><path d="M38 15 L41 11 L40.5 17.5 Z" fill="#e8edf5"/>
        <circle cx="16" cy="28" r="6" fill="${t}" stroke="${i}" stroke-width="1.6"/>`);case"archer":return on(`${r}<path d="M16 9 Q34 24 16 39" fill="none" stroke="#caa06a" stroke-width="2.8" stroke-linecap="round"/><path d="M16 9 L16 39" stroke="#f0ead8" stroke-width="1"/>
        <path d="M13 24 L37 24" stroke="#e8edf5" stroke-width="1.8"/><path d="M37 24 L32 21 L32 27 Z" fill="#e8edf5"/><path d="M13 24 L10 21 M13 24 L10 27" stroke="${i}" stroke-width="1.6"/>`);case"cavalry":return on(`${r}<path d="M14 38 L16 27 Q15 18 22 13 L25 8 L27 13 Q34 14 36 22 L34 25 L29 22 L27 26 Q30 31 28 38 Z" fill="${t}" stroke="${i}" stroke-width="1.6" stroke-linejoin="round"/>
        <circle cx="29" cy="17" r="1.4" fill="${i}"/><path d="M22 13 Q17 19 18 27" stroke="${i}" stroke-width="2" fill="none"/>`);case"guard":return on(`${r}<rect x="13" y="9" width="22" height="30" rx="3" fill="${t}" stroke="${i}" stroke-width="2"/><path d="M24 11 L24 37 M15 24 L33 24" stroke="${i}" stroke-width="1.8"/>
        <circle cx="24" cy="24" r="3.4" fill="${i}"/>`)}return""}function Iu(s){let e='stroke="#f5d27a" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"';switch(s){case"random":return on(`<rect x="9" y="9" width="30" height="30" rx="6" ${e}/><circle cx="17" cy="17" r="2.4" fill="#f5d27a"/><circle cx="31" cy="31" r="2.4" fill="#f5d27a"/><circle cx="24" cy="24" r="2.4" fill="#f5d27a"/><circle cx="31" cy="17" r="2.4" fill="#f5d27a"/><circle cx="17" cy="31" r="2.4" fill="#f5d27a"/>`);case"assault":return on(`<path d="M8 40 L8 18 L12 18 L12 14 L16 14 L16 18 L20 18 L20 14 L24 14 L24 18 L28 18 L28 14 L32 14 L32 18 L36 18 L36 14 L40 14 L40 40 Z" ${e}/><path d="M20 40 L20 30 Q24 25 28 30 L28 40" ${e}/><path d="M34 6 L42 12 M42 6 L34 12" stroke="#e0473c" stroke-width="2.4" stroke-linecap="round"/>`);case"defend":return on(`<path d="M24 6 L39 11 L37 28 Q33 37 24 42 Q15 37 11 28 L9 11 Z" ${e}/><path d="M17 24 L22 29 L31 18" stroke="#4a8cf0" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`);case"canyon":return on(`<path d="M4 14 L14 14 L18 22 L16 40 L4 40 Z" ${e}/><path d="M44 12 L32 12 L29 22 L32 40 L44 40 Z" ${e}/><path d="M21 40 Q24 30 22 22 Q25 17 27 14" stroke="#caa06a" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`);case"river":return on(`<path d="M6 16 Q12 12 18 16 T30 16 T42 16" ${e}/><path d="M6 24 Q12 20 18 24 T30 24 T42 24" stroke="#6ab4f0" stroke-width="2" fill="none"/><path d="M6 32 Q12 28 18 32 T30 32 T42 32" ${e}/><path d="M16 38 Q24 30 32 38" stroke="#caa06a" stroke-width="2.4" fill="none"/>`);case"hill":return on(`<path d="M4 40 Q24 8 44 40 Z" ${e}/><rect x="18" y="18" width="3" height="7" fill="#f5d27a"/><rect x="23" y="16" width="3" height="8" fill="#f5d27a"/><rect x="28" y="18" width="3" height="7" fill="#f5d27a"/>`);case"ambush":return on(`<path d="M4 16 Q14 10 24 22 Q34 10 44 16" ${e}/><path d="M4 34 Q14 40 24 28 Q34 40 44 34" ${e}/><path d="M14 25 L34 25" stroke="#4a8cf0" stroke-width="3" stroke-linecap="round"/><path d="M34 25 L29 21 M34 25 L29 29" stroke="#4a8cf0" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="12" r="2.4" fill="#e0473c"/><circle cx="36" cy="38" r="2.4" fill="#e0473c"/>`);case"forest":return on(`<path d="M14 40 L14 34 M14 34 L6 34 L14 20 L22 34 Z M9 26 L14 14 L19 26" ${e}/><path d="M32 40 L32 32 M32 32 L22 32 L32 12 L42 32 Z M26 22 L32 8 L38 22" ${e}/>`)}return""}var Pu={melee:"\u2694",shoot:"\u27B6",retreat:"\u21A9",regroup:"\u26FA",wait:"\u23F3",hold:"\u26E8",move:"\u279C",engage:"\u279C",kite:"\u21B6",breach:"\u2692",idle:"\xB7",dead:"\u271D"},Ws=["I","II","III","IV","V","VI","VII","VIII"];var ue=s=>document.querySelector(s),br=s=>Array.from(document.querySelectorAll(s)),In={get(s,e){try{let t=localStorage.getItem("legionen."+s);return t?JSON.parse(t):e}catch{return e}},set(s,e){try{localStorage.setItem("legionen."+s,JSON.stringify(e))}catch{}}},zu={high:{shadows:!0,shadowSize:2048,pixelRatio:2,aa:!0},medium:{shadows:!0,shadowSize:1024,pixelRatio:1.5,aa:!0},low:{shadows:!1,shadowSize:512,pixelRatio:1,aa:!1}},Xt=Object.assign({sound:!0,quality:"high"},In.get("settings",{})),Dt=Object.assign({wins:0,losses:0,streak:0,best:0},In.get("stats",{})),Be=new za(ue("#c"),zu[Xt.quality]||zu.high),Le=new Va;Le.setEnabled(Xt.sound);var R={phase:"loading",cfg:Object.assign({scenario:"random",biome:"random",tod:"random",diff:"normal",army:["legion","legion","archer","cavalry"]},In.get("cfg",{})),cur:null,selected:null,speed:1,paused:!1,mode:null,tab:"move",slotSel:0,sel:[],last:null};function fx(s){let e=vn(Math.random()*1e9|0),t=s.scenario==="random"?e.pick(il):s.scenario,n=s.biome==="random"?e.pick(Object.keys(Rn)):s.biome,i=!s.tod||s.tod==="random"?e.pick(["day","day","day","dawn","dusk","dusk","night","fog"]):s.tod,r=!["assault","defend","ambush"].includes(t)&&e.chance(.5);return{scenario:t,biome:n,tod:i,reserves:r,diff:s.diff,army:s.army.slice(),seed:Math.random()*1e9|0}}function ku(s){px(),Tu();let e=new Na(s.scenario,s.biome,s.seed);e.tod=s.tod||"day",Be.setupEnvironment(s.biome,e.fogDensity*(e.tod==="fog"?2.8:e.tod==="night"?1.4:1),e.tod),Be.groundFn=(g,m)=>e.terrainHeight(g,m);let t=fu(e,Be.scene),n=vn(s.seed+7),i=Vi[s.diff],r=s.demo?fl(["legion","archer","cavalry","pike"],s.scenario,n):s.army,o=r.map((g,m)=>{let M=new ks(0,g,0,0,1);return M.index=m,M}),a=s.botTypes||fl(r,s.scenario,n),c=Au(r,a,s.demo?1:i.size)*(s.scenario==="ambush"?.85:1),l=a.map((g,m)=>{let M=new ks(1,g,0,0,c);return M.index=m,M});if(s.reserves){let g=60+(s.seed>>>3)%40;for(let[m,M]of[[0,o],[1,l]]){let _=["legion","cavalry","pike","guard","archer"][(s.seed>>>m*3)%5],v=new ks(m,_,0,0,m?c:1);v.index=M.length,v.reserve=!0,v.lockedUntil=g,v.name="Reserve "+v.name;let D=e.camps[m],C={x0:D.x-(m?6:-2)-8,x1:D.x-(m?6:-2)+8,z0:D.z-16,z1:D.z+16},[I,z]=Ba(e,C,(C.x0+C.x1)/2,D.z,v,m,M);v.x=I,v.z=z,v.buildSoldiers(),M.push(v)}}let h=[...o,...l];Os(o,e.zones[0],0,e,n),Os(l,e.zones[1],1,e,n),pl(l,s.scenario,e,s.diff,n),s.demo&&pl(o,s.scenario,e,"normal",n);let d=new Oa(e,h,Cs[s.scenario]);d.soldiersInStep=!1;let f=new xr(d,s.diff,n),p=new Ha(Be.scene,h,e,Be.quality.shadows,e.tod),x=new Da(Be.scene,e),y={opts:s,map:e,world:t,legions:h,player:o,bot:l,battle:d,brain:f,units:p,overlays:x,labels:new Map,time:0,dustT:0};return s.demo&&(y.brain0=new xr(d,"normal",n,0)),R.cur=y,mx(y),x.showZones(!1),y}function px(){let s=R.cur;s&&(Be.scene.remove(s.world.group),s.world.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose&&e.material.dispose()}),s.units.dispose(),s.overlays.dispose(),ue("#labels").innerHTML="",R.cur=null,R.selected=null,R.mode=null)}function Fu(s){return s.lockedUntil&&(!R.cur||R.cur.battle.time<s.lockedUntil)?"\u23F3":s.routed?"\u2691":s.morale<30?"\u26A0":s.stamina<12?"\u{1F4A4}":Pu[s.state]||""}function qt(s){return`${Ws[s.index]||s.index+1}. ${s.name}`}function mx(s){let e=ue("#labels");e.innerHTML="";for(let t of s.legions){let n=document.createElement("div");n.className="lbl"+(t.side===1?" e":""),n.innerHTML=`<div class="plate">${Gs(t.typeId,t.side)}<span class="n">${Ws[t.index]}</span><span class="c">${t.count}</span><span class="s"></span></div><div class="hpb"><i></i></div><div class="mob"><i></i></div>`,n.addEventListener("pointerdown",i=>{i.stopPropagation(),Wu(i,t)}),e.appendChild(n),s.labels.set(t,{el:n,c:n.querySelector(".c"),s:n.querySelector(".s"),hp:n.querySelector(".hpb i"),mo:n.querySelector(".mob i"),lastC:-1,lastS:"",lastM:-1})}if(s.map.gate){let t=document.createElement("div");t.className="gatelbl",t.innerHTML='Burgtor<div class="hpb"><i></i></div>',e.appendChild(t),s.gateLbl={el:t,hp:t.querySelector("i")}}}var bt={x:0,y:0,visible:!1};function gx(s){let e=R.phase==="deploy"||R.phase==="orders"||R.phase==="battle";for(let t of s.legions){let n=s.labels.get(t);if(!e||!t.alive){n.el.style.display!=="none"&&(n.el.style.display="none");continue}let i=s.map.getHeight(t.x,t.z)+(t.typeId==="cavalry"?5.2:4.4);if(Be.project(t.x,i,t.z,bt),!bt.visible||bt.x<-60||bt.y<-60||bt.x>innerWidth+60||bt.y>innerHeight+60){n.el.style.display="none";continue}n.el.style.display="",n.el.style.transform=`translate(${bt.x.toFixed(1)}px, ${bt.y.toFixed(1)}px) translate(-50%, -100%)`,n.lastC!==t.count&&(n.c.textContent=t.count,n.hp.style.width=(t.ratio*100).toFixed(0)+"%",n.lastC=t.count);let r=R.phase==="battle"?Fu(t):"";n.lastS!==r&&(n.s.textContent=r,n.lastS=r);let o=Math.round(t.morale/5)*5;n.lastM!==o&&(n.lastM=o,n.mo.style.width=o+"%",n.mo.style.background=o<30?"#ff6a4a":o<60?"#f0c040":"#8fd0ff",n.el.classList.toggle("waver",t.morale<30&&!t.routed)),n.el.classList.toggle("rout",!!t.routed);let a=yl(t)&&t.side===0||R.selected===t,c=R.selected&&R.selected.side===0&&R.selected.orders.target==="legion"&&R.selected.orders.targetId===t.id;n.el.classList.toggle("sel",a),n.el.classList.toggle("tgt",!!c)}if(s.gateLbl){let t=s.map.gate;e&&t.alive&&R.phase==="battle"&&t.hp<t.maxHp?(Be.project(t.x,s.map.castle.base+8,t.z,bt),s.gateLbl.el.style.display=bt.visible?"":"none",s.gateLbl.el.style.left=bt.x+"px",s.gateLbl.el.style.top=bt.y+"px",s.gateLbl.hp.style.width=(t.hp/t.maxHp*100).toFixed(0)+"%"):s.gateLbl.el.style.display="none"}}function Xa(s){for(let e of br(".screen"))e.id!=="dlg"&&e.classList.toggle("show",e.id===s)}function qa(){R.phase="menu",R.sel=[],R.paused=!1,ue("#hud").classList.add("hidden"),Xa("scr-menu"),ue("#menu-stats").innerHTML=Dt.wins+Dt.losses>0?`Siege <b>${Dt.wins}</b> \xB7 Niederlagen <b>${Dt.losses}</b> \xB7 Beste Serie <b>${Dt.best}</b>`:"Deine erste Schlacht wartet.",Ou()}function Ou(){let s=vn(Math.random()*1e9|0),e=s.pick(["canyon","river","hill","forest","river","hill"]),t=s.pick(Object.keys(Rn)),n=ku({scenario:e,biome:t,diff:"normal",army:[],seed:Math.random()*1e9|0,demo:!0});n.battle.begin(),n.battle.events.length=0,R.demo=!0,R.speed=1,Be.cam.tx=0,Be.cam.tz=0,Be.cam.tdist=78,Be.cam.tpitch=.62,Be.cam.tyaw=s.range(-.6,.6)}function xx(){R.phase="setup",Xa("scr-setup"),Bu()}function Bu(){let s=R.cfg,e=ue("#scen-grid");e.innerHTML=["random",...il].map(n=>`<div class="scen ${s.scenario===n?"on":""}" data-s="${n}">${Iu(n)}<span>${n==="random"?"Zufall":Cs[n].name}</span></div>`).join(""),ue("#scen-desc").textContent=s.scenario==="random"?"Ein zuf\xE4lliges Szenario auf einer zuf\xE4lligen Karte \u2013 lass dich \xFCberraschen.":Cs[s.scenario].desc,ue("#biome-chips").innerHTML=[["random","Zufall"],...Object.entries(Rn).map(([n,i])=>[n,i.name])].map(([n,i])=>`<button class="chip ${s.biome===n?"on":""}" data-b="${n}">${i}</button>`).join(""),ue("#tod-chips").innerHTML=[["random","Zufall"],...nu.map(n=>[n,pi[n].name])].map(([n,i])=>`<button class="chip ${(s.tod||"random")===n?"on":""}" data-tod="${n}">${i}</button>`).join(""),ue("#diff-chips").innerHTML=Object.entries(Vi).map(([n,i])=>`<button class="chip ${s.diff===n?"on":""}" data-d="${n}">${i.name}</button>`).join("");let t=[];for(let n=0;n<5;n++){let i=s.army[n],r=R.slotSel===n?" sel":"";i?t.push(`<div class="slot filled${r}" data-slot="${n}"><span class="num">${Ws[n]}</span>${Gs(i,0)}<span>${yn[i].names[0]}</span><small>${yn[i].size} Mann</small>${s.army.length>1?`<span class="x" data-rm="${n}">\u2715</span>`:""}</div>`):t.push(`<div class="slot${r}" data-slot="${n}"><span class="plus">+</span><span>Legion</span></div>`)}ue("#army-slots").innerHTML=t.join(""),ue("#type-grid").innerHTML=tu.map(n=>{let i=yn[n],r=Object.entries(i.stats).map(([o,a])=>`<span>${o}</span><div class="bar"><i style="width:${a*20}%"></i></div>`).join("");return`<div class="tcard" data-t="${n}">${Gs(n,0)}<div><b>${i.names[0]} <span style="color:var(--muted);font-weight:400;font-size:11px">\xB7 ${i.size} Mann</span></b><small>${i.desc[0]}</small><div class="tperks">${i.perks.map(o=>`<span title="${o.desc}">${o.icon} ${o.name}</span>`).join("")}</div></div><div class="bars">${r}</div></div>`}).join(""),In.set("cfg",s)}ue("#scr-setup").addEventListener("click",s=>{let e=R.cfg,t=s.target.closest("[data-s]"),n=s.target.closest("[data-b]"),i=s.target.closest("[data-d]"),r=s.target.closest("[data-tod]"),o=s.target.closest("[data-rm]"),a=s.target.closest("[data-slot]"),c=s.target.closest("[data-t]");if(t)e.scenario=t.dataset.s;else if(n)e.biome=n.dataset.b;else if(i)e.diff=i.dataset.d;else if(r)e.tod=r.dataset.tod;else if(o)e.army.splice(+o.dataset.rm,1),R.slotSel=Math.min(e.army.length,4);else if(a)R.slotSel=Math.min(+a.dataset.slot,e.army.length);else if(c){let l=R.slotSel;l<e.army.length?e.army[l]=c.dataset.t:e.army.length<5&&e.army.push(c.dataset.t),R.slotSel=Math.min(e.army.length,4),e.army.length===5&&l===4&&(R.slotSel=4)}else return;Le.play("click"),Bu()});function Du(s){Le.unlock(),R.demo=!1;let e=fx(s);R.last=e,xl(e)}function xl(s){R.sel=[];let e=ku(s);R.phase="deploy",R.paused=!1,R.speed=1,Xa(null),ue("#hud").classList.remove("hidden"),e.overlays.showZones(!0);let t=e.map.zones[0];Be.cam.tyaw=0,Be.cam.tpitch=.95,Be.focus((t.x0+t.x1)/2*.45,2,100),zn(),Mi(null),Lt("Legion ziehen \u2013 oder antippen und Zielort tippen \xB7 gelber Pfeil = drehen"),ue("#feed").innerHTML=""}function yx(){let s=R.cur;R.phase="orders",s.overlays.showZones(!1),zn(),Mi(s.player[0]),Lt("W\xE4hle eine Legion und lege Marschroute, Angriff und R\xFCckzug fest"),Yt()}function vx(){let s=R.cur;R.phase="battle",R.mode=null,s.battle.begin(),s.overlays.clearRoutes(),zn(),Lt(""),Kn(),R.selected=null,R.sel=[],Wa("ZUM ANGRIFF!"),pi[s.map.tod].desc&&(s.map.tod==="night"||s.map.tod==="fog")&&setTimeout(()=>Tt(pi[s.map.tod].desc,3500),900),s.player.some(e=>e.reserve)&&setTimeout(()=>Tt(`Reserven treffen nach ${Math.round(s.player.find(e=>e.reserve).lockedUntil)} s ein`,3e3),4500),setTimeout(()=>{R.phase==="battle"&&!R.sel.length&&Lt("Legion antippen \u2192 Boden = marschieren \xB7 Feind = angreifen \xB7 lang dr\xFCcken & ziehen = Rahmen / Ausrichtung")},2400),Le.play("drum"),setTimeout(()=>Le.play("drum"),350)}function zn(){let s=R.cur,e=R.phase,t=Cs[s.opts.scenario];ue("#hud-phase").textContent=e==="deploy"?`Aufstellung \xB7 ${t.name}`:e==="orders"?`Befehle \xB7 ${t.name}`:t.name,ue("#hud-goal").textContent=t.goal+` (${Rn[s.opts.biome].name}, ${pi[s.map.tod].name})`,ue("#hud-battle").style.visibility=e==="battle"?"visible":"hidden",ue("#speed-ctl").style.display=e==="battle"?"":"none",ue("#hud-time").style.display=e==="battle"?"":"none",ue("#pause-banner").classList.toggle("show",e==="battle"&&R.paused),ue("#btn-pause").classList.toggle("on",R.paused);for(let n of br("[data-speed]"))n.classList.toggle("on",+n.dataset.speed===R.speed);ue("#btn-sound").textContent=Xt.sound?"\u{1F50A}":"\u{1F507}",_x(),Dn()}function Dn(){let s=ue("#actions");if(R.mode==="waypoints"){s.innerHTML='<button class="btn" data-a="wp-clear">Zur\xFCcksetzen</button><button class="btn primary" data-a="wp-done">\u2713 Route fertig</button>';return}if(R.mode==="pickTarget"){s.innerHTML='<button class="btn" data-a="mode-cancel">Abbrechen</button>';return}switch(R.phase){case"deploy":{let e=R.selected&&R.selected.side===0?R.selected:null,t=e?{line:"Linie",block:"Block",wedge:"Keil"}[e.orders.formation]:"Formation";s.innerHTML=`<button class="btn" data-a="auto">Auto</button><button class="btn icon" data-a="rotL" ${e?"":"disabled"} aria-label="Links drehen">\u27F2</button><button class="btn icon" data-a="rotR" ${e?"":"disabled"} aria-label="Rechts drehen">\u27F3</button><button class="btn" data-a="form" ${e?"":"disabled"}>\u25A6 ${t}</button><button class="btn primary" data-a="to-orders">Befehle \u25B6</button>`}break;case"orders":s.innerHTML='<button class="btn" data-a="to-deploy">\u25C0 Aufstellung</button><button class="btn primary" data-a="fight">\u2694 Schlacht beginnen</button>';break;case"battle":R.sel.length?s.innerHTML='<button class="btn" data-a="cmd-halt">\u270B Halt</button><button class="btn" data-a="cmd-retreat">\u21A9 R\xFCckzug</button>'+(ue("#orders").classList.contains("show")?"":'<button class="btn" data-a="open-orders">\u2630 Befehle</button>')+'<button class="btn icon" data-a="cmd-clear" aria-label="Auswahl aufheben">\u2715</button>':s.innerHTML='<button class="btn" data-a="sel-all">\u25A3 Alle w\xE4hlen</button>';break;default:s.innerHTML=""}}ue("#actions").addEventListener("click",s=>{let e=s.target.closest("[data-a]");if(!e)return;let t=R.cur;switch(Le.play("click"),e.dataset.a){case"auto":{for(let n of t.player)n.placed=!1;Os(t.player,t.map.zones[0],0,t.map,vn(Date.now()|0)),Tt("Legionen automatisch aufgestellt");break}case"rotL":case"rotR":R.selected&&(R.selected.face+=(e.dataset.a==="rotL"?1:-1)*Math.PI/6,R.selected.formDirty=!0);break;case"form":if(R.selected){let n=["line","block","wedge"],i=R.selected;i.orders.formation=n[(n.indexOf(i.orders.formation)+1)%3],i.formDirty=!0,Tt(`${qt(i)}: Formation ${{line:"Linie",block:"Block",wedge:"Keil"}[i.orders.formation]}`),Dn()}break;case"to-orders":yx();break;case"to-deploy":Kn(),t.overlays.clearRoutes(),R.phase="deploy",t.overlays.showZones(!0),zn(),Lt("Legion ziehen \u2013 oder antippen und Zielort tippen \xB7 gelber Pfeil = drehen");break;case"fight":vx();break;case"wp-clear":R.selected&&(R.selected.orders.waypoints=[],Yt());break;case"wp-done":Gu();break;case"mode-cancel":R.mode=null,Lt(""),R.selected&&(R.selected.orders.target==="legion"&&R.selected.orders.targetId<0&&(R.selected.orders.target="nearest"),Ji(R.selected)),Dn();break;case"open-orders":R.selected&&Ji(R.selected);break;case"cmd-halt":t.battle.commandHalt(R.sel),Tt("Halt! Stellung halten"),Yt();break;case"cmd-retreat":t.battle.commandRetreat(R.sel),Tt("R\xFCckzug!"),Yt();break;case"cmd-clear":Pn([]);break;case"sel-all":Pn(t.player.filter(n=>n.alive));break}});function _x(){let s=R.cur,e=ue("#roster");e.innerHTML=s.player.map((t,n)=>`<div class="lchip" data-l="${n}">${Gs(t.typeId,0)}<div class="t"><b>${Ws[t.index]}. ${t.name}</b><span class="cnt">${t.count}/${t.maxCount}</span></div><span class="st"></span><div class="hp"><i style="width:${t.ratio*100}%"></i></div><div class="hp mo"><i></i></div></div>`).join(""),R.rosterEls=br("#roster .lchip").map(t=>({el:t,cnt:t.querySelector(".cnt"),st:t.querySelector(".st"),hp:t.querySelector(".hp i"),mo:t.querySelector(".hp.mo i")})),Mr()}function Mr(){let s=R.cur;!s||!R.rosterEls||s.player.forEach((e,t)=>{let n=R.rosterEls[t];if(!n)return;n.el.classList.toggle("sel",yl(e)),n.el.classList.toggle("dead",!e.alive),n.cnt.textContent=`${e.count}/${e.maxCount}`,n.hp.style.width=(e.ratio*100).toFixed(0)+"%";let i=R.phase==="battle"?Fu(e):e.orders.delay?"\u23F3":"";n.mo&&(n.mo.style.width=e.morale.toFixed(0)+"%",n.mo.style.background=e.morale<30?"#ff6a4a":e.morale<60?"#f0c040":"#8fd0ff"),n.st.textContent=i,n.st.style.display=i?"":"none"})}ue("#roster").addEventListener("click",s=>{let e=s.target.closest("[data-l]");if(!e)return;let t=R.cur.player[+e.dataset.l];if(t.alive){if(R.rosterLong){R.rosterLong=!1;return}Le.play("select"),R.selected===t&&Be.focus(t.x,t.z,Math.min(Be.cam.tdist,60)),Mi(t,!0)}});ue("#roster").addEventListener("pointerdown",s=>{let e=s.target.closest("[data-l]");!e||R.phase!=="battle"||(clearTimeout(R.rosterT),R.rosterT=setTimeout(()=>{let t=R.cur.player[+e.dataset.l];!t||!t.alive||(R.rosterLong=!0,Pn(R.sel.includes(t)?R.sel.filter(n=>n!==t):[...R.sel,t]),navigator.vibrate&&navigator.vibrate(12),Le.play("select"))},420))});for(let s of["pointerup","pointercancel","pointerleave"])ue("#roster").addEventListener(s,()=>clearTimeout(R.rosterT));function Pn(s,e=!1){R.sel=s.filter(t=>t&&t.alive&&t.side===0),R.selected=R.sel[0]||null,(!R.sel.length||ue("#orders").classList.contains("show")&&!R.sel.includes(R.selected))&&Kn(),ue("#orders").classList.contains("show")&&R.selected&&Ji(R.selected),e&&R.selected&&Be.focus(R.selected.x,R.selected.z),R.sel.length?Lt(R.sel.length===1?`${qt(R.selected)} \xB7 Boden tippen = marschieren \xB7 Feind tippen = angreifen`:`${R.sel.length} Legionen gew\xE4hlt \xB7 Boden tippen = in Formation marschieren`):Lt(""),Mr(),Dn(),Yt()}var yl=s=>R.sel.includes(s)||R.selected===s;function Lu(s,e,t=null){let n=R.cur,i=n.battle.commandMove(R.sel,s,e,t);n.overlays.pingMove(s,e,i),Le.play("place"),Le.play("select",.6),Yt()}function Mi(s,e=!1){if(R.phase==="battle"&&s&&s.side===0){Pn([s],e);return}if(R.selected=s,s&&s.side===0&&(R.phase==="orders"||R.phase==="battle")?Ji(s):Kn(),s&&s.side===1){let t=yn[s.typeId];Tt(`Feind: ${qt(s)} \xB7 ${s.count} Mann`)}e&&s&&R.phase==="battle"&&Be.focus(s.x,s.z),Mr(),Dn(),R.phase==="orders"&&Yt()}var Hu={move:[{key:"move",label:"Marschroute",opts:[["advance","Vorr\xFCcken"],["hold","Halten"],["flankL","\u21B0 Flanke links"],["flankR","Flanke rechts \u21B1"],["path","\u270E Eigene Route"]],help:{advance:"R\xFCckt direkt auf das gew\xE4hlte Ziel vor.",hold:"H\xE4lt die Stellung und greift nur Feinde in der N\xE4he an.",flankL:"Weiter Bogen links herum \u2013 Angriff in Flanke oder R\xFCcken (+30 % / +60 %).",flankR:"Weiter Bogen rechts herum \u2013 Angriff in Flanke oder R\xFCcken (+30 % / +60 %).",path:"Tippe bis zu 4 Wegpunkte auf die Karte. Danach wird das Ziel angegriffen."}},{key:"formation",label:"Formation",opts:[["line","Linie"],["block","Block"],["wedge","Keil"]],help:{line:"Breite Front \u2013 ausgewogen, viele K\xE4mpfer im Kontakt.",block:"Kompakt: +15 % Verteidigung, weniger Pfeilschaden, etwas langsamer.",wedge:"Keil: +10 % Angriff, st\xE4rkerer Sturmangriff, aber verwundbarer."}},{key:"delay",label:"Startsignal",opts:[[0,"Sofort"],[5,"+5 s"],[10,"+10 s"],[20,"+20 s"]],help:{0:"Marschiert beim Hornsignal los.",5:"Wartet 5 Sekunden \u2013 gut f\xFCr gestaffelte Angriffe.",10:"Wartet 10 Sekunden \u2013 z. B. bis die Front gebunden ist.",20:"Wartet 20 Sekunden \u2013 ideal als Reserve oder Hinterhalt."}}],attack:[{key:"target",label:"Angriffsziel",opts:[["nearest","N\xE4chster"],["weakest","Schw\xE4chster"],["strongest","St\xE4rkster"],["ranged","Fernk\xE4mpfer"],["legion","\u25CE Legion w\xE4hlen"],["objective","Zielgebiet"]],help:{nearest:"Greift den n\xE4chstgelegenen Feind an.",weakest:"Sucht angeschlagene Legionen, um sie zu vernichten.",strongest:"Bindet die st\xE4rkste feindliche Legion.",ranged:"Jagt Bogensch\xFCtzen \u2013 ideal f\xFCr Reiterei.",legion:"Tippe auf eine feindliche Legion als festes Ziel.",objective:"Zieht zum Missionsziel und h\xE4lt es."}},{key:"stance",label:"Haltung",opts:[["aggressive","Aggressiv"],["balanced","Ausgewogen"],["defensive","Defensiv"]],help:{aggressive:"+15 % Angriff, \u221210 % Verteidigung, verfolgt Feinde weit.",balanced:"Ausgewogenes Verhalten.",defensive:"+20 % Verteidigung, \u221210 % Angriff, bleibt eher in Position."}},{key:"skirmish",label:"Ausweichen (Sch\xFCtzen)",only:"archer",opts:[[!0,"An"],[!1,"Aus"]],help:{true:"Weicht anr\xFCckender Infanterie aus und schie\xDFt weiter.",false:"Bleibt stehen und schie\xDFt, bis der Feind da ist."}}],retreat:[{key:"retreatAt",label:"R\xFCckzug bei St\xE4rke",opts:[[0,"Nie"],[.25,"unter 25 %"],[.5,"unter 50 %"]],help:{0:"K\xE4mpft bis zum letzten Mann.",.25:"Zieht sich bei schweren Verlusten zur\xFCck.",.5:"Zieht sich fr\xFCh zur\xFCck, um die Legion zu retten."}},{key:"retreatTo",label:"R\xFCckzug nach",opts:[["camp","Ins Lager"],["ally","Zu Verb\xFCndeten"]],help:{camp:"Flieht zum eigenen Lager (bei Burgen: zum Burghof).",ally:"Zieht sich hinter die n\xE4chste eigene Legion zur\xFCck."}},{key:"afterRetreat",label:"Nach dem Sammeln",opts:[["hold","Stellung halten"],["return","Erneut angreifen"]],help:{hold:"Sammelt sich und verteidigt die Position.",return:"Sammelt sich und kehrt in den Kampf zur\xFCck."}}]};function Ji(s){let e=R.cur;ue("#orders").classList.add("show"),document.body.classList.add("orders-open"),ue("#oh-icon").innerHTML=Gs(s.typeId,0),ue("#oh-name").textContent=qt(s);let t=yn[s.typeId];ue("#oh-sub").textContent=`${s.count}/${s.maxCount} Mann \xB7 ${t.desc[0]}`,ue("#oh-perks").innerHTML=t.perks.map((n,i)=>`<button class="perk" data-perk="${i}">${n.icon} ${n.name}</button>`).join("");for(let n of br("#tabs button"))n.classList.toggle("on",n.dataset.tab===R.tab);Vu(s),Dn()}function Kn(){ue("#orders").classList.remove("show"),document.body.classList.remove("orders-open"),Dn()}function Vu(s){let e=R.cur,t=e.map.objective,n=s.orders,i=Hu[R.tab].filter(r=>!r.only||r.only===s.typeId);ue("#tab-body").innerHTML=i.map(r=>{let o=r.opts;r.key==="target"&&(o=o.filter(([h])=>h!=="objective"||t).map(([h,d])=>[h,h==="objective"?t.type==="keep"?"\u{1F3F0} Burghof":t.type==="exit"?"\u{1F3C1} Talausgang":"\u26F0 Steinkreis":d]));let a=n[r.key],c=o.map(([h,d])=>`<button class="chip ${String(a)===String(h)?"on":""}" data-k="${r.key}" data-v="${h}">${d}</button>`).join(""),l="";if(r.key==="target"&&a==="legion"){let h=e.legions.find(d=>d.id===n.targetId&&d.alive);l=h?` Ziel: <b>${qt(h)}</b>`:" Noch kein Ziel gew\xE4hlt."}return r.key==="move"&&a==="path"&&(l=` ${n.waypoints.length}/4 Wegpunkte gesetzt.`),`<div class="og"><label>${r.label}</label><div class="chips">${c}</div><p>${r.help[String(a)]||""}${l}</p></div>`}).join("")}ue("#oh-perks").addEventListener("click",s=>{let e=s.target.closest("[data-perk]");if(!e||!R.selected)return;let t=R.selected.T.perks[+e.dataset.perk];Tt(`${t.icon} ${t.name}: ${t.desc}`,4200)});ue("#tabs").addEventListener("click",s=>{let e=s.target.closest("[data-tab]");!e||!R.selected||(R.tab=e.dataset.tab,Le.play("click"),Ji(R.selected))});ue("#oh-close").addEventListener("click",()=>{Kn(),Le.play("click")});ue("#tab-body").addEventListener("click",s=>{let e=s.target.closest("[data-k]"),t=R.selected;if(!e||!t)return;let n=e.dataset.k,i=e.dataset.v;(n==="delay"||n==="retreatAt")&&(i=+i),n==="skirmish"&&(i=i==="true"),t.orders[n]=i,Le.play("click"),n==="move"&&i==="path"?(t.orders.waypoints=[],R.mode="waypoints",Lt("Tippe bis zu 4 Wegpunkte auf die Karte"),Kn()):n==="target"&&i==="legion"?(R.mode="pickTarget",Lt("Tippe auf eine feindliche (rote) Legion"),Kn()):R.mode&&(R.mode=null,Lt("")),n==="formation"&&(t.formDirty=!0),R.phase==="battle"&&R.mode!=="waypoints"&&(R.cur.battle.clearCommand(t),R.cur.battle.applyOrders(t)),Vu(t),Dn(),Yt()});ue("#btn-copy").addEventListener("click",()=>{let s=R.selected;if(!s)return;let e=Hu[R.tab].map(t=>t.key).filter(t=>t!=="move"&&t!=="target"&&t!=="skirmish");R.tab==="attack"&&e.push("target");for(let t of R.cur.player)if(!(t===s||!t.alive)){for(let n of e){if(n==="target"&&s.orders.target==="legion"){t.orders.target="legion",t.orders.targetId=s.orders.targetId;continue}t.orders[n]=s.orders[n]}R.tab==="move"&&(t.orders.formation=t.typeId==="cavalry"&&s.orders.formation==="line"?"wedge":s.orders.formation,t.formDirty=!0),R.phase==="battle"&&R.cur.battle.applyOrders(t)}Le.play("select"),Tt("Einstellungen f\xFCr alle Legionen \xFCbernommen"),Yt()});function Gu(){let s=R.selected;R.mode=null,Lt(""),s&&!s.orders.waypoints.length&&(s.orders.move="advance",Tt("Keine Wegpunkte \u2013 Legion r\xFCckt direkt vor")),s&&R.phase==="battle"&&R.cur.battle.applyOrders(s),s&&Ji(s),Dn(),Yt()}function Yt(){let s=R.cur;if(!s)return;let e=s.overlays;if(e.clearRoutes(),R.phase!=="orders"&&!(R.phase==="battle"&&R.selected))return;let t=R.phase==="orders"?s.player:R.sel.length?R.sel:[R.selected];for(let n of t){if(!n.alive||n.side!==0)continue;let i=yl(n);if(R.phase==="orders"){let{pts:r,target:o}=s.battle.previewRoute(n);r.length>1&&e.addRoute(r,i?16765802:6988543,!i,i?.8:.55),i&&o&&e.addMarker(o.x,o.z,16734794,Math.max(o.halfW,o.halfD)+1.6),n.orders.move==="hold"&&i&&e.addMarker(n.x,n.z,6988543,s.battle.aggroRadius(n))}else{let r=[[n.x,n.z],...n.path];if(n.wp)for(let a=n.wpIdx;a<n.wp.length;a++)r.push(n.wp[a]);r.length>1&&e.addRoute(r,16765802,!1,.7);let o=n.melee||n.target;o&&o.alive&&e.addMarker(o.x,o.z,16734794,Math.max(o.halfW,o.halfD)+1.6)}i&&n.orders.move==="path"&&n.orders.waypoints.forEach((r,o)=>e.addFlag(r[0],r[1],16765802))}}var bn=new Map,ie=null,vl=ue("#c");function Jn(s,e){let t=R.cur;return t?Be.pick(s,e,t.world.water?[t.world.terrain,t.world.water]:[t.world.terrain]):null}function Mx(s,e,t=0){let n=R.cur,i=Jn(s,e);if(!i)return null;let r=null,o=1e9;for(let a of n.legions){if(!a.alive)continue;let c=Math.hypot(a.x-i.x,a.z-i.z),l=Math.max(a.halfW,a.halfD)+2.5+(a.side===0?t:0);c<l&&c<o&&(o=c,r=a)}return r}function Wu(s,e=null){if(Le.unlock(),Be.stopFling(),!(R.phase==="menu"||R.phase==="setup"||R.phase==="result"||R.phase==="loading")){if(bn.set(s.pointerId,{x:s.clientX,y:s.clientY}),bn.size===1){let t=e,n=!1,i=Jn(s.clientX,s.clientY);if(R.phase==="deploy"&&R.selected&&R.selected.side===0&&i){let r=R.selected,o=i.x-r.x,a=i.z-r.z,c=o*r.fwdX+a*r.fwdZ,l=o*r.fwdZ-a*r.fwdX,h=Math.abs(c)<r.halfD+.8&&Math.abs(l)<r.halfW+.8,d=r.x+r.fwdX*(r.halfD+3.2),f=r.z+r.fwdZ*(r.halfD+3.2);!h&&Math.hypot(i.x-d,i.z-f)<3.4?(t=r,n=!0):h&&!t&&(t=r)}t||(t=Mx(s.clientX,s.clientY,R.phase==="deploy"?1.5:0)),clearTimeout(R.lpT),R.phase==="battle"&&!(t&&t.side===0)&&(R.lpT=setTimeout(()=>{if(!(!ie||ie.type!=="tap"))if(navigator.vibrate&&navigator.vibrate(12),R.sel.length)ie.type="facing",ie.fp=Jn(ie.sx,ie.sy),Lt("Ziehen = Blickrichtung am Ziel festlegen");else{ie.type="box";let r=ue("#selbox");r.style.display="block",qu(ie.sx,ie.sy)}},330)),ie={type:"tap",vx:0,vy:0,sx:s.clientX,sy:s.clientY,lx:s.clientX,ly:s.clientY,t:performance.now(),legion:t,button:s.button,turn:n,g0:i}}else if(bn.size===2){let[t,n]=[...bn.values()];ie={type:"pinch",d:Math.hypot(t.x-n.x,t.y-n.y),ang:Math.atan2(n.y-t.y,n.x-t.x),mx:(t.x+n.x)/2,my:(t.y+n.y)/2}}}}vl.addEventListener("pointerdown",s=>Wu(s));window.addEventListener("pointermove",s=>{let e=bn.get(s.pointerId);if(!e||!ie)return;if(e.x=s.clientX,e.y=s.clientY,ie.type==="pinch"&&bn.size>=2){let[r,o]=[...bn.values()],a=Math.hypot(r.x-o.x,r.y-o.y),c=Math.atan2(o.y-r.y,o.x-r.x),l=(r.x+o.x)/2,h=(r.y+o.y)/2;a>10&&Be.zoom(ie.d/a);let d=c-ie.ang;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),Be.rotate(-d);let f=l-ie.mx,p=h-ie.my;Math.abs(a-ie.d)<4&&Math.abs(p)>Math.abs(f)*1.5?Be.tilt(p*.004):Be.pan(f,p),ie.d=a,ie.ang=c,ie.mx=l,ie.my=h;return}let t=s.clientX-ie.lx,n=s.clientY-ie.ly;ie.lx=s.clientX,ie.ly=s.clientY;let i=Math.hypot(s.clientX-ie.sx,s.clientY-ie.sy);if(ie.type==="box"){qu(s.clientX,s.clientY);return}if(ie.type==="facing"){wx(s.clientX,s.clientY);return}if(ie.type==="tap"&&i>9){clearTimeout(R.lpT);let r=ie.legion;R.phase==="deploy"&&r&&r.side===0&&r.reserve?(Tt("Die Reserve wartet im Lager"),ie.type="pan"):R.phase==="deploy"&&r&&r.side===0&&ie.button!==2?(ie.type=ie.turn?"turn":"drag",ie.off=ie.g0?[r.x-ie.g0.x,r.z-ie.g0.z]:[0,0],R.selected!==r&&Mi(r)):ie.type=ie.button===2?"rotate":"pan"}if(ie.type==="pan"){Be.pan(t,n);let r=performance.now(),o=Math.max(8,r-(ie.lt||r-16));ie.lt=r,ie.vx=ie.vx*.5+t/o*1e3*.5,ie.vy=ie.vy*.5+n/o*1e3*.5}else ie.type==="rotate"?(Be.rotate(-t*.006),Be.tilt(n*.004)):ie.type==="drag"?(Ax(s.clientX,s.clientY),Ex(ie.legion,s.clientX,s.clientY,ie.off)):ie.type==="turn"&&Tx(ie.legion,s.clientX,s.clientY)});var Xu=s=>{bn.has(s.pointerId)&&(bn.delete(s.pointerId),clearTimeout(R.lpT),ie&&(ie.type==="box"&&bx(s.clientX,s.clientY),ie.type==="facing"&&Sx(s.clientX,s.clientY),ie.type==="tap"&&bn.size===0&&performance.now()-ie.t<450&&Rx(s.clientX,s.clientY,ie.legion),ie.type==="drag"&&($u(ie.legion),Le.play("place")),ie.type==="pan"&&performance.now()-(ie.lt||0)<80&&Be.fling(ie.vx,ie.vy),bn.size===0?ie=null:ie.type==="pinch"&&(ie={type:"none"})))};window.addEventListener("pointerup",Xu);window.addEventListener("pointercancel",Xu);vl.addEventListener("contextmenu",s=>s.preventDefault());vl.addEventListener("wheel",s=>{s.preventDefault(),Be.zoom(s.deltaY>0?1.1:.9)},{passive:!1});window.addEventListener("keydown",s=>{if(!R.cur)return;let e=s.key;(e==="ArrowLeft"||e==="a")&&Be.pan(40,0),(e==="ArrowRight"||e==="d")&&Be.pan(-40,0),(e==="ArrowUp"||e==="w")&&Be.pan(0,40),(e==="ArrowDown"||e==="s")&&Be.pan(0,-40),e==="q"&&Be.rotate(.15),e==="e"&&Be.rotate(-.15),e===" "&&R.phase==="battle"&&Qu()});function qu(s,e){let t=ue("#selbox"),n=Math.min(ie.sx,s),i=Math.min(ie.sy,e);t.style.left=n+"px",t.style.top=i+"px",t.style.width=Math.abs(s-ie.sx)+"px",t.style.height=Math.abs(e-ie.sy)+"px"}function bx(s,e){ue("#selbox").style.display="none";let t=R.cur,n=Math.min(ie.sx,s)-14,i=Math.max(ie.sx,s)+14,r=Math.min(ie.sy,e)-14,o=Math.max(ie.sy,e)+14,a=t.player.filter(c=>c.alive?(Be.project(c.x,t.map.getHeight(c.x,c.z)+1,c.z,bt),bt.visible&&bt.x>=n&&bt.x<=i&&bt.y>=r&&bt.y<=o):!1);Pn(a),a.length&&Le.play("select")}function wx(s,e){let t=Jn(s,e);if(!t||!ie.fp)return;let n=t.x-ie.fp.x,i=t.z-ie.fp.z;ie.face=Math.hypot(n,i)>2?Math.atan2(n,i):null,R.cur.overlays.showGhosts(R.cur.battle.planMove(R.sel,ie.fp.x,ie.fp.z,ie.face))}function Sx(){var s;R.cur.overlays.clearGhosts(),ie.fp&&Lu(ie.fp.x,ie.fp.z,(s=ie.face)!=null?s:null),Pn(R.sel)}function Yu(s,e){let t=R.cur,n=t.map.zones[0],i=(a,c)=>t.map.isPassable(a,c,0)&&t.map.clearanceAt(a,c)>=2.5,r=a=>Math.max(n.x0+3,Math.min(n.x1-3,a)),o=a=>Math.max(n.z0+3,Math.min(n.z1-3,a));if(s=r(s),e=o(e),i(s,e))return[s,e];for(let a=1;a<=12;a+=1)for(let c=0;c<16;c++){let l=r(s+Math.cos(c*Math.PI/8)*a),h=o(e+Math.sin(c*Math.PI/8)*a);if(i(l,h))return[l,h]}return null}function Ex(s,e,t,n=[0,0]){let i=Jn(e,t);if(!i)return;let r=Yu(i.x+n[0],i.z+n[1]);r&&(s.x=r[0],s.z=r[1])}function Tx(s,e,t){let n=Jn(e,t);if(!n)return;let i=n.x-s.x,r=n.z-s.z;Math.hypot(i,r)<1.5||(s.face=Math.atan2(i,r),s.formDirty=!0)}function $u(s){let e=R.cur;if(!e.player.filter(o=>o!==s&&o.alive).some(o=>Math.hypot(o.x-s.x,o.z-s.z)<(Math.max(o.halfW,o.halfD)+Math.max(s.halfW,s.halfD))*.75))return;for(let o of e.player)o.placed=!0;let[i,r]=Ba(e.map,e.map.zones[0],s.x,s.z,s,0,e.player);s.x=i,s.z=r}function Ax(s,e){let i=0,r=0;s<48?i=9:s>innerWidth-48&&(i=-9),e<88?r=9:e>innerHeight-48-50&&(r=-9),(i||r)&&Be.pan(i,r)}function Rx(s,e,t){let n=R.cur;if(n){if(R.mode==="waypoints"){let i=R.selected,r=Jn(s,e);if(!i||!r)return;if(!n.map.isPassable(r.x,r.z,0)){Tt("Dort ist kein Durchkommen");return}i.orders.waypoints.push([r.x,r.z]),Le.play("place"),Yt(),Lt(`Wegpunkt ${i.orders.waypoints.length}/4 gesetzt \u2013 weitere tippen oder \u201ERoute fertig\u201C`),i.orders.waypoints.length>=4&&Gu();return}if(R.mode==="pickTarget"){let i=R.selected;t&&t.side===1&&i?(i.orders.target="legion",i.orders.targetId=t.id,R.mode=null,Lt(""),Le.play("select"),Tt(`Ziel: ${qt(t)}`),R.phase==="battle"&&n.battle.applyOrders(i),Ji(i),Yt()):Tt("Tippe auf eine feindliche (rote) Legion");return}if(R.phase==="battle"){let i=performance.now();if(t&&t.side===0){R.lastTap&&R.lastTap.L===t&&i-R.lastTap.t<380?(Pn(n.player.filter(r=>r.alive&&r.typeId===t.typeId)),Tt(`Alle ${t.name} gew\xE4hlt`)):R.sel.length===1&&R.sel[0]===t?Pn([]):Pn([t]),R.lastTap={L:t,t:i},Le.play("select");return}if(t&&t.side===1){R.sel.length?(n.battle.commandAttack(R.sel,t),n.overlays.pingAttack(t),Le.play("clash",.7),Tt(`Angriff auf ${qt(t)}!`),Yt()):Tt(`Feind: ${qt(t)} \xB7 ${t.count} Mann`);return}if(R.sel.length){let r=Jn(s,e);r&&Lu(r.x,r.z)}return}if(t){Le.play("select"),Mi(t);return}if(R.phase==="deploy"&&R.selected&&R.selected.side===0&&!R.selected.reserve){let i=Jn(s,e),r=n.map.zones[0];if(i&&i.x>r.x0&&i.x<r.x1&&i.z>r.z0&&i.z<r.z1){let o=Yu(i.x,i.z);if(o){R.selected.x=o[0],R.selected.z=o[1],$u(R.selected),Le.play("place");return}}i&&Tt("Aufstellen nur in der blauen Zone"),Mi(null);return}R.selected&&(Mi(null),R.phase==="orders"&&Yt())}}function Zu(s){return s=Math.max(0,Math.ceil(s)),`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}function Cx(){let s=R.cur;if(!s||R.phase!=="battle"){Mr();return}let e=s.battle,t=e.strength(0),n=e.strength(1);ue("#str0").textContent=t,ue("#str1").textContent=n;let i=Math.max(1,t+n);ue("#sbar0").style.width=t/i*100+"%",ue("#sbar1").style.width=n/i*100+"%",ue("#hud-time").textContent=Zu(e.timeLimit-e.time);let r=s.map.objective,o=ue("#hud-obj");if(r)if(o.classList.add("show"),r.type==="exit"){let a=Math.ceil(e.start[0]*r.need);o.innerHTML=`\u{1F3C1} Talausgang <span class="pbar"><i style="width:${Math.min(100,r.escaped/a*100)}%;background:#6aa2ff"></i></span> ${r.escaped}/${a} Mann`}else if(r.type==="keep"){let a=1-r.owner,c=a===0?"#6aa2ff":"#ff6a5a";o.innerHTML=`\u{1F3F0} Burghof ${a===0?"einnehmen":"verteidigen"} <span class="pbar"><i style="width:${r.hold/r.need*100}%;background:${c}"></i></span> ${Math.floor(r.hold)}/${r.need} s`}else o.innerHTML=`\u26F0 <b style="color:#8fb8ff">${Math.floor(r.score[0])}</b> <span class="pbar"><i style="width:${r.score[0]}%;background:#6aa2ff"></i></span><span class="pbar"><i style="width:${r.score[1]}%;background:#ff6a5a;margin-left:auto"></i></span> <b style="color:#ff8f86">${Math.floor(r.score[1])}</b> / 100`;else o.classList.remove("show");if(Mr(),R.selected&&ue("#orders").classList.contains("show")){let a=R.selected;ue("#oh-sub").textContent=a.alive?`${a.count}/${a.maxCount} Mann \xB7 Moral ${a.morale.toFixed(0)}% \xB7 Ausdauer ${a.stamina.toFixed(0)}% \xB7 ${Ix(a)}`:"Vernichtet"}}function Ix(s){return s.routed?"FLIEHT \u2013 nicht steuerbar":s.morale<30?"wankt!":{melee:"im Nahkampf",shoot:"schie\xDFt",retreat:"zieht sich zur\xFCck",regroup:"sammelt sich",wait:"wartet auf Signal",hold:"h\xE4lt Stellung",move:"marschiert",engage:"r\xFCckt vor",kite:"weicht aus",breach:"berennt das Tor",idle:"bereit",dead:"vernichtet"}[s.state]||s.state}function _i(s,e=-1){let t=ue("#feed"),n=document.createElement("div");for(n.className=e>=0?"p"+e:"",n.textContent=s,t.appendChild(n);t.children.length>5;)t.removeChild(t.firstChild);setTimeout(()=>n.remove(),6e3)}var Uu=0;function Tt(s,e=1900){let t=ue("#toast");t.textContent=s,t.classList.add("show"),clearTimeout(Uu),Uu=setTimeout(()=>t.classList.remove("show"),e)}function Px(s,e,t){let n=R.cur;if(!n||R.demo||(Be.project(s.x,n.map.getHeight(s.x,s.z)+6.5,s.z,bt),!bt.visible))return;let i=document.createElement("div"),r=s.side===0,o=t==="warn"?"warn":t==="bad"===r?"bad":"good";i.className="ftxt "+o,i.textContent=e,i.style.left=bt.x+"px",i.style.top=bt.y+"px",ue("#labels").appendChild(i),setTimeout(()=>i.remove(),1700)}function Lt(s){ue("#hint").textContent=s}function Wa(s){let e=document.createElement("div");e.className="big-banner",e.textContent=s,document.body.appendChild(e),setTimeout(()=>e.remove(),2300)}function zx(s){let e=s.battle,t=s.units.fx,n=R.demo,i=Be.cam,r=(o,a)=>Math.max(.05,1-Math.hypot(o-i.x,a-i.z)/110)*(n?.35:1)*Math.max(.35,1-i.dist/220);for(let o of e.events){let a=o.x!==void 0?s.map.getHeight(o.x,o.z):0;switch(o.type){case"clash":t.burst(o.x,a+1.3,o.z,o.soft?4:8),Le.play("clash",r(o.x,o.z));break;case"impact":t.burst(o.x,a+1.3,o.z,20,!0),t.puff(o.x,a,o.z,8,1.4),Le.play("impact",r(o.x,o.z)),!n&&o.broken&&_i("Die Piken brechen den Reiterangriff!");break;case"volley":Le.play("volley",r(o.x,o.z));break;case"arrowhit":Le.play("arrowhit",r(o.x,o.z)),t.puff(o.x,a,o.z,2,.6);break;case"death":Le.play("death",r(o.x,o.z)*.8);break;case"gatehit":t.puff(o.x,a+1,o.z,3,1),t.burst(o.x,a+2.5,o.z,4),Le.play("gate",r(o.x,o.z));break;case"gatebroken":t.splinters(o.x,s.map.castle.base,o.z),t.puff(o.x,a,o.z,14,2.2),Le.play("gatebroken",r(o.x,o.z)+.3),n||(_i("Das Burgtor ist gefallen!"),Wa("DAS TOR F\xC4LLT"));break;case"breach":!n&&!o.legion.breachAnnounced&&(o.legion.breachAnnounced=!0,_i(`${qt(o.legion)} berennt das Tor`,o.legion.side));break;case"retreat":n||(_i(`${qt(o.legion)} zieht sich zur\xFCck`,o.side),Le.play("retreat",.8));break;case"rally":n||_i(`${qt(o.legion)} hat sich gesammelt`,o.legion.side);break;case"float":Px(o.legion,o.text,o.cls);break;case"reserve":n||(_i(`${qt(o.legion)} greift ein!`,o.legion.side),o.legion.side===0&&(Wa("VERST\xC4RKUNG!"),Le.play("horn",.7)));break;case"rout":n||(_i(`${qt(o.legion)} bricht und flieht!`,o.side),Le.play("retreat",.9));break;case"legionlost":n||_i(`${qt(o.legion)} wurde vernichtet`,o.side),R.phase==="battle"&&R.sel.includes(o.legion)?Pn(R.sel.filter(c=>c.alive)):R.selected===o.legion&&Mi(null);break;case"horn":Le.play("horn",n?.3:1);break}}if(e.events.length=0,s.dustT-=1/60,s.dustT<=0){s.dustT=.12;for(let o of s.legions){if(!o.alive)continue;let a=o.typeId==="cavalry"&&o.speedCur>2.5;if(a||o.state==="melee"&&Math.random()<.3){let c=o.soldiers[Math.random()*o.soldiers.length|0];c&&c.alive&&s.map.biome!=="winter"&&t.puff(c.x,c.y,c.z,1,a?.9:.6)}}}}function Dx(){let s=R.cur,e=s.battle,t=e.winner===0;R.phase="result",Kn(),t?(Dt.wins++,Dt.streak++,Dt.best=Math.max(Dt.best,Dt.streak)):(Dt.losses++,Dt.streak=0),In.set("stats",Dt),Le.play(t?"victory":"defeat"),Wa(t?"SIEG":"NIEDERLAGE"),setTimeout(()=>{if(R.cur!==s)return;let n=ue("#res-title");n.textContent=t?"SIEG":"NIEDERLAGE",n.className="result-title "+(t?"win":"lose"),ue("#res-reason").textContent=e.reason;let i=o=>{let a=s.legions.filter(c=>c.side===o);return`<div class="rs-col p${o}"><h4>${Zn[o].name}</h4>${a.map(c=>`<div class="rs-line"><span>${qt(c)}</span><span>${c.alive?c.count+"/"+c.maxCount:"\u271D"} \xB7 \u2694 ${c.kills}</span></div>`).join("")}</div>`},r=s.player.slice().sort((o,a)=>a.kills-o.kills)[0];ue("#res-stats").innerHTML=i(0)+i(1)+`<div class="rs-sum"><div>Dauer<b>${Zu(e.time)}</b></div><div>Eigene Verluste<b>${e.lost[0]}</b></div><div>Feindliche Verluste<b>${e.lost[1]}</b></div><div>Beste Legion<b>${r?Ws[r.index]+". "+r.name:"\u2013"}</b></div></div>`,Xa("scr-result")},2200)}function _l(s,e){ue("#dlg-body").innerHTML=s;let t=ue("#dlg-actions");t.innerHTML="";for(let[n,i,r]of e){let o=document.createElement("button");o.className="btn"+(r?" primary":""),o.textContent=n,o.onclick=()=>{Le.play("click"),Ju(),i&&i()},t.appendChild(o)}ue("#dlg").classList.add("show")}function Ju(){ue("#dlg").classList.remove("show")}var Ux=()=>ue("#dlg").classList.contains("show");function Nx(){_l(`<h2>Anleitung</h2>
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
  <h4>Moral, Ausdauer & Flanken \u2013 so gewinnst du</h4>
  <ul><li><b>Moral</b> (blauer Balken unter der Legion): Verluste, Angriffe in <b>Flanke</b> oder <b>R\xFCcken</b>, <b>Umzingelung</b>, Pfeilhagel und fliehende Nachbarn senken sie. Unter 30 % <b>wankt</b> die Legion (\u26A0), bei 0 <b>flieht</b> sie (\u2691) und ist nicht mehr steuerbar, bis sie sich gesammelt hat.</li>
  <li><b>Ausdauer</b>: Laufen und K\xE4mpfen erm\xFCdet (\u{1F4A4} = ersch\xF6pft, schw\xE4cher und langsamer). Wer wartet, k\xE4mpft ausgeruht.</li>
  <li><b>Frontbreite</b>: Nur die vorderen Reihen k\xE4mpfen. Greifst du einen gebundenen Feind zus\xE4tzlich von der Seite an, bringst du viel mehr M\xE4nner ins Gefecht.</li>
  <li>Tipp: Binde den Feind frontal mit Infanterie, dann Reiter oder zweite Legion in Flanke/R\xFCcken.</li></ul>
  <h4>Tageszeit, Reserven, Hinterhalt</h4>
  <ul><li><b>Nacht</b>: Sch\xFCtzen \u221230 % Reichweite, Feinde werden sp\xE4ter erkannt. <b>Nebel</b>: \u221220 % Reichweite, weniger Treffer.</li>
  <li><b>Reserven</b> (\u23F3) warten im Lager und greifen nach etwa einer Minute ein.</li>
  <li><b>Hinterhalt</b>: Durchbrechen zum Talausgang \u2013 oder die getrennten Feindgruppen einzeln schlagen.</li>
  <li>Wasser ist nur \xFCber Br\xFCcken, Furten und S\xFCmpfe passierbar.</li></ul>
  <h4>Taktik</h4>
  <ul><li><b>Pikeniere</b> brechen Reiterangriffe (\xD72,6 Schaden gegen Reiter).</li>
  <li><b>Reiterei</b> zerschl\xE4gt Bogensch\xFCtzen und trifft mit Sturmangriff hart \u2013 am besten in Flanke oder R\xFCcken.</li>
  <li><b>Bogensch\xFCtzen</b> zerm\xFCrben aus der Distanz, Wald und Mauern bieten dem Ziel Deckung.</li>
  <li><b>Pr\xE4torianer</b> trotzen Pfeilen und halten jede Stellung.</li>
  <li>Angriffe in die <b>Flanke</b> (+30 %) oder den <b>R\xFCcken</b> (+60 %) entscheiden Schlachten. <b>H\xF6he</b> gibt +20 %.</li>
  <li>Furten verlangsamen und schw\xE4chen die Verteidigung. Burgtore m\xFCssen erst eingeschlagen werden.</li>
  <li>Ein rechtzeitiger <b>R\xFCckzug</b> rettet Legionen \u2013 gesammelt kehren sie zur\xFCck.</li></ul>`,[["Verstanden",null,!0]])}function Ku(){let s=Xt.quality;_l(`<h2>Einstellungen</h2>
    <div class="set-row"><span>Ton</span><div class="chips"><button class="chip ${Xt.sound?"on":""}" data-set="sound" data-v="1">An</button><button class="chip ${Xt.sound?"":"on"}" data-set="sound" data-v="0">Aus</button></div></div>
    <div class="set-row"><span>Grafik</span><div class="chips">${[["high","Hoch"],["medium","Mittel"],["low","Niedrig"]].map(([e,t])=>`<button class="chip ${s===e?"on":""}" data-set="quality" data-v="${e}">${t}</button>`).join("")}</div></div>
    <div class="set-row"><span>Statistik</span><button class="btn small" data-set="reset">Zur\xFCcksetzen</button></div>
    <p style="color:var(--muted);font-size:11px">\u201ENiedrig\u201C schaltet Schatten und Kantengl\xE4ttung ab \u2013 f\xFCr \xE4ltere Ger\xE4te.</p>`,[["Fertig",null,!0]]),ue("#dlg-body").onclick=e=>{let t=e.target.closest("[data-set]");if(t){if(Le.play("click"),t.dataset.set==="sound"&&(Xt.sound=t.dataset.v==="1",Le.setEnabled(Xt.sound)),t.dataset.set==="quality"){Xt.quality=t.dataset.v,In.set("settings",Xt),Tt("Grafik wird neu geladen \u2026"),setTimeout(()=>location.reload(),500);return}t.dataset.set==="reset"&&(Object.assign(Dt,{wins:0,losses:0,streak:0,best:0}),In.set("stats",Dt),Tt("Statistik zur\xFCckgesetzt")),In.set("settings",Xt),Ku()}}}function ju(){let s=R.paused;R.phase==="battle"&&(R.paused=!0,zn()),_l(`<h2>Schlacht</h2><p>${Cs[R.cur.opts.scenario].name} \xB7 ${Rn[R.cur.opts.biome].name} \xB7 ${Vi[R.cur.opts.diff].name}</p>`,[["Weiter",()=>{R.phase==="battle"&&(R.paused=s,zn())},!0],["Neu starten",()=>xl({...R.last,seed:R.last.seed})],["Aufgeben",()=>{R.phase==="battle"&&(Dt.losses++,Dt.streak=0,In.set("stats",Dt)),qa()}]])}function Qu(){R.paused=!R.paused,Le.play("click"),zn()}document.addEventListener("click",s=>{let e=s.target.closest("[data-act]");if(e)switch(Le.unlock(),Le.play("click"),e.dataset.act){case"new":xx();break;case"quick":{let t=vn(Date.now()|0),n=t.int(3,4),i=[];for(let r=0;r<n;r++)i.push(t.pick(["legion","legion","archer","cavalry","pike","guard"]));Du({scenario:"random",biome:"random",diff:R.cfg.diff,army:i});break}case"help":Nx();break;case"settings":Ku();break;case"menu":qa();break;case"deploy":Du(R.cfg);break;case"rematch":xl({...R.last});break}});ue("#btn-exit").addEventListener("click",()=>{Le.play("click"),ju()});ue("#btn-pause").addEventListener("click",Qu);ue("#btn-sound").addEventListener("click",()=>{Xt.sound=!Xt.sound,Le.setEnabled(Xt.sound),In.set("settings",Xt),zn()});for(let s of br("[data-speed]"))s.addEventListener("click",()=>{R.speed=+s.dataset.speed,R.paused&&(R.paused=!1),Le.play("click"),zn()});window.onAndroidBack=()=>Ux()?(Ju(),!0):R.mode?(R.mode=null,Lt(""),Dn(),!0):ue("#orders").classList.contains("show")?(Kn(),!0):R.phase==="deploy"||R.phase==="orders"||R.phase==="battle"?(ju(),!0):R.phase==="setup"||R.phase==="result"?(qa(),!0):!1;window.onAndroidPause=()=>{R.phase==="battle"&&!R.paused&&(R.paused=!0,zn()),Le.suspend()};document.addEventListener("visibilitychange",()=>{document.hidden?window.onAndroidPause():Le.resume()});var Nu=performance.now(),Ga=0,gl=0,vr=0,Zi=0,_r=1/60;function ed(s){requestAnimationFrame(ed);let e=Math.min(.05,Math.max(.001,(s-Nu)/1e3));Nu=s,Zi+=e;let t=R.cur;if(t){let n=t.battle;if((R.phase==="battle"&&!R.paused||R.demo&&(R.phase==="menu"||R.phase==="setup"))&&!n.over){Ga+=e*R.speed;let r=0;for(;Ga>=_r&&r<12;)n.step(_r),t.brain.update(_r),t.brain0&&t.brain0.update(_r),Ga-=_r,r++;r>=12&&(Ga=0);for(let o of t.legions)n.updateSoldiers(o,e*R.speed);zx(t)}else if(R.phase==="deploy"||R.phase==="orders")for(let r of t.legions)r.formDirty&&r.layout(),n.updateSoldiers(r,R.phase==="deploy"?e*2.2:e);else R.phase==="result"||R.phase==="battle"&&R.paused;R.demo&&n.over&&!t.restartAt&&(t.restartAt=Zi+4),R.demo&&t.restartAt&&Zi>t.restartAt&&(R.phase==="menu"||R.phase==="setup")&&Ou(),!R.demo&&R.phase==="battle"&&n.over&&Dx(),t.units.fx.simTime=n.time,t.units.fx.battleArrows=n.arrows,t.units.update(Zi,e,R.phase==="battle"?new Set(R.sel):R.selected,null),t.overlays.updatePings(e),t.world.camTarget=Be.cam,pu(t.world,Zi,e,t.map),t.overlays.updateObjective(Zi),t.overlays.updateFootprints(t.player,R.selected,R.phase==="deploy"||R.phase==="orders",R.phase==="deploy",Zi),gx(t),gl-=e,gl<=0&&(gl=.2,Cx()),vr-=e,R.phase==="battle"&&R.selected&&vr<=0?(vr=.5,Yt()):R.phase==="battle"&&!R.selected&&vr<=0&&(vr=.5,t.overlays.clearRoutes())}(R.phase==="menu"||R.phase==="setup")&&(Be.cam.tyaw+=e*.035),Be.updateCamera(e),Be.render()}function kx(){try{qa(),ue("#loading").classList.remove("show"),requestAnimationFrame(ed)}catch(s){throw ue("#loading").innerHTML=`<div style="padding:20px;color:#fff">Fehler beim Start: ${s.message}</div>`,s}}window.__G=R;window.__stage=Be;setTimeout(kx,30);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
