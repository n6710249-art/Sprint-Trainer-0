(()=>{var Dc="170";var zu=0,gl=1,Uu=2;var wh=1,zc=2,Un=3,ei=0,Ue=1,Me=2,Qn=0,Qi=1,xl=2,_l=3,yl=4,Nu=5,yi=100,Fu=101,Lu=102,ku=103,Ou=104,Bu=200,Hu=201,Vu=202,Gu=203,mo=204,go=205,Wu=206,Xu=207,qu=208,Yu=209,$u=210,Zu=211,Ju=212,Ku=213,ju=214,xo=0,_o=1,yo=2,is=3,vo=4,Mo=5,bo=6,So=7,da=0,Qu=1,td=2,ti=0,ed=1,nd=2,id=3,sd=4,rd=5,ad=6,od=7;var Eh=300,ss=301,rs=302,wo=303,Eo=304,fa=306,To=1e3,bi=1001,Ao=1002,$e=1003,cd=1004;var cr=1005;var yn=1006,Fa=1007;var Si=1008;var kn=1009,Th=1010,Ah=1011,Gs=1012,Uc=1013,wi=1014,vn=1015,Ks=1016,Nc=1017,Fc=1018,as=1020,Rh=35902,Ch=1021,Ih=1022,hn=1023,Ph=1024,Dh=1025,ts=1026,os=1027,Lc=1028,kc=1029,zh=1030,Oc=1031;var Bc=1033,zr=33776,Ur=33777,Nr=33778,Fr=33779,Ro=35840,Co=35841,Io=35842,Po=35843,Do=36196,zo=37492,Uo=37496,No=37808,Fo=37809,Lo=37810,ko=37811,Oo=37812,Bo=37813,Ho=37814,Vo=37815,Go=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,$o=37821,Lr=36492,Zo=36494,Jo=36495,Uh=36283,Ko=36284,jo=36285,Qo=36286;var kr=2300,tc=2301,La=2302,vl=2400,Ml=2401,bl=2402;var ld=3200,hd=3201;var Hc=0,ud=1,jn="",tn="srgb",ds="srgb-linear",pa="linear",oe="srgb";var Li=7680;var Sl=519,dd=512,fd=513,pd=514,Nh=515,md=516,gd=517,xd=518,_d=519,wl=35044,js=35048;var El="300 es",Fn=2e3,Or=2001,ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ka=Math.PI/180,ec=180/Math.PI;function Qs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function yd(i,t){return(i%t+t)%t}function Oa(i,t,e){return(1-e)*i+e*t}function Ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],x=n[8],y=s[0],g=s[3],m=s[6],b=s[1],w=s[4],M=s[7],U=s[2],C=s[5],I=s[8];return r[0]=o*y+a*b+c*U,r[3]=o*g+a*w+c*C,r[6]=o*m+a*M+c*I,r[1]=l*y+h*b+d*U,r[4]=l*g+h*w+d*C,r[7]=l*m+h*M+d*I,r[2]=p*y+f*b+x*U,r[5]=p*g+f*w+x*C,r[8]=p*m+f*M+x*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,p=a*c-h*r,f=l*r-o*c,x=e*d+n*p+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=d*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=p*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ba=new Bt;function Fh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vd(){let i=Br("canvas");return i.style.display="block",i}var Tl={};function Bs(i){i in Tl||(Tl[i]=!0,console.warn(i))}function Md(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jt={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===jn?pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Al=[.64,.33,.3,.6,.15,.06],Rl=[.2126,.7152,.0722],Cl=[.3127,.329],Il=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[ds]:{primaries:Al,whitePoint:Cl,transfer:pa,toXYZ:Il,fromXYZ:Pl,luminanceCoefficients:Rl,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:Al,whitePoint:Cl,transfer:oe,toXYZ:Il,fromXYZ:Pl,luminanceCoefficients:Rl,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var ki,nc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=Br("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wd=0,Hr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ha(s[o].image)):r.push(Ha(s[o]))}else r=Ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ha(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ed=0,Ze=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bi,s=bi,r=yn,o=Si,a=hn,c=kn,l=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Qs(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case To:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case To:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Eh;Ze.DEFAULT_ANISOTROPY=1;var ye=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],x=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+y)<.1&&Math.abs(x+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,M=(f+1)/2,U=(m+1)/2,C=(h+p)/4,I=(d+y)/4,P=(x+g)/4;return w>M&&w>U?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=C/n,r=I/n):M>U?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=P/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=I/r,s=P/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-x)*(g-x)+(d-y)*(d-y)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(d-y)/b,this.z=(p-h)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ic=class extends ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Hr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vr=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sc=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],p=r[o+0],f=r[o+1],x=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=x,t[e+3]=y;return}if(d!==y||c!==p||l!==f||h!==x){let g=1-a,m=c*p+l*f+h*x+d*y,b=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let U=Math.sqrt(w),C=Math.atan2(U,m*b);g=Math.sin(g*C)/U,a=Math.sin(a*C)/U}let M=a*b;if(c=c*g+p*M,l=l*g+f*M,h=h*g+x*M,d=d*g+y*M,g===1-a){let U=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=U,l*=U,h*=U,d*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],p=r[o+1],f=r[o+2],x=r[o+3];return t[e]=a*x+h*d+c*f-l*p,t[e+1]=c*x+h*p+l*d-a*f,t[e+2]=l*x+h*f+a*p-c*d,t[e+3]=h*x-a*d-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),p=c(n/2),f=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=p*h*d+l*f*x,this._y=l*f*d-p*h*x,this._z=l*h*x+p*f*d,this._w=l*h*d-p*f*x;break;case"YXZ":this._x=p*h*d+l*f*x,this._y=l*f*d-p*h*x,this._z=l*h*x-p*f*d,this._w=l*h*d+p*f*x;break;case"ZXY":this._x=p*h*d-l*f*x,this._y=l*f*d+p*h*x,this._z=l*h*x+p*f*d,this._w=l*h*d-p*f*x;break;case"ZYX":this._x=p*h*d-l*f*x,this._y=l*f*d+p*h*x,this._z=l*h*x-p*f*d,this._w=l*h*d+p*f*x;break;case"YZX":this._x=p*h*d+l*f*x,this._y=l*f*d+p*h*x,this._z=l*h*x-p*f*d,this._w=l*h*d-p*f*x;break;case"XZY":this._x=p*h*d-l*f*x,this._y=l*f*d-p*h*x,this._z=l*h*x+p*f*d,this._w=l*h*d+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Va=new O,Dl=new ke,Bn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),hr.subVectors(this.max,zs),Oi.subVectors(t.a,zs),Bi.subVectors(t.b,zs),Hi.subVectors(t.c,zs),qn.subVectors(Bi,Oi),Yn.subVectors(Hi,Bi),di.subVectors(Oi,Hi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-di.z,di.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,di.z,0,-di.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-di.y,di.x,0];return!Ga(e,Oi,Bi,Hi,hr)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,Oi,Bi,Hi,hr))?!1:(ur.crossVectors(qn,Yn),e=[ur.x,ur.y,ur.z],Ga(e,Oi,Bi,Hi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new O,new O,new O,new O,new O,new O,new O,new O],on=new O,lr=new Bn,Oi=new O,Bi=new O,Hi=new O,qn=new O,Yn=new O,di=new O,zs=new O,hr=new O,ur=new O,fi=new O;function Ga(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);let a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),c=t.dot(fi),l=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Td=new Bn,Us=new O,Wa=new O,ii=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Td.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Wa)),this.expandByPoint(Us.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},In=new O,Xa=new O,dr=new O,$n=new O,qa=new O,fr=new O,Ya=new O,Ws=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xa.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Xa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(dr),a=$n.dot(this.direction),c=-$n.dot(dr),l=$n.lengthSq(),h=Math.abs(1-o*o),d,p,f,x;if(h>0)if(d=o*c-a,p=o*a-c,x=r*h,d>=0)if(p>=-x)if(p<=x){let y=1/h;d*=y,p*=y,f=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-x?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l):p<=x?(d=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xa).addScaledVector(dr,p),f}intersectSphere(t,e){In.subVectors(t.center,this.origin);let n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){qa.subVectors(e,t),fr.subVectors(n,t),Ya.crossVectors(qa,fr);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);let c=a*this.direction.dot(fr.crossVectors($n,fr));if(c<0)return null;let l=a*this.direction.dot(qa.cross($n));if(l<0||c+l>o)return null;let h=-a*$n.dot(Ya);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,p,f,x,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,p,f,x,y,g)}set(t,e,n,s,r,o,a,c,l,h,d,p,f,x,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=p,m[3]=f,m[7]=x,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=o*h,f=o*d,x=a*h,y=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+x*l,e[5]=p-y*l,e[9]=-a*c,e[2]=y-p*l,e[6]=x+f*l,e[10]=o*c}else if(t.order==="YXZ"){let p=c*h,f=c*d,x=l*h,y=l*d;e[0]=p+y*a,e[4]=x*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-x,e[6]=y+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*h,f=c*d,x=l*h,y=l*d;e[0]=p-y*a,e[4]=-o*d,e[8]=x+f*a,e[1]=f+x*a,e[5]=o*h,e[9]=y-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*h,f=o*d,x=a*h,y=a*d;e[0]=c*h,e[4]=x*l-f,e[8]=p*l+y,e[1]=c*d,e[5]=y*l+p,e[9]=f*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,f=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=y-p*d,e[8]=x*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+x,e[10]=p-y*d}else if(t.order==="XZY"){let p=o*c,f=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+y,e[5]=o*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=a*h,e[10]=y*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ad,t,Rd)}lookAt(t,e,n){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Zn.crossVectors(n,qe),Zn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Zn.crossVectors(n,qe)),Zn.normalize(),pr.crossVectors(qe,Zn),s[0]=Zn.x,s[4]=pr.x,s[8]=qe.x,s[1]=Zn.y,s[5]=pr.y,s[9]=qe.y,s[2]=Zn.z,s[6]=pr.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],x=n[2],y=n[6],g=n[10],m=n[14],b=n[3],w=n[7],M=n[11],U=n[15],C=s[0],I=s[4],P=s[8],u=s[12],_=s[1],v=s[5],A=s[9],R=s[13],z=s[2],V=s[6],B=s[10],Y=s[14],H=s[3],$=s[7],rt=s[11],mt=s[15];return r[0]=o*C+a*_+c*z+l*H,r[4]=o*I+a*v+c*V+l*$,r[8]=o*P+a*A+c*B+l*rt,r[12]=o*u+a*R+c*Y+l*mt,r[1]=h*C+d*_+p*z+f*H,r[5]=h*I+d*v+p*V+f*$,r[9]=h*P+d*A+p*B+f*rt,r[13]=h*u+d*R+p*Y+f*mt,r[2]=x*C+y*_+g*z+m*H,r[6]=x*I+y*v+g*V+m*$,r[10]=x*P+y*A+g*B+m*rt,r[14]=x*u+y*R+g*Y+m*mt,r[3]=b*C+w*_+M*z+U*H,r[7]=b*I+w*v+M*V+U*$,r[11]=b*P+w*A+M*B+U*rt,r[15]=b*u+w*R+M*Y+U*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],f=t[14],x=t[3],y=t[7],g=t[11],m=t[15];return x*(+r*c*d-s*l*d-r*a*p+n*l*p+s*a*f-n*c*f)+y*(+e*c*f-e*l*p+r*o*p-s*o*f+s*l*h-r*c*h)+g*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+m*(-s*a*h-e*c*d+e*a*p+s*o*d-n*o*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],f=t[11],x=t[12],y=t[13],g=t[14],m=t[15],b=d*g*l-y*p*l+y*c*f-a*g*f-d*c*m+a*p*m,w=x*p*l-h*g*l-x*c*f+o*g*f+h*c*m-o*p*m,M=h*y*l-x*d*l+x*a*f-o*y*f-h*a*m+o*d*m,U=x*d*c-h*y*c-x*a*p+o*y*p+h*a*g-o*d*g,C=e*b+n*w+s*M+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return t[0]=b*I,t[1]=(y*p*r-d*g*r-y*s*f+n*g*f+d*s*m-n*p*m)*I,t[2]=(a*g*r-y*c*r+y*s*l-n*g*l-a*s*m+n*c*m)*I,t[3]=(d*c*r-a*p*r-d*s*l+n*p*l+a*s*f-n*c*f)*I,t[4]=w*I,t[5]=(h*g*r-x*p*r+x*s*f-e*g*f-h*s*m+e*p*m)*I,t[6]=(x*c*r-o*g*r-x*s*l+e*g*l+o*s*m-e*c*m)*I,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*f+e*c*f)*I,t[8]=M*I,t[9]=(x*d*r-h*y*r-x*n*f+e*y*f+h*n*m-e*d*m)*I,t[10]=(o*y*r-x*a*r+x*n*l-e*y*l-o*n*m+e*a*m)*I,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*I,t[12]=U*I,t[13]=(h*y*s-x*d*s+x*n*p-e*y*p-h*n*g+e*d*g)*I,t[14]=(x*a*s-o*y*s-x*n*c+e*y*c+o*n*g-e*a*g)*I,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*p+e*a*p)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,p=r*l,f=r*h,x=r*d,y=o*h,g=o*d,m=a*d,b=c*l,w=c*h,M=c*d,U=n.x,C=n.y,I=n.z;return s[0]=(1-(y+m))*U,s[1]=(f+M)*U,s[2]=(x-w)*U,s[3]=0,s[4]=(f-M)*C,s[5]=(1-(p+m))*C,s[6]=(g+b)*C,s[7]=0,s[8]=(x+w)*I,s[9]=(g-b)*I,s[10]=(1-(p+y))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);let l=1/r,h=1/o,d=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Fn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),f,x;if(a===Fn)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Or)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Fn){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),p=(e+t)*l,f=(n+s)*h,x,y;if(a===Fn)x=(o+r)*d,y=-2*d;else if(a===Or)x=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new O,cn=new Zt,Ad=new O(0,0,0),Rd=new O(1,1,1),Zn=new O,pr=new O,qe=new O,zl=new Zt,Ul=new ke,Ie=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ie.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cd=0,Nl=new O,Gi=new ke,Pn=new Zt,mr=new O,Ns=new O,Id=new O,Pd=new ke,Fl=new O(1,0,0),Ll=new O(0,1,0),kl=new O(0,0,1),Ol={type:"added"},Dd={type:"removed"},Wi={type:"childadded",child:null},$a={type:"childremoved",child:null},Ne=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Ie,n=new ke,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Bt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Ns,mr,this.up):Pn.lookAt(mr,Ns,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ol),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ol),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),p=o(t.skeletons),f=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new O(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new O,Dn=new O,Za=new O,zn=new O,Xi=new O,qi=new O,Bl=new O,Ja=new O,Ka=new O,ja=new O,Qa=new ye,to=new ye,eo=new ye,vi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),Dn.subVectors(n,e),Za.subVectors(t,e);let o=ln.dot(ln),a=ln.dot(Dn),c=ln.dot(Za),l=Dn.dot(Dn),h=Dn.dot(Za),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,f=(l*c-a*h)*p,x=(o*h-a*c)*p;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Qa.setScalar(0),to.setScalar(0),eo.setScalar(0),Qa.fromBufferAttribute(t,e),to.fromBufferAttribute(t,n),eo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Qa,r.x),o.addScaledVector(to,r.y),o.addScaledVector(eo,r.z),o}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),Dn.subVectors(t,e),ln.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),ln.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Xi.subVectors(s,n),qi.subVectors(r,n),Ja.subVectors(t,n);let c=Xi.dot(Ja),l=qi.dot(Ja);if(c<=0&&l<=0)return e.copy(n);Ka.subVectors(t,s);let h=Xi.dot(Ka),d=qi.dot(Ka);if(h>=0&&d<=h)return e.copy(s);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Xi,o);ja.subVectors(t,r);let f=Xi.dot(ja),x=qi.dot(ja);if(x>=0&&f<=x)return e.copy(r);let y=f*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(qi,a);let g=h*x-f*d;if(g<=0&&d-h>=0&&f-x>=0)return Bl.subVectors(r,s),a=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(Bl,a);let m=1/(g+y+p);return o=y*m,a=p*m,e.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function no(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=yd(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=no(o,r,t+1/3),this.g=no(o,r,t),this.b=no(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=Lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return jt.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ge(ze.r*255,0,255))*65536+Math.round(Ge(ze.g*255,0,255))*256+Math.round(Ge(ze.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=tn){jt.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(gr);let n=Oa(Jn.h,gr.h,e),s=Oa(Jn.s,gr.s,e),r=Oa(Jn.l,gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new ft;ft.NAMES=Lh;var zd=0,Hn=class extends ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Qs(),this.name="",this.blending=Qi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ve=class extends Hn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ie,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new O,xr=new Xt,xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wl,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wl&&(t.usage=this.usage),t}};var Gr=class extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wr=class extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ud=0,Qe=new Zt,io=new Ne,Yi=new O,Ye=new Bn,Fs=new Bn,Ce=new O,_e=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?Wr:Gr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Ye.min,Fs.min),Ye.expandByPoint(Ce),Ce.addVectors(Ye.max,Fs.max),Ye.expandByPoint(Ce)):(Ye.expandByPoint(Fs.min),Ye.expandByPoint(Fs.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ce.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(t,l),Ce.add(Yi)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new O,c[P]=new O;let l=new O,h=new O,d=new O,p=new Xt,f=new Xt,x=new Xt,y=new O,g=new O;function m(P,u,_){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,u),d.fromBufferAttribute(n,_),p.fromBufferAttribute(r,P),f.fromBufferAttribute(r,u),x.fromBufferAttribute(r,_),h.sub(l),d.sub(l),f.sub(p),x.sub(p);let v=1/(f.x*x.y-x.x*f.y);isFinite(v)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(v),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(v),a[P].add(y),a[u].add(y),a[_].add(y),c[P].add(g),c[u].add(g),c[_].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,u=b.length;P<u;++P){let _=b[P],v=_.start,A=_.count;for(let R=v,z=v+A;R<z;R+=3)m(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let w=new O,M=new O,U=new O,C=new O;function I(P){U.fromBufferAttribute(s,P),C.copy(U);let u=a[P];w.copy(u),w.sub(U.multiplyScalar(U.dot(u))).normalize(),M.crossVectors(C,u);let v=M.dot(c[P])<0?-1:1;o.setXYZW(P,w.x,w.y,w.z,v)}for(let P=0,u=b.length;P<u;++P){let _=b[P],v=_.start,A=_.count;for(let R=v,z=v+A;R<z;R+=3)I(t.getX(R+0)),I(t.getX(R+1)),I(t.getX(R+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,d=new O;if(t)for(let p=0,f=t.count;p<f;p+=3){let x=t.getX(p+0),y=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,p=new l.constructor(c.length*h),f=0,x=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let m=0;m<h;m++)p[x++]=l[f++]}return new xe(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hl=new Zt,pi=new Ws,_r=new ii,Vl=new O,yr=new O,vr=new O,Mr=new O,so=new O,br=new O,Gl=new O,Sr=new O,Ut=class extends Ne{constructor(t=new _e,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(so.fromBufferAttribute(d,t),o?br.addScaledVector(so,h):br.addScaledVector(so.sub(e),h))}e.add(br)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(_r.containsPoint(pi.origin)===!1&&(pi.intersectSphere(_r,Vl)===null||pi.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){let g=p[x],m=o[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=b,U=w;M<U;M+=3){let C=a.getX(M),I=a.getX(M+1),P=a.getX(M+2);s=wr(this,m,t,n,l,h,d,C,I,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=x,m=y;g<m;g+=3){let b=a.getX(g),w=a.getX(g+1),M=a.getX(g+2);s=wr(this,o,t,n,l,h,d,b,w,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){let g=p[x],m=o[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=b,U=w;M<U;M+=3){let C=M,I=M+1,P=M+2;s=wr(this,m,t,n,l,h,d,C,I,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=x,m=y;g<m;g+=3){let b=g,w=g+1,M=g+2;s=wr(this,o,t,n,l,h,d,b,w,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Nd(i,t,e,n,s,r,o,a){let c;if(t.side===Ue?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ei,a),c===null)return null;Sr.copy(a),Sr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Sr);return l<e.near||l>e.far?null:{distance:l,point:Sr.clone(),object:i}}function wr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,yr),i.getVertexPosition(c,vr),i.getVertexPosition(l,Mr);let h=Nd(i,t,e,n,yr,vr,Mr,Gl);if(h){let d=new O;vi.getBarycoord(Gl,yr,vr,Mr,d),s&&(h.uv=vi.getInterpolatedAttribute(s,a,c,l,d,new Xt)),r&&(h.uv1=vi.getInterpolatedAttribute(r,a,c,l,d,new Xt)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,c,l,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new O,materialIndex:0};vi.getNormal(yr,vr,Mr,p.normal),h.face=p,h.barycoord=d}return h}var un=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],p=0,f=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2));function x(y,g,m,b,w,M,U,C,I,P,u){let _=M/I,v=U/P,A=M/2,R=U/2,z=C/2,V=I+1,B=P+1,Y=0,H=0,$=new O;for(let rt=0;rt<B;rt++){let mt=rt*v-R;for(let Tt=0;Tt<V;Tt++){let Jt=Tt*_-A;$[y]=Jt*b,$[g]=mt*w,$[m]=z,l.push($.x,$.y,$.z),$[y]=0,$[g]=0,$[m]=C>0?1:-1,h.push($.x,$.y,$.z),d.push(Tt/I),d.push(1-rt/P),Y+=1}}for(let rt=0;rt<P;rt++)for(let mt=0;mt<I;mt++){let Tt=p+mt+V*rt,Jt=p+mt+V*(rt+1),Z=p+(mt+1)+V*(rt+1),it=p+(mt+1)+V*rt;c.push(Tt,Jt,it),c.push(Jt,Z,it),H+=6}a.addGroup(f,H,u),f+=H,p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function Fd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Ld={clone:cs,merge:Fe},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Hn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xr=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kn=new O,Wl=new Xt,Xl=new Xt,Le=class extends Xr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Wl,Xl),e.subVectors(Xl,Wl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ka*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,Zi=1,rc=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le($i,Zi,t,e);s.layers=this.layers,this.add(s);let r=new Le($i,Zi,t,e);r.layers=this.layers,this.add(r);let o=new Le($i,Zi,t,e);o.layers=this.layers,this.add(o);let a=new Le($i,Zi,t,e);a.layers=this.layers,this.add(a);let c=new Le($i,Zi,t,e);c.layers=this.layers,this.add(c);let l=new Le($i,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},qr=class extends Ze{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ac=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Qn});r.uniforms.tEquirect.value=e;let o=new Ut(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=yn),new rc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ro=new O,Bd=new O,Hd=new Bt,Nn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ro.subVectors(n,e).cross(Bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ro),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hd.getNormalMatrix(t),s=this.coplanarPoint(ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},mi=new ii,Er=new O,qs=class{constructor(t=new Nn,e=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],p=s[7],f=s[8],x=s[9],y=s[10],g=s[11],m=s[12],b=s[13],w=s[14],M=s[15];if(n[0].setComponents(c-r,p-l,g-f,M-m).normalize(),n[1].setComponents(c+r,p+l,g+f,M+m).normalize(),n[2].setComponents(c+o,p+h,g+x,M+b).normalize(),n[3].setComponents(c-o,p-h,g-x,M-b).normalize(),n[4].setComponents(c-a,p-d,g-y,M-w).normalize(),e===Fn)n[5].setComponents(c+a,p+d,g+y,M+w).normalize();else if(e===Or)n[5].setComponents(a,d,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Oh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vd(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,x)=>f.start-x.start);let p=0;for(let f=1;f<d.length;f++){let x=d[p],y=d[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++p,d[p]=y)}d.length=p+1;for(let f=0,x=d.length;f<x;f++){let y=d[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Je=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,p=e/c,f=[],x=[],y=[],g=[];for(let m=0;m<h;m++){let b=m*p-o;for(let w=0;w<l;w++){let M=w*d-r;x.push(M,-b,0),y.push(0,0,1),g.push(w/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let w=b+l*m,M=b+l*(m+1),U=b+1+l*(m+1),C=b+1+l*m;f.push(w,M,C),f.push(M,U,C)}this.setIndex(f),this.setAttribute("position",new te(x,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
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
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ff=`#define PI 3.141592653589793
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
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,Vf=`struct PhysicalMaterial {
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
}`,Gf=`
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`#include <common>
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
}`,Jp=`#if DEPTH_PACKING == 3200
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
}`,Kp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,om=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,lm=`#define NORMAL
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
}`,hm=`#define NORMAL
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
}`,um=`#define PHONG
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
}`,dm=`#define PHONG
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
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
}`,xm=`uniform float size;
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
}`,_m=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,vm=`uniform vec3 color;
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
}`,Mm=`uniform float rotation;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Gd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:qd,alphatest_fragment:Yd,alphatest_pars_fragment:$d,aomap_fragment:Zd,aomap_pars_fragment:Jd,batching_pars_vertex:Kd,batching_vertex:jd,begin_vertex:Qd,beginnormal_vertex:tf,bsdfs:ef,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:of,clipping_planes_vertex:cf,color_fragment:lf,color_pars_fragment:hf,color_pars_vertex:uf,color_vertex:df,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:xf,emissivemap_fragment:_f,emissivemap_pars_fragment:yf,colorspace_fragment:vf,colorspace_pars_fragment:Mf,envmap_fragment:bf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:wf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Ff,envmap_vertex:Tf,fog_vertex:Af,fog_pars_vertex:Rf,fog_fragment:Cf,fog_pars_fragment:If,gradientmap_pars_fragment:Pf,lightmap_pars_fragment:Df,lights_lambert_fragment:zf,lights_lambert_pars_fragment:Uf,lights_pars_begin:Nf,lights_toon_fragment:Lf,lights_toon_pars_fragment:kf,lights_phong_fragment:Of,lights_phong_pars_fragment:Bf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Gf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:$f,logdepthbuf_vertex:Zf,map_fragment:Jf,map_pars_fragment:Kf,map_particle_fragment:jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:tp,metalnessmap_pars_fragment:ep,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:cp,normal_pars_fragment:lp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:xp,packing:_p,premultiplied_alpha_fragment:yp,project_vertex:vp,dithering_fragment:Mp,dithering_pars_fragment:bp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Rp,skinbase_vertex:Cp,skinning_pars_vertex:Ip,skinning_vertex:Pp,skinnormal_vertex:Dp,specularmap_fragment:zp,specularmap_pars_fragment:Up,tonemapping_fragment:Np,tonemapping_pars_fragment:Fp,transmission_fragment:Lp,transmission_pars_fragment:kp,uv_pars_fragment:Op,uv_pars_vertex:Bp,uv_vertex:Hp,worldpos_vertex:Vp,background_vert:Gp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:qp,cube_vert:Yp,cube_frag:$p,depth_vert:Zp,depth_frag:Jp,distanceRGBA_vert:Kp,distanceRGBA_frag:jp,equirect_vert:Qp,equirect_frag:tm,linedashed_vert:em,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:sm,meshlambert_vert:rm,meshlambert_frag:am,meshmatcap_vert:om,meshmatcap_frag:cm,meshnormal_vert:lm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:xm,points_frag:_m,shadow_vert:ym,shadow_frag:vm,sprite_vert:Mm,sprite_frag:bm},ct={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},_n={basic:{uniforms:Fe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Fe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ft(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Fe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Fe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Fe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new ft(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Fe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Fe([ct.points,ct.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Fe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Fe([ct.common,ct.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Fe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Fe([ct.sprite,ct.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Fe([ct.common,ct.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Fe([ct.lights,ct.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};_n.physical={uniforms:Fe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Tr={r:0,b:0,g:0},gi=new Ie,Sm=new Zt;function wm(i,t,e,n,s,r,o){let a=new ft(0),c=r===!0?0:1,l,h,d=null,p=0,f=null;function x(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function y(b){let w=!1,M=x(b);M===null?m(a,c):M&&M.isColor&&(m(M,1),w=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,w){let M=x(w);M&&(M.isCubeTexture||M.mapping===fa)?(h===void 0&&(h=new Ut(new un(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:cs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(w.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(gi)),h.material.toneMapped=jt.getTransfer(M.colorSpace)!==oe,(d!==M||p!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,p=M.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ut(new Je(2,2),new Mn({name:"BackgroundMaterial",uniforms:cs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=jt.getTransfer(M.colorSpace)!==oe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,p=M.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(Tr,kh(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),c=w,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:y,addToRenderList:g}}function Em(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(_,v,A,R,z){let V=!1,B=d(R,A,v);r!==B&&(r=B,l(r.object)),V=f(_,R,A,z),V&&x(_,R,A,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(_,v,A,R),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function d(_,v,A){let R=A.wireframe===!0,z=n[_.id];z===void 0&&(z={},n[_.id]=z);let V=z[v.id];V===void 0&&(V={},z[v.id]=V);let B=V[R];return B===void 0&&(B=p(c()),V[R]=B),B}function p(_){let v=[],A=[],R=[];for(let z=0;z<e;z++)v[z]=0,A[z]=0,R[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:A,attributeDivisors:R,object:_,attributes:{},index:null}}function f(_,v,A,R){let z=r.attributes,V=v.attributes,B=0,Y=A.getAttributes();for(let H in Y)if(Y[H].location>=0){let rt=z[H],mt=V[H];if(mt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor)),rt===void 0||rt.attribute!==mt||mt&&rt.data!==mt.data)return!0;B++}return r.attributesNum!==B||r.index!==R}function x(_,v,A,R){let z={},V=v.attributes,B=0,Y=A.getAttributes();for(let H in Y)if(Y[H].location>=0){let rt=V[H];rt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor));let mt={};mt.attribute=rt,rt&&rt.data&&(mt.data=rt.data),z[H]=mt,B++}r.attributes=z,r.attributesNum=B,r.index=R}function y(){let _=r.newAttributes;for(let v=0,A=_.length;v<A;v++)_[v]=0}function g(_){m(_,0)}function m(_,v){let A=r.newAttributes,R=r.enabledAttributes,z=r.attributeDivisors;A[_]=1,R[_]===0&&(i.enableVertexAttribArray(_),R[_]=1),z[_]!==v&&(i.vertexAttribDivisor(_,v),z[_]=v)}function b(){let _=r.newAttributes,v=r.enabledAttributes;for(let A=0,R=v.length;A<R;A++)v[A]!==_[A]&&(i.disableVertexAttribArray(A),v[A]=0)}function w(_,v,A,R,z,V,B){B===!0?i.vertexAttribIPointer(_,v,A,z,V):i.vertexAttribPointer(_,v,A,R,z,V)}function M(_,v,A,R){y();let z=R.attributes,V=A.getAttributes(),B=v.defaultAttributeValues;for(let Y in V){let H=V[Y];if(H.location>=0){let $=z[Y];if($===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),$!==void 0){let rt=$.normalized,mt=$.itemSize,Tt=t.get($);if(Tt===void 0)continue;let Jt=Tt.buffer,Z=Tt.type,it=Tt.bytesPerElement,yt=Z===i.INT||Z===i.UNSIGNED_INT||$.gpuType===Uc;if($.isInterleavedBufferAttribute){let ht=$.data,Rt=ht.stride,It=$.offset;if(ht.isInstancedInterleavedBuffer){for(let kt=0;kt<H.locationSize;kt++)m(H.location+kt,ht.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<H.locationSize;kt++)g(H.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let kt=0;kt<H.locationSize;kt++)w(H.location+kt,mt/H.locationSize,Z,rt,Rt*it,(It+mt/H.locationSize*kt)*it,yt)}else{if($.isInstancedBufferAttribute){for(let ht=0;ht<H.locationSize;ht++)m(H.location+ht,$.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ht=0;ht<H.locationSize;ht++)g(H.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let ht=0;ht<H.locationSize;ht++)w(H.location+ht,mt/H.locationSize,Z,rt,mt*it,mt/H.locationSize*ht*it,yt)}}else if(B!==void 0){let rt=B[Y];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(H.location,rt);break;case 3:i.vertexAttrib3fv(H.location,rt);break;case 4:i.vertexAttrib4fv(H.location,rt);break;default:i.vertexAttrib1fv(H.location,rt)}}}}b()}function U(){P();for(let _ in n){let v=n[_];for(let A in v){let R=v[A];for(let z in R)h(R[z].object),delete R[z];delete v[A]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;let v=n[_.id];for(let A in v){let R=v[A];for(let z in R)h(R[z].object),delete R[z];delete v[A]}delete n[_.id]}function I(_){for(let v in n){let A=n[v];if(A[_.id]===void 0)continue;let R=A[_.id];for(let z in R)h(R[z].object),delete R[z];delete A[_.id]}}function P(){u(),o=!0,r!==s&&(r=s,l(r.object))}function u(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:u,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:g,disableUnusedAttributes:b}}function Tm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let x=0;x<d;x++)f+=h[x];e.update(f,n,1)}function c(l,h,d,p){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)o(l[x],h[x],p[x]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let x=0;for(let y=0;y<d;y++)x+=h[y]*p[y];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Am(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==hn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let P=I===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==kn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==vn&&!P)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:U,maxSamples:C}}function Rm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Nn,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){let x=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,w=b*4,M=m.clippingState||null;c.value=M,M=h(x,p,w,f);for(let U=0;U!==w;++U)M[U]=e[U];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,x){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=c.value,x!==!0||g===null){let m=f+y*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,M=f;w!==y;++w,M+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function Cm(i){let t=new WeakMap;function e(o,a){return a===wo?o.mapping=ss:a===Eo&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wo||a===Eo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ac(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yr=class extends Xr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ji=4,ql=[.125,.215,.35,.446,.526,.582],Mi=20,ao=new Yr,Yl=new ft,oo=null,co=0,lo=0,ho=!1,_i=(1+Math.sqrt(5))/2,Ji=1/_i,$l=[new O(-_i,Ji,0),new O(_i,Ji,0),new O(-Ji,0,_i),new O(Ji,0,_i),new O(0,_i,-Ji),new O(0,_i,Ji),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],$r=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,co,lo),this._renderer.xr.enabled=ho,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ks,format:hn,colorSpace:ds,depthBuffer:!1},s=Zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Im(r)),this._blurMaterial=Pm(r,t,e)}return s}_compileMaterial(t){let e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,ao)}_sceneToCubeUV(t,e,n,s){let a=new Le(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Yl),h.toneMapping=ti,h.autoClear=!1;let f=new ve({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),x=new Ut(new un,f),y=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,y=!0):(f.color.copy(Yl),y=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let w=this._cubeSize;Ar(s,b*w,m>2?w:0,w,w),h.setRenderTarget(s),y&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ao)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$l[(s-r-1)%$l.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ut(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),y=r/x,g=isFinite(r)?1+Math.floor(h*y):Mi;g>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mi}`);let m=[],b=0;for(let I=0;I<Mi;++I){let P=I/y,u=Math.exp(-P*P/2);m.push(u),I===0?b+=u:I<g&&(b+=2*u)}for(let I=0;I<m.length;I++)m[I]=m[I]/b;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:w}=this;p.dTheta.value=x,p.mipInt.value=w-n;let M=this._sizeLods[s],U=3*M*(s>w-ji?s-w+ji:0),C=4*(this._cubeSize-M);Ar(e,U,C,3*M,2*M),c.setRenderTarget(e),c.render(d,ao)}};function Im(i){let t=[],e=[],n=[],s=i,r=i-ji+1+ql.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ji?c=ql[o-i+ji-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,y=3,g=2,m=1,b=new Float32Array(y*x*f),w=new Float32Array(g*x*f),M=new Float32Array(m*x*f);for(let C=0;C<f;C++){let I=C%3*2/3-1,P=C>2?0:-1,u=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];b.set(u,y*x*C),w.set(p,g*x*C);let _=[C,C,C,C,C,C];M.set(_,m*x*C)}let U=new _e;U.setAttribute("position",new xe(b,y)),U.setAttribute("uv",new xe(w,g)),U.setAttribute("faceIndex",new xe(M,m)),t.push(U),s>ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zl(i,t,e){let n=new On(i,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pm(i,t,e){let n=new Float32Array(Mi),s=new O(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Jl(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Kl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function Dm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===wo||c===Eo,h=c===ss||c===rs;if(l||h){let d=t.get(a),p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new $r(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new $r(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Um(i,t,e,n){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);for(let x in p.morphAttributes){let y=p.morphAttributes[x];for(let g=0,m=y.length;g<m;g++)t.remove(y[g])}p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(d){let p=d.attributes;for(let x in p)t.update(p[x],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let x in f){let y=f[x];for(let g=0,m=y.length;g<m;g++)t.update(y[g],i.ARRAY_BUFFER)}}function l(d){let p=[],f=d.index,x=d.attributes.position,y=0;if(f!==null){let b=f.array;y=f.version;for(let w=0,M=b.length;w<M;w+=3){let U=b[w+0],C=b[w+1],I=b[w+2];p.push(U,C,C,I,I,U)}}else if(x!==void 0){let b=x.array;y=x.version;for(let w=0,M=b.length/3-1;w<M;w+=3){let U=w+0,C=w+1,I=w+2;p.push(U,C,C,I,I,U)}}else return;let g=new(Fh(p)?Wr:Gr)(p,1);g.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let p=r.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Nm(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function l(p,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,p*o,x),e.update(f,n,x))}function h(p,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,x);let g=0;for(let m=0;m<x;m++)g+=f[m];e.update(g,n,1)}function d(p,f,x,y){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<p.length;m++)l(p[m]/o,f[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,y,0,x);let m=0;for(let b=0;b<x;b++)m+=f[b]*y[b];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Fm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lm(i,t,e){let n=new WeakMap,s=new ye;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==d){let u=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",u)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;f===!0&&(w=1),x===!0&&(w=2),y===!0&&(w=3);let M=a.attributes.position.count*w,U=1;M>t.maxTextureSize&&(U=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let C=new Float32Array(M*U*4*d),I=new Vr(C,M,U,d);I.type=vn,I.needsUpdate=!0;let P=w*4;for(let _=0;_<d;_++){let v=g[_],A=m[_],R=b[_],z=M*U*4*_;for(let V=0;V<v.count;V++){let B=V*P;f===!0&&(s.fromBufferAttribute(v,V),C[z+B+0]=s.x,C[z+B+1]=s.y,C[z+B+2]=s.z,C[z+B+3]=0),x===!0&&(s.fromBufferAttribute(A,V),C[z+B+4]=s.x,C[z+B+5]=s.y,C[z+B+6]=s.z,C[z+B+7]=0),y===!0&&(s.fromBufferAttribute(R,V),C[z+B+8]=s.x,C[z+B+9]=s.y,C[z+B+10]=s.z,C[z+B+11]=R.itemSize===4?s.w:1)}}p={count:d,texture:I,size:new Xt(M,U)},n.set(a,p),a.addEventListener("dispose",u)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let x=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function km(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Zr=class extends Ze{constructor(t,e,n,s,r,o,a,c,l,h=ts){if(h!==ts&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=wi),n===void 0&&h===os&&(n=as),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bh=new Ze,jl=new Zr(1,1),Hh=new Vr,Vh=new sc,Gh=new qr,Ql=[],th=[],eh=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=th[t];e===void 0&&(e=new Int32Array(t),th[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Om(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Gm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),Ae(e,n)}}function Wm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),Ae(e,n)}}function Xm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;eh.set(n),i.uniformMatrix4fv(this.addr,!1,eh),Ae(e,n)}}function qm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function t0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jl.compareFunction=Nh,r=jl):r=Bh,e.setTexture2D(t||r,s)}function e0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vh,s)}function n0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gh,s)}function i0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hh,s)}function s0(i){switch(i){case 5126:return Om;case 35664:return Bm;case 35665:return Hm;case 35666:return Vm;case 35674:return Gm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return $m;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return Km;case 36295:return jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(i,t){i.uniform1fv(this.addr,t)}function a0(i,t){let e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function o0(i,t){let e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function c0(i,t){let e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function l0(i,t){let e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function h0(i,t){let e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function u0(i,t){let e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function d0(i,t){i.uniform1iv(this.addr,t)}function f0(i,t){i.uniform2iv(this.addr,t)}function p0(i,t){i.uniform3iv(this.addr,t)}function m0(i,t){i.uniform4iv(this.addr,t)}function g0(i,t){i.uniform1uiv(this.addr,t)}function x0(i,t){i.uniform2uiv(this.addr,t)}function _0(i,t){i.uniform3uiv(this.addr,t)}function y0(i,t){i.uniform4uiv(this.addr,t)}function v0(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bh,r[o])}function M0(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vh,r[o])}function b0(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gh,r[o])}function S0(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hh,r[o])}function w0(i){switch(i){case 5126:return r0;case 35664:return a0;case 35665:return o0;case 35666:return c0;case 35674:return l0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return x0;case 36295:return _0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return S0}}var oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=s0(e.type)}},cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w0(e.type)}},lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},uo=/(\w+)(\])?(\[|\.)?/g;function sh(i,t){i.seq.push(t),i.map[t.id]=t}function E0(i,t,e){let n=i.name,s=n.length;for(uo.lastIndex=0;;){let r=uo.exec(n),o=uo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sh(e,l===void 0?new oc(a,i,t):new cc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new lc(a),sh(e,d)),e=d}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);E0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function rh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var T0=37297,A0=0;function R0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ah=new Bt;function C0(i){jt._getMatrix(ah,jt.workingColorSpace,i);let t=`mat3( ${ah.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case pa:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function oh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+R0(i.getShaderSource(t),o)}else return s}function I0(i,t){let e=C0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function P0(i,t){let e;switch(t){case ed:e="Linear";break;case nd:e="Reinhard";break;case id:e="Cineon";break;case sd:e="ACESFilmic";break;case ad:e="AgX";break;case od:e="Neutral";break;case rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rr=new O;function D0(){jt.getLuminanceCoefficients(Rr);let i=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function U0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function N0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hs(i){return i!==""}function ch(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var F0=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(F0,k0)}var L0=new Map;function k0(i,t){let e=Vt[t];if(e===void 0){let n=L0.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}var O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(i){return i.replace(O0,B0)}function B0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function H0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function V0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function W0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case da:t="ENVMAP_BLENDING_MULTIPLY";break;case Qu:t="ENVMAP_BLENDING_MIX";break;case td:t="ENVMAP_BLENDING_ADD";break}return t}function X0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function q0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=H0(e),l=V0(e),h=G0(e),d=W0(e),p=X0(e),f=z0(e),x=U0(r),y=s.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Hs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Hs).join(`
`),m.length>0&&(m+=`
`)):(g=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),m=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ti?P0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,I0("linearToOutputTexel",e.outputColorSpace),D0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=hc(o),o=ch(o,e),o=lh(o,e),a=hc(a),a=ch(a,e),a=lh(a,e),o=hh(o),a=hh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+g+o,M=b+m+a,U=rh(s,s.VERTEX_SHADER,w),C=rh(s,s.FRAGMENT_SHADER,M);s.attachShader(y,U),s.attachShader(y,C),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(v){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(y).trim(),R=s.getShaderInfoLog(U).trim(),z=s.getShaderInfoLog(C).trim(),V=!0,B=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,U,C);else{let Y=oh(s,U,"vertex"),H=oh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+A+`
`+Y+`
`+H)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||z==="")&&(B=!1);B&&(v.diagnostics={runnable:V,programLog:A,vertexShader:{log:R,prefix:g},fragmentShader:{log:z,prefix:m}})}s.deleteShader(U),s.deleteShader(C),P=new ns(s,y),u=N0(s,y)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let u;this.getAttributes=function(){return u===void 0&&I(this),u};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,T0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=C,this}var Y0=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new dc(t),e.set(t,n)),n}},dc=class{constructor(t){this.id=Y0++,this.code=t,this.usedTimes=0}};function $0(i,t,e,n,s,r,o){let a=new Xs,c=new uc,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(u){return l.add(u),u===0?"uv":`uv${u}`}function g(u,_,v,A,R){let z=A.fog,V=R.geometry,B=u.isMeshStandardMaterial?A.environment:null,Y=(u.isMeshStandardMaterial?e:t).get(u.envMap||B),H=Y&&Y.mapping===fa?Y.image.height:null,$=x[u.type];u.precision!==null&&(f=s.getMaxPrecision(u.precision),f!==u.precision&&console.warn("THREE.WebGLProgram.getParameters:",u.precision,"not supported, using",f,"instead."));let rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=rt!==void 0?rt.length:0,Tt=0;V.morphAttributes.position!==void 0&&(Tt=1),V.morphAttributes.normal!==void 0&&(Tt=2),V.morphAttributes.color!==void 0&&(Tt=3);let Jt,Z,it,yt;if($){let Kt=_n[$];Jt=Kt.vertexShader,Z=Kt.fragmentShader}else Jt=u.vertexShader,Z=u.fragmentShader,c.update(u),it=c.getVertexShaderID(u),yt=c.getFragmentShaderID(u);let ht=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),It=R.isInstancedMesh===!0,kt=R.isBatchedMesh===!0,le=!!u.map,Wt=!!u.matcap,he=!!Y,N=!!u.aoMap,re=!!u.lightMap,Gt=!!u.bumpMap,Ht=!!u.normalMap,wt=!!u.displacementMap,ne=!!u.emissiveMap,Et=!!u.metalnessMap,T=!!u.roughnessMap,S=u.anisotropy>0,G=u.clearcoat>0,j=u.dispersion>0,Q=u.iridescence>0,J=u.sheen>0,_t=u.transmission>0,et=S&&!!u.anisotropyMap,pt=G&&!!u.clearcoatMap,Yt=G&&!!u.clearcoatNormalMap,nt=G&&!!u.clearcoatRoughnessMap,gt=Q&&!!u.iridescenceMap,At=Q&&!!u.iridescenceThicknessMap,Pt=J&&!!u.sheenColorMap,ut=J&&!!u.sheenRoughnessMap,$t=!!u.specularMap,Ft=!!u.specularColorMap,ae=!!u.specularIntensityMap,F=_t&&!!u.transmissionMap,at=_t&&!!u.thicknessMap,q=!!u.gradientMap,K=!!u.alphaMap,ot=u.alphaTest>0,lt=!!u.alphaHash,Dt=!!u.extensions,ue=ti;u.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Se={shaderID:$,shaderType:u.type,shaderName:u.name,vertexShader:Jt,fragmentShader:Z,defines:u.defines,customVertexShaderID:it,customFragmentShaderID:yt,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:f,batching:kt,batchingColor:kt&&R._colorsTexture!==null,instancing:It,instancingColor:It&&R.instanceColor!==null,instancingMorph:It&&R.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ds,alphaToCoverage:!!u.alphaToCoverage,map:le,matcap:Wt,envMap:he,envMapMode:he&&Y.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:re,bumpMap:Gt,normalMap:Ht,displacementMap:p&&wt,emissiveMap:ne,normalMapObjectSpace:Ht&&u.normalMapType===ud,normalMapTangentSpace:Ht&&u.normalMapType===Hc,metalnessMap:Et,roughnessMap:T,anisotropy:S,anisotropyMap:et,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:nt,dispersion:j,iridescence:Q,iridescenceMap:gt,iridescenceThicknessMap:At,sheen:J,sheenColorMap:Pt,sheenRoughnessMap:ut,specularMap:$t,specularColorMap:Ft,specularIntensityMap:ae,transmission:_t,transmissionMap:F,thicknessMap:at,gradientMap:q,opaque:u.transparent===!1&&u.blending===Qi&&u.alphaToCoverage===!1,alphaMap:K,alphaTest:ot,alphaHash:lt,combine:u.combine,mapUv:le&&y(u.map.channel),aoMapUv:N&&y(u.aoMap.channel),lightMapUv:re&&y(u.lightMap.channel),bumpMapUv:Gt&&y(u.bumpMap.channel),normalMapUv:Ht&&y(u.normalMap.channel),displacementMapUv:wt&&y(u.displacementMap.channel),emissiveMapUv:ne&&y(u.emissiveMap.channel),metalnessMapUv:Et&&y(u.metalnessMap.channel),roughnessMapUv:T&&y(u.roughnessMap.channel),anisotropyMapUv:et&&y(u.anisotropyMap.channel),clearcoatMapUv:pt&&y(u.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&y(u.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&y(u.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&y(u.iridescenceMap.channel),iridescenceThicknessMapUv:At&&y(u.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&y(u.sheenColorMap.channel),sheenRoughnessMapUv:ut&&y(u.sheenRoughnessMap.channel),specularMapUv:$t&&y(u.specularMap.channel),specularColorMapUv:Ft&&y(u.specularColorMap.channel),specularIntensityMapUv:ae&&y(u.specularIntensityMap.channel),transmissionMapUv:F&&y(u.transmissionMap.channel),thicknessMapUv:at&&y(u.thicknessMap.channel),alphaMapUv:K&&y(u.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ht||S),vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!V.attributes.uv&&(le||K),fog:!!z,useFog:u.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:u.flatShading===!0,sizeAttenuation:u.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:R.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Tt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:u.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:le&&u.map.isVideoTexture===!0&&jt.getTransfer(u.map.colorSpace)===oe,decodeVideoTextureEmissive:ne&&u.emissiveMap.isVideoTexture===!0&&jt.getTransfer(u.emissiveMap.colorSpace)===oe,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===Me,flipSided:u.side===Ue,useDepthPacking:u.depthPacking>=0,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionClipCullDistance:Dt&&u.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&u.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:u.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function m(u){let _=[];if(u.shaderID?_.push(u.shaderID):(_.push(u.customVertexShaderID),_.push(u.customFragmentShaderID)),u.defines!==void 0)for(let v in u.defines)_.push(v),_.push(u.defines[v]);return u.isRawShaderMaterial===!1&&(b(_,u),w(_,u),_.push(i.outputColorSpace)),_.push(u.customProgramCacheKey),_.join()}function b(u,_){u.push(_.precision),u.push(_.outputColorSpace),u.push(_.envMapMode),u.push(_.envMapCubeUVHeight),u.push(_.mapUv),u.push(_.alphaMapUv),u.push(_.lightMapUv),u.push(_.aoMapUv),u.push(_.bumpMapUv),u.push(_.normalMapUv),u.push(_.displacementMapUv),u.push(_.emissiveMapUv),u.push(_.metalnessMapUv),u.push(_.roughnessMapUv),u.push(_.anisotropyMapUv),u.push(_.clearcoatMapUv),u.push(_.clearcoatNormalMapUv),u.push(_.clearcoatRoughnessMapUv),u.push(_.iridescenceMapUv),u.push(_.iridescenceThicknessMapUv),u.push(_.sheenColorMapUv),u.push(_.sheenRoughnessMapUv),u.push(_.specularMapUv),u.push(_.specularColorMapUv),u.push(_.specularIntensityMapUv),u.push(_.transmissionMapUv),u.push(_.thicknessMapUv),u.push(_.combine),u.push(_.fogExp2),u.push(_.sizeAttenuation),u.push(_.morphTargetsCount),u.push(_.morphAttributeCount),u.push(_.numDirLights),u.push(_.numPointLights),u.push(_.numSpotLights),u.push(_.numSpotLightMaps),u.push(_.numHemiLights),u.push(_.numRectAreaLights),u.push(_.numDirLightShadows),u.push(_.numPointLightShadows),u.push(_.numSpotLightShadows),u.push(_.numSpotLightShadowsWithMaps),u.push(_.numLightProbes),u.push(_.shadowMapType),u.push(_.toneMapping),u.push(_.numClippingPlanes),u.push(_.numClipIntersection),u.push(_.depthPacking)}function w(u,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),u.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),u.push(a.mask)}function M(u){let _=x[u.type],v;if(_){let A=_n[_];v=Ld.clone(A.uniforms)}else v=u.uniforms;return v}function U(u,_){let v;for(let A=0,R=h.length;A<R;A++){let z=h[A];if(z.cacheKey===_){v=z,++v.usedTimes;break}}return v===void 0&&(v=new q0(i,_,u,r),h.push(v)),v}function C(u){if(--u.usedTimes===0){let _=h.indexOf(u);h[_]=h[h.length-1],h.pop(),u.destroy()}}function I(u){c.remove(u)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:U,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:P}}function Z0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function J0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,p,f,x,y,g){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:p,material:f,groupOrder:x,renderOrder:d.renderOrder,z:y,group:g},i[t]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=f,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=y,m.group=g),t++,m}function a(d,p,f,x,y,g){let m=o(d,p,f,x,y,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(d,p,f,x,y,g){let m=o(d,p,f,x,y,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(d,p){e.length>1&&e.sort(d||J0),n.length>1&&n.sort(p||dh),s.length>1&&s.sort(p||dh)}function h(){for(let d=t,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function K0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new fh,i.set(n,[o])):s>=r.length?(o=new fh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function j0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new ft};break;case"SpotLight":e={position:new O,direction:new O,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Q0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var tg=0;function eg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ng(i){let t=new j0,e=Q0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new Zt,o=new Zt;function a(l){let h=0,d=0,p=0;for(let u=0;u<9;u++)n.probe[u].set(0,0,0);let f=0,x=0,y=0,g=0,m=0,b=0,w=0,M=0,U=0,C=0,I=0;l.sort(eg);for(let u=0,_=l.length;u<_;u++){let v=l[u],A=v.color,R=v.intensity,z=v.distance,V=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)h+=A.r*R,d+=A.g*R,p+=A.b*R;else if(v.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(v.sh.coefficients[B],R);I++}else if(v.isDirectionalLight){let B=t.get(v);if(B.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let Y=v.shadow,H=e.get(v);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=v.shadow.matrix,b++}n.directional[f]=B,f++}else if(v.isSpotLight){let B=t.get(v);B.position.setFromMatrixPosition(v.matrixWorld),B.color.copy(A).multiplyScalar(R),B.distance=z,B.coneCos=Math.cos(v.angle),B.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),B.decay=v.decay,n.spot[y]=B;let Y=v.shadow;if(v.map&&(n.spotLightMap[U]=v.map,U++,Y.updateMatrices(v),v.castShadow&&C++),n.spotLightMatrix[y]=Y.matrix,v.castShadow){let H=e.get(v);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=V,M++}y++}else if(v.isRectAreaLight){let B=t.get(v);B.color.copy(A).multiplyScalar(R),B.halfWidth.set(v.width*.5,0,0),B.halfHeight.set(0,v.height*.5,0),n.rectArea[g]=B,g++}else if(v.isPointLight){let B=t.get(v);if(B.color.copy(v.color).multiplyScalar(v.intensity),B.distance=v.distance,B.decay=v.decay,v.castShadow){let Y=v.shadow,H=e.get(v);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=v.shadow.matrix,w++}n.point[x]=B,x++}else if(v.isHemisphereLight){let B=t.get(v);B.skyColor.copy(v.color).multiplyScalar(R),B.groundColor.copy(v.groundColor).multiplyScalar(R),n.hemi[m]=B,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let P=n.hash;(P.directionalLength!==f||P.pointLength!==x||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==M||P.numSpotMaps!==U||P.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,P.directionalLength=f,P.pointLength=x,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=M,P.numSpotMaps=U,P.numLightProbes=I,n.version=tg++)}function c(l,h){let d=0,p=0,f=0,x=0,y=0,g=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){let w=l[m];if(w.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(w.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(w.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),p++}else if(w.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:n}}function ph(i){let t=new ng(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ig(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ph(i),t.set(s,[a])):r>=o.length?(a=new ph(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var fc=class extends Hn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pc=class extends Hn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
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
}`;function ag(i,t,e){let n=new qs,s=new Xt,r=new Xt,o=new ye,a=new fc({depthPacking:hd}),c=new pc,l={},h=e.maxTextureSize,d={[ei]:Ue,[Ue]:ei,[Me]:Me},p=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:sg,fragmentShader:rg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let x=new _e;x.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ut(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wh;let m=this.type;this.render=function(C,I,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let u=i.getRenderTarget(),_=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Qn),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let R=m!==Un&&this.type===Un,z=m===Un&&this.type!==Un;for(let V=0,B=C.length;V<B;V++){let Y=C[V],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let $=H.getFrameExtents();if(s.multiply($),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,H.mapSize.y=r.y)),H.map===null||R===!0||z===!0){let mt=this.type!==Un?{minFilter:$e,magFilter:$e}:{};H.map!==null&&H.map.dispose(),H.map=new On(s.x,s.y,mt),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let rt=H.getViewportCount();for(let mt=0;mt<rt;mt++){let Tt=H.getViewport(mt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),A.viewport(o),H.updateMatrices(Y,mt),n=H.getFrustum(),M(I,P,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Un&&b(H,P),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(u,_,v)};function b(C,I){let P=t.update(y);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new On(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,P,p,y,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,P,f,y,null)}function w(C,I,P,u){let _=null,v=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(v!==void 0)_=v;else if(_=P.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let A=_.uuid,R=I.uuid,z=l[A];z===void 0&&(z={},l[A]=z);let V=z[R];V===void 0&&(V=_.clone(),z[R]=V,I.addEventListener("dispose",U)),_=V}if(_.visible=I.visible,_.wireframe=I.wireframe,u===Un?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:d[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let A=i.properties.get(_);A.light=P}return _}function M(C,I,P,u,_){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Un)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let R=t.update(C),z=C.material;if(Array.isArray(z)){let V=R.groups;for(let B=0,Y=V.length;B<Y;B++){let H=V[B],$=z[H.materialIndex];if($&&$.visible){let rt=w(C,$,u,_);C.onBeforeShadow(i,C,I,P,R,rt,H),i.renderBufferDirect(P,null,R,rt,C,H),C.onAfterShadow(i,C,I,P,R,rt,H)}}}else if(z.visible){let V=w(C,z,u,_);C.onBeforeShadow(i,C,I,P,R,V,null),i.renderBufferDirect(P,null,R,V,C,null),C.onAfterShadow(i,C,I,P,R,V,null)}}let A=C.children;for(let R=0,z=A.length;R<z;R++)M(A[R],I,P,u,_)}function U(C){C.target.removeEventListener("dispose",U);for(let P in l){let u=l[P],_=C.target.uuid;_ in u&&(u[_].dispose(),delete u[_])}}}var og={[xo]:_o,[yo]:bo,[vo]:So,[is]:Mo,[_o]:xo,[bo]:yo,[So]:vo,[Mo]:is};function cg(i,t){function e(){let F=!1,at=new ye,q=null,K=new ye(0,0,0,0);return{setMask:function(ot){q!==ot&&!F&&(i.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){F=ot},setClear:function(ot,lt,Dt,ue,Se){Se===!0&&(ot*=ue,lt*=ue,Dt*=ue),at.set(ot,lt,Dt,ue),K.equals(at)===!1&&(i.clearColor(ot,lt,Dt,ue),K.copy(at))},reset:function(){F=!1,q=null,K.set(-1,0,0,0)}}}function n(){let F=!1,at=!1,q=null,K=null,ot=null;return{setReversed:function(lt){if(at!==lt){let Dt=t.get("EXT_clip_control");at?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let ue=ot;ot=null,this.setClear(ue)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?ht(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(lt){q!==lt&&!F&&(i.depthMask(lt),q=lt)},setFunc:function(lt){if(at&&(lt=og[lt]),K!==lt){switch(lt){case xo:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case vo:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=lt}},setLocked:function(lt){F=lt},setClear:function(lt){ot!==lt&&(at&&(lt=1-lt),i.clearDepth(lt),ot=lt)},reset:function(){F=!1,q=null,K=null,ot=null,at=!1}}}function s(){let F=!1,at=null,q=null,K=null,ot=null,lt=null,Dt=null,ue=null,Se=null;return{setTest:function(Kt){F||(Kt?ht(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Kt){at!==Kt&&!F&&(i.stencilMask(Kt),at=Kt)},setFunc:function(Kt,ce,We){(q!==Kt||K!==ce||ot!==We)&&(i.stencilFunc(Kt,ce,We),q=Kt,K=ce,ot=We)},setOp:function(Kt,ce,We){(lt!==Kt||Dt!==ce||ue!==We)&&(i.stencilOp(Kt,ce,We),lt=Kt,Dt=ce,ue=We)},setLocked:function(Kt){F=Kt},setClear:function(Kt){Se!==Kt&&(i.clearStencil(Kt),Se=Kt)},reset:function(){F=!1,at=null,q=null,K=null,ot=null,lt=null,Dt=null,ue=null,Se=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},p=new WeakMap,f=[],x=null,y=!1,g=null,m=null,b=null,w=null,M=null,U=null,C=null,I=new ft(0,0,0),P=0,u=!1,_=null,v=null,A=null,R=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=Y>=2);let $=null,rt={},mt=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),Jt=new ye().fromArray(mt),Z=new ye().fromArray(Tt);function it(F,at,q,K){let ot=new Uint8Array(4),lt=i.createTexture();i.bindTexture(F,lt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<q;Dt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(at+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return lt}let yt={};yt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(is),Gt(!1),Ht(gl),ht(i.CULL_FACE),N(Qn);function ht(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Rt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function It(F,at){return d[F]!==at?(i.bindFramebuffer(F,at),d[F]=at,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function kt(F,at){let q=f,K=!1;if(F){q=p.get(at),q===void 0&&(q=[],p.set(at,q));let ot=F.textures;if(q.length!==ot.length||q[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Dt=ot.length;lt<Dt;lt++)q[lt]=i.COLOR_ATTACHMENT0+lt;q.length=ot.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function le(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let Wt={[yi]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Lu]:i.FUNC_REVERSE_SUBTRACT};Wt[ku]=i.MIN,Wt[Ou]=i.MAX;let he={[Bu]:i.ZERO,[Hu]:i.ONE,[Vu]:i.SRC_COLOR,[mo]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[go]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[Zu]:i.CONSTANT_COLOR,[Ju]:i.ONE_MINUS_CONSTANT_COLOR,[Ku]:i.CONSTANT_ALPHA,[ju]:i.ONE_MINUS_CONSTANT_ALPHA};function N(F,at,q,K,ot,lt,Dt,ue,Se,Kt){if(F===Qn){y===!0&&(Rt(i.BLEND),y=!1);return}if(y===!1&&(ht(i.BLEND),y=!0),F!==Nu){if(F!==g||Kt!==u){if((m!==yi||M!==yi)&&(i.blendEquation(i.FUNC_ADD),m=yi,M=yi),Kt)switch(F){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,w=null,U=null,C=null,I.set(0,0,0),P=0,g=F,u=Kt}return}ot=ot||at,lt=lt||q,Dt=Dt||K,(at!==m||ot!==M)&&(i.blendEquationSeparate(Wt[at],Wt[ot]),m=at,M=ot),(q!==b||K!==w||lt!==U||Dt!==C)&&(i.blendFuncSeparate(he[q],he[K],he[lt],he[Dt]),b=q,w=K,U=lt,C=Dt),(ue.equals(I)===!1||Se!==P)&&(i.blendColor(ue.r,ue.g,ue.b,Se),I.copy(ue),P=Se),g=F,u=!1}function re(F,at){F.side===Me?Rt(i.CULL_FACE):ht(i.CULL_FACE);let q=F.side===Ue;at&&(q=!q),Gt(q),F.blending===Qi&&F.transparent===!1?N(Qn):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let K=F.stencilWrite;a.setTest(K),K&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(F){_!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),_=F)}function Ht(F){F!==zu?(ht(i.CULL_FACE),F!==v&&(F===gl?i.cullFace(i.BACK):F===Uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),v=F}function wt(F){F!==A&&(B&&i.lineWidth(F),A=F)}function ne(F,at,q){F?(ht(i.POLYGON_OFFSET_FILL),(R!==at||z!==q)&&(i.polygonOffset(at,q),R=at,z=q)):Rt(i.POLYGON_OFFSET_FILL)}function Et(F){F?ht(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+V-1),$!==F&&(i.activeTexture(F),$=F)}function S(F,at,q){q===void 0&&($===null?q=i.TEXTURE0+V-1:q=$);let K=rt[q];K===void 0&&(K={type:void 0,texture:void 0},rt[q]=K),(K.type!==F||K.texture!==at)&&($!==q&&(i.activeTexture(q),$=q),i.bindTexture(F,at||yt[F]),K.type=F,K.texture=at)}function G(){let F=rt[$];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(F){Jt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Jt.copy(F))}function ut(F){Z.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function $t(F,at){let q=l.get(at);q===void 0&&(q=new WeakMap,l.set(at,q));let K=q.get(F);K===void 0&&(K=i.getUniformBlockIndex(at,F.name),q.set(F,K))}function Ft(F,at){let K=l.get(at).get(F);c.get(at)!==K&&(i.uniformBlockBinding(at,K,F.__bindingPointIndex),c.set(at,K))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,rt={},d={},p=new WeakMap,f=[],x=null,y=!1,g=null,m=null,b=null,w=null,M=null,U=null,C=null,I=new ft(0,0,0),P=0,u=!1,_=null,v=null,A=null,R=null,z=null,Jt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Rt,bindFramebuffer:It,drawBuffers:kt,useProgram:le,setBlending:N,setMaterial:re,setFlipSided:Gt,setCullFace:Ht,setLineWidth:wt,setPolygonOffset:ne,setScissorTest:Et,activeTexture:T,bindTexture:S,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:gt,texImage3D:At,updateUBOMapping:$t,uniformBlockBinding:Ft,texStorage2D:Yt,texStorage3D:nt,texSubImage2D:J,texSubImage3D:_t,compressedTexSubImage2D:et,compressedTexSubImage3D:pt,scissor:Pt,viewport:ut,reset:ae}}function mh(i,t,e,n){let s=lg(n);switch(e){case Ch:return i*t;case Ph:return i*t;case Dh:return i*t*2;case Lc:return i*t/s.components*s.byteLength;case kc:return i*t/s.components*s.byteLength;case zh:return i*t*2/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case Ih:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Bc:return i*t*4/s.components*s.byteLength;case zr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:case Po:return Math.max(i,16)*Math.max(t,8)/4;case Ro:case Io:return Math.max(i,8)*Math.max(t,8)/2;case Do:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lr:case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uh:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lg(i){switch(i){case kn:case Th:return{byteLength:1,components:1};case Gs:case Ah:case Ks:return{byteLength:2,components:1};case Nc:case Fc:return{byteLength:2,components:4};case wi:case Uc:case vn:return{byteLength:4,components:1};case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,h=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,S){return f?new OffscreenCanvas(T,S):Br("canvas")}function y(T,S,G){let j=1,Q=Et(T);if((Q.width>G||Q.height>G)&&(j=G/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let J=Math.floor(j*Q.width),_t=Math.floor(j*Q.height);d===void 0&&(d=x(J,_t));let et=S?x(J,_t):d;return et.width=J,et.height=_t,et.getContext("2d").drawImage(T,0,0,J,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+_t+")."),et}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function g(T){return T.generateMipmaps}function m(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,S,G,j,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=S;if(S===i.RED&&(G===i.FLOAT&&(J=i.R32F),G===i.HALF_FLOAT&&(J=i.R16F),G===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.R8UI),G===i.UNSIGNED_SHORT&&(J=i.R16UI),G===i.UNSIGNED_INT&&(J=i.R32UI),G===i.BYTE&&(J=i.R8I),G===i.SHORT&&(J=i.R16I),G===i.INT&&(J=i.R32I)),S===i.RG&&(G===i.FLOAT&&(J=i.RG32F),G===i.HALF_FLOAT&&(J=i.RG16F),G===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RG8UI),G===i.UNSIGNED_SHORT&&(J=i.RG16UI),G===i.UNSIGNED_INT&&(J=i.RG32UI),G===i.BYTE&&(J=i.RG8I),G===i.SHORT&&(J=i.RG16I),G===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGB8UI),G===i.UNSIGNED_SHORT&&(J=i.RGB16UI),G===i.UNSIGNED_INT&&(J=i.RGB32UI),G===i.BYTE&&(J=i.RGB8I),G===i.SHORT&&(J=i.RGB16I),G===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),G===i.UNSIGNED_INT&&(J=i.RGBA32UI),G===i.BYTE&&(J=i.RGBA8I),G===i.SHORT&&(J=i.RGBA16I),G===i.INT&&(J=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){let _t=Q?pa:jt.getTransfer(j);G===i.FLOAT&&(J=i.RGBA32F),G===i.HALF_FLOAT&&(J=i.RGBA16F),G===i.UNSIGNED_BYTE&&(J=_t===oe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(T,S){let G;return T?S===null||S===wi||S===as?G=i.DEPTH24_STENCIL8:S===vn?G=i.DEPTH32F_STENCIL8:S===Gs&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wi||S===as?G=i.DEPTH_COMPONENT24:S===vn?G=i.DEPTH_COMPONENT32F:S===Gs&&(G=i.DEPTH_COMPONENT16),G}function U(T,S){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==$e&&T.minFilter!==yn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function C(T){let S=T.target;S.removeEventListener("dispose",C),P(S),S.isVideoTexture&&h.delete(S)}function I(T){let S=T.target;S.removeEventListener("dispose",I),_(S)}function P(T){let S=n.get(T);if(S.__webglInit===void 0)return;let G=T.source,j=p.get(G);if(j){let Q=j[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&u(T),Object.keys(j).length===0&&p.delete(G)}n.remove(T)}function u(T){let S=n.get(T);i.deleteTexture(S.__webglTexture);let G=T.source,j=p.get(G);delete j[S.__cacheKey],o.memory.textures--}function _(T){let S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Q=0;Q<S.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=T.textures;for(let j=0,Q=G.length;j<Q;j++){let J=n.get(G[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(T)}let v=0;function A(){v=0}function R(){let T=v;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),v+=1,T}function z(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function V(T,S){let G=n.get(T);if(T.isVideoTexture&&wt(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,T,S);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function B(T,S){let G=n.get(T);if(T.version>0&&G.__version!==T.version){Z(G,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function Y(T,S){let G=n.get(T);if(T.version>0&&G.__version!==T.version){Z(G,T,S);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function H(T,S){let G=n.get(T);if(T.version>0&&G.__version!==T.version){it(G,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}let $={[To]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},rt={[$e]:i.NEAREST,[cd]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},mt={[dd]:i.NEVER,[_d]:i.ALWAYS,[fd]:i.LESS,[Nh]:i.LEQUAL,[pd]:i.EQUAL,[xd]:i.GEQUAL,[md]:i.GREATER,[gd]:i.NOTEQUAL};function Tt(T,S){if(S.type===vn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===yn||S.magFilter===Fa||S.magFilter===cr||S.magFilter===Si||S.minFilter===yn||S.minFilter===Fa||S.minFilter===cr||S.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,$[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,rt[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$e||S.minFilter!==cr&&S.minFilter!==Si||S.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Jt(T,S){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",C));let j=S.source,Q=p.get(j);Q===void 0&&(Q={},p.set(j,Q));let J=z(S);if(J!==T.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[J].usedTimes++;let _t=Q[T.__cacheKey];_t!==void 0&&(Q[T.__cacheKey].usedTimes--,_t.usedTimes===0&&u(S)),T.__cacheKey=J,T.__webglTexture=Q[J].texture}return G}function Z(T,S,G){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);let Q=Jt(T,S),J=S.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+G);let _t=n.get(J);if(J.version!==_t.__version||Q===!0){e.activeTexture(i.TEXTURE0+G);let et=jt.getPrimaries(jt.workingColorSpace),pt=S.colorSpace===jn?null:jt.getPrimaries(S.colorSpace),Yt=S.colorSpace===jn||et===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let nt=y(S.image,!1,s.maxTextureSize);nt=ne(S,nt);let gt=r.convert(S.format,S.colorSpace),At=r.convert(S.type),Pt=w(S.internalFormat,gt,At,S.colorSpace,S.isVideoTexture);Tt(j,S);let ut,$t=S.mipmaps,Ft=S.isVideoTexture!==!0,ae=_t.__version===void 0||Q===!0,F=J.dataReady,at=U(S,nt);if(S.isDepthTexture)Pt=M(S.format===os,S.type),ae&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Pt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,nt.width,nt.height,0,gt,At,null));else if(S.isDataTexture)if($t.length>0){Ft&&ae&&e.texStorage2D(i.TEXTURE_2D,at,Pt,$t[0].width,$t[0].height);for(let q=0,K=$t.length;q<K;q++)ut=$t[q],Ft?F&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ut.width,ut.height,gt,At,ut.data):e.texImage2D(i.TEXTURE_2D,q,Pt,ut.width,ut.height,0,gt,At,ut.data);S.generateMipmaps=!1}else Ft?(ae&&e.texStorage2D(i.TEXTURE_2D,at,Pt,nt.width,nt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,At,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,nt.width,nt.height,0,gt,At,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Pt,$t[0].width,$t[0].height,nt.depth);for(let q=0,K=$t.length;q<K;q++)if(ut=$t[q],S.format!==hn)if(gt!==null)if(Ft){if(F)if(S.layerUpdates.size>0){let ot=mh(ut.width,ut.height,S.format,S.type);for(let lt of S.layerUpdates){let Dt=ut.data.subarray(lt*ot/ut.data.BYTES_PER_ELEMENT,(lt+1)*ot/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,lt,ut.width,ut.height,1,gt,Dt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ut.width,ut.height,nt.depth,gt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Pt,ut.width,ut.height,nt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ut.width,ut.height,nt.depth,gt,At,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Pt,ut.width,ut.height,nt.depth,0,gt,At,ut.data)}else{Ft&&ae&&e.texStorage2D(i.TEXTURE_2D,at,Pt,$t[0].width,$t[0].height);for(let q=0,K=$t.length;q<K;q++)ut=$t[q],S.format!==hn?gt!==null?Ft?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,ut.width,ut.height,gt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Pt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?F&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ut.width,ut.height,gt,At,ut.data):e.texImage2D(i.TEXTURE_2D,q,Pt,ut.width,ut.height,0,gt,At,ut.data)}else if(S.isDataArrayTexture)if(Ft){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Pt,nt.width,nt.height,nt.depth),F)if(S.layerUpdates.size>0){let q=mh(nt.width,nt.height,S.format,S.type);for(let K of S.layerUpdates){let ot=nt.data.subarray(K*q/nt.data.BYTES_PER_ELEMENT,(K+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,gt,At,ot)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,At,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,nt.width,nt.height,nt.depth,0,gt,At,nt.data);else if(S.isData3DTexture)Ft?(ae&&e.texStorage3D(i.TEXTURE_3D,at,Pt,nt.width,nt.height,nt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,At,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,nt.width,nt.height,nt.depth,0,gt,At,nt.data);else if(S.isFramebufferTexture){if(ae)if(Ft)e.texStorage2D(i.TEXTURE_2D,at,Pt,nt.width,nt.height);else{let q=nt.width,K=nt.height;for(let ot=0;ot<at;ot++)e.texImage2D(i.TEXTURE_2D,ot,Pt,q,K,0,gt,At,null),q>>=1,K>>=1}}else if($t.length>0){if(Ft&&ae){let q=Et($t[0]);e.texStorage2D(i.TEXTURE_2D,at,Pt,q.width,q.height)}for(let q=0,K=$t.length;q<K;q++)ut=$t[q],Ft?F&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt,At,ut):e.texImage2D(i.TEXTURE_2D,q,Pt,gt,At,ut);S.generateMipmaps=!1}else if(Ft){if(ae){let q=Et(nt);e.texStorage2D(i.TEXTURE_2D,at,Pt,q.width,q.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,At,nt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,gt,At,nt);g(S)&&m(j),_t.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function it(T,S,G){if(S.image.length!==6)return;let j=Jt(T,S),Q=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);let J=n.get(Q);if(Q.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+G);let _t=jt.getPrimaries(jt.workingColorSpace),et=S.colorSpace===jn?null:jt.getPrimaries(S.colorSpace),pt=S.colorSpace===jn||_t===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Yt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!Yt&&!nt?gt[K]=y(S.image[K],!0,s.maxCubemapSize):gt[K]=nt?S.image[K].image:S.image[K],gt[K]=ne(S,gt[K]);let At=gt[0],Pt=r.convert(S.format,S.colorSpace),ut=r.convert(S.type),$t=w(S.internalFormat,Pt,ut,S.colorSpace),Ft=S.isVideoTexture!==!0,ae=J.__version===void 0||j===!0,F=Q.dataReady,at=U(S,At);Tt(i.TEXTURE_CUBE_MAP,S);let q;if(Yt){Ft&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,$t,At.width,At.height);for(let K=0;K<6;K++){q=gt[K].mipmaps;for(let ot=0;ot<q.length;ot++){let lt=q[ot];S.format!==hn?Pt!==null?Ft?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,0,0,lt.width,lt.height,Pt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,$t,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,0,0,lt.width,lt.height,Pt,ut,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,$t,lt.width,lt.height,0,Pt,ut,lt.data)}}}else{if(q=S.mipmaps,Ft&&ae){q.length>0&&at++;let K=Et(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,$t,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Ft?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,Pt,ut,gt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,gt[K].width,gt[K].height,0,Pt,ut,gt[K].data);for(let ot=0;ot<q.length;ot++){let Dt=q[ot].image[K].image;Ft?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,0,0,Dt.width,Dt.height,Pt,ut,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,$t,Dt.width,Dt.height,0,Pt,ut,Dt.data)}}else{Ft?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pt,ut,gt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,Pt,ut,gt[K]);for(let ot=0;ot<q.length;ot++){let lt=q[ot];Ft?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,0,0,Pt,ut,lt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,$t,Pt,ut,lt.image[K])}}}g(S)&&m(i.TEXTURE_CUBE_MAP),J.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function yt(T,S,G,j,Q,J){let _t=r.convert(G.format,G.colorSpace),et=r.convert(G.type),pt=w(G.internalFormat,_t,et,G.colorSpace),Yt=n.get(S),nt=n.get(G);if(nt.__renderTarget=S,!Yt.__hasExternalTextures){let gt=Math.max(1,S.width>>J),At=Math.max(1,S.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,pt,gt,At,S.depth,0,_t,et,null):e.texImage2D(Q,J,pt,gt,At,0,_t,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Ht(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,nt.__webglTexture,0,Gt(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,nt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(T,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){let j=S.depthTexture,Q=j&&j.isDepthTexture?j.type:null,J=M(S.stencilBuffer,Q),_t=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=Gt(S);Ht(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,J,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,T)}else{let j=S.textures;for(let Q=0;Q<j.length;Q++){let J=j[Q],_t=r.convert(J.format,J.colorSpace),et=r.convert(J.type),pt=w(J.internalFormat,_t,et,J.colorSpace),Yt=Gt(S);G&&Ht(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,pt,S.width,S.height):Ht(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,pt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,pt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);let Q=j.__webglTexture,J=Gt(S);if(S.depthTexture.format===ts)Ht(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===os)Ht(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function It(T){let S=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=j}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Rt(S.__webglFramebuffer,T)}else if(G){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[j],T,!1);else{let Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(T,S,G){let j=n.get(T);S!==void 0&&yt(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&It(T)}function le(T){let S=T.texture,G=n.get(T),j=n.get(S);T.addEventListener("dispose",I);let Q=T.textures,J=T.isWebGLCubeRenderTarget===!0,_t=Q.length>1;if(_t||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let et=0;et<6;et++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[et]=[];for(let pt=0;pt<S.mipmaps.length;pt++)G.__webglFramebuffer[et][pt]=i.createFramebuffer()}else G.__webglFramebuffer[et]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let et=0;et<S.mipmaps.length;et++)G.__webglFramebuffer[et]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(_t)for(let et=0,pt=Q.length;et<pt;et++){let Yt=n.get(Q[et]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Ht(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let et=0;et<Q.length;et++){let pt=Q[et];G.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[et]);let Yt=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),gt=w(pt.internalFormat,Yt,nt,pt.colorSpace,T.isXRRenderTarget===!0),At=Gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,gt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,G.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,S);for(let et=0;et<6;et++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)yt(G.__webglFramebuffer[et][pt],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt);else yt(G.__webglFramebuffer[et],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);g(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let et=0,pt=Q.length;et<pt;et++){let Yt=Q[et],nt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Tt(i.TEXTURE_2D,Yt),yt(G.__webglFramebuffer,T,Yt,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,0),g(Yt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(et=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,j.__webglTexture),Tt(et,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)yt(G.__webglFramebuffer[pt],T,S,i.COLOR_ATTACHMENT0,et,pt);else yt(G.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,et,0);g(S)&&m(et),e.unbindTexture()}T.depthBuffer&&It(T)}function Wt(T){let S=T.textures;for(let G=0,j=S.length;G<j;G++){let Q=S[G];if(g(Q)){let J=b(T),_t=n.get(Q).__webglTexture;e.bindTexture(J,_t),m(J),e.unbindTexture()}}}let he=[],N=[];function re(T){if(T.samples>0){if(Ht(T)===!1){let S=T.textures,G=T.width,j=T.height,Q=i.COLOR_BUFFER_BIT,J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(T),et=S.length>1;if(et)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);let Yt=n.get(S[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,G,j,0,0,G,j,Q,i.NEAREST),c===!0&&(he.length=0,N.length=0,he.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(he.push(J),N.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);let Yt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Gt(T){return Math.min(s.maxSamples,T.samples)}function Ht(T){let S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function wt(T){let S=o.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function ne(T,S){let G=T.colorSpace,j=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==ds&&G!==jn&&(jt.getTransfer(G)===oe?(j!==hn||Q!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Et(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=A,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=kt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ht}function ug(i,t){function e(n,s=jn){let r,o=jt.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.BYTE;if(n===Ah)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Ks)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ih)return i.RGB;if(n===hn)return i.RGBA;if(n===Ph)return i.LUMINANCE;if(n===Dh)return i.LUMINANCE_ALPHA;if(n===ts)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Lc)return i.RED;if(n===kc)return i.RED_INTEGER;if(n===zh)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===zr||n===Ur||n===Nr||n===Fr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Io||n===Po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===zo||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Do||n===zo)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===No||n===Fo||n===Lo||n===ko||n===Oo||n===Bo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===No)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Go)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===Zo||n===Jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uh||n===Ko||n===jo||n===Qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var mc=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ge=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},dg={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,x=.005;l.inputState.pinching&&p>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pg=`
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

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:fg,fragmentShader:pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xc=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,x=null,y=new gc,g=e.getContextAttributes(),m=null,b=null,w=[],M=[],U=new Xt,C=null,I=new Le;I.viewport=new ye;let P=new Le;P.viewport=new ye;let u=[I,P],_=new mc,v=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=w[Z];return it===void 0&&(it=new Vs,w[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=w[Z];return it===void 0&&(it=new Vs,w[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=w[Z];return it===void 0&&(it=new Vs,w[Z]=it),it.getHandSpace()};function R(Z){let it=M.indexOf(Z.inputSource);if(it===-1)return;let yt=w[it];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,l||o),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",V);for(let Z=0;Z<w.length;Z++){let it=M[Z];it!==null&&(M[Z]=null,w[Z].disconnect(it))}v=null,A=null,y.reset(),t.setRenderTarget(m),f=null,p=null,d=null,s=null,b=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",z),s.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new On(f.framebufferWidth,f.framebufferHeight,{format:hn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,yt=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?os:ts,yt=g.stencil?as:wi);let Rt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(Rt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new On(p.textureWidth,p.textureHeight,{format:hn,type:kn,depthTexture:new Zr(p.textureWidth,p.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(Z){for(let it=0;it<Z.removed.length;it++){let yt=Z.removed[it],ht=M.indexOf(yt);ht>=0&&(M[ht]=null,w[ht].disconnect(yt))}for(let it=0;it<Z.added.length;it++){let yt=Z.added[it],ht=M.indexOf(yt);if(ht===-1){for(let It=0;It<w.length;It++)if(It>=M.length){M.push(yt),ht=It;break}else if(M[It]===null){M[It]=yt,ht=It;break}if(ht===-1)break}let Rt=w[ht];Rt&&Rt.connect(yt)}}let B=new O,Y=new O;function H(Z,it,yt){B.setFromMatrixPosition(it.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);let ht=B.distanceTo(Y),Rt=it.projectionMatrix.elements,It=yt.projectionMatrix.elements,kt=Rt[14]/(Rt[10]-1),le=Rt[14]/(Rt[10]+1),Wt=(Rt[9]+1)/Rt[5],he=(Rt[9]-1)/Rt[5],N=(Rt[8]-1)/Rt[0],re=(It[8]+1)/It[0],Gt=kt*N,Ht=kt*re,wt=ht/(-N+re),ne=wt*-N;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ne),Z.translateZ(wt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Rt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Et=kt+wt,T=le+wt,S=Gt-ne,G=Ht+(ht-ne),j=Wt*le/T*Et,Q=he*le/T*Et;Z.projectionMatrix.makePerspective(S,G,j,Q,Et,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function $(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,yt=Z.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(yt=y.depthFar)),_.near=P.near=I.near=it,_.far=P.far=I.far=yt,(v!==_.near||A!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,A=_.far),I.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,_.layers.mask=I.layers.mask|P.layers.mask;let ht=Z.parent,Rt=_.cameras;$(_,ht);for(let It=0;It<Rt.length;It++)$(Rt[It],ht);Rt.length===2?H(_,I,P):_.projectionMatrix.copy(I.projectionMatrix),rt(Z,_,ht)};function rt(Z,it,yt){yt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ec*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let mt=null;function Tt(Z,it){if(h=it.getViewerPose(l||o),x=it,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let ht=!1;yt.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let It=0;It<yt.length;It++){let kt=yt[It],le=null;if(f!==null)le=f.getViewport(kt);else{let he=d.getViewSubImage(p,kt);le=he.viewport,It===0&&(t.setRenderTargetTextures(b,he.colorTexture,p.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(b))}let Wt=u[It];Wt===void 0&&(Wt=new Le,Wt.layers.enable(It),Wt.viewport=new ye,u[It]=Wt),Wt.matrix.fromArray(kt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(kt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(le.x,le.y,le.width,le.height),It===0&&(_.matrix.copy(Wt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(Wt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let It=d.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&y.init(t,It,s.renderState)}}for(let yt=0;yt<w.length;yt++){let ht=M[yt],Rt=w[yt];ht!==null&&Rt!==void 0&&Rt.update(ht,it,l||o)}mt&&mt(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),x=null}let Jt=new Oh;Jt.setAnimationLoop(Tt),this.setAnimationLoop=function(Z){mt=Z},this.dispose=function(){}}},xi=new Ie,mg=new Zt;function gg(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,kh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,w,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,b,w):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ue&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ue&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),w=b.envMap,M=b.envMapRotation;w&&(g.envMap.value=w,xi.copy(M),xi.x*=-1,xi.y*=-1,xi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),g.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(xi)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ue&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){let M=w.program;n.uniformBlockBinding(b,M)}function l(b,w){let M=s[b.id];M===void 0&&(x(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",g));let U=w.program;n.updateUBOMapping(b,U);let C=t.render.frame;r[b.id]!==C&&(p(b),r[b.id]=C)}function h(b){let w=d();b.__bindingPointIndex=w;let M=i.createBuffer(),U=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,U,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){let w=s[b.id],M=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,I=M.length;C<I;C++){let P=Array.isArray(M[C])?M[C]:[M[C]];for(let u=0,_=P.length;u<_;u++){let v=P[u];if(f(v,C,u,U)===!0){let A=v.__offset,R=Array.isArray(v.value)?v.value:[v.value],z=0;for(let V=0;V<R.length;V++){let B=R[V],Y=y(B);typeof B=="number"||typeof B=="boolean"?(v.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,A+z,v.__data)):B.isMatrix3?(v.__data[0]=B.elements[0],v.__data[1]=B.elements[1],v.__data[2]=B.elements[2],v.__data[3]=0,v.__data[4]=B.elements[3],v.__data[5]=B.elements[4],v.__data[6]=B.elements[5],v.__data[7]=0,v.__data[8]=B.elements[6],v.__data[9]=B.elements[7],v.__data[10]=B.elements[8],v.__data[11]=0):(B.toArray(v.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,M,U){let C=b.value,I=w+"_"+M;if(U[I]===void 0)return typeof C=="number"||typeof C=="boolean"?U[I]=C:U[I]=C.clone(),!0;{let P=U[I];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return U[I]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function x(b){let w=b.uniforms,M=0,U=16;for(let I=0,P=w.length;I<P;I++){let u=Array.isArray(w[I])?w[I]:[w[I]];for(let _=0,v=u.length;_<v;_++){let A=u[_],R=Array.isArray(A.value)?A.value:[A.value];for(let z=0,V=R.length;z<V;z++){let B=R[z],Y=y(B),H=M%U,$=H%Y.boundary,rt=H+$;M+=$,rt!==0&&U-rt<Y.storage&&(M+=U-rt),A.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,M+=Y.storage}}}let C=M%U;return C>0&&(M+=U-C),b.__size=M,b.__cache={},this}function y(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function g(b){let w=b.target;w.removeEventListener("dispose",g);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Jr=class{constructor(t={}){let{canvas:e=vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=ti,this.toneMappingExposure=1;let M=this,U=!1,C=0,I=0,P=null,u=-1,_=null,v=new ye,A=new ye,R=null,z=new ft(0),V=0,B=e.width,Y=e.height,H=1,$=null,rt=null,mt=new ye(0,0,B,Y),Tt=new ye(0,0,B,Y),Jt=!1,Z=new qs,it=!1,yt=!1,ht=new Zt,Rt=new Zt,It=new O,kt=new ye,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function he(){return P===null?H:1}let N=n;function re(E,L){return e.getContext(E,L)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",lt,!1),N===null){let L="webgl2";if(N=re(L,E),N===null)throw re(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Gt,Ht,wt,ne,Et,T,S,G,j,Q,J,_t,et,pt,Yt,nt,gt,At,Pt,ut,$t,Ft,ae,F;function at(){Gt=new zm(N),Gt.init(),Ft=new ug(N,Gt),Ht=new Am(N,Gt,t,Ft),wt=new cg(N,Gt),Ht.reverseDepthBuffer&&p&&wt.buffers.depth.setReversed(!0),ne=new Fm(N),Et=new Z0,T=new hg(N,Gt,wt,Et,Ht,Ft,ne),S=new Cm(M),G=new Dm(M),j=new Vd(N),ae=new Em(N,j),Q=new Um(N,j,ne,ae),J=new km(N,Q,j,ne),Pt=new Lm(N,Ht,T),nt=new Rm(Et),_t=new $0(M,S,G,Gt,Ht,ae,nt),et=new gg(M,Et),pt=new K0,Yt=new ig(Gt),At=new wm(M,S,G,wt,J,f,c),gt=new ag(M,J,Ht),F=new xg(N,ne,Ht,wt),ut=new Tm(N,Gt,ne),$t=new Nm(N,Gt,ne),ne.programs=_t.programs,M.capabilities=Ht,M.extensions=Gt,M.properties=Et,M.renderLists=pt,M.shadowMap=gt,M.state=wt,M.info=ne}at();let q=new xc(M,N);this.xr=q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=Gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(B,Y,!1))},this.getSize=function(E){return E.set(B,Y)},this.setSize=function(E,L,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,Y=L,e.width=Math.floor(E*H),e.height=Math.floor(L*H),W===!0&&(e.style.width=E+"px",e.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(B*H,Y*H).floor()},this.setDrawingBufferSize=function(E,L,W){B=E,Y=L,H=W,e.width=Math.floor(E*W),e.height=Math.floor(L*W),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,L,W,X){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,L,W,X),wt.viewport(v.copy(mt).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Tt)},this.setScissor=function(E,L,W,X){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,L,W,X),wt.scissor(A.copy(Tt).multiplyScalar(H).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(E){wt.setScissorTest(Jt=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(E=!0,L=!0,W=!0){let X=0;if(E){let k=!1;if(P!==null){let st=P.texture.format;k=st===Bc||st===Oc||st===kc}if(k){let st=P.texture.type,dt=st===kn||st===wi||st===Gs||st===as||st===Nc||st===Fc,vt=At.getClearColor(),Mt=At.getClearAlpha(),Nt=vt.r,Ot=vt.g,bt=vt.b;dt?(x[0]=Nt,x[1]=Ot,x[2]=bt,x[3]=Mt,N.clearBufferuiv(N.COLOR,0,x)):(y[0]=Nt,y[1]=Ot,y[2]=bt,y[3]=Mt,N.clearBufferiv(N.COLOR,0,y))}else X|=N.COLOR_BUFFER_BIT}L&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),pt.dispose(),Yt.dispose(),Et.dispose(),S.dispose(),G.dispose(),J.dispose(),ae.dispose(),F.dispose(),_t.dispose(),q.dispose(),q.removeEventListener("sessionstart",cl),q.removeEventListener("sessionend",ll),ui.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let E=ne.autoReset,L=gt.enabled,W=gt.autoUpdate,X=gt.needsUpdate,k=gt.type;at(),ne.autoReset=E,gt.enabled=L,gt.autoUpdate=W,gt.needsUpdate=X,gt.type=k}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){let L=E.target;L.removeEventListener("dispose",Dt),ue(L)}function ue(E){Se(E),Et.remove(E)}function Se(E){let L=Et.get(E).programs;L!==void 0&&(L.forEach(function(W){_t.releaseProgram(W)}),E.isShaderMaterial&&_t.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,W,X,k,st){L===null&&(L=le);let dt=k.isMesh&&k.matrixWorld.determinant()<0,vt=Iu(E,L,W,X,k);wt.setMaterial(X,dt);let Mt=W.index,Nt=1;if(X.wireframe===!0){if(Mt=Q.getWireframeAttribute(W),Mt===void 0)return;Nt=2}let Ot=W.drawRange,bt=W.attributes.position,Qt=Ot.start*Nt,de=(Ot.start+Ot.count)*Nt;st!==null&&(Qt=Math.max(Qt,st.start*Nt),de=Math.min(de,(st.start+st.count)*Nt)),Mt!==null?(Qt=Math.max(Qt,0),de=Math.min(de,Mt.count)):bt!=null&&(Qt=Math.max(Qt,0),de=Math.min(de,bt.count));let fe=de-Qt;if(fe<0||fe===1/0)return;ae.setup(k,X,vt,W,Mt);let He,ie=ut;if(Mt!==null&&(He=j.get(Mt),ie=$t,ie.setIndex(He)),k.isMesh)X.wireframe===!0?(wt.setLineWidth(X.wireframeLinewidth*he()),ie.setMode(N.LINES)):ie.setMode(N.TRIANGLES);else if(k.isLine){let St=X.linewidth;St===void 0&&(St=1),wt.setLineWidth(St*he()),k.isLineSegments?ie.setMode(N.LINES):k.isLineLoop?ie.setMode(N.LINE_LOOP):ie.setMode(N.LINE_STRIP)}else k.isPoints?ie.setMode(N.POINTS):k.isSprite&&ie.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ie.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))ie.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let St=k._multiDrawStarts,Rn=k._multiDrawCounts,se=k._multiDrawCount,an=Mt?j.get(Mt).bytesPerElement:1,Fi=Et.get(X).currentProgram.getUniforms();for(let Xe=0;Xe<se;Xe++)Fi.setValue(N,"_gl_DrawID",Xe),ie.render(St[Xe]/an,Rn[Xe])}else if(k.isInstancedMesh)ie.renderInstances(Qt,fe,k.count);else if(W.isInstancedBufferGeometry){let St=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Rn=Math.min(W.instanceCount,St);ie.renderInstances(Qt,fe,Rn)}else ie.render(Qt,fe)};function Kt(E,L,W){E.transparent===!0&&E.side===Me&&E.forceSinglePass===!1?(E.side=Ue,E.needsUpdate=!0,or(E,L,W),E.side=ei,E.needsUpdate=!0,or(E,L,W),E.side=Me):or(E,L,W)}this.compile=function(E,L,W=null){W===null&&(W=E),m=Yt.get(W),m.init(L),w.push(m),W.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let X=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let st=k.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){let vt=st[dt];Kt(vt,W,k),X.add(vt)}else Kt(st,W,k),X.add(st)}),w.pop(),m=null,X},this.compileAsync=function(E,L,W=null){let X=this.compile(E,L,W);return new Promise(k=>{function st(){if(X.forEach(function(dt){Et.get(dt).currentProgram.isReady()&&X.delete(dt)}),X.size===0){k(E);return}setTimeout(st,10)}Gt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ce=null;function We(E){ce&&ce(E)}function cl(){ui.stop()}function ll(){ui.start()}let ui=new Oh;ui.setAnimationLoop(We),typeof self!="undefined"&&ui.setContext(self),this.setAnimationLoop=function(E){ce=E,q.setAnimationLoop(E),E===null?ui.stop():ui.start()},q.addEventListener("sessionstart",cl),q.addEventListener("sessionend",ll),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(L),L=q.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,L,P),m=Yt.get(E,w.length),m.init(L),w.push(m),Rt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Z.setFromProjectionMatrix(Rt),yt=this.localClippingEnabled,it=nt.init(this.clippingPlanes,yt),g=pt.get(E,b.length),g.init(),b.push(g),q.enabled===!0&&q.isPresenting===!0){let st=M.xr.getDepthSensingMesh();st!==null&&Na(st,L,-1/0,M.sortObjects)}Na(E,L,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort($,rt),Wt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Wt&&At.addToRenderList(g,E),this.info.render.frame++,it===!0&&nt.beginShadows();let W=m.state.shadowsArray;gt.render(W,E,L),it===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,k=g.transmissive;if(m.setupLights(),L.isArrayCamera){let st=L.cameras;if(k.length>0)for(let dt=0,vt=st.length;dt<vt;dt++){let Mt=st[dt];ul(X,k,E,Mt)}Wt&&At.render(E);for(let dt=0,vt=st.length;dt<vt;dt++){let Mt=st[dt];hl(g,E,Mt,Mt.viewport)}}else k.length>0&&ul(X,k,E,L),Wt&&At.render(E),hl(g,E,L);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(M,E,L),ae.resetDefaultState(),u=-1,_=null,w.pop(),w.length>0?(m=w[w.length-1],it===!0&&nt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Na(E,L,W,X){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){X&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Rt);let dt=J.update(E),vt=E.material;vt.visible&&g.push(E,dt,vt,W,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){let dt=J.update(E),vt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),kt.copy(dt.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(Rt)),Array.isArray(vt)){let Mt=dt.groups;for(let Nt=0,Ot=Mt.length;Nt<Ot;Nt++){let bt=Mt[Nt],Qt=vt[bt.materialIndex];Qt&&Qt.visible&&g.push(E,dt,Qt,W,kt.z,bt)}}else vt.visible&&g.push(E,dt,vt,W,kt.z,null)}}let st=E.children;for(let dt=0,vt=st.length;dt<vt;dt++)Na(st[dt],L,W,X)}function hl(E,L,W,X){let k=E.opaque,st=E.transmissive,dt=E.transparent;m.setupLightsView(W),it===!0&&nt.setGlobalState(M.clippingPlanes,W),X&&wt.viewport(v.copy(X)),k.length>0&&ar(k,L,W),st.length>0&&ar(st,L,W),dt.length>0&&ar(dt,L,W),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function ul(E,L,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new On(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Ks:kn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let st=m.state.transmissionRenderTarget[X.id],dt=X.viewport||v;st.setSize(dt.z,dt.w);let vt=M.getRenderTarget();M.setRenderTarget(st),M.getClearColor(z),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),Wt&&At.render(W);let Mt=M.toneMapping;M.toneMapping=ti;let Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),it===!0&&nt.setGlobalState(M.clippingPlanes,X),ar(E,W,X),T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let bt=0,Qt=L.length;bt<Qt;bt++){let de=L[bt],fe=de.object,He=de.geometry,ie=de.material,St=de.group;if(ie.side===Me&&fe.layers.test(X.layers)){let Rn=ie.side;ie.side=Ue,ie.needsUpdate=!0,dl(fe,W,X,He,ie,St),ie.side=Rn,ie.needsUpdate=!0,Ot=!0}}Ot===!0&&(T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st))}M.setRenderTarget(vt),M.setClearColor(z,V),Nt!==void 0&&(X.viewport=Nt),M.toneMapping=Mt}function ar(E,L,W){let X=L.isScene===!0?L.overrideMaterial:null;for(let k=0,st=E.length;k<st;k++){let dt=E[k],vt=dt.object,Mt=dt.geometry,Nt=X===null?dt.material:X,Ot=dt.group;vt.layers.test(W.layers)&&dl(vt,L,W,Mt,Nt,Ot)}}function dl(E,L,W,X,k,st){E.onBeforeRender(M,L,W,X,k,st),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(M,L,W,X,E,st),k.transparent===!0&&k.side===Me&&k.forceSinglePass===!1?(k.side=Ue,k.needsUpdate=!0,M.renderBufferDirect(W,L,X,k,E,st),k.side=ei,k.needsUpdate=!0,M.renderBufferDirect(W,L,X,k,E,st),k.side=Me):M.renderBufferDirect(W,L,X,k,E,st),E.onAfterRender(M,L,W,X,k,st)}function or(E,L,W){L.isScene!==!0&&(L=le);let X=Et.get(E),k=m.state.lights,st=m.state.shadowsArray,dt=k.state.version,vt=_t.getParameters(E,k.state,st,L,W),Mt=_t.getProgramCacheKey(vt),Nt=X.programs;X.environment=E.isMeshStandardMaterial?L.environment:null,X.fog=L.fog,X.envMap=(E.isMeshStandardMaterial?G:S).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Dt),Nt=new Map,X.programs=Nt);let Ot=Nt.get(Mt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===dt)return pl(E,vt),Ot}else vt.uniforms=_t.getUniforms(E),E.onBeforeCompile(vt,M),Ot=_t.acquireProgram(vt,Mt),Nt.set(Mt,Ot),X.uniforms=vt.uniforms;let bt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(bt.clippingPlanes=nt.uniform),pl(E,vt),X.needsLights=Du(E),X.lightsStateVersion=dt,X.needsLights&&(bt.ambientLightColor.value=k.state.ambient,bt.lightProbe.value=k.state.probe,bt.directionalLights.value=k.state.directional,bt.directionalLightShadows.value=k.state.directionalShadow,bt.spotLights.value=k.state.spot,bt.spotLightShadows.value=k.state.spotShadow,bt.rectAreaLights.value=k.state.rectArea,bt.ltc_1.value=k.state.rectAreaLTC1,bt.ltc_2.value=k.state.rectAreaLTC2,bt.pointLights.value=k.state.point,bt.pointLightShadows.value=k.state.pointShadow,bt.hemisphereLights.value=k.state.hemi,bt.directionalShadowMap.value=k.state.directionalShadowMap,bt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,bt.spotShadowMap.value=k.state.spotShadowMap,bt.spotLightMatrix.value=k.state.spotLightMatrix,bt.spotLightMap.value=k.state.spotLightMap,bt.pointShadowMap.value=k.state.pointShadowMap,bt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function fl(E){if(E.uniformsList===null){let L=E.currentProgram.getUniforms();E.uniformsList=ns.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function pl(E,L){let W=Et.get(E);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Iu(E,L,W,X,k){L.isScene!==!0&&(L=le),T.resetTextureUnits();let st=L.fog,dt=X.isMeshStandardMaterial?L.environment:null,vt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ds,Mt=(X.isMeshStandardMaterial?G:S).get(X.envMap||dt),Nt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),bt=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,de=!!W.morphAttributes.color,fe=ti;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=M.toneMapping);let He=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=He!==void 0?He.length:0,St=Et.get(X),Rn=m.state.lights;if(it===!0&&(yt===!0||E!==_)){let je=E===_&&X.id===u;nt.setState(X,E,je)}let se=!1;X.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Rn.state.version||St.outputColorSpace!==vt||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==Mt||X.fog===!0&&St.fog!==st||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==nt.numPlanes||St.numIntersection!==nt.numIntersection)||St.vertexAlphas!==Nt||St.vertexTangents!==Ot||St.morphTargets!==bt||St.morphNormals!==Qt||St.morphColors!==de||St.toneMapping!==fe||St.morphTargetsCount!==ie)&&(se=!0):(se=!0,St.__version=X.version);let an=St.currentProgram;se===!0&&(an=or(X,L,k));let Fi=!1,Xe=!1,Is=!1,pe=an.getUniforms(),xn=St.uniforms;if(wt.useProgram(an.program)&&(Fi=!0,Xe=!0,Is=!0),X.id!==u&&(u=X.id,Xe=!0),Fi||_!==E){wt.buffers.depth.getReversed()?(ht.copy(E.projectionMatrix),bd(ht),Sd(ht),pe.setValue(N,"projectionMatrix",ht)):pe.setValue(N,"projectionMatrix",E.projectionMatrix),pe.setValue(N,"viewMatrix",E.matrixWorldInverse);let Wn=pe.map.cameraPosition;Wn!==void 0&&Wn.setValue(N,It.setFromMatrixPosition(E.matrixWorld)),Ht.logarithmicDepthBuffer&&pe.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,Xe=!0,Is=!0)}if(k.isSkinnedMesh){pe.setOptional(N,k,"bindMatrix"),pe.setOptional(N,k,"bindMatrixInverse");let je=k.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),pe.setValue(N,"boneTexture",je.boneTexture,T))}k.isBatchedMesh&&(pe.setOptional(N,k,"batchingTexture"),pe.setValue(N,"batchingTexture",k._matricesTexture,T),pe.setOptional(N,k,"batchingIdTexture"),pe.setValue(N,"batchingIdTexture",k._indirectTexture,T),pe.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&pe.setValue(N,"batchingColorTexture",k._colorsTexture,T));let Ps=W.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&Pt.update(k,W,an),(Xe||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,pe.setValue(N,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(xn.envMap.value=Mt,xn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&L.environment!==null&&(xn.envMapIntensity.value=L.environmentIntensity),Xe&&(pe.setValue(N,"toneMappingExposure",M.toneMappingExposure),St.needsLights&&Pu(xn,Is),st&&X.fog===!0&&et.refreshFogUniforms(xn,st),et.refreshMaterialUniforms(xn,X,H,Y,m.state.transmissionRenderTarget[E.id]),ns.upload(N,fl(St),xn,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ns.upload(N,fl(St),xn,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(N,"center",k.center),pe.setValue(N,"modelViewMatrix",k.modelViewMatrix),pe.setValue(N,"normalMatrix",k.normalMatrix),pe.setValue(N,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let je=X.uniformsGroups;for(let Wn=0,Xn=je.length;Wn<Xn;Wn++){let ml=je[Wn];F.update(ml,an),F.bind(ml,an)}}return an}function Pu(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function Du(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,L,W){Et.get(E.texture).__webglTexture=L,Et.get(E.depthTexture).__webglTexture=W;let X=Et.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){let W=Et.get(E);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,W=0){P=E,C=L,I=W;let X=!0,k=null,st=!1,dt=!1;if(E){let Mt=Et.get(E);if(Mt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Mt.__hasExternalTextures)T.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let bt=E.depthTexture;if(Mt.__boundDepthTexture!==bt){if(bt!==null&&Et.has(bt)&&(E.width!==bt.image.width||E.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}let Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(dt=!0);let Ot=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[L])?k=Ot[L][W]:k=Ot[L],st=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?k=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?k=Ot[W]:k=Ot,v.copy(E.viewport),A.copy(E.scissor),R=E.scissorTest}else v.copy(mt).multiplyScalar(H).floor(),A.copy(Tt).multiplyScalar(H).floor(),R=Jt;if(wt.bindFramebuffer(N.FRAMEBUFFER,k)&&X&&wt.drawBuffers(E,k),wt.viewport(v),wt.scissor(A),wt.setScissorTest(R),st){let Mt=Et.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,Mt.__webglTexture,W)}else if(dt){let Mt=Et.get(E.texture),Nt=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,W||0,Nt)}u=-1},this.readRenderTargetPixels=function(E,L,W,X,k,st,dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){wt.bindFramebuffer(N.FRAMEBUFFER,vt);try{let Mt=E.texture,Nt=Mt.format,Ot=Mt.type;if(!Ht.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-X&&W>=0&&W<=E.height-k&&N.readPixels(L,W,X,k,Ft.convert(Nt),Ft.convert(Ot),st)}finally{let Mt=P!==null?Et.get(P).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(E,L,W,X,k,st,dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){let Mt=E.texture,Nt=Mt.format,Ot=Mt.type;if(!Ht.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-X&&W>=0&&W<=E.height-k){wt.bindFramebuffer(N.FRAMEBUFFER,vt);let bt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,bt),N.bufferData(N.PIXEL_PACK_BUFFER,st.byteLength,N.STREAM_READ),N.readPixels(L,W,X,k,Ft.convert(Nt),Ft.convert(Ot),0);let Qt=P!==null?Et.get(P).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,Qt);let de=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Md(N,de,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,bt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,st),N.deleteBuffer(bt),N.deleteSync(de),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,L=null,W=0){E.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);let X=Math.pow(2,-W),k=Math.floor(E.image.width*X),st=Math.floor(E.image.height*X),dt=L!==null?L.x:0,vt=L!==null?L.y:0;T.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,dt,vt,k,st),wt.unbindTexture()},this.copyTextureToTexture=function(E,L,W=null,X=null,k=0){E.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],L=arguments[2],k=arguments[3]||0,W=null);let st,dt,vt,Mt,Nt,Ot,bt,Qt,de,fe=E.isCompressedTexture?E.mipmaps[k]:E.image;W!==null?(st=W.max.x-W.min.x,dt=W.max.y-W.min.y,vt=W.isBox3?W.max.z-W.min.z:1,Mt=W.min.x,Nt=W.min.y,Ot=W.isBox3?W.min.z:0):(st=fe.width,dt=fe.height,vt=fe.depth||1,Mt=0,Nt=0,Ot=0),X!==null?(bt=X.x,Qt=X.y,de=X.z):(bt=0,Qt=0,de=0);let He=Ft.convert(L.format),ie=Ft.convert(L.type),St;L.isData3DTexture?(T.setTexture3D(L,0),St=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),St=N.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Rn=N.getParameter(N.UNPACK_ROW_LENGTH),se=N.getParameter(N.UNPACK_IMAGE_HEIGHT),an=N.getParameter(N.UNPACK_SKIP_PIXELS),Fi=N.getParameter(N.UNPACK_SKIP_ROWS),Xe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Nt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ot);let Is=E.isDataArrayTexture||E.isData3DTexture,pe=L.isDataArrayTexture||L.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let xn=Et.get(E),Ps=Et.get(L),je=Et.get(xn.__renderTarget),Wn=Et.get(Ps.__renderTarget);wt.bindFramebuffer(N.READ_FRAMEBUFFER,je.__webglFramebuffer),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<vt;Xn++)Is&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,k,Ot+Xn),E.isDepthTexture?(pe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(L).__webglTexture,k,de+Xn),N.blitFramebuffer(Mt,Nt,st,dt,bt,Qt,st,dt,N.DEPTH_BUFFER_BIT,N.NEAREST)):pe?N.copyTexSubImage3D(St,k,bt,Qt,de+Xn,Mt,Nt,st,dt):N.copyTexSubImage2D(St,k,bt,Qt,de+Xn,Mt,Nt,st,dt);wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pe?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(St,k,bt,Qt,de,st,dt,vt,He,ie,fe.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(St,k,bt,Qt,de,st,dt,vt,He,fe.data):N.texSubImage3D(St,k,bt,Qt,de,st,dt,vt,He,ie,fe):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,bt,Qt,st,dt,He,ie,fe.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,bt,Qt,fe.width,fe.height,He,fe.data):N.texSubImage2D(N.TEXTURE_2D,k,bt,Qt,st,dt,He,ie,fe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Rn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,se),N.pixelStorei(N.UNPACK_SKIP_PIXELS,an),N.pixelStorei(N.UNPACK_SKIP_ROWS,Fi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe),k===0&&L.generateMipmaps&&N.generateMipmap(St),wt.unbindTexture()},this.copyTextureToTexture3D=function(E,L,W=null,X=null,k=0){return E.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],L=arguments[3],k=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,L,W,X,k)},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),wt.unbindTexture()},this.resetState=function(){C=0,I=0,P=null,wt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}},Kr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var jr=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ie,this.environmentIntensity=1,this.environmentRotation=new Ie,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var _c=class extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=$e,h=$e,d,p){super(null,o,a,c,l,h,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ys=class extends xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ki=new Zt,gh=new Zt,Cr=[],xh=new Bn,_g=new Zt,Ls=new Ut,ks=new ii,Ei=class extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_g)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),xh.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),ks.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),gh.multiplyMatrices(n,Ki),Ls.matrixWorld=gh,Ls.raycast(t,Cr);for(let o=0,a=Cr.length;o<a;o++){let c=Cr[o];c.instanceId=r,c.object=this,e.push(c)}Cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _c(new Float32Array(s*this.count),s,this.count,Lc,vn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ls=class extends Hn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qr=new O,ta=new O,_h=new Zt,Os=new Ws,Ir=new ii,fo=new O,yh=new O,$s=class extends Ne{constructor(t=new _e,e=new ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Qr.fromBufferAttribute(e,s-1),ta.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Qr.distanceTo(ta);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;_h.copy(s).invert(),Os.copy(t.ray).applyMatrix4(_h);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let y=f,g=x-1;y<g;y+=l){let m=h.getX(y),b=h.getX(y+1),w=Pr(this,t,Os,c,m,b);w&&e.push(w)}if(this.isLineLoop){let y=h.getX(x-1),g=h.getX(f),m=Pr(this,t,Os,c,y,g);m&&e.push(m)}}else{let f=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let y=f,g=x-1;y<g;y+=l){let m=Pr(this,t,Os,c,y,y+1);m&&e.push(m)}if(this.isLineLoop){let y=Pr(this,t,Os,c,x-1,f);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Qr.fromBufferAttribute(o,s),ta.fromBufferAttribute(o,r),e.distanceSqToSegment(Qr,ta,fo,yh)>n)return;fo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(fo);if(!(c<t.near||c>t.far))return{distance:c,point:yh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ea=class extends $s{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Ti=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],f=[],x=0,y=[],g=n/2,m=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(p,3)),this.setAttribute("uv",new te(f,2));function b(){let M=new O,U=new O,C=0,I=(e-t)/n;for(let P=0;P<=r;P++){let u=[],_=P/r,v=_*(e-t)+t;for(let A=0;A<=s;A++){let R=A/s,z=R*c+a,V=Math.sin(z),B=Math.cos(z);U.x=v*V,U.y=-_*n+g,U.z=v*B,d.push(U.x,U.y,U.z),M.set(V,I,B).normalize(),p.push(M.x,M.y,M.z),f.push(R,1-_),u.push(x++)}y.push(u)}for(let P=0;P<s;P++)for(let u=0;u<r;u++){let _=y[u][P],v=y[u+1][P],A=y[u+1][P+1],R=y[u][P+1];(t>0||u!==0)&&(h.push(_,v,R),C+=3),(e>0||u!==r-1)&&(h.push(v,A,R),C+=3)}l.addGroup(m,C,0),m+=C}function w(M){let U=x,C=new Xt,I=new O,P=0,u=M===!0?t:e,_=M===!0?1:-1;for(let A=1;A<=s;A++)d.push(0,g*_,0),p.push(0,_,0),f.push(.5,.5),x++;let v=x;for(let A=0;A<=s;A++){let z=A/s*c+a,V=Math.cos(z),B=Math.sin(z);I.x=u*B,I.y=g*_,I.z=u*V,d.push(I.x,I.y,I.z),p.push(0,_,0),C.x=V*.5+.5,C.y=B*.5*_+.5,f.push(C.x,C.y),x++}for(let A=0;A<s;A++){let R=U+A,z=v+A;M===!0?h.push(z,z+1,R):h.push(z+1,z,R),P+=3}l.addGroup(m,P,M===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},na=class i extends Ti{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zs=class i extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let w=new O,M=new O,U=new O;for(let C=0;C<e.length;C+=3)f(e[C+0],w),f(e[C+1],M),f(e[C+2],U),c(w,M,U,b)}function c(b,w,M,U){let C=U+1,I=[];for(let P=0;P<=C;P++){I[P]=[];let u=b.clone().lerp(M,P/C),_=w.clone().lerp(M,P/C),v=C-P;for(let A=0;A<=v;A++)A===0&&P===C?I[P][A]=u:I[P][A]=u.clone().lerp(_,A/v)}for(let P=0;P<C;P++)for(let u=0;u<2*(C-P)-1;u++){let _=Math.floor(u/2);u%2===0?(p(I[P][_+1]),p(I[P+1][_]),p(I[P][_])):(p(I[P][_+1]),p(I[P+1][_+1]),p(I[P+1][_]))}}function l(b){let w=new O;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(b),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function h(){let b=new O;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let M=g(b)/2/Math.PI+.5,U=m(b)/Math.PI+.5;o.push(M,1-U)}x(),d()}function d(){for(let b=0;b<o.length;b+=6){let w=o[b+0],M=o[b+2],U=o[b+4],C=Math.max(w,M,U),I=Math.min(w,M,U);C>.9&&I<.1&&(w<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),U<.2&&(o[b+4]+=1))}}function p(b){r.push(b.x,b.y,b.z)}function f(b,w){let M=b*3;w.x=t[M+0],w.y=t[M+1],w.z=t[M+2]}function x(){let b=new O,w=new O,M=new O,U=new O,C=new Xt,I=new Xt,P=new Xt;for(let u=0,_=0;u<r.length;u+=9,_+=6){b.set(r[u+0],r[u+1],r[u+2]),w.set(r[u+3],r[u+4],r[u+5]),M.set(r[u+6],r[u+7],r[u+8]),C.set(o[_+0],o[_+1]),I.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),U.copy(b).add(w).add(M).divideScalar(3);let v=g(U);y(C,_+0,b,v),y(I,_+2,w,v),y(P,_+4,M,v)}}function y(b,w,M,U){U<0&&b.x===1&&(o[w]=b.x-1),M.x===0&&M.z===0&&(o[w]=U/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},ia=class i extends Zs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var si=class i extends Zs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ai=class i extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,p=(e-t)/s,f=new O,x=new Xt;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,h.push(x.x,x.y)}d+=p}for(let y=0;y<s;y++){let g=y*(n+1);for(let m=0;m<n;m++){let b=m+g,w=b,M=b+n+1,U=b+n+2,C=b+1;a.push(w,M,C),a.push(M,U,C)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var hs=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new O,p=new O,f=[],x=[],y=[],g=[];for(let m=0;m<=n;m++){let b=[],w=m/n,M=0;m===0&&o===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let U=0;U<=e;U++){let C=U/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+w*a),d.y=t*Math.cos(o+w*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+w*a),x.push(d.x,d.y,d.z),p.copy(d).normalize(),y.push(p.x,p.y,p.z),g.push(C+M,1-w),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let w=h[m][b+1],M=h[m][b],U=h[m+1][b],C=h[m+1][b+1];(m!==0||o>0)&&f.push(w,M,C),(m!==n-1||c<Math.PI)&&f.push(M,U,C)}this.setIndex(f),this.setAttribute("position",new te(x,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},sa=class i extends Zs{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ra=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new O,d=new O,p=new O;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let y=x/s*r,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(y),d.y=(t+e*Math.cos(g))*Math.sin(y),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(x/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let y=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,m=(s+1)*(f-1)+x,b=(s+1)*f+x;o.push(y,g,b),o.push(g,m,b)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var aa=class extends Hn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ie,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Re=class extends Hn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ie,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Dr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yc=class extends us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ml:r=t,a=2*e-n;break;case bl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ml:o=t,c=2*n-e;break;case bl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),y=x*x,g=y*x,m=-p*g+2*p*y-p*x,b=(1+p)*g+(-1.5-2*p)*y+(-.5+p)*x+1,w=(-1-f)*g+(1.5+f)*y+.5*x,M=f*g-f*y;for(let U=0;U!==a;++U)r[U]=m*o[h+U]+b*o[l+U]+w*o[c+U]+M*o[d+U];return r}},vc=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*d+o[c+p]*h;return r}},Mc=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case kr:e=this.InterpolantFactoryMethodDiscrete;break;case tc:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return tc;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&yg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===La,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,p=d-n,f=d+n;for(let x=0;x!==n;++x){let y=e[d+x];if(y!==e[p+x]||y!==e[f+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=tc;var Ri=class extends dn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=kr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends dn{};bc.prototype.ValueTypeName="color";var Sc=class extends dn{};Sc.prototype.ValueTypeName="number";var wc=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ke.slerpFlat(r,0,o,l-a,o,l,c);return r}},oa=class extends dn{InterpolantFactoryMethodLinear(t){return new wc(this.times,this.values,this.getValueSize(),t)}};oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends dn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=kr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends dn{};Ec.prototype.ValueTypeName="vector";var Tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let f=l[d],x=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},vg=new Tc,Ac=class{constructor(t){this.manager=t!==void 0?t:vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ca=class extends Js{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},po=new Zt,vh=new O,Mh=new O,Rc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(vh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Cc=class extends Rc{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},la=class extends Js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ha=class extends Js{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Gc="\\[\\]\\.:\\/",Mg=new RegExp("["+Gc+"]","g"),Wc="[^"+Gc+"]",bg="[^"+Gc.replace("\\.","")+"]",Sg=/((?:WC+[\/:])*)/.source.replace("WC",Wc),wg=/(WCOD+)?/.source.replace("WCOD",bg),Eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),Tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),Ag=new RegExp("^"+Sg+wg+Eg+Tg+"$"),Rg=["material","materials","bones","map"],Ic=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mg,"")}static parseTrackName(t){let e=Ag.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Rg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Ic;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rx=new Float32Array(1);var bh=new Zt,ua=class{constructor(t,e,n=0,s=1/0){this.ray=new Ws(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(t,e=!0,n=[]){return Pc(t,this,n,e),n.sort(Sh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pc(t[s],this,n,e);return n.sort(Sh),n}};function Sh(i,t){return i.distance-t.distance}function Pc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Pc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);var fn={legion:{id:"legion",value:1,size:32,cols:8,spacing:1.25,hp:10,atk:3.2,def:3,speed:2.7,range:0,names:["Legion\xE4re","Pl\xFCnderer"],desc:["Schwert & Scutum. Der verl\xE4ssliche Kern jeder Armee.","Axt & Rundschild. Wild und z\xE4h."],stats:{Angriff:3,Abwehr:3,Tempo:3,"Reichw.":1}},pike:{id:"pike",value:.9,size:36,cols:9,spacing:1.2,hp:10,atk:2.6,def:2.8,speed:2.25,range:0,vsCav:2.6,names:["Pikeniere","Speerm\xE4nner"],desc:["Lange Piken. Brechen jeden Reiterangriff.","Speerwall gegen Reiter."],stats:{Angriff:2,Abwehr:3,Tempo:2,"Reichw.":2}},archer:{id:"archer",value:.75,size:24,cols:8,spacing:1.35,hp:8,atk:1.4,def:1.2,speed:2.8,range:36,volley:2.9,arrowDmg:3.6,names:["Bogensch\xFCtzen","J\xE4ger"],desc:["Pfeilhagel auf gro\xDFe Distanz. Schwach im Nahkampf.","T\xF6dliche Sch\xFCtzen aus dem Hinterhalt."],stats:{Angriff:3,Abwehr:1,Tempo:3,"Reichw.":5}},cavalry:{id:"cavalry",value:1.25,size:20,cols:5,spacing:1.9,hp:16,atk:3.5,def:2.4,speed:5.4,range:0,charge:2.3,names:["Reiterei","Wolfsreiter"],desc:["Schnell und wuchtig. Sturmangriff in Flanke und R\xFCcken.","Schnelle Reiter f\xFCr \xDCberf\xE4lle."],stats:{Angriff:4,Abwehr:2,Tempo:5,"Reichw.":1}},guard:{id:"guard",value:1.3,size:24,cols:6,spacing:1.3,hp:14,atk:3.3,def:5,speed:2.1,range:0,arrowResist:.45,names:["Pr\xE4torianer","Eisenwache"],desc:["Elite mit Turmschilden. H\xE4lt jede Stellung, trotzt Pfeilen.","Schwer gepanzerte Elite."],stats:{Angriff:4,Abwehr:5,Tempo:1,"Reichw.":1}}},Wh=["legion","pike","archer","cavalry","guard"],Vn=[{id:0,name:"L\xF6wenlegion",short:"Du",ui:"#4a8cf0",uiDark:"#1f4c9a",colors:{primary:3105732,secondary:14922817,metal:13225686,helm:14264634,crest:12857387,skin:14856588,dark:4863268,wood:9067058,cloth:15722194,horse:8014634,mane:2759698,banner:3105732,hood:4155973}},{id:1,name:"Rabenclan",short:"Bot",ui:"#e0473c",uiDark:"#8e1f1a",colors:{primary:10691356,secondary:2829104,metal:7304060,helm:5593183,crest:15261900,skin:14197372,dark:2761504,wood:6110498,cloth:3816e3,horse:3879985,mane:1380882,banner:10691356,hood:2829104}}],bn={summer:{name:"Sommer",sky:[9356784,15267071],fog:13625077,grass:[7319119,8239960,6266437,8962658],dirt:11569754,sand:14206092,rock:[9276038,10197138,8157557],cliff:[10127992,9075304],water:4034249,leaf:[4164154,5216832,5941322,3701300],pine:[3107642,2776885],trunk:7031342,flower:[15917388,15760040,16777215,11565808],sun:16773590,hemi:[14676223,6982218]},autumn:{name:"Herbst",sky:[15251850,16509136],fog:15718847,grass:[10133580,11118679,9146948,11839578],dirt:10648142,sand:13744260,rock:[9274750,10129801,8024940],cliff:[10256230,9072472],water:4884136,leaf:[14251818,14916146,12865578,15253834],pine:[4023104,3496504],trunk:6176552,flower:[15253834,14251818,16777215,12865578],sun:16769208,hemi:[16771280,8022586]},winter:{name:"Winter",sky:[12176864,15660282],fog:14674160,grass:[15660023,14936816,16251644,14279659],dirt:10195076,sand:13620956,rock:[9344670,10397358,8291982],cliff:[9081500,8028812],water:6131635,leaf:[14674416,13622760,15266037,12570845],pine:[3037770,2773060],trunk:5916214,flower:[16777215,14674416,13623534,16777215],sun:16054527,hemi:[15791871,9082530]},desert:{name:"W\xFCste",sky:[15780234,16773850],fog:16048834,grass:[14729344,14202483,15256204,13610604],dirt:12159573,sand:15520924,rock:[12093024,12883050,11040598],cliff:[12614220,11036222,13667932],water:4170680,leaf:[7313978,8366149,6261298,9087050],pine:[6261298,5208618],trunk:9071170,flower:[15245388,13658682,16777215,15255658],sun:16773328,hemi:[16773340,10517066]}},ps={assault:{name:"Burg einnehmen",icon:"castle",desc:"Die feindliche Burg muss fallen. Brich das Tor und halte den Burghof.",goal:"Halte den Burghof 20 s lang oder vernichte den Feind. Zeitlimit 6:00.",time:360},defend:{name:"Burg verteidigen",icon:"shield",desc:"Der Rabenclan st\xFCrmt eure Mauern. Haltet bis zum Morgengrauen.",goal:"\xDCberlebe 5:00 oder vernichte die Angreifer. Der Burghof darf nicht fallen.",time:300},canyon:{name:"Canyon-Pass",icon:"canyon",desc:"Enge Schluchten, steile Felsen. Wer den Pass kontrolliert, gewinnt.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420},river:{name:"Flussfurt",icon:"river",desc:"Ein Fluss trennt die Heere. Br\xFCcke und Furten sind der Schl\xFCssel.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420},hill:{name:"K\xF6nigsh\xFCgel",icon:"hill",desc:"Der alte Steinkreis auf dem H\xFCgel. Wer ihn h\xE4lt, beherrscht das Land.",goal:"Halte den Steinkreis bis 100 Punkte \u2013 oder vernichte den Feind.",time:420},forest:{name:"Nebelwald",icon:"forest",desc:"Dichter Wald bietet Deckung vor Pfeilen \u2013 und Raum f\xFCr Hinterhalte.",goal:"Vernichte oder vertreibe alle feindlichen Legionen.",time:420}},Xc=["assault","defend","canyon","river","hill","forest"],Ii={easy:{name:"Leicht",size:.85,think:3.5,smart:.35},normal:{name:"Normal",size:1,think:2,smart:.7},hard:{name:"Schwer",size:1.15,think:1,smart:1}};function Xh(i){return{move:"advance",waypoints:[],target:i==="cavalry"?"ranged":"nearest",targetId:-1,stance:"balanced",formation:i==="cavalry"?"wedge":"line",delay:i==="cavalry"?5:0,skirmish:i==="archer",retreatAt:.25,retreatTo:"camp",afterRetreat:"hold"}}var xa=class{constructor(t,e){this.canvas=t,this.quality=e,this.renderer=new Jr({canvas:t,antialias:e.aa,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e.pixelRatio)),this.renderer.shadowMap.enabled=e.shadows,this.renderer.shadowMap.type=zc,this.scene=new jr,this.camera=new Le(42,1,1,900),this.cam={x:0,z:4,dist:118,yaw:0,pitch:.95,tx:0,tz:4,tdist:118,tyaw:0,tpitch:.95},this.bounds={x:78,z:52},this.raycaster=new ua,this.resize(),window.addEventListener("resize",()=>this.resize())}setupEnvironment(t,e){let n=bn[t],s=this.scene;if(this.lights)for(let f of this.lights)s.remove(f);this.sky&&s.remove(this.sky);let r=new ca(n.hemi[0],n.hemi[1],1.35),o=new la(n.sun,2.1);if(o.position.set(-75,95,55),o.target.position.set(0,0,0),this.quality.shadows){o.castShadow=!0;let f=this.quality.shadowSize;o.shadow.mapSize.set(f,f);let x=o.shadow.camera;x.left=-95,x.right=95,x.top=70,x.bottom=-70,x.near=10,x.far=320,o.shadow.bias=-8e-4,o.shadow.normalBias=.4}let a=new ha(16777215,.25);s.add(r,o,o.target,a),this.lights=[r,o,o.target,a];let c=new hs(600,24,12),l=new ft(n.sky[0]),h=new ft(n.sky[1]),d=[],p=c.attributes.position;for(let f=0;f<p.count;f++){let x=p.getY(f)/600,y=h.clone().lerp(l,Math.max(0,Math.min(1,x*1.6+.1)));d.push(y.r,y.g,y.b)}c.setAttribute("color",new te(d,3)),this.sky=new Ut(c,new ve({vertexColors:!0,side:Ue,fog:!1,depthWrite:!1})),s.add(this.sky),s.fog=new Kr(n.fog,e),s.background=new ft(n.fog)}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t/e<1.3?55:42,this.camera.updateProjectionMatrix()}updateCamera(t){let e=this.cam,n=1-Math.exp(-t*9);e.tx=Math.max(-this.bounds.x,Math.min(this.bounds.x,e.tx)),e.tz=Math.max(-this.bounds.z,Math.min(this.bounds.z,e.tz)),e.tdist=Math.max(22,Math.min(150,e.tdist)),e.tpitch=Math.max(.42,Math.min(1.38,e.tpitch)),e.x+=(e.tx-e.x)*n,e.z+=(e.tz-e.z)*n,e.dist+=(e.tdist-e.dist)*n,e.yaw+=(e.tyaw-e.yaw)*n,e.pitch+=(e.tpitch-e.pitch)*n;let s=Math.cos(e.pitch),r=Math.sin(e.pitch),o=e.x+Math.sin(e.yaw)*s*e.dist,a=e.z+Math.cos(e.yaw)*s*e.dist,c=r*e.dist;this.groundFn&&(c=Math.max(c,this.groundFn(o,a)+4)),this.camera.position.set(o,c,a),this.camera.lookAt(e.x,0,e.z)}focus(t,e,n){this.cam.tx=t,this.cam.tz=e,n&&(this.cam.tdist=n)}pan(t,e){let n=this.cam,s=n.dist*1.1/window.innerHeight,r=Math.cos(n.yaw),o=Math.sin(n.yaw),a=r,c=-o,l=-o,h=-r;n.tx-=(a*t-l*e)*s,n.tz-=(c*t-h*e)*s}zoom(t){this.cam.tdist*=t}rotate(t){this.cam.tyaw+=t}tilt(t){this.cam.tpitch+=t}pick(t,e,n){let s=new Xt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=this.raycaster.intersectObjects(n,!1)[0];return r?r.point:null}project(t,e,n,s){let r=new O(t,e,n).project(this.camera);return s.x=(r.x*.5+.5)*window.innerWidth,s.y=(-r.y*.5+.5)*window.innerHeight,s.visible=r.z<1&&r.z>-1,s}render(){this.renderer.render(this.scene,this.camera)}},_a=class{constructor(t,e){this.scene=t,this.map=e,this.group=new ge,t.add(this.group),this.zoneMeshes=[],this.routeGroup=new ge,this.group.add(this.routeGroup),this.objMesh=null,this.makeZones(),this.makeObjective()}terrainPatch(t,e,n,s,r,o,a=.25){let c=Math.max(2,Math.ceil((n-t)/2)),l=Math.max(2,Math.ceil((s-e)/2)),h=new Je(n-t,s-e,c,l);h.rotateX(-Math.PI/2);let d=h.attributes.position;for(let f=0;f<d.count;f++){let x=d.getX(f)+(t+n)/2,y=d.getZ(f)+(e+s)/2;d.setXYZ(f,x,Math.max(this.map.getHeight(x,y),this.map.hasWater?this.map.waterLevel:-99)+a,y)}h.computeVertexNormals();let p=new Ut(h,new ve({color:r,transparent:!0,opacity:o,depthWrite:!1}));return p.renderOrder=2,p}makeZones(){for(let t=0;t<2;t++){let e=this.map.zones[t],n=t===0?4885744:14698300,s=new ge;s.add(this.terrainPatch(e.x0,e.z0,e.x1,e.z1,n,.16));let r=[],o=(c,l)=>r.push(new O(c,this.map.getHeight(c,l)+.4,l));for(let c=e.x0;c<=e.x1;c+=1.5)o(c,e.z0);for(let c=e.z0;c<=e.z1;c+=1.5)o(e.x1,c);for(let c=e.x1;c>=e.x0;c-=1.5)o(c,e.z1);for(let c=e.z1;c>=e.z0;c-=1.5)o(e.x0,c);let a=new _e().setFromPoints(r);s.add(new $s(a,new ls({color:n,transparent:!0,opacity:.9}))),this.group.add(s),this.zoneMeshes.push(s)}}showZones(t,e=-1){this.zoneMeshes.forEach((n,s)=>{n.visible=t&&(e<0||e===s)})}makeObjective(){let t=this.map.objective;if(!t)return;let e=new Ai(t.r-.6,t.r,48,1);e.rotateX(-Math.PI/2);let n=new ve({color:16769146,transparent:!0,opacity:.55,depthWrite:!1,side:Me}),s=new Ut(e,n);s.position.set(t.x,this.map.getHeight(t.x,t.z)+.35,t.z),s.renderOrder=2,this.group.add(s),this.objMesh=s;let r=this.terrainPatch(t.x-t.r,t.z-t.r,t.x+t.r,t.z+t.r,16769146,0,.2);this.group.add(r)}updateObjective(t){let e=this.map.objective;if(!this.objMesh)return;let n=16769146;e.present&&(e.present[0]>0&&e.present[1]===0?n=4885744:e.present[1]>0&&e.present[0]===0?n=14698300:e.present[0]>0&&e.present[1]>0&&(n=16777215)),this.objMesh.material.color.setHex(n),this.objMesh.material.opacity=.45+Math.sin(t*3)*.15,this.objMesh.rotation.y=t*.2}clearRoutes(){for(let t of[...this.routeGroup.children])this.routeGroup.remove(t),t.geometry&&t.geometry.dispose()}addRoute(t,e,n=!1,s=.7){if(t.length<2)return;let r=[];for(let I=0;I<t.length-1;I++){let[P,u]=t[I],[_,v]=t[I+1],A=Math.hypot(_-P,v-u),R=Math.max(1,Math.ceil(A/1.2));for(let z=0;z<R;z++)r.push([P+(_-P)*(z/R),u+(v-u)*(z/R)])}r.push(t[t.length-1]);let o=[],a=.35,c=(I,P)=>Math.max(this.map.getHeight(I,P),this.map.hasWater?this.map.waterLevel:-99)+a;for(let I=0;I<r.length-1;I++){if(n&&I%3===2)continue;let[P,u]=r[I],[_,v]=r[I+1],A=_-P,R=v-u,z=Math.hypot(A,R)||1,V=-R/z*s/2,B=A/z*s/2,Y=c(P,u),H=c(_,v);o.push(P+V,Y,u+B,_+V,H,v+B,P-V,Y,u-B),o.push(_+V,H,v+B,_-V,H,v-B,P-V,Y,u-B)}let l=r.length,[h,d]=r[l-1],[p,f]=r[Math.max(0,l-3)],x=h-p,y=d-f,g=Math.hypot(x,y)||1,m=x/g,b=y/g,w=c(h,d),M=s*2.4;o.push(h+m*M,w,d+b*M,h-b*M,w,d+m*M,h+b*M,w,d-m*M);let U=new _e;U.setAttribute("position",new te(o,3));let C=new Ut(U,new ve({color:e,transparent:!0,opacity:.8,depthWrite:!1,side:Me}));C.renderOrder=4,this.routeGroup.add(C)}addMarker(t,e,n,s=3){let r=new Ai(s-.45,s,32,1);r.rotateX(-Math.PI/2);let o=new Ut(r,new ve({color:n,transparent:!0,opacity:.85,depthWrite:!1,side:Me}));return o.position.set(t,this.map.getHeight(t,e)+.45,e),o.renderOrder=4,this.routeGroup.add(o),o}addFlag(t,e,n,s){let r=new ge,o=new Ut(new Ti(.07,.07,3,4),new ve({color:2763306}));o.position.y=1.5;let a=new Ut(new Je(1.2,.8),new ve({color:n,side:Me}));a.position.set(.6,2.6,0),r.add(o,a),r.position.set(t,this.map.getHeight(t,e),e),this.routeGroup.add(r)}updateFootprints(t,e,n,s,r){if(!this.fp){this.fp=new Map;let c=new _e;c.setAttribute("position",new te([0,0,1.6,-1.3,0,-.6,1.3,0,-.6,-.55,0,-.6,.55,0,-.6,0,0,-1.9,.55,0,-.6,-.55,0,-1.9,.55,0,-1.9],3)),this.arrow=new Ut(c,new ve({color:16765802,transparent:!0,opacity:.9,depthWrite:!1,side:Me})),this.arrow.renderOrder=5,this.group.add(this.arrow)}let o=(c,l)=>Math.max(this.map.getHeight(c,l),this.map.hasWater?this.map.waterLevel:-99)+.45;for(let c of t){let l=this.fp.get(c);if(!l){let M=new _e;M.setAttribute("position",new xe(new Float32Array(33*3),3)),l=new ea(M,new ls({color:6988543,transparent:!0,opacity:.85,depthWrite:!1})),l.renderOrder=5,l.frustumCulled=!1,this.group.add(l),this.fp.set(c,l)}if(l.visible=n&&c.alive,!l.visible)continue;let h=c===e;l.material.color.setHex(h?16765802:6988543),l.material.opacity=h?.95:.6;let d=c.fwdX,p=c.fwdZ,f=p,x=-d,y=c.halfW+.3,g=c.halfD+.3,m=[[-y,g],[y,g],[y,-g],[-y,-g]],b=l.geometry.attributes.position,w=0;for(let M=0;M<4;M++){let[U,C]=m[M],[I,P]=m[(M+1)%4];for(let u=0;u<8;u++){let _=u/8,v=U+(I-U)*_,A=C+(P-C)*_,R=c.x+f*v+d*A,z=c.z+x*v+p*A;b.setXYZ(w++,R,o(R,z),z)}}b.setXYZ(w,b.getX(0),b.getY(0),b.getZ(0)),b.needsUpdate=!0}let a=this.arrow;if(a.visible=!!(s&&e&&e.alive&&e.side===0),a.visible){let c=e,l=c.halfD+3.2+Math.sin(r*4)*.25,h=c.x+c.fwdX*l,d=c.z+c.fwdZ*l;a.position.set(h,o(h,d)+.1,d),a.rotation.y=c.face,a.scale.setScalar(1.8)}}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry.dispose()})}};function pn(i){let t=i>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}function qh(i){let t=pn(i*7919+13),e=new Uint8Array(512),n=[...Array(256).keys()];for(let a=255;a>0;a--){let c=Math.floor(t()*(a+1));[n[a],n[c]]=[n[c],n[a]]}for(let a=0;a<512;a++)e[a]=n[a&255];let s=(a,c,l)=>{switch(a&7){case 0:return c+l;case 1:return-c+l;case 2:return c-l;case 3:return-c-l;case 4:return c;case 5:return-c;case 6:return l;default:return-l}},r=a=>a*a*a*(a*(a*6-15)+10),o=(a,c)=>{let l=Math.floor(a)&255,h=Math.floor(c)&255;a-=Math.floor(a),c-=Math.floor(c);let d=r(a),p=r(c),f=e[l]+h,x=e[l+1]+h,y=s(e[f],a,c)+d*(s(e[x],a-1,c)-s(e[f],a,c)),g=s(e[f+1],a,c-1)+d*(s(e[x+1],a-1,c-1)-s(e[f+1],a,c-1));return y+p*(g-y)};return o.fbm=(a,c,l=4)=>{let h=0,d=.5,p=1;for(let f=0;f<l;f++)h+=d*o(a*p,c*p),p*=2,d*=.5;return h},o}var en=(i,t,e)=>i<t?t:i>e?e:i,Pi=(i,t,e)=>i+(t-i)*e,ri=(i,t,e)=>{let n=en((e-i)/(t-i),0,1);return n*n*(3-2*n)};var ms=150,gs=100,xs=112,_s=80,Di=1.5,Ke=2,qc=0,ys=1,ya=2,tr=3,va=4,Yc=5,$c=6,Ma=class{constructor(t,e,n){this.scenario=t,this.biome=e,this.seed=n,this.rng=pn(n),this.noise=qh(n),this.nx=Math.round(xs*2/Di)+1,this.nz=Math.round(_s*2/Di)+1,this.heights=new Float32Array(this.nx*this.nz),this.ground=new Uint8Array(this.nx*this.nz),this.gw=ms/Ke,this.gd=gs/Ke;let s=this.gw*this.gd;this.blocked=new Uint8Array(s),this.cost=new Float32Array(s).fill(1),this.flags=new Uint8Array(s),this.clear=new Uint8Array(s),this.waterLevel=-.55,this.hasWater=!1,this.structures=[],this.decor={trees:[],rocks:[],tufts:[],flowers:[],tents:[],menhirs:[],bushes:[],fences:[],ruins:[],torches:[],reeds:[],lilies:[],logs:[],mushrooms:[],fields:[],farms:[],mill:null},this.forests=[],this.roads=[],this.bridges=[],this.castle=null,this.gate=null,this.objective=null,this.zones=[null,null],this.camps=[null,null],this.fogDensity=t==="forest"?.0068:.0042,this.generate()}generate(){let t=this.rng,e=this.noise,n=this.scenario;if(this.phase=t.range(0,Math.PI*2),this.roadZ=t.range(-12,12),n==="assault"||n==="defend"){let r=n==="assault"?1:-1;this.castle={cx:48*r,cz:t.range(-6,6),half:19,owner:n==="assault"?1:0,face:-r,base:1.6}}if(n==="river"){this.hasWater=!0,this.river={amp:t.range(5,9),freq:t.range(.035,.06),ph:this.phase,half:5.2};let r=t.range(-22,22);this.bridgeZ=r;let o=[],a=r>0?t.range(-40,-18):t.range(18,40);if(o.push(a),t.chance(.6)){let c=t.range(-40,40);Math.abs(c-r)>16&&Math.abs(c-a)>16&&o.push(c)}this.fords=o}n==="canyon"&&(this.canyon={amp:t.range(8,13),ph:this.phase,pinch:t.range(-15,15),top:12},this.biomeTint=!0),n==="hill"&&(this.objective={type:"hill",x:t.range(-5,5),z:t.range(-5,5),r:9,score:[0,0],need:100}),(n==="hill"||n==="forest")&&(this.hasWater=!0),(n==="castle"||this.castle)&&(this.hasWater=!0);let s=(r,o)=>this.heightFn(r,o);for(let r=0;r<this.nz;r++)for(let o=0;o<this.nx;o++){let a=-xs+o*Di,c=-_s+r*Di,l=r*this.nx+o,[h,d]=s(a,c);this.heights[l]=h,this.ground[l]=d}this.placeStructures(),this.buildNav(),this.placeDecor(),this.buildTreeHash()}canyonCenter(t){let e=this.canyon;return Math.sin(t*.035+e.ph)*e.amp+Math.sin(t*.09+e.ph*2)*2.5}canyonHalf(t){let e=this.canyon;return 15-6*Math.exp(-(((t-e.pinch)/16)**2))+this.noise(t*.08,3.3)*2.5}riverX(t){let e=this.river;return Math.sin(t*e.freq+e.ph)*e.amp+this.noise(t*.05,9.1)*3}heightFn(t,e){let n=this.noise,s=n.fbm(t*.022,e*.022,4)*3.2+n(t*.09,e*.09)*.35,r=qc,o=Math.max(0,Math.abs(t)-74),a=Math.max(0,Math.abs(e)-49),c=Math.sqrt(o*o+a*a),l=0;c>0&&(l=Math.pow(c/12,1.4)*(6+10*(.5+.5*n(t*.05,e*.05))));let h=this.scenario;if(h==="canyon"){let d=this.canyonCenter(t),p=this.canyonHalf(t),f=Math.abs(e-d),x=ri(p,p+3.5,f),y=this.canyon.top+n.fbm(t*.03,e*.03,3)*4,g=n.fbm(t*.04,e*.04,3)*1.2,m=Math.floor(x*4)/4*.35+x*.65;s=Pi(g,y,m),r=x>.12?x>.95?qc:tr:$c,f<3&&Math.abs(t)<70&&(r=ys),l*=.5}else if(h==="river"){let d=this.riverX(e),p=Math.abs(t-d),f=this.river.half+n(e*.1,1.7)*1,x=1-ri(f-1.5,f+2.5,p),y=-2.2;for(let g of this.fords){let m=Math.abs(e-g);m<5&&(y=Pi(-.2,y,ri(2.5,5,m)))}s=Pi(s*.6,y,x),x>.25?r=va:x>.02&&(r=ya)}else if(h==="hill"){let d=this.objective,p=Math.hypot(t-d.x,e-d.z),f=7.5*Math.exp(-((p/21)**2));s=s*.8+f,p<11&&(s=Pi(s,7.5+n(t*.1,e*.1)*.2,ri(11,8,p)),p<10&&(r=ys))}else h==="forest"&&(s=s*1.2);if(this.castle){let d=this.castle,p=Math.abs(t-d.cx),f=Math.abs(e-d.cz),x=Math.max(p,f),y=ri(d.half+12,d.half+5,x);s=Pi(s,d.base,y);let g=d.half+3,m=d.half+7.5;if(x>g-1&&x<m+1){let b=ri(g-1,g+1,x)*(1-ri(m-1,m+1,x));s=Pi(s,-2,b),b>.3?r=va:b>.02&&(r=ya)}x<d.half+1&&(r=ys)}if(h!=="canyon"&&Math.abs(t)<74){let d=this.roadZ+Math.sin(t*.05+this.phase)*6;Math.abs(e-d)<1.6&&r===qc&&(r=ys)}return s+=l,c>6&&s>14&&this.biome!=="desert"?r=Yc:c>3&&l>9&&(r=tr),[s,r]}terrainHeight(t,e){let n=(t+xs)/Di,s=(e+_s)/Di,r=Math.floor(n),o=Math.floor(s);r=en(r,0,this.nx-2),o=en(o,0,this.nz-2);let a=en(n-r,0,1),c=en(s-o,0,1),l=this.heights,h=this.nx,d=l[o*h+r],p=l[o*h+r+1],f=l[(o+1)*h+r],x=l[(o+1)*h+r+1];return a+c<=1?d+(p-d)*a+(f-d)*c:x+(f-x)*(1-a)+(p-x)*(1-c)}getHeight(t,e){let n=this.terrainHeight(t,e);for(let s of this.bridges){let r=(t-s.x)*s.cos+(e-s.z)*s.sin,o=-(t-s.x)*s.sin+(e-s.z)*s.cos;if(Math.abs(r)<s.len/2&&Math.abs(o)<s.width/2){let a=1-(r/(s.len/2))**2;n=Math.max(n,s.y+a*s.arch)}}return this.hasWater&&n<this.waterLevel-.35&&(n=Math.max(n,this.waterLevel-.35)),n}placeStructures(){let t=this.rng,e=this.castle;if(e){let l=e.half,h=e.face,d=e.cx+h*l;e.gateX=d;let p=3.4,f=(g,m,b,w)=>this.structures.push({kind:"wall",x:g,z:m,w:b,d:w,h:6.2});f(e.cx-h*l,e.cz,2.2,l*2),f(e.cx,e.cz-l,l*2,2.2),f(e.cx,e.cz+l,l*2,2.2);let x=l-p;f(d,e.cz-p-x/2,2.2,x),f(d,e.cz+p+x/2,2.2,x);for(let g of[-1,1])for(let m of[-1,1])this.structures.push({kind:"tower",x:e.cx+g*l,z:e.cz+m*l,r:3.2,h:9.5});this.structures.push({kind:"tower",x:d,z:e.cz-p-1.4,r:2.4,h:8.4,small:!0}),this.structures.push({kind:"tower",x:d,z:e.cz+p+1.4,r:2.4,h:8.4,small:!0}),this.gate={x:d,z:e.cz,w:p*2,owner:e.owner,hp:520,maxHp:520,face:h,alive:!0,shake:0},this.structures.push({kind:"gate",ref:this.gate,x:d,z:e.cz,w:p*2,h:5.4});let y=e.cx-h*(l-8);this.structures.push({kind:"keep",x:y,z:e.cz,w:9,d:9,h:13}),this.structures.push({kind:"house",x:e.cx-h*(l-4),z:e.cz-l+5,rot:0}),this.structures.push({kind:"house",x:e.cx-h*(l-4),z:e.cz+l-5,rot:Math.PI}),this.structures.push({kind:"well",x:e.cx+h*2,z:e.cz+8}),this.bridges.push({x:d+h*5.5,z:e.cz,len:12,width:6.4,y:e.base+.15,arch:.2,cos:1,sin:0,wood:!0}),this.objective={type:"keep",x:y+h*9.5,z:e.cz,r:8,hold:0,need:20,owner:e.owner};for(let g of[-1,1])this.decor.torches.push({x:d+h*1.6,z:e.cz+g*(p+.2),y:e.base+3.5})}if(this.scenario==="river"){let a=this.bridgeZ,c=this.riverX(a),l=(this.riverX(a+1)-this.riverX(a-1))/2,h=Math.atan(l)*-1;this.bridges.push({x:c,z:a,len:22,width:5.6,y:.1,arch:1.4,cos:Math.cos(h),sin:Math.sin(h),wood:!1})}if(this.scenario==="hill"){let a=this.objective,c=9;for(let l=0;l<c;l++){let h=l/c*Math.PI*2+.3;this.decor.menhirs.push({x:a.x+Math.cos(h)*8.6,z:a.z+Math.sin(h)*8.6,h:t.range(2.4,3.6),rot:h,fallen:t.chance(.15)})}this.decor.menhirs.push({x:a.x,z:a.z,h:1.2,rot:0,altar:!0})}if(this.scenario==="canyon"){let a=this.canyon.pinch+t.range(-6,6),c=this.canyonCenter(a);this.decor.ruins.push({x:a,z:c+(t.chance(.5)?-1:1)*(this.canyonHalf(a)-4),r:2.6})}let n=24,s=60,r={x0:-73,x1:-73+n,z0:-s/2,z1:s/2},o={x0:73-n,x1:73,z0:-s/2,z1:s/2};if(this.zones=[r,o],e){let a=e.half-2.2,c={x0:e.cx-a,x1:e.cx+a,z0:e.cz-a,z1:e.cz+a,castle:!0};this.zones[e.owner]=c;let l=1-e.owner;this.zones[l]=l===0?{x0:-73,x1:-45,z0:-32,z1:32}:{x0:45,x1:73,z0:-32,z1:32}}this.scenario==="canyon"&&(this.zones=[{x0:-73,x1:-52,z0:-40,z1:40},{x0:52,x1:73,z0:-40,z1:40}]);for(let a=0;a<2;a++){let c=this.zones[a],l=a===0?-71:71,h=(c.z0+c.z1)/2;if(this.scenario==="canyon"&&(h=this.canyonCenter(l)),this.camps[a]={x:l,z:h},!(e&&e.owner===a))for(let d=0;d<4;d++){let p=l-(a===0?-1:1)*t.range(-1,2)+(a===0?-1:1)*1.5,f=h+(d-1.5)*6+t.range(-1,1);this.decor.tents.push({x:a===0?-76-t.range(0,3):76+t.range(0,3),z:f,side:a,rot:t.range(-.4,.4)+(a===0?Math.PI/2:-Math.PI/2),big:d===1})}}}cellIndex(t,e){let n=Math.floor((t+ms/2)/Ke),s=Math.floor((e+gs/2)/Ke);return n<0||s<0||n>=this.gw||s>=this.gd?-1:s*this.gw+n}cellCenter(t){let e=t%this.gw,n=t/this.gw|0;return[-ms/2+(e+.5)*Ke,-gs/2+(n+.5)*Ke]}buildNav(){let t=this.gw,e=this.gd;for(let s=0;s<e;s++)for(let r=0;r<t;r++){let o=s*t+r,a=-ms/2+r*Ke,c=-gs/2+s*Ke,l=1e9,h=-1e9,d=0,p=0;for(let x=0;x<=2;x++)for(let y=0;y<=2;y++){let g=this.terrainHeight(a+x,c+y);l=Math.min(l,g),h=Math.max(h,g),d+=g,p++}let f=d/p;(r===0||s===0||r===t-1||s===e-1)&&(this.blocked[o]=1),h-l>2.6&&(this.blocked[o]=1),this.scenario==="canyon"&&f>5&&(this.blocked[o]=1),this.hasWater&&f<this.waterLevel-.9&&(this.blocked[o]=1),this.hasWater&&f<this.waterLevel+.1&&f>=this.waterLevel-.9&&(this.flags[o]|=2,this.cost[o]+=1.6)}for(let s of this.bridges)for(let r=0;r<t*e;r++){let[o,a]=this.cellCenter(r),c=(o-s.x)*s.cos+(a-s.z)*s.sin,l=-(o-s.x)*s.sin+(a-s.z)*s.cos;Math.abs(c)<s.len/2+.5&&Math.abs(l)<s.width/2-.3&&(this.blocked[r]=0,this.flags[r]=this.flags[r]&-3|4,this.cost[r]=1)}for(let s of this.structures)if(s.kind==="wall"||s.kind==="keep"||s.kind==="house"){let r=(s.w||5)/2+.9,o=(s.d||4)/2+.9;this.markRect(s.x-r,s.z-o,s.x+r,s.z+o,a=>{this.blocked[a]=1})}else if(s.kind==="tower"||s.kind==="well"){let r=(s.r||1.2)+.8;this.markRect(s.x-r,s.z-r,s.x+r,s.z+r,o=>{let[a,c]=this.cellCenter(o);Math.hypot(a-s.x,c-s.z)<r+.6&&(this.blocked[o]=1)})}let n=this.castle;if(n){let s=n.half-1.2;this.markRect(n.cx-s,n.cz-s,n.cx+s,n.cz+s,o=>{this.flags[o]|=16});let r=this.gate;r.cells=[],this.markRect(r.x-1.6,r.z-r.w/2+.4,r.x+1.6,r.z+r.w/2-.4,o=>{this.blocked[o]=0,this.flags[o]|=8,r.cells.push(o)})}for(let s of this.decor.menhirs){if(s.altar)continue;let r=this.cellIndex(s.x,s.z);r>=0&&(this.blocked[r]=1)}for(let s of this.decor.ruins)this.markRect(s.x-s.r,s.z-s.r,s.x+s.r,s.z+s.r,r=>{this.blocked[r]=1});this.makeForests();for(let s of this.forests)this.markRect(s.x-s.r,s.z-s.r,s.x+s.r,s.z+s.r,r=>{let[o,a]=this.cellCenter(r);Math.hypot((o-s.x)/s.r,(a-s.z)/s.r*s.rx)<1&&!this.blocked[r]&&(this.flags[r]|=1,this.cost[r]+=.6)});if(this.scenario==="canyon"){let s=this.rng;for(let r=0;r<7;r++){let o=s.range(-44,44),c=this.canyonCenter(o)+s.range(-1,1)*(this.canyonHalf(o)-5),l=s.range(1.4,2.6);this.decor.rocks.push({x:o,z:c,s:l*1.35,big:!0,rot:s()*6}),this.markRect(o-l,c-l,o+l,c+l,h=>{let[d,p]=this.cellCenter(h);Math.hypot(d-o,p-c)<l+.4&&(this.blocked[h]=1)})}}this.computeClearance()}makeForests(){let t=this.rng,e=this.scenario==="forest"?t.int(11,14):this.scenario==="canyon"?0:t.int(2,4),n=0;for(;this.forests.length<e&&n++<300;){let s=t.range(-44,44),r=t.range(-44,44),o=this.scenario==="forest"?t.range(6,11):t.range(5,8);if(this.nearStructure(s,r,o+4)||this.objective&&Math.hypot(s-this.objective.x,r-this.objective.z)<o+12||this.scenario==="river"&&Math.abs(s-this.riverX(r))<o+7||this.forests.some(c=>Math.hypot(c.x-s,c.z-r)<c.r+o+3))continue;let a=this.cellIndex(s,r);a<0||this.blocked[a]||this.forests.push({x:s,z:r,r:o,rx:t.range(.8,1.25)})}}nearStructure(t,e,n){if(this.castle&&Math.max(Math.abs(t-this.castle.cx),Math.abs(e-this.castle.cz))<this.castle.half+9+n*.3)return!0;for(let s of this.bridges)if(Math.hypot(t-s.x,e-s.z)<n+s.len/2)return!0;return!!(this.scenario==="river"&&this.fords.some(s=>Math.abs(e-s)<n&&Math.abs(t-this.riverX(s))<n+6))}markRect(t,e,n,s,r){let o=Math.max(0,Math.floor((t+ms/2)/Ke)),a=Math.min(this.gw-1,Math.floor((n+ms/2)/Ke)),c=Math.max(0,Math.floor((e+gs/2)/Ke)),l=Math.min(this.gd-1,Math.floor((s+gs/2)/Ke));for(let h=c;h<=l;h++)for(let d=o;d<=a;d++)r(h*this.gw+d)}computeClearance(){let t=this.gw,e=this.gd,n=t*e,s=this.clear;s.fill(255);let r=new Int32Array(n),o=0,a=0;for(let c=0;c<n;c++)this.blocked[c]&&(s[c]=0,r[a++]=c);for(;o<a;){let c=r[o++],l=c%t,h=c/t|0;for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){let f=l+p,x=h+d;if(f<0||x<0||f>=t||x>=e)continue;let y=x*t+f;s[y]>s[c]+1&&(s[y]=s[c]+1,r[a++]=y)}}}clearanceAt(t,e){let n=this.cellIndex(t,e);return n<0?0:this.clear[n]*Ke-1}isPassable(t,e,n=-1){let s=this.cellIndex(t,e);return!(s<0||this.blocked[s]||this.flags[s]&8&&this.gate&&this.gate.alive&&n!==this.gate.owner)}flagAt(t,e){let n=this.cellIndex(t,e);return n<0?0:this.flags[n]}inCastle(t,e){let n=this.castle;return!!n&&Math.abs(t-n.cx)<n.half-.8&&Math.abs(e-n.cz)<n.half-.8}placeDecor(){let t=this.rng,e=this.decor,n=this.biome,s=(o,a,c)=>this.zones.some(l=>o>l.x0-c&&o<l.x1+c&&a>l.z0-c&&a<l.z1+c);for(let o of this.forests){let a=Math.round(o.r*o.r*.22);for(let c=0;c<a;c++){let l=t()*Math.PI*2,h=Math.sqrt(t())*o.r,d=o.x+Math.cos(l)*h,p=o.z+Math.sin(l)*h/o.rx,f=this.cellIndex(d,p);f<0||this.blocked[f]||e.trees.push({x:d,z:p,s:t.range(.8,1.35),kind:this.treeKind(),rot:t()*6})}for(let c=0;c<a*.4;c++){let l=t()*Math.PI*2,h=Math.sqrt(t())*(o.r+2);e.bushes.push({x:o.x+Math.cos(l)*h,z:o.z+Math.sin(l)*h,s:t.range(.5,1)})}}for(let o=0;o<70;o++){let a=t.range(-74,74),c=t.range(-49,49),l=this.cellIndex(a,c);l<0||this.blocked[l]||this.flags[l]&30||s(a,c,3)||this.nearStructure(a,c,3)||this.objective&&Math.hypot(a-this.objective.x,c-this.objective.z)<12||this.scenario==="canyon"&&this.terrainHeight(a,c)>3||(t.chance(.55)?e.trees.push({x:a,z:c,s:t.range(.8,1.3),kind:this.treeKind(),rot:t()*6}):e.rocks.push({x:a,z:c,s:t.range(.5,1.1),rot:t()*6}))}for(let o=0;o<420;o++){let a=t.range(-xs+4,xs-4),c=t.range(-_s+4,_s-4);Math.abs(a)<77&&Math.abs(c)<52||this.terrainHeight(a,c)>20||(t.chance(.72)?e.trees.push({x:a,z:c,s:t.range(.9,1.6),kind:this.treeKind(!0),rot:t()*6}):e.rocks.push({x:a,z:c,s:t.range(.8,2.2),rot:t()*6}))}if(this.scenario==="canyon")for(let o=0;o<90;o++){let a=t.range(-74,74),c=t.range(-49,49);this.terrainHeight(a,c)<10||(t.chance(.5)?e.trees.push({x:a,z:c,s:t.range(.8,1.2),kind:this.treeKind(!0),rot:t()*6}):e.rocks.push({x:a,z:c,s:t.range(.6,1.8),rot:t()*6}))}let r=n==="desert"?120:260;for(let o=0;o<r;o++){let a=t.range(-80,80),c=t.range(-54,54),l=this.cellIndex(a,c);l>=0&&(this.blocked[l]||this.flags[l]&22)||this.terrainHeight(a,c)<this.waterLevel+.2&&this.hasWater||(t.chance(.2)?e.flowers.push({x:a,z:c,c:t.int(0,3)}):e.tufts.push({x:a,z:c,s:t.range(.6,1.2),rot:t()*6}))}if(n!=="desert")for(let o=0;o<9;o++){let a=t.range(-70,70),c=t.range(-46,46),l=this.cellIndex(a,c);if(l<0||this.blocked[l]||this.flags[l]&19)continue;let h=t.int(0,3);for(let d=0;d<14;d++){let p=t()*6.28,f=Math.sqrt(t())*4;e.flowers.push({x:a+Math.cos(p)*f,z:c+Math.sin(p)*f,c:t.chance(.8)?h:t.int(0,3)})}}if(this.hasWater){for(let o=0;o<900&&e.reeds.length<90;o++){let a=t.range(-100,100),c=t.range(-70,70),l=this.terrainHeight(a,c);this.castle&&Math.max(Math.abs(a-this.castle.cx),Math.abs(c-this.castle.cz))<this.castle.half+2.5||l>this.waterLevel-.3&&l<this.waterLevel+.3&&e.reeds.push({x:a,z:c,s:t.range(.7,1.2),rot:t()*6})}if(n!=="winter")for(let o=0;o<900&&e.lilies.length<40;o++){let a=t.range(-100,100),c=t.range(-70,70),l=this.terrainHeight(a,c);l<this.waterLevel-.6&&l>this.waterLevel-2.4&&!this.bridges.some(h=>Math.hypot(h.x-a,h.z-c)<h.len/2+2)&&e.lilies.push({x:a,z:c,s:t.range(.5,.9),flower:t.chance(.25)})}}for(let o of this.forests){let a=t.int(1,2);for(let c=0;c<a;c++){let l=t()*6.28,h=t()*o.r*.8,d=o.x+Math.cos(l)*h,p=o.z+Math.sin(l)*h,f=this.cellIndex(d,p);f>=0&&!this.blocked[f]&&e.logs.push({x:d,z:p,rot:t()*6,len:t.range(2.5,4.5)})}for(let c=0;c<6;c++){let l=t()*6.28,h=t()*o.r;e.mushrooms.push({x:o.x+Math.cos(l)*h,z:o.z+Math.sin(l)*h,s:t.range(.6,1.1),red:t.chance(.5)})}}if(n!=="desert"||t.chance(.5)){let o=(a,c,l)=>{let h=1e9,d=-1e9;for(let[p,f]of[[-l,-l],[l,-l],[-l,l],[l,l],[0,0]]){let x=this.terrainHeight(a+p,c+f);h=Math.min(h,x),d=Math.max(d,x)}return d-h<1.4&&h>this.waterLevel+.3&&d<9};for(let a=0;a<400&&e.fields.length<10;a++){let c=t.range(-104,104),l=t.range(-74,74);if(Math.abs(c)<81&&Math.abs(l)<55)continue;let h=t.range(8,14),d=t.range(6,10);o(c,l,Math.max(h,d)/2)&&(e.fields.some(p=>Math.hypot(p.x-c,p.z-l)<14)||e.fields.push({x:c,z:l,w:h,d,rot:t.range(-.5,.5),kind:t.int(0,3)}))}for(let a of e.fields.slice(0,4)){let c=a.x+Math.cos(a.rot)*(a.w/2+4),l=a.z+Math.sin(a.rot)*(a.w/2+4);o(c,l,2.5)&&e.farms.push({x:c,z:l,rot:a.rot})}for(let a=0;a<200&&!e.mill;a++){let c=t.range(-100,100),l=t.range(-70,70);Math.abs(c)<82&&Math.abs(l)<56||o(c,l,2.5)&&!e.fields.some(h=>Math.hypot(h.x-c,h.z-l)<9)&&(e.mill={x:c,z:l,rot:t()*6})}}if(this.scenario!=="canyon")for(let o=0;o<3;o++){let a=t.range(-40,40),c=this.roadZ+Math.sin(a*.05+this.phase)*6+(t.chance(.5)?3:-3),l=this.cellIndex(a,c);l<0||this.blocked[l]||this.nearStructure(a,c,6)||e.fences.push({x:a,z:c,len:t.int(3,6),rot:Math.atan2(Math.cos(a*.05+this.phase)*.3,1)})}}buildTreeHash(){this.treeGrid={W:42,D:30,cells:Array.from({length:42*30},()=>[])};for(let n of this.decor.trees){if(Math.abs(n.x)>80||Math.abs(n.z)>56)continue;let s=Math.floor((n.x+84)/4),r=Math.floor((n.z+60)/4);if(s<0||r<0||s>=42||r>=30)continue;let o=(n.kind==="pine"?1.05:n.kind==="palm"||n.kind==="cactus"?.7:.85)*n.s;this.treeGrid.cells[r*42+s].push({x:n.x,z:n.z,r:o})}}avoidTrees(t,e,n,s=0){let r=this.treeGrid;if(!r)return!1;let o=Math.floor((t+84)/4),a=Math.floor((e+60)/4),c=!1;for(let l=-1;l<=1;l++){let h=a+l;if(!(h<0||h>=r.D))for(let d=-1;d<=1;d++){let p=o+d;if(!(p<0||p>=r.W))for(let f of r.cells[h*r.W+p]){let x=f.r+s,y=t-f.x,g=e-f.z,m=y*y+g*g;if(m<x*x){let b=Math.sqrt(m)||.001;t=f.x+(m>1e-6?y/b:1)*x,e=f.z+(m>1e-6?g/b:0)*x,c=!0}}}}return n[0]=t,n[1]=e,c}treesNear(t,e,n){let s=this.treeGrid;if(!s)return 0;let r=0,o=Math.floor((t+84)/4),a=Math.floor((e+60)/4),c=Math.ceil(n/4);for(let l=a-c;l<=a+c;l++)for(let h=o-c;h<=o+c;h++)if(!(h<0||l<0||h>=s.W||l>=s.D))for(let d of s.cells[l*s.W+h])Math.abs(d.x-t)<n&&Math.abs(d.z-e)<n&&r++;return r}treeKind(t=!1){let e=this.biome,n=this.rng;return e==="desert"?n.chance(.6)?"palm":"cactus":e==="winter"?n.chance(.8)?"pine":"bare":this.scenario==="forest"?n.chance(.55)?"pine":"oak":n.chance(t?.5:.35)?"pine":n.chance(.85)?"oak":"birch"}get extent(){return{EXT_X:xs,EXT_Z:_s,STEP:Di}}};function Zc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new _e,l=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let p=0;p<i.length;++p){let f=i[p].index;for(let x=0;x<f.count;++x)d.push(f.getX(x)+h);h+=i[p].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Yh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<d;++p){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][p]);let x=Yh(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function Yh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new xe(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let p=0,f=h.count;p<f;p++)for(let x=0;x<e;x++){let y=h.getComponent(p,x);a.setComponent(p+d,x,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var $h=new Zt,Zh=new ke,Jh=new Ie,Cg=new O,Ig=new O;function ai(i){let t=i.index?i.toNonIndexed():i;return t.deleteAttribute("uv"),t.attributes.uv1&&t.deleteAttribute("uv1"),t.computeVertexNormals(),t}function Ct(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,c=1,l=1){return Jh.set(s,r,o),Zh.setFromEuler(Jh),$h.compose(Cg.set(t,e,n),Zh,Ig.set(a,c,l)),i.applyMatrix4($h),i}var ee=(i,t,e)=>ai(new un(i,t,e)),Sn=(i,t,e,n=6)=>ai(new Ti(i,t,e,n,1)),zi=(i,t,e=6)=>ai(new na(i,t,e,1)),ba=(i,t=0)=>ai(new si(i,t)),Pg=i=>ai(new ia(i,0)),Oe=i=>Zc(i.map(t=>t.index?ai(t):t),!1);function Kh(){let i={};return i.leg=Ct(ee(.16,.78,.2),0,-.39,0),i.torso=Oe([Ct(Sn(.25,.2,.62,6),0,0,0),Ct(ee(.72,.14,.2),0,.26,0)]),i.chest=Ct(Sn(.28,.24,.36,6),0,.1,0),i.skirt=Ct(Sn(.22,.3,.26,6),0,0,0),i.head=ba(.17,0),i.helmRoman=Oe([ai(new hs(.2,6,3,0,Math.PI*2,0,Math.PI/2)),Ct(ee(.44,.04,.12),0,0,-.14)]),i.crest=Ct(ee(.06,.16,.42),0,.26,0),i.plume=Oe([Ct(ee(.07,.3,.46),0,.3,-.02),Ct(ee(.07,.2,.22),0,.28,-.28,.5)]),i.helmCone=Oe([zi(.21,.36,6),Ct(ee(.05,.16,.04),0,-.1,.19)]),i.horns=Oe([Ct(zi(.05,.28,5),.2,.06,0,0,0,-1),Ct(zi(.05,.28,5),-.2,.06,0,0,0,1)]),i.hood=Ct(zi(.22,.42,5),0,.06,-.02),i.scutum=Ct(ee(.62,.95,.08),0,0,0),i.boss=Ct(ba(.08,0),0,0,.05),i.round=Ct(Sn(.36,.36,.07,8),0,0,0,Math.PI/2),i.buckler=Ct(Sn(.24,.24,.06,7),0,0,0,Math.PI/2),i.tower=Ct(ee(.76,1.3,.1),0,0,0),i.towerRim=Oe([Ct(ee(.8,.07,.11),0,.62,0),Ct(ee(.8,.07,.11),0,-.62,0),Ct(ee(.07,1.3,.11),0,0,0)]),i.sword=Oe([Ct(ee(.06,.04,.62),0,0,.38),Ct(ee(.2,.05,.05),0,0,.06)]),i.axe=Oe([Ct(ee(.05,.05,.75),0,0,.3),Ct(ee(.04,.26,.18),0,.05,.62)]),i.pike=Oe([Ct(Sn(.028,.028,4.3,4),0,0,1.2,Math.PI/2),Ct(zi(.06,.3,4),0,0,3.45,Math.PI/2)]),i.spear=Oe([Ct(Sn(.03,.03,3,4),0,0,.9,Math.PI/2),Ct(zi(.06,.28,4),0,0,2.5,Math.PI/2)]),i.bow=Ct(ai(new ra(.46,.03,3,8,Math.PI)),0,0,0,0,Math.PI/2,Math.PI/2),i.quiver=Ct(Sn(.08,.07,.55,5),0,0,0,.35),i.cape=Ct(ee(.56,.9,.05),0,-.45,0),i.horse=Oe([Ct(ee(.56,.62,1.5),0,0,0),Ct(ee(.36,.72,.4),0,.42,.72,-.55),Ct(ee(.3,.3,.62),0,.72,1.08,.35),Ct(ee(.12,.5,.12),0,.05,-.8,.6),Ct(ee(.08,.14,.08),.1,.92,.9),Ct(ee(.08,.14,.08),-.1,.92,.9)]),i.mane=Oe([Ct(ee(.1,.62,.36),0,.55,.62,-.55),Ct(ee(.14,.52,.14),0,.02,-.82,.5)]),i.saddle=Oe([Ct(ee(.66,.36,.72),0,.12,-.02),Ct(ee(.3,.1,.4),0,.33,-.05)]),i.hleg=Oe([Ct(ee(.13,.8,.14),.18,-.4,0),Ct(ee(.13,.8,.14),-.18,-.4,0)]),i.pole=Ct(Sn(.04,.04,3.4,4),0,1.7,0),i.eagle=Oe([Ct(ba(.14,0),0,3.55,0),Ct(ee(.5,.08,.1),0,3.6,0,0,0,.3),Ct(ee(.5,.08,.1),0,3.6,0,0,0,-.3)]),i}function jh(i,t){let e=i===0,n=[],s=(c,l,h,d,p,f="none",x=0,y=0,g=0)=>n.push({g:c,role:l,p:[h,d,p],anim:f,r:[x,y,g]}),r=t==="cavalry",o=r?.95:0;switch(r?(s("horse","horse",0,1.15,0,"horse"),s("mane","mane",0,1.15,0,"horse"),s("saddle","primary",0,1.47,-.05,"horse"),s("hleg","horse",0,.85,.55,"hlegF"),s("hleg","horse",0,.85,-.55,"hlegB"),s("leg","dark",.3,.78+o,.05,"ride",-1.2,0,.35),s("leg","dark",-.3,.78+o,.05,"ride",-1.2,0,-.35)):(s("leg","dark",.11,.78,0,"legL"),s("leg","dark",-.11,.78,0,"legR")),s("torso",t==="archer"?e?"hood":"cloth":"primary",0,1.08+o,0),t!=="archer"&&s("skirt",e?"primary":"dark",0,.8+o,0),(t==="legion"||t==="guard"||t==="cavalry"||t==="pike")&&s("chest","metal",0,1.08+o,0),s("head","skin",0,1.56+o,0),t==="archer"?(s("hood",e?"hood":"cloth",0,1.62+o,0),s("quiver","wood",-.1,1.2+o,-.22),s("bow","wood",.3,1.25+o,.32,"bow")):e?(s("helmRoman","helm",0,1.6+o,0),s(t==="guard"||t==="cavalry"?"plume":"crest","crest",0,1.6+o,0)):(s("helmCone","helm",0,1.72+o,0),t!=="pike"&&s("horns","crest",0,1.68+o,0)),t){case"legion":e?(s("scutum","primary",.34,1.02,.24,"shield"),s("boss","secondary",.34,1.02,.29,"shield"),s("sword","metal",-.34,1.12,.1,"arm")):(s("round","primary",.36,1.1,.22,"shield"),s("boss","metal",.36,1.1,.27,"shield"),s("axe","metal",-.34,1.12,.1,"arm"));break;case"pike":s("buckler",e?"secondary":"primary",.32,1.12,.2,"shield"),s("pike","wood",-.28,1.2,0,"pike");break;case"guard":s("tower","primary",.36,1.05,.26,"shield"),s("towerRim","secondary",.36,1.05,.26,"shield"),s("sword","metal",-.34,1.12,.1,"arm"),s("cape",e?"crest":"dark",0,1.36,-.2);break;case"cavalry":s("round","primary",.36,1.1+o,.05,"shield"),s("spear","wood",-.32,1.2+o,0,"lance"),s("cape",e?"crest":"primary",0,1.36+o,-.2);break}return n}var Sa=class{constructor(){this.geos=[]}add(t,e,n=0,s=0,r=0,o=0,a=0,c=0,l=1,h=1,d=1){let p=t.clone();Ct(p,n,s,r,o,a,c,l,h,d);let f=p.attributes.position.count,x=new Float32Array(f*3),y=e instanceof ft?e:new ft(e);for(let g=0;g<f;g++)x[g*3]=y.r,x[g*3+1]=y.g,x[g*3+2]=y.b;return p.setAttribute("color",new xe(x,3)),this.geos.push(p),p}build(t){if(!this.geos.length)return null;let e=Zc(this.geos,!1);this.geos=[];let n=new Ut(e,t);return n.castShadow=!0,n.receiveShadow=!0,n}},tt={cone:(i,t,e=6)=>zi(i,t,e),cyl:(i,t,e,n=6)=>Sn(i,t,e,n),box:ee,ico:ba,dode:Pg};function be(i,t,e=.06){let n=new ft(i),s=1+(t()-.5)*2*e;return n.r*=s,n.g*=s,n.b*=s,n}var Qh=new Zt,tu=new ke,Dg=new Ie,zg=new O,Ug=new O;function eu(i,t){let e=bn[i.biome],n=pn(i.seed+99),s=new ge,r=new Re({vertexColors:!0,flatShading:!0}),o={group:s,dynamic:[],gateMesh:null,water:null,clouds:[],torches:[],flags:[]};{let{EXT_X:u,EXT_Z:_,STEP:v}=i.extent,A=i.nx,R=i.nz,z=(A-1)*(R-1)*2,V=new Float32Array(z*9),B=new Float32Array(z*9),Y=i.heights,H=i.ground,$=new ft,rt=e.grass.map(N=>new ft(N)),mt=(e.cliff||e.rock).map(N=>new ft(N)),Tt=e.rock.map(N=>new ft(N)),Jt=new ft(e.dirt),Z=new ft(e.sand),it=new ft(16054266),yt=new ft(e.sand).lerp(new ft(e.dirt),.3),ht=new ft(e.leaf[3]||e.leaf[0]).multiplyScalar(.7).lerp(new ft(e.dirt),.35),Rt=new ft(e.cliff[0]),It=0,kt=i.noise,le=(N,re,Gt,Ht,wt,ne,Et,T,S)=>{let G=Y[re*A+N],j=Y[Ht*A+Gt],Q=Y[ne*A+wt],J=ce=>-u+ce*v,_t=ce=>-_+ce*v,et=[J(N),G,_t(re),J(Gt),j,_t(Ht),J(wt),Q,_t(ne)];V.set(et,It);let pt=et[3]-et[0],Yt=et[4]-et[1],nt=et[5]-et[2],gt=et[6]-et[0],At=et[7]-et[1],Pt=et[8]-et[2],ut=nt*gt-pt*Pt,$t=Yt*Pt-nt*At,Ft=pt*At-Yt*gt,ae=Math.hypot($t,ut,Ft)||1;ut=Math.abs(ut/ae);let F=(et[0]+et[3]+et[6])/3,at=(et[2]+et[5]+et[8])/3,q=(G+j+Q)/3,K=[0,0,0,0,0,0,0];K[Et]++,K[T]++,K[S]++;let ot=K.indexOf(Math.max(...K)),lt=kt(F*.045,at*.045),Dt=kt(F*.014+7.3,at*.014-3.1),ue=kt(F*.21,at*.21),Se=i.waterLevel;if(ot===Yc||q>22&&i.biome!=="desert")$.copy(it);else if(ut<.72||ot===tr){let ce=Math.floor(q*.85+ue*.9);$.copy(mt[(ce%mt.length+mt.length)%mt.length]),ut>=.55&&$.lerp(Tt[Math.abs(Math.floor(lt*7))%Tt.length],.55),$.multiplyScalar(ce%2?.93:1.05),i.scenario==="canyon"&&$.lerp(Rt,.35),ut>.64&&ot!==tr&&$.lerp(rt[1],.3)}else if(ot===va)$.copy(Z).multiplyScalar(.62+Math.max(0,Math.min(1,(q-Se+2.2)/2))*.3);else if(ot===ya)$.copy(Z).lerp(rt[0],Math.max(0,ue)*.25);else if(ot===ys)$.copy(Jt).lerp(rt[0],.1+Math.max(0,ue)*.25);else if(ot===$c)$.copy(Z).lerp(Jt,.35+lt*.4);else{let ce=Math.max(0,Math.min(.999,lt*.85+.5))*(rt.length-1),We=Math.floor(ce);$.copy(rt[We]).lerp(rt[Math.min(rt.length-1,We+1)],ce-We),Dt>.1?$.lerp(yt,Math.min(.28,(Dt-.1)*.7)):Dt<-.15&&$.multiplyScalar(1+(Dt+.15)*.35),i.flagAt(F,at)&1&&$.lerp(ht,.45),i.hasWater&&q<Se+.5&&$.lerp(Z,Math.min(1,(Se+.5-q)*1.4)),$.multiplyScalar(1+Math.max(-.05,Math.min(.08,q/60))),q>14&&i.biome!=="desert"&&$.lerp(it,Math.min(1,(q-14)/8))}let Kt=.965+n()*.07;$.r*=Kt,$.g*=Kt,$.b*=Kt;for(let ce=0;ce<3;ce++)B[It+ce*3]=$.r,B[It+ce*3+1]=$.g,B[It+ce*3+2]=$.b;It+=9};for(let N=0;N<R-1;N++)for(let re=0;re<A-1;re++){let Gt=H[N*A+re],Ht=H[N*A+re+1],wt=H[(N+1)*A+re],ne=H[(N+1)*A+re+1];le(re,N,re,N+1,re+1,N,Gt,wt,Ht),le(re+1,N+1,re+1,N,re,N+1,ne,Ht,wt)}let Wt=new _e;Wt.setAttribute("position",new xe(V,3)),Wt.setAttribute("color",new xe(B,3)),Wt.computeVertexNormals();let he=new Ut(Wt,r);he.receiveShadow=!0,he.name="terrain",s.add(he),o.terrain=he}if(i.hasWater){let u=new Je(230,170,70,52).toNonIndexed();u.rotateX(-Math.PI/2);let _=new ft(e.water);i.biome==="winter"&&_.lerp(new ft(15266554),.35);let v=_.clone().lerp(new ft(4176048),.4).multiplyScalar(1.05),A=_.clone().multiplyScalar(.62),R=u.attributes.position,z=new Float32Array(R.count*3),V=new ft;for(let H=0;H<R.count;H++){let $=i.waterLevel-i.terrainHeight(R.getX(H),R.getZ(H)),rt=Math.max(0,Math.min(1,$/2.2));V.copy(v).lerp(A,rt),$<.2&&V.lerp(new ft(14677236),.14),z[H*3]=V.r,z[H*3+1]=V.g,z[H*3+2]=V.b}u.setAttribute("color",new xe(z,3));let B=new aa({vertexColors:!0,transparent:!0,opacity:.84,flatShading:!0,shininess:80,specular:10139848}),Y=new Ut(u,B);Y.position.y=i.waterLevel,Y.receiveShadow=!0,s.add(Y),o.water=Y,o.waterBase=Float32Array.from(u.attributes.position.array)}let a=new Sa,c=i.biome==="desert"?13808778:11840930,l=i.biome==="desert"?12097130:9406590,h=i.castle?Vn[i.castle.owner].colors.primary:9058858,d=(u,_,v,A,R,z=1.6,V=.8)=>{let B=Math.hypot(v-u,A-_),Y=Math.floor(B/z);for(let H=0;H<=Y;H++){let $=H/Y;a.add(tt.box(V,.9,V),l,u+(v-u)*$,R+.45,_+(A-_)*$)}};for(let u of i.structures){let _=i.terrainHeight(u.x,u.z);if(u.kind==="wall"){let v=Math.min(_,i.castle?i.castle.base:_)-1.5,A=u.h+(i.castle.base-v);a.add(tt.box(u.w,A,u.d),be(c,n,.03),u.x,v+A/2,u.z);let R=v+A;u.w>u.d?(d(u.x-u.w/2,u.z-u.d/2+.3,u.x+u.w/2,u.z-u.d/2+.3,R),d(u.x-u.w/2,u.z+u.d/2-.3,u.x+u.w/2,u.z+u.d/2-.3,R)):(d(u.x-u.w/2+.3,u.z-u.d/2,u.x-u.w/2+.3,u.z+u.d/2,R),d(u.x+u.w/2-.3,u.z-u.d/2,u.x+u.w/2-.3,u.z+u.d/2,R)),a.add(tt.box(u.w+.2,.35,u.d+.2),l,u.x,v+A-1.2,u.z)}else if(u.kind==="tower"){let v=_-2,A=u.h+(i.castle.base-v)+1.5;a.add(tt.cyl(u.r,u.r*1.12,A,8),be(c,n,.03),u.x,v+A/2,u.z),a.add(tt.cyl(u.r+.35,u.r+.35,.6,8),l,u.x,v+A,u.z);for(let R=0;R<8;R++){let z=R/8*Math.PI*2;a.add(tt.box(.8,.9,.8),l,u.x+Math.cos(z)*(u.r+.1),v+A+.75,u.z+Math.sin(z)*(u.r+.1),0,-z)}a.add(tt.cone(u.r+.6,u.small?3:4.2,8),be(h,n,.05),u.x,v+A+(u.small?2.3:2.9),u.z);for(let R=0;R<3;R++){let z=n()*Math.PI*2;a.add(tt.box(.25,.9,.3),2762274,u.x+Math.cos(z)*u.r,v+A*(.5+R*.12),u.z+Math.sin(z)*u.r,0,-z)}o.flags.push({x:u.x,y:v+A+(u.small?4:5.1),z:u.z,side:i.castle.owner,size:u.small?.7:1})}else if(u.kind==="gate"){let v=u.ref,A=i.castle.base;a.add(tt.box(2.6,2.2,u.w+1),c,u.x,A+6.2,u.z),d(u.x,u.z-u.w/2,u.x,u.z+u.w/2,A+7.3,1.4,.7),a.add(tt.box(2.8,.5,u.w+1.2),l,u.x,A+5.1,u.z);let R=new ge,z=new Re({color:7030054,flatShading:!0}),V=new Re({color:3814962,flatShading:!0});for(let B=0;B<6;B++){let Y=new Ut(tt.box(.35,5,u.w/6-.06),z);Y.position.set(0,2.5,-u.w/2+(B+.5)*(u.w/6)),Y.castShadow=!0,R.add(Y)}for(let B of[1.2,3.8]){let Y=new Ut(tt.box(.45,.28,u.w),V);Y.position.set(0,B,0),R.add(Y)}R.position.set(u.x,A,u.z),s.add(R),o.gateMesh=R}else if(u.kind==="keep"){let v=_-1;a.add(tt.box(u.w,u.h,u.d),be(c,n,.02),u.x,v+u.h/2,u.z),a.add(tt.box(u.w+.8,.6,u.d+.8),l,u.x,v+u.h,u.z),d(u.x-u.w/2,u.z-u.d/2,u.x+u.w/2,u.z-u.d/2,v+u.h+.3,1.5),d(u.x-u.w/2,u.z+u.d/2,u.x+u.w/2,u.z+u.d/2,v+u.h+.3,1.5),d(u.x-u.w/2,u.z-u.d/2,u.x-u.w/2,u.z+u.d/2,v+u.h+.3,1.5),d(u.x+u.w/2,u.z-u.d/2,u.x+u.w/2,u.z+u.d/2,v+u.h+.3,1.5),a.add(tt.cyl(1.8,1.8,4,8),c,u.x+u.w/2-1.5,v+u.h+2,u.z-u.d/2+1.5),a.add(tt.cone(2.4,3.4,8),h,u.x+u.w/2-1.5,v+u.h+5.7,u.z-u.d/2+1.5),a.add(tt.box(1.6,2.6,.3),3811868,u.x-i.castle.face*-u.w/2,v+1.3,u.z,0,Math.PI/2);for(let A=0;A<4;A++)a.add(tt.box(.3,1.2,.6),2762274,u.x+(A%2?1:-1)*u.w/2,v+u.h*.7,u.z+(A<2?-2:2));o.flags.push({x:u.x,y:v+u.h+6,z:u.z,side:i.castle.owner,size:1.8,big:!0}),a.add(tt.cyl(.08,.08,6,4),5917242,u.x,v+u.h+3,u.z)}else u.kind==="house"?(a.add(tt.box(5,3,4),15129798,u.x,_+1.5,u.z,0,u.rot),a.add(tt.box(5.2,.4,4.2),7031344,u.x,_+.2,u.z,0,u.rot),a.add(tt.cone(3.9,2.4,4),10111538,u.x,_+4.2,u.z,0,Math.PI/4+u.rot),a.add(tt.box(.9,1.6,.2),5913122,u.x,_+.8,u.z+(u.rot?-2.05:2.05))):u.kind==="well"&&(a.add(tt.cyl(1.1,1.2,1,8),c,u.x,_+.5,u.z),a.add(tt.cyl(.8,.8,.1,8),4026266,u.x,_+.95,u.z),a.add(tt.box(.15,2.2,.15),7031344,u.x-1,_+1.6,u.z),a.add(tt.box(.15,2.2,.15),7031344,u.x+1,_+1.6,u.z),a.add(tt.cone(1.7,1,4),10111538,u.x,_+3,u.z,0,Math.PI/4))}for(let u of i.bridges){let _=Math.atan2(u.sin,u.cos),v=12;for(let A=0;A<v;A++){let z=((A+.5)/v-.5)*u.len,V=u.y+(1-(z/(u.len/2))**2)*u.arch,B=u.x+u.cos*z,Y=u.z+u.sin*z,H=u.wood?be(8016432,n,.08):be(c,n,.04);if(a.add(tt.box(u.len/v+.05,u.wood?.35:.8,u.width),H,B,V-(u.wood?.18:.4),Y,0,-_),u.wood)for(let $ of[-1,1])a.add(tt.box(.18,1.1,.18),5913122,B-u.sin*$*(u.width/2),V+.5,Y+u.cos*$*(u.width/2));else for(let $ of[-1,1])a.add(tt.box(u.len/v+.05,.7,.35),l,B-u.sin*$*(u.width/2),V+.35,Y+u.cos*$*(u.width/2),0,-_)}if(u.wood)for(let A of[-1,1])a.add(tt.cyl(.05,.05,7,3),2762274,u.x-i.castle.face*3,u.y+3.2,u.z+A*(u.width/2-.2),0,0,i.castle.face*.9);else for(let A of[-.2,.2]){let R=u.x+u.cos*A*u.len,z=u.z+u.sin*A*u.len;a.add(tt.box(1.6,3,u.width-.4),l,R,-1.2,z,0,-_)}}let p=e.leaf,f=e.pine;for(let u of i.decor.trees){let _=i.terrainHeight(u.x,u.z),v=u.s;switch(u.kind){case"pine":{let A=be(f[n()*f.length|0],n,.08);a.add(tt.cyl(.18*v,.28*v,1.6*v,5),e.trunk,u.x,_+.8*v,u.z),a.add(tt.cone(1.7*v,2.4*v,7),A,u.x,_+2.4*v,u.z,0,u.rot),a.add(tt.cone(1.35*v,2.1*v,7),A.clone().multiplyScalar(1.07),u.x,_+3.5*v,u.z,0,u.rot+.4),a.add(tt.cone(.9*v,1.8*v,7),A.clone().multiplyScalar(1.13),u.x,_+4.5*v,u.z,0,u.rot+.8),i.biome==="winter"&&a.add(tt.cone(.55*v,.8*v,7),16185851,u.x,_+5.1*v,u.z,0,u.rot);break}case"oak":{let A=be(p[n()*p.length|0],n,.08);a.add(tt.cyl(.22*v,.34*v,2.2*v,5),e.trunk,u.x,_+1.1*v,u.z),a.add(tt.ico(1.5*v,0),A,u.x,_+3.2*v,u.z,u.rot,u.rot),a.add(tt.ico(1*v,0),A.clone().multiplyScalar(1.1),u.x+.9*v,_+2.8*v,u.z+.4*v,u.rot),a.add(tt.ico(1.05*v,0),A.clone().multiplyScalar(.92),u.x-.7*v,_+3*v,u.z-.6*v,u.rot);break}case"birch":{let A=be(p[n()*p.length|0],n,.1).multiplyScalar(1.1);a.add(tt.cyl(.14*v,.18*v,3*v,5),15262940,u.x,_+1.5*v,u.z),a.add(tt.ico(1*v,0),A,u.x,_+3.4*v,u.z,u.rot,0,0,.9,1.4,.9);break}case"bare":{a.add(tt.cyl(.14*v,.26*v,3*v,5),4864558,u.x,_+1.5*v,u.z);for(let A=0;A<3;A++)a.add(tt.cyl(.05*v,.09*v,1.4*v,4),4864558,u.x,_+(2.2+A*.4)*v,u.z,.8,u.rot+A*2.1,0);break}case"palm":{let A=u.x,R=_,z=u.z,V=.25;for(let B=0;B<5;B++)a.add(tt.cyl(.16*v,.2*v,.9*v,5),be(e.trunk,n,.1),A,R+.45*v,z,0,0,V*(B/5)),A-=Math.sin(V*(B/5))*.9*v,R+=.88*v;for(let B=0;B<6;B++){let Y=B/6*Math.PI*2+u.rot;a.add(tt.box(.5*v,.06,2.2*v),be(p[B%p.length],n,.08),A+Math.cos(Y)*.9*v,R-.2*v,z+Math.sin(Y)*.9*v,.35,-Y+Math.PI/2,0)}break}case"cactus":{let A=be(6261306,n,.08);a.add(tt.cyl(.3*v,.34*v,2.4*v,6),A,u.x,_+1.2*v,u.z),a.add(tt.cyl(.18*v,.2*v,1*v,6),A,u.x+.55*v,_+1.4*v,u.z),a.add(tt.cyl(.18*v,.2*v,.9*v,6),A,u.x-.5*v,_+1.8*v,u.z);break}}}for(let u of i.decor.rocks){let _=i.terrainHeight(u.x,u.z),v=be(e.rock[n()*e.rock.length|0],n,.06);a.add(tt.dode(u.s),v,u.x,_+u.s*.3,u.z,u.rot,u.rot*2,0,1.2,u.big?1.5:.8,1),u.big&&a.add(tt.dode(u.s*.6),v.clone().multiplyScalar(.9),u.x+u.s*.8,_+u.s*.2,u.z+.4,u.rot)}for(let u of i.decor.bushes){let _=i.terrainHeight(u.x,u.z);a.add(tt.ico(.7*u.s,0),be(p[n()*p.length|0],n,.1).multiplyScalar(.85),u.x,_+.35*u.s,u.z,n()*3,0,0,1.2,.8,1.2)}let x=new ft(e.grass[2]).multiplyScalar(.85);for(let u of i.decor.tufts){let _=i.terrainHeight(u.x,u.z);for(let v=0;v<3;v++)a.add(tt.cone(.09*u.s,.6*u.s,3),x,u.x+(v-1)*.12,_+.25*u.s,u.z+v%2*.1,(v-1)*.3,u.rot)}for(let u of i.decor.flowers){let _=i.terrainHeight(u.x,u.z);for(let v=0;v<4;v++)a.add(tt.ico(.12,0),e.flower[u.c],u.x+(n()-.5)*1.2,_+.12,u.z+(n()-.5)*1.2)}for(let u of i.decor.menhirs){let _=i.terrainHeight(u.x,u.z);if(u.altar){a.add(tt.box(3,.8,1.8),10262415,u.x,_+.4,u.z,0,.3);continue}u.fallen?a.add(tt.box(1.1,u.h,.7),be(9341572,n),u.x,_+.35,u.z,Math.PI/2-.1,u.rot):a.add(tt.box(1.1,u.h,.7),be(9341572,n),u.x,_+u.h/2-.2,u.z,(n()-.5)*.12,-u.rot,(n()-.5)*.12,1,1,1)}for(let u of i.decor.ruins){let _=i.terrainHeight(u.x,u.z);a.add(tt.cyl(u.r,u.r*1.1,4.5,8),be(c,n),u.x,_+2.2,u.z),a.add(tt.cyl(u.r*.7,u.r*.8,6.5,6),be(l,n),u.x+.4,_+3.5,u.z-.3,.1);for(let v=0;v<6;v++)a.add(tt.dode(.5+n()*.5),l,u.x+(n()-.5)*7,_+.2,u.z+(n()-.5)*7,n()*3)}for(let u of i.decor.fences)for(let _=0;_<=u.len;_++){let v=u.x+Math.cos(u.rot)*_*1.6,A=u.z+Math.sin(u.rot)*_*1.6,R=i.terrainHeight(v,A);a.add(tt.box(.16,1.1,.16),7031344,v,R+.5,A),_<u.len&&(a.add(tt.box(1.6,.1,.08),8084026,v+Math.cos(u.rot)*.8,R+.75,A+Math.sin(u.rot)*.8,0,-u.rot),a.add(tt.box(1.6,.1,.08),8084026,v+Math.cos(u.rot)*.8,R+.4,A+Math.sin(u.rot)*.8,0,-u.rot))}let y=new ft(i.biome==="winter"?12101768:i.biome==="autumn"?11049554:7311166);for(let u of i.decor.reeds){let _=i.terrainHeight(u.x,u.z);for(let v=0;v<4;v++){let A=(n()-.5)*.8,R=(n()-.5)*.8,z=(1+n()*.7)*u.s;a.add(tt.cyl(.03,.05,z,3),y,u.x+A,_+z/2,u.z+R,(n()-.5)*.3,0,(n()-.5)*.3),v===0&&a.add(tt.cyl(.07,.07,.3,4),5913122,u.x+A,_+z+.1,u.z+R)}}for(let u of i.decor.lilies)a.add(tt.cyl(.6*u.s,.6*u.s,.04,7),be(5214010,n,.08),u.x,i.waterLevel+.1,u.z,0,n()*6),u.flower&&a.add(tt.ico(.16,0),n()<.5?16183544:15895224,u.x+.2,i.waterLevel+.22,u.z);for(let u of i.decor.logs){let _=i.terrainHeight(u.x,u.z);a.add(tt.cyl(.32,.36,u.len,6),6177584,u.x,_+.3,u.z,0,u.rot,Math.PI/2),a.add(tt.cyl(.26,.26,.05,6),12096616,u.x+Math.cos(u.rot)*u.len/2,_+.3,u.z-Math.sin(u.rot)*u.len/2,0,u.rot,Math.PI/2),a.add(tt.ico(.35,0),5208634,u.x,_+.55,u.z,0,0,0,1.4,.5,1)}for(let u of i.decor.mushrooms){let _=i.terrainHeight(u.x,u.z);for(let v=0;v<3;v++){let A=(n()-.5)*.7,R=(n()-.5)*.7,z=u.s*(.6+n()*.5);a.add(tt.cyl(.05*z,.07*z,.3*z,5),15722194,u.x+A,_+.15*z,u.z+R),a.add(tt.cone(.2*z,.16*z,6),u.red?12857387:11042894,u.x+A,_+.36*z,u.z+R)}}let g=i.biome==="winter"?[[15265523,14015972],[14673902,13226972],[15002608,12167320],[15791351,14410730]]:i.biome==="autumn"?[[14264634,12882478],[9071162,7295536],[12097082,10649392],[10133580,8818751]]:[[15124058,13938762],[8038474,6985278],[9071170,7624762],[11978842,10466378]];for(let u of i.decor.fields){let[_,v]=g[u.kind],A=Math.max(4,Math.round(u.d/1.1)),R=Math.cos(u.rot),z=Math.sin(u.rot);for(let V=0;V<A;V++){let B=(V-(A-1)/2)*(u.d/A),Y=u.x-z*B,H=u.z+R*B,$=i.terrainHeight(Y,H);a.add(tt.box(u.w,.35,u.d/A*.82),V%2?_:v,Y,$+.05,H,0,-u.rot)}for(let V of[-1,1]){for(let H=0;H<=4;H++){let $=(H/4-.5)*u.w,rt=u.x+R*$-z*V*(u.d/2+.6),mt=u.z+z*$+R*V*(u.d/2+.6);a.add(tt.box(.15,.9,.15),7031344,rt,i.terrainHeight(rt,mt)+.4,mt)}let B=u.x-z*V*(u.d/2+.6),Y=u.z+R*V*(u.d/2+.6);a.add(tt.box(u.w,.08,.08),8084026,B,i.terrainHeight(B,Y)+.65,Y,0,-u.rot)}}for(let u of i.decor.farms){let _=i.terrainHeight(u.x,u.z);a.add(tt.box(4.6,2.6,3.4),15721676,u.x,_+1.3,u.z,0,-u.rot),a.add(tt.cone(3.6,2.2,4),10111538,u.x,_+3.7,u.z,0,Math.PI/4-u.rot,0,1,1,.8),a.add(tt.box(.5,1.4,.5),9076856,u.x+1.2,_+3.8,u.z+.3),a.add(tt.box(3.2,1.6,2.6),9067058,u.x+Math.cos(u.rot)*4.2,_+.8,u.z+Math.sin(u.rot)*4.2,0,-u.rot),a.add(tt.cone(2.5,1.4,4),7027238,u.x+Math.cos(u.rot)*4.2,_+2.3,u.z+Math.sin(u.rot)*4.2,0,Math.PI/4-u.rot);for(let v=0;v<3;v++)a.add(tt.cyl(.5,.5,.8,6),14268506,u.x-3+v*1.2,_+.4,u.z-3,Math.PI/2,v)}if(i.decor.mill){let u=i.decor.mill,_=i.terrainHeight(u.x,u.z);a.add(tt.cyl(1.4,2.1,7,8),15721676,u.x,_+3.5,u.z),a.add(tt.cone(2,2.6,8),10111538,u.x,_+8.3,u.z),a.add(tt.box(1,1.8,.3),5913122,u.x+Math.sin(u.rot)*2,_+.9,u.z+Math.cos(u.rot)*2,0,u.rot);let v=new ge,A=new Re({color:15260864,flatShading:!0}),R=new Re({color:7031344,flatShading:!0});for(let V=0;V<4;V++){let B=new ge,Y=new Ut(tt.box(.2,5.2,.15),R);Y.position.y=2.6;let H=new Ut(tt.box(1.3,3.8,.06),A);H.position.set(.72,3.2,0),B.add(Y,H),B.rotation.z=V*Math.PI/2,v.add(B)}v.position.set(u.x+Math.sin(u.rot)*2.1,_+6.6,u.z+Math.cos(u.rot)*2.1),v.rotation.y=u.rot,v.traverse(V=>{V.castShadow=!0});let z=new ge;z.add(v),s.add(z),o.mill=v}for(let u of i.decor.tents){let _=i.terrainHeight(u.x,u.z),v=Vn[u.side].colors,A=u.big?1.4:1;a.add(tt.cone(2.3*A,2.8*A,u.big?8:4),be(u.big?v.primary:v.cloth===3816e3?5526620:15722194,n,.04),u.x,_+1.35*A,u.z,0,u.rot+Math.PI/4),a.add(tt.cyl(.05,.05,1.4,3),5917242,u.x,_+3*A,u.z),a.add(tt.box(.7,.45,.04),v.primary,u.x+.35,_+3.4*A,u.z)}for(let u of i.camps){if(!u)continue;let _=u.x+(u.x<0?-5:5),v=u.z,A=i.terrainHeight(_,v);for(let R=0;R<7;R++){let z=R/7*Math.PI*2;a.add(tt.dode(.28),7170145,_+Math.cos(z)*.9,A+.1,v+Math.sin(z)*.9)}o.torches.push({x:_,y:A+.3,z:v,fire:!0})}for(let u of i.decor.torches)o.torches.push(u);let m=a.build(r);m&&s.add(m);let b=Vn.map(u=>new Re({color:u.colors.banner,side:Me,flatShading:!0}));for(let u of o.flags){let _=new Je(2.2*u.size,1.3*u.size,4,1);_.translate(1.1*u.size,0,0);let v=new Ut(_,b[u.side]);v.position.set(u.x,u.y,u.z),v.userData.base=Float32Array.from(_.attributes.position.array),v.castShadow=!0,s.add(v);let A=new Ut(tt.cyl(.06,.06,1.6*u.size+1,4),new Re({color:4864554}));A.position.set(u.x,u.y-.3,u.z),s.add(A),u.mesh=v}let w=new ve({color:16753210}),M=new ve({color:16769146});for(let u of o.torches){let _=new ge,v=new Ut(tt.cone(u.fire?.6:.22,u.fire?1.4:.6,5),w),A=new Ut(tt.cone(u.fire?.35:.12,u.fire?.9:.4,5),M);if(v.position.y=u.fire?.6:.3,A.position.y=u.fire?.5:.26,_.add(v,A),!u.fire){let R=new Ut(tt.cyl(.06,.06,.9,4),new Re({color:4864554}));R.position.y=-.4,_.add(R)}_.position.set(u.x,u.y,u.z),s.add(_),u.mesh=_}let U=new Re({color:16777215,flatShading:!0,emissive:3355443});for(let u=0;u<9;u++){let _=new ge,v=3+(n()*3|0);for(let R=0;R<v;R++){let z=new Ut(tt.ico(2.5+n()*2.5,0),U);z.position.set(R*3.2-v*1.5,n()*1.5,(n()-.5)*3),z.scale.y=.6,_.add(z)}let A=u%2===0;_.position.set((n()-.5)*240,34+n()*12,(A?-1:1)*(72+n()*25)),_.userData.speed=.6+n()*.8,s.add(_),o.clouds.push(_)}let C=new ve({color:i.biome==="winter"?3817288:2763312,side:Me,fog:!0}),I=new _e;I.setAttribute("position",new te([0,0,.3,0,0,-.3,1.1,0,0],3)),o.birds=[];for(let u=0;u<2;u++){let _=n()*6.28,v={cx:Math.cos(_)*80,cz:Math.sin(_)*58,r:14+n()*12,y:16+n()*8,sp:(.12+n()*.1)*(n()<.5?1:-1),ph:n()*6,list:[]};for(let A=0;A<6;A++){let R=new ge,z=new Ut(I,C),V=new Ut(I,C);V.scale.x=-1,R.add(z,V),R.scale.setScalar(.55),R.userData={l:z,r:V,off:[(n()-.5)*6,(n()-.5)*2,(n()-.5)*6],fl:n()*6},s.add(R),v.list.push(R)}o.birds.push(v)}let P={summer:{n:70,col:16773792,size:.1,fall:-.15,drift:.6,flutter:1.2},autumn:{n:160,col:14251818,size:.22,fall:1.1,drift:1.4,flutter:2.5,leaf:!0},winter:{n:420,col:16777215,size:.13,fall:2.2,drift:.6,flutter:.8},desert:{n:180,col:15257498,size:.12,fall:.1,drift:5,flutter:.4}}[i.biome];if(P){let u=P.leaf?new Je(P.size*2,P.size*1.3):new si(P.size,0),_=new ve({color:P.col,side:Me,transparent:i.biome==="desert",opacity:.6}),v=new Ei(u,_,P.n);v.frustumCulled=!1,v.instanceMatrix.setUsage(js);let A=[];for(let R=0;R<P.n;R++)A.push({x:(n()-.5)*90,y:n()*40,z:(n()-.5)*70,p:n()*6,s:.7+n()*.6});if(P.leaf){let R=e.leaf.map(z=>new ft(z));for(let z=0;z<P.n;z++)v.setColorAt(z,R[z%R.length])}s.add(v),o.weather={mesh:v,parts:A,W:P}}return t.add(s),o}function nu(i,t,e,n){if(i.water){let s=i.water.geometry.attributes.position,r=s.array,o=i.waterBase;for(let a=0;a<r.length;a+=3){let c=o[a],l=o[a+2];r[a+1]=Math.sin(c*.35+t*1.3)*.08+Math.cos(l*.4+t*1.1)*.08}s.needsUpdate=!0,i.water.geometry.computeVertexNormals()}if(i.mill&&(i.mill.rotation.z+=e*.8),i.birds)for(let s of i.birds){s.ph+=s.sp*e;let r=s.cx+Math.cos(s.ph)*s.r,o=s.cz+Math.sin(s.ph)*s.r,a=Math.atan2(-Math.sin(s.ph)*s.sp,Math.cos(s.ph)*s.sp);for(let c of s.list){let l=c.userData;c.position.set(r+l.off[0],s.y+l.off[1]+Math.sin(t*.7+l.fl)*.6,o+l.off[2]),c.rotation.y=a+Math.PI/2*Math.sign(s.sp);let h=Math.sin(t*9+l.fl)*.6;l.l.rotation.z=h,l.r.rotation.z=-h}}if(i.weather&&i.camTarget){let{mesh:s,parts:r,W:o}=i.weather,a=i.camTarget.x,c=i.camTarget.z;for(let l=0;l<r.length;l++){let h=r[l];h.y-=o.fall*h.s*e,h.x+=(o.drift+Math.sin(t*o.flutter+h.p)*o.drift*.6)*e,h.z+=Math.cos(t*o.flutter*.8+h.p)*.5*e,h.y<0&&(h.y+=40),h.y>40&&(h.y-=40);let d=((h.x-a)%90+135)%90-45,p=((h.z-c)%70+105)%70-35,f=a+d,x=c+p,y=n.terrainHeight(f,x);tu.setFromEuler(Dg.set(t*1.5+h.p,h.p,t*o.flutter+h.p)),Qh.compose(zg.set(f,y+h.y*.9+.3,x),tu,Ug.set(h.s,h.s,h.s)),s.setMatrixAt(l,Qh)}s.instanceMatrix.needsUpdate=!0}for(let s of i.clouds)s.position.x+=s.userData.speed*e,s.position.x>130&&(s.position.x=-130);for(let s of i.flags){let r=s.mesh.geometry.attributes.position,o=s.mesh.userData.base;for(let a=0;a<r.count;a++){let c=o[a*3];r.array[a*3+2]=Math.sin(c*2-t*4+s.x)*.18*(c/2)}r.needsUpdate=!0}for(let s of i.torches){let r=.85+Math.sin(t*17+s.x)*.1+Math.sin(t*23+s.z)*.08;s.mesh.children[0].scale.set(1,r,1),s.mesh.children[1].scale.set(1,2-r,1)}if(i.gateMesh&&n.gate){let s=n.gate;s.alive?s.shake>0&&(s.shake-=e,i.gateMesh.position.x=s.x+Math.sin(t*60)*.06):(i.gateFall||(i.gateFall=0),i.gateFall=Math.min(1,i.gateFall+e*1.5),i.gateMesh.rotation.z=s.face*i.gateFall*1.45,i.gateMesh.position.y=n.castle.base-i.gateFall*.6)}}var iu=1;function su(){iu=1}function Ng(i,t,e,n){let s=[];if(n==="wedge"){let a=0,c=0;for(;c<i;){let l=Math.min(1+a*2,i-c);for(let h=0;h<l;h++)s.push([(h-(l-1)/2)*e,a*e*.9]);c+=l,a++}}else{let a=t;n==="block"&&(a=Math.max(3,Math.ceil(Math.sqrt(i*1.1)))),a=Math.max(2,Math.min(a,i));let c=Math.ceil(i/a);for(let l=0;l<i;l++){let h=Math.floor(l/a),d=h===c-1?i-h*a:a,p=l%a;s.push([(p-(d-1)/2)*e,h*e])}}let r=0,o=0;for(let a of s)r=Math.max(r,a[1]),o=Math.max(o,Math.abs(a[0]));for(let a of s)a[1]-=r/2;return{slots:s,halfW:o+.7,halfD:r/2+.7}}var er=class{constructor(t,e,n,s,r=1){this.id=iu++,this.side=t,this.typeId=e,this.T=fn[e],this.maxCount=Math.max(20,Math.round(this.T.size*r)),this.count=this.maxCount,this.maxHp=this.maxCount*this.T.hp,this.hp=this.maxHp,this.x=n,this.z=s,this.face=t===0?Math.PI/2:-Math.PI/2,this.orders=Xh(e),this.state="idle",this.path=[],this.target=null,this.melee=null,this.speedCur=0,this.vx=0,this.vz=0,this.kills=0,this.dealt=0,this.volleyT=Math.random()*1.5,this.chargeT=0,this.chargeReady=e==="cavalry",this.movedFast=0,this.repathT=0,this.retreated=0,this.regroupT=0,this.flankPlan=null,this.holdX=n,this.holdZ=s,this.lastHitT=99,this.underFire=0,this.cols=this.T.cols,this.formDirty=!0,this.soldiers=[],this.name=this.T.names[t],this.index=0,this.buildSoldiers()}get alive(){return this.count>0}get ratio(){return this.count/this.maxCount}get isRanged(){return this.T.range>0}get fwdX(){return Math.sin(this.face)}get fwdZ(){return Math.cos(this.face)}buildSoldiers(){this.soldiers=[],this.layout();for(let t=0;t<this.maxCount;t++){let[e,n]=this.slotWorld(t);this.soldiers.push({x:e+(Math.random()-.5)*.3,z:n+(Math.random()-.5)*.3,y:0,yaw:this.face,alive:!0,slot:t,phase:Math.random()*6.28,swing:0,deadT:0,fall:Math.random()<.5?1:-1,walk:0,jx:(Math.random()-.5)*.25,jz:(Math.random()-.5)*.25,hit:0})}}layout(t=99){let e=this.T.cols,n=this.orders.formation;n==="line"&&this.typeId!=="cavalry"&&(e=Math.ceil(e*1.25));let s=this.T.spacing*(this.loose?1.35:1),r=Math.max(2,Math.floor(t*2/s));this.cols=Math.min(e,r);let o=this.cols<e&&n!=="block"?"line":n,a=Ng(Math.max(1,this.count),this.cols,s,o);this.slots=a.slots,this.halfW=a.halfW,this.halfD=a.halfD,this.formDirty=!1}slotWorld(t){let e=this.slots[Math.min(t,this.slots.length-1)]||[0,0],n=this.fwdX,s=this.fwdZ,r=s,o=-n;return[this.x+r*e[0]-n*e[1],this.z+o*e[0]-s*e[1]]}support(t,e){let n=this.fwdX,s=this.fwdZ,r=Math.abs(t*n+e*s),o=Math.abs(t*s-e*n);return r*this.halfD+o*this.halfW}reassign(){let t=0,e=this.soldiers.filter(n=>n.alive).sort((n,s)=>n.slot-s.slot);for(let n of e)n.slot=t++;this.formDirty=!0}killSoldier(t,e,n){let s=null,r=1e9;for(let o of this.soldiers){if(!o.alive)continue;let a;n?a=Math.random():a=(o.x-t)**2+(o.z-e)**2+Math.random()*2,a<r&&(r=a,s=o)}if(s){s.alive=!1,s.deadT=1e-4;let o=s.x-t,a=s.z-e;s.yaw=Math.atan2(-o,-a)}return s}};var Jc=class{constructor(){this.k=[],this.p=[]}push(t,e){let n=this.k,s=this.p,r=n.length;for(n.push(t),s.push(e);r>0;){let o=r-1>>1;if(s[o]<=e)break;n[r]=n[o],s[r]=s[o],r=o}n[r]=t,s[r]=e}pop(){let t=this.k,e=this.p,n=t[0],s=t.pop(),r=e.pop();if(t.length){let o=0,a=t.length;for(;;){let c=2*o+1;if(c>=a||(c+1<a&&e[c+1]<e[c]&&c++,e[c]>=r))break;t[o]=t[c],e[o]=e[c],o=c}t[o]=s,e[o]=r}return n}get size(){return this.k.length}},wa=class{constructor(t){this.map=t;let e=t.gw*t.gd;this.g=new Float32Array(e),this.from=new Int32Array(e),this.stamp=new Uint32Array(e),this.closed=new Uint32Array(e),this.cur=1}cellBlocked(t,e){return!!this.map.blocked[t]}cellCost(t,e,n){let s=this.map,r=s.cost[t];s.flags[t]&8&&s.gate&&s.gate.alive&&e!==s.gate.owner&&(r+=5);let o=Math.min(4,Math.ceil(n/4));return s.clear[t]<o&&(r+=(o-s.clear[t])*.6),r}nearestFree(t,e){let n=this.map,s=n.gw,r=n.gd;if(t>=0&&!this.cellBlocked(t,e))return t;let o=t>=0?t%s:0,a=t>=0?t/s|0:0;for(let c=1;c<20;c++){let l=-1,h=1e9;for(let d=-c;d<=c;d++)for(let p=-c;p<=c;p++){if(Math.max(Math.abs(p),Math.abs(d))!==c)continue;let f=o+p,x=a+d;if(f<0||x<0||f>=s||x>=r)continue;let y=x*s+f;if(!this.cellBlocked(y,e)){let g=p*p+d*d;g<h&&(h=g,l=y)}}if(l>=0)return l}return-1}find(t,e,n,s,r,o=8){let a=this.map,c=a.gw,l=a.gd,h=this.nearestFree(a.cellIndex(t,e),r),d=this.nearestFree(a.cellIndex(n,s),r);if(h<0||d<0)return[[n,s]];if(h===d)return[[n,s]];let p=++this.cur,f=this.g,x=this.from,y=this.stamp,g=this.closed,m=d%c,b=d/c|0,w=R=>{let z=Math.abs(R%c-m),V=Math.abs((R/c|0)-b);return(z+V+(1.4142-2)*Math.min(z,V))*1},M=new Jc;y[h]=p,f[h]=0,x[h]=-1,M.push(h,w(h));let U=!1,C=0,I=h,P=w(h);for(;M.size&&C++<6e3;){let R=M.pop();if(g[R]===p)continue;if(g[R]=p,R===d){U=!0;break}let z=w(R);z<P&&(P=z,I=R);let V=R%c,B=R/c|0;for(let Y=0;Y<8;Y++){let H=Fg[Y],$=Lg[Y],rt=V+H,mt=B+$;if(rt<0||mt<0||rt>=c||mt>=l)continue;let Tt=mt*c+rt;if(this.cellBlocked(Tt,r)||g[Tt]===p||H&&$&&(this.cellBlocked(B*c+rt,r)||this.cellBlocked(mt*c+V,r)))continue;let Jt=f[R]+(H&&$?1.4142:1)*this.cellCost(Tt,r,o);(y[Tt]!==p||Jt<f[Tt])&&(y[Tt]=p,f[Tt]=Jt,x[Tt]=R,M.push(Tt,Jt+w(Tt)))}}let u=U?d:I,_=[];for(let R=u;R>=0;R=x[R])_.push(R);_.reverse();let v=[],A=0;v.push(a.cellCenter(_[0]));for(let R=2;R<_.length;R++)this.lineFree(_[A],_[R],r,o)||(A=R-1,v.push(a.cellCenter(_[A])));return U?v.push([n,s]):v.push(a.cellCenter(u)),v.shift(),v}lineFree(t,e,n,s){let r=this.map,o=r.gw,a=t%o,c=t/o|0,l=e%o,h=e/o|0,d=Math.abs(l-a),p=Math.abs(h-c),f=a<l?1:-1,x=c<h?1:-1,y=d-p,g=r.cost[t],m=Math.min(3,Math.ceil(s/5));for(;;){let b=c*o+a;if(this.cellBlocked(b,n)||r.cost[b]>g+.4||r.clear[b]<m&&r.clear[t]>=m||r.flags[b]&8)return!1;if(a===l&&c===h)return!0;let w=2*y;w>-p&&(y-=p,a+=f),w<d&&(y+=d,c+=x)}}},Fg=[1,-1,0,0,1,1,-1,-1],Lg=[0,0,1,-1,1,-1,1,-1];var Kc=Math.PI*2,ru=(i,t)=>{let e=(t-i)%Kc;return e>Math.PI&&(e-=Kc),e<-Math.PI&&(e+=Kc),e},Ee=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),vs=[0,0],Ea=class{constructor(t,e,n){this.map=t,this.legions=e,this.pf=new wa(t),this.time=0,this.timeLimit=n.time,this.over=!1,this.winner=-1,this.reason="",this.events=[],this.volleys=[],this.arrows=[],this.thinkAcc=0,this.checkAcc=0,this.start=[0,0],this.lost=[0,0];for(let s of e)this.start[s.side]+=s.maxCount;this.started=!1}enemiesOf(t){return this.legions.filter(e=>e.side!==t&&e.alive)}alliesOf(t){return this.legions.filter(e=>e.side===t&&e.alive)}begin(){this.started=!0;for(let t of this.legions)t.holdX=t.x,t.holdZ=t.z,t.startX=t.x,t.startZ=t.z,this.applyOrders(t);this.events.push({type:"horn"})}applyOrders(t){let e=t.orders;t.wp=[],t.wpIdx=0,t.path=[],t.formDirty=!0,e.move==="flankL"||e.move==="flankR"?t.wp=this.flankWaypoints(t,e.move==="flankL"?1:-1):e.move==="path"&&(t.wp=e.waypoints.map(n=>[n[0],n[1]])),e.move==="hold"&&this.started&&this.time>0&&(t.holdX=t.x,t.holdZ=t.z),t.state!=="retreat"&&t.state!=="regroup"&&t.state!=="dead"&&(t.state="idle")}flankWaypoints(t,e){let n=this.enemiesOf(t.side),s=t.side===0?50:-50,r=0;if(n.length){s=0,r=0;for(let f of n)s+=f.x,r+=f.z;s/=n.length,r/=n.length}let o=s-t.x,a=r-t.z,c=Math.hypot(o,a)||1;o/=c,a/=c;let l=a*e,h=-o*e,d=[t.x+o*c*.38+l*24,t.z+a*c*.38+h*24],p=[s-o*4+l*17,r-a*4+h*17];return[d,p].map(f=>this.snapFree(f[0],f[1],t.side))}snapFree(t,e,n){t=en(t,-70,70),e=en(e,-46,46);let s=this.map,r=this.pf.nearestFree(s.cellIndex(t,e),n);return r<0?[t,e]:s.cellIndex(t,e)===r?[t,e]:s.cellCenter(r)}previewRoute(t){let e=t.orders,n=[[t.x,t.z]],s=t.x,r=t.z,o=(l,h)=>{let d=this.pf.find(s,r,l,h,t.side,t.halfW*2);for(let p of d)n.push(p);s=l,r=h},a=[];e.move==="flankL"||e.move==="flankR"?a=this.flankWaypoints(t,e.move==="flankL"?1:-1):e.move==="path"&&(a=e.waypoints);for(let l of a)o(l[0],l[1]);let c=null;if(e.move==="hold")this.isRangedInRange(t)&&(c=null);else if(e.target==="objective"&&this.map.objective)c=[this.map.objective.x,this.map.objective.z];else{let l=this.chooseTarget(t,[s,r]);if(l)if(t.isRanged){let h=l.x-s,d=l.z-r,p=Math.hypot(h,d),f=t.T.range*.8;p>f&&(c=[s+h/p*(p-f),r+d/p*(p-f)])}else c=[l.x,l.z]}return c&&o(c[0],c[1]),{pts:n,target:e.move!=="hold"?this.chooseTarget(t,[s,r]):null}}isRangedInRange(t){return t.isRanged}chooseTarget(t,e=null,n=1e9){let s=e?e[0]:t.x,r=e?e[1]:t.z,o=t.orders,a=null,c=1e9,l=this.enemiesOf(t.side);if(o.target==="legion"){let h=l.find(d=>d.id===o.targetId);if(h&&Math.hypot(h.x-s,h.z-r)<Math.max(n,40))return h}for(let h of l){let d=Math.hypot(h.x-s,h.z-r);if(d>n)continue;let p=d;switch(o.target){case"weakest":p=h.count*1.6+d*.35;break;case"strongest":p=-h.count*1.6+d*.35;break;case"ranged":p=d+(h.isRanged?0:55);break;case"objective":{let f=this.map.objective;f&&(p=Math.hypot(h.x-f.x,h.z-f.z)+d*.3);break}}h.state==="retreat"&&(p+=30),t.typeId==="cavalry"&&h.typeId==="pike"&&t.aiSmart&&(p+=45),t.aiSmart&&h.inCastleCover&&(p+=20),p<c&&(c=p,a=h)}return a}aggroRadius(t){let e=t.orders.stance,n=e==="aggressive"?24:e==="defensive"?10:16;return(t.orders.move==="flankL"||t.orders.move==="flankR")&&t.wp&&t.wpIdx<t.wp.length&&(n=7),t.isRanged&&(n=t.T.range),n}nearestEnemy(t,e,n){let s=null,r=e;for(let o of this.legions){if(o.side===t.side||!o.alive||n&&!n(o))continue;let a=Ee(t,o)-o.support((t.x-o.x)/(Ee(t,o)||1),(t.z-o.z)/(Ee(t,o)||1));a<r&&(r=a,s=o)}return s}contactDist(t,e){let n=Ee(t,e)||.001,s=(e.x-t.x)/n,r=(e.z-t.z)/n;return t.support(s,r)+e.support(s,r)+.5}step(t){if(this.over)return;this.time+=t,this.thinkAcc+=t;let e=this.thinkAcc>.25;e&&(this.thinkAcc=0);for(let n of this.legions)n.alive&&(e&&this.think(n),this.act(n,t));this.separate(t),this.resolveVolleys();for(let n of this.legions)this.updateSoldiers(n,t);this.arrows=this.arrows.filter(n=>this.time<n.t0+n.dur+.05),this.checkAcc+=t,this.checkAcc>.2&&(this.updateObjective(this.checkAcc),this.checkAcc=0,this.checkVictory())}think(t){let e=t.orders,n=this.map;if(t.inCastleCover=n.castle&&n.castle.owner===t.side&&n.inCastle(t.x,t.z),t.state!=="retreat"&&t.state!=="regroup"&&e.retreatAt>0){let c=e.retreatAt/(1+t.retreated*1.5);if(t.ratio<=c){this.startRetreat(t);return}}if(t.state==="retreat"||t.state==="regroup")return;if(t.melee){let c=t.melee;if(!c.alive||Ee(t,c)>this.contactDist(t,c)+3.5||c.state==="retreat"&&t.orders.stance==="defensive")t.melee=null,t.state="idle";else{t.state="melee";return}}let s=this.legions.find(c=>c.alive&&c.side!==t.side&&c.melee===t);if(s&&!t.isRanged){t.melee=s,t.state="melee";return}if(s&&t.isRanged&&Ee(t,s)<this.contactDist(t,s)+.5){t.melee=s,t.state="melee";return}if(n.gate&&n.gate.alive&&t.side!==n.gate.owner&&t.state!=="breach"&&!t.isRanged&&Math.hypot(n.gate.x-t.x,n.gate.z-t.z)<t.halfD+11&&this.wantsInside(t)&&this.legions.some(c=>c!==t&&c.side===t.side&&c.state==="breach")&&(t.state="breach",t.path=[]),t.state==="breach"&&n.gate&&n.gate.alive){let c=this.nearestEnemy(t,3);c&&this.engage(t,c);return}if(this.time<e.delay&&t.lastHitT>1.5){t.state="wait";return}if(t.isRanged)return this.thinkRanged(t);let r=this.aggroRadius(t);if(t.wp&&t.wpIdx<t.wp.length){if(this.keepEngaging(t,r))return;let c=this.nearestEnemy(t,r);if(c){this.engage(t,c);return}let l=t.wp[t.wpIdx];if(Math.hypot(l[0]-t.x,l[1]-t.z)<4){t.wpIdx++,t.path=[];return}this.moveTo(t,l[0],l[1],"move");return}if(e.move==="hold"){if(this.keepEngaging(t,r,!0))return;let c=this.nearestEnemy(t,r);if(c&&Math.hypot(c.x-t.holdX,c.z-t.holdZ)<r+10){this.engage(t,c);return}Math.hypot(t.holdX-t.x,t.holdZ-t.z)>2.5?this.moveTo(t,t.holdX,t.holdZ,"move"):(t.state="hold",t.path=[]);return}let o=n.objective;if(e.target==="objective"&&o){if(this.keepEngaging(t,Math.min(r,12)))return;let c=this.nearestEnemy(t,Math.min(r,12));if(c){this.engage(t,c);return}if(Math.hypot(o.x-t.x,o.z-t.z)>o.r*.5)this.moveTo(t,o.x,o.z,"move");else{let h=this.nearestEnemy(t,22);h?this.engage(t,h):(t.state="hold",t.path=[])}return}let a=this.nearestEnemy(t,Math.min(r,9));a||(a=this.chooseTarget(t)),a?this.engage(t,a):(t.state="idle",t.path=[])}thinkRanged(t){let e=t.orders,n=t.T.range;if(e.skirmish){let a=this.nearestEnemy(t,9,c=>!c.isRanged&&c.state!=="retreat");if(a){let c=t.x-a.x,l=t.z-a.z,h=Math.hypot(c,l)||1,d=t.x+c/h*12,p=t.z+l/h*12;if(this.map.isPassable(d,p,t.side)&&a.typeId!=="cavalry"){this.moveTo(t,d,p,"kite"),t.target=a;return}}}let s=null,r=this.chooseTarget(t,null,n);if(r&&(s=r),t.wp&&t.wpIdx<t.wp.length){if(s&&Ee(t,s)<n*.9){t.target=s,t.state="shoot",t.path=[];return}let a=t.wp[t.wpIdx];if(Math.hypot(a[0]-t.x,a[1]-t.z)<4){t.wpIdx++,t.path=[];return}this.moveTo(t,a[0],a[1],"move");return}if(s){t.target=s,t.state="shoot",t.path=[];return}if(e.move==="hold"){Math.hypot(t.holdX-t.x,t.holdZ-t.z)>2.5?this.moveTo(t,t.holdX,t.holdZ,"move"):(t.state="hold",t.path=[]);return}let o=this.chooseTarget(t);if(e.target==="objective"&&this.map.objective&&(!o||Ee(t,o)>n*1.4)){let a=this.map.objective;if(Math.hypot(a.x-t.x,a.z-t.z)>n*.6){this.moveTo(t,a.x,a.z,"move");return}}if(o){t.target=o;let a=o.x-t.x,c=o.z-t.z,l=Math.hypot(a,c),h=n*.82;this.moveTo(t,t.x+a/l*(l-h+1),t.z+c/l*(l-h+1),"move")}else t.state="idle",t.path=[]}keepEngaging(t,e,n=!1){let s=t.target;return t.state!=="engage"||!s||!s.alive||s.state==="retreat"||Ee(t,s)-s.support((t.x-s.x)/(Ee(t,s)||1),(t.z-s.z)/(Ee(t,s)||1))>e+8||n&&Math.hypot(s.x-t.holdX,s.z-t.holdZ)>e+18?!1:(this.engage(t,s),!0)}wantsInside(t){let e=this.map;if(!e.castle)return!1;if(t.orders.target==="objective")return!0;let n=t.target;return n&&n.alive&&e.inCastle(n.x,n.z)?!0:!!(t.pathGoal&&e.inCastle(t.pathGoal[0],t.pathGoal[1]))}engage(t,e){t.target=e;let n=this.contactDist(t,e);if(Ee(t,e)<n){this.startMelee(t,e);return}this.moveTo(t,e.x,e.z,"engage",e)}moveTo(t,e,n,s,r=null){t.state=s;let o=t.pathGoal,a=!o||Math.hypot(o[0]-e,o[1]-n)>(r?3:1);t.repathT-=.25,(!t.path.length||a||t.repathT<=0)&&(t.path=this.pf.find(t.x,t.z,e,n,t.side,t.halfW*2),t.pathGoal=[e,n],t.repathT=r?1.2:4)}startMelee(t,e){t.melee=e,t.state="melee",t.path=[];let n=Ee(t,e)||1;if(t.typeId==="cavalry"&&t.chargeReady&&t.speedCur>t.T.speed*.55)if(t.chargeReady=!1,t.movedFast=0,e.typeId==="pike"&&e.state!=="retreat")this.damage(t,t.count*1.1,e,!1),this.events.push({type:"impact",x:(t.x+e.x)/2,z:(t.z+e.z)/2,big:!1,broken:!0});else{t.chargeT=2.8;let s=this.flankMult(t,e),r=t.orders.formation==="wedge"?1.25:1;this.damage(e,t.count*1.05*s*r,t,!1),this.events.push({type:"impact",x:(t.x+e.x)/2,z:(t.z+e.z)/2,big:!0}),e.knock={x:(e.x-t.x)/n,z:(e.z-t.z)/n,t:.5}}!e.melee&&e.state!=="retreat"&&e.alive&&(e.melee=t,e.state="melee"),this.events.push({type:"clash",x:(t.x+e.x)/2,z:(t.z+e.z)/2})}startRetreat(t){t.state="retreat",t.melee=null,t.retreated++,t.target=null;let e,n,s=t.orders,r=this.map.camps[t.side];if(e=r.x+(t.side===0?6:-6),n=r.z,s.retreatTo==="ally"){let o=null,a=1e9;for(let c of this.alliesOf(t.side)){if(c===t||c.state==="retreat")continue;let l=Ee(t,c);l<a&&(a=l,o=c)}if(o){let c=this.enemiesOf(t.side),l=0,h=0;for(let x of c)l+=x.x,h+=x.z;c.length&&(l/=c.length,h/=c.length);let d=o.x-l,p=o.z-h,f=Math.hypot(d,p)||1;e=o.x+d/f*10,n=o.z+p/f*10}}if(this.map.castle&&this.map.castle.owner===t.side){let o=this.map.objective;e=o.x,n=o.z}[e,n]=this.snapFree(e,n,t.side),t.retreatGoal=[e,n],t.path=this.pf.find(t.x,t.z,e,n,t.side,t.halfW*2),this.events.push({type:"retreat",side:t.side,legion:t})}act(t,e){t.lastHitT+=e,t.chargeT-=e,t.knock&&(t.knock.t-=e,t.knock.t<=0&&(t.knock=null));let n=this.map,s=t.T,r=0,o=null;switch(t.typeId==="cavalry"&&!t.chargeReady&&!t.melee&&(t.speedCur>s.speed*.6&&(t.movedFast+=e),t.movedFast>1.6&&(t.chargeReady=!0)),t.state){case"melee":{let a=t.melee;if(!a||!a.alive){t.melee=null,t.state="idle";break}o=a;let c=this.contactDist(t,a);Ee(t,a)>c-.2&&(r=Math.min(s.speed,1.6),this.stepToward(t,a.x,a.z,r,e)),this.dealMelee(t,a,e);break}case"shoot":{let a=t.target;if(!a||!a.alive){t.state="idle";break}if(o=a,Ee(t,a)>s.range*1.05){t.state="idle";break}t.volleyT-=e,t.volleyT<=0&&(this.fireVolley(t,a),t.volleyT=s.volley*(.9+Math.random()*.2));break}case"retreat":{r=s.speed*1.12,this.followPath(t,r,e)&&(t.state="regroup",t.regroupT=7);break}case"regroup":{t.regroupT-=e,t.hp=Math.min(t.count*s.hp,t.hp+s.hp*.25*e);let a=this.nearestEnemy(t,4);if(a){t.melee=a,t.state="melee";break}t.regroupT<=0&&(t.holdX=t.x,t.holdZ=t.z,t.orders.afterRetreat==="hold"&&(t.orders.move="hold"),t.wp=[],t.wpIdx=0,t.state="idle",this.events.push({type:"rally",legion:t}));break}case"move":case"engage":case"kite":{if(r=s.speed,t.state==="engage"&&t.target&&t.target.alive){let a=t.target;if(Ee(t,a)<this.contactDist(t,a)){this.startMelee(t,a);break}}if(t.isRanged&&t.target&&t.target.alive&&Ee(t,t.target)<s.range*.95&&t.state!=="kite"){t.state="shoot",t.path=[];break}this.followPath(t,r,e)&&(t.path=[]);break}case"breach":{let a=n.gate;if(!a||!a.alive){t.state="idle";break}o={x:a.x,z:a.z};let c=Math.hypot(a.x-t.x,a.z-t.z);if(c>t.halfD+4&&this.stepToward(t,a.x,a.z,1.4,e),c>t.halfD+12){t.state="idle";break}let l=t.count*s.atk*.09*(t.typeId==="guard"?1.3:t.typeId==="cavalry"?.5:t.typeId==="archer"?.3:1);if(a.hp-=l*e,a.shake=.25,t.gateHitT=(t.gateHitT||0)-e,t.gateHitT<=0&&(t.gateHitT=.7,this.events.push({type:"gatehit",x:a.x,z:a.z})),a.hp<=0){a.hp=0,a.alive=!1,this.events.push({type:"gatebroken",x:a.x,z:a.z});for(let d of this.legions)d.path=[]}let h=this.nearestEnemy(t,3);h&&this.engage(t,h);break}case"hold":case"idle":case"wait":default:{let a=this.nearestEnemy(t,45);(a&&t.state!=="wait"||a&&this.time>0)&&(o=a);break}}if(t.state!=="move"&&t.state!=="engage"&&t.state!=="retreat"&&t.state!=="kite"&&t.state!=="melee"&&t.state!=="breach"&&(t.speedCur=Math.max(0,t.speedCur-6*e)),o&&this.turnToward(t,Math.atan2(o.x-t.x,o.z-t.z),e),t.knock){let a=t.x+t.knock.x*2.2*e,c=t.z+t.knock.z*2.2*e;n.isPassable(a,c,t.side)&&(t.x=a,t.z=c)}if(t.clearT=(t.clearT||0)-e,t.clearT<=0||t.formDirty){t.clearT=.4;let a=this.map.clearanceAt(t.x,t.z),l=t.state==="move"||t.state==="engage"||t.state==="retreat"||t.state==="kite"?a+1:99,h=t.cols,d=!!(this.map.flagAt(t.x,t.z)&1)||this.map.treesNear(t.x,t.z,Math.max(t.halfW,t.halfD))>2;d!==!!t.loose&&(t.loose=d,t.formDirty=!0),(t.formDirty||l!==t.lastClear)&&(t.lastClear=l,t.layout(l),h!==t.cols&&(t.formDirty=!1))}}turnToward(t,e,n){let s=t.typeId==="cavalry"?3.2:2.2,r=ru(t.face,e),o=en(r,-s*n,s*n);t.face+=o}stepToward(t,e,n,s,r){let o=e-t.x,a=n-t.z,c=Math.hypot(o,a);if(c<.01)return;let l=Math.min(c,s*r),h=t.x+o/c*l,d=t.z+a/c*l;this.map.isPassable(h,d,t.side)&&(t.x=h,t.z=d)}followPath(t,e,n){let s=this.map;if(!t.path.length)return!0;let r=t.path[0],o=r[0]-t.x,a=r[1]-t.z,c=Math.hypot(o,a),l=t.path.length===1?t.state==="retreat"?3.5:1.8:.9;if(c<l)return t.path.shift(),t.path.length===0;o/=c,a/=c;let h=s.flagAt(t.x,t.z),d=e;h&1&&(d*=.72),h&2&&(d*=.55),t.orders.formation==="block"&&(d*=.9),t.orders.stance==="aggressive"&&(d*=1.05);let p=s.getHeight(t.x,t.z);s.getHeight(t.x+o*2,t.z+a*2)-p>.4&&(d*=.8),t.speedCur+=en(d-t.speedCur,-6*n,3*n);let x=Math.min(c,t.speedCur*n),y=t.x+o*x,g=t.z+a*x,m=s.gate;if(m&&m.alive&&t.side!==m.owner){let b=s.cellIndex(y+o*(t.halfD+1),g+a*(t.halfD+1));if(b>=0&&s.flags[b]&8)return t.state="breach",this.events.push({type:"breach",legion:t}),!1}if(s.isPassable(y,g,t.side))t.x=y,t.z=g,t.blockT=0;else if(s.isPassable(y,t.z,t.side)?t.x=y:s.isPassable(t.x,g,t.side)&&(t.z=g),t.blockT=(t.blockT||0)+n,t.blockT>.35){t.blockT=0;let b=t.state==="retreat"&&t.retreatGoal?t.retreatGoal:t.path[t.path.length-1],w=this.pf.find(t.x,t.z,b[0],b[1],t.side,t.halfW*2),M=this.pf.nearestFree(s.cellIndex(t.x,t.z),t.side);M>=0&&w.unshift(s.cellCenter(M)),t.path=w}return this.turnToward(t,Math.atan2(o,a),n),!1}flankMult(t,e){let n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s)||1,o=n/r*e.fwdX+s/r*e.fwdZ;return o<-.45?1.6:o<.4?1.3:1}mods(t,e,n){let s=1,r=1,o=t.orders,a=e.orders;o.stance==="aggressive"?s*=1.15:o.stance==="defensive"&&(s*=.9),a.stance==="aggressive"?r*=.9:a.stance==="defensive"&&(r*=1.2),o.formation==="wedge"&&(s*=1.1),a.formation==="wedge"&&(r*=.9),o.formation==="block"&&(s*=.95),a.formation==="block"&&(r*=1.15);let c=this.map,l=c.getHeight(t.x,t.z),h=c.getHeight(e.x,e.z);l-h>1.5?s*=1.2:h-l>1.5&&(s*=.85),c.castle&&c.castle.owner===e.side&&c.inCastle(e.x,e.z)&&(r*=n&&!c.inCastle(t.x,t.z)?1.6:1.3);let d=c.flagAt(e.x,e.z);return d&2&&(r*=.75),n&&d&1&&(r*=1.6),e.state==="retreat"&&(r*=.6),e.state==="breach"&&(r*=.85),[s,r]}dealMelee(t,e,n){let s=t.T,[r,o]=this.mods(t,e,!1);t.typeId==="pike"&&e.typeId==="cavalry"&&(r*=s.vsCav),t.typeId==="cavalry"&&e.isRanged&&(r*=1.5),t.chargeT>0&&(r*=s.charge||1),r*=this.flankMult(t,e),t.isRanged&&(r*=.9);let c=t.count*s.atk*.1*r/(1+e.T.def*o*.22)*n;this.damage(e,c,t,!1),t.clashT=(t.clashT||0)-n,t.clashT<=0&&(t.clashT=.35+Math.random()*.5,this.events.push({type:"clash",x:(t.x+e.x)/2+(Math.random()-.5)*t.halfW,z:(t.z+e.z)/2+(Math.random()-.5)*2,soft:!0}))}fireVolley(t,e){let n=t.T,s=Ee(t,e),r=.46-.24*(s/n.range);e.melee&&(r*=.75);let[o,a]=this.mods(t,e,!0),l=t.count*r,h=e.T.arrowResist||1,d=l*n.arrowDmg*o*h/(1+e.T.def*a*.12),p=.9+s/40;this.volleys.push({A:t,B:e,dmg:d,t:this.time+p});let f=t.soldiers.filter(y=>y.alive),x=Math.min(f.length,18);for(let y=0;y<x;y++){let g=f[(y*7+Math.random()*3|0)%f.length];g.shoot=.6;let m=e.soldiers.filter(w=>w.alive),b=m.length?m[Math.random()*m.length|0]:e;this.arrows.push({x0:g.x,y0:g.y+1.5,z0:g.z,x1:b.x+(Math.random()-.5)*3,z1:b.z+(Math.random()-.5)*3,y1:(b.y||0)+.6,t0:this.time+Math.random()*.25,dur:p,arc:4+s*.18})}this.events.push({type:"volley",x:t.x,z:t.z})}resolveVolleys(){let t=this.time;for(let e=this.volleys.length-1;e>=0;e--){let n=this.volleys[e];t>=n.t&&(n.B.alive&&(this.damage(n.B,n.dmg,n.A,!0),n.B.underFire=1,this.events.push({type:"arrowhit",x:n.B.x,z:n.B.z})),this.volleys.splice(e,1))}}damage(t,e,n,s){if(!t.alive||e<=0)return;t.hp-=e,n.dealt+=e,t.lastHitT=0;let r=Math.max(0,Math.ceil(t.hp/t.T.hp-1e-6)),o=!1;for(;t.count>r;){t.count--;let a=t.killSoldier(n.x,n.z,s);n.kills++,this.lost[t.side]++,o=!0,a&&this.events.push({type:"death",x:a.x,z:a.z,side:t.side})}if(t.count<=0){t.hp=0,t.state="dead",t.melee=null;for(let a of this.legions)a.melee===t&&(a.melee=null,a.state="idle"),a.target===t&&(a.target=null);this.events.push({type:"legionlost",side:t.side,legion:t})}else o&&t.reassign()}separate(t){let e=this.legions.filter(r=>r.alive),n=this.map,s=r=>r.state==="move"||r.state==="engage"||r.state==="kite"||r.state==="breach";for(let r=0;r<e.length;r++)for(let o=r+1;o<e.length;o++){let a=e[r],c=e[o];if(a.melee===c||c.melee===a||a.state==="retreat"||c.state==="retreat")continue;let l=Ee(a,c)||.01,h=this.contactDist(a,c),d,p;if(a.side===c.side){let f=s(a),x=s(c);f&&x?(d=h*.45,p=1.2):f||x?(d=h*.35,p=.8):(d=h*.78,p=4)}else{if(l<h*.98){if(!a.melee&&!a.isRanged){this.startMelee(a,c);continue}if(!c.melee&&!c.isRanged){this.startMelee(c,a);continue}}d=h*.95,p=4}if(l<d){let f=Math.min(d-l,p*t),x=(c.x-a.x)/l,y=(c.z-a.z)/l,g=a.melee||a.state==="hold"||a.state==="shoot"||a.state==="breach",m=c.melee||c.state==="hold"||c.state==="shoot"||c.state==="breach",b=g&&!m?.15:m&&!g?.85:.5,w=1-b,M=a.x-x*f*b*2,U=a.z-y*f*b*2,C=c.x+x*f*w*2,I=c.z+y*f*w*2;n.isPassable(M,U,a.side)&&(a.x=M,a.z=U),n.isPassable(C,I,c.side)&&(c.x=C,c.z=I)}}}updateSoldiers(t,e){let n=this.map,s=this.time,r=t.state==="melee"&&t.melee,o=t.speedCur>.2,a=t.T.speed*1.5+1,c=r?t.melee:null;for(let l of t.soldiers){if(!l.alive){l.deadT>0&&l.deadT<30&&(l.deadT+=e);continue}let[h,d]=t.slotWorld(l.slot);h+=l.jx,d+=l.jz;let p=t.slots[l.slot]?t.slots[l.slot][1]+t.halfD-.7:0;if(c){let M=c.x-h,U=c.z-d,C=Math.hypot(M,U)||1,P=p<t.T.spacing*1.6?.7:.25;h+=M/C*P+Math.sin(s*2+l.phase)*.15,d+=U/C*P+Math.cos(s*2.3+l.phase)*.15}if(!n.isPassable(h,d,t.side)){let M=!1;for(let U=1;U<=4;U++){let C=U/4,I=h+(t.x-h)*C,P=d+(t.z-d)*C;if(n.isPassable(I,P,t.side)){h=I,d=P,M=!0;break}}M||(h=t.x,d=t.z)}n.avoidTrees(h,d,vs,t.typeId==="cavalry"?.45:0)&&(h=vs[0],d=vs[1]),n.avoidTrees(l.x,l.z,vs,.5)&&(l.x=vs[0],l.z=vs[1]);let f=h-l.x,x=d-l.z,y=Math.hypot(f,x),g=Math.min(y,(a+y*1.2)*e);if(y>.02){let M=l.x+f/y*g,U=l.z+x/y*g;!n.isPassable(M,U,t.side)&&n.isPassable(l.x,l.z,t.side)&&(M=l.x,U=l.z),l.x=M,l.z=U}let m=g/Math.max(e,1e-4);l.walk+=g*2.2,l.moving=m>.5;let b;c?b=Math.atan2(c.x-l.x,c.z-l.z):m>.6&&y>.3?b=Math.atan2(f,x):t.state==="shoot"&&t.target?b=Math.atan2(t.target.x-l.x,t.target.z-l.z):b=t.face;let w=ru(l.yaw,b);if(l.yaw+=en(w,-5*e,5*e),l.y=n.getHeight(l.x,l.z),c){let M=p<t.T.spacing*2.2;l.swing=M?Math.sin(s*7+l.phase)*.5+.5:0}else l.swing=Math.max(0,l.swing-e*3);l.shoot>0&&(l.shoot-=e),l.hit>0&&(l.hit-=e)}(o||r)&&(t.lastMove=s)}updateObjective(t){let e=this.map.objective;if(!e)return;let n=[0,0];for(let s of this.legions)!s.alive||s.state==="retreat"||Math.hypot(s.x-e.x,s.z-e.z)<e.r+s.halfW*.5&&(n[s.side]+=s.count);if(e.present=n,e.type==="keep"){let s=1-e.owner;n[s]>0&&n[e.owner]===0?e.hold+=t:e.hold=Math.max(0,e.hold-t*.5)}else e.type==="hill"&&(n[0]>0&&n[1]===0&&(e.score[0]+=t*1.6),n[1]>0&&n[0]===0&&(e.score[1]+=t*1.6))}strength(t){let e=0;for(let n of this.legions)n.side===t&&n.alive&&(e+=n.count);return e}checkVictory(){if(!this.started||this.over)return;let t=this.strength(0),e=this.strength(1),n=o=>{let a=this.legions.filter(c=>c.side===o&&c.alive);return a.length>0&&a.every(c=>c.state==="retreat")},s=this.map.objective,r=(o,a)=>{this.over=!0,this.winner=o,this.reason=a,this.events.push({type:"end",winner:o})};if(t<=this.start[0]*.08||t===0)return r(1,"Deine Legionen wurden vernichtet.");if(e<=this.start[1]*.08||e===0)return r(0,"Das feindliche Heer wurde vernichtet.");if(n(1)&&e<t*.6)return r(0,"Der Feind flieht vom Schlachtfeld!");if(n(0)&&t<e*.6)return r(1,"Deine Legionen fliehen vom Schlachtfeld.");if(s&&s.type==="keep"&&s.hold>=s.need){let o=1-s.owner;return r(o,o===0?"Der Burghof ist eingenommen \u2013 die Burg geh\xF6rt dir!":"Der Feind hat den Burghof eingenommen.")}if(s&&s.type==="hill"){if(s.score[0]>=s.need)return r(0,"Der Steinkreis ist in deiner Hand!");if(s.score[1]>=s.need)return r(1,"Der Feind h\xE4lt den Steinkreis.")}if(this.time>=this.timeLimit){if(s&&s.type==="keep"){let c=s.owner;return r(c,c===0?"Die Mauern haben gehalten. Die Burg ist sicher!":"Die Zeit ist abgelaufen \u2013 die Burg h\xE4lt stand.")}if(s&&s.type==="hill"&&Math.abs(s.score[0]-s.score[1])>3){let c=s.score[0]>s.score[1]?0:1;return r(c,"Zeit abgelaufen \u2013 Punktsieg am Steinkreis.")}let o=t/this.start[0],a=e/this.start[1];return r(o>=a?0:1,"Zeit abgelaufen \u2013 Sieg nach verbliebener St\xE4rke.")}}};function jc(i,t,e){let n=i.length,s=t==="defend"?["legion","legion","guard","cavalry","archer","pike"]:t==="assault"?["archer","pike","guard","legion","archer","legion"]:["legion","archer","pike","cavalry","guard","legion"],r=[],o=i.filter(c=>c==="cavalry").length,a=i.filter(c=>c==="archer").length;for(let c=0;c<n;c++){let l=s[(c+e.int(0,2))%s.length];c===0&&(l=t==="assault"?"archer":"legion"),o>=2&&c===1&&(l="pike"),a>=2&&c===2&&t!=="assault"&&(l="cavalry"),r.push(l)}return r}function au(i,t,e){let n=s=>s.reduce((r,o)=>r+fn[o].size*fn[o].value,0);return n(i)/Math.max(1,n(t))*e}function Ta(i,t,e,n,s){let r=e===0?t.x1-6:t.x0+6,o=e===0?t.x0+6:t.x1-6,a=n.canyon?n.canyonCenter(r):(t.z0+t.z1)/2;for(let f of i)f.placed=!1;let c=i.filter(f=>!f.isRanged&&f.typeId!=="cavalry"),l=i.filter(f=>f.isRanged),h=i.filter(f=>f.typeId==="cavalry"),d=(f,x,y)=>{let[g,m]=Qc(n,t,x,y,f,e,i);f.x=g,f.z=m,f.face=e===0?Math.PI/2:-Math.PI/2,f.buildSoldiers()},p=(f,x,y)=>{f.forEach((g,m)=>{let b=a+(m-(f.length-1)/2)*y;d(g,x,b)})};if(t.castle){let f=n.castle,x=f.face,y=f.gateX-x*7;c.forEach((g,m)=>d(g,y-x*(m%2)*7,f.cz+(m-(c.length-1)/2)*11)),l.forEach((g,m)=>d(g,f.gateX-x*4,f.cz+(m%2?1:-1)*(9+m*3))),h.forEach((g,m)=>d(g,n.objective.x,n.objective.z+(m-.5)*10));return}p(c,r,13),p(l,(r+o)/2+(e===0?-3:3),14),h.forEach((f,x)=>d(f,r-(e===0?4:-4),a+(x%2?1:-1)*(c.length*7+8+Math.floor(x/2)*9)))}function Qc(i,t,e,n,s,r,o){let a=[[0,0]];for(let c=2;c<44;c+=2)for(let l=0;l<12;l++)a.push([Math.cos(l*.5236)*c,Math.sin(l*.5236)*c]);for(let[c,l]of[[9,3],[6,2.5],[0,1]])for(let[h,d]of a){let p=Math.max(t.x0+3,Math.min(t.x1-3,e+h)),f=Math.max(t.z0+3,Math.min(t.z1-3,n+d));if(i.isPassable(p,f,r)&&!(i.clearanceAt(p,f)<l)&&!o.some(x=>x!==s&&x.placed&&Math.hypot(x.x-p,x.z-f)<c))return s.placed=!0,[p,f]}return s.placed=!0,[e,n]}function tl(i,t,e,n,s){let r=Ii[n];for(let o of i){o.aiSmart=s()<r.smart;let a=o.orders;switch(a.retreatAt=s()<.5?.25:.2,a.retreatTo="camp",a.afterRetreat="return",a.stance="balanced",o.typeId){case"archer":a.move="hold",a.target="nearest",a.skirmish=!0;break;case"cavalry":a.move=s()<.5?"flankL":"flankR",a.target="ranged",a.formation="wedge",a.delay=s.int(3,8);break;case"guard":a.move="advance",a.target="strongest",a.formation="block",a.stance="defensive";break;case"pike":a.move="advance",a.target="nearest",a.delay=2;break;default:a.move="advance",a.target=s()<.5?"nearest":"weakest"}t==="assault"&&(a.retreatAt=0,o.isRanged?(a.move="hold",a.skirmish=!1):o.typeId==="cavalry"?(a.move="hold",a.target="objective",a.delay=0):(a.move="hold",a.stance="balanced")),t==="defend"&&(o.isRanged?(a.move="advance",a.target="nearest"):(a.move="advance",a.target="objective",a.stance="aggressive"),o.typeId==="cavalry"&&(a.move="advance",a.delay=25)),t==="hill"&&(!o.isRanged&&s()<.7&&(a.target="objective"),o.isRanged&&(a.move="advance",a.target="nearest")),t==="canyon"&&o.typeId==="cavalry"&&(a.move="advance")}}var nr=class{constructor(t,e,n,s=1){this.side=s,this.b=t,this.D=Ii[e],this.rng=n,this.t=0}update(t){if(this.t+=t,this.t<this.D.think)return;this.t=0;let e=this.b,n=this.side,s=1-n,r=e.legions.filter(h=>h.side===n&&h.alive),o=e.legions.filter(h=>h.side===s&&h.alive);if(!o.length)return;let a=r.reduce((h,d)=>h+d.count,0),c=o.reduce((h,d)=>h+d.count,0),l=e.map.objective;for(let h of r){if(h.state==="retreat"||h.state==="regroup"||h.state==="melee"||this.rng()>this.D.smart+.2)continue;let d=h.orders;if(e.map.castle&&e.map.castle.owner===n){!e.map.gate.alive&&h.typeId==="cavalry"&&d.move==="hold"&&(d.move="advance",d.target="ranged",e.applyOrders(h)),l&&l.present&&l.present[s]>0&&!h.isRanged&&d.move==="hold"&&(d.move="advance",d.target="objective",e.applyOrders(h));continue}if(l&&l.type==="hill"&&l.score[s]>l.score[n]+10&&!h.isRanged&&d.target!=="objective"){d.target="objective",e.applyOrders(h);continue}a>c*1.3&&d.stance!=="aggressive"&&!h.isRanged?d.stance="aggressive":a<c*.7&&d.stance==="aggressive"&&(d.stance="balanced"),(h.state==="hold"||h.state==="idle")&&!h.isRanged&&e.time>25&&d.move==="hold"&&!(e.map.castle&&e.map.castle.owner===n)&&(d.move="advance",e.applyOrders(h)),h.isRanged&&h.state==="hold"&&e.time>12&&(e.chooseTarget(h,null,h.T.range)||(d.move="advance",e.applyOrders(h))),h.typeId==="cavalry"&&h.aiSmart&&h.target&&h.target.typeId==="pike"&&(h.target=null,h.path=[])}}};var ou=new Zt,cu=new Zt,oi=new Zt,Ui=new ke,Aa=new ke,ci=new Ie,kg=new Ie(0,0,0,"YXZ"),bs=new O,Ss=new O(1,1,1),Ms=new ft,Vx=new O(0,1,0),Ra=new Zt().makeScale(0,0,0),Ca=class{constructor(t,e,n,s){var a;this.scene=t,this.map=n,this.legions=e,this.group=new ge,t.add(this.group),this.geos=Kh(),this.mat=new Re({flatShading:!0});let r={};this.defs={};for(let c of e){let l=c.side+":"+c.typeId;this.defs[l]||(this.defs[l]=jh(c.side,c.typeId));for(let h of this.defs[l])r[h.g]=(r[h.g]||0)+c.maxCount}this.meshes={},this.counters={};for(let c in r){let l=new Ei(this.geos[c],this.mat,r[c]);l.instanceMatrix.setUsage(js),l.castShadow=s,l.receiveShadow=!1,l.frustumCulled=!1,l.count=r[c];for(let h=0;h<r[c];h++)l.setMatrixAt(h,Ra);this.meshes[c]=l,this.counters[c]=0,this.group.add(l)}for(let c of e){let l=this.defs[c.side+":"+c.typeId],h=Vn[c.side].colors;for(let d of c.soldiers){d.pi=[];let p=.9+Math.random()*.14;for(let f of l){let x=this.counters[f.g]++;d.pi.push(x),Ms.setHex((a=h[f.role])!=null?a:16711935);let y=f.role==="skin"||f.role==="horse"?.82+Math.random()*.3:p;Ms.multiplyScalar(y),this.meshes[f.g].setColorAt(x,Ms)}d.colored=!0}}for(let c in this.meshes)this.meshes[c].instanceColor&&(this.meshes[c].instanceColor.needsUpdate=!0);this.standards=new Map;let o=new Re({color:5914664,flatShading:!0});for(let c of e){let l=Vn[c.side],h=new ge,d=new Ut(this.geos.pole,o);h.add(d);let p=new Re({color:c.side===0?14922817:2829104,flatShading:!0}),f=new Ut(this.geos.eagle,p);h.add(f);let x=new Je(1.3,1.6,3,1);x.translate(0,2.35,.08);let y=new Ut(x,new Re({color:l.colors.banner,side:Me,flatShading:!0}));y.userData.base=Float32Array.from(x.attributes.position.array),h.add(y);let g=new Ut(new un(1.5,.08,.08),p);g.position.y=3.2,h.add(g),h.traverse(m=>{m.castShadow=s}),this.group.add(h),this.standards.set(c,{g:h,flag:y})}this.ringMat=new ve({color:16769146,transparent:!0,opacity:.85,depthWrite:!1}),this.rings=new Map,this.fx=new el(t)}ringFor(t){let e=this.rings.get(t);if(!e){let n=new Ai(.92,1,40,1);n.rotateX(-Math.PI/2);let s=this.ringMat.clone();s.color.set(t.side===0?16769146:16738906),e=new Ut(n,s),e.renderOrder=3,this.group.add(e),this.rings.set(t,e)}return e}update(t,e,n,s){let r=this.map;for(let o of this.legions){let a=this.defs[o.side+":"+o.typeId],c=o.typeId==="cavalry",l=o.state==="melee",h=o.state==="shoot";for(let f of o.soldiers){if(!f.alive&&f.deadT>2.2){if(f.settled)continue;f.settled=!0}let x=!f.alive,y=x?Math.min(1,f.deadT/.6):0;ci.set(0,f.yaw,0),Ui.setFromEuler(ci);let g=f.y;if(!x&&f.moving&&(g+=Math.abs(Math.sin(f.walk*(c?.9:1.4)))*(c?.12:.07)),x){let b=y*y*(c?1.45:1.5)*f.fall;ci.set(c?0:-b,0,c?b:0),Aa.setFromEuler(ci),Ui.multiply(Aa),g-=y*.15}ou.compose(bs.set(f.x,g,f.z),Ui,Ss.set(1,1,1));let m=f.walk*(c?.9:1.4);for(let b=0;b<a.length;b++){let w=a[b],M=w.r[0],U=w.r[1],C=w.r[2],I=w.p[0],P=w.p[1],u=w.p[2];if(!x)switch(w.anim){case"legL":M+=f.moving?Math.sin(m)*.55:0;break;case"legR":M-=f.moving?Math.sin(m)*.55:0;break;case"hlegF":M+=f.moving?Math.sin(m*1.3)*.6:0;break;case"hlegB":M-=f.moving?Math.sin(m*1.3)*.6:0;break;case"horse":M+=f.moving?Math.sin(m*1.3)*.04:0;break;case"arm":M+=l?-1.4+f.swing*2:.35+(f.moving?Math.sin(m)*.2:0);break;case"pike":M+=l?.02+f.swing*.08:-1.48,l&&(u+=f.swing*.35);break;case"lance":M+=l||o.chargeT>0?.08+f.swing*.2:o.speedCur>o.T.speed*.6?.1:-1.1;break;case"shield":l&&(u+=.08);break;case"bow":(f.shoot>0||h)&&(M-=.5,P+=.15);break}ci.set(M,U,C),Aa.setFromEuler(ci),cu.compose(bs.set(I,P,u),Aa,Ss.set(1,1,1)),oi.multiplyMatrices(ou,cu),this.meshes[w.g].setMatrixAt(f.pi[b],oi)}if(x&&!f.darkened){f.darkened=!0;for(let b=0;b<a.length;b++){let w=this.meshes[a[b].g];w.getColorAt(f.pi[b],Ms),Ms.multiplyScalar(.62),w.setColorAt(f.pi[b],Ms),w.instanceColor.needsUpdate=!0}}}let d=this.standards.get(o);if(o.alive){d.g.visible=!0;let f=o.soldiers.find(b=>b.alive&&b.slot===Math.floor(o.cols/2))||o.soldiers.find(b=>b.alive),x=f?f.x:o.x,y=f?f.z:o.z;d.g.position.set(x-o.fwdX*.2,r.getHeight(x,y)+(o.typeId==="cavalry"?1.3:.4),y-o.fwdZ*.2),d.g.rotation.y=o.face+Math.PI/2;let g=d.flag.geometry.attributes.position,m=d.flag.userData.base;for(let b=0;b<g.count;b++){let w=m[b*3];g.array[b*3+2]=m[b*3+2]+Math.sin(w*3+t*5+o.id)*.12*(w+.65)}g.needsUpdate=!0}else d.g.visible&&(d.g.rotation.z=Math.min(1.4,(d.g.rotation.z||0)+e*2),d.g.rotation.z>=1.4&&(d.g.visible=!1));if((n===o||s===o)&&o.alive){let f=this.ringFor(o);f.visible=!0;let x=Math.max(o.halfW,o.halfD)+1.2;f.scale.set(x,1,x),f.position.set(o.x,r.getHeight(o.x,o.z)+.25,o.z),f.material.opacity=n===o?.65+Math.sin(t*5)*.2:.45}else this.rings.has(o)&&(this.rings.get(o).visible=!1)}for(let o in this.meshes)this.meshes[o].instanceMatrix.needsUpdate=!0;this.fx.update(t,e,r)}dispose(){this.scene.remove(this.group),this.fx.dispose(),this.group.traverse(t=>{t.geometry&&t.geometry.dispose()})}},ws=class{constructor(t,e,n,s){this.mesh=new Ei(e,n,s),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(js),this.items=[],this.n=s,t.add(this.mesh);for(let r=0;r<s;r++)this.mesh.setMatrixAt(r,Ra)}spawn(t){this.items.length<this.n&&this.items.push(t)}},el=class{constructor(t){this.scene=t,this.sparks=new ws(t,new sa(.12),new ve({color:16773296}),260),this.dust=new ws(t,new si(.5,0),new Re({color:13153684,flatShading:!0}),220);let e=new un(.05,.05,1);this.arrows=new ws(t,e,new ve({color:3811866}),420),this.debris=new ws(t,new un(.4,.15,.7),new Re({color:7030054,flatShading:!0}),60),this.battleArrows=[]}burst(t,e,n,s=8,r=!1){for(let o=0;o<s;o++)this.sparks.spawn({x:t,y:e,z:n,vx:(Math.random()-.5)*6,vy:2+Math.random()*4,vz:(Math.random()-.5)*6,life:.35+Math.random()*.25,t:0,s:r?1.6:1})}puff(t,e,n,s=3,r=1){for(let o=0;o<s;o++)this.dust.spawn({x:t+(Math.random()-.5)*2,y:e+.3,z:n+(Math.random()-.5)*2,vx:(Math.random()-.5)*1.5,vy:.6+Math.random(),vz:(Math.random()-.5)*1.5,life:.9+Math.random()*.6,t:0,s:r*(.6+Math.random()*.6)})}splinters(t,e,n){for(let s=0;s<24;s++)this.debris.spawn({x:t,y:e+2+Math.random()*2,z:n+(Math.random()-.5)*5,vx:(Math.random()-.5)*8,vy:3+Math.random()*5,vz:(Math.random()-.5)*8,life:2.5,t:0,rx:Math.random()*6,ry:Math.random()*6})}update(t,e,n){let s=(c,l)=>{let h=c.items,d=0;for(let p=0;p<h.length;p++){let f=h[p];f.t+=e,f.t<f.life&&(h[d++]=f)}h.length=d;for(let p=0;p<c.n;p++)p<h.length?(l(h[p]),c.mesh.setMatrixAt(p,oi)):p<c.lastCount&&c.mesh.setMatrixAt(p,Ra);c.lastCount=h.length,c.mesh.instanceMatrix.needsUpdate=!0};s(this.sparks,c=>{c.vy-=14*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e;let l=(1-c.t/c.life)*c.s;oi.compose(bs.set(c.x,c.y,c.z),Ui.setFromEuler(ci.set(c.t*9,c.t*7,0)),Ss.set(l,l,l))}),s(this.dust,c=>{c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e,c.vy*=.96;let l=Math.sin(c.t/c.life*Math.PI)*c.s;oi.compose(bs.set(c.x,c.y,c.z),Ui.identity(),Ss.set(l,l,l))}),s(this.debris,c=>{c.vy-=14*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e;let l=n.getHeight(c.x,c.z)+.1;c.y<l?(c.y=l,c.vx*=.5,c.vz*=.5,c.vy=0):c.rx+=e*6,oi.compose(bs.set(c.x,c.y,c.z),Ui.setFromEuler(ci.set(c.rx,c.ry,0)),Ss.set(1,1,1))});let r=this.battleArrows,o=this.arrows,a=0;for(let c of r){let l=(this.simTime-c.t0)/c.dur;if(l<0||l>1||a>=o.n)continue;let h=c.x0+(c.x1-c.x0)*l,d=c.z0+(c.z1-c.z0)*l,p=c.y0+(c.y1-c.y0)*l+Math.sin(l*Math.PI)*c.arc,f=c.x1-c.x0,x=c.z1-c.z0,y=c.y1-c.y0+Math.cos(l*Math.PI)*Math.PI*c.arc,g=Math.hypot(f,x),m=Math.atan2(f,x),b=-Math.atan2(y,g);oi.compose(bs.set(h,p,d),Ui.setFromEuler(kg.set(b,m,0)),Ss.set(1,1,1)),o.mesh.setMatrixAt(a++,oi)}for(let c=a;c<(o.lastCount||0);c++)o.mesh.setMatrixAt(c,Ra);o.lastCount=a,o.mesh.instanceMatrix.needsUpdate=!0}dispose(){for(let t of[this.sparks,this.dust,this.arrows,this.debris])this.scene.remove(t.mesh),t.mesh.geometry.dispose()}};var Ia=class{constructor(){this.ctx=null,this.enabled=!0,this.last={}}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*1.5;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;this.startAmbience()}catch{this.ctx=null}}setEnabled(t){this.enabled=t,this.master&&(this.master.gain.value=t?.55:0)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}throttle(t,e){let n=performance.now();return this.last[t]&&n-this.last[t]<e?!1:(this.last[t]=n,!0)}noise(t,e,n,s,r="bandpass",o=0){let a=this.ctx,c=a.currentTime+o,l=a.createBufferSource();l.buffer=this.noiseBuf;let h=a.createBiquadFilter();h.type=r,h.frequency.value=e,h.Q.value=n;let d=a.createGain();return d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(s,c+.01),d.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(h),h.connect(d),d.connect(this.master),l.start(c,Math.random()*1,t+.05),h}tone(t,e,n,s,r=0,o=0){let a=this.ctx,c=a.currentTime+r,l=a.createOscillator();l.type=n,l.frequency.setValueAtTime(t,c),o&&l.frequency.exponentialRampToValueAtTime(t*o,c+e);let h=a.createGain();h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(s,c+.02),h.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h),h.connect(this.master),l.start(c),l.stop(c+e+.05)}play(t,e=1){if(!(!this.ctx||!this.enabled))switch(t){case"click":this.tone(880,.06,"triangle",.08*e);break;case"select":this.tone(520,.07,"triangle",.08*e),this.tone(780,.08,"triangle",.06*e,.05);break;case"place":this.noise(.12,300,1,.25*e,"lowpass");break;case"clash":if(!this.throttle("clash",70))return;this.noise(.09,3200+Math.random()*2e3,8,.18*e),this.tone(1800+Math.random()*900,.14,"square",.015*e);break;case"impact":this.noise(.5,180,.8,.6*e,"lowpass"),this.noise(.25,2500,3,.25*e);break;case"volley":if(!this.throttle("volley",200))return;this.noise(.5,1800,2,.12*e,"bandpass");break;case"arrowhit":if(!this.throttle("ahit",120))return;for(let n=0;n<4;n++)this.noise(.05,900+Math.random()*600,4,.08*e,"bandpass",n*.04+Math.random()*.05);break;case"death":if(!this.throttle("death",160))return;this.noise(.18,260,1.5,.1*e,"lowpass");break;case"gate":if(!this.throttle("gate",250))return;this.noise(.35,140,1,.5*e,"lowpass"),this.tone(70,.3,"sine",.3*e,0,.6);break;case"gatebroken":this.noise(1.4,200,.7,.8*e,"lowpass"),this.noise(.8,900,1,.3*e,"bandpass",.1);break;case"horn":{this.tone(146.8,1.6,"sawtooth",.09*e,0,1),this.tone(146.8*1.5,1.2,"sawtooth",.05*e,.35),this.tone(146.8*2,.9,"sawtooth",.04*e,.9);break}case"retreat":this.tone(330,.3,"sawtooth",.05*e),this.tone(262,.5,"sawtooth",.05*e,.28);break;case"victory":{let n=[392,523,659,784,659,784,1046];n.forEach((s,r)=>this.tone(s,r===n.length-1?1.2:.22,"triangle",.12*e,r*.16)),n.forEach((s,r)=>this.tone(s/2,r===n.length-1?1.2:.22,"sawtooth",.03*e,r*.16));break}case"defeat":{[392,349,311,262].forEach((s,r)=>this.tone(s,.5,"triangle",.1*e,r*.35)),this.tone(131,1.8,"sawtooth",.04*e,.9);break}case"drum":this.tone(90,.25,"sine",.35*e,0,.5),this.noise(.08,400,1,.15*e,"lowpass");break}}startAmbience(){let t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=420;let s=t.createGain();s.gain.value=.035;let r=t.createOscillator();r.frequency.value=.08;let o=t.createGain();o.gain.value=180,r.connect(o),o.connect(n.frequency),e.connect(n),n.connect(s),s.connect(this.master),e.start(),r.start(),this.amb=s}};var nn=(i,t="0 0 48 48")=>`<svg viewBox="${t}" xmlns="http://www.w3.org/2000/svg">${i}</svg>`;function Es(i,t=0){let e=t===0?"#4a8cf0":"#e0473c",n=t===0?"#1f4c9a":"#8e1f1a",s=t===0?"#e3b441":"#cfd3da",r=`<circle cx="24" cy="24" r="22" fill="${n}" opacity=".55"/><circle cx="24" cy="24" r="22" fill="none" stroke="${e}" stroke-width="2"/>`;switch(i){case"legion":return nn(`${r}<rect x="11" y="13" width="15" height="22" rx="3" fill="${e}" stroke="${s}" stroke-width="1.6"/><circle cx="18.5" cy="24" r="2.4" fill="${s}"/>
        <path d="M28 33 L37 12 L39 13 L31 34 Z" fill="#e8edf5"/><path d="M26.5 31 L33.5 34.5" stroke="${s}" stroke-width="2.6" stroke-linecap="round"/>`);case"pike":return nn(`${r}<path d="M13 38 L35 9" stroke="#caa06a" stroke-width="2.4" stroke-linecap="round"/><path d="M35 9 L38 5 L37.5 11.5 Z" fill="#e8edf5"/>
        <path d="M20 38 L38 15" stroke="#caa06a" stroke-width="2.4" stroke-linecap="round"/><path d="M38 15 L41 11 L40.5 17.5 Z" fill="#e8edf5"/>
        <circle cx="16" cy="28" r="6" fill="${e}" stroke="${s}" stroke-width="1.6"/>`);case"archer":return nn(`${r}<path d="M16 9 Q34 24 16 39" fill="none" stroke="#caa06a" stroke-width="2.8" stroke-linecap="round"/><path d="M16 9 L16 39" stroke="#f0ead8" stroke-width="1"/>
        <path d="M13 24 L37 24" stroke="#e8edf5" stroke-width="1.8"/><path d="M37 24 L32 21 L32 27 Z" fill="#e8edf5"/><path d="M13 24 L10 21 M13 24 L10 27" stroke="${s}" stroke-width="1.6"/>`);case"cavalry":return nn(`${r}<path d="M14 38 L16 27 Q15 18 22 13 L25 8 L27 13 Q34 14 36 22 L34 25 L29 22 L27 26 Q30 31 28 38 Z" fill="${e}" stroke="${s}" stroke-width="1.6" stroke-linejoin="round"/>
        <circle cx="29" cy="17" r="1.4" fill="${s}"/><path d="M22 13 Q17 19 18 27" stroke="${s}" stroke-width="2" fill="none"/>`);case"guard":return nn(`${r}<rect x="13" y="9" width="22" height="30" rx="3" fill="${e}" stroke="${s}" stroke-width="2"/><path d="M24 11 L24 37 M15 24 L33 24" stroke="${s}" stroke-width="1.8"/>
        <circle cx="24" cy="24" r="3.4" fill="${s}"/>`)}return""}function lu(i){let t='stroke="#f5d27a" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"';switch(i){case"random":return nn(`<rect x="9" y="9" width="30" height="30" rx="6" ${t}/><circle cx="17" cy="17" r="2.4" fill="#f5d27a"/><circle cx="31" cy="31" r="2.4" fill="#f5d27a"/><circle cx="24" cy="24" r="2.4" fill="#f5d27a"/><circle cx="31" cy="17" r="2.4" fill="#f5d27a"/><circle cx="17" cy="31" r="2.4" fill="#f5d27a"/>`);case"assault":return nn(`<path d="M8 40 L8 18 L12 18 L12 14 L16 14 L16 18 L20 18 L20 14 L24 14 L24 18 L28 18 L28 14 L32 14 L32 18 L36 18 L36 14 L40 14 L40 40 Z" ${t}/><path d="M20 40 L20 30 Q24 25 28 30 L28 40" ${t}/><path d="M34 6 L42 12 M42 6 L34 12" stroke="#e0473c" stroke-width="2.4" stroke-linecap="round"/>`);case"defend":return nn(`<path d="M24 6 L39 11 L37 28 Q33 37 24 42 Q15 37 11 28 L9 11 Z" ${t}/><path d="M17 24 L22 29 L31 18" stroke="#4a8cf0" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`);case"canyon":return nn(`<path d="M4 14 L14 14 L18 22 L16 40 L4 40 Z" ${t}/><path d="M44 12 L32 12 L29 22 L32 40 L44 40 Z" ${t}/><path d="M21 40 Q24 30 22 22 Q25 17 27 14" stroke="#caa06a" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`);case"river":return nn(`<path d="M6 16 Q12 12 18 16 T30 16 T42 16" ${t}/><path d="M6 24 Q12 20 18 24 T30 24 T42 24" stroke="#6ab4f0" stroke-width="2" fill="none"/><path d="M6 32 Q12 28 18 32 T30 32 T42 32" ${t}/><path d="M16 38 Q24 30 32 38" stroke="#caa06a" stroke-width="2.4" fill="none"/>`);case"hill":return nn(`<path d="M4 40 Q24 8 44 40 Z" ${t}/><rect x="18" y="18" width="3" height="7" fill="#f5d27a"/><rect x="23" y="16" width="3" height="8" fill="#f5d27a"/><rect x="28" y="18" width="3" height="7" fill="#f5d27a"/>`);case"forest":return nn(`<path d="M14 40 L14 34 M14 34 L6 34 L14 20 L22 34 Z M9 26 L14 14 L19 26" ${t}/><path d="M32 40 L32 32 M32 32 L22 32 L32 12 L42 32 Z M26 22 L32 8 L38 22" ${t}/>`)}return""}var nl={melee:"\u2694",shoot:"\u27B6",retreat:"\u21A9",regroup:"\u26FA",wait:"\u23F3",hold:"\u26E8",move:"\u279C",engage:"\u279C",kite:"\u21B6",breach:"\u2692",idle:"\xB7",dead:"\u271D"},Ts=["I","II","III","IV","V","VI","VII","VIII"];var xt=i=>document.querySelector(i),rr=i=>Array.from(document.querySelectorAll(i)),En={get(i,t){try{let e=localStorage.getItem("legionen."+i);return e?JSON.parse(e):t}catch{return t}},set(i,t){try{localStorage.setItem("legionen."+i,JSON.stringify(t))}catch{}}},hu={high:{shadows:!0,shadowSize:2048,pixelRatio:2,aa:!0},medium:{shadows:!0,shadowSize:1024,pixelRatio:1.5,aa:!0},low:{shadows:!1,shadowSize:512,pixelRatio:1,aa:!1}},Be=Object.assign({sound:!0,quality:"high"},En.get("settings",{})),Pe=Object.assign({wins:0,losses:0,streak:0,best:0},En.get("stats",{})),Lt=new xa(xt("#c"),hu[Be.quality]||hu.high),qt=new Ia;qt.setEnabled(Be.sound);var D={phase:"loading",cfg:Object.assign({scenario:"random",biome:"random",diff:"normal",army:["legion","legion","archer","cavalry"]},En.get("cfg",{})),cur:null,selected:null,speed:1,paused:!1,mode:null,tab:"move",slotSel:0,last:null};function Og(i){let t=pn(Math.random()*1e9|0),e=i.scenario==="random"?t.pick(Xc):i.scenario,n=i.biome==="random"?t.pick(Object.keys(bn)):i.biome;return{scenario:e,biome:n,diff:i.diff,army:i.army.slice(),seed:Math.random()*1e9|0}}function pu(i){Bg(),su();let t=new Ma(i.scenario,i.biome,i.seed);Lt.setupEnvironment(i.biome,t.fogDensity),Lt.groundFn=(g,m)=>t.terrainHeight(g,m);let e=eu(t,Lt.scene),n=pn(i.seed+7),s=Ii[i.diff],r=i.demo?jc(["legion","archer","cavalry","pike"],i.scenario,n):i.army,o=r.map((g,m)=>{let b=new er(0,g,0,0,1);return b.index=m,b}),a=i.botTypes||jc(r,i.scenario,n),c=au(r,a,i.demo?1:s.size),l=a.map((g,m)=>{let b=new er(1,g,0,0,c);return b.index=m,b}),h=[...o,...l];Ta(o,t.zones[0],0,t,n),Ta(l,t.zones[1],1,t,n),tl(l,i.scenario,t,i.diff,n),i.demo&&tl(o,i.scenario,t,"normal",n);let d=new Ea(t,h,ps[i.scenario]),p=new nr(d,i.diff,n),f=new Ca(Lt.scene,h,t,Lt.quality.shadows),x=new _a(Lt.scene,t),y={opts:i,map:t,world:e,legions:h,player:o,bot:l,battle:d,brain:p,units:f,overlays:x,labels:new Map,time:0,dustT:0};return i.demo&&(y.brain0=new nr(d,"normal",n,0)),D.cur=y,Hg(y),x.showZones(!1),y}function Bg(){let i=D.cur;i&&(Lt.scene.remove(i.world.group),i.world.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose&&t.material.dispose()}),i.units.dispose(),i.overlays.dispose(),xt("#labels").innerHTML="",D.cur=null,D.selected=null,D.mode=null)}function wn(i){return`${Ts[i.index]||i.index+1}. ${i.name}`}function Hg(i){let t=xt("#labels");t.innerHTML="";for(let e of i.legions){let n=document.createElement("div");n.className="lbl"+(e.side===1?" e":""),n.innerHTML=`<div class="plate">${Es(e.typeId,e.side)}<span class="n">${Ts[e.index]}</span><span class="c">${e.count}</span><span class="s"></span></div><div class="hpb"><i></i></div>`,n.addEventListener("pointerdown",s=>{s.stopPropagation(),vu(s,e)}),t.appendChild(n),i.labels.set(e,{el:n,c:n.querySelector(".c"),s:n.querySelector(".s"),hp:n.querySelector(".hpb i"),lastC:-1,lastS:""})}if(i.map.gate){let e=document.createElement("div");e.className="gatelbl",e.innerHTML='Burgtor<div class="hpb"><i></i></div>',t.appendChild(e),i.gateLbl={el:e,hp:e.querySelector("i")}}}var sn={x:0,y:0,visible:!1};function Vg(i){let t=D.phase==="deploy"||D.phase==="orders"||D.phase==="battle";for(let e of i.legions){let n=i.labels.get(e);if(!t||!e.alive){n.el.style.display!=="none"&&(n.el.style.display="none");continue}let s=i.map.getHeight(e.x,e.z)+(e.typeId==="cavalry"?5.2:4.4);if(Lt.project(e.x,s,e.z,sn),!sn.visible||sn.x<-60||sn.y<-60||sn.x>innerWidth+60||sn.y>innerHeight+60){n.el.style.display="none";continue}n.el.style.display="",n.el.style.transform=`translate(${sn.x.toFixed(1)}px, ${sn.y.toFixed(1)}px) translate(-50%, -100%)`,n.lastC!==e.count&&(n.c.textContent=e.count,n.hp.style.width=(e.ratio*100).toFixed(0)+"%",n.lastC=e.count);let r=D.phase==="battle"&&nl[e.state]||"";n.lastS!==r&&(n.s.textContent=r,n.lastS=r);let o=D.selected===e,a=D.selected&&D.selected.side===0&&D.selected.orders.target==="legion"&&D.selected.orders.targetId===e.id;n.el.classList.toggle("sel",o),n.el.classList.toggle("tgt",!!a)}if(i.gateLbl){let e=i.map.gate;t&&e.alive&&D.phase==="battle"&&e.hp<e.maxHp?(Lt.project(e.x,i.map.castle.base+8,e.z,sn),i.gateLbl.el.style.display=sn.visible?"":"none",i.gateLbl.el.style.left=sn.x+"px",i.gateLbl.el.style.top=sn.y+"px",i.gateLbl.hp.style.width=(e.hp/e.maxHp*100).toFixed(0)+"%"):i.gateLbl.el.style.display="none"}}function za(i){for(let t of rr(".screen"))t.id!=="dlg"&&t.classList.toggle("show",t.id===i)}function Ua(){D.phase="menu",D.paused=!1,xt("#hud").classList.add("hidden"),za("scr-menu"),xt("#menu-stats").innerHTML=Pe.wins+Pe.losses>0?`Siege <b>${Pe.wins}</b> \xB7 Niederlagen <b>${Pe.losses}</b> \xB7 Beste Serie <b>${Pe.best}</b>`:"Deine erste Schlacht wartet.",mu()}function mu(){let i=pn(Math.random()*1e9|0),t=i.pick(["canyon","river","hill","forest","river","hill"]),e=i.pick(Object.keys(bn)),n=pu({scenario:t,biome:e,diff:"normal",army:[],seed:Math.random()*1e9|0,demo:!0});n.battle.begin(),n.battle.events.length=0,D.demo=!0,D.speed=1,Lt.cam.tx=0,Lt.cam.tz=0,Lt.cam.tdist=78,Lt.cam.tpitch=.62,Lt.cam.tyaw=i.range(-.6,.6)}function Gg(){D.phase="setup",za("scr-setup"),gu()}function gu(){let i=D.cfg,t=xt("#scen-grid");t.innerHTML=["random",...Xc].map(n=>`<div class="scen ${i.scenario===n?"on":""}" data-s="${n}">${lu(n)}<span>${n==="random"?"Zufall":ps[n].name}</span></div>`).join(""),xt("#scen-desc").textContent=i.scenario==="random"?"Ein zuf\xE4lliges Szenario auf einer zuf\xE4lligen Karte \u2013 lass dich \xFCberraschen.":ps[i.scenario].desc,xt("#biome-chips").innerHTML=[["random","Zufall"],...Object.entries(bn).map(([n,s])=>[n,s.name])].map(([n,s])=>`<button class="chip ${i.biome===n?"on":""}" data-b="${n}">${s}</button>`).join(""),xt("#diff-chips").innerHTML=Object.entries(Ii).map(([n,s])=>`<button class="chip ${i.diff===n?"on":""}" data-d="${n}">${s.name}</button>`).join("");let e=[];for(let n=0;n<5;n++){let s=i.army[n],r=D.slotSel===n?" sel":"";s?e.push(`<div class="slot filled${r}" data-slot="${n}"><span class="num">${Ts[n]}</span>${Es(s,0)}<span>${fn[s].names[0]}</span><small>${fn[s].size} Mann</small>${i.army.length>1?`<span class="x" data-rm="${n}">\u2715</span>`:""}</div>`):e.push(`<div class="slot${r}" data-slot="${n}"><span class="plus">+</span><span>Legion</span></div>`)}xt("#army-slots").innerHTML=e.join(""),xt("#type-grid").innerHTML=Wh.map(n=>{let s=fn[n],r=Object.entries(s.stats).map(([o,a])=>`<span>${o}</span><div class="bar"><i style="width:${a*20}%"></i></div>`).join("");return`<div class="tcard" data-t="${n}">${Es(n,0)}<div><b>${s.names[0]} <span style="color:var(--muted);font-weight:400;font-size:11px">\xB7 ${s.size} Mann</span></b><small>${s.desc[0]}</small></div><div class="bars">${r}</div></div>`}).join(""),En.set("cfg",i)}xt("#scr-setup").addEventListener("click",i=>{let t=D.cfg,e=i.target.closest("[data-s]"),n=i.target.closest("[data-b]"),s=i.target.closest("[data-d]"),r=i.target.closest("[data-rm]"),o=i.target.closest("[data-slot]"),a=i.target.closest("[data-t]");if(e)t.scenario=e.dataset.s;else if(n)t.biome=n.dataset.b;else if(s)t.diff=s.dataset.d;else if(r)t.army.splice(+r.dataset.rm,1),D.slotSel=Math.min(t.army.length,4);else if(o)D.slotSel=Math.min(+o.dataset.slot,t.army.length);else if(a){let c=D.slotSel;c<t.army.length?t.army[c]=a.dataset.t:t.army.length<5&&t.army.push(a.dataset.t),D.slotSel=Math.min(t.army.length,4),t.army.length===5&&c===4&&(D.slotSel=4)}else return;qt.play("click"),gu()});function uu(i){qt.unlock(),D.demo=!1;let t=Og(i);D.last=t,sl(t)}function sl(i){let t=pu(i);D.phase="deploy",D.paused=!1,D.speed=1,za(null),xt("#hud").classList.remove("hidden"),t.overlays.showZones(!0);let e=t.map.zones[0];Lt.cam.tyaw=0,Lt.cam.tpitch=.95,Lt.focus((e.x0+e.x1)/2*.45,2,100),An(),li(null),rn("Legion ziehen \u2013 oder antippen und Zielort tippen \xB7 gelber Pfeil = drehen"),xt("#feed").innerHTML=""}function Wg(){let i=D.cur;D.phase="orders",i.overlays.showZones(!1),An(),li(i.player[0]),rn("W\xE4hle eine Legion und lege Marschroute, Angriff und R\xFCckzug fest"),Tn()}function Xg(){let i=D.cur;D.phase="battle",D.mode=null,i.battle.begin(),i.overlays.clearRoutes(),An(),rn(""),hi(),D.selected=null,al("ZUM ANGRIFF!"),qt.play("drum"),setTimeout(()=>qt.play("drum"),350)}function An(){let i=D.cur,t=D.phase,e=ps[i.opts.scenario];xt("#hud-phase").textContent=t==="deploy"?`Aufstellung \xB7 ${e.name}`:t==="orders"?`Befehle \xB7 ${e.name}`:e.name,xt("#hud-goal").textContent=e.goal+` (${bn[i.opts.biome].name})`,xt("#hud-battle").style.visibility=t==="battle"?"visible":"hidden",xt("#speed-ctl").style.display=t==="battle"?"":"none",xt("#hud-time").style.display=t==="battle"?"":"none",xt("#pause-banner").classList.toggle("show",t==="battle"&&D.paused),xt("#btn-pause").classList.toggle("on",D.paused);for(let n of rr("[data-speed]"))n.classList.toggle("on",+n.dataset.speed===D.speed);xt("#btn-sound").textContent=Be.sound?"\u{1F50A}":"\u{1F507}",qg(),Gn()}function Gn(){let i=xt("#actions");if(D.mode==="waypoints"){i.innerHTML='<button class="btn" data-a="wp-clear">Zur\xFCcksetzen</button><button class="btn primary" data-a="wp-done">\u2713 Route fertig</button>';return}if(D.mode==="pickTarget"){i.innerHTML='<button class="btn" data-a="mode-cancel">Abbrechen</button>';return}switch(D.phase){case"deploy":{let t=D.selected&&D.selected.side===0?D.selected:null,e=t?{line:"Linie",block:"Block",wedge:"Keil"}[t.orders.formation]:"Formation";i.innerHTML=`<button class="btn" data-a="auto">Auto</button><button class="btn icon" data-a="rotL" ${t?"":"disabled"} aria-label="Links drehen">\u27F2</button><button class="btn icon" data-a="rotR" ${t?"":"disabled"} aria-label="Rechts drehen">\u27F3</button><button class="btn" data-a="form" ${t?"":"disabled"}>\u25A6 ${e}</button><button class="btn primary" data-a="to-orders">Befehle \u25B6</button>`}break;case"orders":i.innerHTML='<button class="btn" data-a="to-deploy">\u25C0 Aufstellung</button><button class="btn primary" data-a="fight">\u2694 Schlacht beginnen</button>';break;case"battle":i.innerHTML=D.selected&&D.selected.side===0&&D.selected.alive&&!xt("#orders").classList.contains("show")?'<button class="btn" data-a="open-orders">Befehle</button>':"";break;default:i.innerHTML=""}}xt("#actions").addEventListener("click",i=>{let t=i.target.closest("[data-a]");if(!t)return;let e=D.cur;switch(qt.play("click"),t.dataset.a){case"auto":{for(let n of e.player)n.placed=!1;Ta(e.player,e.map.zones[0],0,e.map,pn(Date.now()|0)),gn("Legionen automatisch aufgestellt");break}case"rotL":case"rotR":D.selected&&(D.selected.face+=(t.dataset.a==="rotL"?1:-1)*Math.PI/6,D.selected.formDirty=!0);break;case"form":if(D.selected){let n=["line","block","wedge"],s=D.selected;s.orders.formation=n[(n.indexOf(s.orders.formation)+1)%3],s.formDirty=!0,gn(`${wn(s)}: Formation ${{line:"Linie",block:"Block",wedge:"Keil"}[s.orders.formation]}`),Gn()}break;case"to-orders":Wg();break;case"to-deploy":hi(),e.overlays.clearRoutes(),D.phase="deploy",e.overlays.showZones(!0),An(),rn("Legion ziehen \u2013 oder antippen und Zielort tippen \xB7 gelber Pfeil = drehen");break;case"fight":Xg();break;case"wp-clear":D.selected&&(D.selected.orders.waypoints=[],Tn());break;case"wp-done":yu();break;case"mode-cancel":D.mode=null,rn(""),D.selected&&(D.selected.orders.target==="legion"&&D.selected.orders.targetId<0&&(D.selected.orders.target="nearest"),Rs(D.selected)),Gn();break;case"open-orders":D.selected&&Rs(D.selected);break}});function qg(){let i=D.cur,t=xt("#roster");t.innerHTML=i.player.map((e,n)=>`<div class="lchip" data-l="${n}">${Es(e.typeId,0)}<div class="t"><b>${Ts[e.index]}. ${e.name}</b><span class="cnt">${e.count}/${e.maxCount}</span></div><span class="st"></span><div class="hp"><i style="width:${e.ratio*100}%"></i></div></div>`).join(""),D.rosterEls=rr("#roster .lchip").map(e=>({el:e,cnt:e.querySelector(".cnt"),st:e.querySelector(".st"),hp:e.querySelector(".hp i")})),Da()}function Da(){let i=D.cur;!i||!D.rosterEls||i.player.forEach((t,e)=>{let n=D.rosterEls[e];if(!n)return;n.el.classList.toggle("sel",D.selected===t),n.el.classList.toggle("dead",!t.alive),n.cnt.textContent=`${t.count}/${t.maxCount}`,n.hp.style.width=(t.ratio*100).toFixed(0)+"%";let s=D.phase==="battle"?nl[t.state]||"":t.orders.delay?"\u23F3":"";n.st.textContent=s,n.st.style.display=s?"":"none"})}xt("#roster").addEventListener("click",i=>{let t=i.target.closest("[data-l]");if(!t)return;let e=D.cur.player[+t.dataset.l];e.alive&&(qt.play("select"),D.selected===e&&Lt.focus(e.x,e.z,Math.min(Lt.cam.tdist,60)),li(e,!0))});function li(i,t=!1){if(D.selected=i,i&&i.side===0&&(D.phase==="orders"||D.phase==="battle")?Rs(i):hi(),i&&i.side===1){let e=fn[i.typeId];gn(`Feind: ${wn(i)} \xB7 ${i.count} Mann`)}t&&i&&D.phase==="battle"&&Lt.focus(i.x,i.z),Da(),Gn(),D.phase==="orders"&&Tn()}var xu={move:[{key:"move",label:"Marschroute",opts:[["advance","Vorr\xFCcken"],["hold","Halten"],["flankL","\u21B0 Flanke links"],["flankR","Flanke rechts \u21B1"],["path","\u270E Eigene Route"]],help:{advance:"R\xFCckt direkt auf das gew\xE4hlte Ziel vor.",hold:"H\xE4lt die Stellung und greift nur Feinde in der N\xE4he an.",flankL:"Weiter Bogen links herum \u2013 Angriff in Flanke oder R\xFCcken (+30 % / +60 %).",flankR:"Weiter Bogen rechts herum \u2013 Angriff in Flanke oder R\xFCcken (+30 % / +60 %).",path:"Tippe bis zu 4 Wegpunkte auf die Karte. Danach wird das Ziel angegriffen."}},{key:"formation",label:"Formation",opts:[["line","Linie"],["block","Block"],["wedge","Keil"]],help:{line:"Breite Front \u2013 ausgewogen, viele K\xE4mpfer im Kontakt.",block:"Kompakt: +15 % Verteidigung, weniger Pfeilschaden, etwas langsamer.",wedge:"Keil: +10 % Angriff, st\xE4rkerer Sturmangriff, aber verwundbarer."}},{key:"delay",label:"Startsignal",opts:[[0,"Sofort"],[5,"+5 s"],[10,"+10 s"],[20,"+20 s"]],help:{0:"Marschiert beim Hornsignal los.",5:"Wartet 5 Sekunden \u2013 gut f\xFCr gestaffelte Angriffe.",10:"Wartet 10 Sekunden \u2013 z. B. bis die Front gebunden ist.",20:"Wartet 20 Sekunden \u2013 ideal als Reserve oder Hinterhalt."}}],attack:[{key:"target",label:"Angriffsziel",opts:[["nearest","N\xE4chster"],["weakest","Schw\xE4chster"],["strongest","St\xE4rkster"],["ranged","Fernk\xE4mpfer"],["legion","\u25CE Legion w\xE4hlen"],["objective","Zielgebiet"]],help:{nearest:"Greift den n\xE4chstgelegenen Feind an.",weakest:"Sucht angeschlagene Legionen, um sie zu vernichten.",strongest:"Bindet die st\xE4rkste feindliche Legion.",ranged:"Jagt Bogensch\xFCtzen \u2013 ideal f\xFCr Reiterei.",legion:"Tippe auf eine feindliche Legion als festes Ziel.",objective:"Zieht zum Missionsziel und h\xE4lt es."}},{key:"stance",label:"Haltung",opts:[["aggressive","Aggressiv"],["balanced","Ausgewogen"],["defensive","Defensiv"]],help:{aggressive:"+15 % Angriff, \u221210 % Verteidigung, verfolgt Feinde weit.",balanced:"Ausgewogenes Verhalten.",defensive:"+20 % Verteidigung, \u221210 % Angriff, bleibt eher in Position."}},{key:"skirmish",label:"Ausweichen (Sch\xFCtzen)",only:"archer",opts:[[!0,"An"],[!1,"Aus"]],help:{true:"Weicht anr\xFCckender Infanterie aus und schie\xDFt weiter.",false:"Bleibt stehen und schie\xDFt, bis der Feind da ist."}}],retreat:[{key:"retreatAt",label:"R\xFCckzug bei St\xE4rke",opts:[[0,"Nie"],[.25,"unter 25 %"],[.5,"unter 50 %"]],help:{0:"K\xE4mpft bis zum letzten Mann.",.25:"Zieht sich bei schweren Verlusten zur\xFCck.",.5:"Zieht sich fr\xFCh zur\xFCck, um die Legion zu retten."}},{key:"retreatTo",label:"R\xFCckzug nach",opts:[["camp","Ins Lager"],["ally","Zu Verb\xFCndeten"]],help:{camp:"Flieht zum eigenen Lager (bei Burgen: zum Burghof).",ally:"Zieht sich hinter die n\xE4chste eigene Legion zur\xFCck."}},{key:"afterRetreat",label:"Nach dem Sammeln",opts:[["hold","Stellung halten"],["return","Erneut angreifen"]],help:{hold:"Sammelt sich und verteidigt die Position.",return:"Sammelt sich und kehrt in den Kampf zur\xFCck."}}]};function Rs(i){let t=D.cur;xt("#orders").classList.add("show"),document.body.classList.add("orders-open"),xt("#oh-icon").innerHTML=Es(i.typeId,0),xt("#oh-name").textContent=wn(i);let e=fn[i.typeId];xt("#oh-sub").textContent=`${i.count}/${i.maxCount} Mann \xB7 ${e.desc[0]}`;for(let n of rr("#tabs button"))n.classList.toggle("on",n.dataset.tab===D.tab);_u(i),Gn()}function hi(){xt("#orders").classList.remove("show"),document.body.classList.remove("orders-open"),Gn()}function _u(i){let t=D.cur,e=t.map.objective,n=i.orders,s=xu[D.tab].filter(r=>!r.only||r.only===i.typeId);xt("#tab-body").innerHTML=s.map(r=>{let o=r.opts;r.key==="target"&&(o=o.filter(([h])=>h!=="objective"||e).map(([h,d])=>[h,h==="objective"?e.type==="keep"?"\u{1F3F0} Burghof":"\u26F0 Steinkreis":d]));let a=n[r.key],c=o.map(([h,d])=>`<button class="chip ${String(a)===String(h)?"on":""}" data-k="${r.key}" data-v="${h}">${d}</button>`).join(""),l="";if(r.key==="target"&&a==="legion"){let h=t.legions.find(d=>d.id===n.targetId&&d.alive);l=h?` Ziel: <b>${wn(h)}</b>`:" Noch kein Ziel gew\xE4hlt."}return r.key==="move"&&a==="path"&&(l=` ${n.waypoints.length}/4 Wegpunkte gesetzt.`),`<div class="og"><label>${r.label}</label><div class="chips">${c}</div><p>${r.help[String(a)]||""}${l}</p></div>`}).join("")}xt("#tabs").addEventListener("click",i=>{let t=i.target.closest("[data-tab]");!t||!D.selected||(D.tab=t.dataset.tab,qt.play("click"),Rs(D.selected))});xt("#oh-close").addEventListener("click",()=>{hi(),qt.play("click")});xt("#tab-body").addEventListener("click",i=>{let t=i.target.closest("[data-k]"),e=D.selected;if(!t||!e)return;let n=t.dataset.k,s=t.dataset.v;(n==="delay"||n==="retreatAt")&&(s=+s),n==="skirmish"&&(s=s==="true"),e.orders[n]=s,qt.play("click"),n==="move"&&s==="path"?(e.orders.waypoints=[],D.mode="waypoints",rn("Tippe bis zu 4 Wegpunkte auf die Karte"),hi()):n==="target"&&s==="legion"?(D.mode="pickTarget",rn("Tippe auf eine feindliche (rote) Legion"),hi()):D.mode&&(D.mode=null,rn("")),n==="formation"&&(e.formDirty=!0),D.phase==="battle"&&D.mode!=="waypoints"&&D.cur.battle.applyOrders(e),_u(e),Gn(),Tn()});xt("#btn-copy").addEventListener("click",()=>{let i=D.selected;if(!i)return;let t=xu[D.tab].map(e=>e.key).filter(e=>e!=="move"&&e!=="target"&&e!=="skirmish");D.tab==="attack"&&t.push("target");for(let e of D.cur.player)if(!(e===i||!e.alive)){for(let n of t){if(n==="target"&&i.orders.target==="legion"){e.orders.target="legion",e.orders.targetId=i.orders.targetId;continue}e.orders[n]=i.orders[n]}D.tab==="move"&&(e.orders.formation=e.typeId==="cavalry"&&i.orders.formation==="line"?"wedge":i.orders.formation,e.formDirty=!0),D.phase==="battle"&&D.cur.battle.applyOrders(e)}qt.play("select"),gn("Einstellungen f\xFCr alle Legionen \xFCbernommen"),Tn()});function yu(){let i=D.selected;D.mode=null,rn(""),i&&!i.orders.waypoints.length&&(i.orders.move="advance",gn("Keine Wegpunkte \u2013 Legion r\xFCckt direkt vor")),i&&D.phase==="battle"&&D.cur.battle.applyOrders(i),i&&Rs(i),Gn(),Tn()}function Tn(){let i=D.cur;if(!i)return;let t=i.overlays;if(t.clearRoutes(),D.phase!=="orders"&&!(D.phase==="battle"&&D.selected))return;let e=D.phase==="orders"?i.player:[D.selected];for(let n of e){if(!n.alive||n.side!==0)continue;let s=n===D.selected;if(D.phase==="orders"){let{pts:r,target:o}=i.battle.previewRoute(n);r.length>1&&t.addRoute(r,s?16765802:6988543,!s,s?.8:.55),s&&o&&t.addMarker(o.x,o.z,16734794,Math.max(o.halfW,o.halfD)+1.6),n.orders.move==="hold"&&s&&t.addMarker(n.x,n.z,6988543,i.battle.aggroRadius(n))}else{let r=[[n.x,n.z],...n.path];if(n.wp)for(let a=n.wpIdx;a<n.wp.length;a++)r.push(n.wp[a]);r.length>1&&t.addRoute(r,16765802,!1,.7);let o=n.melee||n.target;o&&o.alive&&t.addMarker(o.x,o.z,16734794,Math.max(o.halfW,o.halfD)+1.6)}s&&n.orders.move==="path"&&n.orders.waypoints.forEach((r,o)=>t.addFlag(r[0],r[1],16765802))}}var mn=new Map,zt=null,rl=xt("#c");function Cs(i,t){let e=D.cur;return e?Lt.pick(i,t,e.world.water?[e.world.terrain,e.world.water]:[e.world.terrain]):null}function Yg(i,t,e=0){let n=D.cur,s=Cs(i,t);if(!s)return null;let r=null,o=1e9;for(let a of n.legions){if(!a.alive)continue;let c=Math.hypot(a.x-s.x,a.z-s.z),l=Math.max(a.halfW,a.halfD)+2.5+(a.side===0?e:0);c<l&&c<o&&(o=c,r=a)}return r}function vu(i,t=null){if(qt.unlock(),!(D.phase==="menu"||D.phase==="setup"||D.phase==="result"||D.phase==="loading")){if(mn.set(i.pointerId,{x:i.clientX,y:i.clientY}),mn.size===1){let e=t,n=!1,s=Cs(i.clientX,i.clientY);if(D.phase==="deploy"&&D.selected&&D.selected.side===0&&s){let r=D.selected,o=s.x-r.x,a=s.z-r.z,c=o*r.fwdX+a*r.fwdZ,l=o*r.fwdZ-a*r.fwdX,h=Math.abs(c)<r.halfD+.8&&Math.abs(l)<r.halfW+.8,d=r.x+r.fwdX*(r.halfD+3.2),p=r.z+r.fwdZ*(r.halfD+3.2);!h&&Math.hypot(s.x-d,s.z-p)<3.4?(e=r,n=!0):h&&!e&&(e=r)}e||(e=Yg(i.clientX,i.clientY,D.phase==="deploy"?1.5:0)),zt={type:"tap",sx:i.clientX,sy:i.clientY,lx:i.clientX,ly:i.clientY,t:performance.now(),legion:e,button:i.button,turn:n,g0:s}}else if(mn.size===2){let[e,n]=[...mn.values()];zt={type:"pinch",d:Math.hypot(e.x-n.x,e.y-n.y),ang:Math.atan2(n.y-e.y,n.x-e.x),mx:(e.x+n.x)/2,my:(e.y+n.y)/2}}}}rl.addEventListener("pointerdown",i=>vu(i));window.addEventListener("pointermove",i=>{let t=mn.get(i.pointerId);if(!t||!zt)return;if(t.x=i.clientX,t.y=i.clientY,zt.type==="pinch"&&mn.size>=2){let[r,o]=[...mn.values()],a=Math.hypot(r.x-o.x,r.y-o.y),c=Math.atan2(o.y-r.y,o.x-r.x),l=(r.x+o.x)/2,h=(r.y+o.y)/2;a>10&&Lt.zoom(zt.d/a);let d=c-zt.ang;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),Lt.rotate(-d);let p=l-zt.mx,f=h-zt.my;Math.abs(a-zt.d)<4&&Math.abs(f)>Math.abs(p)*1.5?Lt.tilt(f*.004):Lt.pan(p,f),zt.d=a,zt.ang=c,zt.mx=l,zt.my=h;return}let e=i.clientX-zt.lx,n=i.clientY-zt.ly;zt.lx=i.clientX,zt.ly=i.clientY;let s=Math.hypot(i.clientX-zt.sx,i.clientY-zt.sy);if(zt.type==="tap"&&s>9){let r=zt.legion;D.phase==="deploy"&&r&&r.side===0&&zt.button!==2?(zt.type=zt.turn?"turn":"drag",zt.off=zt.g0?[r.x-zt.g0.x,r.z-zt.g0.z]:[0,0],D.selected!==r&&li(r)):zt.type=zt.button===2?"rotate":"pan"}zt.type==="pan"?Lt.pan(e,n):zt.type==="rotate"?(Lt.rotate(-e*.006),Lt.tilt(n*.004)):zt.type==="drag"?(Jg(i.clientX,i.clientY),$g(zt.legion,i.clientX,i.clientY,zt.off)):zt.type==="turn"&&Zg(zt.legion,i.clientX,i.clientY)});var Mu=i=>{mn.has(i.pointerId)&&(mn.delete(i.pointerId),zt&&(zt.type==="tap"&&mn.size===0&&performance.now()-zt.t<450&&Kg(i.clientX,i.clientY,zt.legion),zt.type==="drag"&&(Su(zt.legion),qt.play("place")),mn.size===0?zt=null:zt.type==="pinch"&&(zt={type:"none"})))};window.addEventListener("pointerup",Mu);window.addEventListener("pointercancel",Mu);rl.addEventListener("contextmenu",i=>i.preventDefault());rl.addEventListener("wheel",i=>{i.preventDefault(),Lt.zoom(i.deltaY>0?1.1:.9)},{passive:!1});window.addEventListener("keydown",i=>{if(!D.cur)return;let t=i.key;(t==="ArrowLeft"||t==="a")&&Lt.pan(40,0),(t==="ArrowRight"||t==="d")&&Lt.pan(-40,0),(t==="ArrowUp"||t==="w")&&Lt.pan(0,40),(t==="ArrowDown"||t==="s")&&Lt.pan(0,-40),t==="q"&&Lt.rotate(.15),t==="e"&&Lt.rotate(-.15),t===" "&&D.phase==="battle"&&Ru()});function bu(i,t){let e=D.cur,n=e.map.zones[0],s=(a,c)=>e.map.isPassable(a,c,0)&&e.map.clearanceAt(a,c)>=2.5,r=a=>Math.max(n.x0+3,Math.min(n.x1-3,a)),o=a=>Math.max(n.z0+3,Math.min(n.z1-3,a));if(i=r(i),t=o(t),s(i,t))return[i,t];for(let a=1;a<=12;a+=1)for(let c=0;c<16;c++){let l=r(i+Math.cos(c*Math.PI/8)*a),h=o(t+Math.sin(c*Math.PI/8)*a);if(s(l,h))return[l,h]}return null}function $g(i,t,e,n=[0,0]){let s=Cs(t,e);if(!s)return;let r=bu(s.x+n[0],s.z+n[1]);r&&(i.x=r[0],i.z=r[1])}function Zg(i,t,e){let n=Cs(t,e);if(!n)return;let s=n.x-i.x,r=n.z-i.z;Math.hypot(s,r)<1.5||(i.face=Math.atan2(s,r),i.formDirty=!0)}function Su(i){let t=D.cur;if(!t.player.filter(o=>o!==i&&o.alive).some(o=>Math.hypot(o.x-i.x,o.z-i.z)<(Math.max(o.halfW,o.halfD)+Math.max(i.halfW,i.halfD))*.75))return;for(let o of t.player)o.placed=!0;let[s,r]=Qc(t.map,t.map.zones[0],i.x,i.z,i,0,t.player);i.x=s,i.z=r}function Jg(i,t){let s=0,r=0;i<48?s=9:i>innerWidth-48&&(s=-9),t<88?r=9:t>innerHeight-48-50&&(r=-9),(s||r)&&Lt.pan(s,r)}function Kg(i,t,e){let n=D.cur;if(n){if(D.mode==="waypoints"){let s=D.selected,r=Cs(i,t);if(!s||!r)return;if(!n.map.isPassable(r.x,r.z,0)){gn("Dort ist kein Durchkommen");return}s.orders.waypoints.push([r.x,r.z]),qt.play("place"),Tn(),rn(`Wegpunkt ${s.orders.waypoints.length}/4 gesetzt \u2013 weitere tippen oder \u201ERoute fertig\u201C`),s.orders.waypoints.length>=4&&yu();return}if(D.mode==="pickTarget"){let s=D.selected;e&&e.side===1&&s?(s.orders.target="legion",s.orders.targetId=e.id,D.mode=null,rn(""),qt.play("select"),gn(`Ziel: ${wn(e)}`),D.phase==="battle"&&n.battle.applyOrders(s),Rs(s),Tn()):gn("Tippe auf eine feindliche (rote) Legion");return}if(e){qt.play("select"),li(e);return}if(D.phase==="deploy"&&D.selected&&D.selected.side===0){let s=Cs(i,t),r=n.map.zones[0];if(s&&s.x>r.x0&&s.x<r.x1&&s.z>r.z0&&s.z<r.z1){let o=bu(s.x,s.z);if(o){D.selected.x=o[0],D.selected.z=o[1],Su(D.selected),qt.play("place");return}}s&&gn("Aufstellen nur in der blauen Zone"),li(null);return}D.selected&&(li(null),D.phase==="orders"&&Tn())}}function wu(i){return i=Math.max(0,Math.ceil(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`}function jg(){let i=D.cur;if(!i||D.phase!=="battle"){Da();return}let t=i.battle,e=t.strength(0),n=t.strength(1);xt("#str0").textContent=e,xt("#str1").textContent=n;let s=Math.max(1,e+n);xt("#sbar0").style.width=e/s*100+"%",xt("#sbar1").style.width=n/s*100+"%",xt("#hud-time").textContent=wu(t.timeLimit-t.time);let r=i.map.objective,o=xt("#hud-obj");if(r)if(o.classList.add("show"),r.type==="keep"){let a=1-r.owner,c=a===0?"#6aa2ff":"#ff6a5a";o.innerHTML=`\u{1F3F0} Burghof ${a===0?"einnehmen":"verteidigen"} <span class="pbar"><i style="width:${r.hold/r.need*100}%;background:${c}"></i></span> ${Math.floor(r.hold)}/${r.need} s`}else o.innerHTML=`\u26F0 <b style="color:#8fb8ff">${Math.floor(r.score[0])}</b> <span class="pbar"><i style="width:${r.score[0]}%;background:#6aa2ff"></i></span><span class="pbar"><i style="width:${r.score[1]}%;background:#ff6a5a;margin-left:auto"></i></span> <b style="color:#ff8f86">${Math.floor(r.score[1])}</b> / 100`;else o.classList.remove("show");if(Da(),D.selected&&xt("#orders").classList.contains("show")){let a=D.selected;xt("#oh-sub").textContent=a.alive?`${a.count}/${a.maxCount} Mann \xB7 ${Qg(a)}`:"Vernichtet"}}function Qg(i){return{melee:"im Nahkampf",shoot:"schie\xDFt",retreat:"zieht sich zur\xFCck",regroup:"sammelt sich",wait:"wartet auf Signal",hold:"h\xE4lt Stellung",move:"marschiert",engage:"r\xFCckt vor",kite:"weicht aus",breach:"berennt das Tor",idle:"bereit",dead:"vernichtet"}[i.state]||i.state}function As(i,t=-1){let e=xt("#feed"),n=document.createElement("div");for(n.className=t>=0?"p"+t:"",n.textContent=i,e.appendChild(n);e.children.length>5;)e.removeChild(e.firstChild);setTimeout(()=>n.remove(),6e3)}var du=0;function gn(i){let t=xt("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(du),du=setTimeout(()=>t.classList.remove("show"),1900)}function rn(i){xt("#hint").textContent=i}function al(i){let t=document.createElement("div");t.className="big-banner",t.textContent=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2300)}function tx(i){let t=i.battle,e=i.units.fx,n=D.demo,s=Lt.cam,r=(o,a)=>Math.max(.05,1-Math.hypot(o-s.x,a-s.z)/110)*(n?.35:1)*Math.max(.35,1-s.dist/220);for(let o of t.events){let a=o.x!==void 0?i.map.getHeight(o.x,o.z):0;switch(o.type){case"clash":e.burst(o.x,a+1.3,o.z,o.soft?4:8),qt.play("clash",r(o.x,o.z));break;case"impact":e.burst(o.x,a+1.3,o.z,20,!0),e.puff(o.x,a,o.z,8,1.4),qt.play("impact",r(o.x,o.z)),!n&&o.broken&&As("Die Piken brechen den Reiterangriff!");break;case"volley":qt.play("volley",r(o.x,o.z));break;case"arrowhit":qt.play("arrowhit",r(o.x,o.z)),e.puff(o.x,a,o.z,2,.6);break;case"death":qt.play("death",r(o.x,o.z)*.8);break;case"gatehit":e.puff(o.x,a+1,o.z,3,1),e.burst(o.x,a+2.5,o.z,4),qt.play("gate",r(o.x,o.z));break;case"gatebroken":e.splinters(o.x,i.map.castle.base,o.z),e.puff(o.x,a,o.z,14,2.2),qt.play("gatebroken",r(o.x,o.z)+.3),n||(As("Das Burgtor ist gefallen!"),al("DAS TOR F\xC4LLT"));break;case"breach":!n&&!o.legion.breachAnnounced&&(o.legion.breachAnnounced=!0,As(`${wn(o.legion)} berennt das Tor`,o.legion.side));break;case"retreat":n||(As(`${wn(o.legion)} zieht sich zur\xFCck`,o.side),qt.play("retreat",.8));break;case"rally":n||As(`${wn(o.legion)} hat sich gesammelt`,o.legion.side);break;case"legionlost":n||As(`${wn(o.legion)} wurde vernichtet`,o.side),D.selected===o.legion&&li(null);break;case"horn":qt.play("horn",n?.3:1);break}}if(t.events.length=0,i.dustT-=1/60,i.dustT<=0){i.dustT=.12;for(let o of i.legions){if(!o.alive)continue;let a=o.typeId==="cavalry"&&o.speedCur>2.5;if(a||o.state==="melee"&&Math.random()<.3){let c=o.soldiers[Math.random()*o.soldiers.length|0];c&&c.alive&&i.map.biome!=="winter"&&e.puff(c.x,c.y,c.z,1,a?.9:.6)}}}}function ex(){let i=D.cur,t=i.battle,e=t.winner===0;D.phase="result",hi(),e?(Pe.wins++,Pe.streak++,Pe.best=Math.max(Pe.best,Pe.streak)):(Pe.losses++,Pe.streak=0),En.set("stats",Pe),qt.play(e?"victory":"defeat"),al(e?"SIEG":"NIEDERLAGE"),setTimeout(()=>{if(D.cur!==i)return;let n=xt("#res-title");n.textContent=e?"SIEG":"NIEDERLAGE",n.className="result-title "+(e?"win":"lose"),xt("#res-reason").textContent=t.reason;let s=o=>{let a=i.legions.filter(c=>c.side===o);return`<div class="rs-col p${o}"><h4>${Vn[o].name}</h4>${a.map(c=>`<div class="rs-line"><span>${wn(c)}</span><span>${c.alive?c.count+"/"+c.maxCount:"\u271D"} \xB7 \u2694 ${c.kills}</span></div>`).join("")}</div>`},r=i.player.slice().sort((o,a)=>a.kills-o.kills)[0];xt("#res-stats").innerHTML=s(0)+s(1)+`<div class="rs-sum"><div>Dauer<b>${wu(t.time)}</b></div><div>Eigene Verluste<b>${t.lost[0]}</b></div><div>Feindliche Verluste<b>${t.lost[1]}</b></div><div>Beste Legion<b>${r?Ts[r.index]+". "+r.name:"\u2013"}</b></div></div>`,za("scr-result")},2200)}function ol(i,t){xt("#dlg-body").innerHTML=i;let e=xt("#dlg-actions");e.innerHTML="";for(let[n,s,r]of t){let o=document.createElement("button");o.className="btn"+(r?" primary":""),o.textContent=n,o.onclick=()=>{qt.play("click"),Eu(),s&&s()},e.appendChild(o)}xt("#dlg").classList.add("show")}function Eu(){xt("#dlg").classList.remove("show")}var nx=()=>xt("#dlg").classList.contains("show");function ix(){ol(`<h2>Anleitung</h2>
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
  <li>Ein rechtzeitiger <b>R\xFCckzug</b> rettet Legionen \u2013 gesammelt kehren sie zur\xFCck.</li></ul>`,[["Verstanden",null,!0]])}function Tu(){let i=Be.quality;ol(`<h2>Einstellungen</h2>
    <div class="set-row"><span>Ton</span><div class="chips"><button class="chip ${Be.sound?"on":""}" data-set="sound" data-v="1">An</button><button class="chip ${Be.sound?"":"on"}" data-set="sound" data-v="0">Aus</button></div></div>
    <div class="set-row"><span>Grafik</span><div class="chips">${[["high","Hoch"],["medium","Mittel"],["low","Niedrig"]].map(([t,e])=>`<button class="chip ${i===t?"on":""}" data-set="quality" data-v="${t}">${e}</button>`).join("")}</div></div>
    <div class="set-row"><span>Statistik</span><button class="btn small" data-set="reset">Zur\xFCcksetzen</button></div>
    <p style="color:var(--muted);font-size:11px">\u201ENiedrig\u201C schaltet Schatten und Kantengl\xE4ttung ab \u2013 f\xFCr \xE4ltere Ger\xE4te.</p>`,[["Fertig",null,!0]]),xt("#dlg-body").onclick=t=>{let e=t.target.closest("[data-set]");if(e){if(qt.play("click"),e.dataset.set==="sound"&&(Be.sound=e.dataset.v==="1",qt.setEnabled(Be.sound)),e.dataset.set==="quality"){Be.quality=e.dataset.v,En.set("settings",Be),gn("Grafik wird neu geladen \u2026"),setTimeout(()=>location.reload(),500);return}e.dataset.set==="reset"&&(Object.assign(Pe,{wins:0,losses:0,streak:0,best:0}),En.set("stats",Pe),gn("Statistik zur\xFCckgesetzt")),En.set("settings",Be),Tu()}}}function Au(){let i=D.paused;D.phase==="battle"&&(D.paused=!0,An()),ol(`<h2>Schlacht</h2><p>${ps[D.cur.opts.scenario].name} \xB7 ${bn[D.cur.opts.biome].name} \xB7 ${Ii[D.cur.opts.diff].name}</p>`,[["Weiter",()=>{D.phase==="battle"&&(D.paused=i,An())},!0],["Neu starten",()=>sl({...D.last,seed:D.last.seed})],["Aufgeben",()=>{D.phase==="battle"&&(Pe.losses++,Pe.streak=0,En.set("stats",Pe)),Ua()}]])}function Ru(){D.paused=!D.paused,qt.play("click"),An()}document.addEventListener("click",i=>{let t=i.target.closest("[data-act]");if(t)switch(qt.unlock(),qt.play("click"),t.dataset.act){case"new":Gg();break;case"quick":{let e=pn(Date.now()|0),n=e.int(3,4),s=[];for(let r=0;r<n;r++)s.push(e.pick(["legion","legion","archer","cavalry","pike","guard"]));uu({scenario:"random",biome:"random",diff:D.cfg.diff,army:s});break}case"help":ix();break;case"settings":Tu();break;case"menu":Ua();break;case"deploy":uu(D.cfg);break;case"rematch":sl({...D.last});break}});xt("#btn-exit").addEventListener("click",()=>{qt.play("click"),Au()});xt("#btn-pause").addEventListener("click",Ru);xt("#btn-sound").addEventListener("click",()=>{Be.sound=!Be.sound,qt.setEnabled(Be.sound),En.set("settings",Be),An()});for(let i of rr("[data-speed]"))i.addEventListener("click",()=>{D.speed=+i.dataset.speed,D.paused&&(D.paused=!1),qt.play("click"),An()});window.onAndroidBack=()=>nx()?(Eu(),!0):D.mode?(D.mode=null,rn(""),Gn(),!0):xt("#orders").classList.contains("show")?(hi(),!0):D.phase==="deploy"||D.phase==="orders"||D.phase==="battle"?(Au(),!0):D.phase==="setup"||D.phase==="result"?(Ua(),!0):!1;window.onAndroidPause=()=>{D.phase==="battle"&&!D.paused&&(D.paused=!0,An()),qt.suspend()};document.addEventListener("visibilitychange",()=>{document.hidden?window.onAndroidPause():qt.resume()});var fu=performance.now(),Pa=0,il=0,ir=0,Ni=0,sr=1/30;function Cu(i){requestAnimationFrame(Cu);let t=Math.min(.05,Math.max(.001,(i-fu)/1e3));fu=i,Ni+=t;let e=D.cur;if(e){let n=e.battle;if((D.phase==="battle"&&!D.paused||D.demo&&(D.phase==="menu"||D.phase==="setup"))&&!n.over){Pa+=t*D.speed;let r=0;for(;Pa>=sr&&r<10;)n.step(sr),e.brain.update(sr),e.brain0&&e.brain0.update(sr),Pa-=sr,r++;r>=10&&(Pa=0),tx(e)}else if(D.phase==="deploy"||D.phase==="orders")for(let r of e.legions)r.formDirty&&r.layout(),n.updateSoldiers(r,D.phase==="deploy"?t*2.2:t);else D.phase==="result"||D.phase==="battle"&&D.paused;D.demo&&n.over&&!e.restartAt&&(e.restartAt=Ni+4),D.demo&&e.restartAt&&Ni>e.restartAt&&(D.phase==="menu"||D.phase==="setup")&&mu(),!D.demo&&D.phase==="battle"&&n.over&&ex(),e.units.fx.simTime=n.time,e.units.fx.battleArrows=n.arrows,e.units.update(Ni,t,D.selected,null),e.world.camTarget=Lt.cam,nu(e.world,Ni,t,e.map),e.overlays.updateObjective(Ni),e.overlays.updateFootprints(e.player,D.selected,D.phase==="deploy"||D.phase==="orders",D.phase==="deploy",Ni),Vg(e),il-=t,il<=0&&(il=.2,jg()),ir-=t,D.phase==="battle"&&D.selected&&ir<=0?(ir=.5,Tn()):D.phase==="battle"&&!D.selected&&ir<=0&&(ir=.5,e.overlays.clearRoutes())}(D.phase==="menu"||D.phase==="setup")&&(Lt.cam.tyaw+=t*.035),Lt.updateCamera(t),Lt.render()}function sx(){try{Ua(),xt("#loading").classList.remove("show"),requestAnimationFrame(Cu)}catch(i){throw xt("#loading").innerHTML=`<div style="padding:20px;color:#fff">Fehler beim Start: ${i.message}</div>`,i}}window.__G=D;window.__stage=Lt;setTimeout(sx,30);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
