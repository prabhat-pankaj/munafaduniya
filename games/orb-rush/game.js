(()=>{var uh=0,Xo=1,dh=2;var Mc=1,So=2,Tn=3,Xn=0,Ge=1,Ae=2;var Vn=0,Cn=1,We=2,qo=3,Yo=4,fh=5,ci=100,ph=101,mh=102,Zo=103,$o=104,gh=200,_h=201,xh=202,yh=203,Da=204,Ua=205,vh=206,Mh=207,Sh=208,bh=209,Eh=210,wh=211,Th=212,Ah=213,Rh=214,Ch=0,Ph=1,Lh=2,or=3,Ih=4,Dh=5,Uh=6,Nh=7,Sc=0,Fh=1,Oh=2,Gn=0,Bh=1,kh=2,Hh=3,vi=4,zh=5,Vh=6;var bc=300,qi=301,Yi=302,pi=303,Na=304,Br=306,Zi=1e3,un=1001,Fa=1002,Be=1003,Jo=1004;var Kr=1005;var en=1006,Gh=1007;var xs=1008;var Wn=1009,Wh=1010,Xh=1011,bo=1012,Ec=1013,Hn=1014,zn=1015,ys=1016,wc=1017,Tc=1018,ui=1020,qh=1021,dn=1023,Yh=1024,Zh=1025,di=1026,$i=1027,$h=1028,Ac=1029,Jh=1030,Rc=1031,Cc=1033,Qr=33776,jr=33777,ta=33778,ea=33779,Ko=35840,Qo=35841,jo=35842,tl=35843,Pc=36196,el=37492,nl=37496,il=37808,sl=37809,rl=37810,al=37811,ol=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,na=36492,_l=36494,xl=36495,Kh=36283,yl=36284,vl=36285,Ml=36286;var lr=2300,cr=2301,ia=2302,Sl=2400,bl=2401,El=2402;var Lc=3e3,fi=3001,Qh=3200,jh=3201,Ic=0,tu=1,nn="",oe="srgb",Pn="srgb-linear",Eo="display-p3",kr="display-p3-linear",hr="linear",ie="srgb",ur="rec709",dr="p3";var Ei=7680;var wl=519,eu=512,nu=513,iu=514,Dc=515,su=516,ru=517,au=518,ou=519,Tl=35044,Uc=35048;var Al="300 es",Oa=1035,Rn=2e3,fr=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sa=Math.PI/180,Ba=180/Math.PI;function Ts(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function ra(i,t,e){return(1-e)*i+e*t}function Rl(i){return(i&i-1)===0&&i!==0}function ka(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function as(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],d=s[6],y=s[1],x=s[4],E=s[7],P=s[2],S=s[5],C=s[8];return r[0]=a*_+o*y+l*P,r[3]=a*p+o*x+l*S,r[6]=a*d+o*E+l*C,r[1]=c*_+h*y+u*P,r[4]=c*p+h*x+u*S,r[7]=c*d+h*E+u*C,r[2]=f*_+m*y+g*P,r[5]=f*p+m*x+g*S,r[8]=f*d+m*E+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=e*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},aa=new qt;function Nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cu(){let i=pr("canvas");return i.style.display="block",i}var Cl={};function ps(i){i in Cl||(Cl[i]=!0,console.warn(i))}var Pl=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[Pn]:{transfer:hr,primaries:ur,toReference:i=>i,fromReference:i=>i},[oe]:{transfer:ie,primaries:ur,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[kr]:{transfer:hr,primaries:dr,toReference:i=>i.applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Pl)},[Eo]:{transfer:ie,primaries:dr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Pl).convertLinearToSRGB()}},hu=new Set([Pn,kr]),te={enabled:!0,_workingColorSpace:Pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!hu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Us[t].toReference,s=Us[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Us[i].primaries},getTransfer:function(i){return i===nn?hr:Us[i].transfer}};function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,mr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=pr("canvas")),wi.width=t.width,wi.height=t.height;let n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uu=0,gr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Ts(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(la(s[a].image)):r.push(la(s[a]))}else r=la(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function la(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?mr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var du=0,sn=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=un,s=un,r=en,a=xs,o=dn,l=Wn,c=i.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Ts(),this.name="",this.source=new gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===fi?oe:nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===oe?fi:Lc}set encoding(t){ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===fi?oe:nn}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=bc;sn.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,E=(m+1)/2,P=(d+1)/2,S=(h+f)/4,C=(u+_)/4,F=(g+p)/4;return x>E&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=C/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=S/s,r=F/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=F/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ha=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fi?oe:nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new gr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_r=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var za=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-o,d=l*f+c*m+h*g+u*_,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let P=Math.sqrt(x),S=Math.atan2(P,d*y);p=Math.sin(p*S)/P,o=Math.sin(o*S)/P}let E=o*y;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,u=u*p+_*E,p===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-o*m,t[e+2]=c*g+h*m+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ca=new A,Il=new ke,In=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Fs.subVectors(this.max,os),Ti.subVectors(t.a,os),Ai.subVectors(t.b,os),Ri.subVectors(t.c,os),Nn.subVectors(Ai,Ti),Fn.subVectors(Ri,Ai),si.subVectors(Ti,Ri);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-si.z,si.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,si.z,0,-si.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-si.y,si.x,0];return!ha(e,Ti,Ai,Ri,Fs)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,Ti,Ai,Ri,Fs))?!1:(Os.crossVectors(Nn,Fn),e=[Os.x,Os.y,Os.z],ha(e,Ti,Ai,Ri,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mn=[new A,new A,new A,new A,new A,new A,new A,new A],ln=new A,Ns=new In,Ti=new A,Ai=new A,Ri=new A,Nn=new A,Fn=new A,si=new A,os=new A,Fs=new A,Os=new A,ri=new A;function ha(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);let o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var fu=new In,ls=new A,ua=new A,Yn=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);let e=ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(ua)),this.expandByPoint(ls.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new A,da=new A,Bs=new A,On=new A,fa=new A,ks=new A,pa=new A,xr=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){da.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),On.copy(this.origin).sub(da);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Bs),o=On.dot(this.direction),l=-On.dot(Bs),c=On.lengthSq(),h=Math.abs(1-a*a),u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(da).addScaledVector(Bs,f),m}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){fa.subVectors(e,t),ks.subVectors(n,t),pa.crossVectors(fa,ks);let a=this.direction.dot(pa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,t);let l=o*this.direction.dot(ks.crossVectors(On,ks));if(l<0)return null;let c=o*this.direction.dot(fa.cross(On));if(c<0||l+c>a)return null;let h=-o*On.dot(pa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,m,g,_,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,m,g,_,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pu,t,mu)}lookAt(t,e,n){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Bn.crossVectors(n,Ze),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Bn.crossVectors(n,Ze)),Bn.normalize(),Hs.crossVectors(Ze,Bn),s[0]=Bn.x,s[4]=Hs.x,s[8]=Ze.x,s[1]=Bn.y,s[5]=Hs.y,s[9]=Ze.y,s[2]=Bn.z,s[6]=Hs.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],y=n[3],x=n[7],E=n[11],P=n[15],S=s[0],C=s[4],F=s[8],v=s[12],w=s[1],D=s[5],X=s[9],nt=s[13],L=s[2],N=s[6],q=s[10],Q=s[14],$=s[3],z=s[7],K=s[11],Z=s[15];return r[0]=a*S+o*w+l*L+c*$,r[4]=a*C+o*D+l*N+c*z,r[8]=a*F+o*X+l*q+c*K,r[12]=a*v+o*nt+l*Q+c*Z,r[1]=h*S+u*w+f*L+m*$,r[5]=h*C+u*D+f*N+m*z,r[9]=h*F+u*X+f*q+m*K,r[13]=h*v+u*nt+f*Q+m*Z,r[2]=g*S+_*w+p*L+d*$,r[6]=g*C+_*D+p*N+d*z,r[10]=g*F+_*X+p*q+d*K,r[14]=g*v+_*nt+p*Q+d*Z,r[3]=y*S+x*w+E*L+P*$,r[7]=y*C+x*D+E*N+P*z,r[11]=y*F+x*X+E*q+P*K,r[15]=y*v+x*nt+E*Q+P*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*m-n*l*m)+_*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],y=u*p*c-_*f*c+_*l*m-o*p*m-u*l*d+o*f*d,x=g*f*c-h*p*c-g*l*m+a*p*m+h*l*d-a*f*d,E=h*_*c-g*u*c+g*o*m-a*_*m-h*o*d+a*u*d,P=g*u*l-h*_*l-g*o*f+a*_*f+h*o*p-a*u*p,S=e*y+n*x+s*E+r*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/S;return t[0]=y*C,t[1]=(_*f*r-u*p*r-_*s*m+n*p*m+u*s*d-n*f*d)*C,t[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*d+n*l*d)*C,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*m-n*l*m)*C,t[4]=x*C,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*d+e*f*d)*C,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*d-e*l*d)*C,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*C,t[8]=E*C,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*d-e*u*d)*C,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*d+e*o*d)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*C,t[12]=P*C,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*p+e*u*p)*C,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*p-e*o*p)*C,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,g=r*u,_=a*h,p=a*u,d=o*u,y=l*c,x=l*h,E=l*u,P=n.x,S=n.y,C=n.z;return s[0]=(1-(_+d))*P,s[1]=(m+E)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(m-E)*S,s[5]=(1-(f+d))*S,s[6]=(p+y)*S,s[7]=0,s[8]=(g+x)*C,s[9]=(p-y)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ci.set(s[0],s[1],s[2]).length(),a=Ci.set(s[4],s[5],s[6]).length(),o=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);let c=1/r,h=1/a,u=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Rn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,g;if(o===Rn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===fr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,m=(n+s)*h,g,_;if(o===Rn)g=(a+r)*u,_=-2*u;else if(o===fr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ci=new A,cn=new Yt,pu=new A(0,0,0),mu=new A(1,1,1),Bn=new A,Hs=new A,Ze=new A,Dl=new Yt,Ul=new ke,mi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gu=0,Nl=new A,Pi=new ke,bn=new Yt,zs=new A,cs=new A,_u=new A,xu=new ke,Fl=new A(1,0,0),Ol=new A(0,1,0),Bl=new A(0,0,1),yu={type:"added"},vu={type:"removed"},Re=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new mi,n=new ke,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new qt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(cs,zs,this.up):bn.lookAt(zs,cs,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(bn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(yu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vu)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,_u),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new A(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new A,En=new A,ma=new A,wn=new A,Li=new A,Ii=new A,kl=new A,ga=new A,_a=new A,xa=new A,Vs=!1,zi=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),En.subVectors(n,e),ma.subVectors(t,e);let a=hn.dot(hn),o=hn.dot(En),l=hn.dot(ma),c=En.dot(En),h=En.dot(ma),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,n,s,r,a,o,l){return Vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vs=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),En.subVectors(t,e),hn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),hn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vs=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Li.subVectors(s,n),Ii.subVectors(r,n),ga.subVectors(t,n);let l=Li.dot(ga),c=Ii.dot(ga);if(l<=0&&c<=0)return e.copy(n);_a.subVectors(t,s);let h=Li.dot(_a),u=Ii.dot(_a);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Li,a);xa.subVectors(t,r);let m=Li.dot(xa),g=Ii.dot(xa);if(g>=0&&m<=g)return e.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ii,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return kl.subVectors(r,s),o=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(kl,o);let d=1/(p+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Li,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=lu(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ya(a,r,t+1/3),this.g=ya(a,r,t),this.b=ya(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){let n=Fc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return te.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Pe(Ne.r*255,0,255))*65536+Math.round(Pe(Ne.g*255,0,255))*256+Math.round(Pe(Ne.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=oe){te.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(Gs);let n=ra(kn.h,Gs.h,e),s=ra(kn.s,Gs.s,e),r=ra(kn.l,Gs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Pt;Pt.NAMES=Fc;var Mu=0,Zn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Cn,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ua,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cn&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Me=class extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new A,Ws=new xt,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=as(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=as(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=as(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=as(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=as(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tl&&(t.usage=this.usage),t}};var vr=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Mr=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Su=0,tn=new Yt,va=new Re,Di=new A,$e=new In,hs=new In,Te=new A,se=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nc(t)?Mr:vr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $t(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors($e.min,hs.min),$e.expandByPoint(Te),Te.addVectors($e.max,hs.max),$e.expandByPoint(Te)):($e.expandByPoint(hs.min),$e.expandByPoint(hs.max))}$e.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(t,c),Te.add(Di)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new A,h[w]=new A;let u=new A,f=new A,m=new A,g=new xt,_=new xt,p=new xt,d=new A,y=new A;function x(w,D,X){u.fromArray(s,w*3),f.fromArray(s,D*3),m.fromArray(s,X*3),g.fromArray(a,w*2),_.fromArray(a,D*2),p.fromArray(a,X*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);let nt=1/(_.x*p.y-p.x*_.y);isFinite(nt)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(nt),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(nt),c[w].add(d),c[D].add(d),c[X].add(d),h[w].add(y),h[D].add(y),h[X].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,D=E.length;w<D;++w){let X=E[w],nt=X.start,L=X.count;for(let N=nt,q=nt+L;N<q;N+=3)x(n[N+0],n[N+1],n[N+2])}let P=new A,S=new A,C=new A,F=new A;function v(w){C.fromArray(r,w*3),F.copy(C);let D=c[w];P.copy(D),P.sub(C.multiplyScalar(C.dot(D))).normalize(),S.crossVectors(F,D);let nt=S.dot(h[w])<0?-1:1;l[w*4]=P.x,l[w*4+1]=P.y,l[w*4+2]=P.z,l[w*4+3]=nt}for(let w=0,D=E.length;w<D;++w){let X=E[w],nt=X.start,L=X.count;for(let N=nt,q=nt+L;N<q;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hl=new Yt,ai=new xr,Xs=new Yn,zl=new A,Ui=new A,Ni=new A,Fi=new A,Ma=new A,qs=new A,Ys=new xt,Zs=new xt,$s=new xt,Vl=new A,Gl=new A,Wl=new A,Js=new A,Ks=new A,_t=class extends Re{constructor(t=new se,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ma.fromBufferAttribute(u,t),a?qs.addScaledVector(Ma,h):qs.addScaledVector(Ma.sub(e),h))}e.add(qs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(Xs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Xs,zl)===null||ai.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=a[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,P=x;E<P;E+=3){let S=o.getX(E),C=o.getX(E+1),F=o.getX(E+2);s=Qs(this,d,t,n,c,h,u,S,C,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let y=o.getX(p),x=o.getX(p+1),E=o.getX(p+2);s=Qs(this,a,t,n,c,h,u,y,x,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=a[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,P=x;E<P;E+=3){let S=E,C=E+1,F=E+2;s=Qs(this,d,t,n,c,h,u,S,C,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let y=p,x=p+1,E=p+2;s=Qs(this,a,t,n,c,h,u,y,x,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function bu(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:i}}function Qs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ui),i.getVertexPosition(l,Ni),i.getVertexPosition(c,Fi);let h=bu(i,t,e,n,Ui,Ni,Fi,Js);if(h){s&&(Ys.fromBufferAttribute(s,o),Zs.fromBufferAttribute(s,l),$s.fromBufferAttribute(s,c),h.uv=zi.getInterpolation(Js,Ui,Ni,Fi,Ys,Zs,$s,new xt)),r&&(Ys.fromBufferAttribute(r,o),Zs.fromBufferAttribute(r,l),$s.fromBufferAttribute(r,c),h.uv1=zi.getInterpolation(Js,Ui,Ni,Fi,Ys,Zs,$s,new xt),h.uv2=h.uv1),a&&(Vl.fromBufferAttribute(a,o),Gl.fromBufferAttribute(a,l),Wl.fromBufferAttribute(a,c),h.normal=zi.getInterpolation(Js,Ui,Ni,Fi,Vl,Gl,Wl,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new A,materialIndex:0};zi.getNormal(Ui,Ni,Fi,u.normal),h.face=u}return h}var ve=class i extends se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(_,p,d,y,x,E,P,S,C,F,v){let w=E/C,D=P/F,X=E/2,nt=P/2,L=S/2,N=C+1,q=F+1,Q=0,$=0,z=new A;for(let K=0;K<q;K++){let Z=K*D-nt;for(let ct=0;ct<N;ct++){let k=ct*w-X;z[_]=k*y,z[p]=Z*x,z[d]=L,c.push(z.x,z.y,z.z),z[_]=0,z[p]=0,z[d]=S>0?1:-1,h.push(z.x,z.y,z.z),u.push(ct/C),u.push(1-K/F),Q+=1}}for(let K=0;K<F;K++)for(let Z=0;Z<C;Z++){let ct=f+Z+N*K,k=f+Z+N*(K+1),tt=f+(Z+1)+N*(K+1),ut=f+(Z+1)+N*K;l.push(ct,k,ut),l.push(k,tt,ut),$+=6}o.addGroup(m,$,v),m+=$,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){let t={};for(let e=0;e<i.length;e++){let n=Ji(i[e]);for(let s in n)t[s]=n[s]}return t}function Eu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){return i.getRenderTarget()===null?i.outputColorSpace:te.workingColorSpace}var wu={clone:Ji,merge:Oe},Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=Au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Eu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Sr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ye=class extends Sr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Oi=-90,Bi=1,Va=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ye(Oi,Bi,t,e);s.layers=this.layers,this.add(s);let r=new ye(Oi,Bi,t,e);r.layers=this.layers,this.add(r);let a=new ye(Oi,Bi,t,e);a.layers=this.layers,this.add(a);let o=new ye(Oi,Bi,t,e);o.layers=this.layers,this.add(o);let l=new ye(Oi,Bi,t,e);l.layers=this.layers,this.add(l);let c=new ye(Oi,Bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},br=class extends sn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ga=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===fi?oe:nn),this.texture=new br(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ve(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Vn});r.uniforms.tEquirect.value=e;let a=new _t(s,r),o=e.minFilter;return e.minFilter===xs&&(e.minFilter=en),new Va(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Sa=new A,Ru=new A,Cu=new qt,An=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Sa.subVectors(n,e).cross(Ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cu.getNormalMatrix(t),s=this.coplanarPoint(Sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},oi=new Yn,js=new A,vs=class{constructor(t=new An,e=new An,n=new An,s=new An,r=new An,a=new An){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],y=s[13],x=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,p-m,E-d).normalize(),n[1].setComponents(l+r,f+c,p+m,E+d).normalize(),n[2].setComponents(l+a,f+h,p+g,E+y).normalize(),n[3].setComponents(l-a,f-h,p-g,E-y).normalize(),n[4].setComponents(l-o,f-u,p-_,E-x).normalize(),e===Rn)n[5].setComponents(l+o,f+u,p+_,E+x).normalize();else if(e===fr)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(js.x=s.normal.x>0?t.max.x:t.min.x,js.y=s.normal.y>0?t.max.y:t.min.y,js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pu(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let d=g[_];e?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Je=class i extends se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){let y=d*f-a;for(let x=0;x<c;x++){let E=x*u-r;g.push(E,-y,0),_.push(0,0,1),p.push(x/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){let x=y+c*d,E=y+c*(d+1),P=y+1+c*(d+1),S=y+1+c*d;m.push(x,E,S),m.push(E,P,S)}this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
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
#endif`,Du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ou=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
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
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,td=`#define PI 3.141592653589793
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
} // validated`,ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nd=`vec3 transformedNormal = objectNormal;
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
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`
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
}`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bd=`uniform bool receiveShadow;
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
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
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
#endif`,Pd=`struct PhysicalMaterial {
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
}`,Ld=`
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zd=`#if defined( USE_POINTS_UV )
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
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xd=`#ifdef USE_MORPHNORMALS
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
#endif`,qd=`#ifdef USE_MORPHTARGETS
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
#endif`,Yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gf=`float getShadowMask() {
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
}`,_f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,Mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wf=`#ifdef USE_TRANSMISSION
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
#endif`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,kf=`#define DISTANCE
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
}`,Hf=`#define DISTANCE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`uniform float scale;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#define LAMBERT
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
}`,Zf=`#define LAMBERT
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
}`,$f=`#define MATCAP
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
}`,Jf=`#define MATCAP
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
}`,Kf=`#define NORMAL
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
}`,Qf=`#define NORMAL
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
}`,jf=`#define PHONG
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
}`,tp=`#define PHONG
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
}`,ep=`#define STANDARD
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
}`,np=`#define STANDARD
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
}`,ip=`#define TOON
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
}`,sp=`#define TOON
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
}`,rp=`uniform float size;
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,lp=`uniform vec3 color;
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
}`,cp=`uniform float rotation;
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
}`,hp=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Lu,alphahash_pars_fragment:Iu,alphamap_fragment:Du,alphamap_pars_fragment:Uu,alphatest_fragment:Nu,alphatest_pars_fragment:Fu,aomap_fragment:Ou,aomap_pars_fragment:Bu,batching_pars_vertex:ku,batching_vertex:Hu,begin_vertex:zu,beginnormal_vertex:Vu,bsdfs:Gu,iridescence_fragment:Wu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:Yu,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:$u,color_fragment:Ju,color_pars_fragment:Ku,color_pars_vertex:Qu,color_vertex:ju,common:td,cube_uv_reflection_fragment:ed,defaultnormal_vertex:nd,displacementmap_pars_vertex:id,displacementmap_vertex:sd,emissivemap_fragment:rd,emissivemap_pars_fragment:ad,colorspace_fragment:od,colorspace_pars_fragment:ld,envmap_fragment:cd,envmap_common_pars_fragment:hd,envmap_pars_fragment:ud,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Ed,envmap_vertex:fd,fog_vertex:pd,fog_pars_vertex:md,fog_fragment:gd,fog_pars_fragment:_d,gradientmap_pars_fragment:xd,lightmap_fragment:yd,lightmap_pars_fragment:vd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:Sd,lights_pars_begin:bd,lights_toon_fragment:wd,lights_toon_pars_fragment:Td,lights_phong_fragment:Ad,lights_phong_pars_fragment:Rd,lights_physical_fragment:Cd,lights_physical_pars_fragment:Pd,lights_fragment_begin:Ld,lights_fragment_maps:Id,lights_fragment_end:Dd,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Nd,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:kd,map_particle_fragment:Hd,map_particle_pars_fragment:zd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Gd,morphcolor_vertex:Wd,morphnormal_vertex:Xd,morphtarget_pars_vertex:qd,morphtarget_vertex:Yd,normal_fragment_begin:Zd,normal_fragment_maps:$d,normal_pars_fragment:Jd,normal_pars_vertex:Kd,normal_vertex:Qd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:ef,clearcoat_pars_fragment:nf,iridescence_pars_fragment:sf,opaque_fragment:rf,packing:af,premultiplied_alpha_fragment:of,project_vertex:lf,dithering_fragment:cf,dithering_pars_fragment:hf,roughnessmap_fragment:uf,roughnessmap_pars_fragment:df,shadowmap_pars_fragment:ff,shadowmap_pars_vertex:pf,shadowmap_vertex:mf,shadowmask_pars_fragment:gf,skinbase_vertex:_f,skinning_pars_vertex:xf,skinning_vertex:yf,skinnormal_vertex:vf,specularmap_fragment:Mf,specularmap_pars_fragment:Sf,tonemapping_fragment:bf,tonemapping_pars_fragment:Ef,transmission_fragment:wf,transmission_pars_fragment:Tf,uv_pars_fragment:Af,uv_pars_vertex:Rf,uv_vertex:Cf,worldpos_vertex:Pf,background_vert:Lf,background_frag:If,backgroundCube_vert:Df,backgroundCube_frag:Uf,cube_vert:Nf,cube_frag:Ff,depth_vert:Of,depth_frag:Bf,distanceRGBA_vert:kf,distanceRGBA_frag:Hf,equirect_vert:zf,equirect_frag:Vf,linedashed_vert:Gf,linedashed_frag:Wf,meshbasic_vert:Xf,meshbasic_frag:qf,meshlambert_vert:Yf,meshlambert_frag:Zf,meshmatcap_vert:$f,meshmatcap_frag:Jf,meshnormal_vert:Kf,meshnormal_frag:Qf,meshphong_vert:jf,meshphong_frag:tp,meshphysical_vert:ep,meshphysical_frag:np,meshtoon_vert:ip,meshtoon_frag:sp,points_vert:rp,points_frag:ap,shadow_vert:op,shadow_frag:lp,sprite_vert:cp,sprite_frag:hp},dt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},_n={basic:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Oe([dt.common,dt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Oe([dt.lights,dt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};_n.physical={uniforms:Oe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var tr={r:0,b:0,g:0};function up(i,t,e,n,s,r,a){let o=new Pt(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Br)?(h===void 0&&(h=new _t(new ve(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Ji(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=te.getTransfer(x.colorSpace)!==ie,(u!==x||f!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _t(new Je(2,2),new fn({name:"BackgroundMaterial",uniforms:Ji(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=te.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(tr,Oc(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function dp(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(L,N,q,Q,$){let z=!1;if(a){let K=_(Q,q,N);c!==K&&(c=K,m(c.object)),z=d(L,Q,q,$),z&&y(L,Q,q,$)}else{let K=N.wireframe===!0;(c.geometry!==Q.id||c.program!==q.id||c.wireframe!==K)&&(c.geometry=Q.id,c.program=q.id,c.wireframe=K,z=!0)}$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,F(L,N,q,Q),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,N,q){let Q=q.wireframe===!0,$=o[L.id];$===void 0&&($={},o[L.id]=$);let z=$[N.id];z===void 0&&(z={},$[N.id]=z);let K=z[Q];return K===void 0&&(K=p(f()),z[Q]=K),K}function p(L){let N=[],q=[],Q=[];for(let $=0;$<s;$++)N[$]=0,q[$]=0,Q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:Q,object:L,attributes:{},index:null}}function d(L,N,q,Q){let $=c.attributes,z=N.attributes,K=0,Z=q.getAttributes();for(let ct in Z)if(Z[ct].location>=0){let tt=$[ct],ut=z[ct];if(ut===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(ut=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(ut=L.instanceColor)),tt===void 0||tt.attribute!==ut||ut&&tt.data!==ut.data)return!0;K++}return c.attributesNum!==K||c.index!==Q}function y(L,N,q,Q){let $={},z=N.attributes,K=0,Z=q.getAttributes();for(let ct in Z)if(Z[ct].location>=0){let tt=z[ct];tt===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));let ut={};ut.attribute=tt,tt&&tt.data&&(ut.data=tt.data),$[ct]=ut,K++}c.attributes=$,c.attributesNum=K,c.index=Q}function x(){let L=c.newAttributes;for(let N=0,q=L.length;N<q;N++)L[N]=0}function E(L){P(L,0)}function P(L,N){let q=c.newAttributes,Q=c.enabledAttributes,$=c.attributeDivisors;q[L]=1,Q[L]===0&&(i.enableVertexAttribArray(L),Q[L]=1),$[L]!==N&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),$[L]=N)}function S(){let L=c.newAttributes,N=c.enabledAttributes;for(let q=0,Q=N.length;q<Q;q++)N[q]!==L[q]&&(i.disableVertexAttribArray(q),N[q]=0)}function C(L,N,q,Q,$,z,K){K===!0?i.vertexAttribIPointer(L,N,q,$,z):i.vertexAttribPointer(L,N,q,Q,$,z)}function F(L,N,q,Q){if(n.isWebGL2===!1&&(L.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let $=Q.attributes,z=q.getAttributes(),K=N.defaultAttributeValues;for(let Z in z){let ct=z[Z];if(ct.location>=0){let k=$[Z];if(k===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),k!==void 0){let tt=k.normalized,ut=k.itemSize,ft=e.get(k);if(ft===void 0)continue;let gt=ft.buffer,Lt=ft.type,It=ft.bytesPerElement,At=n.isWebGL2===!0&&(Lt===i.INT||Lt===i.UNSIGNED_INT||k.gpuType===Ec);if(k.isInterleavedBufferAttribute){let zt=k.data,B=zt.stride,Kt=k.offset;if(zt.isInstancedInterleavedBuffer){for(let St=0;St<ct.locationSize;St++)P(ct.location+St,zt.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let St=0;St<ct.locationSize;St++)E(ct.location+St);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let St=0;St<ct.locationSize;St++)C(ct.location+St,ut/ct.locationSize,Lt,tt,B*It,(Kt+ut/ct.locationSize*St)*It,At)}else{if(k.isInstancedBufferAttribute){for(let zt=0;zt<ct.locationSize;zt++)P(ct.location+zt,k.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let zt=0;zt<ct.locationSize;zt++)E(ct.location+zt);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let zt=0;zt<ct.locationSize;zt++)C(ct.location+zt,ut/ct.locationSize,Lt,tt,ut*It,ut/ct.locationSize*zt*It,At)}}else if(K!==void 0){let tt=K[Z];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(ct.location,tt);break;case 3:i.vertexAttrib3fv(ct.location,tt);break;case 4:i.vertexAttrib4fv(ct.location,tt);break;default:i.vertexAttrib1fv(ct.location,tt)}}}}S()}function v(){X();for(let L in o){let N=o[L];for(let q in N){let Q=N[q];for(let $ in Q)g(Q[$].object),delete Q[$];delete N[q]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;let N=o[L.id];for(let q in N){let Q=N[q];for(let $ in Q)g(Q[$].object),delete Q[$];delete N[q]}delete o[L.id]}function D(L){for(let N in o){let q=o[N];if(q[L.id]===void 0)continue;let Q=q[L.id];for(let $ in Q)g(Q[$].object),delete Q[$];delete q[L.id]}}function X(){nt(),h=!0,c!==l&&(c=l,m(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:nt,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:E,disableUnusedAttributes:S}}function fp(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function pp(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=a||t.has("OES_texture_float"),P=x&&E,S=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:S}}function mp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new An,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,x=y*4,E=d.clippingState||null;l.value=E,E=h(g,f,x,m);for(let P=0;P!==x;++P)E[P]=e[P];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let d=m+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,E=m;x!==_;++x,E+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function gp(i){let t=new WeakMap;function e(a,o){return o===pi?a.mapping=qi:o===Na&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===pi||o===Na)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ga(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Er=class extends Sr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vi=4,Xl=[.125,.215,.35,.446,.526,.582],hi=20,ba=new Er,ql=new Pt,Ea=null,wa=0,Ta=0,li=(1+Math.sqrt(5))/2,ki=1/li,Yl=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,li,ki),new A(0,li,-ki),new A(ki,0,li),new A(-ki,0,li),new A(li,ki,0),new A(-li,ki,0)],$n=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,wa,Ta),t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ys,format:dn,colorSpace:Pn,depthBuffer:!1},s=Zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(r)),this._blurMaterial=xp(r,t,e)}return s}_compileMaterial(t){let e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,ba)}_sceneToCubeUV(t,e,n,s){let o=new ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ql),h.toneMapping=Gn,h.autoClear=!1;let m=new Me({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new _t(new ve,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(ql),_=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let x=this._cubeSize;er(s,y*x,d>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yl[(s-1)%Yl.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _t(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):hi;p>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);let d=[],y=0;for(let C=0;C<hi;++C){let F=C/_,v=Math.exp(-F*F/2);d.push(v),C===0?y+=v:C<p&&(y+=2*v)}for(let C=0;C<d.length;C++)d[C]=d[C]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let E=this._sizeLods[s],P=3*E*(s>x-Vi?s-x+Vi:0),S=4*(this._cubeSize-E);er(e,P,S,3*E,2*E),l.setRenderTarget(e),l.render(u,ba)}};function _p(i){let t=[],e=[],n=[],s=i,r=i-Vi+1+Xl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Vi?l=Xl[a-i+Vi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,y=new Float32Array(_*g*m),x=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let S=0;S<m;S++){let C=S%3*2/3-1,F=S>2?0:-1,v=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];y.set(v,_*g*S),x.set(f,p*g*S);let w=[S,S,S,S,S,S];E.set(w,d*g*S)}let P=new se;P.setAttribute("position",new pe(y,_)),P.setAttribute("uv",new pe(x,p)),P.setAttribute("faceIndex",new pe(E,d)),t.push(P),s>Vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zl(i,t,e){let n=new Ln(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xp(i,t,e){let n=new Float32Array(hi),s=new A(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function $l(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Jl(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function wo(){return`

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
	`}function yp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===pi||l===Na,h=l===qi||l===Yi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new $n(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new $n(i));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let x=0,E=y.length;x<E;x+=3){let P=y[x+0],S=y[x+1],C=y[x+2];f.push(P,S,S,C,C,P)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,E=y.length/3-1;x<E;x+=3){let P=x+0,S=x+1,C=x+2;f.push(P,S,S,C,C,P)}}else return;let p=new(Nc(f)?Mr:vr)(f,1);p.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sp(i,t,e,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,o,m*l),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,o,m*l,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let d=0;for(let y=0;y<_;y++)d+=g[y];e.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function bp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ep(i,t){return i[0]-t[0]}function wp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Tp(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new le,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],F=0;y===!0&&(F=1),x===!0&&(F=2),E===!0&&(F=3);let v=h.attributes.position.count*F,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let D=new Float32Array(v*w*4*g),X=new _r(D,v,w,g);X.type=zn,X.needsUpdate=!0;let nt=F*4;for(let N=0;N<g;N++){let q=P[N],Q=S[N],$=C[N],z=v*w*4*N;for(let K=0;K<q.count;K++){let Z=K*nt;y===!0&&(a.fromBufferAttribute(q,K),D[z+Z+0]=a.x,D[z+Z+1]=a.y,D[z+Z+2]=a.z,D[z+Z+3]=0),x===!0&&(a.fromBufferAttribute(Q,K),D[z+Z+4]=a.x,D[z+Z+5]=a.y,D[z+Z+6]=a.z,D[z+Z+7]=0),E===!0&&(a.fromBufferAttribute($,K),D[z+Z+8]=a.x,D[z+Z+9]=a.y,D[z+Z+10]=a.z,D[z+Z+11]=$.itemSize===4?a.w:1)}}_={count:g,texture:X,size:new xt(v,w)},r.set(h,_),h.addEventListener("dispose",L)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<m;x++){let E=g[x];E[0]=x,E[1]=f[x]}g.sort(wp);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Ep);let _=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let E=o[x],P=E[0],S=E[1];P!==Number.MAX_SAFE_INTEGER&&S?(_&&h.getAttribute("morphTarget"+x)!==_[P]&&h.setAttribute("morphTarget"+x,_[P]),p&&h.getAttribute("morphNormal"+x)!==p[P]&&h.setAttribute("morphNormal"+x,p[P]),s[x]=S,d+=S):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Ap(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var wr=class extends sn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:di,h!==di&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=Hn),n===void 0&&h===$i&&(n=ui),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},kc=new sn,Hc=new wr(1,1);Hc.compareFunction=Dc;var zc=new _r,Vc=new za,Gc=new br,Kl=[],Ql=[],jl=new Float32Array(16),tc=new Float32Array(9),ec=new Float32Array(4);function ts(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kl[s];if(r===void 0&&(r=new Float32Array(s),Kl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hr(i,t){let e=Ql[t];e===void 0&&(e=new Int32Array(t),Ql[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Ip(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;ec.set(n),i.uniformMatrix2fv(this.addr,!1,ec),be(e,n)}}function Dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;tc.set(n),i.uniformMatrix3fv(this.addr,!1,tc),be(e,n)}}function Up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;jl.set(n),i.uniformMatrix4fv(this.addr,!1,jl),be(e,n)}}function Np(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Hc:kc;e.setTexture2D(t||r,s)}function Wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vc,s)}function Xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gc,s)}function qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zc,s)}function Yp(i){switch(i){case 5126:return Rp;case 35664:return Cp;case 35665:return Pp;case 35666:return Lp;case 35674:return Ip;case 35675:return Dp;case 35676:return Up;case 5124:case 35670:return Np;case 35667:case 35671:return Fp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return kp;case 36294:return Hp;case 36295:return zp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}function Zp(i,t){i.uniform1fv(this.addr,t)}function $p(i,t){let e=ts(t,this.size,2);i.uniform2fv(this.addr,e)}function Jp(i,t){let e=ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Kp(i,t){let e=ts(t,this.size,4);i.uniform4fv(this.addr,e)}function Qp(i,t){let e=ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jp(i,t){let e=ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tm(i,t){let e=ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function em(i,t){i.uniform1iv(this.addr,t)}function nm(i,t){i.uniform2iv(this.addr,t)}function im(i,t){i.uniform3iv(this.addr,t)}function sm(i,t){i.uniform4iv(this.addr,t)}function rm(i,t){i.uniform1uiv(this.addr,t)}function am(i,t){i.uniform2uiv(this.addr,t)}function om(i,t){i.uniform3uiv(this.addr,t)}function lm(i,t){i.uniform4uiv(this.addr,t)}function cm(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||kc,r[a])}function hm(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vc,r[a])}function um(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gc,r[a])}function dm(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zc,r[a])}function fm(i){switch(i){case 5126:return Zp;case 35664:return $p;case 35665:return Jp;case 35666:return Kp;case 35674:return Qp;case 35675:return jp;case 35676:return tm;case 5124:case 35670:return em;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}var Wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yp(e.type)}},Xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fm(e.type)}},qa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Aa=/(\w+)(\])?(\[|\.)?/g;function nc(i,t){i.seq.push(t),i.map[t.id]=t}function pm(i,t,e){let n=i.name,s=n.length;for(Aa.lastIndex=0;;){let r=Aa.exec(n),a=Aa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nc(e,c===void 0?new Wa(o,i,t):new Xa(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new qa(o),nc(e,u)),e=u}}}var Xi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);pm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ic(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var mm=37297,gm=0;function _m(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function xm(i){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i),n;switch(t===e?n="":t===dr&&e===ur?n="LinearDisplayP3ToLinearSRGB":t===ur&&e===dr&&(n="LinearSRGBToLinearDisplayP3"),i){case Pn:case kr:return[n,"LinearTransferOETF"];case oe:case Eo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_m(i.getShaderSource(t),a)}else return s}function ym(i,t){let e=xm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vm(i,t){let e;switch(t){case Bh:e="Linear";break;case kh:e="Reinhard";break;case Hh:e="OptimizedCineon";break;case vi:e="ACESFilmic";break;case Vh:e="AgX";break;case zh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Mm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gi).join(`
`)}function Sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Gi).join(`
`)}function bm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Em(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Gi(i){return i!==""}function rc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ac(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(wm,Am)}var Tm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Am(i,t){let e=Vt[t];if(e===void 0){let n=Tm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}var Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(i){return i.replace(Rm,Cm)}function Cm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===So?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function Lm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Im(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Yi&&(t="ENVMAP_MODE_REFRACTION"),t}function Dm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sc:t="ENVMAP_BLENDING_MULTIPLY";break;case Fh:t="ENVMAP_BLENDING_MIX";break;case Oh:t="ENVMAP_BLENDING_ADD";break}return t}function Um(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Pm(e),c=Lm(e),h=Im(e),u=Dm(e),f=Um(e),m=e.isWebGL2?"":Mm(e),g=Sm(e),_=bm(r),p=s.createProgram(),d,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gi).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gi).join(`
`),y.length>0&&(y+=`
`)):(d=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),y=[m,lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,ym("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),a=Ya(a),a=rc(a,e),a=ac(a,e),o=Ya(o),o=rc(o,e),o=ac(o,e),a=oc(a),o=oc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let E=x+d+a,P=x+y+o,S=ic(s,s.VERTEX_SHADER,E),C=ic(s,s.FRAGMENT_SHADER,P);s.attachShader(p,S),s.attachShader(p,C),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function F(X){if(i.debug.checkShaderErrors){let nt=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(S).trim(),N=s.getShaderInfoLog(C).trim(),q=!0,Q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,C);else{let $=sc(s,S,"vertex"),z=sc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+$+`
`+z)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(L===""||N==="")&&(Q=!1);Q&&(X.diagnostics={runnable:q,programLog:nt,vertexShader:{log:L,prefix:d},fragmentShader:{log:N,prefix:y}})}s.deleteShader(S),s.deleteShader(C),v=new Xi(s,p),w=Em(s,p)}let v;this.getUniforms=function(){return v===void 0&&F(this),v};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,mm)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}var Fm=0,Za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $a(t),e.set(t,n)),n}},$a=class{constructor(t){this.id=Fm++,this.code=t,this.usedTimes=0}};function Om(i,t,e,n,s,r,a){let o=new yr,l=new Za,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,w,D,X,nt){let L=X.fog,N=nt.geometry,q=v.isMeshStandardMaterial?X.environment:null,Q=(v.isMeshStandardMaterial?e:t).get(v.envMap||q),$=Q&&Q.mapping===Br?Q.image.height:null,z=g[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Z=K!==void 0?K.length:0,ct=0;N.morphAttributes.position!==void 0&&(ct=1),N.morphAttributes.normal!==void 0&&(ct=2),N.morphAttributes.color!==void 0&&(ct=3);let k,tt,ut,ft;if(z){let Ee=_n[z];k=Ee.vertexShader,tt=Ee.fragmentShader}else k=v.vertexShader,tt=v.fragmentShader,l.update(v),ut=l.getVertexShaderID(v),ft=l.getFragmentShaderID(v);let gt=i.getRenderTarget(),Lt=nt.isInstancedMesh===!0,It=nt.isBatchedMesh===!0,At=!!v.map,zt=!!v.matcap,B=!!Q,Kt=!!v.aoMap,St=!!v.lightMap,Nt=!!v.bumpMap,vt=!!v.normalMap,ee=!!v.displacementMap,Ot=!!v.emissiveMap,T=!!v.metalnessMap,M=!!v.roughnessMap,H=v.anisotropy>0,at=v.clearcoat>0,st=v.iridescence>0,ot=v.sheen>0,Mt=v.transmission>0,pt=H&&!!v.anisotropyMap,ht=at&&!!v.clearcoatMap,Et=at&&!!v.clearcoatNormalMap,kt=at&&!!v.clearcoatRoughnessMap,rt=st&&!!v.iridescenceMap,Zt=st&&!!v.iridescenceThicknessMap,Ft=ot&&!!v.sheenColorMap,Dt=ot&&!!v.sheenRoughnessMap,O=!!v.specularMap,I=!!v.specularColorMap,J=!!v.specularIntensityMap,j=Mt&&!!v.transmissionMap,mt=Mt&&!!v.thicknessMap,et=!!v.gradientMap,Y=!!v.alphaMap,R=v.alphaTest>0,it=!!v.alphaHash,lt=!!v.extensions,wt=!!N.attributes.uv1,Tt=!!N.attributes.uv2,Jt=!!N.attributes.uv3,Qt=Gn;return v.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Qt=i.toneMapping),{isWebGL2:h,shaderID:z,shaderType:v.type,shaderName:v.name,vertexShader:k,fragmentShader:tt,defines:v.defines,customVertexShaderID:ut,customFragmentShaderID:ft,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:It,instancing:Lt,instancingColor:Lt&&nt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Pn,map:At,matcap:zt,envMap:B,envMapMode:B&&Q.mapping,envMapCubeUVHeight:$,aoMap:Kt,lightMap:St,bumpMap:Nt,normalMap:vt,displacementMap:f&&ee,emissiveMap:Ot,normalMapObjectSpace:vt&&v.normalMapType===tu,normalMapTangentSpace:vt&&v.normalMapType===Ic,metalnessMap:T,roughnessMap:M,anisotropy:H,anisotropyMap:pt,clearcoat:at,clearcoatMap:ht,clearcoatNormalMap:Et,clearcoatRoughnessMap:kt,iridescence:st,iridescenceMap:rt,iridescenceThicknessMap:Zt,sheen:ot,sheenColorMap:Ft,sheenRoughnessMap:Dt,specularMap:O,specularColorMap:I,specularIntensityMap:J,transmission:Mt,transmissionMap:j,thicknessMap:mt,gradientMap:et,opaque:v.transparent===!1&&v.blending===Cn,alphaMap:Y,alphaTest:R,alphaHash:it,combine:v.combine,mapUv:At&&_(v.map.channel),aoMapUv:Kt&&_(v.aoMap.channel),lightMapUv:St&&_(v.lightMap.channel),bumpMapUv:Nt&&_(v.bumpMap.channel),normalMapUv:vt&&_(v.normalMap.channel),displacementMapUv:ee&&_(v.displacementMap.channel),emissiveMapUv:Ot&&_(v.emissiveMap.channel),metalnessMapUv:T&&_(v.metalnessMap.channel),roughnessMapUv:M&&_(v.roughnessMap.channel),anisotropyMapUv:pt&&_(v.anisotropyMap.channel),clearcoatMapUv:ht&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(v.sheenRoughnessMap.channel),specularMapUv:O&&_(v.specularMap.channel),specularColorMapUv:I&&_(v.specularColorMap.channel),specularIntensityMapUv:J&&_(v.specularIntensityMap.channel),transmissionMapUv:j&&_(v.transmissionMap.channel),thicknessMapUv:mt&&_(v.thicknessMap.channel),alphaMapUv:Y&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(vt||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:wt,vertexUv2s:Tt,vertexUv3s:Jt,pointsUvs:nt.isPoints===!0&&!!N.attributes.uv&&(At||Y),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ct,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:At&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ae,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:lt&&v.extensions.derivatives===!0,extensionFragDepth:lt&&v.extensions.fragDepth===!0,extensionDrawBuffers:lt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(y(w,v),x(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function E(v){let w=g[v.type],D;if(w){let X=_n[w];D=wu.clone(X.uniforms)}else D=v.uniforms;return D}function P(v,w){let D;for(let X=0,nt=c.length;X<nt;X++){let L=c[X];if(L.cacheKey===w){D=L,++D.usedTimes;break}}return D===void 0&&(D=new Nm(i,w,v,r),c.push(D)),D}function S(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:P,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:F}}function Bm(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,m,g,_,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),t++,d}function o(u,f,m,g,_,p){let d=a(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(u,f,m,g,_,p){let d=a(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||km),n.length>1&&n.sort(f||cc),s.length>1&&s.sort(f||cc)}function h(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Hm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new hc,i.set(n,[a])):s>=r.length?(a=new hc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Pt};break;case"SpotLight":e={position:new A,direction:new A,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Vm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Gm=0;function Wm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xm(i,t){let e=new zm,n=Vm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new A);let r=new A,a=new Yt,o=new Yt;function l(h,u){let f=0,m=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let _=0,p=0,d=0,y=0,x=0,E=0,P=0,S=0,C=0,F=0,v=0;h.sort(Wm);let w=u===!0?Math.PI:1;for(let X=0,nt=h.length;X<nt;X++){let L=h[X],N=L.color,q=L.intensity,Q=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*q*w,m+=N.g*q*w,g+=N.b*q*w;else if(L.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(L.sh.coefficients[z],q);v++}else if(L.isDirectionalLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let K=L.shadow,Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[_]=Z,s.directionalShadowMap[_]=$,s.directionalShadowMatrix[_]=L.shadow.matrix,E++}s.directional[_]=z,_++}else if(L.isSpotLight){let z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(N).multiplyScalar(q*w),z.distance=Q,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,s.spot[d]=z;let K=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,K.updateMatrices(L),L.castShadow&&F++),s.spotLightMatrix[d]=K.matrix,L.castShadow){let Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[d]=Z,s.spotShadowMap[d]=$,S++}d++}else if(L.isRectAreaLight){let z=e.get(L);z.color.copy(N).multiplyScalar(q),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=z,y++}else if(L.isPointLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*w),z.distance=L.distance,z.decay=L.decay,L.castShadow){let K=L.shadow,Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[p]=Z,s.pointShadowMap[p]=$,s.pointShadowMatrix[p]=L.shadow.matrix,P++}s.point[p]=z,p++}else if(L.isHemisphereLight){let z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(q*w),z.groundColor.copy(L.groundColor).multiplyScalar(q*w),s.hemi[x]=z,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==_||D.pointLength!==p||D.spotLength!==d||D.rectAreaLength!==y||D.hemiLength!==x||D.numDirectionalShadows!==E||D.numPointShadows!==P||D.numSpotShadows!==S||D.numSpotMaps!==C||D.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=y,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=S+C-F,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=v,D.directionalLength=_,D.pointLength=p,D.spotLength=d,D.rectAreaLength=y,D.hemiLength=x,D.numDirectionalShadows=E,D.numPointShadows=P,D.numSpotShadows=S,D.numSpotMaps=C,D.numLightProbes=v,s.version=Gm++)}function c(h,u){let f=0,m=0,g=0,_=0,p=0,d=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let E=h[y];if(E.isDirectionalLight){let P=s.directional[f];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(E.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(E.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(E.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){let P=s.point[m];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){let P=s.hemi[p];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function uc(i,t){let e=new Xm(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function qm(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new uc(i,t),e.set(r,[l])):a>=o.length?(l=new uc(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ja=class extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ka=class extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ym=`void main() {
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
}`;function $m(i,t,e){let n=new vs,s=new xt,r=new xt,a=new le,o=new Ja({depthPacking:jh}),l=new Ka,c={},h=e.maxTextureSize,u={[Xn]:Ge,[Ge]:Xn,[Ae]:Ae},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Ym,fragmentShader:Zm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new se;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new _t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let d=this.type;this.render=function(S,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let v=i.getRenderTarget(),w=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Vn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let nt=d!==Tn&&this.type===Tn,L=d===Tn&&this.type!==Tn;for(let N=0,q=S.length;N<q;N++){let Q=S[N],$=Q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let z=$.getFrameExtents();if(s.multiply(z),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,$.mapSize.y=r.y)),$.map===null||nt===!0||L===!0){let Z=this.type!==Tn?{minFilter:Be,magFilter:Be}:{};$.map!==null&&$.map.dispose(),$.map=new Ln(s.x,s.y,Z),$.map.texture.name=Q.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let K=$.getViewportCount();for(let Z=0;Z<K;Z++){let ct=$.getViewport(Z);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),X.viewport(a),$.updateMatrices(Q,Z),n=$.getFrustum(),E(C,F,$.camera,Q,this.type)}$.isPointLightShadow!==!0&&this.type===Tn&&y($,F),$.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(v,w,D)};function y(S,C){let F=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ln(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,F,f,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,F,m,_,null)}function x(S,C,F,v){let w=null,D=F.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)w=D;else if(w=F.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let X=w.uuid,nt=C.uuid,L=c[X];L===void 0&&(L={},c[X]=L);let N=L[nt];N===void 0&&(N=w.clone(),L[nt]=N,C.addEventListener("dispose",P)),w=N}if(w.visible=C.visible,w.wireframe=C.wireframe,v===Tn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:u[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let X=i.properties.get(w);X.light=F}return w}function E(S,C,F,v,w){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Tn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld);let nt=t.update(S),L=S.material;if(Array.isArray(L)){let N=nt.groups;for(let q=0,Q=N.length;q<Q;q++){let $=N[q],z=L[$.materialIndex];if(z&&z.visible){let K=x(S,z,v,w);S.onBeforeShadow(i,S,C,F,nt,K,$),i.renderBufferDirect(F,null,nt,K,S,$),S.onAfterShadow(i,S,C,F,nt,K,$)}}}else if(L.visible){let N=x(S,L,v,w);S.onBeforeShadow(i,S,C,F,nt,N,null),i.renderBufferDirect(F,null,nt,N,S,null),S.onAfterShadow(i,S,C,F,nt,N,null)}}let X=S.children;for(let nt=0,L=X.length;nt<L;nt++)E(X[nt],C,F,v,w)}function P(S){S.target.removeEventListener("dispose",P);for(let F in c){let v=c[F],w=S.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function Jm(i,t,e){let n=e.isWebGL2;function s(){let R=!1,it=new le,lt=null,wt=new le(0,0,0,0);return{setMask:function(Tt){lt!==Tt&&!R&&(i.colorMask(Tt,Tt,Tt,Tt),lt=Tt)},setLocked:function(Tt){R=Tt},setClear:function(Tt,Jt,Qt,me,Ee){Ee===!0&&(Tt*=me,Jt*=me,Qt*=me),it.set(Tt,Jt,Qt,me),wt.equals(it)===!1&&(i.clearColor(Tt,Jt,Qt,me),wt.copy(it))},reset:function(){R=!1,lt=null,wt.set(-1,0,0,0)}}}function r(){let R=!1,it=null,lt=null,wt=null;return{setTest:function(Tt){Tt?It(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(Tt){it!==Tt&&!R&&(i.depthMask(Tt),it=Tt)},setFunc:function(Tt){if(lt!==Tt){switch(Tt){case Ch:i.depthFunc(i.NEVER);break;case Ph:i.depthFunc(i.ALWAYS);break;case Lh:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case Ih:i.depthFunc(i.EQUAL);break;case Dh:i.depthFunc(i.GEQUAL);break;case Uh:i.depthFunc(i.GREATER);break;case Nh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Tt}},setLocked:function(Tt){R=Tt},setClear:function(Tt){wt!==Tt&&(i.clearDepth(Tt),wt=Tt)},reset:function(){R=!1,it=null,lt=null,wt=null}}}function a(){let R=!1,it=null,lt=null,wt=null,Tt=null,Jt=null,Qt=null,me=null,Ee=null;return{setTest:function(ne){R||(ne?It(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(ne){it!==ne&&!R&&(i.stencilMask(ne),it=ne)},setFunc:function(ne,Fe,gn){(lt!==ne||wt!==Fe||Tt!==gn)&&(i.stencilFunc(ne,Fe,gn),lt=ne,wt=Fe,Tt=gn)},setOp:function(ne,Fe,gn){(Jt!==ne||Qt!==Fe||me!==gn)&&(i.stencilOp(ne,Fe,gn),Jt=ne,Qt=Fe,me=gn)},setLocked:function(ne){R=ne},setClear:function(ne){Ee!==ne&&(i.clearStencil(ne),Ee=ne)},reset:function(){R=!1,it=null,lt=null,wt=null,Tt=null,Jt=null,Qt=null,me=null,Ee=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,d=!1,y=null,x=null,E=null,P=null,S=null,C=null,F=null,v=new Pt(0,0,0),w=0,D=!1,X=null,nt=null,L=null,N=null,q=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,z=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=z>=2);let Z=null,ct={},k=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),ut=new le().fromArray(k),ft=new le().fromArray(tt);function gt(R,it,lt,wt){let Tt=new Uint8Array(4),Jt=i.createTexture();i.bindTexture(R,Jt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<lt;Qt++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(it,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(it+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Jt}let Lt={};Lt[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Lt[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),It(i.DEPTH_TEST),l.setFunc(or),Ot(!1),T(Xo),It(i.CULL_FACE),vt(Vn);function It(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function At(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function zt(R,it){return m[R]!==it?(i.bindFramebuffer(R,it),m[R]=it,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=it),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=it)),!0):!1}function B(R,it){let lt=_,wt=!1;if(R)if(lt=g.get(it),lt===void 0&&(lt=[],g.set(it,lt)),R.isWebGLMultipleRenderTargets){let Tt=R.texture;if(lt.length!==Tt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Jt=0,Qt=Tt.length;Jt<Qt;Jt++)lt[Jt]=i.COLOR_ATTACHMENT0+Jt;lt.length=Tt.length,wt=!0}}else lt[0]!==i.COLOR_ATTACHMENT0&&(lt[0]=i.COLOR_ATTACHMENT0,wt=!0);else lt[0]!==i.BACK&&(lt[0]=i.BACK,wt=!0);wt&&(e.isWebGL2?i.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function Kt(R){return p!==R?(i.useProgram(R),p=R,!0):!1}let St={[ci]:i.FUNC_ADD,[ph]:i.FUNC_SUBTRACT,[mh]:i.FUNC_REVERSE_SUBTRACT};if(n)St[Zo]=i.MIN,St[$o]=i.MAX;else{let R=t.get("EXT_blend_minmax");R!==null&&(St[Zo]=R.MIN_EXT,St[$o]=R.MAX_EXT)}let Nt={[gh]:i.ZERO,[_h]:i.ONE,[xh]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[Eh]:i.SRC_ALPHA_SATURATE,[Sh]:i.DST_COLOR,[vh]:i.DST_ALPHA,[yh]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[bh]:i.ONE_MINUS_DST_COLOR,[Mh]:i.ONE_MINUS_DST_ALPHA,[wh]:i.CONSTANT_COLOR,[Th]:i.ONE_MINUS_CONSTANT_COLOR,[Ah]:i.CONSTANT_ALPHA,[Rh]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(R,it,lt,wt,Tt,Jt,Qt,me,Ee,ne){if(R===Vn){d===!0&&(At(i.BLEND),d=!1);return}if(d===!1&&(It(i.BLEND),d=!0),R!==fh){if(R!==y||ne!==D){if((x!==ci||S!==ci)&&(i.blendEquation(i.FUNC_ADD),x=ci,S=ci),ne)switch(R){case Cn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case We:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Cn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case We:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,P=null,C=null,F=null,v.set(0,0,0),w=0,y=R,D=ne}return}Tt=Tt||it,Jt=Jt||lt,Qt=Qt||wt,(it!==x||Tt!==S)&&(i.blendEquationSeparate(St[it],St[Tt]),x=it,S=Tt),(lt!==E||wt!==P||Jt!==C||Qt!==F)&&(i.blendFuncSeparate(Nt[lt],Nt[wt],Nt[Jt],Nt[Qt]),E=lt,P=wt,C=Jt,F=Qt),(me.equals(v)===!1||Ee!==w)&&(i.blendColor(me.r,me.g,me.b,Ee),v.copy(me),w=Ee),y=R,D=!1}function ee(R,it){R.side===Ae?At(i.CULL_FACE):It(i.CULL_FACE);let lt=R.side===Ge;it&&(lt=!lt),Ot(lt),R.blending===Cn&&R.transparent===!1?vt(Vn):vt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);let wt=R.stencilWrite;c.setTest(wt),wt&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),H(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?It(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(R){X!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),X=R)}function T(R){R!==uh?(It(i.CULL_FACE),R!==nt&&(R===Xo?i.cullFace(i.BACK):R===dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),nt=R}function M(R){R!==L&&($&&i.lineWidth(R),L=R)}function H(R,it,lt){R?(It(i.POLYGON_OFFSET_FILL),(N!==it||q!==lt)&&(i.polygonOffset(it,lt),N=it,q=lt)):At(i.POLYGON_OFFSET_FILL)}function at(R){R?It(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function st(R){R===void 0&&(R=i.TEXTURE0+Q-1),Z!==R&&(i.activeTexture(R),Z=R)}function ot(R,it,lt){lt===void 0&&(Z===null?lt=i.TEXTURE0+Q-1:lt=Z);let wt=ct[lt];wt===void 0&&(wt={type:void 0,texture:void 0},ct[lt]=wt),(wt.type!==R||wt.texture!==it)&&(Z!==lt&&(i.activeTexture(lt),Z=lt),i.bindTexture(R,it||Lt[R]),wt.type=R,wt.texture=it)}function Mt(){let R=ct[Z];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function pt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Et(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function kt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Dt(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function O(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function I(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(R){ut.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ut.copy(R))}function j(R){ft.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ft.copy(R))}function mt(R,it){let lt=u.get(it);lt===void 0&&(lt=new WeakMap,u.set(it,lt));let wt=lt.get(R);wt===void 0&&(wt=i.getUniformBlockIndex(it,R.name),lt.set(R,wt))}function et(R,it){let wt=u.get(it).get(R);h.get(it)!==wt&&(i.uniformBlockBinding(it,wt,R.__bindingPointIndex),h.set(it,wt))}function Y(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Z=null,ct={},m={},g=new WeakMap,_=[],p=null,d=!1,y=null,x=null,E=null,P=null,S=null,C=null,F=null,v=new Pt(0,0,0),w=0,D=!1,X=null,nt=null,L=null,N=null,q=null,ut.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:It,disable:At,bindFramebuffer:zt,drawBuffers:B,useProgram:Kt,setBlending:vt,setMaterial:ee,setFlipSided:Ot,setCullFace:T,setLineWidth:M,setPolygonOffset:H,setScissorTest:at,activeTexture:st,bindTexture:ot,unbindTexture:Mt,compressedTexImage2D:pt,compressedTexImage3D:ht,texImage2D:O,texImage3D:I,updateUBOMapping:mt,uniformBlockBinding:et,texStorage2D:Ft,texStorage3D:Dt,texSubImage2D:Et,texSubImage3D:kt,compressedTexSubImage2D:rt,compressedTexSubImage3D:Zt,scissor:J,viewport:j,reset:Y}}function Km(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return m?new OffscreenCanvas(T,M):pr("canvas")}function _(T,M,H,at){let st=1;if((T.width>at||T.height>at)&&(st=at/Math.max(T.width,T.height)),st<1||M===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){let ot=M?ka:Math.floor,Mt=ot(st*T.width),pt=ot(st*T.height);u===void 0&&(u=g(Mt,pt));let ht=H?g(Mt,pt):u;return ht.width=Mt,ht.height=pt,ht.getContext("2d").drawImage(T,0,0,Mt,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Mt+"x"+pt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Rl(T.width)&&Rl(T.height)}function d(T){return o?!1:T.wrapS!==un||T.wrapT!==un||T.minFilter!==Be&&T.minFilter!==en}function y(T,M){return T.generateMipmaps&&M&&T.minFilter!==Be&&T.minFilter!==en}function x(T){i.generateMipmap(T)}function E(T,M,H,at,st=!1){if(o===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ot=M;if(M===i.RED&&(H===i.FLOAT&&(ot=i.R32F),H===i.HALF_FLOAT&&(ot=i.R16F),H===i.UNSIGNED_BYTE&&(ot=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ot=i.R8UI),H===i.UNSIGNED_SHORT&&(ot=i.R16UI),H===i.UNSIGNED_INT&&(ot=i.R32UI),H===i.BYTE&&(ot=i.R8I),H===i.SHORT&&(ot=i.R16I),H===i.INT&&(ot=i.R32I)),M===i.RG&&(H===i.FLOAT&&(ot=i.RG32F),H===i.HALF_FLOAT&&(ot=i.RG16F),H===i.UNSIGNED_BYTE&&(ot=i.RG8)),M===i.RGBA){let Mt=st?hr:te.getTransfer(at);H===i.FLOAT&&(ot=i.RGBA32F),H===i.HALF_FLOAT&&(ot=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ot=Mt===ie?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function P(T,M,H){return y(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Be&&T.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function S(T){return T===Be||T===Jo||T===Kr?i.NEAREST:i.LINEAR}function C(T){let M=T.target;M.removeEventListener("dispose",C),v(M),M.isVideoTexture&&h.delete(M)}function F(T){let M=T.target;M.removeEventListener("dispose",F),D(M)}function v(T){let M=n.get(T);if(M.__webglInit===void 0)return;let H=T.source,at=f.get(H);if(at){let st=at[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&w(T),Object.keys(at).length===0&&f.delete(H)}n.remove(T)}function w(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let H=T.source,at=f.get(H);delete at[M.__cacheKey],a.memory.textures--}function D(T){let M=T.texture,H=n.get(T),at=n.get(M);if(at.__webglTexture!==void 0&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(H.__webglFramebuffer[st]))for(let ot=0;ot<H.__webglFramebuffer[st].length;ot++)i.deleteFramebuffer(H.__webglFramebuffer[st][ot]);else i.deleteFramebuffer(H.__webglFramebuffer[st]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[st])}else{if(Array.isArray(H.__webglFramebuffer))for(let st=0;st<H.__webglFramebuffer.length;st++)i.deleteFramebuffer(H.__webglFramebuffer[st]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let st=0;st<H.__webglColorRenderbuffer.length;st++)H.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[st]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let st=0,ot=M.length;st<ot;st++){let Mt=n.get(M[st]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),a.memory.textures--),n.remove(M[st])}n.remove(M),n.remove(T)}let X=0;function nt(){X=0}function L(){let T=X;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function N(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function q(T,M){let H=n.get(T);if(T.isVideoTexture&&ee(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){let at=T.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(H,T,M);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function Q(T,M){let H=n.get(T);if(T.version>0&&H.__version!==T.version){ut(H,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function $(T,M){let H=n.get(T);if(T.version>0&&H.__version!==T.version){ut(H,T,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function z(T,M){let H=n.get(T);if(T.version>0&&H.__version!==T.version){ft(H,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}let K={[Zi]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},Z={[Be]:i.NEAREST,[Jo]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Gh]:i.LINEAR_MIPMAP_NEAREST,[xs]:i.LINEAR_MIPMAP_LINEAR},ct={[eu]:i.NEVER,[ou]:i.ALWAYS,[nu]:i.LESS,[Dc]:i.LEQUAL,[iu]:i.EQUAL,[au]:i.GEQUAL,[su]:i.GREATER,[ru]:i.NOTEQUAL};function k(T,M,H){if(H?(i.texParameteri(T,i.TEXTURE_WRAP_S,K[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,K[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,K[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Z[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Z[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==un||M.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,S(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==Be&&M.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ct[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let at=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Be||M.minFilter!==Kr&&M.minFilter!==xs||M.type===zn&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===ys&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function tt(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));let at=M.source,st=f.get(at);st===void 0&&(st={},f.set(at,st));let ot=N(M);if(ot!==T.__cacheKey){st[ot]===void 0&&(st[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),st[ot].usedTimes++;let Mt=st[T.__cacheKey];Mt!==void 0&&(st[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(M)),T.__cacheKey=ot,T.__webglTexture=st[ot].texture}return H}function ut(T,M,H){let at=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(at=i.TEXTURE_3D);let st=tt(T,M),ot=M.source;e.bindTexture(at,T.__webglTexture,i.TEXTURE0+H);let Mt=n.get(ot);if(ot.version!==Mt.__version||st===!0){e.activeTexture(i.TEXTURE0+H);let pt=te.getPrimaries(te.workingColorSpace),ht=M.colorSpace===nn?null:te.getPrimaries(M.colorSpace),Et=M.colorSpace===nn||pt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let kt=d(M)&&p(M.image)===!1,rt=_(M.image,kt,!1,s.maxTextureSize);rt=Ot(M,rt);let Zt=p(rt)||o,Ft=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type),O=E(M.internalFormat,Ft,Dt,M.colorSpace,M.isVideoTexture);k(at,M,Zt);let I,J=M.mipmaps,j=o&&M.isVideoTexture!==!0&&O!==Pc,mt=Mt.__version===void 0||st===!0,et=P(M,rt,Zt);if(M.isDepthTexture)O=i.DEPTH_COMPONENT,o?M.type===zn?O=i.DEPTH_COMPONENT32F:M.type===Hn?O=i.DEPTH_COMPONENT24:M.type===ui?O=i.DEPTH24_STENCIL8:O=i.DEPTH_COMPONENT16:M.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===di&&O===i.DEPTH_COMPONENT&&M.type!==bo&&M.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Hn,Dt=r.convert(M.type)),M.format===$i&&O===i.DEPTH_COMPONENT&&(O=i.DEPTH_STENCIL,M.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ui,Dt=r.convert(M.type))),mt&&(j?e.texStorage2D(i.TEXTURE_2D,1,O,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,O,rt.width,rt.height,0,Ft,Dt,null));else if(M.isDataTexture)if(J.length>0&&Zt){j&&mt&&e.texStorage2D(i.TEXTURE_2D,et,O,J[0].width,J[0].height);for(let Y=0,R=J.length;Y<R;Y++)I=J[Y],j?e.texSubImage2D(i.TEXTURE_2D,Y,0,0,I.width,I.height,Ft,Dt,I.data):e.texImage2D(i.TEXTURE_2D,Y,O,I.width,I.height,0,Ft,Dt,I.data);M.generateMipmaps=!1}else j?(mt&&e.texStorage2D(i.TEXTURE_2D,et,O,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Ft,Dt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,O,rt.width,rt.height,0,Ft,Dt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){j&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,O,J[0].width,J[0].height,rt.depth);for(let Y=0,R=J.length;Y<R;Y++)I=J[Y],M.format!==dn?Ft!==null?j?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,I.width,I.height,rt.depth,Ft,I.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,O,I.width,I.height,rt.depth,0,I.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,I.width,I.height,rt.depth,Ft,Dt,I.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,O,I.width,I.height,rt.depth,0,Ft,Dt,I.data)}else{j&&mt&&e.texStorage2D(i.TEXTURE_2D,et,O,J[0].width,J[0].height);for(let Y=0,R=J.length;Y<R;Y++)I=J[Y],M.format!==dn?Ft!==null?j?e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,I.width,I.height,Ft,I.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,O,I.width,I.height,0,I.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?e.texSubImage2D(i.TEXTURE_2D,Y,0,0,I.width,I.height,Ft,Dt,I.data):e.texImage2D(i.TEXTURE_2D,Y,O,I.width,I.height,0,Ft,Dt,I.data)}else if(M.isDataArrayTexture)j?(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,O,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Ft,Dt,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,O,rt.width,rt.height,rt.depth,0,Ft,Dt,rt.data);else if(M.isData3DTexture)j?(mt&&e.texStorage3D(i.TEXTURE_3D,et,O,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Ft,Dt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,O,rt.width,rt.height,rt.depth,0,Ft,Dt,rt.data);else if(M.isFramebufferTexture){if(mt)if(j)e.texStorage2D(i.TEXTURE_2D,et,O,rt.width,rt.height);else{let Y=rt.width,R=rt.height;for(let it=0;it<et;it++)e.texImage2D(i.TEXTURE_2D,it,O,Y,R,0,Ft,Dt,null),Y>>=1,R>>=1}}else if(J.length>0&&Zt){j&&mt&&e.texStorage2D(i.TEXTURE_2D,et,O,J[0].width,J[0].height);for(let Y=0,R=J.length;Y<R;Y++)I=J[Y],j?e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ft,Dt,I):e.texImage2D(i.TEXTURE_2D,Y,O,Ft,Dt,I);M.generateMipmaps=!1}else j?(mt&&e.texStorage2D(i.TEXTURE_2D,et,O,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,Dt,rt)):e.texImage2D(i.TEXTURE_2D,0,O,Ft,Dt,rt);y(M,Zt)&&x(at),Mt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ft(T,M,H){if(M.image.length!==6)return;let at=tt(T,M),st=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);let ot=n.get(st);if(st.version!==ot.__version||at===!0){e.activeTexture(i.TEXTURE0+H);let Mt=te.getPrimaries(te.workingColorSpace),pt=M.colorSpace===nn?null:te.getPrimaries(M.colorSpace),ht=M.colorSpace===nn||Mt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Et=M.isCompressedTexture||M.image[0].isCompressedTexture,kt=M.image[0]&&M.image[0].isDataTexture,rt=[];for(let Y=0;Y<6;Y++)!Et&&!kt?rt[Y]=_(M.image[Y],!1,!0,s.maxCubemapSize):rt[Y]=kt?M.image[Y].image:M.image[Y],rt[Y]=Ot(M,rt[Y]);let Zt=rt[0],Ft=p(Zt)||o,Dt=r.convert(M.format,M.colorSpace),O=r.convert(M.type),I=E(M.internalFormat,Dt,O,M.colorSpace),J=o&&M.isVideoTexture!==!0,j=ot.__version===void 0||at===!0,mt=P(M,Zt,Ft);k(i.TEXTURE_CUBE_MAP,M,Ft);let et;if(Et){J&&j&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,I,Zt.width,Zt.height);for(let Y=0;Y<6;Y++){et=rt[Y].mipmaps;for(let R=0;R<et.length;R++){let it=et[R];M.format!==dn?Dt!==null?J?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,R,0,0,it.width,it.height,Dt,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,R,I,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,R,0,0,it.width,it.height,Dt,O,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,R,I,it.width,it.height,0,Dt,O,it.data)}}}else{et=M.mipmaps,J&&j&&(et.length>0&&mt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,I,rt[0].width,rt[0].height));for(let Y=0;Y<6;Y++)if(kt){J?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,rt[Y].width,rt[Y].height,Dt,O,rt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,I,rt[Y].width,rt[Y].height,0,Dt,O,rt[Y].data);for(let R=0;R<et.length;R++){let lt=et[R].image[Y].image;J?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,R+1,0,0,lt.width,lt.height,Dt,O,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,R+1,I,lt.width,lt.height,0,Dt,O,lt.data)}}else{J?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Dt,O,rt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,I,Dt,O,rt[Y]);for(let R=0;R<et.length;R++){let it=et[R];J?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,R+1,0,0,Dt,O,it.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,R+1,I,Dt,O,it.image[Y])}}}y(M,Ft)&&x(i.TEXTURE_CUBE_MAP),ot.__version=st.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function gt(T,M,H,at,st,ot){let Mt=r.convert(H.format,H.colorSpace),pt=r.convert(H.type),ht=E(H.internalFormat,Mt,pt,H.colorSpace);if(!n.get(M).__hasExternalTextures){let kt=Math.max(1,M.width>>ot),rt=Math.max(1,M.height>>ot);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,ot,ht,kt,rt,M.depth,0,Mt,pt,null):e.texImage2D(st,ot,ht,kt,rt,0,Mt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),vt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,st,n.get(H).__webglTexture,0,Nt(M)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,st,n.get(H).__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(T,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let at=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||vt(M)){let st=M.depthTexture;st&&st.isDepthTexture&&(st.type===zn?at=i.DEPTH_COMPONENT32F:st.type===Hn&&(at=i.DEPTH_COMPONENT24));let ot=Nt(M);vt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,at,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,at,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,at,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){let at=Nt(M);H&&vt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,M.width,M.height):vt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let at=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let st=0;st<at.length;st++){let ot=at[st],Mt=r.convert(ot.format,ot.colorSpace),pt=r.convert(ot.type),ht=E(ot.internalFormat,Mt,pt,ot.colorSpace),Et=Nt(M);H&&vt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ht,M.width,M.height):vt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,ht,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ht,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);let at=n.get(M.depthTexture).__webglTexture,st=Nt(M);if(M.depthTexture.format===di)vt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(M.depthTexture.format===$i)vt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function At(T){let M=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");It(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[at]),M.__webglDepthbuffer[at]=i.createRenderbuffer(),Lt(M.__webglDepthbuffer[at],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Lt(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(T,M,H){let at=n.get(T);M!==void 0&&gt(at.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&At(T)}function B(T){let M=T.texture,H=n.get(T),at=n.get(M);T.addEventListener("dispose",F),T.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=M.version,a.memory.textures++);let st=T.isWebGLCubeRenderTarget===!0,ot=T.isWebGLMultipleRenderTargets===!0,Mt=p(T)||o;if(st){H.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(o&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[pt]=[];for(let ht=0;ht<M.mipmaps.length;ht++)H.__webglFramebuffer[pt][ht]=i.createFramebuffer()}else H.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let pt=0;pt<M.mipmaps.length;pt++)H.__webglFramebuffer[pt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ot)if(s.drawBuffers){let pt=T.texture;for(let ht=0,Et=pt.length;ht<Et;ht++){let kt=n.get(pt[ht]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&vt(T)===!1){let pt=ot?M:[M];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ht=0;ht<pt.length;ht++){let Et=pt[ht];H.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ht]);let kt=r.convert(Et.format,Et.colorSpace),rt=r.convert(Et.type),Zt=E(Et.internalFormat,kt,rt,Et.colorSpace,T.isXRRenderTarget===!0),Ft=Nt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Zt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,H.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),k(i.TEXTURE_CUBE_MAP,M,Mt);for(let pt=0;pt<6;pt++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)gt(H.__webglFramebuffer[pt][ht],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ht);else gt(H.__webglFramebuffer[pt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);y(M,Mt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){let pt=T.texture;for(let ht=0,Et=pt.length;ht<Et;ht++){let kt=pt[ht],rt=n.get(kt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),k(i.TEXTURE_2D,kt,Mt),gt(H.__webglFramebuffer,T,kt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),y(kt,Mt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?pt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,at.__webglTexture),k(pt,M,Mt),o&&M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)gt(H.__webglFramebuffer[ht],T,M,i.COLOR_ATTACHMENT0,pt,ht);else gt(H.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,pt,0);y(M,Mt)&&x(pt),e.unbindTexture()}T.depthBuffer&&At(T)}function Kt(T){let M=p(T)||o,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let at=0,st=H.length;at<st;at++){let ot=H[at];if(y(ot,M)){let Mt=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pt=n.get(ot).__webglTexture;e.bindTexture(Mt,pt),x(Mt),e.unbindTexture()}}}function St(T){if(o&&T.samples>0&&vt(T)===!1){let M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,at=T.height,st=i.COLOR_BUFFER_BIT,ot=[],Mt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(T),ht=T.isWebGLMultipleRenderTargets===!0;if(ht)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){ot.push(i.COLOR_ATTACHMENT0+Et),T.depthBuffer&&ot.push(Mt);let kt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(kt===!1&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ht&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Et]),kt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Mt])),ht){let rt=n.get(M[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,H,at,0,0,H,at,st,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Et]);let kt=n.get(M[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function Nt(T){return Math.min(s.maxSamples,T.samples)}function vt(T){let M=n.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ee(T){let M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Ot(T,M){let H=T.colorSpace,at=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Oa||H!==Pn&&H!==nn&&(te.getTransfer(H)===ie?o===!1?t.has("EXT_sRGB")===!0&&at===dn?(T.format=Oa,T.minFilter=en,T.generateMipmaps=!1):M=mr.sRGBToLinear(M):(at!==dn||st!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=L,this.resetTextureUnits=nt,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=$,this.setTextureCube=z,this.rebindTextures=zt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=vt}function Qm(i,t,e){let n=e.isWebGL2;function s(r,a=nn){let o,l=te.getTransfer(a);if(r===Wn)return i.UNSIGNED_BYTE;if(r===wc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Wh)return i.BYTE;if(r===Xh)return i.SHORT;if(r===bo)return i.UNSIGNED_SHORT;if(r===Ec)return i.INT;if(r===Hn)return i.UNSIGNED_INT;if(r===zn)return i.FLOAT;if(r===ys)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===qh)return i.ALPHA;if(r===dn)return i.RGBA;if(r===Yh)return i.LUMINANCE;if(r===Zh)return i.LUMINANCE_ALPHA;if(r===di)return i.DEPTH_COMPONENT;if(r===$i)return i.DEPTH_STENCIL;if(r===Oa)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===$h)return i.RED;if(r===Ac)return i.RED_INTEGER;if(r===Jh)return i.RG;if(r===Rc)return i.RG_INTEGER;if(r===Cc)return i.RGBA_INTEGER;if(r===Qr||r===jr||r===ta||r===ea)if(l===ie)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Qr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Qr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ta)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ea)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ko||r===Qo||r===jo||r===tl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ko)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===el||r===nl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===el)return l===ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===nl)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===il||r===sl||r===rl||r===al||r===ol||r===ll||r===cl||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===il)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sl)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rl)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===al)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ol)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ll)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cl)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hl)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ul)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dl)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fl)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pl)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ml)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gl)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===na||r===_l||r===xl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===na)return l===ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_l)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kh||r===yl||r===vl||r===Ml)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===na)return o.COMPRESSED_RED_RGTC1_EXT;if(r===yl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ml)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ui?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Qa=class extends ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},jm={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ja=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,_=e.getContextAttributes(),p=null,d=null,y=[],x=[],E=new xt,P=null,S=new ye;S.layers.enable(1),S.viewport=new le;let C=new ye;C.layers.enable(2),C.viewport=new le;let F=[S,C],v=new Qa;v.layers.enable(1),v.layers.enable(2);let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let tt=y[k];return tt===void 0&&(tt=new ms,y[k]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(k){let tt=y[k];return tt===void 0&&(tt=new ms,y[k]=tt),tt.getGripSpace()},this.getHand=function(k){let tt=y[k];return tt===void 0&&(tt=new ms,y[k]=tt),tt.getHandSpace()};function X(k){let tt=x.indexOf(k.inputSource);if(tt===-1)return;let ut=y[tt];ut!==void 0&&(ut.update(k.inputSource,k.frame,c||a),ut.dispatchEvent({type:k.type,data:k.inputSource}))}function nt(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",L);for(let k=0;k<y.length;k++){let tt=x[k];tt!==null&&(x[k]=null,y[k].disconnect(tt))}w=null,D=null,t.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let tt={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Ln(m.framebufferWidth,m.framebufferHeight,{format:dn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,ut=null,ft=null;_.depth&&(ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?$i:di,ut=_.stencil?ui:Hn);let gt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Ln(f.textureWidth,f.textureHeight,{format:dn,type:Wn,depthTexture:new wr(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Lt=t.properties.get(d);Lt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(k){for(let tt=0;tt<k.removed.length;tt++){let ut=k.removed[tt],ft=x.indexOf(ut);ft>=0&&(x[ft]=null,y[ft].disconnect(ut))}for(let tt=0;tt<k.added.length;tt++){let ut=k.added[tt],ft=x.indexOf(ut);if(ft===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=x.length){x.push(ut),ft=Lt;break}else if(x[Lt]===null){x[Lt]=ut,ft=Lt;break}if(ft===-1)break}let gt=y[ft];gt&&gt.connect(ut)}}let N=new A,q=new A;function Q(k,tt,ut){N.setFromMatrixPosition(tt.matrixWorld),q.setFromMatrixPosition(ut.matrixWorld);let ft=N.distanceTo(q),gt=tt.projectionMatrix.elements,Lt=ut.projectionMatrix.elements,It=gt[14]/(gt[10]-1),At=gt[14]/(gt[10]+1),zt=(gt[9]+1)/gt[5],B=(gt[9]-1)/gt[5],Kt=(gt[8]-1)/gt[0],St=(Lt[8]+1)/Lt[0],Nt=It*Kt,vt=It*St,ee=ft/(-Kt+St),Ot=ee*-Kt;tt.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ot),k.translateZ(ee),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let T=It+ee,M=At+ee,H=Nt-Ot,at=vt+(ft-Ot),st=zt*At/M*T,ot=B*At/M*T;k.projectionMatrix.makePerspective(H,at,st,ot,T,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function $(k,tt){tt===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(tt.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;v.near=C.near=S.near=k.near,v.far=C.far=S.far=k.far,(w!==v.near||D!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,D=v.far);let tt=k.parent,ut=v.cameras;$(v,tt);for(let ft=0;ft<ut.length;ft++)$(ut[ft],tt);ut.length===2?Q(v,S,C):v.projectionMatrix.copy(S.projectionMatrix),z(k,v,tt)};function z(k,tt,ut){ut===null?k.matrix.copy(tt.matrixWorld):(k.matrix.copy(ut.matrixWorld),k.matrix.invert(),k.matrix.multiply(tt.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(tt.projectionMatrix),k.projectionMatrixInverse.copy(tt.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ba*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let K=null;function Z(k,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let ut=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let ft=!1;ut.length!==v.cameras.length&&(v.cameras.length=0,ft=!0);for(let gt=0;gt<ut.length;gt++){let Lt=ut[gt],It=null;if(m!==null)It=m.getViewport(Lt);else{let zt=u.getViewSubImage(f,Lt);It=zt.viewport,gt===0&&(t.setRenderTargetTextures(d,zt.colorTexture,f.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(d))}let At=F[gt];At===void 0&&(At=new ye,At.layers.enable(gt),At.viewport=new le,F[gt]=At),At.matrix.fromArray(Lt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Lt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(It.x,It.y,It.width,It.height),gt===0&&(v.matrix.copy(At.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ft===!0&&v.cameras.push(At)}}for(let ut=0;ut<y.length;ut++){let ft=x[ut],gt=y[ut];ft!==null&&gt!==void 0&&gt.update(ft,tt,c||a)}K&&K(k,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ct=new Bc;ct.setAnimationLoop(Z),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}};function t0(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Oc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,y,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ge&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ge&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y=t.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=x*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ge&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){let y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function e0(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let E=x.program;n.uniformBlockBinding(y,E)}function c(y,x){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",p));let P=x.program;n.updateUBOMapping(y,P);let S=t.render.frame;r[y.id]!==S&&(f(y),r[y.id]=S)}function h(y){let x=u();y.__bindingPointIndex=x;let E=i.createBuffer(),P=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],E=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,C=E.length;S<C;S++){let F=Array.isArray(E[S])?E[S]:[E[S]];for(let v=0,w=F.length;v<w;v++){let D=F[v];if(m(D,S,v,P)===!0){let X=D.__offset,nt=Array.isArray(D.value)?D.value:[D.value],L=0;for(let N=0;N<nt.length;N++){let q=nt[N],Q=_(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,X+L,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,L),L+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,E,P){let S=y.value,C=x+"_"+E;if(P[C]===void 0)return typeof S=="number"||typeof S=="boolean"?P[C]=S:P[C]=S.clone(),!0;{let F=P[C];if(typeof S=="number"||typeof S=="boolean"){if(F!==S)return P[C]=S,!0}else if(F.equals(S)===!1)return F.copy(S),!0}return!1}function g(y){let x=y.uniforms,E=0,P=16;for(let C=0,F=x.length;C<F;C++){let v=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,D=v.length;w<D;w++){let X=v[w],nt=Array.isArray(X.value)?X.value:[X.value];for(let L=0,N=nt.length;L<N;L++){let q=nt[L],Q=_(q),$=E%P;$!==0&&P-$<Q.boundary&&(E+=P-$),X.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=Q.storage}}}let S=E%P;return S>0&&(E+=P-S),y.__size=E,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){let x=y.target;x.removeEventListener("dispose",p);let E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var gi=class{constructor(t={}){let{canvas:e=cu(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this._useLegacyLights=!1,this.toneMapping=Gn,this.toneMappingExposure=1;let x=this,E=!1,P=0,S=0,C=null,F=-1,v=null,w=new le,D=new le,X=null,nt=new Pt(0),L=0,N=e.width,q=e.height,Q=1,$=null,z=null,K=new le(0,0,N,q),Z=new le(0,0,N,q),ct=!1,k=new vs,tt=!1,ut=!1,ft=null,gt=new Yt,Lt=new xt,It=new A,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function zt(){return C===null?Q:1}let B=n;function Kt(b,U){for(let G=0;G<b.length;G++){let W=b[G],V=e.getContext(W,U);if(V!==null)return V}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",R,!1),e.addEventListener("webglcontextcreationerror",it,!1),B===null){let U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),B=Kt(U,b),B===null)throw Kt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let St,Nt,vt,ee,Ot,T,M,H,at,st,ot,Mt,pt,ht,Et,kt,rt,Zt,Ft,Dt,O,I,J,j;function mt(){St=new vp(B),Nt=new pp(B,St,t),St.init(Nt),I=new Qm(B,St,Nt),vt=new Jm(B,St,Nt),ee=new bp(B),Ot=new Bm,T=new Km(B,St,vt,Ot,Nt,I,ee),M=new gp(x),H=new yp(x),at=new Pu(B,Nt),J=new dp(B,St,at,Nt),st=new Mp(B,at,ee,J),ot=new Ap(B,st,at,ee),Ft=new Tp(B,Nt,T),kt=new mp(Ot),Mt=new Om(x,M,H,St,Nt,J,kt),pt=new t0(x,Ot),ht=new Hm,Et=new qm(St,Nt),Zt=new up(x,M,H,vt,ot,f,l),rt=new $m(x,ot,Nt),j=new e0(B,ee,Nt,vt),Dt=new fp(B,St,ee,Nt),O=new Sp(B,St,ee,Nt),ee.programs=Mt.programs,x.capabilities=Nt,x.extensions=St,x.properties=Ot,x.renderLists=ht,x.shadowMap=rt,x.state=vt,x.info=ee}mt();let et=new ja(x,B);this.xr=et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=St.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=St.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(N,q,!1))},this.getSize=function(b){return b.set(N,q)},this.setSize=function(b,U,G=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,q=U,e.width=Math.floor(b*Q),e.height=Math.floor(U*Q),G===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(N*Q,q*Q).floor()},this.setDrawingBufferSize=function(b,U,G){N=b,q=U,Q=G,e.width=Math.floor(b*G),e.height=Math.floor(U*G),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,U,G,W){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,U,G,W),vt.viewport(w.copy(K).multiplyScalar(Q).floor())},this.getScissor=function(b){return b.copy(Z)},this.setScissor=function(b,U,G,W){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,U,G,W),vt.scissor(D.copy(Z).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(b){vt.setScissorTest(ct=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){z=b},this.getClearColor=function(b){return b.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(b=!0,U=!0,G=!0){let W=0;if(b){let V=!1;if(C!==null){let yt=C.texture.format;V=yt===Cc||yt===Rc||yt===Ac}if(V){let yt=C.texture.type,bt=yt===Wn||yt===Hn||yt===bo||yt===ui||yt===wc||yt===Tc,Ct=Zt.getClearColor(),Ut=Zt.getClearAlpha(),Wt=Ct.r,Bt=Ct.g,Ht=Ct.b;bt?(m[0]=Wt,m[1]=Bt,m[2]=Ht,m[3]=Ut,B.clearBufferuiv(B.COLOR,0,m)):(g[0]=Wt,g[1]=Bt,g[2]=Ht,g[3]=Ut,B.clearBufferiv(B.COLOR,0,g))}else W|=B.COLOR_BUFFER_BIT}U&&(W|=B.DEPTH_BUFFER_BIT),G&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",R,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ht.dispose(),Et.dispose(),Ot.dispose(),M.dispose(),H.dispose(),ot.dispose(),J.dispose(),j.dispose(),Mt.dispose(),et.dispose(),et.removeEventListener("sessionstart",Ee),et.removeEventListener("sessionend",ne),ft&&(ft.dispose(),ft=null),Fe.stop()};function Y(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=ee.autoReset,U=rt.enabled,G=rt.autoUpdate,W=rt.needsUpdate,V=rt.type;mt(),ee.autoReset=b,rt.enabled=U,rt.autoUpdate=G,rt.needsUpdate=W,rt.type=V}function it(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){let U=b.target;U.removeEventListener("dispose",lt),wt(U)}function wt(b){Tt(b),Ot.remove(b)}function Tt(b){let U=Ot.get(b).programs;U!==void 0&&(U.forEach(function(G){Mt.releaseProgram(G)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,G,W,V,yt){U===null&&(U=At);let bt=V.isMesh&&V.matrixWorld.determinant()<0,Ct=oh(b,U,G,W,V);vt.setMaterial(W,bt);let Ut=G.index,Wt=1;if(W.wireframe===!0){if(Ut=st.getWireframeAttribute(G),Ut===void 0)return;Wt=2}let Bt=G.drawRange,Ht=G.attributes.position,ge=Bt.start*Wt,Ye=(Bt.start+Bt.count)*Wt;yt!==null&&(ge=Math.max(ge,yt.start*Wt),Ye=Math.min(Ye,(yt.start+yt.count)*Wt)),Ut!==null?(ge=Math.max(ge,0),Ye=Math.min(Ye,Ut.count)):Ht!=null&&(ge=Math.max(ge,0),Ye=Math.min(Ye,Ht.count));let we=Ye-ge;if(we<0||we===1/0)return;J.setup(V,W,Ct,G,Ut);let vn,he=Dt;if(Ut!==null&&(vn=at.get(Ut),he=O,he.setIndex(vn)),V.isMesh)W.wireframe===!0?(vt.setLineWidth(W.wireframeLinewidth*zt()),he.setMode(B.LINES)):he.setMode(B.TRIANGLES);else if(V.isLine){let Xt=W.linewidth;Xt===void 0&&(Xt=1),vt.setLineWidth(Xt*zt()),V.isLineSegments?he.setMode(B.LINES):V.isLineLoop?he.setMode(B.LINE_LOOP):he.setMode(B.LINE_STRIP)}else V.isPoints?he.setMode(B.POINTS):V.isSprite&&he.setMode(B.TRIANGLES);if(V.isBatchedMesh)he.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)he.renderInstances(ge,we,V.count);else if(G.isInstancedBufferGeometry){let Xt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Yr=Math.min(G.instanceCount,Xt);he.renderInstances(ge,we,Yr)}else he.render(ge,we)};function Jt(b,U,G){b.transparent===!0&&b.side===Ae&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,Ds(b,U,G),b.side=Xn,b.needsUpdate=!0,Ds(b,U,G),b.side=Ae):Ds(b,U,G)}this.compile=function(b,U,G=null){G===null&&(G=b),p=Et.get(G),p.init(),y.push(p),G.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),b!==G&&b.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(x._useLegacyLights);let W=new Set;return b.traverse(function(V){let yt=V.material;if(yt)if(Array.isArray(yt))for(let bt=0;bt<yt.length;bt++){let Ct=yt[bt];Jt(Ct,G,V),W.add(Ct)}else Jt(yt,G,V),W.add(yt)}),y.pop(),p=null,W},this.compileAsync=function(b,U,G=null){let W=this.compile(b,U,G);return new Promise(V=>{function yt(){if(W.forEach(function(bt){Ot.get(bt).currentProgram.isReady()&&W.delete(bt)}),W.size===0){V(b);return}setTimeout(yt,10)}St.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Qt=null;function me(b){Qt&&Qt(b)}function Ee(){Fe.stop()}function ne(){Fe.start()}let Fe=new Bc;Fe.setAnimationLoop(me),typeof self!="undefined"&&Fe.setContext(self),this.setAnimationLoop=function(b){Qt=b,et.setAnimationLoop(b),b===null?Fe.stop():Fe.start()},et.addEventListener("sessionstart",Ee),et.addEventListener("sessionend",ne),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(U),U=et.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,C),p=Et.get(b,y.length),p.init(),y.push(p),gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),k.setFromProjectionMatrix(gt),ut=this.localClippingEnabled,tt=kt.init(this.clippingPlanes,ut),_=ht.get(b,d.length),_.init(),d.push(_),gn(b,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort($,z),this.info.render.frame++,tt===!0&&kt.beginShadows();let G=p.state.shadowsArray;if(rt.render(G,b,U),tt===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Zt.render(_,b),p.setupLights(x._useLegacyLights),U.isArrayCamera){let W=U.cameras;for(let V=0,yt=W.length;V<yt;V++){let bt=W[V];ko(_,b,bt,bt.viewport)}}else ko(_,b,U);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,U),J.resetDefaultState(),F=-1,v=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function gn(b,U,G,W){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||k.intersectsSprite(b)){W&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);let bt=ot.update(b),Ct=b.material;Ct.visible&&_.push(b,bt,Ct,G,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||k.intersectsObject(b))){let bt=ot.update(b),Ct=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),It.copy(bt.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(Ct)){let Ut=bt.groups;for(let Wt=0,Bt=Ut.length;Wt<Bt;Wt++){let Ht=Ut[Wt],ge=Ct[Ht.materialIndex];ge&&ge.visible&&_.push(b,bt,ge,G,It.z,Ht)}}else Ct.visible&&_.push(b,bt,Ct,G,It.z,null)}}let yt=b.children;for(let bt=0,Ct=yt.length;bt<Ct;bt++)gn(yt[bt],U,G,W)}function ko(b,U,G,W){let V=b.opaque,yt=b.transmissive,bt=b.transparent;p.setupLightsView(G),tt===!0&&kt.setGlobalState(x.clippingPlanes,G),yt.length>0&&ah(V,yt,U,G),W&&vt.viewport(w.copy(W)),V.length>0&&Is(V,U,G),yt.length>0&&Is(yt,U,G),bt.length>0&&Is(bt,U,G),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ah(b,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let yt=Nt.isWebGL2;ft===null&&(ft=new Ln(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?ys:Wn,minFilter:xs,samples:yt?4:0})),x.getDrawingBufferSize(Lt),yt?ft.setSize(Lt.x,Lt.y):ft.setSize(ka(Lt.x),ka(Lt.y));let bt=x.getRenderTarget();x.setRenderTarget(ft),x.getClearColor(nt),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Ct=x.toneMapping;x.toneMapping=Gn,Is(b,G,W),T.updateMultisampleRenderTarget(ft),T.updateRenderTargetMipmap(ft);let Ut=!1;for(let Wt=0,Bt=U.length;Wt<Bt;Wt++){let Ht=U[Wt],ge=Ht.object,Ye=Ht.geometry,we=Ht.material,vn=Ht.group;if(we.side===Ae&&ge.layers.test(W.layers)){let he=we.side;we.side=Ge,we.needsUpdate=!0,Ho(ge,G,W,Ye,we,vn),we.side=he,we.needsUpdate=!0,Ut=!0}}Ut===!0&&(T.updateMultisampleRenderTarget(ft),T.updateRenderTargetMipmap(ft)),x.setRenderTarget(bt),x.setClearColor(nt,L),x.toneMapping=Ct}function Is(b,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let V=0,yt=b.length;V<yt;V++){let bt=b[V],Ct=bt.object,Ut=bt.geometry,Wt=W===null?bt.material:W,Bt=bt.group;Ct.layers.test(G.layers)&&Ho(Ct,U,G,Ut,Wt,Bt)}}function Ho(b,U,G,W,V,yt){b.onBeforeRender(x,U,G,W,V,yt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(x,U,G,W,b,yt),V.transparent===!0&&V.side===Ae&&V.forceSinglePass===!1?(V.side=Ge,V.needsUpdate=!0,x.renderBufferDirect(G,U,W,V,b,yt),V.side=Xn,V.needsUpdate=!0,x.renderBufferDirect(G,U,W,V,b,yt),V.side=Ae):x.renderBufferDirect(G,U,W,V,b,yt),b.onAfterRender(x,U,G,W,V,yt)}function Ds(b,U,G){U.isScene!==!0&&(U=At);let W=Ot.get(b),V=p.state.lights,yt=p.state.shadowsArray,bt=V.state.version,Ct=Mt.getParameters(b,V.state,yt,U,G),Ut=Mt.getProgramCacheKey(Ct),Wt=W.programs;W.environment=b.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(b.isMeshStandardMaterial?H:M).get(b.envMap||W.environment),Wt===void 0&&(b.addEventListener("dispose",lt),Wt=new Map,W.programs=Wt);let Bt=Wt.get(Ut);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===bt)return Vo(b,Ct),Bt}else Ct.uniforms=Mt.getUniforms(b),b.onBuild(G,Ct,x),b.onBeforeCompile(Ct,x),Bt=Mt.acquireProgram(Ct,Ut),Wt.set(Ut,Bt),W.uniforms=Ct.uniforms;let Ht=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ht.clippingPlanes=kt.uniform),Vo(b,Ct),W.needsLights=ch(b),W.lightsStateVersion=bt,W.needsLights&&(Ht.ambientLightColor.value=V.state.ambient,Ht.lightProbe.value=V.state.probe,Ht.directionalLights.value=V.state.directional,Ht.directionalLightShadows.value=V.state.directionalShadow,Ht.spotLights.value=V.state.spot,Ht.spotLightShadows.value=V.state.spotShadow,Ht.rectAreaLights.value=V.state.rectArea,Ht.ltc_1.value=V.state.rectAreaLTC1,Ht.ltc_2.value=V.state.rectAreaLTC2,Ht.pointLights.value=V.state.point,Ht.pointLightShadows.value=V.state.pointShadow,Ht.hemisphereLights.value=V.state.hemi,Ht.directionalShadowMap.value=V.state.directionalShadowMap,Ht.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ht.spotShadowMap.value=V.state.spotShadowMap,Ht.spotLightMatrix.value=V.state.spotLightMatrix,Ht.spotLightMap.value=V.state.spotLightMap,Ht.pointShadowMap.value=V.state.pointShadowMap,Ht.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function zo(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Xi.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Vo(b,U){let G=Ot.get(b);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function oh(b,U,G,W,V){U.isScene!==!0&&(U=At),T.resetTextureUnits();let yt=U.fog,bt=W.isMeshStandardMaterial?U.environment:null,Ct=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pn,Ut=(W.isMeshStandardMaterial?H:M).get(W.envMap||bt),Wt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ht=!!G.morphAttributes.position,ge=!!G.morphAttributes.normal,Ye=!!G.morphAttributes.color,we=Gn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(we=x.toneMapping);let vn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=vn!==void 0?vn.length:0,Xt=Ot.get(W),Yr=p.state.lights;if(tt===!0&&(ut===!0||b!==v)){let je=b===v&&W.id===F;kt.setState(W,b,je)}let fe=!1;W.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Yr.state.version||Xt.outputColorSpace!==Ct||V.isBatchedMesh&&Xt.batching===!1||!V.isBatchedMesh&&Xt.batching===!0||V.isInstancedMesh&&Xt.instancing===!1||!V.isInstancedMesh&&Xt.instancing===!0||V.isSkinnedMesh&&Xt.skinning===!1||!V.isSkinnedMesh&&Xt.skinning===!0||V.isInstancedMesh&&Xt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xt.instancingColor===!1&&V.instanceColor!==null||Xt.envMap!==Ut||W.fog===!0&&Xt.fog!==yt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==kt.numPlanes||Xt.numIntersection!==kt.numIntersection)||Xt.vertexAlphas!==Wt||Xt.vertexTangents!==Bt||Xt.morphTargets!==Ht||Xt.morphNormals!==ge||Xt.morphColors!==Ye||Xt.toneMapping!==we||Nt.isWebGL2===!0&&Xt.morphTargetsCount!==he)&&(fe=!0):(fe=!0,Xt.__version=W.version);let ni=Xt.currentProgram;fe===!0&&(ni=Ds(W,U,V));let Go=!1,rs=!1,Zr=!1,De=ni.getUniforms(),ii=Xt.uniforms;if(vt.useProgram(ni.program)&&(Go=!0,rs=!0,Zr=!0),W.id!==F&&(F=W.id,rs=!0),Go||v!==b){De.setValue(B,"projectionMatrix",b.projectionMatrix),De.setValue(B,"viewMatrix",b.matrixWorldInverse);let je=De.map.cameraPosition;je!==void 0&&je.setValue(B,It.setFromMatrixPosition(b.matrixWorld)),Nt.logarithmicDepthBuffer&&De.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&De.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,rs=!0,Zr=!0)}if(V.isSkinnedMesh){De.setOptional(B,V,"bindMatrix"),De.setOptional(B,V,"bindMatrixInverse");let je=V.skeleton;je&&(Nt.floatVertexTextures?(je.boneTexture===null&&je.computeBoneTexture(),De.setValue(B,"boneTexture",je.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(De.setOptional(B,V,"batchingTexture"),De.setValue(B,"batchingTexture",V._matricesTexture,T));let $r=G.morphAttributes;if(($r.position!==void 0||$r.normal!==void 0||$r.color!==void 0&&Nt.isWebGL2===!0)&&Ft.update(V,G,ni),(rs||Xt.receiveShadow!==V.receiveShadow)&&(Xt.receiveShadow=V.receiveShadow,De.setValue(B,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ii.envMap.value=Ut,ii.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),rs&&(De.setValue(B,"toneMappingExposure",x.toneMappingExposure),Xt.needsLights&&lh(ii,Zr),yt&&W.fog===!0&&pt.refreshFogUniforms(ii,yt),pt.refreshMaterialUniforms(ii,W,Q,q,ft),Xi.upload(B,zo(Xt),ii,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Xi.upload(B,zo(Xt),ii,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&De.setValue(B,"center",V.center),De.setValue(B,"modelViewMatrix",V.modelViewMatrix),De.setValue(B,"normalMatrix",V.normalMatrix),De.setValue(B,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let je=W.uniformsGroups;for(let Jr=0,hh=je.length;Jr<hh;Jr++)if(Nt.isWebGL2){let Wo=je[Jr];j.update(Wo,ni),j.bind(Wo,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function lh(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ch(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,U,G){Ot.get(b.texture).__webglTexture=U,Ot.get(b.depthTexture).__webglTexture=G;let W=Ot.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){let G=Ot.get(b);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,G=0){C=b,P=U,S=G;let W=!0,V=null,yt=!1,bt=!1;if(b){let Ut=Ot.get(b);Ut.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):Ut.__webglFramebuffer===void 0?T.setupRenderTarget(b):Ut.__hasExternalTextures&&T.rebindTextures(b,Ot.get(b.texture).__webglTexture,Ot.get(b.depthTexture).__webglTexture);let Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(bt=!0);let Bt=Ot.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?V=Bt[U][G]:V=Bt[U],yt=!0):Nt.isWebGL2&&b.samples>0&&T.useMultisampledRTT(b)===!1?V=Ot.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?V=Bt[G]:V=Bt,w.copy(b.viewport),D.copy(b.scissor),X=b.scissorTest}else w.copy(K).multiplyScalar(Q).floor(),D.copy(Z).multiplyScalar(Q).floor(),X=ct;if(vt.bindFramebuffer(B.FRAMEBUFFER,V)&&Nt.drawBuffers&&W&&vt.drawBuffers(b,V),vt.viewport(w),vt.scissor(D),vt.setScissorTest(X),yt){let Ut=Ot.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ut.__webglTexture,G)}else if(bt){let Ut=Ot.get(b.texture),Wt=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.__webglTexture,G||0,Wt)}F=-1},this.readRenderTargetPixels=function(b,U,G,W,V,yt,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){vt.bindFramebuffer(B.FRAMEBUFFER,Ct);try{let Ut=b.texture,Wt=Ut.format,Bt=Ut.type;if(Wt!==dn&&I.convert(Wt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ht=Bt===ys&&(St.has("EXT_color_buffer_half_float")||Nt.isWebGL2&&St.has("EXT_color_buffer_float"));if(Bt!==Wn&&I.convert(Bt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===zn&&(Nt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-W&&G>=0&&G<=b.height-V&&B.readPixels(U,G,W,V,I.convert(Wt),I.convert(Bt),yt)}finally{let Ut=C!==null?Ot.get(C).__webglFramebuffer:null;vt.bindFramebuffer(B.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(b,U,G=0){let W=Math.pow(2,-G),V=Math.floor(U.image.width*W),yt=Math.floor(U.image.height*W);T.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,b.x,b.y,V,yt),vt.unbindTexture()},this.copyTextureToTexture=function(b,U,G,W=0){let V=U.image.width,yt=U.image.height,bt=I.convert(G.format),Ct=I.convert(G.type);T.setTexture2D(G,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,b.x,b.y,V,yt,bt,Ct,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,bt,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,b.x,b.y,bt,Ct,U.image),W===0&&G.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,G,W,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let yt=b.max.x-b.min.x+1,bt=b.max.y-b.min.y+1,Ct=b.max.z-b.min.z+1,Ut=I.convert(W.format),Wt=I.convert(W.type),Bt;if(W.isData3DTexture)T.setTexture3D(W,0),Bt=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)T.setTexture2DArray(W,0),Bt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);let Ht=B.getParameter(B.UNPACK_ROW_LENGTH),ge=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ye=B.getParameter(B.UNPACK_SKIP_PIXELS),we=B.getParameter(B.UNPACK_SKIP_ROWS),vn=B.getParameter(B.UNPACK_SKIP_IMAGES),he=G.isCompressedTexture?G.mipmaps[V]:G.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,he.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,b.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,b.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,b.min.z),G.isDataTexture||G.isData3DTexture?B.texSubImage3D(Bt,V,U.x,U.y,U.z,yt,bt,Ct,Ut,Wt,he.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Bt,V,U.x,U.y,U.z,yt,bt,Ct,Ut,he.data)):B.texSubImage3D(Bt,V,U.x,U.y,U.z,yt,bt,Ct,Ut,Wt,he),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ge),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ye),B.pixelStorei(B.UNPACK_SKIP_ROWS,we),B.pixelStorei(B.UNPACK_SKIP_IMAGES,vn),V===0&&W.generateMipmaps&&B.generateMipmap(Bt),vt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),vt.unbindTexture()},this.resetState=function(){P=0,S=0,C=null,vt.reset(),J.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Eo?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===kr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===oe?fi:Lc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===fi?oe:Pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},to=class extends gi{};to.prototype.isWebGL1Renderer=!0;var Tr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Jn=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ar=class extends pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hi=new Yt,dc=new Yt,nr=[],fc=new In,n0=new Yt,us=new _t,ds=new Yn,rn=class extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,n0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),fc.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(fc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),ds.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hi),dc.multiplyMatrices(n,Hi),us.matrixWorld=dc,us.raycast(t,nr);for(let a=0,o=nr.length;a<o;a++){let l=nr[a];l.instanceId=r,l.object=this,e.push(l)}nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var _i=class extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pc=new Yt,eo=new xr,ir=new Yn,sr=new A,Kn=class extends Re{constructor(t=new se,e=new _i){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;pc.copy(s).invert(),eo.copy(t.ray).applyMatrix4(pc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,_=m;g<_;g++){let p=c.getX(g);sr.fromBufferAttribute(u,p),mc(sr,p,l,s,t,e,this)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,_=m;g<_;g++)sr.fromBufferAttribute(u,g),mc(sr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mc(i,t,e,n,s,r,a){let o=eo.distanceSqToPoint(i);if(o<e){let l=new A;eo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var Ki=class extends sn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},an=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,m=(a-h)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new xt:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,s=[],r=[],a=[],o=new A,l=new Yt;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Pe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Pe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ms=class extends an{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new xt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},no=class extends Ms{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function To(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,m*=h,s(a,o,f,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var rr=new A,Ra=new To,Ca=new To,Pa=new To,Ss=class extends an{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(rr.subVectors(s[0],s[1]).add(s[0]),c=rr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(rr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rr),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Ra.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),Ca.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),Pa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ca.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Pa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ra.calc(l),Ca.calc(l),Pa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function i0(i,t){let e=1-i;return e*e*t}function s0(i,t){return 2*(1-i)*i*t}function r0(i,t){return i*i*t}function gs(i,t,e,n){return i0(i,t)+s0(i,e)+r0(i,n)}function a0(i,t){let e=1-i;return e*e*e*t}function o0(i,t){let e=1-i;return 3*e*e*i*t}function l0(i,t){return 3*(1-i)*i*i*t}function c0(i,t){return i*i*i*t}function _s(i,t,e,n,s){return a0(i,t)+o0(i,e)+l0(i,n)+c0(i,s)}var Rr=class extends an{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(t,s.x,r.x,a.x,o.x),_s(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},io=class extends an{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(t,s.x,r.x,a.x,o.x),_s(t,s.y,r.y,a.y,o.y),_s(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cr=class extends an{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},so=class extends an{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends an{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gs(t,s.x,r.x,a.x),gs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ro=class extends an{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gs(t,s.x,r.x,a.x),gs(t,s.y,r.y,a.y),gs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lr=class extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(gc(o,l.x,c.x,h.x,u.x),gc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},_c=Object.freeze({__proto__:null,ArcCurve:no,CatmullRomCurve3:Ss,CubicBezierCurve:Rr,CubicBezierCurve3:io,EllipseCurve:Ms,LineCurve:Cr,LineCurve3:so,QuadraticBezierCurve:Pr,QuadraticBezierCurve3:ro,SplineCurve:Lr}),ao=class extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _c[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new _c[s.type]().fromJSON(s))}return this}},oo=class extends ao{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Cr(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Pr(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Rr(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ms(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},lo=class i extends se{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new A,f=new xt,m=new A,g=new A,_=new A,p=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,m.x=d*1,m.y=-p,m.z=d*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,m.x=d*1,m.y=-p,m.z=d*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*s,E=Math.sin(x),P=Math.cos(x);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*E,u.y=t[S].y,u.z=t[S].x*P,a.push(u.x,u.y,u.z),f.x=y/e,f.y=S/(t.length-1),o.push(f.x,f.y);let C=l[3*S+0]*E,F=l[3*S+1],v=l[3*S+0]*P;c.push(C,F,v)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let E=x+y*t.length,P=E,S=E+t.length,C=E+t.length+1,F=E+1;r.push(P,S,F),r.push(C,F,S)}this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("uv",new $t(o,2)),this.setAttribute("normal",new $t(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ir=class i extends lo{constructor(t=1,e=1,n=4,s=8){let r=new oo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Dr=class i extends se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new A,h=new xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let m=n+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ue=class i extends se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],m=[],g=0,_=[],p=n/2,d=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(m,2));function y(){let E=new A,P=new A,S=0,C=(e-t)/n;for(let F=0;F<=r;F++){let v=[],w=F/r,D=w*(e-t)+t;for(let X=0;X<=s;X++){let nt=X/s,L=nt*l+o,N=Math.sin(L),q=Math.cos(L);P.x=D*N,P.y=-w*n+p,P.z=D*q,u.push(P.x,P.y,P.z),E.set(N,C,q).normalize(),f.push(E.x,E.y,E.z),m.push(nt,1-w),v.push(g++)}_.push(v)}for(let F=0;F<s;F++)for(let v=0;v<r;v++){let w=_[v][F],D=_[v+1][F],X=_[v+1][F+1],nt=_[v][F+1];h.push(w,D,nt),h.push(D,X,nt),S+=6}c.addGroup(d,S,0),d+=S}function x(E){let P=g,S=new xt,C=new A,F=0,v=E===!0?t:e,w=E===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;let D=g;for(let X=0;X<=s;X++){let L=X/s*l+o,N=Math.cos(L),q=Math.sin(L);C.x=v*q,C.y=p*w,C.z=v*N,u.push(C.x,C.y,C.z),f.push(0,w,0),S.x=N*.5+.5,S.y=q*.5*w+.5,m.push(S.x,S.y),g++}for(let X=0;X<s;X++){let nt=P+X,L=D+X;E===!0?h.push(L,L+1,nt):h.push(L+1,L,nt),F+=3}c.addGroup(d,F,E===!0?1:2),d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dn=class i extends ue{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ur=class i extends se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new A,E=new A,P=new A;for(let S=0;S<e.length;S+=3)m(e[S+0],x),m(e[S+1],E),m(e[S+2],P),l(x,E,P,y)}function l(y,x,E,P){let S=P+1,C=[];for(let F=0;F<=S;F++){C[F]=[];let v=y.clone().lerp(E,F/S),w=x.clone().lerp(E,F/S),D=S-F;for(let X=0;X<=D;X++)X===0&&F===S?C[F][X]=v:C[F][X]=v.clone().lerp(w,X/D)}for(let F=0;F<S;F++)for(let v=0;v<2*(S-F)-1;v++){let w=Math.floor(v/2);v%2===0?(f(C[F][w+1]),f(C[F+1][w]),f(C[F][w])):(f(C[F][w+1]),f(C[F+1][w+1]),f(C[F+1][w]))}}function c(y){let x=new A;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(y),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){let y=new A;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let E=p(y)/2/Math.PI+.5,P=d(y)/Math.PI+.5;a.push(E,1-P)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],E=a[y+2],P=a[y+4],S=Math.max(x,E,P),C=Math.min(x,E,P);S>.9&&C<.1&&(x<.2&&(a[y+0]+=1),E<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,x){let E=y*3;x.x=t[E+0],x.y=t[E+1],x.z=t[E+2]}function g(){let y=new A,x=new A,E=new A,P=new A,S=new xt,C=new xt,F=new xt;for(let v=0,w=0;v<r.length;v+=9,w+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),E.set(r[v+6],r[v+7],r[v+8]),S.set(a[w+0],a[w+1]),C.set(a[w+2],a[w+3]),F.set(a[w+4],a[w+5]),P.copy(y).add(x).add(E).divideScalar(3);let D=p(P);_(S,w+0,y,D),_(C,w+2,x,D),_(F,w+4,E,D)}}function _(y,x,E,P){P<0&&y.x===1&&(a[x]=y.x-1),E.x===0&&E.z===0&&(a[x]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Qi=class i extends Ur{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Qn=class i extends Ur{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Nr=class i extends se{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,m=new A,g=new xt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){let d=r+p/n*a;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let p=_*(n+1);for(let d=0;d<n;d++){let y=d+p,x=y,E=y+n+1,P=y+n+2,S=y+1;o.push(x,E,S),o.push(E,P,S)}}this.setIndex(o),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var He=class i extends se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,f=new A,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){let y=[],x=d/n,E=0;d===0&&a===0?E=.5/e:d===n&&l===Math.PI&&(E=-.5/e);for(let P=0;P<=e;P++){let S=P/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(S+E,1-x),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){let x=h[d][y+1],E=h[d][y],P=h[d+1][y],S=h[d+1][y+1];(d!==0||a>0)&&m.push(x,E,S),(d!==n-1||l<Math.PI)&&m.push(E,P,S)}this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Un=class i extends se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new A,u=new A,f=new A;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let _=g/s*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,d=(s+1)*(m-1)+g,y=(s+1)*m+g;a.push(_,p,y),a.push(p,d,y)}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Gt=class extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ar(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function h0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},co=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bl:r=t,o=2*e-n;break;case El:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bl:a=t,l=2*n-e;break;case El:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,d=-f*p+2*f*_-f*g,y=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-m)*p+(1.5+m)*_+.5*g,E=m*p-m*_;for(let P=0;P!==o;++P)r[P]=d*a[h+P]+y*a[c+P]+x*a[l+P]+E*a[u+P];return r}},ho=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},uo=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new co(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lr:e=this.InterpolantFactoryMethodDiscrete;break;case cr:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&h0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ia,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=cr;var xi=class extends pn{};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=lr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends pn{};fo.prototype.ValueTypeName="color";var po=class extends pn{};po.prototype.ValueTypeName="number";var mo=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ke.slerpFlat(r,0,a,c-o,a,c,l);return r}},bs=class extends pn{InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}};bs.prototype.ValueTypeName="quaternion";bs.prototype.DefaultInterpolation=cr;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends pn{};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=lr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends pn{};go.prototype.ValueTypeName="vector";var _o=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},u0=new _o,xo=class{constructor(t){this.manager=t!==void 0?t:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Fr=class extends Es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},La=new Yt,xc=new A,yc=new A,Or=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(xc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var vc=new Yt,fs=new A,Ia=new A,yo=class extends Or{constructor(){super(new ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(fs),Ia.copy(n.position),Ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ia),n.updateMatrixWorld(),s.makeTranslation(-fs.x,-fs.y,-fs.z),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc)}},ws=class extends Es{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},vo=class extends Or{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jn=class extends Es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new vo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ao="\\[\\]\\.:\\/",d0=new RegExp("["+Ao+"]","g"),Ro="[^"+Ao+"]",f0="[^"+Ao.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",Ro),m0=/(WCOD+)?/.source.replace("WCOD",f0),g0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ro),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ro),x0=new RegExp("^"+p0+m0+g0+_0+"$"),y0=["material","materials","bones","map"],Mo=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(d0,"")}static parseTrackName(t){let e=x0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);y0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Mo;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ig=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Wc="orbRushSaveV1";function v0(){try{return new URLSearchParams(location.search).has("debug")}catch{return!1}}function Co(...i){v0()&&console.info("[OrbRush SDK]",...i)}var Po=class{constructor(){let t=typeof window!="undefined"?window.ytgame:void 0;this.available=!!t,this.inPlayables=!!(t&&t.IN_PLAYABLES_ENV),this.audioEnabled=!0,this.handlers={},this.loaded=!1,this.loadPromise=null,this.pendingSave=null,this.saveInFlight=!1,this.lastScore=0,this.calls=[],this.firstFrameSent=!1,this.gameReadySent=!1,this.loadedSave=null,window.__ORB=window.__ORB||{},window.__ORB.sdkCalls=this.calls,window.__ORB.inPlayables=this.inPlayables}record(t,e=!0,n=null){this.calls.push({name:t,ok:e,error:n?String(n):null,at:Math.round(performance.now())}),Co(e?"ok":"error",t,n||"")}init(t={}){this.handlers=t;let e=window.ytgame;if(!this.inPlayables||!e){Co("running outside Playables; using local save fallback"),this.audioEnabled=!0;return}try{this.audioEnabled=e.system.isAudioEnabled(),this.record("isAudioEnabled")}catch(n){this.record("isAudioEnabled",!1,n)}try{e.system.onAudioEnabledChange(n=>{var s;this.audioEnabled=!!n,this.record("onAudioEnabledChange"),(s=t.onAudioEnabledChange)==null||s.call(t,!!n)})}catch(n){this.record("onAudioEnabledChange",!1,n)}try{e.system.onPause(()=>{var n;this.record("onPause"),(n=t.onPause)==null||n.call(t)})}catch(n){this.record("onPause",!1,n)}try{e.system.onResume(()=>{var n;this.record("onResume"),(n=t.onResume)==null||n.call(t)})}catch(n){this.record("onResume",!1,n)}Co("initialised inside Playables")}firstFrameReady(){if(!this.firstFrameSent)if(this.firstFrameSent=!0,this.inPlayables&&window.ytgame)try{window.ytgame.game.firstFrameReady(),this.record("firstFrameReady")}catch(t){this.record("firstFrameReady",!1,t)}else this.record("firstFrameReady.local")}gameReady(){if(!this.gameReadySent)if(this.gameReadySent=!0,this.inPlayables&&window.ytgame)try{window.ytgame.game.gameReady(),this.record("gameReady")}catch(t){this.record("gameReady",!1,t)}else this.record("gameReady.local")}load(){if(this.loadPromise)return this.loadPromise;if(!this.inPlayables||!window.ytgame){try{this.loadedSave=window.localStorage.getItem(Wc)}catch{this.loadedSave=null}return this.loaded=!0,this.loadPromise=Promise.resolve(this.loadedSave),this.record("loadData.local",!0),this.loadPromise}return this.record("loadData.start"),this.loadPromise=(async()=>{try{let t=await window.ytgame.game.loadData();this.loadedSave=typeof t=="string"&&t.length?t:null,this.record("loadData")}catch(t){this.loadedSave=null,this.record("loadData",!1,t)}finally{this.loaded=!0,this.flushPendingSave()}return this.loadedSave})(),this.loadPromise}async save(t){this.pendingSave=t,this.loaded&&await this.flushPendingSave()}async flushPendingSave(){if(!this.loaded||this.pendingSave==null||this.saveInFlight)return;let t=this.pendingSave;if(this.pendingSave=null,!this.inPlayables||!window.ytgame){try{window.localStorage.setItem(Wc,t),this.record("saveData.local")}catch(e){this.record("saveData.local",!1,e)}return}this.saveInFlight=!0;try{await window.ytgame.game.saveData(t),this.record("saveData")}catch(e){this.record("saveData",!1,e),this.pendingSave==null&&(this.pendingSave=t)}finally{this.saveInFlight=!1,this.pendingSave!=null&&this.flushPendingSave()}}async sendScore(t){let e=Math.max(0,Math.round(t));if(!this.inPlayables||!window.ytgame){this.lastScore=Math.max(this.lastScore,e),this.record("sendScore.local");return}if(!(e<=this.lastScore))try{await window.ytgame.engagement.sendScore({value:e}),this.lastScore=e,this.record("sendScore")}catch(n){this.record("sendScore",!1,n)}}getAudioEnabled(){if(this.inPlayables&&window.ytgame)try{return window.ytgame.system.isAudioEnabled()}catch{return this.audioEnabled}return this.audioEnabled}logError(t){if(console.error("[OrbRush]",t),this.inPlayables&&window.ytgame)try{window.ytgame.health.logError(),this.record("logError")}catch(e){this.record("logError",!1,e)}}},Le=new Po;var Rt=(i,t,e)=>i<t?t:i>e?e:i,M0=(i,t,e)=>i+(t-i)*e;function Xe(i,t,e,n){return M0(i,t,1-Math.exp(-e*n))}function Ce(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function de(i,t,e){return t+(e-t)*i()}function Xc(i,t){return t[Math.floor(i()*t.length)%t.length]}function re(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{canvas:e,ctx:n}}function ce(i,{repeat:t=!1,anisotropy:e=4,srgb:n=!0}={}){let s=new Ki(i);return n&&(s.colorSpace=oe),t&&(s.wrapS=Zi,s.wrapT=Zi),s.anisotropy=e,s.needsUpdate=!0,s}function Lo(i){if(!Number.isFinite(i))return"\u2014";let t=Math.max(0,Math.round(i)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`}function As(i){return Math.round(i).toLocaleString("en-US")}function qc(){return window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function es(){return window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}function xn(i,t){if(t&&navigator.vibrate)try{navigator.vibrate(i)}catch{}}function Yc(i=128,t="rgba(255,255,255,1)",e="rgba(255,255,255,0)"){let{canvas:n,ctx:s}=re(i,i),r=s.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return r.addColorStop(0,t),r.addColorStop(.35,"rgba(255,255,255,0.6)"),r.addColorStop(1,e),s.fillStyle=r,s.fillRect(0,0,i,i),ce(n,{srgb:!0})}function Io(i){let t=new Set,e=new Set,n=new Set;i.traverse(s=>{s.geometry&&t.add(s.geometry);let r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];for(let a of r){e.add(a);for(let o of Object.keys(a)){let l=a[o];l&&l.isTexture&&n.add(l)}}});for(let s of t)s.dispose();for(let s of n)s.dispose();for(let s of e)s.dispose();i.parent&&i.parent.remove(i)}var Do=class{constructor(){this.x=0,this.y=0,this.z=0,this.h=0,this.points=[[0,0,0]]}push(){this.points.push([this.x,this.y,this.z])}straight(t,e=0){let n=Math.max(1,Math.ceil(t/6)),s=t/n;for(let r=0;r<n;r++)this.x+=Math.sin(this.h)*s,this.z+=Math.cos(this.h)*s,this.y+=e/n,this.push();return this}turn(t,e,n=0){let s=t*Math.PI/180,r=Math.abs(s)*e,a=Math.max(2,Math.ceil(r/5)),o=r/a,l=s/a;for(let c=0;c<a;c++)this.h+=l*.5,this.x+=Math.sin(this.h)*o,this.z+=Math.cos(this.h)*o,this.y+=n/a,this.h+=l*.5,this.push();return this}};function S0(i){let t=Ce(i*7919+101),e=[[.035,.125],[.155,.26],[.29,.4],[.43,.54],[.57,.67],[.7,.81],[.845,.955]],n=[];for(let s=0;s<e.length;s++){let[r,a]=e[s],o=Xc(t,["line","wave","slide","line","wave","slide"]);n.push({kind:o,from:r,to:a,lat:de(t,-.9,.9),lat2:de(t,-1.9,1.9),amp:de(t,1,1.9),n:4+Math.floor(t()*3),waves:1+Math.floor(t()*2),arc:de(t,.7,1.8)})}return n}function b0(i,t=3){let e=Ce(i*131+7),n=[.18,.36,.52,.68,.84],s=[];for(let r=0;r<t;r++)s.push({at:n[Math.min(n.length-1,Math.floor((r+.5)*(n.length/t)))]+(e()-.5)*.03,lat:(e()>.5?1:-1)*de(e,.9,1.8)});return s}function on(i,t,e,n,s,r={}){let a=new Do;s(a);let o=i*977+31;return{number:i,name:t,themeIndex:e,width:n,points:a.points,gaps:r.gaps||[],rails:r.rails||[],obstacles:r.obstacles||[],boosts:r.boosts||[],checkpoints:r.checkpoints||[.36,.7],tutorial:!!r.tutorial,coinRuns:r.coinRuns||S0(o),gems:r.gems||b0(o,Math.min(3,1+Math.floor(i/4)))}}var _e=(i,t,e)=>({type:"hammer",at:e,speed:i,phase:t}),ei=(i,t,e)=>({type:"wrecking",at:e,speed:i,phase:t}),Ke=(i,t,e,n)=>({type:"block",at:n,speed:i,phase:t,amp:e}),yn=(i,t,e,n=1)=>({type:"spinner",at:e,speed:i,phase:t,side:n}),Qe=[on(1,"First Roll",0,7.2,i=>{i.straight(42),i.turn(20,26),i.straight(40),i.turn(-24,24),i.straight(38,-1.8),i.turn(12,30),i.straight(30)},{tutorial:!0,rails:[{from:.4,to:.56}],checkpoints:[.52],boosts:[],gaps:[],obstacles:[]}),on(2,"Sky Steps",0,6.8,i=>{i.straight(32),i.turn(-24,22),i.straight(48),i.turn(28,24),i.straight(38,-2),i.turn(-16,26),i.straight(42)},{gaps:[{at:.36,len:5.5},{at:.73,len:6}],obstacles:[_e(1.5,.2,.22),_e(1.7,1.4,.86)],checkpoints:[.3,.64],rails:[{from:.5,to:.62}],boosts:[{at:.55}]}),on(3,"Twist & Turn",0,6.4,i=>{i.straight(28),i.turn(32,18),i.straight(32),i.turn(-34,17),i.straight(36,-2),i.turn(24,20),i.straight(28),i.turn(-20,22),i.straight(34)},{gaps:[{at:.3,len:5.5},{at:.78,len:6}],obstacles:[_e(1.6,.6,.2),Ke(1.15,.4,.6,.55),yn(1.35,.2,.86)],checkpoints:[.34,.66],boosts:[{at:.5}]}),on(4,"Dusk Dash",1,6.6,i=>{i.straight(38),i.turn(-22,24),i.straight(46,-2.4),i.turn(26,22),i.straight(38),i.turn(-14,28),i.straight(44,-1),i.turn(10,30),i.straight(30)},{gaps:[{at:.4,len:6.5},{at:.76,len:7}],obstacles:[ei(1.35,.4,.27),ei(1.5,1.8,.61),_e(1.8,.6,.89)],checkpoints:[.35,.68],rails:[{from:.48,to:.6}],boosts:[{at:.34},{at:.7}]}),on(5,"Hammer Time",1,6,i=>{i.straight(30),i.turn(30,18),i.straight(34),i.turn(-30,16),i.straight(42,-2),i.turn(34,17),i.straight(32),i.turn(-26,18),i.straight(40)},{gaps:[{at:.27,len:5.5},{at:.61,len:6},{at:.9,len:5}],obstacles:[_e(1.7,.3,.17),Ke(1.2,.9,.62,.35),_e(1.9,1.5,.45),yn(1.5,.6,.53),Ke(1.25,2.1,.66,.7),_e(2,.9,.8)],checkpoints:[.31,.61,.87],boosts:[{at:.42},{at:.82}]}),on(6,"Sunset Sprint",1,6.6,i=>{i.straight(36),i.turn(-16,30),i.straight(62,-3),i.turn(20,26),i.straight(52,-2),i.turn(-24,22),i.straight(38)},{gaps:[{at:.34,len:7},{at:.68,len:8}],obstacles:[ei(1.6,.8,.5),_e(2,.2,.83)],checkpoints:[.32,.66],rails:[{from:.5,to:.62}],boosts:[{at:.28},{at:.6},{at:.85}]}),on(7,"Neon Nights",2,6.2,i=>{i.straight(32),i.turn(24,20),i.straight(38),i.turn(-28,18),i.straight(36),i.turn(30,17),i.straight(32),i.turn(-24,20),i.straight(36)},{gaps:[{at:.29,len:5.5},{at:.7,len:6.5}],obstacles:[yn(1.3,.4,.19),Ke(1.3,.2,.64,.44),yn(1.55,1.1,.57),Ke(1.35,1.7,.68,.82),_e(1.9,.5,.93)],checkpoints:[.32,.64],boosts:[{at:.67}]}),on(8,"Laser Bridge",2,5.8,i=>{i.straight(32),i.turn(-30,16),i.straight(28),i.turn(30,16),i.straight(48,-2),i.turn(-20,24),i.straight(34),i.turn(26,18),i.straight(32),i.straight(20)},{gaps:[{at:.4,len:5.5},{at:.84,len:6}],obstacles:[ei(1.5,.2,.2),Ke(1.2,.7,.6,.33),_e(1.8,1.3,.54),Ke(1.4,2,.68,.72),_e(2,.4,.91)],checkpoints:[.35,.68],rails:[{from:.36,to:.5},{from:.64,to:.78}],boosts:[{at:.32},{at:.8}]}),on(9,"Midnight Gauntlet",2,6.2,i=>{i.straight(28),i.turn(36,14),i.straight(30),i.turn(-36,14),i.straight(32,-2),i.turn(28,16),i.straight(30),i.turn(-28,16),i.straight(32),i.turn(20,20),i.straight(32)},{gaps:[{at:.23,len:5},{at:.55,len:5.5},{at:.84,len:6}],obstacles:[Ke(1.35,.2,.6,.15),_e(1.8,.7,.34),yn(1.5,1.3,.46),ei(1.6,.4,.58),_e(1.9,1.8,.67),Ke(1.5,.9,.66,.76),_e(2.1,.2,.94)],checkpoints:[.27,.53,.8],boosts:[{at:.5},{at:.8}]}),on(10,"Candy Curves",3,6.4,i=>{i.straight(30),i.turn(-26,18),i.straight(36),i.turn(26,18),i.straight(32),i.turn(-30,16),i.straight(38),i.turn(30,16),i.straight(32),i.turn(-16,24),i.straight(30)},{gaps:[{at:.33,len:6},{at:.72,len:7}],obstacles:[yn(1.4,.2,.19),_e(1.8,.8,.42),Ke(1.35,1.4,.62,.5),yn(1.6,.5,.61),_e(2,1.9,.87)],checkpoints:[.35,.68],rails:[{from:.56,to:.68}],boosts:[{at:.62}]}),on(11,"Sugar Rush",3,6.2,i=>{i.straight(32),i.turn(28,17),i.straight(44,-2),i.turn(-30,16),i.straight(32),i.turn(32,15),i.straight(46,-2),i.turn(-28,17),i.straight(38),i.turn(20,20),i.straight(30)},{gaps:[{at:.3,len:6},{at:.56,len:6.5},{at:.82,len:7}],obstacles:[ei(1.55,.3,.17),_e(1.9,.9,.4),yn(1.5,1.6,.5),Ke(1.5,.5,.66,.51),_e(2,2.2,.69),Ke(1.6,1.2,.7,.78),_e(2.1,.4,.91)],checkpoints:[.33,.6,.85],boosts:[{at:.24},{at:.52},{at:.8}]}),on(12,"Skyline Finale",3,6.4,i=>{i.straight(36),i.turn(-22,20),i.straight(38),i.turn(24,18),i.straight(36,-2),i.turn(-26,17),i.straight(44),i.turn(28,16),i.straight(38,-1),i.turn(-24,18),i.straight(36),i.turn(16,22),i.straight(32)},{gaps:[{at:.25,len:6},{at:.5,len:7},{at:.75,len:7.5}],obstacles:[_e(1.8,.3,.14),ei(1.65,.9,.33),yn(1.6,1.6,.44),Ke(1.6,.4,.66,.57),ei(1.8,1.2,.65),_e(2.1,.6,.82),yn(1.8,2.1,.9)],checkpoints:[.3,.55,.8],boosts:[{at:.22},{at:.47},{at:.72},{at:.94}]})];var Ie=Qe.length,Zc=Ie*3;var $c=[{id:"sunrise",name:"Sunrise Skies",skyTop:"#1f4fb8",skyMid:"#6fb1ff",skyHorizon:"#ffd9a0",skyBottom:"#ff8f55",fog:11128309,sun:{x:.73,y:.43,color:"#fff6d6",glow:"rgba(255,232,170,0.5)",size:.005},sunLight:16773327,sunIntensity:2,hemiSky:13625087,hemiGround:8019002,hemiIntensity:.55,accent:8189908,accentCss:"#7cf7d4",railA:16763196,railB:2895944,trackTint:16777215,cloud:16777215,grass:7849562,grassTop:10149997,rock:10127988,rockDark:7300440,decor:"trees",cardA:"#4c7dff",cardB:"#152a63",stars:0,moon:!1},{id:"dusk",name:"Golden Dusk",skyTop:"#231452",skyMid:"#77368f",skyHorizon:"#ff9a5c",skyBottom:"#ffcf9e",fog:10116995,sun:{x:.28,y:.47,color:"#ffd9a0",glow:"rgba(255,150,90,0.55)",size:.0055},sunLight:16760970,sunIntensity:1.8,hemiSky:13081560,hemiGround:4862279,hemiIntensity:.5,accent:16757867,accentCss:"#ffb46b",railA:16747084,railB:2758712,trackTint:16770767,cloud:16763304,grass:10252143,grassTop:12159602,rock:6242389,rockDark:4074050,decor:"trees",cardA:"#b55cff",cardB:"#3a145e",stars:40,moon:!1},{id:"neon",name:"Neon Nights",skyTop:"#03061c",skyMid:"#0a1442",skyHorizon:"#173071",skyBottom:"#050a20",fog:661312,sun:{x:.66,y:.32,color:"#dff6ff",glow:"rgba(150,220,255,0.4)",size:.006},sunLight:11127039,sunIntensity:1.4,hemiSky:5995775,hemiGround:1772090,hemiIntensity:.45,accent:2282478,accentCss:"#22d3ee",railA:2282478,railB:2366034,trackTint:13222655,cloud:2834298,grass:1911381,grassTop:2375802,rock:1251896,rockDark:659237,decor:"crystals",cardA:"#21c7ef",cardB:"#14205d",stars:240,moon:!0},{id:"candy",name:"Candy Dream",skyTop:"#2f8bff",skyMid:"#8cd0ff",skyHorizon:"#ffd9ef",skyBottom:"#ff9dd2",fog:16764137,sun:{x:.7,y:.4,color:"#fff7e0",glow:"rgba(255,220,240,0.5)",size:.005},sunLight:16774114,sunIntensity:1.9,hemiSky:16766706,hemiGround:8215434,hemiIntensity:.6,accent:16748488,accentCss:"#ff8fc8",railA:16740275,railB:5909091,trackTint:16770290,cloud:16770292,grass:16754900,grassTop:16762340,rock:10976468,rockDark:8149165,decor:"candy",cardA:"#ff6fb3",cardB:"#6a1a63",stars:0,moon:!1}];function ns(i){return $c[Math.min($c.length-1,Math.floor(i/3))]}var mn=[{id:"chrome",name:"Chrome",price:0,color:14542847,metalness:1,roughness:.06,env:2.4,swatch:["#f2f7ff","#7d8aa8","#1c233a"]},{id:"beach",name:"Beach Ball",price:120,color:16777215,metalness:.05,roughness:.32,env:1,swatch:["#ff7b7b","#ffd93d","#4dd4ff"]},{id:"soccer",name:"Soccer",price:180,color:16777215,metalness:.08,roughness:.5,env:.8,swatch:["#ffffff","#c8ced8","#1b1e24"]},{id:"basketball",name:"Basketball",price:260,color:16777215,metalness:.05,roughness:.55,env:.8,swatch:["#e07b37","#b45116","#251208"]},{id:"watermelon",name:"Watermelon",price:400,color:16777215,metalness:.08,roughness:.36,env:.9,swatch:["#5ac26c","#2e7d3f","#173d22"]},{id:"disco",name:"Disco",price:620,color:15265535,metalness:1,roughness:.18,env:2.6,swatch:["#eef3ff","#97a3bd","#39435c"]},{id:"eyeball",name:"Eyeball",price:800,color:16777215,metalness:.08,roughness:.16,env:1,swatch:["#f4f1e8","#3fc7c9","#172a4a"]},{id:"lava",name:"Lava",price:1100,color:16777215,metalness:.12,roughness:.72,env:1,swatch:["#ff8236","#9e2f05","#1b1210"]},{id:"galaxy",name:"Galaxy",price:1500,color:16777215,metalness:.3,roughness:.34,env:1.3,swatch:["#8f7bff","#4b2ba8","#120a38"]},{id:"golden",name:"Golden",price:2e3,color:16766814,metalness:1,roughness:.19,env:2.6,swatch:["#fff1b3","#f0b429","#7a4c00"]}],E0=new Map(mn.map(i=>[i.id,i]));function Rs(i){return E0.get(i)||mn[0]}var Uo=new Map;function w0(i,t,e,n,s){i.beginPath();for(let r=0;r<5;r++){let a=s+r/5*Math.PI*2,o=t+Math.cos(a)*n,l=e+Math.sin(a)*n*.92;r===0?i.moveTo(o,l):i.lineTo(o,l)}i.closePath()}function T0(i,t,e){let n=["#ff6b6b","#ffd93d","#f8fafc","#4dd4ff","#9a7bff","#5eead4"],s=t/12;for(let a=0;a<12;a++)i.fillStyle=n[a%n.length],i.fillRect(Math.floor(a*s),0,Math.ceil(s)+1,e);i.fillStyle="#f8fafc",i.fillRect(0,0,t,e*.1),i.fillRect(0,e*.9,t,e*.1);let r=i.createLinearGradient(0,0,0,e);r.addColorStop(0,"rgba(255,255,255,0.18)"),r.addColorStop(.45,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.22)"),i.fillStyle=r,i.fillRect(0,0,t,e)}function A0(i,t,e){i.fillStyle="#f5f7f5",i.fillRect(0,0,t,e),i.fillStyle="rgba(0,0,0,0.05)";let n=Ce(7);for(let a=0;a<1500;a++)i.fillRect(n()*t,n()*e,1,1);i.strokeStyle="rgba(120,130,140,0.35)",i.lineWidth=2,i.beginPath(),i.moveTo(0,e*.5),i.bezierCurveTo(t*.25,e*.34,t*.75,e*.66,t,e*.5),i.stroke();let s=[[.08,.3,20,.2],[.3,.36,22,.8],[.56,.31,19,1.7],[.8,.38,22,2.4],[.2,.72,23,.4],[.5,.7,21,1.2],[.78,.72,20,2.9],[.95,.66,18,.9]];for(let[a,o,l,c]of s)i.save(),i.translate(a*t,o*e),i.fillStyle="#1b1e24",w0(i,0,0,l,c),i.fill(),i.restore();i.strokeStyle="rgba(90,100,110,0.28)",i.lineWidth=1.5;for(let[a,o]of s)for(let l=0;l<5;l++){let c=l/5*Math.PI*2;i.beginPath(),i.moveTo(a*t+Math.cos(c)*22,o*e+Math.sin(c)*20),i.lineTo(a*t+Math.cos(c+.7)*66,o*e+Math.sin(c+.7)*60),i.stroke()}let r=i.createLinearGradient(0,0,0,e);r.addColorStop(0,"rgba(255,255,255,0.32)"),r.addColorStop(.5,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.16)"),i.fillStyle=r,i.fillRect(0,0,t,e)}function R0(i,t,e){let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#ef9043"),n.addColorStop(.5,"#df6e2b"),n.addColorStop(1,"#b5531c"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=Ce(31);i.fillStyle="rgba(60,20,0,0.12)";for(let a=0;a<2600;a++)i.fillRect(s()*t,s()*e,1.2,1.2);i.strokeStyle="#20110a",i.lineWidth=5,i.beginPath(),i.moveTo(0,e*.5),i.lineTo(t,e*.5),i.stroke(),i.beginPath(),i.moveTo(t*.25,0),i.lineTo(t*.25,e),i.moveTo(t*.75,0),i.lineTo(t*.75,e),i.stroke(),i.beginPath(),i.moveTo(t*.25,0),i.bezierCurveTo(t*.36,e*.25,t*.36,e*.75,t*.25,e),i.moveTo(t*.75,0),i.bezierCurveTo(t*.64,e*.25,t*.64,e*.75,t*.75,e),i.stroke();let r=i.createRadialGradient(t*.3,e*.24,4,t*.3,e*.24,t*.5);r.addColorStop(0,"rgba(255,255,255,0.3)"),r.addColorStop(.55,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=r,i.fillRect(0,0,t,e)}function C0(i,t,e){let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#63c775"),n.addColorStop(.5,"#3d9e53"),n.addColorStop(1,"#1f6433"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=Ce(99);for(let a=0;a<6;a++){let o=a/6*t+14;i.beginPath();for(let l=0;l<=e;l+=8){let c=Math.sin(l*.05+a)*6+Math.sin(l*.14+a*2)*3;l===0?i.moveTo(o-13+c,l):i.lineTo(o-13+c,l)}for(let l=e;l>=0;l-=8){let c=Math.sin(l*.05+a)*6+Math.sin(l*.14+a*2)*3;i.lineTo(o+13+c,l)}i.closePath(),i.fillStyle="rgba(18, 72, 32, 0.85)",i.fill()}i.fillStyle="rgba(180, 255, 190, 0.16)";for(let a=0;a<5;a++){let o=a/5*t+40;i.beginPath(),i.ellipse(o,e*(.25+s()*.5),3,e*.26,0,0,Math.PI*2),i.fill()}i.fillStyle="rgba(10, 40, 18, 0.5)";for(let a=0;a<70;a++){let o=s()*t,l=s()*e;i.beginPath(),i.ellipse(o,l,1.6,2.8,0,0,Math.PI*2),i.fill()}let r=i.createRadialGradient(t*.28,e*.25,4,t*.28,e*.25,t*.55);r.addColorStop(0,"rgba(255,255,255,0.26)"),r.addColorStop(.5,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(0,0,0,0.2)"),i.fillStyle=r,i.fillRect(0,0,t,e)}function P0(i,t,e){let n=Ce(5);i.fillStyle="#0d1424",i.fillRect(0,0,t,e);let s=24,r=12,a=t/s,o=e/r;for(let l=0;l<r;l++)for(let c=0;c<s;c++){let h=120+Math.floor(n()*120),u=n()>.7?24:0;i.fillStyle=`rgb(${h-u},${h},${h+20})`,i.fillRect(c*a+1,l*o+1,a-2,o-2),i.fillStyle="rgba(255,255,255,0.45)",i.fillRect(c*a+2,l*o+2,a-4,2),i.fillStyle="rgba(10,20,40,0.35)",i.fillRect(c*a+2,(l+1)*o-4,a-4,2)}for(let l=0;l<40;l++){let c=n()*t,h=n()*e;i.fillStyle="rgba(255,255,255,0.85)",i.fillRect(c,h,2,2)}}function L0(i,t,e){let n=i.createRadialGradient(t*.45,e*.4,20,t*.5,e*.5,t*.62);n.addColorStop(0,"#fdfbf4"),n.addColorStop(.72,"#efe9da"),n.addColorStop(1,"#cec5b4"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=Ce(13);i.strokeStyle="rgba(190, 58, 58, 0.42)",i.lineWidth=1.3;for(let c=0;c<26;c++){let h=s()>.5?t*.02:t*.98,u=s()*e;i.beginPath(),i.moveTo(h,u);for(let f=0;f<4;f++)h+=(t*.5-h)*(.18+s()*.12),u+=(e*.5-u)*(.18+s()*.12)+(s()-.5)*14,i.lineTo(h,u);i.stroke()}let r=t*.5,a=e*.5,o=i.createRadialGradient(r-5,a-5,4,r,a,46);o.addColorStop(0,"#8ffcff"),o.addColorStop(.4,"#2fc2c7"),o.addColorStop(.75,"#147a92"),o.addColorStop(1,"#0b4358"),i.fillStyle=o,i.beginPath(),i.arc(r,a,44,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(6, 40, 52, 0.8)",i.lineWidth=3,i.stroke(),i.strokeStyle="rgba(120, 240, 255, 0.4)",i.lineWidth=1;for(let c=0;c<16;c++){let h=c/16*Math.PI*2;i.beginPath(),i.moveTo(r+Math.cos(h)*22,a+Math.sin(h)*22),i.lineTo(r+Math.cos(h)*41,a+Math.sin(h)*41),i.stroke()}i.fillStyle="#080d14",i.beginPath(),i.arc(r,a,18,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.9)",i.beginPath(),i.ellipse(r-7,a-8,6,4,-.5,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.4)",i.beginPath(),i.ellipse(r+9,a+9,4,2.4,-.5,0,Math.PI*2),i.fill();let l=i.createLinearGradient(0,0,0,e);l.addColorStop(0,"rgba(255,255,255,0.16)"),l.addColorStop(.55,"rgba(255,255,255,0)"),l.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=l,i.fillRect(0,0,t,e)}function Jc(i,t,e,n=!1){let s=Ce(77);if(n)i.fillStyle="#000000",i.fillRect(0,0,t,e);else{let r=i.createLinearGradient(0,0,0,e);r.addColorStop(0,"#2b2320"),r.addColorStop(.5,"#1b1412"),r.addColorStop(1,"#0f0b0a"),i.fillStyle=r,i.fillRect(0,0,t,e);for(let a=0;a<700;a++){let o=20+Math.floor(s()*28);i.fillStyle=`rgba(${o+10},${o},${o},0.5)`,i.fillRect(s()*t,s()*e,2,s()*4+1)}}for(let r=0;r<12;r++){let a=s()*t,o=s()*e,l=n?["#ffb347","#ff6a00","#ffe08a"]:["#ff7b22","#c94500","#ffb347"];i.strokeStyle=l[r%3],i.lineWidth=n?2.6:3.4,i.shadowBlur=n?12:5,i.shadowColor="#ff6a00",i.beginPath(),i.moveTo(a,o);for(let c=0;c<7;c++)a+=(s()-.5)*46,o+=12+s()*16,i.lineTo(a,o),s()>.65&&(i.moveTo(a,o),i.lineTo(a+(s()-.5)*42,o+14+s()*18),i.moveTo(a,o));i.stroke(),i.shadowBlur=0}for(let r=0;r<26;r++)i.fillStyle=n?"rgba(255,140,40,0.75)":"rgba(255,110,30,0.5)",i.beginPath(),i.arc(s()*t,s()*e,s()*2+.6,0,Math.PI*2),i.fill()}function I0(i,t,e){let n=Ce(2024),s=i.createLinearGradient(0,0,t,e);s.addColorStop(0,"#1a0b3d"),s.addColorStop(.45,"#161b4d"),s.addColorStop(1,"#080a24"),i.fillStyle=s,i.fillRect(0,0,t,e);let r=[[.25,.5,.35,"rgba(124, 58, 237, 0.5)"],[.7,.35,.3,"rgba(34, 211, 238, 0.28)"],[.55,.72,.28,"rgba(236, 72, 153, 0.24)"],[.85,.7,.22,"rgba(99, 102, 241, 0.35)"]];for(let[o,l,c,h]of r){let u=i.createRadialGradient(o*t,l*e,2,o*t,l*e,c*t);u.addColorStop(0,h),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.fillRect(0,0,t,e)}for(let o=0;o<340;o++){let l=n()*t,c=n()*e,h=n()*1.5+.35;i.fillStyle=n()>.86?"#9ef7ff":n()>.7?"#ffd9f2":"#ffffff",i.globalAlpha=.4+n()*.6,i.beginPath(),i.arc(l,c,h,0,Math.PI*2),i.fill(),n()>.965&&(i.strokeStyle="rgba(255,255,255,0.45)",i.lineWidth=.7,i.beginPath(),i.moveTo(l-5,c),i.lineTo(l+5,c),i.moveTo(l,c-5),i.lineTo(l,c+5),i.stroke())}i.globalAlpha=1;let a=i.createLinearGradient(0,0,0,e);a.addColorStop(0,"rgba(255,255,255,0.1)"),a.addColorStop(.5,"rgba(255,255,255,0)"),a.addColorStop(1,"rgba(0,0,0,0.25)"),i.fillStyle=a,i.fillRect(0,0,t,e)}function D0(i,t,e){let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#fff3c0"),n.addColorStop(.4,"#ffd75e"),n.addColorStop(.7,"#f0b429"),n.addColorStop(1,"#a86a00"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="rgba(120, 72, 0, 0.4)",i.lineWidth=2;for(let r=0;r<4;r++){i.beginPath();for(let a=0;a<=t;a+=10){let o=e*(.18+r*.22)+Math.sin(a*.05+r*1.7)*7;a===0?i.moveTo(a,o):i.lineTo(a,o)}i.stroke()}i.strokeStyle="rgba(255, 255, 220, 0.55)",i.lineWidth=1.4;for(let r=0;r<9;r++)i.beginPath(),i.ellipse(t*(.12+r*.09),e*(.5+Math.sin(r)*.2),26,6,-.3,0,Math.PI*2),i.stroke();let s=i.createRadialGradient(t*.3,e*.24,4,t*.3,e*.24,t*.5);s.addColorStop(0,"rgba(255,255,255,0.65)"),s.addColorStop(.4,"rgba(255,255,255,0.1)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,t,e)}function U0(i){if(Uo.has(i))return Uo.get(i);let t={map:null};try{if(i==="chrome"||i==="golden"&&!1)t={map:null};else if(i==="disco"){let{canvas:e,ctx:n}=re(512,256);P0(n,512,256),t={map:ce(e)}}else if(i==="lava"){let e=re(512,256);Jc(e.ctx,512,256,!1);let n=re(512,256);Jc(n.ctx,512,256,!0),t={map:ce(e.canvas),emissiveMap:ce(n.canvas),emissiveIntensity:1.15}}else if(i!=="chrome"){let{canvas:e,ctx:n}=re(512,256);i==="beach"?T0(n,512,256):i==="soccer"?A0(n,512,256):i==="basketball"?R0(n,512,256):i==="watermelon"?C0(n,512,256):i==="eyeball"?L0(n,512,256):i==="galaxy"?I0(n,512,256):i==="golden"&&D0(n,512,256),t={map:ce(e)}}}catch(e){console.warn("Could not build ball texture",i,e)}return Uo.set(i,t),t}function Mi(i,t=null){var s;let e=U0(i.id),n=new Gt({color:i.color,metalness:i.metalness,roughness:i.roughness,envMapIntensity:t!=null?t:i.env});return e.map&&(n.map=e.map),e.emissiveMap&&(n.emissiveMap=e.emissiveMap,n.emissive=new Pt(16777215),n.emissiveIntensity=(s=e.emissiveIntensity)!=null?s:1),n}function No(i){let{canvas:t,ctx:e}=re(160,160),[n,s,r]=i.swatch,a=e.createRadialGradient(56,48,8,80,84,74);a.addColorStop(0,n),a.addColorStop(.55,s),a.addColorStop(1,r),e.fillStyle=a,e.beginPath(),e.arc(80,82,66,0,Math.PI*2),e.fill();let o=e.createRadialGradient(54,48,2,54,48,34);return o.addColorStop(0,"rgba(255,255,255,0.85)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.beginPath(),e.ellipse(56,50,26,16,-.5,0,Math.PI*2),e.fill(),t.toDataURL("image/png")}function N0(i){let t=document.createElement("canvas");t.width=512,t.height=256;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#8fb8ff"),n.addColorStop(.46,"#f4f8ff"),n.addColorStop(.52,"#6a7280"),n.addColorStop(1,"#15181f"),e.fillStyle=n,e.fillRect(0,0,512,256),e.fillStyle="rgba(255,255,255,0.98)",e.fillRect(56,24,150,44),e.fillStyle="rgba(255,214,150,0.9)",e.fillRect(318,38,104,40),e.fillStyle="rgba(255,140,90,0.7)",e.fillRect(438,66,52,30),e.fillStyle="rgba(110,200,255,0.55)",e.fillRect(196,156,240,30),e.fillStyle="rgba(255,255,255,0.35)",e.fillRect(40,170,110,22);let s=new Ki(t);s.mapping=pi,s.colorSpace=oe;let r=new $n(i),a=r.fromEquirectangular(s);return r.dispose(),s.dispose(),a}function Kc(i){var s;let t={},e=null,n=null;try{e=new gi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),e.setSize(160,160,!1),e.setPixelRatio(1),e.outputColorSpace=oe,e.toneMapping=vi,e.toneMappingExposure=1.12;let r=new Jn;n=N0(e),r.environment=n.texture;let a=new ye(32,1,.1,40);a.position.set(0,0,4.7);let o=new jn(16774368,3.2);o.position.set(3,4,5),r.add(o);let l=new jn(9427199,2.4);l.position.set(-4,-1,-2),r.add(l);let c=new He(1.35,40,28);for(let h of mn){let u=Mi(h),f=new _t(c,u);r.add(f),e.render(r,a),t[h.id]=e.domElement.toDataURL("image/png"),r.remove(f),u.dispose()}c.dispose(),n==null||n.dispose(),e.dispose(),(s=e.forceContextLoss)==null||s.call(e)}catch(r){console.warn("Thumbnail rendering unavailable, using fallbacks",r);for(let a of mn)t[a.id]=No(a);try{n==null||n.dispose(),e==null||e.dispose()}catch{}}return t}var zr=class{constructor(t){this.game=t,this.cache=new Map,this.comboCount=0,this.comboTimer=null,this.toastTimer=null,this.hintTimer=null,this.starTimers=[],this.lastFocus=null,this.bind()}q(t){return this.cache.has(t)||this.cache.set(t,document.getElementById(t)),this.cache.get(t)}show(t){t&&(t.classList.remove("hidden"),t.setAttribute("aria-hidden","false"))}hide(t){t&&(t.classList.add("hidden"),t.setAttribute("aria-hidden","true"))}tap(t){return e=>{try{this.game.audio.unlock(),this.game.audio.sfx("click")}catch{}t(e)}}bind(){let t=(r,a)=>{let o=this.q(r);o&&o.addEventListener("click",this.tap(a))};t("playBtn",()=>this.game.onPlay()),t("levelsBtn",()=>this.game.openLevels()),t("shopBtn",()=>this.game.openShop()),t("settingsBtn",()=>this.game.openSettings("menu")),t("levelsBack",()=>this.game.closeSheet()),t("shopBack",()=>this.game.closeSheet()),t("pauseBtn",()=>this.game.pauseGame()),t("resumeBtn",()=>this.game.resumeGame()),t("restartBtn",()=>this.game.restartLevel()),t("menuFromPauseBtn",()=>this.game.quitToMenu()),t("settingsFromPauseBtn",()=>this.game.openSettings("pause")),t("nextBtn",()=>this.game.nextLevel()),t("replayBtn",()=>this.game.restartLevel()),t("levelsFromCompleteBtn",()=>this.game.openLevelsFromResults()),t("finalLevelsBtn",()=>this.game.openLevelsFromResults()),t("finalReplayBtn",()=>this.game.startLevel(Ie-1)),t("finalMenuBtn",()=>this.game.quitToMenu()),t("settingsDone",()=>this.game.closeSettings());let e=this.q("musicRange"),n=this.q("sfxRange"),s=this.q("hapticsToggle");e&&e.addEventListener("input",()=>{this.q("musicOut").textContent=`${e.value}%`,this.game.onSettingsInput({music:Number(e.value)/100})}),n&&n.addEventListener("input",()=>{this.q("sfxOut").textContent=`${n.value}%`,this.game.audio.unlock(),this.game.onSettingsInput({sfx:Number(n.value)/100}),this.game.audio.sfx("click")}),s&&s.addEventListener("change",()=>{this.game.onSettingsInput({haptics:s.checked}),this.game.audio.unlock(),this.game.audio.sfx("click")}),document.addEventListener("keydown",r=>{r.key==="Escape"&&this.game.handleEscape()})}syncSettings(){let t=this.game.state.settings,e=this.q("musicRange"),n=this.q("sfxRange"),s=this.q("hapticsToggle");e&&(e.value=String(Math.round(t.music*100))),n&&(n.value=String(Math.round(t.sfx*100))),s&&(s.checked=!!t.haptics),this.q("musicOut").textContent=`${Math.round(t.music*100)}%`,this.q("sfxOut").textContent=`${Math.round(t.sfx*100)}%`}updateCoins(t,{pop:e=!1}={}){let n=As(t),s=this.q("menuCoins");s&&(s.textContent=n),document.querySelectorAll(".js-coins").forEach(a=>a.textContent=n);let r=this.q("hudCoins");r&&(r.textContent=n),r&&e&&(r.classList.remove("pop"),r.offsetWidth,r.classList.add("pop"))}refreshMenu(){var o;let t=this.game.state,e=this.game.totalStars(),n=Qe.filter(l=>{var c;return(((c=t.levels[l.number])==null?void 0:c.stars)||0)>0}).length;this.q("menuStars").textContent=String(e),this.q("levelsProgress").textContent=`${n}/${Ie}`;let s=this.game.continueIndex(),r=Qe[s],a=n>0||(((o=t.levels[r.number])==null?void 0:o.stars)||0)>0;this.q("playLabel").textContent=a?"Continue":"Play",this.q("playSub").textContent=`Track ${r.number} \xB7 ${r.name}`,this.updateCoins(t.coins),this.q("menuHint").innerHTML=es()?'<kbd>Hold</kbd> to roll <span class="sep">\xB7</span> <kbd>Drag</kbd> to steer':'<kbd>A</kbd><kbd>D</kbd> steer <span class="sep">\xB7</span> <kbd>Space</kbd> speed'}renderLevels(){let t=this.q("levelGrid");if(!t)return;t.innerHTML="";let e=this.game.state;Qe.forEach((n,s)=>{let r=ns(s),a=e.levels[n.number]||{stars:0,best:0},o=!this.game.isLevelUnlocked(s),l=document.createElement("button");l.type="button",l.className="level-card",o&&l.classList.add("locked"),s===this.game.continueIndex()&&l.classList.add("current"),l.style.setProperty("--card-a",r.cardA),l.style.setProperty("--card-b",r.cardB),l.setAttribute("aria-label",`Track ${n.number}: ${n.name}${o?" (locked)":""}`);let c=[1,2,3].map(h=>`<svg class="ico${a.stars>=h?" on":""}" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-star"/></svg>`).join("");l.innerHTML=`
        ${o?'<svg class="ico lock" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-lock"/></svg>':""}
        <span class="num">${String(n.number).padStart(2,"0")}</span>
        <span class="name">${n.name}</span>
        <span class="spacer"></span>
        <span class="stars">${c}</span>
        <span class="best">${a.stars>0?`BEST ${Lo(a.best)}`:"NOT CLEARED"}</span>
      `,o?(l.disabled=!0,l.addEventListener("click",this.tap(()=>this.game.deny()))):(l.addEventListener("click",this.tap(()=>this.game.startLevel(s))),this.attachTilt(l)),t.appendChild(l)}),this.updateCoins(e.coins)}renderShop(){let t=this.q("skinGrid");if(!t)return;t.innerHTML="";let e=this.game.state,n=this.game.skinThumbs||{};mn.forEach(s=>{let r=e.skins.includes(s.id),a=e.ball===s.id,o=e.coins>=s.price,l=document.createElement("button");l.type="button",l.className="skin-card"+(a?" equipped":""),l.setAttribute("aria-label",`${s.name}${a?" (equipped)":r?" (owned)":` (${s.price} coins)`}`);let c;a?c='<span class="skin-status equipped"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check"/></svg> Equipped</span>':r?c='<span class="skin-status owned">Tap to equip</span>':o?c=`<span class="skin-status"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-coin"/></svg>${s.price}</span>`:c=`<span class="skin-status need"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-coin"/></svg>${s.price}</span>`,l.innerHTML=`
        <span class="skin-thumb"><img alt="${s.name} orb" loading="lazy" src="${n[s.id]||No(s)}" /></span>
        <span class="skin-name">${s.name}</span>
        ${c}
      `,l.addEventListener("click",this.tap(()=>this.game.handleSkinClick(s.id))),this.attachTilt(l),t.appendChild(l)}),this.updateCoins(e.coins)}attachTilt(t){es()||qc()||(t.addEventListener("pointermove",e=>{if(e.pointerType&&e.pointerType!=="mouse")return;let n=t.getBoundingClientRect(),s=(e.clientX-n.left)/n.width-.5,r=(e.clientY-n.top)/n.height-.5;t.style.transform=`perspective(760px) rotateX(${(-r*8).toFixed(2)}deg) rotateY(${(s*10).toFixed(2)}deg) translateY(-2px) scale(1.015)`}),t.addEventListener("pointerleave",()=>{t.style.transform=""}))}showMenu(){this.hide(this.q("levelsScreen")),this.hide(this.q("shopScreen")),this.hide(this.q("hud")),this.hideModals(),this.show(this.q("menuScreen")),this.refreshMenu()}showLevels(){this.hide(this.q("menuScreen")),this.hide(this.q("shopScreen")),this.renderLevels(),this.show(this.q("levelsScreen"))}showShop(){this.hide(this.q("menuScreen")),this.hide(this.q("levelsScreen")),this.renderShop(),this.show(this.q("shopScreen"))}showGame(){this.hide(this.q("menuScreen")),this.hide(this.q("levelsScreen")),this.hide(this.q("shopScreen")),this.hideModals(),this.show(this.q("hud"))}hideGameHud(){this.hide(this.q("hud"))}hideModals(){for(let t of["pauseScreen","completeScreen","finalScreen","settingsScreen"])this.hide(this.q(t))}showPause(){this.show(this.q("pauseScreen"))}hidePause(){this.hide(this.q("pauseScreen"))}setPauseAvailable(t){let e=this.q("pauseBtn");e&&(e.style.visibility=t?"visible":"hidden")}showComplete(t){this.q("completeTitle").textContent=t.isFinale?"Finale Cleared!":"Track Cleared!",this.q("completeSub").textContent=`${t.name} \xB7 Track ${t.number}`,this.q("resultCoins").textContent=`+${t.collected}`,this.q("resultTime").textContent=Lo(t.time),this.q("resultFalls").textContent=String(t.falls);let e=t.stars,n=[{on:!0,text:"Finish"},{on:!!t.coinGoal,text:"Collect 70% coins"},{on:!!t.noFalls,text:"No falls"}];this.q("criteriaText").textContent=n.map(r=>`${r.on?"\u2713":"\u2717"} ${r.text}`).join("  \xB7  ");let s=this.q("completeStars").querySelectorAll(".star");s.forEach(r=>r.classList.remove("on")),this.starTimers.forEach(r=>clearTimeout(r)),this.starTimers=[];for(let r=0;r<e;r++){let a=setTimeout(()=>{var o;(o=s[r])==null||o.classList.add("on"),this.game.audio.sfx("star",{index:r})},380+r*260);this.starTimers.push(a)}this.q("nextBtn").textContent=t.isFinale?"Grand Finale":"Next Track",this.q("nextBtn").style.display=t.hasNext||t.isFinale?"":"none",this.show(this.q("completeScreen"))}hideComplete(){this.starTimers.forEach(t=>clearTimeout(t)),this.starTimers=[],this.hide(this.q("completeScreen"))}showFinal(t){this.q("finalStars").textContent=`${t.stars}/${Zc}`,this.q("finalCoins").textContent=As(t.coins),this.q("finalOrbs").textContent=`${t.orbs}/${mn.length}`,this.show(this.q("finalScreen"))}hideFinal(){this.hide(this.q("finalScreen"))}showSettings(){this.syncSettings(),this.lastFocus=document.activeElement,this.show(this.q("settingsScreen")),setTimeout(()=>{var t;try{(t=this.q("musicRange"))==null||t.focus({preventScroll:!0})}catch{}},80)}hideSettings(){var t,e;this.hide(this.q("settingsScreen"));try{(e=(t=this.lastFocus)==null?void 0:t.focus)==null||e.call(t,{preventScroll:!0})}catch{}}setLevel(t,e){this.q("hudLevel").textContent=String(t),this.q("hudName").textContent=e,this.q("progressFill").style.width="0%",this.q("progressOrb").style.left="0%"}updateProgress(t){let e=`${Math.max(0,Math.min(1,t))*100}%`,n=this.q("progressFill"),s=this.q("progressOrb");n&&(n.style.width=e),s&&(s.style.left=e)}toast(t,e="",n=1800){let s=this.q("toast");s&&(clearTimeout(this.toastTimer),s.textContent=t,s.className=`toast ${e} show`.trim(),this.show(s),this.toastTimer=setTimeout(()=>{s.classList.add("hidden"),s.setAttribute("aria-hidden","true")},n))}setCombo(t){this.comboCount=t;let e=this.q("combo");if(e){if(t<2){this.hide(e),clearTimeout(this.comboTimer);return}e.innerHTML=`COMBO <b>x${t}</b>`,e.classList.remove("hidden","bump"),e.setAttribute("aria-hidden","false"),e.offsetWidth,e.classList.add("bump"),clearTimeout(this.comboTimer),this.comboTimer=setTimeout(()=>this.hide(e),1700)}}flash(t){let e=this.q("screenFlash");e&&(e.className="screen-flash",e.offsetWidth,e.classList.add(t))}showHint(){let t=this.q("hint");t&&(t.innerHTML=es()?'<span class="hint-gesture"><span class="hint-finger"></span> Hold to roll</span><span class="hint-sep">\xB7</span><span class="hint-gesture">Drag to steer</span>':'<span class="hint-gesture"><kbd class="kbd">Space</kbd> Hold to speed up</span><span class="hint-sep">\xB7</span><span class="hint-gesture"><kbd class="kbd">A</kbd> <kbd class="kbd">D</kbd> Steer</span>',this.show(t),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.hide(t),6500))}hideHint(){clearTimeout(this.hintTimer),this.hide(this.q("hint"))}splashStatus(t){let e=this.q("splashStatus");e&&(e.textContent=t)}hideSplash(){let t=this.q("splash");t&&(t.classList.add("fade-out"),setTimeout(()=>t.classList.add("hidden"),500))}showUnsupported(){this.hide(this.q("splash"));let t=this.q("unsupported");t&&t.classList.remove("hidden")}setShowcasePointer(t,e){this.game.setShowcasePointer(t,e)}};var F0=112,Qc=60/F0/4,Si=i=>440*Math.pow(2,(i-69)/12),O0=[{notes:[50,54,57,61],bass:38,arp:[62,66,69,73]},{notes:[47,50,54,57],bass:35,arp:[59,62,66,69]},{notes:[43,47,50,54],bass:31,arp:[55,59,62,66]},{notes:[45,49,52,55],bass:33,arp:[57,61,64,67]}],B0=[0,2,1,3,2,1,3,2],Vr=class{constructor(){this.ctx=null,this.master=null,this.musicBus=null,this.sfxBus=null,this.delaySend=null,this.noiseBuffer=null,this.roll=null,this.musicTimer=null,this.nextNoteTime=0,this.stepIndex=0,this.unlocked=!1,this.ytMuted=!1,this.musicVolume=.65,this.sfxVolume=.85,this.intensity=.35,this.rollActive=!1,this.lastSfxAt=Object.create(null)}get ready(){return!!(this.ctx&&this.unlocked&&this.ctx.state==="running")}unlock(){if(this.unlocked){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t({latencyHint:"interactive"});let e=this.ctx.createDynamicsCompressor();e.threshold.value=-18,e.knee.value=24,e.ratio.value=4,e.attack.value=.004,e.release.value=.24,this.master=this.ctx.createGain(),this.master.gain.value=this.ytMuted?0:.9,this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=this.musicVolume*.5,this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=this.sfxVolume,this.musicBus.connect(this.master),this.sfxBus.connect(this.master),this.master.connect(e),e.connect(this.ctx.destination);let n=Math.floor(this.ctx.sampleRate*2);this.noiseBuffer=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let s=this.noiseBuffer.getChannelData(0);for(let l=0;l<n;l++)s[l]=Math.random()*2-1;let r=this.ctx.createDelay(1);r.delayTime.value=Qc*3;let a=this.ctx.createGain();a.gain.value=.28;let o=this.ctx.createGain();o.gain.value=.3,r.connect(a),a.connect(r),r.connect(o),o.connect(this.musicBus),this.delaySend=this.ctx.createGain(),this.delaySend.gain.value=1,this.delaySend.connect(r),this.startRollLoop(),this.unlocked=!0,this.startMusic(),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}catch(t){console.warn("Audio unavailable:",t),this.unlocked=!1}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}setYouTubeAudio(t){if(this.ytMuted=!t,this.master&&this.ctx){let e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?.9:0,e,.03)}}setMusicVolume(t){this.musicVolume=Rt(t,0,1),this.musicBus&&this.ctx&&this.musicBus.gain.setTargetAtTime(this.musicVolume*.5,this.ctx.currentTime,.05)}setSfxVolume(t){this.sfxVolume=Rt(t,0,1),this.sfxBus&&this.ctx&&this.sfxBus.gain.setTargetAtTime(this.sfxVolume,this.ctx.currentTime,.05)}setIntensity(t){this.intensity=Rt(t,0,1)}startMusic(){!this.ctx||this.musicTimer||(this.nextNoteTime=this.ctx.currentTime+.12,this.stepIndex=0,this.musicTimer=setInterval(()=>this.scheduleMusic(),55))}stopMusic(){this.musicTimer&&clearInterval(this.musicTimer),this.musicTimer=null}scheduleMusic(){if(!this.ctx||this.ctx.state!=="running")return;let t=this.ctx.currentTime+.18,e=0;for(;this.nextNoteTime<t&&e++<12;){let n=Math.floor(this.stepIndex/16)%4,s=this.stepIndex%16;this.scheduleStep(s,n,this.nextNoteTime),this.nextNoteTime+=Qc,this.stepIndex++}}scheduleStep(t,e,n){let s=O0[e],r=this.musicBus;if(t===0){for(let o of s.notes)this.tone({freq:Si(o),type:"triangle",t:n,dur:3.15,gain:.02,attack:.5,filterFreq:780,bus:r,detune:-4}),this.tone({freq:Si(o),type:"sawtooth",t:n,dur:3,gain:.006,attack:.7,filterFreq:620,bus:r,detune:6});this.tone({freq:Si(s.bass),type:"sine",t:n,dur:.72,gain:.12,attack:.012,bus:r})}t===8&&(this.tone({freq:Si(s.bass),type:"sine",t:n,dur:.55,gain:.09,attack:.012,bus:r}),this.tone({freq:Si(s.bass+7),type:"triangle",t:n,dur:.4,gain:.035,attack:.02,bus:r})),t%2===1&&this.intensity>.25&&this.noise({t:n,dur:.035,gain:.012+this.intensity*.012,type:"highpass",freq:7200,bus:r});let a=B0[t/2|0];if(t%4===0||t%2===0&&this.intensity>.55){let o=s.arp[a%s.arp.length]+(t%8===6?12:0);this.pluck(Si(o),n,.022+this.intensity*.012)}t===14&&this.intensity>.6&&this.pluck(Si(s.arp[3]+12),n,.014)}pluck(t,e,n){this.tone({freq:t,type:"sine",t:e,dur:.24,gain:n,attack:.004,bus:this.musicBus,extra:this.delaySend}),this.tone({freq:t*2.005,type:"triangle",t:e,dur:.12,gain:n*.4,attack:.003,bus:this.musicBus,extra:this.delaySend})}tone({freq:t,freqEnd:e,type:n="sine",t:s,dur:r,gain:a,attack:o=.006,filterFreq:l,q:c=.8,bus:h,detune:u=0,extra:f}){if(!this.ctx)return;let m=this.ctx,g=m.createOscillator();g.type=n,g.frequency.setValueAtTime(Math.max(20,t),s),e&&g.frequency.exponentialRampToValueAtTime(Math.max(20,e),s+r),u&&(g.detune.value=u);let _=m.createGain();_.gain.setValueAtTime(1e-4,s),_.gain.linearRampToValueAtTime(Math.max(2e-4,a),s+o),_.gain.exponentialRampToValueAtTime(1e-4,s+r);let p=g;if(l){let d=m.createBiquadFilter();d.type="lowpass",d.frequency.value=l,d.Q.value=c,p.connect(d),p=d}p.connect(_),_.connect(h||this.sfxBus),f&&_.connect(f),g.start(s),g.stop(s+r+.03)}noise({t,dur:e,gain:n,type:s="bandpass",freq:r=1e3,freqEnd:a,q:o=.9,bus:l,attack:c=.004,offset:h}){if(!this.ctx||!this.noiseBuffer)return;let u=this.ctx,f=u.createBufferSource();f.buffer=this.noiseBuffer;let m=u.createBiquadFilter();m.type=s,m.Q.value=o,m.frequency.setValueAtTime(r,t),a&&m.frequency.exponentialRampToValueAtTime(Math.max(40,a),t+e);let g=u.createGain();g.gain.setValueAtTime(1e-4,t),g.gain.linearRampToValueAtTime(Math.max(2e-4,n),t+c),g.gain.exponentialRampToValueAtTime(1e-4,t+e),f.connect(m),m.connect(g),g.connect(l||this.sfxBus),this.noiseBuffer&&f.start(t,h!=null?h:Math.random()*1.5),f.stop(t+e+.03)}startRollLoop(){let t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=360,n.Q.value=.75;let s=t.createGain();s.gain.value=1e-4,e.connect(n),n.connect(s),s.connect(this.sfxBus),e.start(),this.roll={gain:s,filter:n}}updateRoll(t,e,n){if(!this.ctx||!this.roll)return;let s=this.ctx.currentTime,r=Rt(t/18,0,1.3),a=0;e&&(a=n?.045+r*.05:.014+r*.014),this.roll.gain.gain.setTargetAtTime(a,s,.07),this.roll.filter.frequency.setTargetAtTime(n?300+t*26:780+t*12,s,.1)}stopRoll(){!this.ctx||!this.roll||this.roll.gain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.04)}sfx(t,e={}){if(!this.ready)return;let n=this.ctx.currentTime+.001,s=this.ctx.currentTime,r=this.lastSfxAt[t]||0;if(!(s-r<.016))switch(this.lastSfxAt[t]=s,t){case"click":{this.tone({freq:740,type:"triangle",t:n,dur:.07,gain:.07}),this.tone({freq:1180,type:"sine",t:n+.02,dur:.06,gain:.035});break}case"coin":{let a=Math.min(12,e.combo||0),o=980*Math.pow(2,a/12);this.tone({freq:o,type:"sine",t:n,dur:.075,gain:.085}),this.tone({freq:o*1.498,type:"sine",t:n+.052,dur:.11,gain:.075}),this.noise({t:n,dur:.05,gain:.018,type:"highpass",freq:5200});break}case"gem":{[880,1174.66,1567.98].forEach((a,o)=>{this.tone({freq:a,type:"sine",t:n+o*.055,dur:.3,gain:.06}),this.tone({freq:a*2,type:"triangle",t:n+o*.055,dur:.16,gain:.018})}),this.noise({t:n,dur:.45,gain:.018,type:"highpass",freq:6800});break}case"bounce":{this.tone({freq:220,freqEnd:95,type:"sine",t:n,dur:.2,gain:.12}),this.noise({t:n,dur:.06,gain:.03,type:"lowpass",freq:900});break}case"hit":{this.tone({freq:130,freqEnd:45,type:"sine",t:n,dur:.28,gain:.26}),this.noise({t:n,dur:.2,gain:.16,type:"lowpass",freq:1400}),this.noise({t:n,dur:.05,gain:.1,type:"highpass",freq:2600});break}case"boost":{this.noise({t:n,dur:.34,gain:.1,type:"bandpass",freq:700,freqEnd:4800,q:1.4}),this.tone({freq:240,freqEnd:660,type:"triangle",t:n,dur:.3,gain:.045});break}case"checkpoint":{[523.25,659.25,783.99].forEach((a,o)=>{this.tone({freq:a,type:"triangle",t:n+o*.08,dur:.35,gain:.07})}),this.noise({t:n+.12,dur:.3,gain:.014,type:"highpass",freq:6400});break}case"fall":{this.tone({freq:640,freqEnd:130,type:"sine",t:n,dur:.55,gain:.1}),this.noise({t:n,dur:.5,gain:.03,type:"bandpass",freq:900,freqEnd:300});break}case"respawn":{this.tone({freq:420,freqEnd:760,type:"triangle",t:n,dur:.22,gain:.06}),this.noise({t:n,dur:.18,gain:.02,type:"highpass",freq:4e3});break}case"win":{[523.25,659.25,783.99,1046.5].forEach((o,l)=>{this.tone({freq:o,type:"triangle",t:n+l*.115,dur:.5,gain:.095}),this.tone({freq:o*2,type:"sine",t:n+l*.115,dur:.3,gain:.03})}),this.tone({freq:1046.5,type:"triangle",t:n+.5,dur:1.1,gain:.07}),this.tone({freq:1318.5,type:"sine",t:n+.5,dur:1,gain:.04}),this.noise({t:n+.3,dur:1.2,gain:.02,type:"highpass",freq:6800});break}case"star":{let a=Rt(e.index||0,0,4),o=[880,1108.73,1318.51,1760,2217];this.tone({freq:o[a],type:"triangle",t:n,dur:.5,gain:.085}),this.tone({freq:o[a]*2,type:"sine",t:n,dur:.25,gain:.025});break}case"buy":{[659.25,987.77,1318.51].forEach((a,o)=>{this.tone({freq:a,type:"triangle",t:n+o*.06,dur:.24,gain:.075})}),this.noise({t:n+.1,dur:.2,gain:.025,type:"highpass",freq:5600});break}case"deny":{this.tone({freq:150,freqEnd:110,type:"square",t:n,dur:.16,gain:.045,filterFreq:800});break}case"land":{this.tone({freq:160,freqEnd:80,type:"sine",t:n,dur:.14,gain:.07}),this.noise({t:n,dur:.07,gain:.025,type:"lowpass",freq:700});break}default:break}}};var jc=new A(0,1,0);function k0(){let{canvas:i,ctx:t}=re(256,256);t.fillStyle="#23272f",t.fillRect(0,0,256,256),t.save(),t.translate(128,128),t.rotate(-Math.PI/4),t.fillStyle="#ffc93c";for(let n=-320;n<320;n+=64)t.fillRect(n,-320,32,640);t.restore(),t.fillStyle="rgba(0,0,0,0.18)";for(let n=0;n<180;n++)t.fillRect(Math.random()*256,Math.random()*256,1.5,1.5);let e=t.createLinearGradient(0,0,0,256);return e.addColorStop(0,"rgba(255,255,255,0.18)"),e.addColorStop(.5,"rgba(255,255,255,0)"),e.addColorStop(1,"rgba(0,0,0,0.25)"),t.fillStyle=e,t.fillRect(0,0,256,256),ce(i,{repeat:!0})}function H0(i,t){let e=i.frameAt(t),n=new jt,s=new Yt().makeBasis(e.n,jc,e.t);return n.quaternion.setFromRotationMatrix(s),n.position.copy(e.p),i.group.add(n),{group:n,frame:e}}function bi(i,t,e,n,s,r,a,o){let l=new _t(new ve(t,e,n),o);return l.position.set(s,r,a),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function th(i,t,e){let n=Rt(t.at,.02,.97)*i.length,{group:s}=H0(i,n),r=i.width/2,a=new Gt({color:2567744,metalness:.82,roughness:.32}),o=new Gt({color:4871539,metalness:.75,roughness:.38}),l=new Gt({map:k0(),metalness:.32,roughness:.5}),c=new Gt({color:16726862,emissive:16720435,emissiveIntensity:.7,metalness:.35,roughness:.3}),h=new Gt({color:e.accent,emissive:e.accent,emissiveIntensity:e.id==="neon"?1.4:.55,metalness:.5,roughness:.25}),u=t.type,f=null,m=null,g=new A,_=null;if(u==="hammer"){bi(s,.26,4.5,.26,-(r+.82),2.25,0,o),bi(s,r+.82,.2,.2,-(r+.82)/2,4.4,0,a);let d=new _t(new ue(.17,.17,.5,12),o);d.rotation.x=Math.PI/2,d.position.set(0,4.4,0),s.add(d);let y=new jt;y.position.set(0,4.3,0),s.add(y),bi(y,.14,3.4,.14,0,-1.7,0,a);let x=new _t(new ue(.7,.7,1.15,20),c);x.rotation.x=Math.PI/2,x.position.set(0,-3.4,0),x.castShadow=!0,y.add(x);for(let P of[-.58,.58]){let S=new _t(new ue(.74,.74,.08,20),h);S.rotation.x=Math.PI/2,S.position.set(0,-3.4,P),y.add(S)}let E=new _t(new He(.16,12,10),h);E.position.set(0,-1.7,0),y.add(E),f=x,_={pivot:y,amp:.62,arm:3.4,pivotY:4.3}}else if(u==="wrecking"){bi(s,.28,5.6,.28,-(r+.78),2.8,0,o),bi(s,.28,5.6,.28,r+.78,2.8,0,o),bi(s,(r+.78)*2+.28,.3,.3,0,5.6,0,a);let d=new _t(new ue(.18,.18,.6,12),o);d.rotation.z=Math.PI/2,d.position.set(0,5.45,0),s.add(d);let y=new jt;y.position.set(0,5.45,0),s.add(y),bi(y,.16,4.1,.16,0,-2.05,0,a);let x=new _t(new He(.8,22,16),a);x.position.set(0,-4.1,0),x.castShadow=!0,y.add(x);let E=new _t(new Un(.81,.09,8,24),c);E.rotation.x=Math.PI/2,E.position.set(0,-4.1,0),y.add(E);let P=new _t(new He(.22,10,8),h);P.position.set(0,-3.4,0),y.add(P),f=x,_={pivot:y,amp:.72,arm:4.1,pivotY:5.45,axis:"x"}}else if(u==="block"){let d=new _t(new ve(1.7,1.6,1.4),l);d.position.set(0,.8,0),d.castShadow=!0,d.receiveShadow=!0,s.add(d);let y=new _t(new ve(1.78,.12,1.48),h);y.position.set(0,1.66,0),s.add(y);let x=new _t(new ve(1.78,.1,1.48),a);x.position.set(0,-.02,0),s.add(x),f=d}else if(u==="spinner"){let d=t.side||1,y=-d*(r+.72),x=r*2+1.35,E=new _t(new ue(.3,.4,.5,12),a);E.position.set(y,.25,0),E.castShadow=!0,s.add(E);let P=new _t(new ue(.16,.16,1,10),o);P.position.set(y,.75,0),s.add(P);let S=new jt;S.position.set(y,.86,0),s.add(S);let C=new Ir(.17,Math.max(.2,x-.34),6,10);C.rotateZ(Math.PI/2);let F=new _t(C,c);F.position.x=d*x/2,F.castShadow=!0,S.add(F);let v=new _t(new He(.28,12,10),h);v.position.x=d*(x-.16),S.add(v);let w=new _t(new ue(.26,.26,.3,12),a);w.position.y=.05,S.add(w),f=F,_={pivot:S,side:d,barLen:x,hubX:y,amp:0,axis:"y"}}let p={type:u,spec:t,group:s,dist:n,update(d,y){if(!_){if(u==="block"){let E=Math.max(.4,t.amp*r),P=d*(t.speed||1)+(t.phase||0),S=Math.sin(P)*E;f&&(f.position.x=S),p.blockX=S,p.blockVel=Math.cos(P)*E*(t.speed||1),p.blockLimit=E}s.updateMatrixWorld(!0);return}let x=Math.sin(d*(t.speed||1.4)+(t.phase||0))*_.amp;if(_.axis==="x"?_.pivot.rotation.x=x:_.axis==="y"?_.pivot.rotation.y=d*(t.speed||1.4)+(t.phase||0):_.pivot.rotation.z=x,s.updateMatrixWorld(!0),f){let E=new A;f.getWorldPosition(E),m&&y>0&&g.copy(E).sub(m).multiplyScalar(1/y).clampLength(0,22),m=E}},collide(d,y){if(u==="block"){let F=s.worldToLocal(d.clone()),v=p.blockX||0,w=.85,D=.8,X=.7,nt=F.x-v,L=F.y-.8,N=F.z,q=new A(v+Rt(nt,-w,w),.8+Rt(L,-D,D),Rt(N,-X,X)),Q=new A(F.x-q.x,F.y-q.y,F.z-q.z),$=Q.length();if($>=y)return null;let z;$<1e-4?z=new A(Math.sign(nt)||1,0,0):z=Q.multiplyScalar(1/$);let K=z.clone().applyQuaternion(s.quaternion),Z=K.clone().multiplyScalar(y-$+.02),ct=new A((p.blockVel||0)*.14,0,0).applyQuaternion(s.quaternion);return{normal:K,push:Z,impulse:K.clone().multiplyScalar(4.4).add(ct).add(new A(0,1.8,0)),kind:"block"}}if(u==="spinner"){let F=new A,v=new A;_.pivot.getWorldPosition(v);let w=new A(_.side*_.barLen,0,0),D=_.pivot.localToWorld(w.clone()),X=new A().subVectors(D,v),nt=X.lengthSq()||1,L=Rt(new A().subVectors(d,v).dot(X)/nt,0,1),N=v.clone().addScaledVector(X,L),q=Math.abs(d.y-N.y),Q=Math.hypot(d.x-N.x,d.z-N.z);if(Q>y+.2||q>1.05)return null;let $=new A(d.x-N.x,0,d.z-N.z);$.lengthSq()<1e-4&&$.set(1,0,0),$.normalize();let z=new A().subVectors(N,v),K=new A().crossVectors(jc,z).normalize().multiplyScalar((t.speed||1.4)*3.2);return{normal:$,push:$.clone().multiplyScalar(y+.2-Q+.02),impulse:$.clone().multiplyScalar(5.2).add(K).add(new A(0,2,0)),kind:"spinner"}}if(!f)return null;let x=new A;f.getWorldPosition(x);let E=y+(u==="wrecking"?.82:.72),P=new A().subVectors(d,x),S=P.length();if(S>E)return null;let C=S<1e-4?new A(0,1,0):P.multiplyScalar(1/S);return{normal:C,push:C.clone().multiplyScalar(E-S+.02),impulse:C.clone().multiplyScalar(6.4).add(g.clone().multiplyScalar(.35)).add(new A(0,2.6,0)),kind:u}}};return p}var ze=new A(0,1,0);function z0(){let{canvas:i,ctx:t}=re(256,512),e=t.createLinearGradient(0,0,256,0);e.addColorStop(0,"#b07a4e"),e.addColorStop(.28,"#c68e5c"),e.addColorStop(.5,"#b98251"),e.addColorStop(.75,"#c99361"),e.addColorStop(1,"#a96f45"),t.fillStyle=e,t.fillRect(0,0,256,512);let n=64;for(let s=0;s<512;s+=n){t.fillStyle="rgba(60,30,12,0.45)",t.fillRect(0,s,256,3),t.fillStyle="rgba(255,225,190,0.12)",t.fillRect(0,s+3,256,2);for(let r=0;r<26;r++){let a=Math.random()*256,o=s+6+Math.random()*(n-10),l=20+Math.random()*90;t.strokeStyle=`rgba(${70+Math.random()*40},${40+Math.random()*25},${20+Math.random()*15},0.22)`,t.lineWidth=.8+Math.random(),t.beginPath(),t.moveTo(a,o),t.bezierCurveTo(a+l*.3,o+3,a+l*.6,o-3,a+l,o+1),t.stroke()}if(Math.random()>.55){let r=30+Math.random()*190,a=s+16+Math.random()*30;t.strokeStyle="rgba(55,28,12,0.4)",t.lineWidth=2,t.beginPath(),t.ellipse(r,a,5+Math.random()*4,3+Math.random()*3,0,0,Math.PI*2),t.stroke()}}return ce(i,{repeat:!0,anisotropy:8})}function V0(){let{canvas:i,ctx:t}=re(256,128),e=32;for(let n=0;n<128;n+=e)for(let s=0;s<256;s+=e)t.fillStyle=(s/e+n/e)%2===0?"#f4f6ff":"#151824",t.fillRect(s,n,e,e);return ce(i,{repeat:!0})}function eh(i){let{canvas:t,ctx:e}=re(256,512);e.clearRect(0,0,256,512),e.strokeStyle=i,e.lineWidth=26,e.lineCap="round",e.lineJoin="round",e.shadowColor=i,e.shadowBlur=26;for(let n=0;n<3;n++){let s=110+n*140;e.beginPath(),e.moveTo(62,s+52),e.lineTo(128,s-8),e.lineTo(194,s+52),e.stroke()}return ce(t)}function G0(i){let{canvas:t,ctx:e}=re(512,256),n=e.createLinearGradient(0,0,0,256);return n.addColorStop(0,"rgba(16,22,40,0)"),n.addColorStop(.35,"rgba(16,22,40,0.55)"),n.addColorStop(1,"rgba(16,22,40,0)"),e.fillStyle=n,e.fillRect(0,0,512,256),e.strokeStyle=i.accentCss,e.lineWidth=10,e.shadowColor=i.accentCss,e.shadowBlur=22,e.strokeRect(46,42,420,172),e.shadowBlur=0,e.fillStyle="#ffffff",e.font="900 86px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("START",256,132),ce(t)}function W0(i){let{canvas:t,ctx:e}=re(1024,256),n=e.createLinearGradient(0,0,1024,0);n.addColorStop(0,"#131a33"),n.addColorStop(.5,"#1d2748"),n.addColorStop(1,"#131a33"),e.fillStyle=n,e.fillRect(0,0,1024,256);let s=32;for(let r=0;r<1024;r+=s)for(let a=0;a<3;a++)for(let o=0;o<2;o++){let l=r+o*(s/2),c=a*s+(a===1?s/2:0);e.fillStyle=(r/s+a+o)%2===0?"#f2f5ff":"#11141f",e.fillRect(l,c,s/2,s/2),e.fillRect(l+1024-s,256-c-s/2,s/2,s/2)}return e.strokeStyle=i.accentCss,e.lineWidth=12,e.strokeRect(64,40,896,176),e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle",e.font="900 118px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",e.shadowColor=i.accentCss,e.shadowBlur=34,e.fillText("FINISH",512,132),e.shadowBlur=0,ce(t)}function Fo(i,t,e,n,s,r){let a=[],o=[],l=[];for(let[u,f]of t){if(f<=u)continue;let m=a.length/3;for(let _=u;_<=f;_++){let p=i[_],d=p.p.clone().addScaledVector(p.n,e),y=p.p.clone().addScaledVector(p.n,n);d.y+=s,y.y+=s,a.push(d.x,d.y,d.z,y.x,y.y,y.z),o.push(0,p.dist/6,1,p.dist/6)}let g=f-u+1;for(let _=0;_<g-1;_++){let p=m+_*2,d=p+1,y=p+2,x=p+3;l.push(p,y,d,d,y,x)}}let c=new se;c.setAttribute("position",new $t(a,3)),c.setAttribute("uv",new $t(o,2)),c.setIndex(l),c.computeVertexNormals();let h=new _t(c,r);return h.receiveShadow=!0,h}function X0(i,t,e,n){let s=[],r=[],a=(c,h,u)=>{let f=c.p.clone().addScaledVector(c.n,h);u&&(f.y-=.85),s.push(f.x,f.y,f.z)};for(let[c,h]of t)if(!(h<=c))for(let u of[-1,1]){let f=s.length/3;for(let g=c;g<=h;g++)a(i[g],u*e,!1),a(i[g],u*e,!0);let m=h-c+1;for(let g=0;g<m-1;g++){let _=f+g*2,p=_+1,d=_+2,y=_+3;r.push(_,p,d,p,y,d,_,d,p,p,d,y)}}let o=new se;o.setAttribute("position",new $t(s,3)),o.setIndex(r),o.computeVertexNormals();let l=new _t(o,n);return l.receiveShadow=!0,l}function Cs(i,t,e,n,s=!1){if(!n.length)return null;let r=new rn(t,e,n.length);for(let a=0;a<n.length;a++)r.setMatrixAt(a,n[a]);return r.instanceMatrix.needsUpdate=!0,r.castShadow=s,r.receiveShadow=!1,i.add(r),r}function nh(i,t){let e=new jt,n=new Ss(i.points.map(O=>new A(O[0],O[1],O[2])),!1,"centripetal",.5);n.arcLengthDivisions=2400;let s=n.getLength(),a=Math.max(160,Math.ceil(s/.75)),o=[];for(let O=0;O<=a;O++){let I=O/a,J=n.getPointAt(I),j=n.getTangentAt(I).normalize(),mt=new A().crossVectors(ze,j).normalize();o.push({p:J,t:j,n:mt,dist:I*s})}let l=s/a,c=i.width/2,h=O=>{let I=Rt(O,0,s),J=I/l,j=Math.floor(J);j>=a&&(j=a-1);let mt=Rt(J-j,0,1),et=o[j],Y=o[j+1],R=et.p.clone().lerp(Y.p,mt),it=et.t.clone().lerp(Y.t,mt).normalize(),lt=new A().crossVectors(ze,it).normalize();return{p:R,t:it,n:lt,dist:I}},u=(O,I)=>{let J=O-I/2,j=O+I/2;if(J<14||j>s-18)return 1/0;let mt=0,et=null;for(let Y=Math.max(0,J-8);Y<=j+.01;Y+=1.3){let R=h(Y).t;et&&(mt+=1-et.dot(R)),et=R}return mt},f=[],m=i.gaps.map(O=>{let I=Rt(O.at,.1,.92)*s,J=I,j=1/0;for(let mt=-.09*s;mt<=.09*s;mt+=2){let et=u(I+mt,O.len);et<j&&(j=et,J=I+mt)}return{base:J,len:O.len}}).sort((O,I)=>O.base-I.base),g=-999;for(let O of m){let I=O.base,J=Math.ceil((I-O.len/2)/l)*l,j=Math.floor((I+O.len/2)/l)*l;if(J<g+12){let mt=g+12-J;J+=mt,j+=mt}J=Math.max(12,J),j=Math.min(s-16,j),j-J<4.2&&(j=Math.min(s-16,J+4.2)),!(j-J<3.6)&&(f.push({start:J,end:j,rampStart:Math.max(8,J-2.1)}),g=j)}let _=O=>f.some(I=>O>=I.start&&O<=I.end),p=[],d=0;for(let O=0;O<o.length;O++)_(o[O].dist)&&(O-1>=d&&p.push([d,O-1]),d=O+1);d<o.length&&p.push([d,o.length-1]),p.length||p.push([0,o.length-1]);let y=z0(),x=new Gt({map:y,color:t.trackTint,roughness:.78,metalness:.06}),E=new Gt({color:7096879,roughness:.9,metalness:.05,side:Ae}),P=new Gt({color:t.accent,emissive:t.accent,emissiveIntensity:t.id==="neon"?1.1:.28,roughness:.32,metalness:.4}),S=Fo(o,p,-c,c,0,x);S.castShadow=!1,e.add(S),e.add(X0(o,p,c,E)),e.add(Fo(o,p,-c,-c+.17,.015,P)),e.add(Fo(o,p,c-.17,c,.015,P));let C=new Gt({color:3818072,metalness:.55,roughness:.5}),F=new ve(i.width+.9,.24,.3),v=[],w=[],D=new Yt,X=new A,nt=new ke,L=new A(1,1,1),N=16,q=8;for(let O=4;O<s-4;O+=3){if(_(O))continue;let I=h(O),J=I.p.clone().addScaledVector(ze,-.6);D.makeBasis(I.n,ze,I.t),nt.setFromRotationMatrix(D);let j=new Yt().compose(J,nt,L);if(v.push(j),O>=q){q+=N;let mt=I.p.clone();mt.y-=2.2,w.push(new Yt().compose(mt,new ke,L))}}Cs(e,F,C,v);let Q=new ue(.16,.34,3.4,8);Cs(e,Q,C,w);let $=new Gt({color:t.railA,emissive:t.railA,emissiveIntensity:t.id==="neon"?.9:.16,metalness:.45,roughness:.35}),z=new Gt({color:t.railB,emissive:t.railB,emissiveIntensity:t.id==="neon"?.35:.05,metalness:.55,roughness:.4}),K=new ve(.1,.16,1.55),Z=new ve(.12,.9,.12),ct=[],k=[],tt=[];for(let O of i.rails||[]){let I=Math.max(2,O.from*s),J=Math.min(s-4,O.to*s);for(let j of[-1,1]){let mt=0;for(let et=I;et<J;et+=1.35){if(_(et))continue;let Y=h(et),R=Y.p.clone().addScaledVector(Y.n,j*(c+.03));R.y+=.88,D.makeBasis(Y.n,ze,Y.t),nt.setFromRotationMatrix(D);let it=new Yt().compose(R,nt,L);(mt+(j===1?1:0))%2===0?ct.push(it):k.push(it),mt++}for(let et=I;et<J;et+=2.7){if(_(et))continue;let Y=h(et),R=Y.p.clone().addScaledVector(Y.n,j*(c+.03));R.y+=.45,tt.push(new Yt().compose(R,new ke,L))}}}Cs(e,K,$,ct),Cs(e,K,z,k),Cs(e,Z,C,tt);let ut=new Me({map:G0(t),transparent:!0,depthWrite:!1,side:Ae,polygonOffset:!0,polygonOffsetFactor:-2}),ft=new _t(new Je(i.width*.92,4.4),ut),gt=h(2.2);D.makeBasis(gt.n.clone().negate(),gt.t,ze),ft.quaternion.setFromRotationMatrix(D),ft.position.copy(gt.p).addScaledVector(ze,.03),e.add(ft);let Lt=new Me({map:eh(t.accentCss),transparent:!0,depthWrite:!1,side:Ae,blending:We,polygonOffset:!0,polygonOffsetFactor:-3}),It=[];for(let O of i.boosts||[]){let I=Rt(O.at,.08,.93)*s,J=f.find(R=>I>R.start-8&&I<R.end+8);if(J&&(I=J.end+9),I>s-12&&(I=s-12),f.some(R=>I>R.start-4&&I<R.end+4))continue;let j=I-1.7,mt=I+1.7,et=h(I),Y=new _t(new Je(i.width*.7,3.4),Lt);Y.geometry=Y.geometry.clone(),Y.geometry.rotateX(Math.PI/2),D.makeBasis(et.n,ze,et.t),Y.quaternion.setFromRotationMatrix(D),Y.position.copy(et.p).addScaledVector(ze,.04),e.add(Y),It.push({from:j,to:mt})}let At=new Gt({color:9067062,roughness:.7,metalness:.1}),zt=P;for(let O of f){let I=h(O.rampStart),J=2,j=.42,mt=i.width*.94,et=mt/2,Y=[-et,0,0,-et,j,J,et,j,J,-et,0,0,et,j,J,et,0,0,-et,j,J,-et,0,J,et,0,J,-et,j,J,et,0,J,et,j,J,et,0,0,et,j,J,et,0,J,-et,0,0,-et,0,J,-et,j,J],R=new se;R.setAttribute("position",new $t(Y,3)),R.computeVertexNormals();let it=new _t(R,At);it.castShadow=!0,it.receiveShadow=!0,D.makeBasis(I.n,ze,I.t),it.quaternion.setFromRotationMatrix(D),it.position.copy(I.p),e.add(it);let lt=new _t(new ve(mt,.06,.12),zt);lt.position.set(0,j,J-.06),it.add(lt)}let B=new Gt({color:3160400,metalness:.75,roughness:.32}),Kt=new Gt({color:t.accent,emissive:t.accent,emissiveIntensity:t.id==="neon"?1.5:.7,metalness:.4,roughness:.25}),St=eh(t.accentCss),Nt=new Me({map:St,color:t.accent,transparent:!0,opacity:.22,blending:We,depthWrite:!1,side:Ae}),vt=[],ee=[];for(let O of i.checkpoints||[]){let I=Rt(O,.15,.88)*s,J=f.find(R=>I>R.start-5&&I<R.end+5);if(J&&(I=J.end+7),I>s-18&&(I=s-18),vt.some(R=>Math.abs(R-I)<25)||I<18)continue;vt.push(I);let j=h(I),mt=new jt;D.makeBasis(j.n,ze,j.t),mt.quaternion.setFromRotationMatrix(D),mt.position.copy(j.p);for(let R of[-1,1]){let it=new _t(new ve(.22,3.2,.22),B);it.position.set(R*(c+.35),1.6,0),it.castShadow=!0,mt.add(it);let lt=new _t(new ve(.3,.3,.3),Kt);lt.position.set(R*(c+.35),3.25,0),mt.add(lt)}let et=new _t(new ve(i.width+.9,.2,.24),B);et.position.set(0,3.28,0),mt.add(et);let Y=new _t(new Je(i.width+.2,2.9),Nt.clone());Y.position.set(0,1.6,0),mt.add(Y),mt.userData.glow=Y,mt.userData.phase=Math.random()*Math.PI*2,e.add(mt),ee.push(mt)}vt.sort((O,I)=>O-I);let Ot=s-5.2,T=h(Ot),M=new jt;D.makeBasis(T.n,ze,T.t),M.quaternion.setFromRotationMatrix(D),M.position.copy(T.p);for(let O of[-1,1]){let I=new _t(new ve(.34,5.6,.34),B);I.position.set(O*(c+1.05),2.8,0),I.castShadow=!0,M.add(I);let J=new _t(new He(.22,12,10),Kt);J.position.set(O*(c+1.05),5.7,0),M.add(J)}let H=new _t(new ve((c+1.05)*2+.4,.36,.4),B);H.position.set(0,5.5,0),M.add(H);let at=new Me({map:W0(t),side:Ae}),st=new _t(new Je((c+1)*2,1.35),at);st.position.set(0,4.55,0),M.add(st),e.add(M);let ot=new Gt({map:(()=>{let O=V0();return O.repeat.set(8,1.6),O})(),roughness:.6,metalness:.1,side:Ae,polygonOffset:!0,polygonOffsetFactor:-2}),Mt=new _t(new Je(i.width,1.5),ot);Mt.geometry.rotateX(Math.PI/2);let pt=h(Ot-1.1);D.makeBasis(pt.n,ze,pt.t),Mt.quaternion.setFromRotationMatrix(D),Mt.position.copy(pt.p).addScaledVector(ze,.03),e.add(Mt);let ht={def:i,theme:t,group:e,curve:n,length:s,width:i.width,halfWidth:c,samples:o,realStep:l,sampleCount:a,frameAt:h,gaps:f,finishDist:Ot,checkpointDists:vt,boostZones:It,obstacles:[],gates:ee,coinTotal:0,coins:[],gems:[],coinMesh:null,gemMeshes:[],isGapAt(O){return f.some(I=>O>=I.start&&O<=I.end)},isRailAt(O){for(let I of i.rails||[]){let J=I.from*s,j=I.to*s;if(O>=J&&O<=j)return!0}return!1},nearest(O,I=0){let J=Rt(I|0,0,a-1),j=Math.max(0,J-14),mt=Math.min(a-1,J+14),et=null;for(let Y=j;Y<=mt;Y++){let R=o[Y],it=o[Y+1],lt=X.copy(it.p).sub(R.p),wt=lt.lengthSq()||1,Tt=Rt(new A().subVectors(O,R.p).dot(lt)/wt,0,1),Jt=R.p.clone().addScaledVector(lt,Tt),Qt=O.distanceToSquared(Jt);if(!et||Qt<et.d2){let me=R.t.clone().lerp(it.t,Tt).normalize(),Ee=new A().crossVectors(ze,me).normalize();et={index:Y,d2:Qt,dist:R.dist+(it.dist-R.dist)*Tt,point:Jt,t:me,n:Ee,lat:new A().subVectors(O,Jt).dot(Ee)}}}return et},update(O,I){for(let J of ht.obstacles)J.update(O,I);for(let J of ee){let j=J.userData.glow;j&&(j.material.opacity=.14+.1*(.5+.5*Math.sin(O*1.8+J.userData.phase)))}if(ht.coinMesh){for(let J=0;J<ht.coins.length;J++){let j=ht.coins[J];if(j.taken)continue;let mt=j.basePos.y+Math.sin(O*2.1+j.phase)*.09,et=new ke().setFromEuler(new mi(0,O*2.6+j.phase,0)),Y=new ke().setFromEuler(new mi(Math.PI/2,0,0));et.multiply(Y);let R=new Yt().compose(new A(j.basePos.x,mt,j.basePos.z),et,new A(1,1,1));ht.coinMesh.setMatrixAt(j.instance,R)}ht.coinMesh.instanceMatrix.needsUpdate=!0}for(let J of ht.gemMeshes)J.userData.taken||(J.rotation.y=O*1.7+J.userData.phase,J.position.y=J.userData.baseY+Math.sin(O*2.4+J.userData.phase)*.12)},collect(O,I=1.15){let J=0;for(let j of ht.coins)j.taken||j.basePos.distanceToSquared(O)<(I+.42)*(I+.42)&&(j.taken=!0,J+=1,ht.coinMesh&&(ht.coinMesh.setMatrixAt(j.instance,new Yt().makeScale(0,0,0)),ht.coinMesh.instanceMatrix.needsUpdate=!0));for(let j of ht.gemMeshes)j.userData.taken||j.position.distanceToSquared(O)<(I+.5)*(I+.5)&&(j.userData.taken=!0,j.visible=!1,J+=10);return J},respawnIndex(O){return Rt(O/l|0,0,a-1)}},Et=[];for(let O of i.obstacles||[]){let I=Rt(O.at,.03,.96)*s;for(let j=0;j<8;j++){let mt=f.find(Y=>I>Y.start-4.5&&I<Y.end+4.5);mt&&(I=mt.end+6.5);let et=Et.find(Y=>Math.abs(Y.d-I)<9);et&&(I=et.d+9.5),I=Rt(I,15,s-15)}if(Et.some(j=>Math.abs(j.d-I)<6))continue;Et.push({d:I,spec:O});let J=th(ht,{...O,at:I/s},t);J.update(0,0),ht.obstacles.push(J)}let kt=new ue(.34,.34,.1,20),rt=new Gt({color:16766282,emissive:10117632,emissiveIntensity:.7,metalness:.35,roughness:.35}),Zt=[];for(let O of i.coinRuns){let I=Rt(O.from,.015,.97)*s,J=Rt(O.to,I+4,.97*s),j=Math.max(3,O.n||5);for(let mt=0;mt<j;mt++){let et=j===1?.5:mt/(j-1),Y=I+(J-I)*et,R;if(O.kind==="slide"?R=O.lat+(O.lat2-O.lat)*et:O.kind==="wave"?R=O.lat+Math.sin(et*Math.PI*2*(O.waves||1))*(O.amp||1.2):R=O.lat,R=Rt(R,-(c-1),c-1),_(Y)||Y<4||Y>s-3||f.some(wt=>Math.abs(Y-wt.start)<1.4||Math.abs(Y-wt.end)<1.4)||Et.some(wt=>Math.abs(wt.d-Y)<4.2))continue;let it=h(Y),lt=it.p.clone().addScaledVector(it.n,R);lt.y+=1.02,Zt.push({dist:Y,lat:R,basePos:lt,phase:Math.random()*Math.PI*2})}}let Ft=new rn(kt,rt,Math.max(1,Zt.length));for(let O=0;O<Zt.length;O++){let I=Zt[O];I.instance=O,I.taken=!1,Ft.setMatrixAt(O,new Yt().compose(I.basePos,new ke,new A(1,1,1)))}Ft.instanceMatrix.setUsage(Uc),Ft.count=Zt.length,Ft.frustumCulled=!1,e.add(Ft),ht.coins=Zt,ht.coinMesh=Ft;let Dt=new Qn(.46,0);for(let O of i.gems||[]){let I=Rt(O.at,.06,.94)*s;if(_(I)){let it=f.find(lt=>I>=lt.start&&I<=lt.end);it&&(I=it.end+4)}let J=Et.find(it=>Math.abs(it.d-I)<4);J&&(I=J.d+5),I>s-6&&(I=s-6);let j=Rt(O.lat,-(c-1.1),c-1.1),mt=h(I),et=mt.p.clone().addScaledVector(mt.n,j);et.y+=1.25;let Y=new Gt({color:9369599,emissive:2078424,emissiveIntensity:1.35,metalness:.55,roughness:.12}),R=new _t(Dt,Y);R.position.copy(et),R.castShadow=!0,R.userData.baseY=et.y,R.userData.phase=Math.random()*Math.PI*2,R.userData.taken=!1,e.add(R),ht.gemMeshes.push(R)}return ht.coinTotal=ht.coins.length+ht.gemMeshes.length*10,ht}var Oo=new Map;function q0(i){let{canvas:n,ctx:s}=re(1024,512),r=new Pt(i.fog),a=r.clone().lerp(new Pt(i.skyBottom),.4),o=r.clone().offsetHSL(0,0,i.id==="neon"?.015:.07),l=s.createLinearGradient(0,0,0,512);if(l.addColorStop(0,i.skyTop),l.addColorStop(.42,i.skyMid),l.addColorStop(.478,i.skyHorizon),l.addColorStop(.555,i.skyBottom),l.addColorStop(.64,`#${a.getHexString()}`),l.addColorStop(1,`#${o.getHexString()}`),s.fillStyle=l,s.fillRect(0,0,1024,512),i.stars>0){let p=Ce(i.id==="neon"?9001:42);for(let d=0;d<i.stars;d++){let y=p()*1024,x=p()*512*.52,E=p()*1.2+.3,P=.25+p()*.75;s.fillStyle=`rgba(${p()>.85?"170,240,255":"255,255,255"},${P})`,s.beginPath(),s.arc(y,x,E,0,Math.PI*2),s.fill()}}let c=i.sun.x*1024,h=i.sun.y*512,u=i.sun.size*1024,f=s.createRadialGradient(c,h,u*.1,c,h,u*3.2);f.addColorStop(0,i.sun.glow),f.addColorStop(.22,i.sun.glow.replace(/[\d.]+\)$/,"0.28)")),f.addColorStop(1,"rgba(255,255,255,0)"),s.globalCompositeOperation="lighter",s.globalAlpha=.8,s.fillStyle=f,s.fillRect(0,0,1024,512),s.globalAlpha=1;let m=s.createRadialGradient(c,h,0,c,h,u);m.addColorStop(0,i.sun.color),m.addColorStop(.72,i.sun.color),m.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=m,s.beginPath(),s.arc(c,h,u,0,Math.PI*2),s.fill(),s.globalCompositeOperation="source-over",i.moon&&(s.fillStyle="rgba(240,245,255,0.82)",s.beginPath(),s.arc(c,h,u*.62,0,Math.PI*2),s.fill(),s.fillStyle="rgba(200,210,235,0.30)",s.beginPath(),s.arc(c-u*.18,h-u*.12,u*.12,0,Math.PI*2),s.arc(c+u*.16,h+u*.14,u*.08,0,Math.PI*2),s.arc(c+u*.02,h-u*.22,u*.06,0,Math.PI*2),s.fill()),s.save(),s.filter="blur(16px)";let g=Ce(i.id.length*917+33);for(let p=0;p<12;p++){let d=512*(.4+g()*.2),y=g()*1024,x=80+g()*220,E=8+g()*22;s.fillStyle=`rgba(255,255,255,${i.id==="neon"?.03:.06+g()*.07})`,s.beginPath(),s.ellipse(y,d,x,E,g()*.2-.1,0,Math.PI*2),s.fill()}s.restore();let _=s.createLinearGradient(0,512*.44,0,512*.62);return _.addColorStop(0,"rgba(255,255,255,0)"),_.addColorStop(.5,"rgba(255,255,255,0.16)"),_.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=_,s.fillRect(0,512*.42,1024,512*.24),n}function Bo(i,t){if(Oo.has(t.id))return Oo.get(t.id);let e=q0(t),n=ce(e,{srgb:!0});n.mapping=pi;let s=null,r=null;try{let o=new $n(i);o.compileEquirectangularShader(),r=o.fromEquirectangular(n),s=r.texture,o.dispose()}catch(o){console.warn("PMREM environment unavailable",o)}let a={sky:n,env:s,envRT:r};return Oo.set(t.id,a),a}function is(i,t,e){let{sky:n,env:s}=Bo(i,e);t.background=n,t.backgroundIntensity=1,t.environment=s,t.fog=new Tr(e.fog,e.id==="neon"?.0045:.0033),i.toneMapping=vi,i.toneMappingExposure=e.id==="neon"?1.1:1}function Gr(i){let t=new Fr(16777215,3359829,.7),e=new jn(16777215,2.2);e.position.set(18,30,12),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=1,e.shadow.camera.far=90,e.shadow.camera.left=-20,e.shadow.camera.right=20,e.shadow.camera.top=20,e.shadow.camera.bottom=-20,e.shadow.bias=-8e-4,e.shadow.normalBias=.035;let n=new jn(8965375,.65);return n.position.set(-24,12,-8),i.add(t,e,n,e.target),i.add(e.target),{hemi:t,sun:e,rim:n}}function ss(i,t){i.hemi.color.setHex(t.hemiSky),i.hemi.groundColor.setHex(t.hemiGround),i.hemi.intensity=t.hemiIntensity,i.sun.color.setHex(t.sunLight),i.sun.intensity=t.sunIntensity,i.rim.color.setHex(t.accent),i.rim.intensity=t.id==="neon"?1.25:.55}function Y0(i="rgba(255,255,255,0.9)"){let{canvas:t,ctx:e}=re(64,64),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,i),n.addColorStop(.4,"rgba(255,255,255,0.25)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),ce(t)}function ih(i,t){let e=new jt;e.name="decor";let n=Ce(i.number*7919+13),s=i.samples,r=Z=>s[Math.floor(Rt(Z,0,.999)*(s.length-1))],a=13,o=new ue(1,1.06,.55,7),l=new Dn(1,2.5,7,1,!1);l.rotateX(Math.PI);let c=new Gt({color:16777215,roughness:.9,metalness:0}),h=new Gt({color:16777215,roughness:1,metalness:0,flatShading:!0}),u=new rn(o,c,a),f=new rn(l,h,a),m=34,g=new ue(.09,.13,1,5),_=new Dn(.62,1.55,6),p=new Gt({color:t.id==="candy"?16773880:7031346,roughness:.95}),d=new Gt({color:16777215,roughness:.8,flatShading:!0}),y=new rn(g,p,m),x=new rn(_,d,m*2),E=0,P=0,S=new Re,C=new Pt,F=[t.grass,t.grassTop,t.grass],v=t.id==="candy"?[16748488,16761056,11044351]:t.id==="neon"?[3038207,2006732,8150271]:[5217862,6535252,4033082];for(let Z=0;Z<a;Z++){let ct=(Z+.5)/a+(n()-.5)*.03,k=r(ct),ut=(n()>.5?1:-1)*de(n,26,76),ft=k.p.clone().addScaledVector(k.n,ut),gt=de(n,2.4,6.2),Lt=de(n,6,24);ft.y-=Lt,S.position.set(ft.x,ft.y,ft.z),S.rotation.set(0,n()*Math.PI*2,0),S.scale.set(gt,1,gt*de(n,.8,1.2)),S.updateMatrix(),u.setMatrixAt(Z,S.matrix),C.setHex(F[Z%F.length]),C.offsetHSL(0,0,(n()-.5)*.08),u.setColorAt(Z,C),S.position.set(ft.x,ft.y-gt*1.2,ft.z),S.scale.set(gt*.94,gt*de(n,1.1,1.9),gt*.94),S.rotation.set(0,n()*Math.PI*2,0),S.updateMatrix(),f.setMatrixAt(Z,S.matrix),C.setHex(t.rock).offsetHSL(0,0,(n()-.5)*.1),f.setColorAt(Z,C);let It=1+Math.floor(n()*3);for(let At=0;At<It&&E<m;At++){let zt=ft.x+(n()-.5)*gt*1.1,B=ft.z+(n()-.5)*gt*1.1,Kt=de(n,.9,1.9)*gt*.5;if(t.id==="candy"?(S.position.set(zt,ft.y+Kt*.65,B),S.rotation.set(0,0,0),S.scale.set(Kt*.5,Kt*.5,Kt*.5)):(S.position.set(zt,ft.y+Kt*.4,B),S.scale.set(gt*.3,Kt,gt*.3),S.rotation.set(0,0,0)),S.updateMatrix(),y.setMatrixAt(E,S.matrix),C.setHex(t.id==="candy"?16777215:7031346).offsetHSL(0,0,(n()-.5)*.06),y.setColorAt(E,C),E++,t.id==="candy")S.position.set(zt,ft.y+Kt*1.15,B),S.scale.setScalar(Kt*.55),S.updateMatrix(),x.setMatrixAt(P,S.matrix),C.setHex(v[Math.floor(n()*v.length)]),x.setColorAt(P,C),P++;else for(let St=0;St<2&&!(P>=m*2);St++)S.position.set(zt,ft.y+Kt*(.55+St*.5),B),S.scale.setScalar(Kt*(1.05-St*.28)),S.rotation.set(0,n()*Math.PI,0),S.updateMatrix(),x.setMatrixAt(P,S.matrix),C.setHex(v[Math.floor(n()*v.length)]).offsetHSL(0,0,(n()-.5)*.05),x.setColorAt(P,C),P++}}if(u.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0),f.instanceColor&&(f.instanceColor.needsUpdate=!0),y.instanceColor&&(y.instanceColor.needsUpdate=!0),x.instanceColor&&(x.instanceColor.needsUpdate=!0),u.receiveShadow=!0,e.add(u,f,y,x),y.count=E,x.count=P,u.castShadow=!1,f.castShadow=!1,t.id==="neon"){let Z=new Qn(.6,0),ct=new Gt({color:4712703,emissive:2282478,emissiveIntensity:1.4,roughness:.15,metalness:.4,transparent:!0,opacity:.92}),k=new rn(Z,ct,26);for(let tt=0;tt<26;tt++){let ut=r(n()),ft=(n()>.5?1:-1)*de(n,20,70),gt=ut.p.clone().addScaledVector(ut.n,ft);gt.y-=de(n,4,22),S.position.copy(gt),S.rotation.set(n()*.4,n()*Math.PI,n()*.4),S.scale.setScalar(de(n,.6,2.4)),S.updateMatrix(),k.setMatrixAt(tt,S.matrix)}k.instanceMatrix.needsUpdate=!0,e.add(k)}let w=22,D=new Qi(1,1),X=new Gt({color:t.cloud,emissive:new Pt(t.cloud),emissiveIntensity:.14,roughness:1,metalness:0,flatShading:!0}),nt=new rn(D,X,w*3),L=0;for(let Z=0;Z<w;Z++){let ct=r(n()),k=n()>.5?1:-1,tt=ct.p.clone().addScaledVector(ct.n,k*de(n,30,95));tt.y+=de(n,-4,20);let ut=de(n,2.2,6);for(let ft=0;ft<3;ft++)S.position.set(tt.x+(n()-.5)*ut*2,tt.y+(n()-.5)*ut*.5,tt.z+(n()-.5)*ut*2),S.scale.set(ut*de(n,.5,1),ut*de(n,.28,.45),ut*de(n,.5,1)),S.rotation.set(0,n()*Math.PI,0),S.updateMatrix(),nt.setMatrixAt(L++,S.matrix)}nt.instanceMatrix.needsUpdate=!0,e.add(nt);let N=180,q=new se,Q=new Float32Array(N*3);for(let Z=0;Z<N;Z++){let ct=r(n()),k=ct.p.clone().addScaledVector(ct.n,(n()-.5)*22);Q[Z*3]=k.x,Q[Z*3+1]=k.y+de(n,-4,10),Q[Z*3+2]=k.z}q.setAttribute("position",new pe(Q,3));let $=Y0(t.id==="neon"?"rgba(120,240,255,0.95)":t.id==="candy"?"rgba(255,190,230,0.95)":"rgba(255,250,230,0.95)"),z=new _i({size:.5,map:$,transparent:!0,opacity:.55,depthWrite:!1,blending:We,color:t.accent,sizeAttenuation:!0}),K=new Kn(q,z);return K.frustumCulled=!1,e.add(K),e.userData.update=Z=>{K.rotation.y=Z*.006,nt.position.y=Math.sin(Z*.12)*.4,u.rotation.y=0},e}var Z0=`
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
}`,$0=`
uniform sampler2D uMap;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 tex = texture2D(uMap, gl_PointCoord);
  float alpha = tex.a * vAlpha;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(vColor * tex.rgb, alpha);
}`,Ps=class{constructor(t,{max:e=500,texture:n,blending:s=We}){this.max=e,this.cursor=0,this.alive=0,this.particles=[],this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e);for(let r=0;r<e;r++)this.particles.push({pos:new A,vel:new A,life:0,maxLife:1,gravity:0,drag:0,size:1,color:new Pt(1,1,1)}),this.positions[r*3+1]=-1e4;this.geo=new se,this.geo.setAttribute("position",new pe(this.positions,3)),this.geo.setAttribute("aColor",new pe(this.colors,3)),this.geo.setAttribute("aSize",new pe(this.sizes,1)),this.geo.setAttribute("aAlpha",new pe(this.alphas,1)),this.material=new fn({uniforms:{uMap:{value:n}},vertexShader:Z0,fragmentShader:$0,transparent:!0,depthWrite:!1,blending:s}),this.points=new Kn(this.geo,this.material),this.points.frustumCulled=!1,t.add(this.points)}spawn(t){let{pos:e,count:n=8,colors:s=[16777215],speed:r=3,speedVar:a=2,up:o=1,spread:l=new A(1,1,1),size:c=.55,sizeVar:h=.25,life:u=.6,lifeVar:f=.25,gravity:m=4,drag:g=1.2}=t;for(let _=0;_<n;_++){let p=this.particles[this.cursor];this.cursor=(this.cursor+1)%this.max;let d=new Pt(s[Math.floor(Math.random()*s.length)]);d.offsetHSL((Math.random()-.5)*.05,0,(Math.random()-.5)*.15),p.color.copy(d),p.pos.copy(e);let y=Math.random()*Math.PI*2,x=Math.random()*2-1,E=Math.sqrt(Math.max(0,1-x*x));p.vel.set(Math.cos(y)*E,x,Math.sin(y)*E),p.vel.multiplyScalar(r+Math.random()*a),p.vel.x*=l.x,p.vel.z*=l.z,p.vel.y=p.vel.y*l.y+o*(.4+Math.random()*.6),p.life=u+Math.random()*f,p.maxLife=p.life,p.gravity=m,p.drag=g,p.size=c+Math.random()*h}this.alive=this.max}update(t){for(let e=0;e<this.max;e++){let n=this.particles[e],s=e*3;if(n.life<=0){this.alphas[e]=0;continue}if(n.life-=t,n.life<=0){this.alphas[e]=0,this.positions[s+1]=-1e4;continue}n.vel.y-=n.gravity*t,n.vel.multiplyScalar(Math.max(0,1-n.drag*t)),n.pos.addScaledVector(n.vel,t);let r=n.life/n.maxLife;this.positions[s]=n.pos.x,this.positions[s+1]=n.pos.y,this.positions[s+2]=n.pos.z,this.colors[s]=n.color.r,this.colors[s+1]=n.color.g,this.colors[s+2]=n.color.b,this.sizes[e]=n.size*(.6+.4*r),this.alphas[e]=Math.min(1,r*1.8)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}};function J0(){let{canvas:i,ctx:t}=re(64,64);return t.fillStyle="#ffffff",t.beginPath(),t.roundRect(14,14,36,36,8),t.fill(),ce(i)}var Wr=class{constructor(t){let e=Yc(96);this.sparks=new Ps(t,{max:520,texture:e,blending:We}),this.dust=new Ps(t,{max:240,texture:e,blending:Cn}),this.confetti=new Ps(t,{max:260,texture:J0(),blending:Cn}),this.ringGeo=new Nr(.86,1,48),this.rings=[],this.scene=t}ring(t,e=16777215,{flat:n=!1,life:s=.42,grow:r=5,opacity:a=.75,scale:o=.6}={}){let l=new Me({color:e,transparent:!0,opacity:a,side:Ae,depthWrite:!1,blending:We}),c=new _t(this.ringGeo,l);c.position.copy(t),c.scale.setScalar(o),n?c.rotation.x=-Math.PI/2:c.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),this.scene.add(c),this.rings.push({mesh:c,life:s,maxLife:s,grow:r,opacity:a})}coin(t){this.sparks.spawn({pos:t,count:8,colors:[16769674,16763196,16774872],speed:2.2,speedVar:2.2,up:1.2,size:.5,life:.4,gravity:5,drag:1.6})}gem(t){this.sparks.spawn({pos:t,count:22,colors:[10418431,3331829,16777215,8257487],speed:3,speedVar:3.2,up:1.4,size:.62,life:.65,gravity:4,drag:1.4}),this.ring(t,9369599,{life:.5,grow:6,scale:.5})}hit(t,e){if(this.sparks.spawn({pos:t,count:20,colors:[16765066,16747068,16777215,16763196],speed:4.5,speedVar:4,up:2,size:.6,sizeVar:.4,life:.5,gravity:11,drag:.8}),this.dust.spawn({pos:t,count:7,colors:[14275267,12169893],speed:1.2,speedVar:1.6,up:1.6,size:1,sizeVar:.6,life:.65,gravity:-.6,drag:2}),this.ring(t,16764794,{life:.32,grow:7,scale:.45}),e){let n=t.clone().addScaledVector(e,.3);this.ring(n,16773312,{life:.3,grow:5,scale:.35})}}land(t,e){let n=Math.min(8,2+Math.floor(e*.25));this.dust.spawn({pos:t,count:n,colors:[15262680,13617338,16052454],speed:.8,speedVar:1.6,up:.8,spread:new A(1.5,.5,1.5),size:.65,sizeVar:.5,life:.5,gravity:-.2,drag:2.4})}boost(t){this.sparks.spawn({pos:t,count:14,colors:[10418431,6087167,16777215],speed:3.5,speedVar:3,up:1.6,size:.55,life:.45,gravity:2,drag:1.4}),this.ring(t,8189951,{flat:!0,life:.4,grow:8,scale:.7})}fall(t){this.dust.spawn({pos:t,count:10,colors:[12568536,10135229],speed:2,speedVar:2,up:2.5,size:.9,sizeVar:.6,life:.8,gravity:-1,drag:1.2}),this.ring(t,16738954,{life:.5,grow:9,opacity:.5,scale:.5})}respawn(t){this.ring(t,8189908,{flat:!0,life:.6,grow:10,scale:.4}),this.sparks.spawn({pos:t,count:18,colors:[8189908,16777215,3921663],speed:2.5,speedVar:2.5,up:2.2,size:.55,life:.6,gravity:1.5,drag:1.4})}finish(t){this.confetti.spawn({pos:t.clone().add(new A(0,3,0)),count:80,colors:[16736129,16763196,5231103,8189908,11635967,16777215],speed:4,speedVar:5,up:3.5,spread:new A(1.6,1,1.6),size:.6,sizeVar:.5,life:2.4,lifeVar:1.4,gravity:7,drag:.35}),this.ring(t,16766826,{life:.8,grow:14,opacity:.55,scale:.8}),this.sparks.spawn({pos:t.clone().add(new A(0,1,0)),count:26,colors:[16769674,16777215,16763196],speed:4,speedVar:4,up:3,size:.6,life:.9,gravity:4,drag:.7})}update(t){this.sparks.update(t),this.dust.update(t),this.confetti.update(t);for(let e=this.rings.length-1;e>=0;e--){let n=this.rings[e];if(n.life-=t,n.life<=0){this.scene.remove(n.mesh),n.mesh.material.dispose(),this.rings.splice(e,1);continue}let s=1-n.life/n.maxLife;n.mesh.scale.setScalar(.6+s*n.grow),n.mesh.material.opacity=n.opacity*(1-s)*(1-s)}}};function K0(){let{canvas:i,ctx:t}=re(128,128),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.3,"rgba(255,255,255,0.38)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ce(i)}function Q0(){let{canvas:i,ctx:t}=re(128,128),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.55,"rgba(0,0,0,0.22)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ce(i)}var Xr=class{constructor(t,e,n){this.renderer=t,this.theme=e,this.skin=n,this.scene=new Jn,this.camera=new ye(36,1,.1,400),this.camera.position.set(.6,3.5,13.4),this.look=new A(-1.9,1,0),this.lookSmooth=this.look.clone(),this.time=0,this.pointer=new xt,this.pointerSmooth=new xt,this.orbiters=[],this.rings=[],this.accentMats=[],this.islands=[],is(t,this.scene,e),this.lights=Gr(this.scene),ss(this.lights,e),this.lights.sun.position.set(7,14,9),this.lights.sun.shadow.camera.left=-12,this.lights.sun.shadow.camera.right=12,this.lights.sun.shadow.camera.top=12,this.lights.sun.shadow.camera.bottom=-12,this.build()}build(){let t=this.theme,e=new jt;this.scene.add(e),this.root=e;let n=new jt;n.position.y=-1.55,e.add(n),this.platform=n;let s=new Gt({color:1317939,metalness:.9,roughness:.24,envMapIntensity:1.5}),r=new Gt({color:1845061,metalness:.72,roughness:.3,envMapIntensity:1.2}),a=new _t(new ue(3.3,3.7,.55,72),s);a.position.y=-.2,a.receiveShadow=!0,a.castShadow=!0,n.add(a);let o=new _t(new ue(3.28,3.28,.08,72),r);o.position.y=.12,o.receiveShadow=!0,n.add(o);let l=new _t(new Dn(3.62,2.6,72,1,!0),s);l.rotation.x=Math.PI,l.position.y=-1.7,n.add(l);let c=new Me({color:t.accent,transparent:!0,opacity:.85});this.accentMats.push(c);let h=new _t(new Un(3.3,.035,10,96),c);h.rotation.x=Math.PI/2,h.position.y=.17,n.add(h);let u=new _t(new Un(3.3,.03,10,96),c.clone());u.rotation.x=Math.PI/2,u.position.y=-.48,this.accentMats.push(u.material),n.add(u);let f=new Me({color:t.accent,transparent:!0,opacity:.3});this.accentMats.push(f);let m=new _t(new Un(2.1,.02,8,80),f);m.rotation.x=Math.PI/2,m.position.y=.175,n.add(m);let g=new _t(new Dr(2.1,64),new Me({color:16777215,transparent:!0,opacity:.025}));g.rotation.x=-Math.PI/2,g.position.y=.17,n.add(g);let _=Q0(),p=new _t(new Je(5.4,5.4),new Me({map:_,transparent:!0,depthWrite:!1,opacity:.85}));p.rotation.x=-Math.PI/2,p.position.y=.175,n.add(p);let d=new jt;d.position.set(1.85,.06,.2),e.add(d),this.ballGroup=d;let y=new _t(new He(1.45,72,52),Mi(this.skin));y.castShadow=!0,y.receiveShadow=!1,d.add(y),this.ball=y;let x=new jt;d.add(x);let E=new Un(2.15,.025,8,120),P=[{rot:[1.15,.2,.1],speed:.22,opacity:.5},{rot:[1.35,-.7,.5],speed:-.16,opacity:.3},{rot:[.75,.9,-.3],speed:.11,opacity:.2}];for(let z of P){let K=new Me({color:t.accent,transparent:!0,opacity:z.opacity,depthWrite:!1,blending:We});this.accentMats.push(K);let Z=new _t(E,K);Z.rotation.set(...z.rot),Z.userData.speed=z.speed,x.add(Z),this.rings.push(Z)}let S=new jt;d.add(S),this.orbit=S;let C=new Gt({color:16766282,metalness:.35,roughness:.35,emissive:10117632,emissiveIntensity:.7});this.coinMat=C;let F=new ue(.26,.26,.06,20);for(let z=0;z<9;z++){let K=new jt,Z=z/9*Math.PI*2,ct=3.2,k=new _t(F,C);k.rotation.x=Math.PI/2,k.position.set(Math.cos(Z)*ct,Math.sin(Z*2)*.55,Math.sin(Z)*ct),k.castShadow=!0,K.add(k),S.add(K),this.orbiters.push({mesh:k,phase:Z,speed:.25+z%3*.03,baseY:k.position.y})}let v=new Gt({color:9369599,emissive:2078424,emissiveIntensity:1.5,metalness:.5,roughness:.15}),w=new Qn(.24,0);for(let z=0;z<3;z++){let K=new _t(w,v);K.castShadow=!0,S.add(K),this.orbiters.push({mesh:K,phase:z/3*Math.PI*2+1.2,speed:-.32,baseY:.9+z*.4,radius:2.9+z*.5,gem:!0})}let D=K0(),X=160,nt=new se,L=new Float32Array(X*3),N=Ce(2026);for(let z=0;z<X;z++){let K=N()*Math.PI*2,Z=3+N()*13;L[z*3]=Math.cos(K)*Z,L[z*3+1]=-1+N()*10,L[z*3+2]=Math.sin(K)*Z-2}nt.setAttribute("position",new pe(L,3));let q=new _i({size:.16,map:D,color:t.accent,transparent:!0,opacity:.6,depthWrite:!1,blending:We,sizeAttenuation:!0});this.motes=new Kn(nt,q),this.motes.frustumCulled=!1,e.add(this.motes),this.buildBackdrop();let Q=new ws(t.sunLight,40,30,2);Q.position.set(4,8,6),e.add(Q);let $=new ws(t.accent,22,26,2);$.position.set(-6,1,-5),e.add($),this.ballBaseY=this.ballGroup.position.y}buildBackdrop(){let t=this.theme,e=new jt;e.position.set(0,-4,-30),this.scene.add(e);let n=new Gt({color:t.grass,roughness:.92}),s=new Gt({color:t.rock,roughness:1,flatShading:!0}),r=new Gt({color:t.id==="candy"?16752592:t.id==="neon"?3135471:5941327,roughness:.85,flatShading:!0}),a=new Gt({color:7031346,roughness:.95}),o=[{x:34,y:-2,z:-26,s:9.5},{x:-8,y:7,z:-46,s:11},{x:18,y:11,z:-52,s:12}],l=Ce(99);for(let f of o){let m=new jt;m.position.set(f.x,f.y,f.z),m.scale.setScalar(f.s/8);let g=new _t(new ue(2.6,2.8,.8,8),n);g.receiveShadow=!0,m.add(g);let _=new _t(new Dn(2.7,4.4,8),s);_.rotation.x=Math.PI,_.position.y=-2.5,m.add(_);for(let p=0;p<4;p++){let d=new jt,y=.9+l()*1.2,x=new _t(new ue(.07,.11,y,5),a);x.position.y=y/2,d.add(x);let E=new _t(new Dn(.62,1.5,6),r);E.position.y=y+.55,d.add(E),d.position.set((l()-.5)*3.2,.4,(l()-.5)*3.2),d.rotation.y=l()*Math.PI,m.add(d)}e.add(m),this.islands.push({group:m,baseY:f.y,phase:l()*Math.PI*2})}e.userData.leafMat=r,e.userData.topMat=n,e.userData.rockMat=s,this.backdrop=e;let c=new Gt({color:t.cloud,emissive:new Pt(t.cloud),emissiveIntensity:.3,roughness:1,flatShading:!0,transparent:!0,opacity:.9});this.cloudMat=c;let h=new Qi(1,1),u=new jt;for(let f=0;f<11;f++){let m=new jt,g=2.4+l()*4;for(let _=0;_<3;_++){let p=new _t(h,c);p.position.set((l()-.5)*g*2,(l()-.5)*g*.4,(l()-.5)*g),p.scale.set(g*(.7+l()*.5),g*.32,g*(.6+l()*.5)),m.add(p)}m.position.set((l()-.5)*100,0+l()*18,-30-l()*50),u.add(m)}this.clouds=u,this.scene.add(u)}setTheme(t,e){if(t.id!==this.theme.id){this.theme=t,is(e||this.renderer,this.scene,t),ss(this.lights,t);for(let n of this.accentMats)n.color&&typeof n.color.set=="function"&&n.color.set(t.accent);this.backdrop.userData.topMat.color.set(t.grass),this.backdrop.userData.rockMat.color.set(t.rock),t.id==="candy"?this.backdrop.userData.leafMat.color.set(16752592):t.id==="neon"?this.backdrop.userData.leafMat.color.set(3135471):this.backdrop.userData.leafMat.color.set(5941327),this.cloudMat.color.set(t.cloud),this.cloudMat.emissive.set(t.cloud),this.motes.material.color.set(t.accent),this.motes.material.needsUpdate=!0}}setSkin(t){if(t.id===this.skin.id)return;this.skin=t;let e=this.ball.material;this.ball.material=Mi(t),e.dispose()}resize(t,e){let n=t/e;this.camera.aspect=n;let s=n<.95,r=Rt(n,.55,2.6);this.camera.position.set(s?0:.6,s?3.3:3.5,s?15:13.4),this.look.set(s?0:-1.9,s?1.15:1,0),this.ballGroup.position.set(s?0:1.85,s?.1:.06,s?-.4:.2),this.ballBaseY=this.ballGroup.position.y,this.baseCam=this.camera.position.clone(),this.camera.fov=s?38:36-(r-1)*1.2,this.camera.updateProjectionMatrix(),this.portrait=s,this.backdrop.visible=!s,this.clouds.visible=!s,this.orbit.scale.setScalar(s?.9:1)}update(t,e=0,n=0){this.time+=t;let s=this.time;this.pointerSmooth.x=Xe(this.pointerSmooth.x,e,3,t),this.pointerSmooth.y=Xe(this.pointerSmooth.y,n,3,t),this.ball.rotation.y+=t*.35,this.ball.rotation.x=Math.sin(s*.4)*.08,this.ballGroup.position.y=this.ballBaseY+Math.sin(s*1.1)*.12,this.ballGroup.rotation.z=Math.sin(s*.7)*.03,this.ballGroup.rotation.x=Math.sin(s*.5+1)*.025;for(let o of this.rings)o.rotation.z+=t*o.userData.speed,o.rotation.x+=t*o.userData.speed*.4;for(let o of this.orbiters)o.gem?(o.phase+=t*o.speed,o.mesh.position.set(Math.cos(o.phase)*o.radius,o.baseY+Math.sin(s*1.3+o.phase)*.3,Math.sin(o.phase)*o.radius),o.mesh.rotation.y+=t*1.6,o.mesh.rotation.x+=t*.7):(o.mesh.rotation.z+=t*2.1,o.mesh.position.y=o.baseY+Math.sin(s*1.2+o.phase)*.22);this.orbit.rotation.y+=t*.16,this.platform.rotation.y=Math.sin(s*.1)*.03,this.motes.rotation.y+=t*.012,this.clouds.rotation.y=Math.sin(s*.02)*.05;for(let o of this.islands)o.group.position.y=o.baseY+Math.sin(s*.35+o.phase)*.35,o.group.rotation.y+=t*.004;let r=this.pointerSmooth.x*(this.portrait?.35:.9),a=this.pointerSmooth.y*(this.portrait?.25:.45);this.camera.position.x=Xe(this.camera.position.x,this.baseCam.x+r,2.4,t),this.camera.position.y=Xe(this.camera.position.y,this.baseCam.y+a,2.4,t),this.lookSmooth.x=Xe(this.lookSmooth.x,this.look.x+r*.3,2,t),this.lookSmooth.y=Xe(this.lookSmooth.y,this.look.y+a*.3,2,t),this.camera.lookAt(this.lookSmooth)}render(){this.renderer.render(this.scene,this.camera)}};var qe=.55,sh=24,Ls=1/120,j0=650;function rh(){return{v:1,coins:0,totalCoins:0,skins:["chrome"],ball:"chrome",levels:{},currentLevel:0,settings:{music:.65,sfx:.85,haptics:!0},tutorialSeen:!1}}function tg(i){let t=rh(),e=null;try{e=typeof i=="string"&&i.length?JSON.parse(i):null}catch{e=null}if(!e||typeof e!="object")return t;let n={...t,...e,settings:{...t.settings,...e.settings||{}},levels:{}};n.coins=Number.isFinite(e.coins)?Rt(Math.round(e.coins),0,1e9):0,n.totalCoins=Number.isFinite(e.totalCoins)?Rt(Math.round(e.totalCoins),0,1e9):n.coins,n.currentLevel=Rt(Number(e.currentLevel)||0,0,Ie-1),n.tutorialSeen=!!e.tutorialSeen;let s=new Set(["chrome"]);if(Array.isArray(e.skins))for(let a of e.skins)mn.some(o=>o.id===a)&&s.add(a);let r=mn.some(a=>a.id===e.ball)?e.ball:"chrome";if(s.add(r),n.skins=Array.from(s),n.ball=r,n.settings.music=Rt(Number(n.settings.music)||0,0,1),n.settings.sfx=Rt(Number(n.settings.sfx)||0,0,1),n.settings.haptics=!!n.settings.haptics,e.levels&&typeof e.levels=="object")for(let a of Qe){let o=e.levels[a.number];if(!o||typeof o!="object")continue;let l=Rt(Math.round(Number(o.stars)||0),0,3),c=Number.isFinite(o.best)?Math.max(0,o.best):0;(l>0||c>0)&&(n.levels[a.number]={stars:l,best:c})}return n}function eg(){let{canvas:i,ctx:t}=re(96,96),e=t.createRadialGradient(48,48,2,48,48,46);return e.addColorStop(0,"rgba(0,0,0,0.52)"),e.addColorStop(.55,"rgba(0,0,0,0.2)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,96,96),ce(i)}var qr=class{constructor(){this.canvas=document.getElementById("c"),this.state=rh(),this.mode="menu",this.currentIndex=0,this.audio=new Vr,this.ui=new zr(this),this.isDebug=!1;try{this.isDebug=new URLSearchParams(location.search).has("debug")}catch{this.isDebug=!1}this.pointerSteer=0,this.keyboardSteer=0,this.holding=!1,this.keys=new Set,this.pointer={active:!1,id:null,startX:0,startY:0},this.showPointer={x:0,y:0},this.accumulator=0,this.visualTime=0,this.shake=0,this.steer=0,this.speed=0,this.lat=0,this.latVel=0,this.yOff=qe,this.vy=0,this.grounded=!0,this.falling=!1,this.dist=0,this.prevDist=0,this.levelTime=0,this.falls=0,this.collected=0,this.sessionCombo=0,this.lastCoinAt=-10,this.checkpointDist=0,this.respawnDist=0,this.invuln=0,this.boostTimer=0,this.boostZoneCooldown=0,this.finished=!1,this.completeTime=0,this.completeShown=!1,this.finishCenter=new A,this.finishDir=new A(0,0,1),this.camPosSmooth=new A,this.camLookSmooth=new A,this.frame=null,this.ballPos=new A,this.track=null,this.decor=null,this.sheet=null,this.settingsOpen=!1,this.saveTimer=null,this.ok=!1,this.hostPaused=!1,this.raf=0,this.last=0,this.elapsed=0;try{this.renderer=new gi({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=oe,this.renderer.toneMapping=vi,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=So,this.ok=!0}catch(t){console.error("WebGL unavailable",t),this.renderer=null;return}this.scene=new Jn,this.camera=new ye(62,1,.1,700),this.camera.position.set(0,8,-14),this.baseFov=62,this.lights=Gr(this.scene),this.lights.sun.castShadow=!0,this.lights.sun.shadow.mapSize.set(1024,1024),this.lights.sun.shadow.camera.left=-18,this.lights.sun.shadow.camera.right=18,this.lights.sun.shadow.camera.top=18,this.lights.sun.shadow.camera.bottom=-18,this.lights.sun.shadow.camera.far=70,this.lights.sun.shadow.bias=-6e-4,this.lights.sun.shadow.normalBias=.03,this.ball=new _t(new He(qe,48,32),Mi(Rs(this.state.ball))),this.ballSkinId=this.state.ball,this.ball.castShadow=!0,this.ball.receiveShadow=!1,this.ball.position.set(0,12,0),this.ball.visible=!1,this.scene.add(this.ball),this.blob=new _t(new Je(2.1,2.1),new Me({map:eg(),transparent:!0,opacity:.55,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.visible=!1,this.scene.add(this.blob),this.fx=new Wr(this.scene),this.showcase=null,this.skinThumbs=null,this.loop=this.loop.bind(this),this.bindInput(),this.bindResize(),window.__ORB=window.__ORB||{},window.__ORB.game=this,window.__ORB.getDebug=()=>this.getDebug()}bindResize(){let t=()=>this.resize();window.addEventListener("resize",t),window.visualViewport&&window.visualViewport.addEventListener("resize",t),this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),Le.logError(new Error("WebGL context lost")),this.ui.toast("Graphics were reset. Return to the menu to continue.","pink",4e3)},!1)}bindInput(){let t=this.canvas;t.addEventListener("pointerdown",s=>{if(this.mode==="playing"){this.audio.unlock(),this.audio.setYouTubeAudio(Le.getAudioEnabled()),this.pointer.active=!0,this.pointer.id=s.pointerId,this.pointer.startX=s.clientX,this.pointer.startY=s.clientY,this.holding=!0,this.pointerSteer=0,this.ui.hideHint();try{t.setPointerCapture(s.pointerId)}catch{}s.cancelable&&s.preventDefault()}}),t.addEventListener("pointermove",s=>{if(!this.pointer.active||s.pointerId!==this.pointer.id)return;let r=s.clientX-this.pointer.startX,a=Math.min(170,Math.max(90,window.innerWidth*.16));this.pointerSteer=Rt(r/a,-1,1),Math.abs(r)>8&&(this.holding=!0),s.cancelable&&s.preventDefault()});let e=s=>{s.pointerId===this.pointer.id&&(this.pointer.active=!1,this.pointer.id=null,this.pointerSteer=0,[...this.keys].some(r=>r==="Space"||r==="ArrowUp"||r==="KeyW")||(this.holding=!1))};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("lostpointercapture",e),window.addEventListener("pointermove",s=>{s.pointerType&&s.pointerType!=="mouse"&&this.mode!=="menu"||(this.showPointer.x=(s.clientX/window.innerWidth-.5)*2,this.showPointer.y=(s.clientY/window.innerHeight-.5)*2)}),window.addEventListener("keydown",s=>{let r=s.target&&s.target.tagName||"";if(r==="INPUT"||r==="TEXTAREA"||s.key==="Escape")return;["ArrowLeft","ArrowRight","KeyA","KeyD","Space","ArrowUp","KeyW"].includes(s.code)&&(this.keys.add(s.code),this.mode==="playing"&&s.cancelable&&s.preventDefault(),this.audio.unlock(),this.audio.setYouTubeAudio(Le.getAudioEnabled()))}),window.addEventListener("keyup",s=>{this.keys.delete(s.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.pointer.active=!1,this.pointerSteer=0,this.holding=!1,this.keyboardSteer=0});let n=()=>{this.audio.unlock(),this.audio.setYouTubeAudio(Le.getAudioEnabled())};window.addEventListener("pointerdown",n,{once:!0,passive:!0}),window.addEventListener("keydown",n,{once:!0,passive:!0})}async init(){if(!this.ok){this.ui.showUnsupported();return}this.resize(),this.ui.setPauseAvailable(!1),Le.init({onPause:()=>this.onHostPause(),onResume:()=>this.onHostResume(),onAudioEnabledChange:s=>{this.audio.setYouTubeAudio(s),s&&!this.hostPaused&&this.mode!=="paused"&&this.audio.resume()}});let t=await Le.load();this.state=tg(t),this.audio.setMusicVolume(this.state.settings.music),this.audio.setSfxVolume(this.state.settings.sfx),this.ui.syncSettings(),this.ui.updateCoins(this.state.coins);let e=ns(this.continueIndex());is(this.renderer,this.scene,e),ss(this.lights,e),this.showcase=new Xr(this.renderer,e,Rs(this.state.ball)),this.showcase.resize(window.innerWidth,window.innerHeight),this.mode="menu",this.ui.refreshMenu(),this.ui.splashStatus("Ready to roll!"),this.showcase.update(0,0,0),this.showcase.render(),Le.firstFrameReady(),this.startLoop(),this.sendScoreIfNeeded(),setTimeout(()=>{this.ui.hideSplash(),Le.gameReady()},750);let n=()=>{try{let s=Bo(this.renderer,this.showcase.theme).env;this.skinThumbs=Kc(s),this.sheet==="shop"&&this.ui.renderShop()}catch(s){console.warn("Skin thumbnails failed",s)}};setTimeout(()=>{typeof window.requestIdleCallback=="function"?window.requestIdleCallback(n,{timeout:2400}):setTimeout(n,350)},1500),this.isDebug&&(window.__ORB.debug={startLevel:s=>this.startLevel(s),finishNow:()=>{this.track&&(this.dist=this.track.finishDist-.25,this.stepPhysics(Ls),this.stepPhysics(Ls))},fallNow:()=>this.startFall(),setCoins:s=>{this.state.coins=s,this.ui.updateCoins(s)},state:()=>JSON.parse(JSON.stringify(this.state)),info:()=>this.getDebug(),menu:()=>this.quitToMenu(),openShop:()=>this.openShop()}),window.__ORB.ready=!0}startLoop(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(this.loop))}stopLoop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}loop(t){this.raf=requestAnimationFrame(this.loop);try{let e=Rt((t-this.last)/1e3,0,.05);if(this.last=t,this.visualTime+=e,this.mode==="menu"){this.showcase&&(this.showcase.update(e,this.showPointer.x,this.showPointer.y),this.showcase.render());return}this.updateGame(e),this.renderer.render(this.scene,this.camera)}catch(e){console.error(e),Le.logError(e),this.stopLoop()}}updateGame(t){if(this.elapsed+=t,this.mode==="playing"){this.keyboardSteer=(this.keys.has("ArrowRight")||this.keys.has("KeyD")?1:0)-(this.keys.has("ArrowLeft")||this.keys.has("KeyA")?1:0);let e=this.keys.has("Space")||this.keys.has("ArrowUp")||this.keys.has("KeyW");this.steer=Rt(this.pointerSteer+this.keyboardSteer,-1,1),this.holding=this.pointer.active||e,this.accumulator=Math.min(this.accumulator+t,.12);let n=0;for(;this.accumulator>=Ls&&n<12;)this.stepPhysics(Ls),this.accumulator-=Ls,n++}else(this.mode==="complete"||this.mode==="final")&&this.updateComplete(t);this.track&&this.mode!=="paused"&&this.track.update(this.visualTime,t),this.fx.update(t),this.updateBallVisual(t),this.updateCamera(t),this.updateHudProgress(),this.track?(this.audio.updateRoll(this.speed,this.mode==="playing"&&!this.falling,this.grounded),this.updateSun()):this.audio.stopRoll()}stepPhysics(t){if(!this.track||this.finished)return;this.levelTime+=t,this.invuln=Math.max(0,this.invuln-t),this.boostTimer=Math.max(0,this.boostTimer-t),this.boostZoneCooldown=Math.max(0,this.boostZoneCooldown-t);let e=this.track.halfWidth;if(this.falling){this.vy-=sh*t,this.yOff+=this.vy*t,this.lat+=this.latVel*t,this.dist+=this.speed*t*.35,this.speed=Xe(this.speed,0,4,t),this.respawnTimer-=t,this.updateBallPos(),this.respawnTimer<=0&&this.respawn(),this.prevDist=this.dist;return}let n=-this.steer*Math.max(.9,e-.75),s=this.grounded?1:.55,r=(n-this.lat)*7.5*s;this.latVel=Rt(Xe(this.latVel,r,this.grounded?14:4.5,t),-13,13);let a=this.boostTimer>0?19.5:this.holding?13.4:8.4;this.speed=Xe(this.speed,a,this.boostTimer>0?3.6:1.6,t),this.speed<4&&(this.speed=Math.min(4,this.speed+t*7)),this.prevDist=this.dist,this.dist+=this.speed*t,this.lat+=this.latVel*t,this.grounded&&this.track.gaps.find(u=>this.prevDist<u.rampStart+.05&&this.dist>=u.rampStart+.05)&&(this.grounded=!1,this.vy=5.3+this.speed*.15,this.yOff=qe+.03,this.audio.sfx("bounce"),this.fx.boost(this.ballPos)),this.grounded?this.yOff=qe:(this.vy-=sh*t,this.yOff+=this.vy*t);let l=!this.track.isGapAt(this.dist)&&Math.abs(this.lat)<=e+.12;if(this.grounded)this.track.isRailAt(this.dist)&&Math.abs(this.lat)>e-.58&&(this.lat=Math.sign(this.lat)*(e-.58),Math.abs(this.latVel)>3.5&&(this.audio.sfx("bounce"),this.fx.land(this.ballPos,4)),this.latVel*=-.22),l||this.startFall();else if(l&&this.yOff<=qe&&this.vy<=0)if(this.yOff>qe-.55){let h=-this.vy;this.yOff=qe,this.vy=0,this.grounded=!0,this.updateBallPos(),this.fx.land(this.ballPos,h),h>6&&(this.audio.sfx("land"),this.shake=Math.max(this.shake,Math.min(.22,h*.012)),xn(12,this.state.settings.haptics))}else this.startFall();else this.yOff<-6&&this.startFall();if(Math.abs(this.lat)>e+2.5&&!this.falling&&this.startFall(),this.updateBallPos(),this.falling){this.prevDist=this.dist;return}for(let h of this.track.boostZones)if(this.grounded&&this.boostZoneCooldown<=0&&this.prevDist<h.from&&this.dist>=h.from){this.boostTimer=1.15,this.boostZoneCooldown=1.7,this.speed+=4.2,this.audio.sfx("boost"),this.ui.flash("boost"),this.fx.boost(this.ballPos),xn(18,this.state.settings.haptics);break}let c=this.track.collect(this.ballPos,.72);if(c>0){this.collected+=c,this.state.coins+=c,this.state.totalCoins+=c;let h=this.levelTime;h-this.lastCoinAt<2?this.sessionCombo+=1:this.sessionCombo=1,this.lastCoinAt=h,this.ui.updateCoins(this.state.coins,{pop:!0}),this.ui.setCombo(this.sessionCombo),c>=10?(this.audio.sfx("gem"),this.fx.gem(this.ballPos),xn(14,this.state.settings.haptics)):(this.audio.sfx("coin",{combo:this.sessionCombo}),this.fx.coin(this.ballPos))}else this.sessionCombo>1&&this.levelTime-this.lastCoinAt>2.3&&(this.sessionCombo=0,this.ui.setCombo(0));if(this.invuln<=0)for(let h of this.track.obstacles){let u=h.collide(this.ballPos,qe);if(u){this.onObstacleHit(u);break}}for(let h of this.track.checkpointDists)this.prevDist<h&&this.dist>=h&&Math.abs(this.lat)<=e&&h>this.checkpointDist+1&&(this.checkpointDist=h,this.respawnDist=h,this.ui.toast("Checkpoint!","green"),this.audio.sfx("checkpoint"),this.fx.respawn(this.ballPos),xn(20,this.state.settings.haptics),this.saveSoon());this.dist>=this.track.finishDist&&this.finishLevel(),this.prevDist=this.dist}onObstacleHit(t){this.invuln=.95,this.shake=Math.max(this.shake,.55),this.yOff=Math.max(qe,this.yOff+Math.max(0,t.push.y));let e=this.track.frameAt(this.dist);this.lat+=t.push.dot(e.n),this.latVel+=t.normal.dot(e.n)*4.6,this.vy=Math.max(this.vy,3.1),this.grounded=!1,this.speed=Math.max(4,this.speed-4.6),this.audio.sfx("hit"),this.ui.flash("hit"),this.fx.hit(this.ballPos,t.normal),xn(60,this.state.settings.haptics)}startFall(){this.falling||this.finished||(this.falling=!0,this.falls+=1,this.respawnTimer=1.05,this.grounded=!1,this.vy=Math.min(this.vy,1),this.speed=Math.max(2,this.speed*.5),this.latVel*=.6,this.sessionCombo=0,this.ui.setCombo(0),this.audio.sfx("fall"),this.audio.stopRoll(),this.ui.flash("fall"),this.fx.fall(this.ballPos),this.shake=.35,xn([40,60,40],this.state.settings.haptics))}respawn(){this.falling=!1,this.grounded=!0,this.vy=0,this.yOff=qe,this.lat=0,this.latVel=0,this.dist=Rt(this.respawnDist+.8,4,this.track.finishDist-2),this.prevDist=this.dist,this.speed=6.5,this.invuln=1.25,this.boostTimer=0,this.steer=0,this.updateBallPos(),this.fx.respawn(this.ballPos),this.audio.sfx("respawn"),this.ui.toast("Back to checkpoint","green",1300),this.snapCamera()}updateBallPos(){this.track&&(this.frame=this.track.frameAt(this.dist),this.ballPos.copy(this.frame.p).addScaledVector(this.frame.n,this.lat),this.ballPos.y+=this.yOff)}updateBallVisual(t){if(!this.track)return;if(this.updateBallPos(),this.ball.visible=!0,this.ball.position.copy(this.ballPos),this.falling)this.ball.rotation.x+=t*2.4,this.ball.rotation.z+=t*1.5;else{let r=this.speed*t,a=this.latVel*t;r&&this.ball.rotateOnWorldAxis(this.frame.n,r/qe),a&&this.ball.rotateOnWorldAxis(this.frame.t,-a/qe)}this.blob.visible=!0,this.blob.position.copy(this.frame.p).addScaledVector(this.frame.n,this.lat),this.blob.position.y+=.03;let e=Math.max(0,this.yOff-qe),n=1+e*.22;this.blob.scale.setScalar(n),this.blob.material.opacity=Rt(.55-e*.1,.12,.55);let s=new Yt().makeBasis(this.frame.n,new A(0,1,0),this.frame.t);this.blob.quaternion.setFromRotationMatrix(s)}updateCamera(t){if(!this.track)return;if(this.shake=Xe(this.shake,0,5,t),this.mode==="complete"||this.mode==="final"){let o=this.finishCenter,l=this.finishDir,c=new A(-l.z,0,l.x),h=o.clone().addScaledVector(l,-5.2).addScaledVector(c,Math.sin(.4+this.completeTime*.35)*1.6).addScaledVector(new A(0,1,0),3.6+Math.sin(this.completeTime*.8)*.2);this.camPosSmooth.lerp(h,1-Math.exp(-2.2*t)),this.camLookSmooth.lerp(o.clone().add(new A(0,1.15,0)),1-Math.exp(-3.2*t)),this.camera.position.copy(this.camPosSmooth),this.shake>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake),this.camera.lookAt(this.camLookSmooth);return}let e=this.frame||this.track.frameAt(this.dist),n=this.ballPos.clone().addScaledVector(e.t,-(5.8+this.speed*.05)).addScaledVector(new A(0,1,0),this.falling?4:2.7).addScaledVector(e.n,this.lat*.14),s=this.ballPos.clone().addScaledVector(e.t,3+this.speed*.14).addScaledVector(new A(0,1,0),.45);this.camPosSmooth.lerp(n,1-Math.exp(-4.4*t)),this.camLookSmooth.lerp(s,1-Math.exp(-6*t)),this.camera.position.copy(this.camPosSmooth),this.shake>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake),this.camera.lookAt(this.camLookSmooth);let r=this.baseFov+(this.boostTimer>0?6:0)+Rt(this.speed-10,0,10)*.25,a=Xe(this.camera.fov,r,3,t);Math.abs(a-this.camera.fov)>.01&&(this.camera.fov=a,this.camera.updateProjectionMatrix())}snapCamera(){if(!this.track)return;let t=this.frame||this.track.frameAt(this.dist);this.camPosSmooth.copy(this.ballPos).addScaledVector(t.t,-7.2).addScaledVector(new A(0,1,0),3.3),this.camLookSmooth.copy(this.ballPos).addScaledVector(t.t,4).addScaledVector(new A(0,1,0),.55),this.camera.position.copy(this.camPosSmooth),this.camera.lookAt(this.camLookSmooth)}updateSun(){this.track&&(this.lights.sun.position.set(this.ballPos.x+13,this.ballPos.y+21,this.ballPos.z+9),this.lights.sun.target.position.copy(this.ballPos),this.lights.sun.target.updateMatrixWorld())}updateHudProgress(){if(!this.track||this.mode==="menu")return;let t=Rt(this.dist/this.track.finishDist,0,1);this.ui.updateProgress(t)}updateComplete(t){this.completeTime+=t,this.completeTime<1.05&&(this.dist+=this.speed*t*(1-this.completeTime/1.05),this.speed=Xe(this.speed,0,2.6,t),this.updateBallPos()),!this.completeShown&&this.completeTime>=1.15&&(this.completeShown=!0,this.ui.showComplete(this.completeResult))}finishLevel(){if(this.finished||!this.track)return;this.finished=!0,this.mode="complete",this.completeTime=0,this.completeShown=!1,this.ui.setPauseAvailable(!1),this.ui.hideHint(),this.ui.setCombo(0);let t=this.track.def,e=this.track.coinTotal>0?this.collected/this.track.coinTotal:1,n=1+(e>=.7?1:0)+(this.falls===0?1:0),s=String(t.number),r=this.state.levels[s]||{stars:0,best:0},a=r.best>0?Math.min(r.best,this.levelTime):this.levelTime;this.state.levels[s]={stars:Math.max(r.stars||0,n),best:a},this.currentIndex<Ie-1?this.state.currentLevel=Math.min(Ie-1,Math.max(this.state.currentLevel,this.currentIndex+1)):this.state.currentLevel=Ie-1,this.finishCenter.copy(this.ballPos),this.finishDir.copy(this.frame?this.frame.t:new A(0,0,1)),this.finishDir.y=0,this.finishDir.lengthSq()<1e-4&&this.finishDir.set(0,0,1),this.finishDir.normalize(),this.completeResult={number:t.number,name:t.name,stars:n,collected:this.collected,time:this.levelTime,falls:this.falls,coinGoal:e>=.7,noFalls:this.falls===0,isFinale:this.currentIndex===Ie-1,hasNext:this.currentIndex<Ie-1},this.saveNow();let o=this.totalStars();o>0&&Le.sendScore(o),this.audio.sfx("win"),this.audio.setIntensity(.85),this.audio.stopRoll(),this.ui.updateCoins(this.state.coins),this.fx.finish(this.finishCenter.clone().add(new A(0,1.2,0))),this.shake=.25,this.camPosSmooth.copy(this.camera.position),this.camLookSmooth.copy(this.finishCenter)}getDebug(){return{mode:this.mode,level:this.track?this.track.def.number:null,levelIndex:this.currentIndex,dist:this.dist,length:this.track?this.track.length:0,finishDist:this.track?this.track.finishDist:0,lat:this.lat,speed:this.speed,grounded:this.grounded,falling:this.falling,stars:this.totalStars(),coins:this.state.coins,collected:this.collected,coinTotal:this.track?this.track.coinTotal:0,falls:this.falls,obstacles:this.track?this.track.obstacles.length:0,checkpoints:this.track?this.track.checkpointDists.length:0,gaps:this.track?this.track.gaps.length:0,mode2:this.mode}}totalStars(){return Qe.reduce((t,e)=>{var n;return t+(((n=this.state.levels[e.number])==null?void 0:n.stars)||0)},0)}continueIndex(){var n,s,r;let t=Ie-1;for(let a=0;a<Ie;a++)if(!((((n=this.state.levels[Qe[a].number])==null?void 0:n.stars)||0)>0)){t=a;break}let e=Rt(this.state.currentLevel|0,0,Ie-1);return e>t&&!((((s=this.state.levels[Qe[e].number])==null?void 0:s.stars)||0)>0)&&(t=e),((r=this.state.levels[Qe[t].number])==null?void 0:r.stars)>0&&(t=Ie-1),t}isLevelUnlocked(t){var e;return t<=0?!0:(((e=this.state.levels[Qe[t-1].number])==null?void 0:e.stars)||0)>0}sendScoreIfNeeded(){let t=this.totalStars();t>0&&Le.sendScore(t)}resize(){if(!this.ok)return;let t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),n=Math.min(window.devicePixelRatio||1,(es(),2));this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.baseFov=t/e<.85?70:t/e>2.2?56:62,this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix(),this.showcase&&this.showcase.resize(t,e)}onPlay(){this.startLevel(this.continueIndex())}startLevel(t){if(!this.ok)return;let e=Rt(t|0,0,Ie-1);this.audio.unlock(),this.audio.setYouTubeAudio(Le.getAudioEnabled()),this.audio.resume(),this.ui.hideModals(),this.ui.hideHint(),this.sheet=null,this.settingsOpen=!1,this.currentIndex=e,this.state.currentLevel=e;let n=Qe[e];this.disposeTrack();let s=ns(e);is(this.renderer,this.scene,s),ss(this.lights,s),this.track=nh(n,s),this.track.number=n.number,this.scene.add(this.track.group),this.decor=ih(this.track,s),this.scene.add(this.decor);let r=Rs(this.state.ball);this.ballSkinId!==r.id&&(this.ball.material.dispose(),this.ball.material=Mi(r),this.ballSkinId=r.id),this.ball.visible=!0,this.ball.rotation.set(0,0,0),this.blob.visible=!0,this.dist=4,this.prevDist=this.dist,this.lat=0,this.latVel=0,this.speed=6.5,this.yOff=qe,this.vy=0,this.grounded=!0,this.falling=!1,this.finished=!1,this.levelTime=0,this.falls=0,this.collected=0,this.sessionCombo=0,this.lastCoinAt=-10,this.checkpointDist=4,this.respawnDist=4,this.invuln=.9,this.boostTimer=0,this.boostZoneCooldown=0,this.completeTime=0,this.completeShown=!1,this.accumulator=0,this.shake=0,this.visualTime=0,this.updateBallPos(),this.snapCamera(),this.ui.showGame(),this.ui.setLevel(n.number,n.name),this.ui.updateCoins(this.state.coins),this.ui.updateProgress(0),this.ui.setCombo(0),this.ui.setPauseAvailable(!0),this.audio.setIntensity(.45),this.mode="playing",this.state.tutorialSeen?n.number<=2&&this.ui.showHint():(this.ui.showHint(),this.state.tutorialSeen=!0),this.saveSoon(),this.sendScoreIfNeeded()}disposeTrack(){this.track&&(Io(this.track.group),this.track=null),this.decor&&(Io(this.decor),this.decor=null),this.ball.visible=!1,this.blob.visible=!1}enterMenu(){this.mode="menu",this.sheet=null,this.finished=!1,this.ui.setPauseAvailable(!1),this.ui.hideGameHud(),this.ui.hideModals(),this.disposeTrack(),this.audio.resume(),this.audio.setIntensity(.32),this.audio.stopRoll(),this.setMenuTheme(),this.ui.showMenu(),this.ui.refreshMenu()}setMenuTheme(){if(!this.showcase)return;let t=ns(this.continueIndex());this.showcase.theme.id!==t.id&&this.showcase.setTheme(t,this.renderer),this.showcase.setSkin(Rs(this.state.ball))}quitToMenu(){this.enterMenu(),this.saveSoon()}openLevels(){this.mode==="playing"||this.mode==="paused"||(this.ui.hideModals(),this.ui.hideGameHud(),this.enterMenu(),this.mode="menu",this.sheet="levels",this.ui.showLevels())}openShop(){this.mode==="playing"||this.mode==="paused"||(this.ui.hideModals(),this.ui.hideGameHud(),this.enterMenu(),this.mode="menu",this.sheet="shop",this.ui.renderShop(),this.ui.showShop())}openLevelsFromResults(){this.ui.hideModals(),this.enterMenu(),this.sheet="levels",this.ui.showLevels(),this.saveSoon()}closeSheet(){this.sheet=null,this.mode="menu",this.setMenuTheme(),this.ui.showMenu(),this.ui.refreshMenu(),this.saveSoon()}pauseGame(){this.mode==="playing"&&(this.mode="paused",this.holding=!1,this.pointer.active=!1,this.pointerSteer=0,this.steer=0,this.audio.suspend(),this.audio.stopRoll(),this.ui.showPause(),this.ui.setPauseAvailable(!1),this.saveNow())}resumeGame(){this.mode==="paused"&&(this.ui.hidePause(),this.mode="playing",this.audio.resume(),this.audio.setIntensity(.45),this.last=performance.now(),this.accumulator=0)}restartLevel(){this.ui.hideModals(),this.audio.resume(),this.startLevel(this.currentIndex)}nextLevel(){if(this.ui.hideComplete(),this.currentIndex>=Ie-1){this.openFinal();return}this.startLevel(this.currentIndex+1)}openFinal(){this.ui.hideComplete(),this.mode="final",this.completeTime=Math.max(this.completeTime,1.2),this.ui.showFinal({stars:this.totalStars(),coins:this.state.coins,orbs:this.state.skins.length}),this.audio.setIntensity(.7),this.saveNow(),this.fx.finish(this.ballPos.clone().add(new A(0,1.6,0)))}openSettings(t){this.audio.unlock(),this.settingsFrom=t,this.settingsOpen=!0,this.ui.showSettings()}closeSettings(){this.settingsOpen=!1,this.ui.hideSettings(),this.mode==="paused"&&this.ui.showPause(),this.saveSoon()}onSettingsInput(t){typeof t.music=="number"&&(this.state.settings.music=Rt(t.music,0,1),this.audio.setMusicVolume(this.state.settings.music)),typeof t.sfx=="number"&&(this.state.settings.sfx=Rt(t.sfx,0,1),this.audio.setSfxVolume(this.state.settings.sfx)),typeof t.haptics=="boolean"&&(this.state.settings.haptics=t.haptics,t.haptics&&xn(14,!0)),this.saveSoon()}handleEscape(){if(this.settingsOpen){this.closeSettings();return}if(this.mode==="paused"){this.resumeGame();return}if(this.sheet){this.closeSheet();return}this.mode==="playing"&&this.pauseGame()}handleSkinClick(t){let e=mn.find(s=>s.id===t);if(!e)return;if(this.state.skins.includes(t)){this.state.ball!==t&&(this.state.ball=t,this.audio.sfx("buy"),this.ui.toast(`${e.name} equipped!`,"gold",1600),this.showcase&&this.showcase.setSkin(e),this.saveNow(),this.ui.renderShop());return}this.state.coins>=e.price?(this.state.coins-=e.price,this.state.skins.push(t),this.state.ball=t,this.audio.sfx("buy"),this.showcase&&this.showcase.setSkin(e),this.ui.updateCoins(this.state.coins,{pop:!0}),this.ui.toast(`${e.name} unlocked and equipped!`,"gold",2200),this.ui.renderShop(),this.saveNow()):(this.audio.sfx("deny"),this.ui.toast(`Need ${As(e.price-this.state.coins)} more coins`,"pink",1800),xn(30,this.state.settings.haptics))}deny(){this.audio.sfx("deny"),this.ui.toast("Finish the previous track to unlock this one","pink",1900),xn(25,this.state.settings.haptics)}onHostPause(){this.hostPaused=!0,this.stopLoop(),this.audio.suspend(),this.mode==="playing"&&this.pauseGame()}onHostResume(){this.hostPaused=!1,this.mode!=="paused"&&this.audio.resume(),this.last=performance.now(),this.startLoop()}saveSoon(){clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.saveNow(),j0)}saveNow(){clearTimeout(this.saveTimer);try{Le.save(JSON.stringify(this.state))}catch(t){Le.logError(t)}}};async function ng(){let i=new qr;window.__ORB=window.__ORB||{},window.__ORB.game=i;try{await i.init()}catch(t){Le.logError(t);let e=document.getElementById("splashStatus");e&&(e.textContent="Something went wrong. Please reload the game.")}}ng();})();
