(()=>{var fu=0,Ul=1,pu=2;var uh=1,nl=2,Bn=3,Ln=0,an=1,Te=2;var ni=0,Gn=1,We=2,Nl=3,kl=4,mu=5,Ti=100,gu=101,yu=102,Fl=103,Ol=104,xu=200,_u=201,vu=202,Mu=203,po=204,mo=205,Su=206,Eu=207,bu=208,Tu=209,wu=210,Au=211,Ru=212,Cu=213,Pu=214,Lu=0,Iu=1,Du=2,Ur=3,Uu=4,Nu=5,ku=6,Fu=7,dh=0,Ou=1,Bu=2,ii=0,Hu=1,zu=2,Vu=3,Fi=4,Gu=5,Wu=6;var fh=300,us=301,ds=302,Li=303,go=304,da=306,ai=1e3,En=1001,yo=1002,en=1003,Bl=1004;var Pa=1005;var gn=1006,qu=1007;var zs=1008;var si=1009,Xu=1010,Yu=1011,il=1012,ph=1013,ti=1014,ei=1015,Vs=1016,mh=1017,gh=1018,Ri=1020,$u=1021,bn=1023,Zu=1024,Ju=1025,Ci=1026,fs=1027,Ku=1028,yh=1029,Qu=1030,xh=1031,_h=1033,La=33776,Ia=33777,Da=33778,Ua=33779,Hl=35840,zl=35841,Vl=35842,Gl=35843,vh=36196,Wl=37492,ql=37496,Xl=37808,Yl=37809,$l=37810,Zl=37811,Jl=37812,Kl=37813,Ql=37814,jl=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,Na=36492,ac=36494,oc=36495,ju=36283,lc=36284,cc=36285,hc=36286;var Nr=2300,kr=2301,ka=2302,uc=2400,dc=2401,fc=2402;var Mh=3e3,Pi=3001,td=3200,sl=3201,Sh=0,ed=1,yn="",Ee="srgb",Wn="srgb-linear",rl="display-p3",fa="display-p3-linear",Fr="linear",Me="srgb",Or="rec709",Br="p3";var Hi=7680;var pc=519,nd=512,id=513,sd=514,Eh=515,rd=516,ad=517,od=518,ld=519,xo=35044,bh=35048;var mc="300 es",_o=1035,Vn=2e3,Hr=2001,oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fa=Math.PI/180,vo=180/Math.PI;function ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function cd(n,t){return(n%t+t)%t}function Oa(n,t,e){return(1-e)*n+e*t}function gc(n){return(n&n-1)===0&&n!==0}function Mo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var dt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class n{constructor(t,e,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],_=s[1],x=s[4],E=s[7],P=s[2],w=s[5],R=s[8];return r[0]=a*y+o*_+l*P,r[3]=a*m+o*x+l*w,r[6]=a*f+o*E+l*R,r[1]=c*y+h*_+u*P,r[4]=c*m+h*x+u*w,r[7]=c*f+h*E+u*R,r[2]=d*y+p*_+g*P,r[5]=d*m+p*x+g*w,r[8]=d*f+p*E+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ba=new ee;function Th(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hd(){let n=zr("canvas");return n.style.display="block",n}var yc={};function Fs(n){n in yc||(yc[n]=!0,console.warn(n))}var xc=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_c=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sr={[Wn]:{transfer:Fr,primaries:Or,toReference:n=>n,fromReference:n=>n},[Ee]:{transfer:Me,primaries:Or,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fa]:{transfer:Fr,primaries:Br,toReference:n=>n.applyMatrix3(_c),fromReference:n=>n.applyMatrix3(xc)},[rl]:{transfer:Me,primaries:Br,toReference:n=>n.convertSRGBToLinear().applyMatrix3(_c),fromReference:n=>n.applyMatrix3(xc).convertLinearToSRGB()}},ud=new Set([Wn,fa]),pe={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ud.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=sr[t].toReference,s=sr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return sr[n].primaries},getTransfer:function(n){return n===yn?Fr:sr[n].transfer}};function cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ha(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zi,Vr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=zr("canvas")),zi.width=t.width,zi.height=t.height;let i=zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=zr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cs(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cs(e[i]/255)*255):e[i]=cs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dd=0,Gr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ri(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(za(s[a].image)):r.push(za(s[a]))}else r=za(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function za(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Vr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fd=0,xn=class n extends oi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=En,s=En,r=gn,a=zs,o=bn,l=si,c=n.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=ri(),this.name="",this.source=new Gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Pi?Ee:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ai:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ai:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?Pi:Mh}set encoding(t){Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Pi?Ee:yn}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=fh;xn.DEFAULT_ANISOTROPY=1;var be=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,E=(p+1)/2,P=(f+1)/2,w=(h+d)/4,R=(u+y)/4,U=(g+m)/4;return x>E&&x>P?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=w/i,r=R/i):E>P?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=w/s,r=U/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=R/r,s=U/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},So=class extends oi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(Fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pi?Ee:yn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Gr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends So{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Wr=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Eo=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oe=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*y,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let P=Math.sqrt(x),w=Math.atan2(P,f*_);m=Math.sin(m*w)/P,o=Math.sin(o*w)/P}let E=o*_;if(l=l*m+d*E,c=c*m+p*E,h=h*m+g*E,u=u*m+y*E,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Va=new M,vc=new oe,Tn=class{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rr.copy(i.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),ar.subVectors(this.max,As),Vi.subVectors(t.a,As),Gi.subVectors(t.b,As),Wi.subVectors(t.c,As),Zn.subVectors(Gi,Vi),Jn.subVectors(Wi,Gi),vi.subVectors(Vi,Wi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-vi.z,vi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,vi.z,0,-vi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-vi.y,vi.x,0];return!Ga(e,Vi,Gi,Wi,ar)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,Vi,Gi,Wi,ar))?!1:(or.crossVectors(Zn,Jn),e=[or.x,or.y,or.z],Ga(e,Vi,Gi,Wi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Un=[new M,new M,new M,new M,new M,new M,new M,new M],vn=new M,rr=new Tn,Vi=new M,Gi=new M,Wi=new M,Zn=new M,Jn=new M,vi=new M,As=new M,ar=new M,or=new M,Mi=new M;function Ga(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Mi.fromArray(n,r);let o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=i.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var pd=new Tn,Rs=new M,Wa=new M,li=class{constructor(t=new M,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):pd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);let e=Rs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Rs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Wa)),this.expandByPoint(Rs.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new M,qa=new M,lr=new M,Kn=new M,Xa=new M,cr=new M,Ya=new M,qr=class{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){qa.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(qa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=Kn.dot(this.direction),l=-Kn.dot(lr),c=Kn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qa).addScaledVector(lr,d),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,s,r){Xa.subVectors(e,t),cr.subVectors(i,t),Ya.crossVectors(Xa,cr);let a=this.direction.dot(Ya),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);let l=o*this.direction.dot(cr.crossVectors(Kn,cr));if(l<0)return null;let c=o*this.direction.dot(Xa.cross(Kn));if(c<0||l+c>a)return null;let h=-o*Kn.dot(Ya);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class n{constructor(t,e,i,s,r,a,o,l,c,h,u,d,p,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,p,g,y,m)}set(t,e,i,s,r,a,o,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),r=1/qi.setFromMatrixColumn(t,1).length(),a=1/qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(md,t,gd)}lookAt(t,e,i){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Qn.crossVectors(i,hn),Qn.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Qn.crossVectors(i,hn)),Qn.normalize(),hr.crossVectors(hn,Qn),s[0]=Qn.x,s[4]=hr.x,s[8]=hn.x,s[1]=Qn.y,s[5]=hr.y,s[9]=hn.y,s[2]=Qn.z,s[6]=hr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],_=i[3],x=i[7],E=i[11],P=i[15],w=s[0],R=s[4],U=s[8],v=s[12],b=s[1],F=s[5],Z=s[9],rt=s[13],L=s[2],N=s[6],W=s[10],nt=s[14],tt=s[3],V=s[7],D=s[11],$=s[15];return r[0]=a*w+o*b+l*L+c*tt,r[4]=a*R+o*F+l*N+c*V,r[8]=a*U+o*Z+l*W+c*D,r[12]=a*v+o*rt+l*nt+c*$,r[1]=h*w+u*b+d*L+p*tt,r[5]=h*R+u*F+d*N+p*V,r[9]=h*U+u*Z+d*W+p*D,r[13]=h*v+u*rt+d*nt+p*$,r[2]=g*w+y*b+m*L+f*tt,r[6]=g*R+y*F+m*N+f*V,r[10]=g*U+y*Z+m*W+f*D,r[14]=g*v+y*rt+m*nt+f*$,r[3]=_*w+x*b+E*L+P*tt,r[7]=_*R+x*F+E*N+P*V,r[11]=_*U+x*Z+E*W+P*D,r[15]=_*v+x*rt+E*nt+P*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+y*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],_=u*m*c-y*d*c+y*l*p-o*m*p-u*l*f+o*d*f,x=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,E=h*y*c-g*u*c+g*o*p-a*y*p-h*o*f+a*u*f,P=g*u*l-h*y*l-g*o*d+a*y*d+h*o*m-a*u*m,w=e*_+i*x+s*E+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=_*R,t[1]=(y*d*r-u*m*r-y*s*p+i*m*p+u*s*f-i*d*f)*R,t[2]=(o*m*r-y*l*r+y*s*c-i*m*c-o*s*f+i*l*f)*R,t[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*R,t[4]=x*R,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*R,t[8]=E*R,t[9]=(g*u*r-h*y*r-g*i*p+e*y*p+h*i*f-e*u*f)*R,t[10]=(a*y*r-g*o*r+g*i*c-e*y*c-a*i*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*p-e*o*p)*R,t[12]=P*R,t[13]=(h*y*s-g*u*s+g*i*d-e*y*d-h*i*m+e*u*m)*R,t[14]=(g*o*s-a*y*s-g*i*l+e*y*l+a*i*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*d+e*o*d)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,y=a*h,m=a*u,f=o*u,_=l*c,x=l*h,E=l*u,P=i.x,w=i.y,R=i.z;return s[0]=(1-(y+f))*P,s[1]=(p+E)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(p-E)*w,s[5]=(1-(d+f))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+x)*R,s[9]=(m-_)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=qi.set(s[0],s[1],s[2]).length(),a=qi.set(s[4],s[5],s[6]).length(),o=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let c=1/r,h=1/a,u=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Vn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),p,g;if(o===Vn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Hr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Vn){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*c,p=(i+s)*h,g,y;if(o===Vn)g=(a+r)*u,y=-2*u;else if(o===Hr)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},qi=new M,Mn=new Yt,md=new M(0,0,0),gd=new M(1,1,1),Qn=new M,hr=new M,hn=new M,Mc=new Yt,Sc=new oe,Pe=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pe.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yd=0,Ec=new M,Xi=new oe,kn=new Yt,ur=new M,Cs=new M,xd=new M,_d=new oe,bc=new M(1,0,0),Tc=new M(0,1,0),wc=new M(0,0,1),vd={type:"added"},Md={type:"removed"},Fe=class n extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new M,e=new Pe,i=new oe,s=new M(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ee}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(Tc,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(Tc,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ur.copy(t):ur.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Cs,ur,this.up):kn.lookAt(ur,Cs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(kn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Md)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Fe.DEFAULT_UP=new M(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new M,Fn=new M,$a=new M,On=new M,Yi=new M,$i=new M,Ac=new M,Za=new M,Ja=new M,Ka=new M,dr=!1,Ai=class n{constructor(t=new M,e=new M,i=new M){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Sn.subVectors(s,e),Fn.subVectors(i,e),$a.subVectors(t,e);let a=Sn.dot(Sn),o=Sn.dot(Fn),l=Sn.dot($a),c=Fn.dot(Fn),h=Fn.dot($a),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(t,e,i,s,r,a,o,l){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),this.getInterpolation(t,e,i,s,r,a,o,l)}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static isFrontFacing(t,e,i,s){return Sn.subVectors(i,e),Fn.subVectors(t,e),Sn.cross(Fn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Sn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Yi.subVectors(s,i),$i.subVectors(r,i),Za.subVectors(t,i);let l=Yi.dot(Za),c=$i.dot(Za);if(l<=0&&c<=0)return e.copy(i);Ja.subVectors(t,s);let h=Yi.dot(Ja),u=$i.dot(Ja);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Yi,a);Ka.subVectors(t,r);let p=Yi.dot(Ka),g=$i.dot(Ka);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector($i,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ac.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Ac,o);let f=1/(m+y+d);return a=y*f,o=d*f,e.copy(i).addScaledVector(Yi,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Qa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Tt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=cd(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Qa(a,r,t+1/3),this.g=Qa(a,r,t),this.b=Qa(a,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let i=wh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}copyLinearToSRGB(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return pe.fromWorkingColorSpace(Ke.copy(this),t),Math.round(Ge(Ke.r*255,0,255))*65536+Math.round(Ge(Ke.g*255,0,255))*256+Math.round(Ge(Ke.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Ke.copy(this),e);let i=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ee){pe.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,i=Ke.g,s=Ke.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(fr);let i=Oa(jn.h,fr.h,e),s=Oa(jn.s,fr.s,e),r=Oa(jn.l,fr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Tt;Tt.NAMES=wh;var Sd=0,Xn=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Gn,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gn&&(i.blending=this.blending),this.side!==Ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==po&&(i.blendSrc=this.blendSrc),this.blendDst!==mo&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},me=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new M,pr=new dt,Re=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xo&&(t.usage=this.usage),t}};var Yr=class extends Re{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var $r=class extends Re{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Qt=class extends Re{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Ed=0,mn=new Yt,ja=new Fe,Zi=new M,un=new Tn,Ps=new Tn,Ve=new M,ye=class n extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Th(t)?$r:Yr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(t){let i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(un.min,Ps.min),un.expandByPoint(Ve),Ve.addVectors(un.max,Ps.max),un.expandByPoint(Ve)):(un.expandByPoint(Ps.min),un.expandByPoint(Ps.max))}un.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(t,c),Ve.add(Zi)),s=Math.max(s,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new M,h[b]=new M;let u=new M,d=new M,p=new M,g=new dt,y=new dt,m=new dt,f=new M,_=new M;function x(b,F,Z){u.fromArray(s,b*3),d.fromArray(s,F*3),p.fromArray(s,Z*3),g.fromArray(a,b*2),y.fromArray(a,F*2),m.fromArray(a,Z*2),d.sub(u),p.sub(u),y.sub(g),m.sub(g);let rt=1/(y.x*m.y-m.x*y.y);isFinite(rt)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(rt),_.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(rt),c[b].add(f),c[F].add(f),c[Z].add(f),h[b].add(_),h[F].add(_),h[Z].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let b=0,F=E.length;b<F;++b){let Z=E[b],rt=Z.start,L=Z.count;for(let N=rt,W=rt+L;N<W;N+=3)x(i[N+0],i[N+1],i[N+2])}let P=new M,w=new M,R=new M,U=new M;function v(b){R.fromArray(r,b*3),U.copy(R);let F=c[b];P.copy(F),P.sub(R.multiplyScalar(R.dot(F))).normalize(),w.crossVectors(U,F);let rt=w.dot(h[b])<0?-1:1;l[b*4]=P.x,l[b*4+1]=P.y,l[b*4+2]=P.z,l[b*4+3]=rt}for(let b=0,F=E.length;b<F;++b){let Z=E[b],rt=Z.start,L=Z.count;for(let N=rt,W=rt+L;N<W;N+=3)v(i[N+0]),v(i[N+1]),v(i[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new M,r=new M,a=new M,o=new M,l=new M,c=new M,h=new M,u=new M;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rc=new Yt,Si=new qr,mr=new li,Cc=new M,Ji=new M,Ki=new M,Qi=new M,to=new M,gr=new M,yr=new dt,xr=new dt,_r=new dt,Pc=new M,Lc=new M,Ic=new M,vr=new M,Mr=new M,at=class extends Fe{constructor(t=new ye,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(to.fromBufferAttribute(u,t),a?gr.addScaledVector(to,h):gr.addScaledVector(to.sub(e),h))}e.add(gr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(mr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(mr,Cc)===null||Si.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Rc.copy(r).invert(),Si.copy(t.ray).applyMatrix4(Rc),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,P=x;E<P;E+=3){let w=o.getX(E),R=o.getX(E+1),U=o.getX(E+2);s=Sr(this,f,t,i,c,h,u,w,R,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let _=o.getX(m),x=o.getX(m+1),E=o.getX(m+2);s=Sr(this,a,t,i,c,h,u,_,x,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,P=x;E<P;E+=3){let w=E,R=E+1,U=E+2;s=Sr(this,f,t,i,c,h,u,w,R,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let _=m,x=m+1,E=m+2;s=Sr(this,a,t,i,c,h,u,_,x,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function bd(n,t,e,i,s,r,a,o){let l;if(t.side===an?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ln,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Mr);return c<e.near||c>e.far?null:{distance:c,point:Mr.clone(),object:n}}function Sr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ji),n.getVertexPosition(l,Ki),n.getVertexPosition(c,Qi);let h=bd(n,t,e,i,Ji,Ki,Qi,vr);if(h){s&&(yr.fromBufferAttribute(s,o),xr.fromBufferAttribute(s,l),_r.fromBufferAttribute(s,c),h.uv=Ai.getInterpolation(vr,Ji,Ki,Qi,yr,xr,_r,new dt)),r&&(yr.fromBufferAttribute(r,o),xr.fromBufferAttribute(r,l),_r.fromBufferAttribute(r,c),h.uv1=Ai.getInterpolation(vr,Ji,Ki,Qi,yr,xr,_r,new dt),h.uv2=h.uv1),a&&(Pc.fromBufferAttribute(a,o),Lc.fromBufferAttribute(a,l),Ic.fromBufferAttribute(a,c),h.normal=Ai.getInterpolation(vr,Ji,Ki,Qi,Pc,Lc,Ic,new M),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new M,materialIndex:0};Ai.getNormal(Ji,Ki,Qi,u.normal),h.face=u}return h}var we=class n extends ye{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(y,m,f,_,x,E,P,w,R,U,v){let b=E/R,F=P/U,Z=E/2,rt=P/2,L=w/2,N=R+1,W=U+1,nt=0,tt=0,V=new M;for(let D=0;D<W;D++){let $=D*F-rt;for(let X=0;X<N;X++){let I=X*b-Z;V[y]=I*_,V[m]=$*x,V[f]=L,c.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[f]=w>0?1:-1,h.push(V.x,V.y,V.z),u.push(X/R),u.push(1-D/U),nt+=1}}for(let D=0;D<U;D++)for(let $=0;$<R;$++){let X=d+$+N*D,I=d+$+N*(D+1),H=d+($+1)+N*(D+1),st=d+($+1)+N*D;l.push(X,I,st),l.push(I,H,st),tt+=6}o.addGroup(p,tt,v),p+=tt,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ps(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function tn(n){let t={};for(let e=0;e<n.length;e++){let i=ps(n[e]);for(let s in i)t[s]=i[s]}return t}function Td(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ah(n){return n.getRenderTarget()===null?n.outputColorSpace:pe.workingColorSpace}var wd={clone:ps,merge:tn},Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Td(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Zr=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ke=class extends Zr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ji=-90,ts=1,bo=class extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(ji,ts,t,e);s.layers=this.layers,this.add(s);let r=new ke(ji,ts,t,e);r.layers=this.layers,this.add(r);let a=new ke(ji,ts,t,e);a.layers=this.layers,this.add(a);let o=new ke(ji,ts,t,e);o.layers=this.layers,this.add(o);let l=new ke(ji,ts,t,e);l.layers=this.layers,this.add(l);let c=new ke(ji,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Jr=class extends xn{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},To=class extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Pi?Ee:yn),this.texture=new Jr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:ni});r.uniforms.tEquirect.value=e;let a=new at(s,r),o=e.minFilter;return e.minFilter===zs&&(e.minFilter=gn),new bo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},eo=new M,Cd=new M,Pd=new ee,Hn=class{constructor(t=new M(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=eo.subVectors(i,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(eo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Pd.getNormalMatrix(t),s=this.coplanarPoint(eo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ei=new li,Er=new M,Gs=class{constructor(t=new Hn,e=new Hn,i=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vn){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],_=s[13],x=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,m-p,E-f).normalize(),i[1].setComponents(l+r,d+c,m+p,E+f).normalize(),i[2].setComponents(l+a,d+h,m+g,E+_).normalize(),i[3].setComponents(l-a,d-h,m-g,E-_).normalize(),i[4].setComponents(l-o,d-u,m-y,E-x).normalize(),e===Vn)i[5].setComponents(l+o,d+u,m+y,E+x).normalize();else if(e===Hr)i[5].setComponents(o,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ld(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){let f=g[y];e?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var qe=class n extends ye{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let _=f*d-a;for(let x=0;x<c;x++){let E=x*u-r;g.push(E,-_,0),y.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let x=_+c*f,E=_+c*(f+1),P=_+1+c*(f+1),w=_+1+c*f;p.push(x,E,w),p.push(E,P,w)}this.setIndex(p),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
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
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
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
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
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
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Xd=`#ifdef USE_BUMPMAP
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ef=`#define PI 3.141592653589793
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
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sf=`vec3 transformedNormal = objectNormal;
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
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`
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
}`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
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
}`,Mf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,If=`struct PhysicalMaterial {
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
}`,Df=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
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
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yp=`float getShadowMask() {
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
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,Yp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
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
}`,Jp=`#define MATCAP
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
}`,Kp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,t0=`#define PHONG
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
}`,e0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,s0=`#define TOON
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
}`,r0=`#define TOON
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
}`,a0=`uniform float size;
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Id,alphahash_pars_fragment:Dd,alphamap_fragment:Ud,alphamap_pars_fragment:Nd,alphatest_fragment:kd,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:Bd,batching_pars_vertex:Hd,batching_vertex:zd,begin_vertex:Vd,beginnormal_vertex:Gd,bsdfs:Wd,iridescence_fragment:qd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Jd,color_fragment:Kd,color_pars_fragment:Qd,color_pars_vertex:jd,color_vertex:tf,common:ef,cube_uv_reflection_fragment:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:rf,displacementmap_vertex:af,emissivemap_fragment:of,emissivemap_pars_fragment:lf,colorspace_fragment:cf,colorspace_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:df,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:wf,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:yf,fog_fragment:xf,fog_pars_fragment:_f,gradientmap_pars_fragment:vf,lightmap_fragment:Mf,lightmap_pars_fragment:Sf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:bf,lights_pars_begin:Tf,lights_toon_fragment:Af,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Lf,lights_physical_pars_fragment:If,lights_fragment_begin:Df,lights_fragment_maps:Uf,lights_fragment_end:Nf,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Bf,map_fragment:Hf,map_pars_fragment:zf,map_particle_fragment:Vf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:qf,morphcolor_vertex:Xf,morphnormal_vertex:Yf,morphtarget_pars_vertex:$f,morphtarget_vertex:Zf,normal_fragment_begin:Jf,normal_fragment_maps:Kf,normal_pars_fragment:Qf,normal_pars_vertex:jf,normal_vertex:tp,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:rp,opaque_fragment:ap,packing:op,premultiplied_alpha_fragment:lp,project_vertex:cp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:yp,skinbase_vertex:xp,skinning_pars_vertex:_p,skinning_vertex:vp,skinnormal_vertex:Mp,specularmap_fragment:Sp,specularmap_pars_fragment:Ep,tonemapping_fragment:bp,tonemapping_pars_fragment:Tp,transmission_fragment:wp,transmission_pars_fragment:Ap,uv_pars_fragment:Rp,uv_pars_vertex:Cp,uv_vertex:Pp,worldpos_vertex:Lp,background_vert:Ip,background_frag:Dp,backgroundCube_vert:Up,backgroundCube_frag:Np,cube_vert:kp,cube_frag:Fp,depth_vert:Op,depth_frag:Bp,distanceRGBA_vert:Hp,distanceRGBA_frag:zp,equirect_vert:Vp,equirect_frag:Gp,linedashed_vert:Wp,linedashed_frag:qp,meshbasic_vert:Xp,meshbasic_frag:Yp,meshlambert_vert:$p,meshlambert_frag:Zp,meshmatcap_vert:Jp,meshmatcap_frag:Kp,meshnormal_vert:Qp,meshnormal_frag:jp,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:a0,points_frag:o0,shadow_vert:l0,shadow_frag:c0,sprite_vert:h0,sprite_frag:u0},mt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Pn={basic:{uniforms:tn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:tn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:tn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:tn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:tn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:tn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:tn([mt.points,mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:tn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:tn([mt.common,mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:tn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:tn([mt.sprite,mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:tn([mt.common,mt.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:tn([mt.lights,mt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Pn.physical={uniforms:tn([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var br={r:0,b:0,g:0};function d0(n,t,e,i,s,r,a){let o=new Tt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let _=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),_=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===da)?(h===void 0&&(h=new at(new we(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:ps(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=pe.getTransfer(x.colorSpace)!==Me,(u!==x||d!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new at(new qe(2,2),new wn({name:"BackgroundMaterial",uniforms:ps(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=pe.getTransfer(x.colorSpace)!==Me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,f){m.getRGB(br,Ah(n)),i.buffers.color.setClear(br.r,br.g,br.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:g}}function f0(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,N,W,nt,tt){let V=!1;if(a){let D=y(nt,W,N);c!==D&&(c=D,p(c.object)),V=f(L,nt,W,tt),V&&_(L,nt,W,tt)}else{let D=N.wireframe===!0;(c.geometry!==nt.id||c.program!==W.id||c.wireframe!==D)&&(c.geometry=nt.id,c.program=W.id,c.wireframe=D,V=!0)}tt!==null&&e.update(tt,n.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,U(L,N,W,nt),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function y(L,N,W){let nt=W.wireframe===!0,tt=o[L.id];tt===void 0&&(tt={},o[L.id]=tt);let V=tt[N.id];V===void 0&&(V={},tt[N.id]=V);let D=V[nt];return D===void 0&&(D=m(d()),V[nt]=D),D}function m(L){let N=[],W=[],nt=[];for(let tt=0;tt<s;tt++)N[tt]=0,W[tt]=0,nt[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:nt,object:L,attributes:{},index:null}}function f(L,N,W,nt){let tt=c.attributes,V=N.attributes,D=0,$=W.getAttributes();for(let X in $)if($[X].location>=0){let H=tt[X],st=V[X];if(st===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),H===void 0||H.attribute!==st||st&&H.data!==st.data)return!0;D++}return c.attributesNum!==D||c.index!==nt}function _(L,N,W,nt){let tt={},V=N.attributes,D=0,$=W.getAttributes();for(let X in $)if($[X].location>=0){let H=V[X];H===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));let st={};st.attribute=H,H&&H.data&&(st.data=H.data),tt[X]=st,D++}c.attributes=tt,c.attributesNum=D,c.index=nt}function x(){let L=c.newAttributes;for(let N=0,W=L.length;N<W;N++)L[N]=0}function E(L){P(L,0)}function P(L,N){let W=c.newAttributes,nt=c.enabledAttributes,tt=c.attributeDivisors;W[L]=1,nt[L]===0&&(n.enableVertexAttribArray(L),nt[L]=1),tt[L]!==N&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),tt[L]=N)}function w(){let L=c.newAttributes,N=c.enabledAttributes;for(let W=0,nt=N.length;W<nt;W++)N[W]!==L[W]&&(n.disableVertexAttribArray(W),N[W]=0)}function R(L,N,W,nt,tt,V,D){D===!0?n.vertexAttribIPointer(L,N,W,tt,V):n.vertexAttribPointer(L,N,W,nt,tt,V)}function U(L,N,W,nt){if(i.isWebGL2===!1&&(L.isInstancedMesh||nt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let tt=nt.attributes,V=W.getAttributes(),D=N.defaultAttributeValues;for(let $ in V){let X=V[$];if(X.location>=0){let I=tt[$];if(I===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(I=L.instanceColor)),I!==void 0){let H=I.normalized,st=I.itemSize,ut=e.get(I);if(ut===void 0)continue;let ft=ut.buffer,St=ut.type,Ut=ut.bytesPerElement,It=i.isWebGL2===!0&&(St===n.INT||St===n.UNSIGNED_INT||I.gpuType===ph);if(I.isInterleavedBufferAttribute){let jt=I.data,G=jt.stride,Ue=I.offset;if(jt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<X.locationSize;Dt++)P(X.location+Dt,jt.meshPerAttribute);L.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=jt.meshPerAttribute*jt.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)E(X.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Dt=0;Dt<X.locationSize;Dt++)R(X.location+Dt,st/X.locationSize,St,H,G*Ut,(Ue+st/X.locationSize*Dt)*Ut,It)}else{if(I.isInstancedBufferAttribute){for(let jt=0;jt<X.locationSize;jt++)P(X.location+jt,I.meshPerAttribute);L.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let jt=0;jt<X.locationSize;jt++)E(X.location+jt);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let jt=0;jt<X.locationSize;jt++)R(X.location+jt,st/X.locationSize,St,H,st*Ut,st/X.locationSize*jt*Ut,It)}}else if(D!==void 0){let H=D[$];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(X.location,H);break;case 3:n.vertexAttrib3fv(X.location,H);break;case 4:n.vertexAttrib4fv(X.location,H);break;default:n.vertexAttrib1fv(X.location,H)}}}}w()}function v(){Z();for(let L in o){let N=o[L];for(let W in N){let nt=N[W];for(let tt in nt)g(nt[tt].object),delete nt[tt];delete N[W]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;let N=o[L.id];for(let W in N){let nt=N[W];for(let tt in nt)g(nt[tt].object),delete nt[tt];delete N[W]}delete o[L.id]}function F(L){for(let N in o){let W=o[N];if(W[L.id]===void 0)continue;let nt=W[L.id];for(let tt in nt)g(nt[tt].object),delete nt[tt];delete W[L.id]}}function Z(){rt(),h=!0,c!==l&&(c=l,p(c.object))}function rt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:rt,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:E,disableUnusedAttributes:w}}function p0(n,t,e,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function m0(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,E=a||t.has("OES_texture_float"),P=x&&E,w=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:w}}function g0(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Hn,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,x=_*4,E=f.clippingState||null;l.value=E,E=h(g,d,x,p);for(let P=0;P!==x;++P)E[P]=e[P];f.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,E=p;x!==y;++x,E+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function y0(n){let t=new WeakMap;function e(a,o){return o===Li?a.mapping=us:o===go&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Li||o===go)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new To(l.height/2);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Kr=class extends Zr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},os=4,Dc=[.125,.215,.35,.446,.526,.582],wi=20,no=new Kr,Uc=new Tt,io=null,so=0,ro=0,bi=(1+Math.sqrt(5))/2,es=1/bi,Nc=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,bi,es),new M(0,bi,-es),new M(es,0,bi),new M(-es,0,bi),new M(bi,es,0),new M(-bi,es,0)],ci=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(io,so,ro),t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Vs,format:bn,colorSpace:Wn,depthBuffer:!1},s=kc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(r)),this._blurMaterial=_0(r,t,e)}return s}_compileMaterial(t){let e=new at(this._lodPlanes[0],t);this._renderer.compile(e,no)}_sceneToCubeUV(t,e,i,s){let o=new ke(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uc),h.toneMapping=ii,h.autoClear=!1;let p=new me({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new at(new we,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(Uc),y=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):_===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let x=this._cubeSize;Tr(s,_*x,f>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===us||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Tr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,no)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nc[(s-1)%Nc.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new at(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*wi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);let f=[],_=0;for(let R=0;R<wi;++R){let U=R/y,v=Math.exp(-U*U/2);f.push(v),R===0?_+=v:R<m&&(_+=2*v)}for(let R=0;R<f.length;R++)f[R]=f[R]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;let E=this._sizeLods[s],P=3*E*(s>x-os?s-x+os:0),w=4*(this._cubeSize-E);Tr(e,P,w,3*E,2*E),l.setRenderTarget(e),l.render(u,no)}};function x0(n){let t=[],e=[],i=[],s=n,r=n-os+1+Dc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-os?l=Dc[a-n+os-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,_=new Float32Array(y*g*p),x=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let w=0;w<p;w++){let R=w%3*2/3-1,U=w>2?0:-1,v=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];_.set(v,y*g*w),x.set(d,m*g*w);let b=[w,w,w,w,w,w];E.set(b,f*g*w)}let P=new ye;P.setAttribute("position",new Re(_,y)),P.setAttribute("uv",new Re(x,m)),P.setAttribute("faceIndex",new Re(E,f)),t.push(P),s>os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kc(n,t,e){let i=new qn(n,t,e);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function _0(n,t,e){let i=new Float32Array(wi),s=new M(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:al(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Fc(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Oc(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function al(){return`

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
	`}function v0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Li||l===go,h=l===us||l===ds;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ci(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ci(n));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function M0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function S0(n,t,e,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)t.update(y[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let _=p.array;y=p.version;for(let x=0,E=_.length;x<E;x+=3){let P=_[x+0],w=_[x+1],R=_[x+2];d.push(P,w,w,R,R,P)}}else if(g!==void 0){let _=g.array;y=g.version;for(let x=0,E=_.length/3-1;x<E;x+=3){let P=x+0,w=x+1,R=x+2;d.push(P,w,w,R,R,P)}}else return;let m=new(Th(d)?$r:Yr)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function E0(n,t,e,i){let s=i.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,y){if(y===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,y),e.update(g,r,y)}function d(p,g,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<y;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,y);let f=0;for(let _=0;_<y;_++)f+=g[_];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function b0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function T0(n,t){return n[0]-t[0]}function w0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function A0(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,a=new be,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,y=r.get(h);if(y===void 0||y.count!==g){let L=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();let _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],U=0;_===!0&&(U=1),x===!0&&(U=2),E===!0&&(U=3);let v=h.attributes.position.count*U,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let F=new Float32Array(v*b*4*g),Z=new Wr(F,v,b,g);Z.type=ei,Z.needsUpdate=!0;let rt=U*4;for(let N=0;N<g;N++){let W=P[N],nt=w[N],tt=R[N],V=v*b*4*N;for(let D=0;D<W.count;D++){let $=D*rt;_===!0&&(a.fromBufferAttribute(W,D),F[V+$+0]=a.x,F[V+$+1]=a.y,F[V+$+2]=a.z,F[V+$+3]=0),x===!0&&(a.fromBufferAttribute(nt,D),F[V+$+4]=a.x,F[V+$+5]=a.y,F[V+$+6]=a.z,F[V+$+7]=0),E===!0&&(a.fromBufferAttribute(tt,D),F[V+$+8]=a.x,F[V+$+9]=a.y,F[V+$+10]=a.z,F[V+$+11]=tt.itemSize===4?a.w:1)}}y={count:g,texture:Z,size:new dt(v,b)},r.set(h,y),h.addEventListener("dispose",L)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<p;x++){let E=g[x];E[0]=x,E[1]=d[x]}g.sort(w0);for(let x=0;x<8;x++)x<p&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(T0);let y=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let E=o[x],P=E[0],w=E[1];P!==Number.MAX_SAFE_INTEGER&&w?(y&&h.getAttribute("morphTarget"+x)!==y[P]&&h.setAttribute("morphTarget"+x,y[P]),m&&h.getAttribute("morphNormal"+x)!==m[P]&&h.setAttribute("morphNormal"+x,m[P]),s[x]=w,f+=w):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let _=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function R0(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Qr=class extends xn{constructor(t,e,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ci,h!==Ci&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ci&&(i=ti),i===void 0&&h===fs&&(i=Ri),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ch=new xn,Ph=new Qr(1,1);Ph.compareFunction=Eh;var Lh=new Wr,Ih=new Eo,Dh=new Jr,Bc=[],Hc=[],zc=new Float32Array(16),Vc=new Float32Array(9),Gc=new Float32Array(4);function xs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Bc[s];if(r===void 0&&(r=new Float32Array(s),Bc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function pa(n,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function C0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function P0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function L0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function I0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function D0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Gc.set(i),n.uniformMatrix2fv(this.addr,!1,Gc),Be(e,i)}}function U0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Vc.set(i),n.uniformMatrix3fv(this.addr,!1,Vc),Be(e,i)}}function N0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;zc.set(i),n.uniformMatrix4fv(this.addr,!1,zc),Be(e,i)}}function k0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function F0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function O0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function B0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function H0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function z0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function V0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function G0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function W0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Ph:Ch;e.setTexture2D(t||r,s)}function q0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ih,s)}function X0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Dh,s)}function Y0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Lh,s)}function $0(n){switch(n){case 5126:return C0;case 35664:return P0;case 35665:return L0;case 35666:return I0;case 35674:return D0;case 35675:return U0;case 35676:return N0;case 5124:case 35670:return k0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return H0;case 36294:return z0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return Y0}}function Z0(n,t){n.uniform1fv(this.addr,t)}function J0(n,t){let e=xs(t,this.size,2);n.uniform2fv(this.addr,e)}function K0(n,t){let e=xs(t,this.size,3);n.uniform3fv(this.addr,e)}function Q0(n,t){let e=xs(t,this.size,4);n.uniform4fv(this.addr,e)}function j0(n,t){let e=xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function tm(n,t){let e=xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function em(n,t){let e=xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function nm(n,t){n.uniform1iv(this.addr,t)}function im(n,t){n.uniform2iv(this.addr,t)}function sm(n,t){n.uniform3iv(this.addr,t)}function rm(n,t){n.uniform4iv(this.addr,t)}function am(n,t){n.uniform1uiv(this.addr,t)}function om(n,t){n.uniform2uiv(this.addr,t)}function lm(n,t){n.uniform3uiv(this.addr,t)}function cm(n,t){n.uniform4uiv(this.addr,t)}function hm(n,t,e){let i=this.cache,s=t.length,r=pa(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ch,r[a])}function um(n,t,e){let i=this.cache,s=t.length,r=pa(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ih,r[a])}function dm(n,t,e){let i=this.cache,s=t.length,r=pa(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Dh,r[a])}function fm(n,t,e){let i=this.cache,s=t.length,r=pa(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Lh,r[a])}function pm(n){switch(n){case 5126:return Z0;case 35664:return J0;case 35665:return K0;case 35666:return Q0;case 35674:return j0;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}var wo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$0(e.type)}},Ao=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}},Ro=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},ao=/(\w+)(\])?(\[|\.)?/g;function Wc(n,t){n.seq.push(t),n.map[t.id]=t}function mm(n,t,e){let i=n.name,s=i.length;for(ao.lastIndex=0;;){let r=ao.exec(i),a=ao.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wc(e,c===void 0?new wo(o,n,t):new Ao(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Ro(o),Wc(e,u)),e=u}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);mm(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function qc(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var gm=37297,ym=0;function xm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function _m(n){let t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(n),i;switch(t===e?i="":t===Br&&e===Or?i="LinearDisplayP3ToLinearSRGB":t===Or&&e===Br&&(i="LinearSRGBToLinearDisplayP3"),n){case Wn:case fa:return[i,"LinearTransferOETF"];case Ee:case rl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Xc(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+xm(n.getShaderSource(t),a)}else return s}function vm(n,t){let e=_m(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Mm(n,t){let e;switch(t){case Hu:e="Linear";break;case zu:e="Reinhard";break;case Vu:e="OptimizedCineon";break;case Fi:e="ACESFilmic";break;case Wu:e="AgX";break;case Gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Sm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function Em(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ls).join(`
`)}function bm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Tm(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ls(n){return n!==""}function Yc(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(n){return n.replace(wm,Rm)}var Am=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rm(n,t){let e=Jt[t];if(e===void 0){let i=Am.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}var Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(n){return n.replace(Cm,Pm)}function Pm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===nl?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Im(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case ds:t="ENVMAP_TYPE_CUBE";break;case da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dm(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ds&&(t="ENVMAP_MODE_REFRACTION"),t}function Um(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ou:t="ENVMAP_BLENDING_MIX";break;case Bu:t="ENVMAP_BLENDING_ADD";break}return t}function Nm(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function km(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Lm(e),c=Im(e),h=Dm(e),u=Um(e),d=Nm(e),p=e.isWebGL2?"":Sm(e),g=Em(e),y=bm(r),m=s.createProgram(),f,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ls).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ls).join(`
`),_.length>0&&(_+=`
`)):(f=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),_=[p,Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Jt.tonemapping_pars_fragment:"",e.toneMapping!==ii?Mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,vm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=Co(a),a=Yc(a,e),a=$c(a,e),o=Co(o),o=Yc(o,e),o=$c(o,e),a=Zc(a),o=Zc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let E=x+f+a,P=x+_+o,w=qc(s,s.VERTEX_SHADER,E),R=qc(s,s.FRAGMENT_SHADER,P);s.attachShader(m,w),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(Z){if(n.debug.checkShaderErrors){let rt=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(w).trim(),N=s.getShaderInfoLog(R).trim(),W=!0,nt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,w,R);else{let tt=Xc(s,w,"vertex"),V=Xc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+tt+`
`+V)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(L===""||N==="")&&(nt=!1);nt&&(Z.diagnostics={runnable:W,programLog:rt,vertexShader:{log:L,prefix:f},fragmentShader:{log:N,prefix:_}})}s.deleteShader(w),s.deleteShader(R),v=new hs(s,m),b=Tm(s,m)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,gm)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ym++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=R,this}var Fm=0,Po=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Lo(t),e.set(t,i)),i}},Lo=class{constructor(t){this.id=Fm++,this.code=t,this.usedTimes=0}};function Om(n,t,e,i,s,r,a){let o=new Xr,l=new Po,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return v===0?"uv":`uv${v}`}function m(v,b,F,Z,rt){let L=Z.fog,N=rt.geometry,W=v.isMeshStandardMaterial?Z.environment:null,nt=(v.isMeshStandardMaterial?e:t).get(v.envMap||W),tt=nt&&nt.mapping===da?nt.image.height:null,V=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let D=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,$=D!==void 0?D.length:0,X=0;N.morphAttributes.position!==void 0&&(X=1),N.morphAttributes.normal!==void 0&&(X=2),N.morphAttributes.color!==void 0&&(X=3);let I,H,st,ut;if(V){let Le=Pn[V];I=Le.vertexShader,H=Le.fragmentShader}else I=v.vertexShader,H=v.fragmentShader,l.update(v),st=l.getVertexShaderID(v),ut=l.getFragmentShaderID(v);let ft=n.getRenderTarget(),St=rt.isInstancedMesh===!0,Ut=rt.isBatchedMesh===!0,It=!!v.map,jt=!!v.matcap,G=!!nt,Ue=!!v.aoMap,Dt=!!v.lightMap,zt=!!v.bumpMap,At=!!v.normalMap,fe=!!v.displacementMap,Wt=!!v.emissiveMap,A=!!v.metalnessMap,S=!!v.roughnessMap,z=v.anisotropy>0,ct=v.clearcoat>0,lt=v.iridescence>0,ht=v.sheen>0,Rt=v.transmission>0,gt=z&&!!v.anisotropyMap,Et=ct&&!!v.clearcoatMap,yt=ct&&!!v.clearcoatNormalMap,Bt=ct&&!!v.clearcoatRoughnessMap,ot=lt&&!!v.iridescenceMap,ue=lt&&!!v.iridescenceThicknessMap,Vt=ht&&!!v.sheenColorMap,Nt=ht&&!!v.sheenRoughnessMap,Pt=!!v.specularMap,bt=!!v.specularColorMap,qt=!!v.specularIntensityMap,O=Rt&&!!v.transmissionMap,j=Rt&&!!v.thicknessMap,it=!!v.gradientMap,B=!!v.alphaMap,C=v.alphaTest>0,Q=!!v.alphaHash,J=!!v.extensions,et=!!N.attributes.uv1,pt=!!N.attributes.uv2,kt=!!N.attributes.uv3,Ot=ii;return v.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ot=n.toneMapping),{isWebGL2:h,shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:I,fragmentShader:H,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ut,instancing:St,instancingColor:St&&rt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Wn,map:It,matcap:jt,envMap:G,envMapMode:G&&nt.mapping,envMapCubeUVHeight:tt,aoMap:Ue,lightMap:Dt,bumpMap:zt,normalMap:At,displacementMap:d&&fe,emissiveMap:Wt,normalMapObjectSpace:At&&v.normalMapType===ed,normalMapTangentSpace:At&&v.normalMapType===Sh,metalnessMap:A,roughnessMap:S,anisotropy:z,anisotropyMap:gt,clearcoat:ct,clearcoatMap:Et,clearcoatNormalMap:yt,clearcoatRoughnessMap:Bt,iridescence:lt,iridescenceMap:ot,iridescenceThicknessMap:ue,sheen:ht,sheenColorMap:Vt,sheenRoughnessMap:Nt,specularMap:Pt,specularColorMap:bt,specularIntensityMap:qt,transmission:Rt,transmissionMap:O,thicknessMap:j,gradientMap:it,opaque:v.transparent===!1&&v.blending===Gn,alphaMap:B,alphaTest:C,alphaHash:Q,combine:v.combine,mapUv:It&&y(v.map.channel),aoMapUv:Ue&&y(v.aoMap.channel),lightMapUv:Dt&&y(v.lightMap.channel),bumpMapUv:zt&&y(v.bumpMap.channel),normalMapUv:At&&y(v.normalMap.channel),displacementMapUv:fe&&y(v.displacementMap.channel),emissiveMapUv:Wt&&y(v.emissiveMap.channel),metalnessMapUv:A&&y(v.metalnessMap.channel),roughnessMapUv:S&&y(v.roughnessMap.channel),anisotropyMapUv:gt&&y(v.anisotropyMap.channel),clearcoatMapUv:Et&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:yt&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&y(v.sheenRoughnessMap.channel),specularMapUv:Pt&&y(v.specularMap.channel),specularColorMapUv:bt&&y(v.specularColorMap.channel),specularIntensityMapUv:qt&&y(v.specularIntensityMap.channel),transmissionMapUv:O&&y(v.transmissionMap.channel),thicknessMapUv:j&&y(v.thicknessMap.channel),alphaMapUv:B&&y(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(At||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:et,vertexUv2s:pt,vertexUv3s:kt,pointsUvs:rt.isPoints===!0&&!!N.attributes.uv&&(It||B),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:rt.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:X,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,useLegacyLights:n._useLegacyLights,decodeVideoTexture:It&&v.map.isVideoTexture===!0&&pe.getTransfer(v.map.colorSpace)===Me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Te,flipSided:v.side===an,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:J&&v.extensions.derivatives===!0,extensionFragDepth:J&&v.extensions.fragDepth===!0,extensionDrawBuffers:J&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:J&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:J&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(_(b,v),x(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function _(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function E(v){let b=g[v.type],F;if(b){let Z=Pn[b];F=wd.clone(Z.uniforms)}else F=v.uniforms;return F}function P(v,b){let F;for(let Z=0,rt=c.length;Z<rt;Z++){let L=c[Z];if(L.cacheKey===b){F=L,++F.usedTimes;break}}return F===void 0&&(F=new km(n,b,v,r),c.push(F)),F}function w(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function R(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:P,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:U}}function Bm(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function Hm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Kc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qc(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,p,g,y,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function o(u,d,p,g,y,m){let f=a(u,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,y,m){let f=a(u,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Hm),i.length>1&&i.sort(d||Kc),s.length>1&&s.sort(d||Kc)}function h(){for(let u=t,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function zm(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Qc,n.set(i,[a])):s>=r.length?(a=new Qc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Vm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new Tt};break;case"SpotLight":e={position:new M,direction:new M,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new M,halfWidth:new M,halfHeight:new M};break}return n[t.id]=e,e}}}function Gm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Wm=0;function qm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Xm(n,t){let e=new Vm,i=Gm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new M);let r=new M,a=new Yt,o=new Yt;function l(h,u){let d=0,p=0,g=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let y=0,m=0,f=0,_=0,x=0,E=0,P=0,w=0,R=0,U=0,v=0;h.sort(qm);let b=u===!0?Math.PI:1;for(let Z=0,rt=h.length;Z<rt;Z++){let L=h[Z],N=L.color,W=L.intensity,nt=L.distance,tt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*W*b,p+=N.g*W*b,g+=N.b*W*b;else if(L.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(L.sh.coefficients[V],W);v++}else if(L.isDirectionalLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let D=L.shadow,$=i.get(L);$.shadowBias=D.bias,$.shadowNormalBias=D.normalBias,$.shadowRadius=D.radius,$.shadowMapSize=D.mapSize,s.directionalShadow[y]=$,s.directionalShadowMap[y]=tt,s.directionalShadowMatrix[y]=L.shadow.matrix,E++}s.directional[y]=V,y++}else if(L.isSpotLight){let V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(N).multiplyScalar(W*b),V.distance=nt,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,s.spot[f]=V;let D=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,D.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[f]=D.matrix,L.castShadow){let $=i.get(L);$.shadowBias=D.bias,$.shadowNormalBias=D.normalBias,$.shadowRadius=D.radius,$.shadowMapSize=D.mapSize,s.spotShadow[f]=$,s.spotShadowMap[f]=tt,w++}f++}else if(L.isRectAreaLight){let V=e.get(L);V.color.copy(N).multiplyScalar(W),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),s.rectArea[_]=V,_++}else if(L.isPointLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*b),V.distance=L.distance,V.decay=L.decay,L.castShadow){let D=L.shadow,$=i.get(L);$.shadowBias=D.bias,$.shadowNormalBias=D.normalBias,$.shadowRadius=D.radius,$.shadowMapSize=D.mapSize,$.shadowCameraNear=D.camera.near,$.shadowCameraFar=D.camera.far,s.pointShadow[m]=$,s.pointShadowMap[m]=tt,s.pointShadowMatrix[m]=L.shadow.matrix,P++}s.point[m]=V,m++}else if(L.isHemisphereLight){let V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(W*b),V.groundColor.copy(L.groundColor).multiplyScalar(W*b),s.hemi[x]=V,x++}}_>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==y||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==_||F.hemiLength!==x||F.numDirectionalShadows!==E||F.numPointShadows!==P||F.numSpotShadows!==w||F.numSpotMaps!==R||F.numLightProbes!==v)&&(s.directional.length=y,s.spot.length=f,s.rectArea.length=_,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=w+R-U,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=v,F.directionalLength=y,F.pointLength=m,F.spotLength=f,F.rectAreaLength=_,F.hemiLength=x,F.numDirectionalShadows=E,F.numPointShadows=P,F.numSpotShadows=w,F.numSpotMaps=R,F.numLightProbes=v,s.version=Wm++)}function c(h,u){let d=0,p=0,g=0,y=0,m=0,f=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){let E=h[_];if(E.isDirectionalLight){let P=s.directional[d];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(E.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(E.isRectAreaLight){let P=s.rectArea[y];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(E.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){let P=s.point[p];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function jc(n,t){let e=new Xm(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ym(n,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),l;return o===void 0?(l=new jc(n,t),e.set(r,[l])):a>=o.length?(l=new jc(n,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var Ws=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Io=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},$m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
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
}`;function Jm(n,t,e){let i=new Gs,s=new dt,r=new dt,a=new be,o=new Ws({depthPacking:sl}),l=new Io,c={},h=e.maxTextureSize,u={[Ln]:an,[an]:Ln,[Te]:Te},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:$m,fragmentShader:Zm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ye;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new at(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let f=this.type;this.render=function(w,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let v=n.getRenderTarget(),b=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(ni),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let rt=f!==Bn&&this.type===Bn,L=f===Bn&&this.type!==Bn;for(let N=0,W=w.length;N<W;N++){let nt=w[N],tt=nt.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let V=tt.getFrameExtents();if(s.multiply(V),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,tt.mapSize.y=r.y)),tt.map===null||rt===!0||L===!0){let $=this.type!==Bn?{minFilter:en,magFilter:en}:{};tt.map!==null&&tt.map.dispose(),tt.map=new qn(s.x,s.y,$),tt.map.texture.name=nt.name+".shadowMap",tt.camera.updateProjectionMatrix()}n.setRenderTarget(tt.map),n.clear();let D=tt.getViewportCount();for(let $=0;$<D;$++){let X=tt.getViewport($);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),Z.viewport(a),tt.updateMatrices(nt,$),i=tt.getFrustum(),E(R,U,tt.camera,nt,this.type)}tt.isPointLightShadow!==!0&&this.type===Bn&&_(tt,U),tt.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(v,b,F)};function _(w,R){let U=t.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,U,d,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,U,p,y,null)}function x(w,R,U,v){let b=null,F=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)b=F;else if(b=U.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let Z=b.uuid,rt=R.uuid,L=c[Z];L===void 0&&(L={},c[Z]=L);let N=L[rt];N===void 0&&(N=b.clone(),L[rt]=N,R.addEventListener("dispose",P)),b=N}if(b.visible=R.visible,b.wireframe=R.wireframe,v===Bn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let Z=n.properties.get(b);Z.light=U}return b}function E(w,R,U,v,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Bn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);let rt=t.update(w),L=w.material;if(Array.isArray(L)){let N=rt.groups;for(let W=0,nt=N.length;W<nt;W++){let tt=N[W],V=L[tt.materialIndex];if(V&&V.visible){let D=x(w,V,v,b);w.onBeforeShadow(n,w,R,U,rt,D,tt),n.renderBufferDirect(U,null,rt,D,w,tt),w.onAfterShadow(n,w,R,U,rt,D,tt)}}}else if(L.visible){let N=x(w,L,v,b);w.onBeforeShadow(n,w,R,U,rt,N,null),n.renderBufferDirect(U,null,rt,N,w,null),w.onAfterShadow(n,w,R,U,rt,N,null)}}let Z=w.children;for(let rt=0,L=Z.length;rt<L;rt++)E(Z[rt],R,U,v,b)}function P(w){w.target.removeEventListener("dispose",P);for(let U in c){let v=c[U],b=w.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function Km(n,t,e){let i=e.isWebGL2;function s(){let C=!1,Q=new be,J=null,et=new be(0,0,0,0);return{setMask:function(pt){J!==pt&&!C&&(n.colorMask(pt,pt,pt,pt),J=pt)},setLocked:function(pt){C=pt},setClear:function(pt,kt,Ot,ve,Le){Le===!0&&(pt*=ve,kt*=ve,Ot*=ve),Q.set(pt,kt,Ot,ve),et.equals(Q)===!1&&(n.clearColor(pt,kt,Ot,ve),et.copy(Q))},reset:function(){C=!1,J=null,et.set(-1,0,0,0)}}}function r(){let C=!1,Q=null,J=null,et=null;return{setTest:function(pt){pt?Ut(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(pt){Q!==pt&&!C&&(n.depthMask(pt),Q=pt)},setFunc:function(pt){if(J!==pt){switch(pt){case Lu:n.depthFunc(n.NEVER);break;case Iu:n.depthFunc(n.ALWAYS);break;case Du:n.depthFunc(n.LESS);break;case Ur:n.depthFunc(n.LEQUAL);break;case Uu:n.depthFunc(n.EQUAL);break;case Nu:n.depthFunc(n.GEQUAL);break;case ku:n.depthFunc(n.GREATER);break;case Fu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=pt}},setLocked:function(pt){C=pt},setClear:function(pt){et!==pt&&(n.clearDepth(pt),et=pt)},reset:function(){C=!1,Q=null,J=null,et=null}}}function a(){let C=!1,Q=null,J=null,et=null,pt=null,kt=null,Ot=null,ve=null,Le=null;return{setTest:function(de){C||(de?Ut(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function(de){Q!==de&&!C&&(n.stencilMask(de),Q=de)},setFunc:function(de,He,ln){(J!==de||et!==He||pt!==ln)&&(n.stencilFunc(de,He,ln),J=de,et=He,pt=ln)},setOp:function(de,He,ln){(kt!==de||Ot!==He||ve!==ln)&&(n.stencilOp(de,He,ln),kt=de,Ot=He,ve=ln)},setLocked:function(de){C=de},setClear:function(de){Le!==de&&(n.clearStencil(de),Le=de)},reset:function(){C=!1,Q=null,J=null,et=null,pt=null,kt=null,Ot=null,ve=null,Le=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,y=[],m=null,f=!1,_=null,x=null,E=null,P=null,w=null,R=null,U=null,v=new Tt(0,0,0),b=0,F=!1,Z=null,rt=null,L=null,N=null,W=null,nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,V=0,D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(D)[1]),tt=V>=1):D.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),tt=V>=2);let $=null,X={},I=n.getParameter(n.SCISSOR_BOX),H=n.getParameter(n.VIEWPORT),st=new be().fromArray(I),ut=new be().fromArray(H);function ft(C,Q,J,et){let pt=new Uint8Array(4),kt=n.createTexture();n.bindTexture(C,kt),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<J;Ot++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(Q,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(Q+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return kt}let St={};St[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(St[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ut(n.DEPTH_TEST),l.setFunc(Ur),Wt(!1),A(Ul),Ut(n.CULL_FACE),At(ni);function Ut(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function It(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function jt(C,Q){return p[C]!==Q?(n.bindFramebuffer(C,Q),p[C]=Q,i&&(C===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Q),C===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Q)),!0):!1}function G(C,Q){let J=y,et=!1;if(C)if(J=g.get(Q),J===void 0&&(J=[],g.set(Q,J)),C.isWebGLMultipleRenderTargets){let pt=C.texture;if(J.length!==pt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let kt=0,Ot=pt.length;kt<Ot;kt++)J[kt]=n.COLOR_ATTACHMENT0+kt;J.length=pt.length,et=!0}}else J[0]!==n.COLOR_ATTACHMENT0&&(J[0]=n.COLOR_ATTACHMENT0,et=!0);else J[0]!==n.BACK&&(J[0]=n.BACK,et=!0);et&&(e.isWebGL2?n.drawBuffers(J):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Ue(C){return m!==C?(n.useProgram(C),m=C,!0):!1}let Dt={[Ti]:n.FUNC_ADD,[gu]:n.FUNC_SUBTRACT,[yu]:n.FUNC_REVERSE_SUBTRACT};if(i)Dt[Fl]=n.MIN,Dt[Ol]=n.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(Dt[Fl]=C.MIN_EXT,Dt[Ol]=C.MAX_EXT)}let zt={[xu]:n.ZERO,[_u]:n.ONE,[vu]:n.SRC_COLOR,[po]:n.SRC_ALPHA,[wu]:n.SRC_ALPHA_SATURATE,[bu]:n.DST_COLOR,[Su]:n.DST_ALPHA,[Mu]:n.ONE_MINUS_SRC_COLOR,[mo]:n.ONE_MINUS_SRC_ALPHA,[Tu]:n.ONE_MINUS_DST_COLOR,[Eu]:n.ONE_MINUS_DST_ALPHA,[Au]:n.CONSTANT_COLOR,[Ru]:n.ONE_MINUS_CONSTANT_COLOR,[Cu]:n.CONSTANT_ALPHA,[Pu]:n.ONE_MINUS_CONSTANT_ALPHA};function At(C,Q,J,et,pt,kt,Ot,ve,Le,de){if(C===ni){f===!0&&(It(n.BLEND),f=!1);return}if(f===!1&&(Ut(n.BLEND),f=!0),C!==mu){if(C!==_||de!==F){if((x!==Ti||w!==Ti)&&(n.blendEquation(n.FUNC_ADD),x=Ti,w=Ti),de)switch(C){case Gn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case We:n.blendFunc(n.ONE,n.ONE);break;case Nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Gn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case We:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,P=null,R=null,U=null,v.set(0,0,0),b=0,_=C,F=de}return}pt=pt||Q,kt=kt||J,Ot=Ot||et,(Q!==x||pt!==w)&&(n.blendEquationSeparate(Dt[Q],Dt[pt]),x=Q,w=pt),(J!==E||et!==P||kt!==R||Ot!==U)&&(n.blendFuncSeparate(zt[J],zt[et],zt[kt],zt[Ot]),E=J,P=et,R=kt,U=Ot),(ve.equals(v)===!1||Le!==b)&&(n.blendColor(ve.r,ve.g,ve.b,Le),v.copy(ve),b=Le),_=C,F=!1}function fe(C,Q){C.side===Te?It(n.CULL_FACE):Ut(n.CULL_FACE);let J=C.side===an;Q&&(J=!J),Wt(J),C.blending===Gn&&C.transparent===!1?At(ni):At(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);let et=C.stencilWrite;c.setTest(et),et&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),z(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ut(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(C){Z!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),Z=C)}function A(C){C!==fu?(Ut(n.CULL_FACE),C!==rt&&(C===Ul?n.cullFace(n.BACK):C===pu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),rt=C}function S(C){C!==L&&(tt&&n.lineWidth(C),L=C)}function z(C,Q,J){C?(Ut(n.POLYGON_OFFSET_FILL),(N!==Q||W!==J)&&(n.polygonOffset(Q,J),N=Q,W=J)):It(n.POLYGON_OFFSET_FILL)}function ct(C){C?Ut(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function lt(C){C===void 0&&(C=n.TEXTURE0+nt-1),$!==C&&(n.activeTexture(C),$=C)}function ht(C,Q,J){J===void 0&&($===null?J=n.TEXTURE0+nt-1:J=$);let et=X[J];et===void 0&&(et={type:void 0,texture:void 0},X[J]=et),(et.type!==C||et.texture!==Q)&&($!==J&&(n.activeTexture(J),$=J),n.bindTexture(C,Q||St[C]),et.type=C,et.texture=Q)}function Rt(){let C=X[$];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function gt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function yt(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Vt(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qt(C){st.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),st.copy(C))}function O(C){ut.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ut.copy(C))}function j(C,Q){let J=u.get(Q);J===void 0&&(J=new WeakMap,u.set(Q,J));let et=J.get(C);et===void 0&&(et=n.getUniformBlockIndex(Q,C.name),J.set(C,et))}function it(C,Q){let et=u.get(Q).get(C);h.get(Q)!==et&&(n.uniformBlockBinding(Q,et,C.__bindingPointIndex),h.set(Q,et))}function B(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},$=null,X={},p={},g=new WeakMap,y=[],m=null,f=!1,_=null,x=null,E=null,P=null,w=null,R=null,U=null,v=new Tt(0,0,0),b=0,F=!1,Z=null,rt=null,L=null,N=null,W=null,st.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ut,disable:It,bindFramebuffer:jt,drawBuffers:G,useProgram:Ue,setBlending:At,setMaterial:fe,setFlipSided:Wt,setCullFace:A,setLineWidth:S,setPolygonOffset:z,setScissorTest:ct,activeTexture:lt,bindTexture:ht,unbindTexture:Rt,compressedTexImage2D:gt,compressedTexImage3D:Et,texImage2D:Pt,texImage3D:bt,updateUBOMapping:j,uniformBlockBinding:it,texStorage2D:Vt,texStorage3D:Nt,texSubImage2D:yt,texSubImage3D:Bt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ue,scissor:qt,viewport:O,reset:B}}function Qm(n,t,e,i,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):zr("canvas")}function y(A,S,z,ct){let lt=1;if((A.width>ct||A.height>ct)&&(lt=ct/Math.max(A.width,A.height)),lt<1||S===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let ht=S?Mo:Math.floor,Rt=ht(lt*A.width),gt=ht(lt*A.height);u===void 0&&(u=g(Rt,gt));let Et=z?g(Rt,gt):u;return Et.width=Rt,Et.height=gt,Et.getContext("2d").drawImage(A,0,0,Rt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Rt+"x"+gt+")."),Et}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return gc(A.width)&&gc(A.height)}function f(A){return o?!1:A.wrapS!==En||A.wrapT!==En||A.minFilter!==en&&A.minFilter!==gn}function _(A,S){return A.generateMipmaps&&S&&A.minFilter!==en&&A.minFilter!==gn}function x(A){n.generateMipmap(A)}function E(A,S,z,ct,lt=!1){if(o===!1)return S;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht=S;if(S===n.RED&&(z===n.FLOAT&&(ht=n.R32F),z===n.HALF_FLOAT&&(ht=n.R16F),z===n.UNSIGNED_BYTE&&(ht=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ht=n.R8UI),z===n.UNSIGNED_SHORT&&(ht=n.R16UI),z===n.UNSIGNED_INT&&(ht=n.R32UI),z===n.BYTE&&(ht=n.R8I),z===n.SHORT&&(ht=n.R16I),z===n.INT&&(ht=n.R32I)),S===n.RG&&(z===n.FLOAT&&(ht=n.RG32F),z===n.HALF_FLOAT&&(ht=n.RG16F),z===n.UNSIGNED_BYTE&&(ht=n.RG8)),S===n.RGBA){let Rt=lt?Fr:pe.getTransfer(ct);z===n.FLOAT&&(ht=n.RGBA32F),z===n.HALF_FLOAT&&(ht=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ht=Rt===Me?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ht=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ht=n.RGB5_A1)}return(ht===n.R16F||ht===n.R32F||ht===n.RG16F||ht===n.RG32F||ht===n.RGBA16F||ht===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function P(A,S,z){return _(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===en||A===Bl||A===Pa?n.NEAREST:n.LINEAR}function R(A){let S=A.target;S.removeEventListener("dispose",R),v(S),S.isVideoTexture&&h.delete(S)}function U(A){let S=A.target;S.removeEventListener("dispose",U),F(S)}function v(A){let S=i.get(A);if(S.__webglInit===void 0)return;let z=A.source,ct=d.get(z);if(ct){let lt=ct[S.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&b(A),Object.keys(ct).length===0&&d.delete(z)}i.remove(A)}function b(A){let S=i.get(A);n.deleteTexture(S.__webglTexture);let z=A.source,ct=d.get(z);delete ct[S.__cacheKey],a.memory.textures--}function F(A){let S=A.texture,z=i.get(A),ct=i.get(S);if(ct.__webglTexture!==void 0&&(n.deleteTexture(ct.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(z.__webglFramebuffer[lt]))for(let ht=0;ht<z.__webglFramebuffer[lt].length;ht++)n.deleteFramebuffer(z.__webglFramebuffer[lt][ht]);else n.deleteFramebuffer(z.__webglFramebuffer[lt]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[lt])}else{if(Array.isArray(z.__webglFramebuffer))for(let lt=0;lt<z.__webglFramebuffer.length;lt++)n.deleteFramebuffer(z.__webglFramebuffer[lt]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let lt=0;lt<z.__webglColorRenderbuffer.length;lt++)z.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[lt]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let lt=0,ht=S.length;lt<ht;lt++){let Rt=i.get(S[lt]);Rt.__webglTexture&&(n.deleteTexture(Rt.__webglTexture),a.memory.textures--),i.remove(S[lt])}i.remove(S),i.remove(A)}let Z=0;function rt(){Z=0}function L(){let A=Z;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),Z+=1,A}function N(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function W(A,S){let z=i.get(A);if(A.isVideoTexture&&fe(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let ct=A.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(z,A,S);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function nt(A,S){let z=i.get(A);if(A.version>0&&z.__version!==A.version){st(z,A,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function tt(A,S){let z=i.get(A);if(A.version>0&&z.__version!==A.version){st(z,A,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function V(A,S){let z=i.get(A);if(A.version>0&&z.__version!==A.version){ut(z,A,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}let D={[ai]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},$={[en]:n.NEAREST,[Bl]:n.NEAREST_MIPMAP_NEAREST,[Pa]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[qu]:n.LINEAR_MIPMAP_NEAREST,[zs]:n.LINEAR_MIPMAP_LINEAR},X={[nd]:n.NEVER,[ld]:n.ALWAYS,[id]:n.LESS,[Eh]:n.LEQUAL,[sd]:n.EQUAL,[od]:n.GEQUAL,[rd]:n.GREATER,[ad]:n.NOTEQUAL};function I(A,S,z){if(z?(n.texParameteri(A,n.TEXTURE_WRAP_S,D[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,D[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,D[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,$[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,$[S.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==En||S.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,w(S.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==en&&S.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,X[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ct=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===en||S.minFilter!==Pa&&S.minFilter!==zs||S.type===ei&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Vs&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(A,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function H(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));let ct=S.source,lt=d.get(ct);lt===void 0&&(lt={},d.set(ct,lt));let ht=N(S);if(ht!==A.__cacheKey){lt[ht]===void 0&&(lt[ht]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),lt[ht].usedTimes++;let Rt=lt[A.__cacheKey];Rt!==void 0&&(lt[A.__cacheKey].usedTimes--,Rt.usedTimes===0&&b(S)),A.__cacheKey=ht,A.__webglTexture=lt[ht].texture}return z}function st(A,S,z){let ct=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=n.TEXTURE_3D);let lt=H(A,S),ht=S.source;e.bindTexture(ct,A.__webglTexture,n.TEXTURE0+z);let Rt=i.get(ht);if(ht.version!==Rt.__version||lt===!0){e.activeTexture(n.TEXTURE0+z);let gt=pe.getPrimaries(pe.workingColorSpace),Et=S.colorSpace===yn?null:pe.getPrimaries(S.colorSpace),yt=S.colorSpace===yn||gt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Bt=f(S)&&m(S.image)===!1,ot=y(S.image,Bt,!1,s.maxTextureSize);ot=Wt(S,ot);let ue=m(ot)||o,Vt=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type),Pt=E(S.internalFormat,Vt,Nt,S.colorSpace,S.isVideoTexture);I(ct,S,ue);let bt,qt=S.mipmaps,O=o&&S.isVideoTexture!==!0&&Pt!==vh,j=Rt.__version===void 0||lt===!0,it=P(S,ot,ue);if(S.isDepthTexture)Pt=n.DEPTH_COMPONENT,o?S.type===ei?Pt=n.DEPTH_COMPONENT32F:S.type===ti?Pt=n.DEPTH_COMPONENT24:S.type===Ri?Pt=n.DEPTH24_STENCIL8:Pt=n.DEPTH_COMPONENT16:S.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ci&&Pt===n.DEPTH_COMPONENT&&S.type!==il&&S.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ti,Nt=r.convert(S.type)),S.format===fs&&Pt===n.DEPTH_COMPONENT&&(Pt=n.DEPTH_STENCIL,S.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ri,Nt=r.convert(S.type))),j&&(O?e.texStorage2D(n.TEXTURE_2D,1,Pt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Pt,ot.width,ot.height,0,Vt,Nt,null));else if(S.isDataTexture)if(qt.length>0&&ue){O&&j&&e.texStorage2D(n.TEXTURE_2D,it,Pt,qt[0].width,qt[0].height);for(let B=0,C=qt.length;B<C;B++)bt=qt[B],O?e.texSubImage2D(n.TEXTURE_2D,B,0,0,bt.width,bt.height,Vt,Nt,bt.data):e.texImage2D(n.TEXTURE_2D,B,Pt,bt.width,bt.height,0,Vt,Nt,bt.data);S.generateMipmaps=!1}else O?(j&&e.texStorage2D(n.TEXTURE_2D,it,Pt,ot.width,ot.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,Vt,Nt,ot.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,ot.width,ot.height,0,Vt,Nt,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&j&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,Pt,qt[0].width,qt[0].height,ot.depth);for(let B=0,C=qt.length;B<C;B++)bt=qt[B],S.format!==bn?Vt!==null?O?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,bt.width,bt.height,ot.depth,Vt,bt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,Pt,bt.width,bt.height,ot.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?e.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,bt.width,bt.height,ot.depth,Vt,Nt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,B,Pt,bt.width,bt.height,ot.depth,0,Vt,Nt,bt.data)}else{O&&j&&e.texStorage2D(n.TEXTURE_2D,it,Pt,qt[0].width,qt[0].height);for(let B=0,C=qt.length;B<C;B++)bt=qt[B],S.format!==bn?Vt!==null?O?e.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,bt.width,bt.height,Vt,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,B,Pt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?e.texSubImage2D(n.TEXTURE_2D,B,0,0,bt.width,bt.height,Vt,Nt,bt.data):e.texImage2D(n.TEXTURE_2D,B,Pt,bt.width,bt.height,0,Vt,Nt,bt.data)}else if(S.isDataArrayTexture)O?(j&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,Pt,ot.width,ot.height,ot.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Vt,Nt,ot.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,ot.width,ot.height,ot.depth,0,Vt,Nt,ot.data);else if(S.isData3DTexture)O?(j&&e.texStorage3D(n.TEXTURE_3D,it,Pt,ot.width,ot.height,ot.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Vt,Nt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,ot.width,ot.height,ot.depth,0,Vt,Nt,ot.data);else if(S.isFramebufferTexture){if(j)if(O)e.texStorage2D(n.TEXTURE_2D,it,Pt,ot.width,ot.height);else{let B=ot.width,C=ot.height;for(let Q=0;Q<it;Q++)e.texImage2D(n.TEXTURE_2D,Q,Pt,B,C,0,Vt,Nt,null),B>>=1,C>>=1}}else if(qt.length>0&&ue){O&&j&&e.texStorage2D(n.TEXTURE_2D,it,Pt,qt[0].width,qt[0].height);for(let B=0,C=qt.length;B<C;B++)bt=qt[B],O?e.texSubImage2D(n.TEXTURE_2D,B,0,0,Vt,Nt,bt):e.texImage2D(n.TEXTURE_2D,B,Pt,Vt,Nt,bt);S.generateMipmaps=!1}else O?(j&&e.texStorage2D(n.TEXTURE_2D,it,Pt,ot.width,ot.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Vt,Nt,ot)):e.texImage2D(n.TEXTURE_2D,0,Pt,Vt,Nt,ot);_(S,ue)&&x(ct),Rt.__version=ht.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ut(A,S,z){if(S.image.length!==6)return;let ct=H(A,S),lt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);let ht=i.get(lt);if(lt.version!==ht.__version||ct===!0){e.activeTexture(n.TEXTURE0+z);let Rt=pe.getPrimaries(pe.workingColorSpace),gt=S.colorSpace===yn?null:pe.getPrimaries(S.colorSpace),Et=S.colorSpace===yn||Rt===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let yt=S.isCompressedTexture||S.image[0].isCompressedTexture,Bt=S.image[0]&&S.image[0].isDataTexture,ot=[];for(let B=0;B<6;B++)!yt&&!Bt?ot[B]=y(S.image[B],!1,!0,s.maxCubemapSize):ot[B]=Bt?S.image[B].image:S.image[B],ot[B]=Wt(S,ot[B]);let ue=ot[0],Vt=m(ue)||o,Nt=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type),bt=E(S.internalFormat,Nt,Pt,S.colorSpace),qt=o&&S.isVideoTexture!==!0,O=ht.__version===void 0||ct===!0,j=P(S,ue,Vt);I(n.TEXTURE_CUBE_MAP,S,Vt);let it;if(yt){qt&&O&&e.texStorage2D(n.TEXTURE_CUBE_MAP,j,bt,ue.width,ue.height);for(let B=0;B<6;B++){it=ot[B].mipmaps;for(let C=0;C<it.length;C++){let Q=it[C];S.format!==bn?Nt!==null?qt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,C,0,0,Q.width,Q.height,Nt,Q.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,C,bt,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,C,0,0,Q.width,Q.height,Nt,Pt,Q.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,C,bt,Q.width,Q.height,0,Nt,Pt,Q.data)}}}else{it=S.mipmaps,qt&&O&&(it.length>0&&j++,e.texStorage2D(n.TEXTURE_CUBE_MAP,j,bt,ot[0].width,ot[0].height));for(let B=0;B<6;B++)if(Bt){qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ot[B].width,ot[B].height,Nt,Pt,ot[B].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,bt,ot[B].width,ot[B].height,0,Nt,Pt,ot[B].data);for(let C=0;C<it.length;C++){let J=it[C].image[B].image;qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,C+1,0,0,J.width,J.height,Nt,Pt,J.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,C+1,bt,J.width,J.height,0,Nt,Pt,J.data)}}else{qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Nt,Pt,ot[B]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,bt,Nt,Pt,ot[B]);for(let C=0;C<it.length;C++){let Q=it[C];qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,C+1,0,0,Nt,Pt,Q.image[B]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,C+1,bt,Nt,Pt,Q.image[B])}}}_(S,Vt)&&x(n.TEXTURE_CUBE_MAP),ht.__version=lt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ft(A,S,z,ct,lt,ht){let Rt=r.convert(z.format,z.colorSpace),gt=r.convert(z.type),Et=E(z.internalFormat,Rt,gt,z.colorSpace);if(!i.get(S).__hasExternalTextures){let Bt=Math.max(1,S.width>>ht),ot=Math.max(1,S.height>>ht);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,ht,Et,Bt,ot,S.depth,0,Rt,gt,null):e.texImage2D(lt,ht,Et,Bt,ot,0,Rt,gt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),At(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,lt,i.get(z).__webglTexture,0,zt(S)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,lt,i.get(z).__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(A,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ct=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||At(S)){let lt=S.depthTexture;lt&&lt.isDepthTexture&&(lt.type===ei?ct=n.DEPTH_COMPONENT32F:lt.type===ti&&(ct=n.DEPTH_COMPONENT24));let ht=zt(S);At(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,ct,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,ct,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,ct,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let ct=zt(S);z&&At(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,n.DEPTH24_STENCIL8,S.width,S.height):At(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{let ct=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let lt=0;lt<ct.length;lt++){let ht=ct[lt],Rt=r.convert(ht.format,ht.colorSpace),gt=r.convert(ht.type),Et=E(ht.internalFormat,Rt,gt,ht.colorSpace),yt=zt(S);z&&At(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,Et,S.width,S.height):At(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,Et,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Et,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);let ct=i.get(S.depthTexture).__webglTexture,lt=zt(S);if(S.depthTexture.format===Ci)At(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0);else if(S.depthTexture.format===fs)At(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function It(A){let S=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ut(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]=n.createRenderbuffer(),St(S.__webglDepthbuffer[ct],A,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),St(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(A,S,z){let ct=i.get(A);S!==void 0&&ft(ct.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&It(A)}function G(A){let S=A.texture,z=i.get(A),ct=i.get(S);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=S.version,a.memory.textures++);let lt=A.isWebGLCubeRenderTarget===!0,ht=A.isWebGLMultipleRenderTargets===!0,Rt=m(A)||o;if(lt){z.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(o&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[gt]=[];for(let Et=0;Et<S.mipmaps.length;Et++)z.__webglFramebuffer[gt][Et]=n.createFramebuffer()}else z.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let gt=0;gt<S.mipmaps.length;gt++)z.__webglFramebuffer[gt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ht)if(s.drawBuffers){let gt=A.texture;for(let Et=0,yt=gt.length;Et<yt;Et++){let Bt=i.get(gt[Et]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&At(A)===!1){let gt=ht?S:[S];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Et=0;Et<gt.length;Et++){let yt=gt[Et];z.__webglColorRenderbuffer[Et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Et]);let Bt=r.convert(yt.format,yt.colorSpace),ot=r.convert(yt.type),ue=E(yt.internalFormat,Bt,ot,yt.colorSpace,A.isXRRenderTarget===!0),Vt=zt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,ue,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,z.__webglColorRenderbuffer[Et])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),St(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),I(n.TEXTURE_CUBE_MAP,S,Rt);for(let gt=0;gt<6;gt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)ft(z.__webglFramebuffer[gt][Et],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et);else ft(z.__webglFramebuffer[gt],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);_(S,Rt)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){let gt=A.texture;for(let Et=0,yt=gt.length;Et<yt;Et++){let Bt=gt[Et],ot=i.get(Bt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),I(n.TEXTURE_2D,Bt,Rt),ft(z.__webglFramebuffer,A,Bt,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,0),_(Bt,Rt)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?gt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,ct.__webglTexture),I(gt,S,Rt),o&&S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)ft(z.__webglFramebuffer[Et],A,S,n.COLOR_ATTACHMENT0,gt,Et);else ft(z.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,gt,0);_(S,Rt)&&x(gt),e.unbindTexture()}A.depthBuffer&&It(A)}function Ue(A){let S=m(A)||o,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ct=0,lt=z.length;ct<lt;ct++){let ht=z[ct];if(_(ht,S)){let Rt=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,gt=i.get(ht).__webglTexture;e.bindTexture(Rt,gt),x(Rt),e.unbindTexture()}}}function Dt(A){if(o&&A.samples>0&&At(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,ct=A.height,lt=n.COLOR_BUFFER_BIT,ht=[],Rt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(A),Et=A.isWebGLMultipleRenderTargets===!0;if(Et)for(let yt=0;yt<S.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let yt=0;yt<S.length;yt++){ht.push(n.COLOR_ATTACHMENT0+yt),A.depthBuffer&&ht.push(Rt);let Bt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Bt===!1&&(A.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),Et&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]),Bt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Rt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Rt])),Et){let ot=i.get(S[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,z,ct,0,0,z,ct,lt,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Et)for(let yt=0;yt<S.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let Bt=i.get(S[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function zt(A){return Math.min(s.maxSamples,A.samples)}function At(A){let S=i.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Wt(A,S){let z=A.colorSpace,ct=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===_o||z!==Wn&&z!==yn&&(pe.getTransfer(z)===Me?o===!1?t.has("EXT_sRGB")===!0&&ct===bn?(A.format=_o,A.minFilter=gn,A.generateMipmaps=!1):S=Vr.sRGBToLinear(S):(ct!==bn||lt!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=L,this.resetTextureUnits=rt,this.setTexture2D=W,this.setTexture2DArray=nt,this.setTexture3D=tt,this.setTextureCube=V,this.rebindTextures=jt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=At}function jm(n,t,e){let i=e.isWebGL2;function s(r,a=yn){let o,l=pe.getTransfer(a);if(r===si)return n.UNSIGNED_BYTE;if(r===mh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===gh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Xu)return n.BYTE;if(r===Yu)return n.SHORT;if(r===il)return n.UNSIGNED_SHORT;if(r===ph)return n.INT;if(r===ti)return n.UNSIGNED_INT;if(r===ei)return n.FLOAT;if(r===Vs)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===$u)return n.ALPHA;if(r===bn)return n.RGBA;if(r===Zu)return n.LUMINANCE;if(r===Ju)return n.LUMINANCE_ALPHA;if(r===Ci)return n.DEPTH_COMPONENT;if(r===fs)return n.DEPTH_STENCIL;if(r===_o)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ku)return n.RED;if(r===yh)return n.RED_INTEGER;if(r===Qu)return n.RG;if(r===xh)return n.RG_INTEGER;if(r===_h)return n.RGBA_INTEGER;if(r===La||r===Ia||r===Da||r===Ua)if(l===Me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===La)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===La)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ia)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Da)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ua)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hl||r===zl||r===Vl||r===Gl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Hl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wl||r===ql)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Wl)return l===Me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ql)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xl||r===Yl||r===$l||r===Zl||r===Jl||r===Kl||r===Ql||r===jl||r===tc||r===ec||r===nc||r===ic||r===sc||r===rc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xl)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yl)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$l)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zl)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jl)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kl)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ql)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jl)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tc)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ec)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nc)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ic)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sc)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rc)return l===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Na||r===ac||r===oc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Na)return l===Me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ac)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ju||r===lc||r===cc||r===hc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Na)return o.COMPRESSED_RED_RGTC1_EXT;if(r===lc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ri?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Do=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Gt=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},tg={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Gt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Uo=class extends oi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=e.getContextAttributes(),m=null,f=null,_=[],x=[],E=new dt,P=null,w=new ke;w.layers.enable(1),w.viewport=new be;let R=new ke;R.layers.enable(2),R.viewport=new be;let U=[w,R],v=new Do;v.layers.enable(1),v.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let H=_[I];return H===void 0&&(H=new Os,_[I]=H),H.getTargetRaySpace()},this.getControllerGrip=function(I){let H=_[I];return H===void 0&&(H=new Os,_[I]=H),H.getGripSpace()},this.getHand=function(I){let H=_[I];return H===void 0&&(H=new Os,_[I]=H),H.getHandSpace()};function Z(I){let H=x.indexOf(I.inputSource);if(H===-1)return;let st=_[H];st!==void 0&&(st.update(I.inputSource,I.frame,c||a),st.dispatchEvent({type:I.type,data:I.inputSource}))}function rt(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",L);for(let I=0;I<_.length;I++){let H=x[I];H!==null&&(x[I]=null,_[I].disconnect(H))}b=null,F=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,X.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let H={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new qn(p.framebufferWidth,p.framebufferHeight,{format:bn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let H=null,st=null,ut=null;y.depth&&(ut=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=y.stencil?fs:Ci,st=y.stencil?Ri:ti);let ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new qn(d.textureWidth,d.textureHeight,{format:bn,type:si,depthTexture:new Qr(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let St=t.properties.get(f);St.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),X.setContext(s),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(I){for(let H=0;H<I.removed.length;H++){let st=I.removed[H],ut=x.indexOf(st);ut>=0&&(x[ut]=null,_[ut].disconnect(st))}for(let H=0;H<I.added.length;H++){let st=I.added[H],ut=x.indexOf(st);if(ut===-1){for(let St=0;St<_.length;St++)if(St>=x.length){x.push(st),ut=St;break}else if(x[St]===null){x[St]=st,ut=St;break}if(ut===-1)break}let ft=_[ut];ft&&ft.connect(st)}}let N=new M,W=new M;function nt(I,H,st){N.setFromMatrixPosition(H.matrixWorld),W.setFromMatrixPosition(st.matrixWorld);let ut=N.distanceTo(W),ft=H.projectionMatrix.elements,St=st.projectionMatrix.elements,Ut=ft[14]/(ft[10]-1),It=ft[14]/(ft[10]+1),jt=(ft[9]+1)/ft[5],G=(ft[9]-1)/ft[5],Ue=(ft[8]-1)/ft[0],Dt=(St[8]+1)/St[0],zt=Ut*Ue,At=Ut*Dt,fe=ut/(-Ue+Dt),Wt=fe*-Ue;H.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Wt),I.translateZ(fe),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();let A=Ut+fe,S=It+fe,z=zt-Wt,ct=At+(ut-Wt),lt=jt*It/S*A,ht=G*It/S*A;I.projectionMatrix.makePerspective(z,ct,lt,ht,A,S),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function tt(I,H){H===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(H.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;v.near=R.near=w.near=I.near,v.far=R.far=w.far=I.far,(b!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,F=v.far);let H=I.parent,st=v.cameras;tt(v,H);for(let ut=0;ut<st.length;ut++)tt(st[ut],H);st.length===2?nt(v,w,R):v.projectionMatrix.copy(w.projectionMatrix),V(I,v,H)};function V(I,H,st){st===null?I.matrix.copy(H.matrixWorld):(I.matrix.copy(st.matrixWorld),I.matrix.invert(),I.matrix.multiply(H.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(H.projectionMatrix),I.projectionMatrixInverse.copy(H.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=vo*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)};let D=null;function $(I,H){if(h=H.getViewerPose(c||a),g=H,h!==null){let st=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let ut=!1;st.length!==v.cameras.length&&(v.cameras.length=0,ut=!0);for(let ft=0;ft<st.length;ft++){let St=st[ft],Ut=null;if(p!==null)Ut=p.getViewport(St);else{let jt=u.getViewSubImage(d,St);Ut=jt.viewport,ft===0&&(t.setRenderTargetTextures(f,jt.colorTexture,d.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(f))}let It=U[ft];It===void 0&&(It=new ke,It.layers.enable(ft),It.viewport=new be,U[ft]=It),It.matrix.fromArray(St.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(St.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),ft===0&&(v.matrix.copy(It.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ut===!0&&v.cameras.push(It)}}for(let st=0;st<_.length;st++){let ut=x[st],ft=_[st];ut!==null&&ft!==void 0&&ft.update(ut,H,c||a)}D&&D(I,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),g=null}let X=new Rh;X.setAnimationLoop($),this.setAnimationLoop=function(I){D=I},this.dispose=function(){}}};function eg(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ah(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,x,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=t.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ng(n,t,e,i){let s={},r={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){let E=x.program;i.uniformBlockBinding(_,E)}function c(_,x){let E=s[_.id];E===void 0&&(g(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",m));let P=x.program;i.updateUBOMapping(_,P);let w=t.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){let x=u();_.__bindingPointIndex=x;let E=n.createBuffer(),P=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=s[_.id],E=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,R=E.length;w<R;w++){let U=Array.isArray(E[w])?E[w]:[E[w]];for(let v=0,b=U.length;v<b;v++){let F=U[v];if(p(F,w,v,P)===!0){let Z=F.__offset,rt=Array.isArray(F.value)?F.value:[F.value],L=0;for(let N=0;N<rt.length;N++){let W=rt[N],nt=y(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,Z+L,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,L),L+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,x,E,P){let w=_.value,R=x+"_"+E;if(P[R]===void 0)return typeof w=="number"||typeof w=="boolean"?P[R]=w:P[R]=w.clone(),!0;{let U=P[R];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return P[R]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(_){let x=_.uniforms,E=0,P=16;for(let R=0,U=x.length;R<U;R++){let v=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,F=v.length;b<F;b++){let Z=v[b],rt=Array.isArray(Z.value)?Z.value:[Z.value];for(let L=0,N=rt.length;L<N;L++){let W=rt[L],nt=y(W),tt=E%P;tt!==0&&P-tt<nt.boundary&&(E+=P-tt),Z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=nt.storage}}}let w=E%P;return w>0&&(E+=P-w),_.__size=E,_.__cache={},this}function y(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ii=class{constructor(t={}){let{canvas:e=hd(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;let x=this,E=!1,P=0,w=0,R=null,U=-1,v=null,b=new be,F=new be,Z=null,rt=new Tt(0),L=0,N=e.width,W=e.height,nt=1,tt=null,V=null,D=new be(0,0,N,W),$=new be(0,0,N,W),X=!1,I=new Gs,H=!1,st=!1,ut=null,ft=new Yt,St=new dt,Ut=new M,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function jt(){return R===null?nt:1}let G=i;function Ue(T,k){for(let Y=0;Y<T.length;Y++){let K=T[Y],q=e.getContext(K,k);if(q!==null)return q}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",B,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",Q,!1),G===null){let k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),G=Ue(k,T),G===null)throw Ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Dt,zt,At,fe,Wt,A,S,z,ct,lt,ht,Rt,gt,Et,yt,Bt,ot,ue,Vt,Nt,Pt,bt,qt,O;function j(){Dt=new M0(G),zt=new m0(G,Dt,t),Dt.init(zt),bt=new jm(G,Dt,zt),At=new Km(G,Dt,zt),fe=new b0(G),Wt=new Bm,A=new Qm(G,Dt,At,Wt,zt,bt,fe),S=new y0(x),z=new v0(x),ct=new Ld(G,zt),qt=new f0(G,Dt,ct,zt),lt=new S0(G,ct,fe,qt),ht=new R0(G,lt,ct,fe),Vt=new A0(G,zt,A),Bt=new g0(Wt),Rt=new Om(x,S,z,Dt,zt,qt,Bt),gt=new eg(x,Wt),Et=new zm,yt=new Ym(Dt,zt),ue=new d0(x,S,z,At,ht,d,l),ot=new Jm(x,ht,zt),O=new ng(G,fe,zt,At),Nt=new p0(G,Dt,fe,zt),Pt=new E0(G,Dt,fe,zt),fe.programs=Rt.programs,x.capabilities=zt,x.extensions=Dt,x.properties=Wt,x.renderLists=Et,x.shadowMap=ot,x.state=At,x.info=fe}j();let it=new Uo(x,G);this.xr=it,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=Dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(T){T!==void 0&&(nt=T,this.setSize(N,W,!1))},this.getSize=function(T){return T.set(N,W)},this.setSize=function(T,k,Y=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,W=k,e.width=Math.floor(T*nt),e.height=Math.floor(k*nt),Y===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(N*nt,W*nt).floor()},this.setDrawingBufferSize=function(T,k,Y){N=T,W=k,nt=Y,e.width=Math.floor(T*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,k,Y,K){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,k,Y,K),At.viewport(b.copy(D).multiplyScalar(nt).floor())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,k,Y,K){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,k,Y,K),At.scissor(F.copy($).multiplyScalar(nt).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){At.setScissorTest(X=T)},this.setOpaqueSort=function(T){tt=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(T=!0,k=!0,Y=!0){let K=0;if(T){let q=!1;if(R!==null){let vt=R.texture.format;q=vt===_h||vt===xh||vt===yh}if(q){let vt=R.texture.type,Ct=vt===si||vt===ti||vt===il||vt===Ri||vt===mh||vt===gh,Ft=ue.getClearColor(),Ht=ue.getClearAlpha(),Kt=Ft.r,Xt=Ft.g,Zt=Ft.b;Ct?(p[0]=Kt,p[1]=Xt,p[2]=Zt,p[3]=Ht,G.clearBufferuiv(G.COLOR,0,p)):(g[0]=Kt,g[1]=Xt,g[2]=Zt,g[3]=Ht,G.clearBufferiv(G.COLOR,0,g))}else K|=G.COLOR_BUFFER_BIT}k&&(K|=G.DEPTH_BUFFER_BIT),Y&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",B,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),Et.dispose(),yt.dispose(),Wt.dispose(),S.dispose(),z.dispose(),ht.dispose(),qt.dispose(),O.dispose(),Rt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Le),it.removeEventListener("sessionend",de),ut&&(ut.dispose(),ut=null),He.stop()};function B(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=fe.autoReset,k=ot.enabled,Y=ot.autoUpdate,K=ot.needsUpdate,q=ot.type;j(),fe.autoReset=T,ot.enabled=k,ot.autoUpdate=Y,ot.needsUpdate=K,ot.type=q}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function J(T){let k=T.target;k.removeEventListener("dispose",J),et(k)}function et(T){pt(T),Wt.remove(T)}function pt(T){let k=Wt.get(T).programs;k!==void 0&&(k.forEach(function(Y){Rt.releaseProgram(Y)}),T.isShaderMaterial&&Rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Y,K,q,vt){k===null&&(k=It);let Ct=q.isMesh&&q.matrixWorld.determinant()<0,Ft=cu(T,k,Y,K,q);At.setMaterial(K,Ct);let Ht=Y.index,Kt=1;if(K.wireframe===!0){if(Ht=lt.getWireframeAttribute(Y),Ht===void 0)return;Kt=2}let Xt=Y.drawRange,Zt=Y.attributes.position,Ie=Xt.start*Kt,cn=(Xt.start+Xt.count)*Kt;vt!==null&&(Ie=Math.max(Ie,vt.start*Kt),cn=Math.min(cn,(vt.start+vt.count)*Kt)),Ht!==null?(Ie=Math.max(Ie,0),cn=Math.min(cn,Ht.count)):Zt!=null&&(Ie=Math.max(Ie,0),cn=Math.min(cn,Zt.count));let ze=cn-Ie;if(ze<0||ze===1/0)return;qt.setup(q,K,Ft,Y,Ht);let Dn,Ae=Nt;if(Ht!==null&&(Dn=ct.get(Ht),Ae=Pt,Ae.setIndex(Dn)),q.isMesh)K.wireframe===!0?(At.setLineWidth(K.wireframeLinewidth*jt()),Ae.setMode(G.LINES)):Ae.setMode(G.TRIANGLES);else if(q.isLine){let te=K.linewidth;te===void 0&&(te=1),At.setLineWidth(te*jt()),q.isLineSegments?Ae.setMode(G.LINES):q.isLineLoop?Ae.setMode(G.LINE_LOOP):Ae.setMode(G.LINE_STRIP)}else q.isPoints?Ae.setMode(G.POINTS):q.isSprite&&Ae.setMode(G.TRIANGLES);if(q.isBatchedMesh)Ae.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Ae.renderInstances(Ie,ze,q.count);else if(Y.isInstancedBufferGeometry){let te=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,wa=Math.min(Y.instanceCount,te);Ae.renderInstances(Ie,ze,wa)}else Ae.render(Ie,ze)};function kt(T,k,Y){T.transparent===!0&&T.side===Te&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,ir(T,k,Y),T.side=Ln,T.needsUpdate=!0,ir(T,k,Y),T.side=Te):ir(T,k,Y)}this.compile=function(T,k,Y=null){Y===null&&(Y=T),m=yt.get(Y),m.init(),_.push(m),Y.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),T!==Y&&T.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(x._useLegacyLights);let K=new Set;return T.traverse(function(q){let vt=q.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){let Ft=vt[Ct];kt(Ft,Y,q),K.add(Ft)}else kt(vt,Y,q),K.add(vt)}),_.pop(),m=null,K},this.compileAsync=function(T,k,Y=null){let K=this.compile(T,k,Y);return new Promise(q=>{function vt(){if(K.forEach(function(Ct){Wt.get(Ct).currentProgram.isReady()&&K.delete(Ct)}),K.size===0){q(T);return}setTimeout(vt,10)}Dt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ot=null;function ve(T){Ot&&Ot(T)}function Le(){He.stop()}function de(){He.start()}let He=new Rh;He.setAnimationLoop(ve),typeof self!="undefined"&&He.setContext(self),this.setAnimationLoop=function(T){Ot=T,it.setAnimationLoop(T),T===null?He.stop():He.start()},it.addEventListener("sessionstart",Le),it.addEventListener("sessionend",de),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(k),k=it.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,k,R),m=yt.get(T,_.length),m.init(),_.push(m),ft.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),I.setFromProjectionMatrix(ft),st=this.localClippingEnabled,H=Bt.init(this.clippingPlanes,st),y=Et.get(T,f.length),y.init(),f.push(y),ln(T,k,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(tt,V),this.info.render.frame++,H===!0&&Bt.beginShadows();let Y=m.state.shadowsArray;if(ot.render(Y,T,k),H===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(y,T),m.setupLights(x._useLegacyLights),k.isArrayCamera){let K=k.cameras;for(let q=0,vt=K.length;q<vt;q++){let Ct=K[q];Rl(y,T,Ct,Ct.viewport)}}else Rl(y,T,k);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,k),qt.resetDefaultState(),U=-1,v=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ln(T,k,Y,K){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||I.intersectsSprite(T)){K&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ft);let Ct=ht.update(T),Ft=T.material;Ft.visible&&y.push(T,Ct,Ft,Y,Ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||I.intersectsObject(T))){let Ct=ht.update(T),Ft=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ut.copy(Ct.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(ft)),Array.isArray(Ft)){let Ht=Ct.groups;for(let Kt=0,Xt=Ht.length;Kt<Xt;Kt++){let Zt=Ht[Kt],Ie=Ft[Zt.materialIndex];Ie&&Ie.visible&&y.push(T,Ct,Ie,Y,Ut.z,Zt)}}else Ft.visible&&y.push(T,Ct,Ft,Y,Ut.z,null)}}let vt=T.children;for(let Ct=0,Ft=vt.length;Ct<Ft;Ct++)ln(vt[Ct],k,Y,K)}function Rl(T,k,Y,K){let q=T.opaque,vt=T.transmissive,Ct=T.transparent;m.setupLightsView(Y),H===!0&&Bt.setGlobalState(x.clippingPlanes,Y),vt.length>0&&lu(q,vt,k,Y),K&&At.viewport(b.copy(K)),q.length>0&&nr(q,k,Y),vt.length>0&&nr(vt,k,Y),Ct.length>0&&nr(Ct,k,Y),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function lu(T,k,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let vt=zt.isWebGL2;ut===null&&(ut=new qn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")?Vs:si,minFilter:zs,samples:vt?4:0})),x.getDrawingBufferSize(St),vt?ut.setSize(St.x,St.y):ut.setSize(Mo(St.x),Mo(St.y));let Ct=x.getRenderTarget();x.setRenderTarget(ut),x.getClearColor(rt),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Ft=x.toneMapping;x.toneMapping=ii,nr(T,Y,K),A.updateMultisampleRenderTarget(ut),A.updateRenderTargetMipmap(ut);let Ht=!1;for(let Kt=0,Xt=k.length;Kt<Xt;Kt++){let Zt=k[Kt],Ie=Zt.object,cn=Zt.geometry,ze=Zt.material,Dn=Zt.group;if(ze.side===Te&&Ie.layers.test(K.layers)){let Ae=ze.side;ze.side=an,ze.needsUpdate=!0,Cl(Ie,Y,K,cn,ze,Dn),ze.side=Ae,ze.needsUpdate=!0,Ht=!0}}Ht===!0&&(A.updateMultisampleRenderTarget(ut),A.updateRenderTargetMipmap(ut)),x.setRenderTarget(Ct),x.setClearColor(rt,L),x.toneMapping=Ft}function nr(T,k,Y){let K=k.isScene===!0?k.overrideMaterial:null;for(let q=0,vt=T.length;q<vt;q++){let Ct=T[q],Ft=Ct.object,Ht=Ct.geometry,Kt=K===null?Ct.material:K,Xt=Ct.group;Ft.layers.test(Y.layers)&&Cl(Ft,k,Y,Ht,Kt,Xt)}}function Cl(T,k,Y,K,q,vt){T.onBeforeRender(x,k,Y,K,q,vt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(x,k,Y,K,T,vt),q.transparent===!0&&q.side===Te&&q.forceSinglePass===!1?(q.side=an,q.needsUpdate=!0,x.renderBufferDirect(Y,k,K,q,T,vt),q.side=Ln,q.needsUpdate=!0,x.renderBufferDirect(Y,k,K,q,T,vt),q.side=Te):x.renderBufferDirect(Y,k,K,q,T,vt),T.onAfterRender(x,k,Y,K,q,vt)}function ir(T,k,Y){k.isScene!==!0&&(k=It);let K=Wt.get(T),q=m.state.lights,vt=m.state.shadowsArray,Ct=q.state.version,Ft=Rt.getParameters(T,q.state,vt,k,Y),Ht=Rt.getProgramCacheKey(Ft),Kt=K.programs;K.environment=T.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(T.isMeshStandardMaterial?z:S).get(T.envMap||K.environment),Kt===void 0&&(T.addEventListener("dispose",J),Kt=new Map,K.programs=Kt);let Xt=Kt.get(Ht);if(Xt!==void 0){if(K.currentProgram===Xt&&K.lightsStateVersion===Ct)return Ll(T,Ft),Xt}else Ft.uniforms=Rt.getUniforms(T),T.onBuild(Y,Ft,x),T.onBeforeCompile(Ft,x),Xt=Rt.acquireProgram(Ft,Ht),Kt.set(Ht,Xt),K.uniforms=Ft.uniforms;let Zt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Zt.clippingPlanes=Bt.uniform),Ll(T,Ft),K.needsLights=uu(T),K.lightsStateVersion=Ct,K.needsLights&&(Zt.ambientLightColor.value=q.state.ambient,Zt.lightProbe.value=q.state.probe,Zt.directionalLights.value=q.state.directional,Zt.directionalLightShadows.value=q.state.directionalShadow,Zt.spotLights.value=q.state.spot,Zt.spotLightShadows.value=q.state.spotShadow,Zt.rectAreaLights.value=q.state.rectArea,Zt.ltc_1.value=q.state.rectAreaLTC1,Zt.ltc_2.value=q.state.rectAreaLTC2,Zt.pointLights.value=q.state.point,Zt.pointLightShadows.value=q.state.pointShadow,Zt.hemisphereLights.value=q.state.hemi,Zt.directionalShadowMap.value=q.state.directionalShadowMap,Zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Zt.spotShadowMap.value=q.state.spotShadowMap,Zt.spotLightMatrix.value=q.state.spotLightMatrix,Zt.spotLightMap.value=q.state.spotLightMap,Zt.pointShadowMap.value=q.state.pointShadowMap,Zt.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=Xt,K.uniformsList=null,Xt}function Pl(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=hs.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Ll(T,k){let Y=Wt.get(T);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function cu(T,k,Y,K,q){k.isScene!==!0&&(k=It),A.resetTextureUnits();let vt=k.fog,Ct=K.isMeshStandardMaterial?k.environment:null,Ft=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wn,Ht=(K.isMeshStandardMaterial?z:S).get(K.envMap||Ct),Kt=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xt=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Zt=!!Y.morphAttributes.position,Ie=!!Y.morphAttributes.normal,cn=!!Y.morphAttributes.color,ze=ii;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ze=x.toneMapping);let Dn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ae=Dn!==void 0?Dn.length:0,te=Wt.get(K),wa=m.state.lights;if(H===!0&&(st===!0||T!==v)){let pn=T===v&&K.id===U;Bt.setState(K,T,pn)}let Ce=!1;K.version===te.__version?(te.needsLights&&te.lightsStateVersion!==wa.state.version||te.outputColorSpace!==Ft||q.isBatchedMesh&&te.batching===!1||!q.isBatchedMesh&&te.batching===!0||q.isInstancedMesh&&te.instancing===!1||!q.isInstancedMesh&&te.instancing===!0||q.isSkinnedMesh&&te.skinning===!1||!q.isSkinnedMesh&&te.skinning===!0||q.isInstancedMesh&&te.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&te.instancingColor===!1&&q.instanceColor!==null||te.envMap!==Ht||K.fog===!0&&te.fog!==vt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Bt.numPlanes||te.numIntersection!==Bt.numIntersection)||te.vertexAlphas!==Kt||te.vertexTangents!==Xt||te.morphTargets!==Zt||te.morphNormals!==Ie||te.morphColors!==cn||te.toneMapping!==ze||zt.isWebGL2===!0&&te.morphTargetsCount!==Ae)&&(Ce=!0):(Ce=!0,te.__version=K.version);let xi=te.currentProgram;Ce===!0&&(xi=ir(K,k,q));let Il=!1,ws=!1,Aa=!1,Ze=xi.getUniforms(),_i=te.uniforms;if(At.useProgram(xi.program)&&(Il=!0,ws=!0,Aa=!0),K.id!==U&&(U=K.id,ws=!0),Il||v!==T){Ze.setValue(G,"projectionMatrix",T.projectionMatrix),Ze.setValue(G,"viewMatrix",T.matrixWorldInverse);let pn=Ze.map.cameraPosition;pn!==void 0&&pn.setValue(G,Ut.setFromMatrixPosition(T.matrixWorld)),zt.logarithmicDepthBuffer&&Ze.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ze.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,ws=!0,Aa=!0)}if(q.isSkinnedMesh){Ze.setOptional(G,q,"bindMatrix"),Ze.setOptional(G,q,"bindMatrixInverse");let pn=q.skeleton;pn&&(zt.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Ze.setValue(G,"boneTexture",pn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Ze.setOptional(G,q,"batchingTexture"),Ze.setValue(G,"batchingTexture",q._matricesTexture,A));let Ra=Y.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0&&zt.isWebGL2===!0)&&Vt.update(q,Y,xi),(ws||te.receiveShadow!==q.receiveShadow)&&(te.receiveShadow=q.receiveShadow,Ze.setValue(G,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(_i.envMap.value=Ht,_i.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),ws&&(Ze.setValue(G,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&hu(_i,Aa),vt&&K.fog===!0&&gt.refreshFogUniforms(_i,vt),gt.refreshMaterialUniforms(_i,K,nt,W,ut),hs.upload(G,Pl(te),_i,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(hs.upload(G,Pl(te),_i,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ze.setValue(G,"center",q.center),Ze.setValue(G,"modelViewMatrix",q.modelViewMatrix),Ze.setValue(G,"normalMatrix",q.normalMatrix),Ze.setValue(G,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let pn=K.uniformsGroups;for(let Ca=0,du=pn.length;Ca<du;Ca++)if(zt.isWebGL2){let Dl=pn[Ca];O.update(Dl,xi),O.bind(Dl,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function hu(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function uu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,k,Y){Wt.get(T.texture).__webglTexture=k,Wt.get(T.depthTexture).__webglTexture=Y;let K=Wt.get(T);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){let Y=Wt.get(T);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,Y=0){R=T,P=k,w=Y;let K=!0,q=null,vt=!1,Ct=!1;if(T){let Ht=Wt.get(T);Ht.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(G.FRAMEBUFFER,null),K=!1):Ht.__webglFramebuffer===void 0?A.setupRenderTarget(T):Ht.__hasExternalTextures&&A.rebindTextures(T,Wt.get(T.texture).__webglTexture,Wt.get(T.depthTexture).__webglTexture);let Kt=T.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ct=!0);let Xt=Wt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[k])?q=Xt[k][Y]:q=Xt[k],vt=!0):zt.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?q=Wt.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[Y]:q=Xt,b.copy(T.viewport),F.copy(T.scissor),Z=T.scissorTest}else b.copy(D).multiplyScalar(nt).floor(),F.copy($).multiplyScalar(nt).floor(),Z=X;if(At.bindFramebuffer(G.FRAMEBUFFER,q)&&zt.drawBuffers&&K&&At.drawBuffers(T,q),At.viewport(b),At.scissor(F),At.setScissorTest(Z),vt){let Ht=Wt.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ht.__webglTexture,Y)}else if(Ct){let Ht=Wt.get(T.texture),Kt=k||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.__webglTexture,Y||0,Kt)}U=-1},this.readRenderTargetPixels=function(T,k,Y,K,q,vt,Ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){At.bindFramebuffer(G.FRAMEBUFFER,Ft);try{let Ht=T.texture,Kt=Ht.format,Xt=Ht.type;if(Kt!==bn&&bt.convert(Kt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Zt=Xt===Vs&&(Dt.has("EXT_color_buffer_half_float")||zt.isWebGL2&&Dt.has("EXT_color_buffer_float"));if(Xt!==si&&bt.convert(Xt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===ei&&(zt.isWebGL2||Dt.has("OES_texture_float")||Dt.has("WEBGL_color_buffer_float")))&&!Zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-K&&Y>=0&&Y<=T.height-q&&G.readPixels(k,Y,K,q,bt.convert(Kt),bt.convert(Xt),vt)}finally{let Ht=R!==null?Wt.get(R).__webglFramebuffer:null;At.bindFramebuffer(G.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(T,k,Y=0){let K=Math.pow(2,-Y),q=Math.floor(k.image.width*K),vt=Math.floor(k.image.height*K);A.setTexture2D(k,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,T.x,T.y,q,vt),At.unbindTexture()},this.copyTextureToTexture=function(T,k,Y,K=0){let q=k.image.width,vt=k.image.height,Ct=bt.convert(Y.format),Ft=bt.convert(Y.type);A.setTexture2D(Y,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment),k.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,K,T.x,T.y,q,vt,Ct,Ft,k.image.data):k.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,K,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Ct,k.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,K,T.x,T.y,Ct,Ft,k.image),K===0&&Y.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(T,k,Y,K,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let vt=T.max.x-T.min.x+1,Ct=T.max.y-T.min.y+1,Ft=T.max.z-T.min.z+1,Ht=bt.convert(K.format),Kt=bt.convert(K.type),Xt;if(K.isData3DTexture)A.setTexture3D(K,0),Xt=G.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),Xt=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);let Zt=G.getParameter(G.UNPACK_ROW_LENGTH),Ie=G.getParameter(G.UNPACK_IMAGE_HEIGHT),cn=G.getParameter(G.UNPACK_SKIP_PIXELS),ze=G.getParameter(G.UNPACK_SKIP_ROWS),Dn=G.getParameter(G.UNPACK_SKIP_IMAGES),Ae=Y.isCompressedTexture?Y.mipmaps[q]:Y.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Ae.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ae.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),Y.isDataTexture||Y.isData3DTexture?G.texSubImage3D(Xt,q,k.x,k.y,k.z,vt,Ct,Ft,Ht,Kt,Ae.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Xt,q,k.x,k.y,k.z,vt,Ct,Ft,Ht,Ae.data)):G.texSubImage3D(Xt,q,k.x,k.y,k.z,vt,Ct,Ft,Ht,Kt,Ae),G.pixelStorei(G.UNPACK_ROW_LENGTH,Zt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ie),G.pixelStorei(G.UNPACK_SKIP_PIXELS,cn),G.pixelStorei(G.UNPACK_SKIP_ROWS,ze),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Dn),q===0&&K.generateMipmaps&&G.generateMipmap(Xt),At.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),At.unbindTexture()},this.resetState=function(){P=0,w=0,R=null,At.reset(),qt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===rl?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===fa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?Pi:Mh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Pi?Ee:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},No=class extends Ii{};No.prototype.isWebGL1Renderer=!0;var jr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hi=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},ko=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new M,ta=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ui=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ns,Ls=new M,is=new M,ss=new M,rs=new dt,Is=new dt,Uh=new Yt,wr=new M,Ds=new M,Ar=new M,th=new dt,oo=new dt,eh=new dt,di=class extends Fe{constructor(t=new ui){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ko(e,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new ta(i,3,0,!1)),ns.setAttribute("uv",new ta(i,2,3,!1))}this.geometry=ns,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),Uh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Rr(wr.set(-.5,-.5,0),ss,a,is,s,r),Rr(Ds.set(.5,-.5,0),ss,a,is,s,r),Rr(Ar.set(.5,.5,0),ss,a,is,s,r),th.set(0,0),oo.set(1,0),eh.set(1,1);let o=t.ray.intersectTriangle(wr,Ds,Ar,!1,Ls);if(o===null&&(Rr(Ds.set(-.5,.5,0),ss,a,is,s,r),oo.set(0,1),o=t.ray.intersectTriangle(wr,Ar,Ds,!1,Ls),o===null))return;let l=t.ray.origin.distanceTo(Ls);l<t.near||l>t.far||e.push({distance:l,point:Ls.clone(),uv:Ai.getInterpolation(Ls,wr,Ds,Ar,th,oo,eh,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Rr(n,t,e,i,s,r){rs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Is.x=r*rs.x-s*rs.y,Is.y=s*rs.x+r*rs.y):Is.copy(rs),n.copy(t),n.x+=Is.x,n.y+=Is.y,n.applyMatrix4(Uh)}var ea=class extends Re{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},as=new Yt,nh=new Yt,Cr=[],ih=new Tn,ig=new Yt,Us=new at,Ns=new li,fi=class extends at{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ea(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ig)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,as),ih.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,as),Ns.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(i),t.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),nh.multiplyMatrices(i,as),Us.matrixWorld=nh,Us.raycast(t,Cr);for(let a=0,o=Cr.length;a<o;a++){let l=Cr[a];l.instanceId=r,l.object=this,e.push(l)}Cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ea(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Di=class extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sh=new Yt,Fo=new qr,Pr=new li,Lr=new M,pi=class extends Fe{constructor(t=new ye,e=new Di){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;sh.copy(s).invert(),Fo.copy(t.ray).applyMatrix4(sh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,y=p;g<y;g++){let m=c.getX(g);Lr.fromBufferAttribute(u,m),rh(Lr,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,y=p;g<y;g++)Lr.fromBufferAttribute(u,g),rh(Lr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rh(n,t,e,i,s,r,a){let o=Fo.distanceSqToPoint(n);if(o<e){let l=new M;Fo.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var ms=class extends xn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new dt:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new M,s=[],r=[],a=[],o=new M,l=new Yt;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new M)}r[0]=new M,a[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ge(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ge(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},qs=class extends _n{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let i=e||new dt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oo=class extends qs{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ol(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Ir=new M,lo=new ol,co=new ol,ho=new ol,Xs=class extends _n{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new M){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ir.subVectors(s[0],s[1]).add(s[0]),c=Ir);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),lo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),co.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),ho.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(lo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),co.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ho.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(lo.calc(l),co.calc(l),ho.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new M().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ah(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function sg(n,t){let e=1-n;return e*e*t}function rg(n,t){return 2*(1-n)*n*t}function ag(n,t){return n*n*t}function Bs(n,t,e,i){return sg(n,t)+rg(n,e)+ag(n,i)}function og(n,t){let e=1-n;return e*e*e*t}function lg(n,t){let e=1-n;return 3*e*e*n*t}function cg(n,t){return 3*(1-n)*n*n*t}function hg(n,t){return n*n*n*t}function Hs(n,t,e,i,s){return og(n,t)+lg(n,e)+cg(n,i)+hg(n,s)}var na=class extends _n{constructor(t=new dt,e=new dt,i=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new dt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Hs(t,s.x,r.x,a.x,o.x),Hs(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends _n{constructor(t=new M,e=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new M){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Hs(t,s.x,r.x,a.x,o.x),Hs(t,s.y,r.y,a.y,o.y),Hs(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ia=class extends _n{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends _n{constructor(t=new M,e=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new M){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new M){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends _n{constructor(t=new dt,e=new dt,i=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new dt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Bs(t,s.x,r.x,a.x),Bs(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends _n{constructor(t=new M,e=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new M){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Bs(t,s.x,r.x,a.x),Bs(t,s.y,r.y,a.y),Bs(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(ah(o,l.x,c.x,h.x,u.x),ah(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},oh=Object.freeze({__proto__:null,ArcCurve:Oo,CatmullRomCurve3:Xs,CubicBezierCurve:na,CubicBezierCurve3:Bo,EllipseCurve:qs,LineCurve:ia,LineCurve3:Ho,QuadraticBezierCurve:sa,QuadraticBezierCurve3:zo,SplineCurve:ra}),Vo=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new oh[s.type]().fromJSON(s))}return this}},Go=class extends Vo{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ia(this.currentPoint.clone(),new dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new sa(this.currentPoint.clone(),new dt(t,e),new dt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new na(this.currentPoint.clone(),new dt(t,e),new dt(i,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ra(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new qs(t,e,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ys=class n extends ye{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ge(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new M,d=new dt,p=new M,g=new M,y=new M,m=0,f=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let _=0;_<=e;_++){let x=i+_*h*s,E=Math.sin(x),P=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*E,u.y=t[w].y,u.z=t[w].x*P,a.push(u.x,u.y,u.z),d.x=_/e,d.y=w/(t.length-1),o.push(d.x,d.y);let R=l[3*w+0]*E,U=l[3*w+1],v=l[3*w+0]*P;c.push(R,U,v)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){let E=x+_*t.length,P=E,w=E+t.length,R=E+t.length+1,U=E+1;r.push(P,w,U),r.push(R,U,w)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},$s=class n extends Ys{constructor(t=1,e=1,i=4,s=8){let r=new Go;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},aa=class n extends ye{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new M,h=new dt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=i+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ce=class n extends ye{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=i/2,f=0;_(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2));function _(){let E=new M,P=new M,w=0,R=(e-t)/i;for(let U=0;U<=r;U++){let v=[],b=U/r,F=b*(e-t)+t;for(let Z=0;Z<=s;Z++){let rt=Z/s,L=rt*l+o,N=Math.sin(L),W=Math.cos(L);P.x=F*N,P.y=-b*i+m,P.z=F*W,u.push(P.x,P.y,P.z),E.set(N,R,W).normalize(),d.push(E.x,E.y,E.z),p.push(rt,1-b),v.push(g++)}y.push(v)}for(let U=0;U<s;U++)for(let v=0;v<r;v++){let b=y[v][U],F=y[v+1][U],Z=y[v+1][U+1],rt=y[v][U+1];h.push(b,F,rt),h.push(F,Z,rt),w+=6}c.addGroup(f,w,0),f+=w}function x(E){let P=g,w=new dt,R=new M,U=0,v=E===!0?t:e,b=E===!0?1:-1;for(let Z=1;Z<=s;Z++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;let F=g;for(let Z=0;Z<=s;Z++){let L=Z/s*l+o,N=Math.cos(L),W=Math.sin(L);R.x=v*W,R.y=m*b,R.z=v*N,u.push(R.x,R.y,R.z),d.push(0,b,0),w.x=N*.5+.5,w.y=W*.5*b+.5,p.push(w.x,w.y),g++}for(let Z=0;Z<s;Z++){let rt=P+Z,L=F+Z;E===!0?h.push(L,L+1,rt):h.push(L+1,L,rt),U+=3}c.addGroup(f,U,E===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},dn=class n extends ce{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zs=class n extends ye{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let x=new M,E=new M,P=new M;for(let w=0;w<e.length;w+=3)p(e[w+0],x),p(e[w+1],E),p(e[w+2],P),l(x,E,P,_)}function l(_,x,E,P){let w=P+1,R=[];for(let U=0;U<=w;U++){R[U]=[];let v=_.clone().lerp(E,U/w),b=x.clone().lerp(E,U/w),F=w-U;for(let Z=0;Z<=F;Z++)Z===0&&U===w?R[U][Z]=v:R[U][Z]=v.clone().lerp(b,Z/F)}for(let U=0;U<w;U++)for(let v=0;v<2*(w-U)-1;v++){let b=Math.floor(v/2);v%2===0?(d(R[U][b+1]),d(R[U+1][b]),d(R[U][b])):(d(R[U][b+1]),d(R[U+1][b+1]),d(R[U+1][b]))}}function c(_){let x=new M;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(_),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){let _=new M;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let E=m(_)/2/Math.PI+.5,P=f(_)/Math.PI+.5;a.push(E,1-P)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let x=a[_+0],E=a[_+2],P=a[_+4],w=Math.max(x,E,P),R=Math.min(x,E,P);w>.9&&R<.1&&(x<.2&&(a[_+0]+=1),E<.2&&(a[_+2]+=1),P<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,x){let E=_*3;x.x=t[E+0],x.y=t[E+1],x.z=t[E+2]}function g(){let _=new M,x=new M,E=new M,P=new M,w=new dt,R=new dt,U=new dt;for(let v=0,b=0;v<r.length;v+=9,b+=6){_.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),E.set(r[v+6],r[v+7],r[v+8]),w.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),U.set(a[b+4],a[b+5]),P.copy(_).add(x).add(E).divideScalar(3);let F=m(P);y(w,b+0,_,F),y(R,b+2,x,F),y(U,b+4,E,F)}}function y(_,x,E,P){P<0&&_.x===1&&(a[x]=_.x-1),E.x===0&&E.z===0&&(a[x]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var oa=class n extends Zs{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},gs=class n extends Zs{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},la=class n extends ye{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,p=new M,g=new dt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let f=r+m/i*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(i+1);for(let f=0;f<i;f++){let _=f+m,x=_,E=_+i+1,P=_+i+2,w=_+1;o.push(x,E,w),o.push(E,P,w)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var De=class n extends ye{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new M,d=new M,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){let _=[],x=f/i,E=0;f===0&&a===0?E=.5/e:f===i&&l===Math.PI&&(E=-.5/e);for(let P=0;P<=e;P++){let w=P/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(w+E,1-x),_.push(c++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<e;_++){let x=h[f][_+1],E=h[f][_],P=h[f+1][_],w=h[f+1][_+1];(f!==0||a>0)&&p.push(x,E,w),(f!==i-1||l<Math.PI)&&p.push(E,P,w)}this.setIndex(p),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ca=class n extends Zs{constructor(t=1,e=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},nn=class n extends ye{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new M,u=new M,d=new M;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,_=(s+1)*p+g;a.push(y,m,_),a.push(m,f,_)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xt=class extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},In=class extends xt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Dr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ug(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ys=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wo=class extends ys{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dc:r=t,o=2*e-i;break;case fc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dc:a=t,l=2*i-e;break;case fc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,_=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*y+.5*g,E=p*m-p*y;for(let P=0;P!==o;++P)r[P]=f*a[h+P]+_*a[c+P]+x*a[l+P]+E*a[u+P];return r}},qo=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Xo=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case kr:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ug(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ka,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=kr;var Ui=class extends An{};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Nr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends An{};Yo.prototype.ValueTypeName="color";var $o=class extends An{};$o.prototype.ValueTypeName="number";var Zo=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)oe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Js=class extends An{InterpolantFactoryMethodLinear(t){return new Zo(this.times,this.values,this.getValueSize(),t)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.DefaultInterpolation=kr;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends An{};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Nr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends An{};Jo.prototype.ValueTypeName="vector";var Ko=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},dg=new Ko,Qo=class{constructor(t){this.manager=t!==void 0?t:dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ha=class extends Ks{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},uo=new Yt,lh=new M,ch=new M,ua=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(lh),ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ch),e.updateMatrixWorld(),uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var hh=new Yt,ks=new M,fo=new M,jo=class extends ua{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ks.setFromMatrixPosition(t.matrixWorld),i.position.copy(ks),fo.copy(i.position),fo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(fo),i.updateMatrixWorld(),s.makeTranslation(-ks.x,-ks.y,-ks.z),hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh)}},ki=class extends Ks{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},tl=class extends ua{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mi=class extends Ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new tl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ll="\\[\\]\\.:\\/",fg=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",pg="[^"+ll.replace("\\.","")+"]",mg=/((?:WC+[\/:])*)/.source.replace("WC",cl),gg=/(WCOD+)?/.source.replace("WCOD",pg),yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),_g=new RegExp("^"+mg+gg+yg+xg+"$"),vg=["material","materials","bones","map"],el=class{constructor(t,e,i){let s=i||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Se=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fg,"")}static parseTrackName(t){let e=_g.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);vg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=el;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zy=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Nh="orbRushSaveV1";function Mg(){try{return new URLSearchParams(location.search).has("debug")}catch{return!1}}function hl(...n){Mg()&&console.info("[OrbRush SDK]",...n)}var ul=class{constructor(){let t=typeof window!="undefined"?window.ytgame:void 0;this.available=!!t,this.inPlayables=!!(t&&t.IN_PLAYABLES_ENV),this.audioEnabled=!0,this.handlers={},this.loaded=!1,this.loadPromise=null,this.pendingSave=null,this.saveInFlight=!1,this.lastScore=0,this.calls=[],this.firstFrameSent=!1,this.gameReadySent=!1,this.loadedSave=null,window.__ORB=window.__ORB||{},window.__ORB.sdkCalls=this.calls,window.__ORB.inPlayables=this.inPlayables}record(t,e=!0,i=null){this.calls.push({name:t,ok:e,error:i?String(i):null,at:Math.round(performance.now())}),hl(e?"ok":"error",t,i||"")}init(t={}){this.handlers=t;let e=window.ytgame;if(!this.inPlayables||!e){hl("running outside Playables; using local save fallback"),this.audioEnabled=!0;return}try{this.audioEnabled=e.system.isAudioEnabled(),this.record("isAudioEnabled")}catch(i){this.record("isAudioEnabled",!1,i)}try{e.system.onAudioEnabledChange(i=>{var s;this.audioEnabled=!!i,this.record("onAudioEnabledChange"),(s=t.onAudioEnabledChange)==null||s.call(t,!!i)})}catch(i){this.record("onAudioEnabledChange",!1,i)}try{e.system.onPause(()=>{var i;this.record("onPause"),(i=t.onPause)==null||i.call(t)})}catch(i){this.record("onPause",!1,i)}try{e.system.onResume(()=>{var i;this.record("onResume"),(i=t.onResume)==null||i.call(t)})}catch(i){this.record("onResume",!1,i)}hl("initialised inside Playables")}firstFrameReady(){if(!this.firstFrameSent)if(this.firstFrameSent=!0,this.inPlayables&&window.ytgame)try{window.ytgame.game.firstFrameReady(),this.record("firstFrameReady")}catch(t){this.record("firstFrameReady",!1,t)}else this.record("firstFrameReady.local")}gameReady(){if(!this.gameReadySent)if(this.gameReadySent=!0,this.inPlayables&&window.ytgame)try{window.ytgame.game.gameReady(),this.record("gameReady")}catch(t){this.record("gameReady",!1,t)}else this.record("gameReady.local")}load(){if(this.loadPromise)return this.loadPromise;if(!this.inPlayables||!window.ytgame){try{this.loadedSave=window.localStorage.getItem(Nh)}catch{this.loadedSave=null}return this.loaded=!0,this.loadPromise=Promise.resolve(this.loadedSave),this.record("loadData.local",!0),this.loadPromise}return this.record("loadData.start"),this.loadPromise=(async()=>{try{let t=await window.ytgame.game.loadData();this.loadedSave=typeof t=="string"&&t.length?t:null,this.record("loadData")}catch(t){this.loadedSave=null,this.record("loadData",!1,t)}finally{this.loaded=!0,this.flushPendingSave()}return this.loadedSave})(),this.loadPromise}async save(t){this.pendingSave=t,this.loaded&&await this.flushPendingSave()}async flushPendingSave(){if(!this.loaded||this.pendingSave==null||this.saveInFlight)return;let t=this.pendingSave;if(this.pendingSave=null,!this.inPlayables||!window.ytgame){try{window.localStorage.setItem(Nh,t),this.record("saveData.local")}catch(e){this.record("saveData.local",!1,e)}return}this.saveInFlight=!0;try{await window.ytgame.game.saveData(t),this.record("saveData")}catch(e){this.record("saveData",!1,e),this.pendingSave==null&&(this.pendingSave=t)}finally{this.saveInFlight=!1,this.pendingSave!=null&&this.flushPendingSave()}}async sendScore(t){let e=Math.max(0,Math.round(t));if(!this.inPlayables||!window.ytgame){this.lastScore=Math.max(this.lastScore,e),this.record("sendScore.local");return}if(!(e<=this.lastScore))try{await window.ytgame.engagement.sendScore({value:e}),this.lastScore=e,this.record("sendScore")}catch(i){this.record("sendScore",!1,i)}}getAudioEnabled(){if(this.inPlayables&&window.ytgame)try{return window.ytgame.system.isAudioEnabled()}catch{return this.audioEnabled}return this.audioEnabled}logError(t){if(console.error("[OrbRush]",t),this.inPlayables&&window.ytgame)try{window.ytgame.health.logError(),this.record("logError")}catch(e){this.record("logError",!1,e)}}},Ye=new ul;var Mt=(n,t,e)=>n<t?t:n>e?e:n,Sg=(n,t,e)=>n+(t-n)*e;function on(n,t,e,i){return Sg(n,t,1-Math.exp(-e*i))}function he(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Lt(n,t,e){return t+(e-t)*n()}function kh(n,t){return t[Math.floor(n()*t.length)%t.length]}function ne(n,t){let e=document.createElement("canvas");e.width=n,e.height=t;let i=e.getContext("2d");return{canvas:e,ctx:i}}function se(n,{repeat:t=!1,anisotropy:e=4,srgb:i=!0}={}){let s=new ms(n);return i&&(s.colorSpace=Ee),t&&(s.wrapS=ai,s.wrapT=ai),s.anisotropy=e,s.needsUpdate=!0,s}function dl(n){if(!Number.isFinite(n))return"\u2014";let t=Math.max(0,Math.round(n)),e=Math.floor(t/60),i=t%60;return`${e}:${String(i).padStart(2,"0")}`}function _s(n){return Math.round(n).toLocaleString("en-US")}function Fh(){return window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function vs(){return window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}function Rn(n,t){if(t&&navigator.vibrate)try{navigator.vibrate(n)}catch{}}function Oh(n=128,t="rgba(255,255,255,1)",e="rgba(255,255,255,0)"){let{canvas:i,ctx:s}=ne(n,n),r=s.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return r.addColorStop(0,t),r.addColorStop(.35,"rgba(255,255,255,0.6)"),r.addColorStop(1,e),s.fillStyle=r,s.fillRect(0,0,n,n),se(i,{srgb:!0})}function Ms(n){let t=new Set,e=new Set,i=new Set;n.traverse(s=>{var a;s.geometry&&t.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];s.customDepthMaterial&&r.push(s.customDepthMaterial);for(let o of r){e.add(o);for(let l of Object.keys(o)){let c=o[l];c&&c.isTexture&&!((a=c.userData)!=null&&a.persistent)&&i.add(c)}}});for(let s of t)s.dispose();for(let s of i)s.dispose();for(let s of e)s.dispose();n.parent&&n.parent.remove(n)}var fl=class{constructor(){this.x=0,this.y=0,this.z=0,this.h=0,this.points=[[0,0,0]]}push(){this.points.push([this.x,this.y,this.z])}straight(t,e=0){let i=Math.max(1,Math.ceil(t/6)),s=t/i;for(let r=0;r<i;r++)this.x+=Math.sin(this.h)*s,this.z+=Math.cos(this.h)*s,this.y+=e/i,this.push();return this}turn(t,e,i=0){let s=t*Math.PI/180,r=Math.abs(s)*e,a=Math.max(2,Math.ceil(r/5)),o=r/a,l=s/a;for(let c=0;c<a;c++)this.h+=l*.5,this.x+=Math.sin(this.h)*o,this.z+=Math.cos(this.h)*o,this.y+=i/a,this.h+=l*.5,this.push();return this}};function Eg(n){let t=he(n*7919+101),e=[[.035,.125],[.155,.26],[.29,.4],[.43,.54],[.57,.67],[.7,.81],[.845,.955]],i=[];for(let s=0;s<e.length;s++){let[r,a]=e[s],o=kh(t,["line","wave","slide","line","wave","slide"]);i.push({kind:o,from:r,to:a,lat:Lt(t,-.9,.9),lat2:Lt(t,-1.9,1.9),amp:Lt(t,1,1.9),n:4+Math.floor(t()*3),waves:1+Math.floor(t()*2),arc:Lt(t,.7,1.8)})}return i}function bg(n,t=3){let e=he(n*131+7),i=[.18,.36,.52,.68,.84],s=[];for(let r=0;r<t;r++)s.push({at:i[Math.min(i.length-1,Math.floor((r+.5)*(i.length/t)))]+(e()-.5)*.03,lat:(e()>.5?1:-1)*Lt(e,.9,1.8)});return s}function le(n,t,e,i,s,r={}){let a=new fl;s(a);let o=n*977+31;return{number:n,name:t,themeIndex:e,width:i,points:a.points,gaps:r.gaps||[],rails:r.rails||[],obstacles:r.obstacles||[],boosts:r.boosts||[],checkpoints:r.checkpoints||[.36,.7],tutorial:!!r.tutorial,coinRuns:r.coinRuns||Eg(o),gems:r.gems||bg(o,Math.min(3,1+Math.floor(n/4)))}}var wt=(n,t,e)=>({type:"hammer",at:e,speed:n,phase:t}),_e=(n,t,e)=>({type:"wrecking",at:e,speed:n,phase:t}),re=(n,t,e,i)=>({type:"block",at:i,speed:n,phase:t,amp:e}),ae=(n,t,e,i=1)=>({type:"spinner",at:e,speed:n,phase:t,side:i}),xe=(n,t,e,i)=>({type:"tank",at:i,speed:n,phase:t,amp:e}),Qe=[le(1,"First Roll",0,7.2,n=>{n.straight(42),n.turn(20,26),n.straight(40),n.turn(-24,24),n.straight(38,-1.8),n.turn(12,30),n.straight(30)},{tutorial:!0,rails:[{from:.4,to:.56}],checkpoints:[.52],boosts:[],gaps:[],obstacles:[]}),le(2,"Sky Steps",0,6.8,n=>{n.straight(32),n.turn(-24,22),n.straight(48),n.turn(28,24),n.straight(38,-2),n.turn(-16,26),n.straight(42)},{gaps:[{at:.36,len:5.5},{at:.73,len:6}],obstacles:[wt(1.5,.2,.22),wt(1.7,1.4,.86)],checkpoints:[.3,.64],rails:[{from:.5,to:.62}],boosts:[{at:.55}]}),le(3,"Twist & Turn",0,6.4,n=>{n.straight(28),n.turn(32,18),n.straight(32),n.turn(-34,17),n.straight(36,-2),n.turn(24,20),n.straight(28),n.turn(-20,22),n.straight(34)},{gaps:[{at:.3,len:5.5},{at:.78,len:6}],obstacles:[wt(1.6,.6,.2),re(1.15,.4,.6,.55),ae(1.35,.2,.86)],checkpoints:[.34,.66],boosts:[{at:.5}]}),le(4,"Dusk Dash",1,6.6,n=>{n.straight(38),n.turn(-22,24),n.straight(46,-2.4),n.turn(26,22),n.straight(38),n.turn(-14,28),n.straight(44,-1),n.turn(10,30),n.straight(30)},{gaps:[{at:.4,len:6.5},{at:.76,len:7}],obstacles:[_e(1.35,.4,.27),_e(1.5,1.8,.61),wt(1.8,.6,.89)],checkpoints:[.35,.68],rails:[{from:.48,to:.6}],boosts:[{at:.34},{at:.7}]}),le(5,"Hammer Time",1,6,n=>{n.straight(30),n.turn(30,18),n.straight(34),n.turn(-30,16),n.straight(42,-2),n.turn(34,17),n.straight(32),n.turn(-26,18),n.straight(40)},{gaps:[{at:.27,len:5.5},{at:.61,len:6},{at:.9,len:5}],obstacles:[wt(1.7,.3,.17),re(1.2,.9,.62,.35),wt(1.9,1.5,.45),ae(1.5,.6,.53),re(1.25,2.1,.66,.7),wt(2,.9,.8)],checkpoints:[.31,.61,.87],boosts:[{at:.42},{at:.82}]}),le(6,"Sunset Sprint",1,6.6,n=>{n.straight(36),n.turn(-16,30),n.straight(62,-3),n.turn(20,26),n.straight(52,-2),n.turn(-24,22),n.straight(38)},{gaps:[{at:.34,len:7},{at:.68,len:8}],obstacles:[_e(1.6,.8,.5),wt(2,.2,.83)],checkpoints:[.32,.66],rails:[{from:.5,to:.62}],boosts:[{at:.28},{at:.6},{at:.85}]}),le(7,"Neon Nights",2,6.2,n=>{n.straight(32),n.turn(24,20),n.straight(38),n.turn(-28,18),n.straight(36),n.turn(30,17),n.straight(32),n.turn(-24,20),n.straight(36)},{gaps:[{at:.29,len:5.5},{at:.7,len:6.5}],obstacles:[ae(1.3,.4,.19),re(1.3,.2,.64,.44),ae(1.55,1.1,.57),re(1.35,1.7,.68,.82),wt(1.9,.5,.93)],checkpoints:[.32,.64],boosts:[{at:.67}]}),le(8,"Laser Bridge",2,5.8,n=>{n.straight(32),n.turn(-30,16),n.straight(28),n.turn(30,16),n.straight(48,-2),n.turn(-20,24),n.straight(34),n.turn(26,18),n.straight(32),n.straight(20)},{gaps:[{at:.4,len:5.5},{at:.84,len:6}],obstacles:[_e(1.5,.2,.2),re(1.2,.7,.6,.33),wt(1.8,1.3,.54),re(1.4,2,.68,.72),wt(2,.4,.91)],checkpoints:[.35,.68],rails:[{from:.36,to:.5},{from:.64,to:.78}],boosts:[{at:.32},{at:.8}]}),le(9,"Midnight Gauntlet",2,6.2,n=>{n.straight(28),n.turn(36,14),n.straight(30),n.turn(-36,14),n.straight(32,-2),n.turn(28,16),n.straight(30),n.turn(-28,16),n.straight(32),n.turn(20,20),n.straight(32)},{gaps:[{at:.23,len:5},{at:.55,len:5.5},{at:.84,len:6}],obstacles:[re(1.35,.2,.6,.15),wt(1.8,.7,.34),ae(1.5,1.3,.46),_e(1.6,.4,.58),wt(1.9,1.8,.67),re(1.5,.9,.66,.76),wt(2.1,.2,.94)],checkpoints:[.27,.53,.8],boosts:[{at:.5},{at:.8}]}),le(10,"Candy Curves",3,6.4,n=>{n.straight(30),n.turn(-26,18),n.straight(36),n.turn(26,18),n.straight(32),n.turn(-30,16),n.straight(38),n.turn(30,16),n.straight(32),n.turn(-16,24),n.straight(30)},{gaps:[{at:.33,len:6},{at:.72,len:7}],obstacles:[ae(1.4,.2,.19),wt(1.8,.8,.42),re(1.35,1.4,.62,.5),ae(1.6,.5,.61),wt(2,1.9,.87)],checkpoints:[.35,.68],rails:[{from:.56,to:.68}],boosts:[{at:.62}]}),le(11,"Sugar Rush",3,6.2,n=>{n.straight(32),n.turn(28,17),n.straight(44,-2),n.turn(-30,16),n.straight(32),n.turn(32,15),n.straight(46,-2),n.turn(-28,17),n.straight(38),n.turn(20,20),n.straight(30)},{gaps:[{at:.3,len:6},{at:.56,len:6.5},{at:.82,len:7}],obstacles:[_e(1.55,.3,.17),wt(1.9,.9,.4),ae(1.5,1.6,.5),re(1.5,.5,.66,.51),wt(2,2.2,.69),re(1.6,1.2,.7,.78),wt(2.1,.4,.91)],checkpoints:[.33,.6,.85],boosts:[{at:.24},{at:.52},{at:.8}]}),le(12,"Skyline Finale",3,6.4,n=>{n.straight(36),n.turn(-22,20),n.straight(38),n.turn(24,18),n.straight(36,-2),n.turn(-26,17),n.straight(44),n.turn(28,16),n.straight(38,-1),n.turn(-24,18),n.straight(36),n.turn(16,22),n.straight(32)},{gaps:[{at:.25,len:6},{at:.5,len:7},{at:.75,len:7.5}],obstacles:[wt(1.8,.3,.14),_e(1.65,.9,.33),ae(1.6,1.6,.44),re(1.6,.4,.66,.57),_e(1.8,1.2,.65),wt(2.1,.6,.82),ae(1.8,2.1,.9)],checkpoints:[.3,.55,.8],boosts:[{at:.22},{at:.47},{at:.72},{at:.94}]}),le(13,"Iron Front",4,6.8,n=>{n.straight(40,1.2),n.turn(26,20,1.5),n.straight(46,3.4),n.turn(-30,18,-1.8),n.straight(42,-4.2),n.turn(24,20,1),n.straight(48,2.6),n.turn(-18,24,-.9),n.straight(36)},{gaps:[{at:.31,len:6},{at:.74,len:6.5}],obstacles:[xe(.9,.2,.64,.18),wt(1.9,.7,.38),_e(1.55,1.3,.55),xe(1.05,1.8,.6,.82)],checkpoints:[.3,.55,.8],rails:[{from:.42,to:.56}],boosts:[{at:.44},{at:.9}]}),le(14,"No Man's Land",4,6.2,n=>{n.straight(36),n.turn(30,18,1.2),n.straight(30,-1.5),n.turn(-34,16,-1.3),n.straight(44,2.8),n.turn(32,17,-2.4),n.straight(40,-3.5),n.turn(-28,17,1.2),n.straight(34,1.5),n.turn(22,20,-.8),n.straight(36)},{gaps:[{at:.26,len:5.5},{at:.58,len:6},{at:.86,len:6}],obstacles:[wt(1.9,.3,.16),xe(1,.9,.6,.33),re(1.35,.5,.66,.48),xe(1.12,1.7,.58,.63),wt(2.1,1.2,.78),xe(.95,2.3,.66,.91)],checkpoints:[.29,.55,.82],rails:[{from:.36,to:.48},{from:.68,to:.78}],boosts:[{at:.22},{at:.52},{at:.9}]}),le(15,"Dangerous Hills",5,6.6,n=>{n.straight(38,5.5),n.turn(-18,26,2.5),n.straight(36,7),n.turn(16,30,1.5),n.straight(44,-8),n.turn(-24,22,-2.5),n.straight(40,-7),n.turn(22,24,2),n.straight(38,5),n.turn(-14,30,-1),n.straight(34)},{gaps:[{at:.35,len:5.5},{at:.72,len:6}],obstacles:[wt(1.7,.4,.23),re(1.2,.9,.55,.51),wt(1.85,1.7,.81)],checkpoints:[.32,.61,.86],rails:[{from:.12,to:.23},{from:.4,to:.5},{from:.63,to:.72}],boosts:[{at:.28},{at:.58},{at:.88}]}),le(16,"Gravity Hills",5,6.4,n=>{n.straight(34,6.5),n.turn(22,24,3),n.straight(40,-9.5),n.turn(-30,18,-3.5),n.straight(32,8),n.turn(26,20,2.5),n.straight(38,-8),n.turn(-32,17,-3),n.straight(36,7.5),n.turn(20,26,2),n.straight(30,-5.5),n.turn(-16,28,-1.5),n.straight(32)},{gaps:[{at:.22,len:5},{at:.53,len:5.5},{at:.84,len:6}],obstacles:[wt(1.8,.5,.36),wt(2,1.4,.71)],checkpoints:[.3,.58,.87],rails:[{from:.1,to:.2},{from:.4,to:.5},{from:.66,to:.77}],boosts:[{at:.18},{at:.4},{at:.68},{at:.92}]}),le(17,"Coaster Rush",6,6.8,n=>{n.straight(36,6.5),n.turn(-22,24,2.5),n.straight(44,8.5),n.turn(26,18,-3),n.straight(38,-10),n.turn(-34,15,-2.5),n.straight(30,7.5),n.turn(30,16,2),n.straight(36,-8.5),n.turn(-24,18,-2),n.straight(40,-3),n.turn(22,22,1),n.straight(34,3.5),n.turn(-18,26,-1),n.straight(32)},{gaps:[{at:.28,len:6},{at:.57,len:7},{at:.82,len:7.5}],obstacles:[xe(1.15,.3,.62,.18),_e(1.7,.8,.44),ae(1.6,1.4,.62),wt(2,.5,.76),re(1.5,1.9,.68,.9)],checkpoints:[.28,.55,.81],rails:[{from:.1,to:.2},{from:.38,to:.49},{from:.62,to:.73}],boosts:[{at:.16},{at:.46},{at:.72},{at:.94}]}),le(18,"Final Drop",6,6.6,n=>{n.straight(34,3),n.turn(20,22,4),n.straight(46,9),n.turn(-26,18,-1),n.straight(36,-12),n.turn(30,15,-3),n.straight(30,6),n.turn(-32,16,-2),n.straight(34,-9),n.turn(24,20,2),n.straight(40,5),n.turn(-28,19,-2),n.straight(36,-4),n.turn(18,24,1),n.straight(34)},{gaps:[{at:.24,len:6.5},{at:.5,len:7},{at:.76,len:8}],obstacles:[xe(1.2,.2,.64,.14),wt(1.9,.8,.32),_e(1.75,1.5,.44),xe(1.3,2.2,.6,.6),ae(1.8,.7,.7),wt(2.2,1.9,.86),re(1.7,1.1,.7,.95)],checkpoints:[.26,.52,.78],rails:[{from:.34,to:.45},{from:.6,to:.7}],boosts:[{at:.2},{at:.44},{at:.68},{at:.9}]}),le(19,"Sky Tower",2,6,n=>{n.straight(28),n.turn(22,18),n.straight(36),n.turn(-28,16),n.straight(32,-3),n.turn(20,18),n.straight(38),n.turn(-22,20),n.straight(34),n.turn(24,18),n.straight(30)},{gaps:[{at:.36,len:6},{at:.68,len:6.5}],obstacles:[ae(1.4,.6,.15),wt(1.8,.7,.32),re(1.3,.5,.58,.42),xe(1.1,1.2,.6,.88),ae(1.6,.9,.62),wt(2,.4,.85)],checkpoints:[.34,.66],rails:[{from:.48,to:.6}],boosts:[{at:.32},{at:.7}]}),le(20,"Ice Cavern",4,6.4,n=>{n.straight(34,-2),n.turn(26,20,3),n.straight(40,8),n.turn(-30,18,-4),n.straight(36,-10),n.turn(24,16,2),n.straight(32,4),n.turn(-28,18,-2),n.straight(30,-3),n.turn(20,20,1),n.straight(34)},{gaps:[{at:.25,len:6.5},{at:.53,len:7},{at:.82,len:7.5}],obstacles:[_e(1.4,.9,.28),wt(1.9,.6,.38),xe(1.05,1.4,.58,.36),ae(1.5,1.2,.46),re(1.6,.8,.66,.55),_e(1.65,1.5,.65),wt(2,.9,.8)],checkpoints:[.28,.55,.8],rails:[{from:.12,to:.24},{from:.4,to:.52},{from:.65,to:.76}],boosts:[{at:.22},{at:.48},{at:.72},{at:.92}]}),le(21,"Laser Lab",2,5.8,n=>{n.straight(30),n.turn(24,18),n.straight(28),n.turn(-24,16),n.straight(36,-3),n.turn(20,18),n.straight(30,2),n.turn(-30,18,-2),n.straight(34),n.turn(26,16),n.straight(42)},{gaps:[{at:.34,len:6},{at:.7,len:6.5}],obstacles:[wt(1.7,.5,.18),re(1.25,.8,.55,.35),ae(1.55,1.1,.57),wt(1.9,.8,.42),re(1.35,1.6,.62,.68),xe(1,1.7,.58,.72),ae(1.7,.9,.72)],checkpoints:[.32,.64],rails:[{from:.48,to:.62},{from:.68,to:.82}],boosts:[{at:.3},{at:.65},{at:.9}]}),le(22,"Crimson Climb",5,6.6,n=>{n.straight(38),n.turn(20,22,3),n.straight(52,-8),n.turn(-26,18,2),n.straight(44,6),n.turn(20,20,-1.5),n.straight(36,-5),n.turn(-24,18,-3),n.straight(30,4),n.turn(18,22,1),n.straight(34)},{gaps:[{at:.28,len:6},{at:.55,len:6.5},{at:.82,len:7}],obstacles:[xe(1.2,.3,.64,.16),wt(1.85,.9,.35),_e(1.5,1.2,.55),ae(1.6,1.5,.62),re(1.5,.9,.66,.6),xe(1.05,1.8,.6,.86),wt(2.1,1.1,.9)],checkpoints:[.26,.52,.78],rails:[{from:.36,to:.48},{from:.62,to:.74}],boosts:[{at:.2},{at:.44},{at:.68},{at:.92}]}),le(23,"Cosmic Finale",3,6.8,n=>{n.straight(40,2),n.turn(22,24,4),n.straight(50,10),n.turn(-28,20,-3),n.straight(38,-12),n.turn(24,18,2),n.straight(42,-6),n.turn(-22,16,-2),n.straight(34,5),n.turn(18,20,1),n.straight(36)},{gaps:[{at:.31,len:6},{at:.56,len:6.5},{at:.82,len:7.5}],obstacles:[wt(1.9,.7,.32),xe(1.2,.9,.64,.18),_e(1.75,1.4,.44),ae(1.8,.8,.7),wt(2,1.1,.76),re(1.7,1.3,.7,.92),xe(1.3,2.2,.6,.95)],checkpoints:[.28,.54,.8],rails:[{from:.34,to:.46},{from:.58,to:.7}],boosts:[{at:.18},{at:.44},{at:.68},{at:.94}]}),le(24,"Molten Rush",7,6.8,n=>{n.straight(36,-2),n.turn(24,20,2),n.straight(40,6),n.turn(-30,17,-3),n.straight(34,-7),n.turn(22,18,1.5),n.straight(38,5),n.turn(-26,16,-2),n.straight(32,-6),n.turn(20,20,1),n.straight(34)},{gaps:[{at:.23,len:6},{at:.52,len:7},{at:.81,len:7}],obstacles:[wt(1.9,.3,.14),xe(1.15,.8,.62,.3),_e(1.7,1.4,.42),ae(1.7,.5,.56),re(1.5,1.1,.66,.66),xe(1.25,1.9,.6,.72),wt(2.1,1.6,.88),_e(1.8,.7,.94)],checkpoints:[.25,.5,.76],rails:[{from:.32,to:.44},{from:.58,to:.7}],boosts:[{at:.18},{at:.45},{at:.7},{at:.93}]}),le(25,"Frostbite Falls",8,6.2,n=>{n.straight(32),n.turn(-28,16),n.straight(30,-4),n.turn(32,15,-2),n.straight(42,-6),n.turn(-24,18,-3),n.straight(36,5),n.turn(26,16,2),n.straight(30,-6),n.turn(-18,22,-1),n.straight(36)},{gaps:[{at:.26,len:6},{at:.55,len:6.5},{at:.84,len:7}],obstacles:[ae(1.5,.4,.16),re(1.3,.9,.58,.32),wt(1.9,1.2,.46),_e(1.6,.3,.58),xe(1.1,1.7,.6,.67),ae(1.7,.8,.75),wt(2,1.5,.9)],checkpoints:[.28,.55,.82],rails:[{from:.14,to:.24},{from:.44,to:.56},{from:.68,to:.78}],boosts:[{at:.2},{at:.5},{at:.74},{at:.94}]}),le(26,"Neon Overdrive",2,5.8,n=>{n.straight(28),n.turn(30,15),n.straight(26),n.turn(-34,14),n.straight(30,-2),n.turn(28,15),n.straight(34),n.turn(-26,16),n.straight(28,2),n.turn(32,14),n.straight(30),n.turn(-20,18),n.straight(32)},{gaps:[{at:.22,len:5.5},{at:.48,len:6},{at:.74,len:6.5},{at:.93,len:5}],obstacles:[re(1.3,.3,.6,.12),ae(1.6,.7,.26),wt(1.8,1.3,.36),re(1.4,.5,.64,.43),ae(1.7,1.8,.5),wt(2,.2,.6),re(1.5,1.1,.68,.68),ae(1.8,.9,.8),wt(2.1,1.7,.88)],checkpoints:[.24,.5,.76],rails:[{from:.38,to:.48},{from:.62,to:.72}],boosts:[{at:.16},{at:.42},{at:.68},{at:.9}]}),le(27,"Storm Summit",5,6.4,n=>{n.straight(30,8),n.turn(22,22,4),n.straight(36,10),n.turn(-26,18,-6),n.straight(34,-12),n.turn(30,16,-4),n.straight(38,9),n.turn(-22,18,5),n.straight(30,-8),n.turn(18,22,-2),n.straight(34)},{gaps:[{at:.24,len:6},{at:.5,len:7},{at:.78,len:7.5}],obstacles:[xe(1.1,.2,.62,.15),wt(1.9,.9,.34),_e(1.7,1.4,.52),xe(1.2,.6,.6,.63),ae(1.8,1.2,.72),re(1.5,1.8,.66,.82),wt(2.1,.5,.92)],checkpoints:[.26,.52,.78],rails:[{from:.1,to:.2},{from:.36,to:.47},{from:.64,to:.75}],boosts:[{at:.18},{at:.44},{at:.7},{at:.93}]}),le(28,"Ember Crown",7,6.6,n=>{n.straight(38,4),n.turn(-24,22,3),n.straight(46,9),n.turn(30,18,-5),n.straight(38,-12),n.turn(-28,17,-3),n.straight(34,7),n.turn(24,18,4),n.straight(40,-9),n.turn(-20,20,-2),n.straight(34,5),n.turn(26,16,2),n.straight(38)},{gaps:[{at:.2,len:6},{at:.43,len:6.5},{at:.68,len:7},{at:.89,len:6}],obstacles:[wt(1.9,.4,.1),xe(1.2,.9,.64,.24),_e(1.8,1.5,.34),ae(1.8,.6,.45),re(1.6,1.2,.68,.53),xe(1.35,.3,.62,.63),wt(2.1,1.8,.73),_e(1.9,.8,.82),ae(1.9,1.4,.93)],checkpoints:[.22,.47,.72],rails:[{from:.28,to:.4},{from:.54,to:.66},{from:.78,to:.88}],boosts:[{at:.16},{at:.4},{at:.64},{at:.86}]}),le(29,"Jade Ascent",9,6.9,n=>{n.straight(36,3),n.turn(26,20,2),n.straight(40,7),n.turn(-30,18,-4),n.straight(34,-6),n.turn(24,22,2),n.straight(38,5),n.turn(-20,17,-2),n.straight(32)},{gaps:[{at:.26,len:6},{at:.55,len:6.5},{at:.82,len:6.5}],obstacles:[wt(1.7,.4,.15),ae(1.5,.8,.34),re(1.4,1.4,.6,.55),_e(1.6,.2,.7),xe(1.15,1.1,.62,.86),wt(2,.7,.94)],checkpoints:[.28,.56,.84],rails:[{from:.34,to:.46},{from:.62,to:.74}],boosts:[{at:.18},{at:.46},{at:.73},{at:.93}]}),le(30,"Serpent Temple",9,6.4,n=>{n.straight(30),n.turn(34,16),n.straight(28,2),n.turn(-38,15,-2),n.straight(34,5),n.turn(30,17,2),n.straight(30,-4),n.turn(-28,16,-2),n.straight(36,6),n.turn(22,20,1),n.straight(30,-3),n.turn(-18,18,-1),n.straight(34)},{gaps:[{at:.2,len:5.5},{at:.42,len:6},{at:.65,len:6.5},{at:.86,len:6}],obstacles:[ae(1.4,.2,.12),wt(1.8,.9,.3),xe(1.1,1.5,.6,.49),re(1.5,.6,.66,.58),_e(1.7,1.2,.72),wt(2,.1,.8),ae(1.6,1.8,.9),re(1.3,.8,.7,.96)],checkpoints:[.22,.45,.68,.88],rails:[{from:.12,to:.22},{from:.5,to:.6},{from:.76,to:.86}],boosts:[{at:.16},{at:.4},{at:.62},{at:.84}]}),le(31,"Starlight Drift",10,6.8,n=>{n.straight(34,2),n.turn(-26,22,-1),n.straight(42,4),n.turn(32,18,2),n.straight(34,-5),n.turn(-30,20,-2),n.straight(38,6),n.turn(24,18,1),n.straight(36,-4),n.turn(-20,22,-1),n.straight(30)},{gaps:[{at:.24,len:6.5},{at:.5,len:7},{at:.76,len:6.5}],obstacles:[re(1.4,.3,.62,.14),ae(1.6,1.1,.32),_e(1.8,.5,.5),wt(1.9,1.6,.68),xe(1.2,.2,.6,.86),ae(1.7,.9,.95)],checkpoints:[.26,.52,.78],rails:[{from:.32,to:.44},{from:.58,to:.7},{from:.8,to:.9}],boosts:[{at:.18},{at:.44},{at:.7},{at:.92}]}),le(32,"Orb Eternal",10,6.6,n=>{n.straight(40,4),n.turn(24,22,3),n.straight(44,8),n.turn(-30,18,-5),n.straight(38,-10),n.turn(28,17,-3),n.straight(42,7),n.turn(-26,20,4),n.straight(36,-8),n.turn(22,18,-2),n.straight(34,5),n.turn(-18,22,2),n.straight(38)},{gaps:[{at:.2,len:6.5},{at:.44,len:7.5},{at:.68,len:7},{at:.89,len:6.5}],obstacles:[wt(1.9,.3,.1),xe(1.2,.9,.64,.25),_e(1.8,1.5,.36),ae(1.8,.6,.48),re(1.6,1.2,.68,.57),xe(1.35,.3,.62,.66),wt(2.1,1.8,.76),_e(1.9,.8,.84),ae(1.9,1.4,.94)],checkpoints:[.22,.47,.72],rails:[{from:.28,to:.4},{from:.54,to:.66},{from:.78,to:.88}],boosts:[{at:.16},{at:.4},{at:.64},{at:.86}]})];var Xe=Qe.length,pl=Xe*3;var Bh=[{id:"sunrise",name:"Sunrise Skies",skyTop:"#1f4fb8",skyMid:"#6fb1ff",skyHorizon:"#ffd9a0",skyBottom:"#ff8f55",fog:11128309,sun:{x:.73,y:.43,color:"#fff6d6",glow:"rgba(255,232,170,0.5)",size:.005},sunLight:16773327,sunIntensity:2,hemiSky:13625087,hemiGround:8019002,hemiIntensity:.55,accent:8189908,accentCss:"#7cf7d4",railA:16763196,railB:2895944,trackTint:16777215,cloud:16777215,grass:7849562,grassTop:10149997,rock:10127988,rockDark:7300440,decor:"trees",cardA:"#4c7dff",cardB:"#152a63",stars:0,moon:!1},{id:"dusk",name:"Golden Dusk",skyTop:"#231452",skyMid:"#77368f",skyHorizon:"#ff9a5c",skyBottom:"#ffcf9e",fog:10116995,sun:{x:.28,y:.47,color:"#ffd9a0",glow:"rgba(255,150,90,0.55)",size:.0055},sunLight:16760970,sunIntensity:1.8,hemiSky:13081560,hemiGround:4862279,hemiIntensity:.5,accent:16757867,accentCss:"#ffb46b",railA:16747084,railB:2758712,trackTint:16770767,cloud:16763304,grass:10252143,grassTop:12159602,rock:6242389,rockDark:4074050,decor:"trees",cardA:"#b55cff",cardB:"#3a145e",stars:40,moon:!1},{id:"neon",name:"Neon Nights",skyTop:"#03061c",skyMid:"#0a1442",skyHorizon:"#173071",skyBottom:"#050a20",fog:661312,sun:{x:.66,y:.32,color:"#dff6ff",glow:"rgba(150,220,255,0.4)",size:.006},sunLight:11127039,sunIntensity:1.4,hemiSky:5995775,hemiGround:1772090,hemiIntensity:.45,accent:2282478,accentCss:"#22d3ee",railA:2282478,railB:2366034,trackTint:13222655,cloud:2834298,grass:1911381,grassTop:2375802,rock:1251896,rockDark:659237,decor:"crystals",cardA:"#21c7ef",cardB:"#14205d",stars:240,moon:!0},{id:"candy",name:"Candy Dream",skyTop:"#2f8bff",skyMid:"#8cd0ff",skyHorizon:"#ffd9ef",skyBottom:"#ff9dd2",fog:16764137,sun:{x:.7,y:.4,color:"#fff7e0",glow:"rgba(255,220,240,0.5)",size:.005},sunLight:16774114,sunIntensity:1.9,hemiSky:16766706,hemiGround:8215434,hemiIntensity:.6,accent:16748488,accentCss:"#ff8fc8",railA:16740275,railB:5909091,trackTint:16770290,cloud:16770292,grass:16754900,grassTop:16762340,rock:10976468,rockDark:8149165,decor:"candy",cardA:"#ff6fb3",cardB:"#6a1a63",stars:0,moon:!1},{id:"battlefield",name:"3D Battlefield",skyTop:"#18243b",skyMid:"#54657c",skyHorizon:"#d8a26d",skyBottom:"#7d5538",fog:9140835,sun:{x:.22,y:.52,color:"#ffe4b4",glow:"rgba(255,184,112,0.42)",size:.0045},sunLight:16765856,sunIntensity:1.55,hemiSky:10728388,hemiGround:4601899,hemiIntensity:.58,accent:16757575,accentCss:"#ffb347",railA:16761418,railB:2566952,trackTint:14207149,cloud:14275784,grass:8160850,grassTop:9937254,rock:9207144,rockDark:6049858,decor:"battlefield",cardA:"#947044",cardB:"#241b14",stars:0,moon:!1},{id:"hills",name:"Dangerous Hills",skyTop:"#103d54",skyMid:"#4c99ae",skyHorizon:"#d8edc7",skyBottom:"#79b27c",fog:9287587,sun:{x:.7,y:.4,color:"#fff8d7",glow:"rgba(255,244,190,0.48)",size:.005},sunLight:16773576,sunIntensity:2,hemiSky:13823968,hemiGround:3887424,hemiIntensity:.62,accent:10216301,accentCss:"#9be36d",railA:11989611,railB:2111786,trackTint:15267292,cloud:15857390,grass:5999422,grassTop:8631381,rock:8293243,rockDark:5068877,decor:"hills",cardA:"#54b37a",cardB:"#12382a",stars:0,moon:!1},{id:"coaster",name:"Roller Coaster",skyTop:"#18113d",skyMid:"#743b8f",skyHorizon:"#ff9d60",skyBottom:"#ffca8b",fog:12746121,sun:{x:.79,y:.37,color:"#ffe9c4",glow:"rgba(255,178,110,0.52)",size:.0055},sunLight:16765603,sunIntensity:1.8,hemiSky:14726365,hemiGround:3876932,hemiIntensity:.56,accent:16740275,accentCss:"#ff6fb3",railA:16767293,railB:3678271,trackTint:16771542,cloud:16766912,grass:7241032,grassTop:8886106,rock:8087388,rockDark:5128250,decor:"coaster",cardA:"#ff8f5a",cardB:"#4a1c55",stars:70,moon:!1},{id:"volcano",name:"Magma Core",skyTop:"#12060a",skyMid:"#3d0f16",skyHorizon:"#ff5a2a",skyBottom:"#3a0a0e",fog:4198938,sun:{x:.68,y:.5,color:"#ffd0a0",glow:"rgba(255,90,40,0.6)",size:.006},sunLight:16751196,sunIntensity:1.7,hemiSky:16747098,hemiGround:1837580,hemiIntensity:.45,accent:16738876,accentCss:"#ff6a3c",railA:16742972,railB:2755858,trackTint:16763304,cloud:5909038,grass:2758168,grassTop:3808798,rock:3876650,rockDark:1970452,decor:"volcano",cardA:"#ff6a3c",cardB:"#2a0a14",stars:80,moon:!1},{id:"ice",name:"Frostbite",skyTop:"#081a3a",skyMid:"#4a86c8",skyHorizon:"#d8f4ff",skyBottom:"#e8fbff",fog:12575730,sun:{x:.3,y:.4,color:"#ffffff",glow:"rgba(180,240,255,0.6)",size:.005},sunLight:15398911,sunIntensity:1.9,hemiSky:15268095,hemiGround:6982304,hemiIntensity:.62,accent:10479871,accentCss:"#9fe8ff",railA:11462911,railB:2307658,trackTint:15793151,cloud:16777215,grass:14676735,grassTop:16055551,rock:10467528,rockDark:7111572,decor:"ice",cardA:"#7fd8ff",cardB:"#173a5c",stars:20,moon:!1},{id:"jade",name:"Jade Valley",skyTop:"#062d2a",skyMid:"#0f766e",skyHorizon:"#a7f3d0",skyBottom:"#d9f99d",fog:7981481,sun:{x:.63,y:.42,color:"#fff7cf",glow:"rgba(180,255,220,0.5)",size:.0055},sunLight:16774092,sunIntensity:1.85,hemiSky:11006928,hemiGround:2180410,hemiIntensity:.56,accent:3462041,accentCss:"#34d399",railA:16175973,railB:2055242,trackTint:13761253,cloud:15138806,grass:4169063,grassTop:7268279,rock:6126186,rockDark:3561034,decor:"trees",cardA:"#2dd4bf",cardB:"#064e3b",stars:30,moon:!1},{id:"starlight",name:"Starlight Bay",skyTop:"#06021a",skyMid:"#1b1046",skyHorizon:"#7c3aed",skyBottom:"#2b0a3f",fog:4991610,sun:{x:.7,y:.34,color:"#ffe4f7",glow:"rgba(244,114,182,0.5)",size:.006},sunLight:15324671,sunIntensity:1.5,hemiSky:12616956,hemiGround:2756672,hemiIntensity:.5,accent:16020150,accentCss:"#f472b6",railA:6809849,railB:3868516,trackTint:15324671,cloud:3873372,grass:3018853,grassTop:4988309,rock:2363455,rockDark:1312806,decor:"crystals",cardA:"#d946ef",cardB:"#2e1065",stars:280,moon:!0}];function Ss(n){let t=Qe[Math.max(0,Math.min(Qe.length-1,n|0))];return Bh[Math.min(Bh.length-1,t?t.themeIndex:0)]}var Cn=[{id:"chrome",name:"Prism Gem",price:0,color:16777215,metalness:.18,roughness:.03,env:3,tier:1,trail:10485732,physical:{clearcoat:1,clearcoatRoughness:.02,iridescence:1,iridescenceIOR:2,sheen:.55,sheenColor:16777215},swatch:["#ffd1ff","#7dd3fc","#a78bfa"]},{id:"beach",name:"Beach Ball",price:120,color:16777215,metalness:.05,roughness:.32,env:1,swatch:["#ff7b7b","#ffd93d","#4dd4ff"]},{id:"soccer",name:"Soccer",price:180,color:16777215,metalness:.08,roughness:.5,env:.8,swatch:["#ffffff","#c8ced8","#1b1e24"]},{id:"basketball",name:"Basketball",price:260,color:16777215,metalness:.05,roughness:.55,env:.8,swatch:["#e07b37","#b45116","#251208"]},{id:"watermelon",name:"Watermelon",price:400,color:16777215,metalness:.08,roughness:.36,env:.9,swatch:["#5ac26c","#2e7d3f","#173d22"]},{id:"disco",name:"Disco",price:620,color:15265535,metalness:1,roughness:.18,env:2.6,swatch:["#eef3ff","#97a3bd","#39435c"]},{id:"eyeball",name:"Eyeball",price:800,color:16777215,metalness:.08,roughness:.16,env:1,swatch:["#f4f1e8","#3fc7c9","#172a4a"]},{id:"lava",name:"Lava",price:1100,color:16777215,metalness:.12,roughness:.72,env:1,swatch:["#ff8236","#9e2f05","#1b1210"]},{id:"galaxy",name:"Galaxy",price:1500,color:16777215,metalness:.3,roughness:.34,env:1.3,swatch:["#8f7bff","#4b2ba8","#120a38"]},{id:"golden",name:"Golden",price:2e3,color:16766814,metalness:1,roughness:.19,env:2.6,swatch:["#fff1b3","#f0b429","#7a4c00"]},{id:"platinum",name:"Platinum",price:2800,color:14739185,metalness:1,roughness:.08,env:2.8,swatch:["#f5faff","#a3b8d4","#2c486c"]},{id:"bronze",name:"Bronze",price:3600,color:13467442,metalness:.95,roughness:.25,env:2.2,swatch:["#ffea9d","#cd7f32","#3b281a"]},{id:"ruby",name:"Ruby",price:4500,color:13373747,metalness:.85,roughness:.18,env:2.4,tier:3,trail:16735870,swatch:["#ff5e7e","#cc1133","#3a0a1a"]},{id:"obsidian",name:"Obsidian",price:5200,color:1119004,metalness:.85,roughness:.08,env:3.1,tier:4,trail:16757575,physical:{clearcoat:1,clearcoatRoughness:.04,iridescence:.35,iridescenceIOR:1.5},swatch:["#565b78","#141724","#05060a"]},{id:"aurora",name:"Aurora",price:6500,color:10485732,metalness:.55,roughness:.06,env:2.8,tier:4,trail:8189908,physical:{clearcoat:1,clearcoatRoughness:.03,iridescence:1,iridescenceIOR:1.9,sheen:.9,sheenColor:9403391},swatch:["#c9fff2","#5eead4","#5b21b6"]},{id:"sunstone",name:"Sunstone",price:7800,color:16761706,metalness:.25,roughness:.04,env:2.6,tier:4,trail:16754236,physical:{transmission:.35,thickness:1.4,clearcoat:1,clearcoatRoughness:.03,iridescence:.6},swatch:["#fff0bf","#ffa63c","#8c3b00"]},{id:"nebula",name:"Nebula",price:9e3,color:3809894,metalness:.55,roughness:.14,env:2.7,tier:4,trail:11635967,physical:{clearcoat:.9,clearcoatRoughness:.06,iridescence:.85,iridescenceIOR:1.7},swatch:["#d8c7ff","#6d28d9","#140524"]},{id:"emerald",name:"Emerald",price:10200,color:3462041,metalness:.32,roughness:.04,env:2.9,tier:4,trail:3462041,physical:{transmission:.24,thickness:1.2,clearcoat:1,clearcoatRoughness:.02,iridescence:.45},swatch:["#d1fae5","#10b981","#064e3b"]},{id:"sapphire",name:"Sapphire",price:11e3,color:2450411,metalness:.38,roughness:.04,env:2.9,tier:4,trail:6333946,physical:{transmission:.2,thickness:1.15,clearcoat:1,clearcoatRoughness:.02,iridescence:.65},swatch:["#dbeafe","#2563eb","#172554"]},{id:"amethyst",name:"Amethyst",price:11800,color:9133302,metalness:.3,roughness:.04,env:2.9,tier:4,trail:12616956,physical:{transmission:.22,thickness:1.2,clearcoat:1,clearcoatRoughness:.02,iridescence:.8},swatch:["#f3e8ff","#8b5cf6","#3b0764"]},{id:"opal",name:"Opal",price:12600,color:16109822,metalness:.22,roughness:.03,env:3.1,tier:4,trail:15772668,physical:{transmission:.3,thickness:1.25,clearcoat:1,clearcoatRoughness:.02,iridescence:1,iridescenceIOR:2.1,sheen:.8,sheenColor:10875900},swatch:["#fff1f2","#f0abfc","#67e8f9"]}],Tg=new Map(Cn.map(n=>[n.id,n]));function Qs(n){return Tg.get(n)||Cn[0]}var ml=new Map;function wg(n,t,e,i,s){n.beginPath();for(let r=0;r<5;r++){let a=s+r/5*Math.PI*2,o=t+Math.cos(a)*i,l=e+Math.sin(a)*i*.92;r===0?n.moveTo(o,l):n.lineTo(o,l)}n.closePath()}function Ag(n,t,e){let i=["#ff6b6b","#ffd93d","#f8fafc","#4dd4ff","#9a7bff","#5eead4"],s=t/12;for(let a=0;a<12;a++)n.fillStyle=i[a%i.length],n.fillRect(Math.floor(a*s),0,Math.ceil(s)+1,e);n.fillStyle="#f8fafc",n.fillRect(0,0,t,e*.1),n.fillRect(0,e*.9,t,e*.1);let r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,"rgba(255,255,255,0.18)"),r.addColorStop(.45,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.22)"),n.fillStyle=r,n.fillRect(0,0,t,e)}function Rg(n,t,e){n.fillStyle="#f5f7f5",n.fillRect(0,0,t,e),n.fillStyle="rgba(0,0,0,0.05)";let i=he(7);for(let a=0;a<1500;a++)n.fillRect(i()*t,i()*e,1,1);n.strokeStyle="rgba(120,130,140,0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(0,e*.5),n.bezierCurveTo(t*.25,e*.34,t*.75,e*.66,t,e*.5),n.stroke();let s=[[.08,.3,20,.2],[.3,.36,22,.8],[.56,.31,19,1.7],[.8,.38,22,2.4],[.2,.72,23,.4],[.5,.7,21,1.2],[.78,.72,20,2.9],[.95,.66,18,.9]];for(let[a,o,l,c]of s)n.save(),n.translate(a*t,o*e),n.fillStyle="#1b1e24",wg(n,0,0,l,c),n.fill(),n.restore();n.strokeStyle="rgba(90,100,110,0.28)",n.lineWidth=1.5;for(let[a,o]of s)for(let l=0;l<5;l++){let c=l/5*Math.PI*2;n.beginPath(),n.moveTo(a*t+Math.cos(c)*22,o*e+Math.sin(c)*20),n.lineTo(a*t+Math.cos(c+.7)*66,o*e+Math.sin(c+.7)*60),n.stroke()}let r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,"rgba(255,255,255,0.32)"),r.addColorStop(.5,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.16)"),n.fillStyle=r,n.fillRect(0,0,t,e)}function Cg(n,t,e){let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#ef9043"),i.addColorStop(.5,"#df6e2b"),i.addColorStop(1,"#b5531c"),n.fillStyle=i,n.fillRect(0,0,t,e);let s=he(31);n.fillStyle="rgba(60,20,0,0.12)";for(let a=0;a<2600;a++)n.fillRect(s()*t,s()*e,1.2,1.2);n.strokeStyle="#20110a",n.lineWidth=5,n.beginPath(),n.moveTo(0,e*.5),n.lineTo(t,e*.5),n.stroke(),n.beginPath(),n.moveTo(t*.25,0),n.lineTo(t*.25,e),n.moveTo(t*.75,0),n.lineTo(t*.75,e),n.stroke(),n.beginPath(),n.moveTo(t*.25,0),n.bezierCurveTo(t*.36,e*.25,t*.36,e*.75,t*.25,e),n.moveTo(t*.75,0),n.bezierCurveTo(t*.64,e*.25,t*.64,e*.75,t*.75,e),n.stroke();let r=n.createRadialGradient(t*.3,e*.24,4,t*.3,e*.24,t*.5);r.addColorStop(0,"rgba(255,255,255,0.3)"),r.addColorStop(.55,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.18)"),n.fillStyle=r,n.fillRect(0,0,t,e)}function Pg(n,t,e){let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#63c775"),i.addColorStop(.5,"#3d9e53"),i.addColorStop(1,"#1f6433"),n.fillStyle=i,n.fillRect(0,0,t,e);let s=he(99);for(let a=0;a<6;a++){let o=a/6*t+14;n.beginPath();for(let l=0;l<=e;l+=8){let c=Math.sin(l*.05+a)*6+Math.sin(l*.14+a*2)*3;l===0?n.moveTo(o-13+c,l):n.lineTo(o-13+c,l)}for(let l=e;l>=0;l-=8){let c=Math.sin(l*.05+a)*6+Math.sin(l*.14+a*2)*3;n.lineTo(o+13+c,l)}n.closePath(),n.fillStyle="rgba(18, 72, 32, 0.85)",n.fill()}n.fillStyle="rgba(180, 255, 190, 0.16)";for(let a=0;a<5;a++){let o=a/5*t+40;n.beginPath(),n.ellipse(o,e*(.25+s()*.5),3,e*.26,0,0,Math.PI*2),n.fill()}n.fillStyle="rgba(10, 40, 18, 0.5)";for(let a=0;a<70;a++){let o=s()*t,l=s()*e;n.beginPath(),n.ellipse(o,l,1.6,2.8,0,0,Math.PI*2),n.fill()}let r=n.createRadialGradient(t*.28,e*.25,4,t*.28,e*.25,t*.55);r.addColorStop(0,"rgba(255,255,255,0.26)"),r.addColorStop(.5,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.2)"),n.fillStyle=r,n.fillRect(0,0,t,e)}function Lg(n,t,e){let i=he(5);n.fillStyle="#0d1424",n.fillRect(0,0,t,e);let s=24,r=12,a=t/s,o=e/r;for(let l=0;l<r;l++)for(let c=0;c<s;c++){let h=120+Math.floor(i()*120),u=i()>.7?24:0;n.fillStyle=`rgb(${h-u},${h},${h+20})`,n.fillRect(c*a+1,l*o+1,a-2,o-2),n.fillStyle="rgba(255,255,255,0.45)",n.fillRect(c*a+2,l*o+2,a-4,2),n.fillStyle="rgba(10,20,40,0.35)",n.fillRect(c*a+2,(l+1)*o-4,a-4,2)}for(let l=0;l<40;l++){let c=i()*t,h=i()*e;n.fillStyle="rgba(255,255,255,0.85)",n.fillRect(c,h,2,2)}}function Ig(n,t,e){let i=n.createRadialGradient(t*.45,e*.4,20,t*.5,e*.5,t*.62);i.addColorStop(0,"#fdfbf4"),i.addColorStop(.72,"#efe9da"),i.addColorStop(1,"#cec5b4"),n.fillStyle=i,n.fillRect(0,0,t,e);let s=he(13);n.strokeStyle="rgba(190, 58, 58, 0.42)",n.lineWidth=1.3;for(let c=0;c<26;c++){let h=s()>.5?t*.02:t*.98,u=s()*e;n.beginPath(),n.moveTo(h,u);for(let d=0;d<4;d++)h+=(t*.5-h)*(.18+s()*.12),u+=(e*.5-u)*(.18+s()*.12)+(s()-.5)*14,n.lineTo(h,u);n.stroke()}let r=t*.5,a=e*.5,o=n.createRadialGradient(r-5,a-5,4,r,a,46);o.addColorStop(0,"#8ffcff"),o.addColorStop(.4,"#2fc2c7"),o.addColorStop(.75,"#147a92"),o.addColorStop(1,"#0b4358"),n.fillStyle=o,n.beginPath(),n.arc(r,a,44,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(6, 40, 52, 0.8)",n.lineWidth=3,n.stroke(),n.strokeStyle="rgba(120, 240, 255, 0.4)",n.lineWidth=1;for(let c=0;c<16;c++){let h=c/16*Math.PI*2;n.beginPath(),n.moveTo(r+Math.cos(h)*22,a+Math.sin(h)*22),n.lineTo(r+Math.cos(h)*41,a+Math.sin(h)*41),n.stroke()}n.fillStyle="#080d14",n.beginPath(),n.arc(r,a,18,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.ellipse(r-7,a-8,6,4,-.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.4)",n.beginPath(),n.ellipse(r+9,a+9,4,2.4,-.5,0,Math.PI*2),n.fill();let l=n.createLinearGradient(0,0,0,e);l.addColorStop(0,"rgba(255,255,255,0.16)"),l.addColorStop(.55,"rgba(255,255,255,0)"),l.addColorStop(1,"rgba(0,0,0,0.18)"),n.fillStyle=l,n.fillRect(0,0,t,e)}function Hh(n,t,e,i=!1){let s=he(77);if(i)n.fillStyle="#000000",n.fillRect(0,0,t,e);else{let r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,"#2b2320"),r.addColorStop(.5,"#1b1412"),r.addColorStop(1,"#0f0b0a"),n.fillStyle=r,n.fillRect(0,0,t,e);for(let a=0;a<700;a++){let o=20+Math.floor(s()*28);n.fillStyle=`rgba(${o+10},${o},${o},0.5)`,n.fillRect(s()*t,s()*e,2,s()*4+1)}}for(let r=0;r<12;r++){let a=s()*t,o=s()*e,l=i?["#ffb347","#ff6a00","#ffe08a"]:["#ff7b22","#c94500","#ffb347"];n.strokeStyle=l[r%3],n.lineWidth=i?2.6:3.4,n.shadowBlur=i?12:5,n.shadowColor="#ff6a00",n.beginPath(),n.moveTo(a,o);for(let c=0;c<7;c++)a+=(s()-.5)*46,o+=12+s()*16,n.lineTo(a,o),s()>.65&&(n.moveTo(a,o),n.lineTo(a+(s()-.5)*42,o+14+s()*18),n.moveTo(a,o));n.stroke(),n.shadowBlur=0}for(let r=0;r<26;r++)n.fillStyle=i?"rgba(255,140,40,0.75)":"rgba(255,110,30,0.5)",n.beginPath(),n.arc(s()*t,s()*e,s()*2+.6,0,Math.PI*2),n.fill()}function Dg(n,t,e){let i=he(2024),s=n.createLinearGradient(0,0,t,e);s.addColorStop(0,"#1a0b3d"),s.addColorStop(.45,"#161b4d"),s.addColorStop(1,"#080a24"),n.fillStyle=s,n.fillRect(0,0,t,e);let r=[[.25,.5,.35,"rgba(124, 58, 237, 0.5)"],[.7,.35,.3,"rgba(34, 211, 238, 0.28)"],[.55,.72,.28,"rgba(236, 72, 153, 0.24)"],[.85,.7,.22,"rgba(99, 102, 241, 0.35)"]];for(let[o,l,c,h]of r){let u=n.createRadialGradient(o*t,l*e,2,o*t,l*e,c*t);u.addColorStop(0,h),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(0,0,t,e)}for(let o=0;o<340;o++){let l=i()*t,c=i()*e,h=i()*1.5+.35;n.fillStyle=i()>.86?"#9ef7ff":i()>.7?"#ffd9f2":"#ffffff",n.globalAlpha=.4+i()*.6,n.beginPath(),n.arc(l,c,h,0,Math.PI*2),n.fill(),i()>.965&&(n.strokeStyle="rgba(255,255,255,0.45)",n.lineWidth=.7,n.beginPath(),n.moveTo(l-5,c),n.lineTo(l+5,c),n.moveTo(l,c-5),n.lineTo(l,c+5),n.stroke())}n.globalAlpha=1;let a=n.createLinearGradient(0,0,0,e);a.addColorStop(0,"rgba(255,255,255,0.1)"),a.addColorStop(.5,"rgba(255,255,255,0)"),a.addColorStop(1,"rgba(0,0,0,0.25)"),n.fillStyle=a,n.fillRect(0,0,t,e)}function Ug(n,t,e){let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#fff3c0"),i.addColorStop(.4,"#ffd75e"),i.addColorStop(.7,"#f0b429"),i.addColorStop(1,"#a86a00"),n.fillStyle=i,n.fillRect(0,0,t,e),n.strokeStyle="rgba(120, 72, 0, 0.4)",n.lineWidth=2;for(let r=0;r<4;r++){n.beginPath();for(let a=0;a<=t;a+=10){let o=e*(.18+r*.22)+Math.sin(a*.05+r*1.7)*7;a===0?n.moveTo(a,o):n.lineTo(a,o)}n.stroke()}n.strokeStyle="rgba(255, 255, 220, 0.55)",n.lineWidth=1.4;for(let r=0;r<9;r++)n.beginPath(),n.ellipse(t*(.12+r*.09),e*(.5+Math.sin(r)*.2),26,6,-.3,0,Math.PI*2),n.stroke();let s=n.createRadialGradient(t*.3,e*.24,4,t*.3,e*.24,t*.5);s.addColorStop(0,"rgba(255,255,255,0.65)"),s.addColorStop(.4,"rgba(255,255,255,0.1)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,t,e)}function Ng(n,t,e){let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#f0f8ff"),i.addColorStop(.5,"#e0e6f1"),i.addColorStop(1,"#c8d1e8"),n.fillStyle=i,n.fillRect(0,0,t,e),n.strokeStyle="rgba(180, 190, 210, 0.45)",n.lineWidth=1.8;for(let r=0;r<5;r++){let a=e*.15+r*.14;n.beginPath(),n.moveTo(t*.12,a),n.lineTo(t*.88,a),n.stroke()}let s=n.createRadialGradient(t*.4,e*.3,3,t*.4,e*.3,t*.55);s.addColorStop(0,"rgba(255,255,255,0.7)"),s.addColorStop(.6,"rgba(255,255,255,0.15)"),s.addColorStop(1,"rgba(180, 190, 210,0)"),n.fillStyle=s,n.fillRect(0,0,t,e)}function kg(n,t,e){let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#ffeb99"),i.addColorStop(.5,"#cd7f32"),i.addColorStop(1,"#a0521d"),n.fillStyle=i,n.fillRect(0,0,t,e),n.strokeStyle="rgba(180, 100, 50, 0.4)",n.lineWidth=1.6;for(let s=0;s<4;s++){let r=e*.18+s*.16;n.beginPath(),n.moveTo(t*.1,r),n.lineTo(t*.9,r),n.stroke()}n.strokeStyle="rgba(255, 220, 150, 0.55)",n.lineWidth=.9;for(let s=0;s<6;s++){let r=t*(.08+s*.145);n.beginPath(),n.moveTo(r,e*.4),n.lineTo(r,e*.7),n.stroke()}}function Fg(n,t,e){let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#ff6b6b"),i.addColorStop(.5,"#cc1133"),i.addColorStop(1,"#8b0000"),n.fillStyle=i,n.fillRect(0,0,t,e),n.strokeStyle="rgba(255, 100, 100, 0.4)",n.lineWidth=1.5;for(let r=0;r<4;r++)n.beginPath(),n.moveTo(t*.15+r*.21,e*.12),n.lineTo(t*.15+r*.21,e*.88),n.stroke();let s=n.createRadialGradient(t*.3,e*.25,4,t*.3,e*.25,t*.55);s.addColorStop(0,"rgba(255,255,255,0.6)"),s.addColorStop(.5,"rgba(255,100,100,0.4)"),s.addColorStop(1,"rgba(200, 0, 0, 0)"),n.fillStyle=s,n.fillRect(0,0,t,e)}function Og(n,t,e,i=!1){if(i)n.fillStyle="#000000",n.fillRect(0,0,t,e);else{let r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,"#3a3d54"),r.addColorStop(.4,"#171926"),r.addColorStop(.72,"#0d0f17"),r.addColorStop(1,"#030409"),n.fillStyle=r,n.fillRect(0,0,t,e)}let s=he(66);n.lineCap="round";for(let r=0;r<9;r++){let a=s()*t,o=-10,l=1+s()*2.4;for(n.strokeStyle=r%3===0?"rgba(255, 213, 128, 0.9)":"rgba(255, 150, 60, 0.55)",n.lineWidth=l,n.shadowColor="#ff9d3c",n.shadowBlur=i?14:7,n.beginPath(),n.moveTo(a,o);o<e+10;)a+=(s()-.5)*24,o+=10+s()*16,n.lineTo(a,o),s()>.82&&(n.stroke(),n.beginPath(),n.moveTo(a,o));n.stroke()}if(n.shadowBlur=0,!i){let r=n.createRadialGradient(t*.35,e*.3,3,t*.35,e*.3,t*.5);r.addColorStop(0,"rgba(255,255,255,0.32)"),r.addColorStop(.35,"rgba(170,190,255,0.06)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,t,e)}}function Bg(n,t,e,i=!1){n.fillStyle=i?"#02040c":"#060a1a",n.fillRect(0,0,t,e);let s=[["rgba(94, 234, 212, 0.6)",.25,.32],["rgba(143, 123, 255, 0.55)",.5,.22],["rgba(56, 189, 248, 0.4)",.72,.3]];for(let[a,o,l]of s){n.strokeStyle=a,n.lineWidth=16,n.shadowColor=a,n.shadowBlur=i?24:12,n.beginPath();for(let c=0;c<=t;c+=8){let h=e*o+Math.sin(c*.03+o*9)*e*l*.22;c===0?n.moveTo(c,h):n.lineTo(c,h)}n.stroke()}n.shadowBlur=0;let r=he(21);for(let a=0;a<80;a++){let o=r()*t,l=r()*e;n.fillStyle=`rgba(220, 255, 250, ${.25+r()*.7})`,n.fillRect(o,l,1.2+r(),1.2+r())}if(!i){let a=n.createRadialGradient(t*.3,e*.26,2,t*.3,e*.26,t*.55);a.addColorStop(0,"rgba(255,255,255,0.5)"),a.addColorStop(.4,"rgba(160,255,240,0.08)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(0,0,t,e)}}function Hg(n,t,e,i=!1){if(i)n.fillStyle="#000000",n.fillRect(0,0,t,e);else{let r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,"#ffeab0"),r.addColorStop(.45,"#ffb44d"),r.addColorStop(.75,"#e07716"),r.addColorStop(1,"#7a2d00"),n.fillStyle=r,n.fillRect(0,0,t,e)}n.strokeStyle="rgba(255, 100, 20, 0.28)",n.lineWidth=1.2;for(let r=0;r<14;r++){n.beginPath();let a=r/14*e;for(let o=0;o<=t;o+=10){let l=a+Math.sin(o*.04+r)*5;o===0?n.moveTo(o,l):n.lineTo(o,l)}n.stroke()}let s=he(88);for(let r=0;r<16;r++){let a=s()*t,o=s()*e;n.strokeStyle="rgba(255, 240, 190, 0.85)",n.lineWidth=1+s()*1.6,n.shadowColor="#ffb347",n.shadowBlur=i?12:6,n.beginPath(),n.moveTo(a,o);for(let l=0;l<3+Math.floor(s()*3);l++)a+=(s()-.5)*30,o+=(s()-.5)*24,n.lineTo(a,o);n.stroke()}if(n.shadowBlur=0,!i){let r=n.createRadialGradient(t*.36,e*.28,3,t*.36,e*.28,t*.5);r.addColorStop(0,"rgba(255,255,255,0.55)"),r.addColorStop(.45,"rgba(255,240,190,0.08)"),r.addColorStop(1,"rgba(120,40,0,0)"),n.fillStyle=r,n.fillRect(0,0,t,e)}}function zg(n,t,e,i=!1){n.fillStyle=i?"#03000a":"#080314",n.fillRect(0,0,t,e);let s=he(42),r=[["rgba(139, 92, 246, 0.5)",.3,.42,120],["rgba(236, 72, 153, 0.38)",.62,.38,90],["rgba(56, 189, 248, 0.3)",.48,.62,80],["rgba(251, 191, 36, 0.22)",.72,.26,60]];for(let[a,o,l,c]of r){let h=n.createRadialGradient(t*o,e*l,2,t*o,e*l,c);h.addColorStop(0,a),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.fillRect(0,0,t,e)}for(let a=0;a<180;a++){let o=s()*t,l=s()*e,c=s()*1.5+.4;n.fillStyle=`rgba(255, 255, 255, ${.3+s()*.7})`,n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}for(let a=0;a<12;a++){let o=s()*t,l=s()*e;n.strokeStyle="rgba(255,255,255,0.85)",n.lineWidth=1,n.beginPath(),n.moveTo(o-4,l),n.lineTo(o+4,l),n.moveTo(o,l-4),n.lineTo(o,l+4),n.stroke()}if(!i){let a=n.createRadialGradient(t*.3,e*.26,2,t*.3,e*.26,t*.5);a.addColorStop(0,"rgba(255,255,255,0.5)"),a.addColorStop(.5,"rgba(220,200,255,0.06)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(0,0,t,e)}}var Vg={chrome:{seed:7,light:"#f0abfc",mid:"#22d3ee",deep:"#7c3aed",dark:"#1e1b4b",spark:"#ffffff"},emerald:{seed:31,light:"#d1fae5",mid:"#34d399",deep:"#059669",dark:"#064e3b",spark:"#f0fdf4"},sapphire:{seed:53,light:"#dbeafe",mid:"#60a5fa",deep:"#2563eb",dark:"#172554",spark:"#eff6ff"},amethyst:{seed:79,light:"#f3e8ff",mid:"#c084fc",deep:"#8b5cf6",dark:"#3b0764",spark:"#faf5ff"},opal:{seed:97,light:"#fff1f2",mid:"#f0abfc",deep:"#67e8f9",dark:"#164e63",spark:"#fefce8"}};function Gg(n,t,e,i){let s=he(i.seed),r=n.createLinearGradient(0,0,t,e);r.addColorStop(0,i.light),r.addColorStop(.34,i.mid),r.addColorStop(.64,i.deep),r.addColorStop(1,i.dark),n.fillStyle=r,n.fillRect(0,0,t,e);for(let l=0;l<34;l++){let c=s()*t,h=s()*e,u=26+s()*96,d=3+Math.floor(s()*3);n.beginPath();for(let g=0;g<d;g++){let y=g/d*Math.PI*2+s()*.4,m=c+Math.cos(y)*u,f=h+Math.sin(y)*u*.72;g===0?n.moveTo(m,f):n.lineTo(m,f)}n.closePath();let p=s();n.fillStyle=p>.72?"rgba(255,255,255,0.16)":p>.42?"rgba(255,255,255,0.06)":"rgba(15, 10, 40, 0.12)",n.fill(),n.strokeStyle=p>.5?"rgba(255,255,255,0.28)":"rgba(20, 12, 52, 0.22)",n.lineWidth=1+s()*1.5,n.stroke()}n.lineWidth=2;for(let l=0;l<8;l++){let c=e*(.1+l*.115);n.strokeStyle=l%2?"rgba(255,255,255,0.2)":"rgba(20,12,52,0.18)",n.beginPath();for(let h=0;h<=t;h+=12){let u=c+Math.sin(h*.025+l*1.7)*9;h===0?n.moveTo(h,u):n.lineTo(h,u)}n.stroke()}let a=26;for(let l=0;l<a;l++){let c=s()*t,h=s()*e,u=1+s()*3;n.fillStyle=i.spark,n.globalAlpha=.35+s()*.65,n.fillRect(c-u/2,h-u/2,u,u),s()>.62&&(n.fillRect(c-u*2,h,u*4,.8),n.fillRect(c,h-u*2,.8,u*4))}n.globalAlpha=1;let o=n.createRadialGradient(t*.28,e*.24,4,t*.34,e*.3,t*.52);o.addColorStop(0,"rgba(255,255,255,0.72)"),o.addColorStop(.5,"rgba(255,255,255,0.12)"),o.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=o,n.fillRect(0,0,t,e)}function Wg(n){if(ml.has(n))return ml.get(n);let t={map:null};try{let e=Vg[n];if(e){let{canvas:i,ctx:s}=ne(512,256);Gg(s,512,256,e),t={map:se(i)}}else if(n==="obsidian"||n==="aurora"||n==="sunstone"||n==="nebula"){let i={obsidian:Og,aurora:Bg,sunstone:Hg,nebula:zg}[n],s=ne(512,256);i(s.ctx,512,256,!1);let r=ne(512,256);i(r.ctx,512,256,!0),t={map:se(s.canvas),emissiveMap:se(r.canvas),emissiveIntensity:n==="obsidian"?.7:n==="nebula"?1.25:1}}else if(n==="disco"){let{canvas:i,ctx:s}=ne(512,256);Lg(s,512,256),t={map:se(i)}}else if(n==="lava"){let i=ne(512,256);Hh(i.ctx,512,256,!1);let s=ne(512,256);Hh(s.ctx,512,256,!0),t={map:se(i.canvas),emissiveMap:se(s.canvas),emissiveIntensity:1.15}}else if(n!=="chrome"){let{canvas:i,ctx:s}=ne(512,256);n==="beach"?Ag(s,512,256):n==="soccer"?Rg(s,512,256):n==="basketball"?Cg(s,512,256):n==="watermelon"?Pg(s,512,256):n==="eyeball"?Ig(s,512,256):n==="galaxy"?Dg(s,512,256):n==="golden"?Ug(s,512,256):n==="platinum"?Ng(s,512,256):n==="bronze"?kg(s,512,256):n==="ruby"&&Fg(s,512,256),t={map:se(i)}}}catch(e){console.warn("Could not build ball texture",n,e)}return ml.set(n,t),t}function Oi(n,t=null){var a,o,l,c,h;let e=Wg(n.id),i=n.physical||{},s={color:n.color,metalness:n.metalness,roughness:n.roughness,envMapIntensity:t!=null?t:n.env};i.clearcoat&&(s.clearcoat=i.clearcoat,s.clearcoatRoughness=(a=i.clearcoatRoughness)!=null?a:.05),i.iridescence&&(s.iridescence=i.iridescence,s.iridescenceIOR=(o=i.iridescenceIOR)!=null?o:1.6),i.sheen&&(s.sheen=i.sheen,s.sheenColor=new Tt((l=i.sheenColor)!=null?l:16777215)),i.transmission&&(s.transmission=i.transmission,s.thickness=(c=i.thickness)!=null?c:1.2,s.transparent=!0);let r=new In(s);return e.map&&(r.map=e.map),e.emissiveMap&&(r.emissiveMap=e.emissiveMap,r.emissive=new Tt(16777215),r.emissiveIntensity=(h=e.emissiveIntensity)!=null?h:1),r}function gl(n){let{canvas:t,ctx:e}=ne(160,160),[i,s,r]=n.swatch,a=e.createRadialGradient(56,48,8,80,84,74);a.addColorStop(0,i),a.addColorStop(.55,s),a.addColorStop(1,r),e.fillStyle=a,e.beginPath(),e.arc(80,82,66,0,Math.PI*2),e.fill();let o=e.createRadialGradient(54,48,2,54,48,34);return o.addColorStop(0,"rgba(255,255,255,0.85)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.beginPath(),e.ellipse(56,50,26,16,-.5,0,Math.PI*2),e.fill(),t.toDataURL("image/png")}function qg(n){let t=document.createElement("canvas");t.width=512,t.height=256;let e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,"#8fb8ff"),i.addColorStop(.46,"#f4f8ff"),i.addColorStop(.52,"#6a7280"),i.addColorStop(1,"#15181f"),e.fillStyle=i,e.fillRect(0,0,512,256),e.fillStyle="rgba(255,255,255,0.98)",e.fillRect(56,24,150,44),e.fillStyle="rgba(255,214,150,0.9)",e.fillRect(318,38,104,40),e.fillStyle="rgba(255,140,90,0.7)",e.fillRect(438,66,52,30),e.fillStyle="rgba(110,200,255,0.55)",e.fillRect(196,156,240,30),e.fillStyle="rgba(255,255,255,0.35)",e.fillRect(40,170,110,22);let s=new ms(t);s.mapping=Li,s.colorSpace=Ee;let r=new ci(n),a=r.fromEquirectangular(s);return r.dispose(),s.dispose(),a}function zh(n,{frames:t=18,size:e=128}={}){var o;let i={},s={},r=null,a=null;try{r=new Ii({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),r.setSize(e,e,!1),r.setPixelRatio(1),r.outputColorSpace=Ee,r.toneMapping=Fi,r.toneMappingExposure=1.12;let l=new hi;a=qg(r),l.environment=a.texture;let c=new ke(32,1,.1,40);c.position.set(.32,.55,4.72),c.lookAt(0,0,0);let h=new mi(16774368,3.2);h.position.set(3,4,5),l.add(h);let u=new mi(9427199,2.4);u.position.set(-4,-1,-2),l.add(u);let d=new De(1.35,44,30),p=document.createElement("canvas");p.width=e*t,p.height=e;let g=p.getContext("2d");for(let y of Cn){let m=Oi(y),f=new at(d,m);f.rotation.x=.06,l.add(f);for(let _=0;_<t;_++)f.rotation.y=_/t*Math.PI*2,r.render(l,c),g.drawImage(r.domElement,_*e,0,e,e);s[y.id]=p.toDataURL("image/webp",.82),f.rotation.y=0,r.render(l,c),i[y.id]=r.domElement.toDataURL("image/png"),l.remove(f),m.dispose()}d.dispose(),a==null||a.dispose(),r.dispose(),(o=r.forceContextLoss)==null||o.call(r)}catch(l){console.warn("Animated skin previews unavailable, using fallbacks",l);for(let c of Cn)i[c.id]=gl(c);try{a==null||a.dispose(),r==null||r.dispose()}catch{}}return{frames:t,thumbs:i,sprites:s}}var ma=class{constructor(t){this.game=t,this.cache=new Map,this.comboCount=0,this.comboTimer=null,this.toastTimer=null,this.smashTimer=null,this.hintTimer=null,this.starTimers=[],this.arenaTimer=null,this.lastFocus=null,this.bind()}q(t){return this.cache.has(t)||this.cache.set(t,document.getElementById(t)),this.cache.get(t)}show(t){t&&(t.classList.remove("hidden"),t.setAttribute("aria-hidden","false"))}hide(t){t&&(t.classList.add("hidden"),t.setAttribute("aria-hidden","true"))}tap(t){return e=>{try{this.game.audio.unlock(),this.game.audio.sfx("click")}catch{}t(e)}}bind(){let t=(o,l)=>{let c=this.q(o);c&&c.addEventListener("click",this.tap(l))};t("playBtn",()=>this.game.onPlay()),t("levelsBtn",()=>this.game.openLevels()),t("shopBtn",()=>this.game.openShop()),t("settingsBtn",()=>this.game.openSettings("menu")),t("levelsBack",()=>this.game.closeSheet()),t("shopBack",()=>this.game.closeSheet()),t("pauseBtn",()=>this.game.pauseGame()),t("resumeBtn",()=>this.game.resumeGame()),t("restartBtn",()=>this.game.restartLevel()),t("menuFromPauseBtn",()=>this.game.quitToMenu()),t("settingsFromPauseBtn",()=>this.game.openSettings("pause")),t("nextBtn",()=>this.game.nextLevel()),t("replayBtn",()=>this.game.restartLevel()),t("levelsFromCompleteBtn",()=>this.game.openLevelsFromResults()),t("finalLevelsBtn",()=>this.game.openLevelsFromResults()),t("finalReplayBtn",()=>this.game.startLevel(Xe-1)),t("finalMenuBtn",()=>this.game.quitToMenu()),t("settingsDone",()=>this.game.closeSettings());let e=this.q("musicRange"),i=this.q("sfxRange"),s=this.q("hapticsToggle"),r=this.q("autoMoveToggle"),a=this.q("autoJumpToggle");r&&r.addEventListener("change",()=>{this.game.onSettingsInput({autoMove:r.checked}),this.game.audio.unlock(),this.game.audio.sfx("click")}),a&&a.addEventListener("change",()=>{this.game.onSettingsInput({autoJump:a.checked}),this.game.audio.unlock(),this.game.audio.sfx("click")}),e&&e.addEventListener("input",()=>{this.q("musicOut").textContent=`${e.value}%`,this.game.onSettingsInput({music:Number(e.value)/100})}),i&&i.addEventListener("input",()=>{this.q("sfxOut").textContent=`${i.value}%`,this.game.audio.unlock(),this.game.onSettingsInput({sfx:Number(i.value)/100}),this.game.audio.sfx("click")}),s&&s.addEventListener("change",()=>{this.game.onSettingsInput({haptics:s.checked}),this.game.audio.unlock(),this.game.audio.sfx("click")}),document.addEventListener("keydown",o=>{o.key==="Escape"&&this.game.handleEscape()})}syncSettings(){let t=this.game.state.settings,e=this.q("musicRange"),i=this.q("sfxRange"),s=this.q("hapticsToggle"),r=this.q("autoMoveToggle"),a=this.q("autoJumpToggle");e&&(e.value=String(Math.round(t.music*100))),i&&(i.value=String(Math.round(t.sfx*100))),s&&(s.checked=!!t.haptics),r&&(r.checked=t.autoMove!==!1),a&&(a.checked=t.autoJump!==!1),this.q("musicOut").textContent=`${Math.round(t.music*100)}%`,this.q("sfxOut").textContent=`${Math.round(t.sfx*100)}%`}updateCoins(t,{pop:e=!1}={}){let i=_s(t),s=this.q("menuCoins");s&&(s.textContent=i),document.querySelectorAll(".js-coins").forEach(a=>a.textContent=i);let r=this.q("hudCoins");r&&(r.textContent=i),r&&e&&(r.classList.remove("pop"),r.offsetWidth,r.classList.add("pop"))}refreshMenu(){var c;let t=this.game.state,e=this.game.totalStars(),i=Qe.filter(h=>{var u;return(((u=t.levels[h.number])==null?void 0:u.stars)||0)>0}).length;this.q("menuStars").textContent=String(e);let s=this.q("menuStarsMax");s&&(s.textContent=`/${pl}`),this.q("levelsProgress").textContent=`${i}/${Xe}`;let r=this.q("finalCopy");r&&(r.textContent=`You've completed all ${Xe} tracks \u2014 that's the whole adventure! Replay any level to chase 3 stars, unlock every orb and beat your best times.`);let a=this.game.continueIndex(),o=Qe[a],l=i>0||(((c=t.levels[o.number])==null?void 0:c.stars)||0)>0;this.q("playLabel").textContent=l?"Continue":"Play",this.q("playSub").textContent=`Track ${o.number} \xB7 ${o.name}`,this.updateCoins(t.coins),this.q("menuHint").innerHTML=vs()?'<kbd>Hold</kbd> to roll <span class="sep">\xB7</span> <kbd>Swipe \u2191</kbd> to jump <span class="sep">\xB7</span> <kbd>Drag</kbd> to steer':'<kbd>\u2191</kbd><kbd>W</kbd> hold to roll <span class="sep">\xB7</span> <kbd>Space</kbd> jump <span class="sep">\xB7</span> <kbd>A</kbd><kbd>D</kbd> steer'}renderLevels(){let t=this.q("levelGrid");if(!t)return;t.innerHTML="";let e=this.game.state;Qe.forEach((i,s)=>{let r=Ss(s),a=e.levels[i.number]||{stars:0,best:0},o=!this.game.isLevelUnlocked(s),l=document.createElement("button");l.type="button",l.className="level-card",o&&l.classList.add("locked"),s===this.game.continueIndex()&&l.classList.add("current"),l.style.setProperty("--card-a",r.cardA),l.style.setProperty("--card-b",r.cardB),l.setAttribute("aria-label",`Track ${i.number}: ${i.name}${o?" (locked)":""}`);let c=[1,2,3].map(u=>`<svg class="ico${a.stars>=u?" on":""}" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-star"/></svg>`).join(""),h=r.cardA+", "+r.cardB;l.innerHTML=`
        <div class="level-thm" style="--thm-a:${r.cardA};--thm-b:${r.cardB}"></div>
        ${o?'<svg class="ico lock" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-lock"/></svg>':""}
        <span class="num">${String(i.number).padStart(2,"0")}</span>
        <span class="name">${i.name}</span>
        <span class="spacer"></span>
        <span class="stars">${c}</span>
        <span class="best">${a.stars>0?`BEST ${dl(a.best)}`:"NOT CLEARED"}</span>
      `,o?(l.disabled=!0,l.addEventListener("click",this.tap(()=>this.game.deny()))):(l.addEventListener("click",this.tap(()=>this.game.startLevel(s))),this.attachTilt(l)),t.appendChild(l)}),this.updateCoins(e.coins)}renderShop(){let t=this.q("skinGrid");if(!t)return;t.innerHTML="";let e=this.game.state,i=this.game.skinThumbs||{},s=this.game.skinSprites||{};Cn.forEach(r=>{let a=e.skins.includes(r.id),o=e.ball===r.id,l=e.coins>=r.price,c=r.tier||(r.price>=4500?4:r.price>=2e3?3:r.price>=600?2:1),h=document.createElement("button");h.type="button",h.className="skin-card tier-"+c+(o?" equipped":""),h.setAttribute("aria-label",`${r.name}${o?" (equipped)":a?" (owned)":` (${r.price} coins)`}`);let u;o?u='<span class="skin-status equipped"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check"/></svg> Equipped</span>':a?u='<span class="skin-status owned">Tap to equip</span>':l?u=`<span class="skin-status"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-coin"/></svg>${r.price}</span>`:u=`<span class="skin-status need"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-coin"/></svg>${r.price}</span>`;let d=s[r.id]?`<span class="skin-thumb-spin" role="img" aria-label="${r.name} orb" style="background-image:url('${s[r.id]}');--frames:${this.game.skinFrames}"></span>`:`<img alt="${r.name} orb" loading="lazy" src="${i[r.id]||gl(r)}" />`;h.innerHTML=`
        <span class="skin-tier">TIER ${c}</span>
        <span class="skin-thumb">${d}</span>
        <span class="skin-name">${r.name}</span>
        ${u}
      `,h.addEventListener("click",this.tap(()=>this.game.handleSkinClick(r.id))),this.attachTilt(h),t.appendChild(h)}),this.updateCoins(e.coins)}attachTilt(t){vs()||Fh()||(t.addEventListener("pointermove",e=>{if(e.pointerType&&e.pointerType!=="mouse")return;let i=t.getBoundingClientRect(),s=(e.clientX-i.left)/i.width-.5,r=(e.clientY-i.top)/i.height-.5;t.style.transform=`perspective(760px) rotateX(${(-r*8).toFixed(2)}deg) rotateY(${(s*10).toFixed(2)}deg) translateY(-2px) scale(1.015)`}),t.addEventListener("pointerleave",()=>{t.style.transform=""}))}showMenu(){this.hide(this.q("levelsScreen")),this.hide(this.q("shopScreen")),this.hide(this.q("hud")),this.hideArena(),this.hideModals(),this.show(this.q("menuScreen")),this.refreshMenu()}showLevels(){this.hide(this.q("menuScreen")),this.hide(this.q("shopScreen")),this.renderLevels(),this.show(this.q("levelsScreen"))}showShop(){this.hide(this.q("menuScreen")),this.hide(this.q("levelsScreen")),this.renderShop(),this.show(this.q("shopScreen"))}showGame(){this.hide(this.q("menuScreen")),this.hide(this.q("levelsScreen")),this.hide(this.q("shopScreen")),this.hideModals(),this.show(this.q("hud"))}showArena(t,e,i){let s=this.q("arenaIntro");s&&(this.q("arenaTitle").textContent=t.name,this.q("arenaSub").textContent=`TRACK ${String(e.number).padStart(2,"0")} \xB7 ${e.name}`,this.q("arenaKicker").textContent=i>=12?"NEW ARENA":"NOW ENTERING",s.style.setProperty("--arena-a",t.cardA),s.style.setProperty("--arena-b",t.cardB),s.style.setProperty("--arena-accent",t.accentCss),s.classList.remove("show"),s.offsetWidth,s.classList.add("show"),s.setAttribute("aria-hidden","false"),this.arenaTimer&&clearTimeout(this.arenaTimer),this.arenaTimer=setTimeout(()=>this.hideArena(),2200))}hideArena(){this.arenaTimer&&clearTimeout(this.arenaTimer),this.arenaTimer=null;let t=this.q("arenaIntro");t&&(t.classList.remove("show"),t.setAttribute("aria-hidden","true"))}hideSmash(){clearTimeout(this.smashTimer),this.hide(this.q("smashHud"))}hideGameHud(){this.hide(this.q("hud")),this.hideSmash(),this.hideArena()}hideModals(){for(let t of["pauseScreen","completeScreen","finalScreen","settingsScreen"])this.hide(this.q(t))}showPause(){this.show(this.q("pauseScreen"))}hidePause(){this.hide(this.q("pauseScreen"))}setPauseAvailable(t){let e=this.q("pauseBtn");e&&(e.style.visibility=t?"visible":"hidden")}showComplete(t){this.hideSmash(),this.q("completeTitle").textContent=t.isFinale?"Finale Cleared!":"Track Cleared!",this.q("completeSub").textContent=`${t.name} \xB7 Track ${t.number}`,this.q("resultCoins").textContent=`+${t.collected}`,this.q("resultTime").textContent=dl(t.time),this.q("resultFalls").textContent=String(t.falls);let e=this.q("resultSmashes");e&&(e.textContent=String(t.smashes||0));let i=t.stars,s=[{on:!0,text:"Finish"},{on:!!t.coinGoal,text:"Collect 70% coins"},{on:!!t.noFalls,text:"No falls"}];this.q("criteriaText").textContent=s.map(a=>`${a.on?"\u2713":"\u2717"} ${a.text}`).join("  \xB7  ");let r=this.q("completeStars").querySelectorAll(".star");r.forEach(a=>a.classList.remove("on")),this.starTimers.forEach(a=>clearTimeout(a)),this.starTimers=[];for(let a=0;a<i;a++){let o=setTimeout(()=>{var l;(l=r[a])==null||l.classList.add("on"),this.game.audio.sfx("star",{index:a})},380+a*260);this.starTimers.push(o)}this.q("nextBtn").textContent=t.isFinale?"Grand Finale":"Next Track",this.q("nextBtn").style.display=t.hasNext||t.isFinale?"":"none",this.show(this.q("completeScreen"))}hideComplete(){this.starTimers.forEach(t=>clearTimeout(t)),this.starTimers=[],this.hide(this.q("completeScreen"))}showFinal(t){this.q("finalStars").textContent=`${t.stars}/${pl}`,this.q("finalCoins").textContent=_s(t.coins),this.q("finalOrbs").textContent=`${t.orbs}/${Cn.length}`;let e=this.q("finalSmashes");e&&(e.textContent=_s(t.smashes||0)),this.show(this.q("finalScreen"))}setThemeAccent(t){if(!t)return;let e=document.documentElement;e.style.setProperty("--accent",t.accentCss||"#22d3ee"),e.style.setProperty("--accent-soft",t.cardA||t.accentCss||"#22d3ee")}updateSpeed(t,e=!1,i=!1){let s=Math.round(Mt(t*3.2,0,120)),r=this.q("speedValue");r&&(r.textContent=String(s));let a=this.q("speedRing");a&&(a.style.setProperty("--speed",`${Mt(s/120,0,1)*100}%`),a.classList.toggle("boost",e),a.classList.toggle("danger",i))}setSmash(t,e=1){let i=this.q("smashHud");if(!i)return;let s=this.q("smashCount"),r=this.q("smashChain");s&&(s.textContent=String(t)),r&&(r.textContent=e>=2?`x${e}!`:""),i.classList.remove("hidden","bump"),i.setAttribute("aria-hidden","false"),i.offsetWidth,i.classList.add("bump"),clearTimeout(this.smashTimer),this.smashTimer=setTimeout(()=>this.hide(i),2200)}hideFinal(){this.hide(this.q("finalScreen"))}showSettings(){this.syncSettings(),this.lastFocus=document.activeElement,this.show(this.q("settingsScreen")),setTimeout(()=>{var t;try{(t=this.q("musicRange"))==null||t.focus({preventScroll:!0})}catch{}},80)}hideSettings(){var t,e;this.hide(this.q("settingsScreen"));try{(e=(t=this.lastFocus)==null?void 0:t.focus)==null||e.call(t,{preventScroll:!0})}catch{}}setLevel(t,e){this.q("hudLevel").textContent=String(t),this.q("hudName").textContent=e,this.q("progressFill").style.width="0%",this.q("progressOrb").style.left="0%"}updateProgress(t){let e=`${Math.max(0,Math.min(1,t))*100}%`,i=this.q("progressFill"),s=this.q("progressOrb");i&&(i.style.width=e),s&&(s.style.left=e)}toast(t,e="",i=1800){let s=this.q("toast");s&&(clearTimeout(this.toastTimer),s.textContent=t,s.className=`toast ${e} show`.trim(),this.show(s),this.toastTimer=setTimeout(()=>{s.classList.add("hidden"),s.setAttribute("aria-hidden","true")},i))}setCombo(t){this.comboCount=t;let e=this.q("combo");if(e){if(t<2){this.hide(e),clearTimeout(this.comboTimer);return}e.innerHTML=`COMBO <b>x${t}</b>`,e.classList.remove("hidden","bump"),e.setAttribute("aria-hidden","false"),e.offsetWidth,e.classList.add("bump"),clearTimeout(this.comboTimer),this.comboTimer=setTimeout(()=>this.hide(e),1700)}}flash(t){let e=this.q("screenFlash");e&&(e.className="screen-flash",e.offsetWidth,e.classList.add(t))}showHint(){let t=this.q("hint");t&&(t.innerHTML=vs()?'<span class="hint-gesture"><span class="hint-finger"></span> Hold to roll</span><span class="hint-sep">\xB7</span><span class="hint-gesture">Swipe up to jump</span><span class="hint-sep">\xB7</span><span class="hint-gesture">Drag to steer</span>':'<span class="hint-gesture"><kbd class="kbd">\u2191</kbd> Hold to roll</span><span class="hint-sep">\xB7</span><span class="hint-gesture"><kbd class="kbd">Space</kbd> Jump</span><span class="hint-sep">\xB7</span><span class="hint-gesture"><kbd class="kbd">A</kbd> <kbd class="kbd">D</kbd> Steer</span>',this.show(t),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.hide(t),6500))}hideHint(){clearTimeout(this.hintTimer),this.hide(this.q("hint"))}splashStatus(t){let e=this.q("splashStatus");e&&(e.textContent=t)}hideSplash(){let t=this.q("splash");t&&(t.classList.add("fade-out"),setTimeout(()=>t.classList.add("hidden"),500))}showUnsupported(){this.hide(this.q("splash"));let t=this.q("unsupported");t&&t.classList.remove("hidden")}setShowcasePointer(t,e){this.game.setShowcasePointer(t,e)}};var Xg=112,Vh=60/Xg/4,Bi=n=>440*Math.pow(2,(n-69)/12),Yg=[{notes:[50,54,57,61],bass:38,arp:[62,66,69,73]},{notes:[47,50,54,57],bass:35,arp:[59,62,66,69]},{notes:[43,47,50,54],bass:31,arp:[55,59,62,66]},{notes:[45,49,52,55],bass:33,arp:[57,61,64,67]}],$g=[0,2,1,3,2,1,3,2],ga=class{constructor(){this.ctx=null,this.master=null,this.musicBus=null,this.sfxBus=null,this.delaySend=null,this.noiseBuffer=null,this.roll=null,this.musicTimer=null,this.nextNoteTime=0,this.stepIndex=0,this.unlocked=!1,this.ytMuted=!1,this.musicVolume=.65,this.sfxVolume=.85,this.intensity=.35,this.rollActive=!1,this.lastSfxAt=Object.create(null)}get ready(){return!!(this.ctx&&this.unlocked&&this.ctx.state==="running")}unlock(){if(this.unlocked){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t({latencyHint:"interactive"});let e=this.ctx.createDynamicsCompressor();e.threshold.value=-18,e.knee.value=24,e.ratio.value=4,e.attack.value=.004,e.release.value=.24,this.master=this.ctx.createGain(),this.master.gain.value=this.ytMuted?0:.9,this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=this.musicVolume*.5,this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=this.sfxVolume,this.musicBus.connect(this.master),this.sfxBus.connect(this.master),this.master.connect(e),e.connect(this.ctx.destination);let i=Math.floor(this.ctx.sampleRate*2);this.noiseBuffer=this.ctx.createBuffer(1,i,this.ctx.sampleRate);let s=this.noiseBuffer.getChannelData(0);for(let l=0;l<i;l++)s[l]=Math.random()*2-1;let r=this.ctx.createDelay(1);r.delayTime.value=Vh*3;let a=this.ctx.createGain();a.gain.value=.28;let o=this.ctx.createGain();o.gain.value=.3,r.connect(a),a.connect(r),r.connect(o),o.connect(this.musicBus),this.delaySend=this.ctx.createGain(),this.delaySend.gain.value=1,this.delaySend.connect(r),this.startRollLoop(),this.unlocked=!0,this.startMusic(),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}catch(t){console.warn("Audio unavailable:",t),this.unlocked=!1}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}setYouTubeAudio(t){if(this.ytMuted=!t,this.master&&this.ctx){let e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?.9:0,e,.03)}}setMusicVolume(t){this.musicVolume=Mt(t,0,1),this.musicBus&&this.ctx&&this.musicBus.gain.setTargetAtTime(this.musicVolume*.5,this.ctx.currentTime,.05)}setSfxVolume(t){this.sfxVolume=Mt(t,0,1),this.sfxBus&&this.ctx&&this.sfxBus.gain.setTargetAtTime(this.sfxVolume,this.ctx.currentTime,.05)}setIntensity(t){this.intensity=Mt(t,0,1)}startMusic(){!this.ctx||this.musicTimer||(this.nextNoteTime=this.ctx.currentTime+.12,this.stepIndex=0,this.musicTimer=setInterval(()=>this.scheduleMusic(),55))}stopMusic(){this.musicTimer&&clearInterval(this.musicTimer),this.musicTimer=null}scheduleMusic(){if(!this.ctx||this.ctx.state!=="running")return;let t=this.ctx.currentTime+.18,e=0;for(;this.nextNoteTime<t&&e++<12;){let i=Math.floor(this.stepIndex/16)%4,s=this.stepIndex%16;this.scheduleStep(s,i,this.nextNoteTime),this.nextNoteTime+=Vh,this.stepIndex++}}scheduleStep(t,e,i){let s=Yg[e],r=this.musicBus;if(t===0){for(let o of s.notes)this.tone({freq:Bi(o),type:"triangle",t:i,dur:3.15,gain:.02,attack:.5,filterFreq:780,bus:r,detune:-4}),this.tone({freq:Bi(o),type:"sawtooth",t:i,dur:3,gain:.006,attack:.7,filterFreq:620,bus:r,detune:6});this.tone({freq:Bi(s.bass),type:"sine",t:i,dur:.72,gain:.12,attack:.012,bus:r})}t===8&&(this.tone({freq:Bi(s.bass),type:"sine",t:i,dur:.55,gain:.09,attack:.012,bus:r}),this.tone({freq:Bi(s.bass+7),type:"triangle",t:i,dur:.4,gain:.035,attack:.02,bus:r})),t%2===1&&this.intensity>.25&&this.noise({t:i,dur:.035,gain:.012+this.intensity*.012,type:"highpass",freq:7200,bus:r});let a=$g[t/2|0];if(t%4===0||t%2===0&&this.intensity>.55){let o=s.arp[a%s.arp.length]+(t%8===6?12:0);this.pluck(Bi(o),i,.022+this.intensity*.012)}t===14&&this.intensity>.6&&this.pluck(Bi(s.arp[3]+12),i,.014)}pluck(t,e,i){this.tone({freq:t,type:"sine",t:e,dur:.24,gain:i,attack:.004,bus:this.musicBus,extra:this.delaySend}),this.tone({freq:t*2.005,type:"triangle",t:e,dur:.12,gain:i*.4,attack:.003,bus:this.musicBus,extra:this.delaySend})}tone({freq:t,freqEnd:e,type:i="sine",t:s,dur:r,gain:a,attack:o=.006,filterFreq:l,q:c=.8,bus:h,detune:u=0,extra:d}){if(!this.ctx)return;let p=this.ctx,g=p.createOscillator();g.type=i,g.frequency.setValueAtTime(Math.max(20,t),s),e&&g.frequency.exponentialRampToValueAtTime(Math.max(20,e),s+r),u&&(g.detune.value=u);let y=p.createGain();y.gain.setValueAtTime(1e-4,s),y.gain.linearRampToValueAtTime(Math.max(2e-4,a),s+o),y.gain.exponentialRampToValueAtTime(1e-4,s+r);let m=g;if(l){let f=p.createBiquadFilter();f.type="lowpass",f.frequency.value=l,f.Q.value=c,m.connect(f),m=f}m.connect(y),y.connect(h||this.sfxBus),d&&y.connect(d),g.start(s),g.stop(s+r+.03)}noise({t,dur:e,gain:i,type:s="bandpass",freq:r=1e3,freqEnd:a,q:o=.9,bus:l,attack:c=.004,offset:h}){if(!this.ctx||!this.noiseBuffer)return;let u=this.ctx,d=u.createBufferSource();d.buffer=this.noiseBuffer;let p=u.createBiquadFilter();p.type=s,p.Q.value=o,p.frequency.setValueAtTime(r,t),a&&p.frequency.exponentialRampToValueAtTime(Math.max(40,a),t+e);let g=u.createGain();g.gain.setValueAtTime(1e-4,t),g.gain.linearRampToValueAtTime(Math.max(2e-4,i),t+c),g.gain.exponentialRampToValueAtTime(1e-4,t+e),d.connect(p),p.connect(g),g.connect(l||this.sfxBus),this.noiseBuffer&&d.start(t,h!=null?h:Math.random()*1.5),d.stop(t+e+.03)}startRollLoop(){let t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;let i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=360,i.Q.value=.75;let s=t.createGain();s.gain.value=1e-4,e.connect(i),i.connect(s),s.connect(this.sfxBus),e.start(),this.roll={gain:s,filter:i}}updateRoll(t,e,i){if(!this.ctx||!this.roll)return;let s=this.ctx.currentTime,r=Mt(t/18,0,1.3),a=0;e&&(a=i?.045+r*.05:.014+r*.014),this.roll.gain.gain.setTargetAtTime(a,s,.07),this.roll.filter.frequency.setTargetAtTime(i?300+t*26:780+t*12,s,.1)}stopRoll(){!this.ctx||!this.roll||this.roll.gain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.04)}sfx(t,e={}){if(!this.ready)return;let i=this.ctx.currentTime+.001,s=this.ctx.currentTime,r=this.lastSfxAt[t]||0;if(!(s-r<.016))switch(this.lastSfxAt[t]=s,t){case"click":{this.tone({freq:740,type:"triangle",t:i,dur:.07,gain:.07}),this.tone({freq:1180,type:"sine",t:i+.02,dur:.06,gain:.035});break}case"coin":{let a=Math.min(12,e.combo||0),o=980*Math.pow(2,a/12);this.tone({freq:o,type:"sine",t:i,dur:.075,gain:.085}),this.tone({freq:o*1.498,type:"sine",t:i+.052,dur:.11,gain:.075}),this.noise({t:i,dur:.05,gain:.018,type:"highpass",freq:5200});break}case"gem":{[880,1174.66,1567.98].forEach((a,o)=>{this.tone({freq:a,type:"sine",t:i+o*.055,dur:.3,gain:.06}),this.tone({freq:a*2,type:"triangle",t:i+o*.055,dur:.16,gain:.018})}),this.noise({t:i,dur:.45,gain:.018,type:"highpass",freq:6800});break}case"bounce":{this.tone({freq:220,freqEnd:95,type:"sine",t:i,dur:.2,gain:.12}),this.noise({t:i,dur:.06,gain:.03,type:"lowpass",freq:900});break}case"hit":{this.tone({freq:130,freqEnd:45,type:"sine",t:i,dur:.28,gain:.26}),this.noise({t:i,dur:.2,gain:.16,type:"lowpass",freq:1400}),this.noise({t:i,dur:.05,gain:.1,type:"highpass",freq:2600});break}case"smash":{let o=120+Mt(e.combo||1,1,8)*18;this.tone({freq:o,freqEnd:34,type:"sine",t:i,dur:.3,gain:.3}),this.noise({t:i,dur:.24,gain:.2,type:"lowpass",freq:2e3,freqEnd:380}),this.noise({t:i,dur:.07,gain:.09,type:"highpass",freq:3400}),e.mass&&(this.tone({freq:58,freqEnd:26,type:"sine",t:i+.02,dur:.45,gain:.24}),this.noise({t:i+.02,dur:.32,gain:.12,type:"lowpass",freq:900}));break}case"boost":{this.noise({t:i,dur:.34,gain:.1,type:"bandpass",freq:700,freqEnd:4800,q:1.4}),this.tone({freq:240,freqEnd:660,type:"triangle",t:i,dur:.3,gain:.045});break}case"checkpoint":{[523.25,659.25,783.99].forEach((a,o)=>{this.tone({freq:a,type:"triangle",t:i+o*.08,dur:.35,gain:.07})}),this.noise({t:i+.12,dur:.3,gain:.014,type:"highpass",freq:6400});break}case"fall":{this.tone({freq:640,freqEnd:130,type:"sine",t:i,dur:.55,gain:.1}),this.noise({t:i,dur:.5,gain:.03,type:"bandpass",freq:900,freqEnd:300});break}case"respawn":{this.tone({freq:420,freqEnd:760,type:"triangle",t:i,dur:.22,gain:.06}),this.noise({t:i,dur:.18,gain:.02,type:"highpass",freq:4e3});break}case"win":{[523.25,659.25,783.99,1046.5].forEach((o,l)=>{this.tone({freq:o,type:"triangle",t:i+l*.115,dur:.5,gain:.095}),this.tone({freq:o*2,type:"sine",t:i+l*.115,dur:.3,gain:.03})}),this.tone({freq:1046.5,type:"triangle",t:i+.5,dur:1.1,gain:.07}),this.tone({freq:1318.5,type:"sine",t:i+.5,dur:1,gain:.04}),this.noise({t:i+.3,dur:1.2,gain:.02,type:"highpass",freq:6800});break}case"star":{let a=Mt(e.index||0,0,4),o=[880,1108.73,1318.51,1760,2217];this.tone({freq:o[a],type:"triangle",t:i,dur:.5,gain:.085}),this.tone({freq:o[a]*2,type:"sine",t:i,dur:.25,gain:.025});break}case"buy":{[659.25,987.77,1318.51].forEach((a,o)=>{this.tone({freq:a,type:"triangle",t:i+o*.06,dur:.24,gain:.075})}),this.noise({t:i+.1,dur:.2,gain:.025,type:"highpass",freq:5600});break}case"deny":{this.tone({freq:150,freqEnd:110,type:"square",t:i,dur:.16,gain:.045,filterFreq:800});break}case"land":{this.tone({freq:160,freqEnd:80,type:"sine",t:i,dur:.14,gain:.07}),this.noise({t:i,dur:.07,gain:.025,type:"lowpass",freq:700});break}default:break}}};var Gh=new M(0,1,0),yi=Math.PI*2;function Zg(){let{canvas:n,ctx:t}=ne(256,256);t.fillStyle="#23272f",t.fillRect(0,0,256,256),t.save(),t.translate(128,128),t.rotate(-Math.PI/4),t.fillStyle="#ffc93c";for(let i=-320;i<320;i+=64)t.fillRect(i,-320,32,640);t.restore(),t.fillStyle="rgba(0,0,0,0.2)";for(let i=0;i<220;i++)t.fillRect(Math.random()*256,Math.random()*256,1.5,1.5);t.strokeStyle="rgba(255,255,255,0.1)",t.lineWidth=1;for(let i=0;i<14;i++){let s=Math.random()*256,r=Math.random()*256;t.beginPath(),t.moveTo(s,r),t.lineTo(s+Math.random()*22-11,r+Math.random()*22-11),t.stroke()}let e=t.createLinearGradient(0,0,0,256);return e.addColorStop(0,"rgba(255,255,255,0.2)"),e.addColorStop(.5,"rgba(255,255,255,0)"),e.addColorStop(1,"rgba(0,0,0,0.3)"),t.fillStyle=e,t.fillRect(0,0,256,256),se(n,{repeat:!0})}function Jg(){let{canvas:n,ctx:t}=ne(256,256);t.fillStyle="#4b5230",t.fillRect(0,0,256,256);let e=[["#5f6839",18],["#343a22",14],["#6b5b3a",9],["#2a2f1d",8]];for(let[s,r]of e){t.fillStyle=s;for(let a=0;a<r;a++){let o=Math.random()*256,l=Math.random()*256;t.beginPath(),t.ellipse(o,l,12+Math.random()*26,8+Math.random()*18,Math.random()*yi,0,yi),t.fill()}}t.fillStyle="rgba(20,22,14,0.18)";for(let s=0;s<700;s++)t.fillRect(Math.random()*256,Math.random()*256,2,1);t.strokeStyle="rgba(210,205,170,0.1)";for(let s=0;s<10;s++){let r=Math.random()*256,a=Math.random()*256;t.beginPath(),t.moveTo(r,a);for(let o=0;o<4;o++)r+=(Math.random()-.5)*30,a+=(Math.random()-.5)*30,t.lineTo(r,a);t.stroke()}let i=se(n);return i.wrapS=i.wrapT=ai,i.repeat.set(1.6,1.6),i}function Kg(){let{canvas:n,ctx:t}=ne(128,128);return t.fillStyle="#ffc93c",t.fillRect(0,0,128,128),t.fillStyle="#23272f",t.beginPath(),t.moveTo(64,16),t.lineTo(116,108),t.lineTo(12,108),t.closePath(),t.fill(),t.fillStyle="#ffc93c",t.fillRect(59,48,10,34),t.beginPath(),t.arc(64,94,7,0,yi),t.fill(),se(n)}function Qg(n,t){let e=n.frameAt(t),i=new Gt,s=new Yt().makeBasis(e.n,Gh,e.t);return i.quaternion.setFromRotationMatrix(s),i.position.copy(e.p),n.group.add(i),{group:i,frame:e}}function ie(n,t,e,i,s,r,a,o){let l=new at(new we(t,e,i),o);return l.position.set(s,r,a),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function $t(n,t,e,i,s,r,a,o,l,c=0,h=0,u=0){let d=new at(new ce(t,e,i,s),l);return d.position.set(r,a,o),d.rotation.set(c,h,u),d.castShadow=!0,d.receiveShadow=!0,n.add(d),d}function gi(n,t,e,i,s,r=.035,a=.05,o="y"){let l=$t(n,r,r,a,8,t,e,i,s);return o==="x"&&(l.rotation.z=Math.PI/2),o==="z"&&(l.rotation.x=Math.PI/2),l}function jg(n){return{darkMetal:new xt({color:2106670,metalness:.9,roughness:.28}),midMetal:new xt({color:5068912,metalness:.82,roughness:.32}),steel:new xt({color:10135482,metalness:.95,roughness:.2}),rubber:new xt({color:1316378,metalness:.08,roughness:.96}),hazard:new xt({map:Zg(),metalness:.28,roughness:.52}),warning:new xt({color:16726862,emissive:16720435,emissiveIntensity:.9,metalness:.3,roughness:.28}),amber:new xt({color:16756782,emissive:16747008,emissiveIntensity:1.2,metalness:.25,roughness:.3}),ice:new In({color:11462911,metalness:.1,roughness:.04,transmission:.45,thickness:1.6,clearcoat:1,clearcoatRoughness:.04,emissive:5230591,emissiveIntensity:.22,transparent:!0,opacity:.92}),accent:new xt({color:n.accent,emissive:n.accent,emissiveIntensity:n.id==="neon"?1.5:.6,metalness:.55,roughness:.22}),armor:new xt({map:Jg(),metalness:.36,roughness:.66}),armorDark:new xt({color:2896160,metalness:.3,roughness:.82}),glass:new xt({color:7330047,emissive:2990038,emissiveIntensity:1.1,metalness:.2,roughness:.08,transparent:!0,opacity:.8}),glow:new me({color:16773304,transparent:!0,opacity:.85})}}function ty(n,t,e){let i=-(t+.82);ie(n,.64,.24,.64,i,.12,0,e.darkMetal);for(let l=0;l<4;l++){let c=l/4*yi+Math.PI/4;gi(n,i+Math.cos(c)*.24,.25,Math.sin(c)*.24,e.steel,.035,.06)}$t(n,.14,.18,4.25,14,i,2.22,0,e.midMetal);for(let l of[.6,1.9,3.3,4.25])$t(n,.2,.2,.08,14,i,l,0,e.steel);ie(n,t+.9,.18,.26,i/2,4.32,0,e.darkMetal),ie(n,.14,.16,.9,i+.05,4.32,0,e.midMetal);let s=$t(n,.2,.2,.58,16,0,4.32,0,e.steel,0,0,Math.PI/2);gi(s,0,.34,0,e.darkMetal,.04,.12);let r=$t(n,.07,.09,.14,10,i,4.48,.16,e.warning);r.userData.pulse=!0;let a=new Gt;a.position.set(0,4.28,0),n.add(a),ie(a,.17,3.28,.17,0,-1.64,0,e.darkMetal),ie(a,.34,.2,.34,0,-.22,0,e.midMetal),$t(a,.055,.055,2.2,10,.15,-1.4,.18,e.steel),$t(a,.09,.09,1.1,10,.15,-1.4,.18,e.midMetal);let o=$t(a,.66,.72,1.08,24,0,-3.35,0,e.hazard,Math.PI/2);$t(a,.76,.76,.12,24,0,-3.35,.56,e.steel,Math.PI/2),$t(a,.76,.76,.12,24,0,-3.35,-.56,e.steel,Math.PI/2),$t(a,.82,.82,.1,24,0,-3.35,0,e.amber,Math.PI/2);for(let l of[-.62,.62])for(let c=0;c<8;c++){let h=c/8*yi;gi(a,Math.cos(h)*.68,-3.35+Math.sin(h)*.68,l,e.darkMetal,.035,.08,"z")}return $t(a,.12,.12,.2,10,0,-1.72,0,e.amber),{headMesh:o,swing:{pivot:a,amp:.62,arm:3.4,pivotY:4.28}}}function ey(n,t,e){let i=t+.82;for(let c of[-i,i])ie(n,.5,.18,.5,c,.09,0,e.darkMetal),$t(n,.13,.2,5.45,12,c,2.82,0,e.midMetal),$t(n,.28,.28,.1,12,c,.32,0,e.steel),$t(n,.24,.24,.1,12,c,5.3,0,e.steel);ie(n,i*2+.5,.28,.38,0,5.48,0,e.darkMetal);for(let c=-3;c<=3;c++)ie(n,.1,.1,.46,c*.6,5.48,0,e.steel);$t(n,.2,.2,.7,14,0,5.62,0,e.steel,0,0,Math.PI/2),gi(n,0,5.62,.38,e.darkMetal,.05,.1);for(let c of[-i,i])ie(n,.06,3.6,.06,c*.55,3.1,0,e.steel).rotation.z=c>0?-.32:.32;let s=$t(n,.08,.1,.16,10,i,5.78,0,e.warning);s.userData.pulse=!0;let r=new Gt;r.position.set(0,5.6,0),n.add(r),$t(r,.1,.14,.3,10,0,-.1,0,e.steel);for(let c=0;c<7;c++){let h=new at(new nn(.16,.055,8,14),e.midMetal);h.position.set(0,-.4-c*.32,0),h.rotation.set(Math.PI/2,0,c%2?Math.PI/2:0),h.castShadow=!0,r.add(h)}let a=new at(new De(.8,28,20),e.midMetal);a.position.set(0,-2.86,0),a.castShadow=!0,r.add(a);let o=new at(new nn(.81,.08,10,28),e.hazard);o.rotation.x=Math.PI/2,o.position.set(0,-2.86,0),r.add(o),$t(r,.18,.18,.22,12,0,-2.86,.8,e.steel,Math.PI/2);for(let c=0;c<10;c++){let h=c/10*yi;gi(r,Math.cos(h)*.7,-2.86+Math.sin(h)*.7,0,e.darkMetal,.04,.08,"z")}let l=new at(new De(.22,12,10),e.accent);return l.position.set(0,-2.2,0),r.add(l),{headMesh:a,swing:{pivot:r,amp:.72,arm:4.1,pivotY:5.6,axis:"x"}}}function ny(n,t){let e=ie(n,1.7,1.52,1.4,0,.8,0,t.hazard);ie(n,1.8,.12,1.5,0,1.62,0,t.darkMetal),ie(n,1.82,.1,1.52,0,.04,0,t.darkMetal);for(let a of[-.84,.84])for(let o of[-.69,.69])ie(n,.12,1.55,.12,a,.8,o,t.midMetal),gi(n,a,1.64,o,t.darkMetal,.045,.08);ie(n,.06,1.1,.7,.865,.84,0,t.steel),ie(n,.06,1.1,.7,-.865,.84,0,t.steel);let i=new xt({map:Kg(),metalness:.15,roughness:.55}),s=new at(new qe(.62,.62),i);s.position.set(0,.86,.706),n.add(s);let r=$t(n,.11,.11,.16,12,0,1.73,0,t.amber);r.userData.pulse=!0;for(let a of[-.55,.55])$t(n,.07,.07,.05,10,a,1.68,.55,t.warning);return{headMesh:e}}function iy(n,t){let e=new Gt;n.add(e);let i=[-.72,-.36,0,.36,.72];for(let u of[-1,1]){let d=u*1;ie(e,.56,.66,2.08,d,.48,0,t.rubber),ie(e,.62,.06,2.14,d,.82,0,t.darkMetal),ie(e,.6,.06,2.14,d,.13,0,t.darkMetal);for(let p of i)$t(e,.23,.23,.59,14,d,.34,p,t.midMetal,0,0,Math.PI/2),$t(e,.1,.1,.61,10,d,.34,p,t.darkMetal,0,0,Math.PI/2);$t(e,.3,.3,.6,14,d,.54,.98,t.steel,0,0,Math.PI/2),$t(e,.28,.28,.6,14,d,.54,-.98,t.steel,0,0,Math.PI/2);for(let p=0;p<9;p++){let g=-.92+p*.23;ie(e,.6,.06,.12,d,.87,g,t.darkMetal),p%2===0&&ie(e,.58,.05,.1,d,.08,g,t.darkMetal)}ie(e,.06,.22,1.75,u*1.32,.62,0,t.armorDark),ie(e,.1,.06,1.5,u*1.36,.78,0,t.armor);for(let p=0;p<4;p++)gi(e,u*1.35,.55,-.6+p*.4,t.steel,.035,.06,"x")}ie(e,1.72,.44,1.9,0,.76,0,t.armor),ie(e,1.5,.36,1.52,0,1.08,-.05,t.armor);let s=ie(e,1.58,.09,.9,0,.98,.8,t.armor);s.rotation.x=-.62,ie(e,1.44,.08,.52,0,1.2,-.64,t.armorDark);for(let u=0;u<6;u++)ie(e,.06,.05,.44,-.5+u*.2,1.26,-.64,t.steel);ie(e,1.62,.08,.36,0,.98,-.94,t.armorDark),$t(e,.075,.075,.4,8,-.52,1.26,-.88,t.darkMetal,Math.PI/2),$t(e,.075,.075,.4,8,.52,1.26,-.88,t.darkMetal,Math.PI/2);for(let u of[-1,1])ie(e,.26,.18,.1,u*.56,1,1,t.midMetal),$t(e,.075,.075,.06,12,u*.56,1,1.06,t.glass,Math.PI/2),ie(e,.2,.08,.36,u*.9,.94,.42,t.armorDark),ie(e,.1,.04,.3,u*.9,1,.42,t.steel);let r=new at(new nn(.09,.03,6,12),t.steel);r.position.set(0,.62,1.03),r.rotation.x=Math.PI/2,e.add(r),$t(e,.62,.68,.14,18,0,1.27,-.04,t.darkMetal);let a=new Gt;a.position.set(0,1.32,-.05),e.add(a),$t(a,.46,.62,.42,16,0,.2,0,t.armor);let o=new at(new De(.56,18,9,0,yi,0,Math.PI/2),t.armor);o.position.y=.4,o.scale.y=.5,o.castShadow=!0,a.add(o),ie(a,.66,.32,.28,0,.22,.56,t.armor);let l=$t(a,.3,.34,.26,14,0,.22,.66,t.armorDark,Math.PI/2);l.rotation.x=Math.PI/2,$t(a,.075,.09,1.42,14,0,.22,1.32,t.midMetal,Math.PI/2),ie(a,.24,.22,.3,0,.22,2.02,t.darkMetal),ie(a,.3,.08,.2,0,.22,2.06,t.steel),$t(a,.22,.22,.08,12,-.22,.55,-.12,t.armorDark),$t(a,.16,.16,.06,12,-.22,.61,-.12,t.midMetal),ie(a,.14,.12,.2,.24,.58,-.18,t.armorDark),$t(a,.035,.035,.18,8,.24,.65,-.1,t.glass),$t(a,.012,.012,.95,6,.44,.86,-.3,t.darkMetal),$t(a,.04,.04,.05,8,.44,1.34,-.3,t.warning);for(let u of[-1,1])for(let d=0;d<3;d++){let p=$t(a,.035,.045,.24,8,u*.55,.3,.1+d*.12,t.darkMetal);p.rotation.z=u*-.5,p.rotation.x=-.3}let c=new at(new De(.075,10,8),t.warning);c.position.set(.34,.66,.16),a.add(c),c.userData.pulse=!0;let h=ie(a,.06,.06,.5,.2,.63,.24,t.darkMetal);return h.rotation.x=-.1,ie(a,.12,.12,.2,.2,.58,.18,t.midMetal),{headMesh:e,tankTurret:a,beacons:[c]}}function sy(n,t,e,i){let s=e.side||1,r=-s*(t+.72),a=t*2+1.35;$t(n,.42,.5,.2,12,r,.1,0,i.darkMetal);for(let p=0;p<3;p++){let g=p/3*yi,y=ie(n,.12,.55,.12,r+Math.cos(g)*.3,.32,Math.sin(g)*.3,i.midMetal);y.rotation.z=Math.cos(g)*.34,y.rotation.x=-Math.sin(g)*.34}$t(n,.16,.2,.72,12,r,.62,0,i.midMetal),$t(n,.22,.22,.1,12,r,.96,0,i.steel);let o=new Gt;o.position.set(r,1.02,0),n.add(o);let l=new $s(.15,Math.max(.2,a-.3),6,12);l.rotateZ(Math.PI/2);let c=new at(l,i.hazard);c.position.x=s*a/2,c.castShadow=!0,o.add(c);let h=new at(new $s(.2,Math.max(.2,a-.4),6,12),i.darkMetal);h.geometry.rotateZ(Math.PI/2),h.position.x=s*a/2,h.scale.set(1,.35,1),o.add(h);for(let p=1;p<=3;p++){let g=p/4,y=new at(new De(.08,10,8),i.warning);y.position.set(s*a*g,.18,0),o.add(y)}let u=new at(new De(.28,14,10),i.accent);u.position.x=s*(a-.12),u.castShadow=!0,o.add(u),$t(o,.24,.24,.26,12,0,.06,0,i.darkMetal),gi(o,0,.2,0,i.steel,.06,.08);let d=new at(new nn(a*.55,.03,6,48),i.accent);return d.rotation.x=Math.PI/2,d.scale.set(1,.55,1),d.material=i.accent.clone(),d.material.transparent=!0,d.material.opacity=.35,o.add(d),{headMesh:c,swing:{pivot:o,side:s,barLen:a,hubX:r,amp:0,axis:"y"},halo:d}}function Wh(n,t,e){let i=Mt(t.at,.02,.97)*n.length,{group:s}=Qg(n,i),r=n.width/2,a=jg(e),o=t.type,l=null,c=null,h=[],u=null,d=null,p=null,g=new M;o==="hammer"?{headMesh:l,swing:c}=ty(s,r,a):o==="wrecking"?{headMesh:l,swing:c}=ey(s,r,a):o==="block"?{headMesh:l}=ny(s,a):o==="tank"?{headMesh:l,tankTurret:u,beacons:h}=iy(s,a):o==="spinner"&&({headMesh:l,swing:c,halo:d}=sy(s,r,t,a));let y={type:o,spec:t,group:s,dist:i,destroyed:!1,blockX:0,blockVel:0,blockLimit:0,update(m,f){if(y.destroyed)return;for(let x of h)x&&(x.material.emissiveIntensity=1.2+Math.sin(m*6.2+t.phase)*.8);if(u&&(u.rotation.y=Math.sin(m*.5+(t.phase||0))*.16),d&&(d.rotation.z=-m*1.6,d.material.opacity=.22+Math.sin(m*4+t.phase)*.1),!c){if(o==="block"||o==="tank"){let x=Math.max(.4,(t.amp||.6)*r),E=m*(t.speed||1)+(t.phase||0),P=Math.sin(E)*x;l&&(l.position.x=P),y.blockX=P,y.blockVel=Math.cos(E)*x*(t.speed||1)*(o==="tank"?.8:1),y.blockLimit=x}s.updateMatrixWorld(!0);return}let _=Math.sin(m*(t.speed||1.4)+(t.phase||0))*c.amp;if(c.axis==="x"?c.pivot.rotation.x=_:c.axis==="y"?c.pivot.rotation.y=m*(t.speed||1.4)+(t.phase||0):c.pivot.rotation.z=_,s.updateMatrixWorld(!0),l){let x=new M;l.getWorldPosition(x),p&&f>0&&g.copy(x).sub(p).multiplyScalar(1/f).clampLength(0,22),p=x}},collide(m,f){if(y.destroyed)return null;if(o==="block"||o==="tank"){let R=s.worldToLocal(m.clone()),U=y.blockX||0,v=o==="tank"?1.2:.85,b=o==="tank"?.95:.8,F=o==="tank"?.98:.7,Z=.92,rt=R.x-U,L=R.y-Z,N=R.z,W=new M(U+Mt(rt,-v,v),Z+Mt(L,-b,b),Mt(N,-F,F)),nt=new M(R.x-W.x,R.y-W.y,R.z-W.z),tt=nt.length();if(tt>=f)return null;let V;tt<1e-4?V=new M(Math.sign(rt)||1,0,0):V=nt.multiplyScalar(1/tt);let D=V.clone().applyQuaternion(s.quaternion);return{normal:D,push:D.clone().multiplyScalar(f-tt+.02),impulse:D.clone().multiplyScalar(4.4).add(new M(0,1.8,0)),kind:o}}if(o==="spinner"){let R=new M;c.pivot.getWorldPosition(R);let U=new M(c.side*c.barLen,0,0),v=c.pivot.localToWorld(U.clone()),b=new M().subVectors(v,R),F=b.lengthSq()||1,Z=Mt(new M().subVectors(m,R).dot(b)/F,0,1),rt=R.clone().addScaledVector(b,Z),L=Math.abs(m.y-rt.y),N=Math.hypot(m.x-rt.x,m.z-rt.z);if(N>f+.2||L>1.05)return null;let W=new M(m.x-rt.x,0,m.z-rt.z);W.lengthSq()<1e-4&&W.set(1,0,0),W.normalize();let nt=new M().subVectors(rt,R),tt=new M().crossVectors(Gh,nt).normalize().multiplyScalar((t.speed||1.4)*3.2);return{normal:W,push:W.clone().multiplyScalar(f+.2-N+.02),impulse:W.clone().multiplyScalar(5.2).add(tt).add(new M(0,2,0)),kind:"spinner"}}if(!l)return null;let _=new M;l.getWorldPosition(_);let x=f+(o==="wrecking"?.82:.72),E=new M().subVectors(m,_),P=E.length();if(P>x)return null;let w=P<1e-4?new M(0,1,0):E.multiplyScalar(1/P);return{normal:w,push:w.clone().multiplyScalar(x-P+.02),impulse:w.clone().multiplyScalar(6.4).add(g.clone().multiplyScalar(.35)).add(new M(0,2.6,0)),kind:o}},fragments(){s.updateMatrixWorld(!0);let m=new Tn().setFromObject(s),f=m.getCenter(new M),_=[],x=new M,E=new M,P=new oe,w=new Yt;return s.traverse(R=>{var b;if(!R.isMesh||!R.visible||!R.geometry||R.userData.noDebris)return;let U=R.geometry;U.boundingSphere||U.computeBoundingSphere(),w.copy(R.matrixWorld),w.decompose(E,P,x);let v=(((b=U.boundingSphere)==null?void 0:b.radius)||.2)*Math.max(x.x,x.y,x.z);v<.03||_.push({geometry:U,material:Array.isArray(R.material)?R.material[0]:R.material,matrix:w.clone(),radius:v})}),_.sort((R,U)=>U.radius-R.radius),{fragments:_.slice(0,22),center:f,radius:Math.max(1,m.getSize(new M).length()*.45),accent:o==="tank"?12034922:o==="block"?16763196:e.accent,kind:o}},shatter(){return y.destroyed?!1:(y.destroyed=!0,s.visible=!1,!0)}};return y}var $e=new M(0,1,0);function ry(){let{canvas:n,ctx:t}=ne(256,512),e=t.createLinearGradient(0,0,256,0);e.addColorStop(0,"#b07a4e"),e.addColorStop(.28,"#c68e5c"),e.addColorStop(.5,"#b98251"),e.addColorStop(.75,"#c99361"),e.addColorStop(1,"#a96f45"),t.fillStyle=e,t.fillRect(0,0,256,512);let i=64;for(let s=0;s<512;s+=i){t.fillStyle="rgba(60,30,12,0.45)",t.fillRect(0,s,256,3),t.fillStyle="rgba(255,225,190,0.12)",t.fillRect(0,s+3,256,2);for(let r=0;r<26;r++){let a=Math.random()*256,o=s+6+Math.random()*(i-10),l=20+Math.random()*90;t.strokeStyle=`rgba(${70+Math.random()*40},${40+Math.random()*25},${20+Math.random()*15},0.22)`,t.lineWidth=.8+Math.random(),t.beginPath(),t.moveTo(a,o),t.bezierCurveTo(a+l*.3,o+3,a+l*.6,o-3,a+l,o+1),t.stroke()}if(Math.random()>.55){let r=30+Math.random()*190,a=s+16+Math.random()*30;t.strokeStyle="rgba(55,28,12,0.4)",t.lineWidth=2,t.beginPath(),t.ellipse(r,a,5+Math.random()*4,3+Math.random()*3,0,0,Math.PI*2),t.stroke()}}return se(n,{repeat:!0,anisotropy:8})}function ay(){let{canvas:n,ctx:t}=ne(256,128),e=32;for(let i=0;i<128;i+=e)for(let s=0;s<256;s+=e)t.fillStyle=(s/e+i/e)%2===0?"#f4f6ff":"#151824",t.fillRect(s,i,e,e);return se(n,{repeat:!0})}function oy(){let{canvas:n,ctx:t}=ne(128,128),e=t.createRadialGradient(46,38,6,62,70,78);return e.addColorStop(0,"#fff8c9"),e.addColorStop(.36,"#ffd54a"),e.addColorStop(.78,"#f5a300"),e.addColorStop(1,"#a86600"),t.fillStyle=e,t.fillRect(0,0,128,128),t.strokeStyle="rgba(150, 92, 0, 0.7)",t.lineWidth=5,t.beginPath(),t.arc(64,64,48,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(255, 248, 190, 0.7)",t.lineWidth=2,t.beginPath(),t.arc(64,64,41,0,Math.PI*2),t.stroke(),t.fillStyle="#8a5200",t.font="900 76px Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("$",64,66),se(n)}function qh(n){let{canvas:t,ctx:e}=ne(256,512);e.clearRect(0,0,256,512),e.strokeStyle=n,e.lineWidth=26,e.lineCap="round",e.lineJoin="round",e.shadowColor=n,e.shadowBlur=26;for(let i=0;i<3;i++){let s=110+i*140;e.beginPath(),e.moveTo(62,s+52),e.lineTo(128,s-8),e.lineTo(194,s+52),e.stroke()}return se(t)}function ly(n){let{canvas:t,ctx:e}=ne(512,256),i=e.createLinearGradient(0,0,0,256);return i.addColorStop(0,"rgba(16,22,40,0)"),i.addColorStop(.35,"rgba(16,22,40,0.55)"),i.addColorStop(1,"rgba(16,22,40,0)"),e.fillStyle=i,e.fillRect(0,0,512,256),e.strokeStyle=n.accentCss,e.lineWidth=10,e.shadowColor=n.accentCss,e.shadowBlur=22,e.strokeRect(46,42,420,172),e.shadowBlur=0,e.fillStyle="#ffffff",e.font="900 86px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("START",256,132),se(t)}function cy(n){let{canvas:t,ctx:e}=ne(1024,256),i=e.createLinearGradient(0,0,1024,0);i.addColorStop(0,"#131a33"),i.addColorStop(.5,"#1d2748"),i.addColorStop(1,"#131a33"),e.fillStyle=i,e.fillRect(0,0,1024,256);let s=32;for(let r=0;r<1024;r+=s)for(let a=0;a<3;a++)for(let o=0;o<2;o++){let l=r+o*(s/2),c=a*s+(a===1?s/2:0);e.fillStyle=(r/s+a+o)%2===0?"#f2f5ff":"#11141f",e.fillRect(l,c,s/2,s/2),e.fillRect(l+1024-s,256-c-s/2,s/2,s/2)}return e.strokeStyle=n.accentCss,e.lineWidth=12,e.strokeRect(64,40,896,176),e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle",e.font="900 118px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",e.shadowColor=n.accentCss,e.shadowBlur=34,e.fillText("FINISH",512,132),e.shadowBlur=0,se(t)}function Es(n,t,e,i,s,r){let a=[],o=[],l=[];for(let[u,d]of t){if(d<=u)continue;let p=a.length/3;for(let y=u;y<=d;y++){let m=n[y],f=m.p.clone().addScaledVector(m.n,e),_=m.p.clone().addScaledVector(m.n,i);f.y+=s,_.y+=s,a.push(f.x,f.y,f.z,_.x,_.y,_.z),o.push(0,m.dist/6,1,m.dist/6)}let g=d-u+1;for(let y=0;y<g-1;y++){let m=p+y*2,f=m+1,_=m+2,x=m+3;l.push(m,_,f,f,_,x)}}let c=new ye;c.setAttribute("position",new Qt(a,3)),c.setAttribute("uv",new Qt(o,2)),c.setIndex(l),c.computeVertexNormals();let h=new at(c,r);return h.receiveShadow=!0,h}function ya(n){let t=Mt(n,0,1);return t*t*(3-2*t)}function hy(n,t){let e=0;for(let i of n)t>=i.start-i.rampLen&&t<=i.start?e=Math.max(e,i.height*ya((t-(i.start-i.rampLen))/i.rampLen)):t>=i.end&&t<=i.end+i.rampLen&&(e=Math.max(e,i.height*(1-ya((t-i.end)/i.rampLen))));return e}function uy(n,t,e){let i=[],s=[];for(let o of[-1,1]){let l=i.length/3;for(let h of n){let u=h.p.clone().addScaledVector(h.n,o*t),d=u.clone();d.y-=.85,i.push(u.x,u.y,u.z,d.x,d.y,d.z)}let c=n.length;for(let h=0;h<c-1;h++){let u=l+h*2,d=u+1,p=u+2,g=u+3;s.push(u,d,p,d,g,p)}}let r=new ye;r.setAttribute("position",new Qt(i,3)),r.setIndex(s),r.computeVertexNormals();let a=new at(r,e);return a.receiveShadow=!0,a}function dy(n,t,e,i){let s=[],r=[],a=(c,h,u)=>{let d=c.p.clone().addScaledVector(c.n,h);u&&(d.y-=.85),s.push(d.x,d.y,d.z)};for(let[c,h]of t)if(!(h<=c))for(let u of[-1,1]){let d=s.length/3;for(let g=c;g<=h;g++)a(n[g],u*e,!1),a(n[g],u*e,!0);let p=h-c+1;for(let g=0;g<p-1;g++){let y=d+g*2,m=y+1,f=y+2,_=y+3;r.push(y,m,f,m,_,f,y,f,m,m,f,_)}}let o=new ye;o.setAttribute("position",new Qt(s,3)),o.setIndex(r),o.computeVertexNormals();let l=new at(o,i);return l.receiveShadow=!0,l}function js(n,t,e,i,s=!1){if(!i.length)return null;let r=new fi(t,e,i.length);for(let a=0;a<i.length;a++)r.setMatrixAt(a,i[a]);return r.instanceMatrix.needsUpdate=!0,r.castShadow=s,r.receiveShadow=!1,n.add(r),r}function Xh(n,t){let e=new Gt,i=new Xs(n.points.map(O=>new M(O[0],O[1],O[2])),!1,"centripetal",.5);i.arcLengthDivisions=2400;let s=i.getLength(),a=Math.max(160,Math.ceil(s/.75)),o=[];for(let O=0;O<=a;O++){let j=O/a,it=i.getPointAt(j),B=i.getTangentAt(j).normalize(),C=new M().crossVectors($e,B).normalize();o.push({p:it,t:B,n:C,dist:j*s})}let l=s/a,c=n.width/2,h=O=>{let j=Mt(O,0,s),it=j/l,B=Math.floor(it);B>=a&&(B=a-1);let C=Mt(it-B,0,1),Q=o[B],J=o[B+1],et=Q.p.clone().lerp(J.p,C),pt=Q.t.clone().lerp(J.t,C).normalize(),kt=new M().crossVectors($e,pt).normalize();return{p:et,t:pt,n:kt,dist:j}},u=(O,j)=>{let it=O-j/2,B=O+j/2;if(it<14||B>s-18)return 1/0;let C=0,Q=null;for(let J=Math.max(0,it-8);J<=B+.01;J+=1.3){let et=h(J).t;Q&&(C+=1-Q.dot(et)),Q=et}return C},d=[],p=n.gaps.map(O=>{let j=Mt(O.at,.1,.92)*s,it=j,B=1/0;for(let C=-.09*s;C<=.09*s;C+=2){let Q=u(j+C,O.len);Q<B&&(B=Q,it=j+C)}return{base:it,len:O.len}}).sort((O,j)=>O.base-j.base),g=-999;for(let O of p){let j=O.base,it=Math.ceil((j-O.len/2)/l)*l,B=Math.floor((j+O.len/2)/l)*l;if(it<g+12){let J=g+12-it;it+=J,B+=J}if(it=Math.max(12,it),B=Math.min(s-16,B),B-it<4.2&&(B=Math.min(s-16,it+4.2)),B-it<3.6)continue;let C=3.2;d.push({start:it,end:B,rampStart:Math.max(8,it-C),rampLen:C,height:1.35}),g=B}let y=O=>d.some(j=>O>=j.start&&O<=j.end),m=[],f=0;for(let O=0;O<o.length;O++)y(o[O].dist)&&(O-1>=f&&m.push([f,O-1]),f=O+1);f<o.length&&m.push([f,o.length-1]),m.length||m.push([0,o.length-1]);let _=ry(),x=new xt({map:_,color:t.trackTint,roughness:.78,metalness:.06}),E=new xt({color:7096879,roughness:.9,metalness:.05,side:Te}),P=new xt({color:t.accent,emissive:t.accent,emissiveIntensity:t.id==="neon"?1.1:.28,roughness:.32,metalness:.4}),w=O=>hy(d,O),R=new Yt,U=(O,j)=>{let B=[];for(let C=0;C<=12;C++){let Q=O+(j-O)*C/12,J=h(Q),et=J.p.clone();et.y+=w(Q),B.push({p:et,t:J.t,n:J.n,dist:Q})}return B};for(let O of d){let j=U(O.start-O.rampLen,O.start,O),it=U(O.end,O.end+O.rampLen,O),B=O.start-O.rampLen,C=et=>O.height*ya((et-B)/O.rampLen),Q=[],J=[];for(let et=0;et<j.length;et++){let pt=j[et],kt=h(pt.dist).p.clone();kt.y+=C(pt.dist),Q.push({p:kt,t:pt.t,n:pt.n,dist:pt.dist});let Ot=it[et],ve=h(Ot.dist).p.clone(),Le=(Ot.dist-O.end)/O.rampLen;ve.y+=O.height*(1-ya(Le)),J.push({p:ve,t:Ot.t,n:Ot.n,dist:Ot.dist})}for(let et of[Q,J]){e.add(Es(et,[[0,et.length-1]],-c,c,0,x)),e.add(Es(et,[[0,et.length-1]],-c,-c+.17,.025,P)),e.add(Es(et,[[0,et.length-1]],c-.17,c,.025,P)),e.add(uy(et,c,E));let pt=h(et===Q?O.start:O.end);R.makeBasis(pt.n,$e,pt.t);let kt=new at(new we(n.width,O.height,.16),E);kt.position.copy(pt.p).addScaledVector($e,O.height*.5),kt.quaternion.setFromRotationMatrix(R),e.add(kt);let Ot=new at(new we(n.width,.07,.26),P);Ot.position.copy(pt.p).addScaledVector($e,O.height+.04),Ot.quaternion.setFromRotationMatrix(R),e.add(Ot)}}let v=Es(o,m,-c,c,0,x);v.castShadow=!1,e.add(v),e.add(dy(o,m,c,E)),e.add(Es(o,m,-c,-c+.17,.015,P)),e.add(Es(o,m,c-.17,c,.015,P));let b=new xt({color:3818072,metalness:.55,roughness:.5}),F=new we(n.width+.9,.24,.3),Z=[],rt=[],L=new Yt,N=new M,W=new oe,nt=new M(1,1,1),tt=16,V=8;for(let O=4;O<s-4;O+=3){if(y(O))continue;let j=h(O),it=j.p.clone().addScaledVector($e,-.6);L.makeBasis(j.n,$e,j.t),W.setFromRotationMatrix(L);let B=new Yt().compose(it,W,nt);if(Z.push(B),O>=V){V+=tt;let C=j.p.clone();C.y-=2.2,rt.push(new Yt().compose(C,new oe,nt))}}js(e,F,b,Z);let D=new ce(.16,.34,3.4,8);js(e,D,b,rt);let $=new xt({color:t.railA,emissive:t.railA,emissiveIntensity:t.id==="neon"?.9:.16,metalness:.45,roughness:.35}),X=new xt({color:t.railB,emissive:t.railB,emissiveIntensity:t.id==="neon"?.35:.05,metalness:.55,roughness:.4}),I=new we(.1,.16,1.55),H=new we(.12,.9,.12),st=[],ut=[],ft=[];for(let O of n.rails||[]){let j=Math.max(2,O.from*s),it=Math.min(s-4,O.to*s);for(let B of[-1,1]){let C=0;for(let Q=j;Q<it;Q+=1.35){if(y(Q))continue;let J=h(Q),et=J.p.clone().addScaledVector(J.n,B*(c+.03));et.y+=.88+w(Q),L.makeBasis(J.n,$e,J.t),W.setFromRotationMatrix(L);let pt=new Yt().compose(et,W,nt);(C+(B===1?1:0))%2===0?st.push(pt):ut.push(pt),C++}for(let Q=j;Q<it;Q+=2.7){if(y(Q))continue;let J=h(Q),et=J.p.clone().addScaledVector(J.n,B*(c+.03));et.y+=.45+w(Q),ft.push(new Yt().compose(et,new oe,nt))}}}js(e,I,$,st),js(e,I,X,ut),js(e,H,b,ft);let St=new me({map:ly(t),transparent:!0,depthWrite:!1,side:Te,polygonOffset:!0,polygonOffsetFactor:-2}),Ut=new at(new qe(n.width*.92,4.4),St),It=h(2.2);L.makeBasis(It.n.clone().negate(),It.t,$e),Ut.quaternion.setFromRotationMatrix(L),Ut.position.copy(It.p).addScaledVector($e,.03),e.add(Ut);let jt=new me({map:qh(t.accentCss),transparent:!0,depthWrite:!1,side:Te,blending:We,polygonOffset:!0,polygonOffsetFactor:-3}),G=[];for(let O of n.boosts||[]){let j=Mt(O.at,.08,.93)*s,it=d.find(et=>j>et.start-8&&j<et.end+8);if(it&&(j=it.end+9),j>s-12&&(j=s-12),d.some(et=>j>et.start-4&&j<et.end+4))continue;let B=j-1.7,C=j+1.7,Q=h(j),J=new at(new qe(n.width*.7,3.4),jt);J.geometry=J.geometry.clone(),J.geometry.rotateX(Math.PI/2),L.makeBasis(Q.n,$e,Q.t),J.quaternion.setFromRotationMatrix(L),J.position.copy(Q.p).addScaledVector($e,.04),e.add(J),G.push({from:B,to:C})}let Ue=new xt({color:3160400,metalness:.75,roughness:.32}),Dt=new xt({color:t.accent,emissive:t.accent,emissiveIntensity:t.id==="neon"?1.5:.7,metalness:.4,roughness:.25}),zt=qh(t.accentCss),At=new me({map:zt,color:t.accent,transparent:!0,opacity:.22,blending:We,depthWrite:!1,side:Te}),fe=[],Wt=[];for(let O of n.checkpoints||[]){let j=Mt(O,.15,.88)*s,it=d.find(et=>j>et.start-5&&j<et.end+5);if(it&&(j=it.end+7),j>s-18&&(j=s-18),fe.some(et=>Math.abs(et-j)<25)||j<18)continue;fe.push(j);let B=h(j),C=new Gt;L.makeBasis(B.n,$e,B.t),C.quaternion.setFromRotationMatrix(L),C.position.copy(B.p);for(let et of[-1,1]){let pt=new at(new we(.22,3.2,.22),Ue);pt.position.set(et*(c+.35),1.6,0),pt.castShadow=!0,C.add(pt);let kt=new at(new we(.3,.3,.3),Dt);kt.position.set(et*(c+.35),3.25,0),C.add(kt)}let Q=new at(new we(n.width+.9,.2,.24),Ue);Q.position.set(0,3.28,0),C.add(Q);let J=new at(new qe(n.width+.2,2.9),At.clone());J.position.set(0,1.6,0),C.add(J),C.userData.glow=J,C.userData.phase=Math.random()*Math.PI*2,e.add(C),Wt.push(C)}fe.sort((O,j)=>O-j);let A=s-5.2,S=h(A),z=new Gt;L.makeBasis(S.n,$e,S.t),z.quaternion.setFromRotationMatrix(L),z.position.copy(S.p);for(let O of[-1,1]){let j=new at(new we(.34,5.6,.34),Ue);j.position.set(O*(c+1.05),2.8,0),j.castShadow=!0,z.add(j);let it=new at(new De(.22,12,10),Dt);it.position.set(O*(c+1.05),5.7,0),z.add(it)}let ct=new at(new we((c+1.05)*2+.4,.36,.4),Ue);ct.position.set(0,5.5,0),z.add(ct);let lt=new me({map:cy(t),side:Te}),ht=new at(new qe((c+1)*2,1.35),lt);ht.position.set(0,4.55,0),z.add(ht),e.add(z);let Rt=new xt({map:(()=>{let O=ay();return O.repeat.set(8,1.6),O})(),roughness:.6,metalness:.1,side:Te,polygonOffset:!0,polygonOffsetFactor:-2}),gt=new at(new qe(n.width,1.5),Rt);gt.geometry.rotateX(Math.PI/2);let Et=h(A-1.1);L.makeBasis(Et.n,$e,Et.t),gt.quaternion.setFromRotationMatrix(L),gt.position.copy(Et.p).addScaledVector($e,.03),e.add(gt);let yt={def:n,theme:t,group:e,curve:i,length:s,width:n.width,halfWidth:c,samples:o,realStep:l,sampleCount:a,frameAt:h,gaps:d,finishDist:A,checkpointDists:fe,boostZones:G,obstacles:[],gates:Wt,coinTotal:0,coins:[],gems:[],coinMesh:null,gemMeshes:[],isGapAt(O){return d.some(j=>O>=j.start&&O<=j.end)},rampHeightAt(O){return w(O)},isRailAt(O){for(let j of n.rails||[]){let it=j.from*s,B=j.to*s;if(O>=it&&O<=B)return!0}return!1},nearest(O,j=0){let it=Mt(j|0,0,a-1),B=Math.max(0,it-14),C=Math.min(a-1,it+14),Q=null;for(let J=B;J<=C;J++){let et=o[J],pt=o[J+1],kt=N.copy(pt.p).sub(et.p),Ot=kt.lengthSq()||1,ve=Mt(new M().subVectors(O,et.p).dot(kt)/Ot,0,1),Le=et.p.clone().addScaledVector(kt,ve),de=O.distanceToSquared(Le);if(!Q||de<Q.d2){let He=et.t.clone().lerp(pt.t,ve).normalize(),ln=new M().crossVectors($e,He).normalize();Q={index:J,d2:de,dist:et.dist+(pt.dist-et.dist)*ve,point:Le,t:He,n:ln,lat:new M().subVectors(O,Le).dot(ln)}}}return Q},update(O,j){for(let it of yt.obstacles)it.destroyed||it.update(O,j);for(let it of Wt){let B=it.userData.glow;B&&(B.material.opacity=.14+.1*(.5+.5*Math.sin(O*1.8+it.userData.phase)))}if(yt.coinMesh){for(let it=0;it<yt.coins.length;it++){let B=yt.coins[it];if(B.taken)continue;let C=B.basePos.y+Math.sin(O*2.1+B.phase)*.09,Q=new oe().setFromEuler(new Pe(0,O*2.6+B.phase,0)),J=new oe().setFromEuler(new Pe(Math.PI/2,0,0));Q.multiply(J);let et=new Yt().compose(new M(B.basePos.x,C,B.basePos.z),Q,new M(1,1,1));yt.coinMesh.setMatrixAt(B.instance,et)}yt.coinMesh.instanceMatrix.needsUpdate=!0}for(let it of yt.gemMeshes)it.userData.taken||(it.rotation.y=O*1.7+it.userData.phase,it.position.y=it.userData.baseY+Math.sin(O*2.4+it.userData.phase)*.12)},collect(O,j=1.15){let it=0;for(let B of yt.coins)B.taken||B.basePos.distanceToSquared(O)<(j+.42)*(j+.42)&&(B.taken=!0,it+=1,yt.coinMesh&&(yt.coinMesh.setMatrixAt(B.instance,new Yt().makeScale(0,0,0)),yt.coinMesh.instanceMatrix.needsUpdate=!0));for(let B of yt.gemMeshes)B.userData.taken||B.position.distanceToSquared(O)<(j+.5)*(j+.5)&&(B.userData.taken=!0,B.visible=!1,it+=10);return it},respawnIndex(O){return Mt(O/l|0,0,a-1)}},Bt=[];for(let O of n.obstacles||[]){let j=Mt(O.at,.03,.96)*s;for(let B=0;B<8;B++){let C=d.find(J=>j>J.start-4.5&&j<J.end+4.5);C&&(j=C.end+6.5);let Q=Bt.find(J=>Math.abs(J.d-j)<9);Q&&(j=Q.d+9.5),j=Mt(j,15,s-15)}if(Bt.some(B=>Math.abs(B.d-j)<6))continue;Bt.push({d:j,spec:O});let it=Wh(yt,{...O,at:j/s},t);it.update(0,0),yt.obstacles.push(it)}let ot=new ce(.34,.34,.1,20),ue=new xt({map:oy(),color:16777215,emissive:10117632,emissiveIntensity:.45,metalness:.35,roughness:.35}),Vt=[];for(let O of n.coinRuns){let j=Mt(O.from,.015,.97)*s,it=Mt(O.to,j+4,.97*s),B=Math.max(3,O.n||5);for(let C=0;C<B;C++){let Q=B===1?.5:C/(B-1),J=j+(it-j)*Q,et;if(O.kind==="slide"?et=O.lat+(O.lat2-O.lat)*Q:O.kind==="wave"?et=O.lat+Math.sin(Q*Math.PI*2*(O.waves||1))*(O.amp||1.2):et=O.lat,et=Mt(et,-(c-1),c-1),y(J)||J<4||J>s-3||d.some(Ot=>Math.abs(J-Ot.start)<1.4||Math.abs(J-Ot.end)<1.4)||Bt.some(Ot=>Math.abs(Ot.d-J)<4.2))continue;let pt=h(J),kt=pt.p.clone().addScaledVector(pt.n,et);kt.y+=1.02+w(J),Vt.push({dist:J,lat:et,basePos:kt,phase:Math.random()*Math.PI*2})}}let Nt=new fi(ot,ue,Math.max(1,Vt.length));for(let O=0;O<Vt.length;O++){let j=Vt[O];j.instance=O,j.taken=!1,Nt.setMatrixAt(O,new Yt().compose(j.basePos,new oe,new M(1,1,1)))}Nt.instanceMatrix.setUsage(bh),Nt.count=Vt.length,Nt.frustumCulled=!1,e.add(Nt),yt.coins=Vt,yt.coinMesh=Nt;let Pt=[new dt(0,-.72),new dt(.2,-.56),new dt(.4,-.22),new dt(.54,0),new dt(.48,.08),new dt(.36,.24),new dt(.17,.34),new dt(0,.4)],bt=new Ys(Pt,16);bt.computeVertexNormals();let qt=new De(.72,14,10);for(let O of n.gems||[]){let j=Mt(O.at,.06,.94)*s;if(y(j)){let kt=d.find(Ot=>j>=Ot.start&&j<=Ot.end);kt&&(j=kt.end+4)}let it=Bt.find(kt=>Math.abs(kt.d-j)<4);it&&(j=it.d+5),j>s-6&&(j=s-6);let B=Mt(O.lat,-(c-1.1),c-1.1),C=h(j),Q=C.p.clone().addScaledVector(C.n,B);Q.y+=1.28+w(j);let J=new In({color:10418175,emissive:2078424,emissiveIntensity:1.05,metalness:.15,roughness:.02,transmission:.72,thickness:1.1,ior:2.2,iridescence:.75,iridescenceIOR:1.8,clearcoat:1,clearcoatRoughness:.02,flatShading:!0,transparent:!0}),et=new at(bt,J);et.position.copy(Q),et.scale.setScalar(1.15),et.castShadow=!0,et.userData.baseY=Q.y,et.userData.phase=Math.random()*Math.PI*2,et.userData.taken=!1;let pt=new at(qt,new me({color:9369599,transparent:!0,opacity:.16,blending:We,depthWrite:!1}));pt.userData.noPick=!0,et.add(pt),e.add(et),yt.gemMeshes.push(et)}return yt.coinTotal=yt.coins.length+yt.gemMeshes.length*10,yt}var Ml=new M(0,1,0),_t=Math.PI*2,yl=new Map,xl=new Map;function fy(n){return n.userData.persistent=!0,n}function sn(n,t){return xl.has(n)||xl.set(n,fy(t())),xl.get(n)}function py(n){let{canvas:i,ctx:s}=ne(1024,512),r=new Tt(n.fog),a=r.clone().lerp(new Tt(n.skyBottom),.4),o=r.clone().offsetHSL(0,0,n.id==="neon"?.015:.07),l=s.createLinearGradient(0,0,0,512);if(l.addColorStop(0,n.skyTop),l.addColorStop(.38,n.skyMid),l.addColorStop(.478,n.skyHorizon),l.addColorStop(.555,n.skyBottom),l.addColorStop(.64,`#${a.getHexString()}`),l.addColorStop(1,`#${o.getHexString()}`),s.fillStyle=l,s.fillRect(0,0,1024,512),n.stars>0){let m=he(n.id==="neon"?9001:42);for(let f=0;f<n.stars;f++){let _=m()*1024,x=m()*512*.52,E=m()*1.2+.3,P=.25+m()*.75;s.fillStyle=`rgba(${m()>.85?"170,240,255":"255,255,255"},${P})`,s.beginPath(),s.arc(_,x,E,0,_t),s.fill()}}let c=n.sun.x*1024,h=n.sun.y*512,u=n.sun.size*1024,d=s.createRadialGradient(c,h,u*.1,c,h,u*3.4);d.addColorStop(0,n.sun.glow),d.addColorStop(.22,n.sun.glow.replace(/[\d.]+\)$/,"0.28)")),d.addColorStop(1,"rgba(255,255,255,0)"),s.globalCompositeOperation="lighter",s.globalAlpha=.85,s.fillStyle=d,s.fillRect(0,0,1024,512),s.globalAlpha=1;let p=s.createRadialGradient(c,h,0,c,h,u);p.addColorStop(0,n.sun.color),p.addColorStop(.72,n.sun.color),p.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=p,s.beginPath(),s.arc(c,h,u,0,_t),s.fill(),s.globalCompositeOperation="source-over",n.moon&&(s.fillStyle="rgba(240,245,255,0.82)",s.beginPath(),s.arc(c,h,u*.62,0,_t),s.fill(),s.fillStyle="rgba(200,210,235,0.30)",s.beginPath(),s.arc(c-u*.18,h-u*.12,u*.12,0,_t),s.arc(c+u*.16,h+u*.14,u*.08,0,_t),s.arc(c+u*.02,h-u*.22,u*.06,0,_t),s.fill());let g=he(n.id.length*917+33);s.save(),s.filter="blur(18px)";for(let m=0;m<16;m++){let f=512*(.35+g()*.25),_=g()*1024,x=90+g()*260,E=6+g()*18;s.fillStyle=`rgba(255,255,255,${n.id==="neon"?.025:.05+g()*.06})`,s.beginPath(),s.ellipse(_,f,x,E,g()*.2-.1,0,_t),s.fill(),g()>.55&&(s.fillStyle="rgba(255,255,255,0.035)",s.beginPath(),s.ellipse(_+x*.35,f+5,x*.6,E*.5,0,0,_t),s.fill())}s.restore();let y=s.createLinearGradient(0,512*.44,0,512*.62);return y.addColorStop(0,"rgba(255,255,255,0)"),y.addColorStop(.5,"rgba(255,255,255,0.16)"),y.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=y,s.fillRect(0,512*.42,1024,512*.24),i}function Sl(n,t){if(yl.has(t.id))return yl.get(t.id);let e=py(t),i=se(e,{srgb:!0});i.mapping=Li;let s=null,r=null;try{let o=new ci(n);o.compileEquirectangularShader(),r=o.fromEquirectangular(i),s=r.texture,o.dispose()}catch(o){console.warn("PMREM environment unavailable",o)}let a={sky:i,env:s,envRT:r};return yl.set(t.id,a),a}function bs(n,t,e){let{sky:i,env:s}=Sl(n,e);t.background=i,t.backgroundIntensity=1,t.environment=s,t.fog=new jr(e.fog,e.id==="neon"?.0045:e.id==="battlefield"?.0042:.0033),n.toneMapping=Fi,n.toneMappingExposure=e.id==="neon"?1.1:1}function va(n){let t=new ha(16777215,3359829,.7),e=new mi(16777215,2.2);e.position.set(18,30,12),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=110,e.shadow.camera.left=-22,e.shadow.camera.right=22,e.shadow.camera.top=22,e.shadow.camera.bottom=-22,e.shadow.bias=-8e-4,e.shadow.normalBias=.035;let i=new mi(8965375,.65);return i.position.set(-24,12,-8),n.add(t,e,i,e.target),{hemi:t,sun:e,rim:i}}function Ts(n,t){n.hemi.color.setHex(t.hemiSky),n.hemi.groundColor.setHex(t.hemiGround),n.hemi.intensity=t.hemiIntensity,n.sun.color.setHex(t.sunLight),n.sun.intensity=t.sunIntensity,n.rim.color.setHex(t.accent),n.rim.intensity=t.id==="neon"?1.25:.55}function _l(n){let{canvas:i,ctx:s}=ne(256,160),r=he(n);s.clearRect(0,0,256,160);for(let o=0;o<14;o++){let l=26+r()*204,c=52+r()*58,h=18+r()*34,u=s.createRadialGradient(l,c,1,l,c,h);u.addColorStop(0,`rgba(255,255,255,${.62+r()*.22})`),u.addColorStop(.5,`rgba(250,251,253,${.32+r()*.2})`),u.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=u,s.fillRect(l-h,c-h,h*2,h*2)}s.globalCompositeOperation="source-atop";let a=s.createLinearGradient(0,0,0,160);a.addColorStop(0,"rgba(255,255,255,0.22)"),a.addColorStop(.5,"rgba(226,230,238,0.08)"),a.addColorStop(1,"rgba(96,106,128,0.4)"),s.fillStyle=a,s.fillRect(0,0,256,160);for(let o=0;o<700;o++)s.fillStyle=`rgba(255,255,255,${r()*.1})`,s.fillRect(r()*256,r()*160,1.5,1.5);return s.globalCompositeOperation="source-over",se(i,{srgb:!0})}function El(){let{canvas:n,ctx:t}=ne(128,256),e=he(701),i=t.createLinearGradient(0,0,128,0);i.addColorStop(0,"#b8b4ad"),i.addColorStop(.35,"#d2cdc4"),i.addColorStop(.7,"#c1bbb2"),i.addColorStop(1,"#a8a29a"),t.fillStyle=i,t.fillRect(0,0,128,256);for(let r=0;r<110;r++){let a=e()*128,o=e()*256,l=10+e()*90,c=52+e()*38;t.strokeStyle=`rgba(${c},${c},${c},${.12+e()*.32})`,t.lineWidth=.7+e()*2.4,t.beginPath(),t.moveTo(a,o),t.bezierCurveTo(a+(e()-.5)*8,o+l*.3,a+(e()-.5)*8,o+l*.7,a+(e()-.5)*5,o+l),t.stroke()}for(let r=0;r<30;r++)t.fillStyle="rgba(58,54,48,0.2)",t.beginPath(),t.ellipse(e()*128,e()*256,2+e()*4,1+e()*3,0,0,_t),t.fill();let s=se(n,{repeat:!0});return s.repeat.set(1,2),s}function my(){let{canvas:n,ctx:t}=ne(128,128),e=he(313);t.fillStyle="#e0e1dc",t.fillRect(0,0,128,128);for(let s=0;s<900;s++){let r=150+Math.floor(e()*100);t.fillStyle=`rgba(${r-10},${r},${r-14},${.08+e()*.18})`,t.beginPath(),t.arc(e()*128,e()*128,.5+e()*2.4,0,_t),t.fill()}for(let s=0;s<80;s++){t.strokeStyle="rgba(90,110,80,0.12)",t.lineWidth=.8,t.beginPath();let r=e()*128,a=e()*128;t.moveTo(r,a),t.lineTo(r+(e()-.5)*9,a+(e()-.5)*9),t.stroke()}let i=se(n,{repeat:!0});return i.repeat.set(1,1),i}function $h(){let{canvas:n,ctx:t}=ne(256,256),e=he(941);t.clearRect(0,0,256,256);let i=128,s=128;for(let a=0;a<30;a++){let o=e()*_t,l=8+e()*66,c=i+Math.cos(o)*l*.36,h=s+Math.sin(o)*l*.36,u=o+(e()-.5)*1.1,d=34+e()*68;t.strokeStyle=`rgba(212,216,205,${.32+e()*.24})`,t.lineWidth=1.1,t.beginPath(),t.moveTo(c,h),t.lineTo(c+Math.cos(u)*d,h+Math.sin(u)*d),t.stroke();let p=5+Math.floor(e()*5);for(let g=0;g<p;g++){let y=.2+g/p*.85,m=c+Math.cos(u)*d*y+(e()-.5)*8,f=h+Math.sin(u)*d*y+(e()-.5)*8,_=g%2?1:-1,x=u+_*(.55+e()*.45),E=6+e()*10,P=2.4+e()*4.2,w=226+Math.floor(e()*28);t.save(),t.translate(m,f),t.rotate(x);let R=t.createLinearGradient(-E,0,E,0);R.addColorStop(0,`rgba(${w-30},${w-20},${w-38},${.72+e()*.22})`),R.addColorStop(.55,`rgba(${w},${w},${w-8},${.8+e()*.18})`),R.addColorStop(1,`rgba(${w-42},${w-34},${w-50},${.55+e()*.2})`),t.fillStyle=R,t.beginPath(),t.ellipse(0,0,E,P,0,0,_t),t.fill(),t.strokeStyle="rgba(150,158,138,0.28)",t.lineWidth=.7,t.beginPath(),t.moveTo(-E*.7,0),t.lineTo(E*.7,0),t.stroke(),t.restore()}}let r=se(n,{srgb:!0});return r.anisotropy=8,r}function Zh(){let n=[],t=[],e=[],i=[];for(let r=0;r<3;r++){let a=r/3*Math.PI,o=Math.cos(a),l=Math.sin(a),c=n.length/3;n.push(-o,-1,-l,o,-1,l,o,1,l,-o,1,-l),t.push(0,0,1,0,1,1,0,1);for(let h=0;h<4;h++)e.push(-l,0,o);i.push(c,c+1,c+2,c,c+2,c+3)}let s=new ye;return s.setAttribute("position",new Qt(n,3)),s.setAttribute("uv",new Qt(t,2)),s.setAttribute("normal",new Qt(e,3)),s.setIndex(i),s.computeBoundingSphere(),s}function bl(){let{canvas:n,ctx:t}=ne(256,256),e=he(877),i=t.createLinearGradient(0,0,256,256);i.addColorStop(0,"#bdb6ab"),i.addColorStop(.5,"#9f988d"),i.addColorStop(1,"#c8c1b5"),t.fillStyle=i,t.fillRect(0,0,256,256);for(let r=0;r<420;r++){let a=120+Math.floor(e()*90);t.fillStyle=`rgba(${a},${a-5},${a-12},${.05+e()*.13})`,t.beginPath(),t.arc(e()*256,e()*256,1+e()*9,0,_t),t.fill()}for(let r=0;r<32;r++){let a=e()*256,o=e()*256;t.strokeStyle=`rgba(42,38,34,${.14+e()*.2})`,t.lineWidth=.8+e()*1.6,t.beginPath(),t.moveTo(a,o);for(let l=0;l<5;l++)a+=(e()-.5)*30,o+=8+e()*22,t.lineTo(a,o);t.stroke()}let s=se(n,{repeat:!0});return s.repeat.set(2,2),s}function Jh(){let{canvas:n,ctx:t}=ne(128,128),e=he(41);t.fillStyle="#e2e5d9",t.fillRect(0,0,128,128);for(let s=0;s<1200;s++){let r=142+Math.floor(e()*90);t.fillStyle=`rgba(${r-8},${r},${r-12},${.09+e()*.16})`,t.fillRect(e()*128,e()*128,1,1+e()*3)}for(let s=0;s<140;s++){t.strokeStyle=`rgba(92,104,72,${.1+e()*.18})`,t.lineWidth=.8,t.beginPath();let r=e()*128,a=e()*128;t.moveTo(r,a),t.lineTo(r+(e()-.5)*4,a-2-e()*5),t.stroke()}let i=se(n,{repeat:!0});return i.repeat.set(3,3),i}function gy(){let{canvas:n,ctx:t}=ne(256,128),e=["#f6e7c8","#d94f6a"],i=12;for(let s=0;s<i;s++)t.fillStyle=e[s%2],t.fillRect(s/i*256,0,256/i+1,128);return t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(0,0,256,10),t.fillStyle="rgba(40,10,20,0.16)",t.fillRect(0,118,256,10),se(n)}function yy(){return[sn("cloud-1",()=>_l(11)),sn("cloud-2",()=>_l(29)),sn("cloud-3",()=>_l(73))]}function xy(n="rgba(255,255,255,0.9)"){let{canvas:t,ctx:e}=ne(64,64),i=e.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,n),i.addColorStop(.4,"rgba(255,255,255,0.25)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),se(t)}function Tl(n,t,e=.18,i=0){let s=n.attributes.position,r=he(t),a=r()*_t;for(let o=0;o<s.count;o++){let l=s.getX(o),c=s.getY(o),h=s.getZ(o),u=Math.hypot(l,h);if(u<1e-4)continue;let d=Math.atan2(h,l),p=1+e*(Math.sin(d*3+a)*.55+Math.sin(d*7-a*.7)*.3+(r()-.5)*.3);s.setX(o,l*p),s.setZ(o,h*p),i&&s.setY(o,c+Math.sin(d*5+a)*i*(.4+u*.6))}return s.needsUpdate=!0,n.computeVertexNormals(),n}function Kh(n){let t=new dn(1,2.6,14,4,!1);return t.rotateX(Math.PI),t.translate(0,-1.3,0),Tl(t,n,.17,.06)}function Yh(n){let t=new dn(1,1,14,6,!1);return t.translate(0,.5,0),Tl(t,n,.2,.035)}function _y(n){let t=new oa(1,1);return Tl(t,n,.28,.04)}function fn(n,t,e){return new Yt().compose(n,t,e)}function $n(n,t,e,i,{cast:s=!0,receive:r=!0}={}){if(!i.length)return null;let a=new fi(t,e,i.length),o=new Tt;for(let l=0;l<i.length;l++){let c=i[l];a.setMatrixAt(l,c.matrix),c.color!==void 0&&(o.setHex(c.color),a.setColorAt(l,o))}return a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),e.alphaTest>0&&e.map&&(a.customDepthMaterial=new Ws({depthPacking:sl,map:e.map,alphaTest:e.alphaTest})),a.castShadow=s,a.receiveShadow=r,n.add(a),a}function _a(n,t=.62){let e=yy(),i=[];for(let s=0;s<e.length;s++)for(let r of[1,.58]){let a=new Tt(n.cloud);a.offsetHSL((s-1)*.012,0,r<1?-.045:.025);let o=new ui({map:e[s],color:a,transparent:!0,opacity:t*r,depthWrite:!1,fog:!0,rotation:(s*1.7+(r<1?.4:0))%_t});i.push(o)}return i}function xa(n,t,e){let i=new Gt,s=7+Math.floor(t()*4);for(let r=0;r<s;r++){let a=new di(n[Math.floor(t()*n.length)]),o=e*(.7+t()*1.05),l=o*(.4+t()*.22);a.position.set((t()-.5)*e*2.2,(t()-.5)*e*.55,(t()-.5)*e*1.25),a.scale.set(o,l,1),a.renderOrder=2,i.add(a)}return i}function Qh(n,t={}){let{count:e=14,seed:i=33,center:s=new M(0,10,-50),spread:r=new M(130,26,85),size:a=8,opacity:o=.76}=t,l=new Gt;l.name="cloud-field";let c=he(i),h=_a(n,o),u=[];for(let d=0;d<e;d++){let p=xa(h,c,a*(.55+c()*.9)),g=new M(s.x+(c()-.5)*r.x,s.y+(c()-.5)*r.y,s.z+(c()-.5)*r.z);p.position.copy(g),l.add(p),u.push({group:p,baseX:g.x,baseY:g.y,baseZ:g.z,phase:c()*_t,drift:.18+c()*.4})}return l.userData.materials=h,l.userData.setTheme=d=>{for(let p of h){let g=new Tt(d.cloud);p.color.copy(g)}},l.userData.update=d=>{for(let p of u)p.group.position.x=p.baseX+Math.sin(d*.018+p.phase)*p.drift*9,p.group.position.y=p.baseY+Math.sin(d*.06+p.phase)*.35},l}function wl(n){switch(n.id){case"candy":return[16752592,16761056,11044351,16769008];case"neon":return[3038207,2006732,8150271,3135471];case"battlefield":return[6253371,4871728,7831626,4016167];case"hills":return[4160058,5672776,3105843,6986837];case"coaster":return[5077821,6459209,4024885,9531719];case"dusk":return[9067086,10840664,7226688,11828062];case"volcano":return[4856342,6956060,3150352,8008482];case"ice":return[14677759,12905727,11198463,15924479];case"jade":return[3462041,7268279,366185,11006928];case"starlight":return[8150271,6809849,16020150,12616956];default:return[5217862,6535252,4033082,7978328]}}function jh(n){return n.id==="candy"?16773880:n.id==="neon"?2371676:n.id==="battlefield"?5982259:n.id==="coaster"?6440239:n.id==="hills"?5915696:n.id==="volcano"?2757906:n.id==="ice"?7311270:n.id==="jade"?4151866:n.id==="starlight"?2761808:7031346}function vy(n,t,e,i,s,r,a,o){let l=wl(t),c=jh(t),h=o==="broad",u=o==="dead",d=h||u?a*.72:a*.9,p=a*(h?.4:.32);if(n.trunks.push({matrix:fn(new M(i,r+d/2,s),new oe().setFromEuler(new Pe((e()-.5)*.04,e()*_t,(e()-.5)*.04)),new M(p,d,p)),color:c}),h||u){let g=u?5:3;for(let y=0;y<g;y++){let m=e()*_t,f=new M(Math.cos(m)*(u?.9:.62),.78+e()*.25,Math.sin(m)*(u?.9:.62)).normalize(),_=a*(.3+e()*.22),x=new M(i,r+a*(.36+e()*.36),s),E=new oe().setFromUnitVectors(Ml,f),P=x.clone().addScaledVector(f,_/2);if(n.branches.push({matrix:fn(P,E,new M(a*.45,_,a*.45)),color:c}),u&&e()>.5){let w=f.clone().add(new M((e()-.5)*.8,.4,(e()-.5)*.8)).normalize();n.branches.push({matrix:fn(x.clone().addScaledVector(f,_),new oe().setFromUnitVectors(Ml,w),new M(a*.3,_*.55,a*.3)),color:c})}}}if(u){let g=l[Math.floor(e()*l.length)];for(let y=0;y<2;y++){let m=e()*_t,f=a*(.28+e()*.35);n.leaves.push({matrix:fn(new M(i+Math.cos(m)*f,r+a*(.55+e()*.28),s+Math.sin(m)*f),new oe().setFromEuler(new Pe(e()*_t,e()*_t,e()*_t)),new M(a*.2,a*.15,a*.2)),color:g})}return}if(h){let g=9+Math.floor(e()*4);for(let y=0;y<g;y++){let m=e()*_t,f=a*(.1+e()*.34),_=a*(.22+e()*.16);n.leaves.push({matrix:fn(new M(i+Math.cos(m)*f,r+a*(.56+e()*.48),s+Math.sin(m)*f),new oe().setFromEuler(new Pe(e()*_t,e()*_t,e()*_t)),new M(_*(.9+e()*.45),_*(.72+e()*.4),_)),color:l[Math.floor(e()*l.length)]})}for(let y=0;y<4;y++){let m=e()*_t;n.leaves.push({matrix:fn(new M(i+Math.cos(m)*a*.22,r+a*.38,s+Math.sin(m)*a*.22),new oe().setFromEuler(new Pe(e()*_t,e()*_t,e()*_t)),new M(a*.2,a*.14,a*.2)),color:l[Math.floor(e()*l.length)]})}}else{for(let y=0;y<6;y++){let m=y/5,f=r+a*(.19+m*.7),_=a*(.28-m*.1),x=a*(.35-m*.235);n.pines.push({matrix:fn(new M(i+(e()-.5)*a*.035,f,s+(e()-.5)*a*.035),new oe().setFromEuler(new Pe((e()-.5)*.06,e()*_t,(e()-.5)*.06)),new M(x,_,x)),color:l[Math.floor(e()*l.length)]})}t.id==="hills"&&n.snow.push({matrix:fn(new M(i,r+a*.94,s),new oe().setFromEuler(new Pe(0,e()*_t,0)),new M(a*.145,a*.25,a*.145)),color:15988735})}}function My(n){let t=sn("bark",El),e=sn("foliage",my),i=sn("leaf-card",$h),s=new xt({map:t,color:16777215,roughness:.96,metalness:0}),r=new xt({map:i,color:16777215,roughness:.9,metalness:0,alphaTest:.38,side:Te}),a=new xt({map:e,color:16777215,roughness:.94,metalness:0}),o=new xt({color:15988735,roughness:.88,metalness:0}),l=s.clone();return{trunkMat:s,branchMat:l,leafMat:r,pineMat:a,snowMat:o}}function Sy(n,t,e){let i=My(t),s=new ce(.075,.13,1,8,1),r=new ce(.035,.085,1,6,1),a=Zh(),o=new dn(1,1,10,3,!1),l=new dn(1,1,10,2,!1);return $n(n,s,i.trunkMat,e.trunks,{cast:!0,receive:!0}),$n(n,r,i.branchMat,e.branches,{cast:!0,receive:!0}),$n(n,a,i.leafMat,e.leaves,{cast:!0,receive:!0}),$n(n,o,i.pineMat,e.pines,{cast:!0,receive:!0}),$n(n,l,i.snowMat,e.snow,{cast:!1,receive:!0}),i}function Ey(n,t,e,i,s,r){let a=new Gt;a.position.copy(t),a.rotation.y=s()*_t,a.scale.setScalar(e);let o=new xt({color:4934210,metalness:.6,roughness:.45}),l=new at(new ce(.035,.05,2.4,8),o);l.position.y=1.2,l.castShadow=!0,a.add(l);let c=new qe(1.25,.68,10,4);c.translate(.625,0,0);let h=new xt({color:i,roughness:.9,metalness:0,side:Te}),u=new at(c,h);u.position.set(.02,2.02,0),u.castShadow=!0,a.add(u),r.push({mesh:u,base:c.attributes.position.array.slice(),phase:s()*_t}),n.add(a)}function by(n,t,e,i,s,r){let a=new Gt;a.position.copy(t),a.rotation.y=s()*_t,a.scale.setScalar(e);let o=new xt({map:sn("bark",El),color:6967863,roughness:.9,metalness:.02}),l=new xt({color:3814184,roughness:.95});for(let u of[-1,1])for(let d of[-1,1]){let p=new at(new ce(.11,.19,4.1,7),o);p.position.set(u*.78,1.95,d*.78),p.rotation.z=-u*.045,p.rotation.x=d*.045,p.castShadow=!0,a.add(p)}let c=new at(new we(2.35,.18,2.35),l);c.position.y=4,c.castShadow=!0,c.receiveShadow=!0,a.add(c);for(let u of[-1,1]){let d=new at(new we(2.35,.1,.1),o);d.position.set(0,4.6,u*1.1),a.add(d);let p=new at(new we(.1,.1,2.35),o);p.position.set(u*1.1,4.6,0),a.add(p)}let h=new at(new dn(1.9,1,4),l);h.position.y=5.45,h.rotation.y=Math.PI/4,h.castShadow=!0,a.add(h),Ey(a,new M(.9,5.25,-.8),.75,i.id==="battlefield"?12077626:i.accent,s,r),n.add(a)}function Ty(n,t,e,i){let s=new Gt;s.position.copy(t);let r=_a({cloud:6052176},.3);wy(r);for(let a=0;a<8;a++){let o=new di(r[a%r.length]);o.position.set((i()-.5)*e*.5,a*e*.45,(i()-.5)*e*.5);let l=e*(.55+i()*.6)*(.65+a*.05);o.scale.set(l,l*.72,1),s.add(o)}return n.add(s),s}function wy(n){for(let t of n)t.depthWrite=!1,t.opacity*=.8}function vl(n,t,e,i,s,r,a){let o=Yh(s),l=new at(o,a.rocks[s%a.rocks.length]);if(l.position.copy(t),l.scale.set(e,i,e*(.82+s%5*.05)),l.rotation.y=s%7*.7,l.castShadow=!1,l.receiveShadow=!1,n.add(l),r.id!=="battlefield"||s%2===0){let c=new at(o,a.snow);c.position.copy(t),c.position.y+=i*.7,c.scale.set(e*.31,i*.3,e*.31*.92),c.rotation.y=l.rotation.y,n.add(c)}if(e>18){let c=new at(Yh(s+3),a.rocks[(s+1)%a.rocks.length]);c.position.copy(t),c.position.x+=e*.9,c.position.z+=e*.7,c.scale.set(e*.55,i*.62,e*.48),c.rotation.y=l.rotation.y+1.3,n.add(c)}}function Ay(n,t,e,i,s,r,a){let o=new Gt;o.position.copy(t),o.scale.setScalar(e),a&&o.lookAt(a);let l=new xt({color:6042447,metalness:.72,roughness:.32}),c=new xt({color:15255968,metalness:.5,roughness:.4}),h=new me({color:16770976}),u=new me({color:16740275}),d=6.4,p=d+1.1;for(let E of[-1,1]){for(let w of[-1,1]){let R=new at(new ce(.14,.24,p+1.2,8),l);R.position.set(E*2.8,(p+1.2)/2,w*.65),R.rotation.z=-E*.37,R.castShadow=!0,o.add(R)}let P=new at(new ce(.1,.1,5.7,8),c);P.rotation.z=Math.PI/2,P.position.set(0,p,E*.65),o.add(P)}let g=new at(new ce(.38,.38,1.7,12),c);g.rotation.x=Math.PI/2,g.position.set(0,p,0),o.add(g);let y=new Gt;y.position.set(0,p,0),o.add(y);let m=new at(new nn(d,.12,10,64),c);y.add(m);let f=new at(new nn(d-.55,.07,8,64),l);y.add(f);for(let E=0;E<12;E++){let P=E/12*_t,w=new at(new ce(.035,.045,d,6),l);w.position.set(Math.cos(P)*d*.5,Math.sin(P)*d*.5,0),w.rotation.z=P-Math.PI/2,y.add(w)}let _=[];for(let E=0;E<12;E++){let P=E/12*_t,w=new Gt;w.position.set(Math.cos(P)*d,Math.sin(P)*d,0);let R=new at(new we(1.05,.9,.8),E%2?u:h);R.castShadow=!0,w.add(R);let U=new at(new dn(.75,.34,4),l);U.position.y=.62,U.rotation.y=Math.PI/4,w.add(U),y.add(w),_.push({group:w,baseAngle:P})}for(let E=0;E<28;E++){let P=E/28*_t,w=new at(new De(.075,6,5),E%3?h:u);w.position.set(Math.cos(P)*d,Math.sin(P)*d,.12),y.add(w)}let x=new ki(16762585,18,36,2);x.position.set(0,p,.5),o.add(x),n.add(o),r.push({wheel:y,cabins:_,phase:s()*_t,speed:.09+s()*.05})}function Ry(n,t,e,i,s){let r=new Gt;r.position.copy(t),r.rotation.y=s()*_t,r.scale.setScalar(e);let a=new xt({map:sn("tent-stripes",gy),roughness:.82,metalness:.02,side:Te}),o=new at(new dn(1.25,1.9,12,1,!1),a);o.position.y=.95,o.castShadow=!0,r.add(o);let l=new at(new ce(.035,.035,2.6,6),new xt({color:6241331,roughness:.7}));l.position.y=1.2,r.add(l);let c=new at(new qe(.55,.28),new xt({color:i.accent,side:Te}));c.position.set(.28,2.5,0),r.add(c),n.add(r)}function Cy(n,t,e,i,s,r){let a=[16740241,16767293,6609151,11635967,16753244],o=new Gt;o.position.copy(t),o.scale.setScalar(e);for(let l=0;l<6;l++){let c=a[(l+Math.floor(s()*4))%a.length],h=new Tt(c).offsetHSL((s()-.5)*.04,0,(s()-.5)*.08),u=new at(new De(.38+s()*.16,12,9),new xt({color:h,roughness:.28,metalness:.05}));u.position.set((s()-.5)*1.5,1.6+s()*1.6,(s()-.5)*1.5),o.add(u);let d=new at(new ce(.008,.008,1.4,4),new me({color:14209736}));d.position.copy(u.position).add(new M(0,-.7,0)),o.add(d)}n.add(o),r.push({mesh:o,baseY:t.y,phase:s()*_t})}function Py(n,t,e,i,s){let r=new Gt;r.position.copy(t),r.rotation.y=s()*_t,r.scale.setScalar(e);let a=new xt({map:sn("rock",bl),color:8615786,roughness:.98}),o=new xt({color:4866616,roughness:.95});for(let l=0;l<4;l++){let c=1.2+s()*1.6,h=1.4+s()*3.8,u=.7+s()*1.4,d=new at(new we(c,h,u),l%3===0?o:a);d.position.set((s()-.5)*5,h/2,(s()-.5)*4),d.rotation.y=s()*_t,d.castShadow=!0,r.add(d)}n.add(r)}function tu(n,t){let e=new Gt;e.name="decor";let i=he(n.number*7919+13),s=n.samples,r=D=>s[Math.floor(Mt(D,0,.999)*(s.length-1))],a=sn("rock",bl),o=sn("grass",Jh),l=new xt({map:a,color:16777215,roughness:.98,metalness:0}),c=new xt({map:o,color:16777215,roughness:.94,metalness:0}),h=new xt({map:a,color:16777215,roughness:1,metalness:0,flatShading:!0}),u=[],d=20,p=new ce(1,1.075,1.05,18,1,!1),g=new ce(.985,.995,.16,18,1,!1),y=Kh(91),m=[],f=[],_=[],x=8;for(let D=0;D<d;D++){let $=D<x,X=$?(D+.5)/x*.92+(i()-.5)*.035:(D-x+.5)/(d-x)+(i()-.5)*.03,I=r(X),H=i()>.5?1:-1,st=$?H*Lt(i,9,17):H*Lt(i,26,76),ut=I.p.clone().addScaledVector(I.n,st);ut.y-=$?Lt(i,3.5,9):Lt(i,7,28);let ft=$?Lt(i,2.2,3.8):Lt(i,3.1,6.6),St=Lt(i,.84,1.18),Ut=ut.y;m.push({matrix:fn(new M(ut.x,Ut-.52,ut.z),new oe().setFromEuler(new Pe(0,i()*_t,0)),new M(ft,1.18,ft*St)),color:new Tt(t.rock).offsetHSL(0,0,(i()-.5)*.11).getHex()}),f.push({matrix:fn(new M(ut.x,Ut+.03,ut.z),new oe().setFromEuler(new Pe(0,i()*_t,0)),new M(ft,1,ft*St)),color:new Tt(i()>.42?t.grass:t.grassTop).offsetHSL(0,0,(i()-.5)*.08).getHex()}),_.push({matrix:fn(new M(ut.x,Ut-.94,ut.z),new oe().setFromEuler(new Pe(0,i()*_t,0)),new M(ft*1.015,ft*Lt(i,.78,1.28),ft*St*1.015)),color:new Tt(t.rock).offsetHSL(0,0,(i()-.55)*.14).getHex()}),u.push({x:ut.x,z:ut.z,topY:Ut+.11,radius:ft*.8,scale:ft,near:$})}$n(e,p,l,m,{cast:!0,receive:!0}),$n(e,g,c,f,{cast:!0,receive:!0}),$n(e,y,h,_,{cast:!1,receive:!0});let E={trunks:[],branches:[],leaves:[],pines:[],snow:[]},P=[];for(let D of u){let $=D.near?3+Math.floor(i()*3):2+Math.floor(i()*3),X=t.id==="hills"?.64:t.id==="battlefield"?.38:t.id==="coaster"?.25:.12;for(let st=0;st<$;st++){let ut=i()*_t,ft=D.radius*Math.sqrt(i())*.72,St=D.x+Math.cos(ut)*ft,Ut=D.z+Math.sin(ut)*ft,It=(D.near?2.3:2.8)+i()*(D.near?2.6:3.4),jt=i()<X?"pine":"broad";t.id==="battlefield"&&i()>.56&&(jt="dead"),vy(E,t,i,St,Ut,D.topY,It,jt)}let I=D.near?3+Math.floor(i()*3):1+Math.floor(i()*3);for(let st=0;st<I;st++){let ut=i()*_t,ft=D.radius*Math.sqrt(i())*.82,St=Lt(i,.3,.8)*(D.near?1.15:1);E.leaves.push({matrix:fn(new M(D.x+Math.cos(ut)*ft,D.topY+St*.55,D.z+Math.sin(ut)*ft),new oe().setFromEuler(new Pe(i()*_t,i()*_t,i()*_t)),new M(St,St*.7,St*(.85+i()*.3))),color:new Tt(wl(t)[Math.floor(i()*4)]).offsetHSL(0,0,(i()-.5)*.08).getHex()})}let H=2+Math.floor(i()*3);for(let st=0;st<H;st++){let ut=i()*_t,ft=D.radius*Math.sqrt(i())*.84,St=Lt(i,.16,.55)*(D.near?1.1:D.scale*.38);P.push({matrix:fn(new M(D.x+Math.cos(ut)*ft,D.topY+St*.35,D.z+Math.sin(ut)*ft),new oe().setFromEuler(new Pe(i()*_t,i()*_t,i()*_t)),new M(St,St*.62,St)),color:new Tt(t.rock).offsetHSL(0,0,(i()-.5)*.12).getHex()})}}Sy(e,t,E),$n(e,_y(17),h,P,{cast:!0,receive:!0});let w=[],R=[],U=[],v=[];if(t.id==="battlefield"){let D=u.filter(X=>!X.near).slice(0,4);for(let X of D)by(e,new M(X.x,X.topY,X.z),Lt(i,.7,1.15),t,i,w);for(let X of u.filter(I=>I.near).slice(0,3))Py(e,new M(X.x,X.topY,X.z),Lt(i,.7,1.1),t,i);for(let X=0;X<3;X++){let I=r(.2+X*.25+i()*.08),H=I.p.clone().addScaledVector(I.n,(X%2?1:-1)*Lt(i,25,55));H.y-=Lt(i,5,16),Ty(e,H,Lt(i,2.4,4.4),i)}let $={rocks:[new xt({map:a,color:11838606,roughness:1,flatShading:!0}),new xt({map:a,color:10259833,roughness:1,flatShading:!0})],snow:new xt({color:15659502,roughness:.92})};for(let X=0;X<4;X++){let I=r(.08+X*.24),H=I.p.clone().addScaledVector(I.n,(X%2?-1:1)*Lt(i,55,110));H.y-=Lt(i,20,42);let st={group:new Gt,baseY:H.y,phase:i()*_t};vl(st.group,new M(0,0,0),Lt(i,15,30),Lt(i,22,46),30+X,t,$),st.group.position.copy(H),e.add(st.group),v.push(st)}}else if(t.id==="hills"||t.id==="jade"){let D={rocks:[new xt({map:a,color:11581608,roughness:1,flatShading:!0}),new xt({map:a,color:10003346,roughness:1,flatShading:!0}),new xt({map:a,color:12634296,roughness:1,flatShading:!0})],snow:new xt({color:16120063,roughness:.9})};for(let $=0;$<7;$++){let X=r(.06+$*.135),I=$%2?1:-1,H=X.p.clone().addScaledVector(X.n,I*Lt(i,38,105));H.y-=Lt(i,16,45);let st={group:new Gt,baseY:H.y,phase:i()*_t};vl(st.group,new M(0,0,0),Lt(i,18,38),Lt(i,34,68),60+$,t,D),st.group.position.copy(H),e.add(st.group),v.push(st)}}else if(t.id==="coaster"){let D={rocks:[new xt({map:a,color:10719113,roughness:1,flatShading:!0}),new xt({map:a,color:9074288,roughness:1,flatShading:!0})],snow:new xt({color:16766914,roughness:.95})};for(let H=0;H<3;H++){let st=r(.72+H*.09),ut=st.p.clone().addScaledVector(st.n,(H%2?1:-1)*Lt(i,58,100));ut.y-=Lt(i,24,42);let ft={group:new Gt,baseY:ut.y,phase:i()*_t};vl(ft.group,new M(0,0,0),Lt(i,16,28),Lt(i,25,46),90+H,t,D),ft.group.position.copy(ut),e.add(ft.group),v.push(ft)}let $=r(.12),I=$.p.clone().addScaledVector($.n,-1*27);I.y-=8.5,Ay(e,I,1.05,t,i,R,$.p);for(let H=0;H<3;H++){let st=r(.18+H*.08),ut=st.p.clone().addScaledVector(st.n,(H%2?1:-1)*Lt(i,15,28));ut.y-=Lt(i,4,9),Ry(e,ut,Lt(i,.8,1.35),t,i)}for(let H=0;H<2;H++){let st=r(.23+H*.1),ut=st.p.clone().addScaledVector(st.n,(H%2?1:-1)*Lt(i,16,26));ut.y-=Lt(i,1,5),Cy(e,ut,Lt(i,.8,1.2),t,i,U)}}if(t.id==="neon"||t.id==="starlight"){let D=new gs(.6,0),$=t.id==="starlight"?16020150:4712703,X=new xt({color:$,emissive:t.id==="starlight"?12592851:2282478,emissiveIntensity:1.4,roughness:.15,metalness:.4,transparent:!0,opacity:.92}),I=new fi(D,X,26);for(let H=0;H<26;H++){let st=r(i()),ut=(i()>.5?1:-1)*Lt(i,20,70),ft=st.p.clone().addScaledVector(st.n,ut);ft.y-=Lt(i,4,22);let St=new Fe;St.position.copy(ft),St.rotation.set(i()*.4,i()*_t,i()*.4),St.scale.setScalar(Lt(i,.6,2.4)),St.updateMatrix(),I.setMatrixAt(H,St.matrix)}I.instanceMatrix.needsUpdate=!0,e.add(I)}let b=_a(t,t.id==="battlefield"?.84:.88),F=[],Z=t.id==="neon"?8:11;for(let D=0;D<Z;D++){let $=r(i()),X=i()>.5?1:-1,I=$.p.clone().addScaledVector($.n,X*Lt(i,34,108));I.y+=Lt(i,-3,28);let H=xa(b,i,Lt(i,4,9));H.position.copy(I),e.add(H),F.push({group:H,baseX:I.x,baseY:I.y,phase:i()*_t,drift:.2+i()*.45})}let rt=t.id==="neon"?2:3;for(let D=0;D<rt;D++){let $=r(.16+D*.3+(i()-.5)*.04),X=D%2?-1:1,I=$.p.clone().addScaledVector($.n,X*Lt(i,34,56));I.y+=Lt(i,9,24);let H=xa(b,i,Lt(i,10,16));H.position.copy(I),e.add(H),F.push({group:H,baseX:I.x,baseY:I.y,phase:i()*_t,drift:.12+i()*.22})}if(t.id==="hills"||t.id==="battlefield"){let D=_a(t,.16);for(let $=0;$<7;$++){let X=r(i()),I=X.p.clone().addScaledVector(X.n,(i()>.5?1:-1)*Lt(i,30,95));I.y-=Lt(i,6,18);let H=xa(D,i,Lt(i,7,14));H.position.copy(I),e.add(H),F.push({group:H,baseX:I.x,baseY:I.y,phase:i()*_t,drift:.1+i()*.25})}}let L=170,N=new ye,W=new Float32Array(L*3);for(let D=0;D<L;D++){let $=r(i()),X=$.p.clone().addScaledVector($.n,(i()-.5)*26);W[D*3]=X.x,W[D*3+1]=X.y+Lt(i,-5,12),W[D*3+2]=X.z}N.setAttribute("position",new Re(W,3));let nt=xy(t.id==="neon"?"rgba(120,240,255,0.95)":t.id==="candy"?"rgba(255,190,230,0.95)":t.id==="battlefield"?"rgba(240,220,190,0.9)":"rgba(255,250,230,0.95)"),tt=new Di({size:t.id==="battlefield"?.38:.48,map:nt,transparent:!0,opacity:t.id==="neon"?.5:.48,depthWrite:!1,blending:We,color:t.accent,sizeAttenuation:!0}),V=new pi(N,tt);return V.frustumCulled=!1,e.add(V),e.userData.update=(D,$=.016)=>{V.rotation.y=D*.006;for(let X of F)X.group.position.x=X.baseX+Math.sin(D*.02+X.phase)*X.drift*8,X.group.position.y=X.baseY+Math.sin(D*.055+X.phase)*.3;for(let X of w){let I=X.mesh.geometry.attributes.position;for(let H=0;H<I.count;H++){let st=X.base[H*3];I.setZ(H,Math.sin(D*3.1+st*5+X.phase)*.09*st),I.setY(H,X.base[H*3+1]+Math.sin(D*2.3+st*4+X.phase)*.018*st)}I.needsUpdate=!0}for(let X of R){X.wheel.rotation.z=D*X.speed+X.phase;for(let I of X.cabins)I.group.rotation.z=-X.wheel.rotation.z}for(let X of U)X.mesh.position.y=X.baseY+Math.sin(D*.8+X.phase)*.4;for(let X of v)X.group.rotation.y+=$*6e-4},e}function eu(n,t,e=1){let i=he(t),s=new Gt,r=sn("rock",bl),a=sn("grass",Jh),o=sn("bark",El),l=sn("leaf-card",$h),c=new xt({map:r,color:n.rock,roughness:1,flatShading:!0}),h=new xt({map:r,color:n.rockDark,roughness:1}),u=new xt({map:a,color:n.grass,roughness:.94}),d=new xt({map:o,color:jh(n),roughness:.95}),g=wl(n).map(x=>new xt({map:l,color:x,roughness:.9,alphaTest:.38,side:Te})),y=new at(new ce(1,1.08,.5,16),h);y.position.y=-.25,y.castShadow=!0,y.receiveShadow=!0,s.add(y);let m=new at(new ce(.985,1,.16,16),u);m.position.y=.02,m.castShadow=!0,m.receiveShadow=!0,s.add(m);let f=new at(Kh(t),c);f.position.y=-.5,f.scale.set(1,1.25,1),f.castShadow=!0,s.add(f);let _=Zh();for(let x=0;x<4;x++){let E=i()*_t,P=.55*Math.sqrt(i()),w=Math.cos(E)*P,R=Math.sin(E)*P,U=.8+i()*1,v=new Gt;v.position.set(w,.11,R);let b=new at(new ce(.045,.08,U*.72,8),d);b.position.y=U*.36,b.castShadow=!0,v.add(b);for(let F=0;F<2;F++){let Z=i()*_t,rt=new M(Math.cos(Z)*.6,.8,Math.sin(Z)*.6).normalize(),L=U*.34,N=new at(new ce(.018,.042,L,6),d);N.position.set(0,U*(.38+F*.16),0),N.quaternion.setFromUnitVectors(Ml,rt),N.translateY(L/2),N.castShadow=!0,v.add(N)}for(let F=0;F<11;F++){let Z=i()*_t,rt=U*(.07+i()*.3),L=new at(_,g[Math.floor(i()*g.length)]);L.position.set(Math.cos(Z)*rt,U*(.56+i()*.48),Math.sin(Z)*rt);let N=U*(.26+i()*.2);L.scale.set(N*(.9+i()*.45),N*(.75+i()*.4),N),L.rotation.set(i()*_t,i()*_t,i()*_t),L.castShadow=!0,v.add(L)}s.add(v)}return s.scale.setScalar(e),s.userData.themeMaterials={rockMat:c,soilMat:h,grassMat:u,trunkMat:d,leafMats:g},s}var Ly=`
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
}`,Iy=`
uniform sampler2D uMap;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 tex = texture2D(uMap, gl_PointCoord);
  float alpha = tex.a * vAlpha;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(vColor * tex.rgb, alpha);
}`,tr=class{constructor(t,{max:e=500,texture:i,blending:s=We}){this.max=e,this.cursor=0,this.alive=0,this.particles=[],this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e);for(let r=0;r<e;r++)this.particles.push({pos:new M,vel:new M,life:0,maxLife:1,gravity:0,drag:0,size:1,color:new Tt(1,1,1)}),this.positions[r*3+1]=-1e4;this.geo=new ye,this.geo.setAttribute("position",new Re(this.positions,3)),this.geo.setAttribute("aColor",new Re(this.colors,3)),this.geo.setAttribute("aSize",new Re(this.sizes,1)),this.geo.setAttribute("aAlpha",new Re(this.alphas,1)),this.material=new wn({uniforms:{uMap:{value:i}},vertexShader:Ly,fragmentShader:Iy,transparent:!0,depthWrite:!1,blending:s}),this.points=new pi(this.geo,this.material),this.points.frustumCulled=!1,t.add(this.points)}spawn(t){let{pos:e,count:i=8,colors:s=[16777215],speed:r=3,speedVar:a=2,up:o=1,spread:l=new M(1,1,1),size:c=.55,sizeVar:h=.25,life:u=.6,lifeVar:d=.25,gravity:p=4,drag:g=1.2}=t;for(let y=0;y<i;y++){let m=this.particles[this.cursor];this.cursor=(this.cursor+1)%this.max;let f=new Tt(s[Math.floor(Math.random()*s.length)]);f.offsetHSL((Math.random()-.5)*.05,0,(Math.random()-.5)*.15),m.color.copy(f),m.pos.copy(e);let _=Math.random()*Math.PI*2,x=Math.random()*2-1,E=Math.sqrt(Math.max(0,1-x*x));m.vel.set(Math.cos(_)*E,x,Math.sin(_)*E),m.vel.multiplyScalar(r+Math.random()*a),m.vel.x*=l.x,m.vel.z*=l.z,m.vel.y=m.vel.y*l.y+o*(.4+Math.random()*.6),m.life=u+Math.random()*d,m.maxLife=m.life,m.gravity=p,m.drag=g,m.size=c+Math.random()*h}this.alive=this.max}update(t){for(let e=0;e<this.max;e++){let i=this.particles[e],s=e*3;if(i.life<=0){this.alphas[e]=0;continue}if(i.life-=t,i.life<=0){this.alphas[e]=0,this.positions[s+1]=-1e4;continue}i.vel.y-=i.gravity*t,i.vel.multiplyScalar(Math.max(0,1-i.drag*t)),i.pos.addScaledVector(i.vel,t);let r=i.life/i.maxLife;this.positions[s]=i.pos.x,this.positions[s+1]=i.pos.y,this.positions[s+2]=i.pos.z,this.colors[s]=i.color.r,this.colors[s+1]=i.color.g,this.colors[s+2]=i.color.b,this.sizes[e]=i.size*(.6+.4*r),this.alphas[e]=Math.min(1,r*1.8)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}};function Dy(){let{canvas:n,ctx:t}=ne(64,64);return t.fillStyle="#ffffff",t.beginPath(),t.roundRect(14,14,36,36,8),t.fill(),se(n)}var Ma=class{constructor(t){let e=Oh(96);this.sparks=new tr(t,{max:520,texture:e,blending:We}),this.dust=new tr(t,{max:240,texture:e,blending:Gn}),this.confetti=new tr(t,{max:260,texture:Dy(),blending:Gn}),this.ringGeo=new la(.86,1,48),this.rings=[],this.scene=t}ring(t,e=16777215,{flat:i=!1,life:s=.42,grow:r=5,opacity:a=.75,scale:o=.6}={}){let l=new me({color:e,transparent:!0,opacity:a,side:Te,depthWrite:!1,blending:We}),c=new at(this.ringGeo,l);c.position.copy(t),c.scale.setScalar(o),i?c.rotation.x=-Math.PI/2:c.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),this.scene.add(c),this.rings.push({mesh:c,life:s,maxLife:s,grow:r,opacity:a})}coin(t){this.sparks.spawn({pos:t,count:8,colors:[16769674,16763196,16774872],speed:2.2,speedVar:2.2,up:1.2,size:.5,life:.4,gravity:5,drag:1.6})}gem(t){this.sparks.spawn({pos:t,count:22,colors:[10418431,3331829,16777215,8257487],speed:3,speedVar:3.2,up:1.4,size:.62,life:.65,gravity:4,drag:1.4}),this.ring(t,9369599,{life:.5,grow:6,scale:.5})}hit(t,e){if(this.sparks.spawn({pos:t,count:20,colors:[16765066,16747068,16777215,16763196],speed:4.5,speedVar:4,up:2,size:.6,sizeVar:.4,life:.5,gravity:11,drag:.8}),this.dust.spawn({pos:t,count:7,colors:[14275267,12169893],speed:1.2,speedVar:1.6,up:1.6,size:1,sizeVar:.6,life:.65,gravity:-.6,drag:2}),this.ring(t,16764794,{life:.32,grow:7,scale:.45}),e){let i=t.clone().addScaledVector(e,.3);this.ring(i,16773312,{life:.3,grow:5,scale:.35})}}smash(t,{normal:e=null,accent:i=16763196,big:s=!1,radius:r=1}={}){let a=s?52:34;this.sparks.spawn({pos:t,count:a,colors:[i,16777215,16760938,16742972],speed:s?7:5.4,speedVar:s?6:4.6,up:2.2,size:s?.82:.64,sizeVar:.45,life:.55,lifeVar:.35,gravity:12,drag:.9}),this.dust.spawn({pos:t,count:s?18:12,colors:[14275267,12169893,9276034],speed:2.2,speedVar:2.6,up:2.1,spread:new M(1.3,1,1.3),size:1.1,sizeVar:.8,life:.8,gravity:-.7,drag:1.9}),this.ring(t,i,{life:.42,grow:10,opacity:.6,scale:.5+r*.08});let o=e?t.clone().addScaledVector(e,.45):t;this.ring(o,16777215,{life:.3,grow:7,opacity:.8,scale:.35}),s&&this.ring(o,16768922,{life:.5,grow:13,opacity:.4,scale:.7})}trail(t,e=16777215,i=null,s=!1){let r=t.clone();i&&r.addScaledVector(i,-.45),r.x+=(Math.random()-.5)*.5,r.y+=(Math.random()-.5)*.5,r.z+=(Math.random()-.5)*.5,this.sparks.spawn({pos:r,count:s?2:1,colors:[e,16777215],speed:.5,speedVar:.8,up:.15,size:s?.42:.3,sizeVar:.18,life:s?.32:.22,lifeVar:.12,gravity:0,drag:2.8})}land(t,e){let i=Math.min(8,2+Math.floor(e*.25));this.dust.spawn({pos:t,count:i,colors:[15262680,13617338,16052454],speed:.8,speedVar:1.6,up:.8,spread:new M(1.5,.5,1.5),size:.65,sizeVar:.5,life:.5,gravity:-.2,drag:2.4})}boost(t){this.sparks.spawn({pos:t,count:14,colors:[10418431,6087167,16777215],speed:3.5,speedVar:3,up:1.6,size:.55,life:.45,gravity:2,drag:1.4}),this.ring(t,8189951,{flat:!0,life:.4,grow:8,scale:.7})}fall(t){this.dust.spawn({pos:t,count:10,colors:[12568536,10135229],speed:2,speedVar:2,up:2.5,size:.9,sizeVar:.6,life:.8,gravity:-1,drag:1.2}),this.ring(t,16738954,{life:.5,grow:9,opacity:.5,scale:.5})}respawn(t){this.ring(t,8189908,{flat:!0,life:.6,grow:10,scale:.4}),this.sparks.spawn({pos:t,count:18,colors:[8189908,16777215,3921663],speed:2.5,speedVar:2.5,up:2.2,size:.55,life:.6,gravity:1.5,drag:1.4})}finish(t){this.confetti.spawn({pos:t.clone().add(new M(0,3,0)),count:80,colors:[16736129,16763196,5231103,8189908,11635967,16777215],speed:4,speedVar:5,up:3.5,spread:new M(1.6,1,1.6),size:.6,sizeVar:.5,life:2.4,lifeVar:1.4,gravity:7,drag:.35}),this.ring(t,16766826,{life:.8,grow:14,opacity:.55,scale:.8}),this.sparks.spawn({pos:t.clone().add(new M(0,1,0)),count:26,colors:[16769674,16777215,16763196],speed:4,speedVar:4,up:3,size:.6,life:.9,gravity:4,drag:.7})}update(t){this.sparks.update(t),this.dust.update(t),this.confetti.update(t);for(let e=this.rings.length-1;e>=0;e--){let i=this.rings[e];if(i.life-=t,i.life<=0){this.scene.remove(i.mesh),i.mesh.material.dispose(),this.rings.splice(e,1);continue}let s=1-i.life/i.maxLife;i.mesh.scale.setScalar(.6+s*i.grow),i.mesh.material.opacity=i.opacity*(1-s)*(1-s)}}};var Al=new M,Sa=new oe,nu=new M,iu=new Pe,Ea=class{constructor(t){this.scene=t,this.chunks=[],this.maxChunks=260,this.shardGeo=new ca(.16,0),this.shardGeo.computeBoundingSphere()}clear(){var t;for(let e of this.chunks)this.scene.remove(e.mesh),(t=e.mesh.material)==null||t.dispose();this.chunks.length=0}_add(t,{pos:e,quat:i,scale:s,vel:r,spin:a,life:o,gravity:l=26,drag:c=.9,fadeAt:h=.45,shrinkAt:u=.5,material:d}){t.position.copy(e),t.quaternion.copy(i),t.scale.copy(s),t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1,t.matrixAutoUpdate=!0,d&&(d.transparent=!0,d.opacity=1,d.depthWrite=!0),this.scene.add(t),p(this),this.chunks.push({mesh:t,vel:r.clone(),spin:a.clone(),life:o,maxLife:o,gravity:l,drag:c,fadeAt:h,shrinkAt:u,baseScale:s.clone()});function p(g){var m;if(g.chunks.length<g.maxChunks)return;let y=g.chunks.shift();g.scene.remove(y.mesh),(m=y.mesh.material)==null||m.dispose()}}burst(t,e={}){var g,y;if(!t)return;let{fragments:i=[],center:s=new M,accent:r=16757575,kind:a="block"}=t,o=(e.normal||new M(0,1,0)).clone().normalize(),l=Mt(Number(e.speed)||10,4,24),c=a==="tank"?1.25:a==="wrecking"?1.15:1,h=s.clone(),u=new Tt(r),d=Math.min(18,i.length);for(let m=0;m<d;m++){let f=i[m];if(!f||!f.geometry)continue;let _=Array.isArray(f.material)?(g=f.material[0])==null?void 0:g.clone():(y=f.material)==null?void 0:y.clone();if(!_)continue;f.matrix.decompose(Al,Sa,nu);let x=Math.max(.08,f.radius||.2),E=Al.clone().sub(h);E.lengthSq()<1e-4&&E.set(Math.random()-.5,Math.random(),Math.random()-.5),E.normalize(),E.x+=(Math.random()-.5)*.8,E.y+=.35+Math.random()*.55,E.z+=(Math.random()-.5)*.8,E.normalize();let P=E.multiplyScalar((3.5+Math.random()*6.5)*(.8+l*.035)*c);P.addScaledVector(o,2.4+Math.random()*3.4),P.y+=2.2+Math.random()*3.2;let w=new M((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),R=new at(f.geometry,_);this._add(R,{pos:Al,quat:Sa,scale:nu,vel:P,spin:w,life:1.15+Math.random()*.75+x*.35,gravity:24+Math.random()*8,drag:.85+Math.random()*.4,material:_})}let p=a==="tank"?10:7;for(let m=0;m<p;m++){let f=new xt({color:u.clone().offsetHSL((Math.random()-.5)*.06,.05,(Math.random()-.5)*.22),metalness:.55,roughness:.38,flatShading:!0}),_=h.clone().add(new M((Math.random()-.5)*1.1,.35+Math.random()*1.3,(Math.random()-.5)*1.1)),x=new oe().setFromEuler(new Pe(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI)),E=new M((Math.random()-.5)*9,4+Math.random()*8,(Math.random()-.5)*9).addScaledVector(o,2+Math.random()*4);this._add(new at(this.shardGeo,f),{pos:_,quat:x,scale:new M(.75+Math.random()*1.4,.55+Math.random()*1.1,.7+Math.random()*1.3),vel:E,spin:new M((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18),life:1.4+Math.random()*.9,gravity:26,drag:.8,material:f})}}update(t){var e;for(let i=this.chunks.length-1;i>=0;i--){let s=this.chunks[i];if(s.life-=t,s.life<=0){this.scene.remove(s.mesh),(e=s.mesh.material)==null||e.dispose(),this.chunks.splice(i,1);continue}let r=s.life/s.maxLife;s.vel.y-=s.gravity*t,s.vel.multiplyScalar(Math.max(0,1-s.drag*t)),s.mesh.position.addScaledVector(s.vel,t),iu.set(s.spin.x*t,s.spin.y*t,s.spin.z*t),Sa.setFromEuler(iu),s.mesh.quaternion.multiply(Sa);let a=r<s.fadeAt?r/s.fadeAt:1;s.mesh.material.opacity=a;let o=r<s.shrinkAt?.25+.75*(r/s.shrinkAt):1;s.mesh.scale.copy(s.baseScale).multiplyScalar(o)}}};function Uy(){let{canvas:n,ctx:t}=ne(128,128),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.3,"rgba(255,255,255,0.38)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),se(n)}function Ny(){let{canvas:n,ctx:t}=ne(128,128),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.55,"rgba(0,0,0,0.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),se(n)}var ba=class{constructor(t,e,i){this.renderer=t,this.theme=e,this.skin=i,this.scene=new hi,this.camera=new ke(36,1,.1,400),this.camera.position.set(.6,3.5,13.4),this.look=new M(-1.9,1,0),this.lookSmooth=this.look.clone(),this.time=0,this.pointer=new dt,this.pointerSmooth=new dt,this.orbiters=[],this.rings=[],this.accentMats=[],this.islands=[],this.glowTexture=Uy(),bs(t,this.scene,e),this.lights=va(this.scene),Ts(this.lights,e),this.lights.sun.position.set(7,14,9),this.lights.sun.shadow.camera.left=-12,this.lights.sun.shadow.camera.right=12,this.lights.sun.shadow.camera.top=12,this.lights.sun.shadow.camera.bottom=-12,this.build()}build(){let t=this.theme,e=new Gt;this.scene.add(e),this.root=e;let i=new Gt;i.position.y=-1.55,e.add(i),this.platform=i;let s=new xt({color:1317939,metalness:.9,roughness:.24,envMapIntensity:1.5}),r=new xt({color:1845061,metalness:.72,roughness:.3,envMapIntensity:1.2}),a=new at(new ce(3.3,3.7,.55,72),s);a.position.y=-.2,a.receiveShadow=!0,a.castShadow=!0,i.add(a);let o=new at(new ce(3.28,3.28,.08,72),r);o.position.y=.12,o.receiveShadow=!0,i.add(o);let l=new at(new dn(3.62,2.6,72,1,!0),s);l.rotation.x=Math.PI,l.position.y=-1.7,i.add(l);let c=new me({color:t.accent,transparent:!0,opacity:.85});this.accentMats.push(c);let h=new at(new nn(3.3,.035,10,96),c);h.rotation.x=Math.PI/2,h.position.y=.17,i.add(h);let u=new at(new nn(3.3,.03,10,96),c.clone());u.rotation.x=Math.PI/2,u.position.y=-.48,this.accentMats.push(u.material),i.add(u);let d=new me({color:t.accent,transparent:!0,opacity:.3});this.accentMats.push(d);let p=new at(new nn(2.1,.02,8,80),d);p.rotation.x=Math.PI/2,p.position.y=.175,i.add(p);let g=new at(new aa(2.1,64),new me({color:16777215,transparent:!0,opacity:.025}));g.rotation.x=-Math.PI/2,g.position.y=.17,i.add(g);let y=Ny(),m=new at(new qe(5.4,5.4),new me({map:y,transparent:!0,depthWrite:!1,opacity:.85}));m.rotation.x=-Math.PI/2,m.position.y=.175,i.add(m);let f=new Gt;f.position.set(1.85,.06,.2),e.add(f),this.ballGroup=f;let _=new at(new De(1.45,72,52),Oi(this.skin));_.castShadow=!0,_.receiveShadow=!1,f.add(_),this.ball=_;let x=new Gt;f.add(x);let E=new nn(2.15,.025,8,120),P=[{rot:[1.15,.2,.1],speed:.22,opacity:.5},{rot:[1.35,-.7,.5],speed:-.16,opacity:.3},{rot:[.75,.9,-.3],speed:.11,opacity:.2}];for(let V of P){let D=new me({color:t.accent,transparent:!0,opacity:V.opacity,depthWrite:!1,blending:We});this.accentMats.push(D);let $=new at(E,D);$.rotation.set(...V.rot),$.userData.speed=V.speed,x.add($),this.rings.push($)}let w=new Gt;f.add(w),this.orbit=w;let R=new xt({color:16766282,metalness:.35,roughness:.35,emissive:10117632,emissiveIntensity:.7});this.coinMat=R;let U=new ce(.26,.26,.06,20);for(let V=0;V<9;V++){let D=new Gt,$=V/9*Math.PI*2,X=3.2,I=new at(U,R);I.rotation.x=Math.PI/2,I.position.set(Math.cos($)*X,Math.sin($*2)*.55,Math.sin($)*X),I.castShadow=!0,D.add(I),w.add(D),this.orbiters.push({mesh:I,phase:$,speed:.25+V%3*.03,baseY:I.position.y})}let v=[11138815,16765684,14077183];for(let V=0;V<3;V++){let D=this.makeDiamond(.34,v[V],t);D.scale.setScalar(.9+V*.05),w.add(D),this.orbiters.push({mesh:D,phase:V/3*Math.PI*2+1.2,speed:-.32,baseY:.9+V*.4,radius:2.9+V*.5,gem:!0,spin:1.35+V*.18})}let b=this.makeDiamond(1.02,12450047,t);b.position.set(-2.65,2.35,-1.65),e.add(b),this.heroDiamond=b,this.heroBaseY=b.position.y;let F=this.glowTexture,Z=160,rt=new ye,L=new Float32Array(Z*3),N=he(2026);for(let V=0;V<Z;V++){let D=N()*Math.PI*2,$=3+N()*13;L[V*3]=Math.cos(D)*$,L[V*3+1]=-1+N()*10,L[V*3+2]=Math.sin(D)*$-2}rt.setAttribute("position",new Re(L,3));let W=new Di({size:.16,map:F,color:t.accent,transparent:!0,opacity:.6,depthWrite:!1,blending:We,sizeAttenuation:!0});this.motes=new pi(rt,W),this.motes.frustumCulled=!1,e.add(this.motes),this.buildBackdrop();let nt=new ki(t.sunLight,40,30,2);nt.position.set(4,8,6),e.add(nt);let tt=new ki(t.accent,22,26,2);tt.position.set(-6,1,-5),e.add(tt),this.ballBaseY=this.ballGroup.position.y}makeDiamond(t,e,i){let s=new Gt,r=new In({color:new Tt(e),metalness:.02,roughness:.04,transmission:.82,thickness:t*1.35,ior:2.32,clearcoat:1,clearcoatRoughness:.03,iridescence:.75,iridescenceIOR:1.8,envMapIntensity:2.1,transparent:!0,opacity:.96,flatShading:!0,side:Ln}),a=new at(new ce(t*.46,t*.9,t*.52,8,1),r);a.position.y=t*.27,a.castShadow=!0,s.add(a);let o=new at(new dn(t*.9,t*1.55,8,1),r);o.rotation.z=Math.PI,o.position.y=-t*.76,o.castShadow=!0,s.add(o);let l=new at(new ce(t*.43,t*.43,t*.035,8,1),new me({color:16777215,transparent:!0,opacity:.48,depthWrite:!1}));l.position.y=t*.535,s.add(l);let c=new at(new gs(t*.3,0),new me({color:e,transparent:!0,opacity:.72,depthWrite:!1,blending:We}));c.position.y=-t*.18,s.add(c);let h=new di(new ui({map:this.glowTexture,color:e,transparent:!0,opacity:.55,depthWrite:!1,blending:We}));h.scale.set(t*5.2,t*5.2,1),h.position.y=-t*.1,s.add(h);for(let u=0;u<3;u++){let d=new di(new ui({map:this.glowTexture,color:16777215,transparent:!0,opacity:.8,depthWrite:!1,blending:We})),p=u/3*Math.PI*2;d.position.set(Math.cos(p)*t*1.1,t*(.4+u*.26),Math.sin(p)*t*.7);let g=t*(.22+u*.05);d.scale.set(g,g,1),s.add(d)}return s.userData.core=c,s}buildBackdrop(){let t=this.theme,e=new Gt;this.scene.add(e),this.backdrop=e,this.islands=[];let i=[{seed:101,x:46,y:-20,z:-82,scale:5.6,rot:.4},{seed:207,x:-34,y:-10,z:-72,scale:6.2,rot:1.5},{seed:311,x:26,y:-4,z:-100,scale:7,rot:2.1},{seed:419,x:-80,y:-18,z:-88,scale:5.4,rot:3.3}];for(let r of i){let a=eu(t,r.seed,r.scale);a.position.set(r.x,r.y,r.z),a.rotation.y=r.rot,e.add(a),this.islands.push({group:a,baseY:r.y,phase:r.seed%17*.37})}let s=Qh(t,{count:12,seed:811,center:new M(0,10,-78),spread:new M(170,34,48),size:8.5,opacity:.46});this.scene.add(s),this.clouds=s}setTheme(t,e){if(t.id!==this.theme.id){this.theme=t,bs(e||this.renderer,this.scene,t),Ts(this.lights,t);for(let i of this.accentMats)i.color&&typeof i.color.set=="function"&&i.color.set(t.accent);this.backdrop&&(this.scene.remove(this.backdrop),Ms(this.backdrop),this.backdrop=null),this.clouds&&(this.scene.remove(this.clouds),Ms(this.clouds),this.clouds=null),this.buildBackdrop(),this.motes.material.color.set(t.accent),this.motes.material.needsUpdate=!0}}setSkin(t){if(t.id===this.skin.id)return;this.skin=t;let e=this.ball.material;this.ball.material=Oi(t),e.dispose()}resize(t,e){let i=t/e;this.camera.aspect=i;let s=i<.95,r=Mt(i,.55,2.6);this.camera.position.set(s?0:.6,s?3.3:3.5,s?15:13.4),this.look.set(s?0:-1.9,s?1.15:1,0),this.ballGroup.position.set(s?0:1.85,s?.1:.06,s?-.4:.2),this.ballBaseY=this.ballGroup.position.y,this.baseCam=this.camera.position.clone(),this.camera.fov=s?38:36-(r-1)*1.2,this.camera.updateProjectionMatrix(),this.portrait=s,this.backdrop.visible=!s,this.clouds.visible=!s,this.heroDiamond&&(this.heroDiamond.visible=!s),this.orbit.scale.setScalar(s?.9:1)}update(t,e=0,i=0){this.time+=t;let s=this.time;this.pointerSmooth.x=on(this.pointerSmooth.x,e,3,t),this.pointerSmooth.y=on(this.pointerSmooth.y,i,3,t),this.ball.rotation.y+=t*.35,this.ball.rotation.x=Math.sin(s*.4)*.08,this.ballGroup.position.y=this.ballBaseY+Math.sin(s*1.1)*.12,this.ballGroup.rotation.z=Math.sin(s*.7)*.03,this.ballGroup.rotation.x=Math.sin(s*.5+1)*.025;for(let o of this.rings)o.rotation.z+=t*o.userData.speed,o.rotation.x+=t*o.userData.speed*.4;for(let o of this.orbiters)o.gem?(o.phase+=t*o.speed,o.mesh.position.set(Math.cos(o.phase)*o.radius,o.baseY+Math.sin(s*1.3+o.phase)*.3,Math.sin(o.phase)*o.radius),o.mesh.rotation.y+=t*o.spin,o.mesh.rotation.x=Math.sin(s*.8+o.phase)*.22,o.mesh.userData.core&&(o.mesh.userData.core.material.opacity=.58+Math.sin(s*2.6+o.phase)*.2)):(o.mesh.rotation.z+=t*2.1,o.mesh.position.y=o.baseY+Math.sin(s*1.2+o.phase)*.22);this.orbit.rotation.y+=t*.16,this.platform.rotation.y=Math.sin(s*.1)*.03,this.motes.rotation.y+=t*.012,this.heroDiamond&&(this.heroDiamond.rotation.y+=t*.5,this.heroDiamond.position.y=this.heroBaseY+Math.sin(s*.9+.5)*.14),this.clouds&&(this.clouds.userData.update&&this.clouds.userData.update(s,t),this.clouds.rotation.y=Math.sin(s*.02)*.05);for(let o of this.islands)o.group.position.y=o.baseY+Math.sin(s*.35+o.phase)*.35,o.group.rotation.y+=t*.004;let r=this.pointerSmooth.x*(this.portrait?.35:.9),a=this.pointerSmooth.y*(this.portrait?.25:.45);this.camera.position.x=on(this.camera.position.x,this.baseCam.x+r,2.4,t),this.camera.position.y=on(this.camera.position.y,this.baseCam.y+a,2.4,t),this.lookSmooth.x=on(this.lookSmooth.x,this.look.x+r*.3,2,t),this.lookSmooth.y=on(this.lookSmooth.y,this.look.y+a*.3,2,t),this.camera.lookAt(this.lookSmooth)}render(){this.renderer.render(this.scene,this.camera)}};var rn=.68,su=30,ky=42,ru=11.2,au=10.5,er=1/120,Fy=650;function ou(){return{v:1,coins:0,totalCoins:0,smashTotal:0,skins:["chrome"],ball:"chrome",levels:{},currentLevel:0,settings:{music:.65,sfx:.85,haptics:!0,autoMove:!0,autoJump:!0},tutorialSeen:!1}}function Oy(n){let t=ou(),e=null;try{e=typeof n=="string"&&n.length?JSON.parse(n):null}catch{e=null}if(!e||typeof e!="object")return t;let i={...t,...e,settings:{...t.settings,...e.settings||{}},levels:{}};i.coins=Number.isFinite(e.coins)?Mt(Math.round(e.coins),0,1e9):0,i.totalCoins=Number.isFinite(e.totalCoins)?Mt(Math.round(e.totalCoins),0,1e9):i.coins,i.smashTotal=Number.isFinite(e.smashTotal)?Mt(Math.round(e.smashTotal),0,1e9):0,i.currentLevel=Mt(Number(e.currentLevel)||0,0,Xe-1),i.tutorialSeen=!!e.tutorialSeen;let s=new Set(["chrome"]);if(Array.isArray(e.skins))for(let a of e.skins)Cn.some(o=>o.id===a)&&s.add(a);let r=Cn.some(a=>a.id===e.ball)?e.ball:"chrome";if(s.add(r),i.skins=Array.from(s),i.ball=r,i.settings.music=Mt(Number(i.settings.music)||0,0,1),i.settings.sfx=Mt(Number(i.settings.sfx)||0,0,1),i.settings.haptics=!!i.settings.haptics,i.settings.autoMove=i.settings.autoMove!==!1,i.settings.autoJump=i.settings.autoJump!==!1,e.levels&&typeof e.levels=="object")for(let a of Qe){let o=e.levels[a.number];if(!o||typeof o!="object")continue;let l=Mt(Math.round(Number(o.stars)||0),0,3),c=Number.isFinite(o.best)?Math.max(0,o.best):0;(l>0||c>0)&&(i.levels[a.number]={stars:l,best:c})}return i}function By(){let{canvas:n,ctx:t}=ne(96,96),e=t.createRadialGradient(48,48,2,48,48,46);return e.addColorStop(0,"rgba(0,0,0,0.52)"),e.addColorStop(.55,"rgba(0,0,0,0.2)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,96,96),se(n)}var Ta=class{constructor(){this.canvas=document.getElementById("c"),this.state=ou(),this.mode="menu",this.currentIndex=0,this.audio=new ga,this.ui=new ma(this),this.isDebug=!1;try{this.isDebug=new URLSearchParams(location.search).has("debug")}catch{this.isDebug=!1}this.pointerSteer=0,this.keyboardSteer=0,this.holding=!1,this.keys=new Set,this.pointer={active:!1,id:null,startX:0,startY:0,jumped:!1},this.showPointer={x:0,y:0},this.accumulator=0,this.visualTime=0,this.shake=0,this.steer=0,this.speed=0,this.lat=0,this.latVel=0,this.yOff=rn,this.vy=0,this.grounded=!0,this.falling=!1,this.rescues=0,this.rescueCooldown=0,this.dist=0,this.prevDist=0,this.levelTime=0,this.falls=0,this.collected=0,this.smashes=0,this.smashCombo=0,this.lastSmashAt=-10,this.hitStop=0,this.trailTimer=0,this.trailColor=16777215,this.sessionCombo=0,this.lastCoinAt=-10,this.checkpointDist=0,this.respawnDist=0,this.invuln=0,this.boostTimer=0,this.boostZoneCooldown=0,this.finished=!1,this.completeTime=0,this.completeShown=!1,this.finishCenter=new M,this.finishDir=new M(0,0,1),this.camPosSmooth=new M,this.camLookSmooth=new M,this.frame=null,this.ballPos=new M,this.track=null,this.decor=null,this.sheet=null,this.settingsOpen=!1,this.saveTimer=null,this.ok=!1,this.hostPaused=!1,this.raf=0,this.last=0,this.elapsed=0;try{this.renderer=new Ii({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=Ee,this.renderer.toneMapping=Fi,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nl,this.ok=!0}catch(t){console.error("WebGL unavailable",t),this.renderer=null;return}this.scene=new hi,this.camera=new ke(62,1,.1,700),this.camera.position.set(0,8,-14),this.baseFov=62,this.lights=va(this.scene),this.lights.sun.castShadow=!0,this.lights.sun.shadow.mapSize.set(1024,1024),this.lights.sun.shadow.camera.left=-18,this.lights.sun.shadow.camera.right=18,this.lights.sun.shadow.camera.top=18,this.lights.sun.shadow.camera.bottom=-18,this.lights.sun.shadow.camera.far=70,this.lights.sun.shadow.bias=-6e-4,this.lights.sun.shadow.normalBias=.03,this.ball=new at(new De(rn,48,32),Oi(Qs(this.state.ball))),this.ballSkinId=this.state.ball,this.ball.castShadow=!0,this.ball.receiveShadow=!1,this.ball.position.set(0,12,0),this.ball.visible=!1,this.scene.add(this.ball),this.blob=new at(new qe(2.1,2.1),new me({map:By(),transparent:!0,opacity:.55,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.visible=!1,this.scene.add(this.blob),this.fx=new Ma(this.scene),this.debris=new Ea(this.scene),this.showcase=null,this.skinThumbs=null,this.skinSprites=null,this.skinFrames=18,this.loop=this.loop.bind(this),this.bindInput(),this.bindResize(),window.__ORB=window.__ORB||{},window.__ORB.game=this,window.__ORB.getDebug=()=>this.getDebug()}bindResize(){let t=()=>this.resize();window.addEventListener("resize",t),window.visualViewport&&window.visualViewport.addEventListener("resize",t),this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),Ye.logError(new Error("WebGL context lost")),this.ui.toast("Graphics were reset. Return to the menu to continue.","pink",4e3)},!1)}bindInput(){let t=this.canvas;t.addEventListener("pointerdown",s=>{if(this.mode==="playing"){this.audio.unlock(),this.audio.setYouTubeAudio(Ye.getAudioEnabled()),this.pointer.active=!0,this.pointer.id=s.pointerId,this.pointer.startX=s.clientX,this.pointer.startY=s.clientY,this.pointer.jumped=!1,this.holding=!0,this.pointerSteer=0,this.ui.hideHint();try{t.setPointerCapture(s.pointerId)}catch{}s.cancelable&&s.preventDefault()}}),t.addEventListener("pointermove",s=>{if(!this.pointer.active||s.pointerId!==this.pointer.id)return;let r=s.clientX-this.pointer.startX,a=s.clientY-this.pointer.startY,o=Math.min(170,Math.max(90,window.innerWidth*.16));this.pointerSteer=Mt(r/o,-1,1),Math.abs(r)>8&&(this.holding=!0),!this.pointer.jumped&&a<-46&&Math.abs(a)>Math.abs(r)*1.15&&(this.pointer.jumped=!0,this.pointer.startY=s.clientY,this.jump()),s.cancelable&&s.preventDefault()});let e=s=>{s.pointerId===this.pointer.id&&(this.pointer.active=!1,this.pointer.id=null,this.pointerSteer=0,[...this.keys].some(r=>r==="ArrowUp"||r==="KeyW")||(this.holding=!1))};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("lostpointercapture",e),window.addEventListener("pointermove",s=>{s.pointerType&&s.pointerType!=="mouse"&&this.mode!=="menu"||(this.showPointer.x=(s.clientX/window.innerWidth-.5)*2,this.showPointer.y=(s.clientY/window.innerHeight-.5)*2)}),window.addEventListener("keydown",s=>{let r=s.target&&s.target.tagName||"";if(r==="INPUT"||r==="TEXTAREA"||s.key==="Escape")return;["ArrowLeft","ArrowRight","KeyA","KeyD","Space","ArrowUp","KeyW"].includes(s.code)&&(this.keys.add(s.code),this.mode==="playing"&&!s.repeat&&s.code==="Space"&&this.jump(),this.mode==="playing"&&s.cancelable&&s.preventDefault(),this.audio.unlock(),this.audio.setYouTubeAudio(Ye.getAudioEnabled()))}),window.addEventListener("keyup",s=>{this.keys.delete(s.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.pointer.active=!1,this.pointerSteer=0,this.holding=!1,this.keyboardSteer=0});let i=()=>{this.audio.unlock(),this.audio.setYouTubeAudio(Ye.getAudioEnabled())};window.addEventListener("pointerdown",i,{once:!0,passive:!0}),window.addEventListener("keydown",i,{once:!0,passive:!0})}async init(){if(!this.ok){this.ui.showUnsupported();return}this.resize(),this.ui.setPauseAvailable(!1),Ye.init({onPause:()=>this.onHostPause(),onResume:()=>this.onHostResume(),onAudioEnabledChange:s=>{this.audio.setYouTubeAudio(s),s&&!this.hostPaused&&this.mode!=="paused"&&this.audio.resume()}});let t=await Ye.load();this.state=Oy(t),this.audio.setMusicVolume(this.state.settings.music),this.audio.setSfxVolume(this.state.settings.sfx),this.ui.syncSettings(),this.ui.updateCoins(this.state.coins);let e=Ss(this.continueIndex());bs(this.renderer,this.scene,e),Ts(this.lights,e),this.showcase=new ba(this.renderer,e,Qs(this.state.ball)),this.showcase.resize(window.innerWidth,window.innerHeight),this.mode="menu",this.ui.refreshMenu(),this.ui.splashStatus("Ready to roll!"),this.showcase.update(0,0,0),this.showcase.render(),Ye.firstFrameReady(),this.startLoop(),this.sendScoreIfNeeded(),setTimeout(()=>{this.ui.hideSplash(),Ye.gameReady()},750);let i=()=>{try{let s=Sl(this.renderer,this.showcase.theme).env,r=zh(s);this.skinThumbs=r.thumbs,this.skinSprites=r.sprites,this.skinFrames=r.frames,this.sheet==="shop"&&this.ui.renderShop()}catch(s){console.warn("Skin thumbnails failed",s)}};setTimeout(()=>{typeof window.requestIdleCallback=="function"?window.requestIdleCallback(i,{timeout:2400}):setTimeout(i,350)},1500),this.isDebug&&(window.__ORB.debug={startLevel:s=>this.startLevel(s),finishNow:()=>{this.track&&(this.dist=this.track.finishDist-.25,this.speed=Math.max(this.speed,8),this.stepPhysics(er),this.stepPhysics(er))},fallNow:()=>this.startFall(),jumpNow:()=>this.jump(),gapNow:()=>{if(!this.track||!this.track.gaps.length)return!1;let s=this.track.gaps[0];return this.dist=Math.max(4,s.start-2.2),this.prevDist=this.dist,this.lat=0,this.latVel=0,this.speed=12.5,this.grounded=!0,this.falling=!1,this.yOff=rn+this.track.rampHeightAt(this.dist),this.updateBallPos(),this.snapCamera(),!0},setCoins:s=>{this.state.coins=s,this.ui.updateCoins(s)},state:()=>JSON.parse(JSON.stringify(this.state)),info:()=>this.getDebug(),menu:()=>this.quitToMenu(),openShop:()=>this.openShop(),smashNext:()=>{if(!this.track)return 0;let s=this.track.obstacles.find(r=>!r.destroyed);return s?(this.smashObstacle(s,{normal:new M(0,1,0),push:new M(0,.1,0)}),1):0}}),window.__ORB.ready=!0}startLoop(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(this.loop))}stopLoop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}loop(t){this.raf=requestAnimationFrame(this.loop);try{let e=Mt((t-this.last)/1e3,0,.05);if(this.last=t,this.visualTime+=e,this.mode==="menu"){this.showcase&&(this.showcase.update(e,this.showPointer.x,this.showPointer.y),this.showcase.render());return}this.updateGame(e),this.renderer.render(this.scene,this.camera)}catch(e){console.error(e),Ye.logError(e),this.stopLoop()}}updateGame(t){var s;this.elapsed+=t;let e=this.hitStop>0;e&&(this.hitStop=Math.max(0,this.hitStop-t));let i=e?t*.22:t;if(this.mode==="playing"){this.keyboardSteer=(this.keys.has("ArrowRight")||this.keys.has("KeyD")?1:0)-(this.keys.has("ArrowLeft")||this.keys.has("KeyA")?1:0);let r=this.keys.has("ArrowUp")||this.keys.has("KeyW");this.steer=Mt(this.pointerSteer+this.keyboardSteer,-1,1),this.holding=this.pointer.active||r,this.accumulator=Math.min(this.accumulator+i,.12);let a=0;for(;this.accumulator>=er&&a<12;)this.stepPhysics(er),this.accumulator-=er,a++}else(this.mode==="complete"||this.mode==="final")&&this.updateComplete(t);this.track&&this.mode!=="paused"&&this.track.update(this.visualTime,i),(s=this.decor)!=null&&s.userData.update&&this.decor.userData.update(this.visualTime,i),this.fx.update(t),this.debris.update(t),this.updateBallVisual(t),this.updateCamera(t),this.updateHudProgress(),this.ui.updateSpeed(this.speed,this.boostTimer>0,this.falling),this.track?(this.audio.updateRoll(this.speed,this.mode==="playing"&&!this.falling,this.grounded),this.updateSun()):this.audio.stopRoll()}stepPhysics(t){if(!this.track||this.finished)return;this.levelTime+=t,this.invuln=Math.max(0,this.invuln-t),this.boostTimer=Math.max(0,this.boostTimer-t),this.boostZoneCooldown=Math.max(0,this.boostZoneCooldown-t),this.rescueCooldown=Math.max(0,this.rescueCooldown-t);let e=this.track.halfWidth;if(this.falling){this.vy-=ky*t,this.yOff+=this.vy*t,this.lat+=this.latVel*t,this.dist+=this.speed*t*.3,this.speed=on(this.speed,0,5.5,t),this.respawnTimer-=t,this.updateBallPos(),this.respawnTimer<=0&&this.respawn(),this.prevDist=this.dist;return}let i=-this.steer*Math.max(.9,e-.75),s=this.grounded?1:.55,r=(i-this.lat)*7.5*s;if(this.latVel=Mt(on(this.latVel,r,this.grounded?14:4.5,t),-13,13),this.grounded){let c=this.state.settings.autoMove,h=0;if(this.holding||this.boostTimer>0||c){let d=this.boostTimer>0?19.5:this.holding?13.4:8.4,p=this.track.frameAt(Math.min(this.track.finishDist,this.dist+2.2)),g=Mt((p.p.y-this.frame.p.y)/2.2,-1.1,1.1),y=Mt(-g*7.2,-3.8,4.6);h=Mt(d+y,6.2,22.5)}let u=this.boostTimer>0?3.6:this.holding?1.9:c?2.4:6;this.speed=on(this.speed,h,u,t)}if(this.prevDist=this.dist,this.dist+=this.speed*t,this.lat+=this.latVel*t,this.grounded){let c=this.track.frameAt(Math.min(this.track.finishDist,this.dist+1.8)),h=this.frame.t.y,u=h-c.t.y;h>-.18&&u>.34&&this.speed>8.5&&(this.grounded=!1,this.vy=Mt(this.speed*u*.9,2.2,7.4),this.yOff=rn+.02)}this.grounded?this.yOff=rn+this.track.rampHeightAt(this.dist):(this.vy-=su*t,this.yOff+=this.vy*t),this.grounded&&this.tryAutoJump();let o=!this.track.isGapAt(this.dist)&&Math.abs(this.lat)<=e+.12;if(this.grounded)this.track.isRailAt(this.dist)&&Math.abs(this.lat)>e-.58&&(this.lat=Math.sign(this.lat)*(e-.58),Math.abs(this.latVel)>3.5&&(this.audio.sfx("bounce"),this.fx.land(this.ballPos,4)),this.latVel*=-.22),o||this.startFall();else if(o&&this.yOff<=rn+this.track.rampHeightAt(this.dist)&&this.vy<=0){let c=rn+this.track.rampHeightAt(this.dist);if(this.yOff>c-.55){let h=-this.vy;this.yOff=c,this.vy=0,this.grounded=!0,this.updateBallPos(),this.fx.land(this.ballPos,h),h>6&&(this.audio.sfx("land"),this.shake=Math.max(this.shake,Math.min(.22,h*.012)),Rn(12,this.state.settings.haptics))}else this.startFall()}else this.yOff<-1.8&&this.startFall();if(Math.abs(this.lat)>e+2.5&&!this.falling&&this.startFall(),this.updateBallPos(),this.falling){this.prevDist=this.dist;return}for(let c of this.track.boostZones)if(this.grounded&&this.boostZoneCooldown<=0&&this.prevDist<c.from&&this.dist>=c.from){this.boostTimer=1.15,this.boostZoneCooldown=1.7,this.speed+=4.2,this.audio.sfx("boost"),this.ui.flash("boost"),this.fx.boost(this.ballPos),Rn(18,this.state.settings.haptics);break}let l=this.track.collect(this.ballPos,.72);if(l>0){this.collected+=l,this.state.coins+=l,this.state.totalCoins+=l;let c=this.levelTime;c-this.lastCoinAt<2?this.sessionCombo+=1:this.sessionCombo=1,this.lastCoinAt=c,this.ui.updateCoins(this.state.coins,{pop:!0}),this.ui.setCombo(this.sessionCombo),l>=10?(this.audio.sfx("gem"),this.fx.gem(this.ballPos),Rn(14,this.state.settings.haptics)):(this.audio.sfx("coin",{combo:this.sessionCombo}),this.fx.coin(this.ballPos))}else this.sessionCombo>1&&this.levelTime-this.lastCoinAt>2.3&&(this.sessionCombo=0,this.ui.setCombo(0));if(this.invuln<=0)for(let c of this.track.obstacles){if(c.destroyed)continue;let h=c.collide(this.ballPos,rn);if(h){this.smashObstacle(c,h);break}}for(let c of this.track.checkpointDists)this.prevDist<c&&this.dist>=c&&Math.abs(this.lat)<=e&&c>this.checkpointDist+1&&(this.checkpointDist=c,this.respawnDist=c,this.ui.toast("Checkpoint!","green"),this.audio.sfx("checkpoint"),this.fx.respawn(this.ballPos),Rn(20,this.state.settings.haptics),this.saveSoon());this.dist>=this.track.finishDist&&this.finishLevel(),this.prevDist=this.dist}smashObstacle(t,e,i=null){var g;if(!t||t.destroyed)return!1;let s=i||t.fragments();t.shatter();let r=t.type,a=r==="tank"||r==="wrecking",o=(e==null?void 0:e.normal)||new M(0,1,0),l=(e==null?void 0:e.push)||o.clone().multiplyScalar(.5),c=(g=this.track)==null?void 0:g.theme,h=c?c.accent:16763196;this.debris.burst(s,{normal:o,speed:this.speed,kind:r}),this.fx.smash(s.center,{normal:o,accent:h,big:a,radius:s.radius}),this.smashes+=1,this.state.smashTotal+=1;let u=this.levelTime;this.smashCombo=u-this.lastSmashAt<4?this.smashCombo+1:1,this.lastSmashAt=u;let d=2+Math.min(6,this.smashCombo)+(a?2:0);this.collected+=d,this.state.coins+=d,this.state.totalCoins+=d,this.invuln=.38,this.shake=Math.max(this.shake,a?.65:.4);let p=this.track.frameAt(this.dist);return this.yOff=Math.max(rn,this.yOff+Math.max(.06,l.y*.5)),this.lat+=l.dot(p.n)*.7,this.latVel+=o.dot(p.n)*(a?3.4:2.2),this.vy=Math.max(this.vy,a?2.2:3),this.grounded=!1,this.speed=Math.max(4.2,this.speed*(a?.58:.76)),this.hitStop=a?.075:.045,this.audio.sfx("smash",{combo:this.smashCombo,mass:a?1:0}),this.ui.flash("smash"),this.ui.setSmash(this.smashes,this.smashCombo),this.ui.updateCoins(this.state.coins,{pop:!0}),this.smashCombo>=3&&this.ui.toast(`DEMOLITION x${this.smashCombo}`,"gold",1200),Rn(a?55:28,this.state.settings.haptics),!0}tryAutoJump(){if(!this.state.settings.autoJump||!this.track||!this.grounded||this.falling||this.speed<3)return!1;let t=Mt(this.speed*.05,.35,.9),e=this.track.gaps.find(r=>r.start>this.dist&&r.start-this.dist<=t);if(!e)return!1;let i=Math.max(this.speed,au),s=(e.end-e.start+1.25)*su/(2*i);return this.jump(Mt(s,ru,15.5))}jump(t=ru){return this.mode!=="playing"||!this.track||this.finished||this.falling||!this.grounded?!1:(this.grounded=!1,this.vy=t,this.speed=Math.max(this.speed,au),this.yOff=Math.max(this.yOff,rn+.02),this.audio.sfx("bounce"),this.fx.boost(this.ballPos),Rn(10,this.state.settings.haptics),!0)}startFall(){this.falling||this.finished||(this.falling=!0,this.falls+=1,this.respawnTimer=1.32,this.grounded=!1,this.vy=Math.min(this.vy,-2.4),this.speed=Math.max(1.5,this.speed*.42),this.latVel*=.7,this.sessionCombo=0,this.ui.setCombo(0),this.audio.sfx("fall"),this.audio.stopRoll(),this.ui.flash("fall"),this.fx.fall(this.ballPos),this.shake=.45,Rn([40,60,40],this.state.settings.haptics))}respawn(){this.falling=!1,this.grounded=!0,this.vy=0,this.yOff=rn,this.lat=0,this.latVel=0,this.dist=Mt(this.respawnDist+.8,4,this.track.finishDist-2),this.prevDist=this.dist,this.speed=this.state.settings.autoMove?8.4:0,this.invuln=1.25,this.boostTimer=0,this.steer=0,this.updateBallPos(),this.fx.respawn(this.ballPos),this.audio.sfx("respawn"),this.ui.toast("Back to checkpoint","green",1300),this.snapCamera()}updateBallPos(){this.track&&(this.frame=this.track.frameAt(this.dist),this.ballPos.copy(this.frame.p).addScaledVector(this.frame.n,this.lat),this.ballPos.y+=this.yOff)}updateBallVisual(t){if(!this.track)return;if(this.updateBallPos(),this.ball.visible=!0,this.ball.position.copy(this.ballPos),!this.falling&&this.mode==="playing"&&this.speed>9.5&&(this.trailTimer-=t,this.trailTimer<=0&&(this.trailTimer=this.boostTimer>0?.024:.042,this.fx.trail(this.ballPos,this.trailColor,this.frame.t,this.boostTimer>0))),this.falling){let a=t*Mt(4+Math.abs(this.vy)*.55,4,14);this.ball.rotateOnWorldAxis(this.frame.t,a),this.ball.rotateOnWorldAxis(this.frame.n,a*.45)}else{let a=this.speed*t,o=this.latVel*t;a&&this.ball.rotateOnWorldAxis(this.frame.n,a/rn),o&&this.ball.rotateOnWorldAxis(this.frame.t,-o/rn)}this.blob.visible=!0,this.blob.position.copy(this.frame.p).addScaledVector(this.frame.n,this.lat);let e=this.track.rampHeightAt(this.dist);this.blob.position.y+=.03+e;let i=Math.max(0,this.yOff-rn-e),s=1+i*.22;this.blob.scale.setScalar(s),this.blob.material.opacity=Mt(.55-i*.1,.12,.55);let r=new Yt().makeBasis(this.frame.n,new M(0,1,0),this.frame.t);this.blob.quaternion.setFromRotationMatrix(r)}updateCamera(t){if(!this.track)return;if(this.shake=on(this.shake,0,5,t),this.mode==="complete"||this.mode==="final"){let c=this.finishCenter,h=this.finishDir,u=new M(-h.z,0,h.x),d=c.clone().addScaledVector(h,-5.2).addScaledVector(u,Math.sin(.4+this.completeTime*.35)*1.6).addScaledVector(new M(0,1,0),3.6+Math.sin(this.completeTime*.8)*.2);this.camPosSmooth.lerp(d,1-Math.exp(-2.2*t)),this.camLookSmooth.lerp(c.clone().add(new M(0,1.15,0)),1-Math.exp(-3.2*t)),this.camera.position.copy(this.camPosSmooth),this.shake>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake),this.camera.lookAt(this.camLookSmooth);return}let e=this.frame||this.track.frameAt(this.dist),i=e.p,s=this.lat>0?-1:1,r=this.falling?i.clone().addScaledVector(e.t,-5.2).addScaledVector(new M(0,1,0),5.1).addScaledVector(e.n,this.lat*.1+s*7.2):this.ballPos.clone().addScaledVector(e.t,-(5.8+this.speed*.05)).addScaledVector(new M(0,1,0),2.7).addScaledVector(e.n,this.lat*.14),a=this.falling?this.ballPos.clone().addScaledVector(e.t,.8).addScaledVector(new M(0,1,0),.6):this.ballPos.clone().addScaledVector(e.t,3+this.speed*.14).addScaledVector(new M(0,1,0),.45);this.camPosSmooth.lerp(r,1-Math.exp(-(this.falling?3.2:4.4)*t)),this.camLookSmooth.lerp(a,1-Math.exp(-(this.falling?4.2:6)*t)),this.camera.position.copy(this.camPosSmooth),this.shake>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake),this.camera.lookAt(this.camLookSmooth);let o=this.baseFov+(this.boostTimer>0?6:0)+(this.falling?8:0)+Mt(this.speed-10,0,10)*.25,l=on(this.camera.fov,o,3,t);Math.abs(l-this.camera.fov)>.01&&(this.camera.fov=l,this.camera.updateProjectionMatrix())}snapCamera(){if(!this.track)return;let t=this.frame||this.track.frameAt(this.dist);this.camPosSmooth.copy(this.ballPos).addScaledVector(t.t,-7.2).addScaledVector(new M(0,1,0),3.3),this.camLookSmooth.copy(this.ballPos).addScaledVector(t.t,4).addScaledVector(new M(0,1,0),.55),this.camera.position.copy(this.camPosSmooth),this.camera.lookAt(this.camLookSmooth)}updateSun(){this.track&&(this.lights.sun.position.set(this.ballPos.x+13,this.ballPos.y+21,this.ballPos.z+9),this.lights.sun.target.position.copy(this.ballPos),this.lights.sun.target.updateMatrixWorld())}updateHudProgress(){if(!this.track||this.mode==="menu")return;let t=Mt(this.dist/this.track.finishDist,0,1);this.ui.updateProgress(t)}updateComplete(t){this.completeTime+=t,this.completeTime<1.05&&(this.dist+=this.speed*t*(1-this.completeTime/1.05),this.speed=on(this.speed,0,2.6,t),this.updateBallPos()),!this.completeShown&&this.completeTime>=1.15&&(this.completeShown=!0,this.ui.showComplete(this.completeResult))}finishLevel(){if(this.finished||!this.track)return;this.finished=!0,this.mode="complete",this.completeTime=0,this.completeShown=!1,this.ui.setPauseAvailable(!1),this.ui.hideHint(),this.ui.setCombo(0);let t=this.track.def,e=this.track.coinTotal>0?this.collected/this.track.coinTotal:1,i=1+(e>=.7?1:0)+(this.falls===0?1:0),s=String(t.number),r=this.state.levels[s]||{stars:0,best:0},a=r.best>0?Math.min(r.best,this.levelTime):this.levelTime;this.state.levels[s]={stars:Math.max(r.stars||0,i),best:a},this.currentIndex<Xe-1?this.state.currentLevel=Math.min(Xe-1,Math.max(this.state.currentLevel,this.currentIndex+1)):this.state.currentLevel=Xe-1,this.finishCenter.copy(this.ballPos),this.finishDir.copy(this.frame?this.frame.t:new M(0,0,1)),this.finishDir.y=0,this.finishDir.lengthSq()<1e-4&&this.finishDir.set(0,0,1),this.finishDir.normalize(),this.completeResult={number:t.number,name:t.name,stars:i,collected:this.collected,time:this.levelTime,falls:this.falls,smashes:this.smashes,coinGoal:e>=.7,noFalls:this.falls===0,isFinale:this.currentIndex===Xe-1,hasNext:this.currentIndex<Xe-1},this.saveNow();let o=this.totalStars();o>0&&Ye.sendScore(o),this.audio.sfx("win"),this.audio.setIntensity(.85),this.audio.stopRoll(),this.ui.updateCoins(this.state.coins),this.fx.finish(this.finishCenter.clone().add(new M(0,1.2,0))),this.shake=.25,this.camPosSmooth.copy(this.camera.position),this.camLookSmooth.copy(this.finishCenter)}getDebug(){return{mode:this.mode,level:this.track?this.track.def.number:null,levelIndex:this.currentIndex,dist:this.dist,length:this.track?this.track.length:0,finishDist:this.track?this.track.finishDist:0,lat:this.lat,speed:this.speed,yOff:this.yOff,vy:this.vy,grounded:this.grounded,falling:this.falling,stars:this.totalStars(),coins:this.state.coins,collected:this.collected,coinTotal:this.track?this.track.coinTotal:0,falls:this.falls,rescues:this.rescues,smashes:this.smashes,smashTotal:this.state.smashTotal,smashCombo:this.smashCombo,debris:this.debris?this.debris.chunks.length:0,destroyed:this.track?this.track.obstacles.filter(t=>t.destroyed).length:0,obstacles:this.track?this.track.obstacles.length:0,checkpoints:this.track?this.track.checkpointDists.length:0,gaps:this.track?this.track.gaps.length:0,mode2:this.mode}}totalStars(){return Qe.reduce((t,e)=>{var i;return t+(((i=this.state.levels[e.number])==null?void 0:i.stars)||0)},0)}continueIndex(){var i,s,r;let t=Xe-1;for(let a=0;a<Xe;a++)if(!((((i=this.state.levels[Qe[a].number])==null?void 0:i.stars)||0)>0)){t=a;break}let e=Mt(this.state.currentLevel|0,0,Xe-1);return e>t&&!((((s=this.state.levels[Qe[e].number])==null?void 0:s.stars)||0)>0)&&(t=e),((r=this.state.levels[Qe[t].number])==null?void 0:r.stars)>0&&(t=Xe-1),t}isLevelUnlocked(t){var e;return t<=0?!0:(((e=this.state.levels[Qe[t-1].number])==null?void 0:e.stars)||0)>0}sendScoreIfNeeded(){let t=this.totalStars();t>0&&Ye.sendScore(t)}resize(){if(!this.ok)return;let t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),i=Math.min(window.devicePixelRatio||1,(vs(),2));this.renderer.setPixelRatio(i),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.baseFov=t/e<.85?70:t/e>2.2?56:62,this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix(),this.showcase&&this.showcase.resize(t,e)}onPlay(){this.startLevel(this.continueIndex())}startLevel(t){var a;if(!this.ok)return;let e=Mt(t|0,0,Xe-1);this.audio.unlock(),this.audio.setYouTubeAudio(Ye.getAudioEnabled()),this.audio.resume(),this.ui.hideModals(),this.ui.hideHint(),this.sheet=null,this.settingsOpen=!1,this.currentIndex=e,this.state.currentLevel=e;let i=Qe[e];this.disposeTrack();let s=Ss(e);bs(this.renderer,this.scene,s),Ts(this.lights,s),this.track=Xh(i,s),this.track.number=i.number,this.scene.add(this.track.group),this.decor=tu(this.track,s),this.scene.add(this.decor);let r=Qs(this.state.ball);this.trailColor=r.trail||16777215,this.ballSkinId!==r.id&&(this.ball.material.dispose(),this.ball.material=Oi(r),this.ballSkinId=r.id),this.ball.visible=!0,this.ball.rotation.set(0,0,0),this.blob.visible=!0,this.dist=4,this.prevDist=this.dist,this.lat=0,this.latVel=0,this.speed=this.state.settings.autoMove?8.4:0,this.yOff=rn,this.vy=0,this.grounded=!0,this.falling=!1,this.finished=!1,this.levelTime=0,this.falls=0,this.rescues=0,this.rescueCooldown=0,this.collected=0,this.smashes=0,this.smashCombo=0,this.lastSmashAt=-10,this.hitStop=0,this.trailTimer=0,this.debris.clear(),this.sessionCombo=0,this.lastCoinAt=-10,this.checkpointDist=4,this.respawnDist=4,this.invuln=.9,this.boostTimer=0,this.boostZoneCooldown=0,this.completeTime=0,this.completeShown=!1,this.accumulator=0,this.shake=0,this.visualTime=0,this.updateBallPos(),this.snapCamera(),(a=this.decor)!=null&&a.userData.update&&this.decor.userData.update(0,0),this.ui.showArena(s,i,e),this.ui.showGame(),this.ui.setLevel(i.number,i.name),this.ui.updateCoins(this.state.coins),this.ui.updateProgress(0),this.ui.setCombo(0),this.ui.hideSmash(),this.ui.setThemeAccent(s),this.ui.updateSpeed(0,!1,!1),this.ui.setPauseAvailable(!0),this.audio.setIntensity(.45),this.mode="playing",this.state.tutorialSeen?i.number<=2&&this.ui.showHint():(this.ui.showHint(),this.state.tutorialSeen=!0),this.ui.toast(this.autoAssistNotice(),"green",3400),this.saveSoon(),this.sendScoreIfNeeded()}disposeTrack(){this.debris.clear(),this.track&&(Ms(this.track.group),this.track=null),this.decor&&(Ms(this.decor),this.decor=null),this.ball.visible=!1,this.blob.visible=!1}enterMenu(){this.mode="menu",this.sheet=null,this.finished=!1,this.ui.setPauseAvailable(!1),this.ui.hideGameHud(),this.ui.hideModals(),this.disposeTrack(),this.audio.resume(),this.audio.setIntensity(.32),this.audio.stopRoll(),this.setMenuTheme(),this.ui.showMenu(),this.ui.refreshMenu()}setMenuTheme(){if(!this.showcase)return;let t=Ss(this.continueIndex());this.showcase.theme.id!==t.id&&this.showcase.setTheme(t,this.renderer),this.showcase.setSkin(Qs(this.state.ball)),this.ui.setThemeAccent(t)}quitToMenu(){this.enterMenu(),this.saveSoon()}openLevels(){this.mode==="playing"||this.mode==="paused"||(this.ui.hideModals(),this.ui.hideGameHud(),this.enterMenu(),this.mode="menu",this.sheet="levels",this.ui.showLevels())}openShop(){this.mode==="playing"||this.mode==="paused"||(this.ui.hideModals(),this.ui.hideGameHud(),this.enterMenu(),this.mode="menu",this.sheet="shop",this.ui.renderShop(),this.ui.showShop())}openLevelsFromResults(){this.ui.hideModals(),this.enterMenu(),this.sheet="levels",this.ui.showLevels(),this.saveSoon()}closeSheet(){this.sheet=null,this.mode="menu",this.setMenuTheme(),this.ui.showMenu(),this.ui.refreshMenu(),this.saveSoon()}pauseGame(){this.mode==="playing"&&(this.mode="paused",this.holding=!1,this.pointer.active=!1,this.pointerSteer=0,this.steer=0,this.audio.suspend(),this.audio.stopRoll(),this.ui.showPause(),this.ui.setPauseAvailable(!1),this.saveNow())}resumeGame(){this.mode==="paused"&&(this.ui.hidePause(),this.mode="playing",this.audio.resume(),this.audio.setIntensity(.45),this.last=performance.now(),this.accumulator=0)}restartLevel(){this.ui.hideModals(),this.audio.resume(),this.startLevel(this.currentIndex)}nextLevel(){if(this.ui.hideComplete(),this.currentIndex>=Xe-1){this.openFinal();return}this.startLevel(this.currentIndex+1)}openFinal(){this.ui.hideComplete(),this.mode="final",this.completeTime=Math.max(this.completeTime,1.2),this.ui.showFinal({stars:this.totalStars(),coins:this.state.coins,orbs:this.state.skins.length,smashes:this.state.smashTotal}),this.audio.setIntensity(.7),this.saveNow(),this.fx.finish(this.ballPos.clone().add(new M(0,1.6,0)))}openSettings(t){this.audio.unlock(),this.settingsFrom=t,this.settingsOpen=!0,this.ui.showSettings()}closeSettings(){this.settingsOpen=!1,this.ui.hideSettings(),this.mode==="paused"&&this.ui.showPause(),this.saveSoon()}autoAssistNotice(){let t=this.state.settings.autoMove,e=this.state.settings.autoJump;return t&&e?"Auto roll & auto jump ON \xB7 Change in Settings":t?"Auto roll ON \xB7 Auto jump OFF \xB7 Change in Settings":e?"Auto jump ON \xB7 Auto roll OFF \xB7 Change in Settings":"Auto assist OFF \xB7 Change in Settings"}onSettingsInput(t){typeof t.music=="number"&&(this.state.settings.music=Mt(t.music,0,1),this.audio.setMusicVolume(this.state.settings.music)),typeof t.sfx=="number"&&(this.state.settings.sfx=Mt(t.sfx,0,1),this.audio.setSfxVolume(this.state.settings.sfx)),typeof t.haptics=="boolean"&&(this.state.settings.haptics=t.haptics,t.haptics&&Rn(14,!0)),typeof t.autoMove=="boolean"&&(this.state.settings.autoMove=t.autoMove,t.autoMove&&this.mode==="playing"&&this.speed<.5&&(this.speed=8.4)),typeof t.autoJump=="boolean"&&(this.state.settings.autoJump=t.autoJump),this.saveSoon()}handleEscape(){if(this.settingsOpen){this.closeSettings();return}if(this.mode==="paused"){this.resumeGame();return}if(this.sheet){this.closeSheet();return}this.mode==="playing"&&this.pauseGame()}handleSkinClick(t){let e=Cn.find(s=>s.id===t);if(!e)return;if(this.state.skins.includes(t)){this.state.ball!==t&&(this.state.ball=t,this.audio.sfx("buy"),this.ui.toast(`${e.name} equipped!`,"gold",1600),this.showcase&&this.showcase.setSkin(e),this.saveNow(),this.ui.renderShop());return}this.state.coins>=e.price?(this.state.coins-=e.price,this.state.skins.push(t),this.state.ball=t,this.audio.sfx("buy"),this.showcase&&this.showcase.setSkin(e),this.ui.updateCoins(this.state.coins,{pop:!0}),this.ui.toast(`${e.name} unlocked and equipped!`,"gold",2200),this.ui.renderShop(),this.saveNow()):(this.audio.sfx("deny"),this.ui.toast(`Need ${_s(e.price-this.state.coins)} more coins`,"pink",1800),Rn(30,this.state.settings.haptics))}deny(){this.audio.sfx("deny"),this.ui.toast("Finish the previous track to unlock this one","pink",1900),Rn(25,this.state.settings.haptics)}onHostPause(){this.hostPaused=!0,this.stopLoop(),this.audio.suspend(),this.mode==="playing"&&this.pauseGame()}onHostResume(){this.hostPaused=!1,this.mode!=="paused"&&this.audio.resume(),this.last=performance.now(),this.startLoop()}saveSoon(){clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.saveNow(),Fy)}saveNow(){clearTimeout(this.saveTimer);try{Ye.save(JSON.stringify(this.state))}catch(t){Ye.logError(t)}}};async function Hy(){let n=new Ta;window.__ORB=window.__ORB||{},window.__ORB.game=n;try{await n.init()}catch(t){Ye.logError(t);let e=document.getElementById("splashStatus");e&&(e.textContent="Something went wrong. Please reload the game.")}}Hy();})();
