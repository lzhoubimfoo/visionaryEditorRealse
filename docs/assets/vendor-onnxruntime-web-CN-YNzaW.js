/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var qo=Object.defineProperty,Q1=Object.getOwnPropertyDescriptor,c_=Object.getOwnPropertyNames,X1=Object.prototype.hasOwnProperty,oo=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Y=(e,t)=>function(){return e&&(t=(0,e[c_(e)[0]])(e=0)),t},Bn=(e,t)=>{for(var r in t)qo(e,r,{get:t[r],enumerable:!0})},Y1=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of c_(t))!X1.call(e,i)&&i!==r&&qo(e,i,{get:()=>t[i],enumerable:!(n=Q1(t,i))||n.enumerable});return e},Ni=e=>Y1(qo({},"__esModule",{value:!0}),e),Xr,Xt,Pr,td,p_,f_=Y({"common/dist/esm/backend-impl.js"(){Xr=new Map,Xt=[],Pr=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){const n=Xr.get(e);if(n===void 0)Xr.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){const i=Xt.indexOf(e);i!==-1&&Xt.splice(i,1);for(let a=0;a<Xt.length;a++)if(Xr.get(Xt[a]).priority<=r){Xt.splice(a,0,e);return}Xt.push(e)}return}throw new TypeError("not a valid backend")},td=async e=>{const t=Xr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{const r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},p_=async e=>{const t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?Xt:r;let i;const a=[],s=new Set;for(const u of n){const l=await td(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(const{name:u,err:l}of a)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);const o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}}),J1=Y({"common/dist/esm/backend.js"(){f_()}}),h_,ex=Y({"common/dist/esm/version.js"(){h_="1.22.0"}}),ua,lt,m_=Y({"common/dist/esm/env-impl.js"(){ex(),ua="warning",lt={wasm:{},webgl:{},webgpu:{},versions:{common:h_},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ua=e}},get logLevel(){return ua}},Object.defineProperty(lt,"logLevel",{enumerable:!0})}}),Re,tx=Y({"common/dist/esm/env.js"(){m_(),Re=lt}}),g_,__,rx=Y({"common/dist/esm/tensor-conversion-impl.js"(){g_=(e,t)=>{const r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];const n=r.getContext("2d");if(n!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);const s=t?.format!==void 0?t.format:"RGB",o=t?.norm;let u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));const d=a*i;let c=0,p=d,h=d*2,m=-1;s==="RGBA"?(c=0,p=d,h=d*2,m=d*3):s==="RGB"?(c=0,p=d,h=d*2):s==="RBG"&&(c=0,h=d,p=d*2);for(let g=0;g<a;g++)for(let $=0;$<i;$++){const y=(e.data[c++]-l[0])*u[0],_=(e.data[p++]-l[1])*u[1],v=(e.data[h++]-l[2])*u[2],b=m===-1?255:(e.data[m++]-l[3])*u[3];n.fillStyle="rgba("+y+","+_+","+v+","+b+")",n.fillRect($,g,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},__=(e,t)=>{const r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d");let n;if(r!=null){let i,a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);const o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm;let l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));const c=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");const p=4;let h=0,m=1,g=2,$=3,y=0,_=c,v=c*2,b=-1;o==="RGBA"?(y=0,_=c,v=c*2,b=c*3):o==="RGB"?(y=0,_=c,v=c*2):o==="RBG"&&(y=0,v=c,_=c*2),n=r.createImageData(i,a);for(let S=0;S<a*i;h+=p,m+=p,g+=p,$+=p,S++)n.data[h]=(e.data[y++]-d[0])*l[0],n.data[m]=(e.data[_++]-d[1])*l[1],n.data[g]=(e.data[v++]-d[2])*l[2],n.data[$]=b===-1?255:(e.data[b++]-d[3])*l[3]}else throw new Error("Can not access image data");return n}}}),Fn,y_,w_,$_,b_,v_,nx=Y({"common/dist/esm/tensor-factory-impl.js"(){Vo(),Fn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");const{height:r,width:n}=t,i=t.norm??{mean:255,bias:0};let a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];const o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=r*n,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3);let c=4,p=0,h=1,m=2,g=3,$=0,y=l,_=l*2,v=-1;o==="RGB"&&(c=3,p=0,h=1,m=2,g=-1),u==="RGBA"?v=l*3:u==="RBG"?($=0,_=l,y=l*2):u==="BGR"&&(_=0,y=l,$=l*2);for(let S=0;S<l;S++,p+=c,m+=c,h+=c,g+=c)d[$++]=(e[p]+s[0])/a[0],d[y++]=(e[h]+s[1])/a[1],d[_++]=(e[m]+s[2])/a[2],v!==-1&&g!==-1&&(d[v++]=(e[g]+s[3])/a[3]);return u==="RGBA"?new rt("float32",d,[1,4,r,n]):new rt("float32",d,[1,3,r,n])},y_=async(e,t)=>{const r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string";let s,o=t??{};const u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(r){const d=u();d.width=e.width,d.height=e.height;const c=l(d);if(c!=null){let p=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=p,o.width=h}else o.tensorFormat="RGBA",o.height=p,o.width=h;c.drawImage(e,0,0),s=c.getImageData(0,0,h,p).data}else throw new Error("Can not access image data")}else if(n){let d,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,c=t.resizedWidth):(d=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=d,o.width=c,t!==void 0){const p=u();p.width=c,p.height=d;const h=l(p);if(h!=null)h.putImageData(e,0,0),s=h.getImageData(0,0,c,d).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");const d=u();d.width=e.width,d.height=e.height;const c=l(d);if(c!=null){const p=e.height,h=e.width;return c.drawImage(e,0,0,h,p),s=c.getImageData(0,0,h,p).data,o.height=p,o.width=h,Fn(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((d,c)=>{const p=u(),h=l(p);if(!e||!h)return c();const m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,h.drawImage(m,0,0,p.width,p.height);const g=h.getImageData(0,0,p.width,p.height);o.height=p.height,o.width=p.width,d(Fn(g.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Fn(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},w_=(e,t)=>{const{width:r,height:n,download:i,dispose:a}=t,s=[1,n,r,4];return new rt({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},$_=(e,t)=>{const{dataType:r,dims:n,download:i,dispose:a}=t;return new rt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:a})},b_=(e,t)=>{const{dataType:r,dims:n,download:i,dispose:a}=t;return new rt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:a})},v_=(e,t,r)=>new rt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}}),_r,$n,la,x_,ix=Y({"common/dist/esm/tensor-impl-type-mapping.js"(){_r=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),$n=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),la=!1,x_=()=>{if(!la){la=!0;const e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(_r.set("int64",BigInt64Array),$n.set(BigInt64Array,"int64")),t&&(_r.set("uint64",BigUint64Array),$n.set(BigUint64Array,"uint64")),n?(_r.set("float16",r),$n.set(r,"float16")):_r.set("float16",Uint16Array)}}}}),S_,k_,ax=Y({"common/dist/esm/tensor-utils-impl.js"(){Vo(),S_=e=>{let t=1;for(let r=0;r<e.length;r++){const n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},k_=(e,t)=>{switch(e.location){case"cpu":return new rt(e.type,e.data,t);case"cpu-pinned":return new rt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new rt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new rt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new rt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}}),rt,Vo=Y({"common/dist/esm/tensor-impl.js"(){rx(),nx(),ix(),ax(),rt=class{constructor(e,t,r){x_();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{const s=_r.get(n);if(!s)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{const u=_r.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");const u=typeof e[0];if(u==="string")n="string",s=e;else if(u==="boolean")n="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",s=Uint8Array.from(e);else{const u=$n.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}const a=S_(i);if(this.cpuData&&a!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=a}static async fromImage(e,t){return y_(e,t)}static fromTexture(e,t){return w_(e,t)}static fromGpuBuffer(e,t){return $_(e,t)}static fromMLTensor(e,t){return b_(e,t)}static fromPinnedBuffer(e,t,r){return v_(e,t,r)}toDataURL(e){return g_(this,e)}toImageData(e){return __(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;const t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return k_(this,e)}}}}),At,I_=Y({"common/dist/esm/tensor.js"(){Vo(),At=rt}}),bi,da,Rt,xt,T_=Y({"common/dist/esm/trace.js"(){m_(),bi=(e,t)=>{(typeof lt.trace>"u"?!lt.wasm.trace:!lt.trace)||console.timeStamp(`${e}::ORT::${t}`)},da=(e,t)=>{const r=new Error().stack?.split(/\r\n|\r|\n/g)||[];let n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(a+=`::${t}`),bi("CPU",a);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},Rt=e=>{(typeof lt.trace>"u"?!lt.wasm.trace:!lt.trace)||da("BEGIN",e)},xt=e=>{(typeof lt.trace>"u"?!lt.wasm.trace:!lt.trace)||da("END",e)}}}),E_,sx=Y({"common/dist/esm/inference-session-impl.js"(){f_(),I_(),T_(),E_=class z_{constructor(t){this.handler=t}async run(t,r,n){Rt();const i={};let a={};if(typeof t!="object"||t===null||t instanceof At||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof At)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(const l of r){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let l=!1;const d=Object.getOwnPropertyNames(r);for(const c of this.outputNames)if(d.indexOf(c)!==-1){const p=r[c];(p===null||p instanceof At)&&(l=!0,s=!1,i[c]=p)}if(l){if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(const l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(const l of this.outputNames)i[l]=null;const o=await this.handler.run(t,i,a),u={};for(const l in o)if(Object.hasOwnProperty.call(o,l)){const d=o[l];d instanceof At?u[l]=d:u[l]=new At(d.type,d.data,d.dims)}return xt(),u}async release(){return this.handler.dispose()}static async create(t,r,n,i){Rt();let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){const d=t;let c=0,p=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(c=r,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(p=t.byteLength-c,typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-c}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(d,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");const[o,u]=await p_(s),l=await o.createInferenceSessionHandler(a,u);return xt(),new z_(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}}),C_,ox=Y({"common/dist/esm/inference-session.js"(){sx(),C_=E_}}),ux=Y({"common/dist/esm/tensor-conversion.js"(){}}),lx=Y({"common/dist/esm/tensor-factory.js"(){}}),dx=Y({"common/dist/esm/onnx-model.js"(){}}),cx=Y({"common/dist/esm/onnx-value.js"(){}}),O_={};Bn(O_,{InferenceSession:()=>C_,TRACE:()=>bi,TRACE_FUNC_BEGIN:()=>Rt,TRACE_FUNC_END:()=>xt,Tensor:()=>At,env:()=>Re,registerBackend:()=>Pr});var kt=Y({"common/dist/esm/index.js"(){J1(),tx(),ox(),I_(),ux(),lx(),T_(),dx(),cx()}}),Vr,Wo=Y({"web/lib/wasm/wasm-utils-env.ts"(){Vr=!1}}),A_={};Bn(A_,{default:()=>B_});var ca,pa,B_,px=Y({"web/lib/wasm/proxy-worker/main.ts"(){M0(),zr(),Go(),ca="ort-wasm-proxy-worker",pa=globalThis.self?.name===ca,pa&&(self.onmessage=e=>{const{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Fo(r.wasm).then(()=>{ou(r).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})})},n=>{postMessage({type:t,err:n})});break;case"init-ep":{const{epName:n,env:i}=r;uu(i,n).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{const{buffer:n}=r,i=zi(n);postMessage({type:t,out:i});break}case"create":{const{model:n,options:i}=r;lu(n,i).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":du(r),postMessage({type:t});break;case"run":{const{sessionId:n,inputIndices:i,inputs:a,outputIndices:s,options:o}=r;cu(n,i,a,s,new Array(s.length).fill(null),o).then(u=>{u.some(l=>l[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},fu([...a,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":pu(r),postMessage({type:t});break;default:}}catch(n){postMessage({type:t,err:n})}}),B_=pa?null:e=>new Worker(e??et,{type:"module",name:ca})}}),fa,rd,nd,et,Lo,jn,id,ad,ha,sd,ma,R_,ga,M_,Go=Y({"web/lib/wasm/wasm-utils-import.ts"(){Wo(),fa=Vr||typeof location>"u"?void 0:location.origin,rd=import.meta.url>"file:"&&import.meta.url<"file;",nd=()=>{if(!Vr){if(rd){const e=URL;return new URL(new e("ort.webgpu.mjs",import.meta.url).href,fa).href}return import.meta.url}},et=nd(),Lo=()=>{if(et&&!et.startsWith("blob:"))return et.substring(0,et.lastIndexOf("/")+1)},jn=(e,t)=>{try{const r=t??et;return(r?new URL(e,r):new URL(e)).origin===fa}catch{return!1}},id=(e,t)=>{const r=t??et;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},ad=(e,t)=>`${t??"./"}${e}`,ha=async e=>{const r=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(r)},sd=async e=>(await import(e)).default,ma=(px(),Ni(A_)).default,R_=async()=>{if(!et)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(jn(et))return[void 0,ma()];const e=await ha(et);return[e,ma(e)]},ga=void 0,M_=async(e,t,r)=>{if(!e&&!t&&ga&&et&&jn(et))return[void 0,ga];{const n="ort-wasm-simd-threaded.jsep.mjs",i=e??id(n,t),a=!Vr&&r&&i&&!jn(i,t),s=a?await ha(i):i??ad(n,t);return[a?s:void 0,await sd(s)]}}}}),_a,Hn,Yr,ya,od,ud,ld,Fo,Ae,zr=Y({"web/lib/wasm/wasm-factory.ts"(){Go(),Hn=!1,Yr=!1,ya=!1,od=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ud=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ld=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Fo=async e=>{if(Hn)return Promise.resolve();if(Yr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ya)throw new Error("previous call to 'initializeWebAssembly()' failed.");Yr=!0;const t=e.initTimeout;let r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!ld())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ud())throw new Error("WebAssembly SIMD is not supported in the current environment.")}const n=od();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);const i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i?.mjs,o=s?.href??s,u=i?.wasm,l=u?.href??u,d=e.wasmBinary,[c,p]=await M_(o,a,r>1);let h=!1;const m=[];if(t>0&&m.push(new Promise(g=>{setTimeout(()=>{h=!0,g()},t)})),m.push(new Promise((g,$)=>{const y={numThreads:r};if(d)y.wasmBinary=d;else if(l||a)y.locateFile=_=>l??a+_;else if(o&&o.indexOf("blob:")!==0)y.locateFile=_=>new URL(_,o).href;else if(c){const _=Lo();_&&(y.locateFile=v=>_+v)}p(y).then(_=>{Yr=!1,Hn=!0,_a=_,g(),c&&URL.revokeObjectURL(c)},_=>{Yr=!1,ya=!0,$(_)})})),await Promise.race(m),h)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ae=()=>{if(Hn&&_a)return _a;throw new Error("WebAssembly is not initialized yet.")}}}),bt,vi,ze,jo=Y({"web/lib/wasm/wasm-utils.ts"(){zr(),bt=(e,t)=>{const r=Ae(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},vi=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,a])=>{const s=t?t+i:i;if(typeof a=="object")vi(a,s+".",r,n);else if(typeof a=="string"||typeof a=="number")n(s,a.toString());else if(typeof a=="boolean")n(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},ze=e=>{const t=Ae(),r=t.stackSave();try{const n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);const a=Number(t.getValue(i,n===4?"i32":"i64")),s=t.getValue(i+n,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}}),D_,fx=Y({"web/lib/wasm/run-options.ts"(){zr(),jo(),D_=e=>{const t=Ae();let r=0;const n=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=bt(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),r===0&&ze("Can't create run options."),e?.extra!==void 0&&vi(e.extra,"",new WeakSet,(s,o)=>{const u=bt(s,n),l=bt(o,n);t._OrtAddRunConfigEntry(r,u,l)!==0&&ze(`Can't set a run config entry: ${s} - ${o}.`)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(s=>t._free(s)),a}}}}),dd,cd,pd,Jr,fd,P_,hx=Y({"web/lib/wasm/session-options.ts"(){zr(),jo(),dd=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},cd=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},pd=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});const t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Jr=(e,t,r,n)=>{const i=bt(t,n),a=bt(r,n);Ae()._OrtAddSessionConfigEntry(e,i,a)!==0&&ze(`Can't set a session config entry: ${t} - ${r}.`)},fd=async(e,t,r)=>{for(const n of t){let i=typeof n=="string"?n:n.name;const a=[];switch(i){case"webnn":if(i="WEBNN",typeof n!="string"){const c=n?.deviceType;c&&Jr(e,"deviceType",c,r)}break;case"webgpu":if(i="JS",typeof n!="string"){const d=n;if(d?.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);Jr(e,"preferredLayout",d.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}const s=bt(i,r),o=a.length;let u=0,l=0;if(o>0){u=Ae()._malloc(o*Ae().PTR_SIZE),r.push(u),l=Ae()._malloc(o*Ae().PTR_SIZE),r.push(l);for(let d=0;d<o;d++)Ae().setValue(u+d*Ae().PTR_SIZE,a[d][0],"*"),Ae().setValue(l+d*Ae().PTR_SIZE,a[d][1],"*")}await Ae()._OrtAppendExecutionProvider(e,s,u,l,o)!==0&&ze(`Can't append execution provider: ${i}.`)}},P_=async e=>{const t=Ae();let r=0;const n=[],i=e||{};pd(i);try{const a=dd(i.graphOptimizationLevel??"all"),s=cd(i.executionMode??"sequential"),o=typeof i.logId=="string"?bt(i.logId,n):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log serverity level is not valid: ${u}`);const l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);const d=typeof i.optimizedModelFilePath=="string"?bt(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,l,d),r===0&&ze("Can't create session options."),i.executionProviders&&await fd(r,i.executionProviders,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Jr(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(const[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);const h=bt(c,n);t._OrtAddFreeDimensionOverride(r,h,p)!==0&&ze(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&vi(i.extra,"",new WeakSet,(c,p)=>{Jr(r,c,p,n)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ze("Can't release session options."),n.forEach(s=>t._free(s)),a}}}}),yr,Vt,wr,Ui,xi,Ho,Ko,uo,ce=Y({"web/lib/wasm/wasm-common.ts"(){yr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Vt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},wr=(e,t)=>{const r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return r>0?Math.ceil(n*r):void 0},Ui=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},xi=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ho=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ko=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",uo=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}}),Si,N_=Y({"web/lib/wasm/wasm-utils-load-file.ts"(){Wo(),Si=async e=>{if(typeof e=="string")if(Vr)try{const{readFile:t}=oo("node:fs/promises");return new Uint8Array(await t(e))}catch(t){if(t.code==="ERR_FS_FILE_TOO_LARGE"){const{createReadStream:r}=oo("node:fs"),n=r(e),i=[];for await(const a of n)i.push(a);return new Uint8Array(Buffer.concat(i))}throw t}else{const t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);const r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);const i=t.body.getReader();let a;try{a=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){const u=Math.ceil(n/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){const{done:o,value:u}=await i.read();if(o)break;const l=u.byteLength;new Uint8Array(a,s,l).set(u),s+=l}return new Uint8Array(a,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}}),hd,md,gd,_d,Zo,yd,be,Lt=Y({"web/lib/wasm/jsep/log.ts"(){ce(),hd=["V","I","W","E","F"],md=(e,t)=>{console.log(`[${hd[e]},${new Date().toISOString()}]${t}`)},Zo=(e,t)=>{gd=e,_d=t},yd=(e,t)=>{const r=xi(e),n=xi(gd);r>=n&&md(r,typeof t=="function"?t():t)},be=(...e)=>{_d&&yd(...e)}}}),wd,Wr,D,ki,U_,q_,V_,fe=Y({"web/lib/wasm/jsep/util.ts"(){wd=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Wr=class{static calcShape(e,t,r=!1){const n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;const a=Math.max(e.length,t.length),s=new Array(a);if(r){if(n<2||i<2)return;const o=wd.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){const u=n-o<0?1:e[n-o],l=i-o<0?1:t[i-o];if(u!==l&&u>1&&l>1)return;const d=Math.max(u,l);if(u&&l)s[a-o]=Math.max(u,l);else{if(d>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){const r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},D=class _i{static size(t){return _i.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){const n=t.length;if(n===0)return[];const i=new Array(n);let a=n-1;for(;a>=0;){if(t[a]%r===0){i[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,r/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return _i.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return _i.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let a=r;a<n;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){const r=t.length;if(r===0)return[];if(r===1)return[1];const n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){const n=t.length;return t.map((i,a)=>i+r[a]+r[a+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},ki=class bn{static adjustPoolAttributes(t,r,n,i,a,s){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<n.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=n[o]||s[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)bn.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],n[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,a,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");const u=[r[0],r[1]];return bn.computeShapeHelper(t,r,u,n,i,a,s,o),u}static computeConvOutputShape(t,r,n,i,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");const u=[t[0],r[0]];return bn.computeShapeHelper(!1,t,u,n,i,a,s,o),u}static computeShapeHelper(t,r,n,i,a,s,o,u){if(t)for(let l=0;l<r.length-2;l++)n.push(1);else for(let l=0;l<r.length-2;l++)n.push(bn.adjustPadAndReturnShape(r[l+2],i[l],a[l],s[l],o,l,l+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,i,a,s,o,u){const l=n*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-l)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{const c=((t+r-1)/r-1)*r+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),a[o]=c-a[s],Math.floor((t+c-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-l)/r+1)}},U_=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(n?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!Wr.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},q_=-34028234663852886e22,V_=34028234663852886e22}}),Qo,W_=Y({"web/lib/wasm/jsep/tensor-view.ts"(){ce(),Qo=(e,t)=>new(Ui(t))(e)}}),wa,lo,$a,$d,ba,bd,va,xa,Sa,vd,L_,mx=Y({"web/lib/wasm/jsep/webnn/tensor-manager.ts"(){ce(),Lt(),wa=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),lo=(e,t)=>{if(t==="int32")return e;const r=wa.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);const n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);const i=e.byteLength/n,a=new(Ui(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{const s=new Int32Array(i);for(let o=0;o<i;o++){const u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");const s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},$a=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");const r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{const i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");const i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");const i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");const i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},$d=1,ba=()=>$d++,bd=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),va=(e,t)=>{const r=wa.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},xa=class{constructor(e){this.isDataConverted=!1;const{sessionId:t,context:r,tensor:n,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return va(this.dataType,this.tensorShape)}destroy(){be("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){const t=await this.mlContext.readTensor(this.mlTensor),r=$a(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},Sa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){const i=this.tensorManager.getMLContext(e);let a;if(!i.opSupportLimits().input.dataTypes.includes(t)){if(a=bd.get(t),!a||!i.opSupportLimits().input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);be("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==va(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}const s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=lo(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else be("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){const t=this.wrapper?.isDataConverted?$a(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},vd=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){const t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){const e=ba();return this.tensorTrackersById.set(e,new Sa(this)),e}releaseTensorId(e){const t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){be("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);const a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,n,i)}upload(e,t){const r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){be("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);const r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(const t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){const i=this.getMLContext(e),a=ba(),s=new xa({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(a,new Sa(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,n,i,a,s){const o=this.getMLContext(e);for(const[l,d]of this.freeTensors.entries())if(d.canReuseTensor(o,t,r)){be("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);const c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}be("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);const u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:n,writable:i,readable:a});return new xa({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},L_=(...e)=>new vd(...e)}}),en,xd,G_,gx=Y({"web/lib/wasm/jsep/backend-webnn.ts"(){ce(),zr(),W_(),mx(),Lt(),en=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),xd=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,a)=>i===n[a]&&e[i]===t[i])},G_=class{constructor(e){this.tensorManager=L_(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Zo(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){be("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){be("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);const t=this.temporarySessionTensorIds.get(e);if(t){for(const r of t)be("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){const r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{const n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){const r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{const n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}const t=this.mlContextCache.findIndex(r=>xd(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{const r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);const t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);const r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);const n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){be("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){const a=en.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,n,i)}async createTemporaryTensor(e,t,r){be("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);const n=en.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);const i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);const a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ae().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");be("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{const r=await this.tensorManager.download(e);return Qo(r,t)}}registerMLTensor(e,t,r,n){const i=en.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);const a=this.tensorManager.registerTensor(e,t,i,n);return be("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,n,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));const u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");const l=u.slice(t,t+r).buffer;let d;switch(i.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(s){const c=lo(new Uint8Array(l),"int64");d=new Int32Array(c.buffer),i.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return be("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(i,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){const r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){const r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){const n=this.mlContextBySessionId.get(e),i=en.get(yr(t));return typeof i>"u"?!1:r?!!n?.opSupportLimits().input.dataTypes.includes(i):!!n?.opSupportLimits().output.dataTypes.includes(i)}flush(){}}}}),Xo=Y({"web/lib/wasm/jsep/webgpu/types.ts"(){}}),ka,Kn,Zn,Sd,kd,Ia,co,Id,F_,_x=Y({"web/lib/wasm/jsep/webgpu/gpu-data-manager.ts"(){Lt(),Xo(),ka=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Kn=[],Zn=e=>Math.ceil(Number(e)/16)*16,Sd=e=>{for(let t=0;t<Kn.length;t++){const r=Kn[t];if(e<=r)return r}return Math.ceil(e/16)*16},kd=1,Ia=()=>kd++,co=async(e,t,r,n)=>{const i=Zn(r),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{const s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);const o=a.getMappedRange();if(n){const u=n();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},Id=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(const[t]of ka)Kn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){const r=t.buffer,n=t.byteOffset,i=t.byteLength,a=Zn(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);const o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,i)),o.unmap();const l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),o.destroy(),be("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){const r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");const n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");const i=Zn(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Ia();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),be("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){const r=Sd(e);let n;const i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){const u=(i?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?n=u.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});const s={id:Ia(),type:0,buffer:n};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),be("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){const t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return be("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){const r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await co(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(const e of this.buffersPending){const t=ka.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){const r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){const r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(const t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){const t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(be("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},F_=(...e)=>new Id(...e)}}),Td,Te,qe=Y({"web/lib/wasm/jsep/webgpu/attribute-with-cache-key.ts"(){Td=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Te=e=>new Td(e)}}),Lr,Qn,Le,Ke,ue,Ne,po,Nr,nr,ae,tn,V,ie,j_,Yo,Ed,H_,_e=Y({"web/lib/wasm/jsep/webgpu/ops/common.ts"(){ce(),fe(),Lr=64,Qn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Le=(e,t=1)=>{const r=Qn(e,t);return typeof r=="string"?r:r[0]},Ke=(e,t=1)=>{const r=Qn(e,t);return typeof r=="string"?r:r[1]},ue=(...e)=>{const t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:D.computeStrides(r)})}),t},Ne=e=>e%4===0?4:e%2===0?2:1,po=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Nr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,nr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ae=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,tn=(e,t,r,n,i)=>{const a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=Qn(t,i),d=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:d,storage:c,tensor:t},h=C=>typeof C=="string"?C:`${C}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},g=a?"uniforms.":"",$=`${g}${e}_shape`,y=`${g}${e}_strides`;let _="";for(let C=0;C<s-1;C++)_+=`
    let dim${C} = current / ${ae(y,C,s)};
    let rest${C} = current % ${ae(y,C,s)};
    indices[${C}] = dim${C};
    current = rest${C};
    `;_+=`indices[${s-1}] = current;`;const v=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${_}
    return indices;
  }`,b=C=>(m.offsetToIndices=!0,s<2?C:`o2i_${e}(${C})`),S=[];if(s>=2)for(let C=s-1;C>=0;C--)S.push(`${ae(y,C,s)} * (indices[${C}])`);const I=s<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${S.join("+")};
  }`,T=C=>(m.indicesToOffset=!0,s<2?C:`i2o_${e}(${C})`),z=(...C)=>s===0?"0u":`${p.indices}(${C.map(h).join(",")})`,O=(C,H)=>s<2?`${C}`:`${ae(C,H,s)}`,R=(C,H,me)=>s<2?`${C}=${me};`:`${ae(C,H,s)}=${me};`,G={},L=(C,H)=>{m.broadcastedIndicesToOffset=!0;const me=`${H.name}broadcastedIndicesTo${e}Offset`;if(me in G)return`${me}(${C})`;const De=[];for(let Ie=s-1;Ie>=0;Ie--){const ge=H.indicesGet("outputIndices",Ie+H.rank-s);De.push(`${O(y,Ie)} * (${ge} % ${O($,Ie)})`)}return G[me]=`fn ${me}(outputIndices: ${H.type.indices}) -> u32 {
             return ${De.length>0?De.join("+"):"0u"};
           }`,`${me}(${C})`},Q=(C,H)=>(()=>{if(p.storage===p.value)return`${e}[${C}]=${H};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${C}]=vec2<u32>(u32(${H}), select(0u, 0xFFFFFFFFu, ${H} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${C}]=vec2<u32>(u32(${H}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${C}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${H}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),B=C=>(()=>{if(p.storage===p.value)return`${e}[${C}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${C}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${C}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${C}] & 0xFFu), bool(${e}[${C}] & 0xFF00u), bool(${e}[${C}] & 0xFF0000u), bool(${e}[${C}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),te=s<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${d} {
    return ${B(`i2o_${e}(indices)`)};
  }`,F=s<2?"":(()=>{const C=o.map(me=>`d${me}: u32`).join(", "),H=o.map(me=>`d${me}`).join(", ");return`
  fn get_${e}(${C}) -> ${d} {
    return get_${e}ByIndices(${z(H)});
  }`})(),M=(...C)=>{if(C.length!==s)throw new Error(`indices length must be ${s}`);const H=C.map(h).join(",");return s===0?B("0u"):s===1?B(H[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${H})`)},J=C=>s<2?B(C):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${C})`),W=s<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${d}) {
    ${Q(`i2o_${e}(indices)`,"value")}
  }`,re=s<2?"":(()=>{const C=o.map(me=>`d${me}: u32`).join(", "),H=o.map(me=>`d${me}`).join(", ");return`
  fn set_${e}(${C}, value: ${d}) {
    set_${e}ByIndices(${z(H)}, value);
  }`})();return{impl:()=>{const C=[];let H=!1;return m.offsetToIndices&&(C.push(v),H=!0),m.indicesToOffset&&(C.push(I),H=!0),m.broadcastedIndicesToOffset&&(Object.values(G).forEach(me=>C.push(me)),H=!0),m.set&&(C.push(re),H=!0),m.setByIndices&&(C.push(W),H=!0),m.get&&(C.push(F),H=!0),m.getByIndices&&(C.push(te),H=!0),!a&&H&&C.unshift(`const ${$} = ${p.indices}(${r.join(",")});`,`const ${y} = ${p.indices}(${D.computeStrides(r).join(",")});`),C.join(`
`)},type:p,offsetToIndices:b,indicesToOffset:T,broadcastedIndicesToOffset:L,indices:z,indicesGet:O,indicesSet:R,set:(...C)=>{if(C.length!==s+1)throw new Error(`indices length must be ${s}`);const H=C[s];if(typeof H!="string")throw new Error("value must be string");const me=C.slice(0,s).map(h).join(",");return s===0?Q("0u",H):s===1?Q(me[0],H):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${me}, ${H})`)},setByOffset:Q,setByIndices:(C,H)=>s<2?Q(C,H):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${C}, ${H});`),get:M,getByOffset:B,getByIndices:J,usage:n,name:e,strides:y,shape:$,rank:s}},V=(e,t,r,n=1)=>tn(e,t,r,"input",n),ie=(e,t,r,n=1)=>tn(e,t,r,"output",n),j_=(e,t,r)=>tn(e,t,r,"atomicOutput",1),Yo=(e,t,r,n=1)=>tn(e,t,r,"internal",n),Ed=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Lr){const t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);const i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);const r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";const e=[];for(const{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{const i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;const e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},H_=(e,t)=>new Ed(e,t)}}),zd,Ta,Cd,Od,Ad,Bd,it,K_,Z_,ar=Y({"web/lib/wasm/jsep/webgpu/ops/transpose.ts"(){ce(),fe(),qe(),_e(),zd=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ta=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Cd=(e,t)=>D.sortBasedOnPerm(e,Ta(e.length,t)),Od=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Ad=(e,t)=>{const r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Bd=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},it=(e,t)=>{const r=e.dataType,n=e.dims.length,i=Ta(n,t),a=Cd(e.dims,i);let s=e.dims,o=a;const u=n<2||Bd(i,e.dims);let l;if(u)return l=g=>{const $=V("input",r,s,4),y=ie("output",r,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables($,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{const g=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};const{newShape:d,newPerm:c}=Ad(e.dims,i),p=D.areEqual(c,[2,3,1]),h=D.areEqual(c,[3,1,2]);if(d.length===2||p||h){s=p?[d[0],d[1]*d[2]]:h?[d[0]*d[1],d[2]]:d,o=[s[1],s[0]];const g=16;return l=$=>{const y=V("a",r,s.length),_=ie("output",r,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(y,_)}
  var<workgroup> tile : array<array<${_.type.value}, ${g+1}>, ${g}>;
  ${$.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${y.getByIndices(`${y.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${_.setByIndices(`${_.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{const $=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:$},...ue(s,o)]}},getShaderSource:l}}return l=g=>{const $=V("a",r,s.length),y=ie("output",r,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables($,y)}

  ${Od(i,n,$,y)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{const g=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ue(s,o)]}},getShaderSource:l}},K_=(e,t)=>{zd(e.inputs,t.perm),e.compute(it(e.inputs[0],t.perm))},Z_=e=>Te({perm:e.perm})}}),Rd,Md,Dd,Pd,Nd,Ud,qd,Vd,Wd,Ld,ct,Q_,X_,Y_,J_,ey,ty,ry,ny,iy,ay,yx=Y({"web/lib/wasm/jsep/webgpu/ops/reduce-shared.ts"(){ce(),fe(),_e(),Jo(),ar(),Rd={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Md={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Dd={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Pd={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Nd=(e,t)=>{const r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Ud=(e,t)=>{const r=[],n=e.length;for(let a=0;a<n;a++)t.indexOf(a)===-1&&r.push(e[a]);const i=t.map(a=>e[a]);return[r,i]},qd=(e,t)=>{const r=e.length+t.length,n=[];let i=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?n.push(e[i++]):n.push(1);return n},Vd=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Wd=(e,t)=>{const r=[];if(!Vd(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},Ld=(e,t,r,n,i,a,s)=>{const o=r[0].dims,u=D.size(a),l=D.size(s),d=V("_A",r[0].dataType,o),c=ie("output",i,a);let p=64;u===1&&(p=256);const h=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,m=g=>`
        ${g.registerUniform("reduceSize","u32").declareVariables(d,c)}
        ${h}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${g.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Dd[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${Rd[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Md[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${n==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${Pd[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},ct=(e,t,r,n)=>{const i=e.inputs.length===1?r:fo(e.inputs,r);let a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((h,m)=>m));const s=D.normalizeAxes(a,e.inputs[0].dims.length);let o=s,u=e.inputs[0];const l=Wd(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(it(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=Nd(o.length,u.dims.length));const[d,c]=Ud(u.dims,o);let p=d;i.keepDims&&(p=qd(d,s)),e.compute(Ld(t,i.cacheKey,[u],n,e.inputs[0].dataType,p,c),{inputs:[u]})},Q_=(e,t)=>{ct(e,"ReduceMeanShared",t,"mean")},X_=(e,t)=>{ct(e,"ReduceL1Shared",t,"l1")},Y_=(e,t)=>{ct(e,"ReduceL2Shared",t,"l2")},J_=(e,t)=>{ct(e,"ReduceLogSumExpShared",t,"logSumExp")},ey=(e,t)=>{ct(e,"ReduceMaxShared",t,"max")},ty=(e,t)=>{ct(e,"ReduceMinShared",t,"min")},ry=(e,t)=>{ct(e,"ReduceProdShared",t,"prod")},ny=(e,t)=>{ct(e,"ReduceSumShared",t,"sum")},iy=(e,t)=>{ct(e,"ReduceSumSquareShared",t,"sumSquare")},ay=(e,t)=>{ct(e,"ReduceLogSumShared",t,"logSum")}}}),pt,Gd,Ii,fo,ft,Fd,jd,Hd,Kd,Zd,Qd,Xd,Yd,Jd,ec,ht,sy,oy,uy,ly,dy,cy,py,fy,hy,my,Jo=Y({"web/lib/wasm/jsep/webgpu/ops/reduce.ts"(){ce(),fe(),qe(),_e(),yx(),pt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Gd=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ii=(e,t,r,n,i,a,s=!1,o=!1)=>{const u=[],l=r[0].dims,d=l.length,c=D.normalizeAxes(i,d),p=!o&&c.length===0;l.forEach(($,y)=>{p||c.indexOf(y)>=0?s&&u.push(1):u.push($)});const h=u.length,m=D.size(u);return{name:e,shaderCache:t,getShaderSource:$=>{const y=[],_=V("_A",r[0].dataType,d),v=ie("output",a,h),b=n(_,v,c);let S=b[2];for(let I=0,T=0;I<d;I++)p||c.indexOf(I)>=0?(s&&T++,S=`for(var j${I}: u32 = 0; j${I} < ${l[I]}; j${I}++) {
                  ${b[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${_.indicesSet("input_indices",I,`j${I}`)}
                  ${S}
                }`):(y.push(`${_.indicesSet("input_indices",I,v.indicesGet("output_indices",T))};`),T++);return`

        ${$.registerUniform("output_size","u32").declareVariables(_,v)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${v.offsetToIndices("global_idx")};

          ${y.join(`
`)}
          ${b[0]}       // init ops for reduce max/min
          ${b[1]}
          ${S}
          ${b[3]}
          ${b.length===4?v.setByOffset("global_idx","value"):b.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ue(l,u)]})}},fo=(e,t)=>{const r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),Te({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},ft=(e,t,r,n)=>{const i=e.inputs,a=i.length===1?r:fo(i,r);e.compute(Ii(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?Gd:n,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Fd=(e,t)=>{pt(e.inputs),ft(e,"ReduceLogSum",t,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},jd=(e,t)=>{pt(e.inputs),ft(e,"ReduceL1",t,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},Hd=(e,t)=>{pt(e.inputs),ft(e,"ReduceL2",t,(n,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Kd=(e,t)=>{pt(e.inputs),ft(e,"ReduceLogSumExp",t,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Zd=(e,t)=>{pt(e.inputs),ft(e,"ReduceMax",t,(n,i,a)=>{const s=[];for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(n.indicesSet("input_indices",o,0));return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Qd=(e,t)=>{pt(e.inputs),ft(e,"ReduceMean",t,(n,i,a)=>{let s=1;for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&(s*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},Xd=(e,t)=>{pt(e.inputs),ft(e,"ReduceMin",t,(n,i,a)=>{const s=[];for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Yd=(e,t)=>{pt(e.inputs),ft(e,"ReduceProd",t,(n,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Jd=(e,t)=>{pt(e.inputs),ft(e,"ReduceSum",t,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},ec=(e,t)=>{pt(e.inputs),ft(e,"ReduceSumSquare",t,(n,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},ht=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?n*=e[a]:i*=e[a];return i<32&&n>1024},sy=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qd(e,t):Q_(e,t)},oy=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jd(e,t):X_(e,t)},uy=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hd(e,t):Y_(e,t)},ly=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Kd(e,t):J_(e,t)},dy=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zd(e,t):ey(e,t)},cy=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xd(e,t):ty(e,t)},py=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yd(e,t):ry(e,t)},fy=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jd(e,t):ny(e,t)},hy=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ec(e,t):iy(e,t)},my=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fd(e,t):ay(e,t)}}}),Ea,gy,_y,ho,wx=Y({"web/lib/wasm/jsep/webgpu/ops/argminmax.ts"(){ce(),qe(),Jo(),Ea=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},gy=(e,t)=>{Ea(e.inputs);const r=(n,i,a)=>{const s=[];for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ii("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},_y=(e,t)=>{Ea(e.inputs);const r=(n,i,a)=>{const s=[];for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ii("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ho=e=>Te(e)}}),tc,Xn,rc,nc,ic,Cn,ac,yy,eu=Y({"web/lib/wasm/jsep/webgpu/ops/attention.ts"(){ce(),fe(),Xo(),_e(),tc=(e,t)=>{const r=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');const u=r.dims[0],l=r.dims[1],d=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,h=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(const v of t.qkvHiddenSizes)if(v%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],h=t.qkvHiddenSizes[2]}const m=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+h)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let g=0;if(s){if(p!==h)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(g=s.dims[3])}const $=m+g,y=-1,_=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:$,maxSequenceLength:y,inputHiddenSize:d,hiddenSize:c,vHiddenSize:h,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(h/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Xn=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,rc=(e,t,r,n,i,a,s,o)=>{const u=Ne(s?1:a);let l=64;const d=a/u;d<l&&(l=32);const c=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:d},{type:12,data:c}],h=Le(e.dataType,u),m=Ke(1,u),g=["type"];s&&g.push("type"),o&&g.push("type");const $=y=>{const _=ie("x",e.dataType,e.dims,u),v=[_],b=s?V("seq_lens",s.dataType,s.dims):void 0;b&&v.push(b);const S=o?V("total_sequence_length_input",o.dataType,o.dims):void 0;S&&v.push(S);const I=Ke(e.dataType),T=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${y.registerUniforms(T).declareVariables(...v)}
  ${y.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Xn(b,S,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${m}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${_.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${_.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${_.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${h};${u}`,inputDependencies:g},getShaderSource:$,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:p})}},nc=(e,t,r,n,i,a,s,o,u)=>{const l=s+a.kvSequenceLength,d=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&n,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,h=c?[a.batchSize,p,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,g=a.scale===0?1/Math.sqrt(a.headSize):a.scale,$=Ne(a.headSize),y=a.headSize/$,_=12,v={x:Math.ceil(l/_),y:Math.ceil(a.sequenceLength/_),z:a.batchSize*a.numHeads},b=[{type:12,data:a.sequenceLength},{type:12,data:y},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:g},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:m}],S=c&&n&&D.size(n.dims)>0,I=["type","type"];S&&I.push("type"),i&&I.push("type"),o&&I.push("type"),u&&I.push("type");const T=[{dims:d,dataType:t.dataType,gpuDataType:0}];c&&T.push({dims:h,dataType:t.dataType,gpuDataType:0});const z=O=>{const R=V("q",t.dataType,t.dims,$),G=V("key",r.dataType,r.dims,$),L=[R,G];if(S){const W=V("past_key",n.dataType,n.dims,$);L.push(W)}i&&L.push(V("attention_bias",i.dataType,i.dims));const Q=o?V("seq_lens",o.dataType,o.dims):void 0;Q&&L.push(Q);const B=u?V("total_sequence_length_input",u.dataType,u.dims):void 0;B&&L.push(B);const te=ie("output",t.dataType,d),F=[te];c&&F.push(ie("present_key",t.dataType,h,$));const M=Ke(1,$),J=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;

  var<workgroup> tileQ: array<${R.type.storage}, ${_*_}>;
  var<workgroup> tileK: array<${R.type.storage}, ${_*_}>;
  ${O.registerUniforms(J).declareVariables(...L,...F)}
  ${O.mainStart([_,_,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Xn(Q,B,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${S&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${M}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${S&&c?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${c?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${M}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch($){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${$}`)}})()};
        output[outputIdx] = ${te.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${$};${i!==void 0};${n!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:T,dispatchGroup:v,programUniforms:b}),getShaderSource:z}},ic=(e,t,r,n,i,a,s=void 0,o=void 0)=>{const u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,d=i.vHiddenSize*l,c=e>1&&n,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,h=c?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,d],g=12,$={x:Math.ceil(i.vHeadSize/g),y:Math.ceil(i.sequenceLength/g),z:i.batchSize*i.numHeads},y=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:d},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=c&&n&&D.size(n.dims)>0,v=["type","type"];_&&v.push("type"),s&&v.push("type"),o&&v.push("type");const b=[{dims:m,dataType:t.dataType,gpuDataType:0}];c&&b.push({dims:h,dataType:t.dataType,gpuDataType:0});const S=I=>{const T=V("probs",t.dataType,t.dims),z=V("v",r.dataType,r.dims),O=[T,z];_&&O.push(V("past_value",n.dataType,n.dims));const R=s?V("seq_lens",s.dataType,s.dims):void 0;s&&O.push(R);const G=o?V("total_sequence_length_input",o.dataType,o.dims):void 0;o&&O.push(G);const Q=[ie("output",t.dataType,m)];c&&Q.push(ie("present_value",t.dataType,h));const B=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${g}u;
  var<workgroup> tileQ: array<${T.type.value}, ${g*g}>;
  var<workgroup> tileV: array<${T.type.value}, ${g*g}>;
  ${I.registerUniforms(B).declareVariables(...O,...Q)}
  ${I.mainStart([g,g,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Xn(R,G,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${T.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&c?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${c?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:b,dispatchGroup:$,programUniforms:y}),getShaderSource:S}},Cn=(e,t,r,n,i,a,s,o,u,l,d=void 0,c=void 0)=>{const p=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),h=p>1?l.pastSequenceLength:0,m=h+l.kvSequenceLength,g=u&&D.size(u.dims)>0?u:void 0,$=[t,r];p>1&&s&&D.size(s.dims)>0&&$.push(s),g&&$.push(g),d&&$.push(d),c&&$.push(c);const y=e.compute(nc(p,t,r,s,g,l,h,d,c),{inputs:$,outputs:p>1?[-1,1]:[-1]})[0];e.compute(rc(y,l.batchSize,l.numHeads,h,l.sequenceLength,m,d,c),{inputs:d&&c?[y,d,c]:[y],outputs:[]});const _=[y,n];p>1&&o&&D.size(o.dims)>0&&_.push(o),d&&_.push(d),c&&_.push(c),e.compute(ic(p,y,n,o,l,h,d,c),{inputs:_,outputs:p>1?[0,2]:[0]})},ac=(e,t)=>{const r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=c=>{const p=ie("output_q",u[0].dataType,r),h=ie("output_k",u[0].dataType,r),m=ie("output_v",u[0].dataType,r),g=V("input",u[0].dataType,u[0].dims),$=V("weight",u[1].dataType,u[1].dims),y=V("bias",u[2].dataType,u[2].dims),_=g.type.storage,v=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${_}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${_}, ${s*s}>;
  var<workgroup> tileWeightK: array<${_}, ${s*s}>;
  var<workgroup> tileWeightV: array<${_}, ${s*s}>;
  ${c.registerUniforms(v).declareVariables(g,$,y,p,h,m)}
  ${c.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${_}(0);
    var valueK = ${_}(0);
    var valueV = ${_}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},yy=(e,t)=>{const r=tc(e.inputs,t),[n,i,a]=ac(e,r);return Cn(e,n,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}}),sc,oc,uc,wy,$x=Y({"web/lib/wasm/jsep/webgpu/ops/batch-norm.ts"(){kt(),ce(),fe(),qe(),_e(),sc=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");const r=(n,i,a)=>{const s=i.length;if(s!==n.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==n[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){const n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},oc=(e,t)=>{const{epsilon:r,spatial:n,format:i}=t,a=e[0].dims,s=n?Ne(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=D.size(a)/s,l=n,d=l?a.length:a,c=V("x",e[0].dataType,e[0].dims,s),p=V("scale",e[1].dataType,e[1].dims,o),h=V("bias",e[2].dataType,e[2].dims,o),m=V("inputMean",e[3].dataType,e[3].dims,o),g=V("inputVar",e[4].dataType,e[4].dims,o),$=ie("y",e[0].dataType,d,s),y=()=>{let v="";if(n)v=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")v=`
            ${$.indicesSet("outputIndices","0","0")}
            let cOffset = ${$.indicesToOffset("outputIndices")};`;else{v=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let b=1;b<p.rank;b++)v+=`cIndices[${b}] = outputIndices[${b}];`;v+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return v},_=v=>`
  const epsilon = ${r};
  ${v.registerUniform("outputSize","u32").declareVariables(c,p,h,m,g,$)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${$.offsetToIndices(`global_idx * ${s}`)};
    ${y()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${h.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${g.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${$.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...ue(a)]:[{type:12,data:u}]})}},uc=e=>Te(e),wy=(e,t)=>{const{inputs:r,outputCount:n}=e,i=uc({...t,outputCount:n});if(Re.webgpu.validateInputContent&&sc(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(oc(r,i))}}}),lc,dc,$y,bx=Y({"web/lib/wasm/jsep/webgpu/ops/bias-add.ts"(){fe(),_e(),lc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},dc=e=>{const t=e[0].dims,r=e[0].dims[2],n=D.size(t)/4,i=e[0].dataType,a=V("input",i,t,4),s=V("bias",i,[r],4),o=V("residual",i,t,4),u=ie("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},$y=e=>{lc(e.inputs),e.compute(dc(e.inputs))}}}),cc,Se,by,vy,xy,Sy,ky,Iy,Ty,Ey,zy,pc,Cy,Oy,Ay,By,vn,Ry,yi,My,Dy,Py,Ny,Uy,qy,Vy,Wy,Ly,Gy,Fy,jy,Hy,Ky,Zy,Qy,za,Xy,mo,go,Yy,Jy,ew,fc,hc,tw,tu=Y({"web/lib/wasm/jsep/webgpu/ops/unary-op.ts"(){ce(),fe(),qe(),_e(),cc=(e,t,r,n,i,a,s)=>{const o=Math.ceil(t/4);let u="";typeof i=="string"?u=`${i}(a)`:u=i("a");const l=V("inputData",r,[o],4),d=ie("outputData",n,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(l,d)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},Se=(e,t,r,n,i,a=e.dataType,s,o)=>{const u=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>cc(l,D.size(e.dims),e.dataType,a,r,n,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(D.size(l[0].dims)/64/4)},programUniforms:u})}},by=e=>{e.compute(Se(e.inputs[0],"Abs","abs"))},vy=e=>{e.compute(Se(e.inputs[0],"Acos","acos"))},xy=e=>{e.compute(Se(e.inputs[0],"Acosh","acosh"))},Sy=e=>{e.compute(Se(e.inputs[0],"Asin","asin"))},ky=e=>{e.compute(Se(e.inputs[0],"Asinh","asinh"))},Iy=e=>{e.compute(Se(e.inputs[0],"Atan","atan"))},Ty=e=>{e.compute(Se(e.inputs[0],"Atanh","atanh"))},Ey=e=>Te(e),zy=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Se(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},pc=e=>{let t,r;const n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Te({min:t,max:r})},Cy=(e,t)=>{const r=t||pc(e.inputs),n=Ke(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},Oy=e=>{e.compute(Se(e.inputs[0],"Ceil","ceil"))},Ay=e=>{e.compute(Se(e.inputs[0],"Cos","cos"))},By=e=>{e.compute(Se(e.inputs[0],"Cosh","cosh"))},vn=e=>Te(e),Ry=(e,t)=>{const r=Ke(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},yi=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,My=e=>{const t=Ke(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,yi(t)))},Dy=e=>{e.compute(Se(e.inputs[0],"Exp","exp"))},Py=e=>{e.compute(Se(e.inputs[0],"Floor","floor"))},Ny=e=>{const t=Ke(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,yi(t)))},Uy=(e,t)=>{const r=Ke(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},qy=e=>{e.compute(Se(e.inputs[0],"Not",t=>`!${t}`))},Vy=e=>{e.compute(Se(e.inputs[0],"Neg",t=>`-${t}`))},Wy=e=>{e.compute(Se(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ly=e=>{const t=Ke(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Gy=e=>{e.compute(Se(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Fy=e=>Te(e),jy=(e,t)=>{const r=Ke(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Hy=e=>{e.compute(Se(e.inputs[0],"Sin","sin"))},Ky=e=>{e.compute(Se(e.inputs[0],"Sinh","sinh"))},Zy=e=>{e.compute(Se(e.inputs[0],"Sqrt","sqrt"))},Qy=e=>{e.compute(Se(e.inputs[0],"Tan","tan"))},za=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Xy=e=>{e.compute(Se(e.inputs[0],"Tanh",za))},mo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${za("v")};
}
`,go=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Yy=e=>{const t=Ke(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"FastGelu",go,mo(t),void 0,e.inputs[0].dataType))},Jy=(e,t)=>{const r=Ke(e.inputs[0].dataType);return e.compute(Se(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},ew=e=>{e.compute(Se(e.inputs[0],"Log","log"))},fc=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,hc=e=>`quick_gelu_impl(${e})`,tw=(e,t)=>{const r=Ke(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"QuickGelu",hc,fc(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}}),mc,gc,rw,vx=Y({"web/lib/wasm/jsep/webgpu/ops/bias-split-gelu.ts"(){fe(),_e(),tu(),mc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},gc=e=>{const t=e[0].dims.slice();t[2]=t[2]/2;const r=V("input",e[0].dataType,e[0].dims,4),n=V("bias",e[0].dataType,[e[0].dims[2]],4),i=ie("output",e[0].dataType,t,4),a=D.size(t)/4,s=Le(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,n,i)}

  ${yi(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},rw=e=>{mc(e.inputs),e.compute(gc(e.inputs))}}}),_c,yc,mt,nw,iw,aw,sw,ow,uw,lw,dw,cw,pw,xx=Y({"web/lib/wasm/jsep/webgpu/ops/binary-op.ts"(){ce(),fe(),_e(),_c=(e,t,r,n,i,a,s,o,u,l,d,c)=>{let p,h;typeof o=="string"?p=h=(_,v)=>`${o}((${_}),(${v}))`:typeof o=="function"?p=h=o:(p=o.scalar,h=o.vector);const m=ie("outputData",d,n.length,4),g=V("aData",u,t.length,4),$=V("bData",l,r.length,4);let y;if(i)if(a){const _=D.size(t)===1,v=D.size(r)===1,b=t.length>0&&t[t.length-1]%4===0,S=r.length>0&&r[r.length-1]%4===0;_||v?y=m.setByOffset("global_idx",h(_?`${g.type.value}(${g.getByOffset("0")}.x)`:g.getByOffset("global_idx"),v?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"))):y=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${g.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${$.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",h(s||b?g.getByOffset("offsetA / 4u"):`${g.type.value}(${g.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||S?$.getByOffset("offsetB / 4u"):`${$.type.value}(${$.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else y=m.setByOffset("global_idx",h(g.getByOffset("global_idx"),$.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");const _=(v,b,S="")=>{const I=`aData[indexA${b}][componentA${b}]`,T=`bData[indexB${b}][componentB${b}]`;return`
            let outputIndices${b} = ${m.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offsetA${b} = ${g.broadcastedIndicesToOffset(`outputIndices${b}`,m)};
            let offsetB${b} = ${$.broadcastedIndicesToOffset(`outputIndices${b}`,m)};
            let indexA${b} = offsetA${b} / 4u;
            let indexB${b} = offsetB${b} / 4u;
            let componentA${b} = offsetA${b} % 4u;
            let componentB${b} = offsetB${b} % 4u;
            ${v}[${b}] = ${S}(${p(I,T)});
          `};d===9?y=`
            var data = vec4<u32>(0);
            ${_("data",0,"u32")}
            ${_("data",1,"u32")}
            ${_("data",2,"u32")}
            ${_("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:y=`
            ${_("outputData[global_idx]",0)}
            ${_("outputData[global_idx]",1)}
            ${_("outputData[global_idx]",2)}
            ${_("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(g,$,m)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${y}
      }`},yc=(e,t,r,n,i,a,s=r.dataType)=>{const o=r.dims.map(g=>Number(g)??1),u=n.dims.map(g=>Number(g)??1),l=!D.areEqual(o,u);let d=o,c=D.size(o),p=!1,h=!1;const m=[l];if(l){const g=Wr.calcShape(o,u,!1);if(!g)throw new Error("Can't perform binary op on the given tensors");d=g.slice(),c=D.size(d);const $=D.size(o)===1,y=D.size(u)===1,_=o.length>0&&o[o.length-1]%4===0,v=u.length>0&&u[u.length-1]%4===0;m.push($),m.push(y),m.push(_),m.push(v);let b=1;for(let S=1;S<d.length;S++){const I=o[o.length-S],T=u[u.length-S];if(I===T)b*=I;else break}b%4===0?(h=!0,p=!0):($||y||_||v)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(g=>g.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:g=>_c(g,o,u,d,p,l,h,i,r.dataType,n.dataType,s,a),getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(d)/4)},...ue(o,u,d)]})}},mt=(e,t,r,n,i,a)=>{e.compute(yc(t,i??"",e.inputs[0],e.inputs[1],r,n,a))},nw=e=>{mt(e,"Add",(t,r)=>`${t}+${r}`)},iw=e=>{mt(e,"Div",(t,r)=>`${t}/${r}`)},aw=e=>{mt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},sw=e=>{mt(e,"Mul",(t,r)=>`${t}*${r}`)},ow=e=>{const t=V("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;mt(e,"Pow",{scalar:(n,i)=>`pow_custom(${n},${i})`,vector:(n,i)=>`pow_vector_custom(${n},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},uw=e=>{mt(e,"Sub",(t,r)=>`${t}-${r}`)},lw=e=>{mt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},dw=e=>{mt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},cw=e=>{mt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},pw=e=>{mt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}}),wc,$c,bc,vc,fw,hw,Sx=Y({"web/lib/wasm/jsep/webgpu/ops/concat.ts"(){ce(),fe(),qe(),_e(),wc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");const r=0,n=e[r],i=n.dataType,a=n.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==n.dims[l])throw new Error("non concat dimensions must match")})}})},$c=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,bc=(e,t)=>{const r=e.length,n=[];for(let i=0;i<r;++i){const a=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(a):i===0?n.push(`if (inputIndex == ${i}u) { ${a} }`):i===r-1?n.push(`else { ${a} }`):n.push(`else if (inputIndex == ${i}) { ${a} }`)}return n.join(`
`)},vc=(e,t,r,n)=>{const i=D.size(r),a=new Array(e.length),s=new Array(e.length);let o=0;const u=[],l=[],d=[{type:12,data:i}];for(let g=0;g<e.length;++g)o+=e[g].dims[t],a[g]=o,l.push(e[g].dims.length),s[g]=V(`input${g}`,n,l[g]),u.push("rank"),d.push({type:12,data:a[g]});for(let g=0;g<e.length;++g)d.push(...ue(e[g].dims));d.push(...ue(r));const c=ie("output",n,r.length),p=c.indicesGet("indices",t),h=Array.from(Array(a.length).keys()).map(g=>`uniforms.sizeInConcatAxis${g}`).join(","),m=g=>`

  ${(()=>{g.registerUniform("outputSize","u32");for(let $=0;$<e.length;$++)g.registerUniform(`sizeInConcatAxis${$}`,"u32");return g.declareVariables(...s,c)})()}

  ${$c(a.length,h)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${h});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${bc(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:m}},fw=(e,t)=>{const r=e.inputs,n=r[0].dims,i=D.normalizeAxis(t.axis,n.length);wc(r,i);const a=n.slice();a[i]=r.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);const s=r.filter(o=>D.size(o.dims)>0);e.compute(vc(s,i,a,r[0].dataType),{inputs:s})},hw=e=>Te({axis:e.axis})}}),xr,Sr,kr,ru,Cr=Y({"web/lib/wasm/jsep/webgpu/ops/fuse-utils.ts"(){ce(),fe(),xr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Sr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},kr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ru=e=>{const t=e?.activation||"";if(t==="HardSigmoid"){const[r,n]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){const[r,n]=e?.activation_params||[q_,V_];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){const[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}}),Fe,mw,nu=Y({"web/lib/wasm/jsep/webgpu/ops/3rd-party/activation_util.ts"(){Fe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},mw=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}}),gw,kx=Y({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv_util.ts"(){gw=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}}),En,iu,au=Y({"web/lib/wasm/jsep/webgpu/ops/matmul-shaders.ts"(){ce(),fe(),_e(),Cr(),En=(e,t,r,n,i)=>{const a=n-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${ae(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ae(i,o+a,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},iu=(e,t,r,n,i=!1,a)=>{const s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],d=s[s.length-1],c=Ne(l),p=Ne(d),h=Ne(u),m=D.size(r)/c/h,g=e.length>2,$=n?n.slice(0,-2):r.slice(0,-2),_=[D.size($),u,l],v=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:d}];Sr(t,v),v.push(...ue($,s,o)),g&&v.push(...ue(e[2].dims)),v.push(...ue(_));const b=S=>{const I=Yo("batch_dims",e[0].dataType,$.length),T=V("a",e[0].dataType,s.length,p),z=V("b",e[1].dataType,o.length,c),O=ie("output",e[0].dataType,_.length,c),R=Le(O.type.tensor),G=xr(t,O.type.value,R),L=[T,z];let Q="";if(g){const F=i?c:1;L.push(V("bias",e[2].dataType,e[2].dims.length,F)),Q=`${i?`value += bias[col / ${F}];`:`value += ${O.type.value}(bias[row + i]);`}`}const B=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];kr(t,B);const te=()=>{let F=`var a_data: ${T.type.value};`;for(let M=0;M<p;M++)F+=`
              let b_data${M} = b[(b_offset + (k + ${M}) * uniforms.N + col) / ${c}];`;for(let M=0;M<h;M++){F+=`a_data = a[(a_offset + (row + ${M}) * uniforms.K + k) / ${p}];`;for(let J=0;J<p;J++)F+=`
            values[${M}] = fma(${z.type.value}(a_data${p===1?"":`[${J}]`}), b_data${J}, values[${M}]);
`}return F};return`
  ${S.registerUniforms(B).registerInternalVariables(I).declareVariables(...L,O)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${h};
    let row = (index1 % stride1) * ${h};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${En("a_indices",T,T.rank-2,I.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${En("b_indices",z,z.rank-2,I.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${O.type.value}, ${h}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${te()}
    }
    for (var i = 0u; i < ${h}u; i++) {
      var value = values[i];
      ${Q}
      ${G}
      let cur_indices = ${O.type.indices}(batch, row + i, col);
      let offset = ${O.indicesToOffset("cur_indices")};
      ${O.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${h};${i}`,inputDependencies:g?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:b}}}}),xc,Sc,_o,Ca,kc,yo,Ic,Ti,su=Y({"web/lib/wasm/jsep/webgpu/ops/3rd-party/matmul_packed_webgpu.ts"(){ce(),fe(),_e(),Cr(),au(),nu(),xc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Sc=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,_o=(e,t,r="f32",n,i=!1,a=32,s=!1,o=32)=>{const u=t[1]*e[1],l=t[0]*e[0],d=i?u:a,c=i?a:u,p=d/t[0],h=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&d%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${r}>, ${d/p}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${p};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${h};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${xc(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${p===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Sc(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ca=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,kc=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",yo=(e,t,r="f32",n,i=!1,a=32,s=!1,o=32,u=!1)=>{const l=e[1]*t[1],d=e[0]*t[0],c=i?l:a,p=i?a:l;if(!(p%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);const h=p/t[1],m=c/t[0],g=a/t[1],$=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Ca(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${h};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${g};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ca(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${kc(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${c}>, ${p}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${d}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${$}
  }
`},Ic=(e,t,r,n,i=!1)=>{const[a,s,o,u]=n,l=Le(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Fe(e,l)} {
      var value = ${Fe(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${En("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Fe(e,l)} {
      var value = ${Fe(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${En("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Fe(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Fe(e,l)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ti=(e,t,r,n,i=!1,a)=>{const s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),d=n?n.slice(0,-2):r.slice(0,-2),c=D.size(d),p=s[s.length-2],h=s[s.length-1],m=o[o.length-1],g=h%4===0&&m%4===0,$=p<=8?[4,1,1]:[4,4,1],y=[8,8,1],_=[Math.ceil(m/y[0]/$[0]),Math.ceil(p/y[1]/$[1]),Math.ceil(c/y[2]/$[2])],v=g?4:1,b=[...u,p,h/v],S=b.length,I=[...l,h,m/v],T=I.length,z=[c,p,m/v],O=[{type:6,data:p},{type:6,data:m},{type:6,data:h}];Sr(t,O),O.push(...ue(d,b,I));const R=["rank","rank"],G=e.length>2;G&&(O.push(...ue(e[2].dims)),R.push("rank")),O.push(...ue(z));const L=Q=>{const B=d.length,te=Yo("batchDims",e[0].dataType,B,1),F=Le(e[0].dataType),M=V("a",e[0].dataType,S,v),J=V("b",e[1].dataType,T,v),W=ie("result",e[0].dataType,z.length,v),re=[M,J];if(G){const H=i?v:1;re.push(V("bias",e[2].dataType,e[2].dims.length,H))}const q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];kr(t,q);const j=Le(W.type.tensor),K=xr(t,W.type.value,j),C=Ic(v,G,K,[te,M,J,W],i);return`
  ${Q.registerUniforms(q).registerInternalVariables(te).declareVariables(...re,W)}
  ${C}
  ${g?_o($,y,F,te):yo($,y,F,te)}
                   `};return{name:"MatMul",shaderCache:{hint:`${$};${t.activation};${g};${i}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:O}),getShaderSource:L}}}}),Tc,_w,Ix=Y({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv2d_mm_webgpu.ts"(){ce(),Lt(),_e(),Cr(),nu(),kx(),su(),Tc=(e,t,r,n,i=!1,a,s=4,o=4,u=4,l="f32")=>{const d=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},c=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},p=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,h=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",g=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",$=e?"row":"col",y=e?"col":"row",_=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${$} / outWidth;
    let outCol = ${$} % outWidth;

    let WRow = ${y} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${y} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${y} % inChannels;
    var resData = ${Fe(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${g}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(s)}
    }
    return resData;`,v=e?t&&n?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${_}
    }
    return ${Fe(s,l)}(0.0);`:n&&r?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_}
    }
    return ${Fe(s,l)}(0.0);`,b=e?n&&r?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${Fe(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${Fe(o,l)}(0.0);`,S=Fe(u,l),I=Fe(e?s:o,l),T=Fe(e?o:s,l),z=xr(a,S,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?v:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?b:v}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${S}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${mw(i)}
      ${z}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},_w=(e,t,r,n,i,a,s,o,u)=>{const l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],c=r[0],p=l?r[2]:r[3],h=l?r[1]:r[2],m=l?r[3]:r[1],g=l&&(d%4===0||d%3===0)&&m%4===0,$=l?m:p*h,y=l?p*h:m,_=[8,8,1],v=n<=8?[4,1,1]:[4,4,1],b=[Math.ceil($/_[0]/v[0]),Math.ceil(y/_[1]/v[1]),Math.ceil(c/_[2]/v[2])];be("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${b}`);const S=g?l&&d%4!==0?3:4:1,I=_[1]*v[1],T=_[0]*v[0],z=Math.max(_[0]*S,_[1]),O=n%I===0,R=i%T===0,G=a%z===0,L=g?[S,4,4]:[1,1,1],Q=[{type:6,data:n},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Sr(t,Q),Q.push(...ue(e[0].dims,e[1].dims));const B=["rank","rank"];s&&(Q.push(...ue(e[2].dims)),B.push("rank")),Q.push(...ue(r));const te=F=>{const M=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];kr(t,M);const J=g?4:1,W=Le(e[0].dataType);let re=`
      fn setOutputAtIndex(flatIndex : i32, value : ${g?`vec4<${W}>`:W}) {
        result[flatIndex] = ${g?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${g?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${g?"/ 4":""}, value);
      }`;const q=V("x",e[0].dataType,e[0].dims.length,S===3?1:S),j=V("w",e[1].dataType,e[1].dims.length,J),K=[q,j],C=ie("result",e[0].dataType,r.length,J);if(s){const H=V("bias",e[2].dataType,e[2].dims.length,J);K.push(H),re+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${g?`vec4<${W}>`:W} {
          return bias[coords.${l?"w":"y"}${g?"/ 4":""}];
        }`}return`
        ${gw("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${F.registerUniforms(M).declareVariables(...K,C)}
        ${re}
        ${Tc(l,O,R,G,s,t,L[0],L[1],L[2],W)}
        ${g?_o(v,_,W,void 0,!l,z):yo(v,_,W,void 0,!l,z,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${S};${g};${O};${R};${G};${I};${T};${z}`,inputDependencies:B},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:Q}),getShaderSource:te}}}}),Ec,Oa,rn,zc,Aa,Cc,yw,ww,Tx=Y({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv3d_naive_webgpu.ts"(){ce(),Lt(),fe(),_e(),Cr(),nu(),Ec=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Oa=e=>typeof e=="number"?[e,e,e]:e,rn=(e,t)=>t<=1?e:e+(e-1)*(t-1),zc=(e,t,r,n=1)=>{const i=rn(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},Aa=(e,t,r,n,i)=>{i==null&&(i=zc(e,t[0],n[0]));const a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/n[s]+1));return a},Cc=(e,t,r,n,i,a,s,o,u,l)=>{let d,c,p,h;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};const m=Aa([t,r,n,1],[o,u,l],1,[i,a,s],e);c=m[0],p=m[1],h=m[2]}else if(Array.isArray(e)){if(!e.every((g,$,y)=>g===y[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};const m=Aa([t,r,n,1],[o,u,l],1,[i,a,s],e[0]);c=m[0],p=m[1],h=m[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(r/a),h=Math.ceil(n/s);const m=(c-1)*i+o-t,g=(p-1)*a+u-r,$=(h-1)*s+l-n,y=Math.floor(m/2),_=m-y,v=Math.floor(g/2),b=g-v,S=Math.floor($/2),I=$-S;d={top:v,bottom:b,left:S,right:I,front:y,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:c,outHeight:p,outWidth:h}},yw=(e,t,r,n,i,a=!1,s="channelsLast")=>{let o,u,l,d,c;if(s==="channelsLast")[o,u,l,d,c]=e;else if(s==="channelsFirst")[o,c,u,l,d]=e;else throw new Error(`Unknown dataFormat ${s}`);const[p,,h,m,g]=t,[$,y,_]=Oa(r),[v,b,S]=Oa(n),I=rn(h,v),T=rn(m,b),z=rn(g,S),{padInfo:O,outDepth:R,outHeight:G,outWidth:L}=Cc(i,u,l,d,$,y,_,I,T,z),Q=a?p*c:p;let B=[0,0,0,0,0];return s==="channelsFirst"?B=[o,Q,R,G,L]:s==="channelsLast"&&(B=[o,R,G,L,Q]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:d,inChannels:c,outDepth:R,outHeight:G,outWidth:L,outChannels:Q,padInfo:O,strideDepth:$,strideHeight:y,strideWidth:_,filterDepth:h,filterHeight:m,filterWidth:g,effectiveFilterDepth:I,effectiveFilterHeight:T,effectiveFilterWidth:z,dilationDepth:v,dilationHeight:b,dilationWidth:S,inShape:e,outShape:B,filterShape:t}},ww=(e,t,r,n,i,a)=>{const s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];const o=[64,1,1],u={x:r.map(($,y)=>y)},l=[Math.ceil(Ec(u.x.map($=>r[$]))/o[0]),1,1];be("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);const d=1,p=[{type:12,data:D.size(r)},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Sr(t,p),p.push(...ue(e[0].dims,e[1].dims));const h=["rank","rank"],m=e.length===3;m&&(p.push(...ue(e[2].dims)),h.push("rank")),p.push(...ue(r));const g=$=>{const y=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];kr(t,y);const _=1,v=Le(e[0].dataType),b=V("x",e[0].dataType,e[0].dims.length,d),S=V("W",e[1].dataType,e[1].dims.length,_),I=[b,S],T=ie("result",e[0].dataType,r.length,_);let z="";if(m){const G=V("bias",e[2].dataType,e[2].dims.length,_);I.push(G),z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${v} {
          return bias[${s?ae("coords",4,5):ae("coords",1,5)}];
        }`}const O=Fe(d,v),R=xr(t,O,v);return`
            ${z}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${b.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
          ${$.registerUniforms(y).declareVariables(...I,T)}
          ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${T.offsetToIndices("global_idx")};
              let batch = ${ae("coords",0,b.rank)};
              let d2 = ${s?ae("coords",b.rank-1,b.rank):ae("coords",1,b.rank)};
              let xFRCCorner = vec3<u32>(${s?ae("coords",1,b.rank):ae("coords",2,b.rank)},
              ${s?ae("coords",2,b.rank):ae("coords",3,b.rank)},
              ${s?ae("coords",3,b.rank):ae("coords",4,b.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ae("uniforms.x_shape",1,b.rank):ae("uniforms.x_shape",2,b.rank)};
              let xShapeZ = ${s?ae("uniforms.x_shape",2,b.rank):ae("uniforms.x_shape",3,b.rank)};
              let xShapeW = ${s?ae("uniforms.x_shape",3,b.rank):ae("uniforms.x_shape",4,b.rank)};
              let xShapeU = ${s?ae("uniforms.x_shape",4,b.rank):ae("uniforms.x_shape",1,b.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${R}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${d};${m}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:g}}}}),$w,bw,Ex=Y({"web/lib/wasm/jsep/webgpu/ops/conv-grouped.ts"(){ce(),fe(),_e(),Cr(),$w=(e,t,r,n)=>{const i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?r[3]:r[1],d=l/t.group,c=u&&d>=4?Ne(l):1,p=D.size(r)/c,h=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];Sr(t,h),h.push(...ue(s,[o[0],o[1],o[2],o[3]/c]));const m=i?["rank","rank","rank"]:["rank","rank"];h.push(...ue([r[0],r[1],r[2],r[3]/c]));const g=$=>{const y=ie("output",e[0].dataType,r.length,c),_=Le(y.type.tensor),v=xr(t,y.type.value,_),b=V("x",e[0].dataType,s.length),S=V("w",e[1].dataType,o.length,c),I=[b,S];i&&I.push(V("b",e[2].dataType,e[2].dims,c));const T=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];kr(t,T);const z=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${b.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${S.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${b.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${S.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${$.registerUniforms(T).declareVariables(...I,y)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${y.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${y.type.value} = ${y.type.value}(0);
    ${z}
    ${a}
    ${v}
    ${y.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:g}},bw=(e,t,r,n)=>{const i=e.length>2,a=Ne(r[3]),s=Ne(r[2]),o=D.size(r)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],d=[r[0],r[1],r[2],r[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Sr(t,c),c.push(...ue(u,l,d));const p=(s-1)*t.strides[1]+l[1],h=m=>{const g=ie("output",e[0].dataType,d.length,a),$=Le(g.type.tensor),y=xr(t,g.type.value,$),_=V("x",e[0].dataType,u.length,a),v=V("w",e[1].dataType,l.length,a),b=[_,v];i&&b.push(V("b",e[2].dataType,e[2].dims,a));const S=i?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return kr(t,I),`
  ${m.registerUniforms(I).declareVariables(...b,g)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${_.type.value}, ${p}>;
    var values: array<${g.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${p}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${_.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${_.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${v.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${S}
      ${y}
      ${g.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:h}}}}),Oc,Yn,Ac,Jn,wo,Ba,Bc,Rc,$o,zx=Y({"web/lib/wasm/jsep/webgpu/ops/conv.ts"(){fe(),Ix(),Tx(),su(),Ex(),Cr(),au(),ar(),Oc=(e,t,r,n,i,a)=>{const s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,l=t[0],c=t.slice(2).map((m,g)=>m+(m-1)*(r[g]-1)),h=o.map((m,g)=>m+n[g]+n[g+u]).map((m,g)=>Math.floor((m-c[g]+i[g])/i[g]));return h.splice(0,0,s),h.splice(a?3:1,0,l),h},Yn=[2,3,1,0],Ac=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");const r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");const i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Jn=(e,t)=>{const r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);const n=e.pads.slice();ki.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);const i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},wo=e=>{const t=ru(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ba=(e,t,r,n)=>{const i=r.format==="NHWC",a=Oc(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){const I=[t[0]];if(i){const z=e.kernelCustomData.wT??e.compute(it(t[1],Yn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),I.push(z)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(bw(I,r,a,n),{inputs:I}):e.compute($w(I,r,a,n),{inputs:I});return}const s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],d=t[1].dims[2],c=t[1].dims[3],p=a[i?1:2],h=a[i?2:3],m=a[i?3:1],g=i&&d===o&&c===u&&r.pads[0]===0&&r.pads[1]===0;if(g||d===1&&c===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){const I=a[0];let T,z,O;const R=[];if(i){const Q=e.kernelCustomData.wT??e.compute(it(t[1],Yn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Q),g){const B=o*u*l;T=t[0].reshape([1,I,B]),z=Q.reshape([1,B,m]),O=[1,I,m]}else T=t[0].reshape([I,o*u,l]),z=Q.reshape([1,l,m]),O=[I,p*h,m];R.push(T),R.push(z)}else T=t[0].reshape([I,l,o*u]),z=t[1].reshape([1,m,l]),O=[I,m,p*h],R.push(z),R.push(T);s&&R.push(t[2]);const G=O[2],L=R[0].dims[R[0].dims.length-1];G<8&&L<8?e.compute(iu(R,r,a,O,i,n),{inputs:R}):e.compute(Ti(R,r,a,O,i,n),{inputs:R});return}const $=!0,y=e.kernelCustomData.wT??e.compute(it(t[1],Yn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=y);const _=[t[0],y];s&&_.push(t[2]);const v=i?p*h:m,b=i?m:p*h,S=d*c*l;e.compute(_w(_,r,a,v,b,S,s,$,n),{inputs:_})},Bc=(e,t)=>{const r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);const i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Jn({...t,pads:i,strides:a,dilations:s,kernelShape:o},n);Ba(e,n,u,l=>r?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Rc=(e,t,r)=>{const n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Jn(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=yw(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,n);e.compute(ww(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],n))},$o=(e,t)=>{if(Ac(e.inputs,t),e.inputs[0].dims.length===3)Bc(e,t);else if(e.inputs[0].dims.length===5)Rc(e,e.inputs,t);else{const r=Jn(t,e.inputs);Ba(e,e.inputs,r)}}}}),vw,Cx=Y({"web/lib/wasm/jsep/webgpu/ops/3rd-party/conv_backprop_webgpu.ts"(){ce(),Lt(),fe(),_e(),vw=(e,t,r)=>{const n=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],d=a?Ne(u):1,c=a&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/d)*d,h=u-p,m=a?Ne(l):1,g=a?l===1?d:m:1,$=D.size(i)/m,y=[Math.ceil($/64),1,1];be("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${y}`);const _=["rank","rank"],v=[t.strides[0],t.strides[1]],b=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],S=[t.dilations[0],t.dilations[1]],I=[b[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],T=[I[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),I[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],z=[{type:12,data:$},{type:12,data:v},{type:12,data:b},{type:12,data:S},{type:12,data:I},{type:6,data:T},{type:12,data:p},{type:12,data:u},{type:12,data:l},...ue(e[0].dims,e[1].dims)];n&&(z.push(...ue(e[2].dims)),_.push("rank")),z.push(...ue(i));const O=R=>{const G=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:v.length},{name:"filter_dims",type:"u32",length:b.length},{name:"dilations",type:"u32",length:b.length},{name:"effective_filter_dims",type:"u32",length:I.length},{name:"pads",type:"i32",length:T.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],L=Le(e[0].dataType),Q=a?1:2,B=a?2:3,te=a?3:1,F=V("W",e[1].dataType,e[1].dims.length,g),M=V("Dy",e[0].dataType,e[0].dims.length,d),J=[M,F];n&&J.push(V("bias",e[2].dataType,[i[te]].length,m));const W=ie("result",e[0].dataType,i.length,m),re=()=>{let K="";if(c)d===4?K+=`
        let xValue = ${M.getByOffset("x_offset")};
        let wValue = ${F.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?K+=`
          dotProd = dotProd + dot(vec4<${L}>(${M.getByOffset("x_offset")}, ${M.getByOffset("x_offset + 1u")}), vec4<${L}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(K+=`
          dotProd = dotProd + dot(vec4<${L}>(${M.getByOffset("x_offset")}, ${M.getByOffset("x_offset + 1u")}, ${M.getByOffset("x_offset + 2u")}, ${M.getByOffset("x_offset + 3u")}), vec4<${L}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}, ${F.getByOffset("w_offset + 2u")}, ${F.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(K+=`
                  let xValue = ${a?M.getByOffset(`${M.indicesToOffset(`${M.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):M.get("batch","inputChannel","idyR","idyC")};
        `,d===1)K+=`
          let w_offset = ${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${F.getByOffset(`w_offset / ${g}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let C=0;C<d;C++)K+=`
            let wValue${C} = ${F.getByOffset(`${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${C}, wOutChannel)`)} / ${g}`)};
            dotProd = dotProd + xValue[${C}] * wValue${C};`;return K},q=()=>{if(h===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let K="";if(d===1){K+="dotProd = dotProd";for(let C=0;C<h;C++)K+=`
            + ${M.getByOffset(`x_offset + ${C}`)} * ${F.getByOffset(`w_offset + ${C}`)}`;K+=";"}else if(d===2){if(h!==2)throw new Error(`Invalid inputChannelsRemainder ${h}.`);K+=`
          let xValue = ${M.getByOffset("x_offset")};
          let wValue = ${F.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return K},j=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",te)};
            let r = ${W.indicesGet("outputIndices",Q)};
            let c = ${W.indicesGet("outputIndices",B)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${W.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${L}(dyRCorner) + ${L}(wR)) / ${L}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${L}(uniforms.Dy_shape[${Q}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${L}(dyCCorner) + ${L}(wC)) / ${L}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${L}(uniforms.Dy_shape[${B}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${M.indicesToOffset(`${M.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${F.indicesToOffset(`${F.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${g};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:d}) {
                  ${re()}
                  inputChannel = inputChannel + ${c?4:d};
                }
                ${q()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${m}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${R.registerUniforms(G).declareVariables(...J,W)}
      ${R.mainStart()}
      ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${j}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${g}${m}${c}${h}`,inputDependencies:_},getRunData:()=>({dispatchGroup:{x:y[0],y:y[1],z:y[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:z}),getShaderSource:O}}}}),Mc,Dc,Pc,Ra,xw,Nc,Ma,Uc,Sw,Ox=Y({"web/lib/wasm/jsep/webgpu/ops/conv-transpose.ts"(){Cx(),Cr(),ar(),Mc=(e,t,r,n,i,a)=>(e-1)*t+r+(n-1)*i+1-a,Dc=(e,t,r,n,i)=>{const a=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=a,r[i]=e-a):t==="SAME_LOWER"&&(r[n]=e-a,r[i]=a)},Pc=(e,t,r,n,i,a,s,o,u,l)=>{const d=e.length-2,c=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));const p=e[0],h=t[o?3:1]*i;for(let m=0,g=e.length-d-(o?1:0);m<d;++m,++g){const $=e[g],y=c?$*s[m]:l[m],_=Mc($,s[m],a[m],t[g],r[m],y);Dc(_,n,a,m,m+d),c&&l.push(s[m]*($-1)+u[m]+(t[g]-1)*r[m]+1-a[m]-a[m+d])}l.splice(0,0,p),l.splice(o?3:1,0,h)},Ra=(e,t)=>{const r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){r.length=0;for(let c=2;c<t[1].dims.length;++c)r.push(t[1].dims[c])}const n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);const i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims;let u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){const c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){const c=t[0].dims.length-2;l=new Array(c).fill(1)}Pc(o,r,u,e.autoPad,e.group,i,l,n,s,a);const d=Object.assign({},e);return Object.assign(d,{kernelShape:r,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:l}),d},xw=e=>{const t=ru(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,c=e.outputShape;return{autoPad:n,format:r,dilations:i,group:a,kernelShape:s,outputPadding:d,outputShape:c,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Nc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");const r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");const i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");const a=e[0].dims.length-2;if(t.dilations.reduce((d,c)=>d+c,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((d,c)=>d+c,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((d,c)=>d+c,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((d,c)=>d+c,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ma=(e,t,r,n)=>{const i=e.kernelCustomData.wT??e.compute(it(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);const a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(vw(a,r,n),{inputs:a})},Uc=(e,t)=>{const r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);const l=Ra({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},n);Ma(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Sw=(e,t)=>{if(Nc(e.inputs,t),e.inputs[0].dims.length===3)Uc(e,t);else{const r=Ra(t,e.inputs);Ma(e,e.inputs,r)}}}}),qc,kw,Iw,Ax=Y({"web/lib/wasm/jsep/webgpu/ops/cumsum.ts"(){ce(),fe(),qe(),_e(),qc=(e,t,r,n)=>{const i=D.size(t),a=t.length,s=V("input",e,a),o=ie("output",e,a),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),l=D.normalizeAxis(u,a),d=c=>{const p=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,h=ae("uniforms.input_shape","uniforms.axis",a),m=n.reverse?p+(n.exclusive?" + 1":""):"0",g=n.reverse?h:p+(n.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${g};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...ue(t,t)]}),getShaderSource:d}},kw=(e,t)=>{const r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(qc(n,r,i,t),{inputs:[0]})},Iw=e=>{const t=e.exclusive===1,r=e.reverse===1;return Te({exclusive:t,reverse:r})}}}),Vc,Wc,Lc,Tw,Ew,Bx=Y({"web/lib/wasm/jsep/webgpu/ops/depth-to-space.ts"(){ce(),fe(),qe(),_e(),Vc=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Wc=(e,t,r,n)=>{const i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)i.push(r.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Lc=(e,t)=>{let r,n,i,a,s,o;const u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([r,n,i,a]=e.dims,s=d?[r,n,i,l,l,a/l**2]:[r,n,i,a/l**2,l,l],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=d?[r,l,l,a/l**2,n,i]:[r,a/l**2,l,l,n,i],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);const c=e.reshape(s),p=c.dims.length,h=e.dataType,m=V("a",h,p),g=ie("output",h,p),$=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(m,g)}

  ${Wc(o,p,m,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${g.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${g.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:y=>{const _=u?[r,n*l,i*l,a/l**2]:[r,a/l**2,n*l,i*l],v=D.size(_),b=c.dims,S=D.sortBasedOnPerm(b,o);return{outputs:[{dims:_,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...ue(b,S)]}},getShaderSource:$}},Tw=(e,t)=>{Vc(e.inputs),e.compute(Lc(e.inputs[0],t))},Ew=e=>Te({blocksize:e.blocksize,mode:e.mode,format:e.format})}}),ei,nn,Da,Gc,Fc,jc,Hc,Pa,Kc,zw,Cw,Rx=Y({"web/lib/wasm/jsep/webgpu/ops/einsum.ts"(){ce(),fe(),qe(),_e(),ei="[a-zA-Z]|\\.\\.\\.",nn="("+ei+")+",Da="^"+nn+"$",Gc="("+nn+",)*"+nn,Fc="^"+Gc+"$",jc=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Hc=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Fc)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,o)=>{const u=e[o].dims.slice();if(!s.match(RegExp(Da)))throw new Error("Invalid LHS term");const l=this.processTerm(s,!0,u,o);this.lhs.push(l)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([s,o])=>o.count===1||s==="...").map(([s])=>s).join("");else if(!n.match(RegExp(nn)))throw new Error("Invalid RHS");n.match(RegExp(ei,"g"))?.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{const o=this.symbolToInfo.get(s);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){const i=r.length;let a=!1,s=[],o=0;if(!e.match(RegExp(Da))&&!t&&e!=="")throw new Error("Invalid LHS term");const u=e.match(RegExp(ei,"g")),l=new jc(n);return u?.forEach((d,c)=>{if(d==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;const p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+p),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let h=0;h<s.length;h++){const m=String.fromCharCode(48+h);l.addSymbol(m,c+h),this.addSymbol(m,r[o++],n)}}else l.addSymbol(d,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,r[o++],n)}),l}},Pa=e=>e+"_max",Kc=(e,t,r,n)=>{const a=e.map(d=>d.length).map((d,c)=>V(`input${c}`,t,d)),s=D.size(n),o=ie("output",t,n.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{const c=[],p="var prod = 1.0;",h="var sum = 0.0;",m="sum += prod;",g=[],$=[],y=[],_=[],v=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,I)=>{if(r.rhs.symbolToIndices.has(I)){const T=r.rhs.symbolToIndices.get(I)?.[0];T!==void 0&&r.lhs.forEach((z,O)=>{if(S.inputIndices.includes(O)){const R=z.symbolToIndices.get(I);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(G=>{c.push(`${a[O].indicesSet(`input${O}Indices`,G,o.indicesGet("outputIndices",T))}`)})}})}else r.lhs.forEach((T,z)=>{if(S.inputIndices.includes(z)){const O=T.symbolToIndices.get(I);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(R=>{g.push(`${a[z].indicesSet(`input${z}Indices`,R,`${I}`)}`)}),_.push(`prod *= ${a[z].getByIndices(`input${z}Indices`)};`)}}),$.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Pa(I)}; ${I}++) {`),y.push("}")});const b=v?[...c,`let sum = ${a.map((S,I)=>S.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...c,h,...$,...g,p,..._,m,...y];return`
            ${d.registerUniforms(u.map(S=>({name:`${Pa(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,o)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${a.map((S,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${b.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{const d=u.filter(p=>r.symbolToInfo.has(p)).map(p=>({type:12,data:r.symbolToInfo.get(p)?.dimValue||0}));d.push({type:12,data:s});const c=e.map((p,h)=>[...ue(p)]).reduce((p,h)=>p.concat(h),d);return c.push(...ue(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},zw=(e,t)=>{const r=new Hc(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(Kc(i,e.inputs[0].dataType,r,n))},Cw=e=>{const t=e.equation.replace(/\s+/g,"");return Te({equation:t})}}}),Zc,Na,Qc,Xc,Ow,Mx=Y({"web/lib/wasm/jsep/webgpu/ops/expand.ts"(){ce(),fe(),_e(),Zc=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");const t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number);let n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Na=(e,t)=>{const r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},Qc=(e,t)=>e.length>t.length?Na(e,t):Na(t,e),Xc=e=>{const t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=Qc(t,r),i=e[0].dataType,a=i===9||D.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(D.size(n)/o),l=c=>{const p=V("input",i,t.length,s),h=ie("output",i,n.length,o);let m;if(i===9){const g=($,y,_="")=>`
          let outputIndices${y} = ${h.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${p.broadcastedIndicesToOffset(`outputIndices${y}`,h)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${$}[${y}] = ${_}(${p.getByOffset(`index${y}`)}[component${y}]);
        `;m=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${g("data",0,"u32")}
        ${g("data",1,"u32")}
        ${g("data",2,"u32")}
        ${g("data",3,"u32")}
        ${h.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${h.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${p.broadcastedIndicesToOffset("outputIndices",h)};
        let data = ${h.type.value}(${p.getByOffset(`inputOffset / ${s}`)});
        ${h.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(p,h)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:u},...ue(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},Ow=e=>{Zc(e.inputs),e.compute(Xc(e.inputs),{inputs:[0]})}}}),Yc,Aw,Dx=Y({"web/lib/wasm/jsep/webgpu/ops/fast-gelu.ts"(){ce(),fe(),_e(),tu(),Yc=e=>{const t=e[0].dataType,r=D.size(e[0].dims),n=D.size(e[1].dims),i=n%4===0,a=s=>{const o=V("x",t,[1],4),u=V("bias",t,[1],4),l=ie("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=h=>`
      let bias${h}_offset: u32 = (global_idx * 4 + ${h}) % uniforms.bias_size;
      let bias${h} = ${u.getByOffset(`bias${h}_offset / 4`)}[bias${h}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(d).declareVariables(o,u,l)}

    ${mo(Ke(t))}

    ${s.mainStart(Lr)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",go("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/Lr/4)}})}},Aw=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?Yy(e):e.compute(Yc(e.inputs))}}}),Jc,ep,Bw,Rw,Px=Y({"web/lib/wasm/jsep/webgpu/ops/gather.ts"(){ce(),fe(),qe(),_e(),Jc=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},ep=(e,t)=>{const r=e[0].dims,n=e[1].dims,i=r.length,a=D.normalizeAxis(t.axis,i),s=r.slice(0);s.splice(a,1,...n);const o=r[a],u=e[0].dataType===9?4:1,l=Math.ceil(D.size(s)/u),d=[{type:12,data:l},{type:6,data:o},{type:12,data:a},...ue(e[0].dims,e[1].dims,s)],c=p=>{const h=V("data",e[0].dataType,e[0].dims.length,u),m=V("inputIndices",e[1].dataType,e[1].dims.length),g=ie("output",e[0].dataType,s.length,u),$=_=>{const v=n.length;let b=`var indicesIndices${_}  = ${m.type.indices}(0);`;for(let S=0;S<v;S++)b+=`${v>1?`indicesIndices${_}[${S}]`:`indicesIndices${_}`} = ${s.length>1?`outputIndices${_}[uniforms.axis + ${S}]`:`outputIndices${_}`};`;b+=`
          var idx${_} = ${m.getByIndices(`indicesIndices${_}`)};
          if (idx${_} < 0) {
            idx${_} = idx${_} + uniforms.axisDimLimit;
          }
          var dataIndices${_} : ${h.type.indices};
        `;for(let S=0,I=0;S<i;S++)S===a?(b+=`${i>1?`dataIndices${_}[${S}]`:`dataIndices${_}`} = u32(idx${_});`,I+=v):(b+=`${i>1?`dataIndices${_}[${S}]`:`dataIndices${_}`} = ${s.length>1?`outputIndices${_}[${I}]`:`outputIndices${_}`};`,I++);return b};let y;if(e[0].dataType===9){const _=(v,b,S="")=>`
          let outputIndices${b} = ${g.offsetToIndices(`outputOffset + ${b}u`)};
          ${$(b)};
          let offset${b} = ${h.indicesToOffset(`dataIndices${b}`)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${v}[${b}] = ${S}(${h.getByOffset(`index${b}`)}[component${b}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${_("value",0,"u32")}
        ${_("value",1,"u32")}
        ${_("value",2,"u32")}
        ${_("value",3,"u32")}
        ${g.setByOffset("global_idx","value")}
      `}else y=`
      let outputIndices = ${g.offsetToIndices("global_idx")};
      ${$("")};
      let value = ${h.getByIndices("dataIndices")};
      ${g.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,m,g)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${y}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c}},Bw=e=>Te({axis:e.axis}),Rw=(e,t)=>{const r=e.inputs;Jc(r),e.compute(ep(e.inputs,t))}}}),tp,Mw,Dw,Nx=Y({"web/lib/wasm/jsep/webgpu/ops/gather-nd.ts"(){ce(),fe(),_e(),tp=(e,t,r,n,i,a,s,o,u)=>{const l=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],d=[a];l.push(...ue(t.dims,d));const c=p=>{const h=V("indices_data",t.dataType,t.dims.length),m=ie("input_slice_offsets_data",12,1,1),g=[h,m],$=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${p.registerUniforms($).declareVariables(...g)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},Mw=(e,t)=>{const r=e.inputs,n=r[0].dims,i=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=D.sizeToDimension(a,a.length-1),u=D.sizeFromDimension(n,t.batchDims+s),l=D.sizeToDimension(n,t.batchDims),d=D.sizeFromDimension(n,t.batchDims),c=o/l,p=new Array(s);let h=u;for(let b=0;b<s;++b)p[s-1-b]=h,h*=n[t.batchDims+s-1-b];const m=tp(e,r[1],p,t.batchDims,n,o,c,d,s),g=t.batchDims+s;if(g>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");const $=a.slice(0,-1).concat(n.slice(g)),y=D.size($),_=[{type:12,data:y},{type:12,data:u},...ue(r[0].dims,m.dims,$)],v=b=>{const S=V("data",r[0].dataType,r[0].dims.length),I=V("slice_offsets",12,m.dims.length),T=ie("output",r[0].dataType,$.length);return`
          ${b.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(S,I,T)}
            ${b.mainStart()}
            ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:$,dataType:i}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:v},{inputs:[r[0],m]})},Dw=e=>({batchDims:e.batch_dims,cacheKey:""})}}),rp,np,Pw,Nw,Ux=Y({"web/lib/wasm/jsep/webgpu/ops/gather-block-quantized.ts"(){ce(),fe(),qe(),_e(),rp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");const r=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===r?Math.ceil(o/n)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},np=(e,t)=>{const r=e[0].dims,n=e[1].dims,i=r.length,a=D.normalizeAxis(t.gatherAxis,i),s=D.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(a,1,...n);const u=D.size(o),l=e[2].dataType,c=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ue(...e.map((m,g)=>m.dims),o)],h=m=>{const g=V("data",e[0].dataType,e[0].dims.length),$=V("inputIndices",e[1].dataType,e[1].dims.length),y=V("scales",e[2].dataType,e[2].dims.length),_=e.length>3?V("zeroPoint",e[3].dataType,e[3].dims.length):void 0,v=ie("output",l,o.length),b=[g,$,y];_&&b.push(_);const S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...b,v)}
        ${m.mainStart()}
        let output_indices = ${v.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${v.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${v.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${v.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${g.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${v.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${g.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${g.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${g.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${y.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${y.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${y.getByIndices("scale_indices")};
        ${_?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${_.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${_.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ke(l)}(quantized_data - zero_point) * scale;
        ${v.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:h}},Pw=(e,t)=>{const r=e.inputs;rp(r,t),e.compute(np(e.inputs,t))},Nw=e=>Te({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}}),ip,ap,Uw,qw,qx=Y({"web/lib/wasm/jsep/webgpu/ops/gather-elements.ts"(){ce(),fe(),qe(),_e(),ip=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ap=(e,t)=>{const r=e[0].dims,n=e[0].dataType,i=r.length,a=e[1].dims,s=e[1].dataType,o=D.normalizeAxis(t.axis,i),u=r[o],l=a.slice(0),d=D.size(l),c=V("input",n,i),p=V("indicesInput",s,a.length),h=ie("output",n,l.length),m=[{type:12,data:d},{type:6,data:u},{type:12,data:o}];return m.push(...ue(r,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,p,h)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${h.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${h.setByOffset("global_idx","value")};
  }`}},Uw=e=>Te({axis:e.axis}),qw=(e,t)=>{const r=e.inputs;ip(r),e.compute(ap(e.inputs,t))}}}),sp,op,Vw,Ww,Vx=Y({"web/lib/wasm/jsep/webgpu/ops/gemm.ts"(){ce(),fe(),_e(),sp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},op=(e,t)=>{const r=e[0].dims.slice(),n=e[1].dims.slice(),[i,a,s]=U_.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");const u=16,l=Math.ceil(a/u),d=Math.ceil(i/u),c=!0,p=D.size(o),h=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(h.push(...ue(e[2].dims)),m.push("rank")),h.push(...ue(o));const g=$=>{const y=V("a",e[0].dataType,e[0].dims),_=V("b",e[1].dataType,e[1].dims);let v=null;const b=[y,_];e.length===3&&(v=V("c",e[2].dataType,e[2].dims.length),b.push(v));const S=ie("output",e[0].dataType,o.length);b.push(S);const I=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];let T="",z="";t.transA&&t.transB?(z=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${_.type.value}(0);
      }
      `,T="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(z=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${_.type.value}(0);
      }
      `,T="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(z=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${_.type.value}(0);
      }
      `,T="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(z=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${_.type.value}(0);
      }
      `,T="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");const O=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(I).declareVariables(...b)}
  var<workgroup> tile_a: array<array<${y.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${_.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${S.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${z}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${T}
      }
      workgroupBarrier();
    }

    ${O}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${v!=null?`let cOffset = ${v.broadcastedIndicesToOffset("vec2(m, n)",S)}; value += ${S.type.value}(uniforms.beta) * ${v.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:h}),getShaderSource:g}},Vw=e=>{const t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Ww=(e,t)=>{sp(e.inputs),e.compute(op(e.inputs,t))}}}),Ct,Ut,lr,dr,up,lp,dp,cp,pp,fp,hp,mp,Lw,Gw,Wx=Y({"web/lib/wasm/jsep/webgpu/ops/grid-sample.ts"(){ce(),fe(),qe(),_e(),[Ct,Ut,lr,dr]=[0,1,2,3],up=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},lp=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,dp=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,cp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,pp=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,fp=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ct}] = batch;
     indices[${Ut}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${lr}] = u32(r);
            indices[${dr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${lr}] = u32(clamp(r, 0, H - 1));
          indices[${dr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${lr}] = gs_reflect(r, border[1], border[3]);
          indices[${dr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,hp=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ct}], indices[${Ut}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ct}], indices[${Ut}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ct}], indices[${Ut}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ct}], indices[${Ut}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ct}], indices[${Ut}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ct}], indices[${Ut}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,mp=(e,t)=>{const r=V("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=V("grid",e[1].dataType,n.length,2);let a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ct,Ut,lr,dr]=[0,3,1,2]);const s=ie("output",e[0].dataType,a.length),o=r.type.value,l=[{type:12,data:D.size(a)},...ue(e[0].dims,n,a)],d=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(r,i,s)}
  ${lp}
  ${dp(o)}
  ${cp(t)}
  ${pp(t)}
  ${fp(r,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${lr}]);
      let W_in = i32(uniforms.x_shape[${dr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ct}], indices[${lr}], indices[${dr}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${hp(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{const p=D.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:d}},Lw=(e,t)=>{up(e.inputs),e.compute(mp(e.inputs,t))},Gw=e=>Te({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}}),Xe,gp,Fw,Ua,_p,xn,jw,Hw=Y({"web/lib/wasm/jsep/webgpu/ops/multihead-attention.ts"(){ce(),fe(),qe(),Xo(),eu(),_e(),ar(),Xe=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,gp=(e,t)=>{const r=e[0],n=Xe(e,1),i=Xe(e,2),a=Xe(e,3),s=Xe(e,4),o=Xe(e,5),u=Xe(e,6),l=Xe(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");const d=r.dims[0],c=r.dims[1],p=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4];let h=c,m=0,g=0;const $=Math.floor(p/t.numHeads);if(u&&l&&D.size(u.dims)&&D.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==$)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==$)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],g=u.dims[2]}else if(u&&D.size(u.dims)||l&&D.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y;if(n&&D.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');y=2,h=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');y=5,h=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=0,h=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}if(a&&D.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}const _=m+h;let v=0;if(s&&D.size(s.dims)>0){v=8;const T=s.dims;throw T.length===1?T[0]===d?v=1:T[0]===3*d+2&&(v=3):T.length===2&&T[0]===d&&T[1]===_&&(v=5),v===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let b=!1,S=p;if(i&&D.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(h!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(h!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],b=!0}}const I=!1;if(s&&D.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:c,pastSequenceLength:m,kvSequenceLength:h,totalSequenceLength:_,maxSequenceLength:g,inputHiddenSize:0,hiddenSize:p,vHiddenSize:S,headSize:$,vHeadSize:Math.floor(S/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:I,passPastInKv:b,qkvFormat:y}},Fw=e=>Te({...e}),Ua=Te({perm:[0,2,1,3]}),_p=(e,t,r,n,i,a,s)=>{const o=[n,i,a],u=D.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],d=c=>{const p=ie("qkv_with_bias",t.dataType,o),h=V("qkv",t.dataType,o),m=V("bias",r.dataType,o),g=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(g).declareVariables(h,m,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,r],outputs:[-1]})[0]},xn=(e,t,r,n,i,a,s,o)=>{let u=a;if(s&&D.size(s.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=_p(e,a,s,t,n,r*i,o),u=u.reshape([t,n,r,i]),r===1||n===1?u:e.compute(it(u,Ua.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,n,r,i])),r===1||n===1?u:e.compute(it(u,Ua.perm),{inputs:[u],outputs:[-1]})[0]},jw=(e,t)=>{const r=gp(e.inputs,t),n=e.inputs[0],i=Xe(e.inputs,1),a=Xe(e.inputs,2),s=Xe(e.inputs,3),o=Xe(e.inputs,4),u=Xe(e.inputs,5),l=Xe(e.inputs,6),d=Xe(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");const c=i&&a&&i.dims.length===4&&a.dims.length===4,p=xn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,s,0);if(c)return Cn(e,p,i,a,o,void 0,l,d,u,r);if(!i||!a)throw new Error("key and value must be provided");const h=xn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,s,r.hiddenSize),m=xn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);Cn(e,p,h,m,o,void 0,l,d,u,r)}}}),yp,wp,$p,bp,bo,Kw,Zw,Qw=Y({"web/lib/wasm/jsep/webgpu/ops/split.ts"(){ce(),fe(),qe(),_e(),yp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},wp=(e,t)=>{const r=[];let n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),Te({numOutputs:n,axis:t.axis,splitSizes:r})},$p=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ae("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,bp=e=>{const t=e.length,r=[];for(let n=0;n<t;++n){const i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},bo=(e,t)=>{const r=e[0].dims,n=D.size(r),i=e[0].dataType,a=D.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=V("input",i,r.length),u=new Array(t.numOutputs),l=[],d=[];let c=0;const p=[{type:12,data:n}];for(let m=0;m<t.numOutputs;m++){c+=t.splitSizes[m],u[m]=c;const g=r.slice();g[a]=t.splitSizes[m],d.push(g),s[m]=ie(`output${m}`,i,g.length),l.push({dims:d[m],dataType:e[0].dataType})}p.push({type:12,data:u},...ue(r,...d));const h=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${$p(u.length)}
  ${bp(s)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ae("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p})}},Kw=(e,t)=>{yp(e.inputs);const r=e.inputs.length===1?t:wp(e.inputs,t);e.compute(bo(e.inputs,r),{inputs:[0]})},Zw=e=>{const t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Te({axis:t,numOutputs:n,splitSizes:r})}}}),vp,Ei,Xw,Yw=Y({"web/lib/wasm/jsep/webgpu/ops/rotary-embedding.ts"(){ce(),fe(),qe(),_e(),vp=(e,t)=>{const[r,n,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!D.areEqual(n.dims,[])&&!D.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!D.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");const u=r.dims[0],l=r.dims[r.dims.length-2],d=i.dims[0],c=D.sizeFromDimension(r.dims,1)/l,p=o===0?i.dims[1]*2:c/s;if(o>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(l!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(p/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Ei=(e,t)=>{const{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,d=e[2].dims[1],c=i===0?d*2:l/n,p=new Array(s,u,l/c,c-d),h=D.computeStrides(p),m=[{type:1,data:a},{type:12,data:p},{type:12,data:h},...e[0].dims.length===3?new Array({type:12,data:[o,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,u*c,1]}):[],...ue(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],g=$=>{const y=V("input",e[0].dataType,e[0].dims.length),_=V("position_ids",e[1].dataType,e[1].dims.length),v=V("cos_cache",e[2].dataType,e[2].dims.length),b=V("sin_cache",e[3].dataType,e[3].dims.length),S=ie("output",e[0].dataType,e[0].dims.length);return $.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:h.length},{name:"input_output_strides",type:"u32",length:h.length}]),`
        ${$.declareVariables(y,_,v,b,S)}

        ${$.mainStart(Lr)}
          let half_rotary_emb_dim = uniforms.${v.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${_.broadcastedIndicesToOffset("bsnh.xy",ie("",_.type.tensor,2))};
            let position_id =
                u32(${_.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${y.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} -
                ${y.getByOffset("j")} * ${b.get("position_id","bsnh[3]")};
            ${S.setByOffset("i","re")}
            let im = ${y.getByOffset("i")} * ${b.get("position_id","bsnh[3]")} +
                ${y.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${S.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${S.setByOffset("k",y.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Te({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(p)/Lr)},programUniforms:m})}},Xw=(e,t)=>{vp(e.inputs,t),e.compute(Ei(e.inputs,t))}}}),xp,Sp,qa,kp,Jw,Lx=Y({"web/lib/wasm/jsep/webgpu/ops/group-query-attention.ts"(){qe(),ce(),eu(),Hw(),Qw(),ar(),Yw(),_e(),xp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");const r=e[0],n=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");const o=!1,u=r.dims[0],l=r.dims[1];let d=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],c=l,p=0;const h=!n||n.dims.length===0,m=Math.floor(h?d/(t.numHeads+2*t.kvNumHeads):d/t.numHeads);h&&(d=m*t.numHeads);const g=a&&a.dims.length!==0,$=s&&s.dims.length!==0;if(g&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(g&&$){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(g||$)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}const v=0;let b=!1,S=t.kvNumHeads?m*t.kvNumHeads:d;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],b=!0}}const I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:S,headSize:m,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},Sp=Te({perm:[0,2,1,3]}),qa=(e,t,r)=>{let n=t;const i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(it(n,Sp.perm),{inputs:[n],outputs:[-1]})[0]),n},kp=(e,t,r,n)=>{const a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=d=>{const c=V("seq_lens",r.dataType,r.dims),p=V("total_seq_lens",n.dataType,n.dims),h=ie("pos_ids",7,s),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(m).declareVariables(c,p,h)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${p.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${c.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${h.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${h.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${h.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:7}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},Jw=(e,t)=>{const r=xp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");const n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=r.kvNumHeads?r.kvNumHeads:r.numHeads,c=Te({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,d*r.headSize,d*r.headSize]}),[p,h,m]=!i&&!a?e.compute(bo([n],c),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,a];let g,$;if(t.doRotary){const b=e.compute(kp(r.batchSize,r.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],S=e.inputs[7],I=e.inputs[8],T=Te({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),z=[p,b,S,I],O=[-1];g=e.compute(Ei(z,T),{inputs:z,outputs:O})[0],z.splice(0,1,h);const R=Te({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});$=e.compute(Ei(z,R),{inputs:z,outputs:O})[0]}const y=xn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?g:p,void 0,0),_=qa(e,t.doRotary?$:h,r),v=qa(e,m,r);Cn(e,y,_,v,void 0,void 0,s,o,void 0,r,u,l)}}}),Va,Ip,Tp,e0,Gx=Y({"web/lib/wasm/jsep/webgpu/ops/instance-norm.ts"(){ce(),fe(),ar(),_e(),Va=(e,t,r,n,i,a,s,o)=>{const u=Ne(a),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,c=i*s;let p=64;c===1&&(p=256);const h=[i,s,a/u],m=[i,s,2],g=["rank","type","type"],$=[];$.push(...ue(h,m));const y=_=>{const v=V("x",t.dataType,3,u),b=V("scale",r.dataType,r.dims),S=V("bias",n.dataType,n.dims),I=ie("output",1,3,2),T=[v,b,S,I];return`
  var<workgroup> workgroup_shared : array<${d}, ${p}>;
  const workgroup_size = ${p}u;
  ${_.declareVariables(...T)}
  ${_.mainStart(p)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${v.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${nr("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${nr("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:$}),getShaderSource:y},{inputs:[t,r,n],outputs:[-1]})[0]},Ip=(e,t,r)=>{const n=t[0].dims,i=n,a=2,s=n[0],o=n[1],u=D.sizeFromDimension(n,a),l=Ne(u),d=D.size(i)/l,c=Va(e,t[0],t[1],t[2],s,u,o,r.epsilon),p=[s,o,u/l],h=[s,o],m=["type","none"],g=$=>{const y=V("x",t[0].dataType,p.length,l),_=V("scale_shift",1,h.length,2),v=ie("output",t[0].dataType,p.length,l),b=[y,_,v];return`
  ${$.registerUniform("output_size","u32").declareVariables(...b)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${v.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${_.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${y.getByOffset("global_idx")} * ${v.type.value}(scale_shift.x) + ${v.type.value}(scale_shift.y);
      ${v.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...ue(p,h,p)]}),getShaderSource:g},{inputs:[t[0],c]})},Tp=(e,t,r)=>{const n=t[0].dims,i=n,a=n[0],s=n[n.length-1],o=D.sizeFromDimension(n,1)/s,u=Ne(s),l=D.size(i)/u,d=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],c=["type","type"];let p=!1;const h=[0,n.length-1];for(let y=0;y<n.length-2;y++)p=p||n[y+1]!==1,h.push(y+1);p=p&&n[n.length-1]!==1;const m=p?e.compute(it(e.inputs[0],h),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(y,_)=>n[h[_]])),g=Va(e,m,t[1],t[2],a,o,s,r.epsilon),$=y=>{const _=Le(t[0].dataType),v=u===1?"vec2f":`mat${u}x2f`,b=T=>{const z=T===0?"x":"y",O=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${_}(${O}(scale.${z}))`;case 2:return`vec2<${_}>(${O}(scale[0].${z}, scale[1].${z}))`;case 4:return`vec4<${_}>(${O}(scale[0].${z}, scale[1].${z}, scale[2].${z}, scale[3].${z}))`;default:throw new Error(`Not supported compoents ${u}`)}},S=V("input",t[0].dataType,t[0].dims,u),I=ie("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${S.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${v}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${y.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${b(0)}, ${b(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:$},{inputs:[t[0],g]})},e0=(e,t)=>{t.format==="NHWC"?Tp(e,e.inputs,t):Ip(e,e.inputs,t)}}}),Ep,zp,t0,Fx=Y({"web/lib/wasm/jsep/webgpu/ops/layer-norm.ts"(){ce(),fe(),_e(),Ep=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},zp=(e,t,r)=>{const n=t.simplified,i=e[0].dims,a=e[1],s=!n&&e[2],o=i,u=D.normalizeAxis(t.axis,i.length),l=D.sizeToDimension(i,u),d=D.sizeFromDimension(i,u),c=D.size(a.dims),p=s?D.size(s.dims):0;if(c!==d||s&&p!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);const h=[];for(let S=0;S<i.length;++S)S<u?h.push(i[S]):h.push(1);const m=Ne(d),g=["type","type"],$=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/m)},{type:1,data:t.epsilon}];s&&g.push("type");const y=r>1,_=r>2,v=S=>{const I=Le(e[0].dataType),T=[V("x",e[0].dataType,e[0].dims,m),V("scale",a.dataType,a.dims,m)];s&&T.push(V("bias",s.dataType,s.dims,m)),T.push(ie("output",e[0].dataType,o,m)),y&&T.push(ie("mean_data_output",1,h)),_&&T.push(ie("inv_std_output",1,h));const z=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${S.registerUniforms(z).declareVariables(...T)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${po("f32",m)};
    var mean_square_vector = ${po("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Nr(I,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${nr("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${nr("mean_square_vector",m)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Nr(I,m,"x[j + offset]")};
      let f32scale = ${Nr(I,m,"scale[j]")};
      output[j + offset] = ${T[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Nr(I,m,"bias[j]")}`:""}
      );
    }

    ${y?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},b=[{dims:o,dataType:e[0].dataType}];return y&&b.push({dims:h,dataType:1}),_&&b.push({dims:h,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${r};${n}`,inputDependencies:g},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:$}),getShaderSource:v}},t0=(e,t)=>{Ep(e.inputs),e.compute(zp(e.inputs,t,e.outputCount))}}}),Cp,r0,jx=Y({"web/lib/wasm/jsep/webgpu/ops/matmul.ts"(){fe(),au(),su(),Cp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},r0=e=>{Cp(e.inputs);const t=Wr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");const r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(iu(e.inputs,{activation:""},t));else{const i=t[t.length-2],a=D.size(e.inputs[0].dims.slice(0,-2)),s=D.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){const o=e.inputs[0].reshape([1,a,n]),u=e.inputs[1].reshape([1,n,r]),l=[1,a,r],d=[o,u];e.compute(Ti(d,{activation:""},t,l),{inputs:d})}else e.compute(Ti(e.inputs,{activation:""},t))}}}}),Op,Ap,Bp,n0,i0,Hx=Y({"web/lib/wasm/jsep/webgpu/ops/matmulnbits.ts"(){ce(),fe(),qe(),_e(),Op=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");const r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");const i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!D.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");const u=e[2].dims;if(D.size(u)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){const d=e[3].dims,c=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(D.size(d)!==c)throw new Error("zeroPoints input size error.")}},Ap=(e,t)=>{const r=e[0].dims,n=r.length,i=r[n-2],a=t.k,s=t.n,o=r.slice(0,n-2),u=D.size(o),d=e[1].dims[2]/4,c=e[0].dataType,p=Ne(t.k),h=Ne(d),m=Ne(s),g=o.concat([i,s]),$=i>1&&s/m%2===0?2:1,y=D.size(g)/m/$,_=64,v=[],b=[u,i,a/p],S=D.convertShape(e[1].dims).slice();S.splice(-1,1,d/h),v.push(...ue(b)),v.push(...ue(S)),v.push(...ue(e[2].dims)),e.length===4&&v.push(...ue(D.convertShape(e[3].dims)));const I=[u,i,s/m];v.push(...ue(I));const T=z=>{const O=b.length,R=V("a",e[0].dataType,O,p),G=V("b",12,S.length,h),L=V("scales",e[2].dataType,e[2].dims.length),Q=[R,G,L],B=e.length===4?V("zero_points",12,e[3].dims.length):void 0;B&&Q.push(B);const te=I.length,F=ie("output",e[0].dataType,te,m),M=Le(e[0].dataType),J=(()=>{switch(p){case 1:return`array<${M}, 8>`;case 2:return`mat4x2<${M}>`;case 4:return`mat2x4<${M}>`;default:throw new Error(`${p}-component is not supported.`)}})(),W=()=>{let j=`
          // reuse a data
            var input_offset = ${R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`)};
            var a_data: ${J};
            for (var j: u32 = 0; j < ${8/p}; j++) {
              a_data[j] = ${R.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let K=0;K<m*$;K++)j+=`
            b_value = ${h===1?`b${K}_data`:`b${K}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${J}(${Array.from({length:4},(C,H)=>`${M}(b_value_lower[${H}]), ${M}(b_value_upper[${H}])`).join(", ")});
            b_dequantized_values = ${p===1?`${J}(${Array.from({length:8},(C,H)=>`(b_quantized_values[${H}] - ${B?`zero_point${K}`:"zero_point"}) * scale${K}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${B?`zero_point${K}`:"zero_point"}`).join(",")})) * scale${K};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(K/m)}]${m>1?`[${K%m}]`:""} += ${Array.from({length:8/p},(C,H)=>`${p===1?`a_data[${H}] * b_dequantized_values[${H}]`:`dot(a_data[${H}], b_dequantized_values[${H}])`}`).join(" + ")};
          `;return j},re=()=>{let j=`
            var col_index = col * ${m};
            ${B?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${M}(8);`}
            `;for(let K=0;K<m*$;K++)j+=`
            let scale${K} = ${L.getByOffset("col_index * nBlocksPerCol + block")};
            ${B?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${B.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${K} = ${M}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return j},q=()=>{let j=`col_index = col * ${m};`;for(let K=0;K<m*$;K++)j+=`
            let b${K}_data = ${G.getByIndices(`${G.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return j+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,j};return`
        var<workgroup> workgroup_shared: array<${F.type.value}, ${$*_}>;
        ${z.declareVariables(...Q,F)}
        ${z.mainStart([_,1,1])}
          let output_indices = ${F.offsetToIndices(`(global_idx / ${_}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${re()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${q()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${W()}
                word_offset += ${8/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${F.type.value} = ${F.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${F.setByIndices(`${F.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${m};${$};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:y},programUniforms:v}),getShaderSource:T}},Bp=(e,t)=>{const r=e[0].dims,n=r.length,i=r[n-2],a=t.k,s=t.n,o=r.slice(0,n-2),u=D.size(o),d=e[1].dims[2]/4,c=e[0].dataType,p=Ne(t.k),h=Ne(d),m=o.concat([i,s]),g=128,$=s%8===0?8:s%4===0?4:1,y=g/$,_=y*h*8,v=_/p,b=_/t.blockSize,S=D.size(m)/$,I=[],T=[u,i,a/p],z=D.convertShape(e[1].dims).slice();z.splice(-1,1,d/h),I.push(...ue(T)),I.push(...ue(z)),I.push(...ue(e[2].dims)),e.length===4&&I.push(...ue(D.convertShape(e[3].dims)));const O=[u,i,s];I.push(...ue(O));const R=G=>{const L=T.length,Q=V("a",e[0].dataType,L,p),B=V("b",12,z.length,h),te=V("scales",e[2].dataType,e[2].dims.length),F=[Q,B,te],M=e.length===4?V("zero_points",12,e[3].dims.length):void 0;M&&F.push(M);const J=O.length,W=ie("output",e[0].dataType,J),re=Le(e[0].dataType),q=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${re}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${re}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${re}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${re}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Q.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${W.type.value}, ${y}>, ${$}>;
        ${G.declareVariables(...F,W)}
        ${G.mainStart([y,$,1])}
          let output_indices = ${W.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${b} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += ${g})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Q.getByIndices(`${Q.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Q.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${b} + local_id.x;
            ${M?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${M.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${re}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${re}(8);`}
            let scale = ${te.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${B.getByIndices(`${B.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${q()}
              let b_value = ${h===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${re}>(${Array.from({length:4},(j,K)=>`${re}(b_value_lower[${K}]), ${re}(b_value_upper[${K}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${re}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(j,K)=>`${`dot(a_data${K}, b_dequantized_values[${K}])`}`).join(" + ")};
              word_offset += ${8/p};
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            for (var b = 0u; b < ${y}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${W.setByIndices(`${W.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${y};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:S},programUniforms:I}),getShaderSource:R}},n0=(e,t)=>{Op(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Bp(e.inputs,t)):e.compute(Ap(e.inputs,t))},i0=e=>Te(e)}}),Rp,Mp,Dp,Pp,Np,Up,qp,Vp,a0,Kx=Y({"web/lib/wasm/jsep/webgpu/ops/pad.ts"(){ce(),fe(),_e(),Rp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Mp=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ae("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ae("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},Dp=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ae("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ae("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Pp=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ae("uniforms.x_shape",i,t)})) {
                  k = i32(${ae("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Np=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${ae("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ae("uniforms.x_shape",i,t)})) {
                  k -= i32(${ae("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Up=(e,t,r)=>{switch(r.mode){case 0:return Mp(e,t,r.pads.length);case 1:return Dp(e,t,r.pads.length);case 2:return Pp(e,t,r.pads.length);case 3:return Np(e,t,r.pads.length);default:throw new Error("Invalid mode")}},qp=(e,t)=>{const r=D.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,a=[{type:12,data:D.size(r)},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ue(e[0].dims,r));const o=["rank"],u=l=>{const d=ie("output",e[0].dataType,r.length),c=V("x",e[0].dataType,n.length),p=c.type.value,h=Up(d,n.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:s?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(c,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${h}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(r)/64)},programUniforms:a}),getShaderSource:u}},Vp=(e,t)=>{if(e.length>1){const r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){const o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(r[u]),a[Number(o[u])+i]=Number(r[u+o.length])}else r.forEach((o,u)=>a[Number(u)]=Number(o));const s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:n,pads:s}}else return t},a0=(e,t)=>{Rp(e.inputs);const r=Vp(e.inputs,t);e.compute(qp(e.inputs,r),{inputs:[0]})}}}),an,Wa,La,Ga,Fa,Wp,Lp,ja,Ha,s0,o0,Ka,u0,l0,Za,d0,c0,p0,f0,Zx=Y({"web/lib/wasm/jsep/webgpu/ops/pool.ts"(){kt(),ce(),fe(),_e(),an=e=>{if(Re.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Wa=(e,t,r)=>{const n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());const a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();ki.adjustPoolAttributes(r,i,s,o,u,l);const d=ki.computePoolOutputShape(r,i,o,u,s,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});const p=d.slice();return p.push(p.splice(1,1)[0]),[c,n?p:d]},La=(e,t)=>{const r=t.format==="NHWC",n=D.size(e),i=D.size(t.kernelShape),a=[{type:12,data:n},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){const o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],c=!!(l+d);a.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:d}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){const h=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],g=t.pads[t.pads.length/2-2],$=t.pads[t.pads.length-2];p=!!(g+$),a.push({type:12,data:h},{type:12,data:m},{type:12,data:g},{type:12,data:$}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,p]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");const o=D.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});const u=t.pads.reduce((l,d)=>l+d);return[a,s,!!u,!1,!1]}},Ga=(e,t,r,n,i,a,s,o,u,l,d,c)=>{const p=i.format==="NHWC",h=t.type.value,m=ie("output",t.type.tensor,n);if(i.kernelShape.length<=2){let g="",$="",y="";const _=r-(p?2:1);if(d?g=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${_}] < 0 || xIndices[${_}]
                      >= uniforms.x_shape[${_}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:g=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){const b=r-(p?3:2);c?$=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${b}] < 0 || xIndices[${b}] >= uniforms.x_shape[${b}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:$=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sh - uniforms.phStart + j;
                `,y=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${h}(${o});
              var pad = 0;
              ${$}
              ${g}
              ${y}
              ${s}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");const g=i.kernelShape.length,$=i.pads.length;let y="";return l?y=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:y=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${g}>;

              var value = ${h}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${g-1}u; j++) {
                  offsets[j] = offset / ${ae("uniforms.kernelStrides","j",g)};
                  offset -= offsets[j] * ${ae("uniforms.kernelStrides","j",g)};
                }
                offsets[${g-1}] = offset;

                isPad = false;
                for (var j = ${r-g}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ae("uniforms.strides",`j - ${r-g}u`,g)}
                    + offsets[j - ${r-g}u] - ${ae("uniforms.pads","j - 2u",$)};
                  ${y}
              }
              ${s}

              output[global_idx] = value;
            }`}},Fa=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Wp=e=>`${Fa(e)};${e.countIncludePad}`,Lp=e=>`${Fa(e)};${e.storageOrder};${e.dilations}`,ja=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ha=(e,t,r,n)=>{const[i,a]=Wa(t,n,r),s=V("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;";let l="";i.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;const[d,c,p,h,m]=La(a,i);d.push(...ue(t.dims,a));const g=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${p};${h};${m}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:d}),getShaderSource:$=>Ga($,s,t.dims.length,a.length,i,u,l,0,c,p,h,m)}},s0=e=>{const t=e.count_include_pad!==0,r=ja(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");const n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:Wp(n)}},o0=(e,t)=>{an(e.inputs),e.compute(Ha("AveragePool",e.inputs[0],!1,t))},Ka={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},u0=e=>{const t=e.format;return{format:t,...Ka,cacheKey:t}},l0=(e,t)=>{an(e.inputs),e.compute(Ha("GlobalAveragePool",e.inputs[0],!0,t))},Za=(e,t,r,n)=>{const[i,a]=Wa(t,n,r),s=`
      value = max(x_val, value);
    `,o="",u=V("x",t.dataType,t.dims.length),l=["rank"],[d,c,p,h,m]=La(a,i);return d.push(...ue(t.dims,a)),{name:e,shaderCache:{hint:`${n.cacheKey};${p};${h};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:d}),getShaderSource:g=>Ga(g,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,c,p,h,m)}},d0=(e,t)=>{an(e.inputs),e.compute(Za("MaxPool",e.inputs[0],!1,t))},c0=e=>{const t=e.storage_order,r=e.dilations,n=ja(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");const i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:Lp(i)}},p0=e=>{const t=e.format;return{format:t,...Ka,cacheKey:t}},f0=(e,t)=>{an(e.inputs),e.compute(Za("GlobalMaxPool",e.inputs[0],!0,t))}}}),Gp,Fp,h0,m0,Qx=Y({"web/lib/wasm/jsep/webgpu/ops/quantize-linear.ts"(){ce(),fe(),qe(),_e(),Gp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");const r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Fp=(e,t)=>{const r=D.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,a=e[0].dims,s=e[1].dataType,o=D.size(a),u=n===3||n===2,l=u?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(D.size(c.dims)/4)]:c.dims:void 0,h=d.length===0||d.length===1&&d[0]===1,m=h===!1&&d.length===1,g=Ne(o),$=h&&(!u||g===4),y=$?g:1,_=$&&!u?g:1,v=V("input",u?12:n,l.length,_),b=V("scale",s,d.length),S=c?V("zero_point",u?12:n,p.length):void 0,I=ie("output",s,a.length,y),T=[v,b];S&&T.push(S);const z=[l,d];c&&z.push(p);const O=[{type:12,data:o/y},{type:12,data:r},{type:12,data:t.blockSize},...ue(...z,a)],R=G=>{const L=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${G.registerUniforms(L).declareVariables(...T,I)}
      ${G.mainStart()}
          ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${v.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${y===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${v.getByOffset("global_idx")};`};

          // Set scale input
          ${h?`let scale_value= ${b.getByOffset("0")}`:m?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${b.getByOffset("scale_index")};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${b.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${b.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${S?h?u?`
                let zero_point_input = ${S.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${S.getByOffset("0")}`:m?u?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${S.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${S.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${b.indicesToOffset("scale_indices")};
                let zero_point_input = ${S.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${S.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":v.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:S?["rank","rank","rank"]:["rank","rank"]},getShaderSource:R,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/y/64),y:1,z:1},programUniforms:O})}},h0=(e,t)=>{Gp(e.inputs,t),e.compute(Fp(e.inputs,t))},m0=e=>Te({axis:e.axis,blockSize:e.blockSize})}}),jp,Hp,g0,Xx=Y({"web/lib/wasm/jsep/webgpu/ops/range.ts"(){kt(),ce(),_e(),jp=(e,t,r)=>{const n=e===t,i=e<t&&r<0,a=e>t&&r>0;if(n||i||a)throw new Error("Range these inputs' contents are invalid.")},Hp=(e,t,r,n)=>{const i=Math.abs(Math.ceil((t-e)/r)),a=[i],s=i,o=[{type:12,data:s},{type:n,data:e},{type:n,data:r},...ue(a)],u=l=>{const d=ie("output",n,a.length),c=d.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},g0=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Re.webgpu.validateInputContent&&jp(t,r,n),e.compute(Hp(t,r,n,e.inputs[0].dataType),{inputs:[]})}}}),Kp,Qa,Xa,Zp,_0,y0,Yx=Y({"web/lib/wasm/jsep/webgpu/ops/scatter-nd.ts"(){ce(),fe(),qe(),_e(),Kp=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);const i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${i}bitcast<${n}>(oldValue) + (${r})${a}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${a}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Qa=(e,t)=>`${e===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[${t?"i - indices_start":"i"}];
    let dim_value = uniforms.output_shape[${t?"i - indices_start":"i"} + uniforms.last_index_dimension];`}
    
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));`,Xa=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${Kp(e.reduction,"output[data_offset + i]","value",t)}
      }`,Zp=(e,t)=>{const r=e[0].dims,n=e[1].dims,i=r,a=1,s=Math.ceil(D.size(n)/a),o=n[n.length-1],u=D.sizeFromDimension(r,o),l=D.sizeFromDimension(n,0)/o,d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ue(e[1].dims,e[2].dims,i)],c=p=>{const h=V("indices",e[1].dataType,e[1].dims.length),m=V("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?j_("output",e[0].dataType,i.length):ie("output",e[0].dataType,i.length,a);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,m,g)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${l}; i = i + 1) {
      for (var j = i + 1; j < ${l}; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    // Process each index-update pair individually when duplicates exist
    for (var idx = 0u; idx < ${l}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${Qa(r.length,!1)}
      }
      ${Xa(t,g.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${Qa(r.length,!0)}
  }
  ${Xa(t,g.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},_0=e=>Te({reduction:e.reduction}),y0=(e,t)=>{e.compute(Zp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}}),Qp,Xp,Yp,Ya,Jp,ef,tf,rf,nf,af,sf,of,Ja,uf,lf,df,cf,pf,w0,$0,Jx=Y({"web/lib/wasm/jsep/webgpu/ops/resize.ts"(){ce(),fe(),qe(),_e(),Qp=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Xp=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));const n=new Array(r).fill(1);return t.forEach((i,a)=>n[i]=e[a]),n},Yp=(e,t,r,n,i,a)=>{const[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(d=>a.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(d=>n.push(d)),n.length!==0&&n.length!==l&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Qp(n,t),t.axes.length>0&&Xp(n,t.axes,l).forEach((d,c)=>n[c]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>i.push(Number(d))),i.length!==0&&i.length!==l&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Ya=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,Jp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ya("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ya("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ef=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",tf=(e,t,r)=>{const n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((a,s)=>{n[a]=i[s],n[s+r]=i[t.length+s]}),n):i},rf=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(a=>i.push(a)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((a,s)=>i[a]=r[s])}else r.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},nf=(e,t,r)=>{const n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);const i=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=n),r.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(n,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},af=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ae("uniforms.scales","i",n)};
        var roi_low = ${ae("uniforms.roi","i",i)};
        var roi_hi = ${ae("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ae("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ae("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,sf=(e,t,r,n,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ae("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ae("uniforms.roi","i",a)};
          var roi_hi = ${ae("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${ae("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ae("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,of=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ae("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ja=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",uf=(e,t,r,n,i)=>{const[a,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Ja(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${s}];
      var col:${l} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},lf=(e,t,r,n,i,a,s,o,u,l)=>{const d=r.length===2,[c,p]=d?[0,1]:[2,3],h=e.type.value,m=g=>{const $=g===c?"row":"col";return`
      fn ${$}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${h} {
        var output_index = ${t.indicesGet("output_indices",g)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[g]},
        ${n[g]}, ${r[g]}, ${a[g]}, ${a[g]} + ${r.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[g]} - 1))) {
          return ${u};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${$}: ${h} = originalIdx + ${h}(i);
          if (${$} < 0 || ${$} >= ${r[g]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${$} = max(0, min(${$}, ${r[g]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",g,`u32(${$})`)};
          data[i + 1] = ${g===c?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(c)};
    ${m(p)};
  fn getCubicInterpolationCoefs(s: ${h}) -> array<${h}, 4> {
    var absS = abs(s);
    var coeffs: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${h} = 1.0 - absS;
    var twoMinusAbsS: ${h} = 2.0 - absS;
    var onePlusAbsS: ${h} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${h}, 4>, coefs: array<${h}, 4>) -> ${h} {
    var coefsSum: ${h} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${h} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},df=(e,t,r,n,i)=>{const[a,s,o,u,l]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${Ja(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${s}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${u}];
      ${n?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},cf=(e,t,r,n,i,a)=>{const s=e.dims,o=tf(a,t.axes,s.length);let u=rf(s,n,i,t.axes),l=n.slice();n.length===0&&(l=s.map((_,v)=>_===0?1:u[v]/_),t.keepAspectRatioPolicy!=="stretch"&&(u=nf(s,l,t)));const d=ie("output",e.dataType,u.length),c=V("input",e.dataType,s.length),p=D.size(u),h=s.length===u.length&&s.every((_,v)=>_===u[v]),m=t.coordinateTransformMode==="tf_crop_and_resize",g=t.extrapolationValue,$=c.type.value,y=_=>`
      ${h?"":`
      ${Jp(t.coordinateTransformMode,$)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${of(c,s)};
              ${ef(t.nearestMode,r,$)};
              ${sf(c,d,s,u,l.length,o.length,m)};
              `;case"linear":return`
              ${af(d,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${uf(c,d,s,m,g)}`;if(s.length===3||s.length===5)return`${df(c,d,s,m,g)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${lf(c,d,s,u,l,o,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${_.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(c,d)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${h?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${h}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:o},...ue(s,u)]})}},pf=e=>{const t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},w0=(e,t)=>{const r=[],n=[],i=[],a=pf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Yp(e.inputs,t,a,r,n,i),e.compute(cf(e.inputs[0],t,a,r,n,i),{inputs:[0]})},$0=e=>{const t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Te({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}}),ff,hf,b0,e3=Y({"web/lib/wasm/jsep/webgpu/ops/skip-layer-norm.ts"(){ce(),fe(),_e(),ff=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");const t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");const i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){const s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){const s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},hf=(e,t,r,n)=>{const i=t.simplified,a=e[0].dims,s=D.size(a),o=a,u=s,l=a.slice(-1)[0],d=n?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,h=n&&r>1,m=n&&r>2,g=r>3,$=64,y=Ne(l),_=[{type:12,data:u},{type:12,data:y},{type:12,data:l},{type:1,data:t.epsilon}],v=S=>{const I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],T=[V("x",e[0].dataType,e[0].dims,y),V("skip",e[1].dataType,e[1].dims,y),V("gamma",e[2].dataType,e[2].dims,y)];c&&T.push(V("beta",e[3].dataType,e[3].dims,y)),p&&T.push(V("bias",e[4].dataType,e[4].dims,y)),T.push(ie("output",e[0].dataType,o,y)),h&&T.push(ie("mean_output",1,d)),m&&T.push(ie("inv_std_output",1,d)),g&&T.push(ie("input_skip_bias_sum",e[0].dataType,o,y));const z=Le(e[0].dataType),O=Le(1,y);return`

      ${S.registerUniforms(I).declareVariables(...T)}
      var<workgroup> sum_shared : array<${O}, ${$}>;
      var<workgroup> sum_squared_shared : array<${O}, ${$}>;

      ${S.mainStart([$,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${$};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${$};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${$-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${p?"bias[offset1d + i]":z+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${g?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Nr(z,y,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${$};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${nr("sum",y)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${nr("square_sum",y)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${h?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${z}(mean)`}) *
            ${z}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},b=[{dims:o,dataType:e[0].dataType}];return r>1&&b.push({dims:d,dataType:1}),r>2&&b.push({dims:d,dataType:1}),r>3&&b.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${y};${h};${m};${g}`,inputDependencies:e.map((S,I)=>"type")},getShaderSource:v,getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:_})}},b0=(e,t)=>{ff(e.inputs);const n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(hf(e.inputs,t,e.outputCount,!1),{outputs:n})}}}),mf,sn,gf,es,_f,yf,v0,x0,t3=Y({"web/lib/wasm/jsep/webgpu/ops/slice.ts"(){ce(),fe(),qe(),_e(),mf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},sn=(e,t)=>{const r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},gf=(e,t)=>{if(e.length>1){const r=sn(e,1),n=sn(e,2);let i=sn(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Te({starts:r,ends:n,axes:i})}else return t},es=(e,t,r,n,i)=>{let a=e;return e<0&&(a+=r[n[t]]),i[t]<0?Math.max(0,Math.min(a,r[n[t]]-1)):Math.max(0,Math.min(a,r[n[t]]))},_f=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${ae("uniforms.input_shape","i",r.length)};
            let steps_i = ${ae("uniforms.steps","i",r.length)};
            let signs_i = ${ae("uniforms.signs","i",r.length)};
            let starts_i = ${ae("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,yf=(e,t)=>{const r=e[0].dims,n=D.size(r),i=t.axes.length>0?D.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()];let a=sn(e,4);a.forEach(y=>y!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));const s=t.starts.map((y,_)=>es(y,_,r,i,a)),o=t.ends.map((y,_)=>es(y,_,r,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let y=0;y<r.length;++y)i.includes(y)||(s.splice(y,0,0),o.splice(y,0,r[y]),a.splice(y,0,1));const u=a.map(y=>Math.sign(y));a.forEach((y,_,v)=>{if(y<0){const b=(o[_]-s[_])/y,S=s[_],I=S+b*a[_];s[_]=I,o[_]=S,v[_]=-y}});const l=r.slice(0);i.forEach((y,_)=>{l[y]=Math.ceil((o[y]-s[y])/a[y])});const d={dims:l,dataType:e[0].dataType},c=ie("output",e[0].dataType,l.length),p=V("input",e[0].dataType,e[0].dims.length),h=D.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],g=[{type:12,data:h},{type:12,data:s},{type:6,data:u},{type:12,data:a},...ue(e[0].dims,l)],$=y=>`
      ${y.registerUniforms(m).declareVariables(p,c)}
        ${_f(p,c,r)}
        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:g})}},v0=(e,t)=>{mf(e.inputs,t);const r=gf(e.inputs,t);e.compute(yf(e.inputs,r),{inputs:[0]})},x0=e=>{const t=e.starts,r=e.ends,n=e.axes;return Te({starts:t,ends:r,axes:n})}}}),wf,$f,S0,k0,r3=Y({"web/lib/wasm/jsep/webgpu/ops/softmax.ts"(){ce(),fe(),qe(),ar(),_e(),wf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},$f=(e,t)=>{const r=e.inputs[0],n=r.dims,i=D.size(n),a=n.length,s=D.normalizeAxis(t.axis,a),o=s<n.length-1;let u,l=[];o?(l=Array.from({length:a},(T,z)=>z),l[s]=a-1,l[a-1]=s,u=e.compute(it(r,l),{inputs:[r],outputs:[-1]})[0]):u=r;const d=u.dims,c=d[a-1],p=i/c,h=Ne(c),m=c/h;let g=64;p===1&&(g=256);const $=(T,z)=>z===4?`max(max(${T}.x, ${T}.y), max(${T}.z, ${T}.w))`:z===2?`max(${T}.x, ${T}.y)`:z===3?`max(max(${T}.x, ${T}.y), ${T}.z)`:T,y=V("x",u.dataType,u.dims,h),_=ie("result",u.dataType,u.dims,h),v=y.type.value,b=Le(u.dataType)==="f32"?`var threadMax = ${v}(-3.402823e+38f);`:`var threadMax = ${v}(-65504.0h);`,S=T=>`
      var<workgroup> rowMaxShared : ${v};
      var<workgroup> rowSumShared : ${v};
      var<workgroup> threadShared : array<${v}, ${g}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${v} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${v}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${T.registerUniform("packedCols","i32").declareVariables(y,_)}
      ${T.mainStart(g)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${g};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${v}(${$("threadShared[0]",h)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${v}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${v}(${nr("threadShared[0]",h)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${h};${g}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:S},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(it(I,l),{inputs:[I]})},S0=(e,t)=>{wf(e.inputs),$f(e,t)},k0=e=>Te({axis:e.axis})}}),ts,bf,vf,xf,I0,n3=Y({"web/lib/wasm/jsep/webgpu/ops/tile.ts"(){ce(),fe(),_e(),ts=e=>Array.from(e.getBigInt64Array(),Number),bf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ts(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},vf=(e,t)=>{const r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},xf=(e,t)=>{const r=e[0].dims,n=t??ts(e[1]),i=vf(r,n),a=D.size(i),s=e[0].dataType,o=V("input",s,r.length),u=ie("output",s,i.length),l=d=>`
      const inputShape = ${o.indices(...r)};
      ${d.registerUniform("output_size","u32").declareVariables(o,u)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ue(e[0].dims,i)]}),getShaderSource:l}},I0=e=>{bf(e.inputs),e.compute(xf(e.inputs),{inputs:[0]})}}}),Sf,kf,T0,i3=Y({"web/lib/wasm/jsep/webgpu/ops/where.ts"(){ce(),fe(),_e(),Sf=(e,t,r,n,i)=>{const a=ie("output_data",i,r.length,4),s=V("a_data",t[1].dataType,t[1].dims.length,4),o=V("b_data",t[2].dataType,t[2].dims.length,4),u=V("c_data",t[0].dataType,t[0].dims.length,4);let l;const d=(c,p,h)=>`select(${p}, ${c}, ${h})`;if(!n)l=a.setByOffset("global_idx",d(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{const c=(p,h,m="")=>{const g=`a_data[index_a${h}][component_a${h}]`,$=`b_data[index_b${h}][component_b${h}]`,y=`bool(c_data[index_c${h}] & (0xffu << (component_c${h} * 8)))`;return`
            let output_indices${h} = ${a.offsetToIndices(`global_idx * 4u + ${h}u`)};
            let offset_a${h} = ${s.broadcastedIndicesToOffset(`output_indices${h}`,a)};
            let offset_b${h} = ${o.broadcastedIndicesToOffset(`output_indices${h}`,a)};
            let offset_c${h} = ${u.broadcastedIndicesToOffset(`output_indices${h}`,a)};
            let index_a${h} = offset_a${h} / 4u;
            let index_b${h} = offset_b${h} / 4u;
            let index_c${h} = offset_c${h} / 4u;
            let component_a${h} = offset_a${h} % 4u;
            let component_b${h} = offset_b${h} % 4u;
            let component_c${h} = offset_c${h} % 4u;
            ${p}[${h}] = ${m}(${d(g,$,y)});
          `};i===9?l=`
            var data = vec4<u32>(0);
            ${c("data",0,"u32")}
            ${c("data",1,"u32")}
            ${c("data",2,"u32")}
            ${c("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${c("output_data[global_idx]",0)}
            ${c("output_data[global_idx]",1)}
            ${c("output_data[global_idx]",2)}
            ${c("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},kf=e=>{const t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,a=!(D.areEqual(t,r)&&D.areEqual(r,n));let s=t,o=D.size(t);if(a){const l=Wr.calcShape(Wr.calcShape(t,r,!1),n,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=D.size(s)}const u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Sf(l,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ue(n,t,r,s)]})}},T0=e=>{e.compute(kf(e.inputs))}}}),E0,a3=Y({"web/lib/wasm/jsep/webgpu/op-resolve-rules.ts"(){wx(),eu(),$x(),bx(),vx(),xx(),Sx(),zx(),Ox(),Ax(),Bx(),Rx(),Mx(),Dx(),Px(),Nx(),Ux(),qx(),Vx(),Wx(),Lx(),Gx(),Fx(),jx(),Hx(),Hw(),Kx(),Zx(),Qx(),Xx(),Yx(),Jo(),Jx(),Yw(),e3(),t3(),r3(),Qw(),n3(),ar(),tu(),i3(),E0=new Map([["Abs",[by]],["Acos",[vy]],["Acosh",[xy]],["Add",[nw]],["ArgMax",[_y,ho]],["ArgMin",[gy,ho]],["Asin",[Sy]],["Asinh",[ky]],["Atan",[Iy]],["Atanh",[Ty]],["Attention",[yy]],["AveragePool",[o0,s0]],["BatchNormalization",[wy]],["BiasAdd",[$y]],["BiasSplitGelu",[rw]],["Cast",[zy,Ey]],["Ceil",[Oy]],["Clip",[Cy]],["Concat",[fw,hw]],["Conv",[$o,wo]],["ConvTranspose",[Sw,xw]],["Cos",[Ay]],["Cosh",[By]],["CumSum",[kw,Iw]],["DepthToSpace",[Tw,Ew]],["DequantizeLinear",[h0,m0]],["Div",[iw]],["Einsum",[zw,Cw]],["Elu",[Ry,vn]],["Equal",[aw]],["Erf",[My]],["Exp",[Dy]],["Expand",[Ow]],["FastGelu",[Aw]],["Floor",[Py]],["FusedConv",[$o,wo]],["Gather",[Rw,Bw]],["GatherElements",[qw,Uw]],["GatherBlockQuantized",[Pw,Nw]],["GatherND",[Mw,Dw]],["Gelu",[Ny]],["Gemm",[Ww,Vw]],["GlobalAveragePool",[l0,u0]],["GlobalMaxPool",[f0,p0]],["Greater",[lw]],["GreaterOrEqual",[cw]],["GridSample",[Lw,Gw]],["GroupQueryAttention",[Jw]],["HardSigmoid",[jy,Fy]],["InstanceNormalization",[e0]],["LayerNormalization",[t0]],["LeakyRelu",[Uy,vn]],["Less",[dw]],["LessOrEqual",[pw]],["Log",[ew]],["MatMul",[r0]],["MatMulNBits",[n0,i0]],["MaxPool",[d0,c0]],["Mul",[sw]],["MultiHeadAttention",[jw,Fw]],["Neg",[Vy]],["Not",[qy]],["Pad",[a0]],["Pow",[ow]],["QuickGelu",[tw,vn]],["Range",[g0]],["Reciprocal",[Wy]],["ReduceMin",[cy]],["ReduceMean",[sy]],["ReduceMax",[dy]],["ReduceSum",[fy]],["ReduceProd",[py]],["ReduceL1",[oy]],["ReduceL2",[uy]],["ReduceLogSum",[my]],["ReduceLogSumExp",[ly]],["ReduceSumSquare",[hy]],["Relu",[Ly]],["Resize",[w0,$0]],["RotaryEmbedding",[Xw]],["ScatterND",[y0,_0]],["Sigmoid",[Gy]],["Sin",[Hy]],["Sinh",[Ky]],["Slice",[v0,x0]],["SkipLayerNormalization",[b0]],["Split",[Kw,Zw]],["Sqrt",[Zy]],["Softmax",[S0,k0]],["Sub",[uw]],["Tan",[Qy]],["Tanh",[Xy]],["ThresholdedRelu",[Jy,vn]],["Tile",[I0]],["Transpose",[K_,Z_]],["Where",[T0]]])}}),z0,s3=Y({"web/lib/wasm/jsep/webgpu/program-manager.ts"(){kt(),Lt(),_e(),z0=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){Rt(e.programInfo.name);const a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);const o=[];for(const l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(const l of r)o.push({binding:o.length,resource:{buffer:l.buffer}});i&&o.push({binding:o.length,resource:i});const u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){const l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),xt(e.programInfo.name)}dispose(){}build(e,t){Rt(e.name);const r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});const a=H_(t,this.backend.device.limits),s=e.getShaderSource(a),o=`${n.join(`
`)}
${a.additionalImplementations}
${s}`,u=r.createShaderModule({code:o,label:e.name});be("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);const l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return xt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){const t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];const a=t*r*n;let s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}}),C0={};Bn(C0,{WebGpuBackend:()=>O0});var If,Tf,rs,O0,o3=Y({"web/lib/wasm/jsep/backend-webgpu.ts"(){kt(),ce(),Lt(),W_(),_x(),a3(),s3(),If=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);const r=[];for(let n=0;n<e.length;++n){const i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{const a=e[n].dims.length;r.push(`${i};${a}`);break}case"dims":{const a=e[n].dims.join(",");r.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Tf=(e,t,r)=>{let n=e.name;return e.shaderCache?.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${If(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,n},rs=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},O0=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;const n=e.webgpu?.device;if(n&&typeof n.createBuffer=="function"&&n.queue)this.device=n,this.adapterInfo=new rs(t.info||await t.requestAdapterInfo());else{const i=[],a=t.limits.maxStorageBuffersPerShaderStage??8,s=Math.min(10,a),o={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ,maxStorageBuffersPerShaderStage:s},requiredFeatures:i},u=l=>t.features.has(l)&&i.push(l)&&!0;u("chromium-experimental-timestamp-query-inside-passes")||u("timestamp-query"),u("shader-f16"),u("subgroups"),this.device=await t.requestDevice(o),this.adapterInfo=new rs(t.info||await t.requestAdapterInfo())}this.gpuDataManager=F_(this),this.programManager=new z0(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Zo(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){const e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Rt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{const t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){const i=r[n],a=i.kernelId,s=this.kernels.get(a),o=s.kernelType,u=s.kernelName,l=i.programName,d=i.inputTensorViews,c=i.outputTensorViews,p=t[n*2],h=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=p);const m=Number(p-this.queryTimeBase),g=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(m)||!Number.isSafeInteger(g))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map($=>({dims:$.dims,dataType:Vt($.dataType)})),outputsMetadata:c.map($=>({dims:$.dims,dataType:Vt($.dataType)})),kernelId:a,kernelType:o,kernelName:u,programName:l,startTime:m,endTime:g});else{let $="";d.forEach((_,v)=>{$+=`input[${v}]: [${_.dims}] | ${Vt(_.dataType)}, `});let y="";c.forEach((_,v)=>{y+=`output[${v}]: [${_.dims}] | ${Vt(_.dataType)}, `}),console.log(`[profiling] kernel "${a}|${o}|${u}|${l}" ${$}${y}execution time: ${g-m} ns`)}bi("GPU",`${l}::${p}::${h}`)}e.unmap(),this.pendingQueries.delete(e)}),xt()}run(e,t,r,n,i,a){Rt(e.name);const s=[];for(let _=0;_<t.length;++_){const v=t[_].data;if(v===0)continue;const b=this.gpuDataManager.get(v);if(!b)throw new Error(`no GPU data for input: ${v}`);s.push(b)}const{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=r.length===0?o.map((_,v)=>v):r;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);const c=[],p=[];for(let _=0;_<o.length;++_){if(!Number.isInteger(d[_])||d[_]<-3||d[_]>=a)throw new Error(`Invalid output index: ${d[_]}`);if(d[_]===-3)continue;const v=d[_]===-1,b=d[_]===-2,S=v||b?i(o[_].dataType,o[_].dims):n(d[_],o[_].dataType,o[_].dims);if(c.push(S),S.data===0)continue;const I=this.gpuDataManager.get(S.data);if(!I)throw new Error(`no GPU data for output: ${S.data}`);if(v&&this.temporaryData.push(I),b){let T=this.kernelPersistentData.get(this.currentKernelId);T||(T=[],this.kernelPersistentData.set(this.currentKernelId,T)),T.push(I)}p.push(I)}if(s.length!==t.length||p.length!==c.length){if(p.length===0)return xt(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let h;if(l){let _=0;const v=[];l.forEach(T=>{const z=typeof T.data=="number"?[T.data]:T.data;if(z.length===0)return;const O=T.type===10?2:4;let R,G;T.type===10?(G=z.length>4?16:z.length>2?8:z.length*O,R=z.length>4?16:O*z.length):(G=z.length<=2?z.length*O:16,R=16),_=Math.ceil(_/G)*G,v.push(_);const L=T.type===10?8:4;_+=z.length>4?Math.ceil(z.length/L)*R:z.length*O});const b=16;_=Math.ceil(_/b)*b;const S=new ArrayBuffer(_);l.forEach((T,z)=>{const O=v[z],R=typeof T.data=="number"?[T.data]:T.data;if(T.type===6)new Int32Array(S,O,R.length).set(R);else if(T.type===12)new Uint32Array(S,O,R.length).set(R);else if(T.type===10)new Uint16Array(S,O,R.length).set(R);else if(T.type===1)new Float32Array(S,O,R.length).set(R);else throw new Error(`Unsupported uniform type: ${Vt(T.type)}`)});const I=this.gpuDataManager.create(_,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,S,0,_),this.gpuDataManager.release(I.id),h={offset:0,size:_,buffer:I.buffer}}const m=this.programManager.normalizeDispatchGroupSize(u),g=m[1]===1&&m[2]===1,$=Tf(e,t,g);let y=this.programManager.getArtifact($);if(y||(y=this.programManager.build(e,m),this.programManager.setArtifact($,y),be("info",()=>`[artifact] key: ${$}, programName: ${e.name}`)),l&&y.uniformVariablesInfo){if(l.length!==y.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${y.uniformVariablesInfo.length}, got ${l.length} in program "${y.programInfo.name}".`);for(let _=0;_<l.length;_++){const v=l[_],b=v.type,S=typeof v.data=="number"?1:v.data.length,[I,T]=y.uniformVariablesInfo[_];if(b!==I||S!==T)throw new Error(`Uniform variable ${_} mismatch: expect type ${I} with size ${T}, got type ${b} with size ${S} in program "${y.programInfo.name}".`)}}if(be("info",()=>`[ProgramManager] run "${e.name}" (key=${$}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){const _={kernelId:this.currentKernelId,programName:y.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(_),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(_)}return this.programManager.run(y,s,p,m,h),xt(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){const i=E0.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);const a={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,a)}releaseKernel(e){const t=this.kernelPersistentData.get(e);if(t){for(const r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){const n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);const i=n.kernelType,a=n.kernelName,s=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),be("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);const u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&r.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(const l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));const a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(r,n,a);return i.set(t,[s,r]),s}unregisterBuffers(e){const t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){const t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{const n=await co(this,e,t);return Qo(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){be("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){be("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){be("info","replay"),this.sessionStatus="replaying";const e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){const i=this.getComputePassEncoder(),a=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}}),A0={};Bn(A0,{init:()=>B0});var ti,Ef,B0,u3=Y({"web/lib/wasm/jsep/init.ts"(){ce(),Lt(),fe(),gx(),ti=class R0{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");const t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");const t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");const t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");const t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new R0(this.module,this.dataType,this.data,t)}},Ef=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;const n=e.PTR_SIZE;let i=r/e.PTR_SIZE;const a=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,a));const s=Number(e.getValue(n*i++,a));this.outputCount=Number(e.getValue(n*i++,a)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,a));const o=[];for(let u=0;u<s;u++){const l=Number(e.getValue(n*i++,a)),d=Number(e.getValue(n*i++,"*")),c=Number(e.getValue(n*i++,a)),p=[];for(let h=0;h<c;h++)p.push(Number(e.getValue(n*i++,a)));o.push(new ti(e,l,d,p))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){const r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,n=t?.outputs??[],i=(s,o,u)=>new ti(this.module,o,this.output(s,u),u),a=(s,o)=>{const u=wr(s,o);if(!u)throw new Error(`Unsupported data type: ${s}`);const l=u>0?this.backend.gpuDataManager.create(u).id:0;return new ti(this.module,s,l,o)};return this.backend.run(e,r,n,i,a,this.outputCount)}output(e,t){const r=this.module.stackSave();try{const n=this.module.PTR_SIZE,i=n===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*n);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+n*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},B0=async(e,t,r,n)=>{const i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){const a=(o3(),Ni(C0)).WebGpuBackend,s=new a;await s.initialize(r,n),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,d=!1)=>{if(d)be("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{be("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);const c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),c)}},async(o,u,l)=>{be("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,d)=>{be("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);const c=new Ef(t,s,Number(u));return s.computeKernel(Number(o),c,d)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{const a=new G_(r);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,l,d)=>a.ensureTensor(s,o,u,l,d),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o)])}}}}),zf,ou,uu,Yt,Cf,ns,zi,lu,du,is,cu,pu,fu,M0=Y({"web/lib/wasm/wasm-core-impl.ts"(){fx(),hx(),ce(),zr(),jo(),N_(),zf=(e,t)=>{Ae()._OrtInit(e,t)!==0&&ze("Can't initialize onnxruntime.")},ou=async e=>{zf(e.wasm.numThreads,xi(e.logLevel))},uu=async(e,t)=>{Ae().asyncInit?.();{const r=(u3(),Ni(A0)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let n=e.webgpu.adapter;if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{const i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);const a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Ae(),e,n)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Ae(),e)}}},Yt=new Map,Cf=e=>{const t=Ae(),r=t.stackSave();try{const n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&ze("Can't get session input/output count.");const s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},ns=(e,t)=>{const r=Ae(),n=r.stackSave();let i=0;try{const a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&ze("Can't get session input/output metadata.");const u=Number(r.getValue(s,"*"));i=Number(r.getValue(s+a,"*"));const l=r.HEAP32[i/4];if(l===0)return[u,0];const d=r.HEAPU32[i/4+1],c=[];for(let p=0;p<d;p++){const h=Number(r.getValue(i+8+p*a,"*"));c.push(h!==0?r.UTF8ToString(h):Number(r.getValue(i+8+(p+d)*a,"*")))}return[u,l,c]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},zi=e=>{const t=Ae(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},lu=async(e,t)=>{let r,n;const i=Ae();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=zi(e);let a=0,s=0,o=0,u=[];const l=[],d=[];try{if([s,u]=await P_(t),t?.externalData&&i.mountExternalData){const b=[];for(const S of t.externalData){const I=typeof S=="string"?S:S.path;b.push(Si(typeof S=="string"?S:S.data).then(T=>{i.mountExternalData(I,T)}))}await Promise.all(b)}for(const b of t?.executionProviders??[])if((typeof b=="string"?b:b.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof b!="string"){const I=b,T=I?.context,z=I?.gpuDevice,O=I?.deviceType,R=I?.powerPreference;T?i.currentContext=T:z?i.currentContext=await i.webnnCreateMLContext(z):i.currentContext=await i.webnnCreateMLContext({deviceType:O,powerPreference:R})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(r,n,s),i.webgpuOnCreateSession?.(a),a===0&&ze("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);const[c,p]=Cf(a),h=!!t?.enableGraphCapture,m=[],g=[],$=[],y=[],_=[];for(let b=0;b<c;b++){const[S,I,T]=ns(a,b);S===0&&ze("Can't get an input name."),l.push(S);const z=i.UTF8ToString(S);m.push(z),$.push(I===0?{name:z,isTensor:!1}:{name:z,isTensor:!0,type:Vt(I),shape:T})}for(let b=0;b<p;b++){const[S,I,T]=ns(a,b+c);S===0&&ze("Can't get an output name."),d.push(S);const z=i.UTF8ToString(S);g.push(z),y.push(I===0?{name:z,isTensor:!1}:{name:z,isTensor:!0,type:Vt(I),shape:T});{if(h&&t?.preferredOutputLocation===void 0){_.push("gpu-buffer");continue}const O=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[z]??"cpu",R=i.webnnIsGraphOutput;if(O==="cpu"&&R&&R(a,z)){_.push("ml-tensor-cpu-output");continue}if(O!=="cpu"&&O!=="cpu-pinned"&&O!=="gpu-buffer"&&O!=="ml-tensor")throw new Error(`Not supported preferred output location: ${O}.`);if(h&&O!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${O}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(O)}}let v=null;return _.some(b=>b==="gpu-buffer"||b==="ml-tensor"||b==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&ze("Can't create IO binding."),v={handle:o,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(b=>b==="ml-tensor-cpu-output"?"ml-tensor":b).map(b=>uo(b))}),Yt.set(a,[a,l,d,v,h,!1]),[a,m,g,$,y]}catch(c){throw l.forEach(p=>i._OrtFree(p)),d.forEach(p=>i._OrtFree(p)),o!==0&&i._OrtReleaseBinding(o)!==0&&ze("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&ze("Can't release session."),c}finally{i._free(r),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&ze("Can't release session options."),u.forEach(c=>i._free(c)),i.unmountExternalData?.()}},du=e=>{const t=Ae(),r=Yt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);const[n,i,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&ze("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ze("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(u=>t._OrtFree(u)),a.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(n)!==0&&ze("Can't release session."),Yt.delete(e)},is=async(e,t,r,n,i,a,s=!1)=>{if(!e){t.push(0);return}const o=Ae(),u=o.PTR_SIZE,l=e[0],d=e[1],c=e[3];let p=c,h,m;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){const y=e[2].gpuBuffer;m=wr(yr(l),d);{const _=o.jsepRegisterBuffer;if(!_)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');h=_(n,a,y,m)}}else if(c==="ml-tensor"){const y=e[2].mlTensor;m=wr(yr(l),d);const _=o.webnnRegisterMLTensor;if(!_)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');h=_(n,y,yr(l),d)}else{const y=e[2];if(Array.isArray(y)){m=u*y.length,h=o._malloc(m),r.push(h);for(let _=0;_<y.length;_++){if(typeof y[_]!="string")throw new TypeError(`tensor data at index ${_} is not a string`);o.setValue(h+_*u,bt(y[_],r),"*")}}else{const _=o.webnnIsGraphInput,v=o.webnnIsGraphOutput;if(l!=="string"&&_&&v){const b=o.UTF8ToString(i);if(_(n,b)||v(n,b)){const S=yr(l);m=wr(S,d),p="ml-tensor";const I=o.webnnCreateTemporaryTensor,T=o.webnnUploadTensor;if(!I||!T)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');const z=await I(n,S,d);T(z,new Uint8Array(y.buffer,y.byteOffset,y.byteLength)),h=z}else m=y.byteLength,h=o._malloc(m),r.push(h),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,m),h)}else m=y.byteLength,h=o._malloc(m),r.push(h),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,m),h)}}const g=o.stackSave(),$=o.stackAlloc(4*d.length);try{d.forEach((_,v)=>o.setValue($+v*u,_,u===4?"i32":"i64"));const y=o._OrtCreateTensor(yr(l),h,m,$,d.length,uo(p));y===0&&ze(`Can't create tensor for input/output. session=${n}, index=${a}.`),t.push(y)}finally{o.stackRestore(g)}},cu=async(e,t,r,n,i,a)=>{const s=Ae(),o=s.PTR_SIZE,u=Yt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);const l=u[0],d=u[1],c=u[2],p=u[3],h=u[4],m=u[5],g=t.length,$=n.length;let y=0,_=[];const v=[],b=[],S=[],I=s.stackSave(),T=s.stackAlloc(g*o),z=s.stackAlloc(g*o),O=s.stackAlloc($*o),R=s.stackAlloc($*o);try{[y,_]=D_(a);for(let B=0;B<g;B++)await is(r[B],v,S,e,d[t[B]],t[B],h);for(let B=0;B<$;B++)await is(i[B],b,S,e,c[n[B]],g+n[B],h);for(let B=0;B<g;B++)s.setValue(T+B*o,v[B],"*"),s.setValue(z+B*o,d[t[B]],"*");for(let B=0;B<$;B++)s.setValue(O+B*o,b[B],"*"),s.setValue(R+B*o,c[n[B]],"*");if(p&&!m){const{handle:B,outputPreferredLocations:te,outputPreferredLocationsEncoded:F}=p;if(d.length!==g)throw new Error(`input count from feeds (${g}) is expected to be always equal to model's input count (${d.length}).`);for(let M=0;M<g;M++){const J=t[M];await s._OrtBindInput(B,d[J],v[M])!==0&&ze(`Can't bind input[${M}] for session=${e}.`)}for(let M=0;M<$;M++){const J=n[M];i[M]?.[3]?s._OrtBindOutput(B,c[J],b[M],0)!==0&&ze(`Can't bind pre-allocated output[${M}] for session=${e}.`):s._OrtBindOutput(B,c[J],0,F[J])!==0&&ze(`Can't bind output[${M}] to ${te[M]} for session=${e}.`)}Yt.set(e,[l,d,c,p,h,!0])}s.jsepOnRunStart?.(l),s.webnnOnRunStart?.(l);let G;p?G=await s._OrtRunWithBinding(l,p.handle,$,O,y):G=await s._OrtRun(l,z,T,g,R,$,O,y),G!==0&&ze("failed to call OrtRun().");const L=[],Q=[];for(let B=0;B<$;B++){const te=Number(s.getValue(O+B*o,"*"));if(te===b[B]){L.push(i[B]);continue}const F=s.stackSave(),M=s.stackAlloc(4*o);let J=!1,W,re=0;try{s._OrtGetTensorData(te,M,M+o,M+2*o,M+3*o)!==0&&ze(`Can't access output tensor data on index ${B}.`);const j=o===4?"i32":"i64",K=Number(s.getValue(M,j));re=s.getValue(M+o,"*");const C=s.getValue(M+o*2,"*"),H=Number(s.getValue(M+o*3,j)),me=[];for(let ge=0;ge<H;ge++)me.push(Number(s.getValue(C+ge*o,j)));s._OrtFree(C)!==0&&ze("Can't free memory for tensor dims.");const De=me.reduce((ge,$e)=>ge*$e,1);W=Vt(K);const Ie=p?.outputPreferredLocations[n[B]];if(W==="string"){if(Ie==="gpu-buffer"||Ie==="ml-tensor")throw new Error("String tensor is not supported on GPU.");const ge=[];for(let $e=0;$e<De;$e++){const Je=s.getValue(re+$e*o,"*"),Dt=s.getValue(re+($e+1)*o,"*"),or=$e===De-1?void 0:Dt-Je;ge.push(s.UTF8ToString(Je,or))}L.push([W,me,ge,"cpu"])}else if(Ie==="gpu-buffer"&&De>0){const ge=s.jsepGetBuffer;if(!ge)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');const $e=ge(re),Je=wr(K,De);if(Je===void 0||!Ho(W))throw new Error(`Unsupported data type: ${W}`);J=!0,L.push([W,me,{gpuBuffer:$e,download:s.jsepCreateDownloader($e,Je,W),dispose:()=>{s._OrtReleaseTensor(te)!==0&&ze("Can't release tensor.")}},"gpu-buffer"])}else if(Ie==="ml-tensor"&&De>0){const ge=s.webnnEnsureTensor,$e=s.webnnIsGraphInputOutputTypeSupported;if(!ge||!$e)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(wr(K,De)===void 0||!Ko(W))throw new Error(`Unsupported data type: ${W}`);if(!$e(e,W,!1))throw new Error(`preferredLocation "ml-tensor" for ${W} output is not supported by current WebNN Context.`);const Dt=await ge(e,re,K,me,!1);J=!0,L.push([W,me,{mlTensor:Dt,download:s.webnnCreateMLTensorDownloader(re,W),dispose:()=>{s.webnnReleaseTensorId(re),s._OrtReleaseTensor(te)}},"ml-tensor"])}else if(Ie==="ml-tensor-cpu-output"&&De>0){const ge=s.webnnCreateMLTensorDownloader(re,W)(),$e=L.length;J=!0,Q.push((async()=>{const Je=[$e,await ge];return s.webnnReleaseTensorId(re),s._OrtReleaseTensor(te),Je})()),L.push([W,me,[],"cpu"])}else{const ge=Ui(W),$e=new ge(De);new Uint8Array($e.buffer,$e.byteOffset,$e.byteLength).set(s.HEAPU8.subarray(re,re+$e.byteLength)),L.push([W,me,$e,"cpu"])}}finally{s.stackRestore(F),W==="string"&&re&&s._free(re),J||s._OrtReleaseTensor(te)}}p&&!h&&(s._OrtClearBoundOutputs(p.handle)!==0&&ze("Can't clear bound outputs."),Yt.set(e,[l,d,c,p,h,!1]));for(const[B,te]of await Promise.all(Q))L[B][2]=te;return L}finally{s.webnnOnRunEnd?.(l),s.stackRestore(I),v.forEach(G=>s._OrtReleaseTensor(G)),b.forEach(G=>s._OrtReleaseTensor(G)),S.forEach(G=>s._free(G)),y!==0&&s._OrtReleaseRunOptions(y),_.forEach(G=>s._free(G))}},pu=e=>{const t=Ae(),r=Yt.get(e);if(!r)throw new Error("invalid session id");const n=r[0],i=t._OrtEndProfiling(n);i===0&&ze("Can't get an profile file name."),t._OrtFree(i)},fu=e=>{const t=[];for(const r of e){const n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}}),Jt,ot,Mr,on,un,ri,as,ni,cr,pr,Of,D0,P0,N0,U0,q0,V0,W0,L0=Y({"web/lib/wasm/proxy-wrapper.ts"(){kt(),M0(),zr(),Go(),Jt=()=>!!Re.wasm.proxy&&typeof document<"u",Mr=!1,on=!1,un=!1,ni=new Map,cr=(e,t)=>{const r=ni.get(e);r?r.push(t):ni.set(e,[t])},pr=()=>{if(Mr||!on||un||!ot)throw new Error("worker not ready")},Of=e=>{switch(e.data.type){case"init-wasm":Mr=!1,e.data.err?(un=!0,as[1](e.data.err)):(on=!0,as[0]()),ri&&(URL.revokeObjectURL(ri),ri=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{const t=ni.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},D0=async()=>{if(!on){if(Mr)throw new Error("multiple calls to 'initWasm()' detected.");if(un)throw new Error("previous call to 'initWasm()' failed.");if(Mr=!0,Jt())return new Promise((e,t)=>{ot?.terminate(),R_().then(([r,n])=>{try{ot=n,ot.onerror=a=>t(a),ot.onmessage=Of,as=[e,t];const i={type:"init-wasm",in:Re};if(!i.in.wasm.wasmPaths&&r){const a=Lo();a&&(i.in.wasm.wasmPaths=a)}ot.postMessage(i),ri=r}catch(i){t(i)}},t)});try{await Fo(Re.wasm),await ou(Re),on=!0}catch(e){throw un=!0,e}finally{Mr=!1}}},P0=async e=>{if(Jt())return pr(),new Promise((t,r)=>{cr("init-ep",[t,r]);const n={type:"init-ep",in:{epName:e,env:Re}};ot.postMessage(n)});await uu(Re,e)},N0=async e=>Jt()?(pr(),new Promise((t,r)=>{cr("copy-from",[t,r]);const n={type:"copy-from",in:{buffer:e}};ot.postMessage(n,[e.buffer])})):zi(e),U0=async(e,t)=>{if(Jt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return pr(),new Promise((r,n)=>{cr("create",[r,n]);const i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),ot.postMessage(i,a)})}else return lu(e,t)},q0=async e=>{if(Jt())return pr(),new Promise((t,r)=>{cr("release",[t,r]);const n={type:"release",in:e};ot.postMessage(n)});du(e)},V0=async(e,t,r,n,i,a)=>{if(Jt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return pr(),new Promise((s,o)=>{cr("run",[s,o]);const u=r,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:a}};ot.postMessage(l,fu(u))})}else return cu(e,t,r,n,i,a)},W0=async e=>{if(Jt())return pr(),new Promise((t,r)=>{cr("end-profiling",[t,r]);const n={type:"end-profiling",in:e};ot.postMessage(n)});pu(e)}}}),ss,Af,G0,l3=Y({"web/lib/wasm/session-handler-inference.ts"(){kt(),L0(),ce(),Wo(),N_(),ss=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Af=e=>{switch(e[3]){case"cpu":return new At(e[0],e[2],e[1]);case"gpu-buffer":{const t=e[0];if(!Ho(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);const{gpuBuffer:r,download:n,dispose:i}=e[2];return At.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{const t=e[0];if(!Ko(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);const{mlTensor:r,download:n,dispose:i}=e[2];return At.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},G0=class{async fetchModelAndCopyToWasmMemory(e){return N0(await Si(e))}async loadModel(e,t){Rt();let r;typeof e=="string"?Vr?r=await Si(e):r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await U0(r,t),xt()}async dispose(){return q0(this.sessionId)}async run(e,t,r){Rt();const n=[],i=[];Object.entries(e).forEach(c=>{const p=c[0],h=c[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);n.push(h),i.push(m)});const a=[],s=[];Object.entries(t).forEach(c=>{const p=c[0],h=c[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);a.push(h),s.push(m)});const o=n.map((c,p)=>ss(c,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((c,p)=>c?ss(c,()=>`output "${this.outputNames[s[p]]}"`):null),l=await V0(this.sessionId,i,o,s,u,r),d={};for(let c=0;c<l.length;c++)d[this.outputNames[s[c]]]=a[c]??Af(l[c]);return xt(),d}startProfiling(){}endProfiling(){W0(this.sessionId)}}}}),F0={};Bn(F0,{OnnxruntimeWebAssemblyBackend:()=>xo,initializeFlags:()=>vo,wasmBackend:()=>j0});var vo,xo,j0,d3=Y({"web/lib/backend-wasm.ts"(){kt(),L0(),l3(),vo=()=>{(typeof Re.wasm.initTimeout!="number"||Re.wasm.initTimeout<0)&&(Re.wasm.initTimeout=0);const e=Re.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Re.wasm.simd=!1),typeof Re.wasm.proxy!="boolean"&&(Re.wasm.proxy=!1),typeof Re.wasm.trace!="boolean"&&(Re.wasm.trace=!1),typeof Re.wasm.numThreads!="number"||!Number.isInteger(Re.wasm.numThreads)||Re.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Re.wasm.numThreads=1;else{const t=typeof navigator>"u"?oo("node:os").cpus().length:navigator.hardwareConcurrency;Re.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},xo=class{async init(e){vo(),await D0(),await P0(e)}async createInferenceSessionHandler(e,t){const r=new G0;return await r.loadModel(e,t),r}},j0=new xo}});kt();kt();kt();var c3="1.22.0",AS=O_;{const e=(d3(),Ni(F0)).wasmBackend;Pr("webgpu",e,5),Pr("webnn",e,5),Pr("cpu",e,10),Pr("wasm",e,10)}Object.defineProperty(Re.versions,"web",{value:c3,enumerable:!0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var hu=Object.defineProperty,p3=Object.getOwnPropertyDescriptor,f3=Object.getOwnPropertyNames,h3=Object.prototype.hasOwnProperty,m3=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),X=(e,t)=>()=>(e&&(t=e(e=0)),t),jr=(e,t)=>{for(var r in t)hu(e,r,{get:t[r],enumerable:!0})},g3=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of f3(t))!h3.call(e,i)&&i!==r&&hu(e,i,{get:()=>t[i],enumerable:!(n=p3(t,i))||n.enumerable});return e},On=e=>g3(hu({},"__esModule",{value:!0}),e),ln,er,Ur,Bf,H0,K0=X(()=>{ln=new Map,er=[],Ur=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=ln.get(e);if(n===void 0)ln.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=er.indexOf(e);i!==-1&&er.splice(i,1);for(let a=0;a<er.length;a++)if(ln.get(er[a]).priority<=r){er.splice(a,0,e);return}er.push(e)}return}throw new TypeError("not a valid backend")},Bf=async e=>{let t=ln.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},H0=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?er:r,i,a=[],s=new Set;for(let u of n){let l=await Bf(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),_3=X(()=>{K0()}),Z0,y3=X(()=>{Z0="1.22.0"}),os,dt,Q0=X(()=>{y3(),os="warning",dt={wasm:{},webgl:{},webgpu:{},versions:{common:Z0},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);os=e}},get logLevel(){return os}},Object.defineProperty(dt,"logLevel",{enumerable:!0})}),Me,w3=X(()=>{Q0(),Me=dt}),X0,Y0,$3=X(()=>{X0=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",o=t?.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let d=a*i,c=0,p=d,h=d*2,m=-1;s==="RGBA"?(c=0,p=d,h=d*2,m=d*3):s==="RGB"?(c=0,p=d,h=d*2):s==="RBG"&&(c=0,h=d,p=d*2);for(let g=0;g<a;g++)for(let $=0;$<i;$++){let y=(e.data[c++]-l[0])*u[0],_=(e.data[p++]-l[1])*u[1],v=(e.data[h++]-l[2])*u[2],b=m===-1?255:(e.data[m++]-l[3])*u[3];n.fillStyle="rgba("+y+","+_+","+v+","+b+")",n.fillRect($,g,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Y0=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,h=0,m=1,g=2,$=3,y=0,_=c,v=c*2,b=-1;o==="RGBA"?(y=0,_=c,v=c*2,b=c*3):o==="RGB"?(y=0,_=c,v=c*2):o==="RBG"&&(y=0,v=c,_=c*2),n=r.createImageData(i,a);for(let S=0;S<a*i;h+=p,m+=p,g+=p,$+=p,S++)n.data[h]=(e.data[y++]-d[0])*l[0],n.data[m]=(e.data[_++]-d[1])*l[1],n.data[g]=(e.data[v++]-d[2])*l[2],n.data[$]=b===-1?255:(e.data[b++]-d[3])*l[3]}else throw new Error("Can not access image data");return n}}),ii,J0,e$,t$,r$,n$,b3=X(()=>{mu(),ii=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=r*n,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,p=0,h=1,m=2,g=3,$=0,y=l,_=l*2,v=-1;o==="RGB"&&(c=3,p=0,h=1,m=2,g=-1),u==="RGBA"?v=l*3:u==="RBG"?($=0,_=l,y=l*2):u==="BGR"&&(_=0,y=l,$=l*2);for(let b=0;b<l;b++,p+=c,m+=c,h+=c,g+=c)d[$++]=(e[p]+s[0])/a[0],d[y++]=(e[h]+s[1])/a[1],d[_++]=(e[m]+s[2])/a[2],v!==-1&&g!==-1&&(d[v++]=(e[g]+s[3])/a[3]);return u==="RGBA"?new nt("float32",d,[1,4,r,n]):new nt("float32",d,[1,3,r,n])},J0=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(r){let d=u();d.width=e.width,d.height=e.height;let c=l(d);if(c!=null){let p=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=p,o.width=h}else o.tensorFormat="RGBA",o.height=p,o.width=h;c.drawImage(e,0,0),s=c.getImageData(0,0,h,p).data}else throw new Error("Can not access image data")}else if(n){let d,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,c=t.resizedWidth):(d=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=d,o.width=c,t!==void 0){let p=u();p.width=c,p.height=d;let h=l(p);if(h!=null)h.putImageData(e,0,0),s=h.getImageData(0,0,c,d).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let c=l(d);if(c!=null){let p=e.height,h=e.width;return c.drawImage(e,0,0,h,p),s=c.getImageData(0,0,h,p).data,o.height=p,o.width=h,ii(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((d,c)=>{let p=u(),h=l(p);if(!e||!h)return c();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,h.drawImage(m,0,0,p.width,p.height);let g=h.getImageData(0,0,p.width,p.height);o.height=p.height,o.width=p.width,d(ii(g.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return ii(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},e$=(e,t)=>{let{width:r,height:n,download:i,dispose:a}=t,s=[1,n,r,4];return new nt({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},t$=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:a}=t;return new nt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:a})},r$=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:a}=t;return new nt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:a})},n$=(e,t,r)=>new nt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),$r,Sn,us,i$,v3=X(()=>{$r=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Sn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),us=!1,i$=()=>{if(!us){us=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&($r.set("int64",BigInt64Array),Sn.set(BigInt64Array,"int64")),t&&($r.set("uint64",BigUint64Array),Sn.set(BigUint64Array,"uint64")),n?($r.set("float16",r),Sn.set(r,"float16")):$r.set("float16",Uint16Array)}}}),a$,s$,x3=X(()=>{mu(),a$=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},s$=(e,t)=>{switch(e.location){case"cpu":return new nt(e.type,e.data,t);case"cpu-pinned":return new nt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new nt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new nt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new nt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),nt,mu=X(()=>{$3(),b3(),v3(),x3(),nt=class{constructor(e,t,r){i$();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=$r.get(n);if(!s)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=$r.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",s=e;else if(u==="boolean")n="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",s=Uint8Array.from(e);else{let u=Sn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=a$(i);if(this.cpuData&&a!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=a}static async fromImage(e,t){return J0(e,t)}static fromTexture(e,t){return e$(e,t)}static fromGpuBuffer(e,t){return t$(e,t)}static fromMLTensor(e,t){return r$(e,t)}static fromPinnedBuffer(e,t,r){return n$(e,t,r)}toDataURL(e){return X0(this,e)}toImageData(e){return Y0(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return s$(this,e)}}}),Bt,o$=X(()=>{mu(),Bt=nt}),Ci,ls,Mt,St,u$=X(()=>{Q0(),Ci=(e,t)=>{(typeof dt.trace>"u"?!dt.wasm.trace:!dt.trace)||console.timeStamp(`${e}::ORT::${t}`)},ls=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Ci("CPU",a);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},Mt=e=>{(typeof dt.trace>"u"?!dt.wasm.trace:!dt.trace)||ls("BEGIN",e)},St=e=>{(typeof dt.trace>"u"?!dt.wasm.trace:!dt.trace)||ls("END",e)}}),l$,S3=X(()=>{K0(),o$(),u$(),l$=class d${constructor(t){this.handler=t}async run(t,r,n){Mt();let i={},a={};if(typeof t!="object"||t===null||t instanceof Bt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Bt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of r){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(r);for(let c of this.outputNames)if(d.indexOf(c)!==-1){let p=r[c];(p===null||p instanceof Bt)&&(l=!0,s=!1,i[c]=p)}if(l){if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)i[l]=null;let o=await this.handler.run(t,i,a),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let d=o[l];d instanceof Bt?u[l]=d:u[l]=new Bt(d.type,d.data,d.dims)}return St(),u}async release(){return this.handler.dispose()}static async create(t,r,n,i){Mt();let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,c=0,p=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(c=r,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(p=t.byteLength-c,typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-c}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(d,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await H0(s),l=await o.createInferenceSessionHandler(a,u);return St(),new d$(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),c$,k3=X(()=>{S3(),c$=l$}),I3=X(()=>{}),T3=X(()=>{}),E3=X(()=>{}),z3=X(()=>{}),C3={};jr(C3,{InferenceSession:()=>c$,TRACE:()=>Ci,TRACE_FUNC_BEGIN:()=>Mt,TRACE_FUNC_END:()=>St,Tensor:()=>Bt,env:()=>Me,registerBackend:()=>Ur});var It=X(()=>{_3(),w3(),k3(),o$(),I3(),T3(),u$(),E3(),z3()}),gu=X(()=>{}),p$={};jr(p$,{default:()=>f$});var ds,cs,f$,O3=X(()=>{y2(),Or(),_u(),ds="ort-wasm-proxy-worker",cs=globalThis.self?.name===ds,cs&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":yu(r.wasm).then(()=>{Mu(r).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})})},n=>{postMessage({type:t,err:n})});break;case"init-ep":{let{epName:n,env:i}=r;Du(i,n).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{let{buffer:n}=r,i=Pi(n);postMessage({type:t,out:i});break}case"create":{let{model:n,options:i}=r;Pu(n,i).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":Nu(r),postMessage({type:t});break;case"run":{let{sessionId:n,inputIndices:i,inputs:a,outputIndices:s,options:o}=r;Uu(n,i,a,s,new Array(s.length).fill(null),o).then(u=>{u.some(l=>l[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},Vu([...a,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":qu(r),postMessage({type:t});break;default:}}catch(n){postMessage({type:t,err:n})}}),f$=cs?null:e=>new Worker(e??tt,{type:"module",name:ds})}),h$={};jr(h$,{default:()=>m$});var ps,fs,m$,Rf,A3=X(()=>{fs=(ps=import.meta.url,async function(e={}){var t,r,n=e,i=new Promise((f,w)=>{t=f,r=w}),a=typeof window=="object",s=typeof WorkerGlobalScope<"u",o=s&&self.name?.startsWith("em-pthread");n.mountExternalData=(f,w)=>{f.startsWith("./")&&(f=f.substring(2)),(n.Fb||(n.Fb=new Map)).set(f,w)},n.unmountExternalData=()=>{delete n.Fb};var u=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let l=f=>async(...w)=>{try{if(n.Gb)throw Error("Session already started");let x=n.Gb={ec:w[0],errors:[]},k=await f(...w);if(n.Gb!==x)throw Error("Session mismatch");n.Kb?.flush();let E=x.errors;if(0<E.length){let A=await Promise.all(E);if(A=A.filter(N=>N),0<A.length)throw Error(A.join(`
`))}return k}finally{n.Gb=null}};n.jsepInit=(f,w)=>{if(f==="webgpu"){[n.Kb,n.Vb,n.Zb,n.Lb,n.Yb,n.kb,n.$b,n.bc,n.Wb,n.Xb,n.ac]=w;let x=n.Kb;n.jsepRegisterBuffer=(k,E,A,N)=>x.registerBuffer(k,E,A,N),n.jsepGetBuffer=k=>x.getBuffer(k),n.jsepCreateDownloader=(k,E,A)=>x.createDownloader(k,E,A),n.jsepOnCreateSession=k=>{x.onCreateSession(k)},n.jsepOnReleaseSession=k=>{x.onReleaseSession(k)},n.jsepOnRunStart=k=>x.onRunStart(k),n.cc=(k,E)=>{x.upload(k,E)}}else if(f==="webnn"){let x=w[0];[n.oc,n.Ob,n.webnnEnsureTensor,n.Pb,n.webnnDownloadTensor]=w.slice(1),n.webnnReleaseTensorId=n.Ob,n.webnnUploadTensor=n.Pb,n.webnnOnRunStart=k=>x.onRunStart(k),n.webnnOnRunEnd=x.onRunEnd.bind(x),n.webnnRegisterMLContext=(k,E)=>{x.registerMLContext(k,E)},n.webnnOnReleaseSession=k=>{x.onReleaseSession(k)},n.webnnCreateMLTensorDownloader=(k,E)=>x.createMLTensorDownloader(k,E),n.webnnRegisterMLTensor=(k,E,A,N)=>x.registerMLTensor(k,E,A,N),n.webnnCreateMLContext=k=>x.createMLContext(k),n.webnnRegisterMLConstant=(k,E,A,N,Z,ee)=>x.registerMLConstant(k,E,A,N,Z,n.Fb,ee),n.webnnRegisterGraphInput=x.registerGraphInput.bind(x),n.webnnIsGraphInput=x.isGraphInput.bind(x),n.webnnRegisterGraphOutput=x.registerGraphOutput.bind(x),n.webnnIsGraphOutput=x.isGraphOutput.bind(x),n.webnnCreateTemporaryTensor=x.createTemporaryTensor.bind(x),n.webnnIsGraphInputOutputTypeSupported=x.isGraphInputOutputTypeSupported.bind(x)}};let d=()=>{let f=(w,x,k)=>(...E)=>{let A=Et,N=x?.();E=w(...E);let Z=x?.();return N!==Z&&(w=Z,k(N),x=k=null),Et!=A?new Promise((ee,oe)=>{ea={resolve:ee,reject:oe}}):E};(()=>{for(let w of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])n[w]=f(n[w],()=>n[w],x=>n[w]=x)})(),l!==void 0&&(n._OrtRun=l(n._OrtRun),n._OrtRunWithBinding=l(n._OrtRunWithBinding)),d=void 0};n.asyncInit=()=>{d?.()};var c,p,h=Object.assign({},n),m=(f,w)=>{throw w},g="";(a||s)&&(s?g=self.location.href:typeof document<"u"&&document.currentScript&&(g=document.currentScript.src),ps&&(g=ps),g=g.startsWith("blob:")?"":g.slice(0,g.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(p=f=>{var w=new XMLHttpRequest;return w.open("GET",f,!1),w.responseType="arraybuffer",w.send(null),new Uint8Array(w.response)}),c=async f=>{if(W(f))return new Promise((x,k)=>{var E=new XMLHttpRequest;E.open("GET",f,!0),E.responseType="arraybuffer",E.onload=()=>{E.status==200||E.status==0&&E.response?x(E.response):k(E.status)},E.onerror=k,E.send(null)});var w=await fetch(f,{credentials:"same-origin"});if(w.ok)return w.arrayBuffer();throw Error(w.status+" : "+w.url)});var $=console.log.bind(console),y=console.error.bind(console),_=$,v=y;Object.assign(n,h),h=null;var b,S,I,T,z,O,R,G,L,Q,B,te,F,M=n.wasmBinary,J=!1,W=f=>f.startsWith("file://");function re(){return b.buffer!=T.buffer&&$e(),T}function q(){return b.buffer!=T.buffer&&$e(),z}function j(){return b.buffer!=T.buffer&&$e(),O}function K(){return b.buffer!=T.buffer&&$e(),R}function C(){return b.buffer!=T.buffer&&$e(),G}function H(){return b.buffer!=T.buffer&&$e(),L}function me(){return b.buffer!=T.buffer&&$e(),Q}function De(){return b.buffer!=T.buffer&&$e(),F}if(o){let f=function(w){try{var x=w.data,k=x.Cb;if(k==="load"){let E=[];self.onmessage=A=>E.push(A),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let A of E)f(A);self.onmessage=f};for(let A of x.Sb)n[A]&&!n[A].proxy||(n[A]=(...N)=>{postMessage({Cb:"callHandler",Rb:A,args:N})},A=="print"&&(_=n[A]),A=="printErr"&&(v=n[A]));b=x.lc,$e(),Ie(x.mc)}else if(k==="run"){A2(x.Bb),ia(x.Bb,0,0,1,0,0),Zu(),Yi(x.Bb),ge||(Ll(),ge=!0);try{B2(x.hc,x.Ib)}catch(E){if(E!="unwind")throw E}}else x.target!=="setimmediate"&&(k==="checkMailbox"?ge&&Rn():k&&(v(`worker: received unknown command ${k}`),v(x)))}catch(E){throw Gl(),E}};var Ie,ge=!1;v=function(...w){w=w.join(" "),console.error(w)},self.alert=function(...w){postMessage({Cb:"alert",text:w.join(" "),jc:Wn()})},self.onunhandledrejection=w=>{throw w.reason||w},self.onmessage=f}function $e(){var f=b.buffer;n.HEAP8=T=new Int8Array(f),n.HEAP16=O=new Int16Array(f),n.HEAPU8=z=new Uint8Array(f),n.HEAPU16=R=new Uint16Array(f),n.HEAP32=G=new Int32Array(f),n.HEAPU32=L=new Uint32Array(f),n.HEAPF32=Q=new Float32Array(f),n.HEAPF64=F=new Float64Array(f),n.HEAP64=B=new BigInt64Array(f),n.HEAPU64=te=new BigUint64Array(f)}function Je(){o?startWorker(n):de.Da()}o||(b=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),$e());var Dt,or=0,Hr=null;function Wu(){if(--or==0&&Hr){var f=Hr;Hr=null,f()}}function Ft(f){throw v(f="Aborted("+f+")"),J=!0,f=new WebAssembly.RuntimeError(f+". Build with -sASSERTIONS for more info."),r(f),f}function Lu(){return{a:{L:O2,Aa:C2,b:M2,$:Ju,A:rl,pa:nl,X:al,Z:sl,qa:ol,na:ul,ga:ll,ma:dl,J:cl,Y:pl,V:fl,oa:hl,W:ml,va:D2,E:P2,Q:N2,O:q2,D:W2,v:L2,r:G2,P:F2,z:Y2,R:J2,ja:e1,T:t1,aa:r1,M:n1,F:i1,ia:Yi,sa:a1,t:s1,Ca:o1,w:d1,o:c1,m:f1,c:Zi,Ba:h1,n:m1,j:y1,u:w1,p:$1,f:b1,s:v1,l:x1,e:S1,k:k1,h:I1,g:T1,d:E1,da:z1,ea:C1,fa:O1,ba:zl,ca:Cl,N:Ol,xa:B1,ua:M1,i:D1,C:P1,G:N1,ta:R1,x:U1,ra:q1,U:V1,q:A1,y:W1,K:L1,S:G1,za:F1,ya:j1,ka:Ml,la:Dl,_:Fi,B:Pl,I:Nl,ha:Ul,H:ql,a:b,wa:Gi}}}var Vi={840156:(f,w,x,k,E)=>{if(n===void 0||!n.Fb)return 1;if((f=We(Number(f>>>0))).startsWith("./")&&(f=f.substring(2)),!(f=n.Fb.get(f)))return 2;if(w=Number(w>>>0),x=Number(x>>>0),k=Number(k>>>0),w+x>f.byteLength)return 3;try{let A=f.subarray(w,w+x);switch(E){case 0:q().set(A,k>>>0);break;case 1:n.nc?n.nc(k,A):n.cc(k,A);break;default:return 4}return 0}catch{return 4}},840980:(f,w,x)=>{n.Pb(f,q().subarray(w>>>0,w+x>>>0))},841044:()=>n.oc(),841086:f=>{n.Ob(f)},841123:()=>{n.Wb()},841154:()=>{n.Xb()},841183:()=>{n.ac()},841208:f=>n.Vb(f),841241:f=>n.Zb(f),841273:(f,w,x)=>{n.Lb(Number(f),Number(w),Number(x),!0)},841336:(f,w,x)=>{n.Lb(Number(f),Number(w),Number(x))},841393:()=>typeof wasmOffsetConverter<"u",841450:f=>{n.kb("Abs",f,void 0)},841501:f=>{n.kb("Neg",f,void 0)},841552:f=>{n.kb("Floor",f,void 0)},841605:f=>{n.kb("Ceil",f,void 0)},841657:f=>{n.kb("Reciprocal",f,void 0)},841715:f=>{n.kb("Sqrt",f,void 0)},841767:f=>{n.kb("Exp",f,void 0)},841818:f=>{n.kb("Erf",f,void 0)},841869:f=>{n.kb("Sigmoid",f,void 0)},841924:(f,w,x)=>{n.kb("HardSigmoid",f,{alpha:w,beta:x})},842003:f=>{n.kb("Log",f,void 0)},842054:f=>{n.kb("Sin",f,void 0)},842105:f=>{n.kb("Cos",f,void 0)},842156:f=>{n.kb("Tan",f,void 0)},842207:f=>{n.kb("Asin",f,void 0)},842259:f=>{n.kb("Acos",f,void 0)},842311:f=>{n.kb("Atan",f,void 0)},842363:f=>{n.kb("Sinh",f,void 0)},842415:f=>{n.kb("Cosh",f,void 0)},842467:f=>{n.kb("Asinh",f,void 0)},842520:f=>{n.kb("Acosh",f,void 0)},842573:f=>{n.kb("Atanh",f,void 0)},842626:f=>{n.kb("Tanh",f,void 0)},842678:f=>{n.kb("Not",f,void 0)},842729:(f,w,x)=>{n.kb("Clip",f,{min:w,max:x})},842798:f=>{n.kb("Clip",f,void 0)},842850:(f,w)=>{n.kb("Elu",f,{alpha:w})},842908:f=>{n.kb("Gelu",f,void 0)},842960:f=>{n.kb("Relu",f,void 0)},843012:(f,w)=>{n.kb("LeakyRelu",f,{alpha:w})},843076:(f,w)=>{n.kb("ThresholdedRelu",f,{alpha:w})},843146:(f,w)=>{n.kb("Cast",f,{to:w})},843204:f=>{n.kb("Add",f,void 0)},843255:f=>{n.kb("Sub",f,void 0)},843306:f=>{n.kb("Mul",f,void 0)},843357:f=>{n.kb("Div",f,void 0)},843408:f=>{n.kb("Pow",f,void 0)},843459:f=>{n.kb("Equal",f,void 0)},843512:f=>{n.kb("Greater",f,void 0)},843567:f=>{n.kb("GreaterOrEqual",f,void 0)},843629:f=>{n.kb("Less",f,void 0)},843681:f=>{n.kb("LessOrEqual",f,void 0)},843740:(f,w,x,k,E)=>{n.kb("ReduceMean",f,{keepDims:!!w,noopWithEmptyAxes:!!x,axes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},843915:(f,w,x,k,E)=>{n.kb("ReduceMax",f,{keepDims:!!w,noopWithEmptyAxes:!!x,axes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},844089:(f,w,x,k,E)=>{n.kb("ReduceMin",f,{keepDims:!!w,noopWithEmptyAxes:!!x,axes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},844263:(f,w,x,k,E)=>{n.kb("ReduceProd",f,{keepDims:!!w,noopWithEmptyAxes:!!x,axes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},844438:(f,w,x,k,E)=>{n.kb("ReduceSum",f,{keepDims:!!w,noopWithEmptyAxes:!!x,axes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},844612:(f,w,x,k,E)=>{n.kb("ReduceL1",f,{keepDims:!!w,noopWithEmptyAxes:!!x,axes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},844785:(f,w,x,k,E)=>{n.kb("ReduceL2",f,{keepDims:!!w,noopWithEmptyAxes:!!x,axes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},844958:(f,w,x,k,E)=>{n.kb("ReduceLogSum",f,{keepDims:!!w,noopWithEmptyAxes:!!x,axes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},845135:(f,w,x,k,E)=>{n.kb("ReduceSumSquare",f,{keepDims:!!w,noopWithEmptyAxes:!!x,axes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},845315:(f,w,x,k,E)=>{n.kb("ReduceLogSumExp",f,{keepDims:!!w,noopWithEmptyAxes:!!x,axes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},845495:f=>{n.kb("Where",f,void 0)},845548:(f,w,x)=>{n.kb("Transpose",f,{perm:w?Array.from(C().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},845672:(f,w,x,k)=>{n.kb("DepthToSpace",f,{blocksize:w,mode:We(x),format:k?"NHWC":"NCHW"})},845805:(f,w,x,k)=>{n.kb("DepthToSpace",f,{blocksize:w,mode:We(x),format:k?"NHWC":"NCHW"})},845938:(f,w,x,k,E,A,N,Z,ee,oe,we,xe,Oe,He,Rr)=>{n.kb("ConvTranspose",f,{format:ee?"NHWC":"NCHW",autoPad:w,dilations:[x],group:k,kernelShape:[E],pads:[A,N],strides:[Z],wIsConst:()=>!!re()[oe>>>0],outputPadding:we?Array.from(C().subarray(Number(we)>>>0,Number(xe)>>>0)):[],outputShape:Oe?Array.from(C().subarray(Number(Oe)>>>0,Number(He)>>>0)):[],activation:We(Rr)})},846371:(f,w,x,k,E,A,N,Z,ee,oe,we,xe,Oe,He)=>{n.kb("ConvTranspose",f,{format:Z?"NHWC":"NCHW",autoPad:w,dilations:Array.from(C().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),group:k,kernelShape:Array.from(C().subarray(Number(E)>>>0,2+(Number(E)>>>0)>>>0)),pads:Array.from(C().subarray(Number(A)>>>0,4+(Number(A)>>>0)>>>0)),strides:Array.from(C().subarray(Number(N)>>>0,2+(Number(N)>>>0)>>>0)),wIsConst:()=>!!re()[ee>>>0],outputPadding:oe?Array.from(C().subarray(Number(oe)>>>0,Number(we)>>>0)):[],outputShape:xe?Array.from(C().subarray(Number(xe)>>>0,Number(Oe)>>>0)):[],activation:We(He)})},847032:(f,w,x,k,E,A,N,Z,ee,oe,we,xe,Oe,He,Rr)=>{n.kb("ConvTranspose",f,{format:ee?"NHWC":"NCHW",autoPad:w,dilations:[x],group:k,kernelShape:[E],pads:[A,N],strides:[Z],wIsConst:()=>!!re()[oe>>>0],outputPadding:we?Array.from(C().subarray(Number(we)>>>0,Number(xe)>>>0)):[],outputShape:Oe?Array.from(C().subarray(Number(Oe)>>>0,Number(He)>>>0)):[],activation:We(Rr)})},847465:(f,w,x,k,E,A,N,Z,ee,oe,we,xe,Oe,He)=>{n.kb("ConvTranspose",f,{format:Z?"NHWC":"NCHW",autoPad:w,dilations:Array.from(C().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),group:k,kernelShape:Array.from(C().subarray(Number(E)>>>0,2+(Number(E)>>>0)>>>0)),pads:Array.from(C().subarray(Number(A)>>>0,4+(Number(A)>>>0)>>>0)),strides:Array.from(C().subarray(Number(N)>>>0,2+(Number(N)>>>0)>>>0)),wIsConst:()=>!!re()[ee>>>0],outputPadding:oe?Array.from(C().subarray(Number(oe)>>>0,Number(we)>>>0)):[],outputShape:xe?Array.from(C().subarray(Number(xe)>>>0,Number(Oe)>>>0)):[],activation:We(He)})},848126:(f,w)=>{n.kb("GlobalAveragePool",f,{format:w?"NHWC":"NCHW"})},848217:(f,w,x,k,E,A,N,Z,ee,oe,we,xe,Oe,He)=>{n.kb("AveragePool",f,{format:He?"NHWC":"NCHW",auto_pad:w,ceil_mode:x,count_include_pad:k,storage_order:E,dilations:A?Array.from(C().subarray(Number(A)>>>0,Number(N)>>>0)):[],kernel_shape:Z?Array.from(C().subarray(Number(Z)>>>0,Number(ee)>>>0)):[],pads:oe?Array.from(C().subarray(Number(oe)>>>0,Number(we)>>>0)):[],strides:xe?Array.from(C().subarray(Number(xe)>>>0,Number(Oe)>>>0)):[]})},848696:(f,w)=>{n.kb("GlobalAveragePool",f,{format:w?"NHWC":"NCHW"})},848787:(f,w,x,k,E,A,N,Z,ee,oe,we,xe,Oe,He)=>{n.kb("AveragePool",f,{format:He?"NHWC":"NCHW",auto_pad:w,ceil_mode:x,count_include_pad:k,storage_order:E,dilations:A?Array.from(C().subarray(Number(A)>>>0,Number(N)>>>0)):[],kernel_shape:Z?Array.from(C().subarray(Number(Z)>>>0,Number(ee)>>>0)):[],pads:oe?Array.from(C().subarray(Number(oe)>>>0,Number(we)>>>0)):[],strides:xe?Array.from(C().subarray(Number(xe)>>>0,Number(Oe)>>>0)):[]})},849266:(f,w)=>{n.kb("GlobalMaxPool",f,{format:w?"NHWC":"NCHW"})},849353:(f,w,x,k,E,A,N,Z,ee,oe,we,xe,Oe,He)=>{n.kb("MaxPool",f,{format:He?"NHWC":"NCHW",auto_pad:w,ceil_mode:x,count_include_pad:k,storage_order:E,dilations:A?Array.from(C().subarray(Number(A)>>>0,Number(N)>>>0)):[],kernel_shape:Z?Array.from(C().subarray(Number(Z)>>>0,Number(ee)>>>0)):[],pads:oe?Array.from(C().subarray(Number(oe)>>>0,Number(we)>>>0)):[],strides:xe?Array.from(C().subarray(Number(xe)>>>0,Number(Oe)>>>0)):[]})},849828:(f,w)=>{n.kb("GlobalMaxPool",f,{format:w?"NHWC":"NCHW"})},849915:(f,w,x,k,E,A,N,Z,ee,oe,we,xe,Oe,He)=>{n.kb("MaxPool",f,{format:He?"NHWC":"NCHW",auto_pad:w,ceil_mode:x,count_include_pad:k,storage_order:E,dilations:A?Array.from(C().subarray(Number(A)>>>0,Number(N)>>>0)):[],kernel_shape:Z?Array.from(C().subarray(Number(Z)>>>0,Number(ee)>>>0)):[],pads:oe?Array.from(C().subarray(Number(oe)>>>0,Number(we)>>>0)):[],strides:xe?Array.from(C().subarray(Number(xe)>>>0,Number(Oe)>>>0)):[]})},850390:(f,w,x,k,E)=>{n.kb("Gemm",f,{alpha:w,beta:x,transA:k,transB:E})},850494:f=>{n.kb("MatMul",f,void 0)},850548:(f,w,x,k)=>{n.kb("ArgMax",f,{keepDims:!!w,selectLastIndex:!!x,axis:k})},850656:(f,w,x,k)=>{n.kb("ArgMin",f,{keepDims:!!w,selectLastIndex:!!x,axis:k})},850764:(f,w)=>{n.kb("Softmax",f,{axis:w})},850827:(f,w)=>{n.kb("Concat",f,{axis:w})},850887:(f,w,x,k,E)=>{n.kb("Split",f,{axis:w,numOutputs:x,splitSizes:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},851043:f=>{n.kb("Expand",f,void 0)},851097:(f,w)=>{n.kb("Gather",f,{axis:Number(w)})},851168:(f,w)=>{n.kb("GatherElements",f,{axis:Number(w)})},851247:(f,w)=>{n.kb("GatherND",f,{batch_dims:Number(w)})},851326:(f,w,x,k,E,A,N,Z,ee,oe,we)=>{n.kb("Resize",f,{antialias:w,axes:x?Array.from(C().subarray(Number(x)>>>0,Number(k)>>>0)):[],coordinateTransformMode:We(E),cubicCoeffA:A,excludeOutside:N,extrapolationValue:Z,keepAspectRatioPolicy:We(ee),mode:We(oe),nearestMode:We(we)})},851688:(f,w,x,k,E,A,N)=>{n.kb("Slice",f,{starts:w?Array.from(C().subarray(Number(w)>>>0,Number(x)>>>0)):[],ends:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[],axes:A?Array.from(C().subarray(Number(A)>>>0,Number(N)>>>0)):[]})},851952:f=>{n.kb("Tile",f,void 0)},852004:(f,w,x)=>{n.kb("InstanceNormalization",f,{epsilon:w,format:x?"NHWC":"NCHW"})},852118:(f,w,x)=>{n.kb("InstanceNormalization",f,{epsilon:w,format:x?"NHWC":"NCHW"})},852232:f=>{n.kb("Range",f,void 0)},852285:(f,w)=>{n.kb("Einsum",f,{equation:We(w)})},852366:(f,w,x,k,E)=>{n.kb("Pad",f,{mode:w,value:x,pads:k?Array.from(C().subarray(Number(k)>>>0,Number(E)>>>0)):[]})},852509:(f,w,x,k,E,A)=>{n.kb("BatchNormalization",f,{epsilon:w,momentum:x,spatial:!!E,trainingMode:!!k,format:A?"NHWC":"NCHW"})},852678:(f,w,x,k,E,A)=>{n.kb("BatchNormalization",f,{epsilon:w,momentum:x,spatial:!!E,trainingMode:!!k,format:A?"NHWC":"NCHW"})},852847:(f,w,x)=>{n.kb("CumSum",f,{exclusive:Number(w),reverse:Number(x)})},852944:(f,w,x)=>{n.kb("DequantizeLinear",f,{axis:w,blockSize:x})},853034:(f,w,x,k,E)=>{n.kb("GridSample",f,{align_corners:w,mode:We(x),padding_mode:We(k),format:E?"NHWC":"NCHW"})},853204:(f,w,x,k,E)=>{n.kb("GridSample",f,{align_corners:w,mode:We(x),padding_mode:We(k),format:E?"NHWC":"NCHW"})},853374:(f,w)=>{n.kb("ScatterND",f,{reduction:We(w)})},853459:(f,w,x,k,E,A,N,Z,ee)=>{n.kb("Attention",f,{numHeads:w,isUnidirectional:x,maskFilterValue:k,scale:E,doRotary:A,qkvHiddenSizes:N?Array.from(C().subarray(Number(Z)>>>0,Number(Z)+N>>>0)):[],pastPresentShareBuffer:!!ee})},853731:f=>{n.kb("BiasAdd",f,void 0)},853786:f=>{n.kb("BiasSplitGelu",f,void 0)},853847:f=>{n.kb("FastGelu",f,void 0)},853903:(f,w,x,k,E,A,N,Z,ee,oe,we,xe,Oe,He,Rr,Z1)=>{n.kb("Conv",f,{format:xe?"NHWC":"NCHW",auto_pad:w,dilations:x?Array.from(C().subarray(Number(x)>>>0,Number(k)>>>0)):[],group:E,kernel_shape:A?Array.from(C().subarray(Number(A)>>>0,Number(N)>>>0)):[],pads:Z?Array.from(C().subarray(Number(Z)>>>0,Number(ee)>>>0)):[],strides:oe?Array.from(C().subarray(Number(oe)>>>0,Number(we)>>>0)):[],w_is_const:()=>!!re()[Number(Oe)>>>0],activation:We(He),activation_params:Rr?Array.from(me().subarray(Number(Rr)>>>0,Number(Z1)>>>0)):[]})},854487:f=>{n.kb("Gelu",f,void 0)},854539:(f,w,x,k,E,A,N,Z,ee)=>{n.kb("GroupQueryAttention",f,{numHeads:w,kvNumHeads:x,scale:k,softcap:E,doRotary:A,rotaryInterleaved:N,smoothSoftmax:Z,localWindowSize:ee})},854756:(f,w,x,k)=>{n.kb("LayerNormalization",f,{axis:w,epsilon:x,simplified:!!k})},854867:(f,w,x,k)=>{n.kb("LayerNormalization",f,{axis:w,epsilon:x,simplified:!!k})},854978:(f,w,x,k,E,A)=>{n.kb("MatMulNBits",f,{k:w,n:x,accuracyLevel:k,bits:E,blockSize:A})},855105:(f,w,x,k,E,A)=>{n.kb("MultiHeadAttention",f,{numHeads:w,isUnidirectional:x,maskFilterValue:k,scale:E,doRotary:A})},855264:(f,w)=>{n.kb("QuickGelu",f,{alpha:w})},855328:(f,w,x,k,E)=>{n.kb("RotaryEmbedding",f,{interleaved:!!w,numHeads:x,rotaryEmbeddingDim:k,scale:E})},855467:(f,w,x)=>{n.kb("SkipLayerNormalization",f,{epsilon:w,simplified:!!x})},855569:(f,w,x)=>{n.kb("SkipLayerNormalization",f,{epsilon:w,simplified:!!x})},855671:(f,w,x,k)=>{n.kb("GatherBlockQuantized",f,{gatherAxis:w,quantizeAxis:x,blockSize:k})},855792:f=>{n.$b(f)},855826:(f,w)=>n.bc(Number(f),Number(w),n.Gb.ec,n.Gb.errors)};function C2(f,w,x){return xl(async()=>{await n.Yb(Number(f),Number(w),Number(x))})}function O2(){return typeof wasmOffsetConverter<"u"}class Wi{name="ExitStatus";constructor(w){this.message=`Program terminated with exit(${w})`,this.status=w}}var Gu=f=>{f.terminate(),f.onmessage=()=>{}},Li=[],Fu=f=>{Ht.length==0&&(Xu(),Qu(Ht[0]));var w=Ht.pop();if(!w)return 6;Kr.push(w),ur[f.Bb]=w,w.Bb=f.Bb;var x={Cb:"run",hc:f.fc,Ib:f.Ib,Bb:f.Bb};return w.postMessage(x,f.Nb),0},jt=0,Pe=(f,w,...x)=>{for(var k=2*x.length,E=oa(),A=sa(8*k),N=A>>>3,Z=0;Z<x.length;Z++){var ee=x[Z];typeof ee=="bigint"?(B[N+2*Z]=1n,B[N+2*Z+1]=ee):(B[N+2*Z]=0n,De()[N+2*Z+1>>>0]=ee)}return f=Fl(f,0,k,A,w),Gn(E),f};function Gi(f){if(o)return Pe(0,1,f);if(I=f,!(0<jt)){for(var w of Kr)Gu(w);for(w of Ht)Gu(w);Ht=[],Kr=[],ur={},J=!0}m(0,new Wi(f))}function ju(f){if(o)return Pe(1,0,f);Fi(f)}var Fi=f=>{if(I=f,o)throw ju(f),"unwind";Gi(f)},Ht=[],Kr=[],Hu=[],ur={},Ku=f=>{var w=f.Bb;delete ur[w],Ht.push(f),Kr.splice(Kr.indexOf(f),1),f.Bb=0,jl(w)};function Zu(){Hu.forEach(f=>f())}var Qu=f=>new Promise(w=>{f.onmessage=E=>{var A=(E=E.data).Cb;if(E.Hb&&E.Hb!=Wn()){var N=ur[E.Hb];N?N.postMessage(E,E.Nb):v(`Internal error! Worker sent a message "${A}" to target pthread ${E.Hb}, but that thread no longer exists!`)}else A==="checkMailbox"?Rn():A==="spawnThread"?Fu(E):A==="cleanupThread"?Ku(ur[E.ic]):A==="loaded"?(f.loaded=!0,w(f)):A==="alert"?alert(`Thread ${E.jc}: ${E.text}`):E.target==="setimmediate"?f.postMessage(E):A==="callHandler"?n[E.Rb](...E.args):A&&v(`worker sent an unknown command ${A}`)},f.onerror=E=>{throw v(`worker sent an error! ${E.filename}:${E.lineno}: ${E.message}`),E};var x,k=[];for(x of[])n.propertyIsEnumerable(x)&&k.push(x);f.postMessage({Cb:"load",Sb:k,lc:b,mc:S})});function Xu(){var f=new Worker((()=>{let w=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new w("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Ht.push(f)}var A2=f=>{$e();var w=H()[f+52>>>2>>>0];f=H()[f+56>>>2>>>0],Zl(w,w-f),Gn(w)},B2=(f,w)=>{jt=0,f=Ql(f,w),0<jt?I=f:aa(f)};class R2{constructor(w){this.Jb=w-24}}function M2(f,w,x){var k=new R2(f>>>=0);throw w>>>=0,x>>>=0,H()[k.Jb+16>>>2>>>0]=0,H()[k.Jb+4>>>2>>>0]=w,H()[k.Jb+8>>>2>>>0]=x,f}function Yu(f,w,x,k){return o?Pe(2,1,f,w,x,k):Ju(f,w,x,k)}function Ju(f,w,x,k){if(f>>>=0,x>>>=0,k>>>=0,u===void 0)return 6;var E=[];return o&&E.length===0?Yu(f,w>>>=0,x,k):(f={fc:x,Bb:f,Ib:k,Nb:E},o?(f.Cb="spawnThread",postMessage(f,E),0):Fu(f))}var el=typeof TextDecoder<"u"?new TextDecoder:void 0,tl=(f,w=0,x=NaN)=>{var k=(w>>>=0)+x;for(x=w;f[x]&&!(x>=k);)++x;if(16<x-w&&f.buffer&&el)return el.decode(f.buffer instanceof ArrayBuffer?f.subarray(w,x):f.slice(w,x));for(k="";w<x;){var E=f[w++];if(128&E){var A=63&f[w++];if((224&E)==192)k+=String.fromCharCode((31&E)<<6|A);else{var N=63&f[w++];65536>(E=(240&E)==224?(15&E)<<12|A<<6|N:(7&E)<<18|A<<12|N<<6|63&f[w++])?k+=String.fromCharCode(E):(E-=65536,k+=String.fromCharCode(55296|E>>10,56320|1023&E))}}else k+=String.fromCharCode(E)}return k},We=(f,w)=>(f>>>=0)?tl(q(),f,w):"";function rl(f,w,x){return o?Pe(3,1,f,w,x):0}function nl(f,w){if(o)return Pe(4,1,f,w)}var il=f=>{for(var w=0,x=0;x<f.length;++x){var k=f.charCodeAt(x);127>=k?w++:2047>=k?w+=2:55296<=k&&57343>=k?(w+=4,++x):w+=3}return w},Br=(f,w,x)=>{var k=q();if(w>>>=0,0<x){var E=w;x=w+x-1;for(var A=0;A<f.length;++A){var N=f.charCodeAt(A);if(55296<=N&&57343>=N&&(N=65536+((1023&N)<<10)|1023&f.charCodeAt(++A)),127>=N){if(w>=x)break;k[w++>>>0]=N}else{if(2047>=N){if(w+1>=x)break;k[w++>>>0]=192|N>>6}else{if(65535>=N){if(w+2>=x)break;k[w++>>>0]=224|N>>12}else{if(w+3>=x)break;k[w++>>>0]=240|N>>18,k[w++>>>0]=128|N>>12&63}k[w++>>>0]=128|N>>6&63}k[w++>>>0]=128|63&N}}k[w>>>0]=0,f=w-E}else f=0;return f};function al(f,w){if(o)return Pe(5,1,f,w)}function sl(f,w,x){if(o)return Pe(6,1,f,w,x)}function ol(f,w,x){return o?Pe(7,1,f,w,x):0}function ul(f,w){if(o)return Pe(8,1,f,w)}function ll(f,w,x){if(o)return Pe(9,1,f,w,x)}function dl(f,w,x,k){if(o)return Pe(10,1,f,w,x,k)}function cl(f,w,x,k){if(o)return Pe(11,1,f,w,x,k)}function pl(f,w,x,k){if(o)return Pe(12,1,f,w,x,k)}function fl(f){if(o)return Pe(13,1,f)}function hl(f,w){if(o)return Pe(14,1,f,w)}function ml(f,w,x){if(o)return Pe(15,1,f,w,x)}var gl,Kt,D2=()=>Ft(""),Tt=f=>{for(var w="";q()[f>>>0];)w+=gl[q()[f++>>>0]];return w},ji={},Hi={};function Pt(f,w,x={}){return function(k,E,A={}){var N=E.name;if(!k)throw new Kt(`type "${N}" must have a positive integer typeid pointer`);if(Hi.hasOwnProperty(k)){if(A.Tb)return;throw new Kt(`Cannot register type '${N}' twice`)}Hi[k]=E,ji.hasOwnProperty(k)&&(E=ji[k],delete ji[k],E.forEach(Z=>Z()))}(f,w,x)}var _l=(f,w,x)=>{switch(w){case 1:return x?k=>re()[k>>>0]:k=>q()[k>>>0];case 2:return x?k=>j()[k>>>1>>>0]:k=>K()[k>>>1>>>0];case 4:return x?k=>C()[k>>>2>>>0]:k=>H()[k>>>2>>>0];case 8:return x?k=>B[k>>>3]:k=>te[k>>>3];default:throw new TypeError(`invalid integer width (${w}): ${f}`)}};function P2(f,w,x){x>>>=0,Pt(f>>>=0,{name:w=Tt(w>>>0),fromWireType:k=>k,toWireType:function(k,E){if(typeof E!="bigint"&&typeof E!="number")throw E=E===null?"null":(k=typeof E)=="object"||k==="array"||k==="function"?E.toString():""+E,new TypeError(`Cannot convert "${E}" to ${this.name}`);return typeof E=="number"&&(E=BigInt(E)),E},Db:Zt,readValueFromPointer:_l(w,x,w.indexOf("u")==-1),Eb:null})}var Zt=8;function N2(f,w,x,k){Pt(f>>>=0,{name:w=Tt(w>>>0),fromWireType:function(E){return!!E},toWireType:function(E,A){return A?x:k},Db:Zt,readValueFromPointer:function(E){return this.fromWireType(q()[E>>>0])},Eb:null})}var Ki=[],Nt=[];function Zi(f){9<(f>>>=0)&&--Nt[f+1]==0&&(Nt[f]=void 0,Ki.push(f))}var Qe=f=>{if(!f)throw new Kt("Cannot use deleted val. handle = "+f);return Nt[f]},st=f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let w=Ki.pop()||Nt.length;return Nt[w]=f,Nt[w+1]=1,w}};function Qi(f){return this.fromWireType(H()[f>>>2>>>0])}var U2={name:"emscripten::val",fromWireType:f=>{var w=Qe(f);return Zi(f),w},toWireType:(f,w)=>st(w),Db:Zt,readValueFromPointer:Qi,Eb:null};function q2(f){return Pt(f>>>0,U2)}var V2=(f,w)=>{switch(w){case 4:return function(x){return this.fromWireType(me()[x>>>2>>>0])};case 8:return function(x){return this.fromWireType(De()[x>>>3>>>0])};default:throw new TypeError(`invalid float width (${w}): ${f}`)}};function W2(f,w,x){x>>>=0,Pt(f>>>=0,{name:w=Tt(w>>>0),fromWireType:k=>k,toWireType:(k,E)=>E,Db:Zt,readValueFromPointer:V2(w,x),Eb:null})}function L2(f,w,x,k,E){if(f>>>=0,x>>>=0,w=Tt(w>>>0),E===-1&&(E=4294967295),E=Z=>Z,k===0){var A=32-8*x;E=Z=>Z<<A>>>A}var N=w.includes("unsigned")?function(Z,ee){return ee>>>0}:function(Z,ee){return ee};Pt(f,{name:w,fromWireType:E,toWireType:N,Db:Zt,readValueFromPointer:_l(w,x,k!==0),Eb:null})}function G2(f,w,x){function k(A){var N=H()[A>>>2>>>0];return A=H()[A+4>>>2>>>0],new E(re().buffer,A,N)}var E=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][w];Pt(f>>>=0,{name:x=Tt(x>>>0),fromWireType:k,Db:Zt,readValueFromPointer:k},{Tb:!0})}function F2(f,w){Pt(f>>>=0,{name:w=Tt(w>>>0),fromWireType:function(x){for(var k,E=H()[x>>>2>>>0],A=x+4,N=A,Z=0;Z<=E;++Z){var ee=A+Z;Z!=E&&q()[ee>>>0]!=0||(N=We(N,ee-N),k===void 0?k=N:(k+="\0",k+=N),N=ee+1)}return zt(x),k},toWireType:function(x,k){k instanceof ArrayBuffer&&(k=new Uint8Array(k));var E=typeof k=="string";if(!(E||k instanceof Uint8Array||k instanceof Uint8ClampedArray||k instanceof Int8Array))throw new Kt("Cannot pass non-string to std::string");var A=E?il(k):k.length,N=Ln(4+A+1),Z=N+4;if(H()[N>>>2>>>0]=A,E)Br(k,Z,A+1);else if(E)for(E=0;E<A;++E){var ee=k.charCodeAt(E);if(255<ee)throw zt(N),new Kt("String has UTF-16 code units that do not fit in 8 bits");q()[Z+E>>>0]=ee}else for(E=0;E<A;++E)q()[Z+E>>>0]=k[E];return x!==null&&x.push(zt,N),N},Db:Zt,readValueFromPointer:Qi,Eb(x){zt(x)}})}var yl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,j2=(f,w)=>{for(var x=f>>1,k=x+w/2;!(x>=k)&&K()[x>>>0];)++x;if(32<(x<<=1)-f&&yl)return yl.decode(q().slice(f,x));for(x="",k=0;!(k>=w/2);++k){var E=j()[f+2*k>>>1>>>0];if(E==0)break;x+=String.fromCharCode(E)}return x},H2=(f,w,x)=>{if(x??=2147483647,2>x)return 0;var k=w;x=(x-=2)<2*f.length?x/2:f.length;for(var E=0;E<x;++E){var A=f.charCodeAt(E);j()[w>>>1>>>0]=A,w+=2}return j()[w>>>1>>>0]=0,w-k},K2=f=>2*f.length,Z2=(f,w)=>{for(var x=0,k="";!(x>=w/4);){var E=C()[f+4*x>>>2>>>0];if(E==0)break;++x,65536<=E?(E-=65536,k+=String.fromCharCode(55296|E>>10,56320|1023&E)):k+=String.fromCharCode(E)}return k},Q2=(f,w,x)=>{if(w>>>=0,x??=2147483647,4>x)return 0;var k=w;x=k+x-4;for(var E=0;E<f.length;++E){var A=f.charCodeAt(E);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&f.charCodeAt(++E)),C()[w>>>2>>>0]=A,(w+=4)+4>x)break}return C()[w>>>2>>>0]=0,w-k},X2=f=>{for(var w=0,x=0;x<f.length;++x){var k=f.charCodeAt(x);55296<=k&&57343>=k&&++x,w+=4}return w};function Y2(f,w,x){if(f>>>=0,w>>>=0,x=Tt(x>>>=0),w===2)var k=j2,E=H2,A=K2,N=Z=>K()[Z>>>1>>>0];else w===4&&(k=Z2,E=Q2,A=X2,N=Z=>H()[Z>>>2>>>0]);Pt(f,{name:x,fromWireType:Z=>{for(var ee,oe=H()[Z>>>2>>>0],we=Z+4,xe=0;xe<=oe;++xe){var Oe=Z+4+xe*w;xe!=oe&&N(Oe)!=0||(we=k(we,Oe-we),ee===void 0?ee=we:(ee+="\0",ee+=we),we=Oe+w)}return zt(Z),ee},toWireType:(Z,ee)=>{if(typeof ee!="string")throw new Kt(`Cannot pass non-string to C++ string type ${x}`);var oe=A(ee),we=Ln(4+oe+w);return H()[we>>>2>>>0]=oe/w,E(ee,we+4,oe+w),Z!==null&&Z.push(zt,we),we},Db:Zt,readValueFromPointer:Qi,Eb(Z){zt(Z)}})}function J2(f,w){Pt(f>>>=0,{Ub:!0,name:w=Tt(w>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function e1(f){ia(f>>>0,!s,1,!a,131072,!1),Zu()}var Xi=f=>{if(!J)try{if(f(),!(0<jt))try{o?aa(I):Fi(I)}catch(w){w instanceof Wi||w=="unwind"||m(0,w)}}catch(w){w instanceof Wi||w=="unwind"||m(0,w)}};function Yi(f){f>>>=0,typeof Atomics.kc=="function"&&(Atomics.kc(C(),f>>>2,f).value.then(Rn),f+=128,Atomics.store(C(),f>>>2,1))}var Rn=()=>{var f=Wn();f&&(Yi(f),Xi(Kl))};function t1(f,w){(f>>>=0)==w>>>0?setTimeout(Rn):o?postMessage({Hb:f,Cb:"checkMailbox"}):(f=ur[f])&&f.postMessage({Cb:"checkMailbox"})}var Ji=[];function r1(f,w,x,k,E){for(w>>>=0,k/=2,Ji.length=k,x=E>>>0>>>3,E=0;E<k;E++)Ji[E]=B[x+2*E]?B[x+2*E+1]:De()[x+2*E+1>>>0];return(w?Vi[w]:K1[f])(...Ji)}var n1=()=>{jt=0};function i1(f){f>>>=0,o?postMessage({Cb:"cleanupThread",ic:f}):Ku(ur[f])}function a1(f){}var Mn=(f,w)=>{var x=Hi[f];if(x===void 0)throw f=Wl(f),x=Tt(f),zt(f),new Kt(`${w} has unknown type ${x}`);return x},wl=(f,w,x)=>{var k=[];return f=f.toWireType(k,x),k.length&&(H()[w>>>2>>>0]=st(k)),f};function s1(f,w,x){return w>>>=0,x>>>=0,f=Qe(f>>>0),w=Mn(w,"emval::as"),wl(w,x,f)}function o1(f,w){return w>>>=0,f=Qe(f>>>0),(w=Mn(w,"emval::as")).toWireType(null,f)}var Dn=f=>{try{f()}catch(w){Ft(w)}},Qt=0,Et=null,$l=0,Pn=[],bl={},vl={},u1=0,ea=null,l1=[];function xl(f){return function(w){if(!J){if(Qt===0){var x=!1,k=!1;w((E=0)=>{if(!J&&($l=E,x=!0,k)){Qt=2,Dn(()=>Jl(Et)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),E=!1;try{var A=function(){var ee=C()[Et+8>>>2>>>0];return ee=de[vl[ee]],--jt,ee()}()}catch(ee){A=ee,E=!0}var N=!1;if(!Et){var Z=ea;Z&&(ea=null,(E?Z.reject:Z.resolve)(A),N=!0)}if(E&&!N)throw A}}),k=!0,x||(Qt=1,Et=function(){var E=Ln(65548),A=E+12;H()[E>>>2>>>0]=A,H()[E+4>>>2>>>0]=A+65536,A=Pn[0];var N=bl[A];return N===void 0&&(N=u1++,bl[A]=N,vl[N]=A),A=N,C()[E+8>>>2>>>0]=A,E}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),Dn(()=>Xl(Et)))}else Qt===2?(Qt=0,Dn(ed),zt(Et),Et=null,l1.forEach(Xi)):Ft(`invalid state: ${Qt}`);return $l}}(w=>{f().then(w)})}function d1(f){return f>>>=0,xl(async()=>{var w=await Qe(f);return st(w)})}var Nn=[];function c1(f,w,x,k){return x>>>=0,k>>>=0,(f=Nn[f>>>0])(null,w=Qe(w>>>0),x,k)}var p1={},Un=f=>{var w=p1[f];return w===void 0?Tt(f):w};function f1(f,w,x,k,E){return x>>>=0,k>>>=0,E>>>=0,(f=Nn[f>>>0])(w=Qe(w>>>0),w[x=Un(x)],k,E)}function h1(f,w){return w>>>=0,(f=Qe(f>>>0))==Qe(w)}var Sl=()=>typeof globalThis=="object"?globalThis:Function("return this")();function m1(f){return(f>>>=0)==0?st(Sl()):(f=Un(f),st(Sl()[f]))}var g1=f=>{var w=Nn.length;return Nn.push(f),w},_1=(f,w)=>{for(var x=Array(f),k=0;k<f;++k)x[k]=Mn(H()[w+4*k>>>2>>>0],"parameter "+k);return x},kl=(f,w)=>Object.defineProperty(w,"name",{value:f});function y1(f,w,x){var k=(w=_1(f,w>>>0)).shift();f--;var E=`return function (obj, func, destructorsRef, args) {
`,A=0,N=[];x===0&&N.push("obj");for(var Z=["retType"],ee=[k],oe=0;oe<f;++oe)N.push("arg"+oe),Z.push("argType"+oe),ee.push(w[oe]),E+=`  var arg${oe} = argType${oe}.readValueFromPointer(args${A?"+"+A:""});
`,A+=w[oe].Db;return E+=`  var rv = ${x===1?"new func":"func.call"}(${N.join(", ")});
`,k.Ub||(Z.push("emval_returnValue"),ee.push(wl),E+=`  return emval_returnValue(retType, destructorsRef, rv);
`),Z.push(E+`};
`),f=function(we){var xe=Function;if(!(xe instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof xe} which is not a function`);var Oe=kl(xe.name||"unknownFunctionName",function(){});return Oe.prototype=xe.prototype,Oe=new Oe,(we=xe.apply(Oe,we))instanceof Object?we:Oe}(Z)(...ee),x=`methodCaller<(${w.map(we=>we.name).join(", ")}) => ${k.name}>`,g1(kl(x,f))}function w1(f){return f=Un(f>>>0),st(n[f])}function $1(f,w){return w>>>=0,f=Qe(f>>>0),w=Qe(w),st(f[w])}function b1(f){9<(f>>>=0)&&(Nt[f+1]+=1)}function v1(){return st([])}function x1(f){f=Qe(f>>>0);for(var w=Array(f.length),x=0;x<f.length;x++)w[x]=f[x];return st(w)}function S1(f){return st(Un(f>>>0))}function k1(){return st({})}function I1(f){for(var w=Qe(f>>>=0);w.length;){var x=w.pop();w.pop()(x)}Zi(f)}function T1(f,w,x){w>>>=0,x>>>=0,f=Qe(f>>>0),w=Qe(w),x=Qe(x),f[w]=x}function E1(f,w){return w>>>=0,f=(f=Mn(f>>>0,"_emval_take_value")).readValueFromPointer(w),st(f)}function z1(f,w){f=-9007199254740992>f||9007199254740992<f?NaN:Number(f),w>>>=0,f=new Date(1e3*f),C()[w>>>2>>>0]=f.getUTCSeconds(),C()[w+4>>>2>>>0]=f.getUTCMinutes(),C()[w+8>>>2>>>0]=f.getUTCHours(),C()[w+12>>>2>>>0]=f.getUTCDate(),C()[w+16>>>2>>>0]=f.getUTCMonth(),C()[w+20>>>2>>>0]=f.getUTCFullYear()-1900,C()[w+24>>>2>>>0]=f.getUTCDay(),f=(f.getTime()-Date.UTC(f.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,C()[w+28>>>2>>>0]=f}var Il=f=>f%4==0&&(f%100!=0||f%400==0),Tl=[0,31,60,91,121,152,182,213,244,274,305,335],El=[0,31,59,90,120,151,181,212,243,273,304,334];function C1(f,w){f=-9007199254740992>f||9007199254740992<f?NaN:Number(f),w>>>=0,f=new Date(1e3*f),C()[w>>>2>>>0]=f.getSeconds(),C()[w+4>>>2>>>0]=f.getMinutes(),C()[w+8>>>2>>>0]=f.getHours(),C()[w+12>>>2>>>0]=f.getDate(),C()[w+16>>>2>>>0]=f.getMonth(),C()[w+20>>>2>>>0]=f.getFullYear()-1900,C()[w+24>>>2>>>0]=f.getDay();var x=(Il(f.getFullYear())?Tl:El)[f.getMonth()]+f.getDate()-1|0;C()[w+28>>>2>>>0]=x,C()[w+36>>>2>>>0]=-60*f.getTimezoneOffset(),x=new Date(f.getFullYear(),6,1).getTimezoneOffset();var k=new Date(f.getFullYear(),0,1).getTimezoneOffset();f=0|(x!=k&&f.getTimezoneOffset()==Math.min(k,x)),C()[w+32>>>2>>>0]=f}function O1(f){f>>>=0;var w=new Date(C()[f+20>>>2>>>0]+1900,C()[f+16>>>2>>>0],C()[f+12>>>2>>>0],C()[f+8>>>2>>>0],C()[f+4>>>2>>>0],C()[f>>>2>>>0],0),x=C()[f+32>>>2>>>0],k=w.getTimezoneOffset(),E=new Date(w.getFullYear(),6,1).getTimezoneOffset(),A=new Date(w.getFullYear(),0,1).getTimezoneOffset(),N=Math.min(A,E);return 0>x?C()[f+32>>>2>>>0]=+(E!=A&&N==k):0<x!=(N==k)&&(E=Math.max(A,E),w.setTime(w.getTime()+6e4*((0<x?N:E)-k))),C()[f+24>>>2>>>0]=w.getDay(),x=(Il(w.getFullYear())?Tl:El)[w.getMonth()]+w.getDate()-1|0,C()[f+28>>>2>>>0]=x,C()[f>>>2>>>0]=w.getSeconds(),C()[f+4>>>2>>>0]=w.getMinutes(),C()[f+8>>>2>>>0]=w.getHours(),C()[f+12>>>2>>>0]=w.getDate(),C()[f+16>>>2>>>0]=w.getMonth(),C()[f+20>>>2>>>0]=w.getYear(),f=w.getTime(),BigInt(isNaN(f)?-1:f/1e3)}function zl(f,w,x,k,E,A,N){return o?Pe(16,1,f,w,x,k,E,A,N):-52}function Cl(f,w,x,k,E,A){if(o)return Pe(17,1,f,w,x,k,E,A)}var Zr={},A1=()=>performance.timeOrigin+performance.now();function Ol(f,w){if(o)return Pe(18,1,f,w);if(Zr[f]&&(clearTimeout(Zr[f].id),delete Zr[f]),!w)return 0;var x=setTimeout(()=>{delete Zr[f],Xi(()=>Hl(f,performance.timeOrigin+performance.now()))},w);return Zr[f]={id:x,rc:w},0}function B1(f,w,x,k){f>>>=0,w>>>=0,x>>>=0,k>>>=0;var E=new Date().getFullYear(),A=new Date(E,0,1).getTimezoneOffset();E=new Date(E,6,1).getTimezoneOffset();var N=Math.max(A,E);H()[f>>>2>>>0]=60*N,C()[w>>>2>>>0]=+(A!=E),f=(w=Z=>{var ee=Math.abs(Z);return`UTC${0<=Z?"-":"+"}${String(Math.floor(ee/60)).padStart(2,"0")}${String(ee%60).padStart(2,"0")}`})(A),w=w(E),E<A?(Br(f,x,17),Br(w,k,17)):(Br(f,k,17),Br(w,x,17))}var R1=()=>Date.now();function M1(f,w,x){return 0<=f&&3>=f?(f===0?f=Date.now():f=performance.timeOrigin+performance.now(),B[x>>>0>>>3]=BigInt(Math.round(1e6*f)),0):28}var ta=[],Al=(f,w)=>{ta.length=0;for(var x;x=q()[f++>>>0];){var k=x!=105;w+=(k&=x!=112)&&w%8?4:0,ta.push(x==112?H()[w>>>2>>>0]:x==106?B[w>>>3]:x==105?C()[w>>>2>>>0]:De()[w>>>3>>>0]),w+=k?8:4}return ta};function D1(f,w,x){return f>>>=0,w=Al(w>>>0,x>>>0),Vi[f](...w)}function P1(f,w,x){return f>>>=0,w=Al(w>>>0,x>>>0),Vi[f](...w)}var N1=()=>{};function U1(f,w){return v(We(f>>>0,w>>>0))}var q1=()=>{throw jt+=1,"unwind"};function V1(){return 4294901760}var W1=()=>navigator.hardwareConcurrency;function L1(){return Ft("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function G1(f){f>>>=0;var w=q().length;if(f<=w||4294901760<f)return!1;for(var x=1;4>=x;x*=2){var k=w*(1+.2/x);k=Math.min(k,f+100663296);e:{k=(Math.min(4294901760,65536*Math.ceil(Math.max(f,k)/65536))-b.buffer.byteLength+65535)/65536|0;try{b.grow(k),$e();var E=1;break e}catch{}E=void 0}if(E)return!0}return!1}var qn=()=>(Ft("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Qr={},Bl=f=>{f.forEach(w=>{qn()})};function F1(){var f=Error().stack.toString().split(`
`);return f[0]=="Error"&&f.shift(),Bl(f),Qr.Mb=qn(),Qr.dc=f,Qr.Mb}function j1(f,w,x){if(f>>>=0,w>>>=0,Qr.Mb==f)var k=Qr.dc;else(k=Error().stack.toString().split(`
`))[0]=="Error"&&k.shift(),Bl(k);for(var E=3;k[E]&&qn()!=f;)++E;for(f=0;f<x&&k[f+E];++f)C()[w+4*f>>>2>>>0]=qn();return f}var ra,na={},Rl=()=>{if(!ra){var f,w={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(f in na)na[f]===void 0?delete w[f]:w[f]=na[f];var x=[];for(f in w)x.push(`${f}=${w[f]}`);ra=x}return ra};function Ml(f,w){if(o)return Pe(19,1,f,w);f>>>=0,w>>>=0;var x=0;return Rl().forEach((k,E)=>{var A=w+x;for(E=H()[f+4*E>>>2>>>0]=A,A=0;A<k.length;++A)re()[E++>>>0]=k.charCodeAt(A);re()[E>>>0]=0,x+=k.length+1}),0}function Dl(f,w){if(o)return Pe(20,1,f,w);f>>>=0,w>>>=0;var x=Rl();H()[f>>>2>>>0]=x.length;var k=0;return x.forEach(E=>k+=E.length+1),H()[w>>>2>>>0]=k,0}function Pl(f){return o?Pe(21,1,f):52}function Nl(f,w,x,k){return o?Pe(22,1,f,w,x,k):52}function Ul(f,w,x,k){return o?Pe(23,1,f,w,x,k):70}var H1=[null,[],[]];function ql(f,w,x,k){if(o)return Pe(24,1,f,w,x,k);w>>>=0,x>>>=0,k>>>=0;for(var E=0,A=0;A<x;A++){var N=H()[w>>>2>>>0],Z=H()[w+4>>>2>>>0];w+=8;for(var ee=0;ee<Z;ee++){var oe=q()[N+ee>>>0],we=H1[f];oe===0||oe===10?((f===1?_:v)(tl(we)),we.length=0):we.push(oe)}E+=Z}return H()[k>>>2>>>0]=E,0}o||function(){for(var f=n.numThreads-1;f--;)Xu();Li.unshift(()=>{or++,function(w){o?w():Promise.all(Ht.map(Qu)).then(w)}(()=>Wu())})}();for(var Vl=Array(256),Vn=0;256>Vn;++Vn)Vl[Vn]=String.fromCharCode(Vn);gl=Vl,Kt=n.BindingError=class extends Error{constructor(f){super(f),this.name="BindingError"}},n.InternalError=class extends Error{constructor(f){super(f),this.name="InternalError"}},Nt.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=()=>Nt.length/2-5-Ki.length;var de,K1=[Gi,ju,Yu,rl,nl,al,sl,ol,ul,ll,dl,cl,pl,fl,hl,ml,zl,Cl,Ol,Ml,Dl,Pl,Nl,Ul,ql];(async function(){function f(k,E){return de=k.exports,de=function(){var A=de,N={};for(let[Z,ee]of Object.entries(A))N[Z]=typeof ee=="function"?(...oe)=>{Pn.push(Z);try{return ee(...oe)}finally{J||(Pn.pop(),Et&&Qt===1&&Pn.length===0&&(Qt=0,jt+=1,Dn(Yl),typeof Fibers<"u"&&Fibers.sc()))}}:ee;return N}(),de=function(){var A=de,N=ee=>oe=>ee(oe)>>>0,Z=ee=>()=>ee()>>>0;return(A=Object.assign({},A)).Ea=N(A.Ea),A.gb=Z(A.gb),A.ib=N(A.ib),A.ub=N(A.ub),A.vb=Z(A.vb),A.__cxa_get_exception_ptr=N(A.__cxa_get_exception_ptr),A}(),Hu.push(de.jb),S=E,Wu(),de}or++;var w=Lu();if(n.instantiateWasm)return new Promise(k=>{n.instantiateWasm(w,(E,A)=>{f(E,A),k(E.exports)})});if(o)return new Promise(k=>{Ie=E=>{var A=new WebAssembly.Instance(E,Lu());k(f(A,E))}});Dt??=n.locateFile?n.locateFile?n.locateFile("ort-wasm-simd-threaded.jsep.wasm",g):g+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",import.meta.url).href,import.meta.url).href;try{var x=await async function(k){var E=Dt;if(!M&&typeof WebAssembly.instantiateStreaming=="function"&&!W(E))try{var A=fetch(E,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(A,k)}catch(N){v(`wasm streaming compile failed: ${N}`),v("falling back to ArrayBuffer instantiation")}return async function(N,Z){try{var ee=await async function(oe){if(!M)try{var we=await c(oe);return new Uint8Array(we)}catch{}if(oe==Dt&&M)oe=new Uint8Array(M);else{if(!p)throw"both async and sync fetching of the wasm failed";oe=p(oe)}return oe}(N);return await WebAssembly.instantiate(ee,Z)}catch(oe){v(`failed to asynchronously prepare wasm: ${oe}`),Ft(oe)}}(E,k)}(w);return f(x.instance,x.module)}catch(k){return r(k),Promise.reject(k)}})();var Wl=f=>(Wl=de.Ea)(f),Ll=()=>(Ll=de.Fa)();n._OrtInit=(f,w)=>(n._OrtInit=de.Ga)(f,w),n._OrtGetLastError=(f,w)=>(n._OrtGetLastError=de.Ha)(f,w),n._OrtCreateSessionOptions=(f,w,x,k,E,A,N,Z,ee,oe)=>(n._OrtCreateSessionOptions=de.Ia)(f,w,x,k,E,A,N,Z,ee,oe),n._OrtAppendExecutionProvider=(f,w,x,k,E)=>(n._OrtAppendExecutionProvider=de.Ja)(f,w,x,k,E),n._OrtAddFreeDimensionOverride=(f,w,x)=>(n._OrtAddFreeDimensionOverride=de.Ka)(f,w,x),n._OrtAddSessionConfigEntry=(f,w,x)=>(n._OrtAddSessionConfigEntry=de.La)(f,w,x),n._OrtReleaseSessionOptions=f=>(n._OrtReleaseSessionOptions=de.Ma)(f),n._OrtCreateSession=(f,w,x)=>(n._OrtCreateSession=de.Na)(f,w,x),n._OrtReleaseSession=f=>(n._OrtReleaseSession=de.Oa)(f),n._OrtGetInputOutputCount=(f,w,x)=>(n._OrtGetInputOutputCount=de.Pa)(f,w,x),n._OrtGetInputOutputMetadata=(f,w,x,k)=>(n._OrtGetInputOutputMetadata=de.Qa)(f,w,x,k),n._OrtFree=f=>(n._OrtFree=de.Ra)(f),n._OrtCreateTensor=(f,w,x,k,E,A)=>(n._OrtCreateTensor=de.Sa)(f,w,x,k,E,A),n._OrtGetTensorData=(f,w,x,k,E)=>(n._OrtGetTensorData=de.Ta)(f,w,x,k,E),n._OrtReleaseTensor=f=>(n._OrtReleaseTensor=de.Ua)(f),n._OrtCreateRunOptions=(f,w,x,k)=>(n._OrtCreateRunOptions=de.Va)(f,w,x,k),n._OrtAddRunConfigEntry=(f,w,x)=>(n._OrtAddRunConfigEntry=de.Wa)(f,w,x),n._OrtReleaseRunOptions=f=>(n._OrtReleaseRunOptions=de.Xa)(f),n._OrtCreateBinding=f=>(n._OrtCreateBinding=de.Ya)(f),n._OrtBindInput=(f,w,x)=>(n._OrtBindInput=de.Za)(f,w,x),n._OrtBindOutput=(f,w,x,k)=>(n._OrtBindOutput=de._a)(f,w,x,k),n._OrtClearBoundOutputs=f=>(n._OrtClearBoundOutputs=de.$a)(f),n._OrtReleaseBinding=f=>(n._OrtReleaseBinding=de.ab)(f),n._OrtRunWithBinding=(f,w,x,k,E)=>(n._OrtRunWithBinding=de.bb)(f,w,x,k,E),n._OrtRun=(f,w,x,k,E,A,N,Z)=>(n._OrtRun=de.cb)(f,w,x,k,E,A,N,Z),n._OrtEndProfiling=f=>(n._OrtEndProfiling=de.db)(f),n._JsepOutput=(f,w,x)=>(n._JsepOutput=de.eb)(f,w,x),n._JsepGetNodeName=f=>(n._JsepGetNodeName=de.fb)(f);var Wn=()=>(Wn=de.gb)(),zt=n._free=f=>(zt=n._free=de.hb)(f),Ln=n._malloc=f=>(Ln=n._malloc=de.ib)(f),ia=(f,w,x,k,E,A)=>(ia=de.lb)(f,w,x,k,E,A),Gl=()=>(Gl=de.mb)(),Fl=(f,w,x,k,E)=>(Fl=de.nb)(f,w,x,k,E),jl=f=>(jl=de.ob)(f),aa=f=>(aa=de.pb)(f),Hl=(f,w)=>(Hl=de.qb)(f,w),Kl=()=>(Kl=de.rb)(),Zl=(f,w)=>(Zl=de.sb)(f,w),Gn=f=>(Gn=de.tb)(f),sa=f=>(sa=de.ub)(f),oa=()=>(oa=de.vb)(),Ql=n.dynCall_ii=(f,w)=>(Ql=n.dynCall_ii=de.wb)(f,w),Xl=f=>(Xl=de.xb)(f),Yl=()=>(Yl=de.yb)(),Jl=f=>(Jl=de.zb)(f),ed=()=>(ed=de.Ab)();return n.stackSave=()=>oa(),n.stackRestore=f=>Gn(f),n.stackAlloc=f=>sa(f),n.setValue=function(f,w,x="i8"){switch(x.endsWith("*")&&(x="*"),x){case"i1":case"i8":re()[f>>>0]=w;break;case"i16":j()[f>>>1>>>0]=w;break;case"i32":C()[f>>>2>>>0]=w;break;case"i64":B[f>>>3]=BigInt(w);break;case"float":me()[f>>>2>>>0]=w;break;case"double":De()[f>>>3>>>0]=w;break;case"*":H()[f>>>2>>>0]=w;break;default:Ft(`invalid type for setValue: ${x}`)}},n.getValue=function(f,w="i8"){switch(w.endsWith("*")&&(w="*"),w){case"i1":case"i8":return re()[f>>>0];case"i16":return j()[f>>>1>>>0];case"i32":return C()[f>>>2>>>0];case"i64":return B[f>>>3];case"float":return me()[f>>>2>>>0];case"double":return De()[f>>>3>>>0];case"*":return H()[f>>>2>>>0];default:Ft(`invalid type for getValue: ${w}`)}},n.UTF8ToString=We,n.stringToUTF8=Br,n.lengthBytesUTF8=il,function f(){if(0<or)Hr=f;else if(o)t(n),Je();else{for(;0<Li.length;)Li.shift()(n);0<or?Hr=f:(n.calledRun=!0,J||(Je(),t(n)))}}(),n.PTR_SIZE=4,i}),m$=fs,Rf=globalThis.self?.name?.startsWith("em-pthread"),Rf&&fs()}),hs,So,Mf,tt,g$,ai,Df,Pf,ms,Nf,gs,_$,_s,y$,_u=X(()=>{gu(),hs=typeof location>"u"?void 0:location.origin,So=import.meta.url>"file:"&&import.meta.url<"file;",Mf=()=>{{if(So){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,hs).href}return import.meta.url}},tt=Mf(),g$=()=>{if(tt&&!tt.startsWith("blob:"))return tt.substring(0,tt.lastIndexOf("/")+1)},ai=(e,t)=>{try{let r=t??tt;return(r?new URL(e,r):new URL(e)).origin===hs}catch{return!1}},Df=(e,t)=>{let r=t??tt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Pf=(e,t)=>`${t??"./"}${e}`,ms=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Nf=async e=>(await import(e)).default,gs=(O3(),On(p$)).default,_$=async()=>{if(!tt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ai(tt))return[void 0,gs()];let e=await ms(tt);return[e,gs(e)]},_s=(A3(),On(h$)).default,y$=async(e,t,r)=>{if(!e&&!t&&_s&&tt&&ai(tt))return[void 0,_s];{let n="ort-wasm-simd-threaded.jsep.mjs",i=e??Df(n,t),a=r&&i&&!ai(i,t),s=a?await ms(i):i??Pf(n,t);return[a?s:void 0,await Nf(s)]}}}),ys,si,dn,ws,Uf,qf,Vf,yu,Be,Or=X(()=>{_u(),si=!1,dn=!1,ws=!1,Uf=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},qf=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Vf=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},yu=async e=>{if(si)return Promise.resolve();if(dn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ws)throw new Error("previous call to 'initializeWebAssembly()' failed.");dn=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Vf())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!qf())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=Uf();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i?.mjs,o=s?.href??s,u=i?.wasm,l=u?.href??u,d=e.wasmBinary,[c,p]=await y$(o,a,r>1),h=!1,m=[];if(t>0&&m.push(new Promise(g=>{setTimeout(()=>{h=!0,g()},t)})),m.push(new Promise((g,$)=>{let y={numThreads:r};if(d)y.wasmBinary=d;else if(l||a)y.locateFile=_=>l??a+_;else if(o&&o.indexOf("blob:")!==0)y.locateFile=_=>new URL(_,o).href;else if(c){let _=g$();_&&(y.locateFile=v=>_+v)}p(y).then(_=>{dn=!1,si=!0,ys=_,g(),c&&URL.revokeObjectURL(c)},_=>{dn=!1,ws=!0,$(_)})})),await Promise.race(m),h)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Be=()=>{if(si&&ys)return ys;throw new Error("WebAssembly is not initialized yet.")}}),vt,Oi,Ce,wu=X(()=>{Or(),vt=(e,t)=>{let r=Be(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},Oi=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")Oi(a,s+".",r,n);else if(typeof a=="string"||typeof a=="number")n(s,a.toString());else if(typeof a=="boolean")n(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ce=e=>{let t=Be(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let a=Number(t.getValue(i,n===4?"i32":"i64")),s=t.getValue(i+n,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),w$,B3=X(()=>{Or(),wu(),w$=e=>{let t=Be(),r=0,n=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=vt(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),r===0&&Ce("Can't create run options."),e?.extra!==void 0&&Oi(e.extra,"",new WeakSet,(s,o)=>{let u=vt(s,n),l=vt(o,n);t._OrtAddRunConfigEntry(r,u,l)!==0&&Ce(`Can't set a run config entry: ${s} - ${o}.`)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(s=>t._free(s)),a}}}),Wf,Lf,Gf,cn,Ff,$$,R3=X(()=>{Or(),wu(),Wf=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Lf=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Gf=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},cn=(e,t,r,n)=>{let i=vt(t,n),a=vt(r,n);Be()._OrtAddSessionConfigEntry(e,i,a)!==0&&Ce(`Can't set a session config entry: ${t} - ${r}.`)},Ff=async(e,t,r)=>{for(let n of t){let i=typeof n=="string"?n:n.name,a=[];switch(i){case"webnn":if(i="WEBNN",typeof n!="string"){let d=n?.deviceType;d&&cn(e,"deviceType",d,r)}break;case"webgpu":if(i="JS",typeof n!="string"){let d=n;if(d?.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);cn(e,"preferredLayout",d.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let s=vt(i,r),o=a.length,u=0,l=0;if(o>0){u=Be()._malloc(o*Be().PTR_SIZE),r.push(u),l=Be()._malloc(o*Be().PTR_SIZE),r.push(l);for(let d=0;d<o;d++)Be().setValue(u+d*Be().PTR_SIZE,a[d][0],"*"),Be().setValue(l+d*Be().PTR_SIZE,a[d][1],"*")}await Be()._OrtAppendExecutionProvider(e,s,u,l,o)!==0&&Ce(`Can't append execution provider: ${i}.`)}},$$=async e=>{let t=Be(),r=0,n=[],i=e||{};Gf(i);try{let a=Wf(i.graphOptimizationLevel??"all"),s=Lf(i.executionMode??"sequential"),o=typeof i.logId=="string"?vt(i.logId,n):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log serverity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof i.optimizedModelFilePath=="string"?vt(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,l,d),r===0&&Ce("Can't create session options."),i.executionProviders&&await Ff(r,i.executionProviders,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);cn(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let h=vt(c,n);t._OrtAddFreeDimensionOverride(r,h,p)!==0&&Ce(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&Oi(i.extra,"",new WeakSet,(c,p)=>{cn(r,c,p,n)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Ce("Can't release session options."),n.forEach(s=>t._free(s)),a}}}),br,Wt,vr,qi,Ai,$u,bu,ko,pe=X(()=>{br=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Wt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},vr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return r>0?Math.ceil(n*r):void 0},qi=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ai=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},$u=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",bu=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ko=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),vu,b$=X(()=>{gu(),vu=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let u=Math.ceil(n/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let l=u.byteLength;new Uint8Array(a,s,l).set(u),s+=l}return new Uint8Array(a,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),jf,Hf,Kf,Zf,xu,Qf,ve,Gt=X(()=>{pe(),jf=["V","I","W","E","F"],Hf=(e,t)=>{console.log(`[${jf[e]},${new Date().toISOString()}]${t}`)},xu=(e,t)=>{Kf=e,Zf=t},Qf=(e,t)=>{let r=Ai(e),n=Ai(Kf);r>=n&&Hf(r,typeof t=="function"?t():t)},ve=(...e)=>{Zf&&Qf(...e)}}),Xf,Gr,P,Bi,v$,x$,S$,he=X(()=>{Xf=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Gr=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(n<2||i<2)return;let o=Xf.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let u=n-o<0?1:e[n-o],l=i-o<0?1:t[i-o];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)s[a-o]=Math.max(u,l);else{if(d>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},P=class wi{static size(t){return wi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),a=n-1;for(;a>=0;){if(t[a]%r===0){i[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,r/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return wi.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return wi.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let a=r;a<n;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,a)=>i+r[a]+r[a+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},Bi=class kn{static adjustPoolAttributes(t,r,n,i,a,s){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<n.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=n[o]||s[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)kn.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],n[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,a,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return kn.computeShapeHelper(t,r,u,n,i,a,s,o),u}static computeConvOutputShape(t,r,n,i,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return kn.computeShapeHelper(!1,t,u,n,i,a,s,o),u}static computeShapeHelper(t,r,n,i,a,s,o,u){if(t)for(let l=0;l<r.length-2;l++)n.push(1);else for(let l=0;l<r.length-2;l++)n.push(kn.adjustPadAndReturnShape(r[l+2],i[l],a[l],s[l],o,l,l+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,i,a,s,o,u){let l=n*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-l)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((t+r-1)/r-1)*r+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),a[o]=d-a[s],Math.floor((t+d-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-l)/r+1)}},v$=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(n?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!Gr.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},x$=-34028234663852886e22,S$=34028234663852886e22}),Su,k$=X(()=>{pe(),Su=(e,t)=>new(qi(t))(e)}),$s,Io,bs,Yf,vs,Jf,xs,Ss,ks,eh,I$,M3=X(()=>{pe(),Gt(),$s=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Io=(e,t)=>{if(t==="int32")return e;let r=$s.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,a=new(qi(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},bs=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Yf=1,vs=()=>Yf++,Jf=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),xs=(e,t)=>{let r=$s.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},Ss=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return xs(this.dataType,this.tensorShape)}destroy(){ve("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=bs(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},ks=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),a;if(!i.opSupportLimits().input.dataTypes.includes(t)){if(a=Jf.get(t),!a||!i.opSupportLimits().input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);ve("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==xs(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Io(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ve("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?bs(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},eh=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=vs();return this.tensorTrackersById.set(e,new ks(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){ve("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ve("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),a=vs(),s=new Ss({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(a,new ks(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,n,i,a,s){let o=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(o,t,r)){ve("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}ve("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:n,writable:i,readable:a});return new Ss({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},I$=(...e)=>new eh(...e)}),pn,th,T$,D3=X(()=>{pe(),Or(),k$(),M3(),Gt(),pn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),th=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,a)=>i===n[a]&&e[i]===t[i])},T$=class{constructor(e){this.tensorManager=I$(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,xu(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ve("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ve("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ve("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>th(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ve("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let a=pn.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,n,i)}async createTemporaryTensor(e,t,r){ve("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=pn.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ve("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Su(r,t)}}registerMLTensor(e,t,r,n){let i=pn.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,i,n);return ve("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,n,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+r).buffer,d;switch(i.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(s){let c=Io(new Uint8Array(l),"int64");d=new Int32Array(c.buffer),i.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ve("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(i,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=this.mlContextBySessionId.get(e),i=pn.get(br(t));return typeof i>"u"?!1:r?!!n?.opSupportLimits().input.dataTypes.includes(i):!!n?.opSupportLimits().output.dataTypes.includes(i)}flush(){}}}),ku=X(()=>{}),Is,oi,ui,rh,nh,Ts,To,ih,E$,P3=X(()=>{Gt(),ku(),Is=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),oi=[],ui=e=>Math.ceil(Number(e)/16)*16,rh=e=>{for(let t=0;t<oi.length;t++){let r=oi[t];if(e<=r)return r}return Math.ceil(e/16)*16},nh=1,Ts=()=>nh++,To=async(e,t,r,n)=>{let i=ui(r),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},ih=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Is)oi.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,a=ui(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,i)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),o.destroy(),ve("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=ui(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return ve("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Ts();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),ve("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ve("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=rh(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let s={id:Ts(),type:0,buffer:n};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ve("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ve("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await To(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Is.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ve("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},E$=(...e)=>new ih(...e)}),ah,Ee,Ve=X(()=>{ah=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ee=e=>new ah(e)}),Fr,li,Ge,Ze,le,Ue,Eo,qr,ir,se,fn,U,ne,z$,Iu,sh,C$,ye=X(()=>{pe(),he(),Fr=64,li=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ge=(e,t=1)=>{let r=li(e,t);return typeof r=="string"?r:r[0]},Ze=(e,t=1)=>{let r=li(e,t);return typeof r=="string"?r:r[1]},le=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:P.computeStrides(r)})}),t},Ue=e=>e%4===0?4:e%2===0?2:1,Eo=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,qr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ir=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,se=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,fn=(e,t,r,n,i)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=li(t,i),d=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:d,storage:c,tensor:t},h=q=>typeof q=="string"?q:`${q}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},g=a?"uniforms.":"",$=`${g}${e}_shape`,y=`${g}${e}_strides`,_="";for(let q=0;q<s-1;q++)_+=`
    let dim${q} = current / ${se(y,q,s)};
    let rest${q} = current % ${se(y,q,s)};
    indices[${q}] = dim${q};
    current = rest${q};
    `;_+=`indices[${s-1}] = current;`;let v=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${_}
    return indices;
  }`,b=q=>(m.offsetToIndices=!0,s<2?q:`o2i_${e}(${q})`),S=[];if(s>=2)for(let q=s-1;q>=0;q--)S.push(`${se(y,q,s)} * (indices[${q}])`);let I=s<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${S.join("+")};
  }`,T=q=>(m.indicesToOffset=!0,s<2?q:`i2o_${e}(${q})`),z=(...q)=>s===0?"0u":`${p.indices}(${q.map(h).join(",")})`,O=(q,j)=>s<2?`${q}`:`${se(q,j,s)}`,R=(q,j,K)=>s<2?`${q}=${K};`:`${se(q,j,s)}=${K};`,G={},L=(q,j)=>{m.broadcastedIndicesToOffset=!0;let K=`${j.name}broadcastedIndicesTo${e}Offset`;if(K in G)return`${K}(${q})`;let C=[];for(let H=s-1;H>=0;H--){let me=j.indicesGet("outputIndices",H+j.rank-s);C.push(`${O(y,H)} * (${me} % ${O($,H)})`)}return G[K]=`fn ${K}(outputIndices: ${j.type.indices}) -> u32 {
             return ${C.length>0?C.join("+"):"0u"};
           }`,`${K}(${q})`},Q=(q,j)=>(()=>{if(p.storage===p.value)return`${e}[${q}]=${j};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${q}]=vec2<u32>(u32(${j}), select(0u, 0xFFFFFFFFu, ${j} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${q}]=vec2<u32>(u32(${j}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${q}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${j}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),B=q=>(()=>{if(p.storage===p.value)return`${e}[${q}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${q}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${q}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${q}] & 0xFFu), bool(${e}[${q}] & 0xFF00u), bool(${e}[${q}] & 0xFF0000u), bool(${e}[${q}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),te=s<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${d} {
    return ${B(`i2o_${e}(indices)`)};
  }`,F=s<2?"":(()=>{let q=o.map(K=>`d${K}: u32`).join(", "),j=o.map(K=>`d${K}`).join(", ");return`
  fn get_${e}(${q}) -> ${d} {
    return get_${e}ByIndices(${z(j)});
  }`})(),M=(...q)=>{if(q.length!==s)throw new Error(`indices length must be ${s}`);let j=q.map(h).join(",");return s===0?B("0u"):s===1?B(j[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${j})`)},J=q=>s<2?B(q):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${q})`),W=s<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${d}) {
    ${Q(`i2o_${e}(indices)`,"value")}
  }`,re=s<2?"":(()=>{let q=o.map(K=>`d${K}: u32`).join(", "),j=o.map(K=>`d${K}`).join(", ");return`
  fn set_${e}(${q}, value: ${d}) {
    set_${e}ByIndices(${z(j)}, value);
  }`})();return{impl:()=>{let q=[],j=!1;return m.offsetToIndices&&(q.push(v),j=!0),m.indicesToOffset&&(q.push(I),j=!0),m.broadcastedIndicesToOffset&&(Object.values(G).forEach(K=>q.push(K)),j=!0),m.set&&(q.push(re),j=!0),m.setByIndices&&(q.push(W),j=!0),m.get&&(q.push(F),j=!0),m.getByIndices&&(q.push(te),j=!0),!a&&j&&q.unshift(`const ${$} = ${p.indices}(${r.join(",")});`,`const ${y} = ${p.indices}(${P.computeStrides(r).join(",")});`),q.join(`
`)},type:p,offsetToIndices:b,indicesToOffset:T,broadcastedIndicesToOffset:L,indices:z,indicesGet:O,indicesSet:R,set:(...q)=>{if(q.length!==s+1)throw new Error(`indices length must be ${s}`);let j=q[s];if(typeof j!="string")throw new Error("value must be string");let K=q.slice(0,s).map(h).join(",");return s===0?Q("0u",j):s===1?Q(K[0],j):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${K}, ${j})`)},setByOffset:Q,setByIndices:(q,j)=>s<2?Q(q,j):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${q}, ${j});`),get:M,getByOffset:B,getByIndices:J,usage:n,name:e,strides:y,shape:$,rank:s}},U=(e,t,r,n=1)=>fn(e,t,r,"input",n),ne=(e,t,r,n=1)=>fn(e,t,r,"output",n),z$=(e,t,r)=>fn(e,t,r,"atomicOutput",1),Iu=(e,t,r,n=1)=>fn(e,t,r,"internal",n),sh=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Fr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},C$=(e,t)=>new sh(e,t)}),oh,Es,uh,lh,dh,ch,at,O$,A$,sr=X(()=>{pe(),he(),Ve(),ye(),oh=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Es=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),uh=(e,t)=>P.sortBasedOnPerm(e,Es(e.length,t)),lh=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},dh=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},ch=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},at=(e,t)=>{let r=e.dataType,n=e.dims.length,i=Es(n,t),a=uh(e.dims,i),s=e.dims,o=a,u=n<2||ch(i,e.dims),l;if(u)return l=m=>{let g=U("input",r,s,4),$=ne("output",r,o,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(g,$)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=P.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:d,newPerm:c}=dh(e.dims,i),p=P.areEqual(c,[2,3,1]),h=P.areEqual(c,[3,1,2]);if(d.length===2||p||h){s=p?[d[0],d[1]*d[2]]:h?[d[0]*d[1],d[2]]:d,o=[s[1],s[0]];let m=16;return l=g=>{let $=U("a",r,s.length),y=ne("output",r,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables($,y)}
  var<workgroup> tile : array<array<${y.type.value}, ${m+1}>, ${m}>;
  ${g.mainStart([m,m,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${m} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${m}u + local_id.x;
    let input_row = workgroup_id_x * ${m}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${$.getByIndices(`${$.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${m}u + local_id.x;
    let output_row = workgroup_id_y * ${m}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${y.setByIndices(`${y.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=P.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/m),y:Math.ceil(o[0]/m)},programUniforms:[{type:12,data:g},...le(s,o)]}},getShaderSource:l}}return l=m=>{let g=U("a",r,s.length),$=ne("output",r,o.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(g,$)}

  ${lh(i,n,g,$)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=P.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...le(s,o)]}},getShaderSource:l}},O$=(e,t)=>{oh(e.inputs,t.perm),e.compute(at(e.inputs[0],t.perm))},A$=e=>Ee({perm:e.perm})}),ph,fh,hh,mh,gh,_h,yh,wh,$h,bh,gt,B$,R$,M$,D$,P$,N$,U$,q$,V$,W$,N3=X(()=>{pe(),he(),ye(),Tu(),sr(),ph={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},fh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},hh={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},mh={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},gh=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},_h=(e,t)=>{let r=[],n=e.length;for(let a=0;a<n;a++)t.indexOf(a)===-1&&r.push(e[a]);let i=t.map(a=>e[a]);return[r,i]},yh=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?n.push(e[i++]):n.push(1);return n},wh=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},$h=(e,t)=>{let r=[];if(!wh(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},bh=(e,t,r,n,i,a,s)=>{let o=r[0].dims,u=P.size(a),l=P.size(s),d=U("_A",r[0].dataType,o),c=ne("output",i,a),p=64;u===1&&(p=256);let h=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,m=g=>`
        ${g.registerUniform("reduceSize","u32").declareVariables(d,c)}
        ${h}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${g.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${hh[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${ph[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${fh[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${n==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${mh[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},gt=(e,t,r,n)=>{let i=e.inputs.length===1?r:zo(e.inputs,r),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((h,m)=>m));let s=P.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=$h(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(at(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=gh(o.length,u.dims.length));let[d,c]=_h(u.dims,o),p=d;i.keepDims&&(p=yh(d,s)),e.compute(bh(t,i.cacheKey,[u],n,e.inputs[0].dataType,p,c),{inputs:[u]})},B$=(e,t)=>{gt(e,"ReduceMeanShared",t,"mean")},R$=(e,t)=>{gt(e,"ReduceL1Shared",t,"l1")},M$=(e,t)=>{gt(e,"ReduceL2Shared",t,"l2")},D$=(e,t)=>{gt(e,"ReduceLogSumExpShared",t,"logSumExp")},P$=(e,t)=>{gt(e,"ReduceMaxShared",t,"max")},N$=(e,t)=>{gt(e,"ReduceMinShared",t,"min")},U$=(e,t)=>{gt(e,"ReduceProdShared",t,"prod")},q$=(e,t)=>{gt(e,"ReduceSumShared",t,"sum")},V$=(e,t)=>{gt(e,"ReduceSumSquareShared",t,"sumSquare")},W$=(e,t)=>{gt(e,"ReduceLogSumShared",t,"logSum")}}),_t,vh,Ri,zo,yt,xh,Sh,kh,Ih,Th,Eh,zh,Ch,Oh,Ah,wt,L$,G$,F$,j$,H$,K$,Z$,Q$,X$,Y$,Tu=X(()=>{pe(),he(),Ve(),ye(),N3(),_t=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},vh=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ri=(e,t,r,n,i,a,s=!1,o=!1)=>{let u=[],l=r[0].dims,d=l.length,c=P.normalizeAxes(i,d),p=!o&&c.length===0;l.forEach((g,$)=>{p||c.indexOf($)>=0?s&&u.push(1):u.push(g)});let h=u.length,m=P.size(u);return{name:e,shaderCache:t,getShaderSource:g=>{let $=[],y=U("_A",r[0].dataType,d),_=ne("output",a,h),v=n(y,_,c),b=v[2];for(let S=0,I=0;S<d;S++)p||c.indexOf(S)>=0?(s&&I++,b=`for(var j${S}: u32 = 0; j${S} < ${l[S]}; j${S}++) {
                  ${v[2].includes("last_index")?`let last_index = j${S};`:""}
                  ${y.indicesSet("input_indices",S,`j${S}`)}
                  ${b}
                }`):($.push(`${y.indicesSet("input_indices",S,_.indicesGet("output_indices",I))};`),I++);return`

        ${g.registerUniform("output_size","u32").declareVariables(y,_)}

        ${g.mainStart()}
          ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${y.type.indices};
          let output_indices = ${_.offsetToIndices("global_idx")};

          ${$.join(`
`)}
          ${v[0]}       // init ops for reduce max/min
          ${v[1]}
          ${b}
          ${v[3]}
          ${v.length===4?_.setByOffset("global_idx","value"):v.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...le(l,u)]})}},zo=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),Ee({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},yt=(e,t,r,n)=>{let i=e.inputs,a=i.length===1?r:zo(i,r);e.compute(Ri(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?vh:n,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},xh=(e,t)=>{_t(e.inputs),yt(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Sh=(e,t)=>{_t(e.inputs),yt(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},kh=(e,t)=>{_t(e.inputs),yt(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Ih=(e,t)=>{_t(e.inputs),yt(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Th=(e,t)=>{_t(e.inputs),yt(e,"ReduceMax",t,(r,n,i)=>{let a=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Eh=(e,t)=>{_t(e.inputs),yt(e,"ReduceMean",t,(r,n,i)=>{let a=1;for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${a});`]})},zh=(e,t)=>{_t(e.inputs),yt(e,"ReduceMin",t,(r,n,i)=>{let a=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Ch=(e,t)=>{_t(e.inputs),yt(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Oh=(e,t)=>{_t(e.inputs),yt(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Ah=(e,t)=>{_t(e.inputs),yt(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},wt=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?n*=e[a]:i*=e[a];return i<32&&n>1024},L$=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eh(e,t):B$(e,t)},G$=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sh(e,t):R$(e,t)},F$=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kh(e,t):M$(e,t)},j$=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ih(e,t):D$(e,t)},H$=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Th(e,t):P$(e,t)},K$=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zh(e,t):N$(e,t)},Z$=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ch(e,t):U$(e,t)},Q$=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oh(e,t):q$(e,t)},X$=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ah(e,t):V$(e,t)},Y$=(e,t)=>{wt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xh(e,t):W$(e,t)}}),zs,J$,eb,Co,U3=X(()=>{pe(),Ve(),Tu(),zs=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},J$=(e,t)=>{zs(e.inputs);let r=(n,i,a)=>{let s=[];for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ri("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},eb=(e,t)=>{zs(e.inputs);let r=(n,i,a)=>{let s=[];for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ri("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Co=e=>Ee(e)}),Bh,di,Rh,Mh,Dh,An,Ph,tb,Eu=X(()=>{pe(),he(),ku(),ye(),Bh=(e,t)=>{let r=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],l=r.dims[1],d=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,h=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let v of t.qkvHiddenSizes)if(v%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],h=t.qkvHiddenSizes[2]}let m=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+h)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let g=0;if(s){if(p!==h)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(g=s.dims[3])}let $=m+g,y=-1,_=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:$,maxSequenceLength:y,inputHiddenSize:d,hiddenSize:c,vHiddenSize:h,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(h/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},di=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Rh=(e,t,r,n,i,a,s,o)=>{let u=Ue(s?1:a),l=64,d=a/u;d<l&&(l=32);let c=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:d},{type:12,data:c}],h=Ge(e.dataType,u),m=Ze(1,u),g=["type"];s&&g.push("type"),o&&g.push("type");let $=y=>{let _=ne("x",e.dataType,e.dims,u),v=[_],b=s?U("seq_lens",s.dataType,s.dims):void 0;b&&v.push(b);let S=o?U("total_sequence_length_input",o.dataType,o.dims):void 0;S&&v.push(S);let I=Ze(e.dataType),T=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${y.registerUniforms(T).declareVariables(...v)}
  ${y.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${di(b,S,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${m}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${_.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${_.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${_.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${h};${u}`,inputDependencies:g},getShaderSource:$,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:p})}},Mh=(e,t,r,n,i,a,s,o,u)=>{let l=s+a.kvSequenceLength,d=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&n,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,h=c?[a.batchSize,p,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,g=a.scale===0?1/Math.sqrt(a.headSize):a.scale,$=Ue(a.headSize),y=a.headSize/$,_=12,v={x:Math.ceil(l/_),y:Math.ceil(a.sequenceLength/_),z:a.batchSize*a.numHeads},b=[{type:12,data:a.sequenceLength},{type:12,data:y},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:g},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:m}],S=c&&n&&P.size(n.dims)>0,I=["type","type"];S&&I.push("type"),i&&I.push("type"),o&&I.push("type"),u&&I.push("type");let T=[{dims:d,dataType:t.dataType,gpuDataType:0}];c&&T.push({dims:h,dataType:t.dataType,gpuDataType:0});let z=O=>{let R=U("q",t.dataType,t.dims,$),G=U("key",r.dataType,r.dims,$),L=[R,G];if(S){let W=U("past_key",n.dataType,n.dims,$);L.push(W)}i&&L.push(U("attention_bias",i.dataType,i.dims));let Q=o?U("seq_lens",o.dataType,o.dims):void 0;Q&&L.push(Q);let B=u?U("total_sequence_length_input",u.dataType,u.dims):void 0;B&&L.push(B);let te=ne("output",t.dataType,d),F=[te];c&&F.push(ne("present_key",t.dataType,h,$));let M=Ze(1,$),J=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;

  var<workgroup> tileQ: array<${R.type.storage}, ${_*_}>;
  var<workgroup> tileK: array<${R.type.storage}, ${_*_}>;
  ${O.registerUniforms(J).declareVariables(...L,...F)}
  ${O.mainStart([_,_,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${di(Q,B,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${S&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${M}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${S&&c?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${c?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${M}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch($){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${$}`)}})()};
        output[outputIdx] = ${te.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${$};${i!==void 0};${n!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:T,dispatchGroup:v,programUniforms:b}),getShaderSource:z}},Dh=(e,t,r,n,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,d=i.vHiddenSize*l,c=e>1&&n,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,h=c?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,d],g=12,$={x:Math.ceil(i.vHeadSize/g),y:Math.ceil(i.sequenceLength/g),z:i.batchSize*i.numHeads},y=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:d},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=c&&n&&P.size(n.dims)>0,v=["type","type"];_&&v.push("type"),s&&v.push("type"),o&&v.push("type");let b=[{dims:m,dataType:t.dataType,gpuDataType:0}];c&&b.push({dims:h,dataType:t.dataType,gpuDataType:0});let S=I=>{let T=U("probs",t.dataType,t.dims),z=U("v",r.dataType,r.dims),O=[T,z];_&&O.push(U("past_value",n.dataType,n.dims));let R=s?U("seq_lens",s.dataType,s.dims):void 0;s&&O.push(R);let G=o?U("total_sequence_length_input",o.dataType,o.dims):void 0;o&&O.push(G);let L=[ne("output",t.dataType,m)];c&&L.push(ne("present_value",t.dataType,h));let Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${g}u;
  var<workgroup> tileQ: array<${T.type.value}, ${g*g}>;
  var<workgroup> tileV: array<${T.type.value}, ${g*g}>;
  ${I.registerUniforms(Q).declareVariables(...O,...L)}
  ${I.mainStart([g,g,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${di(R,G,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${T.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&c?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${c?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:b,dispatchGroup:$,programUniforms:y}),getShaderSource:S}},An=(e,t,r,n,i,a,s,o,u,l,d=void 0,c=void 0)=>{let p=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),h=p>1?l.pastSequenceLength:0,m=h+l.kvSequenceLength,g=u&&P.size(u.dims)>0?u:void 0,$=[t,r];p>1&&s&&P.size(s.dims)>0&&$.push(s),g&&$.push(g),d&&$.push(d),c&&$.push(c);let y=e.compute(Mh(p,t,r,s,g,l,h,d,c),{inputs:$,outputs:p>1?[-1,1]:[-1]})[0];e.compute(Rh(y,l.batchSize,l.numHeads,h,l.sequenceLength,m,d,c),{inputs:d&&c?[y,d,c]:[y],outputs:[]});let _=[y,n];p>1&&o&&P.size(o.dims)>0&&_.push(o),d&&_.push(d),c&&_.push(c),e.compute(Dh(p,y,n,o,l,h,d,c),{inputs:_,outputs:p>1?[0,2]:[0]})},Ph=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=c=>{let p=ne("output_q",u[0].dataType,r),h=ne("output_k",u[0].dataType,r),m=ne("output_v",u[0].dataType,r),g=U("input",u[0].dataType,u[0].dims),$=U("weight",u[1].dataType,u[1].dims),y=U("bias",u[2].dataType,u[2].dims),_=g.type.storage,v=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${_}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${_}, ${s*s}>;
  var<workgroup> tileWeightK: array<${_}, ${s*s}>;
  var<workgroup> tileWeightV: array<${_}, ${s*s}>;
  ${c.registerUniforms(v).declareVariables(g,$,y,p,h,m)}
  ${c.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${_}(0);
    var valueK = ${_}(0);
    var valueV = ${_}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},tb=(e,t)=>{let r=Bh(e.inputs,t),[n,i,a]=Ph(e,r);return An(e,n,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Nh,Uh,qh,rb,q3=X(()=>{It(),pe(),he(),Ve(),ye(),Nh=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,a)=>{let s=i.length;if(s!==n.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==n[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Uh=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,a=e[0].dims,s=n?Ue(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=P.size(a)/s,l=n,d=l?a.length:a,c=U("x",e[0].dataType,e[0].dims,s),p=U("scale",e[1].dataType,e[1].dims,o),h=U("bias",e[2].dataType,e[2].dims,o),m=U("inputMean",e[3].dataType,e[3].dims,o),g=U("inputVar",e[4].dataType,e[4].dims,o),$=ne("y",e[0].dataType,d,s),y=()=>{let v="";if(n)v=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")v=`
            ${$.indicesSet("outputIndices","0","0")}
            let cOffset = ${$.indicesToOffset("outputIndices")};`;else{v=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let b=1;b<p.rank;b++)v+=`cIndices[${b}] = outputIndices[${b}];`;v+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return v},_=v=>`
  const epsilon = ${r};
  ${v.registerUniform("outputSize","u32").declareVariables(c,p,h,m,g,$)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${$.offsetToIndices(`global_idx * ${s}`)};
    ${y()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${h.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${g.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${$.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...le(a)]:[{type:12,data:u}]})}},qh=e=>Ee(e),rb=(e,t)=>{let{inputs:r,outputCount:n}=e,i=qh({...t,outputCount:n});if(Me.webgpu.validateInputContent&&Nh(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Uh(r,i))}}),Vh,Wh,nb,V3=X(()=>{he(),ye(),Vh=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Wh=e=>{let t=e[0].dims,r=e[0].dims[2],n=P.size(t)/4,i=e[0].dataType,a=U("input",i,t,4),s=U("bias",i,[r],4),o=U("residual",i,t,4),u=ne("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:l=>`
  const channels = ${r}u / 4;
  ${l.declareVariables(a,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},nb=e=>{Vh(e.inputs),e.compute(Wh(e.inputs))}}),Lh,ke,ib,ab,sb,ob,ub,lb,db,cb,pb,Gh,fb,hb,mb,gb,In,_b,$i,yb,wb,$b,bb,vb,xb,Sb,kb,Ib,Tb,Eb,zb,Cb,Ob,Ab,Bb,Cs,Rb,Oo,Ao,Mb,Db,Pb,Fh,jh,Nb,zu=X(()=>{pe(),he(),Ve(),ye(),Lh=(e,t,r,n,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=U("inputData",r,[o],4),d=ne("outputData",n,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(l,d)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},ke=(e,t,r,n,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(P.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Lh(l,P.size(e.dims),e.dataType,a,r,n,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(P.size(l[0].dims)/64/4)},programUniforms:u})}},ib=e=>{e.compute(ke(e.inputs[0],"Abs","abs"))},ab=e=>{e.compute(ke(e.inputs[0],"Acos","acos"))},sb=e=>{e.compute(ke(e.inputs[0],"Acosh","acosh"))},ob=e=>{e.compute(ke(e.inputs[0],"Asin","asin"))},ub=e=>{e.compute(ke(e.inputs[0],"Asinh","asinh"))},lb=e=>{e.compute(ke(e.inputs[0],"Atan","atan"))},db=e=>{e.compute(ke(e.inputs[0],"Atanh","atanh"))},cb=e=>Ee(e),pb=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ke(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Gh=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ee({min:t,max:r})},fb=(e,t)=>{let r=t||Gh(e.inputs),n=Ze(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},hb=e=>{e.compute(ke(e.inputs[0],"Ceil","ceil"))},mb=e=>{e.compute(ke(e.inputs[0],"Cos","cos"))},gb=e=>{e.compute(ke(e.inputs[0],"Cosh","cosh"))},In=e=>Ee(e),_b=(e,t)=>{let r=Ze(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},$i=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,yb=e=>{let t=Ze(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,$i(t)))},wb=e=>{e.compute(ke(e.inputs[0],"Exp","exp"))},$b=e=>{e.compute(ke(e.inputs[0],"Floor","floor"))},bb=e=>{let t=Ze(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,$i(t)))},vb=(e,t)=>{let r=Ze(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},xb=e=>{e.compute(ke(e.inputs[0],"Not",t=>`!${t}`))},Sb=e=>{e.compute(ke(e.inputs[0],"Neg",t=>`-${t}`))},kb=e=>{e.compute(ke(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ib=e=>{let t=Ze(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Tb=e=>{e.compute(ke(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Eb=e=>Ee(e),zb=(e,t)=>{let r=Ze(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Cb=e=>{e.compute(ke(e.inputs[0],"Sin","sin"))},Ob=e=>{e.compute(ke(e.inputs[0],"Sinh","sinh"))},Ab=e=>{e.compute(ke(e.inputs[0],"Sqrt","sqrt"))},Bb=e=>{e.compute(ke(e.inputs[0],"Tan","tan"))},Cs=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Rb=e=>{e.compute(ke(e.inputs[0],"Tanh",Cs))},Oo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Cs("v")};
}
`,Ao=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Mb=e=>{let t=Ze(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"FastGelu",Ao,Oo(t),void 0,e.inputs[0].dataType))},Db=(e,t)=>{let r=Ze(e.inputs[0].dataType);return e.compute(ke(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Pb=e=>{e.compute(ke(e.inputs[0],"Log","log"))},Fh=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,jh=e=>`quick_gelu_impl(${e})`,Nb=(e,t)=>{let r=Ze(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"QuickGelu",jh,Fh(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Hh,Kh,Ub,W3=X(()=>{he(),ye(),zu(),Hh=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Kh=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=U("input",e[0].dataType,e[0].dims,4),n=U("bias",e[0].dataType,[e[0].dims[2]],4),i=ne("output",e[0].dataType,t,4),a=P.size(t)/4,s=Ge(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,i)}

  ${$i(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Ub=e=>{Hh(e.inputs),e.compute(Kh(e.inputs))}}),Zh,Qh,$t,qb,Vb,Wb,Lb,Gb,Fb,jb,Hb,Kb,Zb,L3=X(()=>{pe(),he(),ye(),Zh=(e,t,r,n,i,a,s,o,u,l,d,c)=>{let p,h;typeof o=="string"?p=h=(_,v)=>`${o}((${_}),(${v}))`:typeof o=="function"?p=h=o:(p=o.scalar,h=o.vector);let m=ne("outputData",d,n.length,4),g=U("aData",u,t.length,4),$=U("bData",l,r.length,4),y;if(i)if(a){let _=P.size(t)===1,v=P.size(r)===1,b=t.length>0&&t[t.length-1]%4===0,S=r.length>0&&r[r.length-1]%4===0;_||v?y=m.setByOffset("global_idx",h(_?`${g.type.value}(${g.getByOffset("0")}.x)`:g.getByOffset("global_idx"),v?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"))):y=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${g.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${$.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",h(s||b?g.getByOffset("offsetA / 4u"):`${g.type.value}(${g.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||S?$.getByOffset("offsetB / 4u"):`${$.type.value}(${$.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else y=m.setByOffset("global_idx",h(g.getByOffset("global_idx"),$.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let _=(v,b,S="")=>{let I=`aData[indexA${b}][componentA${b}]`,T=`bData[indexB${b}][componentB${b}]`;return`
            let outputIndices${b} = ${m.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offsetA${b} = ${g.broadcastedIndicesToOffset(`outputIndices${b}`,m)};
            let offsetB${b} = ${$.broadcastedIndicesToOffset(`outputIndices${b}`,m)};
            let indexA${b} = offsetA${b} / 4u;
            let indexB${b} = offsetB${b} / 4u;
            let componentA${b} = offsetA${b} % 4u;
            let componentB${b} = offsetB${b} % 4u;
            ${v}[${b}] = ${S}(${p(I,T)});
          `};d===9?y=`
            var data = vec4<u32>(0);
            ${_("data",0,"u32")}
            ${_("data",1,"u32")}
            ${_("data",2,"u32")}
            ${_("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:y=`
            ${_("outputData[global_idx]",0)}
            ${_("outputData[global_idx]",1)}
            ${_("outputData[global_idx]",2)}
            ${_("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(g,$,m)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${y}
      }`},Qh=(e,t,r,n,i,a,s=r.dataType)=>{let o=r.dims.map(g=>Number(g)??1),u=n.dims.map(g=>Number(g)??1),l=!P.areEqual(o,u),d=o,c=P.size(o),p=!1,h=!1,m=[l];if(l){let g=Gr.calcShape(o,u,!1);if(!g)throw new Error("Can't perform binary op on the given tensors");d=g.slice(),c=P.size(d);let $=P.size(o)===1,y=P.size(u)===1,_=o.length>0&&o[o.length-1]%4===0,v=u.length>0&&u[u.length-1]%4===0;m.push($),m.push(y),m.push(_),m.push(v);let b=1;for(let S=1;S<d.length;S++){let I=o[o.length-S],T=u[u.length-S];if(I===T)b*=I;else break}b%4===0?(h=!0,p=!0):($||y||_||v)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(g=>g.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:g=>Zh(g,o,u,d,p,l,h,i,r.dataType,n.dataType,s,a),getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(P.size(d)/4)},...le(o,u,d)]})}},$t=(e,t,r,n,i,a)=>{e.compute(Qh(t,i??"",e.inputs[0],e.inputs[1],r,n,a))},qb=e=>{$t(e,"Add",(t,r)=>`${t}+${r}`)},Vb=e=>{$t(e,"Div",(t,r)=>`${t}/${r}`)},Wb=e=>{$t(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Lb=e=>{$t(e,"Mul",(t,r)=>`${t}*${r}`)},Gb=e=>{let t=U("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;$t(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Fb=e=>{$t(e,"Sub",(t,r)=>`${t}-${r}`)},jb=e=>{$t(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Hb=e=>{$t(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Kb=e=>{$t(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Zb=e=>{$t(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Xh,Yh,Jh,em,Qb,Xb,G3=X(()=>{pe(),he(),Ve(),ye(),Xh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,a=n.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==n.dims[l])throw new Error("non concat dimensions must match")})}})},Yh=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Jh=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(a):i===0?n.push(`if (inputIndex == ${i}u) { ${a} }`):i===r-1?n.push(`else { ${a} }`):n.push(`else if (inputIndex == ${i}) { ${a} }`)}return n.join(`
`)},em=(e,t,r,n)=>{let i=P.size(r),a=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],d=[{type:12,data:i}];for(let g=0;g<e.length;++g)o+=e[g].dims[t],a[g]=o,l.push(e[g].dims.length),s[g]=U(`input${g}`,n,l[g]),u.push("rank"),d.push({type:12,data:a[g]});for(let g=0;g<e.length;++g)d.push(...le(e[g].dims));d.push(...le(r));let c=ne("output",n,r.length),p=c.indicesGet("indices",t),h=Array.from(Array(a.length).keys()).map(g=>`uniforms.sizeInConcatAxis${g}`).join(","),m=g=>`

  ${(()=>{g.registerUniform("outputSize","u32");for(let $=0;$<e.length;$++)g.registerUniform(`sizeInConcatAxis${$}`,"u32");return g.declareVariables(...s,c)})()}

  ${Yh(a.length,h)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${h});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Jh(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:m}},Qb=(e,t)=>{let r=e.inputs,n=r[0].dims,i=P.normalizeAxis(t.axis,n.length);Xh(r,i);let a=n.slice();a[i]=r.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=r.filter(o=>P.size(o.dims)>0);e.compute(em(s,i,a,r[0].dataType),{inputs:s})},Xb=e=>Ee({axis:e.axis})}),Ir,Tr,Er,Cu,Ar=X(()=>{pe(),he(),Ir=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Tr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Er=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Cu=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,n]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=e?.activation_params||[x$,S$];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),je,Yb,Ou=X(()=>{je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Yb=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Jb,F3=X(()=>{Jb=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),zn,Au,Bu=X(()=>{pe(),he(),ye(),Ar(),zn=(e,t,r,n,i)=>{let a=n-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${se(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,se(i,o+a,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Au=(e,t,r,n,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],d=s[s.length-1],c=Ue(l),p=Ue(d),h=Ue(u),m=P.size(r)/c/h,g=e.length>2,$=n?n.slice(0,-2):r.slice(0,-2),y=[P.size($),u,l],_=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:d}];Tr(t,_),_.push(...le($,s,o)),g&&_.push(...le(e[2].dims)),_.push(...le(y));let v=b=>{let S=Iu("batch_dims",e[0].dataType,$.length),I=U("a",e[0].dataType,s.length,p),T=U("b",e[1].dataType,o.length,c),z=ne("output",e[0].dataType,y.length,c),O=Ge(z.type.tensor),R=Ir(t,z.type.value,O),G=[I,T],L="";if(g){let te=i?c:1;G.push(U("bias",e[2].dataType,e[2].dims.length,te)),L=`${i?`value += bias[col / ${te}];`:`value += ${z.type.value}(bias[row + i]);`}`}let Q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Er(t,Q);let B=()=>{let te=`var a_data: ${I.type.value};`;for(let F=0;F<p;F++)te+=`
              let b_data${F} = b[(b_offset + (k + ${F}) * uniforms.N + col) / ${c}];`;for(let F=0;F<h;F++){te+=`a_data = a[(a_offset + (row + ${F}) * uniforms.K + k) / ${p}];`;for(let M=0;M<p;M++)te+=`
            values[${F}] = fma(${T.type.value}(a_data${p===1?"":`[${M}]`}), b_data${M}, values[${F}]);
`}return te};return`
  ${b.registerUniforms(Q).registerInternalVariables(S).declareVariables(...G,z)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${h};
    let row = (index1 % stride1) * ${h};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${S.offsetToIndices("batch")};`}

    var a_indices: ${I.type.indices};
    ${zn("a_indices",I,I.rank-2,S.rank,"batch_indices")}
    ${I.indicesSet("a_indices",I.rank-2,0)}
    ${I.indicesSet("a_indices",I.rank-1,0)}
    let a_offset = ${I.indicesToOffset("a_indices")};

    var b_indices: ${T.type.indices};
    ${zn("b_indices",T,T.rank-2,S.rank,"batch_indices")}
    ${T.indicesSet("b_indices",T.rank-2,0)}
    ${T.indicesSet("b_indices",T.rank-1,0)}
    let b_offset = ${T.indicesToOffset("b_indices")};
    var values: array<${z.type.value}, ${h}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${B()}
    }
    for (var i = 0u; i < ${h}u; i++) {
      var value = values[i];
      ${L}
      ${R}
      let cur_indices = ${z.type.indices}(batch, row + i, col);
      let offset = ${z.indicesToOffset("cur_indices")};
      ${z.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${h};${i}`,inputDependencies:g?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:v}}}),tm,rm,Bo,Os,nm,Ro,im,Mi,Ru=X(()=>{pe(),he(),ye(),Ar(),Bu(),Ou(),tm=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,rm=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Bo=(e,t,r="f32",n,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=i?u:a,c=i?a:u,p=d/t[0],h=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&d%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${r}>, ${d/p}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${p};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${h};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${tm(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${p===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${rm(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Os=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,nm=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ro=(e,t,r="f32",n,i=!1,a=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],c=i?l:a,p=i?a:l;if(!(p%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let h=p/t[1],m=c/t[0],g=a/t[1],$=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Os(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${h};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${g};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Os(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${nm(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${c}>, ${p}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${d}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${$}
  }
`},im=(e,t,r,n,i=!1)=>{let[a,s,o,u]=n,l=Ge(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${je(e,l)} {
      var value = ${je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${zn("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${je(e,l)} {
      var value = ${je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${zn("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${je(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${je(e,l)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Mi=(e,t,r,n,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),d=n?n.slice(0,-2):r.slice(0,-2),c=P.size(d),p=s[s.length-2],h=s[s.length-1],m=o[o.length-1],g=h%4===0&&m%4===0,$=p<=8?[4,1,1]:[4,4,1],y=[8,8,1],_=[Math.ceil(m/y[0]/$[0]),Math.ceil(p/y[1]/$[1]),Math.ceil(c/y[2]/$[2])],v=g?4:1,b=[...u,p,h/v],S=b.length,I=[...l,h,m/v],T=I.length,z=[c,p,m/v],O=[{type:6,data:p},{type:6,data:m},{type:6,data:h}];Tr(t,O),O.push(...le(d,b,I));let R=["rank","rank"],G=e.length>2;G&&(O.push(...le(e[2].dims)),R.push("rank")),O.push(...le(z));let L=Q=>{let B=d.length,te=Iu("batchDims",e[0].dataType,B,1),F=Ge(e[0].dataType),M=U("a",e[0].dataType,S,v),J=U("b",e[1].dataType,T,v),W=ne("result",e[0].dataType,z.length,v),re=[M,J];if(G){let H=i?v:1;re.push(U("bias",e[2].dataType,e[2].dims.length,H))}let q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Er(t,q);let j=Ge(W.type.tensor),K=Ir(t,W.type.value,j),C=im(v,G,K,[te,M,J,W],i);return`
  ${Q.registerUniforms(q).registerInternalVariables(te).declareVariables(...re,W)}
  ${C}
  ${g?Bo($,y,F,te):Ro($,y,F,te)}
                   `};return{name:"MatMul",shaderCache:{hint:`${$};${t.activation};${g};${i}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:O}),getShaderSource:L}}}),am,ev,j3=X(()=>{pe(),Gt(),ye(),Ar(),Ou(),F3(),Ru(),am=(e,t,r,n,i=!1,a,s=4,o=4,u=4,l="f32")=>{let d=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},c=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},p=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,h=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",g=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",$=e?"row":"col",y=e?"col":"row",_=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${$} / outWidth;
    let outCol = ${$} % outWidth;

    let WRow = ${y} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${y} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${y} % inChannels;
    var resData = ${je(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${g}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(s)}
    }
    return resData;`,v=e?t&&n?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${_}
    }
    return ${je(s,l)}(0.0);`:n&&r?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_}
    }
    return ${je(s,l)}(0.0);`,b=e?n&&r?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${je(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${je(o,l)}(0.0);`,S=je(u,l),I=je(e?s:o,l),T=je(e?o:s,l),z=Ir(a,S,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?v:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?b:v}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${S}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${Yb(i)}
      ${z}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ev=(e,t,r,n,i,a,s,o,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],c=r[0],p=l?r[2]:r[3],h=l?r[1]:r[2],m=l?r[3]:r[1],g=l&&(d%4===0||d%3===0)&&m%4===0,$=l?m:p*h,y=l?p*h:m,_=[8,8,1],v=n<=8?[4,1,1]:[4,4,1],b=[Math.ceil($/_[0]/v[0]),Math.ceil(y/_[1]/v[1]),Math.ceil(c/_[2]/v[2])];ve("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let S=g?l&&d%4!==0?3:4:1,I=_[1]*v[1],T=_[0]*v[0],z=Math.max(_[0]*S,_[1]),O=n%I===0,R=i%T===0,G=a%z===0,L=g?[S,4,4]:[1,1,1],Q=[{type:6,data:n},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Tr(t,Q),Q.push(...le(e[0].dims,e[1].dims));let B=["rank","rank"];s&&(Q.push(...le(e[2].dims)),B.push("rank")),Q.push(...le(r));let te=F=>{let M=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Er(t,M);let J=g?4:1,W=Ge(e[0].dataType),re=`
      fn setOutputAtIndex(flatIndex : i32, value : ${g?`vec4<${W}>`:W}) {
        result[flatIndex] = ${g?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${g?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${g?"/ 4":""}, value);
      }`,q=U("x",e[0].dataType,e[0].dims.length,S===3?1:S),j=U("w",e[1].dataType,e[1].dims.length,J),K=[q,j],C=ne("result",e[0].dataType,r.length,J);if(s){let H=U("bias",e[2].dataType,e[2].dims.length,J);K.push(H),re+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${g?`vec4<${W}>`:W} {
          return bias[coords.${l?"w":"y"}${g?"/ 4":""}];
        }`}return`
        ${Jb("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${F.registerUniforms(M).declareVariables(...K,C)}
        ${re}
        ${am(l,O,R,G,s,t,L[0],L[1],L[2],W)}
        ${g?Bo(v,_,W,void 0,!l,z):Ro(v,_,W,void 0,!l,z,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${S};${g};${O};${R};${G};${I};${T};${z}`,inputDependencies:B},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:Q}),getShaderSource:te}}}),sm,As,hn,om,Bs,um,tv,rv,H3=X(()=>{pe(),Gt(),he(),ye(),Ar(),Ou(),sm=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},As=e=>typeof e=="number"?[e,e,e]:e,hn=(e,t)=>t<=1?e:e+(e-1)*(t-1),om=(e,t,r,n=1)=>{let i=hn(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},Bs=(e,t,r,n,i)=>{i==null&&(i=om(e,t[0],n[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/n[s]+1));return a},um=(e,t,r,n,i,a,s,o,u,l)=>{let d,c,p,h;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Bs([t,r,n,1],[o,u,l],1,[i,a,s],e);c=m[0],p=m[1],h=m[2]}else if(Array.isArray(e)){if(!e.every((g,$,y)=>g===y[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Bs([t,r,n,1],[o,u,l],1,[i,a,s],e[0]);c=m[0],p=m[1],h=m[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(r/a),h=Math.ceil(n/s);let m=(c-1)*i+o-t,g=(p-1)*a+u-r,$=(h-1)*s+l-n,y=Math.floor(m/2),_=m-y,v=Math.floor(g/2),b=g-v,S=Math.floor($/2),I=$-S;d={top:v,bottom:b,left:S,right:I,front:y,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:c,outHeight:p,outWidth:h}},tv=(e,t,r,n,i,a=!1,s="channelsLast")=>{let o,u,l,d,c;if(s==="channelsLast")[o,u,l,d,c]=e;else if(s==="channelsFirst")[o,c,u,l,d]=e;else throw new Error(`Unknown dataFormat ${s}`);let[p,,h,m,g]=t,[$,y,_]=As(r),[v,b,S]=As(n),I=hn(h,v),T=hn(m,b),z=hn(g,S),{padInfo:O,outDepth:R,outHeight:G,outWidth:L}=um(i,u,l,d,$,y,_,I,T,z),Q=a?p*c:p,B=[0,0,0,0,0];return s==="channelsFirst"?B=[o,Q,R,G,L]:s==="channelsLast"&&(B=[o,R,G,L,Q]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:d,inChannels:c,outDepth:R,outHeight:G,outWidth:L,outChannels:Q,padInfo:O,strideDepth:$,strideHeight:y,strideWidth:_,filterDepth:h,filterHeight:m,filterWidth:g,effectiveFilterDepth:I,effectiveFilterHeight:T,effectiveFilterWidth:z,dilationDepth:v,dilationHeight:b,dilationWidth:S,inShape:e,outShape:B,filterShape:t}},rv=(e,t,r,n,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map(($,y)=>y)},l=[Math.ceil(sm(u.x.map($=>r[$]))/o[0]),1,1];ve("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let d=1,c=P.size(r),p=[{type:12,data:c},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Tr(t,p),p.push(...le(e[0].dims,e[1].dims));let h=["rank","rank"],m=e.length===3;m&&(p.push(...le(e[2].dims)),h.push("rank")),p.push(...le(r));let g=$=>{let y=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Er(t,y);let _=1,v=Ge(e[0].dataType),b=U("x",e[0].dataType,e[0].dims.length,d),S=U("W",e[1].dataType,e[1].dims.length,_),I=[b,S],T=ne("result",e[0].dataType,r.length,_),z="";if(m){let G=U("bias",e[2].dataType,e[2].dims.length,_);I.push(G),z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${v} {
          return bias[${s?se("coords",4,5):se("coords",1,5)}];
        }`}let O=je(d,v),R=Ir(t,O,v);return`
            ${z}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${b.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
          ${$.registerUniforms(y).declareVariables(...I,T)}
          ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${T.offsetToIndices("global_idx")};
              let batch = ${se("coords",0,b.rank)};
              let d2 = ${s?se("coords",b.rank-1,b.rank):se("coords",1,b.rank)};
              let xFRCCorner = vec3<u32>(${s?se("coords",1,b.rank):se("coords",2,b.rank)},
              ${s?se("coords",2,b.rank):se("coords",3,b.rank)},
              ${s?se("coords",3,b.rank):se("coords",4,b.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?se("uniforms.x_shape",1,b.rank):se("uniforms.x_shape",2,b.rank)};
              let xShapeZ = ${s?se("uniforms.x_shape",2,b.rank):se("uniforms.x_shape",3,b.rank)};
              let xShapeW = ${s?se("uniforms.x_shape",3,b.rank):se("uniforms.x_shape",4,b.rank)};
              let xShapeU = ${s?se("uniforms.x_shape",4,b.rank):se("uniforms.x_shape",1,b.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${R}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${d};${m}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:g}}}),nv,iv,K3=X(()=>{pe(),he(),ye(),Ar(),nv=(e,t,r,n)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?r[3]:r[1],d=l/t.group,c=u&&d>=4?Ue(l):1,p=P.size(r)/c,h=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];Tr(t,h),h.push(...le(s,[o[0],o[1],o[2],o[3]/c]));let m=i?["rank","rank","rank"]:["rank","rank"];h.push(...le([r[0],r[1],r[2],r[3]/c]));let g=$=>{let y=ne("output",e[0].dataType,r.length,c),_=Ge(y.type.tensor),v=Ir(t,y.type.value,_),b=U("x",e[0].dataType,s.length),S=U("w",e[1].dataType,o.length,c),I=[b,S];i&&I.push(U("b",e[2].dataType,e[2].dims,c));let T=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Er(t,T);let z=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${b.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${S.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${b.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${S.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${$.registerUniforms(T).declareVariables(...I,y)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${y.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${y.type.value} = ${y.type.value}(0);
    ${z}
    ${a}
    ${v}
    ${y.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:g}},iv=(e,t,r,n)=>{let i=e.length>2,a=Ue(r[3]),s=Ue(r[2]),o=P.size(r)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],d=[r[0],r[1],r[2],r[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Tr(t,c),c.push(...le(u,l,d));let p=(s-1)*t.strides[1]+l[1],h=m=>{let g=ne("output",e[0].dataType,d.length,a),$=Ge(g.type.tensor),y=Ir(t,g.type.value,$),_=U("x",e[0].dataType,u.length,a),v=U("w",e[1].dataType,l.length,a),b=[_,v];i&&b.push(U("b",e[2].dataType,e[2].dims,a));let S=i?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Er(t,I),`
  ${m.registerUniforms(I).declareVariables(...b,g)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${_.type.value}, ${p}>;
    var values: array<${g.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${p}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${_.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${_.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${v.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${S}
      ${y}
      ${g.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:h}}}),lm,ci,dm,pi,Mo,Rs,cm,pm,Do,Z3=X(()=>{he(),j3(),H3(),Ru(),K3(),Ar(),Bu(),sr(),lm=(e,t,r,n,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,l=t[0],d=t.slice(2).map((p,h)=>p+(p-1)*(r[h]-1)),c=o.map((p,h)=>p+n[h]+n[h+u]).map((p,h)=>Math.floor((p-d[h]+i[h])/i[h]));return c.splice(0,0,s),c.splice(a?3:1,0,l),c},ci=[2,3,1,0],dm=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},pi=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let n=e.pads.slice();Bi.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},Mo=e=>{let t=Cu(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Rs=(e,t,r,n)=>{let i=r.format==="NHWC",a=lm(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let I=[t[0]];if(i){let T=e.kernelCustomData.wT??e.compute(at(t[1],ci),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=T),I.push(T)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(iv(I,r,a,n),{inputs:I}):e.compute(nv(I,r,a,n),{inputs:I});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],d=t[1].dims[2],c=t[1].dims[3],p=a[i?1:2],h=a[i?2:3],m=a[i?3:1],g=i&&d===o&&c===u&&r.pads[0]===0&&r.pads[1]===0;if(g||d===1&&c===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let I=a[0],T,z,O,R=[];if(i){let Q=e.kernelCustomData.wT??e.compute(at(t[1],ci),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Q),g){let B=o*u*l;T=t[0].reshape([1,I,B]),z=Q.reshape([1,B,m]),O=[1,I,m]}else T=t[0].reshape([I,o*u,l]),z=Q.reshape([1,l,m]),O=[I,p*h,m];R.push(T),R.push(z)}else T=t[0].reshape([I,l,o*u]),z=t[1].reshape([1,m,l]),O=[I,m,p*h],R.push(z),R.push(T);s&&R.push(t[2]);let G=O[2],L=R[0].dims[R[0].dims.length-1];G<8&&L<8?e.compute(Au(R,r,a,O,i,n),{inputs:R}):e.compute(Mi(R,r,a,O,i,n),{inputs:R});return}let $=!0,y=e.kernelCustomData.wT??e.compute(at(t[1],ci),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=y);let _=[t[0],y];s&&_.push(t[2]);let v=i?p*h:m,b=i?m:p*h,S=d*c*l;e.compute(ev(_,r,a,v,b,S,s,$,n),{inputs:_})},cm=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=pi({...t,pads:i,strides:a,dilations:s,kernelShape:o},n);Rs(e,n,u,l=>r?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},pm=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=pi(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=tv(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,n);e.compute(rv(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],n))},Do=(e,t)=>{if(dm(e.inputs,t),e.inputs[0].dims.length===3)cm(e,t);else if(e.inputs[0].dims.length===5)pm(e,e.inputs,t);else{let r=pi(t,e.inputs);Rs(e,e.inputs,r)}}}),av,Q3=X(()=>{pe(),Gt(),he(),ye(),av=(e,t,r)=>{let n=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],d=a?Ue(u):1,c=a&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/d)*d,h=u-p,m=a?Ue(l):1,g=a?l===1?d:m:1,$=P.size(i)/m,y=[Math.ceil($/64),1,1];ve("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${y}`);let _=["rank","rank"],v=[t.strides[0],t.strides[1]],b=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],S=[t.dilations[0],t.dilations[1]],I=[b[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],T=[I[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),I[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],z=[{type:12,data:$},{type:12,data:v},{type:12,data:b},{type:12,data:S},{type:12,data:I},{type:6,data:T},{type:12,data:p},{type:12,data:u},{type:12,data:l},...le(e[0].dims,e[1].dims)];n&&(z.push(...le(e[2].dims)),_.push("rank")),z.push(...le(i));let O=R=>{let G=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:v.length},{name:"filter_dims",type:"u32",length:b.length},{name:"dilations",type:"u32",length:b.length},{name:"effective_filter_dims",type:"u32",length:I.length},{name:"pads",type:"i32",length:T.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],L=Ge(e[0].dataType),Q=a?1:2,B=a?2:3,te=a?3:1,F=U("W",e[1].dataType,e[1].dims.length,g),M=U("Dy",e[0].dataType,e[0].dims.length,d),J=[M,F];n&&J.push(U("bias",e[2].dataType,[i[te]].length,m));let W=ne("result",e[0].dataType,i.length,m),re=()=>{let K="";if(c)d===4?K+=`
        let xValue = ${M.getByOffset("x_offset")};
        let wValue = ${F.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?K+=`
          dotProd = dotProd + dot(vec4<${L}>(${M.getByOffset("x_offset")}, ${M.getByOffset("x_offset + 1u")}), vec4<${L}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(K+=`
          dotProd = dotProd + dot(vec4<${L}>(${M.getByOffset("x_offset")}, ${M.getByOffset("x_offset + 1u")}, ${M.getByOffset("x_offset + 2u")}, ${M.getByOffset("x_offset + 3u")}), vec4<${L}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}, ${F.getByOffset("w_offset + 2u")}, ${F.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(K+=`
                  let xValue = ${a?M.getByOffset(`${M.indicesToOffset(`${M.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):M.get("batch","inputChannel","idyR","idyC")};
        `,d===1)K+=`
          let w_offset = ${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${F.getByOffset(`w_offset / ${g}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let C=0;C<d;C++)K+=`
            let wValue${C} = ${F.getByOffset(`${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${C}, wOutChannel)`)} / ${g}`)};
            dotProd = dotProd + xValue[${C}] * wValue${C};`;return K},q=()=>{if(h===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let K="";if(d===1){K+="dotProd = dotProd";for(let C=0;C<h;C++)K+=`
            + ${M.getByOffset(`x_offset + ${C}`)} * ${F.getByOffset(`w_offset + ${C}`)}`;K+=";"}else if(d===2){if(h!==2)throw new Error(`Invalid inputChannelsRemainder ${h}.`);K+=`
          let xValue = ${M.getByOffset("x_offset")};
          let wValue = ${F.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return K},j=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",te)};
            let r = ${W.indicesGet("outputIndices",Q)};
            let c = ${W.indicesGet("outputIndices",B)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${W.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${L}(dyRCorner) + ${L}(wR)) / ${L}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${L}(uniforms.Dy_shape[${Q}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${L}(dyCCorner) + ${L}(wC)) / ${L}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${L}(uniforms.Dy_shape[${B}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${M.indicesToOffset(`${M.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${F.indicesToOffset(`${F.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${g};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:d}) {
                  ${re()}
                  inputChannel = inputChannel + ${c?4:d};
                }
                ${q()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${m}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${R.registerUniforms(G).declareVariables(...J,W)}
      ${R.mainStart()}
      ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${j}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${g}${m}${c}${h}`,inputDependencies:_},getRunData:()=>({dispatchGroup:{x:y[0],y:y[1],z:y[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:z}),getShaderSource:O}}}),fm,hm,mm,Ms,sv,gm,Ds,_m,ov,X3=X(()=>{Q3(),Ar(),sr(),fm=(e,t,r,n,i,a)=>(e-1)*t+r+(n-1)*i+1-a,hm=(e,t,r,n,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=a,r[i]=e-a):t==="SAME_LOWER"&&(r[n]=e-a,r[i]=a)},mm=(e,t,r,n,i,a,s,o,u,l)=>{let d=e.length-2,c=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let p=e[0],h=t[o?3:1]*i;for(let m=0,g=e.length-d-(o?1:0);m<d;++m,++g){let $=e[g],y=c?$*s[m]:l[m],_=fm($,s[m],a[m],t[g],r[m],y);hm(_,n,a,m,m+d),c&&l.push(s[m]*($-1)+u[m]+(t[g]-1)*r[m]+1-a[m]-a[m+d])}l.splice(0,0,p),l.splice(o?3:1,0,h)},Ms=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){r.length=0;for(let c=2;c<t[1].dims.length;++c)r.push(t[1].dims[c])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}mm(o,r,u,e.autoPad,e.group,i,l,n,s,a);let d=Object.assign({},e);return Object.assign(d,{kernelShape:r,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:l}),d},sv=e=>{let t=Cu(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,c=e.outputShape;return{autoPad:n,format:r,dilations:i,group:a,kernelShape:s,outputPadding:d,outputShape:c,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},gm=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ds=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(at(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(av(a,r,n),{inputs:a})},_m=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Ms({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},n);Ds(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},ov=(e,t)=>{if(gm(e.inputs,t),e.inputs[0].dims.length===3)_m(e,t);else{let r=Ms(t,e.inputs);Ds(e,e.inputs,r)}}}),ym,uv,lv,Y3=X(()=>{pe(),he(),Ve(),ye(),ym=(e,t,r,n)=>{let i=P.size(t),a=t.length,s=U("input",e,a),o=ne("output",e,a),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),l=P.normalizeAxis(u,a),d=c=>{let p=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,h=se("uniforms.input_shape","uniforms.axis",a),m=n.reverse?p+(n.exclusive?" + 1":""):"0",g=n.reverse?h:p+(n.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${g};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...le(t,t)]}),getShaderSource:d}},uv=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(ym(n,r,i,t),{inputs:[0]})},lv=e=>{let t=e.exclusive===1,r=e.reverse===1;return Ee({exclusive:t,reverse:r})}}),wm,$m,bm,dv,cv,J3=X(()=>{pe(),he(),Ve(),ye(),wm=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},$m=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)i.push(r.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},bm=(e,t)=>{let r,n,i,a,s,o,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([r,n,i,a]=e.dims,s=d?[r,n,i,l,l,a/l**2]:[r,n,i,a/l**2,l,l],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=d?[r,l,l,a/l**2,n,i]:[r,a/l**2,l,l,n,i],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),p=c.dims.length,h=e.dataType,m=U("a",h,p),g=ne("output",h,p),$=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(m,g)}

  ${$m(o,p,m,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${g.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${g.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:y=>{let _=u?[r,n*l,i*l,a/l**2]:[r,a/l**2,n*l,i*l],v=P.size(_),b=c.dims,S=P.sortBasedOnPerm(b,o);return{outputs:[{dims:_,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...le(b,S)]}},getShaderSource:$}},dv=(e,t)=>{wm(e.inputs),e.compute(bm(e.inputs[0],t))},cv=e=>Ee({blocksize:e.blocksize,mode:e.mode,format:e.format})}),fi,mn,Ps,vm,xm,Sm,km,Ns,Im,pv,fv,eS=X(()=>{pe(),he(),Ve(),ye(),fi="[a-zA-Z]|\\.\\.\\.",mn="("+fi+")+",Ps="^"+mn+"$",vm="("+mn+",)*"+mn,xm="^"+vm+"$",Sm=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},km=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(xm)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,a)=>{let s=e[a].dims.slice();if(!i.match(RegExp(Ps)))throw new Error("Invalid LHS term");let o=this.processTerm(i,!0,s,a);this.lhs.push(o)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,a])=>a.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(mn)))throw new Error("Invalid RHS");n.match(RegExp(fi,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(i);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(Ps))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(fi,"g")),l=new Sm(n);return u?.forEach((d,c)=>{if(d==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+p),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let h=0;h<s.length;h++){let m=String.fromCharCode(48+h);l.addSymbol(m,c+h),this.addSymbol(m,r[o++],n)}}else l.addSymbol(d,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,r[o++],n)}),l}},Ns=e=>e+"_max",Im=(e,t,r,n)=>{let i=e.map(l=>l.length).map((l,d)=>U(`input${d}`,t,l)),a=P.size(n),s=ne("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(l=>!r.rhs.symbolToIndices.has(l)),u=l=>{let d=[],c="var prod = 1.0;",p="var sum = 0.0;",h="sum += prod;",m=[],g=[],$=[],y=[],_=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((b,S)=>{if(r.rhs.symbolToIndices.has(S)){let I=r.rhs.symbolToIndices.get(S)?.[0];I!==void 0&&r.lhs.forEach((T,z)=>{if(b.inputIndices.includes(z)){let O=T.symbolToIndices.get(S);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(R=>{d.push(`${i[z].indicesSet(`input${z}Indices`,R,s.indicesGet("outputIndices",I))}`)})}})}else r.lhs.forEach((I,T)=>{if(b.inputIndices.includes(T)){let z=I.symbolToIndices.get(S);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(O=>{m.push(`${i[T].indicesSet(`input${T}Indices`,O,`${S}`)}`)}),y.push(`prod *= ${i[T].getByIndices(`input${T}Indices`)};`)}}),g.push(`for(var ${S}: u32 = 0; ${S} < uniforms.${Ns(S)}; ${S}++) {`),$.push("}")});let v=_?[...d,`let sum = ${i.map((b,S)=>b.getByIndices(`input${S}Indices`)).join(" * ")};`]:[...d,p,...g,...m,c,...y,h,...$];return`
            ${l.registerUniforms(o.map(b=>({name:`${Ns(b)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((b,S)=>`var input${S}Indices: ${i[S].type.indices};`).join(`
`)}
            ${v.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(c=>r.symbolToInfo.has(c)).map(c=>({type:12,data:r.symbolToInfo.get(c)?.dimValue||0}));l.push({type:12,data:a});let d=e.map((c,p)=>[...le(c)]).reduce((c,p)=>c.concat(p),l);return d.push(...le(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}},getShaderSource:u}},pv=(e,t)=>{let r=new km(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(Im(i,e.inputs[0].dataType,r,n))},fv=e=>{let t=e.equation.replace(/\s+/g,"");return Ee({equation:t})}}),Tm,Us,Em,zm,hv,tS=X(()=>{pe(),he(),ye(),Tm=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Us=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},Em=(e,t)=>e.length>t.length?Us(e,t):Us(t,e),zm=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=Em(t,r),i=e[0].dataType,a=i===9||P.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(P.size(n)/o),l=c=>{let p=U("input",i,t.length,s),h=ne("output",i,n.length,o),m;if(i===9){let g=($,y,_="")=>`
          let outputIndices${y} = ${h.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${p.broadcastedIndicesToOffset(`outputIndices${y}`,h)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${$}[${y}] = ${_}(${p.getByOffset(`index${y}`)}[component${y}]);
        `;m=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${g("data",0,"u32")}
        ${g("data",1,"u32")}
        ${g("data",2,"u32")}
        ${g("data",3,"u32")}
        ${h.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${h.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${p.broadcastedIndicesToOffset("outputIndices",h)};
        let data = ${h.type.value}(${p.getByOffset(`inputOffset / ${s}`)});
        ${h.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(p,h)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:u},...le(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},hv=e=>{Tm(e.inputs),e.compute(zm(e.inputs),{inputs:[0]})}}),Cm,mv,rS=X(()=>{pe(),he(),ye(),zu(),Cm=e=>{let t=e[0].dataType,r=P.size(e[0].dims),n=P.size(e[1].dims),i=n%4===0,a=s=>{let o=U("x",t,[1],4),u=U("bias",t,[1],4),l=ne("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=h=>`
      let bias${h}_offset: u32 = (global_idx * 4 + ${h}) % uniforms.bias_size;
      let bias${h} = ${u.getByOffset(`bias${h}_offset / 4`)}[bias${h}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(d).declareVariables(o,u,l)}

    ${Oo(Ze(t))}

    ${s.mainStart(Fr)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",Ao("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/Fr/4)}})}},mv=e=>{e.inputs.length<2||P.size(e.inputs[1].dims)===0?Mb(e):e.compute(Cm(e.inputs))}}),Om,Am,gv,_v,nS=X(()=>{pe(),he(),Ve(),ye(),Om=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Am=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,a=P.normalizeAxis(t.axis,i),s=r.slice(0);s.splice(a,1,...n);let o=r[a],u=e[0].dataType===9?4:1,l=Math.ceil(P.size(s)/u),d=[{type:12,data:l},{type:6,data:o},{type:12,data:a},...le(e[0].dims,e[1].dims,s)],c=p=>{let h=U("data",e[0].dataType,e[0].dims.length,u),m=U("inputIndices",e[1].dataType,e[1].dims.length),g=ne("output",e[0].dataType,s.length,u),$=_=>{let v=n.length,b=`var indicesIndices${_}  = ${m.type.indices}(0);`;for(let S=0;S<v;S++)b+=`${v>1?`indicesIndices${_}[${S}]`:`indicesIndices${_}`} = ${s.length>1?`outputIndices${_}[uniforms.axis + ${S}]`:`outputIndices${_}`};`;b+=`
          var idx${_} = ${m.getByIndices(`indicesIndices${_}`)};
          if (idx${_} < 0) {
            idx${_} = idx${_} + uniforms.axisDimLimit;
          }
          var dataIndices${_} : ${h.type.indices};
        `;for(let S=0,I=0;S<i;S++)S===a?(b+=`${i>1?`dataIndices${_}[${S}]`:`dataIndices${_}`} = u32(idx${_});`,I+=v):(b+=`${i>1?`dataIndices${_}[${S}]`:`dataIndices${_}`} = ${s.length>1?`outputIndices${_}[${I}]`:`outputIndices${_}`};`,I++);return b},y;if(e[0].dataType===9){let _=(v,b,S="")=>`
          let outputIndices${b} = ${g.offsetToIndices(`outputOffset + ${b}u`)};
          ${$(b)};
          let offset${b} = ${h.indicesToOffset(`dataIndices${b}`)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${v}[${b}] = ${S}(${h.getByOffset(`index${b}`)}[component${b}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${_("value",0,"u32")}
        ${_("value",1,"u32")}
        ${_("value",2,"u32")}
        ${_("value",3,"u32")}
        ${g.setByOffset("global_idx","value")}
      `}else y=`
      let outputIndices = ${g.offsetToIndices("global_idx")};
      ${$("")};
      let value = ${h.getByIndices("dataIndices")};
      ${g.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,m,g)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${y}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c}},gv=e=>Ee({axis:e.axis}),_v=(e,t)=>{let r=e.inputs;Om(r),e.compute(Am(e.inputs,t))}}),Bm,yv,wv,iS=X(()=>{pe(),he(),ye(),Bm=(e,t,r,n,i,a,s,o,u)=>{let l=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],d=[a];l.push(...le(t.dims,d));let c=p=>{let h=U("indices_data",t.dataType,t.dims.length),m=ne("input_slice_offsets_data",12,1,1),g=[h,m],$=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${p.registerUniforms($).declareVariables(...g)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},yv=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=P.sizeToDimension(a,a.length-1),u=P.sizeFromDimension(n,t.batchDims+s),l=P.sizeToDimension(n,t.batchDims),d=P.sizeFromDimension(n,t.batchDims),c=o/l,p=new Array(s),h=u;for(let b=0;b<s;++b)p[s-1-b]=h,h*=n[t.batchDims+s-1-b];let m=Bm(e,r[1],p,t.batchDims,n,o,c,d,s),g=t.batchDims+s;if(g>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let $=a.slice(0,-1).concat(n.slice(g)),y=P.size($),_=[{type:12,data:y},{type:12,data:u},...le(r[0].dims,m.dims,$)],v=b=>{let S=U("data",r[0].dataType,r[0].dims.length),I=U("slice_offsets",12,m.dims.length),T=ne("output",r[0].dataType,$.length);return`
          ${b.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(S,I,T)}
            ${b.mainStart()}
            ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:$,dataType:i}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:v},{inputs:[r[0],m]})},wv=e=>({batchDims:e.batch_dims,cacheKey:""})}),Rm,Mm,$v,bv,aS=X(()=>{pe(),he(),Ve(),ye(),Rm=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=P.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===r?Math.ceil(o/n)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Mm=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,a=P.normalizeAxis(t.gatherAxis,i),s=P.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(a,1,...n);let u=P.size(o),l=e[2].dataType,d=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...le(...e.map((h,m)=>h.dims),o)],p=h=>{let m=U("data",e[0].dataType,e[0].dims.length),g=U("inputIndices",e[1].dataType,e[1].dims.length),$=U("scales",e[2].dataType,e[2].dims.length),y=e.length>3?U("zeroPoint",e[3].dataType,e[3].dims.length):void 0,_=ne("output",l,o.length),v=[m,g,$];y&&v.push(y);let b=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${h.registerUniforms(b).declareVariables(...v,_)}
        ${h.mainStart()}
        let output_indices = ${_.offsetToIndices("global_idx")};
        var indices_indices = ${g.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${_.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${g.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${_.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${m.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${_.indicesGet("output_indices","i")};
          ${m.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${g.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${_.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${m.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${m.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${m.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${$.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${$.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${$.getByIndices("scale_indices")};
        ${y?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${y.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${y.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ze(l)}(quantized_data - zero_point) * scale;
        ${_.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((h,m)=>m!==1).map(h=>h.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(h,m)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p}},$v=(e,t)=>{let r=e.inputs;Rm(r,t),e.compute(Mm(e.inputs,t))},bv=e=>Ee({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Dm,Pm,vv,xv,sS=X(()=>{pe(),he(),Ve(),ye(),Dm=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Pm=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,a=e[1].dims,s=e[1].dataType,o=P.normalizeAxis(t.axis,i),u=r[o],l=a.slice(0),d=P.size(l),c=U("input",n,i),p=U("indicesInput",s,a.length),h=ne("output",n,l.length),m=[{type:12,data:d},{type:6,data:u},{type:12,data:o}];return m.push(...le(r,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:g=>`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,p,h)}
      ${g.mainStart()}
      ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${h.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${h.setByOffset("global_idx","value")};
  }`}},vv=e=>Ee({axis:e.axis}),xv=(e,t)=>{let r=e.inputs;Dm(r),e.compute(Pm(e.inputs,t))}}),Nm,Um,Sv,kv,oS=X(()=>{pe(),he(),ye(),Nm=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Um=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,a,s]=v$.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),d=Math.ceil(i/u),c=!0,p=P.size(o),h=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(h.push(...le(e[2].dims)),m.push("rank")),h.push(...le(o));let g=y=>{let _="";t.transA&&t.transB?_="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?_="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?_="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(_="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let v=t.alpha===1?"":"value *= uniforms.alpha;",b=U("a",e[0].dataType,e[0].dims),S=U("b",e[1].dataType,e[1].dims),I=b.type.value,T=null,z=[b,S];e.length===3&&(T=U("c",e[2].dataType,e[2].dims.length),z.push(T));let O=ne("output",e[0].dataType,o.length);z.push(O);let R=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${y.registerUniforms(R).declareVariables(...z)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${_}
    }

    ${v}
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${I}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},$=y=>{let _=U("a",e[0].dataType,e[0].dims),v=U("b",e[1].dataType,e[1].dims),b=null,S=[_,v];e.length===3&&(b=U("c",e[2].dataType,e[2].dims.length),S.push(b));let I=ne("output",e[0].dataType,o.length);S.push(I);let T=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],z="",O="";t.transA&&t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${v.type.value}(0);
      }
      `,z="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${v.type.value}(0);
      }
      `,z="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${v.type.value}(0);
      }
      `,z="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${v.type.value}(0);
      }
      `,z="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let R=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${y.registerUniforms(T).declareVariables(...S)}
  var<workgroup> tile_a: array<array<${_.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${v.type.storage}, ${u}>, ${u}>;
  ${y.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${I.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${O}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${z}
      }
      workgroupBarrier();
    }

    ${R}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${b!=null?`let cOffset = ${b.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${I.type.value}(uniforms.beta) * ${b.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:h}),getShaderSource:$}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:g}},Sv=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},kv=(e,t)=>{Nm(e.inputs),e.compute(Um(e.inputs,t))}}),Ot,qt,fr,hr,qm,Vm,Wm,Lm,Gm,Fm,jm,Hm,Iv,Tv,uS=X(()=>{pe(),he(),Ve(),ye(),[Ot,qt,fr,hr]=[0,1,2,3],qm=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Vm=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Wm=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Lm=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Gm=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Fm=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ot}] = batch;
     indices[${qt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${fr}] = u32(r);
            indices[${hr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${fr}] = u32(clamp(r, 0, H - 1));
          indices[${hr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${fr}] = gs_reflect(r, border[1], border[3]);
          indices[${hr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,jm=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ot}], indices[${qt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ot}], indices[${qt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ot}], indices[${qt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ot}], indices[${qt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ot}], indices[${qt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ot}], indices[${qt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Hm=(e,t)=>{let r=U("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=U("grid",e[1].dataType,n.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ot,qt,fr,hr]=[0,3,1,2]);let s=ne("output",e[0].dataType,a.length),o=r.type.value,u=P.size(a),l=[{type:12,data:u},...le(e[0].dims,n,a)],d=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(r,i,s)}
  ${Vm}
  ${Wm(o)}
  ${Lm(t)}
  ${Gm(t)}
  ${Fm(r,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${fr}]);
      let W_in = i32(uniforms.x_shape[${hr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ot}], indices[${fr}], indices[${hr}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${jm(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let p=P.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:d}},Iv=(e,t)=>{qm(e.inputs),e.compute(Hm(e.inputs,t))},Tv=e=>Ee({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ye,Km,Ev,qs,Zm,Tn,zv,Cv=X(()=>{pe(),he(),Ve(),ku(),Eu(),ye(),sr(),Ye=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Km=(e,t)=>{let r=e[0],n=Ye(e,1),i=Ye(e,2),a=Ye(e,3),s=Ye(e,4),o=Ye(e,5),u=Ye(e,6),l=Ye(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=r.dims[0],c=r.dims[1],p=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],h=c,m=0,g=0,$=Math.floor(p/t.numHeads);if(u&&l&&P.size(u.dims)&&P.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==$)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==$)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],g=u.dims[2]}else if(u&&P.size(u.dims)||l&&P.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y;if(n&&P.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');y=2,h=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');y=5,h=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=0,h=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}if(a&&P.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let _=m+h,v=0;if(s&&P.size(s.dims)>0){v=8;let T=s.dims;throw T.length===1?T[0]===d?v=1:T[0]===3*d+2&&(v=3):T.length===2&&T[0]===d&&T[1]===_&&(v=5),v===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let b=!1,S=p;if(i&&P.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(h!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(h!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],b=!0}}let I=!1;if(s&&P.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&P.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:c,pastSequenceLength:m,kvSequenceLength:h,totalSequenceLength:_,maxSequenceLength:g,inputHiddenSize:0,hiddenSize:p,vHiddenSize:S,headSize:$,vHeadSize:Math.floor(S/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:I,passPastInKv:b,qkvFormat:y}},Ev=e=>Ee({...e}),qs=Ee({perm:[0,2,1,3]}),Zm=(e,t,r,n,i,a,s)=>{let o=[n,i,a],u=P.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],d=c=>{let p=ne("qkv_with_bias",t.dataType,o),h=U("qkv",t.dataType,o),m=U("bias",r.dataType,o),g=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(g).declareVariables(h,m,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,r],outputs:[-1]})[0]},Tn=(e,t,r,n,i,a,s,o)=>{let u=a;if(s&&P.size(s.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Zm(e,a,s,t,n,r*i,o),u=u.reshape([t,n,r,i]),r===1||n===1?u:e.compute(at(u,qs.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,n,r,i])),r===1||n===1?u:e.compute(at(u,qs.perm),{inputs:[u],outputs:[-1]})[0]},zv=(e,t)=>{let r=Km(e.inputs,t),n=e.inputs[0],i=Ye(e.inputs,1),a=Ye(e.inputs,2),s=Ye(e.inputs,3),o=Ye(e.inputs,4),u=Ye(e.inputs,5),l=Ye(e.inputs,6),d=Ye(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,p=Tn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,s,0);if(c)return An(e,p,i,a,o,void 0,l,d,u,r);if(!i||!a)throw new Error("key and value must be provided");let h=Tn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,s,r.hiddenSize),m=Tn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);An(e,p,h,m,o,void 0,l,d,u,r)}}),Qm,Xm,Ym,Jm,Po,Ov,Av,Bv=X(()=>{pe(),he(),Ve(),ye(),Qm=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Xm=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),Ee({numOutputs:n,axis:t.axis,splitSizes:r})},Ym=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${se("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Jm=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Po=(e,t)=>{let r=e[0].dims,n=P.size(r),i=e[0].dataType,a=P.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=U("input",i,r.length),u=new Array(t.numOutputs),l=[],d=[],c=0,p=[{type:12,data:n}];for(let m=0;m<t.numOutputs;m++){c+=t.splitSizes[m],u[m]=c;let g=r.slice();g[a]=t.splitSizes[m],d.push(g),s[m]=ne(`output${m}`,i,g.length),l.push({dims:d[m],dataType:e[0].dataType})}p.push({type:12,data:u},...le(r,...d));let h=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Ym(u.length)}
  ${Jm(s)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${se("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p})}},Ov=(e,t)=>{Qm(e.inputs);let r=e.inputs.length===1?t:Xm(e.inputs,t);e.compute(Po(e.inputs,r),{inputs:[0]})},Av=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Ee({axis:t,numOutputs:n,splitSizes:r})}}),eg,Di,Rv,Mv=X(()=>{pe(),he(),Ve(),ye(),eg=(e,t)=>{let[r,n,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!P.areEqual(n.dims,[])&&!P.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!P.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],l=r.dims[r.dims.length-2],d=i.dims[0],c=P.sizeFromDimension(r.dims,1)/l,p=o===0?i.dims[1]*2:c/s;if(o>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(l!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(p/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Di=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=P.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,d=e[2].dims[1],c=i===0?d*2:l/n,p=new Array(s,u,l/c,c-d),h=P.computeStrides(p),m=[{type:1,data:a},{type:12,data:p},{type:12,data:h},...e[0].dims.length===3?new Array({type:12,data:[o,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,u*c,1]}):[],...le(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],g=$=>{let y=U("input",e[0].dataType,e[0].dims.length),_=U("position_ids",e[1].dataType,e[1].dims.length),v=U("cos_cache",e[2].dataType,e[2].dims.length),b=U("sin_cache",e[3].dataType,e[3].dims.length),S=ne("output",e[0].dataType,e[0].dims.length);return $.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:h.length},{name:"input_output_strides",type:"u32",length:h.length}]),`
        ${$.declareVariables(y,_,v,b,S)}

        ${$.mainStart(Fr)}
          let half_rotary_emb_dim = uniforms.${v.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${_.broadcastedIndicesToOffset("bsnh.xy",ne("",_.type.tensor,2))};
            let position_id =
                u32(${_.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${y.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} -
                ${y.getByOffset("j")} * ${b.get("position_id","bsnh[3]")};
            ${S.setByOffset("i","re")}
            let im = ${y.getByOffset("i")} * ${b.get("position_id","bsnh[3]")} +
                ${y.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${S.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${S.setByOffset("k",y.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ee({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(P.size(p)/Fr)},programUniforms:m})}},Rv=(e,t)=>{eg(e.inputs,t),e.compute(Di(e.inputs,t))}}),tg,rg,Vs,ng,Dv,lS=X(()=>{Ve(),pe(),Eu(),Cv(),Bv(),sr(),Mv(),ye(),tg=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],l=r.dims[1],d=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],c=l,p=0,h=!n||n.dims.length===0,m=Math.floor(h?d/(t.numHeads+2*t.kvNumHeads):d/t.numHeads);h&&(d=m*t.numHeads);let g=a&&a.dims.length!==0,$=s&&s.dims.length!==0;if(g&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(g&&$){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(g||$)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}let _=0,v=!1,b=t.kvNumHeads?m*t.kvNumHeads:d;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');b=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');b=i.dims[1]*i.dims[3],v=!0}}let S=e.length>4?e[5]:void 0;if(S&&S.dims.length!==1&&S.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:b,headSize:m,vHeadSize:Math.floor(b/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:v,qkvFormat:y}},rg=Ee({perm:[0,2,1,3]}),Vs=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(at(n,rg.perm),{inputs:[n],outputs:[-1]})[0]),n},ng=(e,t,r,n)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=d=>{let c=U("seq_lens",r.dataType,r.dims),p=U("total_seq_lens",n.dataType,n.dims),h=ne("pos_ids",i,s),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(m).declareVariables(c,p,h)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${p.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${c.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${h.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${h.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${h.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},Dv=(e,t)=>{let r=tg(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=r.kvNumHeads?r.kvNumHeads:r.numHeads,c=Ee({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,d*r.headSize,d*r.headSize]}),[p,h,m]=!i&&!a?e.compute(Po([n],c),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,a],g,$;if(t.doRotary){let b=e.compute(ng(r.batchSize,r.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],S=e.inputs[7],I=e.inputs[8],T=Ee({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),z=[p,b,S,I],O=[-1];g=e.compute(Di(z,T),{inputs:z,outputs:O})[0],z.splice(0,1,h);let R=Ee({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});$=e.compute(Di(z,R),{inputs:z,outputs:O})[0]}let y=Tn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?g:p,void 0,0),_=Vs(e,t.doRotary?$:h,r),v=Vs(e,m,r);An(e,y,_,v,void 0,void 0,s,o,void 0,r,u,l)}}),Ws,ig,ag,Pv,dS=X(()=>{pe(),he(),sr(),ye(),Ws=(e,t,r,n,i,a,s,o)=>{let u=Ue(a),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,c=i*s,p=64;c===1&&(p=256);let h=[i,s,a/u],m=[i,s,2],g=["rank","type","type"],$=[];$.push(...le(h,m));let y=_=>{let v=U("x",t.dataType,3,u),b=U("scale",r.dataType,r.dims),S=U("bias",n.dataType,n.dims),I=ne("output",1,3,2),T=[v,b,S,I];return`
  var<workgroup> workgroup_shared : array<${d}, ${p}>;
  const workgroup_size = ${p}u;
  ${_.declareVariables(...T)}
  ${_.mainStart(p)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${v.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ir("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${ir("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:$}),getShaderSource:y},{inputs:[t,r,n],outputs:[-1]})[0]},ig=(e,t,r)=>{let n=t[0].dims,i=n,a=2,s=n[0],o=n[1],u=P.sizeFromDimension(n,a),l=Ue(u),d=P.size(i)/l,c=Ws(e,t[0],t[1],t[2],s,u,o,r.epsilon),p=[s,o,u/l],h=[s,o],m=["type","none"],g=$=>{let y=U("x",t[0].dataType,p.length,l),_=U("scale_shift",1,h.length,2),v=ne("output",t[0].dataType,p.length,l),b=[y,_,v];return`
  ${$.registerUniform("output_size","u32").declareVariables(...b)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${v.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${_.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${y.getByOffset("global_idx")} * ${v.type.value}(scale_shift.x) + ${v.type.value}(scale_shift.y);
      ${v.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...le(p,h,p)]}),getShaderSource:g},{inputs:[t[0],c]})},ag=(e,t,r)=>{let n=t[0].dims,i=n,a=n[0],s=n[n.length-1],o=P.sizeFromDimension(n,1)/s,u=Ue(s),l=P.size(i)/u,d=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],c=["type","type"],p=!1,h=[0,n.length-1];for(let y=0;y<n.length-2;y++)p=p||n[y+1]!==1,h.push(y+1);p=p&&n[n.length-1]!==1;let m=p?e.compute(at(e.inputs[0],h),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(y,_)=>n[h[_]])),g=Ws(e,m,t[1],t[2],a,o,s,r.epsilon),$=y=>{let _=Ge(t[0].dataType),v=u===1?"vec2f":`mat${u}x2f`,b=T=>{let z=T===0?"x":"y",O=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${_}(${O}(scale.${z}))`;case 2:return`vec2<${_}>(${O}(scale[0].${z}, scale[1].${z}))`;case 4:return`vec4<${_}>(${O}(scale[0].${z}, scale[1].${z}, scale[2].${z}, scale[3].${z}))`;default:throw new Error(`Not supported compoents ${u}`)}},S=U("input",t[0].dataType,t[0].dims,u),I=ne("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${S.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${v}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${y.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${b(0)}, ${b(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:$},{inputs:[t[0],g]})},Pv=(e,t)=>{t.format==="NHWC"?ag(e,e.inputs,t):ig(e,e.inputs,t)}}),sg,og,Nv,cS=X(()=>{pe(),he(),ye(),sg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},og=(e,t,r)=>{let n=t.simplified,i=e[0].dims,a=e[1],s=!n&&e[2],o=i,u=P.normalizeAxis(t.axis,i.length),l=P.sizeToDimension(i,u),d=P.sizeFromDimension(i,u),c=P.size(a.dims),p=s?P.size(s.dims):0;if(c!==d||s&&p!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);let h=[];for(let S=0;S<i.length;++S)S<u?h.push(i[S]):h.push(1);let m=Ue(d),g=["type","type"],$=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/m)},{type:1,data:t.epsilon}];s&&g.push("type");let y=r>1,_=r>2,v=S=>{let I=Ge(e[0].dataType),T=[U("x",e[0].dataType,e[0].dims,m),U("scale",a.dataType,a.dims,m)];s&&T.push(U("bias",s.dataType,s.dims,m)),T.push(ne("output",e[0].dataType,o,m)),y&&T.push(ne("mean_data_output",1,h)),_&&T.push(ne("inv_std_output",1,h));let z=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${S.registerUniforms(z).declareVariables(...T)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Eo("f32",m)};
    var mean_square_vector = ${Eo("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${qr(I,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ir("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ir("mean_square_vector",m)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${qr(I,m,"x[j + offset]")};
      let f32scale = ${qr(I,m,"scale[j]")};
      output[j + offset] = ${T[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${qr(I,m,"bias[j]")}`:""}
      );
    }

    ${y?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},b=[{dims:o,dataType:e[0].dataType}];return y&&b.push({dims:h,dataType:1}),_&&b.push({dims:h,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${r};${n}`,inputDependencies:g},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:$}),getShaderSource:v}},Nv=(e,t)=>{sg(e.inputs),e.compute(og(e.inputs,t,e.outputCount))}}),ug,Uv,pS=X(()=>{he(),Bu(),Ru(),ug=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Uv=e=>{ug(e.inputs);let t=Gr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(Au(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=P.size(e.inputs[0].dims.slice(0,-2)),s=P.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,n]),u=e.inputs[1].reshape([1,n,r]),l=[1,a,r],d=[o,u];e.compute(Mi(d,{activation:""},t,l),{inputs:d})}else e.compute(Mi(e.inputs,{activation:""},t))}}}),lg,dg,cg,qv,Vv,fS=X(()=>{pe(),he(),Ve(),ye(),lg=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!P.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(P.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(P.size(u)!==l)throw new Error("zeroPoints input size error.")}},dg=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],a=t.k,s=t.n,o=r.slice(0,n-2),u=P.size(o),l=e[1].dims[2]/4,d=e[0].dataType,c=Ue(t.k),p=Ue(l),h=Ue(s),m=o.concat([i,s]),g=i>1&&s/h%2===0?2:1,$=P.size(m)/h/g,y=64,_=[],v=[u,i,a/c],b=P.convertShape(e[1].dims).slice();b.splice(-1,1,l/p),_.push(...le(v)),_.push(...le(b)),_.push(...le(e[2].dims)),e.length===4&&_.push(...le(P.convertShape(e[3].dims)));let S=[u,i,s/h];_.push(...le(S));let I=T=>{let z=v.length,O=U("a",e[0].dataType,z,c),R=U("b",12,b.length,p),G=U("scales",e[2].dataType,e[2].dims.length),L=[O,R,G],Q=e.length===4?U("zero_points",12,e[3].dims.length):void 0;Q&&L.push(Q);let B=S.length,te=ne("output",e[0].dataType,B,h),F=Ge(e[0].dataType),M=(()=>{switch(c){case 1:return`array<${F}, 8>`;case 2:return`mat4x2<${F}>`;case 4:return`mat2x4<${F}>`;default:throw new Error(`${c}-component is not supported.`)}})(),J=()=>{let q=`
          // reuse a data
            var input_offset = ${O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`)};
            var a_data: ${M};
            for (var j: u32 = 0; j < ${8/c}; j++) {
              a_data[j] = ${O.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let j=0;j<h*g;j++)q+=`
            b_value = ${p===1?`b${j}_data`:`b${j}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${M}(${Array.from({length:4},(K,C)=>`${F}(b_value_lower[${C}]), ${F}(b_value_upper[${C}])`).join(", ")});
            b_dequantized_values = ${c===1?`${M}(${Array.from({length:8},(K,C)=>`(b_quantized_values[${C}] - ${Q?`zero_point${j}`:"zero_point"}) * scale${j}`).join(", ")});`:`(b_quantized_values - ${M}(${Array(8).fill(`${Q?`zero_point${j}`:"zero_point"}`).join(",")})) * scale${j};`};
            workgroup_shared[local_id.x * ${g} + ${Math.floor(j/h)}]${h>1?`[${j%h}]`:""} += ${Array.from({length:8/c},(K,C)=>`${c===1?`a_data[${C}] * b_dequantized_values[${C}]`:`dot(a_data[${C}], b_dequantized_values[${C}])`}`).join(" + ")};
          `;return q},W=()=>{let q=`
            var col_index = col * ${h};
            ${Q?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${F}(8);`}
            `;for(let j=0;j<h*g;j++)q+=`
            let scale${j} = ${G.getByOffset("col_index * nBlocksPerCol + block")};
            ${Q?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${j} = ${F}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return q},re=()=>{let q=`col_index = col * ${h};`;for(let j=0;j<h*g;j++)q+=`
            let b${j}_data = ${R.getByIndices(`${R.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return q+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${M};
            var b_dequantized_values: ${M};`,q};return`
        var<workgroup> workgroup_shared: array<${te.type.value}, ${g*y}>;
        ${T.declareVariables(...L,te)}
        ${T.mainStart([y,1,1])}
          let output_indices = ${te.offsetToIndices(`(global_idx / ${y}) * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${y}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${W()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${re()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${J()}
                word_offset += ${8/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${g}) {
            var output_value: ${te.type.value} = ${te.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${y}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${g};
            }
            ${te.setByIndices(`${te.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${p};${h};${g};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:$},programUniforms:_}),getShaderSource:I}},cg=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],a=t.k,s=t.n,o=r.slice(0,n-2),u=P.size(o),l=e[1].dims[2]/4,d=e[0].dataType,c=Ue(t.k),p=Ue(l),h=o.concat([i,s]),m=128,g=s%8===0?8:s%4===0?4:1,$=m/g,y=$*p*8,_=y/c,v=y/t.blockSize,b=P.size(h)/g,S=[],I=[u,i,a/c],T=P.convertShape(e[1].dims).slice();T.splice(-1,1,l/p),S.push(...le(I)),S.push(...le(T)),S.push(...le(e[2].dims)),e.length===4&&S.push(...le(P.convertShape(e[3].dims)));let z=[u,i,s];S.push(...le(z));let O=R=>{let G=I.length,L=U("a",e[0].dataType,G,c),Q=U("b",12,T.length,p),B=U("scales",e[2].dataType,e[2].dims.length),te=[L,Q,B],F=e.length===4?U("zero_points",12,e[3].dims.length):void 0;F&&te.push(F);let M=z.length,J=ne("output",e[0].dataType,M),W=Ge(e[0].dataType),re=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${W}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${W}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${W}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${W}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${L.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${J.type.value}, ${$}>, ${g}>;
        ${R.declareVariables(...te,J)}
        ${R.mainStart([$,g,1])}
          let output_indices = ${J.offsetToIndices(`workgroup_index * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${L.getByIndices(`${L.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${L.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${F?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${W}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${W}(8);`}
            let scale = ${B.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Q.getByIndices(`${Q.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${p}; i++) {
              ${re()}
              let b_value = ${p===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${W}>(${Array.from({length:4},(q,j)=>`${W}(b_value_lower[${j}]), ${W}(b_value_upper[${j}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${W}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(q,j)=>`${`dot(a_data${j}, b_dequantized_values[${j}])`}`).join(" + ")};
              word_offset += ${8/c};
            }
            workgroupBarrier();
          }

          if (local_idx < ${g}) {
            var output_value: ${J.type.value} = ${J.type.value}(0);
            for (var b = 0u; b < ${$}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${J.setByIndices(`${J.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${p};${$};${g}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:h,dataType:d}],dispatchGroup:{x:b},programUniforms:S}),getShaderSource:O}},qv=(e,t)=>{lg(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(cg(e.inputs,t)):e.compute(dg(e.inputs,t))},Vv=e=>Ee(e)}),pg,fg,hg,mg,gg,_g,yg,wg,Wv,hS=X(()=>{pe(),he(),ye(),pg=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},fg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${se("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${se("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${se("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},hg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${se("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${se("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${se("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${se("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},mg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${se("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${se("uniforms.x_shape",i,t)})) {
                  k = i32(${se("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${se("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},gg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${se("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${se("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${se("uniforms.x_shape",i,t)})) {
                  k -= i32(${se("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${se("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},_g=(e,t,r)=>{switch(r.mode){case 0:return fg(e,t,r.pads.length);case 1:return hg(e,t,r.pads.length);case 2:return mg(e,t,r.pads.length);case 3:return gg(e,t,r.pads.length);default:throw new Error("Invalid mode")}},yg=(e,t)=>{let r=P.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=P.size(r),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...le(e[0].dims,r));let o=["rank"],u=l=>{let d=ne("output",e[0].dataType,r.length),c=U("x",e[0].dataType,n.length),p=c.type.value,h=_g(d,n.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:s?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(c,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${h}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(P.size(r)/64)},programUniforms:a}),getShaderSource:u}},wg=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(r[u]),a[Number(o[u])+i]=Number(r[u+o.length])}else r.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:n,pads:s}}else return t},Wv=(e,t)=>{pg(e.inputs);let r=wg(e.inputs,t);e.compute(yg(e.inputs,r),{inputs:[0]})}}),gn,Ls,Gs,Fs,js,$g,bg,Hs,Ks,Lv,Gv,Zs,Fv,jv,Qs,Hv,Kv,Zv,Qv,mS=X(()=>{It(),pe(),he(),ye(),gn=e=>{if(Me.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ls=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Bi.adjustPoolAttributes(r,i,s,o,u,l);let d=Bi.computePoolOutputShape(r,i,o,u,s,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let p=d.slice();return p.push(p.splice(1,1)[0]),[c,n?p:d]},Gs=(e,t)=>{let r=t.format==="NHWC",n=P.size(e),i=P.size(t.kernelShape),a=[{type:12,data:n},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],c=!!(l+d);a.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:d}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let h=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],g=t.pads[t.pads.length/2-2],$=t.pads[t.pads.length-2];p=!!(g+$),a.push({type:12,data:h},{type:12,data:m},{type:12,data:g},{type:12,data:$}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,p]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=P.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[a,s,!!u,!1,!1]}},Fs=(e,t,r,n,i,a,s,o,u,l,d,c)=>{let p=i.format==="NHWC",h=t.type.value,m=ne("output",t.type.tensor,n);if(i.kernelShape.length<=2){let g="",$="",y="",_=r-(p?2:1);if(d?g=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${_}] < 0 || xIndices[${_}]
                      >= uniforms.x_shape[${_}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:g=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){let v=r-(p?3:2);c?$=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${v}] < 0 || xIndices[${v}] >= uniforms.x_shape[${v}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:$=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sh - uniforms.phStart + j;
                `,y=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${h}(${o});
              var pad = 0;
              ${$}
              ${g}
              ${y}
              ${s}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let g=i.kernelShape.length,$=i.pads.length,y="";return l?y=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:y=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${g}>;

              var value = ${h}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${g-1}u; j++) {
                  offsets[j] = offset / ${se("uniforms.kernelStrides","j",g)};
                  offset -= offsets[j] * ${se("uniforms.kernelStrides","j",g)};
                }
                offsets[${g-1}] = offset;

                isPad = false;
                for (var j = ${r-g}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${se("uniforms.strides",`j - ${r-g}u`,g)}
                    + offsets[j - ${r-g}u] - ${se("uniforms.pads","j - 2u",$)};
                  ${y}
              }
              ${s}

              output[global_idx] = value;
            }`}},js=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,$g=e=>`${js(e)};${e.countIncludePad}`,bg=e=>`${js(e)};${e.storageOrder};${e.dilations}`,Hs=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ks=(e,t,r,n)=>{let[i,a]=Ls(t,n,r),s=U("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[d,c,p,h,m]=Gs(a,i);d.push(...le(t.dims,a));let g=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${p};${h};${m}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(P.size(a)/64)},programUniforms:d}),getShaderSource:$=>Fs($,s,t.dims.length,a.length,i,u,l,0,c,p,h,m)}},Lv=e=>{let t=e.count_include_pad!==0,r=Hs(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:$g(n)}},Gv=(e,t)=>{gn(e.inputs),e.compute(Ks("AveragePool",e.inputs[0],!1,t))},Zs={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Fv=e=>{let t=e.format;return{format:t,...Zs,cacheKey:t}},jv=(e,t)=>{gn(e.inputs),e.compute(Ks("GlobalAveragePool",e.inputs[0],!0,t))},Qs=(e,t,r,n)=>{let[i,a]=Ls(t,n,r),s=`
      value = max(x_val, value);
    `,o="",u=U("x",t.dataType,t.dims.length),l=["rank"],[d,c,p,h,m]=Gs(a,i);return d.push(...le(t.dims,a)),{name:e,shaderCache:{hint:`${n.cacheKey};${p};${h};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(P.size(a)/64)},programUniforms:d}),getShaderSource:g=>Fs(g,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,c,p,h,m)}},Hv=(e,t)=>{gn(e.inputs),e.compute(Qs("MaxPool",e.inputs[0],!1,t))},Kv=e=>{let t=e.storage_order,r=e.dilations,n=Hs(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:bg(i)}},Zv=e=>{let t=e.format;return{format:t,...Zs,cacheKey:t}},Qv=(e,t)=>{gn(e.inputs),e.compute(Qs("GlobalMaxPool",e.inputs[0],!0,t))}}),vg,xg,Xv,Yv,gS=X(()=>{pe(),he(),Ve(),ye(),vg=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},xg=(e,t)=>{let r=P.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,a=e[0].dims,s=e[1].dataType,o=P.size(a),u=n===3||n===2,l=u?[Math.ceil(P.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(P.size(c.dims)/4)]:c.dims:void 0,h=d.length===0||d.length===1&&d[0]===1,m=h===!1&&d.length===1,g=Ue(o),$=h&&(!u||g===4),y=$?g:1,_=$&&!u?g:1,v=U("input",u?12:n,l.length,_),b=U("scale",s,d.length),S=c?U("zero_point",u?12:n,p.length):void 0,I=ne("output",s,a.length,y),T=[v,b];S&&T.push(S);let z=[l,d];c&&z.push(p);let O=[{type:12,data:o/y},{type:12,data:r},{type:12,data:t.blockSize},...le(...z,a)],R=G=>{let L=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${G.registerUniforms(L).declareVariables(...T,I)}
      ${G.mainStart()}
          ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${v.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${y===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${v.getByOffset("global_idx")};`};

          // Set scale input
          ${h?`let scale_value= ${b.getByOffset("0")}`:m?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${b.getByOffset("scale_index")};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${b.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${b.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${S?h?u?`
                let zero_point_input = ${S.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${S.getByOffset("0")}`:m?u?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${S.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${S.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${b.indicesToOffset("scale_indices")};
                let zero_point_input = ${S.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${S.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":v.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:S?["rank","rank","rank"]:["rank","rank"]},getShaderSource:R,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/y/64),y:1,z:1},programUniforms:O})}},Xv=(e,t)=>{vg(e.inputs,t),e.compute(xg(e.inputs,t))},Yv=e=>Ee({axis:e.axis,blockSize:e.blockSize})}),Sg,kg,Jv,_S=X(()=>{It(),pe(),ye(),Sg=(e,t,r)=>{let n=e===t,i=e<t&&r<0,a=e>t&&r>0;if(n||i||a)throw new Error("Range these inputs' contents are invalid.")},kg=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),a=[i],s=i,o=[{type:12,data:s},{type:n,data:e},{type:n,data:r},...le(a)],u=l=>{let d=ne("output",n,a.length),c=d.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Jv=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Me.webgpu.validateInputContent&&Sg(t,r,n),e.compute(kg(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),Ig,Xs,Ys,Tg,e2,t2,yS=X(()=>{pe(),he(),Ve(),ye(),Ig=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${i}bitcast<${n}>(oldValue) + (${r})${a}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${a}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Xs=(e,t)=>`${e===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[${t?"i - indices_start":"i"}];
    let dim_value = uniforms.output_shape[${t?"i - indices_start":"i"} + uniforms.last_index_dimension];`}
    
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));`,Ys=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${Ig(e.reduction,"output[data_offset + i]","value",t)}
      }`,Tg=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,a=1,s=Math.ceil(P.size(n)/a),o=n[n.length-1],u=P.sizeFromDimension(r,o),l=P.sizeFromDimension(n,0)/o,d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...le(e[1].dims,e[2].dims,i)],c=p=>{let h=U("indices",e[1].dataType,e[1].dims.length),m=U("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?z$("output",e[0].dataType,i.length):ne("output",e[0].dataType,i.length,a);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,m,g)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${l}; i = i + 1) {
      for (var j = i + 1; j < ${l}; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    // Process each index-update pair individually when duplicates exist
    for (var idx = 0u; idx < ${l}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${Xs(r.length,!1)}
      }
      ${Ys(t,g.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${Xs(r.length,!0)}
  }
  ${Ys(t,g.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},e2=e=>Ee({reduction:e.reduction}),t2=(e,t)=>{e.compute(Tg(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Eg,zg,Cg,Js,Og,Ag,Bg,Rg,Mg,Dg,Pg,Ng,eo,Ug,qg,Vg,Wg,Lg,r2,n2,wS=X(()=>{pe(),he(),Ve(),ye(),Eg=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},zg=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,a)=>n[i]=e[a]),n},Cg=(e,t,r,n,i,a)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(d=>a.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(d=>n.push(d)),n.length!==0&&n.length!==l&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Eg(n,t),t.axes.length>0&&zg(n,t.axes,l).forEach((d,c)=>n[c]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>i.push(Number(d))),i.length!==0&&i.length!==l&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Js=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,Og=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Js("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Js("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ag=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Bg=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((a,s)=>{n[a]=i[s],n[s+r]=i[t.length+s]}),n):i},Rg=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(a=>i.push(a)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((a,s)=>i[a]=r[s])}else r.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},Mg=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=n),r.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(n,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},Dg=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${se("uniforms.scales","i",n)};
        var roi_low = ${se("uniforms.roi","i",i)};
        var roi_hi = ${se("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${se("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${se("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Pg=(e,t,r,n,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${se("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${se("uniforms.roi","i",a)};
          var roi_hi = ${se("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${se("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${se("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Ng=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${se("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,eo=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Ug=(e,t,r,n,i)=>{let[a,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${eo(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${s}];
      var col:${l} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},qg=(e,t,r,n,i,a,s,o,u,l)=>{let d=r.length===2,[c,p]=d?[0,1]:[2,3],h=e.type.value,m=g=>{let $=g===c?"row":"col";return`
      fn ${$}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${h} {
        var output_index = ${t.indicesGet("output_indices",g)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[g]},
        ${n[g]}, ${r[g]}, ${a[g]}, ${a[g]} + ${r.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[g]} - 1))) {
          return ${u};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${$}: ${h} = originalIdx + ${h}(i);
          if (${$} < 0 || ${$} >= ${r[g]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${$} = max(0, min(${$}, ${r[g]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",g,`u32(${$})`)};
          data[i + 1] = ${g===c?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(c)};
    ${m(p)};
  fn getCubicInterpolationCoefs(s: ${h}) -> array<${h}, 4> {
    var absS = abs(s);
    var coeffs: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${h} = 1.0 - absS;
    var twoMinusAbsS: ${h} = 2.0 - absS;
    var onePlusAbsS: ${h} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${h}, 4>, coefs: array<${h}, 4>) -> ${h} {
    var coefsSum: ${h} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${h} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Vg=(e,t,r,n,i)=>{let[a,s,o,u,l]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${eo(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${s}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${u}];
      ${n?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Wg=(e,t,r,n,i,a)=>{let s=e.dims,o=Bg(a,t.axes,s.length),u=Rg(s,n,i,t.axes),l=n.slice();n.length===0&&(l=s.map((_,v)=>_===0?1:u[v]/_),t.keepAspectRatioPolicy!=="stretch"&&(u=Mg(s,l,t)));let d=ne("output",e.dataType,u.length),c=U("input",e.dataType,s.length),p=P.size(u),h=s.length===u.length&&s.every((_,v)=>_===u[v]),m=t.coordinateTransformMode==="tf_crop_and_resize",g=t.extrapolationValue,$=c.type.value,y=_=>`
      ${h?"":`
      ${Og(t.coordinateTransformMode,$)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Ng(c,s)};
              ${Ag(t.nearestMode,r,$)};
              ${Pg(c,d,s,u,l.length,o.length,m)};
              `;case"linear":return`
              ${Dg(d,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Ug(c,d,s,m,g)}`;if(s.length===3||s.length===5)return`${Vg(c,d,s,m,g)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${qg(c,d,s,u,l,o,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${_.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(c,d)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${h?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${h}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:o},...le(s,u)]})}},Lg=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},r2=(e,t)=>{let r=[],n=[],i=[],a=Lg(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Cg(e.inputs,t,a,r,n,i),e.compute(Wg(e.inputs[0],t,a,r,n,i),{inputs:[0]})},n2=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Ee({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),Gg,Fg,i2,$S=X(()=>{pe(),he(),ye(),Gg=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Fg=(e,t,r,n)=>{let i=t.simplified,a=e[0].dims,s=P.size(a),o=a,u=s,l=a.slice(-1)[0],d=n?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,h=n&&r>1,m=n&&r>2,g=r>3,$=64,y=Ue(l),_=[{type:12,data:u},{type:12,data:y},{type:12,data:l},{type:1,data:t.epsilon}],v=S=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],T=[U("x",e[0].dataType,e[0].dims,y),U("skip",e[1].dataType,e[1].dims,y),U("gamma",e[2].dataType,e[2].dims,y)];c&&T.push(U("beta",e[3].dataType,e[3].dims,y)),p&&T.push(U("bias",e[4].dataType,e[4].dims,y)),T.push(ne("output",e[0].dataType,o,y)),h&&T.push(ne("mean_output",1,d)),m&&T.push(ne("inv_std_output",1,d)),g&&T.push(ne("input_skip_bias_sum",e[0].dataType,o,y));let z=Ge(e[0].dataType),O=Ge(1,y);return`

      ${S.registerUniforms(I).declareVariables(...T)}
      var<workgroup> sum_shared : array<${O}, ${$}>;
      var<workgroup> sum_squared_shared : array<${O}, ${$}>;

      ${S.mainStart([$,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${$};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${$};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${$-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${p?"bias[offset1d + i]":z+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${g?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${qr(z,y,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${$};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${ir("sum",y)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ir("square_sum",y)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${h?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${z}(mean)`}) *
            ${z}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},b=[{dims:o,dataType:e[0].dataType}];return r>1&&b.push({dims:d,dataType:1}),r>2&&b.push({dims:d,dataType:1}),r>3&&b.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${y};${h};${m};${g}`,inputDependencies:e.map((S,I)=>"type")},getShaderSource:v,getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:_})}},i2=(e,t)=>{Gg(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Fg(e.inputs,t,e.outputCount,!1),{outputs:r})}}),jg,_n,Hg,to,Kg,Zg,a2,s2,bS=X(()=>{pe(),he(),Ve(),ye(),jg=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},_n=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Hg=(e,t)=>{if(e.length>1){let r=_n(e,1),n=_n(e,2),i=_n(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Ee({starts:r,ends:n,axes:i})}else return t},to=(e,t,r,n,i)=>{let a=e;return e<0&&(a+=r[n[t]]),i[t]<0?Math.max(0,Math.min(a,r[n[t]]-1)):Math.max(0,Math.min(a,r[n[t]]))},Kg=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${se("uniforms.input_shape","i",r.length)};
            let steps_i = ${se("uniforms.steps","i",r.length)};
            let signs_i = ${se("uniforms.signs","i",r.length)};
            let starts_i = ${se("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Zg=(e,t)=>{let r=e[0].dims,n=P.size(r),i=t.axes.length>0?P.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=_n(e,4);a.forEach(y=>y!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map((y,_)=>to(y,_,r,i,a)),o=t.ends.map((y,_)=>to(y,_,r,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let y=0;y<r.length;++y)i.includes(y)||(s.splice(y,0,0),o.splice(y,0,r[y]),a.splice(y,0,1));let u=a.map(y=>Math.sign(y));a.forEach((y,_,v)=>{if(y<0){let b=(o[_]-s[_])/y,S=s[_],I=S+b*a[_];s[_]=I,o[_]=S,v[_]=-y}});let l=r.slice(0);i.forEach((y,_)=>{l[y]=Math.ceil((o[y]-s[y])/a[y])});let d={dims:l,dataType:e[0].dataType},c=ne("output",e[0].dataType,l.length),p=U("input",e[0].dataType,e[0].dims.length),h=P.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],g=[{type:12,data:h},{type:12,data:s},{type:6,data:u},{type:12,data:a},...le(e[0].dims,l)],$=y=>`
      ${y.registerUniforms(m).declareVariables(p,c)}
        ${Kg(p,c,r)}
        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:g})}},a2=(e,t)=>{jg(e.inputs,t);let r=Hg(e.inputs,t);e.compute(Zg(e.inputs,r),{inputs:[0]})},s2=e=>{let t=e.starts,r=e.ends,n=e.axes;return Ee({starts:t,ends:r,axes:n})}}),Qg,Xg,o2,u2,vS=X(()=>{pe(),he(),Ve(),sr(),ye(),Qg=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Xg=(e,t)=>{let r=e.inputs[0],n=r.dims,i=P.size(n),a=n.length,s=P.normalizeAxis(t.axis,a),o=s<n.length-1,u,l=[];o?(l=Array.from({length:a},(T,z)=>z),l[s]=a-1,l[a-1]=s,u=e.compute(at(r,l),{inputs:[r],outputs:[-1]})[0]):u=r;let d=u.dims,c=d[a-1],p=i/c,h=Ue(c),m=c/h,g=64;p===1&&(g=256);let $=(T,z)=>z===4?`max(max(${T}.x, ${T}.y), max(${T}.z, ${T}.w))`:z===2?`max(${T}.x, ${T}.y)`:z===3?`max(max(${T}.x, ${T}.y), ${T}.z)`:T,y=U("x",u.dataType,u.dims,h),_=ne("result",u.dataType,u.dims,h),v=y.type.value,b=Ge(u.dataType)==="f32"?`var threadMax = ${v}(-3.402823e+38f);`:`var threadMax = ${v}(-65504.0h);`,S=T=>`
      var<workgroup> rowMaxShared : ${v};
      var<workgroup> rowSumShared : ${v};
      var<workgroup> threadShared : array<${v}, ${g}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${v} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${v}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${T.registerUniform("packedCols","i32").declareVariables(y,_)}
      ${T.mainStart(g)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${g};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${v}(${$("threadShared[0]",h)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${v}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${v}(${ir("threadShared[0]",h)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${h};${g}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:S},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(at(I,l),{inputs:[I]})},o2=(e,t)=>{Qg(e.inputs),Xg(e,t)},u2=e=>Ee({axis:e.axis})}),ro,Yg,Jg,e_,l2,xS=X(()=>{pe(),he(),ye(),ro=e=>Array.from(e.getBigInt64Array(),Number),Yg=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ro(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Jg=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},e_=(e,t)=>{let r=e[0].dims,n=t??ro(e[1]),i=Jg(r,n),a=P.size(i),s=e[0].dataType,o=U("input",s,r.length),u=ne("output",s,i.length),l=d=>`
      const inputShape = ${o.indices(...r)};
      ${d.registerUniform("output_size","u32").declareVariables(o,u)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...le(e[0].dims,i)]}),getShaderSource:l}},l2=e=>{Yg(e.inputs),e.compute(e_(e.inputs),{inputs:[0]})}}),t_,r_,d2,SS=X(()=>{pe(),he(),ye(),t_=(e,t,r,n,i)=>{let a=ne("output_data",i,r.length,4),s=U("a_data",t[1].dataType,t[1].dims.length,4),o=U("b_data",t[2].dataType,t[2].dims.length,4),u=U("c_data",t[0].dataType,t[0].dims.length,4),l,d=(c,p,h)=>`select(${p}, ${c}, ${h})`;if(!n)l=a.setByOffset("global_idx",d(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(p,h,m="")=>{let g=`a_data[index_a${h}][component_a${h}]`,$=`b_data[index_b${h}][component_b${h}]`,y=`bool(c_data[index_c${h}] & (0xffu << (component_c${h} * 8)))`;return`
            let output_indices${h} = ${a.offsetToIndices(`global_idx * 4u + ${h}u`)};
            let offset_a${h} = ${s.broadcastedIndicesToOffset(`output_indices${h}`,a)};
            let offset_b${h} = ${o.broadcastedIndicesToOffset(`output_indices${h}`,a)};
            let offset_c${h} = ${u.broadcastedIndicesToOffset(`output_indices${h}`,a)};
            let index_a${h} = offset_a${h} / 4u;
            let index_b${h} = offset_b${h} / 4u;
            let index_c${h} = offset_c${h} / 4u;
            let component_a${h} = offset_a${h} % 4u;
            let component_b${h} = offset_b${h} % 4u;
            let component_c${h} = offset_c${h} % 4u;
            ${p}[${h}] = ${m}(${d(g,$,y)});
          `};i===9?l=`
            var data = vec4<u32>(0);
            ${c("data",0,"u32")}
            ${c("data",1,"u32")}
            ${c("data",2,"u32")}
            ${c("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${c("output_data[global_idx]",0)}
            ${c("output_data[global_idx]",1)}
            ${c("output_data[global_idx]",2)}
            ${c("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},r_=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,a=!(P.areEqual(t,r)&&P.areEqual(r,n)),s=t,o=P.size(t);if(a){let l=Gr.calcShape(Gr.calcShape(t,r,!1),n,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=P.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>t_(l,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...le(n,t,r,s)]})}},d2=e=>{e.compute(r_(e.inputs))}}),c2,kS=X(()=>{U3(),Eu(),q3(),V3(),W3(),L3(),G3(),Z3(),X3(),Y3(),J3(),eS(),tS(),rS(),nS(),iS(),aS(),sS(),oS(),uS(),lS(),dS(),cS(),pS(),fS(),Cv(),hS(),mS(),gS(),_S(),yS(),Tu(),wS(),Mv(),$S(),bS(),vS(),Bv(),xS(),sr(),zu(),SS(),c2=new Map([["Abs",[ib]],["Acos",[ab]],["Acosh",[sb]],["Add",[qb]],["ArgMax",[eb,Co]],["ArgMin",[J$,Co]],["Asin",[ob]],["Asinh",[ub]],["Atan",[lb]],["Atanh",[db]],["Attention",[tb]],["AveragePool",[Gv,Lv]],["BatchNormalization",[rb]],["BiasAdd",[nb]],["BiasSplitGelu",[Ub]],["Cast",[pb,cb]],["Ceil",[hb]],["Clip",[fb]],["Concat",[Qb,Xb]],["Conv",[Do,Mo]],["ConvTranspose",[ov,sv]],["Cos",[mb]],["Cosh",[gb]],["CumSum",[uv,lv]],["DepthToSpace",[dv,cv]],["DequantizeLinear",[Xv,Yv]],["Div",[Vb]],["Einsum",[pv,fv]],["Elu",[_b,In]],["Equal",[Wb]],["Erf",[yb]],["Exp",[wb]],["Expand",[hv]],["FastGelu",[mv]],["Floor",[$b]],["FusedConv",[Do,Mo]],["Gather",[_v,gv]],["GatherElements",[xv,vv]],["GatherBlockQuantized",[$v,bv]],["GatherND",[yv,wv]],["Gelu",[bb]],["Gemm",[kv,Sv]],["GlobalAveragePool",[jv,Fv]],["GlobalMaxPool",[Qv,Zv]],["Greater",[jb]],["GreaterOrEqual",[Kb]],["GridSample",[Iv,Tv]],["GroupQueryAttention",[Dv]],["HardSigmoid",[zb,Eb]],["InstanceNormalization",[Pv]],["LayerNormalization",[Nv]],["LeakyRelu",[vb,In]],["Less",[Hb]],["LessOrEqual",[Zb]],["Log",[Pb]],["MatMul",[Uv]],["MatMulNBits",[qv,Vv]],["MaxPool",[Hv,Kv]],["Mul",[Lb]],["MultiHeadAttention",[zv,Ev]],["Neg",[Sb]],["Not",[xb]],["Pad",[Wv]],["Pow",[Gb]],["QuickGelu",[Nb,In]],["Range",[Jv]],["Reciprocal",[kb]],["ReduceMin",[K$]],["ReduceMean",[L$]],["ReduceMax",[H$]],["ReduceSum",[Q$]],["ReduceProd",[Z$]],["ReduceL1",[G$]],["ReduceL2",[F$]],["ReduceLogSum",[Y$]],["ReduceLogSumExp",[j$]],["ReduceSumSquare",[X$]],["Relu",[Ib]],["Resize",[r2,n2]],["RotaryEmbedding",[Rv]],["ScatterND",[t2,e2]],["Sigmoid",[Tb]],["Sin",[Cb]],["Sinh",[Ob]],["Slice",[a2,s2]],["SkipLayerNormalization",[i2]],["Split",[Ov,Av]],["Sqrt",[Ab]],["Softmax",[o2,u2]],["Sub",[Fb]],["Tan",[Bb]],["Tanh",[Rb]],["ThresholdedRelu",[Db,In]],["Tile",[l2]],["Transpose",[O$,A$]],["Where",[d2]]])}),p2,IS=X(()=>{It(),Gt(),ye(),p2=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){Mt(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of r)o.push({binding:o.length,resource:{buffer:l.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),St(e.programInfo.name)}dispose(){}build(e,t){Mt(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{r.features.has(l.feature)&&n.push(`enable ${l.extension};`)});let i=C$(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${n.join(`
`)}
${i.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});ve("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return St(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let a=t*r*n,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),f2={};jr(f2,{WebGpuBackend:()=>h2});var n_,i_,a_,h2,TS=X(()=>{It(),pe(),Gt(),k$(),P3(),kS(),IS(),n_=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let a=e[n].dims.length;r.push(`${i};${a}`);break}case"dims":{let a=e[n].dims.join(",");r.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},i_=(e,t,r)=>{let n=e.name;return e.shaderCache?.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${n_(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,n},a_=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},h2=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=a=>t.features.has(a)&&r.push(a)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n),this.adapterInfo=new a_(t.info||await t.requestAdapterInfo()),this.gpuDataManager=E$(this),this.programManager=new p2(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,xu(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Mt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],a=i.kernelId,s=this.kernels.get(a),o=s.kernelType,u=s.kernelName,l=i.programName,d=i.inputTensorViews,c=i.outputTensorViews,p=t[n*2],h=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=p);let m=Number(p-this.queryTimeBase),g=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(m)||!Number.isSafeInteger(g))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map($=>({dims:$.dims,dataType:Wt($.dataType)})),outputsMetadata:c.map($=>({dims:$.dims,dataType:Wt($.dataType)})),kernelId:a,kernelType:o,kernelName:u,programName:l,startTime:m,endTime:g});else{let $="";d.forEach((_,v)=>{$+=`input[${v}]: [${_.dims}] | ${Wt(_.dataType)}, `});let y="";c.forEach((_,v)=>{y+=`output[${v}]: [${_.dims}] | ${Wt(_.dataType)}, `}),console.log(`[profiling] kernel "${a}|${o}|${u}|${l}" ${$}${y}execution time: ${g-m} ns`)}Ci("GPU",`${l}::${p}::${h}`)}e.unmap(),this.pendingQueries.delete(e)}),St()}run(e,t,r,n,i,a){Mt(e.name);let s=[];for(let _=0;_<t.length;++_){let v=t[_].data;if(v===0)continue;let b=this.gpuDataManager.get(v);if(!b)throw new Error(`no GPU data for input: ${v}`);s.push(b)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=r.length===0?o.map((_,v)=>v):r;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);let c=[],p=[];for(let _=0;_<o.length;++_){if(!Number.isInteger(d[_])||d[_]<-3||d[_]>=a)throw new Error(`Invalid output index: ${d[_]}`);if(d[_]===-3)continue;let v=d[_]===-1,b=d[_]===-2,S=v||b?i(o[_].dataType,o[_].dims):n(d[_],o[_].dataType,o[_].dims);if(c.push(S),S.data===0)continue;let I=this.gpuDataManager.get(S.data);if(!I)throw new Error(`no GPU data for output: ${S.data}`);if(v&&this.temporaryData.push(I),b){let T=this.kernelPersistentData.get(this.currentKernelId);T||(T=[],this.kernelPersistentData.set(this.currentKernelId,T)),T.push(I)}p.push(I)}if(s.length!==t.length||p.length!==c.length){if(p.length===0)return St(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let h;if(l){let _=0,v=[];l.forEach(T=>{let z=typeof T.data=="number"?[T.data]:T.data;if(z.length===0)return;let O=T.type===10?2:4,R,G;T.type===10?(G=z.length>4?16:z.length>2?8:z.length*O,R=z.length>4?16:O*z.length):(G=z.length<=2?z.length*O:16,R=16),_=Math.ceil(_/G)*G,v.push(_);let L=T.type===10?8:4;_+=z.length>4?Math.ceil(z.length/L)*R:z.length*O});let b=16;_=Math.ceil(_/b)*b;let S=new ArrayBuffer(_);l.forEach((T,z)=>{let O=v[z],R=typeof T.data=="number"?[T.data]:T.data;if(T.type===6)new Int32Array(S,O,R.length).set(R);else if(T.type===12)new Uint32Array(S,O,R.length).set(R);else if(T.type===10)new Uint16Array(S,O,R.length).set(R);else if(T.type===1)new Float32Array(S,O,R.length).set(R);else throw new Error(`Unsupported uniform type: ${Wt(T.type)}`)});let I=this.gpuDataManager.create(_,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,S,0,_),this.gpuDataManager.release(I.id),h={offset:0,size:_,buffer:I.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),g=m[1]===1&&m[2]===1,$=i_(e,t,g),y=this.programManager.getArtifact($);if(y||(y=this.programManager.build(e,m),this.programManager.setArtifact($,y),ve("info",()=>`[artifact] key: ${$}, programName: ${e.name}`)),l&&y.uniformVariablesInfo){if(l.length!==y.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${y.uniformVariablesInfo.length}, got ${l.length} in program "${y.programInfo.name}".`);for(let _=0;_<l.length;_++){let v=l[_],b=v.type,S=typeof v.data=="number"?1:v.data.length,[I,T]=y.uniformVariablesInfo[_];if(b!==I||S!==T)throw new Error(`Uniform variable ${_} mismatch: expect type ${I} with size ${T}, got type ${b} with size ${S} in program "${y.programInfo.name}".`)}}if(ve("info",()=>`[ProgramManager] run "${e.name}" (key=${$}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let _={kernelId:this.currentKernelId,programName:y.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(_),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(_)}return this.programManager.run(y,s,p,m,h),St(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=c2.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,a=n.kernelName,s=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ve("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&r.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(r,n,a);return i.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await To(this,e,t);return Su(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ve("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ve("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ve("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),a=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),m2={};jr(m2,{init:()=>g2});var hi,s_,g2,ES=X(()=>{pe(),Gt(),he(),D3(),hi=class _2{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=P.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=P.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=P.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=P.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(P.size(t)!==P.size(this.dims))throw new Error("Invalid new shape");return new _2(this.module,this.dataType,this.data,t)}},s_=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,a=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,a));let s=Number(e.getValue(n*i++,a));this.outputCount=Number(e.getValue(n*i++,a)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,a));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(n*i++,a)),d=Number(e.getValue(n*i++,"*")),c=Number(e.getValue(n*i++,a)),p=[];for(let h=0;h<c;h++)p.push(Number(e.getValue(n*i++,a)));o.push(new hi(e,l,d,p))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,n=t?.outputs??[],i=(s,o,u)=>new hi(this.module,o,this.output(s,u),u),a=(s,o)=>{let u=vr(s,o);if(!u)throw new Error(`Unsupported data type: ${s}`);let l=u>0?this.backend.gpuDataManager.create(u).id:0;return new hi(this.module,s,l,o)};return this.backend.run(e,r,n,i,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*n);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+n*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},g2=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(TS(),On(f2)).WebGpuBackend,s=new a;await s.initialize(r,n),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,d=!1)=>{if(d)ve("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{ve("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),c)}},async(o,u,l)=>{ve("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,d)=>{ve("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let c=new s_(t,s,Number(u));return s.computeKernel(Number(o),c,d)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new T$(r);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,l,d)=>a.ensureTensor(s,o,u,l,d),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o)])}}}),o_,Mu,Du,tr,u_,no,Pi,Pu,Nu,io,Uu,qu,Vu,y2=X(()=>{B3(),R3(),pe(),Or(),wu(),b$(),o_=(e,t)=>{Be()._OrtInit(e,t)!==0&&Ce("Can't initialize onnxruntime.")},Mu=async e=>{o_(e.wasm.numThreads,Ai(e.logLevel))},Du=async(e,t)=>{Be().asyncInit?.();{let r=(ES(),On(m2)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let n=e.webgpu.adapter;if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Be(),e,n)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Be(),e)}}},tr=new Map,u_=e=>{let t=Be(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&Ce("Can't get session input/output count.");let a=n===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+n,a))]}finally{t.stackRestore(r)}},no=(e,t)=>{let r=Be(),n=r.stackSave(),i=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Ce("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));i=Number(r.getValue(s+a,"*"));let u=r.HEAP32[i/4];if(u===0)return[o,0];let l=r.HEAPU32[i/4+1],d=[];for(let c=0;c<l;c++){let p=Number(r.getValue(i+8+c*a,"*"));d.push(p!==0?r.UTF8ToString(p):Number(r.getValue(i+8+(c+l)*a,"*")))}return[o,u,d]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},Pi=e=>{let t=Be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Pu=async(e,t)=>{let r,n,i=Be();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Pi(e);let a=0,s=0,o=0,u=[],l=[],d=[];try{if([s,u]=await $$(t),t?.externalData&&i.mountExternalData){let b=[];for(let S of t.externalData){let I=typeof S=="string"?S:S.path;b.push(vu(typeof S=="string"?S:S.data).then(T=>{i.mountExternalData(I,T)}))}await Promise.all(b)}for(let b of t?.executionProviders??[])if((typeof b=="string"?b:b.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof b!="string"){let S=b,I=S?.context,T=S?.gpuDevice,z=S?.deviceType,O=S?.powerPreference;I?i.currentContext=I:T?i.currentContext=await i.webnnCreateMLContext(T):i.currentContext=await i.webnnCreateMLContext({deviceType:z,powerPreference:O})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(r,n,s),i.webgpuOnCreateSession?.(a),a===0&&Ce("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[c,p]=u_(a),h=!!t?.enableGraphCapture,m=[],g=[],$=[],y=[],_=[];for(let b=0;b<c;b++){let[S,I,T]=no(a,b);S===0&&Ce("Can't get an input name."),l.push(S);let z=i.UTF8ToString(S);m.push(z),$.push(I===0?{name:z,isTensor:!1}:{name:z,isTensor:!0,type:Wt(I),shape:T})}for(let b=0;b<p;b++){let[S,I,T]=no(a,b+c);S===0&&Ce("Can't get an output name."),d.push(S);let z=i.UTF8ToString(S);g.push(z),y.push(I===0?{name:z,isTensor:!1}:{name:z,isTensor:!0,type:Wt(I),shape:T});{if(h&&t?.preferredOutputLocation===void 0){_.push("gpu-buffer");continue}let O=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[z]??"cpu",R=i.webnnIsGraphOutput;if(O==="cpu"&&R&&R(a,z)){_.push("ml-tensor-cpu-output");continue}if(O!=="cpu"&&O!=="cpu-pinned"&&O!=="gpu-buffer"&&O!=="ml-tensor")throw new Error(`Not supported preferred output location: ${O}.`);if(h&&O!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${O}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(O)}}let v=null;return _.some(b=>b==="gpu-buffer"||b==="ml-tensor"||b==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&Ce("Can't create IO binding."),v={handle:o,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(b=>b==="ml-tensor-cpu-output"?"ml-tensor":b).map(b=>ko(b))}),tr.set(a,[a,l,d,v,h,!1]),[a,m,g,$,y]}catch(c){throw l.forEach(p=>i._OrtFree(p)),d.forEach(p=>i._OrtFree(p)),o!==0&&i._OrtReleaseBinding(o)!==0&&Ce("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Ce("Can't release session."),c}finally{i._free(r),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&Ce("Can't release session options."),u.forEach(c=>i._free(c)),i.unmountExternalData?.()}},Nu=e=>{let t=Be(),r=tr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Ce("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Ce("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(u=>t._OrtFree(u)),a.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(n)!==0&&Ce("Can't release session."),tr.delete(e)},io=async(e,t,r,n,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Be(),u=o.PTR_SIZE,l=e[0],d=e[1],c=e[3],p=c,h,m;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let y=e[2].gpuBuffer;m=vr(br(l),d);{let _=o.jsepRegisterBuffer;if(!_)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');h=_(n,a,y,m)}}else if(c==="ml-tensor"){let y=e[2].mlTensor;m=vr(br(l),d);let _=o.webnnRegisterMLTensor;if(!_)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');h=_(n,y,br(l),d)}else{let y=e[2];if(Array.isArray(y)){m=u*y.length,h=o._malloc(m),r.push(h);for(let _=0;_<y.length;_++){if(typeof y[_]!="string")throw new TypeError(`tensor data at index ${_} is not a string`);o.setValue(h+_*u,vt(y[_],r),"*")}}else{let _=o.webnnIsGraphInput,v=o.webnnIsGraphOutput;if(l!=="string"&&_&&v){let b=o.UTF8ToString(i);if(_(n,b)||v(n,b)){let S=br(l);m=vr(S,d),p="ml-tensor";let I=o.webnnCreateTemporaryTensor,T=o.webnnUploadTensor;if(!I||!T)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await I(n,S,d);T(z,new Uint8Array(y.buffer,y.byteOffset,y.byteLength)),h=z}else m=y.byteLength,h=o._malloc(m),r.push(h),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,m),h)}else m=y.byteLength,h=o._malloc(m),r.push(h),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,m),h)}}let g=o.stackSave(),$=o.stackAlloc(4*d.length);try{d.forEach((_,v)=>o.setValue($+v*u,_,u===4?"i32":"i64"));let y=o._OrtCreateTensor(br(l),h,m,$,d.length,ko(p));y===0&&Ce(`Can't create tensor for input/output. session=${n}, index=${a}.`),t.push(y)}finally{o.stackRestore(g)}},Uu=async(e,t,r,n,i,a)=>{let s=Be(),o=s.PTR_SIZE,u=tr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],c=u[2],p=u[3],h=u[4],m=u[5],g=t.length,$=n.length,y=0,_=[],v=[],b=[],S=[],I=s.stackSave(),T=s.stackAlloc(g*o),z=s.stackAlloc(g*o),O=s.stackAlloc($*o),R=s.stackAlloc($*o);try{[y,_]=w$(a);for(let B=0;B<g;B++)await io(r[B],v,S,e,d[t[B]],t[B],h);for(let B=0;B<$;B++)await io(i[B],b,S,e,c[n[B]],g+n[B],h);for(let B=0;B<g;B++)s.setValue(T+B*o,v[B],"*"),s.setValue(z+B*o,d[t[B]],"*");for(let B=0;B<$;B++)s.setValue(O+B*o,b[B],"*"),s.setValue(R+B*o,c[n[B]],"*");if(p&&!m){let{handle:B,outputPreferredLocations:te,outputPreferredLocationsEncoded:F}=p;if(d.length!==g)throw new Error(`input count from feeds (${g}) is expected to be always equal to model's input count (${d.length}).`);for(let M=0;M<g;M++){let J=t[M];await s._OrtBindInput(B,d[J],v[M])!==0&&Ce(`Can't bind input[${M}] for session=${e}.`)}for(let M=0;M<$;M++){let J=n[M];i[M]?.[3]?s._OrtBindOutput(B,c[J],b[M],0)!==0&&Ce(`Can't bind pre-allocated output[${M}] for session=${e}.`):s._OrtBindOutput(B,c[J],0,F[J])!==0&&Ce(`Can't bind output[${M}] to ${te[M]} for session=${e}.`)}tr.set(e,[l,d,c,p,h,!0])}s.jsepOnRunStart?.(l),s.webnnOnRunStart?.(l);let G;p?G=await s._OrtRunWithBinding(l,p.handle,$,O,y):G=await s._OrtRun(l,z,T,g,R,$,O,y),G!==0&&Ce("failed to call OrtRun().");let L=[],Q=[];for(let B=0;B<$;B++){let te=Number(s.getValue(O+B*o,"*"));if(te===b[B]){L.push(i[B]);continue}let F=s.stackSave(),M=s.stackAlloc(4*o),J=!1,W,re=0;try{s._OrtGetTensorData(te,M,M+o,M+2*o,M+3*o)!==0&&Ce(`Can't access output tensor data on index ${B}.`);let q=o===4?"i32":"i64",j=Number(s.getValue(M,q));re=s.getValue(M+o,"*");let K=s.getValue(M+o*2,"*"),C=Number(s.getValue(M+o*3,q)),H=[];for(let Ie=0;Ie<C;Ie++)H.push(Number(s.getValue(K+Ie*o,q)));s._OrtFree(K)!==0&&Ce("Can't free memory for tensor dims.");let me=H.reduce((Ie,ge)=>Ie*ge,1);W=Wt(j);let De=p?.outputPreferredLocations[n[B]];if(W==="string"){if(De==="gpu-buffer"||De==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ie=[];for(let ge=0;ge<me;ge++){let $e=s.getValue(re+ge*o,"*"),Je=s.getValue(re+(ge+1)*o,"*"),Dt=ge===me-1?void 0:Je-$e;Ie.push(s.UTF8ToString($e,Dt))}L.push([W,H,Ie,"cpu"])}else if(De==="gpu-buffer"&&me>0){let Ie=s.jsepGetBuffer;if(!Ie)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ge=Ie(re),$e=vr(j,me);if($e===void 0||!$u(W))throw new Error(`Unsupported data type: ${W}`);J=!0,L.push([W,H,{gpuBuffer:ge,download:s.jsepCreateDownloader(ge,$e,W),dispose:()=>{s._OrtReleaseTensor(te)!==0&&Ce("Can't release tensor.")}},"gpu-buffer"])}else if(De==="ml-tensor"&&me>0){let Ie=s.webnnEnsureTensor,ge=s.webnnIsGraphInputOutputTypeSupported;if(!Ie||!ge)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(vr(j,me)===void 0||!bu(W))throw new Error(`Unsupported data type: ${W}`);if(!ge(e,W,!1))throw new Error(`preferredLocation "ml-tensor" for ${W} output is not supported by current WebNN Context.`);let $e=await Ie(e,re,j,H,!1);J=!0,L.push([W,H,{mlTensor:$e,download:s.webnnCreateMLTensorDownloader(re,W),dispose:()=>{s.webnnReleaseTensorId(re),s._OrtReleaseTensor(te)}},"ml-tensor"])}else if(De==="ml-tensor-cpu-output"&&me>0){let Ie=s.webnnCreateMLTensorDownloader(re,W)(),ge=L.length;J=!0,Q.push((async()=>{let $e=[ge,await Ie];return s.webnnReleaseTensorId(re),s._OrtReleaseTensor(te),$e})()),L.push([W,H,[],"cpu"])}else{let Ie=qi(W),ge=new Ie(me);new Uint8Array(ge.buffer,ge.byteOffset,ge.byteLength).set(s.HEAPU8.subarray(re,re+ge.byteLength)),L.push([W,H,ge,"cpu"])}}finally{s.stackRestore(F),W==="string"&&re&&s._free(re),J||s._OrtReleaseTensor(te)}}p&&!h&&(s._OrtClearBoundOutputs(p.handle)!==0&&Ce("Can't clear bound outputs."),tr.set(e,[l,d,c,p,h,!1]));for(let[B,te]of await Promise.all(Q))L[B][2]=te;return L}finally{s.webnnOnRunEnd?.(l),s.stackRestore(I),v.forEach(G=>s._OrtReleaseTensor(G)),b.forEach(G=>s._OrtReleaseTensor(G)),S.forEach(G=>s._free(G)),y!==0&&s._OrtReleaseRunOptions(y),_.forEach(G=>s._free(G))}},qu=e=>{let t=Be(),r=tr.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&Ce("Can't get an profile file name."),t._OrtFree(i)},Vu=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),rr,ut,Dr,yn,wn,mi,ao,gi,mr,gr,l_,w2,$2,b2,v2,x2,S2,k2,I2=X(()=>{It(),y2(),Or(),_u(),rr=()=>!!Me.wasm.proxy&&typeof document<"u",Dr=!1,yn=!1,wn=!1,gi=new Map,mr=(e,t)=>{let r=gi.get(e);r?r.push(t):gi.set(e,[t])},gr=()=>{if(Dr||!yn||wn||!ut)throw new Error("worker not ready")},l_=e=>{switch(e.data.type){case"init-wasm":Dr=!1,e.data.err?(wn=!0,ao[1](e.data.err)):(yn=!0,ao[0]()),mi&&(URL.revokeObjectURL(mi),mi=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=gi.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},w2=async()=>{if(!yn){if(Dr)throw new Error("multiple calls to 'initWasm()' detected.");if(wn)throw new Error("previous call to 'initWasm()' failed.");if(Dr=!0,rr())return new Promise((e,t)=>{ut?.terminate(),_$().then(([r,n])=>{try{ut=n,ut.onerror=a=>t(a),ut.onmessage=l_,ao=[e,t];let i={type:"init-wasm",in:Me};!i.in.wasm.wasmPaths&&(r||So)&&(i.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",import.meta.url).href,import.meta.url).href}),ut.postMessage(i),mi=r}catch(i){t(i)}},t)});try{await yu(Me.wasm),await Mu(Me),yn=!0}catch(e){throw wn=!0,e}finally{Dr=!1}}},$2=async e=>{if(rr())return gr(),new Promise((t,r)=>{mr("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:Me}};ut.postMessage(n)});await Du(Me,e)},b2=async e=>rr()?(gr(),new Promise((t,r)=>{mr("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};ut.postMessage(n,[e.buffer])})):Pi(e),v2=async(e,t)=>{if(rr()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return gr(),new Promise((r,n)=>{mr("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),ut.postMessage(i,a)})}else return Pu(e,t)},x2=async e=>{if(rr())return gr(),new Promise((t,r)=>{mr("release",[t,r]);let n={type:"release",in:e};ut.postMessage(n)});Nu(e)},S2=async(e,t,r,n,i,a)=>{if(rr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return gr(),new Promise((s,o)=>{mr("run",[s,o]);let u=r,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:a}};ut.postMessage(l,Vu(u))})}else return Uu(e,t,r,n,i,a)},k2=async e=>{if(rr())return gr(),new Promise((t,r)=>{mr("end-profiling",[t,r]);let n={type:"end-profiling",in:e};ut.postMessage(n)});qu(e)}}),so,d_,T2,zS=X(()=>{It(),I2(),pe(),gu(),b$(),so=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},d_=e=>{switch(e[3]){case"cpu":return new Bt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!$u(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return Bt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!bu(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return Bt.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},T2=class{async fetchModelAndCopyToWasmMemory(e){return b2(await vu(e))}async loadModel(e,t){Mt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await v2(r,t),St()}async dispose(){return x2(this.sessionId)}async run(e,t,r){Mt();let n=[],i=[];Object.entries(e).forEach(c=>{let p=c[0],h=c[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);n.push(h),i.push(m)});let a=[],s=[];Object.entries(t).forEach(c=>{let p=c[0],h=c[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);a.push(h),s.push(m)});let o=n.map((c,p)=>so(c,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((c,p)=>c?so(c,()=>`output "${this.outputNames[s[p]]}"`):null),l=await S2(this.sessionId,i,o,s,u,r),d={};for(let c=0;c<l.length;c++)d[this.outputNames[s[c]]]=a[c]??d_(l[c]);return St(),d}startProfiling(){}endProfiling(){k2(this.sessionId)}}}),E2={};jr(E2,{OnnxruntimeWebAssemblyBackend:()=>Uo,initializeFlags:()=>No,wasmBackend:()=>z2});var No,Uo,z2,CS=X(()=>{It(),I2(),zS(),No=()=>{(typeof Me.wasm.initTimeout!="number"||Me.wasm.initTimeout<0)&&(Me.wasm.initTimeout=0);let e=Me.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Me.wasm.simd=!1),typeof Me.wasm.proxy!="boolean"&&(Me.wasm.proxy=!1),typeof Me.wasm.trace!="boolean"&&(Me.wasm.trace=!1),typeof Me.wasm.numThreads!="number"||!Number.isInteger(Me.wasm.numThreads)||Me.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Me.wasm.numThreads=1;else{let t=typeof navigator>"u"?m3("node:os").cpus().length:navigator.hardwareConcurrency;Me.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Uo=class{async init(e){No(),await w2(),await $2(e)}async createInferenceSessionHandler(e,t){let r=new T2;return await r.loadModel(e,t),r}},z2=new Uo});It();It();It();var OS="1.22.0";{let e=(CS(),On(E2)).wasmBackend;Ur("webgpu",e,5),Ur("webnn",e,5),Ur("cpu",e,10),Ur("wasm",e,10)}Object.defineProperty(Me.versions,"web",{value:OS,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */export{C_ as InferenceSession,bi as TRACE,Rt as TRACE_FUNC_BEGIN,xt as TRACE_FUNC_END,At as Tensor,AS as default,Re as env,Pr as registerBackend};
//# sourceMappingURL=vendor-onnxruntime-web-CN-YNzaW.js.map
