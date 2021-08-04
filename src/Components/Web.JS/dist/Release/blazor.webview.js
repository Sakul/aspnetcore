(()=>{"use strict";var e,t,n;!function(e){window.DotNet=e;const t=[],n=new Map;class r{constructor(e){this._jsObject=e,this._cachedFunctions=new Map}findFunction(e){const t=this._cachedFunctions.get(e);if(t)return t;let n,r=this._jsObject;if(e.split(".").forEach((t=>{if(!(t in r))throw new Error(`Could not find '${e}' ('${t}' was undefined).`);n=r,r=r[t]})),r instanceof Function)return r=r.bind(n),this._cachedFunctions.set(e,r),r;throw new Error(`The value '${e}' is not a function.`)}getWrappedObject(){return this._jsObject}}const o="__jsObjectId",a={},i={0:new r(window)};i[0]._cachedFunctions.set("import",(e=>("string"==typeof e&&e.startsWith("./")&&(e=document.baseURI+e.substr(2)),import(e))));let s,c=1,l=1,u=null;function d(e){t.push(e)}function f(e){if(e&&"object"==typeof e){i[l]=new r(e);const t={[o]:l};return l++,t}throw new Error(`Cannot create a JSObjectReference from the value '${e}'.`)}function h(e){let t=-1;if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),e instanceof Blob)t=e.size;else{if(!(e.buffer instanceof ArrayBuffer))throw new Error("Supplied value is not a typed array or blob.");if(void 0===e.byteLength)throw new Error(`Cannot create a JSStreamReference from the value '${e}' as it doesn't have a byteLength.`);t=e.byteLength}const n={__jsStreamReferenceLength:t};try{const t=f(e);n.__jsObjectId=t.__jsObjectId}catch{throw new Error(`Cannot create a JSStreamReference from the value '${e}'.`)}return n}function m(e){return e?JSON.parse(e,((e,n)=>t.reduce(((t,n)=>n(e,t)),n))):null}function p(e,t,n,r){const o=g();if(o.invokeDotNetFromJS){const a=A(r),i=o.invokeDotNetFromJS(e,t,n,a);return i?m(i):null}throw new Error("The current dispatcher does not support synchronous calls from JS to .NET. Use invokeMethodAsync instead.")}function v(e,t,n,r){if(e&&n)throw new Error(`For instance method calls, assemblyName should be null. Received '${e}'.`);const o=c++,i=new Promise(((e,t)=>{a[o]={resolve:e,reject:t}}));try{const a=A(r);g().beginInvokeDotNetFromJS(o,e,t,n,a)}catch(e){b(o,!1,e)}return i}function g(){if(null!==u)return u;throw new Error("No .NET call dispatcher has been set.")}function b(e,t,n){if(!a.hasOwnProperty(e))throw new Error(`There is no pending async call with ID ${e}.`);const r=a[e];delete a[e],t?r.resolve(n):r.reject(n)}function y(e){return e instanceof Error?`${e.message}\n${e.stack}`:e?e.toString():"null"}function w(e,t){let n=i[t];if(n)return n.findFunction(e);throw new Error(`JS object instance with ID ${t} does not exist (has it been disposed?).`)}function E(e){delete i[e]}e.attachDispatcher=function(e){u=e},e.attachReviver=d,e.invokeMethod=function(e,t,...n){return p(e,t,null,n)},e.invokeMethodAsync=function(e,t,...n){return v(e,t,null,n)},e.createJSObjectReference=f,e.createJSStreamReference=h,e.disposeJSObjectReference=function(e){const t=e&&e.__jsObjectId;"number"==typeof t&&E(t)},function(e){e[e.Default=0]="Default",e[e.JSObjectReference=1]="JSObjectReference",e[e.JSStreamReference=2]="JSStreamReference"}(s=e.JSCallResultType||(e.JSCallResultType={})),e.jsCallDispatcher={findJSFunction:w,disposeJSObjectReferenceById:E,invokeJSFromDotNet:(e,t,n,r)=>{const o=C(w(e,r).apply(null,m(t)),n);return null==o?null:A(o)},beginInvokeJSFromDotNet:(e,t,n,r,o)=>{const a=new Promise((e=>{e(w(t,o).apply(null,m(n)))}));e&&a.then((t=>g().endInvokeJSFromDotNet(e,!0,A([e,!0,C(t,r)]))),(t=>g().endInvokeJSFromDotNet(e,!1,JSON.stringify([e,!1,y(t)]))))},endInvokeDotNetFromJS:(e,t,n)=>{const r=t?m(n):new Error(n);b(parseInt(e),t,r)},receiveByteArray:(e,t)=>{n.set(e,t)}};class I{constructor(e){this._id=e}invokeMethod(e,...t){return p(null,e,this._id,t)}invokeMethodAsync(e,...t){return v(null,e,this._id,t)}dispose(){v(null,"__Dispose",this._id,null).catch((e=>console.error(e)))}serializeAsArg(){return{__dotNetObject:this._id}}}e.DotNetObject=I;const S="__byte[]";function C(e,t){switch(t){case s.Default:return e;case s.JSObjectReference:return f(e);case s.JSStreamReference:return h(e);default:throw new Error(`Invalid JS call result type '${t}'.`)}}d((function(e,t){if(t&&"object"==typeof t){if(t.hasOwnProperty("__dotNetObject"))return new I(t.__dotNetObject);if(t.hasOwnProperty(o)){const e=t.__jsObjectId,n=i[e];if(n)return n.getWrappedObject();throw new Error(`JS object instance with Id '${e}' does not exist. It may have been disposed.`)}if(t.hasOwnProperty(S)){const e=t["__byte[]"],r=n.get(e);if(void 0===r)throw new Error(`Byte array index '${e}' does not exist.`);return r}}return t}));let D=0;function A(e){return D=0,JSON.stringify(e,T)}function T(e,t){if(t instanceof I)return t.serializeAsArg();if(t instanceof Uint8Array){u.sendByteArray(D,t);const e={[S]:D};return D++,e}return t}}(e||(e={})),function(e){e[e.prependFrame=1]="prependFrame",e[e.removeFrame=2]="removeFrame",e[e.setAttribute=3]="setAttribute",e[e.removeAttribute=4]="removeAttribute",e[e.updateText=5]="updateText",e[e.stepIn=6]="stepIn",e[e.stepOut=7]="stepOut",e[e.updateMarkup=8]="updateMarkup",e[e.permutationListEntry=9]="permutationListEntry",e[e.permutationListEnd=10]="permutationListEnd"}(t||(t={})),function(e){e[e.element=1]="element",e[e.text=2]="text",e[e.attribute=3]="attribute",e[e.component=4]="component",e[e.region=5]="region",e[e.elementReferenceCapture=6]="elementReferenceCapture",e[e.markup=8]="markup"}(n||(n={}));class r{constructor(e,t){this.componentId=e,this.fieldValue=t}static fromEvent(e,t){const n=t.target;if(n instanceof Element){const t=function(e){return e instanceof HTMLInputElement?e.type&&"checkbox"===e.type.toLowerCase()?{value:e.checked}:{value:e.value}:e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement?{value:e.value}:null}(n);if(t)return new r(e,t.value)}return null}}let o;function a(e,t){if(!o)throw new Error("eventDispatcher not initialized. Call 'setEventDispatcher' to configure it.");o(e,t)}const i=new Map,s=new Map,c={createEventArgs:()=>({})},l=[];function u(e){return i.get(e)}function d(e){const t=i.get(e);return(null==t?void 0:t.browserEventName)||e}function f(e,t){e.forEach((e=>i.set(e,t)))}function h(e){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t.push({identifier:r.identifier,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY,pageX:r.pageX,pageY:r.pageY})}return t}function m(e){return{detail:e.detail,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey}}f(["input","change"],{createEventArgs:function(e){const t=e.target;if(function(e){return-1!==p.indexOf(e.getAttribute("type"))}(t))return{value:function(e){const t=e.value,n=e.type;switch(n){case"date":case"month":return t;case"datetime-local":return 16===t.length?t+":00":t;case"time":return 5===t.length?t+":00":t;case"week":return t}throw new Error(`Invalid element type '${n}'.`)}(t)};if(function(e){return e instanceof HTMLSelectElement&&"select-multiple"===e.type}(t)){const e=t;return{value:Array.from(e.options).filter((e=>e.selected)).map((e=>e.value))}}return{value:function(e){return!!e&&"INPUT"===e.tagName&&"checkbox"===e.getAttribute("type")}(t)?!!t.checked:t.value}}}),f(["copy","cut","paste"],c),f(["drag","dragend","dragenter","dragleave","dragover","dragstart","drop"],{createEventArgs:e=>{return{...m(t=e),dataTransfer:t.dataTransfer?{dropEffect:t.dataTransfer.dropEffect,effectAllowed:t.dataTransfer.effectAllowed,files:Array.from(t.dataTransfer.files).map((e=>e.name)),items:Array.from(t.dataTransfer.items).map((e=>({kind:e.kind,type:e.type}))),types:t.dataTransfer.types}:null};var t}}),f(["focus","blur","focusin","focusout"],c),f(["keydown","keyup","keypress"],{createEventArgs:e=>{return{key:(t=e).key,code:t.code,location:t.location,repeat:t.repeat,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey};var t}}),f(["contextmenu","click","mouseover","mouseout","mousemove","mousedown","mouseup","dblclick"],{createEventArgs:e=>m(e)}),f(["error"],{createEventArgs:e=>{return{message:(t=e).message,filename:t.filename,lineno:t.lineno,colno:t.colno};var t}}),f(["loadstart","timeout","abort","load","loadend","progress"],{createEventArgs:e=>{return{lengthComputable:(t=e).lengthComputable,loaded:t.loaded,total:t.total};var t}}),f(["touchcancel","touchend","touchmove","touchenter","touchleave","touchstart"],{createEventArgs:e=>{return{detail:(t=e).detail,touches:h(t.touches),targetTouches:h(t.targetTouches),changedTouches:h(t.changedTouches),ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey,type:t.type};var t}}),f(["gotpointercapture","lostpointercapture","pointercancel","pointerdown","pointerenter","pointerleave","pointermove","pointerout","pointerover","pointerup"],{createEventArgs:e=>{return{...m(t=e),pointerId:t.pointerId,width:t.width,height:t.height,pressure:t.pressure,tiltX:t.tiltX,tiltY:t.tiltY,pointerType:t.pointerType,isPrimary:t.isPrimary};var t}}),f(["wheel","mousewheel"],{createEventArgs:e=>{return{...m(t=e),deltaX:t.deltaX,deltaY:t.deltaY,deltaZ:t.deltaZ,deltaMode:t.deltaMode};var t}}),f(["toggle"],c);const p=["date","datetime-local","month","time","week"],v=I(["abort","blur","change","error","focus","load","loadend","loadstart","mouseenter","mouseleave","progress","reset","scroll","submit","unload","toggle","DOMNodeInsertedIntoDocument","DOMNodeRemovedFromDocument"]),g={submit:!0},b=I(["click","dblclick","mousedown","mousemove","mouseup"]);class y{constructor(e){this.browserRendererId=e,this.afterClickCallbacks=[];const t=++y.nextEventDelegatorId;this.eventsCollectionKey=`_blazorEvents_${t}`,this.eventInfoStore=new w(this.onGlobalEvent.bind(this))}setListener(e,t,n,r){const o=this.getEventHandlerInfosForElement(e,!0),a=o.getHandler(t);if(a)this.eventInfoStore.update(a.eventHandlerId,n);else{const a={element:e,eventName:t,eventHandlerId:n,renderingComponentId:r};this.eventInfoStore.add(a),o.setHandler(t,a)}}getHandler(e){return this.eventInfoStore.get(e)}removeListener(e){const t=this.eventInfoStore.remove(e);if(t){const e=t.element,n=this.getEventHandlerInfosForElement(e,!1);n&&n.removeHandler(t.eventName)}}notifyAfterClick(e){this.afterClickCallbacks.push(e),this.eventInfoStore.addGlobalListener("click")}setStopPropagation(e,t,n){this.getEventHandlerInfosForElement(e,!0).stopPropagation(t,n)}setPreventDefault(e,t,n){this.getEventHandlerInfosForElement(e,!0).preventDefault(t,n)}onGlobalEvent(e){if(!(e.target instanceof Element))return;this.dispatchGlobalEventToAllElements(e.type,e);const t=(n=e.type,s.get(n));var n;t&&t.forEach((t=>this.dispatchGlobalEventToAllElements(t,e))),"click"===e.type&&this.afterClickCallbacks.forEach((t=>t(e)))}dispatchGlobalEventToAllElements(e,t){const n=t.composedPath();let o=n.shift(),i=null,s=!1;const c=v.hasOwnProperty(e);let l=!1;for(;o;){const h=o,m=this.getEventHandlerInfosForElement(h,!1);if(m){const n=m.getHandler(e);if(n&&(d=h,f=t.type,!((d instanceof HTMLButtonElement||d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement||d instanceof HTMLSelectElement)&&b.hasOwnProperty(f)&&d.disabled))){if(!s){const n=u(e);i=(null==n?void 0:n.createEventArgs)?n.createEventArgs(t):{},s=!0}g.hasOwnProperty(t.type)&&t.preventDefault(),a({browserRendererId:this.browserRendererId,eventHandlerId:n.eventHandlerId,eventName:e,eventFieldInfo:r.fromEvent(n.renderingComponentId,t)},i)}m.stopPropagation(e)&&(l=!0),m.preventDefault(e)&&t.preventDefault()}o=c||l?void 0:n.shift()}var d,f}getEventHandlerInfosForElement(e,t){return e.hasOwnProperty(this.eventsCollectionKey)?e[this.eventsCollectionKey]:t?e[this.eventsCollectionKey]=new E:null}}y.nextEventDelegatorId=0;class w{constructor(e){this.globalListener=e,this.infosByEventHandlerId={},this.countByEventName={},l.push(this.handleEventNameAliasAdded.bind(this))}add(e){if(this.infosByEventHandlerId[e.eventHandlerId])throw new Error(`Event ${e.eventHandlerId} is already tracked`);this.infosByEventHandlerId[e.eventHandlerId]=e,this.addGlobalListener(e.eventName)}get(e){return this.infosByEventHandlerId[e]}addGlobalListener(e){if(e=d(e),this.countByEventName.hasOwnProperty(e))this.countByEventName[e]++;else{this.countByEventName[e]=1;const t=v.hasOwnProperty(e);document.addEventListener(e,this.globalListener,t)}}update(e,t){if(this.infosByEventHandlerId.hasOwnProperty(t))throw new Error(`Event ${t} is already tracked`);const n=this.infosByEventHandlerId[e];delete this.infosByEventHandlerId[e],n.eventHandlerId=t,this.infosByEventHandlerId[t]=n}remove(e){const t=this.infosByEventHandlerId[e];if(t){delete this.infosByEventHandlerId[e];const n=d(t.eventName);0==--this.countByEventName[n]&&(delete this.countByEventName[n],document.removeEventListener(n,this.globalListener))}return t}handleEventNameAliasAdded(e,t){if(this.countByEventName.hasOwnProperty(e)){const n=this.countByEventName[e];delete this.countByEventName[e],document.removeEventListener(e,this.globalListener),this.addGlobalListener(t),this.countByEventName[t]+=n-1}}}class E{constructor(){this.handlers={},this.preventDefaultFlags=null,this.stopPropagationFlags=null}getHandler(e){return this.handlers.hasOwnProperty(e)?this.handlers[e]:null}setHandler(e,t){this.handlers[e]=t}removeHandler(e){delete this.handlers[e]}preventDefault(e,t){return void 0!==t&&(this.preventDefaultFlags=this.preventDefaultFlags||{},this.preventDefaultFlags[e]=t),!!this.preventDefaultFlags&&this.preventDefaultFlags[e]}stopPropagation(e,t){return void 0!==t&&(this.stopPropagationFlags=this.stopPropagationFlags||{},this.stopPropagationFlags[e]=t),!!this.stopPropagationFlags&&this.stopPropagationFlags[e]}}function I(e){const t={};return e.forEach((e=>{t[e]=!0})),t}const S=P("_blazorLogicalChildren"),C=P("_blazorLogicalParent"),D=P("_blazorLogicalEnd");function A(e,t){if(e.childNodes.length>0&&!t)throw new Error("New logical elements must start empty, or allowExistingContents must be true");return S in e||(e[S]=[]),e}function T(e,t){const n=document.createComment("!");return N(n,e,t),n}function N(e,t,n){const r=e;if(e instanceof Comment&&O(r)&&O(r).length>0)throw new Error("Not implemented: inserting non-empty logical container");if(R(r))throw new Error("Not implemented: moving existing logical children");const o=O(t);if(n<o.length){const t=o[n];t.parentNode.insertBefore(e,t),o.splice(n,0,r)}else H(e,t),o.push(r);r[C]=t,S in r||(r[S]=[])}function k(e,t){const n=O(e).splice(t,1)[0];if(n instanceof Comment){const e=O(n);if(e)for(;e.length>0;)k(n,0)}const r=n;r.parentNode.removeChild(r)}function R(e){return e[C]||null}function F(e,t){return O(e)[t]}function _(e){var t=L(e);return"http://www.w3.org/2000/svg"===t.namespaceURI&&"foreignObject"!==t.tagName}function O(e){return e[S]}function x(e,t){const n=O(e);t.forEach((e=>{e.moveRangeStart=n[e.fromSiblingIndex],e.moveRangeEnd=M(e.moveRangeStart)})),t.forEach((t=>{const r=t.moveToBeforeMarker=document.createComment("marker"),o=n[t.toSiblingIndex+1];o?o.parentNode.insertBefore(r,o):H(r,e)})),t.forEach((e=>{const t=e.moveToBeforeMarker,n=t.parentNode,r=e.moveRangeStart,o=e.moveRangeEnd;let a=r;for(;a;){const e=a.nextSibling;if(n.insertBefore(a,t),a===o)break;a=e}n.removeChild(t)})),t.forEach((e=>{n[e.toSiblingIndex]=e.moveRangeStart}))}function L(e){if(e instanceof Element||e instanceof DocumentFragment)return e;if(e instanceof Comment)return e.parentNode;throw new Error("Not a valid logical element")}function B(e){const t=O(R(e));return t[Array.prototype.indexOf.call(t,e)+1]||null}function H(e,t){if(t instanceof Element||t instanceof DocumentFragment)t.appendChild(e);else{if(!(t instanceof Comment))throw new Error(`Cannot append node because the parent is not a valid logical element. Parent: ${t}`);{const n=B(t);n?n.parentNode.insertBefore(e,n):H(e,R(t))}}}function M(e){if(e instanceof Element||e instanceof DocumentFragment)return e;const t=B(e);if(t)return t.previousSibling;{const t=R(e);return t instanceof Element||t instanceof DocumentFragment?t.lastChild:M(t)}}function P(e){return"function"==typeof Symbol?Symbol():e}function U(e){return`_bl_${e}`}e.attachReviver(((e,t)=>t&&"object"==typeof t&&t.hasOwnProperty("__internalId")&&"string"==typeof t.__internalId?function(e){const t=`[${U(e)}]`;return document.querySelector(t)}(t.__internalId):t));const j="_blazorDeferredValue",J=document.createElement("template"),$=document.createElementNS("http://www.w3.org/2000/svg","g"),z={},K="__internal_",V="preventDefault_",X="stopPropagation_";class Y{constructor(e){this.rootComponentIds=new Set,this.childComponentLocations={},this.eventDelegator=new y(e),this.eventDelegator.notifyAfterClick((e=>{if(!ce)return;if(0!==e.button||function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey}(e))return;if(e.defaultPrevented)return;const t=function(e){const t=!window._blazorDisableComposedPath&&e.composedPath&&e.composedPath();if(t){for(let e=0;e<t.length;e++){const n=t[e];if(n instanceof Element&&"A"===n.tagName)return n}return null}return ge(e.target,"A")}(e);if(t&&function(e){const t=e.getAttribute("target");return(!t||"_self"===t)&&e.hasAttribute("href")&&!e.hasAttribute("download")}(t)){const n=ve(t.getAttribute("href"));be(n)&&(e.preventDefault(),he(n,!0,!1))}}))}attachRootComponentToLogicalElement(e,t,n){this.attachComponentToElement(e,t),this.rootComponentIds.add(e),n||(z[e]=t)}updateComponent(e,t,n,r){var o;const a=this.childComponentLocations[t];if(!a)throw new Error(`No element is currently associated with component ${t}`);const i=z[t];if(i){const e=function(e){return e[D]||null}(i);delete z[t],e?function(e,t){const n=R(e);if(!n)throw new Error("Can't clear between nodes. The start node does not have a logical parent.");const r=O(n),o=r.indexOf(e)+1,a=r.indexOf(t);for(let e=o;e<=a;e++)k(n,o);e.textContent="!"}(i,e):function(e){let t;for(;t=e.firstChild;)e.removeChild(t)}(i)}const s=null===(o=L(a))||void 0===o?void 0:o.getRootNode(),c=s&&s.activeElement;this.applyEdits(e,t,a,0,n,r),c instanceof HTMLElement&&s&&s.activeElement!==c&&c.focus()}disposeComponent(e){this.rootComponentIds.delete(e)&&function(e){const t=O(e);for(;t.length;)k(e,0)}(this.childComponentLocations[e]),delete this.childComponentLocations[e]}disposeEventHandler(e){this.eventDelegator.removeListener(e)}attachComponentToElement(e,t){this.childComponentLocations[e]=t}applyEdits(e,n,r,o,a,i){let s,c=0,l=o;const u=e.arrayBuilderSegmentReader,d=e.editReader,f=e.frameReader,h=u.values(a),m=u.offset(a),p=m+u.count(a);for(let a=m;a<p;a++){const u=e.diffReader.editsEntry(h,a),m=d.editType(u);switch(m){case t.prependFrame:{const t=d.newTreeIndex(u),o=e.referenceFramesEntry(i,t),a=d.siblingIndex(u);this.insertFrame(e,n,r,l+a,i,o,t);break}case t.removeFrame:k(r,l+d.siblingIndex(u));break;case t.setAttribute:{const t=d.newTreeIndex(u),o=e.referenceFramesEntry(i,t),a=F(r,l+d.siblingIndex(u));if(!(a instanceof Element))throw new Error("Cannot set attribute on non-element child");this.applyAttribute(e,n,a,o);break}case t.removeAttribute:{const t=F(r,l+d.siblingIndex(u));if(!(t instanceof HTMLElement))throw new Error("Cannot remove attribute from non-element child");{const n=d.removedAttributeName(u);this.tryApplySpecialProperty(e,t,n,null)||t.removeAttribute(n)}break}case t.updateText:{const t=d.newTreeIndex(u),n=e.referenceFramesEntry(i,t),o=F(r,l+d.siblingIndex(u));if(!(o instanceof Text))throw new Error("Cannot set text content on non-text child");o.textContent=f.textContent(n);break}case t.updateMarkup:{const t=d.newTreeIndex(u),n=e.referenceFramesEntry(i,t),o=d.siblingIndex(u);k(r,l+o),this.insertMarkup(e,r,l+o,n);break}case t.stepIn:r=F(r,l+d.siblingIndex(u)),c++,l=0;break;case t.stepOut:r=R(r),c--,l=0===c?o:0;break;case t.permutationListEntry:s=s||[],s.push({fromSiblingIndex:l+d.siblingIndex(u),toSiblingIndex:l+d.moveToSiblingIndex(u)});break;case t.permutationListEnd:x(r,s),s=void 0;break;default:throw new Error(`Unknown edit type: ${m}`)}}}insertFrame(e,t,r,o,a,i,s){const c=e.frameReader,l=c.frameType(i);switch(l){case n.element:return this.insertElement(e,t,r,o,a,i,s),1;case n.text:return this.insertText(e,r,o,i),1;case n.attribute:throw new Error("Attribute frames should only be present as leading children of element frames.");case n.component:return this.insertComponent(e,r,o,i),1;case n.region:return this.insertFrameRange(e,t,r,o,a,s+1,s+c.subtreeLength(i));case n.elementReferenceCapture:if(r instanceof Element)return u=r,d=c.elementReferenceCaptureId(i),u.setAttribute(U(d),""),0;throw new Error("Reference capture frames can only be children of element frames.");case n.markup:return this.insertMarkup(e,r,o,i),1;default:throw new Error(`Unknown frame type: ${l}`)}var u,d}insertElement(e,t,r,o,a,i,s){const c=e.frameReader,l=c.elementName(i),u="svg"===l||_(r)?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l),d=A(u);let f=!1;const h=s+c.subtreeLength(i);for(let i=s+1;i<h;i++){const s=e.referenceFramesEntry(a,i);if(c.frameType(s)!==n.attribute){N(u,r,o),f=!0,this.insertFrameRange(e,t,d,0,a,i,h);break}this.applyAttribute(e,t,u,s)}f||N(u,r,o),u instanceof HTMLOptionElement?this.trySetSelectValueFromOptionElement(u):j in u&&Q(u,u._blazorDeferredValue)}trySetSelectValueFromOptionElement(e){const t=this.findClosestAncestorSelectElement(e);if(!t||!(j in t))return!1;if(q(t))e.selected=-1!==t._blazorDeferredValue.indexOf(e.value);else{if(t._blazorDeferredValue!==e.value)return!1;Z(t,e.value),delete t._blazorDeferredValue}return!0}insertComponent(e,t,n,r){const o=T(t,n),a=e.frameReader.componentId(r);this.attachComponentToElement(a,o)}insertText(e,t,n,r){const o=e.frameReader.textContent(r);N(document.createTextNode(o),t,n)}insertMarkup(e,t,n,r){const o=T(t,n),a=(i=e.frameReader.markupContent(r),_(t)?($.innerHTML=i||" ",$):(J.innerHTML=i||" ",J.content));var i;let s=0;for(;a.firstChild;)N(a.firstChild,o,s++)}applyAttribute(e,t,n,r){const o=e.frameReader,a=o.attributeName(r),i=o.attributeEventHandlerId(r);if(i){const e=G(a);this.eventDelegator.setListener(n,e,i,t)}else this.tryApplySpecialProperty(e,n,a,r)||n.setAttribute(a,o.attributeValue(r))}tryApplySpecialProperty(e,t,n,r){switch(n){case"value":return this.tryApplyValueProperty(e,t,r);case"checked":return this.tryApplyCheckedProperty(e,t,r);default:return!!n.startsWith(K)&&(this.applyInternalAttribute(e,t,n.substring(K.length),r),!0)}}applyInternalAttribute(e,t,n,r){const o=r?e.frameReader.attributeValue(r):null;if(n.startsWith(X)){const e=G(n.substring(X.length));this.eventDelegator.setStopPropagation(t,e,null!==o)}else{if(!n.startsWith(V))throw new Error(`Unsupported internal attribute '${n}'`);{const e=G(n.substring(V.length));this.eventDelegator.setPreventDefault(t,e,null!==o)}}}tryApplyValueProperty(e,t,n){const r=e.frameReader;if("INPUT"===t.tagName&&"time"===t.getAttribute("type")&&!t.getAttribute("step")){const e=n?r.attributeValue(n):null;if(e)return t.value=e.substring(0,5),!0}switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":{let e=n?r.attributeValue(n):null;return e&&t instanceof HTMLSelectElement&&q(t)&&(e=JSON.parse(e)),Q(t,e),t._blazorDeferredValue=e,!0}case"OPTION":{const e=n?r.attributeValue(n):null;return e||""===e?t.setAttribute("value",e):t.removeAttribute("value"),this.trySetSelectValueFromOptionElement(t),!0}default:return!1}}tryApplyCheckedProperty(e,t,n){if("INPUT"===t.tagName){const r=n?e.frameReader.attributeValue(n):null;return t.checked=null!==r,!0}return!1}findClosestAncestorSelectElement(e){for(;e;){if(e instanceof HTMLSelectElement)return e;e=e.parentElement}return null}insertFrameRange(e,t,n,r,o,a,i){const s=r;for(let s=a;s<i;s++){const a=e.referenceFramesEntry(o,s);r+=this.insertFrame(e,t,n,r,o,a,s),s+=W(e,a)}return r-s}}function W(e,t){const r=e.frameReader;switch(r.frameType(t)){case n.component:case n.element:case n.region:return r.subtreeLength(t)-1;default:return 0}}function G(e){if(e.startsWith("on"))return e.substring(2);throw new Error(`Attribute should be an event name, but doesn't start with 'on'. Value: '${e}'`)}function q(e){return"select-multiple"===e.type}function Z(e,t){e.value=t||""}function Q(e,t){e instanceof HTMLSelectElement?q(e)?function(e,t){t||(t=[]);for(let n=0;n<e.options.length;n++)e.options[n].selected=-1!==t.indexOf(e.options[n].value)}(e,t):Z(e,t):e.value=t}const ee=new Map;let te,ne=0;const re={async add(e,t,n){if(!n)throw new Error("initialParameters must be an object, even if empty.");const r="__bl-dynamic-root:"+(++ne).toString();ee.set(r,e);const o=await ae().invokeMethodAsync("AddRootComponent",t,r),a=new oe(o);return await a.setParameters(n),a}};class oe{constructor(e){this._componentId=e}setParameters(e){e=e||{};const t=Object.keys(e).length;return ae().invokeMethodAsync("SetRootComponentParameters",this._componentId,t,e)}async dispose(){null!==this._componentId&&(await ae().invokeMethodAsync("RemoveRootComponent",this._componentId),this._componentId=null)}}function ae(){if(!te)throw new Error("Dynamic root components have not been enabled in this application.");return te}const ie={};let se=!1,ce=!1,le=!1,ue=null;const de={listenForNavigationEvents:function(e){ue=e,le||(le=!0,window.addEventListener("popstate",(()=>me(!1))))},enableNavigationInterception:function(){ce=!0},navigateTo:fe,getBaseURI:()=>document.baseURI,getLocationHref:()=>location.href};function fe(e,t,n=!1){const r=ve(e),o=t instanceof Object?t:{forceLoad:t,replaceHistoryEntry:n};!o.forceLoad&&be(r)?he(r,!1,o.replaceHistoryEntry):function(e,t){if(location.href===e){const t=e+"?";history.replaceState(null,"",t),location.replace(e)}else t?location.replace(e):location.href=e}(e,o.replaceHistoryEntry)}function he(e,t,n){se=!0,n?history.replaceState(null,"",e):history.pushState(null,"",e),me(t)}async function me(e){ue&&await ue(location.href,e)}let pe;function ve(e){return pe=pe||document.createElement("a"),pe.href=e,pe.href}function ge(e,t){return e?e.tagName===t?e:ge(e.parentElement,t):null}function be(e){const t=(n=document.baseURI).substr(0,n.lastIndexOf("/")+1);var n;return e.startsWith(t)}const ye={init:function(e,t,n,r=50){const o=Ee(t);(o||document.documentElement).style.overflowAnchor="none";const a=new IntersectionObserver((function(r){r.forEach((r=>{var o;if(!r.isIntersecting)return;const a=t.getBoundingClientRect(),i=n.getBoundingClientRect().top-a.bottom,s=null===(o=r.rootBounds)||void 0===o?void 0:o.height;r.target===t?e.invokeMethodAsync("OnSpacerBeforeVisible",r.intersectionRect.top-r.boundingClientRect.top,i,s):r.target===n&&n.offsetHeight>0&&e.invokeMethodAsync("OnSpacerAfterVisible",r.boundingClientRect.bottom-r.intersectionRect.bottom,i,s)}))}),{root:o,rootMargin:`${r}px`});a.observe(t),a.observe(n);const i=c(t),s=c(n);function c(e){const t=new MutationObserver((()=>{a.unobserve(e),a.observe(e)}));return t.observe(e,{attributes:!0}),t}we[e._id]={intersectionObserver:a,mutationObserverBefore:i,mutationObserverAfter:s}},dispose:function(e){const t=we[e._id];t&&(t.intersectionObserver.disconnect(),t.mutationObserverBefore.disconnect(),t.mutationObserverAfter.disconnect(),e.dispose(),delete we[e._id])}},we={};function Ee(e){return e?"visible"!==getComputedStyle(e).overflowY?e:Ee(e.parentElement):null}function Ie(e,t){const n=e._blazorFilesById[t];if(!n)throw new Error(`There is no file with ID ${t}. The file list may have changed.`);return n}const Se={navigateTo:fe,registerCustomEventType:function(e,t){if(!t)throw new Error("The options parameter is required.");if(i.has(e))throw new Error(`The event '${e}' is already registered.`);if(t.browserEventName){const n=s.get(t.browserEventName);n?n.push(e):s.set(t.browserEventName,[e]),l.forEach((n=>n(e,t.browserEventName)))}i.set(e,t)},rootComponents:re,_internal:{navigationManager:de,domWrapper:{focus:function(e,t){if(!(e instanceof HTMLElement))throw new Error("Unable to focus an invalid element.");e.focus({preventScroll:t})},focusBySelector:function(e){const t=document.querySelector(e);t&&(t.hasAttribute("tabindex")||(t.tabIndex=-1),t.focus())}},Virtualize:ye,PageTitle:{getAndRemoveExistingTitle:function(){var e;const t=document.getElementsByTagName("title");if(0===t.length)return null;let n=null;for(let r=t.length-1;r>=0;r--){const o=t[r],a=o.previousSibling;a instanceof Comment&&null!==R(a)||(null===n&&(n=o.textContent),null===(e=o.parentNode)||void 0===e||e.removeChild(o))}return n}},InputFile:{init:function(e,t){t._blazorInputFileNextFileId=0,t.addEventListener("click",(function(){t.value=""})),t.addEventListener("change",(function(){t._blazorFilesById={};const n=Array.prototype.map.call(t.files,(function(e){const n={id:++t._blazorInputFileNextFileId,lastModified:new Date(e.lastModified).toISOString(),name:e.name,size:e.size,contentType:e.type,readPromise:void 0,arrayBuffer:void 0,blob:e};return t._blazorFilesById[n.id]=n,n}));e.invokeMethodAsync("NotifyChange",n)}))},toImageFile:async function(e,t,n,r,o){const a=Ie(e,t),i=await new Promise((function(e){const t=new Image;t.onload=function(){e(t)},t.src=URL.createObjectURL(a.blob)})),s=await new Promise((function(e){var t;const a=Math.min(1,r/i.width),s=Math.min(1,o/i.height),c=Math.min(a,s),l=document.createElement("canvas");l.width=Math.round(i.width*c),l.height=Math.round(i.height*c),null===(t=l.getContext("2d"))||void 0===t||t.drawImage(i,0,0,l.width,l.height),l.toBlob(e,n)})),c={id:++e._blazorInputFileNextFileId,lastModified:a.lastModified,name:a.name,size:(null==s?void 0:s.size)||0,contentType:n,blob:s||a.blob};return e._blazorFilesById[c.id]=c,c},readFileData:async function(e,t){return Ie(e,t).blob}},getJSDataStreamChunk:async function(e,t,n){return e instanceof Blob?await async function(e,t,n){const r=e.slice(t,t+n),o=await r.arrayBuffer();return new Uint8Array(o)}(e,t,n):function(e,t,n){return new Uint8Array(e.buffer,e.byteOffset+t,n)}(e,t,n)},enableJSRootComponents:function(t,n){if(te)throw new Error("Dynamic root components have already been enabled.");te=t;for(const[t,r]of Object.entries(n)){const n=e.jsCallDispatcher.findJSFunction(t,0);r.forEach((e=>{n(e.identifier,e.parameters)}))}}}};window.Blazor=Se;let Ce=!1;const De="function"==typeof TextDecoder?new TextDecoder("utf-8"):null,Ae=De?De.decode.bind(De):function(e){let t=0;const n=e.length,r=[],o=[];for(;t<n;){const n=e[t++];if(0===n)break;if(0==(128&n))r.push(n);else if(192==(224&n)){const o=63&e[t++];r.push((31&n)<<6|o)}else if(224==(240&n)){const o=63&e[t++],a=63&e[t++];r.push((31&n)<<12|o<<6|a)}else if(240==(248&n)){let o=(7&n)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++];o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o)}r.length>1024&&(o.push(String.fromCharCode.apply(null,r)),r.length=0)}return o.push(String.fromCharCode.apply(null,r)),o.join("")},Te=Math.pow(2,32),Ne=Math.pow(2,21)-1;function ke(e,t){return e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24}function Re(e,t){return e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24>>>0)}function Fe(e,t){const n=Re(e,t+4);if(n>Ne)throw new Error(`Cannot read uint64 with high order part ${n}, because the result would exceed Number.MAX_SAFE_INTEGER.`);return n*Te+Re(e,t)}class _e{constructor(e){this.batchData=e;const t=new Be(e);this.arrayRangeReader=new He(e),this.arrayBuilderSegmentReader=new Me(e),this.diffReader=new Oe(e),this.editReader=new xe(e,t),this.frameReader=new Le(e,t)}updatedComponents(){return ke(this.batchData,this.batchData.length-20)}referenceFrames(){return ke(this.batchData,this.batchData.length-16)}disposedComponentIds(){return ke(this.batchData,this.batchData.length-12)}disposedEventHandlerIds(){return ke(this.batchData,this.batchData.length-8)}updatedComponentsEntry(e,t){const n=e+4*t;return ke(this.batchData,n)}referenceFramesEntry(e,t){return e+20*t}disposedComponentIdsEntry(e,t){const n=e+4*t;return ke(this.batchData,n)}disposedEventHandlerIdsEntry(e,t){const n=e+8*t;return Fe(this.batchData,n)}}class Oe{constructor(e){this.batchDataUint8=e}componentId(e){return ke(this.batchDataUint8,e)}edits(e){return e+4}editsEntry(e,t){return e+16*t}}class xe{constructor(e,t){this.batchDataUint8=e,this.stringReader=t}editType(e){return ke(this.batchDataUint8,e)}siblingIndex(e){return ke(this.batchDataUint8,e+4)}newTreeIndex(e){return ke(this.batchDataUint8,e+8)}moveToSiblingIndex(e){return ke(this.batchDataUint8,e+8)}removedAttributeName(e){const t=ke(this.batchDataUint8,e+12);return this.stringReader.readString(t)}}class Le{constructor(e,t){this.batchDataUint8=e,this.stringReader=t}frameType(e){return ke(this.batchDataUint8,e)}subtreeLength(e){return ke(this.batchDataUint8,e+4)}elementReferenceCaptureId(e){const t=ke(this.batchDataUint8,e+4);return this.stringReader.readString(t)}componentId(e){return ke(this.batchDataUint8,e+8)}elementName(e){const t=ke(this.batchDataUint8,e+8);return this.stringReader.readString(t)}textContent(e){const t=ke(this.batchDataUint8,e+4);return this.stringReader.readString(t)}markupContent(e){const t=ke(this.batchDataUint8,e+4);return this.stringReader.readString(t)}attributeName(e){const t=ke(this.batchDataUint8,e+4);return this.stringReader.readString(t)}attributeValue(e){const t=ke(this.batchDataUint8,e+8);return this.stringReader.readString(t)}attributeEventHandlerId(e){return Fe(this.batchDataUint8,e+12)}}class Be{constructor(e){this.batchDataUint8=e,this.stringTableStartIndex=ke(e,e.length-4)}readString(e){if(-1===e)return null;{const n=ke(this.batchDataUint8,this.stringTableStartIndex+4*e),r=function(e,t){let n=0,r=0;for(let o=0;o<4;o++){const a=e[t+o];if(n|=(127&a)<<r,a<128)break;r+=7}return n}(this.batchDataUint8,n),o=n+((t=r)<128?1:t<16384?2:t<2097152?3:4),a=new Uint8Array(this.batchDataUint8.buffer,this.batchDataUint8.byteOffset+o,r);return Ae(a)}var t}}class He{constructor(e){this.batchDataUint8=e}count(e){return ke(this.batchDataUint8,e)}values(e){return e+4}}class Me{constructor(e){this.batchDataUint8=e}offset(e){return 0}count(e){return ke(this.batchDataUint8,e)}values(e){return e+4}}const Pe="__bwv:";let Ue=!1;function je(e,t){Ve("OnRenderCompleted",e,t)}function Je(e,t,n,r,o){Ve("BeginInvokeDotNet",e?e.toString():null,t,n,r||0,o)}function $e(e,t,n){Ve("EndInvokeJS",e,t,n)}function ze(e,t){Ve("ReceiveByteArrayFromJS",e,function(e){const t=new Array(e.length);for(var n=0;n<e.length;n++)t[n]=String.fromCharCode(e[n]);return btoa(t.join(""))}(t))}function Ke(e,t){return Ve("OnLocationChanged",e,t),Promise.resolve()}function Ve(e,...t){const n=function(e,t){return Ue?null:`__bwv:${JSON.stringify([e,...t])}`}(e,t);n&&window.external.sendMessage(n)}function Xe(t,n){const r=Ye(n);e.jsCallDispatcher.receiveByteArray(t,r)}function Ye(e){const t=atob(e),n=t.length,r=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=t.charCodeAt(e);return r}let We,Ge=!1;async function qe(){if(Ge)throw new Error("Blazor has already started.");Ge=!0,function(){const t={AttachToDocument:(e,t)=>{!function(e,t,n){const r="::after";let o=!1;if(e.endsWith(r))e=e.slice(0,-r.length),o=!0;else if(e.endsWith("::before"))throw new Error("The '::before' selector is not supported.");const a=function(e){const t=ee.get(e);if(t)return ee.delete(e),t}(e)||document.querySelector(e);if(!a)throw new Error(`Could not find any element matching selector '${e}'.`);!function(e,t,n,r){let o=ie[0];o||(o=ie[0]=new Y(0)),o.attachRootComponentToLogicalElement(n,t,r)}(0,A(a,!0),t,o)}(t,e)},RenderBatch:(e,t)=>{try{const n=Ye(t);(function(e,t){const n=ie[0];if(!n)throw new Error("There is no browser renderer with ID 0.");const r=t.arrayRangeReader,o=t.updatedComponents(),a=r.values(o),i=r.count(o),s=t.referenceFrames(),c=r.values(s),l=t.diffReader;for(let e=0;e<i;e++){const r=t.updatedComponentsEntry(a,e),o=l.componentId(r),i=l.edits(r);n.updateComponent(t,o,i,c)}const u=t.disposedComponentIds(),d=r.values(u),f=r.count(u);for(let e=0;e<f;e++){const r=t.disposedComponentIdsEntry(d,e);n.disposeComponent(r)}const h=t.disposedEventHandlerIds(),m=r.values(h),p=r.count(h);for(let e=0;e<p;e++){const r=t.disposedEventHandlerIdsEntry(m,e);n.disposeEventHandler(r)}se&&(se=!1,window.scrollTo&&window.scrollTo(0,0))})(0,new _e(n)),je(e,null)}catch(t){je(e,t.toString())}},NotifyUnhandledException:(e,t)=>{Ue=!0,console.error(`${e}\n${t}`),async function(e=""){let t=document.querySelector("#blazor-error-ui");t&&(t.style.display="block",e&&t.firstChild&&(t.firstChild.textContent=`\n\t${e}\t\n`)),Ce||(Ce=!0,document.querySelectorAll("#blazor-error-ui .reload").forEach((e=>{e.onclick=function(e){location.reload(),e.preventDefault()}})),document.querySelectorAll("#blazor-error-ui .dismiss").forEach((e=>{e.onclick=function(e){const t=document.querySelector("#blazor-error-ui");t&&(t.style.display="none"),e.preventDefault()}})))}()},BeginInvokeJS:e.jsCallDispatcher.beginInvokeJSFromDotNet,EndInvokeDotNet:e.jsCallDispatcher.endInvokeDotNetFromJS,SendByteArrayToJS:Xe,Navigate:de.navigateTo};window.external.receiveMessage((e=>{const n=function(e){if(Ue||!e||!e.startsWith(Pe))return null;const t=e.substring(Pe.length),[n,...r]=JSON.parse(t);return{messageType:n,args:r}}(e);if(n){if(!t.hasOwnProperty(n.messageType))throw new Error(`Unsupported IPC message type '${n.messageType}'`);t[n.messageType].apply(null,n.args)}}))}(),e.attachDispatcher({beginInvokeDotNetFromJS:Je,endInvokeJSFromDotNet:$e,sendByteArray:ze}),de.enableNavigationInterception(),de.listenForNavigationEvents(Ke),Ve("AttachPage",de.getBaseURI(),de.getLocationHref())}Se._internal.attachEventDispatcher=e=>{if(We)throw new Error("The event dispatcher is already attached.");We=e},o=(e,t)=>{We.invokeMethodAsync("DispatchEventAsync",e,t)},Se.start=qe,document&&document.currentScript&&"false"!==document.currentScript.getAttribute("autostart")&&qe()})();