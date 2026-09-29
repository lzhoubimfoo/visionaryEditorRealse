import{x as As,n as Os,y as Ds,z as Hr,o as Xt,F as zs,f as Ct,T as Ls,H as ks,I as $s,J as Vr,K as Ws,p as jr,M as Rt,L as Ns,u as qr,V as z,N as Is,Q as gr,v as je,g as Xr,U as Yr,S as Hs,e as Ee,X as yr,Y as Vs,Z as js,_ as qs,$ as Xs,a0 as Ys,P as Yt,a1 as Js,G as Jt,a2 as He,a3 as pt,a4 as _e,a5 as me,a6 as vr,a7 as Qs,a8 as Ks}from"./three-d9KznDy8.js";import{M as Zs,A as ei}from"./vendor-mp4-muxer-DaZBAdSD.js";import{_ as Qt}from"./visionary-controllers-DnmwehKo.js";import{f as ti,c as mt,a as ri,b as si,m as wr,t as ii,d as br,e as Ae,g as ai,s as oi,h as ni,i as Jr,n as Xe,j as Ye,k as qe,l as et,o as xe,p as Bt,q as li,r as Wt,u as gt,v as yt,w as ci,x as ui,y as _r,z as di,A as hi,B as fi,C as pi}from"./vendor-gl-matrix-C17cCFDb.js";import{env as vt,Tensor as Re,InferenceSession as Pr}from"./vendor-onnxruntime-web-CN-YNzaW.js";let at=class{min;max;constructor(e,t){this.min=br(e),this.max=br(t)}center(){const e=Ae();return ai(e,this.min,this.max),oi(e,e,.5),e}radius(){return .5*ni(this.min,this.max)}};const mi=ti(1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1);function xr(l){const e=Math.sqrt(l);return Number.isInteger(e)?(e|0)-1:void 0}function Je(l,e){const t=mt();ri(t,l);const r=si(e[0],0,0,0,e[1],0,0,0,e[2]),s=mt();wr(s,t,r);const i=mt();ii(i,s);const a=mt();return wr(a,s,i),[a[0],a[1],a[2],a[4],a[5],a[8]]}function Qr(l){if(l>=0)return 1/(1+Math.exp(-l));const e=Math.exp(l);return e/(1+e)}const Kr=new Float32Array(1),gi=new Uint32Array(Kr.buffer);function b(l,e={}){const{round:t="rne",ftz:r=!1,saturate:s=!1,canonicalNaN:i=!0,emulateLegacyExpCutoff:a}=e;Kr[0]=l;const o=gi[0]>>>0,n=o>>>31<<15,c=o>>>23&255,h=o&8388607;if(c===255)return h!==0?n|(i?32256:31744|h>>>13):n|31744;if(a!==void 0&&c<a)return n;let u=c-127+15;if(u>=31)return n|(s?31743:31744);if(u<=0){if(u<-10||r)return n;let p=h|8388608;const f=14-u;let g=p>>>f;if(t==="rne"){const y=(1<<f)-1,v=p&y,m=1<<f-1;if((v>m||v===m&&g&1)&&(g++,g===1024))return n|1024}return n|g}let d=h>>>13;if(t==="rne"){const p=h>>>12&1,f=h&4095;if(p&&(f!==0||d&1)&&(d++,d===1024&&(d=0,u++,u>=31)))return n|(s?31743:31744)}return n|u<<10|d}const yi=l=>(l+1)*(l+1);function Sr(l){const{props:e,iDC0:t,iDC1:r,iDC2:s,k:i,shU32:a}=l,o=[];for(let u=0;u<e.length;++u){const d=e[u];if(d.startsWith("f_rest_")){const p=Number(d.slice(7));o.push({idx:u,order:Number.isFinite(p)?p:1e9+u})}}o.sort((u,d)=>u.order-d.order);const n=yi(i)-1,c=n*3;o.length<c&&console.warn(`[copySH_f16] f_rest_* too few: have=${o.length}, need=${c}. Will pad zeros.`);const h=3+c;return h!==48&&console.warn(`[copySH_f16] k=${i} gives ${h} halfs; padding to 48 halfs for fixed 24 u32 stride.`),{copySH:(u,d,p=!1)=>{const f=n,g=new Uint16Array(48);g[0]=b(d[t]),g[1]=b(d[r]),g[2]=b(d[s]);let y=3;for(let v=0;v<f;++v){{const m=o[v]?.idx,_=m!==void 0?d[m]:0;g[y++]=b(_)}{const m=o[f+v]?.idx,_=m!==void 0?d[m]:0;g[y++]=b(_)}{const m=o[2*f+v]?.idx,_=m!==void 0?d[m]:0;g[y++]=b(_)}}for(;y<48;)g[y++]=0;for(let v=0;v<48;v+=2)a[u+(v>>1)]=g[v]&65535|(g[v+1]&65535)<<16;p&&console.log(`SH[k=${i}] DC (f16):`,g[0],g[1],g[2])},wordsPerPoint:24}}function Zr(l){return Number.isFinite(l[0])&&Number.isFinite(l[1])&&Number.isFinite(l[2])}function ar(l,e=!0){if(l.length===0)return{centroid:[0,0,0]};let t=0,r=0,s=0;for(const[m,_,P]of l)t+=m,r+=_,s+=P;const i=l.length,a=[t/i,r/i,s/i];if(l.length<3)return{centroid:a};let o=0,n=0,c=0,h=0,u=0,d=0;for(const[m,_,P]of l){const S=m-a[0],T=_-a[1],x=P-a[2];o+=S*S,n+=S*T,c+=S*x,h+=T*T,u+=T*x,d+=x*x}let p=1,f=1,g=1;const y=20;for(let m=0;m<y;m++){const _=o*p+n*f+c*g,P=n*p+h*f+u*g,S=c*p+u*f+d*g,T=Math.hypot(_,P,S);if(T<1e-10)break;p=_/T,f=P/T,g=S/T}let v=[p,f,g];return e&&v[1]<0&&(v=[-v[0],-v[1],-v[2]]),Zr(v)?{centroid:a,normal:v}:{centroid:a}}function vi(){return{n:0,sx:0,sy:0,sz:0,sxx:0,syy:0,szz:0,sxy:0,sxz:0,syz:0}}function wi(l,e,t,r){l.n+=1,l.sx+=e,l.sy+=t,l.sz+=r,l.sxx+=e*e,l.syy+=t*t,l.szz+=r*r,l.sxy+=e*t,l.sxz+=e*r,l.syz+=t*r}function bi(l,e=!0){if(l.n===0)return{centroid:[0,0,0]};const t=l.sx/l.n,r=l.sy/l.n,s=l.sz/l.n,i=[t,r,s];if(l.n<3)return{centroid:i};const a=l.sxx-l.n*t*t,o=l.sxy-l.n*t*r,n=l.sxz-l.n*t*s,c=l.syy-l.n*r*r,h=l.syz-l.n*r*s,u=l.szz-l.n*s*s;let d=1,p=1,f=1;const g=20;for(let v=0;v<g;v++){const m=a*d+o*p+n*f,_=o*d+c*p+h*f,P=n*d+h*p+u*f,S=Math.hypot(m,_,P);if(S<1e-10)break;d=m/S,p=_/S,f=P/S}let y=[d,p,f];return e&&y[1]<0&&(y=[-y[0],-y[1],-y[2]]),Zr(y)?{centroid:i,normal:y}:{centroid:i}}let st=class{static async loadHDRTexture(e){const t=await new As().loadAsync(e);return t.mapping=Os,t}static async createPMREMEnvironmentMap(e,t){if(!e)return console.warn("[EnvMapHelper] 渲染器未初始化，无法创建 PMREM 环境贴图"),null;const r=e.backend;if(!r)return console.warn("[EnvMapHelper] 渲染器 backend 未初始化，无法创建 PMREM 环境贴图"),null;if(!r?.device)return console.warn("[EnvMapHelper] 渲染器 device 不存在，无法创建 PMREM 环境贴图"),null;if(!t||!t.image)return console.warn("[EnvMapHelper] 纹理无效，无法创建 PMREM 环境贴图"),null;await new Promise(i=>setTimeout(i,0));let s=null;try{if(s=new Ds(e),!s)return console.warn("[EnvMapHelper] PMREMGenerator 创建失败"),null;if("fromEquirectangular"in s&&typeof s.fromEquirectangular=="function"){const i=s.fromEquirectangular(t);if(!i)return console.warn("[EnvMapHelper] PMREMGenerator.fromEquirectangular 返回 null"),s&&s.dispose(),null;if(!i.texture)return console.warn("[EnvMapHelper] PMREMGenerator 返回的对象没有 texture 属性"),s&&s.dispose(),null;const a=i.texture;return a?(s&&s.dispose(),a):(console.warn("[EnvMapHelper] PMREM 环境贴图为 null"),s&&s.dispose(),null)}else return console.warn("[EnvMapHelper] PMREMGenerator.fromEquirectangular 方法不存在"),s&&s.dispose(),null}catch(i){const a=i instanceof Error?i.message:String(i),o=i instanceof Error?i.stack:void 0;if(console.warn("[EnvMapHelper] PMREMGenerator 处理失败:",a),o&&console.warn("[EnvMapHelper] 错误堆栈:",o),s)try{s.dispose()}catch(n){console.warn("[EnvMapHelper] 清理 PMREMGenerator 失败:",n)}return null}}static setupRendererToneMapping(e,t=null,r=Hr,s=.8){t&&"toneMapping"in t&&typeof t.toneMapping<"u"?(e.toneMapping=t.toneMapping,e.toneMappingExposure=t.toneMappingExposure??s):(e.toneMapping=r,e.toneMappingExposure=s)}static updateRendererEnvironment(e,t){"updateEnvironment"in e&&typeof e.updateEnvironment=="function"?e.updateEnvironment(t):console.log("[EnvMapHelper] renderer.updateEnvironment 方法不存在，跳过")}static setupSceneEnvironment(e,t,r){t&&(e.environment=t),r&&(e.background=r)}};class _i{static DEFAULT_CLEAR_COLOR="#808080";static DEFAULT_TONE_MAPPING=Hr;static DEFAULT_EXPOSURE=.8;static DEFAULT_PIXEL_RATIO=1;static DEFAULT_FALLBACK_HDR_URL="/public/textures/hdr/daytime.hdr";static async initializeRenderer(e,t,r={}){r.sourceRenderer?this.setupRendererConfig(e,r.sourceRenderer):this.applyDefaultRendererConfig(e),r.width&&r.height&&(e.setPixelRatio(r.pixelRatio??this.DEFAULT_PIXEL_RATIO),e.setSize(r.width,r.height,!1));let s;return r.sourceRenderer&&t.environment?s=await this.setupEnvironmentFromSource(e,t,r.originalTexture,r.fallbackHdrUrl):s=await this.setupDefaultEnvironment(e,t,r.fallbackHdrUrl),this.updateRendererEnvironment(e,t),s}static applyDefaultRendererConfig(e){if(e.setClearColor(this.DEFAULT_CLEAR_COLOR,1),e.toneMapping=this.DEFAULT_TONE_MAPPING,e.toneMappingExposure=this.DEFAULT_EXPOSURE,e.outputColorSpace=Xt,e.shadowMap){const t=e.shadowMap;t.enabled=!1,t.type=zs,t.autoUpdate=!0}}static setupRendererConfig(e,t){this.setupClearColor(e,t),this.setupToneMapping(e,t),this.setupColorSpace(e,t),this.setupShadowMap(e,t),this.setupLightingSettings(e,t),this.setupRendererSettings(e,t)}static setupClearColor(e,t){try{if(typeof t.getClearColor=="function"){const r=new Ct;t.getClearColor(r);const s=typeof t.getClearAlpha=="function"?t.getClearAlpha():1;e.setClearColor(r,s)}else e.setClearColor(this.DEFAULT_CLEAR_COLOR,1)}catch(r){console.warn("[RendererInitHelper] 设置清除颜色失败，使用默认值:",r),e.setClearColor(this.DEFAULT_CLEAR_COLOR,1)}}static setupToneMapping(e,t){st.setupRendererToneMapping(e,t)}static setupColorSpace(e,t){if("outputColorSpace"in t){const r=t.outputColorSpace;if(r!==void 0){e.outputColorSpace=r;return}}e.outputColorSpace=Xt}static setupShadowMap(e,t){e.shadowMap&&t.shadowMap&&(e.shadowMap.enabled=t.shadowMap.enabled,e.shadowMap.type=t.shadowMap.type,"autoUpdate"in t.shadowMap&&(e.shadowMap.autoUpdate=t.shadowMap.autoUpdate))}static setupLightingSettings(e,t){"physicallyCorrectLights"in t&&(e.physicallyCorrectLights=t.physicallyCorrectLights),"useLegacyLights"in t&&(e.useLegacyLights=t.useLegacyLights)}static setupRendererSettings(e,t){"sortObjects"in t&&(e.sortObjects=t.sortObjects)}static async setupDefaultEnvironment(e,t,r){if(t.environment){const s=this.getOriginalTextureFromScene(t);if(s){const i=await this.createEnvironmentMap(e,s);if(i)return{envMap:i,background:s}}}else{const s=r||this.DEFAULT_FALLBACK_HDR_URL;console.log("[RendererInitHelper] 场景无环境贴图，加载默认 HDR:",s);try{const i=await st.loadHDRTexture(s);if(i){const a=await this.createEnvironmentMap(e,i);if(a)return{envMap:a,background:i}}}catch(i){console.warn("[RendererInitHelper] 加载默认 HDR 失败:",i)}}return{envMap:null,background:null}}static async setupEnvironmentFromSource(e,t,r,s){if(!t.environment)return{envMap:null,background:null};const i=r;if(i){const o=await this.createEnvironmentMap(e,i);if(o)return{envMap:o,background:i}}const a=s||this.DEFAULT_FALLBACK_HDR_URL;console.warn("[RendererInitHelper] 无法获取原始纹理，回退到加载默认 HDR:",a);try{const o=await st.loadHDRTexture(a);if(o){const n=await this.createEnvironmentMap(e,o);if(n)return{envMap:n,background:o}}}catch(o){console.error("[RendererInitHelper] 回退 HDR 加载失败:",o)}return{envMap:null,background:null}}static getOriginalTextureFromScene(e){return e.background instanceof Ls?e.background:null}static async createEnvironmentMap(e,t){return!e||!t?null:await st.createPMREMEnvironmentMap(e,t)}static updateRendererEnvironment(e,t){st.updateRendererEnvironment(e,t)}static isRendererInitialized(e){return e?!!e.backend?.device:!1}}async function Pi(l,e,t=0,r=4){const s=l.createBuffer({size:r,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST,label:"debug-staging-buffer"}),i=l.createCommandEncoder();i.copyBufferToBuffer(e,t,s,0,r),l.queue.submit([i.finish()]),await l.queue.onSubmittedWorkDone(),await s.mapAsync(GPUMapMode.READ);const a=s.getMappedRange(0,r),o=new ArrayBuffer(r);return new Uint8Array(o).set(new Uint8Array(a)),s.unmap(),s.destroy(),o}async function es(l,e,t=0){const r=await Pi(l,e,t,4);return new Uint32Array(r)[0]}async function ts(l,e){return await es(l,e,0)}async function Mr(l,e){const t=await es(l,e,68);return console.log(`🔍 DEBUG: ModelParams.num_points (offset 68) = ${t}`),t}async function xi(l,e,t,r){if(console.log("🔍 === GPU COUNT DEBUG TRACE ==="),console.log(`📊 Max points allocated: ${r}`),e){const s=await ts(l,e);console.log(`📊 ONNX inference count: ${s}`);const i=await Mr(l,t);console.log(`📊 ModelParams count: ${i}`),s===i?console.log("✅ Count successfully propagated from ONNX to shader uniforms"):(console.log(`❌ Count mismatch! ONNX=${s}, ModelParams=${i}`),console.log("⚠️ The buffer copy may have failed or timing is wrong")),i===r&&console.log("⚠️ WARNING: Using maxPoints instead of dynamic count!")}else{console.log("ℹ️ No ONNX count buffer (static model)");const s=await Mr(l,t);console.log(`📊 ModelParams count: ${s}`)}console.log("🔍 === END DEBUG TRACE ===")}var Cr={},Si=function(l,e,t,r,s){var i=new Worker(Cr[e]||(Cr[e]=URL.createObjectURL(new Blob([l+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return i.onmessage=function(a){var o=a.data,n=o.$e$;if(n){var c=new Error(n[0]);c.code=n[1],c.stack=n[2],s(c,null)}else s(null,o)},i.postMessage(t,r),i},we=Uint8Array,Ve=Uint16Array,rs=Int32Array,or=new we([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nr=new we([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ss=new we([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),is=function(l,e){for(var t=new Ve(31),r=0;r<31;++r)t[r]=e+=1<<l[r-1];for(var s=new rs(t[30]),r=1;r<30;++r)for(var i=t[r];i<t[r+1];++i)s[i]=i-t[r]<<5|r;return{b:t,r:s}},as=is(or,2),lr=as.b,Mi=as.r;lr[28]=258,Mi[258]=28;var Ci=is(nr,0),os=Ci.b,Tt=new Ve(32768);for(var ie=0;ie<32768;++ie){var ke=(ie&43690)>>1|(ie&21845)<<1;ke=(ke&52428)>>2|(ke&13107)<<2,ke=(ke&61680)>>4|(ke&3855)<<4,Tt[ie]=((ke&65280)>>8|(ke&255)<<8)>>1}var Ze=function(l,e,t){for(var r=l.length,s=0,i=new Ve(e);s<r;++s)l[s]&&++i[l[s]-1];var a=new Ve(e);for(s=1;s<e;++s)a[s]=a[s-1]+i[s-1]<<1;var o;if(t){o=new Ve(1<<e);var n=15-e;for(s=0;s<r;++s)if(l[s])for(var c=s<<4|l[s],h=e-l[s],u=a[l[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[Tt[u]>>n]=c}else for(o=new Ve(r),s=0;s<r;++s)l[s]&&(o[s]=Tt[a[l[s]-1]++]>>15-l[s]);return o},dt=new we(288);for(var ie=0;ie<144;++ie)dt[ie]=8;for(var ie=144;ie<256;++ie)dt[ie]=9;for(var ie=256;ie<280;++ie)dt[ie]=7;for(var ie=280;ie<288;++ie)dt[ie]=8;var ns=new we(32);for(var ie=0;ie<32;++ie)ns[ie]=5;var ls=Ze(dt,9,1),cs=Ze(ns,5,1),Pt=function(l){for(var e=l[0],t=1;t<l.length;++t)l[t]>e&&(e=l[t]);return e},Ce=function(l,e,t){var r=e/8|0;return(l[r]|l[r+1]<<8)>>(e&7)&t},xt=function(l,e){var t=e/8|0;return(l[t]|l[t+1]<<8|l[t+2]<<16)>>(e&7)},us=function(l){return(l+7)/8|0},Ft=function(l,e,t){return(e==null||e<0)&&(e=0),(t==null||t>l.length)&&(t=l.length),new we(l.subarray(e,t))},ds=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ge=function(l,e,t){var r=new Error(e||ds[l]);if(r.code=l,Error.captureStackTrace&&Error.captureStackTrace(r,ge),!t)throw r;return r},hs=function(l,e,t,r){var s=l.length,i=r?r.length:0;if(!s||e.f&&!e.l)return t||new we(0);var a=!t,o=a||e.i!=2,n=e.i;a&&(t=new we(s*3));var c=function(D){var j=t.length;if(D>j){var R=new we(Math.max(j*2,D));R.set(t),t=R}},h=e.f||0,u=e.p||0,d=e.b||0,p=e.l,f=e.d,g=e.m,y=e.n,v=s*8;do{if(!p){h=Ce(l,u,1);var m=Ce(l,u+1,3);if(u+=3,m)if(m==1)p=ls,f=cs,g=9,y=5;else if(m==2){var _=Ce(l,u,31)+257,P=Ce(l,u+10,15)+4,S=_+Ce(l,u+5,31)+1;u+=14;for(var T=new we(S),x=new we(19),E=0;E<P;++E)x[ss[E]]=Ce(l,u+E*3,7);u+=P*3;for(var O=Pt(x),C=(1<<O)-1,N=Ze(x,O,1),E=0;E<S;){var U=N[Ce(l,u,C)];u+=U&15;var G=U>>4;if(G<16)T[E++]=G;else{var L=0,A=0;for(G==16?(A=3+Ce(l,u,3),u+=2,L=T[E-1]):G==17?(A=3+Ce(l,u,7),u+=3):G==18&&(A=11+Ce(l,u,127),u+=7);A--;)T[E++]=L}}var X=T.subarray(0,_),J=T.subarray(_);g=Pt(X),y=Pt(J),p=Ze(X,g,1),f=Ze(J,y,1)}else ge(1);else{var G=us(u)+4,re=l[G-4]|l[G-3]<<8,K=G+re;if(K>s){n&&ge(0);break}o&&c(d+re),t.set(l.subarray(G,K),d),e.b=d+=re,e.p=u=K*8,e.f=h;continue}if(u>v){n&&ge(0);break}}o&&c(d+131072);for(var Z=(1<<g)-1,oe=(1<<y)-1,I=u;;I=u){var L=p[xt(l,u)&Z],q=L>>4;if(u+=L&15,u>v){n&&ge(0);break}if(L||ge(2),q<256)t[d++]=q;else if(q==256){I=u,p=null;break}else{var Q=q-254;if(q>264){var E=q-257,k=or[E];Q=Ce(l,u,(1<<k)-1)+lr[E],u+=k}var F=f[xt(l,u)&oe],w=F>>4;F||ge(3),u+=F&15;var J=os[w];if(w>3){var k=nr[w];J+=xt(l,u)&(1<<k)-1,u+=k}if(u>v){n&&ge(0);break}o&&c(d+131072);var M=d+Q;if(d<J){var $=i-J,B=Math.min(J,M);for($+d<0&&ge(3);d<B;++d)t[d]=r[$+d]}for(;d<M;++d)t[d]=t[d-J]}}e.l=p,e.p=I,e.b=d,e.f=h,p&&(h=1,e.m=g,e.d=f,e.n=y)}while(!h);return d!=t.length&&a?Ft(t,0,d):t.subarray(0,d)},Bi=new we(0),Ti=function(l,e){var t={};for(var r in l)t[r]=l[r];for(var r in e)t[r]=e[r];return t},Br=function(l,e,t){for(var r=l(),s=l.toString(),i=s.slice(s.indexOf("[")+1,s.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<r.length;++a){var o=r[a],n=i[a];if(typeof o=="function"){e+=";"+n+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var h=c.indexOf(" ",8)+1;e+=c.slice(h,c.indexOf("(",h))}else{e+=c;for(var u in o.prototype)e+=";"+n+".prototype."+u+"="+o.prototype[u].toString()}else e+=c}else t[n]=o}return e},wt=[],Ui=function(l){var e=[];for(var t in l)l[t].buffer&&e.push((l[t]=new l[t].constructor(l[t])).buffer);return e},Gi=function(l,e,t,r){if(!wt[t]){for(var s="",i={},a=l.length-1,o=0;o<a;++o)s=Br(l[o],s,i);wt[t]={c:Br(l[a],s,i),e:i}}var n=Ti({},wt[t].e);return Si(wt[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,n,Ui(n),r)},Ei=function(){return[we,Ve,rs,or,nr,ss,lr,os,ls,cs,Tt,ds,Ze,Pt,Ce,xt,us,Ft,ge,hs,cr,fs,ps]},fs=function(l){return postMessage(l,[l.buffer])},ps=function(l){return l&&{out:l.size&&new we(l.size),dictionary:l.dictionary}},Ri=function(l,e,t,r,s,i){var a=Gi(t,r,s,function(o,n){a.terminate(),i(o,n)});return a.postMessage([l,e],e.consume?[l.buffer]:[]),function(){a.terminate()}},Fe=function(l,e){return l[e]|l[e+1]<<8},Te=function(l,e){return(l[e]|l[e+1]<<8|l[e+2]<<16|l[e+3]<<24)>>>0},Nt=function(l,e){return Te(l,e)+Te(l,e+4)*4294967296};function Fi(l,e,t){return t||(t=e,e={}),typeof t!="function"&&ge(7),Ri(l,e,[Ei],function(r){return fs(cr(r.data[0],ps(r.data[1])))},1,t)}function cr(l,e){return hs(l,{i:2},e&&e.out,e&&e.dictionary)}var Kt=typeof TextDecoder<"u"&&new TextDecoder,Ai=0;try{Kt.decode(Bi,{stream:!0}),Ai=1}catch{}var Oi=function(l){for(var e="",t=0;;){var r=l[t++],s=(r>127)+(r>223)+(r>239);if(t+s>l.length)return{s:e,r:Ft(l,t-1)};s?s==3?(r=((r&15)<<18|(l[t++]&63)<<12|(l[t++]&63)<<6|l[t++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):s&1?e+=String.fromCharCode((r&31)<<6|l[t++]&63):e+=String.fromCharCode((r&15)<<12|(l[t++]&63)<<6|l[t++]&63):e+=String.fromCharCode(r)}};function Di(l,e){if(e){for(var t="",r=0;r<l.length;r+=16384)t+=String.fromCharCode.apply(null,l.subarray(r,r+16384));return t}else{if(Kt)return Kt.decode(l);var s=Oi(l),i=s.s,t=s.r;return t.length&&ge(8),i}}var zi=function(l,e){return e+30+Fe(l,e+26)+Fe(l,e+28)},Li=function(l,e,t){var r=Fe(l,e+28),s=Fe(l,e+30),i=Di(l.subarray(e+46,e+46+r),!(Fe(l,e+8)&2048)),a=e+46+r,o=ki(l,a,s,t,Te(l,e+20),Te(l,e+24),Te(l,e+42)),n=o[0],c=o[1],h=o[2];return[Fe(l,e+10),n,c,i,a+s+Fe(l,e+32),h]},ki=function(l,e,t,r,s,i,a){var o=s==4294967295,n=i==4294967295,c=a==4294967295,h=e+t,u=o+n+c;if(r&&u){for(;e+4<h;e+=4+Fe(l,e+2))if(Fe(l,e)==1)return[o?Nt(l,e+4+8*n):s,n?Nt(l,e+4):i,c?Nt(l,e+4+8*(n+o)):a,1];r<2&&ge(13)}return[s,i,a,0]},Tr=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(l){l()};function $i(l,e,t){t||(t=e,e={}),typeof t!="function"&&ge(7);var r=[],s=function(){for(var y=0;y<r.length;++y)r[y]()},i={},a=function(y,v){Tr(function(){t(y,v)})};Tr(function(){a=t});for(var o=l.length-22;Te(l,o)!=101010256;--o)if(!o||l.length-o>65558)return a(ge(13,0,1),null),s;var n=Fe(l,o+8);if(n){var c=n,h=Te(l,o+16),u=Te(l,o-20)==117853008;if(u){var d=Te(l,o-12);u=Te(l,d)==101075792,u&&(c=n=Te(l,d+32),h=Te(l,d+48))}for(var p=e&&e.filter,f=function(y){var v=Li(l,h,u),m=v[0],_=v[1],P=v[2],S=v[3],T=v[4],x=v[5],E=zi(l,x);h=T;var O=function(N,U){N?(s(),a(N,null)):(U&&(i[S]=U),--n||a(null,i))};if(!p||p({name:S,size:_,originalSize:P,compression:m}))if(!m)O(null,Ft(l,E,E+_));else if(m==8){var C=l.subarray(E,E+_);if(P<524288||_>.8*P)try{O(null,cr(C,{out:new we(P)}))}catch(N){O(N,null)}else r.push(Fi(C,{size:P},O))}else O(ge(14,"unknown compression type "+m,1),null);else O(null,null)},g=0;g<c;++g)f(g)}else a(null,{});return s}class We{_gaussianBuffer;_shCoefsBuffer;_extraPcaBuffer;_weightBuffer;_numPoints;_shDegree;_bbox;center;up;kernelSize;mipSplatting;backgroundColor;constructor(e){this._gaussianBuffer=e.gaussianBuffer,this._shCoefsBuffer=e.shCoefsBuffer,this._extraPcaBuffer=e.extraPcaBuffer,this._weightBuffer=e.weightBuffer,this._numPoints=e.numPoints,this._shDegree=e.shDegree,this._bbox=e.bbox,this.center=e.center,this.up=e.up,this.kernelSize=e.kernelSize,this.mipSplatting=e.mipSplatting,this.backgroundColor=e.backgroundColor}gaussianBuffer(){return this._gaussianBuffer}shCoefsBuffer(){return this._shCoefsBuffer}extraPcaBuffer(){return this._extraPcaBuffer?this._extraPcaBuffer:new ArrayBuffer(0)}weightBuffer(){return this._weightBuffer?this._weightBuffer:new ArrayBuffer(0)}numPoints(){return this._numPoints}shDegree(){return this._shDegree}bbox(){return this._bbox}}class ms{async loadFile(e,t){const r=await e.arrayBuffer();return this.loadBuffer(r,t)}async loadUrl(e,t){const r=await fetch(e,{signal:t?.signal});if(!r.ok)throw new Error(`Failed to fetch PLY file: ${r.status} ${r.statusText}`);const s=await r.arrayBuffer();return this.loadBuffer(s,t)}async loadBuffer(e,t){const r=(o,n,c)=>{t?.onProgress?.({stage:o,progress:n,message:c})};r("Parsing PLY header",.1);const s=this.parseHeader(e);r("Parsing vertex data",.2);const i=this.parseVertices(e,s);r("Processing Gaussian data",.4);const a=this.processGaussianData(s,i,r);return r("Complete",1),a}canHandle(e,t){return e.toLowerCase().endsWith(".ply")||t==="application/octet-stream"}getSupportedExtensions(){return[".ply"]}processGaussianData(e,t,r){const s=(3+t.props.filter(C=>C.startsWith("f_rest_")).length)/3,i=xr(s)??0,a=this.getFieldIndices(t.props);this.validateRequiredFields(a);const o=e.vertices,n=10,c=new Uint16Array(o*n),h=24,u=new Uint32Array(o*h),d=a.iExtraPcaR>=0&&a.iExtraPcaG>=0&&a.iExtraPcaB>=0?new Float32Array(o*4):null,p=a.weightIndices,f=p.some(C=>C>=0),g=p.every(C=>C>=0);if(f&&!g)throw new Error("PLY has partial weight properties (expected weight_0..weight_63)");const y=g?new Float32Array(o*64):null,v=[],m=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],_=[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],{copySH:P,wordsPerPoint:S}=Sr({props:t.props,iDC0:a.iDC0,iDC1:a.iDC1,iDC2:a.iDC2,k:3,shU32:u});r?.("Processing Gaussians",.5);for(let C=0;C<o;C++){C%1e4===0&&r?.("Processing Gaussians",.5+.3*(C/o),`${C}/${o} points`);const N=t.rows(C),U=this.processGaussian(N,a,C,n,c);if(v.push([U.x,U.y,U.z]),P(C*S,N,!1),d){const G=C*4;d[G+0]=N[a.iExtraPcaR],d[G+1]=N[a.iExtraPcaG],d[G+2]=N[a.iExtraPcaB],d[G+3]=0}if(y){const G=C*64;for(let L=0;L<64;L++)y[G+L]=N[p[L]]}U.x<m[0]&&(m[0]=U.x),U.y<m[1]&&(m[1]=U.y),U.z<m[2]&&(m[2]=U.z),U.x>_[0]&&(_[0]=U.x),U.y>_[1]&&(_[1]=U.y),U.z>_[2]&&(_[2]=U.z)}r?.("Computing scene geometry",.8);const{centroid:T,normal:x}=this.computeSceneGeometry(v),E=[T[0],T[1],T[2]],O=x?[x[0],x[1],x[2]]:[1,0,0];return new We({gaussianBuffer:c.buffer,shCoefsBuffer:u.buffer,extraPcaBuffer:d?d.buffer:void 0,weightBuffer:y?y.buffer:void 0,numPoints:o,shDegree:i,bbox:{min:m,max:_},center:E,up:O,mipSplatting:void 0,kernelSize:void 0,backgroundColor:void 0})}getFieldIndices(e){const t=new Array(64).fill(-1);for(let r=0;r<64;r++)t[r]=e.indexOf(`weight_${r}`);return{ix:e.indexOf("x"),iy:e.indexOf("y"),iz:e.indexOf("z"),iOpacity:e.indexOf("opacity"),iS0:e.indexOf("scale_0"),iS1:e.indexOf("scale_1"),iS2:e.indexOf("scale_2"),iR0:e.indexOf("rot_0"),iR1:e.indexOf("rot_1"),iR2:e.indexOf("rot_2"),iR3:e.indexOf("rot_3"),iDC0:e.indexOf("f_dc_0"),iDC1:e.indexOf("f_dc_1"),iDC2:e.indexOf("f_dc_2"),iExtraPcaR:e.indexOf("extra_pca_r"),iExtraPcaG:e.indexOf("extra_pca_g"),iExtraPcaB:e.indexOf("extra_pca_b"),weightIndices:t}}validateRequiredFields(e){const t=["ix","iy","iz","iOpacity","iS0","iS1","iS2","iR0","iR1","iR2","iR3","iDC0","iDC1","iDC2"];for(const r of t)if(e[r]<0)throw new Error(`PLY missing required field: ${r.slice(1)}`)}processGaussian(e,t,r,s,i){const a=e[t.ix],o=e[t.iy],n=e[t.iz],c=Qr(e[t.iOpacity]),h=[Math.exp(e[t.iS0]),Math.exp(e[t.iS1]),Math.exp(e[t.iS2])],u=Jr(e[t.iR1],e[t.iR2],e[t.iR3],e[t.iR0]);Xe(u,u);const[d,p,f,g,y,v]=Je(u,new Float32Array(h)),m=r*s;return i[m+0]=b(a),i[m+1]=b(o),i[m+2]=b(n),i[m+3]=b(c),i[m+4]=b(d),i[m+5]=b(p),i[m+6]=b(f),i[m+7]=b(g),i[m+8]=b(y),i[m+9]=b(v),{x:a,y:o,z:n}}computeSceneGeometry(e){return ar(e)}parseHeader(e,t=1<<20){const r=new TextDecoder().decode(e.slice(0,Math.min(t,e.byteLength))),s=r.split(/\r?\n/);if(!/^ply\b/.test(s[0]))throw new Error("Not a PLY file");let i=null,a=0;const o=[];let n=0,c=!1;for(let h=1;h<s.length;h++){const u=s[h];if(u==="end_header"){let d=r.indexOf("end_header");if(d<0)throw new Error("Malformed PLY: missing end_header");const p=r.indexOf(`
`,d+10);n=p>=0?p+1:d+10+1;break}if(u.startsWith("format ")){const d=u.split(/\s+/)[1];if(d==="ascii"||d==="binary_little_endian"||d==="binary_big_endian")i=d;else throw new Error(`Unsupported PLY format: ${d}`)}else if(u.startsWith("element "))c=u.startsWith("element vertex "),c&&(a=parseInt(u.split(/\s+/)[2],10));else if(c&&u.startsWith("property ")){const d=u.trim().split(/\s+/);if(d[1]==="list")throw new Error("Unexpected list property in vertex");const p=d[d.length-1];o.push(p)}}if(!i)throw new Error("PLY header missing format");if(a<=0)throw new Error("PLY has no vertices element");return{format:i,vertices:a,props:o,headerByteLength:n}}parseVertices(e,t){const r=t.props.slice();return t.format==="ascii"?this.parseASCIIVertices(e,t,r):this.parseBinaryVertices(e,t,r)}parseASCIIVertices(e,t,r){const s=new TextDecoder().decode(e.slice(t.headerByteLength)).split(/\r?\n/).filter(i=>i.trim().length>0);return{props:r,rows:i=>{const a=s[i].trim().split(/\s+/);if(a.length<r.length)throw new Error("Malformed PLY ASCII row");return a.map(parseFloat)}}}parseBinaryVertices(e,t,r){const s=t.format==="binary_little_endian",i=new DataView(e,t.headerByteLength),a=r.length*4;return{props:r,rows:o=>{const n=o*a,c=new Array(r.length);for(let h=0;h<r.length;h++)c[h]=i.getFloat32(n+h*4,s);return c}}}async loadFileStreaming(e,t,r){const s=Math.max(4,r?.chunkBytes??33554432),i=32;r?.onProgress?.({stage:"Parsing PLY header",progress:.01});const{buffer:a,header:o}=await this.readPlyHeader(e);this.assertFloatLittleEndianVertices(a,o);const n=o.props.length*4,c=o.vertices,h=c*n;if(o.headerByteLength+h>e.size)throw new Error(`PLY 顶点数据超出文件长度: 需要 ${o.headerByteLength+h}，文件 ${e.size}`);const u=this.getFieldIndices(o.props);this.validateRequiredFields(u);const d=o.props.filter(C=>C.startsWith("f_rest_")).length,p=xr((3+d)/3)??0,f=u.weightIndices.some(C=>C>=0),g=u.weightIndices.every(C=>C>=0);if(f&&!g)throw new Error("PLY has partial weight properties (expected weight_0..weight_63)");const y=u.iExtraPcaR>=0&&u.iExtraPcaG>=0&&u.iExtraPcaB>=0,v=c*10*2,m=c*24*4,_=Math.max(1,c)*16,P=g?c*64*4:0,S=Math.max(1,c)*i;this.assertGpuBufferSizes(t,[["gaussians",v],["sh",m],["extra_pca",_],["weights",P],["splat2d",S]]);let T=null,x=null,E=null,O=null;try{T=t.createBuffer({label:"gaussians/storage",size:v,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),x=t.createBuffer({label:"sh/storage",size:m,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),E=t.createBuffer({label:"extra_pca/storage",size:_,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),g&&(O=t.createBuffer({label:"weights/storage",size:P,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}));const C=Math.max(1,Math.floor(s/n)),N=new Uint16Array(C*10),U=new Uint32Array(C*24),G=y?new Float32Array(C*4):null,L=g?new Float32Array(C*64):null,A=new Array(o.props.length),{copySH:X,wordsPerPoint:J}=Sr({props:o.props,iDC0:u.iDC0,iDC1:u.iDC1,iDC2:u.iDC2,k:3,shU32:U}),re=vi(),K=[1/0,1/0,1/0],Z=[-1/0,-1/0,-1/0];let oe=0;for(let F=0;F<c;){if(r?.signal?.aborted)throw new Error("PLY load aborted");const w=Math.min(C,c-F),M=o.headerByteLength+F*n,$=await e.slice(M,M+w*n).arrayBuffer(),B=new DataView($);for(let D=0;D<w;D++){const j=D*n;for(let H=0;H<o.props.length;H++)A[H]=B.getFloat32(j+H*4,!0);const R=this.processGaussian(A,u,D,10,N);if(X(D*J,A,!1),G){const H=D*4;G[H]=A[u.iExtraPcaR],G[H+1]=A[u.iExtraPcaG],G[H+2]=A[u.iExtraPcaB],G[H+3]=0}if(L){const H=D*64;for(let se=0;se<64;se++)L[H+se]=A[u.weightIndices[se]]}wi(re,R.x,R.y,R.z),R.x<K[0]&&(K[0]=R.x),R.y<K[1]&&(K[1]=R.y),R.z<K[2]&&(K[2]=R.z),R.x>Z[0]&&(Z[0]=R.x),R.y>Z[1]&&(Z[1]=R.y),R.z>Z[2]&&(Z[2]=R.z)}this.writeBufferBytes(t,T,F*10*2,N,w*10*2),this.writeBufferBytes(t,x,F*24*4,U,w*24*4),G&&this.writeBufferBytes(t,E,F*16,G,w*16),O&&L&&this.writeBufferBytes(t,O,F*256,L,w*256),F+=w,oe++,r?.onProgress?.({stage:"Uploading Gaussians",progress:.02+.98*(F/c),message:`${F}/${c}`}),oe%4===0&&await t.queue.onSubmittedWorkDone()}await t.queue.onSubmittedWorkDone();const{centroid:I,normal:q}=bi(re),Q=new We({gaussianBuffer:new ArrayBuffer(0),shCoefsBuffer:new ArrayBuffer(0),numPoints:c,shDegree:p,bbox:{min:K,max:Z},center:[I[0],I[1],I[2]],up:q?[q[0],q[1],q[2]]:[1,0,0]}),k={device:t,meta:Q,gaussianBuffer:T,shBuffer:x,extraPcaBuffer:E,weightBuffer:O};return T=null,x=null,E=null,O=null,r?.onProgress?.({stage:"Complete",progress:1}),k}catch(C){throw T?.destroy(),x?.destroy(),E?.destroy(),O?.destroy(),C}}async readPlyHeader(e){let t=Math.min(1048576,e.size);for(;;){const r=await e.slice(0,t).arrayBuffer();if(new TextDecoder("utf-8").decode(r).includes("end_header")||t>=e.size)return{buffer:r,header:this.parseHeader(r,r.byteLength)};const s=Math.min(e.size,t*2);if(s===t)return{buffer:r,header:this.parseHeader(r,r.byteLength)};t=s}}assertFloatLittleEndianVertices(e,t){if(t.format!=="binary_little_endian")throw new Error(`流式加载只支持 binary_little_endian PLY，当前是 ${t.format}`);const r=new TextDecoder("utf-8").decode(e.slice(0,t.headerByteLength));let s=!1;for(const i of r.split(/\r?\n/))if(i.startsWith("element "))s=i.startsWith("element vertex ");else if(s&&i.startsWith("property ")){const a=i.trim().split(/\s+/);if(a[1]!=="float"&&a[1]!=="float32")throw new Error(`流式加载只支持 float32 顶点属性，遇到: ${i}`)}}assertGpuBufferSizes(e,t){const r=e.limits.maxBufferSize;for(const[s,i]of t)if(i>r)throw new Error(`GPU buffer "${s}" 需要 ${i} 字节，设备 maxBufferSize 为 ${r}`)}writeBufferBytes(e,t,r,s,i){const a=new Uint8Array(i);a.set(new Uint8Array(s.buffer,s.byteOffset,i)),e.queue.writeBuffer(t,r,a)}}class Wi{async loadFile(e,t){return this.loadBuffer(await e.arrayBuffer(),t)}async loadUrl(e,t){const r=await fetch(e,{signal:t?.signal});if(!r.ok)throw new Error(`Failed to fetch SPZ: ${r.statusText}`);return this.loadBuffer(await r.arrayBuffer(),t)}async loadBuffer(e,t){const r=(I,q,Q)=>{t?.onProgress?.({stage:I,progress:q,message:Q})};r("Decompressing SPZ",.1);const s=new Uint8Array(e),i=new Blob([s]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(i).arrayBuffer();r("Parsing Data",.2);const o=new DataView(a),n=new Uint8Array(a);let c=0;const h=o.getUint32(c,!0);if(c+=4,h!==1347635022)throw new Error(`Invalid SPZ magic: 0x${h.toString(16)}`);const u=o.getUint32(c,!0);c+=4;const d=o.getUint32(c,!0);c+=4;const p=o.getUint8(c++),f=o.getUint8(c++);if(o.getUint8(c++),c++,u<1||u>3)throw new Error(`Unsupported SPZ version: ${u}`);const g=c;u===1?c+=d*6:c+=d*9;const y=c;c+=d;const v=c;c+=d*3;const m=c;c+=d*3;const _=c;u===3?c+=d*4:c+=d*3;const P=c,S={1:3,2:8,3:15}[p]||0,T=10,x=new Uint16Array(d*T),E=24,O=new Uint32Array(d*E),C=[];let N=1/0,U=1/0,G=1/0,L=-1/0,A=-1/0,X=-1/0;const J=1<<f,re=Ye(),K=Ae();r("Processing Points",.3);for(let I=0;I<d;I++){I%1e4===0&&I%5e4===0&&r("Processing Points",.3+.6*(I/d));let q,Q,k;if(u===1)q=this.readHalfFloat(o,g+I*6+0),Q=this.readHalfFloat(o,g+I*6+2),k=this.readHalfFloat(o,g+I*6+4);else{const ee=g+I*9,ue=n[ee]|n[ee+1]<<8|n[ee+2]<<16,te=n[ee+3]|n[ee+4]<<8|n[ee+5]<<16,W=n[ee+6]|n[ee+7]<<8|n[ee+8]<<16;q=(ue<<8>>8)/J,Q=(te<<8>>8)/J,k=(W<<8>>8)/J}const F=n[y+I]/255,w=v+I*3,M=(n[w]/255-.5)/.15,$=(n[w+1]/255-.5)/.15,B=(n[w+2]/255-.5)/.15,D=m+I*3,j=Math.exp(n[D]/16-10),R=Math.exp(n[D+1]/16-10),H=Math.exp(n[D+2]/16-10);if(u===3){const ee=_+I*4,ue=n[ee]|n[ee+1]<<8|n[ee+2]<<16|n[ee+3]<<24,te=.70710678,W=511,fe=ue>>>30;let de=ue;const ne=[0,0,0,0];let he=0;for(let be=3;be>=0;be--)if(be!==fe){const Me=de&W,Y=de>>>9&1;de>>>=10;let Pe=te*(Me/511);Y&&(Pe=-Pe),ne[be]=Pe,he+=Pe*Pe}ne[fe]=Math.sqrt(Math.max(1-he,0)),qe(re,ne[0],ne[1],ne[2],ne[3])}else{const ee=_+I*3,ue=n[ee]/127.5-1,te=n[ee+1]/127.5-1,W=n[ee+2]/127.5-1,fe=Math.sqrt(Math.max(0,1-ue*ue-te*te-W*W));qe(re,ue,te,W,fe)}Xe(re,re),et(K,j,R,H);const[se,le,ae,V,ye,ve]=Je(re,K),ce=I*T;x[ce+0]=b(q),x[ce+1]=b(Q),x[ce+2]=b(k),x[ce+3]=b(F),x[ce+4]=b(se),x[ce+5]=b(le),x[ce+6]=b(ae),x[ce+7]=b(V),x[ce+8]=b(ye),x[ce+9]=b(ve);const Ue=I*E;if(O[Ue+0]=b(M)|b($)<<16,O[Ue+1]=b(B),S>0){const ee=P+I*S*3;let ue=Ue+1,te=!0;for(let W=0;W<S*3;W++){const fe=(n[ee+W]-128)/128,de=b(fe);te?(O[ue]|=de<<16,ue++,te=!1):(O[ue]=de,te=!0)}}q<N&&(N=q),q>L&&(L=q),Q<U&&(U=Q),Q>A&&(A=Q),k<G&&(G=k),k>X&&(X=k),C.push([q,Q,k])}r("Finalizing",.95);const{centroid:Z,normal:oe}=ar(C);return console.log(`[SPZLoader] Loaded ${d} points efficiently.`),new We({gaussianBuffer:x.buffer,shCoefsBuffer:O.buffer,numPoints:d,shDegree:p,bbox:{min:[N,U,G],max:[L,A,X]},center:[Z[0],Z[1],Z[2]],up:oe?[oe[0],oe[1],oe[2]]:[0,1,0]})}canHandle(e){return e.toLowerCase().endsWith(".spz")}getSupportedExtensions(){return[".spz"]}readHalfFloat(e,t){const r=e.getUint16(t,!0),s=(r&32768)>>15,i=(r&31744)>>10,a=r&1023;return i===0?(s?-1:1)*Math.pow(2,-14)*(a/1024):i===31?a?NaN:s?-1/0:1/0:(s?-1:1)*Math.pow(2,i-15)*(1+a/1024)}}class Ni{async loadFile(e,t){return this.loadBuffer(await e.arrayBuffer(),t)}async loadUrl(e,t){const r=await fetch(e,{signal:t?.signal});if(!r.ok)throw new Error(`Failed to fetch KSplat: ${r.statusText}`);return this.loadBuffer(await r.arrayBuffer(),t)}async loadBuffer(e,t){const r=(Q,k,F)=>{t?.onProgress?.({stage:Q,progress:k,message:F})};r("Parsing KSplat Header",.1);const s=4096,i=1024;let a=0;const o=new DataView(e,a,s),n=o.getUint8(0),c=o.getUint8(1);(n!==0||c<1)&&console.warn(`KSplat version ${n}.${c} might not be fully supported.`);const h=o.getUint32(4,!0),u=o.getUint32(16,!0),d=o.getUint16(20,!0),p=o.getFloat32(36,!0)||-1.5,f=o.getFloat32(40,!0)||1.5,g={0:{bytesPerCenter:12,bytesPerScale:12,bytesPerRotation:16,bytesPerColor:4,bytesPerSphericalHarmonicsComponent:4,scaleOffsetBytes:12,rotationOffsetBytes:24,colorOffsetBytes:40,sphericalHarmonicsOffsetBytes:44,scaleRange:1},1:{bytesPerCenter:6,bytesPerScale:6,bytesPerRotation:8,bytesPerColor:4,bytesPerSphericalHarmonicsComponent:2,scaleOffsetBytes:6,rotationOffsetBytes:12,colorOffsetBytes:20,sphericalHarmonicsOffsetBytes:24,scaleRange:32767},2:{bytesPerCenter:6,bytesPerScale:6,bytesPerRotation:8,bytesPerColor:4,bytesPerSphericalHarmonicsComponent:1,scaleOffsetBytes:6,rotationOffsetBytes:12,colorOffsetBytes:20,sphericalHarmonicsOffsetBytes:24,scaleRange:32767}},y=[0,9,24,45];r("Loading Data",.2);const v=10,m=new Uint16Array(u*v),_=24,P=new Uint32Array(u*_);let S=1/0,T=1/0,x=1/0,E=-1/0,O=-1/0,C=-1/0,N=0,U=0,G=0,L=s+h*i,A=0,X=0;const J=Ye(),re=Ae(),K=.28209479177387814,Z=[0,3,6,1,4,7,2,5,8,9,14,19,10,15,20,11,16,21,12,17,22,13,18,23,24,31,38,25,32,39,26,33,40,27,34,41,28,35,42,29,36,43,30,37,44];a=s;for(let Q=0;Q<h;Q++){const k=new DataView(e,a,i);a+=i;const F=k.getUint32(0,!0);if(F===0)continue;const w=k.getUint32(4,!0),M=k.getUint32(8,!0),$=k.getUint32(12,!0),B=k.getFloat32(16,!0),D=k.getUint16(20,!0),j=k.getUint32(24,!0)||g[d].scaleRange,R=k.getUint32(32,!0),H=R*M,se=k.getUint32(36,!0),le=k.getUint16(40,!0);X=Math.max(X,le);const ae=y[le],V=g[d],ye=V.bytesPerCenter+V.bytesPerScale+V.bytesPerRotation+V.bytesPerColor+ae*V.bytesPerSphericalHarmonicsComponent,ve=se*4,ce=D*$+ve,Ue=ye*w,ee=L+ve,ue=L+ce,te=Ue+ce,W=new DataView(e,ue,Ue),fe=new Float32Array(e,ee,$*3),de=new Uint32Array(e,L,se),ne=B/2/j;let he=R,be=H;for(let Me=0;Me<F;Me++){A%2e4===0&&r("Processing Splats",.3+.6*(A/u));const Y=Me*ye;let Pe;if(Me<H)Pe=Math.floor(Me/M);else{const Le=de[he-R];Me>=be+Le&&(he+=1,be+=Le),Pe=he}let Oe,De,ze;if(d===0)Oe=W.getFloat32(Y+0,!0),De=W.getFloat32(Y+4,!0),ze=W.getFloat32(Y+8,!0);else{const Le=fe[3*Pe+0],tt=fe[3*Pe+1],rt=fe[3*Pe+2];Oe=(W.getUint16(Y+0,!0)-j)*ne+Le,De=(W.getUint16(Y+2,!0)-j)*ne+tt,ze=(W.getUint16(Y+4,!0)-j)*ne+rt}let Ne,pe,Ie;d===0?(Ne=W.getFloat32(Y+V.scaleOffsetBytes,!0),pe=W.getFloat32(Y+V.scaleOffsetBytes+4,!0),Ie=W.getFloat32(Y+V.scaleOffsetBytes+8,!0)):(Ne=this.fromHalf(W.getUint16(Y+V.scaleOffsetBytes,!0)),pe=this.fromHalf(W.getUint16(Y+V.scaleOffsetBytes+2,!0)),Ie=this.fromHalf(W.getUint16(Y+V.scaleOffsetBytes+4,!0))),Ne=Math.max(Ne,1e-6),pe=Math.max(pe,1e-6),Ie=Math.max(Ie,1e-6);let At,Ot,Dt,zt;d===0?(At=W.getFloat32(Y+V.rotationOffsetBytes,!0),Ot=W.getFloat32(Y+V.rotationOffsetBytes+4,!0),Dt=W.getFloat32(Y+V.rotationOffsetBytes+8,!0),zt=W.getFloat32(Y+V.rotationOffsetBytes+12,!0)):(At=this.fromHalf(W.getUint16(Y+V.rotationOffsetBytes,!0)),Ot=this.fromHalf(W.getUint16(Y+V.rotationOffsetBytes+2,!0)),Dt=this.fromHalf(W.getUint16(Y+V.rotationOffsetBytes+4,!0)),zt=this.fromHalf(W.getUint16(Y+V.rotationOffsetBytes+6,!0)));const bs=W.getUint8(Y+V.colorOffsetBytes)/255,_s=W.getUint8(Y+V.colorOffsetBytes+1)/255,Ps=W.getUint8(Y+V.colorOffsetBytes+2)/255,xs=W.getUint8(Y+V.colorOffsetBytes+3)/255;qe(J,Ot,Dt,zt,At),Xe(J,J),et(re,Ne,pe,Ie);const[Ss,Ms,Cs,Bs,Ts,Us]=Je(J,re),Ge=A*v;m[Ge+0]=b(Oe),m[Ge+1]=b(De),m[Ge+2]=b(ze),m[Ge+3]=b(xs),m[Ge+4]=b(Ss),m[Ge+5]=b(Ms),m[Ge+6]=b(Cs),m[Ge+7]=b(Bs),m[Ge+8]=b(Ts),m[Ge+9]=b(Us);const Lt=A*_,Gs=(bs-.5)/K,Es=(_s-.5)/K,Rs=(Ps-.5)/K;if(P[Lt+0]=b(Gs)|b(Es)<<16,P[Lt+1]=b(Rs),le>0){let Le=Lt+1,tt=!0;for(let rt=0;rt<ae;rt++){const kt=Z[rt];let ft;const $t=Y+V.sphericalHarmonicsOffsetBytes;if(d===0)ft=W.getFloat32($t+kt*4,!0);else if(d===1)ft=this.fromHalf(W.getUint16($t+kt*2,!0));else{const Fs=W.getUint8($t+kt)/255;ft=p+Fs*(f-p)}const mr=b(ft);tt?(P[Le]|=mr<<16,Le++,tt=!1):(P[Le]=mr,tt=!0)}}S=Math.min(S,Oe),E=Math.max(E,Oe),T=Math.min(T,De),O=Math.max(O,De),x=Math.min(x,ze),C=Math.max(C,ze),N+=Oe,U+=De,G+=ze,A++}L+=te}r("Finalizing",.95);const oe=A>0?N/A:0,I=A>0?U/A:0,q=A>0?G/A:0;return console.log(`[KSplatLoader] Loaded ${A} splats.`),new We({gaussianBuffer:m.buffer,shCoefsBuffer:P.buffer,numPoints:u,shDegree:X,bbox:{min:[S,T,x],max:[E,O,C]},center:[oe,I,q],up:[0,1,0]})}canHandle(e){return e.toLowerCase().endsWith(".ksplat")}getSupportedExtensions(){return[".ksplat"]}fromHalf(e){const t=(e&32768)>>15,r=(e&31744)>>10,s=e&1023;return r===0?(t?-1:1)*Math.pow(2,-14)*(s/1024):r===31?s?NaN:t?-1/0:1/0:(t?-1:1)*Math.pow(2,r-15)*(1+s/1024)}}class Ii{async loadFile(e,t){return this.loadBuffer(await e.arrayBuffer(),t)}async loadUrl(e,t){const r=await fetch(e,{signal:t?.signal});if(!r.ok)throw new Error(`Failed to fetch: ${r.statusText}`);return this.loadBuffer(await r.arrayBuffer(),t)}async loadBuffer(e,t){const r=(v,m,_)=>{t?.onProgress?.({stage:v,progress:m,message:_})};r("Parsing SPLAT",.1);const s=32,i=new DataView(e),a=Math.floor(e.byteLength/s);e.byteLength%s!==0&&console.warn("SPLAT file size not aligned to 32 bytes, truncating"),r("Loading SPLAT data",.3);const o=10,n=new Uint16Array(a*o),c=24,h=new Uint32Array(a*c),u=.28209479177387814,d=[1/0,1/0,1/0],p=[-1/0,-1/0,-1/0],f=[];for(let v=0;v<a;v++){v%5e3===0&&r("Processing SPLAT points",.3+.5*(v/a));let m=v*s;const _=i.getFloat32(m,!0);m+=4;const P=i.getFloat32(m,!0);m+=4;const S=i.getFloat32(m,!0);m+=4,f.push([_,P,S]);const T=i.getFloat32(m,!0);m+=4;const x=i.getFloat32(m,!0);m+=4;const E=i.getFloat32(m,!0);m+=4;const O=i.getUint8(m++)/255,C=i.getUint8(m++)/255,N=i.getUint8(m++)/255,U=i.getUint8(m++)/255,G=i.getUint8(m++)/255*2-1,L=i.getUint8(m++)/255*2-1,A=i.getUint8(m++)/255*2-1,X=i.getUint8(m++)/255*2-1,J=Jr(G,L,A,X);Xe(J,J);const re=new Float32Array([T,x,E]),[K,Z,oe,I,q,Q]=Je(J,re),k=v*o;n[k+0]=b(_),n[k+1]=b(P),n[k+2]=b(S),n[k+3]=b(U),n[k+4]=b(K),n[k+5]=b(Z),n[k+6]=b(oe),n[k+7]=b(I),n[k+8]=b(q),n[k+9]=b(Q);const F=v*c,w=(O-.5)/u,M=(C-.5)/u,$=(N-.5)/u,B=b(w),D=b(M),j=b($);h[F+0]=B|D<<16,h[F+1]=j,d[0]=Math.min(d[0],_),d[1]=Math.min(d[1],P),d[2]=Math.min(d[2],S),p[0]=Math.max(p[0],_),p[1]=Math.max(p[1],P),p[2]=Math.max(p[2],S)}r("Computing geometry",.9);const{centroid:g,normal:y}=ar(f);return new We({gaussianBuffer:n.buffer,shCoefsBuffer:h.buffer,numPoints:a,shDegree:0,bbox:{min:d,max:p},center:[g[0],g[1],g[2]],up:y?[y[0],y[1],y[2]]:[1,0,0]})}canHandle(e){return e.toLowerCase().endsWith(".splat")}getSupportedExtensions(){return[".splat"]}}class Hi{async loadFile(e,t){return this.loadBuffer(await e.arrayBuffer(),t)}async loadUrl(e,t){const r=await fetch(e,{signal:t?.signal});if(!r.ok)throw new Error(`Failed to fetch SOG: ${r.statusText}`);return this.loadBuffer(await r.arrayBuffer(),t)}async loadBuffer(e,t){return new DataView(e).getUint32(0,!0)===67324752?this.loadCompressedSOG(e,t):this.loadRawSOG(e,t)}async loadRawSOG(e,t){const r=(U,G,L)=>{t?.onProgress?.({stage:U,progress:G,message:L})};r("Parsing SOG header",.1);const s=new DataView(e);let i=0;const a=s.getUint32(i,!0);if(i+=4,a!==1397704448&&a!==4673363)throw new Error("Invalid SOG file");const o=s.getUint32(i,!0);i+=4;const n=s.getUint32(i,!0);i+=4;const c=s.getUint32(i,!0);i+=4,console.log(`[SOGLoader] Ver:${o}, Points:${n}, SH Degree:${c}`),r("Loading SOG data",.3);const h=10,u=new Uint16Array(n*h),d=24,p=new Uint32Array(n*d);let f=1/0,g=1/0,y=1/0,v=-1/0,m=-1/0,_=-1/0,P=0,S=0,T=0;const x=Ye(),E=Ae();for(let U=0;U<n;U++){U%1e4===0&&r("Processing SOG points",.3+.6*(U/n));const G=s.getFloat32(i,!0);i+=4;const L=s.getFloat32(i,!0);i+=4;const A=s.getFloat32(i,!0);i+=4;const X=s.getFloat32(i,!0);i+=4;const J=s.getFloat32(i,!0);i+=4;const re=s.getFloat32(i,!0);i+=4;const K=Math.exp(X),Z=Math.exp(J),oe=Math.exp(re),I=s.getFloat32(i,!0);i+=4;const q=s.getFloat32(i,!0);i+=4;const Q=s.getFloat32(i,!0);i+=4;const k=s.getFloat32(i,!0);i+=4;const F=s.getFloat32(i,!0);i+=4;const w=Qr(F);qe(x,q,Q,k,I),Xe(x,x),et(E,K,Z,oe);const[M,$,B,D,j,R]=Je(x,E),H=U*h;u[H+0]=b(G),u[H+1]=b(L),u[H+2]=b(A),u[H+3]=b(w),u[H+4]=b(M),u[H+5]=b($),u[H+6]=b(B),u[H+7]=b(D),u[H+8]=b(j),u[H+9]=b(R);const se=3*Math.pow(c+1,2),le=U*d;for(let ae=0;ae<se&&ae<d*2;ae++){const V=s.getFloat32(i,!0);i+=4;const ye=b(V),ve=Math.floor(ae/2);ae%2===1?p[le+ve]|=ye<<16:p[le+ve]=ye}if(se>d*2){const ae=se-d*2;i+=ae*4}f=Math.min(f,G),v=Math.max(v,G),g=Math.min(g,L),m=Math.max(m,L),y=Math.min(y,A),_=Math.max(_,A),P+=G,S+=L,T+=A}r("Finalizing",.9);const O=P/n,C=S/n,N=T/n;return new We({gaussianBuffer:u.buffer,shCoefsBuffer:p.buffer,numPoints:n,shDegree:c,bbox:{min:[f,g,y],max:[v,m,_]},center:[O,C,N],up:[0,1,0]})}async loadCompressedSOG(e,t){const r=(F,w)=>t?.onProgress?.({stage:"SOG-WebP",progress:F,message:w});r(.1,"Unzipping SOG");const s=await new Promise((F,w)=>{$i(new Uint8Array(e),(M,$)=>{M?w(M):F($)})});if(!s["meta.json"])throw new Error("Invalid SOG ZIP: missing meta.json");const i=JSON.parse(new TextDecoder().decode(s["meta.json"])),a=i.count;console.log(`[SOGLoader] Compressed SOG, Points: ${a}`);const o=async F=>{if(!s[F])throw new Error(`Missing texture: ${F}`);const w=new Blob([new Uint8Array(s[F])],{type:"image/webp"}),M=await createImageBitmap(w);let $;const{width:B,height:D}=M;if(typeof OffscreenCanvas<"u"){$=new OffscreenCanvas(B,D).getContext("2d"),$?.drawImage(M,0,0);const j=$?.getImageData(0,0,B,D);return{data:new Uint8Array(j.data.buffer),width:B,height:D}}else{const j=document.createElement("canvas");j.width=B,j.height=D,$=j.getContext("2d"),$?.drawImage(M,0,0);const R=$?.getImageData(0,0,B,D);return{data:new Uint8Array(R.data.buffer),width:B,height:D}}};r(.2,"Decoding Base Textures");const[n,c,h,u,d]=await Promise.all([o(i.means.files[0]),o(i.means.files[1]),o(i.quats.files[0]),o(i.scales.files[0]),o(i.sh0.files[0])]);let p=0,f=null,g=null,y=0,v=[],m=null;if(i.shN){const F=i.shN;p=F.bands,console.log(`[SOGLoader] Found shN (Vector Quantized). Degree: ${p}`),r(.4,"Decoding SH Vector Tables");let w;[g,w]=await Promise.all([o(F.files[1]),o(F.files[0])]);const M=new Float32Array(F.codebook),$=F.count,B=p===3?15:p===2?8:3;y=B*3,f=new Float32Array($*y);const D=w.data;for(let j=0;j<$;j++)for(let R=0;R<B;R++){const H=(j*B+R)*4,se=D[H+0],le=D[H+1],ae=D[H+2],V=j*y+R*3;f[V+0]=M[se],f[V+1]=M[le],f[V+2]=M[ae]}}else if(i.sh_rest&&i.sh_rest.files.length>0){console.log("[SOGLoader] Found sh_rest (Scalar Quantized)."),m=new Float32Array(i.sh_rest.codebook),v=await Promise.all(i.sh_rest.files.map(w=>o(w)));const F=3+v.length*3;p=Math.round(Math.sqrt(F/3)-1)}else console.log("[SOGLoader] No high-order SH data. Degree: 0");const _=10,P=new Uint16Array(a*_),S=24,T=new Uint32Array(a*S),x=Ye(),E=Ae(),O=i.means.mins[0],C=i.means.maxs[0]-O||1,N=i.means.mins[1],U=i.means.maxs[1]-N||1,G=i.means.mins[2],L=i.means.maxs[2]-G||1,A=new Float32Array(i.scales.codebook),X=new Float32Array(i.sh0.codebook);let J=1/0,re=1/0,K=1/0,Z=-1/0,oe=-1/0,I=-1/0,q=0,Q=0,k=0;r(.6,"Reconstructing Gaussians");for(let F=0;F<a;F++){F%5e4===0&&r(.6+.3*(F/a),"Reconstructing...");const w=F*4,M=n.data[w+0]|c.data[w+0]<<8,$=n.data[w+1]|c.data[w+1]<<8,B=n.data[w+2]|c.data[w+2]<<8,D=this.invLogTransform(O+C*(M/65535)),j=this.invLogTransform(N+U*($/65535)),R=this.invLogTransform(G+L*(B/65535)),H=h.data[w+3];this.unpackQuatToRef(h.data[w],h.data[w+1],h.data[w+2],H,x);const se=Math.exp(A[u.data[w+0]]),le=Math.exp(A[u.data[w+1]]),ae=Math.exp(A[u.data[w+2]]);et(E,se,le,ae);const[V,ye,ve,ce,Ue,ee]=Je(x,E),ue=d.data[w+3]/255,te=F*_;P[te+0]=b(D),P[te+1]=b(j),P[te+2]=b(R),P[te+3]=b(ue),P[te+4]=b(V),P[te+5]=b(ye),P[te+6]=b(ve),P[te+7]=b(ce),P[te+8]=b(Ue),P[te+9]=b(ee);let W=F*S,fe=0;const de=ne=>{const he=b(ne),be=W+(fe>>1);(fe&1)===1?T[be]|=he<<16:T[be]=he,fe++};if(de(X[d.data[w+0]]),de(X[d.data[w+1]]),de(X[d.data[w+2]]),f&&g){const ne=F*4,he=g.data[ne+0],be=g.data[ne+1],Me=(he|be<<8)*y;for(let Y=0;Y<y;Y++)de(f[Me+Y])}else if(m&&v.length>0)for(let ne=0;ne<v.length;ne++){const he=v[ne].data;de(m[he[w+0]]),de(m[he[w+1]]),de(m[he[w+2]])}J=Math.min(J,D),Z=Math.max(Z,D),re=Math.min(re,j),oe=Math.max(oe,j),K=Math.min(K,R),I=Math.max(I,R),q+=D,Q+=j,k+=R}return new We({gaussianBuffer:P.buffer,shCoefsBuffer:T.buffer,numPoints:a,shDegree:p,bbox:{min:[J,re,K],max:[Z,oe,I]},center:[q/a,Q/a,k/a],up:[0,1,0]})}invLogTransform(e){const t=Math.abs(e),r=Math.exp(t)-1;return e<0?-r:r}unpackQuatToRef(e,t,r,s,i){const a=s-252;if(a<0||a>3){qe(i,0,0,0,1);return}const o=e/255*2-1,n=t/255*2-1,c=r/255*2-1,h=1.41421356;let u=0,d=0,p=0,f=0;a===0?(d=o/h,p=n/h,f=c/h,u=Math.sqrt(Math.max(0,1-(d*d+p*p+f*f)))):a===1?(u=o/h,p=n/h,f=c/h,d=Math.sqrt(Math.max(0,1-(u*u+p*p+f*f)))):a===2?(u=o/h,d=n/h,f=c/h,p=Math.sqrt(Math.max(0,1-(u*u+d*d+f*f)))):(u=o/h,d=n/h,p=c/h,f=Math.sqrt(Math.max(0,1-(u*u+d*d+p*p)))),qe(i,d,p,f,u),Xe(i,i)}canHandle(e){return e.toLowerCase().endsWith(".sog")}getSupportedExtensions(){return[".sog"]}}class ur{static CHUNK_SIZE=256;async loadFile(e,t){const r=await e.arrayBuffer();return this.loadBuffer(r,t)}async loadUrl(e,t){const r=await fetch(e,{signal:t?.signal});if(!r.ok)throw new Error(`Failed to fetch compressed PLY: ${r.status}`);const s=await r.arrayBuffer();return this.loadBuffer(s,t)}canHandle(e){return e.toLowerCase().endsWith(".compressed.ply")}getSupportedExtensions(){return[".compressed.ply"]}async loadBuffer(e,t){const r=new TextDecoder().decode(e.slice(0,Math.min(1048576,e.byteLength))),s=r.indexOf("end_header")+10+1,i=r.slice(0,s).split(/\r?\n/);let a="binary_little_endian",o=0,n=0,c=0,h=!1;for(const w of i)w.startsWith("format ")&&(w.includes("binary_little_endian")?a="binary_little_endian":w.includes("binary_big_endian")&&(a="binary_big_endian")),w.startsWith("element vertex")&&(o=parseInt(w.split(/\s+/)[2])),w.startsWith("element chunk")&&(n=parseInt(w.split(/\s+/)[2])),w.startsWith("element sh")?h=!0:h&&w.startsWith("property")?c++:h&&w.startsWith("element")&&(h=!1);const u=a==="binary_little_endian",d=new DataView(e,s),p=72,f=[];for(let w=0;w<n;w++){const M=w*p;f.push({minPos:[d.getFloat32(M+0,u),d.getFloat32(M+4,u),d.getFloat32(M+8,u)],maxPos:[d.getFloat32(M+12,u),d.getFloat32(M+16,u),d.getFloat32(M+20,u)],minScale:[d.getFloat32(M+24,u),d.getFloat32(M+28,u),d.getFloat32(M+32,u)],maxScale:[d.getFloat32(M+36,u),d.getFloat32(M+40,u),d.getFloat32(M+44,u)],minColor:[d.getFloat32(M+48,u),d.getFloat32(M+52,u),d.getFloat32(M+56,u)],maxColor:[d.getFloat32(M+60,u),d.getFloat32(M+64,u),d.getFloat32(M+68,u)]})}const g=n*p,y=16,v=g+o*y,m=c,_=10;let P,S;c===9?(P=1,S=12):c===24?(P=2,S=27):c===45?(P=3,S=48):(P=0,S=3);const T=Math.ceil(S/2),x=new Uint16Array(o*_),E=new Uint32Array(o*T);let O=1/0,C=1/0,N=1/0,U=-1/0,G=-1/0,L=-1/0;const A=(w,M,$)=>w*(1-$)+M*$,X=(w,M)=>{const $=(1<<M)-1;return(w&$)/$},J=w=>({x:X(w>>>21,11),y:X(w>>>11,10),z:X(w,11)}),re=w=>({r:X(w>>>24,8),g:X(w>>>16,8),b:X(w>>>8,8),a:X(w,8)}),K=w=>{const M=1/(Math.sqrt(2)*.5),$=(X(w>>>20,10)-.5)*M,B=(X(w>>>10,10)-.5)*M,D=(X(w,10)-.5)*M,j=Math.sqrt(Math.max(0,1-($*$+B*B+D*D)));switch(w>>>30){case 0:return{w:j,x:$,y:B,z:D};case 1:return{w:$,x:j,y:B,z:D};case 2:return{w:$,x:B,y:j,z:D};default:return{w:$,x:B,y:D,z:j}}},Z=.28209479177387814,oe=(w,M,$)=>{const B=new Float32Array(S);B[0]=(M[0]-.5)/Z,B[1]=(M[1]-.5)/Z,B[2]=(M[2]-.5)/Z;const D=$.length/3;for(let R=0;R<D;R++){const H=3+R*3;if(H+2>=B.length)break;const se=R,le=R+D,ae=R+D*2,V=$[se],ye=$[le],ve=$[ae];B[H+0]=(V/255-.5)*8,B[H+1]=(ye/255-.5)*8,B[H+2]=(ve/255-.5)*8}const j=w*T;for(let R=0;R<B.length;R+=2){const H=b(B[R]),se=R+1<B.length?b(B[R+1]):0;E[j+(R>>1)]=se<<16|H}},I=Ye(),q=Ae();for(let w=0;w<o;w++){const M=g+w*y,$=v+w*m,B=Math.floor(w/ur.CHUNK_SIZE),D=d.getUint32(M+0,u),j=d.getUint32(M+4,u),R=d.getUint32(M+8,u),H=d.getUint32(M+12,u),se=J(D),le=K(j),ae=J(R),V=re(H),ye=A(f[B].minPos[0],f[B].maxPos[0],se.x),ve=A(f[B].minPos[1],f[B].maxPos[1],se.y),ce=A(f[B].minPos[2],f[B].maxPos[2],se.z),Ue=A(f[B].minScale[0],f[B].maxScale[0],ae.x),ee=A(f[B].minScale[1],f[B].maxScale[1],ae.y),ue=A(f[B].minScale[2],f[B].maxScale[2],ae.z),te=Math.exp(Ue),W=Math.exp(ee),fe=Math.exp(ue),de=A(f[B].minColor[0],f[B].maxColor[0],V.r),ne=A(f[B].minColor[1],f[B].maxColor[1],V.g),he=A(f[B].minColor[2],f[B].maxColor[2],V.b),be=[de,ne,he],Me=V.a;qe(I,le.x,le.y,le.z,le.w),et(q,te,W,fe),Xe(I,I);const[Y,Pe,Oe,De,ze,Ne]=Je(I,q),pe=w*_;x[pe+0]=b(ye),x[pe+1]=b(ve),x[pe+2]=b(ce),x[pe+3]=b(Me),x[pe+4]=b(Y),x[pe+5]=b(Pe),x[pe+6]=b(Oe),x[pe+7]=b(De),x[pe+8]=b(ze),x[pe+9]=b(Ne);const Ie=new Uint8Array(e,s+$,m);oe(w,be,Ie),O=Math.min(O,ye),C=Math.min(C,ve),N=Math.min(N,ce),U=Math.max(U,ye),G=Math.max(G,ve),L=Math.max(L,ce)}const Q=[O,C,N],k=[U,G,L],F=[(O+U)/2,(C+G)/2,(N+L)/2];return new We({gaussianBuffer:x.buffer,shCoefsBuffer:E.buffer,numPoints:o,shDegree:P,bbox:{min:Q,max:k},center:F,up:[0,1,0]})}}class Zt{_object3D;_bbox;_modelType;constructor(e,t="unknown"){this._object3D=e,this._modelType=t,this._bbox=this.calculateBoundingBox(e)}object3D(){return this._object3D}modelType(){return this._modelType}bbox(){return this._bbox}calculateBoundingBox(e){const t=new qr().setFromObject(e);return{min:[t.min.x,t.min.y,t.min.z],max:[t.max.x,t.max.y,t.max.z]}}}class ht{loader;constructor(e){this.loader=e}applyShadowsAndMaterial(e,t){e.traverse(r=>{r&&r.isMesh&&(!r.material&&t&&(r.material=t),"castShadow"in r&&(r.castShadow=!0),"receiveShadow"in r&&(r.receiveShadow=!0))})}async loadFile(e,t){const r=URL.createObjectURL(e);try{const s=await this.loadFromUrl(r,t);return new Zt(s,this.getModelType())}finally{URL.revokeObjectURL(r)}}async loadUrl(e,t){const r=await this.loadFromUrl(e,t);return new Zt(r,this.getModelType())}async loadBuffer(e,t){throw new Error("Buffer loading not supported for Three.js models")}canHandle(e,t){return this.getSupportedExtensions().some(r=>e.toLowerCase().endsWith(r))}}class Vi extends ht{constructor(){super(new ks)}getSupportedExtensions(){return[".gltf",".glb"]}getModelType(){return"gltf"}async loadFromUrl(e,t){return new Promise((r,s)=>{this.loader.load(e,i=>{this.applyShadowsAndMaterial(i.scene),r(i.scene)},i=>{t?.onProgress&&t.onProgress({progress:i.loaded/i.total,stage:"Loading GLTF/GLB..."})},s)})}}class ji extends ht{constructor(){super(new $s)}getSupportedExtensions(){return[".obj"]}getModelType(){return"obj"}async loadFromUrl(e,t){return new Promise((r,s)=>{this.loader.load(e,i=>{this.applyShadowsAndMaterial(i),r(i)},i=>{t?.onProgress&&t.onProgress({progress:i.loaded/i.total,stage:"Loading OBJ..."})},s)})}}class qi extends ht{constructor(){super(new Vr)}getSupportedExtensions(){return[".fbx"]}getModelType(){return"fbx"}async loadFromUrl(e,t){return new Promise((r,s)=>{this.loader.load(e,i=>{this.applyShadowsAndMaterial(i),r(i)},i=>{t?.onProgress&&t.onProgress({progress:i.loaded/i.total,stage:"Loading FBX..."})},s)})}}class Xi extends ht{constructor(){super(new Ws)}getSupportedExtensions(){return[".stl"]}getModelType(){return"stl"}async loadFromUrl(e,t){return new Promise((r,s)=>{this.loader.load(e,i=>{const a=new jr({color:8947848}),o=new Rt(i,a);this.applyShadowsAndMaterial(o,a),r(o)},i=>{t?.onProgress&&t.onProgress({progress:i.loaded/i.total,stage:"Loading STL..."})},s)})}}class Yi extends ht{constructor(){super(new Ns)}getSupportedExtensions(){return[".ply"]}getModelType(){return"ply"}async loadFromUrl(e,t){return new Promise((r,s)=>{this.loader.load(e,i=>{const a=new jr({vertexColors:!0}),o=new Rt(i,a);this.applyShadowsAndMaterial(o,a),r(o)},i=>{t?.onProgress&&t.onProgress({progress:i.loaded/i.total,stage:"Loading PLY..."})},s)})}}function Ji(){return[new Vi,new ji,new qi,new Xi,new Yi]}class Qi{_weights;_numPoints;_channels;_bbox={min:[0,0,0],max:[0,0,0]};constructor(e){this._weights=e.weightsBuffer,this._numPoints=e.numPoints,this._channels=e.channels??64}weightsBuffer(){return this._weights}numPoints(){return this._numPoints}weightChannels(){return this._channels}bbox(){return this._bbox}}class Ki{async loadFile(e,t){const r=await e.arrayBuffer();return this.loadBuffer(r,t)}async loadUrl(e,t){const r=await fetch(e,{signal:t?.signal});if(!r.ok)throw new Error(`Failed to fetch weight PLY: ${r.status} ${r.statusText}`);const s=await r.arrayBuffer();return this.loadBuffer(s,t)}async loadBuffer(e,t){const r=(o,n,c)=>{t?.onProgress?.({stage:o,progress:n,message:c})};r("Parsing PLY header",.1);const s=this.parseHeader(e);r("Parsing vertex data",.2);const i=this.parseVertices(e,s);r("Processing weights",.5);const a=this.processWeights(s,i,r);return r("Complete",1),a}canHandle(e,t){return e.toLowerCase().endsWith(".ply")||t==="application/octet-stream"}getSupportedExtensions(){return[".ply"]}processWeights(e,t,r){const s=new Array(64).fill(-1);for(let o=0;o<64;o++)s[o]=t.props.indexOf(`weight_${o}`);if(!s.every(o=>o>=0))throw new Error("Weight PLY missing required properties weight_0..weight_63");const i=e.vertices,a=new Float32Array(i*64);for(let o=0;o<i;o++){o%1e4===0&&r?.("Processing weights",.5+.4*(o/i),`${o}/${i} points`);const n=t.rows(o),c=o*64;for(let h=0;h<64;h++)a[c+h]=n[s[h]]}return new Qi({weightsBuffer:a.buffer,numPoints:i,channels:64})}parseHeader(e){const t=new TextDecoder().decode(e.slice(0,Math.min(1048576,e.byteLength))),r=t.split(/\r?\n/);if(!/^ply\b/.test(r[0]))throw new Error("Not a PLY file");let s=null,i=0;const a=[];let o=0,n=!1;for(let c=1;c<r.length;c++){const h=r[c];if(h==="end_header"){let u=t.indexOf("end_header");if(u<0)throw new Error("Malformed PLY: missing end_header");const d=t.indexOf(`
`,u+10);o=d>=0?d+1:u+10+1;break}if(h.startsWith("format ")){const u=h.split(/\s+/)[1];if(u==="ascii"||u==="binary_little_endian"||u==="binary_big_endian")s=u;else throw new Error(`Unsupported PLY format: ${u}`)}else if(h.startsWith("element "))n=h.startsWith("element vertex "),n&&(i=parseInt(h.split(/\s+/)[2],10));else if(n&&h.startsWith("property ")){const u=h.trim().split(/\s+/);if(u[1]==="list")throw new Error("Unexpected list property in vertex");const d=u[u.length-1];a.push(d)}}if(!s)throw new Error("PLY header missing format");if(i<=0)throw new Error("PLY has no vertices element");return{format:s,vertices:i,props:a,headerByteLength:o}}parseVertices(e,t){const r=t.props.slice();return t.format==="ascii"?this.parseASCIIVertices(e,t,r):this.parseBinaryVertices(e,t,r)}parseASCIIVertices(e,t,r){const s=new TextDecoder().decode(e.slice(t.headerByteLength)).split(/\r?\n/).filter(i=>i.trim().length>0);return{props:r,rows:i=>{const a=s[i].trim().split(/\s+/);if(a.length<r.length)throw new Error("Malformed PLY ASCII row");return a.map(parseFloat)}}}parseBinaryVertices(e,t,r){const s=t.format==="binary_little_endian",i=new DataView(e,t.headerByteLength),a=r.length*4;return{props:r,rows:o=>{const n=o*a,c=new Array(r.length);for(let h=0;h<r.length;h++)c[h]=i.getFloat32(n+h*4,s);return c}}}}class Zi{gaussianLoaders=new Map;threeLoaders=new Map;constructor(){this.register(new ms,[".ply"],"gaussian"),this.register(new Wi,[".spz"],"gaussian"),this.register(new Ni,[".ksplat"],"gaussian"),this.register(new Ii,[".splat"],"gaussian"),this.register(new Hi,[".sog"],"gaussian"),this.register(new ur,[".compressed.ply"],"gaussian"),Ji().forEach(e=>{const t=e.getSupportedExtensions();this.register(e,t,"three")})}register(e,t,r="three"){const s=r==="gaussian"?this.gaussianLoaders:this.threeLoaders;for(const i of t)s.set(i.toLowerCase(),e)}getLoader(e,t,r){const s=e.toLowerCase(),i=this.getFileExtension(s);if(s.endsWith(".compressed.ply"))return this.gaussianLoaders.get(".compressed.ply")||null;r?.isGaussian;const a=r?.isGaussian===!1;if(a)return this.threeLoaders.get(i)||null;let o=this.gaussianLoaders.get(i);if(o||(o=this.threeLoaders.get(i),o))return o;if(!a){for(const[,n]of this.gaussianLoaders)if(n.canHandle(e,t))return n}for(const[,n]of this.threeLoaders)if(n.canHandle(e,t))return n;return null}async getLoaderForFile(e,t){let r;return e.name.toLowerCase().endsWith(".ply")&&(r=await this.is3dgsPly(e)),this.getLoader(e.name,t,{isGaussian:r})}getAllSupportedExtensions(){const e=new Set;for(const t of this.gaussianLoaders.keys())e.add(t);for(const t of this.threeLoaders.keys())e.add(t);return Array.from(e)}async loadFile(e,t={}){if(t.isGaussian===void 0&&e.name.toLowerCase().endsWith(".ply")){const s=await this.is3dgsPly(e);t.isGaussian=s}const r=this.getLoader(e.name,e.type,t);if(!r)throw new Error(`Unsupported file format: ${e.name}`);return r.loadFile(e,t)}async loadUrl(e,t={}){const r=this.getLoader(e,void 0,t);if(!r)throw new Error(`Unsupported file format for URL: ${e}`);return r.loadUrl(e,t)}async loadBuffer(e,t){const r=this.detectFormatFromBuffer(e);if(!r)throw new Error("Unable to detect file format from buffer");return r.loadBuffer(e,t)}canHandle(e,t,r){return this.getLoader(e,t,r)!==null}getSupportedExtensions(){return this.getAllSupportedExtensions()}getFileExtension(e){const t=e.lastIndexOf(".");return t>=0?e.slice(t).toLowerCase():""}detectFormatFromBuffer(e){const t=new DataView(e),r=new TextDecoder().decode(e.slice(0,100));if(r.startsWith(`ply
`)||r.startsWith(`ply\r
`))return this.is3dgsPlyFromHeader(r)?this.gaussianLoaders.get(".ply")||null:this.threeLoaders.get(".ply")||null;if(e.byteLength>=2){const s=t.getUint8(0),i=t.getUint8(1);if(s===31&&i===139)return this.gaussianLoaders.get(".spz")||null}return e.byteLength>=4&&String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))==="KSPL"?this.gaussianLoaders.get(".ksplat")||null:e.byteLength>=4&&t.getUint32(0,!0)===67324752?this.gaussianLoaders.get(".sog")||null:(e.byteLength>0&&e.byteLength%32,null)}async readFileHeader(e,t=4096){const r=await e.slice(0,t).arrayBuffer();return new TextDecoder("utf-8").decode(r||new ArrayBuffer(0))}async is3dgsPly(e){try{const t=await this.readFileHeader(e),r=this.is3dgsPlyFromHeader(t);return console.log(`PLY 文件 ${e.name} 3DGS 检测结果: ${r}`),r}catch(t){return console.warn("读取 PLY 头信息失败，按非 3DGS 处理:",e.name,t),!1}}is3dgsPlyFromHeader(e){const t=e.toLowerCase();return t.startsWith("ply")?["property float opacity","property float scale_0","property float scale_1","property float scale_2","property float rot_0","property float rot_1","property float rot_2","property float rot_3"].every(r=>t.includes(r)):!1}}function ea(){return new Zi}const Ut=ea();function ta(){return[".ply",".spz",".ksplat",".splat",".sog",".compressed.ply"]}function bt(l){const e=l.toLowerCase();return ta().some(t=>e.endsWith(t))}function Ke(l){const e=l.toLowerCase();return e.endsWith(".compressed.ply")?"compressed.ply":e.endsWith(".ksplat")?"ksplat":e.endsWith(".splat")?"splat":e.endsWith(".spz")?"spz":e.endsWith(".sog")?"sog":e.endsWith(".ply")?"ply":null}function ra(l){return"gaussianBuffer"in l&&"shCoefsBuffer"in l&&"numPoints"in l&&"shDegree"in l}async function It(l){try{if(await l.queryPermission({mode:"readwrite"})!=="granted"&&await l.requestPermission({mode:"readwrite"})!=="granted")throw new Error("文件夹权限被拒绝或已失效");const e=l.name}catch(e){const t=e.message||String(e);throw t.includes("could not be found")||t.includes("not found")||t.includes("权限")||t.includes("permission")?new Error(`文件夹句柄已失效：${t}`):e}}async function gs(l){try{const e=[];for await(const[t,r]of l)e.push([t,r]);for(const[t,r]of e)try{r.kind==="file"?await l.removeEntry(t):r.kind==="directory"&&(await gs(r),await l.removeEntry(t))}catch(s){const i=s.message||String(s);console.warn(`[Scene] 删除条目 ${t} 时出现错误:`,i)}}catch(e){const t=e.message||String(e);if(!t.includes("could not be found")&&!t.includes("not found"))throw console.warn("[Scene] 清空文件夹时出现错误:",t),new Error(`清空文件夹失败: ${t}`)}}async function ja(l){const{skyboxEnabled:e,scenes:t,folderHandle:r,meta:s}=l;await It(r),await gs(r);const i=new Set;for(const o of t)if(!(!o||!Array.isArray(o.models)))for(const n of o.models){if(!n)continue;if(!n.id)throw new Error("模型必须包含id字段");if(!n.originFile)continue;const c=n.name||n.assetName;if(!c)throw new Error(`对象 ${n.id} 缺少保存外部资源所需的名称`);if(i.has(c))continue;i.add(c);let h;if(n.originFile instanceof File||n.originFile instanceof Blob)h=n.originFile;else if("getFile"in n.originFile&&typeof n.originFile.getFile=="function")h=await n.originFile.getFile();else throw new Error(`无法识别模型文件originFile类型: ${n.name}`);try{await It(r);const u=await(await r.getFileHandle(c,{create:!0})).createWritable();await u.write(h),await u.close()}catch(u){const d=u.message||String(u);throw console.error("[Scene] 写入模型文件失败:",c,u),d.includes("could not be found")||d.includes("not found")||d.includes("已失效")||d.includes("权限")?u:new Error(`写入模型文件 ${c} 失败: ${d}`)}}const a={version:1,meta:s||{createdAt:new Date().toISOString(),app:"VisionaryEditor"},skyboxEnabled:e||!1,camera:l.cameraParams||{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],fov:60,nearPlane:.1,farPlane:1e3},totalFrames:l.totalFrames||100,scenes:t.map(o=>({...o,models:o.models.map(({originFile:n,...c})=>c)}))};await It(r);try{console.log("[Scene] 写入 scene.json:",a);const o=await(await r.getFileHandle("scene.json",{create:!0})).createWritable();await o.write(JSON.stringify(a,null,2)),await o.close()}catch(o){const n=o.message||String(o);throw console.error("[Scene] 写入 scene.json 失败:",o),new Error(`写入场景配置文件失败: ${n}`)}}const sa="/src/ort/";let lt=null;function ia(l){typeof l=="string"?lt=l:lt=l.join(",")}function ot(){return lt||(lt=ys()),lt}function qa(l){if(l&&ia(l),typeof window<"u"&&window.ort){const e=window.ort;e.env.wasm.wasmPaths=ot(),console.log(`[VisionaryCore] ONNX Runtime WASM paths configured: ${ot()}`)}else if(console.warn("[VisionaryCore] ONNX Runtime not available, configuration will be applied when ort is loaded"),typeof window<"u"){const e=()=>{if(window.ort){const t=window.ort;t.env.wasm.wasmPaths=ot(),console.log(`[VisionaryCore] ONNX Runtime WASM paths configured (delayed): ${ot()}`)}else setTimeout(e,50)};setTimeout(e,50)}}function ys(){return typeof window>"u"||!window.location?.href?sa:new URL("src/ort/",window.location.href).href}function aa(l){return Math.ceil(l/16)*16}function er(l,e){const t=l.reduce((r,s)=>r*Math.max(1,s),1);return aa(t*e.bytesPerElement)}function Ht(l){return l.dataType}class Vt{static detectOutputPrecisionFromName(e){const t=(e||"").toLowerCase();return t.includes("_f32")||t.includes("_float32")?{dataType:"float32",bytesPerElement:4}:t.includes("_f16")||t.includes("_float16")?{dataType:"float16",bytesPerElement:2}:t.includes("_i8")||t.includes("_int8")?{dataType:"int8",bytesPerElement:1}:t.includes("_u8")||t.includes("_uint8")?{dataType:"uint8",bytesPerElement:1}:{dataType:"float16",bytesPerElement:2}}static detectFromMetadataPreferringNameSuffix(e,t){try{const r=e.outputMetadata;if(r&&typeof r=="object"){const s=o=>r instanceof Map?r.get(o)??r.get(String(o)):Array.isArray(r)&&typeof o=="number"?r[o]:r[o]??r[String(o)],i=r instanceof Map?Array.from(r.values()):Object.keys(r).map(o=>r[o]);let a=t?s(t):void 0;if(!a&&i.length&&(a=i.find(o=>o?.name===t)),!a&&t){const o=e.outputNames,n=Array.isArray(o)?o.findIndex(c=>c===t):-1;n>=0&&(a=s(n))}if(a){const o=a?.type??a?.dataType;if(o){const n=this.mapOrtTypeToPrecision(o);if(n)return n}}}}catch{}return this.detectOutputPrecisionFromName(t)}static mapOrtTypeToPrecision(e){const t=String(e).toLowerCase();if(t.includes("float16")||t==="float16"||t==="tensor(float16)")return{dataType:"float16",bytesPerElement:2};if(t.includes("float32")||t==="float32"||t==="float"||t==="tensor(float)")return{dataType:"float32",bytesPerElement:4};if(t.includes("int8")||t==="int8"||t==="tensor(int8)")return{dataType:"int8",bytesPerElement:1};if(t.includes("uint8")||t==="uint8"||t==="tensor(uint8)")return{dataType:"uint8",bytesPerElement:1}}static extractQuantizationParams(e,t){try{const r=e.model?.graph?.initializer??[];let s,i;for(const a of r){const o=a?.name;if(!o)continue;const n=o.toLowerCase();if(n.includes("scale")&&n.includes(t.toLowerCase())){const c=a?.floatData?.[0]??a?.doubleData?.[0];typeof c=="number"&&(s=c)}if((n.includes("zero")||n.includes("zeropoint"))&&n.includes(t.toLowerCase())){const c=a?.int32Data?.[0]??a?.int64Data?.[0];typeof c=="number"&&(i=c)}}return{scale:s,zeroPoint:i}}catch{return{}}}static calculateBufferSize(e,t){return er(e,t)}}let Ur=!1,oa=class St{device;session;verbose=!1;static _runChain=Promise.resolve();static async runExclusive(e){const t=St._runChain;let r;St._runChain=new Promise(s=>r=s);try{await t}catch{}try{const s=await e();return r(),s}catch(s){throw r(),s}}colorMode="sh";colorDim=48;colorOutputName=null;capacity;gaussOutputName=null;gaussFields=10;gaussBuf;shBuf;countBuf;cameraMatrixBuf;projMatrixBuf;timeBuf;maxPoints;get detectedCapacity(){return this.capacity}get detectedGaussOutputName(){return this.gaussOutputName}get detectedGaussFields(){return this.gaussFields}actualPoints;inputNames;gaussianPrecision;colorPrecision;get detectedColorMode(){return this.colorMode}get detectedColorDim(){return this.colorDim}get detectedColorOutputName(){return this.colorOutputName}log(...e){this.verbose&&console.log(...e)}warn(...e){this.verbose&&console.warn(...e)}table(e){this.verbose&&console.table(e)}async init(e){this.device=e.device,this.verbose=e.verbose??!1,this.log("Initializing ONNX Runtime environment...");try{vt.wasm.numThreads=1,vt.logLevel="warning",vt.wasm.wasmPaths=ot();try{const d=vt.webgpu;if(d){const p=Object.getOwnPropertyDescriptor(d,"device");(!p||p.writable!==!1)&&(d.device=e.device)}}catch{}this.log("isGPUDevice?",e.device&&typeof e.device.createBuffer=="function"&&!!e.device.queue),this.log("ONNX Runtime environment configured with provided WebGPU device")}catch(d){this.warn("ONNX Runtime environment configuration failed:",d)}this.log(`Attempting to create ONNX session with model: ${e.modelUrl}`),this.log(`Model URL type: ${typeof e.modelUrl}`),e.modelUrl&&e.modelUrl.constructor&&this.log(`Model URL constructor: ${e.modelUrl.constructor.name}`),e.modelUrl&&typeof e.modelUrl.toString=="function"&&this.log(`Model URL toString: ${e.modelUrl.toString()}`);let t;if(e.modelUrl)if(typeof e.modelUrl=="string")t=e.modelUrl;else if(typeof e.modelUrl=="object"&&e.modelUrl&&"toString"in e.modelUrl&&typeof e.modelUrl.toString=="function")t=e.modelUrl.toString();else throw new Error(`Invalid modelUrl type: ${typeof e.modelUrl}. Expected string path.`);else throw new Error(`modelUrl is required but was ${e.modelUrl}`);if(!t||t.trim()==="")throw new Error(`modelUrl cannot be empty. Got: "${t}"`);const r=d=>({executionProviders:[{name:"webgpu",device:e.device,deviceId:0,powerPreference:"high-performance"}],graphOptimizationLevel:"extended",preferredOutputLocation:"gpu-buffer",enableGraphCapture:d&&!Ur,enableProfiling:Ur});let s=null;const i=async()=>{if(s)return s;this.log(` Fetching model as ArrayBuffer from: ${t}`);const d=await fetch(t);if(!d.ok)throw new Error(`Failed to fetch model: ${d.status} ${d.statusText}`);const p=await d.arrayBuffer();return this.log(` Model buffer size: ${p.byteLength} bytes`),s=new Uint8Array(p),s},a=async d=>{const p=r(d);this.log(`Creating WebGPU-only ONNX session (graphCapture=${d})...`),this.log(`Using model path: "${t}"`),this.log("Session options:",p);try{this.session=await Pr.create(t,p),this.log(" ONNX session created successfully with WebGPU provider");return}catch(f){this.warn(" WebGPU session creation failed, trying ArrayBuffer approach:",f);try{const g=await i();this.session=await Pr.create(g,p),this.log(" ONNX session created successfully with WebGPU provider (ArrayBuffer)");return}catch(g){console.error(" WebGPU session creation failed with both path and buffer approaches"),console.error("Path error:",f),console.error("Buffer error:",g);const y=new Error(`WebGPU execution provider required but failed to initialize (graphCapture=${d}). Ensure WebGPU is supported and enabled.`);throw y.pathError=f,y.bufferError=g,y}}};try{await a(!0)}catch(d){const p=`Onnx can not enable WebGPU Graph Capture, system will automatically close this feature and re-initialize.
Error details: ${d instanceof Error?d.message:String(d)}`,f=globalThis?.alert;typeof f=="function"?f(p):console.error(p),this.warn(" Graph Capture initialization failed, retrying without it",d),await a(!1)}this.log(" Using provided WebGPU device to avoid device mismatch"),this.log("📋 Model Input Names:",this.session.inputNames),this.log("📋 Model Output Names:",this.session.outputNames),this.inputNames=this.session.inputNames,await this.detectFromMetadata(),this.maxPoints=this.capacity||e.maxPoints||2e6,this.log(`📏 Using maxPoints: ${this.maxPoints} (detected: ${this.capacity}, config: ${e.maxPoints})`),await this.detectPrecisions(e.precisionConfig),console.log("gaussianPrecision",this.gaussianPrecision),console.log("gaussianPrecision",this.colorPrecision);const o=er([this.maxPoints,10],this.gaussianPrecision),n=er([this.maxPoints,this.colorDim],this.colorPrecision);this.log(` Allocating buffers (gauss ${this.gaussianPrecision.dataType}): ${o}B, (color ${this.colorPrecision.dataType}): ${n}B, channels=${this.colorDim}`),this.log(` Color mode: ${this.colorMode}, output name: '${this.colorOutputName}'`);const c=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.VERTEX;this.gaussBuf=this.device.createBuffer({size:o,usage:c,label:`gaussian_${this.gaussianPrecision.dataType}`}),this.shBuf=this.device.createBuffer({size:n,usage:c,label:`color_${this.colorPrecision.dataType}`}),this.countBuf=this.device.createBuffer({size:Math.ceil(4/16)*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST,label:"num_points"});const h=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,u=d=>Math.ceil(d/16)*16;this.cameraMatrixBuf=this.device.createBuffer({size:u(64),usage:h,label:"camera_matrix"}),this.projMatrixBuf=this.device.createBuffer({size:u(64),usage:h,label:"projection_matrix"}),this.timeBuf=this.device.createBuffer({size:u(4),usage:h,label:"time_input"})}async detectFromMetadata(){this.log(" Detecting capacity and color output from model metadata...");try{await this.pickCapacityFromMetadataOrProbe()?this.log(` Capacity detected from metadata: ${this.capacity}`):this.log(" Could not detect capacity from metadata"),this.pickColorOutputFromMetadata()?this.log(` Color mode detected from metadata: ${this.colorMode} (${this.colorDim} channels)`):(this.log(" Could not detect color type from metadata, using defaults"),this.colorMode="sh",this.colorDim=48,this.colorOutputName="sh_f16")}catch(e){console.error(" Metadata detection failed:",e),this.warn(" Falling back to defaults"),this.colorMode="sh",this.colorDim=48,this.colorOutputName="sh_f16",this.log(` Detection completed with defaults: capacity=${this.capacity||"none"}, color=${this.colorMode} (${this.colorDim} channels)`)}}async detectPrecisions(e){try{const s=this.session.outputNames||[],i=this.session.outputMetadata;if(this.verbose&&(console.log("[ONNX][Debug] outputNames =",s),i))for(const a in i){const o=i[a],n=o?.shape?`[${o.shape.join(", ")}]`:"unknown";console.log(`[ONNX][Meta] idx=${a} name='${o?.name}' type='${o?.type??o?.dataType}' shape=${n}`)}}catch{}const t=this.gaussOutputName||(this.session.outputNames?.find(s=>/gauss|gaussian/i.test(s))??"gaussian_f16"),r=Vt.detectFromMetadataPreferringNameSuffix(this.session,t);if(this.gaussianPrecision=r,this.colorPrecision={...r},r.dataType==="int8"||r.dataType==="uint8"){const s=Vt.extractQuantizationParams(this.session,t);this.gaussianPrecision.scale=s.scale??1,this.gaussianPrecision.zeroPoint=s.zeroPoint??0;const i=this.colorOutputName||"sh_f16",a=Vt.extractQuantizationParams(this.session,i);this.colorPrecision.scale=a.scale??1,this.colorPrecision.zeroPoint=a.zeroPoint??0}this.log(`Precision detected: gaussian=${this.gaussianPrecision.dataType} (${this.gaussianPrecision.bytesPerElement}B), color=${this.colorPrecision.dataType}`),this.detectedPrecisionLabel=this.gaussianPrecision?.dataType||"float16"}async pickCapacityFromMetadataOrProbe(){this.log("🧭 Detecting capacity from gaussian output metadata...");try{const e=this.session;this.log(" DEBUG: session object keys:",Object.keys(e));const t=e.outputMetadata;this.log(" DEBUG: outputMetadata:",t);for(const r of Object.keys(t))if(console.log(` Found gaussian candidate in outputMetadata: '${r}' dims=${t[r]?.shape?`[${t[r]?.shape.join(", ")}]`:"undefined"}`),t[r].name.startsWith("gauss")||t[r].name.startsWith("gaussian")){const s=t[r]?.shape;return console.log(` Found gaussian candidate in outputMetadata: '${r}' dims=${s?`[${s.join(", ")}]`:"undefined"}`),this.gaussOutputName=t[r].name,this.gaussFields=s[-1],this.capacity=s[0],this.log(`🦭 Capacity from metadata: ${t[r].name} -> N=${this.capacity}, fields=${this.gaussFields}`),!0}return console.log("🔬 Fallback: Running minimal CPU inference to detect shapes..."),await this.detectCapacityFromCPUInference()}catch(e){return console.warn(" Error accessing output metadata:",e),await this.detectCapacityFromCPUInference()}}async detectCapacityFromCPUInference(){this.log("🔬 Running minimal CPU inference to detect model dimensions...");try{const e={};for(const s of this.inputNames)s.toLowerCase().includes("camera")||s.toLowerCase().includes("view")||s.toLowerCase().includes("matrix")?e[s]=new Re("float32",new Float32Array(16).fill(0),[4,4]):s.toLowerCase().includes("time")||s==="t"?e[s]=new Re("float32",new Float32Array([0]),[1]):(s.toLowerCase().includes("projection")||s.toLowerCase().includes("proj"))&&(e[s]=new Re("float32",new Float32Array(16).fill(0),[4,4]));this.log(` Running CPU inference with inputs: ${Object.keys(e).join(", ")}`);const t=await this.session.run(e),r=this.session.outputNames.filter(s=>/gauss|gaussian|means|cov|gaussian_f16/i.test(s));for(const s of r){const i=t[s];if(i&&i.dims.length>=2){const a=i.dims,o=a[a.length-1],n=a[0];if(this.log(` Found gaussian output '${s}': shape [${a.join(", ")}]`),(o===10||o===9)&&Number.isFinite(n)&&n>0)return this.gaussOutputName=s,this.gaussFields=o,this.capacity=n,this.log(` Capacity detected from CPU inference: ${s} -> N=${this.capacity}, fields=${this.gaussFields}`),this.detectColorFromCPUResult(t),!0}}return this.log(" No gaussian output found with expected dimensions"),!1}catch(e){return this.warn(" CPU inference detection failed:",e),!1}}detectColorFromCPUResult(e){for(const[t,r]of Object.entries(e)){const s=r.dims,i=t.toLowerCase();if((i.includes("color")||i.includes("sh")||i.includes("rgb"))&&s.length>=2){const a=s[s.length-1];if(a===48){this.colorMode="sh",this.colorDim=48,this.colorOutputName=t,this.log(` Color mode detected from CPU inference: SH (${a} channels) - ${t}`);return}else if(a===3||a===4){this.colorMode="rgb",this.colorDim=a===3?4:a,this.colorOutputName=t,this.log(` Color mode detected from CPU inference: RGB (${a} channels) - ${t}`);return}else if(a===12||a===27){this.colorMode="sh",this.colorDim=a,this.colorOutputName=t,this.log(` Color mode detected from CPU inference: SH (${a} channels) - ${t}`);return}}}}pickColorOutputFromMetadata(){this.log(" Detecting color output type from metadata dimensions...");try{const t=this.session.outputMetadata??{};for(const r of this.session.outputNames){const s=r.toLowerCase();if(s.includes("color")||s.includes("sh")||s.includes("rgb")){let i=-1;for(const o in t)if(t[o]?.name===r){i=Number(o);break}if(i===-1)continue;const a=t[i]?.shape;if(this.log(` Found potential color output: '${r}' dims=${a?`[${a.join(", ")}]`:"undefined"}`),a&&a.length>=2){const o=a[a.length-1];if(o===48)return this.colorMode="sh",this.colorDim=48,this.colorOutputName=r,this.log(` Detected SH from dimensions: '${r}' → ${o} channels`),!0;if(o===3||o===4)return this.colorMode="rgb",this.colorDim=o,this.colorOutputName=r,this.log(` Detected RGB from dimensions: '${r}' → ${o} channels`),!0;if(o===12||o===27)return this.colorMode="sh",this.colorDim=o,this.colorOutputName=r,this.log(` Detected SH from dimensions: '${r}' → ${o} channels`),!0;this.warn(` Found color output '${r}' with unexpected ${o} channels`)}}}}catch(t){this.warn(" Error accessing color output metadata:",t)}const e=["sh_f16","spherical_harmonics","color_sh"];for(const t of e)if(this.session.outputNames.includes(t))return this.colorMode="sh",this.colorDim=48,this.colorOutputName=t,this.log(`📝 Found standard SH output: '${t}' → 48 channels (name-based fallback)`),!0;return this.log(" No color output detected from metadata"),!1}updateInputBuffers(e,t,r){if(e&&(this.log(" DEBUG: Camera Matrix passed to ONNX:"),this.log(e),this.table([e.slice(0,4),e.slice(4,8),e.slice(8,12),e.slice(12,16)]),this.device.queue.writeBuffer(this.cameraMatrixBuf,0,e.buffer)),t&&(this.log(" DEBUG: Projection Matrix passed to ONNX:"),this.log(t),this.table([t.slice(0,4),t.slice(4,8),t.slice(8,12),t.slice(12,16)]),this.device.queue.writeBuffer(this.projMatrixBuf,0,t.buffer)),r!==void 0){this.log(` DEBUG: Time passed to ONNX: ${r}`);const s=new Float32Array([r]);this.device.queue.writeBuffer(this.timeBuf,0,s.buffer)}}async runInference(e={}){return St.runExclusive(async()=>{this.log(" GPU DIRECT: Running WebGPU inference with IOBinding..."),this.log(`📏 Using pre-allocated buffers for ${this.maxPoints} points`),this.updateInputBuffers(e.cameraMatrix,e.projectionMatrix,e.time);const t=this.maxPoints,r={};for(const o of this.inputNames)o.toLowerCase().includes("camera")||o.toLowerCase().includes("view")||o.toLowerCase().includes("matrix")?(r[o]=Re.fromGpuBuffer(this.cameraMatrixBuf,{dataType:"float32",dims:[4,4]}),this.log(`  📷 Created GPU camera matrix for '${o}'`)):o.toLowerCase().includes("time")||o==="t"?(r[o]=Re.fromGpuBuffer(this.timeBuf,{dataType:"float32",dims:[1]}),this.log(`  ⏰ Created GPU time input for '${o}'`)):(o.toLowerCase().includes("projection")||o.toLowerCase().includes("proj"))&&(r[o]=Re.fromGpuBuffer(this.projMatrixBuf,{dataType:"float32",dims:[4,4]}),this.log(`  📐 Created GPU projection matrix for '${o}'`));const s=this.gaussOutputName||"gaussian_f16",i={};i[s]=Re.fromGpuBuffer(this.gaussBuf,{dataType:Ht(this.gaussianPrecision),dims:[t,10]}),i.num_points=Re.fromGpuBuffer(this.countBuf,{dataType:"int32",dims:[1]});const a=this.colorOutputName||"sh_f16";if(this.log("----- real needed color channels "+this.colorDim),this.session.outputNames.includes(a))i[a]=Re.fromGpuBuffer(this.shBuf,{dataType:Ht(this.colorPrecision),dims:[t,this.colorDim]});else{this.warn(` Color output '${a}' not found in model outputs`),this.warn(`Available outputs: ${this.session.outputNames.join(", ")}`);const o=this.session.outputNames.find(n=>n.toLowerCase().includes("color")||n.toLowerCase().includes("sh")||n.toLowerCase().includes("rgb"));if(o)this.warn(` Using possible color output: '${o}'`),i[o]=Re.fromGpuBuffer(this.shBuf,{dataType:Ht(this.colorPrecision),dims:[t,this.colorDim]});else throw new Error(`No suitable color output found in model. Available outputs: ${this.session.outputNames.join(", ")}`)}this.log(` IOBinding configured: gaussian[${t}x10], ${this.colorMode}[${t}x${this.colorDim}]`),this.log(` Input feeds: ${Object.keys(r).join(", ")}`),this.log(` Output fetches: ${Object.keys(i).join(", ")}`);try{await this.session.run(r,i),this.log(" GPU DIRECT SUCCESS: Inference completed with full GPU pipeline");try{const o=await ts(this.device,this.countBuf);this.log(` DEBUG: ONNX wrote count=${o} to GPU buffer`),this.actualPoints=o}catch(o){this.warn(" Could not read count buffer for debugging:",o)}}catch(o){console.error(" WebGPU IOBinding failed:",o);const n=o instanceof Error?o.message:String(o);throw console.error("name:",o?.name,"message:",o?.message,"stack:",o?.stack),new Error(`WebGPU inference required but failed: ${n}`)}})}destroy(){this.gaussBuf?.destroy?.(),this.shBuf?.destroy?.(),this.countBuf?.destroy?.(),this.cameraMatrixBuf?.destroy?.(),this.projMatrixBuf?.destroy?.(),this.timeBuf?.destroy?.()}},na=class{constructor(e){this.cfg=e}cfg;io;inited=!1;async initialize(e){const t=e||this.cfg.device;if(!t)throw new Error("WebGPU device is required. Pass device to initialize() or provide it in config.");this.io=new oa,await this.io.init({modelUrl:this.cfg.modelUrl,maxPoints:this.cfg.maxPoints,device:t,verbose:!1,precisionConfig:this.cfg.precisionConfig}),this.inited=!0}async generate(e={}){if(!this.inited)throw new Error("ONNXGenerator not initialized");await this.io.runInference(e)}getGaussianBuffer(){return this.io.gaussBuf}getSHBuffer(){return this.io.shBuf}getCountBuffer(){return this.io.countBuf}getDevice(){return this.io.device}getInputNames(){return this.io.inputNames||[]}getDetectedCapacity(){return this.io.detectedCapacity}getDetectedColorMode(){return this.io.detectedColorMode}getDetectedColorDim(){return this.io.detectedColorDim}getActualMaxPoints(){return this.io.maxPoints}getGaussianPrecision(){return this.io.gaussianPrecisionInfo??this.io.gaussianPrecision}getColorPrecision(){return this.io.colorPrecisionInfo??this.io.colorPrecision}dispose(){this.io?.destroy()}};xe(0,1,0);let ct=class tr{buffer;bindGroup;label;size;_data;device;static bindGroupLayout(e){return e.createBindGroupLayout({label:"uniform bind group layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]})}constructor(e,t,r){this.device=e,this.label=r;const s=t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength);this.size=s.byteLength,this._data=new ArrayBuffer(this.size),new Uint8Array(this._data).set(s),this.buffer=e.createBuffer({label:r,size:this.size,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!1}),e.queue.writeBuffer(this.buffer,0,this._data),this.bindGroup=e.createBindGroup({label:r?`${r} bind group`:void 0,layout:tr.bindGroupLayout(e),entries:[{binding:0,resource:{buffer:this.buffer}}]})}get data(){return this._data.slice(0)}set dataBytes(e){if(e.byteLength!==this.size)throw new Error(`Uniform size mismatch: expected ${this.size}, got ${e.byteLength}`);this._data=e.slice(0)}setData(e){if(e.byteLength!==this.size)throw new Error(`Uniform size mismatch: expected ${this.size}, got ${e.byteLength}`);new Uint8Array(this._data).set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}flush(e){(e||this.device).queue.writeBuffer(this.buffer,0,new Uint8Array(this._data))}clone(e){const t=e||this.device;return new tr(t,this._data,this.label)}destroy(){this.buffer.destroy()}};var Be=(l=>(l.STOPPED="stopped",l.PLAYING="playing",l.PAUSED="paused",l))(Be||{});let la=class{_playbackState=Be.STOPPED;_animationSpeed=1;_eventListeners=[];get playbackState(){return this._playbackState}get animationSpeed(){return this._animationSpeed}get isPlaying(){return this._playbackState===Be.PLAYING}get isPaused(){return this._playbackState===Be.PAUSED}get isStopped(){return this._playbackState===Be.STOPPED}play(e=1){this._animationSpeed=Math.max(.1,e),this._playbackState=Be.PLAYING,this._emitEvent({type:"play",timestamp:performance.now(),data:{speed:this._animationSpeed}}),console.log(`🎬 Animation started at ${this._animationSpeed}x speed`)}pause(){this._playbackState===Be.PLAYING?(this._playbackState=Be.PAUSED,this._emitEvent({type:"pause",timestamp:performance.now()}),console.log("⏸️ Animation paused")):console.warn("Cannot pause: animation is not playing")}resume(){this._playbackState===Be.PAUSED?(this._playbackState=Be.PLAYING,this._emitEvent({type:"resume",timestamp:performance.now()}),console.log("▶️ Animation resumed")):console.warn("Cannot resume: animation is not paused")}stop(){this._playbackState=Be.STOPPED,this._emitEvent({type:"stop",timestamp:performance.now()}),console.log("⏹️ Animation stopped")}setSpeed(e){const t=this._animationSpeed;this._animationSpeed=Math.max(.1,e),t!==this._animationSpeed&&(this._emitEvent({type:"speedChange",timestamp:performance.now(),data:{oldSpeed:t,newSpeed:this._animationSpeed}}),console.log(`🎯 Animation speed changed from ${t}x to ${this._animationSpeed}x`))}getSpeed(){return this._animationSpeed}reset(){this._playbackState=Be.STOPPED,this._animationSpeed=1,this._emitEvent({type:"stop",timestamp:performance.now(),data:{reset:!0}}),console.log("🔄 Animation state reset")}addEventListener(e){this._eventListeners.push(e)}removeEventListener(e){const t=this._eventListeners.indexOf(e);t>-1&&this._eventListeners.splice(t,1)}clearEventListeners(){this._eventListeners=[]}getStateInfo(){return{playbackState:this._playbackState,animationSpeed:this._animationSpeed,isPlaying:this.isPlaying,isPaused:this.isPaused,isStopped:this.isStopped}}_emitEvent(e){this._eventListeners.forEach(t=>{try{t(e)}catch(r){console.error("Error in animation state event listener:",r)}})}};var Gt=(l=>(l.FIXED_DELTA="fixed_delta",l.VARIABLE_DELTA="variable_delta",l))(Gt||{});class jt{static calculateDeltaTime(e){const{mode:t,currentTime:r,lastUpdateTime:s,fixedDeltaTime:i,maxDeltaTime:a}=e;switch(t){case"fixed_delta":return i;case"variable_delta":if(s===0)return 0;let o=(r-s)/1e3;return o=Math.min(Math.max(o,0),a),o;default:return console.warn(`Unknown time update mode: ${t}, using fixed delta`),i}}static isValidMode(e){return Object.values(Gt).includes(e)}static fromString(e){return this.isValidMode(e)?e:(console.warn(`Invalid time update mode: ${e}, defaulting to FIXED_DELTA`),"fixed_delta")}static getDefaultFixedDeltaTime(){return .016*1.1}static getDefaultMaxDeltaTime(){return .05}static getModeDescription(e){switch(e){case"fixed_delta":return"固定时间步长 - 每帧使用固定的时间增量，确保动画播放稳定";case"variable_delta":return"可变时间步长 - 根据实际帧间隔计算时间增量，更接近真实时间";default:return"未知模式"}}}class dr{_frameTime=-1;_lastUpdateTime=0;_config;constructor(e={}){this._config={timeScale:1,timeOffset:0,timeUpdateMode:"fixed_delta",animationSpeed:1,fixedDeltaTime:jt.getDefaultFixedDeltaTime(),maxDeltaTime:jt.getDefaultMaxDeltaTime(),...e}}get frameTime(){return this._frameTime}get config(){return{...this._config}}updateConfig(e){this._config={...this._config,...e}}setTimeScale(e){this._config.timeScale=Math.max(.01,e),console.log(`[TimeCalculator] Time scale set to: ${this._config.timeScale}`)}getTimeScale(){return this._config.timeScale}setTimeOffset(e){this._config.timeOffset=e,console.log(`[TimeCalculator] Time offset set to: ${this._config.timeOffset}`)}getTimeOffset(){return this._config.timeOffset}setTimeUpdateMode(e){this._config.timeUpdateMode=e,e==="variable_delta"&&(this._lastUpdateTime=0),console.log(`[TimeCalculator] Time update mode set to: ${e}`)}getTimeUpdateMode(){return this._config.timeUpdateMode}setAnimationSpeed(e){this._config.animationSpeed=Math.max(.1,e),console.log(`[TimeCalculator] Animation speed set to: ${this._config.animationSpeed}`)}getAnimationSpeed(){return this._config.animationSpeed}calculateTime(e=performance.now(),t=!0,r=!1){let s=0,i=!1;t&&!r?(this._lastUpdateTime,this._config.timeScale,this._config.animationSpeed,this._config.timeUpdateMode,this._config.fixedDeltaTime,this._config.maxDeltaTime,s=jt.calculateDeltaTime({mode:this._config.timeUpdateMode,currentTime:e,lastUpdateTime:this._lastUpdateTime,fixedDeltaTime:this._config.fixedDeltaTime,maxDeltaTime:this._config.maxDeltaTime}),s*=this._config.timeScale*this._config.animationSpeed,this._frameTime+=s,i=!0):r&&this._config.timeUpdateMode==="variable_delta"&&(this._lastUpdateTime=e),this._lastUpdateTime=e;const a=this.getAdjustedTime();return{deltaTime:s,frameTime:this._frameTime,adjustedTime:a,shouldUpdate:i}}getAdjustedTime(){return(this._frameTime-this._config.timeOffset)*this._config.timeScale}setTime(e){this._frameTime=e,this._lastUpdateTime=0,console.log(`[TimeCalculator] Time set to: ${e.toFixed(3)}s`)}resetTime(){this._frameTime=0,this._lastUpdateTime=0,console.log("[TimeCalculator] Time reset to 0")}getStats(){return{frameTime:this._frameTime,adjustedTime:this.getAdjustedTime(),timeScale:this._config.timeScale,timeOffset:this._config.timeOffset,timeUpdateMode:this._config.timeUpdateMode,animationSpeed:this._config.animationSpeed,lastUpdateTime:this._lastUpdateTime}}clone(){const e=new dr(this._config);return e._frameTime=this._frameTime,e._lastUpdateTime=this._lastUpdateTime,e}}const Gr=-.5;let ca=class{animationState;timeCalculator;config;frameCount=0;eventListeners=[];constructor(e={}){this.config={timeScale:1,timeOffset:0,timeUpdateMode:"fixed_delta",animationSpeed:1,fixedDeltaTime:.016*1.1,maxDeltaTime:.05,...e},this.animationState=new la,this.timeCalculator=new dr(this.config),this.animationState.addEventListener(t=>{this._emitEvent(t)})}start(e){this.animationState.play(e)}pause(){this.animationState.pause()}resume(){this.animationState.resume()}stop(){this.animationState.stop(),this.frameCount=0}setTime(e){this.timeCalculator.setTime(e),this._emitEvent({type:"timeChange",timestamp:performance.now(),data:{time:e}})}setSpeed(e){this.animationState.setSpeed(e),this.timeCalculator.setAnimationSpeed(e)}setTimeScale(e){this.timeCalculator.setTimeScale(e),this.config.timeScale=e}setTimeOffset(e){this.timeCalculator.setTimeOffset(e),this.config.timeOffset=e}setTimeUpdateMode(e){this.timeCalculator.setTimeUpdateMode(e),this.config.timeUpdateMode=e}startAnimation(e=1){this.start(e)}pauseAnimation(){this.pause()}resumeAnimation(){this.resume()}stopAnimation(){this.stop()}setAnimationTime(e){this.setTime(e)}setAnimationSpeed(e){this.setSpeed(e)}getAnimationSpeed(){return this.animationState.getSpeed()}getTimeScale(){return this.timeCalculator.getTimeScale()}getTimeOffset(){return this.timeCalculator.getTimeOffset()}getTimeUpdateMode(){return this.timeCalculator.getTimeUpdateMode()}update(e){const t=this.timeCalculator.calculateTime(e,this.animationState.isPlaying,this.animationState.isPaused);return t.shouldUpdate&&this.frameCount++,t.adjustedTime}getCurrentTime(){return this.timeCalculator.getAdjustedTime()}getFrameTime(){return this.timeCalculator.frameTime}isFallbackPreviewMode(){return this.timeCalculator.frameTime<Gr}isPlaying(){return this.animationState.isPlaying}isPaused(){return this.animationState.isPaused}isStopped(){return this.animationState.isStopped}supportsAnimation(){return!0}getStats(){const e=this.timeCalculator.getStats(),t=this.animationState.getStateInfo();return{currentTime:e.frameTime,adjustedTime:e.adjustedTime,timeScale:e.timeScale,timeOffset:e.timeOffset,timeUpdateMode:e.timeUpdateMode,animationSpeed:e.animationSpeed,playbackState:t.playbackState,isPlaying:t.isPlaying,isPaused:t.isPaused,isStopped:t.isStopped,lastUpdateTime:e.lastUpdateTime,frameCount:this.frameCount}}clearEventListeners(){this.eventListeners=[],this.animationState.clearEventListeners()}_emitEvent(e){this.eventListeners.forEach(t=>{try{t(e)}catch(r){console.error("Error in timeline event listener:",r)}})}static FALLBACK_PREVIEW_THRESHOLD=Gr};const Er=new WeakMap,Rr=new WeakMap;function Mt(l){const e=Er.get(l);if(e)return e;const t=l.createBindGroupLayout({label:"point cloud bind group layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});return Er.set(l,t),t}function rr(l){const e=Rr.get(l);if(e)return e;const t=l.createBindGroupLayout({label:"Point Cloud Render Bind Group Layout",entries:[{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});return Rr.set(l,t),t}const hr={SPLAT_STRIDE:32};function ua(l){const e=new ArrayBuffer(l.byteLength);return new Uint8Array(e).set(new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),e}class $e{splat2DBuffer;gaussianBufferGPU;shBufferGPU;extraPcaBufferGPU;weightBufferGPU=null;weightChannels=64;_bindGroup;_renderBindGroup;numPoints;shDeg;bbox;compressed;colorMode="sh";center;up;transform=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);mipSplatting;kernelSize;backgroundColor;_gaussianScaling=1;_maxShDeg=3;_kernelSize=.1;_opacityScale=1;_cutoffScale=1;_rendermode=0;uniforms;modelParamsUniforms;static bindGroupLayout(e){return Mt(e)}static renderBindGroupLayout(e){return rr(e)}constructor(e,t,r){if(this.numPoints=t.numPoints(),this.shDeg=t.shDegree(),this._maxShDeg=this.shDeg,this.bbox=new at(t.bbox().min,t.bbox().max),this.center=t.center?xe(t.center[0],t.center[1],t.center[2]):xe(0,0,0),this.up=t.up?xe(t.up[0],t.up[1],t.up[2]):null,this.compressed=!1,r?(this.gaussianBufferGPU=r.gaussianBuffer,this.shBufferGPU=r.shBuffer,console.log("🌟 PointCloud created with external GPU buffers (no CPU upload)")):(this.gaussianBufferGPU=e.createBuffer({label:"gaussians/storage",size:t.gaussianBuffer().byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.gaussianBufferGPU,0,t.gaussianBuffer()),this.shBufferGPU=e.createBuffer({label:"sh/storage",size:t.shCoefsBuffer().byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.shBufferGPU,0,t.shCoefsBuffer())),r?.extraPcaBuffer)this.extraPcaBufferGPU=r.extraPcaBuffer;else{const h=Math.max(1,this.numPoints)*16;let u=null;try{if(typeof t.extraPcaBuffer=="function"){const d=t.extraPcaBuffer();d&&d.byteLength>=h&&(u=d)}}catch{}this.extraPcaBufferGPU=e.createBuffer({label:"extra_pca/storage",size:h,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),u?e.queue.writeBuffer(this.extraPcaBufferGPU,0,u):e.queue.writeBuffer(this.extraPcaBufferGPU,0,new Uint8Array(h))}r?.weightBuffer&&(this.weightBufferGPU=r.weightBuffer,this.weightChannels=64),this.splat2DBuffer=e.createBuffer({label:"splat2d/storage",size:Math.max(1,this.numPoints)*hr.SPLAT_STRIDE,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.INDIRECT});const s=new Uint32Array([this.numPoints,this.shDeg,0,0]);this.uniforms=new ct(e,s,"pointcloud uniforms");const i=new ArrayBuffer(128),a=new Float32Array(i),o=new Uint32Array(i);for(let h=0;h<16;h++)a[h]=h%5===0?1:0;o[16]=0,o[17]=this.numPoints,a[18]=this._gaussianScaling,o[19]=this._maxShDeg,a[20]=this._kernelSize,a[21]=this._opacityScale,a[22]=this._cutoffScale,o[23]=this._rendermode,o[24]=1,o[25]=1,a[26]=1,a[27]=0,a[28]=1,a[29]=0,this.modelParamsUniforms=new ct(e,i,"model params");const n=Mt(e);this._bindGroup=e.createBindGroup({label:"pointcloud/bg",layout:n,entries:[{binding:0,resource:{buffer:this.gaussianBufferGPU}},{binding:1,resource:{buffer:this.shBufferGPU}},{binding:2,resource:{buffer:this.splat2DBuffer}},{binding:3,resource:{buffer:this.uniforms.buffer}},{binding:4,resource:{buffer:this.extraPcaBufferGPU}}]});const c=rr(e);this._renderBindGroup=e.createBindGroup({label:"pointcloud/render/bg",layout:c,entries:[{binding:2,resource:{buffer:this.splat2DBuffer}}]})}bindGroup(){return this._bindGroup}renderBindGroup(){return this._renderBindGroup}replaceStorageBuffers(e,t){this.gaussianBufferGPU=t.gaussianBuffer,this.shBufferGPU=t.shBuffer;const r=Mt(e);this._bindGroup=e.createBindGroup({label:"pointcloud/bg",layout:r,entries:[{binding:0,resource:{buffer:this.gaussianBufferGPU}},{binding:1,resource:{buffer:this.shBufferGPU}},{binding:2,resource:{buffer:this.splat2DBuffer}},{binding:3,resource:{buffer:this.uniforms.buffer}},{binding:4,resource:{buffer:this.extraPcaBufferGPU}}]})}getExtraPcaBuffer(){return this.extraPcaBufferGPU}setWeightBufferGPU(e,t=64){this.weightBufferGPU=e,this.weightChannels=t}setWeightBufferFromArray(e,t,r=64){this.weightChannels=r,this.weightBufferGPU=e.createBuffer({label:"weights/storage",size:t.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.weightBufferGPU,0,ua(t))}hasWeightBuffer(){return!!this.weightBufferGPU}getWeightBuffer(){return this.weightBufferGPU}getWeightChannels(){return this.weightChannels}getSplatBuffer(){return{gaussianBuffer:this.gaussianBufferGPU,shBuffer:this.shBufferGPU,numPoints:this.numPoints,shDegree:this.shDeg,bbox:this.bbox}}updateModelParamsBuffer(e,t=0){const r=new ArrayBuffer(128),s=new Float32Array(r),i=new Uint32Array(r);for(let a=0;a<16;a++)s[a]=e[a];i[16]=t,i[17]=this.numPoints,s[18]=this._gaussianScaling,i[19]=this._maxShDeg,s[20]=this._kernelSize,s[21]=this._opacityScale,s[22]=this._cutoffScale,i[23]=this._rendermode,i[24]=1,i[25]=1,s[26]=1,s[27]=0,s[28]=1,s[29]=0,this.modelParamsUniforms.setData(new DataView(r))}setTransform(e){const t=e instanceof Float32Array?e:new Float32Array(e);this.transform.set(t),this.updateModelParamsBuffer(this.transform,0)}updateModelParamsWithOffset(e,t){this.updateModelParamsBuffer(e,t)}setGaussianScaling(e){this._gaussianScaling=e,console.log(`[PointCloud] Gaussian scaling set to: ${e}`)}getGaussianScaling(){return this._gaussianScaling}setMaxShDeg(e){this._maxShDeg=Math.max(0,Math.min(3,e)),console.log(`[PointCloud] Max SH degree set to: ${this._maxShDeg}`)}getMaxShDeg(){return this._maxShDeg}setKernelSize(e){this._kernelSize=Math.max(0,e),console.log(`[PointCloud] Kernel size set to: ${this._kernelSize}`)}getKernelSize(){return this._kernelSize}setOpacityScale(e){this._opacityScale=Math.max(0,e),console.log(`[PointCloud] Opacity scale set to: ${this._opacityScale}`)}getOpacityScale(){return this._opacityScale}setCutoffScale(e){this._cutoffScale=Math.max(.1,e),console.log(`[PointCloud] Cutoff scale set to: ${this._cutoffScale}`)}getCutoffScale(){return this._cutoffScale}setRenderMode(e){this._rendermode=Math.max(0,Math.min(3,e)),console.log(`[PointCloud] Render mode set to: ${this._rendermode}`)}getRenderMode(){return this._rendermode}}class ut extends $e{_countBuf;onnxGenerator;timeline;gaussianPrecision;colorPrecision;is_loop=!0;colorMode;colorChannels;constructor(e,t,r,s,i,a=48,o){let n;switch(a){case 3:n=0;break;case 12:n=1;break;case 27:n=2;break;case 48:n=3;break;default:console.warn(`⚠️ Unexpected color channels: ${a}, Maybe rgb channels`),n=3}console.log(`🎨 DynamicPointCloud: ${a} channels → SH degree ${n}`);const c={numPoints:()=>s,shDegree:()=>n,bbox:()=>({min:[-1,-1,-1],max:[1,1,1]}),center:[0,0,0],up:null,gaussianBuffer:()=>new ArrayBuffer(0),shCoefsBuffer:()=>new ArrayBuffer(0)};super(e,c,{gaussianBuffer:t,shBuffer:r}),this.colorChannels=a,this.colorMode=a===4?"rgb":"sh",console.log(`🎨 Color mode set: ${this.colorMode} (${this.colorChannels} channels)`),this._countBuf=i,this.gaussianPrecision=o?.gaussian,this.colorPrecision=o?.color,this.timeline=new ca({timeScale:1,timeOffset:0,timeUpdateMode:"fixed_delta",animationSpeed:1}),console.log("🌟 DynamicPointCloud created with direct GPU buffers (no CPU upload)")}countBuffer(){return this._countBuf}setOnnxGenerator(e){this.onnxGenerator=e,console.log("🔗 ONNX generator linked for dynamic updates")}getGaussianPrecision(){return this.gaussianPrecision}getColorPrecision(){return this.colorPrecision}setPrecisionForShader(){const e=this.modelParamsUniforms.data,t=new DataView(e),r=s=>{switch(s){case"float32":return 0;case"float16":return 1;case"int8":return 2;case"uint8":return 3;default:return 1}};this.gaussianPrecision&&(t.setUint32(96,r(this.gaussianPrecision.dataType),!0),typeof this.gaussianPrecision.scale=="number"&&t.setFloat32(104,this.gaussianPrecision.scale,!0),typeof this.gaussianPrecision.zeroPoint=="number"&&t.setFloat32(108,this.gaussianPrecision.zeroPoint,!0)),this.colorPrecision&&(t.setUint32(100,r(this.colorPrecision.dataType),!0),typeof this.colorPrecision.scale=="number"&&t.setFloat32(112,this.colorPrecision.scale,!0),typeof this.colorPrecision.zeroPoint=="number"&&t.setFloat32(116,this.colorPrecision.zeroPoint,!0)),this.modelParamsUniforms.dataBytes=e}applyFP16(e,t,r){this.replaceStorageBuffers(e,{gaussianBuffer:t,shBuffer:r}),this.gaussianPrecision={dataType:"float16",bytesPerElement:2},this.colorPrecision={dataType:"float16",bytesPerElement:2},this.setPrecisionForShader()}async update(e,t,r,s,i){if(!this.onnxGenerator){console.warn("⚠️ No ONNX generator available for dynamic update");return}var a=0;a=this.timeline.getCurrentTime(),a=a*.4%1,this.timeline.isFallbackPreviewMode()&&(a=r??0,a=a*.4,a=a%1);try{const o=this.onnxGenerator.getInputNames(),n=Bt();li(n,e,t),this.is_loop?a=a%1:a=Math.max(0,Math.min(a,1));const c={cameraMatrix:new Float32Array(n),projectionMatrix:s?new Float32Array(s):void 0,time:a};await this.onnxGenerator.generate(c)}catch(o){console.error("❌ Dynamic update failed:",o)}}startAnimation(e=1){this.timeline.startAnimation(e)}pauseAnimation(){this.timeline.pauseAnimation()}resumeAnimation(){this.timeline.resumeAnimation()}stopAnimation(){this.timeline.stopAnimation()}setAnimationTime(e){this.timeline.setAnimationTime(e)}setAnimationSpeed(e){this.timeline.setAnimationSpeed(e)}getAnimationSpeed(){return this.timeline.getAnimationSpeed()}get isAnimationRunning(){return this.timeline.isPlaying()}get isAnimationPaused(){return this.timeline.isPaused()}get isAnimationStopped(){return this.timeline.isStopped()}setTimeScale(e){this.timeline.setTimeScale(e)}getTimeScale(){return this.timeline.getTimeScale()}setTimeOffset(e){this.timeline.setTimeOffset(e)}setAnimationIsLoop(e){this.is_loop=e}getTimeOffset(){return this.timeline.getTimeOffset()}getFrameTime(){return this.timeline.getCurrentTime()}resetFrameTime(){this.timeline.setTime(0)}setTimeUpdateMode(e){this.timeline.setTimeUpdateMode(e)}getTimeUpdateMode(){return this.timeline.getTimeUpdateMode()==="fixed_delta"?Gt.FIXED_DELTA:Gt.VARIABLE_DELTA}getPerformanceStats(){return{...this.timeline.getStats(),hasOnnxGenerator:!!this.onnxGenerator,colorMode:this.colorMode,colorChannels:this.colorChannels,numPoints:this.numPoints}}dispose(){this.timeline.clearEventListeners(),console.log("🧹 DynamicPointCloud disposed")}}const Fr=Object.freeze(Object.defineProperty({__proto__:null,BUFFER_CONFIG:hr,DynamicPointCloud:ut,PointCloud:$e,getBindGroupLayout:Mt,getRenderBindGroupLayout:rr},Symbol.toStringTag,{value:"Module"})),da=`// enable f16;
const KERNEL_SIZE:f32 = 0.3;
//const MAX_SH_DEG:u32 = <injected>u;


override SH_LAYOUT_CHANNEL_MAJOR : bool = false;
override USE_RAW_COLOR : bool = false;

const SH_C0:f32 = 0.28209479177387814;

const SH_C1 = 0.4886025119029199;
const SH_C2 = array<f32,5>(
    1.0925484305920792,
    -1.0925484305920792,
    0.31539156525252005,
    -1.0925484305920792,
    0.5462742152960396
);

const SH_C3 = array<f32,7>(
    -0.5900435899266435,
    2.890611442640554,
    -0.4570457994644658,
    0.3731763325901154,
    -0.4570457994644658,
    1.445305721320277,
    -0.5900435899266435
);


struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    
    viewport: vec2<f32>,
    focal: vec2<f32>
};

struct Gaussian {
    pos_opacity: array<u32,2>,
    cov: array<u32,3>
}

struct Splat {
     // 4x f16 packed as u32
    v_0: u32, v_1: u32,
    // 2x f16 packed as u32 (NDC x,y)
    pos: u32,
    // NDC z (high precision)
    posz: f32,
    // rgba packed as f16
    color_0: u32,color_1: u32
};

struct DrawIndirect {
    /// The number of gaussians to draw.
    vertex_count: u32,
    /// The number of instances to draw.
    instance_count: atomic<u32>,
    /// The Index of the first vertex to draw.
    base_vertex: u32,
    /// The instance ID of the first instance to draw.
    /// Has to be 0, unless [\`Features::INDIRECT_FIRST_INSTANCE\`](crate::Features::INDIRECT_FIRST_INSTANCE) is enabled.
    base_instance: u32,
}

struct DispatchIndirect {
    dispatch_x: atomic<u32>,
    dispatch_y: u32,
    dispatch_z: u32,
}

struct SortInfos {
    keys_size: atomic<u32>,     // essentially contains the same info as instance_count in DrawIndirect
    padded_size: u32,
    passes: u32,
    even_pass: u32,
    odd_pass: u32,
}

@group(2) @binding(4)
var<storage, read_write> sort_source_indices : array<u32>;

struct RenderSettings {
    clipping_box_min: vec4<f32>,
    clipping_box_max: vec4<f32>,
    max_sh_deg: u32,
    show_env_map: u32,
    mip_spatting: u32,
    kernel_size: f32,
    walltime: f32,
    scene_extend: f32,
    center: vec3<f32>,
}

override DISCARD_BY_WORLD_TRACE   : bool = false;  // 可选：world-space 近似阈值
override MAX_WORLD_TRACE          : f32  = 0.25;   // 协方差迹上限（单位≈米^2，按你的尺度调）

@group(0) @binding(0)
var<uniform> camera: CameraUniforms;

// Shared buffer - read as different types based on gaussDataType
@group(1) @binding(0) 
var<storage,read> gaussians_packed : array<u32>; // Uint32Array backing

@group(1) @binding(1)
var<storage, read> color_buffer : array<u32>; // Uint32Array backing

@group(1) @binding(2) 
var<storage,read_write> points_2d : array<Splat>;

@group(1) @binding(4)
var<storage, read> extra_pca : array<vec4<f32>>;



@group(2) @binding(0)
var<storage, read_write> sort_infos: SortInfos;
@group(2) @binding(1)
var<storage, read_write> sort_depths : array<u32>;
@group(2) @binding(2)
var<storage, read_write> sort_indices : array<u32>;
@group(2) @binding(3)
var<storage, read_write> sort_dispatch: DispatchIndirect;

@group(3) @binding(0)
var<uniform> render_settings: RenderSettings;

// Phase B M1: per-model params
struct ModelParams {
    model: mat4x4<f32>,
    baseOffset: u32,
    num_points: u32,  // Dynamic point count from ONNX (was _pad0)
    gaussianScaling: f32,  // 每个模型的独立高斯缩放参数
    maxShDeg: u32,        // 球谐等级
    kernelSize: f32,      // 二维核大小
    opacityScale: f32,    // 透明度倍数
    cutoffScale: f32,     // 最大像素比例倍数
    rendermode: u32,      // 渲染模式: 0=颜色, 1=法线, 2=深度, 3=PCA
    // 多精度支持
    gaussDataType: u32,   // 0=f32, 1=f16, 2=i8, 3=u8
    colorDataType: u32,
    gaussScale: f32,
    gaussZeroPoint: f32,
    colorScale: f32,
    colorZeroPoint: f32,
}

@group(3) @binding(1)
var<uniform> uModel: ModelParams;






// Helper: read gaussian pos+opacity based on precision
fn read_gaussian_pos_opacity(idx: u32) -> vec4<f32> {
  if (uModel.gaussDataType == 0u) {
    // FP32: 4 consecutive f32s
    let base = idx * 10u;
    return vec4<f32>(
      bitcast<f32>(gaussians_packed[base + 0u]),
      bitcast<f32>(gaussians_packed[base + 1u]),
      bitcast<f32>(gaussians_packed[base + 2u]),
      bitcast<f32>(gaussians_packed[base + 3u])
    );
  } else {
    // FP16: packed as 2 u32s (pos_xy + pos_z_opacity)
    let w0 = gaussians_packed[idx * 5u + 0u];
    let w1 = gaussians_packed[idx * 5u + 1u];
    let a = unpack2x16float(w0);
    let b = unpack2x16float(w1);
    return vec4<f32>(a.x, a.y, b.x, b.y);
  }
}

// Helper: read gaussian covariance (6 floats) based on precision
fn read_gaussian_cov(idx: u32) -> array<f32,6> {
  if (uModel.gaussDataType == 0u) {
    // FP32: 6 consecutive f32s starting at idx*10+4
    let base = idx * 10u + 4u;
    return array<f32,6>(
      bitcast<f32>(gaussians_packed[base + 0u]),
      bitcast<f32>(gaussians_packed[base + 1u]),
      bitcast<f32>(gaussians_packed[base + 2u]),
      bitcast<f32>(gaussians_packed[base + 3u]),
      bitcast<f32>(gaussians_packed[base + 4u]),
      bitcast<f32>(gaussians_packed[base + 5u])
    );
  } else {
    // FP16: packed as 3 u32s
    let a = unpack2x16float(gaussians_packed[idx * 5u + 2u]);
    let b = unpack2x16float(gaussians_packed[idx * 5u + 3u]);
    let c = unpack2x16float(gaussians_packed[idx * 5u + 4u]);
    return array<f32,6>(a.x, a.y, b.x, b.y, c.x, c.y);
  }
}

// ---- 小工具：计算该点的起始 word 下标 ----
fn base_word_of(splat_idx: u32) -> u32 {
    if (USE_RAW_COLOR) {
        // RGB 直接颜色：每点的存储字数取决于颜色精度
        if (uModel.colorDataType == 0u) { // fp32: 3 words
            return splat_idx * 3u;
        } else if (uModel.colorDataType == 1u) { // fp16: 2 words (4 halfs)
            return splat_idx * 2u;
        } else { // int8/uint8: 1 word (4 bytes)
            return splat_idx * 1u;
        }
    }
    // SH：按精度和通道数计算
    if (uModel.colorDataType == 0u) {
      // FP32: 48 channels (degree 3) = 48 words
      return splat_idx * 48u;
    } else {
      // FP16: 48 channels = 48 halfs = 24 words
      return splat_idx * 24u;
    }
}

// 读第 word_idx 个 u32
fn read_word(splat_idx: u32, word_idx: u32) -> u32 {
  return color_buffer[base_word_of(splat_idx) + word_idx];
}

// ===== 读半精“标量”：线性 half 下标（0,1,2,3, ...）=====
fn read_half_at(splat_idx: u32, half_idx: u32) -> f32 {
  let w = read_word(splat_idx, half_idx >> 1u);
  let p = unpack2x16float(w);                 // vec2<f32>，低/高 half
  // 如果 half_idx 是奇数取高位，否则取低位
  return select(p.x, p.y, (half_idx & 1u) == 1u);
}

// ===== 连续颜色：直接读取前三个 half 作为最终 RGB =====
// 读取颜色分量（依据数据类型）
fn read_color_channel(splat_idx: u32, channel_idx: u32) -> f32 {
  if (uModel.colorDataType == 0u) {
    // fp32：每通道 1 word
    let w = read_word(splat_idx, channel_idx);
    return bitcast<f32>(w);
  } else if (uModel.colorDataType == 1u) {
    // fp16：按 half 读取
    return read_half_at(splat_idx, channel_idx);
  } else {
    // int8/uint8：从 word 中提取 8-bit，然后反量化
    let packed = read_word(splat_idx, channel_idx >> 2u);
    let byte_off = (channel_idx & 3u) * 8u;
    let q = extractBits(i32(packed), byte_off, 8u);
    return f32(q) * uModel.colorScale + uModel.colorZeroPoint;
  }
}

fn fetch_rgb_no_sh(splat_idx: u32) -> vec3<f32> {
  return vec3<f32>(
    read_color_channel(splat_idx, 0u),
    read_color_channel(splat_idx, 1u),
    read_color_channel(splat_idx, 2u)
  );
}

fn sh_coef_interleaved(splat_idx: u32, c_idx: u32) -> vec3<f32> {
  // c_idx ∈ [0 .. (deg+1)^2-1]，每个系数 3 个 half 连着
  let h0 = c_idx * 3u;
  return vec3<f32>(
    read_color_channel(splat_idx, h0 + 0u),
    read_color_channel(splat_idx, h0 + 1u),
    read_color_channel(splat_idx, h0 + 2u)
  );
}

// 新的：channel-major（[Rdc,Gdc,Bdc, R1..Rm, G1..Gm, B1..Bm]）
fn sh_coef_channel_major(splat_idx: u32, c_idx: u32) -> vec3<f32> {
  if (c_idx == 0u) {
    // DC
    return vec3<f32>(
      read_color_channel(splat_idx, 0u),
      read_color_channel(splat_idx, 1u),
      read_color_channel(splat_idx, 2u)
    );
  }
  // AC
  let m  = (uModel.maxShDeg + 1u) * (uModel.maxShDeg + 1u) - 1u; // 每通道 AC 数
  let k  = c_idx - 1u;                   // 第 k 个 AC，k ∈ [0..m-1]
  let r  = read_color_channel(splat_idx, 3u + k);
  let g  = read_color_channel(splat_idx, 3u + m + k);
  let b  = read_color_channel(splat_idx, 3u + 2u*m + k);
  return vec3<f32>(r, g, b);
}

// 统一入口：根据布局选择
fn sh_coef(splat_idx: u32, c_idx: u32) -> vec3<f32> {
  return select(
    sh_coef_interleaved(splat_idx, c_idx),
    sh_coef_channel_major(splat_idx, c_idx),
    SH_LAYOUT_CHANNEL_MAJOR
  );
}




fn evaluate_sh(dir: vec3<f32>, v_idx: u32, sh_deg: u32) -> vec3<f32> {
    var result = SH_C0 * sh_coef(v_idx, 0u) ;
    // sh_deg = 0;
    if sh_deg > 0u {

        let x = dir.x;
        let y = dir.y;
        let z = dir.z;

        result += - SH_C1 * y * sh_coef(v_idx, 1u) + SH_C1 * z * sh_coef(v_idx, 2u) - SH_C1 * x * sh_coef(v_idx, 3u);

        if sh_deg > 1u {

            let xx = dir.x * dir.x;
            let yy = dir.y * dir.y;
            let zz = dir.z * dir.z;
            let xy = dir.x * dir.y;
            let yz = dir.y * dir.z;
            let xz = dir.x * dir.z;

            result += SH_C2[0] * xy * sh_coef(v_idx, 4u) + SH_C2[1] * yz * sh_coef(v_idx, 5u) + SH_C2[2] * (2.0 * zz - xx - yy) * sh_coef(v_idx, 6u) + SH_C2[3] * xz * sh_coef(v_idx, 7u) + SH_C2[4] * (xx - yy) * sh_coef(v_idx, 8u);

            if sh_deg > 2u {
                result += SH_C3[0] * y * (3.0 * xx - yy) * sh_coef(v_idx, 9u) + SH_C3[1] * xy * z * sh_coef(v_idx, 10u) + SH_C3[2] * y * (4.0 * zz - xx - yy) * sh_coef(v_idx, 11u) + SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy) * sh_coef(v_idx, 12u) + SH_C3[4] * x * (4.0 * zz - xx - yy) * sh_coef(v_idx, 13u) + SH_C3[5] * z * (xx - yy) * sh_coef(v_idx, 14u) + SH_C3[6] * x * (xx - 3.0 * yy) * sh_coef(v_idx, 15u);
            }
        }
    }
    result += 0.5;

    return result;
}


fn evaluate_color(dir: vec3<f32>, v_idx: u32, sh_deg: u32) -> vec3<f32> {
    if (USE_RAW_COLOR) {
        // 直接颜色（0..1），不做 +0.5
        return fetch_rgb_no_sh(v_idx);
    } else {
        // 球谐路径：evaluate_sh already adds 0.5 at the end
        return evaluate_sh(dir, v_idx, sh_deg);
    }
}


fn cov_coefs(v_idx: u32) -> array<f32,6> {
    return read_gaussian_cov(v_idx);
}


// normal calculation
fn inverse_sym3(m: mat3x3<f32>) -> mat3x3<f32> {
    // m = [[a,b,c],[b,d,e],[c,e,f]]
    let a = m[0][0]; let b = m[0][1]; let c = m[0][2];
    let d = m[1][1]; let e = m[1][2];
    let f = m[2][2];

    let co00 = d*f - e*e;
    let co01 = c*e - b*f;
    let co02 = b*e - c*d;
    let co11 = a*f - c*c;
    let co12 = c*b - a*e;
    let co22 = a*d - b*b;

    let det = a*co00 + b*co01 + c*co02;
    let eps = 1e-12;
    let inv_det = select(1.0/det, 1.0/eps, abs(det) < eps);

    // 对称：只需填上三角
    var inv = mat3x3<f32>(
        vec3<f32>(co00, co01, co02),
        vec3<f32>(co01, co11, co12),
        vec3<f32>(co02, co12, co22)
    );
    return inv * inv_det;
}

fn smallest_evec_via_power(Sigma_world: mat3x3<f32>) -> vec3<f32> {
    let invS = inverse_sym3(Sigma_world);
    // 选个稳定的初始向量（取列和可以避免退化）
    var v = normalize(invS[0] + invS[1] + invS[2]);
    // 少量迭代即可（3~5 次）
    v = normalize(invS * v);
    v = normalize(invS * v);
    v = normalize(invS * v);
    return v; // 未定向，之后可按相机翻转
}

fn normal_view_dependent(Sigma_world: mat3x3<f32>, cam_world: vec3<f32>, x_world: vec3<f32>) -> vec3<f32> {
    let v = normalize(cam_world - x_world);                // 从点指向相机
    let invS = inverse_sym3(Sigma_world);
    var n = normalize(invS * v);                           // ∝ Σ^{-1} v
    // 使法线朝向相机（可选）
    if (dot(n, v) < 0.0) { n = -n; }
    return n;
}


@compute @workgroup_size(256,1,1)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>, @builtin(num_workgroups) wgs: vec3<u32>) {
    let idx = gid.x;
    // Use dynamic point count from ONNX instead of full gaussian array length
    if idx >= uModel.num_points  {
   //     return;
    }
    if idx > 500000  {
       // return;
    }
    let focal = camera.focal;
    let viewport = camera.viewport;
    let pos_op = read_gaussian_pos_opacity(idx);
    let xyz_local = pos_op.xyz;
    let xyz = (uModel.model * vec4<f32>(xyz_local, 1.)).xyz;
    var opacity = pos_op.w * uModel.opacityScale;

    
    // uModel.maxShDeg = 0;

    var camspace = camera.view * vec4<f32>(xyz, 1.);
    let pos2d = camera.proj * camspace;
    let bounds = 1.2 * pos2d.w;
    let z = pos2d.z / pos2d.w;

    if uModel.baseOffset == 0u && idx == 0u {
        atomicAdd(&sort_dispatch.dispatch_x, 1u);   // safety addition to always have an unfull block at the end of the buffer
    }

    // TODO bring back frustrum culling
    // M1: no world-space clipping here to avoid sparse writes
    // if any(xyz < render_settings.clipping_box_min.xyz) || any(xyz > render_settings.clipping_box_max.xyz) { return; }


    // M1: disable frustum culling to keep dense writes
    if z <= 0. || z >= 1. || pos2d.x < -bounds || pos2d.x > bounds || pos2d.y < -bounds || pos2d.y > bounds { return; }

    if (opacity <0.02)
    {
        return;
    }


    if (opacity > 0.98)
    {
      //  return;
    }

    let cov_sparse = cov_coefs(idx);

    
    var scale_mod = 0.;

    scale_mod = 1.0;
    let scaling = uModel.gaussianScaling * scale_mod * 1.0f;

    // --- 1) 局部协方差（保持不变）
    let Sigma_local = mat3x3<f32>(
        cov_sparse[0], cov_sparse[1], cov_sparse[2],
        cov_sparse[1], cov_sparse[3], cov_sparse[4],
        cov_sparse[2], cov_sparse[4], cov_sparse[5]
    ) * scaling * scaling;

    // --- 2) 用模型矩阵的线性部分把协方差从 local 变到 world
    // 注意：WGSL 按列存储，这里取 model 的前三列作为 3x3 线性部分
    let A = mat3x3<f32>(
        uModel.model[0].xyz,  // 第0列
        uModel.model[1].xyz,  // 第1列
        uModel.model[2].xyz   // 第2列
    );
    let Sigma_world = A * Sigma_local * transpose(A);

    // --- 3 你的 J（cam → NDC）的写法可以沿用
    let J = mat3x3<f32>(
        focal.x / camspace.z,  0.0,                         -(focal.x * camspace.x) / (camspace.z * camspace.z),
        0.0,                  -focal.y / camspace.z,        (focal.y * camspace.y) / (camspace.z * camspace.z),
        0.0,                   0.0,                          0.0
    );

    // --- 4) 取 view 的 3x3 线性部分（world → camera）
    let W = transpose(mat3x3<f32>(
        camera.view[0].xyz,
        camera.view[1].xyz,
        camera.view[2].xyz
    ));

    // --- 5) 正确的组合：T = J * V，然后 Σ_ndc = T Σ_world T^T
    let T   = W * J;
    let cov = transpose(T) * Sigma_world * T;



    if (true) {
        let world_trace = Sigma_local[0][0] + Sigma_local[1][1] + Sigma_local[2][2];
        if (world_trace > 1000.0000002) {
            //return;
        }
    }


    let kernel_size = uModel.kernelSize;
    if bool(render_settings.mip_spatting) {
        // according to Mip-Splatting by Yu et al. 2023
        let det_0 = max(1e-6, cov[0][0] * cov[1][1] - cov[0][1] * cov[0][1]);
        let det_1 = max(1e-6, (cov[0][0] + kernel_size) * (cov[1][1] + kernel_size) - cov[0][1] * cov[0][1]);
        var coef = sqrt(det_0 / (det_1 + 1e-6) + 1e-6);

        if det_0 <= 1e-6 || det_1 <= 1e-6 {
            coef = 0.0;
        }
        opacity *= coef;
    }

    //opacity = 0.1;

    let diagonal1 = cov[0][0] + kernel_size;
    let offDiagonal = cov[0][1];
    let diagonal2 = cov[1][1] + kernel_size;

    let mid = 0.5 * (diagonal1 + diagonal2);
    let radius = length(vec2<f32>((diagonal1 - diagonal2) / 2.0, offDiagonal));
    // eigenvalues of the 2D screen space splat
    let lambda1 = mid + radius;
    let lambda2 = max(mid - radius, 0.1);

    let diagonalVector = normalize(vec2<f32>(offDiagonal, lambda1 - diagonal1));
    // scaled eigenvectors in screen space 
    let v1 = sqrt(2.0 * lambda1) * diagonalVector * uModel.cutoffScale;
    let v2 = sqrt(2.0 * lambda2) * vec2<f32>(diagonalVector.y, -diagonalVector.x) * uModel.cutoffScale;

    let v_center = pos2d.xyzw / pos2d.w;

    let camera_pos = camera.view_inv[3].xyz;
    // let dir = normalize(xyz - camera_pos);
    // DEBUG: prepare color var (assigned after store_idx is known)



    let t = uModel.model[3].xyz;

    // --- 世界相机位置
    let cam_world = camera.view_inv[3].xyz;

    // --- 计算 s^2 （等比缩放下三列长度平方相等，取均值更稳）
    let s2 = max(
        1e-12,
        (dot(A[0], A[0]) + dot(A[1], A[1]) + dot(A[2], A[2])) / 3.0
    );

    // --- cam_local = A^{-1} * (cam_world - t) = (A^T / s^2) * (cam_world - t)
    let cam_local = (transpose(A) * (cam_world - t)) / s2;

    // --- 用局部方向评估 SH
    let dir_local = normalize(xyz_local - cam_local);



    var color: vec4<f32>;
    
    
    // color = vec4<f32>(sh_coef(0, 1u),opacity);

    // M1 (revised): use global contiguous index to avoid per-dispatch uniform dependency
    let store_idx = atomicAdd(&sort_infos.keys_size, 1u);
    let global_index = store_idx;
    // 根据渲染模式选择不同的颜色
    if (uModel.rendermode == 0u) {
        // 模式0: 正常颜色 (SH evaluation or direct RGB)
        color = vec4<f32>(
            max(vec3<f32>(0.), evaluate_color(dir_local, idx, uModel.maxShDeg)),
            opacity
        );
    } else if (uModel.rendermode == 1u) {
        // 模式1: 法线可视化（视角无关：最小特征向量，使用自身分量确定符号，避免视角触发翻转）
        var n_world = smallest_evec_via_power(Sigma_world);

        // 选最大幅值分量的符号作为锚点，保证符号在不同视角下保持一致
        let abs_n = abs(n_world);
        if (abs_n.x >= abs_n.y && abs_n.x >= abs_n.z) {
            if (n_world.x < 0.0) { n_world = -n_world; }
        } else if (abs_n.y >= abs_n.z) {
            if (n_world.y < 0.0) { n_world = -n_world; }
        } else {
            if (n_world.z < 0.0) { n_world = -n_world; }
        }

        // 归一化，避免长度漂移/数值噪声；退化时给默认方向
        let n_len = length(n_world);
        if (n_len < 1e-8) {
            n_world = vec3<f32>(0.0, 0.0, 1.0);
        } else {
            n_world = n_world / n_len;
        }

        // 可视化时编码到颜色 [0,1]
        let n_rgb = clamp(0.5 * (n_world + vec3<f32>(1.0, 1.0, 1.0)), vec3<f32>(0.0), vec3<f32>(1.0));
        color = vec4<f32>(n_rgb, opacity);
    } else if (uModel.rendermode == 2u) {
        // 模式2: 深度可视化（使用透视除法后的 NDC 深度，0..1）
        let depth_ndc = 1.0 - clamp(pos2d.z / pos2d.w, 0.0, 1.0);
        color = vec4<f32>(depth_ndc, depth_ndc, depth_ndc, opacity);
    } else if (uModel.rendermode == 3u) {
        // 模式3: PCA可视化（extra_pca_r/g/b）
        let p = extra_pca[idx].xyz;
        color = vec4<f32>(clamp(p, vec3<f32>(0.0), vec3<f32>(1.0)), opacity);
    } else {
        // 默认: 正常颜色
        color = vec4<f32>(
            max(vec3<f32>(0.), evaluate_color(dir_local, idx, uModel.maxShDeg)),
            1
        );
    }

    let v = vec4<f32>(v1 / viewport, v2 / viewport);
    points_2d[store_idx] = Splat(
        pack2x16float(v.xy), pack2x16float(v.zw),
        pack2x16float(v_center.xy),
        v_center.z,
        pack2x16float(color.rg), pack2x16float(color.ba),
    );
    // filling the sorting buffers and the indirect sort dispatch buffer
    let znear = -camera.proj[3][2] / camera.proj[2][2];
    let zfar = -camera.proj[3][2] / (camera.proj[2][2] - (1.));
    // filling the sorting buffers and the indirect sort dispatch buffer
    sort_depths[store_idx] = bitcast<u32>(zfar - pos2d.z) ;//u32(f32(0xffffffu) - pos2d.z / zfar * f32(0xffffffu));
    sort_indices[store_idx] = store_idx;
    sort_source_indices[store_idx] = uModel.baseOffset + idx;

    let keys_per_wg = 256u * 15u;         // Caution: if workgroup size (256) or keys per thread (15) changes the dispatch is wrong!!
    if (global_index % keys_per_wg) == 0u {
        atomicAdd(&sort_dispatch.dispatch_x, 1u);
    }
}`,Ar=`// we cutoff at 1/255 alpha value 
const CUTOFF:f32 = 2.3539888583335364; // = sqrt(log(255))

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) screen_pos: vec2<f32>,
    @location(1) color: vec4<f32>,
};

struct VertexInput {
    @location(0) v: vec4<f32>,
    @location(1) pos: vec4<f32>,
    @location(2) color: vec4<f32>,
};

struct Splat {
     // 4x f16 packed as u32
    v_0: u32, v_1: u32,
    // 2x f16 packed as u32 (NDC x,y)
    pos: u32,
    // NDC z (high precision)
    posz: f32,
    // rgba packed as f16
    color_0: u32,color_1: u32,
};

@group(0) @binding(2)
var<storage, read> points_2d : array<Splat>;
@group(1) @binding(4)
var<storage, read> indices : array<u32>;

@vertex
fn vs_main(
    @builtin(vertex_index) in_vertex_index: u32,
    @builtin(instance_index) in_instance_index: u32
) -> VertexOutput {
    var out: VertexOutput;

    let vertex = points_2d[indices[in_instance_index] + 0u];

    // scaled eigenvectors in screen space 
    let v1 = unpack2x16float(vertex.v_0);
    let v2 = unpack2x16float(vertex.v_1);

    let v_center_xy = unpack2x16float(vertex.pos);
    let v_center_z = vertex.posz;

    // splat rectangle with left lower corner at (-1,-1)
    // and upper right corner at (1,1)
    let x = f32(in_vertex_index % 2u == 0u) * 2. - (1.);
    let y = f32(in_vertex_index < 2u) * 2. - (1.);

    let position = vec2<f32>(x, y) * CUTOFF;

    let offset = 2. * mat2x2<f32>(v1, v2) * position;
    let z_ndc = clamp(v_center_z, 0.0, 1.0);
    out.position = vec4<f32>(v_center_xy + offset, z_ndc, 1.);
    out.screen_pos = position;
    out.color = vec4<f32>(unpack2x16float(vertex.color_0), unpack2x16float(vertex.color_1));
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let a = dot(in.screen_pos, in.screen_pos);
    if a > 2. * CUTOFF {
        discard;
    }
    let b = min(0.99, exp(-a) * in.color.a);
    return vec4<f32>(in.color.rgb, 1.) * b;
}`,ha=`// GPU Radix Sort - deadlock-free implementation
// Replaces the original decoupled look-back (cross-workgroup spin-wait) with a 3-phase scatter:
//   Phase 1 (scatter_local): each workgroup computes local histogram + match/rank, writes reduction
//   Phase 2 (scatter_prefix_pass): a single-workgroup pass scans all partition reductions
//   Phase 3 (scatter_apply): each workgroup reads precomputed prefix, reorders and scatters globally

// Constants prepended by TypeScript before pipeline creation:
// const histogram_sg_size, histogram_wg_size, rs_radix_log2, rs_radix_size
// const rs_keyval_size, rs_histogram_block_rows, rs_scatter_block_rows
// const rs_mem_dwords, rs_mem_sweep_0_offset, rs_mem_sweep_1_offset, rs_mem_sweep_2_offset

struct GeneralInfo{
    keys_size: u32,
    padded_size: u32,
    passes: u32,       // reused to pass current radix pass index to scatter_prefix_pass
    even_pass: u32,
    odd_pass: u32,
};

@group(0) @binding(0)
var<storage, read_write> infos: GeneralInfo;
@group(0) @binding(1)
var<storage, read_write> histograms : array<atomic<u32>>;
@group(0) @binding(2)
var<storage, read_write> keys : array<u32>;
@group(0) @binding(3)
var<storage, read_write> keys_b : array<u32>;
@group(0) @binding(4)
var<storage, read_write> payload_a : array<u32>;
@group(0) @binding(5)
var<storage, read_write> payload_b : array<u32>;

// ============================================================================
// Buffer layout for histograms:
//   [0 .. keyval_size * radix_size)                                      -> global histograms
//   [keyval_size * radix_size .. (keyval_size + scatter_blocks_ru) * rs) -> per-workgroup reductions
//   [(keyval_size + scatter_blocks_ru) * rs .. (keyval_size + 2*scatter_blocks_ru) * rs) -> per-workgroup exclusive prefixes
// ============================================================================

// ============================================================================
// ZERO HISTOGRAMS
// ============================================================================
@compute @workgroup_size({histogram_wg_size})
fn zero_histograms(@builtin(global_invocation_id) gid : vec3<u32>, @builtin(num_workgroups) nwg: vec3<u32>) {
    if gid.x == 0u {
        infos.even_pass = 0u;
        infos.odd_pass = 1u;
    }
    let scatter_wg_size_ = histogram_wg_size;
    let scatter_block_kvs = scatter_wg_size_ * rs_scatter_block_rows;
    // In indirect mode, nwg.x may be scatter_blocks_ru+1 due to safety addition.
    // Use max(nwg.x, scatter_blocks_ru) to ensure we zero enough space.
    let scatter_blocks_ru = (infos.keys_size + scatter_block_kvs - 1u) / scatter_block_kvs;
    let actual_wgs = max(nwg.x, scatter_blocks_ru);
    
    let histo_size = rs_radix_size;
    // Zero: histograms + partitions + prefix areas
    var n = (rs_keyval_size + actual_wgs * 2u) * histo_size;
    let b = n;
    if infos.keys_size < infos.padded_size {
        n += infos.padded_size - infos.keys_size;
    }
    
    let line_size = nwg.x * {histogram_wg_size}u;
    for (var cur_index = gid.x; cur_index < n; cur_index += line_size) {
        if cur_index >= n {
            return;
        }
        if cur_index < b {
            atomicStore(&histograms[cur_index], 0u);
        }
        else {
            keys[infos.keys_size + cur_index - b] = 0xFFFFFFFFu;
        }
    }
}

// ============================================================================
// CALCULATE HISTOGRAM
// ============================================================================
var<workgroup> smem : array<atomic<u32>, rs_radix_size>;
var<private> kv : array<u32, rs_histogram_block_rows>;

fn zero_smem(lid: u32) {
    if lid < rs_radix_size {
        atomicStore(&smem[lid], 0u);
    }
}

fn histogram_pass(pass_: u32, lid: u32) {
    zero_smem(lid);
    workgroupBarrier();
    
    for (var j = 0u; j < rs_histogram_block_rows; j++) {
        let u_val = bitcast<u32>(kv[j]);
        let digit = extractBits(u_val, pass_ * rs_radix_log2, rs_radix_log2);
        atomicAdd(&smem[digit], 1u);
    }
    
    workgroupBarrier();
    let histogram_offset = rs_radix_size * pass_ + lid;
    if lid < rs_radix_size && atomicLoad(&smem[lid]) >= 0u {
        atomicAdd(&histograms[histogram_offset], atomicLoad(&smem[lid]));
    }
}

fn fill_kv(wid: u32, lid: u32) {
    let rs_block_keyvals : u32 = rs_histogram_block_rows * histogram_wg_size;
    let kv_in_offset = wid * rs_block_keyvals + lid;
    for (var i = 0u; i < rs_histogram_block_rows; i++) {
        let pos = kv_in_offset + i * histogram_wg_size;
        kv[i] = keys[pos];
    }
}

@compute @workgroup_size({histogram_wg_size})
fn calculate_histogram(@builtin(workgroup_id) wid : vec3<u32>, @builtin(local_invocation_id) lid : vec3<u32>) {
    fill_kv(wid.x, lid.x);
    histogram_pass(3u, lid.x);
    histogram_pass(2u, lid.x);
    histogram_pass(1u, lid.x);
    histogram_pass(0u, lid.x);
}

// ============================================================================
// PREFIX SUM OVER HISTOGRAM (unchanged)
// ============================================================================
fn prefix_reduce_smem(lid: u32) {
    var offset = 1u;
    for (var d = rs_radix_size >> 1u; d > 0u; d = d >> 1u) {
        workgroupBarrier();
        if lid < d {
            let ai = offset * (2u * lid + 1u) - 1u;
            let bi = offset * (2u * lid + 2u) - 1u;
            atomicAdd(&smem[bi], atomicLoad(&smem[ai]));
        }
        offset = offset << 1u;
    }
    
    if lid == 0u { 
        atomicStore(&smem[rs_radix_size - 1u], 0u);
    }
        
    for (var d = 1u; d < rs_radix_size; d = d << 1u) {
        offset = offset >> 1u;
        workgroupBarrier();
        if lid < d {
            let ai = offset * (2u * lid + 1u) - 1u;
            let bi = offset * (2u * lid + 2u) - 1u;
            let t = atomicLoad(&smem[ai]);
            atomicStore(&smem[ai], atomicLoad(&smem[bi]));
            atomicAdd(&smem[bi], t);
        }
    }
}

@compute @workgroup_size({prefix_wg_size})
fn prefix_histogram(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid : vec3<u32>) {
    let histogram_base = (rs_keyval_size - 1u - wid.x) * rs_radix_size;
    let histogram_offset = histogram_base + lid.x;
    
    atomicStore(&smem[lid.x], atomicLoad(&histograms[histogram_offset]));
    atomicStore(&smem[lid.x + {prefix_wg_size}u], atomicLoad(&histograms[histogram_offset + {prefix_wg_size}u]));

    prefix_reduce_smem(lid.x);
    workgroupBarrier();
    
    atomicStore(&histograms[histogram_offset], atomicLoad(&smem[lid.x]));
    atomicStore(&histograms[histogram_offset + {prefix_wg_size}u], atomicLoad(&smem[lid.x + {prefix_wg_size}u]));
}

// ============================================================================
// SCATTER - 3-phase deadlock-free approach
// ============================================================================
var<workgroup> scatter_smem: array<u32, rs_mem_dwords>;
var<private> kr : array<u32, rs_scatter_block_rows>;
var<private> pv : array<u32, rs_scatter_block_rows>;

fn partitions_base_offset() -> u32 { return rs_keyval_size * rs_radix_size; }
fn prefix_base_offset(scatter_blocks_ru: u32) -> u32 { return (rs_keyval_size + scatter_blocks_ru) * rs_radix_size; }

fn histogram_load(digit: u32) -> u32 {
    return atomicLoad(&smem[digit]);
}

fn histogram_store(digit: u32, count: u32) { 
    atomicStore(&smem[digit], count);
}

fn fill_kv_even(wid: u32, lid: u32) {
    let subgroup_id = lid / histogram_sg_size;
    let subgroup_invoc_id = lid - subgroup_id * histogram_sg_size;
    let subgroup_keyvals = rs_scatter_block_rows * histogram_sg_size;
    let rs_block_keyvals : u32 = rs_histogram_block_rows * histogram_wg_size;
    let kv_in_offset = wid * rs_block_keyvals + subgroup_id * subgroup_keyvals + subgroup_invoc_id;
    for (var i = 0u; i < rs_histogram_block_rows; i++) {
        let pos = kv_in_offset + i * histogram_sg_size;
        kv[i] = keys[pos];
    }
    for (var i = 0u; i < rs_histogram_block_rows; i++) {
        let pos = kv_in_offset + i * histogram_sg_size;
        pv[i] = payload_a[pos];
    }
}

fn fill_kv_odd(wid: u32, lid: u32) {
    let subgroup_id = lid / histogram_sg_size;
    let subgroup_invoc_id = lid - subgroup_id * histogram_sg_size;
    let subgroup_keyvals = rs_scatter_block_rows * histogram_sg_size;
    let rs_block_keyvals : u32 = rs_histogram_block_rows * histogram_wg_size;
    let kv_in_offset = wid * rs_block_keyvals + subgroup_id * subgroup_keyvals + subgroup_invoc_id;
    for (var i = 0u; i < rs_histogram_block_rows; i++) {
        let pos = kv_in_offset + i * histogram_sg_size;
        kv[i] = keys_b[pos];
    }
    for (var i = 0u; i < rs_histogram_block_rows; i++) {
        let pos = kv_in_offset + i * histogram_sg_size;
        pv[i] = payload_b[pos];
    }
}

// Compute match/rank for all elements in kv[] using smem-based emulation
// IMPORTANT: workgroupBarrier() ensures deterministic results across separate dispatch calls
// (scatter_local and scatter_apply must produce identical kr[] values for correctness)
fn compute_match_rank(pass_: u32, lid_x: u32) {
    let subgroup_id = lid_x / histogram_sg_size;
    let subgroup_offset = subgroup_id * histogram_sg_size;
    let subgroup_tid = lid_x - subgroup_offset;

    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        let u_val = bitcast<u32>(kv[i]);
        let digit = extractBits(u_val, pass_ * rs_radix_log2, rs_radix_log2);
        atomicStore(&smem[lid_x], digit);
        workgroupBarrier();  // ensure all threads have written their digit before any reads
        var count = 0u;
        var rank = 0u;
        
        for (var j = 0u; j < histogram_sg_size; j++) {
            if atomicLoad(&smem[subgroup_offset + j]) == digit {
                count += 1u;
                if j <= subgroup_tid {
                    rank += 1u;
                }
            }
        }
        workgroupBarrier();  // ensure all reads complete before next iteration overwrites smem
        
        kr[i] = (count << 16u) | rank;
    }
}

// Accumulate workgroup-level histogram in smem from match/rank data
fn accumulate_wg_histogram(pass_: u32, lid_x: u32) {
    let subgroup_id = lid_x / histogram_sg_size;
    let subgroup_count = {scatter_wg_size}u / histogram_sg_size;

    zero_smem(lid_x);
    workgroupBarrier();

    for (var i = 0u; i < subgroup_count; i++) {
        if subgroup_id == i {
            for (var j = 0u; j < rs_scatter_block_rows; j++) {
                let v = bitcast<u32>(kv[j]);
                let digit = extractBits(v, pass_ * rs_radix_log2, rs_radix_log2);
                let prev = histogram_load(digit);
                let rank = kr[j] & 0xFFFFu;
                let count = kr[j] >> 16u;
                kr[j] = prev + rank;

                if rank == count {
                    histogram_store(digit, (prev + count));
                }
            }            
        }
        workgroupBarrier();
    }
}

// ---- PHASE 1: scatter_local ----
// Each workgroup computes local histogram and writes its per-digit reduction to the partitions area.
// No cross-workgroup communication at all.

@compute @workgroup_size({scatter_wg_size})
fn scatter_local_even(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(global_invocation_id) gid: vec3<u32>, @builtin(num_workgroups) nwg: vec3<u32>) {
    if gid.x == 0u {
        infos.odd_pass = (infos.odd_pass + 1u) % 2u;
    }
    let cur_pass = infos.even_pass * 2u;
    
    fill_kv_even(wid.x, lid.x);
    compute_match_rank(cur_pass, lid.x);
    accumulate_wg_histogram(cur_pass, lid.x);

    // Write per-workgroup reduction
    let partition_base = partitions_base_offset() + wid.x * rs_radix_size;
    if lid.x < rs_radix_size {
        atomicStore(&histograms[partition_base + lid.x], histogram_load(lid.x));
    }
    
    // Pack pass index (low 16 bits) and workgroup count (high 16 bits) into infos.passes
    if gid.x == 0u {
        infos.passes = cur_pass | (nwg.x << 16u);
    }
}

@compute @workgroup_size({scatter_wg_size})
fn scatter_local_odd(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(global_invocation_id) gid: vec3<u32>, @builtin(num_workgroups) nwg: vec3<u32>) {
    if gid.x == 0u {
        infos.even_pass = (infos.even_pass + 1u) % 2u;
    }
    let cur_pass = infos.odd_pass * 2u + 1u;

    fill_kv_odd(wid.x, lid.x);
    compute_match_rank(cur_pass, lid.x);
    accumulate_wg_histogram(cur_pass, lid.x);

    let partition_base = partitions_base_offset() + wid.x * rs_radix_size;
    if lid.x < rs_radix_size {
        atomicStore(&histograms[partition_base + lid.x], histogram_load(lid.x));
    }
    
    if gid.x == 0u {
        infos.passes = cur_pass | (nwg.x << 16u);
    }
}

// ---- PHASE 2: scatter_prefix_pass ----
// One workgroup of 256 threads; each thread handles one digit (0..255).
// Sequentially scans all workgroup reductions for that digit and computes exclusive prefix sums.
// Fully safe: no cross-workgroup dependencies within this pass.

@compute @workgroup_size({scatter_wg_size})
fn scatter_prefix_pass(@builtin(local_invocation_id) lid: vec3<u32>) {
    if lid.x >= rs_radix_size {
        return;
    }
    
    let digit = lid.x;
    // Unpack: low 16 bits = pass index, high 16 bits = actual workgroup count
    let packed = infos.passes;
    let pass_ = packed & 0xFFFFu;
    let num_wgs = packed >> 16u;
    
    let hist_offset = pass_ * rs_radix_size + digit;
    var running_sum = atomicLoad(&histograms[hist_offset]);
    
    let part_base = partitions_base_offset();
    let pref_base = prefix_base_offset(num_wgs);
    
    for (var wg = 0u; wg < num_wgs; wg++) {
        let part_idx = part_base + wg * rs_radix_size + digit;
        let pref_idx = pref_base + wg * rs_radix_size + digit;
        
        // Store exclusive prefix for this workgroup
        atomicStore(&histograms[pref_idx], running_sum);
        
        // Accumulate the reduction
        let red = atomicLoad(&histograms[part_idx]);
        running_sum += red;
    }
}

// ---- PHASE 3: scatter_apply ----
// Each workgroup re-reads its data, re-computes match/rank (cheap), reads its precomputed prefix,
// does local reorder through scatter_smem, and writes to global output.

fn scatter_apply_core(pass_: u32, lid: vec3<u32>, wid: vec3<u32>, nwg: vec3<u32>) {
    // Use nwg.x from the dispatch — same dispatch buffer as scatter_local, so same workgroup count
    let num_wgs = nwg.x;
    
    // Re-compute match/rank from the same data
    compute_match_rank(pass_, lid.x);
    
    // Read precomputed exclusive prefix for this workgroup into scatter_smem[0..255]
    let pref_base = prefix_base_offset(num_wgs);
    if lid.x < rs_radix_size {
        let pref_idx = pref_base + wid.x * rs_radix_size + lid.x;
        scatter_smem[lid.x] = atomicLoad(&histograms[pref_idx]);
    }
    workgroupBarrier();

    // Re-accumulate workgroup histogram in smem (needed for local prefix scan)
    let subgroup_id = lid.x / histogram_sg_size;
    let subgroup_count = {scatter_wg_size}u / histogram_sg_size;

    zero_smem(lid.x);
    workgroupBarrier();

    for (var i = 0u; i < subgroup_count; i++) {
        if subgroup_id == i {
            for (var j = 0u; j < rs_scatter_block_rows; j++) {
                let v = bitcast<u32>(kv[j]);
                let digit = extractBits(v, pass_ * rs_radix_log2, rs_radix_log2);
                let prev = histogram_load(digit);
                let rank = kr[j] & 0xFFFFu;
                let count = kr[j] >> 16u;
                kr[j] = prev + rank;

                if rank == count {
                    histogram_store(digit, (prev + count));
                }
            }
        }
        workgroupBarrier();
    }

    // Local prefix scan of workgroup histogram
    prefix_reduce_smem(lid.x);
    workgroupBarrier();

    // Convert rank to local index
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        let v = bitcast<u32>(kv[i]);
        let digit = extractBits(v, pass_ * rs_radix_log2, rs_radix_log2);
        let exc = histogram_load(digit);
        let idx = exc + kr[i];
        kr[i] |= (idx << 16u);
    }
    workgroupBarrier();
    
    // Reorder through scatter_smem
    let smem_reorder_offset = rs_radix_size;
    let smem_base = smem_reorder_offset + lid.x;

    // Reorder keys
    for (var j = 0u; j < rs_scatter_block_rows; j++) {
        let smem_idx = smem_reorder_offset + (kr[j] >> 16u) - 1u;
        scatter_smem[smem_idx] = bitcast<u32>(kv[j]);
    }
    workgroupBarrier();
    for (var j = 0u; j < rs_scatter_block_rows; j++) {
        kv[j] = scatter_smem[smem_base + j * {scatter_wg_size}u];
    }
    workgroupBarrier();

    // Reorder payloads
    for (var j = 0u; j < rs_scatter_block_rows; j++) {
        let smem_idx = smem_reorder_offset + (kr[j] >> 16u) - 1u;
        scatter_smem[smem_idx] = pv[j];
    }
    workgroupBarrier();
    for (var j = 0u; j < rs_scatter_block_rows; j++) {
        pv[j] = scatter_smem[smem_base + j * {scatter_wg_size}u];
    }
    workgroupBarrier();

    // Reorder ranks
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        let smem_idx = smem_reorder_offset + (kr[i] >> 16u) - 1u;
        scatter_smem[smem_idx] = kr[i];
    }
    workgroupBarrier();
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        kr[i] = scatter_smem[smem_base + i * {scatter_wg_size}u] & 0xFFFFu;
    }
    
    // Convert local index to global index using precomputed exclusive prefix
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        let v = bitcast<u32>(kv[i]);
        let digit = extractBits(v, pass_ * rs_radix_log2, rs_radix_log2);
        let exc = scatter_smem[digit];
        kr[i] += exc - 1u;
    }
}

@compute @workgroup_size({scatter_wg_size})
fn scatter_apply_even(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(global_invocation_id) gid: vec3<u32>, @builtin(num_workgroups) nwg: vec3<u32>) {
    let cur_pass = infos.even_pass * 2u;
    
    fill_kv_even(wid.x, lid.x);
    scatter_apply_core(cur_pass, lid, wid, nwg);

    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        keys_b[kr[i]] = kv[i];
    }
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        payload_b[kr[i]] = pv[i];
    }
}

@compute @workgroup_size({scatter_wg_size})
fn scatter_apply_odd(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(global_invocation_id) gid: vec3<u32>, @builtin(num_workgroups) nwg: vec3<u32>) {
    let cur_pass = infos.odd_pass * 2u + 1u;

    fill_kv_odd(wid.x, lid.x);
    scatter_apply_core(cur_pass, lid, wid, nwg);

    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        keys[kr[i]] = kv[i];
    }
    for (var i = 0u; i < rs_scatter_block_rows; i++) {
        payload_a[kr[i]] = pv[i];
    }
}
`,fa=`struct WeightParams {
    baseOffset: u32,
    numPoints: u32,
    hasWeights: u32,
    _pad0: u32,
};

@group(0) @binding(0)
var<uniform> query_weights : array<vec4<f32>, 16>;

// Gram matrix G = C * C^T, row-major packed as 64 rows × 16 vec4s (= 64*64 floats)
@group(0) @binding(4)
var<uniform> gram : array<vec4<f32>, 64 * 16>;

@group(0) @binding(1)
var<storage, read> language_weights : array<vec4<f32>>;

@group(0) @binding(2)
var<storage, read_write> similarity : array<f32>;

@group(0) @binding(3)
var<uniform> params : WeightParams;

// softmaxParams.x = temperature (>= 1e-6)
// softmaxParams.y = useSoftmax (0.0 or 1.0)
@group(0) @binding(5)
var<uniform> softmaxParams : vec4<f32>;

fn lane_f32(v: vec4<f32>, lane: u32) -> f32 {
    if (lane == 0u) { return v.x; }
    if (lane == 1u) { return v.y; }
    if (lane == 2u) { return v.z; }
    return v.w;
}

fn gram_at(r: u32, c: u32) -> f32 {
    // r in [0,63], c in [0,63]
    let v = gram[r * 16u + (c >> 2u)];
    return lane_f32(v, c & 3u);
}

fn w_at(wv: ptr<function, array<vec4<f32>, 16>>, i: u32) -> f32 {
    let v = (*wv)[i >> 2u];
    return lane_f32(v, i & 3u);
}

fn q_at(i: u32) -> f32 {
    let v = query_weights[i >> 2u];
    return lane_f32(v, i & 3u);
}

@compute @workgroup_size(256, 1, 1)
fn main(@builtin(global_invocation_id) gid : vec3<u32>) {
    let idx = gid.x;
    if (idx >= params.numPoints) {
        return;
    }

    let out_index = params.baseOffset + idx;
    if (params.hasWeights == 0u) {
        similarity[out_index] = 0.0;
        return;
    }

    let base = idx * 16u;
    // Load 64D weights (16 vec4) for this gaussian
    var wv: array<vec4<f32>, 16>;
    for (var i: u32 = 0u; i < 16u; i = i + 1u) {
        wv[i] = language_weights[base + i];
    }

    var ws: array<f32, 64>;
    let useSoftmax = softmaxParams.y > 0.5;
    let temperature = max(1e-6, softmaxParams.x);
    let invTemp = 1.0 / temperature;

    if (useSoftmax) {
        // Stable softmax over 64D weights (optionally temperature-scaled).
        var maxv: f32 = -1e30;
        for (var i: u32 = 0u; i < 64u; i = i + 1u) {
            maxv = max(maxv, w_at(&wv, i));
        }
        var sumexp: f32 = 0.0;
        for (var i: u32 = 0u; i < 64u; i = i + 1u) {
            let e = exp((w_at(&wv, i) - maxv) * invTemp);
            ws[i] = e;
            sumexp = sumexp + e;
        }
        let invsum = 1.0 / max(1e-12, sumexp);
        for (var i: u32 = 0u; i < 64u; i = i + 1u) {
            ws[i] = ws[i] * invsum;
        }
    } else {
        // No softmax: interpret weights as already-normalized (or user-controlled).
        for (var i: u32 = 0u; i < 64u; i = i + 1u) {
            ws[i] = w_at(&wv, i);
        }
    }

    // Numerator: softmax(w) · (Cq)
    var num: f32 = 0.0;
    for (var i: u32 = 0u; i < 64u; i = i + 1u) {
        num = num + ws[i] * q_at(i);
    }

    // Denominator: || w^T C || = sqrt(w^T (C C^T) w) = sqrt(w^T G w)
    var den2: f32 = 0.0;
    for (var r: u32 = 0u; r < 64u; r = r + 1u) {
        var acc: f32 = 0.0;
        for (var c: u32 = 0u; c < 64u; c = c + 1u) {
            acc = acc + gram_at(r, c) * ws[c];
        }
        den2 = den2 + ws[r] * acc;
    }

    let denom = sqrt(max(1e-12, den2));
    // We keep only positive cosine for visualization/thresholding (range ~[0,1])
    let cos_sim = num / denom;
    similarity[out_index] = clamp(max(0.0, cos_sim), 0.0, 1.0);
}

`,Et=`// Render a per-splat similarity map (grayscale), using the same splat shape as gaussian.wgsl

// we cutoff at 1/255 alpha value 
const CUTOFF:f32 = 2.3539888583335364; // = sqrt(log(255))

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) screen_pos: vec2<f32>,
    @location(1) similarity: f32,
    @location(2) opacity: f32,
};

struct Splat {
     // 4x f16 packed as u32
    v_0: u32, v_1: u32,
    // 2x f16 packed as u32 (NDC x,y)
    pos: u32,
    // NDC z (high precision)
    posz: f32,
    // rgba packed as f16
    color_0: u32, color_1: u32,
};

@group(0) @binding(2)
var<storage, read> points_2d : array<Splat>;

@group(0) @binding(3)
var<storage, read> similarity_buffer : array<f32>;

@group(0) @binding(4)
var<storage, read> source_indices : array<u32>;

@group(1) @binding(4)
var<storage, read> indices : array<u32>;

@vertex
fn vs_main(
    @builtin(vertex_index) in_vertex_index: u32,
    @builtin(instance_index) in_instance_index: u32
) -> VertexOutput {
    var out: VertexOutput;

    let splat_index = indices[in_instance_index];
    let vertex = points_2d[splat_index];

    // scaled eigenvectors in screen space 
    let v1 = unpack2x16float(vertex.v_0);
    let v2 = unpack2x16float(vertex.v_1);

    let v_center_xy = unpack2x16float(vertex.pos);
    let v_center_z = vertex.posz;

    // splat rectangle with left lower corner at (-1,-1)
    // and upper right corner at (1,1)
    let x = f32(in_vertex_index % 2u == 0u) * 2. - (1.);
    let y = f32(in_vertex_index < 2u) * 2. - (1.);

    let position = vec2<f32>(x, y) * CUTOFF;

    let offset = 2. * mat2x2<f32>(v1, v2) * position;
    let z_ndc = clamp(v_center_z, 0.0, 1.0);
    out.position = vec4<f32>(v_center_xy + offset, z_ndc, 1.);
    out.screen_pos = position;
    let src_index = source_indices[splat_index];
    out.similarity = similarity_buffer[src_index];
    // Match gaussian.wgsl: use per-splat opacity (stored in packed color alpha) in accumulation.
    let c1 = unpack2x16float(vertex.color_1);
    out.opacity = c1.y;
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let a = dot(in.screen_pos, in.screen_pos);
    if a > 2. * CUTOFF {
        discard;
    }
    let b = min(0.99, exp(-a) * in.opacity);
    let sim = clamp(in.similarity, 0.0, 1.0);
    return vec4<f32>(sim, sim, sim, 1.0) * b;
}

`,pa=`// Compute per-Gaussian scalar numerator/denominator terms for pixel-level cosine approximation.
// Output per-point:
//   num  = w · q64
//   den2 = w^T (C C^T) w = w^T G w
//
// Notes:
// - This is an approximation when used with pixel compositing because it ignores cross-terms between
//   different splats inside the same pixel. It is still useful and much cheaper than HxWx64.

struct Params {
  baseOffset: u32,
  numPoints: u32,
  hasWeights: u32,
  _pad0: u32,
};

@group(0) @binding(0)
var<uniform> query_weights : array<vec4<f32>, 16>; // q64 packed as 16 vec4

@group(0) @binding(1)
var<storage, read> language_weights : array<vec4<f32>>; // 16 vec4 per point

@group(0) @binding(2)
var<storage, read_write> numden2_out : array<vec2<f32>>; // per-point (num, den2)

@group(0) @binding(3)
var<uniform> params : Params;

@group(0) @binding(4)
// Gram matrix G = C * C^T, row-major packed as 64 rows × 16 vec4s (= 64*64 floats)
var<uniform> gram : array<vec4<f32>, 64 * 16>;

fn lane_f32(v: vec4<f32>, lane: u32) -> f32 {
  if (lane == 0u) { return v.x; }
  if (lane == 1u) { return v.y; }
  if (lane == 2u) { return v.z; }
  return v.w;
}

fn gram_at(r: u32, c: u32) -> f32 {
  let v = gram[r * 16u + (c >> 2u)];
  return lane_f32(v, c & 3u);
}

fn w_at(wv: ptr<function, array<vec4<f32>, 16>>, i: u32) -> f32 {
  let vi = i >> 2u;
  let li = i & 3u;
  if (li == 0u) { return (*wv)[vi].x; }
  if (li == 1u) { return (*wv)[vi].y; }
  if (li == 2u) { return (*wv)[vi].z; }
  return (*wv)[vi].w;
}

fn q_at(i: u32) -> f32 {
  let vi = i >> 2u;
  let li = i & 3u;
  return lane_f32(query_weights[vi], li);
}

@compute @workgroup_size(256, 1, 1)
fn main(@builtin(global_invocation_id) gid : vec3<u32>) {
  let idx = gid.x;
  if (idx >= params.numPoints) { return; }
  let out_index = params.baseOffset + idx;

  if (params.hasWeights == 0u) {
    numden2_out[out_index] = vec2<f32>(0.0, 1.0);
    return;
  }

  // Load 64D weights (16 vec4)
  let base = idx * 16u;
  var wv: array<vec4<f32>, 16>;
  for (var i: u32 = 0u; i < 16u; i = i + 1u) {
    wv[i] = language_weights[base + i];
  }

  // num = w · q64
  var num: f32 = 0.0;
  for (var i: u32 = 0u; i < 64u; i = i + 1u) {
    num = num + w_at(&wv, i) * q_at(i);
  }

  // den2 = w^T G w
  var den2: f32 = 0.0;
  for (var r: u32 = 0u; r < 64u; r = r + 1u) {
    var acc: f32 = 0.0;
    for (var c: u32 = 0u; c < 64u; c = c + 1u) {
      acc = acc + gram_at(r, c) * w_at(&wv, c);
    }
    den2 = den2 + w_at(&wv, r) * acc;
  }

  numden2_out[out_index] = vec2<f32>(num, den2);
}

`,Or=`// Render a per-splat (num, den2) map using the same splat shape as gaussian.wgsl.
// The map is accumulated with premultiplied alpha over blending.
//
// Output target format: rgba16float
//   r = num (premultiplied by alpha in shader)
//   g = den2 (premultiplied by alpha in shader)
//   b = 0
//   a = alpha

const CUTOFF:f32 = 2.3539888583335364; // = sqrt(log(255))

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) screen_pos: vec2<f32>,
    @location(1) num: f32,
    @location(2) den2: f32,
    @location(3) opacity: f32,
};

struct Splat {
    v_0: u32, v_1: u32,
    pos: u32,
    posz: f32,
    color_0: u32, color_1: u32,
};

@group(0) @binding(2)
var<storage, read> points_2d : array<Splat>;

@group(0) @binding(3)
var<storage, read> numden2_buffer : array<vec2<f32>>;

@group(0) @binding(4)
var<storage, read> source_indices : array<u32>;

@group(1) @binding(4)
var<storage, read> indices : array<u32>;

@vertex
fn vs_main(
    @builtin(vertex_index) in_vertex_index: u32,
    @builtin(instance_index) in_instance_index: u32
) -> VertexOutput {
    var out: VertexOutput;
    let splat_index = indices[in_instance_index];
    let vertex = points_2d[splat_index];

    let v1 = unpack2x16float(vertex.v_0);
    let v2 = unpack2x16float(vertex.v_1);

    let v_center_xy = unpack2x16float(vertex.pos);
    let v_center_z = vertex.posz;

    let x = f32(in_vertex_index % 2u == 0u) * 2. - (1.);
    let y = f32(in_vertex_index < 2u) * 2. - (1.);
    let position = vec2<f32>(x, y) * CUTOFF;

    let offset = 2. * mat2x2<f32>(v1, v2) * position;
    let z_ndc = clamp(v_center_z, 0.0, 1.0);
    out.position = vec4<f32>(v_center_xy + offset, z_ndc, 1.);
    out.screen_pos = position;

    let src_index = source_indices[splat_index];
    let nd = numden2_buffer[src_index];
    out.num = nd.x;
    out.den2 = nd.y;

    let c1 = unpack2x16float(vertex.color_1);
    out.opacity = c1.y;
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let a = dot(in.screen_pos, in.screen_pos);
    if a > 2. * CUTOFF {
        discard;
    }
    let alpha = min(0.99, exp(-a) * in.opacity);
    // Premultiply by alpha; blending does the over composition.
    return vec4<f32>(in.num, in.den2, 0.0, 1.0) * alpha;
}

`,ma=`// Compute per-Gaussian neg relevancy scores.
//
// We compute cosine similarities using precomputed q64 vectors and gram matrix G=C*C^T:
//   s(q) = (w · q64) / sqrt(w^T G w)
//
// Neg relevancy (binary softmax) against each negative:
//   p_pos_given_neg = softmax(tau * [s_pos, s_neg])[0] = sigmoid(tau * (s_pos - s_neg))
//
// Output similarity := min_j p_pos_given_neg_j (hardest negative), clamped to [0,1].

struct Params {
  baseOffset: u32,
  numPoints: u32,
  hasWeights: u32,
  _pad0: u32,
};

// cfg.x = tau
// cfg.y = negMask bits (0..3) encoded as f32 but treated as u32
// cfg.z = useRelevancy (0.0/1.0)
// cfg.w = reserved
@group(0) @binding(6)
var<uniform> cfg : vec4<f32>;

@group(0) @binding(0)
var<uniform> queries : array<vec4<f32>, 16u * 5u>; // [pos, neg0..3] each is 16 vec4

@group(0) @binding(1)
var<storage, read> language_weights : array<vec4<f32>>;

@group(0) @binding(2)
var<storage, read_write> similarity : array<f32>;

@group(0) @binding(3)
var<uniform> params : Params;

// Gram matrix G = C * C^T, row-major packed as 64 rows × 16 vec4s (= 64*64 floats)
@group(0) @binding(4)
var<uniform> gram : array<vec4<f32>, 64u * 16u>;

fn lane_f32(v: vec4<f32>, lane: u32) -> f32 {
  if (lane == 0u) { return v.x; }
  if (lane == 1u) { return v.y; }
  if (lane == 2u) { return v.z; }
  return v.w;
}

fn gram_at(r: u32, c: u32) -> f32 {
  let v = gram[r * 16u + (c >> 2u)];
  return lane_f32(v, c & 3u);
}

fn w_at(wv: ptr<function, array<vec4<f32>, 16>>, i: u32) -> f32 {
  let v = (*wv)[i >> 2u];
  return lane_f32(v, i & 3u);
}

fn q_at(qi: u32, i: u32) -> f32 {
  let base = qi * 16u;
  let v = queries[base + (i >> 2u)];
  return lane_f32(v, i & 3u);
}

fn sigmoid(x: f32) -> f32 {
  // Stable-ish sigmoid
  return 1.0 / (1.0 + exp(-x));
}

fn cosine_for_query(wv: ptr<function, array<vec4<f32>, 16>>, qi: u32, denom: f32) -> f32 {
  var num: f32 = 0.0;
  for (var i: u32 = 0u; i < 64u; i = i + 1u) {
    num = num + w_at(wv, i) * q_at(qi, i);
  }
  return num / denom;
}

fn denom_from_gram(wv: ptr<function, array<vec4<f32>, 16>>) -> f32 {
  var den2: f32 = 0.0;
  for (var r: u32 = 0u; r < 64u; r = r + 1u) {
    var acc: f32 = 0.0;
    for (var c: u32 = 0u; c < 64u; c = c + 1u) {
      acc = acc + gram_at(r, c) * w_at(wv, c);
    }
    den2 = den2 + w_at(wv, r) * acc;
  }
  return sqrt(max(1e-12, den2));
}

@compute @workgroup_size(256, 1, 1)
fn main(@builtin(global_invocation_id) gid : vec3<u32>) {
  let idx = gid.x;
  if (idx >= params.numPoints) { return; }
  let out_index = params.baseOffset + idx;

  if (params.hasWeights == 0u) {
    similarity[out_index] = 0.0;
    return;
  }

  let useRel = cfg.z > 0.5;

  // Load 64D weights (16 vec4)
  let base = idx * 16u;
  var wv: array<vec4<f32>, 16>;
  for (var i: u32 = 0u; i < 16u; i = i + 1u) {
    wv[i] = language_weights[base + i];
  }

  let denom = denom_from_gram(&wv);
  let s_pos = cosine_for_query(&wv, 0u, denom);

  if (!useRel) {
    similarity[out_index] = clamp(max(0.0, s_pos), 0.0, 1.0);
    return;
  }

  let tau = max(1e-6, cfg.x);
  let negMask = bitcast<u32>(cfg.y);

  var best: f32 = 1.0;
  var hasAny: bool = false;
  for (var j: u32 = 0u; j < 4u; j = j + 1u) {
    if ((negMask & (1u << j)) == 0u) { continue; }
    hasAny = true;
    let s_neg = cosine_for_query(&wv, 1u + j, denom);
    let p = sigmoid(tau * (s_pos - s_neg));
    best = min(best, p);
  }
  if (!hasAny) {
    best = clamp(max(0.0, s_pos), 0.0, 1.0);
  }

  similarity[out_index] = clamp(best, 0.0, 1.0);
}

`,Qe=256,fr=8,_t=1<<fr,Dr=32/fr,nt=15,qt=nt,ga=128,zr=256;function ya(l){const e=l.slice();for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}class Se{bindGroupLayout;renderBindGroupLayout;preprocessBindGroupLayout;zero_p;histogram_p;prefix_p;scatter_local_even_p;scatter_local_odd_p;scatter_prefix_p;scatter_apply_even_p;scatter_apply_odd_p;subgroupSize;constructor(){}static async create(e,t){console.debug("Searching for the maximum subgroup size...");const r=[16,32,16,8,1];for(const s of r){console.debug(`Testing sorting with subgroup size ${s}`);try{const i=new Se;if(await i.initializeWithSubgroupSize(e,s),await i.testSort(e,t))return console.log(`Subgroup size ${s} works.`),i}catch(i){console.warn(`Subgroup size ${s} failed during pipeline creation or test run.`,i)}}throw new Error("GPURSSorter::create() No working subgroup size was found. Unable to use sorter.")}async initializeWithSubgroupSize(e,t){this.subgroupSize=t,this.bindGroupLayout=this.createBindGroupLayout(e),this.renderBindGroupLayout=Se.createRenderBindGroupLayout(e),this.preprocessBindGroupLayout=Se.createPreprocessBindGroupLayout(e);const r=e.createPipelineLayout({label:"radix sort pipeline layout",bindGroupLayouts:[this.bindGroupLayout]}),s=this.processShaderTemplate(ha),i=e.createShaderModule({label:"Radix sort shader",code:s});this.zero_p=await e.createComputePipelineAsync({label:"Zero the histograms",layout:r,compute:{module:i,entryPoint:"zero_histograms"}}),this.histogram_p=await e.createComputePipelineAsync({label:"calculate_histogram",layout:r,compute:{module:i,entryPoint:"calculate_histogram"}}),this.prefix_p=await e.createComputePipelineAsync({label:"prefix_histogram",layout:r,compute:{module:i,entryPoint:"prefix_histogram"}}),this.scatter_local_even_p=await e.createComputePipelineAsync({label:"scatter_local_even",layout:r,compute:{module:i,entryPoint:"scatter_local_even"}}),this.scatter_local_odd_p=await e.createComputePipelineAsync({label:"scatter_local_odd",layout:r,compute:{module:i,entryPoint:"scatter_local_odd"}}),this.scatter_prefix_p=await e.createComputePipelineAsync({label:"scatter_prefix_pass",layout:r,compute:{module:i,entryPoint:"scatter_prefix_pass"}}),this.scatter_apply_even_p=await e.createComputePipelineAsync({label:"scatter_apply_even",layout:r,compute:{module:i,entryPoint:"scatter_apply_even"}}),this.scatter_apply_odd_p=await e.createComputePipelineAsync({label:"scatter_apply_odd",layout:r,compute:{module:i,entryPoint:"scatter_apply_odd"}})}processShaderTemplate(e){const t=Math.max(1,this.subgroupSize|0),r=Math.floor(_t/t),s=Math.floor(r/t),i=_t+qt*zr,a=0,o=a+r,n=o+s,c=`const histogram_sg_size: u32 = ${t}u;
            const histogram_wg_size: u32 = ${Qe}u;
            const rs_radix_log2: u32 = ${fr}u;
            const rs_radix_size: u32 = ${_t}u;
            const rs_keyval_size: u32 = ${Dr}u;
            const rs_histogram_block_rows: u32 = ${nt}u;
            const rs_scatter_block_rows: u32 = ${qt}u;
            const rs_mem_dwords: u32 = ${i}u;
            const rs_mem_sweep_0_offset: u32 = ${a}u;
            const rs_mem_sweep_1_offset: u32 = ${o}u;
            const rs_mem_sweep_2_offset: u32 = ${n}u;
            `;let h=e.replace(/{histogram_wg_size}/g,Qe.toString()).replace(/{prefix_wg_size}/g,ga.toString()).replace(/{scatter_wg_size}/g,zr.toString());return c+h}async testSort(e,t){const r=new Float32Array(ya(Array.from({length:8192},(n,c)=>8191-c))),s=new Float32Array(Array.from({length:8192},(n,c)=>c)),i=this.createSortStuff(e,8192);t.writeBuffer(i.key_a,0,r.buffer);const a=e.createCommandEncoder({label:"GPURSSorter test_sort"});this.recordSort(i,8192,a),t.submit([a.finish()]),await e.queue.onSubmittedWorkDone();const o=await this.downloadBuffer(e,t,i.key_a,"f32");for(let n=0;n<8192;n++)if(o[n]!==s[n])return console.error(`Sort failed at index ${n}. Expected ${s[n]}, got ${o[n]}`),!1;return!0}createSortStuff(e,t){const{key_a:r,key_b:s,payload_a:i,payload_b:a}=this.createKeyvalBuffers(e,t,4),o=this.createInternalMemBuffer(e,t),n=e.createBuffer({label:"Radix sort source indices",size:Math.max(1,t)*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),{sorter_uni:c,sorter_dis:h,sorter_bg:u}=this.createBindGroup(e,t,o,r,s,i,a),d=this.createRenderBindGroup(e,c,i),p=this.createPreprocessBindGroup(e,c,h,r,i,n);return{numPoints:t,num_points:t,sortedIndices:i,indirectBuffer:h,sorter_uni:c,sorter_dis:h,sorter_bg:u,sorter_render_bg:d,sorter_bg_pre:p,internal_mem:o,key_a:r,key_b:s,payload_a:i,payload_b:a,source_indices:n}}recordSort(e,t,r){const s=e;this.recordCalculateHistogram(s.sorter_bg,t,r),this.recordPrefixHistogram(s.sorter_bg,4,r),this.recordScatterKeys(s.sorter_bg,t,r)}recordSortIndirect(e,t,r){const s=e;{const i=r.beginComputePass({label:"RS::Zero (Indirect)"});i.setBindGroup(0,s.sorter_bg),i.setPipeline(this.zero_p),i.dispatchWorkgroupsIndirect(t,0),i.end()}{const i=r.beginComputePass({label:"RS::Histogram (Indirect)"});i.setBindGroup(0,s.sorter_bg),i.setPipeline(this.histogram_p),i.dispatchWorkgroupsIndirect(t,0),i.end()}this.recordPrefixHistogram(s.sorter_bg,4,r),this.recordScatterPassIndirect(s.sorter_bg,t,!0,r),this.recordScatterPassIndirect(s.sorter_bg,t,!1,r),this.recordScatterPassIndirect(s.sorter_bg,t,!0,r),this.recordScatterPassIndirect(s.sorter_bg,t,!1,r)}recordSortIndirect_one(e,t,r){this.recordSortIndirect(e,t,r)}static createRenderBindGroupLayout(e){return e.createBindGroupLayout({label:"Radix Sort Render Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]})}static createPreprocessBindGroupLayout(e){return e.createBindGroupLayout({label:"Radix Sort Preprocess Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]})}recordResetIndirectBuffer(e,t,r){const s=new Uint32Array([0]);r.writeBuffer(e,0,s),r.writeBuffer(t,0,s)}createBindGroupLayout(e){return e.createBindGroupLayout({label:"Radix Sort Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]})}getScatterHistogramSizes(e){const t=Qe*qt,r=Math.ceil(e/t),s=r*t,i=Qe*nt,a=Math.ceil(s/i)*i;return{scatter_blocks_ru:r,count_ru_histo:a}}createKeyvalBuffers(e,t,r){const s=Qe*nt,i=(Math.floor((t+s)/s)+1)*s*Float32Array.BYTES_PER_ELEMENT,a=e.createBuffer({label:"Radix data buffer a",size:i,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),o=e.createBuffer({label:"Radix data buffer b",size:i,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});r!==4&&console.warn("Currently only 4-byte payloads are fully supported.");const n=Math.max(1,t*r),c=e.createBuffer({label:"Radix payload buffer a",size:n,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),h=e.createBuffer({label:"Radix payload buffer b",size:n,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return{key_a:a,key_b:o,payload_a:c,payload_b:h}}createInternalMemBuffer(e,t){const{scatter_blocks_ru:r}=this.getScatterHistogramSizes(t),s=_t*Uint32Array.BYTES_PER_ELEMENT,i=(Dr+(r+1)*2)*s;return e.createBuffer({label:"Internal radix sort buffer",size:i,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}createBindGroup(e,t,r,s,i,a,o){const{scatter_blocks_ru:n,count_ru_histo:c}=this.getScatterHistogramSizes(t),h={keys_size:t,padded_size:c,passes:4,even_pass:0,odd_pass:0},u=e.createBuffer({label:"Radix uniform buffer",size:5*Uint32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,mappedAtCreation:!0});new Uint32Array(u.getMappedRange()).set([h.keys_size,h.padded_size,h.passes,h.even_pass,h.odd_pass]),u.unmap();const d={dispatch_x:n,dispatch_y:1,dispatch_z:1},p=e.createBuffer({label:"Dispatch indirect buffer",size:3*Uint32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.INDIRECT,mappedAtCreation:!0});new Uint32Array(p.getMappedRange()).set([d.dispatch_x,d.dispatch_y,d.dispatch_z]),p.unmap();const f=e.createBindGroup({label:"Radix bind group",layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:u}},{binding:1,resource:{buffer:r}},{binding:2,resource:{buffer:s}},{binding:3,resource:{buffer:i}},{binding:4,resource:{buffer:a}},{binding:5,resource:{buffer:o}}]});return{sorter_uni:u,sorter_dis:p,sorter_bg:f}}createRenderBindGroup(e,t,r){return e.createBindGroup({label:"Render bind group",layout:this.renderBindGroupLayout,entries:[{binding:0,resource:{buffer:t}},{binding:4,resource:{buffer:r}}]})}createPreprocessBindGroup(e,t,r,s,i,a){return e.createBindGroup({label:"Preprocess bind group",layout:this.preprocessBindGroupLayout,entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:{buffer:s}},{binding:2,resource:{buffer:i}},{binding:3,resource:{buffer:r}},{binding:4,resource:{buffer:a}}]})}recordCalculateHistogram(e,t,r){const{count_ru_histo:s}=this.getScatterHistogramSizes(t),i=Qe*nt,a=Math.ceil(s/i);{const o=r.beginComputePass({label:"RS::Zero"});o.setBindGroup(0,e),o.setPipeline(this.zero_p),o.dispatchWorkgroups(a,1,1),o.end()}{const o=r.beginComputePass({label:"RS::Histogram"});o.setBindGroup(0,e),o.setPipeline(this.histogram_p),o.dispatchWorkgroups(a,1,1),o.end()}}recordPrefixHistogram(e,t,r){const s=r.beginComputePass({label:"Radix Sort :: Prefix Sum Pass"});s.setPipeline(this.prefix_p),s.setBindGroup(0,e),s.dispatchWorkgroups(t,1,1),s.end()}recordScatterKeys(e,t,r){const{scatter_blocks_ru:s}=this.getScatterHistogramSizes(t),i=(a,o,n)=>{{const c=r.beginComputePass({label:`${n}::Local`});c.setBindGroup(0,e),c.setPipeline(a),c.dispatchWorkgroups(s,1,1),c.end()}{const c=r.beginComputePass({label:`${n}::Prefix`});c.setBindGroup(0,e),c.setPipeline(this.scatter_prefix_p),c.dispatchWorkgroups(1,1,1),c.end()}{const c=r.beginComputePass({label:`${n}::Apply`});c.setBindGroup(0,e),c.setPipeline(o),c.dispatchWorkgroups(s,1,1),c.end()}};i(this.scatter_local_even_p,this.scatter_apply_even_p,"RS::Scatter0_even"),i(this.scatter_local_odd_p,this.scatter_apply_odd_p,"RS::Scatter1_odd"),i(this.scatter_local_even_p,this.scatter_apply_even_p,"RS::Scatter2_even"),i(this.scatter_local_odd_p,this.scatter_apply_odd_p,"RS::Scatter3_odd")}recordScatterPassIndirect(e,t,r,s){const i=r?this.scatter_local_even_p:this.scatter_local_odd_p,a=r?this.scatter_apply_even_p:this.scatter_apply_odd_p,o=r?"even":"odd";{const n=s.beginComputePass({label:`RS::ScatterLocal_${o} (Indirect)`});n.setBindGroup(0,e),n.setPipeline(i),n.dispatchWorkgroupsIndirect(t,0),n.end()}{const n=s.beginComputePass({label:`RS::ScatterPrefix_${o} (Indirect)`});n.setBindGroup(0,e),n.setPipeline(this.scatter_prefix_p),n.dispatchWorkgroups(1,1,1),n.end()}{const n=s.beginComputePass({label:`RS::ScatterApply_${o} (Indirect)`});n.setBindGroup(0,e),n.setPipeline(a),n.dispatchWorkgroupsIndirect(t,0),n.end()}}async downloadBuffer(e,t,r,s){const i=e.createBuffer({label:"Download buffer",size:r.size,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),a=e.createCommandEncoder({label:"Copy encoder"});a.copyBufferToBuffer(r,0,i,0,r.size),t.submit([a.finish()]),await i.mapAsync(GPUMapMode.READ);const o=i.getMappedRange();let n;return s==="f32"?n=new Float32Array(o.slice(0)):n=new Uint32Array(o.slice(0)),i.unmap(),i.destroy(),n}}class Lr{pipeline;pipelineLayout;cameraUniforms;settingsUniforms;shDegree=3;device;m_useRawColor=!1;scratchCameraBuffer=new ArrayBuffer(272);scratchCameraView=new Float32Array(this.scratchCameraBuffer);scratchSettingsBuffer=new ArrayBuffer(80);scratchSettingsView=new DataView(this.scratchSettingsBuffer);async initialize(e,t,r=!1){this.device=e,this.shDegree=t,this.cameraUniforms=new ct(e,new ArrayBuffer(272),"Camera Uniforms"),this.settingsUniforms=new ct(e,new ArrayBuffer(80),"Settings Uniforms"),this.pipelineLayout=e.createPipelineLayout({label:"preprocess pipeline layout",bindGroupLayouts:[ct.bindGroupLayout(e),this.getPointCloudBindGroupLayout(e),this.getSortBindGroupLayout(e),this.getSettingsAndModelParamsBGL(e)]});const s=da.replace("<injected>",t.toString()),i=e.createShaderModule({label:"preprocess.wgsl",code:s});this.pipeline=e.createComputePipeline({label:"preprocess pipeline",layout:this.pipelineLayout,compute:{module:i,entryPoint:"preprocess",constants:{USE_RAW_COLOR:r?1:0}}}),this.m_useRawColor=r,console.log(`📐 Preprocessor initialized with SH degree ${t}, raw color: ${r}`)}dispatchModel(e,t){if(this.packCameraUniforms(e.camera,e.viewport),this.packSettingsUniforms(e.pointCloud,e.settings),e.pointCloud.updateModelParamsWithOffset(e.modelMatrix,e.baseOffset),this.cameraUniforms.flush(this.device),this.settingsUniforms.flush(this.device),"setPrecisionForShader"in e.pointCloud&&typeof e.pointCloud.setPrecisionForShader=="function")try{e.pointCloud.setPrecisionForShader()}catch{}e.countBuffer?(e.pointCloud.modelParamsUniforms.flush(this.device),t.copyBufferToBuffer(e.countBuffer,0,e.pointCloud.modelParamsUniforms.buffer,68,4)):e.pointCloud.modelParamsUniforms.flush(this.device);const r=t.beginComputePass({label:"preprocess compute pass (global/M1)"});r.setPipeline(this.pipeline),r.setBindGroup(0,this.cameraUniforms.bindGroup);const s=this.pipeline.getBindGroupLayout(1),i=e.pointCloud.getSplatBuffer(),a=this.device.createBindGroup({label:"preprocess/pc-global-bg",layout:s,entries:[{binding:0,resource:{buffer:i.gaussianBuffer}},{binding:1,resource:{buffer:i.shBuffer}},{binding:2,resource:{buffer:e.global.splat2D}},{binding:3,resource:{buffer:e.pointCloud.uniforms.buffer}},{binding:4,resource:{buffer:e.pointCloud.getExtraPcaBuffer()}}]});r.setBindGroup(1,a),r.setBindGroup(2,this.getSortBindGroup(e.sortStuff));const o=this.pipeline.getBindGroupLayout(3),n=this.device.createBindGroup({layout:o,entries:[{binding:0,resource:{buffer:this.settingsUniforms.buffer}},{binding:1,resource:{buffer:e.pointCloud.modelParamsUniforms.buffer}}]});r.setBindGroup(3,n);const c=Math.ceil(e.pointCloud.numPoints/256);r.dispatchWorkgroups(c,1,1),r.end()}getBindGroupLayout(e){return this.pipeline.getBindGroupLayout(0)}packCameraUniforms(e,t){const r=this.scratchCameraView,s=e.viewMatrix();r.set(s,0);const i=this.invertMatrix4(s);r.set(i,16);const a=e.projMatrix(),o=this.multiplyMatrix4(mi,a);r.set(o,32);const n=this.invertMatrix4(a);r.set(n,48),r[64]=t[0],r[65]=t[1];const c=e.projection.focal(t);r[66]=c[0],r[67]=c[1],this.cameraUniforms.setData(r)}packSettingsUniforms(e,t){const r=this.scratchSettingsView;let s=0;r.setFloat32(s+0,t.clippingBoxMin[0],!0),r.setFloat32(s+4,t.clippingBoxMin[1],!0),r.setFloat32(s+8,t.clippingBoxMin[2],!0),r.setFloat32(s+12,0,!0),s+=16,r.setFloat32(s+0,t.clippingBoxMax[0],!0),r.setFloat32(s+4,t.clippingBoxMax[1],!0),r.setFloat32(s+8,t.clippingBoxMax[2],!0),r.setFloat32(s+12,0,!0),s+=16,r.setFloat32(s,t.gaussianScaling,!0),s+=4,r.setUint32(s,t.maxSHDegree,!0),s+=4,r.setUint32(s,t.showEnvMap?1:0,!0),s+=4,r.setUint32(s,t.mipSplatting?1:0,!0),s+=4,r.setFloat32(s,t.kernelSize,!0),s+=4,r.setFloat32(s,t.walltime,!0),s+=4,r.setFloat32(s,t.sceneExtend,!0),s+=4,s=64,r.setFloat32(s+0,t.center[0],!0),r.setFloat32(s+4,t.center[1],!0),r.setFloat32(s+8,t.center[2],!0),r.setFloat32(s+12,0,!0),this.settingsUniforms.setData(r)}identityMat4(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}async debugCountValues(){this._debugCountBuffer&&(console.log("=== PREPROCESSOR DEBUG ==="),await xi(this.device,this._debugCountBuffer,this.modelParamsUniforms?.buffer||null,this._debugMaxPoints||0))}getPointCloudBindGroupLayout(e){return e.createBindGroupLayout({label:"Point Cloud Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]})}getSortBindGroupLayout(e){return e.createBindGroupLayout({label:"Sort Preprocess Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]})}getSettingsAndModelParamsBGL(e){return e.createBindGroupLayout({label:"Settings + ModelParams BGL",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]})}getSortBindGroup(e){return e.sorter_bg_pre}invertMatrix4(e){const t=new Float32Array(16),r=e;t[0]=r[5]*r[10]*r[15]-r[5]*r[11]*r[14]-r[9]*r[6]*r[15]+r[9]*r[7]*r[14]+r[13]*r[6]*r[11]-r[13]*r[7]*r[10],t[4]=-r[4]*r[10]*r[15]+r[4]*r[11]*r[14]+r[8]*r[6]*r[15]-r[8]*r[7]*r[14]-r[12]*r[6]*r[11]+r[12]*r[7]*r[10],t[8]=r[4]*r[9]*r[15]-r[4]*r[11]*r[13]-r[8]*r[5]*r[15]+r[8]*r[7]*r[13]+r[12]*r[5]*r[11]-r[12]*r[7]*r[9],t[12]=-r[4]*r[9]*r[14]+r[4]*r[10]*r[13]+r[8]*r[5]*r[14]-r[8]*r[6]*r[13]-r[12]*r[5]*r[10]+r[12]*r[6]*r[9],t[1]=-r[1]*r[10]*r[15]+r[1]*r[11]*r[14]+r[9]*r[2]*r[15]-r[9]*r[3]*r[14]-r[13]*r[2]*r[11]+r[13]*r[3]*r[10],t[5]=r[0]*r[10]*r[15]-r[0]*r[11]*r[14]-r[8]*r[2]*r[15]+r[8]*r[3]*r[14]+r[12]*r[2]*r[11]-r[12]*r[3]*r[10],t[9]=-r[0]*r[9]*r[15]+r[0]*r[11]*r[13]+r[8]*r[1]*r[15]-r[8]*r[3]*r[13]-r[12]*r[1]*r[11]+r[12]*r[3]*r[9],t[13]=r[0]*r[9]*r[14]-r[0]*r[10]*r[13]-r[8]*r[1]*r[14]+r[8]*r[2]*r[13]+r[12]*r[1]*r[10]-r[12]*r[2]*r[9],t[2]=r[1]*r[6]*r[15]-r[1]*r[7]*r[14]-r[5]*r[2]*r[15]+r[5]*r[3]*r[14]+r[13]*r[2]*r[7]-r[13]*r[3]*r[6],t[6]=-r[0]*r[6]*r[15]+r[0]*r[7]*r[14]+r[4]*r[2]*r[15]-r[4]*r[3]*r[14]-r[12]*r[2]*r[7]+r[12]*r[3]*r[6],t[10]=r[0]*r[5]*r[15]-r[0]*r[7]*r[13]-r[4]*r[1]*r[15]+r[4]*r[3]*r[13]+r[12]*r[1]*r[7]-r[12]*r[3]*r[5],t[14]=-r[0]*r[5]*r[14]+r[0]*r[6]*r[13]+r[4]*r[1]*r[14]-r[4]*r[2]*r[13]-r[12]*r[1]*r[6]+r[12]*r[2]*r[5],t[3]=-r[1]*r[6]*r[11]+r[1]*r[7]*r[10]+r[5]*r[2]*r[11]-r[5]*r[3]*r[10]-r[9]*r[2]*r[7]+r[9]*r[3]*r[6],t[7]=r[0]*r[6]*r[11]-r[0]*r[7]*r[10]-r[4]*r[2]*r[11]+r[4]*r[3]*r[10]+r[8]*r[2]*r[7]-r[8]*r[3]*r[6],t[11]=-r[0]*r[5]*r[11]+r[0]*r[7]*r[9]+r[4]*r[1]*r[11]-r[4]*r[3]*r[9]-r[8]*r[1]*r[7]+r[8]*r[3]*r[5],t[15]=r[0]*r[5]*r[10]-r[0]*r[6]*r[9]-r[4]*r[1]*r[10]+r[4]*r[2]*r[9]+r[8]*r[1]*r[6]-r[8]*r[2]*r[5];let s=r[0]*t[0]+r[1]*t[4]+r[2]*t[8]+r[3]*t[12];if(Math.abs(s)<1e-8)throw new Error("Matrix not invertible");s=1/s;for(let i=0;i<16;i++)t[i]*=s;return t}multiplyMatrix4(e,t){const r=e,s=t,i=new Float32Array(16);for(let a=0;a<4;a++){const o=r[a],n=r[a+4],c=r[a+8],h=r[a+12];i[a]=o*s[0]+n*s[1]+c*s[2]+h*s[3],i[a+4]=o*s[4]+n*s[5]+c*s[6]+h*s[7],i[a+8]=o*s[8]+n*s[9]+c*s[10]+h*s[11],i[a+12]=o*s[12]+n*s[13]+c*s[14]+h*s[15]}return i}}function kr(l){const e=new ArrayBuffer(l.byteLength);return new Uint8Array(e).set(new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),e}class va{device;format;computePipeline;computeBindGroupLayout;renderPipeline;renderPipelineDepth=null;renderBindGroupLayout;renderBindGroup=null;lastRenderBindings={};queryUniform;gramUniform;softmaxUniform;paramsUniform;dummyWeights;renderTarget=null;renderTargetView=null;renderTargetSize=[0,0];constructor(e,t){this.device=e,this.format=t,this.queryUniform=e.createBuffer({label:"Weight query uniform",size:256,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.gramUniform=e.createBuffer({label:"Weight gram uniform (C*C^T)",size:4096*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.softmaxUniform=e.createBuffer({label:"Weight softmax params uniform",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.paramsUniform=e.createBuffer({label:"Weight params uniform",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummyWeights=e.createBuffer({label:"Weight dummy buffer",size:256,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.queryUniform,0,new Float32Array(64)),e.queue.writeBuffer(this.gramUniform,0,new Float32Array(4096)),e.queue.writeBuffer(this.softmaxUniform,0,new Float32Array([1,0,0,0])),e.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([0,0,0,0]))}initialize(){this.createComputePipeline(),this.createRenderPipeline()}setQueryWeights(e){if(e.length!==64){console.warn("[WeightSimilarityPass] Query weights must be length 64.");return}this.device.queue.writeBuffer(this.queryUniform,0,kr(e))}setGramMatrix(e){if(e.length!==4096){console.warn("[WeightSimilarityPass] Gram matrix must be length 4096 (64x64).");return}this.device.queue.writeBuffer(this.gramUniform,0,kr(e))}setSoftmaxConfig(e,t){const r=Number.isFinite(t)?Math.max(1e-6,t):1,s=e?1:0;this.device.queue.writeBuffer(this.softmaxUniform,0,new Float32Array([r,s,0,0]))}getRenderTarget(){return this.renderTarget}ensureRenderTarget(e,t){const r=Math.max(1,Math.floor(e)),s=Math.max(1,Math.floor(t));return this.renderTarget&&this.renderTargetSize[0]===r&&this.renderTargetSize[1]===s?this.renderTargetView:(this.renderTarget&&this.renderTarget.destroy(),this.renderTarget=this.device.createTexture({label:"Weight map render target",size:{width:r,height:s},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.renderTargetView=this.renderTarget.createView(),this.renderTargetSize=[r,s],this.renderTargetView)}recordComputePass(e,t){const r=t.weightsBuffer?1:0;this.device.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([t.baseOffset,t.numPoints,r,0]));const s=this.device.createBindGroup({label:"Weight similarity compute bg",layout:this.computeBindGroupLayout,entries:[{binding:0,resource:{buffer:this.queryUniform}},{binding:1,resource:{buffer:t.weightsBuffer??this.dummyWeights}},{binding:2,resource:{buffer:t.similarityBuffer}},{binding:3,resource:{buffer:this.paramsUniform}},{binding:4,resource:{buffer:this.gramUniform}},{binding:5,resource:{buffer:this.softmaxUniform}}]}),i=e.beginComputePass({label:"weight similarity compute"});i.setPipeline(this.computePipeline),i.setBindGroup(0,s);const a=Math.ceil(t.numPoints/256);i.dispatchWorkgroups(a,1,1),i.end()}recordRenderPass(e,t){const r=this.ensureRenderTarget(t.width,t.height),s=!!t.useDepth&&!!t.depthView;(!this.renderBindGroup||this.lastRenderBindings.splat2d!==t.splat2DBuffer||this.lastRenderBindings.similarity!==t.similarityBuffer||this.lastRenderBindings.source!==t.sourceIndicesBuffer)&&(this.renderBindGroup=this.device.createBindGroup({label:"Weight map render bg",layout:this.renderBindGroupLayout,entries:[{binding:2,resource:{buffer:t.splat2DBuffer}},{binding:3,resource:{buffer:t.similarityBuffer}},{binding:4,resource:{buffer:t.sourceIndicesBuffer}}]}),this.lastRenderBindings={splat2d:t.splat2DBuffer,similarity:t.similarityBuffer,source:t.sourceIndicesBuffer});const i={colorAttachments:[{view:r,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};s&&t.depthView&&t.depthFormat&&(i.depthStencilAttachment={view:t.depthView,depthLoadOp:"load",depthStoreOp:"store",depthClearValue:1},(!this.renderPipelineDepth||this.renderPipelineDepth._depthFormat!==t.depthFormat)&&(this.renderPipelineDepth=this.createDepthPipeline(t.depthFormat),this.renderPipelineDepth._depthFormat=t.depthFormat));const a=e.beginRenderPass(i);return a.setBindGroup(0,this.renderBindGroup),a.setBindGroup(1,t.sortRenderBindGroup),a.setPipeline(s&&this.renderPipelineDepth?this.renderPipelineDepth:this.renderPipeline),a.drawIndirect(t.drawIndirectBuffer,0),a.end(),r}createComputePipeline(){this.computeBindGroupLayout=this.device.createBindGroupLayout({label:"Weight similarity compute BGL",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});const e=this.device.createPipelineLayout({label:"Weight similarity compute layout",bindGroupLayouts:[this.computeBindGroupLayout]}),t=this.device.createShaderModule({label:"Weight similarity compute shader",code:fa});this.computePipeline=this.device.createComputePipeline({label:"Weight similarity compute pipeline",layout:e,compute:{module:t,entryPoint:"main"}})}createRenderPipeline(){this.renderBindGroupLayout=this.device.createBindGroupLayout({label:"Weight map render BGL",entries:[{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});const e=this.device.createShaderModule({label:"Gaussian similarity shader",code:Et}),t=this.device.createPipelineLayout({label:"Weight map render pipeline layout",bindGroupLayouts:[this.renderBindGroupLayout,Se.createRenderBindGroupLayout(this.device)]});this.renderPipeline=this.device.createRenderPipeline({label:"Weight map render pipeline",layout:t,vertex:{module:e,entryPoint:"vs_main",buffers:[]},fragment:{module:e,entryPoint:"fs_main",targets:[{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},multisample:{}})}createDepthPipeline(e){const t=this.device.createShaderModule({label:"Gaussian similarity shader (depth)",code:Et}),r=this.device.createPipelineLayout({label:"Weight map render pipeline layout (depth)",bindGroupLayouts:[this.renderBindGroupLayout,Se.createRenderBindGroupLayout(this.device)]});return this.device.createRenderPipeline({label:`Weight map render pipeline (depth-${e})`,layout:r,vertex:{module:t,entryPoint:"vs_main",buffers:[]},fragment:{module:t,entryPoint:"fs_main",targets:[{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},depthStencil:{format:e,depthWriteEnabled:!1,depthCompare:"less"},multisample:{}})}}function $r(l){const e=new ArrayBuffer(l.byteLength);return new Uint8Array(e).set(new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),e}class wa{device;format;computePipeline;computeBindGroupLayout;renderPipeline;renderPipelineDepth=null;renderBindGroupLayout;renderBindGroup=null;lastRenderBindings={};queryUniform;gramUniform;paramsUniform;dummyWeights;renderTarget=null;renderTargetView=null;renderTargetSize=[0,0];constructor(e,t){this.device=e,this.format=t,this.queryUniform=e.createBuffer({label:"NumDen2 query uniform",size:256,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.gramUniform=e.createBuffer({label:"NumDen2 gram uniform (C*C^T)",size:4096*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.paramsUniform=e.createBuffer({label:"NumDen2 params uniform",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummyWeights=e.createBuffer({label:"NumDen2 dummy buffer",size:256,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.queryUniform,0,new Float32Array(64)),e.queue.writeBuffer(this.gramUniform,0,new Float32Array(4096)),e.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([0,0,0,0]))}initialize(){this.createComputePipeline(),this.createRenderPipeline()}setQueryWeights(e){if(e.length!==64){console.warn("[WeightNumDen2Pass] Query weights must be length 64.");return}this.device.queue.writeBuffer(this.queryUniform,0,$r(e))}setGramMatrix(e){if(e.length!==4096){console.warn("[WeightNumDen2Pass] Gram matrix must be length 4096 (64x64).");return}this.device.queue.writeBuffer(this.gramUniform,0,$r(e))}getRenderTarget(){return this.renderTarget}recordComputePass(e,t){if(!this.computePipeline)return;const r=t.weightsBuffer?1:0;this.device.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([t.baseOffset,t.numPoints,r,0]));const s=this.device.createBindGroup({label:"NumDen2 compute bg",layout:this.computeBindGroupLayout,entries:[{binding:0,resource:{buffer:this.queryUniform}},{binding:1,resource:{buffer:t.weightsBuffer??this.dummyWeights}},{binding:2,resource:{buffer:t.numDen2Buffer}},{binding:3,resource:{buffer:this.paramsUniform}},{binding:4,resource:{buffer:this.gramUniform}}]}),i=e.beginComputePass({label:"NumDen2 compute pass"});i.setPipeline(this.computePipeline),i.setBindGroup(0,s),i.dispatchWorkgroups(Math.ceil(t.numPoints/256)),i.end()}recordRenderPass(e,t){if(this.ensureRenderTarget(t.width,t.height),!this.renderTargetView)return;(!this.renderBindGroup||this.lastRenderBindings.splat2d!==t.splat2DBuffer||this.lastRenderBindings.numden2!==t.numDen2Buffer||this.lastRenderBindings.source!==t.sourceIndicesBuffer)&&(this.renderBindGroup=this.device.createBindGroup({label:"NumDen2 render bg",layout:this.renderBindGroupLayout,entries:[{binding:2,resource:{buffer:t.splat2DBuffer}},{binding:3,resource:{buffer:t.numDen2Buffer}},{binding:4,resource:{buffer:t.sourceIndicesBuffer}}]}),this.lastRenderBindings={splat2d:t.splat2DBuffer,numden2:t.numDen2Buffer,source:t.sourceIndicesBuffer});const r={label:"NumDen2 render pass",colorAttachments:[{view:this.renderTargetView,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]},s=!!t.useDepth&&!!t.depthView&&!!t.depthFormat;s&&(r.depthStencilAttachment={view:t.depthView,depthLoadOp:"load",depthStoreOp:"store"});const i=e.beginRenderPass(r);i.setBindGroup(0,this.renderBindGroup),i.setBindGroup(1,t.sortRenderBindGroup),i.setPipeline(s?this.getDepthPipeline(t.depthFormat):this.renderPipeline),i.drawIndirect(t.drawIndirectBuffer,0),i.end()}createComputePipeline(){this.computeBindGroupLayout=this.device.createBindGroupLayout({label:"NumDen2 compute BGL",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});const e=this.device.createPipelineLayout({label:"NumDen2 compute layout",bindGroupLayouts:[this.computeBindGroupLayout]}),t=this.device.createShaderModule({label:"NumDen2 compute shader",code:pa});this.computePipeline=this.device.createComputePipeline({label:"NumDen2 compute pipeline",layout:e,compute:{module:t,entryPoint:"main"}})}createRenderPipeline(){this.renderBindGroupLayout=this.device.createBindGroupLayout({label:"NumDen2 render BGL",entries:[{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});const e=this.device.createShaderModule({label:"Gaussian numden2 shader",code:Or}),t=this.device.createPipelineLayout({label:"NumDen2 render pipeline layout",bindGroupLayouts:[this.renderBindGroupLayout,Se.createRenderBindGroupLayout(this.device)]});this.renderPipeline=this.device.createRenderPipeline({label:"NumDen2 render pipeline",layout:t,vertex:{module:e,entryPoint:"vs_main",buffers:[]},fragment:{module:e,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},multisample:{}})}getDepthPipeline(e){if(this.renderPipelineDepth&&this.renderPipelineDepth.__depthFormat===e)return this.renderPipelineDepth;const t=this.device.createShaderModule({label:"Gaussian numden2 shader (depth)",code:Or}),r=this.device.createPipelineLayout({label:"NumDen2 render pipeline layout (depth)",bindGroupLayouts:[this.renderBindGroupLayout,Se.createRenderBindGroupLayout(this.device)]}),s=this.device.createRenderPipeline({label:`NumDen2 render pipeline (depth-${e})`,layout:r,vertex:{module:t,entryPoint:"vs_main",buffers:[]},fragment:{module:t,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},depthStencil:{format:e,depthWriteEnabled:!1,depthCompare:"less"},multisample:{}});return s.__depthFormat=e,this.renderPipelineDepth=s,s}ensureRenderTarget(e,t){this.renderTarget&&this.renderTargetView&&this.renderTargetSize[0]===e&&this.renderTargetSize[1]===t||(this.renderTarget?.destroy(),this.renderTarget=this.device.createTexture({label:"NumDen2 render target",size:{width:e,height:t},format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.renderTargetView=this.renderTarget.createView(),this.renderTargetSize=[e,t])}}function Wr(l){const e=new ArrayBuffer(l.byteLength);return new Uint8Array(e).set(new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),e}class ba{device;format;computePipeline;computeBindGroupLayout;renderPipeline;renderPipelineDepth=null;renderBindGroupLayout;renderBindGroup=null;lastRenderBindings={};queriesUniform;gramUniform;cfgUniform;paramsUniform;dummyWeights;renderTarget=null;renderTargetView=null;renderTargetSize=[0,0];constructor(e,t){this.device=e,this.format=t,this.queriesUniform=e.createBuffer({label:"Relevancy queries uniform (pos+4 neg)",size:1280,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.gramUniform=e.createBuffer({label:"Relevancy gram uniform (C*C^T)",size:4096*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.cfgUniform=e.createBuffer({label:"Relevancy cfg uniform",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.paramsUniform=e.createBuffer({label:"Relevancy params uniform",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummyWeights=e.createBuffer({label:"Relevancy dummy weights buffer",size:256,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.queriesUniform,0,new Float32Array(320)),e.queue.writeBuffer(this.gramUniform,0,new Float32Array(4096)),e.queue.writeBuffer(this.cfgUniform,0,new Float32Array([10,0,0,0])),e.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([0,0,0,0]))}initialize(){this.createComputePipeline(),this.createRenderPipeline()}setGramMatrix(e){if(e.length!==4096){console.warn("[WeightRelevancyPass] Gram matrix must be length 4096 (64x64).");return}this.device.queue.writeBuffer(this.gramUniform,0,Wr(e))}setQueriesPacked(e){if(e.length!==320){console.warn("[WeightRelevancyPass] Queries packed must be length 320 (5x64).");return}const t=new Float32Array(320);t.set(e),this.device.queue.writeBuffer(this.queriesUniform,0,Wr(t))}setConfig(e,t,r){const s=Number.isFinite(t)?Math.max(1e-6,t):10,i=r>>>0,a=new Float32Array(new Uint32Array([i]).buffer)[0];this.device.queue.writeBuffer(this.cfgUniform,0,new Float32Array([s,a,e?1:0,0]))}getRenderTarget(){return this.renderTarget}recordComputePass(e,t){if(!this.computePipeline)return;const r=t.weightsBuffer?1:0;this.device.queue.writeBuffer(this.paramsUniform,0,new Uint32Array([t.baseOffset,t.numPoints,r,0]));const s=this.device.createBindGroup({label:"Relevancy compute bg",layout:this.computeBindGroupLayout,entries:[{binding:0,resource:{buffer:this.queriesUniform}},{binding:1,resource:{buffer:t.weightsBuffer??this.dummyWeights}},{binding:2,resource:{buffer:t.similarityBuffer}},{binding:3,resource:{buffer:this.paramsUniform}},{binding:4,resource:{buffer:this.gramUniform}},{binding:6,resource:{buffer:this.cfgUniform}}]}),i=e.beginComputePass({label:"Relevancy compute pass"});i.setPipeline(this.computePipeline),i.setBindGroup(0,s),i.dispatchWorkgroups(Math.ceil(t.numPoints/256)),i.end()}recordRenderPass(e,t){if(this.ensureRenderTarget(t.width,t.height),!this.renderTargetView)return;(!this.renderBindGroup||this.lastRenderBindings.splat2d!==t.splat2DBuffer||this.lastRenderBindings.similarity!==t.similarityBuffer||this.lastRenderBindings.source!==t.sourceIndicesBuffer)&&(this.renderBindGroup=this.device.createBindGroup({label:"Relevancy render bg",layout:this.renderBindGroupLayout,entries:[{binding:2,resource:{buffer:t.splat2DBuffer}},{binding:3,resource:{buffer:t.similarityBuffer}},{binding:4,resource:{buffer:t.sourceIndicesBuffer}}]}),this.lastRenderBindings={splat2d:t.splat2DBuffer,similarity:t.similarityBuffer,source:t.sourceIndicesBuffer});const r={label:"Relevancy render pass",colorAttachments:[{view:this.renderTargetView,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]},s=!!t.useDepth&&!!t.depthView&&!!t.depthFormat;s&&(r.depthStencilAttachment={view:t.depthView,depthLoadOp:"load",depthStoreOp:"store"});const i=e.beginRenderPass(r);i.setBindGroup(0,this.renderBindGroup),i.setBindGroup(1,t.sortRenderBindGroup),i.setPipeline(s?this.getDepthPipeline(t.depthFormat):this.renderPipeline),i.drawIndirect(t.drawIndirectBuffer,0),i.end()}createComputePipeline(){this.computeBindGroupLayout=this.device.createBindGroupLayout({label:"Relevancy compute BGL",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});const e=this.device.createPipelineLayout({label:"Relevancy compute layout",bindGroupLayouts:[this.computeBindGroupLayout]}),t=this.device.createShaderModule({label:"Relevancy compute shader",code:ma});this.computePipeline=this.device.createComputePipeline({label:"Relevancy compute pipeline",layout:e,compute:{module:t,entryPoint:"main"}})}createRenderPipeline(){this.renderBindGroupLayout=this.device.createBindGroupLayout({label:"Relevancy render BGL",entries:[{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});const e=this.device.createShaderModule({label:"Gaussian similarity shader (relevancy map)",code:Et}),t=this.device.createPipelineLayout({label:"Relevancy render pipeline layout",bindGroupLayouts:[this.renderBindGroupLayout,Se.createRenderBindGroupLayout(this.device)]});this.renderPipeline=this.device.createRenderPipeline({label:"Relevancy render pipeline",layout:t,vertex:{module:e,entryPoint:"vs_main",buffers:[]},fragment:{module:e,entryPoint:"fs_main",targets:[{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},multisample:{}})}getDepthPipeline(e){if(this.renderPipelineDepth&&this.renderPipelineDepth.__depthFormat===e)return this.renderPipelineDepth;const t=this.device.createShaderModule({label:"Gaussian similarity shader (relevancy map, depth)",code:Et}),r=this.device.createPipelineLayout({label:"Relevancy render pipeline layout (depth)",bindGroupLayouts:[this.renderBindGroupLayout,Se.createRenderBindGroupLayout(this.device)]}),s=this.device.createRenderPipeline({label:`Relevancy render pipeline (depth-${e})`,layout:r,vertex:{module:t,entryPoint:"vs_main",buffers:[]},fragment:{module:t,entryPoint:"fs_main",targets:[{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},depthStencil:{format:e,depthWriteEnabled:!1,depthCompare:"less"},multisample:{}});return s.__depthFormat=e,this.renderPipelineDepth=s,s}ensureRenderTarget(e,t){this.renderTarget&&this.renderTargetView&&this.renderTargetSize[0]===e&&this.renderTargetSize[1]===t||(this.renderTarget?.destroy(),this.renderTarget=this.device.createTexture({label:"Relevancy render target",size:{width:e,height:t},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.renderTargetView=this.renderTarget.createView(),this.renderTargetSize=[e,t])}}const _a=.3;let Pa=class{device;format;shDegree;compressed;debug;pipeline;pipelineDepth;useDepth=!1;depthFormat="depth24plus";pipelineLayout;drawIndirectBuffer;sorter;preprocessorSH;preprocessorRGB;sortResourcesCache=new WeakMap;globalCapacity=0;globalBuffers=null;weightPass=null;weightMapEnabled=!1;numDen2Pass=null;weightMapApprox2Enabled=!1;relevancyPass=null;weightMapRelevancyEnabled=!1;weightSoftmaxEnabled=!1;weightSoftmaxTemperature=1;constructor(e,t,r,s=!1){"device"in e?(this.device=e.device,this.format=e.format,this.shDegree=e.shDegree,this.compressed=e.compressed??!1,this.debug=e.debug??!1):(this.device=e,this.format=t,this.shDegree=r,this.compressed=s,this.debug=!1)}async ensureSorter(){await this.initialize()}async initialize(){await this.initializeSorter(),await this.initializePreprocessor(),this.createPipelineLayout(),this.createRenderPipeline(),this.createIndirectDrawBuffer(),this.ensureGlobalCapacity(1e6);try{globalThis.gaussianRenderer=this}catch{}this.debug&&console.log(`GaussianRenderer initialized: ${this.format}, SH degree ${this.shDegree}, global capacity ${this.globalCapacity}`)}render(e,t){const r=this.getSortResources(t);e.setBindGroup(0,t.renderBindGroup()),e.setBindGroup(1,r.sorter_render_bg),e.setPipeline(this.useDepth&&this.pipelineDepth?this.pipelineDepth:this.pipeline),e.drawIndirect(this.drawIndirectBuffer,0)}setDepthEnabled(e){this.useDepth=!!e}setDepthFormat(e){this.depthFormat!==e&&(this.depthFormat=e,this.createDepthPipeline(),globalThis.GS_DEPTH_DEBUG&&(console.log("[GaussianRenderer] Depth format changed to:",e),console.log("[GaussianRenderer] Depth pipeline recreated")))}createDepthPipeline(){const e=this.device.createShaderModule({label:"Gaussian Shader Module",code:Ar});this.pipelineDepth=this.device.createRenderPipeline({label:`Gaussian Render Pipeline (Depth-${this.depthFormat})`,layout:this.pipelineLayout,vertex:{module:e,entryPoint:"vs_main",buffers:[]},fragment:{module:e,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},depthStencil:{format:this.depthFormat,depthWriteEnabled:!1,depthCompare:"less"},multisample:{}})}getPipelineInfo(){return{format:this.format,bindGroupLayouts:[$e.renderBindGroupLayout(this.device),Se.createRenderBindGroupLayout(this.device)]}}getRenderStats(e){const t=this.sortResourcesCache.get(e);return{gaussianCount:e.numPoints,visibleSplats:t?.num_points??0,memoryUsage:this.estimateMemoryUsage(e)}}prepareMulti(e,t,r,s){if(r.length===0)return;const i=[];let a=0;for(const o of r)i.push(a),a+=o.numPoints;if(this._dlog("[prepareMulti] total points =",a,"offsets =",i),this.ensureGlobalCapacity(a),!!this.globalBuffers){this._dlog("[prepareMulti] using global capacity =",this.globalCapacity),this.weightMapEnabled&&this.ensureWeightPass(),this.weightMapApprox2Enabled&&this.ensureNumDen2Pass(),this.weightMapRelevancyEnabled&&this.ensureRelevancyPass(),this.sorter.recordResetIndirectBuffer(this.globalBuffers.sortStuff.sorter_dis,this.globalBuffers.sortStuff.sorter_uni,t);for(let o=0;o<r.length;o++){const n=r[o],c=i[o];this._dlog(`[prepareMulti] dispatch model #${o} baseOffset=${c} count=${n.numPoints}`);let h;"countBuffer"in n&&typeof n.countBuffer=="function"&&(h=n.countBuffer(),h&&this._dlog(`[prepareMulti] Model #${o} has ONNX count buffer`));const u=this.getColorMode(n)==="rgb"?this.preprocessorRGB:this.preprocessorSH,d=this.buildRenderSettings(n,s);if(u.dispatchModel({camera:s.camera,viewport:s.viewport,pointCloud:n,sortStuff:this.globalBuffers.sortStuff,settings:d,modelMatrix:n.transform,baseOffset:c,global:{splat2D:this.globalBuffers.splat2D},countBuffer:h},e),this.weightMapEnabled&&this.weightPass&&this.globalBuffers){const p=n.getWeightBuffer?.()??null;this.weightPass.recordComputePass(e,{weightsBuffer:p,similarityBuffer:this.globalBuffers.similarity,baseOffset:c,numPoints:n.numPoints})}if(this.weightMapApprox2Enabled&&this.numDen2Pass&&this.globalBuffers){const p=n.getWeightBuffer?.()??null;this.numDen2Pass.recordComputePass(e,{weightsBuffer:p,numDen2Buffer:this.globalBuffers.numDen2,baseOffset:c,numPoints:n.numPoints})}if(this.weightMapRelevancyEnabled&&this.relevancyPass&&this.globalBuffers){const p=n.getWeightBuffer?.()??null;this.relevancyPass.recordComputePass(e,{weightsBuffer:p,similarityBuffer:this.globalBuffers.similarity,baseOffset:c,numPoints:n.numPoints})}}this.sorter.recordSortIndirect(this.globalBuffers.sortStuff,this.globalBuffers.sortStuff.sorter_dis,e),e.copyBufferToBuffer(this.globalBuffers.sortStuff.sorter_uni,0,this.drawIndirectBuffer,4,4),this._dlog("[prepareMulti] recorded global sort & updated instanceCount from sorter_uni")}}renderMulti(e,t){this.globalBuffers&&(e.setBindGroup(0,this.globalBuffers.renderBG),e.setBindGroup(1,this.globalBuffers.sortStuff.sorter_render_bg),e.setPipeline(this.useDepth&&this.pipelineDepth?this.pipelineDepth:this.pipeline),e.drawIndirect(this.drawIndirectBuffer,0))}setWeightMapEnabled(e){this.weightMapEnabled=!!e,this.weightMapEnabled&&this.ensureWeightPass()}setWeightMapApprox2Enabled(e){this.weightMapApprox2Enabled=!!e,this.weightMapApprox2Enabled&&this.ensureNumDen2Pass()}setWeightMapRelevancyEnabled(e){this.weightMapRelevancyEnabled=!!e,this.weightMapRelevancyEnabled&&this.ensureRelevancyPass()}setWeightSoftmaxConfig(e,t=1){this.weightSoftmaxEnabled=!!e,this.weightSoftmaxTemperature=Number.isFinite(t)?Math.max(1e-6,t):1,this.ensureWeightPass(),this.weightPass?.setSoftmaxConfig(this.weightSoftmaxEnabled,this.weightSoftmaxTemperature)}setWeightQueryWeights(e,t){this.ensureWeightPass(),this.weightPass?.setQueryWeights(e),t&&this.weightPass?.setGramMatrix(t)}setWeightQueryNumDen2(e,t){this.ensureNumDen2Pass(),this.numDen2Pass?.setQueryWeights(e),t&&this.numDen2Pass?.setGramMatrix(t)}setWeightRelevancyData(e,t,r=!0,s=10,i=15){this.ensureRelevancyPass(),t&&this.relevancyPass?.setGramMatrix(t),this.relevancyPass?.setQueriesPacked(e),this.relevancyPass?.setConfig(r,s,i)}recordWeightMapPass(e,t,r){return!this.weightMapEnabled||!this.weightPass||!this.globalBuffers?null:(this.weightPass.recordRenderPass(e,{splat2DBuffer:this.globalBuffers.splat2D,similarityBuffer:this.globalBuffers.similarity,sourceIndicesBuffer:this.globalBuffers.sortStuff.source_indices,sortRenderBindGroup:this.globalBuffers.sortStuff.sorter_render_bg,drawIndirectBuffer:this.drawIndirectBuffer,width:t[0],height:t[1],depthView:r,depthFormat:this.depthFormat,useDepth:this.useDepth}),this.weightPass.getRenderTarget())}recordWeightMapApprox2Pass(e,t,r){return!this.weightMapApprox2Enabled||!this.numDen2Pass||!this.globalBuffers?null:(this.numDen2Pass.recordRenderPass(e,{splat2DBuffer:this.globalBuffers.splat2D,numDen2Buffer:this.globalBuffers.numDen2,sourceIndicesBuffer:this.globalBuffers.sortStuff.source_indices,sortRenderBindGroup:this.globalBuffers.sortStuff.sorter_render_bg,drawIndirectBuffer:this.drawIndirectBuffer,width:t[0],height:t[1],depthView:r,depthFormat:this.depthFormat,useDepth:this.useDepth}),this.numDen2Pass.getRenderTarget())}recordWeightMapRelevancyPass(e,t,r){return!this.weightMapRelevancyEnabled||!this.relevancyPass||!this.globalBuffers?null:(this.relevancyPass.recordRenderPass(e,{splat2DBuffer:this.globalBuffers.splat2D,similarityBuffer:this.globalBuffers.similarity,sourceIndicesBuffer:this.globalBuffers.sortStuff.source_indices,sortRenderBindGroup:this.globalBuffers.sortStuff.sorter_render_bg,drawIndirectBuffer:this.drawIndirectBuffer,width:t[0],height:t[1],depthView:r,depthFormat:this.depthFormat,useDepth:this.useDepth}),this.relevancyPass.getRenderTarget())}async initializeSorter(){this.sorter=await Se.create(this.device,this.device.queue)}async initializePreprocessor(){this.preprocessorSH=new Lr,await this.preprocessorSH.initialize(this.device,this.shDegree,!1),this.preprocessorRGB=new Lr,await this.preprocessorRGB.initialize(this.device,0,!0),console.log("Initialized dual preprocessors: SH and RGB modes")}getColorMode(e){return e.colorMode}createPipelineLayout(){this.pipelineLayout=this.device.createPipelineLayout({label:"Gaussian Renderer Pipeline Layout",bindGroupLayouts:[$e.renderBindGroupLayout(this.device),Se.createRenderBindGroupLayout(this.device)]})}createRenderPipeline(){const e=this.device.createShaderModule({label:"Gaussian Shader Module",code:Ar});this.pipeline=this.device.createRenderPipeline({label:"Gaussian Render Pipeline",layout:this.pipelineLayout,vertex:{module:e,entryPoint:"vs_main",buffers:[]},fragment:{module:e,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip",frontFace:"ccw"},multisample:{}}),this.createDepthPipeline()}createIndirectDrawBuffer(){this.drawIndirectBuffer=this.device.createBuffer({label:"Gaussian Indirect Draw Buffer",size:16,usage:GPUBufferUsage.INDIRECT|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.device.queue.writeBuffer(this.drawIndirectBuffer,0,new Uint32Array([4,0,0,0]))}getSortResources(e){let t=this.sortResourcesCache.get(e);return(!t||t.num_points!==e.numPoints)&&(t=this.sorter.createSortStuff(this.device,e.numPoints),this.sortResourcesCache.set(e,t),this.debug&&console.log(`Created sort resources for ${e.numPoints} points`)),t}buildRenderSettings(e,t){const r=e.bbox,s=e.center,i=r.min,a=r.max,o=Math.max(Math.abs(a[0]-i[0]),Math.abs(a[1]-i[1]),Math.abs(a[2]-i[2]));return{maxSHDegree:Math.min(t.maxSHDegree??e.shDeg,this.shDegree),showEnvMap:t.showEnvMap??!0,mipSplatting:t.mipSplatting??e.mipSplatting??!1,kernelSize:t.kernelSize??e.kernelSize??_a,walltime:t.walltime??1,sceneExtend:t.sceneExtend??o,center:new Float32Array([t.sceneCenter?.[0]??s[0],t.sceneCenter?.[1]??s[1],t.sceneCenter?.[2]??s[2]]),clippingBoxMin:new Float32Array([t.clippingBox?.min[0]??i[0],t.clippingBox?.min[1]??i[1],t.clippingBox?.min[2]??i[2]]),clippingBoxMax:new Float32Array([t.clippingBox?.max[0]??a[0],t.clippingBox?.max[1]??a[1],t.clippingBox?.max[2]??a[2]])}}estimateMemoryUsage(e){const t=e.numPoints*128,r=e.numPoints*8*2;return t+r}async ensureGlobalCapacity(e){const t=Math.max(1,e);if(this.globalBuffers&&t<=this.globalCapacity){const h=this.globalBuffers;h.numDen2||(h.numDen2=this.device.createBuffer({label:`global/numDen2(cap=${this.globalCapacity})`,size:this.globalCapacity*8,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}));return}this._dlog("[ensureGlobalCapacity] grow needed. needed=",t,"oldCap=",this.globalCapacity);const r=Math.ceil(t*1.25);if(this.globalBuffers){try{this.globalBuffers.splat2D.destroy()}catch{}try{this.globalBuffers.similarity?.destroy?.()}catch{}try{this.globalBuffers.numDen2?.destroy?.()}catch{}this.globalBuffers=null}for(;!this.sorter;)await new Promise(h=>setTimeout(h,100));const s=this.sorter.createSortStuff(this.device,r),i=this.device.createBuffer({label:`global/splat2d(cap=${r})`,size:r*hr.SPLAT_STRIDE,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),a=this.device.createBuffer({label:`global/similarity(cap=${r})`,size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),o=this.device.createBuffer({label:`global/numDen2(cap=${r})`,size:r*8,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),n=$e.renderBindGroupLayout(this.device),c=this.device.createBindGroup({label:"global/render/bg",layout:n,entries:[{binding:2,resource:{buffer:i}}]});this.globalBuffers={splat2D:i,similarity:a,numDen2:o,renderBG:c,sortStuff:s},this.globalCapacity=r,this._dlog("[ensureGlobalCapacity] new capacity =",this.globalCapacity)}ensureWeightPass(){this.weightPass||(this.weightPass=new va(this.device,this.format),this.weightPass.initialize()),this.weightPass.setSoftmaxConfig(this.weightSoftmaxEnabled,this.weightSoftmaxTemperature)}ensureNumDen2Pass(){this.numDen2Pass||(this.numDen2Pass=new wa(this.device,"rgba16float"),this.numDen2Pass.initialize())}ensureRelevancyPass(){this.relevancyPass||(this.relevancyPass=new ba(this.device,this.format),this.relevancyPass.initialize())}async readInstanceCountDebug(){const e=this.device.createBuffer({label:"debug/instanceCount",size:4,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),t=this.device.createCommandEncoder({label:"debug/enc"});t.copyBufferToBuffer(this.drawIndirectBuffer,4,e,0,4),this.device.queue.submit([t.finish()]),await this.device.queue.onSubmittedWorkDone(),await e.mapAsync(GPUMapMode.READ);const r=new Uint32Array(e.getMappedRange())[0];return e.unmap(),e.destroy(),console.log("[debug] instanceCount =",r),r}async debugONNXCount(){if(console.log("=== RENDERER DEBUG: ONNX Count Pipeline ==="),this._debugCountBuffer){const e=this.preprocessorSH;"debugCountValues"in e&&typeof e.debugCountValues=="function"&&await e.debugCountValues();const t=this._debugPointCloud;t&&console.log(`PointCloud.numPoints = ${t.numPoints}`)}else console.log("No ONNX count buffer to debug")}async readPayloadSampleDebug(e=8){if(!this.globalBuffers)throw new Error("globalBuffers not ready");const t=this.globalBuffers.sortStuff.payload_a,r=Math.min(t.size,e*4),s=this.device.createBuffer({label:"debug/payloadSample",size:r,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),i=this.device.createCommandEncoder({label:"debug/payloadEnc"});i.copyBufferToBuffer(t,0,s,0,r),this.device.queue.submit([i.finish()]),await this.device.queue.onSubmittedWorkDone(),await s.mapAsync(GPUMapMode.READ);const a=new Uint32Array(s.getMappedRange().slice(0));return s.unmap(),s.destroy(),console.log("[debug] payload[0..",e,")=",Array.from(a)),a}_dlog(...e){try{globalThis.GS_DEBUG_LOGS&&console.log(...e)}catch{}}};class Nr{viewMat=Bt();projMat=Bt();_position=new Float32Array(3);_focal=[0,0];_viewport=[1,1];transposeRotation=!0;flipProjY=!1;flipProjX=!1;compensatePreprocessYFlip=!0;projection={focal:e=>this._focal};update(e,t){e.updateMatrixWorld(),e.updateProjectionMatrix();const r=e.matrixWorldInverse.elements;for(let h=0;h<16;h++)this.viewMat[h]=r[h];this.viewMat[0]=-this.viewMat[0],this.viewMat[4]=-this.viewMat[4],this.viewMat[8]=-this.viewMat[8],this.viewMat[12]=-this.viewMat[12],this.viewMat[2]=-this.viewMat[2],this.viewMat[6]=-this.viewMat[6],this.viewMat[10]=-this.viewMat[10],this.viewMat[14]=-this.viewMat[14];const s=e.projectionMatrix.elements,i=new Float32Array(16);i[0]=-1,i[5]=1,i[10]=-1,i[15]=1;const a=new Float32Array(16);for(let h=0;h<4;h++)for(let u=0;u<4;u++){let d=0;for(let p=0;p<4;p++){const f=s[p*4+u],g=i[h*4+p];d+=f*g}a[h*4+u]=d}this.compensatePreprocessYFlip&&(a[1]=-a[1],a[5]=-a[5],a[9]=-a[9],a[13]=-a[13]);for(let h=0;h<16;h++)this.projMat[h]=a[h];e.getWorldPosition(new z).toArray(this._position);const o=(e.fov??60)*Math.PI/180,n=e.aspect&&isFinite(e.aspect)&&e.aspect>0?e.aspect:t[0]/Math.max(1,t[1]),c=2*Math.atan(Math.tan(o*.5)*n);this._viewport=t,this._focal[0]=t[0]/(2*Math.tan(c*.5)),this._focal[1]=t[1]/(2*Math.tan(o*.5))}viewMatrix(){return this.viewMat}projMatrix(){return this.projMat}position(){return this._position}frustumPlanes(){const e=new Float32Array(24);for(let t=0;t<24;t++)e[t]=t<12?1e3:-1e3;return e}}class sr{object3D;mixer;clips;transform;currentAction=null;isPlaying=!1;isPaused=!1;animationSpeed=1;timeScale=1;timeOffset=0;timeUpdateMode="variable_delta";lastUpdateTime=0;frameTime=0;constructor(e,t,r={}){this.object3D=e,this.clips=t,this.mixer=new Is(e),this.transform=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.applyTransform(),t.length>0&&(this.currentAction=this.mixer.clipAction(t[0]),this.currentAction.setLoop(gr,r.loop?1/0:1),r.autoPlay!==!1&&this.startAnimation(r.defaultSpeed||1))}applyTransform(){const e=new je;e.fromArray(this.transform),this.object3D.matrix.copy(e),this.object3D.matrixAutoUpdate=!1}setTransform(e){this.transform=new Float32Array(e),this.applyTransform()}getVertexCount(){let e=0;return this.object3D.traverse(t=>{if(t instanceof Rt){const r=t.geometry;r.attributes.position&&(e+=r.attributes.position.count)}}),e}setVisible(e){this.object3D.visible=e}getVisible(){return this.object3D.visible}setAnimationTime(e){this.currentAction&&(this.currentAction.time=e,this.mixer.update(0)),this.frameTime=e}setAnimationSpeed(e){this.animationSpeed=e,this.currentAction&&(this.currentAction.timeScale=e*this.timeScale)}getAnimationSpeed(){return this.animationSpeed}startAnimation(e){e!==void 0&&this.setAnimationSpeed(e),this.currentAction&&(this.currentAction.reset(),this.currentAction.play(),this.isPlaying=!0,this.isPaused=!1)}pauseAnimation(){this.currentAction&&(this.currentAction.paused=!0,this.isPaused=!0)}resumeAnimation(){this.currentAction&&(this.currentAction.paused=!1,this.isPaused=!1)}stopAnimation(){this.currentAction&&(this.currentAction.stop(),this.isPlaying=!1,this.isPaused=!1)}setTimeScale(e){this.timeScale=e,this.currentAction&&(this.currentAction.timeScale=this.animationSpeed*e)}getTimeScale(){return this.timeScale}setTimeOffset(e){this.timeOffset=e}getTimeOffset(){return this.timeOffset}setTimeUpdateMode(e){this.timeUpdateMode=e}getTimeUpdateMode(){return this.timeUpdateMode}getCurrentTime(){return this.currentAction?this.currentAction.time:0}supportsAnimation(){return this.clips.length>0}update(e){if(this.isPlaying&&!this.isPaused){const t=e*this.timeScale;this.mixer.update(t),this.frameTime+=t}this.lastUpdateTime=performance.now()}switchToClip(e){return e>=0&&e<this.clips.length?(this.currentAction&&this.currentAction.stop(),this.currentAction=this.mixer.clipAction(this.clips[e]),this.currentAction.setLoop(gr,1/0),this.currentAction.timeScale=this.animationSpeed*this.timeScale,this.isPlaying&&!this.isPaused&&this.currentAction.play(),!0):!1}getClipInfo(){return this.clips.map(e=>({name:e.name,duration:e.duration}))}dispose(){this.currentAction&&this.currentAction.stop(),this.mixer.stopAllAction(),this.object3D.clear()}}const xa=new URL("data:application/octet-stream;base64,CAgSB3B5dG9yY2gaBTIuNS4wOlgKNRIFZHVtbXkaCkNvbnN0YW50XzEiCENvbnN0YW50KhYKBXZhbHVlKgoIARAGSgQBAAAAoAEEEgptYWluX2dyYXBoYhMKBWR1bW15EgoKCAgGEgQKAggBQgIQEQ==",import.meta.url).toString();async function pr(){const l=globalThis;if(l.__ORT_WEBGPU_SINGLETON__)return l.__ORT_WEBGPU_SINGLETON__;try{const e=await Qt(()=>import("./vendor-onnxruntime-web-CN-YNzaW.js"),[],import.meta.url);return l.__ORT_WEBGPU_SINGLETON__=e,e}catch{return null}}async function Sa(l){const e=await pr();if(!e)return;e.env.wasm.numThreads=1,e.env.logLevel="warning",e.env.wasm.wasmPaths?console.log("[WebGPU] Using existing WASM paths:",e.env.wasm.wasmPaths):(e.env.wasm.wasmPaths=ys(),console.log("[WebGPU] Setting default WASM paths:",e.env.wasm.wasmPaths));const t=await fetch(l);if(!t.ok)throw new Error(`[ORT] Failed to fetch dummy model: ${l}`);const r=await t.arrayBuffer();await e.InferenceSession.create(r,{executionProviders:["webgpu"]})}async function Ma(l){const e=await pr();if(!e)return null;try{const t=e.env.webgpu;if(t){const r=t.device;if(r){const s=r instanceof Promise?await r:r;if(s)return console.log("[WebGPU] Reusing existing ORT device from obtainOrtDevice"),s}}}catch(t){console.warn("[WebGPU] Could not check existing ORT device:",t)}if(l.adapter)try{const t=e.env.webgpu||{};e.env.webgpu=t;const r=t.adapter;if(r){if(r!==l.adapter)try{const s=Object.getOwnPropertyDescriptor(t,"adapter");s&&s.writable!==!1?t.adapter=l.adapter:console.warn("[WebGPU] Adapter is read-only, keeping existing adapter")}catch(s){console.warn("[WebGPU] Could not update adapter (may be read-only, which is OK):",s)}}else try{t.adapter=l.adapter}catch(s){console.warn("[WebGPU] Could not set adapter (may be read-only):",s)}}catch(t){console.warn("[WebGPU] Could not access ORT webgpu environment:",t)}if(l.adapter)try{const t=e.env.webgpu||{};if(e.env.webgpu=t,!t.device){const r=await vs(l.adapter);return t.device=r,t.adapter||(t.adapter=l.adapter),console.log("[WebGPU] Created app-owned device with requiredLimits; ORT backend will use it from env.webgpu.device."),r}}catch(t){console.warn("[WebGPU] Failed to create shared device for ORT:",t)}if(l.adapter&&l.dummyModelUrl)try{const t=e.env.webgpu||{};e.env.webgpu=t,t.adapter||(t.adapter=l.adapter),await Sa(l.dummyModelUrl);const r=e.env.webgpu?.device;if(r){const s=r instanceof Promise?await r:r;if(s)return console.log("[WebGPU] ORT created device via dummy session."),s}}catch(t){console.warn("[WebGPU] Failed to obtain device via ORT dummy session:",t)}try{const t=e.env.webgpu;if(t){const r=t.device;if(r){const s=r instanceof Promise?await r:r;if(s)return s}}}catch(t){console.warn("[WebGPU] Could not get device from ORT env:",t)}return null}async function vs(l){const e=[];l.features.has("shader-f16")&&e.push("shader-f16"),l.features.has("timestamp-query")&&e.push("timestamp-query"),l.features.has("chromium-experimental-timestamp-query-inside-passes")&&e.push("chromium-experimental-timestamp-query-inside-passes");const t=l.limits,r=t.maxStorageBuffersPerShaderStage??8,s=Math.min(10,r);s<9&&console.warn(`[WebGPU] maxStorageBuffersPerShaderStage=${s} < 9; preprocess pipeline may fail on this adapter.`);const i={maxStorageBufferBindingSize:t.maxStorageBufferBindingSize,maxBufferSize:t.maxBufferSize??t.maxStorageBufferBindingSize,maxComputeWorkgroupStorageSize:Math.min(32768,t.maxComputeWorkgroupStorageSize),maxComputeInvocationsPerWorkgroup:t.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.maxComputeWorkgroupSizeZ,maxStorageBuffersPerShaderStage:s},a=await l.requestDevice({requiredFeatures:e,requiredLimits:i});return a.label||(a.label="app-device"),a}async function Ca(l,e={}){if(!navigator.gpu)return console.error("WebGPU not supported in this environment."),null;const t=await pr();let r=null,s=null;if(e.preferShareWithOrt!==!1&&t)try{const o=t.env.webgpu;if(o){const n=o.device;if(n&&(r=n instanceof Promise?await n:n,r)){const c=r.limits.maxStorageBuffersPerShaderStage??8;c<9?(console.warn(`[WebGPU] Existing ORT device maxStorageBuffersPerShaderStage=${c} < 9; ignore and re-create.`),r=null):(console.log("[WebGPU] Reusing existing ORT device for new canvas"),s=o.adapter)}}}catch(o){console.warn("[WebGPU] Could not get existing ORT device:",o)}if(r){if(!s){try{s=t?.env?.webgpu?.adapter}catch{}s||(s=await navigator.gpu.requestAdapter({powerPreference:e.adapterPowerPreference}))}}else{if(s=await navigator.gpu.requestAdapter({powerPreference:e.adapterPowerPreference}),!s)throw new Error("No WebGPU adapter found");if(e.preferShareWithOrt!==!1&&t)if(r=await Ma({adapter:s,dummyModelUrl:e.dummyModelUrl??null}),r){if(r&&!s)try{s=t.env?.webgpu?.adapter}catch{}}else{const o=!!e.allowOwnDeviceWhenOrtPresent,n="[WebGPU init] ORT detected but failed to obtain its device. "+(o?"Proceeding with app-owned device (do NOT use ORT later).":"Refusing to create a separate device to avoid future mismatch.- Provide a valid dummyModelUrl, ORdisable preferShareWithOrt, ORensure a single ORT import.");if(console.warn(n),!o)throw new Error("ORT present but cannot acquire ORT device (strict mode)")}if(!r){if(!s&&(s=await navigator.gpu.requestAdapter({powerPreference:e.adapterPowerPreference}),!s))throw new Error("No WebGPU adapter found");r=await vs(s)}}r.pushErrorScope("out-of-memory"),r.pushErrorScope("validation"),await r.popErrorScope().then(o=>console.warn("validation:",o)),await r.popErrorScope().then(o=>console.warn("oom:",o)),r.lost.then(o=>console.error("device lost:",o.message,o.reason));const i=l.getContext("webgpu");if(!i)throw new Error("Failed to get WebGPU canvas context");const a=navigator.gpu.getPreferredCanvasFormat();return i.configure({device:r,format:a,alphaMode:"premultiplied"}),console.log(`[WebGPU] initialized. format=${a}, sharedWithORT=${!!(t&&e.preferShareWithOrt!==!1)}`),{device:r,context:i,format:a}}class Ba{models=[];maxModels;constructor(e=1e4){this.maxModels=e}addModel(e){if(this.models.length>=this.maxModels)throw new Error(`Reached model limit (${this.maxModels}). Remove models before adding more.`);const t={id:`${Date.now()}-${Math.random().toString(16).slice(2,8)}`,...e};return this.models.push(t),console.log(`Model added: ${t.name} (${t.pointCount.toLocaleString()} points, ${t.modelType})`),t}removeModel(e){const t=this.models.findIndex(r=>r.id===e);if(t>=0){const r=this.models[t];return this.models.splice(t,1),console.log(`Model removed: ${r.name}`),!0}return!1}getModels(){return this.models.map(e=>({id:e.id,name:e.name,visible:e.visible,pointCount:e.pointCount||0,isDynamic:e.isDynamic,modelType:e.modelType,colorMode:e.colorMode,colorChannels:e.colorChannels}))}getModelWithPointCloud(e,t){return t?this.models.find(r=>r.id===t)||null:this.models.find(r=>r.modelType===e)||null}getFullModels(){return[...this.models]}getModelsByType(e){return this.models.filter(t=>t.modelType===e)}getVisibleModels(){return this.models.filter(e=>e.visible)}getDynamicModels(){return this.models.filter(e=>e.isDynamic)}setModelVisibility(e,t){const r=this.models.find(s=>s.id===e);return r?(r.visible=t,console.log(`Model ${r.name}: ${t?"shown":"hidden"}`),!0):!1}getTotalVisiblePoints(){return this.models.filter(e=>e.visible).reduce((e,t)=>e+t.pointCount,0)}getTotalPoints(){return this.models.reduce((e,t)=>e+t.pointCount,0)}isAtCapacity(){return this.models.length>=this.maxModels}getModelCount(){return this.models.length}getRemainingCapacity(){return Math.max(0,this.maxModels-this.models.length)}clearAllModels(){const e=this.models.length;this.models=[],console.log(`Cleared ${e} models`)}findModelByName(e){return this.models.find(t=>t.name===e)||null}setModelPosition(e,t,r,s){return this.updateModelTransform(e,{translation:xe(t,r,s)})}setModelRotation(e,t,r,s){return this.updateModelTransform(e,{rotationEuler:xe(t,r,s)})}setModelScale(e,t){const r=Array.isArray(t)?xe(Math.max(1e-4,t[0]),Math.max(1e-4,t[1]),Math.max(1e-4,t[2])):xe(Math.max(1e-4,t),Math.max(1e-4,t),Math.max(1e-4,t));return this.updateModelTransform(e,{scale:r})}setModelTransform(e,t){const r=this.models.find(s=>s.id===e);return r?(r.pointCloud.setTransform(t),console.log(`Model ${r.name} transform updated`),!0):!1}getModelPosition(e){const t=this.models.find(r=>r.id===e);if(t){const r=t.pointCloud.transform;return[r[12],r[13],r[14]]}return null}getModelRotation(e){const t=this.models.find(p=>p.id===e);if(!t)return null;const r=Wt(t.pointCloud.transform),s=Ye();if(!gt)return[0,0,0];gt(s,r);const i=2*(s[3]*s[0]+s[1]*s[2]),a=1-2*(s[0]*s[0]+s[1]*s[1]),o=Math.atan2(i,a),n=2*(s[3]*s[1]-s[2]*s[0]),c=Math.abs(n)>=1?Math.sign(n)*Math.PI/2:Math.asin(n),h=2*(s[3]*s[2]+s[0]*s[1]),u=1-2*(s[1]*s[1]+s[2]*s[2]),d=Math.atan2(h,u);return[o,c,d]}getModelScale(e){const t=this.models.find(i=>i.id===e);if(!t)return null;const r=Wt(t.pointCloud.transform),s=Ae();return yt?(yt(s,r),[s[0],s[1],s[2]]):[1,1,1]}getModelTransform(e){const t=this.models.find(r=>r.id===e);return t?t.pointCloud.transform:null}updateModelTransform(e,t){const r=this.models.find(c=>c.id===e);if(!r)return console.log(`Model with ID ${e} not found for transform update`),!1;const s=Wt(r.pointCloud.transform),i=Ae();ci?.(i,s);const a=Ae();yt?yt(a,s):et(a,1,1,1);const o=Ye();if(gt?gt(o,s):ui(o),t.translation&&_r(i,t.translation),t.scale&&_r(a,t.scale),t.rotationEuler){const c=xe(t.rotationEuler[0]*180/Math.PI,t.rotationEuler[1]*180/Math.PI,t.rotationEuler[2]*180/Math.PI);di(o,c[0],c[1],c[2])}const n=Bt();return hi(n,o,i,a),r.pointCloud.setTransform(Float32Array.from(n)),console.log(`Model ${r.name} transform updated (pos=${Array.from(i).join(",")}, scale=${Array.from(a).join(",")})`),!0}hasModelWithName(e){return this.models.some(t=>t.name===e)}generateUniqueName(e){if(!this.hasModelWithName(e))return e;let t=1,r;do r=`${e} (${t})`,t++;while(this.hasModelWithName(r));return r}}class ws{loader;modelManager;callbacks;constructor(e,t={}){this.modelManager=e,this.callbacks=t,this.loader=new Vr,console.warn("⚠️ FBXLoader 与 WebGPU 渲染器可能存在兼容性问题。如果加载失败，建议："),console.warn("1. 将 FBX 模型转换为 GLTF/GLB 格式"),console.warn("2. 使用 GLTFLoader 替代 FBXLoader"),console.warn("3. 或暂时切换到 WebGLRenderer")}async loadFromFile(e,t={}){try{if(this.showProgress(!0,"Loading FBX file...",10),this.modelManager.isAtCapacity())throw this.showProgress(!1),this.showError(`Reached model limit (${this.modelManager.getRemainingCapacity()}). Remove models before adding more.`),new Error("Model limit reached");const r=await this.loadFBXFromFile(e);this.showProgress(!0,"Processing animations...",30);const s=this.extractAnimationClips(r);this.showProgress(!0,"Creating model wrapper...",60);const i=new sr(r,s,t);this.showProgress(!0,"Registering model...",80);const a=e.name.replace(/\.[^/.]+$/,""),o=this.modelManager.generateUniqueName(a),n=this.modelManager.addModel({name:o,visible:!0,pointCloud:i,pointCount:i.getVertexCount(),isDynamic:s.length>0,modelType:"fbx"});return this.showProgress(!1),this.callbacks.onSuccess?.(n),console.log(`FBX model loaded: ${n.name} (${n.pointCount} vertices, ${s.length} animations)`),n}catch(r){this.showProgress(!1);const s=`Failed to load FBX file: ${r.message}`;throw this.showError(s),r}}async loadFromURL(e,t={}){try{if(this.showProgress(!0,"Loading FBX from URL...",10),this.modelManager.isAtCapacity())throw this.showProgress(!1),this.showError(`Reached model limit (${this.modelManager.getRemainingCapacity()}). Remove models before adding more.`),new Error("Model limit reached");const r=await this.loadFBXFromURL(e);this.showProgress(!0,"Processing animations...",30);const s=this.extractAnimationClips(r);this.showProgress(!0,"Creating model wrapper...",60);const i=new sr(r,s,t);this.showProgress(!0,"Registering model...",80);const a=e.split("/").pop()?.replace(/\.[^/.]+$/,"")||"FBX Model",o=this.modelManager.generateUniqueName(a),n=this.modelManager.addModel({name:o,visible:!0,pointCloud:i,pointCount:i.getVertexCount(),isDynamic:s.length>0,modelType:"fbx"});return this.showProgress(!1),this.callbacks.onSuccess?.(n),console.log(`FBX model loaded from URL: ${n.name} (${n.pointCount} vertices, ${s.length} animations)`),n}catch(r){this.showProgress(!1);const s=`Failed to load FBX from URL: ${r.message}`;throw this.showError(s),r}}async loadFBXFromFile(e){return new Promise((t,r)=>{const s=setTimeout(()=>{r(new Error("FBX loading timeout after 30 seconds. This might be due to WebGPU compatibility issues with FBXLoader."))},3e4),i=new FileReader;i.onload=a=>{try{const o=a.target?.result;if(!o)throw new Error("Failed to read file");console.log(`FBX file read successfully, size: ${o.byteLength} bytes`),console.log("Starting FBX parsing...");try{const n=this.loader.parse(o,"");clearTimeout(s),console.log("FBX parsing completed successfully"),t(n)}catch(n){clearTimeout(s),console.error("FBX parsing failed:",n),r(new Error(`FBX parsing error: ${n.message||n}`))}}catch(o){clearTimeout(s),console.error("Error in file read handler:",o),r(o)}},i.onerror=()=>{clearTimeout(s);const a=new Error("Failed to read file");console.error(a),r(a)},console.log(`Reading FBX file: ${e.name}, size: ${e.size} bytes`),i.readAsArrayBuffer(e)})}async loadFBXFromURL(e){return new Promise((t,r)=>{this.loader.load(e,s=>t(s),s=>{const i=s.loaded/s.total*100;this.showProgress(!0,`Loading... ${i.toFixed(1)}%`,i)},s=>r(s))})}extractAnimationClips(e){const t=[];return e.traverse(r=>{r.animations&&r.animations.length>0&&t.push(...r.animations)}),t.filter((r,s,i)=>s===i.findIndex(a=>a.name===r.name))}showProgress(e,t,r){e&&t&&r!==void 0?this.callbacks.onProgress?.(r,t):e||this.callbacks.onProgress?.(0,"")}showError(e){console.error(e),this.callbacks.onError?.(e)}}const Ta=Math.floor(1.5*1024*1024*1024);class Ua{modelManager;callbacks;constructor(e,t={}){this.modelManager=e,this.callbacks=t}async loadFile(e,t){try{if(this.showProgress(!0,"Reading file...",10),e.arrayBuffer().then(s=>{console.log("[FileLoader] First 16 bytes:",new Uint8Array(s).slice(0,16))}),this.modelManager.isAtCapacity())return this.showProgress(!1),this.showError(`Reached model limit (${this.modelManager.getRemainingCapacity()}). Remove models before adding more.`),null;const r=e.name.toLowerCase();if(bt(r)){const s=Ke(r);return console.log(`[FileLoader] Loading Gaussian format: ${s}`),await this.loadGaussianFile(e,t)}else return r.endsWith(".onnx")?(this.showError("ONNX files should be loaded through ONNXManager, not FileLoader"),null):r.endsWith(".fbx")?await this.loadFBXFile(e):(this.showProgress(!1),this.showError(`Unsupported file type: ${r}
Supported formats: ${this.getSupportedExtensions().join(", ")}`),null)}catch(r){return this.showProgress(!1),this.showError(r.message),null}}async loadSample(e,t,r){try{if(this.modelManager.isAtCapacity())return this.showError("Reached model limit. Remove models before adding more."),null;console.log("[FileLoader] Loading sample:",e,r?`(expected: ${r})`:"");let s=r;return s||(s=this.detectTypeFromFilename(e)),s&&["ply","gaussian","sog","splat","ksplat","spz","compressed.ply"].includes(s)?await this.loadGaussianUrl(e,t,s):s==="onnx"?(this.showError("ONNX files should be loaded through ONNXManager, not FileLoader"),null):(this.showError(`Unsupported file type: ${e}`),null)}catch(s){return console.error(`[FileLoader] Failed to load sample ${e}:`,s),this.showProgress(!1),this.showError(s.message),null}}detectTypeFromFilename(e){const t=e.toLowerCase();if(bt(t))return"gaussian";if(t.endsWith(".onnx"))return"onnx"}async loadLocalPly(e,t,r){if(e.size<Ta)return this.loadGaussianFile(e,t);if(this.modelManager.isAtCapacity())return this.showError("Reached model limit. Remove models before adding more."),null;const s=await new ms().loadFileStreaming(e,t,{onProgress:i=>{this.showProgress(!0,i.stage,i.progress*100),r?.(i.progress)}});return this.createGaussianModelFromGPU(s,e.name)}async createGaussianModelFromGPU(e,t){const{PointCloud:r}=await Qt(async()=>{const{PointCloud:o}=await Promise.resolve().then(()=>Fr);return{PointCloud:o}},void 0,import.meta.url);let s;try{s=new r(e.device,e.meta,{gaussianBuffer:e.gaussianBuffer,shBuffer:e.shBuffer,extraPcaBuffer:e.extraPcaBuffer,weightBuffer:e.weightBuffer})}catch(o){throw e.gaussianBuffer.destroy(),e.shBuffer.destroy(),e.extraPcaBuffer.destroy(),e.weightBuffer?.destroy(),o}const i=this.modelManager.generateUniqueName(t),a=this.modelManager.addModel({name:i,visible:!0,pointCloud:s,pointCount:s.numPoints,isDynamic:!1,modelType:"ply"});return this.showProgress(!1),console.log("[FileLoader] Streamed PLY model:",i,"points:",s.numPoints),a}async loadGaussianFile(e,t){const r=Ke(e.name)||"unknown";console.log(`[FileLoader] Loading ${r.toUpperCase()} file:`,e.name);const s=await Ut.loadFile(e,{onProgress:i=>{this.showProgress(!0,i.stage,i.progress*100)},isGaussian:!0});if(!this.isGaussianDataSource(s))throw new Error(`Loaded data is not a valid Gaussian format: ${e.name}`);return await this.createGaussianModel(s,e.name,t)}async loadGaussianUrl(e,t,r){if(e.startsWith("blob:"))return console.log("[FileLoader] Detected blob URL, using blob-to-file loading path"),await this.loadGaussianFromBlob(e,t,r);const s=Ke(e)||"unknown";console.log(`[FileLoader] Loading ${s.toUpperCase()} from URL:`,e);const i=await Ut.loadUrl(e,{onProgress:o=>{this.showProgress(!0,o.stage,o.progress*100)}});if(!this.isGaussianDataSource(i))throw new Error(`Loaded data is not a valid Gaussian format: ${e}`);const a=e.split("/").pop()||e;return await this.createGaussianModel(i,a,t)}async loadGaussianFromBlob(e,t,r){console.log(`[FileLoader] Converting blob URL to File object. Hint: ${r}`);try{const s=await fetch(e);if(!s.ok)throw new Error(`Failed to fetch blob: ${s.status} ${s.statusText}`);const i=await s.blob();let a="ply";r&&r!=="gaussian"&&(a=r,console.log("type:",a));const o=`scene-model.${a}`,n=new File([i],o,{type:"application/octet-stream"});return console.log(`[FileLoader] Created File object '${o}' from blob, delegating to loadGaussianFile`),await this.loadGaussianFile(n,t)}catch(s){throw console.error("[FileLoader] Failed to load from blob URL:",s),s}}async createGaussianModel(e,t,r){this.showProgress(!0,"Creating GPU buffers...",60);const{PointCloud:s}=await Qt(async()=>{const{PointCloud:c}=await Promise.resolve().then(()=>Fr);return{PointCloud:c}},void 0,import.meta.url),i=new s(r,e);if(typeof e.weightBuffer=="function"){const c=e.weightBuffer();if(c&&c.byteLength>0){const h=new Float32Array(c);i.setWeightBufferFromArray(r,h,64)}}const a=this.modelManager.generateUniqueName(t),o=Ke(t)||"ply",n=this.modelManager.addModel({name:a,visible:!0,pointCloud:i,pointCount:i.numPoints,isDynamic:!1,modelType:o});return this.showProgress(!0,"Initializing renderer...",90),this.showProgress(!1),console.log(`[FileLoader] Successfully created ${o.toUpperCase()} model:`,a),n}async loadFBXFile(e){try{return await new ws(this.modelManager,{onProgress:(t,r)=>this.showProgress(!0,r,t),onError:t=>this.showError(t),onSuccess:t=>console.log("[FileLoader] FBX loaded successfully:",t.name)}).loadFromFile(e)}catch(t){return this.showError(`Failed to load FBX file: ${t.message}`),null}}isFileTypeSupported(e){const t=e.toLowerCase();return bt(t)||t.endsWith(".onnx")||t.endsWith(".fbx")}getSupportedExtensions(){return[".ply",".spz",".ksplat",".splat",".sog",".compressed.ply",".onnx",".fbx"]}getFileType(e){const t=e.toLowerCase();return bt(t)?"gaussian":t.endsWith(".onnx")?"onnx":t.endsWith(".fbx")?"fbx":"unknown"}getGaussianFormat(e){return Ke(e)}setCallbacks(e){this.callbacks={...this.callbacks,...e}}showProgress(e,t,r){this.callbacks.onProgress&&this.callbacks.onProgress(e,t,r)}showError(e){this.callbacks.onError?this.callbacks.onError(e):console.error("[FileLoader] Error:",e)}validateFile(e){return e.size>1073741824?{valid:!1,error:"File too large (max 1GB)"}:this.isFileTypeSupported(e.name)?this.modelManager.isAtCapacity()?{valid:!1,error:"Model limit reached. Remove models before adding more."}:{valid:!0}:{valid:!1,error:`Unsupported file type. Supported: ${this.getSupportedExtensions().join(", ")}`}}isGaussianDataSource(e){return ra(e)}}class Ga{constructor(e){this.modelManager=e}modelManager;generators=new Map;pointClouds=new Map;async loadONNXModel(e,t,r,s,i,a={}){console.log(a),console.log(`Loading ONNX model from: ${t}`);const{staticInference:o=!0,maxPoints:n,debugLogging:c=!1}=a,h=new na({modelUrl:t,maxPoints:n,debugLogging:c,precisionConfig:a.precisionConfig});await h.initialize(e);const u=h.getInputNames();if(!o&&u.length>0){const S={cameraMatrix:r,projectionMatrix:s,time:0};console.log(`Initial data for dynamic model - inputs: ${u.join(", ")}`),await h.generate(S)}else await h.generate({}),console.log(o,u.length,u),console.log("Static model - ran single inference with no inputs");const d=h.io?.actualPoints||n||0,p=h.io?.detectedColorMode||"sh",f=h.io?.detectedColorDim||48,g=h.io?.detectedColorOutputName||null,y=new ut(e,h.getGaussianBuffer(),h.getSHBuffer(),n||h.getActualMaxPoints(),h.getCountBuffer(),f,{gaussian:h.getGaussianPrecision?.(),color:h.getColorPrecision?.()}),v=h.io?.detectedPrecisionLabel||"float16",m=i||`ONNX Model (${v})`,_=this.modelManager.generateUniqueName(m);c&&(console.log("ONNX Color Detection Results:"),console.log(`  Color Mode: ${p}`),console.log(`  Color Channels: ${f}`),console.log(`  Color Output Name: ${g||"default"}`),console.log(`  Actual Points: ${d}`),console.log(`  Max Points: ${n}`)),o||(y.setOnnxGenerator(h),c&&console.log("🎬 Dynamic mode enabled - will update per frame"));const P=this.modelManager.addModel({name:_,visible:!0,pointCloud:y,pointCount:d,isDynamic:!o,modelType:"onnx",colorMode:p,colorChannels:f});return this.generators.set(P.id,h),this.pointClouds.set(P.id,y),c&&console.log(`ONNX Model '${_}' (ID: ${P.id}) registered with isolated resources - color mode: ${p} (${f} channels)`),P}async loadONNXFromFile(e,t,r,s){const i=URL.createObjectURL(t);try{const a=new Float32Array(16),o=new Float32Array(16);return fi(a,[0,0,5],[0,0,0],[0,1,0]),pi(o,Math.PI/4,16/9,.01,1e3),await this.loadONNXModel(e,i,r||a,s||o,t.name.replace(".onnx",""),{staticInference:!0,maxPoints:4e6,debugLogging:!0})}finally{URL.revokeObjectURL(i)}}async updateCameraMatrices(e,t,r){console.log(`Updating camera matrices for model: ${e}`)}disposeModel(e){const t=this.generators.get(e),r=this.pointClouds.get(e);t?.dispose(),r?.dispose?.(),this.generators.delete(e),this.pointClouds.delete(e),console.log(`ONNXManager: Disposed model ${e}`)}dispose(){for(const[e,t]of this.generators.entries())t?.dispose(),console.log(`ONNXManager: Disposed generator ${e}`);for(const[e,t]of this.pointClouds.entries())t?.dispose?.(),console.log(`ONNXManager: Disposed point cloud ${e}`);this.generators.clear(),this.pointClouds.clear(),console.log("ONNXManager: All resources disposed")}getGenerator(e){return this.generators.get(e)}getPointCloud(e){return this.pointClouds.get(e)}hasONNXModels(){return this.generators.size>0}getONNXModels(){return Array.from(this.generators.keys())}getONNXPerformanceStats(){return{modelCount:this.generators.size,totalGenerators:this.generators.size,totalPointClouds:this.pointClouds.size}}}class it extends Yr{mEntry;autoSyncEnabled=!0;_overrideLocalAabb=null;_cachedWorldAabb=null;_worldAabbDirty=!0;_gaussianScale=1;constructor(e){super(),this.mEntry=e,this.name=e.name,this.setupAutoSync()}setupAutoSync(){let e=!1,t=Date.now();const r=()=>{this.autoSyncEnabled&&!e&&(e=!0,requestAnimationFrame(()=>{this.syncTransformToGPU(),this._worldAabbDirty=!0,e=!1}))},s=this.updateMatrix.bind(this);this.updateMatrix=()=>{s();const i=Date.now();i-t>8&&(t=i,r())},this.matrixAutoUpdate=!0,this.interceptTransformMethods(r),console.log(`✅ Auto-sync setup for model: ${this.name}`)}interceptTransformMethods(e){const t=this.position.set.bind(this.position),r=this.scale.set.bind(this.scale),s=this.rotation.set.bind(this.rotation);this.position.set=(i,a,o)=>{const n=t(i,a,o);return e(),n},this.scale.set=(i,a,o)=>{const n=r(i,a,o);return e(),n},this.rotation.set=(i,a,o,n)=>{const c=s(i,a,o,n);return e(),c}}getModelId(){return this.mEntry.id}get modelName(){return this.mEntry.name}get pointCount(){return this.mEntry.pointCount}get isDynamic(){return this.mEntry.isDynamic}get modelType(){return this.mEntry.modelType}getEntry(){return this.mEntry}getPointCloud(){if(!this.mEntry?.pointCloud)throw new Error("PointCloud is not initialized");return this.mEntry.pointCloud}isGaussianModel(){const e=this.mEntry.pointCloud;return e instanceof $e||e instanceof ut}getTransformMatrix(){const e=new je;e.compose(this.position,this.quaternion,this.scale);const t=new je().makeScale(1,-1,-1);return t.premultiply(e),new Float32Array(t.elements)}syncTransformToGPU(e=0){if(!this.mEntry?.pointCloud)return;const t=this.getTransformMatrix();this.mEntry.pointCloud.setTransform(t),this.isGaussianModel()&&this.mEntry.pointCloud.updateModelParamsBuffer(t,e),globalThis.GS_DEBUG_FLAG&&console.log(`[GaussianModel] Synced transform for ${this.name}:`,{position:[this.position.x.toFixed(3),this.position.y.toFixed(3),this.position.z.toFixed(3)],rotation:[this.rotation.x.toFixed(3),this.rotation.y.toFixed(3),this.rotation.z.toFixed(3)],scale:[this.scale.x.toFixed(3),this.scale.y.toFixed(3),this.scale.z.toFixed(3)]})}setOverrideAABB(e){if(e===null)this._overrideLocalAabb=null;else if(e instanceof at)this._overrideLocalAabb=e;else{const t=xe(e.min[0],e.min[1],e.min[2]),r=xe(e.max[0],e.max[1],e.max[2]);this._overrideLocalAabb=new at(t,r)}this._worldAabbDirty=!0}getLocalAABB(){if(this._overrideLocalAabb)return this._overrideLocalAabb;const e=this.mEntry?.pointCloud;return e&&e.bbox instanceof at?e.bbox:null}getWorldAABB(){const e=this.getLocalAABB();if(!e)return null;if(this._cachedWorldAabb&&!this._worldAabbDirty)return this._cachedWorldAabb;const t=e.min,r=e.max,s=[[t[0],t[1],t[2]],[t[0],t[1],r[2]],[t[0],r[1],t[2]],[t[0],r[1],r[2]],[r[0],t[1],t[2]],[r[0],t[1],r[2]],[r[0],r[1],t[2]],[r[0],r[1],r[2]]],i=new je;i.compose(this.position,this.quaternion,this.scale);const a=new z,o=xe(1/0,1/0,1/0),n=xe(-1/0,-1/0,-1/0);for(const c of s)a.set(c[0],c[1],c[2]).applyMatrix4(i),a.x<o[0]&&(o[0]=a.x),a.y<o[1]&&(o[1]=a.y),a.z<o[2]&&(o[2]=a.z),a.x>n[0]&&(n[0]=a.x),a.y>n[1]&&(n[1]=a.y),a.z>n[2]&&(n[2]=a.z);return this._cachedWorldAabb=new at(o,n),this._worldAabbDirty=!1,this._cachedWorldAabb}async update(e,t,r){if(!(this.mEntry?.pointCloud instanceof ut))return;const s=this.getTransformMatrix();await this.mEntry.pointCloud.update(e,s,t||0,r)}setModelVisible(e){this.visible=e,this.mEntry.visible=e}getModelVisible(){return this.mEntry.visible&&this.visible}isVisible(e){return this.getModelVisible()}setAutoSync(e){this.autoSyncEnabled=e,console.log(`Auto-sync ${e?"enabled":"disabled"} for model: ${this.modelName}`)}getAutoSync(){return this.autoSyncEnabled}forceSyncToGPU(){this.syncTransformToGPU()}dispose(){this.autoSyncEnabled=!1,console.log(`🧹 GaussianModel disposed: ${this.modelName}`)}setTransform(e,t=0){console.warn("GaussianModel.setTransform() is deprecated. Modify position/rotation/scale instead."),this.mEntry.pointCloud.setTransform(e),this.isGaussianModel()&&this.mEntry.pointCloud.updateModelParamsBuffer(e,t)}setGaussianScale(e){this._gaussianScale=e,this.isGaussianModel()&&(this.mEntry.pointCloud.setGaussianScaling(e),console.log(`[GaussianModel] ${this.name} Gaussian scale set to: ${e}`))}getGaussianScale(){return this.isGaussianModel()?this.mEntry.pointCloud.getGaussianScaling():this._gaussianScale}setMaxShDeg(e){this.isGaussianModel()&&(this.mEntry.pointCloud.setMaxShDeg(e),console.log(`[GaussianModel] ${this.name} Max SH degree set to: ${e}`))}getMaxShDeg(){return this.isGaussianModel()?this.mEntry.pointCloud.getMaxShDeg():0}setKernelSize(e){this.isGaussianModel()&&(this.mEntry.pointCloud.setKernelSize(e),console.log(`[GaussianModel] ${this.name} Kernel size set to: ${e}`))}getKernelSize(){return this.isGaussianModel()?this.mEntry.pointCloud.getKernelSize():0}setOpacityScale(e){this.isGaussianModel()&&(this.mEntry.pointCloud.setOpacityScale(e),console.log(`[GaussianModel] ${this.name} Opacity scale set to: ${e}`))}getOpacityScale(){return this.isGaussianModel()?this.mEntry.pointCloud.getOpacityScale():1}setCutoffScale(e){this.isGaussianModel()&&(this.mEntry.pointCloud.setCutoffScale(e),console.log(`[GaussianModel] ${this.name} Cutoff scale set to: ${e}`))}getCutoffScale(){return this.isGaussianModel()?this.mEntry.pointCloud.getCutoffScale():1}setTimeScale(e){this.mEntry.pointCloud&&"setTimeScale"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setTimeScale(e),console.log(`[GaussianModel] ${this.name} Time scale set to: ${e}`)):console.warn(`[GaussianModel] ${this.name} does not support time scale (not a dynamic model)`)}getTimeScale(){return this.mEntry.pointCloud&&"getTimeScale"in this.mEntry.pointCloud?this.mEntry.pointCloud.getTimeScale():1}setTimeOffset(e){this.mEntry.pointCloud&&"setTimeOffset"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setTimeOffset(e),console.log(`[GaussianModel] ${this.name} Time offset set to: ${e}`)):console.warn(`[GaussianModel] ${this.name} does not support time offset (not a dynamic model)`)}setAnimationIsLoop(e){this.mEntry.pointCloud&&"setAnimationIsLoop"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setAnimationIsLoop(e),console.log(`[GaussianModel] ${this.name} Is Loop set to: ${e}`)):console.warn(`[GaussianModel] ${this.name} does not support animation is loop (not a dynamic model)`)}getTimeOffset(){return this.mEntry.pointCloud&&"getTimeOffset"in this.mEntry.pointCloud?this.mEntry.pointCloud.getTimeOffset():0}setTimeUpdateMode(e){this.mEntry.pointCloud&&"setTimeUpdateMode"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setTimeUpdateMode(e),console.log(`[GaussianModel] ${this.name} Time update mode set to: ${e}`)):console.warn(`[GaussianModel] ${this.name} does not support time update mode (not a dynamic model)`)}setRenderMode(e){this.isGaussianModel()&&(this.mEntry.pointCloud.setRenderMode(e),console.log(`[GaussianModel] ${this.name} Render mode set to: ${e}`))}getRenderMode(){if(this.isGaussianModel()){const e=this.mEntry.pointCloud;if(typeof e.getRenderMode=="function")return e.getRenderMode()}return 0}getTimeUpdateMode(){return this.mEntry.pointCloud&&"getTimeUpdateMode"in this.mEntry.pointCloud?this.mEntry.pointCloud.getTimeUpdateMode():"fixed_delta"}startAnimation(e=1){this.mEntry.pointCloud&&"startAnimation"in this.mEntry.pointCloud?(this.mEntry.pointCloud.startAnimation(e),console.log(`[GaussianModel] ${this.name} Animation started at ${e}x speed`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}pauseAnimation(){this.mEntry.pointCloud&&"pauseAnimation"in this.mEntry.pointCloud?(this.mEntry.pointCloud.pauseAnimation(),console.log(`[GaussianModel] ${this.name} Animation paused`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}resumeAnimation(){this.mEntry.pointCloud&&"resumeAnimation"in this.mEntry.pointCloud?(this.mEntry.pointCloud.resumeAnimation(),console.log(`[GaussianModel] ${this.name} Animation resumed`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}stopAnimation(){this.mEntry.pointCloud&&"stopAnimation"in this.mEntry.pointCloud?(this.mEntry.pointCloud.stopAnimation(),console.log(`[GaussianModel] ${this.name} Animation stopped`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}setAnimationTime(e){this.mEntry.pointCloud&&"setAnimationTime"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setAnimationTime(e),console.log(`[GaussianModel] ${this.name} Animation time set to ${e.toFixed(3)}s`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}setAnimationSpeed(e){this.mEntry.pointCloud&&"setAnimationSpeed"in this.mEntry.pointCloud?(this.mEntry.pointCloud.setAnimationSpeed(e),console.log(`[GaussianModel] ${this.name} Animation speed set to ${e}x`)):console.warn(`[GaussianModel] ${this.name} does not support animation (not a dynamic model)`)}getAnimationSpeed(){return this.mEntry.pointCloud&&"getAnimationSpeed"in this.mEntry.pointCloud?this.mEntry.pointCloud.getAnimationSpeed():1}isAnimationRunning(){return this.mEntry.pointCloud&&"isAnimationRunning"in this.mEntry.pointCloud?this.mEntry.pointCloud.isAnimationRunning:!1}isAnimationPaused(){return this.mEntry.pointCloud&&"isAnimationPaused"in this.mEntry.pointCloud?this.mEntry.pointCloud.isAnimationPaused:!1}}class Ea{constructor(e,t){this.fileLoader=e,this.onnxManager=t}fileLoader;onnxManager;async createFromGaussian(e,t,r,s){const i=e.backend.device,a=Ke(t);console.log(`[GaussianLoader] Loading ${a?.toUpperCase()||"GAUSSIAN"} file:`,t);const o=await this.fileLoader.loadSample(t,i,s||"gaussian");if(!o)throw new Error(`Failed to load Gaussian file: ${t}`);return r?.name&&(o.name=r.name),new it(o)}async createFromPLY(e,t,r){const s=e.backend.device,i=await this.fileLoader.loadSample(t,s,"ply");if(!i)throw new Error(`Failed to load PLY file: ${t}`);return r?.name&&(i.name=r.name),new it(i)}async createFromSPZ(e,t,r){return this.createFromGaussian(e,t,r)}async createFromKSplat(e,t,r){return this.createFromGaussian(e,t,r)}async createFromSplat(e,t,r){return this.createFromGaussian(e,t,r)}async createFromSOG(e,t,r){return this.createFromGaussian(e,t,r)}async createFromONNX(e,t,r,s,i){const a=e.backend.device,o={staticInference:!1,debugLogging:!0,...i?.onnxOptions},n=await this.onnxManager.loadONNXModel(a,t,r,s,i?.name,o);return new it(n)}async attachWeightsFromPLY(e,t,r){const s=e.backend.device,i=await new Ki().loadUrl(r),a=t.getPointCloud();if(!(a instanceof $e))throw new Error("attachWeightsFromPLY: model is not a PointCloud");i.numPoints()!==a.numPoints&&console.warn(`[GaussianLoader] Weight PLY point count (${i.numPoints()}) does not match model (${a.numPoints})`),a.setWeightBufferFromArray(s,new Float32Array(i.weightsBuffer()),64)}async createFromFile(e,t,r,s,i){if(t instanceof File)return this.createFromLocalFile(e,t,r,s);const a=i||this.fileLoader.getFileType(t);if(a==="ply")return this.createFromPLY(e,t,s);if(a==="onnx"){if(!r)throw new Error(`ONNX file ${t} requires camera matrices`);return this.createFromONNX(e,t,r.camMat,r.projMat,s)}if(["gaussian","sog","splat","ksplat","spz","compressed.ply"].includes(a))return this.createFromGaussian(e,t,s,a);throw new Error(`Unsupported file type: ${a}`)}createFromEntry(e){return new it(e)}async createFromLocalFile(e,t,r,s){const i=t.name.toLowerCase();if(i.endsWith(".onnx")){if(!r)throw new Error(`ONNX file ${t.name} requires camera matrices`);const n=URL.createObjectURL(t);try{return await this.createFromONNX(e,n,r.camMat,r.projMat,s)}finally{URL.revokeObjectURL(n)}}const a=e.backend.device,o=i.endsWith(".ply")&&!i.endsWith(".compressed.ply")?await this.fileLoader.loadLocalPly(t,a,s?.onProgress):await this.fileLoader.loadGaussianFile(t,a);if(!o)throw new Error(`Failed to load Gaussian file: ${t.name}`);return s?.name&&(o.name=s.name),new it(o)}isFormatSupported(e){return this.fileLoader.isFileTypeSupported(e)}getSupportedFormats(){return this.fileLoader.getSupportedExtensions()}detectFormat(e){return this.fileLoader.getGaussianFormat(e)}}async function Ka(l){const e=await Ca(l,{dummyModelUrl:xa,adapterPowerPreference:"high-performance",allowOwnDeviceWhenOrtPresent:!1});if(!e)return Promise.reject("initWebGPU_onnx failed!");const t=new Xr({canvas:l,antialias:!0,forceWebGL:!1,context:e.context,device:e.device});return await t.init(),t.setClearColor(new Ct("#808080"),1),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(l.clientWidth,l.clientHeight,!1),console.log("Init ThreeJS Successfully!","Width:",l.clientWidth,"Height",l.clientHeight),t}class ir extends Rt{renderer;gaussianModels;pcs=null;threeRenderer;threeScene;device;canvasFormat;sceneDepthRT=null;sceneDepthTexture=null;autoDepthMode=!0;occluderMeshes=[];occluderScene=new Hs;gizmoOverlayRT=null;overlaySampler=null;overlayBindGroupLayout=null;overlayPipeline=null;overlayRenderedThisFrame=!1;postProcessEnabled=!1;postProcessTarget=null;postProcessTargetView=null;postProcessTargetWidth=0;postProcessTargetHeight=0;postProcessTargetWrittenThisFrame=!1;postProcessSampler=null;postProcessBindGroupLayout=null;postProcessPipeline=null;postProcessFragmentWGSL=null;postProcessUsesDepth=!1;postProcessUsesExtraTexture=!1;postProcessUsesUniform=!1;postProcessExtraTexture=null;postProcessExtraSampler=null;postProcessUniformBuffer=null;dummyPostProcessExtraTexture=null;weightOverlayEnabled=!1;weightOverlayApprox2Enabled=!1;weightOverlayUseRelevancy=!1;weightOverlayRelevancyTau=10;weightOverlayThreshold=.25;weightOverlayOpacity=.6;weightOverlayBlendWithBase=!0;weightOverlayGain=1.5;weightOverlayColormap=0;constructor(e,t,r){super(),this.frustumCulled=!1,this.threeRenderer=e,this.threeScene=t,this.device=e.backend.device;try{this.device.onuncapturederror=i=>{const a=i.error?.message;console.error("[WebGPU] uncaptured error:",a??i.error,i.error)}}catch{}const s=navigator.gpu.getPreferredCanvasFormat();this.renderer=new Pa(this.device,s,3),this.gaussianModels=r,this.canvasFormat=s}onResize(e,t,r){}renderThreeScene(e){if(this.postProcessTargetWrittenThisFrame=!1,!this.autoDepthMode)return;const t=new Ee;this.threeRenderer.getDrawingBufferSize?.(t);const r=t.x||this.threeRenderer.domElement.width||1,s=t.y||this.threeRenderer.domElement.height||1;(!this.sceneDepthRT||this.sceneDepthRT.width!==r||this.sceneDepthRT.height!==s)&&(this.sceneDepthRT&&this.sceneDepthRT.dispose(),this.sceneDepthRT=new yr(r,s,{format:js,type:Vs,samples:1,depthBuffer:!0}),this.sceneDepthRT.texture.colorSpace=qs,this.sceneDepthTexture=new Xs(r,s,Ys),this.sceneDepthRT.depthTexture=this.sceneDepthTexture),this.threeRenderer.setRenderTarget(this.sceneDepthRT),this.threeRenderer.clear(!0,!0,!1),this.threeRenderer.render(this.threeScene,e),this.threeRenderer.setRenderTarget(null);const i=this.ensurePostProcessTarget(r,s);this.blitRenderTargetToTarget(e,i??void 0),this.postProcessTargetWrittenThisFrame=!!i}blitRenderTargetToTarget(e,t){if(this.sceneDepthRT)try{const r=this.threeRenderer.backend?.device;if(!r){console.warn("[Depth] No GPU device available for blit"),this.threeRenderer.render(this.threeScene,e);return}let s=t;if(!s){const c=this.threeRenderer.domElement.getContext("webgpu");if(!c){console.warn("[Depth] No WebGPU context available for blit"),this.threeRenderer.render(this.threeScene,e);return}s=c.getCurrentTexture().createView()}const i=this.threeRenderer.backend?.get?.(this.sceneDepthRT.texture),a=i?.texture;if(!a){console.warn("[Depth] Could not access RT color texture for blit"),this.threeRenderer.render(this.threeScene,e);return}const o=i?.format,n=this.canvasFormat;globalThis.GS_DEPTH_DEBUG,this.blitWithRenderPass(r,a,s,this.sceneDepthRT.width,this.sceneDepthRT.height),globalThis.GS_DEPTH_DEBUG}catch(r){console.warn("[Depth] Blit with render pass failed, falling back to re-render:",r),this.threeRenderer.render(this.threeScene,e)}}blitWithRenderPass(e,t,r,s,i){const a=e.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear"}),o=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]}),n=e.createBindGroup({layout:o,entries:[{binding:0,resource:t.createView()},{binding:1,resource:a}]}),c=e.createRenderPipeline({layout:e.createPipelineLayout({bindGroupLayouts:[o]}),vertex:{module:e.createShaderModule({code:`
                        @vertex
                        fn vs_main(@builtin(vertex_index) vertexIndex: u32) -> @builtin(position) vec4f {
                            var pos = array<vec2f, 6>(
                                vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),
                                vec2f(-1.0, 1.0),  vec2f(1.0, -1.0), vec2f(1.0, 1.0)
                            );
                            return vec4f(pos[vertexIndex], 0.0, 1.0);
                        }
                    `}),entryPoint:"vs_main"},fragment:{module:e.createShaderModule({code:`
                        @group(0) @binding(0) var sourceTexture: texture_2d<f32>;
                        @group(0) @binding(1) var sourceSampler: sampler;

                        // 线性空间到sRGB空间的转换函数（标准sRGB gamma校正）
                        fn linearToSRGB(linear: vec3<f32>) -> vec3<f32> {
                            return select(
                                linear * 12.92,
                                pow(max(linear, vec3<f32>(0.0)), vec3<f32>(1.0 / 2.4)) * 1.055 - 0.055,
                                linear > vec3<f32>(0.0031308)
                            );
                        }

                        @fragment
                        fn fs_main(@builtin(position) fragCoord: vec4f) -> @location(0) vec4f {
                            let texCoord = fragCoord.xy / vec2f(${s}.0, ${i}.0);
                            // RT使用HalfFloatType（16位浮点），存储的是线性空间的值
                            // HalfFloatType支持可过滤采样，精度通常足够保持高动态范围内容
                            let linearColor = textureSample(sourceTexture, sourceSampler, texCoord);
                            
                            // 关键修复：将线性空间的值转换为sRGB空间输出到canvas
                            // 使用HalfFloatType（16位浮点）支持WebGPU的过滤采样，避免验证错误
                            // 在输出时进行线性到sRGB的转换，确保颜色正确显示
                            let srgbColor = linearToSRGB(linearColor.rgb);
                            
                            return vec4<f32>(srgbColor, linearColor.a);
                        }
                    `}),entryPoint:"fs_main",targets:[{format:this.canvasFormat}]},primitive:{topology:"triangle-list"}}),h=e.createCommandEncoder({label:"RT-to-Canvas render pass"}),u=h.beginRenderPass({colorAttachments:[{view:r,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});u.setPipeline(c),u.setBindGroup(0,n),u.draw(6,1,0,0),u.end(),e.queue.submit([h.finish()])}onBeforeRender(e,t,r,s,i,a){if(!(r instanceof Yt)&&r.type!=="PerspectiveCamera"){console.log("Only THREE.PerspectiveCamera is supported!",r);return}const o=this.convertCamera(r,e),n=this.gaussianModels.filter(f=>f.isVisible(r));if(this.pcs=n.map(f=>f.getPointCloud()).filter(f=>f&&typeof f=="object"&&("numPoints"in f||"countBuffer"in f)&&!("skeletalAnimation"in f||"fbxMesh"in f)),!this.pcs||this.pcs.length===0){globalThis.GS_VIDEO_EXPORT_DEBUG&&(console.warn("[GaussianThreeJSRenderer] onBeforeRender: 没有可见的高斯点云"),console.log("[GaussianThreeJSRenderer] - gaussianModels数量:",this.gaussianModels.length),console.log("[GaussianThreeJSRenderer] - visibleModels数量:",n.length),n.forEach((f,g)=>{const y=f.getPointCloud();console.log(`[GaussianThreeJSRenderer] - 模型${g} getPointCloud返回类型:`,y.constructor.name,"is PointCloud:",y instanceof $e,"is DynamicPointCloud:",y instanceof ut,"is FBXModelWrapper:",y instanceof sr)}));return}n.forEach((f,g)=>{f.syncTransformToGPU()});const c=e.backend.device,h=c.createCommandEncoder({label:"frame"}),u=new Ee;e.getDrawingBufferSize?.(u);const d=u.x||e.getSize(new Ee).x,p=u.y||e.getSize(new Ee).y;this.renderer.prepareMulti(h,c.queue,this.pcs,{camera:o,viewport:[d,p]}),c.queue.submit([h.finish()]),this.autoDepthMode&&globalThis.GS_DEPTH_DEBUG}drawSplats(e,t,r,s,i,a){if(this.pcs==null||this.pcs.length===0)return globalThis.GS_VIDEO_EXPORT_DEBUG&&console.warn("[GaussianThreeJSRenderer] drawSplats: pcs为空或长度为0"),!1;if(!(r instanceof Yt)&&r.type!=="PerspectiveCamera")return console.warn("drawSplats: Only THREE.PerspectiveCamera is supported!",r),!1;const o=e.backend.device,n=e.backend.context.getCurrentTexture().createView();let c=n;if(this.postProcessEnabled){const[f,g]=this.getViewport(),y=this.ensurePostProcessTarget(f,g);y&&(c=y)}const h=o.createCommandEncoder({label:"GS-render"});let u;if(this.sceneDepthTexture){const f=new Ee;e.getDrawingBufferSize?.(f),f.x||e.getSize(new Ee).x,f.y||e.getSize(new Ee).y;try{const g=this.threeRenderer.backend?.get?.(this.sceneDepthTexture);globalThis.GS_DEPTH_DEBUG;const y=g?.texture,v=g?.format;y&&v?(this.renderer.setDepthFormat(v),u=y.createView(),globalThis.GS_DEPTH_DEBUG):globalThis.GS_DEPTH_DEBUG&&console.warn("[Depth] ⚠️ Could not access depth GPU texture from Three.js backend"),u&&(this.renderer.setDepthEnabled(!0),globalThis.GS_DEPTH_DEBUG)}catch(g){globalThis.GS_DEPTH_DEBUG&&console.error("[Depth] ❌ Error accessing depth texture:",g)}}else this.renderer.setDepthEnabled(!1);const d={colorAttachments:[{view:c,clearValue:{r:0,g:0,b:0,a:1},loadOp:this.postProcessEnabled&&c!==n&&!this.postProcessTargetWrittenThisFrame?"clear":"load",storeOp:"store"}]};u?d.depthStencilAttachment={view:u,depthLoadOp:"load",depthStoreOp:"store",depthClearValue:1}:globalThis.GS_DEPTH_DEBUG&&console.warn("[Depth] ⚠️ No depth view available - render pass has no depth attachment");const p=h.beginRenderPass(d);if(this.renderer.renderMulti(p,this.pcs),p.end(),this.compositeOverlayToCanvas(o,h,c),this.weightOverlayEnabled){const[f,g]=this.getViewport(),y=this.weightOverlayUseRelevancy?this.renderer.recordWeightMapRelevancyPass?.(h,[f,g],u):this.renderer.recordWeightMapPass(h,[f,g],u);y&&this.setPostProcessExtraTexture(y)}if(this.weightOverlayApprox2Enabled){const[f,g]=this.getViewport(),y=this.renderer.recordWeightMapApprox2Pass?.(h,[f,g],u);y&&this.setPostProcessExtraTexture(y)}return this.postProcessEnabled&&this.postProcessTarget&&c!==n&&this.runPostProcessPass(o,h,this.postProcessTarget,n,u),o.queue.submit([h.finish()]),!0}renderOverlayScene(e,t){const[r,s]=this.getViewport();if(this.ensureGizmoOverlayRenderTarget(r,s),!this.gizmoOverlayRT)return;const i=this.threeRenderer.getRenderTarget(),a=new Ct;this.threeRenderer.getClearColor?.(a);const o=this.threeRenderer.getClearAlpha?.()??1;this.threeRenderer.setRenderTarget(this.gizmoOverlayRT),this.threeRenderer.setClearColor?.(new Ct(0),0),this.threeRenderer.clear(!0,!1,!1),this.threeRenderer.render(e,t),this.threeRenderer.setClearColor?.(a,o),this.threeRenderer.setRenderTarget(i),this.overlayRenderedThisFrame=!0}ensureGizmoOverlayRenderTarget(e,t){const r=Math.max(1,Math.floor(e)),s=Math.max(1,Math.floor(t));if(this.gizmoOverlayRT&&this.gizmoOverlayRT.width===r&&this.gizmoOverlayRT.height===s)return;this.gizmoOverlayRT&&this.gizmoOverlayRT.dispose();const i=Js??yr;this.gizmoOverlayRT=new i(r,s),this.gizmoOverlayRT&&this.gizmoOverlayRT.texture&&(this.gizmoOverlayRT.texture.colorSpace=Xt)}compositeOverlayToCanvas(e,t,r){if(!this.overlayRenderedThisFrame||!this.gizmoOverlayRT)return;const s=this.threeRenderer.backend?.get?.(this.gizmoOverlayRT.texture)?.texture;if(!s){this.overlayRenderedThisFrame=!1;return}this.overlaySampler||(this.overlaySampler=e.createSampler({magFilter:"linear",minFilter:"linear"})),this.overlayBindGroupLayout||(this.overlayBindGroupLayout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]}));const i=e.createBindGroup({layout:this.overlayBindGroupLayout,entries:[{binding:0,resource:s.createView()},{binding:1,resource:this.overlaySampler}]});if(!this.overlayPipeline){const o=e.createShaderModule({code:`
                    struct VertexOutput {
                        @builtin(position) position : vec4f,
                        @location(0) uv : vec2f,
                    };

                    @vertex
                    fn vs_main(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var positions = array<vec2f, 6>(
                            vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),
                            vec2f(-1.0, 1.0),  vec2f(1.0, -1.0), vec2f(1.0, 1.0)
                        );
                        var uvs = array<vec2f, 6>(
                            vec2f(0.0, 1.0), vec2f(1.0, 1.0), vec2f(0.0, 0.0),
                            vec2f(0.0, 0.0), vec2f(1.0, 1.0), vec2f(1.0, 0.0)
                        );

                        var output : VertexOutput;
                        output.position = vec4f(positions[vertexIndex], 0.0, 1.0);
                        output.uv = uvs[vertexIndex];
                        return output;
                    }

                    @group(0) @binding(0) var overlayTexture : texture_2d<f32>;
                    @group(0) @binding(1) var overlaySampler : sampler;

                    @fragment
                    fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
                        return textureSample(overlayTexture, overlaySampler, uv);
                    }
                `}),n=e.createPipelineLayout({bindGroupLayouts:[this.overlayBindGroupLayout]});this.overlayPipeline=e.createRenderPipeline({layout:n,vertex:{module:o,entryPoint:"vs_main"},fragment:{module:o,entryPoint:"fs_main",targets:[{format:this.canvasFormat,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list"}})}const a=t.beginRenderPass({colorAttachments:[{view:r,loadOp:"load",storeOp:"store"}]});a.setPipeline(this.overlayPipeline),a.setBindGroup(0,i),a.draw(6,1,0,0),a.end(),this.overlayRenderedThisFrame=!1}async init(){await this.renderer.ensureSorter(),console.log("GaussianThreeJSRenderer.init() Done!")}setOccluderMeshes(e){console.warn("[GaussianThreeJSRenderer] setOccluderMeshes is deprecated. Auto depth mode captures the full scene automatically."),console.warn("[GaussianThreeJSRenderer] To use manual occluders, set autoDepthMode = false"),this.autoDepthMode=!1,this.occluderMeshes=e,this.occluderScene.clear(),e.forEach(t=>this.occluderScene.add(t))}setAutoDepthMode(e){this.autoDepthMode=e}setPostProcessEnabled(e){this.postProcessEnabled=e}setPostProcessShader(e,t=!1){this.setPostProcessShaderEx(e,{usesDepth:t})}setPostProcessShaderEx(e,t){this.postProcessFragmentWGSL=e,this.postProcessUsesDepth=!!t?.usesDepth,this.postProcessUsesExtraTexture=!!t?.usesExtraTexture,this.postProcessUsesUniform=!!t?.usesUniform,this.postProcessPipeline=null,this.postProcessBindGroupLayout=null}setPostProcessExtraTexture(e){this.postProcessExtraTexture=e}setPostProcessUniformData(e){this.ensurePostProcessUniformBuffer(),this.postProcessUniformBuffer&&this.device.queue.writeBuffer(this.postProcessUniformBuffer,0,e.buffer,e.byteOffset,e.byteLength)}setWeightQueryWeights(e){this.renderer.setWeightQueryWeights(e)}setWeightQueryCosineData(e,t){this.renderer.setWeightQueryWeights(e,t);try{this.renderer.setWeightQueryNumDen2?.(e,t)}catch{}}setLanguageWeightsSoftmax(e,t=1){this.renderer.setWeightSoftmaxConfig?.(e,t)}async loadWeightQueryFromUrls(e,t,r){const[s,i]=await Promise.all([fetch(e).then(async h=>{if(!h.ok)throw new Error(`Failed to fetch codebook: ${h.status} ${h.statusText}`);return h.arrayBuffer()}),fetch(t).then(async h=>{if(!h.ok)throw new Error(`Failed to fetch query list: ${h.status} ${h.statusText}`);return h.json()})]),a=new Float32Array(s),o=this.extractQueryVector(i,r),n=this.computeQueryWeights(a,o),c=this.computeGramMatrix(a);this.setWeightQueryCosineData(n,c)}setWeightQueryFromData(e,t){const r=e,s=t,i=this.computeQueryWeights(r,s),a=this.computeGramMatrix(r);this.setWeightQueryCosineData(i,a)}setWeightOverlayEnabled(e,t){if(this.weightOverlayEnabled=!!e,this.weightOverlayEnabled&&(this.weightOverlayApprox2Enabled=!1),t?.threshold!==void 0&&(this.weightOverlayThreshold=t.threshold),t?.opacity!==void 0&&(this.weightOverlayOpacity=t.opacity),this.weightOverlayEnabled){if(this.weightOverlayUseRelevancy){try{this.renderer.setWeightMapRelevancyEnabled?.(!0)}catch{}try{this.renderer.setWeightMapEnabled?.(!1)}catch{}}else{this.renderer.setWeightMapEnabled(!0);try{this.renderer.setWeightMapRelevancyEnabled?.(!1)}catch{}}this.setPostProcessEnabled(!0),this.setPostProcessShaderEx(this.getWeightOverlayShader(),{usesExtraTexture:!0,usesUniform:!0}),this.ensureDummyPostProcessExtraTexture(),this.postProcessExtraTexture||this.setPostProcessExtraTexture(this.dummyPostProcessExtraTexture),this.updateWeightOverlayUniform()}else{try{this.renderer.setWeightMapEnabled?.(!1)}catch{}try{this.renderer.setWeightMapRelevancyEnabled?.(!1)}catch{}this.setPostProcessEnabled(!1),this.setPostProcessExtraTexture(null)}}setWeightOverlayApprox2Enabled(e,t){if(this.weightOverlayApprox2Enabled=!!e,this.weightOverlayApprox2Enabled&&(this.weightOverlayEnabled=!1),t?.threshold!==void 0&&(this.weightOverlayThreshold=t.threshold),t?.opacity!==void 0&&(this.weightOverlayOpacity=t.opacity),e){try{this.renderer.setWeightMapEnabled?.(!1)}catch{}try{this.renderer.setWeightMapRelevancyEnabled?.(!1)}catch{}try{this.renderer.setWeightMapApprox2Enabled?.(!0)}catch{}this.setPostProcessEnabled(!0),this.setPostProcessShaderEx(this.getWeightOverlayApprox2Shader(),{usesExtraTexture:!0,usesUniform:!0}),this.ensureDummyPostProcessExtraTexture(),this.postProcessExtraTexture||this.setPostProcessExtraTexture(this.dummyPostProcessExtraTexture),this.updateWeightOverlayUniform()}else{try{this.renderer.setWeightMapApprox2Enabled?.(!1)}catch{}this.setPostProcessEnabled(!1),this.setPostProcessExtraTexture(null)}}ensureDummyPostProcessExtraTexture(){if(this.dummyPostProcessExtraTexture)return;this.dummyPostProcessExtraTexture=this.device.createTexture({label:"postprocess/dummy-extra",size:{width:1,height:1},format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const e=new Uint8Array(256);this.device.queue.writeTexture({texture:this.dummyPostProcessExtraTexture},e,{bytesPerRow:256,rowsPerImage:1},{width:1,height:1,depthOrArrayLayers:1})}getWeightOverlayApprox2Shader(){return`
            fn sample_lut(t: f32, lut: array<vec3f, 16>) -> vec3f {
                let x = clamp(t, 0.0, 1.0) * 15.0;
                let i0 = u32(floor(x));
                let i1 = min(15u, i0 + 1u);
                let f = fract(x);
                return mix(lut[i0], lut[i1], f);
            }

            const TURBO : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.189,0.071,0.232), vec3f(0.259,0.275,0.518), vec3f(0.241,0.488,0.706), vec3f(0.149,0.690,0.741),
                vec3f(0.240,0.824,0.580), vec3f(0.508,0.902,0.329), vec3f(0.792,0.888,0.165), vec3f(0.961,0.787,0.173),
                vec3f(0.992,0.620,0.208), vec3f(0.955,0.412,0.223), vec3f(0.843,0.231,0.233), vec3f(0.678,0.111,0.242),
                vec3f(0.497,0.047,0.256), vec3f(0.330,0.034,0.271), vec3f(0.208,0.049,0.291), vec3f(0.140,0.078,0.299)
            );
            const VIRIDIS : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.267,0.005,0.329), vec3f(0.283,0.141,0.458), vec3f(0.254,0.265,0.530), vec3f(0.207,0.372,0.553),
                vec3f(0.164,0.471,0.558), vec3f(0.128,0.567,0.551), vec3f(0.135,0.659,0.518), vec3f(0.267,0.749,0.441),
                vec3f(0.478,0.821,0.318), vec3f(0.678,0.863,0.189), vec3f(0.824,0.884,0.106), vec3f(0.914,0.896,0.119),
                vec3f(0.965,0.909,0.190), vec3f(0.988,0.933,0.308), vec3f(0.993,0.959,0.439), vec3f(0.993,0.984,0.603)
            );
            const INFERNO : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.002,0.005,0.013), vec3f(0.081,0.017,0.174), vec3f(0.206,0.016,0.318), vec3f(0.340,0.057,0.431),
                vec3f(0.472,0.112,0.428), vec3f(0.604,0.176,0.401), vec3f(0.734,0.254,0.352), vec3f(0.845,0.353,0.285),
                vec3f(0.930,0.466,0.220), vec3f(0.972,0.584,0.165), vec3f(0.988,0.708,0.153), vec3f(0.975,0.822,0.216),
                vec3f(0.936,0.914,0.330), vec3f(0.885,0.967,0.476), vec3f(0.839,0.993,0.646), vec3f(0.988,0.998,0.905)
            );
            const MAGMA : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.001,0.000,0.014), vec3f(0.088,0.028,0.156), vec3f(0.212,0.060,0.304), vec3f(0.341,0.091,0.427),
                vec3f(0.469,0.117,0.514), vec3f(0.595,0.157,0.558), vec3f(0.713,0.216,0.565), vec3f(0.815,0.298,0.540),
                vec3f(0.895,0.404,0.490), vec3f(0.948,0.533,0.427), vec3f(0.976,0.678,0.363), vec3f(0.983,0.827,0.320),
                vec3f(0.965,0.949,0.400), vec3f(0.992,0.991,0.545), vec3f(0.996,0.999,0.741), vec3f(0.998,0.999,0.918)
            );
            const PLASMA : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.050,0.030,0.528), vec3f(0.209,0.027,0.675), vec3f(0.353,0.049,0.725), vec3f(0.488,0.079,0.708),
                vec3f(0.610,0.116,0.650), vec3f(0.710,0.164,0.563), vec3f(0.794,0.222,0.460), vec3f(0.861,0.292,0.357),
                vec3f(0.909,0.376,0.266), vec3f(0.941,0.474,0.199), vec3f(0.958,0.585,0.163), vec3f(0.961,0.709,0.167),
                vec3f(0.940,0.843,0.240), vec3f(0.883,0.945,0.375), vec3f(0.790,0.996,0.557), vec3f(0.637,0.996,0.714)
            );
            const JET : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.000,0.000,0.500), vec3f(0.000,0.000,1.000), vec3f(0.000,0.500,1.000), vec3f(0.000,1.000,1.000),
                vec3f(0.500,1.000,0.500), vec3f(1.000,1.000,0.000), vec3f(1.000,0.500,0.000), vec3f(1.000,0.000,0.000),
                vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000),
                vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000)
            );

            fn colormap(t: f32, id: u32) -> vec3f {
                if (id == 1u) { return sample_lut(t, VIRIDIS); }
                if (id == 2u) { return sample_lut(t, INFERNO); }
                if (id == 3u) { return sample_lut(t, MAGMA); }
                if (id == 4u) { return sample_lut(t, PLASMA); }
                if (id == 5u) { return sample_lut(t, JET); }
                return sample_lut(t, TURBO);
            }

            @fragment
            fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
                let base = textureSample(sourceTexture, sourceSampler, uv);
                let nd = textureSample(extraTexture, extraSampler, uv);
                let num = nd.r;
                let den2 = nd.g;
                let sim = num / sqrt(max(1e-12, den2));
                let similarity = clamp(max(0.0, sim), 0.0, 1.0);

                let s = clamp(similarity, 0.0, 1.0);
                let gateSmooth = max(1e-6, postParams.gateSmooth);
                let gate = smoothstep(postParams.threshold, min(1.0, postParams.threshold + gateSmooth), s);
                let hm = colormap(s, u32(postParams.colormap + 0.5));
                let alpha = clamp(gate * postParams.opacity * postParams.gain, 0.0, 1.0);
                let blendWithBase = postParams.blendWithBase > 0.5;
                let out_rgb = select(hm * alpha, mix(base.rgb, hm, alpha), blendWithBase);
                return vec4f(out_rgb, base.a);
            }
        `}setWeightOverlayParams(e){e.threshold!==void 0&&(this.weightOverlayThreshold=e.threshold),e.opacity!==void 0&&(this.weightOverlayOpacity=e.opacity),this.updateWeightOverlayUniform()}setWeightOverlayBlendWithBase(e){this.weightOverlayBlendWithBase=!!e,this.updateWeightOverlayUniform()}setWeightOverlayVisualOptions(e){if(e.gain!==void 0){const t=Number(e.gain);this.weightOverlayGain=Number.isFinite(t)?Math.max(0,t):this.weightOverlayGain}if(e.colormap!==void 0){const t=Number(e.colormap);this.weightOverlayColormap=Number.isFinite(t)?Math.max(0,Math.floor(t)):this.weightOverlayColormap}this.updateWeightOverlayUniform()}setWeightOverlayUseRelevancy(e,t=10){this.weightOverlayUseRelevancy=!!e,this.weightOverlayRelevancyTau=Number.isFinite(t)?Math.max(1e-6,t):10}setWeightOverlayRelevancyData(e,t,r=15){try{this.renderer.setWeightRelevancyData?.(e,t,!0,this.weightOverlayRelevancyTau,r)}catch{}}diagnoseDepth(){console.group("[Depth Diagnostic]"),console.log("Auto depth mode:",this.autoDepthMode),console.log("Scene depth RT exists:",!!this.sceneDepthRT),console.log("Scene depth texture exists:",!!this.sceneDepthTexture),this.sceneDepthRT&&(console.log("Scene depth RT size:",this.sceneDepthRT.width,"x",this.sceneDepthRT.height),console.log("Scene depth RT format:",this.sceneDepthRT.texture.format)),this.renderer&&(console.log("GaussianRenderer depth enabled:",this.renderer.useDepth),console.log("GaussianRenderer depth format:",this.renderer.depthFormat)),console.groupEnd()}disposeDepthResources(){this.sceneDepthRT&&(this.sceneDepthRT.dispose(),this.sceneDepthRT=null),this.sceneDepthTexture=null,globalThis.GS_DEPTH_DEBUG&&console.log("[Depth] Cleaned up depth resources"),this.gizmoOverlayRT&&(this.gizmoOverlayRT.dispose(),this.gizmoOverlayRT=null),this.overlayPipeline=null,this.overlayBindGroupLayout=null,this.overlaySampler=null,this.overlayRenderedThisFrame=!1,this.postProcessTarget&&(this.postProcessTarget.destroy(),this.postProcessTarget=null),this.postProcessTargetView=null,this.postProcessTargetWidth=0,this.postProcessTargetHeight=0,this.postProcessSampler=null,this.postProcessBindGroupLayout=null,this.postProcessPipeline=null,this.postProcessExtraTexture=null,this.postProcessExtraSampler=null,this.postProcessUsesExtraTexture=!1,this.postProcessUsesUniform=!1,this.postProcessUniformBuffer=null,this.weightOverlayEnabled=!1,this.weightOverlayApprox2Enabled=!1}ensurePostProcessTarget(e,t){if(!this.postProcessEnabled||!this.device)return null;const r=Math.max(1,Math.floor(e)),s=Math.max(1,Math.floor(t));return this.postProcessTarget&&this.postProcessTargetWidth===r&&this.postProcessTargetHeight===s?this.postProcessTargetView:(this.postProcessTarget&&this.postProcessTarget.destroy(),this.postProcessTarget=this.device.createTexture({label:"GS postprocess target",size:{width:r,height:s},format:this.canvasFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.postProcessTargetView=this.postProcessTarget.createView(),this.postProcessTargetWidth=r,this.postProcessTargetHeight=s,this.postProcessTargetView)}ensurePostProcessUniformBuffer(){this.postProcessUniformBuffer||(this.postProcessUniformBuffer=this.device.createBuffer({label:"postprocess params",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}))}updateWeightOverlayUniform(){if(!this.weightOverlayEnabled&&!this.weightOverlayApprox2Enabled)return;this.ensurePostProcessUniformBuffer();const e=new Float32Array([this.weightOverlayThreshold,this.weightOverlayOpacity,this.weightOverlayBlendWithBase?1:0,this.weightOverlayGain,this.weightOverlayColormap,0,.02,0]);this.device.queue.writeBuffer(this.postProcessUniformBuffer,0,e.buffer,e.byteOffset,e.byteLength)}getWeightOverlayShader(){return`
            fn sample_lut(t: f32, lut: array<vec3f, 16>) -> vec3f {
                let x = clamp(t, 0.0, 1.0) * 15.0;
                let i0 = u32(floor(x));
                let i1 = min(15u, i0 + 1u);
                let f = fract(x);
                return mix(lut[i0], lut[i1], f);
            }

            const TURBO : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.189,0.071,0.232), vec3f(0.259,0.275,0.518), vec3f(0.241,0.488,0.706), vec3f(0.149,0.690,0.741),
                vec3f(0.240,0.824,0.580), vec3f(0.508,0.902,0.329), vec3f(0.792,0.888,0.165), vec3f(0.961,0.787,0.173),
                vec3f(0.992,0.620,0.208), vec3f(0.955,0.412,0.223), vec3f(0.843,0.231,0.233), vec3f(0.678,0.111,0.242),
                vec3f(0.497,0.047,0.256), vec3f(0.330,0.034,0.271), vec3f(0.208,0.049,0.291), vec3f(0.140,0.078,0.299)
            );
            const VIRIDIS : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.267,0.005,0.329), vec3f(0.283,0.141,0.458), vec3f(0.254,0.265,0.530), vec3f(0.207,0.372,0.553),
                vec3f(0.164,0.471,0.558), vec3f(0.128,0.567,0.551), vec3f(0.135,0.659,0.518), vec3f(0.267,0.749,0.441),
                vec3f(0.478,0.821,0.318), vec3f(0.678,0.863,0.189), vec3f(0.824,0.884,0.106), vec3f(0.914,0.896,0.119),
                vec3f(0.965,0.909,0.190), vec3f(0.988,0.933,0.308), vec3f(0.993,0.959,0.439), vec3f(0.993,0.984,0.603)
            );
            const INFERNO : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.002,0.005,0.013), vec3f(0.081,0.017,0.174), vec3f(0.206,0.016,0.318), vec3f(0.340,0.057,0.431),
                vec3f(0.472,0.112,0.428), vec3f(0.604,0.176,0.401), vec3f(0.734,0.254,0.352), vec3f(0.845,0.353,0.285),
                vec3f(0.930,0.466,0.220), vec3f(0.972,0.584,0.165), vec3f(0.988,0.708,0.153), vec3f(0.975,0.822,0.216),
                vec3f(0.936,0.914,0.330), vec3f(0.885,0.967,0.476), vec3f(0.839,0.993,0.646), vec3f(0.988,0.998,0.905)
            );
            const MAGMA : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.001,0.000,0.014), vec3f(0.088,0.028,0.156), vec3f(0.212,0.060,0.304), vec3f(0.341,0.091,0.427),
                vec3f(0.469,0.117,0.514), vec3f(0.595,0.157,0.558), vec3f(0.713,0.216,0.565), vec3f(0.815,0.298,0.540),
                vec3f(0.895,0.404,0.490), vec3f(0.948,0.533,0.427), vec3f(0.976,0.678,0.363), vec3f(0.983,0.827,0.320),
                vec3f(0.965,0.949,0.400), vec3f(0.992,0.991,0.545), vec3f(0.996,0.999,0.741), vec3f(0.998,0.999,0.918)
            );
            const PLASMA : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.050,0.030,0.528), vec3f(0.209,0.027,0.675), vec3f(0.353,0.049,0.725), vec3f(0.488,0.079,0.708),
                vec3f(0.610,0.116,0.650), vec3f(0.710,0.164,0.563), vec3f(0.794,0.222,0.460), vec3f(0.861,0.292,0.357),
                vec3f(0.909,0.376,0.266), vec3f(0.941,0.474,0.199), vec3f(0.958,0.585,0.163), vec3f(0.961,0.709,0.167),
                vec3f(0.940,0.843,0.240), vec3f(0.883,0.945,0.375), vec3f(0.790,0.996,0.557), vec3f(0.637,0.996,0.714)
            );
            const JET : array<vec3f, 16> = array<vec3f, 16>(
                vec3f(0.000,0.000,0.500), vec3f(0.000,0.000,1.000), vec3f(0.000,0.500,1.000), vec3f(0.000,1.000,1.000),
                vec3f(0.500,1.000,0.500), vec3f(1.000,1.000,0.000), vec3f(1.000,0.500,0.000), vec3f(1.000,0.000,0.000),
                vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000),
                vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000), vec3f(0.500,0.000,0.000)
            );

            fn colormap(t: f32, id: u32) -> vec3f {
                if (id == 1u) { return sample_lut(t, VIRIDIS); }
                if (id == 2u) { return sample_lut(t, INFERNO); }
                if (id == 3u) { return sample_lut(t, MAGMA); }
                if (id == 4u) { return sample_lut(t, PLASMA); }
                if (id == 5u) { return sample_lut(t, JET); }
                return sample_lut(t, TURBO);
            }

            @fragment
            fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
                let base = textureSample(sourceTexture, sourceSampler, uv);
                // The extraTexture stores per-pixel language similarity in [0, 1].
                let similarity = textureSample(extraTexture, extraSampler, uv).r;
                let s = clamp(similarity, 0.0, 1.0);
                let gateSmooth = max(1e-6, postParams.gateSmooth);
                let gate = smoothstep(postParams.threshold, min(1.0, postParams.threshold + gateSmooth), s);
                let hm = colormap(s, u32(postParams.colormap + 0.5));
                let alpha = clamp(gate * postParams.opacity * postParams.gain, 0.0, 1.0);
                let blendWithBase = postParams.blendWithBase > 0.5;
                let out_rgb = select(hm * alpha, mix(base.rgb, hm, alpha), blendWithBase);
                return vec4<f32>(out_rgb, base.a);
            }
        `}async computeQueryWeightsFromUrls(e,t,r){const[s,i]=await Promise.all([fetch(e).then(async n=>{if(!n.ok)throw new Error(`Failed to fetch codebook: ${n.status} ${n.statusText}`);return n.arrayBuffer()}),fetch(t).then(async n=>{if(!n.ok)throw new Error(`Failed to fetch query list: ${n.status} ${n.statusText}`);return n.json()})]),a=new Float32Array(s),o=this.extractQueryVector(i,r);return this.computeQueryWeights(a,o)}extractQueryVector(e,t){const r=e?.queries;if(!Array.isArray(r)||r.length===0)throw new Error("Query list JSON has no queries");const s=t?r.find(i=>i?.name===t):r[0];if(!s||!Array.isArray(s.vector))throw new Error("Query vector not found in query list JSON");return new Float32Array(s.vector)}computeQueryWeights(e,t){if(e.length!==64*512)throw new Error(`Codebook length mismatch: expected ${64*512}, got ${e.length}`);if(t.length!==512)throw new Error(`Query vector length mismatch: expected 512, got ${t.length}`);const r=new Float32Array(t);{let i=0;for(let o=0;o<r.length;o++)i+=r[o]*r[o];const a=i>1e-12?1/Math.sqrt(i):1;for(let o=0;o<r.length;o++)r[o]*=a}const s=new Float32Array(64);for(let i=0;i<64;i++){let a=0;const o=i*512;for(let n=0;n<512;n++)a+=e[o+n]*r[n];s[i]=a}return s}computeGramMatrix(e){if(e.length!==64*512)throw new Error(`Codebook length mismatch: expected ${64*512}, got ${e.length}`);const t=new Float32Array(4096);for(let r=0;r<64;r++){const s=r*512;for(let i=r;i<64;i++){const a=i*512;let o=0;for(let n=0;n<512;n++)o+=e[s+n]*e[a+n];t[r*64+i]=o,t[i*64+r]=o}}return t}ensurePostProcessPipeline(e){if(this.postProcessPipeline&&this.postProcessBindGroupLayout)return this.postProcessPipeline;const t=[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}];this.postProcessUsesDepth&&t.push({binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth"}}),this.postProcessUsesExtraTexture&&(t.push({binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d"}}),t.push({binding:4,visibility:GPUShaderStage.FRAGMENT,sampler:{}})),this.postProcessUsesUniform&&t.push({binding:5,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}),this.postProcessBindGroupLayout=e.createBindGroupLayout({entries:t});const r=`
            @group(0) @binding(0) var sourceTexture: texture_2d<f32>;
            @group(0) @binding(1) var sourceSampler: sampler;
            ${this.postProcessUsesDepth?"@group(0) @binding(2) var sourceDepth: texture_depth_2d;":""}
            ${this.postProcessUsesExtraTexture?`@group(0) @binding(3) var extraTexture: texture_2d<f32>;
@group(0) @binding(4) var extraSampler: sampler;`:""}
            ${this.postProcessUsesUniform?`struct PostProcessParams { threshold: f32, opacity: f32, blendWithBase: f32, gain: f32, colormap: f32, gamma: f32, gateSmooth: f32, _pad0: f32 };
@group(0) @binding(5) var<uniform> postParams: PostProcessParams;`:""}

            ${this.postProcessFragmentWGSL??`
            @fragment
            fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
                return textureSample(sourceTexture, sourceSampler, uv);
            }
            `}
        `,s=e.createShaderModule({code:`
                struct VertexOutput {
                    @builtin(position) position : vec4f,
                    @location(0) uv : vec2f,
                };

                @vertex
                fn vs_main(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                    var positions = array<vec2f, 6>(
                        vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),
                        vec2f(-1.0, 1.0),  vec2f(1.0, -1.0), vec2f(1.0, 1.0)
                    );
                    var uvs = array<vec2f, 6>(
                        vec2f(0.0, 1.0), vec2f(1.0, 1.0), vec2f(0.0, 0.0),
                        vec2f(0.0, 0.0), vec2f(1.0, 1.0), vec2f(1.0, 0.0)
                    );

                    var output : VertexOutput;
                    output.position = vec4f(positions[vertexIndex], 0.0, 1.0);
                    output.uv = uvs[vertexIndex];
                    return output;
                }

                ${r}
            `});return this.postProcessPipeline=e.createRenderPipeline({layout:e.createPipelineLayout({bindGroupLayouts:[this.postProcessBindGroupLayout]}),vertex:{module:s,entryPoint:"vs_main"},fragment:{module:s,entryPoint:"fs_main",targets:[{format:this.canvasFormat}]},primitive:{topology:"triangle-list"}}),this.postProcessPipeline}runPostProcessPass(e,t,r,s,i){if(!this.postProcessEnabled)return;if(this.postProcessUsesDepth&&!i){console.warn("[PostProcess] Depth requested but not available, skipping pass.");return}if(this.postProcessUsesExtraTexture&&!this.postProcessExtraTexture){console.warn("[PostProcess] Extra texture requested but not available, skipping pass.");return}this.postProcessUsesUniform&&!this.postProcessUniformBuffer&&this.ensurePostProcessUniformBuffer(),this.postProcessSampler||(this.postProcessSampler=e.createSampler({magFilter:"linear",minFilter:"linear"}));const a=this.ensurePostProcessPipeline(e),o=[{binding:0,resource:r.createView()},{binding:1,resource:this.postProcessSampler}];this.postProcessUsesDepth&&i&&o.push({binding:2,resource:i}),this.postProcessUsesExtraTexture&&this.postProcessExtraTexture&&(this.postProcessExtraSampler||(this.postProcessExtraSampler=e.createSampler({magFilter:"linear",minFilter:"linear"})),o.push({binding:3,resource:this.postProcessExtraTexture.createView()}),o.push({binding:4,resource:this.postProcessExtraSampler})),this.postProcessUsesUniform&&this.postProcessUniformBuffer&&o.push({binding:5,resource:{buffer:this.postProcessUniformBuffer}});const n=e.createBindGroup({layout:this.postProcessBindGroupLayout,entries:o}),c=t.beginRenderPass({colorAttachments:[{view:s,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});c.setPipeline(a),c.setBindGroup(0,n),c.draw(6,1,0,0),c.end()}getViewport(){const e=new Ee;this.threeRenderer.getDrawingBufferSize?.(e);const t=e.x||(this.threeRenderer.domElement?.width??0)||this.threeRenderer.getSize(new Ee).x,r=e.y||(this.threeRenderer.domElement?.height??0)||this.threeRenderer.getSize(new Ee).y;return[t,r]}convertCamera(e,t){const r=this.getViewport(),s=new Nr;return s.update(e,r),s}async updateDynamicModels(e,t){const r=new Nr,s=this.getViewport();r.update(e,s);const i=r.viewMatrix(),a=r.projMatrix();for(const o of this.gaussianModels)try{await o.update(i,t,a)}catch(n){console.warn("Failed to update model:",n)}}setModelGaussianScale(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setGaussianScale(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Gaussian scale set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelGaussianScale(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getGaussianScale():1}getModelVisible(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getModelVisible():!1}setModelMaxShDeg(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setMaxShDeg(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Max SH degree set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelMaxShDeg(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getMaxShDeg():0}setModelKernelSize(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setKernelSize(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Kernel size set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelKernelSize(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getKernelSize():0}setModelOpacityScale(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setOpacityScale(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Opacity scale set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelOpacityScale(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getOpacityScale():1}setModelCutoffScale(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setCutoffScale(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Cutoff scale set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelCutoffScale(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getCutoffScale():1}setModelTimeScale(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setTimeScale(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Time scale set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelTimeOffset(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setTimeOffset(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Time offset set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelAnimationIsLoop(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setAnimationIsLoop(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation is loop set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelTimeUpdateMode(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setTimeUpdateMode(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Time update mode set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelRenderMode(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setRenderMode(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Render mode set to: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelRenderMode(e){const t=parseInt(e.replace("model_",""));return t>=0&&t<this.gaussianModels.length?this.gaussianModels[t].getRenderMode():0}startModelAnimation(e,t=1){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].startAnimation(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation started at ${t}x speed`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}pauseModelAnimation(e){const t=parseInt(e.replace("model_",""));t>=0&&t<this.gaussianModels.length?(this.gaussianModels[t].pauseAnimation(),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation paused`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}resumeModelAnimation(e){const t=parseInt(e.replace("model_",""));t>=0&&t<this.gaussianModels.length?(this.gaussianModels[t].resumeAnimation(),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation resumed`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}stopModelAnimation(e){const t=parseInt(e.replace("model_",""));t>=0&&t<this.gaussianModels.length?(this.gaussianModels[t].stopAnimation(),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation stopped`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelAnimationTime(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setAnimationTime(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation time set to: ${t.toFixed(3)}s`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}setModelAnimationSpeed(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setAnimationSpeed(t),console.log(`[GaussianThreeJSRenderer] Model ${e} Animation speed set to: ${t}x`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}getModelParams(){const e={models:{}};return this.gaussianModels.forEach((t,r)=>{const s=`model_${r}`;e.models[s]={id:s,name:t.name,visible:t.getModelVisible(),gaussianScale:t.getGaussianScale(),maxShDeg:t.getMaxShDeg(),kernelSize:t.getKernelSize(),opacityScale:t.getOpacityScale(),cutoffScale:t.getCutoffScale(),timeScale:t.getTimeScale(),timeOffset:t.getTimeOffset(),timeUpdateMode:t.getTimeUpdateMode(),animationSpeed:t.getAnimationSpeed(),isAnimationRunning:t.isAnimationRunning(),isAnimationPaused:t.isAnimationPaused()}}),e}getGaussianModels(){return[...this.gaussianModels]}appendGaussianModel(e){this.gaussianModels.push(e)}removeModelById(e){const t=parseInt(e.replace("model_",""));if(isNaN(t)||t<0||t>=this.gaussianModels.length)return console.warn(`[GaussianThreeJSRenderer] removeModelById: invalid id ${e}`),!1;const r=this.gaussianModels[t];try{this.threeScene.remove(r),r.dispose?.()}catch(s){console.warn("[GaussianThreeJSRenderer] Error removing model from scene:",s)}return this.gaussianModels.splice(t,1),console.log(`[GaussianThreeJSRenderer] Removed ${e} (${r.name})`),!0}setModelVisible(e,t){const r=parseInt(e.replace("model_",""));r>=0&&r<this.gaussianModels.length?(this.gaussianModels[r].setModelVisible(t),console.log(`[GaussianThreeJSRenderer] Model ${e} visible: ${t}`)):console.warn(`[GaussianThreeJSRenderer] Model ${e} not found`)}resetParameters(){this.gaussianModels.forEach(e=>{e.setGaussianScale(1),e.setMaxShDeg(3),e.setKernelSize(.1),e.setOpacityScale(1),e.setCutoffScale(1),e.setTimeScale(1),e.setTimeOffset(0),e.setTimeUpdateMode("fixed_delta")}),console.log("[GaussianThreeJSRenderer] All parameters reset to defaults")}setGlobalTimeScale(e){this.gaussianModels.forEach(t=>t.setTimeScale(e)),console.log(`[GaussianThreeJSRenderer] Global time scale set: ${e}`)}setGlobalTimeOffset(e){this.gaussianModels.forEach(t=>t.setTimeOffset(e)),console.log(`[GaussianThreeJSRenderer] Global time offset set: ${e}`)}setGlobalTimeUpdateMode(e){this.gaussianModels.forEach(t=>t.setTimeUpdateMode(e)),console.log(`[GaussianThreeJSRenderer] Global time update mode: ${e}`)}startAllAnimations(e=1){this.gaussianModels.forEach(t=>t.startAnimation(e)),console.log(`[GaussianThreeJSRenderer] All animations started at ${e}x`)}pauseAllAnimations(){this.gaussianModels.forEach(e=>e.pauseAnimation()),console.log("[GaussianThreeJSRenderer] All animations paused")}resumeAllAnimations(){this.gaussianModels.forEach(e=>e.resumeAnimation()),console.log("[GaussianThreeJSRenderer] All animations resumed")}stopAllAnimations(){this.gaussianModels.forEach(e=>e.stopAnimation()),console.log("[GaussianThreeJSRenderer] All animations stopped")}setAllAnimationTime(e){this.gaussianModels.forEach(t=>t.setAnimationTime(e)),console.log(`[GaussianThreeJSRenderer] Global animation time set: ${e.toFixed(3)}s`)}setAllAnimationSpeed(e){this.gaussianModels.forEach(t=>t.setAnimationSpeed(e)),console.log(`[GaussianThreeJSRenderer] Global animation speed set: ${e}x`)}}class Ra{renderer;scene;gaussianLoader;fbxLoader;modelManager;constructor(e,t){this.renderer=e,this.scene=t,this.modelManager=new Ba;const r=new Ua(this.modelManager),s=new Ga(this.modelManager);this.gaussianLoader=new Ea(r,s),this.fbxLoader=new ws(this.modelManager)}detectFileType(e){const t=e.toLowerCase();if(t.endsWith(".compressed.ply"))return"gaussian";const r=t.split(".").pop();return["onnx","sog","ksplat","splat","spz"].includes(r||"")?"gaussian":r==="ply"?"ply":r==="fbx"?"fbx":r||"unknown"}async loadModel(e,t={}){try{const r=e instanceof File?e.name:e,s=t.type||this.detectFileType(r);console.log(`开始加载模型: ${r}, 类型: ${s}`);let i=r.toLowerCase().split(".").pop(),a=i==="onnx";i==="ply"&&(e instanceof File?a=await this.is3dgsPly(e):a=await this.isGaussianPlyUrl(e)),t.isGaussian=a;const o=await this.loadModelByType(e,s,t);return console.log(`模型加载完成: ${o.info.name}, 数量: ${o.info.count}`),o}catch(r){const s=r;throw console.error(`模型加载失败: ${s.message}`),t.onError&&t.onError(s),s}}async loadModelByType(e,t,r){if(console.log("fileType:",t,"is Gaussian?",r.isGaussian),t==="gaussian"||t==="onnx")return await this.loadGaussianModel(e,r);if(t==="ply"){if(r.isGaussian)return await this.loadGaussianModel(e,r);console.log("UnifiedModelLoader: 检测到普通 Mesh PLY")}else if(r.isGaussian)return await this.loadGaussianModel(e,r);if(t==="fbx")return await this.loadFBXModel(e,r);const s=await this.loadWithUniversalLoader(e,r);return await this.processLoadedData(s,t,r)}async loadWithUniversalLoader(e,t){const r={onProgress:s=>{t.onProgress&&t.onProgress(s.progress)},isGaussian:t.isGaussian};return e instanceof File?await Ut.loadFile(e,r):await Ut.loadUrl(e,r)}async processLoadedData(e,t,r){const s=r.sourceFile?.name||"model",i=r.name||s.split("/").pop()?.split(".")[0]||"model";return e instanceof Zt?(console.log("处理 Three.js 模型"),this.processThreeJSModel(e,t,i,r)):(console.log("处理 高斯模型"),this.processGaussianModel(e,t,i,r))}processThreeJSModel(e,t,r,s){const i=e.object3D(),a=[];return i instanceof Jt?a.push(...i.children):a.push(i),a.forEach(o=>{this.scene.add(o)}),console.log("=== Three.js 模型加载完成 ==="),console.log("模型名称:",r),console.log("模型数量:",a.length),a.forEach((o,n)=>{console.log(`模型 ${n+1}:`),console.log("  Object3D UUID:",o.uuid),console.log("  Object3D 类型:",o.constructor.name),console.log("  Object3D 名称:",o.name||"未命名")}),s.sourceFile?(console.log("原始文件路径:",s.sourceFile.name),console.log("文件大小:",s.sourceFile.size,"bytes"),console.log("文件类型:",s.sourceFile.type)):console.log("原始文件: URL 加载，无 File 对象"),{models:a,sourceFile:s.sourceFile,info:{type:t,name:r,count:a.length,isGaussian:!1}}}async processGaussianModel(e,t,r,s){throw new Error("高斯模型处理需要特殊实现，请使用 loadGaussianModel 方法")}async loadGaussianModel(e,t){const r=e instanceof File?e.name:e,s=t.name||r.split("/").pop()?.split(".")[0]||"gaussian_model";console.log("=== 进入 loadGaussianModel ==="),console.log("文件名:",r);let i="ply";const a=r.toLowerCase();a.endsWith(".compressed.ply")?i="compressed.ply":a.endsWith(".sog")?i="sog":a.endsWith(".ksplat")?i="ksplat":a.endsWith(".splat")?i="splat":a.endsWith(".spz")?i="spz":a.endsWith(".onnx")&&(i="onnx"),console.log("传递给加载器的具体格式:",i);const o=t.sourceFile||(e instanceof File?e:void 0),n=await this.gaussianLoader.createFromFile(this.renderer,e,{camMat:t.cameraMatrix||new Float32Array(16),projMat:t.projectionMatrix||new Float32Array(16),...t.gaussianOptions},{...t.gaussianOptions,onProgress:t.onProgress},i);this.scene.add(n);const c=new ir(this.renderer,this.scene,[n]);return await c.init(),this.scene.add(c),console.log("=== 高斯模型加载完成 ==="),console.log("模型名称:",s),console.log("Object3D UUID:",n.uuid),console.log("Object3D 类型:",n.constructor.name),o?(console.log("原始文件路径:",o.name),console.log("文件大小:",o.size,"bytes"),console.log("文件类型:",o.type)):console.log("原始文件: URL 加载，无 File 对象"),console.log("高斯渲染器 UUID:",c.uuid),{models:[n],gaussianRenderer:c,sourceFile:o,info:{type:"gaussian",name:s,count:1,isGaussian:!0}}}async readFileHeader(e,t=4096){const r=await e.slice(0,t).arrayBuffer();return new TextDecoder("utf-8").decode(r||new ArrayBuffer(0))}async is3dgsPly(e){try{const t=(await this.readFileHeader(e)).toLowerCase();if(!t.startsWith("ply"))return console.log("不是 PLY 文件:",e.name),!1;const r=["property float opacity","property float scale_0","property float scale_1","property float scale_2","property float rot_0","property float rot_1","property float rot_2","property float rot_3"].every(i=>t.includes(i)),s=/property\s+float\s+sh_\d+/.test(t);return console.log(`PLY 文件 ${e.name} 3DGS 检测结果: 基础属性=${r}, SH 系数=${s}`),r}catch(t){return console.warn("读取 PLY 头信息失败，按非 3DGS 处理:",e.name,t),!1}}async isGaussianPlyUrl(e){try{const t=e.includes("?")?"&":"?",r=`${e}${t}temp=${new Date().getTime()}`,s=await fetch(r,{method:"GET",mode:"cors",headers:{Range:"bytes=0-4095"}});!s.ok&&s.status!==206&&console.warn(`[UnifiedModelLoader] Range 请求未按预期返回 206，状态码: ${s.status}。尝试继续解析...`);const i=(await s.text()).slice(0,4096).toLowerCase();if(!i.startsWith("ply"))return console.log(`[UnifiedModelLoader] URL 资源不是 PLY 格式: ${r}`),!1;const a=["property float opacity","property float scale_0","property float scale_1","property float scale_2","property float rot_0","property float rot_1","property float rot_2","property float rot_3"].every(n=>i.includes(n)),o=/property\s+float\s+sh_\d+/.test(i)||/property\s+float\s+f_dc_0/.test(i);return console.log(`[UnifiedModelLoader] 线上 PLY 检测结果: 基础属性=${a}, SH系数=${o}, URL=${r}`),a}catch(t){return console.warn("[UnifiedModelLoader] 无法检测线上 PLY 类型 (可能是跨域或网络问题)，默认按 False 处理:",t),!1}}async loadModels(e,t={}){const r=[];for(let s=0;s<e.length;s++){const i=e[s],a={...t,onProgress:o=>{if(t.onProgress){const n=(s+o)/e.length;t.onProgress(n)}}};try{const o=await this.loadModel(i,a);r.push(o)}catch(o){console.error(`加载模型失败: ${i}`,o),t.onError&&t.onError(o)}}return r}async loadFBXModel(e,t){const r=e instanceof File?e.name:e,s=t.name||r.split("/").pop()?.split(".")[0]||"fbx_model";console.log("=== 进入 loadFBXModel ==="),console.log("文件名:",r);try{let i;e instanceof File?i=await this.fbxLoader.loadFromFile(e,t.fbxOptions):i=await this.fbxLoader.loadFromURL(e,t.fbxOptions);const a=i.pointCloud,o=a.object3D;return this.scene.add(o),console.log("=== FBX 模型加载完成 ==="),console.log("模型名称:",s),console.log("Object3D UUID:",o.uuid),console.log("Object3D 类型:",o.constructor.name),console.log("动画数量:",a.clips.length),console.log("顶点数量:",i.pointCount),{models:[o],sourceFile:e instanceof File?e:void 0,info:{type:"fbx",name:s,count:1,isGaussian:!1}}}catch(i){throw console.error("FBX 模型加载失败:",i),i}}dispose(){}}async function Za(l,e,t,r={}){const s=new Ra(l,e);try{return Array.isArray(t)?await s.loadModels(t,r):await s.loadModel(t,r)}finally{s.dispose()}}const Fa=["ply","spz","ksplat","splat","sog","compressed.ply","onnx","fbx"],Ir=l=>Fa.includes(l);class eo{rootHandle=null;permissions=null;constructor(){}async pickFolderRead(){try{const e=await window.showDirectoryPicker({mode:"read"});await this.ensurePermission(e,"read"),this.rootHandle=e,this.permissions="read",console.log("SceneFS: Root folder selected (read-only)",e.name)}catch(e){throw e.name==="AbortError"?new Error("Folder selection cancelled by user"):new Error(`Failed to select read folder: ${e.message}`)}}async setRootHandle(e,t){try{await this.ensurePermission(e,t),this.rootHandle=e,this.permissions=t,console.log("SceneFS: Root folder selected (read-only)",e.name)}catch(r){throw r.name==="AbortError"?new Error("Folder selection cancelled by user"):new Error(`Failed to select read folder: ${r.message}`)}}async pickFolderWrite(){try{const e=await window.showDirectoryPicker({mode:"readwrite"});await this.ensurePermission(e,"readwrite"),this.rootHandle=e,this.permissions="readwrite",console.log("SceneFS: Root folder selected (read-write)",e.name)}catch(e){throw e.name==="AbortError"?new Error("Folder selection cancelled by user"):new Error(`Failed to select write folder: ${e.message}`)}}async loadScene(e,t){const r=t?.sceneData;try{if(r!==void 0)return console.log("SceneFS: Loading scene from provided data..."),await this.loadSceneDataIntoApp(e,r),console.log("SceneFS: Scene (provided data) loaded successfully"),r;if(!this.rootHandle)throw new Error("No root directory selected. Use pickFolderRead() first.");console.log("SceneFS: Loading scene from folder...");const s=await this.readJSON("scene.json").catch(()=>null);if(s&&Array.isArray(s.scenes))return console.log("SceneFS: Detected unified scenes schema; loading per view"),await this.loadScenesArrayIntoApp(e,s),console.log("SceneFS: Scene (scenes[]) loaded successfully"),s;if(s){const a=this.normalizeSceneManifest(s);if(a)return await this.loadManifestIntoApp(e,a),console.log("SceneFS: Scene loaded successfully"),s}const i=await this.findSceneManifestAtRoot();if(!i)throw new Error("No scene.json found in root directory");return console.log(`SceneFS: Found scene manifest with ${i.assets.length} assets`),await this.loadManifestIntoApp(e,i),console.log("SceneFS: Scene loaded successfully"),i}catch(s){throw console.error("SceneFS: Failed to load scene:",s),s}}async loadScenesArrayIntoApp(e,t){const r=t.scenes.length,s=a=>a===0?"left":"right";t.env&&(t.env.gaussianScale!==void 0&&typeof e.setGaussianScale=="function"&&e.setGaussianScale(t.env.gaussianScale),t.env.bgColor&&typeof e.setBackgroundColor=="function"&&e.setBackgroundColor(t.env.bgColor));const i=new Map;for(let a=0;a<r;a++){const o=s(a),n=t.scenes[a]||{},c=Array.isArray(n?.models)?n.models:[],h=typeof e.getSceneView=="function"?e.getSceneView(o):null,u=typeof e.getAnimationControllerForView=="function"?e.getAnimationControllerForView(o):null;h&&typeof h.clearScene=="function"&&h.clearScene(),h&&typeof h.clearSelection=="function"&&h.clearSelection(),u&&typeof u.replaceGlobalKeyframes=="function"&&u.replaceGlobalKeyframes([]);for(const d of c){if(!d)continue;const p=d.typeTag||"fileModel";if(p==="fileModel"){const f=this.resolveModelSource(d);if(!f){console.warn("SceneFS: fileModel 缺少可识别的资源路径，跳过",d);continue}if((typeof d?.type=="string"?d.type.toLowerCase():"")==="url"||this.isHttpUrl(f))try{await this.loadModelFromUrl(e,h,o,f,d)}catch(g){console.warn("SceneFS: 通过 URL 加载模型失败:",g);continue}else{let g=i.get(f);if(!g)try{g=await this.fileFromRelativePath(f),i.set(f,g)}catch(y){console.warn(`SceneFS: 无法加载模型 ${f}`,y);continue}if(typeof e.loadSerializedFileModel=="function")await e.loadSerializedFileModel(o,g,d);else{const y=d?.type==="onnx"||d?.type==="ply"?d.type:"ply",v=d?.name??this.extractFileNameFromPath(f);y==="onnx"?typeof e.loadONNXModelToView=="function"?await e.loadONNXModelToView(o,g,v,!d?.dynamic):typeof e.loadONNXModel=="function"&&await e.loadONNXModel(g,v,!d?.dynamic):typeof e.loadPLYToView=="function"?await e.loadPLYToView(o,g):typeof e.loadPLY=="function"&&await e.loadPLY(g);const m=Array.isArray(d?.trs)?d.trs:void 0;if(m){const _=typeof e.getModelManagerForView=="function"?e.getModelManagerForView(o):e.getModelManager?.();if(_){const P=Array.isArray(m[0])?m[0]:void 0,S=Array.isArray(m[1])?m[1]:void 0,T=Array.isArray(m[2])?m[2]:void 0;P&&typeof _.setModelPosition=="function"&&_.setModelPosition(v,P[0]||0,P[1]||0,P[2]||0),S&&typeof _.setModelRotation=="function"&&_.setModelRotation(v,S[0]||0,S[1]||0,S[2]||0),T&&typeof _.setModelScale=="function"&&_.setModelScale(v,T)}}}}if(h&&d.gaussianParams&&typeof h.applyGaussianParams=="function"){const g=d.id||d.name;h.applyGaussianParams(g,d.gaussianParams)}h&&Array.isArray(d.trs)&&typeof h.applyTRSToObject=="function"&&h.applyTRSToObject(d.id||d.name,d.trs)}else if(p==="url")try{const f=this.resolveModelSource(d);if(!f){console.warn("SceneFS: url 缺少可识别的资源路径，跳过",d);continue}await this.loadModelFromUrl(e,h,o,f,d)}catch(f){console.warn("SceneFS: 通过 URL 加载模型失败:",f);continue}else p==="recordingCamera"?h&&typeof h.restoreRecordingCameraFromSerialized=="function"?h.restoreRecordingCameraFromSerialized(d.id,d.name,Array.isArray(d.trs)?d.trs:void 0,d.params):console.warn("SceneFS: 当前视窗不支持恢复录制相机对象",d):h&&typeof h.restorePrimitiveFromSerialized=="function"?(h.restorePrimitiveFromSerialized(p,d.id,d.name,d.params),Array.isArray(d.trs)&&typeof h.applyTRSToObject=="function"&&h.applyTRSToObject(d.id,d.trs)):console.warn("SceneFS: 未知或暂不支持的对象类型标签",p,d)}Array.isArray(n.keyframes)&&u&&typeof u.loadKeyframesFromSerialized=="function"&&u.loadKeyframesFromSerialized(n.keyframes)}}async loadSceneDataIntoApp(e,t){if(!t||typeof t!="object")throw new Error("SceneFS: Provided scene data is empty or invalid");if(Array.isArray(t.scenes)){await this.loadScenesArrayIntoApp(e,t);return}const r=this.normalizeSceneManifest(t);if(!r)throw new Error("SceneFS: Unsupported scene data format. Expect scenes[] or assets[].");await this.loadManifestIntoApp(e,r)}async loadModelFromUrl(e,t,r,s,i){const a=i?.id,o=i?.name,n=s;if(t&&typeof t.loadModel=="function"){const h={};a&&(h.forcedId=a),o&&(h.displayName=o),await t.loadModel(n,h);return}const c=n.toLowerCase();if(c.endsWith(".onnx")){if(typeof e.loadONNXModel=="function"){await e.loadONNXModel(n,o??void 0,!i?.dynamic);return}}else if(c.endsWith(".ply")||c.endsWith(".glb")||c.endsWith(".gltf")){if(typeof e.loadPLY=="function"){await e.loadPLY(n);return}if(typeof e.loadSample=="function"){await e.loadSample(n);return}}else if(typeof e.loadSample=="function"){await e.loadSample(n);return}throw new Error(`SceneFS: 无法通过 URL 加载模型，缺少匹配的加载接口 (${n})`)}resolveModelSource(e){if(!e||typeof e!="object")return null;const t=[e.assetName,e.path,e.url,e.source,e?.extras?.urlFallback,e.name];for(const r of t)if(typeof r=="string"&&r.trim().length>0)return r.trim();return null}normalizeSceneManifest(e){if(!e||typeof e!="object")return null;if(Array.isArray(e.scenes)){const t=e.scenes,r=[];for(const s of t){const i=Array.isArray(s?.models)?s.models:[];for(const a of i){const o=this.resolveModelSource(a);if(!o){console.warn("SceneFS: 无法从 scenes[] 中推断模型路径，跳过",a);continue}const n=typeof a?.type=="string"?a.type.toLowerCase():"",c=Ir(n)?n:n==="url"?"url":"ply",h={name:typeof a?.name=="string"&&a.name.length>0?a.name:this.extractFileNameFromPath(o),type:c,path:o};a?.dynamic!==void 0&&(h.dynamic=!!a.dynamic);const u=Array.isArray(a?.trs)?a.trs:void 0;u&&(h.transform={position:Array.isArray(u[0])?[Number(u[0][0]??0),Number(u[0][1]??0),Number(u[0][2]??0)]:void 0,rotationEulerRad:Array.isArray(u[1])?[Number(u[1][0]??0),Number(u[1][1]??0),Number(u[1][2]??0)]:void 0,scale:Array.isArray(u[2])?[Number(u[2][0]??1),Number(u[2][1]??1),Number(u[2][2]??1)]:void 0}),a?.extras?h.extras=a.extras:this.isHttpUrl(o)&&(h.extras={urlFallback:o}),r.push(h)}}return r.length===0?null:{version:1,meta:e.meta??{app:"VisionaryEditor",createdAt:new Date().toISOString()},env:e.env??{},assets:r}}if(Array.isArray(e.assets)){const t=[];for(const r of e.assets){if(!r||typeof r!="object")continue;const s=this.resolveModelSource(r);if(!s){console.warn("SceneFS: 资产缺少路径/URL，跳过",r);continue}const i=typeof r.type=="string"?r.type.toLowerCase():"",a=Ir(i)?i:i==="url"?"url":"ply",o={name:typeof r.name=="string"&&r.name.length>0?r.name:this.extractFileNameFromPath(s),type:a,path:s};r.dynamic!==void 0&&(o.dynamic=!!r.dynamic),r.transform&&(o.transform=r.transform),r.extras?o.extras=r.extras:this.isHttpUrl(s)&&(o.extras={urlFallback:s}),t.push(o)}return t.length===0?null:{version:1,meta:e.meta??{app:"VisionaryEditor",createdAt:new Date().toISOString()},env:e.env??{},assets:t}}return null}isHttpUrl(e){return typeof e=="string"&&/^https?:\/\//i.test(e)}async fetchFileFromUrl(e){const t=await fetch(e);if(!t.ok)throw new Error(`Failed to fetch ${e}: ${t.status} ${t.statusText}`);const r=await t.blob(),s=this.extractFileNameFromPath(e),i=r.type&&r.type.length>0?r.type:this.guessMimeType(s);return new File([r],s,{type:i})}extractFileNameFromPath(e){if(!e)return"model";try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();if(r)return r.split("?")[0].split("#")[0]}catch{}const t=e.split("/").filter(Boolean).pop();return!t||t.length===0?e:t.split("?")[0].split("#")[0]}guessMimeType(e){switch(e.split(".").pop()?.toLowerCase()){case"onnx":return"application/octet-stream";case"ply":return"application/octet-stream";case"fbx":return"application/octet-stream";case"json":return"application/json";default:return"application/octet-stream"}}async loadUrlAsset(e,t,r){const s=t.toLowerCase();if(s.endsWith(".onnx")){if(typeof e.loadONNXModel=="function"){await e.loadONNXModel(t,r.name,!r.dynamic);return}}else if(s.endsWith(".ply")||s.endsWith(".glb")||s.endsWith(".gltf")){if(typeof e.loadPLY=="function"){await e.loadPLY(t);return}if(typeof e.loadSample=="function"){await e.loadSample(t);return}}else if(typeof e.loadSample=="function"){await e.loadSample(t);return}throw new Error(`SceneFS: 无法通过 URL 加载资产 ${r.name} (${t})`)}async saveToFolder(e){return this.saveSceneToFolderSmart(e)}async ensurePermission(e,t){if(await e.queryPermission({mode:t})!=="granted"&&await e.requestPermission({mode:t})!=="granted")throw new Error(`${t} permission denied for directory`)}async fileFromRelativePath(e){if(this.isHttpUrl(e))return this.fetchFileFromUrl(e);if(!this.rootHandle)throw new Error("No root directory handle");const t=e.split("/").filter(i=>i.length>0);let r=this.rootHandle;for(let i=0;i<t.length-1;i++){const a=t[i];try{r=await r.getDirectoryHandle(a)}catch{throw new Error(`Directory not found: ${t.slice(0,i+1).join("/")}`)}}const s=t[t.length-1];try{return await(await r.getFileHandle(s)).getFile()}catch{throw new Error(`File not found: ${e}`)}}async readJSON(e){if(!this.rootHandle)throw new Error("No root directory handle");try{const t=await(await(await this.rootHandle.getFileHandle(e)).getFile()).text();return JSON.parse(t)}catch(t){throw new Error(`Failed to read ${e}: ${t.message}`)}}async writeJSONToRoot(e,t){if(!this.rootHandle)throw new Error("No root directory handle");try{const r=await(await this.rootHandle.getFileHandle(e,{create:!0})).createWritable();await r.write(JSON.stringify(t,null,2)),await r.close()}catch(r){throw new Error(`Failed to write ${e}: ${r.message}`)}}async findSceneManifestAtRoot(){try{const e=await this.readJSON("scene.json"),t=this.normalizeSceneManifest(e);if(t)return t;throw new Error("Invalid scene.json format")}catch(e){return console.warn("SceneFS: No valid scene.json found or parse failed:",e.message),null}}async loadManifestIntoApp(e,t){console.log("SceneFS: Loading manifest into app...");const r=new Set(e.getModels().map(i=>i.id));t.env&&(t.env.gaussianScale!==void 0&&(e.setGaussianScale(t.env.gaussianScale),console.log(`SceneFS: Set gaussian scale to ${t.env.gaussianScale}`)),t.env.bgColor&&(e.setBackgroundColor(t.env.bgColor),console.log(`SceneFS: Set background color to ${t.env.bgColor}`)));const s=t.assets.map(async(i,a)=>{try{if(console.log(`SceneFS: Loading asset ${a+1}/${t.assets.length}: ${i.name} (${i.type})`),i.type==="url"||this.isHttpUrl(i.path)){const o=i.type==="url"||this.isHttpUrl(i.path)?i.path:i.extras?.urlFallback;if(!o)throw new Error(`Invalid URL asset path for ${i.name}`);await this.loadUrlAsset(e,o,i)}else{let o=null,n=!1;try{o=await this.fileFromRelativePath(i.path)}catch(c){if(i.extras?.urlFallback)console.warn(`SceneFS: Local file not found, trying fallback URL: ${i.extras.urlFallback}`),n=!0,o=null;else throw new Error(`File not found: ${i.path} (${c.message})`)}if(i.type==="onnx")n&&i.extras?.urlFallback?(console.log(`SceneFS: Loading ONNX asset from URL: ${i.extras.urlFallback}`),await e.loadONNXModel(i.extras.urlFallback,i.name,!i.dynamic)):(console.log(`SceneFS: Loading ONNX asset from File: ${i.name}`),await e.loadONNXModel(o,i.name,!i.dynamic));else if(i.type==="ply"||i.type==="fbx")n&&i.extras?.urlFallback?(console.log(`SceneFS: Loading ${i.type.toUpperCase()} asset from URL: ${i.extras.urlFallback}`),i.type==="fbx"&&typeof e.loadFBX=="function"?await e.loadFBX(i.extras.urlFallback):await e.loadPLY(i.extras.urlFallback)):(console.log(`SceneFS: Loading ${i.type.toUpperCase()} asset from File: ${i.name}`),i.type==="fbx"&&typeof e.loadFBX=="function"?await e.loadFBX(o):await e.loadPLY(o,{debugLogging:!0}));else{console.warn(`SceneFS: Unknown asset type: ${i.type}`);return}}console.log(`SceneFS: Successfully loaded ${i.name}`)}catch(o){console.error(`SceneFS: Failed to load asset ${i.name}:`,o)}});await Promise.allSettled(s),await this.applyTransforms(e,t.assets,r)}async applyTransforms(e,t,r){await new Promise(i=>setTimeout(i,100));const s=e.getModels().filter(i=>!r.has(i.id));console.log(`SceneFS: Applying transforms to ${s.length} newly loaded models`);for(const i of t){if(!i.transform)continue;let a=s.find(c=>c.name===i.name);if(a||(a=s.find(c=>c.name.includes(i.name)||i.name.includes(c.name))),!a){console.warn(`SceneFS: Could not find model to apply transform: ${i.name}`);continue}const o=e.getModelManager(),n=i.transform;if(n.position&&o.setModelPosition(a.id,...n.position),n.rotationEulerRad&&o.setModelRotation(a.id,...n.rotationEulerRad),n.scale){const[c,h,u]=n.scale;c===h&&h===u?o.setModelScale(a.id,c):o.setModelScale(a.id,n.scale)}console.log(`SceneFS: Applied transforms to ${a.name}`)}}async buildManifestFromApp(e){const t=e.getModels(),r=e.__transformTracker,s=[],i=[],a=[];for(const n of t){const c=r?.getSource(n.id),h=r?.getTransform(n.id);if(!c){i.push({name:n.name,reason:"No source tracking information available"});continue}if(c.kind!=="relative"){if(c.url==="<file-input>"&&this.rootHandle&&this.permissions==="readwrite"){const g=await this.findFileInSceneDirectory(c.originalName);if(g){a.push({model:n,source:c,suggestedPath:g}),i.push({name:n.name,reason:"Uploaded file (found in scene directory - can be converted)",model:n,source:c});continue}}const f=c.url==="<file-input>"?"Uploaded file (cannot be referenced by relative path)":"Loaded from URL (not a local file)";i.push({name:n.name,reason:f,model:n,source:c});continue}const u=typeof c.path=="string"?c.path.split("/").filter(Boolean).pop():void 0,d=c.originalName||u||n.name,p={name:d,type:n.modelType,path:d};n.modelType==="onnx"&&n.isDynamic&&(p.dynamic=!0),h&&(h.position&&(h.position[0]!==0||h.position[1]!==0||h.position[2]!==0)||h.rotationEulerRad&&(h.rotationEulerRad[0]!==0||h.rotationEulerRad[1]!==0||h.rotationEulerRad[2]!==0)||h.scale&&(h.scale[0]!==1||h.scale[1]!==1||h.scale[2]!==1))&&(p.transform=h),s.push(p)}const o={version:1,meta:{app:"WebGaussianJS",createdAt:new Date().toISOString(),unit:"meter"},env:{bgColor:e.getBackgroundColor(),gaussianScale:e.getGaussianScale()},assets:s};return console.log(`SceneFS: Scene manifest built - ${s.length} models included, ${i.length} models skipped`),a.length>0&&(console.log(`SceneFS: Found ${a.length} uploaded files that exist in the scene directory:`),a.forEach(({model:n,source:c,suggestedPath:h})=>{console.log(`  • ${n.name}: ${h}`)})),i.length>0&&(console.log("SceneFS: Skipped models (cannot be included in reproducible scenes):"),i.forEach(({name:n,reason:c})=>{console.log(`  • ${n}: ${c}`)}),console.log("SceneFS: Note - Only models loaded from local files with relative paths can be saved to scenes")),s.length>0&&(console.log("SceneFS: Included models:"),s.forEach(n=>{console.log(`  • ${n.name} (${n.type}): ${n.path}`)})),{manifest:o,convertibleModels:a.length>0?a:void 0}}async findFileInSceneDirectory(e){if(!this.rootHandle)return null;try{try{const t=await this.rootHandle.getFileHandle(e);return e}catch{}return await this.searchDirectoryRecursively(this.rootHandle,e,"")}catch(t){return console.warn(`SceneFS: Error searching for file ${e}:`,t),null}}async searchDirectoryRecursively(e,t,r){try{for await(const[s,i]of e){const a=r?`${r}/${s}`:s;if(i.kind==="file"&&s===t)return a;if(i.kind==="directory"&&a.split("/").length<10){const o=await this.searchDirectoryRecursively(i,t,a);if(o)return o}}}catch(s){console.warn(`SceneFS: Could not search directory ${r}:`,s)}return null}async convertUploadedFilesToRelative(e,t){const r=e.__transformTracker;if(!r)throw new Error("Transform tracker not available");for(const{modelId:s,relativePath:i}of t){const a=r.getSource(s);if(a&&a.url==="<file-input>"){const o={kind:"relative",path:i,originalName:a.originalName};r.updateSource(s,o),console.log(`SceneFS: Converted model ${s} to relative path: ${i}`)}}}async saveSceneToFolderSmart(e){if(!this.rootHandle||this.permissions!=="readwrite")throw new Error("No writable folder selected. Use pickFolderWrite() first.");console.log("SceneFS: Building manifest and checking for convertible files...");const{manifest:t,convertibleModels:r}=await this.buildManifestFromApp(e);if(r&&r.length>0)if(await this.promptUserForConversion(r)){const s=r.map(({model:a,suggestedPath:o})=>({modelId:a.id,relativePath:o}));await this.convertUploadedFilesToRelative(e,s);const{manifest:i}=await this.buildManifestFromApp(e);await this.writeManifest(i)}else await this.writeManifest(t);else await this.writeManifest(t);console.log("SceneFS: Scene saved successfully")}async promptUserForConversion(e){const t=e.map(({model:r,suggestedPath:s})=>`• ${r.name} → ${s}`).join(`
`);return confirm(`Found ${e.length} uploaded file(s) that exist in the scene directory:

${t}

Would you like to convert these to use relative paths so they can be included in the scene?`)}async writeManifest(e){if(!this.rootHandle)throw new Error("No root handle available");const t=JSON.stringify(e,null,2),r=await(await this.rootHandle.getFileHandle("scene.json",{create:!0})).createWritable();await r.write(t),await r.close(),console.log("SceneFS: Wrote scene.json with",e.assets.length,"assets")}getPermissions(){return this.permissions}hasFolder(){return this.rootHandle!==null}getFolderName(){return this.rootHandle?.name||null}}class to{parentNodeId;domId;isPreviewShow=!1;camera;canvas;overlayContainer;renderer=null;gaussianRenderer=null;gizmo=null;gizmoVisible=!0;gizmoColor=65280;gizmoLength=5;width;height;showPreview;sceneWrapper=null;tempPosition=new z;tempQuaternion=new He;tempScale=new z;editorHelperVisibilityCache=[];recordingEnvMap=null;recordingBackground=null;originalEnvMap=null;originalBackground=null;skyboxEnabled=!0;statusDom=null;cameraInfoDom=null;titleDom=null;cameraName="";isSync=!1;constructor(e,t=1920,r=1080,s=55,i=!0,a="",o=!1){this.parentNodeId=e,this.domId=`recordingOverlay_${this.parentNodeId}`,this.cameraName=a,this.camera=new Yt(s,t/r,.1,1e3),this.width=t,this.height=r,this.showPreview=i,this.isSync=o;const n=document.getElementById(this.domId);n&&(this.overlayContainer=n,this.canvas=this.overlayContainer.querySelector("canvas"),console.log("overlayContainer----",this.overlayContainer,this.canvas),this.titleDom=this.overlayContainer.querySelector(".recording-overlay-title-name"))}isInitialized(){return!!this.renderer}ensurePreviewWindow(e="zh"){if(this.overlayContainer&&document.body.contains(this.overlayContainer)){this.overlayContainer.style.visibility="visible",this.overlayContainer.style.opacity="1",this.showPreview=!0,this.canvas||(this.canvas=this.overlayContainer.querySelector("canvas")),this.titleDom||(this.titleDom=this.overlayContainer.querySelector(".recording-overlay-title-name")),console.log("[RecordingCamera] 预览窗口已存在，显示窗口");return}this.showPreview=!0,console.log("[RecordingCamera] 创建新的预览窗口"),this.createOverlayCanvas(this.width,this.height,e),this.overlayContainer&&(this.overlayContainer.style.display="none",this.overlayContainer.style.visibility="visible",this.overlayContainer.style.opacity="1")}hidePreviewWindow(){this.overlayContainer&&(this.overlayContainer.style.display="none",this.isPreviewShow=!1)}showPreviewWindow(e=!0){this.titleDom&&(this.titleDom.textContent=` - ${this.cameraName}`),this.overlayContainer&&(this.overlayContainer.style.display="block",this.isPreviewShow=!0),this.setSkyboxEnabled(e)}setCameraName(e){this.cameraName=e,this.titleDom&&(this.titleDom.textContent=` - ${this.cameraName}`)}setSkyboxEnabled(e){this.skyboxEnabled=e}isPreviewVisible(){if(!this.overlayContainer||!document.body.contains(this.overlayContainer))return!1;const e=window.getComputedStyle(this.overlayContainer),t=e.display!=="none"&&e.visibility!=="hidden"&&e.opacity!=="0";return!t&&this.showPreview&&console.warn("[RecordingCamera] 预览窗口应该可见但检测为不可见",{display:e.display,visibility:e.visibility,opacity:e.opacity,showPreview:this.showPreview}),t}cleanupCanvasElements(){this.gaussianRenderer&&(this.gaussianRenderer=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),console.log("dom----",document.getElementById(this.domId))}hideEditorHelpers(e){this.editorHelperVisibilityCache.length=0,e.traverse(t=>{t.userData&&t.userData.__visionaryEditorHelper&&(this.editorHelperVisibilityCache.push({object:t,visible:t.visible}),t.visible=!1)})}restoreEditorHelpers(){for(const e of this.editorHelperVisibilityCache)e.object.visible=e.visible;this.editorHelperVisibilityCache.length=0}createOverlayCanvas(e,t,r="zh"){this.cleanupCanvasElements(),this.showPreview=!0;const s=document.getElementById(this.domId);if(s)this.overlayContainer=s;else{console.log("创建录制相机预览窗口dom"),this.overlayContainer=document.createElement("div"),this.overlayContainer.id=this.domId,this.overlayContainer.classList.add("recording-overlay-container");let i="录制预览",a=" - 同步录制相机";r==="zh"?(i="录制预览",a=" - 同步录制相机"):r==="en"&&(i="Preview",a=" - Sync Camera");const o=document.createElement("div");o.classList.add("title-bar");const n=document.createElement("h3");n.classList.add("recording-overlay-title");const c=document.createElement("span");if(c.textContent=i,c.setAttribute("data-i18n","recordingCamera.previewWindowTitle"),n.appendChild(c),this.isSync){const P=document.createElement("span");P.textContent=a,P.setAttribute("data-i18n","recordingCamera.syncPreviewTitle"),n.appendChild(P)}const h=document.createElement("span");h.classList.add("recording-overlay-title-name"),h.textContent=this.cameraName,n.appendChild(h),this.titleDom=h;const u=document.createElement("button");u.textContent="×",u.classList.add("recording-overlay-close-btn"),u.onclick=()=>this.hidePreviewWindow(),o.appendChild(n),o.appendChild(u),this.overlayContainer.appendChild(o);const d=document.createElement("div");d.classList.add("canvas-container"),this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=t;const p=400,f=300,g=e/t;let y=p,v=p/g;v>f&&(v=f,y=f*g),this.canvas.classList.add("recording-overlay-canvas"),this.canvas.style.cssText=`
            width: ${y}px;
            height: ${v}px;
        `,d.appendChild(this.canvas),this.overlayContainer.appendChild(d);const m=document.createElement("div");m.classList.add("camera-info"),this.cameraInfoDom=m,this.overlayContainer.appendChild(m);const _=document.getElementById(this.parentNodeId);_&&_.appendChild(this.overlayContainer),this.makeDraggable(this.overlayContainer,o)}}createHiddenCanvas(e,t){this.cleanupCanvasElements(),this.showPreview=!1,this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=t,this.canvas.style.cssText=`
            position: fixed;
            top: -9999px;
            left: -9999px;
            width: ${e}px;
            height: ${t}px;
            visibility: hidden;
            pointer-events: none;
        `,document.body.appendChild(this.canvas),this.overlayContainer=document.createElement("div"),this.overlayContainer.id="recordingStatus",this.overlayContainer.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 10px 15px;
            border-radius: 5px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            z-index: 10000;
            pointer-events: none;
        `,this.overlayContainer.textContent="录制中...",document.body.appendChild(this.overlayContainer)}makeDraggable(e,t){let r=!1,s=0,i=0,a=0,o=0;const n=document.getElementById(this.parentNodeId);if(!n){console.warn("[RecordingCamera] 未找到父容器元素，无法启用拖动功能");return}const c=p=>{if(!r)return;const f=p.clientX-s,g=p.clientY-i,y=a+f,v=o+g,m=n.getBoundingClientRect(),_=m.width-e.offsetWidth,P=m.height-e.offsetHeight,S=y-m.left,T=v-m.top;e.style.left=Math.max(0,Math.min(S,_))+"px",e.style.top=Math.max(0,Math.min(T,P))+"px",e.style.right="auto",e.style.bottom="auto"},h=()=>{r&&(r=!1,e.style.cursor="move",n.removeEventListener("mousemove",c),n.removeEventListener("mouseup",u),n.removeEventListener("mouseleave",d),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",u))},u=()=>{h()},d=()=>{h()};t.addEventListener("mousedown",p=>{r=!0,s=p.clientX,i=p.clientY;const f=e.getBoundingClientRect();a=f.left,o=f.top,e.style.cursor="grabbing",p.preventDefault(),n.addEventListener("mousemove",c),n.addEventListener("mouseup",u),n.addEventListener("mouseleave",d),document.addEventListener("mousemove",c),document.addEventListener("mouseup",u)})}setPosition(e,t,r){this.camera.position.set(e,t,r),this.camera.updateMatrixWorld(),this.syncWrapperTransform(),this.updateGizmo()}lookAt(e,t,r){this.camera.lookAt(e,t,r),this.camera.updateMatrixWorld(),this.syncWrapperTransform(),this.updateGizmo()}syncWrapperTransform(){this.sceneWrapper&&(this.sceneWrapper.position.copy(this.camera.position),this.sceneWrapper.quaternion.copy(this.camera.quaternion),this.sceneWrapper.scale.set(1,1,1),this.gizmo&&this.gizmo.parent!==this.sceneWrapper&&this.sceneWrapper.add(this.gizmo),this.sceneWrapper.updateMatrixWorld(!0))}syncCameraFromWrapper(){this.sceneWrapper&&(this.sceneWrapper.updateMatrixWorld(!0),this.sceneWrapper.matrixWorld.decompose(this.tempPosition,this.tempQuaternion,this.tempScale),this.camera.position.copy(this.tempPosition),this.camera.quaternion.copy(this.tempQuaternion),this.camera.scale.copy(this.tempScale),this.camera.updateMatrixWorld(!0),this.updateGizmo())}getSceneWrapper(){return this.sceneWrapper}attachSceneObject(e){e.name||(e.name="RecordingCameraWrapper"),this.sceneWrapper=e,this.sceneWrapper.userData||(this.sceneWrapper.userData={}),this.sceneWrapper.userData.recordingCamera=this,this.sceneWrapper.userData.type="recordingCamera",this.gizmo&&this.gizmo.parent!==this.sceneWrapper&&this.sceneWrapper.add(this.gizmo),this.syncWrapperTransform()}createGizmo(e=65280,t){if(this.gizmo)return this.gizmo;this.gizmoColor=e,t!==void 0&&(this.gizmoLength=t);const r=new Jt;r.name="RecordingCameraGizmo",r.position.set(0,0,0),r.layers.set(0);const s=(()=>{const y=this.camera,v=y.near,m=v+this.gizmoLength,_=y.fov*(Math.PI/180),P=y.aspect,S=2*Math.tan(_/2)*v,T=S*P,x=2*Math.tan(_/2)*m,E=x*P,O=new z(-T/2,S/2,-v),C=new z(T/2,S/2,-v),N=new z(-T/2,-S/2,-v),U=new z(T/2,-S/2,-v),G=new z(-E/2,x/2,-m),L=new z(E/2,x/2,-m),A=new z(-E/2,-x/2,-m),X=new z(E/2,-x/2,-m);return{near:{topLeft:O,topRight:C,bottomLeft:N,bottomRight:U},far:{topLeft:G,topRight:L,bottomLeft:A,bottomRight:X}}})(),i=new pt({color:e,linewidth:2,transparent:!0,opacity:.8}),a=new _e().setFromPoints([s.near.topLeft,s.near.topRight,s.near.bottomRight,s.near.bottomLeft,s.near.topLeft]),o=new me(a,i);r.add(o);const n=new _e().setFromPoints([s.far.topLeft,s.far.topRight,s.far.bottomRight,s.far.bottomLeft,s.far.topLeft]),c=new me(n,i);r.add(c);const h=new me(new _e().setFromPoints([s.near.topLeft,s.far.topLeft]),i),u=new me(new _e().setFromPoints([s.near.topRight,s.far.topRight]),i),d=new me(new _e().setFromPoints([s.near.bottomLeft,s.far.bottomLeft]),i),p=new me(new _e().setFromPoints([s.near.bottomRight,s.far.bottomRight]),i);r.add(h,u,d,p);const f=this.camera.near+this.gizmoLength,g=new me(new _e().setFromPoints([new z(0,0,0),new z(0,0,-(this.camera.near+f)/2)]),new pt({color:e,linewidth:1,transparent:!0,opacity:.5}));return r.add(g),this.gizmo=r,this.sceneWrapper&&r.parent!==this.sceneWrapper&&this.sceneWrapper.add(r),this.updateGizmo(),r}updateGizmo(){if(!this.gizmo)return;[...this.gizmo.children].forEach(U=>{U instanceof me&&(U.geometry.dispose(),U.material instanceof vr&&U.material.dispose(),this.gizmo.remove(U))});const e=this.camera,t=e.near,r=t+this.gizmoLength,s=e.fov*(Math.PI/180),i=e.aspect,a=2*Math.tan(s/2)*t,o=a*i,n=2*Math.tan(s/2)*r,c=n*i,h=new z(-o/2,a/2,-t),u=new z(o/2,a/2,-t),d=new z(-o/2,-a/2,-t),p=new z(o/2,-a/2,-t),f=new z(-c/2,n/2,-r),g=new z(c/2,n/2,-r),y=new z(-c/2,-n/2,-r),v=new z(c/2,-n/2,-r),m=new pt({color:this.gizmoColor,linewidth:2,transparent:!0,opacity:.8}),_=new _e().setFromPoints([h,u,p,d,h]),P=new me(_,m);this.gizmo.add(P);const S=new _e().setFromPoints([f,g,v,y,f]),T=new me(S,m);this.gizmo.add(T);const x=new me(new _e().setFromPoints([h,f]),m),E=new me(new _e().setFromPoints([u,g]),m),O=new me(new _e().setFromPoints([d,y]),m),C=new me(new _e().setFromPoints([p,v]),m);this.gizmo.add(x,E,O,C);const N=new me(new _e().setFromPoints([new z(0,0,0),new z(0,0,-(t+r)/2)]),new pt({color:this.gizmoColor,linewidth:1,transparent:!0,opacity:.5}));this.gizmo.add(N),this.sceneWrapper?(this.gizmo.position.set(0,0,0),this.gizmo.quaternion.identity(),this.gizmo.rotation.set(0,0,0)):(this.gizmo.position.copy(this.camera.position),this.gizmo.quaternion.copy(this.camera.quaternion)),this.gizmo.visible=this.gizmoVisible,this.gizmo.updateMatrixWorld(!0)}setGizmoVisible(e){this.gizmoVisible=e,this.gizmo&&(this.gizmo.visible=e)}setGizmoLength(e){if(e<=0){console.warn("[RecordingCamera] gizmo长度必须大于0");return}this.gizmoLength=e,this.gizmo&&this.updateGizmo()}getGizmoLength(){return this.gizmoLength}getGizmo(){return this.gizmo}getSceneObject(){if(!this.sceneWrapper){const t=new Jt;this.attachSceneObject(t)}const e=this.sceneWrapper;return this.gizmo||this.createGizmo(65280),this.gizmo&&e.children.indexOf(this.gizmo)===-1&&e.add(this.gizmo),this.syncWrapperTransform(),e}updateStatusInfo(e){this.statusDom&&(this.statusDom.textContent=e)}async initializeRenderer(e,t,r,s){try{const i=e.backend?.device;if(!i)throw new Error("无法获取WebGPU设备");const a=this.canvas.getContext("webgpu");if(!a)throw new Error("无法获取WebGPU上下文");const o=navigator.gpu.getPreferredCanvasFormat();a.configure({device:i,format:o,alphaMode:"premultiplied"}),this.renderer=new Xr({canvas:this.canvas,antialias:!0,forceWebGL:!1,context:a,device:i}),await this.renderer.init();const n=await _i.initializeRenderer(this.renderer,t,{sourceRenderer:e,originalTexture:s||null,width:this.canvas.width,height:this.canvas.height,pixelRatio:1});return this.recordingEnvMap=n.envMap,this.recordingBackground=n.background,console.log("[RecordingCamera] 开始初始化 GaussianThreeJSRenderer..."),console.log("[RecordingCamera] gaussianModels:",r?`${r.length}个`:"无"),console.log("[RecordingCamera] this.renderer:",this.renderer?"存在":"不存在"),r&&r.length>0&&this.renderer?(console.log("[RecordingCamera] 创建 GaussianThreeJSRenderer..."),this.gaussianRenderer=new ir(this.renderer,t,r),console.log("[RecordingCamera] 调用 gaussianRenderer.init()..."),await this.gaussianRenderer.init(),console.log("[RecordingCamera] 调用 onResize...",this.canvas.width,this.canvas.height),this.gaussianRenderer.onResize(this.canvas.width,this.canvas.height,!0),console.log("[RecordingCamera] 录制相机Gaussian渲染器初始化成功")):((!r||r.length===0)&&console.log("[RecordingCamera] 未提供高斯模型，使用标准 Three.js 渲染流程"),this.renderer||console.warn("[RecordingCamera] 录制渲染器未初始化")),console.log("录制相机渲染器初始化成功"),!0}catch(i){return console.warn("录制相机渲染器初始化失败:",i),this.renderer=null,this.gaussianRenderer=null,!1}}onResize(e=!1,t){if(!this.renderer||!this.overlayContainer)return;this.overlayContainer.style.inset="";let r,s;if(console.log("[RecordingCamera] onResize...",e,t),e&&this.canvas)r=t.width||this.canvas.width,s=t.height||this.canvas.height,console.log("[RecordingCamera] 录制模式 onResize，使用实际像素尺寸:",r,s);else{const i=this.overlayContainer.querySelector(".canvas-container");if(!i||(r=Math.floor(i.clientWidth/2)*2,s=Math.floor(i.clientHeight/2)*2,r===0||s===0))return;console.log("[RecordingCamera] 预览模式 onResize，使用CSS显示尺寸:",r,s)}this.renderer&&this.renderer.setSize(r,s,!1),this.gaussianRenderer&&this.gaussianRenderer.onResize(r,s,e)}async updateGaussianModels(e,t){return new Promise((r,s)=>{let i=this.isPreviewShow;this.gaussianRenderer&&(this.gaussianRenderer=null),e&&e.length>0?(this.isPreviewShow=!1,this.gaussianRenderer=new ir(this.renderer,t,e),console.log("init 高斯renderer",i),this.gaussianRenderer.init().then(()=>{this.isPreviewShow=i,r(!0)}).catch(a=>{console.warn("高斯renderer初始化失败:",a),this.isPreviewShow=i,s(a)})):(console.warn("没有提供高斯模型"),r(!0))})}async render(e){if(!this.renderer){const t="录制渲染器未初始化";console.error(`[RecordingCamera] ${t}`),this.updateStatusInfo(t);return}if(this.isPreviewShow&&this.isPreviewVisible()){this.hideEditorHelpers(e);try{this.camera.updateMatrixWorld(),this.originalEnvMap=e.environment,this.originalBackground=e.background,this.skyboxEnabled&&this.recordingEnvMap&&this.recordingBackground&&(e.environment=this.recordingEnvMap,e.background=this.recordingBackground);try{this.gaussianRenderer?(this.gaussianRenderer.onBeforeRender(this.renderer,e,this.camera),this.gaussianRenderer.renderThreeScene(this.camera),this.gaussianRenderer.drawSplats(this.renderer,e,this.camera)):(this.originalEnvMap===null&&(this.originalEnvMap=e.environment),this.originalBackground===null&&(this.originalBackground=e.background),this.skyboxEnabled&&this.recordingEnvMap&&this.recordingBackground&&(e.environment=this.recordingEnvMap,e.background=this.recordingBackground),this.renderer.render(e,this.camera))}finally{this.originalEnvMap!==null&&(e.environment=this.originalEnvMap),this.originalBackground!==null&&(e.background=this.originalBackground)}const t=this.renderer.backend?.device;t&&t.queue&&await t.queue.onSubmittedWorkDone()}catch(t){console.error("[RecordingCamera] 录制相机渲染失败error:",t),this.updateStatusInfo("Error: Rendering failed")}finally{this.restoreEditorHelpers()}}}getStream(e=30){if(!this.canvas)return console.error("[RecordingCamera] getStream Canvas 未初始化，无法获取流"),null;try{const t=this.canvas.captureStream(e);return t?t.getVideoTracks().length===0?(console.error("[RecordingCamera] getStream 流中没有视频轨道"),null):t:(console.error("[RecordingCamera] getStream captureStream 返回 null"),null)}catch(t){return console.error("获取录制流失败:",t),null}}getParameters(){return{width:this.width,height:this.height,fov:this.camera.fov}}dispose(){this.gizmo&&(this.gizmo.traverse(e=>{e instanceof me&&(e.geometry.dispose(),e.material instanceof vr&&e.material.dispose())}),this.gizmo=null),this.sceneWrapper&&(this.sceneWrapper.parent&&this.sceneWrapper.parent.remove(this.sceneWrapper),this.sceneWrapper=null),this.gaussianRenderer&&(this.gaussianRenderer=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),this.overlayContainer&&this.overlayContainer.parentNode&&(this.overlayContainer.parentNode.removeChild(this.overlayContainer),this.overlayContainer=null),this.canvas&&this.canvas.parentNode&&(this.canvas.parentNode.removeChild(this.canvas),this.canvas=null)}async renderToCanvas(e){if(!this.renderer||!this.sceneWrapper)throw new Error("RecordingCamera is not fully initialized. Renderer or Scene is missing.");const t=this.renderer,r=this.camera,s=this.canvas.width||this.width,i=this.canvas.height||this.height;t.setSize(s,i,!1),r.aspect=s/i,r.updateProjectionMatrix(),this.originalEnvMap=e.environment,this.originalBackground=e.background;try{this.skyboxEnabled&&this.recordingEnvMap&&(e.environment=this.recordingEnvMap),this.skyboxEnabled&&this.recordingBackground&&(e.background=this.recordingBackground);var a=!1;if(this.gaussianRenderer){const u=(Date.now()-window.startTime)/1e3;await this.gaussianRenderer.updateDynamicModels(r,u),this.gaussianRenderer.onBeforeRender(t,e,r);const d=this.renderer.backend?.device;d&&d.queue&&await d.queue.onSubmittedWorkDone(),this.gaussianRenderer.renderThreeScene(r),a=this.gaussianRenderer.drawSplats(t,e,r)}a||(t.render(e,r),console.warn("fall back in three js render camera recording camera"));const o=this.renderer.backend?.device,n=document.createElement("canvas");n.width=s,n.height=i;const c=n.getContext("2d");if(!c)throw new Error("Failed to create context for export canvas");const h=t.domElement;return c.drawImage(h,0,0,s,i),o&&o.queue&&await o.queue.onSubmittedWorkDone(),n}catch(o){throw new Error(`RecordingCamera failed to render frame: ${o.message}`)}finally{this.originalEnvMap!==null&&(e.environment=this.originalEnvMap),this.originalBackground!==null&&(e.background=this.originalBackground),this.originalEnvMap=null,this.originalBackground=null}}}var Aa=(l=>(l.VP9="video/webm; codecs=vp9",l.VP8="video/webm; codecs=vp8",l.H264="video/webm; codecs=h264",l.AV1="video/webm; codecs=av01",l.MP4_H264="video/mp4; codecs=avc1.42E01E",l.MP4_H265="video/mp4; codecs=hev1.1.6.L93.B0",l))(Aa||{}),Oa=(l=>(l.LOW="low",l.MEDIUM="medium",l.HIGH="high",l.NEAR_LOSSLESS="near_lossless",l))(Oa||{});function Da(l){return l.includes("mp4")?".mp4":".webm"}class za{isRecording=!1;muxer=null;videoEncoder=null;recordingCamera=null;scene=null;captureCanvas=null;frameProcessor;currentFrameIndex=0;fps=30;useSSAA=!1;downscaleCanvas=null;downscaleCtx=null;async startRecording(e){if(this.isRecording)throw new Error("录制已在进行中");this.useSSAA=!!e.enableSSAA,this.recordingCamera=e.recordingCamera,this.scene=e.scene,this.captureCanvas=e.captureCanvas||e.recordingCamera.canvas,this.frameProcessor=e.frameProcessor,this.fps=e.mode==="timeline"?e.timelineController?.getFrameRate()||30:e.fps||30;const t=e.resolution?.width||1920,r=e.resolution?.height||1080;let s,i;this.useSSAA?(s=t*2,i=r*2):(s=t,i=r),this.captureCanvas.width=s,this.captureCanvas.height=i;const a=e.recordingCamera.camera;a.aspect=t/r,a.updateProjectionMatrix(),e.mainRenderer.setSize(s,i,!1),await e.recordingCamera.initializeRenderer(e.mainRenderer,e.scene,e.gaussianModels),e.recordingCamera.renderer&&e.recordingCamera.renderer.setSize(s,i,!1),e.recordingCamera.canvas&&(console.log(`[RecordingManager] 强制更新深度纹理: ${e.recordingCamera.canvas.width}x${e.recordingCamera.canvas.height}`),e.recordingCamera.onResize(!0,{width:s,height:i})),this.useSSAA?(this.downscaleCanvas=new OffscreenCanvas(t,r),this.downscaleCtx=this.downscaleCanvas.getContext("2d",{alpha:!1,desynchronized:!0}),this.downscaleCtx&&(this.downscaleCtx.imageSmoothingEnabled=!0,this.downscaleCtx.imageSmoothingQuality="high")):(this.downscaleCanvas=null,this.downscaleCtx=null),this.muxer=new Zs({target:new ei,video:{codec:"avc",width:t,height:r},fastStart:"in-memory"}),this.videoEncoder=new VideoEncoder({output:(o,n)=>this.muxer.addVideoChunk(o,n),error:o=>console.error("VideoEncoder 错误:",o)}),this.videoEncoder.configure({codec:"avc1.640033",width:t,height:r,bitrate:25e6,framerate:this.fps}),this.currentFrameIndex=0,this.isRecording=!0,console.log(`[RecordingManager] 录制开始. 
            模式: ${this.useSSAA?`🔥 超采样开启 (${s}x${i}渲染 -> ${t}x${r}输出)`:`⚡ 普通模式 (${t}x${r}直出)`}
            渲染分辨率: ${s}x${i}
            输出分辨率: ${t}x${r}`),e.mode==="timeline"&&this.setupTimelineMode(e)}setupTimelineMode(e){if(!e.timelineController)throw new Error("TimelineController missing");e.timelineController.registerFrameUpdateCallback(async()=>{await this.renderFrame()})}async renderFrame(){const{scene:e,recordingCamera:t,videoEncoder:r,captureCanvas:s,isRecording:i}=this;if(!(!i||!t||!e||!r||!s))try{const a=await t.renderToCanvas(e);let o;this.frameProcessor?(await this.frameProcessor(a),o=s):o=a;let n;this.useSSAA&&this.downscaleCtx&&this.downscaleCanvas?(this.downscaleCtx.clearRect(0,0,this.downscaleCanvas.width,this.downscaleCanvas.height),this.downscaleCtx.drawImage(o,0,0,this.downscaleCanvas.width,this.downscaleCanvas.height),n=this.downscaleCanvas):n=o;const c=this.currentFrameIndex*1e6/this.fps,h=1e6/this.fps,u=new VideoFrame(n,{timestamp:c,duration:h}),d=this.currentFrameIndex%this.fps===0;r.encode(u,{keyFrame:d}),u.close(),this.currentFrameIndex++}catch(a){console.error("渲染/编码帧失败:",a)}}async stopRecording(){if(!this.isRecording)throw new Error("未在录制");if(console.log("[RecordingManager] 停止录制，正在封装 MP4..."),this.videoEncoder&&(await this.videoEncoder.flush(),this.videoEncoder.close()),this.muxer){this.muxer.finalize();const{buffer:e}=this.muxer.target,t=new Blob([e],{type:"video/mp4"});return this.isRecording=!1,this.videoEncoder=null,this.muxer=null,console.log(`[RecordingManager] MP4 生成完毕: ${(t.size/1024/1024).toFixed(2)} MB`),t}throw new Error("Muxer 未初始化")}isRecordingActive(){return this.isRecording}getStopPromise(){return null}getCompletedBlob(){return null}cancelRecording(){this.isRecording=!1}}async function ro(l,e,t,r=15,s=30,i={width:1920,height:1080},a,o=!0,n={},c,h,u){console.log("🎬 [exportVideo] 初始化导出流程"),console.log("[exportVideo] 分辨率:",i);const d=new za,p=c?"timeline":"realtime";console.log(`[exportVideo] 导出模式: ${p}, timelineController: ${c?"存在":"不存在"}`);const f=a?a.getGaussianModels():void 0;console.log("[exportVideo] 提取gaussianModels:",f?`${f.length}个`:"无"),f&&f.length>0&&f.forEach((y,v)=>{console.log(`[exportVideo] 模型${v}: ${y.name}, visible: ${y.visible}, pointCloud: ${y.getPointCloud()?"有":"无"}`)});const g={mode:p,mainRenderer:l,scene:e,recordingCamera:t,gaussianModels:f,config:n,resolution:i,...p==="timeline"?{timelineController:c}:{duration:r,fps:s},...u?.captureCanvas?{captureCanvas:u.captureCanvas}:{},...u?.frameProcessor?{frameProcessor:u.frameProcessor}:{},enableSSAA:!1};try{if(console.log("[exportVideo] -> startRecording()"),await d.startRecording(g),console.log("[exportVideo] -> RecordingManager 已进入录制状态"),p==="timeline"&&c){const x=c.getTotalFrames(),E=c.getLastKeyframeIndex(),O=x;console.log(`[VideoExport] 时间轴模式：总帧数=${x}, 最后一个关键帧=${E}, 导出帧数=${O} (0到${O-1})`);const C=c.getFrameRate(),N=1e3/C,U=Math.max(5,Math.min(20,N*.4));console.log(`[VideoExport] 帧率同步：帧率=${C} FPS, 每帧时间=${N.toFixed(2)}ms, 等待时间=${U.toFixed(2)}ms`);for(let G=0;G<O;G++){if(!d.isRecordingActive()){console.log(`[VideoExport] 录制已经停止，提前终止帧循环；当前帧=${G}`);break}try{await c.setFrameIndex(G),console.log("frameIndex done",G),await new Promise(L=>setTimeout(L,100))}catch(L){console.error(`时间轴模式：设置帧索引 ${G} 失败:`,L)}if(!d.isRecordingActive())break}if(d.isRecordingActive()){console.log("[VideoExport] 帧循环结束，但 RecordingManager 仍在运行，等待补帧");const G=1e3/c.getFrameRate()}}else if(p==="realtime"){const x=r*1e3+2e3,E=100,O=Date.now();for(console.log(`[VideoExport] 进入实时模式等待循环，duration=${r}s`);d.isRecordingActive()&&Date.now()-O<x;)await new Promise(C=>setTimeout(C,E));d.isRecordingActive()&&console.warn("真实时间模式：等待超时，但录制仍在进行中，继续处理...")}console.log("[exportVideo] 停止录制并收集 Blob");let y;if(d.isRecordingActive())console.log("[exportVideo] -> stopRecording()"),y=await d.stopRecording(),console.log("[exportVideo] <- stopRecording() 完成");else{const x=d.getStopPromise();if(x)console.log("[exportVideo] 等待 stopPromise 完成"),y=await x;else{const E=d.getCompletedBlob();if(E)console.log("[exportVideo] 使用 completedBlob"),y=E;else throw new Error("录制已停止，无法获取视频文件。可能的原因：录制过程中出现异常或已提前结束。")}}console.log("[exportVideo] 开始触发下载");const v=URL.createObjectURL(y),m=document.createElement("a");m.href=v;const _=new Date().toISOString().slice(0,19).replace(/:/g,"-"),P=y.type||"video/webm",S=Da(P),T=h?`Video-${h}-${_}${S}`:`Video-${_}${S}`;m.download=T,document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(v)}catch(y){throw console.error("[exportVideo] 导出失败，准备取消录制"),d.cancelRecording(),y}}class La{transformControls;camera;renderer;overlayScene;currentObject=null;pivotProxy=null;callbacks={};options;pivotMode="aabb";pivotWorld=new z;pivotHelper=null;isDragging=!1;lastPivotWorld=new z;changeStartSnapshot=null;constructor(e,t,r={},s){this.camera=e,this.renderer=t,this.overlayScene=s??null,this.options={mode:"translate",showX:!0,showY:!0,showZ:!0,space:"local",snap:!1,translationSnap:1,rotationSnap:Math.PI/4,scaleSnap:.1,showHelper:!0,size:1,colors:{x:"#ff0000",y:"#00ff00",z:"#0000ff"},pivotMode:"aabb",pivot:void 0,showPivotHelper:!0,...r},this.options.pivot&&this.pivotWorld.copy(this.options.pivot),this.transformControls=new Qs(e,t.domElement),this.setupTransformControls(),this.setupEventListeners(),this.pivotProxy=new Yr,this.pivotProxy.name="VisionaryPivotProxy",this.pivotProxy.userData=this.pivotProxy.userData||{},this.pivotProxy.userData.__visionaryEditorHelper=!0}setupTransformControls(){const e=this.transformControls,t=r=>r==="normal"?"translate":r;e.setMode(t(this.options.mode)),e.setSpace(this.options.space),e.setSize(this.options.size),e.showX=this.options.showX,e.showY=this.options.showY,e.showZ=this.options.showZ,this.options.snap&&(e.translationSnap=this.options.translationSnap,e.rotationSnap=this.options.rotationSnap,e.scaleSnap=this.options.scaleSnap)}setupEventListeners(){const e=this.transformControls;e.addEventListener("change",()=>{this.currentObject&&(this.syncTransformFromProxyToTarget(),this.callbacks.onChange&&this.callbacks.onChange(this.createEvent("change")))}),e.addEventListener("dragging-changed",t=>{this.currentObject&&(this.isDragging=t.value,t.value?(this.snapshotChangeStart(),this.callbacks.onChangeStart&&this.callbacks.onChangeStart(this.createEvent("changeStart"))):(this.callbacks.onChangeEnd&&this.callbacks.onChangeEnd(this.createEvent("changeEnd")),this.options.mode!=="translate"&&this.updatePivotProxyTransform(),this.changeStartSnapshot=null))}),e.addEventListener("objectChange",()=>{this.currentObject&&(this.syncTransformFromProxyToTarget(),this.callbacks.onObjectChange&&this.callbacks.onObjectChange(this.createEvent("objectChange")))})}createEvent(e){if(!this.currentObject)throw new Error("No current object set");return{type:e,target:this.currentObject,mode:this.options.mode,translation:this.currentObject.position.clone(),rotation:this.currentObject.rotation.clone(),scale:this.currentObject.scale.clone(),pivot:this.pivotWorld.clone()}}attachToScene(e){this.overlayScene=e;const t=this.transformControls.getHelper();t.name=t.name||"VisionaryTransformControls",t.userData=t.userData||{},t.userData.__visionaryEditorHelper=!0,e.add(t),t.traverse(r=>{if(r&&r.isObject3D){r.renderOrder=9999;const s=r.material;s&&(Array.isArray(s)?s:[s]).forEach(i=>{i&&i.isMaterial&&(i.depthTest=!1,i.depthWrite=!1,i.transparent=!0)})}}),this.pivotProxy&&!this.pivotProxy.parent&&e.add(this.pivotProxy),this.options.showPivotHelper&&this.ensurePivotHelper(e)}detachFromScene(e){e.remove(this.transformControls.getHelper()),this.pivotProxy&&this.pivotProxy.parent===e&&e.remove(this.pivotProxy),this.pivotHelper&&this.pivotHelper.parent===e&&e.remove(this.pivotHelper)}setTarget(e){if(this.currentObject=e,e){if(this.pivotProxy){const t=this.overlayScene??e.parent??e.scene??null;t&&this.pivotProxy.parent!==t&&(this.pivotProxy.parent?.remove(this.pivotProxy),t.add(this.pivotProxy))}this.pivotProxy&&(this.transformControls.attach(this.pivotProxy),this.updatePivotProxyTransform()),this.updatePivotHelper()}else this.transformControls.detach()}getTarget(){return this.currentObject}setMode(e){this.options.mode=e;const t=e==="normal"?"translate":e;this.transformControls.setMode(t)}getMode(){return this.options.mode}setSpace(e){this.options.space=e,this.transformControls.setSpace(e),this.isDragging||this.updatePivotProxyTransform(),globalThis.GS_DEBUG_FLAG&&(console.log(`[GizmoController] Space set to: ${e}`),console.log(`[GizmoController] TransformControls.space: ${this.transformControls.space}`))}getSpace(){return this.options.space}setSize(e){this.options.size=e,this.transformControls.setSize(e)}setEnabled(e){this.transformControls.enabled=e}getEnabled(){return this.transformControls.enabled}setCallbacks(e){this.callbacks={...this.callbacks,...e}}update(){this.pivotWorld.equals(this.lastPivotWorld)||(this.isDragging||this.updatePivotProxyTransform(),this.lastPivotWorld.copy(this.pivotWorld)),this.updatePivotHelper()}dispose(){this.transformControls.dispose(),this.currentObject=null,this.callbacks={}}getTransformControls(){return this.transformControls}setPivotMode(e){this.pivotMode=e}getPivotMode(){return this.pivotMode}setPivot(e){this.pivotWorld.copy(e),this.updatePivotProxyTransform(),this.updatePivotHelper(),this.lastPivotWorld.copy(e)}getPivot(){return this.pivotWorld.clone()}snapshotChangeStart(){if(!this.currentObject||!this.pivotProxy)return;const e=this.currentObject,t=this.pivotProxy;e.updateWorldMatrix(!0,!1),t.updateWorldMatrix(!0,!1);const r=e.matrixWorld.clone(),s=t.matrixWorld.clone(),i=new z,a=new He,o=new z;r.decompose(i,a,o);const n=new z,c=new He,h=new z;s.decompose(n,c,h);const u=new je;if(e.parent){const d=e.parent.matrixWorld.clone();u.copy(d).invert()}else u.identity();this.changeStartSnapshot={objPosW:i.clone(),objQuatW:a.clone(),objScaleW:o.clone(),pivotProxyPosW:n.clone(),pivotProxyQuatW:c.clone(),pivotProxyScaleW:h.clone(),parentInvMatrix:u}}updatePivotProxyTransform(){if(!this.pivotProxy)return;const e=this.pivotProxy,t=this.currentObject,r=new He;if(this.options.space==="local"&&t){t.updateWorldMatrix(!0,!1);const n=new z,c=new z;t.matrixWorld.decompose(n,r,c)}else r.identity();const s=new je().compose(this.pivotWorld,r,new z(1,1,1));if(e.parent){e.parent.updateMatrixWorld();const n=new je().copy(e.parent.matrixWorld).invert();s.premultiply(n)}const i=new z,a=new He,o=new z;s.decompose(i,a,o),e.position.copy(i),e.quaternion.copy(a),e.scale.set(1,1,1)}syncTransformFromProxyToTarget(){if(!this.currentObject||!this.pivotProxy||!this.changeStartSnapshot)return;const e=this.currentObject,t=this.pivotProxy,{objPosW:r,objQuatW:s,objScaleW:i,pivotProxyPosW:a,pivotProxyQuatW:o,pivotProxyScaleW:n,parentInvMatrix:c}=this.changeStartSnapshot;t.updateWorldMatrix(!0,!1);const h=t.matrixWorld.clone(),u=new z,d=new He,p=new z;if(h.decompose(u,d,p),this.options.mode==="translate"){const f=new z().subVectors(u,a),g=new z().addVectors(r,f),y=new z().copy(g).applyMatrix4(c);e.position.copy(y),this.pivotWorld.copy(u)}else if(this.options.mode==="rotate"){const f=new He().multiplyQuaternions(d,o.clone().invert()),g=new z().subVectors(r,a).clone().applyQuaternion(f),y=new z().addVectors(u,g),v=new z().copy(y).applyMatrix4(c);e.position.copy(v),e.quaternion.multiplyQuaternions(f,s)}else if(this.options.mode==="scale"){const f=new z(p.x/(n.x||1),p.y/(n.y||1),p.z/(n.z||1)),g=new z().subVectors(r,a).clone().multiply(f),y=new z().addVectors(u,g),v=new z().copy(y).applyMatrix4(c);e.position.copy(v),e.scale.multiplyVectors(i,f)}}ensurePivotHelper(e){if(this.pivotHelper){this.pivotHelper.userData=this.pivotHelper.userData||{},this.pivotHelper.userData.__visionaryEditorHelper=!0,this.pivotHelper.name=this.pivotHelper.name||"VisionaryPivotHelper",e.children.includes(this.pivotHelper)||e.add(this.pivotHelper),this.pivotHelper.renderOrder=9999;const s=this.pivotHelper.material;s&&(Array.isArray(s)?s:[s]).forEach(i=>{i&&i.isMaterial&&(i.depthTest=!1,i.depthWrite=!1,i.transparent=!0)});return}const t=new Ks(.3*(this.options.size||1));t.matrixAutoUpdate=!0,t.name="VisionaryPivotHelper",t.userData=t.userData||{},t.userData.__visionaryEditorHelper=!0,t.renderOrder=9999;const r=t.material;r&&(Array.isArray(r)?r:[r]).forEach(s=>{s&&s.isMaterial&&(s.depthTest=!1,s.depthWrite=!1,s.transparent=!0)}),this.pivotHelper=t,e.add(t),this.updatePivotHelper()}updatePivotHelper(){this.pivotHelper&&(this.pivotHelper.position.copy(this.pivotWorld),this.pivotHelper.visible=!!this.options.showPivotHelper)}}class so{scene;overlayScene;camera;renderer;gizmoController;currentTarget=null;gizmoEnabled=!0;callbacks={};cameraControls=null;constructor(e,t,r,s={},i){this.scene=e,this.overlayScene=i??e,this.camera=t,this.renderer=r,this.gizmoController=new La(t,r,s,this.overlayScene),this.gizmoController.setCallbacks({onChange:a=>this.handleGizmoChange(a),onChangeStart:a=>this.handleGizmoChangeStart(a),onChangeEnd:a=>this.handleGizmoChangeEnd(a),onObjectChange:a=>this.handleGizmoObjectChange(a)}),this.gizmoController.attachToScene(this.overlayScene),s.pivot&&this.gizmoController.setPivot(s.pivot.clone()),s.pivotMode&&this.gizmoController.setPivotMode(s.pivotMode)}setTarget(e){this.currentTarget=e,this.gizmoController.setTarget(e),e&&this.getPivotMode()==="aabb"&&this.useAabbCenterPivot(),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Target set to:",e?.name||"null")}getTarget(){return this.currentTarget}setMode(e){this.gizmoController.setMode(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Mode set to:",e)}getMode(){return this.gizmoController.getMode()}setEnabled(e){this.gizmoEnabled=e,this.gizmoController.setEnabled(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Enabled:",e)}getEnabled(){return this.gizmoEnabled&&this.gizmoController.getEnabled()}setSpace(e){this.gizmoController.setSpace(e),globalThis.GS_DEBUG_FLAG&&console.log(`[GizmoManager] Space set to: ${e}`)}getSpace(){return this.gizmoController.getSpace()}setSize(e){this.gizmoController.setSize(e)}setPivotMode(e){this.gizmoController.setPivotMode(e)}getPivotMode(){return this.gizmoController.getPivotMode()}setPivot(e){this.gizmoController.setPivot(e)}getPivot(){return this.gizmoController.getPivot()}useAabbCenterPivot(){const e=this.currentTarget;if(!e)return;const t=new qr().setFromObject(e),r=new z;t.getCenter(r),this.gizmoController.setPivot(r),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Pivot set to AABB center:",r.toArray())}setCallbacks(e){this.callbacks={...this.callbacks,...e}}setCameraControls(e){this.cameraControls=e,globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Camera controls set:",e)}getCameraControls(){return this.cameraControls}resolveCameraControls(){if(this.cameraControls)return this.cameraControls;try{const e=globalThis?.globalTools?.cameraTools?.cameraController;e&&(this.cameraControls=e,globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Camera controls resolved from globalTools:",e))}catch(e){globalThis.GS_DEBUG_FLAG&&console.warn("[Gizmo] Failed to resolve camera controls automatically:",e)}return this.cameraControls}handleGizmoChange(e){this.callbacks.onChange&&this.callbacks.onChange(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Change:",e)}handleGizmoChangeStart(e){const t=this.resolveCameraControls();t&&(typeof t.setEnabled=="function"?t.setEnabled(!1):typeof t.enabled<"u"&&(t.enabled=!1),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Camera controls disabled during transform")),this.callbacks.onChangeStart&&this.callbacks.onChangeStart(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Change start:",e)}handleGizmoChangeEnd(e){const t=this.resolveCameraControls();t&&(typeof t.setEnabled=="function"?t.setEnabled(!0):typeof t.enabled<"u"&&(t.enabled=!0),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Camera controls re-enabled after transform")),this.callbacks.onChangeEnd&&this.callbacks.onChangeEnd(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Change end:",e)}handleGizmoObjectChange(e){this.callbacks.onObjectChange&&this.callbacks.onObjectChange(e),globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Object change:",e)}update(){this.gizmoController.update()}onResize(){globalThis.GS_DEBUG_FLAG&&console.log("[Gizmo] Resize handled")}dispose(){this.gizmoController.detachFromScene(this.overlayScene),this.gizmoController.dispose(),this.currentTarget=null,this.callbacks={}}getGizmoController(){return this.gizmoController}getTransformControls(){return this.gizmoController.getTransformControls()}}export{it as $,Aa as D,Oa as F,oa as P,so as S,Za as V,ja as X,ro as _,ys as a,st as b,eo as c,to as j,qa as w,Ka as z};
//# sourceMappingURL=visionary-core-B3DJUYV-.js.map
