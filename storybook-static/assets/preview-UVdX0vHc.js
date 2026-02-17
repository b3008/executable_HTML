import{i as i$2,u as u$1,f,a as i$3,b,E,A as A$1}from"./lit-element-BrtkDOYA.js";import{l as l$2,r as r$2,p}from"./directive-helpers-DMDIdK1Z.js";import{c as commonjsGlobal}from"./_commonjsHelpers-Cpj98o6Y.js";import{v as v4}from"./v4-D8aEg3BZ.js";var spinner_styles_default=i$2`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const connectedElements=new Set,translations=new Map;let fallback,documentDirection="ltr",documentLanguage="en";const isClient=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(isClient){const m=new MutationObserver(update);documentDirection=document.documentElement.dir||"ltr",documentLanguage=document.documentElement.lang||navigator.language,m.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function registerTranslation(...m){m.map(s=>{const d=s.$code.toLowerCase();translations.has(d)?translations.set(d,Object.assign(Object.assign({},translations.get(d)),s)):translations.set(d,s),fallback||(fallback=s)}),update()}function update(){isClient&&(documentDirection=document.documentElement.dir||"ltr",documentLanguage=document.documentElement.lang||navigator.language),[...connectedElements.keys()].map(m=>{typeof m.requestUpdate=="function"&&m.requestUpdate()})}let LocalizeController$1=class{constructor(s){this.host=s,this.host.addController(this)}hostConnected(){connectedElements.add(this.host)}hostDisconnected(){connectedElements.delete(this.host)}dir(){return`${this.host.dir||documentDirection}`.toLowerCase()}lang(){return`${this.host.lang||documentLanguage}`.toLowerCase()}getTranslationData(s){var d,v;const C=new Intl.Locale(s.replace(/_/g,"-")),T=C==null?void 0:C.language.toLowerCase(),O=(v=(d=C==null?void 0:C.region)===null||d===void 0?void 0:d.toLowerCase())!==null&&v!==void 0?v:"",N=translations.get(`${T}-${O}`),M=translations.get(T);return{locale:C,language:T,region:O,primary:N,secondary:M}}exists(s,d){var v;const{primary:C,secondary:T}=this.getTranslationData((v=d.lang)!==null&&v!==void 0?v:this.lang());return d=Object.assign({includeFallback:!1},d),!!(C&&C[s]||T&&T[s]||d.includeFallback&&fallback&&fallback[s])}term(s,...d){const{primary:v,secondary:C}=this.getTranslationData(this.lang());let T;if(v&&v[s])T=v[s];else if(C&&C[s])T=C[s];else if(fallback&&fallback[s])T=fallback[s];else return console.error(`No translation found for: ${String(s)}`),String(s);return typeof T=="function"?T(...d):T}date(s,d){return s=new Date(s),new Intl.DateTimeFormat(this.lang(),d).format(s)}number(s,d){return s=Number(s),isNaN(s)?"":new Intl.NumberFormat(this.lang(),d).format(s)}relativeTime(s,d,v){return new Intl.RelativeTimeFormat(this.lang(),v).format(s,d)}};var translation={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(m,s)=>`Go to slide ${m} of ${s}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:m=>m===0?"No options selected":m===1?"1 option selected":`${m} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:m=>`Slide ${m}`,toggleColorFormat:"Toggle color format"};registerTranslation(translation);var en_default=translation,LocalizeController=class extends LocalizeController$1{};registerTranslation(en_default);var component_styles_default=i$2`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__typeError=m=>{throw TypeError(m)},__defNormalProp=(m,s,d)=>s in m?__defProp(m,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):m[s]=d,__spreadValues=(m,s)=>{for(var d in s||(s={}))__hasOwnProp.call(s,d)&&__defNormalProp(m,d,s[d]);if(__getOwnPropSymbols)for(var d of __getOwnPropSymbols(s))__propIsEnum.call(s,d)&&__defNormalProp(m,d,s[d]);return m},__spreadProps=(m,s)=>__defProps(m,__getOwnPropDescs(s)),__decorateClass=(m,s,d,v)=>{for(var C=v>1?void 0:v?__getOwnPropDesc(s,d):s,T=m.length-1,O;T>=0;T--)(O=m[T])&&(C=(v?O(s,d,C):O(C))||C);return v&&C&&__defProp(s,d,C),C},__accessCheck=(m,s,d)=>s.has(m)||__typeError("Cannot "+d),__privateGet=(m,s,d)=>(__accessCheck(m,s,"read from private field"),d?d.call(m):s.get(m)),__privateAdd=(m,s,d)=>s.has(m)?__typeError("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(m):s.set(m,d),__privateSet=(m,s,d,v)=>(__accessCheck(m,s,"write to private field"),v?v.call(m,d):s.set(m,d),d);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$2={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f},r$1=(m=o$2,s,d)=>{const{kind:v,metadata:C}=d;let T=globalThis.litPropertyMetadata.get(C);if(T===void 0&&globalThis.litPropertyMetadata.set(C,T=new Map),v==="setter"&&((m=Object.create(m)).wrapped=!0),T.set(d.name,m),v==="accessor"){const{name:O}=d;return{set(N){const M=s.get.call(this);s.set.call(this,N),this.requestUpdate(O,M,m,!0,N)},init(N){return N!==void 0&&this.C(O,void 0,m,N),N}}}if(v==="setter"){const{name:O}=d;return function(N){const M=this[O];s.call(this,N),this.requestUpdate(O,M,m,!0,N)}}throw Error("Unsupported decorator location: "+v)};function n$1(m){return(s,d)=>typeof d=="object"?r$1(m,s,d):((v,C,T)=>{const O=C.hasOwnProperty(T);return C.constructor.createProperty(T,v),O?Object.getOwnPropertyDescriptor(C,T):void 0})(m,s,d)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(m){return n$1({...m,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(m){return(s,d)=>{const v=typeof s=="function"?s:s[d];Object.assign(v,m)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$3=(m,s,d)=>(d.configurable=!0,d.enumerable=!0,Reflect.decorate&&typeof s!="object"&&Object.defineProperty(m,s,d),d);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$2(m,s){return(d,v,C)=>{const T=O=>{var N;return((N=O.renderRoot)==null?void 0:N.querySelector(m))??null};if(s){const{get:O,set:N}=typeof v=="object"?d:C??(()=>{const M=Symbol();return{get(){return this[M]},set(B){this[M]=B}}})();return e$3(d,v,{get(){let M=O.call(this);return M===void 0&&(M=T(this),(M!==null||this.hasUpdated)&&N.call(this,M)),M}})}return e$3(d,v,{get(){return T(this)}})}}var _hasRecordedInitialProperties,ShoelaceElement=class extends i$3{constructor(){super(),__privateAdd(this,_hasRecordedInitialProperties,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([m,s])=>{this.constructor.define(m,s)})}emit(m,s){const d=new CustomEvent(m,__spreadValues({bubbles:!0,cancelable:!1,composed:!0,detail:{}},s));return this.dispatchEvent(d),d}static define(m,s=this,d={}){const v=customElements.get(m);if(!v){try{customElements.define(m,s,d)}catch{customElements.define(m,class extends s{},d)}return}let C=" (unknown version)",T=C;"version"in s&&s.version&&(C=" v"+s.version),"version"in v&&v.version&&(T=" v"+v.version),!(C&&T&&C===T)&&console.warn(`Attempted to register <${m}>${C}, but <${m}>${T} has already been registered.`)}attributeChangedCallback(m,s,d){__privateGet(this,_hasRecordedInitialProperties)||(this.constructor.elementProperties.forEach((v,C)=>{v.reflect&&this[C]!=null&&this.initialReflectedProperties.set(C,this[C])}),__privateSet(this,_hasRecordedInitialProperties,!0)),super.attributeChangedCallback(m,s,d)}willUpdate(m){super.willUpdate(m),this.initialReflectedProperties.forEach((s,d)=>{m.has(d)&&this[d]==null&&(this[d]=s)})}};_hasRecordedInitialProperties=new WeakMap;ShoelaceElement.version="2.20.1";ShoelaceElement.dependencies={};__decorateClass([n$1()],ShoelaceElement.prototype,"dir",2);__decorateClass([n$1()],ShoelaceElement.prototype,"lang",2);var SlSpinner=class extends ShoelaceElement{constructor(){super(...arguments),this.localize=new LocalizeController(this)}render(){return b`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};SlSpinner.styles=[component_styles_default,spinner_styles_default];var formCollections=new WeakMap,reportValidityOverloads=new WeakMap,checkValidityOverloads=new WeakMap,userInteractedControls=new WeakSet,interactions=new WeakMap,FormControlController=class{constructor(m,s){this.handleFormData=d=>{const v=this.options.disabled(this.host),C=this.options.name(this.host),T=this.options.value(this.host),O=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!v&&!O&&typeof C=="string"&&C.length>0&&typeof T<"u"&&(Array.isArray(T)?T.forEach(N=>{d.formData.append(C,N.toString())}):d.formData.append(C,T.toString()))},this.handleFormSubmit=d=>{var v;const C=this.options.disabled(this.host),T=this.options.reportValidity;this.form&&!this.form.noValidate&&((v=formCollections.get(this.form))==null||v.forEach(O=>{this.setUserInteracted(O,!0)})),this.form&&!this.form.noValidate&&!C&&!T(this.host)&&(d.preventDefault(),d.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),interactions.set(this.host,[])},this.handleInteraction=d=>{const v=interactions.get(this.host);v.includes(d.type)||v.push(d.type),v.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const d=this.form.querySelectorAll("*");for(const v of d)if(typeof v.checkValidity=="function"&&!v.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const d=this.form.querySelectorAll("*");for(const v of d)if(typeof v.reportValidity=="function"&&!v.reportValidity())return!1}return!0},(this.host=m).addController(this),this.options=__spreadValues({form:d=>{const v=d.form;if(v){const T=d.getRootNode().querySelector(`#${v}`);if(T)return T}return d.closest("form")},name:d=>d.name,value:d=>d.value,defaultValue:d=>d.defaultValue,disabled:d=>{var v;return(v=d.disabled)!=null?v:!1},reportValidity:d=>typeof d.reportValidity=="function"?d.reportValidity():!0,checkValidity:d=>typeof d.checkValidity=="function"?d.checkValidity():!0,setValue:(d,v)=>d.value=v,assumeInteractionOn:["sl-input"]},s)}hostConnected(){const m=this.options.form(this.host);m&&this.attachForm(m),interactions.set(this.host,[]),this.options.assumeInteractionOn.forEach(s=>{this.host.addEventListener(s,this.handleInteraction)})}hostDisconnected(){this.detachForm(),interactions.delete(this.host),this.options.assumeInteractionOn.forEach(m=>{this.host.removeEventListener(m,this.handleInteraction)})}hostUpdated(){const m=this.options.form(this.host);m||this.detachForm(),m&&this.form!==m&&(this.detachForm(),this.attachForm(m)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(m){m?(this.form=m,formCollections.has(this.form)?formCollections.get(this.form).add(this.host):formCollections.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),reportValidityOverloads.has(this.form)||(reportValidityOverloads.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),checkValidityOverloads.has(this.form)||(checkValidityOverloads.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const m=formCollections.get(this.form);m&&(m.delete(this.host),m.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),reportValidityOverloads.has(this.form)&&(this.form.reportValidity=reportValidityOverloads.get(this.form),reportValidityOverloads.delete(this.form)),checkValidityOverloads.has(this.form)&&(this.form.checkValidity=checkValidityOverloads.get(this.form),checkValidityOverloads.delete(this.form)),this.form=void 0))}setUserInteracted(m,s){s?userInteractedControls.add(m):userInteractedControls.delete(m),m.requestUpdate()}doAction(m,s){if(this.form){const d=document.createElement("button");d.type=m,d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.clipPath="inset(50%)",d.style.overflow="hidden",d.style.whiteSpace="nowrap",s&&(d.name=s.name,d.value=s.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(v=>{s.hasAttribute(v)&&d.setAttribute(v,s.getAttribute(v))})),this.form.append(d),d.click(),d.remove()}}getForm(){var m;return(m=this.form)!=null?m:null}reset(m){this.doAction("reset",m)}submit(m){this.doAction("submit",m)}setValidity(m){const s=this.host,d=!!userInteractedControls.has(s),v=!!s.required;s.toggleAttribute("data-required",v),s.toggleAttribute("data-optional",!v),s.toggleAttribute("data-invalid",!m),s.toggleAttribute("data-valid",m),s.toggleAttribute("data-user-invalid",!m&&d),s.toggleAttribute("data-user-valid",m&&d)}updateValidity(){const m=this.host;this.setValidity(m.validity.valid)}emitInvalidEvent(m){const s=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});m||s.preventDefault(),this.host.dispatchEvent(s)||m==null||m.preventDefault()}},validValidityState=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(__spreadProps(__spreadValues({},validValidityState),{valid:!1,valueMissing:!0}));Object.freeze(__spreadProps(__spreadValues({},validValidityState),{valid:!1,customError:!0}));var button_styles_default=i$2`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,HasSlotController=class{constructor(m,...s){this.slotNames=[],this.handleSlotChange=d=>{const v=d.target;(this.slotNames.includes("[default]")&&!v.name||v.name&&this.slotNames.includes(v.name))&&this.host.requestUpdate()},(this.host=m).addController(this),this.slotNames=s}hasDefaultSlot(){return[...this.host.childNodes].some(m=>{if(m.nodeType===m.TEXT_NODE&&m.textContent.trim()!=="")return!0;if(m.nodeType===m.ELEMENT_NODE){const s=m;if(s.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!s.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(m){return this.host.querySelector(`:scope > [slot="${m}"]`)!==null}test(m){return m==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(m)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},basePath="";function setBasePath(m){basePath=m}function getBasePath(m=""){if(!basePath){const s=[...document.getElementsByTagName("script")],d=s.find(v=>v.hasAttribute("data-shoelace"));if(d)setBasePath(d.getAttribute("data-shoelace"));else{const v=s.find(T=>/shoelace(\.min)?\.js($|\?)/.test(T.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(T.src));let C="";v&&(C=v.getAttribute("src")),setBasePath(C.split("/").slice(0,-1).join("/"))}}return basePath.replace(/\/$/,"")+(m?`/${m.replace(/^\//,"")}`:"")}var library={name:"default",resolver:m=>getBasePath(`assets/icons/${m}.svg`)},library_default_default=library,icons={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},systemLibrary={name:"system",resolver:m=>m in icons?`data:image/svg+xml,${encodeURIComponent(icons[m])}`:""},library_system_default=systemLibrary,registry=[library_default_default,library_system_default],watchedIcons=[];function watchIcon(m){watchedIcons.push(m)}function unwatchIcon(m){watchedIcons=watchedIcons.filter(s=>s!==m)}function getIconLibrary(m){return registry.find(s=>s.name===m)}var icon_styles_default=i$2`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function watch(m,s){const d=__spreadValues({waitUntilFirstUpdate:!1},s);return(v,C)=>{const{update:T}=v,O=Array.isArray(m)?m:[m];v.update=function(N){O.forEach(M=>{const B=M;if(N.has(B)){const z=N.get(B),$=this[B];z!==$&&(!d.waitUntilFirstUpdate||this.hasUpdated)&&this[C](z,$)}}),T.call(this,N)}}}var CACHEABLE_ERROR=Symbol(),RETRYABLE_ERROR=Symbol(),parser$1,iconCache=new Map,SlIcon=class extends ShoelaceElement{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(m,s){var d;let v;if(s!=null&&s.spriteSheet)return this.svg=b`<svg part="svg">
        <use part="use" href="${m}"></use>
      </svg>`,this.svg;try{if(v=await fetch(m,{mode:"cors"}),!v.ok)return v.status===410?CACHEABLE_ERROR:RETRYABLE_ERROR}catch{return RETRYABLE_ERROR}try{const C=document.createElement("div");C.innerHTML=await v.text();const T=C.firstElementChild;if(((d=T==null?void 0:T.tagName)==null?void 0:d.toLowerCase())!=="svg")return CACHEABLE_ERROR;parser$1||(parser$1=new DOMParser);const N=parser$1.parseFromString(T.outerHTML,"text/html").body.querySelector("svg");return N?(N.part.add("svg"),document.adoptNode(N)):CACHEABLE_ERROR}catch{return CACHEABLE_ERROR}}connectedCallback(){super.connectedCallback(),watchIcon(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),unwatchIcon(this)}getIconSource(){const m=getIconLibrary(this.library);return this.name&&m?{url:m.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var m;const{url:s,fromLibrary:d}=this.getIconSource(),v=d?getIconLibrary(this.library):void 0;if(!s){this.svg=null;return}let C=iconCache.get(s);if(C||(C=this.resolveIcon(s,v),iconCache.set(s,C)),!this.initialRender)return;const T=await C;if(T===RETRYABLE_ERROR&&iconCache.delete(s),s===this.getIconSource().url){if(l$2(T)){if(this.svg=T,v){await this.updateComplete;const O=this.shadowRoot.querySelector("[part='svg']");typeof v.mutator=="function"&&O&&v.mutator(O)}return}switch(T){case RETRYABLE_ERROR:case CACHEABLE_ERROR:this.svg=null,this.emit("sl-error");break;default:this.svg=T.cloneNode(!0),(m=v==null?void 0:v.mutator)==null||m.call(v,this.svg),this.emit("sl-load")}}}render(){return this.svg}};SlIcon.styles=[component_styles_default,icon_styles_default];__decorateClass([r()],SlIcon.prototype,"svg",2);__decorateClass([n$1({reflect:!0})],SlIcon.prototype,"name",2);__decorateClass([n$1()],SlIcon.prototype,"src",2);__decorateClass([n$1()],SlIcon.prototype,"label",2);__decorateClass([n$1({reflect:!0})],SlIcon.prototype,"library",2);__decorateClass([watch("label")],SlIcon.prototype,"handleLabelChange",1);__decorateClass([watch(["name","src","library"])],SlIcon.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=m=>(...s)=>({_$litDirective$:m,values:s});let i$1=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,d,v){this._$Ct=s,this._$AM=d,this._$Ci=v}_$AS(s,d){return this.update(s,d)}update(s,d){return this.render(...d)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=e$1(class extends i$1{constructor(m){var s;if(super(m),m.type!==t.ATTRIBUTE||m.name!=="class"||((s=m.strings)==null?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(m){return" "+Object.keys(m).filter(s=>m[s]).join(" ")+" "}update(m,[s]){var v,C;if(this.st===void 0){this.st=new Set,m.strings!==void 0&&(this.nt=new Set(m.strings.join(" ").split(/\s/).filter(T=>T!=="")));for(const T in s)s[T]&&!((v=this.nt)!=null&&v.has(T))&&this.st.add(T);return this.render(s)}const d=m.element.classList;for(const T of this.st)T in s||(d.remove(T),this.st.delete(T));for(const T in s){const O=!!s[T];O===this.st.has(T)||(C=this.nt)!=null&&C.has(T)||(O?(d.add(T),this.st.add(T)):(d.remove(T),this.st.delete(T)))}return E}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=Symbol.for(""),o$1=m=>{if((m==null?void 0:m.r)===a)return m==null?void 0:m._$litStatic$},i=(m,...s)=>({_$litStatic$:s.reduce((d,v,C)=>d+(T=>{if(T._$litStatic$!==void 0)return T._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${T}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(v)+m[C+1],m[0]),r:a}),l$1=new Map,n=m=>(s,...d)=>{const v=d.length;let C,T;const O=[],N=[];let M,B=0,z=!1;for(;B<v;){for(M=s[B];B<v&&(T=d[B],(C=o$1(T))!==void 0);)M+=C+s[++B],z=!0;B!==v&&N.push(T),O.push(M),B++}if(B===v&&O.push(s[v]),z){const $=O.join("$$lit$$");(s=l$1.get($))===void 0&&(O.raw=O,l$1.set($,s=O)),d=N}return m(s,...d)},u=n(b);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=m=>m??A$1;var SlButton=class extends ShoelaceElement{constructor(){super(...arguments),this.formControlController=new FormControlController(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new HasSlotController(this,"[default]","prefix","suffix"),this.localize=new LocalizeController(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:validValidityState}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(m){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(m)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(m){this.button.focus(m)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(m){this.isButton()&&(this.button.setCustomValidity(m),this.formControlController.updateValidity())}render(){const m=this.isLink(),s=m?i`a`:i`button`;return u`
      <${s}
        part="base"
        class=${e({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${o(m?void 0:this.disabled)}
        type=${o(m?void 0:this.type)}
        title=${this.title}
        name=${o(m?void 0:this.name)}
        value=${o(m?void 0:this.value)}
        href=${o(m&&!this.disabled?this.href:void 0)}
        target=${o(m?this.target:void 0)}
        download=${o(m?this.download:void 0)}
        rel=${o(m?this.rel:void 0)}
        role=${o(m?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?u` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?u`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${s}>
    `}};SlButton.styles=[component_styles_default,button_styles_default];SlButton.dependencies={"sl-icon":SlIcon,"sl-spinner":SlSpinner};__decorateClass([e$2(".button")],SlButton.prototype,"button",2);__decorateClass([r()],SlButton.prototype,"hasFocus",2);__decorateClass([r()],SlButton.prototype,"invalid",2);__decorateClass([n$1()],SlButton.prototype,"title",2);__decorateClass([n$1({reflect:!0})],SlButton.prototype,"variant",2);__decorateClass([n$1({reflect:!0})],SlButton.prototype,"size",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"caret",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"disabled",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"loading",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"outline",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"pill",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"circle",2);__decorateClass([n$1()],SlButton.prototype,"type",2);__decorateClass([n$1()],SlButton.prototype,"name",2);__decorateClass([n$1()],SlButton.prototype,"value",2);__decorateClass([n$1()],SlButton.prototype,"href",2);__decorateClass([n$1()],SlButton.prototype,"target",2);__decorateClass([n$1()],SlButton.prototype,"rel",2);__decorateClass([n$1()],SlButton.prototype,"download",2);__decorateClass([n$1()],SlButton.prototype,"form",2);__decorateClass([n$1({attribute:"formaction"})],SlButton.prototype,"formAction",2);__decorateClass([n$1({attribute:"formenctype"})],SlButton.prototype,"formEnctype",2);__decorateClass([n$1({attribute:"formmethod"})],SlButton.prototype,"formMethod",2);__decorateClass([n$1({attribute:"formnovalidate",type:Boolean})],SlButton.prototype,"formNoValidate",2);__decorateClass([n$1({attribute:"formtarget"})],SlButton.prototype,"formTarget",2);__decorateClass([watch("disabled",{waitUntilFirstUpdate:!0})],SlButton.prototype,"handleDisabledChange",1);SlButton.define("sl-button");var checkbox_styles_default=i$2`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,defaultValue=(m="value")=>(s,d)=>{const v=s.constructor,C=v.prototype.attributeChangedCallback;v.prototype.attributeChangedCallback=function(T,O,N){var M;const B=v.getPropertyOptions(m),z=typeof B.attribute=="string"?B.attribute:m;if(T===z){const $=B.converter||u$1,j=(typeof $=="function"?$:(M=$==null?void 0:$.fromAttribute)!=null?M:u$1.fromAttribute)(N,B.type);this[m]!==j&&(this[d]=j)}C.call(this,T,O,N)}},form_control_styles_default=i$2`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$1(class extends i$1{constructor(m){if(super(m),m.type!==t.PROPERTY&&m.type!==t.ATTRIBUTE&&m.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!r$2(m))throw Error("`live` bindings can only contain a single expression")}render(m){return m}update(m,[s]){if(s===E||s===A$1)return s;const d=m.element,v=m.name;if(m.type===t.PROPERTY){if(s===d[v])return E}else if(m.type===t.BOOLEAN_ATTRIBUTE){if(!!s===d.hasAttribute(v))return E}else if(m.type===t.ATTRIBUTE&&d.getAttribute(v)===s+"")return E;return p(m),s}});var SlCheckbox=class extends ShoelaceElement{constructor(){super(...arguments),this.formControlController=new FormControlController(this,{value:m=>m.checked?m.value||"on":void 0,defaultValue:m=>m.defaultChecked,setValue:(m,s)=>m.checked=s}),this.hasSlotController=new HasSlotController(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(m){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(m)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(m){this.input.focus(m)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(m){this.input.setCustomValidity(m),this.formControlController.updateValidity()}render(){const m=this.hasSlotController.test("help-text"),s=this.helpText?!0:!!m;return b`
      <div
        class=${e({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":s})}
      >
        <label
          part="base"
          class=${e({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o(this.value)}
            .indeterminate=${l(this.indeterminate)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?b`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?b`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${s?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};SlCheckbox.styles=[component_styles_default,form_control_styles_default,checkbox_styles_default];SlCheckbox.dependencies={"sl-icon":SlIcon};__decorateClass([e$2('input[type="checkbox"]')],SlCheckbox.prototype,"input",2);__decorateClass([r()],SlCheckbox.prototype,"hasFocus",2);__decorateClass([n$1()],SlCheckbox.prototype,"title",2);__decorateClass([n$1()],SlCheckbox.prototype,"name",2);__decorateClass([n$1()],SlCheckbox.prototype,"value",2);__decorateClass([n$1({reflect:!0})],SlCheckbox.prototype,"size",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlCheckbox.prototype,"disabled",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlCheckbox.prototype,"checked",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlCheckbox.prototype,"indeterminate",2);__decorateClass([defaultValue("checked")],SlCheckbox.prototype,"defaultChecked",2);__decorateClass([n$1({reflect:!0})],SlCheckbox.prototype,"form",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlCheckbox.prototype,"required",2);__decorateClass([n$1({attribute:"help-text"})],SlCheckbox.prototype,"helpText",2);__decorateClass([watch("disabled",{waitUntilFirstUpdate:!0})],SlCheckbox.prototype,"handleDisabledChange",1);__decorateClass([watch(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],SlCheckbox.prototype,"handleStateChange",1);SlCheckbox.define("sl-checkbox");var radio_styles_default=i$2`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,SlRadio=class extends ShoelaceElement{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return b`
      <span
        part="base"
        class=${e({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?b` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};SlRadio.styles=[component_styles_default,radio_styles_default];SlRadio.dependencies={"sl-icon":SlIcon};__decorateClass([r()],SlRadio.prototype,"checked",2);__decorateClass([r()],SlRadio.prototype,"hasFocus",2);__decorateClass([n$1()],SlRadio.prototype,"value",2);__decorateClass([n$1({reflect:!0})],SlRadio.prototype,"size",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlRadio.prototype,"disabled",2);__decorateClass([watch("checked")],SlRadio.prototype,"handleCheckedChange",1);__decorateClass([watch("disabled",{waitUntilFirstUpdate:!0})],SlRadio.prototype,"handleDisabledChange",1);SlRadio.define("sl-radio");var range_styles_default=i$2`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,SlRange=class extends ShoelaceElement{constructor(){super(...arguments),this.formControlController=new FormControlController(this),this.hasSlotController=new HasSlotController(this,"help-text","label"),this.localize=new LocalizeController(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=m=>m.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var m;super.disconnectedCallback(),(m=this.resizeObserver)==null||m.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(m){this.input.style.setProperty("--percent",`${m*100}%`)}syncTooltip(m){if(this.output!==null){const s=this.input.offsetWidth,d=this.output.offsetWidth,v=getComputedStyle(this.input).getPropertyValue("--thumb-size"),C=this.localize.dir()==="rtl",T=s*m;if(C){const O=`${s-T}px + ${m} * ${v}`;this.output.style.translate=`calc((${O} - ${d/2}px - ${v} / 2))`}else{const O=`${T}px - ${m} * ${v}`;this.output.style.translate=`calc(${O} - ${d/2}px + ${v} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const m=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(m),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(m))}handleInvalid(m){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(m)}focus(m){this.input.focus(m)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(m){this.input.setCustomValidity(m),this.formControlController.updateValidity()}render(){const m=this.hasSlotController.test("label"),s=this.hasSlotController.test("help-text"),d=this.label?!0:!!m,v=this.helpText?!0:!!s;return b`
      <div
        part="form-control"
        class=${e({"form-control":!0,"form-control--medium":!0,"form-control--has-label":d,"form-control--has-help-text":v})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${d?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${o(this.name)}
              ?disabled=${this.disabled}
              min=${o(this.min)}
              max=${o(this.max)}
              step=${o(this.step)}
              .value=${l(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?b`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${v?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};SlRange.styles=[component_styles_default,form_control_styles_default,range_styles_default];__decorateClass([e$2(".range__control")],SlRange.prototype,"input",2);__decorateClass([e$2(".range__tooltip")],SlRange.prototype,"output",2);__decorateClass([r()],SlRange.prototype,"hasFocus",2);__decorateClass([r()],SlRange.prototype,"hasTooltip",2);__decorateClass([n$1()],SlRange.prototype,"title",2);__decorateClass([n$1()],SlRange.prototype,"name",2);__decorateClass([n$1({type:Number})],SlRange.prototype,"value",2);__decorateClass([n$1()],SlRange.prototype,"label",2);__decorateClass([n$1({attribute:"help-text"})],SlRange.prototype,"helpText",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlRange.prototype,"disabled",2);__decorateClass([n$1({type:Number})],SlRange.prototype,"min",2);__decorateClass([n$1({type:Number})],SlRange.prototype,"max",2);__decorateClass([n$1({type:Number})],SlRange.prototype,"step",2);__decorateClass([n$1()],SlRange.prototype,"tooltip",2);__decorateClass([n$1({attribute:!1})],SlRange.prototype,"tooltipFormatter",2);__decorateClass([n$1({reflect:!0})],SlRange.prototype,"form",2);__decorateClass([defaultValue()],SlRange.prototype,"defaultValue",2);__decorateClass([t$1({passive:!0})],SlRange.prototype,"handleThumbDragStart",1);__decorateClass([watch("value",{waitUntilFirstUpdate:!0})],SlRange.prototype,"handleValueChange",1);__decorateClass([watch("disabled",{waitUntilFirstUpdate:!0})],SlRange.prototype,"handleDisabledChange",1);__decorateClass([watch("hasTooltip",{waitUntilFirstUpdate:!0})],SlRange.prototype,"syncRange",1);SlRange.define("sl-range");var input_styles_default=i$2`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,SlInput=class extends ShoelaceElement{constructor(){super(...arguments),this.formControlController=new FormControlController(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new HasSlotController(this,"help-text","label"),this.localize=new LocalizeController(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var m;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((m=this.input)==null?void 0:m.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(m){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=m,this.value=this.__dateInput.value}get valueAsNumber(){var m;return this.__numberInput.value=this.value,((m=this.input)==null?void 0:m.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(m){this.__numberInput.valueAsNumber=m,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(m){m.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(m){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(m)}handleKeyDown(m){const s=m.metaKey||m.ctrlKey||m.shiftKey||m.altKey;m.key==="Enter"&&!s&&setTimeout(()=>{!m.defaultPrevented&&!m.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(m){this.input.focus(m)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(m,s,d="none"){this.input.setSelectionRange(m,s,d)}setRangeText(m,s,d,v="preserve"){const C=s??this.input.selectionStart,T=d??this.input.selectionEnd;this.input.setRangeText(m,C,T,v),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(m){this.input.setCustomValidity(m),this.formControlController.updateValidity()}render(){const m=this.hasSlotController.test("label"),s=this.hasSlotController.test("help-text"),d=this.label?!0:!!m,v=this.helpText?!0:!!s,T=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return b`
      <div
        part="form-control"
        class=${e({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":d,"form-control--has-help-text":v})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${d?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${o(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o(this.placeholder)}
              minlength=${o(this.minlength)}
              maxlength=${o(this.maxlength)}
              min=${o(this.min)}
              max=${o(this.max)}
              step=${o(this.step)}
              .value=${l(this.value)}
              autocapitalize=${o(this.autocapitalize)}
              autocomplete=${o(this.autocomplete)}
              autocorrect=${o(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${o(this.pattern)}
              enterkeyhint=${o(this.enterkeyhint)}
              inputmode=${o(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${T?b`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?b`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?b`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:b`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${v?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};SlInput.styles=[component_styles_default,form_control_styles_default,input_styles_default];SlInput.dependencies={"sl-icon":SlIcon};__decorateClass([e$2(".input__control")],SlInput.prototype,"input",2);__decorateClass([r()],SlInput.prototype,"hasFocus",2);__decorateClass([n$1()],SlInput.prototype,"title",2);__decorateClass([n$1({reflect:!0})],SlInput.prototype,"type",2);__decorateClass([n$1()],SlInput.prototype,"name",2);__decorateClass([n$1()],SlInput.prototype,"value",2);__decorateClass([defaultValue()],SlInput.prototype,"defaultValue",2);__decorateClass([n$1({reflect:!0})],SlInput.prototype,"size",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlInput.prototype,"filled",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlInput.prototype,"pill",2);__decorateClass([n$1()],SlInput.prototype,"label",2);__decorateClass([n$1({attribute:"help-text"})],SlInput.prototype,"helpText",2);__decorateClass([n$1({type:Boolean})],SlInput.prototype,"clearable",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlInput.prototype,"disabled",2);__decorateClass([n$1()],SlInput.prototype,"placeholder",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlInput.prototype,"readonly",2);__decorateClass([n$1({attribute:"password-toggle",type:Boolean})],SlInput.prototype,"passwordToggle",2);__decorateClass([n$1({attribute:"password-visible",type:Boolean})],SlInput.prototype,"passwordVisible",2);__decorateClass([n$1({attribute:"no-spin-buttons",type:Boolean})],SlInput.prototype,"noSpinButtons",2);__decorateClass([n$1({reflect:!0})],SlInput.prototype,"form",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlInput.prototype,"required",2);__decorateClass([n$1()],SlInput.prototype,"pattern",2);__decorateClass([n$1({type:Number})],SlInput.prototype,"minlength",2);__decorateClass([n$1({type:Number})],SlInput.prototype,"maxlength",2);__decorateClass([n$1()],SlInput.prototype,"min",2);__decorateClass([n$1()],SlInput.prototype,"max",2);__decorateClass([n$1()],SlInput.prototype,"step",2);__decorateClass([n$1()],SlInput.prototype,"autocapitalize",2);__decorateClass([n$1()],SlInput.prototype,"autocorrect",2);__decorateClass([n$1()],SlInput.prototype,"autocomplete",2);__decorateClass([n$1({type:Boolean})],SlInput.prototype,"autofocus",2);__decorateClass([n$1()],SlInput.prototype,"enterkeyhint",2);__decorateClass([n$1({type:Boolean,converter:{fromAttribute:m=>!(!m||m==="false"),toAttribute:m=>m?"true":"false"}})],SlInput.prototype,"spellcheck",2);__decorateClass([n$1()],SlInput.prototype,"inputmode",2);__decorateClass([watch("disabled",{waitUntilFirstUpdate:!0})],SlInput.prototype,"handleDisabledChange",1);__decorateClass([watch("step",{waitUntilFirstUpdate:!0})],SlInput.prototype,"handleStepChange",1);__decorateClass([watch("value",{waitUntilFirstUpdate:!0})],SlInput.prototype,"handleValueChange",1);SlInput.define("sl-input");var lodash={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */lodash.exports;(function(m,s){(function(){var d,v="4.17.21",C=200,T="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",O="Expected a function",N="Invalid `variable` option passed into `_.template`",M="__lodash_hash_undefined__",B=500,z="__lodash_placeholder__",$=1,H=2,j=4,ot=1,lt=2,bt=1,ft=2,Tt=4,Mt=8,Ht=16,Bt=32,$t=64,Gt=128,Pt=256,de=512,er=30,Nn="...",Rn=800,Mn=16,vn=1,Dn=2,yn=3,Nt=1/0,Ie=9007199254740991,Bn=17976931348623157e292,mt=NaN,ee=4294967295,_n=ee-1,pe=ee>>>1,Fn=[["ary",Gt],["bind",bt],["bindKey",ft],["curry",Mt],["curryRight",Ht],["flip",de],["partial",Bt],["partialRight",$t],["rearg",Pt]],ne="[object Arguments]",ue="[object Array]",Wt="[object AsyncFunction]",_e="[object Boolean]",Pe="[object Date]",$n="[object DOMException]",Ye="[object Error]",Ke="[object Function]",xn="[object GeneratorFunction]",se="[object Map]",xe="[object Number]",nr="[object Null]",we="[object Object]",wn="[object Promise]",Pn="[object Proxy]",ge="[object RegExp]",oe="[object Set]",Ge="[object String]",Je="[object Symbol]",zn="[object Undefined]",Xe="[object WeakMap]",rr="[object WeakSet]",S="[object ArrayBuffer]",W="[object DataView]",Q="[object Float32Array]",ut="[object Float64Array]",et="[object Int8Array]",ct="[object Int16Array]",L="[object Int32Array]",q="[object Uint8Array]",K="[object Uint8ClampedArray]",st="[object Uint16Array]",it="[object Uint32Array]",X=/\b__p \+= '';/g,at=/\b(__p \+=) '' \+/g,nt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,dt=/&(?:amp|lt|gt|quot|#39);/g,xt=/[&<>"']/g,wt=RegExp(dt.source),Oe=RegExp(xt.source),Zt=/<%-([\s\S]+?)%>/g,Jl=/<%([\s\S]+?)%>/g,_s=/<%=([\s\S]+?)%>/g,Xl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ql=/^\w*$/,Zl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,li=/[\\^$.*+?()[\]{}|]/g,ta=RegExp(li.source),ai=/^\s+/,ea=/\s/,na=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ra=/\{\n\/\* \[wrapped with (.+)\] \*/,ia=/,? & /,sa=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,oa=/[()=,{}\[\]\/\s]/,la=/\\(\\)?/g,aa=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,xs=/\w*$/,ua=/^[-+]0x[0-9a-f]+$/i,ca=/^0b[01]+$/i,ha=/^\[object .+?Constructor\]$/,fa=/^0o[0-7]+$/i,da=/^(?:0|[1-9]\d*)$/,pa=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yr=/($^)/,ga=/['\n\r\u2028\u2029\\]/g,_r="\\ud800-\\udfff",ma="\\u0300-\\u036f",ba="\\ufe20-\\ufe2f",va="\\u20d0-\\u20ff",ws=ma+ba+va,As="\\u2700-\\u27bf",Cs="a-z\\xdf-\\xf6\\xf8-\\xff",ya="\\xac\\xb1\\xd7\\xf7",_a="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xa="\\u2000-\\u206f",wa=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Es="A-Z\\xc0-\\xd6\\xd8-\\xde",Ss="\\ufe0e\\ufe0f",ks=ya+_a+xa+wa,ui="['’]",Aa="["+_r+"]",Ts="["+ks+"]",xr="["+ws+"]",Is="\\d+",Ca="["+As+"]",Os="["+Cs+"]",Ls="[^"+_r+ks+Is+As+Cs+Es+"]",ci="\\ud83c[\\udffb-\\udfff]",Ea="(?:"+xr+"|"+ci+")",Ns="[^"+_r+"]",hi="(?:\\ud83c[\\udde6-\\uddff]){2}",fi="[\\ud800-\\udbff][\\udc00-\\udfff]",Un="["+Es+"]",Rs="\\u200d",Ms="(?:"+Os+"|"+Ls+")",Sa="(?:"+Un+"|"+Ls+")",Ds="(?:"+ui+"(?:d|ll|m|re|s|t|ve))?",Bs="(?:"+ui+"(?:D|LL|M|RE|S|T|VE))?",Fs=Ea+"?",$s="["+Ss+"]?",ka="(?:"+Rs+"(?:"+[Ns,hi,fi].join("|")+")"+$s+Fs+")*",Ta="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ia="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ps=$s+Fs+ka,Oa="(?:"+[Ca,hi,fi].join("|")+")"+Ps,La="(?:"+[Ns+xr+"?",xr,hi,fi,Aa].join("|")+")",Na=RegExp(ui,"g"),Ra=RegExp(xr,"g"),di=RegExp(ci+"(?="+ci+")|"+La+Ps,"g"),Ma=RegExp([Un+"?"+Os+"+"+Ds+"(?="+[Ts,Un,"$"].join("|")+")",Sa+"+"+Bs+"(?="+[Ts,Un+Ms,"$"].join("|")+")",Un+"?"+Ms+"+"+Ds,Un+"+"+Bs,Ia,Ta,Is,Oa].join("|"),"g"),Da=RegExp("["+Rs+_r+ws+Ss+"]"),Ba=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Fa=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],$a=-1,Vt={};Vt[Q]=Vt[ut]=Vt[et]=Vt[ct]=Vt[L]=Vt[q]=Vt[K]=Vt[st]=Vt[it]=!0,Vt[ne]=Vt[ue]=Vt[S]=Vt[_e]=Vt[W]=Vt[Pe]=Vt[Ye]=Vt[Ke]=Vt[se]=Vt[xe]=Vt[we]=Vt[ge]=Vt[oe]=Vt[Ge]=Vt[Xe]=!1;var Ut={};Ut[ne]=Ut[ue]=Ut[S]=Ut[W]=Ut[_e]=Ut[Pe]=Ut[Q]=Ut[ut]=Ut[et]=Ut[ct]=Ut[L]=Ut[se]=Ut[xe]=Ut[we]=Ut[ge]=Ut[oe]=Ut[Ge]=Ut[Je]=Ut[q]=Ut[K]=Ut[st]=Ut[it]=!0,Ut[Ye]=Ut[Ke]=Ut[Xe]=!1;var Pa={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},za={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ua={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Va={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ha=parseFloat,Ga=parseInt,zs=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,Wa=typeof self=="object"&&self&&self.Object===Object&&self,re=zs||Wa||Function("return this")(),pi=s&&!s.nodeType&&s,An=pi&&!0&&m&&!m.nodeType&&m,Us=An&&An.exports===pi,gi=Us&&zs.process,Le=function(){try{var U=An&&An.require&&An.require("util").types;return U||gi&&gi.binding&&gi.binding("util")}catch{}}(),Vs=Le&&Le.isArrayBuffer,Hs=Le&&Le.isDate,Gs=Le&&Le.isMap,Ws=Le&&Le.isRegExp,js=Le&&Le.isSet,qs=Le&&Le.isTypedArray;function Ae(U,J,Y){switch(Y.length){case 0:return U.call(J);case 1:return U.call(J,Y[0]);case 2:return U.call(J,Y[0],Y[1]);case 3:return U.call(J,Y[0],Y[1],Y[2])}return U.apply(J,Y)}function ja(U,J,Y,pt){for(var At=-1,Rt=U==null?0:U.length;++At<Rt;){var Xt=U[At];J(pt,Xt,Y(Xt),U)}return pt}function Ne(U,J){for(var Y=-1,pt=U==null?0:U.length;++Y<pt&&J(U[Y],Y,U)!==!1;);return U}function qa(U,J){for(var Y=U==null?0:U.length;Y--&&J(U[Y],Y,U)!==!1;);return U}function Ys(U,J){for(var Y=-1,pt=U==null?0:U.length;++Y<pt;)if(!J(U[Y],Y,U))return!1;return!0}function un(U,J){for(var Y=-1,pt=U==null?0:U.length,At=0,Rt=[];++Y<pt;){var Xt=U[Y];J(Xt,Y,U)&&(Rt[At++]=Xt)}return Rt}function wr(U,J){var Y=U==null?0:U.length;return!!Y&&Vn(U,J,0)>-1}function mi(U,J,Y){for(var pt=-1,At=U==null?0:U.length;++pt<At;)if(Y(J,U[pt]))return!0;return!1}function jt(U,J){for(var Y=-1,pt=U==null?0:U.length,At=Array(pt);++Y<pt;)At[Y]=J(U[Y],Y,U);return At}function cn(U,J){for(var Y=-1,pt=J.length,At=U.length;++Y<pt;)U[At+Y]=J[Y];return U}function bi(U,J,Y,pt){var At=-1,Rt=U==null?0:U.length;for(pt&&Rt&&(Y=U[++At]);++At<Rt;)Y=J(Y,U[At],At,U);return Y}function Ya(U,J,Y,pt){var At=U==null?0:U.length;for(pt&&At&&(Y=U[--At]);At--;)Y=J(Y,U[At],At,U);return Y}function vi(U,J){for(var Y=-1,pt=U==null?0:U.length;++Y<pt;)if(J(U[Y],Y,U))return!0;return!1}var Ka=yi("length");function Ja(U){return U.split("")}function Xa(U){return U.match(sa)||[]}function Ks(U,J,Y){var pt;return Y(U,function(At,Rt,Xt){if(J(At,Rt,Xt))return pt=Rt,!1}),pt}function Ar(U,J,Y,pt){for(var At=U.length,Rt=Y+(pt?1:-1);pt?Rt--:++Rt<At;)if(J(U[Rt],Rt,U))return Rt;return-1}function Vn(U,J,Y){return J===J?uu(U,J,Y):Ar(U,Js,Y)}function Qa(U,J,Y,pt){for(var At=Y-1,Rt=U.length;++At<Rt;)if(pt(U[At],J))return At;return-1}function Js(U){return U!==U}function Xs(U,J){var Y=U==null?0:U.length;return Y?xi(U,J)/Y:mt}function yi(U){return function(J){return J==null?d:J[U]}}function _i(U){return function(J){return U==null?d:U[J]}}function Qs(U,J,Y,pt,At){return At(U,function(Rt,Xt,zt){Y=pt?(pt=!1,Rt):J(Y,Rt,Xt,zt)}),Y}function Za(U,J){var Y=U.length;for(U.sort(J);Y--;)U[Y]=U[Y].value;return U}function xi(U,J){for(var Y,pt=-1,At=U.length;++pt<At;){var Rt=J(U[pt]);Rt!==d&&(Y=Y===d?Rt:Y+Rt)}return Y}function wi(U,J){for(var Y=-1,pt=Array(U);++Y<U;)pt[Y]=J(Y);return pt}function tu(U,J){return jt(J,function(Y){return[Y,U[Y]]})}function Zs(U){return U&&U.slice(0,io(U)+1).replace(ai,"")}function Ce(U){return function(J){return U(J)}}function Ai(U,J){return jt(J,function(Y){return U[Y]})}function ir(U,J){return U.has(J)}function eo(U,J){for(var Y=-1,pt=U.length;++Y<pt&&Vn(J,U[Y],0)>-1;);return Y}function no(U,J){for(var Y=U.length;Y--&&Vn(J,U[Y],0)>-1;);return Y}function eu(U,J){for(var Y=U.length,pt=0;Y--;)U[Y]===J&&++pt;return pt}var nu=_i(Pa),ru=_i(za);function iu(U){return"\\"+Va[U]}function su(U,J){return U==null?d:U[J]}function Hn(U){return Da.test(U)}function ou(U){return Ba.test(U)}function lu(U){for(var J,Y=[];!(J=U.next()).done;)Y.push(J.value);return Y}function Ci(U){var J=-1,Y=Array(U.size);return U.forEach(function(pt,At){Y[++J]=[At,pt]}),Y}function ro(U,J){return function(Y){return U(J(Y))}}function hn(U,J){for(var Y=-1,pt=U.length,At=0,Rt=[];++Y<pt;){var Xt=U[Y];(Xt===J||Xt===z)&&(U[Y]=z,Rt[At++]=Y)}return Rt}function Cr(U){var J=-1,Y=Array(U.size);return U.forEach(function(pt){Y[++J]=pt}),Y}function au(U){var J=-1,Y=Array(U.size);return U.forEach(function(pt){Y[++J]=[pt,pt]}),Y}function uu(U,J,Y){for(var pt=Y-1,At=U.length;++pt<At;)if(U[pt]===J)return pt;return-1}function cu(U,J,Y){for(var pt=Y+1;pt--;)if(U[pt]===J)return pt;return pt}function Gn(U){return Hn(U)?fu(U):Ka(U)}function ze(U){return Hn(U)?du(U):Ja(U)}function io(U){for(var J=U.length;J--&&ea.test(U.charAt(J)););return J}var hu=_i(Ua);function fu(U){for(var J=di.lastIndex=0;di.test(U);)++J;return J}function du(U){return U.match(di)||[]}function pu(U){return U.match(Ma)||[]}var gu=function U(J){J=J==null?re:Wn.defaults(re.Object(),J,Wn.pick(re,Fa));var Y=J.Array,pt=J.Date,At=J.Error,Rt=J.Function,Xt=J.Math,zt=J.Object,Ei=J.RegExp,mu=J.String,Re=J.TypeError,Er=Y.prototype,bu=Rt.prototype,jn=zt.prototype,Sr=J["__core-js_shared__"],kr=bu.toString,Ft=jn.hasOwnProperty,vu=0,so=function(){var h=/[^.]+$/.exec(Sr&&Sr.keys&&Sr.keys.IE_PROTO||"");return h?"Symbol(src)_1."+h:""}(),Tr=jn.toString,yu=kr.call(zt),_u=re._,xu=Ei("^"+kr.call(Ft).replace(li,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ir=Us?J.Buffer:d,fn=J.Symbol,Or=J.Uint8Array,oo=Ir?Ir.allocUnsafe:d,Lr=ro(zt.getPrototypeOf,zt),lo=zt.create,ao=jn.propertyIsEnumerable,Nr=Er.splice,uo=fn?fn.isConcatSpreadable:d,sr=fn?fn.iterator:d,Cn=fn?fn.toStringTag:d,Rr=function(){try{var h=In(zt,"defineProperty");return h({},"",{}),h}catch{}}(),wu=J.clearTimeout!==re.clearTimeout&&J.clearTimeout,Au=pt&&pt.now!==re.Date.now&&pt.now,Cu=J.setTimeout!==re.setTimeout&&J.setTimeout,Mr=Xt.ceil,Dr=Xt.floor,Si=zt.getOwnPropertySymbols,Eu=Ir?Ir.isBuffer:d,co=J.isFinite,Su=Er.join,ku=ro(zt.keys,zt),Qt=Xt.max,le=Xt.min,Tu=pt.now,Iu=J.parseInt,ho=Xt.random,Ou=Er.reverse,ki=In(J,"DataView"),or=In(J,"Map"),Ti=In(J,"Promise"),qn=In(J,"Set"),lr=In(J,"WeakMap"),ar=In(zt,"create"),Br=lr&&new lr,Yn={},Lu=On(ki),Nu=On(or),Ru=On(Ti),Mu=On(qn),Du=On(lr),Fr=fn?fn.prototype:d,ur=Fr?Fr.valueOf:d,fo=Fr?Fr.toString:d;function R(h){if(Yt(h)&&!Ct(h)&&!(h instanceof Ot)){if(h instanceof Me)return h;if(Ft.call(h,"__wrapped__"))return pl(h)}return new Me(h)}var Kn=function(){function h(){}return function(g){if(!qt(g))return{};if(lo)return lo(g);h.prototype=g;var _=new h;return h.prototype=d,_}}();function $r(){}function Me(h,g){this.__wrapped__=h,this.__actions__=[],this.__chain__=!!g,this.__index__=0,this.__values__=d}R.templateSettings={escape:Zt,evaluate:Jl,interpolate:_s,variable:"",imports:{_:R}},R.prototype=$r.prototype,R.prototype.constructor=R,Me.prototype=Kn($r.prototype),Me.prototype.constructor=Me;function Ot(h){this.__wrapped__=h,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ee,this.__views__=[]}function Bu(){var h=new Ot(this.__wrapped__);return h.__actions__=me(this.__actions__),h.__dir__=this.__dir__,h.__filtered__=this.__filtered__,h.__iteratees__=me(this.__iteratees__),h.__takeCount__=this.__takeCount__,h.__views__=me(this.__views__),h}function Fu(){if(this.__filtered__){var h=new Ot(this);h.__dir__=-1,h.__filtered__=!0}else h=this.clone(),h.__dir__*=-1;return h}function $u(){var h=this.__wrapped__.value(),g=this.__dir__,_=Ct(h),k=g<0,I=_?h.length:0,D=Jc(0,I,this.__views__),F=D.start,P=D.end,V=P-F,Z=k?P:F-1,tt=this.__iteratees__,rt=tt.length,ht=0,gt=le(V,this.__takeCount__);if(!_||!k&&I==V&&gt==V)return Fo(h,this.__actions__);var yt=[];t:for(;V--&&ht<gt;){Z+=g;for(var St=-1,_t=h[Z];++St<rt;){var It=tt[St],Lt=It.iteratee,ke=It.type,fe=Lt(_t);if(ke==Dn)_t=fe;else if(!fe){if(ke==vn)continue t;break t}}yt[ht++]=_t}return yt}Ot.prototype=Kn($r.prototype),Ot.prototype.constructor=Ot;function En(h){var g=-1,_=h==null?0:h.length;for(this.clear();++g<_;){var k=h[g];this.set(k[0],k[1])}}function Pu(){this.__data__=ar?ar(null):{},this.size=0}function zu(h){var g=this.has(h)&&delete this.__data__[h];return this.size-=g?1:0,g}function Uu(h){var g=this.__data__;if(ar){var _=g[h];return _===M?d:_}return Ft.call(g,h)?g[h]:d}function Vu(h){var g=this.__data__;return ar?g[h]!==d:Ft.call(g,h)}function Hu(h,g){var _=this.__data__;return this.size+=this.has(h)?0:1,_[h]=ar&&g===d?M:g,this}En.prototype.clear=Pu,En.prototype.delete=zu,En.prototype.get=Uu,En.prototype.has=Vu,En.prototype.set=Hu;function Qe(h){var g=-1,_=h==null?0:h.length;for(this.clear();++g<_;){var k=h[g];this.set(k[0],k[1])}}function Gu(){this.__data__=[],this.size=0}function Wu(h){var g=this.__data__,_=Pr(g,h);if(_<0)return!1;var k=g.length-1;return _==k?g.pop():Nr.call(g,_,1),--this.size,!0}function ju(h){var g=this.__data__,_=Pr(g,h);return _<0?d:g[_][1]}function qu(h){return Pr(this.__data__,h)>-1}function Yu(h,g){var _=this.__data__,k=Pr(_,h);return k<0?(++this.size,_.push([h,g])):_[k][1]=g,this}Qe.prototype.clear=Gu,Qe.prototype.delete=Wu,Qe.prototype.get=ju,Qe.prototype.has=qu,Qe.prototype.set=Yu;function Ze(h){var g=-1,_=h==null?0:h.length;for(this.clear();++g<_;){var k=h[g];this.set(k[0],k[1])}}function Ku(){this.size=0,this.__data__={hash:new En,map:new(or||Qe),string:new En}}function Ju(h){var g=Xr(this,h).delete(h);return this.size-=g?1:0,g}function Xu(h){return Xr(this,h).get(h)}function Qu(h){return Xr(this,h).has(h)}function Zu(h,g){var _=Xr(this,h),k=_.size;return _.set(h,g),this.size+=_.size==k?0:1,this}Ze.prototype.clear=Ku,Ze.prototype.delete=Ju,Ze.prototype.get=Xu,Ze.prototype.has=Qu,Ze.prototype.set=Zu;function Sn(h){var g=-1,_=h==null?0:h.length;for(this.__data__=new Ze;++g<_;)this.add(h[g])}function tc(h){return this.__data__.set(h,M),this}function ec(h){return this.__data__.has(h)}Sn.prototype.add=Sn.prototype.push=tc,Sn.prototype.has=ec;function Ue(h){var g=this.__data__=new Qe(h);this.size=g.size}function nc(){this.__data__=new Qe,this.size=0}function rc(h){var g=this.__data__,_=g.delete(h);return this.size=g.size,_}function ic(h){return this.__data__.get(h)}function sc(h){return this.__data__.has(h)}function oc(h,g){var _=this.__data__;if(_ instanceof Qe){var k=_.__data__;if(!or||k.length<C-1)return k.push([h,g]),this.size=++_.size,this;_=this.__data__=new Ze(k)}return _.set(h,g),this.size=_.size,this}Ue.prototype.clear=nc,Ue.prototype.delete=rc,Ue.prototype.get=ic,Ue.prototype.has=sc,Ue.prototype.set=oc;function po(h,g){var _=Ct(h),k=!_&&Ln(h),I=!_&&!k&&bn(h),D=!_&&!k&&!I&&Zn(h),F=_||k||I||D,P=F?wi(h.length,mu):[],V=P.length;for(var Z in h)(g||Ft.call(h,Z))&&!(F&&(Z=="length"||I&&(Z=="offset"||Z=="parent")||D&&(Z=="buffer"||Z=="byteLength"||Z=="byteOffset")||rn(Z,V)))&&P.push(Z);return P}function go(h){var g=h.length;return g?h[Pi(0,g-1)]:d}function lc(h,g){return Qr(me(h),kn(g,0,h.length))}function ac(h){return Qr(me(h))}function Ii(h,g,_){(_!==d&&!Ve(h[g],_)||_===d&&!(g in h))&&tn(h,g,_)}function cr(h,g,_){var k=h[g];(!(Ft.call(h,g)&&Ve(k,_))||_===d&&!(g in h))&&tn(h,g,_)}function Pr(h,g){for(var _=h.length;_--;)if(Ve(h[_][0],g))return _;return-1}function uc(h,g,_,k){return dn(h,function(I,D,F){g(k,I,_(I),F)}),k}function mo(h,g){return h&&je(g,te(g),h)}function cc(h,g){return h&&je(g,ve(g),h)}function tn(h,g,_){g=="__proto__"&&Rr?Rr(h,g,{configurable:!0,enumerable:!0,value:_,writable:!0}):h[g]=_}function Oi(h,g){for(var _=-1,k=g.length,I=Y(k),D=h==null;++_<k;)I[_]=D?d:hs(h,g[_]);return I}function kn(h,g,_){return h===h&&(_!==d&&(h=h<=_?h:_),g!==d&&(h=h>=g?h:g)),h}function De(h,g,_,k,I,D){var F,P=g&$,V=g&H,Z=g&j;if(_&&(F=I?_(h,k,I,D):_(h)),F!==d)return F;if(!qt(h))return h;var tt=Ct(h);if(tt){if(F=Qc(h),!P)return me(h,F)}else{var rt=ae(h),ht=rt==Ke||rt==xn;if(bn(h))return zo(h,P);if(rt==we||rt==ne||ht&&!I){if(F=V||ht?{}:sl(h),!P)return V?Uc(h,cc(F,h)):zc(h,mo(F,h))}else{if(!Ut[rt])return I?h:{};F=Zc(h,rt,P)}}D||(D=new Ue);var gt=D.get(h);if(gt)return gt;D.set(h,F),Ml(h)?h.forEach(function(_t){F.add(De(_t,g,_,_t,h,D))}):Nl(h)&&h.forEach(function(_t,It){F.set(It,De(_t,g,_,It,h,D))});var yt=Z?V?Ji:Ki:V?ve:te,St=tt?d:yt(h);return Ne(St||h,function(_t,It){St&&(It=_t,_t=h[It]),cr(F,It,De(_t,g,_,It,h,D))}),F}function hc(h){var g=te(h);return function(_){return bo(_,h,g)}}function bo(h,g,_){var k=_.length;if(h==null)return!k;for(h=zt(h);k--;){var I=_[k],D=g[I],F=h[I];if(F===d&&!(I in h)||!D(F))return!1}return!0}function vo(h,g,_){if(typeof h!="function")throw new Re(O);return br(function(){h.apply(d,_)},g)}function hr(h,g,_,k){var I=-1,D=wr,F=!0,P=h.length,V=[],Z=g.length;if(!P)return V;_&&(g=jt(g,Ce(_))),k?(D=mi,F=!1):g.length>=C&&(D=ir,F=!1,g=new Sn(g));t:for(;++I<P;){var tt=h[I],rt=_==null?tt:_(tt);if(tt=k||tt!==0?tt:0,F&&rt===rt){for(var ht=Z;ht--;)if(g[ht]===rt)continue t;V.push(tt)}else D(g,rt,k)||V.push(tt)}return V}var dn=Wo(We),yo=Wo(Ni,!0);function fc(h,g){var _=!0;return dn(h,function(k,I,D){return _=!!g(k,I,D),_}),_}function zr(h,g,_){for(var k=-1,I=h.length;++k<I;){var D=h[k],F=g(D);if(F!=null&&(P===d?F===F&&!Se(F):_(F,P)))var P=F,V=D}return V}function dc(h,g,_,k){var I=h.length;for(_=Et(_),_<0&&(_=-_>I?0:I+_),k=k===d||k>I?I:Et(k),k<0&&(k+=I),k=_>k?0:Bl(k);_<k;)h[_++]=g;return h}function _o(h,g){var _=[];return dn(h,function(k,I,D){g(k,I,D)&&_.push(k)}),_}function ie(h,g,_,k,I){var D=-1,F=h.length;for(_||(_=eh),I||(I=[]);++D<F;){var P=h[D];g>0&&_(P)?g>1?ie(P,g-1,_,k,I):cn(I,P):k||(I[I.length]=P)}return I}var Li=jo(),xo=jo(!0);function We(h,g){return h&&Li(h,g,te)}function Ni(h,g){return h&&xo(h,g,te)}function Ur(h,g){return un(g,function(_){return sn(h[_])})}function Tn(h,g){g=gn(g,h);for(var _=0,k=g.length;h!=null&&_<k;)h=h[qe(g[_++])];return _&&_==k?h:d}function wo(h,g,_){var k=g(h);return Ct(h)?k:cn(k,_(h))}function ce(h){return h==null?h===d?zn:nr:Cn&&Cn in zt(h)?Kc(h):ah(h)}function Ri(h,g){return h>g}function pc(h,g){return h!=null&&Ft.call(h,g)}function gc(h,g){return h!=null&&g in zt(h)}function mc(h,g,_){return h>=le(g,_)&&h<Qt(g,_)}function Mi(h,g,_){for(var k=_?mi:wr,I=h[0].length,D=h.length,F=D,P=Y(D),V=1/0,Z=[];F--;){var tt=h[F];F&&g&&(tt=jt(tt,Ce(g))),V=le(tt.length,V),P[F]=!_&&(g||I>=120&&tt.length>=120)?new Sn(F&&tt):d}tt=h[0];var rt=-1,ht=P[0];t:for(;++rt<I&&Z.length<V;){var gt=tt[rt],yt=g?g(gt):gt;if(gt=_||gt!==0?gt:0,!(ht?ir(ht,yt):k(Z,yt,_))){for(F=D;--F;){var St=P[F];if(!(St?ir(St,yt):k(h[F],yt,_)))continue t}ht&&ht.push(yt),Z.push(gt)}}return Z}function bc(h,g,_,k){return We(h,function(I,D,F){g(k,_(I),D,F)}),k}function fr(h,g,_){g=gn(g,h),h=ul(h,g);var k=h==null?h:h[qe(Fe(g))];return k==null?d:Ae(k,h,_)}function Ao(h){return Yt(h)&&ce(h)==ne}function vc(h){return Yt(h)&&ce(h)==S}function yc(h){return Yt(h)&&ce(h)==Pe}function dr(h,g,_,k,I){return h===g?!0:h==null||g==null||!Yt(h)&&!Yt(g)?h!==h&&g!==g:_c(h,g,_,k,dr,I)}function _c(h,g,_,k,I,D){var F=Ct(h),P=Ct(g),V=F?ue:ae(h),Z=P?ue:ae(g);V=V==ne?we:V,Z=Z==ne?we:Z;var tt=V==we,rt=Z==we,ht=V==Z;if(ht&&bn(h)){if(!bn(g))return!1;F=!0,tt=!1}if(ht&&!tt)return D||(D=new Ue),F||Zn(h)?nl(h,g,_,k,I,D):qc(h,g,V,_,k,I,D);if(!(_&ot)){var gt=tt&&Ft.call(h,"__wrapped__"),yt=rt&&Ft.call(g,"__wrapped__");if(gt||yt){var St=gt?h.value():h,_t=yt?g.value():g;return D||(D=new Ue),I(St,_t,_,k,D)}}return ht?(D||(D=new Ue),Yc(h,g,_,k,I,D)):!1}function xc(h){return Yt(h)&&ae(h)==se}function Di(h,g,_,k){var I=_.length,D=I,F=!k;if(h==null)return!D;for(h=zt(h);I--;){var P=_[I];if(F&&P[2]?P[1]!==h[P[0]]:!(P[0]in h))return!1}for(;++I<D;){P=_[I];var V=P[0],Z=h[V],tt=P[1];if(F&&P[2]){if(Z===d&&!(V in h))return!1}else{var rt=new Ue;if(k)var ht=k(Z,tt,V,h,g,rt);if(!(ht===d?dr(tt,Z,ot|lt,k,rt):ht))return!1}}return!0}function Co(h){if(!qt(h)||rh(h))return!1;var g=sn(h)?xu:ha;return g.test(On(h))}function wc(h){return Yt(h)&&ce(h)==ge}function Ac(h){return Yt(h)&&ae(h)==oe}function Cc(h){return Yt(h)&&ii(h.length)&&!!Vt[ce(h)]}function Eo(h){return typeof h=="function"?h:h==null?ye:typeof h=="object"?Ct(h)?To(h[0],h[1]):ko(h):ql(h)}function Bi(h){if(!mr(h))return ku(h);var g=[];for(var _ in zt(h))Ft.call(h,_)&&_!="constructor"&&g.push(_);return g}function Ec(h){if(!qt(h))return lh(h);var g=mr(h),_=[];for(var k in h)k=="constructor"&&(g||!Ft.call(h,k))||_.push(k);return _}function Fi(h,g){return h<g}function So(h,g){var _=-1,k=be(h)?Y(h.length):[];return dn(h,function(I,D,F){k[++_]=g(I,D,F)}),k}function ko(h){var g=Qi(h);return g.length==1&&g[0][2]?ll(g[0][0],g[0][1]):function(_){return _===h||Di(_,h,g)}}function To(h,g){return ts(h)&&ol(g)?ll(qe(h),g):function(_){var k=hs(_,h);return k===d&&k===g?fs(_,h):dr(g,k,ot|lt)}}function Vr(h,g,_,k,I){h!==g&&Li(g,function(D,F){if(I||(I=new Ue),qt(D))Sc(h,g,F,_,Vr,k,I);else{var P=k?k(ns(h,F),D,F+"",h,g,I):d;P===d&&(P=D),Ii(h,F,P)}},ve)}function Sc(h,g,_,k,I,D,F){var P=ns(h,_),V=ns(g,_),Z=F.get(V);if(Z){Ii(h,_,Z);return}var tt=D?D(P,V,_+"",h,g,F):d,rt=tt===d;if(rt){var ht=Ct(V),gt=!ht&&bn(V),yt=!ht&&!gt&&Zn(V);tt=V,ht||gt||yt?Ct(P)?tt=P:Kt(P)?tt=me(P):gt?(rt=!1,tt=zo(V,!0)):yt?(rt=!1,tt=Uo(V,!0)):tt=[]:vr(V)||Ln(V)?(tt=P,Ln(P)?tt=Fl(P):(!qt(P)||sn(P))&&(tt=sl(V))):rt=!1}rt&&(F.set(V,tt),I(tt,V,k,D,F),F.delete(V)),Ii(h,_,tt)}function Io(h,g){var _=h.length;if(_)return g+=g<0?_:0,rn(g,_)?h[g]:d}function Oo(h,g,_){g.length?g=jt(g,function(D){return Ct(D)?function(F){return Tn(F,D.length===1?D[0]:D)}:D}):g=[ye];var k=-1;g=jt(g,Ce(vt()));var I=So(h,function(D,F,P){var V=jt(g,function(Z){return Z(D)});return{criteria:V,index:++k,value:D}});return Za(I,function(D,F){return Pc(D,F,_)})}function kc(h,g){return Lo(h,g,function(_,k){return fs(h,k)})}function Lo(h,g,_){for(var k=-1,I=g.length,D={};++k<I;){var F=g[k],P=Tn(h,F);_(P,F)&&pr(D,gn(F,h),P)}return D}function Tc(h){return function(g){return Tn(g,h)}}function $i(h,g,_,k){var I=k?Qa:Vn,D=-1,F=g.length,P=h;for(h===g&&(g=me(g)),_&&(P=jt(h,Ce(_)));++D<F;)for(var V=0,Z=g[D],tt=_?_(Z):Z;(V=I(P,tt,V,k))>-1;)P!==h&&Nr.call(P,V,1),Nr.call(h,V,1);return h}function No(h,g){for(var _=h?g.length:0,k=_-1;_--;){var I=g[_];if(_==k||I!==D){var D=I;rn(I)?Nr.call(h,I,1):Vi(h,I)}}return h}function Pi(h,g){return h+Dr(ho()*(g-h+1))}function Ic(h,g,_,k){for(var I=-1,D=Qt(Mr((g-h)/(_||1)),0),F=Y(D);D--;)F[k?D:++I]=h,h+=_;return F}function zi(h,g){var _="";if(!h||g<1||g>Ie)return _;do g%2&&(_+=h),g=Dr(g/2),g&&(h+=h);while(g);return _}function kt(h,g){return rs(al(h,g,ye),h+"")}function Oc(h){return go(tr(h))}function Lc(h,g){var _=tr(h);return Qr(_,kn(g,0,_.length))}function pr(h,g,_,k){if(!qt(h))return h;g=gn(g,h);for(var I=-1,D=g.length,F=D-1,P=h;P!=null&&++I<D;){var V=qe(g[I]),Z=_;if(V==="__proto__"||V==="constructor"||V==="prototype")return h;if(I!=F){var tt=P[V];Z=k?k(tt,V,P):d,Z===d&&(Z=qt(tt)?tt:rn(g[I+1])?[]:{})}cr(P,V,Z),P=P[V]}return h}var Ro=Br?function(h,g){return Br.set(h,g),h}:ye,Nc=Rr?function(h,g){return Rr(h,"toString",{configurable:!0,enumerable:!1,value:ps(g),writable:!0})}:ye;function Rc(h){return Qr(tr(h))}function Be(h,g,_){var k=-1,I=h.length;g<0&&(g=-g>I?0:I+g),_=_>I?I:_,_<0&&(_+=I),I=g>_?0:_-g>>>0,g>>>=0;for(var D=Y(I);++k<I;)D[k]=h[k+g];return D}function Mc(h,g){var _;return dn(h,function(k,I,D){return _=g(k,I,D),!_}),!!_}function Hr(h,g,_){var k=0,I=h==null?k:h.length;if(typeof g=="number"&&g===g&&I<=pe){for(;k<I;){var D=k+I>>>1,F=h[D];F!==null&&!Se(F)&&(_?F<=g:F<g)?k=D+1:I=D}return I}return Ui(h,g,ye,_)}function Ui(h,g,_,k){var I=0,D=h==null?0:h.length;if(D===0)return 0;g=_(g);for(var F=g!==g,P=g===null,V=Se(g),Z=g===d;I<D;){var tt=Dr((I+D)/2),rt=_(h[tt]),ht=rt!==d,gt=rt===null,yt=rt===rt,St=Se(rt);if(F)var _t=k||yt;else Z?_t=yt&&(k||ht):P?_t=yt&&ht&&(k||!gt):V?_t=yt&&ht&&!gt&&(k||!St):gt||St?_t=!1:_t=k?rt<=g:rt<g;_t?I=tt+1:D=tt}return le(D,_n)}function Mo(h,g){for(var _=-1,k=h.length,I=0,D=[];++_<k;){var F=h[_],P=g?g(F):F;if(!_||!Ve(P,V)){var V=P;D[I++]=F===0?0:F}}return D}function Do(h){return typeof h=="number"?h:Se(h)?mt:+h}function Ee(h){if(typeof h=="string")return h;if(Ct(h))return jt(h,Ee)+"";if(Se(h))return fo?fo.call(h):"";var g=h+"";return g=="0"&&1/h==-Nt?"-0":g}function pn(h,g,_){var k=-1,I=wr,D=h.length,F=!0,P=[],V=P;if(_)F=!1,I=mi;else if(D>=C){var Z=g?null:Wc(h);if(Z)return Cr(Z);F=!1,I=ir,V=new Sn}else V=g?[]:P;t:for(;++k<D;){var tt=h[k],rt=g?g(tt):tt;if(tt=_||tt!==0?tt:0,F&&rt===rt){for(var ht=V.length;ht--;)if(V[ht]===rt)continue t;g&&V.push(rt),P.push(tt)}else I(V,rt,_)||(V!==P&&V.push(rt),P.push(tt))}return P}function Vi(h,g){return g=gn(g,h),h=ul(h,g),h==null||delete h[qe(Fe(g))]}function Bo(h,g,_,k){return pr(h,g,_(Tn(h,g)),k)}function Gr(h,g,_,k){for(var I=h.length,D=k?I:-1;(k?D--:++D<I)&&g(h[D],D,h););return _?Be(h,k?0:D,k?D+1:I):Be(h,k?D+1:0,k?I:D)}function Fo(h,g){var _=h;return _ instanceof Ot&&(_=_.value()),bi(g,function(k,I){return I.func.apply(I.thisArg,cn([k],I.args))},_)}function Hi(h,g,_){var k=h.length;if(k<2)return k?pn(h[0]):[];for(var I=-1,D=Y(k);++I<k;)for(var F=h[I],P=-1;++P<k;)P!=I&&(D[I]=hr(D[I]||F,h[P],g,_));return pn(ie(D,1),g,_)}function $o(h,g,_){for(var k=-1,I=h.length,D=g.length,F={};++k<I;){var P=k<D?g[k]:d;_(F,h[k],P)}return F}function Gi(h){return Kt(h)?h:[]}function Wi(h){return typeof h=="function"?h:ye}function gn(h,g){return Ct(h)?h:ts(h,g)?[h]:dl(Dt(h))}var Dc=kt;function mn(h,g,_){var k=h.length;return _=_===d?k:_,!g&&_>=k?h:Be(h,g,_)}var Po=wu||function(h){return re.clearTimeout(h)};function zo(h,g){if(g)return h.slice();var _=h.length,k=oo?oo(_):new h.constructor(_);return h.copy(k),k}function ji(h){var g=new h.constructor(h.byteLength);return new Or(g).set(new Or(h)),g}function Bc(h,g){var _=g?ji(h.buffer):h.buffer;return new h.constructor(_,h.byteOffset,h.byteLength)}function Fc(h){var g=new h.constructor(h.source,xs.exec(h));return g.lastIndex=h.lastIndex,g}function $c(h){return ur?zt(ur.call(h)):{}}function Uo(h,g){var _=g?ji(h.buffer):h.buffer;return new h.constructor(_,h.byteOffset,h.length)}function Vo(h,g){if(h!==g){var _=h!==d,k=h===null,I=h===h,D=Se(h),F=g!==d,P=g===null,V=g===g,Z=Se(g);if(!P&&!Z&&!D&&h>g||D&&F&&V&&!P&&!Z||k&&F&&V||!_&&V||!I)return 1;if(!k&&!D&&!Z&&h<g||Z&&_&&I&&!k&&!D||P&&_&&I||!F&&I||!V)return-1}return 0}function Pc(h,g,_){for(var k=-1,I=h.criteria,D=g.criteria,F=I.length,P=_.length;++k<F;){var V=Vo(I[k],D[k]);if(V){if(k>=P)return V;var Z=_[k];return V*(Z=="desc"?-1:1)}}return h.index-g.index}function Ho(h,g,_,k){for(var I=-1,D=h.length,F=_.length,P=-1,V=g.length,Z=Qt(D-F,0),tt=Y(V+Z),rt=!k;++P<V;)tt[P]=g[P];for(;++I<F;)(rt||I<D)&&(tt[_[I]]=h[I]);for(;Z--;)tt[P++]=h[I++];return tt}function Go(h,g,_,k){for(var I=-1,D=h.length,F=-1,P=_.length,V=-1,Z=g.length,tt=Qt(D-P,0),rt=Y(tt+Z),ht=!k;++I<tt;)rt[I]=h[I];for(var gt=I;++V<Z;)rt[gt+V]=g[V];for(;++F<P;)(ht||I<D)&&(rt[gt+_[F]]=h[I++]);return rt}function me(h,g){var _=-1,k=h.length;for(g||(g=Y(k));++_<k;)g[_]=h[_];return g}function je(h,g,_,k){var I=!_;_||(_={});for(var D=-1,F=g.length;++D<F;){var P=g[D],V=k?k(_[P],h[P],P,_,h):d;V===d&&(V=h[P]),I?tn(_,P,V):cr(_,P,V)}return _}function zc(h,g){return je(h,Zi(h),g)}function Uc(h,g){return je(h,rl(h),g)}function Wr(h,g){return function(_,k){var I=Ct(_)?ja:uc,D=g?g():{};return I(_,h,vt(k,2),D)}}function Jn(h){return kt(function(g,_){var k=-1,I=_.length,D=I>1?_[I-1]:d,F=I>2?_[2]:d;for(D=h.length>3&&typeof D=="function"?(I--,D):d,F&&he(_[0],_[1],F)&&(D=I<3?d:D,I=1),g=zt(g);++k<I;){var P=_[k];P&&h(g,P,k,D)}return g})}function Wo(h,g){return function(_,k){if(_==null)return _;if(!be(_))return h(_,k);for(var I=_.length,D=g?I:-1,F=zt(_);(g?D--:++D<I)&&k(F[D],D,F)!==!1;);return _}}function jo(h){return function(g,_,k){for(var I=-1,D=zt(g),F=k(g),P=F.length;P--;){var V=F[h?P:++I];if(_(D[V],V,D)===!1)break}return g}}function Vc(h,g,_){var k=g&bt,I=gr(h);function D(){var F=this&&this!==re&&this instanceof D?I:h;return F.apply(k?_:this,arguments)}return D}function qo(h){return function(g){g=Dt(g);var _=Hn(g)?ze(g):d,k=_?_[0]:g.charAt(0),I=_?mn(_,1).join(""):g.slice(1);return k[h]()+I}}function Xn(h){return function(g){return bi(Wl(Gl(g).replace(Na,"")),h,"")}}function gr(h){return function(){var g=arguments;switch(g.length){case 0:return new h;case 1:return new h(g[0]);case 2:return new h(g[0],g[1]);case 3:return new h(g[0],g[1],g[2]);case 4:return new h(g[0],g[1],g[2],g[3]);case 5:return new h(g[0],g[1],g[2],g[3],g[4]);case 6:return new h(g[0],g[1],g[2],g[3],g[4],g[5]);case 7:return new h(g[0],g[1],g[2],g[3],g[4],g[5],g[6])}var _=Kn(h.prototype),k=h.apply(_,g);return qt(k)?k:_}}function Hc(h,g,_){var k=gr(h);function I(){for(var D=arguments.length,F=Y(D),P=D,V=Qn(I);P--;)F[P]=arguments[P];var Z=D<3&&F[0]!==V&&F[D-1]!==V?[]:hn(F,V);if(D-=Z.length,D<_)return Qo(h,g,jr,I.placeholder,d,F,Z,d,d,_-D);var tt=this&&this!==re&&this instanceof I?k:h;return Ae(tt,this,F)}return I}function Yo(h){return function(g,_,k){var I=zt(g);if(!be(g)){var D=vt(_,3);g=te(g),_=function(P){return D(I[P],P,I)}}var F=h(g,_,k);return F>-1?I[D?g[F]:F]:d}}function Ko(h){return nn(function(g){var _=g.length,k=_,I=Me.prototype.thru;for(h&&g.reverse();k--;){var D=g[k];if(typeof D!="function")throw new Re(O);if(I&&!F&&Jr(D)=="wrapper")var F=new Me([],!0)}for(k=F?k:_;++k<_;){D=g[k];var P=Jr(D),V=P=="wrapper"?Xi(D):d;V&&es(V[0])&&V[1]==(Gt|Mt|Bt|Pt)&&!V[4].length&&V[9]==1?F=F[Jr(V[0])].apply(F,V[3]):F=D.length==1&&es(D)?F[P]():F.thru(D)}return function(){var Z=arguments,tt=Z[0];if(F&&Z.length==1&&Ct(tt))return F.plant(tt).value();for(var rt=0,ht=_?g[rt].apply(this,Z):tt;++rt<_;)ht=g[rt].call(this,ht);return ht}})}function jr(h,g,_,k,I,D,F,P,V,Z){var tt=g&Gt,rt=g&bt,ht=g&ft,gt=g&(Mt|Ht),yt=g&de,St=ht?d:gr(h);function _t(){for(var It=arguments.length,Lt=Y(It),ke=It;ke--;)Lt[ke]=arguments[ke];if(gt)var fe=Qn(_t),Te=eu(Lt,fe);if(k&&(Lt=Ho(Lt,k,I,gt)),D&&(Lt=Go(Lt,D,F,gt)),It-=Te,gt&&It<Z){var Jt=hn(Lt,fe);return Qo(h,g,jr,_t.placeholder,_,Lt,Jt,P,V,Z-It)}var He=rt?_:this,an=ht?He[h]:h;return It=Lt.length,P?Lt=uh(Lt,P):yt&&It>1&&Lt.reverse(),tt&&V<It&&(Lt.length=V),this&&this!==re&&this instanceof _t&&(an=St||gr(an)),an.apply(He,Lt)}return _t}function Jo(h,g){return function(_,k){return bc(_,h,g(k),{})}}function qr(h,g){return function(_,k){var I;if(_===d&&k===d)return g;if(_!==d&&(I=_),k!==d){if(I===d)return k;typeof _=="string"||typeof k=="string"?(_=Ee(_),k=Ee(k)):(_=Do(_),k=Do(k)),I=h(_,k)}return I}}function qi(h){return nn(function(g){return g=jt(g,Ce(vt())),kt(function(_){var k=this;return h(g,function(I){return Ae(I,k,_)})})})}function Yr(h,g){g=g===d?" ":Ee(g);var _=g.length;if(_<2)return _?zi(g,h):g;var k=zi(g,Mr(h/Gn(g)));return Hn(g)?mn(ze(k),0,h).join(""):k.slice(0,h)}function Gc(h,g,_,k){var I=g&bt,D=gr(h);function F(){for(var P=-1,V=arguments.length,Z=-1,tt=k.length,rt=Y(tt+V),ht=this&&this!==re&&this instanceof F?D:h;++Z<tt;)rt[Z]=k[Z];for(;V--;)rt[Z++]=arguments[++P];return Ae(ht,I?_:this,rt)}return F}function Xo(h){return function(g,_,k){return k&&typeof k!="number"&&he(g,_,k)&&(_=k=d),g=ln(g),_===d?(_=g,g=0):_=ln(_),k=k===d?g<_?1:-1:ln(k),Ic(g,_,k,h)}}function Kr(h){return function(g,_){return typeof g=="string"&&typeof _=="string"||(g=$e(g),_=$e(_)),h(g,_)}}function Qo(h,g,_,k,I,D,F,P,V,Z){var tt=g&Mt,rt=tt?F:d,ht=tt?d:F,gt=tt?D:d,yt=tt?d:D;g|=tt?Bt:$t,g&=~(tt?$t:Bt),g&Tt||(g&=~(bt|ft));var St=[h,g,I,gt,rt,yt,ht,P,V,Z],_t=_.apply(d,St);return es(h)&&cl(_t,St),_t.placeholder=k,hl(_t,h,g)}function Yi(h){var g=Xt[h];return function(_,k){if(_=$e(_),k=k==null?0:le(Et(k),292),k&&co(_)){var I=(Dt(_)+"e").split("e"),D=g(I[0]+"e"+(+I[1]+k));return I=(Dt(D)+"e").split("e"),+(I[0]+"e"+(+I[1]-k))}return g(_)}}var Wc=qn&&1/Cr(new qn([,-0]))[1]==Nt?function(h){return new qn(h)}:bs;function Zo(h){return function(g){var _=ae(g);return _==se?Ci(g):_==oe?au(g):tu(g,h(g))}}function en(h,g,_,k,I,D,F,P){var V=g&ft;if(!V&&typeof h!="function")throw new Re(O);var Z=k?k.length:0;if(Z||(g&=~(Bt|$t),k=I=d),F=F===d?F:Qt(Et(F),0),P=P===d?P:Et(P),Z-=I?I.length:0,g&$t){var tt=k,rt=I;k=I=d}var ht=V?d:Xi(h),gt=[h,g,_,k,I,tt,rt,D,F,P];if(ht&&oh(gt,ht),h=gt[0],g=gt[1],_=gt[2],k=gt[3],I=gt[4],P=gt[9]=gt[9]===d?V?0:h.length:Qt(gt[9]-Z,0),!P&&g&(Mt|Ht)&&(g&=~(Mt|Ht)),!g||g==bt)var yt=Vc(h,g,_);else g==Mt||g==Ht?yt=Hc(h,g,P):(g==Bt||g==(bt|Bt))&&!I.length?yt=Gc(h,g,_,k):yt=jr.apply(d,gt);var St=ht?Ro:cl;return hl(St(yt,gt),h,g)}function tl(h,g,_,k){return h===d||Ve(h,jn[_])&&!Ft.call(k,_)?g:h}function el(h,g,_,k,I,D){return qt(h)&&qt(g)&&(D.set(g,h),Vr(h,g,d,el,D),D.delete(g)),h}function jc(h){return vr(h)?d:h}function nl(h,g,_,k,I,D){var F=_&ot,P=h.length,V=g.length;if(P!=V&&!(F&&V>P))return!1;var Z=D.get(h),tt=D.get(g);if(Z&&tt)return Z==g&&tt==h;var rt=-1,ht=!0,gt=_&lt?new Sn:d;for(D.set(h,g),D.set(g,h);++rt<P;){var yt=h[rt],St=g[rt];if(k)var _t=F?k(St,yt,rt,g,h,D):k(yt,St,rt,h,g,D);if(_t!==d){if(_t)continue;ht=!1;break}if(gt){if(!vi(g,function(It,Lt){if(!ir(gt,Lt)&&(yt===It||I(yt,It,_,k,D)))return gt.push(Lt)})){ht=!1;break}}else if(!(yt===St||I(yt,St,_,k,D))){ht=!1;break}}return D.delete(h),D.delete(g),ht}function qc(h,g,_,k,I,D,F){switch(_){case W:if(h.byteLength!=g.byteLength||h.byteOffset!=g.byteOffset)return!1;h=h.buffer,g=g.buffer;case S:return!(h.byteLength!=g.byteLength||!D(new Or(h),new Or(g)));case _e:case Pe:case xe:return Ve(+h,+g);case Ye:return h.name==g.name&&h.message==g.message;case ge:case Ge:return h==g+"";case se:var P=Ci;case oe:var V=k&ot;if(P||(P=Cr),h.size!=g.size&&!V)return!1;var Z=F.get(h);if(Z)return Z==g;k|=lt,F.set(h,g);var tt=nl(P(h),P(g),k,I,D,F);return F.delete(h),tt;case Je:if(ur)return ur.call(h)==ur.call(g)}return!1}function Yc(h,g,_,k,I,D){var F=_&ot,P=Ki(h),V=P.length,Z=Ki(g),tt=Z.length;if(V!=tt&&!F)return!1;for(var rt=V;rt--;){var ht=P[rt];if(!(F?ht in g:Ft.call(g,ht)))return!1}var gt=D.get(h),yt=D.get(g);if(gt&&yt)return gt==g&&yt==h;var St=!0;D.set(h,g),D.set(g,h);for(var _t=F;++rt<V;){ht=P[rt];var It=h[ht],Lt=g[ht];if(k)var ke=F?k(Lt,It,ht,g,h,D):k(It,Lt,ht,h,g,D);if(!(ke===d?It===Lt||I(It,Lt,_,k,D):ke)){St=!1;break}_t||(_t=ht=="constructor")}if(St&&!_t){var fe=h.constructor,Te=g.constructor;fe!=Te&&"constructor"in h&&"constructor"in g&&!(typeof fe=="function"&&fe instanceof fe&&typeof Te=="function"&&Te instanceof Te)&&(St=!1)}return D.delete(h),D.delete(g),St}function nn(h){return rs(al(h,d,bl),h+"")}function Ki(h){return wo(h,te,Zi)}function Ji(h){return wo(h,ve,rl)}var Xi=Br?function(h){return Br.get(h)}:bs;function Jr(h){for(var g=h.name+"",_=Yn[g],k=Ft.call(Yn,g)?_.length:0;k--;){var I=_[k],D=I.func;if(D==null||D==h)return I.name}return g}function Qn(h){var g=Ft.call(R,"placeholder")?R:h;return g.placeholder}function vt(){var h=R.iteratee||gs;return h=h===gs?Eo:h,arguments.length?h(arguments[0],arguments[1]):h}function Xr(h,g){var _=h.__data__;return nh(g)?_[typeof g=="string"?"string":"hash"]:_.map}function Qi(h){for(var g=te(h),_=g.length;_--;){var k=g[_],I=h[k];g[_]=[k,I,ol(I)]}return g}function In(h,g){var _=su(h,g);return Co(_)?_:d}function Kc(h){var g=Ft.call(h,Cn),_=h[Cn];try{h[Cn]=d;var k=!0}catch{}var I=Tr.call(h);return k&&(g?h[Cn]=_:delete h[Cn]),I}var Zi=Si?function(h){return h==null?[]:(h=zt(h),un(Si(h),function(g){return ao.call(h,g)}))}:vs,rl=Si?function(h){for(var g=[];h;)cn(g,Zi(h)),h=Lr(h);return g}:vs,ae=ce;(ki&&ae(new ki(new ArrayBuffer(1)))!=W||or&&ae(new or)!=se||Ti&&ae(Ti.resolve())!=wn||qn&&ae(new qn)!=oe||lr&&ae(new lr)!=Xe)&&(ae=function(h){var g=ce(h),_=g==we?h.constructor:d,k=_?On(_):"";if(k)switch(k){case Lu:return W;case Nu:return se;case Ru:return wn;case Mu:return oe;case Du:return Xe}return g});function Jc(h,g,_){for(var k=-1,I=_.length;++k<I;){var D=_[k],F=D.size;switch(D.type){case"drop":h+=F;break;case"dropRight":g-=F;break;case"take":g=le(g,h+F);break;case"takeRight":h=Qt(h,g-F);break}}return{start:h,end:g}}function Xc(h){var g=h.match(ra);return g?g[1].split(ia):[]}function il(h,g,_){g=gn(g,h);for(var k=-1,I=g.length,D=!1;++k<I;){var F=qe(g[k]);if(!(D=h!=null&&_(h,F)))break;h=h[F]}return D||++k!=I?D:(I=h==null?0:h.length,!!I&&ii(I)&&rn(F,I)&&(Ct(h)||Ln(h)))}function Qc(h){var g=h.length,_=new h.constructor(g);return g&&typeof h[0]=="string"&&Ft.call(h,"index")&&(_.index=h.index,_.input=h.input),_}function sl(h){return typeof h.constructor=="function"&&!mr(h)?Kn(Lr(h)):{}}function Zc(h,g,_){var k=h.constructor;switch(g){case S:return ji(h);case _e:case Pe:return new k(+h);case W:return Bc(h,_);case Q:case ut:case et:case ct:case L:case q:case K:case st:case it:return Uo(h,_);case se:return new k;case xe:case Ge:return new k(h);case ge:return Fc(h);case oe:return new k;case Je:return $c(h)}}function th(h,g){var _=g.length;if(!_)return h;var k=_-1;return g[k]=(_>1?"& ":"")+g[k],g=g.join(_>2?", ":" "),h.replace(na,`{
/* [wrapped with `+g+`] */
`)}function eh(h){return Ct(h)||Ln(h)||!!(uo&&h&&h[uo])}function rn(h,g){var _=typeof h;return g=g??Ie,!!g&&(_=="number"||_!="symbol"&&da.test(h))&&h>-1&&h%1==0&&h<g}function he(h,g,_){if(!qt(_))return!1;var k=typeof g;return(k=="number"?be(_)&&rn(g,_.length):k=="string"&&g in _)?Ve(_[g],h):!1}function ts(h,g){if(Ct(h))return!1;var _=typeof h;return _=="number"||_=="symbol"||_=="boolean"||h==null||Se(h)?!0:Ql.test(h)||!Xl.test(h)||g!=null&&h in zt(g)}function nh(h){var g=typeof h;return g=="string"||g=="number"||g=="symbol"||g=="boolean"?h!=="__proto__":h===null}function es(h){var g=Jr(h),_=R[g];if(typeof _!="function"||!(g in Ot.prototype))return!1;if(h===_)return!0;var k=Xi(_);return!!k&&h===k[0]}function rh(h){return!!so&&so in h}var ih=Sr?sn:ys;function mr(h){var g=h&&h.constructor,_=typeof g=="function"&&g.prototype||jn;return h===_}function ol(h){return h===h&&!qt(h)}function ll(h,g){return function(_){return _==null?!1:_[h]===g&&(g!==d||h in zt(_))}}function sh(h){var g=ni(h,function(k){return _.size===B&&_.clear(),k}),_=g.cache;return g}function oh(h,g){var _=h[1],k=g[1],I=_|k,D=I<(bt|ft|Gt),F=k==Gt&&_==Mt||k==Gt&&_==Pt&&h[7].length<=g[8]||k==(Gt|Pt)&&g[7].length<=g[8]&&_==Mt;if(!(D||F))return h;k&bt&&(h[2]=g[2],I|=_&bt?0:Tt);var P=g[3];if(P){var V=h[3];h[3]=V?Ho(V,P,g[4]):P,h[4]=V?hn(h[3],z):g[4]}return P=g[5],P&&(V=h[5],h[5]=V?Go(V,P,g[6]):P,h[6]=V?hn(h[5],z):g[6]),P=g[7],P&&(h[7]=P),k&Gt&&(h[8]=h[8]==null?g[8]:le(h[8],g[8])),h[9]==null&&(h[9]=g[9]),h[0]=g[0],h[1]=I,h}function lh(h){var g=[];if(h!=null)for(var _ in zt(h))g.push(_);return g}function ah(h){return Tr.call(h)}function al(h,g,_){return g=Qt(g===d?h.length-1:g,0),function(){for(var k=arguments,I=-1,D=Qt(k.length-g,0),F=Y(D);++I<D;)F[I]=k[g+I];I=-1;for(var P=Y(g+1);++I<g;)P[I]=k[I];return P[g]=_(F),Ae(h,this,P)}}function ul(h,g){return g.length<2?h:Tn(h,Be(g,0,-1))}function uh(h,g){for(var _=h.length,k=le(g.length,_),I=me(h);k--;){var D=g[k];h[k]=rn(D,_)?I[D]:d}return h}function ns(h,g){if(!(g==="constructor"&&typeof h[g]=="function")&&g!="__proto__")return h[g]}var cl=fl(Ro),br=Cu||function(h,g){return re.setTimeout(h,g)},rs=fl(Nc);function hl(h,g,_){var k=g+"";return rs(h,th(k,ch(Xc(k),_)))}function fl(h){var g=0,_=0;return function(){var k=Tu(),I=Mn-(k-_);if(_=k,I>0){if(++g>=Rn)return arguments[0]}else g=0;return h.apply(d,arguments)}}function Qr(h,g){var _=-1,k=h.length,I=k-1;for(g=g===d?k:g;++_<g;){var D=Pi(_,I),F=h[D];h[D]=h[_],h[_]=F}return h.length=g,h}var dl=sh(function(h){var g=[];return h.charCodeAt(0)===46&&g.push(""),h.replace(Zl,function(_,k,I,D){g.push(I?D.replace(la,"$1"):k||_)}),g});function qe(h){if(typeof h=="string"||Se(h))return h;var g=h+"";return g=="0"&&1/h==-Nt?"-0":g}function On(h){if(h!=null){try{return kr.call(h)}catch{}try{return h+""}catch{}}return""}function ch(h,g){return Ne(Fn,function(_){var k="_."+_[0];g&_[1]&&!wr(h,k)&&h.push(k)}),h.sort()}function pl(h){if(h instanceof Ot)return h.clone();var g=new Me(h.__wrapped__,h.__chain__);return g.__actions__=me(h.__actions__),g.__index__=h.__index__,g.__values__=h.__values__,g}function hh(h,g,_){(_?he(h,g,_):g===d)?g=1:g=Qt(Et(g),0);var k=h==null?0:h.length;if(!k||g<1)return[];for(var I=0,D=0,F=Y(Mr(k/g));I<k;)F[D++]=Be(h,I,I+=g);return F}function fh(h){for(var g=-1,_=h==null?0:h.length,k=0,I=[];++g<_;){var D=h[g];D&&(I[k++]=D)}return I}function dh(){var h=arguments.length;if(!h)return[];for(var g=Y(h-1),_=arguments[0],k=h;k--;)g[k-1]=arguments[k];return cn(Ct(_)?me(_):[_],ie(g,1))}var ph=kt(function(h,g){return Kt(h)?hr(h,ie(g,1,Kt,!0)):[]}),gh=kt(function(h,g){var _=Fe(g);return Kt(_)&&(_=d),Kt(h)?hr(h,ie(g,1,Kt,!0),vt(_,2)):[]}),mh=kt(function(h,g){var _=Fe(g);return Kt(_)&&(_=d),Kt(h)?hr(h,ie(g,1,Kt,!0),d,_):[]});function bh(h,g,_){var k=h==null?0:h.length;return k?(g=_||g===d?1:Et(g),Be(h,g<0?0:g,k)):[]}function vh(h,g,_){var k=h==null?0:h.length;return k?(g=_||g===d?1:Et(g),g=k-g,Be(h,0,g<0?0:g)):[]}function yh(h,g){return h&&h.length?Gr(h,vt(g,3),!0,!0):[]}function _h(h,g){return h&&h.length?Gr(h,vt(g,3),!0):[]}function xh(h,g,_,k){var I=h==null?0:h.length;return I?(_&&typeof _!="number"&&he(h,g,_)&&(_=0,k=I),dc(h,g,_,k)):[]}function gl(h,g,_){var k=h==null?0:h.length;if(!k)return-1;var I=_==null?0:Et(_);return I<0&&(I=Qt(k+I,0)),Ar(h,vt(g,3),I)}function ml(h,g,_){var k=h==null?0:h.length;if(!k)return-1;var I=k-1;return _!==d&&(I=Et(_),I=_<0?Qt(k+I,0):le(I,k-1)),Ar(h,vt(g,3),I,!0)}function bl(h){var g=h==null?0:h.length;return g?ie(h,1):[]}function wh(h){var g=h==null?0:h.length;return g?ie(h,Nt):[]}function Ah(h,g){var _=h==null?0:h.length;return _?(g=g===d?1:Et(g),ie(h,g)):[]}function Ch(h){for(var g=-1,_=h==null?0:h.length,k={};++g<_;){var I=h[g];k[I[0]]=I[1]}return k}function vl(h){return h&&h.length?h[0]:d}function Eh(h,g,_){var k=h==null?0:h.length;if(!k)return-1;var I=_==null?0:Et(_);return I<0&&(I=Qt(k+I,0)),Vn(h,g,I)}function Sh(h){var g=h==null?0:h.length;return g?Be(h,0,-1):[]}var kh=kt(function(h){var g=jt(h,Gi);return g.length&&g[0]===h[0]?Mi(g):[]}),Th=kt(function(h){var g=Fe(h),_=jt(h,Gi);return g===Fe(_)?g=d:_.pop(),_.length&&_[0]===h[0]?Mi(_,vt(g,2)):[]}),Ih=kt(function(h){var g=Fe(h),_=jt(h,Gi);return g=typeof g=="function"?g:d,g&&_.pop(),_.length&&_[0]===h[0]?Mi(_,d,g):[]});function Oh(h,g){return h==null?"":Su.call(h,g)}function Fe(h){var g=h==null?0:h.length;return g?h[g-1]:d}function Lh(h,g,_){var k=h==null?0:h.length;if(!k)return-1;var I=k;return _!==d&&(I=Et(_),I=I<0?Qt(k+I,0):le(I,k-1)),g===g?cu(h,g,I):Ar(h,Js,I,!0)}function Nh(h,g){return h&&h.length?Io(h,Et(g)):d}var Rh=kt(yl);function yl(h,g){return h&&h.length&&g&&g.length?$i(h,g):h}function Mh(h,g,_){return h&&h.length&&g&&g.length?$i(h,g,vt(_,2)):h}function Dh(h,g,_){return h&&h.length&&g&&g.length?$i(h,g,d,_):h}var Bh=nn(function(h,g){var _=h==null?0:h.length,k=Oi(h,g);return No(h,jt(g,function(I){return rn(I,_)?+I:I}).sort(Vo)),k});function Fh(h,g){var _=[];if(!(h&&h.length))return _;var k=-1,I=[],D=h.length;for(g=vt(g,3);++k<D;){var F=h[k];g(F,k,h)&&(_.push(F),I.push(k))}return No(h,I),_}function ss(h){return h==null?h:Ou.call(h)}function $h(h,g,_){var k=h==null?0:h.length;return k?(_&&typeof _!="number"&&he(h,g,_)?(g=0,_=k):(g=g==null?0:Et(g),_=_===d?k:Et(_)),Be(h,g,_)):[]}function Ph(h,g){return Hr(h,g)}function zh(h,g,_){return Ui(h,g,vt(_,2))}function Uh(h,g){var _=h==null?0:h.length;if(_){var k=Hr(h,g);if(k<_&&Ve(h[k],g))return k}return-1}function Vh(h,g){return Hr(h,g,!0)}function Hh(h,g,_){return Ui(h,g,vt(_,2),!0)}function Gh(h,g){var _=h==null?0:h.length;if(_){var k=Hr(h,g,!0)-1;if(Ve(h[k],g))return k}return-1}function Wh(h){return h&&h.length?Mo(h):[]}function jh(h,g){return h&&h.length?Mo(h,vt(g,2)):[]}function qh(h){var g=h==null?0:h.length;return g?Be(h,1,g):[]}function Yh(h,g,_){return h&&h.length?(g=_||g===d?1:Et(g),Be(h,0,g<0?0:g)):[]}function Kh(h,g,_){var k=h==null?0:h.length;return k?(g=_||g===d?1:Et(g),g=k-g,Be(h,g<0?0:g,k)):[]}function Jh(h,g){return h&&h.length?Gr(h,vt(g,3),!1,!0):[]}function Xh(h,g){return h&&h.length?Gr(h,vt(g,3)):[]}var Qh=kt(function(h){return pn(ie(h,1,Kt,!0))}),Zh=kt(function(h){var g=Fe(h);return Kt(g)&&(g=d),pn(ie(h,1,Kt,!0),vt(g,2))}),tf=kt(function(h){var g=Fe(h);return g=typeof g=="function"?g:d,pn(ie(h,1,Kt,!0),d,g)});function ef(h){return h&&h.length?pn(h):[]}function nf(h,g){return h&&h.length?pn(h,vt(g,2)):[]}function rf(h,g){return g=typeof g=="function"?g:d,h&&h.length?pn(h,d,g):[]}function os(h){if(!(h&&h.length))return[];var g=0;return h=un(h,function(_){if(Kt(_))return g=Qt(_.length,g),!0}),wi(g,function(_){return jt(h,yi(_))})}function _l(h,g){if(!(h&&h.length))return[];var _=os(h);return g==null?_:jt(_,function(k){return Ae(g,d,k)})}var sf=kt(function(h,g){return Kt(h)?hr(h,g):[]}),of=kt(function(h){return Hi(un(h,Kt))}),lf=kt(function(h){var g=Fe(h);return Kt(g)&&(g=d),Hi(un(h,Kt),vt(g,2))}),af=kt(function(h){var g=Fe(h);return g=typeof g=="function"?g:d,Hi(un(h,Kt),d,g)}),uf=kt(os);function cf(h,g){return $o(h||[],g||[],cr)}function hf(h,g){return $o(h||[],g||[],pr)}var ff=kt(function(h){var g=h.length,_=g>1?h[g-1]:d;return _=typeof _=="function"?(h.pop(),_):d,_l(h,_)});function xl(h){var g=R(h);return g.__chain__=!0,g}function df(h,g){return g(h),h}function Zr(h,g){return g(h)}var pf=nn(function(h){var g=h.length,_=g?h[0]:0,k=this.__wrapped__,I=function(D){return Oi(D,h)};return g>1||this.__actions__.length||!(k instanceof Ot)||!rn(_)?this.thru(I):(k=k.slice(_,+_+(g?1:0)),k.__actions__.push({func:Zr,args:[I],thisArg:d}),new Me(k,this.__chain__).thru(function(D){return g&&!D.length&&D.push(d),D}))});function gf(){return xl(this)}function mf(){return new Me(this.value(),this.__chain__)}function bf(){this.__values__===d&&(this.__values__=Dl(this.value()));var h=this.__index__>=this.__values__.length,g=h?d:this.__values__[this.__index__++];return{done:h,value:g}}function vf(){return this}function yf(h){for(var g,_=this;_ instanceof $r;){var k=pl(_);k.__index__=0,k.__values__=d,g?I.__wrapped__=k:g=k;var I=k;_=_.__wrapped__}return I.__wrapped__=h,g}function _f(){var h=this.__wrapped__;if(h instanceof Ot){var g=h;return this.__actions__.length&&(g=new Ot(this)),g=g.reverse(),g.__actions__.push({func:Zr,args:[ss],thisArg:d}),new Me(g,this.__chain__)}return this.thru(ss)}function xf(){return Fo(this.__wrapped__,this.__actions__)}var wf=Wr(function(h,g,_){Ft.call(h,_)?++h[_]:tn(h,_,1)});function Af(h,g,_){var k=Ct(h)?Ys:fc;return _&&he(h,g,_)&&(g=d),k(h,vt(g,3))}function Cf(h,g){var _=Ct(h)?un:_o;return _(h,vt(g,3))}var Ef=Yo(gl),Sf=Yo(ml);function kf(h,g){return ie(ti(h,g),1)}function Tf(h,g){return ie(ti(h,g),Nt)}function If(h,g,_){return _=_===d?1:Et(_),ie(ti(h,g),_)}function wl(h,g){var _=Ct(h)?Ne:dn;return _(h,vt(g,3))}function Al(h,g){var _=Ct(h)?qa:yo;return _(h,vt(g,3))}var Of=Wr(function(h,g,_){Ft.call(h,_)?h[_].push(g):tn(h,_,[g])});function Lf(h,g,_,k){h=be(h)?h:tr(h),_=_&&!k?Et(_):0;var I=h.length;return _<0&&(_=Qt(I+_,0)),si(h)?_<=I&&h.indexOf(g,_)>-1:!!I&&Vn(h,g,_)>-1}var Nf=kt(function(h,g,_){var k=-1,I=typeof g=="function",D=be(h)?Y(h.length):[];return dn(h,function(F){D[++k]=I?Ae(g,F,_):fr(F,g,_)}),D}),Rf=Wr(function(h,g,_){tn(h,_,g)});function ti(h,g){var _=Ct(h)?jt:So;return _(h,vt(g,3))}function Mf(h,g,_,k){return h==null?[]:(Ct(g)||(g=g==null?[]:[g]),_=k?d:_,Ct(_)||(_=_==null?[]:[_]),Oo(h,g,_))}var Df=Wr(function(h,g,_){h[_?0:1].push(g)},function(){return[[],[]]});function Bf(h,g,_){var k=Ct(h)?bi:Qs,I=arguments.length<3;return k(h,vt(g,4),_,I,dn)}function Ff(h,g,_){var k=Ct(h)?Ya:Qs,I=arguments.length<3;return k(h,vt(g,4),_,I,yo)}function $f(h,g){var _=Ct(h)?un:_o;return _(h,ri(vt(g,3)))}function Pf(h){var g=Ct(h)?go:Oc;return g(h)}function zf(h,g,_){(_?he(h,g,_):g===d)?g=1:g=Et(g);var k=Ct(h)?lc:Lc;return k(h,g)}function Uf(h){var g=Ct(h)?ac:Rc;return g(h)}function Vf(h){if(h==null)return 0;if(be(h))return si(h)?Gn(h):h.length;var g=ae(h);return g==se||g==oe?h.size:Bi(h).length}function Hf(h,g,_){var k=Ct(h)?vi:Mc;return _&&he(h,g,_)&&(g=d),k(h,vt(g,3))}var Gf=kt(function(h,g){if(h==null)return[];var _=g.length;return _>1&&he(h,g[0],g[1])?g=[]:_>2&&he(g[0],g[1],g[2])&&(g=[g[0]]),Oo(h,ie(g,1),[])}),ei=Au||function(){return re.Date.now()};function Wf(h,g){if(typeof g!="function")throw new Re(O);return h=Et(h),function(){if(--h<1)return g.apply(this,arguments)}}function Cl(h,g,_){return g=_?d:g,g=h&&g==null?h.length:g,en(h,Gt,d,d,d,d,g)}function El(h,g){var _;if(typeof g!="function")throw new Re(O);return h=Et(h),function(){return--h>0&&(_=g.apply(this,arguments)),h<=1&&(g=d),_}}var ls=kt(function(h,g,_){var k=bt;if(_.length){var I=hn(_,Qn(ls));k|=Bt}return en(h,k,g,_,I)}),Sl=kt(function(h,g,_){var k=bt|ft;if(_.length){var I=hn(_,Qn(Sl));k|=Bt}return en(g,k,h,_,I)});function kl(h,g,_){g=_?d:g;var k=en(h,Mt,d,d,d,d,d,g);return k.placeholder=kl.placeholder,k}function Tl(h,g,_){g=_?d:g;var k=en(h,Ht,d,d,d,d,d,g);return k.placeholder=Tl.placeholder,k}function Il(h,g,_){var k,I,D,F,P,V,Z=0,tt=!1,rt=!1,ht=!0;if(typeof h!="function")throw new Re(O);g=$e(g)||0,qt(_)&&(tt=!!_.leading,rt="maxWait"in _,D=rt?Qt($e(_.maxWait)||0,g):D,ht="trailing"in _?!!_.trailing:ht);function gt(Jt){var He=k,an=I;return k=I=d,Z=Jt,F=h.apply(an,He),F}function yt(Jt){return Z=Jt,P=br(It,g),tt?gt(Jt):F}function St(Jt){var He=Jt-V,an=Jt-Z,Yl=g-He;return rt?le(Yl,D-an):Yl}function _t(Jt){var He=Jt-V,an=Jt-Z;return V===d||He>=g||He<0||rt&&an>=D}function It(){var Jt=ei();if(_t(Jt))return Lt(Jt);P=br(It,St(Jt))}function Lt(Jt){return P=d,ht&&k?gt(Jt):(k=I=d,F)}function ke(){P!==d&&Po(P),Z=0,k=V=I=P=d}function fe(){return P===d?F:Lt(ei())}function Te(){var Jt=ei(),He=_t(Jt);if(k=arguments,I=this,V=Jt,He){if(P===d)return yt(V);if(rt)return Po(P),P=br(It,g),gt(V)}return P===d&&(P=br(It,g)),F}return Te.cancel=ke,Te.flush=fe,Te}var jf=kt(function(h,g){return vo(h,1,g)}),qf=kt(function(h,g,_){return vo(h,$e(g)||0,_)});function Yf(h){return en(h,de)}function ni(h,g){if(typeof h!="function"||g!=null&&typeof g!="function")throw new Re(O);var _=function(){var k=arguments,I=g?g.apply(this,k):k[0],D=_.cache;if(D.has(I))return D.get(I);var F=h.apply(this,k);return _.cache=D.set(I,F)||D,F};return _.cache=new(ni.Cache||Ze),_}ni.Cache=Ze;function ri(h){if(typeof h!="function")throw new Re(O);return function(){var g=arguments;switch(g.length){case 0:return!h.call(this);case 1:return!h.call(this,g[0]);case 2:return!h.call(this,g[0],g[1]);case 3:return!h.call(this,g[0],g[1],g[2])}return!h.apply(this,g)}}function Kf(h){return El(2,h)}var Jf=Dc(function(h,g){g=g.length==1&&Ct(g[0])?jt(g[0],Ce(vt())):jt(ie(g,1),Ce(vt()));var _=g.length;return kt(function(k){for(var I=-1,D=le(k.length,_);++I<D;)k[I]=g[I].call(this,k[I]);return Ae(h,this,k)})}),as=kt(function(h,g){var _=hn(g,Qn(as));return en(h,Bt,d,g,_)}),Ol=kt(function(h,g){var _=hn(g,Qn(Ol));return en(h,$t,d,g,_)}),Xf=nn(function(h,g){return en(h,Pt,d,d,d,g)});function Qf(h,g){if(typeof h!="function")throw new Re(O);return g=g===d?g:Et(g),kt(h,g)}function Zf(h,g){if(typeof h!="function")throw new Re(O);return g=g==null?0:Qt(Et(g),0),kt(function(_){var k=_[g],I=mn(_,0,g);return k&&cn(I,k),Ae(h,this,I)})}function td(h,g,_){var k=!0,I=!0;if(typeof h!="function")throw new Re(O);return qt(_)&&(k="leading"in _?!!_.leading:k,I="trailing"in _?!!_.trailing:I),Il(h,g,{leading:k,maxWait:g,trailing:I})}function ed(h){return Cl(h,1)}function nd(h,g){return as(Wi(g),h)}function rd(){if(!arguments.length)return[];var h=arguments[0];return Ct(h)?h:[h]}function id(h){return De(h,j)}function sd(h,g){return g=typeof g=="function"?g:d,De(h,j,g)}function od(h){return De(h,$|j)}function ld(h,g){return g=typeof g=="function"?g:d,De(h,$|j,g)}function ad(h,g){return g==null||bo(h,g,te(g))}function Ve(h,g){return h===g||h!==h&&g!==g}var ud=Kr(Ri),cd=Kr(function(h,g){return h>=g}),Ln=Ao(function(){return arguments}())?Ao:function(h){return Yt(h)&&Ft.call(h,"callee")&&!ao.call(h,"callee")},Ct=Y.isArray,hd=Vs?Ce(Vs):vc;function be(h){return h!=null&&ii(h.length)&&!sn(h)}function Kt(h){return Yt(h)&&be(h)}function fd(h){return h===!0||h===!1||Yt(h)&&ce(h)==_e}var bn=Eu||ys,dd=Hs?Ce(Hs):yc;function pd(h){return Yt(h)&&h.nodeType===1&&!vr(h)}function gd(h){if(h==null)return!0;if(be(h)&&(Ct(h)||typeof h=="string"||typeof h.splice=="function"||bn(h)||Zn(h)||Ln(h)))return!h.length;var g=ae(h);if(g==se||g==oe)return!h.size;if(mr(h))return!Bi(h).length;for(var _ in h)if(Ft.call(h,_))return!1;return!0}function md(h,g){return dr(h,g)}function bd(h,g,_){_=typeof _=="function"?_:d;var k=_?_(h,g):d;return k===d?dr(h,g,d,_):!!k}function us(h){if(!Yt(h))return!1;var g=ce(h);return g==Ye||g==$n||typeof h.message=="string"&&typeof h.name=="string"&&!vr(h)}function vd(h){return typeof h=="number"&&co(h)}function sn(h){if(!qt(h))return!1;var g=ce(h);return g==Ke||g==xn||g==Wt||g==Pn}function Ll(h){return typeof h=="number"&&h==Et(h)}function ii(h){return typeof h=="number"&&h>-1&&h%1==0&&h<=Ie}function qt(h){var g=typeof h;return h!=null&&(g=="object"||g=="function")}function Yt(h){return h!=null&&typeof h=="object"}var Nl=Gs?Ce(Gs):xc;function yd(h,g){return h===g||Di(h,g,Qi(g))}function _d(h,g,_){return _=typeof _=="function"?_:d,Di(h,g,Qi(g),_)}function xd(h){return Rl(h)&&h!=+h}function wd(h){if(ih(h))throw new At(T);return Co(h)}function Ad(h){return h===null}function Cd(h){return h==null}function Rl(h){return typeof h=="number"||Yt(h)&&ce(h)==xe}function vr(h){if(!Yt(h)||ce(h)!=we)return!1;var g=Lr(h);if(g===null)return!0;var _=Ft.call(g,"constructor")&&g.constructor;return typeof _=="function"&&_ instanceof _&&kr.call(_)==yu}var cs=Ws?Ce(Ws):wc;function Ed(h){return Ll(h)&&h>=-Ie&&h<=Ie}var Ml=js?Ce(js):Ac;function si(h){return typeof h=="string"||!Ct(h)&&Yt(h)&&ce(h)==Ge}function Se(h){return typeof h=="symbol"||Yt(h)&&ce(h)==Je}var Zn=qs?Ce(qs):Cc;function Sd(h){return h===d}function kd(h){return Yt(h)&&ae(h)==Xe}function Td(h){return Yt(h)&&ce(h)==rr}var Id=Kr(Fi),Od=Kr(function(h,g){return h<=g});function Dl(h){if(!h)return[];if(be(h))return si(h)?ze(h):me(h);if(sr&&h[sr])return lu(h[sr]());var g=ae(h),_=g==se?Ci:g==oe?Cr:tr;return _(h)}function ln(h){if(!h)return h===0?h:0;if(h=$e(h),h===Nt||h===-Nt){var g=h<0?-1:1;return g*Bn}return h===h?h:0}function Et(h){var g=ln(h),_=g%1;return g===g?_?g-_:g:0}function Bl(h){return h?kn(Et(h),0,ee):0}function $e(h){if(typeof h=="number")return h;if(Se(h))return mt;if(qt(h)){var g=typeof h.valueOf=="function"?h.valueOf():h;h=qt(g)?g+"":g}if(typeof h!="string")return h===0?h:+h;h=Zs(h);var _=ca.test(h);return _||fa.test(h)?Ga(h.slice(2),_?2:8):ua.test(h)?mt:+h}function Fl(h){return je(h,ve(h))}function Ld(h){return h?kn(Et(h),-Ie,Ie):h===0?h:0}function Dt(h){return h==null?"":Ee(h)}var Nd=Jn(function(h,g){if(mr(g)||be(g)){je(g,te(g),h);return}for(var _ in g)Ft.call(g,_)&&cr(h,_,g[_])}),$l=Jn(function(h,g){je(g,ve(g),h)}),oi=Jn(function(h,g,_,k){je(g,ve(g),h,k)}),Rd=Jn(function(h,g,_,k){je(g,te(g),h,k)}),Md=nn(Oi);function Dd(h,g){var _=Kn(h);return g==null?_:mo(_,g)}var Bd=kt(function(h,g){h=zt(h);var _=-1,k=g.length,I=k>2?g[2]:d;for(I&&he(g[0],g[1],I)&&(k=1);++_<k;)for(var D=g[_],F=ve(D),P=-1,V=F.length;++P<V;){var Z=F[P],tt=h[Z];(tt===d||Ve(tt,jn[Z])&&!Ft.call(h,Z))&&(h[Z]=D[Z])}return h}),Fd=kt(function(h){return h.push(d,el),Ae(Pl,d,h)});function $d(h,g){return Ks(h,vt(g,3),We)}function Pd(h,g){return Ks(h,vt(g,3),Ni)}function zd(h,g){return h==null?h:Li(h,vt(g,3),ve)}function Ud(h,g){return h==null?h:xo(h,vt(g,3),ve)}function Vd(h,g){return h&&We(h,vt(g,3))}function Hd(h,g){return h&&Ni(h,vt(g,3))}function Gd(h){return h==null?[]:Ur(h,te(h))}function Wd(h){return h==null?[]:Ur(h,ve(h))}function hs(h,g,_){var k=h==null?d:Tn(h,g);return k===d?_:k}function jd(h,g){return h!=null&&il(h,g,pc)}function fs(h,g){return h!=null&&il(h,g,gc)}var qd=Jo(function(h,g,_){g!=null&&typeof g.toString!="function"&&(g=Tr.call(g)),h[g]=_},ps(ye)),Yd=Jo(function(h,g,_){g!=null&&typeof g.toString!="function"&&(g=Tr.call(g)),Ft.call(h,g)?h[g].push(_):h[g]=[_]},vt),Kd=kt(fr);function te(h){return be(h)?po(h):Bi(h)}function ve(h){return be(h)?po(h,!0):Ec(h)}function Jd(h,g){var _={};return g=vt(g,3),We(h,function(k,I,D){tn(_,g(k,I,D),k)}),_}function Xd(h,g){var _={};return g=vt(g,3),We(h,function(k,I,D){tn(_,I,g(k,I,D))}),_}var Qd=Jn(function(h,g,_){Vr(h,g,_)}),Pl=Jn(function(h,g,_,k){Vr(h,g,_,k)}),Zd=nn(function(h,g){var _={};if(h==null)return _;var k=!1;g=jt(g,function(D){return D=gn(D,h),k||(k=D.length>1),D}),je(h,Ji(h),_),k&&(_=De(_,$|H|j,jc));for(var I=g.length;I--;)Vi(_,g[I]);return _});function tp(h,g){return zl(h,ri(vt(g)))}var ep=nn(function(h,g){return h==null?{}:kc(h,g)});function zl(h,g){if(h==null)return{};var _=jt(Ji(h),function(k){return[k]});return g=vt(g),Lo(h,_,function(k,I){return g(k,I[0])})}function np(h,g,_){g=gn(g,h);var k=-1,I=g.length;for(I||(I=1,h=d);++k<I;){var D=h==null?d:h[qe(g[k])];D===d&&(k=I,D=_),h=sn(D)?D.call(h):D}return h}function rp(h,g,_){return h==null?h:pr(h,g,_)}function ip(h,g,_,k){return k=typeof k=="function"?k:d,h==null?h:pr(h,g,_,k)}var Ul=Zo(te),Vl=Zo(ve);function sp(h,g,_){var k=Ct(h),I=k||bn(h)||Zn(h);if(g=vt(g,4),_==null){var D=h&&h.constructor;I?_=k?new D:[]:qt(h)?_=sn(D)?Kn(Lr(h)):{}:_={}}return(I?Ne:We)(h,function(F,P,V){return g(_,F,P,V)}),_}function op(h,g){return h==null?!0:Vi(h,g)}function lp(h,g,_){return h==null?h:Bo(h,g,Wi(_))}function ap(h,g,_,k){return k=typeof k=="function"?k:d,h==null?h:Bo(h,g,Wi(_),k)}function tr(h){return h==null?[]:Ai(h,te(h))}function up(h){return h==null?[]:Ai(h,ve(h))}function cp(h,g,_){return _===d&&(_=g,g=d),_!==d&&(_=$e(_),_=_===_?_:0),g!==d&&(g=$e(g),g=g===g?g:0),kn($e(h),g,_)}function hp(h,g,_){return g=ln(g),_===d?(_=g,g=0):_=ln(_),h=$e(h),mc(h,g,_)}function fp(h,g,_){if(_&&typeof _!="boolean"&&he(h,g,_)&&(g=_=d),_===d&&(typeof g=="boolean"?(_=g,g=d):typeof h=="boolean"&&(_=h,h=d)),h===d&&g===d?(h=0,g=1):(h=ln(h),g===d?(g=h,h=0):g=ln(g)),h>g){var k=h;h=g,g=k}if(_||h%1||g%1){var I=ho();return le(h+I*(g-h+Ha("1e-"+((I+"").length-1))),g)}return Pi(h,g)}var dp=Xn(function(h,g,_){return g=g.toLowerCase(),h+(_?Hl(g):g)});function Hl(h){return ds(Dt(h).toLowerCase())}function Gl(h){return h=Dt(h),h&&h.replace(pa,nu).replace(Ra,"")}function pp(h,g,_){h=Dt(h),g=Ee(g);var k=h.length;_=_===d?k:kn(Et(_),0,k);var I=_;return _-=g.length,_>=0&&h.slice(_,I)==g}function gp(h){return h=Dt(h),h&&Oe.test(h)?h.replace(xt,ru):h}function mp(h){return h=Dt(h),h&&ta.test(h)?h.replace(li,"\\$&"):h}var bp=Xn(function(h,g,_){return h+(_?"-":"")+g.toLowerCase()}),vp=Xn(function(h,g,_){return h+(_?" ":"")+g.toLowerCase()}),yp=qo("toLowerCase");function _p(h,g,_){h=Dt(h),g=Et(g);var k=g?Gn(h):0;if(!g||k>=g)return h;var I=(g-k)/2;return Yr(Dr(I),_)+h+Yr(Mr(I),_)}function xp(h,g,_){h=Dt(h),g=Et(g);var k=g?Gn(h):0;return g&&k<g?h+Yr(g-k,_):h}function wp(h,g,_){h=Dt(h),g=Et(g);var k=g?Gn(h):0;return g&&k<g?Yr(g-k,_)+h:h}function Ap(h,g,_){return _||g==null?g=0:g&&(g=+g),Iu(Dt(h).replace(ai,""),g||0)}function Cp(h,g,_){return(_?he(h,g,_):g===d)?g=1:g=Et(g),zi(Dt(h),g)}function Ep(){var h=arguments,g=Dt(h[0]);return h.length<3?g:g.replace(h[1],h[2])}var Sp=Xn(function(h,g,_){return h+(_?"_":"")+g.toLowerCase()});function kp(h,g,_){return _&&typeof _!="number"&&he(h,g,_)&&(g=_=d),_=_===d?ee:_>>>0,_?(h=Dt(h),h&&(typeof g=="string"||g!=null&&!cs(g))&&(g=Ee(g),!g&&Hn(h))?mn(ze(h),0,_):h.split(g,_)):[]}var Tp=Xn(function(h,g,_){return h+(_?" ":"")+ds(g)});function Ip(h,g,_){return h=Dt(h),_=_==null?0:kn(Et(_),0,h.length),g=Ee(g),h.slice(_,_+g.length)==g}function Op(h,g,_){var k=R.templateSettings;_&&he(h,g,_)&&(g=d),h=Dt(h),g=oi({},g,k,tl);var I=oi({},g.imports,k.imports,tl),D=te(I),F=Ai(I,D),P,V,Z=0,tt=g.interpolate||yr,rt="__p += '",ht=Ei((g.escape||yr).source+"|"+tt.source+"|"+(tt===_s?aa:yr).source+"|"+(g.evaluate||yr).source+"|$","g"),gt="//# sourceURL="+(Ft.call(g,"sourceURL")?(g.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++$a+"]")+`
`;h.replace(ht,function(_t,It,Lt,ke,fe,Te){return Lt||(Lt=ke),rt+=h.slice(Z,Te).replace(ga,iu),It&&(P=!0,rt+=`' +
__e(`+It+`) +
'`),fe&&(V=!0,rt+=`';
`+fe+`;
__p += '`),Lt&&(rt+=`' +
((__t = (`+Lt+`)) == null ? '' : __t) +
'`),Z=Te+_t.length,_t}),rt+=`';
`;var yt=Ft.call(g,"variable")&&g.variable;if(!yt)rt=`with (obj) {
`+rt+`
}
`;else if(oa.test(yt))throw new At(N);rt=(V?rt.replace(X,""):rt).replace(at,"$1").replace(nt,"$1;"),rt="function("+(yt||"obj")+`) {
`+(yt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+rt+`return __p
}`;var St=jl(function(){return Rt(D,gt+"return "+rt).apply(d,F)});if(St.source=rt,us(St))throw St;return St}function Lp(h){return Dt(h).toLowerCase()}function Np(h){return Dt(h).toUpperCase()}function Rp(h,g,_){if(h=Dt(h),h&&(_||g===d))return Zs(h);if(!h||!(g=Ee(g)))return h;var k=ze(h),I=ze(g),D=eo(k,I),F=no(k,I)+1;return mn(k,D,F).join("")}function Mp(h,g,_){if(h=Dt(h),h&&(_||g===d))return h.slice(0,io(h)+1);if(!h||!(g=Ee(g)))return h;var k=ze(h),I=no(k,ze(g))+1;return mn(k,0,I).join("")}function Dp(h,g,_){if(h=Dt(h),h&&(_||g===d))return h.replace(ai,"");if(!h||!(g=Ee(g)))return h;var k=ze(h),I=eo(k,ze(g));return mn(k,I).join("")}function Bp(h,g){var _=er,k=Nn;if(qt(g)){var I="separator"in g?g.separator:I;_="length"in g?Et(g.length):_,k="omission"in g?Ee(g.omission):k}h=Dt(h);var D=h.length;if(Hn(h)){var F=ze(h);D=F.length}if(_>=D)return h;var P=_-Gn(k);if(P<1)return k;var V=F?mn(F,0,P).join(""):h.slice(0,P);if(I===d)return V+k;if(F&&(P+=V.length-P),cs(I)){if(h.slice(P).search(I)){var Z,tt=V;for(I.global||(I=Ei(I.source,Dt(xs.exec(I))+"g")),I.lastIndex=0;Z=I.exec(tt);)var rt=Z.index;V=V.slice(0,rt===d?P:rt)}}else if(h.indexOf(Ee(I),P)!=P){var ht=V.lastIndexOf(I);ht>-1&&(V=V.slice(0,ht))}return V+k}function Fp(h){return h=Dt(h),h&&wt.test(h)?h.replace(dt,hu):h}var $p=Xn(function(h,g,_){return h+(_?" ":"")+g.toUpperCase()}),ds=qo("toUpperCase");function Wl(h,g,_){return h=Dt(h),g=_?d:g,g===d?ou(h)?pu(h):Xa(h):h.match(g)||[]}var jl=kt(function(h,g){try{return Ae(h,d,g)}catch(_){return us(_)?_:new At(_)}}),Pp=nn(function(h,g){return Ne(g,function(_){_=qe(_),tn(h,_,ls(h[_],h))}),h});function zp(h){var g=h==null?0:h.length,_=vt();return h=g?jt(h,function(k){if(typeof k[1]!="function")throw new Re(O);return[_(k[0]),k[1]]}):[],kt(function(k){for(var I=-1;++I<g;){var D=h[I];if(Ae(D[0],this,k))return Ae(D[1],this,k)}})}function Up(h){return hc(De(h,$))}function ps(h){return function(){return h}}function Vp(h,g){return h==null||h!==h?g:h}var Hp=Ko(),Gp=Ko(!0);function ye(h){return h}function gs(h){return Eo(typeof h=="function"?h:De(h,$))}function Wp(h){return ko(De(h,$))}function jp(h,g){return To(h,De(g,$))}var qp=kt(function(h,g){return function(_){return fr(_,h,g)}}),Yp=kt(function(h,g){return function(_){return fr(h,_,g)}});function ms(h,g,_){var k=te(g),I=Ur(g,k);_==null&&!(qt(g)&&(I.length||!k.length))&&(_=g,g=h,h=this,I=Ur(g,te(g)));var D=!(qt(_)&&"chain"in _)||!!_.chain,F=sn(h);return Ne(I,function(P){var V=g[P];h[P]=V,F&&(h.prototype[P]=function(){var Z=this.__chain__;if(D||Z){var tt=h(this.__wrapped__),rt=tt.__actions__=me(this.__actions__);return rt.push({func:V,args:arguments,thisArg:h}),tt.__chain__=Z,tt}return V.apply(h,cn([this.value()],arguments))})}),h}function Kp(){return re._===this&&(re._=_u),this}function bs(){}function Jp(h){return h=Et(h),kt(function(g){return Io(g,h)})}var Xp=qi(jt),Qp=qi(Ys),Zp=qi(vi);function ql(h){return ts(h)?yi(qe(h)):Tc(h)}function tg(h){return function(g){return h==null?d:Tn(h,g)}}var eg=Xo(),ng=Xo(!0);function vs(){return[]}function ys(){return!1}function rg(){return{}}function ig(){return""}function sg(){return!0}function og(h,g){if(h=Et(h),h<1||h>Ie)return[];var _=ee,k=le(h,ee);g=vt(g),h-=ee;for(var I=wi(k,g);++_<h;)g(_);return I}function lg(h){return Ct(h)?jt(h,qe):Se(h)?[h]:me(dl(Dt(h)))}function ag(h){var g=++vu;return Dt(h)+g}var ug=qr(function(h,g){return h+g},0),cg=Yi("ceil"),hg=qr(function(h,g){return h/g},1),fg=Yi("floor");function dg(h){return h&&h.length?zr(h,ye,Ri):d}function pg(h,g){return h&&h.length?zr(h,vt(g,2),Ri):d}function gg(h){return Xs(h,ye)}function mg(h,g){return Xs(h,vt(g,2))}function bg(h){return h&&h.length?zr(h,ye,Fi):d}function vg(h,g){return h&&h.length?zr(h,vt(g,2),Fi):d}var yg=qr(function(h,g){return h*g},1),_g=Yi("round"),xg=qr(function(h,g){return h-g},0);function wg(h){return h&&h.length?xi(h,ye):0}function Ag(h,g){return h&&h.length?xi(h,vt(g,2)):0}return R.after=Wf,R.ary=Cl,R.assign=Nd,R.assignIn=$l,R.assignInWith=oi,R.assignWith=Rd,R.at=Md,R.before=El,R.bind=ls,R.bindAll=Pp,R.bindKey=Sl,R.castArray=rd,R.chain=xl,R.chunk=hh,R.compact=fh,R.concat=dh,R.cond=zp,R.conforms=Up,R.constant=ps,R.countBy=wf,R.create=Dd,R.curry=kl,R.curryRight=Tl,R.debounce=Il,R.defaults=Bd,R.defaultsDeep=Fd,R.defer=jf,R.delay=qf,R.difference=ph,R.differenceBy=gh,R.differenceWith=mh,R.drop=bh,R.dropRight=vh,R.dropRightWhile=yh,R.dropWhile=_h,R.fill=xh,R.filter=Cf,R.flatMap=kf,R.flatMapDeep=Tf,R.flatMapDepth=If,R.flatten=bl,R.flattenDeep=wh,R.flattenDepth=Ah,R.flip=Yf,R.flow=Hp,R.flowRight=Gp,R.fromPairs=Ch,R.functions=Gd,R.functionsIn=Wd,R.groupBy=Of,R.initial=Sh,R.intersection=kh,R.intersectionBy=Th,R.intersectionWith=Ih,R.invert=qd,R.invertBy=Yd,R.invokeMap=Nf,R.iteratee=gs,R.keyBy=Rf,R.keys=te,R.keysIn=ve,R.map=ti,R.mapKeys=Jd,R.mapValues=Xd,R.matches=Wp,R.matchesProperty=jp,R.memoize=ni,R.merge=Qd,R.mergeWith=Pl,R.method=qp,R.methodOf=Yp,R.mixin=ms,R.negate=ri,R.nthArg=Jp,R.omit=Zd,R.omitBy=tp,R.once=Kf,R.orderBy=Mf,R.over=Xp,R.overArgs=Jf,R.overEvery=Qp,R.overSome=Zp,R.partial=as,R.partialRight=Ol,R.partition=Df,R.pick=ep,R.pickBy=zl,R.property=ql,R.propertyOf=tg,R.pull=Rh,R.pullAll=yl,R.pullAllBy=Mh,R.pullAllWith=Dh,R.pullAt=Bh,R.range=eg,R.rangeRight=ng,R.rearg=Xf,R.reject=$f,R.remove=Fh,R.rest=Qf,R.reverse=ss,R.sampleSize=zf,R.set=rp,R.setWith=ip,R.shuffle=Uf,R.slice=$h,R.sortBy=Gf,R.sortedUniq=Wh,R.sortedUniqBy=jh,R.split=kp,R.spread=Zf,R.tail=qh,R.take=Yh,R.takeRight=Kh,R.takeRightWhile=Jh,R.takeWhile=Xh,R.tap=df,R.throttle=td,R.thru=Zr,R.toArray=Dl,R.toPairs=Ul,R.toPairsIn=Vl,R.toPath=lg,R.toPlainObject=Fl,R.transform=sp,R.unary=ed,R.union=Qh,R.unionBy=Zh,R.unionWith=tf,R.uniq=ef,R.uniqBy=nf,R.uniqWith=rf,R.unset=op,R.unzip=os,R.unzipWith=_l,R.update=lp,R.updateWith=ap,R.values=tr,R.valuesIn=up,R.without=sf,R.words=Wl,R.wrap=nd,R.xor=of,R.xorBy=lf,R.xorWith=af,R.zip=uf,R.zipObject=cf,R.zipObjectDeep=hf,R.zipWith=ff,R.entries=Ul,R.entriesIn=Vl,R.extend=$l,R.extendWith=oi,ms(R,R),R.add=ug,R.attempt=jl,R.camelCase=dp,R.capitalize=Hl,R.ceil=cg,R.clamp=cp,R.clone=id,R.cloneDeep=od,R.cloneDeepWith=ld,R.cloneWith=sd,R.conformsTo=ad,R.deburr=Gl,R.defaultTo=Vp,R.divide=hg,R.endsWith=pp,R.eq=Ve,R.escape=gp,R.escapeRegExp=mp,R.every=Af,R.find=Ef,R.findIndex=gl,R.findKey=$d,R.findLast=Sf,R.findLastIndex=ml,R.findLastKey=Pd,R.floor=fg,R.forEach=wl,R.forEachRight=Al,R.forIn=zd,R.forInRight=Ud,R.forOwn=Vd,R.forOwnRight=Hd,R.get=hs,R.gt=ud,R.gte=cd,R.has=jd,R.hasIn=fs,R.head=vl,R.identity=ye,R.includes=Lf,R.indexOf=Eh,R.inRange=hp,R.invoke=Kd,R.isArguments=Ln,R.isArray=Ct,R.isArrayBuffer=hd,R.isArrayLike=be,R.isArrayLikeObject=Kt,R.isBoolean=fd,R.isBuffer=bn,R.isDate=dd,R.isElement=pd,R.isEmpty=gd,R.isEqual=md,R.isEqualWith=bd,R.isError=us,R.isFinite=vd,R.isFunction=sn,R.isInteger=Ll,R.isLength=ii,R.isMap=Nl,R.isMatch=yd,R.isMatchWith=_d,R.isNaN=xd,R.isNative=wd,R.isNil=Cd,R.isNull=Ad,R.isNumber=Rl,R.isObject=qt,R.isObjectLike=Yt,R.isPlainObject=vr,R.isRegExp=cs,R.isSafeInteger=Ed,R.isSet=Ml,R.isString=si,R.isSymbol=Se,R.isTypedArray=Zn,R.isUndefined=Sd,R.isWeakMap=kd,R.isWeakSet=Td,R.join=Oh,R.kebabCase=bp,R.last=Fe,R.lastIndexOf=Lh,R.lowerCase=vp,R.lowerFirst=yp,R.lt=Id,R.lte=Od,R.max=dg,R.maxBy=pg,R.mean=gg,R.meanBy=mg,R.min=bg,R.minBy=vg,R.stubArray=vs,R.stubFalse=ys,R.stubObject=rg,R.stubString=ig,R.stubTrue=sg,R.multiply=yg,R.nth=Nh,R.noConflict=Kp,R.noop=bs,R.now=ei,R.pad=_p,R.padEnd=xp,R.padStart=wp,R.parseInt=Ap,R.random=fp,R.reduce=Bf,R.reduceRight=Ff,R.repeat=Cp,R.replace=Ep,R.result=np,R.round=_g,R.runInContext=U,R.sample=Pf,R.size=Vf,R.snakeCase=Sp,R.some=Hf,R.sortedIndex=Ph,R.sortedIndexBy=zh,R.sortedIndexOf=Uh,R.sortedLastIndex=Vh,R.sortedLastIndexBy=Hh,R.sortedLastIndexOf=Gh,R.startCase=Tp,R.startsWith=Ip,R.subtract=xg,R.sum=wg,R.sumBy=Ag,R.template=Op,R.times=og,R.toFinite=ln,R.toInteger=Et,R.toLength=Bl,R.toLower=Lp,R.toNumber=$e,R.toSafeInteger=Ld,R.toString=Dt,R.toUpper=Np,R.trim=Rp,R.trimEnd=Mp,R.trimStart=Dp,R.truncate=Bp,R.unescape=Fp,R.uniqueId=ag,R.upperCase=$p,R.upperFirst=ds,R.each=wl,R.eachRight=Al,R.first=vl,ms(R,function(){var h={};return We(R,function(g,_){Ft.call(R.prototype,_)||(h[_]=g)}),h}(),{chain:!1}),R.VERSION=v,Ne(["bind","bindKey","curry","curryRight","partial","partialRight"],function(h){R[h].placeholder=R}),Ne(["drop","take"],function(h,g){Ot.prototype[h]=function(_){_=_===d?1:Qt(Et(_),0);var k=this.__filtered__&&!g?new Ot(this):this.clone();return k.__filtered__?k.__takeCount__=le(_,k.__takeCount__):k.__views__.push({size:le(_,ee),type:h+(k.__dir__<0?"Right":"")}),k},Ot.prototype[h+"Right"]=function(_){return this.reverse()[h](_).reverse()}}),Ne(["filter","map","takeWhile"],function(h,g){var _=g+1,k=_==vn||_==yn;Ot.prototype[h]=function(I){var D=this.clone();return D.__iteratees__.push({iteratee:vt(I,3),type:_}),D.__filtered__=D.__filtered__||k,D}}),Ne(["head","last"],function(h,g){var _="take"+(g?"Right":"");Ot.prototype[h]=function(){return this[_](1).value()[0]}}),Ne(["initial","tail"],function(h,g){var _="drop"+(g?"":"Right");Ot.prototype[h]=function(){return this.__filtered__?new Ot(this):this[_](1)}}),Ot.prototype.compact=function(){return this.filter(ye)},Ot.prototype.find=function(h){return this.filter(h).head()},Ot.prototype.findLast=function(h){return this.reverse().find(h)},Ot.prototype.invokeMap=kt(function(h,g){return typeof h=="function"?new Ot(this):this.map(function(_){return fr(_,h,g)})}),Ot.prototype.reject=function(h){return this.filter(ri(vt(h)))},Ot.prototype.slice=function(h,g){h=Et(h);var _=this;return _.__filtered__&&(h>0||g<0)?new Ot(_):(h<0?_=_.takeRight(-h):h&&(_=_.drop(h)),g!==d&&(g=Et(g),_=g<0?_.dropRight(-g):_.take(g-h)),_)},Ot.prototype.takeRightWhile=function(h){return this.reverse().takeWhile(h).reverse()},Ot.prototype.toArray=function(){return this.take(ee)},We(Ot.prototype,function(h,g){var _=/^(?:filter|find|map|reject)|While$/.test(g),k=/^(?:head|last)$/.test(g),I=R[k?"take"+(g=="last"?"Right":""):g],D=k||/^find/.test(g);I&&(R.prototype[g]=function(){var F=this.__wrapped__,P=k?[1]:arguments,V=F instanceof Ot,Z=P[0],tt=V||Ct(F),rt=function(It){var Lt=I.apply(R,cn([It],P));return k&&ht?Lt[0]:Lt};tt&&_&&typeof Z=="function"&&Z.length!=1&&(V=tt=!1);var ht=this.__chain__,gt=!!this.__actions__.length,yt=D&&!ht,St=V&&!gt;if(!D&&tt){F=St?F:new Ot(this);var _t=h.apply(F,P);return _t.__actions__.push({func:Zr,args:[rt],thisArg:d}),new Me(_t,ht)}return yt&&St?h.apply(this,P):(_t=this.thru(rt),yt?k?_t.value()[0]:_t.value():_t)})}),Ne(["pop","push","shift","sort","splice","unshift"],function(h){var g=Er[h],_=/^(?:push|sort|unshift)$/.test(h)?"tap":"thru",k=/^(?:pop|shift)$/.test(h);R.prototype[h]=function(){var I=arguments;if(k&&!this.__chain__){var D=this.value();return g.apply(Ct(D)?D:[],I)}return this[_](function(F){return g.apply(Ct(F)?F:[],I)})}}),We(Ot.prototype,function(h,g){var _=R[g];if(_){var k=_.name+"";Ft.call(Yn,k)||(Yn[k]=[]),Yn[k].push({name:g,func:_})}}),Yn[jr(d,ft).name]=[{name:"wrapper",func:d}],Ot.prototype.clone=Bu,Ot.prototype.reverse=Fu,Ot.prototype.value=$u,R.prototype.at=pf,R.prototype.chain=gf,R.prototype.commit=mf,R.prototype.next=bf,R.prototype.plant=yf,R.prototype.reverse=_f,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=xf,R.prototype.first=R.prototype.head,sr&&(R.prototype[sr]=vf),R},Wn=gu();An?((An.exports=Wn)._=Wn,pi._=Wn):re._=Wn}).call(commonjsGlobal)})(lodash,lodash.exports);var lodashExports=lodash.exports;(function(){function m(s,d,v){function C(N,M){if(!d[N]){if(!s[N]){var B=typeof require=="function"&&require;if(!M&&B)return B(N,!0);if(T)return T(N,!0);var z=new Error("Cannot find module '"+N+"'");throw z.code="MODULE_NOT_FOUND",z}var $=d[N]={exports:{}};s[N][0].call($.exports,function(H){var j=s[N][1][H];return C(j||H)},$,$.exports,m,s,d,v)}return d[N].exports}for(var T=typeof require=="function"&&require,O=0;O<v.length;O++)C(v[O]);return C}return m})()({1:[function(m,s,d){var v=m("./lib/js-yaml.js");s.exports=v},{"./lib/js-yaml.js":2}],2:[function(m,s,d){var v=m("./js-yaml/loader"),C=m("./js-yaml/dumper");function T(O){return function(){throw new Error("Function "+O+" is deprecated and cannot be used.")}}s.exports.Type=m("./js-yaml/type"),s.exports.Schema=m("./js-yaml/schema"),s.exports.FAILSAFE_SCHEMA=m("./js-yaml/schema/failsafe"),s.exports.JSON_SCHEMA=m("./js-yaml/schema/json"),s.exports.CORE_SCHEMA=m("./js-yaml/schema/core"),s.exports.DEFAULT_SAFE_SCHEMA=m("./js-yaml/schema/default_safe"),s.exports.DEFAULT_FULL_SCHEMA=m("./js-yaml/schema/default_full"),s.exports.load=v.load,s.exports.loadAll=v.loadAll,s.exports.safeLoad=v.safeLoad,s.exports.safeLoadAll=v.safeLoadAll,s.exports.dump=C.dump,s.exports.safeDump=C.safeDump,s.exports.YAMLException=m("./js-yaml/exception"),s.exports.MINIMAL_SCHEMA=m("./js-yaml/schema/failsafe"),s.exports.SAFE_SCHEMA=m("./js-yaml/schema/default_safe"),s.exports.DEFAULT_SCHEMA=m("./js-yaml/schema/default_full"),s.exports.scan=T("scan"),s.exports.parse=T("parse"),s.exports.compose=T("compose"),s.exports.addConstructor=T("addConstructor")},{"./js-yaml/dumper":4,"./js-yaml/exception":5,"./js-yaml/loader":6,"./js-yaml/schema":8,"./js-yaml/schema/core":9,"./js-yaml/schema/default_full":10,"./js-yaml/schema/default_safe":11,"./js-yaml/schema/failsafe":12,"./js-yaml/schema/json":13,"./js-yaml/type":14}],3:[function(m,s,d){function v(B){return typeof B>"u"||B===null}function C(B){return typeof B=="object"&&B!==null}function T(B){return Array.isArray(B)?B:v(B)?[]:[B]}function O(B,z){var $,H,j,ot;if(z)for(ot=Object.keys(z),$=0,H=ot.length;$<H;$+=1)j=ot[$],B[j]=z[j];return B}function N(B,z){var $="",H;for(H=0;H<z;H+=1)$+=B;return $}function M(B){return B===0&&Number.NEGATIVE_INFINITY===1/B}s.exports.isNothing=v,s.exports.isObject=C,s.exports.toArray=T,s.exports.repeat=N,s.exports.isNegativeZero=M,s.exports.extend=O},{}],4:[function(m,s,d){var v=m("./common"),C=m("./exception"),T=m("./schema/default_full"),O=m("./schema/default_safe"),N=Object.prototype.toString,M=Object.prototype.hasOwnProperty,B=9,z=10,$=13,H=32,j=33,ot=34,lt=35,bt=37,ft=38,Tt=39,Mt=42,Ht=44,Bt=45,$t=58,Gt=61,Pt=62,de=63,er=64,Nn=91,Rn=93,Mn=96,vn=123,Dn=124,yn=125,Nt={};Nt[0]="\\0",Nt[7]="\\a",Nt[8]="\\b",Nt[9]="\\t",Nt[10]="\\n",Nt[11]="\\v",Nt[12]="\\f",Nt[13]="\\r",Nt[27]="\\e",Nt[34]='\\"',Nt[92]="\\\\",Nt[133]="\\N",Nt[160]="\\_",Nt[8232]="\\L",Nt[8233]="\\P";var Ie=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function Bn(L,q){var K,st,it,X,at,nt,dt;if(q===null)return{};for(K={},st=Object.keys(q),it=0,X=st.length;it<X;it+=1)at=st[it],nt=String(q[at]),at.slice(0,2)==="!!"&&(at="tag:yaml.org,2002:"+at.slice(2)),dt=L.compiledTypeMap.fallback[at],dt&&M.call(dt.styleAliases,nt)&&(nt=dt.styleAliases[nt]),K[at]=nt;return K}function mt(L){var q,K,st;if(q=L.toString(16).toUpperCase(),L<=255)K="x",st=2;else if(L<=65535)K="u",st=4;else if(L<=4294967295)K="U",st=8;else throw new C("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+K+v.repeat("0",st-q.length)+q}function ee(L){this.schema=L.schema||T,this.indent=Math.max(1,L.indent||2),this.noArrayIndent=L.noArrayIndent||!1,this.skipInvalid=L.skipInvalid||!1,this.flowLevel=v.isNothing(L.flowLevel)?-1:L.flowLevel,this.styleMap=Bn(this.schema,L.styles||null),this.sortKeys=L.sortKeys||!1,this.lineWidth=L.lineWidth||80,this.noRefs=L.noRefs||!1,this.noCompatMode=L.noCompatMode||!1,this.condenseFlow=L.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function _n(L,q){for(var K=v.repeat(" ",q),st=0,it=-1,X="",at,nt=L.length;st<nt;)it=L.indexOf(`
`,st),it===-1?(at=L.slice(st),st=nt):(at=L.slice(st,it+1),st=it+1),at.length&&at!==`
`&&(X+=K),X+=at;return X}function pe(L,q){return`
`+v.repeat(" ",L.indent*q)}function Fn(L,q){var K,st,it;for(K=0,st=L.implicitTypes.length;K<st;K+=1)if(it=L.implicitTypes[K],it.resolve(q))return!0;return!1}function ne(L){return L===H||L===B}function ue(L){return 32<=L&&L<=126||161<=L&&L<=55295&&L!==8232&&L!==8233||57344<=L&&L<=65533&&L!==65279||65536<=L&&L<=1114111}function Wt(L){return ue(L)&&!ne(L)&&L!==65279&&L!==$&&L!==z}function _e(L,q){return ue(L)&&L!==65279&&L!==Ht&&L!==Nn&&L!==Rn&&L!==vn&&L!==yn&&L!==$t&&(L!==lt||q&&Wt(q))}function Pe(L){return ue(L)&&L!==65279&&!ne(L)&&L!==Bt&&L!==de&&L!==$t&&L!==Ht&&L!==Nn&&L!==Rn&&L!==vn&&L!==yn&&L!==lt&&L!==ft&&L!==Mt&&L!==j&&L!==Dn&&L!==Gt&&L!==Pt&&L!==Tt&&L!==ot&&L!==bt&&L!==er&&L!==Mn}function $n(L){var q=/^\n* /;return q.test(L)}var Ye=1,Ke=2,xn=3,se=4,xe=5;function nr(L,q,K,st,it){var X,at,nt,dt=!1,xt=!1,wt=st!==-1,Oe=-1,Zt=Pe(L.charCodeAt(0))&&!ne(L.charCodeAt(L.length-1));if(q)for(X=0;X<L.length;X++){if(at=L.charCodeAt(X),!ue(at))return xe;nt=X>0?L.charCodeAt(X-1):null,Zt=Zt&&_e(at,nt)}else{for(X=0;X<L.length;X++){if(at=L.charCodeAt(X),at===z)dt=!0,wt&&(xt=xt||X-Oe-1>st&&L[Oe+1]!==" ",Oe=X);else if(!ue(at))return xe;nt=X>0?L.charCodeAt(X-1):null,Zt=Zt&&_e(at,nt)}xt=xt||wt&&X-Oe-1>st&&L[Oe+1]!==" "}return!dt&&!xt?Zt&&!it(L)?Ye:Ke:K>9&&$n(L)?xe:xt?se:xn}function we(L,q,K,st){L.dump=function(){if(q.length===0)return"''";if(!L.noCompatMode&&Ie.indexOf(q)!==-1)return"'"+q+"'";var it=L.indent*Math.max(1,K),X=L.lineWidth===-1?-1:Math.max(Math.min(L.lineWidth,40),L.lineWidth-it),at=st||L.flowLevel>-1&&K>=L.flowLevel;function nt(dt){return Fn(L,dt)}switch(nr(q,at,L.indent,X,nt)){case Ye:return q;case Ke:return"'"+q.replace(/'/g,"''")+"'";case xn:return"|"+wn(q,L.indent)+Pn(_n(q,it));case se:return">"+wn(q,L.indent)+Pn(_n(ge(q,X),it));case xe:return'"'+Ge(q)+'"';default:throw new C("impossible error: invalid scalar style")}}()}function wn(L,q){var K=$n(L)?String(q):"",st=L[L.length-1]===`
`,it=st&&(L[L.length-2]===`
`||L===`
`),X=it?"+":st?"":"-";return K+X+`
`}function Pn(L){return L[L.length-1]===`
`?L.slice(0,-1):L}function ge(L,q){for(var K=/(\n+)([^\n]*)/g,st=function(){var xt=L.indexOf(`
`);return xt=xt!==-1?xt:L.length,K.lastIndex=xt,oe(L.slice(0,xt),q)}(),it=L[0]===`
`||L[0]===" ",X,at;at=K.exec(L);){var nt=at[1],dt=at[2];X=dt[0]===" ",st+=nt+(!it&&!X&&dt!==""?`
`:"")+oe(dt,q),it=X}return st}function oe(L,q){if(L===""||L[0]===" ")return L;for(var K=/ [^ ]/g,st,it=0,X,at=0,nt=0,dt="";st=K.exec(L);)nt=st.index,nt-it>q&&(X=at>it?at:nt,dt+=`
`+L.slice(it,X),it=X+1),at=nt;return dt+=`
`,L.length-it>q&&at>it?dt+=L.slice(it,at)+`
`+L.slice(at+1):dt+=L.slice(it),dt.slice(1)}function Ge(L){for(var q="",K,st,it,X=0;X<L.length;X++){if(K=L.charCodeAt(X),K>=55296&&K<=56319&&(st=L.charCodeAt(X+1),st>=56320&&st<=57343)){q+=mt((K-55296)*1024+st-56320+65536),X++;continue}it=Nt[K],q+=!it&&ue(K)?L[X]:it||mt(K)}return q}function Je(L,q,K){var st="",it=L.tag,X,at;for(X=0,at=K.length;X<at;X+=1)W(L,q,K[X],!1,!1)&&(X!==0&&(st+=","+(L.condenseFlow?"":" ")),st+=L.dump);L.tag=it,L.dump="["+st+"]"}function zn(L,q,K,st){var it="",X=L.tag,at,nt;for(at=0,nt=K.length;at<nt;at+=1)W(L,q+1,K[at],!0,!0)&&((!st||at!==0)&&(it+=pe(L,q)),L.dump&&z===L.dump.charCodeAt(0)?it+="-":it+="- ",it+=L.dump);L.tag=X,L.dump=it||"[]"}function Xe(L,q,K){var st="",it=L.tag,X=Object.keys(K),at,nt,dt,xt,wt;for(at=0,nt=X.length;at<nt;at+=1)wt="",at!==0&&(wt+=", "),L.condenseFlow&&(wt+='"'),dt=X[at],xt=K[dt],W(L,q,dt,!1,!1)&&(L.dump.length>1024&&(wt+="? "),wt+=L.dump+(L.condenseFlow?'"':"")+":"+(L.condenseFlow?"":" "),W(L,q,xt,!1,!1)&&(wt+=L.dump,st+=wt));L.tag=it,L.dump="{"+st+"}"}function rr(L,q,K,st){var it="",X=L.tag,at=Object.keys(K),nt,dt,xt,wt,Oe,Zt;if(L.sortKeys===!0)at.sort();else if(typeof L.sortKeys=="function")at.sort(L.sortKeys);else if(L.sortKeys)throw new C("sortKeys must be a boolean or a function");for(nt=0,dt=at.length;nt<dt;nt+=1)Zt="",(!st||nt!==0)&&(Zt+=pe(L,q)),xt=at[nt],wt=K[xt],W(L,q+1,xt,!0,!0,!0)&&(Oe=L.tag!==null&&L.tag!=="?"||L.dump&&L.dump.length>1024,Oe&&(L.dump&&z===L.dump.charCodeAt(0)?Zt+="?":Zt+="? "),Zt+=L.dump,Oe&&(Zt+=pe(L,q)),W(L,q+1,wt,!0,Oe)&&(L.dump&&z===L.dump.charCodeAt(0)?Zt+=":":Zt+=": ",Zt+=L.dump,it+=Zt));L.tag=X,L.dump=it||"{}"}function S(L,q,K){var st,it,X,at,nt,dt;for(it=K?L.explicitTypes:L.implicitTypes,X=0,at=it.length;X<at;X+=1)if(nt=it[X],(nt.instanceOf||nt.predicate)&&(!nt.instanceOf||typeof q=="object"&&q instanceof nt.instanceOf)&&(!nt.predicate||nt.predicate(q))){if(L.tag=K?nt.tag:"?",nt.represent){if(dt=L.styleMap[nt.tag]||nt.defaultStyle,N.call(nt.represent)==="[object Function]")st=nt.represent(q,dt);else if(M.call(nt.represent,dt))st=nt.represent[dt](q,dt);else throw new C("!<"+nt.tag+'> tag resolver accepts not "'+dt+'" style');L.dump=st}return!0}return!1}function W(L,q,K,st,it,X){L.tag=null,L.dump=K,S(L,K,!1)||S(L,K,!0);var at=N.call(L.dump);st&&(st=L.flowLevel<0||L.flowLevel>q);var nt=at==="[object Object]"||at==="[object Array]",dt,xt;if(nt&&(dt=L.duplicates.indexOf(K),xt=dt!==-1),(L.tag!==null&&L.tag!=="?"||xt||L.indent!==2&&q>0)&&(it=!1),xt&&L.usedDuplicates[dt])L.dump="*ref_"+dt;else{if(nt&&xt&&!L.usedDuplicates[dt]&&(L.usedDuplicates[dt]=!0),at==="[object Object]")st&&Object.keys(L.dump).length!==0?(rr(L,q,L.dump,it),xt&&(L.dump="&ref_"+dt+L.dump)):(Xe(L,q,L.dump),xt&&(L.dump="&ref_"+dt+" "+L.dump));else if(at==="[object Array]"){var wt=L.noArrayIndent&&q>0?q-1:q;st&&L.dump.length!==0?(zn(L,wt,L.dump,it),xt&&(L.dump="&ref_"+dt+L.dump)):(Je(L,wt,L.dump),xt&&(L.dump="&ref_"+dt+" "+L.dump))}else if(at==="[object String]")L.tag!=="?"&&we(L,L.dump,q,X);else{if(L.skipInvalid)return!1;throw new C("unacceptable kind of an object to dump "+at)}L.tag!==null&&L.tag!=="?"&&(L.dump="!<"+L.tag+"> "+L.dump)}return!0}function Q(L,q){var K=[],st=[],it,X;for(ut(L,K,st),it=0,X=st.length;it<X;it+=1)q.duplicates.push(K[st[it]]);q.usedDuplicates=new Array(X)}function ut(L,q,K){var st,it,X;if(L!==null&&typeof L=="object")if(it=q.indexOf(L),it!==-1)K.indexOf(it)===-1&&K.push(it);else if(q.push(L),Array.isArray(L))for(it=0,X=L.length;it<X;it+=1)ut(L[it],q,K);else for(st=Object.keys(L),it=0,X=st.length;it<X;it+=1)ut(L[st[it]],q,K)}function et(L,q){q=q||{};var K=new ee(q);return K.noRefs||Q(L,K),W(K,0,L,!0,!0)?K.dump+`
`:""}function ct(L,q){return et(L,v.extend({schema:O},q))}s.exports.dump=et,s.exports.safeDump=ct},{"./common":3,"./exception":5,"./schema/default_full":10,"./schema/default_safe":11}],5:[function(m,s,d){function v(C,T){Error.call(this),this.name="YAMLException",this.reason=C,this.mark=T,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}v.prototype=Object.create(Error.prototype),v.prototype.constructor=v,v.prototype.toString=function(T){var O=this.name+": ";return O+=this.reason||"(unknown reason)",!T&&this.mark&&(O+=" "+this.mark.toString()),O},s.exports=v},{}],6:[function(m,s,d){var v=m("./common"),C=m("./exception"),T=m("./mark"),O=m("./schema/default_safe"),N=m("./schema/default_full"),M=Object.prototype.hasOwnProperty,B=1,z=2,$=3,H=4,j=1,ot=2,lt=3,bt=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ft=/[\x85\u2028\u2029]/,Tt=/[,\[\]\{\}]/,Mt=/^(?:!|!!|![a-z\-]+!)$/i,Ht=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Bt(S){return Object.prototype.toString.call(S)}function $t(S){return S===10||S===13}function Gt(S){return S===9||S===32}function Pt(S){return S===9||S===32||S===10||S===13}function de(S){return S===44||S===91||S===93||S===123||S===125}function er(S){var W;return 48<=S&&S<=57?S-48:(W=S|32,97<=W&&W<=102?W-97+10:-1)}function Nn(S){return S===120?2:S===117?4:S===85?8:0}function Rn(S){return 48<=S&&S<=57?S-48:-1}function Mn(S){return S===48?"\0":S===97?"\x07":S===98?"\b":S===116||S===9?"	":S===110?`
`:S===118?"\v":S===102?"\f":S===114?"\r":S===101?"\x1B":S===32?" ":S===34?'"':S===47?"/":S===92?"\\":S===78?"":S===95?" ":S===76?"\u2028":S===80?"\u2029":""}function vn(S){return S<=65535?String.fromCharCode(S):String.fromCharCode((S-65536>>10)+55296,(S-65536&1023)+56320)}for(var Dn=new Array(256),yn=new Array(256),Nt=0;Nt<256;Nt++)Dn[Nt]=Mn(Nt)?1:0,yn[Nt]=Mn(Nt);function Ie(S,W){this.input=S,this.filename=W.filename||null,this.schema=W.schema||N,this.onWarning=W.onWarning||null,this.legacy=W.legacy||!1,this.json=W.json||!1,this.listener=W.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=S.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function Bn(S,W){return new C(W,new T(S.filename,S.input,S.position,S.line,S.position-S.lineStart))}function mt(S,W){throw Bn(S,W)}function ee(S,W){S.onWarning&&S.onWarning.call(null,Bn(S,W))}var _n={YAML:function(W,Q,ut){var et,ct,L;W.version!==null&&mt(W,"duplication of %YAML directive"),ut.length!==1&&mt(W,"YAML directive accepts exactly one argument"),et=/^([0-9]+)\.([0-9]+)$/.exec(ut[0]),et===null&&mt(W,"ill-formed argument of the YAML directive"),ct=parseInt(et[1],10),L=parseInt(et[2],10),ct!==1&&mt(W,"unacceptable YAML version of the document"),W.version=ut[0],W.checkLineBreaks=L<2,L!==1&&L!==2&&ee(W,"unsupported YAML version of the document")},TAG:function(W,Q,ut){var et,ct;ut.length!==2&&mt(W,"TAG directive accepts exactly two arguments"),et=ut[0],ct=ut[1],Mt.test(et)||mt(W,"ill-formed tag handle (first argument) of the TAG directive"),M.call(W.tagMap,et)&&mt(W,'there is a previously declared suffix for "'+et+'" tag handle'),Ht.test(ct)||mt(W,"ill-formed tag prefix (second argument) of the TAG directive"),W.tagMap[et]=ct}};function pe(S,W,Q,ut){var et,ct,L,q;if(W<Q){if(q=S.input.slice(W,Q),ut)for(et=0,ct=q.length;et<ct;et+=1)L=q.charCodeAt(et),L===9||32<=L&&L<=1114111||mt(S,"expected valid JSON character");else bt.test(q)&&mt(S,"the stream contains non-printable characters");S.result+=q}}function Fn(S,W,Q,ut){var et,ct,L,q;for(v.isObject(Q)||mt(S,"cannot merge mappings; the provided source object is unacceptable"),et=Object.keys(Q),L=0,q=et.length;L<q;L+=1)ct=et[L],M.call(W,ct)||(W[ct]=Q[ct],ut[ct]=!0)}function ne(S,W,Q,ut,et,ct,L,q){var K,st;if(Array.isArray(et))for(et=Array.prototype.slice.call(et),K=0,st=et.length;K<st;K+=1)Array.isArray(et[K])&&mt(S,"nested arrays are not supported inside keys"),typeof et=="object"&&Bt(et[K])==="[object Object]"&&(et[K]="[object Object]");if(typeof et=="object"&&Bt(et)==="[object Object]"&&(et="[object Object]"),et=String(et),W===null&&(W={}),ut==="tag:yaml.org,2002:merge")if(Array.isArray(ct))for(K=0,st=ct.length;K<st;K+=1)Fn(S,W,ct[K],Q);else Fn(S,W,ct,Q);else!S.json&&!M.call(Q,et)&&M.call(W,et)&&(S.line=L||S.line,S.position=q||S.position,mt(S,"duplicated mapping key")),W[et]=ct,delete Q[et];return W}function ue(S){var W;W=S.input.charCodeAt(S.position),W===10?S.position++:W===13?(S.position++,S.input.charCodeAt(S.position)===10&&S.position++):mt(S,"a line break is expected"),S.line+=1,S.lineStart=S.position}function Wt(S,W,Q){for(var ut=0,et=S.input.charCodeAt(S.position);et!==0;){for(;Gt(et);)et=S.input.charCodeAt(++S.position);if(W&&et===35)do et=S.input.charCodeAt(++S.position);while(et!==10&&et!==13&&et!==0);if($t(et))for(ue(S),et=S.input.charCodeAt(S.position),ut++,S.lineIndent=0;et===32;)S.lineIndent++,et=S.input.charCodeAt(++S.position);else break}return Q!==-1&&ut!==0&&S.lineIndent<Q&&ee(S,"deficient indentation"),ut}function _e(S){var W=S.position,Q;return Q=S.input.charCodeAt(W),!!((Q===45||Q===46)&&Q===S.input.charCodeAt(W+1)&&Q===S.input.charCodeAt(W+2)&&(W+=3,Q=S.input.charCodeAt(W),Q===0||Pt(Q)))}function Pe(S,W){W===1?S.result+=" ":W>1&&(S.result+=v.repeat(`
`,W-1))}function $n(S,W,Q){var ut,et,ct,L,q,K,st,it,X=S.kind,at=S.result,nt;if(nt=S.input.charCodeAt(S.position),Pt(nt)||de(nt)||nt===35||nt===38||nt===42||nt===33||nt===124||nt===62||nt===39||nt===34||nt===37||nt===64||nt===96||(nt===63||nt===45)&&(et=S.input.charCodeAt(S.position+1),Pt(et)||Q&&de(et)))return!1;for(S.kind="scalar",S.result="",ct=L=S.position,q=!1;nt!==0;){if(nt===58){if(et=S.input.charCodeAt(S.position+1),Pt(et)||Q&&de(et))break}else if(nt===35){if(ut=S.input.charCodeAt(S.position-1),Pt(ut))break}else{if(S.position===S.lineStart&&_e(S)||Q&&de(nt))break;if($t(nt))if(K=S.line,st=S.lineStart,it=S.lineIndent,Wt(S,!1,-1),S.lineIndent>=W){q=!0,nt=S.input.charCodeAt(S.position);continue}else{S.position=L,S.line=K,S.lineStart=st,S.lineIndent=it;break}}q&&(pe(S,ct,L,!1),Pe(S,S.line-K),ct=L=S.position,q=!1),Gt(nt)||(L=S.position+1),nt=S.input.charCodeAt(++S.position)}return pe(S,ct,L,!1),S.result?!0:(S.kind=X,S.result=at,!1)}function Ye(S,W){var Q,ut,et;if(Q=S.input.charCodeAt(S.position),Q!==39)return!1;for(S.kind="scalar",S.result="",S.position++,ut=et=S.position;(Q=S.input.charCodeAt(S.position))!==0;)if(Q===39)if(pe(S,ut,S.position,!0),Q=S.input.charCodeAt(++S.position),Q===39)ut=S.position,S.position++,et=S.position;else return!0;else $t(Q)?(pe(S,ut,et,!0),Pe(S,Wt(S,!1,W)),ut=et=S.position):S.position===S.lineStart&&_e(S)?mt(S,"unexpected end of the document within a single quoted scalar"):(S.position++,et=S.position);mt(S,"unexpected end of the stream within a single quoted scalar")}function Ke(S,W){var Q,ut,et,ct,L,q;if(q=S.input.charCodeAt(S.position),q!==34)return!1;for(S.kind="scalar",S.result="",S.position++,Q=ut=S.position;(q=S.input.charCodeAt(S.position))!==0;){if(q===34)return pe(S,Q,S.position,!0),S.position++,!0;if(q===92){if(pe(S,Q,S.position,!0),q=S.input.charCodeAt(++S.position),$t(q))Wt(S,!1,W);else if(q<256&&Dn[q])S.result+=yn[q],S.position++;else if((L=Nn(q))>0){for(et=L,ct=0;et>0;et--)q=S.input.charCodeAt(++S.position),(L=er(q))>=0?ct=(ct<<4)+L:mt(S,"expected hexadecimal character");S.result+=vn(ct),S.position++}else mt(S,"unknown escape sequence");Q=ut=S.position}else $t(q)?(pe(S,Q,ut,!0),Pe(S,Wt(S,!1,W)),Q=ut=S.position):S.position===S.lineStart&&_e(S)?mt(S,"unexpected end of the document within a double quoted scalar"):(S.position++,ut=S.position)}mt(S,"unexpected end of the stream within a double quoted scalar")}function xn(S,W){var Q=!0,ut,et=S.tag,ct,L=S.anchor,q,K,st,it,X,at={},nt,dt,xt,wt;if(wt=S.input.charCodeAt(S.position),wt===91)K=93,X=!1,ct=[];else if(wt===123)K=125,X=!0,ct={};else return!1;for(S.anchor!==null&&(S.anchorMap[S.anchor]=ct),wt=S.input.charCodeAt(++S.position);wt!==0;){if(Wt(S,!0,W),wt=S.input.charCodeAt(S.position),wt===K)return S.position++,S.tag=et,S.anchor=L,S.kind=X?"mapping":"sequence",S.result=ct,!0;Q||mt(S,"missed comma between flow collection entries"),dt=nt=xt=null,st=it=!1,wt===63&&(q=S.input.charCodeAt(S.position+1),Pt(q)&&(st=it=!0,S.position++,Wt(S,!0,W))),ut=S.line,ge(S,W,B,!1,!0),dt=S.tag,nt=S.result,Wt(S,!0,W),wt=S.input.charCodeAt(S.position),(it||S.line===ut)&&wt===58&&(st=!0,wt=S.input.charCodeAt(++S.position),Wt(S,!0,W),ge(S,W,B,!1,!0),xt=S.result),X?ne(S,ct,at,dt,nt,xt):st?ct.push(ne(S,null,at,dt,nt,xt)):ct.push(nt),Wt(S,!0,W),wt=S.input.charCodeAt(S.position),wt===44?(Q=!0,wt=S.input.charCodeAt(++S.position)):Q=!1}mt(S,"unexpected end of the stream within a flow collection")}function se(S,W){var Q,ut,et=j,ct=!1,L=!1,q=W,K=0,st=!1,it,X;if(X=S.input.charCodeAt(S.position),X===124)ut=!1;else if(X===62)ut=!0;else return!1;for(S.kind="scalar",S.result="";X!==0;)if(X=S.input.charCodeAt(++S.position),X===43||X===45)j===et?et=X===43?lt:ot:mt(S,"repeat of a chomping mode identifier");else if((it=Rn(X))>=0)it===0?mt(S,"bad explicit indentation width of a block scalar; it cannot be less than one"):L?mt(S,"repeat of an indentation width identifier"):(q=W+it-1,L=!0);else break;if(Gt(X)){do X=S.input.charCodeAt(++S.position);while(Gt(X));if(X===35)do X=S.input.charCodeAt(++S.position);while(!$t(X)&&X!==0)}for(;X!==0;){for(ue(S),S.lineIndent=0,X=S.input.charCodeAt(S.position);(!L||S.lineIndent<q)&&X===32;)S.lineIndent++,X=S.input.charCodeAt(++S.position);if(!L&&S.lineIndent>q&&(q=S.lineIndent),$t(X)){K++;continue}if(S.lineIndent<q){et===lt?S.result+=v.repeat(`
`,ct?1+K:K):et===j&&ct&&(S.result+=`
`);break}for(ut?Gt(X)?(st=!0,S.result+=v.repeat(`
`,ct?1+K:K)):st?(st=!1,S.result+=v.repeat(`
`,K+1)):K===0?ct&&(S.result+=" "):S.result+=v.repeat(`
`,K):S.result+=v.repeat(`
`,ct?1+K:K),ct=!0,L=!0,K=0,Q=S.position;!$t(X)&&X!==0;)X=S.input.charCodeAt(++S.position);pe(S,Q,S.position,!1)}return!0}function xe(S,W){var Q,ut=S.tag,et=S.anchor,ct=[],L,q=!1,K;for(S.anchor!==null&&(S.anchorMap[S.anchor]=ct),K=S.input.charCodeAt(S.position);K!==0&&!(K!==45||(L=S.input.charCodeAt(S.position+1),!Pt(L)));){if(q=!0,S.position++,Wt(S,!0,-1)&&S.lineIndent<=W){ct.push(null),K=S.input.charCodeAt(S.position);continue}if(Q=S.line,ge(S,W,$,!1,!0),ct.push(S.result),Wt(S,!0,-1),K=S.input.charCodeAt(S.position),(S.line===Q||S.lineIndent>W)&&K!==0)mt(S,"bad indentation of a sequence entry");else if(S.lineIndent<W)break}return q?(S.tag=ut,S.anchor=et,S.kind="sequence",S.result=ct,!0):!1}function nr(S,W,Q){var ut,et,ct,L,q=S.tag,K=S.anchor,st={},it={},X=null,at=null,nt=null,dt=!1,xt=!1,wt;for(S.anchor!==null&&(S.anchorMap[S.anchor]=st),wt=S.input.charCodeAt(S.position);wt!==0;){if(ut=S.input.charCodeAt(S.position+1),ct=S.line,L=S.position,(wt===63||wt===58)&&Pt(ut))wt===63?(dt&&(ne(S,st,it,X,at,null),X=at=nt=null),xt=!0,dt=!0,et=!0):dt?(dt=!1,et=!0):mt(S,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),S.position+=1,wt=ut;else if(ge(S,Q,z,!1,!0))if(S.line===ct){for(wt=S.input.charCodeAt(S.position);Gt(wt);)wt=S.input.charCodeAt(++S.position);if(wt===58)wt=S.input.charCodeAt(++S.position),Pt(wt)||mt(S,"a whitespace character is expected after the key-value separator within a block mapping"),dt&&(ne(S,st,it,X,at,null),X=at=nt=null),xt=!0,dt=!1,et=!1,X=S.tag,at=S.result;else if(xt)mt(S,"can not read an implicit mapping pair; a colon is missed");else return S.tag=q,S.anchor=K,!0}else if(xt)mt(S,"can not read a block mapping entry; a multiline key may not be an implicit key");else return S.tag=q,S.anchor=K,!0;else break;if((S.line===ct||S.lineIndent>W)&&(ge(S,W,H,!0,et)&&(dt?at=S.result:nt=S.result),dt||(ne(S,st,it,X,at,nt,ct,L),X=at=nt=null),Wt(S,!0,-1),wt=S.input.charCodeAt(S.position)),S.lineIndent>W&&wt!==0)mt(S,"bad indentation of a mapping entry");else if(S.lineIndent<W)break}return dt&&ne(S,st,it,X,at,null),xt&&(S.tag=q,S.anchor=K,S.kind="mapping",S.result=st),xt}function we(S){var W,Q=!1,ut=!1,et,ct,L;if(L=S.input.charCodeAt(S.position),L!==33)return!1;if(S.tag!==null&&mt(S,"duplication of a tag property"),L=S.input.charCodeAt(++S.position),L===60?(Q=!0,L=S.input.charCodeAt(++S.position)):L===33?(ut=!0,et="!!",L=S.input.charCodeAt(++S.position)):et="!",W=S.position,Q){do L=S.input.charCodeAt(++S.position);while(L!==0&&L!==62);S.position<S.length?(ct=S.input.slice(W,S.position),L=S.input.charCodeAt(++S.position)):mt(S,"unexpected end of the stream within a verbatim tag")}else{for(;L!==0&&!Pt(L);)L===33&&(ut?mt(S,"tag suffix cannot contain exclamation marks"):(et=S.input.slice(W-1,S.position+1),Mt.test(et)||mt(S,"named tag handle cannot contain such characters"),ut=!0,W=S.position+1)),L=S.input.charCodeAt(++S.position);ct=S.input.slice(W,S.position),Tt.test(ct)&&mt(S,"tag suffix cannot contain flow indicator characters")}return ct&&!Ht.test(ct)&&mt(S,"tag name cannot contain such characters: "+ct),Q?S.tag=ct:M.call(S.tagMap,et)?S.tag=S.tagMap[et]+ct:et==="!"?S.tag="!"+ct:et==="!!"?S.tag="tag:yaml.org,2002:"+ct:mt(S,'undeclared tag handle "'+et+'"'),!0}function wn(S){var W,Q;if(Q=S.input.charCodeAt(S.position),Q!==38)return!1;for(S.anchor!==null&&mt(S,"duplication of an anchor property"),Q=S.input.charCodeAt(++S.position),W=S.position;Q!==0&&!Pt(Q)&&!de(Q);)Q=S.input.charCodeAt(++S.position);return S.position===W&&mt(S,"name of an anchor node must contain at least one character"),S.anchor=S.input.slice(W,S.position),!0}function Pn(S){var W,Q,ut;if(ut=S.input.charCodeAt(S.position),ut!==42)return!1;for(ut=S.input.charCodeAt(++S.position),W=S.position;ut!==0&&!Pt(ut)&&!de(ut);)ut=S.input.charCodeAt(++S.position);return S.position===W&&mt(S,"name of an alias node must contain at least one character"),Q=S.input.slice(W,S.position),M.call(S.anchorMap,Q)||mt(S,'unidentified alias "'+Q+'"'),S.result=S.anchorMap[Q],Wt(S,!0,-1),!0}function ge(S,W,Q,ut,et){var ct,L,q,K=1,st=!1,it=!1,X,at,nt,dt,xt;if(S.listener!==null&&S.listener("open",S),S.tag=null,S.anchor=null,S.kind=null,S.result=null,ct=L=q=H===Q||$===Q,ut&&Wt(S,!0,-1)&&(st=!0,S.lineIndent>W?K=1:S.lineIndent===W?K=0:S.lineIndent<W&&(K=-1)),K===1)for(;we(S)||wn(S);)Wt(S,!0,-1)?(st=!0,q=ct,S.lineIndent>W?K=1:S.lineIndent===W?K=0:S.lineIndent<W&&(K=-1)):q=!1;if(q&&(q=st||et),(K===1||H===Q)&&(B===Q||z===Q?dt=W:dt=W+1,xt=S.position-S.lineStart,K===1?q&&(xe(S,xt)||nr(S,xt,dt))||xn(S,dt)?it=!0:(L&&se(S,dt)||Ye(S,dt)||Ke(S,dt)?it=!0:Pn(S)?(it=!0,(S.tag!==null||S.anchor!==null)&&mt(S,"alias node should not have any properties")):$n(S,dt,B===Q)&&(it=!0,S.tag===null&&(S.tag="?")),S.anchor!==null&&(S.anchorMap[S.anchor]=S.result)):K===0&&(it=q&&xe(S,xt))),S.tag!==null&&S.tag!=="!")if(S.tag==="?"){for(S.result!==null&&S.kind!=="scalar"&&mt(S,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+S.kind+'"'),X=0,at=S.implicitTypes.length;X<at;X+=1)if(nt=S.implicitTypes[X],nt.resolve(S.result)){S.result=nt.construct(S.result),S.tag=nt.tag,S.anchor!==null&&(S.anchorMap[S.anchor]=S.result);break}}else M.call(S.typeMap[S.kind||"fallback"],S.tag)?(nt=S.typeMap[S.kind||"fallback"][S.tag],S.result!==null&&nt.kind!==S.kind&&mt(S,"unacceptable node kind for !<"+S.tag+'> tag; it should be "'+nt.kind+'", not "'+S.kind+'"'),nt.resolve(S.result)?(S.result=nt.construct(S.result),S.anchor!==null&&(S.anchorMap[S.anchor]=S.result)):mt(S,"cannot resolve a node with !<"+S.tag+"> explicit tag")):mt(S,"unknown tag !<"+S.tag+">");return S.listener!==null&&S.listener("close",S),S.tag!==null||S.anchor!==null||it}function oe(S){var W=S.position,Q,ut,et,ct=!1,L;for(S.version=null,S.checkLineBreaks=S.legacy,S.tagMap={},S.anchorMap={};(L=S.input.charCodeAt(S.position))!==0&&(Wt(S,!0,-1),L=S.input.charCodeAt(S.position),!(S.lineIndent>0||L!==37));){for(ct=!0,L=S.input.charCodeAt(++S.position),Q=S.position;L!==0&&!Pt(L);)L=S.input.charCodeAt(++S.position);for(ut=S.input.slice(Q,S.position),et=[],ut.length<1&&mt(S,"directive name must not be less than one character in length");L!==0;){for(;Gt(L);)L=S.input.charCodeAt(++S.position);if(L===35){do L=S.input.charCodeAt(++S.position);while(L!==0&&!$t(L));break}if($t(L))break;for(Q=S.position;L!==0&&!Pt(L);)L=S.input.charCodeAt(++S.position);et.push(S.input.slice(Q,S.position))}L!==0&&ue(S),M.call(_n,ut)?_n[ut](S,ut,et):ee(S,'unknown document directive "'+ut+'"')}if(Wt(S,!0,-1),S.lineIndent===0&&S.input.charCodeAt(S.position)===45&&S.input.charCodeAt(S.position+1)===45&&S.input.charCodeAt(S.position+2)===45?(S.position+=3,Wt(S,!0,-1)):ct&&mt(S,"directives end mark is expected"),ge(S,S.lineIndent-1,H,!1,!0),Wt(S,!0,-1),S.checkLineBreaks&&ft.test(S.input.slice(W,S.position))&&ee(S,"non-ASCII line breaks are interpreted as content"),S.documents.push(S.result),S.position===S.lineStart&&_e(S)){S.input.charCodeAt(S.position)===46&&(S.position+=3,Wt(S,!0,-1));return}if(S.position<S.length-1)mt(S,"end of the stream or a document separator is expected");else return}function Ge(S,W){S=String(S),W=W||{},S.length!==0&&(S.charCodeAt(S.length-1)!==10&&S.charCodeAt(S.length-1)!==13&&(S+=`
`),S.charCodeAt(0)===65279&&(S=S.slice(1)));var Q=new Ie(S,W),ut=S.indexOf("\0");for(ut!==-1&&(Q.position=ut,mt(Q,"null byte is not allowed in input")),Q.input+="\0";Q.input.charCodeAt(Q.position)===32;)Q.lineIndent+=1,Q.position+=1;for(;Q.position<Q.length-1;)oe(Q);return Q.documents}function Je(S,W,Q){W!==null&&typeof W=="object"&&typeof Q>"u"&&(Q=W,W=null);var ut=Ge(S,Q);if(typeof W!="function")return ut;for(var et=0,ct=ut.length;et<ct;et+=1)W(ut[et])}function zn(S,W){var Q=Ge(S,W);if(Q.length!==0){if(Q.length===1)return Q[0];throw new C("expected a single document in the stream, but found more")}}function Xe(S,W,Q){return typeof W=="object"&&W!==null&&typeof Q>"u"&&(Q=W,W=null),Je(S,W,v.extend({schema:O},Q))}function rr(S,W){return zn(S,v.extend({schema:O},W))}s.exports.loadAll=Je,s.exports.load=zn,s.exports.safeLoadAll=Xe,s.exports.safeLoad=rr},{"./common":3,"./exception":5,"./mark":7,"./schema/default_full":10,"./schema/default_safe":11}],7:[function(m,s,d){var v=m("./common");function C(T,O,N,M,B){this.name=T,this.buffer=O,this.position=N,this.line=M,this.column=B}C.prototype.getSnippet=function(O,N){var M,B,z,$,H;if(!this.buffer)return null;for(O=O||4,N=N||75,M="",B=this.position;B>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(B-1))===-1;)if(B-=1,this.position-B>N/2-1){M=" ... ",B+=5;break}for(z="",$=this.position;$<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt($))===-1;)if($+=1,$-this.position>N/2-1){z=" ... ",$-=5;break}return H=this.buffer.slice(B,$),v.repeat(" ",O)+M+H+z+`
`+v.repeat(" ",O+this.position-B+M.length)+"^"},C.prototype.toString=function(O){var N,M="";return this.name&&(M+='in "'+this.name+'" '),M+="at line "+(this.line+1)+", column "+(this.column+1),O||(N=this.getSnippet(),N&&(M+=`:
`+N)),M},s.exports=C},{"./common":3}],8:[function(m,s,d){var v=m("./common"),C=m("./exception"),T=m("./type");function O(B,z,$){var H=[];return B.include.forEach(function(j){$=O(j,z,$)}),B[z].forEach(function(j){$.forEach(function(ot,lt){ot.tag===j.tag&&ot.kind===j.kind&&H.push(lt)}),$.push(j)}),$.filter(function(j,ot){return H.indexOf(ot)===-1})}function N(){var B={scalar:{},sequence:{},mapping:{},fallback:{}},z,$;function H(j){B[j.kind][j.tag]=B.fallback[j.tag]=j}for(z=0,$=arguments.length;z<$;z+=1)arguments[z].forEach(H);return B}function M(B){this.include=B.include||[],this.implicit=B.implicit||[],this.explicit=B.explicit||[],this.implicit.forEach(function(z){if(z.loadKind&&z.loadKind!=="scalar")throw new C("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=O(this,"implicit",[]),this.compiledExplicit=O(this,"explicit",[]),this.compiledTypeMap=N(this.compiledImplicit,this.compiledExplicit)}M.DEFAULT=null,M.create=function(){var z,$;switch(arguments.length){case 1:z=M.DEFAULT,$=arguments[0];break;case 2:z=arguments[0],$=arguments[1];break;default:throw new C("Wrong number of arguments for Schema.create function")}if(z=v.toArray(z),$=v.toArray($),!z.every(function(H){return H instanceof M}))throw new C("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!$.every(function(H){return H instanceof T}))throw new C("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new M({include:z,explicit:$})},s.exports=M},{"./common":3,"./exception":5,"./type":14}],9:[function(m,s,d){var v=m("../schema");s.exports=new v({include:[m("./json")]})},{"../schema":8,"./json":13}],10:[function(m,s,d){var v=m("../schema");s.exports=v.DEFAULT=new v({include:[m("./default_safe")],explicit:[m("../type/js/undefined"),m("../type/js/regexp"),m("../type/js/function")]})},{"../schema":8,"../type/js/function":19,"../type/js/regexp":20,"../type/js/undefined":21,"./default_safe":11}],11:[function(m,s,d){var v=m("../schema");s.exports=new v({include:[m("./core")],implicit:[m("../type/timestamp"),m("../type/merge")],explicit:[m("../type/binary"),m("../type/omap"),m("../type/pairs"),m("../type/set")]})},{"../schema":8,"../type/binary":15,"../type/merge":23,"../type/omap":25,"../type/pairs":26,"../type/set":28,"../type/timestamp":30,"./core":9}],12:[function(m,s,d){var v=m("../schema");s.exports=new v({explicit:[m("../type/str"),m("../type/seq"),m("../type/map")]})},{"../schema":8,"../type/map":22,"../type/seq":27,"../type/str":29}],13:[function(m,s,d){var v=m("../schema");s.exports=new v({include:[m("./failsafe")],implicit:[m("../type/null"),m("../type/bool"),m("../type/int"),m("../type/float")]})},{"../schema":8,"../type/bool":16,"../type/float":17,"../type/int":18,"../type/null":24,"./failsafe":12}],14:[function(m,s,d){var v=m("./exception"),C=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],T=["scalar","sequence","mapping"];function O(M){var B={};return M!==null&&Object.keys(M).forEach(function(z){M[z].forEach(function($){B[String($)]=z})}),B}function N(M,B){if(B=B||{},Object.keys(B).forEach(function(z){if(C.indexOf(z)===-1)throw new v('Unknown option "'+z+'" is met in definition of "'+M+'" YAML type.')}),this.tag=M,this.kind=B.kind||null,this.resolve=B.resolve||function(){return!0},this.construct=B.construct||function(z){return z},this.instanceOf=B.instanceOf||null,this.predicate=B.predicate||null,this.represent=B.represent||null,this.defaultStyle=B.defaultStyle||null,this.styleAliases=O(B.styleAliases||null),T.indexOf(this.kind)===-1)throw new v('Unknown kind "'+this.kind+'" is specified for "'+M+'" YAML type.')}s.exports=N},{"./exception":5}],15:[function(m,s,d){var v;try{var C=m;v=C("buffer").Buffer}catch{}var T=m("../type"),O=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function N($){if($===null)return!1;var H,j,ot=0,lt=$.length,bt=O;for(j=0;j<lt;j++)if(H=bt.indexOf($.charAt(j)),!(H>64)){if(H<0)return!1;ot+=6}return ot%8===0}function M($){var H,j,ot=$.replace(/[\r\n=]/g,""),lt=ot.length,bt=O,ft=0,Tt=[];for(H=0;H<lt;H++)H%4===0&&H&&(Tt.push(ft>>16&255),Tt.push(ft>>8&255),Tt.push(ft&255)),ft=ft<<6|bt.indexOf(ot.charAt(H));return j=lt%4*6,j===0?(Tt.push(ft>>16&255),Tt.push(ft>>8&255),Tt.push(ft&255)):j===18?(Tt.push(ft>>10&255),Tt.push(ft>>2&255)):j===12&&Tt.push(ft>>4&255),v?v.from?v.from(Tt):new v(Tt):Tt}function B($){var H="",j=0,ot,lt,bt=$.length,ft=O;for(ot=0;ot<bt;ot++)ot%3===0&&ot&&(H+=ft[j>>18&63],H+=ft[j>>12&63],H+=ft[j>>6&63],H+=ft[j&63]),j=(j<<8)+$[ot];return lt=bt%3,lt===0?(H+=ft[j>>18&63],H+=ft[j>>12&63],H+=ft[j>>6&63],H+=ft[j&63]):lt===2?(H+=ft[j>>10&63],H+=ft[j>>4&63],H+=ft[j<<2&63],H+=ft[64]):lt===1&&(H+=ft[j>>2&63],H+=ft[j<<4&63],H+=ft[64],H+=ft[64]),H}function z($){return v&&v.isBuffer($)}s.exports=new T("tag:yaml.org,2002:binary",{kind:"scalar",resolve:N,construct:M,predicate:z,represent:B})},{"../type":14}],16:[function(m,s,d){var v=m("../type");function C(N){if(N===null)return!1;var M=N.length;return M===4&&(N==="true"||N==="True"||N==="TRUE")||M===5&&(N==="false"||N==="False"||N==="FALSE")}function T(N){return N==="true"||N==="True"||N==="TRUE"}function O(N){return Object.prototype.toString.call(N)==="[object Boolean]"}s.exports=new v("tag:yaml.org,2002:bool",{kind:"scalar",resolve:C,construct:T,predicate:O,represent:{lowercase:function(N){return N?"true":"false"},uppercase:function(N){return N?"TRUE":"FALSE"},camelcase:function(N){return N?"True":"False"}},defaultStyle:"lowercase"})},{"../type":14}],17:[function(m,s,d){var v=m("../common"),C=m("../type"),T=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function O($){return!($===null||!T.test($)||$[$.length-1]==="_")}function N($){var H,j,ot,lt;return H=$.replace(/_/g,"").toLowerCase(),j=H[0]==="-"?-1:1,lt=[],"+-".indexOf(H[0])>=0&&(H=H.slice(1)),H===".inf"?j===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:H===".nan"?NaN:H.indexOf(":")>=0?(H.split(":").forEach(function(bt){lt.unshift(parseFloat(bt,10))}),H=0,ot=1,lt.forEach(function(bt){H+=bt*ot,ot*=60}),j*H):j*parseFloat(H,10)}var M=/^[-+]?[0-9]+e/;function B($,H){var j;if(isNaN($))switch(H){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===$)switch(H){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===$)switch(H){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(v.isNegativeZero($))return"-0.0";return j=$.toString(10),M.test(j)?j.replace("e",".e"):j}function z($){return Object.prototype.toString.call($)==="[object Number]"&&($%1!==0||v.isNegativeZero($))}s.exports=new C("tag:yaml.org,2002:float",{kind:"scalar",resolve:O,construct:N,predicate:z,represent:B,defaultStyle:"lowercase"})},{"../common":3,"../type":14}],18:[function(m,s,d){var v=m("../common"),C=m("../type");function T($){return 48<=$&&$<=57||65<=$&&$<=70||97<=$&&$<=102}function O($){return 48<=$&&$<=55}function N($){return 48<=$&&$<=57}function M($){if($===null)return!1;var H=$.length,j=0,ot=!1,lt;if(!H)return!1;if(lt=$[j],(lt==="-"||lt==="+")&&(lt=$[++j]),lt==="0"){if(j+1===H)return!0;if(lt=$[++j],lt==="b"){for(j++;j<H;j++)if(lt=$[j],lt!=="_"){if(lt!=="0"&&lt!=="1")return!1;ot=!0}return ot&&lt!=="_"}if(lt==="x"){for(j++;j<H;j++)if(lt=$[j],lt!=="_"){if(!T($.charCodeAt(j)))return!1;ot=!0}return ot&&lt!=="_"}for(;j<H;j++)if(lt=$[j],lt!=="_"){if(!O($.charCodeAt(j)))return!1;ot=!0}return ot&&lt!=="_"}if(lt==="_")return!1;for(;j<H;j++)if(lt=$[j],lt!=="_"){if(lt===":")break;if(!N($.charCodeAt(j)))return!1;ot=!0}return!ot||lt==="_"?!1:lt!==":"?!0:/^(:[0-5]?[0-9])+$/.test($.slice(j))}function B($){var H=$,j=1,ot,lt,bt=[];return H.indexOf("_")!==-1&&(H=H.replace(/_/g,"")),ot=H[0],(ot==="-"||ot==="+")&&(ot==="-"&&(j=-1),H=H.slice(1),ot=H[0]),H==="0"?0:ot==="0"?H[1]==="b"?j*parseInt(H.slice(2),2):H[1]==="x"?j*parseInt(H,16):j*parseInt(H,8):H.indexOf(":")!==-1?(H.split(":").forEach(function(ft){bt.unshift(parseInt(ft,10))}),H=0,lt=1,bt.forEach(function(ft){H+=ft*lt,lt*=60}),j*H):j*parseInt(H,10)}function z($){return Object.prototype.toString.call($)==="[object Number]"&&$%1===0&&!v.isNegativeZero($)}s.exports=new C("tag:yaml.org,2002:int",{kind:"scalar",resolve:M,construct:B,predicate:z,represent:{binary:function($){return $>=0?"0b"+$.toString(2):"-0b"+$.toString(2).slice(1)},octal:function($){return $>=0?"0"+$.toString(8):"-0"+$.toString(8).slice(1)},decimal:function($){return $.toString(10)},hexadecimal:function($){return $>=0?"0x"+$.toString(16).toUpperCase():"-0x"+$.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},{"../common":3,"../type":14}],19:[function(m,s,d){var v;try{var C=m;v=C("esprima")}catch{typeof window<"u"&&(v=window.esprima)}var T=m("../../type");function O(z){if(z===null)return!1;try{var $="("+z+")",H=v.parse($,{range:!0});return!(H.type!=="Program"||H.body.length!==1||H.body[0].type!=="ExpressionStatement"||H.body[0].expression.type!=="ArrowFunctionExpression"&&H.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function N(z){var $="("+z+")",H=v.parse($,{range:!0}),j=[],ot;if(H.type!=="Program"||H.body.length!==1||H.body[0].type!=="ExpressionStatement"||H.body[0].expression.type!=="ArrowFunctionExpression"&&H.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return H.body[0].expression.params.forEach(function(lt){j.push(lt.name)}),ot=H.body[0].expression.body.range,H.body[0].expression.body.type==="BlockStatement"?new Function(j,$.slice(ot[0]+1,ot[1]-1)):new Function(j,"return "+$.slice(ot[0],ot[1]))}function M(z){return z.toString()}function B(z){return Object.prototype.toString.call(z)==="[object Function]"}s.exports=new T("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:O,construct:N,predicate:B,represent:M})},{"../../type":14}],20:[function(m,s,d){var v=m("../../type");function C(M){if(M===null||M.length===0)return!1;var B=M,z=/\/([gim]*)$/.exec(M),$="";return!(B[0]==="/"&&(z&&($=z[1]),$.length>3||B[B.length-$.length-1]!=="/"))}function T(M){var B=M,z=/\/([gim]*)$/.exec(M),$="";return B[0]==="/"&&(z&&($=z[1]),B=B.slice(1,B.length-$.length-1)),new RegExp(B,$)}function O(M){var B="/"+M.source+"/";return M.global&&(B+="g"),M.multiline&&(B+="m"),M.ignoreCase&&(B+="i"),B}function N(M){return Object.prototype.toString.call(M)==="[object RegExp]"}s.exports=new v("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:C,construct:T,predicate:N,represent:O})},{"../../type":14}],21:[function(m,s,d){var v=m("../../type");function C(){return!0}function T(){}function O(){return""}function N(M){return typeof M>"u"}s.exports=new v("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:C,construct:T,predicate:N,represent:O})},{"../../type":14}],22:[function(m,s,d){var v=m("../type");s.exports=new v("tag:yaml.org,2002:map",{kind:"mapping",construct:function(C){return C!==null?C:{}}})},{"../type":14}],23:[function(m,s,d){var v=m("../type");function C(T){return T==="<<"||T===null}s.exports=new v("tag:yaml.org,2002:merge",{kind:"scalar",resolve:C})},{"../type":14}],24:[function(m,s,d){var v=m("../type");function C(N){if(N===null)return!0;var M=N.length;return M===1&&N==="~"||M===4&&(N==="null"||N==="Null"||N==="NULL")}function T(){return null}function O(N){return N===null}s.exports=new v("tag:yaml.org,2002:null",{kind:"scalar",resolve:C,construct:T,predicate:O,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"})},{"../type":14}],25:[function(m,s,d){var v=m("../type"),C=Object.prototype.hasOwnProperty,T=Object.prototype.toString;function O(M){if(M===null)return!0;var B=[],z,$,H,j,ot,lt=M;for(z=0,$=lt.length;z<$;z+=1){if(H=lt[z],ot=!1,T.call(H)!=="[object Object]")return!1;for(j in H)if(C.call(H,j))if(!ot)ot=!0;else return!1;if(!ot)return!1;if(B.indexOf(j)===-1)B.push(j);else return!1}return!0}function N(M){return M!==null?M:[]}s.exports=new v("tag:yaml.org,2002:omap",{kind:"sequence",resolve:O,construct:N})},{"../type":14}],26:[function(m,s,d){var v=m("../type"),C=Object.prototype.toString;function T(N){if(N===null)return!0;var M,B,z,$,H,j=N;for(H=new Array(j.length),M=0,B=j.length;M<B;M+=1){if(z=j[M],C.call(z)!=="[object Object]"||($=Object.keys(z),$.length!==1))return!1;H[M]=[$[0],z[$[0]]]}return!0}function O(N){if(N===null)return[];var M,B,z,$,H,j=N;for(H=new Array(j.length),M=0,B=j.length;M<B;M+=1)z=j[M],$=Object.keys(z),H[M]=[$[0],z[$[0]]];return H}s.exports=new v("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:T,construct:O})},{"../type":14}],27:[function(m,s,d){var v=m("../type");s.exports=new v("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(C){return C!==null?C:[]}})},{"../type":14}],28:[function(m,s,d){var v=m("../type"),C=Object.prototype.hasOwnProperty;function T(N){if(N===null)return!0;var M,B=N;for(M in B)if(C.call(B,M)&&B[M]!==null)return!1;return!0}function O(N){return N!==null?N:{}}s.exports=new v("tag:yaml.org,2002:set",{kind:"mapping",resolve:T,construct:O})},{"../type":14}],29:[function(m,s,d){var v=m("../type");s.exports=new v("tag:yaml.org,2002:str",{kind:"scalar",construct:function(C){return C!==null?C:""}})},{"../type":14}],30:[function(m,s,d){var v=m("../type"),C=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),T=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function O(B){return B===null?!1:C.exec(B)!==null||T.exec(B)!==null}function N(B){var z,$,H,j,ot,lt,bt,ft=0,Tt=null,Mt,Ht,Bt;if(z=C.exec(B),z===null&&(z=T.exec(B)),z===null)throw new Error("Date resolve error");if($=+z[1],H=+z[2]-1,j=+z[3],!z[4])return new Date(Date.UTC($,H,j));if(ot=+z[4],lt=+z[5],bt=+z[6],z[7]){for(ft=z[7].slice(0,3);ft.length<3;)ft+="0";ft=+ft}return z[9]&&(Mt=+z[10],Ht=+(z[11]||0),Tt=(Mt*60+Ht)*6e4,z[9]==="-"&&(Tt=-Tt)),Bt=new Date(Date.UTC($,H,j,ot,lt,bt,ft)),Tt&&Bt.setTime(Bt.getTime()-Tt),Bt}function M(B){return B.toISOString()}s.exports=new v("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:O,construct:N,instanceOf:Date,represent:M})},{"../type":14}]},{},[1]);function nodeToJSL(m){if(m.nodeType===document.TEXT_NODE||m.nodeType===document.COMMENT_NODE){let s=m.textContent.replace(/\n/g," ").replace(/\t/g," ").replace(/\s\s+/g," ").trim();return s===""?void 0:`"${s}"`}else{let s=m.getAttributeNames(),d={};for(let T=0;T<s.length;T++)m.getAttribute(s[T])!=="undefined"&&(d[s[T]]=m.getAttribute(s[T]));let v=[];for(let T=0;T<m.childNodes.length;T++)nodeToJSL(m.childNodes[T])&&v.push(nodeToJSL(m.childNodes[T]));let C=m.tagName.replace(/\-/g,"_");return formatJSLResult(C,d,v)}}function tab(m){let s=m.replace(/\n/g,`
	`);return s[0]!==`
`&&(s=`	${s}`),s}function getAttrsAsString(m){return Object.keys(m).length>3?JSON.stringify(m,null,2):JSON.stringify(m)}function getArgsString(m){let s="";for(let d=0;d<m.length;d++)s+=`${m[d]}`,d!==m.length-1&&(s+=`,
`);return s}function formatJSLResult(m,s,d){let v=getAttrsAsString(s),C=getArgsString(d),T=/\n/.test(C),O,N=!1,M=v!=="{}";return M?((v.indexOf(`
`)!=-1||v.length>50)&&(N=!0),N?O=`
${tab(v)}${d.length?",":""}`:O=`${v}${d.length?",":""}`):O="",`${m}( ${O}${T?`
${tab(C)}
`:`${M?" ":""}${C}`} )`}const methods$1={},names=[];function registerMethods(m,s){if(Array.isArray(m)){for(const d of m)registerMethods(d,s);return}if(typeof m=="object"){for(const d in m)registerMethods(d,m[d]);return}addMethodNames(Object.getOwnPropertyNames(s)),methods$1[m]=Object.assign(methods$1[m]||{},s)}function getMethodsFor(m){return methods$1[m]||{}}function getMethodNames(){return[...new Set(names)]}function addMethodNames(m){names.push(...m)}function map(m,s){let d;const v=m.length,C=[];for(d=0;d<v;d++)C.push(s(m[d]));return C}function filter(m,s){let d;const v=m.length,C=[];for(d=0;d<v;d++)s(m[d])&&C.push(m[d]);return C}function radians(m){return m%360*Math.PI/180}function camelCase(m){return m.toLowerCase().replace(/-(.)/g,function(s,d){return d.toUpperCase()})}function unCamelCase(m){return m.replace(/([A-Z])/g,function(s,d){return"-"+d.toLowerCase()})}function capitalize(m){return m.charAt(0).toUpperCase()+m.slice(1)}function proportionalSize(m,s,d,v){return(s==null||d==null)&&(v=v||m.bbox(),s==null?s=v.width/v.height*d:d==null&&(d=v.height/v.width*s)),{width:s,height:d}}function getOrigin(m,s){const d=m.origin;let v=m.ox!=null?m.ox:m.originX!=null?m.originX:"center",C=m.oy!=null?m.oy:m.originY!=null?m.originY:"center";d!=null&&([v,C]=Array.isArray(d)?d:typeof d=="object"?[d.x,d.y]:[d,d]);const T=typeof v=="string",O=typeof C=="string";if(T||O){const{height:N,width:M,x:B,y:z}=s.bbox();T&&(v=v.includes("left")?B:v.includes("right")?B+M:B+M/2),O&&(C=C.includes("top")?z:C.includes("bottom")?z+N:z+N/2)}return[v,C]}const svg="http://www.w3.org/2000/svg",html$1="http://www.w3.org/1999/xhtml",xmlns="http://www.w3.org/2000/xmlns/",xlink="http://www.w3.org/1999/xlink",svgjs="http://svgjs.dev/svgjs",globals={window:typeof window>"u"?null:window,document:typeof document>"u"?null:document};class Base{}const elements={},root="___SYMBOL___ROOT___";function create(m,s=svg){return globals.document.createElementNS(s,m)}function makeInstance(m,s=!1){if(m instanceof Base)return m;if(typeof m=="object")return adopter(m);if(m==null)return new elements[root];if(typeof m=="string"&&m.charAt(0)!=="<")return adopter(globals.document.querySelector(m));const d=s?globals.document.createElement("div"):create("svg");return d.innerHTML=m,m=adopter(d.firstChild),d.removeChild(d.firstChild),m}function nodeOrNew(m,s){return s&&s.ownerDocument&&s instanceof s.ownerDocument.defaultView.Node?s:create(m)}function adopt(m){if(!m)return null;if(m.instance instanceof Base)return m.instance;if(m.nodeName==="#document-fragment")return new elements.Fragment(m);let s=capitalize(m.nodeName||"Dom");return s==="LinearGradient"||s==="RadialGradient"?s="Gradient":elements[s]||(s="Dom"),new elements[s](m)}let adopter=adopt;function register(m,s=m.name,d=!1){return elements[s]=m,d&&(elements[root]=m),addMethodNames(Object.getOwnPropertyNames(m.prototype)),m}function getClass(m){return elements[m]}let did=1e3;function eid(m){return"Svgjs"+capitalize(m)+did++}function assignNewId(m){for(let s=m.children.length-1;s>=0;s--)assignNewId(m.children[s]);return m.id&&(m.id=eid(m.nodeName)),m}function extend(m,s){let d,v;for(m=Array.isArray(m)?m:[m],v=m.length-1;v>=0;v--)for(d in s)m[v].prototype[d]=s[d]}function wrapWithAttrCheck(m){return function(...s){const d=s[s.length-1];return d&&d.constructor===Object&&!(d instanceof Array)?m.apply(this,s.slice(0,-1)).attr(d):m.apply(this,s)}}function siblings(){return this.parent().children()}function position(){return this.parent().index(this)}function next(){return this.siblings()[this.position()+1]}function prev(){return this.siblings()[this.position()-1]}function forward(){const m=this.position();return this.parent().add(this.remove(),m+1),this}function backward(){const m=this.position();return this.parent().add(this.remove(),m?m-1:0),this}function front(){return this.parent().add(this.remove()),this}function back(){return this.parent().add(this.remove(),0),this}function before(m){m=makeInstance(m),m.remove();const s=this.position();return this.parent().add(m,s),this}function after(m){m=makeInstance(m),m.remove();const s=this.position();return this.parent().add(m,s+1),this}function insertBefore(m){return m=makeInstance(m),m.before(this),this}function insertAfter(m){return m=makeInstance(m),m.after(this),this}registerMethods("Dom",{siblings,position,next,prev,forward,backward,front,back,before,after,insertBefore,insertAfter});const numberAndUnit=/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb=/rgb\((\d+),(\d+),(\d+)\)/,reference=/(#[a-z_][a-z0-9\-_]*)/i,transforms=/\)\s*,?\s*/,whitespace=/\s/g,isHex=/^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i,isRgb=/^rgb\(/,isBlank=/^(\s+)?$/,isNumber=/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isImage=/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter=/[\s,]+/,isPathLetter=/[MLHVCSQTAZ]/i;function classes(){const m=this.attr("class");return m==null?[]:m.trim().split(delimiter)}function hasClass(m){return this.classes().indexOf(m)!==-1}function addClass(m){if(!this.hasClass(m)){const s=this.classes();s.push(m),this.attr("class",s.join(" "))}return this}function removeClass(m){return this.hasClass(m)&&this.attr("class",this.classes().filter(function(s){return s!==m}).join(" ")),this}function toggleClass(m){return this.hasClass(m)?this.removeClass(m):this.addClass(m)}registerMethods("Dom",{classes,hasClass,addClass,removeClass,toggleClass});function css(m,s){const d={};if(arguments.length===0)return this.node.style.cssText.split(/\s*;\s*/).filter(function(v){return!!v.length}).forEach(function(v){const C=v.split(/\s*:\s*/);d[C[0]]=C[1]}),d;if(arguments.length<2){if(Array.isArray(m)){for(const v of m){const C=camelCase(v);d[v]=this.node.style[C]}return d}if(typeof m=="string")return this.node.style[camelCase(m)];if(typeof m=="object")for(const v in m)this.node.style[camelCase(v)]=m[v]==null||isBlank.test(m[v])?"":m[v]}return arguments.length===2&&(this.node.style[camelCase(m)]=s==null||isBlank.test(s)?"":s),this}function show(){return this.css("display","")}function hide(){return this.css("display","none")}function visible(){return this.css("display")!=="none"}registerMethods("Dom",{css,show,hide,visible});function data(m,s,d){if(m==null)return this.data(map(filter(this.node.attributes,v=>v.nodeName.indexOf("data-")===0),v=>v.nodeName.slice(5)));if(m instanceof Array){const v={};for(const C of m)v[C]=this.data(C);return v}else if(typeof m=="object")for(s in m)this.data(s,m[s]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+m))}catch{return this.attr("data-"+m)}else this.attr("data-"+m,s===null?null:d===!0||typeof s=="string"||typeof s=="number"?s:JSON.stringify(s));return this}registerMethods("Dom",{data});function remember(m,s){if(typeof arguments[0]=="object")for(const d in m)this.remember(d,m[d]);else{if(arguments.length===1)return this.memory()[m];this.memory()[m]=s}return this}function forget(){if(arguments.length===0)this._memory={};else for(let m=arguments.length-1;m>=0;m--)delete this.memory()[arguments[m]];return this}function memory(){return this._memory=this._memory||{}}registerMethods("Dom",{remember,forget,memory});function sixDigitHex(m){return m.length===4?["#",m.substring(1,2),m.substring(1,2),m.substring(2,3),m.substring(2,3),m.substring(3,4),m.substring(3,4)].join(""):m}function componentHex(m){const s=Math.round(m),v=Math.max(0,Math.min(255,s)).toString(16);return v.length===1?"0"+v:v}function is(m,s){for(let d=s.length;d--;)if(m[s[d]]==null)return!1;return!0}function getParameters(m,s){const d=is(m,"rgb")?{_a:m.r,_b:m.g,_c:m.b,_d:0,space:"rgb"}:is(m,"xyz")?{_a:m.x,_b:m.y,_c:m.z,_d:0,space:"xyz"}:is(m,"hsl")?{_a:m.h,_b:m.s,_c:m.l,_d:0,space:"hsl"}:is(m,"lab")?{_a:m.l,_b:m.a,_c:m.b,_d:0,space:"lab"}:is(m,"lch")?{_a:m.l,_b:m.c,_c:m.h,_d:0,space:"lch"}:is(m,"cmyk")?{_a:m.c,_b:m.m,_c:m.y,_d:m.k,space:"cmyk"}:{_a:0,_b:0,_c:0,space:"rgb"};return d.space=s||d.space,d}function cieSpace(m){return m==="lab"||m==="xyz"||m==="lch"}function hueToRgb(m,s,d){return d<0&&(d+=1),d>1&&(d-=1),d<1/6?m+(s-m)*6*d:d<1/2?s:d<2/3?m+(s-m)*(2/3-d)*6:m}class Color{constructor(...s){this.init(...s)}static isColor(s){return s&&(s instanceof Color||this.isRgb(s)||this.test(s))}static isRgb(s){return s&&typeof s.r=="number"&&typeof s.g=="number"&&typeof s.b=="number"}static random(s="vibrant",d,v){const{random:C,round:T,sin:O,PI:N}=Math;if(s==="vibrant"){const M=24*C()+57,B=38*C()+45,z=360*C();return new Color(M,B,z,"lch")}else if(s==="sine"){d=d??C();const M=T(80*O(2*N*d/.5+.01)+150),B=T(50*O(2*N*d/.5+4.6)+200),z=T(100*O(2*N*d/.5+2.3)+150);return new Color(M,B,z)}else if(s==="pastel"){const M=8*C()+86,B=17*C()+9,z=360*C();return new Color(M,B,z,"lch")}else if(s==="dark"){const M=10+10*C(),B=50*C()+86,z=360*C();return new Color(M,B,z,"lch")}else if(s==="rgb"){const M=255*C(),B=255*C(),z=255*C();return new Color(M,B,z)}else if(s==="lab"){const M=100*C(),B=256*C()-128,z=256*C()-128;return new Color(M,B,z,"lab")}else if(s==="grey"){const M=255*C();return new Color(M,M,M)}else throw new Error("Unsupported random color mode")}static test(s){return typeof s=="string"&&(isHex.test(s)||isRgb.test(s))}cmyk(){const{_a:s,_b:d,_c:v}=this.rgb(),[C,T,O]=[s,d,v].map(H=>H/255),N=Math.min(1-C,1-T,1-O);if(N===1)return new Color(0,0,0,1,"cmyk");const M=(1-C-N)/(1-N),B=(1-T-N)/(1-N),z=(1-O-N)/(1-N);return new Color(M,B,z,N,"cmyk")}hsl(){const{_a:s,_b:d,_c:v}=this.rgb(),[C,T,O]=[s,d,v].map(lt=>lt/255),N=Math.max(C,T,O),M=Math.min(C,T,O),B=(N+M)/2,z=N===M,$=N-M,H=z?0:B>.5?$/(2-N-M):$/(N+M),j=z?0:N===C?((T-O)/$+(T<O?6:0))/6:N===T?((O-C)/$+2)/6:N===O?((C-T)/$+4)/6:0;return new Color(360*j,100*H,100*B,"hsl")}init(s=0,d=0,v=0,C=0,T="rgb"){if(s=s||0,this.space)for(const $ in this.space)delete this[this.space[$]];if(typeof s=="number")T=typeof C=="string"?C:T,C=typeof C=="string"?0:C,Object.assign(this,{_a:s,_b:d,_c:v,_d:C,space:T});else if(s instanceof Array)this.space=d||(typeof s[3]=="string"?s[3]:s[4])||"rgb",Object.assign(this,{_a:s[0],_b:s[1],_c:s[2],_d:s[3]||0});else if(s instanceof Object){const $=getParameters(s,d);Object.assign(this,$)}else if(typeof s=="string")if(isRgb.test(s)){const $=s.replace(whitespace,""),[H,j,ot]=rgb.exec($).slice(1,4).map(lt=>parseInt(lt));Object.assign(this,{_a:H,_b:j,_c:ot,_d:0,space:"rgb"})}else if(isHex.test(s)){const $=lt=>parseInt(lt,16),[,H,j,ot]=hex.exec(sixDigitHex(s)).map($);Object.assign(this,{_a:H,_b:j,_c:ot,_d:0,space:"rgb"})}else throw Error("Unsupported string format, can't construct Color");const{_a:O,_b:N,_c:M,_d:B}=this,z=this.space==="rgb"?{r:O,g:N,b:M}:this.space==="xyz"?{x:O,y:N,z:M}:this.space==="hsl"?{h:O,s:N,l:M}:this.space==="lab"?{l:O,a:N,b:M}:this.space==="lch"?{l:O,c:N,h:M}:this.space==="cmyk"?{c:O,m:N,y:M,k:B}:{};Object.assign(this,z)}lab(){const{x:s,y:d,z:v}=this.xyz(),C=116*d-16,T=500*(s-d),O=200*(d-v);return new Color(C,T,O,"lab")}lch(){const{l:s,a:d,b:v}=this.lab(),C=Math.sqrt(d**2+v**2);let T=180*Math.atan2(v,d)/Math.PI;return T<0&&(T*=-1,T=360-T),new Color(s,C,T,"lch")}rgb(){if(this.space==="rgb")return this;if(cieSpace(this.space)){let{x:s,y:d,z:v}=this;if(this.space==="lab"||this.space==="lch"){let{l:j,a:ot,b:lt}=this;if(this.space==="lch"){const{c:$t,h:Gt}=this,Pt=Math.PI/180;ot=$t*Math.cos(Pt*Gt),lt=$t*Math.sin(Pt*Gt)}const bt=(j+16)/116,ft=ot/500+bt,Tt=bt-lt/200,Mt=16/116,Ht=.008856,Bt=7.787;s=.95047*(ft**3>Ht?ft**3:(ft-Mt)/Bt),d=1*(bt**3>Ht?bt**3:(bt-Mt)/Bt),v=1.08883*(Tt**3>Ht?Tt**3:(Tt-Mt)/Bt)}const C=s*3.2406+d*-1.5372+v*-.4986,T=s*-.9689+d*1.8758+v*.0415,O=s*.0557+d*-.204+v*1.057,N=Math.pow,M=.0031308,B=C>M?1.055*N(C,1/2.4)-.055:12.92*C,z=T>M?1.055*N(T,1/2.4)-.055:12.92*T,$=O>M?1.055*N(O,1/2.4)-.055:12.92*O;return new Color(255*B,255*z,255*$)}else if(this.space==="hsl"){let{h:s,s:d,l:v}=this;if(s/=360,d/=100,v/=100,d===0)return v*=255,new Color(v,v,v);const C=v<.5?v*(1+d):v+d-v*d,T=2*v-C,O=255*hueToRgb(T,C,s+1/3),N=255*hueToRgb(T,C,s),M=255*hueToRgb(T,C,s-1/3);return new Color(O,N,M)}else if(this.space==="cmyk"){const{c:s,m:d,y:v,k:C}=this,T=255*(1-Math.min(1,s*(1-C)+C)),O=255*(1-Math.min(1,d*(1-C)+C)),N=255*(1-Math.min(1,v*(1-C)+C));return new Color(T,O,N)}else return this}toArray(){const{_a:s,_b:d,_c:v,_d:C,space:T}=this;return[s,d,v,C,T]}toHex(){const[s,d,v]=this._clamped().map(componentHex);return`#${s}${d}${v}`}toRgb(){const[s,d,v]=this._clamped();return`rgb(${s},${d},${v})`}toString(){return this.toHex()}xyz(){const{_a:s,_b:d,_c:v}=this.rgb(),[C,T,O]=[s,d,v].map(ft=>ft/255),N=C>.04045?Math.pow((C+.055)/1.055,2.4):C/12.92,M=T>.04045?Math.pow((T+.055)/1.055,2.4):T/12.92,B=O>.04045?Math.pow((O+.055)/1.055,2.4):O/12.92,z=(N*.4124+M*.3576+B*.1805)/.95047,$=(N*.2126+M*.7152+B*.0722)/1,H=(N*.0193+M*.1192+B*.9505)/1.08883,j=z>.008856?Math.pow(z,1/3):7.787*z+16/116,ot=$>.008856?Math.pow($,1/3):7.787*$+16/116,lt=H>.008856?Math.pow(H,1/3):7.787*H+16/116;return new Color(j,ot,lt,"xyz")}_clamped(){const{_a:s,_b:d,_c:v}=this.rgb(),{max:C,min:T,round:O}=Math,N=M=>C(0,T(O(M),255));return[s,d,v].map(N)}}class Point{constructor(...s){this.init(...s)}clone(){return new Point(this)}init(s,d){const v={x:0,y:0},C=Array.isArray(s)?{x:s[0],y:s[1]}:typeof s=="object"?{x:s.x,y:s.y}:{x:s,y:d};return this.x=C.x==null?v.x:C.x,this.y=C.y==null?v.y:C.y,this}toArray(){return[this.x,this.y]}transform(s){return this.clone().transformO(s)}transformO(s){Matrix.isMatrixLike(s)||(s=new Matrix(s));const{x:d,y:v}=this;return this.x=s.a*d+s.c*v+s.e,this.y=s.b*d+s.d*v+s.f,this}}function point(m,s){return new Point(m,s).transformO(this.screenCTM().inverseO())}function closeEnough(m,s,d){return Math.abs(s-m)<(d||1e-6)}class Matrix{constructor(...s){this.init(...s)}static formatTransforms(s){const d=s.flip==="both"||s.flip===!0,v=s.flip&&(d||s.flip==="x")?-1:1,C=s.flip&&(d||s.flip==="y")?-1:1,T=s.skew&&s.skew.length?s.skew[0]:isFinite(s.skew)?s.skew:isFinite(s.skewX)?s.skewX:0,O=s.skew&&s.skew.length?s.skew[1]:isFinite(s.skew)?s.skew:isFinite(s.skewY)?s.skewY:0,N=s.scale&&s.scale.length?s.scale[0]*v:isFinite(s.scale)?s.scale*v:isFinite(s.scaleX)?s.scaleX*v:v,M=s.scale&&s.scale.length?s.scale[1]*C:isFinite(s.scale)?s.scale*C:isFinite(s.scaleY)?s.scaleY*C:C,B=s.shear||0,z=s.rotate||s.theta||0,$=new Point(s.origin||s.around||s.ox||s.originX,s.oy||s.originY),H=$.x,j=$.y,ot=new Point(s.position||s.px||s.positionX||NaN,s.py||s.positionY||NaN),lt=ot.x,bt=ot.y,ft=new Point(s.translate||s.tx||s.translateX,s.ty||s.translateY),Tt=ft.x,Mt=ft.y,Ht=new Point(s.relative||s.rx||s.relativeX,s.ry||s.relativeY),Bt=Ht.x,$t=Ht.y;return{scaleX:N,scaleY:M,skewX:T,skewY:O,shear:B,theta:z,rx:Bt,ry:$t,tx:Tt,ty:Mt,ox:H,oy:j,px:lt,py:bt}}static fromArray(s){return{a:s[0],b:s[1],c:s[2],d:s[3],e:s[4],f:s[5]}}static isMatrixLike(s){return s.a!=null||s.b!=null||s.c!=null||s.d!=null||s.e!=null||s.f!=null}static matrixMultiply(s,d,v){const C=s.a*d.a+s.c*d.b,T=s.b*d.a+s.d*d.b,O=s.a*d.c+s.c*d.d,N=s.b*d.c+s.d*d.d,M=s.e+s.a*d.e+s.c*d.f,B=s.f+s.b*d.e+s.d*d.f;return v.a=C,v.b=T,v.c=O,v.d=N,v.e=M,v.f=B,v}around(s,d,v){return this.clone().aroundO(s,d,v)}aroundO(s,d,v){const C=s||0,T=d||0;return this.translateO(-C,-T).lmultiplyO(v).translateO(C,T)}clone(){return new Matrix(this)}decompose(s=0,d=0){const v=this.a,C=this.b,T=this.c,O=this.d,N=this.e,M=this.f,B=v*O-C*T,z=B>0?1:-1,$=z*Math.sqrt(v*v+C*C),H=Math.atan2(z*C,z*v),j=180/Math.PI*H,ot=Math.cos(H),lt=Math.sin(H),bt=(v*T+C*O)/B,ft=T*$/(bt*v-C)||O*$/(bt*C+v),Tt=N-s+s*ot*$+d*(bt*ot*$-lt*ft),Mt=M-d+s*lt*$+d*(bt*lt*$+ot*ft);return{scaleX:$,scaleY:ft,shear:bt,rotate:j,translateX:Tt,translateY:Mt,originX:s,originY:d,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}equals(s){if(s===this)return!0;const d=new Matrix(s);return closeEnough(this.a,d.a)&&closeEnough(this.b,d.b)&&closeEnough(this.c,d.c)&&closeEnough(this.d,d.d)&&closeEnough(this.e,d.e)&&closeEnough(this.f,d.f)}flip(s,d){return this.clone().flipO(s,d)}flipO(s,d){return s==="x"?this.scaleO(-1,1,d,0):s==="y"?this.scaleO(1,-1,0,d):this.scaleO(-1,-1,s,d||s)}init(s){const d=Matrix.fromArray([1,0,0,1,0,0]);return s=s instanceof Element?s.matrixify():typeof s=="string"?Matrix.fromArray(s.split(delimiter).map(parseFloat)):Array.isArray(s)?Matrix.fromArray(s):typeof s=="object"&&Matrix.isMatrixLike(s)?s:typeof s=="object"?new Matrix().transform(s):arguments.length===6?Matrix.fromArray([].slice.call(arguments)):d,this.a=s.a!=null?s.a:d.a,this.b=s.b!=null?s.b:d.b,this.c=s.c!=null?s.c:d.c,this.d=s.d!=null?s.d:d.d,this.e=s.e!=null?s.e:d.e,this.f=s.f!=null?s.f:d.f,this}inverse(){return this.clone().inverseO()}inverseO(){const s=this.a,d=this.b,v=this.c,C=this.d,T=this.e,O=this.f,N=s*C-d*v;if(!N)throw new Error("Cannot invert "+this);const M=C/N,B=-d/N,z=-v/N,$=s/N,H=-(M*T+z*O),j=-(B*T+$*O);return this.a=M,this.b=B,this.c=z,this.d=$,this.e=H,this.f=j,this}lmultiply(s){return this.clone().lmultiplyO(s)}lmultiplyO(s){const d=this,v=s instanceof Matrix?s:new Matrix(s);return Matrix.matrixMultiply(v,d,this)}multiply(s){return this.clone().multiplyO(s)}multiplyO(s){const d=this,v=s instanceof Matrix?s:new Matrix(s);return Matrix.matrixMultiply(d,v,this)}rotate(s,d,v){return this.clone().rotateO(s,d,v)}rotateO(s,d=0,v=0){s=radians(s);const C=Math.cos(s),T=Math.sin(s),{a:O,b:N,c:M,d:B,e:z,f:$}=this;return this.a=O*C-N*T,this.b=N*C+O*T,this.c=M*C-B*T,this.d=B*C+M*T,this.e=z*C-$*T+v*T-d*C+d,this.f=$*C+z*T-d*T-v*C+v,this}scale(s,d,v,C){return this.clone().scaleO(...arguments)}scaleO(s,d=s,v=0,C=0){arguments.length===3&&(C=v,v=d,d=s);const{a:T,b:O,c:N,d:M,e:B,f:z}=this;return this.a=T*s,this.b=O*d,this.c=N*s,this.d=M*d,this.e=B*s-v*s+v,this.f=z*d-C*d+C,this}shear(s,d,v){return this.clone().shearO(s,d,v)}shearO(s,d=0,v=0){const{a:C,b:T,c:O,d:N,e:M,f:B}=this;return this.a=C+T*s,this.c=O+N*s,this.e=M+B*s-v*s,this}skew(s,d,v,C){return this.clone().skewO(...arguments)}skewO(s,d=s,v=0,C=0){arguments.length===3&&(C=v,v=d,d=s),s=radians(s),d=radians(d);const T=Math.tan(s),O=Math.tan(d),{a:N,b:M,c:B,d:z,e:$,f:H}=this;return this.a=N+M*T,this.b=M+N*O,this.c=B+z*T,this.d=z+B*O,this.e=$+H*T-C*T,this.f=H+$*O-v*O,this}skewX(s,d,v){return this.skew(s,0,d,v)}skewY(s,d,v){return this.skew(0,s,d,v)}toArray(){return[this.a,this.b,this.c,this.d,this.e,this.f]}toString(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}transform(s){if(Matrix.isMatrixLike(s))return new Matrix(s).multiplyO(this);const d=Matrix.formatTransforms(s),v=this,{x:C,y:T}=new Point(d.ox,d.oy).transform(v),O=new Matrix().translateO(d.rx,d.ry).lmultiplyO(v).translateO(-C,-T).scaleO(d.scaleX,d.scaleY).skewO(d.skewX,d.skewY).shearO(d.shear).rotateO(d.theta).translateO(C,T);if(isFinite(d.px)||isFinite(d.py)){const N=new Point(C,T).transform(O),M=isFinite(d.px)?d.px-N.x:0,B=isFinite(d.py)?d.py-N.y:0;O.translateO(M,B)}return O.translateO(d.tx,d.ty),O}translate(s,d){return this.clone().translateO(s,d)}translateO(s,d){return this.e+=s||0,this.f+=d||0,this}valueOf(){return{a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}}function ctm(){return new Matrix(this.node.getCTM())}function screenCTM(){if(typeof this.isRoot=="function"&&!this.isRoot()){const m=this.rect(1,1),s=m.node.getScreenCTM();return m.remove(),new Matrix(s)}return new Matrix(this.node.getScreenCTM())}register(Matrix,"Matrix");function parser(){if(!parser.nodes){const m=makeInstance().size(2,0);m.node.style.cssText=["opacity: 0","position: absolute","left: -100%","top: -100%","overflow: hidden"].join(";"),m.attr("focusable","false"),m.attr("aria-hidden","true");const s=m.path().node;parser.nodes={svg:m,path:s}}if(!parser.nodes.svg.node.parentNode){const m=globals.document.body||globals.document.documentElement;parser.nodes.svg.addTo(m)}return parser.nodes}function isNulledBox(m){return!m.width&&!m.height&&!m.x&&!m.y}function domContains(m){return m===globals.document||(globals.document.documentElement.contains||function(s){for(;s.parentNode;)s=s.parentNode;return s===globals.document}).call(globals.document.documentElement,m)}class Box{constructor(...s){this.init(...s)}addOffset(){return this.x+=globals.window.pageXOffset,this.y+=globals.window.pageYOffset,new Box(this)}init(s){const d=[0,0,0,0];return s=typeof s=="string"?s.split(delimiter).map(parseFloat):Array.isArray(s)?s:typeof s=="object"?[s.left!=null?s.left:s.x,s.top!=null?s.top:s.y,s.width,s.height]:arguments.length===4?[].slice.call(arguments):d,this.x=s[0]||0,this.y=s[1]||0,this.width=this.w=s[2]||0,this.height=this.h=s[3]||0,this.x2=this.x+this.w,this.y2=this.y+this.h,this.cx=this.x+this.w/2,this.cy=this.y+this.h/2,this}isNulled(){return isNulledBox(this)}merge(s){const d=Math.min(this.x,s.x),v=Math.min(this.y,s.y),C=Math.max(this.x+this.width,s.x+s.width)-d,T=Math.max(this.y+this.height,s.y+s.height)-v;return new Box(d,v,C,T)}toArray(){return[this.x,this.y,this.width,this.height]}toString(){return this.x+" "+this.y+" "+this.width+" "+this.height}transform(s){s instanceof Matrix||(s=new Matrix(s));let d=1/0,v=-1/0,C=1/0,T=-1/0;return[new Point(this.x,this.y),new Point(this.x2,this.y),new Point(this.x,this.y2),new Point(this.x2,this.y2)].forEach(function(N){N=N.transform(s),d=Math.min(d,N.x),v=Math.max(v,N.x),C=Math.min(C,N.y),T=Math.max(T,N.y)}),new Box(d,C,v-d,T-C)}}function getBox(m,s,d){let v;try{if(v=s(m.node),isNulledBox(v)&&!domContains(m.node))throw new Error("Element not in the dom")}catch{v=d(m)}return v}function bbox(){const d=getBox(this,C=>C.getBBox(),C=>{try{const T=C.clone().addTo(parser().svg).show(),O=T.node.getBBox();return T.remove(),O}catch(T){throw new Error(`Getting bbox of element "${C.node.nodeName}" is not possible: ${T.toString()}`)}});return new Box(d)}function rbox(m){const v=getBox(this,T=>T.getBoundingClientRect(),T=>{throw new Error(`Getting rbox of element "${T.node.nodeName}" is not possible`)}),C=new Box(v);return m?C.transform(m.screenCTM().inverseO()):C.addOffset()}function inside(m,s){const d=this.bbox();return m>d.x&&s>d.y&&m<d.x+d.width&&s<d.y+d.height}registerMethods({viewbox:{viewbox(m,s,d,v){return m==null?new Box(this.attr("viewBox")):this.attr("viewBox",new Box(m,s,d,v))},zoom(m,s){let{width:d,height:v}=this.attr(["width","height"]);if((!d&&!v||typeof d=="string"||typeof v=="string")&&(d=this.node.clientWidth,v=this.node.clientHeight),!d||!v)throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");const C=this.viewbox(),T=d/C.width,O=v/C.height,N=Math.min(T,O);if(m==null)return N;let M=N/m;M===1/0&&(M=Number.MAX_SAFE_INTEGER/100),s=s||new Point(d/2/T+C.x,v/2/O+C.y);const B=new Box(C).transform(new Matrix({scale:M,origin:s}));return this.viewbox(B)}}});register(Box,"Box");class List extends Array{constructor(s=[],...d){if(super(s,...d),typeof s=="number")return this;this.length=0,this.push(...s)}}extend([List],{each(m,...s){return typeof m=="function"?this.map((d,v,C)=>m.call(d,d,v,C)):this.map(d=>d[m](...s))},toArray(){return Array.prototype.concat.apply([],this)}});const reserved=["toArray","constructor","each"];List.extend=function(m){m=m.reduce((s,d)=>(reserved.includes(d)||d[0]==="_"||(s[d]=function(...v){return this.each(d,...v)}),s),{}),extend([List],m)};function baseFind(m,s){return new List(map((s||globals.document).querySelectorAll(m),function(d){return adopt(d)}))}function find(m){return baseFind(m,this.node)}function findOne(m){return adopt(this.node.querySelector(m))}let listenerId=0;const windowEvents={};function getEvents(m){let s=m.getEventHolder();return s===globals.window&&(s=windowEvents),s.events||(s.events={}),s.events}function getEventTarget(m){return m.getEventTarget()}function clearEvents(m){let s=m.getEventHolder();s===globals.window&&(s=windowEvents),s.events&&(s.events={})}function on(m,s,d,v,C){const T=d.bind(v||m),O=makeInstance(m),N=getEvents(O),M=getEventTarget(O);s=Array.isArray(s)?s:s.split(delimiter),d._svgjsListenerId||(d._svgjsListenerId=++listenerId),s.forEach(function(B){const z=B.split(".")[0],$=B.split(".")[1]||"*";N[z]=N[z]||{},N[z][$]=N[z][$]||{},N[z][$][d._svgjsListenerId]=T,M.addEventListener(z,T,C||!1)})}function off(m,s,d,v){const C=makeInstance(m),T=getEvents(C),O=getEventTarget(C);typeof d=="function"&&(d=d._svgjsListenerId,!d)||(s=Array.isArray(s)?s:(s||"").split(delimiter),s.forEach(function(N){const M=N&&N.split(".")[0],B=N&&N.split(".")[1];let z,$;if(d)T[M]&&T[M][B||"*"]&&(O.removeEventListener(M,T[M][B||"*"][d],v||!1),delete T[M][B||"*"][d]);else if(M&&B){if(T[M]&&T[M][B]){for($ in T[M][B])off(O,[M,B].join("."),$);delete T[M][B]}}else if(B)for(N in T)for(z in T[N])B===z&&off(O,[N,B].join("."));else if(M){if(T[M]){for(z in T[M])off(O,[M,z].join("."));delete T[M]}}else{for(N in T)off(O,N);clearEvents(C)}}))}function dispatch(m,s,d,v){const C=getEventTarget(m);return s instanceof globals.window.Event||(s=new globals.window.CustomEvent(s,{detail:d,cancelable:!0,...v})),C.dispatchEvent(s),s}class EventTarget extends Base{addEventListener(){}dispatch(s,d,v){return dispatch(this,s,d,v)}dispatchEvent(s){const d=this.getEventHolder().events;if(!d)return!0;const v=d[s.type];for(const C in v)for(const T in v[C])v[C][T](s);return!s.defaultPrevented}fire(s,d,v){return this.dispatch(s,d,v),this}getEventHolder(){return this}getEventTarget(){return this}off(s,d,v){return off(this,s,d,v),this}on(s,d,v,C){return on(this,s,d,v,C),this}removeEventListener(){}}register(EventTarget,"EventTarget");function noop(){}const timeline={duration:400,ease:">",delay:0},attrs={"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","text-anchor":"start"};class SVGArray extends Array{constructor(...s){super(...s),this.init(...s)}clone(){return new this.constructor(this)}init(s){return typeof s=="number"?this:(this.length=0,this.push(...this.parse(s)),this)}parse(s=[]){return s instanceof Array?s:s.trim().split(delimiter).map(parseFloat)}toArray(){return Array.prototype.concat.apply([],this)}toSet(){return new Set(this)}toString(){return this.join(" ")}valueOf(){const s=[];return s.push(...this),s}}class SVGNumber{constructor(...s){this.init(...s)}convert(s){return new SVGNumber(this.value,s)}divide(s){return s=new SVGNumber(s),new SVGNumber(this/s,this.unit||s.unit)}init(s,d){return d=Array.isArray(s)?s[1]:d,s=Array.isArray(s)?s[0]:s,this.value=0,this.unit=d||"",typeof s=="number"?this.value=isNaN(s)?0:isFinite(s)?s:s<0?-34e37:34e37:typeof s=="string"?(d=s.match(numberAndUnit),d&&(this.value=parseFloat(d[1]),d[5]==="%"?this.value/=100:d[5]==="s"&&(this.value*=1e3),this.unit=d[5])):s instanceof SVGNumber&&(this.value=s.valueOf(),this.unit=s.unit),this}minus(s){return s=new SVGNumber(s),new SVGNumber(this-s,this.unit||s.unit)}plus(s){return s=new SVGNumber(s),new SVGNumber(this+s,this.unit||s.unit)}times(s){return s=new SVGNumber(s),new SVGNumber(this*s,this.unit||s.unit)}toArray(){return[this.value,this.unit]}toJSON(){return this.toString()}toString(){return(this.unit==="%"?~~(this.value*1e8)/1e6:this.unit==="s"?this.value/1e3:this.value)+this.unit}valueOf(){return this.value}}const hooks$1=[];function registerAttrHook(m){hooks$1.push(m)}function attr(m,s,d){if(m==null){m={},s=this.node.attributes;for(const v of s)m[v.nodeName]=isNumber.test(v.nodeValue)?parseFloat(v.nodeValue):v.nodeValue;return m}else{if(m instanceof Array)return m.reduce((v,C)=>(v[C]=this.attr(C),v),{});if(typeof m=="object"&&m.constructor===Object)for(s in m)this.attr(s,m[s]);else if(s===null)this.node.removeAttribute(m);else{if(s==null)return s=this.node.getAttribute(m),s==null?attrs[m]:isNumber.test(s)?parseFloat(s):s;s=hooks$1.reduce((v,C)=>C(m,v,this),s),typeof s=="number"?s=new SVGNumber(s):Color.isColor(s)?s=new Color(s):s.constructor===Array&&(s=new SVGArray(s)),m==="leading"?this.leading&&this.leading(s):typeof d=="string"?this.node.setAttributeNS(d,m,s.toString()):this.node.setAttribute(m,s.toString()),this.rebuild&&(m==="font-size"||m==="x")&&this.rebuild()}}return this}class Dom extends EventTarget{constructor(s,d){super(),this.node=s,this.type=s.nodeName,d&&s!==d&&this.attr(d)}add(s,d){return s=makeInstance(s),s.removeNamespace&&this.node instanceof globals.window.SVGElement&&s.removeNamespace(),d==null?this.node.appendChild(s.node):s.node!==this.node.childNodes[d]&&this.node.insertBefore(s.node,this.node.childNodes[d]),this}addTo(s,d){return makeInstance(s).put(this,d)}children(){return new List(map(this.node.children,function(s){return adopt(s)}))}clear(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this}clone(s=!0,d=!0){this.writeDataToDom();let v=this.node.cloneNode(s);return d&&(v=assignNewId(v)),new this.constructor(v)}each(s,d){const v=this.children();let C,T;for(C=0,T=v.length;C<T;C++)s.apply(v[C],[C,v]),d&&v[C].each(s,d);return this}element(s,d){return this.put(new Dom(create(s),d))}first(){return adopt(this.node.firstChild)}get(s){return adopt(this.node.childNodes[s])}getEventHolder(){return this.node}getEventTarget(){return this.node}has(s){return this.index(s)>=0}html(s,d){return this.xml(s,d,html$1)}id(s){return typeof s>"u"&&!this.node.id&&(this.node.id=eid(this.type)),this.attr("id",s)}index(s){return[].slice.call(this.node.childNodes).indexOf(s.node)}last(){return adopt(this.node.lastChild)}matches(s){const d=this.node,v=d.matches||d.matchesSelector||d.msMatchesSelector||d.mozMatchesSelector||d.webkitMatchesSelector||d.oMatchesSelector||null;return v&&v.call(d,s)}parent(s){let d=this;if(!d.node.parentNode)return null;if(d=adopt(d.node.parentNode),!s)return d;do if(typeof s=="string"?d.matches(s):d instanceof s)return d;while(d=adopt(d.node.parentNode));return d}put(s,d){return s=makeInstance(s),this.add(s,d),s}putIn(s,d){return makeInstance(s).add(this,d)}remove(){return this.parent()&&this.parent().removeElement(this),this}removeElement(s){return this.node.removeChild(s.node),this}replace(s){return s=makeInstance(s),this.node.parentNode&&this.node.parentNode.replaceChild(s.node,this.node),s}round(s=2,d=null){const v=10**s,C=this.attr(d);for(const T in C)typeof C[T]=="number"&&(C[T]=Math.round(C[T]*v)/v);return this.attr(C),this}svg(s,d){return this.xml(s,d,svg)}toString(){return this.id()}words(s){return this.node.textContent=s,this}wrap(s){const d=this.parent();if(!d)return this.addTo(s);const v=d.index(this);return d.put(s,v).put(this)}writeDataToDom(){return this.each(function(){this.writeDataToDom()}),this}xml(s,d,v){if(typeof s=="boolean"&&(v=d,d=s,s=null),s==null||typeof s=="function"){d=d??!0,this.writeDataToDom();let N=this;if(s!=null){if(N=adopt(N.node.cloneNode(!0)),d){const M=s(N);if(N=M||N,M===!1)return""}N.each(function(){const M=s(this),B=M||this;M===!1?this.remove():M&&this!==B&&this.replace(B)},!0)}return d?N.node.outerHTML:N.node.innerHTML}d=d??!1;const C=create("wrapper",v),T=globals.document.createDocumentFragment();C.innerHTML=s;for(let N=C.children.length;N--;)T.appendChild(C.firstElementChild);const O=this.parent();return d?this.replace(T)&&O:this.add(T)}}extend(Dom,{attr,find,findOne});register(Dom,"Dom");class Element extends Dom{constructor(s,d){super(s,d),this.dom={},this.node.instance=this,s.hasAttribute("svgjs:data")&&this.setData(JSON.parse(s.getAttribute("svgjs:data"))||{})}center(s,d){return this.cx(s).cy(d)}cx(s){return s==null?this.x()+this.width()/2:this.x(s-this.width()/2)}cy(s){return s==null?this.y()+this.height()/2:this.y(s-this.height()/2)}defs(){const s=this.root();return s&&s.defs()}dmove(s,d){return this.dx(s).dy(d)}dx(s=0){return this.x(new SVGNumber(s).plus(this.x()))}dy(s=0){return this.y(new SVGNumber(s).plus(this.y()))}getEventHolder(){return this}height(s){return this.attr("height",s)}move(s,d){return this.x(s).y(d)}parents(s=this.root()){const d=typeof s=="string";d||(s=makeInstance(s));const v=new List;let C=this;for(;(C=C.parent())&&C.node!==globals.document&&C.nodeName!=="#document-fragment"&&(v.push(C),!(!d&&C.node===s.node||d&&C.matches(s)));)if(C.node===this.root().node)return null;return v}reference(s){if(s=this.attr(s),!s)return null;const d=(s+"").match(reference);return d?makeInstance(d[1]):null}root(){const s=this.parent(getClass(root));return s&&s.root()}setData(s){return this.dom=s,this}size(s,d){const v=proportionalSize(this,s,d);return this.width(new SVGNumber(v.width)).height(new SVGNumber(v.height))}width(s){return this.attr("width",s)}writeDataToDom(){return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),super.writeDataToDom()}x(s){return this.attr("x",s)}y(s){return this.attr("y",s)}}extend(Element,{bbox,rbox,inside,point,ctm,screenCTM});register(Element,"Element");const sugar={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(m,s){return s==="color"?m:m+"-"+s}};["fill","stroke"].forEach(function(m){const s={};let d;s[m]=function(v){if(typeof v>"u")return this.attr(m);if(typeof v=="string"||v instanceof Color||Color.isRgb(v)||v instanceof Element)this.attr(m,v);else for(d=sugar[m].length-1;d>=0;d--)v[sugar[m][d]]!=null&&this.attr(sugar.prefix(m,sugar[m][d]),v[sugar[m][d]]);return this},registerMethods(["Element","Runner"],s)});registerMethods(["Element","Runner"],{matrix:function(m,s,d,v,C,T){return m==null?new Matrix(this):this.attr("transform",new Matrix(m,s,d,v,C,T))},rotate:function(m,s,d){return this.transform({rotate:m,ox:s,oy:d},!0)},skew:function(m,s,d,v){return arguments.length===1||arguments.length===3?this.transform({skew:m,ox:s,oy:d},!0):this.transform({skew:[m,s],ox:d,oy:v},!0)},shear:function(m,s,d){return this.transform({shear:m,ox:s,oy:d},!0)},scale:function(m,s,d,v){return arguments.length===1||arguments.length===3?this.transform({scale:m,ox:s,oy:d},!0):this.transform({scale:[m,s],ox:d,oy:v},!0)},translate:function(m,s){return this.transform({translate:[m,s]},!0)},relative:function(m,s){return this.transform({relative:[m,s]},!0)},flip:function(m="both",s="center"){return"xybothtrue".indexOf(m)===-1&&(s=m,m="both"),this.transform({flip:m,origin:s},!0)},opacity:function(m){return this.attr("opacity",m)}});registerMethods("radius",{radius:function(m,s=m){return(this._element||this).type==="radialGradient"?this.attr("r",new SVGNumber(m)):this.rx(m).ry(s)}});registerMethods("Path",{length:function(){return this.node.getTotalLength()},pointAt:function(m){return new Point(this.node.getPointAtLength(m))}});registerMethods(["Element","Runner"],{font:function(m,s){if(typeof m=="object"){for(s in m)this.font(s,m[s]);return this}return m==="leading"?this.leading(s):m==="anchor"?this.attr("text-anchor",s):m==="size"||m==="family"||m==="weight"||m==="stretch"||m==="variant"||m==="style"?this.attr("font-"+m,s):this.attr(m,s)}});const methods=["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","mouseenter","mouseleave","touchstart","touchmove","touchleave","touchend","touchcancel"].reduce(function(m,s){const d=function(v){return v===null?this.off(s):this.on(s,v),this};return m[s]=d,m},{});registerMethods("Element",methods);function untransform(){return this.attr("transform",null)}function matrixify(){return(this.attr("transform")||"").split(transforms).slice(0,-1).map(function(s){const d=s.trim().split("(");return[d[0],d[1].split(delimiter).map(function(v){return parseFloat(v)})]}).reverse().reduce(function(s,d){return d[0]==="matrix"?s.lmultiply(Matrix.fromArray(d[1])):s[d[0]].apply(s,d[1])},new Matrix)}function toParent(m,s){if(this===m)return this;const d=this.screenCTM(),v=m.screenCTM().inverse();return this.addTo(m,s).untransform().transform(v.multiply(d)),this}function toRoot(m){return this.toParent(this.root(),m)}function transform(m,s){if(m==null||typeof m=="string"){const C=new Matrix(this).decompose();return m==null?C:C[m]}Matrix.isMatrixLike(m)||(m={...m,origin:getOrigin(m,this)});const d=s===!0?this:s||!1,v=new Matrix(d).transform(m);return this.attr("transform",v)}registerMethods("Element",{untransform,matrixify,toParent,toRoot,transform});let Container$1=class Kl extends Element{flatten(s=this,d){return this.each(function(){if(this instanceof Kl)return this.flatten().ungroup()}),this}ungroup(s=this.parent(),d=s.index(this)){return d=d===-1?s.children().length:d,this.each(function(v,C){return C[C.length-v-1].toParent(s,d)}),this.remove()}};register(Container$1,"Container");class Defs extends Container$1{constructor(s,d=s){super(nodeOrNew("defs",s),d)}flatten(){return this}ungroup(){return this}}register(Defs,"Defs");class Shape extends Element{}register(Shape,"Shape");function rx(m){return this.attr("rx",m)}function ry(m){return this.attr("ry",m)}function x$3(m){return m==null?this.cx()-this.rx():this.cx(m+this.rx())}function y$3(m){return m==null?this.cy()-this.ry():this.cy(m+this.ry())}function cx$1(m){return this.attr("cx",m)}function cy$1(m){return this.attr("cy",m)}function width$2(m){return m==null?this.rx()*2:this.rx(new SVGNumber(m).divide(2))}function height$2(m){return m==null?this.ry()*2:this.ry(new SVGNumber(m).divide(2))}var circled={__proto__:null,rx,ry,x:x$3,y:y$3,cx:cx$1,cy:cy$1,width:width$2,height:height$2};class Ellipse extends Shape{constructor(s,d=s){super(nodeOrNew("ellipse",s),d)}size(s,d){const v=proportionalSize(this,s,d);return this.rx(new SVGNumber(v.width).divide(2)).ry(new SVGNumber(v.height).divide(2))}}extend(Ellipse,circled);registerMethods("Container",{ellipse:wrapWithAttrCheck(function(m=0,s=m){return this.put(new Ellipse).size(m,s).move(0,0)})});register(Ellipse,"Ellipse");class Fragment extends Dom{constructor(s=globals.document.createDocumentFragment()){super(s)}xml(s,d,v){if(typeof s=="boolean"&&(v=d,d=s,s=null),s==null||typeof s=="function"){const C=new Dom(create("wrapper",v));return C.add(this.node.cloneNode(!0)),C.xml(!1,v)}return super.xml(s,!1,v)}}register(Fragment,"Fragment");function from(m,s){return(this._element||this).type==="radialGradient"?this.attr({fx:new SVGNumber(m),fy:new SVGNumber(s)}):this.attr({x1:new SVGNumber(m),y1:new SVGNumber(s)})}function to(m,s){return(this._element||this).type==="radialGradient"?this.attr({cx:new SVGNumber(m),cy:new SVGNumber(s)}):this.attr({x2:new SVGNumber(m),y2:new SVGNumber(s)})}var gradiented={__proto__:null,from,to};class Gradient extends Container$1{constructor(s,d){super(nodeOrNew(s+"Gradient",typeof s=="string"?null:s),d)}attr(s,d,v){return s==="transform"&&(s="gradientTransform"),super.attr(s,d,v)}bbox(){return new Box}targets(){return baseFind("svg [fill*="+this.id()+"]")}toString(){return this.url()}update(s){return this.clear(),typeof s=="function"&&s.call(this,this),this}url(){return"url(#"+this.id()+")"}}extend(Gradient,gradiented);registerMethods({Container:{gradient(...m){return this.defs().gradient(...m)}},Defs:{gradient:wrapWithAttrCheck(function(m,s){return this.put(new Gradient(m)).update(s)})}});register(Gradient,"Gradient");class Pattern extends Container$1{constructor(s,d=s){super(nodeOrNew("pattern",s),d)}attr(s,d,v){return s==="transform"&&(s="patternTransform"),super.attr(s,d,v)}bbox(){return new Box}targets(){return baseFind("svg [fill*="+this.id()+"]")}toString(){return this.url()}update(s){return this.clear(),typeof s=="function"&&s.call(this,this),this}url(){return"url(#"+this.id()+")"}}registerMethods({Container:{pattern(...m){return this.defs().pattern(...m)}},Defs:{pattern:wrapWithAttrCheck(function(m,s,d){return this.put(new Pattern).update(d).attr({x:0,y:0,width:m,height:s,patternUnits:"userSpaceOnUse"})})}});register(Pattern,"Pattern");class Image extends Shape{constructor(s,d=s){super(nodeOrNew("image",s),d)}load(s,d){if(!s)return this;const v=new globals.window.Image;return on(v,"load",function(C){const T=this.parent(Pattern);this.width()===0&&this.height()===0&&this.size(v.width,v.height),T instanceof Pattern&&T.width()===0&&T.height()===0&&T.size(this.width(),this.height()),typeof d=="function"&&d.call(this,C)},this),on(v,"load error",function(){off(v)}),this.attr("href",v.src=s,xlink)}}registerAttrHook(function(m,s,d){return(m==="fill"||m==="stroke")&&isImage.test(s)&&(s=d.root().defs().image(s)),s instanceof Image&&(s=d.root().defs().pattern(0,0,v=>{v.add(s)})),s});registerMethods({Container:{image:wrapWithAttrCheck(function(m,s){return this.put(new Image).size(0,0).load(m,s)})}});register(Image,"Image");class PointArray extends SVGArray{bbox(){let s=-1/0,d=-1/0,v=1/0,C=1/0;return this.forEach(function(T){s=Math.max(T[0],s),d=Math.max(T[1],d),v=Math.min(T[0],v),C=Math.min(T[1],C)}),new Box(v,C,s-v,d-C)}move(s,d){const v=this.bbox();if(s-=v.x,d-=v.y,!isNaN(s)&&!isNaN(d))for(let C=this.length-1;C>=0;C--)this[C]=[this[C][0]+s,this[C][1]+d];return this}parse(s=[0,0]){const d=[];s instanceof Array?s=Array.prototype.concat.apply([],s):s=s.trim().split(delimiter).map(parseFloat),s.length%2!==0&&s.pop();for(let v=0,C=s.length;v<C;v=v+2)d.push([s[v],s[v+1]]);return d}size(s,d){let v;const C=this.bbox();for(v=this.length-1;v>=0;v--)C.width&&(this[v][0]=(this[v][0]-C.x)*s/C.width+C.x),C.height&&(this[v][1]=(this[v][1]-C.y)*d/C.height+C.y);return this}toLine(){return{x1:this[0][0],y1:this[0][1],x2:this[1][0],y2:this[1][1]}}toString(){const s=[];for(let d=0,v=this.length;d<v;d++)s.push(this[d].join(","));return s.join(" ")}transform(s){return this.clone().transformO(s)}transformO(s){Matrix.isMatrixLike(s)||(s=new Matrix(s));for(let d=this.length;d--;){const[v,C]=this[d];this[d][0]=s.a*v+s.c*C+s.e,this[d][1]=s.b*v+s.d*C+s.f}return this}}const MorphArray=PointArray;function x$2(m){return m==null?this.bbox().x:this.move(m,this.bbox().y)}function y$2(m){return m==null?this.bbox().y:this.move(this.bbox().x,m)}function width$1(m){const s=this.bbox();return m==null?s.width:this.size(m,s.height)}function height$1(m){const s=this.bbox();return m==null?s.height:this.size(s.width,m)}var pointed={__proto__:null,MorphArray,x:x$2,y:y$2,width:width$1,height:height$1};class Line extends Shape{constructor(s,d=s){super(nodeOrNew("line",s),d)}array(){return new PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])}move(s,d){return this.attr(this.array().move(s,d).toLine())}plot(s,d,v,C){return s==null?this.array():(typeof d<"u"?s={x1:s,y1:d,x2:v,y2:C}:s=new PointArray(s).toLine(),this.attr(s))}size(s,d){const v=proportionalSize(this,s,d);return this.attr(this.array().size(v.width,v.height).toLine())}}extend(Line,pointed);registerMethods({Container:{line:wrapWithAttrCheck(function(...m){return Line.prototype.plot.apply(this.put(new Line),m[0]!=null?m:[0,0,0,0])})}});register(Line,"Line");class Marker extends Container$1{constructor(s,d=s){super(nodeOrNew("marker",s),d)}height(s){return this.attr("markerHeight",s)}orient(s){return this.attr("orient",s)}ref(s,d){return this.attr("refX",s).attr("refY",d)}toString(){return"url(#"+this.id()+")"}update(s){return this.clear(),typeof s=="function"&&s.call(this,this),this}width(s){return this.attr("markerWidth",s)}}registerMethods({Container:{marker(...m){return this.defs().marker(...m)}},Defs:{marker:wrapWithAttrCheck(function(m,s,d){return this.put(new Marker).size(m,s).ref(m/2,s/2).viewbox(0,0,m,s).attr("orient","auto").update(d)})},marker:{marker(m,s,d,v){let C=["marker"];return m!=="all"&&C.push(m),C=C.join("-"),m=arguments[1]instanceof Marker?arguments[1]:this.defs().marker(s,d,v),this.attr(C,m)}}});register(Marker,"Marker");function makeSetterGetter(m,s){return function(d){return d==null?this[m]:(this[m]=d,s&&s.call(this),this)}}const easing={"-":function(m){return m},"<>":function(m){return-Math.cos(m*Math.PI)/2+.5},">":function(m){return Math.sin(m*Math.PI/2)},"<":function(m){return-Math.cos(m*Math.PI/2)+1},bezier:function(m,s,d,v){return function(C){return C<0?m>0?s/m*C:d>0?v/d*C:0:C>1?d<1?(1-v)/(1-d)*C+(v-d)/(1-d):m<1?(1-s)/(1-m)*C+(s-m)/(1-m):1:3*C*(1-C)**2*s+3*C**2*(1-C)*v+C**3}},steps:function(m,s="end"){s=s.split("-").reverse()[0];let d=m;return s==="none"?--d:s==="both"&&++d,(v,C=!1)=>{let T=Math.floor(v*m);const O=v*T%1===0;return(s==="start"||s==="both")&&++T,C&&O&&--T,v>=0&&T<0&&(T=0),v<=1&&T>d&&(T=d),T/d}}};class Stepper{done(){return!1}}class Ease extends Stepper{constructor(s=timeline.ease){super(),this.ease=easing[s]||s}step(s,d,v){return typeof s!="number"?v<1?s:d:s+(d-s)*this.ease(v)}}class Controller extends Stepper{constructor(s){super(),this.stepper=s}done(s){return s.done}step(s,d,v,C){return this.stepper(s,d,v,C)}}function recalculate(){const m=(this._duration||500)/1e3,s=this._overshoot||0,d=1e-10,v=Math.PI,C=Math.log(s/100+d),T=-C/Math.sqrt(v*v+C*C),O=3.9/(T*m);this.d=2*T*O,this.k=O*O}class Spring extends Controller{constructor(s=500,d=0){super(),this.duration(s).overshoot(d)}step(s,d,v,C){if(typeof s=="string")return s;if(C.done=v===1/0,v===1/0)return d;if(v===0)return s;v>100&&(v=16),v/=1e3;const T=C.velocity||0,O=-this.d*T-this.k*(s-d),N=s+T*v+O*v*v/2;return C.velocity=T+O*v,C.done=Math.abs(d-N)+Math.abs(T)<.002,C.done?d:N}}extend(Spring,{duration:makeSetterGetter("_duration",recalculate),overshoot:makeSetterGetter("_overshoot",recalculate)});class PID extends Controller{constructor(s=.1,d=.01,v=0,C=1e3){super(),this.p(s).i(d).d(v).windup(C)}step(s,d,v,C){if(typeof s=="string")return s;if(C.done=v===1/0,v===1/0)return d;if(v===0)return s;const T=d-s;let O=(C.integral||0)+T*v;const N=(T-(C.error||0))/v,M=this._windup;return M!==!1&&(O=Math.max(-M,Math.min(O,M))),C.error=T,C.integral=O,C.done=Math.abs(T)<.001,C.done?d:s+(this.P*T+this.I*O+this.D*N)}}extend(PID,{windup:makeSetterGetter("_windup"),p:makeSetterGetter("P"),i:makeSetterGetter("I"),d:makeSetterGetter("D")});const segmentParameters={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0},pathHandlers={M:function(m,s,d){return s.x=d.x=m[0],s.y=d.y=m[1],["M",s.x,s.y]},L:function(m,s){return s.x=m[0],s.y=m[1],["L",m[0],m[1]]},H:function(m,s){return s.x=m[0],["H",m[0]]},V:function(m,s){return s.y=m[0],["V",m[0]]},C:function(m,s){return s.x=m[4],s.y=m[5],["C",m[0],m[1],m[2],m[3],m[4],m[5]]},S:function(m,s){return s.x=m[2],s.y=m[3],["S",m[0],m[1],m[2],m[3]]},Q:function(m,s){return s.x=m[2],s.y=m[3],["Q",m[0],m[1],m[2],m[3]]},T:function(m,s){return s.x=m[0],s.y=m[1],["T",m[0],m[1]]},Z:function(m,s,d){return s.x=d.x,s.y=d.y,["Z"]},A:function(m,s){return s.x=m[5],s.y=m[6],["A",m[0],m[1],m[2],m[3],m[4],m[5],m[6]]}},mlhvqtcsaz="mlhvqtcsaz".split("");for(let m=0,s=mlhvqtcsaz.length;m<s;++m)pathHandlers[mlhvqtcsaz[m]]=function(d){return function(v,C,T){if(d==="H")v[0]=v[0]+C.x;else if(d==="V")v[0]=v[0]+C.y;else if(d==="A")v[5]=v[5]+C.x,v[6]=v[6]+C.y;else for(let O=0,N=v.length;O<N;++O)v[O]=v[O]+(O%2?C.y:C.x);return pathHandlers[d](v,C,T)}}(mlhvqtcsaz[m].toUpperCase());function makeAbsolut(m){const s=m.segment[0];return pathHandlers[s](m.segment.slice(1),m.p,m.p0)}function segmentComplete(m){return m.segment.length&&m.segment.length-1===segmentParameters[m.segment[0].toUpperCase()]}function startNewSegment(m,s){m.inNumber&&finalizeNumber(m,!1);const d=isPathLetter.test(s);if(d)m.segment=[s];else{const v=m.lastCommand,C=v.toLowerCase(),T=v===C;m.segment=[C==="m"?T?"l":"L":v]}return m.inSegment=!0,m.lastCommand=m.segment[0],d}function finalizeNumber(m,s){if(!m.inNumber)throw new Error("Parser Error");m.number&&m.segment.push(parseFloat(m.number)),m.inNumber=s,m.number="",m.pointSeen=!1,m.hasExponent=!1,segmentComplete(m)&&finalizeSegment(m)}function finalizeSegment(m){m.inSegment=!1,m.absolute&&(m.segment=makeAbsolut(m)),m.segments.push(m.segment)}function isArcFlag(m){if(!m.segment.length)return!1;const s=m.segment[0].toUpperCase()==="A",d=m.segment.length;return s&&(d===4||d===5)}function isExponential(m){return m.lastToken.toUpperCase()==="E"}function pathParser(m,s=!0){let d=0,v="";const C={segment:[],inNumber:!1,number:"",lastToken:"",inSegment:!1,segments:[],pointSeen:!1,hasExponent:!1,absolute:s,p0:new Point,p:new Point};for(;C.lastToken=v,v=m.charAt(d++);)if(!(!C.inSegment&&startNewSegment(C,v))){if(v==="."){if(C.pointSeen||C.hasExponent){finalizeNumber(C,!1),--d;continue}C.inNumber=!0,C.pointSeen=!0,C.number+=v;continue}if(!isNaN(parseInt(v))){if(C.number==="0"||isArcFlag(C)){C.inNumber=!0,C.number=v,finalizeNumber(C,!0);continue}C.inNumber=!0,C.number+=v;continue}if(v===" "||v===","){C.inNumber&&finalizeNumber(C,!1);continue}if(v==="-"){if(C.inNumber&&!isExponential(C)){finalizeNumber(C,!1),--d;continue}C.number+=v,C.inNumber=!0;continue}if(v.toUpperCase()==="E"){C.number+=v,C.hasExponent=!0;continue}if(isPathLetter.test(v)){if(C.inNumber)finalizeNumber(C,!1);else if(segmentComplete(C))finalizeSegment(C);else throw new Error("parser Error");--d}}return C.inNumber&&finalizeNumber(C,!1),C.inSegment&&segmentComplete(C)&&finalizeSegment(C),C.segments}function arrayToString(m){let s="";for(let d=0,v=m.length;d<v;d++)s+=m[d][0],m[d][1]!=null&&(s+=m[d][1],m[d][2]!=null&&(s+=" ",s+=m[d][2],m[d][3]!=null&&(s+=" ",s+=m[d][3],s+=" ",s+=m[d][4],m[d][5]!=null&&(s+=" ",s+=m[d][5],s+=" ",s+=m[d][6],m[d][7]!=null&&(s+=" ",s+=m[d][7])))));return s+" "}class PathArray extends SVGArray{bbox(){return parser().path.setAttribute("d",this.toString()),new Box(parser.nodes.path.getBBox())}move(s,d){const v=this.bbox();if(s-=v.x,d-=v.y,!isNaN(s)&&!isNaN(d))for(let C,T=this.length-1;T>=0;T--)C=this[T][0],C==="M"||C==="L"||C==="T"?(this[T][1]+=s,this[T][2]+=d):C==="H"?this[T][1]+=s:C==="V"?this[T][1]+=d:C==="C"||C==="S"||C==="Q"?(this[T][1]+=s,this[T][2]+=d,this[T][3]+=s,this[T][4]+=d,C==="C"&&(this[T][5]+=s,this[T][6]+=d)):C==="A"&&(this[T][6]+=s,this[T][7]+=d);return this}parse(s="M0 0"){return Array.isArray(s)&&(s=Array.prototype.concat.apply([],s).toString()),pathParser(s)}size(s,d){const v=this.bbox();let C,T;for(v.width=v.width===0?1:v.width,v.height=v.height===0?1:v.height,C=this.length-1;C>=0;C--)T=this[C][0],T==="M"||T==="L"||T==="T"?(this[C][1]=(this[C][1]-v.x)*s/v.width+v.x,this[C][2]=(this[C][2]-v.y)*d/v.height+v.y):T==="H"?this[C][1]=(this[C][1]-v.x)*s/v.width+v.x:T==="V"?this[C][1]=(this[C][1]-v.y)*d/v.height+v.y:T==="C"||T==="S"||T==="Q"?(this[C][1]=(this[C][1]-v.x)*s/v.width+v.x,this[C][2]=(this[C][2]-v.y)*d/v.height+v.y,this[C][3]=(this[C][3]-v.x)*s/v.width+v.x,this[C][4]=(this[C][4]-v.y)*d/v.height+v.y,T==="C"&&(this[C][5]=(this[C][5]-v.x)*s/v.width+v.x,this[C][6]=(this[C][6]-v.y)*d/v.height+v.y)):T==="A"&&(this[C][1]=this[C][1]*s/v.width,this[C][2]=this[C][2]*d/v.height,this[C][6]=(this[C][6]-v.x)*s/v.width+v.x,this[C][7]=(this[C][7]-v.y)*d/v.height+v.y);return this}toString(){return arrayToString(this)}}const getClassForType=m=>{const s=typeof m;return s==="number"?SVGNumber:s==="string"?Color.isColor(m)?Color:delimiter.test(m)?isPathLetter.test(m)?PathArray:SVGArray:numberAndUnit.test(m)?SVGNumber:NonMorphable:morphableTypes.indexOf(m.constructor)>-1?m.constructor:Array.isArray(m)?SVGArray:s==="object"?ObjectBag:NonMorphable};class Morphable{constructor(s){this._stepper=s||new Ease("-"),this._from=null,this._to=null,this._type=null,this._context=null,this._morphObj=null}at(s){return this._morphObj.morph(this._from,this._to,s,this._stepper,this._context)}done(){return this._context.map(this._stepper.done).reduce(function(d,v){return d&&v},!0)}from(s){return s==null?this._from:(this._from=this._set(s),this)}stepper(s){return s==null?this._stepper:(this._stepper=s,this)}to(s){return s==null?this._to:(this._to=this._set(s),this)}type(s){return s==null?this._type:(this._type=s,this)}_set(s){this._type||this.type(getClassForType(s));let d=new this._type(s);return this._type===Color&&(d=this._to?d[this._to[4]]():this._from?d[this._from[4]]():d),this._type===ObjectBag&&(d=this._to?d.align(this._to):this._from?d.align(this._from):d),d=d.toConsumable(),this._morphObj=this._morphObj||new this._type,this._context=this._context||Array.apply(null,Array(d.length)).map(Object).map(function(v){return v.done=!0,v}),d}}class NonMorphable{constructor(...s){this.init(...s)}init(s){return s=Array.isArray(s)?s[0]:s,this.value=s,this}toArray(){return[this.value]}valueOf(){return this.value}}class TransformBag{constructor(...s){this.init(...s)}init(s){return Array.isArray(s)&&(s={scaleX:s[0],scaleY:s[1],shear:s[2],rotate:s[3],translateX:s[4],translateY:s[5],originX:s[6],originY:s[7]}),Object.assign(this,TransformBag.defaults,s),this}toArray(){const s=this;return[s.scaleX,s.scaleY,s.shear,s.rotate,s.translateX,s.translateY,s.originX,s.originY]}}TransformBag.defaults={scaleX:1,scaleY:1,shear:0,rotate:0,translateX:0,translateY:0,originX:0,originY:0};const sortByKey=(m,s)=>m[0]<s[0]?-1:m[0]>s[0]?1:0;class ObjectBag{constructor(...s){this.init(...s)}align(s){const d=this.values;for(let v=0,C=d.length;v<C;++v){if(d[v+1]===s[v+1]){if(d[v+1]===Color&&s[v+7]!==d[v+7]){const N=s[v+7],M=new Color(this.values.splice(v+3,5))[N]().toArray();this.values.splice(v+3,0,...M)}v+=d[v+2]+2;continue}if(!s[v+1])return this;const T=new s[v+1]().toArray(),O=d[v+2]+3;d.splice(v,O,s[v],s[v+1],s[v+2],...T),v+=d[v+2]+2}return this}init(s){if(this.values=[],Array.isArray(s)){this.values=s.slice();return}s=s||{};const d=[];for(const v in s){const C=getClassForType(s[v]),T=new C(s[v]).toArray();d.push([v,C,T.length,...T])}return d.sort(sortByKey),this.values=d.reduce((v,C)=>v.concat(C),[]),this}toArray(){return this.values}valueOf(){const s={},d=this.values;for(;d.length;){const v=d.shift(),C=d.shift(),T=d.shift(),O=d.splice(0,T);s[v]=new C(O)}return s}}const morphableTypes=[NonMorphable,TransformBag,ObjectBag];function registerMorphableType(m=[]){morphableTypes.push(...[].concat(m))}function makeMorphable(){extend(morphableTypes,{to(m){return new Morphable().type(this.constructor).from(this.toArray()).to(m)},fromArray(m){return this.init(m),this},toConsumable(){return this.toArray()},morph(m,s,d,v,C){const T=function(O,N){return v.step(O,s[N],d,C[N],C)};return this.fromArray(m.map(T))}})}class Path extends Shape{constructor(s,d=s){super(nodeOrNew("path",s),d)}array(){return this._array||(this._array=new PathArray(this.attr("d")))}clear(){return delete this._array,this}height(s){return s==null?this.bbox().height:this.size(this.bbox().width,s)}move(s,d){return this.attr("d",this.array().move(s,d))}plot(s){return s==null?this.array():this.clear().attr("d",typeof s=="string"?s:this._array=new PathArray(s))}size(s,d){const v=proportionalSize(this,s,d);return this.attr("d",this.array().size(v.width,v.height))}width(s){return s==null?this.bbox().width:this.size(s,this.bbox().height)}x(s){return s==null?this.bbox().x:this.move(s,this.bbox().y)}y(s){return s==null?this.bbox().y:this.move(this.bbox().x,s)}}Path.prototype.MorphArray=PathArray;registerMethods({Container:{path:wrapWithAttrCheck(function(m){return this.put(new Path).plot(m||new PathArray)})}});register(Path,"Path");function array(){return this._array||(this._array=new PointArray(this.attr("points")))}function clear(){return delete this._array,this}function move$2(m,s){return this.attr("points",this.array().move(m,s))}function plot(m){return m==null?this.array():this.clear().attr("points",typeof m=="string"?m:this._array=new PointArray(m))}function size$1(m,s){const d=proportionalSize(this,m,s);return this.attr("points",this.array().size(d.width,d.height))}var poly={__proto__:null,array,clear,move:move$2,plot,size:size$1};class Polygon extends Shape{constructor(s,d=s){super(nodeOrNew("polygon",s),d)}}registerMethods({Container:{polygon:wrapWithAttrCheck(function(m){return this.put(new Polygon).plot(m||new PointArray)})}});extend(Polygon,pointed);extend(Polygon,poly);register(Polygon,"Polygon");class Polyline extends Shape{constructor(s,d=s){super(nodeOrNew("polyline",s),d)}}registerMethods({Container:{polyline:wrapWithAttrCheck(function(m){return this.put(new Polyline).plot(m||new PointArray)})}});extend(Polyline,pointed);extend(Polyline,poly);register(Polyline,"Polyline");class Rect extends Shape{constructor(s,d=s){super(nodeOrNew("rect",s),d)}}extend(Rect,{rx,ry});registerMethods({Container:{rect:wrapWithAttrCheck(function(m,s){return this.put(new Rect).size(m,s)})}});register(Rect,"Rect");class Queue{constructor(){this._first=null,this._last=null}first(){return this._first&&this._first.value}last(){return this._last&&this._last.value}push(s){const d=typeof s.next<"u"?s:{value:s,next:null,prev:null};return this._last?(d.prev=this._last,this._last.next=d,this._last=d):(this._last=d,this._first=d),d}remove(s){s.prev&&(s.prev.next=s.next),s.next&&(s.next.prev=s.prev),s===this._last&&(this._last=s.prev),s===this._first&&(this._first=s.next),s.prev=null,s.next=null}shift(){const s=this._first;return s?(this._first=s.next,this._first&&(this._first.prev=null),this._last=this._first?this._last:null,s.value):null}}const Animator={nextDraw:null,frames:new Queue,timeouts:new Queue,immediates:new Queue,timer:()=>globals.window.performance||globals.window.Date,transforms:[],frame(m){const s=Animator.frames.push({run:m});return Animator.nextDraw===null&&(Animator.nextDraw=globals.window.requestAnimationFrame(Animator._draw)),s},timeout(m,s){s=s||0;const d=Animator.timer().now()+s,v=Animator.timeouts.push({run:m,time:d});return Animator.nextDraw===null&&(Animator.nextDraw=globals.window.requestAnimationFrame(Animator._draw)),v},immediate(m){const s=Animator.immediates.push(m);return Animator.nextDraw===null&&(Animator.nextDraw=globals.window.requestAnimationFrame(Animator._draw)),s},cancelFrame(m){m!=null&&Animator.frames.remove(m)},clearTimeout(m){m!=null&&Animator.timeouts.remove(m)},cancelImmediate(m){m!=null&&Animator.immediates.remove(m)},_draw(m){let s=null;const d=Animator.timeouts.last();for(;(s=Animator.timeouts.shift())&&(m>=s.time?s.run():Animator.timeouts.push(s),s!==d););let v=null;const C=Animator.frames.last();for(;v!==C&&(v=Animator.frames.shift());)v.run(m);let T=null;for(;T=Animator.immediates.shift();)T();Animator.nextDraw=Animator.timeouts.first()||Animator.frames.first()?globals.window.requestAnimationFrame(Animator._draw):null}},makeSchedule=function(m){const s=m.start,d=m.runner.duration(),v=s+d;return{start:s,duration:d,end:v,runner:m.runner}},defaultSource=function(){const m=globals.window;return(m.performance||m.Date).now()};class Timeline extends EventTarget{constructor(s=defaultSource){super(),this._timeSource=s,this._startTime=0,this._speed=1,this._persist=0,this._nextFrame=null,this._paused=!0,this._runners=[],this._runnerIds=[],this._lastRunnerId=-1,this._time=0,this._lastSourceTime=0,this._lastStepTime=0,this._step=this._stepFn.bind(this,!1),this._stepImmediate=this._stepFn.bind(this,!0)}active(){return!!this._nextFrame}finish(){return this.time(this.getEndTimeOfTimeline()+1),this.pause()}getEndTime(){const s=this.getLastRunnerInfo(),d=s?s.runner.duration():0;return(s?s.start:this._time)+d}getEndTimeOfTimeline(){const s=this._runners.map(d=>d.start+d.runner.duration());return Math.max(0,...s)}getLastRunnerInfo(){return this.getRunnerInfoById(this._lastRunnerId)}getRunnerInfoById(s){return this._runners[this._runnerIds.indexOf(s)]||null}pause(){return this._paused=!0,this._continue()}persist(s){return s==null?this._persist:(this._persist=s,this)}play(){return this._paused=!1,this.updateTime()._continue()}reverse(s){const d=this.speed();if(s==null)return this.speed(-d);const v=Math.abs(d);return this.speed(s?-v:v)}schedule(s,d,v){if(s==null)return this._runners.map(makeSchedule);let C=0;const T=this.getEndTime();if(d=d||0,v==null||v==="last"||v==="after")C=T;else if(v==="absolute"||v==="start")C=d,d=0;else if(v==="now")C=this._time;else if(v==="relative"){const M=this.getRunnerInfoById(s.id);M&&(C=M.start+d,d=0)}else if(v==="with-last"){const M=this.getLastRunnerInfo();C=M?M.start:this._time}else throw new Error('Invalid value for the "when" parameter');s.unschedule(),s.timeline(this);const O=s.persist(),N={persist:O===null?this._persist:O,start:C+d,runner:s};return this._lastRunnerId=s.id,this._runners.push(N),this._runners.sort((M,B)=>M.start-B.start),this._runnerIds=this._runners.map(M=>M.runner.id),this.updateTime()._continue(),this}seek(s){return this.time(this._time+s)}source(s){return s==null?this._timeSource:(this._timeSource=s,this)}speed(s){return s==null?this._speed:(this._speed=s,this)}stop(){return this.time(0),this.pause()}time(s){return s==null?this._time:(this._time=s,this._continue(!0))}unschedule(s){const d=this._runnerIds.indexOf(s.id);return d<0?this:(this._runners.splice(d,1),this._runnerIds.splice(d,1),s.timeline(null),this)}updateTime(){return this.active()||(this._lastSourceTime=this._timeSource()),this}_continue(s=!1){return Animator.cancelFrame(this._nextFrame),this._nextFrame=null,s?this._stepImmediate():this._paused?this:(this._nextFrame=Animator.frame(this._step),this)}_stepFn(s=!1){const d=this._timeSource();let v=d-this._lastSourceTime;s&&(v=0);const C=this._speed*v+(this._time-this._lastStepTime);this._lastSourceTime=d,s||(this._time+=C,this._time=this._time<0?0:this._time),this._lastStepTime=this._time,this.fire("time",this._time);for(let O=this._runners.length;O--;){const N=this._runners[O],M=N.runner;this._time-N.start<=0&&M.reset()}let T=!1;for(let O=0,N=this._runners.length;O<N;O++){const M=this._runners[O],B=M.runner;let z=C;const $=this._time-M.start;if($<=0){T=!0;continue}else $<z&&(z=$);if(!B.active())continue;B.step(z).done?M.persist!==!0&&B.duration()-B.time()+this._time+M.persist<this._time&&(B.unschedule(),--O,--N):T=!0}return T&&!(this._speed<0&&this._time===0)||this._runnerIds.length&&this._speed<0&&this._time>0?this._continue():(this.pause(),this.fire("finished")),this}}registerMethods({Element:{timeline:function(m){return m==null?(this._timeline=this._timeline||new Timeline,this._timeline):(this._timeline=m,this)}}});class Runner extends EventTarget{constructor(s){super(),this.id=Runner.id++,s=s??timeline.duration,s=typeof s=="function"?new Controller(s):s,this._element=null,this._timeline=null,this.done=!1,this._queue=[],this._duration=typeof s=="number"&&s,this._isDeclarative=s instanceof Controller,this._stepper=this._isDeclarative?s:new Ease,this._history={},this.enabled=!0,this._time=0,this._lastTime=0,this._reseted=!0,this.transforms=new Matrix,this.transformId=1,this._haveReversed=!1,this._reverse=!1,this._loopsDone=0,this._swing=!1,this._wait=0,this._times=1,this._frameId=null,this._persist=this._isDeclarative?!0:null}static sanitise(s,d,v){let C=1,T=!1,O=0;return s=s||timeline.duration,d=d||timeline.delay,v=v||"last",typeof s=="object"&&!(s instanceof Stepper)&&(d=s.delay||d,v=s.when||v,T=s.swing||T,C=s.times||C,O=s.wait||O,s=s.duration||timeline.duration),{duration:s,delay:d,swing:T,times:C,wait:O,when:v}}active(s){return s==null?this.enabled:(this.enabled=s,this)}addTransform(s,d){return this.transforms.lmultiplyO(s),this}after(s){return this.on("finished",s)}animate(s,d,v){const C=Runner.sanitise(s,d,v),T=new Runner(C.duration);return this._timeline&&T.timeline(this._timeline),this._element&&T.element(this._element),T.loop(C).schedule(C.delay,C.when)}clearTransform(){return this.transforms=new Matrix,this}clearTransformsFromQueue(){(!this.done||!this._timeline||!this._timeline._runnerIds.includes(this.id))&&(this._queue=this._queue.filter(s=>!s.isTransform))}delay(s){return this.animate(0,s)}duration(){return this._times*(this._wait+this._duration)-this._wait}during(s){return this.queue(null,s)}ease(s){return this._stepper=new Ease(s),this}element(s){return s==null?this._element:(this._element=s,s._prepareRunner(),this)}finish(){return this.step(1/0)}loop(s,d,v){return typeof s=="object"&&(d=s.swing,v=s.wait,s=s.times),this._times=s||1/0,this._swing=d||!1,this._wait=v||0,this._times===!0&&(this._times=1/0),this}loops(s){const d=this._duration+this._wait;if(s==null){const O=Math.floor(this._time/d),M=(this._time-O*d)/this._duration;return Math.min(O+M,this._times)}const v=Math.floor(s),C=s%1,T=d*v+this._duration*C;return this.time(T)}persist(s){return s==null?this._persist:(this._persist=s,this)}position(s){const d=this._time,v=this._duration,C=this._wait,T=this._times,O=this._swing,N=this._reverse;let M;if(s==null){const H=function(ot){const lt=O*Math.floor(ot%(2*(C+v))/(C+v)),bt=lt&&!N||!lt&&N,ft=Math.pow(-1,bt)*(ot%(C+v))/v+bt;return Math.max(Math.min(ft,1),0)},j=T*(C+v)-C;return M=d<=0?Math.round(H(1e-5)):d<j?H(d):Math.round(H(j-1e-5)),M}const B=Math.floor(this.loops()),z=O&&B%2===0;return M=B+(z&&!N||N&&z?s:1-s),this.loops(M)}progress(s){return s==null?Math.min(1,this._time/this.duration()):this.time(s*this.duration())}queue(s,d,v,C){return this._queue.push({initialiser:s||noop,runner:d||noop,retarget:v,isTransform:C,initialised:!1,finished:!1}),this.timeline()&&this.timeline()._continue(),this}reset(){return this._reseted?this:(this.time(0),this._reseted=!0,this)}reverse(s){return this._reverse=s??!this._reverse,this}schedule(s,d,v){if(s instanceof Timeline||(v=d,d=s,s=this.timeline()),!s)throw Error("Runner cannot be scheduled without timeline");return s.schedule(this,d,v),this}step(s){if(!this.enabled)return this;s=s??16,this._time+=s;const d=this.position(),v=this._lastPosition!==d&&this._time>=0;this._lastPosition=d;const C=this.duration(),T=this._lastTime<=0&&this._time>0,O=this._lastTime<C&&this._time>=C;this._lastTime=this._time,T&&this.fire("start",this);const N=this._isDeclarative;this.done=!N&&!O&&this._time>=C,this._reseted=!1;let M=!1;return(v||N)&&(this._initialise(v),this.transforms=new Matrix,M=this._run(N?s:d),this.fire("step",this)),this.done=this.done||M&&N,O&&this.fire("finished",this),this}time(s){if(s==null)return this._time;const d=s-this._time;return this.step(d),this}timeline(s){return typeof s>"u"?this._timeline:(this._timeline=s,this)}unschedule(){const s=this.timeline();return s&&s.unschedule(this),this}_initialise(s){if(!(!s&&!this._isDeclarative))for(let d=0,v=this._queue.length;d<v;++d){const C=this._queue[d],T=this._isDeclarative||!C.initialised&&s;s=!C.finished,T&&s&&(C.initialiser.call(this),C.initialised=!0)}}_rememberMorpher(s,d){if(this._history[s]={morpher:d,caller:this._queue[this._queue.length-1]},this._isDeclarative){const v=this.timeline();v&&v.play()}}_run(s){let d=!0;for(let v=0,C=this._queue.length;v<C;++v){const T=this._queue[v],O=T.runner.call(this,s);T.finished=T.finished||O===!0,d=d&&T.finished}return d}_tryRetarget(s,d,v){if(this._history[s]){if(!this._history[s].caller.initialised){const T=this._queue.indexOf(this._history[s].caller);return this._queue.splice(T,1),!1}this._history[s].caller.retarget?this._history[s].caller.retarget.call(this,d,v):this._history[s].morpher.to(d),this._history[s].caller.finished=!1;const C=this.timeline();return C&&C.play(),!0}return!1}}Runner.id=0;class FakeRunner{constructor(s=new Matrix,d=-1,v=!0){this.transforms=s,this.id=d,this.done=v}clearTransformsFromQueue(){}}extend([Runner,FakeRunner],{mergeWith(m){return new FakeRunner(m.transforms.lmultiply(this.transforms),m.id)}});const lmultiply=(m,s)=>m.lmultiplyO(s),getRunnerTransform=m=>m.transforms;function mergeTransforms(){const s=this._transformationRunners.runners.map(getRunnerTransform).reduce(lmultiply,new Matrix);this.transform(s),this._transformationRunners.merge(),this._transformationRunners.length()===1&&(this._frameId=null)}class RunnerArray{constructor(){this.runners=[],this.ids=[]}add(s){if(this.runners.includes(s))return;const d=s.id+1;return this.runners.push(s),this.ids.push(d),this}clearBefore(s){const d=this.ids.indexOf(s+1)||1;return this.ids.splice(0,d,0),this.runners.splice(0,d,new FakeRunner).forEach(v=>v.clearTransformsFromQueue()),this}edit(s,d){const v=this.ids.indexOf(s+1);return this.ids.splice(v,1,s+1),this.runners.splice(v,1,d),this}getByID(s){return this.runners[this.ids.indexOf(s+1)]}length(){return this.ids.length}merge(){let s=null;for(let d=0;d<this.runners.length;++d){const v=this.runners[d];if(s&&v.done&&s.done&&(!v._timeline||!v._timeline._runnerIds.includes(v.id))&&(!s._timeline||!s._timeline._runnerIds.includes(s.id))){this.remove(v.id);const T=v.mergeWith(s);this.edit(s.id,T),s=T,--d}else s=v}return this}remove(s){const d=this.ids.indexOf(s+1);return this.ids.splice(d,1),this.runners.splice(d,1),this}}registerMethods({Element:{animate(m,s,d){const v=Runner.sanitise(m,s,d),C=this.timeline();return new Runner(v.duration).loop(v).element(this).timeline(C.play()).schedule(v.delay,v.when)},delay(m,s){return this.animate(0,m,s)},_clearTransformRunnersBefore(m){this._transformationRunners.clearBefore(m.id)},_currentTransform(m){return this._transformationRunners.runners.filter(s=>s.id<=m.id).map(getRunnerTransform).reduce(lmultiply,new Matrix)},_addRunner(m){this._transformationRunners.add(m),Animator.cancelImmediate(this._frameId),this._frameId=Animator.immediate(mergeTransforms.bind(this))},_prepareRunner(){this._frameId==null&&(this._transformationRunners=new RunnerArray().add(new FakeRunner(new Matrix(this))))}}});const difference=(m,s)=>m.filter(d=>!s.includes(d));extend(Runner,{attr(m,s){return this.styleAttr("attr",m,s)},css(m,s){return this.styleAttr("css",m,s)},styleAttr(m,s,d){if(typeof s=="string")return this.styleAttr(m,{[s]:d});let v=s;if(this._tryRetarget(m,v))return this;let C=new Morphable(this._stepper).to(v),T=Object.keys(v);return this.queue(function(){C=C.from(this.element()[m](T))},function(O){return this.element()[m](C.at(O).valueOf()),C.done()},function(O){const N=Object.keys(O),M=difference(N,T);if(M.length){const z=this.element()[m](M),$=new ObjectBag(C.from()).valueOf();Object.assign($,z),C.from($)}const B=new ObjectBag(C.to()).valueOf();Object.assign(B,O),C.to(B),T=N,v=O}),this._rememberMorpher(m,C),this},zoom(m,s){if(this._tryRetarget("zoom",m,s))return this;let d=new Morphable(this._stepper).to(new SVGNumber(m));return this.queue(function(){d=d.from(this.element().zoom())},function(v){return this.element().zoom(d.at(v),s),d.done()},function(v,C){s=C,d.to(v)}),this._rememberMorpher("zoom",d),this},transform(m,s,d){if(s=m.relative||s,this._isDeclarative&&!s&&this._tryRetarget("transform",m))return this;const v=Matrix.isMatrixLike(m);d=m.affine!=null?m.affine:d??!v;const C=new Morphable(this._stepper).type(d?TransformBag:Matrix);let T,O,N,M,B;function z(){O=O||this.element(),T=T||getOrigin(m,O),B=new Matrix(s?void 0:O),O._addRunner(this),s||O._clearTransformRunnersBefore(this)}function $(j){s||this.clearTransform();const{x:ot,y:lt}=new Point(T).transform(O._currentTransform(this));let bt=new Matrix({...m,origin:[ot,lt]}),ft=this._isDeclarative&&N?N:B;if(d){bt=bt.decompose(ot,lt),ft=ft.decompose(ot,lt);const Mt=bt.rotate,Ht=ft.rotate,Bt=[Mt-360,Mt,Mt+360],$t=Bt.map(de=>Math.abs(de-Ht)),Gt=Math.min(...$t),Pt=$t.indexOf(Gt);bt.rotate=Bt[Pt]}s&&(v||(bt.rotate=m.rotate||0),this._isDeclarative&&M&&(ft.rotate=M)),C.from(ft),C.to(bt);const Tt=C.at(j);return M=Tt.rotate,N=new Matrix(Tt),this.addTransform(N),O._addRunner(this),C.done()}function H(j){(j.origin||"center").toString()!==(m.origin||"center").toString()&&(T=getOrigin(j,O)),m={...j,origin:T}}return this.queue(z,$,H,!0),this._isDeclarative&&this._rememberMorpher("transform",C),this},x(m,s){return this._queueNumber("x",m)},y(m){return this._queueNumber("y",m)},dx(m=0){return this._queueNumberDelta("x",m)},dy(m=0){return this._queueNumberDelta("y",m)},dmove(m,s){return this.dx(m).dy(s)},_queueNumberDelta(m,s){if(s=new SVGNumber(s),this._tryRetarget(m,s))return this;const d=new Morphable(this._stepper).to(s);let v=null;return this.queue(function(){v=this.element()[m](),d.from(v),d.to(v+s)},function(C){return this.element()[m](d.at(C)),d.done()},function(C){d.to(v+new SVGNumber(C))}),this._rememberMorpher(m,d),this},_queueObject(m,s){if(this._tryRetarget(m,s))return this;const d=new Morphable(this._stepper).to(s);return this.queue(function(){d.from(this.element()[m]())},function(v){return this.element()[m](d.at(v)),d.done()}),this._rememberMorpher(m,d),this},_queueNumber(m,s){return this._queueObject(m,new SVGNumber(s))},cx(m){return this._queueNumber("cx",m)},cy(m){return this._queueNumber("cy",m)},move(m,s){return this.x(m).y(s)},center(m,s){return this.cx(m).cy(s)},size(m,s){let d;return(!m||!s)&&(d=this._element.bbox()),m||(m=d.width/d.height*s),s||(s=d.height/d.width*m),this.width(m).height(s)},width(m){return this._queueNumber("width",m)},height(m){return this._queueNumber("height",m)},plot(m,s,d,v){if(arguments.length===4)return this.plot([m,s,d,v]);if(this._tryRetarget("plot",m))return this;const C=new Morphable(this._stepper).type(this._element.MorphArray).to(m);return this.queue(function(){C.from(this._element.array())},function(T){return this._element.plot(C.at(T)),C.done()}),this._rememberMorpher("plot",C),this},leading(m){return this._queueNumber("leading",m)},viewbox(m,s,d,v){return this._queueObject("viewbox",new Box(m,s,d,v))},update(m){return typeof m!="object"?this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]}):(m.opacity!=null&&this.attr("stop-opacity",m.opacity),m.color!=null&&this.attr("stop-color",m.color),m.offset!=null&&this.attr("offset",m.offset),this)}});extend(Runner,{rx,ry,from,to});register(Runner,"Runner");class Svg extends Container$1{constructor(s,d=s){super(nodeOrNew("svg",s),d),this.namespace()}defs(){return this.isRoot()?adopt(this.node.querySelector("defs"))||this.put(new Defs):this.root().defs()}isRoot(){return!this.node.parentNode||!(this.node.parentNode instanceof globals.window.SVGElement)&&this.node.parentNode.nodeName!=="#document-fragment"}namespace(){return this.isRoot()?this.attr({xmlns:svg,version:"1.1"}).attr("xmlns:xlink",xlink,xmlns).attr("xmlns:svgjs",svgjs,xmlns):this.root().namespace()}removeNamespace(){return this.attr({xmlns:null,version:null}).attr("xmlns:xlink",null,xmlns).attr("xmlns:svgjs",null,xmlns)}root(){return this.isRoot()?this:super.root()}}registerMethods({Container:{nested:wrapWithAttrCheck(function(){return this.put(new Svg)})}});register(Svg,"Svg",!0);let Symbol$1=class extends Container$1{constructor(s,d=s){super(nodeOrNew("symbol",s),d)}};registerMethods({Container:{symbol:wrapWithAttrCheck(function(){return this.put(new Symbol$1)})}});register(Symbol$1,"Symbol");function plain(m){return this._build===!1&&this.clear(),this.node.appendChild(globals.document.createTextNode(m)),this}function length(){return this.node.getComputedTextLength()}function x$1(m,s=this.bbox()){return m==null?s.x:this.attr("x",this.attr("x")+m-s.x)}function y$1(m,s=this.bbox()){return m==null?s.y:this.attr("y",this.attr("y")+m-s.y)}function move$1(m,s,d=this.bbox()){return this.x(m,d).y(s,d)}function cx(m,s=this.bbox()){return m==null?s.cx:this.attr("x",this.attr("x")+m-s.cx)}function cy(m,s=this.bbox()){return m==null?s.cy:this.attr("y",this.attr("y")+m-s.cy)}function center(m,s,d=this.bbox()){return this.cx(m,d).cy(s,d)}function ax(m){return this.attr("x",m)}function ay(m){return this.attr("y",m)}function amove(m,s){return this.ax(m).ay(s)}function build(m){return this._build=!!m,this}var textable={__proto__:null,plain,length,x:x$1,y:y$1,move:move$1,cx,cy,center,ax,ay,amove,build};class Text extends Shape{constructor(s,d=s){super(nodeOrNew("text",s),d),this.dom.leading=new SVGNumber(1.3),this._rebuild=!0,this._build=!1}leading(s){return s==null?this.dom.leading:(this.dom.leading=new SVGNumber(s),this.rebuild())}rebuild(s){if(typeof s=="boolean"&&(this._rebuild=s),this._rebuild){const d=this;let v=0;const C=this.dom.leading;this.each(function(T){const O=globals.window.getComputedStyle(this.node).getPropertyValue("font-size"),N=C*new SVGNumber(O);this.dom.newLined&&(this.attr("x",d.attr("x")),this.text()===`
`?v+=N:(this.attr("dy",T?N+v:0),v=0))}),this.fire("rebuild")}return this}setData(s){return this.dom=s,this.dom.leading=new SVGNumber(s.leading||1.3),this}text(s){if(s===void 0){const d=this.node.childNodes;let v=0;s="";for(let C=0,T=d.length;C<T;++C){if(d[C].nodeName==="textPath"){C===0&&(v=1);continue}C!==v&&d[C].nodeType!==3&&adopt(d[C]).dom.newLined===!0&&(s+=`
`),s+=d[C].textContent}return s}if(this.clear().build(!0),typeof s=="function")s.call(this,this);else{s=(s+"").split(`
`);for(let d=0,v=s.length;d<v;d++)this.newLine(s[d])}return this.build(!1).rebuild()}}extend(Text,textable);registerMethods({Container:{text:wrapWithAttrCheck(function(m=""){return this.put(new Text).text(m)}),plain:wrapWithAttrCheck(function(m=""){return this.put(new Text).plain(m)})}});register(Text,"Text");class Tspan extends Shape{constructor(s,d=s){super(nodeOrNew("tspan",s),d),this._build=!1}dx(s){return this.attr("dx",s)}dy(s){return this.attr("dy",s)}newLine(){this.dom.newLined=!0;const s=this.parent();if(!(s instanceof Text))return this;const d=s.index(this),v=globals.window.getComputedStyle(this.node).getPropertyValue("font-size"),C=s.dom.leading*new SVGNumber(v);return this.dy(d?C:0).attr("x",s.x())}text(s){return s==null?this.node.textContent+(this.dom.newLined?`
`:""):(typeof s=="function"?(this.clear().build(!0),s.call(this,this),this.build(!1)):this.plain(s),this)}}extend(Tspan,textable);registerMethods({Tspan:{tspan:wrapWithAttrCheck(function(m=""){const s=new Tspan;return this._build||this.clear(),this.put(s).text(m)})},Text:{newLine:function(m=""){return this.tspan(m).newLine()}}});register(Tspan,"Tspan");class Circle extends Shape{constructor(s,d=s){super(nodeOrNew("circle",s),d)}radius(s){return this.attr("r",s)}rx(s){return this.attr("r",s)}ry(s){return this.rx(s)}size(s){return this.radius(new SVGNumber(s).divide(2))}}extend(Circle,{x:x$3,y:y$3,cx:cx$1,cy:cy$1,width:width$2,height:height$2});registerMethods({Container:{circle:wrapWithAttrCheck(function(m=0){return this.put(new Circle).size(m).move(0,0)})}});register(Circle,"Circle");class ClipPath extends Container$1{constructor(s,d=s){super(nodeOrNew("clipPath",s),d)}remove(){return this.targets().forEach(function(s){s.unclip()}),super.remove()}targets(){return baseFind("svg [clip-path*="+this.id()+"]")}}registerMethods({Container:{clip:wrapWithAttrCheck(function(){return this.defs().put(new ClipPath)})},Element:{clipper(){return this.reference("clip-path")},clipWith(m){const s=m instanceof ClipPath?m:this.parent().clip().add(m);return this.attr("clip-path","url(#"+s.id()+")")},unclip(){return this.attr("clip-path",null)}}});register(ClipPath,"ClipPath");class ForeignObject extends Element{constructor(s,d=s){super(nodeOrNew("foreignObject",s),d)}}registerMethods({Container:{foreignObject:wrapWithAttrCheck(function(m,s){return this.put(new ForeignObject).size(m,s)})}});register(ForeignObject,"ForeignObject");function dmove(m,s){return this.children().forEach((d,v)=>{let C;try{C=d.bbox()}catch{return}const T=new Matrix(d),O=T.translate(m,s).transform(T.inverse()),N=new Point(C.x,C.y).transform(O);d.move(N.x,N.y)}),this}function dx(m){return this.dmove(m,0)}function dy(m){return this.dmove(0,m)}function height(m,s=this.bbox()){return m==null?s.height:this.size(s.width,m,s)}function move(m=0,s=0,d=this.bbox()){const v=m-d.x,C=s-d.y;return this.dmove(v,C)}function size(m,s,d=this.bbox()){const v=proportionalSize(this,m,s,d),C=v.width/d.width,T=v.height/d.height;return this.children().forEach((O,N)=>{const M=new Point(d).transform(new Matrix(O).inverse());O.scale(C,T,M.x,M.y)}),this}function width(m,s=this.bbox()){return m==null?s.width:this.size(m,s.height,s)}function x(m,s=this.bbox()){return m==null?s.x:this.move(m,s.y,s)}function y(m,s=this.bbox()){return m==null?s.y:this.move(s.x,m,s)}var containerGeometry={__proto__:null,dmove,dx,dy,height,move,size,width,x,y};class G extends Container$1{constructor(s,d=s){super(nodeOrNew("g",s),d)}}extend(G,containerGeometry);registerMethods({Container:{group:wrapWithAttrCheck(function(){return this.put(new G)})}});register(G,"G");class A extends Container$1{constructor(s,d=s){super(nodeOrNew("a",s),d)}target(s){return this.attr("target",s)}to(s){return this.attr("href",s,xlink)}}extend(A,containerGeometry);registerMethods({Container:{link:wrapWithAttrCheck(function(m){return this.put(new A).to(m)})},Element:{unlink(){const m=this.linker();if(!m)return this;const s=m.parent();if(!s)return this.remove();const d=s.index(m);return s.add(this,d),m.remove(),this},linkTo(m){let s=this.linker();return s||(s=new A,this.wrap(s)),typeof m=="function"?m.call(s,s):s.to(m),this},linker(){const m=this.parent();return m&&m.node.nodeName.toLowerCase()==="a"?m:null}}});register(A,"A");class Mask extends Container$1{constructor(s,d=s){super(nodeOrNew("mask",s),d)}remove(){return this.targets().forEach(function(s){s.unmask()}),super.remove()}targets(){return baseFind("svg [mask*="+this.id()+"]")}}registerMethods({Container:{mask:wrapWithAttrCheck(function(){return this.defs().put(new Mask)})},Element:{masker(){return this.reference("mask")},maskWith(m){const s=m instanceof Mask?m:this.parent().mask().add(m);return this.attr("mask","url(#"+s.id()+")")},unmask(){return this.attr("mask",null)}}});register(Mask,"Mask");class Stop extends Element{constructor(s,d=s){super(nodeOrNew("stop",s),d)}update(s){return(typeof s=="number"||s instanceof SVGNumber)&&(s={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),s.opacity!=null&&this.attr("stop-opacity",s.opacity),s.color!=null&&this.attr("stop-color",s.color),s.offset!=null&&this.attr("offset",new SVGNumber(s.offset)),this}}registerMethods({Gradient:{stop:function(m,s,d){return this.put(new Stop).update(m,s,d)}}});register(Stop,"Stop");function cssRule(m,s){if(!m)return"";if(!s)return m;let d=m+"{";for(const v in s)d+=unCamelCase(v)+":"+s[v]+";";return d+="}",d}class Style extends Element{constructor(s,d=s){super(nodeOrNew("style",s),d)}addText(s=""){return this.node.textContent+=s,this}font(s,d,v={}){return this.rule("@font-face",{fontFamily:s,src:d,...v})}rule(s,d){return this.addText(cssRule(s,d))}}registerMethods("Dom",{style(m,s){return this.put(new Style).rule(m,s)},fontface(m,s,d){return this.put(new Style).font(m,s,d)}});register(Style,"Style");class TextPath extends Text{constructor(s,d=s){super(nodeOrNew("textPath",s),d)}array(){const s=this.track();return s?s.array():null}plot(s){const d=this.track();let v=null;return d&&(v=d.plot(s)),s==null?v:this}track(){return this.reference("href")}}registerMethods({Container:{textPath:wrapWithAttrCheck(function(m,s){return m instanceof Text||(m=this.text(m)),m.path(s)})},Text:{path:wrapWithAttrCheck(function(m,s=!0){const d=new TextPath;m instanceof Path||(m=this.defs().path(m)),d.attr("href","#"+m,xlink);let v;if(s)for(;v=this.node.firstChild;)d.node.appendChild(v);return this.put(d)}),textPath(){return this.findOne("textPath")}},Path:{text:wrapWithAttrCheck(function(m){return m instanceof Text||(m=new Text().addTo(this.parent()).text(m)),m.path(this)}),targets(){return baseFind("svg textPath").filter(m=>(m.attr("href")||"").includes(this.id()))}}});TextPath.prototype.MorphArray=PathArray;register(TextPath,"TextPath");class Use extends Shape{constructor(s,d=s){super(nodeOrNew("use",s),d)}use(s,d){return this.attr("href",(d||"")+"#"+s,xlink)}}registerMethods({Container:{use:wrapWithAttrCheck(function(m,s){return this.put(new Use).use(m,s)})}});register(Use,"Use");const SVG=makeInstance;extend([Svg,Symbol$1,Image,Pattern,Marker],getMethodsFor("viewbox"));extend([Line,Polyline,Polygon,Path],getMethodsFor("marker"));extend(Text,getMethodsFor("Text"));extend(Path,getMethodsFor("Path"));extend(Defs,getMethodsFor("Defs"));extend([Text,Tspan],getMethodsFor("Tspan"));extend([Rect,Ellipse,Gradient,Runner],getMethodsFor("radius"));extend(EventTarget,getMethodsFor("EventTarget"));extend(Dom,getMethodsFor("Dom"));extend(Element,getMethodsFor("Element"));extend(Shape,getMethodsFor("Shape"));extend([Container$1,Fragment],getMethodsFor("Container"));extend(Gradient,getMethodsFor("Gradient"));extend(Runner,getMethodsFor("Runner"));List.extend(getMethodNames());registerMorphableType([SVGNumber,Color,Box,Matrix,SVGArray,PointArray,PathArray,Point]);makeMorphable();class Hooks{add(s,d,v){if(typeof arguments[0]!="string")for(let C in arguments[0])this.add(C,arguments[0][C],arguments[1]);else(Array.isArray(s)?s:[s]).forEach(function(C){this[C]=this[C]||[],d&&this[C][v?"unshift":"push"](d)},this)}run(s,d){this[s]=this[s]||[],this[s].forEach(function(v){v.call(d&&d.context?d.context:d,d)})}}class Plugins{constructor(s){this.jsep=s,this.registered={}}register(...s){s.forEach(d=>{if(typeof d!="object"||!d.name||!d.init)throw new Error("Invalid JSEP plugin format");this.registered[d.name]||(d.init(this.jsep),this.registered[d.name]=d)})}}class Jsep{static get version(){return"1.3.8"}static toString(){return"JavaScript Expression Parser (JSEP) v"+Jsep.version}static addUnaryOp(s){return Jsep.max_unop_len=Math.max(s.length,Jsep.max_unop_len),Jsep.unary_ops[s]=1,Jsep}static addBinaryOp(s,d,v){return Jsep.max_binop_len=Math.max(s.length,Jsep.max_binop_len),Jsep.binary_ops[s]=d,v?Jsep.right_associative.add(s):Jsep.right_associative.delete(s),Jsep}static addIdentifierChar(s){return Jsep.additional_identifier_chars.add(s),Jsep}static addLiteral(s,d){return Jsep.literals[s]=d,Jsep}static removeUnaryOp(s){return delete Jsep.unary_ops[s],s.length===Jsep.max_unop_len&&(Jsep.max_unop_len=Jsep.getMaxKeyLen(Jsep.unary_ops)),Jsep}static removeAllUnaryOps(){return Jsep.unary_ops={},Jsep.max_unop_len=0,Jsep}static removeIdentifierChar(s){return Jsep.additional_identifier_chars.delete(s),Jsep}static removeBinaryOp(s){return delete Jsep.binary_ops[s],s.length===Jsep.max_binop_len&&(Jsep.max_binop_len=Jsep.getMaxKeyLen(Jsep.binary_ops)),Jsep.right_associative.delete(s),Jsep}static removeAllBinaryOps(){return Jsep.binary_ops={},Jsep.max_binop_len=0,Jsep}static removeLiteral(s){return delete Jsep.literals[s],Jsep}static removeAllLiterals(){return Jsep.literals={},Jsep}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(s){this.expr=s,this.index=0}static parse(s){return new Jsep(s).parse()}static getMaxKeyLen(s){return Math.max(0,...Object.keys(s).map(d=>d.length))}static isDecimalDigit(s){return s>=48&&s<=57}static binaryPrecedence(s){return Jsep.binary_ops[s]||0}static isIdentifierStart(s){return s>=65&&s<=90||s>=97&&s<=122||s>=128&&!Jsep.binary_ops[String.fromCharCode(s)]||Jsep.additional_identifier_chars.has(String.fromCharCode(s))}static isIdentifierPart(s){return Jsep.isIdentifierStart(s)||Jsep.isDecimalDigit(s)}throwError(s){const d=new Error(s+" at character "+this.index);throw d.index=this.index,d.description=s,d}runHook(s,d){if(Jsep.hooks[s]){const v={context:this,node:d};return Jsep.hooks.run(s,v),v.node}return d}searchHook(s){if(Jsep.hooks[s]){const d={context:this};return Jsep.hooks[s].find(function(v){return v.call(d.context,d),d.node}),d.node}}gobbleSpaces(){let s=this.code;for(;s===Jsep.SPACE_CODE||s===Jsep.TAB_CODE||s===Jsep.LF_CODE||s===Jsep.CR_CODE;)s=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const s=this.gobbleExpressions(),d=s.length===1?s[0]:{type:Jsep.COMPOUND,body:s};return this.runHook("after-all",d)}gobbleExpressions(s){let d=[],v,C;for(;this.index<this.expr.length;)if(v=this.code,v===Jsep.SEMCOL_CODE||v===Jsep.COMMA_CODE)this.index++;else if(C=this.gobbleExpression())d.push(C);else if(this.index<this.expr.length){if(v===s)break;this.throwError('Unexpected "'+this.char+'"')}return d}gobbleExpression(){const s=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",s)}gobbleBinaryOp(){this.gobbleSpaces();let s=this.expr.substr(this.index,Jsep.max_binop_len),d=s.length;for(;d>0;){if(Jsep.binary_ops.hasOwnProperty(s)&&(!Jsep.isIdentifierStart(this.code)||this.index+s.length<this.expr.length&&!Jsep.isIdentifierPart(this.expr.charCodeAt(this.index+s.length))))return this.index+=d,s;s=s.substr(0,--d)}return!1}gobbleBinaryExpression(){let s,d,v,C,T,O,N,M,B;if(O=this.gobbleToken(),!O||(d=this.gobbleBinaryOp(),!d))return O;for(T={value:d,prec:Jsep.binaryPrecedence(d),right_a:Jsep.right_associative.has(d)},N=this.gobbleToken(),N||this.throwError("Expected expression after "+d),C=[O,T,N];d=this.gobbleBinaryOp();){if(v=Jsep.binaryPrecedence(d),v===0){this.index-=d.length;break}T={value:d,prec:v,right_a:Jsep.right_associative.has(d)},B=d;const z=$=>T.right_a&&$.right_a?v>$.prec:v<=$.prec;for(;C.length>2&&z(C[C.length-2]);)N=C.pop(),d=C.pop().value,O=C.pop(),s={type:Jsep.BINARY_EXP,operator:d,left:O,right:N},C.push(s);s=this.gobbleToken(),s||this.throwError("Expected expression after "+B),C.push(T,s)}for(M=C.length-1,s=C[M];M>1;)s={type:Jsep.BINARY_EXP,operator:C[M-1].value,left:C[M-2],right:s},M-=2;return s}gobbleToken(){let s,d,v,C;if(this.gobbleSpaces(),C=this.searchHook("gobble-token"),C)return this.runHook("after-token",C);if(s=this.code,Jsep.isDecimalDigit(s)||s===Jsep.PERIOD_CODE)return this.gobbleNumericLiteral();if(s===Jsep.SQUOTE_CODE||s===Jsep.DQUOTE_CODE)C=this.gobbleStringLiteral();else if(s===Jsep.OBRACK_CODE)C=this.gobbleArray();else{for(d=this.expr.substr(this.index,Jsep.max_unop_len),v=d.length;v>0;){if(Jsep.unary_ops.hasOwnProperty(d)&&(!Jsep.isIdentifierStart(this.code)||this.index+d.length<this.expr.length&&!Jsep.isIdentifierPart(this.expr.charCodeAt(this.index+d.length)))){this.index+=v;const T=this.gobbleToken();return T||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:Jsep.UNARY_EXP,operator:d,argument:T,prefix:!0})}d=d.substr(0,--v)}Jsep.isIdentifierStart(s)?(C=this.gobbleIdentifier(),Jsep.literals.hasOwnProperty(C.name)?C={type:Jsep.LITERAL,value:Jsep.literals[C.name],raw:C.name}:C.name===Jsep.this_str&&(C={type:Jsep.THIS_EXP})):s===Jsep.OPAREN_CODE&&(C=this.gobbleGroup())}return C?(C=this.gobbleTokenProperty(C),this.runHook("after-token",C)):this.runHook("after-token",!1)}gobbleTokenProperty(s){this.gobbleSpaces();let d=this.code;for(;d===Jsep.PERIOD_CODE||d===Jsep.OBRACK_CODE||d===Jsep.OPAREN_CODE||d===Jsep.QUMARK_CODE;){let v;if(d===Jsep.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==Jsep.PERIOD_CODE)break;v=!0,this.index+=2,this.gobbleSpaces(),d=this.code}this.index++,d===Jsep.OBRACK_CODE?(s={type:Jsep.MEMBER_EXP,computed:!0,object:s,property:this.gobbleExpression()},this.gobbleSpaces(),d=this.code,d!==Jsep.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):d===Jsep.OPAREN_CODE?s={type:Jsep.CALL_EXP,arguments:this.gobbleArguments(Jsep.CPAREN_CODE),callee:s}:(d===Jsep.PERIOD_CODE||v)&&(v&&this.index--,this.gobbleSpaces(),s={type:Jsep.MEMBER_EXP,computed:!1,object:s,property:this.gobbleIdentifier()}),v&&(s.optional=!0),this.gobbleSpaces(),d=this.code}return s}gobbleNumericLiteral(){let s="",d,v;for(;Jsep.isDecimalDigit(this.code);)s+=this.expr.charAt(this.index++);if(this.code===Jsep.PERIOD_CODE)for(s+=this.expr.charAt(this.index++);Jsep.isDecimalDigit(this.code);)s+=this.expr.charAt(this.index++);if(d=this.char,d==="e"||d==="E"){for(s+=this.expr.charAt(this.index++),d=this.char,(d==="+"||d==="-")&&(s+=this.expr.charAt(this.index++));Jsep.isDecimalDigit(this.code);)s+=this.expr.charAt(this.index++);Jsep.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+s+this.char+")")}return v=this.code,Jsep.isIdentifierStart(v)?this.throwError("Variable names cannot start with a number ("+s+this.char+")"):(v===Jsep.PERIOD_CODE||s.length===1&&s.charCodeAt(0)===Jsep.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:Jsep.LITERAL,value:parseFloat(s),raw:s}}gobbleStringLiteral(){let s="";const d=this.index,v=this.expr.charAt(this.index++);let C=!1;for(;this.index<this.expr.length;){let T=this.expr.charAt(this.index++);if(T===v){C=!0;break}else if(T==="\\")switch(T=this.expr.charAt(this.index++),T){case"n":s+=`
`;break;case"r":s+="\r";break;case"t":s+="	";break;case"b":s+="\b";break;case"f":s+="\f";break;case"v":s+="\v";break;default:s+=T}else s+=T}return C||this.throwError('Unclosed quote after "'+s+'"'),{type:Jsep.LITERAL,value:s,raw:this.expr.substring(d,this.index)}}gobbleIdentifier(){let s=this.code,d=this.index;for(Jsep.isIdentifierStart(s)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(s=this.code,Jsep.isIdentifierPart(s));)this.index++;return{type:Jsep.IDENTIFIER,name:this.expr.slice(d,this.index)}}gobbleArguments(s){const d=[];let v=!1,C=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let T=this.code;if(T===s){v=!0,this.index++,s===Jsep.CPAREN_CODE&&C&&C>=d.length&&this.throwError("Unexpected token "+String.fromCharCode(s));break}else if(T===Jsep.COMMA_CODE){if(this.index++,C++,C!==d.length){if(s===Jsep.CPAREN_CODE)this.throwError("Unexpected token ,");else if(s===Jsep.CBRACK_CODE)for(let O=d.length;O<C;O++)d.push(null)}}else if(d.length!==C&&C!==0)this.throwError("Expected comma");else{const O=this.gobbleExpression();(!O||O.type===Jsep.COMPOUND)&&this.throwError("Expected comma"),d.push(O)}}return v||this.throwError("Expected "+String.fromCharCode(s)),d}gobbleGroup(){this.index++;let s=this.gobbleExpressions(Jsep.CPAREN_CODE);if(this.code===Jsep.CPAREN_CODE)return this.index++,s.length===1?s[0]:s.length?{type:Jsep.SEQUENCE_EXP,expressions:s}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:Jsep.ARRAY_EXP,elements:this.gobbleArguments(Jsep.CBRACK_CODE)}}}const hooks=new Hooks;Object.assign(Jsep,{hooks,plugins:new Plugins(Jsep),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},right_associative:new Set,additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});Jsep.max_unop_len=Jsep.getMaxKeyLen(Jsep.unary_ops);Jsep.max_binop_len=Jsep.getMaxKeyLen(Jsep.binary_ops);const jsep=m=>new Jsep(m).parse(),staticMethods=Object.getOwnPropertyNames(Jsep);staticMethods.forEach(m=>{jsep[m]===void 0&&m!=="prototype"&&(jsep[m]=Jsep[m])});jsep.Jsep=Jsep;const CONDITIONAL_EXP="ConditionalExpression";var ternary={name:"ternary",init(m){m.hooks.add("after-expression",function(d){if(d.node&&this.code===m.QUMARK_CODE){this.index++;const v=d.node,C=this.gobbleExpression();if(C||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===m.COLON_CODE){this.index++;const T=this.gobbleExpression();if(T||this.throwError("Expected expression"),d.node={type:CONDITIONAL_EXP,test:v,consequent:C,alternate:T},v.operator&&m.binary_ops[v.operator]<=.9){let O=v;for(;O.right.operator&&m.binary_ops[O.right.operator]<=.9;)O=O.right;d.node.test=O.right,O.right=d.node,d.node=v}}else this.throwError("Expected :")}})}};jsep.plugins.register(ternary);const jsep$1=Object.freeze(Object.defineProperty({__proto__:null,Jsep,default:jsep},Symbol.toStringTag,{value:"Module"}));class Container{x(s){if(typeof s<"u")this._x=s,this.group.x(s);else return this.group.x()}y(s){if(typeof s<"u")this._y=s,this.group.y(s);else return this.group.y()}dy(s){if(typeof s<"u")this._y+=s,this.group.dy(s);else return this._y}getItemStartPoints(s){return s.noStartPoints?[]:s.getStartPoints?s.getStartPoints():[[s.x(),s.y()+s.height()/2]]}getItemEndPoints(s){return s.getEndPointsFrom&&(s=s.getEndPointsFrom),s.noEndPoints?[]:s.getEndPoints?s.getEndPoints():[[s.x()+s.width(),s.y()+s.height()/2]]}getStartPoints(){if(this.noStartPoints)return[];switch(this.type){case"serial":if(this.c.length){let s=this.c[0];return this.getItemStartPoints(s)}else return[];case"parallel":{let s=[];for(let d=0;d<this.c.length;d++)s=s.concat(this.getItemStartPoints(this.c[d]));return s}}}getEndPoints(){if(this.noEndPoints)return[];switch(this.type){case"serial":if(this.c.length){let s=this.c[this.c.length-1];return this.getItemEndPoints(s)}else return[];case"parallel":{let s=[];for(let d=0;d<this.c.length;d++)s=s.concat(this.getItemEndPoints(this.c[d]));return s}}}width(s){if(typeof s>"u")return this.group.width()}height(s){if(typeof s>"u")return this.group.height()}addTo(s){return this.group.addTo(s),this}constructor(s,d){this.gap=30,this.c=[],this.type=s,this.myNode=d,this.group=SVG().group()}push(s){switch(this.type){case"serial":this.c.length?s.x(this.c[this.c.length-1].x()+this.c[this.c.length-1].width()+this.gap):s.x(10),s.y(10),this.c.push(s);let d=0;for(let v=0;v<this.c.length;v++)d=Math.max(d,this.c[v].height()/2);for(let v=0;v<this.c.length;v++)this.c[v].y(d-this.c[v].height()/2);break;case"parallel":if(this.c.length){let v=this.c[this.c.length-1].y()+this.c[this.c.length-1].height()+this.gap;s.y(v)}else s.y(10);s.x(10),this.c.push(s);break}s instanceof Container?s.group.addTo(this.group):s.addTo(this.group)}makeLines(s,d){let v=SVG().group();for(let C=0;C<s.length;C++)for(let T=0;T<d.length;T++){let O=s[C],N=d[T],B=mySVG.bezier(O[0],O[1],N[0],N[1],-1);this.strokeDashArray&&B.attr({"stroke-dasharray":this.strokeDashArray}),this.type=="serial"&&!this.strokeDashArray&&B.attr({"marker-end":"url(#arrow)"}),B.addTo(v)}return v}renderLines(){let s=SVG().group();for(let d=0;d<this.c.length-1;d++)if(this.c[d]instanceof Container&&this.c[d].renderLines().addTo(s),this.type==="serial"){let v=this.getItemEndPoints(this.c[d]),C=this.getItemStartPoints(this.c[d+1]),T=this.makeLines(v,C);T&&T.addTo(s)}return this.c[this.c.length-1]instanceof Container&&this.c[this.c.length-1].renderLines().addTo(s),s}applyItemsAfterwards(){this.group.applyItemsAfterwards&&this.group.applyItemsAfterwards();for(let s=0;s<this.c.length;s++)this.c[s].applyItemsAfterwards&&this.c[s].applyItemsAfterwards()}breakLine(){switch(this.type){case"serial":for(let s=0;s<c.length-1;s++)w+=c[s].width()+this.gap;return w+=c[c.length-1].width(),w}}}class mySVG{model(s){if(s&&Object.keys(this.modellingFunctions).indexOf(s.nodeName)!==-1)return this.elementsFound.indexOf(s.nodeName)==-1&&this.elementsFound.push(s.nodeName),this.modellingFunctions[s.nodeName](s)}constructor(){this.elementsFound=[]}render(s){if(!s)return;let d=SVG();SVG(`<defs>
            <marker id="arrow" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,4 L5,2 z" fill="#000" />
            </marker>
          </defs>`).addTo(d);let C=this.model(s);return C.addTo(d),C.renderLines&&C.renderLines().addTo(C.group),C.x(10),C.y(10),C.applyItemsAfterwards&&C.applyItemsAfterwards(),d.node.dataset.source=encodeURIComponent(s.outerHTML.replace(/\n/g," ").replace(/\t/g," ").replace(/\s\s+/g," ").trim()),d.size(C.width()+100,C.height()+100),this.svg=d.node,d.node}renderKey(){let s=SVG().group();for(let v=0;v<this.elementsFound.length;v++){let C=this.examples[this.elementsFound[v]];if(!C)continue;let T=document.createElement("div");T.innerHTML=C.html;let O=this.model(T);O.addTo(s),O.y(s.height()+25),O.renderLines&&O.renderLines().addTo(O.group)}let d=SVG().size(s.width()+50,s.height()+50);return s.x(10),s.y(10),s.addTo(d),d.node}download(s){let d=new Blob([this.svg.outerHTML]),v=document.createElement("a");v.download=s,v.href=window.URL.createObjectURL(d),v.click(),v.remove()}static bezier(s,d,v,C){let T=s+(v-s)/1.5,O=d,N=v-(v-s)/1.5,B=`M ${s},${d} C${T},${O} ${N},${C} ${v},${C}`,z=SVG().path(B);return z.attr({fill:"none",stroke:"black","stroke-width":3}),z}get modellingFunctions(){return{"AA-SESSION":s=>{let d=new Container("parallel",s);for(let v=0;v<s.originalChildNodes.length;v++){let C=this.model(s.originalChildNodes[v]);C&&d.push(C)}return d.myNode=s,d},"AA-SEQUENCE":s=>{let d=new Container("serial",s);for(let v=0;v<s.childNodes.length;v++){let C=this.model(s.childNodes[v]);C&&d.push(C)}return d.myNode=s,d},"AA-SCREEN":s=>{let d=SVG().group(),v=SVG().rect(30,50).attr({fill:"none",stroke:"black","stroke-width":5,rx:3}).addTo(d),C;if(s.getAttribute("name")){let T=s.getAttribute("name");T.length>14&&(T=T.substr(0,11)+"..."),C=SVG().text(function(O){O.tspan(T).font({family:"serif",style:"italic",size:"12px",weight:"bold"})}),v.x(d.x()+d.width()/2-v.width()/2),v.y(d.height()/2-v.height()/2)+10,C.y(v.y()+v.height()+5)}return d.myNode=s,d.nocentering=!0,d.getEndPoints=()=>[[v.x()+v.width(),v.y()+v.height()/2]],d.getStartPoints=()=>[[v.x(),v.y()+v.height()/2]],C&&(d.applyItemsAfterwards=()=>{C.addTo(d),C.x(v.x()+v.width()/2-C.bbox().width/2),C.y(v.y()+v.height()+7)}),d},"AA-CHOOSE":s=>{let d=new Container("serial",s);d.strokeDashArray="3";let v=SVG().circle(20).attr({fill:"none",stroke:"black","stroke-width":5,"stroke-dasharray":0}),C=SVG().circle(2).attr({fill:"black",stroke:"black","stroke-width":5}),T=new Container("parallel",s),O=0,N=!1;for(let M=0;M<s.childNodes.length;M++){s.childNodes[M].nodeName==="AA-OTHERWISE"&&(N=!0);let B=this.model(s.childNodes[M]);B&&(T.push(B),O=Math.max(B.width(),O))}if(!N){let M=new Container("serial"),B=SVG().line();M.push(B),B.plot(10,100,O,100),B.attr({fill:"black",stroke:"black","stroke-dasharray":3,"stroke-width":3}),T.push(M)}for(let M=0;M<T.c.length;M++){let B=T.c[M];B.x(O/2-B.width()/2)}return d.push(v),d.push(T),d.push(C),d.myNode=s,d.applyItemsAfterwards=()=>{for(let M=0;M<T.c.length;M++)T.c[M].applyItemsAfterwards&&T.c[M].applyItemsAfterwards()},d},"AA-FUNCTION-RANDOM":s=>{let d=new Container("serial",s),v=SVG().group();SVG().text(function(O){O.tspan("f").font({family:"serif",style:"italic",size:"50px",weight:"bold"}),O.tspan("random ").font({family:"serif",style:"italic",size:"15px"})}).addTo(v);let T=SVG().text(function(O){O.tspan(s.getAttribute("name")).font({family:"monospace",size:"12px",weight:"bold"})});return T.addTo(v),T.dy(20),T.dx(-10),d.push(v),d.myNode=s,d},"AA-WHEN":s=>{let d=SVG().group(),v=new Container("parallel");for(let O=0;O<s.childNodes.length;O++){let N=this.model(s.childNodes[O]);N&&v.push(N)}let C=SVG().text(function(O){O.tspan("when").font({family:"serif",style:"italic",size:"30px",weight:"bold"})}),T=SVG().text(function(O){let N=s.getAttribute("test");if(N){let M=jsep(N);if(M.left&&M.left.name&&M.left.name.length>7){let B=M.left.name.substr(0,5)+"...";N=N.replace(M.left.name,B)}}O.tspan(N).font({family:"monospace",size:"12px",weight:"bold"})});return v.addTo(d),C.addTo(d),T.addTo(d),T.y(C.y()+C.bbox().height),v.x(C.x()+C.bbox().width+40),v.y(C.y()+C.bbox().height/1.5-v.height()/2),d.strokeDashArray="3",d.myNode=s,d.getEndPoints=()=>[[v.x()+v.width(),v.y()+v.height()/2]],d.getStartPoints=()=>[[C.bbox().x,C.bbox().y+C.bbox().height/2]],d.applyItemsAfterwards=()=>{for(let O=0;O<v.c.length;O++)console.log(v.c[O]),v.c[O].applyItemsAfterwards&&v.c[O].applyItemsAfterwards()},d},"AA-OTHERWISE":s=>{let d=SVG().group(),v=new Container("parallel");for(let T=0;T<s.childNodes.length;T++){let O=this.model(s.childNodes[T]);O&&v.push(O)}let C=SVG().text(function(T){T.tspan("otherwise").font({family:"serif",style:"italic",size:"30px",weight:"bold"})});return v.addTo(d),C.addTo(d),v.x(C.x()+C.bbox().width+10),v.y(C.y()+C.bbox().height/1.5-v.height()/2),d.strokeDashArray="3",d.myNode=s,d.getEndPoints=()=>[[v.x()+v.width(),v.y()+v.height()/2]],d.getStartPoints=()=>[[C.bbox().x,C.bbox().y+C.bbox().height/2]],d.applyItemsAfterwards=()=>{for(let T=0;T<v.c.length;T++)console.log(v.c[T]),v.c[T].applyItemsAfterwards&&v.c[T].applyItemsAfterwards()},d},DIV:s=>{let d=new Container("parallel",s);for(let v=0;v<s.childNodes.length;v++){let C=this.model(s.childNodes[v]);C&&d.push(C)}return d.myNode=s,d}}}get examples(){return{"AA-SEQUENCE":{html:'<aa-sequence><aa-screen name="first screen"></aa-screen><aa-screen name="second screen"></aa-screen></aa-sequence>',comment:"sequence"},"AA-SCREEN":{html:'<aa-screen name="<name>"></aa-screen>',comment:"screen"},"AA-FUNCTION-RANDOM":{html:"<aa-function-random></aa-function-random>",comment:"random number generator"},"AA-CHOOSE":{html:"<aa-choose><aa-when><aa-screen></aa-screen></aa-when></aa-choose>",comment:"random number generator"}}}}const html=function(m,...s){let d=m[0];for(let v=0;v<s.length;v++)d+=s[v],d+=m[v+1];return d};window&&(window.html=html);const AAClasses=[];window.AAClasses=AAClasses;class AABaseElement extends HTMLElement{constructor(){super(),this._attachedTimestamp=0,this._debug=!1,this._props=this.makePropertiesFromAttributes()}static get properties(){return{name:{type:String,userDefined:!0},diagram:{type:Boolean,value:!1,userDefined:!0},"diagram-transparent":{type:Boolean,value:!1,userDefined:!0}}}static registerAAElement(s,d){customElements.get(s)||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push(s.toUpperCase()),customElements.define(s,d)),AAClasses[s.toUpperCase()]=d}static isAAElement(s){return AANodeNames.indexOf(s.nodeName.toUpperCase())!=-1}static createFragmentForNode(s){let d=document.createDocumentFragment();for(let v=0;v<s.childNodes.length;v++)d.append(s.childNodes[v].cloneNode(!0));return d}static createHolderForNode(s){let d=s.cloneNode(!1);return d.innerFragment=AABaseElement.createFragmentForNode(s),d}static scanAndReplace(s){if(s.nodeName==="TEMPLATE")AABaseElement.scanAndReplace(s.content);else if(AABaseElement.isAAElement(s)){let d=AABaseElement.createHolderForNode(s);s.replaceWith(d)}else for(let d=0;d<s.childNodes.length;d++)AABaseElement.scanAndReplace(s.childNodes[d])}connectedCallback(){if(this._attachedTimestamp=new Date().getTime(),this._debug=this.debug===!0||this.debug===null,this.innerFragment)for(let s=0;s<this.innerFragment.childNodes.length;s++)this.appendChild(AABaseElement.copy(this.innerFragment.childNodes[s]));this.setAttributeDefaultValues()}getMemory(){let s=this;for(;s.parentNode!=null;){if(s._mem)return s._mem;s=s.parentNode}return null}makePropertiesFromAttributes(){let d=customElements.get(this.tagName.toLowerCase()).observedAttributes;if(!d)return null;let v={};for(let C=0;C<d.length;C++){let T=this.toCamelCase(d[C]);v[T]=d[C],!(typeof this[T]<"u")&&Object.defineProperty(this,T,{get:()=>{let O=this.getAttribute(d[C]);return O==="true"?!0:O==="false"?!1:O==="null"?null:O},set:O=>{this.setAttribute(d[C],O)}})}return v}toCamelCase(s){let d=s.split("-"),v=d[0];for(let C=1;C<d.length;C++)v+=d[C][0].toUpperCase()+d[C].substr(1);return v}toHyphenated(s){let d="";for(let v=0;v<s.length;v++){let C=s[v];C.toLowerCase()!==C?d+=`-${C.toLowerCase()}`:d+=C}return d}setAttributeDefaultValues(){let s=this.constructor.properties;if(s){let d=Object.keys(s);for(let v=0;v<d.length;v++){let C=this.toCamelCase(d[v]);if(typeof this[C]>"u"||this[C]===null||this[C]==="")if(s[d[v]].type===Boolean)this.getAttribute(d[v])===""?this.setAttribute(d[v],"true"):this.getAttribute(d[v])==="true"?this.setAttribute(d[v],"true"):this.getAttribute(d[v])==="false"?this.setAttribute(d[v],"false"):this.getAttribute(d[v])===null&&this.setAttribute(d[v],s[d[v]].value);else{let T=this.getAttribute(d[v])||s[d[v]].value||null;T&&this.setAttribute(d[v],T),T===!1&&this.setAttribute(d[v],String(T))}}}}static copy(s){let d;return AABaseElement.isAAElement(s)?s.innerFragment?(d=s.cloneNode(),d.innerFragment=AABaseElement.createFragmentForNode(s.innerFragment)):(d=s.cloneNode(),d.innerFragment=AABaseElement.createFragmentForNode(s)):d=s.cloneNode(!0),d}getAttributes(){let s={},d=Object.keys(this.constructor.properties);for(let v=0;v<d.length;v++)if(this.constructor.properties[d[v]].userDefined&&typeof this.getAttribute(d[v])<"u"&&this.getAttribute(d[v])!=="undefined"){if(this.constructor.properties[d[v]].value==this.getAttribute(d[v]))continue;s[d[v]]=this.getAttribute(d[v])}return s}toJSON(){let s={},d=this.tagName.toLowerCase();return s[d]=this.getAttributes(),this.childNodes.length&&(s[d].childNodes=[],this.childNodes.forEach(v=>{s[d].childNodes.push(AABaseElement.nodeToJSON(v))})),s}static nodeToJSON(s){if(s.nodeType===document.TEXT_NODE||s.nodeType===document.COMMENT_NODE){let d={},v=s.textContent.replace(/\n/g," ").replace(/\t/g," ").replace(/\s\s+/g," ").trim();return v!==""?(d[s.nodeName]=v,d):null}else{if(s.toJSON)return s.toJSON();try{let d={},v=s.getAttributeNames(),C={};for(let O=0;O<v.length;O++)C[v[O]]=s.getAttribute(v[O]);let T=[];for(let O=0;O<s.childNodes.length;O++)AABaseElement.nodeToJSON(s.childNodes[O])&&T.push(AABaseElement.nodeToJSON(s.childNodes[O]));return d[s.tagName]=C,d[s.tagName].childNodes=T,d}catch(d){console.error(d)}}}toYAML(){return jsyaml.dump(this.toJSON())}toJSL(){return nodeToJSL(this)}produceDiagram(){this.root||(this.root=this.attachShadow({mode:"open"})),this.root.innerHTML='<div id="svgContainer" ></div>';let s=this.root.childNodes[0],d=new mySVG,v=d.render(this),C=document.createElement("paper-button");C.innerHTML="download",C.raised=!0,C.style.backgroundColor="#0d47a1",C.style.color="white",C.classList.add("indigo"),s.appendChild(v),s.appendChild(C);let T="";this.name?T=this.name+"."+this.nodeName.toLowerCase()+".svg":T=this.nodeName.toLowerCase()+".svg",C.addEventListener("click",()=>{d.download(T)})}static getDomPathAsName(s){for(var d=[],v=0,C=0;s.nodeName!=="AA-SESSION"&&s.parentNode!=null;){v=0,C=0;for(var T=0;T<s.parentNode.childNodes.length;T++){var O=s.parentNode.childNodes[T];O.nodeName==s.nodeName&&(O===s&&(C=v),v++)}if(!AABaseElement.isAAElement(s)){s=s.parentNode;continue}s.hasAttribute("name")&&s.name!=""?d.unshift(s.name):s.hasAttribute("id")&&s.id!=""?d.unshift(s.nodeName.toLowerCase()+"#"+s.id):v>1?d.unshift(s.nodeName.toLowerCase()+":eq("+C+")"):d.unshift(s.nodeName.toLowerCase()),s=s.parentNode}s.nodeName==="AA-SESSION"&&(s.hasAttribute("name")&&s.name!=""?d.unshift(s.name):s.hasAttribute("id")&&s.id!=""?d.unshift(s.nodeName.toLowerCase()+"#"+s.id):v>1?d.unshift(s.nodeName.toLowerCase()+":eq("+C+")"):d.unshift(s.nodeName.toLowerCase()));let N="";for(let M=0;M<d.length-1;M++)N+=d[M]+".";return N+=d[d.length-1],N}static getVariableName(s){const d=s.getAttribute("name");return d||AABaseElement.getDomPathAsName(s)}_dispatchDebugEvent(s){this.debug&&this.dispatchEvent(new CustomEvent("debugEvent",{detail:s,bubbles:!0}))}_dispatchEndEvent(s){this.dispatchEvent(new CustomEvent("endEvent",{bubbles:!0,detail:s}))}_getParentSession(){let s=this;for(;s!=null&&s.nodeName!="AA-SESSION";)s=s.parentNode;return s}}customElements.get("aa-base-element")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-BASE-ELEMENT"),customElements.define("aa-base-element",AABaseElement));window.nodeToJSON=AABaseElement.nodeToJSON;class AAScreen extends AABaseElement{constructor(){super(),this.submitButton=null,this.submitButtonContainer=null,this.submitButtonText=this.getAttribute("submit-button-text")||"submit",this.submitButtonHidden=!1,this.diagram=!1,this._started=!1,this._attachedTimestamp=new Date().getTime(),this.root=this.attachShadow({mode:"open"})}static get category(){return"UI"}static get tag(){return"aa-screen"}static get properties(){return{...AABaseElement.properties,"submit-button-text":{type:String,value:"submit",userDefined:!0},"submit-button-hidden":{type:Boolean,value:!1,userDefined:!0},"expect-wait":{type:Boolean,userDefined:!1,value:!0},autohide:{type:Boolean,userDefined:!1,value:!0}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAScreen.properties)}attributeChangedCallback(s,d,v){switch(s){case"submit-button-text":this.submitButton&&(this.submitButton.innerHTML=v);break;case"submit-button-hidden":this.submitButtonContainer&&(v!==!0||v!=="true"?this.submitButtonContainer.style.display="block":this.submitButtonContainer.style.display="none");break}}connectedCallback(){var s;if(super.connectedCallback(),this.diagram){this.produceDiagram();return}this.root.innerHTML=this.css+this.html,this.submitButtonContainer=this.root.querySelector(".submitButtonContainer"),!this._started&&(this._started=!0,this.submitButtonHidden&&this.submitButtonContainer&&(this.submitButtonContainer.style.display="none"),this.submitButton=this.root.querySelector(".submitButton"),(s=this.submitButton)==null||s.addEventListener("click",d=>{this.submitButtonClick(d)}))}get css(){return html`<style>
                :host {
                    display: block;
                    height: fit-content;
                    padding:20px;
                    font-family: "Roboto Flex",  sans-serif;
                }

                .submitButtonContainer{
                    text-align:center;
                    justify-content: space-between; 
                    align-items:center;
                    padding:20px;
                    font-family: "Roboto Flex",  sans-serif;
                }


              

                .submitButton{
                    
                    font-family: "Roboto Flex",  sans-serif;
                }

                 .missing-value{
                    border:red;
                }
  
         </style>`}get html(){return html`
            <slot></slot>
            <div id='userMessage'>
                <div class='submitButtonContainer'>
                    <div>
                        ${this.getSubmitButton()}
                    </div>
                    <div id='userMessage'></div>
                </div>`}getSubmitButton(){let s=this.submitButtonText||this.getAttribute("submit-button-text")||"submit";return customElements.get("sl-button")?html`<sl-button variant="primary" class='submitButton'>${s}</sl-button>`:html`<button class='submitButton'>${s}</button>`}async submitButtonClick(s){(await this.hasChildrenThatRequireResponse()).length>0||this.collectValues().then(v=>{try{const C={value:v};let T=new CustomEvent("valueSubmit",{bubbles:!0,detail:C});this.dispatchEvent(T),this._dispatchEndEvent(v),typeof(s==null?void 0:s.detail.callback)<"u"&&(s==null||s.detail.callback(s)),this.getAttribute("autohide")==="true"&&this.hide()}catch(C){console.error(C)}})}collectValues(){return new Promise((s,d)=>{let v={attachedTimestamp:this._attachedTimestamp,submitTimestamp:new Date().getTime()};this.getChildrenValues(this).then(C=>{C.__meta=v,s(C)})})}doesArrayConsistOfNullsOrUndefined(s){return s.every(d=>d==null)}async getNodeValue(s){return s.getValue?s.getValue():s.value?s.value.then?await s.value:lodashExports.isArray(s.value)&&this.doesArrayConsistOfNullsOrUndefined(s.value)?null:s.value:null}async hasChildrenThatRequireResponse(){const s=this.querySelectorAll("[required]"),d=[];for(const v of Array.from(s)){const C=await this.getNodeValue(v);["",null,void 0].includes(C)?(v.classList.add("missing-value"),d.push(v)):v.classList.remove("missing-value")}return d}getAAChildren(s,d,v){d=d||[],s=s||this;for(let C=0;C<s.children.length;C++)AABaseElement.isAAElement(s.children[C])?v?s.children[C].nodeName===v&&d.push(s.children[C]):d.push(s.children[C]):this.getAAChildren(s.children[C],d,v);return d}async getChildrenValues(s,d){s=s||this,d=d||{};for(let v=0;v<s.children.length;v++){let C=s.children[v];if(C.nodeName!="AA-LABEL"){let T=AABaseElement.getVariableName(C);C.getValue?d[T]=C.getValue():C.value?C.value.then?d[T]=await C.value:d[T]=C.value:await this.getChildrenValues(C,d)}else await this.getChildrenValues(C,d)}return d}get value(){return this.collectValues()}valueWithKey(){return new Promise((s,d)=>{this.value.then(v=>{let C={};C[this.getAttribute("name")]=v,s(C)})})}automate(){for(let s=0;s<this.children.length;s++)AABaseElement.isAAElement(this.children[s])&&typeof this.children[s].automate<"u"&&this.children[s].automate();this.submitButtonClick()}hide(){let s=this.getAAChildren(this,[]);for(let d=0;d<s.length;d++)s[d].stop&&s[d].stop();this.style.display="none"}show(){this.style.display="block"}}AABaseElement.registerAAElement("aa-screen",AAScreen);class AAAffectGrid extends AABaseElement{constructor(){super(),this.grid=null,this.selectedCell=null,this.totalContainer=null,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-affect-grid"}static get properties(){return{...super.properties,"top-label":{type:String,userDefined:!0,value:""},"bottom-label":{type:String,userDefined:!0,value:""},"left-label":{type:String,userDefined:!0,value:""},"center-label":{type:String,userDefined:!0,value:""},"right-label":{type:String,userDefined:!0,value:""},"top-left-label":{type:String,userDefined:!0,value:""},"top-right-label":{type:String,userDefined:!0,value:""},"bottom-left-label":{type:String,userDefined:!0,value:""},"bottom-right-label":{type:String,userDefined:!0,value:""},"left-top-label":{type:String,userDefined:!0,value:""},"left-bottom-label":{type:String,userDefined:!0,value:""},"right-top-label":{type:String,userDefined:!0,value:""},"right-bottom-label":{type:String,userDefined:!0,value:""},rows:{type:Number,userDefined:!0,value:11},columns:{type:Number,userDefined:!0,value:11},value:{type:Array},required:{type:Boolean,userDefined:!0,value:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AAAffectGrid.properties)}get x(){let s=this.getAttribute("value");return s?parseInt(s.split(",")[0]):null}get y(){let s=this.getAttribute("value");return s?parseInt(s.split(",")[1]):null}get value(){let s=this.getAttribute("value");if(!s)return null;let d=s.split(",");return[parseInt(d[0]),parseInt(d[1])]}set value(s){this.setAttribute("value",s)}get minLabel(){return this.getAttribute("min-label")}get maxLabel(){return this.getAttribute("max-label")}set minLabel(s){this.setAttribute("min-label",s)}set maxLabel(s){this.setAttribute("max-label",s)}set min(s){this.setAttribute("min",s)}set max(s){this.setAttribute("max",s)}connectedCallback(){super.connectedCallback(),this.topLeftLabel===null&&(this.topLeftLabel=""),this.topLabel===null&&(this.topLabel=""),this.topRightLabel===null&&(this.topRightLabel=""),this.leftTopLabel===null&&(this.leftTopLabel=""),this.leftLabel===null&&(this.leftLabel=""),this.leftBottomLabel===null&&(this.leftBottomLabel=""),this.rightTopLabel===null&&(this.rightTopLabel=""),this.rightLabel===null&&(this.rightLabel=""),this.rightBottomLabel===null&&(this.rightBottomLabel=""),this.bottomLeftLabel===null&&(this.bottomLeftLabel=""),this.bottomLabel===null&&(this.bottomLabel=""),this.root.innerHTML=this.css+this.html,this.grid=this.root.querySelector(".grid"),this.grid.addEventListener("mousedown",s=>{let d=this.value,v=s.target;this.value=[v.dataset.x,v.dataset.y],this.selectedCell&&this.selectedCell.classList.remove("selected"),this.selectedCell=v,this.selectedCell.classList.add("selected");let C=this.value;d?(d[0]!=C[0]||d[1]!=C[1])&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})):this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.totalContainer=this.root.querySelector(".total-container"),this.totalContainer.style.height=window.getComputedStyle(this.totalContainer).width,this.root.querySelector(".leftLabels").style.width=window.getComputedStyle(this.grid).height,this.root.querySelector(".rightLabels").style.width=window.getComputedStyle(this.grid).height,ResizeObserver&&new ResizeObserver(()=>{this.totalContainer.style.height=window.getComputedStyle(this.totalContainer).width,this.root.querySelector(".leftLabels").style.width=window.getComputedStyle(this.grid).height,this.root.querySelector(".rightLabels").style.width=window.getComputedStyle(this.grid).height}).observe(this.root.querySelector(".top-label"))}get css(){return html`<style>
        :host{
            display:block;
            font-family: "Roboto Flex", Roboto, Noto, sans-serif;
            font-size: 0.8em;
        }
        .top-section{
            height:40px;
            width:100%;

        }
        .top-left{
            text-align:left;
        }
        .top-label{
            text-align:center;
            width:100% !important;
        }
        .top-right{
            text-align:right;
        }


        .bottom-left{
            text-align:left;
        }
        .bottom-label{
            text-align:center;
            border:solid 0px;
            width: 100% !important;
        }
        .bottom-right{
            text-align:right;
        }
        .top-left-corner{
            width:40px;
            height:40px;
        }
        .top-right-corner{
            width:40px;
            height:40px;
        }
        .bottom-left-corner{
            width:40px;
            height:40px;
        }
        .bottom-right-corner{
            width:40px;
            height:40px;
        }
        .middle-section{

            flex-grow:2;
        }
        .bottom-section{

            height:40px;
            width:100%;
        }
        .left-margin{
            width:40px;
            height:100%;
        }
        .right-margin{
            width:40px;
            height:100%;
        }
        .grid{
            display:grid;
            grid-template-columns: repeat(${this.columns}, ${100/this.columns}%);

            flex-grow:2;
            width:100%;
            height:100%;
        }
        .cell{
            border:solid thin;
            /* transition:background-color 0.2s; */
        }
        .cell.top{
            border-top:solid 2px;
        }
        .cell.bottom{
            border-bottom:solid 2px;
        }
        .cell.left{
            border-left:solid 2px;
        }
        .cell.right{
            border-right: solid 2px;
        }
        .cell.selected{
            background-color: #6750a4; //default primary color for material design
        }

        </style>
        `}get html(){let s="";for(let v=0;v<this.rows;v++)for(let C=0;C<this.columns;C++)s+=html`<div class="cell  ${v==0?"top":""} ${v==this.rows-1?"bottom":""}  ${C==0?"left":""}  ${C==this.columns-1?"right":""}" data-x="${C+1-Math.round(this.columns/2)}" data-y="${Math.round(this.rows/2)-v-1}">
            </div>`;return html`
            <div class="total-container" style="position:relative; display:flex; flex-direction:column;">

                <div class="top-section" style="display:flex; flex-direction:row">
                    <div class="top-left-corner"></div>
                    <div style="width:100%; display:flex; flex-direction:row; justify-content:space-between">
                        <div class="top-left label" style="width:33.3%">${this.topLeftLabel}</div>
                        <div class="top-label" style="width:33.3%; text-align:center">${this.topLabel}</div>
                        <div class="top-right label" style="width:33.3%">${this.topRightLabel}</div>
                    </div>
                    <div class="top-right-corner"></div>
                </div>


                <div class="middle-section" style="display:flex; flex-direction:row">
                    <div class="left-margin" style="display:flex; flex-direction:column;"></div>
                    <div class="grid" style="padding:0px">${s}</div>
                    <div class="right-margin" style="display:flex; flex-direction:column"></div>
                </div>


                <div class="bottom-section" style="display:flex; flex-direction:row;margin-top:10px">
                <div class="bottom-left-corner" ></div>
                <div style="width:100%; display:flex; flex-direction:row; justify-content:space-between">
                    <div class="bottom-left label" style="width:33.3%">${this.bottomLeftLabel}</div>
                    <div class="bottom-label" style="width:33.3%">${this.bottomLabel}</div>
                    <div class="bottom-right label" style="width:33.3%">${this.bottomRightLabel}</div>

                </div>
                    <div class="bottom-right-corner"></div>

                </div>

                <div class="leftLabels" style="position:absolute; bottom:30px; left:0px;  display:flex; flex-direction:row; justify-content:space-between; transform:rotate(-90deg); transform-origin:top left;">
                    <div style="width:33.3%; text-align:left; ">${this.leftBottomLabel}</div>
                    <div style="width:33.3%; text-align:center; flex-grow:2">${this.leftLabel}</div>
                    <div style="width:33.3%;text-align:right">${this.leftTopLabel}</div>
                </div>

                <div class="rightLabels" style="position:absolute; bottom:50px; right:20px; display:flex; flex-direction:row; justify-content:space-between; transform:rotate(90deg); transform-origin:bottom right;">
                    <div style="width:33.3%; text-align:left">${this.rightTopLabel}</div>
                    <div style="width:33.3%; text-align:center; flex-grow:2">${this.rightLabel}</div>
                    <div style="width:33.3%; text-align:right">${this.rightBottomLabel}</div>
                </div>

            </div>

        `}}AABaseElement.registerAAElement("aa-affect-grid",AAAffectGrid);class AAChoiceItem extends AABaseElement{static get tag(){return"aa-choice-item"}static get properties(){return{value:{type:String,userDefined:!0},checked:{type:Boolean,value:!1}}}static get observedAttributes(){return["name"]}static get acceptsElements(){return["#text"]}get staticObject(){return AAChoiceItem}set orientation(s){this._orientation=s,s=="vertical"?(this.itemBlock.style.flexDirection="column",this.label.classList.add("label-vertical"),this.label.classList.remove("label-horizontal")):s=="horizontal"&&(this.itemBlock.style.flexDirection="row",this.itemBlock.style.alignItems="center",this.label.classList.remove("label-vertical"),this.label.classList.add("label-horizontal"))}get orientation(){return this._orientation}get checked(){if(this.item)return this.item.checked}set checked(s){this.item&&(this.item.checked=s==="false"?!1:s==="true"?!0:s)}get value(){const s=this.getAttribute("value");return s||this.innerHTML.trim()}set value(s){this.setAttribute("value",s)}constructor(){super(),this.kind="radioButton",this.item=null,this.itemBlock=document.createElement("div"),this.label=document.createElement("div"),this._orientation="vertical",this.root=this.attachShadow({mode:"open"}),this.root.innerHTML=this.css}getRadioButton(){if(customElements.get("sl-radio"))return document.createElement("sl-radio");const s=document.createElement("input");return s.type="radio",s}getCheckbox(){if(customElements.get("sl-checkbox"))return document.createElement("sl-checkbox");const s=document.createElement("input");return s.type="checkbox",s}connectedCallback(){super.connectedCallback(),this.slot=document.createElement("slot"),this.label.innerHTML="<slot></slot>",this.parentElement.tagName==="AA-CHECKBOXES"&&(this.kind="checkBox"),this.parentElement.value===this.value&&(this.checked=!0),this.kind=="radioButton"?(this.item&&this.item.remove(),this.item=this.getRadioButton(),this.item.style.display="block",this.item.checked=this.checked,this.item.addEventListener("click",()=>{this.item.checked=!this.item.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.label.addEventListener("click",()=>{this.item.checked=!0,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.itemBlock.appendChild(this.item),this.itemBlock.appendChild(this.label),this.root.appendChild(this.itemBlock)):(this.item&&this.item.remove(),this.item=this.getCheckbox(),this.item.style.display="block",this.item.checked=this.checked,this.item.addEventListener("click",()=>{this.item.checked=!this.item.checked,this.checked=this.item.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.label.addEventListener("click",()=>{this.item.checked=!this.item.checked,this.checked=this.item.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.itemBlock.appendChild(this.item),this.itemBlock.appendChild(this.label),this.root.appendChild(this.itemBlock)),this.label.classList.add("label-horizontal"),this.itemBlock.style.display="flex",this.itemBlock.style.alignItems="center",this.itemBlock.style.padding="10px"}get css(){return html`<style>
            :host{
                cursor:pointer;
                font-family:"Roboto Flex", Roboto, Noto, sans-serif;
            }
            :host(:focus) {
                 outline: none;
            }

            .label-horizontal{
                
                padding-left:16px;
            }
            
            .label-vertical{
                padding-top:16px;
            }
            
            

            
        sl-radio {
            user-select:none;
            display: block;
        } 
        </style>`}toJSON(){return super.toJSON()}}AABaseElement.registerAAElement("aa-choice-item",AAChoiceItem);class AACheckboxes extends AABaseElement{static get category(){return"response item"}static get tag(){return"aa-checkboxes"}static get properties(){return{horizontal:{type:Boolean,value:!1,userDefined:!0},vertical:{type:Boolean,value:!0,userDefined:!0},name:{type:String,userDefined:!0},value:{type:String,userDefined:!1}}}static get acceptsElements(){return["aa-choice-item"]}static get observedAttributes(){return["horizontal","vertical"]}get value(){const s=[];for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(v.checked?s.push(v.value):s.push(null))}return s}set value(s){Array.isArray(s)||(s=[s]);for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(s.includes(v.value)?v.checked=!0:v.checked=!1)}}constructor(){super(),this.horizontal_wasChangedInternally__=!1,this.vertical_wasChangedInternally__=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("change",s=>{s.stopPropagation(),this.parentElement.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{value:this.value}}))})}toJSON(){let s=super.toJSON(),d=[];for(let v=0;v<this.children.length;v++)d.push(this.children[v].toJSON());return s[this.tagName.toLowerCase()].items=d,s}}AABaseElement.registerAAElement("aa-checkboxes",AACheckboxes);class AAMultipleChoice extends AABaseElement{static get category(){return"response item"}static get tag(){return"aa-multiple-choice"}static get properties(){return{horizontal:{type:Boolean,value:!1,userDefined:!0},vertical:{type:Boolean,value:!0,userDefined:!0},name:{type:String,userDefined:!0},value:{type:String,userDefined:!0}}}static get acceptsElements(){return["aa-choice-item"]}static get observedAttributes(){return["horizontal","vertical"]}attributeChangedCallback(s,d,v){switch(s){case"horizontal":if(v=="true"){this.style.display="flex";for(let C=0;C<this.children.length;C++){const T=this.children[C];T.tagName=="AA-CHOICE-ITEM"&&(T.orientation="vertical")}}if(this.vertical_wasChangedInternally__){this.vertical_wasChangedInternally__=!1;return}this.vertical_wasChangedInternally__=!0,v==="false"||!v?this.vertical=!0:this.vertical=!1;return;case"vertical":if(v=="true"){this.style.display="block";for(let C=0;C<this.children.length;C++){const T=this.children[C];T.tagName=="AA-CHOICE-ITEM"&&(T.orientation="horizontal")}}if(this.vertical_wasChangedInternally__){this.vertical_wasChangedInternally__=!1;return}this.horizontal_wasChangedInternally__=!0,v==="false"||!v?this.horizontal=!0:this.horizontal=!1;return}}get staticObject(){return AAMultipleChoice}get value(){return this.getValueOfSelectedItem()}set value(s){for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(v.value!==s?v.checked=!1:v.checked=!0)}}constructor(){super(),this.horizontal_wasChangedInternally__=!1,this.vertical_wasChangedInternally__=!1}updateState(s){for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(v!==s?v.checked=!1:v.checked=!0)}}getValueOfSelectedItem(){for(let s=0;s<this.children.length;s++){const d=this.children[s];if(d.tagName==="AA-CHOICE-ITEM"&&d.checked)return d.value}}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value"),this.addEventListener("change",s=>{s.stopPropagation(),this.updateState(s.target),this.parentElement.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{value:this.value}}))})}toJSON(){let s=super.toJSON();return s.horizontal&&(s.horizontal=!0),s}}AABaseElement.registerAAElement("aa-multiple-choice",AAMultipleChoice);class AAWhen extends AABaseElement{static get category(){return"control"}static get tag(){return"aa-when"}static get properties(){return{name:{type:String,userDefined:!1},"should-run":{type:Boolean,value:!0,userDefined:!1},debug:{type:Boolean,value:!1,userDefined:!1},test:{type:String,userDefined:!0}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AAWhen.properties)}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>"}connectedCallback(){super.connectedCallback()}}AABaseElement.registerAAElement("aa-when",AAWhen);class AAOtherwise extends AABaseElement{static get category(){return"control"}static get tag(){return"aa-otherwise"}static get acceptsElements(){return null}constructor(){super()}connectedCallback(){super.connectedCallback()}}AABaseElement.registerAAElement("aa-otherwise",AAOtherwise);class AAChoose extends AABaseElement{constructor(){super(),this._shouldRun=!1,this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>",this.originalContent=this.innerHTML}static get category(){return"control"}static get tag(){return"aa-choose"}static get properties(){return{...AABaseElement.properties,name:{type:String,userDefined:!0},"should-run":{type:Boolean,value:!0,userDefined:!1},debug:{type:Boolean,value:!1,userDefined:!1}}}static get acceptsElements(){return["aa-when","aa-otherwise"]}static get observedAttributes(){return Object.keys(AAChoose.properties)}connectedCallback(){if(this.setAttributeDefaultValues(),this.diagram){this.produceDiagram();return}if(this._shouldRun=this.shouldRun===null||this.shouldRun===!0,this.sessionElement=this._getParentSession(),this._shouldRun)if(typeof this.innerFragment<"u"){AABaseElement.scanAndReplace(this.innerFragment);let m=this._getNodeToInstantiate();if(m.length===0)this._dispatchEndEvent();else{let s=!1;for(let d=0;d<m.length;d++){let v=m[d];if(typeof v<"u"){for(let C=0;C<v.childNodes.length;C++)v.childNodes[C].constructor&&v.childNodes[C].constructor.properties&&v.childNodes[C].constructor.properties["expect-wait"]&&(s=!0);this.parentNode.insertBefore(v,this.nextSibling)}}s||this._dispatchEndEvent()}}else this.childNodes.length===0&&this._dispatchEndEvent();this.remove()}_getNodeToInstantiate(){let m=[],s=[],d=!1;for(let v=0;v<this.innerFragment.children.length;v++){let C=this.innerFragment.children[v];C.nodeName==="AA-WHEN"?(d=this.evaluate(C),d&&m.push(AABaseElement.copy(C).innerFragment)):C.nodeName==="AA-OTHERWISE"&&s.push(AABaseElement.copy(C).innerFragment)}return m.length===0?s:m}evaluate(m){let s=m.getAttribute("test");return s==null||s==""?null:this.evaluateTestExpression(s)}evaluateTestExpression(test){let expr=this.replaceExpressionIdentifiersWithValues(test);try{var parseTree=jsep$1(expr);return parseTree.left.type==="Literal"&&parseTree.right.type==="Literal"?eval(expr):eval(`${parseTree.left.value}${parseTree.operator}${parseTree.right.value}`)}catch(m){console.error("parse error:",m)}}replaceExpressionIdentifiersWithValues(m,s){let d=this.getMemory()||s,v=m.toUpperCase(),C=Object.keys(d.getDataDump()),T=C.map(O=>O.toUpperCase());for(let O in C){let N=d.getData(C[O]),M=parseInt(N);M!=N&&(N==="null"?M="null":N==="true"?M="true":N==="false"?M="false":M=`"${N}"`);let B=new RegExp(T[O],"g");v=v.replace(B,M)}return v}}AABaseElement.registerAAElement("aa-choose",AAChoose);class AAFunctionRandom extends AABaseElement{static get tag(){return"aa-function-random"}static get properties(){return{name:{type:String,userDefined:!0},debug:{type:Boolean,value:!1,userDefined:!1},value:{type:Number,userDefined:!1},min:{type:Number,userDefined:!0},max:{type:Number,userDefined:!0}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AAFunctionRandom.properties)}constructor(){super()}connectedCallback(){let s=this.getMemory();s&&s.setData(this.name,this.value),this._dispatchEndEvent({autoDispatch:!0}),this.debug||this.remove()}get value(){var s=parseFloat(this.min),d=parseFloat(this.max);let v=this.getRandomInt(s,d),C=this.getMemory();return C&&C.setData(AABaseElement.getVariableName(this),v),v}getRandomInt(s,d){return s=Math.ceil(s),d=Math.floor(d),Math.floor(Math.random()*(d-s)+.5)+s}}AABaseElement.registerAAElement("aa-function-random",AAFunctionRandom);class AAGeolocation extends AABaseElement{constructor(){super(),this._ready=!1,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-geolocation"}static get properties(){return{name:{type:String,userDefined:!0},"get-on-request":{type:Boolean,userDefined:!0,value:!1},ready:{type:Boolean,userDefined:!1,value:!1}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAGeolocation.properties)}get value(){return this._getLocation()}set value(s){this.setAttribute("value",s)}async _getValue(){return await this._getLocation()}_getLocation(){return new Promise((s,d)=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(v=>{let C=v.coords.latitude,T=v.coords.longitude;s({lat:C,lon:T,timestamp:new Date})}):d()})}connectedCallback(){super.connectedCallback(),this._ready=!0,this.getOnRequest||this._getLocation().then(s=>{var d=new CustomEvent("valueSubmit",{bubbles:!0,detail:{value:s}});this.dispatchEvent(d),this._dispatchEndEvent({value:s,autoDispatch:!0})})}}AABaseElement.registerAAElement("aa-geolocation",AAGeolocation);class AALabel extends AABaseElement{static get tag(){return"aa-label"}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){super.connectedCallback(),this.root.innerHTML=this.css+this.html}get css(){return html`
            <style>
                    :host{
                        display:block;
                        font-family: "Roboto Flex", Roboto, Noto, sans-serif;
                        font-weight:bold;
                        margin-top:40px;
                        margin-bottom:10px;
                        
                    }

            </style>
        `}get html(){return"<slot></slot>"}}AABaseElement.registerAAElement("aa-label",AALabel);class AALikertScale extends AABaseElement{static get category(){return"response item"}static get tag(){return"aa-likert-scale"}static get properties(){return{name:{type:String,userDefined:!0},debug:{type:Boolean,value:!1,userDefined:!1},value:{type:Number,userDefined:!1},items:{type:String,userDefined:!0},"start-label":{type:String,userDefined:!0,value:""},"middle-label":{type:String,userDefined:!0,value:""},"end-label":{type:String,userDefined:!0,value:""},"start-item":{type:Number,userDefined:!0,value:1},"show-radio-numbers":{type:Boolean,userDefined:!0,value:!0},"number-position":{type:String,userDefined:!0,value:"right"}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AALikertScale.properties)}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.value=this.getAttribute("value")}connectedCallback(){super.connectedCallback(),this.items||(this.items=5),this.root.innerHTML=this.css+this.html,this.root.querySelectorAll("sl-radio").forEach(s=>{s.addEventListener("sl-change",()=>{this.value=s.value}),s.addEventListener("change",()=>{this.value=s.value})}),this.arrangeLabels(),this.addEventListener("click",()=>{this.currentvalue?(this.currentvalue!=this.value&&this.dispatchEvent(new CustomEvent("change")),this.currentvalue=this.value):this.dispatchEvent(new CustomEvent("change"))})}getTags(){let s="",d=`<div class='start-label'>${this.getAttribute("start-label")||""}</div>`,v=`<div class='middle-label'>${this.getAttribute("middle-label")||""}</div>`,C=`<div class='end-label'>${this.getAttribute("end-label")||""}</div>`,T=parseInt(this.items);for(let N=1;N<=T;N++)N==1?s+=d:N==Math.floor((T+1)/2)?s+=v:N==T&&(s+=C);return`<div class="label-container">${s}</div>`}get css(){return html`<style>
           
            sl-radio {
                display:block;
                {{/*  width:48px;  */}}

            }   
            label {
               
                display:block;
            }

            .container {
                display:flex;
                flex-direction:column;
                align-items:center;
                position: relative;
               
                width: fit-content;
                margin:0px auto;
            }



            .label-container {
                width:100%; 
                position:relative;
               
                height: 200px;
            }

            .start-label {
                position:absolute;
                left:0px;
            }

            .middle-label {
                position:absolute;
                left:50%;
               
            }

            .end-label {
                position:absolute;
                right:0px;
               
            }

            .tag-container{
                
            }
            .group-container{
                display:flex;
                flex-direction:row;
                align-items:center;
                
                gap:32px;
            }
            .radio-container {
                display:flex;
                flex-direction: ${this.numberPosition==="right"?"row":this.numberPosition==="bottom"?"column":this.numberPosition==="left"?"row-reverse":"column-reverse"};
                align-items:center;
                gap: 8px;
            }

            label{
                display: ${this.showRadioNumbers?"block":"none"};
            }
            </style>`}get html(){const s=this.startItem?parseInt(this.startItem):0,d=this.name??v4();let v="";for(let C=0;C<this.items;C++){const T=C+s;v+=`<div class="radio-container"><sl-radio id="${d}-${T}" class="radio" name="${d}" value=${T}></sl-radio>`,v+=`<label for="${d}-${T}">${T}</label></div>`}return`
        
        <div class="container">
            <div class="group-container">
            ${v}
            </div>
            ${this.getTags()}
        </div>
        `}arrangeLabels(){const s=this.root.querySelector(".label-container"),d=this.root.querySelector(".group-container");d.getBoundingClientRect().width;const v=this.root.querySelector(".start-label"),C=this.root.querySelector(".middle-label"),T=this.root.querySelector(".end-label");setTimeout(()=>{s.style.width=d.getBoundingClientRect().width+"px";const O=C.getBoundingClientRect().width,N=d.getBoundingClientRect().width;C.style.left=N/2-O/2+"px",s.style.height=Math.max(v.getBoundingClientRect().height,C.getBoundingClientRect().height,T.getBoundingClientRect().height)+"px"},0)}}AABaseElement.registerAAElement("aa-likert-scale",AALikertScale);class AAMemory extends AABaseElement{static get tag(){return"aa-memory"}get observedAttributes(){return["name"]}constructor(){super()}connectedCallback(){}setData(s,d){localStorage.setItem(s,d)}getData(s){return localStorage[s]}getDataDump(){return localStorage}}AABaseElement.registerAAElement("aa-memory",AAMemory);class AAJump extends AABaseElement{static get category(){return"control"}static get tag(){return"aa-jump"}static get properties(){return{name:{type:String,userDefined:!0},goto:{type:String,userDefined:!0}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAJump.properties)}connectedCallback(){this._dispatchEndEvent({goto:this.goto,autoDispatch:!0}),this.remove()}}AABaseElement.registerAAElement("aa-jump",AAJump);class AASequence extends AABaseElement{constructor(){super(),this.target=null,this.sIndex=0}static get category(){return"control"}static get tag(){return"aa-sequence"}static get properties(){return{...AABaseElement.properties,name:{type:String,userDefined:!0},"write-into":{type:String,userDefined:!0},"should-run":{type:Boolean,userDefined:!0,value:!0},debug:{type:Boolean,value:!1,userDefined:!1},type:{type:String,userDefined:!1},stopped:{type:Boolean,userDefined:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AASequence.properties)}connectedCallback(){if(this.setAttributeDefaultValues(),this.diagram){this.produceDiagram();return}this.addEventListener("endEvent",this.endEventListener.bind(this)),(this.shouldRun===null||this.shouldRun===!0)&&this.init()}get css(){return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `}get html(){return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `}init(){if(this.stopped=!1,this.writeInto?this.target=document.querySelector(this.writeInto):this.target=this,typeof this.innerFragment>"u"){console.warn(".innerFragment is undefined");return}this.sIndex=0,this.stopped||this.start()}start(){this.stopped=!1,this.next()}stop(){this.stopped=!0}next(s){return new Promise((d,v)=>{if(this.stopped)return;if(this.sIndex>=this.innerFragment.childNodes.length){this.parentElement&&this.parentElement.dispatchEvent(new CustomEvent("endEvent",{detail:{autoDispatch:!0},bubbles:!0,composed:!0}));return}if(typeof s=="string"){for(let O=0;O<this.innerFragment.childNodes.length;O++)if(this.innerFragment.childNodes[O].getAttribute&&this.innerFragment.childNodes[O].getAttribute("name")==s){this.sIndex=O;break}}let C=this.innerFragment.childNodes[this.sIndex];for(;C.nodeType!=Node.ELEMENT_NODE;){let O=AABaseElement.copy(C);if(this.target.appendChild(O),this.currentNode=O,this.sIndex++,this.sIndex>=this.innerFragment.childNodes.length)return this.parentElement&&this.parentElement.dispatchEvent(new CustomEvent("endEvent",{detail:{autoDispatch:!0},bubbles:!0,composed:!0})),d();C=this.innerFragment.childNodes[this.sIndex]}let T=AABaseElement.copy(C);this.currentNode=T,this.sIndex+=1,this.target.appendChild(T),setTimeout(()=>d())})}endEventListener(s){s.stopPropagation();const d=s.detail;d?d.goto?this.next(d.goto):d.autoDispatch?this.next(!0):setTimeout(()=>this.next(!0)):setTimeout(()=>this.next(!0))}}AABaseElement.registerAAElement("aa-sequence",AASequence);class AASession extends AABaseElement{constructor(){super(),this.sessionId=v4(),this.sessionTime=0,this.name="",this.debug=!1,this.diagram=!1,this.shouldRun=!0,this.diagramTransparent=!1,this.myTemplate=document.createElement("template"),this.myTemplate.innerHTML=this.innerHTML,this.innerHTML="",this._mem=document.createElement("aa-memory"),this.addEventListener("valueSubmit",s=>{const d=s.detail;let v={data:d.value,sessionId:this.sessionId,sessionTimestamp:this.sessionTime,sessionName:this.name,variables:Object.keys(d.value)};Object.keys(s.detail.value).forEach(O=>{this._mem.setData(O,s.detail.value[O])});const C={input:v};let T=new CustomEvent("sessionInputSubmit",{bubbles:!0,detail:C,composed:!0});this.dispatchEvent(T)}),this.addEventListener("endEvent",s=>{this.debug||s.stopPropagation();let d=new CustomEvent("sessionEndEvent",{bubbles:!0,detail:"sessionEnd"});this.dispatchEvent(d)})}static get tag(){return"aa-session"}static get properties(){return{...AABaseElement.properties,"should-run":{type:Boolean,userDefined:!0,value:!0},debug:{type:Boolean,value:!1,userDefined:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AASession.properties)}myIdGenerator(){return v4()}connectedCallback(){if(this.innerHTML="",this.setAttributeDefaultValues(),this.diagram===!0){this.produceDiagram();return}this.sessionId=this.myIdGenerator(),this.sessionTime=new Date().getTime();let s=Object.keys(this.dataset);for(let d in s)this.setData(s[d],this.dataset[s[d]]);(this.shouldRun===null||this.shouldRun===!0)&&this.run(),setTimeout(()=>{this.dispatchEvent(new CustomEvent("sessionReady",{bubbles:!0}))},0)}attachTemplateChildNodesToMyself(s){for(;s.content.childNodes.length;)if(s.content.childNodes[0].nodeName==="TEMPLATE"){for(;s.content.childNodes[0].content.childNodes.length;)this.appendChild(s.content.childNodes[0].content.childNodes[0]);s.content.childNodes[0].remove()}else this.appendChild(s.content.childNodes[0])}run(){let s=this.myTemplate.cloneNode(!0);AABaseElement.scanAndReplace(s),this.attachTemplateChildNodesToMyself(s)}getData(s){return this._mem.getData(s)}setData(s,d){return this._mem.setData(s,d)}getDataDump(){return this._mem.getDataDump()}toJSON(){let s={};s[this.tagName]=this.getAttributes();let d=[];for(let v=0;v<this.originalChildNodes.length;v++){let C=this.originalChildNodes[v],T=AABaseElement.nodeToJSON(C);T&&d.push(T)}return s[this.tagName].childNodes=[{template:{childNodes:d}}],s}toJSL(){let s=this.getAttributeNames(),d={};for(let N=0;N<s.length;N++)this.getAttribute(s[N])!=="undefined"&&(d[s[N]]=this.getAttribute(s[N]));let v=[],C=this.myTemplate.content.childNodes[0].content.childNodes;for(let N=0;N<C.length;N++)nodeToJSL(C[N])&&v.push(nodeToJSL(C[N]));let T=formatJSLResult("TEMPLATE",{},v);return formatJSLResult("AA_SESSION",d,[T])}get originalChildNodes(){return this.myTemplate.content.childNodes.length==0?[]:this.myTemplate.content.childNodes[0].content?this.myTemplate.content.childNodes[0].content.childNodes:this.childNodes}}AABaseElement.registerAAElement("aa-session",AASession);class AASlider extends AABaseElement{constructor(){super(),this.minLabelItem=null,this.maxLabelItem=null,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-slider"}static get properties(){return{name:{type:String,userDefined:!0},min:{type:Number,userDefined:!0},max:{type:Number,userDefined:!0},"min-label":{type:String,userDefined:!0},"max-label":{type:String,userDefined:!0},value:{type:Number,userDefined:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AASlider.properties)}get value(){return this.inputItem?this.inputItem.value:this.getAttribute("value")}set value(s){this.setAttribute("value",s),this.inputItem&&(this.inputItem.value=s)}get minLabel(){return this.getAttribute("min-label")}get maxLabel(){return this.getAttribute("max-label")}set minLabel(s){this.setAttribute("min-label",s),this.inputItem&&(this.inputItem.minLabel=s)}set maxLabel(s){this.setAttribute("max-label",s),this.inputItem&&(this.inputItem.maxLabel=s)}set min(s){this.setAttribute("min",s),this.inputItem&&(this.inputItem.min=s)}set max(s){this.setAttribute("max",s),this.inputItem&&(this.inputItem.max=s)}connectedCallback(){super.connectedCallback();let s=this.css+`<div class='inputContainer'>${this.html}</div>`;this.root.innerHTML=s;let d=this.minLabel,v=this.maxLabel,C=this.value||(this.min+this.max)/2;this.inputItem=this.root.querySelector(".inputItem"),this.minLabelItem=this.root.querySelector(".minLabel"),this.maxLabelItem=this.root.querySelector(".maxLabel"),d&&(this.minLabelItem.innerHTML=d),v&&(this.maxLabelItem.innerHTML=v),C&&(this.inputItem.value=C),this.inputItem.addEventListener("sl-change",T=>{this.value=T.target.value}),this.inputItem.addEventListener("change",T=>{this.value=T.target.value})}get css(){return`<style>
        :host{
            display:block;
            overflow:hidden;        
        }
        </style>
        `}get html(){let s=customElements.get("sl-range")?`<sl-range style="width:100%" class="inputItem" min="${this.min}" max="${this.max}" value="${(this.max+this.min)/2}"></sl-range>`:`<input style="width:100%" type="range" class="inputItem" min="${this.min}" max="${this.max}" value="${(this.max+this.min)/2}">`;return html`
        <div>${s}</div>
        <div style="display:flex; justify-content:space-between">
            <div class="minLabel">${this.minLabel||""}</div>
            <div style="text-align:right" class="maxLabel">${this.maxLabel||""}</div>
        </div>
        `}}AABaseElement.registerAAElement("aa-slider",AASlider);class AATextAnswer extends AABaseElement{constructor(){super(),this.keyUpTimeout=null,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-text-answer"}static get properties(){return{name:{type:String,userDefined:!0},label:{type:String,userDefined:!0},value:{type:String,userDefined:!1},type:{type:String,userDefined:!0,value:"text",valuesAllowed:["date","datetime","datetime-local","email","number","password","tel","text","time","textarea"]}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AATextAnswer.properties)}get value(){return this.inputItem?this.inputItem.value:this.getAttribute("value")}set value(s){this.setAttribute("value",s),this.inputItem&&(this.inputItem.value=s);let d=this.getMemory();d&&d.setData(AABaseElement.getVariableName(this),s)}get label(){return this.getAttribute("label")}set label(s){this.setAttribute("label",s),this.inputItem&&(this.inputItem.label=s)}connectedCallback(){super.connectedCallback(),this.root.innerHTML=this.css+this.html;let s=this.label,d=this.value;this.inputItem=this.root.querySelector(".inputItem"),s&&(this.inputItem.label=s),d&&(this.inputItem.value=d),this.inputItem.addEventListener("sl-change",v=>{this.value=v.target.value,this.dispatchEvent(new CustomEvent("change"))}),this.inputItem.addEventListener("change",v=>{this.value=v.target.value,this.dispatchEvent(new CustomEvent("change"))}),this.keyUpTimeout=null,this.inputItem.addEventListener("sl-input",v=>{this.value=v.target.value,this.keyUpTimeout&&clearTimeout(this.keyUpTimeout),setTimeout(()=>{this.dispatchEvent(new CustomEvent("change"))},1500)}),this.inputItem.addEventListener("keyup",v=>{this.value=v.target.value,this.keyUpTimeout&&clearTimeout(this.keyUpTimeout),setTimeout(()=>{this.dispatchEvent(new CustomEvent("change"))},1500)})}get css(){return html`<style>
        :host{
            display:block;
            overflow:hidden;        
            text-align: center;
        }

        sl-input {
            width: 100%;
        }
        
        </style>`}get html(){let s=customElements.get("sl-input")?`<sl-input type='${this.type}' class='inputItem'></sl-input>`:`<input type='${this.type}' class='inputItem'>`;return html`${s}`}}AABaseElement.registerAAElement("aa-text-answer",AATextAnswer);class AAVariable extends AABaseElement{static get tag(){return"aa-variable"}static get properties(){return{name:{type:String,userDefined:!0},value:{type:String,userDefined:!0}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAVariable.properties)}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){let m=this.getMemory(),s=this.value;m&&m.setData(this.name,s),this._dispatchEndEvent({autoDispatch:!0}),this.debug||this.remove()}evaluateValueExpression(test){let expr=this.replaceExpressionIdentifiersWithValues(test);try{var parseTree=jsep$1(expr);if(parseTree.type!=="Identifier"){if(parseTree.type!=="Literal")return parseTree.left.type==="Literal"&&parseTree.right.type==="Literal"?eval(expr):eval(`${parseTree.left.value}${parseTree.operator}${parseTree.right.value}`)}}catch(m){console.error("parse error:",m)}}replaceExpressionIdentifiersWithValues(m,s){let d=this.getMemory()||s,v=m.toUpperCase(),C=Object.keys(d.getDataDump()),T=C.map(O=>O.toUpperCase());for(let O in C){let N=d.getData(C[O]),M=parseInt(N);M!=N&&(N==="null"?M="null":N==="true"?M="true":N==="false"?M="false":M=`"${N}"`);let B=new RegExp(T[O],"g");v=v.replace(B,M)}return v}}AABaseElement.registerAAElement("aa-variable",AAVariable);const preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}};export{preview as default};
