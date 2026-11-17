(()=>{var tu=0,Tl=1,eu=2;var ih=1,$o=2,Nn=3,An=0,je=1,ye=2;var Qn=0,kn=1,Be=2,Al=3,Rl=4,nu=5,Mi=100,iu=101,su=102,Cl=103,Pl=104,ru=200,au=201,ou=202,lu=203,so=204,ro=205,cu=206,hu=207,uu=208,du=209,fu=210,pu=211,mu=212,gu=213,xu=214,yu=0,_u=1,vu=2,Tr=3,Mu=4,Su=5,Eu=6,bu=7,sh=0,wu=1,Tu=2,jn=0,Au=1,Ru=2,Cu=3,Di=4,Pu=5,Lu=6;var rh=300,os=301,ls=302,Ai=303,ao=304,aa=306,cs=1e3,_n=1001,oo=1002,Je=1003,Ll=1004;var Ma=1005;var hn=1006,Iu=1007;var Ns=1008;var ti=1009,Du=1010,Uu=1011,Zo=1012,ah=1013,Jn=1014,Kn=1015,Fs=1016,oh=1017,lh=1018,bi=1020,Nu=1021,vn=1023,Fu=1024,Ou=1025,wi=1026,hs=1027,Bu=1028,ch=1029,ku=1030,hh=1031,uh=1033,Sa=33776,Ea=33777,ba=33778,wa=33779,Il=35840,Dl=35841,Ul=35842,Nl=35843,dh=36196,Fl=37492,Ol=37496,Bl=37808,kl=37809,Hl=37810,zl=37811,Vl=37812,Gl=37813,Wl=37814,ql=37815,Xl=37816,Yl=37817,$l=37818,Zl=37819,Jl=37820,Kl=37821,Ta=36492,Ql=36494,jl=36495,Hu=36283,tc=36284,ec=36285,nc=36286;var Ar=2300,Rr=2301,Aa=2302,ic=2400,sc=2401,rc=2402;var fh=3e3,Ti=3001,zu=3200,Jo=3201,ph=0,Vu=1,un="",ge="srgb",Hn="srgb-linear",Ko="display-p3",oa="display-p3-linear",Cr="linear",fe="srgb",Pr="rec709",Lr="p3";var Fi=7680;var ac=519,Gu=512,Wu=513,qu=514,mh=515,Xu=516,Yu=517,$u=518,Zu=519,lo=35044,gh=35048;var oc="300 es",co=1035,Bn=2e3,Ir=2001,ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ra=Math.PI/180,ho=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Ju(i,t){return(i%t+t)%t}function Ca(i,t,e){return(1-e)*i+e*t}function lc(i){return(i&i-1)===0&&i!==0}function uo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function On(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var gt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],_=s[1],y=s[4],M=s[7],C=s[2],b=s[5],R=s[8];return r[0]=a*x+o*_+l*C,r[3]=a*m+o*y+l*b,r[6]=a*f+o*M+l*R,r[1]=c*x+h*_+u*C,r[4]=c*m+h*y+u*b,r[7]=c*f+h*M+u*R,r[2]=d*x+p*_+g*C,r[5]=d*m+p*y+g*b,r[8]=d*f+p*M+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pa=new Qt;function xh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ku(){let i=Dr("canvas");return i.style.display="block",i}var cc={};function Ls(i){i in cc||(cc[i]=!0,console.warn(i))}var hc=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uc=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[Hn]:{transfer:Cr,primaries:Pr,toReference:i=>i,fromReference:i=>i},[ge]:{transfer:fe,primaries:Pr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[oa]:{transfer:Cr,primaries:Lr,toReference:i=>i.applyMatrix3(uc),fromReference:i=>i.applyMatrix3(hc)},[Ko]:{transfer:fe,primaries:Lr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(uc),fromReference:i=>i.applyMatrix3(hc).convertLinearToSRGB()}},Qu=new Set([Hn,oa]),ae={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Js[t].toReference,s=Js[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Js[i].primaries},getTransfer:function(i){return i===un?Cr:Js[i].transfer}};function rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function La(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Oi,Ur=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=Dr("canvas")),Oi.width=t.width,Oi.height=t.height;let n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Dr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=rs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rs(e[n]/255)*255):e[n]=rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ju=0,Nr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ia(s[a].image)):r.push(Ia(s[a]))}else r=Ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ia(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ur.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var td=0,dn=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_n,s=_n,r=hn,a=Ns,o=vn,l=ti,c=i.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=ei(),this.name="",this.source=new Nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ti?ge:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Ti:fh}set encoding(t){Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ti?ge:un}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=rh;dn.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,M=(p+1)/2,C=(f+1)/2,b=(h+d)/4,R=(u+x)/4,U=(g+m)/4;return y>M&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=R/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=U/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=U/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fo=class extends ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ti?ge:un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Nr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends fo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fr=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var po=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var re=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*x,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let C=Math.sqrt(y),b=Math.atan2(C,f*_);m=Math.sin(m*b)/C,o=Math.sin(o*b)/C}let M=o*_;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+x*M,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Da=new E,dc=new re,Vn=class{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),Qs.subVectors(this.max,Ms),Bi.subVectors(t.a,Ms),ki.subVectors(t.b,Ms),Hi.subVectors(t.c,Ms),qn.subVectors(ki,Bi),Xn.subVectors(Hi,ki),gi.subVectors(Bi,Hi);let e=[0,-qn.z,qn.y,0,-Xn.z,Xn.y,0,-gi.z,gi.y,qn.z,0,-qn.x,Xn.z,0,-Xn.x,gi.z,0,-gi.x,-qn.y,qn.x,0,-Xn.y,Xn.x,0,-gi.y,gi.x,0];return!Ua(e,Bi,ki,Hi,Qs)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,Bi,ki,Hi,Qs))?!1:(js.crossVectors(qn,Xn),e=[js.x,js.y,js.z],Ua(e,Bi,ki,Hi,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pn=[new E,new E,new E,new E,new E,new E,new E,new E],gn=new E,Ks=new Vn,Bi=new E,ki=new E,Hi=new E,qn=new E,Xn=new E,gi=new E,Ms=new E,Qs=new E,js=new E,xi=new E;function Ua(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);let o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ed=new Vn,Ss=new E,Na=new E,ii=class{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ed.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);let e=Ss.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(Na)),this.expandByPoint(Ss.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new E,Fa=new E,tr=new E,Yn=new E,Oa=new E,er=new E,Ba=new E,Or=class{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fa.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Fa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(tr),o=Yn.dot(this.direction),l=-Yn.dot(tr),c=Yn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fa).addScaledVector(tr,d),p}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Oa.subVectors(e,t),er.subVectors(n,t),Ba.crossVectors(Oa,er);let a=this.direction.dot(Ba),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,t);let l=o*this.direction.dot(er.crossVectors(Yn,er));if(l<0)return null;let c=o*this.direction.dot(Oa.cross(Yn));if(c<0||l+c>a)return null;let h=-o*Yn.dot(Ba);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nd,t,id)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),$n.crossVectors(n,nn),$n.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),$n.crossVectors(n,nn)),$n.normalize(),nr.crossVectors(nn,$n),s[0]=$n.x,s[4]=nr.x,s[8]=nn.x,s[1]=$n.y,s[5]=nr.y,s[9]=nn.y,s[2]=$n.z,s[6]=nr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],_=n[3],y=n[7],M=n[11],C=n[15],b=s[0],R=s[4],U=s[8],v=s[12],w=s[1],I=s[5],G=s[9],tt=s[13],L=s[2],F=s[6],J=s[10],nt=s[14],j=s[3],q=s[7],N=s[11],V=s[15];return r[0]=a*b+o*w+l*L+c*j,r[4]=a*R+o*I+l*F+c*q,r[8]=a*U+o*G+l*J+c*N,r[12]=a*v+o*tt+l*nt+c*V,r[1]=h*b+u*w+d*L+p*j,r[5]=h*R+u*I+d*F+p*q,r[9]=h*U+u*G+d*J+p*N,r[13]=h*v+u*tt+d*nt+p*V,r[2]=g*b+x*w+m*L+f*j,r[6]=g*R+x*I+m*F+f*q,r[10]=g*U+x*G+m*J+f*N,r[14]=g*v+x*tt+m*nt+f*V,r[3]=_*b+y*w+M*L+C*j,r[7]=_*R+y*I+M*F+C*q,r[11]=_*U+y*G+M*J+C*N,r[15]=_*v+y*tt+M*nt+C*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+x*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],_=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,y=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,M=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,C=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,b=e*_+n*y+s*M+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/b;return t[0]=_*R,t[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*R,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*f+n*l*f)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*R,t[4]=y*R,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*R,t[8]=M*R,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*R,t[12]=C*R,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*R,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,_=l*c,y=l*h,M=l*u,C=n.x,b=n.y,R=n.z;return s[0]=(1-(x+f))*C,s[1]=(p+M)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(d+f))*b,s[6]=(m+_)*b,s[7]=0,s[8]=(g+y)*R,s[9]=(m-_)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zi.set(s[0],s[1],s[2]).length(),a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let c=1/r,h=1/a,u=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Bn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===Bn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ir)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Bn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h,g,x;if(o===Bn)g=(a+r)*u,x=-2*u;else if(o===Ir)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zi=new E,xn=new Yt,nd=new E(0,0,0),id=new E(1,1,1),$n=new E,nr=new E,nn=new E,fc=new Yt,pc=new re,Te=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Te.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sd=0,mc=new E,Vi=new re,In=new Yt,ir=new E,Es=new E,rd=new E,ad=new re,gc=new E(1,0,0),xc=new E(0,1,0),yc=new E(0,0,1),od={type:"added"},ld={type:"removed"},Ae=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new E,e=new Te,n=new re,s=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Qt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(gc,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return mc.copy(t).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gc,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Es,ir,this.up):In.lookAt(ir,Es,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(In),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(od)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ld)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ae.DEFAULT_UP=new E(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new E,Dn=new E,ka=new E,Un=new E,Gi=new E,Wi=new E,_c=new E,Ha=new E,za=new E,Va=new E,sr=!1,Ei=class i{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Dn.subVectors(n,e),ka.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(Dn),l=yn.dot(ka),c=Dn.dot(Dn),h=Dn.dot(ka),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(t,e,n,s,r,a,o,l){return sr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sr=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Dn.subVectors(t,e),yn.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),yn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return sr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Gi.subVectors(s,n),Wi.subVectors(r,n),Ha.subVectors(t,n);let l=Gi.dot(Ha),c=Wi.dot(Ha);if(l<=0&&c<=0)return e.copy(n);za.subVectors(t,s);let h=Gi.dot(za),u=Wi.dot(za);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Gi,a);Va.subVectors(t,r);let p=Gi.dot(Va),g=Wi.dot(Va);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Wi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return _c.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(_c,o);let f=1/(m+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(Gi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function Ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Ju(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ga(a,r,t+1/3),this.g=Ga(a,r,t),this.b=Ga(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return ae.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ue(Ge.r*255,0,255))*65536+Math.round(Ue(Ge.g*255,0,255))*256+Math.round(Ue(Ge.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=ge){ae.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(rr);let n=Ca(Zn.h,rr.h,e),s=Ca(Zn.s,rr.s,e),r=Ca(Zn.l,rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new wt;wt.NAMES=yh;var cd=0,Gn=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=kn,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},pe=class extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var be=new E,ar=new gt,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lo&&(t.usage=this.usage),t}};var kr=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hr=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}};var hd=0,cn=new Yt,Wa=new Ae,qi=new E,sn=new Vn,bs=new Vn,De=new E,ce=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xh(t)?Hr:kr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(sn.min,bs.min),sn.expandByPoint(De),De.addVectors(sn.max,bs.max),sn.expandByPoint(De)):(sn.expandByPoint(bs.min),sn.expandByPoint(bs.max))}sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),De.add(qi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new E,h[w]=new E;let u=new E,d=new E,p=new E,g=new gt,x=new gt,m=new gt,f=new E,_=new E;function y(w,I,G){u.fromArray(s,w*3),d.fromArray(s,I*3),p.fromArray(s,G*3),g.fromArray(a,w*2),x.fromArray(a,I*2),m.fromArray(a,G*2),d.sub(u),p.sub(u),x.sub(g),m.sub(g);let tt=1/(x.x*m.y-m.x*x.y);isFinite(tt)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(tt),_.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(tt),c[w].add(f),c[I].add(f),c[G].add(f),h[w].add(_),h[I].add(_),h[G].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,I=M.length;w<I;++w){let G=M[w],tt=G.start,L=G.count;for(let F=tt,J=tt+L;F<J;F+=3)y(n[F+0],n[F+1],n[F+2])}let C=new E,b=new E,R=new E,U=new E;function v(w){R.fromArray(r,w*3),U.copy(R);let I=c[w];C.copy(I),C.sub(R.multiplyScalar(R.dot(I))).normalize(),b.crossVectors(U,I);let tt=b.dot(h[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=tt}for(let w=0,I=M.length;w<I;++w){let G=M[w],tt=G.start,L=G.count;for(let F=tt,J=tt+L;F<J;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vc=new Yt,yi=new Or,or=new ii,Mc=new E,Xi=new E,Yi=new E,$i=new E,qa=new E,lr=new E,cr=new gt,hr=new gt,ur=new gt,Sc=new E,Ec=new E,bc=new E,dr=new E,fr=new E,st=class extends Ae{constructor(t=new ce,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(qa.fromBufferAttribute(u,t),a?lr.addScaledVector(qa,h):lr.addScaledVector(qa.sub(e),h))}e.add(lr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(or.containsPoint(yi.origin)===!1&&(yi.intersectSphere(or,Mc)===null||yi.origin.distanceToSquared(Mc)>(t.far-t.near)**2))&&(vc.copy(r).invert(),yi.copy(t.ray).applyMatrix4(vc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,C=y;M<C;M+=3){let b=o.getX(M),R=o.getX(M+1),U=o.getX(M+2);s=pr(this,f,t,n,c,h,u,b,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let _=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);s=pr(this,a,t,n,c,h,u,_,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,C=y;M<C;M+=3){let b=M,R=M+1,U=M+2;s=pr(this,f,t,n,c,h,u,b,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let _=m,y=m+1,M=m+2;s=pr(this,a,t,n,c,h,u,_,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ud(i,t,e,n,s,r,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===An,o),l===null)return null;fr.copy(o),fr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fr);return c<e.near||c>e.far?null:{distance:c,point:fr.clone(),object:i}}function pr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xi),i.getVertexPosition(l,Yi),i.getVertexPosition(c,$i);let h=ud(i,t,e,n,Xi,Yi,$i,dr);if(h){s&&(cr.fromBufferAttribute(s,o),hr.fromBufferAttribute(s,l),ur.fromBufferAttribute(s,c),h.uv=Ei.getInterpolation(dr,Xi,Yi,$i,cr,hr,ur,new gt)),r&&(cr.fromBufferAttribute(r,o),hr.fromBufferAttribute(r,l),ur.fromBufferAttribute(r,c),h.uv1=Ei.getInterpolation(dr,Xi,Yi,$i,cr,hr,ur,new gt),h.uv2=h.uv1),a&&(Sc.fromBufferAttribute(a,o),Ec.fromBufferAttribute(a,l),bc.fromBufferAttribute(a,c),h.normal=Ei.getInterpolation(dr,Xi,Yi,$i,Sc,Ec,bc,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new E,materialIndex:0};Ei.getNormal(Xi,Yi,$i,u.normal),h.face=u}return h}var ue=class i extends ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(x,m,f,_,y,M,C,b,R,U,v){let w=M/R,I=C/U,G=M/2,tt=C/2,L=b/2,F=R+1,J=U+1,nt=0,j=0,q=new E;for(let N=0;N<J;N++){let V=N*I-tt;for(let z=0;z<F;z++){let D=z*w-G;q[x]=D*_,q[m]=V*y,q[f]=L,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[f]=b>0?1:-1,h.push(q.x,q.y,q.z),u.push(z/R),u.push(1-N/U),nt+=1}}for(let N=0;N<U;N++)for(let V=0;V<R;V++){let z=d+V+F*N,D=d+V+F*(N+1),k=d+(V+1)+F*(N+1),it=d+(V+1)+F*N;l.push(z,D,it),l.push(D,k,it),j+=6}o.addGroup(p,j,v),p+=j,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function dd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _h(i){return i.getRenderTarget()===null?i.outputColorSpace:ae.workingColorSpace}var fd={clone:us,merge:Ze},pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zr=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},we=class extends zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ra*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zi=-90,Ji=1,mo=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(Zi,Ji,t,e);s.layers=this.layers,this.add(s);let r=new we(Zi,Ji,t,e);r.layers=this.layers,this.add(r);let a=new we(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let o=new we(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let l=new we(Zi,Ji,t,e);l.layers=this.layers,this.add(l);let c=new we(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vr=class extends dn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},go=class extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ti?ge:un),this.texture=new Vr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ue(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Qn});r.uniforms.tEquirect.value=e;let a=new st(s,r),o=e.minFilter;return e.minFilter===Ns&&(e.minFilter=hn),new mo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Xa=new E,gd=new E,xd=new Qt,Fn=class{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Xa.subVectors(n,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xd.getNormalMatrix(t),s=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new ii,mr=new E,Os=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],_=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-f).normalize(),n[1].setComponents(l+r,d+c,m+p,M+f).normalize(),n[2].setComponents(l+a,d+h,m+g,M+_).normalize(),n[3].setComponents(l-a,d-h,m-g,M-_).normalize(),n[4].setComponents(l-o,d-u,m-x,M-y).normalize(),e===Bn)n[5].setComponents(l+o,d+u,m+x,M+y).normalize();else if(e===Ir)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(mr.x=s.normal.x>0?t.max.x:t.min.x,mr.y=s.normal.y>0?t.max.y:t.min.y,mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function vh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yd(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var We=class i extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let _=f*d-a;for(let y=0;y<c;y++){let M=y*u-r;g.push(M,-_,0),x.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let y=_+c*f,M=_+c*(f+1),C=_+1+c*(f+1),b=_+1+c*f;p.push(y,M,b),p.push(M,C,b)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},_d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wd=`#ifdef USE_AOMAP
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
#endif`,Td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ad=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Id=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vd=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wd=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Kd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,of=`#ifdef USE_GRADIENTMAP
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
}`,lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,ff=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
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
#endif`,_f=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,vf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pf=`#if defined( USE_POINTS_UV )
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
#endif`,Lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Df=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
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
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vp=`uniform sampler2D t2D;
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,Tp=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Ap=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dp=`#include <common>
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
}`,Up=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Np=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Op=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zp=`#define PHONG
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
}`,Vp=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gp=`#define STANDARD
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
}`,Wp=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qp=`#define TOON
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
}`,Xp=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yp=`uniform float size;
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
}`,$p=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Jp=`uniform vec3 color;
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
}`,Kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Qp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xt={alphahash_fragment:_d,alphahash_pars_fragment:vd,alphamap_fragment:Md,alphamap_pars_fragment:Sd,alphatest_fragment:Ed,alphatest_pars_fragment:bd,aomap_fragment:wd,aomap_pars_fragment:Td,batching_pars_vertex:Ad,batching_vertex:Rd,begin_vertex:Cd,beginnormal_vertex:Pd,bsdfs:Ld,iridescence_fragment:Id,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Ud,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Od,color_fragment:Bd,color_pars_fragment:kd,color_pars_vertex:Hd,color_vertex:zd,common:Vd,cube_uv_reflection_fragment:Gd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:qd,displacementmap_vertex:Xd,emissivemap_fragment:Yd,emissivemap_pars_fragment:$d,colorspace_fragment:Zd,colorspace_pars_fragment:Jd,envmap_fragment:Kd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:jd,envmap_pars_vertex:tf,envmap_physical_pars_fragment:ff,envmap_vertex:ef,fog_vertex:nf,fog_pars_vertex:sf,fog_fragment:rf,fog_pars_fragment:af,gradientmap_pars_fragment:of,lightmap_fragment:lf,lightmap_pars_fragment:cf,lights_lambert_fragment:hf,lights_lambert_pars_fragment:uf,lights_pars_begin:df,lights_toon_fragment:pf,lights_toon_pars_fragment:mf,lights_phong_fragment:gf,lights_phong_pars_fragment:xf,lights_physical_fragment:yf,lights_physical_pars_fragment:_f,lights_fragment_begin:vf,lights_fragment_maps:Mf,lights_fragment_end:Sf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:Tf,map_fragment:Af,map_pars_fragment:Rf,map_particle_fragment:Cf,map_particle_pars_fragment:Pf,metalnessmap_fragment:Lf,metalnessmap_pars_fragment:If,morphcolor_vertex:Df,morphnormal_vertex:Uf,morphtarget_pars_vertex:Nf,morphtarget_vertex:Ff,normal_fragment_begin:Of,normal_fragment_maps:Bf,normal_pars_fragment:kf,normal_pars_vertex:Hf,normal_vertex:zf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Wf,clearcoat_pars_fragment:qf,iridescence_pars_fragment:Xf,opaque_fragment:Yf,packing:$f,premultiplied_alpha_fragment:Zf,project_vertex:Jf,dithering_fragment:Kf,dithering_pars_fragment:Qf,roughnessmap_fragment:jf,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:sp,skinbase_vertex:rp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:hp,tonemapping_fragment:up,tonemapping_pars_fragment:dp,transmission_fragment:fp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:xp,worldpos_vertex:yp,background_vert:_p,background_frag:vp,backgroundCube_vert:Mp,backgroundCube_frag:Sp,cube_vert:Ep,cube_frag:bp,depth_vert:wp,depth_frag:Tp,distanceRGBA_vert:Ap,distanceRGBA_frag:Rp,equirect_vert:Cp,equirect_frag:Pp,linedashed_vert:Lp,linedashed_frag:Ip,meshbasic_vert:Dp,meshbasic_frag:Up,meshlambert_vert:Np,meshlambert_frag:Fp,meshmatcap_vert:Op,meshmatcap_frag:Bp,meshnormal_vert:kp,meshnormal_frag:Hp,meshphong_vert:zp,meshphong_frag:Vp,meshphysical_vert:Gp,meshphysical_frag:Wp,meshtoon_vert:qp,meshtoon_frag:Xp,points_vert:Yp,points_frag:$p,shadow_vert:Zp,shadow_frag:Jp,sprite_vert:Kp,sprite_frag:Qp},mt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ze([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ze([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ze([mt.points,mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ze([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ze([mt.common,mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ze([mt.sprite,mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ze([mt.common,mt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ze([mt.lights,mt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Tn.physical={uniforms:Ze([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var gr={r:0,b:0,g:0};function jp(i,t,e,n,s,r,a){let o=new wt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let _=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?e:t).get(y)),y===null?x(o,l):y&&y.isColor&&(x(y,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===aa)?(h===void 0&&(h=new st(new ue(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:us(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ae.getTransfer(y.colorSpace)!==fe,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new st(new We(2,2),new Mn({name:"BackgroundMaterial",uniforms:us(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ae.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(gr,_h(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function tm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,F,J,nt,j){let q=!1;if(a){let N=x(nt,J,F);c!==N&&(c=N,p(c.object)),q=f(L,nt,J,j),q&&_(L,nt,J,j)}else{let N=F.wireframe===!0;(c.geometry!==nt.id||c.program!==J.id||c.wireframe!==N)&&(c.geometry=nt.id,c.program=J.id,c.wireframe=N,q=!0)}j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,U(L,F,J,nt),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,F,J){let nt=J.wireframe===!0,j=o[L.id];j===void 0&&(j={},o[L.id]=j);let q=j[F.id];q===void 0&&(q={},j[F.id]=q);let N=q[nt];return N===void 0&&(N=m(d()),q[nt]=N),N}function m(L){let F=[],J=[],nt=[];for(let j=0;j<s;j++)F[j]=0,J[j]=0,nt[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:J,attributeDivisors:nt,object:L,attributes:{},index:null}}function f(L,F,J,nt){let j=c.attributes,q=F.attributes,N=0,V=J.getAttributes();for(let z in V)if(V[z].location>=0){let k=j[z],it=q[z];if(it===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(it=L.instanceColor)),k===void 0||k.attribute!==it||it&&k.data!==it.data)return!0;N++}return c.attributesNum!==N||c.index!==nt}function _(L,F,J,nt){let j={},q=F.attributes,N=0,V=J.getAttributes();for(let z in V)if(V[z].location>=0){let k=q[z];k===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(k=L.instanceColor));let it={};it.attribute=k,k&&k.data&&(it.data=k.data),j[z]=it,N++}c.attributes=j,c.attributesNum=N,c.index=nt}function y(){let L=c.newAttributes;for(let F=0,J=L.length;F<J;F++)L[F]=0}function M(L){C(L,0)}function C(L,F){let J=c.newAttributes,nt=c.enabledAttributes,j=c.attributeDivisors;J[L]=1,nt[L]===0&&(i.enableVertexAttribArray(L),nt[L]=1),j[L]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),j[L]=F)}function b(){let L=c.newAttributes,F=c.enabledAttributes;for(let J=0,nt=F.length;J<nt;J++)F[J]!==L[J]&&(i.disableVertexAttribArray(J),F[J]=0)}function R(L,F,J,nt,j,q,N){N===!0?i.vertexAttribIPointer(L,F,J,j,q):i.vertexAttribPointer(L,F,J,nt,j,q)}function U(L,F,J,nt){if(n.isWebGL2===!1&&(L.isInstancedMesh||nt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let j=nt.attributes,q=J.getAttributes(),N=F.defaultAttributeValues;for(let V in q){let z=q[V];if(z.location>=0){let D=j[V];if(D===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(D=L.instanceColor)),D!==void 0){let k=D.normalized,it=D.itemSize,ct=e.get(D);if(ct===void 0)continue;let ft=ct.buffer,bt=ct.type,Dt=ct.bytesPerElement,Ut=n.isWebGL2===!0&&(bt===i.INT||bt===i.UNSIGNED_INT||D.gpuType===ah);if(D.isInterleavedBufferAttribute){let Jt=D.data,W=Jt.stride,Pe=D.offset;if(Jt.isInstancedInterleavedBuffer){for(let It=0;It<z.locationSize;It++)C(z.location+It,Jt.meshPerAttribute);L.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Jt.meshPerAttribute*Jt.count)}else for(let It=0;It<z.locationSize;It++)M(z.location+It);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let It=0;It<z.locationSize;It++)R(z.location+It,it/z.locationSize,bt,k,W*Dt,(Pe+it/z.locationSize*It)*Dt,Ut)}else{if(D.isInstancedBufferAttribute){for(let Jt=0;Jt<z.locationSize;Jt++)C(z.location+Jt,D.meshPerAttribute);L.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Jt=0;Jt<z.locationSize;Jt++)M(z.location+Jt);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Jt=0;Jt<z.locationSize;Jt++)R(z.location+Jt,it/z.locationSize,bt,k,it*Dt,it/z.locationSize*Jt*Dt,Ut)}}else if(N!==void 0){let k=N[V];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(z.location,k);break;case 3:i.vertexAttrib3fv(z.location,k);break;case 4:i.vertexAttrib4fv(z.location,k);break;default:i.vertexAttrib1fv(z.location,k)}}}}b()}function v(){G();for(let L in o){let F=o[L];for(let J in F){let nt=F[J];for(let j in nt)g(nt[j].object),delete nt[j];delete F[J]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;let F=o[L.id];for(let J in F){let nt=F[J];for(let j in nt)g(nt[j].object),delete nt[j];delete F[J]}delete o[L.id]}function I(L){for(let F in o){let J=o[F];if(J[L.id]===void 0)continue;let nt=J[L.id];for(let j in nt)g(nt[j].object),delete nt[j];delete J[L.id]}}function G(){tt(),h=!0,c!==l&&(c=l,p(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:tt,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:M,disableUnusedAttributes:b}}function em(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function nm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,M=a||t.has("OES_texture_float"),C=y&&M,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:b}}function im(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fn,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,M=f.clippingState||null;l.value=M,M=h(g,d,y,p);for(let C=0;C!==y;++C)M[C]=e[C];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==x;++y,M+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function sm(i){let t=new WeakMap;function e(a,o){return o===Ai?a.mapping=os:o===ao&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ai||o===ao)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new go(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gr=class extends zr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},is=4,wc=[.125,.215,.35,.446,.526,.582],Si=20,Ya=new Gr,Tc=new wt,$a=null,Za=0,Ja=0,vi=(1+Math.sqrt(5))/2,Ki=1/vi,Ac=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,vi,Ki),new E(0,vi,-Ki),new E(Ki,0,vi),new E(-Ki,0,vi),new E(vi,Ki,0),new E(-vi,Ki,0)],si=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Za,Ja),t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Fs,format:vn,colorSpace:Hn,depthBuffer:!1},s=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rm(r)),this._blurMaterial=am(r,t,e)}return s}_compileMaterial(t){let e=new st(this._lodPlanes[0],t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,n,s){let o=new we(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Tc),h.toneMapping=jn,h.autoClear=!1;let p=new pe({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new st(new ue,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Tc),x=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):_===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let y=this._cubeSize;xr(s,_*y,f>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ac[(s-1)%Ac.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new st(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);let f=[],_=0;for(let R=0;R<Si;++R){let U=R/x,v=Math.exp(-U*U/2);f.push(v),R===0?_+=v:R<m&&(_+=2*v)}for(let R=0;R<f.length;R++)f[R]=f[R]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let M=this._sizeLods[s],C=3*M*(s>y-is?s-y+is:0),b=4*(this._cubeSize-M);xr(e,C,b,3*M,2*M),l.setRenderTarget(e),l.render(u,Ya)}};function rm(i){let t=[],e=[],n=[],s=i,r=i-is+1+wc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-is?l=wc[a-i+is-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*p),y=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let b=0;b<p;b++){let R=b%3*2/3-1,U=b>2?0:-1,v=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];_.set(v,x*g*b),y.set(d,m*g*b);let w=[b,b,b,b,b,b];M.set(w,f*g*b)}let C=new ce;C.setAttribute("position",new ve(_,x)),C.setAttribute("uv",new ve(y,m)),C.setAttribute("faceIndex",new ve(M,f)),t.push(C),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(i,t,e){let n=new zn(i,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function am(i,t,e){let n=new Float32Array(Si),s=new E(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Cc(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Pc(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function om(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ai||l===ao,h=l===os||l===ls;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new si(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new si(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function lm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cm(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let _=p.array;x=p.version;for(let y=0,M=_.length;y<M;y+=3){let C=_[y+0],b=_[y+1],R=_[y+2];d.push(C,b,b,R,R,C)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,M=_.length/3-1;y<M;y+=3){let C=y+0,b=y+1,R=y+2;d.push(C,b,b,R,R,C)}}else return;let m=new(xh(d)?Hr:kr)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function hm(i,t,e,n){let s=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,x),e.update(g,r,x)}function d(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let f=0;for(let _=0;_<x;_++)f+=g[_];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function um(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dm(i,t){return i[0]-t[0]}function fm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function pm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new xe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],U=0;_===!0&&(U=1),y===!0&&(U=2),M===!0&&(U=3);let v=h.attributes.position.count*U,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let I=new Float32Array(v*w*4*g),G=new Fr(I,v,w,g);G.type=Kn,G.needsUpdate=!0;let tt=U*4;for(let F=0;F<g;F++){let J=C[F],nt=b[F],j=R[F],q=v*w*4*F;for(let N=0;N<J.count;N++){let V=N*tt;_===!0&&(a.fromBufferAttribute(J,N),I[q+V+0]=a.x,I[q+V+1]=a.y,I[q+V+2]=a.z,I[q+V+3]=0),y===!0&&(a.fromBufferAttribute(nt,N),I[q+V+4]=a.x,I[q+V+5]=a.y,I[q+V+6]=a.z,I[q+V+7]=0),M===!0&&(a.fromBufferAttribute(j,N),I[q+V+8]=a.x,I[q+V+9]=a.y,I[q+V+10]=a.z,I[q+V+11]=j.itemSize===4?a.w:1)}}x={count:g,texture:G,size:new gt(v,w)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<p;y++){let M=g[y];M[0]=y,M[1]=d[y]}g.sort(fm);for(let y=0;y<8;y++)y<p&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(dm);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let M=o[y],C=M[0],b=M[1];C!==Number.MAX_SAFE_INTEGER&&b?(x&&h.getAttribute("morphTarget"+y)!==x[C]&&h.setAttribute("morphTarget"+y,x[C]),m&&h.getAttribute("morphNormal"+y)!==m[C]&&h.setAttribute("morphNormal"+y,m[C]),s[y]=b,f+=b):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let _=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function mm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Wr=class extends dn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:wi,h!==wi&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=Jn),n===void 0&&h===hs&&(n=bi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Mh=new dn,Sh=new Wr(1,1);Sh.compareFunction=mh;var Eh=new Fr,bh=new po,wh=new Vr,Lc=[],Ic=[],Dc=new Float32Array(16),Uc=new Float32Array(9),Nc=new Float32Array(4);function ps(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lc[s];if(r===void 0&&(r=new Float32Array(s),Lc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function la(i,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function vm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Nc.set(n),i.uniformMatrix2fv(this.addr,!1,Nc),Ce(e,n)}}function Mm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Uc.set(n),i.uniformMatrix3fv(this.addr,!1,Uc),Ce(e,n)}}function Sm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Dc.set(n),i.uniformMatrix4fv(this.addr,!1,Dc),Ce(e,n)}}function Em(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Am(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Lm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Sh:Mh;e.setTexture2D(t||r,s)}function Im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bh,s)}function Dm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wh,s)}function Um(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Eh,s)}function Nm(i){switch(i){case 5126:return gm;case 35664:return xm;case 35665:return ym;case 35666:return _m;case 35674:return vm;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return Em;case 35667:case 35671:return bm;case 35668:case 35672:return wm;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Um}}function Fm(i,t){i.uniform1fv(this.addr,t)}function Om(i,t){let e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function Bm(i,t){let e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function km(i,t){let e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function Hm(i,t){let e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zm(i,t){let e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vm(i,t){let e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gm(i,t){i.uniform1iv(this.addr,t)}function Wm(i,t){i.uniform2iv(this.addr,t)}function qm(i,t){i.uniform3iv(this.addr,t)}function Xm(i,t){i.uniform4iv(this.addr,t)}function Ym(i,t){i.uniform1uiv(this.addr,t)}function $m(i,t){i.uniform2uiv(this.addr,t)}function Zm(i,t){i.uniform3uiv(this.addr,t)}function Jm(i,t){i.uniform4uiv(this.addr,t)}function Km(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Mh,r[a])}function Qm(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bh,r[a])}function jm(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wh,r[a])}function t0(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Eh,r[a])}function e0(i){switch(i){case 5126:return Fm;case 35664:return Om;case 35665:return Bm;case 35666:return km;case 35674:return Hm;case 35675:return zm;case 35676:return Vm;case 5124:case 35670:return Gm;case 35667:case 35671:return Wm;case 35668:case 35672:return qm;case 35669:case 35673:return Xm;case 5125:return Ym;case 36294:return $m;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return t0}}var xo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nm(e.type)}},yo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e0(e.type)}},_o=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ka=/(\w+)(\])?(\[|\.)?/g;function Fc(i,t){i.seq.push(t),i.map[t.id]=t}function n0(i,t,e){let n=i.name,s=n.length;for(Ka.lastIndex=0;;){let r=Ka.exec(n),a=Ka.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fc(e,c===void 0?new xo(o,i,t):new yo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new _o(o),Fc(e,u)),e=u}}}var as=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);n0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Oc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var i0=37297,s0=0;function r0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function a0(i){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(i),n;switch(t===e?n="":t===Lr&&e===Pr?n="LinearDisplayP3ToLinearSRGB":t===Pr&&e===Lr&&(n="LinearSRGBToLinearDisplayP3"),i){case Hn:case oa:return[n,"LinearTransferOETF"];case ge:case Ko:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Bc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+r0(i.getShaderSource(t),a)}else return s}function o0(i,t){let e=a0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function l0(i,t){let e;switch(t){case Au:e="Linear";break;case Ru:e="Reinhard";break;case Cu:e="OptimizedCineon";break;case Di:e="ACESFilmic";break;case Lu:e="AgX";break;case Pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function c0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function h0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ss).join(`
`)}function u0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ss(i){return i!==""}function kc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(i){return i.replace(f0,m0)}var p0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function m0(i,t){let e=Xt[t];if(e===void 0){let n=p0.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vo(e)}var g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(i){return i.replace(g0,x0)}function x0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function y0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function _0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case ls:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ls&&(t="ENVMAP_MODE_REFRACTION"),t}function M0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sh:t="ENVMAP_BLENDING_MULTIPLY";break;case wu:t="ENVMAP_BLENDING_MIX";break;case Tu:t="ENVMAP_BLENDING_ADD";break}return t}function S0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function E0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=y0(e),c=_0(e),h=v0(e),u=M0(e),d=S0(e),p=e.isWebGL2?"":c0(e),g=h0(e),x=u0(r),m=s.createProgram(),f,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ss).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ss).join(`
`),_.length>0&&(_+=`
`)):(f=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),_=[p,Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==jn?l0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,o0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),a=vo(a),a=kc(a,e),a=Hc(a,e),o=vo(o),o=kc(o,e),o=Hc(o,e),a=zc(a),o=zc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=y+f+a,C=y+_+o,b=Oc(s,s.VERTEX_SHADER,M),R=Oc(s,s.FRAGMENT_SHADER,C);s.attachShader(m,b),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(G){if(i.debug.checkShaderErrors){let tt=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(b).trim(),F=s.getShaderInfoLog(R).trim(),J=!0,nt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,R);else{let j=Bc(s,b,"vertex"),q=Bc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+j+`
`+q)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(L===""||F==="")&&(nt=!1);nt&&(G.diagnostics={runnable:J,programLog:tt,vertexShader:{log:L,prefix:f},fragmentShader:{log:F,prefix:_}})}s.deleteShader(b),s.deleteShader(R),v=new as(s,m),w=d0(s,m)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,i0)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=R,this}var b0=0,Mo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new So(t),e.set(t,n)),n}},So=class{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}};function w0(i,t,e,n,s,r,a){let o=new Br,l=new Mo,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function m(v,w,I,G,tt){let L=G.fog,F=tt.geometry,J=v.isMeshStandardMaterial?G.environment:null,nt=(v.isMeshStandardMaterial?e:t).get(v.envMap||J),j=nt&&nt.mapping===aa?nt.image.height:null,q=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let N=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,V=N!==void 0?N.length:0,z=0;F.morphAttributes.position!==void 0&&(z=1),F.morphAttributes.normal!==void 0&&(z=2),F.morphAttributes.color!==void 0&&(z=3);let D,k,it,ct;if(q){let Le=Tn[q];D=Le.vertexShader,k=Le.fragmentShader}else D=v.vertexShader,k=v.fragmentShader,l.update(v),it=l.getVertexShaderID(v),ct=l.getFragmentShaderID(v);let ft=i.getRenderTarget(),bt=tt.isInstancedMesh===!0,Dt=tt.isBatchedMesh===!0,Ut=!!v.map,Jt=!!v.matcap,W=!!nt,Pe=!!v.aoMap,It=!!v.lightMap,Bt=!!v.bumpMap,St=!!v.normalMap,oe=!!v.displacementMap,Ht=!!v.emissiveMap,A=!!v.metalnessMap,S=!!v.roughnessMap,X=v.anisotropy>0,ht=v.clearcoat>0,ot=v.iridescence>0,ut=v.sheen>0,Et=v.transmission>0,xt=X&&!!v.anisotropyMap,pt=ht&&!!v.clearcoatMap,Rt=ht&&!!v.clearcoatNormalMap,Wt=ht&&!!v.clearcoatRoughnessMap,lt=ot&&!!v.iridescenceMap,jt=ot&&!!v.iridescenceThicknessMap,kt=ut&&!!v.sheenColorMap,Ft=ut&&!!v.sheenRoughnessMap,H=!!v.specularMap,O=!!v.specularColorMap,Q=!!v.specularIntensityMap,et=Et&&!!v.transmissionMap,yt=Et&&!!v.thicknessMap,rt=!!v.gradientMap,K=!!v.alphaMap,P=v.alphaTest>0,at=!!v.alphaHash,dt=!!v.extensions,Ct=!!F.attributes.uv1,Pt=!!F.attributes.uv2,ie=!!F.attributes.uv3,se=jn;return v.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(se=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:D,fragmentShader:k,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Dt,instancing:bt,instancingColor:bt&&tt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Hn,map:Ut,matcap:Jt,envMap:W,envMapMode:W&&nt.mapping,envMapCubeUVHeight:j,aoMap:Pe,lightMap:It,bumpMap:Bt,normalMap:St,displacementMap:d&&oe,emissiveMap:Ht,normalMapObjectSpace:St&&v.normalMapType===Vu,normalMapTangentSpace:St&&v.normalMapType===ph,metalnessMap:A,roughnessMap:S,anisotropy:X,anisotropyMap:xt,clearcoat:ht,clearcoatMap:pt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,iridescence:ot,iridescenceMap:lt,iridescenceThicknessMap:jt,sheen:ut,sheenColorMap:kt,sheenRoughnessMap:Ft,specularMap:H,specularColorMap:O,specularIntensityMap:Q,transmission:Et,transmissionMap:et,thicknessMap:yt,gradientMap:rt,opaque:v.transparent===!1&&v.blending===kn,alphaMap:K,alphaTest:P,alphaHash:at,combine:v.combine,mapUv:Ut&&x(v.map.channel),aoMapUv:Pe&&x(v.aoMap.channel),lightMapUv:It&&x(v.lightMap.channel),bumpMapUv:Bt&&x(v.bumpMap.channel),normalMapUv:St&&x(v.normalMap.channel),displacementMapUv:oe&&x(v.displacementMap.channel),emissiveMapUv:Ht&&x(v.emissiveMap.channel),metalnessMapUv:A&&x(v.metalnessMap.channel),roughnessMapUv:S&&x(v.roughnessMap.channel),anisotropyMapUv:xt&&x(v.anisotropyMap.channel),clearcoatMapUv:pt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&x(v.sheenRoughnessMap.channel),specularMapUv:H&&x(v.specularMap.channel),specularColorMapUv:O&&x(v.specularColorMap.channel),specularIntensityMapUv:Q&&x(v.specularIntensityMap.channel),transmissionMapUv:et&&x(v.transmissionMap.channel),thicknessMapUv:yt&&x(v.thicknessMap.channel),alphaMapUv:K&&x(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(St||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Pt,vertexUv3s:ie,pointsUvs:tt.isPoints===!0&&!!F.attributes.uv&&(Ut||K),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ut&&v.map.isVideoTexture===!0&&ae.getTransfer(v.map.colorSpace)===fe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ye,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:dt&&v.extensions.derivatives===!0,extensionFragDepth:dt&&v.extensions.fragDepth===!0,extensionDrawBuffers:dt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)w.push(I),w.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(_(w,v),y(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){let w=g[v.type],I;if(w){let G=Tn[w];I=fd.clone(G.uniforms)}else I=v.uniforms;return I}function C(v,w){let I;for(let G=0,tt=c.length;G<tt;G++){let L=c[G];if(L.cacheKey===w){I=L,++I.usedTimes;break}}return I===void 0&&(I=new E0(i,w,v,r),c.push(I)),I}function b(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function R(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:C,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:U}}function T0(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function A0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||A0),n.length>1&&n.sort(d||Gc),s.length>1&&s.sort(d||Gc)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function R0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Wc,i.set(n,[a])):s>=r.length?(a=new Wc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function C0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new wt};break;case"SpotLight":e={position:new E,direction:new E,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function P0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var L0=0;function I0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D0(i,t){let e=new C0,n=P0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new E);let r=new E,a=new Yt,o=new Yt;function l(h,u){let d=0,p=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let x=0,m=0,f=0,_=0,y=0,M=0,C=0,b=0,R=0,U=0,v=0;h.sort(I0);let w=u===!0?Math.PI:1;for(let G=0,tt=h.length;G<tt;G++){let L=h[G],F=L.color,J=L.intensity,nt=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*J*w,p+=F.g*J*w,g+=F.b*J*w;else if(L.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(L.sh.coefficients[q],J);v++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let N=L.shadow,V=n.get(L);V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,s.directionalShadow[x]=V,s.directionalShadowMap[x]=j,s.directionalShadowMatrix[x]=L.shadow.matrix,M++}s.directional[x]=q,x++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(F).multiplyScalar(J*w),q.distance=nt,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,s.spot[f]=q;let N=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,N.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[f]=N.matrix,L.castShadow){let V=n.get(L);V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,s.spotShadow[f]=V,s.spotShadowMap[f]=j,b++}f++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(F).multiplyScalar(J),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),s.rectArea[_]=q,_++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*w),q.distance=L.distance,q.decay=L.decay,L.castShadow){let N=L.shadow,V=n.get(L);V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,V.shadowCameraNear=N.camera.near,V.shadowCameraFar=N.camera.far,s.pointShadow[m]=V,s.pointShadowMap[m]=j,s.pointShadowMatrix[m]=L.shadow.matrix,C++}s.point[m]=q,m++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(J*w),q.groundColor.copy(L.groundColor).multiplyScalar(J*w),s.hemi[y]=q,y++}}_>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let I=s.hash;(I.directionalLength!==x||I.pointLength!==m||I.spotLength!==f||I.rectAreaLength!==_||I.hemiLength!==y||I.numDirectionalShadows!==M||I.numPointShadows!==C||I.numSpotShadows!==b||I.numSpotMaps!==R||I.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=_,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=b+R-U,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=v,I.directionalLength=x,I.pointLength=m,I.spotLength=f,I.rectAreaLength=_,I.hemiLength=y,I.numDirectionalShadows=M,I.numPointShadows=C,I.numSpotShadows=b,I.numSpotMaps=R,I.numLightProbes=v,s.version=L0++)}function c(h,u){let d=0,p=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let M=h[_];if(M.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(M.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let C=s.point[p];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function qc(i,t){let e=new D0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function U0(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new qc(i,t),e.set(r,[l])):a>=o.length?(l=new qc(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Bs=class extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Eo=class extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
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
}`;function O0(i,t,e){let n=new Os,s=new gt,r=new gt,a=new xe,o=new Bs({depthPacking:Jo}),l=new Eo,c={},h=e.maxTextureSize,u={[An]:je,[je]:An,[ye]:ye},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:N0,fragmentShader:F0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new st(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let f=this.type;this.render=function(b,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let v=i.getRenderTarget(),w=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Qn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let tt=f!==Nn&&this.type===Nn,L=f===Nn&&this.type!==Nn;for(let F=0,J=b.length;F<J;F++){let nt=b[F],j=nt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let q=j.getFrameExtents();if(s.multiply(q),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,j.mapSize.y=r.y)),j.map===null||tt===!0||L===!0){let V=this.type!==Nn?{minFilter:Je,magFilter:Je}:{};j.map!==null&&j.map.dispose(),j.map=new zn(s.x,s.y,V),j.map.texture.name=nt.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let N=j.getViewportCount();for(let V=0;V<N;V++){let z=j.getViewport(V);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),G.viewport(a),j.updateMatrices(nt,V),n=j.getFrustum(),M(R,U,j.camera,nt,this.type)}j.isPointLightShadow!==!0&&this.type===Nn&&_(j,U),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,w,I)};function _(b,R){let U=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new zn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,U,d,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,U,p,x,null)}function y(b,R,U,v){let w=null,I=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)w=I;else if(w=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=w.uuid,tt=R.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let F=L[tt];F===void 0&&(F=w.clone(),L[tt]=F,R.addEventListener("dispose",C)),w=F}if(w.visible=R.visible,w.wireframe=R.wireframe,v===Nn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=i.properties.get(w);G.light=U}return w}function M(b,R,U,v,w){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Nn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);let tt=t.update(b),L=b.material;if(Array.isArray(L)){let F=tt.groups;for(let J=0,nt=F.length;J<nt;J++){let j=F[J],q=L[j.materialIndex];if(q&&q.visible){let N=y(b,q,v,w);b.onBeforeShadow(i,b,R,U,tt,N,j),i.renderBufferDirect(U,null,tt,N,b,j),b.onAfterShadow(i,b,R,U,tt,N,j)}}}else if(L.visible){let F=y(b,L,v,w);b.onBeforeShadow(i,b,R,U,tt,F,null),i.renderBufferDirect(U,null,tt,F,b,null),b.onAfterShadow(i,b,R,U,tt,F,null)}}let G=b.children;for(let tt=0,L=G.length;tt<L;tt++)M(G[tt],R,U,v,w)}function C(b){b.target.removeEventListener("dispose",C);for(let U in c){let v=c[U],w=b.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function B0(i,t,e){let n=e.isWebGL2;function s(){let P=!1,at=new xe,dt=null,Ct=new xe(0,0,0,0);return{setMask:function(Pt){dt!==Pt&&!P&&(i.colorMask(Pt,Pt,Pt,Pt),dt=Pt)},setLocked:function(Pt){P=Pt},setClear:function(Pt,ie,se,Se,Le){Le===!0&&(Pt*=Se,ie*=Se,se*=Se),at.set(Pt,ie,se,Se),Ct.equals(at)===!1&&(i.clearColor(Pt,ie,se,Se),Ct.copy(at))},reset:function(){P=!1,dt=null,Ct.set(-1,0,0,0)}}}function r(){let P=!1,at=null,dt=null,Ct=null;return{setTest:function(Pt){Pt?Dt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Pt){at!==Pt&&!P&&(i.depthMask(Pt),at=Pt)},setFunc:function(Pt){if(dt!==Pt){switch(Pt){case yu:i.depthFunc(i.NEVER);break;case _u:i.depthFunc(i.ALWAYS);break;case vu:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case Mu:i.depthFunc(i.EQUAL);break;case Su:i.depthFunc(i.GEQUAL);break;case Eu:i.depthFunc(i.GREATER);break;case bu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Pt}},setLocked:function(Pt){P=Pt},setClear:function(Pt){Ct!==Pt&&(i.clearDepth(Pt),Ct=Pt)},reset:function(){P=!1,at=null,dt=null,Ct=null}}}function a(){let P=!1,at=null,dt=null,Ct=null,Pt=null,ie=null,se=null,Se=null,Le=null;return{setTest:function(he){P||(he?Dt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(he){at!==he&&!P&&(i.stencilMask(he),at=he)},setFunc:function(he,Ye,wn){(dt!==he||Ct!==Ye||Pt!==wn)&&(i.stencilFunc(he,Ye,wn),dt=he,Ct=Ye,Pt=wn)},setOp:function(he,Ye,wn){(ie!==he||se!==Ye||Se!==wn)&&(i.stencilOp(he,Ye,wn),ie=he,se=Ye,Se=wn)},setLocked:function(he){P=he},setClear:function(he){Le!==he&&(i.clearStencil(he),Le=he)},reset:function(){P=!1,at=null,dt=null,Ct=null,Pt=null,ie=null,se=null,Se=null,Le=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],m=null,f=!1,_=null,y=null,M=null,C=null,b=null,R=null,U=null,v=new wt(0,0,0),w=0,I=!1,G=null,tt=null,L=null,F=null,J=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,q=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=q>=1):N.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=q>=2);let V=null,z={},D=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),it=new xe().fromArray(D),ct=new xe().fromArray(k);function ft(P,at,dt,Ct){let Pt=new Uint8Array(4),ie=i.createTexture();i.bindTexture(P,ie),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<dt;se++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(at,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(at+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return ie}let bt={};bt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(bt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Dt(i.DEPTH_TEST),l.setFunc(Tr),Ht(!1),A(Tl),Dt(i.CULL_FACE),St(Qn);function Dt(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Ut(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function Jt(P,at){return p[P]!==at?(i.bindFramebuffer(P,at),p[P]=at,n&&(P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=at),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=at)),!0):!1}function W(P,at){let dt=x,Ct=!1;if(P)if(dt=g.get(at),dt===void 0&&(dt=[],g.set(at,dt)),P.isWebGLMultipleRenderTargets){let Pt=P.texture;if(dt.length!==Pt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,se=Pt.length;ie<se;ie++)dt[ie]=i.COLOR_ATTACHMENT0+ie;dt.length=Pt.length,Ct=!0}}else dt[0]!==i.COLOR_ATTACHMENT0&&(dt[0]=i.COLOR_ATTACHMENT0,Ct=!0);else dt[0]!==i.BACK&&(dt[0]=i.BACK,Ct=!0);Ct&&(e.isWebGL2?i.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function Pe(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let It={[Mi]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[su]:i.FUNC_REVERSE_SUBTRACT};if(n)It[Cl]=i.MIN,It[Pl]=i.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(It[Cl]=P.MIN_EXT,It[Pl]=P.MAX_EXT)}let Bt={[ru]:i.ZERO,[au]:i.ONE,[ou]:i.SRC_COLOR,[so]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[uu]:i.DST_COLOR,[cu]:i.DST_ALPHA,[lu]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[du]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[pu]:i.CONSTANT_COLOR,[mu]:i.ONE_MINUS_CONSTANT_COLOR,[gu]:i.CONSTANT_ALPHA,[xu]:i.ONE_MINUS_CONSTANT_ALPHA};function St(P,at,dt,Ct,Pt,ie,se,Se,Le,he){if(P===Qn){f===!0&&(Ut(i.BLEND),f=!1);return}if(f===!1&&(Dt(i.BLEND),f=!0),P!==nu){if(P!==_||he!==I){if((y!==Mi||b!==Mi)&&(i.blendEquation(i.FUNC_ADD),y=Mi,b=Mi),he)switch(P){case kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Be:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Be:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,C=null,R=null,U=null,v.set(0,0,0),w=0,_=P,I=he}return}Pt=Pt||at,ie=ie||dt,se=se||Ct,(at!==y||Pt!==b)&&(i.blendEquationSeparate(It[at],It[Pt]),y=at,b=Pt),(dt!==M||Ct!==C||ie!==R||se!==U)&&(i.blendFuncSeparate(Bt[dt],Bt[Ct],Bt[ie],Bt[se]),M=dt,C=Ct,R=ie,U=se),(Se.equals(v)===!1||Le!==w)&&(i.blendColor(Se.r,Se.g,Se.b,Le),v.copy(Se),w=Le),_=P,I=!1}function oe(P,at){P.side===ye?Ut(i.CULL_FACE):Dt(i.CULL_FACE);let dt=P.side===je;at&&(dt=!dt),Ht(dt),P.blending===kn&&P.transparent===!1?St(Qn):St(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let Ct=P.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),X(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Dt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(P){G!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),G=P)}function A(P){P!==tu?(Dt(i.CULL_FACE),P!==tt&&(P===Tl?i.cullFace(i.BACK):P===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),tt=P}function S(P){P!==L&&(j&&i.lineWidth(P),L=P)}function X(P,at,dt){P?(Dt(i.POLYGON_OFFSET_FILL),(F!==at||J!==dt)&&(i.polygonOffset(at,dt),F=at,J=dt)):Ut(i.POLYGON_OFFSET_FILL)}function ht(P){P?Dt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function ot(P){P===void 0&&(P=i.TEXTURE0+nt-1),V!==P&&(i.activeTexture(P),V=P)}function ut(P,at,dt){dt===void 0&&(V===null?dt=i.TEXTURE0+nt-1:dt=V);let Ct=z[dt];Ct===void 0&&(Ct={type:void 0,texture:void 0},z[dt]=Ct),(Ct.type!==P||Ct.texture!==at)&&(V!==dt&&(i.activeTexture(dt),V=dt),i.bindTexture(P,at||bt[P]),Ct.type=P,Ct.texture=at)}function Et(){let P=z[V];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function xt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function jt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ft(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(P){it.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),it.copy(P))}function et(P){ct.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ct.copy(P))}function yt(P,at){let dt=u.get(at);dt===void 0&&(dt=new WeakMap,u.set(at,dt));let Ct=dt.get(P);Ct===void 0&&(Ct=i.getUniformBlockIndex(at,P.name),dt.set(P,Ct))}function rt(P,at){let Ct=u.get(at).get(P);h.get(at)!==Ct&&(i.uniformBlockBinding(at,Ct,P.__bindingPointIndex),h.set(at,Ct))}function K(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},V=null,z={},p={},g=new WeakMap,x=[],m=null,f=!1,_=null,y=null,M=null,C=null,b=null,R=null,U=null,v=new wt(0,0,0),w=0,I=!1,G=null,tt=null,L=null,F=null,J=null,it.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Dt,disable:Ut,bindFramebuffer:Jt,drawBuffers:W,useProgram:Pe,setBlending:St,setMaterial:oe,setFlipSided:Ht,setCullFace:A,setLineWidth:S,setPolygonOffset:X,setScissorTest:ht,activeTexture:ot,bindTexture:ut,unbindTexture:Et,compressedTexImage2D:xt,compressedTexImage3D:pt,texImage2D:H,texImage3D:O,updateUBOMapping:yt,uniformBlockBinding:rt,texStorage2D:kt,texStorage3D:Ft,texSubImage2D:Rt,texSubImage3D:Wt,compressedTexSubImage2D:lt,compressedTexSubImage3D:jt,scissor:Q,viewport:et,reset:K}}function k0(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Dr("canvas")}function x(A,S,X,ht){let ot=1;if((A.width>ht||A.height>ht)&&(ot=ht/Math.max(A.width,A.height)),ot<1||S===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let ut=S?uo:Math.floor,Et=ut(ot*A.width),xt=ut(ot*A.height);u===void 0&&(u=g(Et,xt));let pt=X?g(Et,xt):u;return pt.width=Et,pt.height=xt,pt.getContext("2d").drawImage(A,0,0,Et,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Et+"x"+xt+")."),pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return lc(A.width)&&lc(A.height)}function f(A){return o?!1:A.wrapS!==_n||A.wrapT!==_n||A.minFilter!==Je&&A.minFilter!==hn}function _(A,S){return A.generateMipmaps&&S&&A.minFilter!==Je&&A.minFilter!==hn}function y(A){i.generateMipmap(A)}function M(A,S,X,ht,ot=!1){if(o===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut=S;if(S===i.RED&&(X===i.FLOAT&&(ut=i.R32F),X===i.HALF_FLOAT&&(ut=i.R16F),X===i.UNSIGNED_BYTE&&(ut=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ut=i.R8UI),X===i.UNSIGNED_SHORT&&(ut=i.R16UI),X===i.UNSIGNED_INT&&(ut=i.R32UI),X===i.BYTE&&(ut=i.R8I),X===i.SHORT&&(ut=i.R16I),X===i.INT&&(ut=i.R32I)),S===i.RG&&(X===i.FLOAT&&(ut=i.RG32F),X===i.HALF_FLOAT&&(ut=i.RG16F),X===i.UNSIGNED_BYTE&&(ut=i.RG8)),S===i.RGBA){let Et=ot?Cr:ae.getTransfer(ht);X===i.FLOAT&&(ut=i.RGBA32F),X===i.HALF_FLOAT&&(ut=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ut=Et===fe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function C(A,S,X){return _(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){return A===Je||A===Ll||A===Ma?i.NEAREST:i.LINEAR}function R(A){let S=A.target;S.removeEventListener("dispose",R),v(S),S.isVideoTexture&&h.delete(S)}function U(A){let S=A.target;S.removeEventListener("dispose",U),I(S)}function v(A){let S=n.get(A);if(S.__webglInit===void 0)return;let X=A.source,ht=d.get(X);if(ht){let ot=ht[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&w(A),Object.keys(ht).length===0&&d.delete(X)}n.remove(A)}function w(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let X=A.source,ht=d.get(X);delete ht[S.__cacheKey],a.memory.textures--}function I(A){let S=A.texture,X=n.get(A),ht=n.get(S);if(ht.__webglTexture!==void 0&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(X.__webglFramebuffer[ot]))for(let ut=0;ut<X.__webglFramebuffer[ot].length;ut++)i.deleteFramebuffer(X.__webglFramebuffer[ot][ut]);else i.deleteFramebuffer(X.__webglFramebuffer[ot]);X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[ot])}else{if(Array.isArray(X.__webglFramebuffer))for(let ot=0;ot<X.__webglFramebuffer.length;ot++)i.deleteFramebuffer(X.__webglFramebuffer[ot]);else i.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ot=0;ot<X.__webglColorRenderbuffer.length;ot++)X.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[ot]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ot=0,ut=S.length;ot<ut;ot++){let Et=n.get(S[ot]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),a.memory.textures--),n.remove(S[ot])}n.remove(S),n.remove(A)}let G=0;function tt(){G=0}function L(){let A=G;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),G+=1,A}function F(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function J(A,S){let X=n.get(A);if(A.isVideoTexture&&oe(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let ht=A.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(X,A,S);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function nt(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){it(X,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function j(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){it(X,A,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function q(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){ct(X,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}let N={[cs]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[oo]:i.MIRRORED_REPEAT},V={[Je]:i.NEAREST,[Ll]:i.NEAREST_MIPMAP_NEAREST,[Ma]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Iu]:i.LINEAR_MIPMAP_NEAREST,[Ns]:i.LINEAR_MIPMAP_LINEAR},z={[Gu]:i.NEVER,[Zu]:i.ALWAYS,[Wu]:i.LESS,[mh]:i.LEQUAL,[qu]:i.EQUAL,[$u]:i.GEQUAL,[Xu]:i.GREATER,[Yu]:i.NOTEQUAL};function D(A,S,X){if(X?(i.texParameteri(A,i.TEXTURE_WRAP_S,N[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,N[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,N[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,V[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,V[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==_n||S.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,b(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==Je&&S.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,z[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ht=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Je||S.minFilter!==Ma&&S.minFilter!==Ns||S.type===Kn&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Fs&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function k(A,S){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));let ht=S.source,ot=d.get(ht);ot===void 0&&(ot={},d.set(ht,ot));let ut=F(S);if(ut!==A.__cacheKey){ot[ut]===void 0&&(ot[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ot[ut].usedTimes++;let Et=ot[A.__cacheKey];Et!==void 0&&(ot[A.__cacheKey].usedTimes--,Et.usedTimes===0&&w(S)),A.__cacheKey=ut,A.__webglTexture=ot[ut].texture}return X}function it(A,S,X){let ht=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ht=i.TEXTURE_3D);let ot=k(A,S),ut=S.source;e.bindTexture(ht,A.__webglTexture,i.TEXTURE0+X);let Et=n.get(ut);if(ut.version!==Et.__version||ot===!0){e.activeTexture(i.TEXTURE0+X);let xt=ae.getPrimaries(ae.workingColorSpace),pt=S.colorSpace===un?null:ae.getPrimaries(S.colorSpace),Rt=S.colorSpace===un||xt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Wt=f(S)&&m(S.image)===!1,lt=x(S.image,Wt,!1,s.maxTextureSize);lt=Ht(S,lt);let jt=m(lt)||o,kt=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type),H=M(S.internalFormat,kt,Ft,S.colorSpace,S.isVideoTexture);D(ht,S,jt);let O,Q=S.mipmaps,et=o&&S.isVideoTexture!==!0&&H!==dh,yt=Et.__version===void 0||ot===!0,rt=C(S,lt,jt);if(S.isDepthTexture)H=i.DEPTH_COMPONENT,o?S.type===Kn?H=i.DEPTH_COMPONENT32F:S.type===Jn?H=i.DEPTH_COMPONENT24:S.type===bi?H=i.DEPTH24_STENCIL8:H=i.DEPTH_COMPONENT16:S.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===wi&&H===i.DEPTH_COMPONENT&&S.type!==Zo&&S.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Jn,Ft=r.convert(S.type)),S.format===hs&&H===i.DEPTH_COMPONENT&&(H=i.DEPTH_STENCIL,S.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=bi,Ft=r.convert(S.type))),yt&&(et?e.texStorage2D(i.TEXTURE_2D,1,H,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,H,lt.width,lt.height,0,kt,Ft,null));else if(S.isDataTexture)if(Q.length>0&&jt){et&&yt&&e.texStorage2D(i.TEXTURE_2D,rt,H,Q[0].width,Q[0].height);for(let K=0,P=Q.length;K<P;K++)O=Q[K],et?e.texSubImage2D(i.TEXTURE_2D,K,0,0,O.width,O.height,kt,Ft,O.data):e.texImage2D(i.TEXTURE_2D,K,H,O.width,O.height,0,kt,Ft,O.data);S.generateMipmaps=!1}else et?(yt&&e.texStorage2D(i.TEXTURE_2D,rt,H,lt.width,lt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,kt,Ft,lt.data)):e.texImage2D(i.TEXTURE_2D,0,H,lt.width,lt.height,0,kt,Ft,lt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,H,Q[0].width,Q[0].height,lt.depth);for(let K=0,P=Q.length;K<P;K++)O=Q[K],S.format!==vn?kt!==null?et?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,O.width,O.height,lt.depth,kt,O.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,H,O.width,O.height,lt.depth,0,O.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,O.width,O.height,lt.depth,kt,Ft,O.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,H,O.width,O.height,lt.depth,0,kt,Ft,O.data)}else{et&&yt&&e.texStorage2D(i.TEXTURE_2D,rt,H,Q[0].width,Q[0].height);for(let K=0,P=Q.length;K<P;K++)O=Q[K],S.format!==vn?kt!==null?et?e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,O.width,O.height,kt,O.data):e.compressedTexImage2D(i.TEXTURE_2D,K,H,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?e.texSubImage2D(i.TEXTURE_2D,K,0,0,O.width,O.height,kt,Ft,O.data):e.texImage2D(i.TEXTURE_2D,K,H,O.width,O.height,0,kt,Ft,O.data)}else if(S.isDataArrayTexture)et?(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,H,lt.width,lt.height,lt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,kt,Ft,lt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,H,lt.width,lt.height,lt.depth,0,kt,Ft,lt.data);else if(S.isData3DTexture)et?(yt&&e.texStorage3D(i.TEXTURE_3D,rt,H,lt.width,lt.height,lt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,kt,Ft,lt.data)):e.texImage3D(i.TEXTURE_3D,0,H,lt.width,lt.height,lt.depth,0,kt,Ft,lt.data);else if(S.isFramebufferTexture){if(yt)if(et)e.texStorage2D(i.TEXTURE_2D,rt,H,lt.width,lt.height);else{let K=lt.width,P=lt.height;for(let at=0;at<rt;at++)e.texImage2D(i.TEXTURE_2D,at,H,K,P,0,kt,Ft,null),K>>=1,P>>=1}}else if(Q.length>0&&jt){et&&yt&&e.texStorage2D(i.TEXTURE_2D,rt,H,Q[0].width,Q[0].height);for(let K=0,P=Q.length;K<P;K++)O=Q[K],et?e.texSubImage2D(i.TEXTURE_2D,K,0,0,kt,Ft,O):e.texImage2D(i.TEXTURE_2D,K,H,kt,Ft,O);S.generateMipmaps=!1}else et?(yt&&e.texStorage2D(i.TEXTURE_2D,rt,H,lt.width,lt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Ft,lt)):e.texImage2D(i.TEXTURE_2D,0,H,kt,Ft,lt);_(S,jt)&&y(ht),Et.__version=ut.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ct(A,S,X){if(S.image.length!==6)return;let ht=k(A,S),ot=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let ut=n.get(ot);if(ot.version!==ut.__version||ht===!0){e.activeTexture(i.TEXTURE0+X);let Et=ae.getPrimaries(ae.workingColorSpace),xt=S.colorSpace===un?null:ae.getPrimaries(S.colorSpace),pt=S.colorSpace===un||Et===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,Wt=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let K=0;K<6;K++)!Rt&&!Wt?lt[K]=x(S.image[K],!1,!0,s.maxCubemapSize):lt[K]=Wt?S.image[K].image:S.image[K],lt[K]=Ht(S,lt[K]);let jt=lt[0],kt=m(jt)||o,Ft=r.convert(S.format,S.colorSpace),H=r.convert(S.type),O=M(S.internalFormat,Ft,H,S.colorSpace),Q=o&&S.isVideoTexture!==!0,et=ut.__version===void 0||ht===!0,yt=C(S,jt,kt);D(i.TEXTURE_CUBE_MAP,S,kt);let rt;if(Rt){Q&&et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,O,jt.width,jt.height);for(let K=0;K<6;K++){rt=lt[K].mipmaps;for(let P=0;P<rt.length;P++){let at=rt[P];S.format!==vn?Ft!==null?Q?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,P,0,0,at.width,at.height,Ft,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,P,O,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,P,0,0,at.width,at.height,Ft,H,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,P,O,at.width,at.height,0,Ft,H,at.data)}}}else{rt=S.mipmaps,Q&&et&&(rt.length>0&&yt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,O,lt[0].width,lt[0].height));for(let K=0;K<6;K++)if(Wt){Q?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,lt[K].width,lt[K].height,Ft,H,lt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,O,lt[K].width,lt[K].height,0,Ft,H,lt[K].data);for(let P=0;P<rt.length;P++){let dt=rt[P].image[K].image;Q?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,P+1,0,0,dt.width,dt.height,Ft,H,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,P+1,O,dt.width,dt.height,0,Ft,H,dt.data)}}else{Q?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ft,H,lt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,O,Ft,H,lt[K]);for(let P=0;P<rt.length;P++){let at=rt[P];Q?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,P+1,0,0,Ft,H,at.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,P+1,O,Ft,H,at.image[K])}}}_(S,kt)&&y(i.TEXTURE_CUBE_MAP),ut.__version=ot.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ft(A,S,X,ht,ot,ut){let Et=r.convert(X.format,X.colorSpace),xt=r.convert(X.type),pt=M(X.internalFormat,Et,xt,X.colorSpace);if(!n.get(S).__hasExternalTextures){let Wt=Math.max(1,S.width>>ut),lt=Math.max(1,S.height>>ut);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,ut,pt,Wt,lt,S.depth,0,Et,xt,null):e.texImage2D(ot,ut,pt,Wt,lt,0,Et,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),St(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,ot,n.get(X).__webglTexture,0,Bt(S)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,ot,n.get(X).__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(A,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ht=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(X||St(S)){let ot=S.depthTexture;ot&&ot.isDepthTexture&&(ot.type===Kn?ht=i.DEPTH_COMPONENT32F:ot.type===Jn&&(ht=i.DEPTH_COMPONENT24));let ut=Bt(S);St(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,ht,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,ht,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ht,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let ht=Bt(S);X&&St(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,S.width,S.height):St(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let ht=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ot=0;ot<ht.length;ot++){let ut=ht[ot],Et=r.convert(ut.format,ut.colorSpace),xt=r.convert(ut.type),pt=M(ut.internalFormat,Et,xt,ut.colorSpace),Rt=Bt(S);X&&St(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,pt,S.width,S.height):St(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,pt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,pt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);let ht=n.get(S.depthTexture).__webglTexture,ot=Bt(S);if(S.depthTexture.format===wi)St(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(S.depthTexture.format===hs)St(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Ut(A){let S=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Dt(S.__webglFramebuffer,A)}else if(X){S.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ht]),S.__webglDepthbuffer[ht]=i.createRenderbuffer(),bt(S.__webglDepthbuffer[ht],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),bt(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(A,S,X){let ht=n.get(A);S!==void 0&&ft(ht.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ut(A)}function W(A){let S=A.texture,X=n.get(A),ht=n.get(S);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=S.version,a.memory.textures++);let ot=A.isWebGLCubeRenderTarget===!0,ut=A.isWebGLMultipleRenderTargets===!0,Et=m(A)||o;if(ot){X.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(o&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[xt]=[];for(let pt=0;pt<S.mipmaps.length;pt++)X.__webglFramebuffer[xt][pt]=i.createFramebuffer()}else X.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let xt=0;xt<S.mipmaps.length;xt++)X.__webglFramebuffer[xt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ut)if(s.drawBuffers){let xt=A.texture;for(let pt=0,Rt=xt.length;pt<Rt;pt++){let Wt=n.get(xt[pt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&St(A)===!1){let xt=ut?S:[S];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let pt=0;pt<xt.length;pt++){let Rt=xt[pt];X.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[pt]);let Wt=r.convert(Rt.format,Rt.colorSpace),lt=r.convert(Rt.type),jt=M(Rt.internalFormat,Wt,lt,Rt.colorSpace,A.isXRRenderTarget===!0),kt=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,jt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,X.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),D(i.TEXTURE_CUBE_MAP,S,Et);for(let xt=0;xt<6;xt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)ft(X.__webglFramebuffer[xt][pt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,pt);else ft(X.__webglFramebuffer[xt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);_(S,Et)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){let xt=A.texture;for(let pt=0,Rt=xt.length;pt<Rt;pt++){let Wt=xt[pt],lt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),D(i.TEXTURE_2D,Wt,Et),ft(X.__webglFramebuffer,A,Wt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),_(Wt,Et)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,ht.__webglTexture),D(xt,S,Et),o&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)ft(X.__webglFramebuffer[pt],A,S,i.COLOR_ATTACHMENT0,xt,pt);else ft(X.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,xt,0);_(S,Et)&&y(xt),e.unbindTexture()}A.depthBuffer&&Ut(A)}function Pe(A){let S=m(A)||o,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ht=0,ot=X.length;ht<ot;ht++){let ut=X[ht];if(_(ut,S)){let Et=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(ut).__webglTexture;e.bindTexture(Et,xt),y(Et),e.unbindTexture()}}}function It(A){if(o&&A.samples>0&&St(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,ht=A.height,ot=i.COLOR_BUFFER_BIT,ut=[],Et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(A),pt=A.isWebGLMultipleRenderTargets===!0;if(pt)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){ut.push(i.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&ut.push(Et);let Wt=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Wt===!1&&(A.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),pt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Rt]),Wt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Et]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Et])),pt){let lt=n.get(S[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,X,ht,0,0,X,ht,ot,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Rt]);let Wt=n.get(S[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function St(A){let S=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function oe(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ht(A,S){let X=A.colorSpace,ht=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===co||X!==Hn&&X!==un&&(ae.getTransfer(X)===fe?o===!1?t.has("EXT_sRGB")===!0&&ht===vn?(A.format=co,A.minFilter=hn,A.generateMipmaps=!1):S=Ur.sRGBToLinear(S):(ht!==vn||ot!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}this.allocateTextureUnit=L,this.resetTextureUnits=tt,this.setTexture2D=J,this.setTexture2DArray=nt,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Jt,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=St}function H0(i,t,e){let n=e.isWebGL2;function s(r,a=un){let o,l=ae.getTransfer(a);if(r===ti)return i.UNSIGNED_BYTE;if(r===oh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===lh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Du)return i.BYTE;if(r===Uu)return i.SHORT;if(r===Zo)return i.UNSIGNED_SHORT;if(r===ah)return i.INT;if(r===Jn)return i.UNSIGNED_INT;if(r===Kn)return i.FLOAT;if(r===Fs)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Nu)return i.ALPHA;if(r===vn)return i.RGBA;if(r===Fu)return i.LUMINANCE;if(r===Ou)return i.LUMINANCE_ALPHA;if(r===wi)return i.DEPTH_COMPONENT;if(r===hs)return i.DEPTH_STENCIL;if(r===co)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bu)return i.RED;if(r===ch)return i.RED_INTEGER;if(r===ku)return i.RG;if(r===hh)return i.RG_INTEGER;if(r===uh)return i.RGBA_INTEGER;if(r===Sa||r===Ea||r===ba||r===wa)if(l===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ea)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ba)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Il||r===Dl||r===Ul||r===Nl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Il)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ul)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fl||r===Ol)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fl)return l===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ol)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bl||r===kl||r===Hl||r===zl||r===Vl||r===Gl||r===Wl||r===ql||r===Xl||r===Yl||r===$l||r===Zl||r===Jl||r===Kl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Bl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ql)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$l)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ta||r===Ql||r===jl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ta)return l===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ql)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hu||r===tc||r===ec||r===nc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ta)return o.COMPRESSED_RED_RGTC1_EXT;if(r===tc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ec)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var bo=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},zt=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},z0={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wo=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=e.getContextAttributes(),m=null,f=null,_=[],y=[],M=new gt,C=null,b=new we;b.layers.enable(1),b.viewport=new xe;let R=new we;R.layers.enable(2),R.viewport=new xe;let U=[b,R],v=new bo;v.layers.enable(1),v.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let k=_[D];return k===void 0&&(k=new Is,_[D]=k),k.getTargetRaySpace()},this.getControllerGrip=function(D){let k=_[D];return k===void 0&&(k=new Is,_[D]=k),k.getGripSpace()},this.getHand=function(D){let k=_[D];return k===void 0&&(k=new Is,_[D]=k),k.getHandSpace()};function G(D){let k=y.indexOf(D.inputSource);if(k===-1)return;let it=_[k];it!==void 0&&(it.update(D.inputSource,D.frame,c||a),it.dispatchEvent({type:D.type,data:D.inputSource}))}function tt(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",L);for(let D=0;D<_.length;D++){let k=y[D];k!==null&&(y[D]=null,_[D].disconnect(k))}w=null,I=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let k={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new zn(p.framebufferWidth,p.framebufferHeight,{format:vn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let k=null,it=null,ct=null;x.depth&&(ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=x.stencil?hs:wi,it=x.stencil?bi:Jn);let ft={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new zn(d.textureWidth,d.textureHeight,{format:vn,type:ti,depthTexture:new Wr(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let bt=t.properties.get(f);bt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),z.setContext(s),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(D){for(let k=0;k<D.removed.length;k++){let it=D.removed[k],ct=y.indexOf(it);ct>=0&&(y[ct]=null,_[ct].disconnect(it))}for(let k=0;k<D.added.length;k++){let it=D.added[k],ct=y.indexOf(it);if(ct===-1){for(let bt=0;bt<_.length;bt++)if(bt>=y.length){y.push(it),ct=bt;break}else if(y[bt]===null){y[bt]=it,ct=bt;break}if(ct===-1)break}let ft=_[ct];ft&&ft.connect(it)}}let F=new E,J=new E;function nt(D,k,it){F.setFromMatrixPosition(k.matrixWorld),J.setFromMatrixPosition(it.matrixWorld);let ct=F.distanceTo(J),ft=k.projectionMatrix.elements,bt=it.projectionMatrix.elements,Dt=ft[14]/(ft[10]-1),Ut=ft[14]/(ft[10]+1),Jt=(ft[9]+1)/ft[5],W=(ft[9]-1)/ft[5],Pe=(ft[8]-1)/ft[0],It=(bt[8]+1)/bt[0],Bt=Dt*Pe,St=Dt*It,oe=ct/(-Pe+It),Ht=oe*-Pe;k.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ht),D.translateZ(oe),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();let A=Dt+oe,S=Ut+oe,X=Bt-Ht,ht=St+(ct-Ht),ot=Jt*Ut/S*A,ut=W*Ut/S*A;D.projectionMatrix.makePerspective(X,ht,ot,ut,A,S),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function j(D,k){k===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(k.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;v.near=R.near=b.near=D.near,v.far=R.far=b.far=D.far,(w!==v.near||I!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,I=v.far);let k=D.parent,it=v.cameras;j(v,k);for(let ct=0;ct<it.length;ct++)j(it[ct],k);it.length===2?nt(v,b,R):v.projectionMatrix.copy(b.projectionMatrix),q(D,v,k)};function q(D,k,it){it===null?D.matrix.copy(k.matrixWorld):(D.matrix.copy(it.matrixWorld),D.matrix.invert(),D.matrix.multiply(k.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(k.projectionMatrix),D.projectionMatrixInverse.copy(k.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=ho*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let N=null;function V(D,k){if(h=k.getViewerPose(c||a),g=k,h!==null){let it=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let ct=!1;it.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let ft=0;ft<it.length;ft++){let bt=it[ft],Dt=null;if(p!==null)Dt=p.getViewport(bt);else{let Jt=u.getViewSubImage(d,bt);Dt=Jt.viewport,ft===0&&(t.setRenderTargetTextures(f,Jt.colorTexture,d.ignoreDepthValues?void 0:Jt.depthStencilTexture),t.setRenderTarget(f))}let Ut=U[ft];Ut===void 0&&(Ut=new we,Ut.layers.enable(ft),Ut.viewport=new xe,U[ft]=Ut),Ut.matrix.fromArray(bt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(bt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),ft===0&&(v.matrix.copy(Ut.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(Ut)}}for(let it=0;it<_.length;it++){let ct=y[it],ft=_[it];ct!==null&&ft!==void 0&&ft.update(ct,k,c||a)}N&&N(D,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let z=new vh;z.setAnimationLoop(V),this.setAnimationLoop=function(D){N=D},this.dispose=function(){}}};function V0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,_h(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=t.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===je&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G0(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){let M=y.program;n.uniformBlockBinding(_,M)}function c(_,y){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",m));let C=y.program;n.updateUBOMapping(_,C);let b=t.render.frame;r[_.id]!==b&&(d(_),r[_.id]=b)}function h(_){let y=u();_.__bindingPointIndex=y;let M=i.createBuffer(),C=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],M=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,R=M.length;b<R;b++){let U=Array.isArray(M[b])?M[b]:[M[b]];for(let v=0,w=U.length;v<w;v++){let I=U[v];if(p(I,b,v,C)===!0){let G=I.__offset,tt=Array.isArray(I.value)?I.value:[I.value],L=0;for(let F=0;F<tt.length;F++){let J=tt[F],nt=x(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,G+L,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,L),L+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,y,M,C){let b=_.value,R=y+"_"+M;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:C[R]=b.clone(),!0;{let U=C[R];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return C[R]=b,!0}else if(U.equals(b)===!1)return U.copy(b),!0}return!1}function g(_){let y=_.uniforms,M=0,C=16;for(let R=0,U=y.length;R<U;R++){let v=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,I=v.length;w<I;w++){let G=v[w],tt=Array.isArray(G.value)?G.value:[G.value];for(let L=0,F=tt.length;L<F;L++){let J=tt[L],nt=x(J),j=M%C;j!==0&&C-j<nt.boundary&&(M+=C-j),G.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=nt.storage}}}let b=M%C;return b>0&&(M+=C-b),_.__size=M,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ri=class{constructor(t={}){let{canvas:e=Ku(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;let y=this,M=!1,C=0,b=0,R=null,U=-1,v=null,w=new xe,I=new xe,G=null,tt=new wt(0),L=0,F=e.width,J=e.height,nt=1,j=null,q=null,N=new xe(0,0,F,J),V=new xe(0,0,F,J),z=!1,D=new Os,k=!1,it=!1,ct=null,ft=new Yt,bt=new gt,Dt=new E,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Jt(){return R===null?nt:1}let W=n;function Pe(T,B){for(let $=0;$<T.length;$++){let Z=T[$],Y=e.getContext(Z,B);if(Y!==null)return Y}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",at,!1),W===null){let B=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&B.shift(),W=Pe(B,T),W===null)throw Pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let It,Bt,St,oe,Ht,A,S,X,ht,ot,ut,Et,xt,pt,Rt,Wt,lt,jt,kt,Ft,H,O,Q,et;function yt(){It=new lm(W),Bt=new nm(W,It,t),It.init(Bt),O=new H0(W,It,Bt),St=new B0(W,It,Bt),oe=new um(W),Ht=new T0,A=new k0(W,It,St,Ht,Bt,O,oe),S=new sm(y),X=new om(y),ht=new yd(W,Bt),Q=new tm(W,It,ht,Bt),ot=new cm(W,ht,oe,Q),ut=new mm(W,ot,ht,oe),kt=new pm(W,Bt,A),Wt=new im(Ht),Et=new w0(y,S,X,It,Bt,Q,Wt),xt=new V0(y,Ht),pt=new R0,Rt=new U0(It,Bt),jt=new jp(y,S,X,St,ut,d,l),lt=new O0(y,ut,Bt),et=new G0(W,oe,Bt,St),Ft=new em(W,It,oe,Bt),H=new hm(W,It,oe,Bt),oe.programs=Et.programs,y.capabilities=Bt,y.extensions=It,y.properties=Ht,y.renderLists=pt,y.shadowMap=lt,y.state=St,y.info=oe}yt();let rt=new wo(y,W);this.xr=rt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let T=It.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=It.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(T){T!==void 0&&(nt=T,this.setSize(F,J,!1))},this.getSize=function(T){return T.set(F,J)},this.setSize=function(T,B,$=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,J=B,e.width=Math.floor(T*nt),e.height=Math.floor(B*nt),$===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(F*nt,J*nt).floor()},this.setDrawingBufferSize=function(T,B,$){F=T,J=B,nt=$,e.width=Math.floor(T*$),e.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,B,$,Z){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,B,$,Z),St.viewport(w.copy(N).multiplyScalar(nt).floor())},this.getScissor=function(T){return T.copy(V)},this.setScissor=function(T,B,$,Z){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,B,$,Z),St.scissor(I.copy(V).multiplyScalar(nt).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){St.setScissorTest(z=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(T=!0,B=!0,$=!0){let Z=0;if(T){let Y=!1;if(R!==null){let vt=R.texture.format;Y=vt===uh||vt===hh||vt===ch}if(Y){let vt=R.texture.type,At=vt===ti||vt===Jn||vt===Zo||vt===bi||vt===oh||vt===lh,Nt=jt.getClearColor(),Ot=jt.getClearAlpha(),$t=Nt.r,Vt=Nt.g,qt=Nt.b;At?(p[0]=$t,p[1]=Vt,p[2]=qt,p[3]=Ot,W.clearBufferuiv(W.COLOR,0,p)):(g[0]=$t,g[1]=Vt,g[2]=qt,g[3]=Ot,W.clearBufferiv(W.COLOR,0,g))}else Z|=W.COLOR_BUFFER_BIT}B&&(Z|=W.DEPTH_BUFFER_BIT),$&&(Z|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",at,!1),pt.dispose(),Rt.dispose(),Ht.dispose(),S.dispose(),X.dispose(),ut.dispose(),Q.dispose(),et.dispose(),Et.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Le),rt.removeEventListener("sessionend",he),ct&&(ct.dispose(),ct=null),Ye.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=oe.autoReset,B=lt.enabled,$=lt.autoUpdate,Z=lt.needsUpdate,Y=lt.type;yt(),oe.autoReset=T,lt.enabled=B,lt.autoUpdate=$,lt.needsUpdate=Z,lt.type=Y}function at(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){let B=T.target;B.removeEventListener("dispose",dt),Ct(B)}function Ct(T){Pt(T),Ht.remove(T)}function Pt(T){let B=Ht.get(T).programs;B!==void 0&&(B.forEach(function($){Et.releaseProgram($)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,Z,Y,vt){B===null&&(B=Ut);let At=Y.isMesh&&Y.matrixWorld.determinant()<0,Nt=Jh(T,B,$,Z,Y);St.setMaterial(Z,At);let Ot=$.index,$t=1;if(Z.wireframe===!0){if(Ot=ot.getWireframeAttribute($),Ot===void 0)return;$t=2}let Vt=$.drawRange,qt=$.attributes.position,Ee=Vt.start*$t,en=(Vt.start+Vt.count)*$t;vt!==null&&(Ee=Math.max(Ee,vt.start*$t),en=Math.min(en,(vt.start+vt.count)*$t)),Ot!==null?(Ee=Math.max(Ee,0),en=Math.min(en,Ot.count)):qt!=null&&(Ee=Math.max(Ee,0),en=Math.min(en,qt.count));let Ie=en-Ee;if(Ie<0||Ie===1/0)return;Q.setup(Y,Z,Nt,$,Ot);let Cn,_e=Ft;if(Ot!==null&&(Cn=ht.get(Ot),_e=H,_e.setIndex(Cn)),Y.isMesh)Z.wireframe===!0?(St.setLineWidth(Z.wireframeLinewidth*Jt()),_e.setMode(W.LINES)):_e.setMode(W.TRIANGLES);else if(Y.isLine){let Kt=Z.linewidth;Kt===void 0&&(Kt=1),St.setLineWidth(Kt*Jt()),Y.isLineSegments?_e.setMode(W.LINES):Y.isLineLoop?_e.setMode(W.LINE_LOOP):_e.setMode(W.LINE_STRIP)}else Y.isPoints?_e.setMode(W.POINTS):Y.isSprite&&_e.setMode(W.TRIANGLES);if(Y.isBatchedMesh)_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)_e.renderInstances(Ee,Ie,Y.count);else if($.isInstancedBufferGeometry){let Kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,xa=Math.min($.instanceCount,Kt);_e.renderInstances(Ee,Ie,xa)}else _e.render(Ee,Ie)};function ie(T,B,$){T.transparent===!0&&T.side===ye&&T.forceSinglePass===!1?(T.side=je,T.needsUpdate=!0,Zs(T,B,$),T.side=An,T.needsUpdate=!0,Zs(T,B,$),T.side=ye):Zs(T,B,$)}this.compile=function(T,B,$=null){$===null&&($=T),m=Rt.get($),m.init(),_.push(m),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),T!==$&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(y._useLegacyLights);let Z=new Set;return T.traverse(function(Y){let vt=Y.material;if(vt)if(Array.isArray(vt))for(let At=0;At<vt.length;At++){let Nt=vt[At];ie(Nt,$,Y),Z.add(Nt)}else ie(vt,$,Y),Z.add(vt)}),_.pop(),m=null,Z},this.compileAsync=function(T,B,$=null){let Z=this.compile(T,B,$);return new Promise(Y=>{function vt(){if(Z.forEach(function(At){Ht.get(At).currentProgram.isReady()&&Z.delete(At)}),Z.size===0){Y(T);return}setTimeout(vt,10)}It.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let se=null;function Se(T){se&&se(T)}function Le(){Ye.stop()}function he(){Ye.start()}let Ye=new vh;Ye.setAnimationLoop(Se),typeof self!="undefined"&&Ye.setContext(self),this.setAnimationLoop=function(T){se=T,rt.setAnimationLoop(T),T===null?Ye.stop():Ye.start()},rt.addEventListener("sessionstart",Le),rt.addEventListener("sessionend",he),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(B),B=rt.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,R),m=Rt.get(T,_.length),m.init(),_.push(m),ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),D.setFromProjectionMatrix(ft),it=this.localClippingEnabled,k=Wt.init(this.clippingPlanes,it),x=pt.get(T,f.length),x.init(),f.push(x),wn(T,B,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(j,q),this.info.render.frame++,k===!0&&Wt.beginShadows();let $=m.state.shadowsArray;if(lt.render($,T,B),k===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(x,T),m.setupLights(y._useLegacyLights),B.isArrayCamera){let Z=B.cameras;for(let Y=0,vt=Z.length;Y<vt;Y++){let At=Z[Y];vl(x,T,At,At.viewport)}}else vl(x,T,B);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,B),Q.resetDefaultState(),U=-1,v=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function wn(T,B,$,Z){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||D.intersectsSprite(T)){Z&&Dt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ft);let At=ut.update(T),Nt=T.material;Nt.visible&&x.push(T,At,Nt,$,Dt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||D.intersectsObject(T))){let At=ut.update(T),Nt=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Dt.copy(T.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Dt.copy(At.boundingSphere.center)),Dt.applyMatrix4(T.matrixWorld).applyMatrix4(ft)),Array.isArray(Nt)){let Ot=At.groups;for(let $t=0,Vt=Ot.length;$t<Vt;$t++){let qt=Ot[$t],Ee=Nt[qt.materialIndex];Ee&&Ee.visible&&x.push(T,At,Ee,$,Dt.z,qt)}}else Nt.visible&&x.push(T,At,Nt,$,Dt.z,null)}}let vt=T.children;for(let At=0,Nt=vt.length;At<Nt;At++)wn(vt[At],B,$,Z)}function vl(T,B,$,Z){let Y=T.opaque,vt=T.transmissive,At=T.transparent;m.setupLightsView($),k===!0&&Wt.setGlobalState(y.clippingPlanes,$),vt.length>0&&Zh(Y,vt,B,$),Z&&St.viewport(w.copy(Z)),Y.length>0&&$s(Y,B,$),vt.length>0&&$s(vt,B,$),At.length>0&&$s(At,B,$),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Zh(T,B,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let vt=Bt.isWebGL2;ct===null&&(ct=new zn(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")?Fs:ti,minFilter:Ns,samples:vt?4:0})),y.getDrawingBufferSize(bt),vt?ct.setSize(bt.x,bt.y):ct.setSize(uo(bt.x),uo(bt.y));let At=y.getRenderTarget();y.setRenderTarget(ct),y.getClearColor(tt),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Nt=y.toneMapping;y.toneMapping=jn,$s(T,$,Z),A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct);let Ot=!1;for(let $t=0,Vt=B.length;$t<Vt;$t++){let qt=B[$t],Ee=qt.object,en=qt.geometry,Ie=qt.material,Cn=qt.group;if(Ie.side===ye&&Ee.layers.test(Z.layers)){let _e=Ie.side;Ie.side=je,Ie.needsUpdate=!0,Ml(Ee,$,Z,en,Ie,Cn),Ie.side=_e,Ie.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct)),y.setRenderTarget(At),y.setClearColor(tt,L),y.toneMapping=Nt}function $s(T,B,$){let Z=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,vt=T.length;Y<vt;Y++){let At=T[Y],Nt=At.object,Ot=At.geometry,$t=Z===null?At.material:Z,Vt=At.group;Nt.layers.test($.layers)&&Ml(Nt,B,$,Ot,$t,Vt)}}function Ml(T,B,$,Z,Y,vt){T.onBeforeRender(y,B,$,Z,Y,vt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(y,B,$,Z,T,vt),Y.transparent===!0&&Y.side===ye&&Y.forceSinglePass===!1?(Y.side=je,Y.needsUpdate=!0,y.renderBufferDirect($,B,Z,Y,T,vt),Y.side=An,Y.needsUpdate=!0,y.renderBufferDirect($,B,Z,Y,T,vt),Y.side=ye):y.renderBufferDirect($,B,Z,Y,T,vt),T.onAfterRender(y,B,$,Z,Y,vt)}function Zs(T,B,$){B.isScene!==!0&&(B=Ut);let Z=Ht.get(T),Y=m.state.lights,vt=m.state.shadowsArray,At=Y.state.version,Nt=Et.getParameters(T,Y.state,vt,B,$),Ot=Et.getProgramCacheKey(Nt),$t=Z.programs;Z.environment=T.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(T.isMeshStandardMaterial?X:S).get(T.envMap||Z.environment),$t===void 0&&(T.addEventListener("dispose",dt),$t=new Map,Z.programs=$t);let Vt=$t.get(Ot);if(Vt!==void 0){if(Z.currentProgram===Vt&&Z.lightsStateVersion===At)return El(T,Nt),Vt}else Nt.uniforms=Et.getUniforms(T),T.onBuild($,Nt,y),T.onBeforeCompile(Nt,y),Vt=Et.acquireProgram(Nt,Ot),$t.set(Ot,Vt),Z.uniforms=Nt.uniforms;let qt=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=Wt.uniform),El(T,Nt),Z.needsLights=Qh(T),Z.lightsStateVersion=At,Z.needsLights&&(qt.ambientLightColor.value=Y.state.ambient,qt.lightProbe.value=Y.state.probe,qt.directionalLights.value=Y.state.directional,qt.directionalLightShadows.value=Y.state.directionalShadow,qt.spotLights.value=Y.state.spot,qt.spotLightShadows.value=Y.state.spotShadow,qt.rectAreaLights.value=Y.state.rectArea,qt.ltc_1.value=Y.state.rectAreaLTC1,qt.ltc_2.value=Y.state.rectAreaLTC2,qt.pointLights.value=Y.state.point,qt.pointLightShadows.value=Y.state.pointShadow,qt.hemisphereLights.value=Y.state.hemi,qt.directionalShadowMap.value=Y.state.directionalShadowMap,qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qt.spotShadowMap.value=Y.state.spotShadowMap,qt.spotLightMatrix.value=Y.state.spotLightMatrix,qt.spotLightMap.value=Y.state.spotLightMap,qt.pointShadowMap.value=Y.state.pointShadowMap,qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Vt,Z.uniformsList=null,Vt}function Sl(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=as.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function El(T,B){let $=Ht.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Jh(T,B,$,Z,Y){B.isScene!==!0&&(B=Ut),A.resetTextureUnits();let vt=B.fog,At=Z.isMeshStandardMaterial?B.environment:null,Nt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Hn,Ot=(Z.isMeshStandardMaterial?X:S).get(Z.envMap||At),$t=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Vt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qt=!!$.morphAttributes.position,Ee=!!$.morphAttributes.normal,en=!!$.morphAttributes.color,Ie=jn;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ie=y.toneMapping);let Cn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_e=Cn!==void 0?Cn.length:0,Kt=Ht.get(Z),xa=m.state.lights;if(k===!0&&(it===!0||T!==v)){let ln=T===v&&Z.id===U;Wt.setState(Z,T,ln)}let Me=!1;Z.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==xa.state.version||Kt.outputColorSpace!==Nt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Kt.envMap!==Ot||Z.fog===!0&&Kt.fog!==vt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Wt.numPlanes||Kt.numIntersection!==Wt.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Vt||Kt.morphTargets!==qt||Kt.morphNormals!==Ee||Kt.morphColors!==en||Kt.toneMapping!==Ie||Bt.isWebGL2===!0&&Kt.morphTargetsCount!==_e)&&(Me=!0):(Me=!0,Kt.__version=Z.version);let pi=Kt.currentProgram;Me===!0&&(pi=Zs(Z,B,Y));let bl=!1,vs=!1,ya=!1,ze=pi.getUniforms(),mi=Kt.uniforms;if(St.useProgram(pi.program)&&(bl=!0,vs=!0,ya=!0),Z.id!==U&&(U=Z.id,vs=!0),bl||v!==T){ze.setValue(W,"projectionMatrix",T.projectionMatrix),ze.setValue(W,"viewMatrix",T.matrixWorldInverse);let ln=ze.map.cameraPosition;ln!==void 0&&ln.setValue(W,Dt.setFromMatrixPosition(T.matrixWorld)),Bt.logarithmicDepthBuffer&&ze.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ze.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,vs=!0,ya=!0)}if(Y.isSkinnedMesh){ze.setOptional(W,Y,"bindMatrix"),ze.setOptional(W,Y,"bindMatrixInverse");let ln=Y.skeleton;ln&&(Bt.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),ze.setValue(W,"boneTexture",ln.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(ze.setOptional(W,Y,"batchingTexture"),ze.setValue(W,"batchingTexture",Y._matricesTexture,A));let _a=$.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0&&Bt.isWebGL2===!0)&&kt.update(Y,$,pi),(vs||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,ze.setValue(W,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(mi.envMap.value=Ot,mi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),vs&&(ze.setValue(W,"toneMappingExposure",y.toneMappingExposure),Kt.needsLights&&Kh(mi,ya),vt&&Z.fog===!0&&xt.refreshFogUniforms(mi,vt),xt.refreshMaterialUniforms(mi,Z,nt,J,ct),as.upload(W,Sl(Kt),mi,A)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(as.upload(W,Sl(Kt),mi,A),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ze.setValue(W,"center",Y.center),ze.setValue(W,"modelViewMatrix",Y.modelViewMatrix),ze.setValue(W,"normalMatrix",Y.normalMatrix),ze.setValue(W,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let ln=Z.uniformsGroups;for(let va=0,jh=ln.length;va<jh;va++)if(Bt.isWebGL2){let wl=ln[va];et.update(wl,pi),et.bind(wl,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Kh(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Qh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,$){Ht.get(T.texture).__webglTexture=B,Ht.get(T.depthTexture).__webglTexture=$;let Z=Ht.get(T);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){let $=Ht.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){R=T,C=B,b=$;let Z=!0,Y=null,vt=!1,At=!1;if(T){let Ot=Ht.get(T);Ot.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(W.FRAMEBUFFER,null),Z=!1):Ot.__webglFramebuffer===void 0?A.setupRenderTarget(T):Ot.__hasExternalTextures&&A.rebindTextures(T,Ht.get(T.texture).__webglTexture,Ht.get(T.depthTexture).__webglTexture);let $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(At=!0);let Vt=Ht.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?Y=Vt[B][$]:Y=Vt[B],vt=!0):Bt.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?Y=Ht.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?Y=Vt[$]:Y=Vt,w.copy(T.viewport),I.copy(T.scissor),G=T.scissorTest}else w.copy(N).multiplyScalar(nt).floor(),I.copy(V).multiplyScalar(nt).floor(),G=z;if(St.bindFramebuffer(W.FRAMEBUFFER,Y)&&Bt.drawBuffers&&Z&&St.drawBuffers(T,Y),St.viewport(w),St.scissor(I),St.setScissorTest(G),vt){let Ot=Ht.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ot.__webglTexture,$)}else if(At){let Ot=Ht.get(T.texture),$t=B||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ot.__webglTexture,$||0,$t)}U=-1},this.readRenderTargetPixels=function(T,B,$,Z,Y,vt,At){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ht.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Nt=Nt[At]),Nt){St.bindFramebuffer(W.FRAMEBUFFER,Nt);try{let Ot=T.texture,$t=Ot.format,Vt=Ot.type;if($t!==vn&&O.convert($t)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let qt=Vt===Fs&&(It.has("EXT_color_buffer_half_float")||Bt.isWebGL2&&It.has("EXT_color_buffer_float"));if(Vt!==ti&&O.convert(Vt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===Kn&&(Bt.isWebGL2||It.has("OES_texture_float")||It.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Z&&$>=0&&$<=T.height-Y&&W.readPixels(B,$,Z,Y,O.convert($t),O.convert(Vt),vt)}finally{let Ot=R!==null?Ht.get(R).__webglFramebuffer:null;St.bindFramebuffer(W.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(T,B,$=0){let Z=Math.pow(2,-$),Y=Math.floor(B.image.width*Z),vt=Math.floor(B.image.height*Z);A.setTexture2D(B,0),W.copyTexSubImage2D(W.TEXTURE_2D,$,0,0,T.x,T.y,Y,vt),St.unbindTexture()},this.copyTextureToTexture=function(T,B,$,Z=0){let Y=B.image.width,vt=B.image.height,At=O.convert($.format),Nt=O.convert($.type);A.setTexture2D($,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Z,T.x,T.y,Y,vt,At,Nt,B.image.data):B.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Z,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,At,B.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,Z,T.x,T.y,At,Nt,B.image),Z===0&&$.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$,Z,Y=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let vt=T.max.x-T.min.x+1,At=T.max.y-T.min.y+1,Nt=T.max.z-T.min.z+1,Ot=O.convert(Z.format),$t=O.convert(Z.type),Vt;if(Z.isData3DTexture)A.setTexture3D(Z,0),Vt=W.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)A.setTexture2DArray(Z,0),Vt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);let qt=W.getParameter(W.UNPACK_ROW_LENGTH),Ee=W.getParameter(W.UNPACK_IMAGE_HEIGHT),en=W.getParameter(W.UNPACK_SKIP_PIXELS),Ie=W.getParameter(W.UNPACK_SKIP_ROWS),Cn=W.getParameter(W.UNPACK_SKIP_IMAGES),_e=$.isCompressedTexture?$.mipmaps[Y]:$.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,_e.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,_e.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,T.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,T.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?W.texSubImage3D(Vt,Y,B.x,B.y,B.z,vt,At,Nt,Ot,$t,_e.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Vt,Y,B.x,B.y,B.z,vt,At,Nt,Ot,_e.data)):W.texSubImage3D(Vt,Y,B.x,B.y,B.z,vt,At,Nt,Ot,$t,_e),W.pixelStorei(W.UNPACK_ROW_LENGTH,qt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ee),W.pixelStorei(W.UNPACK_SKIP_PIXELS,en),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ie),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Cn),Y===0&&Z.generateMipmaps&&W.generateMipmap(Vt),St.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),St.unbindTexture()},this.resetState=function(){C=0,b=0,R=null,St.reset(),Q.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ko?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===oa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Ti:fh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ti?ge:Hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},To=class extends Ri{};To.prototype.isWebGL1Renderer=!0;var qr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ri=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$e=new E,Xr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ai=class extends Gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qi,ws=new E,ji=new E,ts=new E,es=new gt,Ts=new gt,Th=new Yt,yr=new E,As=new E,_r=new E,Xc=new gt,Qa=new gt,Yc=new gt,oi=class extends Ae{constructor(t=new ai){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ao(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new Xr(n,3,0,!1)),Qi.setAttribute("uv",new Xr(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Th.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-ts.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;vr(yr.set(-.5,-.5,0),ts,a,ji,s,r),vr(As.set(.5,-.5,0),ts,a,ji,s,r),vr(_r.set(.5,.5,0),ts,a,ji,s,r),Xc.set(0,0),Qa.set(1,0),Yc.set(1,1);let o=t.ray.intersectTriangle(yr,As,_r,!1,ws);if(o===null&&(vr(As.set(-.5,.5,0),ts,a,ji,s,r),Qa.set(0,1),o=t.ray.intersectTriangle(yr,_r,As,!1,ws),o===null))return;let l=t.ray.origin.distanceTo(ws);l<t.near||l>t.far||e.push({distance:l,point:ws.clone(),uv:Ei.getInterpolation(ws,yr,As,_r,Xc,Qa,Yc,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function vr(i,t,e,n,s,r){es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*es.x-s*es.y,Ts.y=s*es.x+r*es.y):Ts.copy(es),i.copy(t),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(Th)}var Yr=class extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ns=new Yt,$c=new Yt,Mr=[],Zc=new Vn,W0=new Yt,Rs=new st,Cs=new ii,li=class extends st{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Zc.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(Zc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Cs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),$c.multiplyMatrices(n,ns),Rs.matrixWorld=$c,Rs.raycast(t,Mr);for(let a=0,o=Mr.length;a<o;a++){let l=Mr[a];l.instanceId=r,l.object=this,e.push(l)}Mr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ci=class extends Gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jc=new Yt,Ro=new Or,Sr=new ii,Er=new E,ci=class extends Ae{constructor(t=new ce,e=new Ci){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,t.ray.intersectsSphere(Sr)===!1)return;Jc.copy(s).invert(),Ro.copy(t.ray).applyMatrix4(Jc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,x=p;g<x;g++){let m=c.getX(g);Er.fromBufferAttribute(u,m),Kc(Er,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,x=p;g<x;g++)Er.fromBufferAttribute(u,g),Kc(Er,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Kc(i,t,e,n,s,r,a){let o=Ro.distanceSqToPoint(i);if(o<e){let l=new E;Ro.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var ds=class extends dn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new gt:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new E,s=[],r=[],a=[],o=new E,l=new Yt;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ue(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ue(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ks=class extends fn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new gt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Co=class extends ks{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var br=new E,ja=new jo,to=new jo,eo=new jo,Hs=class extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(br.subVectors(s[0],s[1]).add(s[0]),c=br);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(br.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=br),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ja.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),to.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),eo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),to.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),eo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ja.calc(l),to.calc(l),eo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Qc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function q0(i,t){let e=1-i;return e*e*t}function X0(i,t){return 2*(1-i)*i*t}function Y0(i,t){return i*i*t}function Ds(i,t,e,n){return q0(i,t)+X0(i,e)+Y0(i,n)}function $0(i,t){let e=1-i;return e*e*e*t}function Z0(i,t){let e=1-i;return 3*e*e*i*t}function J0(i,t){return 3*(1-i)*i*i*t}function K0(i,t){return i*i*i*t}function Us(i,t,e,n,s){return $0(i,t)+Z0(i,e)+J0(i,n)+K0(i,s)}var $r=class extends fn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(t,s.x,r.x,a.x,o.x),Us(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends fn{constructor(t=new E,e=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new E){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(t,s.x,r.x,a.x,o.x),Us(t,s.y,r.y,a.y,o.y),Us(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zr=class extends fn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends fn{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends fn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends fn{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y),Ds(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kr=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Qc(o,l.x,c.x,h.x,u.x),Qc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new gt().fromArray(s))}return this}},jc=Object.freeze({__proto__:null,ArcCurve:Co,CatmullRomCurve3:Hs,CubicBezierCurve:$r,CubicBezierCurve3:Po,EllipseCurve:ks,LineCurve:Zr,LineCurve3:Lo,QuadraticBezierCurve:Jr,QuadraticBezierCurve3:Io,SplineCurve:Kr}),Do=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new jc[s.type]().fromJSON(s))}return this}},Uo=class extends Do{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zr(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Jr(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new $r(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Kr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ks(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},No=class i extends ce{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new E,d=new gt,p=new E,g=new E,x=new E,m=0,f=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let _=0;_<=e;_++){let y=n+_*h*s,M=Math.sin(y),C=Math.cos(y);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*M,u.y=t[b].y,u.z=t[b].x*C,a.push(u.x,u.y,u.z),d.x=_/e,d.y=b/(t.length-1),o.push(d.x,d.y);let R=l[3*b+0]*M,U=l[3*b+1],v=l[3*b+0]*C;c.push(R,U,v)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let M=y+_*t.length,C=M,b=M+t.length,R=M+t.length+1,U=M+1;r.push(C,b,U),r.push(R,U,b)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(o,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Qr=class i extends No{constructor(t=1,e=1,n=4,s=8){let r=new Uo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},jr=class i extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new E,h=new gt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Gt=class i extends ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;_(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(p,2));function _(){let M=new E,C=new E,b=0,R=(e-t)/n;for(let U=0;U<=r;U++){let v=[],w=U/r,I=w*(e-t)+t;for(let G=0;G<=s;G++){let tt=G/s,L=tt*l+o,F=Math.sin(L),J=Math.cos(L);C.x=I*F,C.y=-w*n+m,C.z=I*J,u.push(C.x,C.y,C.z),M.set(F,R,J).normalize(),d.push(M.x,M.y,M.z),p.push(tt,1-w),v.push(g++)}x.push(v)}for(let U=0;U<s;U++)for(let v=0;v<r;v++){let w=x[v][U],I=x[v+1][U],G=x[v+1][U+1],tt=x[v][U+1];h.push(w,I,tt),h.push(I,G,tt),b+=6}c.addGroup(f,b,0),f+=b}function y(M){let C=g,b=new gt,R=new E,U=0,v=M===!0?t:e,w=M===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),g++;let I=g;for(let G=0;G<=s;G++){let L=G/s*l+o,F=Math.cos(L),J=Math.sin(L);R.x=v*J,R.y=m*w,R.z=v*F,u.push(R.x,R.y,R.z),d.push(0,w,0),b.x=F*.5+.5,b.y=J*.5*w+.5,p.push(b.x,b.y),g++}for(let G=0;G<s;G++){let tt=C+G,L=I+G;M===!0?h.push(L,L+1,tt):h.push(L+1,L,tt),U+=3}c.addGroup(f,U,M===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rn=class i extends Gt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=class i extends ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let y=new E,M=new E,C=new E;for(let b=0;b<e.length;b+=3)p(e[b+0],y),p(e[b+1],M),p(e[b+2],C),l(y,M,C,_)}function l(_,y,M,C){let b=C+1,R=[];for(let U=0;U<=b;U++){R[U]=[];let v=_.clone().lerp(M,U/b),w=y.clone().lerp(M,U/b),I=b-U;for(let G=0;G<=I;G++)G===0&&U===b?R[U][G]=v:R[U][G]=v.clone().lerp(w,G/I)}for(let U=0;U<b;U++)for(let v=0;v<2*(b-U)-1;v++){let w=Math.floor(v/2);v%2===0?(d(R[U][w+1]),d(R[U+1][w]),d(R[U][w])):(d(R[U][w+1]),d(R[U+1][w+1]),d(R[U+1][w]))}}function c(_){let y=new E;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let _=new E;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let M=m(_)/2/Math.PI+.5,C=f(_)/Math.PI+.5;a.push(M,1-C)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let y=a[_+0],M=a[_+2],C=a[_+4],b=Math.max(y,M,C),R=Math.min(y,M,C);b>.9&&R<.1&&(y<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),C<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,y){let M=_*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){let _=new E,y=new E,M=new E,C=new E,b=new gt,R=new gt,U=new gt;for(let v=0,w=0;v<r.length;v+=9,w+=6){_.set(r[v+0],r[v+1],r[v+2]),y.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),b.set(a[w+0],a[w+1]),R.set(a[w+2],a[w+3]),U.set(a[w+4],a[w+5]),C.copy(_).add(y).add(M).divideScalar(3);let I=m(C);x(b,w+0,_,I),x(R,w+2,y,I),x(U,w+4,M,I)}}function x(_,y,M,C){C<0&&_.x===1&&(a[y]=_.x-1),M.x===0&&M.z===0&&(a[y]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var ea=class i extends ta{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},hi=class i extends ta{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},na=class i extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,p=new E,g=new gt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let f=0;f<n;f++){let _=f+m,y=_,M=_+n+1,C=_+n+2,b=_+1;o.push(y,M,b),o.push(M,C,b)}}this.setIndex(o),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ne=class i extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,d=new E,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let _=[],y=f/n,M=0;f===0&&a===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){let b=C/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+M,1-y),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){let y=h[f][_+1],M=h[f][_],C=h[f+1][_],b=h[f+1][_+1];(f!==0||a>0)&&p.push(y,M,b),(f!==n-1||l<Math.PI)&&p.push(M,C,b)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var pn=class i extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,_=(s+1)*p+g;a.push(x,m,_),a.push(m,f,_)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Mt=class extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ia=class extends Mt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function wr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Q0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fo=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sc:r=t,o=2*e-n;break;case rc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:a=t,l=2*n-e;break;case rc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,M=p*m-p*x;for(let C=0;C!==o;++C)r[C]=f*a[h+C]+_*a[c+C]+y*a[l+C]+M*a[u+C];return r}},Oo=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Bo=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wr(e,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wr(t.times,Array),values:wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case Rr:e=this.InterpolantFactoryMethodLinear;break;case Aa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return Aa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Q0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Aa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Rr;var Pi=class extends Sn{};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Ar;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends Sn{};ko.prototype.ValueTypeName="color";var Ho=class extends Sn{};Ho.prototype.ValueTypeName="number";var zo=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)re.slerpFlat(r,0,a,c-o,a,c,l);return r}},zs=class extends Sn{InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.DefaultInterpolation=Rr;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Sn{};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Ar;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Sn{};Vo.prototype.ValueTypeName="vector";var Go=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},j0=new Go,Wo=class{constructor(t){this.manager=t!==void 0?t:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},sa=class extends Vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},no=new Yt,th=new E,eh=new E,ra=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;th.setFromMatrixPosition(t.matrixWorld),e.position.copy(th),eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eh),e.updateMatrixWorld(),no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(no)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nh=new Yt,Ps=new E,io=new E,qo=class extends ra{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ps),io.copy(n.position),io.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(io),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh)}},Ii=class extends Vs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Xo=class extends ra{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ui=class extends Vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Xo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var tl="\\[\\]\\.:\\/",tg=new RegExp("["+tl+"]","g"),el="[^"+tl+"]",eg="[^"+tl.replace("\\.","")+"]",ng=/((?:WC+[\/:])*)/.source.replace("WC",el),ig=/(WCOD+)?/.source.replace("WCOD",eg),sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el),rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el),ag=new RegExp("^"+ng+ig+sg+rg+"$"),og=["material","materials","bones","map"],Yo=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tg,"")}static parseTrackName(t){let e=ag.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);og.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Yo;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cx=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Ah="orbRushSaveV1";function lg(){try{return new URLSearchParams(location.search).has("debug")}catch{return!1}}function nl(...i){lg()&&console.info("[OrbRush SDK]",...i)}var il=class{constructor(){let t=typeof window!="undefined"?window.ytgame:void 0;this.available=!!t,this.inPlayables=!!(t&&t.IN_PLAYABLES_ENV),this.audioEnabled=!0,this.handlers={},this.loaded=!1,this.loadPromise=null,this.pendingSave=null,this.saveInFlight=!1,this.lastScore=0,this.calls=[],this.firstFrameSent=!1,this.gameReadySent=!1,this.loadedSave=null,window.__ORB=window.__ORB||{},window.__ORB.sdkCalls=this.calls,window.__ORB.inPlayables=this.inPlayables}record(t,e=!0,n=null){this.calls.push({name:t,ok:e,error:n?String(n):null,at:Math.round(performance.now())}),nl(e?"ok":"error",t,n||"")}init(t={}){this.handlers=t;let e=window.ytgame;if(!this.inPlayables||!e){nl("running outside Playables; using local save fallback"),this.audioEnabled=!0;return}try{this.audioEnabled=e.system.isAudioEnabled(),this.record("isAudioEnabled")}catch(n){this.record("isAudioEnabled",!1,n)}try{e.system.onAudioEnabledChange(n=>{var s;this.audioEnabled=!!n,this.record("onAudioEnabledChange"),(s=t.onAudioEnabledChange)==null||s.call(t,!!n)})}catch(n){this.record("onAudioEnabledChange",!1,n)}try{e.system.onPause(()=>{var n;this.record("onPause"),(n=t.onPause)==null||n.call(t)})}catch(n){this.record("onPause",!1,n)}try{e.system.onResume(()=>{var n;this.record("onResume"),(n=t.onResume)==null||n.call(t)})}catch(n){this.record("onResume",!1,n)}nl("initialised inside Playables")}firstFrameReady(){if(!this.firstFrameSent)if(this.firstFrameSent=!0,this.inPlayables&&window.ytgame)try{window.ytgame.game.firstFrameReady(),this.record("firstFrameReady")}catch(t){this.record("firstFrameReady",!1,t)}else this.record("firstFrameReady.local")}gameReady(){if(!this.gameReadySent)if(this.gameReadySent=!0,this.inPlayables&&window.ytgame)try{window.ytgame.game.gameReady(),this.record("gameReady")}catch(t){this.record("gameReady",!1,t)}else this.record("gameReady.local")}load(){if(this.loadPromise)return this.loadPromise;if(!this.inPlayables||!window.ytgame){try{this.loadedSave=window.localStorage.getItem(Ah)}catch{this.loadedSave=null}return this.loaded=!0,this.loadPromise=Promise.resolve(this.loadedSave),this.record("loadData.local",!0),this.loadPromise}return this.record("loadData.start"),this.loadPromise=(async()=>{try{let t=await window.ytgame.game.loadData();this.loadedSave=typeof t=="string"&&t.length?t:null,this.record("loadData")}catch(t){this.loadedSave=null,this.record("loadData",!1,t)}finally{this.loaded=!0,this.flushPendingSave()}return this.loadedSave})(),this.loadPromise}async save(t){this.pendingSave=t,this.loaded&&await this.flushPendingSave()}async flushPendingSave(){if(!this.loaded||this.pendingSave==null||this.saveInFlight)return;let t=this.pendingSave;if(this.pendingSave=null,!this.inPlayables||!window.ytgame){try{window.localStorage.setItem(Ah,t),this.record("saveData.local")}catch(e){this.record("saveData.local",!1,e)}return}this.saveInFlight=!0;try{await window.ytgame.game.saveData(t),this.record("saveData")}catch(e){this.record("saveData",!1,e),this.pendingSave==null&&(this.pendingSave=t)}finally{this.saveInFlight=!1,this.pendingSave!=null&&this.flushPendingSave()}}async sendScore(t){let e=Math.max(0,Math.round(t));if(!this.inPlayables||!window.ytgame){this.lastScore=Math.max(this.lastScore,e),this.record("sendScore.local");return}if(!(e<=this.lastScore))try{await window.ytgame.engagement.sendScore({value:e}),this.lastScore=e,this.record("sendScore")}catch(n){this.record("sendScore",!1,n)}}getAudioEnabled(){if(this.inPlayables&&window.ytgame)try{return window.ytgame.system.isAudioEnabled()}catch{return this.audioEnabled}return this.audioEnabled}logError(t){if(console.error("[OrbRush]",t),this.inPlayables&&window.ytgame)try{window.ytgame.health.logError(),this.record("logError")}catch(e){this.record("logError",!1,e)}}},ke=new il;var Tt=(i,t,e)=>i<t?t:i>e?e:i,cg=(i,t,e)=>i+(t-i)*e;function tn(i,t,e,n){return cg(i,t,1-Math.exp(-e*n))}function de(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Lt(i,t,e){return t+(e-t)*i()}function Rh(i,t){return t[Math.floor(i()*t.length)%t.length]}function te(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{canvas:e,ctx:n}}function ee(i,{repeat:t=!1,anisotropy:e=4,srgb:n=!0}={}){let s=new ds(i);return n&&(s.colorSpace=ge),t&&(s.wrapS=cs,s.wrapT=cs),s.anisotropy=e,s.needsUpdate=!0,s}function sl(i){if(!Number.isFinite(i))return"\u2014";let t=Math.max(0,Math.round(i)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`}function Gs(i){return Math.round(i).toLocaleString("en-US")}function Ch(){return window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ms(){return window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}function Rn(i,t){if(t&&navigator.vibrate)try{navigator.vibrate(i)}catch{}}function Ph(i=128,t="rgba(255,255,255,1)",e="rgba(255,255,255,0)"){let{canvas:n,ctx:s}=te(i,i),r=s.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return r.addColorStop(0,t),r.addColorStop(.35,"rgba(255,255,255,0.6)"),r.addColorStop(1,e),s.fillStyle=r,s.fillRect(0,0,i,i),ee(n,{srgb:!0})}function gs(i){let t=new Set,e=new Set,n=new Set;i.traverse(s=>{var a;s.geometry&&t.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];s.customDepthMaterial&&r.push(s.customDepthMaterial);for(let o of r){e.add(o);for(let l of Object.keys(o)){let c=o[l];c&&c.isTexture&&!((a=c.userData)!=null&&a.persistent)&&n.add(c)}}});for(let s of t)s.dispose();for(let s of n)s.dispose();for(let s of e)s.dispose();i.parent&&i.parent.remove(i)}var rl=class{constructor(){this.x=0,this.y=0,this.z=0,this.h=0,this.points=[[0,0,0]]}push(){this.points.push([this.x,this.y,this.z])}straight(t,e=0){let n=Math.max(1,Math.ceil(t/6)),s=t/n;for(let r=0;r<n;r++)this.x+=Math.sin(this.h)*s,this.z+=Math.cos(this.h)*s,this.y+=e/n,this.push();return this}turn(t,e,n=0){let s=t*Math.PI/180,r=Math.abs(s)*e,a=Math.max(2,Math.ceil(r/5)),o=r/a,l=s/a;for(let c=0;c<a;c++)this.h+=l*.5,this.x+=Math.sin(this.h)*o,this.z+=Math.cos(this.h)*o,this.y+=n/a,this.h+=l*.5,this.push();return this}};function hg(i){let t=de(i*7919+101),e=[[.035,.125],[.155,.26],[.29,.4],[.43,.54],[.57,.67],[.7,.81],[.845,.955]],n=[];for(let s=0;s<e.length;s++){let[r,a]=e[s],o=Rh(t,["line","wave","slide","line","wave","slide"]);n.push({kind:o,from:r,to:a,lat:Lt(t,-.9,.9),lat2:Lt(t,-1.9,1.9),amp:Lt(t,1,1.9),n:4+Math.floor(t()*3),waves:1+Math.floor(t()*2),arc:Lt(t,.7,1.8)})}return n}function ug(i,t=3){let e=de(i*131+7),n=[.18,.36,.52,.68,.84],s=[];for(let r=0;r<t;r++)s.push({at:n[Math.min(n.length-1,Math.floor((r+.5)*(n.length/t)))]+(e()-.5)*.03,lat:(e()>.5?1:-1)*Lt(e,.9,1.8)});return s}function Fe(i,t,e,n,s,r={}){let a=new rl;s(a);let o=i*977+31;return{number:i,name:t,themeIndex:e,width:n,points:a.points,gaps:r.gaps||[],rails:r.rails||[],obstacles:r.obstacles||[],boosts:r.boosts||[],checkpoints:r.checkpoints||[.36,.7],tutorial:!!r.tutorial,coinRuns:r.coinRuns||hg(o),gems:r.gems||ug(o,Math.min(3,1+Math.floor(i/4)))}}var ne=(i,t,e)=>({type:"hammer",at:e,speed:i,phase:t}),En=(i,t,e)=>({type:"wrecking",at:e,speed:i,phase:t}),He=(i,t,e,n)=>({type:"block",at:n,speed:i,phase:t,amp:e}),mn=(i,t,e,n=1)=>({type:"spinner",at:e,speed:i,phase:t,side:n}),fi=(i,t,e,n)=>({type:"tank",at:n,speed:i,phase:t,amp:e}),qe=[Fe(1,"First Roll",0,7.2,i=>{i.straight(42),i.turn(20,26),i.straight(40),i.turn(-24,24),i.straight(38,-1.8),i.turn(12,30),i.straight(30)},{tutorial:!0,rails:[{from:.4,to:.56}],checkpoints:[.52],boosts:[],gaps:[],obstacles:[]}),Fe(2,"Sky Steps",0,6.8,i=>{i.straight(32),i.turn(-24,22),i.straight(48),i.turn(28,24),i.straight(38,-2),i.turn(-16,26),i.straight(42)},{gaps:[{at:.36,len:5.5},{at:.73,len:6}],obstacles:[ne(1.5,.2,.22),ne(1.7,1.4,.86)],checkpoints:[.3,.64],rails:[{from:.5,to:.62}],boosts:[{at:.55}]}),Fe(3,"Twist & Turn",0,6.4,i=>{i.straight(28),i.turn(32,18),i.straight(32),i.turn(-34,17),i.straight(36,-2),i.turn(24,20),i.straight(28),i.turn(-20,22),i.straight(34)},{gaps:[{at:.3,len:5.5},{at:.78,len:6}],obstacles:[ne(1.6,.6,.2),He(1.15,.4,.6,.55),mn(1.35,.2,.86)],checkpoints:[.34,.66],boosts:[{at:.5}]}),Fe(4,"Dusk Dash",1,6.6,i=>{i.straight(38),i.turn(-22,24),i.straight(46,-2.4),i.turn(26,22),i.straight(38),i.turn(-14,28),i.straight(44,-1),i.turn(10,30),i.straight(30)},{gaps:[{at:.4,len:6.5},{at:.76,len:7}],obstacles:[En(1.35,.4,.27),En(1.5,1.8,.61),ne(1.8,.6,.89)],checkpoints:[.35,.68],rails:[{from:.48,to:.6}],boosts:[{at:.34},{at:.7}]}),Fe(5,"Hammer Time",1,6,i=>{i.straight(30),i.turn(30,18),i.straight(34),i.turn(-30,16),i.straight(42,-2),i.turn(34,17),i.straight(32),i.turn(-26,18),i.straight(40)},{gaps:[{at:.27,len:5.5},{at:.61,len:6},{at:.9,len:5}],obstacles:[ne(1.7,.3,.17),He(1.2,.9,.62,.35),ne(1.9,1.5,.45),mn(1.5,.6,.53),He(1.25,2.1,.66,.7),ne(2,.9,.8)],checkpoints:[.31,.61,.87],boosts:[{at:.42},{at:.82}]}),Fe(6,"Sunset Sprint",1,6.6,i=>{i.straight(36),i.turn(-16,30),i.straight(62,-3),i.turn(20,26),i.straight(52,-2),i.turn(-24,22),i.straight(38)},{gaps:[{at:.34,len:7},{at:.68,len:8}],obstacles:[En(1.6,.8,.5),ne(2,.2,.83)],checkpoints:[.32,.66],rails:[{from:.5,to:.62}],boosts:[{at:.28},{at:.6},{at:.85}]}),Fe(7,"Neon Nights",2,6.2,i=>{i.straight(32),i.turn(24,20),i.straight(38),i.turn(-28,18),i.straight(36),i.turn(30,17),i.straight(32),i.turn(-24,20),i.straight(36)},{gaps:[{at:.29,len:5.5},{at:.7,len:6.5}],obstacles:[mn(1.3,.4,.19),He(1.3,.2,.64,.44),mn(1.55,1.1,.57),He(1.35,1.7,.68,.82),ne(1.9,.5,.93)],checkpoints:[.32,.64],boosts:[{at:.67}]}),Fe(8,"Laser Bridge",2,5.8,i=>{i.straight(32),i.turn(-30,16),i.straight(28),i.turn(30,16),i.straight(48,-2),i.turn(-20,24),i.straight(34),i.turn(26,18),i.straight(32),i.straight(20)},{gaps:[{at:.4,len:5.5},{at:.84,len:6}],obstacles:[En(1.5,.2,.2),He(1.2,.7,.6,.33),ne(1.8,1.3,.54),He(1.4,2,.68,.72),ne(2,.4,.91)],checkpoints:[.35,.68],rails:[{from:.36,to:.5},{from:.64,to:.78}],boosts:[{at:.32},{at:.8}]}),Fe(9,"Midnight Gauntlet",2,6.2,i=>{i.straight(28),i.turn(36,14),i.straight(30),i.turn(-36,14),i.straight(32,-2),i.turn(28,16),i.straight(30),i.turn(-28,16),i.straight(32),i.turn(20,20),i.straight(32)},{gaps:[{at:.23,len:5},{at:.55,len:5.5},{at:.84,len:6}],obstacles:[He(1.35,.2,.6,.15),ne(1.8,.7,.34),mn(1.5,1.3,.46),En(1.6,.4,.58),ne(1.9,1.8,.67),He(1.5,.9,.66,.76),ne(2.1,.2,.94)],checkpoints:[.27,.53,.8],boosts:[{at:.5},{at:.8}]}),Fe(10,"Candy Curves",3,6.4,i=>{i.straight(30),i.turn(-26,18),i.straight(36),i.turn(26,18),i.straight(32),i.turn(-30,16),i.straight(38),i.turn(30,16),i.straight(32),i.turn(-16,24),i.straight(30)},{gaps:[{at:.33,len:6},{at:.72,len:7}],obstacles:[mn(1.4,.2,.19),ne(1.8,.8,.42),He(1.35,1.4,.62,.5),mn(1.6,.5,.61),ne(2,1.9,.87)],checkpoints:[.35,.68],rails:[{from:.56,to:.68}],boosts:[{at:.62}]}),Fe(11,"Sugar Rush",3,6.2,i=>{i.straight(32),i.turn(28,17),i.straight(44,-2),i.turn(-30,16),i.straight(32),i.turn(32,15),i.straight(46,-2),i.turn(-28,17),i.straight(38),i.turn(20,20),i.straight(30)},{gaps:[{at:.3,len:6},{at:.56,len:6.5},{at:.82,len:7}],obstacles:[En(1.55,.3,.17),ne(1.9,.9,.4),mn(1.5,1.6,.5),He(1.5,.5,.66,.51),ne(2,2.2,.69),He(1.6,1.2,.7,.78),ne(2.1,.4,.91)],checkpoints:[.33,.6,.85],boosts:[{at:.24},{at:.52},{at:.8}]}),Fe(12,"Skyline Finale",3,6.4,i=>{i.straight(36),i.turn(-22,20),i.straight(38),i.turn(24,18),i.straight(36,-2),i.turn(-26,17),i.straight(44),i.turn(28,16),i.straight(38,-1),i.turn(-24,18),i.straight(36),i.turn(16,22),i.straight(32)},{gaps:[{at:.25,len:6},{at:.5,len:7},{at:.75,len:7.5}],obstacles:[ne(1.8,.3,.14),En(1.65,.9,.33),mn(1.6,1.6,.44),He(1.6,.4,.66,.57),En(1.8,1.2,.65),ne(2.1,.6,.82),mn(1.8,2.1,.9)],checkpoints:[.3,.55,.8],boosts:[{at:.22},{at:.47},{at:.72},{at:.94}]}),Fe(13,"Iron Front",4,6.8,i=>{i.straight(40,1.2),i.turn(26,20,1.5),i.straight(46,3.4),i.turn(-30,18,-1.8),i.straight(42,-4.2),i.turn(24,20,1),i.straight(48,2.6),i.turn(-18,24,-.9),i.straight(36)},{gaps:[{at:.31,len:6},{at:.74,len:6.5}],obstacles:[fi(.9,.2,.64,.18),ne(1.9,.7,.38),En(1.55,1.3,.55),fi(1.05,1.8,.6,.82)],checkpoints:[.3,.55,.8],rails:[{from:.42,to:.56}],boosts:[{at:.44},{at:.9}]}),Fe(14,"No Man's Land",4,6.2,i=>{i.straight(36),i.turn(30,18,1.2),i.straight(30,-1.5),i.turn(-34,16,-1.3),i.straight(44,2.8),i.turn(32,17,-2.4),i.straight(40,-3.5),i.turn(-28,17,1.2),i.straight(34,1.5),i.turn(22,20,-.8),i.straight(36)},{gaps:[{at:.26,len:5.5},{at:.58,len:6},{at:.86,len:6}],obstacles:[ne(1.9,.3,.16),fi(1,.9,.6,.33),He(1.35,.5,.66,.48),fi(1.12,1.7,.58,.63),ne(2.1,1.2,.78),fi(.95,2.3,.66,.91)],checkpoints:[.29,.55,.82],rails:[{from:.36,to:.48},{from:.68,to:.78}],boosts:[{at:.22},{at:.52},{at:.9}]}),Fe(15,"Dangerous Hills",5,6.6,i=>{i.straight(38,5.5),i.turn(-18,26,2.5),i.straight(36,7),i.turn(16,30,1.5),i.straight(44,-8),i.turn(-24,22,-2.5),i.straight(40,-7),i.turn(22,24,2),i.straight(38,5),i.turn(-14,30,-1),i.straight(34)},{gaps:[{at:.35,len:5.5},{at:.72,len:6}],obstacles:[ne(1.7,.4,.23),He(1.2,.9,.55,.51),ne(1.85,1.7,.81)],checkpoints:[.32,.61,.86],rails:[{from:.12,to:.23},{from:.4,to:.5},{from:.63,to:.72}],boosts:[{at:.28},{at:.58},{at:.88}]}),Fe(16,"Gravity Hills",5,6.4,i=>{i.straight(34,6.5),i.turn(22,24,3),i.straight(40,-9.5),i.turn(-30,18,-3.5),i.straight(32,8),i.turn(26,20,2.5),i.straight(38,-8),i.turn(-32,17,-3),i.straight(36,7.5),i.turn(20,26,2),i.straight(30,-5.5),i.turn(-16,28,-1.5),i.straight(32)},{gaps:[{at:.22,len:5},{at:.53,len:5.5},{at:.84,len:6}],obstacles:[ne(1.8,.5,.36),ne(2,1.4,.71)],checkpoints:[.3,.58,.87],rails:[{from:.1,to:.2},{from:.4,to:.5},{from:.66,to:.77}],boosts:[{at:.18},{at:.4},{at:.68},{at:.92}]}),Fe(17,"Coaster Rush",6,6.8,i=>{i.straight(36,6.5),i.turn(-22,24,2.5),i.straight(44,8.5),i.turn(26,18,-3),i.straight(38,-10),i.turn(-34,15,-2.5),i.straight(30,7.5),i.turn(30,16,2),i.straight(36,-8.5),i.turn(-24,18,-2),i.straight(40,-3),i.turn(22,22,1),i.straight(34,3.5),i.turn(-18,26,-1),i.straight(32)},{gaps:[{at:.28,len:6},{at:.57,len:7},{at:.82,len:7.5}],obstacles:[fi(1.15,.3,.62,.18),En(1.7,.8,.44),mn(1.6,1.4,.62),ne(2,.5,.76),He(1.5,1.9,.68,.9)],checkpoints:[.28,.55,.81],rails:[{from:.1,to:.2},{from:.38,to:.49},{from:.62,to:.73}],boosts:[{at:.16},{at:.46},{at:.72},{at:.94}]}),Fe(18,"Final Drop",6,6.6,i=>{i.straight(34,3),i.turn(20,22,4),i.straight(46,9),i.turn(-26,18,-1),i.straight(36,-12),i.turn(30,15,-3),i.straight(30,6),i.turn(-32,16,-2),i.straight(34,-9),i.turn(24,20,2),i.straight(40,5),i.turn(-28,19,-2),i.straight(36,-4),i.turn(18,24,1),i.straight(34)},{gaps:[{at:.24,len:6.5},{at:.5,len:7},{at:.76,len:8}],obstacles:[fi(1.2,.2,.64,.14),ne(1.9,.8,.32),En(1.75,1.5,.44),fi(1.3,2.2,.6,.6),mn(1.8,.7,.7),ne(2.2,1.9,.86),He(1.7,1.1,.7,.95)],checkpoints:[.26,.52,.78],rails:[{from:.34,to:.45},{from:.6,to:.7}],boosts:[{at:.2},{at:.44},{at:.68},{at:.9}]})];var Oe=qe.length,al=Oe*3;var Lh=[{id:"sunrise",name:"Sunrise Skies",skyTop:"#1f4fb8",skyMid:"#6fb1ff",skyHorizon:"#ffd9a0",skyBottom:"#ff8f55",fog:11128309,sun:{x:.73,y:.43,color:"#fff6d6",glow:"rgba(255,232,170,0.5)",size:.005},sunLight:16773327,sunIntensity:2,hemiSky:13625087,hemiGround:8019002,hemiIntensity:.55,accent:8189908,accentCss:"#7cf7d4",railA:16763196,railB:2895944,trackTint:16777215,cloud:16777215,grass:7849562,grassTop:10149997,rock:10127988,rockDark:7300440,decor:"trees",cardA:"#4c7dff",cardB:"#152a63",stars:0,moon:!1},{id:"dusk",name:"Golden Dusk",skyTop:"#231452",skyMid:"#77368f",skyHorizon:"#ff9a5c",skyBottom:"#ffcf9e",fog:10116995,sun:{x:.28,y:.47,color:"#ffd9a0",glow:"rgba(255,150,90,0.55)",size:.0055},sunLight:16760970,sunIntensity:1.8,hemiSky:13081560,hemiGround:4862279,hemiIntensity:.5,accent:16757867,accentCss:"#ffb46b",railA:16747084,railB:2758712,trackTint:16770767,cloud:16763304,grass:10252143,grassTop:12159602,rock:6242389,rockDark:4074050,decor:"trees",cardA:"#b55cff",cardB:"#3a145e",stars:40,moon:!1},{id:"neon",name:"Neon Nights",skyTop:"#03061c",skyMid:"#0a1442",skyHorizon:"#173071",skyBottom:"#050a20",fog:661312,sun:{x:.66,y:.32,color:"#dff6ff",glow:"rgba(150,220,255,0.4)",size:.006},sunLight:11127039,sunIntensity:1.4,hemiSky:5995775,hemiGround:1772090,hemiIntensity:.45,accent:2282478,accentCss:"#22d3ee",railA:2282478,railB:2366034,trackTint:13222655,cloud:2834298,grass:1911381,grassTop:2375802,rock:1251896,rockDark:659237,decor:"crystals",cardA:"#21c7ef",cardB:"#14205d",stars:240,moon:!0},{id:"candy",name:"Candy Dream",skyTop:"#2f8bff",skyMid:"#8cd0ff",skyHorizon:"#ffd9ef",skyBottom:"#ff9dd2",fog:16764137,sun:{x:.7,y:.4,color:"#fff7e0",glow:"rgba(255,220,240,0.5)",size:.005},sunLight:16774114,sunIntensity:1.9,hemiSky:16766706,hemiGround:8215434,hemiIntensity:.6,accent:16748488,accentCss:"#ff8fc8",railA:16740275,railB:5909091,trackTint:16770290,cloud:16770292,grass:16754900,grassTop:16762340,rock:10976468,rockDark:8149165,decor:"candy",cardA:"#ff6fb3",cardB:"#6a1a63",stars:0,moon:!1},{id:"battlefield",name:"3D Battlefield",skyTop:"#18243b",skyMid:"#54657c",skyHorizon:"#d8a26d",skyBottom:"#7d5538",fog:9140835,sun:{x:.22,y:.52,color:"#ffe4b4",glow:"rgba(255,184,112,0.42)",size:.0045},sunLight:16765856,sunIntensity:1.55,hemiSky:10728388,hemiGround:4601899,hemiIntensity:.58,accent:16757575,accentCss:"#ffb347",railA:16761418,railB:2566952,trackTint:14207149,cloud:14275784,grass:8160850,grassTop:9937254,rock:9207144,rockDark:6049858,decor:"battlefield",cardA:"#947044",cardB:"#241b14",stars:0,moon:!1},{id:"hills",name:"Dangerous Hills",skyTop:"#103d54",skyMid:"#4c99ae",skyHorizon:"#d8edc7",skyBottom:"#79b27c",fog:9287587,sun:{x:.7,y:.4,color:"#fff8d7",glow:"rgba(255,244,190,0.48)",size:.005},sunLight:16773576,sunIntensity:2,hemiSky:13823968,hemiGround:3887424,hemiIntensity:.62,accent:10216301,accentCss:"#9be36d",railA:11989611,railB:2111786,trackTint:15267292,cloud:15857390,grass:5999422,grassTop:8631381,rock:8293243,rockDark:5068877,decor:"hills",cardA:"#54b37a",cardB:"#12382a",stars:0,moon:!1},{id:"coaster",name:"Roller Coaster",skyTop:"#18113d",skyMid:"#743b8f",skyHorizon:"#ff9d60",skyBottom:"#ffca8b",fog:12746121,sun:{x:.79,y:.37,color:"#ffe9c4",glow:"rgba(255,178,110,0.52)",size:.0055},sunLight:16765603,sunIntensity:1.8,hemiSky:14726365,hemiGround:3876932,hemiIntensity:.56,accent:16740275,accentCss:"#ff6fb3",railA:16767293,railB:3678271,trackTint:16771542,cloud:16766912,grass:7241032,grassTop:8886106,rock:8087388,rockDark:5128250,decor:"coaster",cardA:"#ff8f5a",cardB:"#4a1c55",stars:70,moon:!1}];function xs(i){let t=qe[Math.max(0,Math.min(qe.length-1,i|0))];return Lh[Math.min(Lh.length-1,t?t.themeIndex:0)]}var bn=[{id:"chrome",name:"Chrome",price:0,color:14542847,metalness:1,roughness:.06,env:2.4,swatch:["#f2f7ff","#7d8aa8","#1c233a"]},{id:"beach",name:"Beach Ball",price:120,color:16777215,metalness:.05,roughness:.32,env:1,swatch:["#ff7b7b","#ffd93d","#4dd4ff"]},{id:"soccer",name:"Soccer",price:180,color:16777215,metalness:.08,roughness:.5,env:.8,swatch:["#ffffff","#c8ced8","#1b1e24"]},{id:"basketball",name:"Basketball",price:260,color:16777215,metalness:.05,roughness:.55,env:.8,swatch:["#e07b37","#b45116","#251208"]},{id:"watermelon",name:"Watermelon",price:400,color:16777215,metalness:.08,roughness:.36,env:.9,swatch:["#5ac26c","#2e7d3f","#173d22"]},{id:"disco",name:"Disco",price:620,color:15265535,metalness:1,roughness:.18,env:2.6,swatch:["#eef3ff","#97a3bd","#39435c"]},{id:"eyeball",name:"Eyeball",price:800,color:16777215,metalness:.08,roughness:.16,env:1,swatch:["#f4f1e8","#3fc7c9","#172a4a"]},{id:"lava",name:"Lava",price:1100,color:16777215,metalness:.12,roughness:.72,env:1,swatch:["#ff8236","#9e2f05","#1b1210"]},{id:"galaxy",name:"Galaxy",price:1500,color:16777215,metalness:.3,roughness:.34,env:1.3,swatch:["#8f7bff","#4b2ba8","#120a38"]},{id:"golden",name:"Golden",price:2e3,color:16766814,metalness:1,roughness:.19,env:2.6,swatch:["#fff1b3","#f0b429","#7a4c00"]}],dg=new Map(bn.map(i=>[i.id,i]));function Ws(i){return dg.get(i)||bn[0]}var ol=new Map;function fg(i,t,e,n,s){i.beginPath();for(let r=0;r<5;r++){let a=s+r/5*Math.PI*2,o=t+Math.cos(a)*n,l=e+Math.sin(a)*n*.92;r===0?i.moveTo(o,l):i.lineTo(o,l)}i.closePath()}function pg(i,t,e){let n=["#ff6b6b","#ffd93d","#f8fafc","#4dd4ff","#9a7bff","#5eead4"],s=t/12;for(let a=0;a<12;a++)i.fillStyle=n[a%n.length],i.fillRect(Math.floor(a*s),0,Math.ceil(s)+1,e);i.fillStyle="#f8fafc",i.fillRect(0,0,t,e*.1),i.fillRect(0,e*.9,t,e*.1);let r=i.createLinearGradient(0,0,0,e);r.addColorStop(0,"rgba(255,255,255,0.18)"),r.addColorStop(.45,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.22)"),i.fillStyle=r,i.fillRect(0,0,t,e)}function mg(i,t,e){i.fillStyle="#f5f7f5",i.fillRect(0,0,t,e),i.fillStyle="rgba(0,0,0,0.05)";let n=de(7);for(let a=0;a<1500;a++)i.fillRect(n()*t,n()*e,1,1);i.strokeStyle="rgba(120,130,140,0.35)",i.lineWidth=2,i.beginPath(),i.moveTo(0,e*.5),i.bezierCurveTo(t*.25,e*.34,t*.75,e*.66,t,e*.5),i.stroke();let s=[[.08,.3,20,.2],[.3,.36,22,.8],[.56,.31,19,1.7],[.8,.38,22,2.4],[.2,.72,23,.4],[.5,.7,21,1.2],[.78,.72,20,2.9],[.95,.66,18,.9]];for(let[a,o,l,c]of s)i.save(),i.translate(a*t,o*e),i.fillStyle="#1b1e24",fg(i,0,0,l,c),i.fill(),i.restore();i.strokeStyle="rgba(90,100,110,0.28)",i.lineWidth=1.5;for(let[a,o]of s)for(let l=0;l<5;l++){let c=l/5*Math.PI*2;i.beginPath(),i.moveTo(a*t+Math.cos(c)*22,o*e+Math.sin(c)*20),i.lineTo(a*t+Math.cos(c+.7)*66,o*e+Math.sin(c+.7)*60),i.stroke()}let r=i.createLinearGradient(0,0,0,e);r.addColorStop(0,"rgba(255,255,255,0.32)"),r.addColorStop(.5,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.16)"),i.fillStyle=r,i.fillRect(0,0,t,e)}function gg(i,t,e){let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#ef9043"),n.addColorStop(.5,"#df6e2b"),n.addColorStop(1,"#b5531c"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=de(31);i.fillStyle="rgba(60,20,0,0.12)";for(let a=0;a<2600;a++)i.fillRect(s()*t,s()*e,1.2,1.2);i.strokeStyle="#20110a",i.lineWidth=5,i.beginPath(),i.moveTo(0,e*.5),i.lineTo(t,e*.5),i.stroke(),i.beginPath(),i.moveTo(t*.25,0),i.lineTo(t*.25,e),i.moveTo(t*.75,0),i.lineTo(t*.75,e),i.stroke(),i.beginPath(),i.moveTo(t*.25,0),i.bezierCurveTo(t*.36,e*.25,t*.36,e*.75,t*.25,e),i.moveTo(t*.75,0),i.bezierCurveTo(t*.64,e*.25,t*.64,e*.75,t*.75,e),i.stroke();let r=i.createRadialGradient(t*.3,e*.24,4,t*.3,e*.24,t*.5);r.addColorStop(0,"rgba(255,255,255,0.3)"),r.addColorStop(.55,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=r,i.fillRect(0,0,t,e)}function xg(i,t,e){let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#63c775"),n.addColorStop(.5,"#3d9e53"),n.addColorStop(1,"#1f6433"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=de(99);for(let a=0;a<6;a++){let o=a/6*t+14;i.beginPath();for(let l=0;l<=e;l+=8){let c=Math.sin(l*.05+a)*6+Math.sin(l*.14+a*2)*3;l===0?i.moveTo(o-13+c,l):i.lineTo(o-13+c,l)}for(let l=e;l>=0;l-=8){let c=Math.sin(l*.05+a)*6+Math.sin(l*.14+a*2)*3;i.lineTo(o+13+c,l)}i.closePath(),i.fillStyle="rgba(18, 72, 32, 0.85)",i.fill()}i.fillStyle="rgba(180, 255, 190, 0.16)";for(let a=0;a<5;a++){let o=a/5*t+40;i.beginPath(),i.ellipse(o,e*(.25+s()*.5),3,e*.26,0,0,Math.PI*2),i.fill()}i.fillStyle="rgba(10, 40, 18, 0.5)";for(let a=0;a<70;a++){let o=s()*t,l=s()*e;i.beginPath(),i.ellipse(o,l,1.6,2.8,0,0,Math.PI*2),i.fill()}let r=i.createRadialGradient(t*.28,e*.25,4,t*.28,e*.25,t*.55);r.addColorStop(0,"rgba(255,255,255,0.26)"),r.addColorStop(.5,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.2)"),i.fillStyle=r,i.fillRect(0,0,t,e)}function yg(i,t,e){let n=de(5);i.fillStyle="#0d1424",i.fillRect(0,0,t,e);let s=24,r=12,a=t/s,o=e/r;for(let l=0;l<r;l++)for(let c=0;c<s;c++){let h=120+Math.floor(n()*120),u=n()>.7?24:0;i.fillStyle=`rgb(${h-u},${h},${h+20})`,i.fillRect(c*a+1,l*o+1,a-2,o-2),i.fillStyle="rgba(255,255,255,0.45)",i.fillRect(c*a+2,l*o+2,a-4,2),i.fillStyle="rgba(10,20,40,0.35)",i.fillRect(c*a+2,(l+1)*o-4,a-4,2)}for(let l=0;l<40;l++){let c=n()*t,h=n()*e;i.fillStyle="rgba(255,255,255,0.85)",i.fillRect(c,h,2,2)}}function _g(i,t,e){let n=i.createRadialGradient(t*.45,e*.4,20,t*.5,e*.5,t*.62);n.addColorStop(0,"#fdfbf4"),n.addColorStop(.72,"#efe9da"),n.addColorStop(1,"#cec5b4"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=de(13);i.strokeStyle="rgba(190, 58, 58, 0.42)",i.lineWidth=1.3;for(let c=0;c<26;c++){let h=s()>.5?t*.02:t*.98,u=s()*e;i.beginPath(),i.moveTo(h,u);for(let d=0;d<4;d++)h+=(t*.5-h)*(.18+s()*.12),u+=(e*.5-u)*(.18+s()*.12)+(s()-.5)*14,i.lineTo(h,u);i.stroke()}let r=t*.5,a=e*.5,o=i.createRadialGradient(r-5,a-5,4,r,a,46);o.addColorStop(0,"#8ffcff"),o.addColorStop(.4,"#2fc2c7"),o.addColorStop(.75,"#147a92"),o.addColorStop(1,"#0b4358"),i.fillStyle=o,i.beginPath(),i.arc(r,a,44,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(6, 40, 52, 0.8)",i.lineWidth=3,i.stroke(),i.strokeStyle="rgba(120, 240, 255, 0.4)",i.lineWidth=1;for(let c=0;c<16;c++){let h=c/16*Math.PI*2;i.beginPath(),i.moveTo(r+Math.cos(h)*22,a+Math.sin(h)*22),i.lineTo(r+Math.cos(h)*41,a+Math.sin(h)*41),i.stroke()}i.fillStyle="#080d14",i.beginPath(),i.arc(r,a,18,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.9)",i.beginPath(),i.ellipse(r-7,a-8,6,4,-.5,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.4)",i.beginPath(),i.ellipse(r+9,a+9,4,2.4,-.5,0,Math.PI*2),i.fill();let l=i.createLinearGradient(0,0,0,e);l.addColorStop(0,"rgba(255,255,255,0.16)"),l.addColorStop(.55,"rgba(255,255,255,0)"),l.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=l,i.fillRect(0,0,t,e)}function Ih(i,t,e,n=!1){let s=de(77);if(n)i.fillStyle="#000000",i.fillRect(0,0,t,e);else{let r=i.createLinearGradient(0,0,0,e);r.addColorStop(0,"#2b2320"),r.addColorStop(.5,"#1b1412"),r.addColorStop(1,"#0f0b0a"),i.fillStyle=r,i.fillRect(0,0,t,e);for(let a=0;a<700;a++){let o=20+Math.floor(s()*28);i.fillStyle=`rgba(${o+10},${o},${o},0.5)`,i.fillRect(s()*t,s()*e,2,s()*4+1)}}for(let r=0;r<12;r++){let a=s()*t,o=s()*e,l=n?["#ffb347","#ff6a00","#ffe08a"]:["#ff7b22","#c94500","#ffb347"];i.strokeStyle=l[r%3],i.lineWidth=n?2.6:3.4,i.shadowBlur=n?12:5,i.shadowColor="#ff6a00",i.beginPath(),i.moveTo(a,o);for(let c=0;c<7;c++)a+=(s()-.5)*46,o+=12+s()*16,i.lineTo(a,o),s()>.65&&(i.moveTo(a,o),i.lineTo(a+(s()-.5)*42,o+14+s()*18),i.moveTo(a,o));i.stroke(),i.shadowBlur=0}for(let r=0;r<26;r++)i.fillStyle=n?"rgba(255,140,40,0.75)":"rgba(255,110,30,0.5)",i.beginPath(),i.arc(s()*t,s()*e,s()*2+.6,0,Math.PI*2),i.fill()}function vg(i,t,e){let n=de(2024),s=i.createLinearGradient(0,0,t,e);s.addColorStop(0,"#1a0b3d"),s.addColorStop(.45,"#161b4d"),s.addColorStop(1,"#080a24"),i.fillStyle=s,i.fillRect(0,0,t,e);let r=[[.25,.5,.35,"rgba(124, 58, 237, 0.5)"],[.7,.35,.3,"rgba(34, 211, 238, 0.28)"],[.55,.72,.28,"rgba(236, 72, 153, 0.24)"],[.85,.7,.22,"rgba(99, 102, 241, 0.35)"]];for(let[o,l,c,h]of r){let u=i.createRadialGradient(o*t,l*e,2,o*t,l*e,c*t);u.addColorStop(0,h),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.fillRect(0,0,t,e)}for(let o=0;o<340;o++){let l=n()*t,c=n()*e,h=n()*1.5+.35;i.fillStyle=n()>.86?"#9ef7ff":n()>.7?"#ffd9f2":"#ffffff",i.globalAlpha=.4+n()*.6,i.beginPath(),i.arc(l,c,h,0,Math.PI*2),i.fill(),n()>.965&&(i.strokeStyle="rgba(255,255,255,0.45)",i.lineWidth=.7,i.beginPath(),i.moveTo(l-5,c),i.lineTo(l+5,c),i.moveTo(l,c-5),i.lineTo(l,c+5),i.stroke())}i.globalAlpha=1;let a=i.createLinearGradient(0,0,0,e);a.addColorStop(0,"rgba(255,255,255,0.1)"),a.addColorStop(.5,"rgba(255,255,255,0)"),a.addColorStop(1,"rgba(0,0,0,0.25)"),i.fillStyle=a,i.fillRect(0,0,t,e)}function Mg(i,t,e){let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#fff3c0"),n.addColorStop(.4,"#ffd75e"),n.addColorStop(.7,"#f0b429"),n.addColorStop(1,"#a86a00"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(120, 72, 0, 0.4)",i.lineWidth=2;for(let r=0;r<4;r++){i.beginPath();for(let a=0;a<=t;a+=10){let o=e*(.18+r*.22)+Math.sin(a*.05+r*1.7)*7;a===0?i.moveTo(a,o):i.lineTo(a,o)}i.stroke()}i.strokeStyle="rgba(255, 255, 220, 0.55)",i.lineWidth=1.4;for(let r=0;r<9;r++)i.beginPath(),i.ellipse(t*(.12+r*.09),e*(.5+Math.sin(r)*.2),26,6,-.3,0,Math.PI*2),i.stroke();let s=i.createRadialGradient(t*.3,e*.24,4,t*.3,e*.24,t*.5);s.addColorStop(0,"rgba(255,255,255,0.65)"),s.addColorStop(.4,"rgba(255,255,255,0.1)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,t,e)}function Sg(i){if(ol.has(i))return ol.get(i);let t={map:null};try{if(i==="chrome"||i==="golden"&&!1)t={map:null};else if(i==="disco"){let{canvas:e,ctx:n}=te(512,256);yg(n,512,256),t={map:ee(e)}}else if(i==="lava"){let e=te(512,256);Ih(e.ctx,512,256,!1);let n=te(512,256);Ih(n.ctx,512,256,!0),t={map:ee(e.canvas),emissiveMap:ee(n.canvas),emissiveIntensity:1.15}}else if(i!=="chrome"){let{canvas:e,ctx:n}=te(512,256);i==="beach"?pg(n,512,256):i==="soccer"?mg(n,512,256):i==="basketball"?gg(n,512,256):i==="watermelon"?xg(n,512,256):i==="eyeball"?_g(n,512,256):i==="galaxy"?vg(n,512,256):i==="golden"&&Mg(n,512,256),t={map:ee(e)}}}catch(e){console.warn("Could not build ball texture",i,e)}return ol.set(i,t),t}function Ui(i,t=null){var s;let e=Sg(i.id),n=new Mt({color:i.color,metalness:i.metalness,roughness:i.roughness,envMapIntensity:t!=null?t:i.env});return e.map&&(n.map=e.map),e.emissiveMap&&(n.emissiveMap=e.emissiveMap,n.emissive=new wt(16777215),n.emissiveIntensity=(s=e.emissiveIntensity)!=null?s:1),n}function ll(i){let{canvas:t,ctx:e}=te(160,160),[n,s,r]=i.swatch,a=e.createRadialGradient(56,48,8,80,84,74);a.addColorStop(0,n),a.addColorStop(.55,s),a.addColorStop(1,r),e.fillStyle=a,e.beginPath(),e.arc(80,82,66,0,Math.PI*2),e.fill();let o=e.createRadialGradient(54,48,2,54,48,34);return o.addColorStop(0,"rgba(255,255,255,0.85)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.beginPath(),e.ellipse(56,50,26,16,-.5,0,Math.PI*2),e.fill(),t.toDataURL("image/png")}function Eg(i){let t=document.createElement("canvas");t.width=512,t.height=256;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#8fb8ff"),n.addColorStop(.46,"#f4f8ff"),n.addColorStop(.52,"#6a7280"),n.addColorStop(1,"#15181f"),e.fillStyle=n,e.fillRect(0,0,512,256),e.fillStyle="rgba(255,255,255,0.98)",e.fillRect(56,24,150,44),e.fillStyle="rgba(255,214,150,0.9)",e.fillRect(318,38,104,40),e.fillStyle="rgba(255,140,90,0.7)",e.fillRect(438,66,52,30),e.fillStyle="rgba(110,200,255,0.55)",e.fillRect(196,156,240,30),e.fillStyle="rgba(255,255,255,0.35)",e.fillRect(40,170,110,22);let s=new ds(t);s.mapping=Ai,s.colorSpace=ge;let r=new si(i),a=r.fromEquirectangular(s);return r.dispose(),s.dispose(),a}function Dh(i,{frames:t=18,size:e=128}={}){var o;let n={},s={},r=null,a=null;try{r=new Ri({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),r.setSize(e,e,!1),r.setPixelRatio(1),r.outputColorSpace=ge,r.toneMapping=Di,r.toneMappingExposure=1.12;let l=new ri;a=Eg(r),l.environment=a.texture;let c=new we(32,1,.1,40);c.position.set(.32,.55,4.72),c.lookAt(0,0,0);let h=new ui(16774368,3.2);h.position.set(3,4,5),l.add(h);let u=new ui(9427199,2.4);u.position.set(-4,-1,-2),l.add(u);let d=new Ne(1.35,44,30),p=document.createElement("canvas");p.width=e*t,p.height=e;let g=p.getContext("2d");for(let x of bn){let m=Ui(x),f=new st(d,m);f.rotation.x=.06,l.add(f);for(let _=0;_<t;_++)f.rotation.y=_/t*Math.PI*2,r.render(l,c),g.drawImage(r.domElement,_*e,0,e,e);s[x.id]=p.toDataURL("image/webp",.82),f.rotation.y=0,r.render(l,c),n[x.id]=r.domElement.toDataURL("image/png"),l.remove(f),m.dispose()}d.dispose(),a==null||a.dispose(),r.dispose(),(o=r.forceContextLoss)==null||o.call(r)}catch(l){console.warn("Animated skin previews unavailable, using fallbacks",l);for(let c of bn)n[c.id]=ll(c);try{a==null||a.dispose(),r==null||r.dispose()}catch{}}return{frames:t,thumbs:n,sprites:s}}var ca=class{constructor(t){this.game=t,this.cache=new Map,this.comboCount=0,this.comboTimer=null,this.toastTimer=null,this.hintTimer=null,this.starTimers=[],this.arenaTimer=null,this.lastFocus=null,this.bind()}q(t){return this.cache.has(t)||this.cache.set(t,document.getElementById(t)),this.cache.get(t)}show(t){t&&(t.classList.remove("hidden"),t.setAttribute("aria-hidden","false"))}hide(t){t&&(t.classList.add("hidden"),t.setAttribute("aria-hidden","true"))}tap(t){return e=>{try{this.game.audio.unlock(),this.game.audio.sfx("click")}catch{}t(e)}}bind(){let t=(r,a)=>{let o=this.q(r);o&&o.addEventListener("click",this.tap(a))};t("playBtn",()=>this.game.onPlay()),t("levelsBtn",()=>this.game.openLevels()),t("shopBtn",()=>this.game.openShop()),t("settingsBtn",()=>this.game.openSettings("menu")),t("levelsBack",()=>this.game.closeSheet()),t("shopBack",()=>this.game.closeSheet()),t("pauseBtn",()=>this.game.pauseGame()),t("resumeBtn",()=>this.game.resumeGame()),t("restartBtn",()=>this.game.restartLevel()),t("menuFromPauseBtn",()=>this.game.quitToMenu()),t("settingsFromPauseBtn",()=>this.game.openSettings("pause")),t("nextBtn",()=>this.game.nextLevel()),t("replayBtn",()=>this.game.restartLevel()),t("levelsFromCompleteBtn",()=>this.game.openLevelsFromResults()),t("finalLevelsBtn",()=>this.game.openLevelsFromResults()),t("finalReplayBtn",()=>this.game.startLevel(Oe-1)),t("finalMenuBtn",()=>this.game.quitToMenu()),t("settingsDone",()=>this.game.closeSettings());let e=this.q("musicRange"),n=this.q("sfxRange"),s=this.q("hapticsToggle");e&&e.addEventListener("input",()=>{this.q("musicOut").textContent=`${e.value}%`,this.game.onSettingsInput({music:Number(e.value)/100})}),n&&n.addEventListener("input",()=>{this.q("sfxOut").textContent=`${n.value}%`,this.game.audio.unlock(),this.game.onSettingsInput({sfx:Number(n.value)/100}),this.game.audio.sfx("click")}),s&&s.addEventListener("change",()=>{this.game.onSettingsInput({haptics:s.checked}),this.game.audio.unlock(),this.game.audio.sfx("click")}),document.addEventListener("keydown",r=>{r.key==="Escape"&&this.game.handleEscape()})}syncSettings(){let t=this.game.state.settings,e=this.q("musicRange"),n=this.q("sfxRange"),s=this.q("hapticsToggle");e&&(e.value=String(Math.round(t.music*100))),n&&(n.value=String(Math.round(t.sfx*100))),s&&(s.checked=!!t.haptics),this.q("musicOut").textContent=`${Math.round(t.music*100)}%`,this.q("sfxOut").textContent=`${Math.round(t.sfx*100)}%`}updateCoins(t,{pop:e=!1}={}){let n=Gs(t),s=this.q("menuCoins");s&&(s.textContent=n),document.querySelectorAll(".js-coins").forEach(a=>a.textContent=n);let r=this.q("hudCoins");r&&(r.textContent=n),r&&e&&(r.classList.remove("pop"),r.offsetWidth,r.classList.add("pop"))}refreshMenu(){var c;let t=this.game.state,e=this.game.totalStars(),n=qe.filter(h=>{var u;return(((u=t.levels[h.number])==null?void 0:u.stars)||0)>0}).length;this.q("menuStars").textContent=String(e);let s=this.q("menuStarsMax");s&&(s.textContent=`/${al}`),this.q("levelsProgress").textContent=`${n}/${Oe}`;let r=this.q("finalCopy");r&&(r.textContent=`You've completed all ${Oe} tracks \u2014 that's the whole adventure! Replay any level to chase 3 stars, unlock every orb and beat your best times.`);let a=this.game.continueIndex(),o=qe[a],l=n>0||(((c=t.levels[o.number])==null?void 0:c.stars)||0)>0;this.q("playLabel").textContent=l?"Continue":"Play",this.q("playSub").textContent=`Track ${o.number} \xB7 ${o.name}`,this.updateCoins(t.coins),this.q("menuHint").innerHTML=ms()?'<kbd>Hold</kbd> to roll <span class="sep">\xB7</span> <kbd>Drag</kbd> to steer':'<kbd>A</kbd><kbd>D</kbd> steer <span class="sep">\xB7</span> <kbd>Space</kbd> speed'}renderLevels(){let t=this.q("levelGrid");if(!t)return;t.innerHTML="";let e=this.game.state;qe.forEach((n,s)=>{let r=xs(s),a=e.levels[n.number]||{stars:0,best:0},o=!this.game.isLevelUnlocked(s),l=document.createElement("button");l.type="button",l.className="level-card",o&&l.classList.add("locked"),s===this.game.continueIndex()&&l.classList.add("current"),l.style.setProperty("--card-a",r.cardA),l.style.setProperty("--card-b",r.cardB),l.setAttribute("aria-label",`Track ${n.number}: ${n.name}${o?" (locked)":""}`);let c=[1,2,3].map(h=>`<svg class="ico${a.stars>=h?" on":""}" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-star"/></svg>`).join("");l.innerHTML=`
        ${o?'<svg class="ico lock" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-lock"/></svg>':""}
        <span class="num">${String(n.number).padStart(2,"0")}</span>
        <span class="name">${n.name}</span>
        <span class="spacer"></span>
        <span class="stars">${c}</span>
        <span class="best">${a.stars>0?`BEST ${sl(a.best)}`:"NOT CLEARED"}</span>
      `,o?(l.disabled=!0,l.addEventListener("click",this.tap(()=>this.game.deny()))):(l.addEventListener("click",this.tap(()=>this.game.startLevel(s))),this.attachTilt(l)),t.appendChild(l)}),this.updateCoins(e.coins)}renderShop(){let t=this.q("skinGrid");if(!t)return;t.innerHTML="";let e=this.game.state,n=this.game.skinThumbs||{},s=this.game.skinSprites||{};bn.forEach(r=>{let a=e.skins.includes(r.id),o=e.ball===r.id,l=e.coins>=r.price,c=document.createElement("button");c.type="button",c.className="skin-card"+(o?" equipped":""),c.setAttribute("aria-label",`${r.name}${o?" (equipped)":a?" (owned)":` (${r.price} coins)`}`);let h;o?h='<span class="skin-status equipped"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check"/></svg> Equipped</span>':a?h='<span class="skin-status owned">Tap to equip</span>':l?h=`<span class="skin-status"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-coin"/></svg>${r.price}</span>`:h=`<span class="skin-status need"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-coin"/></svg>${r.price}</span>`;let u=s[r.id]?`<span class="skin-thumb-spin" role="img" aria-label="${r.name} orb" style="background-image:url('${s[r.id]}');--frames:${this.game.skinFrames}"></span>`:`<img alt="${r.name} orb" loading="lazy" src="${n[r.id]||ll(r)}" />`;c.innerHTML=`
        <span class="skin-thumb">${u}</span>
        <span class="skin-name">${r.name}</span>
        ${h}
      `,c.addEventListener("click",this.tap(()=>this.game.handleSkinClick(r.id))),this.attachTilt(c),t.appendChild(c)}),this.updateCoins(e.coins)}attachTilt(t){ms()||Ch()||(t.addEventListener("pointermove",e=>{if(e.pointerType&&e.pointerType!=="mouse")return;let n=t.getBoundingClientRect(),s=(e.clientX-n.left)/n.width-.5,r=(e.clientY-n.top)/n.height-.5;t.style.transform=`perspective(760px) rotateX(${(-r*8).toFixed(2)}deg) rotateY(${(s*10).toFixed(2)}deg) translateY(-2px) scale(1.015)`}),t.addEventListener("pointerleave",()=>{t.style.transform=""}))}showMenu(){this.hide(this.q("levelsScreen")),this.hide(this.q("shopScreen")),this.hide(this.q("hud")),this.hideArena(),this.hideModals(),this.show(this.q("menuScreen")),this.refreshMenu()}showLevels(){this.hide(this.q("menuScreen")),this.hide(this.q("shopScreen")),this.renderLevels(),this.show(this.q("levelsScreen"))}showShop(){this.hide(this.q("menuScreen")),this.hide(this.q("levelsScreen")),this.renderShop(),this.show(this.q("shopScreen"))}showGame(){this.hide(this.q("menuScreen")),this.hide(this.q("levelsScreen")),this.hide(this.q("shopScreen")),this.hideModals(),this.show(this.q("hud"))}showArena(t,e,n){let s=this.q("arenaIntro");s&&(this.q("arenaTitle").textContent=t.name,this.q("arenaSub").textContent=`TRACK ${String(e.number).padStart(2,"0")} \xB7 ${e.name}`,this.q("arenaKicker").textContent=n>=12?"NEW ARENA":"NOW ENTERING",s.style.setProperty("--arena-a",t.cardA),s.style.setProperty("--arena-b",t.cardB),s.style.setProperty("--arena-accent",t.accentCss),s.classList.remove("show"),s.offsetWidth,s.classList.add("show"),s.setAttribute("aria-hidden","false"),this.arenaTimer&&clearTimeout(this.arenaTimer),this.arenaTimer=setTimeout(()=>this.hideArena(),2200))}hideArena(){this.arenaTimer&&clearTimeout(this.arenaTimer),this.arenaTimer=null;let t=this.q("arenaIntro");t&&(t.classList.remove("show"),t.setAttribute("aria-hidden","true"))}hideGameHud(){this.hide(this.q("hud")),this.hideArena()}hideModals(){for(let t of["pauseScreen","completeScreen","finalScreen","settingsScreen"])this.hide(this.q(t))}showPause(){this.show(this.q("pauseScreen"))}hidePause(){this.hide(this.q("pauseScreen"))}setPauseAvailable(t){let e=this.q("pauseBtn");e&&(e.style.visibility=t?"visible":"hidden")}showComplete(t){this.q("completeTitle").textContent=t.isFinale?"Finale Cleared!":"Track Cleared!",this.q("completeSub").textContent=`${t.name} \xB7 Track ${t.number}`,this.q("resultCoins").textContent=`+${t.collected}`,this.q("resultTime").textContent=sl(t.time),this.q("resultFalls").textContent=String(t.falls);let e=t.stars,n=[{on:!0,text:"Finish"},{on:!!t.coinGoal,text:"Collect 70% coins"},{on:!!t.noFalls,text:"No falls"}];this.q("criteriaText").textContent=n.map(r=>`${r.on?"\u2713":"\u2717"} ${r.text}`).join("  \xB7  ");let s=this.q("completeStars").querySelectorAll(".star");s.forEach(r=>r.classList.remove("on")),this.starTimers.forEach(r=>clearTimeout(r)),this.starTimers=[];for(let r=0;r<e;r++){let a=setTimeout(()=>{var o;(o=s[r])==null||o.classList.add("on"),this.game.audio.sfx("star",{index:r})},380+r*260);this.starTimers.push(a)}this.q("nextBtn").textContent=t.isFinale?"Grand Finale":"Next Track",this.q("nextBtn").style.display=t.hasNext||t.isFinale?"":"none",this.show(this.q("completeScreen"))}hideComplete(){this.starTimers.forEach(t=>clearTimeout(t)),this.starTimers=[],this.hide(this.q("completeScreen"))}showFinal(t){this.q("finalStars").textContent=`${t.stars}/${al}`,this.q("finalCoins").textContent=Gs(t.coins),this.q("finalOrbs").textContent=`${t.orbs}/${bn.length}`,this.show(this.q("finalScreen"))}hideFinal(){this.hide(this.q("finalScreen"))}showSettings(){this.syncSettings(),this.lastFocus=document.activeElement,this.show(this.q("settingsScreen")),setTimeout(()=>{var t;try{(t=this.q("musicRange"))==null||t.focus({preventScroll:!0})}catch{}},80)}hideSettings(){var t,e;this.hide(this.q("settingsScreen"));try{(e=(t=this.lastFocus)==null?void 0:t.focus)==null||e.call(t,{preventScroll:!0})}catch{}}setLevel(t,e){this.q("hudLevel").textContent=String(t),this.q("hudName").textContent=e,this.q("progressFill").style.width="0%",this.q("progressOrb").style.left="0%"}updateProgress(t){let e=`${Math.max(0,Math.min(1,t))*100}%`,n=this.q("progressFill"),s=this.q("progressOrb");n&&(n.style.width=e),s&&(s.style.left=e)}toast(t,e="",n=1800){let s=this.q("toast");s&&(clearTimeout(this.toastTimer),s.textContent=t,s.className=`toast ${e} show`.trim(),this.show(s),this.toastTimer=setTimeout(()=>{s.classList.add("hidden"),s.setAttribute("aria-hidden","true")},n))}setCombo(t){this.comboCount=t;let e=this.q("combo");if(e){if(t<2){this.hide(e),clearTimeout(this.comboTimer);return}e.innerHTML=`COMBO <b>x${t}</b>`,e.classList.remove("hidden","bump"),e.setAttribute("aria-hidden","false"),e.offsetWidth,e.classList.add("bump"),clearTimeout(this.comboTimer),this.comboTimer=setTimeout(()=>this.hide(e),1700)}}flash(t){let e=this.q("screenFlash");e&&(e.className="screen-flash",e.offsetWidth,e.classList.add(t))}showHint(){let t=this.q("hint");t&&(t.innerHTML=ms()?'<span class="hint-gesture"><span class="hint-finger"></span> Hold to roll</span><span class="hint-sep">\xB7</span><span class="hint-gesture">Drag to steer</span>':'<span class="hint-gesture"><kbd class="kbd">Space</kbd> Hold to speed up</span><span class="hint-sep">\xB7</span><span class="hint-gesture"><kbd class="kbd">A</kbd> <kbd class="kbd">D</kbd> Steer</span>',this.show(t),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.hide(t),6500))}hideHint(){clearTimeout(this.hintTimer),this.hide(this.q("hint"))}splashStatus(t){let e=this.q("splashStatus");e&&(e.textContent=t)}hideSplash(){let t=this.q("splash");t&&(t.classList.add("fade-out"),setTimeout(()=>t.classList.add("hidden"),500))}showUnsupported(){this.hide(this.q("splash"));let t=this.q("unsupported");t&&t.classList.remove("hidden")}setShowcasePointer(t,e){this.game.setShowcasePointer(t,e)}};var bg=112,Uh=60/bg/4,Ni=i=>440*Math.pow(2,(i-69)/12),wg=[{notes:[50,54,57,61],bass:38,arp:[62,66,69,73]},{notes:[47,50,54,57],bass:35,arp:[59,62,66,69]},{notes:[43,47,50,54],bass:31,arp:[55,59,62,66]},{notes:[45,49,52,55],bass:33,arp:[57,61,64,67]}],Tg=[0,2,1,3,2,1,3,2],ha=class{constructor(){this.ctx=null,this.master=null,this.musicBus=null,this.sfxBus=null,this.delaySend=null,this.noiseBuffer=null,this.roll=null,this.musicTimer=null,this.nextNoteTime=0,this.stepIndex=0,this.unlocked=!1,this.ytMuted=!1,this.musicVolume=.65,this.sfxVolume=.85,this.intensity=.35,this.rollActive=!1,this.lastSfxAt=Object.create(null)}get ready(){return!!(this.ctx&&this.unlocked&&this.ctx.state==="running")}unlock(){if(this.unlocked){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t({latencyHint:"interactive"});let e=this.ctx.createDynamicsCompressor();e.threshold.value=-18,e.knee.value=24,e.ratio.value=4,e.attack.value=.004,e.release.value=.24,this.master=this.ctx.createGain(),this.master.gain.value=this.ytMuted?0:.9,this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=this.musicVolume*.5,this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=this.sfxVolume,this.musicBus.connect(this.master),this.sfxBus.connect(this.master),this.master.connect(e),e.connect(this.ctx.destination);let n=Math.floor(this.ctx.sampleRate*2);this.noiseBuffer=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let s=this.noiseBuffer.getChannelData(0);for(let l=0;l<n;l++)s[l]=Math.random()*2-1;let r=this.ctx.createDelay(1);r.delayTime.value=Uh*3;let a=this.ctx.createGain();a.gain.value=.28;let o=this.ctx.createGain();o.gain.value=.3,r.connect(a),a.connect(r),r.connect(o),o.connect(this.musicBus),this.delaySend=this.ctx.createGain(),this.delaySend.gain.value=1,this.delaySend.connect(r),this.startRollLoop(),this.unlocked=!0,this.startMusic(),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}catch(t){console.warn("Audio unavailable:",t),this.unlocked=!1}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}setYouTubeAudio(t){if(this.ytMuted=!t,this.master&&this.ctx){let e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?.9:0,e,.03)}}setMusicVolume(t){this.musicVolume=Tt(t,0,1),this.musicBus&&this.ctx&&this.musicBus.gain.setTargetAtTime(this.musicVolume*.5,this.ctx.currentTime,.05)}setSfxVolume(t){this.sfxVolume=Tt(t,0,1),this.sfxBus&&this.ctx&&this.sfxBus.gain.setTargetAtTime(this.sfxVolume,this.ctx.currentTime,.05)}setIntensity(t){this.intensity=Tt(t,0,1)}startMusic(){!this.ctx||this.musicTimer||(this.nextNoteTime=this.ctx.currentTime+.12,this.stepIndex=0,this.musicTimer=setInterval(()=>this.scheduleMusic(),55))}stopMusic(){this.musicTimer&&clearInterval(this.musicTimer),this.musicTimer=null}scheduleMusic(){if(!this.ctx||this.ctx.state!=="running")return;let t=this.ctx.currentTime+.18,e=0;for(;this.nextNoteTime<t&&e++<12;){let n=Math.floor(this.stepIndex/16)%4,s=this.stepIndex%16;this.scheduleStep(s,n,this.nextNoteTime),this.nextNoteTime+=Uh,this.stepIndex++}}scheduleStep(t,e,n){let s=wg[e],r=this.musicBus;if(t===0){for(let o of s.notes)this.tone({freq:Ni(o),type:"triangle",t:n,dur:3.15,gain:.02,attack:.5,filterFreq:780,bus:r,detune:-4}),this.tone({freq:Ni(o),type:"sawtooth",t:n,dur:3,gain:.006,attack:.7,filterFreq:620,bus:r,detune:6});this.tone({freq:Ni(s.bass),type:"sine",t:n,dur:.72,gain:.12,attack:.012,bus:r})}t===8&&(this.tone({freq:Ni(s.bass),type:"sine",t:n,dur:.55,gain:.09,attack:.012,bus:r}),this.tone({freq:Ni(s.bass+7),type:"triangle",t:n,dur:.4,gain:.035,attack:.02,bus:r})),t%2===1&&this.intensity>.25&&this.noise({t:n,dur:.035,gain:.012+this.intensity*.012,type:"highpass",freq:7200,bus:r});let a=Tg[t/2|0];if(t%4===0||t%2===0&&this.intensity>.55){let o=s.arp[a%s.arp.length]+(t%8===6?12:0);this.pluck(Ni(o),n,.022+this.intensity*.012)}t===14&&this.intensity>.6&&this.pluck(Ni(s.arp[3]+12),n,.014)}pluck(t,e,n){this.tone({freq:t,type:"sine",t:e,dur:.24,gain:n,attack:.004,bus:this.musicBus,extra:this.delaySend}),this.tone({freq:t*2.005,type:"triangle",t:e,dur:.12,gain:n*.4,attack:.003,bus:this.musicBus,extra:this.delaySend})}tone({freq:t,freqEnd:e,type:n="sine",t:s,dur:r,gain:a,attack:o=.006,filterFreq:l,q:c=.8,bus:h,detune:u=0,extra:d}){if(!this.ctx)return;let p=this.ctx,g=p.createOscillator();g.type=n,g.frequency.setValueAtTime(Math.max(20,t),s),e&&g.frequency.exponentialRampToValueAtTime(Math.max(20,e),s+r),u&&(g.detune.value=u);let x=p.createGain();x.gain.setValueAtTime(1e-4,s),x.gain.linearRampToValueAtTime(Math.max(2e-4,a),s+o),x.gain.exponentialRampToValueAtTime(1e-4,s+r);let m=g;if(l){let f=p.createBiquadFilter();f.type="lowpass",f.frequency.value=l,f.Q.value=c,m.connect(f),m=f}m.connect(x),x.connect(h||this.sfxBus),d&&x.connect(d),g.start(s),g.stop(s+r+.03)}noise({t,dur:e,gain:n,type:s="bandpass",freq:r=1e3,freqEnd:a,q:o=.9,bus:l,attack:c=.004,offset:h}){if(!this.ctx||!this.noiseBuffer)return;let u=this.ctx,d=u.createBufferSource();d.buffer=this.noiseBuffer;let p=u.createBiquadFilter();p.type=s,p.Q.value=o,p.frequency.setValueAtTime(r,t),a&&p.frequency.exponentialRampToValueAtTime(Math.max(40,a),t+e);let g=u.createGain();g.gain.setValueAtTime(1e-4,t),g.gain.linearRampToValueAtTime(Math.max(2e-4,n),t+c),g.gain.exponentialRampToValueAtTime(1e-4,t+e),d.connect(p),p.connect(g),g.connect(l||this.sfxBus),this.noiseBuffer&&d.start(t,h!=null?h:Math.random()*1.5),d.stop(t+e+.03)}startRollLoop(){let t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=360,n.Q.value=.75;let s=t.createGain();s.gain.value=1e-4,e.connect(n),n.connect(s),s.connect(this.sfxBus),e.start(),this.roll={gain:s,filter:n}}updateRoll(t,e,n){if(!this.ctx||!this.roll)return;let s=this.ctx.currentTime,r=Tt(t/18,0,1.3),a=0;e&&(a=n?.045+r*.05:.014+r*.014),this.roll.gain.gain.setTargetAtTime(a,s,.07),this.roll.filter.frequency.setTargetAtTime(n?300+t*26:780+t*12,s,.1)}stopRoll(){!this.ctx||!this.roll||this.roll.gain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.04)}sfx(t,e={}){if(!this.ready)return;let n=this.ctx.currentTime+.001,s=this.ctx.currentTime,r=this.lastSfxAt[t]||0;if(!(s-r<.016))switch(this.lastSfxAt[t]=s,t){case"click":{this.tone({freq:740,type:"triangle",t:n,dur:.07,gain:.07}),this.tone({freq:1180,type:"sine",t:n+.02,dur:.06,gain:.035});break}case"coin":{let a=Math.min(12,e.combo||0),o=980*Math.pow(2,a/12);this.tone({freq:o,type:"sine",t:n,dur:.075,gain:.085}),this.tone({freq:o*1.498,type:"sine",t:n+.052,dur:.11,gain:.075}),this.noise({t:n,dur:.05,gain:.018,type:"highpass",freq:5200});break}case"gem":{[880,1174.66,1567.98].forEach((a,o)=>{this.tone({freq:a,type:"sine",t:n+o*.055,dur:.3,gain:.06}),this.tone({freq:a*2,type:"triangle",t:n+o*.055,dur:.16,gain:.018})}),this.noise({t:n,dur:.45,gain:.018,type:"highpass",freq:6800});break}case"bounce":{this.tone({freq:220,freqEnd:95,type:"sine",t:n,dur:.2,gain:.12}),this.noise({t:n,dur:.06,gain:.03,type:"lowpass",freq:900});break}case"hit":{this.tone({freq:130,freqEnd:45,type:"sine",t:n,dur:.28,gain:.26}),this.noise({t:n,dur:.2,gain:.16,type:"lowpass",freq:1400}),this.noise({t:n,dur:.05,gain:.1,type:"highpass",freq:2600});break}case"boost":{this.noise({t:n,dur:.34,gain:.1,type:"bandpass",freq:700,freqEnd:4800,q:1.4}),this.tone({freq:240,freqEnd:660,type:"triangle",t:n,dur:.3,gain:.045});break}case"checkpoint":{[523.25,659.25,783.99].forEach((a,o)=>{this.tone({freq:a,type:"triangle",t:n+o*.08,dur:.35,gain:.07})}),this.noise({t:n+.12,dur:.3,gain:.014,type:"highpass",freq:6400});break}case"fall":{this.tone({freq:640,freqEnd:130,type:"sine",t:n,dur:.55,gain:.1}),this.noise({t:n,dur:.5,gain:.03,type:"bandpass",freq:900,freqEnd:300});break}case"respawn":{this.tone({freq:420,freqEnd:760,type:"triangle",t:n,dur:.22,gain:.06}),this.noise({t:n,dur:.18,gain:.02,type:"highpass",freq:4e3});break}case"win":{[523.25,659.25,783.99,1046.5].forEach((o,l)=>{this.tone({freq:o,type:"triangle",t:n+l*.115,dur:.5,gain:.095}),this.tone({freq:o*2,type:"sine",t:n+l*.115,dur:.3,gain:.03})}),this.tone({freq:1046.5,type:"triangle",t:n+.5,dur:1.1,gain:.07}),this.tone({freq:1318.5,type:"sine",t:n+.5,dur:1,gain:.04}),this.noise({t:n+.3,dur:1.2,gain:.02,type:"highpass",freq:6800});break}case"star":{let a=Tt(e.index||0,0,4),o=[880,1108.73,1318.51,1760,2217];this.tone({freq:o[a],type:"triangle",t:n,dur:.5,gain:.085}),this.tone({freq:o[a]*2,type:"sine",t:n,dur:.25,gain:.025});break}case"buy":{[659.25,987.77,1318.51].forEach((a,o)=>{this.tone({freq:a,type:"triangle",t:n+o*.06,dur:.24,gain:.075})}),this.noise({t:n+.1,dur:.2,gain:.025,type:"highpass",freq:5600});break}case"deny":{this.tone({freq:150,freqEnd:110,type:"square",t:n,dur:.16,gain:.045,filterFreq:800});break}case"land":{this.tone({freq:160,freqEnd:80,type:"sine",t:n,dur:.14,gain:.07}),this.noise({t:n,dur:.07,gain:.025,type:"lowpass",freq:700});break}default:break}}};var Nh=new E(0,1,0);function Ag(){let{canvas:i,ctx:t}=te(256,256);t.fillStyle="#23272f",t.fillRect(0,0,256,256),t.save(),t.translate(128,128),t.rotate(-Math.PI/4),t.fillStyle="#ffc93c";for(let n=-320;n<320;n+=64)t.fillRect(n,-320,32,640);t.restore(),t.fillStyle="rgba(0,0,0,0.18)";for(let n=0;n<180;n++)t.fillRect(Math.random()*256,Math.random()*256,1.5,1.5);let e=t.createLinearGradient(0,0,0,256);return e.addColorStop(0,"rgba(255,255,255,0.18)"),e.addColorStop(.5,"rgba(255,255,255,0)"),e.addColorStop(1,"rgba(0,0,0,0.25)"),t.fillStyle=e,t.fillRect(0,0,256,256),ee(i,{repeat:!0})}function Rg(i,t){let e=i.frameAt(t),n=new zt,s=new Yt().makeBasis(e.n,Nh,e.t);return n.quaternion.setFromRotationMatrix(s),n.position.copy(e.p),i.group.add(n),{group:n,frame:e}}function an(i,t,e,n,s,r,a,o){let l=new st(new ue(t,e,n),o);return l.position.set(s,r,a),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function Fh(i,t,e){let n=Tt(t.at,.02,.97)*i.length,{group:s}=Rg(i,n),r=i.width/2,a=new Mt({color:2567744,metalness:.82,roughness:.32}),o=new Mt({color:4871539,metalness:.75,roughness:.38}),l=new Mt({map:Ag(),metalness:.32,roughness:.5}),c=new Mt({color:16726862,emissive:16720435,emissiveIntensity:.7,metalness:.35,roughness:.3}),h=new Mt({color:e.accent,emissive:e.accent,emissiveIntensity:e.id==="neon"?1.4:.55,metalness:.5,roughness:.25}),u=new Mt({color:6120760,roughness:.76,metalness:.22}),d=new Mt({color:3357218,roughness:.9,metalness:.12}),p=new Mt({color:2368799,roughness:.94,metalness:.18}),g=t.type,x=null,m=null,f=new E,_=null;if(g==="hammer"){an(s,.26,4.5,.26,-(r+.82),2.25,0,o),an(s,r+.82,.2,.2,-(r+.82)/2,4.4,0,a);let M=new st(new Gt(.17,.17,.5,12),o);M.rotation.x=Math.PI/2,M.position.set(0,4.4,0),s.add(M);let C=new zt;C.position.set(0,4.3,0),s.add(C),an(C,.14,3.4,.14,0,-1.7,0,a);let b=new st(new Gt(.7,.7,1.15,20),c);b.rotation.x=Math.PI/2,b.position.set(0,-3.4,0),b.castShadow=!0,C.add(b);for(let U of[-.58,.58]){let v=new st(new Gt(.74,.74,.08,20),h);v.rotation.x=Math.PI/2,v.position.set(0,-3.4,U),C.add(v)}let R=new st(new Ne(.16,12,10),h);R.position.set(0,-1.7,0),C.add(R),x=b,_={pivot:C,amp:.62,arm:3.4,pivotY:4.3}}else if(g==="wrecking"){an(s,.28,5.6,.28,-(r+.78),2.8,0,o),an(s,.28,5.6,.28,r+.78,2.8,0,o),an(s,(r+.78)*2+.28,.3,.3,0,5.6,0,a);let M=new st(new Gt(.18,.18,.6,12),o);M.rotation.z=Math.PI/2,M.position.set(0,5.45,0),s.add(M);let C=new zt;C.position.set(0,5.45,0),s.add(C),an(C,.16,4.1,.16,0,-2.05,0,a);let b=new st(new Ne(.8,22,16),a);b.position.set(0,-4.1,0),b.castShadow=!0,C.add(b);let R=new st(new pn(.81,.09,8,24),c);R.rotation.x=Math.PI/2,R.position.set(0,-4.1,0),C.add(R);let U=new st(new Ne(.22,10,8),h);U.position.set(0,-3.4,0),C.add(U),x=b,_={pivot:C,amp:.72,arm:4.1,pivotY:5.45,axis:"x"}}else if(g==="block"){let M=new st(new ue(1.7,1.6,1.4),l);M.position.set(0,.8,0),M.castShadow=!0,M.receiveShadow=!0,s.add(M);let C=new st(new ue(1.78,.12,1.48),h);C.position.set(0,1.66,0),s.add(C);let b=new st(new ue(1.78,.1,1.48),a);b.position.set(0,-.02,0),s.add(b),x=M}else if(g==="tank"){let M=new zt;s.add(M);for(let w of[-1,1]){an(M,.52,.78,1.86,w*1.07,.44,0,p).geometry.translate(0,0,0);for(let G=0;G<4;G++){let tt=new st(new Gt(.24,.24,.58,12),o);tt.rotation.z=Math.PI/2,tt.position.set(w*1.07,.38,-.66+G*.44),tt.castShadow=!0,M.add(tt)}}an(M,1.72,.66,1.32,0,.82,0,u);let C=an(M,1.5,.4,.62,0,.88,.84,u);C.rotation.x=-.24,an(M,1.84,.12,1.46,0,1.18,-.02,d);let b=new st(new Gt(.5,.62,.46,12),u);b.position.set(0,1.44,-.02),b.castShadow=!0,M.add(b);let R=new st(new Gt(.24,.24,.08,12),d);R.position.set(.2,1.69,-.08),M.add(R);let U=new st(new Gt(.075,.11,1.5,12),o);U.rotation.x=Math.PI/2,U.position.set(0,1.48,.92),U.castShadow=!0,M.add(U);let v=new st(new Gt(.13,.13,.25,12),a);v.rotation.x=Math.PI/2,v.position.set(0,1.48,1.63),M.add(v),an(M,.04,.85,.04,-.8,1.92,-.35,a),an(M,.34,.22,.02,-.64,2.2,-.35,c),x=M}else if(g==="spinner"){let M=t.side||1,C=-M*(r+.72),b=r*2+1.35,R=new st(new Gt(.3,.4,.5,12),a);R.position.set(C,.25,0),R.castShadow=!0,s.add(R);let U=new st(new Gt(.16,.16,1,10),o);U.position.set(C,.75,0),s.add(U);let v=new zt;v.position.set(C,.86,0),s.add(v);let w=new Qr(.17,Math.max(.2,b-.34),6,10);w.rotateZ(Math.PI/2);let I=new st(w,c);I.position.x=M*b/2,I.castShadow=!0,v.add(I);let G=new st(new Ne(.28,12,10),h);G.position.x=M*(b-.16),v.add(G);let tt=new st(new Gt(.26,.26,.3,12),a);tt.position.y=.05,v.add(tt),x=I,_={pivot:v,side:M,barLen:b,hubX:C,amp:0,axis:"y"}}let y={type:g,spec:t,group:s,dist:n,update(M,C){if(!_){if(g==="block"||g==="tank"){let R=Math.max(.4,(t.amp||.6)*r),U=M*(t.speed||1)+(t.phase||0),v=Math.sin(U)*R;x&&(x.position.x=v),y.blockX=v,y.blockVel=Math.cos(U)*R*(t.speed||1)*(g==="tank"?.8:1),y.blockLimit=R}s.updateMatrixWorld(!0);return}let b=Math.sin(M*(t.speed||1.4)+(t.phase||0))*_.amp;if(_.axis==="x"?_.pivot.rotation.x=b:_.axis==="y"?_.pivot.rotation.y=M*(t.speed||1.4)+(t.phase||0):_.pivot.rotation.z=b,s.updateMatrixWorld(!0),x){let R=new E;x.getWorldPosition(R),m&&C>0&&f.copy(R).sub(m).multiplyScalar(1/C).clampLength(0,22),m=R}},collide(M,C){if(g==="block"||g==="tank"){let I=s.worldToLocal(M.clone()),G=y.blockX||0,tt=g==="tank"?1.18:.85,L=g==="tank"?.92:.8,F=g==="tank"?.95:.7,J=g==="tank"?.92:.8,nt=I.x-G,j=I.y-J,q=I.z,N=new E(G+Tt(nt,-tt,tt),J+Tt(j,-L,L),Tt(q,-F,F)),V=new E(I.x-N.x,I.y-N.y,I.z-N.z),z=V.length();if(z>=C)return null;let D;z<1e-4?D=new E(Math.sign(nt)||1,0,0):D=V.multiplyScalar(1/z);let k=D.clone().applyQuaternion(s.quaternion),it=k.clone().multiplyScalar(C-z+.02),ct=new E((y.blockVel||0)*.14,0,0).applyQuaternion(s.quaternion);return{normal:k,push:it,impulse:k.clone().multiplyScalar(4.4).add(ct).add(new E(0,1.8,0)),kind:g}}if(g==="spinner"){let I=new E,G=new E;_.pivot.getWorldPosition(G);let tt=new E(_.side*_.barLen,0,0),L=_.pivot.localToWorld(tt.clone()),F=new E().subVectors(L,G),J=F.lengthSq()||1,nt=Tt(new E().subVectors(M,G).dot(F)/J,0,1),j=G.clone().addScaledVector(F,nt),q=Math.abs(M.y-j.y),N=Math.hypot(M.x-j.x,M.z-j.z);if(N>C+.2||q>1.05)return null;let V=new E(M.x-j.x,0,M.z-j.z);V.lengthSq()<1e-4&&V.set(1,0,0),V.normalize();let z=new E().subVectors(j,G),D=new E().crossVectors(Nh,z).normalize().multiplyScalar((t.speed||1.4)*3.2);return{normal:V,push:V.clone().multiplyScalar(C+.2-N+.02),impulse:V.clone().multiplyScalar(5.2).add(D).add(new E(0,2,0)),kind:"spinner"}}if(!x)return null;let b=new E;x.getWorldPosition(b);let R=C+(g==="wrecking"?.82:.72),U=new E().subVectors(M,b),v=U.length();if(v>R)return null;let w=v<1e-4?new E(0,1,0):U.multiplyScalar(1/v);return{normal:w,push:w.clone().multiplyScalar(R-v+.02),impulse:w.clone().multiplyScalar(6.4).add(f.clone().multiplyScalar(.35)).add(new E(0,2.6,0)),kind:g}}};return y}var Ke=new E(0,1,0);function Cg(){let{canvas:i,ctx:t}=te(256,512),e=t.createLinearGradient(0,0,256,0);e.addColorStop(0,"#b07a4e"),e.addColorStop(.28,"#c68e5c"),e.addColorStop(.5,"#b98251"),e.addColorStop(.75,"#c99361"),e.addColorStop(1,"#a96f45"),t.fillStyle=e,t.fillRect(0,0,256,512);let n=64;for(let s=0;s<512;s+=n){t.fillStyle="rgba(60,30,12,0.45)",t.fillRect(0,s,256,3),t.fillStyle="rgba(255,225,190,0.12)",t.fillRect(0,s+3,256,2);for(let r=0;r<26;r++){let a=Math.random()*256,o=s+6+Math.random()*(n-10),l=20+Math.random()*90;t.strokeStyle=`rgba(${70+Math.random()*40},${40+Math.random()*25},${20+Math.random()*15},0.22)`,t.lineWidth=.8+Math.random(),t.beginPath(),t.moveTo(a,o),t.bezierCurveTo(a+l*.3,o+3,a+l*.6,o-3,a+l,o+1),t.stroke()}if(Math.random()>.55){let r=30+Math.random()*190,a=s+16+Math.random()*30;t.strokeStyle="rgba(55,28,12,0.4)",t.lineWidth=2,t.beginPath(),t.ellipse(r,a,5+Math.random()*4,3+Math.random()*3,0,0,Math.PI*2),t.stroke()}}return ee(i,{repeat:!0,anisotropy:8})}function Pg(){let{canvas:i,ctx:t}=te(256,128),e=32;for(let n=0;n<128;n+=e)for(let s=0;s<256;s+=e)t.fillStyle=(s/e+n/e)%2===0?"#f4f6ff":"#151824",t.fillRect(s,n,e,e);return ee(i,{repeat:!0})}function Oh(i){let{canvas:t,ctx:e}=te(256,512);e.clearRect(0,0,256,512),e.strokeStyle=i,e.lineWidth=26,e.lineCap="round",e.lineJoin="round",e.shadowColor=i,e.shadowBlur=26;for(let n=0;n<3;n++){let s=110+n*140;e.beginPath(),e.moveTo(62,s+52),e.lineTo(128,s-8),e.lineTo(194,s+52),e.stroke()}return ee(t)}function Lg(i){let{canvas:t,ctx:e}=te(512,256),n=e.createLinearGradient(0,0,0,256);return n.addColorStop(0,"rgba(16,22,40,0)"),n.addColorStop(.35,"rgba(16,22,40,0.55)"),n.addColorStop(1,"rgba(16,22,40,0)"),e.fillStyle=n,e.fillRect(0,0,512,256),e.strokeStyle=i.accentCss,e.lineWidth=10,e.shadowColor=i.accentCss,e.shadowBlur=22,e.strokeRect(46,42,420,172),e.shadowBlur=0,e.fillStyle="#ffffff",e.font="900 86px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("START",256,132),ee(t)}function Ig(i){let{canvas:t,ctx:e}=te(1024,256),n=e.createLinearGradient(0,0,1024,0);n.addColorStop(0,"#131a33"),n.addColorStop(.5,"#1d2748"),n.addColorStop(1,"#131a33"),e.fillStyle=n,e.fillRect(0,0,1024,256);let s=32;for(let r=0;r<1024;r+=s)for(let a=0;a<3;a++)for(let o=0;o<2;o++){let l=r+o*(s/2),c=a*s+(a===1?s/2:0);e.fillStyle=(r/s+a+o)%2===0?"#f2f5ff":"#11141f",e.fillRect(l,c,s/2,s/2),e.fillRect(l+1024-s,256-c-s/2,s/2,s/2)}return e.strokeStyle=i.accentCss,e.lineWidth=12,e.strokeRect(64,40,896,176),e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle",e.font="900 118px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",e.shadowColor=i.accentCss,e.shadowBlur=34,e.fillText("FINISH",512,132),e.shadowBlur=0,ee(t)}function cl(i,t,e,n,s,r){let a=[],o=[],l=[];for(let[u,d]of t){if(d<=u)continue;let p=a.length/3;for(let x=u;x<=d;x++){let m=i[x],f=m.p.clone().addScaledVector(m.n,e),_=m.p.clone().addScaledVector(m.n,n);f.y+=s,_.y+=s,a.push(f.x,f.y,f.z,_.x,_.y,_.z),o.push(0,m.dist/6,1,m.dist/6)}let g=d-u+1;for(let x=0;x<g-1;x++){let m=p+x*2,f=m+1,_=m+2,y=m+3;l.push(m,_,f,f,_,y)}}let c=new ce;c.setAttribute("position",new Zt(a,3)),c.setAttribute("uv",new Zt(o,2)),c.setIndex(l),c.computeVertexNormals();let h=new st(c,r);return h.receiveShadow=!0,h}function Dg(i,t,e,n){let s=[],r=[],a=(c,h,u)=>{let d=c.p.clone().addScaledVector(c.n,h);u&&(d.y-=.85),s.push(d.x,d.y,d.z)};for(let[c,h]of t)if(!(h<=c))for(let u of[-1,1]){let d=s.length/3;for(let g=c;g<=h;g++)a(i[g],u*e,!1),a(i[g],u*e,!0);let p=h-c+1;for(let g=0;g<p-1;g++){let x=d+g*2,m=x+1,f=x+2,_=x+3;r.push(x,m,f,m,_,f,x,f,m,m,f,_)}}let o=new ce;o.setAttribute("position",new Zt(s,3)),o.setIndex(r),o.computeVertexNormals();let l=new st(o,n);return l.receiveShadow=!0,l}function qs(i,t,e,n,s=!1){if(!n.length)return null;let r=new li(t,e,n.length);for(let a=0;a<n.length;a++)r.setMatrixAt(a,n[a]);return r.instanceMatrix.needsUpdate=!0,r.castShadow=s,r.receiveShadow=!1,i.add(r),r}function Bh(i,t){let e=new zt,n=new Hs(i.points.map(H=>new E(H[0],H[1],H[2])),!1,"centripetal",.5);n.arcLengthDivisions=2400;let s=n.getLength(),a=Math.max(160,Math.ceil(s/.75)),o=[];for(let H=0;H<=a;H++){let O=H/a,Q=n.getPointAt(O),et=n.getTangentAt(O).normalize(),yt=new E().crossVectors(Ke,et).normalize();o.push({p:Q,t:et,n:yt,dist:O*s})}let l=s/a,c=i.width/2,h=H=>{let O=Tt(H,0,s),Q=O/l,et=Math.floor(Q);et>=a&&(et=a-1);let yt=Tt(Q-et,0,1),rt=o[et],K=o[et+1],P=rt.p.clone().lerp(K.p,yt),at=rt.t.clone().lerp(K.t,yt).normalize(),dt=new E().crossVectors(Ke,at).normalize();return{p:P,t:at,n:dt,dist:O}},u=(H,O)=>{let Q=H-O/2,et=H+O/2;if(Q<14||et>s-18)return 1/0;let yt=0,rt=null;for(let K=Math.max(0,Q-8);K<=et+.01;K+=1.3){let P=h(K).t;rt&&(yt+=1-rt.dot(P)),rt=P}return yt},d=[],p=i.gaps.map(H=>{let O=Tt(H.at,.1,.92)*s,Q=O,et=1/0;for(let yt=-.09*s;yt<=.09*s;yt+=2){let rt=u(O+yt,H.len);rt<et&&(et=rt,Q=O+yt)}return{base:Q,len:H.len}}).sort((H,O)=>H.base-O.base),g=-999;for(let H of p){let O=H.base,Q=Math.ceil((O-H.len/2)/l)*l,et=Math.floor((O+H.len/2)/l)*l;if(Q<g+12){let yt=g+12-Q;Q+=yt,et+=yt}Q=Math.max(12,Q),et=Math.min(s-16,et),et-Q<4.2&&(et=Math.min(s-16,Q+4.2)),!(et-Q<3.6)&&(d.push({start:Q,end:et,rampStart:Math.max(8,Q-2.1)}),g=et)}let x=H=>d.some(O=>H>=O.start&&H<=O.end),m=[],f=0;for(let H=0;H<o.length;H++)x(o[H].dist)&&(H-1>=f&&m.push([f,H-1]),f=H+1);f<o.length&&m.push([f,o.length-1]),m.length||m.push([0,o.length-1]);let _=Cg(),y=new Mt({map:_,color:t.trackTint,roughness:.78,metalness:.06}),M=new Mt({color:7096879,roughness:.9,metalness:.05,side:ye}),C=new Mt({color:t.accent,emissive:t.accent,emissiveIntensity:t.id==="neon"?1.1:.28,roughness:.32,metalness:.4}),b=cl(o,m,-c,c,0,y);b.castShadow=!1,e.add(b),e.add(Dg(o,m,c,M)),e.add(cl(o,m,-c,-c+.17,.015,C)),e.add(cl(o,m,c-.17,c,.015,C));let R=new Mt({color:3818072,metalness:.55,roughness:.5}),U=new ue(i.width+.9,.24,.3),v=[],w=[],I=new Yt,G=new E,tt=new re,L=new E(1,1,1),F=16,J=8;for(let H=4;H<s-4;H+=3){if(x(H))continue;let O=h(H),Q=O.p.clone().addScaledVector(Ke,-.6);I.makeBasis(O.n,Ke,O.t),tt.setFromRotationMatrix(I);let et=new Yt().compose(Q,tt,L);if(v.push(et),H>=J){J+=F;let yt=O.p.clone();yt.y-=2.2,w.push(new Yt().compose(yt,new re,L))}}qs(e,U,R,v);let nt=new Gt(.16,.34,3.4,8);qs(e,nt,R,w);let j=new Mt({color:t.railA,emissive:t.railA,emissiveIntensity:t.id==="neon"?.9:.16,metalness:.45,roughness:.35}),q=new Mt({color:t.railB,emissive:t.railB,emissiveIntensity:t.id==="neon"?.35:.05,metalness:.55,roughness:.4}),N=new ue(.1,.16,1.55),V=new ue(.12,.9,.12),z=[],D=[],k=[];for(let H of i.rails||[]){let O=Math.max(2,H.from*s),Q=Math.min(s-4,H.to*s);for(let et of[-1,1]){let yt=0;for(let rt=O;rt<Q;rt+=1.35){if(x(rt))continue;let K=h(rt),P=K.p.clone().addScaledVector(K.n,et*(c+.03));P.y+=.88,I.makeBasis(K.n,Ke,K.t),tt.setFromRotationMatrix(I);let at=new Yt().compose(P,tt,L);(yt+(et===1?1:0))%2===0?z.push(at):D.push(at),yt++}for(let rt=O;rt<Q;rt+=2.7){if(x(rt))continue;let K=h(rt),P=K.p.clone().addScaledVector(K.n,et*(c+.03));P.y+=.45,k.push(new Yt().compose(P,new re,L))}}}qs(e,N,j,z),qs(e,N,q,D),qs(e,V,R,k);let it=new pe({map:Lg(t),transparent:!0,depthWrite:!1,side:ye,polygonOffset:!0,polygonOffsetFactor:-2}),ct=new st(new We(i.width*.92,4.4),it),ft=h(2.2);I.makeBasis(ft.n.clone().negate(),ft.t,Ke),ct.quaternion.setFromRotationMatrix(I),ct.position.copy(ft.p).addScaledVector(Ke,.03),e.add(ct);let bt=new pe({map:Oh(t.accentCss),transparent:!0,depthWrite:!1,side:ye,blending:Be,polygonOffset:!0,polygonOffsetFactor:-3}),Dt=[];for(let H of i.boosts||[]){let O=Tt(H.at,.08,.93)*s,Q=d.find(P=>O>P.start-8&&O<P.end+8);if(Q&&(O=Q.end+9),O>s-12&&(O=s-12),d.some(P=>O>P.start-4&&O<P.end+4))continue;let et=O-1.7,yt=O+1.7,rt=h(O),K=new st(new We(i.width*.7,3.4),bt);K.geometry=K.geometry.clone(),K.geometry.rotateX(Math.PI/2),I.makeBasis(rt.n,Ke,rt.t),K.quaternion.setFromRotationMatrix(I),K.position.copy(rt.p).addScaledVector(Ke,.04),e.add(K),Dt.push({from:et,to:yt})}let Ut=new Mt({color:9067062,roughness:.7,metalness:.1}),Jt=C;for(let H of d){let O=h(H.rampStart),Q=2,et=.42,yt=i.width*.94,rt=yt/2,K=[-rt,0,0,-rt,et,Q,rt,et,Q,-rt,0,0,rt,et,Q,rt,0,0,-rt,et,Q,-rt,0,Q,rt,0,Q,-rt,et,Q,rt,0,Q,rt,et,Q,rt,0,0,rt,et,Q,rt,0,Q,-rt,0,0,-rt,0,Q,-rt,et,Q],P=new ce;P.setAttribute("position",new Zt(K,3)),P.computeVertexNormals();let at=new st(P,Ut);at.castShadow=!0,at.receiveShadow=!0,I.makeBasis(O.n,Ke,O.t),at.quaternion.setFromRotationMatrix(I),at.position.copy(O.p),e.add(at);let dt=new st(new ue(yt,.06,.12),Jt);dt.position.set(0,et,Q-.06),at.add(dt)}let W=new Mt({color:3160400,metalness:.75,roughness:.32}),Pe=new Mt({color:t.accent,emissive:t.accent,emissiveIntensity:t.id==="neon"?1.5:.7,metalness:.4,roughness:.25}),It=Oh(t.accentCss),Bt=new pe({map:It,color:t.accent,transparent:!0,opacity:.22,blending:Be,depthWrite:!1,side:ye}),St=[],oe=[];for(let H of i.checkpoints||[]){let O=Tt(H,.15,.88)*s,Q=d.find(P=>O>P.start-5&&O<P.end+5);if(Q&&(O=Q.end+7),O>s-18&&(O=s-18),St.some(P=>Math.abs(P-O)<25)||O<18)continue;St.push(O);let et=h(O),yt=new zt;I.makeBasis(et.n,Ke,et.t),yt.quaternion.setFromRotationMatrix(I),yt.position.copy(et.p);for(let P of[-1,1]){let at=new st(new ue(.22,3.2,.22),W);at.position.set(P*(c+.35),1.6,0),at.castShadow=!0,yt.add(at);let dt=new st(new ue(.3,.3,.3),Pe);dt.position.set(P*(c+.35),3.25,0),yt.add(dt)}let rt=new st(new ue(i.width+.9,.2,.24),W);rt.position.set(0,3.28,0),yt.add(rt);let K=new st(new We(i.width+.2,2.9),Bt.clone());K.position.set(0,1.6,0),yt.add(K),yt.userData.glow=K,yt.userData.phase=Math.random()*Math.PI*2,e.add(yt),oe.push(yt)}St.sort((H,O)=>H-O);let Ht=s-5.2,A=h(Ht),S=new zt;I.makeBasis(A.n,Ke,A.t),S.quaternion.setFromRotationMatrix(I),S.position.copy(A.p);for(let H of[-1,1]){let O=new st(new ue(.34,5.6,.34),W);O.position.set(H*(c+1.05),2.8,0),O.castShadow=!0,S.add(O);let Q=new st(new Ne(.22,12,10),Pe);Q.position.set(H*(c+1.05),5.7,0),S.add(Q)}let X=new st(new ue((c+1.05)*2+.4,.36,.4),W);X.position.set(0,5.5,0),S.add(X);let ht=new pe({map:Ig(t),side:ye}),ot=new st(new We((c+1)*2,1.35),ht);ot.position.set(0,4.55,0),S.add(ot),e.add(S);let ut=new Mt({map:(()=>{let H=Pg();return H.repeat.set(8,1.6),H})(),roughness:.6,metalness:.1,side:ye,polygonOffset:!0,polygonOffsetFactor:-2}),Et=new st(new We(i.width,1.5),ut);Et.geometry.rotateX(Math.PI/2);let xt=h(Ht-1.1);I.makeBasis(xt.n,Ke,xt.t),Et.quaternion.setFromRotationMatrix(I),Et.position.copy(xt.p).addScaledVector(Ke,.03),e.add(Et);let pt={def:i,theme:t,group:e,curve:n,length:s,width:i.width,halfWidth:c,samples:o,realStep:l,sampleCount:a,frameAt:h,gaps:d,finishDist:Ht,checkpointDists:St,boostZones:Dt,obstacles:[],gates:oe,coinTotal:0,coins:[],gems:[],coinMesh:null,gemMeshes:[],isGapAt(H){return d.some(O=>H>=O.start&&H<=O.end)},isRailAt(H){for(let O of i.rails||[]){let Q=O.from*s,et=O.to*s;if(H>=Q&&H<=et)return!0}return!1},nearest(H,O=0){let Q=Tt(O|0,0,a-1),et=Math.max(0,Q-14),yt=Math.min(a-1,Q+14),rt=null;for(let K=et;K<=yt;K++){let P=o[K],at=o[K+1],dt=G.copy(at.p).sub(P.p),Ct=dt.lengthSq()||1,Pt=Tt(new E().subVectors(H,P.p).dot(dt)/Ct,0,1),ie=P.p.clone().addScaledVector(dt,Pt),se=H.distanceToSquared(ie);if(!rt||se<rt.d2){let Se=P.t.clone().lerp(at.t,Pt).normalize(),Le=new E().crossVectors(Ke,Se).normalize();rt={index:K,d2:se,dist:P.dist+(at.dist-P.dist)*Pt,point:ie,t:Se,n:Le,lat:new E().subVectors(H,ie).dot(Le)}}}return rt},update(H,O){for(let Q of pt.obstacles)Q.update(H,O);for(let Q of oe){let et=Q.userData.glow;et&&(et.material.opacity=.14+.1*(.5+.5*Math.sin(H*1.8+Q.userData.phase)))}if(pt.coinMesh){for(let Q=0;Q<pt.coins.length;Q++){let et=pt.coins[Q];if(et.taken)continue;let yt=et.basePos.y+Math.sin(H*2.1+et.phase)*.09,rt=new re().setFromEuler(new Te(0,H*2.6+et.phase,0)),K=new re().setFromEuler(new Te(Math.PI/2,0,0));rt.multiply(K);let P=new Yt().compose(new E(et.basePos.x,yt,et.basePos.z),rt,new E(1,1,1));pt.coinMesh.setMatrixAt(et.instance,P)}pt.coinMesh.instanceMatrix.needsUpdate=!0}for(let Q of pt.gemMeshes)Q.userData.taken||(Q.rotation.y=H*1.7+Q.userData.phase,Q.position.y=Q.userData.baseY+Math.sin(H*2.4+Q.userData.phase)*.12)},collect(H,O=1.15){let Q=0;for(let et of pt.coins)et.taken||et.basePos.distanceToSquared(H)<(O+.42)*(O+.42)&&(et.taken=!0,Q+=1,pt.coinMesh&&(pt.coinMesh.setMatrixAt(et.instance,new Yt().makeScale(0,0,0)),pt.coinMesh.instanceMatrix.needsUpdate=!0));for(let et of pt.gemMeshes)et.userData.taken||et.position.distanceToSquared(H)<(O+.5)*(O+.5)&&(et.userData.taken=!0,et.visible=!1,Q+=10);return Q},respawnIndex(H){return Tt(H/l|0,0,a-1)}},Rt=[];for(let H of i.obstacles||[]){let O=Tt(H.at,.03,.96)*s;for(let et=0;et<8;et++){let yt=d.find(K=>O>K.start-4.5&&O<K.end+4.5);yt&&(O=yt.end+6.5);let rt=Rt.find(K=>Math.abs(K.d-O)<9);rt&&(O=rt.d+9.5),O=Tt(O,15,s-15)}if(Rt.some(et=>Math.abs(et.d-O)<6))continue;Rt.push({d:O,spec:H});let Q=Fh(pt,{...H,at:O/s},t);Q.update(0,0),pt.obstacles.push(Q)}let Wt=new Gt(.34,.34,.1,20),lt=new Mt({color:16766282,emissive:10117632,emissiveIntensity:.7,metalness:.35,roughness:.35}),jt=[];for(let H of i.coinRuns){let O=Tt(H.from,.015,.97)*s,Q=Tt(H.to,O+4,.97*s),et=Math.max(3,H.n||5);for(let yt=0;yt<et;yt++){let rt=et===1?.5:yt/(et-1),K=O+(Q-O)*rt,P;if(H.kind==="slide"?P=H.lat+(H.lat2-H.lat)*rt:H.kind==="wave"?P=H.lat+Math.sin(rt*Math.PI*2*(H.waves||1))*(H.amp||1.2):P=H.lat,P=Tt(P,-(c-1),c-1),x(K)||K<4||K>s-3||d.some(Ct=>Math.abs(K-Ct.start)<1.4||Math.abs(K-Ct.end)<1.4)||Rt.some(Ct=>Math.abs(Ct.d-K)<4.2))continue;let at=h(K),dt=at.p.clone().addScaledVector(at.n,P);dt.y+=1.02,jt.push({dist:K,lat:P,basePos:dt,phase:Math.random()*Math.PI*2})}}let kt=new li(Wt,lt,Math.max(1,jt.length));for(let H=0;H<jt.length;H++){let O=jt[H];O.instance=H,O.taken=!1,kt.setMatrixAt(H,new Yt().compose(O.basePos,new re,new E(1,1,1)))}kt.instanceMatrix.setUsage(gh),kt.count=jt.length,kt.frustumCulled=!1,e.add(kt),pt.coins=jt,pt.coinMesh=kt;let Ft=new hi(.46,0);for(let H of i.gems||[]){let O=Tt(H.at,.06,.94)*s;if(x(O)){let at=d.find(dt=>O>=dt.start&&O<=dt.end);at&&(O=at.end+4)}let Q=Rt.find(at=>Math.abs(at.d-O)<4);Q&&(O=Q.d+5),O>s-6&&(O=s-6);let et=Tt(H.lat,-(c-1.1),c-1.1),yt=h(O),rt=yt.p.clone().addScaledVector(yt.n,et);rt.y+=1.25;let K=new Mt({color:9369599,emissive:2078424,emissiveIntensity:1.35,metalness:.55,roughness:.12}),P=new st(Ft,K);P.position.copy(rt),P.castShadow=!0,P.userData.baseY=rt.y,P.userData.phase=Math.random()*Math.PI*2,P.userData.taken=!1,e.add(P),pt.gemMeshes.push(P)}return pt.coinTotal=pt.coins.length+pt.gemMeshes.length*10,pt}var pl=new E(0,1,0),_t=Math.PI*2,hl=new Map,ul=new Map;function Ug(i){return i.userData.persistent=!0,i}function Qe(i,t){return ul.has(i)||ul.set(i,Ug(t())),ul.get(i)}function Ng(i){let{canvas:n,ctx:s}=te(1024,512),r=new wt(i.fog),a=r.clone().lerp(new wt(i.skyBottom),.4),o=r.clone().offsetHSL(0,0,i.id==="neon"?.015:.07),l=s.createLinearGradient(0,0,0,512);if(l.addColorStop(0,i.skyTop),l.addColorStop(.38,i.skyMid),l.addColorStop(.478,i.skyHorizon),l.addColorStop(.555,i.skyBottom),l.addColorStop(.64,`#${a.getHexString()}`),l.addColorStop(1,`#${o.getHexString()}`),s.fillStyle=l,s.fillRect(0,0,1024,512),i.stars>0){let m=de(i.id==="neon"?9001:42);for(let f=0;f<i.stars;f++){let _=m()*1024,y=m()*512*.52,M=m()*1.2+.3,C=.25+m()*.75;s.fillStyle=`rgba(${m()>.85?"170,240,255":"255,255,255"},${C})`,s.beginPath(),s.arc(_,y,M,0,_t),s.fill()}}let c=i.sun.x*1024,h=i.sun.y*512,u=i.sun.size*1024,d=s.createRadialGradient(c,h,u*.1,c,h,u*3.4);d.addColorStop(0,i.sun.glow),d.addColorStop(.22,i.sun.glow.replace(/[\d.]+\)$/,"0.28)")),d.addColorStop(1,"rgba(255,255,255,0)"),s.globalCompositeOperation="lighter",s.globalAlpha=.85,s.fillStyle=d,s.fillRect(0,0,1024,512),s.globalAlpha=1;let p=s.createRadialGradient(c,h,0,c,h,u);p.addColorStop(0,i.sun.color),p.addColorStop(.72,i.sun.color),p.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=p,s.beginPath(),s.arc(c,h,u,0,_t),s.fill(),s.globalCompositeOperation="source-over",i.moon&&(s.fillStyle="rgba(240,245,255,0.82)",s.beginPath(),s.arc(c,h,u*.62,0,_t),s.fill(),s.fillStyle="rgba(200,210,235,0.30)",s.beginPath(),s.arc(c-u*.18,h-u*.12,u*.12,0,_t),s.arc(c+u*.16,h+u*.14,u*.08,0,_t),s.arc(c+u*.02,h-u*.22,u*.06,0,_t),s.fill());let g=de(i.id.length*917+33);s.save(),s.filter="blur(18px)";for(let m=0;m<16;m++){let f=512*(.35+g()*.25),_=g()*1024,y=90+g()*260,M=6+g()*18;s.fillStyle=`rgba(255,255,255,${i.id==="neon"?.025:.05+g()*.06})`,s.beginPath(),s.ellipse(_,f,y,M,g()*.2-.1,0,_t),s.fill(),g()>.55&&(s.fillStyle="rgba(255,255,255,0.035)",s.beginPath(),s.ellipse(_+y*.35,f+5,y*.6,M*.5,0,0,_t),s.fill())}s.restore();let x=s.createLinearGradient(0,512*.44,0,512*.62);return x.addColorStop(0,"rgba(255,255,255,0)"),x.addColorStop(.5,"rgba(255,255,255,0.16)"),x.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=x,s.fillRect(0,512*.42,1024,512*.24),n}function ml(i,t){if(hl.has(t.id))return hl.get(t.id);let e=Ng(t),n=ee(e,{srgb:!0});n.mapping=Ai;let s=null,r=null;try{let o=new si(i);o.compileEquirectangularShader(),r=o.fromEquirectangular(n),s=r.texture,o.dispose()}catch(o){console.warn("PMREM environment unavailable",o)}let a={sky:n,env:s,envRT:r};return hl.set(t.id,a),a}function ys(i,t,e){let{sky:n,env:s}=ml(i,e);t.background=n,t.backgroundIntensity=1,t.environment=s,t.fog=new qr(e.fog,e.id==="neon"?.0045:e.id==="battlefield"?.0042:.0033),i.toneMapping=Di,i.toneMappingExposure=e.id==="neon"?1.1:1}function fa(i){let t=new sa(16777215,3359829,.7),e=new ui(16777215,2.2);e.position.set(18,30,12),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=110,e.shadow.camera.left=-22,e.shadow.camera.right=22,e.shadow.camera.top=22,e.shadow.camera.bottom=-22,e.shadow.bias=-8e-4,e.shadow.normalBias=.035;let n=new ui(8965375,.65);return n.position.set(-24,12,-8),i.add(t,e,n,e.target),{hemi:t,sun:e,rim:n}}function _s(i,t){i.hemi.color.setHex(t.hemiSky),i.hemi.groundColor.setHex(t.hemiGround),i.hemi.intensity=t.hemiIntensity,i.sun.color.setHex(t.sunLight),i.sun.intensity=t.sunIntensity,i.rim.color.setHex(t.accent),i.rim.intensity=t.id==="neon"?1.25:.55}function dl(i){let{canvas:n,ctx:s}=te(256,160),r=de(i);s.clearRect(0,0,256,160);for(let o=0;o<14;o++){let l=26+r()*204,c=52+r()*58,h=18+r()*34,u=s.createRadialGradient(l,c,1,l,c,h);u.addColorStop(0,`rgba(255,255,255,${.62+r()*.22})`),u.addColorStop(.5,`rgba(250,251,253,${.32+r()*.2})`),u.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=u,s.fillRect(l-h,c-h,h*2,h*2)}s.globalCompositeOperation="source-atop";let a=s.createLinearGradient(0,0,0,160);a.addColorStop(0,"rgba(255,255,255,0.22)"),a.addColorStop(.5,"rgba(226,230,238,0.08)"),a.addColorStop(1,"rgba(96,106,128,0.4)"),s.fillStyle=a,s.fillRect(0,0,256,160);for(let o=0;o<700;o++)s.fillStyle=`rgba(255,255,255,${r()*.1})`,s.fillRect(r()*256,r()*160,1.5,1.5);return s.globalCompositeOperation="source-over",ee(n,{srgb:!0})}function gl(){let{canvas:i,ctx:t}=te(128,256),e=de(701),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"#b8b4ad"),n.addColorStop(.35,"#d2cdc4"),n.addColorStop(.7,"#c1bbb2"),n.addColorStop(1,"#a8a29a"),t.fillStyle=n,t.fillRect(0,0,128,256);for(let r=0;r<110;r++){let a=e()*128,o=e()*256,l=10+e()*90,c=52+e()*38;t.strokeStyle=`rgba(${c},${c},${c},${.12+e()*.32})`,t.lineWidth=.7+e()*2.4,t.beginPath(),t.moveTo(a,o),t.bezierCurveTo(a+(e()-.5)*8,o+l*.3,a+(e()-.5)*8,o+l*.7,a+(e()-.5)*5,o+l),t.stroke()}for(let r=0;r<30;r++)t.fillStyle="rgba(58,54,48,0.2)",t.beginPath(),t.ellipse(e()*128,e()*256,2+e()*4,1+e()*3,0,0,_t),t.fill();let s=ee(i,{repeat:!0});return s.repeat.set(1,2),s}function Fg(){let{canvas:i,ctx:t}=te(128,128),e=de(313);t.fillStyle="#e0e1dc",t.fillRect(0,0,128,128);for(let s=0;s<900;s++){let r=150+Math.floor(e()*100);t.fillStyle=`rgba(${r-10},${r},${r-14},${.08+e()*.18})`,t.beginPath(),t.arc(e()*128,e()*128,.5+e()*2.4,0,_t),t.fill()}for(let s=0;s<80;s++){t.strokeStyle="rgba(90,110,80,0.12)",t.lineWidth=.8,t.beginPath();let r=e()*128,a=e()*128;t.moveTo(r,a),t.lineTo(r+(e()-.5)*9,a+(e()-.5)*9),t.stroke()}let n=ee(i,{repeat:!0});return n.repeat.set(1,1),n}function Hh(){let{canvas:i,ctx:t}=te(256,256),e=de(941);t.clearRect(0,0,256,256);let n=128,s=128;for(let a=0;a<30;a++){let o=e()*_t,l=8+e()*66,c=n+Math.cos(o)*l*.36,h=s+Math.sin(o)*l*.36,u=o+(e()-.5)*1.1,d=34+e()*68;t.strokeStyle=`rgba(212,216,205,${.32+e()*.24})`,t.lineWidth=1.1,t.beginPath(),t.moveTo(c,h),t.lineTo(c+Math.cos(u)*d,h+Math.sin(u)*d),t.stroke();let p=5+Math.floor(e()*5);for(let g=0;g<p;g++){let x=.2+g/p*.85,m=c+Math.cos(u)*d*x+(e()-.5)*8,f=h+Math.sin(u)*d*x+(e()-.5)*8,_=g%2?1:-1,y=u+_*(.55+e()*.45),M=6+e()*10,C=2.4+e()*4.2,b=226+Math.floor(e()*28);t.save(),t.translate(m,f),t.rotate(y);let R=t.createLinearGradient(-M,0,M,0);R.addColorStop(0,`rgba(${b-30},${b-20},${b-38},${.72+e()*.22})`),R.addColorStop(.55,`rgba(${b},${b},${b-8},${.8+e()*.18})`),R.addColorStop(1,`rgba(${b-42},${b-34},${b-50},${.55+e()*.2})`),t.fillStyle=R,t.beginPath(),t.ellipse(0,0,M,C,0,0,_t),t.fill(),t.strokeStyle="rgba(150,158,138,0.28)",t.lineWidth=.7,t.beginPath(),t.moveTo(-M*.7,0),t.lineTo(M*.7,0),t.stroke(),t.restore()}}let r=ee(i,{srgb:!0});return r.anisotropy=8,r}function zh(){let i=[],t=[],e=[],n=[];for(let r=0;r<3;r++){let a=r/3*Math.PI,o=Math.cos(a),l=Math.sin(a),c=i.length/3;i.push(-o,-1,-l,o,-1,l,o,1,l,-o,1,-l),t.push(0,0,1,0,1,1,0,1);for(let h=0;h<4;h++)e.push(-l,0,o);n.push(c,c+1,c+2,c,c+2,c+3)}let s=new ce;return s.setAttribute("position",new Zt(i,3)),s.setAttribute("uv",new Zt(t,2)),s.setAttribute("normal",new Zt(e,3)),s.setIndex(n),s.computeBoundingSphere(),s}function xl(){let{canvas:i,ctx:t}=te(256,256),e=de(877),n=t.createLinearGradient(0,0,256,256);n.addColorStop(0,"#bdb6ab"),n.addColorStop(.5,"#9f988d"),n.addColorStop(1,"#c8c1b5"),t.fillStyle=n,t.fillRect(0,0,256,256);for(let r=0;r<420;r++){let a=120+Math.floor(e()*90);t.fillStyle=`rgba(${a},${a-5},${a-12},${.05+e()*.13})`,t.beginPath(),t.arc(e()*256,e()*256,1+e()*9,0,_t),t.fill()}for(let r=0;r<32;r++){let a=e()*256,o=e()*256;t.strokeStyle=`rgba(42,38,34,${.14+e()*.2})`,t.lineWidth=.8+e()*1.6,t.beginPath(),t.moveTo(a,o);for(let l=0;l<5;l++)a+=(e()-.5)*30,o+=8+e()*22,t.lineTo(a,o);t.stroke()}let s=ee(i,{repeat:!0});return s.repeat.set(2,2),s}function Vh(){let{canvas:i,ctx:t}=te(128,128),e=de(41);t.fillStyle="#e2e5d9",t.fillRect(0,0,128,128);for(let s=0;s<1200;s++){let r=142+Math.floor(e()*90);t.fillStyle=`rgba(${r-8},${r},${r-12},${.09+e()*.16})`,t.fillRect(e()*128,e()*128,1,1+e()*3)}for(let s=0;s<140;s++){t.strokeStyle=`rgba(92,104,72,${.1+e()*.18})`,t.lineWidth=.8,t.beginPath();let r=e()*128,a=e()*128;t.moveTo(r,a),t.lineTo(r+(e()-.5)*4,a-2-e()*5),t.stroke()}let n=ee(i,{repeat:!0});return n.repeat.set(3,3),n}function Og(){let{canvas:i,ctx:t}=te(256,128),e=["#f6e7c8","#d94f6a"],n=12;for(let s=0;s<n;s++)t.fillStyle=e[s%2],t.fillRect(s/n*256,0,256/n+1,128);return t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(0,0,256,10),t.fillStyle="rgba(40,10,20,0.16)",t.fillRect(0,118,256,10),ee(i)}function Bg(){return[Qe("cloud-1",()=>dl(11)),Qe("cloud-2",()=>dl(29)),Qe("cloud-3",()=>dl(73))]}function kg(i="rgba(255,255,255,0.9)"){let{canvas:t,ctx:e}=te(64,64),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,i),n.addColorStop(.4,"rgba(255,255,255,0.25)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),ee(t)}function yl(i,t,e=.18,n=0){let s=i.attributes.position,r=de(t),a=r()*_t;for(let o=0;o<s.count;o++){let l=s.getX(o),c=s.getY(o),h=s.getZ(o),u=Math.hypot(l,h);if(u<1e-4)continue;let d=Math.atan2(h,l),p=1+e*(Math.sin(d*3+a)*.55+Math.sin(d*7-a*.7)*.3+(r()-.5)*.3);s.setX(o,l*p),s.setZ(o,h*p),n&&s.setY(o,c+Math.sin(d*5+a)*n*(.4+u*.6))}return s.needsUpdate=!0,i.computeVertexNormals(),i}function Gh(i){let t=new rn(1,2.6,14,4,!1);return t.rotateX(Math.PI),t.translate(0,-1.3,0),yl(t,i,.17,.06)}function kh(i){let t=new rn(1,1,14,6,!1);return t.translate(0,.5,0),yl(t,i,.2,.035)}function Hg(i){let t=new ea(1,1);return yl(t,i,.28,.04)}function on(i,t,e){return new Yt().compose(i,t,e)}function Wn(i,t,e,n,{cast:s=!0,receive:r=!0}={}){if(!n.length)return null;let a=new li(t,e,n.length),o=new wt;for(let l=0;l<n.length;l++){let c=n[l];a.setMatrixAt(l,c.matrix),c.color!==void 0&&(o.setHex(c.color),a.setColorAt(l,o))}return a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),e.alphaTest>0&&e.map&&(a.customDepthMaterial=new Bs({depthPacking:Jo,map:e.map,alphaTest:e.alphaTest})),a.castShadow=s,a.receiveShadow=r,i.add(a),a}function da(i,t=.62){let e=Bg(),n=[];for(let s=0;s<e.length;s++)for(let r of[1,.58]){let a=new wt(i.cloud);a.offsetHSL((s-1)*.012,0,r<1?-.045:.025);let o=new ai({map:e[s],color:a,transparent:!0,opacity:t*r,depthWrite:!1,fog:!0,rotation:(s*1.7+(r<1?.4:0))%_t});n.push(o)}return n}function ua(i,t,e){let n=new zt,s=7+Math.floor(t()*4);for(let r=0;r<s;r++){let a=new oi(i[Math.floor(t()*i.length)]),o=e*(.7+t()*1.05),l=o*(.4+t()*.22);a.position.set((t()-.5)*e*2.2,(t()-.5)*e*.55,(t()-.5)*e*1.25),a.scale.set(o,l,1),a.renderOrder=2,n.add(a)}return n}function Wh(i,t={}){let{count:e=14,seed:n=33,center:s=new E(0,10,-50),spread:r=new E(130,26,85),size:a=8,opacity:o=.76}=t,l=new zt;l.name="cloud-field";let c=de(n),h=da(i,o),u=[];for(let d=0;d<e;d++){let p=ua(h,c,a*(.55+c()*.9)),g=new E(s.x+(c()-.5)*r.x,s.y+(c()-.5)*r.y,s.z+(c()-.5)*r.z);p.position.copy(g),l.add(p),u.push({group:p,baseX:g.x,baseY:g.y,baseZ:g.z,phase:c()*_t,drift:.18+c()*.4})}return l.userData.materials=h,l.userData.setTheme=d=>{for(let p of h){let g=new wt(d.cloud);p.color.copy(g)}},l.userData.update=d=>{for(let p of u)p.group.position.x=p.baseX+Math.sin(d*.018+p.phase)*p.drift*9,p.group.position.y=p.baseY+Math.sin(d*.06+p.phase)*.35},l}function _l(i){switch(i.id){case"candy":return[16752592,16761056,11044351,16769008];case"neon":return[3038207,2006732,8150271,3135471];case"battlefield":return[6253371,4871728,7831626,4016167];case"hills":return[4160058,5672776,3105843,6986837];case"coaster":return[5077821,6459209,4024885,9531719];case"dusk":return[9067086,10840664,7226688,11828062];default:return[5217862,6535252,4033082,7978328]}}function zg(i){return i.id==="candy"?16773880:i.id==="neon"?2371676:i.id==="battlefield"?5982259:i.id==="coaster"?6440239:i.id==="hills"?5915696:7031346}function Vg(i,t,e,n,s,r,a,o){let l=_l(t),c=zg(t),h=o==="broad",u=o==="dead",d=h||u?a*.72:a*.9,p=a*(h?.4:.32);if(i.trunks.push({matrix:on(new E(n,r+d/2,s),new re().setFromEuler(new Te((e()-.5)*.04,e()*_t,(e()-.5)*.04)),new E(p,d,p)),color:c}),h||u){let g=u?5:3;for(let x=0;x<g;x++){let m=e()*_t,f=new E(Math.cos(m)*(u?.9:.62),.78+e()*.25,Math.sin(m)*(u?.9:.62)).normalize(),_=a*(.3+e()*.22),y=new E(n,r+a*(.36+e()*.36),s),M=new re().setFromUnitVectors(pl,f),C=y.clone().addScaledVector(f,_/2);if(i.branches.push({matrix:on(C,M,new E(a*.45,_,a*.45)),color:c}),u&&e()>.5){let b=f.clone().add(new E((e()-.5)*.8,.4,(e()-.5)*.8)).normalize();i.branches.push({matrix:on(y.clone().addScaledVector(f,_),new re().setFromUnitVectors(pl,b),new E(a*.3,_*.55,a*.3)),color:c})}}}if(u){let g=l[Math.floor(e()*l.length)];for(let x=0;x<2;x++){let m=e()*_t,f=a*(.28+e()*.35);i.leaves.push({matrix:on(new E(n+Math.cos(m)*f,r+a*(.55+e()*.28),s+Math.sin(m)*f),new re().setFromEuler(new Te(e()*_t,e()*_t,e()*_t)),new E(a*.2,a*.15,a*.2)),color:g})}return}if(h){let g=9+Math.floor(e()*4);for(let x=0;x<g;x++){let m=e()*_t,f=a*(.1+e()*.34),_=a*(.22+e()*.16);i.leaves.push({matrix:on(new E(n+Math.cos(m)*f,r+a*(.56+e()*.48),s+Math.sin(m)*f),new re().setFromEuler(new Te(e()*_t,e()*_t,e()*_t)),new E(_*(.9+e()*.45),_*(.72+e()*.4),_)),color:l[Math.floor(e()*l.length)]})}for(let x=0;x<4;x++){let m=e()*_t;i.leaves.push({matrix:on(new E(n+Math.cos(m)*a*.22,r+a*.38,s+Math.sin(m)*a*.22),new re().setFromEuler(new Te(e()*_t,e()*_t,e()*_t)),new E(a*.2,a*.14,a*.2)),color:l[Math.floor(e()*l.length)]})}}else{for(let x=0;x<6;x++){let m=x/5,f=r+a*(.19+m*.7),_=a*(.28-m*.1),y=a*(.35-m*.235);i.pines.push({matrix:on(new E(n+(e()-.5)*a*.035,f,s+(e()-.5)*a*.035),new re().setFromEuler(new Te((e()-.5)*.06,e()*_t,(e()-.5)*.06)),new E(y,_,y)),color:l[Math.floor(e()*l.length)]})}t.id==="hills"&&i.snow.push({matrix:on(new E(n,r+a*.94,s),new re().setFromEuler(new Te(0,e()*_t,0)),new E(a*.145,a*.25,a*.145)),color:15988735})}}function Gg(i){let t=Qe("bark",gl),e=Qe("foliage",Fg),n=Qe("leaf-card",Hh),s=new Mt({map:t,color:16777215,roughness:.96,metalness:0}),r=new Mt({map:n,color:16777215,roughness:.9,metalness:0,alphaTest:.38,side:ye}),a=new Mt({map:e,color:16777215,roughness:.94,metalness:0}),o=new Mt({color:15988735,roughness:.88,metalness:0}),l=s.clone();return{trunkMat:s,branchMat:l,leafMat:r,pineMat:a,snowMat:o}}function Wg(i,t,e){let n=Gg(t),s=new Gt(.075,.13,1,8,1),r=new Gt(.035,.085,1,6,1),a=zh(),o=new rn(1,1,10,3,!1),l=new rn(1,1,10,2,!1);return Wn(i,s,n.trunkMat,e.trunks,{cast:!0,receive:!0}),Wn(i,r,n.branchMat,e.branches,{cast:!0,receive:!0}),Wn(i,a,n.leafMat,e.leaves,{cast:!0,receive:!0}),Wn(i,o,n.pineMat,e.pines,{cast:!0,receive:!0}),Wn(i,l,n.snowMat,e.snow,{cast:!1,receive:!0}),n}function qg(i,t,e,n,s,r){let a=new zt;a.position.copy(t),a.rotation.y=s()*_t,a.scale.setScalar(e);let o=new Mt({color:4934210,metalness:.6,roughness:.45}),l=new st(new Gt(.035,.05,2.4,8),o);l.position.y=1.2,l.castShadow=!0,a.add(l);let c=new We(1.25,.68,10,4);c.translate(.625,0,0);let h=new Mt({color:n,roughness:.9,metalness:0,side:ye}),u=new st(c,h);u.position.set(.02,2.02,0),u.castShadow=!0,a.add(u),r.push({mesh:u,base:c.attributes.position.array.slice(),phase:s()*_t}),i.add(a)}function Xg(i,t,e,n,s,r){let a=new zt;a.position.copy(t),a.rotation.y=s()*_t,a.scale.setScalar(e);let o=new Mt({map:Qe("bark",gl),color:6967863,roughness:.9,metalness:.02}),l=new Mt({color:3814184,roughness:.95});for(let u of[-1,1])for(let d of[-1,1]){let p=new st(new Gt(.11,.19,4.1,7),o);p.position.set(u*.78,1.95,d*.78),p.rotation.z=-u*.045,p.rotation.x=d*.045,p.castShadow=!0,a.add(p)}let c=new st(new ue(2.35,.18,2.35),l);c.position.y=4,c.castShadow=!0,c.receiveShadow=!0,a.add(c);for(let u of[-1,1]){let d=new st(new ue(2.35,.1,.1),o);d.position.set(0,4.6,u*1.1),a.add(d);let p=new st(new ue(.1,.1,2.35),o);p.position.set(u*1.1,4.6,0),a.add(p)}let h=new st(new rn(1.9,1,4),l);h.position.y=5.45,h.rotation.y=Math.PI/4,h.castShadow=!0,a.add(h),qg(a,new E(.9,5.25,-.8),.75,n.id==="battlefield"?12077626:n.accent,s,r),i.add(a)}function Yg(i,t,e,n){let s=new zt;s.position.copy(t);let r=da({cloud:6052176},.3);$g(r);for(let a=0;a<8;a++){let o=new oi(r[a%r.length]);o.position.set((n()-.5)*e*.5,a*e*.45,(n()-.5)*e*.5);let l=e*(.55+n()*.6)*(.65+a*.05);o.scale.set(l,l*.72,1),s.add(o)}return i.add(s),s}function $g(i){for(let t of i)t.depthWrite=!1,t.opacity*=.8}function fl(i,t,e,n,s,r,a){let o=kh(s),l=new st(o,a.rocks[s%a.rocks.length]);if(l.position.copy(t),l.scale.set(e,n,e*(.82+s%5*.05)),l.rotation.y=s%7*.7,l.castShadow=!1,l.receiveShadow=!1,i.add(l),r.id!=="battlefield"||s%2===0){let c=new st(o,a.snow);c.position.copy(t),c.position.y+=n*.7,c.scale.set(e*.31,n*.3,e*.31*.92),c.rotation.y=l.rotation.y,i.add(c)}if(e>18){let c=new st(kh(s+3),a.rocks[(s+1)%a.rocks.length]);c.position.copy(t),c.position.x+=e*.9,c.position.z+=e*.7,c.scale.set(e*.55,n*.62,e*.48),c.rotation.y=l.rotation.y+1.3,i.add(c)}}function Zg(i,t,e,n,s,r,a){let o=new zt;o.position.copy(t),o.scale.setScalar(e),a&&o.lookAt(a);let l=new Mt({color:6042447,metalness:.72,roughness:.32}),c=new Mt({color:15255968,metalness:.5,roughness:.4}),h=new pe({color:16770976}),u=new pe({color:16740275}),d=6.4,p=d+1.1;for(let M of[-1,1]){for(let b of[-1,1]){let R=new st(new Gt(.14,.24,p+1.2,8),l);R.position.set(M*2.8,(p+1.2)/2,b*.65),R.rotation.z=-M*.37,R.castShadow=!0,o.add(R)}let C=new st(new Gt(.1,.1,5.7,8),c);C.rotation.z=Math.PI/2,C.position.set(0,p,M*.65),o.add(C)}let g=new st(new Gt(.38,.38,1.7,12),c);g.rotation.x=Math.PI/2,g.position.set(0,p,0),o.add(g);let x=new zt;x.position.set(0,p,0),o.add(x);let m=new st(new pn(d,.12,10,64),c);x.add(m);let f=new st(new pn(d-.55,.07,8,64),l);x.add(f);for(let M=0;M<12;M++){let C=M/12*_t,b=new st(new Gt(.035,.045,d,6),l);b.position.set(Math.cos(C)*d*.5,Math.sin(C)*d*.5,0),b.rotation.z=C-Math.PI/2,x.add(b)}let _=[];for(let M=0;M<12;M++){let C=M/12*_t,b=new zt;b.position.set(Math.cos(C)*d,Math.sin(C)*d,0);let R=new st(new ue(1.05,.9,.8),M%2?u:h);R.castShadow=!0,b.add(R);let U=new st(new rn(.75,.34,4),l);U.position.y=.62,U.rotation.y=Math.PI/4,b.add(U),x.add(b),_.push({group:b,baseAngle:C})}for(let M=0;M<28;M++){let C=M/28*_t,b=new st(new Ne(.075,6,5),M%3?h:u);b.position.set(Math.cos(C)*d,Math.sin(C)*d,.12),x.add(b)}let y=new Ii(16762585,18,36,2);y.position.set(0,p,.5),o.add(y),i.add(o),r.push({wheel:x,cabins:_,phase:s()*_t,speed:.09+s()*.05})}function Jg(i,t,e,n,s){let r=new zt;r.position.copy(t),r.rotation.y=s()*_t,r.scale.setScalar(e);let a=new Mt({map:Qe("tent-stripes",Og),roughness:.82,metalness:.02,side:ye}),o=new st(new rn(1.25,1.9,12,1,!1),a);o.position.y=.95,o.castShadow=!0,r.add(o);let l=new st(new Gt(.035,.035,2.6,6),new Mt({color:6241331,roughness:.7}));l.position.y=1.2,r.add(l);let c=new st(new We(.55,.28),new Mt({color:n.accent,side:ye}));c.position.set(.28,2.5,0),r.add(c),i.add(r)}function Kg(i,t,e,n,s,r){let a=[16740241,16767293,6609151,11635967,16753244],o=new zt;o.position.copy(t),o.scale.setScalar(e);for(let l=0;l<6;l++){let c=a[(l+Math.floor(s()*4))%a.length],h=new wt(c).offsetHSL((s()-.5)*.04,0,(s()-.5)*.08),u=new st(new Ne(.38+s()*.16,12,9),new Mt({color:h,roughness:.28,metalness:.05}));u.position.set((s()-.5)*1.5,1.6+s()*1.6,(s()-.5)*1.5),o.add(u);let d=new st(new Gt(.008,.008,1.4,4),new pe({color:14209736}));d.position.copy(u.position).add(new E(0,-.7,0)),o.add(d)}i.add(o),r.push({mesh:o,baseY:t.y,phase:s()*_t})}function Qg(i,t,e,n,s){let r=new zt;r.position.copy(t),r.rotation.y=s()*_t,r.scale.setScalar(e);let a=new Mt({map:Qe("rock",xl),color:8615786,roughness:.98}),o=new Mt({color:4866616,roughness:.95});for(let l=0;l<4;l++){let c=1.2+s()*1.6,h=1.4+s()*3.8,u=.7+s()*1.4,d=new st(new ue(c,h,u),l%3===0?o:a);d.position.set((s()-.5)*5,h/2,(s()-.5)*4),d.rotation.y=s()*_t,d.castShadow=!0,r.add(d)}i.add(r)}function qh(i,t){let e=new zt;e.name="decor";let n=de(i.number*7919+13),s=i.samples,r=N=>s[Math.floor(Tt(N,0,.999)*(s.length-1))],a=Qe("rock",xl),o=Qe("grass",Vh),l=new Mt({map:a,color:16777215,roughness:.98,metalness:0}),c=new Mt({map:o,color:16777215,roughness:.94,metalness:0}),h=new Mt({map:a,color:16777215,roughness:1,metalness:0,flatShading:!0}),u=[],d=20,p=new Gt(1,1.075,1.05,18,1,!1),g=new Gt(.985,.995,.16,18,1,!1),x=Gh(91),m=[],f=[],_=[],y=8;for(let N=0;N<d;N++){let V=N<y,z=V?(N+.5)/y*.92+(n()-.5)*.035:(N-y+.5)/(d-y)+(n()-.5)*.03,D=r(z),k=n()>.5?1:-1,it=V?k*Lt(n,9,17):k*Lt(n,26,76),ct=D.p.clone().addScaledVector(D.n,it);ct.y-=V?Lt(n,3.5,9):Lt(n,7,28);let ft=V?Lt(n,2.2,3.8):Lt(n,3.1,6.6),bt=Lt(n,.84,1.18),Dt=ct.y;m.push({matrix:on(new E(ct.x,Dt-.52,ct.z),new re().setFromEuler(new Te(0,n()*_t,0)),new E(ft,1.18,ft*bt)),color:new wt(t.rock).offsetHSL(0,0,(n()-.5)*.11).getHex()}),f.push({matrix:on(new E(ct.x,Dt+.03,ct.z),new re().setFromEuler(new Te(0,n()*_t,0)),new E(ft,1,ft*bt)),color:new wt(n()>.42?t.grass:t.grassTop).offsetHSL(0,0,(n()-.5)*.08).getHex()}),_.push({matrix:on(new E(ct.x,Dt-.94,ct.z),new re().setFromEuler(new Te(0,n()*_t,0)),new E(ft*1.015,ft*Lt(n,.78,1.28),ft*bt*1.015)),color:new wt(t.rock).offsetHSL(0,0,(n()-.55)*.14).getHex()}),u.push({x:ct.x,z:ct.z,topY:Dt+.11,radius:ft*.8,scale:ft,near:V})}Wn(e,p,l,m,{cast:!0,receive:!0}),Wn(e,g,c,f,{cast:!0,receive:!0}),Wn(e,x,h,_,{cast:!1,receive:!0});let M={trunks:[],branches:[],leaves:[],pines:[],snow:[]},C=[];for(let N of u){let V=N.near?3+Math.floor(n()*3):2+Math.floor(n()*3),z=t.id==="hills"?.64:t.id==="battlefield"?.38:t.id==="coaster"?.25:.12;for(let it=0;it<V;it++){let ct=n()*_t,ft=N.radius*Math.sqrt(n())*.72,bt=N.x+Math.cos(ct)*ft,Dt=N.z+Math.sin(ct)*ft,Ut=(N.near?2.3:2.8)+n()*(N.near?2.6:3.4),Jt=n()<z?"pine":"broad";t.id==="battlefield"&&n()>.56&&(Jt="dead"),Vg(M,t,n,bt,Dt,N.topY,Ut,Jt)}let D=N.near?3+Math.floor(n()*3):1+Math.floor(n()*3);for(let it=0;it<D;it++){let ct=n()*_t,ft=N.radius*Math.sqrt(n())*.82,bt=Lt(n,.3,.8)*(N.near?1.15:1);M.leaves.push({matrix:on(new E(N.x+Math.cos(ct)*ft,N.topY+bt*.55,N.z+Math.sin(ct)*ft),new re().setFromEuler(new Te(n()*_t,n()*_t,n()*_t)),new E(bt,bt*.7,bt*(.85+n()*.3))),color:new wt(_l(t)[Math.floor(n()*4)]).offsetHSL(0,0,(n()-.5)*.08).getHex()})}let k=2+Math.floor(n()*3);for(let it=0;it<k;it++){let ct=n()*_t,ft=N.radius*Math.sqrt(n())*.84,bt=Lt(n,.16,.55)*(N.near?1.1:N.scale*.38);C.push({matrix:on(new E(N.x+Math.cos(ct)*ft,N.topY+bt*.35,N.z+Math.sin(ct)*ft),new re().setFromEuler(new Te(n()*_t,n()*_t,n()*_t)),new E(bt,bt*.62,bt)),color:new wt(t.rock).offsetHSL(0,0,(n()-.5)*.12).getHex()})}}Wg(e,t,M),Wn(e,Hg(17),h,C,{cast:!0,receive:!0});let b=[],R=[],U=[],v=[];if(t.id==="battlefield"){let N=u.filter(z=>!z.near).slice(0,4);for(let z of N)Xg(e,new E(z.x,z.topY,z.z),Lt(n,.7,1.15),t,n,b);for(let z of u.filter(D=>D.near).slice(0,3))Qg(e,new E(z.x,z.topY,z.z),Lt(n,.7,1.1),t,n);for(let z=0;z<3;z++){let D=r(.2+z*.25+n()*.08),k=D.p.clone().addScaledVector(D.n,(z%2?1:-1)*Lt(n,25,55));k.y-=Lt(n,5,16),Yg(e,k,Lt(n,2.4,4.4),n)}let V={rocks:[new Mt({map:a,color:11838606,roughness:1,flatShading:!0}),new Mt({map:a,color:10259833,roughness:1,flatShading:!0})],snow:new Mt({color:15659502,roughness:.92})};for(let z=0;z<4;z++){let D=r(.08+z*.24),k=D.p.clone().addScaledVector(D.n,(z%2?-1:1)*Lt(n,55,110));k.y-=Lt(n,20,42);let it={group:new zt,baseY:k.y,phase:n()*_t};fl(it.group,new E(0,0,0),Lt(n,15,30),Lt(n,22,46),30+z,t,V),it.group.position.copy(k),e.add(it.group),v.push(it)}}else if(t.id==="hills"){let N={rocks:[new Mt({map:a,color:11581608,roughness:1,flatShading:!0}),new Mt({map:a,color:10003346,roughness:1,flatShading:!0}),new Mt({map:a,color:12634296,roughness:1,flatShading:!0})],snow:new Mt({color:16120063,roughness:.9})};for(let V=0;V<7;V++){let z=r(.06+V*.135),D=V%2?1:-1,k=z.p.clone().addScaledVector(z.n,D*Lt(n,38,105));k.y-=Lt(n,16,45);let it={group:new zt,baseY:k.y,phase:n()*_t};fl(it.group,new E(0,0,0),Lt(n,18,38),Lt(n,34,68),60+V,t,N),it.group.position.copy(k),e.add(it.group),v.push(it)}}else if(t.id==="coaster"){let N={rocks:[new Mt({map:a,color:10719113,roughness:1,flatShading:!0}),new Mt({map:a,color:9074288,roughness:1,flatShading:!0})],snow:new Mt({color:16766914,roughness:.95})};for(let k=0;k<3;k++){let it=r(.72+k*.09),ct=it.p.clone().addScaledVector(it.n,(k%2?1:-1)*Lt(n,58,100));ct.y-=Lt(n,24,42);let ft={group:new zt,baseY:ct.y,phase:n()*_t};fl(ft.group,new E(0,0,0),Lt(n,16,28),Lt(n,25,46),90+k,t,N),ft.group.position.copy(ct),e.add(ft.group),v.push(ft)}let V=r(.12),D=V.p.clone().addScaledVector(V.n,-1*27);D.y-=8.5,Zg(e,D,1.05,t,n,R,V.p);for(let k=0;k<3;k++){let it=r(.18+k*.08),ct=it.p.clone().addScaledVector(it.n,(k%2?1:-1)*Lt(n,15,28));ct.y-=Lt(n,4,9),Jg(e,ct,Lt(n,.8,1.35),t,n)}for(let k=0;k<2;k++){let it=r(.23+k*.1),ct=it.p.clone().addScaledVector(it.n,(k%2?1:-1)*Lt(n,16,26));ct.y-=Lt(n,1,5),Kg(e,ct,Lt(n,.8,1.2),t,n,U)}}if(t.id==="neon"){let N=new hi(.6,0),V=new Mt({color:4712703,emissive:2282478,emissiveIntensity:1.4,roughness:.15,metalness:.4,transparent:!0,opacity:.92}),z=new li(N,V,26);for(let D=0;D<26;D++){let k=r(n()),it=(n()>.5?1:-1)*Lt(n,20,70),ct=k.p.clone().addScaledVector(k.n,it);ct.y-=Lt(n,4,22);let ft=new Ae;ft.position.copy(ct),ft.rotation.set(n()*.4,n()*_t,n()*.4),ft.scale.setScalar(Lt(n,.6,2.4)),ft.updateMatrix(),z.setMatrixAt(D,ft.matrix)}z.instanceMatrix.needsUpdate=!0,e.add(z)}let w=da(t,t.id==="battlefield"?.84:.88),I=[],G=t.id==="neon"?8:11;for(let N=0;N<G;N++){let V=r(n()),z=n()>.5?1:-1,D=V.p.clone().addScaledVector(V.n,z*Lt(n,34,108));D.y+=Lt(n,-3,28);let k=ua(w,n,Lt(n,4,9));k.position.copy(D),e.add(k),I.push({group:k,baseX:D.x,baseY:D.y,phase:n()*_t,drift:.2+n()*.45})}let tt=t.id==="neon"?2:3;for(let N=0;N<tt;N++){let V=r(.16+N*.3+(n()-.5)*.04),z=N%2?-1:1,D=V.p.clone().addScaledVector(V.n,z*Lt(n,34,56));D.y+=Lt(n,9,24);let k=ua(w,n,Lt(n,10,16));k.position.copy(D),e.add(k),I.push({group:k,baseX:D.x,baseY:D.y,phase:n()*_t,drift:.12+n()*.22})}if(t.id==="hills"||t.id==="battlefield"){let N=da(t,.16);for(let V=0;V<7;V++){let z=r(n()),D=z.p.clone().addScaledVector(z.n,(n()>.5?1:-1)*Lt(n,30,95));D.y-=Lt(n,6,18);let k=ua(N,n,Lt(n,7,14));k.position.copy(D),e.add(k),I.push({group:k,baseX:D.x,baseY:D.y,phase:n()*_t,drift:.1+n()*.25})}}let L=170,F=new ce,J=new Float32Array(L*3);for(let N=0;N<L;N++){let V=r(n()),z=V.p.clone().addScaledVector(V.n,(n()-.5)*26);J[N*3]=z.x,J[N*3+1]=z.y+Lt(n,-5,12),J[N*3+2]=z.z}F.setAttribute("position",new ve(J,3));let nt=kg(t.id==="neon"?"rgba(120,240,255,0.95)":t.id==="candy"?"rgba(255,190,230,0.95)":t.id==="battlefield"?"rgba(240,220,190,0.9)":"rgba(255,250,230,0.95)"),j=new Ci({size:t.id==="battlefield"?.38:.48,map:nt,transparent:!0,opacity:t.id==="neon"?.5:.48,depthWrite:!1,blending:Be,color:t.accent,sizeAttenuation:!0}),q=new ci(F,j);return q.frustumCulled=!1,e.add(q),e.userData.update=(N,V=.016)=>{q.rotation.y=N*.006;for(let z of I)z.group.position.x=z.baseX+Math.sin(N*.02+z.phase)*z.drift*8,z.group.position.y=z.baseY+Math.sin(N*.055+z.phase)*.3;for(let z of b){let D=z.mesh.geometry.attributes.position;for(let k=0;k<D.count;k++){let it=z.base[k*3];D.setZ(k,Math.sin(N*3.1+it*5+z.phase)*.09*it),D.setY(k,z.base[k*3+1]+Math.sin(N*2.3+it*4+z.phase)*.018*it)}D.needsUpdate=!0}for(let z of R){z.wheel.rotation.z=N*z.speed+z.phase;for(let D of z.cabins)D.group.rotation.z=-z.wheel.rotation.z}for(let z of U)z.mesh.position.y=z.baseY+Math.sin(N*.8+z.phase)*.4;for(let z of v)z.group.rotation.y+=V*6e-4},e}function Xh(i,t,e=1){let n=de(t),s=new zt,r=Qe("rock",xl),a=Qe("grass",Vh),o=Qe("bark",gl),l=Qe("leaf-card",Hh),c=new Mt({map:r,color:i.rock,roughness:1,flatShading:!0}),h=new Mt({map:r,color:i.rockDark,roughness:1}),u=new Mt({map:a,color:i.grass,roughness:.94}),d=new Mt({map:o,color:i.id==="candy"?16773880:i.id==="neon"?2371676:7031346,roughness:.95}),g=_l(i).map(y=>new Mt({map:l,color:y,roughness:.9,alphaTest:.38,side:ye})),x=new st(new Gt(1,1.08,.5,16),h);x.position.y=-.25,x.castShadow=!0,x.receiveShadow=!0,s.add(x);let m=new st(new Gt(.985,1,.16,16),u);m.position.y=.02,m.castShadow=!0,m.receiveShadow=!0,s.add(m);let f=new st(Gh(t),c);f.position.y=-.5,f.scale.set(1,1.25,1),f.castShadow=!0,s.add(f);let _=zh();for(let y=0;y<4;y++){let M=n()*_t,C=.55*Math.sqrt(n()),b=Math.cos(M)*C,R=Math.sin(M)*C,U=.8+n()*1,v=new zt;v.position.set(b,.11,R);let w=new st(new Gt(.045,.08,U*.72,8),d);w.position.y=U*.36,w.castShadow=!0,v.add(w);for(let I=0;I<2;I++){let G=n()*_t,tt=new E(Math.cos(G)*.6,.8,Math.sin(G)*.6).normalize(),L=U*.34,F=new st(new Gt(.018,.042,L,6),d);F.position.set(0,U*(.38+I*.16),0),F.quaternion.setFromUnitVectors(pl,tt),F.translateY(L/2),F.castShadow=!0,v.add(F)}for(let I=0;I<11;I++){let G=n()*_t,tt=U*(.07+n()*.3),L=new st(_,g[Math.floor(n()*g.length)]);L.position.set(Math.cos(G)*tt,U*(.56+n()*.48),Math.sin(G)*tt);let F=U*(.26+n()*.2);L.scale.set(F*(.9+n()*.45),F*(.75+n()*.4),F),L.rotation.set(n()*_t,n()*_t,n()*_t),L.castShadow=!0,v.add(L)}s.add(v)}return s.scale.setScalar(e),s.userData.themeMaterials={rockMat:c,soilMat:h,grassMat:u,trunkMat:d,leafMats:g},s}var jg=`
attribute vec3 aColor;
attribute float aSize;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (320.0 / max(0.1, -mv.z));
  gl_Position = projectionMatrix * mv;
}`,tx=`
uniform sampler2D uMap;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 tex = texture2D(uMap, gl_PointCoord);
  float alpha = tex.a * vAlpha;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(vColor * tex.rgb, alpha);
}`,Xs=class{constructor(t,{max:e=500,texture:n,blending:s=Be}){this.max=e,this.cursor=0,this.alive=0,this.particles=[],this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e);for(let r=0;r<e;r++)this.particles.push({pos:new E,vel:new E,life:0,maxLife:1,gravity:0,drag:0,size:1,color:new wt(1,1,1)}),this.positions[r*3+1]=-1e4;this.geo=new ce,this.geo.setAttribute("position",new ve(this.positions,3)),this.geo.setAttribute("aColor",new ve(this.colors,3)),this.geo.setAttribute("aSize",new ve(this.sizes,1)),this.geo.setAttribute("aAlpha",new ve(this.alphas,1)),this.material=new Mn({uniforms:{uMap:{value:n}},vertexShader:jg,fragmentShader:tx,transparent:!0,depthWrite:!1,blending:s}),this.points=new ci(this.geo,this.material),this.points.frustumCulled=!1,t.add(this.points)}spawn(t){let{pos:e,count:n=8,colors:s=[16777215],speed:r=3,speedVar:a=2,up:o=1,spread:l=new E(1,1,1),size:c=.55,sizeVar:h=.25,life:u=.6,lifeVar:d=.25,gravity:p=4,drag:g=1.2}=t;for(let x=0;x<n;x++){let m=this.particles[this.cursor];this.cursor=(this.cursor+1)%this.max;let f=new wt(s[Math.floor(Math.random()*s.length)]);f.offsetHSL((Math.random()-.5)*.05,0,(Math.random()-.5)*.15),m.color.copy(f),m.pos.copy(e);let _=Math.random()*Math.PI*2,y=Math.random()*2-1,M=Math.sqrt(Math.max(0,1-y*y));m.vel.set(Math.cos(_)*M,y,Math.sin(_)*M),m.vel.multiplyScalar(r+Math.random()*a),m.vel.x*=l.x,m.vel.z*=l.z,m.vel.y=m.vel.y*l.y+o*(.4+Math.random()*.6),m.life=u+Math.random()*d,m.maxLife=m.life,m.gravity=p,m.drag=g,m.size=c+Math.random()*h}this.alive=this.max}update(t){for(let e=0;e<this.max;e++){let n=this.particles[e],s=e*3;if(n.life<=0){this.alphas[e]=0;continue}if(n.life-=t,n.life<=0){this.alphas[e]=0,this.positions[s+1]=-1e4;continue}n.vel.y-=n.gravity*t,n.vel.multiplyScalar(Math.max(0,1-n.drag*t)),n.pos.addScaledVector(n.vel,t);let r=n.life/n.maxLife;this.positions[s]=n.pos.x,this.positions[s+1]=n.pos.y,this.positions[s+2]=n.pos.z,this.colors[s]=n.color.r,this.colors[s+1]=n.color.g,this.colors[s+2]=n.color.b,this.sizes[e]=n.size*(.6+.4*r),this.alphas[e]=Math.min(1,r*1.8)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}};function ex(){let{canvas:i,ctx:t}=te(64,64);return t.fillStyle="#ffffff",t.beginPath(),t.roundRect(14,14,36,36,8),t.fill(),ee(i)}var pa=class{constructor(t){let e=Ph(96);this.sparks=new Xs(t,{max:520,texture:e,blending:Be}),this.dust=new Xs(t,{max:240,texture:e,blending:kn}),this.confetti=new Xs(t,{max:260,texture:ex(),blending:kn}),this.ringGeo=new na(.86,1,48),this.rings=[],this.scene=t}ring(t,e=16777215,{flat:n=!1,life:s=.42,grow:r=5,opacity:a=.75,scale:o=.6}={}){let l=new pe({color:e,transparent:!0,opacity:a,side:ye,depthWrite:!1,blending:Be}),c=new st(this.ringGeo,l);c.position.copy(t),c.scale.setScalar(o),n?c.rotation.x=-Math.PI/2:c.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),this.scene.add(c),this.rings.push({mesh:c,life:s,maxLife:s,grow:r,opacity:a})}coin(t){this.sparks.spawn({pos:t,count:8,colors:[16769674,16763196,16774872],speed:2.2,speedVar:2.2,up:1.2,size:.5,life:.4,gravity:5,drag:1.6})}gem(t){this.sparks.spawn({pos:t,count:22,colors:[10418431,3331829,16777215,8257487],speed:3,speedVar:3.2,up:1.4,size:.62,life:.65,gravity:4,drag:1.4}),this.ring(t,9369599,{life:.5,grow:6,scale:.5})}hit(t,e){if(this.sparks.spawn({pos:t,count:20,colors:[16765066,16747068,16777215,16763196],speed:4.5,speedVar:4,up:2,size:.6,sizeVar:.4,life:.5,gravity:11,drag:.8}),this.dust.spawn({pos:t,count:7,colors:[14275267,12169893],speed:1.2,speedVar:1.6,up:1.6,size:1,sizeVar:.6,life:.65,gravity:-.6,drag:2}),this.ring(t,16764794,{life:.32,grow:7,scale:.45}),e){let n=t.clone().addScaledVector(e,.3);this.ring(n,16773312,{life:.3,grow:5,scale:.35})}}land(t,e){let n=Math.min(8,2+Math.floor(e*.25));this.dust.spawn({pos:t,count:n,colors:[15262680,13617338,16052454],speed:.8,speedVar:1.6,up:.8,spread:new E(1.5,.5,1.5),size:.65,sizeVar:.5,life:.5,gravity:-.2,drag:2.4})}boost(t){this.sparks.spawn({pos:t,count:14,colors:[10418431,6087167,16777215],speed:3.5,speedVar:3,up:1.6,size:.55,life:.45,gravity:2,drag:1.4}),this.ring(t,8189951,{flat:!0,life:.4,grow:8,scale:.7})}fall(t){this.dust.spawn({pos:t,count:10,colors:[12568536,10135229],speed:2,speedVar:2,up:2.5,size:.9,sizeVar:.6,life:.8,gravity:-1,drag:1.2}),this.ring(t,16738954,{life:.5,grow:9,opacity:.5,scale:.5})}respawn(t){this.ring(t,8189908,{flat:!0,life:.6,grow:10,scale:.4}),this.sparks.spawn({pos:t,count:18,colors:[8189908,16777215,3921663],speed:2.5,speedVar:2.5,up:2.2,size:.55,life:.6,gravity:1.5,drag:1.4})}finish(t){this.confetti.spawn({pos:t.clone().add(new E(0,3,0)),count:80,colors:[16736129,16763196,5231103,8189908,11635967,16777215],speed:4,speedVar:5,up:3.5,spread:new E(1.6,1,1.6),size:.6,sizeVar:.5,life:2.4,lifeVar:1.4,gravity:7,drag:.35}),this.ring(t,16766826,{life:.8,grow:14,opacity:.55,scale:.8}),this.sparks.spawn({pos:t.clone().add(new E(0,1,0)),count:26,colors:[16769674,16777215,16763196],speed:4,speedVar:4,up:3,size:.6,life:.9,gravity:4,drag:.7})}update(t){this.sparks.update(t),this.dust.update(t),this.confetti.update(t);for(let e=this.rings.length-1;e>=0;e--){let n=this.rings[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.material.dispose(),this.rings.splice(e,1);continue}let s=1-n.life/n.maxLife;n.mesh.scale.setScalar(.6+s*n.grow),n.mesh.material.opacity=n.opacity*(1-s)*(1-s)}}};function nx(){let{canvas:i,ctx:t}=te(128,128),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.3,"rgba(255,255,255,0.38)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ee(i)}function ix(){let{canvas:i,ctx:t}=te(128,128),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.55,"rgba(0,0,0,0.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ee(i)}var ma=class{constructor(t,e,n){this.renderer=t,this.theme=e,this.skin=n,this.scene=new ri,this.camera=new we(36,1,.1,400),this.camera.position.set(.6,3.5,13.4),this.look=new E(-1.9,1,0),this.lookSmooth=this.look.clone(),this.time=0,this.pointer=new gt,this.pointerSmooth=new gt,this.orbiters=[],this.rings=[],this.accentMats=[],this.islands=[],this.glowTexture=nx(),ys(t,this.scene,e),this.lights=fa(this.scene),_s(this.lights,e),this.lights.sun.position.set(7,14,9),this.lights.sun.shadow.camera.left=-12,this.lights.sun.shadow.camera.right=12,this.lights.sun.shadow.camera.top=12,this.lights.sun.shadow.camera.bottom=-12,this.build()}build(){let t=this.theme,e=new zt;this.scene.add(e),this.root=e;let n=new zt;n.position.y=-1.55,e.add(n),this.platform=n;let s=new Mt({color:1317939,metalness:.9,roughness:.24,envMapIntensity:1.5}),r=new Mt({color:1845061,metalness:.72,roughness:.3,envMapIntensity:1.2}),a=new st(new Gt(3.3,3.7,.55,72),s);a.position.y=-.2,a.receiveShadow=!0,a.castShadow=!0,n.add(a);let o=new st(new Gt(3.28,3.28,.08,72),r);o.position.y=.12,o.receiveShadow=!0,n.add(o);let l=new st(new rn(3.62,2.6,72,1,!0),s);l.rotation.x=Math.PI,l.position.y=-1.7,n.add(l);let c=new pe({color:t.accent,transparent:!0,opacity:.85});this.accentMats.push(c);let h=new st(new pn(3.3,.035,10,96),c);h.rotation.x=Math.PI/2,h.position.y=.17,n.add(h);let u=new st(new pn(3.3,.03,10,96),c.clone());u.rotation.x=Math.PI/2,u.position.y=-.48,this.accentMats.push(u.material),n.add(u);let d=new pe({color:t.accent,transparent:!0,opacity:.3});this.accentMats.push(d);let p=new st(new pn(2.1,.02,8,80),d);p.rotation.x=Math.PI/2,p.position.y=.175,n.add(p);let g=new st(new jr(2.1,64),new pe({color:16777215,transparent:!0,opacity:.025}));g.rotation.x=-Math.PI/2,g.position.y=.17,n.add(g);let x=ix(),m=new st(new We(5.4,5.4),new pe({map:x,transparent:!0,depthWrite:!1,opacity:.85}));m.rotation.x=-Math.PI/2,m.position.y=.175,n.add(m);let f=new zt;f.position.set(1.85,.06,.2),e.add(f),this.ballGroup=f;let _=new st(new Ne(1.45,72,52),Ui(this.skin));_.castShadow=!0,_.receiveShadow=!1,f.add(_),this.ball=_;let y=new zt;f.add(y);let M=new pn(2.15,.025,8,120),C=[{rot:[1.15,.2,.1],speed:.22,opacity:.5},{rot:[1.35,-.7,.5],speed:-.16,opacity:.3},{rot:[.75,.9,-.3],speed:.11,opacity:.2}];for(let q of C){let N=new pe({color:t.accent,transparent:!0,opacity:q.opacity,depthWrite:!1,blending:Be});this.accentMats.push(N);let V=new st(M,N);V.rotation.set(...q.rot),V.userData.speed=q.speed,y.add(V),this.rings.push(V)}let b=new zt;f.add(b),this.orbit=b;let R=new Mt({color:16766282,metalness:.35,roughness:.35,emissive:10117632,emissiveIntensity:.7});this.coinMat=R;let U=new Gt(.26,.26,.06,20);for(let q=0;q<9;q++){let N=new zt,V=q/9*Math.PI*2,z=3.2,D=new st(U,R);D.rotation.x=Math.PI/2,D.position.set(Math.cos(V)*z,Math.sin(V*2)*.55,Math.sin(V)*z),D.castShadow=!0,N.add(D),b.add(N),this.orbiters.push({mesh:D,phase:V,speed:.25+q%3*.03,baseY:D.position.y})}let v=[11138815,16765684,14077183];for(let q=0;q<3;q++){let N=this.makeDiamond(.34,v[q],t);N.scale.setScalar(.9+q*.05),b.add(N),this.orbiters.push({mesh:N,phase:q/3*Math.PI*2+1.2,speed:-.32,baseY:.9+q*.4,radius:2.9+q*.5,gem:!0,spin:1.35+q*.18})}let w=this.makeDiamond(1.02,12450047,t);w.position.set(-2.65,2.35,-1.65),e.add(w),this.heroDiamond=w,this.heroBaseY=w.position.y;let I=this.glowTexture,G=160,tt=new ce,L=new Float32Array(G*3),F=de(2026);for(let q=0;q<G;q++){let N=F()*Math.PI*2,V=3+F()*13;L[q*3]=Math.cos(N)*V,L[q*3+1]=-1+F()*10,L[q*3+2]=Math.sin(N)*V-2}tt.setAttribute("position",new ve(L,3));let J=new Ci({size:.16,map:I,color:t.accent,transparent:!0,opacity:.6,depthWrite:!1,blending:Be,sizeAttenuation:!0});this.motes=new ci(tt,J),this.motes.frustumCulled=!1,e.add(this.motes),this.buildBackdrop();let nt=new Ii(t.sunLight,40,30,2);nt.position.set(4,8,6),e.add(nt);let j=new Ii(t.accent,22,26,2);j.position.set(-6,1,-5),e.add(j),this.ballBaseY=this.ballGroup.position.y}makeDiamond(t,e,n){let s=new zt,r=new ia({color:new wt(e),metalness:.02,roughness:.04,transmission:.82,thickness:t*1.35,ior:2.32,clearcoat:1,clearcoatRoughness:.03,iridescence:.75,iridescenceIOR:1.8,envMapIntensity:2.1,transparent:!0,opacity:.96,flatShading:!0,side:An}),a=new st(new Gt(t*.46,t*.9,t*.52,8,1),r);a.position.y=t*.27,a.castShadow=!0,s.add(a);let o=new st(new rn(t*.9,t*1.55,8,1),r);o.rotation.z=Math.PI,o.position.y=-t*.76,o.castShadow=!0,s.add(o);let l=new st(new Gt(t*.43,t*.43,t*.035,8,1),new pe({color:16777215,transparent:!0,opacity:.48,depthWrite:!1}));l.position.y=t*.535,s.add(l);let c=new st(new hi(t*.3,0),new pe({color:e,transparent:!0,opacity:.72,depthWrite:!1,blending:Be}));c.position.y=-t*.18,s.add(c);let h=new oi(new ai({map:this.glowTexture,color:e,transparent:!0,opacity:.55,depthWrite:!1,blending:Be}));h.scale.set(t*5.2,t*5.2,1),h.position.y=-t*.1,s.add(h);for(let u=0;u<3;u++){let d=new oi(new ai({map:this.glowTexture,color:16777215,transparent:!0,opacity:.8,depthWrite:!1,blending:Be})),p=u/3*Math.PI*2;d.position.set(Math.cos(p)*t*1.1,t*(.4+u*.26),Math.sin(p)*t*.7);let g=t*(.22+u*.05);d.scale.set(g,g,1),s.add(d)}return s.userData.core=c,s}buildBackdrop(){let t=this.theme,e=new zt;this.scene.add(e),this.backdrop=e,this.islands=[];let n=[{seed:101,x:46,y:-20,z:-82,scale:5.6,rot:.4},{seed:207,x:-34,y:-10,z:-72,scale:6.2,rot:1.5},{seed:311,x:26,y:-4,z:-100,scale:7,rot:2.1},{seed:419,x:-80,y:-18,z:-88,scale:5.4,rot:3.3}];for(let r of n){let a=Xh(t,r.seed,r.scale);a.position.set(r.x,r.y,r.z),a.rotation.y=r.rot,e.add(a),this.islands.push({group:a,baseY:r.y,phase:r.seed%17*.37})}let s=Wh(t,{count:12,seed:811,center:new E(0,10,-78),spread:new E(170,34,48),size:8.5,opacity:.46});this.scene.add(s),this.clouds=s}setTheme(t,e){if(t.id!==this.theme.id){this.theme=t,ys(e||this.renderer,this.scene,t),_s(this.lights,t);for(let n of this.accentMats)n.color&&typeof n.color.set=="function"&&n.color.set(t.accent);this.backdrop&&(this.scene.remove(this.backdrop),gs(this.backdrop),this.backdrop=null),this.clouds&&(this.scene.remove(this.clouds),gs(this.clouds),this.clouds=null),this.buildBackdrop(),this.motes.material.color.set(t.accent),this.motes.material.needsUpdate=!0}}setSkin(t){if(t.id===this.skin.id)return;this.skin=t;let e=this.ball.material;this.ball.material=Ui(t),e.dispose()}resize(t,e){let n=t/e;this.camera.aspect=n;let s=n<.95,r=Tt(n,.55,2.6);this.camera.position.set(s?0:.6,s?3.3:3.5,s?15:13.4),this.look.set(s?0:-1.9,s?1.15:1,0),this.ballGroup.position.set(s?0:1.85,s?.1:.06,s?-.4:.2),this.ballBaseY=this.ballGroup.position.y,this.baseCam=this.camera.position.clone(),this.camera.fov=s?38:36-(r-1)*1.2,this.camera.updateProjectionMatrix(),this.portrait=s,this.backdrop.visible=!s,this.clouds.visible=!s,this.heroDiamond&&(this.heroDiamond.visible=!s),this.orbit.scale.setScalar(s?.9:1)}update(t,e=0,n=0){this.time+=t;let s=this.time;this.pointerSmooth.x=tn(this.pointerSmooth.x,e,3,t),this.pointerSmooth.y=tn(this.pointerSmooth.y,n,3,t),this.ball.rotation.y+=t*.35,this.ball.rotation.x=Math.sin(s*.4)*.08,this.ballGroup.position.y=this.ballBaseY+Math.sin(s*1.1)*.12,this.ballGroup.rotation.z=Math.sin(s*.7)*.03,this.ballGroup.rotation.x=Math.sin(s*.5+1)*.025;for(let o of this.rings)o.rotation.z+=t*o.userData.speed,o.rotation.x+=t*o.userData.speed*.4;for(let o of this.orbiters)o.gem?(o.phase+=t*o.speed,o.mesh.position.set(Math.cos(o.phase)*o.radius,o.baseY+Math.sin(s*1.3+o.phase)*.3,Math.sin(o.phase)*o.radius),o.mesh.rotation.y+=t*o.spin,o.mesh.rotation.x=Math.sin(s*.8+o.phase)*.22,o.mesh.userData.core&&(o.mesh.userData.core.material.opacity=.58+Math.sin(s*2.6+o.phase)*.2)):(o.mesh.rotation.z+=t*2.1,o.mesh.position.y=o.baseY+Math.sin(s*1.2+o.phase)*.22);this.orbit.rotation.y+=t*.16,this.platform.rotation.y=Math.sin(s*.1)*.03,this.motes.rotation.y+=t*.012,this.heroDiamond&&(this.heroDiamond.rotation.y+=t*.5,this.heroDiamond.position.y=this.heroBaseY+Math.sin(s*.9+.5)*.14),this.clouds&&(this.clouds.userData.update&&this.clouds.userData.update(s,t),this.clouds.rotation.y=Math.sin(s*.02)*.05);for(let o of this.islands)o.group.position.y=o.baseY+Math.sin(s*.35+o.phase)*.35,o.group.rotation.y+=t*.004;let r=this.pointerSmooth.x*(this.portrait?.35:.9),a=this.pointerSmooth.y*(this.portrait?.25:.45);this.camera.position.x=tn(this.camera.position.x,this.baseCam.x+r,2.4,t),this.camera.position.y=tn(this.camera.position.y,this.baseCam.y+a,2.4,t),this.lookSmooth.x=tn(this.lookSmooth.x,this.look.x+r*.3,2,t),this.lookSmooth.y=tn(this.lookSmooth.y,this.look.y+a*.3,2,t),this.camera.lookAt(this.lookSmooth)}render(){this.renderer.render(this.scene,this.camera)}};var Xe=.68,Yh=30,sx=42,Ys=1/120,rx=650;function $h(){return{v:1,coins:0,totalCoins:0,skins:["chrome"],ball:"chrome",levels:{},currentLevel:0,settings:{music:.65,sfx:.85,haptics:!0},tutorialSeen:!1}}function ax(i){let t=$h(),e=null;try{e=typeof i=="string"&&i.length?JSON.parse(i):null}catch{e=null}if(!e||typeof e!="object")return t;let n={...t,...e,settings:{...t.settings,...e.settings||{}},levels:{}};n.coins=Number.isFinite(e.coins)?Tt(Math.round(e.coins),0,1e9):0,n.totalCoins=Number.isFinite(e.totalCoins)?Tt(Math.round(e.totalCoins),0,1e9):n.coins,n.currentLevel=Tt(Number(e.currentLevel)||0,0,Oe-1),n.tutorialSeen=!!e.tutorialSeen;let s=new Set(["chrome"]);if(Array.isArray(e.skins))for(let a of e.skins)bn.some(o=>o.id===a)&&s.add(a);let r=bn.some(a=>a.id===e.ball)?e.ball:"chrome";if(s.add(r),n.skins=Array.from(s),n.ball=r,n.settings.music=Tt(Number(n.settings.music)||0,0,1),n.settings.sfx=Tt(Number(n.settings.sfx)||0,0,1),n.settings.haptics=!!n.settings.haptics,e.levels&&typeof e.levels=="object")for(let a of qe){let o=e.levels[a.number];if(!o||typeof o!="object")continue;let l=Tt(Math.round(Number(o.stars)||0),0,3),c=Number.isFinite(o.best)?Math.max(0,o.best):0;(l>0||c>0)&&(n.levels[a.number]={stars:l,best:c})}return n}function ox(){let{canvas:i,ctx:t}=te(96,96),e=t.createRadialGradient(48,48,2,48,48,46);return e.addColorStop(0,"rgba(0,0,0,0.52)"),e.addColorStop(.55,"rgba(0,0,0,0.2)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,96,96),ee(i)}var ga=class{constructor(){this.canvas=document.getElementById("c"),this.state=$h(),this.mode="menu",this.currentIndex=0,this.audio=new ha,this.ui=new ca(this),this.isDebug=!1;try{this.isDebug=new URLSearchParams(location.search).has("debug")}catch{this.isDebug=!1}this.pointerSteer=0,this.keyboardSteer=0,this.holding=!1,this.keys=new Set,this.pointer={active:!1,id:null,startX:0,startY:0},this.showPointer={x:0,y:0},this.accumulator=0,this.visualTime=0,this.shake=0,this.steer=0,this.speed=0,this.lat=0,this.latVel=0,this.yOff=Xe,this.vy=0,this.grounded=!0,this.falling=!1,this.rescues=0,this.rescueCooldown=0,this.dist=0,this.prevDist=0,this.levelTime=0,this.falls=0,this.collected=0,this.sessionCombo=0,this.lastCoinAt=-10,this.checkpointDist=0,this.respawnDist=0,this.invuln=0,this.boostTimer=0,this.boostZoneCooldown=0,this.finished=!1,this.completeTime=0,this.completeShown=!1,this.finishCenter=new E,this.finishDir=new E(0,0,1),this.camPosSmooth=new E,this.camLookSmooth=new E,this.frame=null,this.ballPos=new E,this.track=null,this.decor=null,this.sheet=null,this.settingsOpen=!1,this.saveTimer=null,this.ok=!1,this.hostPaused=!1,this.raf=0,this.last=0,this.elapsed=0;try{this.renderer=new Ri({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=ge,this.renderer.toneMapping=Di,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$o,this.ok=!0}catch(t){console.error("WebGL unavailable",t),this.renderer=null;return}this.scene=new ri,this.camera=new we(62,1,.1,700),this.camera.position.set(0,8,-14),this.baseFov=62,this.lights=fa(this.scene),this.lights.sun.castShadow=!0,this.lights.sun.shadow.mapSize.set(1024,1024),this.lights.sun.shadow.camera.left=-18,this.lights.sun.shadow.camera.right=18,this.lights.sun.shadow.camera.top=18,this.lights.sun.shadow.camera.bottom=-18,this.lights.sun.shadow.camera.far=70,this.lights.sun.shadow.bias=-6e-4,this.lights.sun.shadow.normalBias=.03,this.ball=new st(new Ne(Xe,48,32),Ui(Ws(this.state.ball))),this.ballSkinId=this.state.ball,this.ball.castShadow=!0,this.ball.receiveShadow=!1,this.ball.position.set(0,12,0),this.ball.visible=!1,this.scene.add(this.ball),this.blob=new st(new We(2.1,2.1),new pe({map:ox(),transparent:!0,opacity:.55,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.visible=!1,this.scene.add(this.blob),this.fx=new pa(this.scene),this.showcase=null,this.skinThumbs=null,this.skinSprites=null,this.skinFrames=18,this.loop=this.loop.bind(this),this.bindInput(),this.bindResize(),window.__ORB=window.__ORB||{},window.__ORB.game=this,window.__ORB.getDebug=()=>this.getDebug()}bindResize(){let t=()=>this.resize();window.addEventListener("resize",t),window.visualViewport&&window.visualViewport.addEventListener("resize",t),this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),ke.logError(new Error("WebGL context lost")),this.ui.toast("Graphics were reset. Return to the menu to continue.","pink",4e3)},!1)}bindInput(){let t=this.canvas;t.addEventListener("pointerdown",s=>{if(this.mode==="playing"){this.audio.unlock(),this.audio.setYouTubeAudio(ke.getAudioEnabled()),this.pointer.active=!0,this.pointer.id=s.pointerId,this.pointer.startX=s.clientX,this.pointer.startY=s.clientY,this.holding=!0,this.pointerSteer=0,this.ui.hideHint();try{t.setPointerCapture(s.pointerId)}catch{}s.cancelable&&s.preventDefault()}}),t.addEventListener("pointermove",s=>{if(!this.pointer.active||s.pointerId!==this.pointer.id)return;let r=s.clientX-this.pointer.startX,a=Math.min(170,Math.max(90,window.innerWidth*.16));this.pointerSteer=Tt(r/a,-1,1),Math.abs(r)>8&&(this.holding=!0),s.cancelable&&s.preventDefault()});let e=s=>{s.pointerId===this.pointer.id&&(this.pointer.active=!1,this.pointer.id=null,this.pointerSteer=0,[...this.keys].some(r=>r==="Space"||r==="ArrowUp"||r==="KeyW")||(this.holding=!1))};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("lostpointercapture",e),window.addEventListener("pointermove",s=>{s.pointerType&&s.pointerType!=="mouse"&&this.mode!=="menu"||(this.showPointer.x=(s.clientX/window.innerWidth-.5)*2,this.showPointer.y=(s.clientY/window.innerHeight-.5)*2)}),window.addEventListener("keydown",s=>{let r=s.target&&s.target.tagName||"";if(r==="INPUT"||r==="TEXTAREA"||s.key==="Escape")return;["ArrowLeft","ArrowRight","KeyA","KeyD","Space","ArrowUp","KeyW"].includes(s.code)&&(this.keys.add(s.code),this.mode==="playing"&&s.cancelable&&s.preventDefault(),this.audio.unlock(),this.audio.setYouTubeAudio(ke.getAudioEnabled()))}),window.addEventListener("keyup",s=>{this.keys.delete(s.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.pointer.active=!1,this.pointerSteer=0,this.holding=!1,this.keyboardSteer=0});let n=()=>{this.audio.unlock(),this.audio.setYouTubeAudio(ke.getAudioEnabled())};window.addEventListener("pointerdown",n,{once:!0,passive:!0}),window.addEventListener("keydown",n,{once:!0,passive:!0})}async init(){if(!this.ok){this.ui.showUnsupported();return}this.resize(),this.ui.setPauseAvailable(!1),ke.init({onPause:()=>this.onHostPause(),onResume:()=>this.onHostResume(),onAudioEnabledChange:s=>{this.audio.setYouTubeAudio(s),s&&!this.hostPaused&&this.mode!=="paused"&&this.audio.resume()}});let t=await ke.load();this.state=ax(t),this.audio.setMusicVolume(this.state.settings.music),this.audio.setSfxVolume(this.state.settings.sfx),this.ui.syncSettings(),this.ui.updateCoins(this.state.coins);let e=xs(this.continueIndex());ys(this.renderer,this.scene,e),_s(this.lights,e),this.showcase=new ma(this.renderer,e,Ws(this.state.ball)),this.showcase.resize(window.innerWidth,window.innerHeight),this.mode="menu",this.ui.refreshMenu(),this.ui.splashStatus("Ready to roll!"),this.showcase.update(0,0,0),this.showcase.render(),ke.firstFrameReady(),this.startLoop(),this.sendScoreIfNeeded(),setTimeout(()=>{this.ui.hideSplash(),ke.gameReady()},750);let n=()=>{try{let s=ml(this.renderer,this.showcase.theme).env,r=Dh(s);this.skinThumbs=r.thumbs,this.skinSprites=r.sprites,this.skinFrames=r.frames,this.sheet==="shop"&&this.ui.renderShop()}catch(s){console.warn("Skin thumbnails failed",s)}};setTimeout(()=>{typeof window.requestIdleCallback=="function"?window.requestIdleCallback(n,{timeout:2400}):setTimeout(n,350)},1500),this.isDebug&&(window.__ORB.debug={startLevel:s=>this.startLevel(s),finishNow:()=>{this.track&&(this.dist=this.track.finishDist-.25,this.stepPhysics(Ys),this.stepPhysics(Ys))},fallNow:()=>this.startFall(),setCoins:s=>{this.state.coins=s,this.ui.updateCoins(s)},state:()=>JSON.parse(JSON.stringify(this.state)),info:()=>this.getDebug(),menu:()=>this.quitToMenu(),openShop:()=>this.openShop()}),window.__ORB.ready=!0}startLoop(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(this.loop))}stopLoop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}loop(t){this.raf=requestAnimationFrame(this.loop);try{let e=Tt((t-this.last)/1e3,0,.05);if(this.last=t,this.visualTime+=e,this.mode==="menu"){this.showcase&&(this.showcase.update(e,this.showPointer.x,this.showPointer.y),this.showcase.render());return}this.updateGame(e),this.renderer.render(this.scene,this.camera)}catch(e){console.error(e),ke.logError(e),this.stopLoop()}}updateGame(t){var e;if(this.elapsed+=t,this.mode==="playing"){this.keyboardSteer=(this.keys.has("ArrowRight")||this.keys.has("KeyD")?1:0)-(this.keys.has("ArrowLeft")||this.keys.has("KeyA")?1:0);let n=this.keys.has("Space")||this.keys.has("ArrowUp")||this.keys.has("KeyW");this.steer=Tt(this.pointerSteer+this.keyboardSteer,-1,1),this.holding=this.pointer.active||n,this.accumulator=Math.min(this.accumulator+t,.12);let s=0;for(;this.accumulator>=Ys&&s<12;)this.stepPhysics(Ys),this.accumulator-=Ys,s++}else(this.mode==="complete"||this.mode==="final")&&this.updateComplete(t);this.track&&this.mode!=="paused"&&this.track.update(this.visualTime,t),(e=this.decor)!=null&&e.userData.update&&this.decor.userData.update(this.visualTime,t),this.fx.update(t),this.updateBallVisual(t),this.updateCamera(t),this.updateHudProgress(),this.track?(this.audio.updateRoll(this.speed,this.mode==="playing"&&!this.falling,this.grounded),this.updateSun()):this.audio.stopRoll()}stepPhysics(t){if(!this.track||this.finished)return;this.levelTime+=t,this.invuln=Math.max(0,this.invuln-t),this.boostTimer=Math.max(0,this.boostTimer-t),this.boostZoneCooldown=Math.max(0,this.boostZoneCooldown-t),this.rescueCooldown=Math.max(0,this.rescueCooldown-t);let e=this.track.halfWidth;if(this.falling){this.vy-=sx*t,this.yOff+=this.vy*t,this.lat+=this.latVel*t,this.dist+=this.speed*t*.3,this.speed=tn(this.speed,0,5.5,t),this.respawnTimer-=t,this.updateBallPos(),this.respawnTimer<=0&&this.respawn(),this.prevDist=this.dist;return}let n=-this.steer*Math.max(.9,e-.75),s=this.grounded?1:.55,r=(n-this.lat)*7.5*s;if(this.latVel=Tt(tn(this.latVel,r,this.grounded?14:4.5,t),-13,13),this.grounded){let c=this.boostTimer>0?19.5:this.holding?13.4:8.4,h=this.track.frameAt(Math.min(this.track.finishDist,this.dist+2.2)),u=Tt((h.p.y-this.frame.p.y)/2.2,-1.1,1.1),d=Tt(-u*7.2,-3.8,4.6),p=Tt(c+d,6.2,22.5);this.speed=tn(this.speed,p,this.boostTimer>0?3.6:1.9,t),this.speed<4&&(this.speed=Math.min(4,this.speed+t*7))}if(this.prevDist=this.dist,this.dist+=this.speed*t,this.lat+=this.latVel*t,this.grounded){let c=this.track.gaps.find(h=>this.prevDist<h.rampStart+.05&&this.dist>=h.rampStart+.05);if(c){let h=Math.min(this.track.finishDist-1,c.end+.9),u=Math.max(2,h-this.dist),d=Math.max(this.speed,11.8),p=u/d,g=this.track.frameAt(h).p.y-this.frame.p.y;this.speed=d,this.grounded=!1,this.vy=Tt((.5*Yh*p*p+g)/p,4.8,16.5),this.yOff=Xe+.03,this.audio.sfx("bounce"),this.fx.boost(this.ballPos)}else{let h=this.track.frameAt(Math.min(this.track.finishDist,this.dist+1.8)),u=this.frame.t.y,d=u-h.t.y;u>-.18&&d>.34&&this.speed>8.5&&(this.grounded=!1,this.vy=Tt(this.speed*d*.9,2.2,7.4),this.yOff=Xe+.02)}}this.grounded?this.yOff=Xe:(this.vy-=Yh*t,this.yOff+=this.vy*t);let o=!this.track.isGapAt(this.dist)&&Math.abs(this.lat)<=e+.12;if(this.grounded)this.track.isRailAt(this.dist)&&Math.abs(this.lat)>e-.58&&(this.lat=Math.sign(this.lat)*(e-.58),Math.abs(this.latVel)>3.5&&(this.audio.sfx("bounce"),this.fx.land(this.ballPos,4)),this.latVel*=-.22),o||this.startFall();else if(o&&this.yOff<=Xe&&this.vy<=0)if(this.yOff>Xe-.55){let c=-this.vy;this.yOff=Xe,this.vy=0,this.grounded=!0,this.updateBallPos(),this.fx.land(this.ballPos,c),c>6&&(this.audio.sfx("land"),this.shake=Math.max(this.shake,Math.min(.22,c*.012)),Rn(12,this.state.settings.haptics))}else this.startFall();else this.yOff<-1.8&&this.startFall();if(Math.abs(this.lat)>e+2.5&&!this.falling&&this.startFall(),this.updateBallPos(),this.falling){this.prevDist=this.dist;return}for(let c of this.track.boostZones)if(this.grounded&&this.boostZoneCooldown<=0&&this.prevDist<c.from&&this.dist>=c.from){this.boostTimer=1.15,this.boostZoneCooldown=1.7,this.speed+=4.2,this.audio.sfx("boost"),this.ui.flash("boost"),this.fx.boost(this.ballPos),Rn(18,this.state.settings.haptics);break}let l=this.track.collect(this.ballPos,.72);if(l>0){this.collected+=l,this.state.coins+=l,this.state.totalCoins+=l;let c=this.levelTime;c-this.lastCoinAt<2?this.sessionCombo+=1:this.sessionCombo=1,this.lastCoinAt=c,this.ui.updateCoins(this.state.coins,{pop:!0}),this.ui.setCombo(this.sessionCombo),l>=10?(this.audio.sfx("gem"),this.fx.gem(this.ballPos),Rn(14,this.state.settings.haptics)):(this.audio.sfx("coin",{combo:this.sessionCombo}),this.fx.coin(this.ballPos))}else this.sessionCombo>1&&this.levelTime-this.lastCoinAt>2.3&&(this.sessionCombo=0,this.ui.setCombo(0));if(this.invuln<=0)for(let c of this.track.obstacles){let h=c.collide(this.ballPos,Xe);if(h){this.onObstacleHit(h);break}}for(let c of this.track.checkpointDists)this.prevDist<c&&this.dist>=c&&Math.abs(this.lat)<=e&&c>this.checkpointDist+1&&(this.checkpointDist=c,this.respawnDist=c,this.ui.toast("Checkpoint!","green"),this.audio.sfx("checkpoint"),this.fx.respawn(this.ballPos),Rn(20,this.state.settings.haptics),this.saveSoon());this.dist>=this.track.finishDist&&this.finishLevel(),this.prevDist=this.dist}onObstacleHit(t){this.invuln=.95,this.shake=Math.max(this.shake,.55),this.yOff=Math.max(Xe,this.yOff+Math.max(0,t.push.y));let e=this.track.frameAt(this.dist);this.lat+=t.push.dot(e.n),this.latVel+=t.normal.dot(e.n)*4.6,this.vy=Math.max(this.vy,3.1),this.grounded=!1,this.speed=Math.max(4,this.speed-4.6),this.audio.sfx("hit"),this.ui.flash("hit"),this.fx.hit(this.ballPos,t.normal),Rn(60,this.state.settings.haptics)}tryRescue(){if(!this.track||this.rescueCooldown>0)return!1;let t=Math.min(this.track.finishDist-2,this.dist+24),e=null;for(let n=Math.max(this.dist+1.6,3);n<=t;n+=.7)if(!this.track.isGapAt(n)&&!this.track.isGapAt(Math.min(this.track.finishDist-2,n+3))){e=n;break}return e===null?!1:(this.rescues+=1,this.rescueCooldown=1.45,this.falling=!1,this.grounded=!1,this.dist=e,this.prevDist=e,this.lat=0,this.latVel=0,this.speed=Math.max(this.speed,9.6),this.vy=1.2,this.yOff=Xe+2.15,this.invuln=Math.max(this.invuln,1.15),this.updateBallPos(),this.snapCamera(),this.audio.sfx("boost"),this.ui.flash("boost"),this.ui.toast("Jumped to next ramp","green",1200),this.fx.boost(this.ballPos),this.shake=.18,!0)}startFall(){this.falling||this.finished||this.tryRescue()||(this.falling=!0,this.falls+=1,this.respawnTimer=1.32,this.grounded=!1,this.vy=Math.min(this.vy,-2.4),this.speed=Math.max(1.5,this.speed*.42),this.latVel*=.7,this.sessionCombo=0,this.ui.setCombo(0),this.audio.sfx("fall"),this.audio.stopRoll(),this.ui.flash("fall"),this.fx.fall(this.ballPos),this.shake=.45,Rn([40,60,40],this.state.settings.haptics))}respawn(){this.falling=!1,this.grounded=!0,this.vy=0,this.yOff=Xe,this.lat=0,this.latVel=0,this.dist=Tt(this.respawnDist+.8,4,this.track.finishDist-2),this.prevDist=this.dist,this.speed=6.5,this.invuln=1.25,this.boostTimer=0,this.steer=0,this.updateBallPos(),this.fx.respawn(this.ballPos),this.audio.sfx("respawn"),this.ui.toast("Back to checkpoint","green",1300),this.snapCamera()}updateBallPos(){this.track&&(this.frame=this.track.frameAt(this.dist),this.ballPos.copy(this.frame.p).addScaledVector(this.frame.n,this.lat),this.ballPos.y+=this.yOff)}updateBallVisual(t){if(!this.track)return;if(this.updateBallPos(),this.ball.visible=!0,this.ball.position.copy(this.ballPos),this.falling){let r=t*Tt(4+Math.abs(this.vy)*.55,4,14);this.ball.rotateOnWorldAxis(this.frame.t,r),this.ball.rotateOnWorldAxis(this.frame.n,r*.45)}else{let r=this.speed*t,a=this.latVel*t;r&&this.ball.rotateOnWorldAxis(this.frame.n,r/Xe),a&&this.ball.rotateOnWorldAxis(this.frame.t,-a/Xe)}this.blob.visible=!0,this.blob.position.copy(this.frame.p).addScaledVector(this.frame.n,this.lat),this.blob.position.y+=.03;let e=Math.max(0,this.yOff-Xe),n=1+e*.22;this.blob.scale.setScalar(n),this.blob.material.opacity=Tt(.55-e*.1,.12,.55);let s=new Yt().makeBasis(this.frame.n,new E(0,1,0),this.frame.t);this.blob.quaternion.setFromRotationMatrix(s)}updateCamera(t){if(!this.track)return;if(this.shake=tn(this.shake,0,5,t),this.mode==="complete"||this.mode==="final"){let c=this.finishCenter,h=this.finishDir,u=new E(-h.z,0,h.x),d=c.clone().addScaledVector(h,-5.2).addScaledVector(u,Math.sin(.4+this.completeTime*.35)*1.6).addScaledVector(new E(0,1,0),3.6+Math.sin(this.completeTime*.8)*.2);this.camPosSmooth.lerp(d,1-Math.exp(-2.2*t)),this.camLookSmooth.lerp(c.clone().add(new E(0,1.15,0)),1-Math.exp(-3.2*t)),this.camera.position.copy(this.camPosSmooth),this.shake>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake),this.camera.lookAt(this.camLookSmooth);return}let e=this.frame||this.track.frameAt(this.dist),n=e.p,s=this.lat>0?-1:1,r=this.falling?n.clone().addScaledVector(e.t,-5.2).addScaledVector(new E(0,1,0),5.1).addScaledVector(e.n,this.lat*.1+s*7.2):this.ballPos.clone().addScaledVector(e.t,-(5.8+this.speed*.05)).addScaledVector(new E(0,1,0),2.7).addScaledVector(e.n,this.lat*.14),a=this.falling?this.ballPos.clone().addScaledVector(e.t,.8).addScaledVector(new E(0,1,0),.6):this.ballPos.clone().addScaledVector(e.t,3+this.speed*.14).addScaledVector(new E(0,1,0),.45);this.camPosSmooth.lerp(r,1-Math.exp(-(this.falling?3.2:4.4)*t)),this.camLookSmooth.lerp(a,1-Math.exp(-(this.falling?4.2:6)*t)),this.camera.position.copy(this.camPosSmooth),this.shake>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake),this.camera.lookAt(this.camLookSmooth);let o=this.baseFov+(this.boostTimer>0?6:0)+(this.falling?8:0)+Tt(this.speed-10,0,10)*.25,l=tn(this.camera.fov,o,3,t);Math.abs(l-this.camera.fov)>.01&&(this.camera.fov=l,this.camera.updateProjectionMatrix())}snapCamera(){if(!this.track)return;let t=this.frame||this.track.frameAt(this.dist);this.camPosSmooth.copy(this.ballPos).addScaledVector(t.t,-7.2).addScaledVector(new E(0,1,0),3.3),this.camLookSmooth.copy(this.ballPos).addScaledVector(t.t,4).addScaledVector(new E(0,1,0),.55),this.camera.position.copy(this.camPosSmooth),this.camera.lookAt(this.camLookSmooth)}updateSun(){this.track&&(this.lights.sun.position.set(this.ballPos.x+13,this.ballPos.y+21,this.ballPos.z+9),this.lights.sun.target.position.copy(this.ballPos),this.lights.sun.target.updateMatrixWorld())}updateHudProgress(){if(!this.track||this.mode==="menu")return;let t=Tt(this.dist/this.track.finishDist,0,1);this.ui.updateProgress(t)}updateComplete(t){this.completeTime+=t,this.completeTime<1.05&&(this.dist+=this.speed*t*(1-this.completeTime/1.05),this.speed=tn(this.speed,0,2.6,t),this.updateBallPos()),!this.completeShown&&this.completeTime>=1.15&&(this.completeShown=!0,this.ui.showComplete(this.completeResult))}finishLevel(){if(this.finished||!this.track)return;this.finished=!0,this.mode="complete",this.completeTime=0,this.completeShown=!1,this.ui.setPauseAvailable(!1),this.ui.hideHint(),this.ui.setCombo(0);let t=this.track.def,e=this.track.coinTotal>0?this.collected/this.track.coinTotal:1,n=1+(e>=.7?1:0)+(this.falls===0?1:0),s=String(t.number),r=this.state.levels[s]||{stars:0,best:0},a=r.best>0?Math.min(r.best,this.levelTime):this.levelTime;this.state.levels[s]={stars:Math.max(r.stars||0,n),best:a},this.currentIndex<Oe-1?this.state.currentLevel=Math.min(Oe-1,Math.max(this.state.currentLevel,this.currentIndex+1)):this.state.currentLevel=Oe-1,this.finishCenter.copy(this.ballPos),this.finishDir.copy(this.frame?this.frame.t:new E(0,0,1)),this.finishDir.y=0,this.finishDir.lengthSq()<1e-4&&this.finishDir.set(0,0,1),this.finishDir.normalize(),this.completeResult={number:t.number,name:t.name,stars:n,collected:this.collected,time:this.levelTime,falls:this.falls,coinGoal:e>=.7,noFalls:this.falls===0,isFinale:this.currentIndex===Oe-1,hasNext:this.currentIndex<Oe-1},this.saveNow();let o=this.totalStars();o>0&&ke.sendScore(o),this.audio.sfx("win"),this.audio.setIntensity(.85),this.audio.stopRoll(),this.ui.updateCoins(this.state.coins),this.fx.finish(this.finishCenter.clone().add(new E(0,1.2,0))),this.shake=.25,this.camPosSmooth.copy(this.camera.position),this.camLookSmooth.copy(this.finishCenter)}getDebug(){return{mode:this.mode,level:this.track?this.track.def.number:null,levelIndex:this.currentIndex,dist:this.dist,length:this.track?this.track.length:0,finishDist:this.track?this.track.finishDist:0,lat:this.lat,speed:this.speed,grounded:this.grounded,falling:this.falling,stars:this.totalStars(),coins:this.state.coins,collected:this.collected,coinTotal:this.track?this.track.coinTotal:0,falls:this.falls,rescues:this.rescues,obstacles:this.track?this.track.obstacles.length:0,checkpoints:this.track?this.track.checkpointDists.length:0,gaps:this.track?this.track.gaps.length:0,mode2:this.mode}}totalStars(){return qe.reduce((t,e)=>{var n;return t+(((n=this.state.levels[e.number])==null?void 0:n.stars)||0)},0)}continueIndex(){var n,s,r;let t=Oe-1;for(let a=0;a<Oe;a++)if(!((((n=this.state.levels[qe[a].number])==null?void 0:n.stars)||0)>0)){t=a;break}let e=Tt(this.state.currentLevel|0,0,Oe-1);return e>t&&!((((s=this.state.levels[qe[e].number])==null?void 0:s.stars)||0)>0)&&(t=e),((r=this.state.levels[qe[t].number])==null?void 0:r.stars)>0&&(t=Oe-1),t}isLevelUnlocked(t){var e;return t<=0?!0:(((e=this.state.levels[qe[t-1].number])==null?void 0:e.stars)||0)>0}sendScoreIfNeeded(){let t=this.totalStars();t>0&&ke.sendScore(t)}resize(){if(!this.ok)return;let t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),n=Math.min(window.devicePixelRatio||1,(ms(),2));this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.baseFov=t/e<.85?70:t/e>2.2?56:62,this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix(),this.showcase&&this.showcase.resize(t,e)}onPlay(){this.startLevel(this.continueIndex())}startLevel(t){var a;if(!this.ok)return;let e=Tt(t|0,0,Oe-1);this.audio.unlock(),this.audio.setYouTubeAudio(ke.getAudioEnabled()),this.audio.resume(),this.ui.hideModals(),this.ui.hideHint(),this.sheet=null,this.settingsOpen=!1,this.currentIndex=e,this.state.currentLevel=e;let n=qe[e];this.disposeTrack();let s=xs(e);ys(this.renderer,this.scene,s),_s(this.lights,s),this.track=Bh(n,s),this.track.number=n.number,this.scene.add(this.track.group),this.decor=qh(this.track,s),this.scene.add(this.decor);let r=Ws(this.state.ball);this.ballSkinId!==r.id&&(this.ball.material.dispose(),this.ball.material=Ui(r),this.ballSkinId=r.id),this.ball.visible=!0,this.ball.rotation.set(0,0,0),this.blob.visible=!0,this.dist=4,this.prevDist=this.dist,this.lat=0,this.latVel=0,this.speed=6.5,this.yOff=Xe,this.vy=0,this.grounded=!0,this.falling=!1,this.finished=!1,this.levelTime=0,this.falls=0,this.rescues=0,this.rescueCooldown=0,this.collected=0,this.sessionCombo=0,this.lastCoinAt=-10,this.checkpointDist=4,this.respawnDist=4,this.invuln=.9,this.boostTimer=0,this.boostZoneCooldown=0,this.completeTime=0,this.completeShown=!1,this.accumulator=0,this.shake=0,this.visualTime=0,this.updateBallPos(),this.snapCamera(),(a=this.decor)!=null&&a.userData.update&&this.decor.userData.update(0,0),this.ui.showArena(s,n,e),this.ui.showGame(),this.ui.setLevel(n.number,n.name),this.ui.updateCoins(this.state.coins),this.ui.updateProgress(0),this.ui.setCombo(0),this.ui.setPauseAvailable(!0),this.audio.setIntensity(.45),this.mode="playing",this.state.tutorialSeen?n.number<=2&&this.ui.showHint():(this.ui.showHint(),this.state.tutorialSeen=!0),this.saveSoon(),this.sendScoreIfNeeded()}disposeTrack(){this.track&&(gs(this.track.group),this.track=null),this.decor&&(gs(this.decor),this.decor=null),this.ball.visible=!1,this.blob.visible=!1}enterMenu(){this.mode="menu",this.sheet=null,this.finished=!1,this.ui.setPauseAvailable(!1),this.ui.hideGameHud(),this.ui.hideModals(),this.disposeTrack(),this.audio.resume(),this.audio.setIntensity(.32),this.audio.stopRoll(),this.setMenuTheme(),this.ui.showMenu(),this.ui.refreshMenu()}setMenuTheme(){if(!this.showcase)return;let t=xs(this.continueIndex());this.showcase.theme.id!==t.id&&this.showcase.setTheme(t,this.renderer),this.showcase.setSkin(Ws(this.state.ball))}quitToMenu(){this.enterMenu(),this.saveSoon()}openLevels(){this.mode==="playing"||this.mode==="paused"||(this.ui.hideModals(),this.ui.hideGameHud(),this.enterMenu(),this.mode="menu",this.sheet="levels",this.ui.showLevels())}openShop(){this.mode==="playing"||this.mode==="paused"||(this.ui.hideModals(),this.ui.hideGameHud(),this.enterMenu(),this.mode="menu",this.sheet="shop",this.ui.renderShop(),this.ui.showShop())}openLevelsFromResults(){this.ui.hideModals(),this.enterMenu(),this.sheet="levels",this.ui.showLevels(),this.saveSoon()}closeSheet(){this.sheet=null,this.mode="menu",this.setMenuTheme(),this.ui.showMenu(),this.ui.refreshMenu(),this.saveSoon()}pauseGame(){this.mode==="playing"&&(this.mode="paused",this.holding=!1,this.pointer.active=!1,this.pointerSteer=0,this.steer=0,this.audio.suspend(),this.audio.stopRoll(),this.ui.showPause(),this.ui.setPauseAvailable(!1),this.saveNow())}resumeGame(){this.mode==="paused"&&(this.ui.hidePause(),this.mode="playing",this.audio.resume(),this.audio.setIntensity(.45),this.last=performance.now(),this.accumulator=0)}restartLevel(){this.ui.hideModals(),this.audio.resume(),this.startLevel(this.currentIndex)}nextLevel(){if(this.ui.hideComplete(),this.currentIndex>=Oe-1){this.openFinal();return}this.startLevel(this.currentIndex+1)}openFinal(){this.ui.hideComplete(),this.mode="final",this.completeTime=Math.max(this.completeTime,1.2),this.ui.showFinal({stars:this.totalStars(),coins:this.state.coins,orbs:this.state.skins.length}),this.audio.setIntensity(.7),this.saveNow(),this.fx.finish(this.ballPos.clone().add(new E(0,1.6,0)))}openSettings(t){this.audio.unlock(),this.settingsFrom=t,this.settingsOpen=!0,this.ui.showSettings()}closeSettings(){this.settingsOpen=!1,this.ui.hideSettings(),this.mode==="paused"&&this.ui.showPause(),this.saveSoon()}onSettingsInput(t){typeof t.music=="number"&&(this.state.settings.music=Tt(t.music,0,1),this.audio.setMusicVolume(this.state.settings.music)),typeof t.sfx=="number"&&(this.state.settings.sfx=Tt(t.sfx,0,1),this.audio.setSfxVolume(this.state.settings.sfx)),typeof t.haptics=="boolean"&&(this.state.settings.haptics=t.haptics,t.haptics&&Rn(14,!0)),this.saveSoon()}handleEscape(){if(this.settingsOpen){this.closeSettings();return}if(this.mode==="paused"){this.resumeGame();return}if(this.sheet){this.closeSheet();return}this.mode==="playing"&&this.pauseGame()}handleSkinClick(t){let e=bn.find(s=>s.id===t);if(!e)return;if(this.state.skins.includes(t)){this.state.ball!==t&&(this.state.ball=t,this.audio.sfx("buy"),this.ui.toast(`${e.name} equipped!`,"gold",1600),this.showcase&&this.showcase.setSkin(e),this.saveNow(),this.ui.renderShop());return}this.state.coins>=e.price?(this.state.coins-=e.price,this.state.skins.push(t),this.state.ball=t,this.audio.sfx("buy"),this.showcase&&this.showcase.setSkin(e),this.ui.updateCoins(this.state.coins,{pop:!0}),this.ui.toast(`${e.name} unlocked and equipped!`,"gold",2200),this.ui.renderShop(),this.saveNow()):(this.audio.sfx("deny"),this.ui.toast(`Need ${Gs(e.price-this.state.coins)} more coins`,"pink",1800),Rn(30,this.state.settings.haptics))}deny(){this.audio.sfx("deny"),this.ui.toast("Finish the previous track to unlock this one","pink",1900),Rn(25,this.state.settings.haptics)}onHostPause(){this.hostPaused=!0,this.stopLoop(),this.audio.suspend(),this.mode==="playing"&&this.pauseGame()}onHostResume(){this.hostPaused=!1,this.mode!=="paused"&&this.audio.resume(),this.last=performance.now(),this.startLoop()}saveSoon(){clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.saveNow(),rx)}saveNow(){clearTimeout(this.saveTimer);try{ke.save(JSON.stringify(this.state))}catch(t){ke.logError(t)}}};async function lx(){let i=new ga;window.__ORB=window.__ORB||{},window.__ORB.game=i;try{await i.init()}catch(t){ke.logError(t);let e=document.getElementById("splashStatus");e&&(e.textContent="Something went wrong. Please reload the game.")}}lx();})();
