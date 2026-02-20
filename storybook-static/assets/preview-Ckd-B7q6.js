import{i as i$1,u as u$1,f,a as i$2,b,E,A as A$1}from"./lit-element-BrtkDOYA.js";import{l as l$2,r as r$2,p}from"./directive-helpers-DMDIdK1Z.js";import{e as e$3,i as i$3,t as t$1}from"./directive-CF8sV3Lr.js";import{c as commonjsGlobal}from"./_commonjsHelpers-Cpj98o6Y.js";import{v as v4}from"./v4-D8aEg3BZ.js";var spinner_styles_default=i$1`
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
`;const connectedElements=new Set,translations=new Map;let fallback,documentDirection="ltr",documentLanguage="en";const isClient=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(isClient){const m=new MutationObserver(update);documentDirection=document.documentElement.dir||"ltr",documentLanguage=document.documentElement.lang||navigator.language,m.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function registerTranslation(...m){m.map(s=>{const d=s.$code.toLowerCase();translations.has(d)?translations.set(d,Object.assign(Object.assign({},translations.get(d)),s)):translations.set(d,s),fallback||(fallback=s)}),update()}function update(){isClient&&(documentDirection=document.documentElement.dir||"ltr",documentLanguage=document.documentElement.lang||navigator.language),[...connectedElements.keys()].map(m=>{typeof m.requestUpdate=="function"&&m.requestUpdate()})}let LocalizeController$1=class{constructor(s){this.host=s,this.host.addController(this)}hostConnected(){connectedElements.add(this.host)}hostDisconnected(){connectedElements.delete(this.host)}dir(){return`${this.host.dir||documentDirection}`.toLowerCase()}lang(){return`${this.host.lang||documentLanguage}`.toLowerCase()}getTranslationData(s){var d,v;const _=new Intl.Locale(s.replace(/_/g,"-")),k=_==null?void 0:_.language.toLowerCase(),I=(v=(d=_==null?void 0:_.region)===null||d===void 0?void 0:d.toLowerCase())!==null&&v!==void 0?v:"",N=translations.get(`${k}-${I}`),D=translations.get(k);return{locale:_,language:k,region:I,primary:N,secondary:D}}exists(s,d){var v;const{primary:_,secondary:k}=this.getTranslationData((v=d.lang)!==null&&v!==void 0?v:this.lang());return d=Object.assign({includeFallback:!1},d),!!(_&&_[s]||k&&k[s]||d.includeFallback&&fallback&&fallback[s])}term(s,...d){const{primary:v,secondary:_}=this.getTranslationData(this.lang());let k;if(v&&v[s])k=v[s];else if(_&&_[s])k=_[s];else if(fallback&&fallback[s])k=fallback[s];else return console.error(`No translation found for: ${String(s)}`),String(s);return typeof k=="function"?k(...d):k}date(s,d){return s=new Date(s),new Intl.DateTimeFormat(this.lang(),d).format(s)}number(s,d){return s=Number(s),isNaN(s)?"":new Intl.NumberFormat(this.lang(),d).format(s)}relativeTime(s,d,v){return new Intl.RelativeTimeFormat(this.lang(),v).format(s,d)}};var translation={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(m,s)=>`Go to slide ${m} of ${s}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:m=>m===0?"No options selected":m===1?"1 option selected":`${m} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:m=>`Slide ${m}`,toggleColorFormat:"Toggle color format"};registerTranslation(translation);var en_default=translation,LocalizeController=class extends LocalizeController$1{};registerTranslation(en_default);var component_styles_default=i$1`
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
`,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__typeError=m=>{throw TypeError(m)},__defNormalProp=(m,s,d)=>s in m?__defProp(m,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):m[s]=d,__spreadValues=(m,s)=>{for(var d in s||(s={}))__hasOwnProp.call(s,d)&&__defNormalProp(m,d,s[d]);if(__getOwnPropSymbols)for(var d of __getOwnPropSymbols(s))__propIsEnum.call(s,d)&&__defNormalProp(m,d,s[d]);return m},__spreadProps=(m,s)=>__defProps(m,__getOwnPropDescs(s)),__decorateClass=(m,s,d,v)=>{for(var _=v>1?void 0:v?__getOwnPropDesc(s,d):s,k=m.length-1,I;k>=0;k--)(I=m[k])&&(_=(v?I(s,d,_):I(_))||_);return v&&_&&__defProp(s,d,_),_},__accessCheck=(m,s,d)=>s.has(m)||__typeError("Cannot "+d),__privateGet=(m,s,d)=>(__accessCheck(m,s,"read from private field"),d?d.call(m):s.get(m)),__privateAdd=(m,s,d)=>s.has(m)?__typeError("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(m):s.set(m,d),__privateSet=(m,s,d,v)=>(__accessCheck(m,s,"write to private field"),v?v.call(m,d):s.set(m,d),d);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$2={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f},r$1=(m=o$2,s,d)=>{const{kind:v,metadata:_}=d;let k=globalThis.litPropertyMetadata.get(_);if(k===void 0&&globalThis.litPropertyMetadata.set(_,k=new Map),v==="setter"&&((m=Object.create(m)).wrapped=!0),k.set(d.name,m),v==="accessor"){const{name:I}=d;return{set(N){const D=s.get.call(this);s.set.call(this,N),this.requestUpdate(I,D,m,!0,N)},init(N){return N!==void 0&&this.C(I,void 0,m,N),N}}}if(v==="setter"){const{name:I}=d;return function(N){const D=this[I];s.call(this,N),this.requestUpdate(I,D,m,!0,N)}}throw Error("Unsupported decorator location: "+v)};function n$1(m){return(s,d)=>typeof d=="object"?r$1(m,s,d):((v,_,k)=>{const I=_.hasOwnProperty(k);return _.constructor.createProperty(k,v),I?Object.getOwnPropertyDescriptor(_,k):void 0})(m,s,d)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(m){return n$1({...m,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t(m){return(s,d)=>{const v=typeof s=="function"?s:s[d];Object.assign(v,m)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$2=(m,s,d)=>(d.configurable=!0,d.enumerable=!0,Reflect.decorate&&typeof s!="object"&&Object.defineProperty(m,s,d),d);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$1(m,s){return(d,v,_)=>{const k=I=>{var N;return((N=I.renderRoot)==null?void 0:N.querySelector(m))??null};if(s){const{get:I,set:N}=typeof v=="object"?d:_??(()=>{const D=Symbol();return{get(){return this[D]},set(F){this[D]=F}}})();return e$2(d,v,{get(){let D=I.call(this);return D===void 0&&(D=k(this),(D!==null||this.hasUpdated)&&N.call(this,D)),D}})}return e$2(d,v,{get(){return k(this)}})}}var _hasRecordedInitialProperties,ShoelaceElement=class extends i$2{constructor(){super(),__privateAdd(this,_hasRecordedInitialProperties,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([m,s])=>{this.constructor.define(m,s)})}emit(m,s){const d=new CustomEvent(m,__spreadValues({bubbles:!0,cancelable:!1,composed:!0,detail:{}},s));return this.dispatchEvent(d),d}static define(m,s=this,d={}){const v=customElements.get(m);if(!v){try{customElements.define(m,s,d)}catch{customElements.define(m,class extends s{},d)}return}let _=" (unknown version)",k=_;"version"in s&&s.version&&(_=" v"+s.version),"version"in v&&v.version&&(k=" v"+v.version),!(_&&k&&_===k)&&console.warn(`Attempted to register <${m}>${_}, but <${m}>${k} has already been registered.`)}attributeChangedCallback(m,s,d){__privateGet(this,_hasRecordedInitialProperties)||(this.constructor.elementProperties.forEach((v,_)=>{v.reflect&&this[_]!=null&&this.initialReflectedProperties.set(_,this[_])}),__privateSet(this,_hasRecordedInitialProperties,!0)),super.attributeChangedCallback(m,s,d)}willUpdate(m){super.willUpdate(m),this.initialReflectedProperties.forEach((s,d)=>{m.has(d)&&this[d]==null&&(this[d]=s)})}};_hasRecordedInitialProperties=new WeakMap;ShoelaceElement.version="2.20.1";ShoelaceElement.dependencies={};__decorateClass([n$1()],ShoelaceElement.prototype,"dir",2);__decorateClass([n$1()],ShoelaceElement.prototype,"lang",2);var SlSpinner=class extends ShoelaceElement{constructor(){super(...arguments),this.localize=new LocalizeController(this)}render(){return b`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};SlSpinner.styles=[component_styles_default,spinner_styles_default];var formCollections=new WeakMap,reportValidityOverloads=new WeakMap,checkValidityOverloads=new WeakMap,userInteractedControls=new WeakSet,interactions=new WeakMap,FormControlController=class{constructor(m,s){this.handleFormData=d=>{const v=this.options.disabled(this.host),_=this.options.name(this.host),k=this.options.value(this.host),I=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!v&&!I&&typeof _=="string"&&_.length>0&&typeof k<"u"&&(Array.isArray(k)?k.forEach(N=>{d.formData.append(_,N.toString())}):d.formData.append(_,k.toString()))},this.handleFormSubmit=d=>{var v;const _=this.options.disabled(this.host),k=this.options.reportValidity;this.form&&!this.form.noValidate&&((v=formCollections.get(this.form))==null||v.forEach(I=>{this.setUserInteracted(I,!0)})),this.form&&!this.form.noValidate&&!_&&!k(this.host)&&(d.preventDefault(),d.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),interactions.set(this.host,[])},this.handleInteraction=d=>{const v=interactions.get(this.host);v.includes(d.type)||v.push(d.type),v.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const d=this.form.querySelectorAll("*");for(const v of d)if(typeof v.checkValidity=="function"&&!v.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const d=this.form.querySelectorAll("*");for(const v of d)if(typeof v.reportValidity=="function"&&!v.reportValidity())return!1}return!0},(this.host=m).addController(this),this.options=__spreadValues({form:d=>{const v=d.form;if(v){const k=d.getRootNode().querySelector(`#${v}`);if(k)return k}return d.closest("form")},name:d=>d.name,value:d=>d.value,defaultValue:d=>d.defaultValue,disabled:d=>{var v;return(v=d.disabled)!=null?v:!1},reportValidity:d=>typeof d.reportValidity=="function"?d.reportValidity():!0,checkValidity:d=>typeof d.checkValidity=="function"?d.checkValidity():!0,setValue:(d,v)=>d.value=v,assumeInteractionOn:["sl-input"]},s)}hostConnected(){const m=this.options.form(this.host);m&&this.attachForm(m),interactions.set(this.host,[]),this.options.assumeInteractionOn.forEach(s=>{this.host.addEventListener(s,this.handleInteraction)})}hostDisconnected(){this.detachForm(),interactions.delete(this.host),this.options.assumeInteractionOn.forEach(m=>{this.host.removeEventListener(m,this.handleInteraction)})}hostUpdated(){const m=this.options.form(this.host);m||this.detachForm(),m&&this.form!==m&&(this.detachForm(),this.attachForm(m)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(m){m?(this.form=m,formCollections.has(this.form)?formCollections.get(this.form).add(this.host):formCollections.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),reportValidityOverloads.has(this.form)||(reportValidityOverloads.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),checkValidityOverloads.has(this.form)||(checkValidityOverloads.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const m=formCollections.get(this.form);m&&(m.delete(this.host),m.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),reportValidityOverloads.has(this.form)&&(this.form.reportValidity=reportValidityOverloads.get(this.form),reportValidityOverloads.delete(this.form)),checkValidityOverloads.has(this.form)&&(this.form.checkValidity=checkValidityOverloads.get(this.form),checkValidityOverloads.delete(this.form)),this.form=void 0))}setUserInteracted(m,s){s?userInteractedControls.add(m):userInteractedControls.delete(m),m.requestUpdate()}doAction(m,s){if(this.form){const d=document.createElement("button");d.type=m,d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.clipPath="inset(50%)",d.style.overflow="hidden",d.style.whiteSpace="nowrap",s&&(d.name=s.name,d.value=s.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(v=>{s.hasAttribute(v)&&d.setAttribute(v,s.getAttribute(v))})),this.form.append(d),d.click(),d.remove()}}getForm(){var m;return(m=this.form)!=null?m:null}reset(m){this.doAction("reset",m)}submit(m){this.doAction("submit",m)}setValidity(m){const s=this.host,d=!!userInteractedControls.has(s),v=!!s.required;s.toggleAttribute("data-required",v),s.toggleAttribute("data-optional",!v),s.toggleAttribute("data-invalid",!m),s.toggleAttribute("data-valid",m),s.toggleAttribute("data-user-invalid",!m&&d),s.toggleAttribute("data-user-valid",m&&d)}updateValidity(){const m=this.host;this.setValidity(m.validity.valid)}emitInvalidEvent(m){const s=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});m||s.preventDefault(),this.host.dispatchEvent(s)||m==null||m.preventDefault()}},validValidityState=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(__spreadProps(__spreadValues({},validValidityState),{valid:!1,valueMissing:!0}));Object.freeze(__spreadProps(__spreadValues({},validValidityState),{valid:!1,customError:!0}));var button_styles_default=i$1`
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
`,HasSlotController=class{constructor(m,...s){this.slotNames=[],this.handleSlotChange=d=>{const v=d.target;(this.slotNames.includes("[default]")&&!v.name||v.name&&this.slotNames.includes(v.name))&&this.host.requestUpdate()},(this.host=m).addController(this),this.slotNames=s}hasDefaultSlot(){return[...this.host.childNodes].some(m=>{if(m.nodeType===m.TEXT_NODE&&m.textContent.trim()!=="")return!0;if(m.nodeType===m.ELEMENT_NODE){const s=m;if(s.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!s.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(m){return this.host.querySelector(`:scope > [slot="${m}"]`)!==null}test(m){return m==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(m)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},basePath="";function setBasePath(m){basePath=m}function getBasePath(m=""){if(!basePath){const s=[...document.getElementsByTagName("script")],d=s.find(v=>v.hasAttribute("data-shoelace"));if(d)setBasePath(d.getAttribute("data-shoelace"));else{const v=s.find(k=>/shoelace(\.min)?\.js($|\?)/.test(k.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(k.src));let _="";v&&(_=v.getAttribute("src")),setBasePath(_.split("/").slice(0,-1).join("/"))}}return basePath.replace(/\/$/,"")+(m?`/${m.replace(/^\//,"")}`:"")}var library={name:"default",resolver:m=>getBasePath(`assets/icons/${m}.svg`)},library_default_default=library,icons={caret:`
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
  `},systemLibrary={name:"system",resolver:m=>m in icons?`data:image/svg+xml,${encodeURIComponent(icons[m])}`:""},library_system_default=systemLibrary,registry=[library_default_default,library_system_default],watchedIcons=[];function watchIcon(m){watchedIcons.push(m)}function unwatchIcon(m){watchedIcons=watchedIcons.filter(s=>s!==m)}function getIconLibrary(m){return registry.find(s=>s.name===m)}var icon_styles_default=i$1`
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
`;function watch(m,s){const d=__spreadValues({waitUntilFirstUpdate:!1},s);return(v,_)=>{const{update:k}=v,I=Array.isArray(m)?m:[m];v.update=function(N){I.forEach(D=>{const F=D;if(N.has(F)){const z=N.get(F),$=this[F];z!==$&&(!d.waitUntilFirstUpdate||this.hasUpdated)&&this[_](z,$)}}),k.call(this,N)}}}var CACHEABLE_ERROR=Symbol(),RETRYABLE_ERROR=Symbol(),parser$1,iconCache=new Map,SlIcon=class extends ShoelaceElement{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(m,s){var d;let v;if(s!=null&&s.spriteSheet)return this.svg=b`<svg part="svg">
        <use part="use" href="${m}"></use>
      </svg>`,this.svg;try{if(v=await fetch(m,{mode:"cors"}),!v.ok)return v.status===410?CACHEABLE_ERROR:RETRYABLE_ERROR}catch{return RETRYABLE_ERROR}try{const _=document.createElement("div");_.innerHTML=await v.text();const k=_.firstElementChild;if(((d=k==null?void 0:k.tagName)==null?void 0:d.toLowerCase())!=="svg")return CACHEABLE_ERROR;parser$1||(parser$1=new DOMParser);const N=parser$1.parseFromString(k.outerHTML,"text/html").body.querySelector("svg");return N?(N.part.add("svg"),document.adoptNode(N)):CACHEABLE_ERROR}catch{return CACHEABLE_ERROR}}connectedCallback(){super.connectedCallback(),watchIcon(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),unwatchIcon(this)}getIconSource(){const m=getIconLibrary(this.library);return this.name&&m?{url:m.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var m;const{url:s,fromLibrary:d}=this.getIconSource(),v=d?getIconLibrary(this.library):void 0;if(!s){this.svg=null;return}let _=iconCache.get(s);if(_||(_=this.resolveIcon(s,v),iconCache.set(s,_)),!this.initialRender)return;const k=await _;if(k===RETRYABLE_ERROR&&iconCache.delete(s),s===this.getIconSource().url){if(l$2(k)){if(this.svg=k,v){await this.updateComplete;const I=this.shadowRoot.querySelector("[part='svg']");typeof v.mutator=="function"&&I&&v.mutator(I)}return}switch(k){case RETRYABLE_ERROR:case CACHEABLE_ERROR:this.svg=null,this.emit("sl-error");break;default:this.svg=k.cloneNode(!0),(m=v==null?void 0:v.mutator)==null||m.call(v,this.svg),this.emit("sl-load")}}}render(){return this.svg}};SlIcon.styles=[component_styles_default,icon_styles_default];__decorateClass([r()],SlIcon.prototype,"svg",2);__decorateClass([n$1({reflect:!0})],SlIcon.prototype,"name",2);__decorateClass([n$1()],SlIcon.prototype,"src",2);__decorateClass([n$1()],SlIcon.prototype,"label",2);__decorateClass([n$1({reflect:!0})],SlIcon.prototype,"library",2);__decorateClass([watch("label")],SlIcon.prototype,"handleLabelChange",1);__decorateClass([watch(["name","src","library"])],SlIcon.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=e$3(class extends i$3{constructor(m){var s;if(super(m),m.type!==t$1.ATTRIBUTE||m.name!=="class"||((s=m.strings)==null?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(m){return" "+Object.keys(m).filter(s=>m[s]).join(" ")+" "}update(m,[s]){var v,_;if(this.st===void 0){this.st=new Set,m.strings!==void 0&&(this.nt=new Set(m.strings.join(" ").split(/\s/).filter(k=>k!=="")));for(const k in s)s[k]&&!((v=this.nt)!=null&&v.has(k))&&this.st.add(k);return this.render(s)}const d=m.element.classList;for(const k of this.st)k in s||(d.remove(k),this.st.delete(k));for(const k in s){const I=!!s[k];I===this.st.has(k)||(_=this.nt)!=null&&_.has(k)||(I?(d.add(k),this.st.add(k)):(d.remove(k),this.st.delete(k)))}return E}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=Symbol.for(""),o$1=m=>{if((m==null?void 0:m.r)===a)return m==null?void 0:m._$litStatic$},i=(m,...s)=>({_$litStatic$:s.reduce((d,v,_)=>d+(k=>{if(k._$litStatic$!==void 0)return k._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${k}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(v)+m[_+1],m[0]),r:a}),l$1=new Map,n=m=>(s,...d)=>{const v=d.length;let _,k;const I=[],N=[];let D,F=0,z=!1;for(;F<v;){for(D=s[F];F<v&&(k=d[F],(_=o$1(k))!==void 0);)D+=_+s[++F],z=!0;F!==v&&N.push(k),I.push(D),F++}if(F===v&&I.push(s[v]),z){const $=I.join("$$lit$$");(s=l$1.get($))===void 0&&(I.raw=I,l$1.set($,s=I)),d=N}return m(s,...d)},u=n(b);/**
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
    `}};SlButton.styles=[component_styles_default,button_styles_default];SlButton.dependencies={"sl-icon":SlIcon,"sl-spinner":SlSpinner};__decorateClass([e$1(".button")],SlButton.prototype,"button",2);__decorateClass([r()],SlButton.prototype,"hasFocus",2);__decorateClass([r()],SlButton.prototype,"invalid",2);__decorateClass([n$1()],SlButton.prototype,"title",2);__decorateClass([n$1({reflect:!0})],SlButton.prototype,"variant",2);__decorateClass([n$1({reflect:!0})],SlButton.prototype,"size",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"caret",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"disabled",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"loading",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"outline",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"pill",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlButton.prototype,"circle",2);__decorateClass([n$1()],SlButton.prototype,"type",2);__decorateClass([n$1()],SlButton.prototype,"name",2);__decorateClass([n$1()],SlButton.prototype,"value",2);__decorateClass([n$1()],SlButton.prototype,"href",2);__decorateClass([n$1()],SlButton.prototype,"target",2);__decorateClass([n$1()],SlButton.prototype,"rel",2);__decorateClass([n$1()],SlButton.prototype,"download",2);__decorateClass([n$1()],SlButton.prototype,"form",2);__decorateClass([n$1({attribute:"formaction"})],SlButton.prototype,"formAction",2);__decorateClass([n$1({attribute:"formenctype"})],SlButton.prototype,"formEnctype",2);__decorateClass([n$1({attribute:"formmethod"})],SlButton.prototype,"formMethod",2);__decorateClass([n$1({attribute:"formnovalidate",type:Boolean})],SlButton.prototype,"formNoValidate",2);__decorateClass([n$1({attribute:"formtarget"})],SlButton.prototype,"formTarget",2);__decorateClass([watch("disabled",{waitUntilFirstUpdate:!0})],SlButton.prototype,"handleDisabledChange",1);SlButton.define("sl-button");var checkbox_styles_default=i$1`
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
`,defaultValue=(m="value")=>(s,d)=>{const v=s.constructor,_=v.prototype.attributeChangedCallback;v.prototype.attributeChangedCallback=function(k,I,N){var D;const F=v.getPropertyOptions(m),z=typeof F.attribute=="string"?F.attribute:m;if(k===z){const $=F.converter||u$1,W=(typeof $=="function"?$:(D=$==null?void 0:$.fromAttribute)!=null?D:u$1.fromAttribute)(N,F.type);this[m]!==W&&(this[d]=W)}_.call(this,k,I,N)}},form_control_styles_default=i$1`
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
 */const l=e$3(class extends i$3{constructor(m){if(super(m),m.type!==t$1.PROPERTY&&m.type!==t$1.ATTRIBUTE&&m.type!==t$1.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!r$2(m))throw Error("`live` bindings can only contain a single expression")}render(m){return m}update(m,[s]){if(s===E||s===A$1)return s;const d=m.element,v=m.name;if(m.type===t$1.PROPERTY){if(s===d[v])return E}else if(m.type===t$1.BOOLEAN_ATTRIBUTE){if(!!s===d.hasAttribute(v))return E}else if(m.type===t$1.ATTRIBUTE&&d.getAttribute(v)===s+"")return E;return p(m),s}});var SlCheckbox=class extends ShoelaceElement{constructor(){super(...arguments),this.formControlController=new FormControlController(this,{value:m=>m.checked?m.value||"on":void 0,defaultValue:m=>m.defaultChecked,setValue:(m,s)=>m.checked=s}),this.hasSlotController=new HasSlotController(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(m){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(m)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(m){this.input.focus(m)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(m){this.input.setCustomValidity(m),this.formControlController.updateValidity()}render(){const m=this.hasSlotController.test("help-text"),s=this.helpText?!0:!!m;return b`
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
    `}};SlCheckbox.styles=[component_styles_default,form_control_styles_default,checkbox_styles_default];SlCheckbox.dependencies={"sl-icon":SlIcon};__decorateClass([e$1('input[type="checkbox"]')],SlCheckbox.prototype,"input",2);__decorateClass([r()],SlCheckbox.prototype,"hasFocus",2);__decorateClass([n$1()],SlCheckbox.prototype,"title",2);__decorateClass([n$1()],SlCheckbox.prototype,"name",2);__decorateClass([n$1()],SlCheckbox.prototype,"value",2);__decorateClass([n$1({reflect:!0})],SlCheckbox.prototype,"size",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlCheckbox.prototype,"disabled",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlCheckbox.prototype,"checked",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlCheckbox.prototype,"indeterminate",2);__decorateClass([defaultValue("checked")],SlCheckbox.prototype,"defaultChecked",2);__decorateClass([n$1({reflect:!0})],SlCheckbox.prototype,"form",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlCheckbox.prototype,"required",2);__decorateClass([n$1({attribute:"help-text"})],SlCheckbox.prototype,"helpText",2);__decorateClass([watch("disabled",{waitUntilFirstUpdate:!0})],SlCheckbox.prototype,"handleDisabledChange",1);__decorateClass([watch(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],SlCheckbox.prototype,"handleStateChange",1);SlCheckbox.define("sl-checkbox");var radio_styles_default=i$1`
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
    `}};SlRadio.styles=[component_styles_default,radio_styles_default];SlRadio.dependencies={"sl-icon":SlIcon};__decorateClass([r()],SlRadio.prototype,"checked",2);__decorateClass([r()],SlRadio.prototype,"hasFocus",2);__decorateClass([n$1()],SlRadio.prototype,"value",2);__decorateClass([n$1({reflect:!0})],SlRadio.prototype,"size",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlRadio.prototype,"disabled",2);__decorateClass([watch("checked")],SlRadio.prototype,"handleCheckedChange",1);__decorateClass([watch("disabled",{waitUntilFirstUpdate:!0})],SlRadio.prototype,"handleDisabledChange",1);SlRadio.define("sl-radio");var range_styles_default=i$1`
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
`,SlRange=class extends ShoelaceElement{constructor(){super(...arguments),this.formControlController=new FormControlController(this),this.hasSlotController=new HasSlotController(this,"help-text","label"),this.localize=new LocalizeController(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=m=>m.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var m;super.disconnectedCallback(),(m=this.resizeObserver)==null||m.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(m){this.input.style.setProperty("--percent",`${m*100}%`)}syncTooltip(m){if(this.output!==null){const s=this.input.offsetWidth,d=this.output.offsetWidth,v=getComputedStyle(this.input).getPropertyValue("--thumb-size"),_=this.localize.dir()==="rtl",k=s*m;if(_){const I=`${s-k}px + ${m} * ${v}`;this.output.style.translate=`calc((${I} - ${d/2}px - ${v} / 2))`}else{const I=`${k}px - ${m} * ${v}`;this.output.style.translate=`calc(${I} - ${d/2}px + ${v} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const m=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(m),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(m))}handleInvalid(m){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(m)}focus(m){this.input.focus(m)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(m){this.input.setCustomValidity(m),this.formControlController.updateValidity()}render(){const m=this.hasSlotController.test("label"),s=this.hasSlotController.test("help-text"),d=this.label?!0:!!m,v=this.helpText?!0:!!s;return b`
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
    `}};SlRange.styles=[component_styles_default,form_control_styles_default,range_styles_default];__decorateClass([e$1(".range__control")],SlRange.prototype,"input",2);__decorateClass([e$1(".range__tooltip")],SlRange.prototype,"output",2);__decorateClass([r()],SlRange.prototype,"hasFocus",2);__decorateClass([r()],SlRange.prototype,"hasTooltip",2);__decorateClass([n$1()],SlRange.prototype,"title",2);__decorateClass([n$1()],SlRange.prototype,"name",2);__decorateClass([n$1({type:Number})],SlRange.prototype,"value",2);__decorateClass([n$1()],SlRange.prototype,"label",2);__decorateClass([n$1({attribute:"help-text"})],SlRange.prototype,"helpText",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlRange.prototype,"disabled",2);__decorateClass([n$1({type:Number})],SlRange.prototype,"min",2);__decorateClass([n$1({type:Number})],SlRange.prototype,"max",2);__decorateClass([n$1({type:Number})],SlRange.prototype,"step",2);__decorateClass([n$1()],SlRange.prototype,"tooltip",2);__decorateClass([n$1({attribute:!1})],SlRange.prototype,"tooltipFormatter",2);__decorateClass([n$1({reflect:!0})],SlRange.prototype,"form",2);__decorateClass([defaultValue()],SlRange.prototype,"defaultValue",2);__decorateClass([t({passive:!0})],SlRange.prototype,"handleThumbDragStart",1);__decorateClass([watch("value",{waitUntilFirstUpdate:!0})],SlRange.prototype,"handleValueChange",1);__decorateClass([watch("disabled",{waitUntilFirstUpdate:!0})],SlRange.prototype,"handleDisabledChange",1);__decorateClass([watch("hasTooltip",{waitUntilFirstUpdate:!0})],SlRange.prototype,"syncRange",1);SlRange.define("sl-range");var input_styles_default=i$1`
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
`,SlInput=class extends ShoelaceElement{constructor(){super(...arguments),this.formControlController=new FormControlController(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new HasSlotController(this,"help-text","label"),this.localize=new LocalizeController(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var m;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((m=this.input)==null?void 0:m.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(m){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=m,this.value=this.__dateInput.value}get valueAsNumber(){var m;return this.__numberInput.value=this.value,((m=this.input)==null?void 0:m.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(m){this.__numberInput.valueAsNumber=m,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(m){m.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(m){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(m)}handleKeyDown(m){const s=m.metaKey||m.ctrlKey||m.shiftKey||m.altKey;m.key==="Enter"&&!s&&setTimeout(()=>{!m.defaultPrevented&&!m.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(m){this.input.focus(m)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(m,s,d="none"){this.input.setSelectionRange(m,s,d)}setRangeText(m,s,d,v="preserve"){const _=s??this.input.selectionStart,k=d??this.input.selectionEnd;this.input.setRangeText(m,_,k,v),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(m){this.input.setCustomValidity(m),this.formControlController.updateValidity()}render(){const m=this.hasSlotController.test("label"),s=this.hasSlotController.test("help-text"),d=this.label?!0:!!m,v=this.helpText?!0:!!s,k=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return b`
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

            ${k?b`
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
    `}};SlInput.styles=[component_styles_default,form_control_styles_default,input_styles_default];SlInput.dependencies={"sl-icon":SlIcon};__decorateClass([e$1(".input__control")],SlInput.prototype,"input",2);__decorateClass([r()],SlInput.prototype,"hasFocus",2);__decorateClass([n$1()],SlInput.prototype,"title",2);__decorateClass([n$1({reflect:!0})],SlInput.prototype,"type",2);__decorateClass([n$1()],SlInput.prototype,"name",2);__decorateClass([n$1()],SlInput.prototype,"value",2);__decorateClass([defaultValue()],SlInput.prototype,"defaultValue",2);__decorateClass([n$1({reflect:!0})],SlInput.prototype,"size",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlInput.prototype,"filled",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlInput.prototype,"pill",2);__decorateClass([n$1()],SlInput.prototype,"label",2);__decorateClass([n$1({attribute:"help-text"})],SlInput.prototype,"helpText",2);__decorateClass([n$1({type:Boolean})],SlInput.prototype,"clearable",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlInput.prototype,"disabled",2);__decorateClass([n$1()],SlInput.prototype,"placeholder",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlInput.prototype,"readonly",2);__decorateClass([n$1({attribute:"password-toggle",type:Boolean})],SlInput.prototype,"passwordToggle",2);__decorateClass([n$1({attribute:"password-visible",type:Boolean})],SlInput.prototype,"passwordVisible",2);__decorateClass([n$1({attribute:"no-spin-buttons",type:Boolean})],SlInput.prototype,"noSpinButtons",2);__decorateClass([n$1({reflect:!0})],SlInput.prototype,"form",2);__decorateClass([n$1({type:Boolean,reflect:!0})],SlInput.prototype,"required",2);__decorateClass([n$1()],SlInput.prototype,"pattern",2);__decorateClass([n$1({type:Number})],SlInput.prototype,"minlength",2);__decorateClass([n$1({type:Number})],SlInput.prototype,"maxlength",2);__decorateClass([n$1()],SlInput.prototype,"min",2);__decorateClass([n$1()],SlInput.prototype,"max",2);__decorateClass([n$1()],SlInput.prototype,"step",2);__decorateClass([n$1()],SlInput.prototype,"autocapitalize",2);__decorateClass([n$1()],SlInput.prototype,"autocorrect",2);__decorateClass([n$1()],SlInput.prototype,"autocomplete",2);__decorateClass([n$1({type:Boolean})],SlInput.prototype,"autofocus",2);__decorateClass([n$1()],SlInput.prototype,"enterkeyhint",2);__decorateClass([n$1({type:Boolean,converter:{fromAttribute:m=>!(!m||m==="false"),toAttribute:m=>m?"true":"false"}})],SlInput.prototype,"spellcheck",2);__decorateClass([n$1()],SlInput.prototype,"inputmode",2);__decorateClass([watch("disabled",{waitUntilFirstUpdate:!0})],SlInput.prototype,"handleDisabledChange",1);__decorateClass([watch("step",{waitUntilFirstUpdate:!0})],SlInput.prototype,"handleStepChange",1);__decorateClass([watch("value",{waitUntilFirstUpdate:!0})],SlInput.prototype,"handleValueChange",1);SlInput.define("sl-input");var lodash={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */lodash.exports;(function(m,s){(function(){var d,v="4.17.21",_=200,k="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",I="Expected a function",N="Invalid `variable` option passed into `_.template`",D="__lodash_hash_undefined__",F=500,z="__lodash_placeholder__",$=1,V=2,W=4,ot=1,lt=2,bt=1,ft=2,Tt=4,Dt=8,Ht=16,Ft=32,Bt=64,Wt=128,Pt=256,de=512,er=30,Ln="...",Mn=800,Dn=16,vn=1,Rn=2,yn=3,Lt=1/0,Ie=9007199254740991,Fn=17976931348623157e292,mt=NaN,ee=4294967295,_n=ee-1,pe=ee>>>1,$n=[["ary",Wt],["bind",bt],["bindKey",ft],["curry",Dt],["curryRight",Ht],["flip",de],["partial",Ft],["partialRight",Bt],["rearg",Pt]],ne="[object Arguments]",ue="[object Array]",Gt="[object AsyncFunction]",_e="[object Boolean]",Pe="[object Date]",Bn="[object DOMException]",je="[object Error]",Ke="[object Function]",xn="[object GeneratorFunction]",se="[object Map]",xe="[object Number]",nr="[object Null]",we="[object Object]",wn="[object Promise]",Pn="[object Proxy]",ge="[object RegExp]",oe="[object Set]",We="[object String]",Je="[object Symbol]",zn="[object Undefined]",Xe="[object WeakMap]",rr="[object WeakSet]",S="[object ArrayBuffer]",Y="[object DataView]",Q="[object Float32Array]",ut="[object Float64Array]",et="[object Int8Array]",ct="[object Int16Array]",L="[object Int32Array]",q="[object Uint8Array]",K="[object Uint8ClampedArray]",st="[object Uint16Array]",it="[object Uint32Array]",X=/\b__p \+= '';/g,at=/\b(__p \+=) '' \+/g,nt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,dt=/&(?:amp|lt|gt|quot|#39);/g,xt=/[&<>"']/g,wt=RegExp(dt.source),Oe=RegExp(xt.source),Zt=/<%-([\s\S]+?)%>/g,Jl=/<%([\s\S]+?)%>/g,_s=/<%=([\s\S]+?)%>/g,Xl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ql=/^\w*$/,Zl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,li=/[\\^$.*+?()[\]{}|]/g,ta=RegExp(li.source),ai=/^\s+/,ea=/\s/,na=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ra=/\{\n\/\* \[wrapped with (.+)\] \*/,ia=/,? & /,sa=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,oa=/[()=,{}\[\]\/\s]/,la=/\\(\\)?/g,aa=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,xs=/\w*$/,ua=/^[-+]0x[0-9a-f]+$/i,ca=/^0b[01]+$/i,ha=/^\[object .+?Constructor\]$/,fa=/^0o[0-7]+$/i,da=/^(?:0|[1-9]\d*)$/,pa=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yr=/($^)/,ga=/['\n\r\u2028\u2029\\]/g,_r="\\ud800-\\udfff",ma="\\u0300-\\u036f",ba="\\ufe20-\\ufe2f",va="\\u20d0-\\u20ff",ws=ma+ba+va,As="\\u2700-\\u27bf",Cs="a-z\\xdf-\\xf6\\xf8-\\xff",ya="\\xac\\xb1\\xd7\\xf7",_a="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xa="\\u2000-\\u206f",wa=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Es="A-Z\\xc0-\\xd6\\xd8-\\xde",Ss="\\ufe0e\\ufe0f",ks=ya+_a+xa+wa,ui="['’]",Aa="["+_r+"]",Ts="["+ks+"]",xr="["+ws+"]",Is="\\d+",Ca="["+As+"]",Os="["+Cs+"]",Ns="[^"+_r+ks+Is+As+Cs+Es+"]",ci="\\ud83c[\\udffb-\\udfff]",Ea="(?:"+xr+"|"+ci+")",Ls="[^"+_r+"]",hi="(?:\\ud83c[\\udde6-\\uddff]){2}",fi="[\\ud800-\\udbff][\\udc00-\\udfff]",Un="["+Es+"]",Ms="\\u200d",Ds="(?:"+Os+"|"+Ns+")",Sa="(?:"+Un+"|"+Ns+")",Rs="(?:"+ui+"(?:d|ll|m|re|s|t|ve))?",Fs="(?:"+ui+"(?:D|LL|M|RE|S|T|VE))?",$s=Ea+"?",Bs="["+Ss+"]?",ka="(?:"+Ms+"(?:"+[Ls,hi,fi].join("|")+")"+Bs+$s+")*",Ta="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ia="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ps=Bs+$s+ka,Oa="(?:"+[Ca,hi,fi].join("|")+")"+Ps,Na="(?:"+[Ls+xr+"?",xr,hi,fi,Aa].join("|")+")",La=RegExp(ui,"g"),Ma=RegExp(xr,"g"),di=RegExp(ci+"(?="+ci+")|"+Na+Ps,"g"),Da=RegExp([Un+"?"+Os+"+"+Rs+"(?="+[Ts,Un,"$"].join("|")+")",Sa+"+"+Fs+"(?="+[Ts,Un+Ds,"$"].join("|")+")",Un+"?"+Ds+"+"+Rs,Un+"+"+Fs,Ia,Ta,Is,Oa].join("|"),"g"),Ra=RegExp("["+Ms+_r+ws+Ss+"]"),Fa=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,$a=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ba=-1,Vt={};Vt[Q]=Vt[ut]=Vt[et]=Vt[ct]=Vt[L]=Vt[q]=Vt[K]=Vt[st]=Vt[it]=!0,Vt[ne]=Vt[ue]=Vt[S]=Vt[_e]=Vt[Y]=Vt[Pe]=Vt[je]=Vt[Ke]=Vt[se]=Vt[xe]=Vt[we]=Vt[ge]=Vt[oe]=Vt[We]=Vt[Xe]=!1;var Ut={};Ut[ne]=Ut[ue]=Ut[S]=Ut[Y]=Ut[_e]=Ut[Pe]=Ut[Q]=Ut[ut]=Ut[et]=Ut[ct]=Ut[L]=Ut[se]=Ut[xe]=Ut[we]=Ut[ge]=Ut[oe]=Ut[We]=Ut[Je]=Ut[q]=Ut[K]=Ut[st]=Ut[it]=!0,Ut[je]=Ut[Ke]=Ut[Xe]=!1;var Pa={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},za={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ua={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Va={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ha=parseFloat,Wa=parseInt,zs=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,Ga=typeof self=="object"&&self&&self.Object===Object&&self,re=zs||Ga||Function("return this")(),pi=s&&!s.nodeType&&s,An=pi&&!0&&m&&!m.nodeType&&m,Us=An&&An.exports===pi,gi=Us&&zs.process,Ne=function(){try{var U=An&&An.require&&An.require("util").types;return U||gi&&gi.binding&&gi.binding("util")}catch{}}(),Vs=Ne&&Ne.isArrayBuffer,Hs=Ne&&Ne.isDate,Ws=Ne&&Ne.isMap,Gs=Ne&&Ne.isRegExp,Ys=Ne&&Ne.isSet,qs=Ne&&Ne.isTypedArray;function Ae(U,J,j){switch(j.length){case 0:return U.call(J);case 1:return U.call(J,j[0]);case 2:return U.call(J,j[0],j[1]);case 3:return U.call(J,j[0],j[1],j[2])}return U.apply(J,j)}function Ya(U,J,j,pt){for(var At=-1,Mt=U==null?0:U.length;++At<Mt;){var Xt=U[At];J(pt,Xt,j(Xt),U)}return pt}function Le(U,J){for(var j=-1,pt=U==null?0:U.length;++j<pt&&J(U[j],j,U)!==!1;);return U}function qa(U,J){for(var j=U==null?0:U.length;j--&&J(U[j],j,U)!==!1;);return U}function js(U,J){for(var j=-1,pt=U==null?0:U.length;++j<pt;)if(!J(U[j],j,U))return!1;return!0}function un(U,J){for(var j=-1,pt=U==null?0:U.length,At=0,Mt=[];++j<pt;){var Xt=U[j];J(Xt,j,U)&&(Mt[At++]=Xt)}return Mt}function wr(U,J){var j=U==null?0:U.length;return!!j&&Vn(U,J,0)>-1}function mi(U,J,j){for(var pt=-1,At=U==null?0:U.length;++pt<At;)if(j(J,U[pt]))return!0;return!1}function Yt(U,J){for(var j=-1,pt=U==null?0:U.length,At=Array(pt);++j<pt;)At[j]=J(U[j],j,U);return At}function cn(U,J){for(var j=-1,pt=J.length,At=U.length;++j<pt;)U[At+j]=J[j];return U}function bi(U,J,j,pt){var At=-1,Mt=U==null?0:U.length;for(pt&&Mt&&(j=U[++At]);++At<Mt;)j=J(j,U[At],At,U);return j}function ja(U,J,j,pt){var At=U==null?0:U.length;for(pt&&At&&(j=U[--At]);At--;)j=J(j,U[At],At,U);return j}function vi(U,J){for(var j=-1,pt=U==null?0:U.length;++j<pt;)if(J(U[j],j,U))return!0;return!1}var Ka=yi("length");function Ja(U){return U.split("")}function Xa(U){return U.match(sa)||[]}function Ks(U,J,j){var pt;return j(U,function(At,Mt,Xt){if(J(At,Mt,Xt))return pt=Mt,!1}),pt}function Ar(U,J,j,pt){for(var At=U.length,Mt=j+(pt?1:-1);pt?Mt--:++Mt<At;)if(J(U[Mt],Mt,U))return Mt;return-1}function Vn(U,J,j){return J===J?uu(U,J,j):Ar(U,Js,j)}function Qa(U,J,j,pt){for(var At=j-1,Mt=U.length;++At<Mt;)if(pt(U[At],J))return At;return-1}function Js(U){return U!==U}function Xs(U,J){var j=U==null?0:U.length;return j?xi(U,J)/j:mt}function yi(U){return function(J){return J==null?d:J[U]}}function _i(U){return function(J){return U==null?d:U[J]}}function Qs(U,J,j,pt,At){return At(U,function(Mt,Xt,zt){j=pt?(pt=!1,Mt):J(j,Mt,Xt,zt)}),j}function Za(U,J){var j=U.length;for(U.sort(J);j--;)U[j]=U[j].value;return U}function xi(U,J){for(var j,pt=-1,At=U.length;++pt<At;){var Mt=J(U[pt]);Mt!==d&&(j=j===d?Mt:j+Mt)}return j}function wi(U,J){for(var j=-1,pt=Array(U);++j<U;)pt[j]=J(j);return pt}function tu(U,J){return Yt(J,function(j){return[j,U[j]]})}function Zs(U){return U&&U.slice(0,io(U)+1).replace(ai,"")}function Ce(U){return function(J){return U(J)}}function Ai(U,J){return Yt(J,function(j){return U[j]})}function ir(U,J){return U.has(J)}function eo(U,J){for(var j=-1,pt=U.length;++j<pt&&Vn(J,U[j],0)>-1;);return j}function no(U,J){for(var j=U.length;j--&&Vn(J,U[j],0)>-1;);return j}function eu(U,J){for(var j=U.length,pt=0;j--;)U[j]===J&&++pt;return pt}var nu=_i(Pa),ru=_i(za);function iu(U){return"\\"+Va[U]}function su(U,J){return U==null?d:U[J]}function Hn(U){return Ra.test(U)}function ou(U){return Fa.test(U)}function lu(U){for(var J,j=[];!(J=U.next()).done;)j.push(J.value);return j}function Ci(U){var J=-1,j=Array(U.size);return U.forEach(function(pt,At){j[++J]=[At,pt]}),j}function ro(U,J){return function(j){return U(J(j))}}function hn(U,J){for(var j=-1,pt=U.length,At=0,Mt=[];++j<pt;){var Xt=U[j];(Xt===J||Xt===z)&&(U[j]=z,Mt[At++]=j)}return Mt}function Cr(U){var J=-1,j=Array(U.size);return U.forEach(function(pt){j[++J]=pt}),j}function au(U){var J=-1,j=Array(U.size);return U.forEach(function(pt){j[++J]=[pt,pt]}),j}function uu(U,J,j){for(var pt=j-1,At=U.length;++pt<At;)if(U[pt]===J)return pt;return-1}function cu(U,J,j){for(var pt=j+1;pt--;)if(U[pt]===J)return pt;return pt}function Wn(U){return Hn(U)?fu(U):Ka(U)}function ze(U){return Hn(U)?du(U):Ja(U)}function io(U){for(var J=U.length;J--&&ea.test(U.charAt(J)););return J}var hu=_i(Ua);function fu(U){for(var J=di.lastIndex=0;di.test(U);)++J;return J}function du(U){return U.match(di)||[]}function pu(U){return U.match(Da)||[]}var gu=function U(J){J=J==null?re:Gn.defaults(re.Object(),J,Gn.pick(re,$a));var j=J.Array,pt=J.Date,At=J.Error,Mt=J.Function,Xt=J.Math,zt=J.Object,Ei=J.RegExp,mu=J.String,Me=J.TypeError,Er=j.prototype,bu=Mt.prototype,Yn=zt.prototype,Sr=J["__core-js_shared__"],kr=bu.toString,$t=Yn.hasOwnProperty,vu=0,so=function(){var h=/[^.]+$/.exec(Sr&&Sr.keys&&Sr.keys.IE_PROTO||"");return h?"Symbol(src)_1."+h:""}(),Tr=Yn.toString,yu=kr.call(zt),_u=re._,xu=Ei("^"+kr.call($t).replace(li,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ir=Us?J.Buffer:d,fn=J.Symbol,Or=J.Uint8Array,oo=Ir?Ir.allocUnsafe:d,Nr=ro(zt.getPrototypeOf,zt),lo=zt.create,ao=Yn.propertyIsEnumerable,Lr=Er.splice,uo=fn?fn.isConcatSpreadable:d,sr=fn?fn.iterator:d,Cn=fn?fn.toStringTag:d,Mr=function(){try{var h=In(zt,"defineProperty");return h({},"",{}),h}catch{}}(),wu=J.clearTimeout!==re.clearTimeout&&J.clearTimeout,Au=pt&&pt.now!==re.Date.now&&pt.now,Cu=J.setTimeout!==re.setTimeout&&J.setTimeout,Dr=Xt.ceil,Rr=Xt.floor,Si=zt.getOwnPropertySymbols,Eu=Ir?Ir.isBuffer:d,co=J.isFinite,Su=Er.join,ku=ro(zt.keys,zt),Qt=Xt.max,le=Xt.min,Tu=pt.now,Iu=J.parseInt,ho=Xt.random,Ou=Er.reverse,ki=In(J,"DataView"),or=In(J,"Map"),Ti=In(J,"Promise"),qn=In(J,"Set"),lr=In(J,"WeakMap"),ar=In(zt,"create"),Fr=lr&&new lr,jn={},Nu=On(ki),Lu=On(or),Mu=On(Ti),Du=On(qn),Ru=On(lr),$r=fn?fn.prototype:d,ur=$r?$r.valueOf:d,fo=$r?$r.toString:d;function M(h){if(jt(h)&&!Ct(h)&&!(h instanceof Ot)){if(h instanceof De)return h;if($t.call(h,"__wrapped__"))return pl(h)}return new De(h)}var Kn=function(){function h(){}return function(g){if(!qt(g))return{};if(lo)return lo(g);h.prototype=g;var C=new h;return h.prototype=d,C}}();function Br(){}function De(h,g){this.__wrapped__=h,this.__actions__=[],this.__chain__=!!g,this.__index__=0,this.__values__=d}M.templateSettings={escape:Zt,evaluate:Jl,interpolate:_s,variable:"",imports:{_:M}},M.prototype=Br.prototype,M.prototype.constructor=M,De.prototype=Kn(Br.prototype),De.prototype.constructor=De;function Ot(h){this.__wrapped__=h,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ee,this.__views__=[]}function Fu(){var h=new Ot(this.__wrapped__);return h.__actions__=me(this.__actions__),h.__dir__=this.__dir__,h.__filtered__=this.__filtered__,h.__iteratees__=me(this.__iteratees__),h.__takeCount__=this.__takeCount__,h.__views__=me(this.__views__),h}function $u(){if(this.__filtered__){var h=new Ot(this);h.__dir__=-1,h.__filtered__=!0}else h=this.clone(),h.__dir__*=-1;return h}function Bu(){var h=this.__wrapped__.value(),g=this.__dir__,C=Ct(h),T=g<0,O=C?h.length:0,R=Jc(0,O,this.__views__),B=R.start,P=R.end,H=P-B,Z=T?P:B-1,tt=this.__iteratees__,rt=tt.length,ht=0,gt=le(H,this.__takeCount__);if(!C||!T&&O==H&&gt==H)return $o(h,this.__actions__);var yt=[];t:for(;H--&&ht<gt;){Z+=g;for(var St=-1,_t=h[Z];++St<rt;){var It=tt[St],Nt=It.iteratee,ke=It.type,fe=Nt(_t);if(ke==Rn)_t=fe;else if(!fe){if(ke==vn)continue t;break t}}yt[ht++]=_t}return yt}Ot.prototype=Kn(Br.prototype),Ot.prototype.constructor=Ot;function En(h){var g=-1,C=h==null?0:h.length;for(this.clear();++g<C;){var T=h[g];this.set(T[0],T[1])}}function Pu(){this.__data__=ar?ar(null):{},this.size=0}function zu(h){var g=this.has(h)&&delete this.__data__[h];return this.size-=g?1:0,g}function Uu(h){var g=this.__data__;if(ar){var C=g[h];return C===D?d:C}return $t.call(g,h)?g[h]:d}function Vu(h){var g=this.__data__;return ar?g[h]!==d:$t.call(g,h)}function Hu(h,g){var C=this.__data__;return this.size+=this.has(h)?0:1,C[h]=ar&&g===d?D:g,this}En.prototype.clear=Pu,En.prototype.delete=zu,En.prototype.get=Uu,En.prototype.has=Vu,En.prototype.set=Hu;function Qe(h){var g=-1,C=h==null?0:h.length;for(this.clear();++g<C;){var T=h[g];this.set(T[0],T[1])}}function Wu(){this.__data__=[],this.size=0}function Gu(h){var g=this.__data__,C=Pr(g,h);if(C<0)return!1;var T=g.length-1;return C==T?g.pop():Lr.call(g,C,1),--this.size,!0}function Yu(h){var g=this.__data__,C=Pr(g,h);return C<0?d:g[C][1]}function qu(h){return Pr(this.__data__,h)>-1}function ju(h,g){var C=this.__data__,T=Pr(C,h);return T<0?(++this.size,C.push([h,g])):C[T][1]=g,this}Qe.prototype.clear=Wu,Qe.prototype.delete=Gu,Qe.prototype.get=Yu,Qe.prototype.has=qu,Qe.prototype.set=ju;function Ze(h){var g=-1,C=h==null?0:h.length;for(this.clear();++g<C;){var T=h[g];this.set(T[0],T[1])}}function Ku(){this.size=0,this.__data__={hash:new En,map:new(or||Qe),string:new En}}function Ju(h){var g=Xr(this,h).delete(h);return this.size-=g?1:0,g}function Xu(h){return Xr(this,h).get(h)}function Qu(h){return Xr(this,h).has(h)}function Zu(h,g){var C=Xr(this,h),T=C.size;return C.set(h,g),this.size+=C.size==T?0:1,this}Ze.prototype.clear=Ku,Ze.prototype.delete=Ju,Ze.prototype.get=Xu,Ze.prototype.has=Qu,Ze.prototype.set=Zu;function Sn(h){var g=-1,C=h==null?0:h.length;for(this.__data__=new Ze;++g<C;)this.add(h[g])}function tc(h){return this.__data__.set(h,D),this}function ec(h){return this.__data__.has(h)}Sn.prototype.add=Sn.prototype.push=tc,Sn.prototype.has=ec;function Ue(h){var g=this.__data__=new Qe(h);this.size=g.size}function nc(){this.__data__=new Qe,this.size=0}function rc(h){var g=this.__data__,C=g.delete(h);return this.size=g.size,C}function ic(h){return this.__data__.get(h)}function sc(h){return this.__data__.has(h)}function oc(h,g){var C=this.__data__;if(C instanceof Qe){var T=C.__data__;if(!or||T.length<_-1)return T.push([h,g]),this.size=++C.size,this;C=this.__data__=new Ze(T)}return C.set(h,g),this.size=C.size,this}Ue.prototype.clear=nc,Ue.prototype.delete=rc,Ue.prototype.get=ic,Ue.prototype.has=sc,Ue.prototype.set=oc;function po(h,g){var C=Ct(h),T=!C&&Nn(h),O=!C&&!T&&bn(h),R=!C&&!T&&!O&&Zn(h),B=C||T||O||R,P=B?wi(h.length,mu):[],H=P.length;for(var Z in h)(g||$t.call(h,Z))&&!(B&&(Z=="length"||O&&(Z=="offset"||Z=="parent")||R&&(Z=="buffer"||Z=="byteLength"||Z=="byteOffset")||rn(Z,H)))&&P.push(Z);return P}function go(h){var g=h.length;return g?h[Pi(0,g-1)]:d}function lc(h,g){return Qr(me(h),kn(g,0,h.length))}function ac(h){return Qr(me(h))}function Ii(h,g,C){(C!==d&&!Ve(h[g],C)||C===d&&!(g in h))&&tn(h,g,C)}function cr(h,g,C){var T=h[g];(!($t.call(h,g)&&Ve(T,C))||C===d&&!(g in h))&&tn(h,g,C)}function Pr(h,g){for(var C=h.length;C--;)if(Ve(h[C][0],g))return C;return-1}function uc(h,g,C,T){return dn(h,function(O,R,B){g(T,O,C(O),B)}),T}function mo(h,g){return h&&Ye(g,te(g),h)}function cc(h,g){return h&&Ye(g,ve(g),h)}function tn(h,g,C){g=="__proto__"&&Mr?Mr(h,g,{configurable:!0,enumerable:!0,value:C,writable:!0}):h[g]=C}function Oi(h,g){for(var C=-1,T=g.length,O=j(T),R=h==null;++C<T;)O[C]=R?d:hs(h,g[C]);return O}function kn(h,g,C){return h===h&&(C!==d&&(h=h<=C?h:C),g!==d&&(h=h>=g?h:g)),h}function Re(h,g,C,T,O,R){var B,P=g&$,H=g&V,Z=g&W;if(C&&(B=O?C(h,T,O,R):C(h)),B!==d)return B;if(!qt(h))return h;var tt=Ct(h);if(tt){if(B=Qc(h),!P)return me(h,B)}else{var rt=ae(h),ht=rt==Ke||rt==xn;if(bn(h))return zo(h,P);if(rt==we||rt==ne||ht&&!O){if(B=H||ht?{}:sl(h),!P)return H?Uc(h,cc(B,h)):zc(h,mo(B,h))}else{if(!Ut[rt])return O?h:{};B=Zc(h,rt,P)}}R||(R=new Ue);var gt=R.get(h);if(gt)return gt;R.set(h,B),Dl(h)?h.forEach(function(_t){B.add(Re(_t,g,C,_t,h,R))}):Ll(h)&&h.forEach(function(_t,It){B.set(It,Re(_t,g,C,It,h,R))});var yt=Z?H?Ji:Ki:H?ve:te,St=tt?d:yt(h);return Le(St||h,function(_t,It){St&&(It=_t,_t=h[It]),cr(B,It,Re(_t,g,C,It,h,R))}),B}function hc(h){var g=te(h);return function(C){return bo(C,h,g)}}function bo(h,g,C){var T=C.length;if(h==null)return!T;for(h=zt(h);T--;){var O=C[T],R=g[O],B=h[O];if(B===d&&!(O in h)||!R(B))return!1}return!0}function vo(h,g,C){if(typeof h!="function")throw new Me(I);return br(function(){h.apply(d,C)},g)}function hr(h,g,C,T){var O=-1,R=wr,B=!0,P=h.length,H=[],Z=g.length;if(!P)return H;C&&(g=Yt(g,Ce(C))),T?(R=mi,B=!1):g.length>=_&&(R=ir,B=!1,g=new Sn(g));t:for(;++O<P;){var tt=h[O],rt=C==null?tt:C(tt);if(tt=T||tt!==0?tt:0,B&&rt===rt){for(var ht=Z;ht--;)if(g[ht]===rt)continue t;H.push(tt)}else R(g,rt,T)||H.push(tt)}return H}var dn=Go(Ge),yo=Go(Li,!0);function fc(h,g){var C=!0;return dn(h,function(T,O,R){return C=!!g(T,O,R),C}),C}function zr(h,g,C){for(var T=-1,O=h.length;++T<O;){var R=h[T],B=g(R);if(B!=null&&(P===d?B===B&&!Se(B):C(B,P)))var P=B,H=R}return H}function dc(h,g,C,T){var O=h.length;for(C=Et(C),C<0&&(C=-C>O?0:O+C),T=T===d||T>O?O:Et(T),T<0&&(T+=O),T=C>T?0:Fl(T);C<T;)h[C++]=g;return h}function _o(h,g){var C=[];return dn(h,function(T,O,R){g(T,O,R)&&C.push(T)}),C}function ie(h,g,C,T,O){var R=-1,B=h.length;for(C||(C=eh),O||(O=[]);++R<B;){var P=h[R];g>0&&C(P)?g>1?ie(P,g-1,C,T,O):cn(O,P):T||(O[O.length]=P)}return O}var Ni=Yo(),xo=Yo(!0);function Ge(h,g){return h&&Ni(h,g,te)}function Li(h,g){return h&&xo(h,g,te)}function Ur(h,g){return un(g,function(C){return sn(h[C])})}function Tn(h,g){g=gn(g,h);for(var C=0,T=g.length;h!=null&&C<T;)h=h[qe(g[C++])];return C&&C==T?h:d}function wo(h,g,C){var T=g(h);return Ct(h)?T:cn(T,C(h))}function ce(h){return h==null?h===d?zn:nr:Cn&&Cn in zt(h)?Kc(h):ah(h)}function Mi(h,g){return h>g}function pc(h,g){return h!=null&&$t.call(h,g)}function gc(h,g){return h!=null&&g in zt(h)}function mc(h,g,C){return h>=le(g,C)&&h<Qt(g,C)}function Di(h,g,C){for(var T=C?mi:wr,O=h[0].length,R=h.length,B=R,P=j(R),H=1/0,Z=[];B--;){var tt=h[B];B&&g&&(tt=Yt(tt,Ce(g))),H=le(tt.length,H),P[B]=!C&&(g||O>=120&&tt.length>=120)?new Sn(B&&tt):d}tt=h[0];var rt=-1,ht=P[0];t:for(;++rt<O&&Z.length<H;){var gt=tt[rt],yt=g?g(gt):gt;if(gt=C||gt!==0?gt:0,!(ht?ir(ht,yt):T(Z,yt,C))){for(B=R;--B;){var St=P[B];if(!(St?ir(St,yt):T(h[B],yt,C)))continue t}ht&&ht.push(yt),Z.push(gt)}}return Z}function bc(h,g,C,T){return Ge(h,function(O,R,B){g(T,C(O),R,B)}),T}function fr(h,g,C){g=gn(g,h),h=ul(h,g);var T=h==null?h:h[qe($e(g))];return T==null?d:Ae(T,h,C)}function Ao(h){return jt(h)&&ce(h)==ne}function vc(h){return jt(h)&&ce(h)==S}function yc(h){return jt(h)&&ce(h)==Pe}function dr(h,g,C,T,O){return h===g?!0:h==null||g==null||!jt(h)&&!jt(g)?h!==h&&g!==g:_c(h,g,C,T,dr,O)}function _c(h,g,C,T,O,R){var B=Ct(h),P=Ct(g),H=B?ue:ae(h),Z=P?ue:ae(g);H=H==ne?we:H,Z=Z==ne?we:Z;var tt=H==we,rt=Z==we,ht=H==Z;if(ht&&bn(h)){if(!bn(g))return!1;B=!0,tt=!1}if(ht&&!tt)return R||(R=new Ue),B||Zn(h)?nl(h,g,C,T,O,R):qc(h,g,H,C,T,O,R);if(!(C&ot)){var gt=tt&&$t.call(h,"__wrapped__"),yt=rt&&$t.call(g,"__wrapped__");if(gt||yt){var St=gt?h.value():h,_t=yt?g.value():g;return R||(R=new Ue),O(St,_t,C,T,R)}}return ht?(R||(R=new Ue),jc(h,g,C,T,O,R)):!1}function xc(h){return jt(h)&&ae(h)==se}function Ri(h,g,C,T){var O=C.length,R=O,B=!T;if(h==null)return!R;for(h=zt(h);O--;){var P=C[O];if(B&&P[2]?P[1]!==h[P[0]]:!(P[0]in h))return!1}for(;++O<R;){P=C[O];var H=P[0],Z=h[H],tt=P[1];if(B&&P[2]){if(Z===d&&!(H in h))return!1}else{var rt=new Ue;if(T)var ht=T(Z,tt,H,h,g,rt);if(!(ht===d?dr(tt,Z,ot|lt,T,rt):ht))return!1}}return!0}function Co(h){if(!qt(h)||rh(h))return!1;var g=sn(h)?xu:ha;return g.test(On(h))}function wc(h){return jt(h)&&ce(h)==ge}function Ac(h){return jt(h)&&ae(h)==oe}function Cc(h){return jt(h)&&ii(h.length)&&!!Vt[ce(h)]}function Eo(h){return typeof h=="function"?h:h==null?ye:typeof h=="object"?Ct(h)?To(h[0],h[1]):ko(h):ql(h)}function Fi(h){if(!mr(h))return ku(h);var g=[];for(var C in zt(h))$t.call(h,C)&&C!="constructor"&&g.push(C);return g}function Ec(h){if(!qt(h))return lh(h);var g=mr(h),C=[];for(var T in h)T=="constructor"&&(g||!$t.call(h,T))||C.push(T);return C}function $i(h,g){return h<g}function So(h,g){var C=-1,T=be(h)?j(h.length):[];return dn(h,function(O,R,B){T[++C]=g(O,R,B)}),T}function ko(h){var g=Qi(h);return g.length==1&&g[0][2]?ll(g[0][0],g[0][1]):function(C){return C===h||Ri(C,h,g)}}function To(h,g){return ts(h)&&ol(g)?ll(qe(h),g):function(C){var T=hs(C,h);return T===d&&T===g?fs(C,h):dr(g,T,ot|lt)}}function Vr(h,g,C,T,O){h!==g&&Ni(g,function(R,B){if(O||(O=new Ue),qt(R))Sc(h,g,B,C,Vr,T,O);else{var P=T?T(ns(h,B),R,B+"",h,g,O):d;P===d&&(P=R),Ii(h,B,P)}},ve)}function Sc(h,g,C,T,O,R,B){var P=ns(h,C),H=ns(g,C),Z=B.get(H);if(Z){Ii(h,C,Z);return}var tt=R?R(P,H,C+"",h,g,B):d,rt=tt===d;if(rt){var ht=Ct(H),gt=!ht&&bn(H),yt=!ht&&!gt&&Zn(H);tt=H,ht||gt||yt?Ct(P)?tt=P:Kt(P)?tt=me(P):gt?(rt=!1,tt=zo(H,!0)):yt?(rt=!1,tt=Uo(H,!0)):tt=[]:vr(H)||Nn(H)?(tt=P,Nn(P)?tt=$l(P):(!qt(P)||sn(P))&&(tt=sl(H))):rt=!1}rt&&(B.set(H,tt),O(tt,H,T,R,B),B.delete(H)),Ii(h,C,tt)}function Io(h,g){var C=h.length;if(C)return g+=g<0?C:0,rn(g,C)?h[g]:d}function Oo(h,g,C){g.length?g=Yt(g,function(R){return Ct(R)?function(B){return Tn(B,R.length===1?R[0]:R)}:R}):g=[ye];var T=-1;g=Yt(g,Ce(vt()));var O=So(h,function(R,B,P){var H=Yt(g,function(Z){return Z(R)});return{criteria:H,index:++T,value:R}});return Za(O,function(R,B){return Pc(R,B,C)})}function kc(h,g){return No(h,g,function(C,T){return fs(h,T)})}function No(h,g,C){for(var T=-1,O=g.length,R={};++T<O;){var B=g[T],P=Tn(h,B);C(P,B)&&pr(R,gn(B,h),P)}return R}function Tc(h){return function(g){return Tn(g,h)}}function Bi(h,g,C,T){var O=T?Qa:Vn,R=-1,B=g.length,P=h;for(h===g&&(g=me(g)),C&&(P=Yt(h,Ce(C)));++R<B;)for(var H=0,Z=g[R],tt=C?C(Z):Z;(H=O(P,tt,H,T))>-1;)P!==h&&Lr.call(P,H,1),Lr.call(h,H,1);return h}function Lo(h,g){for(var C=h?g.length:0,T=C-1;C--;){var O=g[C];if(C==T||O!==R){var R=O;rn(O)?Lr.call(h,O,1):Vi(h,O)}}return h}function Pi(h,g){return h+Rr(ho()*(g-h+1))}function Ic(h,g,C,T){for(var O=-1,R=Qt(Dr((g-h)/(C||1)),0),B=j(R);R--;)B[T?R:++O]=h,h+=C;return B}function zi(h,g){var C="";if(!h||g<1||g>Ie)return C;do g%2&&(C+=h),g=Rr(g/2),g&&(h+=h);while(g);return C}function kt(h,g){return rs(al(h,g,ye),h+"")}function Oc(h){return go(tr(h))}function Nc(h,g){var C=tr(h);return Qr(C,kn(g,0,C.length))}function pr(h,g,C,T){if(!qt(h))return h;g=gn(g,h);for(var O=-1,R=g.length,B=R-1,P=h;P!=null&&++O<R;){var H=qe(g[O]),Z=C;if(H==="__proto__"||H==="constructor"||H==="prototype")return h;if(O!=B){var tt=P[H];Z=T?T(tt,H,P):d,Z===d&&(Z=qt(tt)?tt:rn(g[O+1])?[]:{})}cr(P,H,Z),P=P[H]}return h}var Mo=Fr?function(h,g){return Fr.set(h,g),h}:ye,Lc=Mr?function(h,g){return Mr(h,"toString",{configurable:!0,enumerable:!1,value:ps(g),writable:!0})}:ye;function Mc(h){return Qr(tr(h))}function Fe(h,g,C){var T=-1,O=h.length;g<0&&(g=-g>O?0:O+g),C=C>O?O:C,C<0&&(C+=O),O=g>C?0:C-g>>>0,g>>>=0;for(var R=j(O);++T<O;)R[T]=h[T+g];return R}function Dc(h,g){var C;return dn(h,function(T,O,R){return C=g(T,O,R),!C}),!!C}function Hr(h,g,C){var T=0,O=h==null?T:h.length;if(typeof g=="number"&&g===g&&O<=pe){for(;T<O;){var R=T+O>>>1,B=h[R];B!==null&&!Se(B)&&(C?B<=g:B<g)?T=R+1:O=R}return O}return Ui(h,g,ye,C)}function Ui(h,g,C,T){var O=0,R=h==null?0:h.length;if(R===0)return 0;g=C(g);for(var B=g!==g,P=g===null,H=Se(g),Z=g===d;O<R;){var tt=Rr((O+R)/2),rt=C(h[tt]),ht=rt!==d,gt=rt===null,yt=rt===rt,St=Se(rt);if(B)var _t=T||yt;else Z?_t=yt&&(T||ht):P?_t=yt&&ht&&(T||!gt):H?_t=yt&&ht&&!gt&&(T||!St):gt||St?_t=!1:_t=T?rt<=g:rt<g;_t?O=tt+1:R=tt}return le(R,_n)}function Do(h,g){for(var C=-1,T=h.length,O=0,R=[];++C<T;){var B=h[C],P=g?g(B):B;if(!C||!Ve(P,H)){var H=P;R[O++]=B===0?0:B}}return R}function Ro(h){return typeof h=="number"?h:Se(h)?mt:+h}function Ee(h){if(typeof h=="string")return h;if(Ct(h))return Yt(h,Ee)+"";if(Se(h))return fo?fo.call(h):"";var g=h+"";return g=="0"&&1/h==-Lt?"-0":g}function pn(h,g,C){var T=-1,O=wr,R=h.length,B=!0,P=[],H=P;if(C)B=!1,O=mi;else if(R>=_){var Z=g?null:Gc(h);if(Z)return Cr(Z);B=!1,O=ir,H=new Sn}else H=g?[]:P;t:for(;++T<R;){var tt=h[T],rt=g?g(tt):tt;if(tt=C||tt!==0?tt:0,B&&rt===rt){for(var ht=H.length;ht--;)if(H[ht]===rt)continue t;g&&H.push(rt),P.push(tt)}else O(H,rt,C)||(H!==P&&H.push(rt),P.push(tt))}return P}function Vi(h,g){return g=gn(g,h),h=ul(h,g),h==null||delete h[qe($e(g))]}function Fo(h,g,C,T){return pr(h,g,C(Tn(h,g)),T)}function Wr(h,g,C,T){for(var O=h.length,R=T?O:-1;(T?R--:++R<O)&&g(h[R],R,h););return C?Fe(h,T?0:R,T?R+1:O):Fe(h,T?R+1:0,T?O:R)}function $o(h,g){var C=h;return C instanceof Ot&&(C=C.value()),bi(g,function(T,O){return O.func.apply(O.thisArg,cn([T],O.args))},C)}function Hi(h,g,C){var T=h.length;if(T<2)return T?pn(h[0]):[];for(var O=-1,R=j(T);++O<T;)for(var B=h[O],P=-1;++P<T;)P!=O&&(R[O]=hr(R[O]||B,h[P],g,C));return pn(ie(R,1),g,C)}function Bo(h,g,C){for(var T=-1,O=h.length,R=g.length,B={};++T<O;){var P=T<R?g[T]:d;C(B,h[T],P)}return B}function Wi(h){return Kt(h)?h:[]}function Gi(h){return typeof h=="function"?h:ye}function gn(h,g){return Ct(h)?h:ts(h,g)?[h]:dl(Rt(h))}var Rc=kt;function mn(h,g,C){var T=h.length;return C=C===d?T:C,!g&&C>=T?h:Fe(h,g,C)}var Po=wu||function(h){return re.clearTimeout(h)};function zo(h,g){if(g)return h.slice();var C=h.length,T=oo?oo(C):new h.constructor(C);return h.copy(T),T}function Yi(h){var g=new h.constructor(h.byteLength);return new Or(g).set(new Or(h)),g}function Fc(h,g){var C=g?Yi(h.buffer):h.buffer;return new h.constructor(C,h.byteOffset,h.byteLength)}function $c(h){var g=new h.constructor(h.source,xs.exec(h));return g.lastIndex=h.lastIndex,g}function Bc(h){return ur?zt(ur.call(h)):{}}function Uo(h,g){var C=g?Yi(h.buffer):h.buffer;return new h.constructor(C,h.byteOffset,h.length)}function Vo(h,g){if(h!==g){var C=h!==d,T=h===null,O=h===h,R=Se(h),B=g!==d,P=g===null,H=g===g,Z=Se(g);if(!P&&!Z&&!R&&h>g||R&&B&&H&&!P&&!Z||T&&B&&H||!C&&H||!O)return 1;if(!T&&!R&&!Z&&h<g||Z&&C&&O&&!T&&!R||P&&C&&O||!B&&O||!H)return-1}return 0}function Pc(h,g,C){for(var T=-1,O=h.criteria,R=g.criteria,B=O.length,P=C.length;++T<B;){var H=Vo(O[T],R[T]);if(H){if(T>=P)return H;var Z=C[T];return H*(Z=="desc"?-1:1)}}return h.index-g.index}function Ho(h,g,C,T){for(var O=-1,R=h.length,B=C.length,P=-1,H=g.length,Z=Qt(R-B,0),tt=j(H+Z),rt=!T;++P<H;)tt[P]=g[P];for(;++O<B;)(rt||O<R)&&(tt[C[O]]=h[O]);for(;Z--;)tt[P++]=h[O++];return tt}function Wo(h,g,C,T){for(var O=-1,R=h.length,B=-1,P=C.length,H=-1,Z=g.length,tt=Qt(R-P,0),rt=j(tt+Z),ht=!T;++O<tt;)rt[O]=h[O];for(var gt=O;++H<Z;)rt[gt+H]=g[H];for(;++B<P;)(ht||O<R)&&(rt[gt+C[B]]=h[O++]);return rt}function me(h,g){var C=-1,T=h.length;for(g||(g=j(T));++C<T;)g[C]=h[C];return g}function Ye(h,g,C,T){var O=!C;C||(C={});for(var R=-1,B=g.length;++R<B;){var P=g[R],H=T?T(C[P],h[P],P,C,h):d;H===d&&(H=h[P]),O?tn(C,P,H):cr(C,P,H)}return C}function zc(h,g){return Ye(h,Zi(h),g)}function Uc(h,g){return Ye(h,rl(h),g)}function Gr(h,g){return function(C,T){var O=Ct(C)?Ya:uc,R=g?g():{};return O(C,h,vt(T,2),R)}}function Jn(h){return kt(function(g,C){var T=-1,O=C.length,R=O>1?C[O-1]:d,B=O>2?C[2]:d;for(R=h.length>3&&typeof R=="function"?(O--,R):d,B&&he(C[0],C[1],B)&&(R=O<3?d:R,O=1),g=zt(g);++T<O;){var P=C[T];P&&h(g,P,T,R)}return g})}function Go(h,g){return function(C,T){if(C==null)return C;if(!be(C))return h(C,T);for(var O=C.length,R=g?O:-1,B=zt(C);(g?R--:++R<O)&&T(B[R],R,B)!==!1;);return C}}function Yo(h){return function(g,C,T){for(var O=-1,R=zt(g),B=T(g),P=B.length;P--;){var H=B[h?P:++O];if(C(R[H],H,R)===!1)break}return g}}function Vc(h,g,C){var T=g&bt,O=gr(h);function R(){var B=this&&this!==re&&this instanceof R?O:h;return B.apply(T?C:this,arguments)}return R}function qo(h){return function(g){g=Rt(g);var C=Hn(g)?ze(g):d,T=C?C[0]:g.charAt(0),O=C?mn(C,1).join(""):g.slice(1);return T[h]()+O}}function Xn(h){return function(g){return bi(Gl(Wl(g).replace(La,"")),h,"")}}function gr(h){return function(){var g=arguments;switch(g.length){case 0:return new h;case 1:return new h(g[0]);case 2:return new h(g[0],g[1]);case 3:return new h(g[0],g[1],g[2]);case 4:return new h(g[0],g[1],g[2],g[3]);case 5:return new h(g[0],g[1],g[2],g[3],g[4]);case 6:return new h(g[0],g[1],g[2],g[3],g[4],g[5]);case 7:return new h(g[0],g[1],g[2],g[3],g[4],g[5],g[6])}var C=Kn(h.prototype),T=h.apply(C,g);return qt(T)?T:C}}function Hc(h,g,C){var T=gr(h);function O(){for(var R=arguments.length,B=j(R),P=R,H=Qn(O);P--;)B[P]=arguments[P];var Z=R<3&&B[0]!==H&&B[R-1]!==H?[]:hn(B,H);if(R-=Z.length,R<C)return Qo(h,g,Yr,O.placeholder,d,B,Z,d,d,C-R);var tt=this&&this!==re&&this instanceof O?T:h;return Ae(tt,this,B)}return O}function jo(h){return function(g,C,T){var O=zt(g);if(!be(g)){var R=vt(C,3);g=te(g),C=function(P){return R(O[P],P,O)}}var B=h(g,C,T);return B>-1?O[R?g[B]:B]:d}}function Ko(h){return nn(function(g){var C=g.length,T=C,O=De.prototype.thru;for(h&&g.reverse();T--;){var R=g[T];if(typeof R!="function")throw new Me(I);if(O&&!B&&Jr(R)=="wrapper")var B=new De([],!0)}for(T=B?T:C;++T<C;){R=g[T];var P=Jr(R),H=P=="wrapper"?Xi(R):d;H&&es(H[0])&&H[1]==(Wt|Dt|Ft|Pt)&&!H[4].length&&H[9]==1?B=B[Jr(H[0])].apply(B,H[3]):B=R.length==1&&es(R)?B[P]():B.thru(R)}return function(){var Z=arguments,tt=Z[0];if(B&&Z.length==1&&Ct(tt))return B.plant(tt).value();for(var rt=0,ht=C?g[rt].apply(this,Z):tt;++rt<C;)ht=g[rt].call(this,ht);return ht}})}function Yr(h,g,C,T,O,R,B,P,H,Z){var tt=g&Wt,rt=g&bt,ht=g&ft,gt=g&(Dt|Ht),yt=g&de,St=ht?d:gr(h);function _t(){for(var It=arguments.length,Nt=j(It),ke=It;ke--;)Nt[ke]=arguments[ke];if(gt)var fe=Qn(_t),Te=eu(Nt,fe);if(T&&(Nt=Ho(Nt,T,O,gt)),R&&(Nt=Wo(Nt,R,B,gt)),It-=Te,gt&&It<Z){var Jt=hn(Nt,fe);return Qo(h,g,Yr,_t.placeholder,C,Nt,Jt,P,H,Z-It)}var He=rt?C:this,an=ht?He[h]:h;return It=Nt.length,P?Nt=uh(Nt,P):yt&&It>1&&Nt.reverse(),tt&&H<It&&(Nt.length=H),this&&this!==re&&this instanceof _t&&(an=St||gr(an)),an.apply(He,Nt)}return _t}function Jo(h,g){return function(C,T){return bc(C,h,g(T),{})}}function qr(h,g){return function(C,T){var O;if(C===d&&T===d)return g;if(C!==d&&(O=C),T!==d){if(O===d)return T;typeof C=="string"||typeof T=="string"?(C=Ee(C),T=Ee(T)):(C=Ro(C),T=Ro(T)),O=h(C,T)}return O}}function qi(h){return nn(function(g){return g=Yt(g,Ce(vt())),kt(function(C){var T=this;return h(g,function(O){return Ae(O,T,C)})})})}function jr(h,g){g=g===d?" ":Ee(g);var C=g.length;if(C<2)return C?zi(g,h):g;var T=zi(g,Dr(h/Wn(g)));return Hn(g)?mn(ze(T),0,h).join(""):T.slice(0,h)}function Wc(h,g,C,T){var O=g&bt,R=gr(h);function B(){for(var P=-1,H=arguments.length,Z=-1,tt=T.length,rt=j(tt+H),ht=this&&this!==re&&this instanceof B?R:h;++Z<tt;)rt[Z]=T[Z];for(;H--;)rt[Z++]=arguments[++P];return Ae(ht,O?C:this,rt)}return B}function Xo(h){return function(g,C,T){return T&&typeof T!="number"&&he(g,C,T)&&(C=T=d),g=ln(g),C===d?(C=g,g=0):C=ln(C),T=T===d?g<C?1:-1:ln(T),Ic(g,C,T,h)}}function Kr(h){return function(g,C){return typeof g=="string"&&typeof C=="string"||(g=Be(g),C=Be(C)),h(g,C)}}function Qo(h,g,C,T,O,R,B,P,H,Z){var tt=g&Dt,rt=tt?B:d,ht=tt?d:B,gt=tt?R:d,yt=tt?d:R;g|=tt?Ft:Bt,g&=~(tt?Bt:Ft),g&Tt||(g&=~(bt|ft));var St=[h,g,O,gt,rt,yt,ht,P,H,Z],_t=C.apply(d,St);return es(h)&&cl(_t,St),_t.placeholder=T,hl(_t,h,g)}function ji(h){var g=Xt[h];return function(C,T){if(C=Be(C),T=T==null?0:le(Et(T),292),T&&co(C)){var O=(Rt(C)+"e").split("e"),R=g(O[0]+"e"+(+O[1]+T));return O=(Rt(R)+"e").split("e"),+(O[0]+"e"+(+O[1]-T))}return g(C)}}var Gc=qn&&1/Cr(new qn([,-0]))[1]==Lt?function(h){return new qn(h)}:bs;function Zo(h){return function(g){var C=ae(g);return C==se?Ci(g):C==oe?au(g):tu(g,h(g))}}function en(h,g,C,T,O,R,B,P){var H=g&ft;if(!H&&typeof h!="function")throw new Me(I);var Z=T?T.length:0;if(Z||(g&=~(Ft|Bt),T=O=d),B=B===d?B:Qt(Et(B),0),P=P===d?P:Et(P),Z-=O?O.length:0,g&Bt){var tt=T,rt=O;T=O=d}var ht=H?d:Xi(h),gt=[h,g,C,T,O,tt,rt,R,B,P];if(ht&&oh(gt,ht),h=gt[0],g=gt[1],C=gt[2],T=gt[3],O=gt[4],P=gt[9]=gt[9]===d?H?0:h.length:Qt(gt[9]-Z,0),!P&&g&(Dt|Ht)&&(g&=~(Dt|Ht)),!g||g==bt)var yt=Vc(h,g,C);else g==Dt||g==Ht?yt=Hc(h,g,P):(g==Ft||g==(bt|Ft))&&!O.length?yt=Wc(h,g,C,T):yt=Yr.apply(d,gt);var St=ht?Mo:cl;return hl(St(yt,gt),h,g)}function tl(h,g,C,T){return h===d||Ve(h,Yn[C])&&!$t.call(T,C)?g:h}function el(h,g,C,T,O,R){return qt(h)&&qt(g)&&(R.set(g,h),Vr(h,g,d,el,R),R.delete(g)),h}function Yc(h){return vr(h)?d:h}function nl(h,g,C,T,O,R){var B=C&ot,P=h.length,H=g.length;if(P!=H&&!(B&&H>P))return!1;var Z=R.get(h),tt=R.get(g);if(Z&&tt)return Z==g&&tt==h;var rt=-1,ht=!0,gt=C&lt?new Sn:d;for(R.set(h,g),R.set(g,h);++rt<P;){var yt=h[rt],St=g[rt];if(T)var _t=B?T(St,yt,rt,g,h,R):T(yt,St,rt,h,g,R);if(_t!==d){if(_t)continue;ht=!1;break}if(gt){if(!vi(g,function(It,Nt){if(!ir(gt,Nt)&&(yt===It||O(yt,It,C,T,R)))return gt.push(Nt)})){ht=!1;break}}else if(!(yt===St||O(yt,St,C,T,R))){ht=!1;break}}return R.delete(h),R.delete(g),ht}function qc(h,g,C,T,O,R,B){switch(C){case Y:if(h.byteLength!=g.byteLength||h.byteOffset!=g.byteOffset)return!1;h=h.buffer,g=g.buffer;case S:return!(h.byteLength!=g.byteLength||!R(new Or(h),new Or(g)));case _e:case Pe:case xe:return Ve(+h,+g);case je:return h.name==g.name&&h.message==g.message;case ge:case We:return h==g+"";case se:var P=Ci;case oe:var H=T&ot;if(P||(P=Cr),h.size!=g.size&&!H)return!1;var Z=B.get(h);if(Z)return Z==g;T|=lt,B.set(h,g);var tt=nl(P(h),P(g),T,O,R,B);return B.delete(h),tt;case Je:if(ur)return ur.call(h)==ur.call(g)}return!1}function jc(h,g,C,T,O,R){var B=C&ot,P=Ki(h),H=P.length,Z=Ki(g),tt=Z.length;if(H!=tt&&!B)return!1;for(var rt=H;rt--;){var ht=P[rt];if(!(B?ht in g:$t.call(g,ht)))return!1}var gt=R.get(h),yt=R.get(g);if(gt&&yt)return gt==g&&yt==h;var St=!0;R.set(h,g),R.set(g,h);for(var _t=B;++rt<H;){ht=P[rt];var It=h[ht],Nt=g[ht];if(T)var ke=B?T(Nt,It,ht,g,h,R):T(It,Nt,ht,h,g,R);if(!(ke===d?It===Nt||O(It,Nt,C,T,R):ke)){St=!1;break}_t||(_t=ht=="constructor")}if(St&&!_t){var fe=h.constructor,Te=g.constructor;fe!=Te&&"constructor"in h&&"constructor"in g&&!(typeof fe=="function"&&fe instanceof fe&&typeof Te=="function"&&Te instanceof Te)&&(St=!1)}return R.delete(h),R.delete(g),St}function nn(h){return rs(al(h,d,bl),h+"")}function Ki(h){return wo(h,te,Zi)}function Ji(h){return wo(h,ve,rl)}var Xi=Fr?function(h){return Fr.get(h)}:bs;function Jr(h){for(var g=h.name+"",C=jn[g],T=$t.call(jn,g)?C.length:0;T--;){var O=C[T],R=O.func;if(R==null||R==h)return O.name}return g}function Qn(h){var g=$t.call(M,"placeholder")?M:h;return g.placeholder}function vt(){var h=M.iteratee||gs;return h=h===gs?Eo:h,arguments.length?h(arguments[0],arguments[1]):h}function Xr(h,g){var C=h.__data__;return nh(g)?C[typeof g=="string"?"string":"hash"]:C.map}function Qi(h){for(var g=te(h),C=g.length;C--;){var T=g[C],O=h[T];g[C]=[T,O,ol(O)]}return g}function In(h,g){var C=su(h,g);return Co(C)?C:d}function Kc(h){var g=$t.call(h,Cn),C=h[Cn];try{h[Cn]=d;var T=!0}catch{}var O=Tr.call(h);return T&&(g?h[Cn]=C:delete h[Cn]),O}var Zi=Si?function(h){return h==null?[]:(h=zt(h),un(Si(h),function(g){return ao.call(h,g)}))}:vs,rl=Si?function(h){for(var g=[];h;)cn(g,Zi(h)),h=Nr(h);return g}:vs,ae=ce;(ki&&ae(new ki(new ArrayBuffer(1)))!=Y||or&&ae(new or)!=se||Ti&&ae(Ti.resolve())!=wn||qn&&ae(new qn)!=oe||lr&&ae(new lr)!=Xe)&&(ae=function(h){var g=ce(h),C=g==we?h.constructor:d,T=C?On(C):"";if(T)switch(T){case Nu:return Y;case Lu:return se;case Mu:return wn;case Du:return oe;case Ru:return Xe}return g});function Jc(h,g,C){for(var T=-1,O=C.length;++T<O;){var R=C[T],B=R.size;switch(R.type){case"drop":h+=B;break;case"dropRight":g-=B;break;case"take":g=le(g,h+B);break;case"takeRight":h=Qt(h,g-B);break}}return{start:h,end:g}}function Xc(h){var g=h.match(ra);return g?g[1].split(ia):[]}function il(h,g,C){g=gn(g,h);for(var T=-1,O=g.length,R=!1;++T<O;){var B=qe(g[T]);if(!(R=h!=null&&C(h,B)))break;h=h[B]}return R||++T!=O?R:(O=h==null?0:h.length,!!O&&ii(O)&&rn(B,O)&&(Ct(h)||Nn(h)))}function Qc(h){var g=h.length,C=new h.constructor(g);return g&&typeof h[0]=="string"&&$t.call(h,"index")&&(C.index=h.index,C.input=h.input),C}function sl(h){return typeof h.constructor=="function"&&!mr(h)?Kn(Nr(h)):{}}function Zc(h,g,C){var T=h.constructor;switch(g){case S:return Yi(h);case _e:case Pe:return new T(+h);case Y:return Fc(h,C);case Q:case ut:case et:case ct:case L:case q:case K:case st:case it:return Uo(h,C);case se:return new T;case xe:case We:return new T(h);case ge:return $c(h);case oe:return new T;case Je:return Bc(h)}}function th(h,g){var C=g.length;if(!C)return h;var T=C-1;return g[T]=(C>1?"& ":"")+g[T],g=g.join(C>2?", ":" "),h.replace(na,`{
/* [wrapped with `+g+`] */
`)}function eh(h){return Ct(h)||Nn(h)||!!(uo&&h&&h[uo])}function rn(h,g){var C=typeof h;return g=g??Ie,!!g&&(C=="number"||C!="symbol"&&da.test(h))&&h>-1&&h%1==0&&h<g}function he(h,g,C){if(!qt(C))return!1;var T=typeof g;return(T=="number"?be(C)&&rn(g,C.length):T=="string"&&g in C)?Ve(C[g],h):!1}function ts(h,g){if(Ct(h))return!1;var C=typeof h;return C=="number"||C=="symbol"||C=="boolean"||h==null||Se(h)?!0:Ql.test(h)||!Xl.test(h)||g!=null&&h in zt(g)}function nh(h){var g=typeof h;return g=="string"||g=="number"||g=="symbol"||g=="boolean"?h!=="__proto__":h===null}function es(h){var g=Jr(h),C=M[g];if(typeof C!="function"||!(g in Ot.prototype))return!1;if(h===C)return!0;var T=Xi(C);return!!T&&h===T[0]}function rh(h){return!!so&&so in h}var ih=Sr?sn:ys;function mr(h){var g=h&&h.constructor,C=typeof g=="function"&&g.prototype||Yn;return h===C}function ol(h){return h===h&&!qt(h)}function ll(h,g){return function(C){return C==null?!1:C[h]===g&&(g!==d||h in zt(C))}}function sh(h){var g=ni(h,function(T){return C.size===F&&C.clear(),T}),C=g.cache;return g}function oh(h,g){var C=h[1],T=g[1],O=C|T,R=O<(bt|ft|Wt),B=T==Wt&&C==Dt||T==Wt&&C==Pt&&h[7].length<=g[8]||T==(Wt|Pt)&&g[7].length<=g[8]&&C==Dt;if(!(R||B))return h;T&bt&&(h[2]=g[2],O|=C&bt?0:Tt);var P=g[3];if(P){var H=h[3];h[3]=H?Ho(H,P,g[4]):P,h[4]=H?hn(h[3],z):g[4]}return P=g[5],P&&(H=h[5],h[5]=H?Wo(H,P,g[6]):P,h[6]=H?hn(h[5],z):g[6]),P=g[7],P&&(h[7]=P),T&Wt&&(h[8]=h[8]==null?g[8]:le(h[8],g[8])),h[9]==null&&(h[9]=g[9]),h[0]=g[0],h[1]=O,h}function lh(h){var g=[];if(h!=null)for(var C in zt(h))g.push(C);return g}function ah(h){return Tr.call(h)}function al(h,g,C){return g=Qt(g===d?h.length-1:g,0),function(){for(var T=arguments,O=-1,R=Qt(T.length-g,0),B=j(R);++O<R;)B[O]=T[g+O];O=-1;for(var P=j(g+1);++O<g;)P[O]=T[O];return P[g]=C(B),Ae(h,this,P)}}function ul(h,g){return g.length<2?h:Tn(h,Fe(g,0,-1))}function uh(h,g){for(var C=h.length,T=le(g.length,C),O=me(h);T--;){var R=g[T];h[T]=rn(R,C)?O[R]:d}return h}function ns(h,g){if(!(g==="constructor"&&typeof h[g]=="function")&&g!="__proto__")return h[g]}var cl=fl(Mo),br=Cu||function(h,g){return re.setTimeout(h,g)},rs=fl(Lc);function hl(h,g,C){var T=g+"";return rs(h,th(T,ch(Xc(T),C)))}function fl(h){var g=0,C=0;return function(){var T=Tu(),O=Dn-(T-C);if(C=T,O>0){if(++g>=Mn)return arguments[0]}else g=0;return h.apply(d,arguments)}}function Qr(h,g){var C=-1,T=h.length,O=T-1;for(g=g===d?T:g;++C<g;){var R=Pi(C,O),B=h[R];h[R]=h[C],h[C]=B}return h.length=g,h}var dl=sh(function(h){var g=[];return h.charCodeAt(0)===46&&g.push(""),h.replace(Zl,function(C,T,O,R){g.push(O?R.replace(la,"$1"):T||C)}),g});function qe(h){if(typeof h=="string"||Se(h))return h;var g=h+"";return g=="0"&&1/h==-Lt?"-0":g}function On(h){if(h!=null){try{return kr.call(h)}catch{}try{return h+""}catch{}}return""}function ch(h,g){return Le($n,function(C){var T="_."+C[0];g&C[1]&&!wr(h,T)&&h.push(T)}),h.sort()}function pl(h){if(h instanceof Ot)return h.clone();var g=new De(h.__wrapped__,h.__chain__);return g.__actions__=me(h.__actions__),g.__index__=h.__index__,g.__values__=h.__values__,g}function hh(h,g,C){(C?he(h,g,C):g===d)?g=1:g=Qt(Et(g),0);var T=h==null?0:h.length;if(!T||g<1)return[];for(var O=0,R=0,B=j(Dr(T/g));O<T;)B[R++]=Fe(h,O,O+=g);return B}function fh(h){for(var g=-1,C=h==null?0:h.length,T=0,O=[];++g<C;){var R=h[g];R&&(O[T++]=R)}return O}function dh(){var h=arguments.length;if(!h)return[];for(var g=j(h-1),C=arguments[0],T=h;T--;)g[T-1]=arguments[T];return cn(Ct(C)?me(C):[C],ie(g,1))}var ph=kt(function(h,g){return Kt(h)?hr(h,ie(g,1,Kt,!0)):[]}),gh=kt(function(h,g){var C=$e(g);return Kt(C)&&(C=d),Kt(h)?hr(h,ie(g,1,Kt,!0),vt(C,2)):[]}),mh=kt(function(h,g){var C=$e(g);return Kt(C)&&(C=d),Kt(h)?hr(h,ie(g,1,Kt,!0),d,C):[]});function bh(h,g,C){var T=h==null?0:h.length;return T?(g=C||g===d?1:Et(g),Fe(h,g<0?0:g,T)):[]}function vh(h,g,C){var T=h==null?0:h.length;return T?(g=C||g===d?1:Et(g),g=T-g,Fe(h,0,g<0?0:g)):[]}function yh(h,g){return h&&h.length?Wr(h,vt(g,3),!0,!0):[]}function _h(h,g){return h&&h.length?Wr(h,vt(g,3),!0):[]}function xh(h,g,C,T){var O=h==null?0:h.length;return O?(C&&typeof C!="number"&&he(h,g,C)&&(C=0,T=O),dc(h,g,C,T)):[]}function gl(h,g,C){var T=h==null?0:h.length;if(!T)return-1;var O=C==null?0:Et(C);return O<0&&(O=Qt(T+O,0)),Ar(h,vt(g,3),O)}function ml(h,g,C){var T=h==null?0:h.length;if(!T)return-1;var O=T-1;return C!==d&&(O=Et(C),O=C<0?Qt(T+O,0):le(O,T-1)),Ar(h,vt(g,3),O,!0)}function bl(h){var g=h==null?0:h.length;return g?ie(h,1):[]}function wh(h){var g=h==null?0:h.length;return g?ie(h,Lt):[]}function Ah(h,g){var C=h==null?0:h.length;return C?(g=g===d?1:Et(g),ie(h,g)):[]}function Ch(h){for(var g=-1,C=h==null?0:h.length,T={};++g<C;){var O=h[g];T[O[0]]=O[1]}return T}function vl(h){return h&&h.length?h[0]:d}function Eh(h,g,C){var T=h==null?0:h.length;if(!T)return-1;var O=C==null?0:Et(C);return O<0&&(O=Qt(T+O,0)),Vn(h,g,O)}function Sh(h){var g=h==null?0:h.length;return g?Fe(h,0,-1):[]}var kh=kt(function(h){var g=Yt(h,Wi);return g.length&&g[0]===h[0]?Di(g):[]}),Th=kt(function(h){var g=$e(h),C=Yt(h,Wi);return g===$e(C)?g=d:C.pop(),C.length&&C[0]===h[0]?Di(C,vt(g,2)):[]}),Ih=kt(function(h){var g=$e(h),C=Yt(h,Wi);return g=typeof g=="function"?g:d,g&&C.pop(),C.length&&C[0]===h[0]?Di(C,d,g):[]});function Oh(h,g){return h==null?"":Su.call(h,g)}function $e(h){var g=h==null?0:h.length;return g?h[g-1]:d}function Nh(h,g,C){var T=h==null?0:h.length;if(!T)return-1;var O=T;return C!==d&&(O=Et(C),O=O<0?Qt(T+O,0):le(O,T-1)),g===g?cu(h,g,O):Ar(h,Js,O,!0)}function Lh(h,g){return h&&h.length?Io(h,Et(g)):d}var Mh=kt(yl);function yl(h,g){return h&&h.length&&g&&g.length?Bi(h,g):h}function Dh(h,g,C){return h&&h.length&&g&&g.length?Bi(h,g,vt(C,2)):h}function Rh(h,g,C){return h&&h.length&&g&&g.length?Bi(h,g,d,C):h}var Fh=nn(function(h,g){var C=h==null?0:h.length,T=Oi(h,g);return Lo(h,Yt(g,function(O){return rn(O,C)?+O:O}).sort(Vo)),T});function $h(h,g){var C=[];if(!(h&&h.length))return C;var T=-1,O=[],R=h.length;for(g=vt(g,3);++T<R;){var B=h[T];g(B,T,h)&&(C.push(B),O.push(T))}return Lo(h,O),C}function ss(h){return h==null?h:Ou.call(h)}function Bh(h,g,C){var T=h==null?0:h.length;return T?(C&&typeof C!="number"&&he(h,g,C)?(g=0,C=T):(g=g==null?0:Et(g),C=C===d?T:Et(C)),Fe(h,g,C)):[]}function Ph(h,g){return Hr(h,g)}function zh(h,g,C){return Ui(h,g,vt(C,2))}function Uh(h,g){var C=h==null?0:h.length;if(C){var T=Hr(h,g);if(T<C&&Ve(h[T],g))return T}return-1}function Vh(h,g){return Hr(h,g,!0)}function Hh(h,g,C){return Ui(h,g,vt(C,2),!0)}function Wh(h,g){var C=h==null?0:h.length;if(C){var T=Hr(h,g,!0)-1;if(Ve(h[T],g))return T}return-1}function Gh(h){return h&&h.length?Do(h):[]}function Yh(h,g){return h&&h.length?Do(h,vt(g,2)):[]}function qh(h){var g=h==null?0:h.length;return g?Fe(h,1,g):[]}function jh(h,g,C){return h&&h.length?(g=C||g===d?1:Et(g),Fe(h,0,g<0?0:g)):[]}function Kh(h,g,C){var T=h==null?0:h.length;return T?(g=C||g===d?1:Et(g),g=T-g,Fe(h,g<0?0:g,T)):[]}function Jh(h,g){return h&&h.length?Wr(h,vt(g,3),!1,!0):[]}function Xh(h,g){return h&&h.length?Wr(h,vt(g,3)):[]}var Qh=kt(function(h){return pn(ie(h,1,Kt,!0))}),Zh=kt(function(h){var g=$e(h);return Kt(g)&&(g=d),pn(ie(h,1,Kt,!0),vt(g,2))}),tf=kt(function(h){var g=$e(h);return g=typeof g=="function"?g:d,pn(ie(h,1,Kt,!0),d,g)});function ef(h){return h&&h.length?pn(h):[]}function nf(h,g){return h&&h.length?pn(h,vt(g,2)):[]}function rf(h,g){return g=typeof g=="function"?g:d,h&&h.length?pn(h,d,g):[]}function os(h){if(!(h&&h.length))return[];var g=0;return h=un(h,function(C){if(Kt(C))return g=Qt(C.length,g),!0}),wi(g,function(C){return Yt(h,yi(C))})}function _l(h,g){if(!(h&&h.length))return[];var C=os(h);return g==null?C:Yt(C,function(T){return Ae(g,d,T)})}var sf=kt(function(h,g){return Kt(h)?hr(h,g):[]}),of=kt(function(h){return Hi(un(h,Kt))}),lf=kt(function(h){var g=$e(h);return Kt(g)&&(g=d),Hi(un(h,Kt),vt(g,2))}),af=kt(function(h){var g=$e(h);return g=typeof g=="function"?g:d,Hi(un(h,Kt),d,g)}),uf=kt(os);function cf(h,g){return Bo(h||[],g||[],cr)}function hf(h,g){return Bo(h||[],g||[],pr)}var ff=kt(function(h){var g=h.length,C=g>1?h[g-1]:d;return C=typeof C=="function"?(h.pop(),C):d,_l(h,C)});function xl(h){var g=M(h);return g.__chain__=!0,g}function df(h,g){return g(h),h}function Zr(h,g){return g(h)}var pf=nn(function(h){var g=h.length,C=g?h[0]:0,T=this.__wrapped__,O=function(R){return Oi(R,h)};return g>1||this.__actions__.length||!(T instanceof Ot)||!rn(C)?this.thru(O):(T=T.slice(C,+C+(g?1:0)),T.__actions__.push({func:Zr,args:[O],thisArg:d}),new De(T,this.__chain__).thru(function(R){return g&&!R.length&&R.push(d),R}))});function gf(){return xl(this)}function mf(){return new De(this.value(),this.__chain__)}function bf(){this.__values__===d&&(this.__values__=Rl(this.value()));var h=this.__index__>=this.__values__.length,g=h?d:this.__values__[this.__index__++];return{done:h,value:g}}function vf(){return this}function yf(h){for(var g,C=this;C instanceof Br;){var T=pl(C);T.__index__=0,T.__values__=d,g?O.__wrapped__=T:g=T;var O=T;C=C.__wrapped__}return O.__wrapped__=h,g}function _f(){var h=this.__wrapped__;if(h instanceof Ot){var g=h;return this.__actions__.length&&(g=new Ot(this)),g=g.reverse(),g.__actions__.push({func:Zr,args:[ss],thisArg:d}),new De(g,this.__chain__)}return this.thru(ss)}function xf(){return $o(this.__wrapped__,this.__actions__)}var wf=Gr(function(h,g,C){$t.call(h,C)?++h[C]:tn(h,C,1)});function Af(h,g,C){var T=Ct(h)?js:fc;return C&&he(h,g,C)&&(g=d),T(h,vt(g,3))}function Cf(h,g){var C=Ct(h)?un:_o;return C(h,vt(g,3))}var Ef=jo(gl),Sf=jo(ml);function kf(h,g){return ie(ti(h,g),1)}function Tf(h,g){return ie(ti(h,g),Lt)}function If(h,g,C){return C=C===d?1:Et(C),ie(ti(h,g),C)}function wl(h,g){var C=Ct(h)?Le:dn;return C(h,vt(g,3))}function Al(h,g){var C=Ct(h)?qa:yo;return C(h,vt(g,3))}var Of=Gr(function(h,g,C){$t.call(h,C)?h[C].push(g):tn(h,C,[g])});function Nf(h,g,C,T){h=be(h)?h:tr(h),C=C&&!T?Et(C):0;var O=h.length;return C<0&&(C=Qt(O+C,0)),si(h)?C<=O&&h.indexOf(g,C)>-1:!!O&&Vn(h,g,C)>-1}var Lf=kt(function(h,g,C){var T=-1,O=typeof g=="function",R=be(h)?j(h.length):[];return dn(h,function(B){R[++T]=O?Ae(g,B,C):fr(B,g,C)}),R}),Mf=Gr(function(h,g,C){tn(h,C,g)});function ti(h,g){var C=Ct(h)?Yt:So;return C(h,vt(g,3))}function Df(h,g,C,T){return h==null?[]:(Ct(g)||(g=g==null?[]:[g]),C=T?d:C,Ct(C)||(C=C==null?[]:[C]),Oo(h,g,C))}var Rf=Gr(function(h,g,C){h[C?0:1].push(g)},function(){return[[],[]]});function Ff(h,g,C){var T=Ct(h)?bi:Qs,O=arguments.length<3;return T(h,vt(g,4),C,O,dn)}function $f(h,g,C){var T=Ct(h)?ja:Qs,O=arguments.length<3;return T(h,vt(g,4),C,O,yo)}function Bf(h,g){var C=Ct(h)?un:_o;return C(h,ri(vt(g,3)))}function Pf(h){var g=Ct(h)?go:Oc;return g(h)}function zf(h,g,C){(C?he(h,g,C):g===d)?g=1:g=Et(g);var T=Ct(h)?lc:Nc;return T(h,g)}function Uf(h){var g=Ct(h)?ac:Mc;return g(h)}function Vf(h){if(h==null)return 0;if(be(h))return si(h)?Wn(h):h.length;var g=ae(h);return g==se||g==oe?h.size:Fi(h).length}function Hf(h,g,C){var T=Ct(h)?vi:Dc;return C&&he(h,g,C)&&(g=d),T(h,vt(g,3))}var Wf=kt(function(h,g){if(h==null)return[];var C=g.length;return C>1&&he(h,g[0],g[1])?g=[]:C>2&&he(g[0],g[1],g[2])&&(g=[g[0]]),Oo(h,ie(g,1),[])}),ei=Au||function(){return re.Date.now()};function Gf(h,g){if(typeof g!="function")throw new Me(I);return h=Et(h),function(){if(--h<1)return g.apply(this,arguments)}}function Cl(h,g,C){return g=C?d:g,g=h&&g==null?h.length:g,en(h,Wt,d,d,d,d,g)}function El(h,g){var C;if(typeof g!="function")throw new Me(I);return h=Et(h),function(){return--h>0&&(C=g.apply(this,arguments)),h<=1&&(g=d),C}}var ls=kt(function(h,g,C){var T=bt;if(C.length){var O=hn(C,Qn(ls));T|=Ft}return en(h,T,g,C,O)}),Sl=kt(function(h,g,C){var T=bt|ft;if(C.length){var O=hn(C,Qn(Sl));T|=Ft}return en(g,T,h,C,O)});function kl(h,g,C){g=C?d:g;var T=en(h,Dt,d,d,d,d,d,g);return T.placeholder=kl.placeholder,T}function Tl(h,g,C){g=C?d:g;var T=en(h,Ht,d,d,d,d,d,g);return T.placeholder=Tl.placeholder,T}function Il(h,g,C){var T,O,R,B,P,H,Z=0,tt=!1,rt=!1,ht=!0;if(typeof h!="function")throw new Me(I);g=Be(g)||0,qt(C)&&(tt=!!C.leading,rt="maxWait"in C,R=rt?Qt(Be(C.maxWait)||0,g):R,ht="trailing"in C?!!C.trailing:ht);function gt(Jt){var He=T,an=O;return T=O=d,Z=Jt,B=h.apply(an,He),B}function yt(Jt){return Z=Jt,P=br(It,g),tt?gt(Jt):B}function St(Jt){var He=Jt-H,an=Jt-Z,jl=g-He;return rt?le(jl,R-an):jl}function _t(Jt){var He=Jt-H,an=Jt-Z;return H===d||He>=g||He<0||rt&&an>=R}function It(){var Jt=ei();if(_t(Jt))return Nt(Jt);P=br(It,St(Jt))}function Nt(Jt){return P=d,ht&&T?gt(Jt):(T=O=d,B)}function ke(){P!==d&&Po(P),Z=0,T=H=O=P=d}function fe(){return P===d?B:Nt(ei())}function Te(){var Jt=ei(),He=_t(Jt);if(T=arguments,O=this,H=Jt,He){if(P===d)return yt(H);if(rt)return Po(P),P=br(It,g),gt(H)}return P===d&&(P=br(It,g)),B}return Te.cancel=ke,Te.flush=fe,Te}var Yf=kt(function(h,g){return vo(h,1,g)}),qf=kt(function(h,g,C){return vo(h,Be(g)||0,C)});function jf(h){return en(h,de)}function ni(h,g){if(typeof h!="function"||g!=null&&typeof g!="function")throw new Me(I);var C=function(){var T=arguments,O=g?g.apply(this,T):T[0],R=C.cache;if(R.has(O))return R.get(O);var B=h.apply(this,T);return C.cache=R.set(O,B)||R,B};return C.cache=new(ni.Cache||Ze),C}ni.Cache=Ze;function ri(h){if(typeof h!="function")throw new Me(I);return function(){var g=arguments;switch(g.length){case 0:return!h.call(this);case 1:return!h.call(this,g[0]);case 2:return!h.call(this,g[0],g[1]);case 3:return!h.call(this,g[0],g[1],g[2])}return!h.apply(this,g)}}function Kf(h){return El(2,h)}var Jf=Rc(function(h,g){g=g.length==1&&Ct(g[0])?Yt(g[0],Ce(vt())):Yt(ie(g,1),Ce(vt()));var C=g.length;return kt(function(T){for(var O=-1,R=le(T.length,C);++O<R;)T[O]=g[O].call(this,T[O]);return Ae(h,this,T)})}),as=kt(function(h,g){var C=hn(g,Qn(as));return en(h,Ft,d,g,C)}),Ol=kt(function(h,g){var C=hn(g,Qn(Ol));return en(h,Bt,d,g,C)}),Xf=nn(function(h,g){return en(h,Pt,d,d,d,g)});function Qf(h,g){if(typeof h!="function")throw new Me(I);return g=g===d?g:Et(g),kt(h,g)}function Zf(h,g){if(typeof h!="function")throw new Me(I);return g=g==null?0:Qt(Et(g),0),kt(function(C){var T=C[g],O=mn(C,0,g);return T&&cn(O,T),Ae(h,this,O)})}function td(h,g,C){var T=!0,O=!0;if(typeof h!="function")throw new Me(I);return qt(C)&&(T="leading"in C?!!C.leading:T,O="trailing"in C?!!C.trailing:O),Il(h,g,{leading:T,maxWait:g,trailing:O})}function ed(h){return Cl(h,1)}function nd(h,g){return as(Gi(g),h)}function rd(){if(!arguments.length)return[];var h=arguments[0];return Ct(h)?h:[h]}function id(h){return Re(h,W)}function sd(h,g){return g=typeof g=="function"?g:d,Re(h,W,g)}function od(h){return Re(h,$|W)}function ld(h,g){return g=typeof g=="function"?g:d,Re(h,$|W,g)}function ad(h,g){return g==null||bo(h,g,te(g))}function Ve(h,g){return h===g||h!==h&&g!==g}var ud=Kr(Mi),cd=Kr(function(h,g){return h>=g}),Nn=Ao(function(){return arguments}())?Ao:function(h){return jt(h)&&$t.call(h,"callee")&&!ao.call(h,"callee")},Ct=j.isArray,hd=Vs?Ce(Vs):vc;function be(h){return h!=null&&ii(h.length)&&!sn(h)}function Kt(h){return jt(h)&&be(h)}function fd(h){return h===!0||h===!1||jt(h)&&ce(h)==_e}var bn=Eu||ys,dd=Hs?Ce(Hs):yc;function pd(h){return jt(h)&&h.nodeType===1&&!vr(h)}function gd(h){if(h==null)return!0;if(be(h)&&(Ct(h)||typeof h=="string"||typeof h.splice=="function"||bn(h)||Zn(h)||Nn(h)))return!h.length;var g=ae(h);if(g==se||g==oe)return!h.size;if(mr(h))return!Fi(h).length;for(var C in h)if($t.call(h,C))return!1;return!0}function md(h,g){return dr(h,g)}function bd(h,g,C){C=typeof C=="function"?C:d;var T=C?C(h,g):d;return T===d?dr(h,g,d,C):!!T}function us(h){if(!jt(h))return!1;var g=ce(h);return g==je||g==Bn||typeof h.message=="string"&&typeof h.name=="string"&&!vr(h)}function vd(h){return typeof h=="number"&&co(h)}function sn(h){if(!qt(h))return!1;var g=ce(h);return g==Ke||g==xn||g==Gt||g==Pn}function Nl(h){return typeof h=="number"&&h==Et(h)}function ii(h){return typeof h=="number"&&h>-1&&h%1==0&&h<=Ie}function qt(h){var g=typeof h;return h!=null&&(g=="object"||g=="function")}function jt(h){return h!=null&&typeof h=="object"}var Ll=Ws?Ce(Ws):xc;function yd(h,g){return h===g||Ri(h,g,Qi(g))}function _d(h,g,C){return C=typeof C=="function"?C:d,Ri(h,g,Qi(g),C)}function xd(h){return Ml(h)&&h!=+h}function wd(h){if(ih(h))throw new At(k);return Co(h)}function Ad(h){return h===null}function Cd(h){return h==null}function Ml(h){return typeof h=="number"||jt(h)&&ce(h)==xe}function vr(h){if(!jt(h)||ce(h)!=we)return!1;var g=Nr(h);if(g===null)return!0;var C=$t.call(g,"constructor")&&g.constructor;return typeof C=="function"&&C instanceof C&&kr.call(C)==yu}var cs=Gs?Ce(Gs):wc;function Ed(h){return Nl(h)&&h>=-Ie&&h<=Ie}var Dl=Ys?Ce(Ys):Ac;function si(h){return typeof h=="string"||!Ct(h)&&jt(h)&&ce(h)==We}function Se(h){return typeof h=="symbol"||jt(h)&&ce(h)==Je}var Zn=qs?Ce(qs):Cc;function Sd(h){return h===d}function kd(h){return jt(h)&&ae(h)==Xe}function Td(h){return jt(h)&&ce(h)==rr}var Id=Kr($i),Od=Kr(function(h,g){return h<=g});function Rl(h){if(!h)return[];if(be(h))return si(h)?ze(h):me(h);if(sr&&h[sr])return lu(h[sr]());var g=ae(h),C=g==se?Ci:g==oe?Cr:tr;return C(h)}function ln(h){if(!h)return h===0?h:0;if(h=Be(h),h===Lt||h===-Lt){var g=h<0?-1:1;return g*Fn}return h===h?h:0}function Et(h){var g=ln(h),C=g%1;return g===g?C?g-C:g:0}function Fl(h){return h?kn(Et(h),0,ee):0}function Be(h){if(typeof h=="number")return h;if(Se(h))return mt;if(qt(h)){var g=typeof h.valueOf=="function"?h.valueOf():h;h=qt(g)?g+"":g}if(typeof h!="string")return h===0?h:+h;h=Zs(h);var C=ca.test(h);return C||fa.test(h)?Wa(h.slice(2),C?2:8):ua.test(h)?mt:+h}function $l(h){return Ye(h,ve(h))}function Nd(h){return h?kn(Et(h),-Ie,Ie):h===0?h:0}function Rt(h){return h==null?"":Ee(h)}var Ld=Jn(function(h,g){if(mr(g)||be(g)){Ye(g,te(g),h);return}for(var C in g)$t.call(g,C)&&cr(h,C,g[C])}),Bl=Jn(function(h,g){Ye(g,ve(g),h)}),oi=Jn(function(h,g,C,T){Ye(g,ve(g),h,T)}),Md=Jn(function(h,g,C,T){Ye(g,te(g),h,T)}),Dd=nn(Oi);function Rd(h,g){var C=Kn(h);return g==null?C:mo(C,g)}var Fd=kt(function(h,g){h=zt(h);var C=-1,T=g.length,O=T>2?g[2]:d;for(O&&he(g[0],g[1],O)&&(T=1);++C<T;)for(var R=g[C],B=ve(R),P=-1,H=B.length;++P<H;){var Z=B[P],tt=h[Z];(tt===d||Ve(tt,Yn[Z])&&!$t.call(h,Z))&&(h[Z]=R[Z])}return h}),$d=kt(function(h){return h.push(d,el),Ae(Pl,d,h)});function Bd(h,g){return Ks(h,vt(g,3),Ge)}function Pd(h,g){return Ks(h,vt(g,3),Li)}function zd(h,g){return h==null?h:Ni(h,vt(g,3),ve)}function Ud(h,g){return h==null?h:xo(h,vt(g,3),ve)}function Vd(h,g){return h&&Ge(h,vt(g,3))}function Hd(h,g){return h&&Li(h,vt(g,3))}function Wd(h){return h==null?[]:Ur(h,te(h))}function Gd(h){return h==null?[]:Ur(h,ve(h))}function hs(h,g,C){var T=h==null?d:Tn(h,g);return T===d?C:T}function Yd(h,g){return h!=null&&il(h,g,pc)}function fs(h,g){return h!=null&&il(h,g,gc)}var qd=Jo(function(h,g,C){g!=null&&typeof g.toString!="function"&&(g=Tr.call(g)),h[g]=C},ps(ye)),jd=Jo(function(h,g,C){g!=null&&typeof g.toString!="function"&&(g=Tr.call(g)),$t.call(h,g)?h[g].push(C):h[g]=[C]},vt),Kd=kt(fr);function te(h){return be(h)?po(h):Fi(h)}function ve(h){return be(h)?po(h,!0):Ec(h)}function Jd(h,g){var C={};return g=vt(g,3),Ge(h,function(T,O,R){tn(C,g(T,O,R),T)}),C}function Xd(h,g){var C={};return g=vt(g,3),Ge(h,function(T,O,R){tn(C,O,g(T,O,R))}),C}var Qd=Jn(function(h,g,C){Vr(h,g,C)}),Pl=Jn(function(h,g,C,T){Vr(h,g,C,T)}),Zd=nn(function(h,g){var C={};if(h==null)return C;var T=!1;g=Yt(g,function(R){return R=gn(R,h),T||(T=R.length>1),R}),Ye(h,Ji(h),C),T&&(C=Re(C,$|V|W,Yc));for(var O=g.length;O--;)Vi(C,g[O]);return C});function tp(h,g){return zl(h,ri(vt(g)))}var ep=nn(function(h,g){return h==null?{}:kc(h,g)});function zl(h,g){if(h==null)return{};var C=Yt(Ji(h),function(T){return[T]});return g=vt(g),No(h,C,function(T,O){return g(T,O[0])})}function np(h,g,C){g=gn(g,h);var T=-1,O=g.length;for(O||(O=1,h=d);++T<O;){var R=h==null?d:h[qe(g[T])];R===d&&(T=O,R=C),h=sn(R)?R.call(h):R}return h}function rp(h,g,C){return h==null?h:pr(h,g,C)}function ip(h,g,C,T){return T=typeof T=="function"?T:d,h==null?h:pr(h,g,C,T)}var Ul=Zo(te),Vl=Zo(ve);function sp(h,g,C){var T=Ct(h),O=T||bn(h)||Zn(h);if(g=vt(g,4),C==null){var R=h&&h.constructor;O?C=T?new R:[]:qt(h)?C=sn(R)?Kn(Nr(h)):{}:C={}}return(O?Le:Ge)(h,function(B,P,H){return g(C,B,P,H)}),C}function op(h,g){return h==null?!0:Vi(h,g)}function lp(h,g,C){return h==null?h:Fo(h,g,Gi(C))}function ap(h,g,C,T){return T=typeof T=="function"?T:d,h==null?h:Fo(h,g,Gi(C),T)}function tr(h){return h==null?[]:Ai(h,te(h))}function up(h){return h==null?[]:Ai(h,ve(h))}function cp(h,g,C){return C===d&&(C=g,g=d),C!==d&&(C=Be(C),C=C===C?C:0),g!==d&&(g=Be(g),g=g===g?g:0),kn(Be(h),g,C)}function hp(h,g,C){return g=ln(g),C===d?(C=g,g=0):C=ln(C),h=Be(h),mc(h,g,C)}function fp(h,g,C){if(C&&typeof C!="boolean"&&he(h,g,C)&&(g=C=d),C===d&&(typeof g=="boolean"?(C=g,g=d):typeof h=="boolean"&&(C=h,h=d)),h===d&&g===d?(h=0,g=1):(h=ln(h),g===d?(g=h,h=0):g=ln(g)),h>g){var T=h;h=g,g=T}if(C||h%1||g%1){var O=ho();return le(h+O*(g-h+Ha("1e-"+((O+"").length-1))),g)}return Pi(h,g)}var dp=Xn(function(h,g,C){return g=g.toLowerCase(),h+(C?Hl(g):g)});function Hl(h){return ds(Rt(h).toLowerCase())}function Wl(h){return h=Rt(h),h&&h.replace(pa,nu).replace(Ma,"")}function pp(h,g,C){h=Rt(h),g=Ee(g);var T=h.length;C=C===d?T:kn(Et(C),0,T);var O=C;return C-=g.length,C>=0&&h.slice(C,O)==g}function gp(h){return h=Rt(h),h&&Oe.test(h)?h.replace(xt,ru):h}function mp(h){return h=Rt(h),h&&ta.test(h)?h.replace(li,"\\$&"):h}var bp=Xn(function(h,g,C){return h+(C?"-":"")+g.toLowerCase()}),vp=Xn(function(h,g,C){return h+(C?" ":"")+g.toLowerCase()}),yp=qo("toLowerCase");function _p(h,g,C){h=Rt(h),g=Et(g);var T=g?Wn(h):0;if(!g||T>=g)return h;var O=(g-T)/2;return jr(Rr(O),C)+h+jr(Dr(O),C)}function xp(h,g,C){h=Rt(h),g=Et(g);var T=g?Wn(h):0;return g&&T<g?h+jr(g-T,C):h}function wp(h,g,C){h=Rt(h),g=Et(g);var T=g?Wn(h):0;return g&&T<g?jr(g-T,C)+h:h}function Ap(h,g,C){return C||g==null?g=0:g&&(g=+g),Iu(Rt(h).replace(ai,""),g||0)}function Cp(h,g,C){return(C?he(h,g,C):g===d)?g=1:g=Et(g),zi(Rt(h),g)}function Ep(){var h=arguments,g=Rt(h[0]);return h.length<3?g:g.replace(h[1],h[2])}var Sp=Xn(function(h,g,C){return h+(C?"_":"")+g.toLowerCase()});function kp(h,g,C){return C&&typeof C!="number"&&he(h,g,C)&&(g=C=d),C=C===d?ee:C>>>0,C?(h=Rt(h),h&&(typeof g=="string"||g!=null&&!cs(g))&&(g=Ee(g),!g&&Hn(h))?mn(ze(h),0,C):h.split(g,C)):[]}var Tp=Xn(function(h,g,C){return h+(C?" ":"")+ds(g)});function Ip(h,g,C){return h=Rt(h),C=C==null?0:kn(Et(C),0,h.length),g=Ee(g),h.slice(C,C+g.length)==g}function Op(h,g,C){var T=M.templateSettings;C&&he(h,g,C)&&(g=d),h=Rt(h),g=oi({},g,T,tl);var O=oi({},g.imports,T.imports,tl),R=te(O),B=Ai(O,R),P,H,Z=0,tt=g.interpolate||yr,rt="__p += '",ht=Ei((g.escape||yr).source+"|"+tt.source+"|"+(tt===_s?aa:yr).source+"|"+(g.evaluate||yr).source+"|$","g"),gt="//# sourceURL="+($t.call(g,"sourceURL")?(g.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ba+"]")+`
`;h.replace(ht,function(_t,It,Nt,ke,fe,Te){return Nt||(Nt=ke),rt+=h.slice(Z,Te).replace(ga,iu),It&&(P=!0,rt+=`' +
__e(`+It+`) +
'`),fe&&(H=!0,rt+=`';
`+fe+`;
__p += '`),Nt&&(rt+=`' +
((__t = (`+Nt+`)) == null ? '' : __t) +
'`),Z=Te+_t.length,_t}),rt+=`';
`;var yt=$t.call(g,"variable")&&g.variable;if(!yt)rt=`with (obj) {
`+rt+`
}
`;else if(oa.test(yt))throw new At(N);rt=(H?rt.replace(X,""):rt).replace(at,"$1").replace(nt,"$1;"),rt="function("+(yt||"obj")+`) {
`+(yt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(H?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+rt+`return __p
}`;var St=Yl(function(){return Mt(R,gt+"return "+rt).apply(d,B)});if(St.source=rt,us(St))throw St;return St}function Np(h){return Rt(h).toLowerCase()}function Lp(h){return Rt(h).toUpperCase()}function Mp(h,g,C){if(h=Rt(h),h&&(C||g===d))return Zs(h);if(!h||!(g=Ee(g)))return h;var T=ze(h),O=ze(g),R=eo(T,O),B=no(T,O)+1;return mn(T,R,B).join("")}function Dp(h,g,C){if(h=Rt(h),h&&(C||g===d))return h.slice(0,io(h)+1);if(!h||!(g=Ee(g)))return h;var T=ze(h),O=no(T,ze(g))+1;return mn(T,0,O).join("")}function Rp(h,g,C){if(h=Rt(h),h&&(C||g===d))return h.replace(ai,"");if(!h||!(g=Ee(g)))return h;var T=ze(h),O=eo(T,ze(g));return mn(T,O).join("")}function Fp(h,g){var C=er,T=Ln;if(qt(g)){var O="separator"in g?g.separator:O;C="length"in g?Et(g.length):C,T="omission"in g?Ee(g.omission):T}h=Rt(h);var R=h.length;if(Hn(h)){var B=ze(h);R=B.length}if(C>=R)return h;var P=C-Wn(T);if(P<1)return T;var H=B?mn(B,0,P).join(""):h.slice(0,P);if(O===d)return H+T;if(B&&(P+=H.length-P),cs(O)){if(h.slice(P).search(O)){var Z,tt=H;for(O.global||(O=Ei(O.source,Rt(xs.exec(O))+"g")),O.lastIndex=0;Z=O.exec(tt);)var rt=Z.index;H=H.slice(0,rt===d?P:rt)}}else if(h.indexOf(Ee(O),P)!=P){var ht=H.lastIndexOf(O);ht>-1&&(H=H.slice(0,ht))}return H+T}function $p(h){return h=Rt(h),h&&wt.test(h)?h.replace(dt,hu):h}var Bp=Xn(function(h,g,C){return h+(C?" ":"")+g.toUpperCase()}),ds=qo("toUpperCase");function Gl(h,g,C){return h=Rt(h),g=C?d:g,g===d?ou(h)?pu(h):Xa(h):h.match(g)||[]}var Yl=kt(function(h,g){try{return Ae(h,d,g)}catch(C){return us(C)?C:new At(C)}}),Pp=nn(function(h,g){return Le(g,function(C){C=qe(C),tn(h,C,ls(h[C],h))}),h});function zp(h){var g=h==null?0:h.length,C=vt();return h=g?Yt(h,function(T){if(typeof T[1]!="function")throw new Me(I);return[C(T[0]),T[1]]}):[],kt(function(T){for(var O=-1;++O<g;){var R=h[O];if(Ae(R[0],this,T))return Ae(R[1],this,T)}})}function Up(h){return hc(Re(h,$))}function ps(h){return function(){return h}}function Vp(h,g){return h==null||h!==h?g:h}var Hp=Ko(),Wp=Ko(!0);function ye(h){return h}function gs(h){return Eo(typeof h=="function"?h:Re(h,$))}function Gp(h){return ko(Re(h,$))}function Yp(h,g){return To(h,Re(g,$))}var qp=kt(function(h,g){return function(C){return fr(C,h,g)}}),jp=kt(function(h,g){return function(C){return fr(h,C,g)}});function ms(h,g,C){var T=te(g),O=Ur(g,T);C==null&&!(qt(g)&&(O.length||!T.length))&&(C=g,g=h,h=this,O=Ur(g,te(g)));var R=!(qt(C)&&"chain"in C)||!!C.chain,B=sn(h);return Le(O,function(P){var H=g[P];h[P]=H,B&&(h.prototype[P]=function(){var Z=this.__chain__;if(R||Z){var tt=h(this.__wrapped__),rt=tt.__actions__=me(this.__actions__);return rt.push({func:H,args:arguments,thisArg:h}),tt.__chain__=Z,tt}return H.apply(h,cn([this.value()],arguments))})}),h}function Kp(){return re._===this&&(re._=_u),this}function bs(){}function Jp(h){return h=Et(h),kt(function(g){return Io(g,h)})}var Xp=qi(Yt),Qp=qi(js),Zp=qi(vi);function ql(h){return ts(h)?yi(qe(h)):Tc(h)}function tg(h){return function(g){return h==null?d:Tn(h,g)}}var eg=Xo(),ng=Xo(!0);function vs(){return[]}function ys(){return!1}function rg(){return{}}function ig(){return""}function sg(){return!0}function og(h,g){if(h=Et(h),h<1||h>Ie)return[];var C=ee,T=le(h,ee);g=vt(g),h-=ee;for(var O=wi(T,g);++C<h;)g(C);return O}function lg(h){return Ct(h)?Yt(h,qe):Se(h)?[h]:me(dl(Rt(h)))}function ag(h){var g=++vu;return Rt(h)+g}var ug=qr(function(h,g){return h+g},0),cg=ji("ceil"),hg=qr(function(h,g){return h/g},1),fg=ji("floor");function dg(h){return h&&h.length?zr(h,ye,Mi):d}function pg(h,g){return h&&h.length?zr(h,vt(g,2),Mi):d}function gg(h){return Xs(h,ye)}function mg(h,g){return Xs(h,vt(g,2))}function bg(h){return h&&h.length?zr(h,ye,$i):d}function vg(h,g){return h&&h.length?zr(h,vt(g,2),$i):d}var yg=qr(function(h,g){return h*g},1),_g=ji("round"),xg=qr(function(h,g){return h-g},0);function wg(h){return h&&h.length?xi(h,ye):0}function Ag(h,g){return h&&h.length?xi(h,vt(g,2)):0}return M.after=Gf,M.ary=Cl,M.assign=Ld,M.assignIn=Bl,M.assignInWith=oi,M.assignWith=Md,M.at=Dd,M.before=El,M.bind=ls,M.bindAll=Pp,M.bindKey=Sl,M.castArray=rd,M.chain=xl,M.chunk=hh,M.compact=fh,M.concat=dh,M.cond=zp,M.conforms=Up,M.constant=ps,M.countBy=wf,M.create=Rd,M.curry=kl,M.curryRight=Tl,M.debounce=Il,M.defaults=Fd,M.defaultsDeep=$d,M.defer=Yf,M.delay=qf,M.difference=ph,M.differenceBy=gh,M.differenceWith=mh,M.drop=bh,M.dropRight=vh,M.dropRightWhile=yh,M.dropWhile=_h,M.fill=xh,M.filter=Cf,M.flatMap=kf,M.flatMapDeep=Tf,M.flatMapDepth=If,M.flatten=bl,M.flattenDeep=wh,M.flattenDepth=Ah,M.flip=jf,M.flow=Hp,M.flowRight=Wp,M.fromPairs=Ch,M.functions=Wd,M.functionsIn=Gd,M.groupBy=Of,M.initial=Sh,M.intersection=kh,M.intersectionBy=Th,M.intersectionWith=Ih,M.invert=qd,M.invertBy=jd,M.invokeMap=Lf,M.iteratee=gs,M.keyBy=Mf,M.keys=te,M.keysIn=ve,M.map=ti,M.mapKeys=Jd,M.mapValues=Xd,M.matches=Gp,M.matchesProperty=Yp,M.memoize=ni,M.merge=Qd,M.mergeWith=Pl,M.method=qp,M.methodOf=jp,M.mixin=ms,M.negate=ri,M.nthArg=Jp,M.omit=Zd,M.omitBy=tp,M.once=Kf,M.orderBy=Df,M.over=Xp,M.overArgs=Jf,M.overEvery=Qp,M.overSome=Zp,M.partial=as,M.partialRight=Ol,M.partition=Rf,M.pick=ep,M.pickBy=zl,M.property=ql,M.propertyOf=tg,M.pull=Mh,M.pullAll=yl,M.pullAllBy=Dh,M.pullAllWith=Rh,M.pullAt=Fh,M.range=eg,M.rangeRight=ng,M.rearg=Xf,M.reject=Bf,M.remove=$h,M.rest=Qf,M.reverse=ss,M.sampleSize=zf,M.set=rp,M.setWith=ip,M.shuffle=Uf,M.slice=Bh,M.sortBy=Wf,M.sortedUniq=Gh,M.sortedUniqBy=Yh,M.split=kp,M.spread=Zf,M.tail=qh,M.take=jh,M.takeRight=Kh,M.takeRightWhile=Jh,M.takeWhile=Xh,M.tap=df,M.throttle=td,M.thru=Zr,M.toArray=Rl,M.toPairs=Ul,M.toPairsIn=Vl,M.toPath=lg,M.toPlainObject=$l,M.transform=sp,M.unary=ed,M.union=Qh,M.unionBy=Zh,M.unionWith=tf,M.uniq=ef,M.uniqBy=nf,M.uniqWith=rf,M.unset=op,M.unzip=os,M.unzipWith=_l,M.update=lp,M.updateWith=ap,M.values=tr,M.valuesIn=up,M.without=sf,M.words=Gl,M.wrap=nd,M.xor=of,M.xorBy=lf,M.xorWith=af,M.zip=uf,M.zipObject=cf,M.zipObjectDeep=hf,M.zipWith=ff,M.entries=Ul,M.entriesIn=Vl,M.extend=Bl,M.extendWith=oi,ms(M,M),M.add=ug,M.attempt=Yl,M.camelCase=dp,M.capitalize=Hl,M.ceil=cg,M.clamp=cp,M.clone=id,M.cloneDeep=od,M.cloneDeepWith=ld,M.cloneWith=sd,M.conformsTo=ad,M.deburr=Wl,M.defaultTo=Vp,M.divide=hg,M.endsWith=pp,M.eq=Ve,M.escape=gp,M.escapeRegExp=mp,M.every=Af,M.find=Ef,M.findIndex=gl,M.findKey=Bd,M.findLast=Sf,M.findLastIndex=ml,M.findLastKey=Pd,M.floor=fg,M.forEach=wl,M.forEachRight=Al,M.forIn=zd,M.forInRight=Ud,M.forOwn=Vd,M.forOwnRight=Hd,M.get=hs,M.gt=ud,M.gte=cd,M.has=Yd,M.hasIn=fs,M.head=vl,M.identity=ye,M.includes=Nf,M.indexOf=Eh,M.inRange=hp,M.invoke=Kd,M.isArguments=Nn,M.isArray=Ct,M.isArrayBuffer=hd,M.isArrayLike=be,M.isArrayLikeObject=Kt,M.isBoolean=fd,M.isBuffer=bn,M.isDate=dd,M.isElement=pd,M.isEmpty=gd,M.isEqual=md,M.isEqualWith=bd,M.isError=us,M.isFinite=vd,M.isFunction=sn,M.isInteger=Nl,M.isLength=ii,M.isMap=Ll,M.isMatch=yd,M.isMatchWith=_d,M.isNaN=xd,M.isNative=wd,M.isNil=Cd,M.isNull=Ad,M.isNumber=Ml,M.isObject=qt,M.isObjectLike=jt,M.isPlainObject=vr,M.isRegExp=cs,M.isSafeInteger=Ed,M.isSet=Dl,M.isString=si,M.isSymbol=Se,M.isTypedArray=Zn,M.isUndefined=Sd,M.isWeakMap=kd,M.isWeakSet=Td,M.join=Oh,M.kebabCase=bp,M.last=$e,M.lastIndexOf=Nh,M.lowerCase=vp,M.lowerFirst=yp,M.lt=Id,M.lte=Od,M.max=dg,M.maxBy=pg,M.mean=gg,M.meanBy=mg,M.min=bg,M.minBy=vg,M.stubArray=vs,M.stubFalse=ys,M.stubObject=rg,M.stubString=ig,M.stubTrue=sg,M.multiply=yg,M.nth=Lh,M.noConflict=Kp,M.noop=bs,M.now=ei,M.pad=_p,M.padEnd=xp,M.padStart=wp,M.parseInt=Ap,M.random=fp,M.reduce=Ff,M.reduceRight=$f,M.repeat=Cp,M.replace=Ep,M.result=np,M.round=_g,M.runInContext=U,M.sample=Pf,M.size=Vf,M.snakeCase=Sp,M.some=Hf,M.sortedIndex=Ph,M.sortedIndexBy=zh,M.sortedIndexOf=Uh,M.sortedLastIndex=Vh,M.sortedLastIndexBy=Hh,M.sortedLastIndexOf=Wh,M.startCase=Tp,M.startsWith=Ip,M.subtract=xg,M.sum=wg,M.sumBy=Ag,M.template=Op,M.times=og,M.toFinite=ln,M.toInteger=Et,M.toLength=Fl,M.toLower=Np,M.toNumber=Be,M.toSafeInteger=Nd,M.toString=Rt,M.toUpper=Lp,M.trim=Mp,M.trimEnd=Dp,M.trimStart=Rp,M.truncate=Fp,M.unescape=$p,M.uniqueId=ag,M.upperCase=Bp,M.upperFirst=ds,M.each=wl,M.eachRight=Al,M.first=vl,ms(M,function(){var h={};return Ge(M,function(g,C){$t.call(M.prototype,C)||(h[C]=g)}),h}(),{chain:!1}),M.VERSION=v,Le(["bind","bindKey","curry","curryRight","partial","partialRight"],function(h){M[h].placeholder=M}),Le(["drop","take"],function(h,g){Ot.prototype[h]=function(C){C=C===d?1:Qt(Et(C),0);var T=this.__filtered__&&!g?new Ot(this):this.clone();return T.__filtered__?T.__takeCount__=le(C,T.__takeCount__):T.__views__.push({size:le(C,ee),type:h+(T.__dir__<0?"Right":"")}),T},Ot.prototype[h+"Right"]=function(C){return this.reverse()[h](C).reverse()}}),Le(["filter","map","takeWhile"],function(h,g){var C=g+1,T=C==vn||C==yn;Ot.prototype[h]=function(O){var R=this.clone();return R.__iteratees__.push({iteratee:vt(O,3),type:C}),R.__filtered__=R.__filtered__||T,R}}),Le(["head","last"],function(h,g){var C="take"+(g?"Right":"");Ot.prototype[h]=function(){return this[C](1).value()[0]}}),Le(["initial","tail"],function(h,g){var C="drop"+(g?"":"Right");Ot.prototype[h]=function(){return this.__filtered__?new Ot(this):this[C](1)}}),Ot.prototype.compact=function(){return this.filter(ye)},Ot.prototype.find=function(h){return this.filter(h).head()},Ot.prototype.findLast=function(h){return this.reverse().find(h)},Ot.prototype.invokeMap=kt(function(h,g){return typeof h=="function"?new Ot(this):this.map(function(C){return fr(C,h,g)})}),Ot.prototype.reject=function(h){return this.filter(ri(vt(h)))},Ot.prototype.slice=function(h,g){h=Et(h);var C=this;return C.__filtered__&&(h>0||g<0)?new Ot(C):(h<0?C=C.takeRight(-h):h&&(C=C.drop(h)),g!==d&&(g=Et(g),C=g<0?C.dropRight(-g):C.take(g-h)),C)},Ot.prototype.takeRightWhile=function(h){return this.reverse().takeWhile(h).reverse()},Ot.prototype.toArray=function(){return this.take(ee)},Ge(Ot.prototype,function(h,g){var C=/^(?:filter|find|map|reject)|While$/.test(g),T=/^(?:head|last)$/.test(g),O=M[T?"take"+(g=="last"?"Right":""):g],R=T||/^find/.test(g);O&&(M.prototype[g]=function(){var B=this.__wrapped__,P=T?[1]:arguments,H=B instanceof Ot,Z=P[0],tt=H||Ct(B),rt=function(It){var Nt=O.apply(M,cn([It],P));return T&&ht?Nt[0]:Nt};tt&&C&&typeof Z=="function"&&Z.length!=1&&(H=tt=!1);var ht=this.__chain__,gt=!!this.__actions__.length,yt=R&&!ht,St=H&&!gt;if(!R&&tt){B=St?B:new Ot(this);var _t=h.apply(B,P);return _t.__actions__.push({func:Zr,args:[rt],thisArg:d}),new De(_t,ht)}return yt&&St?h.apply(this,P):(_t=this.thru(rt),yt?T?_t.value()[0]:_t.value():_t)})}),Le(["pop","push","shift","sort","splice","unshift"],function(h){var g=Er[h],C=/^(?:push|sort|unshift)$/.test(h)?"tap":"thru",T=/^(?:pop|shift)$/.test(h);M.prototype[h]=function(){var O=arguments;if(T&&!this.__chain__){var R=this.value();return g.apply(Ct(R)?R:[],O)}return this[C](function(B){return g.apply(Ct(B)?B:[],O)})}}),Ge(Ot.prototype,function(h,g){var C=M[g];if(C){var T=C.name+"";$t.call(jn,T)||(jn[T]=[]),jn[T].push({name:g,func:C})}}),jn[Yr(d,ft).name]=[{name:"wrapper",func:d}],Ot.prototype.clone=Fu,Ot.prototype.reverse=$u,Ot.prototype.value=Bu,M.prototype.at=pf,M.prototype.chain=gf,M.prototype.commit=mf,M.prototype.next=bf,M.prototype.plant=yf,M.prototype.reverse=_f,M.prototype.toJSON=M.prototype.valueOf=M.prototype.value=xf,M.prototype.first=M.prototype.head,sr&&(M.prototype[sr]=vf),M},Gn=gu();An?((An.exports=Gn)._=Gn,pi._=Gn):re._=Gn}).call(commonjsGlobal)})(lodash,lodash.exports);var lodashExports=lodash.exports;(function(){function m(s,d,v){function _(N,D){if(!d[N]){if(!s[N]){var F=typeof require=="function"&&require;if(!D&&F)return F(N,!0);if(k)return k(N,!0);var z=new Error("Cannot find module '"+N+"'");throw z.code="MODULE_NOT_FOUND",z}var $=d[N]={exports:{}};s[N][0].call($.exports,function(V){var W=s[N][1][V];return _(W||V)},$,$.exports,m,s,d,v)}return d[N].exports}for(var k=typeof require=="function"&&require,I=0;I<v.length;I++)_(v[I]);return _}return m})()({1:[function(m,s,d){var v=m("./lib/js-yaml.js");s.exports=v},{"./lib/js-yaml.js":2}],2:[function(m,s,d){var v=m("./js-yaml/loader"),_=m("./js-yaml/dumper");function k(I){return function(){throw new Error("Function "+I+" is deprecated and cannot be used.")}}s.exports.Type=m("./js-yaml/type"),s.exports.Schema=m("./js-yaml/schema"),s.exports.FAILSAFE_SCHEMA=m("./js-yaml/schema/failsafe"),s.exports.JSON_SCHEMA=m("./js-yaml/schema/json"),s.exports.CORE_SCHEMA=m("./js-yaml/schema/core"),s.exports.DEFAULT_SAFE_SCHEMA=m("./js-yaml/schema/default_safe"),s.exports.DEFAULT_FULL_SCHEMA=m("./js-yaml/schema/default_full"),s.exports.load=v.load,s.exports.loadAll=v.loadAll,s.exports.safeLoad=v.safeLoad,s.exports.safeLoadAll=v.safeLoadAll,s.exports.dump=_.dump,s.exports.safeDump=_.safeDump,s.exports.YAMLException=m("./js-yaml/exception"),s.exports.MINIMAL_SCHEMA=m("./js-yaml/schema/failsafe"),s.exports.SAFE_SCHEMA=m("./js-yaml/schema/default_safe"),s.exports.DEFAULT_SCHEMA=m("./js-yaml/schema/default_full"),s.exports.scan=k("scan"),s.exports.parse=k("parse"),s.exports.compose=k("compose"),s.exports.addConstructor=k("addConstructor")},{"./js-yaml/dumper":4,"./js-yaml/exception":5,"./js-yaml/loader":6,"./js-yaml/schema":8,"./js-yaml/schema/core":9,"./js-yaml/schema/default_full":10,"./js-yaml/schema/default_safe":11,"./js-yaml/schema/failsafe":12,"./js-yaml/schema/json":13,"./js-yaml/type":14}],3:[function(m,s,d){function v(F){return typeof F>"u"||F===null}function _(F){return typeof F=="object"&&F!==null}function k(F){return Array.isArray(F)?F:v(F)?[]:[F]}function I(F,z){var $,V,W,ot;if(z)for(ot=Object.keys(z),$=0,V=ot.length;$<V;$+=1)W=ot[$],F[W]=z[W];return F}function N(F,z){var $="",V;for(V=0;V<z;V+=1)$+=F;return $}function D(F){return F===0&&Number.NEGATIVE_INFINITY===1/F}s.exports.isNothing=v,s.exports.isObject=_,s.exports.toArray=k,s.exports.repeat=N,s.exports.isNegativeZero=D,s.exports.extend=I},{}],4:[function(m,s,d){var v=m("./common"),_=m("./exception"),k=m("./schema/default_full"),I=m("./schema/default_safe"),N=Object.prototype.toString,D=Object.prototype.hasOwnProperty,F=9,z=10,$=13,V=32,W=33,ot=34,lt=35,bt=37,ft=38,Tt=39,Dt=42,Ht=44,Ft=45,Bt=58,Wt=61,Pt=62,de=63,er=64,Ln=91,Mn=93,Dn=96,vn=123,Rn=124,yn=125,Lt={};Lt[0]="\\0",Lt[7]="\\a",Lt[8]="\\b",Lt[9]="\\t",Lt[10]="\\n",Lt[11]="\\v",Lt[12]="\\f",Lt[13]="\\r",Lt[27]="\\e",Lt[34]='\\"',Lt[92]="\\\\",Lt[133]="\\N",Lt[160]="\\_",Lt[8232]="\\L",Lt[8233]="\\P";var Ie=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function Fn(L,q){var K,st,it,X,at,nt,dt;if(q===null)return{};for(K={},st=Object.keys(q),it=0,X=st.length;it<X;it+=1)at=st[it],nt=String(q[at]),at.slice(0,2)==="!!"&&(at="tag:yaml.org,2002:"+at.slice(2)),dt=L.compiledTypeMap.fallback[at],dt&&D.call(dt.styleAliases,nt)&&(nt=dt.styleAliases[nt]),K[at]=nt;return K}function mt(L){var q,K,st;if(q=L.toString(16).toUpperCase(),L<=255)K="x",st=2;else if(L<=65535)K="u",st=4;else if(L<=4294967295)K="U",st=8;else throw new _("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+K+v.repeat("0",st-q.length)+q}function ee(L){this.schema=L.schema||k,this.indent=Math.max(1,L.indent||2),this.noArrayIndent=L.noArrayIndent||!1,this.skipInvalid=L.skipInvalid||!1,this.flowLevel=v.isNothing(L.flowLevel)?-1:L.flowLevel,this.styleMap=Fn(this.schema,L.styles||null),this.sortKeys=L.sortKeys||!1,this.lineWidth=L.lineWidth||80,this.noRefs=L.noRefs||!1,this.noCompatMode=L.noCompatMode||!1,this.condenseFlow=L.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function _n(L,q){for(var K=v.repeat(" ",q),st=0,it=-1,X="",at,nt=L.length;st<nt;)it=L.indexOf(`
`,st),it===-1?(at=L.slice(st),st=nt):(at=L.slice(st,it+1),st=it+1),at.length&&at!==`
`&&(X+=K),X+=at;return X}function pe(L,q){return`
`+v.repeat(" ",L.indent*q)}function $n(L,q){var K,st,it;for(K=0,st=L.implicitTypes.length;K<st;K+=1)if(it=L.implicitTypes[K],it.resolve(q))return!0;return!1}function ne(L){return L===V||L===F}function ue(L){return 32<=L&&L<=126||161<=L&&L<=55295&&L!==8232&&L!==8233||57344<=L&&L<=65533&&L!==65279||65536<=L&&L<=1114111}function Gt(L){return ue(L)&&!ne(L)&&L!==65279&&L!==$&&L!==z}function _e(L,q){return ue(L)&&L!==65279&&L!==Ht&&L!==Ln&&L!==Mn&&L!==vn&&L!==yn&&L!==Bt&&(L!==lt||q&&Gt(q))}function Pe(L){return ue(L)&&L!==65279&&!ne(L)&&L!==Ft&&L!==de&&L!==Bt&&L!==Ht&&L!==Ln&&L!==Mn&&L!==vn&&L!==yn&&L!==lt&&L!==ft&&L!==Dt&&L!==W&&L!==Rn&&L!==Wt&&L!==Pt&&L!==Tt&&L!==ot&&L!==bt&&L!==er&&L!==Dn}function Bn(L){var q=/^\n* /;return q.test(L)}var je=1,Ke=2,xn=3,se=4,xe=5;function nr(L,q,K,st,it){var X,at,nt,dt=!1,xt=!1,wt=st!==-1,Oe=-1,Zt=Pe(L.charCodeAt(0))&&!ne(L.charCodeAt(L.length-1));if(q)for(X=0;X<L.length;X++){if(at=L.charCodeAt(X),!ue(at))return xe;nt=X>0?L.charCodeAt(X-1):null,Zt=Zt&&_e(at,nt)}else{for(X=0;X<L.length;X++){if(at=L.charCodeAt(X),at===z)dt=!0,wt&&(xt=xt||X-Oe-1>st&&L[Oe+1]!==" ",Oe=X);else if(!ue(at))return xe;nt=X>0?L.charCodeAt(X-1):null,Zt=Zt&&_e(at,nt)}xt=xt||wt&&X-Oe-1>st&&L[Oe+1]!==" "}return!dt&&!xt?Zt&&!it(L)?je:Ke:K>9&&Bn(L)?xe:xt?se:xn}function we(L,q,K,st){L.dump=function(){if(q.length===0)return"''";if(!L.noCompatMode&&Ie.indexOf(q)!==-1)return"'"+q+"'";var it=L.indent*Math.max(1,K),X=L.lineWidth===-1?-1:Math.max(Math.min(L.lineWidth,40),L.lineWidth-it),at=st||L.flowLevel>-1&&K>=L.flowLevel;function nt(dt){return $n(L,dt)}switch(nr(q,at,L.indent,X,nt)){case je:return q;case Ke:return"'"+q.replace(/'/g,"''")+"'";case xn:return"|"+wn(q,L.indent)+Pn(_n(q,it));case se:return">"+wn(q,L.indent)+Pn(_n(ge(q,X),it));case xe:return'"'+We(q)+'"';default:throw new _("impossible error: invalid scalar style")}}()}function wn(L,q){var K=Bn(L)?String(q):"",st=L[L.length-1]===`
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
`+L.slice(at+1):dt+=L.slice(it),dt.slice(1)}function We(L){for(var q="",K,st,it,X=0;X<L.length;X++){if(K=L.charCodeAt(X),K>=55296&&K<=56319&&(st=L.charCodeAt(X+1),st>=56320&&st<=57343)){q+=mt((K-55296)*1024+st-56320+65536),X++;continue}it=Lt[K],q+=!it&&ue(K)?L[X]:it||mt(K)}return q}function Je(L,q,K){var st="",it=L.tag,X,at;for(X=0,at=K.length;X<at;X+=1)Y(L,q,K[X],!1,!1)&&(X!==0&&(st+=","+(L.condenseFlow?"":" ")),st+=L.dump);L.tag=it,L.dump="["+st+"]"}function zn(L,q,K,st){var it="",X=L.tag,at,nt;for(at=0,nt=K.length;at<nt;at+=1)Y(L,q+1,K[at],!0,!0)&&((!st||at!==0)&&(it+=pe(L,q)),L.dump&&z===L.dump.charCodeAt(0)?it+="-":it+="- ",it+=L.dump);L.tag=X,L.dump=it||"[]"}function Xe(L,q,K){var st="",it=L.tag,X=Object.keys(K),at,nt,dt,xt,wt;for(at=0,nt=X.length;at<nt;at+=1)wt="",at!==0&&(wt+=", "),L.condenseFlow&&(wt+='"'),dt=X[at],xt=K[dt],Y(L,q,dt,!1,!1)&&(L.dump.length>1024&&(wt+="? "),wt+=L.dump+(L.condenseFlow?'"':"")+":"+(L.condenseFlow?"":" "),Y(L,q,xt,!1,!1)&&(wt+=L.dump,st+=wt));L.tag=it,L.dump="{"+st+"}"}function rr(L,q,K,st){var it="",X=L.tag,at=Object.keys(K),nt,dt,xt,wt,Oe,Zt;if(L.sortKeys===!0)at.sort();else if(typeof L.sortKeys=="function")at.sort(L.sortKeys);else if(L.sortKeys)throw new _("sortKeys must be a boolean or a function");for(nt=0,dt=at.length;nt<dt;nt+=1)Zt="",(!st||nt!==0)&&(Zt+=pe(L,q)),xt=at[nt],wt=K[xt],Y(L,q+1,xt,!0,!0,!0)&&(Oe=L.tag!==null&&L.tag!=="?"||L.dump&&L.dump.length>1024,Oe&&(L.dump&&z===L.dump.charCodeAt(0)?Zt+="?":Zt+="? "),Zt+=L.dump,Oe&&(Zt+=pe(L,q)),Y(L,q+1,wt,!0,Oe)&&(L.dump&&z===L.dump.charCodeAt(0)?Zt+=":":Zt+=": ",Zt+=L.dump,it+=Zt));L.tag=X,L.dump=it||"{}"}function S(L,q,K){var st,it,X,at,nt,dt;for(it=K?L.explicitTypes:L.implicitTypes,X=0,at=it.length;X<at;X+=1)if(nt=it[X],(nt.instanceOf||nt.predicate)&&(!nt.instanceOf||typeof q=="object"&&q instanceof nt.instanceOf)&&(!nt.predicate||nt.predicate(q))){if(L.tag=K?nt.tag:"?",nt.represent){if(dt=L.styleMap[nt.tag]||nt.defaultStyle,N.call(nt.represent)==="[object Function]")st=nt.represent(q,dt);else if(D.call(nt.represent,dt))st=nt.represent[dt](q,dt);else throw new _("!<"+nt.tag+'> tag resolver accepts not "'+dt+'" style');L.dump=st}return!0}return!1}function Y(L,q,K,st,it,X){L.tag=null,L.dump=K,S(L,K,!1)||S(L,K,!0);var at=N.call(L.dump);st&&(st=L.flowLevel<0||L.flowLevel>q);var nt=at==="[object Object]"||at==="[object Array]",dt,xt;if(nt&&(dt=L.duplicates.indexOf(K),xt=dt!==-1),(L.tag!==null&&L.tag!=="?"||xt||L.indent!==2&&q>0)&&(it=!1),xt&&L.usedDuplicates[dt])L.dump="*ref_"+dt;else{if(nt&&xt&&!L.usedDuplicates[dt]&&(L.usedDuplicates[dt]=!0),at==="[object Object]")st&&Object.keys(L.dump).length!==0?(rr(L,q,L.dump,it),xt&&(L.dump="&ref_"+dt+L.dump)):(Xe(L,q,L.dump),xt&&(L.dump="&ref_"+dt+" "+L.dump));else if(at==="[object Array]"){var wt=L.noArrayIndent&&q>0?q-1:q;st&&L.dump.length!==0?(zn(L,wt,L.dump,it),xt&&(L.dump="&ref_"+dt+L.dump)):(Je(L,wt,L.dump),xt&&(L.dump="&ref_"+dt+" "+L.dump))}else if(at==="[object String]")L.tag!=="?"&&we(L,L.dump,q,X);else{if(L.skipInvalid)return!1;throw new _("unacceptable kind of an object to dump "+at)}L.tag!==null&&L.tag!=="?"&&(L.dump="!<"+L.tag+"> "+L.dump)}return!0}function Q(L,q){var K=[],st=[],it,X;for(ut(L,K,st),it=0,X=st.length;it<X;it+=1)q.duplicates.push(K[st[it]]);q.usedDuplicates=new Array(X)}function ut(L,q,K){var st,it,X;if(L!==null&&typeof L=="object")if(it=q.indexOf(L),it!==-1)K.indexOf(it)===-1&&K.push(it);else if(q.push(L),Array.isArray(L))for(it=0,X=L.length;it<X;it+=1)ut(L[it],q,K);else for(st=Object.keys(L),it=0,X=st.length;it<X;it+=1)ut(L[st[it]],q,K)}function et(L,q){q=q||{};var K=new ee(q);return K.noRefs||Q(L,K),Y(K,0,L,!0,!0)?K.dump+`
`:""}function ct(L,q){return et(L,v.extend({schema:I},q))}s.exports.dump=et,s.exports.safeDump=ct},{"./common":3,"./exception":5,"./schema/default_full":10,"./schema/default_safe":11}],5:[function(m,s,d){function v(_,k){Error.call(this),this.name="YAMLException",this.reason=_,this.mark=k,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}v.prototype=Object.create(Error.prototype),v.prototype.constructor=v,v.prototype.toString=function(k){var I=this.name+": ";return I+=this.reason||"(unknown reason)",!k&&this.mark&&(I+=" "+this.mark.toString()),I},s.exports=v},{}],6:[function(m,s,d){var v=m("./common"),_=m("./exception"),k=m("./mark"),I=m("./schema/default_safe"),N=m("./schema/default_full"),D=Object.prototype.hasOwnProperty,F=1,z=2,$=3,V=4,W=1,ot=2,lt=3,bt=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ft=/[\x85\u2028\u2029]/,Tt=/[,\[\]\{\}]/,Dt=/^(?:!|!!|![a-z\-]+!)$/i,Ht=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Ft(S){return Object.prototype.toString.call(S)}function Bt(S){return S===10||S===13}function Wt(S){return S===9||S===32}function Pt(S){return S===9||S===32||S===10||S===13}function de(S){return S===44||S===91||S===93||S===123||S===125}function er(S){var Y;return 48<=S&&S<=57?S-48:(Y=S|32,97<=Y&&Y<=102?Y-97+10:-1)}function Ln(S){return S===120?2:S===117?4:S===85?8:0}function Mn(S){return 48<=S&&S<=57?S-48:-1}function Dn(S){return S===48?"\0":S===97?"\x07":S===98?"\b":S===116||S===9?"	":S===110?`
`:S===118?"\v":S===102?"\f":S===114?"\r":S===101?"\x1B":S===32?" ":S===34?'"':S===47?"/":S===92?"\\":S===78?"":S===95?" ":S===76?"\u2028":S===80?"\u2029":""}function vn(S){return S<=65535?String.fromCharCode(S):String.fromCharCode((S-65536>>10)+55296,(S-65536&1023)+56320)}for(var Rn=new Array(256),yn=new Array(256),Lt=0;Lt<256;Lt++)Rn[Lt]=Dn(Lt)?1:0,yn[Lt]=Dn(Lt);function Ie(S,Y){this.input=S,this.filename=Y.filename||null,this.schema=Y.schema||N,this.onWarning=Y.onWarning||null,this.legacy=Y.legacy||!1,this.json=Y.json||!1,this.listener=Y.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=S.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function Fn(S,Y){return new _(Y,new k(S.filename,S.input,S.position,S.line,S.position-S.lineStart))}function mt(S,Y){throw Fn(S,Y)}function ee(S,Y){S.onWarning&&S.onWarning.call(null,Fn(S,Y))}var _n={YAML:function(Y,Q,ut){var et,ct,L;Y.version!==null&&mt(Y,"duplication of %YAML directive"),ut.length!==1&&mt(Y,"YAML directive accepts exactly one argument"),et=/^([0-9]+)\.([0-9]+)$/.exec(ut[0]),et===null&&mt(Y,"ill-formed argument of the YAML directive"),ct=parseInt(et[1],10),L=parseInt(et[2],10),ct!==1&&mt(Y,"unacceptable YAML version of the document"),Y.version=ut[0],Y.checkLineBreaks=L<2,L!==1&&L!==2&&ee(Y,"unsupported YAML version of the document")},TAG:function(Y,Q,ut){var et,ct;ut.length!==2&&mt(Y,"TAG directive accepts exactly two arguments"),et=ut[0],ct=ut[1],Dt.test(et)||mt(Y,"ill-formed tag handle (first argument) of the TAG directive"),D.call(Y.tagMap,et)&&mt(Y,'there is a previously declared suffix for "'+et+'" tag handle'),Ht.test(ct)||mt(Y,"ill-formed tag prefix (second argument) of the TAG directive"),Y.tagMap[et]=ct}};function pe(S,Y,Q,ut){var et,ct,L,q;if(Y<Q){if(q=S.input.slice(Y,Q),ut)for(et=0,ct=q.length;et<ct;et+=1)L=q.charCodeAt(et),L===9||32<=L&&L<=1114111||mt(S,"expected valid JSON character");else bt.test(q)&&mt(S,"the stream contains non-printable characters");S.result+=q}}function $n(S,Y,Q,ut){var et,ct,L,q;for(v.isObject(Q)||mt(S,"cannot merge mappings; the provided source object is unacceptable"),et=Object.keys(Q),L=0,q=et.length;L<q;L+=1)ct=et[L],D.call(Y,ct)||(Y[ct]=Q[ct],ut[ct]=!0)}function ne(S,Y,Q,ut,et,ct,L,q){var K,st;if(Array.isArray(et))for(et=Array.prototype.slice.call(et),K=0,st=et.length;K<st;K+=1)Array.isArray(et[K])&&mt(S,"nested arrays are not supported inside keys"),typeof et=="object"&&Ft(et[K])==="[object Object]"&&(et[K]="[object Object]");if(typeof et=="object"&&Ft(et)==="[object Object]"&&(et="[object Object]"),et=String(et),Y===null&&(Y={}),ut==="tag:yaml.org,2002:merge")if(Array.isArray(ct))for(K=0,st=ct.length;K<st;K+=1)$n(S,Y,ct[K],Q);else $n(S,Y,ct,Q);else!S.json&&!D.call(Q,et)&&D.call(Y,et)&&(S.line=L||S.line,S.position=q||S.position,mt(S,"duplicated mapping key")),Y[et]=ct,delete Q[et];return Y}function ue(S){var Y;Y=S.input.charCodeAt(S.position),Y===10?S.position++:Y===13?(S.position++,S.input.charCodeAt(S.position)===10&&S.position++):mt(S,"a line break is expected"),S.line+=1,S.lineStart=S.position}function Gt(S,Y,Q){for(var ut=0,et=S.input.charCodeAt(S.position);et!==0;){for(;Wt(et);)et=S.input.charCodeAt(++S.position);if(Y&&et===35)do et=S.input.charCodeAt(++S.position);while(et!==10&&et!==13&&et!==0);if(Bt(et))for(ue(S),et=S.input.charCodeAt(S.position),ut++,S.lineIndent=0;et===32;)S.lineIndent++,et=S.input.charCodeAt(++S.position);else break}return Q!==-1&&ut!==0&&S.lineIndent<Q&&ee(S,"deficient indentation"),ut}function _e(S){var Y=S.position,Q;return Q=S.input.charCodeAt(Y),!!((Q===45||Q===46)&&Q===S.input.charCodeAt(Y+1)&&Q===S.input.charCodeAt(Y+2)&&(Y+=3,Q=S.input.charCodeAt(Y),Q===0||Pt(Q)))}function Pe(S,Y){Y===1?S.result+=" ":Y>1&&(S.result+=v.repeat(`
`,Y-1))}function Bn(S,Y,Q){var ut,et,ct,L,q,K,st,it,X=S.kind,at=S.result,nt;if(nt=S.input.charCodeAt(S.position),Pt(nt)||de(nt)||nt===35||nt===38||nt===42||nt===33||nt===124||nt===62||nt===39||nt===34||nt===37||nt===64||nt===96||(nt===63||nt===45)&&(et=S.input.charCodeAt(S.position+1),Pt(et)||Q&&de(et)))return!1;for(S.kind="scalar",S.result="",ct=L=S.position,q=!1;nt!==0;){if(nt===58){if(et=S.input.charCodeAt(S.position+1),Pt(et)||Q&&de(et))break}else if(nt===35){if(ut=S.input.charCodeAt(S.position-1),Pt(ut))break}else{if(S.position===S.lineStart&&_e(S)||Q&&de(nt))break;if(Bt(nt))if(K=S.line,st=S.lineStart,it=S.lineIndent,Gt(S,!1,-1),S.lineIndent>=Y){q=!0,nt=S.input.charCodeAt(S.position);continue}else{S.position=L,S.line=K,S.lineStart=st,S.lineIndent=it;break}}q&&(pe(S,ct,L,!1),Pe(S,S.line-K),ct=L=S.position,q=!1),Wt(nt)||(L=S.position+1),nt=S.input.charCodeAt(++S.position)}return pe(S,ct,L,!1),S.result?!0:(S.kind=X,S.result=at,!1)}function je(S,Y){var Q,ut,et;if(Q=S.input.charCodeAt(S.position),Q!==39)return!1;for(S.kind="scalar",S.result="",S.position++,ut=et=S.position;(Q=S.input.charCodeAt(S.position))!==0;)if(Q===39)if(pe(S,ut,S.position,!0),Q=S.input.charCodeAt(++S.position),Q===39)ut=S.position,S.position++,et=S.position;else return!0;else Bt(Q)?(pe(S,ut,et,!0),Pe(S,Gt(S,!1,Y)),ut=et=S.position):S.position===S.lineStart&&_e(S)?mt(S,"unexpected end of the document within a single quoted scalar"):(S.position++,et=S.position);mt(S,"unexpected end of the stream within a single quoted scalar")}function Ke(S,Y){var Q,ut,et,ct,L,q;if(q=S.input.charCodeAt(S.position),q!==34)return!1;for(S.kind="scalar",S.result="",S.position++,Q=ut=S.position;(q=S.input.charCodeAt(S.position))!==0;){if(q===34)return pe(S,Q,S.position,!0),S.position++,!0;if(q===92){if(pe(S,Q,S.position,!0),q=S.input.charCodeAt(++S.position),Bt(q))Gt(S,!1,Y);else if(q<256&&Rn[q])S.result+=yn[q],S.position++;else if((L=Ln(q))>0){for(et=L,ct=0;et>0;et--)q=S.input.charCodeAt(++S.position),(L=er(q))>=0?ct=(ct<<4)+L:mt(S,"expected hexadecimal character");S.result+=vn(ct),S.position++}else mt(S,"unknown escape sequence");Q=ut=S.position}else Bt(q)?(pe(S,Q,ut,!0),Pe(S,Gt(S,!1,Y)),Q=ut=S.position):S.position===S.lineStart&&_e(S)?mt(S,"unexpected end of the document within a double quoted scalar"):(S.position++,ut=S.position)}mt(S,"unexpected end of the stream within a double quoted scalar")}function xn(S,Y){var Q=!0,ut,et=S.tag,ct,L=S.anchor,q,K,st,it,X,at={},nt,dt,xt,wt;if(wt=S.input.charCodeAt(S.position),wt===91)K=93,X=!1,ct=[];else if(wt===123)K=125,X=!0,ct={};else return!1;for(S.anchor!==null&&(S.anchorMap[S.anchor]=ct),wt=S.input.charCodeAt(++S.position);wt!==0;){if(Gt(S,!0,Y),wt=S.input.charCodeAt(S.position),wt===K)return S.position++,S.tag=et,S.anchor=L,S.kind=X?"mapping":"sequence",S.result=ct,!0;Q||mt(S,"missed comma between flow collection entries"),dt=nt=xt=null,st=it=!1,wt===63&&(q=S.input.charCodeAt(S.position+1),Pt(q)&&(st=it=!0,S.position++,Gt(S,!0,Y))),ut=S.line,ge(S,Y,F,!1,!0),dt=S.tag,nt=S.result,Gt(S,!0,Y),wt=S.input.charCodeAt(S.position),(it||S.line===ut)&&wt===58&&(st=!0,wt=S.input.charCodeAt(++S.position),Gt(S,!0,Y),ge(S,Y,F,!1,!0),xt=S.result),X?ne(S,ct,at,dt,nt,xt):st?ct.push(ne(S,null,at,dt,nt,xt)):ct.push(nt),Gt(S,!0,Y),wt=S.input.charCodeAt(S.position),wt===44?(Q=!0,wt=S.input.charCodeAt(++S.position)):Q=!1}mt(S,"unexpected end of the stream within a flow collection")}function se(S,Y){var Q,ut,et=W,ct=!1,L=!1,q=Y,K=0,st=!1,it,X;if(X=S.input.charCodeAt(S.position),X===124)ut=!1;else if(X===62)ut=!0;else return!1;for(S.kind="scalar",S.result="";X!==0;)if(X=S.input.charCodeAt(++S.position),X===43||X===45)W===et?et=X===43?lt:ot:mt(S,"repeat of a chomping mode identifier");else if((it=Mn(X))>=0)it===0?mt(S,"bad explicit indentation width of a block scalar; it cannot be less than one"):L?mt(S,"repeat of an indentation width identifier"):(q=Y+it-1,L=!0);else break;if(Wt(X)){do X=S.input.charCodeAt(++S.position);while(Wt(X));if(X===35)do X=S.input.charCodeAt(++S.position);while(!Bt(X)&&X!==0)}for(;X!==0;){for(ue(S),S.lineIndent=0,X=S.input.charCodeAt(S.position);(!L||S.lineIndent<q)&&X===32;)S.lineIndent++,X=S.input.charCodeAt(++S.position);if(!L&&S.lineIndent>q&&(q=S.lineIndent),Bt(X)){K++;continue}if(S.lineIndent<q){et===lt?S.result+=v.repeat(`
`,ct?1+K:K):et===W&&ct&&(S.result+=`
`);break}for(ut?Wt(X)?(st=!0,S.result+=v.repeat(`
`,ct?1+K:K)):st?(st=!1,S.result+=v.repeat(`
`,K+1)):K===0?ct&&(S.result+=" "):S.result+=v.repeat(`
`,K):S.result+=v.repeat(`
`,ct?1+K:K),ct=!0,L=!0,K=0,Q=S.position;!Bt(X)&&X!==0;)X=S.input.charCodeAt(++S.position);pe(S,Q,S.position,!1)}return!0}function xe(S,Y){var Q,ut=S.tag,et=S.anchor,ct=[],L,q=!1,K;for(S.anchor!==null&&(S.anchorMap[S.anchor]=ct),K=S.input.charCodeAt(S.position);K!==0&&!(K!==45||(L=S.input.charCodeAt(S.position+1),!Pt(L)));){if(q=!0,S.position++,Gt(S,!0,-1)&&S.lineIndent<=Y){ct.push(null),K=S.input.charCodeAt(S.position);continue}if(Q=S.line,ge(S,Y,$,!1,!0),ct.push(S.result),Gt(S,!0,-1),K=S.input.charCodeAt(S.position),(S.line===Q||S.lineIndent>Y)&&K!==0)mt(S,"bad indentation of a sequence entry");else if(S.lineIndent<Y)break}return q?(S.tag=ut,S.anchor=et,S.kind="sequence",S.result=ct,!0):!1}function nr(S,Y,Q){var ut,et,ct,L,q=S.tag,K=S.anchor,st={},it={},X=null,at=null,nt=null,dt=!1,xt=!1,wt;for(S.anchor!==null&&(S.anchorMap[S.anchor]=st),wt=S.input.charCodeAt(S.position);wt!==0;){if(ut=S.input.charCodeAt(S.position+1),ct=S.line,L=S.position,(wt===63||wt===58)&&Pt(ut))wt===63?(dt&&(ne(S,st,it,X,at,null),X=at=nt=null),xt=!0,dt=!0,et=!0):dt?(dt=!1,et=!0):mt(S,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),S.position+=1,wt=ut;else if(ge(S,Q,z,!1,!0))if(S.line===ct){for(wt=S.input.charCodeAt(S.position);Wt(wt);)wt=S.input.charCodeAt(++S.position);if(wt===58)wt=S.input.charCodeAt(++S.position),Pt(wt)||mt(S,"a whitespace character is expected after the key-value separator within a block mapping"),dt&&(ne(S,st,it,X,at,null),X=at=nt=null),xt=!0,dt=!1,et=!1,X=S.tag,at=S.result;else if(xt)mt(S,"can not read an implicit mapping pair; a colon is missed");else return S.tag=q,S.anchor=K,!0}else if(xt)mt(S,"can not read a block mapping entry; a multiline key may not be an implicit key");else return S.tag=q,S.anchor=K,!0;else break;if((S.line===ct||S.lineIndent>Y)&&(ge(S,Y,V,!0,et)&&(dt?at=S.result:nt=S.result),dt||(ne(S,st,it,X,at,nt,ct,L),X=at=nt=null),Gt(S,!0,-1),wt=S.input.charCodeAt(S.position)),S.lineIndent>Y&&wt!==0)mt(S,"bad indentation of a mapping entry");else if(S.lineIndent<Y)break}return dt&&ne(S,st,it,X,at,null),xt&&(S.tag=q,S.anchor=K,S.kind="mapping",S.result=st),xt}function we(S){var Y,Q=!1,ut=!1,et,ct,L;if(L=S.input.charCodeAt(S.position),L!==33)return!1;if(S.tag!==null&&mt(S,"duplication of a tag property"),L=S.input.charCodeAt(++S.position),L===60?(Q=!0,L=S.input.charCodeAt(++S.position)):L===33?(ut=!0,et="!!",L=S.input.charCodeAt(++S.position)):et="!",Y=S.position,Q){do L=S.input.charCodeAt(++S.position);while(L!==0&&L!==62);S.position<S.length?(ct=S.input.slice(Y,S.position),L=S.input.charCodeAt(++S.position)):mt(S,"unexpected end of the stream within a verbatim tag")}else{for(;L!==0&&!Pt(L);)L===33&&(ut?mt(S,"tag suffix cannot contain exclamation marks"):(et=S.input.slice(Y-1,S.position+1),Dt.test(et)||mt(S,"named tag handle cannot contain such characters"),ut=!0,Y=S.position+1)),L=S.input.charCodeAt(++S.position);ct=S.input.slice(Y,S.position),Tt.test(ct)&&mt(S,"tag suffix cannot contain flow indicator characters")}return ct&&!Ht.test(ct)&&mt(S,"tag name cannot contain such characters: "+ct),Q?S.tag=ct:D.call(S.tagMap,et)?S.tag=S.tagMap[et]+ct:et==="!"?S.tag="!"+ct:et==="!!"?S.tag="tag:yaml.org,2002:"+ct:mt(S,'undeclared tag handle "'+et+'"'),!0}function wn(S){var Y,Q;if(Q=S.input.charCodeAt(S.position),Q!==38)return!1;for(S.anchor!==null&&mt(S,"duplication of an anchor property"),Q=S.input.charCodeAt(++S.position),Y=S.position;Q!==0&&!Pt(Q)&&!de(Q);)Q=S.input.charCodeAt(++S.position);return S.position===Y&&mt(S,"name of an anchor node must contain at least one character"),S.anchor=S.input.slice(Y,S.position),!0}function Pn(S){var Y,Q,ut;if(ut=S.input.charCodeAt(S.position),ut!==42)return!1;for(ut=S.input.charCodeAt(++S.position),Y=S.position;ut!==0&&!Pt(ut)&&!de(ut);)ut=S.input.charCodeAt(++S.position);return S.position===Y&&mt(S,"name of an alias node must contain at least one character"),Q=S.input.slice(Y,S.position),D.call(S.anchorMap,Q)||mt(S,'unidentified alias "'+Q+'"'),S.result=S.anchorMap[Q],Gt(S,!0,-1),!0}function ge(S,Y,Q,ut,et){var ct,L,q,K=1,st=!1,it=!1,X,at,nt,dt,xt;if(S.listener!==null&&S.listener("open",S),S.tag=null,S.anchor=null,S.kind=null,S.result=null,ct=L=q=V===Q||$===Q,ut&&Gt(S,!0,-1)&&(st=!0,S.lineIndent>Y?K=1:S.lineIndent===Y?K=0:S.lineIndent<Y&&(K=-1)),K===1)for(;we(S)||wn(S);)Gt(S,!0,-1)?(st=!0,q=ct,S.lineIndent>Y?K=1:S.lineIndent===Y?K=0:S.lineIndent<Y&&(K=-1)):q=!1;if(q&&(q=st||et),(K===1||V===Q)&&(F===Q||z===Q?dt=Y:dt=Y+1,xt=S.position-S.lineStart,K===1?q&&(xe(S,xt)||nr(S,xt,dt))||xn(S,dt)?it=!0:(L&&se(S,dt)||je(S,dt)||Ke(S,dt)?it=!0:Pn(S)?(it=!0,(S.tag!==null||S.anchor!==null)&&mt(S,"alias node should not have any properties")):Bn(S,dt,F===Q)&&(it=!0,S.tag===null&&(S.tag="?")),S.anchor!==null&&(S.anchorMap[S.anchor]=S.result)):K===0&&(it=q&&xe(S,xt))),S.tag!==null&&S.tag!=="!")if(S.tag==="?"){for(S.result!==null&&S.kind!=="scalar"&&mt(S,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+S.kind+'"'),X=0,at=S.implicitTypes.length;X<at;X+=1)if(nt=S.implicitTypes[X],nt.resolve(S.result)){S.result=nt.construct(S.result),S.tag=nt.tag,S.anchor!==null&&(S.anchorMap[S.anchor]=S.result);break}}else D.call(S.typeMap[S.kind||"fallback"],S.tag)?(nt=S.typeMap[S.kind||"fallback"][S.tag],S.result!==null&&nt.kind!==S.kind&&mt(S,"unacceptable node kind for !<"+S.tag+'> tag; it should be "'+nt.kind+'", not "'+S.kind+'"'),nt.resolve(S.result)?(S.result=nt.construct(S.result),S.anchor!==null&&(S.anchorMap[S.anchor]=S.result)):mt(S,"cannot resolve a node with !<"+S.tag+"> explicit tag")):mt(S,"unknown tag !<"+S.tag+">");return S.listener!==null&&S.listener("close",S),S.tag!==null||S.anchor!==null||it}function oe(S){var Y=S.position,Q,ut,et,ct=!1,L;for(S.version=null,S.checkLineBreaks=S.legacy,S.tagMap={},S.anchorMap={};(L=S.input.charCodeAt(S.position))!==0&&(Gt(S,!0,-1),L=S.input.charCodeAt(S.position),!(S.lineIndent>0||L!==37));){for(ct=!0,L=S.input.charCodeAt(++S.position),Q=S.position;L!==0&&!Pt(L);)L=S.input.charCodeAt(++S.position);for(ut=S.input.slice(Q,S.position),et=[],ut.length<1&&mt(S,"directive name must not be less than one character in length");L!==0;){for(;Wt(L);)L=S.input.charCodeAt(++S.position);if(L===35){do L=S.input.charCodeAt(++S.position);while(L!==0&&!Bt(L));break}if(Bt(L))break;for(Q=S.position;L!==0&&!Pt(L);)L=S.input.charCodeAt(++S.position);et.push(S.input.slice(Q,S.position))}L!==0&&ue(S),D.call(_n,ut)?_n[ut](S,ut,et):ee(S,'unknown document directive "'+ut+'"')}if(Gt(S,!0,-1),S.lineIndent===0&&S.input.charCodeAt(S.position)===45&&S.input.charCodeAt(S.position+1)===45&&S.input.charCodeAt(S.position+2)===45?(S.position+=3,Gt(S,!0,-1)):ct&&mt(S,"directives end mark is expected"),ge(S,S.lineIndent-1,V,!1,!0),Gt(S,!0,-1),S.checkLineBreaks&&ft.test(S.input.slice(Y,S.position))&&ee(S,"non-ASCII line breaks are interpreted as content"),S.documents.push(S.result),S.position===S.lineStart&&_e(S)){S.input.charCodeAt(S.position)===46&&(S.position+=3,Gt(S,!0,-1));return}if(S.position<S.length-1)mt(S,"end of the stream or a document separator is expected");else return}function We(S,Y){S=String(S),Y=Y||{},S.length!==0&&(S.charCodeAt(S.length-1)!==10&&S.charCodeAt(S.length-1)!==13&&(S+=`
`),S.charCodeAt(0)===65279&&(S=S.slice(1)));var Q=new Ie(S,Y),ut=S.indexOf("\0");for(ut!==-1&&(Q.position=ut,mt(Q,"null byte is not allowed in input")),Q.input+="\0";Q.input.charCodeAt(Q.position)===32;)Q.lineIndent+=1,Q.position+=1;for(;Q.position<Q.length-1;)oe(Q);return Q.documents}function Je(S,Y,Q){Y!==null&&typeof Y=="object"&&typeof Q>"u"&&(Q=Y,Y=null);var ut=We(S,Q);if(typeof Y!="function")return ut;for(var et=0,ct=ut.length;et<ct;et+=1)Y(ut[et])}function zn(S,Y){var Q=We(S,Y);if(Q.length!==0){if(Q.length===1)return Q[0];throw new _("expected a single document in the stream, but found more")}}function Xe(S,Y,Q){return typeof Y=="object"&&Y!==null&&typeof Q>"u"&&(Q=Y,Y=null),Je(S,Y,v.extend({schema:I},Q))}function rr(S,Y){return zn(S,v.extend({schema:I},Y))}s.exports.loadAll=Je,s.exports.load=zn,s.exports.safeLoadAll=Xe,s.exports.safeLoad=rr},{"./common":3,"./exception":5,"./mark":7,"./schema/default_full":10,"./schema/default_safe":11}],7:[function(m,s,d){var v=m("./common");function _(k,I,N,D,F){this.name=k,this.buffer=I,this.position=N,this.line=D,this.column=F}_.prototype.getSnippet=function(I,N){var D,F,z,$,V;if(!this.buffer)return null;for(I=I||4,N=N||75,D="",F=this.position;F>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(F-1))===-1;)if(F-=1,this.position-F>N/2-1){D=" ... ",F+=5;break}for(z="",$=this.position;$<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt($))===-1;)if($+=1,$-this.position>N/2-1){z=" ... ",$-=5;break}return V=this.buffer.slice(F,$),v.repeat(" ",I)+D+V+z+`
`+v.repeat(" ",I+this.position-F+D.length)+"^"},_.prototype.toString=function(I){var N,D="";return this.name&&(D+='in "'+this.name+'" '),D+="at line "+(this.line+1)+", column "+(this.column+1),I||(N=this.getSnippet(),N&&(D+=`:
`+N)),D},s.exports=_},{"./common":3}],8:[function(m,s,d){var v=m("./common"),_=m("./exception"),k=m("./type");function I(F,z,$){var V=[];return F.include.forEach(function(W){$=I(W,z,$)}),F[z].forEach(function(W){$.forEach(function(ot,lt){ot.tag===W.tag&&ot.kind===W.kind&&V.push(lt)}),$.push(W)}),$.filter(function(W,ot){return V.indexOf(ot)===-1})}function N(){var F={scalar:{},sequence:{},mapping:{},fallback:{}},z,$;function V(W){F[W.kind][W.tag]=F.fallback[W.tag]=W}for(z=0,$=arguments.length;z<$;z+=1)arguments[z].forEach(V);return F}function D(F){this.include=F.include||[],this.implicit=F.implicit||[],this.explicit=F.explicit||[],this.implicit.forEach(function(z){if(z.loadKind&&z.loadKind!=="scalar")throw new _("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=I(this,"implicit",[]),this.compiledExplicit=I(this,"explicit",[]),this.compiledTypeMap=N(this.compiledImplicit,this.compiledExplicit)}D.DEFAULT=null,D.create=function(){var z,$;switch(arguments.length){case 1:z=D.DEFAULT,$=arguments[0];break;case 2:z=arguments[0],$=arguments[1];break;default:throw new _("Wrong number of arguments for Schema.create function")}if(z=v.toArray(z),$=v.toArray($),!z.every(function(V){return V instanceof D}))throw new _("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!$.every(function(V){return V instanceof k}))throw new _("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new D({include:z,explicit:$})},s.exports=D},{"./common":3,"./exception":5,"./type":14}],9:[function(m,s,d){var v=m("../schema");s.exports=new v({include:[m("./json")]})},{"../schema":8,"./json":13}],10:[function(m,s,d){var v=m("../schema");s.exports=v.DEFAULT=new v({include:[m("./default_safe")],explicit:[m("../type/js/undefined"),m("../type/js/regexp"),m("../type/js/function")]})},{"../schema":8,"../type/js/function":19,"../type/js/regexp":20,"../type/js/undefined":21,"./default_safe":11}],11:[function(m,s,d){var v=m("../schema");s.exports=new v({include:[m("./core")],implicit:[m("../type/timestamp"),m("../type/merge")],explicit:[m("../type/binary"),m("../type/omap"),m("../type/pairs"),m("../type/set")]})},{"../schema":8,"../type/binary":15,"../type/merge":23,"../type/omap":25,"../type/pairs":26,"../type/set":28,"../type/timestamp":30,"./core":9}],12:[function(m,s,d){var v=m("../schema");s.exports=new v({explicit:[m("../type/str"),m("../type/seq"),m("../type/map")]})},{"../schema":8,"../type/map":22,"../type/seq":27,"../type/str":29}],13:[function(m,s,d){var v=m("../schema");s.exports=new v({include:[m("./failsafe")],implicit:[m("../type/null"),m("../type/bool"),m("../type/int"),m("../type/float")]})},{"../schema":8,"../type/bool":16,"../type/float":17,"../type/int":18,"../type/null":24,"./failsafe":12}],14:[function(m,s,d){var v=m("./exception"),_=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],k=["scalar","sequence","mapping"];function I(D){var F={};return D!==null&&Object.keys(D).forEach(function(z){D[z].forEach(function($){F[String($)]=z})}),F}function N(D,F){if(F=F||{},Object.keys(F).forEach(function(z){if(_.indexOf(z)===-1)throw new v('Unknown option "'+z+'" is met in definition of "'+D+'" YAML type.')}),this.tag=D,this.kind=F.kind||null,this.resolve=F.resolve||function(){return!0},this.construct=F.construct||function(z){return z},this.instanceOf=F.instanceOf||null,this.predicate=F.predicate||null,this.represent=F.represent||null,this.defaultStyle=F.defaultStyle||null,this.styleAliases=I(F.styleAliases||null),k.indexOf(this.kind)===-1)throw new v('Unknown kind "'+this.kind+'" is specified for "'+D+'" YAML type.')}s.exports=N},{"./exception":5}],15:[function(m,s,d){var v;try{var _=m;v=_("buffer").Buffer}catch{}var k=m("../type"),I=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function N($){if($===null)return!1;var V,W,ot=0,lt=$.length,bt=I;for(W=0;W<lt;W++)if(V=bt.indexOf($.charAt(W)),!(V>64)){if(V<0)return!1;ot+=6}return ot%8===0}function D($){var V,W,ot=$.replace(/[\r\n=]/g,""),lt=ot.length,bt=I,ft=0,Tt=[];for(V=0;V<lt;V++)V%4===0&&V&&(Tt.push(ft>>16&255),Tt.push(ft>>8&255),Tt.push(ft&255)),ft=ft<<6|bt.indexOf(ot.charAt(V));return W=lt%4*6,W===0?(Tt.push(ft>>16&255),Tt.push(ft>>8&255),Tt.push(ft&255)):W===18?(Tt.push(ft>>10&255),Tt.push(ft>>2&255)):W===12&&Tt.push(ft>>4&255),v?v.from?v.from(Tt):new v(Tt):Tt}function F($){var V="",W=0,ot,lt,bt=$.length,ft=I;for(ot=0;ot<bt;ot++)ot%3===0&&ot&&(V+=ft[W>>18&63],V+=ft[W>>12&63],V+=ft[W>>6&63],V+=ft[W&63]),W=(W<<8)+$[ot];return lt=bt%3,lt===0?(V+=ft[W>>18&63],V+=ft[W>>12&63],V+=ft[W>>6&63],V+=ft[W&63]):lt===2?(V+=ft[W>>10&63],V+=ft[W>>4&63],V+=ft[W<<2&63],V+=ft[64]):lt===1&&(V+=ft[W>>2&63],V+=ft[W<<4&63],V+=ft[64],V+=ft[64]),V}function z($){return v&&v.isBuffer($)}s.exports=new k("tag:yaml.org,2002:binary",{kind:"scalar",resolve:N,construct:D,predicate:z,represent:F})},{"../type":14}],16:[function(m,s,d){var v=m("../type");function _(N){if(N===null)return!1;var D=N.length;return D===4&&(N==="true"||N==="True"||N==="TRUE")||D===5&&(N==="false"||N==="False"||N==="FALSE")}function k(N){return N==="true"||N==="True"||N==="TRUE"}function I(N){return Object.prototype.toString.call(N)==="[object Boolean]"}s.exports=new v("tag:yaml.org,2002:bool",{kind:"scalar",resolve:_,construct:k,predicate:I,represent:{lowercase:function(N){return N?"true":"false"},uppercase:function(N){return N?"TRUE":"FALSE"},camelcase:function(N){return N?"True":"False"}},defaultStyle:"lowercase"})},{"../type":14}],17:[function(m,s,d){var v=m("../common"),_=m("../type"),k=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function I($){return!($===null||!k.test($)||$[$.length-1]==="_")}function N($){var V,W,ot,lt;return V=$.replace(/_/g,"").toLowerCase(),W=V[0]==="-"?-1:1,lt=[],"+-".indexOf(V[0])>=0&&(V=V.slice(1)),V===".inf"?W===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:V===".nan"?NaN:V.indexOf(":")>=0?(V.split(":").forEach(function(bt){lt.unshift(parseFloat(bt,10))}),V=0,ot=1,lt.forEach(function(bt){V+=bt*ot,ot*=60}),W*V):W*parseFloat(V,10)}var D=/^[-+]?[0-9]+e/;function F($,V){var W;if(isNaN($))switch(V){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===$)switch(V){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===$)switch(V){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(v.isNegativeZero($))return"-0.0";return W=$.toString(10),D.test(W)?W.replace("e",".e"):W}function z($){return Object.prototype.toString.call($)==="[object Number]"&&($%1!==0||v.isNegativeZero($))}s.exports=new _("tag:yaml.org,2002:float",{kind:"scalar",resolve:I,construct:N,predicate:z,represent:F,defaultStyle:"lowercase"})},{"../common":3,"../type":14}],18:[function(m,s,d){var v=m("../common"),_=m("../type");function k($){return 48<=$&&$<=57||65<=$&&$<=70||97<=$&&$<=102}function I($){return 48<=$&&$<=55}function N($){return 48<=$&&$<=57}function D($){if($===null)return!1;var V=$.length,W=0,ot=!1,lt;if(!V)return!1;if(lt=$[W],(lt==="-"||lt==="+")&&(lt=$[++W]),lt==="0"){if(W+1===V)return!0;if(lt=$[++W],lt==="b"){for(W++;W<V;W++)if(lt=$[W],lt!=="_"){if(lt!=="0"&&lt!=="1")return!1;ot=!0}return ot&&lt!=="_"}if(lt==="x"){for(W++;W<V;W++)if(lt=$[W],lt!=="_"){if(!k($.charCodeAt(W)))return!1;ot=!0}return ot&&lt!=="_"}for(;W<V;W++)if(lt=$[W],lt!=="_"){if(!I($.charCodeAt(W)))return!1;ot=!0}return ot&&lt!=="_"}if(lt==="_")return!1;for(;W<V;W++)if(lt=$[W],lt!=="_"){if(lt===":")break;if(!N($.charCodeAt(W)))return!1;ot=!0}return!ot||lt==="_"?!1:lt!==":"?!0:/^(:[0-5]?[0-9])+$/.test($.slice(W))}function F($){var V=$,W=1,ot,lt,bt=[];return V.indexOf("_")!==-1&&(V=V.replace(/_/g,"")),ot=V[0],(ot==="-"||ot==="+")&&(ot==="-"&&(W=-1),V=V.slice(1),ot=V[0]),V==="0"?0:ot==="0"?V[1]==="b"?W*parseInt(V.slice(2),2):V[1]==="x"?W*parseInt(V,16):W*parseInt(V,8):V.indexOf(":")!==-1?(V.split(":").forEach(function(ft){bt.unshift(parseInt(ft,10))}),V=0,lt=1,bt.forEach(function(ft){V+=ft*lt,lt*=60}),W*V):W*parseInt(V,10)}function z($){return Object.prototype.toString.call($)==="[object Number]"&&$%1===0&&!v.isNegativeZero($)}s.exports=new _("tag:yaml.org,2002:int",{kind:"scalar",resolve:D,construct:F,predicate:z,represent:{binary:function($){return $>=0?"0b"+$.toString(2):"-0b"+$.toString(2).slice(1)},octal:function($){return $>=0?"0"+$.toString(8):"-0"+$.toString(8).slice(1)},decimal:function($){return $.toString(10)},hexadecimal:function($){return $>=0?"0x"+$.toString(16).toUpperCase():"-0x"+$.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},{"../common":3,"../type":14}],19:[function(m,s,d){var v;try{var _=m;v=_("esprima")}catch{typeof window<"u"&&(v=window.esprima)}var k=m("../../type");function I(z){if(z===null)return!1;try{var $="("+z+")",V=v.parse($,{range:!0});return!(V.type!=="Program"||V.body.length!==1||V.body[0].type!=="ExpressionStatement"||V.body[0].expression.type!=="ArrowFunctionExpression"&&V.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function N(z){var $="("+z+")",V=v.parse($,{range:!0}),W=[],ot;if(V.type!=="Program"||V.body.length!==1||V.body[0].type!=="ExpressionStatement"||V.body[0].expression.type!=="ArrowFunctionExpression"&&V.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return V.body[0].expression.params.forEach(function(lt){W.push(lt.name)}),ot=V.body[0].expression.body.range,V.body[0].expression.body.type==="BlockStatement"?new Function(W,$.slice(ot[0]+1,ot[1]-1)):new Function(W,"return "+$.slice(ot[0],ot[1]))}function D(z){return z.toString()}function F(z){return Object.prototype.toString.call(z)==="[object Function]"}s.exports=new k("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:I,construct:N,predicate:F,represent:D})},{"../../type":14}],20:[function(m,s,d){var v=m("../../type");function _(D){if(D===null||D.length===0)return!1;var F=D,z=/\/([gim]*)$/.exec(D),$="";return!(F[0]==="/"&&(z&&($=z[1]),$.length>3||F[F.length-$.length-1]!=="/"))}function k(D){var F=D,z=/\/([gim]*)$/.exec(D),$="";return F[0]==="/"&&(z&&($=z[1]),F=F.slice(1,F.length-$.length-1)),new RegExp(F,$)}function I(D){var F="/"+D.source+"/";return D.global&&(F+="g"),D.multiline&&(F+="m"),D.ignoreCase&&(F+="i"),F}function N(D){return Object.prototype.toString.call(D)==="[object RegExp]"}s.exports=new v("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:_,construct:k,predicate:N,represent:I})},{"../../type":14}],21:[function(m,s,d){var v=m("../../type");function _(){return!0}function k(){}function I(){return""}function N(D){return typeof D>"u"}s.exports=new v("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:_,construct:k,predicate:N,represent:I})},{"../../type":14}],22:[function(m,s,d){var v=m("../type");s.exports=new v("tag:yaml.org,2002:map",{kind:"mapping",construct:function(_){return _!==null?_:{}}})},{"../type":14}],23:[function(m,s,d){var v=m("../type");function _(k){return k==="<<"||k===null}s.exports=new v("tag:yaml.org,2002:merge",{kind:"scalar",resolve:_})},{"../type":14}],24:[function(m,s,d){var v=m("../type");function _(N){if(N===null)return!0;var D=N.length;return D===1&&N==="~"||D===4&&(N==="null"||N==="Null"||N==="NULL")}function k(){return null}function I(N){return N===null}s.exports=new v("tag:yaml.org,2002:null",{kind:"scalar",resolve:_,construct:k,predicate:I,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"})},{"../type":14}],25:[function(m,s,d){var v=m("../type"),_=Object.prototype.hasOwnProperty,k=Object.prototype.toString;function I(D){if(D===null)return!0;var F=[],z,$,V,W,ot,lt=D;for(z=0,$=lt.length;z<$;z+=1){if(V=lt[z],ot=!1,k.call(V)!=="[object Object]")return!1;for(W in V)if(_.call(V,W))if(!ot)ot=!0;else return!1;if(!ot)return!1;if(F.indexOf(W)===-1)F.push(W);else return!1}return!0}function N(D){return D!==null?D:[]}s.exports=new v("tag:yaml.org,2002:omap",{kind:"sequence",resolve:I,construct:N})},{"../type":14}],26:[function(m,s,d){var v=m("../type"),_=Object.prototype.toString;function k(N){if(N===null)return!0;var D,F,z,$,V,W=N;for(V=new Array(W.length),D=0,F=W.length;D<F;D+=1){if(z=W[D],_.call(z)!=="[object Object]"||($=Object.keys(z),$.length!==1))return!1;V[D]=[$[0],z[$[0]]]}return!0}function I(N){if(N===null)return[];var D,F,z,$,V,W=N;for(V=new Array(W.length),D=0,F=W.length;D<F;D+=1)z=W[D],$=Object.keys(z),V[D]=[$[0],z[$[0]]];return V}s.exports=new v("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:k,construct:I})},{"../type":14}],27:[function(m,s,d){var v=m("../type");s.exports=new v("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(_){return _!==null?_:[]}})},{"../type":14}],28:[function(m,s,d){var v=m("../type"),_=Object.prototype.hasOwnProperty;function k(N){if(N===null)return!0;var D,F=N;for(D in F)if(_.call(F,D)&&F[D]!==null)return!1;return!0}function I(N){return N!==null?N:{}}s.exports=new v("tag:yaml.org,2002:set",{kind:"mapping",resolve:k,construct:I})},{"../type":14}],29:[function(m,s,d){var v=m("../type");s.exports=new v("tag:yaml.org,2002:str",{kind:"scalar",construct:function(_){return _!==null?_:""}})},{"../type":14}],30:[function(m,s,d){var v=m("../type"),_=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),k=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function I(F){return F===null?!1:_.exec(F)!==null||k.exec(F)!==null}function N(F){var z,$,V,W,ot,lt,bt,ft=0,Tt=null,Dt,Ht,Ft;if(z=_.exec(F),z===null&&(z=k.exec(F)),z===null)throw new Error("Date resolve error");if($=+z[1],V=+z[2]-1,W=+z[3],!z[4])return new Date(Date.UTC($,V,W));if(ot=+z[4],lt=+z[5],bt=+z[6],z[7]){for(ft=z[7].slice(0,3);ft.length<3;)ft+="0";ft=+ft}return z[9]&&(Dt=+z[10],Ht=+(z[11]||0),Tt=(Dt*60+Ht)*6e4,z[9]==="-"&&(Tt=-Tt)),Ft=new Date(Date.UTC($,V,W,ot,lt,bt,ft)),Tt&&Ft.setTime(Ft.getTime()-Tt),Ft}function D(F){return F.toISOString()}s.exports=new v("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:I,construct:N,instanceOf:Date,represent:D})},{"../type":14}]},{},[1]);function nodeToJSL(m){if(m.nodeType===document.TEXT_NODE||m.nodeType===document.COMMENT_NODE){let s=m.textContent.replace(/\n/g," ").replace(/\t/g," ").replace(/\s\s+/g," ").trim();return s===""?void 0:`"${s}"`}else{let s=m.getAttributeNames(),d={};for(let k=0;k<s.length;k++)m.getAttribute(s[k])!=="undefined"&&(d[s[k]]=m.getAttribute(s[k]));let v=[];for(let k=0;k<m.childNodes.length;k++)nodeToJSL(m.childNodes[k])&&v.push(nodeToJSL(m.childNodes[k]));let _=m.tagName.replace(/\-/g,"_");return formatJSLResult(_,d,v)}}function tab(m){let s=m.replace(/\n/g,`
	`);return s[0]!==`
`&&(s=`	${s}`),s}function getAttrsAsString(m){return Object.keys(m).length>3?JSON.stringify(m,null,2):JSON.stringify(m)}function getArgsString(m){let s="";for(let d=0;d<m.length;d++)s+=`${m[d]}`,d!==m.length-1&&(s+=`,
`);return s}function formatJSLResult(m,s,d){let v=getAttrsAsString(s),_=getArgsString(d),k=/\n/.test(_),I,N=!1,D=v!=="{}";return D?((v.indexOf(`
`)!=-1||v.length>50)&&(N=!0),N?I=`
${tab(v)}${d.length?",":""}`:I=`${v}${d.length?",":""}`):I="",`${m}( ${I}${k?`
${tab(_)}
`:`${D?" ":""}${_}`} )`}const methods$1={},names=[];function registerMethods(m,s){if(Array.isArray(m)){for(const d of m)registerMethods(d,s);return}if(typeof m=="object"){for(const d in m)registerMethods(d,m[d]);return}addMethodNames(Object.getOwnPropertyNames(s)),methods$1[m]=Object.assign(methods$1[m]||{},s)}function getMethodsFor(m){return methods$1[m]||{}}function getMethodNames(){return[...new Set(names)]}function addMethodNames(m){names.push(...m)}function map(m,s){let d;const v=m.length,_=[];for(d=0;d<v;d++)_.push(s(m[d]));return _}function filter(m,s){let d;const v=m.length,_=[];for(d=0;d<v;d++)s(m[d])&&_.push(m[d]);return _}function radians(m){return m%360*Math.PI/180}function camelCase(m){return m.toLowerCase().replace(/-(.)/g,function(s,d){return d.toUpperCase()})}function unCamelCase(m){return m.replace(/([A-Z])/g,function(s,d){return"-"+d.toLowerCase()})}function capitalize(m){return m.charAt(0).toUpperCase()+m.slice(1)}function proportionalSize(m,s,d,v){return(s==null||d==null)&&(v=v||m.bbox(),s==null?s=v.width/v.height*d:d==null&&(d=v.height/v.width*s)),{width:s,height:d}}function getOrigin(m,s){const d=m.origin;let v=m.ox!=null?m.ox:m.originX!=null?m.originX:"center",_=m.oy!=null?m.oy:m.originY!=null?m.originY:"center";d!=null&&([v,_]=Array.isArray(d)?d:typeof d=="object"?[d.x,d.y]:[d,d]);const k=typeof v=="string",I=typeof _=="string";if(k||I){const{height:N,width:D,x:F,y:z}=s.bbox();k&&(v=v.includes("left")?F:v.includes("right")?F+D:F+D/2),I&&(_=_.includes("top")?z:_.includes("bottom")?z+N:z+N/2)}return[v,_]}const svg="http://www.w3.org/2000/svg",html$1="http://www.w3.org/1999/xhtml",xmlns="http://www.w3.org/2000/xmlns/",xlink="http://www.w3.org/1999/xlink",svgjs="http://svgjs.dev/svgjs",globals={window:typeof window>"u"?null:window,document:typeof document>"u"?null:document};class Base{}const elements={},root="___SYMBOL___ROOT___";function create(m,s=svg){return globals.document.createElementNS(s,m)}function makeInstance(m,s=!1){if(m instanceof Base)return m;if(typeof m=="object")return adopter(m);if(m==null)return new elements[root];if(typeof m=="string"&&m.charAt(0)!=="<")return adopter(globals.document.querySelector(m));const d=s?globals.document.createElement("div"):create("svg");return d.innerHTML=m,m=adopter(d.firstChild),d.removeChild(d.firstChild),m}function nodeOrNew(m,s){return s&&s.ownerDocument&&s instanceof s.ownerDocument.defaultView.Node?s:create(m)}function adopt(m){if(!m)return null;if(m.instance instanceof Base)return m.instance;if(m.nodeName==="#document-fragment")return new elements.Fragment(m);let s=capitalize(m.nodeName||"Dom");return s==="LinearGradient"||s==="RadialGradient"?s="Gradient":elements[s]||(s="Dom"),new elements[s](m)}let adopter=adopt;function register(m,s=m.name,d=!1){return elements[s]=m,d&&(elements[root]=m),addMethodNames(Object.getOwnPropertyNames(m.prototype)),m}function getClass(m){return elements[m]}let did=1e3;function eid(m){return"Svgjs"+capitalize(m)+did++}function assignNewId(m){for(let s=m.children.length-1;s>=0;s--)assignNewId(m.children[s]);return m.id&&(m.id=eid(m.nodeName)),m}function extend(m,s){let d,v;for(m=Array.isArray(m)?m:[m],v=m.length-1;v>=0;v--)for(d in s)m[v].prototype[d]=s[d]}function wrapWithAttrCheck(m){return function(...s){const d=s[s.length-1];return d&&d.constructor===Object&&!(d instanceof Array)?m.apply(this,s.slice(0,-1)).attr(d):m.apply(this,s)}}function siblings(){return this.parent().children()}function position(){return this.parent().index(this)}function next(){return this.siblings()[this.position()+1]}function prev(){return this.siblings()[this.position()-1]}function forward(){const m=this.position();return this.parent().add(this.remove(),m+1),this}function backward(){const m=this.position();return this.parent().add(this.remove(),m?m-1:0),this}function front(){return this.parent().add(this.remove()),this}function back(){return this.parent().add(this.remove(),0),this}function before(m){m=makeInstance(m),m.remove();const s=this.position();return this.parent().add(m,s),this}function after(m){m=makeInstance(m),m.remove();const s=this.position();return this.parent().add(m,s+1),this}function insertBefore(m){return m=makeInstance(m),m.before(this),this}function insertAfter(m){return m=makeInstance(m),m.after(this),this}registerMethods("Dom",{siblings,position,next,prev,forward,backward,front,back,before,after,insertBefore,insertAfter});const numberAndUnit=/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb=/rgb\((\d+),(\d+),(\d+)\)/,reference=/(#[a-z_][a-z0-9\-_]*)/i,transforms=/\)\s*,?\s*/,whitespace=/\s/g,isHex=/^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i,isRgb=/^rgb\(/,isBlank=/^(\s+)?$/,isNumber=/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isImage=/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter=/[\s,]+/,isPathLetter=/[MLHVCSQTAZ]/i;function classes(){const m=this.attr("class");return m==null?[]:m.trim().split(delimiter)}function hasClass(m){return this.classes().indexOf(m)!==-1}function addClass(m){if(!this.hasClass(m)){const s=this.classes();s.push(m),this.attr("class",s.join(" "))}return this}function removeClass(m){return this.hasClass(m)&&this.attr("class",this.classes().filter(function(s){return s!==m}).join(" ")),this}function toggleClass(m){return this.hasClass(m)?this.removeClass(m):this.addClass(m)}registerMethods("Dom",{classes,hasClass,addClass,removeClass,toggleClass});function css(m,s){const d={};if(arguments.length===0)return this.node.style.cssText.split(/\s*;\s*/).filter(function(v){return!!v.length}).forEach(function(v){const _=v.split(/\s*:\s*/);d[_[0]]=_[1]}),d;if(arguments.length<2){if(Array.isArray(m)){for(const v of m){const _=camelCase(v);d[v]=this.node.style[_]}return d}if(typeof m=="string")return this.node.style[camelCase(m)];if(typeof m=="object")for(const v in m)this.node.style[camelCase(v)]=m[v]==null||isBlank.test(m[v])?"":m[v]}return arguments.length===2&&(this.node.style[camelCase(m)]=s==null||isBlank.test(s)?"":s),this}function show(){return this.css("display","")}function hide(){return this.css("display","none")}function visible(){return this.css("display")!=="none"}registerMethods("Dom",{css,show,hide,visible});function data(m,s,d){if(m==null)return this.data(map(filter(this.node.attributes,v=>v.nodeName.indexOf("data-")===0),v=>v.nodeName.slice(5)));if(m instanceof Array){const v={};for(const _ of m)v[_]=this.data(_);return v}else if(typeof m=="object")for(s in m)this.data(s,m[s]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+m))}catch{return this.attr("data-"+m)}else this.attr("data-"+m,s===null?null:d===!0||typeof s=="string"||typeof s=="number"?s:JSON.stringify(s));return this}registerMethods("Dom",{data});function remember(m,s){if(typeof arguments[0]=="object")for(const d in m)this.remember(d,m[d]);else{if(arguments.length===1)return this.memory()[m];this.memory()[m]=s}return this}function forget(){if(arguments.length===0)this._memory={};else for(let m=arguments.length-1;m>=0;m--)delete this.memory()[arguments[m]];return this}function memory(){return this._memory=this._memory||{}}registerMethods("Dom",{remember,forget,memory});function sixDigitHex(m){return m.length===4?["#",m.substring(1,2),m.substring(1,2),m.substring(2,3),m.substring(2,3),m.substring(3,4),m.substring(3,4)].join(""):m}function componentHex(m){const s=Math.round(m),v=Math.max(0,Math.min(255,s)).toString(16);return v.length===1?"0"+v:v}function is(m,s){for(let d=s.length;d--;)if(m[s[d]]==null)return!1;return!0}function getParameters(m,s){const d=is(m,"rgb")?{_a:m.r,_b:m.g,_c:m.b,_d:0,space:"rgb"}:is(m,"xyz")?{_a:m.x,_b:m.y,_c:m.z,_d:0,space:"xyz"}:is(m,"hsl")?{_a:m.h,_b:m.s,_c:m.l,_d:0,space:"hsl"}:is(m,"lab")?{_a:m.l,_b:m.a,_c:m.b,_d:0,space:"lab"}:is(m,"lch")?{_a:m.l,_b:m.c,_c:m.h,_d:0,space:"lch"}:is(m,"cmyk")?{_a:m.c,_b:m.m,_c:m.y,_d:m.k,space:"cmyk"}:{_a:0,_b:0,_c:0,space:"rgb"};return d.space=s||d.space,d}function cieSpace(m){return m==="lab"||m==="xyz"||m==="lch"}function hueToRgb(m,s,d){return d<0&&(d+=1),d>1&&(d-=1),d<1/6?m+(s-m)*6*d:d<1/2?s:d<2/3?m+(s-m)*(2/3-d)*6:m}class Color{constructor(...s){this.init(...s)}static isColor(s){return s&&(s instanceof Color||this.isRgb(s)||this.test(s))}static isRgb(s){return s&&typeof s.r=="number"&&typeof s.g=="number"&&typeof s.b=="number"}static random(s="vibrant",d,v){const{random:_,round:k,sin:I,PI:N}=Math;if(s==="vibrant"){const D=24*_()+57,F=38*_()+45,z=360*_();return new Color(D,F,z,"lch")}else if(s==="sine"){d=d??_();const D=k(80*I(2*N*d/.5+.01)+150),F=k(50*I(2*N*d/.5+4.6)+200),z=k(100*I(2*N*d/.5+2.3)+150);return new Color(D,F,z)}else if(s==="pastel"){const D=8*_()+86,F=17*_()+9,z=360*_();return new Color(D,F,z,"lch")}else if(s==="dark"){const D=10+10*_(),F=50*_()+86,z=360*_();return new Color(D,F,z,"lch")}else if(s==="rgb"){const D=255*_(),F=255*_(),z=255*_();return new Color(D,F,z)}else if(s==="lab"){const D=100*_(),F=256*_()-128,z=256*_()-128;return new Color(D,F,z,"lab")}else if(s==="grey"){const D=255*_();return new Color(D,D,D)}else throw new Error("Unsupported random color mode")}static test(s){return typeof s=="string"&&(isHex.test(s)||isRgb.test(s))}cmyk(){const{_a:s,_b:d,_c:v}=this.rgb(),[_,k,I]=[s,d,v].map(V=>V/255),N=Math.min(1-_,1-k,1-I);if(N===1)return new Color(0,0,0,1,"cmyk");const D=(1-_-N)/(1-N),F=(1-k-N)/(1-N),z=(1-I-N)/(1-N);return new Color(D,F,z,N,"cmyk")}hsl(){const{_a:s,_b:d,_c:v}=this.rgb(),[_,k,I]=[s,d,v].map(lt=>lt/255),N=Math.max(_,k,I),D=Math.min(_,k,I),F=(N+D)/2,z=N===D,$=N-D,V=z?0:F>.5?$/(2-N-D):$/(N+D),W=z?0:N===_?((k-I)/$+(k<I?6:0))/6:N===k?((I-_)/$+2)/6:N===I?((_-k)/$+4)/6:0;return new Color(360*W,100*V,100*F,"hsl")}init(s=0,d=0,v=0,_=0,k="rgb"){if(s=s||0,this.space)for(const $ in this.space)delete this[this.space[$]];if(typeof s=="number")k=typeof _=="string"?_:k,_=typeof _=="string"?0:_,Object.assign(this,{_a:s,_b:d,_c:v,_d:_,space:k});else if(s instanceof Array)this.space=d||(typeof s[3]=="string"?s[3]:s[4])||"rgb",Object.assign(this,{_a:s[0],_b:s[1],_c:s[2],_d:s[3]||0});else if(s instanceof Object){const $=getParameters(s,d);Object.assign(this,$)}else if(typeof s=="string")if(isRgb.test(s)){const $=s.replace(whitespace,""),[V,W,ot]=rgb.exec($).slice(1,4).map(lt=>parseInt(lt));Object.assign(this,{_a:V,_b:W,_c:ot,_d:0,space:"rgb"})}else if(isHex.test(s)){const $=lt=>parseInt(lt,16),[,V,W,ot]=hex.exec(sixDigitHex(s)).map($);Object.assign(this,{_a:V,_b:W,_c:ot,_d:0,space:"rgb"})}else throw Error("Unsupported string format, can't construct Color");const{_a:I,_b:N,_c:D,_d:F}=this,z=this.space==="rgb"?{r:I,g:N,b:D}:this.space==="xyz"?{x:I,y:N,z:D}:this.space==="hsl"?{h:I,s:N,l:D}:this.space==="lab"?{l:I,a:N,b:D}:this.space==="lch"?{l:I,c:N,h:D}:this.space==="cmyk"?{c:I,m:N,y:D,k:F}:{};Object.assign(this,z)}lab(){const{x:s,y:d,z:v}=this.xyz(),_=116*d-16,k=500*(s-d),I=200*(d-v);return new Color(_,k,I,"lab")}lch(){const{l:s,a:d,b:v}=this.lab(),_=Math.sqrt(d**2+v**2);let k=180*Math.atan2(v,d)/Math.PI;return k<0&&(k*=-1,k=360-k),new Color(s,_,k,"lch")}rgb(){if(this.space==="rgb")return this;if(cieSpace(this.space)){let{x:s,y:d,z:v}=this;if(this.space==="lab"||this.space==="lch"){let{l:W,a:ot,b:lt}=this;if(this.space==="lch"){const{c:Bt,h:Wt}=this,Pt=Math.PI/180;ot=Bt*Math.cos(Pt*Wt),lt=Bt*Math.sin(Pt*Wt)}const bt=(W+16)/116,ft=ot/500+bt,Tt=bt-lt/200,Dt=16/116,Ht=.008856,Ft=7.787;s=.95047*(ft**3>Ht?ft**3:(ft-Dt)/Ft),d=1*(bt**3>Ht?bt**3:(bt-Dt)/Ft),v=1.08883*(Tt**3>Ht?Tt**3:(Tt-Dt)/Ft)}const _=s*3.2406+d*-1.5372+v*-.4986,k=s*-.9689+d*1.8758+v*.0415,I=s*.0557+d*-.204+v*1.057,N=Math.pow,D=.0031308,F=_>D?1.055*N(_,1/2.4)-.055:12.92*_,z=k>D?1.055*N(k,1/2.4)-.055:12.92*k,$=I>D?1.055*N(I,1/2.4)-.055:12.92*I;return new Color(255*F,255*z,255*$)}else if(this.space==="hsl"){let{h:s,s:d,l:v}=this;if(s/=360,d/=100,v/=100,d===0)return v*=255,new Color(v,v,v);const _=v<.5?v*(1+d):v+d-v*d,k=2*v-_,I=255*hueToRgb(k,_,s+1/3),N=255*hueToRgb(k,_,s),D=255*hueToRgb(k,_,s-1/3);return new Color(I,N,D)}else if(this.space==="cmyk"){const{c:s,m:d,y:v,k:_}=this,k=255*(1-Math.min(1,s*(1-_)+_)),I=255*(1-Math.min(1,d*(1-_)+_)),N=255*(1-Math.min(1,v*(1-_)+_));return new Color(k,I,N)}else return this}toArray(){const{_a:s,_b:d,_c:v,_d:_,space:k}=this;return[s,d,v,_,k]}toHex(){const[s,d,v]=this._clamped().map(componentHex);return`#${s}${d}${v}`}toRgb(){const[s,d,v]=this._clamped();return`rgb(${s},${d},${v})`}toString(){return this.toHex()}xyz(){const{_a:s,_b:d,_c:v}=this.rgb(),[_,k,I]=[s,d,v].map(ft=>ft/255),N=_>.04045?Math.pow((_+.055)/1.055,2.4):_/12.92,D=k>.04045?Math.pow((k+.055)/1.055,2.4):k/12.92,F=I>.04045?Math.pow((I+.055)/1.055,2.4):I/12.92,z=(N*.4124+D*.3576+F*.1805)/.95047,$=(N*.2126+D*.7152+F*.0722)/1,V=(N*.0193+D*.1192+F*.9505)/1.08883,W=z>.008856?Math.pow(z,1/3):7.787*z+16/116,ot=$>.008856?Math.pow($,1/3):7.787*$+16/116,lt=V>.008856?Math.pow(V,1/3):7.787*V+16/116;return new Color(W,ot,lt,"xyz")}_clamped(){const{_a:s,_b:d,_c:v}=this.rgb(),{max:_,min:k,round:I}=Math,N=D=>_(0,k(I(D),255));return[s,d,v].map(N)}}class Point{constructor(...s){this.init(...s)}clone(){return new Point(this)}init(s,d){const v={x:0,y:0},_=Array.isArray(s)?{x:s[0],y:s[1]}:typeof s=="object"?{x:s.x,y:s.y}:{x:s,y:d};return this.x=_.x==null?v.x:_.x,this.y=_.y==null?v.y:_.y,this}toArray(){return[this.x,this.y]}transform(s){return this.clone().transformO(s)}transformO(s){Matrix.isMatrixLike(s)||(s=new Matrix(s));const{x:d,y:v}=this;return this.x=s.a*d+s.c*v+s.e,this.y=s.b*d+s.d*v+s.f,this}}function point(m,s){return new Point(m,s).transformO(this.screenCTM().inverseO())}function closeEnough(m,s,d){return Math.abs(s-m)<(d||1e-6)}class Matrix{constructor(...s){this.init(...s)}static formatTransforms(s){const d=s.flip==="both"||s.flip===!0,v=s.flip&&(d||s.flip==="x")?-1:1,_=s.flip&&(d||s.flip==="y")?-1:1,k=s.skew&&s.skew.length?s.skew[0]:isFinite(s.skew)?s.skew:isFinite(s.skewX)?s.skewX:0,I=s.skew&&s.skew.length?s.skew[1]:isFinite(s.skew)?s.skew:isFinite(s.skewY)?s.skewY:0,N=s.scale&&s.scale.length?s.scale[0]*v:isFinite(s.scale)?s.scale*v:isFinite(s.scaleX)?s.scaleX*v:v,D=s.scale&&s.scale.length?s.scale[1]*_:isFinite(s.scale)?s.scale*_:isFinite(s.scaleY)?s.scaleY*_:_,F=s.shear||0,z=s.rotate||s.theta||0,$=new Point(s.origin||s.around||s.ox||s.originX,s.oy||s.originY),V=$.x,W=$.y,ot=new Point(s.position||s.px||s.positionX||NaN,s.py||s.positionY||NaN),lt=ot.x,bt=ot.y,ft=new Point(s.translate||s.tx||s.translateX,s.ty||s.translateY),Tt=ft.x,Dt=ft.y,Ht=new Point(s.relative||s.rx||s.relativeX,s.ry||s.relativeY),Ft=Ht.x,Bt=Ht.y;return{scaleX:N,scaleY:D,skewX:k,skewY:I,shear:F,theta:z,rx:Ft,ry:Bt,tx:Tt,ty:Dt,ox:V,oy:W,px:lt,py:bt}}static fromArray(s){return{a:s[0],b:s[1],c:s[2],d:s[3],e:s[4],f:s[5]}}static isMatrixLike(s){return s.a!=null||s.b!=null||s.c!=null||s.d!=null||s.e!=null||s.f!=null}static matrixMultiply(s,d,v){const _=s.a*d.a+s.c*d.b,k=s.b*d.a+s.d*d.b,I=s.a*d.c+s.c*d.d,N=s.b*d.c+s.d*d.d,D=s.e+s.a*d.e+s.c*d.f,F=s.f+s.b*d.e+s.d*d.f;return v.a=_,v.b=k,v.c=I,v.d=N,v.e=D,v.f=F,v}around(s,d,v){return this.clone().aroundO(s,d,v)}aroundO(s,d,v){const _=s||0,k=d||0;return this.translateO(-_,-k).lmultiplyO(v).translateO(_,k)}clone(){return new Matrix(this)}decompose(s=0,d=0){const v=this.a,_=this.b,k=this.c,I=this.d,N=this.e,D=this.f,F=v*I-_*k,z=F>0?1:-1,$=z*Math.sqrt(v*v+_*_),V=Math.atan2(z*_,z*v),W=180/Math.PI*V,ot=Math.cos(V),lt=Math.sin(V),bt=(v*k+_*I)/F,ft=k*$/(bt*v-_)||I*$/(bt*_+v),Tt=N-s+s*ot*$+d*(bt*ot*$-lt*ft),Dt=D-d+s*lt*$+d*(bt*lt*$+ot*ft);return{scaleX:$,scaleY:ft,shear:bt,rotate:W,translateX:Tt,translateY:Dt,originX:s,originY:d,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}equals(s){if(s===this)return!0;const d=new Matrix(s);return closeEnough(this.a,d.a)&&closeEnough(this.b,d.b)&&closeEnough(this.c,d.c)&&closeEnough(this.d,d.d)&&closeEnough(this.e,d.e)&&closeEnough(this.f,d.f)}flip(s,d){return this.clone().flipO(s,d)}flipO(s,d){return s==="x"?this.scaleO(-1,1,d,0):s==="y"?this.scaleO(1,-1,0,d):this.scaleO(-1,-1,s,d||s)}init(s){const d=Matrix.fromArray([1,0,0,1,0,0]);return s=s instanceof Element?s.matrixify():typeof s=="string"?Matrix.fromArray(s.split(delimiter).map(parseFloat)):Array.isArray(s)?Matrix.fromArray(s):typeof s=="object"&&Matrix.isMatrixLike(s)?s:typeof s=="object"?new Matrix().transform(s):arguments.length===6?Matrix.fromArray([].slice.call(arguments)):d,this.a=s.a!=null?s.a:d.a,this.b=s.b!=null?s.b:d.b,this.c=s.c!=null?s.c:d.c,this.d=s.d!=null?s.d:d.d,this.e=s.e!=null?s.e:d.e,this.f=s.f!=null?s.f:d.f,this}inverse(){return this.clone().inverseO()}inverseO(){const s=this.a,d=this.b,v=this.c,_=this.d,k=this.e,I=this.f,N=s*_-d*v;if(!N)throw new Error("Cannot invert "+this);const D=_/N,F=-d/N,z=-v/N,$=s/N,V=-(D*k+z*I),W=-(F*k+$*I);return this.a=D,this.b=F,this.c=z,this.d=$,this.e=V,this.f=W,this}lmultiply(s){return this.clone().lmultiplyO(s)}lmultiplyO(s){const d=this,v=s instanceof Matrix?s:new Matrix(s);return Matrix.matrixMultiply(v,d,this)}multiply(s){return this.clone().multiplyO(s)}multiplyO(s){const d=this,v=s instanceof Matrix?s:new Matrix(s);return Matrix.matrixMultiply(d,v,this)}rotate(s,d,v){return this.clone().rotateO(s,d,v)}rotateO(s,d=0,v=0){s=radians(s);const _=Math.cos(s),k=Math.sin(s),{a:I,b:N,c:D,d:F,e:z,f:$}=this;return this.a=I*_-N*k,this.b=N*_+I*k,this.c=D*_-F*k,this.d=F*_+D*k,this.e=z*_-$*k+v*k-d*_+d,this.f=$*_+z*k-d*k-v*_+v,this}scale(s,d,v,_){return this.clone().scaleO(...arguments)}scaleO(s,d=s,v=0,_=0){arguments.length===3&&(_=v,v=d,d=s);const{a:k,b:I,c:N,d:D,e:F,f:z}=this;return this.a=k*s,this.b=I*d,this.c=N*s,this.d=D*d,this.e=F*s-v*s+v,this.f=z*d-_*d+_,this}shear(s,d,v){return this.clone().shearO(s,d,v)}shearO(s,d=0,v=0){const{a:_,b:k,c:I,d:N,e:D,f:F}=this;return this.a=_+k*s,this.c=I+N*s,this.e=D+F*s-v*s,this}skew(s,d,v,_){return this.clone().skewO(...arguments)}skewO(s,d=s,v=0,_=0){arguments.length===3&&(_=v,v=d,d=s),s=radians(s),d=radians(d);const k=Math.tan(s),I=Math.tan(d),{a:N,b:D,c:F,d:z,e:$,f:V}=this;return this.a=N+D*k,this.b=D+N*I,this.c=F+z*k,this.d=z+F*I,this.e=$+V*k-_*k,this.f=V+$*I-v*I,this}skewX(s,d,v){return this.skew(s,0,d,v)}skewY(s,d,v){return this.skew(0,s,d,v)}toArray(){return[this.a,this.b,this.c,this.d,this.e,this.f]}toString(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}transform(s){if(Matrix.isMatrixLike(s))return new Matrix(s).multiplyO(this);const d=Matrix.formatTransforms(s),v=this,{x:_,y:k}=new Point(d.ox,d.oy).transform(v),I=new Matrix().translateO(d.rx,d.ry).lmultiplyO(v).translateO(-_,-k).scaleO(d.scaleX,d.scaleY).skewO(d.skewX,d.skewY).shearO(d.shear).rotateO(d.theta).translateO(_,k);if(isFinite(d.px)||isFinite(d.py)){const N=new Point(_,k).transform(I),D=isFinite(d.px)?d.px-N.x:0,F=isFinite(d.py)?d.py-N.y:0;I.translateO(D,F)}return I.translateO(d.tx,d.ty),I}translate(s,d){return this.clone().translateO(s,d)}translateO(s,d){return this.e+=s||0,this.f+=d||0,this}valueOf(){return{a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}}function ctm(){return new Matrix(this.node.getCTM())}function screenCTM(){if(typeof this.isRoot=="function"&&!this.isRoot()){const m=this.rect(1,1),s=m.node.getScreenCTM();return m.remove(),new Matrix(s)}return new Matrix(this.node.getScreenCTM())}register(Matrix,"Matrix");function parser(){if(!parser.nodes){const m=makeInstance().size(2,0);m.node.style.cssText=["opacity: 0","position: absolute","left: -100%","top: -100%","overflow: hidden"].join(";"),m.attr("focusable","false"),m.attr("aria-hidden","true");const s=m.path().node;parser.nodes={svg:m,path:s}}if(!parser.nodes.svg.node.parentNode){const m=globals.document.body||globals.document.documentElement;parser.nodes.svg.addTo(m)}return parser.nodes}function isNulledBox(m){return!m.width&&!m.height&&!m.x&&!m.y}function domContains(m){return m===globals.document||(globals.document.documentElement.contains||function(s){for(;s.parentNode;)s=s.parentNode;return s===globals.document}).call(globals.document.documentElement,m)}class Box{constructor(...s){this.init(...s)}addOffset(){return this.x+=globals.window.pageXOffset,this.y+=globals.window.pageYOffset,new Box(this)}init(s){const d=[0,0,0,0];return s=typeof s=="string"?s.split(delimiter).map(parseFloat):Array.isArray(s)?s:typeof s=="object"?[s.left!=null?s.left:s.x,s.top!=null?s.top:s.y,s.width,s.height]:arguments.length===4?[].slice.call(arguments):d,this.x=s[0]||0,this.y=s[1]||0,this.width=this.w=s[2]||0,this.height=this.h=s[3]||0,this.x2=this.x+this.w,this.y2=this.y+this.h,this.cx=this.x+this.w/2,this.cy=this.y+this.h/2,this}isNulled(){return isNulledBox(this)}merge(s){const d=Math.min(this.x,s.x),v=Math.min(this.y,s.y),_=Math.max(this.x+this.width,s.x+s.width)-d,k=Math.max(this.y+this.height,s.y+s.height)-v;return new Box(d,v,_,k)}toArray(){return[this.x,this.y,this.width,this.height]}toString(){return this.x+" "+this.y+" "+this.width+" "+this.height}transform(s){s instanceof Matrix||(s=new Matrix(s));let d=1/0,v=-1/0,_=1/0,k=-1/0;return[new Point(this.x,this.y),new Point(this.x2,this.y),new Point(this.x,this.y2),new Point(this.x2,this.y2)].forEach(function(N){N=N.transform(s),d=Math.min(d,N.x),v=Math.max(v,N.x),_=Math.min(_,N.y),k=Math.max(k,N.y)}),new Box(d,_,v-d,k-_)}}function getBox(m,s,d){let v;try{if(v=s(m.node),isNulledBox(v)&&!domContains(m.node))throw new Error("Element not in the dom")}catch{v=d(m)}return v}function bbox(){const d=getBox(this,_=>_.getBBox(),_=>{try{const k=_.clone().addTo(parser().svg).show(),I=k.node.getBBox();return k.remove(),I}catch(k){throw new Error(`Getting bbox of element "${_.node.nodeName}" is not possible: ${k.toString()}`)}});return new Box(d)}function rbox(m){const v=getBox(this,k=>k.getBoundingClientRect(),k=>{throw new Error(`Getting rbox of element "${k.node.nodeName}" is not possible`)}),_=new Box(v);return m?_.transform(m.screenCTM().inverseO()):_.addOffset()}function inside(m,s){const d=this.bbox();return m>d.x&&s>d.y&&m<d.x+d.width&&s<d.y+d.height}registerMethods({viewbox:{viewbox(m,s,d,v){return m==null?new Box(this.attr("viewBox")):this.attr("viewBox",new Box(m,s,d,v))},zoom(m,s){let{width:d,height:v}=this.attr(["width","height"]);if((!d&&!v||typeof d=="string"||typeof v=="string")&&(d=this.node.clientWidth,v=this.node.clientHeight),!d||!v)throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");const _=this.viewbox(),k=d/_.width,I=v/_.height,N=Math.min(k,I);if(m==null)return N;let D=N/m;D===1/0&&(D=Number.MAX_SAFE_INTEGER/100),s=s||new Point(d/2/k+_.x,v/2/I+_.y);const F=new Box(_).transform(new Matrix({scale:D,origin:s}));return this.viewbox(F)}}});register(Box,"Box");class List extends Array{constructor(s=[],...d){if(super(s,...d),typeof s=="number")return this;this.length=0,this.push(...s)}}extend([List],{each(m,...s){return typeof m=="function"?this.map((d,v,_)=>m.call(d,d,v,_)):this.map(d=>d[m](...s))},toArray(){return Array.prototype.concat.apply([],this)}});const reserved=["toArray","constructor","each"];List.extend=function(m){m=m.reduce((s,d)=>(reserved.includes(d)||d[0]==="_"||(s[d]=function(...v){return this.each(d,...v)}),s),{}),extend([List],m)};function baseFind(m,s){return new List(map((s||globals.document).querySelectorAll(m),function(d){return adopt(d)}))}function find(m){return baseFind(m,this.node)}function findOne(m){return adopt(this.node.querySelector(m))}let listenerId=0;const windowEvents={};function getEvents(m){let s=m.getEventHolder();return s===globals.window&&(s=windowEvents),s.events||(s.events={}),s.events}function getEventTarget(m){return m.getEventTarget()}function clearEvents(m){let s=m.getEventHolder();s===globals.window&&(s=windowEvents),s.events&&(s.events={})}function on(m,s,d,v,_){const k=d.bind(v||m),I=makeInstance(m),N=getEvents(I),D=getEventTarget(I);s=Array.isArray(s)?s:s.split(delimiter),d._svgjsListenerId||(d._svgjsListenerId=++listenerId),s.forEach(function(F){const z=F.split(".")[0],$=F.split(".")[1]||"*";N[z]=N[z]||{},N[z][$]=N[z][$]||{},N[z][$][d._svgjsListenerId]=k,D.addEventListener(z,k,_||!1)})}function off(m,s,d,v){const _=makeInstance(m),k=getEvents(_),I=getEventTarget(_);typeof d=="function"&&(d=d._svgjsListenerId,!d)||(s=Array.isArray(s)?s:(s||"").split(delimiter),s.forEach(function(N){const D=N&&N.split(".")[0],F=N&&N.split(".")[1];let z,$;if(d)k[D]&&k[D][F||"*"]&&(I.removeEventListener(D,k[D][F||"*"][d],v||!1),delete k[D][F||"*"][d]);else if(D&&F){if(k[D]&&k[D][F]){for($ in k[D][F])off(I,[D,F].join("."),$);delete k[D][F]}}else if(F)for(N in k)for(z in k[N])F===z&&off(I,[N,F].join("."));else if(D){if(k[D]){for(z in k[D])off(I,[D,z].join("."));delete k[D]}}else{for(N in k)off(I,N);clearEvents(_)}}))}function dispatch(m,s,d,v){const _=getEventTarget(m);return s instanceof globals.window.Event||(s=new globals.window.CustomEvent(s,{detail:d,cancelable:!0,...v})),_.dispatchEvent(s),s}class EventTarget extends Base{addEventListener(){}dispatch(s,d,v){return dispatch(this,s,d,v)}dispatchEvent(s){const d=this.getEventHolder().events;if(!d)return!0;const v=d[s.type];for(const _ in v)for(const k in v[_])v[_][k](s);return!s.defaultPrevented}fire(s,d,v){return this.dispatch(s,d,v),this}getEventHolder(){return this}getEventTarget(){return this}off(s,d,v){return off(this,s,d,v),this}on(s,d,v,_){return on(this,s,d,v,_),this}removeEventListener(){}}register(EventTarget,"EventTarget");function noop(){}const timeline={duration:400,ease:">",delay:0},attrs={"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","text-anchor":"start"};class SVGArray extends Array{constructor(...s){super(...s),this.init(...s)}clone(){return new this.constructor(this)}init(s){return typeof s=="number"?this:(this.length=0,this.push(...this.parse(s)),this)}parse(s=[]){return s instanceof Array?s:s.trim().split(delimiter).map(parseFloat)}toArray(){return Array.prototype.concat.apply([],this)}toSet(){return new Set(this)}toString(){return this.join(" ")}valueOf(){const s=[];return s.push(...this),s}}class SVGNumber{constructor(...s){this.init(...s)}convert(s){return new SVGNumber(this.value,s)}divide(s){return s=new SVGNumber(s),new SVGNumber(this/s,this.unit||s.unit)}init(s,d){return d=Array.isArray(s)?s[1]:d,s=Array.isArray(s)?s[0]:s,this.value=0,this.unit=d||"",typeof s=="number"?this.value=isNaN(s)?0:isFinite(s)?s:s<0?-34e37:34e37:typeof s=="string"?(d=s.match(numberAndUnit),d&&(this.value=parseFloat(d[1]),d[5]==="%"?this.value/=100:d[5]==="s"&&(this.value*=1e3),this.unit=d[5])):s instanceof SVGNumber&&(this.value=s.valueOf(),this.unit=s.unit),this}minus(s){return s=new SVGNumber(s),new SVGNumber(this-s,this.unit||s.unit)}plus(s){return s=new SVGNumber(s),new SVGNumber(this+s,this.unit||s.unit)}times(s){return s=new SVGNumber(s),new SVGNumber(this*s,this.unit||s.unit)}toArray(){return[this.value,this.unit]}toJSON(){return this.toString()}toString(){return(this.unit==="%"?~~(this.value*1e8)/1e6:this.unit==="s"?this.value/1e3:this.value)+this.unit}valueOf(){return this.value}}const hooks$1=[];function registerAttrHook(m){hooks$1.push(m)}function attr(m,s,d){if(m==null){m={},s=this.node.attributes;for(const v of s)m[v.nodeName]=isNumber.test(v.nodeValue)?parseFloat(v.nodeValue):v.nodeValue;return m}else{if(m instanceof Array)return m.reduce((v,_)=>(v[_]=this.attr(_),v),{});if(typeof m=="object"&&m.constructor===Object)for(s in m)this.attr(s,m[s]);else if(s===null)this.node.removeAttribute(m);else{if(s==null)return s=this.node.getAttribute(m),s==null?attrs[m]:isNumber.test(s)?parseFloat(s):s;s=hooks$1.reduce((v,_)=>_(m,v,this),s),typeof s=="number"?s=new SVGNumber(s):Color.isColor(s)?s=new Color(s):s.constructor===Array&&(s=new SVGArray(s)),m==="leading"?this.leading&&this.leading(s):typeof d=="string"?this.node.setAttributeNS(d,m,s.toString()):this.node.setAttribute(m,s.toString()),this.rebuild&&(m==="font-size"||m==="x")&&this.rebuild()}}return this}class Dom extends EventTarget{constructor(s,d){super(),this.node=s,this.type=s.nodeName,d&&s!==d&&this.attr(d)}add(s,d){return s=makeInstance(s),s.removeNamespace&&this.node instanceof globals.window.SVGElement&&s.removeNamespace(),d==null?this.node.appendChild(s.node):s.node!==this.node.childNodes[d]&&this.node.insertBefore(s.node,this.node.childNodes[d]),this}addTo(s,d){return makeInstance(s).put(this,d)}children(){return new List(map(this.node.children,function(s){return adopt(s)}))}clear(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this}clone(s=!0,d=!0){this.writeDataToDom();let v=this.node.cloneNode(s);return d&&(v=assignNewId(v)),new this.constructor(v)}each(s,d){const v=this.children();let _,k;for(_=0,k=v.length;_<k;_++)s.apply(v[_],[_,v]),d&&v[_].each(s,d);return this}element(s,d){return this.put(new Dom(create(s),d))}first(){return adopt(this.node.firstChild)}get(s){return adopt(this.node.childNodes[s])}getEventHolder(){return this.node}getEventTarget(){return this.node}has(s){return this.index(s)>=0}html(s,d){return this.xml(s,d,html$1)}id(s){return typeof s>"u"&&!this.node.id&&(this.node.id=eid(this.type)),this.attr("id",s)}index(s){return[].slice.call(this.node.childNodes).indexOf(s.node)}last(){return adopt(this.node.lastChild)}matches(s){const d=this.node,v=d.matches||d.matchesSelector||d.msMatchesSelector||d.mozMatchesSelector||d.webkitMatchesSelector||d.oMatchesSelector||null;return v&&v.call(d,s)}parent(s){let d=this;if(!d.node.parentNode)return null;if(d=adopt(d.node.parentNode),!s)return d;do if(typeof s=="string"?d.matches(s):d instanceof s)return d;while(d=adopt(d.node.parentNode));return d}put(s,d){return s=makeInstance(s),this.add(s,d),s}putIn(s,d){return makeInstance(s).add(this,d)}remove(){return this.parent()&&this.parent().removeElement(this),this}removeElement(s){return this.node.removeChild(s.node),this}replace(s){return s=makeInstance(s),this.node.parentNode&&this.node.parentNode.replaceChild(s.node,this.node),s}round(s=2,d=null){const v=10**s,_=this.attr(d);for(const k in _)typeof _[k]=="number"&&(_[k]=Math.round(_[k]*v)/v);return this.attr(_),this}svg(s,d){return this.xml(s,d,svg)}toString(){return this.id()}words(s){return this.node.textContent=s,this}wrap(s){const d=this.parent();if(!d)return this.addTo(s);const v=d.index(this);return d.put(s,v).put(this)}writeDataToDom(){return this.each(function(){this.writeDataToDom()}),this}xml(s,d,v){if(typeof s=="boolean"&&(v=d,d=s,s=null),s==null||typeof s=="function"){d=d??!0,this.writeDataToDom();let N=this;if(s!=null){if(N=adopt(N.node.cloneNode(!0)),d){const D=s(N);if(N=D||N,D===!1)return""}N.each(function(){const D=s(this),F=D||this;D===!1?this.remove():D&&this!==F&&this.replace(F)},!0)}return d?N.node.outerHTML:N.node.innerHTML}d=d??!1;const _=create("wrapper",v),k=globals.document.createDocumentFragment();_.innerHTML=s;for(let N=_.children.length;N--;)k.appendChild(_.firstElementChild);const I=this.parent();return d?this.replace(k)&&I:this.add(k)}}extend(Dom,{attr,find,findOne});register(Dom,"Dom");class Element extends Dom{constructor(s,d){super(s,d),this.dom={},this.node.instance=this,s.hasAttribute("svgjs:data")&&this.setData(JSON.parse(s.getAttribute("svgjs:data"))||{})}center(s,d){return this.cx(s).cy(d)}cx(s){return s==null?this.x()+this.width()/2:this.x(s-this.width()/2)}cy(s){return s==null?this.y()+this.height()/2:this.y(s-this.height()/2)}defs(){const s=this.root();return s&&s.defs()}dmove(s,d){return this.dx(s).dy(d)}dx(s=0){return this.x(new SVGNumber(s).plus(this.x()))}dy(s=0){return this.y(new SVGNumber(s).plus(this.y()))}getEventHolder(){return this}height(s){return this.attr("height",s)}move(s,d){return this.x(s).y(d)}parents(s=this.root()){const d=typeof s=="string";d||(s=makeInstance(s));const v=new List;let _=this;for(;(_=_.parent())&&_.node!==globals.document&&_.nodeName!=="#document-fragment"&&(v.push(_),!(!d&&_.node===s.node||d&&_.matches(s)));)if(_.node===this.root().node)return null;return v}reference(s){if(s=this.attr(s),!s)return null;const d=(s+"").match(reference);return d?makeInstance(d[1]):null}root(){const s=this.parent(getClass(root));return s&&s.root()}setData(s){return this.dom=s,this}size(s,d){const v=proportionalSize(this,s,d);return this.width(new SVGNumber(v.width)).height(new SVGNumber(v.height))}width(s){return this.attr("width",s)}writeDataToDom(){return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),super.writeDataToDom()}x(s){return this.attr("x",s)}y(s){return this.attr("y",s)}}extend(Element,{bbox,rbox,inside,point,ctm,screenCTM});register(Element,"Element");const sugar={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(m,s){return s==="color"?m:m+"-"+s}};["fill","stroke"].forEach(function(m){const s={};let d;s[m]=function(v){if(typeof v>"u")return this.attr(m);if(typeof v=="string"||v instanceof Color||Color.isRgb(v)||v instanceof Element)this.attr(m,v);else for(d=sugar[m].length-1;d>=0;d--)v[sugar[m][d]]!=null&&this.attr(sugar.prefix(m,sugar[m][d]),v[sugar[m][d]]);return this},registerMethods(["Element","Runner"],s)});registerMethods(["Element","Runner"],{matrix:function(m,s,d,v,_,k){return m==null?new Matrix(this):this.attr("transform",new Matrix(m,s,d,v,_,k))},rotate:function(m,s,d){return this.transform({rotate:m,ox:s,oy:d},!0)},skew:function(m,s,d,v){return arguments.length===1||arguments.length===3?this.transform({skew:m,ox:s,oy:d},!0):this.transform({skew:[m,s],ox:d,oy:v},!0)},shear:function(m,s,d){return this.transform({shear:m,ox:s,oy:d},!0)},scale:function(m,s,d,v){return arguments.length===1||arguments.length===3?this.transform({scale:m,ox:s,oy:d},!0):this.transform({scale:[m,s],ox:d,oy:v},!0)},translate:function(m,s){return this.transform({translate:[m,s]},!0)},relative:function(m,s){return this.transform({relative:[m,s]},!0)},flip:function(m="both",s="center"){return"xybothtrue".indexOf(m)===-1&&(s=m,m="both"),this.transform({flip:m,origin:s},!0)},opacity:function(m){return this.attr("opacity",m)}});registerMethods("radius",{radius:function(m,s=m){return(this._element||this).type==="radialGradient"?this.attr("r",new SVGNumber(m)):this.rx(m).ry(s)}});registerMethods("Path",{length:function(){return this.node.getTotalLength()},pointAt:function(m){return new Point(this.node.getPointAtLength(m))}});registerMethods(["Element","Runner"],{font:function(m,s){if(typeof m=="object"){for(s in m)this.font(s,m[s]);return this}return m==="leading"?this.leading(s):m==="anchor"?this.attr("text-anchor",s):m==="size"||m==="family"||m==="weight"||m==="stretch"||m==="variant"||m==="style"?this.attr("font-"+m,s):this.attr(m,s)}});const methods=["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","mouseenter","mouseleave","touchstart","touchmove","touchleave","touchend","touchcancel"].reduce(function(m,s){const d=function(v){return v===null?this.off(s):this.on(s,v),this};return m[s]=d,m},{});registerMethods("Element",methods);function untransform(){return this.attr("transform",null)}function matrixify(){return(this.attr("transform")||"").split(transforms).slice(0,-1).map(function(s){const d=s.trim().split("(");return[d[0],d[1].split(delimiter).map(function(v){return parseFloat(v)})]}).reverse().reduce(function(s,d){return d[0]==="matrix"?s.lmultiply(Matrix.fromArray(d[1])):s[d[0]].apply(s,d[1])},new Matrix)}function toParent(m,s){if(this===m)return this;const d=this.screenCTM(),v=m.screenCTM().inverse();return this.addTo(m,s).untransform().transform(v.multiply(d)),this}function toRoot(m){return this.toParent(this.root(),m)}function transform(m,s){if(m==null||typeof m=="string"){const _=new Matrix(this).decompose();return m==null?_:_[m]}Matrix.isMatrixLike(m)||(m={...m,origin:getOrigin(m,this)});const d=s===!0?this:s||!1,v=new Matrix(d).transform(m);return this.attr("transform",v)}registerMethods("Element",{untransform,matrixify,toParent,toRoot,transform});let Container$1=class Kl extends Element{flatten(s=this,d){return this.each(function(){if(this instanceof Kl)return this.flatten().ungroup()}),this}ungroup(s=this.parent(),d=s.index(this)){return d=d===-1?s.children().length:d,this.each(function(v,_){return _[_.length-v-1].toParent(s,d)}),this.remove()}};register(Container$1,"Container");class Defs extends Container$1{constructor(s,d=s){super(nodeOrNew("defs",s),d)}flatten(){return this}ungroup(){return this}}register(Defs,"Defs");class Shape extends Element{}register(Shape,"Shape");function rx(m){return this.attr("rx",m)}function ry(m){return this.attr("ry",m)}function x$3(m){return m==null?this.cx()-this.rx():this.cx(m+this.rx())}function y$3(m){return m==null?this.cy()-this.ry():this.cy(m+this.ry())}function cx$1(m){return this.attr("cx",m)}function cy$1(m){return this.attr("cy",m)}function width$2(m){return m==null?this.rx()*2:this.rx(new SVGNumber(m).divide(2))}function height$2(m){return m==null?this.ry()*2:this.ry(new SVGNumber(m).divide(2))}var circled={__proto__:null,rx,ry,x:x$3,y:y$3,cx:cx$1,cy:cy$1,width:width$2,height:height$2};class Ellipse extends Shape{constructor(s,d=s){super(nodeOrNew("ellipse",s),d)}size(s,d){const v=proportionalSize(this,s,d);return this.rx(new SVGNumber(v.width).divide(2)).ry(new SVGNumber(v.height).divide(2))}}extend(Ellipse,circled);registerMethods("Container",{ellipse:wrapWithAttrCheck(function(m=0,s=m){return this.put(new Ellipse).size(m,s).move(0,0)})});register(Ellipse,"Ellipse");class Fragment extends Dom{constructor(s=globals.document.createDocumentFragment()){super(s)}xml(s,d,v){if(typeof s=="boolean"&&(v=d,d=s,s=null),s==null||typeof s=="function"){const _=new Dom(create("wrapper",v));return _.add(this.node.cloneNode(!0)),_.xml(!1,v)}return super.xml(s,!1,v)}}register(Fragment,"Fragment");function from(m,s){return(this._element||this).type==="radialGradient"?this.attr({fx:new SVGNumber(m),fy:new SVGNumber(s)}):this.attr({x1:new SVGNumber(m),y1:new SVGNumber(s)})}function to(m,s){return(this._element||this).type==="radialGradient"?this.attr({cx:new SVGNumber(m),cy:new SVGNumber(s)}):this.attr({x2:new SVGNumber(m),y2:new SVGNumber(s)})}var gradiented={__proto__:null,from,to};class Gradient extends Container$1{constructor(s,d){super(nodeOrNew(s+"Gradient",typeof s=="string"?null:s),d)}attr(s,d,v){return s==="transform"&&(s="gradientTransform"),super.attr(s,d,v)}bbox(){return new Box}targets(){return baseFind("svg [fill*="+this.id()+"]")}toString(){return this.url()}update(s){return this.clear(),typeof s=="function"&&s.call(this,this),this}url(){return"url(#"+this.id()+")"}}extend(Gradient,gradiented);registerMethods({Container:{gradient(...m){return this.defs().gradient(...m)}},Defs:{gradient:wrapWithAttrCheck(function(m,s){return this.put(new Gradient(m)).update(s)})}});register(Gradient,"Gradient");class Pattern extends Container$1{constructor(s,d=s){super(nodeOrNew("pattern",s),d)}attr(s,d,v){return s==="transform"&&(s="patternTransform"),super.attr(s,d,v)}bbox(){return new Box}targets(){return baseFind("svg [fill*="+this.id()+"]")}toString(){return this.url()}update(s){return this.clear(),typeof s=="function"&&s.call(this,this),this}url(){return"url(#"+this.id()+")"}}registerMethods({Container:{pattern(...m){return this.defs().pattern(...m)}},Defs:{pattern:wrapWithAttrCheck(function(m,s,d){return this.put(new Pattern).update(d).attr({x:0,y:0,width:m,height:s,patternUnits:"userSpaceOnUse"})})}});register(Pattern,"Pattern");class Image extends Shape{constructor(s,d=s){super(nodeOrNew("image",s),d)}load(s,d){if(!s)return this;const v=new globals.window.Image;return on(v,"load",function(_){const k=this.parent(Pattern);this.width()===0&&this.height()===0&&this.size(v.width,v.height),k instanceof Pattern&&k.width()===0&&k.height()===0&&k.size(this.width(),this.height()),typeof d=="function"&&d.call(this,_)},this),on(v,"load error",function(){off(v)}),this.attr("href",v.src=s,xlink)}}registerAttrHook(function(m,s,d){return(m==="fill"||m==="stroke")&&isImage.test(s)&&(s=d.root().defs().image(s)),s instanceof Image&&(s=d.root().defs().pattern(0,0,v=>{v.add(s)})),s});registerMethods({Container:{image:wrapWithAttrCheck(function(m,s){return this.put(new Image).size(0,0).load(m,s)})}});register(Image,"Image");class PointArray extends SVGArray{bbox(){let s=-1/0,d=-1/0,v=1/0,_=1/0;return this.forEach(function(k){s=Math.max(k[0],s),d=Math.max(k[1],d),v=Math.min(k[0],v),_=Math.min(k[1],_)}),new Box(v,_,s-v,d-_)}move(s,d){const v=this.bbox();if(s-=v.x,d-=v.y,!isNaN(s)&&!isNaN(d))for(let _=this.length-1;_>=0;_--)this[_]=[this[_][0]+s,this[_][1]+d];return this}parse(s=[0,0]){const d=[];s instanceof Array?s=Array.prototype.concat.apply([],s):s=s.trim().split(delimiter).map(parseFloat),s.length%2!==0&&s.pop();for(let v=0,_=s.length;v<_;v=v+2)d.push([s[v],s[v+1]]);return d}size(s,d){let v;const _=this.bbox();for(v=this.length-1;v>=0;v--)_.width&&(this[v][0]=(this[v][0]-_.x)*s/_.width+_.x),_.height&&(this[v][1]=(this[v][1]-_.y)*d/_.height+_.y);return this}toLine(){return{x1:this[0][0],y1:this[0][1],x2:this[1][0],y2:this[1][1]}}toString(){const s=[];for(let d=0,v=this.length;d<v;d++)s.push(this[d].join(","));return s.join(" ")}transform(s){return this.clone().transformO(s)}transformO(s){Matrix.isMatrixLike(s)||(s=new Matrix(s));for(let d=this.length;d--;){const[v,_]=this[d];this[d][0]=s.a*v+s.c*_+s.e,this[d][1]=s.b*v+s.d*_+s.f}return this}}const MorphArray=PointArray;function x$2(m){return m==null?this.bbox().x:this.move(m,this.bbox().y)}function y$2(m){return m==null?this.bbox().y:this.move(this.bbox().x,m)}function width$1(m){const s=this.bbox();return m==null?s.width:this.size(m,s.height)}function height$1(m){const s=this.bbox();return m==null?s.height:this.size(s.width,m)}var pointed={__proto__:null,MorphArray,x:x$2,y:y$2,width:width$1,height:height$1};class Line extends Shape{constructor(s,d=s){super(nodeOrNew("line",s),d)}array(){return new PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])}move(s,d){return this.attr(this.array().move(s,d).toLine())}plot(s,d,v,_){return s==null?this.array():(typeof d<"u"?s={x1:s,y1:d,x2:v,y2:_}:s=new PointArray(s).toLine(),this.attr(s))}size(s,d){const v=proportionalSize(this,s,d);return this.attr(this.array().size(v.width,v.height).toLine())}}extend(Line,pointed);registerMethods({Container:{line:wrapWithAttrCheck(function(...m){return Line.prototype.plot.apply(this.put(new Line),m[0]!=null?m:[0,0,0,0])})}});register(Line,"Line");class Marker extends Container$1{constructor(s,d=s){super(nodeOrNew("marker",s),d)}height(s){return this.attr("markerHeight",s)}orient(s){return this.attr("orient",s)}ref(s,d){return this.attr("refX",s).attr("refY",d)}toString(){return"url(#"+this.id()+")"}update(s){return this.clear(),typeof s=="function"&&s.call(this,this),this}width(s){return this.attr("markerWidth",s)}}registerMethods({Container:{marker(...m){return this.defs().marker(...m)}},Defs:{marker:wrapWithAttrCheck(function(m,s,d){return this.put(new Marker).size(m,s).ref(m/2,s/2).viewbox(0,0,m,s).attr("orient","auto").update(d)})},marker:{marker(m,s,d,v){let _=["marker"];return m!=="all"&&_.push(m),_=_.join("-"),m=arguments[1]instanceof Marker?arguments[1]:this.defs().marker(s,d,v),this.attr(_,m)}}});register(Marker,"Marker");function makeSetterGetter(m,s){return function(d){return d==null?this[m]:(this[m]=d,s&&s.call(this),this)}}const easing={"-":function(m){return m},"<>":function(m){return-Math.cos(m*Math.PI)/2+.5},">":function(m){return Math.sin(m*Math.PI/2)},"<":function(m){return-Math.cos(m*Math.PI/2)+1},bezier:function(m,s,d,v){return function(_){return _<0?m>0?s/m*_:d>0?v/d*_:0:_>1?d<1?(1-v)/(1-d)*_+(v-d)/(1-d):m<1?(1-s)/(1-m)*_+(s-m)/(1-m):1:3*_*(1-_)**2*s+3*_**2*(1-_)*v+_**3}},steps:function(m,s="end"){s=s.split("-").reverse()[0];let d=m;return s==="none"?--d:s==="both"&&++d,(v,_=!1)=>{let k=Math.floor(v*m);const I=v*k%1===0;return(s==="start"||s==="both")&&++k,_&&I&&--k,v>=0&&k<0&&(k=0),v<=1&&k>d&&(k=d),k/d}}};class Stepper{done(){return!1}}class Ease extends Stepper{constructor(s=timeline.ease){super(),this.ease=easing[s]||s}step(s,d,v){return typeof s!="number"?v<1?s:d:s+(d-s)*this.ease(v)}}class Controller extends Stepper{constructor(s){super(),this.stepper=s}done(s){return s.done}step(s,d,v,_){return this.stepper(s,d,v,_)}}function recalculate(){const m=(this._duration||500)/1e3,s=this._overshoot||0,d=1e-10,v=Math.PI,_=Math.log(s/100+d),k=-_/Math.sqrt(v*v+_*_),I=3.9/(k*m);this.d=2*k*I,this.k=I*I}class Spring extends Controller{constructor(s=500,d=0){super(),this.duration(s).overshoot(d)}step(s,d,v,_){if(typeof s=="string")return s;if(_.done=v===1/0,v===1/0)return d;if(v===0)return s;v>100&&(v=16),v/=1e3;const k=_.velocity||0,I=-this.d*k-this.k*(s-d),N=s+k*v+I*v*v/2;return _.velocity=k+I*v,_.done=Math.abs(d-N)+Math.abs(k)<.002,_.done?d:N}}extend(Spring,{duration:makeSetterGetter("_duration",recalculate),overshoot:makeSetterGetter("_overshoot",recalculate)});class PID extends Controller{constructor(s=.1,d=.01,v=0,_=1e3){super(),this.p(s).i(d).d(v).windup(_)}step(s,d,v,_){if(typeof s=="string")return s;if(_.done=v===1/0,v===1/0)return d;if(v===0)return s;const k=d-s;let I=(_.integral||0)+k*v;const N=(k-(_.error||0))/v,D=this._windup;return D!==!1&&(I=Math.max(-D,Math.min(I,D))),_.error=k,_.integral=I,_.done=Math.abs(k)<.001,_.done?d:s+(this.P*k+this.I*I+this.D*N)}}extend(PID,{windup:makeSetterGetter("_windup"),p:makeSetterGetter("P"),i:makeSetterGetter("I"),d:makeSetterGetter("D")});const segmentParameters={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0},pathHandlers={M:function(m,s,d){return s.x=d.x=m[0],s.y=d.y=m[1],["M",s.x,s.y]},L:function(m,s){return s.x=m[0],s.y=m[1],["L",m[0],m[1]]},H:function(m,s){return s.x=m[0],["H",m[0]]},V:function(m,s){return s.y=m[0],["V",m[0]]},C:function(m,s){return s.x=m[4],s.y=m[5],["C",m[0],m[1],m[2],m[3],m[4],m[5]]},S:function(m,s){return s.x=m[2],s.y=m[3],["S",m[0],m[1],m[2],m[3]]},Q:function(m,s){return s.x=m[2],s.y=m[3],["Q",m[0],m[1],m[2],m[3]]},T:function(m,s){return s.x=m[0],s.y=m[1],["T",m[0],m[1]]},Z:function(m,s,d){return s.x=d.x,s.y=d.y,["Z"]},A:function(m,s){return s.x=m[5],s.y=m[6],["A",m[0],m[1],m[2],m[3],m[4],m[5],m[6]]}},mlhvqtcsaz="mlhvqtcsaz".split("");for(let m=0,s=mlhvqtcsaz.length;m<s;++m)pathHandlers[mlhvqtcsaz[m]]=function(d){return function(v,_,k){if(d==="H")v[0]=v[0]+_.x;else if(d==="V")v[0]=v[0]+_.y;else if(d==="A")v[5]=v[5]+_.x,v[6]=v[6]+_.y;else for(let I=0,N=v.length;I<N;++I)v[I]=v[I]+(I%2?_.y:_.x);return pathHandlers[d](v,_,k)}}(mlhvqtcsaz[m].toUpperCase());function makeAbsolut(m){const s=m.segment[0];return pathHandlers[s](m.segment.slice(1),m.p,m.p0)}function segmentComplete(m){return m.segment.length&&m.segment.length-1===segmentParameters[m.segment[0].toUpperCase()]}function startNewSegment(m,s){m.inNumber&&finalizeNumber(m,!1);const d=isPathLetter.test(s);if(d)m.segment=[s];else{const v=m.lastCommand,_=v.toLowerCase(),k=v===_;m.segment=[_==="m"?k?"l":"L":v]}return m.inSegment=!0,m.lastCommand=m.segment[0],d}function finalizeNumber(m,s){if(!m.inNumber)throw new Error("Parser Error");m.number&&m.segment.push(parseFloat(m.number)),m.inNumber=s,m.number="",m.pointSeen=!1,m.hasExponent=!1,segmentComplete(m)&&finalizeSegment(m)}function finalizeSegment(m){m.inSegment=!1,m.absolute&&(m.segment=makeAbsolut(m)),m.segments.push(m.segment)}function isArcFlag(m){if(!m.segment.length)return!1;const s=m.segment[0].toUpperCase()==="A",d=m.segment.length;return s&&(d===4||d===5)}function isExponential(m){return m.lastToken.toUpperCase()==="E"}function pathParser(m,s=!0){let d=0,v="";const _={segment:[],inNumber:!1,number:"",lastToken:"",inSegment:!1,segments:[],pointSeen:!1,hasExponent:!1,absolute:s,p0:new Point,p:new Point};for(;_.lastToken=v,v=m.charAt(d++);)if(!(!_.inSegment&&startNewSegment(_,v))){if(v==="."){if(_.pointSeen||_.hasExponent){finalizeNumber(_,!1),--d;continue}_.inNumber=!0,_.pointSeen=!0,_.number+=v;continue}if(!isNaN(parseInt(v))){if(_.number==="0"||isArcFlag(_)){_.inNumber=!0,_.number=v,finalizeNumber(_,!0);continue}_.inNumber=!0,_.number+=v;continue}if(v===" "||v===","){_.inNumber&&finalizeNumber(_,!1);continue}if(v==="-"){if(_.inNumber&&!isExponential(_)){finalizeNumber(_,!1),--d;continue}_.number+=v,_.inNumber=!0;continue}if(v.toUpperCase()==="E"){_.number+=v,_.hasExponent=!0;continue}if(isPathLetter.test(v)){if(_.inNumber)finalizeNumber(_,!1);else if(segmentComplete(_))finalizeSegment(_);else throw new Error("parser Error");--d}}return _.inNumber&&finalizeNumber(_,!1),_.inSegment&&segmentComplete(_)&&finalizeSegment(_),_.segments}function arrayToString(m){let s="";for(let d=0,v=m.length;d<v;d++)s+=m[d][0],m[d][1]!=null&&(s+=m[d][1],m[d][2]!=null&&(s+=" ",s+=m[d][2],m[d][3]!=null&&(s+=" ",s+=m[d][3],s+=" ",s+=m[d][4],m[d][5]!=null&&(s+=" ",s+=m[d][5],s+=" ",s+=m[d][6],m[d][7]!=null&&(s+=" ",s+=m[d][7])))));return s+" "}class PathArray extends SVGArray{bbox(){return parser().path.setAttribute("d",this.toString()),new Box(parser.nodes.path.getBBox())}move(s,d){const v=this.bbox();if(s-=v.x,d-=v.y,!isNaN(s)&&!isNaN(d))for(let _,k=this.length-1;k>=0;k--)_=this[k][0],_==="M"||_==="L"||_==="T"?(this[k][1]+=s,this[k][2]+=d):_==="H"?this[k][1]+=s:_==="V"?this[k][1]+=d:_==="C"||_==="S"||_==="Q"?(this[k][1]+=s,this[k][2]+=d,this[k][3]+=s,this[k][4]+=d,_==="C"&&(this[k][5]+=s,this[k][6]+=d)):_==="A"&&(this[k][6]+=s,this[k][7]+=d);return this}parse(s="M0 0"){return Array.isArray(s)&&(s=Array.prototype.concat.apply([],s).toString()),pathParser(s)}size(s,d){const v=this.bbox();let _,k;for(v.width=v.width===0?1:v.width,v.height=v.height===0?1:v.height,_=this.length-1;_>=0;_--)k=this[_][0],k==="M"||k==="L"||k==="T"?(this[_][1]=(this[_][1]-v.x)*s/v.width+v.x,this[_][2]=(this[_][2]-v.y)*d/v.height+v.y):k==="H"?this[_][1]=(this[_][1]-v.x)*s/v.width+v.x:k==="V"?this[_][1]=(this[_][1]-v.y)*d/v.height+v.y:k==="C"||k==="S"||k==="Q"?(this[_][1]=(this[_][1]-v.x)*s/v.width+v.x,this[_][2]=(this[_][2]-v.y)*d/v.height+v.y,this[_][3]=(this[_][3]-v.x)*s/v.width+v.x,this[_][4]=(this[_][4]-v.y)*d/v.height+v.y,k==="C"&&(this[_][5]=(this[_][5]-v.x)*s/v.width+v.x,this[_][6]=(this[_][6]-v.y)*d/v.height+v.y)):k==="A"&&(this[_][1]=this[_][1]*s/v.width,this[_][2]=this[_][2]*d/v.height,this[_][6]=(this[_][6]-v.x)*s/v.width+v.x,this[_][7]=(this[_][7]-v.y)*d/v.height+v.y);return this}toString(){return arrayToString(this)}}const getClassForType=m=>{const s=typeof m;return s==="number"?SVGNumber:s==="string"?Color.isColor(m)?Color:delimiter.test(m)?isPathLetter.test(m)?PathArray:SVGArray:numberAndUnit.test(m)?SVGNumber:NonMorphable:morphableTypes.indexOf(m.constructor)>-1?m.constructor:Array.isArray(m)?SVGArray:s==="object"?ObjectBag:NonMorphable};class Morphable{constructor(s){this._stepper=s||new Ease("-"),this._from=null,this._to=null,this._type=null,this._context=null,this._morphObj=null}at(s){return this._morphObj.morph(this._from,this._to,s,this._stepper,this._context)}done(){return this._context.map(this._stepper.done).reduce(function(d,v){return d&&v},!0)}from(s){return s==null?this._from:(this._from=this._set(s),this)}stepper(s){return s==null?this._stepper:(this._stepper=s,this)}to(s){return s==null?this._to:(this._to=this._set(s),this)}type(s){return s==null?this._type:(this._type=s,this)}_set(s){this._type||this.type(getClassForType(s));let d=new this._type(s);return this._type===Color&&(d=this._to?d[this._to[4]]():this._from?d[this._from[4]]():d),this._type===ObjectBag&&(d=this._to?d.align(this._to):this._from?d.align(this._from):d),d=d.toConsumable(),this._morphObj=this._morphObj||new this._type,this._context=this._context||Array.apply(null,Array(d.length)).map(Object).map(function(v){return v.done=!0,v}),d}}class NonMorphable{constructor(...s){this.init(...s)}init(s){return s=Array.isArray(s)?s[0]:s,this.value=s,this}toArray(){return[this.value]}valueOf(){return this.value}}class TransformBag{constructor(...s){this.init(...s)}init(s){return Array.isArray(s)&&(s={scaleX:s[0],scaleY:s[1],shear:s[2],rotate:s[3],translateX:s[4],translateY:s[5],originX:s[6],originY:s[7]}),Object.assign(this,TransformBag.defaults,s),this}toArray(){const s=this;return[s.scaleX,s.scaleY,s.shear,s.rotate,s.translateX,s.translateY,s.originX,s.originY]}}TransformBag.defaults={scaleX:1,scaleY:1,shear:0,rotate:0,translateX:0,translateY:0,originX:0,originY:0};const sortByKey=(m,s)=>m[0]<s[0]?-1:m[0]>s[0]?1:0;class ObjectBag{constructor(...s){this.init(...s)}align(s){const d=this.values;for(let v=0,_=d.length;v<_;++v){if(d[v+1]===s[v+1]){if(d[v+1]===Color&&s[v+7]!==d[v+7]){const N=s[v+7],D=new Color(this.values.splice(v+3,5))[N]().toArray();this.values.splice(v+3,0,...D)}v+=d[v+2]+2;continue}if(!s[v+1])return this;const k=new s[v+1]().toArray(),I=d[v+2]+3;d.splice(v,I,s[v],s[v+1],s[v+2],...k),v+=d[v+2]+2}return this}init(s){if(this.values=[],Array.isArray(s)){this.values=s.slice();return}s=s||{};const d=[];for(const v in s){const _=getClassForType(s[v]),k=new _(s[v]).toArray();d.push([v,_,k.length,...k])}return d.sort(sortByKey),this.values=d.reduce((v,_)=>v.concat(_),[]),this}toArray(){return this.values}valueOf(){const s={},d=this.values;for(;d.length;){const v=d.shift(),_=d.shift(),k=d.shift(),I=d.splice(0,k);s[v]=new _(I)}return s}}const morphableTypes=[NonMorphable,TransformBag,ObjectBag];function registerMorphableType(m=[]){morphableTypes.push(...[].concat(m))}function makeMorphable(){extend(morphableTypes,{to(m){return new Morphable().type(this.constructor).from(this.toArray()).to(m)},fromArray(m){return this.init(m),this},toConsumable(){return this.toArray()},morph(m,s,d,v,_){const k=function(I,N){return v.step(I,s[N],d,_[N],_)};return this.fromArray(m.map(k))}})}class Path extends Shape{constructor(s,d=s){super(nodeOrNew("path",s),d)}array(){return this._array||(this._array=new PathArray(this.attr("d")))}clear(){return delete this._array,this}height(s){return s==null?this.bbox().height:this.size(this.bbox().width,s)}move(s,d){return this.attr("d",this.array().move(s,d))}plot(s){return s==null?this.array():this.clear().attr("d",typeof s=="string"?s:this._array=new PathArray(s))}size(s,d){const v=proportionalSize(this,s,d);return this.attr("d",this.array().size(v.width,v.height))}width(s){return s==null?this.bbox().width:this.size(s,this.bbox().height)}x(s){return s==null?this.bbox().x:this.move(s,this.bbox().y)}y(s){return s==null?this.bbox().y:this.move(this.bbox().x,s)}}Path.prototype.MorphArray=PathArray;registerMethods({Container:{path:wrapWithAttrCheck(function(m){return this.put(new Path).plot(m||new PathArray)})}});register(Path,"Path");function array(){return this._array||(this._array=new PointArray(this.attr("points")))}function clear(){return delete this._array,this}function move$2(m,s){return this.attr("points",this.array().move(m,s))}function plot(m){return m==null?this.array():this.clear().attr("points",typeof m=="string"?m:this._array=new PointArray(m))}function size$1(m,s){const d=proportionalSize(this,m,s);return this.attr("points",this.array().size(d.width,d.height))}var poly={__proto__:null,array,clear,move:move$2,plot,size:size$1};class Polygon extends Shape{constructor(s,d=s){super(nodeOrNew("polygon",s),d)}}registerMethods({Container:{polygon:wrapWithAttrCheck(function(m){return this.put(new Polygon).plot(m||new PointArray)})}});extend(Polygon,pointed);extend(Polygon,poly);register(Polygon,"Polygon");class Polyline extends Shape{constructor(s,d=s){super(nodeOrNew("polyline",s),d)}}registerMethods({Container:{polyline:wrapWithAttrCheck(function(m){return this.put(new Polyline).plot(m||new PointArray)})}});extend(Polyline,pointed);extend(Polyline,poly);register(Polyline,"Polyline");class Rect extends Shape{constructor(s,d=s){super(nodeOrNew("rect",s),d)}}extend(Rect,{rx,ry});registerMethods({Container:{rect:wrapWithAttrCheck(function(m,s){return this.put(new Rect).size(m,s)})}});register(Rect,"Rect");class Queue{constructor(){this._first=null,this._last=null}first(){return this._first&&this._first.value}last(){return this._last&&this._last.value}push(s){const d=typeof s.next<"u"?s:{value:s,next:null,prev:null};return this._last?(d.prev=this._last,this._last.next=d,this._last=d):(this._last=d,this._first=d),d}remove(s){s.prev&&(s.prev.next=s.next),s.next&&(s.next.prev=s.prev),s===this._last&&(this._last=s.prev),s===this._first&&(this._first=s.next),s.prev=null,s.next=null}shift(){const s=this._first;return s?(this._first=s.next,this._first&&(this._first.prev=null),this._last=this._first?this._last:null,s.value):null}}const Animator={nextDraw:null,frames:new Queue,timeouts:new Queue,immediates:new Queue,timer:()=>globals.window.performance||globals.window.Date,transforms:[],frame(m){const s=Animator.frames.push({run:m});return Animator.nextDraw===null&&(Animator.nextDraw=globals.window.requestAnimationFrame(Animator._draw)),s},timeout(m,s){s=s||0;const d=Animator.timer().now()+s,v=Animator.timeouts.push({run:m,time:d});return Animator.nextDraw===null&&(Animator.nextDraw=globals.window.requestAnimationFrame(Animator._draw)),v},immediate(m){const s=Animator.immediates.push(m);return Animator.nextDraw===null&&(Animator.nextDraw=globals.window.requestAnimationFrame(Animator._draw)),s},cancelFrame(m){m!=null&&Animator.frames.remove(m)},clearTimeout(m){m!=null&&Animator.timeouts.remove(m)},cancelImmediate(m){m!=null&&Animator.immediates.remove(m)},_draw(m){let s=null;const d=Animator.timeouts.last();for(;(s=Animator.timeouts.shift())&&(m>=s.time?s.run():Animator.timeouts.push(s),s!==d););let v=null;const _=Animator.frames.last();for(;v!==_&&(v=Animator.frames.shift());)v.run(m);let k=null;for(;k=Animator.immediates.shift();)k();Animator.nextDraw=Animator.timeouts.first()||Animator.frames.first()?globals.window.requestAnimationFrame(Animator._draw):null}},makeSchedule=function(m){const s=m.start,d=m.runner.duration(),v=s+d;return{start:s,duration:d,end:v,runner:m.runner}},defaultSource=function(){const m=globals.window;return(m.performance||m.Date).now()};class Timeline extends EventTarget{constructor(s=defaultSource){super(),this._timeSource=s,this._startTime=0,this._speed=1,this._persist=0,this._nextFrame=null,this._paused=!0,this._runners=[],this._runnerIds=[],this._lastRunnerId=-1,this._time=0,this._lastSourceTime=0,this._lastStepTime=0,this._step=this._stepFn.bind(this,!1),this._stepImmediate=this._stepFn.bind(this,!0)}active(){return!!this._nextFrame}finish(){return this.time(this.getEndTimeOfTimeline()+1),this.pause()}getEndTime(){const s=this.getLastRunnerInfo(),d=s?s.runner.duration():0;return(s?s.start:this._time)+d}getEndTimeOfTimeline(){const s=this._runners.map(d=>d.start+d.runner.duration());return Math.max(0,...s)}getLastRunnerInfo(){return this.getRunnerInfoById(this._lastRunnerId)}getRunnerInfoById(s){return this._runners[this._runnerIds.indexOf(s)]||null}pause(){return this._paused=!0,this._continue()}persist(s){return s==null?this._persist:(this._persist=s,this)}play(){return this._paused=!1,this.updateTime()._continue()}reverse(s){const d=this.speed();if(s==null)return this.speed(-d);const v=Math.abs(d);return this.speed(s?-v:v)}schedule(s,d,v){if(s==null)return this._runners.map(makeSchedule);let _=0;const k=this.getEndTime();if(d=d||0,v==null||v==="last"||v==="after")_=k;else if(v==="absolute"||v==="start")_=d,d=0;else if(v==="now")_=this._time;else if(v==="relative"){const D=this.getRunnerInfoById(s.id);D&&(_=D.start+d,d=0)}else if(v==="with-last"){const D=this.getLastRunnerInfo();_=D?D.start:this._time}else throw new Error('Invalid value for the "when" parameter');s.unschedule(),s.timeline(this);const I=s.persist(),N={persist:I===null?this._persist:I,start:_+d,runner:s};return this._lastRunnerId=s.id,this._runners.push(N),this._runners.sort((D,F)=>D.start-F.start),this._runnerIds=this._runners.map(D=>D.runner.id),this.updateTime()._continue(),this}seek(s){return this.time(this._time+s)}source(s){return s==null?this._timeSource:(this._timeSource=s,this)}speed(s){return s==null?this._speed:(this._speed=s,this)}stop(){return this.time(0),this.pause()}time(s){return s==null?this._time:(this._time=s,this._continue(!0))}unschedule(s){const d=this._runnerIds.indexOf(s.id);return d<0?this:(this._runners.splice(d,1),this._runnerIds.splice(d,1),s.timeline(null),this)}updateTime(){return this.active()||(this._lastSourceTime=this._timeSource()),this}_continue(s=!1){return Animator.cancelFrame(this._nextFrame),this._nextFrame=null,s?this._stepImmediate():this._paused?this:(this._nextFrame=Animator.frame(this._step),this)}_stepFn(s=!1){const d=this._timeSource();let v=d-this._lastSourceTime;s&&(v=0);const _=this._speed*v+(this._time-this._lastStepTime);this._lastSourceTime=d,s||(this._time+=_,this._time=this._time<0?0:this._time),this._lastStepTime=this._time,this.fire("time",this._time);for(let I=this._runners.length;I--;){const N=this._runners[I],D=N.runner;this._time-N.start<=0&&D.reset()}let k=!1;for(let I=0,N=this._runners.length;I<N;I++){const D=this._runners[I],F=D.runner;let z=_;const $=this._time-D.start;if($<=0){k=!0;continue}else $<z&&(z=$);if(!F.active())continue;F.step(z).done?D.persist!==!0&&F.duration()-F.time()+this._time+D.persist<this._time&&(F.unschedule(),--I,--N):k=!0}return k&&!(this._speed<0&&this._time===0)||this._runnerIds.length&&this._speed<0&&this._time>0?this._continue():(this.pause(),this.fire("finished")),this}}registerMethods({Element:{timeline:function(m){return m==null?(this._timeline=this._timeline||new Timeline,this._timeline):(this._timeline=m,this)}}});class Runner extends EventTarget{constructor(s){super(),this.id=Runner.id++,s=s??timeline.duration,s=typeof s=="function"?new Controller(s):s,this._element=null,this._timeline=null,this.done=!1,this._queue=[],this._duration=typeof s=="number"&&s,this._isDeclarative=s instanceof Controller,this._stepper=this._isDeclarative?s:new Ease,this._history={},this.enabled=!0,this._time=0,this._lastTime=0,this._reseted=!0,this.transforms=new Matrix,this.transformId=1,this._haveReversed=!1,this._reverse=!1,this._loopsDone=0,this._swing=!1,this._wait=0,this._times=1,this._frameId=null,this._persist=this._isDeclarative?!0:null}static sanitise(s,d,v){let _=1,k=!1,I=0;return s=s||timeline.duration,d=d||timeline.delay,v=v||"last",typeof s=="object"&&!(s instanceof Stepper)&&(d=s.delay||d,v=s.when||v,k=s.swing||k,_=s.times||_,I=s.wait||I,s=s.duration||timeline.duration),{duration:s,delay:d,swing:k,times:_,wait:I,when:v}}active(s){return s==null?this.enabled:(this.enabled=s,this)}addTransform(s,d){return this.transforms.lmultiplyO(s),this}after(s){return this.on("finished",s)}animate(s,d,v){const _=Runner.sanitise(s,d,v),k=new Runner(_.duration);return this._timeline&&k.timeline(this._timeline),this._element&&k.element(this._element),k.loop(_).schedule(_.delay,_.when)}clearTransform(){return this.transforms=new Matrix,this}clearTransformsFromQueue(){(!this.done||!this._timeline||!this._timeline._runnerIds.includes(this.id))&&(this._queue=this._queue.filter(s=>!s.isTransform))}delay(s){return this.animate(0,s)}duration(){return this._times*(this._wait+this._duration)-this._wait}during(s){return this.queue(null,s)}ease(s){return this._stepper=new Ease(s),this}element(s){return s==null?this._element:(this._element=s,s._prepareRunner(),this)}finish(){return this.step(1/0)}loop(s,d,v){return typeof s=="object"&&(d=s.swing,v=s.wait,s=s.times),this._times=s||1/0,this._swing=d||!1,this._wait=v||0,this._times===!0&&(this._times=1/0),this}loops(s){const d=this._duration+this._wait;if(s==null){const I=Math.floor(this._time/d),D=(this._time-I*d)/this._duration;return Math.min(I+D,this._times)}const v=Math.floor(s),_=s%1,k=d*v+this._duration*_;return this.time(k)}persist(s){return s==null?this._persist:(this._persist=s,this)}position(s){const d=this._time,v=this._duration,_=this._wait,k=this._times,I=this._swing,N=this._reverse;let D;if(s==null){const V=function(ot){const lt=I*Math.floor(ot%(2*(_+v))/(_+v)),bt=lt&&!N||!lt&&N,ft=Math.pow(-1,bt)*(ot%(_+v))/v+bt;return Math.max(Math.min(ft,1),0)},W=k*(_+v)-_;return D=d<=0?Math.round(V(1e-5)):d<W?V(d):Math.round(V(W-1e-5)),D}const F=Math.floor(this.loops()),z=I&&F%2===0;return D=F+(z&&!N||N&&z?s:1-s),this.loops(D)}progress(s){return s==null?Math.min(1,this._time/this.duration()):this.time(s*this.duration())}queue(s,d,v,_){return this._queue.push({initialiser:s||noop,runner:d||noop,retarget:v,isTransform:_,initialised:!1,finished:!1}),this.timeline()&&this.timeline()._continue(),this}reset(){return this._reseted?this:(this.time(0),this._reseted=!0,this)}reverse(s){return this._reverse=s??!this._reverse,this}schedule(s,d,v){if(s instanceof Timeline||(v=d,d=s,s=this.timeline()),!s)throw Error("Runner cannot be scheduled without timeline");return s.schedule(this,d,v),this}step(s){if(!this.enabled)return this;s=s??16,this._time+=s;const d=this.position(),v=this._lastPosition!==d&&this._time>=0;this._lastPosition=d;const _=this.duration(),k=this._lastTime<=0&&this._time>0,I=this._lastTime<_&&this._time>=_;this._lastTime=this._time,k&&this.fire("start",this);const N=this._isDeclarative;this.done=!N&&!I&&this._time>=_,this._reseted=!1;let D=!1;return(v||N)&&(this._initialise(v),this.transforms=new Matrix,D=this._run(N?s:d),this.fire("step",this)),this.done=this.done||D&&N,I&&this.fire("finished",this),this}time(s){if(s==null)return this._time;const d=s-this._time;return this.step(d),this}timeline(s){return typeof s>"u"?this._timeline:(this._timeline=s,this)}unschedule(){const s=this.timeline();return s&&s.unschedule(this),this}_initialise(s){if(!(!s&&!this._isDeclarative))for(let d=0,v=this._queue.length;d<v;++d){const _=this._queue[d],k=this._isDeclarative||!_.initialised&&s;s=!_.finished,k&&s&&(_.initialiser.call(this),_.initialised=!0)}}_rememberMorpher(s,d){if(this._history[s]={morpher:d,caller:this._queue[this._queue.length-1]},this._isDeclarative){const v=this.timeline();v&&v.play()}}_run(s){let d=!0;for(let v=0,_=this._queue.length;v<_;++v){const k=this._queue[v],I=k.runner.call(this,s);k.finished=k.finished||I===!0,d=d&&k.finished}return d}_tryRetarget(s,d,v){if(this._history[s]){if(!this._history[s].caller.initialised){const k=this._queue.indexOf(this._history[s].caller);return this._queue.splice(k,1),!1}this._history[s].caller.retarget?this._history[s].caller.retarget.call(this,d,v):this._history[s].morpher.to(d),this._history[s].caller.finished=!1;const _=this.timeline();return _&&_.play(),!0}return!1}}Runner.id=0;class FakeRunner{constructor(s=new Matrix,d=-1,v=!0){this.transforms=s,this.id=d,this.done=v}clearTransformsFromQueue(){}}extend([Runner,FakeRunner],{mergeWith(m){return new FakeRunner(m.transforms.lmultiply(this.transforms),m.id)}});const lmultiply=(m,s)=>m.lmultiplyO(s),getRunnerTransform=m=>m.transforms;function mergeTransforms(){const s=this._transformationRunners.runners.map(getRunnerTransform).reduce(lmultiply,new Matrix);this.transform(s),this._transformationRunners.merge(),this._transformationRunners.length()===1&&(this._frameId=null)}class RunnerArray{constructor(){this.runners=[],this.ids=[]}add(s){if(this.runners.includes(s))return;const d=s.id+1;return this.runners.push(s),this.ids.push(d),this}clearBefore(s){const d=this.ids.indexOf(s+1)||1;return this.ids.splice(0,d,0),this.runners.splice(0,d,new FakeRunner).forEach(v=>v.clearTransformsFromQueue()),this}edit(s,d){const v=this.ids.indexOf(s+1);return this.ids.splice(v,1,s+1),this.runners.splice(v,1,d),this}getByID(s){return this.runners[this.ids.indexOf(s+1)]}length(){return this.ids.length}merge(){let s=null;for(let d=0;d<this.runners.length;++d){const v=this.runners[d];if(s&&v.done&&s.done&&(!v._timeline||!v._timeline._runnerIds.includes(v.id))&&(!s._timeline||!s._timeline._runnerIds.includes(s.id))){this.remove(v.id);const k=v.mergeWith(s);this.edit(s.id,k),s=k,--d}else s=v}return this}remove(s){const d=this.ids.indexOf(s+1);return this.ids.splice(d,1),this.runners.splice(d,1),this}}registerMethods({Element:{animate(m,s,d){const v=Runner.sanitise(m,s,d),_=this.timeline();return new Runner(v.duration).loop(v).element(this).timeline(_.play()).schedule(v.delay,v.when)},delay(m,s){return this.animate(0,m,s)},_clearTransformRunnersBefore(m){this._transformationRunners.clearBefore(m.id)},_currentTransform(m){return this._transformationRunners.runners.filter(s=>s.id<=m.id).map(getRunnerTransform).reduce(lmultiply,new Matrix)},_addRunner(m){this._transformationRunners.add(m),Animator.cancelImmediate(this._frameId),this._frameId=Animator.immediate(mergeTransforms.bind(this))},_prepareRunner(){this._frameId==null&&(this._transformationRunners=new RunnerArray().add(new FakeRunner(new Matrix(this))))}}});const difference=(m,s)=>m.filter(d=>!s.includes(d));extend(Runner,{attr(m,s){return this.styleAttr("attr",m,s)},css(m,s){return this.styleAttr("css",m,s)},styleAttr(m,s,d){if(typeof s=="string")return this.styleAttr(m,{[s]:d});let v=s;if(this._tryRetarget(m,v))return this;let _=new Morphable(this._stepper).to(v),k=Object.keys(v);return this.queue(function(){_=_.from(this.element()[m](k))},function(I){return this.element()[m](_.at(I).valueOf()),_.done()},function(I){const N=Object.keys(I),D=difference(N,k);if(D.length){const z=this.element()[m](D),$=new ObjectBag(_.from()).valueOf();Object.assign($,z),_.from($)}const F=new ObjectBag(_.to()).valueOf();Object.assign(F,I),_.to(F),k=N,v=I}),this._rememberMorpher(m,_),this},zoom(m,s){if(this._tryRetarget("zoom",m,s))return this;let d=new Morphable(this._stepper).to(new SVGNumber(m));return this.queue(function(){d=d.from(this.element().zoom())},function(v){return this.element().zoom(d.at(v),s),d.done()},function(v,_){s=_,d.to(v)}),this._rememberMorpher("zoom",d),this},transform(m,s,d){if(s=m.relative||s,this._isDeclarative&&!s&&this._tryRetarget("transform",m))return this;const v=Matrix.isMatrixLike(m);d=m.affine!=null?m.affine:d??!v;const _=new Morphable(this._stepper).type(d?TransformBag:Matrix);let k,I,N,D,F;function z(){I=I||this.element(),k=k||getOrigin(m,I),F=new Matrix(s?void 0:I),I._addRunner(this),s||I._clearTransformRunnersBefore(this)}function $(W){s||this.clearTransform();const{x:ot,y:lt}=new Point(k).transform(I._currentTransform(this));let bt=new Matrix({...m,origin:[ot,lt]}),ft=this._isDeclarative&&N?N:F;if(d){bt=bt.decompose(ot,lt),ft=ft.decompose(ot,lt);const Dt=bt.rotate,Ht=ft.rotate,Ft=[Dt-360,Dt,Dt+360],Bt=Ft.map(de=>Math.abs(de-Ht)),Wt=Math.min(...Bt),Pt=Bt.indexOf(Wt);bt.rotate=Ft[Pt]}s&&(v||(bt.rotate=m.rotate||0),this._isDeclarative&&D&&(ft.rotate=D)),_.from(ft),_.to(bt);const Tt=_.at(W);return D=Tt.rotate,N=new Matrix(Tt),this.addTransform(N),I._addRunner(this),_.done()}function V(W){(W.origin||"center").toString()!==(m.origin||"center").toString()&&(k=getOrigin(W,I)),m={...W,origin:k}}return this.queue(z,$,V,!0),this._isDeclarative&&this._rememberMorpher("transform",_),this},x(m,s){return this._queueNumber("x",m)},y(m){return this._queueNumber("y",m)},dx(m=0){return this._queueNumberDelta("x",m)},dy(m=0){return this._queueNumberDelta("y",m)},dmove(m,s){return this.dx(m).dy(s)},_queueNumberDelta(m,s){if(s=new SVGNumber(s),this._tryRetarget(m,s))return this;const d=new Morphable(this._stepper).to(s);let v=null;return this.queue(function(){v=this.element()[m](),d.from(v),d.to(v+s)},function(_){return this.element()[m](d.at(_)),d.done()},function(_){d.to(v+new SVGNumber(_))}),this._rememberMorpher(m,d),this},_queueObject(m,s){if(this._tryRetarget(m,s))return this;const d=new Morphable(this._stepper).to(s);return this.queue(function(){d.from(this.element()[m]())},function(v){return this.element()[m](d.at(v)),d.done()}),this._rememberMorpher(m,d),this},_queueNumber(m,s){return this._queueObject(m,new SVGNumber(s))},cx(m){return this._queueNumber("cx",m)},cy(m){return this._queueNumber("cy",m)},move(m,s){return this.x(m).y(s)},center(m,s){return this.cx(m).cy(s)},size(m,s){let d;return(!m||!s)&&(d=this._element.bbox()),m||(m=d.width/d.height*s),s||(s=d.height/d.width*m),this.width(m).height(s)},width(m){return this._queueNumber("width",m)},height(m){return this._queueNumber("height",m)},plot(m,s,d,v){if(arguments.length===4)return this.plot([m,s,d,v]);if(this._tryRetarget("plot",m))return this;const _=new Morphable(this._stepper).type(this._element.MorphArray).to(m);return this.queue(function(){_.from(this._element.array())},function(k){return this._element.plot(_.at(k)),_.done()}),this._rememberMorpher("plot",_),this},leading(m){return this._queueNumber("leading",m)},viewbox(m,s,d,v){return this._queueObject("viewbox",new Box(m,s,d,v))},update(m){return typeof m!="object"?this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]}):(m.opacity!=null&&this.attr("stop-opacity",m.opacity),m.color!=null&&this.attr("stop-color",m.color),m.offset!=null&&this.attr("offset",m.offset),this)}});extend(Runner,{rx,ry,from,to});register(Runner,"Runner");class Svg extends Container$1{constructor(s,d=s){super(nodeOrNew("svg",s),d),this.namespace()}defs(){return this.isRoot()?adopt(this.node.querySelector("defs"))||this.put(new Defs):this.root().defs()}isRoot(){return!this.node.parentNode||!(this.node.parentNode instanceof globals.window.SVGElement)&&this.node.parentNode.nodeName!=="#document-fragment"}namespace(){return this.isRoot()?this.attr({xmlns:svg,version:"1.1"}).attr("xmlns:xlink",xlink,xmlns).attr("xmlns:svgjs",svgjs,xmlns):this.root().namespace()}removeNamespace(){return this.attr({xmlns:null,version:null}).attr("xmlns:xlink",null,xmlns).attr("xmlns:svgjs",null,xmlns)}root(){return this.isRoot()?this:super.root()}}registerMethods({Container:{nested:wrapWithAttrCheck(function(){return this.put(new Svg)})}});register(Svg,"Svg",!0);let Symbol$1=class extends Container$1{constructor(s,d=s){super(nodeOrNew("symbol",s),d)}};registerMethods({Container:{symbol:wrapWithAttrCheck(function(){return this.put(new Symbol$1)})}});register(Symbol$1,"Symbol");function plain(m){return this._build===!1&&this.clear(),this.node.appendChild(globals.document.createTextNode(m)),this}function length(){return this.node.getComputedTextLength()}function x$1(m,s=this.bbox()){return m==null?s.x:this.attr("x",this.attr("x")+m-s.x)}function y$1(m,s=this.bbox()){return m==null?s.y:this.attr("y",this.attr("y")+m-s.y)}function move$1(m,s,d=this.bbox()){return this.x(m,d).y(s,d)}function cx(m,s=this.bbox()){return m==null?s.cx:this.attr("x",this.attr("x")+m-s.cx)}function cy(m,s=this.bbox()){return m==null?s.cy:this.attr("y",this.attr("y")+m-s.cy)}function center(m,s,d=this.bbox()){return this.cx(m,d).cy(s,d)}function ax(m){return this.attr("x",m)}function ay(m){return this.attr("y",m)}function amove(m,s){return this.ax(m).ay(s)}function build(m){return this._build=!!m,this}var textable={__proto__:null,plain,length,x:x$1,y:y$1,move:move$1,cx,cy,center,ax,ay,amove,build};class Text extends Shape{constructor(s,d=s){super(nodeOrNew("text",s),d),this.dom.leading=new SVGNumber(1.3),this._rebuild=!0,this._build=!1}leading(s){return s==null?this.dom.leading:(this.dom.leading=new SVGNumber(s),this.rebuild())}rebuild(s){if(typeof s=="boolean"&&(this._rebuild=s),this._rebuild){const d=this;let v=0;const _=this.dom.leading;this.each(function(k){const I=globals.window.getComputedStyle(this.node).getPropertyValue("font-size"),N=_*new SVGNumber(I);this.dom.newLined&&(this.attr("x",d.attr("x")),this.text()===`
`?v+=N:(this.attr("dy",k?N+v:0),v=0))}),this.fire("rebuild")}return this}setData(s){return this.dom=s,this.dom.leading=new SVGNumber(s.leading||1.3),this}text(s){if(s===void 0){const d=this.node.childNodes;let v=0;s="";for(let _=0,k=d.length;_<k;++_){if(d[_].nodeName==="textPath"){_===0&&(v=1);continue}_!==v&&d[_].nodeType!==3&&adopt(d[_]).dom.newLined===!0&&(s+=`
`),s+=d[_].textContent}return s}if(this.clear().build(!0),typeof s=="function")s.call(this,this);else{s=(s+"").split(`
`);for(let d=0,v=s.length;d<v;d++)this.newLine(s[d])}return this.build(!1).rebuild()}}extend(Text,textable);registerMethods({Container:{text:wrapWithAttrCheck(function(m=""){return this.put(new Text).text(m)}),plain:wrapWithAttrCheck(function(m=""){return this.put(new Text).plain(m)})}});register(Text,"Text");class Tspan extends Shape{constructor(s,d=s){super(nodeOrNew("tspan",s),d),this._build=!1}dx(s){return this.attr("dx",s)}dy(s){return this.attr("dy",s)}newLine(){this.dom.newLined=!0;const s=this.parent();if(!(s instanceof Text))return this;const d=s.index(this),v=globals.window.getComputedStyle(this.node).getPropertyValue("font-size"),_=s.dom.leading*new SVGNumber(v);return this.dy(d?_:0).attr("x",s.x())}text(s){return s==null?this.node.textContent+(this.dom.newLined?`
`:""):(typeof s=="function"?(this.clear().build(!0),s.call(this,this),this.build(!1)):this.plain(s),this)}}extend(Tspan,textable);registerMethods({Tspan:{tspan:wrapWithAttrCheck(function(m=""){const s=new Tspan;return this._build||this.clear(),this.put(s).text(m)})},Text:{newLine:function(m=""){return this.tspan(m).newLine()}}});register(Tspan,"Tspan");class Circle extends Shape{constructor(s,d=s){super(nodeOrNew("circle",s),d)}radius(s){return this.attr("r",s)}rx(s){return this.attr("r",s)}ry(s){return this.rx(s)}size(s){return this.radius(new SVGNumber(s).divide(2))}}extend(Circle,{x:x$3,y:y$3,cx:cx$1,cy:cy$1,width:width$2,height:height$2});registerMethods({Container:{circle:wrapWithAttrCheck(function(m=0){return this.put(new Circle).size(m).move(0,0)})}});register(Circle,"Circle");class ClipPath extends Container$1{constructor(s,d=s){super(nodeOrNew("clipPath",s),d)}remove(){return this.targets().forEach(function(s){s.unclip()}),super.remove()}targets(){return baseFind("svg [clip-path*="+this.id()+"]")}}registerMethods({Container:{clip:wrapWithAttrCheck(function(){return this.defs().put(new ClipPath)})},Element:{clipper(){return this.reference("clip-path")},clipWith(m){const s=m instanceof ClipPath?m:this.parent().clip().add(m);return this.attr("clip-path","url(#"+s.id()+")")},unclip(){return this.attr("clip-path",null)}}});register(ClipPath,"ClipPath");class ForeignObject extends Element{constructor(s,d=s){super(nodeOrNew("foreignObject",s),d)}}registerMethods({Container:{foreignObject:wrapWithAttrCheck(function(m,s){return this.put(new ForeignObject).size(m,s)})}});register(ForeignObject,"ForeignObject");function dmove(m,s){return this.children().forEach((d,v)=>{let _;try{_=d.bbox()}catch{return}const k=new Matrix(d),I=k.translate(m,s).transform(k.inverse()),N=new Point(_.x,_.y).transform(I);d.move(N.x,N.y)}),this}function dx(m){return this.dmove(m,0)}function dy(m){return this.dmove(0,m)}function height(m,s=this.bbox()){return m==null?s.height:this.size(s.width,m,s)}function move(m=0,s=0,d=this.bbox()){const v=m-d.x,_=s-d.y;return this.dmove(v,_)}function size(m,s,d=this.bbox()){const v=proportionalSize(this,m,s,d),_=v.width/d.width,k=v.height/d.height;return this.children().forEach((I,N)=>{const D=new Point(d).transform(new Matrix(I).inverse());I.scale(_,k,D.x,D.y)}),this}function width(m,s=this.bbox()){return m==null?s.width:this.size(m,s.height,s)}function x(m,s=this.bbox()){return m==null?s.x:this.move(m,s.y,s)}function y(m,s=this.bbox()){return m==null?s.y:this.move(s.x,m,s)}var containerGeometry={__proto__:null,dmove,dx,dy,height,move,size,width,x,y};class G extends Container$1{constructor(s,d=s){super(nodeOrNew("g",s),d)}}extend(G,containerGeometry);registerMethods({Container:{group:wrapWithAttrCheck(function(){return this.put(new G)})}});register(G,"G");class A extends Container$1{constructor(s,d=s){super(nodeOrNew("a",s),d)}target(s){return this.attr("target",s)}to(s){return this.attr("href",s,xlink)}}extend(A,containerGeometry);registerMethods({Container:{link:wrapWithAttrCheck(function(m){return this.put(new A).to(m)})},Element:{unlink(){const m=this.linker();if(!m)return this;const s=m.parent();if(!s)return this.remove();const d=s.index(m);return s.add(this,d),m.remove(),this},linkTo(m){let s=this.linker();return s||(s=new A,this.wrap(s)),typeof m=="function"?m.call(s,s):s.to(m),this},linker(){const m=this.parent();return m&&m.node.nodeName.toLowerCase()==="a"?m:null}}});register(A,"A");class Mask extends Container$1{constructor(s,d=s){super(nodeOrNew("mask",s),d)}remove(){return this.targets().forEach(function(s){s.unmask()}),super.remove()}targets(){return baseFind("svg [mask*="+this.id()+"]")}}registerMethods({Container:{mask:wrapWithAttrCheck(function(){return this.defs().put(new Mask)})},Element:{masker(){return this.reference("mask")},maskWith(m){const s=m instanceof Mask?m:this.parent().mask().add(m);return this.attr("mask","url(#"+s.id()+")")},unmask(){return this.attr("mask",null)}}});register(Mask,"Mask");class Stop extends Element{constructor(s,d=s){super(nodeOrNew("stop",s),d)}update(s){return(typeof s=="number"||s instanceof SVGNumber)&&(s={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),s.opacity!=null&&this.attr("stop-opacity",s.opacity),s.color!=null&&this.attr("stop-color",s.color),s.offset!=null&&this.attr("offset",new SVGNumber(s.offset)),this}}registerMethods({Gradient:{stop:function(m,s,d){return this.put(new Stop).update(m,s,d)}}});register(Stop,"Stop");function cssRule(m,s){if(!m)return"";if(!s)return m;let d=m+"{";for(const v in s)d+=unCamelCase(v)+":"+s[v]+";";return d+="}",d}class Style extends Element{constructor(s,d=s){super(nodeOrNew("style",s),d)}addText(s=""){return this.node.textContent+=s,this}font(s,d,v={}){return this.rule("@font-face",{fontFamily:s,src:d,...v})}rule(s,d){return this.addText(cssRule(s,d))}}registerMethods("Dom",{style(m,s){return this.put(new Style).rule(m,s)},fontface(m,s,d){return this.put(new Style).font(m,s,d)}});register(Style,"Style");class TextPath extends Text{constructor(s,d=s){super(nodeOrNew("textPath",s),d)}array(){const s=this.track();return s?s.array():null}plot(s){const d=this.track();let v=null;return d&&(v=d.plot(s)),s==null?v:this}track(){return this.reference("href")}}registerMethods({Container:{textPath:wrapWithAttrCheck(function(m,s){return m instanceof Text||(m=this.text(m)),m.path(s)})},Text:{path:wrapWithAttrCheck(function(m,s=!0){const d=new TextPath;m instanceof Path||(m=this.defs().path(m)),d.attr("href","#"+m,xlink);let v;if(s)for(;v=this.node.firstChild;)d.node.appendChild(v);return this.put(d)}),textPath(){return this.findOne("textPath")}},Path:{text:wrapWithAttrCheck(function(m){return m instanceof Text||(m=new Text().addTo(this.parent()).text(m)),m.path(this)}),targets(){return baseFind("svg textPath").filter(m=>(m.attr("href")||"").includes(this.id()))}}});TextPath.prototype.MorphArray=PathArray;register(TextPath,"TextPath");class Use extends Shape{constructor(s,d=s){super(nodeOrNew("use",s),d)}use(s,d){return this.attr("href",(d||"")+"#"+s,xlink)}}registerMethods({Container:{use:wrapWithAttrCheck(function(m,s){return this.put(new Use).use(m,s)})}});register(Use,"Use");const SVG=makeInstance;extend([Svg,Symbol$1,Image,Pattern,Marker],getMethodsFor("viewbox"));extend([Line,Polyline,Polygon,Path],getMethodsFor("marker"));extend(Text,getMethodsFor("Text"));extend(Path,getMethodsFor("Path"));extend(Defs,getMethodsFor("Defs"));extend([Text,Tspan],getMethodsFor("Tspan"));extend([Rect,Ellipse,Gradient,Runner],getMethodsFor("radius"));extend(EventTarget,getMethodsFor("EventTarget"));extend(Dom,getMethodsFor("Dom"));extend(Element,getMethodsFor("Element"));extend(Shape,getMethodsFor("Shape"));extend([Container$1,Fragment],getMethodsFor("Container"));extend(Gradient,getMethodsFor("Gradient"));extend(Runner,getMethodsFor("Runner"));List.extend(getMethodNames());registerMorphableType([SVGNumber,Color,Box,Matrix,SVGArray,PointArray,PathArray,Point]);makeMorphable();class Hooks{add(s,d,v){if(typeof arguments[0]!="string")for(let _ in arguments[0])this.add(_,arguments[0][_],arguments[1]);else(Array.isArray(s)?s:[s]).forEach(function(_){this[_]=this[_]||[],d&&this[_][v?"unshift":"push"](d)},this)}run(s,d){this[s]=this[s]||[],this[s].forEach(function(v){v.call(d&&d.context?d.context:d,d)})}}class Plugins{constructor(s){this.jsep=s,this.registered={}}register(...s){s.forEach(d=>{if(typeof d!="object"||!d.name||!d.init)throw new Error("Invalid JSEP plugin format");this.registered[d.name]||(d.init(this.jsep),this.registered[d.name]=d)})}}class Jsep{static get version(){return"1.3.8"}static toString(){return"JavaScript Expression Parser (JSEP) v"+Jsep.version}static addUnaryOp(s){return Jsep.max_unop_len=Math.max(s.length,Jsep.max_unop_len),Jsep.unary_ops[s]=1,Jsep}static addBinaryOp(s,d,v){return Jsep.max_binop_len=Math.max(s.length,Jsep.max_binop_len),Jsep.binary_ops[s]=d,v?Jsep.right_associative.add(s):Jsep.right_associative.delete(s),Jsep}static addIdentifierChar(s){return Jsep.additional_identifier_chars.add(s),Jsep}static addLiteral(s,d){return Jsep.literals[s]=d,Jsep}static removeUnaryOp(s){return delete Jsep.unary_ops[s],s.length===Jsep.max_unop_len&&(Jsep.max_unop_len=Jsep.getMaxKeyLen(Jsep.unary_ops)),Jsep}static removeAllUnaryOps(){return Jsep.unary_ops={},Jsep.max_unop_len=0,Jsep}static removeIdentifierChar(s){return Jsep.additional_identifier_chars.delete(s),Jsep}static removeBinaryOp(s){return delete Jsep.binary_ops[s],s.length===Jsep.max_binop_len&&(Jsep.max_binop_len=Jsep.getMaxKeyLen(Jsep.binary_ops)),Jsep.right_associative.delete(s),Jsep}static removeAllBinaryOps(){return Jsep.binary_ops={},Jsep.max_binop_len=0,Jsep}static removeLiteral(s){return delete Jsep.literals[s],Jsep}static removeAllLiterals(){return Jsep.literals={},Jsep}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(s){this.expr=s,this.index=0}static parse(s){return new Jsep(s).parse()}static getMaxKeyLen(s){return Math.max(0,...Object.keys(s).map(d=>d.length))}static isDecimalDigit(s){return s>=48&&s<=57}static binaryPrecedence(s){return Jsep.binary_ops[s]||0}static isIdentifierStart(s){return s>=65&&s<=90||s>=97&&s<=122||s>=128&&!Jsep.binary_ops[String.fromCharCode(s)]||Jsep.additional_identifier_chars.has(String.fromCharCode(s))}static isIdentifierPart(s){return Jsep.isIdentifierStart(s)||Jsep.isDecimalDigit(s)}throwError(s){const d=new Error(s+" at character "+this.index);throw d.index=this.index,d.description=s,d}runHook(s,d){if(Jsep.hooks[s]){const v={context:this,node:d};return Jsep.hooks.run(s,v),v.node}return d}searchHook(s){if(Jsep.hooks[s]){const d={context:this};return Jsep.hooks[s].find(function(v){return v.call(d.context,d),d.node}),d.node}}gobbleSpaces(){let s=this.code;for(;s===Jsep.SPACE_CODE||s===Jsep.TAB_CODE||s===Jsep.LF_CODE||s===Jsep.CR_CODE;)s=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const s=this.gobbleExpressions(),d=s.length===1?s[0]:{type:Jsep.COMPOUND,body:s};return this.runHook("after-all",d)}gobbleExpressions(s){let d=[],v,_;for(;this.index<this.expr.length;)if(v=this.code,v===Jsep.SEMCOL_CODE||v===Jsep.COMMA_CODE)this.index++;else if(_=this.gobbleExpression())d.push(_);else if(this.index<this.expr.length){if(v===s)break;this.throwError('Unexpected "'+this.char+'"')}return d}gobbleExpression(){const s=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",s)}gobbleBinaryOp(){this.gobbleSpaces();let s=this.expr.substr(this.index,Jsep.max_binop_len),d=s.length;for(;d>0;){if(Jsep.binary_ops.hasOwnProperty(s)&&(!Jsep.isIdentifierStart(this.code)||this.index+s.length<this.expr.length&&!Jsep.isIdentifierPart(this.expr.charCodeAt(this.index+s.length))))return this.index+=d,s;s=s.substr(0,--d)}return!1}gobbleBinaryExpression(){let s,d,v,_,k,I,N,D,F;if(I=this.gobbleToken(),!I||(d=this.gobbleBinaryOp(),!d))return I;for(k={value:d,prec:Jsep.binaryPrecedence(d),right_a:Jsep.right_associative.has(d)},N=this.gobbleToken(),N||this.throwError("Expected expression after "+d),_=[I,k,N];d=this.gobbleBinaryOp();){if(v=Jsep.binaryPrecedence(d),v===0){this.index-=d.length;break}k={value:d,prec:v,right_a:Jsep.right_associative.has(d)},F=d;const z=$=>k.right_a&&$.right_a?v>$.prec:v<=$.prec;for(;_.length>2&&z(_[_.length-2]);)N=_.pop(),d=_.pop().value,I=_.pop(),s={type:Jsep.BINARY_EXP,operator:d,left:I,right:N},_.push(s);s=this.gobbleToken(),s||this.throwError("Expected expression after "+F),_.push(k,s)}for(D=_.length-1,s=_[D];D>1;)s={type:Jsep.BINARY_EXP,operator:_[D-1].value,left:_[D-2],right:s},D-=2;return s}gobbleToken(){let s,d,v,_;if(this.gobbleSpaces(),_=this.searchHook("gobble-token"),_)return this.runHook("after-token",_);if(s=this.code,Jsep.isDecimalDigit(s)||s===Jsep.PERIOD_CODE)return this.gobbleNumericLiteral();if(s===Jsep.SQUOTE_CODE||s===Jsep.DQUOTE_CODE)_=this.gobbleStringLiteral();else if(s===Jsep.OBRACK_CODE)_=this.gobbleArray();else{for(d=this.expr.substr(this.index,Jsep.max_unop_len),v=d.length;v>0;){if(Jsep.unary_ops.hasOwnProperty(d)&&(!Jsep.isIdentifierStart(this.code)||this.index+d.length<this.expr.length&&!Jsep.isIdentifierPart(this.expr.charCodeAt(this.index+d.length)))){this.index+=v;const k=this.gobbleToken();return k||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:Jsep.UNARY_EXP,operator:d,argument:k,prefix:!0})}d=d.substr(0,--v)}Jsep.isIdentifierStart(s)?(_=this.gobbleIdentifier(),Jsep.literals.hasOwnProperty(_.name)?_={type:Jsep.LITERAL,value:Jsep.literals[_.name],raw:_.name}:_.name===Jsep.this_str&&(_={type:Jsep.THIS_EXP})):s===Jsep.OPAREN_CODE&&(_=this.gobbleGroup())}return _?(_=this.gobbleTokenProperty(_),this.runHook("after-token",_)):this.runHook("after-token",!1)}gobbleTokenProperty(s){this.gobbleSpaces();let d=this.code;for(;d===Jsep.PERIOD_CODE||d===Jsep.OBRACK_CODE||d===Jsep.OPAREN_CODE||d===Jsep.QUMARK_CODE;){let v;if(d===Jsep.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==Jsep.PERIOD_CODE)break;v=!0,this.index+=2,this.gobbleSpaces(),d=this.code}this.index++,d===Jsep.OBRACK_CODE?(s={type:Jsep.MEMBER_EXP,computed:!0,object:s,property:this.gobbleExpression()},this.gobbleSpaces(),d=this.code,d!==Jsep.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):d===Jsep.OPAREN_CODE?s={type:Jsep.CALL_EXP,arguments:this.gobbleArguments(Jsep.CPAREN_CODE),callee:s}:(d===Jsep.PERIOD_CODE||v)&&(v&&this.index--,this.gobbleSpaces(),s={type:Jsep.MEMBER_EXP,computed:!1,object:s,property:this.gobbleIdentifier()}),v&&(s.optional=!0),this.gobbleSpaces(),d=this.code}return s}gobbleNumericLiteral(){let s="",d,v;for(;Jsep.isDecimalDigit(this.code);)s+=this.expr.charAt(this.index++);if(this.code===Jsep.PERIOD_CODE)for(s+=this.expr.charAt(this.index++);Jsep.isDecimalDigit(this.code);)s+=this.expr.charAt(this.index++);if(d=this.char,d==="e"||d==="E"){for(s+=this.expr.charAt(this.index++),d=this.char,(d==="+"||d==="-")&&(s+=this.expr.charAt(this.index++));Jsep.isDecimalDigit(this.code);)s+=this.expr.charAt(this.index++);Jsep.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+s+this.char+")")}return v=this.code,Jsep.isIdentifierStart(v)?this.throwError("Variable names cannot start with a number ("+s+this.char+")"):(v===Jsep.PERIOD_CODE||s.length===1&&s.charCodeAt(0)===Jsep.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:Jsep.LITERAL,value:parseFloat(s),raw:s}}gobbleStringLiteral(){let s="";const d=this.index,v=this.expr.charAt(this.index++);let _=!1;for(;this.index<this.expr.length;){let k=this.expr.charAt(this.index++);if(k===v){_=!0;break}else if(k==="\\")switch(k=this.expr.charAt(this.index++),k){case"n":s+=`
`;break;case"r":s+="\r";break;case"t":s+="	";break;case"b":s+="\b";break;case"f":s+="\f";break;case"v":s+="\v";break;default:s+=k}else s+=k}return _||this.throwError('Unclosed quote after "'+s+'"'),{type:Jsep.LITERAL,value:s,raw:this.expr.substring(d,this.index)}}gobbleIdentifier(){let s=this.code,d=this.index;for(Jsep.isIdentifierStart(s)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(s=this.code,Jsep.isIdentifierPart(s));)this.index++;return{type:Jsep.IDENTIFIER,name:this.expr.slice(d,this.index)}}gobbleArguments(s){const d=[];let v=!1,_=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let k=this.code;if(k===s){v=!0,this.index++,s===Jsep.CPAREN_CODE&&_&&_>=d.length&&this.throwError("Unexpected token "+String.fromCharCode(s));break}else if(k===Jsep.COMMA_CODE){if(this.index++,_++,_!==d.length){if(s===Jsep.CPAREN_CODE)this.throwError("Unexpected token ,");else if(s===Jsep.CBRACK_CODE)for(let I=d.length;I<_;I++)d.push(null)}}else if(d.length!==_&&_!==0)this.throwError("Expected comma");else{const I=this.gobbleExpression();(!I||I.type===Jsep.COMPOUND)&&this.throwError("Expected comma"),d.push(I)}}return v||this.throwError("Expected "+String.fromCharCode(s)),d}gobbleGroup(){this.index++;let s=this.gobbleExpressions(Jsep.CPAREN_CODE);if(this.code===Jsep.CPAREN_CODE)return this.index++,s.length===1?s[0]:s.length?{type:Jsep.SEQUENCE_EXP,expressions:s}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:Jsep.ARRAY_EXP,elements:this.gobbleArguments(Jsep.CBRACK_CODE)}}}const hooks=new Hooks;Object.assign(Jsep,{hooks,plugins:new Plugins(Jsep),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},right_associative:new Set,additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});Jsep.max_unop_len=Jsep.getMaxKeyLen(Jsep.unary_ops);Jsep.max_binop_len=Jsep.getMaxKeyLen(Jsep.binary_ops);const jsep=m=>new Jsep(m).parse(),staticMethods=Object.getOwnPropertyNames(Jsep);staticMethods.forEach(m=>{jsep[m]===void 0&&m!=="prototype"&&(jsep[m]=Jsep[m])});jsep.Jsep=Jsep;const CONDITIONAL_EXP="ConditionalExpression";var ternary={name:"ternary",init(m){m.hooks.add("after-expression",function(d){if(d.node&&this.code===m.QUMARK_CODE){this.index++;const v=d.node,_=this.gobbleExpression();if(_||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===m.COLON_CODE){this.index++;const k=this.gobbleExpression();if(k||this.throwError("Expected expression"),d.node={type:CONDITIONAL_EXP,test:v,consequent:_,alternate:k},v.operator&&m.binary_ops[v.operator]<=.9){let I=v;for(;I.right.operator&&m.binary_ops[I.right.operator]<=.9;)I=I.right;d.node.test=I.right,I.right=d.node,d.node=v}}else this.throwError("Expected :")}})}};jsep.plugins.register(ternary);class Container{x(s){if(typeof s<"u")this._x=s,this.group.x(s);else return this.group.x()}y(s){if(typeof s<"u")this._y=s,this.group.y(s);else return this.group.y()}dy(s){if(typeof s<"u")this._y+=s,this.group.dy(s);else return this._y}getItemStartPoints(s){return s.noStartPoints?[]:s.getStartPoints?s.getStartPoints():[[s.x(),s.y()+s.height()/2]]}getItemEndPoints(s){return s.getEndPointsFrom&&(s=s.getEndPointsFrom),s.noEndPoints?[]:s.getEndPoints?s.getEndPoints():[[s.x()+s.width(),s.y()+s.height()/2]]}getStartPoints(){if(this.noStartPoints)return[];switch(this.type){case"serial":if(this.c.length){let s=this.c[0];return this.getItemStartPoints(s)}else return[];case"parallel":{let s=[];for(let d=0;d<this.c.length;d++)s=s.concat(this.getItemStartPoints(this.c[d]));return s}}}getEndPoints(){if(this.noEndPoints)return[];switch(this.type){case"serial":if(this.c.length){let s=this.c[this.c.length-1];return this.getItemEndPoints(s)}else return[];case"parallel":{let s=[];for(let d=0;d<this.c.length;d++)s=s.concat(this.getItemEndPoints(this.c[d]));return s}}}width(s){if(typeof s>"u")return this.group.width()}height(s){if(typeof s>"u")return this.group.height()}addTo(s){return this.group.addTo(s),this}constructor(s,d){this.gap=30,this.c=[],this.type=s,this.myNode=d,this.group=SVG().group()}push(s){switch(this.type){case"serial":this.c.length?s.x(this.c[this.c.length-1].x()+this.c[this.c.length-1].width()+this.gap):s.x(10),s.y(10),this.c.push(s);let d=0;for(let v=0;v<this.c.length;v++)d=Math.max(d,this.c[v].height()/2);for(let v=0;v<this.c.length;v++)this.c[v].y(d-this.c[v].height()/2);break;case"parallel":if(this.c.length){let v=this.c[this.c.length-1].y()+this.c[this.c.length-1].height()+this.gap;s.y(v)}else s.y(10);s.x(10),this.c.push(s);break}s instanceof Container?s.group.addTo(this.group):s.addTo(this.group)}makeLines(s,d){let v=SVG().group();for(let _=0;_<s.length;_++)for(let k=0;k<d.length;k++){let I=s[_],N=d[k],F=mySVG.bezier(I[0],I[1],N[0],N[1],-1);this.strokeDashArray&&F.attr({"stroke-dasharray":this.strokeDashArray}),this.type=="serial"&&!this.strokeDashArray&&F.attr({"marker-end":"url(#arrow)"}),F.addTo(v)}return v}renderLines(){let s=SVG().group();for(let d=0;d<this.c.length-1;d++)if(this.c[d]instanceof Container&&this.c[d].renderLines().addTo(s),this.type==="serial"){let v=this.getItemEndPoints(this.c[d]),_=this.getItemStartPoints(this.c[d+1]),k=this.makeLines(v,_);k&&k.addTo(s)}return this.c[this.c.length-1]instanceof Container&&this.c[this.c.length-1].renderLines().addTo(s),s}applyItemsAfterwards(){this.group.applyItemsAfterwards&&this.group.applyItemsAfterwards();for(let s=0;s<this.c.length;s++)this.c[s].applyItemsAfterwards&&this.c[s].applyItemsAfterwards()}breakLine(){switch(this.type){case"serial":for(let s=0;s<c.length-1;s++)w+=c[s].width()+this.gap;return w+=c[c.length-1].width(),w}}}class mySVG{model(s){if(s&&Object.keys(this.modellingFunctions).indexOf(s.nodeName)!==-1)return this.elementsFound.indexOf(s.nodeName)==-1&&this.elementsFound.push(s.nodeName),this.modellingFunctions[s.nodeName](s)}constructor(){this.elementsFound=[]}render(s){if(!s)return;let d=SVG();SVG(`<defs>
            <marker id="arrow" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,4 L5,2 z" fill="#000" />
            </marker>
          </defs>`).addTo(d);let _=this.model(s);return _.addTo(d),_.renderLines&&_.renderLines().addTo(_.group),_.x(10),_.y(10),_.applyItemsAfterwards&&_.applyItemsAfterwards(),d.node.dataset.source=encodeURIComponent(s.outerHTML.replace(/\n/g," ").replace(/\t/g," ").replace(/\s\s+/g," ").trim()),d.size(_.width()+100,_.height()+100),this.svg=d.node,d.node}renderKey(){let s=SVG().group();for(let v=0;v<this.elementsFound.length;v++){let _=this.examples[this.elementsFound[v]];if(!_)continue;let k=document.createElement("div");k.innerHTML=_.html;let I=this.model(k);I.addTo(s),I.y(s.height()+25),I.renderLines&&I.renderLines().addTo(I.group)}let d=SVG().size(s.width()+50,s.height()+50);return s.x(10),s.y(10),s.addTo(d),d.node}download(s){let d=new Blob([this.svg.outerHTML]),v=document.createElement("a");v.download=s,v.href=window.URL.createObjectURL(d),v.click(),v.remove()}static bezier(s,d,v,_){let k=s+(v-s)/1.5,I=d,N=v-(v-s)/1.5,F=`M ${s},${d} C${k},${I} ${N},${_} ${v},${_}`,z=SVG().path(F);return z.attr({fill:"none",stroke:"black","stroke-width":3}),z}get modellingFunctions(){return{"AA-SESSION":s=>{let d=new Container("parallel",s);for(let v=0;v<s.originalChildNodes.length;v++){let _=this.model(s.originalChildNodes[v]);_&&d.push(_)}return d.myNode=s,d},"AA-SEQUENCE":s=>{let d=new Container("serial",s);for(let v=0;v<s.childNodes.length;v++){let _=this.model(s.childNodes[v]);_&&d.push(_)}return d.myNode=s,d},"AA-SCREEN":s=>{let d=SVG().group(),v=SVG().rect(30,50).attr({fill:"none",stroke:"black","stroke-width":5,rx:3}).addTo(d),_;if(s.getAttribute("name")){let k=s.getAttribute("name");k.length>14&&(k=k.substr(0,11)+"..."),_=SVG().text(function(I){I.tspan(k).font({family:"serif",style:"italic",size:"12px",weight:"bold"})}),v.x(d.x()+d.width()/2-v.width()/2),v.y(d.height()/2-v.height()/2)+10,_.y(v.y()+v.height()+5)}return d.myNode=s,d.nocentering=!0,d.getEndPoints=()=>[[v.x()+v.width(),v.y()+v.height()/2]],d.getStartPoints=()=>[[v.x(),v.y()+v.height()/2]],_&&(d.applyItemsAfterwards=()=>{_.addTo(d),_.x(v.x()+v.width()/2-_.bbox().width/2),_.y(v.y()+v.height()+7)}),d},"AA-CHOOSE":s=>{let d=new Container("serial",s);d.strokeDashArray="3";let v=SVG().circle(20).attr({fill:"none",stroke:"black","stroke-width":5,"stroke-dasharray":0}),_=SVG().circle(2).attr({fill:"black",stroke:"black","stroke-width":5}),k=new Container("parallel",s),I=0,N=!1;for(let D=0;D<s.childNodes.length;D++){s.childNodes[D].nodeName==="AA-OTHERWISE"&&(N=!0);let F=this.model(s.childNodes[D]);F&&(k.push(F),I=Math.max(F.width(),I))}if(!N){let D=new Container("serial"),F=SVG().line();D.push(F),F.plot(10,100,I,100),F.attr({fill:"black",stroke:"black","stroke-dasharray":3,"stroke-width":3}),k.push(D)}for(let D=0;D<k.c.length;D++){let F=k.c[D];F.x(I/2-F.width()/2)}return d.push(v),d.push(k),d.push(_),d.myNode=s,d.applyItemsAfterwards=()=>{for(let D=0;D<k.c.length;D++)k.c[D].applyItemsAfterwards&&k.c[D].applyItemsAfterwards()},d},"AA-FUNCTION-RANDOM":s=>{let d=new Container("serial",s),v=SVG().group();SVG().text(function(I){I.tspan("f").font({family:"serif",style:"italic",size:"50px",weight:"bold"}),I.tspan("random ").font({family:"serif",style:"italic",size:"15px"})}).addTo(v);let k=SVG().text(function(I){I.tspan(s.getAttribute("name")).font({family:"monospace",size:"12px",weight:"bold"})});return k.addTo(v),k.dy(20),k.dx(-10),d.push(v),d.myNode=s,d},"AA-WHEN":s=>{let d=SVG().group(),v=new Container("parallel");for(let I=0;I<s.childNodes.length;I++){let N=this.model(s.childNodes[I]);N&&v.push(N)}let _=SVG().text(function(I){I.tspan("when").font({family:"serif",style:"italic",size:"30px",weight:"bold"})}),k=SVG().text(function(I){let N=s.getAttribute("test");if(N){let D=jsep(N);if(D.left&&D.left.name&&D.left.name.length>7){let F=D.left.name.substr(0,5)+"...";N=N.replace(D.left.name,F)}}I.tspan(N).font({family:"monospace",size:"12px",weight:"bold"})});return v.addTo(d),_.addTo(d),k.addTo(d),k.y(_.y()+_.bbox().height),v.x(_.x()+_.bbox().width+40),v.y(_.y()+_.bbox().height/1.5-v.height()/2),d.strokeDashArray="3",d.myNode=s,d.getEndPoints=()=>[[v.x()+v.width(),v.y()+v.height()/2]],d.getStartPoints=()=>[[_.bbox().x,_.bbox().y+_.bbox().height/2]],d.applyItemsAfterwards=()=>{for(let I=0;I<v.c.length;I++)console.log(v.c[I]),v.c[I].applyItemsAfterwards&&v.c[I].applyItemsAfterwards()},d},"AA-OTHERWISE":s=>{let d=SVG().group(),v=new Container("parallel");for(let k=0;k<s.childNodes.length;k++){let I=this.model(s.childNodes[k]);I&&v.push(I)}let _=SVG().text(function(k){k.tspan("otherwise").font({family:"serif",style:"italic",size:"30px",weight:"bold"})});return v.addTo(d),_.addTo(d),v.x(_.x()+_.bbox().width+10),v.y(_.y()+_.bbox().height/1.5-v.height()/2),d.strokeDashArray="3",d.myNode=s,d.getEndPoints=()=>[[v.x()+v.width(),v.y()+v.height()/2]],d.getStartPoints=()=>[[_.bbox().x,_.bbox().y+_.bbox().height/2]],d.applyItemsAfterwards=()=>{for(let k=0;k<v.c.length;k++)console.log(v.c[k]),v.c[k].applyItemsAfterwards&&v.c[k].applyItemsAfterwards()},d},DIV:s=>{let d=new Container("parallel",s);for(let v=0;v<s.childNodes.length;v++){let _=this.model(s.childNodes[v]);_&&d.push(_)}return d.myNode=s,d}}}get examples(){return{"AA-SEQUENCE":{html:'<aa-sequence><aa-screen name="first screen"></aa-screen><aa-screen name="second screen"></aa-screen></aa-sequence>',comment:"sequence"},"AA-SCREEN":{html:'<aa-screen name="<name>"></aa-screen>',comment:"screen"},"AA-FUNCTION-RANDOM":{html:"<aa-function-random></aa-function-random>",comment:"random number generator"},"AA-CHOOSE":{html:"<aa-choose><aa-when><aa-screen></aa-screen></aa-when></aa-choose>",comment:"random number generator"}}}}const html=function(m,...s){let d=m[0];for(let v=0;v<s.length;v++)d+=s[v],d+=m[v+1];return d};window&&(window.html=html);const AAClasses=[];window.AAClasses=AAClasses;class AABaseElement extends HTMLElement{constructor(){super(),this._attachedTimestamp=0,this._debug=!1,this._props=this.makePropertiesFromAttributes()}static get properties(){return{name:{type:String,userDefined:!0},diagram:{type:Boolean,value:!1,userDefined:!0},"diagram-transparent":{type:Boolean,value:!1,userDefined:!0}}}static registerAAElement(s,d){customElements.get(s)||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push(s.toUpperCase()),customElements.define(s,d)),AAClasses[s.toUpperCase()]=d}static isAAElement(s){return AANodeNames.indexOf(s.nodeName.toUpperCase())!=-1}static createFragmentForNode(s){let d=document.createDocumentFragment();for(let v=0;v<s.childNodes.length;v++)d.append(s.childNodes[v].cloneNode(!0));return d}static createHolderForNode(s){let d=s.cloneNode(!1);return d.innerFragment=AABaseElement.createFragmentForNode(s),d}static scanAndReplace(s){if(s.nodeName==="TEMPLATE")AABaseElement.scanAndReplace(s.content);else if(AABaseElement.isAAElement(s)){let d=AABaseElement.createHolderForNode(s);s.replaceWith(d)}else for(let d=0;d<s.childNodes.length;d++)AABaseElement.scanAndReplace(s.childNodes[d])}connectedCallback(){if(this._attachedTimestamp=new Date().getTime(),this._debug=this.debug===!0||this.debug===null,this.innerFragment)for(let s=0;s<this.innerFragment.childNodes.length;s++)this.appendChild(AABaseElement.copy(this.innerFragment.childNodes[s]));this.setAttributeDefaultValues()}getMemory(){let s=this;for(;s.parentNode!=null;){if(s._mem)return s._mem;s=s.parentNode}return null}makePropertiesFromAttributes(){let d=customElements.get(this.tagName.toLowerCase()).observedAttributes;if(!d)return null;let v={};for(let _=0;_<d.length;_++){let k=this.toCamelCase(d[_]);v[k]=d[_],!(typeof this[k]<"u")&&Object.defineProperty(this,k,{get:()=>{let I=this.getAttribute(d[_]);return I==="true"?!0:I==="false"?!1:I==="null"?null:I},set:I=>{this.setAttribute(d[_],I)}})}return v}toCamelCase(s){let d=s.split("-"),v=d[0];for(let _=1;_<d.length;_++)v+=d[_][0].toUpperCase()+d[_].substr(1);return v}toHyphenated(s){let d="";for(let v=0;v<s.length;v++){let _=s[v];_.toLowerCase()!==_?d+=`-${_.toLowerCase()}`:d+=_}return d}setAttributeDefaultValues(){let s=this.constructor.properties;if(s){let d=Object.keys(s);for(let v=0;v<d.length;v++){let _=this.toCamelCase(d[v]);if(typeof this[_]>"u"||this[_]===null||this[_]==="")if(s[d[v]].type===Boolean)this.getAttribute(d[v])===""?this.setAttribute(d[v],"true"):this.getAttribute(d[v])==="true"?this.setAttribute(d[v],"true"):this.getAttribute(d[v])==="false"?this.setAttribute(d[v],"false"):this.getAttribute(d[v])===null&&this.setAttribute(d[v],s[d[v]].value);else{let k=this.getAttribute(d[v])||s[d[v]].value||null;k&&this.setAttribute(d[v],k),k===!1&&this.setAttribute(d[v],String(k))}}}}static copy(s){let d;return AABaseElement.isAAElement(s)?s.innerFragment?(d=s.cloneNode(),d.innerFragment=AABaseElement.createFragmentForNode(s.innerFragment)):(d=s.cloneNode(),d.innerFragment=AABaseElement.createFragmentForNode(s)):d=s.cloneNode(!0),d}getAttributes(){let s={},d=Object.keys(this.constructor.properties);for(let v=0;v<d.length;v++)if(this.constructor.properties[d[v]].userDefined&&typeof this.getAttribute(d[v])<"u"&&this.getAttribute(d[v])!=="undefined"){if(this.constructor.properties[d[v]].value==this.getAttribute(d[v]))continue;s[d[v]]=this.getAttribute(d[v])}return s}toJSON(){let s={},d=this.tagName.toLowerCase();return s[d]=this.getAttributes(),this.childNodes.length&&(s[d].childNodes=[],this.childNodes.forEach(v=>{s[d].childNodes.push(AABaseElement.nodeToJSON(v))})),s}static nodeToJSON(s){if(s.nodeType===document.TEXT_NODE||s.nodeType===document.COMMENT_NODE){let d={},v=s.textContent.replace(/\n/g," ").replace(/\t/g," ").replace(/\s\s+/g," ").trim();return v!==""?(d[s.nodeName]=v,d):null}else{if(s.toJSON)return s.toJSON();try{let d={},v=s.getAttributeNames(),_={};for(let I=0;I<v.length;I++)_[v[I]]=s.getAttribute(v[I]);let k=[];for(let I=0;I<s.childNodes.length;I++)AABaseElement.nodeToJSON(s.childNodes[I])&&k.push(AABaseElement.nodeToJSON(s.childNodes[I]));return d[s.tagName]=_,d[s.tagName].childNodes=k,d}catch(d){console.error(d)}}}toYAML(){return jsyaml.dump(this.toJSON())}toJSL(){return nodeToJSL(this)}produceDiagram(){this.root||(this.root=this.attachShadow({mode:"open"})),this.root.innerHTML='<div id="svgContainer" ></div>';let s=this.root.childNodes[0],d=new mySVG,v=d.render(this),_=document.createElement("paper-button");_.innerHTML="download",_.raised=!0,_.style.backgroundColor="#0d47a1",_.style.color="white",_.classList.add("indigo"),s.appendChild(v),s.appendChild(_);let k="";this.name?k=this.name+"."+this.nodeName.toLowerCase()+".svg":k=this.nodeName.toLowerCase()+".svg",_.addEventListener("click",()=>{d.download(k)})}static getDomPathAsName(s){for(var d=[],v=0,_=0;s.nodeName!=="AA-SESSION"&&s.parentNode!=null;){v=0,_=0;for(var k=0;k<s.parentNode.childNodes.length;k++){var I=s.parentNode.childNodes[k];I.nodeName==s.nodeName&&(I===s&&(_=v),v++)}if(!AABaseElement.isAAElement(s)){s=s.parentNode;continue}s.hasAttribute("name")&&s.name!=""?d.unshift(s.name):s.hasAttribute("id")&&s.id!=""?d.unshift(s.nodeName.toLowerCase()+"#"+s.id):v>1?d.unshift(s.nodeName.toLowerCase()+":eq("+_+")"):d.unshift(s.nodeName.toLowerCase()),s=s.parentNode}s.nodeName==="AA-SESSION"&&(s.hasAttribute("name")&&s.name!=""?d.unshift(s.name):s.hasAttribute("id")&&s.id!=""?d.unshift(s.nodeName.toLowerCase()+"#"+s.id):v>1?d.unshift(s.nodeName.toLowerCase()+":eq("+_+")"):d.unshift(s.nodeName.toLowerCase()));let N="";for(let D=0;D<d.length-1;D++)N+=d[D]+".";return N+=d[d.length-1],N}static getVariableName(s){const d=s.getAttribute("name");return d||AABaseElement.getDomPathAsName(s)}_dispatchDebugEvent(s){this.debug&&this.dispatchEvent(new CustomEvent("debugEvent",{detail:s,bubbles:!0}))}_dispatchEndEvent(s){this.dispatchEvent(new CustomEvent("endEvent",{bubbles:!0,detail:s}))}_getParentSession(){let s=this;for(;s!=null&&s.nodeName!="AA-SESSION";)s=s.parentNode;return s}}customElements.get("aa-base-element")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-BASE-ELEMENT"),customElements.define("aa-base-element",AABaseElement));window.nodeToJSON=AABaseElement.nodeToJSON;class AAScreen extends AABaseElement{constructor(){super(),this.submitButton=null,this.submitButtonContainer=null,this._started=!1,this._attachedTimestamp=new Date().getTime(),this.root=this.attachShadow({mode:"open"})}static get category(){return"UI"}static get tag(){return"aa-screen"}static get properties(){return{...AABaseElement.properties,"submit-button-text":{type:String,value:"submit",userDefined:!0},"submit-button-hidden":{type:Boolean,value:!1,userDefined:!0},"expect-wait":{type:Boolean,userDefined:!1,value:!0},autohide:{type:Boolean,userDefined:!1,value:!0}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAScreen.properties)}attributeChangedCallback(s,d,v){switch(s){case"submit-button-text":this.submitButton&&(this.submitButton.innerHTML=v);break;case"submit-button-hidden":this.submitButtonContainer&&(v!==!0||v!=="true"?this.submitButtonContainer.style.display="block":this.submitButtonContainer.style.display="none");break}}connectedCallback(){var s;if(super.connectedCallback(),this.diagram){this.produceDiagram();return}this.root.innerHTML=this.css+this.html,this.submitButtonContainer=this.root.querySelector(".submitButtonContainer"),!this._started&&(this._started=!0,this.submitButtonHidden&&this.submitButtonContainer&&(this.submitButtonContainer.style.display="none"),this.submitButton=this.root.querySelector(".submitButton"),(s=this.submitButton)==null||s.addEventListener("click",d=>{this.submitButtonClick(d)}))}get css(){return html`<style>
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
                </div>`}getSubmitButton(){let s=this.submitButtonText||this.getAttribute("submit-button-text")||"submit";return customElements.get("sl-button")?html`<sl-button variant="primary" class='submitButton'>${s}</sl-button>`:html`<button class='submitButton'>${s}</button>`}async submitButtonClick(s){(await this.hasChildrenThatRequireResponse()).length>0||this.collectValues().then(v=>{try{const _={value:v};let k=new CustomEvent("valueSubmit",{bubbles:!0,detail:_});this.dispatchEvent(k),this._dispatchEndEvent(v),typeof(s==null?void 0:s.detail.callback)<"u"&&(s==null||s.detail.callback(s)),this.getAttribute("autohide")==="true"&&this.hide()}catch(_){console.error(_)}})}collectValues(){return new Promise((s,d)=>{let v={attachedTimestamp:this._attachedTimestamp,submitTimestamp:new Date().getTime()};this.getChildrenValues(this).then(_=>{_.__meta=v,s(_)})})}doesArrayConsistOfNullsOrUndefined(s){return s.every(d=>d==null)}async getNodeValue(s){return s.getValue?s.getValue():s.value?s.value.then?await s.value:lodashExports.isArray(s.value)&&this.doesArrayConsistOfNullsOrUndefined(s.value)?null:s.value:null}async hasChildrenThatRequireResponse(){const s=this.querySelectorAll("[required]"),d=[];for(const v of Array.from(s)){const _=await this.getNodeValue(v);["",null,void 0].includes(_)?(v.classList.add("missing-value"),d.push(v)):v.classList.remove("missing-value")}return d}getAAChildren(s,d,v){d=d||[],s=s||this;for(let _=0;_<s.children.length;_++)AABaseElement.isAAElement(s.children[_])?v?s.children[_].nodeName===v&&d.push(s.children[_]):d.push(s.children[_]):this.getAAChildren(s.children[_],d,v);return d}async getChildrenValues(s,d){s=s||this,d=d||{};for(let v=0;v<s.children.length;v++){let _=s.children[v];if(_.nodeName!="AA-LABEL"){let k=AABaseElement.getVariableName(_);_.getValue?d[k]=_.getValue():_.value?_.value.then?d[k]=await _.value:d[k]=_.value:await this.getChildrenValues(_,d)}else await this.getChildrenValues(_,d)}return d}get value(){return this.collectValues()}valueWithKey(){return new Promise((s,d)=>{this.value.then(v=>{let _={};_[this.getAttribute("name")]=v,s(_)})})}automate(){for(let s=0;s<this.children.length;s++)AABaseElement.isAAElement(this.children[s])&&typeof this.children[s].automate<"u"&&this.children[s].automate();this.submitButtonClick()}hide(){let s=this.getAAChildren(this,[]);for(let d=0;d<s.length;d++)s[d].stop&&s[d].stop();this.style.display="none"}show(){this.style.display="block"}}AABaseElement.registerAAElement("aa-screen",AAScreen);class AAAffectGrid extends AABaseElement{constructor(){super(),this.grid=null,this.selectedCell=null,this.totalContainer=null,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-affect-grid"}static get properties(){return{...super.properties,"top-label":{type:String,userDefined:!0,value:""},"bottom-label":{type:String,userDefined:!0,value:""},"left-label":{type:String,userDefined:!0,value:""},"center-label":{type:String,userDefined:!0,value:""},"right-label":{type:String,userDefined:!0,value:""},"top-left-label":{type:String,userDefined:!0,value:""},"top-right-label":{type:String,userDefined:!0,value:""},"bottom-left-label":{type:String,userDefined:!0,value:""},"bottom-right-label":{type:String,userDefined:!0,value:""},"left-top-label":{type:String,userDefined:!0,value:""},"left-bottom-label":{type:String,userDefined:!0,value:""},"right-top-label":{type:String,userDefined:!0,value:""},"right-bottom-label":{type:String,userDefined:!0,value:""},rows:{type:Number,userDefined:!0,value:11},columns:{type:Number,userDefined:!0,value:11},value:{type:Array},required:{type:Boolean,userDefined:!0,value:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AAAffectGrid.properties)}get x(){let s=this.getAttribute("value");return s?parseInt(s.split(",")[0]):null}get y(){let s=this.getAttribute("value");return s?parseInt(s.split(",")[1]):null}get value(){let s=this.getAttribute("value");if(!s)return null;let d=s.split(",");return[parseInt(d[0]),parseInt(d[1])]}set value(s){this.setAttribute("value",s)}get minLabel(){return this.getAttribute("min-label")}get maxLabel(){return this.getAttribute("max-label")}set minLabel(s){this.setAttribute("min-label",s)}set maxLabel(s){this.setAttribute("max-label",s)}set min(s){this.setAttribute("min",s)}set max(s){this.setAttribute("max",s)}connectedCallback(){super.connectedCallback(),this.topLeftLabel===null&&(this.topLeftLabel=""),this.topLabel===null&&(this.topLabel=""),this.topRightLabel===null&&(this.topRightLabel=""),this.leftTopLabel===null&&(this.leftTopLabel=""),this.leftLabel===null&&(this.leftLabel=""),this.leftBottomLabel===null&&(this.leftBottomLabel=""),this.rightTopLabel===null&&(this.rightTopLabel=""),this.rightLabel===null&&(this.rightLabel=""),this.rightBottomLabel===null&&(this.rightBottomLabel=""),this.bottomLeftLabel===null&&(this.bottomLeftLabel=""),this.bottomLabel===null&&(this.bottomLabel=""),this.root.innerHTML=this.css+this.html,this.grid=this.root.querySelector(".grid"),this.grid.addEventListener("mousedown",s=>{let d=this.value,v=s.target;this.value=[v.dataset.x,v.dataset.y],this.selectedCell&&this.selectedCell.classList.remove("selected"),this.selectedCell=v,this.selectedCell.classList.add("selected");let _=this.value;d?(d[0]!=_[0]||d[1]!=_[1])&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})):this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.totalContainer=this.root.querySelector(".total-container"),this.totalContainer.style.height=window.getComputedStyle(this.totalContainer).width,this.root.querySelector(".leftLabels").style.width=window.getComputedStyle(this.grid).height,this.root.querySelector(".rightLabels").style.width=window.getComputedStyle(this.grid).height,ResizeObserver&&new ResizeObserver(()=>{this.totalContainer.style.height=window.getComputedStyle(this.totalContainer).width,this.root.querySelector(".leftLabels").style.width=window.getComputedStyle(this.grid).height,this.root.querySelector(".rightLabels").style.width=window.getComputedStyle(this.grid).height}).observe(this.root.querySelector(".top-label"))}get css(){return html`<style>
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
        `}get html(){let s="";for(let v=0;v<this.rows;v++)for(let _=0;_<this.columns;_++)s+=html`<div class="cell  ${v==0?"top":""} ${v==this.rows-1?"bottom":""}  ${_==0?"left":""}  ${_==this.columns-1?"right":""}" data-x="${_+1-Math.round(this.columns/2)}" data-y="${Math.round(this.rows/2)-v-1}">
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
        </style>`}toJSON(){return super.toJSON()}}AABaseElement.registerAAElement("aa-choice-item",AAChoiceItem);class AACheckboxes extends AABaseElement{static get category(){return"response item"}static get tag(){return"aa-checkboxes"}static get properties(){return{horizontal:{type:Boolean,value:!1,userDefined:!0},vertical:{type:Boolean,value:!0,userDefined:!0},name:{type:String,userDefined:!0},value:{type:String,userDefined:!1}}}static get acceptsElements(){return["aa-choice-item"]}static get observedAttributes(){return["horizontal","vertical"]}get value(){const s=[];for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(v.checked?s.push(v.value):s.push(null))}return s}set value(s){Array.isArray(s)||(s=[s]);for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(s.includes(v.value)?v.checked=!0:v.checked=!1)}}constructor(){super(),this.horizontal_wasChangedInternally__=!1,this.vertical_wasChangedInternally__=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("change",s=>{s.stopPropagation(),this.parentElement.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{value:this.value}}))})}toJSON(){let s=super.toJSON(),d=[];for(let v=0;v<this.children.length;v++)d.push(this.children[v].toJSON());return s[this.tagName.toLowerCase()].items=d,s}}AABaseElement.registerAAElement("aa-checkboxes",AACheckboxes);class AAMultipleChoice extends AABaseElement{static get category(){return"response item"}static get tag(){return"aa-multiple-choice"}static get properties(){return{horizontal:{type:Boolean,value:!1,userDefined:!0},vertical:{type:Boolean,value:!0,userDefined:!0},name:{type:String,userDefined:!0},value:{type:String,userDefined:!0}}}static get acceptsElements(){return["aa-choice-item"]}static get observedAttributes(){return["horizontal","vertical"]}attributeChangedCallback(s,d,v){switch(s){case"horizontal":if(v=="true"){this.style.display="flex";for(let _=0;_<this.children.length;_++){const k=this.children[_];k.tagName=="AA-CHOICE-ITEM"&&(k.orientation="vertical")}}if(this.vertical_wasChangedInternally__){this.vertical_wasChangedInternally__=!1;return}this.vertical_wasChangedInternally__=!0,v==="false"||!v?this.vertical=!0:this.vertical=!1;return;case"vertical":if(v=="true"){this.style.display="block";for(let _=0;_<this.children.length;_++){const k=this.children[_];k.tagName=="AA-CHOICE-ITEM"&&(k.orientation="horizontal")}}if(this.vertical_wasChangedInternally__){this.vertical_wasChangedInternally__=!1;return}this.horizontal_wasChangedInternally__=!0,v==="false"||!v?this.horizontal=!0:this.horizontal=!1;return}}get staticObject(){return AAMultipleChoice}get value(){return this.getValueOfSelectedItem()}set value(s){for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(v.value!==s?v.checked=!1:v.checked=!0)}}constructor(){super(),this.horizontal_wasChangedInternally__=!1,this.vertical_wasChangedInternally__=!1}updateState(s){for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(v!==s?v.checked=!1:v.checked=!0)}}getValueOfSelectedItem(){for(let s=0;s<this.children.length;s++){const d=this.children[s];if(d.tagName==="AA-CHOICE-ITEM"&&d.checked)return d.value}}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value"),this.addEventListener("change",s=>{s.stopPropagation(),this.updateState(s.target),this.parentElement.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{value:this.value}}))})}toJSON(){let s=super.toJSON();return s.horizontal&&(s.horizontal=!0),s}}AABaseElement.registerAAElement("aa-multiple-choice",AAMultipleChoice);class AAWhen extends AABaseElement{static get category(){return"control"}static get tag(){return"aa-when"}static get properties(){return{name:{type:String,userDefined:!1},"should-run":{type:Boolean,value:!0,userDefined:!1},debug:{type:Boolean,value:!1,userDefined:!1},test:{type:String,userDefined:!0}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AAWhen.properties)}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>"}connectedCallback(){super.connectedCallback()}}AABaseElement.registerAAElement("aa-when",AAWhen);class AAOtherwise extends AABaseElement{static get category(){return"control"}static get tag(){return"aa-otherwise"}static get acceptsElements(){return null}constructor(){super()}connectedCallback(){super.connectedCallback()}}AABaseElement.registerAAElement("aa-otherwise",AAOtherwise);class AAChoose extends AABaseElement{constructor(){super(),this._shouldRun=!1,this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>",this.originalContent=this.innerHTML}static get category(){return"control"}static get tag(){return"aa-choose"}static get properties(){return{...AABaseElement.properties,name:{type:String,userDefined:!0},"should-run":{type:Boolean,value:!0,userDefined:!1},debug:{type:Boolean,value:!1,userDefined:!1}}}static get acceptsElements(){return["aa-when","aa-otherwise"]}static get observedAttributes(){return Object.keys(AAChoose.properties)}connectedCallback(){if(this.setAttributeDefaultValues(),this.diagram){this.produceDiagram();return}if(this._shouldRun=this.shouldRun===null||this.shouldRun===!0,this.sessionElement=this._getParentSession(),this._shouldRun)if(typeof this.innerFragment<"u"){AABaseElement.scanAndReplace(this.innerFragment);let m=this._getNodeToInstantiate();if(m.length===0)this._dispatchEndEvent();else{let s=!1;for(let d=0;d<m.length;d++){let v=m[d];if(typeof v<"u"){for(let _=0;_<v.childNodes.length;_++)v.childNodes[_].constructor&&v.childNodes[_].constructor.properties&&v.childNodes[_].constructor.properties["expect-wait"]&&(s=!0);this.parentNode.insertBefore(v,this.nextSibling)}}s||this._dispatchEndEvent()}}else this.childNodes.length===0&&this._dispatchEndEvent();this.remove()}_getNodeToInstantiate(){let m=[],s=[],d=!1;for(let v=0;v<this.innerFragment.children.length;v++){let _=this.innerFragment.children[v];_.nodeName==="AA-WHEN"?(d=this.evaluate(_),d&&m.push(AABaseElement.copy(_).innerFragment)):_.nodeName==="AA-OTHERWISE"&&s.push(AABaseElement.copy(_).innerFragment)}return m.length===0?s:m}evaluate(m){let s=m.getAttribute("test");return s==null||s==""?null:this.evaluateTestExpression(s)}evaluateTestExpression(test){let expr=this.replaceExpressionIdentifiersWithValues(test);try{var parseTree=jsep(expr);return parseTree.left.type==="Literal"&&parseTree.right.type==="Literal"?eval(expr):eval(`${parseTree.left.value}${parseTree.operator}${parseTree.right.value}`)}catch(m){console.error("parse error:",m)}}replaceExpressionIdentifiersWithValues(m,s){let d=this.getMemory()||s,v=m.toUpperCase(),_=Object.keys(d.getDataDump()),k=_.map(I=>I.toUpperCase());for(let I in _){let N=d.getData(_[I]),D=parseInt(N);D!=N&&(N==="null"?D="null":N==="true"?D="true":N==="false"?D="false":D=`"${N}"`);let F=new RegExp(k[I],"g");v=v.replace(F,D)}return v}}AABaseElement.registerAAElement("aa-choose",AAChoose);class AAFunctionRandom extends AABaseElement{static get tag(){return"aa-function-random"}static get properties(){return{name:{type:String,userDefined:!0},debug:{type:Boolean,value:!1,userDefined:!1},value:{type:Number,userDefined:!1},min:{type:Number,userDefined:!0},max:{type:Number,userDefined:!0}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AAFunctionRandom.properties)}constructor(){super()}connectedCallback(){let s=this.getMemory();s&&s.setData(this.name,this.value),this._dispatchEndEvent({autoDispatch:!0}),this.debug||this.remove()}get value(){var s=parseFloat(this.min),d=parseFloat(this.max);let v=this.getRandomInt(s,d),_=this.getMemory();return _&&_.setData(AABaseElement.getVariableName(this),v),v}getRandomInt(s,d){return s=Math.ceil(s),d=Math.floor(d),Math.floor(Math.random()*(d-s)+.5)+s}}AABaseElement.registerAAElement("aa-function-random",AAFunctionRandom);class AAGeolocation extends AABaseElement{constructor(){super(),this._ready=!1,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-geolocation"}static get properties(){return{name:{type:String,userDefined:!0},"get-on-request":{type:Boolean,userDefined:!0,value:!1},ready:{type:Boolean,userDefined:!1,value:!1}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAGeolocation.properties)}get value(){return this._getLocation()}set value(s){this.setAttribute("value",s)}async _getValue(){return await this._getLocation()}_getLocation(){return new Promise((s,d)=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(v=>{let _=v.coords.latitude,k=v.coords.longitude;s({lat:_,lon:k,timestamp:new Date})}):d()})}connectedCallback(){super.connectedCallback(),this._ready=!0,this.getOnRequest||this._getLocation().then(s=>{var d=new CustomEvent("valueSubmit",{bubbles:!0,detail:{value:s}});this.dispatchEvent(d),this._dispatchEndEvent({value:s,autoDispatch:!0})})}}AABaseElement.registerAAElement("aa-geolocation",AAGeolocation);class AALabel extends AABaseElement{static get tag(){return"aa-label"}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){super.connectedCallback(),this.root.innerHTML=this.css+this.html}get css(){return html`
            <style>
                    :host{
                        display:block;
                        font-family: "Roboto Flex", Roboto, Noto, sans-serif;
                        font-weight:bold;
                        margin-top:40px;
                        margin-bottom:10px;
                        
                    }

            </style>
        `}get html(){return"<slot></slot>"}}AABaseElement.registerAAElement("aa-label",AALabel);class AALikertScale extends AABaseElement{static get category(){return"response item"}static get tag(){return"aa-likert-scale"}static get properties(){return{name:{type:String,userDefined:!0},debug:{type:Boolean,value:!1,userDefined:!1},value:{type:Number,userDefined:!1},items:{type:String,userDefined:!0},"start-label":{type:String,userDefined:!0,value:""},"middle-label":{type:String,userDefined:!0,value:""},"end-label":{type:String,userDefined:!0,value:""},"start-item":{type:Number,userDefined:!0,value:1},"show-radio-numbers":{type:Boolean,userDefined:!0,value:!0},"number-position":{type:String,userDefined:!0,value:"right"}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AALikertScale.properties)}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.value=this.getAttribute("value")}connectedCallback(){super.connectedCallback(),this.items||(this.items=5),this.root.innerHTML=this.css+this.html,this.root.querySelectorAll("sl-radio").forEach(s=>{s.addEventListener("sl-change",()=>{this.value=s.value}),s.addEventListener("change",()=>{this.value=s.value})}),this.arrangeLabels(),this.addEventListener("click",()=>{this.currentvalue?(this.currentvalue!=this.value&&this.dispatchEvent(new CustomEvent("change")),this.currentvalue=this.value):this.dispatchEvent(new CustomEvent("change"))})}getTags(){let s="",d=`<div class='start-label'>${this.getAttribute("start-label")||""}</div>`,v=`<div class='middle-label'>${this.getAttribute("middle-label")||""}</div>`,_=`<div class='end-label'>${this.getAttribute("end-label")||""}</div>`,k=parseInt(this.items);for(let N=1;N<=k;N++)N==1?s+=d:N==Math.floor((k+1)/2)?s+=v:N==k&&(s+=_);return`<div class="label-container">${s}</div>`}get css(){return html`<style>
           
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
            </style>`}get html(){const s=this.startItem?parseInt(this.startItem):0,d=this.name??v4();let v="";for(let _=0;_<this.items;_++){const k=_+s;v+=`<div class="radio-container"><sl-radio id="${d}-${k}" class="radio" name="${d}" value=${k}></sl-radio>`,v+=`<label for="${d}-${k}">${k}</label></div>`}return`
        
        <div class="container">
            <div class="group-container">
            ${v}
            </div>
            ${this.getTags()}
        </div>
        `}arrangeLabels(){const s=this.root.querySelector(".label-container"),d=this.root.querySelector(".group-container");d.getBoundingClientRect().width;const v=this.root.querySelector(".start-label"),_=this.root.querySelector(".middle-label"),k=this.root.querySelector(".end-label");setTimeout(()=>{s.style.width=d.getBoundingClientRect().width+"px";const I=_.getBoundingClientRect().width,N=d.getBoundingClientRect().width;_.style.left=N/2-I/2+"px",s.style.height=Math.max(v.getBoundingClientRect().height,_.getBoundingClientRect().height,k.getBoundingClientRect().height)+"px"},0)}}AABaseElement.registerAAElement("aa-likert-scale",AALikertScale);class AAMemory extends AABaseElement{static get tag(){return"aa-memory"}get observedAttributes(){return["name"]}constructor(){super()}connectedCallback(){}setData(s,d){localStorage.setItem(s,d)}getData(s){return localStorage[s]}getDataDump(){return localStorage}}AABaseElement.registerAAElement("aa-memory",AAMemory);class AAJump extends AABaseElement{static get category(){return"control"}static get tag(){return"aa-jump"}static get properties(){return{name:{type:String,userDefined:!0},goto:{type:String,userDefined:!0}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAJump.properties)}connectedCallback(){this._dispatchEndEvent({goto:this.goto,autoDispatch:!0}),this.remove()}}AABaseElement.registerAAElement("aa-jump",AAJump);class AASequence extends AABaseElement{constructor(){super(),this.target=null,this.sIndex=0}static get category(){return"control"}static get tag(){return"aa-sequence"}static get properties(){return{...AABaseElement.properties,name:{type:String,userDefined:!0},"write-into":{type:String,userDefined:!0},"should-run":{type:Boolean,userDefined:!0,value:!0},debug:{type:Boolean,value:!1,userDefined:!1},type:{type:String,userDefined:!1},stopped:{type:Boolean,userDefined:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AASequence.properties)}connectedCallback(){if(this.setAttributeDefaultValues(),this.diagram){this.produceDiagram();return}this.addEventListener("endEvent",this.endEventListener.bind(this)),(this.shouldRun===null||this.shouldRun===!0)&&this.init()}get css(){return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `}get html(){return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `}init(){if(this.stopped=!1,this.writeInto?this.target=document.querySelector(this.writeInto):this.target=this,typeof this.innerFragment>"u"){console.warn(".innerFragment is undefined");return}this.sIndex=0,this.stopped||this.start()}start(){this.stopped=!1,this.next()}stop(){this.stopped=!0}next(s){return new Promise((d,v)=>{if(this.stopped)return;if(this.sIndex>=this.innerFragment.childNodes.length){this.parentElement&&this.parentElement.dispatchEvent(new CustomEvent("endEvent",{detail:{autoDispatch:!0},bubbles:!0,composed:!0}));return}if(typeof s=="string"){for(let I=0;I<this.innerFragment.childNodes.length;I++)if(this.innerFragment.childNodes[I].getAttribute&&this.innerFragment.childNodes[I].getAttribute("name")==s){this.sIndex=I;break}}let _=this.innerFragment.childNodes[this.sIndex];for(;_.nodeType!=Node.ELEMENT_NODE;){let I=AABaseElement.copy(_);if(this.target.appendChild(I),this.currentNode=I,this.sIndex++,this.sIndex>=this.innerFragment.childNodes.length)return this.parentElement&&this.parentElement.dispatchEvent(new CustomEvent("endEvent",{detail:{autoDispatch:!0},bubbles:!0,composed:!0})),d();_=this.innerFragment.childNodes[this.sIndex]}let k=AABaseElement.copy(_);this.currentNode=k,this.sIndex+=1,this.target.appendChild(k),setTimeout(()=>d())})}endEventListener(s){s.stopPropagation();const d=s.detail;d?d.goto?this.next(d.goto):d.autoDispatch?this.next(!0):setTimeout(()=>this.next(!0)):setTimeout(()=>this.next(!0))}}AABaseElement.registerAAElement("aa-sequence",AASequence);class AASession extends AABaseElement{constructor(){super(),this.sessionId=v4(),this.sessionTime=0,this.myTemplate=document.createElement("template"),this.myTemplate.innerHTML=this.innerHTML,this.innerHTML="",this._mem=document.createElement("aa-memory"),this.addEventListener("valueSubmit",s=>{const d=s.detail;let v={data:d.value,sessionId:this.sessionId,sessionTimestamp:this.sessionTime,sessionName:this.name,variables:Object.keys(d.value)};Object.keys(s.detail.value).forEach(I=>{this._mem.setData(I,s.detail.value[I])});const _={input:v};let k=new CustomEvent("sessionInputSubmit",{bubbles:!0,detail:_,composed:!0});this.dispatchEvent(k)}),this.addEventListener("endEvent",s=>{this.debug||s.stopPropagation();let d=new CustomEvent("sessionEndEvent",{bubbles:!0,detail:"sessionEnd"});this.dispatchEvent(d)})}static get tag(){return"aa-session"}static get properties(){return{...AABaseElement.properties,"should-run":{type:Boolean,userDefined:!0,value:!0},debug:{type:Boolean,value:!1,userDefined:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AASession.properties)}myIdGenerator(){return v4()}connectedCallback(){if(this.innerHTML="",this.setAttributeDefaultValues(),this.diagram===!0){this.produceDiagram();return}this.sessionId=this.myIdGenerator(),this.sessionTime=new Date().getTime();let s=Object.keys(this.dataset);for(let d in s)this.setData(s[d],this.dataset[s[d]]);(this.shouldRun===null||this.shouldRun===!0)&&this.run(),setTimeout(()=>{this.dispatchEvent(new CustomEvent("sessionReady",{bubbles:!0}))},0)}attachTemplateChildNodesToMyself(s){for(;s.content.childNodes.length;)if(s.content.childNodes[0].nodeName==="TEMPLATE"){for(;s.content.childNodes[0].content.childNodes.length;)this.appendChild(s.content.childNodes[0].content.childNodes[0]);s.content.childNodes[0].remove()}else this.appendChild(s.content.childNodes[0])}run(){let s=this.myTemplate.cloneNode(!0);AABaseElement.scanAndReplace(s),this.attachTemplateChildNodesToMyself(s)}getData(s){return this._mem.getData(s)}setData(s,d){return this._mem.setData(s,d)}getDataDump(){return this._mem.getDataDump()}toJSON(){let s={};s[this.tagName]=this.getAttributes();let d=[];for(let v=0;v<this.originalChildNodes.length;v++){let _=this.originalChildNodes[v],k=AABaseElement.nodeToJSON(_);k&&d.push(k)}return s[this.tagName].childNodes=[{template:{childNodes:d}}],s}toJSL(){let s=this.getAttributeNames(),d={};for(let N=0;N<s.length;N++)this.getAttribute(s[N])!=="undefined"&&(d[s[N]]=this.getAttribute(s[N]));let v=[],_=this.myTemplate.content.childNodes[0].content.childNodes;for(let N=0;N<_.length;N++)nodeToJSL(_[N])&&v.push(nodeToJSL(_[N]));let k=formatJSLResult("TEMPLATE",{},v);return formatJSLResult("AA_SESSION",d,[k])}get originalChildNodes(){return this.myTemplate.content.childNodes.length==0?[]:this.myTemplate.content.childNodes[0].content?this.myTemplate.content.childNodes[0].content.childNodes:this.childNodes}}AABaseElement.registerAAElement("aa-session",AASession);function parseDuration(m){const s=m.trim().match(/^(\d+)(s|min|h|d)$/);if(!s)throw new Error(`Invalid duration format: "${m}". Expected format like 30s, 15min, 2h, 1d`);const d=parseInt(s[1],10),v=s[2];switch(v){case"s":return d*1e3;case"min":return d*60*1e3;case"h":return d*60*60*1e3;case"d":return d*24*60*60*1e3;default:throw new Error(`Unknown duration unit: ${v}`)}}function parseTime(m){const s=m.trim().match(/^(\d{1,2}):(\d{2})$/);if(!s)throw new Error(`Invalid time format: "${m}". Expected HH:MM`);return{hours:parseInt(s[1],10),minutes:parseInt(s[2],10)}}function parseTimeRange(m){const s=m.trim().split("-");if(s.length!==2)throw new Error(`Invalid time range: "${m}". Expected HH:MM-HH:MM`);const d=parseTime(s[0]),v=parseTime(s[1]);return{startMinutes:d.hours*60+d.minutes,endMinutes:v.hours*60+v.minutes}}function subtractExclusions(m,s){let d=[...m];for(const v of s){const _=[];for(const k of d)v.startMinutes>=k.endMinutes||v.endMinutes<=k.startMinutes?_.push(k):(v.startMinutes>k.startMinutes&&_.push({startMinutes:k.startMinutes,endMinutes:v.startMinutes}),v.endMinutes<k.endMinutes&&_.push({startMinutes:v.endMinutes,endMinutes:k.endMinutes}));d=_}return d}const DAY_NAMES=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];class AASignalProtocol extends AABaseElement{static get tag(){return"aa-signal-protocol"}static get properties(){return{...AABaseElement.properties,"schedule-type":{type:String,userDefined:!0},"signals-per-day":{type:Number,userDefined:!0},"window-start":{type:String,userDefined:!0},"window-end":{type:String,userDefined:!0},"signal-windows":{type:String,userDefined:!0},"min-interval":{type:String,value:"15min",userDefined:!0},"signal-expiry":{type:String,value:"15min",userDefined:!0},"reminder-after":{type:String,userDefined:!0},"reminder-count":{type:Number,value:"1",userDefined:!0},"study-days":{type:Number,userDefined:!0},"start-date":{type:String,userDefined:!0},"end-date":{type:String,userDefined:!0},"active-days":{type:String,value:"all",userDefined:!0},"fixed-times":{type:String,userDefined:!0},"fixed-times-label":{type:String,userDefined:!0},"exclude-dates":{type:String,userDefined:!0},"exclude-times":{type:String,userDefined:!0},"weekend-signals-per-day":{type:Number,userDefined:!0},"weekend-window-start":{type:String,userDefined:!0},"weekend-window-end":{type:String,userDefined:!0},"weekend-signal-windows":{type:String,userDefined:!0},"weekend-fixed-times":{type:String,userDefined:!0}}}static get observedAttributes(){return Object.keys(AASignalProtocol.properties)}constructor(){super()}connectedCallback(){super.connectedCallback(),this.validate(),setTimeout(()=>{this.dispatchEvent(new CustomEvent("protocolReady",{bubbles:!0}))},0)}validate(){const s=[],d=this.scheduleType;if(d==="fixed"&&(this.fixedTimes||s.push('schedule-type="fixed" requires fixed-times attribute')),(d==="random"||d==="stratified-random")&&(this.signalsPerDay||s.push(`schedule-type="${d}" requires signals-per-day attribute`),!this.signalWindows&&(!this.windowStart||!this.windowEnd)&&s.push(`schedule-type="${d}" requires either signal-windows or both window-start and window-end`)),this.signalWindows&&(this.windowStart||this.windowEnd)&&s.push("signal-windows overrides window-start/window-end; both are set"),(d==="random"||d==="stratified-random")&&this.signalsPerDay){const _=this._getEffectiveWindows(!1).reduce((D,F)=>D+(F.endMinutes-F.startMinutes),0),k=parseInt(this.signalsPerDay,10),N=parseDuration(this.minInterval||"15min")/6e4;k>0&&_/k<N&&s.push(`Infeasible: total window duration (${_}min) / signals-per-day (${k}) < min-interval (${N}min)`)}if(this.activeDays==="weekdays"&&(this.weekendSignalsPerDay||this.weekendWindowStart||this.weekendWindowEnd||this.weekendSignalWindows||this.weekendFixedTimes)&&s.push('active-days="weekdays" but weekend-* overrides are present (they will be ignored)'),this.excludeDates){const v=this.excludeDates.split(",").map(_=>_.trim());for(const _ of v)(!/^\d{4}-\d{2}-\d{2}$/.test(_)||isNaN(new Date(_).getTime()))&&s.push(`Invalid exclude-dates value: "${_}". Expected YYYY-MM-DD`)}if(this.excludeTimes){const v=this._getBaseWindows(!1),_=this.excludeTimes.split(";").map(I=>parseTimeRange(I));subtractExclusions(v,_).length===0&&s.push("exclude-times completely covers the signal window; no room for signals")}for(const v of s)console.warn(`[aa-signal-protocol "${this.name||""}"] ${v}`);return s}_getBaseWindows(s){const d=s&&this.weekendSignalWindows?this.weekendSignalWindows:this.signalWindows;if(d)return d.split(";").map(k=>parseTimeRange(k));const v=s&&this.weekendWindowStart?this.weekendWindowStart:this.windowStart,_=s&&this.weekendWindowEnd?this.weekendWindowEnd:this.windowEnd;if(v&&_){const k=parseTime(v),I=parseTime(_);return[{startMinutes:k.hours*60+k.minutes,endMinutes:I.hours*60+I.minutes}]}return[]}_getEffectiveWindows(s){let d=this._getBaseWindows(s);if(this.excludeTimes){const v=this.excludeTimes.split(";").map(_=>parseTimeRange(_));d=subtractExclusions(d,v)}return d}_isDayActive(s){const d=s.getDay(),v=DAY_NAMES[d],_=this.activeDays||"all";if(_!=="all"&&(_==="weekdays"&&(d===0||d===6)||_==="weekends"&&d!==0&&d!==6||_!=="weekdays"&&_!=="weekends"&&!_.split(",").map(I=>I.trim()).includes(v)))return!1;if(this.excludeDates){const k=s.getFullYear()+"-"+String(s.getMonth()+1).padStart(2,"0")+"-"+String(s.getDate()).padStart(2,"0");if(this.excludeDates.split(",").map(N=>N.trim()).includes(k))return!1}return!0}getProtocol(){return{name:this.name,scheduleType:this.scheduleType,signalsPerDay:this.signalsPerDay?parseInt(this.signalsPerDay,10):null,windowStart:this.windowStart||null,windowEnd:this.windowEnd||null,signalWindows:this.signalWindows||null,minInterval:this.minInterval||"15min",signalExpiry:this.signalExpiry||"15min",reminderAfter:this.reminderAfter||null,reminderCount:this.reminderCount?parseInt(this.reminderCount,10):1,studyDays:this.studyDays?parseInt(this.studyDays,10):null,startDate:this.startDate||null,endDate:this.endDate||null,activeDays:this.activeDays||"all",fixedTimes:this.fixedTimes||null,fixedTimesLabel:this.fixedTimesLabel||null,excludeDates:this.excludeDates||null,excludeTimes:this.excludeTimes||null,weekendSignalsPerDay:this.weekendSignalsPerDay?parseInt(this.weekendSignalsPerDay,10):null,weekendWindowStart:this.weekendWindowStart||null,weekendWindowEnd:this.weekendWindowEnd||null,weekendSignalWindows:this.weekendSignalWindows||null,weekendFixedTimes:this.weekendFixedTimes||null}}getSignallingTimes(s,d){const v=[],_=new Date(s.getFullYear(),s.getMonth(),s.getDate()),k=new Date(d.getFullYear(),d.getMonth(),d.getDate());for(;_<=k;){if(this._isDayActive(_)){const I=_.getDay()===0||_.getDay()===6,N=this._generateDaySignals(_,I);v.push(...N)}_.setDate(_.getDate()+1)}return v.sort((I,N)=>I.getTime()-N.getTime()),v}_generateDaySignals(s,d){const v=[],_=this.scheduleType,k=d&&this.weekendSignalsPerDay?this.weekendSignalsPerDay:this.signalsPerDay,I=k?parseInt(String(k),10):0,N=this._getEffectiveWindows(d),F=parseDuration(this.minInterval||"15min")/6e4;if(_!=="fixed"){if(_==="random"){const $=this._generateRandomSignals(s,N,I,F);v.push(...$)}else if(_==="stratified-random"){const $=this._generateStratifiedRandomSignals(s,N,I,F);v.push(...$)}}const z=d&&this.weekendFixedTimes?this.weekendFixedTimes:this.fixedTimes;if(z){const $=z.split(",").map(V=>V.trim());for(const V of $){const W=parseTime(V),ot=new Date(s.getFullYear(),s.getMonth(),s.getDate(),W.hours,W.minutes);v.push(ot)}}return v}_generateRandomSignals(s,d,v,_){if(d.length===0||v<=0)return[];const k=d.reduce((F,z)=>F+(z.endMinutes-z.startMinutes),0);if(k<=0)return[];const I=[];let N=0;const D=v*100;for(;I.length<v&&N<D;){N++;const F=Math.random()*k;let z=0,$=0;for(const W of d){const ot=W.endMinutes-W.startMinutes;if($+ot>F){z=W.startMinutes+(F-$);break}$+=ot}I.some(W=>Math.abs(W-z)<_)||I.push(z)}return I.map(F=>{const z=Math.floor(F/60),$=Math.floor(F%60);return new Date(s.getFullYear(),s.getMonth(),s.getDate(),z,$)})}_generateStratifiedRandomSignals(s,d,v,_){if(d.length===0||v<=0)return[];const k=d.reduce((D,F)=>D+(F.endMinutes-F.startMinutes),0);if(k<=0)return[];const I=k/v,N=[];for(let D=0;D<v;D++){const F=D*I,z=(D+1)*I;let $=F+Math.random()*(z-F),V=this._offsetToMinuteOfDay(d,$),W=0;for(;W<50&&N.some(lt=>Math.abs(lt-V)<_);)$=F+Math.random()*(z-F),V=this._offsetToMinuteOfDay(d,$),W++;N.push(V)}return N.map(D=>{const F=Math.floor(D/60),z=Math.floor(D%60);return new Date(s.getFullYear(),s.getMonth(),s.getDate(),F,z)})}_offsetToMinuteOfDay(s,d){let v=0;for(const _ of s){const k=_.endMinutes-_.startMinutes;if(v+k>d)return _.startMinutes+(d-v);v+=k}return s[s.length-1].endMinutes}toJSON(){const s={},d=this.tagName.toLowerCase();return s[d]=this.getAttributes(),this.childNodes.length&&(s[d].childNodes=[],this.childNodes.forEach(v=>{const _=AABaseElement.nodeToJSON(v);_&&s[d].childNodes.push(_)})),s}}AABaseElement.registerAAElement("aa-signal-protocol",AASignalProtocol);class AASlider extends AABaseElement{constructor(){super(),this.minLabelItem=null,this.maxLabelItem=null,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-slider"}static get properties(){return{name:{type:String,userDefined:!0},min:{type:Number,userDefined:!0},max:{type:Number,userDefined:!0},"min-label":{type:String,userDefined:!0},"max-label":{type:String,userDefined:!0},value:{type:Number,userDefined:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AASlider.properties)}get value(){return this.inputItem?this.inputItem.value:this.getAttribute("value")}set value(s){this.setAttribute("value",s),this.inputItem&&(this.inputItem.value=s)}get minLabel(){return this.getAttribute("min-label")}get maxLabel(){return this.getAttribute("max-label")}set minLabel(s){this.setAttribute("min-label",s),this.inputItem&&(this.inputItem.minLabel=s)}set maxLabel(s){this.setAttribute("max-label",s),this.inputItem&&(this.inputItem.maxLabel=s)}set min(s){this.setAttribute("min",s),this.inputItem&&(this.inputItem.min=s)}set max(s){this.setAttribute("max",s),this.inputItem&&(this.inputItem.max=s)}connectedCallback(){super.connectedCallback();let s=this.css+`<div class='inputContainer'>${this.html}</div>`;this.root.innerHTML=s;let d=this.minLabel,v=this.maxLabel,_=this.value||(this.min+this.max)/2;this.inputItem=this.root.querySelector(".inputItem"),this.minLabelItem=this.root.querySelector(".minLabel"),this.maxLabelItem=this.root.querySelector(".maxLabel"),d&&(this.minLabelItem.innerHTML=d),v&&(this.maxLabelItem.innerHTML=v),_&&(this.inputItem.value=_),this.inputItem.addEventListener("sl-change",k=>{this.value=k.target.value}),this.inputItem.addEventListener("change",k=>{this.value=k.target.value})}get css(){return`<style>
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
        `}}AABaseElement.registerAAElement("aa-slider",AASlider);class AATextAnswer extends AABaseElement{constructor(){super(),this.keyUpTimeout=null,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-text-answer"}static get properties(){return{name:{type:String,userDefined:!0},label:{type:String,userDefined:!0},value:{type:String,userDefined:!1},type:{type:String,userDefined:!0,value:"text",valuesAllowed:["date","datetime","datetime-local","email","number","password","tel","text","time","textarea"]}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AATextAnswer.properties)}get value(){return this.inputItem?this.inputItem.value:this.getAttribute("value")}set value(s){this.setAttribute("value",s),this.inputItem&&(this.inputItem.value=s);let d=this.getMemory();d&&d.setData(AABaseElement.getVariableName(this),s)}get label(){return this.getAttribute("label")}set label(s){this.setAttribute("label",s),this.inputItem&&(this.inputItem.label=s)}connectedCallback(){super.connectedCallback(),this.root.innerHTML=this.css+this.html;let s=this.label,d=this.value;this.inputItem=this.root.querySelector(".inputItem"),s&&(this.inputItem.label=s),d&&(this.inputItem.value=d),this.inputItem.addEventListener("sl-change",v=>{this.value=v.target.value,this.dispatchEvent(new CustomEvent("change"))}),this.inputItem.addEventListener("change",v=>{this.value=v.target.value,this.dispatchEvent(new CustomEvent("change"))}),this.keyUpTimeout=null,this.inputItem.addEventListener("sl-input",v=>{this.value=v.target.value,this.keyUpTimeout&&clearTimeout(this.keyUpTimeout),this.keyUpTimeout=setTimeout(()=>{this.dispatchEvent(new CustomEvent("change"))},1500)}),this.inputItem.addEventListener("keyup",v=>{this.value=v.target.value,this.keyUpTimeout&&clearTimeout(this.keyUpTimeout),this.keyUpTimeout=setTimeout(()=>{this.dispatchEvent(new CustomEvent("change"))},1500)})}get css(){return html`<style>
        :host{
            display:block;
            overflow:hidden;        
            text-align: center;
        }

        sl-input {
            width: 100%;
        }
        
        </style>`}get html(){let s=customElements.get("sl-input")?`<sl-input type='${this.type}' class='inputItem'></sl-input>`:`<input type='${this.type}' class='inputItem'>`;return html`${s}`}}AABaseElement.registerAAElement("aa-text-answer",AATextAnswer);class AAVariable extends AABaseElement{static get tag(){return"aa-variable"}static get properties(){return{name:{type:String,userDefined:!0},value:{type:String,userDefined:!0}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAVariable.properties)}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){let m=this.getMemory(),s=this.value;m&&m.setData(this.name,s),this._dispatchEndEvent({autoDispatch:!0}),this.debug||this.remove()}evaluateValueExpression(test){let expr=this.replaceExpressionIdentifiersWithValues(test);try{var parseTree=jsep(expr);if(parseTree.type!=="Identifier"){if(parseTree.type!=="Literal")return parseTree.left.type==="Literal"&&parseTree.right.type==="Literal"?eval(expr):eval(`${parseTree.left.value}${parseTree.operator}${parseTree.right.value}`)}}catch(m){console.error("parse error:",m)}}replaceExpressionIdentifiersWithValues(m,s){let d=this.getMemory()||s,v=m.toUpperCase(),_=Object.keys(d.getDataDump()),k=_.map(I=>I.toUpperCase());for(let I in _){let N=d.getData(_[I]),D=parseInt(N);D!=N&&(N==="null"?D="null":N==="true"?D="true":N==="false"?D="false":D=`"${N}"`);let F=new RegExp(k[I],"g");v=v.replace(F,D)}return v}}AABaseElement.registerAAElement("aa-variable",AAVariable);const preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:{order:["Introduction","User Interface","Control Flow","Data & Utility"]}}}};export{preview as default};
