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
`;const connectedElements=new Set,translations=new Map;let fallback,documentDirection="ltr",documentLanguage="en";const isClient=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(isClient){const m=new MutationObserver(update);documentDirection=document.documentElement.dir||"ltr",documentLanguage=document.documentElement.lang||navigator.language,m.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function registerTranslation(...m){m.map(s=>{const d=s.$code.toLowerCase();translations.has(d)?translations.set(d,Object.assign(Object.assign({},translations.get(d)),s)):translations.set(d,s),fallback||(fallback=s)}),update()}function update(){isClient&&(documentDirection=document.documentElement.dir||"ltr",documentLanguage=document.documentElement.lang||navigator.language),[...connectedElements.keys()].map(m=>{typeof m.requestUpdate=="function"&&m.requestUpdate()})}let LocalizeController$1=class{constructor(s){this.host=s,this.host.addController(this)}hostConnected(){connectedElements.add(this.host)}hostDisconnected(){connectedElements.delete(this.host)}dir(){return`${this.host.dir||documentDirection}`.toLowerCase()}lang(){return`${this.host.lang||documentLanguage}`.toLowerCase()}getTranslationData(s){var d,v;const _=new Intl.Locale(s.replace(/_/g,"-")),S=_==null?void 0:_.language.toLowerCase(),I=(v=(d=_==null?void 0:_.region)===null||d===void 0?void 0:d.toLowerCase())!==null&&v!==void 0?v:"",D=translations.get(`${S}-${I}`),N=translations.get(S);return{locale:_,language:S,region:I,primary:D,secondary:N}}exists(s,d){var v;const{primary:_,secondary:S}=this.getTranslationData((v=d.lang)!==null&&v!==void 0?v:this.lang());return d=Object.assign({includeFallback:!1},d),!!(_&&_[s]||S&&S[s]||d.includeFallback&&fallback&&fallback[s])}term(s,...d){const{primary:v,secondary:_}=this.getTranslationData(this.lang());let S;if(v&&v[s])S=v[s];else if(_&&_[s])S=_[s];else if(fallback&&fallback[s])S=fallback[s];else return console.error(`No translation found for: ${String(s)}`),String(s);return typeof S=="function"?S(...d):S}date(s,d){return s=new Date(s),new Intl.DateTimeFormat(this.lang(),d).format(s)}number(s,d){return s=Number(s),isNaN(s)?"":new Intl.NumberFormat(this.lang(),d).format(s)}relativeTime(s,d,v){return new Intl.RelativeTimeFormat(this.lang(),v).format(s,d)}};var translation={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(m,s)=>`Go to slide ${m} of ${s}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:m=>m===0?"No options selected":m===1?"1 option selected":`${m} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:m=>`Slide ${m}`,toggleColorFormat:"Toggle color format"};registerTranslation(translation);var en_default=translation,LocalizeController=class extends LocalizeController$1{};registerTranslation(en_default);var component_styles_default=i$1`
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
`,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__typeError=m=>{throw TypeError(m)},__defNormalProp=(m,s,d)=>s in m?__defProp(m,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):m[s]=d,__spreadValues=(m,s)=>{for(var d in s||(s={}))__hasOwnProp.call(s,d)&&__defNormalProp(m,d,s[d]);if(__getOwnPropSymbols)for(var d of __getOwnPropSymbols(s))__propIsEnum.call(s,d)&&__defNormalProp(m,d,s[d]);return m},__spreadProps=(m,s)=>__defProps(m,__getOwnPropDescs(s)),__decorateClass=(m,s,d,v)=>{for(var _=v>1?void 0:v?__getOwnPropDesc(s,d):s,S=m.length-1,I;S>=0;S--)(I=m[S])&&(_=(v?I(s,d,_):I(_))||_);return v&&_&&__defProp(s,d,_),_},__accessCheck=(m,s,d)=>s.has(m)||__typeError("Cannot "+d),__privateGet=(m,s,d)=>(__accessCheck(m,s,"read from private field"),d?d.call(m):s.get(m)),__privateAdd=(m,s,d)=>s.has(m)?__typeError("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(m):s.set(m,d),__privateSet=(m,s,d,v)=>(__accessCheck(m,s,"write to private field"),v?v.call(m,d):s.set(m,d),d);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$2={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f},r$1=(m=o$2,s,d)=>{const{kind:v,metadata:_}=d;let S=globalThis.litPropertyMetadata.get(_);if(S===void 0&&globalThis.litPropertyMetadata.set(_,S=new Map),v==="setter"&&((m=Object.create(m)).wrapped=!0),S.set(d.name,m),v==="accessor"){const{name:I}=d;return{set(D){const N=s.get.call(this);s.set.call(this,D),this.requestUpdate(I,N,m,!0,D)},init(D){return D!==void 0&&this.C(I,void 0,m,D),D}}}if(v==="setter"){const{name:I}=d;return function(D){const N=this[I];s.call(this,D),this.requestUpdate(I,N,m,!0,D)}}throw Error("Unsupported decorator location: "+v)};function n$1(m){return(s,d)=>typeof d=="object"?r$1(m,s,d):((v,_,S)=>{const I=_.hasOwnProperty(S);return _.constructor.createProperty(S,v),I?Object.getOwnPropertyDescriptor(_,S):void 0})(m,s,d)}/**
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
 */function e$1(m,s){return(d,v,_)=>{const S=I=>{var D;return((D=I.renderRoot)==null?void 0:D.querySelector(m))??null};if(s){const{get:I,set:D}=typeof v=="object"?d:_??(()=>{const N=Symbol();return{get(){return this[N]},set(R){this[N]=R}}})();return e$2(d,v,{get(){let N=I.call(this);return N===void 0&&(N=S(this),(N!==null||this.hasUpdated)&&D.call(this,N)),N}})}return e$2(d,v,{get(){return S(this)}})}}var _hasRecordedInitialProperties,ShoelaceElement=class extends i$2{constructor(){super(),__privateAdd(this,_hasRecordedInitialProperties,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([m,s])=>{this.constructor.define(m,s)})}emit(m,s){const d=new CustomEvent(m,__spreadValues({bubbles:!0,cancelable:!1,composed:!0,detail:{}},s));return this.dispatchEvent(d),d}static define(m,s=this,d={}){const v=customElements.get(m);if(!v){try{customElements.define(m,s,d)}catch{customElements.define(m,class extends s{},d)}return}let _=" (unknown version)",S=_;"version"in s&&s.version&&(_=" v"+s.version),"version"in v&&v.version&&(S=" v"+v.version),!(_&&S&&_===S)&&console.warn(`Attempted to register <${m}>${_}, but <${m}>${S} has already been registered.`)}attributeChangedCallback(m,s,d){__privateGet(this,_hasRecordedInitialProperties)||(this.constructor.elementProperties.forEach((v,_)=>{v.reflect&&this[_]!=null&&this.initialReflectedProperties.set(_,this[_])}),__privateSet(this,_hasRecordedInitialProperties,!0)),super.attributeChangedCallback(m,s,d)}willUpdate(m){super.willUpdate(m),this.initialReflectedProperties.forEach((s,d)=>{m.has(d)&&this[d]==null&&(this[d]=s)})}};_hasRecordedInitialProperties=new WeakMap;ShoelaceElement.version="2.20.1";ShoelaceElement.dependencies={};__decorateClass([n$1()],ShoelaceElement.prototype,"dir",2);__decorateClass([n$1()],ShoelaceElement.prototype,"lang",2);var SlSpinner=class extends ShoelaceElement{constructor(){super(...arguments),this.localize=new LocalizeController(this)}render(){return b`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};SlSpinner.styles=[component_styles_default,spinner_styles_default];var formCollections=new WeakMap,reportValidityOverloads=new WeakMap,checkValidityOverloads=new WeakMap,userInteractedControls=new WeakSet,interactions=new WeakMap,FormControlController=class{constructor(m,s){this.handleFormData=d=>{const v=this.options.disabled(this.host),_=this.options.name(this.host),S=this.options.value(this.host),I=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!v&&!I&&typeof _=="string"&&_.length>0&&typeof S<"u"&&(Array.isArray(S)?S.forEach(D=>{d.formData.append(_,D.toString())}):d.formData.append(_,S.toString()))},this.handleFormSubmit=d=>{var v;const _=this.options.disabled(this.host),S=this.options.reportValidity;this.form&&!this.form.noValidate&&((v=formCollections.get(this.form))==null||v.forEach(I=>{this.setUserInteracted(I,!0)})),this.form&&!this.form.noValidate&&!_&&!S(this.host)&&(d.preventDefault(),d.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),interactions.set(this.host,[])},this.handleInteraction=d=>{const v=interactions.get(this.host);v.includes(d.type)||v.push(d.type),v.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const d=this.form.querySelectorAll("*");for(const v of d)if(typeof v.checkValidity=="function"&&!v.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const d=this.form.querySelectorAll("*");for(const v of d)if(typeof v.reportValidity=="function"&&!v.reportValidity())return!1}return!0},(this.host=m).addController(this),this.options=__spreadValues({form:d=>{const v=d.form;if(v){const S=d.getRootNode().querySelector(`#${v}`);if(S)return S}return d.closest("form")},name:d=>d.name,value:d=>d.value,defaultValue:d=>d.defaultValue,disabled:d=>{var v;return(v=d.disabled)!=null?v:!1},reportValidity:d=>typeof d.reportValidity=="function"?d.reportValidity():!0,checkValidity:d=>typeof d.checkValidity=="function"?d.checkValidity():!0,setValue:(d,v)=>d.value=v,assumeInteractionOn:["sl-input"]},s)}hostConnected(){const m=this.options.form(this.host);m&&this.attachForm(m),interactions.set(this.host,[]),this.options.assumeInteractionOn.forEach(s=>{this.host.addEventListener(s,this.handleInteraction)})}hostDisconnected(){this.detachForm(),interactions.delete(this.host),this.options.assumeInteractionOn.forEach(m=>{this.host.removeEventListener(m,this.handleInteraction)})}hostUpdated(){const m=this.options.form(this.host);m||this.detachForm(),m&&this.form!==m&&(this.detachForm(),this.attachForm(m)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(m){m?(this.form=m,formCollections.has(this.form)?formCollections.get(this.form).add(this.host):formCollections.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),reportValidityOverloads.has(this.form)||(reportValidityOverloads.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),checkValidityOverloads.has(this.form)||(checkValidityOverloads.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const m=formCollections.get(this.form);m&&(m.delete(this.host),m.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),reportValidityOverloads.has(this.form)&&(this.form.reportValidity=reportValidityOverloads.get(this.form),reportValidityOverloads.delete(this.form)),checkValidityOverloads.has(this.form)&&(this.form.checkValidity=checkValidityOverloads.get(this.form),checkValidityOverloads.delete(this.form)),this.form=void 0))}setUserInteracted(m,s){s?userInteractedControls.add(m):userInteractedControls.delete(m),m.requestUpdate()}doAction(m,s){if(this.form){const d=document.createElement("button");d.type=m,d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.clipPath="inset(50%)",d.style.overflow="hidden",d.style.whiteSpace="nowrap",s&&(d.name=s.name,d.value=s.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(v=>{s.hasAttribute(v)&&d.setAttribute(v,s.getAttribute(v))})),this.form.append(d),d.click(),d.remove()}}getForm(){var m;return(m=this.form)!=null?m:null}reset(m){this.doAction("reset",m)}submit(m){this.doAction("submit",m)}setValidity(m){const s=this.host,d=!!userInteractedControls.has(s),v=!!s.required;s.toggleAttribute("data-required",v),s.toggleAttribute("data-optional",!v),s.toggleAttribute("data-invalid",!m),s.toggleAttribute("data-valid",m),s.toggleAttribute("data-user-invalid",!m&&d),s.toggleAttribute("data-user-valid",m&&d)}updateValidity(){const m=this.host;this.setValidity(m.validity.valid)}emitInvalidEvent(m){const s=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});m||s.preventDefault(),this.host.dispatchEvent(s)||m==null||m.preventDefault()}},validValidityState=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(__spreadProps(__spreadValues({},validValidityState),{valid:!1,valueMissing:!0}));Object.freeze(__spreadProps(__spreadValues({},validValidityState),{valid:!1,customError:!0}));var button_styles_default=i$1`
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
`,HasSlotController=class{constructor(m,...s){this.slotNames=[],this.handleSlotChange=d=>{const v=d.target;(this.slotNames.includes("[default]")&&!v.name||v.name&&this.slotNames.includes(v.name))&&this.host.requestUpdate()},(this.host=m).addController(this),this.slotNames=s}hasDefaultSlot(){return[...this.host.childNodes].some(m=>{if(m.nodeType===m.TEXT_NODE&&m.textContent.trim()!=="")return!0;if(m.nodeType===m.ELEMENT_NODE){const s=m;if(s.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!s.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(m){return this.host.querySelector(`:scope > [slot="${m}"]`)!==null}test(m){return m==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(m)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},basePath="";function setBasePath(m){basePath=m}function getBasePath(m=""){if(!basePath){const s=[...document.getElementsByTagName("script")],d=s.find(v=>v.hasAttribute("data-shoelace"));if(d)setBasePath(d.getAttribute("data-shoelace"));else{const v=s.find(S=>/shoelace(\.min)?\.js($|\?)/.test(S.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(S.src));let _="";v&&(_=v.getAttribute("src")),setBasePath(_.split("/").slice(0,-1).join("/"))}}return basePath.replace(/\/$/,"")+(m?`/${m.replace(/^\//,"")}`:"")}var library={name:"default",resolver:m=>getBasePath(`assets/icons/${m}.svg`)},library_default_default=library,icons={caret:`
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
`;function watch(m,s){const d=__spreadValues({waitUntilFirstUpdate:!1},s);return(v,_)=>{const{update:S}=v,I=Array.isArray(m)?m:[m];v.update=function(D){I.forEach(N=>{const R=N;if(D.has(R)){const P=D.get(R),F=this[R];P!==F&&(!d.waitUntilFirstUpdate||this.hasUpdated)&&this[_](P,F)}}),S.call(this,D)}}}var CACHEABLE_ERROR=Symbol(),RETRYABLE_ERROR=Symbol(),parser$1,iconCache=new Map,SlIcon=class extends ShoelaceElement{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(m,s){var d;let v;if(s!=null&&s.spriteSheet)return this.svg=b`<svg part="svg">
        <use part="use" href="${m}"></use>
      </svg>`,this.svg;try{if(v=await fetch(m,{mode:"cors"}),!v.ok)return v.status===410?CACHEABLE_ERROR:RETRYABLE_ERROR}catch{return RETRYABLE_ERROR}try{const _=document.createElement("div");_.innerHTML=await v.text();const S=_.firstElementChild;if(((d=S==null?void 0:S.tagName)==null?void 0:d.toLowerCase())!=="svg")return CACHEABLE_ERROR;parser$1||(parser$1=new DOMParser);const D=parser$1.parseFromString(S.outerHTML,"text/html").body.querySelector("svg");return D?(D.part.add("svg"),document.adoptNode(D)):CACHEABLE_ERROR}catch{return CACHEABLE_ERROR}}connectedCallback(){super.connectedCallback(),watchIcon(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),unwatchIcon(this)}getIconSource(){const m=getIconLibrary(this.library);return this.name&&m?{url:m.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var m;const{url:s,fromLibrary:d}=this.getIconSource(),v=d?getIconLibrary(this.library):void 0;if(!s){this.svg=null;return}let _=iconCache.get(s);if(_||(_=this.resolveIcon(s,v),iconCache.set(s,_)),!this.initialRender)return;const S=await _;if(S===RETRYABLE_ERROR&&iconCache.delete(s),s===this.getIconSource().url){if(l$2(S)){if(this.svg=S,v){await this.updateComplete;const I=this.shadowRoot.querySelector("[part='svg']");typeof v.mutator=="function"&&I&&v.mutator(I)}return}switch(S){case RETRYABLE_ERROR:case CACHEABLE_ERROR:this.svg=null,this.emit("sl-error");break;default:this.svg=S.cloneNode(!0),(m=v==null?void 0:v.mutator)==null||m.call(v,this.svg),this.emit("sl-load")}}}render(){return this.svg}};SlIcon.styles=[component_styles_default,icon_styles_default];__decorateClass([r()],SlIcon.prototype,"svg",2);__decorateClass([n$1({reflect:!0})],SlIcon.prototype,"name",2);__decorateClass([n$1()],SlIcon.prototype,"src",2);__decorateClass([n$1()],SlIcon.prototype,"label",2);__decorateClass([n$1({reflect:!0})],SlIcon.prototype,"library",2);__decorateClass([watch("label")],SlIcon.prototype,"handleLabelChange",1);__decorateClass([watch(["name","src","library"])],SlIcon.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=e$3(class extends i$3{constructor(m){var s;if(super(m),m.type!==t$1.ATTRIBUTE||m.name!=="class"||((s=m.strings)==null?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(m){return" "+Object.keys(m).filter(s=>m[s]).join(" ")+" "}update(m,[s]){var v,_;if(this.st===void 0){this.st=new Set,m.strings!==void 0&&(this.nt=new Set(m.strings.join(" ").split(/\s/).filter(S=>S!=="")));for(const S in s)s[S]&&!((v=this.nt)!=null&&v.has(S))&&this.st.add(S);return this.render(s)}const d=m.element.classList;for(const S of this.st)S in s||(d.remove(S),this.st.delete(S));for(const S in s){const I=!!s[S];I===this.st.has(S)||(_=this.nt)!=null&&_.has(S)||(I?(d.add(S),this.st.add(S)):(d.remove(S),this.st.delete(S)))}return E}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=Symbol.for(""),o$1=m=>{if((m==null?void 0:m.r)===a)return m==null?void 0:m._$litStatic$},i=(m,...s)=>({_$litStatic$:s.reduce((d,v,_)=>d+(S=>{if(S._$litStatic$!==void 0)return S._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${S}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(v)+m[_+1],m[0]),r:a}),l$1=new Map,n=m=>(s,...d)=>{const v=d.length;let _,S;const I=[],D=[];let N,R=0,P=!1;for(;R<v;){for(N=s[R];R<v&&(S=d[R],(_=o$1(S))!==void 0);)N+=_+s[++R],P=!0;R!==v&&D.push(S),I.push(N),R++}if(R===v&&I.push(s[v]),P){const F=I.join("$$lit$$");(s=l$1.get(F))===void 0&&(I.raw=I,l$1.set(F,s=I)),d=D}return m(s,...d)},u=n(b);/**
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
`,defaultValue=(m="value")=>(s,d)=>{const v=s.constructor,_=v.prototype.attributeChangedCallback;v.prototype.attributeChangedCallback=function(S,I,D){var N;const R=v.getPropertyOptions(m),P=typeof R.attribute=="string"?R.attribute:m;if(S===P){const F=R.converter||u$1,W=(typeof F=="function"?F:(N=F==null?void 0:F.fromAttribute)!=null?N:u$1.fromAttribute)(D,R.type);this[m]!==W&&(this[d]=W)}_.call(this,S,I,D)}},form_control_styles_default=i$1`
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
`,SlRange=class extends ShoelaceElement{constructor(){super(...arguments),this.formControlController=new FormControlController(this),this.hasSlotController=new HasSlotController(this,"help-text","label"),this.localize=new LocalizeController(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=m=>m.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var m;super.disconnectedCallback(),(m=this.resizeObserver)==null||m.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(m){this.input.style.setProperty("--percent",`${m*100}%`)}syncTooltip(m){if(this.output!==null){const s=this.input.offsetWidth,d=this.output.offsetWidth,v=getComputedStyle(this.input).getPropertyValue("--thumb-size"),_=this.localize.dir()==="rtl",S=s*m;if(_){const I=`${s-S}px + ${m} * ${v}`;this.output.style.translate=`calc((${I} - ${d/2}px - ${v} / 2))`}else{const I=`${S}px - ${m} * ${v}`;this.output.style.translate=`calc(${I} - ${d/2}px + ${v} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const m=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(m),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(m))}handleInvalid(m){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(m)}focus(m){this.input.focus(m)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(m){this.input.setCustomValidity(m),this.formControlController.updateValidity()}render(){const m=this.hasSlotController.test("label"),s=this.hasSlotController.test("help-text"),d=this.label?!0:!!m,v=this.helpText?!0:!!s;return b`
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
`,SlInput=class extends ShoelaceElement{constructor(){super(...arguments),this.formControlController=new FormControlController(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new HasSlotController(this,"help-text","label"),this.localize=new LocalizeController(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var m;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((m=this.input)==null?void 0:m.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(m){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=m,this.value=this.__dateInput.value}get valueAsNumber(){var m;return this.__numberInput.value=this.value,((m=this.input)==null?void 0:m.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(m){this.__numberInput.valueAsNumber=m,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(m){m.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(m){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(m)}handleKeyDown(m){const s=m.metaKey||m.ctrlKey||m.shiftKey||m.altKey;m.key==="Enter"&&!s&&setTimeout(()=>{!m.defaultPrevented&&!m.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(m){this.input.focus(m)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(m,s,d="none"){this.input.setSelectionRange(m,s,d)}setRangeText(m,s,d,v="preserve"){const _=s??this.input.selectionStart,S=d??this.input.selectionEnd;this.input.setRangeText(m,_,S,v),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(m){this.input.setCustomValidity(m),this.formControlController.updateValidity()}render(){const m=this.hasSlotController.test("label"),s=this.hasSlotController.test("help-text"),d=this.label?!0:!!m,v=this.helpText?!0:!!s,S=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return b`
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

            ${S?b`
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
 */lodash.exports;(function(m,s){(function(){var d,v="4.17.21",_=200,S="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",I="Expected a function",D="Invalid `variable` option passed into `_.template`",N="__lodash_hash_undefined__",R=500,P="__lodash_placeholder__",F=1,H=2,W=4,st=1,ot=2,mt=1,ht=2,Tt=4,Ot=8,Pt=16,$t=32,Rt=64,Ut=128,Ft=256,ae=512,en=30,$e="...",Je=800,bn=16,Nt=1,Vt=2,Xt=3,Et=1/0,Yt=9007199254740991,he=17976931348623157e292,pt=NaN,Qt=4294967295,de=Qt-1,ie=Qt>>>1,vn=[["ary",Ut],["bind",mt],["bindKey",ht],["curry",Ot],["curryRight",Pt],["flip",ae],["partial",$t],["partialRight",Rt],["rearg",Ft]],le="[object Arguments]",be="[object Array]",jt="[object AsyncFunction]",Se="[object Boolean]",Ge="[object Date]",Pn="[object DOMException]",nn="[object Error]",rn="[object Function]",Tn="[object GeneratorFunction]",fe="[object Map]",ke="[object Number]",nr="[object Null]",Te="[object Object]",In="[object Promise]",zn="[object Proxy]",_e="[object RegExp]",pe="[object Set]",Xe="[object String]",sn="[object Symbol]",Hn="[object Undefined]",an="[object WeakMap]",rr="[object WeakSet]",k="[object ArrayBuffer]",q="[object DataView]",Q="[object Float32Array]",ut="[object Float64Array]",et="[object Int8Array]",ct="[object Int16Array]",O="[object Int32Array]",Y="[object Uint8Array]",K="[object Uint8ClampedArray]",at="[object Uint16Array]",it="[object Uint32Array]",X=/\b__p \+= '';/g,lt=/\b(__p \+=) '' \+/g,nt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ft=/&(?:amp|lt|gt|quot|#39);/g,_t=/[&<>"']/g,wt=RegExp(ft.source),Re=RegExp(_t.source),se=/<%-([\s\S]+?)%>/g,Ja=/<%([\s\S]+?)%>/g,xs=/<%=([\s\S]+?)%>/g,Xa=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qa=/^\w*$/,Za=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ai=/[\\^$.*+?()[\]{}|]/g,tl=RegExp(ai.source),li=/^\s+/,el=/\s/,nl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,rl=/\{\n\/\* \[wrapped with (.+)\] \*/,il=/,? & /,sl=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ol=/[()=,{}\[\]\/\s]/,al=/\\(\\)?/g,ll=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_s=/\w*$/,ul=/^[-+]0x[0-9a-f]+$/i,cl=/^0b[01]+$/i,hl=/^\[object .+?Constructor\]$/,dl=/^0o[0-7]+$/i,fl=/^(?:0|[1-9]\d*)$/,pl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yr=/($^)/,gl=/['\n\r\u2028\u2029\\]/g,xr="\\ud800-\\udfff",ml="\\u0300-\\u036f",bl="\\ufe20-\\ufe2f",vl="\\u20d0-\\u20ff",ws=ml+bl+vl,As="\\u2700-\\u27bf",Cs="a-z\\xdf-\\xf6\\xf8-\\xff",yl="\\xac\\xb1\\xd7\\xf7",xl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_l="\\u2000-\\u206f",wl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Es="A-Z\\xc0-\\xd6\\xd8-\\xde",Ss="\\ufe0e\\ufe0f",ks=yl+xl+_l+wl,ui="['’]",Al="["+xr+"]",Ts="["+ks+"]",_r="["+ws+"]",Is="\\d+",Cl="["+As+"]",Ms="["+Cs+"]",Ds="[^"+xr+ks+Is+As+Cs+Es+"]",ci="\\ud83c[\\udffb-\\udfff]",El="(?:"+_r+"|"+ci+")",Os="[^"+xr+"]",hi="(?:\\ud83c[\\udde6-\\uddff]){2}",di="[\\ud800-\\udbff][\\udc00-\\udfff]",Un="["+Es+"]",Ns="\\u200d",Ls="(?:"+Ms+"|"+Ds+")",Sl="(?:"+Un+"|"+Ds+")",$s="(?:"+ui+"(?:d|ll|m|re|s|t|ve))?",Rs="(?:"+ui+"(?:D|LL|M|RE|S|T|VE))?",Fs=El+"?",Bs="["+Ss+"]?",kl="(?:"+Ns+"(?:"+[Os,hi,di].join("|")+")"+Bs+Fs+")*",Tl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Il="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ps=Bs+Fs+kl,Ml="(?:"+[Cl,hi,di].join("|")+")"+Ps,Dl="(?:"+[Os+_r+"?",_r,hi,di,Al].join("|")+")",Ol=RegExp(ui,"g"),Nl=RegExp(_r,"g"),fi=RegExp(ci+"(?="+ci+")|"+Dl+Ps,"g"),Ll=RegExp([Un+"?"+Ms+"+"+$s+"(?="+[Ts,Un,"$"].join("|")+")",Sl+"+"+Rs+"(?="+[Ts,Un+Ls,"$"].join("|")+")",Un+"?"+Ls+"+"+$s,Un+"+"+Rs,Il,Tl,Is,Ml].join("|"),"g"),$l=RegExp("["+Ns+xr+ws+Ss+"]"),Rl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Fl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Bl=-1,qt={};qt[Q]=qt[ut]=qt[et]=qt[ct]=qt[O]=qt[Y]=qt[K]=qt[at]=qt[it]=!0,qt[le]=qt[be]=qt[k]=qt[Se]=qt[q]=qt[Ge]=qt[nn]=qt[rn]=qt[fe]=qt[ke]=qt[Te]=qt[_e]=qt[pe]=qt[Xe]=qt[an]=!1;var Gt={};Gt[le]=Gt[be]=Gt[k]=Gt[q]=Gt[Se]=Gt[Ge]=Gt[Q]=Gt[ut]=Gt[et]=Gt[ct]=Gt[O]=Gt[fe]=Gt[ke]=Gt[Te]=Gt[_e]=Gt[pe]=Gt[Xe]=Gt[sn]=Gt[Y]=Gt[K]=Gt[at]=Gt[it]=!0,Gt[nn]=Gt[rn]=Gt[an]=!1;var Pl={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},zl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ul={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Vl=parseFloat,Wl=parseInt,zs=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,Gl=typeof self=="object"&&self&&self.Object===Object&&self,ue=zs||Gl||Function("return this")(),pi=s&&!s.nodeType&&s,Mn=pi&&!0&&m&&!m.nodeType&&m,Hs=Mn&&Mn.exports===pi,gi=Hs&&zs.process,Fe=function(){try{var U=Mn&&Mn.require&&Mn.require("util").types;return U||gi&&gi.binding&&gi.binding("util")}catch{}}(),Us=Fe&&Fe.isArrayBuffer,Vs=Fe&&Fe.isDate,Ws=Fe&&Fe.isMap,Gs=Fe&&Fe.isRegExp,qs=Fe&&Fe.isSet,Ys=Fe&&Fe.isTypedArray;function Ie(U,J,j){switch(j.length){case 0:return U.call(J);case 1:return U.call(J,j[0]);case 2:return U.call(J,j[0],j[1]);case 3:return U.call(J,j[0],j[1],j[2])}return U.apply(J,j)}function ql(U,J,j,gt){for(var At=-1,Bt=U==null?0:U.length;++At<Bt;){var ne=U[At];J(gt,ne,j(ne),U)}return gt}function Be(U,J){for(var j=-1,gt=U==null?0:U.length;++j<gt&&J(U[j],j,U)!==!1;);return U}function Yl(U,J){for(var j=U==null?0:U.length;j--&&J(U[j],j,U)!==!1;);return U}function js(U,J){for(var j=-1,gt=U==null?0:U.length;++j<gt;)if(!J(U[j],j,U))return!1;return!0}function yn(U,J){for(var j=-1,gt=U==null?0:U.length,At=0,Bt=[];++j<gt;){var ne=U[j];J(ne,j,U)&&(Bt[At++]=ne)}return Bt}function wr(U,J){var j=U==null?0:U.length;return!!j&&Vn(U,J,0)>-1}function mi(U,J,j){for(var gt=-1,At=U==null?0:U.length;++gt<At;)if(j(J,U[gt]))return!0;return!1}function Kt(U,J){for(var j=-1,gt=U==null?0:U.length,At=Array(gt);++j<gt;)At[j]=J(U[j],j,U);return At}function xn(U,J){for(var j=-1,gt=J.length,At=U.length;++j<gt;)U[At+j]=J[j];return U}function bi(U,J,j,gt){var At=-1,Bt=U==null?0:U.length;for(gt&&Bt&&(j=U[++At]);++At<Bt;)j=J(j,U[At],At,U);return j}function jl(U,J,j,gt){var At=U==null?0:U.length;for(gt&&At&&(j=U[--At]);At--;)j=J(j,U[At],At,U);return j}function vi(U,J){for(var j=-1,gt=U==null?0:U.length;++j<gt;)if(J(U[j],j,U))return!0;return!1}var Kl=yi("length");function Jl(U){return U.split("")}function Xl(U){return U.match(sl)||[]}function Ks(U,J,j){var gt;return j(U,function(At,Bt,ne){if(J(At,Bt,ne))return gt=Bt,!1}),gt}function Ar(U,J,j,gt){for(var At=U.length,Bt=j+(gt?1:-1);gt?Bt--:++Bt<At;)if(J(U[Bt],Bt,U))return Bt;return-1}function Vn(U,J,j){return J===J?uu(U,J,j):Ar(U,Js,j)}function Ql(U,J,j,gt){for(var At=j-1,Bt=U.length;++At<Bt;)if(gt(U[At],J))return At;return-1}function Js(U){return U!==U}function Xs(U,J){var j=U==null?0:U.length;return j?_i(U,J)/j:pt}function yi(U){return function(J){return J==null?d:J[U]}}function xi(U){return function(J){return U==null?d:U[J]}}function Qs(U,J,j,gt,At){return At(U,function(Bt,ne,Wt){j=gt?(gt=!1,Bt):J(j,Bt,ne,Wt)}),j}function Zl(U,J){var j=U.length;for(U.sort(J);j--;)U[j]=U[j].value;return U}function _i(U,J){for(var j,gt=-1,At=U.length;++gt<At;){var Bt=J(U[gt]);Bt!==d&&(j=j===d?Bt:j+Bt)}return j}function wi(U,J){for(var j=-1,gt=Array(U);++j<U;)gt[j]=J(j);return gt}function tu(U,J){return Kt(J,function(j){return[j,U[j]]})}function Zs(U){return U&&U.slice(0,io(U)+1).replace(li,"")}function Me(U){return function(J){return U(J)}}function Ai(U,J){return Kt(J,function(j){return U[j]})}function ir(U,J){return U.has(J)}function eo(U,J){for(var j=-1,gt=U.length;++j<gt&&Vn(J,U[j],0)>-1;);return j}function no(U,J){for(var j=U.length;j--&&Vn(J,U[j],0)>-1;);return j}function eu(U,J){for(var j=U.length,gt=0;j--;)U[j]===J&&++gt;return gt}var nu=xi(Pl),ru=xi(zl);function iu(U){return"\\"+Ul[U]}function su(U,J){return U==null?d:U[J]}function Wn(U){return $l.test(U)}function ou(U){return Rl.test(U)}function au(U){for(var J,j=[];!(J=U.next()).done;)j.push(J.value);return j}function Ci(U){var J=-1,j=Array(U.size);return U.forEach(function(gt,At){j[++J]=[At,gt]}),j}function ro(U,J){return function(j){return U(J(j))}}function _n(U,J){for(var j=-1,gt=U.length,At=0,Bt=[];++j<gt;){var ne=U[j];(ne===J||ne===P)&&(U[j]=P,Bt[At++]=j)}return Bt}function Cr(U){var J=-1,j=Array(U.size);return U.forEach(function(gt){j[++J]=gt}),j}function lu(U){var J=-1,j=Array(U.size);return U.forEach(function(gt){j[++J]=[gt,gt]}),j}function uu(U,J,j){for(var gt=j-1,At=U.length;++gt<At;)if(U[gt]===J)return gt;return-1}function cu(U,J,j){for(var gt=j+1;gt--;)if(U[gt]===J)return gt;return gt}function Gn(U){return Wn(U)?du(U):Kl(U)}function qe(U){return Wn(U)?fu(U):Jl(U)}function io(U){for(var J=U.length;J--&&el.test(U.charAt(J)););return J}var hu=xi(Hl);function du(U){for(var J=fi.lastIndex=0;fi.test(U);)++J;return J}function fu(U){return U.match(fi)||[]}function pu(U){return U.match(Ll)||[]}var gu=function U(J){J=J==null?ue:qn.defaults(ue.Object(),J,qn.pick(ue,Fl));var j=J.Array,gt=J.Date,At=J.Error,Bt=J.Function,ne=J.Math,Wt=J.Object,Ei=J.RegExp,mu=J.String,Pe=J.TypeError,Er=j.prototype,bu=Bt.prototype,Yn=Wt.prototype,Sr=J["__core-js_shared__"],kr=bu.toString,Ht=Yn.hasOwnProperty,vu=0,so=function(){var h=/[^.]+$/.exec(Sr&&Sr.keys&&Sr.keys.IE_PROTO||"");return h?"Symbol(src)_1."+h:""}(),Tr=Yn.toString,yu=kr.call(Wt),xu=ue._,_u=Ei("^"+kr.call(Ht).replace(ai,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ir=Hs?J.Buffer:d,wn=J.Symbol,Mr=J.Uint8Array,oo=Ir?Ir.allocUnsafe:d,Dr=ro(Wt.getPrototypeOf,Wt),ao=Wt.create,lo=Yn.propertyIsEnumerable,Or=Er.splice,uo=wn?wn.isConcatSpreadable:d,sr=wn?wn.iterator:d,Dn=wn?wn.toStringTag:d,Nr=function(){try{var h=Rn(Wt,"defineProperty");return h({},"",{}),h}catch{}}(),wu=J.clearTimeout!==ue.clearTimeout&&J.clearTimeout,Au=gt&&gt.now!==ue.Date.now&&gt.now,Cu=J.setTimeout!==ue.setTimeout&&J.setTimeout,Lr=ne.ceil,$r=ne.floor,Si=Wt.getOwnPropertySymbols,Eu=Ir?Ir.isBuffer:d,co=J.isFinite,Su=Er.join,ku=ro(Wt.keys,Wt),re=ne.max,ge=ne.min,Tu=gt.now,Iu=J.parseInt,ho=ne.random,Mu=Er.reverse,ki=Rn(J,"DataView"),or=Rn(J,"Map"),Ti=Rn(J,"Promise"),jn=Rn(J,"Set"),ar=Rn(J,"WeakMap"),lr=Rn(Wt,"create"),Rr=ar&&new ar,Kn={},Du=Fn(ki),Ou=Fn(or),Nu=Fn(Ti),Lu=Fn(jn),$u=Fn(ar),Fr=wn?wn.prototype:d,ur=Fr?Fr.valueOf:d,fo=Fr?Fr.toString:d;function L(h){if(Zt(h)&&!Ct(h)&&!(h instanceof Dt)){if(h instanceof ze)return h;if(Ht.call(h,"__wrapped__"))return pa(h)}return new ze(h)}var Jn=function(){function h(){}return function(g){if(!Jt(g))return{};if(ao)return ao(g);h.prototype=g;var C=new h;return h.prototype=d,C}}();function Br(){}function ze(h,g){this.__wrapped__=h,this.__actions__=[],this.__chain__=!!g,this.__index__=0,this.__values__=d}L.templateSettings={escape:se,evaluate:Ja,interpolate:xs,variable:"",imports:{_:L}},L.prototype=Br.prototype,L.prototype.constructor=L,ze.prototype=Jn(Br.prototype),ze.prototype.constructor=ze;function Dt(h){this.__wrapped__=h,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Qt,this.__views__=[]}function Ru(){var h=new Dt(this.__wrapped__);return h.__actions__=we(this.__actions__),h.__dir__=this.__dir__,h.__filtered__=this.__filtered__,h.__iteratees__=we(this.__iteratees__),h.__takeCount__=this.__takeCount__,h.__views__=we(this.__views__),h}function Fu(){if(this.__filtered__){var h=new Dt(this);h.__dir__=-1,h.__filtered__=!0}else h=this.clone(),h.__dir__*=-1;return h}function Bu(){var h=this.__wrapped__.value(),g=this.__dir__,C=Ct(h),T=g<0,M=C?h.length:0,$=Jc(0,M,this.__views__),B=$.start,z=$.end,V=z-B,Z=T?z:B-1,tt=this.__iteratees__,rt=tt.length,dt=0,bt=ge(V,this.__takeCount__);if(!C||!T&&M==V&&bt==V)return Fo(h,this.__actions__);var yt=[];t:for(;V--&&dt<bt;){Z+=g;for(var kt=-1,xt=h[Z];++kt<rt;){var Mt=tt[kt],Lt=Mt.iteratee,Ne=Mt.type,xe=Lt(xt);if(Ne==Vt)xt=xe;else if(!xe){if(Ne==Nt)continue t;break t}}yt[dt++]=xt}return yt}Dt.prototype=Jn(Br.prototype),Dt.prototype.constructor=Dt;function On(h){var g=-1,C=h==null?0:h.length;for(this.clear();++g<C;){var T=h[g];this.set(T[0],T[1])}}function Pu(){this.__data__=lr?lr(null):{},this.size=0}function zu(h){var g=this.has(h)&&delete this.__data__[h];return this.size-=g?1:0,g}function Hu(h){var g=this.__data__;if(lr){var C=g[h];return C===N?d:C}return Ht.call(g,h)?g[h]:d}function Uu(h){var g=this.__data__;return lr?g[h]!==d:Ht.call(g,h)}function Vu(h,g){var C=this.__data__;return this.size+=this.has(h)?0:1,C[h]=lr&&g===d?N:g,this}On.prototype.clear=Pu,On.prototype.delete=zu,On.prototype.get=Hu,On.prototype.has=Uu,On.prototype.set=Vu;function ln(h){var g=-1,C=h==null?0:h.length;for(this.clear();++g<C;){var T=h[g];this.set(T[0],T[1])}}function Wu(){this.__data__=[],this.size=0}function Gu(h){var g=this.__data__,C=Pr(g,h);if(C<0)return!1;var T=g.length-1;return C==T?g.pop():Or.call(g,C,1),--this.size,!0}function qu(h){var g=this.__data__,C=Pr(g,h);return C<0?d:g[C][1]}function Yu(h){return Pr(this.__data__,h)>-1}function ju(h,g){var C=this.__data__,T=Pr(C,h);return T<0?(++this.size,C.push([h,g])):C[T][1]=g,this}ln.prototype.clear=Wu,ln.prototype.delete=Gu,ln.prototype.get=qu,ln.prototype.has=Yu,ln.prototype.set=ju;function un(h){var g=-1,C=h==null?0:h.length;for(this.clear();++g<C;){var T=h[g];this.set(T[0],T[1])}}function Ku(){this.size=0,this.__data__={hash:new On,map:new(or||ln),string:new On}}function Ju(h){var g=Xr(this,h).delete(h);return this.size-=g?1:0,g}function Xu(h){return Xr(this,h).get(h)}function Qu(h){return Xr(this,h).has(h)}function Zu(h,g){var C=Xr(this,h),T=C.size;return C.set(h,g),this.size+=C.size==T?0:1,this}un.prototype.clear=Ku,un.prototype.delete=Ju,un.prototype.get=Xu,un.prototype.has=Qu,un.prototype.set=Zu;function Nn(h){var g=-1,C=h==null?0:h.length;for(this.__data__=new un;++g<C;)this.add(h[g])}function tc(h){return this.__data__.set(h,N),this}function ec(h){return this.__data__.has(h)}Nn.prototype.add=Nn.prototype.push=tc,Nn.prototype.has=ec;function Ye(h){var g=this.__data__=new ln(h);this.size=g.size}function nc(){this.__data__=new ln,this.size=0}function rc(h){var g=this.__data__,C=g.delete(h);return this.size=g.size,C}function ic(h){return this.__data__.get(h)}function sc(h){return this.__data__.has(h)}function oc(h,g){var C=this.__data__;if(C instanceof ln){var T=C.__data__;if(!or||T.length<_-1)return T.push([h,g]),this.size=++C.size,this;C=this.__data__=new un(T)}return C.set(h,g),this.size=C.size,this}Ye.prototype.clear=nc,Ye.prototype.delete=rc,Ye.prototype.get=ic,Ye.prototype.has=sc,Ye.prototype.set=oc;function po(h,g){var C=Ct(h),T=!C&&Bn(h),M=!C&&!T&&kn(h),$=!C&&!T&&!M&&tr(h),B=C||T||M||$,z=B?wi(h.length,mu):[],V=z.length;for(var Z in h)(g||Ht.call(h,Z))&&!(B&&(Z=="length"||M&&(Z=="offset"||Z=="parent")||$&&(Z=="buffer"||Z=="byteLength"||Z=="byteOffset")||fn(Z,V)))&&z.push(Z);return z}function go(h){var g=h.length;return g?h[Pi(0,g-1)]:d}function ac(h,g){return Qr(we(h),Ln(g,0,h.length))}function lc(h){return Qr(we(h))}function Ii(h,g,C){(C!==d&&!je(h[g],C)||C===d&&!(g in h))&&cn(h,g,C)}function cr(h,g,C){var T=h[g];(!(Ht.call(h,g)&&je(T,C))||C===d&&!(g in h))&&cn(h,g,C)}function Pr(h,g){for(var C=h.length;C--;)if(je(h[C][0],g))return C;return-1}function uc(h,g,C,T){return An(h,function(M,$,B){g(T,M,C(M),B)}),T}function mo(h,g){return h&&Ze(g,oe(g),h)}function cc(h,g){return h&&Ze(g,Ce(g),h)}function cn(h,g,C){g=="__proto__"&&Nr?Nr(h,g,{configurable:!0,enumerable:!0,value:C,writable:!0}):h[g]=C}function Mi(h,g){for(var C=-1,T=g.length,M=j(T),$=h==null;++C<T;)M[C]=$?d:hs(h,g[C]);return M}function Ln(h,g,C){return h===h&&(C!==d&&(h=h<=C?h:C),g!==d&&(h=h>=g?h:g)),h}function He(h,g,C,T,M,$){var B,z=g&F,V=g&H,Z=g&W;if(C&&(B=M?C(h,T,M,$):C(h)),B!==d)return B;if(!Jt(h))return h;var tt=Ct(h);if(tt){if(B=Qc(h),!z)return we(h,B)}else{var rt=me(h),dt=rt==rn||rt==Tn;if(kn(h))return zo(h,z);if(rt==Te||rt==le||dt&&!M){if(B=V||dt?{}:sa(h),!z)return V?Hc(h,cc(B,h)):zc(h,mo(B,h))}else{if(!Gt[rt])return M?h:{};B=Zc(h,rt,z)}}$||($=new Ye);var bt=$.get(h);if(bt)return bt;$.set(h,B),La(h)?h.forEach(function(xt){B.add(He(xt,g,C,xt,h,$))}):Oa(h)&&h.forEach(function(xt,Mt){B.set(Mt,He(xt,g,C,Mt,h,$))});var yt=Z?V?Ji:Ki:V?Ce:oe,kt=tt?d:yt(h);return Be(kt||h,function(xt,Mt){kt&&(Mt=xt,xt=h[Mt]),cr(B,Mt,He(xt,g,C,Mt,h,$))}),B}function hc(h){var g=oe(h);return function(C){return bo(C,h,g)}}function bo(h,g,C){var T=C.length;if(h==null)return!T;for(h=Wt(h);T--;){var M=C[T],$=g[M],B=h[M];if(B===d&&!(M in h)||!$(B))return!1}return!0}function vo(h,g,C){if(typeof h!="function")throw new Pe(I);return br(function(){h.apply(d,C)},g)}function hr(h,g,C,T){var M=-1,$=wr,B=!0,z=h.length,V=[],Z=g.length;if(!z)return V;C&&(g=Kt(g,Me(C))),T?($=mi,B=!1):g.length>=_&&($=ir,B=!1,g=new Nn(g));t:for(;++M<z;){var tt=h[M],rt=C==null?tt:C(tt);if(tt=T||tt!==0?tt:0,B&&rt===rt){for(var dt=Z;dt--;)if(g[dt]===rt)continue t;V.push(tt)}else $(g,rt,T)||V.push(tt)}return V}var An=Go(Qe),yo=Go(Oi,!0);function dc(h,g){var C=!0;return An(h,function(T,M,$){return C=!!g(T,M,$),C}),C}function zr(h,g,C){for(var T=-1,M=h.length;++T<M;){var $=h[T],B=g($);if(B!=null&&(z===d?B===B&&!Oe(B):C(B,z)))var z=B,V=$}return V}function fc(h,g,C,T){var M=h.length;for(C=St(C),C<0&&(C=-C>M?0:M+C),T=T===d||T>M?M:St(T),T<0&&(T+=M),T=C>T?0:Ra(T);C<T;)h[C++]=g;return h}function xo(h,g){var C=[];return An(h,function(T,M,$){g(T,M,$)&&C.push(T)}),C}function ce(h,g,C,T,M){var $=-1,B=h.length;for(C||(C=eh),M||(M=[]);++$<B;){var z=h[$];g>0&&C(z)?g>1?ce(z,g-1,C,T,M):xn(M,z):T||(M[M.length]=z)}return M}var Di=qo(),_o=qo(!0);function Qe(h,g){return h&&Di(h,g,oe)}function Oi(h,g){return h&&_o(h,g,oe)}function Hr(h,g){return yn(g,function(C){return pn(h[C])})}function $n(h,g){g=En(g,h);for(var C=0,T=g.length;h!=null&&C<T;)h=h[tn(g[C++])];return C&&C==T?h:d}function wo(h,g,C){var T=g(h);return Ct(h)?T:xn(T,C(h))}function ve(h){return h==null?h===d?Hn:nr:Dn&&Dn in Wt(h)?Kc(h):lh(h)}function Ni(h,g){return h>g}function pc(h,g){return h!=null&&Ht.call(h,g)}function gc(h,g){return h!=null&&g in Wt(h)}function mc(h,g,C){return h>=ge(g,C)&&h<re(g,C)}function Li(h,g,C){for(var T=C?mi:wr,M=h[0].length,$=h.length,B=$,z=j($),V=1/0,Z=[];B--;){var tt=h[B];B&&g&&(tt=Kt(tt,Me(g))),V=ge(tt.length,V),z[B]=!C&&(g||M>=120&&tt.length>=120)?new Nn(B&&tt):d}tt=h[0];var rt=-1,dt=z[0];t:for(;++rt<M&&Z.length<V;){var bt=tt[rt],yt=g?g(bt):bt;if(bt=C||bt!==0?bt:0,!(dt?ir(dt,yt):T(Z,yt,C))){for(B=$;--B;){var kt=z[B];if(!(kt?ir(kt,yt):T(h[B],yt,C)))continue t}dt&&dt.push(yt),Z.push(bt)}}return Z}function bc(h,g,C,T){return Qe(h,function(M,$,B){g(T,C(M),$,B)}),T}function dr(h,g,C){g=En(g,h),h=ua(h,g);var T=h==null?h:h[tn(Ve(g))];return T==null?d:Ie(T,h,C)}function Ao(h){return Zt(h)&&ve(h)==le}function vc(h){return Zt(h)&&ve(h)==k}function yc(h){return Zt(h)&&ve(h)==Ge}function fr(h,g,C,T,M){return h===g?!0:h==null||g==null||!Zt(h)&&!Zt(g)?h!==h&&g!==g:xc(h,g,C,T,fr,M)}function xc(h,g,C,T,M,$){var B=Ct(h),z=Ct(g),V=B?be:me(h),Z=z?be:me(g);V=V==le?Te:V,Z=Z==le?Te:Z;var tt=V==Te,rt=Z==Te,dt=V==Z;if(dt&&kn(h)){if(!kn(g))return!1;B=!0,tt=!1}if(dt&&!tt)return $||($=new Ye),B||tr(h)?na(h,g,C,T,M,$):Yc(h,g,V,C,T,M,$);if(!(C&st)){var bt=tt&&Ht.call(h,"__wrapped__"),yt=rt&&Ht.call(g,"__wrapped__");if(bt||yt){var kt=bt?h.value():h,xt=yt?g.value():g;return $||($=new Ye),M(kt,xt,C,T,$)}}return dt?($||($=new Ye),jc(h,g,C,T,M,$)):!1}function _c(h){return Zt(h)&&me(h)==fe}function $i(h,g,C,T){var M=C.length,$=M,B=!T;if(h==null)return!$;for(h=Wt(h);M--;){var z=C[M];if(B&&z[2]?z[1]!==h[z[0]]:!(z[0]in h))return!1}for(;++M<$;){z=C[M];var V=z[0],Z=h[V],tt=z[1];if(B&&z[2]){if(Z===d&&!(V in h))return!1}else{var rt=new Ye;if(T)var dt=T(Z,tt,V,h,g,rt);if(!(dt===d?fr(tt,Z,st|ot,T,rt):dt))return!1}}return!0}function Co(h){if(!Jt(h)||rh(h))return!1;var g=pn(h)?_u:hl;return g.test(Fn(h))}function wc(h){return Zt(h)&&ve(h)==_e}function Ac(h){return Zt(h)&&me(h)==pe}function Cc(h){return Zt(h)&&ii(h.length)&&!!qt[ve(h)]}function Eo(h){return typeof h=="function"?h:h==null?Ee:typeof h=="object"?Ct(h)?To(h[0],h[1]):ko(h):Ya(h)}function Ri(h){if(!mr(h))return ku(h);var g=[];for(var C in Wt(h))Ht.call(h,C)&&C!="constructor"&&g.push(C);return g}function Ec(h){if(!Jt(h))return ah(h);var g=mr(h),C=[];for(var T in h)T=="constructor"&&(g||!Ht.call(h,T))||C.push(T);return C}function Fi(h,g){return h<g}function So(h,g){var C=-1,T=Ae(h)?j(h.length):[];return An(h,function(M,$,B){T[++C]=g(M,$,B)}),T}function ko(h){var g=Qi(h);return g.length==1&&g[0][2]?aa(g[0][0],g[0][1]):function(C){return C===h||$i(C,h,g)}}function To(h,g){return ts(h)&&oa(g)?aa(tn(h),g):function(C){var T=hs(C,h);return T===d&&T===g?ds(C,h):fr(g,T,st|ot)}}function Ur(h,g,C,T,M){h!==g&&Di(g,function($,B){if(M||(M=new Ye),Jt($))Sc(h,g,B,C,Ur,T,M);else{var z=T?T(ns(h,B),$,B+"",h,g,M):d;z===d&&(z=$),Ii(h,B,z)}},Ce)}function Sc(h,g,C,T,M,$,B){var z=ns(h,C),V=ns(g,C),Z=B.get(V);if(Z){Ii(h,C,Z);return}var tt=$?$(z,V,C+"",h,g,B):d,rt=tt===d;if(rt){var dt=Ct(V),bt=!dt&&kn(V),yt=!dt&&!bt&&tr(V);tt=V,dt||bt||yt?Ct(z)?tt=z:te(z)?tt=we(z):bt?(rt=!1,tt=zo(V,!0)):yt?(rt=!1,tt=Ho(V,!0)):tt=[]:vr(V)||Bn(V)?(tt=z,Bn(z)?tt=Fa(z):(!Jt(z)||pn(z))&&(tt=sa(V))):rt=!1}rt&&(B.set(V,tt),M(tt,V,T,$,B),B.delete(V)),Ii(h,C,tt)}function Io(h,g){var C=h.length;if(C)return g+=g<0?C:0,fn(g,C)?h[g]:d}function Mo(h,g,C){g.length?g=Kt(g,function($){return Ct($)?function(B){return $n(B,$.length===1?$[0]:$)}:$}):g=[Ee];var T=-1;g=Kt(g,Me(vt()));var M=So(h,function($,B,z){var V=Kt(g,function(Z){return Z($)});return{criteria:V,index:++T,value:$}});return Zl(M,function($,B){return Pc($,B,C)})}function kc(h,g){return Do(h,g,function(C,T){return ds(h,T)})}function Do(h,g,C){for(var T=-1,M=g.length,$={};++T<M;){var B=g[T],z=$n(h,B);C(z,B)&&pr($,En(B,h),z)}return $}function Tc(h){return function(g){return $n(g,h)}}function Bi(h,g,C,T){var M=T?Ql:Vn,$=-1,B=g.length,z=h;for(h===g&&(g=we(g)),C&&(z=Kt(h,Me(C)));++$<B;)for(var V=0,Z=g[$],tt=C?C(Z):Z;(V=M(z,tt,V,T))>-1;)z!==h&&Or.call(z,V,1),Or.call(h,V,1);return h}function Oo(h,g){for(var C=h?g.length:0,T=C-1;C--;){var M=g[C];if(C==T||M!==$){var $=M;fn(M)?Or.call(h,M,1):Ui(h,M)}}return h}function Pi(h,g){return h+$r(ho()*(g-h+1))}function Ic(h,g,C,T){for(var M=-1,$=re(Lr((g-h)/(C||1)),0),B=j($);$--;)B[T?$:++M]=h,h+=C;return B}function zi(h,g){var C="";if(!h||g<1||g>Yt)return C;do g%2&&(C+=h),g=$r(g/2),g&&(h+=h);while(g);return C}function It(h,g){return rs(la(h,g,Ee),h+"")}function Mc(h){return go(er(h))}function Dc(h,g){var C=er(h);return Qr(C,Ln(g,0,C.length))}function pr(h,g,C,T){if(!Jt(h))return h;g=En(g,h);for(var M=-1,$=g.length,B=$-1,z=h;z!=null&&++M<$;){var V=tn(g[M]),Z=C;if(V==="__proto__"||V==="constructor"||V==="prototype")return h;if(M!=B){var tt=z[V];Z=T?T(tt,V,z):d,Z===d&&(Z=Jt(tt)?tt:fn(g[M+1])?[]:{})}cr(z,V,Z),z=z[V]}return h}var No=Rr?function(h,g){return Rr.set(h,g),h}:Ee,Oc=Nr?function(h,g){return Nr(h,"toString",{configurable:!0,enumerable:!1,value:ps(g),writable:!0})}:Ee;function Nc(h){return Qr(er(h))}function Ue(h,g,C){var T=-1,M=h.length;g<0&&(g=-g>M?0:M+g),C=C>M?M:C,C<0&&(C+=M),M=g>C?0:C-g>>>0,g>>>=0;for(var $=j(M);++T<M;)$[T]=h[T+g];return $}function Lc(h,g){var C;return An(h,function(T,M,$){return C=g(T,M,$),!C}),!!C}function Vr(h,g,C){var T=0,M=h==null?T:h.length;if(typeof g=="number"&&g===g&&M<=ie){for(;T<M;){var $=T+M>>>1,B=h[$];B!==null&&!Oe(B)&&(C?B<=g:B<g)?T=$+1:M=$}return M}return Hi(h,g,Ee,C)}function Hi(h,g,C,T){var M=0,$=h==null?0:h.length;if($===0)return 0;g=C(g);for(var B=g!==g,z=g===null,V=Oe(g),Z=g===d;M<$;){var tt=$r((M+$)/2),rt=C(h[tt]),dt=rt!==d,bt=rt===null,yt=rt===rt,kt=Oe(rt);if(B)var xt=T||yt;else Z?xt=yt&&(T||dt):z?xt=yt&&dt&&(T||!bt):V?xt=yt&&dt&&!bt&&(T||!kt):bt||kt?xt=!1:xt=T?rt<=g:rt<g;xt?M=tt+1:$=tt}return ge($,de)}function Lo(h,g){for(var C=-1,T=h.length,M=0,$=[];++C<T;){var B=h[C],z=g?g(B):B;if(!C||!je(z,V)){var V=z;$[M++]=B===0?0:B}}return $}function $o(h){return typeof h=="number"?h:Oe(h)?pt:+h}function De(h){if(typeof h=="string")return h;if(Ct(h))return Kt(h,De)+"";if(Oe(h))return fo?fo.call(h):"";var g=h+"";return g=="0"&&1/h==-Et?"-0":g}function Cn(h,g,C){var T=-1,M=wr,$=h.length,B=!0,z=[],V=z;if(C)B=!1,M=mi;else if($>=_){var Z=g?null:Gc(h);if(Z)return Cr(Z);B=!1,M=ir,V=new Nn}else V=g?[]:z;t:for(;++T<$;){var tt=h[T],rt=g?g(tt):tt;if(tt=C||tt!==0?tt:0,B&&rt===rt){for(var dt=V.length;dt--;)if(V[dt]===rt)continue t;g&&V.push(rt),z.push(tt)}else M(V,rt,C)||(V!==z&&V.push(rt),z.push(tt))}return z}function Ui(h,g){return g=En(g,h),h=ua(h,g),h==null||delete h[tn(Ve(g))]}function Ro(h,g,C,T){return pr(h,g,C($n(h,g)),T)}function Wr(h,g,C,T){for(var M=h.length,$=T?M:-1;(T?$--:++$<M)&&g(h[$],$,h););return C?Ue(h,T?0:$,T?$+1:M):Ue(h,T?$+1:0,T?M:$)}function Fo(h,g){var C=h;return C instanceof Dt&&(C=C.value()),bi(g,function(T,M){return M.func.apply(M.thisArg,xn([T],M.args))},C)}function Vi(h,g,C){var T=h.length;if(T<2)return T?Cn(h[0]):[];for(var M=-1,$=j(T);++M<T;)for(var B=h[M],z=-1;++z<T;)z!=M&&($[M]=hr($[M]||B,h[z],g,C));return Cn(ce($,1),g,C)}function Bo(h,g,C){for(var T=-1,M=h.length,$=g.length,B={};++T<M;){var z=T<$?g[T]:d;C(B,h[T],z)}return B}function Wi(h){return te(h)?h:[]}function Gi(h){return typeof h=="function"?h:Ee}function En(h,g){return Ct(h)?h:ts(h,g)?[h]:fa(zt(h))}var $c=It;function Sn(h,g,C){var T=h.length;return C=C===d?T:C,!g&&C>=T?h:Ue(h,g,C)}var Po=wu||function(h){return ue.clearTimeout(h)};function zo(h,g){if(g)return h.slice();var C=h.length,T=oo?oo(C):new h.constructor(C);return h.copy(T),T}function qi(h){var g=new h.constructor(h.byteLength);return new Mr(g).set(new Mr(h)),g}function Rc(h,g){var C=g?qi(h.buffer):h.buffer;return new h.constructor(C,h.byteOffset,h.byteLength)}function Fc(h){var g=new h.constructor(h.source,_s.exec(h));return g.lastIndex=h.lastIndex,g}function Bc(h){return ur?Wt(ur.call(h)):{}}function Ho(h,g){var C=g?qi(h.buffer):h.buffer;return new h.constructor(C,h.byteOffset,h.length)}function Uo(h,g){if(h!==g){var C=h!==d,T=h===null,M=h===h,$=Oe(h),B=g!==d,z=g===null,V=g===g,Z=Oe(g);if(!z&&!Z&&!$&&h>g||$&&B&&V&&!z&&!Z||T&&B&&V||!C&&V||!M)return 1;if(!T&&!$&&!Z&&h<g||Z&&C&&M&&!T&&!$||z&&C&&M||!B&&M||!V)return-1}return 0}function Pc(h,g,C){for(var T=-1,M=h.criteria,$=g.criteria,B=M.length,z=C.length;++T<B;){var V=Uo(M[T],$[T]);if(V){if(T>=z)return V;var Z=C[T];return V*(Z=="desc"?-1:1)}}return h.index-g.index}function Vo(h,g,C,T){for(var M=-1,$=h.length,B=C.length,z=-1,V=g.length,Z=re($-B,0),tt=j(V+Z),rt=!T;++z<V;)tt[z]=g[z];for(;++M<B;)(rt||M<$)&&(tt[C[M]]=h[M]);for(;Z--;)tt[z++]=h[M++];return tt}function Wo(h,g,C,T){for(var M=-1,$=h.length,B=-1,z=C.length,V=-1,Z=g.length,tt=re($-z,0),rt=j(tt+Z),dt=!T;++M<tt;)rt[M]=h[M];for(var bt=M;++V<Z;)rt[bt+V]=g[V];for(;++B<z;)(dt||M<$)&&(rt[bt+C[B]]=h[M++]);return rt}function we(h,g){var C=-1,T=h.length;for(g||(g=j(T));++C<T;)g[C]=h[C];return g}function Ze(h,g,C,T){var M=!C;C||(C={});for(var $=-1,B=g.length;++$<B;){var z=g[$],V=T?T(C[z],h[z],z,C,h):d;V===d&&(V=h[z]),M?cn(C,z,V):cr(C,z,V)}return C}function zc(h,g){return Ze(h,Zi(h),g)}function Hc(h,g){return Ze(h,ra(h),g)}function Gr(h,g){return function(C,T){var M=Ct(C)?ql:uc,$=g?g():{};return M(C,h,vt(T,2),$)}}function Xn(h){return It(function(g,C){var T=-1,M=C.length,$=M>1?C[M-1]:d,B=M>2?C[2]:d;for($=h.length>3&&typeof $=="function"?(M--,$):d,B&&ye(C[0],C[1],B)&&($=M<3?d:$,M=1),g=Wt(g);++T<M;){var z=C[T];z&&h(g,z,T,$)}return g})}function Go(h,g){return function(C,T){if(C==null)return C;if(!Ae(C))return h(C,T);for(var M=C.length,$=g?M:-1,B=Wt(C);(g?$--:++$<M)&&T(B[$],$,B)!==!1;);return C}}function qo(h){return function(g,C,T){for(var M=-1,$=Wt(g),B=T(g),z=B.length;z--;){var V=B[h?z:++M];if(C($[V],V,$)===!1)break}return g}}function Uc(h,g,C){var T=g&mt,M=gr(h);function $(){var B=this&&this!==ue&&this instanceof $?M:h;return B.apply(T?C:this,arguments)}return $}function Yo(h){return function(g){g=zt(g);var C=Wn(g)?qe(g):d,T=C?C[0]:g.charAt(0),M=C?Sn(C,1).join(""):g.slice(1);return T[h]()+M}}function Qn(h){return function(g){return bi(Ga(Wa(g).replace(Ol,"")),h,"")}}function gr(h){return function(){var g=arguments;switch(g.length){case 0:return new h;case 1:return new h(g[0]);case 2:return new h(g[0],g[1]);case 3:return new h(g[0],g[1],g[2]);case 4:return new h(g[0],g[1],g[2],g[3]);case 5:return new h(g[0],g[1],g[2],g[3],g[4]);case 6:return new h(g[0],g[1],g[2],g[3],g[4],g[5]);case 7:return new h(g[0],g[1],g[2],g[3],g[4],g[5],g[6])}var C=Jn(h.prototype),T=h.apply(C,g);return Jt(T)?T:C}}function Vc(h,g,C){var T=gr(h);function M(){for(var $=arguments.length,B=j($),z=$,V=Zn(M);z--;)B[z]=arguments[z];var Z=$<3&&B[0]!==V&&B[$-1]!==V?[]:_n(B,V);if($-=Z.length,$<C)return Qo(h,g,qr,M.placeholder,d,B,Z,d,d,C-$);var tt=this&&this!==ue&&this instanceof M?T:h;return Ie(tt,this,B)}return M}function jo(h){return function(g,C,T){var M=Wt(g);if(!Ae(g)){var $=vt(C,3);g=oe(g),C=function(z){return $(M[z],z,M)}}var B=h(g,C,T);return B>-1?M[$?g[B]:B]:d}}function Ko(h){return dn(function(g){var C=g.length,T=C,M=ze.prototype.thru;for(h&&g.reverse();T--;){var $=g[T];if(typeof $!="function")throw new Pe(I);if(M&&!B&&Jr($)=="wrapper")var B=new ze([],!0)}for(T=B?T:C;++T<C;){$=g[T];var z=Jr($),V=z=="wrapper"?Xi($):d;V&&es(V[0])&&V[1]==(Ut|Ot|$t|Ft)&&!V[4].length&&V[9]==1?B=B[Jr(V[0])].apply(B,V[3]):B=$.length==1&&es($)?B[z]():B.thru($)}return function(){var Z=arguments,tt=Z[0];if(B&&Z.length==1&&Ct(tt))return B.plant(tt).value();for(var rt=0,dt=C?g[rt].apply(this,Z):tt;++rt<C;)dt=g[rt].call(this,dt);return dt}})}function qr(h,g,C,T,M,$,B,z,V,Z){var tt=g&Ut,rt=g&mt,dt=g&ht,bt=g&(Ot|Pt),yt=g&ae,kt=dt?d:gr(h);function xt(){for(var Mt=arguments.length,Lt=j(Mt),Ne=Mt;Ne--;)Lt[Ne]=arguments[Ne];if(bt)var xe=Zn(xt),Le=eu(Lt,xe);if(T&&(Lt=Vo(Lt,T,M,bt)),$&&(Lt=Wo(Lt,$,B,bt)),Mt-=Le,bt&&Mt<Z){var ee=_n(Lt,xe);return Qo(h,g,qr,xt.placeholder,C,Lt,ee,z,V,Z-Mt)}var Ke=rt?C:this,mn=dt?Ke[h]:h;return Mt=Lt.length,z?Lt=uh(Lt,z):yt&&Mt>1&&Lt.reverse(),tt&&V<Mt&&(Lt.length=V),this&&this!==ue&&this instanceof xt&&(mn=kt||gr(mn)),mn.apply(Ke,Lt)}return xt}function Jo(h,g){return function(C,T){return bc(C,h,g(T),{})}}function Yr(h,g){return function(C,T){var M;if(C===d&&T===d)return g;if(C!==d&&(M=C),T!==d){if(M===d)return T;typeof C=="string"||typeof T=="string"?(C=De(C),T=De(T)):(C=$o(C),T=$o(T)),M=h(C,T)}return M}}function Yi(h){return dn(function(g){return g=Kt(g,Me(vt())),It(function(C){var T=this;return h(g,function(M){return Ie(M,T,C)})})})}function jr(h,g){g=g===d?" ":De(g);var C=g.length;if(C<2)return C?zi(g,h):g;var T=zi(g,Lr(h/Gn(g)));return Wn(g)?Sn(qe(T),0,h).join(""):T.slice(0,h)}function Wc(h,g,C,T){var M=g&mt,$=gr(h);function B(){for(var z=-1,V=arguments.length,Z=-1,tt=T.length,rt=j(tt+V),dt=this&&this!==ue&&this instanceof B?$:h;++Z<tt;)rt[Z]=T[Z];for(;V--;)rt[Z++]=arguments[++z];return Ie(dt,M?C:this,rt)}return B}function Xo(h){return function(g,C,T){return T&&typeof T!="number"&&ye(g,C,T)&&(C=T=d),g=gn(g),C===d?(C=g,g=0):C=gn(C),T=T===d?g<C?1:-1:gn(T),Ic(g,C,T,h)}}function Kr(h){return function(g,C){return typeof g=="string"&&typeof C=="string"||(g=We(g),C=We(C)),h(g,C)}}function Qo(h,g,C,T,M,$,B,z,V,Z){var tt=g&Ot,rt=tt?B:d,dt=tt?d:B,bt=tt?$:d,yt=tt?d:$;g|=tt?$t:Rt,g&=~(tt?Rt:$t),g&Tt||(g&=~(mt|ht));var kt=[h,g,M,bt,rt,yt,dt,z,V,Z],xt=C.apply(d,kt);return es(h)&&ca(xt,kt),xt.placeholder=T,ha(xt,h,g)}function ji(h){var g=ne[h];return function(C,T){if(C=We(C),T=T==null?0:ge(St(T),292),T&&co(C)){var M=(zt(C)+"e").split("e"),$=g(M[0]+"e"+(+M[1]+T));return M=(zt($)+"e").split("e"),+(M[0]+"e"+(+M[1]-T))}return g(C)}}var Gc=jn&&1/Cr(new jn([,-0]))[1]==Et?function(h){return new jn(h)}:bs;function Zo(h){return function(g){var C=me(g);return C==fe?Ci(g):C==pe?lu(g):tu(g,h(g))}}function hn(h,g,C,T,M,$,B,z){var V=g&ht;if(!V&&typeof h!="function")throw new Pe(I);var Z=T?T.length:0;if(Z||(g&=~($t|Rt),T=M=d),B=B===d?B:re(St(B),0),z=z===d?z:St(z),Z-=M?M.length:0,g&Rt){var tt=T,rt=M;T=M=d}var dt=V?d:Xi(h),bt=[h,g,C,T,M,tt,rt,$,B,z];if(dt&&oh(bt,dt),h=bt[0],g=bt[1],C=bt[2],T=bt[3],M=bt[4],z=bt[9]=bt[9]===d?V?0:h.length:re(bt[9]-Z,0),!z&&g&(Ot|Pt)&&(g&=~(Ot|Pt)),!g||g==mt)var yt=Uc(h,g,C);else g==Ot||g==Pt?yt=Vc(h,g,z):(g==$t||g==(mt|$t))&&!M.length?yt=Wc(h,g,C,T):yt=qr.apply(d,bt);var kt=dt?No:ca;return ha(kt(yt,bt),h,g)}function ta(h,g,C,T){return h===d||je(h,Yn[C])&&!Ht.call(T,C)?g:h}function ea(h,g,C,T,M,$){return Jt(h)&&Jt(g)&&($.set(g,h),Ur(h,g,d,ea,$),$.delete(g)),h}function qc(h){return vr(h)?d:h}function na(h,g,C,T,M,$){var B=C&st,z=h.length,V=g.length;if(z!=V&&!(B&&V>z))return!1;var Z=$.get(h),tt=$.get(g);if(Z&&tt)return Z==g&&tt==h;var rt=-1,dt=!0,bt=C&ot?new Nn:d;for($.set(h,g),$.set(g,h);++rt<z;){var yt=h[rt],kt=g[rt];if(T)var xt=B?T(kt,yt,rt,g,h,$):T(yt,kt,rt,h,g,$);if(xt!==d){if(xt)continue;dt=!1;break}if(bt){if(!vi(g,function(Mt,Lt){if(!ir(bt,Lt)&&(yt===Mt||M(yt,Mt,C,T,$)))return bt.push(Lt)})){dt=!1;break}}else if(!(yt===kt||M(yt,kt,C,T,$))){dt=!1;break}}return $.delete(h),$.delete(g),dt}function Yc(h,g,C,T,M,$,B){switch(C){case q:if(h.byteLength!=g.byteLength||h.byteOffset!=g.byteOffset)return!1;h=h.buffer,g=g.buffer;case k:return!(h.byteLength!=g.byteLength||!$(new Mr(h),new Mr(g)));case Se:case Ge:case ke:return je(+h,+g);case nn:return h.name==g.name&&h.message==g.message;case _e:case Xe:return h==g+"";case fe:var z=Ci;case pe:var V=T&st;if(z||(z=Cr),h.size!=g.size&&!V)return!1;var Z=B.get(h);if(Z)return Z==g;T|=ot,B.set(h,g);var tt=na(z(h),z(g),T,M,$,B);return B.delete(h),tt;case sn:if(ur)return ur.call(h)==ur.call(g)}return!1}function jc(h,g,C,T,M,$){var B=C&st,z=Ki(h),V=z.length,Z=Ki(g),tt=Z.length;if(V!=tt&&!B)return!1;for(var rt=V;rt--;){var dt=z[rt];if(!(B?dt in g:Ht.call(g,dt)))return!1}var bt=$.get(h),yt=$.get(g);if(bt&&yt)return bt==g&&yt==h;var kt=!0;$.set(h,g),$.set(g,h);for(var xt=B;++rt<V;){dt=z[rt];var Mt=h[dt],Lt=g[dt];if(T)var Ne=B?T(Lt,Mt,dt,g,h,$):T(Mt,Lt,dt,h,g,$);if(!(Ne===d?Mt===Lt||M(Mt,Lt,C,T,$):Ne)){kt=!1;break}xt||(xt=dt=="constructor")}if(kt&&!xt){var xe=h.constructor,Le=g.constructor;xe!=Le&&"constructor"in h&&"constructor"in g&&!(typeof xe=="function"&&xe instanceof xe&&typeof Le=="function"&&Le instanceof Le)&&(kt=!1)}return $.delete(h),$.delete(g),kt}function dn(h){return rs(la(h,d,ba),h+"")}function Ki(h){return wo(h,oe,Zi)}function Ji(h){return wo(h,Ce,ra)}var Xi=Rr?function(h){return Rr.get(h)}:bs;function Jr(h){for(var g=h.name+"",C=Kn[g],T=Ht.call(Kn,g)?C.length:0;T--;){var M=C[T],$=M.func;if($==null||$==h)return M.name}return g}function Zn(h){var g=Ht.call(L,"placeholder")?L:h;return g.placeholder}function vt(){var h=L.iteratee||gs;return h=h===gs?Eo:h,arguments.length?h(arguments[0],arguments[1]):h}function Xr(h,g){var C=h.__data__;return nh(g)?C[typeof g=="string"?"string":"hash"]:C.map}function Qi(h){for(var g=oe(h),C=g.length;C--;){var T=g[C],M=h[T];g[C]=[T,M,oa(M)]}return g}function Rn(h,g){var C=su(h,g);return Co(C)?C:d}function Kc(h){var g=Ht.call(h,Dn),C=h[Dn];try{h[Dn]=d;var T=!0}catch{}var M=Tr.call(h);return T&&(g?h[Dn]=C:delete h[Dn]),M}var Zi=Si?function(h){return h==null?[]:(h=Wt(h),yn(Si(h),function(g){return lo.call(h,g)}))}:vs,ra=Si?function(h){for(var g=[];h;)xn(g,Zi(h)),h=Dr(h);return g}:vs,me=ve;(ki&&me(new ki(new ArrayBuffer(1)))!=q||or&&me(new or)!=fe||Ti&&me(Ti.resolve())!=In||jn&&me(new jn)!=pe||ar&&me(new ar)!=an)&&(me=function(h){var g=ve(h),C=g==Te?h.constructor:d,T=C?Fn(C):"";if(T)switch(T){case Du:return q;case Ou:return fe;case Nu:return In;case Lu:return pe;case $u:return an}return g});function Jc(h,g,C){for(var T=-1,M=C.length;++T<M;){var $=C[T],B=$.size;switch($.type){case"drop":h+=B;break;case"dropRight":g-=B;break;case"take":g=ge(g,h+B);break;case"takeRight":h=re(h,g-B);break}}return{start:h,end:g}}function Xc(h){var g=h.match(rl);return g?g[1].split(il):[]}function ia(h,g,C){g=En(g,h);for(var T=-1,M=g.length,$=!1;++T<M;){var B=tn(g[T]);if(!($=h!=null&&C(h,B)))break;h=h[B]}return $||++T!=M?$:(M=h==null?0:h.length,!!M&&ii(M)&&fn(B,M)&&(Ct(h)||Bn(h)))}function Qc(h){var g=h.length,C=new h.constructor(g);return g&&typeof h[0]=="string"&&Ht.call(h,"index")&&(C.index=h.index,C.input=h.input),C}function sa(h){return typeof h.constructor=="function"&&!mr(h)?Jn(Dr(h)):{}}function Zc(h,g,C){var T=h.constructor;switch(g){case k:return qi(h);case Se:case Ge:return new T(+h);case q:return Rc(h,C);case Q:case ut:case et:case ct:case O:case Y:case K:case at:case it:return Ho(h,C);case fe:return new T;case ke:case Xe:return new T(h);case _e:return Fc(h);case pe:return new T;case sn:return Bc(h)}}function th(h,g){var C=g.length;if(!C)return h;var T=C-1;return g[T]=(C>1?"& ":"")+g[T],g=g.join(C>2?", ":" "),h.replace(nl,`{
/* [wrapped with `+g+`] */
`)}function eh(h){return Ct(h)||Bn(h)||!!(uo&&h&&h[uo])}function fn(h,g){var C=typeof h;return g=g??Yt,!!g&&(C=="number"||C!="symbol"&&fl.test(h))&&h>-1&&h%1==0&&h<g}function ye(h,g,C){if(!Jt(C))return!1;var T=typeof g;return(T=="number"?Ae(C)&&fn(g,C.length):T=="string"&&g in C)?je(C[g],h):!1}function ts(h,g){if(Ct(h))return!1;var C=typeof h;return C=="number"||C=="symbol"||C=="boolean"||h==null||Oe(h)?!0:Qa.test(h)||!Xa.test(h)||g!=null&&h in Wt(g)}function nh(h){var g=typeof h;return g=="string"||g=="number"||g=="symbol"||g=="boolean"?h!=="__proto__":h===null}function es(h){var g=Jr(h),C=L[g];if(typeof C!="function"||!(g in Dt.prototype))return!1;if(h===C)return!0;var T=Xi(C);return!!T&&h===T[0]}function rh(h){return!!so&&so in h}var ih=Sr?pn:ys;function mr(h){var g=h&&h.constructor,C=typeof g=="function"&&g.prototype||Yn;return h===C}function oa(h){return h===h&&!Jt(h)}function aa(h,g){return function(C){return C==null?!1:C[h]===g&&(g!==d||h in Wt(C))}}function sh(h){var g=ni(h,function(T){return C.size===R&&C.clear(),T}),C=g.cache;return g}function oh(h,g){var C=h[1],T=g[1],M=C|T,$=M<(mt|ht|Ut),B=T==Ut&&C==Ot||T==Ut&&C==Ft&&h[7].length<=g[8]||T==(Ut|Ft)&&g[7].length<=g[8]&&C==Ot;if(!($||B))return h;T&mt&&(h[2]=g[2],M|=C&mt?0:Tt);var z=g[3];if(z){var V=h[3];h[3]=V?Vo(V,z,g[4]):z,h[4]=V?_n(h[3],P):g[4]}return z=g[5],z&&(V=h[5],h[5]=V?Wo(V,z,g[6]):z,h[6]=V?_n(h[5],P):g[6]),z=g[7],z&&(h[7]=z),T&Ut&&(h[8]=h[8]==null?g[8]:ge(h[8],g[8])),h[9]==null&&(h[9]=g[9]),h[0]=g[0],h[1]=M,h}function ah(h){var g=[];if(h!=null)for(var C in Wt(h))g.push(C);return g}function lh(h){return Tr.call(h)}function la(h,g,C){return g=re(g===d?h.length-1:g,0),function(){for(var T=arguments,M=-1,$=re(T.length-g,0),B=j($);++M<$;)B[M]=T[g+M];M=-1;for(var z=j(g+1);++M<g;)z[M]=T[M];return z[g]=C(B),Ie(h,this,z)}}function ua(h,g){return g.length<2?h:$n(h,Ue(g,0,-1))}function uh(h,g){for(var C=h.length,T=ge(g.length,C),M=we(h);T--;){var $=g[T];h[T]=fn($,C)?M[$]:d}return h}function ns(h,g){if(!(g==="constructor"&&typeof h[g]=="function")&&g!="__proto__")return h[g]}var ca=da(No),br=Cu||function(h,g){return ue.setTimeout(h,g)},rs=da(Oc);function ha(h,g,C){var T=g+"";return rs(h,th(T,ch(Xc(T),C)))}function da(h){var g=0,C=0;return function(){var T=Tu(),M=bn-(T-C);if(C=T,M>0){if(++g>=Je)return arguments[0]}else g=0;return h.apply(d,arguments)}}function Qr(h,g){var C=-1,T=h.length,M=T-1;for(g=g===d?T:g;++C<g;){var $=Pi(C,M),B=h[$];h[$]=h[C],h[C]=B}return h.length=g,h}var fa=sh(function(h){var g=[];return h.charCodeAt(0)===46&&g.push(""),h.replace(Za,function(C,T,M,$){g.push(M?$.replace(al,"$1"):T||C)}),g});function tn(h){if(typeof h=="string"||Oe(h))return h;var g=h+"";return g=="0"&&1/h==-Et?"-0":g}function Fn(h){if(h!=null){try{return kr.call(h)}catch{}try{return h+""}catch{}}return""}function ch(h,g){return Be(vn,function(C){var T="_."+C[0];g&C[1]&&!wr(h,T)&&h.push(T)}),h.sort()}function pa(h){if(h instanceof Dt)return h.clone();var g=new ze(h.__wrapped__,h.__chain__);return g.__actions__=we(h.__actions__),g.__index__=h.__index__,g.__values__=h.__values__,g}function hh(h,g,C){(C?ye(h,g,C):g===d)?g=1:g=re(St(g),0);var T=h==null?0:h.length;if(!T||g<1)return[];for(var M=0,$=0,B=j(Lr(T/g));M<T;)B[$++]=Ue(h,M,M+=g);return B}function dh(h){for(var g=-1,C=h==null?0:h.length,T=0,M=[];++g<C;){var $=h[g];$&&(M[T++]=$)}return M}function fh(){var h=arguments.length;if(!h)return[];for(var g=j(h-1),C=arguments[0],T=h;T--;)g[T-1]=arguments[T];return xn(Ct(C)?we(C):[C],ce(g,1))}var ph=It(function(h,g){return te(h)?hr(h,ce(g,1,te,!0)):[]}),gh=It(function(h,g){var C=Ve(g);return te(C)&&(C=d),te(h)?hr(h,ce(g,1,te,!0),vt(C,2)):[]}),mh=It(function(h,g){var C=Ve(g);return te(C)&&(C=d),te(h)?hr(h,ce(g,1,te,!0),d,C):[]});function bh(h,g,C){var T=h==null?0:h.length;return T?(g=C||g===d?1:St(g),Ue(h,g<0?0:g,T)):[]}function vh(h,g,C){var T=h==null?0:h.length;return T?(g=C||g===d?1:St(g),g=T-g,Ue(h,0,g<0?0:g)):[]}function yh(h,g){return h&&h.length?Wr(h,vt(g,3),!0,!0):[]}function xh(h,g){return h&&h.length?Wr(h,vt(g,3),!0):[]}function _h(h,g,C,T){var M=h==null?0:h.length;return M?(C&&typeof C!="number"&&ye(h,g,C)&&(C=0,T=M),fc(h,g,C,T)):[]}function ga(h,g,C){var T=h==null?0:h.length;if(!T)return-1;var M=C==null?0:St(C);return M<0&&(M=re(T+M,0)),Ar(h,vt(g,3),M)}function ma(h,g,C){var T=h==null?0:h.length;if(!T)return-1;var M=T-1;return C!==d&&(M=St(C),M=C<0?re(T+M,0):ge(M,T-1)),Ar(h,vt(g,3),M,!0)}function ba(h){var g=h==null?0:h.length;return g?ce(h,1):[]}function wh(h){var g=h==null?0:h.length;return g?ce(h,Et):[]}function Ah(h,g){var C=h==null?0:h.length;return C?(g=g===d?1:St(g),ce(h,g)):[]}function Ch(h){for(var g=-1,C=h==null?0:h.length,T={};++g<C;){var M=h[g];T[M[0]]=M[1]}return T}function va(h){return h&&h.length?h[0]:d}function Eh(h,g,C){var T=h==null?0:h.length;if(!T)return-1;var M=C==null?0:St(C);return M<0&&(M=re(T+M,0)),Vn(h,g,M)}function Sh(h){var g=h==null?0:h.length;return g?Ue(h,0,-1):[]}var kh=It(function(h){var g=Kt(h,Wi);return g.length&&g[0]===h[0]?Li(g):[]}),Th=It(function(h){var g=Ve(h),C=Kt(h,Wi);return g===Ve(C)?g=d:C.pop(),C.length&&C[0]===h[0]?Li(C,vt(g,2)):[]}),Ih=It(function(h){var g=Ve(h),C=Kt(h,Wi);return g=typeof g=="function"?g:d,g&&C.pop(),C.length&&C[0]===h[0]?Li(C,d,g):[]});function Mh(h,g){return h==null?"":Su.call(h,g)}function Ve(h){var g=h==null?0:h.length;return g?h[g-1]:d}function Dh(h,g,C){var T=h==null?0:h.length;if(!T)return-1;var M=T;return C!==d&&(M=St(C),M=M<0?re(T+M,0):ge(M,T-1)),g===g?cu(h,g,M):Ar(h,Js,M,!0)}function Oh(h,g){return h&&h.length?Io(h,St(g)):d}var Nh=It(ya);function ya(h,g){return h&&h.length&&g&&g.length?Bi(h,g):h}function Lh(h,g,C){return h&&h.length&&g&&g.length?Bi(h,g,vt(C,2)):h}function $h(h,g,C){return h&&h.length&&g&&g.length?Bi(h,g,d,C):h}var Rh=dn(function(h,g){var C=h==null?0:h.length,T=Mi(h,g);return Oo(h,Kt(g,function(M){return fn(M,C)?+M:M}).sort(Uo)),T});function Fh(h,g){var C=[];if(!(h&&h.length))return C;var T=-1,M=[],$=h.length;for(g=vt(g,3);++T<$;){var B=h[T];g(B,T,h)&&(C.push(B),M.push(T))}return Oo(h,M),C}function ss(h){return h==null?h:Mu.call(h)}function Bh(h,g,C){var T=h==null?0:h.length;return T?(C&&typeof C!="number"&&ye(h,g,C)?(g=0,C=T):(g=g==null?0:St(g),C=C===d?T:St(C)),Ue(h,g,C)):[]}function Ph(h,g){return Vr(h,g)}function zh(h,g,C){return Hi(h,g,vt(C,2))}function Hh(h,g){var C=h==null?0:h.length;if(C){var T=Vr(h,g);if(T<C&&je(h[T],g))return T}return-1}function Uh(h,g){return Vr(h,g,!0)}function Vh(h,g,C){return Hi(h,g,vt(C,2),!0)}function Wh(h,g){var C=h==null?0:h.length;if(C){var T=Vr(h,g,!0)-1;if(je(h[T],g))return T}return-1}function Gh(h){return h&&h.length?Lo(h):[]}function qh(h,g){return h&&h.length?Lo(h,vt(g,2)):[]}function Yh(h){var g=h==null?0:h.length;return g?Ue(h,1,g):[]}function jh(h,g,C){return h&&h.length?(g=C||g===d?1:St(g),Ue(h,0,g<0?0:g)):[]}function Kh(h,g,C){var T=h==null?0:h.length;return T?(g=C||g===d?1:St(g),g=T-g,Ue(h,g<0?0:g,T)):[]}function Jh(h,g){return h&&h.length?Wr(h,vt(g,3),!1,!0):[]}function Xh(h,g){return h&&h.length?Wr(h,vt(g,3)):[]}var Qh=It(function(h){return Cn(ce(h,1,te,!0))}),Zh=It(function(h){var g=Ve(h);return te(g)&&(g=d),Cn(ce(h,1,te,!0),vt(g,2))}),td=It(function(h){var g=Ve(h);return g=typeof g=="function"?g:d,Cn(ce(h,1,te,!0),d,g)});function ed(h){return h&&h.length?Cn(h):[]}function nd(h,g){return h&&h.length?Cn(h,vt(g,2)):[]}function rd(h,g){return g=typeof g=="function"?g:d,h&&h.length?Cn(h,d,g):[]}function os(h){if(!(h&&h.length))return[];var g=0;return h=yn(h,function(C){if(te(C))return g=re(C.length,g),!0}),wi(g,function(C){return Kt(h,yi(C))})}function xa(h,g){if(!(h&&h.length))return[];var C=os(h);return g==null?C:Kt(C,function(T){return Ie(g,d,T)})}var id=It(function(h,g){return te(h)?hr(h,g):[]}),sd=It(function(h){return Vi(yn(h,te))}),od=It(function(h){var g=Ve(h);return te(g)&&(g=d),Vi(yn(h,te),vt(g,2))}),ad=It(function(h){var g=Ve(h);return g=typeof g=="function"?g:d,Vi(yn(h,te),d,g)}),ld=It(os);function ud(h,g){return Bo(h||[],g||[],cr)}function cd(h,g){return Bo(h||[],g||[],pr)}var hd=It(function(h){var g=h.length,C=g>1?h[g-1]:d;return C=typeof C=="function"?(h.pop(),C):d,xa(h,C)});function _a(h){var g=L(h);return g.__chain__=!0,g}function dd(h,g){return g(h),h}function Zr(h,g){return g(h)}var fd=dn(function(h){var g=h.length,C=g?h[0]:0,T=this.__wrapped__,M=function($){return Mi($,h)};return g>1||this.__actions__.length||!(T instanceof Dt)||!fn(C)?this.thru(M):(T=T.slice(C,+C+(g?1:0)),T.__actions__.push({func:Zr,args:[M],thisArg:d}),new ze(T,this.__chain__).thru(function($){return g&&!$.length&&$.push(d),$}))});function pd(){return _a(this)}function gd(){return new ze(this.value(),this.__chain__)}function md(){this.__values__===d&&(this.__values__=$a(this.value()));var h=this.__index__>=this.__values__.length,g=h?d:this.__values__[this.__index__++];return{done:h,value:g}}function bd(){return this}function vd(h){for(var g,C=this;C instanceof Br;){var T=pa(C);T.__index__=0,T.__values__=d,g?M.__wrapped__=T:g=T;var M=T;C=C.__wrapped__}return M.__wrapped__=h,g}function yd(){var h=this.__wrapped__;if(h instanceof Dt){var g=h;return this.__actions__.length&&(g=new Dt(this)),g=g.reverse(),g.__actions__.push({func:Zr,args:[ss],thisArg:d}),new ze(g,this.__chain__)}return this.thru(ss)}function xd(){return Fo(this.__wrapped__,this.__actions__)}var _d=Gr(function(h,g,C){Ht.call(h,C)?++h[C]:cn(h,C,1)});function wd(h,g,C){var T=Ct(h)?js:dc;return C&&ye(h,g,C)&&(g=d),T(h,vt(g,3))}function Ad(h,g){var C=Ct(h)?yn:xo;return C(h,vt(g,3))}var Cd=jo(ga),Ed=jo(ma);function Sd(h,g){return ce(ti(h,g),1)}function kd(h,g){return ce(ti(h,g),Et)}function Td(h,g,C){return C=C===d?1:St(C),ce(ti(h,g),C)}function wa(h,g){var C=Ct(h)?Be:An;return C(h,vt(g,3))}function Aa(h,g){var C=Ct(h)?Yl:yo;return C(h,vt(g,3))}var Id=Gr(function(h,g,C){Ht.call(h,C)?h[C].push(g):cn(h,C,[g])});function Md(h,g,C,T){h=Ae(h)?h:er(h),C=C&&!T?St(C):0;var M=h.length;return C<0&&(C=re(M+C,0)),si(h)?C<=M&&h.indexOf(g,C)>-1:!!M&&Vn(h,g,C)>-1}var Dd=It(function(h,g,C){var T=-1,M=typeof g=="function",$=Ae(h)?j(h.length):[];return An(h,function(B){$[++T]=M?Ie(g,B,C):dr(B,g,C)}),$}),Od=Gr(function(h,g,C){cn(h,C,g)});function ti(h,g){var C=Ct(h)?Kt:So;return C(h,vt(g,3))}function Nd(h,g,C,T){return h==null?[]:(Ct(g)||(g=g==null?[]:[g]),C=T?d:C,Ct(C)||(C=C==null?[]:[C]),Mo(h,g,C))}var Ld=Gr(function(h,g,C){h[C?0:1].push(g)},function(){return[[],[]]});function $d(h,g,C){var T=Ct(h)?bi:Qs,M=arguments.length<3;return T(h,vt(g,4),C,M,An)}function Rd(h,g,C){var T=Ct(h)?jl:Qs,M=arguments.length<3;return T(h,vt(g,4),C,M,yo)}function Fd(h,g){var C=Ct(h)?yn:xo;return C(h,ri(vt(g,3)))}function Bd(h){var g=Ct(h)?go:Mc;return g(h)}function Pd(h,g,C){(C?ye(h,g,C):g===d)?g=1:g=St(g);var T=Ct(h)?ac:Dc;return T(h,g)}function zd(h){var g=Ct(h)?lc:Nc;return g(h)}function Hd(h){if(h==null)return 0;if(Ae(h))return si(h)?Gn(h):h.length;var g=me(h);return g==fe||g==pe?h.size:Ri(h).length}function Ud(h,g,C){var T=Ct(h)?vi:Lc;return C&&ye(h,g,C)&&(g=d),T(h,vt(g,3))}var Vd=It(function(h,g){if(h==null)return[];var C=g.length;return C>1&&ye(h,g[0],g[1])?g=[]:C>2&&ye(g[0],g[1],g[2])&&(g=[g[0]]),Mo(h,ce(g,1),[])}),ei=Au||function(){return ue.Date.now()};function Wd(h,g){if(typeof g!="function")throw new Pe(I);return h=St(h),function(){if(--h<1)return g.apply(this,arguments)}}function Ca(h,g,C){return g=C?d:g,g=h&&g==null?h.length:g,hn(h,Ut,d,d,d,d,g)}function Ea(h,g){var C;if(typeof g!="function")throw new Pe(I);return h=St(h),function(){return--h>0&&(C=g.apply(this,arguments)),h<=1&&(g=d),C}}var as=It(function(h,g,C){var T=mt;if(C.length){var M=_n(C,Zn(as));T|=$t}return hn(h,T,g,C,M)}),Sa=It(function(h,g,C){var T=mt|ht;if(C.length){var M=_n(C,Zn(Sa));T|=$t}return hn(g,T,h,C,M)});function ka(h,g,C){g=C?d:g;var T=hn(h,Ot,d,d,d,d,d,g);return T.placeholder=ka.placeholder,T}function Ta(h,g,C){g=C?d:g;var T=hn(h,Pt,d,d,d,d,d,g);return T.placeholder=Ta.placeholder,T}function Ia(h,g,C){var T,M,$,B,z,V,Z=0,tt=!1,rt=!1,dt=!0;if(typeof h!="function")throw new Pe(I);g=We(g)||0,Jt(C)&&(tt=!!C.leading,rt="maxWait"in C,$=rt?re(We(C.maxWait)||0,g):$,dt="trailing"in C?!!C.trailing:dt);function bt(ee){var Ke=T,mn=M;return T=M=d,Z=ee,B=h.apply(mn,Ke),B}function yt(ee){return Z=ee,z=br(Mt,g),tt?bt(ee):B}function kt(ee){var Ke=ee-V,mn=ee-Z,ja=g-Ke;return rt?ge(ja,$-mn):ja}function xt(ee){var Ke=ee-V,mn=ee-Z;return V===d||Ke>=g||Ke<0||rt&&mn>=$}function Mt(){var ee=ei();if(xt(ee))return Lt(ee);z=br(Mt,kt(ee))}function Lt(ee){return z=d,dt&&T?bt(ee):(T=M=d,B)}function Ne(){z!==d&&Po(z),Z=0,T=V=M=z=d}function xe(){return z===d?B:Lt(ei())}function Le(){var ee=ei(),Ke=xt(ee);if(T=arguments,M=this,V=ee,Ke){if(z===d)return yt(V);if(rt)return Po(z),z=br(Mt,g),bt(V)}return z===d&&(z=br(Mt,g)),B}return Le.cancel=Ne,Le.flush=xe,Le}var Gd=It(function(h,g){return vo(h,1,g)}),qd=It(function(h,g,C){return vo(h,We(g)||0,C)});function Yd(h){return hn(h,ae)}function ni(h,g){if(typeof h!="function"||g!=null&&typeof g!="function")throw new Pe(I);var C=function(){var T=arguments,M=g?g.apply(this,T):T[0],$=C.cache;if($.has(M))return $.get(M);var B=h.apply(this,T);return C.cache=$.set(M,B)||$,B};return C.cache=new(ni.Cache||un),C}ni.Cache=un;function ri(h){if(typeof h!="function")throw new Pe(I);return function(){var g=arguments;switch(g.length){case 0:return!h.call(this);case 1:return!h.call(this,g[0]);case 2:return!h.call(this,g[0],g[1]);case 3:return!h.call(this,g[0],g[1],g[2])}return!h.apply(this,g)}}function jd(h){return Ea(2,h)}var Kd=$c(function(h,g){g=g.length==1&&Ct(g[0])?Kt(g[0],Me(vt())):Kt(ce(g,1),Me(vt()));var C=g.length;return It(function(T){for(var M=-1,$=ge(T.length,C);++M<$;)T[M]=g[M].call(this,T[M]);return Ie(h,this,T)})}),ls=It(function(h,g){var C=_n(g,Zn(ls));return hn(h,$t,d,g,C)}),Ma=It(function(h,g){var C=_n(g,Zn(Ma));return hn(h,Rt,d,g,C)}),Jd=dn(function(h,g){return hn(h,Ft,d,d,d,g)});function Xd(h,g){if(typeof h!="function")throw new Pe(I);return g=g===d?g:St(g),It(h,g)}function Qd(h,g){if(typeof h!="function")throw new Pe(I);return g=g==null?0:re(St(g),0),It(function(C){var T=C[g],M=Sn(C,0,g);return T&&xn(M,T),Ie(h,this,M)})}function Zd(h,g,C){var T=!0,M=!0;if(typeof h!="function")throw new Pe(I);return Jt(C)&&(T="leading"in C?!!C.leading:T,M="trailing"in C?!!C.trailing:M),Ia(h,g,{leading:T,maxWait:g,trailing:M})}function tf(h){return Ca(h,1)}function ef(h,g){return ls(Gi(g),h)}function nf(){if(!arguments.length)return[];var h=arguments[0];return Ct(h)?h:[h]}function rf(h){return He(h,W)}function sf(h,g){return g=typeof g=="function"?g:d,He(h,W,g)}function of(h){return He(h,F|W)}function af(h,g){return g=typeof g=="function"?g:d,He(h,F|W,g)}function lf(h,g){return g==null||bo(h,g,oe(g))}function je(h,g){return h===g||h!==h&&g!==g}var uf=Kr(Ni),cf=Kr(function(h,g){return h>=g}),Bn=Ao(function(){return arguments}())?Ao:function(h){return Zt(h)&&Ht.call(h,"callee")&&!lo.call(h,"callee")},Ct=j.isArray,hf=Us?Me(Us):vc;function Ae(h){return h!=null&&ii(h.length)&&!pn(h)}function te(h){return Zt(h)&&Ae(h)}function df(h){return h===!0||h===!1||Zt(h)&&ve(h)==Se}var kn=Eu||ys,ff=Vs?Me(Vs):yc;function pf(h){return Zt(h)&&h.nodeType===1&&!vr(h)}function gf(h){if(h==null)return!0;if(Ae(h)&&(Ct(h)||typeof h=="string"||typeof h.splice=="function"||kn(h)||tr(h)||Bn(h)))return!h.length;var g=me(h);if(g==fe||g==pe)return!h.size;if(mr(h))return!Ri(h).length;for(var C in h)if(Ht.call(h,C))return!1;return!0}function mf(h,g){return fr(h,g)}function bf(h,g,C){C=typeof C=="function"?C:d;var T=C?C(h,g):d;return T===d?fr(h,g,d,C):!!T}function us(h){if(!Zt(h))return!1;var g=ve(h);return g==nn||g==Pn||typeof h.message=="string"&&typeof h.name=="string"&&!vr(h)}function vf(h){return typeof h=="number"&&co(h)}function pn(h){if(!Jt(h))return!1;var g=ve(h);return g==rn||g==Tn||g==jt||g==zn}function Da(h){return typeof h=="number"&&h==St(h)}function ii(h){return typeof h=="number"&&h>-1&&h%1==0&&h<=Yt}function Jt(h){var g=typeof h;return h!=null&&(g=="object"||g=="function")}function Zt(h){return h!=null&&typeof h=="object"}var Oa=Ws?Me(Ws):_c;function yf(h,g){return h===g||$i(h,g,Qi(g))}function xf(h,g,C){return C=typeof C=="function"?C:d,$i(h,g,Qi(g),C)}function _f(h){return Na(h)&&h!=+h}function wf(h){if(ih(h))throw new At(S);return Co(h)}function Af(h){return h===null}function Cf(h){return h==null}function Na(h){return typeof h=="number"||Zt(h)&&ve(h)==ke}function vr(h){if(!Zt(h)||ve(h)!=Te)return!1;var g=Dr(h);if(g===null)return!0;var C=Ht.call(g,"constructor")&&g.constructor;return typeof C=="function"&&C instanceof C&&kr.call(C)==yu}var cs=Gs?Me(Gs):wc;function Ef(h){return Da(h)&&h>=-Yt&&h<=Yt}var La=qs?Me(qs):Ac;function si(h){return typeof h=="string"||!Ct(h)&&Zt(h)&&ve(h)==Xe}function Oe(h){return typeof h=="symbol"||Zt(h)&&ve(h)==sn}var tr=Ys?Me(Ys):Cc;function Sf(h){return h===d}function kf(h){return Zt(h)&&me(h)==an}function Tf(h){return Zt(h)&&ve(h)==rr}var If=Kr(Fi),Mf=Kr(function(h,g){return h<=g});function $a(h){if(!h)return[];if(Ae(h))return si(h)?qe(h):we(h);if(sr&&h[sr])return au(h[sr]());var g=me(h),C=g==fe?Ci:g==pe?Cr:er;return C(h)}function gn(h){if(!h)return h===0?h:0;if(h=We(h),h===Et||h===-Et){var g=h<0?-1:1;return g*he}return h===h?h:0}function St(h){var g=gn(h),C=g%1;return g===g?C?g-C:g:0}function Ra(h){return h?Ln(St(h),0,Qt):0}function We(h){if(typeof h=="number")return h;if(Oe(h))return pt;if(Jt(h)){var g=typeof h.valueOf=="function"?h.valueOf():h;h=Jt(g)?g+"":g}if(typeof h!="string")return h===0?h:+h;h=Zs(h);var C=cl.test(h);return C||dl.test(h)?Wl(h.slice(2),C?2:8):ul.test(h)?pt:+h}function Fa(h){return Ze(h,Ce(h))}function Df(h){return h?Ln(St(h),-Yt,Yt):h===0?h:0}function zt(h){return h==null?"":De(h)}var Of=Xn(function(h,g){if(mr(g)||Ae(g)){Ze(g,oe(g),h);return}for(var C in g)Ht.call(g,C)&&cr(h,C,g[C])}),Ba=Xn(function(h,g){Ze(g,Ce(g),h)}),oi=Xn(function(h,g,C,T){Ze(g,Ce(g),h,T)}),Nf=Xn(function(h,g,C,T){Ze(g,oe(g),h,T)}),Lf=dn(Mi);function $f(h,g){var C=Jn(h);return g==null?C:mo(C,g)}var Rf=It(function(h,g){h=Wt(h);var C=-1,T=g.length,M=T>2?g[2]:d;for(M&&ye(g[0],g[1],M)&&(T=1);++C<T;)for(var $=g[C],B=Ce($),z=-1,V=B.length;++z<V;){var Z=B[z],tt=h[Z];(tt===d||je(tt,Yn[Z])&&!Ht.call(h,Z))&&(h[Z]=$[Z])}return h}),Ff=It(function(h){return h.push(d,ea),Ie(Pa,d,h)});function Bf(h,g){return Ks(h,vt(g,3),Qe)}function Pf(h,g){return Ks(h,vt(g,3),Oi)}function zf(h,g){return h==null?h:Di(h,vt(g,3),Ce)}function Hf(h,g){return h==null?h:_o(h,vt(g,3),Ce)}function Uf(h,g){return h&&Qe(h,vt(g,3))}function Vf(h,g){return h&&Oi(h,vt(g,3))}function Wf(h){return h==null?[]:Hr(h,oe(h))}function Gf(h){return h==null?[]:Hr(h,Ce(h))}function hs(h,g,C){var T=h==null?d:$n(h,g);return T===d?C:T}function qf(h,g){return h!=null&&ia(h,g,pc)}function ds(h,g){return h!=null&&ia(h,g,gc)}var Yf=Jo(function(h,g,C){g!=null&&typeof g.toString!="function"&&(g=Tr.call(g)),h[g]=C},ps(Ee)),jf=Jo(function(h,g,C){g!=null&&typeof g.toString!="function"&&(g=Tr.call(g)),Ht.call(h,g)?h[g].push(C):h[g]=[C]},vt),Kf=It(dr);function oe(h){return Ae(h)?po(h):Ri(h)}function Ce(h){return Ae(h)?po(h,!0):Ec(h)}function Jf(h,g){var C={};return g=vt(g,3),Qe(h,function(T,M,$){cn(C,g(T,M,$),T)}),C}function Xf(h,g){var C={};return g=vt(g,3),Qe(h,function(T,M,$){cn(C,M,g(T,M,$))}),C}var Qf=Xn(function(h,g,C){Ur(h,g,C)}),Pa=Xn(function(h,g,C,T){Ur(h,g,C,T)}),Zf=dn(function(h,g){var C={};if(h==null)return C;var T=!1;g=Kt(g,function($){return $=En($,h),T||(T=$.length>1),$}),Ze(h,Ji(h),C),T&&(C=He(C,F|H|W,qc));for(var M=g.length;M--;)Ui(C,g[M]);return C});function tp(h,g){return za(h,ri(vt(g)))}var ep=dn(function(h,g){return h==null?{}:kc(h,g)});function za(h,g){if(h==null)return{};var C=Kt(Ji(h),function(T){return[T]});return g=vt(g),Do(h,C,function(T,M){return g(T,M[0])})}function np(h,g,C){g=En(g,h);var T=-1,M=g.length;for(M||(M=1,h=d);++T<M;){var $=h==null?d:h[tn(g[T])];$===d&&(T=M,$=C),h=pn($)?$.call(h):$}return h}function rp(h,g,C){return h==null?h:pr(h,g,C)}function ip(h,g,C,T){return T=typeof T=="function"?T:d,h==null?h:pr(h,g,C,T)}var Ha=Zo(oe),Ua=Zo(Ce);function sp(h,g,C){var T=Ct(h),M=T||kn(h)||tr(h);if(g=vt(g,4),C==null){var $=h&&h.constructor;M?C=T?new $:[]:Jt(h)?C=pn($)?Jn(Dr(h)):{}:C={}}return(M?Be:Qe)(h,function(B,z,V){return g(C,B,z,V)}),C}function op(h,g){return h==null?!0:Ui(h,g)}function ap(h,g,C){return h==null?h:Ro(h,g,Gi(C))}function lp(h,g,C,T){return T=typeof T=="function"?T:d,h==null?h:Ro(h,g,Gi(C),T)}function er(h){return h==null?[]:Ai(h,oe(h))}function up(h){return h==null?[]:Ai(h,Ce(h))}function cp(h,g,C){return C===d&&(C=g,g=d),C!==d&&(C=We(C),C=C===C?C:0),g!==d&&(g=We(g),g=g===g?g:0),Ln(We(h),g,C)}function hp(h,g,C){return g=gn(g),C===d?(C=g,g=0):C=gn(C),h=We(h),mc(h,g,C)}function dp(h,g,C){if(C&&typeof C!="boolean"&&ye(h,g,C)&&(g=C=d),C===d&&(typeof g=="boolean"?(C=g,g=d):typeof h=="boolean"&&(C=h,h=d)),h===d&&g===d?(h=0,g=1):(h=gn(h),g===d?(g=h,h=0):g=gn(g)),h>g){var T=h;h=g,g=T}if(C||h%1||g%1){var M=ho();return ge(h+M*(g-h+Vl("1e-"+((M+"").length-1))),g)}return Pi(h,g)}var fp=Qn(function(h,g,C){return g=g.toLowerCase(),h+(C?Va(g):g)});function Va(h){return fs(zt(h).toLowerCase())}function Wa(h){return h=zt(h),h&&h.replace(pl,nu).replace(Nl,"")}function pp(h,g,C){h=zt(h),g=De(g);var T=h.length;C=C===d?T:Ln(St(C),0,T);var M=C;return C-=g.length,C>=0&&h.slice(C,M)==g}function gp(h){return h=zt(h),h&&Re.test(h)?h.replace(_t,ru):h}function mp(h){return h=zt(h),h&&tl.test(h)?h.replace(ai,"\\$&"):h}var bp=Qn(function(h,g,C){return h+(C?"-":"")+g.toLowerCase()}),vp=Qn(function(h,g,C){return h+(C?" ":"")+g.toLowerCase()}),yp=Yo("toLowerCase");function xp(h,g,C){h=zt(h),g=St(g);var T=g?Gn(h):0;if(!g||T>=g)return h;var M=(g-T)/2;return jr($r(M),C)+h+jr(Lr(M),C)}function _p(h,g,C){h=zt(h),g=St(g);var T=g?Gn(h):0;return g&&T<g?h+jr(g-T,C):h}function wp(h,g,C){h=zt(h),g=St(g);var T=g?Gn(h):0;return g&&T<g?jr(g-T,C)+h:h}function Ap(h,g,C){return C||g==null?g=0:g&&(g=+g),Iu(zt(h).replace(li,""),g||0)}function Cp(h,g,C){return(C?ye(h,g,C):g===d)?g=1:g=St(g),zi(zt(h),g)}function Ep(){var h=arguments,g=zt(h[0]);return h.length<3?g:g.replace(h[1],h[2])}var Sp=Qn(function(h,g,C){return h+(C?"_":"")+g.toLowerCase()});function kp(h,g,C){return C&&typeof C!="number"&&ye(h,g,C)&&(g=C=d),C=C===d?Qt:C>>>0,C?(h=zt(h),h&&(typeof g=="string"||g!=null&&!cs(g))&&(g=De(g),!g&&Wn(h))?Sn(qe(h),0,C):h.split(g,C)):[]}var Tp=Qn(function(h,g,C){return h+(C?" ":"")+fs(g)});function Ip(h,g,C){return h=zt(h),C=C==null?0:Ln(St(C),0,h.length),g=De(g),h.slice(C,C+g.length)==g}function Mp(h,g,C){var T=L.templateSettings;C&&ye(h,g,C)&&(g=d),h=zt(h),g=oi({},g,T,ta);var M=oi({},g.imports,T.imports,ta),$=oe(M),B=Ai(M,$),z,V,Z=0,tt=g.interpolate||yr,rt="__p += '",dt=Ei((g.escape||yr).source+"|"+tt.source+"|"+(tt===xs?ll:yr).source+"|"+(g.evaluate||yr).source+"|$","g"),bt="//# sourceURL="+(Ht.call(g,"sourceURL")?(g.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Bl+"]")+`
`;h.replace(dt,function(xt,Mt,Lt,Ne,xe,Le){return Lt||(Lt=Ne),rt+=h.slice(Z,Le).replace(gl,iu),Mt&&(z=!0,rt+=`' +
__e(`+Mt+`) +
'`),xe&&(V=!0,rt+=`';
`+xe+`;
__p += '`),Lt&&(rt+=`' +
((__t = (`+Lt+`)) == null ? '' : __t) +
'`),Z=Le+xt.length,xt}),rt+=`';
`;var yt=Ht.call(g,"variable")&&g.variable;if(!yt)rt=`with (obj) {
`+rt+`
}
`;else if(ol.test(yt))throw new At(D);rt=(V?rt.replace(X,""):rt).replace(lt,"$1").replace(nt,"$1;"),rt="function("+(yt||"obj")+`) {
`+(yt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+rt+`return __p
}`;var kt=qa(function(){return Bt($,bt+"return "+rt).apply(d,B)});if(kt.source=rt,us(kt))throw kt;return kt}function Dp(h){return zt(h).toLowerCase()}function Op(h){return zt(h).toUpperCase()}function Np(h,g,C){if(h=zt(h),h&&(C||g===d))return Zs(h);if(!h||!(g=De(g)))return h;var T=qe(h),M=qe(g),$=eo(T,M),B=no(T,M)+1;return Sn(T,$,B).join("")}function Lp(h,g,C){if(h=zt(h),h&&(C||g===d))return h.slice(0,io(h)+1);if(!h||!(g=De(g)))return h;var T=qe(h),M=no(T,qe(g))+1;return Sn(T,0,M).join("")}function $p(h,g,C){if(h=zt(h),h&&(C||g===d))return h.replace(li,"");if(!h||!(g=De(g)))return h;var T=qe(h),M=eo(T,qe(g));return Sn(T,M).join("")}function Rp(h,g){var C=en,T=$e;if(Jt(g)){var M="separator"in g?g.separator:M;C="length"in g?St(g.length):C,T="omission"in g?De(g.omission):T}h=zt(h);var $=h.length;if(Wn(h)){var B=qe(h);$=B.length}if(C>=$)return h;var z=C-Gn(T);if(z<1)return T;var V=B?Sn(B,0,z).join(""):h.slice(0,z);if(M===d)return V+T;if(B&&(z+=V.length-z),cs(M)){if(h.slice(z).search(M)){var Z,tt=V;for(M.global||(M=Ei(M.source,zt(_s.exec(M))+"g")),M.lastIndex=0;Z=M.exec(tt);)var rt=Z.index;V=V.slice(0,rt===d?z:rt)}}else if(h.indexOf(De(M),z)!=z){var dt=V.lastIndexOf(M);dt>-1&&(V=V.slice(0,dt))}return V+T}function Fp(h){return h=zt(h),h&&wt.test(h)?h.replace(ft,hu):h}var Bp=Qn(function(h,g,C){return h+(C?" ":"")+g.toUpperCase()}),fs=Yo("toUpperCase");function Ga(h,g,C){return h=zt(h),g=C?d:g,g===d?ou(h)?pu(h):Xl(h):h.match(g)||[]}var qa=It(function(h,g){try{return Ie(h,d,g)}catch(C){return us(C)?C:new At(C)}}),Pp=dn(function(h,g){return Be(g,function(C){C=tn(C),cn(h,C,as(h[C],h))}),h});function zp(h){var g=h==null?0:h.length,C=vt();return h=g?Kt(h,function(T){if(typeof T[1]!="function")throw new Pe(I);return[C(T[0]),T[1]]}):[],It(function(T){for(var M=-1;++M<g;){var $=h[M];if(Ie($[0],this,T))return Ie($[1],this,T)}})}function Hp(h){return hc(He(h,F))}function ps(h){return function(){return h}}function Up(h,g){return h==null||h!==h?g:h}var Vp=Ko(),Wp=Ko(!0);function Ee(h){return h}function gs(h){return Eo(typeof h=="function"?h:He(h,F))}function Gp(h){return ko(He(h,F))}function qp(h,g){return To(h,He(g,F))}var Yp=It(function(h,g){return function(C){return dr(C,h,g)}}),jp=It(function(h,g){return function(C){return dr(h,C,g)}});function ms(h,g,C){var T=oe(g),M=Hr(g,T);C==null&&!(Jt(g)&&(M.length||!T.length))&&(C=g,g=h,h=this,M=Hr(g,oe(g)));var $=!(Jt(C)&&"chain"in C)||!!C.chain,B=pn(h);return Be(M,function(z){var V=g[z];h[z]=V,B&&(h.prototype[z]=function(){var Z=this.__chain__;if($||Z){var tt=h(this.__wrapped__),rt=tt.__actions__=we(this.__actions__);return rt.push({func:V,args:arguments,thisArg:h}),tt.__chain__=Z,tt}return V.apply(h,xn([this.value()],arguments))})}),h}function Kp(){return ue._===this&&(ue._=xu),this}function bs(){}function Jp(h){return h=St(h),It(function(g){return Io(g,h)})}var Xp=Yi(Kt),Qp=Yi(js),Zp=Yi(vi);function Ya(h){return ts(h)?yi(tn(h)):Tc(h)}function tg(h){return function(g){return h==null?d:$n(h,g)}}var eg=Xo(),ng=Xo(!0);function vs(){return[]}function ys(){return!1}function rg(){return{}}function ig(){return""}function sg(){return!0}function og(h,g){if(h=St(h),h<1||h>Yt)return[];var C=Qt,T=ge(h,Qt);g=vt(g),h-=Qt;for(var M=wi(T,g);++C<h;)g(C);return M}function ag(h){return Ct(h)?Kt(h,tn):Oe(h)?[h]:we(fa(zt(h)))}function lg(h){var g=++vu;return zt(h)+g}var ug=Yr(function(h,g){return h+g},0),cg=ji("ceil"),hg=Yr(function(h,g){return h/g},1),dg=ji("floor");function fg(h){return h&&h.length?zr(h,Ee,Ni):d}function pg(h,g){return h&&h.length?zr(h,vt(g,2),Ni):d}function gg(h){return Xs(h,Ee)}function mg(h,g){return Xs(h,vt(g,2))}function bg(h){return h&&h.length?zr(h,Ee,Fi):d}function vg(h,g){return h&&h.length?zr(h,vt(g,2),Fi):d}var yg=Yr(function(h,g){return h*g},1),xg=ji("round"),_g=Yr(function(h,g){return h-g},0);function wg(h){return h&&h.length?_i(h,Ee):0}function Ag(h,g){return h&&h.length?_i(h,vt(g,2)):0}return L.after=Wd,L.ary=Ca,L.assign=Of,L.assignIn=Ba,L.assignInWith=oi,L.assignWith=Nf,L.at=Lf,L.before=Ea,L.bind=as,L.bindAll=Pp,L.bindKey=Sa,L.castArray=nf,L.chain=_a,L.chunk=hh,L.compact=dh,L.concat=fh,L.cond=zp,L.conforms=Hp,L.constant=ps,L.countBy=_d,L.create=$f,L.curry=ka,L.curryRight=Ta,L.debounce=Ia,L.defaults=Rf,L.defaultsDeep=Ff,L.defer=Gd,L.delay=qd,L.difference=ph,L.differenceBy=gh,L.differenceWith=mh,L.drop=bh,L.dropRight=vh,L.dropRightWhile=yh,L.dropWhile=xh,L.fill=_h,L.filter=Ad,L.flatMap=Sd,L.flatMapDeep=kd,L.flatMapDepth=Td,L.flatten=ba,L.flattenDeep=wh,L.flattenDepth=Ah,L.flip=Yd,L.flow=Vp,L.flowRight=Wp,L.fromPairs=Ch,L.functions=Wf,L.functionsIn=Gf,L.groupBy=Id,L.initial=Sh,L.intersection=kh,L.intersectionBy=Th,L.intersectionWith=Ih,L.invert=Yf,L.invertBy=jf,L.invokeMap=Dd,L.iteratee=gs,L.keyBy=Od,L.keys=oe,L.keysIn=Ce,L.map=ti,L.mapKeys=Jf,L.mapValues=Xf,L.matches=Gp,L.matchesProperty=qp,L.memoize=ni,L.merge=Qf,L.mergeWith=Pa,L.method=Yp,L.methodOf=jp,L.mixin=ms,L.negate=ri,L.nthArg=Jp,L.omit=Zf,L.omitBy=tp,L.once=jd,L.orderBy=Nd,L.over=Xp,L.overArgs=Kd,L.overEvery=Qp,L.overSome=Zp,L.partial=ls,L.partialRight=Ma,L.partition=Ld,L.pick=ep,L.pickBy=za,L.property=Ya,L.propertyOf=tg,L.pull=Nh,L.pullAll=ya,L.pullAllBy=Lh,L.pullAllWith=$h,L.pullAt=Rh,L.range=eg,L.rangeRight=ng,L.rearg=Jd,L.reject=Fd,L.remove=Fh,L.rest=Xd,L.reverse=ss,L.sampleSize=Pd,L.set=rp,L.setWith=ip,L.shuffle=zd,L.slice=Bh,L.sortBy=Vd,L.sortedUniq=Gh,L.sortedUniqBy=qh,L.split=kp,L.spread=Qd,L.tail=Yh,L.take=jh,L.takeRight=Kh,L.takeRightWhile=Jh,L.takeWhile=Xh,L.tap=dd,L.throttle=Zd,L.thru=Zr,L.toArray=$a,L.toPairs=Ha,L.toPairsIn=Ua,L.toPath=ag,L.toPlainObject=Fa,L.transform=sp,L.unary=tf,L.union=Qh,L.unionBy=Zh,L.unionWith=td,L.uniq=ed,L.uniqBy=nd,L.uniqWith=rd,L.unset=op,L.unzip=os,L.unzipWith=xa,L.update=ap,L.updateWith=lp,L.values=er,L.valuesIn=up,L.without=id,L.words=Ga,L.wrap=ef,L.xor=sd,L.xorBy=od,L.xorWith=ad,L.zip=ld,L.zipObject=ud,L.zipObjectDeep=cd,L.zipWith=hd,L.entries=Ha,L.entriesIn=Ua,L.extend=Ba,L.extendWith=oi,ms(L,L),L.add=ug,L.attempt=qa,L.camelCase=fp,L.capitalize=Va,L.ceil=cg,L.clamp=cp,L.clone=rf,L.cloneDeep=of,L.cloneDeepWith=af,L.cloneWith=sf,L.conformsTo=lf,L.deburr=Wa,L.defaultTo=Up,L.divide=hg,L.endsWith=pp,L.eq=je,L.escape=gp,L.escapeRegExp=mp,L.every=wd,L.find=Cd,L.findIndex=ga,L.findKey=Bf,L.findLast=Ed,L.findLastIndex=ma,L.findLastKey=Pf,L.floor=dg,L.forEach=wa,L.forEachRight=Aa,L.forIn=zf,L.forInRight=Hf,L.forOwn=Uf,L.forOwnRight=Vf,L.get=hs,L.gt=uf,L.gte=cf,L.has=qf,L.hasIn=ds,L.head=va,L.identity=Ee,L.includes=Md,L.indexOf=Eh,L.inRange=hp,L.invoke=Kf,L.isArguments=Bn,L.isArray=Ct,L.isArrayBuffer=hf,L.isArrayLike=Ae,L.isArrayLikeObject=te,L.isBoolean=df,L.isBuffer=kn,L.isDate=ff,L.isElement=pf,L.isEmpty=gf,L.isEqual=mf,L.isEqualWith=bf,L.isError=us,L.isFinite=vf,L.isFunction=pn,L.isInteger=Da,L.isLength=ii,L.isMap=Oa,L.isMatch=yf,L.isMatchWith=xf,L.isNaN=_f,L.isNative=wf,L.isNil=Cf,L.isNull=Af,L.isNumber=Na,L.isObject=Jt,L.isObjectLike=Zt,L.isPlainObject=vr,L.isRegExp=cs,L.isSafeInteger=Ef,L.isSet=La,L.isString=si,L.isSymbol=Oe,L.isTypedArray=tr,L.isUndefined=Sf,L.isWeakMap=kf,L.isWeakSet=Tf,L.join=Mh,L.kebabCase=bp,L.last=Ve,L.lastIndexOf=Dh,L.lowerCase=vp,L.lowerFirst=yp,L.lt=If,L.lte=Mf,L.max=fg,L.maxBy=pg,L.mean=gg,L.meanBy=mg,L.min=bg,L.minBy=vg,L.stubArray=vs,L.stubFalse=ys,L.stubObject=rg,L.stubString=ig,L.stubTrue=sg,L.multiply=yg,L.nth=Oh,L.noConflict=Kp,L.noop=bs,L.now=ei,L.pad=xp,L.padEnd=_p,L.padStart=wp,L.parseInt=Ap,L.random=dp,L.reduce=$d,L.reduceRight=Rd,L.repeat=Cp,L.replace=Ep,L.result=np,L.round=xg,L.runInContext=U,L.sample=Bd,L.size=Hd,L.snakeCase=Sp,L.some=Ud,L.sortedIndex=Ph,L.sortedIndexBy=zh,L.sortedIndexOf=Hh,L.sortedLastIndex=Uh,L.sortedLastIndexBy=Vh,L.sortedLastIndexOf=Wh,L.startCase=Tp,L.startsWith=Ip,L.subtract=_g,L.sum=wg,L.sumBy=Ag,L.template=Mp,L.times=og,L.toFinite=gn,L.toInteger=St,L.toLength=Ra,L.toLower=Dp,L.toNumber=We,L.toSafeInteger=Df,L.toString=zt,L.toUpper=Op,L.trim=Np,L.trimEnd=Lp,L.trimStart=$p,L.truncate=Rp,L.unescape=Fp,L.uniqueId=lg,L.upperCase=Bp,L.upperFirst=fs,L.each=wa,L.eachRight=Aa,L.first=va,ms(L,function(){var h={};return Qe(L,function(g,C){Ht.call(L.prototype,C)||(h[C]=g)}),h}(),{chain:!1}),L.VERSION=v,Be(["bind","bindKey","curry","curryRight","partial","partialRight"],function(h){L[h].placeholder=L}),Be(["drop","take"],function(h,g){Dt.prototype[h]=function(C){C=C===d?1:re(St(C),0);var T=this.__filtered__&&!g?new Dt(this):this.clone();return T.__filtered__?T.__takeCount__=ge(C,T.__takeCount__):T.__views__.push({size:ge(C,Qt),type:h+(T.__dir__<0?"Right":"")}),T},Dt.prototype[h+"Right"]=function(C){return this.reverse()[h](C).reverse()}}),Be(["filter","map","takeWhile"],function(h,g){var C=g+1,T=C==Nt||C==Xt;Dt.prototype[h]=function(M){var $=this.clone();return $.__iteratees__.push({iteratee:vt(M,3),type:C}),$.__filtered__=$.__filtered__||T,$}}),Be(["head","last"],function(h,g){var C="take"+(g?"Right":"");Dt.prototype[h]=function(){return this[C](1).value()[0]}}),Be(["initial","tail"],function(h,g){var C="drop"+(g?"":"Right");Dt.prototype[h]=function(){return this.__filtered__?new Dt(this):this[C](1)}}),Dt.prototype.compact=function(){return this.filter(Ee)},Dt.prototype.find=function(h){return this.filter(h).head()},Dt.prototype.findLast=function(h){return this.reverse().find(h)},Dt.prototype.invokeMap=It(function(h,g){return typeof h=="function"?new Dt(this):this.map(function(C){return dr(C,h,g)})}),Dt.prototype.reject=function(h){return this.filter(ri(vt(h)))},Dt.prototype.slice=function(h,g){h=St(h);var C=this;return C.__filtered__&&(h>0||g<0)?new Dt(C):(h<0?C=C.takeRight(-h):h&&(C=C.drop(h)),g!==d&&(g=St(g),C=g<0?C.dropRight(-g):C.take(g-h)),C)},Dt.prototype.takeRightWhile=function(h){return this.reverse().takeWhile(h).reverse()},Dt.prototype.toArray=function(){return this.take(Qt)},Qe(Dt.prototype,function(h,g){var C=/^(?:filter|find|map|reject)|While$/.test(g),T=/^(?:head|last)$/.test(g),M=L[T?"take"+(g=="last"?"Right":""):g],$=T||/^find/.test(g);M&&(L.prototype[g]=function(){var B=this.__wrapped__,z=T?[1]:arguments,V=B instanceof Dt,Z=z[0],tt=V||Ct(B),rt=function(Mt){var Lt=M.apply(L,xn([Mt],z));return T&&dt?Lt[0]:Lt};tt&&C&&typeof Z=="function"&&Z.length!=1&&(V=tt=!1);var dt=this.__chain__,bt=!!this.__actions__.length,yt=$&&!dt,kt=V&&!bt;if(!$&&tt){B=kt?B:new Dt(this);var xt=h.apply(B,z);return xt.__actions__.push({func:Zr,args:[rt],thisArg:d}),new ze(xt,dt)}return yt&&kt?h.apply(this,z):(xt=this.thru(rt),yt?T?xt.value()[0]:xt.value():xt)})}),Be(["pop","push","shift","sort","splice","unshift"],function(h){var g=Er[h],C=/^(?:push|sort|unshift)$/.test(h)?"tap":"thru",T=/^(?:pop|shift)$/.test(h);L.prototype[h]=function(){var M=arguments;if(T&&!this.__chain__){var $=this.value();return g.apply(Ct($)?$:[],M)}return this[C](function(B){return g.apply(Ct(B)?B:[],M)})}}),Qe(Dt.prototype,function(h,g){var C=L[g];if(C){var T=C.name+"";Ht.call(Kn,T)||(Kn[T]=[]),Kn[T].push({name:g,func:C})}}),Kn[qr(d,ht).name]=[{name:"wrapper",func:d}],Dt.prototype.clone=Ru,Dt.prototype.reverse=Fu,Dt.prototype.value=Bu,L.prototype.at=fd,L.prototype.chain=pd,L.prototype.commit=gd,L.prototype.next=md,L.prototype.plant=vd,L.prototype.reverse=yd,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=xd,L.prototype.first=L.prototype.head,sr&&(L.prototype[sr]=bd),L},qn=gu();Mn?((Mn.exports=qn)._=qn,pi._=qn):ue._=qn}).call(commonjsGlobal)})(lodash,lodash.exports);var lodashExports=lodash.exports;(function(){function m(s,d,v){function _(D,N){if(!d[D]){if(!s[D]){var R=typeof require=="function"&&require;if(!N&&R)return R(D,!0);if(S)return S(D,!0);var P=new Error("Cannot find module '"+D+"'");throw P.code="MODULE_NOT_FOUND",P}var F=d[D]={exports:{}};s[D][0].call(F.exports,function(H){var W=s[D][1][H];return _(W||H)},F,F.exports,m,s,d,v)}return d[D].exports}for(var S=typeof require=="function"&&require,I=0;I<v.length;I++)_(v[I]);return _}return m})()({1:[function(m,s,d){var v=m("./lib/js-yaml.js");s.exports=v},{"./lib/js-yaml.js":2}],2:[function(m,s,d){var v=m("./js-yaml/loader"),_=m("./js-yaml/dumper");function S(I){return function(){throw new Error("Function "+I+" is deprecated and cannot be used.")}}s.exports.Type=m("./js-yaml/type"),s.exports.Schema=m("./js-yaml/schema"),s.exports.FAILSAFE_SCHEMA=m("./js-yaml/schema/failsafe"),s.exports.JSON_SCHEMA=m("./js-yaml/schema/json"),s.exports.CORE_SCHEMA=m("./js-yaml/schema/core"),s.exports.DEFAULT_SAFE_SCHEMA=m("./js-yaml/schema/default_safe"),s.exports.DEFAULT_FULL_SCHEMA=m("./js-yaml/schema/default_full"),s.exports.load=v.load,s.exports.loadAll=v.loadAll,s.exports.safeLoad=v.safeLoad,s.exports.safeLoadAll=v.safeLoadAll,s.exports.dump=_.dump,s.exports.safeDump=_.safeDump,s.exports.YAMLException=m("./js-yaml/exception"),s.exports.MINIMAL_SCHEMA=m("./js-yaml/schema/failsafe"),s.exports.SAFE_SCHEMA=m("./js-yaml/schema/default_safe"),s.exports.DEFAULT_SCHEMA=m("./js-yaml/schema/default_full"),s.exports.scan=S("scan"),s.exports.parse=S("parse"),s.exports.compose=S("compose"),s.exports.addConstructor=S("addConstructor")},{"./js-yaml/dumper":4,"./js-yaml/exception":5,"./js-yaml/loader":6,"./js-yaml/schema":8,"./js-yaml/schema/core":9,"./js-yaml/schema/default_full":10,"./js-yaml/schema/default_safe":11,"./js-yaml/schema/failsafe":12,"./js-yaml/schema/json":13,"./js-yaml/type":14}],3:[function(m,s,d){function v(R){return typeof R>"u"||R===null}function _(R){return typeof R=="object"&&R!==null}function S(R){return Array.isArray(R)?R:v(R)?[]:[R]}function I(R,P){var F,H,W,st;if(P)for(st=Object.keys(P),F=0,H=st.length;F<H;F+=1)W=st[F],R[W]=P[W];return R}function D(R,P){var F="",H;for(H=0;H<P;H+=1)F+=R;return F}function N(R){return R===0&&Number.NEGATIVE_INFINITY===1/R}s.exports.isNothing=v,s.exports.isObject=_,s.exports.toArray=S,s.exports.repeat=D,s.exports.isNegativeZero=N,s.exports.extend=I},{}],4:[function(m,s,d){var v=m("./common"),_=m("./exception"),S=m("./schema/default_full"),I=m("./schema/default_safe"),D=Object.prototype.toString,N=Object.prototype.hasOwnProperty,R=9,P=10,F=13,H=32,W=33,st=34,ot=35,mt=37,ht=38,Tt=39,Ot=42,Pt=44,$t=45,Rt=58,Ut=61,Ft=62,ae=63,en=64,$e=91,Je=93,bn=96,Nt=123,Vt=124,Xt=125,Et={};Et[0]="\\0",Et[7]="\\a",Et[8]="\\b",Et[9]="\\t",Et[10]="\\n",Et[11]="\\v",Et[12]="\\f",Et[13]="\\r",Et[27]="\\e",Et[34]='\\"',Et[92]="\\\\",Et[133]="\\N",Et[160]="\\_",Et[8232]="\\L",Et[8233]="\\P";var Yt=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function he(O,Y){var K,at,it,X,lt,nt,ft;if(Y===null)return{};for(K={},at=Object.keys(Y),it=0,X=at.length;it<X;it+=1)lt=at[it],nt=String(Y[lt]),lt.slice(0,2)==="!!"&&(lt="tag:yaml.org,2002:"+lt.slice(2)),ft=O.compiledTypeMap.fallback[lt],ft&&N.call(ft.styleAliases,nt)&&(nt=ft.styleAliases[nt]),K[lt]=nt;return K}function pt(O){var Y,K,at;if(Y=O.toString(16).toUpperCase(),O<=255)K="x",at=2;else if(O<=65535)K="u",at=4;else if(O<=4294967295)K="U",at=8;else throw new _("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+K+v.repeat("0",at-Y.length)+Y}function Qt(O){this.schema=O.schema||S,this.indent=Math.max(1,O.indent||2),this.noArrayIndent=O.noArrayIndent||!1,this.skipInvalid=O.skipInvalid||!1,this.flowLevel=v.isNothing(O.flowLevel)?-1:O.flowLevel,this.styleMap=he(this.schema,O.styles||null),this.sortKeys=O.sortKeys||!1,this.lineWidth=O.lineWidth||80,this.noRefs=O.noRefs||!1,this.noCompatMode=O.noCompatMode||!1,this.condenseFlow=O.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function de(O,Y){for(var K=v.repeat(" ",Y),at=0,it=-1,X="",lt,nt=O.length;at<nt;)it=O.indexOf(`
`,at),it===-1?(lt=O.slice(at),at=nt):(lt=O.slice(at,it+1),at=it+1),lt.length&&lt!==`
`&&(X+=K),X+=lt;return X}function ie(O,Y){return`
`+v.repeat(" ",O.indent*Y)}function vn(O,Y){var K,at,it;for(K=0,at=O.implicitTypes.length;K<at;K+=1)if(it=O.implicitTypes[K],it.resolve(Y))return!0;return!1}function le(O){return O===H||O===R}function be(O){return 32<=O&&O<=126||161<=O&&O<=55295&&O!==8232&&O!==8233||57344<=O&&O<=65533&&O!==65279||65536<=O&&O<=1114111}function jt(O){return be(O)&&!le(O)&&O!==65279&&O!==F&&O!==P}function Se(O,Y){return be(O)&&O!==65279&&O!==Pt&&O!==$e&&O!==Je&&O!==Nt&&O!==Xt&&O!==Rt&&(O!==ot||Y&&jt(Y))}function Ge(O){return be(O)&&O!==65279&&!le(O)&&O!==$t&&O!==ae&&O!==Rt&&O!==Pt&&O!==$e&&O!==Je&&O!==Nt&&O!==Xt&&O!==ot&&O!==ht&&O!==Ot&&O!==W&&O!==Vt&&O!==Ut&&O!==Ft&&O!==Tt&&O!==st&&O!==mt&&O!==en&&O!==bn}function Pn(O){var Y=/^\n* /;return Y.test(O)}var nn=1,rn=2,Tn=3,fe=4,ke=5;function nr(O,Y,K,at,it){var X,lt,nt,ft=!1,_t=!1,wt=at!==-1,Re=-1,se=Ge(O.charCodeAt(0))&&!le(O.charCodeAt(O.length-1));if(Y)for(X=0;X<O.length;X++){if(lt=O.charCodeAt(X),!be(lt))return ke;nt=X>0?O.charCodeAt(X-1):null,se=se&&Se(lt,nt)}else{for(X=0;X<O.length;X++){if(lt=O.charCodeAt(X),lt===P)ft=!0,wt&&(_t=_t||X-Re-1>at&&O[Re+1]!==" ",Re=X);else if(!be(lt))return ke;nt=X>0?O.charCodeAt(X-1):null,se=se&&Se(lt,nt)}_t=_t||wt&&X-Re-1>at&&O[Re+1]!==" "}return!ft&&!_t?se&&!it(O)?nn:rn:K>9&&Pn(O)?ke:_t?fe:Tn}function Te(O,Y,K,at){O.dump=function(){if(Y.length===0)return"''";if(!O.noCompatMode&&Yt.indexOf(Y)!==-1)return"'"+Y+"'";var it=O.indent*Math.max(1,K),X=O.lineWidth===-1?-1:Math.max(Math.min(O.lineWidth,40),O.lineWidth-it),lt=at||O.flowLevel>-1&&K>=O.flowLevel;function nt(ft){return vn(O,ft)}switch(nr(Y,lt,O.indent,X,nt)){case nn:return Y;case rn:return"'"+Y.replace(/'/g,"''")+"'";case Tn:return"|"+In(Y,O.indent)+zn(de(Y,it));case fe:return">"+In(Y,O.indent)+zn(de(_e(Y,X),it));case ke:return'"'+Xe(Y)+'"';default:throw new _("impossible error: invalid scalar style")}}()}function In(O,Y){var K=Pn(O)?String(Y):"",at=O[O.length-1]===`
`,it=at&&(O[O.length-2]===`
`||O===`
`),X=it?"+":at?"":"-";return K+X+`
`}function zn(O){return O[O.length-1]===`
`?O.slice(0,-1):O}function _e(O,Y){for(var K=/(\n+)([^\n]*)/g,at=function(){var _t=O.indexOf(`
`);return _t=_t!==-1?_t:O.length,K.lastIndex=_t,pe(O.slice(0,_t),Y)}(),it=O[0]===`
`||O[0]===" ",X,lt;lt=K.exec(O);){var nt=lt[1],ft=lt[2];X=ft[0]===" ",at+=nt+(!it&&!X&&ft!==""?`
`:"")+pe(ft,Y),it=X}return at}function pe(O,Y){if(O===""||O[0]===" ")return O;for(var K=/ [^ ]/g,at,it=0,X,lt=0,nt=0,ft="";at=K.exec(O);)nt=at.index,nt-it>Y&&(X=lt>it?lt:nt,ft+=`
`+O.slice(it,X),it=X+1),lt=nt;return ft+=`
`,O.length-it>Y&&lt>it?ft+=O.slice(it,lt)+`
`+O.slice(lt+1):ft+=O.slice(it),ft.slice(1)}function Xe(O){for(var Y="",K,at,it,X=0;X<O.length;X++){if(K=O.charCodeAt(X),K>=55296&&K<=56319&&(at=O.charCodeAt(X+1),at>=56320&&at<=57343)){Y+=pt((K-55296)*1024+at-56320+65536),X++;continue}it=Et[K],Y+=!it&&be(K)?O[X]:it||pt(K)}return Y}function sn(O,Y,K){var at="",it=O.tag,X,lt;for(X=0,lt=K.length;X<lt;X+=1)q(O,Y,K[X],!1,!1)&&(X!==0&&(at+=","+(O.condenseFlow?"":" ")),at+=O.dump);O.tag=it,O.dump="["+at+"]"}function Hn(O,Y,K,at){var it="",X=O.tag,lt,nt;for(lt=0,nt=K.length;lt<nt;lt+=1)q(O,Y+1,K[lt],!0,!0)&&((!at||lt!==0)&&(it+=ie(O,Y)),O.dump&&P===O.dump.charCodeAt(0)?it+="-":it+="- ",it+=O.dump);O.tag=X,O.dump=it||"[]"}function an(O,Y,K){var at="",it=O.tag,X=Object.keys(K),lt,nt,ft,_t,wt;for(lt=0,nt=X.length;lt<nt;lt+=1)wt="",lt!==0&&(wt+=", "),O.condenseFlow&&(wt+='"'),ft=X[lt],_t=K[ft],q(O,Y,ft,!1,!1)&&(O.dump.length>1024&&(wt+="? "),wt+=O.dump+(O.condenseFlow?'"':"")+":"+(O.condenseFlow?"":" "),q(O,Y,_t,!1,!1)&&(wt+=O.dump,at+=wt));O.tag=it,O.dump="{"+at+"}"}function rr(O,Y,K,at){var it="",X=O.tag,lt=Object.keys(K),nt,ft,_t,wt,Re,se;if(O.sortKeys===!0)lt.sort();else if(typeof O.sortKeys=="function")lt.sort(O.sortKeys);else if(O.sortKeys)throw new _("sortKeys must be a boolean or a function");for(nt=0,ft=lt.length;nt<ft;nt+=1)se="",(!at||nt!==0)&&(se+=ie(O,Y)),_t=lt[nt],wt=K[_t],q(O,Y+1,_t,!0,!0,!0)&&(Re=O.tag!==null&&O.tag!=="?"||O.dump&&O.dump.length>1024,Re&&(O.dump&&P===O.dump.charCodeAt(0)?se+="?":se+="? "),se+=O.dump,Re&&(se+=ie(O,Y)),q(O,Y+1,wt,!0,Re)&&(O.dump&&P===O.dump.charCodeAt(0)?se+=":":se+=": ",se+=O.dump,it+=se));O.tag=X,O.dump=it||"{}"}function k(O,Y,K){var at,it,X,lt,nt,ft;for(it=K?O.explicitTypes:O.implicitTypes,X=0,lt=it.length;X<lt;X+=1)if(nt=it[X],(nt.instanceOf||nt.predicate)&&(!nt.instanceOf||typeof Y=="object"&&Y instanceof nt.instanceOf)&&(!nt.predicate||nt.predicate(Y))){if(O.tag=K?nt.tag:"?",nt.represent){if(ft=O.styleMap[nt.tag]||nt.defaultStyle,D.call(nt.represent)==="[object Function]")at=nt.represent(Y,ft);else if(N.call(nt.represent,ft))at=nt.represent[ft](Y,ft);else throw new _("!<"+nt.tag+'> tag resolver accepts not "'+ft+'" style');O.dump=at}return!0}return!1}function q(O,Y,K,at,it,X){O.tag=null,O.dump=K,k(O,K,!1)||k(O,K,!0);var lt=D.call(O.dump);at&&(at=O.flowLevel<0||O.flowLevel>Y);var nt=lt==="[object Object]"||lt==="[object Array]",ft,_t;if(nt&&(ft=O.duplicates.indexOf(K),_t=ft!==-1),(O.tag!==null&&O.tag!=="?"||_t||O.indent!==2&&Y>0)&&(it=!1),_t&&O.usedDuplicates[ft])O.dump="*ref_"+ft;else{if(nt&&_t&&!O.usedDuplicates[ft]&&(O.usedDuplicates[ft]=!0),lt==="[object Object]")at&&Object.keys(O.dump).length!==0?(rr(O,Y,O.dump,it),_t&&(O.dump="&ref_"+ft+O.dump)):(an(O,Y,O.dump),_t&&(O.dump="&ref_"+ft+" "+O.dump));else if(lt==="[object Array]"){var wt=O.noArrayIndent&&Y>0?Y-1:Y;at&&O.dump.length!==0?(Hn(O,wt,O.dump,it),_t&&(O.dump="&ref_"+ft+O.dump)):(sn(O,wt,O.dump),_t&&(O.dump="&ref_"+ft+" "+O.dump))}else if(lt==="[object String]")O.tag!=="?"&&Te(O,O.dump,Y,X);else{if(O.skipInvalid)return!1;throw new _("unacceptable kind of an object to dump "+lt)}O.tag!==null&&O.tag!=="?"&&(O.dump="!<"+O.tag+"> "+O.dump)}return!0}function Q(O,Y){var K=[],at=[],it,X;for(ut(O,K,at),it=0,X=at.length;it<X;it+=1)Y.duplicates.push(K[at[it]]);Y.usedDuplicates=new Array(X)}function ut(O,Y,K){var at,it,X;if(O!==null&&typeof O=="object")if(it=Y.indexOf(O),it!==-1)K.indexOf(it)===-1&&K.push(it);else if(Y.push(O),Array.isArray(O))for(it=0,X=O.length;it<X;it+=1)ut(O[it],Y,K);else for(at=Object.keys(O),it=0,X=at.length;it<X;it+=1)ut(O[at[it]],Y,K)}function et(O,Y){Y=Y||{};var K=new Qt(Y);return K.noRefs||Q(O,K),q(K,0,O,!0,!0)?K.dump+`
`:""}function ct(O,Y){return et(O,v.extend({schema:I},Y))}s.exports.dump=et,s.exports.safeDump=ct},{"./common":3,"./exception":5,"./schema/default_full":10,"./schema/default_safe":11}],5:[function(m,s,d){function v(_,S){Error.call(this),this.name="YAMLException",this.reason=_,this.mark=S,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}v.prototype=Object.create(Error.prototype),v.prototype.constructor=v,v.prototype.toString=function(S){var I=this.name+": ";return I+=this.reason||"(unknown reason)",!S&&this.mark&&(I+=" "+this.mark.toString()),I},s.exports=v},{}],6:[function(m,s,d){var v=m("./common"),_=m("./exception"),S=m("./mark"),I=m("./schema/default_safe"),D=m("./schema/default_full"),N=Object.prototype.hasOwnProperty,R=1,P=2,F=3,H=4,W=1,st=2,ot=3,mt=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ht=/[\x85\u2028\u2029]/,Tt=/[,\[\]\{\}]/,Ot=/^(?:!|!!|![a-z\-]+!)$/i,Pt=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function $t(k){return Object.prototype.toString.call(k)}function Rt(k){return k===10||k===13}function Ut(k){return k===9||k===32}function Ft(k){return k===9||k===32||k===10||k===13}function ae(k){return k===44||k===91||k===93||k===123||k===125}function en(k){var q;return 48<=k&&k<=57?k-48:(q=k|32,97<=q&&q<=102?q-97+10:-1)}function $e(k){return k===120?2:k===117?4:k===85?8:0}function Je(k){return 48<=k&&k<=57?k-48:-1}function bn(k){return k===48?"\0":k===97?"\x07":k===98?"\b":k===116||k===9?"	":k===110?`
`:k===118?"\v":k===102?"\f":k===114?"\r":k===101?"\x1B":k===32?" ":k===34?'"':k===47?"/":k===92?"\\":k===78?"":k===95?" ":k===76?"\u2028":k===80?"\u2029":""}function Nt(k){return k<=65535?String.fromCharCode(k):String.fromCharCode((k-65536>>10)+55296,(k-65536&1023)+56320)}for(var Vt=new Array(256),Xt=new Array(256),Et=0;Et<256;Et++)Vt[Et]=bn(Et)?1:0,Xt[Et]=bn(Et);function Yt(k,q){this.input=k,this.filename=q.filename||null,this.schema=q.schema||D,this.onWarning=q.onWarning||null,this.legacy=q.legacy||!1,this.json=q.json||!1,this.listener=q.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=k.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function he(k,q){return new _(q,new S(k.filename,k.input,k.position,k.line,k.position-k.lineStart))}function pt(k,q){throw he(k,q)}function Qt(k,q){k.onWarning&&k.onWarning.call(null,he(k,q))}var de={YAML:function(q,Q,ut){var et,ct,O;q.version!==null&&pt(q,"duplication of %YAML directive"),ut.length!==1&&pt(q,"YAML directive accepts exactly one argument"),et=/^([0-9]+)\.([0-9]+)$/.exec(ut[0]),et===null&&pt(q,"ill-formed argument of the YAML directive"),ct=parseInt(et[1],10),O=parseInt(et[2],10),ct!==1&&pt(q,"unacceptable YAML version of the document"),q.version=ut[0],q.checkLineBreaks=O<2,O!==1&&O!==2&&Qt(q,"unsupported YAML version of the document")},TAG:function(q,Q,ut){var et,ct;ut.length!==2&&pt(q,"TAG directive accepts exactly two arguments"),et=ut[0],ct=ut[1],Ot.test(et)||pt(q,"ill-formed tag handle (first argument) of the TAG directive"),N.call(q.tagMap,et)&&pt(q,'there is a previously declared suffix for "'+et+'" tag handle'),Pt.test(ct)||pt(q,"ill-formed tag prefix (second argument) of the TAG directive"),q.tagMap[et]=ct}};function ie(k,q,Q,ut){var et,ct,O,Y;if(q<Q){if(Y=k.input.slice(q,Q),ut)for(et=0,ct=Y.length;et<ct;et+=1)O=Y.charCodeAt(et),O===9||32<=O&&O<=1114111||pt(k,"expected valid JSON character");else mt.test(Y)&&pt(k,"the stream contains non-printable characters");k.result+=Y}}function vn(k,q,Q,ut){var et,ct,O,Y;for(v.isObject(Q)||pt(k,"cannot merge mappings; the provided source object is unacceptable"),et=Object.keys(Q),O=0,Y=et.length;O<Y;O+=1)ct=et[O],N.call(q,ct)||(q[ct]=Q[ct],ut[ct]=!0)}function le(k,q,Q,ut,et,ct,O,Y){var K,at;if(Array.isArray(et))for(et=Array.prototype.slice.call(et),K=0,at=et.length;K<at;K+=1)Array.isArray(et[K])&&pt(k,"nested arrays are not supported inside keys"),typeof et=="object"&&$t(et[K])==="[object Object]"&&(et[K]="[object Object]");if(typeof et=="object"&&$t(et)==="[object Object]"&&(et="[object Object]"),et=String(et),q===null&&(q={}),ut==="tag:yaml.org,2002:merge")if(Array.isArray(ct))for(K=0,at=ct.length;K<at;K+=1)vn(k,q,ct[K],Q);else vn(k,q,ct,Q);else!k.json&&!N.call(Q,et)&&N.call(q,et)&&(k.line=O||k.line,k.position=Y||k.position,pt(k,"duplicated mapping key")),q[et]=ct,delete Q[et];return q}function be(k){var q;q=k.input.charCodeAt(k.position),q===10?k.position++:q===13?(k.position++,k.input.charCodeAt(k.position)===10&&k.position++):pt(k,"a line break is expected"),k.line+=1,k.lineStart=k.position}function jt(k,q,Q){for(var ut=0,et=k.input.charCodeAt(k.position);et!==0;){for(;Ut(et);)et=k.input.charCodeAt(++k.position);if(q&&et===35)do et=k.input.charCodeAt(++k.position);while(et!==10&&et!==13&&et!==0);if(Rt(et))for(be(k),et=k.input.charCodeAt(k.position),ut++,k.lineIndent=0;et===32;)k.lineIndent++,et=k.input.charCodeAt(++k.position);else break}return Q!==-1&&ut!==0&&k.lineIndent<Q&&Qt(k,"deficient indentation"),ut}function Se(k){var q=k.position,Q;return Q=k.input.charCodeAt(q),!!((Q===45||Q===46)&&Q===k.input.charCodeAt(q+1)&&Q===k.input.charCodeAt(q+2)&&(q+=3,Q=k.input.charCodeAt(q),Q===0||Ft(Q)))}function Ge(k,q){q===1?k.result+=" ":q>1&&(k.result+=v.repeat(`
`,q-1))}function Pn(k,q,Q){var ut,et,ct,O,Y,K,at,it,X=k.kind,lt=k.result,nt;if(nt=k.input.charCodeAt(k.position),Ft(nt)||ae(nt)||nt===35||nt===38||nt===42||nt===33||nt===124||nt===62||nt===39||nt===34||nt===37||nt===64||nt===96||(nt===63||nt===45)&&(et=k.input.charCodeAt(k.position+1),Ft(et)||Q&&ae(et)))return!1;for(k.kind="scalar",k.result="",ct=O=k.position,Y=!1;nt!==0;){if(nt===58){if(et=k.input.charCodeAt(k.position+1),Ft(et)||Q&&ae(et))break}else if(nt===35){if(ut=k.input.charCodeAt(k.position-1),Ft(ut))break}else{if(k.position===k.lineStart&&Se(k)||Q&&ae(nt))break;if(Rt(nt))if(K=k.line,at=k.lineStart,it=k.lineIndent,jt(k,!1,-1),k.lineIndent>=q){Y=!0,nt=k.input.charCodeAt(k.position);continue}else{k.position=O,k.line=K,k.lineStart=at,k.lineIndent=it;break}}Y&&(ie(k,ct,O,!1),Ge(k,k.line-K),ct=O=k.position,Y=!1),Ut(nt)||(O=k.position+1),nt=k.input.charCodeAt(++k.position)}return ie(k,ct,O,!1),k.result?!0:(k.kind=X,k.result=lt,!1)}function nn(k,q){var Q,ut,et;if(Q=k.input.charCodeAt(k.position),Q!==39)return!1;for(k.kind="scalar",k.result="",k.position++,ut=et=k.position;(Q=k.input.charCodeAt(k.position))!==0;)if(Q===39)if(ie(k,ut,k.position,!0),Q=k.input.charCodeAt(++k.position),Q===39)ut=k.position,k.position++,et=k.position;else return!0;else Rt(Q)?(ie(k,ut,et,!0),Ge(k,jt(k,!1,q)),ut=et=k.position):k.position===k.lineStart&&Se(k)?pt(k,"unexpected end of the document within a single quoted scalar"):(k.position++,et=k.position);pt(k,"unexpected end of the stream within a single quoted scalar")}function rn(k,q){var Q,ut,et,ct,O,Y;if(Y=k.input.charCodeAt(k.position),Y!==34)return!1;for(k.kind="scalar",k.result="",k.position++,Q=ut=k.position;(Y=k.input.charCodeAt(k.position))!==0;){if(Y===34)return ie(k,Q,k.position,!0),k.position++,!0;if(Y===92){if(ie(k,Q,k.position,!0),Y=k.input.charCodeAt(++k.position),Rt(Y))jt(k,!1,q);else if(Y<256&&Vt[Y])k.result+=Xt[Y],k.position++;else if((O=$e(Y))>0){for(et=O,ct=0;et>0;et--)Y=k.input.charCodeAt(++k.position),(O=en(Y))>=0?ct=(ct<<4)+O:pt(k,"expected hexadecimal character");k.result+=Nt(ct),k.position++}else pt(k,"unknown escape sequence");Q=ut=k.position}else Rt(Y)?(ie(k,Q,ut,!0),Ge(k,jt(k,!1,q)),Q=ut=k.position):k.position===k.lineStart&&Se(k)?pt(k,"unexpected end of the document within a double quoted scalar"):(k.position++,ut=k.position)}pt(k,"unexpected end of the stream within a double quoted scalar")}function Tn(k,q){var Q=!0,ut,et=k.tag,ct,O=k.anchor,Y,K,at,it,X,lt={},nt,ft,_t,wt;if(wt=k.input.charCodeAt(k.position),wt===91)K=93,X=!1,ct=[];else if(wt===123)K=125,X=!0,ct={};else return!1;for(k.anchor!==null&&(k.anchorMap[k.anchor]=ct),wt=k.input.charCodeAt(++k.position);wt!==0;){if(jt(k,!0,q),wt=k.input.charCodeAt(k.position),wt===K)return k.position++,k.tag=et,k.anchor=O,k.kind=X?"mapping":"sequence",k.result=ct,!0;Q||pt(k,"missed comma between flow collection entries"),ft=nt=_t=null,at=it=!1,wt===63&&(Y=k.input.charCodeAt(k.position+1),Ft(Y)&&(at=it=!0,k.position++,jt(k,!0,q))),ut=k.line,_e(k,q,R,!1,!0),ft=k.tag,nt=k.result,jt(k,!0,q),wt=k.input.charCodeAt(k.position),(it||k.line===ut)&&wt===58&&(at=!0,wt=k.input.charCodeAt(++k.position),jt(k,!0,q),_e(k,q,R,!1,!0),_t=k.result),X?le(k,ct,lt,ft,nt,_t):at?ct.push(le(k,null,lt,ft,nt,_t)):ct.push(nt),jt(k,!0,q),wt=k.input.charCodeAt(k.position),wt===44?(Q=!0,wt=k.input.charCodeAt(++k.position)):Q=!1}pt(k,"unexpected end of the stream within a flow collection")}function fe(k,q){var Q,ut,et=W,ct=!1,O=!1,Y=q,K=0,at=!1,it,X;if(X=k.input.charCodeAt(k.position),X===124)ut=!1;else if(X===62)ut=!0;else return!1;for(k.kind="scalar",k.result="";X!==0;)if(X=k.input.charCodeAt(++k.position),X===43||X===45)W===et?et=X===43?ot:st:pt(k,"repeat of a chomping mode identifier");else if((it=Je(X))>=0)it===0?pt(k,"bad explicit indentation width of a block scalar; it cannot be less than one"):O?pt(k,"repeat of an indentation width identifier"):(Y=q+it-1,O=!0);else break;if(Ut(X)){do X=k.input.charCodeAt(++k.position);while(Ut(X));if(X===35)do X=k.input.charCodeAt(++k.position);while(!Rt(X)&&X!==0)}for(;X!==0;){for(be(k),k.lineIndent=0,X=k.input.charCodeAt(k.position);(!O||k.lineIndent<Y)&&X===32;)k.lineIndent++,X=k.input.charCodeAt(++k.position);if(!O&&k.lineIndent>Y&&(Y=k.lineIndent),Rt(X)){K++;continue}if(k.lineIndent<Y){et===ot?k.result+=v.repeat(`
`,ct?1+K:K):et===W&&ct&&(k.result+=`
`);break}for(ut?Ut(X)?(at=!0,k.result+=v.repeat(`
`,ct?1+K:K)):at?(at=!1,k.result+=v.repeat(`
`,K+1)):K===0?ct&&(k.result+=" "):k.result+=v.repeat(`
`,K):k.result+=v.repeat(`
`,ct?1+K:K),ct=!0,O=!0,K=0,Q=k.position;!Rt(X)&&X!==0;)X=k.input.charCodeAt(++k.position);ie(k,Q,k.position,!1)}return!0}function ke(k,q){var Q,ut=k.tag,et=k.anchor,ct=[],O,Y=!1,K;for(k.anchor!==null&&(k.anchorMap[k.anchor]=ct),K=k.input.charCodeAt(k.position);K!==0&&!(K!==45||(O=k.input.charCodeAt(k.position+1),!Ft(O)));){if(Y=!0,k.position++,jt(k,!0,-1)&&k.lineIndent<=q){ct.push(null),K=k.input.charCodeAt(k.position);continue}if(Q=k.line,_e(k,q,F,!1,!0),ct.push(k.result),jt(k,!0,-1),K=k.input.charCodeAt(k.position),(k.line===Q||k.lineIndent>q)&&K!==0)pt(k,"bad indentation of a sequence entry");else if(k.lineIndent<q)break}return Y?(k.tag=ut,k.anchor=et,k.kind="sequence",k.result=ct,!0):!1}function nr(k,q,Q){var ut,et,ct,O,Y=k.tag,K=k.anchor,at={},it={},X=null,lt=null,nt=null,ft=!1,_t=!1,wt;for(k.anchor!==null&&(k.anchorMap[k.anchor]=at),wt=k.input.charCodeAt(k.position);wt!==0;){if(ut=k.input.charCodeAt(k.position+1),ct=k.line,O=k.position,(wt===63||wt===58)&&Ft(ut))wt===63?(ft&&(le(k,at,it,X,lt,null),X=lt=nt=null),_t=!0,ft=!0,et=!0):ft?(ft=!1,et=!0):pt(k,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),k.position+=1,wt=ut;else if(_e(k,Q,P,!1,!0))if(k.line===ct){for(wt=k.input.charCodeAt(k.position);Ut(wt);)wt=k.input.charCodeAt(++k.position);if(wt===58)wt=k.input.charCodeAt(++k.position),Ft(wt)||pt(k,"a whitespace character is expected after the key-value separator within a block mapping"),ft&&(le(k,at,it,X,lt,null),X=lt=nt=null),_t=!0,ft=!1,et=!1,X=k.tag,lt=k.result;else if(_t)pt(k,"can not read an implicit mapping pair; a colon is missed");else return k.tag=Y,k.anchor=K,!0}else if(_t)pt(k,"can not read a block mapping entry; a multiline key may not be an implicit key");else return k.tag=Y,k.anchor=K,!0;else break;if((k.line===ct||k.lineIndent>q)&&(_e(k,q,H,!0,et)&&(ft?lt=k.result:nt=k.result),ft||(le(k,at,it,X,lt,nt,ct,O),X=lt=nt=null),jt(k,!0,-1),wt=k.input.charCodeAt(k.position)),k.lineIndent>q&&wt!==0)pt(k,"bad indentation of a mapping entry");else if(k.lineIndent<q)break}return ft&&le(k,at,it,X,lt,null),_t&&(k.tag=Y,k.anchor=K,k.kind="mapping",k.result=at),_t}function Te(k){var q,Q=!1,ut=!1,et,ct,O;if(O=k.input.charCodeAt(k.position),O!==33)return!1;if(k.tag!==null&&pt(k,"duplication of a tag property"),O=k.input.charCodeAt(++k.position),O===60?(Q=!0,O=k.input.charCodeAt(++k.position)):O===33?(ut=!0,et="!!",O=k.input.charCodeAt(++k.position)):et="!",q=k.position,Q){do O=k.input.charCodeAt(++k.position);while(O!==0&&O!==62);k.position<k.length?(ct=k.input.slice(q,k.position),O=k.input.charCodeAt(++k.position)):pt(k,"unexpected end of the stream within a verbatim tag")}else{for(;O!==0&&!Ft(O);)O===33&&(ut?pt(k,"tag suffix cannot contain exclamation marks"):(et=k.input.slice(q-1,k.position+1),Ot.test(et)||pt(k,"named tag handle cannot contain such characters"),ut=!0,q=k.position+1)),O=k.input.charCodeAt(++k.position);ct=k.input.slice(q,k.position),Tt.test(ct)&&pt(k,"tag suffix cannot contain flow indicator characters")}return ct&&!Pt.test(ct)&&pt(k,"tag name cannot contain such characters: "+ct),Q?k.tag=ct:N.call(k.tagMap,et)?k.tag=k.tagMap[et]+ct:et==="!"?k.tag="!"+ct:et==="!!"?k.tag="tag:yaml.org,2002:"+ct:pt(k,'undeclared tag handle "'+et+'"'),!0}function In(k){var q,Q;if(Q=k.input.charCodeAt(k.position),Q!==38)return!1;for(k.anchor!==null&&pt(k,"duplication of an anchor property"),Q=k.input.charCodeAt(++k.position),q=k.position;Q!==0&&!Ft(Q)&&!ae(Q);)Q=k.input.charCodeAt(++k.position);return k.position===q&&pt(k,"name of an anchor node must contain at least one character"),k.anchor=k.input.slice(q,k.position),!0}function zn(k){var q,Q,ut;if(ut=k.input.charCodeAt(k.position),ut!==42)return!1;for(ut=k.input.charCodeAt(++k.position),q=k.position;ut!==0&&!Ft(ut)&&!ae(ut);)ut=k.input.charCodeAt(++k.position);return k.position===q&&pt(k,"name of an alias node must contain at least one character"),Q=k.input.slice(q,k.position),N.call(k.anchorMap,Q)||pt(k,'unidentified alias "'+Q+'"'),k.result=k.anchorMap[Q],jt(k,!0,-1),!0}function _e(k,q,Q,ut,et){var ct,O,Y,K=1,at=!1,it=!1,X,lt,nt,ft,_t;if(k.listener!==null&&k.listener("open",k),k.tag=null,k.anchor=null,k.kind=null,k.result=null,ct=O=Y=H===Q||F===Q,ut&&jt(k,!0,-1)&&(at=!0,k.lineIndent>q?K=1:k.lineIndent===q?K=0:k.lineIndent<q&&(K=-1)),K===1)for(;Te(k)||In(k);)jt(k,!0,-1)?(at=!0,Y=ct,k.lineIndent>q?K=1:k.lineIndent===q?K=0:k.lineIndent<q&&(K=-1)):Y=!1;if(Y&&(Y=at||et),(K===1||H===Q)&&(R===Q||P===Q?ft=q:ft=q+1,_t=k.position-k.lineStart,K===1?Y&&(ke(k,_t)||nr(k,_t,ft))||Tn(k,ft)?it=!0:(O&&fe(k,ft)||nn(k,ft)||rn(k,ft)?it=!0:zn(k)?(it=!0,(k.tag!==null||k.anchor!==null)&&pt(k,"alias node should not have any properties")):Pn(k,ft,R===Q)&&(it=!0,k.tag===null&&(k.tag="?")),k.anchor!==null&&(k.anchorMap[k.anchor]=k.result)):K===0&&(it=Y&&ke(k,_t))),k.tag!==null&&k.tag!=="!")if(k.tag==="?"){for(k.result!==null&&k.kind!=="scalar"&&pt(k,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+k.kind+'"'),X=0,lt=k.implicitTypes.length;X<lt;X+=1)if(nt=k.implicitTypes[X],nt.resolve(k.result)){k.result=nt.construct(k.result),k.tag=nt.tag,k.anchor!==null&&(k.anchorMap[k.anchor]=k.result);break}}else N.call(k.typeMap[k.kind||"fallback"],k.tag)?(nt=k.typeMap[k.kind||"fallback"][k.tag],k.result!==null&&nt.kind!==k.kind&&pt(k,"unacceptable node kind for !<"+k.tag+'> tag; it should be "'+nt.kind+'", not "'+k.kind+'"'),nt.resolve(k.result)?(k.result=nt.construct(k.result),k.anchor!==null&&(k.anchorMap[k.anchor]=k.result)):pt(k,"cannot resolve a node with !<"+k.tag+"> explicit tag")):pt(k,"unknown tag !<"+k.tag+">");return k.listener!==null&&k.listener("close",k),k.tag!==null||k.anchor!==null||it}function pe(k){var q=k.position,Q,ut,et,ct=!1,O;for(k.version=null,k.checkLineBreaks=k.legacy,k.tagMap={},k.anchorMap={};(O=k.input.charCodeAt(k.position))!==0&&(jt(k,!0,-1),O=k.input.charCodeAt(k.position),!(k.lineIndent>0||O!==37));){for(ct=!0,O=k.input.charCodeAt(++k.position),Q=k.position;O!==0&&!Ft(O);)O=k.input.charCodeAt(++k.position);for(ut=k.input.slice(Q,k.position),et=[],ut.length<1&&pt(k,"directive name must not be less than one character in length");O!==0;){for(;Ut(O);)O=k.input.charCodeAt(++k.position);if(O===35){do O=k.input.charCodeAt(++k.position);while(O!==0&&!Rt(O));break}if(Rt(O))break;for(Q=k.position;O!==0&&!Ft(O);)O=k.input.charCodeAt(++k.position);et.push(k.input.slice(Q,k.position))}O!==0&&be(k),N.call(de,ut)?de[ut](k,ut,et):Qt(k,'unknown document directive "'+ut+'"')}if(jt(k,!0,-1),k.lineIndent===0&&k.input.charCodeAt(k.position)===45&&k.input.charCodeAt(k.position+1)===45&&k.input.charCodeAt(k.position+2)===45?(k.position+=3,jt(k,!0,-1)):ct&&pt(k,"directives end mark is expected"),_e(k,k.lineIndent-1,H,!1,!0),jt(k,!0,-1),k.checkLineBreaks&&ht.test(k.input.slice(q,k.position))&&Qt(k,"non-ASCII line breaks are interpreted as content"),k.documents.push(k.result),k.position===k.lineStart&&Se(k)){k.input.charCodeAt(k.position)===46&&(k.position+=3,jt(k,!0,-1));return}if(k.position<k.length-1)pt(k,"end of the stream or a document separator is expected");else return}function Xe(k,q){k=String(k),q=q||{},k.length!==0&&(k.charCodeAt(k.length-1)!==10&&k.charCodeAt(k.length-1)!==13&&(k+=`
`),k.charCodeAt(0)===65279&&(k=k.slice(1)));var Q=new Yt(k,q),ut=k.indexOf("\0");for(ut!==-1&&(Q.position=ut,pt(Q,"null byte is not allowed in input")),Q.input+="\0";Q.input.charCodeAt(Q.position)===32;)Q.lineIndent+=1,Q.position+=1;for(;Q.position<Q.length-1;)pe(Q);return Q.documents}function sn(k,q,Q){q!==null&&typeof q=="object"&&typeof Q>"u"&&(Q=q,q=null);var ut=Xe(k,Q);if(typeof q!="function")return ut;for(var et=0,ct=ut.length;et<ct;et+=1)q(ut[et])}function Hn(k,q){var Q=Xe(k,q);if(Q.length!==0){if(Q.length===1)return Q[0];throw new _("expected a single document in the stream, but found more")}}function an(k,q,Q){return typeof q=="object"&&q!==null&&typeof Q>"u"&&(Q=q,q=null),sn(k,q,v.extend({schema:I},Q))}function rr(k,q){return Hn(k,v.extend({schema:I},q))}s.exports.loadAll=sn,s.exports.load=Hn,s.exports.safeLoadAll=an,s.exports.safeLoad=rr},{"./common":3,"./exception":5,"./mark":7,"./schema/default_full":10,"./schema/default_safe":11}],7:[function(m,s,d){var v=m("./common");function _(S,I,D,N,R){this.name=S,this.buffer=I,this.position=D,this.line=N,this.column=R}_.prototype.getSnippet=function(I,D){var N,R,P,F,H;if(!this.buffer)return null;for(I=I||4,D=D||75,N="",R=this.position;R>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(R-1))===-1;)if(R-=1,this.position-R>D/2-1){N=" ... ",R+=5;break}for(P="",F=this.position;F<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(F))===-1;)if(F+=1,F-this.position>D/2-1){P=" ... ",F-=5;break}return H=this.buffer.slice(R,F),v.repeat(" ",I)+N+H+P+`
`+v.repeat(" ",I+this.position-R+N.length)+"^"},_.prototype.toString=function(I){var D,N="";return this.name&&(N+='in "'+this.name+'" '),N+="at line "+(this.line+1)+", column "+(this.column+1),I||(D=this.getSnippet(),D&&(N+=`:
`+D)),N},s.exports=_},{"./common":3}],8:[function(m,s,d){var v=m("./common"),_=m("./exception"),S=m("./type");function I(R,P,F){var H=[];return R.include.forEach(function(W){F=I(W,P,F)}),R[P].forEach(function(W){F.forEach(function(st,ot){st.tag===W.tag&&st.kind===W.kind&&H.push(ot)}),F.push(W)}),F.filter(function(W,st){return H.indexOf(st)===-1})}function D(){var R={scalar:{},sequence:{},mapping:{},fallback:{}},P,F;function H(W){R[W.kind][W.tag]=R.fallback[W.tag]=W}for(P=0,F=arguments.length;P<F;P+=1)arguments[P].forEach(H);return R}function N(R){this.include=R.include||[],this.implicit=R.implicit||[],this.explicit=R.explicit||[],this.implicit.forEach(function(P){if(P.loadKind&&P.loadKind!=="scalar")throw new _("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=I(this,"implicit",[]),this.compiledExplicit=I(this,"explicit",[]),this.compiledTypeMap=D(this.compiledImplicit,this.compiledExplicit)}N.DEFAULT=null,N.create=function(){var P,F;switch(arguments.length){case 1:P=N.DEFAULT,F=arguments[0];break;case 2:P=arguments[0],F=arguments[1];break;default:throw new _("Wrong number of arguments for Schema.create function")}if(P=v.toArray(P),F=v.toArray(F),!P.every(function(H){return H instanceof N}))throw new _("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!F.every(function(H){return H instanceof S}))throw new _("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new N({include:P,explicit:F})},s.exports=N},{"./common":3,"./exception":5,"./type":14}],9:[function(m,s,d){var v=m("../schema");s.exports=new v({include:[m("./json")]})},{"../schema":8,"./json":13}],10:[function(m,s,d){var v=m("../schema");s.exports=v.DEFAULT=new v({include:[m("./default_safe")],explicit:[m("../type/js/undefined"),m("../type/js/regexp"),m("../type/js/function")]})},{"../schema":8,"../type/js/function":19,"../type/js/regexp":20,"../type/js/undefined":21,"./default_safe":11}],11:[function(m,s,d){var v=m("../schema");s.exports=new v({include:[m("./core")],implicit:[m("../type/timestamp"),m("../type/merge")],explicit:[m("../type/binary"),m("../type/omap"),m("../type/pairs"),m("../type/set")]})},{"../schema":8,"../type/binary":15,"../type/merge":23,"../type/omap":25,"../type/pairs":26,"../type/set":28,"../type/timestamp":30,"./core":9}],12:[function(m,s,d){var v=m("../schema");s.exports=new v({explicit:[m("../type/str"),m("../type/seq"),m("../type/map")]})},{"../schema":8,"../type/map":22,"../type/seq":27,"../type/str":29}],13:[function(m,s,d){var v=m("../schema");s.exports=new v({include:[m("./failsafe")],implicit:[m("../type/null"),m("../type/bool"),m("../type/int"),m("../type/float")]})},{"../schema":8,"../type/bool":16,"../type/float":17,"../type/int":18,"../type/null":24,"./failsafe":12}],14:[function(m,s,d){var v=m("./exception"),_=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],S=["scalar","sequence","mapping"];function I(N){var R={};return N!==null&&Object.keys(N).forEach(function(P){N[P].forEach(function(F){R[String(F)]=P})}),R}function D(N,R){if(R=R||{},Object.keys(R).forEach(function(P){if(_.indexOf(P)===-1)throw new v('Unknown option "'+P+'" is met in definition of "'+N+'" YAML type.')}),this.tag=N,this.kind=R.kind||null,this.resolve=R.resolve||function(){return!0},this.construct=R.construct||function(P){return P},this.instanceOf=R.instanceOf||null,this.predicate=R.predicate||null,this.represent=R.represent||null,this.defaultStyle=R.defaultStyle||null,this.styleAliases=I(R.styleAliases||null),S.indexOf(this.kind)===-1)throw new v('Unknown kind "'+this.kind+'" is specified for "'+N+'" YAML type.')}s.exports=D},{"./exception":5}],15:[function(m,s,d){var v;try{var _=m;v=_("buffer").Buffer}catch{}var S=m("../type"),I=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function D(F){if(F===null)return!1;var H,W,st=0,ot=F.length,mt=I;for(W=0;W<ot;W++)if(H=mt.indexOf(F.charAt(W)),!(H>64)){if(H<0)return!1;st+=6}return st%8===0}function N(F){var H,W,st=F.replace(/[\r\n=]/g,""),ot=st.length,mt=I,ht=0,Tt=[];for(H=0;H<ot;H++)H%4===0&&H&&(Tt.push(ht>>16&255),Tt.push(ht>>8&255),Tt.push(ht&255)),ht=ht<<6|mt.indexOf(st.charAt(H));return W=ot%4*6,W===0?(Tt.push(ht>>16&255),Tt.push(ht>>8&255),Tt.push(ht&255)):W===18?(Tt.push(ht>>10&255),Tt.push(ht>>2&255)):W===12&&Tt.push(ht>>4&255),v?v.from?v.from(Tt):new v(Tt):Tt}function R(F){var H="",W=0,st,ot,mt=F.length,ht=I;for(st=0;st<mt;st++)st%3===0&&st&&(H+=ht[W>>18&63],H+=ht[W>>12&63],H+=ht[W>>6&63],H+=ht[W&63]),W=(W<<8)+F[st];return ot=mt%3,ot===0?(H+=ht[W>>18&63],H+=ht[W>>12&63],H+=ht[W>>6&63],H+=ht[W&63]):ot===2?(H+=ht[W>>10&63],H+=ht[W>>4&63],H+=ht[W<<2&63],H+=ht[64]):ot===1&&(H+=ht[W>>2&63],H+=ht[W<<4&63],H+=ht[64],H+=ht[64]),H}function P(F){return v&&v.isBuffer(F)}s.exports=new S("tag:yaml.org,2002:binary",{kind:"scalar",resolve:D,construct:N,predicate:P,represent:R})},{"../type":14}],16:[function(m,s,d){var v=m("../type");function _(D){if(D===null)return!1;var N=D.length;return N===4&&(D==="true"||D==="True"||D==="TRUE")||N===5&&(D==="false"||D==="False"||D==="FALSE")}function S(D){return D==="true"||D==="True"||D==="TRUE"}function I(D){return Object.prototype.toString.call(D)==="[object Boolean]"}s.exports=new v("tag:yaml.org,2002:bool",{kind:"scalar",resolve:_,construct:S,predicate:I,represent:{lowercase:function(D){return D?"true":"false"},uppercase:function(D){return D?"TRUE":"FALSE"},camelcase:function(D){return D?"True":"False"}},defaultStyle:"lowercase"})},{"../type":14}],17:[function(m,s,d){var v=m("../common"),_=m("../type"),S=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function I(F){return!(F===null||!S.test(F)||F[F.length-1]==="_")}function D(F){var H,W,st,ot;return H=F.replace(/_/g,"").toLowerCase(),W=H[0]==="-"?-1:1,ot=[],"+-".indexOf(H[0])>=0&&(H=H.slice(1)),H===".inf"?W===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:H===".nan"?NaN:H.indexOf(":")>=0?(H.split(":").forEach(function(mt){ot.unshift(parseFloat(mt,10))}),H=0,st=1,ot.forEach(function(mt){H+=mt*st,st*=60}),W*H):W*parseFloat(H,10)}var N=/^[-+]?[0-9]+e/;function R(F,H){var W;if(isNaN(F))switch(H){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===F)switch(H){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===F)switch(H){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(v.isNegativeZero(F))return"-0.0";return W=F.toString(10),N.test(W)?W.replace("e",".e"):W}function P(F){return Object.prototype.toString.call(F)==="[object Number]"&&(F%1!==0||v.isNegativeZero(F))}s.exports=new _("tag:yaml.org,2002:float",{kind:"scalar",resolve:I,construct:D,predicate:P,represent:R,defaultStyle:"lowercase"})},{"../common":3,"../type":14}],18:[function(m,s,d){var v=m("../common"),_=m("../type");function S(F){return 48<=F&&F<=57||65<=F&&F<=70||97<=F&&F<=102}function I(F){return 48<=F&&F<=55}function D(F){return 48<=F&&F<=57}function N(F){if(F===null)return!1;var H=F.length,W=0,st=!1,ot;if(!H)return!1;if(ot=F[W],(ot==="-"||ot==="+")&&(ot=F[++W]),ot==="0"){if(W+1===H)return!0;if(ot=F[++W],ot==="b"){for(W++;W<H;W++)if(ot=F[W],ot!=="_"){if(ot!=="0"&&ot!=="1")return!1;st=!0}return st&&ot!=="_"}if(ot==="x"){for(W++;W<H;W++)if(ot=F[W],ot!=="_"){if(!S(F.charCodeAt(W)))return!1;st=!0}return st&&ot!=="_"}for(;W<H;W++)if(ot=F[W],ot!=="_"){if(!I(F.charCodeAt(W)))return!1;st=!0}return st&&ot!=="_"}if(ot==="_")return!1;for(;W<H;W++)if(ot=F[W],ot!=="_"){if(ot===":")break;if(!D(F.charCodeAt(W)))return!1;st=!0}return!st||ot==="_"?!1:ot!==":"?!0:/^(:[0-5]?[0-9])+$/.test(F.slice(W))}function R(F){var H=F,W=1,st,ot,mt=[];return H.indexOf("_")!==-1&&(H=H.replace(/_/g,"")),st=H[0],(st==="-"||st==="+")&&(st==="-"&&(W=-1),H=H.slice(1),st=H[0]),H==="0"?0:st==="0"?H[1]==="b"?W*parseInt(H.slice(2),2):H[1]==="x"?W*parseInt(H,16):W*parseInt(H,8):H.indexOf(":")!==-1?(H.split(":").forEach(function(ht){mt.unshift(parseInt(ht,10))}),H=0,ot=1,mt.forEach(function(ht){H+=ht*ot,ot*=60}),W*H):W*parseInt(H,10)}function P(F){return Object.prototype.toString.call(F)==="[object Number]"&&F%1===0&&!v.isNegativeZero(F)}s.exports=new _("tag:yaml.org,2002:int",{kind:"scalar",resolve:N,construct:R,predicate:P,represent:{binary:function(F){return F>=0?"0b"+F.toString(2):"-0b"+F.toString(2).slice(1)},octal:function(F){return F>=0?"0"+F.toString(8):"-0"+F.toString(8).slice(1)},decimal:function(F){return F.toString(10)},hexadecimal:function(F){return F>=0?"0x"+F.toString(16).toUpperCase():"-0x"+F.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},{"../common":3,"../type":14}],19:[function(m,s,d){var v;try{var _=m;v=_("esprima")}catch{typeof window<"u"&&(v=window.esprima)}var S=m("../../type");function I(P){if(P===null)return!1;try{var F="("+P+")",H=v.parse(F,{range:!0});return!(H.type!=="Program"||H.body.length!==1||H.body[0].type!=="ExpressionStatement"||H.body[0].expression.type!=="ArrowFunctionExpression"&&H.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function D(P){var F="("+P+")",H=v.parse(F,{range:!0}),W=[],st;if(H.type!=="Program"||H.body.length!==1||H.body[0].type!=="ExpressionStatement"||H.body[0].expression.type!=="ArrowFunctionExpression"&&H.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return H.body[0].expression.params.forEach(function(ot){W.push(ot.name)}),st=H.body[0].expression.body.range,H.body[0].expression.body.type==="BlockStatement"?new Function(W,F.slice(st[0]+1,st[1]-1)):new Function(W,"return "+F.slice(st[0],st[1]))}function N(P){return P.toString()}function R(P){return Object.prototype.toString.call(P)==="[object Function]"}s.exports=new S("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:I,construct:D,predicate:R,represent:N})},{"../../type":14}],20:[function(m,s,d){var v=m("../../type");function _(N){if(N===null||N.length===0)return!1;var R=N,P=/\/([gim]*)$/.exec(N),F="";return!(R[0]==="/"&&(P&&(F=P[1]),F.length>3||R[R.length-F.length-1]!=="/"))}function S(N){var R=N,P=/\/([gim]*)$/.exec(N),F="";return R[0]==="/"&&(P&&(F=P[1]),R=R.slice(1,R.length-F.length-1)),new RegExp(R,F)}function I(N){var R="/"+N.source+"/";return N.global&&(R+="g"),N.multiline&&(R+="m"),N.ignoreCase&&(R+="i"),R}function D(N){return Object.prototype.toString.call(N)==="[object RegExp]"}s.exports=new v("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:_,construct:S,predicate:D,represent:I})},{"../../type":14}],21:[function(m,s,d){var v=m("../../type");function _(){return!0}function S(){}function I(){return""}function D(N){return typeof N>"u"}s.exports=new v("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:_,construct:S,predicate:D,represent:I})},{"../../type":14}],22:[function(m,s,d){var v=m("../type");s.exports=new v("tag:yaml.org,2002:map",{kind:"mapping",construct:function(_){return _!==null?_:{}}})},{"../type":14}],23:[function(m,s,d){var v=m("../type");function _(S){return S==="<<"||S===null}s.exports=new v("tag:yaml.org,2002:merge",{kind:"scalar",resolve:_})},{"../type":14}],24:[function(m,s,d){var v=m("../type");function _(D){if(D===null)return!0;var N=D.length;return N===1&&D==="~"||N===4&&(D==="null"||D==="Null"||D==="NULL")}function S(){return null}function I(D){return D===null}s.exports=new v("tag:yaml.org,2002:null",{kind:"scalar",resolve:_,construct:S,predicate:I,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"})},{"../type":14}],25:[function(m,s,d){var v=m("../type"),_=Object.prototype.hasOwnProperty,S=Object.prototype.toString;function I(N){if(N===null)return!0;var R=[],P,F,H,W,st,ot=N;for(P=0,F=ot.length;P<F;P+=1){if(H=ot[P],st=!1,S.call(H)!=="[object Object]")return!1;for(W in H)if(_.call(H,W))if(!st)st=!0;else return!1;if(!st)return!1;if(R.indexOf(W)===-1)R.push(W);else return!1}return!0}function D(N){return N!==null?N:[]}s.exports=new v("tag:yaml.org,2002:omap",{kind:"sequence",resolve:I,construct:D})},{"../type":14}],26:[function(m,s,d){var v=m("../type"),_=Object.prototype.toString;function S(D){if(D===null)return!0;var N,R,P,F,H,W=D;for(H=new Array(W.length),N=0,R=W.length;N<R;N+=1){if(P=W[N],_.call(P)!=="[object Object]"||(F=Object.keys(P),F.length!==1))return!1;H[N]=[F[0],P[F[0]]]}return!0}function I(D){if(D===null)return[];var N,R,P,F,H,W=D;for(H=new Array(W.length),N=0,R=W.length;N<R;N+=1)P=W[N],F=Object.keys(P),H[N]=[F[0],P[F[0]]];return H}s.exports=new v("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:S,construct:I})},{"../type":14}],27:[function(m,s,d){var v=m("../type");s.exports=new v("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(_){return _!==null?_:[]}})},{"../type":14}],28:[function(m,s,d){var v=m("../type"),_=Object.prototype.hasOwnProperty;function S(D){if(D===null)return!0;var N,R=D;for(N in R)if(_.call(R,N)&&R[N]!==null)return!1;return!0}function I(D){return D!==null?D:{}}s.exports=new v("tag:yaml.org,2002:set",{kind:"mapping",resolve:S,construct:I})},{"../type":14}],29:[function(m,s,d){var v=m("../type");s.exports=new v("tag:yaml.org,2002:str",{kind:"scalar",construct:function(_){return _!==null?_:""}})},{"../type":14}],30:[function(m,s,d){var v=m("../type"),_=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),S=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function I(R){return R===null?!1:_.exec(R)!==null||S.exec(R)!==null}function D(R){var P,F,H,W,st,ot,mt,ht=0,Tt=null,Ot,Pt,$t;if(P=_.exec(R),P===null&&(P=S.exec(R)),P===null)throw new Error("Date resolve error");if(F=+P[1],H=+P[2]-1,W=+P[3],!P[4])return new Date(Date.UTC(F,H,W));if(st=+P[4],ot=+P[5],mt=+P[6],P[7]){for(ht=P[7].slice(0,3);ht.length<3;)ht+="0";ht=+ht}return P[9]&&(Ot=+P[10],Pt=+(P[11]||0),Tt=(Ot*60+Pt)*6e4,P[9]==="-"&&(Tt=-Tt)),$t=new Date(Date.UTC(F,H,W,st,ot,mt,ht)),Tt&&$t.setTime($t.getTime()-Tt),$t}function N(R){return R.toISOString()}s.exports=new v("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:I,construct:D,instanceOf:Date,represent:N})},{"../type":14}]},{},[1]);function nodeToJSL(m){if(m.nodeType===document.TEXT_NODE||m.nodeType===document.COMMENT_NODE){let s=m.textContent.replace(/\n/g," ").replace(/\t/g," ").replace(/\s\s+/g," ").trim();return s===""?void 0:`"${s}"`}else{let s=m.getAttributeNames(),d={};for(let S=0;S<s.length;S++)m.getAttribute(s[S])!=="undefined"&&(d[s[S]]=m.getAttribute(s[S]));let v=[];for(let S=0;S<m.childNodes.length;S++)nodeToJSL(m.childNodes[S])&&v.push(nodeToJSL(m.childNodes[S]));let _=m.tagName.replace(/\-/g,"_");return formatJSLResult(_,d,v)}}function tab(m){let s=m.replace(/\n/g,`
	`);return s[0]!==`
`&&(s=`	${s}`),s}function getAttrsAsString(m){return Object.keys(m).length>3?JSON.stringify(m,null,2):JSON.stringify(m)}function getArgsString(m){let s="";for(let d=0;d<m.length;d++)s+=`${m[d]}`,d!==m.length-1&&(s+=`,
`);return s}function formatJSLResult(m,s,d){let v=getAttrsAsString(s),_=getArgsString(d),S=/\n/.test(_),I,D=!1,N=v!=="{}";return N?((v.indexOf(`
`)!=-1||v.length>50)&&(D=!0),D?I=`
${tab(v)}${d.length?",":""}`:I=`${v}${d.length?",":""}`):I="",`${m}( ${I}${S?`
${tab(_)}
`:`${N?" ":""}${_}`} )`}const methods$1={},names=[];function registerMethods(m,s){if(Array.isArray(m)){for(const d of m)registerMethods(d,s);return}if(typeof m=="object"){for(const d in m)registerMethods(d,m[d]);return}addMethodNames(Object.getOwnPropertyNames(s)),methods$1[m]=Object.assign(methods$1[m]||{},s)}function getMethodsFor(m){return methods$1[m]||{}}function getMethodNames(){return[...new Set(names)]}function addMethodNames(m){names.push(...m)}function map(m,s){let d;const v=m.length,_=[];for(d=0;d<v;d++)_.push(s(m[d]));return _}function filter(m,s){let d;const v=m.length,_=[];for(d=0;d<v;d++)s(m[d])&&_.push(m[d]);return _}function radians(m){return m%360*Math.PI/180}function camelCase(m){return m.toLowerCase().replace(/-(.)/g,function(s,d){return d.toUpperCase()})}function unCamelCase(m){return m.replace(/([A-Z])/g,function(s,d){return"-"+d.toLowerCase()})}function capitalize(m){return m.charAt(0).toUpperCase()+m.slice(1)}function proportionalSize(m,s,d,v){return(s==null||d==null)&&(v=v||m.bbox(),s==null?s=v.width/v.height*d:d==null&&(d=v.height/v.width*s)),{width:s,height:d}}function getOrigin(m,s){const d=m.origin;let v=m.ox!=null?m.ox:m.originX!=null?m.originX:"center",_=m.oy!=null?m.oy:m.originY!=null?m.originY:"center";d!=null&&([v,_]=Array.isArray(d)?d:typeof d=="object"?[d.x,d.y]:[d,d]);const S=typeof v=="string",I=typeof _=="string";if(S||I){const{height:D,width:N,x:R,y:P}=s.bbox();S&&(v=v.includes("left")?R:v.includes("right")?R+N:R+N/2),I&&(_=_.includes("top")?P:_.includes("bottom")?P+D:P+D/2)}return[v,_]}const svg="http://www.w3.org/2000/svg",html$1="http://www.w3.org/1999/xhtml",xmlns="http://www.w3.org/2000/xmlns/",xlink="http://www.w3.org/1999/xlink",svgjs="http://svgjs.dev/svgjs",globals={window:typeof window>"u"?null:window,document:typeof document>"u"?null:document};class Base{}const elements={},root="___SYMBOL___ROOT___";function create(m,s=svg){return globals.document.createElementNS(s,m)}function makeInstance(m,s=!1){if(m instanceof Base)return m;if(typeof m=="object")return adopter(m);if(m==null)return new elements[root];if(typeof m=="string"&&m.charAt(0)!=="<")return adopter(globals.document.querySelector(m));const d=s?globals.document.createElement("div"):create("svg");return d.innerHTML=m,m=adopter(d.firstChild),d.removeChild(d.firstChild),m}function nodeOrNew(m,s){return s&&s.ownerDocument&&s instanceof s.ownerDocument.defaultView.Node?s:create(m)}function adopt(m){if(!m)return null;if(m.instance instanceof Base)return m.instance;if(m.nodeName==="#document-fragment")return new elements.Fragment(m);let s=capitalize(m.nodeName||"Dom");return s==="LinearGradient"||s==="RadialGradient"?s="Gradient":elements[s]||(s="Dom"),new elements[s](m)}let adopter=adopt;function register(m,s=m.name,d=!1){return elements[s]=m,d&&(elements[root]=m),addMethodNames(Object.getOwnPropertyNames(m.prototype)),m}function getClass(m){return elements[m]}let did=1e3;function eid(m){return"Svgjs"+capitalize(m)+did++}function assignNewId(m){for(let s=m.children.length-1;s>=0;s--)assignNewId(m.children[s]);return m.id&&(m.id=eid(m.nodeName)),m}function extend(m,s){let d,v;for(m=Array.isArray(m)?m:[m],v=m.length-1;v>=0;v--)for(d in s)m[v].prototype[d]=s[d]}function wrapWithAttrCheck(m){return function(...s){const d=s[s.length-1];return d&&d.constructor===Object&&!(d instanceof Array)?m.apply(this,s.slice(0,-1)).attr(d):m.apply(this,s)}}function siblings(){return this.parent().children()}function position(){return this.parent().index(this)}function next(){return this.siblings()[this.position()+1]}function prev(){return this.siblings()[this.position()-1]}function forward(){const m=this.position();return this.parent().add(this.remove(),m+1),this}function backward(){const m=this.position();return this.parent().add(this.remove(),m?m-1:0),this}function front(){return this.parent().add(this.remove()),this}function back(){return this.parent().add(this.remove(),0),this}function before(m){m=makeInstance(m),m.remove();const s=this.position();return this.parent().add(m,s),this}function after(m){m=makeInstance(m),m.remove();const s=this.position();return this.parent().add(m,s+1),this}function insertBefore(m){return m=makeInstance(m),m.before(this),this}function insertAfter(m){return m=makeInstance(m),m.after(this),this}registerMethods("Dom",{siblings,position,next,prev,forward,backward,front,back,before,after,insertBefore,insertAfter});const numberAndUnit=/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb=/rgb\((\d+),(\d+),(\d+)\)/,reference=/(#[a-z_][a-z0-9\-_]*)/i,transforms=/\)\s*,?\s*/,whitespace=/\s/g,isHex=/^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i,isRgb=/^rgb\(/,isBlank=/^(\s+)?$/,isNumber=/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isImage=/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter=/[\s,]+/,isPathLetter=/[MLHVCSQTAZ]/i;function classes(){const m=this.attr("class");return m==null?[]:m.trim().split(delimiter)}function hasClass(m){return this.classes().indexOf(m)!==-1}function addClass(m){if(!this.hasClass(m)){const s=this.classes();s.push(m),this.attr("class",s.join(" "))}return this}function removeClass(m){return this.hasClass(m)&&this.attr("class",this.classes().filter(function(s){return s!==m}).join(" ")),this}function toggleClass(m){return this.hasClass(m)?this.removeClass(m):this.addClass(m)}registerMethods("Dom",{classes,hasClass,addClass,removeClass,toggleClass});function css(m,s){const d={};if(arguments.length===0)return this.node.style.cssText.split(/\s*;\s*/).filter(function(v){return!!v.length}).forEach(function(v){const _=v.split(/\s*:\s*/);d[_[0]]=_[1]}),d;if(arguments.length<2){if(Array.isArray(m)){for(const v of m){const _=camelCase(v);d[v]=this.node.style[_]}return d}if(typeof m=="string")return this.node.style[camelCase(m)];if(typeof m=="object")for(const v in m)this.node.style[camelCase(v)]=m[v]==null||isBlank.test(m[v])?"":m[v]}return arguments.length===2&&(this.node.style[camelCase(m)]=s==null||isBlank.test(s)?"":s),this}function show(){return this.css("display","")}function hide(){return this.css("display","none")}function visible(){return this.css("display")!=="none"}registerMethods("Dom",{css,show,hide,visible});function data(m,s,d){if(m==null)return this.data(map(filter(this.node.attributes,v=>v.nodeName.indexOf("data-")===0),v=>v.nodeName.slice(5)));if(m instanceof Array){const v={};for(const _ of m)v[_]=this.data(_);return v}else if(typeof m=="object")for(s in m)this.data(s,m[s]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+m))}catch{return this.attr("data-"+m)}else this.attr("data-"+m,s===null?null:d===!0||typeof s=="string"||typeof s=="number"?s:JSON.stringify(s));return this}registerMethods("Dom",{data});function remember(m,s){if(typeof arguments[0]=="object")for(const d in m)this.remember(d,m[d]);else{if(arguments.length===1)return this.memory()[m];this.memory()[m]=s}return this}function forget(){if(arguments.length===0)this._memory={};else for(let m=arguments.length-1;m>=0;m--)delete this.memory()[arguments[m]];return this}function memory(){return this._memory=this._memory||{}}registerMethods("Dom",{remember,forget,memory});function sixDigitHex(m){return m.length===4?["#",m.substring(1,2),m.substring(1,2),m.substring(2,3),m.substring(2,3),m.substring(3,4),m.substring(3,4)].join(""):m}function componentHex(m){const s=Math.round(m),v=Math.max(0,Math.min(255,s)).toString(16);return v.length===1?"0"+v:v}function is(m,s){for(let d=s.length;d--;)if(m[s[d]]==null)return!1;return!0}function getParameters(m,s){const d=is(m,"rgb")?{_a:m.r,_b:m.g,_c:m.b,_d:0,space:"rgb"}:is(m,"xyz")?{_a:m.x,_b:m.y,_c:m.z,_d:0,space:"xyz"}:is(m,"hsl")?{_a:m.h,_b:m.s,_c:m.l,_d:0,space:"hsl"}:is(m,"lab")?{_a:m.l,_b:m.a,_c:m.b,_d:0,space:"lab"}:is(m,"lch")?{_a:m.l,_b:m.c,_c:m.h,_d:0,space:"lch"}:is(m,"cmyk")?{_a:m.c,_b:m.m,_c:m.y,_d:m.k,space:"cmyk"}:{_a:0,_b:0,_c:0,space:"rgb"};return d.space=s||d.space,d}function cieSpace(m){return m==="lab"||m==="xyz"||m==="lch"}function hueToRgb(m,s,d){return d<0&&(d+=1),d>1&&(d-=1),d<1/6?m+(s-m)*6*d:d<1/2?s:d<2/3?m+(s-m)*(2/3-d)*6:m}class Color{constructor(...s){this.init(...s)}static isColor(s){return s&&(s instanceof Color||this.isRgb(s)||this.test(s))}static isRgb(s){return s&&typeof s.r=="number"&&typeof s.g=="number"&&typeof s.b=="number"}static random(s="vibrant",d,v){const{random:_,round:S,sin:I,PI:D}=Math;if(s==="vibrant"){const N=24*_()+57,R=38*_()+45,P=360*_();return new Color(N,R,P,"lch")}else if(s==="sine"){d=d??_();const N=S(80*I(2*D*d/.5+.01)+150),R=S(50*I(2*D*d/.5+4.6)+200),P=S(100*I(2*D*d/.5+2.3)+150);return new Color(N,R,P)}else if(s==="pastel"){const N=8*_()+86,R=17*_()+9,P=360*_();return new Color(N,R,P,"lch")}else if(s==="dark"){const N=10+10*_(),R=50*_()+86,P=360*_();return new Color(N,R,P,"lch")}else if(s==="rgb"){const N=255*_(),R=255*_(),P=255*_();return new Color(N,R,P)}else if(s==="lab"){const N=100*_(),R=256*_()-128,P=256*_()-128;return new Color(N,R,P,"lab")}else if(s==="grey"){const N=255*_();return new Color(N,N,N)}else throw new Error("Unsupported random color mode")}static test(s){return typeof s=="string"&&(isHex.test(s)||isRgb.test(s))}cmyk(){const{_a:s,_b:d,_c:v}=this.rgb(),[_,S,I]=[s,d,v].map(H=>H/255),D=Math.min(1-_,1-S,1-I);if(D===1)return new Color(0,0,0,1,"cmyk");const N=(1-_-D)/(1-D),R=(1-S-D)/(1-D),P=(1-I-D)/(1-D);return new Color(N,R,P,D,"cmyk")}hsl(){const{_a:s,_b:d,_c:v}=this.rgb(),[_,S,I]=[s,d,v].map(ot=>ot/255),D=Math.max(_,S,I),N=Math.min(_,S,I),R=(D+N)/2,P=D===N,F=D-N,H=P?0:R>.5?F/(2-D-N):F/(D+N),W=P?0:D===_?((S-I)/F+(S<I?6:0))/6:D===S?((I-_)/F+2)/6:D===I?((_-S)/F+4)/6:0;return new Color(360*W,100*H,100*R,"hsl")}init(s=0,d=0,v=0,_=0,S="rgb"){if(s=s||0,this.space)for(const F in this.space)delete this[this.space[F]];if(typeof s=="number")S=typeof _=="string"?_:S,_=typeof _=="string"?0:_,Object.assign(this,{_a:s,_b:d,_c:v,_d:_,space:S});else if(s instanceof Array)this.space=d||(typeof s[3]=="string"?s[3]:s[4])||"rgb",Object.assign(this,{_a:s[0],_b:s[1],_c:s[2],_d:s[3]||0});else if(s instanceof Object){const F=getParameters(s,d);Object.assign(this,F)}else if(typeof s=="string")if(isRgb.test(s)){const F=s.replace(whitespace,""),[H,W,st]=rgb.exec(F).slice(1,4).map(ot=>parseInt(ot));Object.assign(this,{_a:H,_b:W,_c:st,_d:0,space:"rgb"})}else if(isHex.test(s)){const F=ot=>parseInt(ot,16),[,H,W,st]=hex.exec(sixDigitHex(s)).map(F);Object.assign(this,{_a:H,_b:W,_c:st,_d:0,space:"rgb"})}else throw Error("Unsupported string format, can't construct Color");const{_a:I,_b:D,_c:N,_d:R}=this,P=this.space==="rgb"?{r:I,g:D,b:N}:this.space==="xyz"?{x:I,y:D,z:N}:this.space==="hsl"?{h:I,s:D,l:N}:this.space==="lab"?{l:I,a:D,b:N}:this.space==="lch"?{l:I,c:D,h:N}:this.space==="cmyk"?{c:I,m:D,y:N,k:R}:{};Object.assign(this,P)}lab(){const{x:s,y:d,z:v}=this.xyz(),_=116*d-16,S=500*(s-d),I=200*(d-v);return new Color(_,S,I,"lab")}lch(){const{l:s,a:d,b:v}=this.lab(),_=Math.sqrt(d**2+v**2);let S=180*Math.atan2(v,d)/Math.PI;return S<0&&(S*=-1,S=360-S),new Color(s,_,S,"lch")}rgb(){if(this.space==="rgb")return this;if(cieSpace(this.space)){let{x:s,y:d,z:v}=this;if(this.space==="lab"||this.space==="lch"){let{l:W,a:st,b:ot}=this;if(this.space==="lch"){const{c:Rt,h:Ut}=this,Ft=Math.PI/180;st=Rt*Math.cos(Ft*Ut),ot=Rt*Math.sin(Ft*Ut)}const mt=(W+16)/116,ht=st/500+mt,Tt=mt-ot/200,Ot=16/116,Pt=.008856,$t=7.787;s=.95047*(ht**3>Pt?ht**3:(ht-Ot)/$t),d=1*(mt**3>Pt?mt**3:(mt-Ot)/$t),v=1.08883*(Tt**3>Pt?Tt**3:(Tt-Ot)/$t)}const _=s*3.2406+d*-1.5372+v*-.4986,S=s*-.9689+d*1.8758+v*.0415,I=s*.0557+d*-.204+v*1.057,D=Math.pow,N=.0031308,R=_>N?1.055*D(_,1/2.4)-.055:12.92*_,P=S>N?1.055*D(S,1/2.4)-.055:12.92*S,F=I>N?1.055*D(I,1/2.4)-.055:12.92*I;return new Color(255*R,255*P,255*F)}else if(this.space==="hsl"){let{h:s,s:d,l:v}=this;if(s/=360,d/=100,v/=100,d===0)return v*=255,new Color(v,v,v);const _=v<.5?v*(1+d):v+d-v*d,S=2*v-_,I=255*hueToRgb(S,_,s+1/3),D=255*hueToRgb(S,_,s),N=255*hueToRgb(S,_,s-1/3);return new Color(I,D,N)}else if(this.space==="cmyk"){const{c:s,m:d,y:v,k:_}=this,S=255*(1-Math.min(1,s*(1-_)+_)),I=255*(1-Math.min(1,d*(1-_)+_)),D=255*(1-Math.min(1,v*(1-_)+_));return new Color(S,I,D)}else return this}toArray(){const{_a:s,_b:d,_c:v,_d:_,space:S}=this;return[s,d,v,_,S]}toHex(){const[s,d,v]=this._clamped().map(componentHex);return`#${s}${d}${v}`}toRgb(){const[s,d,v]=this._clamped();return`rgb(${s},${d},${v})`}toString(){return this.toHex()}xyz(){const{_a:s,_b:d,_c:v}=this.rgb(),[_,S,I]=[s,d,v].map(ht=>ht/255),D=_>.04045?Math.pow((_+.055)/1.055,2.4):_/12.92,N=S>.04045?Math.pow((S+.055)/1.055,2.4):S/12.92,R=I>.04045?Math.pow((I+.055)/1.055,2.4):I/12.92,P=(D*.4124+N*.3576+R*.1805)/.95047,F=(D*.2126+N*.7152+R*.0722)/1,H=(D*.0193+N*.1192+R*.9505)/1.08883,W=P>.008856?Math.pow(P,1/3):7.787*P+16/116,st=F>.008856?Math.pow(F,1/3):7.787*F+16/116,ot=H>.008856?Math.pow(H,1/3):7.787*H+16/116;return new Color(W,st,ot,"xyz")}_clamped(){const{_a:s,_b:d,_c:v}=this.rgb(),{max:_,min:S,round:I}=Math,D=N=>_(0,S(I(N),255));return[s,d,v].map(D)}}class Point{constructor(...s){this.init(...s)}clone(){return new Point(this)}init(s,d){const v={x:0,y:0},_=Array.isArray(s)?{x:s[0],y:s[1]}:typeof s=="object"?{x:s.x,y:s.y}:{x:s,y:d};return this.x=_.x==null?v.x:_.x,this.y=_.y==null?v.y:_.y,this}toArray(){return[this.x,this.y]}transform(s){return this.clone().transformO(s)}transformO(s){Matrix.isMatrixLike(s)||(s=new Matrix(s));const{x:d,y:v}=this;return this.x=s.a*d+s.c*v+s.e,this.y=s.b*d+s.d*v+s.f,this}}function point(m,s){return new Point(m,s).transformO(this.screenCTM().inverseO())}function closeEnough(m,s,d){return Math.abs(s-m)<(d||1e-6)}class Matrix{constructor(...s){this.init(...s)}static formatTransforms(s){const d=s.flip==="both"||s.flip===!0,v=s.flip&&(d||s.flip==="x")?-1:1,_=s.flip&&(d||s.flip==="y")?-1:1,S=s.skew&&s.skew.length?s.skew[0]:isFinite(s.skew)?s.skew:isFinite(s.skewX)?s.skewX:0,I=s.skew&&s.skew.length?s.skew[1]:isFinite(s.skew)?s.skew:isFinite(s.skewY)?s.skewY:0,D=s.scale&&s.scale.length?s.scale[0]*v:isFinite(s.scale)?s.scale*v:isFinite(s.scaleX)?s.scaleX*v:v,N=s.scale&&s.scale.length?s.scale[1]*_:isFinite(s.scale)?s.scale*_:isFinite(s.scaleY)?s.scaleY*_:_,R=s.shear||0,P=s.rotate||s.theta||0,F=new Point(s.origin||s.around||s.ox||s.originX,s.oy||s.originY),H=F.x,W=F.y,st=new Point(s.position||s.px||s.positionX||NaN,s.py||s.positionY||NaN),ot=st.x,mt=st.y,ht=new Point(s.translate||s.tx||s.translateX,s.ty||s.translateY),Tt=ht.x,Ot=ht.y,Pt=new Point(s.relative||s.rx||s.relativeX,s.ry||s.relativeY),$t=Pt.x,Rt=Pt.y;return{scaleX:D,scaleY:N,skewX:S,skewY:I,shear:R,theta:P,rx:$t,ry:Rt,tx:Tt,ty:Ot,ox:H,oy:W,px:ot,py:mt}}static fromArray(s){return{a:s[0],b:s[1],c:s[2],d:s[3],e:s[4],f:s[5]}}static isMatrixLike(s){return s.a!=null||s.b!=null||s.c!=null||s.d!=null||s.e!=null||s.f!=null}static matrixMultiply(s,d,v){const _=s.a*d.a+s.c*d.b,S=s.b*d.a+s.d*d.b,I=s.a*d.c+s.c*d.d,D=s.b*d.c+s.d*d.d,N=s.e+s.a*d.e+s.c*d.f,R=s.f+s.b*d.e+s.d*d.f;return v.a=_,v.b=S,v.c=I,v.d=D,v.e=N,v.f=R,v}around(s,d,v){return this.clone().aroundO(s,d,v)}aroundO(s,d,v){const _=s||0,S=d||0;return this.translateO(-_,-S).lmultiplyO(v).translateO(_,S)}clone(){return new Matrix(this)}decompose(s=0,d=0){const v=this.a,_=this.b,S=this.c,I=this.d,D=this.e,N=this.f,R=v*I-_*S,P=R>0?1:-1,F=P*Math.sqrt(v*v+_*_),H=Math.atan2(P*_,P*v),W=180/Math.PI*H,st=Math.cos(H),ot=Math.sin(H),mt=(v*S+_*I)/R,ht=S*F/(mt*v-_)||I*F/(mt*_+v),Tt=D-s+s*st*F+d*(mt*st*F-ot*ht),Ot=N-d+s*ot*F+d*(mt*ot*F+st*ht);return{scaleX:F,scaleY:ht,shear:mt,rotate:W,translateX:Tt,translateY:Ot,originX:s,originY:d,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}equals(s){if(s===this)return!0;const d=new Matrix(s);return closeEnough(this.a,d.a)&&closeEnough(this.b,d.b)&&closeEnough(this.c,d.c)&&closeEnough(this.d,d.d)&&closeEnough(this.e,d.e)&&closeEnough(this.f,d.f)}flip(s,d){return this.clone().flipO(s,d)}flipO(s,d){return s==="x"?this.scaleO(-1,1,d,0):s==="y"?this.scaleO(1,-1,0,d):this.scaleO(-1,-1,s,d||s)}init(s){const d=Matrix.fromArray([1,0,0,1,0,0]);return s=s instanceof Element?s.matrixify():typeof s=="string"?Matrix.fromArray(s.split(delimiter).map(parseFloat)):Array.isArray(s)?Matrix.fromArray(s):typeof s=="object"&&Matrix.isMatrixLike(s)?s:typeof s=="object"?new Matrix().transform(s):arguments.length===6?Matrix.fromArray([].slice.call(arguments)):d,this.a=s.a!=null?s.a:d.a,this.b=s.b!=null?s.b:d.b,this.c=s.c!=null?s.c:d.c,this.d=s.d!=null?s.d:d.d,this.e=s.e!=null?s.e:d.e,this.f=s.f!=null?s.f:d.f,this}inverse(){return this.clone().inverseO()}inverseO(){const s=this.a,d=this.b,v=this.c,_=this.d,S=this.e,I=this.f,D=s*_-d*v;if(!D)throw new Error("Cannot invert "+this);const N=_/D,R=-d/D,P=-v/D,F=s/D,H=-(N*S+P*I),W=-(R*S+F*I);return this.a=N,this.b=R,this.c=P,this.d=F,this.e=H,this.f=W,this}lmultiply(s){return this.clone().lmultiplyO(s)}lmultiplyO(s){const d=this,v=s instanceof Matrix?s:new Matrix(s);return Matrix.matrixMultiply(v,d,this)}multiply(s){return this.clone().multiplyO(s)}multiplyO(s){const d=this,v=s instanceof Matrix?s:new Matrix(s);return Matrix.matrixMultiply(d,v,this)}rotate(s,d,v){return this.clone().rotateO(s,d,v)}rotateO(s,d=0,v=0){s=radians(s);const _=Math.cos(s),S=Math.sin(s),{a:I,b:D,c:N,d:R,e:P,f:F}=this;return this.a=I*_-D*S,this.b=D*_+I*S,this.c=N*_-R*S,this.d=R*_+N*S,this.e=P*_-F*S+v*S-d*_+d,this.f=F*_+P*S-d*S-v*_+v,this}scale(s,d,v,_){return this.clone().scaleO(...arguments)}scaleO(s,d=s,v=0,_=0){arguments.length===3&&(_=v,v=d,d=s);const{a:S,b:I,c:D,d:N,e:R,f:P}=this;return this.a=S*s,this.b=I*d,this.c=D*s,this.d=N*d,this.e=R*s-v*s+v,this.f=P*d-_*d+_,this}shear(s,d,v){return this.clone().shearO(s,d,v)}shearO(s,d=0,v=0){const{a:_,b:S,c:I,d:D,e:N,f:R}=this;return this.a=_+S*s,this.c=I+D*s,this.e=N+R*s-v*s,this}skew(s,d,v,_){return this.clone().skewO(...arguments)}skewO(s,d=s,v=0,_=0){arguments.length===3&&(_=v,v=d,d=s),s=radians(s),d=radians(d);const S=Math.tan(s),I=Math.tan(d),{a:D,b:N,c:R,d:P,e:F,f:H}=this;return this.a=D+N*S,this.b=N+D*I,this.c=R+P*S,this.d=P+R*I,this.e=F+H*S-_*S,this.f=H+F*I-v*I,this}skewX(s,d,v){return this.skew(s,0,d,v)}skewY(s,d,v){return this.skew(0,s,d,v)}toArray(){return[this.a,this.b,this.c,this.d,this.e,this.f]}toString(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}transform(s){if(Matrix.isMatrixLike(s))return new Matrix(s).multiplyO(this);const d=Matrix.formatTransforms(s),v=this,{x:_,y:S}=new Point(d.ox,d.oy).transform(v),I=new Matrix().translateO(d.rx,d.ry).lmultiplyO(v).translateO(-_,-S).scaleO(d.scaleX,d.scaleY).skewO(d.skewX,d.skewY).shearO(d.shear).rotateO(d.theta).translateO(_,S);if(isFinite(d.px)||isFinite(d.py)){const D=new Point(_,S).transform(I),N=isFinite(d.px)?d.px-D.x:0,R=isFinite(d.py)?d.py-D.y:0;I.translateO(N,R)}return I.translateO(d.tx,d.ty),I}translate(s,d){return this.clone().translateO(s,d)}translateO(s,d){return this.e+=s||0,this.f+=d||0,this}valueOf(){return{a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}}function ctm(){return new Matrix(this.node.getCTM())}function screenCTM(){if(typeof this.isRoot=="function"&&!this.isRoot()){const m=this.rect(1,1),s=m.node.getScreenCTM();return m.remove(),new Matrix(s)}return new Matrix(this.node.getScreenCTM())}register(Matrix,"Matrix");function parser(){if(!parser.nodes){const m=makeInstance().size(2,0);m.node.style.cssText=["opacity: 0","position: absolute","left: -100%","top: -100%","overflow: hidden"].join(";"),m.attr("focusable","false"),m.attr("aria-hidden","true");const s=m.path().node;parser.nodes={svg:m,path:s}}if(!parser.nodes.svg.node.parentNode){const m=globals.document.body||globals.document.documentElement;parser.nodes.svg.addTo(m)}return parser.nodes}function isNulledBox(m){return!m.width&&!m.height&&!m.x&&!m.y}function domContains(m){return m===globals.document||(globals.document.documentElement.contains||function(s){for(;s.parentNode;)s=s.parentNode;return s===globals.document}).call(globals.document.documentElement,m)}class Box{constructor(...s){this.init(...s)}addOffset(){return this.x+=globals.window.pageXOffset,this.y+=globals.window.pageYOffset,new Box(this)}init(s){const d=[0,0,0,0];return s=typeof s=="string"?s.split(delimiter).map(parseFloat):Array.isArray(s)?s:typeof s=="object"?[s.left!=null?s.left:s.x,s.top!=null?s.top:s.y,s.width,s.height]:arguments.length===4?[].slice.call(arguments):d,this.x=s[0]||0,this.y=s[1]||0,this.width=this.w=s[2]||0,this.height=this.h=s[3]||0,this.x2=this.x+this.w,this.y2=this.y+this.h,this.cx=this.x+this.w/2,this.cy=this.y+this.h/2,this}isNulled(){return isNulledBox(this)}merge(s){const d=Math.min(this.x,s.x),v=Math.min(this.y,s.y),_=Math.max(this.x+this.width,s.x+s.width)-d,S=Math.max(this.y+this.height,s.y+s.height)-v;return new Box(d,v,_,S)}toArray(){return[this.x,this.y,this.width,this.height]}toString(){return this.x+" "+this.y+" "+this.width+" "+this.height}transform(s){s instanceof Matrix||(s=new Matrix(s));let d=1/0,v=-1/0,_=1/0,S=-1/0;return[new Point(this.x,this.y),new Point(this.x2,this.y),new Point(this.x,this.y2),new Point(this.x2,this.y2)].forEach(function(D){D=D.transform(s),d=Math.min(d,D.x),v=Math.max(v,D.x),_=Math.min(_,D.y),S=Math.max(S,D.y)}),new Box(d,_,v-d,S-_)}}function getBox(m,s,d){let v;try{if(v=s(m.node),isNulledBox(v)&&!domContains(m.node))throw new Error("Element not in the dom")}catch{v=d(m)}return v}function bbox(){const d=getBox(this,_=>_.getBBox(),_=>{try{const S=_.clone().addTo(parser().svg).show(),I=S.node.getBBox();return S.remove(),I}catch(S){throw new Error(`Getting bbox of element "${_.node.nodeName}" is not possible: ${S.toString()}`)}});return new Box(d)}function rbox(m){const v=getBox(this,S=>S.getBoundingClientRect(),S=>{throw new Error(`Getting rbox of element "${S.node.nodeName}" is not possible`)}),_=new Box(v);return m?_.transform(m.screenCTM().inverseO()):_.addOffset()}function inside(m,s){const d=this.bbox();return m>d.x&&s>d.y&&m<d.x+d.width&&s<d.y+d.height}registerMethods({viewbox:{viewbox(m,s,d,v){return m==null?new Box(this.attr("viewBox")):this.attr("viewBox",new Box(m,s,d,v))},zoom(m,s){let{width:d,height:v}=this.attr(["width","height"]);if((!d&&!v||typeof d=="string"||typeof v=="string")&&(d=this.node.clientWidth,v=this.node.clientHeight),!d||!v)throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");const _=this.viewbox(),S=d/_.width,I=v/_.height,D=Math.min(S,I);if(m==null)return D;let N=D/m;N===1/0&&(N=Number.MAX_SAFE_INTEGER/100),s=s||new Point(d/2/S+_.x,v/2/I+_.y);const R=new Box(_).transform(new Matrix({scale:N,origin:s}));return this.viewbox(R)}}});register(Box,"Box");class List extends Array{constructor(s=[],...d){if(super(s,...d),typeof s=="number")return this;this.length=0,this.push(...s)}}extend([List],{each(m,...s){return typeof m=="function"?this.map((d,v,_)=>m.call(d,d,v,_)):this.map(d=>d[m](...s))},toArray(){return Array.prototype.concat.apply([],this)}});const reserved=["toArray","constructor","each"];List.extend=function(m){m=m.reduce((s,d)=>(reserved.includes(d)||d[0]==="_"||(s[d]=function(...v){return this.each(d,...v)}),s),{}),extend([List],m)};function baseFind(m,s){return new List(map((s||globals.document).querySelectorAll(m),function(d){return adopt(d)}))}function find(m){return baseFind(m,this.node)}function findOne(m){return adopt(this.node.querySelector(m))}let listenerId=0;const windowEvents={};function getEvents(m){let s=m.getEventHolder();return s===globals.window&&(s=windowEvents),s.events||(s.events={}),s.events}function getEventTarget(m){return m.getEventTarget()}function clearEvents(m){let s=m.getEventHolder();s===globals.window&&(s=windowEvents),s.events&&(s.events={})}function on(m,s,d,v,_){const S=d.bind(v||m),I=makeInstance(m),D=getEvents(I),N=getEventTarget(I);s=Array.isArray(s)?s:s.split(delimiter),d._svgjsListenerId||(d._svgjsListenerId=++listenerId),s.forEach(function(R){const P=R.split(".")[0],F=R.split(".")[1]||"*";D[P]=D[P]||{},D[P][F]=D[P][F]||{},D[P][F][d._svgjsListenerId]=S,N.addEventListener(P,S,_||!1)})}function off(m,s,d,v){const _=makeInstance(m),S=getEvents(_),I=getEventTarget(_);typeof d=="function"&&(d=d._svgjsListenerId,!d)||(s=Array.isArray(s)?s:(s||"").split(delimiter),s.forEach(function(D){const N=D&&D.split(".")[0],R=D&&D.split(".")[1];let P,F;if(d)S[N]&&S[N][R||"*"]&&(I.removeEventListener(N,S[N][R||"*"][d],v||!1),delete S[N][R||"*"][d]);else if(N&&R){if(S[N]&&S[N][R]){for(F in S[N][R])off(I,[N,R].join("."),F);delete S[N][R]}}else if(R)for(D in S)for(P in S[D])R===P&&off(I,[D,R].join("."));else if(N){if(S[N]){for(P in S[N])off(I,[N,P].join("."));delete S[N]}}else{for(D in S)off(I,D);clearEvents(_)}}))}function dispatch(m,s,d,v){const _=getEventTarget(m);return s instanceof globals.window.Event||(s=new globals.window.CustomEvent(s,{detail:d,cancelable:!0,...v})),_.dispatchEvent(s),s}class EventTarget extends Base{addEventListener(){}dispatch(s,d,v){return dispatch(this,s,d,v)}dispatchEvent(s){const d=this.getEventHolder().events;if(!d)return!0;const v=d[s.type];for(const _ in v)for(const S in v[_])v[_][S](s);return!s.defaultPrevented}fire(s,d,v){return this.dispatch(s,d,v),this}getEventHolder(){return this}getEventTarget(){return this}off(s,d,v){return off(this,s,d,v),this}on(s,d,v,_){return on(this,s,d,v,_),this}removeEventListener(){}}register(EventTarget,"EventTarget");function noop(){}const timeline={duration:400,ease:">",delay:0},attrs={"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","text-anchor":"start"};class SVGArray extends Array{constructor(...s){super(...s),this.init(...s)}clone(){return new this.constructor(this)}init(s){return typeof s=="number"?this:(this.length=0,this.push(...this.parse(s)),this)}parse(s=[]){return s instanceof Array?s:s.trim().split(delimiter).map(parseFloat)}toArray(){return Array.prototype.concat.apply([],this)}toSet(){return new Set(this)}toString(){return this.join(" ")}valueOf(){const s=[];return s.push(...this),s}}class SVGNumber{constructor(...s){this.init(...s)}convert(s){return new SVGNumber(this.value,s)}divide(s){return s=new SVGNumber(s),new SVGNumber(this/s,this.unit||s.unit)}init(s,d){return d=Array.isArray(s)?s[1]:d,s=Array.isArray(s)?s[0]:s,this.value=0,this.unit=d||"",typeof s=="number"?this.value=isNaN(s)?0:isFinite(s)?s:s<0?-34e37:34e37:typeof s=="string"?(d=s.match(numberAndUnit),d&&(this.value=parseFloat(d[1]),d[5]==="%"?this.value/=100:d[5]==="s"&&(this.value*=1e3),this.unit=d[5])):s instanceof SVGNumber&&(this.value=s.valueOf(),this.unit=s.unit),this}minus(s){return s=new SVGNumber(s),new SVGNumber(this-s,this.unit||s.unit)}plus(s){return s=new SVGNumber(s),new SVGNumber(this+s,this.unit||s.unit)}times(s){return s=new SVGNumber(s),new SVGNumber(this*s,this.unit||s.unit)}toArray(){return[this.value,this.unit]}toJSON(){return this.toString()}toString(){return(this.unit==="%"?~~(this.value*1e8)/1e6:this.unit==="s"?this.value/1e3:this.value)+this.unit}valueOf(){return this.value}}const hooks$1=[];function registerAttrHook(m){hooks$1.push(m)}function attr(m,s,d){if(m==null){m={},s=this.node.attributes;for(const v of s)m[v.nodeName]=isNumber.test(v.nodeValue)?parseFloat(v.nodeValue):v.nodeValue;return m}else{if(m instanceof Array)return m.reduce((v,_)=>(v[_]=this.attr(_),v),{});if(typeof m=="object"&&m.constructor===Object)for(s in m)this.attr(s,m[s]);else if(s===null)this.node.removeAttribute(m);else{if(s==null)return s=this.node.getAttribute(m),s==null?attrs[m]:isNumber.test(s)?parseFloat(s):s;s=hooks$1.reduce((v,_)=>_(m,v,this),s),typeof s=="number"?s=new SVGNumber(s):Color.isColor(s)?s=new Color(s):s.constructor===Array&&(s=new SVGArray(s)),m==="leading"?this.leading&&this.leading(s):typeof d=="string"?this.node.setAttributeNS(d,m,s.toString()):this.node.setAttribute(m,s.toString()),this.rebuild&&(m==="font-size"||m==="x")&&this.rebuild()}}return this}class Dom extends EventTarget{constructor(s,d){super(),this.node=s,this.type=s.nodeName,d&&s!==d&&this.attr(d)}add(s,d){return s=makeInstance(s),s.removeNamespace&&this.node instanceof globals.window.SVGElement&&s.removeNamespace(),d==null?this.node.appendChild(s.node):s.node!==this.node.childNodes[d]&&this.node.insertBefore(s.node,this.node.childNodes[d]),this}addTo(s,d){return makeInstance(s).put(this,d)}children(){return new List(map(this.node.children,function(s){return adopt(s)}))}clear(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this}clone(s=!0,d=!0){this.writeDataToDom();let v=this.node.cloneNode(s);return d&&(v=assignNewId(v)),new this.constructor(v)}each(s,d){const v=this.children();let _,S;for(_=0,S=v.length;_<S;_++)s.apply(v[_],[_,v]),d&&v[_].each(s,d);return this}element(s,d){return this.put(new Dom(create(s),d))}first(){return adopt(this.node.firstChild)}get(s){return adopt(this.node.childNodes[s])}getEventHolder(){return this.node}getEventTarget(){return this.node}has(s){return this.index(s)>=0}html(s,d){return this.xml(s,d,html$1)}id(s){return typeof s>"u"&&!this.node.id&&(this.node.id=eid(this.type)),this.attr("id",s)}index(s){return[].slice.call(this.node.childNodes).indexOf(s.node)}last(){return adopt(this.node.lastChild)}matches(s){const d=this.node,v=d.matches||d.matchesSelector||d.msMatchesSelector||d.mozMatchesSelector||d.webkitMatchesSelector||d.oMatchesSelector||null;return v&&v.call(d,s)}parent(s){let d=this;if(!d.node.parentNode)return null;if(d=adopt(d.node.parentNode),!s)return d;do if(typeof s=="string"?d.matches(s):d instanceof s)return d;while(d=adopt(d.node.parentNode));return d}put(s,d){return s=makeInstance(s),this.add(s,d),s}putIn(s,d){return makeInstance(s).add(this,d)}remove(){return this.parent()&&this.parent().removeElement(this),this}removeElement(s){return this.node.removeChild(s.node),this}replace(s){return s=makeInstance(s),this.node.parentNode&&this.node.parentNode.replaceChild(s.node,this.node),s}round(s=2,d=null){const v=10**s,_=this.attr(d);for(const S in _)typeof _[S]=="number"&&(_[S]=Math.round(_[S]*v)/v);return this.attr(_),this}svg(s,d){return this.xml(s,d,svg)}toString(){return this.id()}words(s){return this.node.textContent=s,this}wrap(s){const d=this.parent();if(!d)return this.addTo(s);const v=d.index(this);return d.put(s,v).put(this)}writeDataToDom(){return this.each(function(){this.writeDataToDom()}),this}xml(s,d,v){if(typeof s=="boolean"&&(v=d,d=s,s=null),s==null||typeof s=="function"){d=d??!0,this.writeDataToDom();let D=this;if(s!=null){if(D=adopt(D.node.cloneNode(!0)),d){const N=s(D);if(D=N||D,N===!1)return""}D.each(function(){const N=s(this),R=N||this;N===!1?this.remove():N&&this!==R&&this.replace(R)},!0)}return d?D.node.outerHTML:D.node.innerHTML}d=d??!1;const _=create("wrapper",v),S=globals.document.createDocumentFragment();_.innerHTML=s;for(let D=_.children.length;D--;)S.appendChild(_.firstElementChild);const I=this.parent();return d?this.replace(S)&&I:this.add(S)}}extend(Dom,{attr,find,findOne});register(Dom,"Dom");class Element extends Dom{constructor(s,d){super(s,d),this.dom={},this.node.instance=this,s.hasAttribute("svgjs:data")&&this.setData(JSON.parse(s.getAttribute("svgjs:data"))||{})}center(s,d){return this.cx(s).cy(d)}cx(s){return s==null?this.x()+this.width()/2:this.x(s-this.width()/2)}cy(s){return s==null?this.y()+this.height()/2:this.y(s-this.height()/2)}defs(){const s=this.root();return s&&s.defs()}dmove(s,d){return this.dx(s).dy(d)}dx(s=0){return this.x(new SVGNumber(s).plus(this.x()))}dy(s=0){return this.y(new SVGNumber(s).plus(this.y()))}getEventHolder(){return this}height(s){return this.attr("height",s)}move(s,d){return this.x(s).y(d)}parents(s=this.root()){const d=typeof s=="string";d||(s=makeInstance(s));const v=new List;let _=this;for(;(_=_.parent())&&_.node!==globals.document&&_.nodeName!=="#document-fragment"&&(v.push(_),!(!d&&_.node===s.node||d&&_.matches(s)));)if(_.node===this.root().node)return null;return v}reference(s){if(s=this.attr(s),!s)return null;const d=(s+"").match(reference);return d?makeInstance(d[1]):null}root(){const s=this.parent(getClass(root));return s&&s.root()}setData(s){return this.dom=s,this}size(s,d){const v=proportionalSize(this,s,d);return this.width(new SVGNumber(v.width)).height(new SVGNumber(v.height))}width(s){return this.attr("width",s)}writeDataToDom(){return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),super.writeDataToDom()}x(s){return this.attr("x",s)}y(s){return this.attr("y",s)}}extend(Element,{bbox,rbox,inside,point,ctm,screenCTM});register(Element,"Element");const sugar={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(m,s){return s==="color"?m:m+"-"+s}};["fill","stroke"].forEach(function(m){const s={};let d;s[m]=function(v){if(typeof v>"u")return this.attr(m);if(typeof v=="string"||v instanceof Color||Color.isRgb(v)||v instanceof Element)this.attr(m,v);else for(d=sugar[m].length-1;d>=0;d--)v[sugar[m][d]]!=null&&this.attr(sugar.prefix(m,sugar[m][d]),v[sugar[m][d]]);return this},registerMethods(["Element","Runner"],s)});registerMethods(["Element","Runner"],{matrix:function(m,s,d,v,_,S){return m==null?new Matrix(this):this.attr("transform",new Matrix(m,s,d,v,_,S))},rotate:function(m,s,d){return this.transform({rotate:m,ox:s,oy:d},!0)},skew:function(m,s,d,v){return arguments.length===1||arguments.length===3?this.transform({skew:m,ox:s,oy:d},!0):this.transform({skew:[m,s],ox:d,oy:v},!0)},shear:function(m,s,d){return this.transform({shear:m,ox:s,oy:d},!0)},scale:function(m,s,d,v){return arguments.length===1||arguments.length===3?this.transform({scale:m,ox:s,oy:d},!0):this.transform({scale:[m,s],ox:d,oy:v},!0)},translate:function(m,s){return this.transform({translate:[m,s]},!0)},relative:function(m,s){return this.transform({relative:[m,s]},!0)},flip:function(m="both",s="center"){return"xybothtrue".indexOf(m)===-1&&(s=m,m="both"),this.transform({flip:m,origin:s},!0)},opacity:function(m){return this.attr("opacity",m)}});registerMethods("radius",{radius:function(m,s=m){return(this._element||this).type==="radialGradient"?this.attr("r",new SVGNumber(m)):this.rx(m).ry(s)}});registerMethods("Path",{length:function(){return this.node.getTotalLength()},pointAt:function(m){return new Point(this.node.getPointAtLength(m))}});registerMethods(["Element","Runner"],{font:function(m,s){if(typeof m=="object"){for(s in m)this.font(s,m[s]);return this}return m==="leading"?this.leading(s):m==="anchor"?this.attr("text-anchor",s):m==="size"||m==="family"||m==="weight"||m==="stretch"||m==="variant"||m==="style"?this.attr("font-"+m,s):this.attr(m,s)}});const methods=["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","mouseenter","mouseleave","touchstart","touchmove","touchleave","touchend","touchcancel"].reduce(function(m,s){const d=function(v){return v===null?this.off(s):this.on(s,v),this};return m[s]=d,m},{});registerMethods("Element",methods);function untransform(){return this.attr("transform",null)}function matrixify(){return(this.attr("transform")||"").split(transforms).slice(0,-1).map(function(s){const d=s.trim().split("(");return[d[0],d[1].split(delimiter).map(function(v){return parseFloat(v)})]}).reverse().reduce(function(s,d){return d[0]==="matrix"?s.lmultiply(Matrix.fromArray(d[1])):s[d[0]].apply(s,d[1])},new Matrix)}function toParent(m,s){if(this===m)return this;const d=this.screenCTM(),v=m.screenCTM().inverse();return this.addTo(m,s).untransform().transform(v.multiply(d)),this}function toRoot(m){return this.toParent(this.root(),m)}function transform(m,s){if(m==null||typeof m=="string"){const _=new Matrix(this).decompose();return m==null?_:_[m]}Matrix.isMatrixLike(m)||(m={...m,origin:getOrigin(m,this)});const d=s===!0?this:s||!1,v=new Matrix(d).transform(m);return this.attr("transform",v)}registerMethods("Element",{untransform,matrixify,toParent,toRoot,transform});let Container$1=class Ka extends Element{flatten(s=this,d){return this.each(function(){if(this instanceof Ka)return this.flatten().ungroup()}),this}ungroup(s=this.parent(),d=s.index(this)){return d=d===-1?s.children().length:d,this.each(function(v,_){return _[_.length-v-1].toParent(s,d)}),this.remove()}};register(Container$1,"Container");class Defs extends Container$1{constructor(s,d=s){super(nodeOrNew("defs",s),d)}flatten(){return this}ungroup(){return this}}register(Defs,"Defs");class Shape extends Element{}register(Shape,"Shape");function rx(m){return this.attr("rx",m)}function ry(m){return this.attr("ry",m)}function x$3(m){return m==null?this.cx()-this.rx():this.cx(m+this.rx())}function y$3(m){return m==null?this.cy()-this.ry():this.cy(m+this.ry())}function cx$1(m){return this.attr("cx",m)}function cy$1(m){return this.attr("cy",m)}function width$2(m){return m==null?this.rx()*2:this.rx(new SVGNumber(m).divide(2))}function height$2(m){return m==null?this.ry()*2:this.ry(new SVGNumber(m).divide(2))}var circled={__proto__:null,rx,ry,x:x$3,y:y$3,cx:cx$1,cy:cy$1,width:width$2,height:height$2};class Ellipse extends Shape{constructor(s,d=s){super(nodeOrNew("ellipse",s),d)}size(s,d){const v=proportionalSize(this,s,d);return this.rx(new SVGNumber(v.width).divide(2)).ry(new SVGNumber(v.height).divide(2))}}extend(Ellipse,circled);registerMethods("Container",{ellipse:wrapWithAttrCheck(function(m=0,s=m){return this.put(new Ellipse).size(m,s).move(0,0)})});register(Ellipse,"Ellipse");class Fragment extends Dom{constructor(s=globals.document.createDocumentFragment()){super(s)}xml(s,d,v){if(typeof s=="boolean"&&(v=d,d=s,s=null),s==null||typeof s=="function"){const _=new Dom(create("wrapper",v));return _.add(this.node.cloneNode(!0)),_.xml(!1,v)}return super.xml(s,!1,v)}}register(Fragment,"Fragment");function from(m,s){return(this._element||this).type==="radialGradient"?this.attr({fx:new SVGNumber(m),fy:new SVGNumber(s)}):this.attr({x1:new SVGNumber(m),y1:new SVGNumber(s)})}function to(m,s){return(this._element||this).type==="radialGradient"?this.attr({cx:new SVGNumber(m),cy:new SVGNumber(s)}):this.attr({x2:new SVGNumber(m),y2:new SVGNumber(s)})}var gradiented={__proto__:null,from,to};class Gradient extends Container$1{constructor(s,d){super(nodeOrNew(s+"Gradient",typeof s=="string"?null:s),d)}attr(s,d,v){return s==="transform"&&(s="gradientTransform"),super.attr(s,d,v)}bbox(){return new Box}targets(){return baseFind("svg [fill*="+this.id()+"]")}toString(){return this.url()}update(s){return this.clear(),typeof s=="function"&&s.call(this,this),this}url(){return"url(#"+this.id()+")"}}extend(Gradient,gradiented);registerMethods({Container:{gradient(...m){return this.defs().gradient(...m)}},Defs:{gradient:wrapWithAttrCheck(function(m,s){return this.put(new Gradient(m)).update(s)})}});register(Gradient,"Gradient");class Pattern extends Container$1{constructor(s,d=s){super(nodeOrNew("pattern",s),d)}attr(s,d,v){return s==="transform"&&(s="patternTransform"),super.attr(s,d,v)}bbox(){return new Box}targets(){return baseFind("svg [fill*="+this.id()+"]")}toString(){return this.url()}update(s){return this.clear(),typeof s=="function"&&s.call(this,this),this}url(){return"url(#"+this.id()+")"}}registerMethods({Container:{pattern(...m){return this.defs().pattern(...m)}},Defs:{pattern:wrapWithAttrCheck(function(m,s,d){return this.put(new Pattern).update(d).attr({x:0,y:0,width:m,height:s,patternUnits:"userSpaceOnUse"})})}});register(Pattern,"Pattern");class Image extends Shape{constructor(s,d=s){super(nodeOrNew("image",s),d)}load(s,d){if(!s)return this;const v=new globals.window.Image;return on(v,"load",function(_){const S=this.parent(Pattern);this.width()===0&&this.height()===0&&this.size(v.width,v.height),S instanceof Pattern&&S.width()===0&&S.height()===0&&S.size(this.width(),this.height()),typeof d=="function"&&d.call(this,_)},this),on(v,"load error",function(){off(v)}),this.attr("href",v.src=s,xlink)}}registerAttrHook(function(m,s,d){return(m==="fill"||m==="stroke")&&isImage.test(s)&&(s=d.root().defs().image(s)),s instanceof Image&&(s=d.root().defs().pattern(0,0,v=>{v.add(s)})),s});registerMethods({Container:{image:wrapWithAttrCheck(function(m,s){return this.put(new Image).size(0,0).load(m,s)})}});register(Image,"Image");class PointArray extends SVGArray{bbox(){let s=-1/0,d=-1/0,v=1/0,_=1/0;return this.forEach(function(S){s=Math.max(S[0],s),d=Math.max(S[1],d),v=Math.min(S[0],v),_=Math.min(S[1],_)}),new Box(v,_,s-v,d-_)}move(s,d){const v=this.bbox();if(s-=v.x,d-=v.y,!isNaN(s)&&!isNaN(d))for(let _=this.length-1;_>=0;_--)this[_]=[this[_][0]+s,this[_][1]+d];return this}parse(s=[0,0]){const d=[];s instanceof Array?s=Array.prototype.concat.apply([],s):s=s.trim().split(delimiter).map(parseFloat),s.length%2!==0&&s.pop();for(let v=0,_=s.length;v<_;v=v+2)d.push([s[v],s[v+1]]);return d}size(s,d){let v;const _=this.bbox();for(v=this.length-1;v>=0;v--)_.width&&(this[v][0]=(this[v][0]-_.x)*s/_.width+_.x),_.height&&(this[v][1]=(this[v][1]-_.y)*d/_.height+_.y);return this}toLine(){return{x1:this[0][0],y1:this[0][1],x2:this[1][0],y2:this[1][1]}}toString(){const s=[];for(let d=0,v=this.length;d<v;d++)s.push(this[d].join(","));return s.join(" ")}transform(s){return this.clone().transformO(s)}transformO(s){Matrix.isMatrixLike(s)||(s=new Matrix(s));for(let d=this.length;d--;){const[v,_]=this[d];this[d][0]=s.a*v+s.c*_+s.e,this[d][1]=s.b*v+s.d*_+s.f}return this}}const MorphArray=PointArray;function x$2(m){return m==null?this.bbox().x:this.move(m,this.bbox().y)}function y$2(m){return m==null?this.bbox().y:this.move(this.bbox().x,m)}function width$1(m){const s=this.bbox();return m==null?s.width:this.size(m,s.height)}function height$1(m){const s=this.bbox();return m==null?s.height:this.size(s.width,m)}var pointed={__proto__:null,MorphArray,x:x$2,y:y$2,width:width$1,height:height$1};class Line extends Shape{constructor(s,d=s){super(nodeOrNew("line",s),d)}array(){return new PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])}move(s,d){return this.attr(this.array().move(s,d).toLine())}plot(s,d,v,_){return s==null?this.array():(typeof d<"u"?s={x1:s,y1:d,x2:v,y2:_}:s=new PointArray(s).toLine(),this.attr(s))}size(s,d){const v=proportionalSize(this,s,d);return this.attr(this.array().size(v.width,v.height).toLine())}}extend(Line,pointed);registerMethods({Container:{line:wrapWithAttrCheck(function(...m){return Line.prototype.plot.apply(this.put(new Line),m[0]!=null?m:[0,0,0,0])})}});register(Line,"Line");class Marker extends Container$1{constructor(s,d=s){super(nodeOrNew("marker",s),d)}height(s){return this.attr("markerHeight",s)}orient(s){return this.attr("orient",s)}ref(s,d){return this.attr("refX",s).attr("refY",d)}toString(){return"url(#"+this.id()+")"}update(s){return this.clear(),typeof s=="function"&&s.call(this,this),this}width(s){return this.attr("markerWidth",s)}}registerMethods({Container:{marker(...m){return this.defs().marker(...m)}},Defs:{marker:wrapWithAttrCheck(function(m,s,d){return this.put(new Marker).size(m,s).ref(m/2,s/2).viewbox(0,0,m,s).attr("orient","auto").update(d)})},marker:{marker(m,s,d,v){let _=["marker"];return m!=="all"&&_.push(m),_=_.join("-"),m=arguments[1]instanceof Marker?arguments[1]:this.defs().marker(s,d,v),this.attr(_,m)}}});register(Marker,"Marker");function makeSetterGetter(m,s){return function(d){return d==null?this[m]:(this[m]=d,s&&s.call(this),this)}}const easing={"-":function(m){return m},"<>":function(m){return-Math.cos(m*Math.PI)/2+.5},">":function(m){return Math.sin(m*Math.PI/2)},"<":function(m){return-Math.cos(m*Math.PI/2)+1},bezier:function(m,s,d,v){return function(_){return _<0?m>0?s/m*_:d>0?v/d*_:0:_>1?d<1?(1-v)/(1-d)*_+(v-d)/(1-d):m<1?(1-s)/(1-m)*_+(s-m)/(1-m):1:3*_*(1-_)**2*s+3*_**2*(1-_)*v+_**3}},steps:function(m,s="end"){s=s.split("-").reverse()[0];let d=m;return s==="none"?--d:s==="both"&&++d,(v,_=!1)=>{let S=Math.floor(v*m);const I=v*S%1===0;return(s==="start"||s==="both")&&++S,_&&I&&--S,v>=0&&S<0&&(S=0),v<=1&&S>d&&(S=d),S/d}}};class Stepper{done(){return!1}}class Ease extends Stepper{constructor(s=timeline.ease){super(),this.ease=easing[s]||s}step(s,d,v){return typeof s!="number"?v<1?s:d:s+(d-s)*this.ease(v)}}class Controller extends Stepper{constructor(s){super(),this.stepper=s}done(s){return s.done}step(s,d,v,_){return this.stepper(s,d,v,_)}}function recalculate(){const m=(this._duration||500)/1e3,s=this._overshoot||0,d=1e-10,v=Math.PI,_=Math.log(s/100+d),S=-_/Math.sqrt(v*v+_*_),I=3.9/(S*m);this.d=2*S*I,this.k=I*I}class Spring extends Controller{constructor(s=500,d=0){super(),this.duration(s).overshoot(d)}step(s,d,v,_){if(typeof s=="string")return s;if(_.done=v===1/0,v===1/0)return d;if(v===0)return s;v>100&&(v=16),v/=1e3;const S=_.velocity||0,I=-this.d*S-this.k*(s-d),D=s+S*v+I*v*v/2;return _.velocity=S+I*v,_.done=Math.abs(d-D)+Math.abs(S)<.002,_.done?d:D}}extend(Spring,{duration:makeSetterGetter("_duration",recalculate),overshoot:makeSetterGetter("_overshoot",recalculate)});class PID extends Controller{constructor(s=.1,d=.01,v=0,_=1e3){super(),this.p(s).i(d).d(v).windup(_)}step(s,d,v,_){if(typeof s=="string")return s;if(_.done=v===1/0,v===1/0)return d;if(v===0)return s;const S=d-s;let I=(_.integral||0)+S*v;const D=(S-(_.error||0))/v,N=this._windup;return N!==!1&&(I=Math.max(-N,Math.min(I,N))),_.error=S,_.integral=I,_.done=Math.abs(S)<.001,_.done?d:s+(this.P*S+this.I*I+this.D*D)}}extend(PID,{windup:makeSetterGetter("_windup"),p:makeSetterGetter("P"),i:makeSetterGetter("I"),d:makeSetterGetter("D")});const segmentParameters={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0},pathHandlers={M:function(m,s,d){return s.x=d.x=m[0],s.y=d.y=m[1],["M",s.x,s.y]},L:function(m,s){return s.x=m[0],s.y=m[1],["L",m[0],m[1]]},H:function(m,s){return s.x=m[0],["H",m[0]]},V:function(m,s){return s.y=m[0],["V",m[0]]},C:function(m,s){return s.x=m[4],s.y=m[5],["C",m[0],m[1],m[2],m[3],m[4],m[5]]},S:function(m,s){return s.x=m[2],s.y=m[3],["S",m[0],m[1],m[2],m[3]]},Q:function(m,s){return s.x=m[2],s.y=m[3],["Q",m[0],m[1],m[2],m[3]]},T:function(m,s){return s.x=m[0],s.y=m[1],["T",m[0],m[1]]},Z:function(m,s,d){return s.x=d.x,s.y=d.y,["Z"]},A:function(m,s){return s.x=m[5],s.y=m[6],["A",m[0],m[1],m[2],m[3],m[4],m[5],m[6]]}},mlhvqtcsaz="mlhvqtcsaz".split("");for(let m=0,s=mlhvqtcsaz.length;m<s;++m)pathHandlers[mlhvqtcsaz[m]]=function(d){return function(v,_,S){if(d==="H")v[0]=v[0]+_.x;else if(d==="V")v[0]=v[0]+_.y;else if(d==="A")v[5]=v[5]+_.x,v[6]=v[6]+_.y;else for(let I=0,D=v.length;I<D;++I)v[I]=v[I]+(I%2?_.y:_.x);return pathHandlers[d](v,_,S)}}(mlhvqtcsaz[m].toUpperCase());function makeAbsolut(m){const s=m.segment[0];return pathHandlers[s](m.segment.slice(1),m.p,m.p0)}function segmentComplete(m){return m.segment.length&&m.segment.length-1===segmentParameters[m.segment[0].toUpperCase()]}function startNewSegment(m,s){m.inNumber&&finalizeNumber(m,!1);const d=isPathLetter.test(s);if(d)m.segment=[s];else{const v=m.lastCommand,_=v.toLowerCase(),S=v===_;m.segment=[_==="m"?S?"l":"L":v]}return m.inSegment=!0,m.lastCommand=m.segment[0],d}function finalizeNumber(m,s){if(!m.inNumber)throw new Error("Parser Error");m.number&&m.segment.push(parseFloat(m.number)),m.inNumber=s,m.number="",m.pointSeen=!1,m.hasExponent=!1,segmentComplete(m)&&finalizeSegment(m)}function finalizeSegment(m){m.inSegment=!1,m.absolute&&(m.segment=makeAbsolut(m)),m.segments.push(m.segment)}function isArcFlag(m){if(!m.segment.length)return!1;const s=m.segment[0].toUpperCase()==="A",d=m.segment.length;return s&&(d===4||d===5)}function isExponential(m){return m.lastToken.toUpperCase()==="E"}function pathParser(m,s=!0){let d=0,v="";const _={segment:[],inNumber:!1,number:"",lastToken:"",inSegment:!1,segments:[],pointSeen:!1,hasExponent:!1,absolute:s,p0:new Point,p:new Point};for(;_.lastToken=v,v=m.charAt(d++);)if(!(!_.inSegment&&startNewSegment(_,v))){if(v==="."){if(_.pointSeen||_.hasExponent){finalizeNumber(_,!1),--d;continue}_.inNumber=!0,_.pointSeen=!0,_.number+=v;continue}if(!isNaN(parseInt(v))){if(_.number==="0"||isArcFlag(_)){_.inNumber=!0,_.number=v,finalizeNumber(_,!0);continue}_.inNumber=!0,_.number+=v;continue}if(v===" "||v===","){_.inNumber&&finalizeNumber(_,!1);continue}if(v==="-"){if(_.inNumber&&!isExponential(_)){finalizeNumber(_,!1),--d;continue}_.number+=v,_.inNumber=!0;continue}if(v.toUpperCase()==="E"){_.number+=v,_.hasExponent=!0;continue}if(isPathLetter.test(v)){if(_.inNumber)finalizeNumber(_,!1);else if(segmentComplete(_))finalizeSegment(_);else throw new Error("parser Error");--d}}return _.inNumber&&finalizeNumber(_,!1),_.inSegment&&segmentComplete(_)&&finalizeSegment(_),_.segments}function arrayToString(m){let s="";for(let d=0,v=m.length;d<v;d++)s+=m[d][0],m[d][1]!=null&&(s+=m[d][1],m[d][2]!=null&&(s+=" ",s+=m[d][2],m[d][3]!=null&&(s+=" ",s+=m[d][3],s+=" ",s+=m[d][4],m[d][5]!=null&&(s+=" ",s+=m[d][5],s+=" ",s+=m[d][6],m[d][7]!=null&&(s+=" ",s+=m[d][7])))));return s+" "}class PathArray extends SVGArray{bbox(){return parser().path.setAttribute("d",this.toString()),new Box(parser.nodes.path.getBBox())}move(s,d){const v=this.bbox();if(s-=v.x,d-=v.y,!isNaN(s)&&!isNaN(d))for(let _,S=this.length-1;S>=0;S--)_=this[S][0],_==="M"||_==="L"||_==="T"?(this[S][1]+=s,this[S][2]+=d):_==="H"?this[S][1]+=s:_==="V"?this[S][1]+=d:_==="C"||_==="S"||_==="Q"?(this[S][1]+=s,this[S][2]+=d,this[S][3]+=s,this[S][4]+=d,_==="C"&&(this[S][5]+=s,this[S][6]+=d)):_==="A"&&(this[S][6]+=s,this[S][7]+=d);return this}parse(s="M0 0"){return Array.isArray(s)&&(s=Array.prototype.concat.apply([],s).toString()),pathParser(s)}size(s,d){const v=this.bbox();let _,S;for(v.width=v.width===0?1:v.width,v.height=v.height===0?1:v.height,_=this.length-1;_>=0;_--)S=this[_][0],S==="M"||S==="L"||S==="T"?(this[_][1]=(this[_][1]-v.x)*s/v.width+v.x,this[_][2]=(this[_][2]-v.y)*d/v.height+v.y):S==="H"?this[_][1]=(this[_][1]-v.x)*s/v.width+v.x:S==="V"?this[_][1]=(this[_][1]-v.y)*d/v.height+v.y:S==="C"||S==="S"||S==="Q"?(this[_][1]=(this[_][1]-v.x)*s/v.width+v.x,this[_][2]=(this[_][2]-v.y)*d/v.height+v.y,this[_][3]=(this[_][3]-v.x)*s/v.width+v.x,this[_][4]=(this[_][4]-v.y)*d/v.height+v.y,S==="C"&&(this[_][5]=(this[_][5]-v.x)*s/v.width+v.x,this[_][6]=(this[_][6]-v.y)*d/v.height+v.y)):S==="A"&&(this[_][1]=this[_][1]*s/v.width,this[_][2]=this[_][2]*d/v.height,this[_][6]=(this[_][6]-v.x)*s/v.width+v.x,this[_][7]=(this[_][7]-v.y)*d/v.height+v.y);return this}toString(){return arrayToString(this)}}const getClassForType=m=>{const s=typeof m;return s==="number"?SVGNumber:s==="string"?Color.isColor(m)?Color:delimiter.test(m)?isPathLetter.test(m)?PathArray:SVGArray:numberAndUnit.test(m)?SVGNumber:NonMorphable:morphableTypes.indexOf(m.constructor)>-1?m.constructor:Array.isArray(m)?SVGArray:s==="object"?ObjectBag:NonMorphable};class Morphable{constructor(s){this._stepper=s||new Ease("-"),this._from=null,this._to=null,this._type=null,this._context=null,this._morphObj=null}at(s){return this._morphObj.morph(this._from,this._to,s,this._stepper,this._context)}done(){return this._context.map(this._stepper.done).reduce(function(d,v){return d&&v},!0)}from(s){return s==null?this._from:(this._from=this._set(s),this)}stepper(s){return s==null?this._stepper:(this._stepper=s,this)}to(s){return s==null?this._to:(this._to=this._set(s),this)}type(s){return s==null?this._type:(this._type=s,this)}_set(s){this._type||this.type(getClassForType(s));let d=new this._type(s);return this._type===Color&&(d=this._to?d[this._to[4]]():this._from?d[this._from[4]]():d),this._type===ObjectBag&&(d=this._to?d.align(this._to):this._from?d.align(this._from):d),d=d.toConsumable(),this._morphObj=this._morphObj||new this._type,this._context=this._context||Array.apply(null,Array(d.length)).map(Object).map(function(v){return v.done=!0,v}),d}}class NonMorphable{constructor(...s){this.init(...s)}init(s){return s=Array.isArray(s)?s[0]:s,this.value=s,this}toArray(){return[this.value]}valueOf(){return this.value}}class TransformBag{constructor(...s){this.init(...s)}init(s){return Array.isArray(s)&&(s={scaleX:s[0],scaleY:s[1],shear:s[2],rotate:s[3],translateX:s[4],translateY:s[5],originX:s[6],originY:s[7]}),Object.assign(this,TransformBag.defaults,s),this}toArray(){const s=this;return[s.scaleX,s.scaleY,s.shear,s.rotate,s.translateX,s.translateY,s.originX,s.originY]}}TransformBag.defaults={scaleX:1,scaleY:1,shear:0,rotate:0,translateX:0,translateY:0,originX:0,originY:0};const sortByKey=(m,s)=>m[0]<s[0]?-1:m[0]>s[0]?1:0;class ObjectBag{constructor(...s){this.init(...s)}align(s){const d=this.values;for(let v=0,_=d.length;v<_;++v){if(d[v+1]===s[v+1]){if(d[v+1]===Color&&s[v+7]!==d[v+7]){const D=s[v+7],N=new Color(this.values.splice(v+3,5))[D]().toArray();this.values.splice(v+3,0,...N)}v+=d[v+2]+2;continue}if(!s[v+1])return this;const S=new s[v+1]().toArray(),I=d[v+2]+3;d.splice(v,I,s[v],s[v+1],s[v+2],...S),v+=d[v+2]+2}return this}init(s){if(this.values=[],Array.isArray(s)){this.values=s.slice();return}s=s||{};const d=[];for(const v in s){const _=getClassForType(s[v]),S=new _(s[v]).toArray();d.push([v,_,S.length,...S])}return d.sort(sortByKey),this.values=d.reduce((v,_)=>v.concat(_),[]),this}toArray(){return this.values}valueOf(){const s={},d=this.values;for(;d.length;){const v=d.shift(),_=d.shift(),S=d.shift(),I=d.splice(0,S);s[v]=new _(I)}return s}}const morphableTypes=[NonMorphable,TransformBag,ObjectBag];function registerMorphableType(m=[]){morphableTypes.push(...[].concat(m))}function makeMorphable(){extend(morphableTypes,{to(m){return new Morphable().type(this.constructor).from(this.toArray()).to(m)},fromArray(m){return this.init(m),this},toConsumable(){return this.toArray()},morph(m,s,d,v,_){const S=function(I,D){return v.step(I,s[D],d,_[D],_)};return this.fromArray(m.map(S))}})}class Path extends Shape{constructor(s,d=s){super(nodeOrNew("path",s),d)}array(){return this._array||(this._array=new PathArray(this.attr("d")))}clear(){return delete this._array,this}height(s){return s==null?this.bbox().height:this.size(this.bbox().width,s)}move(s,d){return this.attr("d",this.array().move(s,d))}plot(s){return s==null?this.array():this.clear().attr("d",typeof s=="string"?s:this._array=new PathArray(s))}size(s,d){const v=proportionalSize(this,s,d);return this.attr("d",this.array().size(v.width,v.height))}width(s){return s==null?this.bbox().width:this.size(s,this.bbox().height)}x(s){return s==null?this.bbox().x:this.move(s,this.bbox().y)}y(s){return s==null?this.bbox().y:this.move(this.bbox().x,s)}}Path.prototype.MorphArray=PathArray;registerMethods({Container:{path:wrapWithAttrCheck(function(m){return this.put(new Path).plot(m||new PathArray)})}});register(Path,"Path");function array(){return this._array||(this._array=new PointArray(this.attr("points")))}function clear(){return delete this._array,this}function move$2(m,s){return this.attr("points",this.array().move(m,s))}function plot(m){return m==null?this.array():this.clear().attr("points",typeof m=="string"?m:this._array=new PointArray(m))}function size$1(m,s){const d=proportionalSize(this,m,s);return this.attr("points",this.array().size(d.width,d.height))}var poly={__proto__:null,array,clear,move:move$2,plot,size:size$1};class Polygon extends Shape{constructor(s,d=s){super(nodeOrNew("polygon",s),d)}}registerMethods({Container:{polygon:wrapWithAttrCheck(function(m){return this.put(new Polygon).plot(m||new PointArray)})}});extend(Polygon,pointed);extend(Polygon,poly);register(Polygon,"Polygon");class Polyline extends Shape{constructor(s,d=s){super(nodeOrNew("polyline",s),d)}}registerMethods({Container:{polyline:wrapWithAttrCheck(function(m){return this.put(new Polyline).plot(m||new PointArray)})}});extend(Polyline,pointed);extend(Polyline,poly);register(Polyline,"Polyline");class Rect extends Shape{constructor(s,d=s){super(nodeOrNew("rect",s),d)}}extend(Rect,{rx,ry});registerMethods({Container:{rect:wrapWithAttrCheck(function(m,s){return this.put(new Rect).size(m,s)})}});register(Rect,"Rect");class Queue{constructor(){this._first=null,this._last=null}first(){return this._first&&this._first.value}last(){return this._last&&this._last.value}push(s){const d=typeof s.next<"u"?s:{value:s,next:null,prev:null};return this._last?(d.prev=this._last,this._last.next=d,this._last=d):(this._last=d,this._first=d),d}remove(s){s.prev&&(s.prev.next=s.next),s.next&&(s.next.prev=s.prev),s===this._last&&(this._last=s.prev),s===this._first&&(this._first=s.next),s.prev=null,s.next=null}shift(){const s=this._first;return s?(this._first=s.next,this._first&&(this._first.prev=null),this._last=this._first?this._last:null,s.value):null}}const Animator={nextDraw:null,frames:new Queue,timeouts:new Queue,immediates:new Queue,timer:()=>globals.window.performance||globals.window.Date,transforms:[],frame(m){const s=Animator.frames.push({run:m});return Animator.nextDraw===null&&(Animator.nextDraw=globals.window.requestAnimationFrame(Animator._draw)),s},timeout(m,s){s=s||0;const d=Animator.timer().now()+s,v=Animator.timeouts.push({run:m,time:d});return Animator.nextDraw===null&&(Animator.nextDraw=globals.window.requestAnimationFrame(Animator._draw)),v},immediate(m){const s=Animator.immediates.push(m);return Animator.nextDraw===null&&(Animator.nextDraw=globals.window.requestAnimationFrame(Animator._draw)),s},cancelFrame(m){m!=null&&Animator.frames.remove(m)},clearTimeout(m){m!=null&&Animator.timeouts.remove(m)},cancelImmediate(m){m!=null&&Animator.immediates.remove(m)},_draw(m){let s=null;const d=Animator.timeouts.last();for(;(s=Animator.timeouts.shift())&&(m>=s.time?s.run():Animator.timeouts.push(s),s!==d););let v=null;const _=Animator.frames.last();for(;v!==_&&(v=Animator.frames.shift());)v.run(m);let S=null;for(;S=Animator.immediates.shift();)S();Animator.nextDraw=Animator.timeouts.first()||Animator.frames.first()?globals.window.requestAnimationFrame(Animator._draw):null}},makeSchedule=function(m){const s=m.start,d=m.runner.duration(),v=s+d;return{start:s,duration:d,end:v,runner:m.runner}},defaultSource=function(){const m=globals.window;return(m.performance||m.Date).now()};class Timeline extends EventTarget{constructor(s=defaultSource){super(),this._timeSource=s,this._startTime=0,this._speed=1,this._persist=0,this._nextFrame=null,this._paused=!0,this._runners=[],this._runnerIds=[],this._lastRunnerId=-1,this._time=0,this._lastSourceTime=0,this._lastStepTime=0,this._step=this._stepFn.bind(this,!1),this._stepImmediate=this._stepFn.bind(this,!0)}active(){return!!this._nextFrame}finish(){return this.time(this.getEndTimeOfTimeline()+1),this.pause()}getEndTime(){const s=this.getLastRunnerInfo(),d=s?s.runner.duration():0;return(s?s.start:this._time)+d}getEndTimeOfTimeline(){const s=this._runners.map(d=>d.start+d.runner.duration());return Math.max(0,...s)}getLastRunnerInfo(){return this.getRunnerInfoById(this._lastRunnerId)}getRunnerInfoById(s){return this._runners[this._runnerIds.indexOf(s)]||null}pause(){return this._paused=!0,this._continue()}persist(s){return s==null?this._persist:(this._persist=s,this)}play(){return this._paused=!1,this.updateTime()._continue()}reverse(s){const d=this.speed();if(s==null)return this.speed(-d);const v=Math.abs(d);return this.speed(s?-v:v)}schedule(s,d,v){if(s==null)return this._runners.map(makeSchedule);let _=0;const S=this.getEndTime();if(d=d||0,v==null||v==="last"||v==="after")_=S;else if(v==="absolute"||v==="start")_=d,d=0;else if(v==="now")_=this._time;else if(v==="relative"){const N=this.getRunnerInfoById(s.id);N&&(_=N.start+d,d=0)}else if(v==="with-last"){const N=this.getLastRunnerInfo();_=N?N.start:this._time}else throw new Error('Invalid value for the "when" parameter');s.unschedule(),s.timeline(this);const I=s.persist(),D={persist:I===null?this._persist:I,start:_+d,runner:s};return this._lastRunnerId=s.id,this._runners.push(D),this._runners.sort((N,R)=>N.start-R.start),this._runnerIds=this._runners.map(N=>N.runner.id),this.updateTime()._continue(),this}seek(s){return this.time(this._time+s)}source(s){return s==null?this._timeSource:(this._timeSource=s,this)}speed(s){return s==null?this._speed:(this._speed=s,this)}stop(){return this.time(0),this.pause()}time(s){return s==null?this._time:(this._time=s,this._continue(!0))}unschedule(s){const d=this._runnerIds.indexOf(s.id);return d<0?this:(this._runners.splice(d,1),this._runnerIds.splice(d,1),s.timeline(null),this)}updateTime(){return this.active()||(this._lastSourceTime=this._timeSource()),this}_continue(s=!1){return Animator.cancelFrame(this._nextFrame),this._nextFrame=null,s?this._stepImmediate():this._paused?this:(this._nextFrame=Animator.frame(this._step),this)}_stepFn(s=!1){const d=this._timeSource();let v=d-this._lastSourceTime;s&&(v=0);const _=this._speed*v+(this._time-this._lastStepTime);this._lastSourceTime=d,s||(this._time+=_,this._time=this._time<0?0:this._time),this._lastStepTime=this._time,this.fire("time",this._time);for(let I=this._runners.length;I--;){const D=this._runners[I],N=D.runner;this._time-D.start<=0&&N.reset()}let S=!1;for(let I=0,D=this._runners.length;I<D;I++){const N=this._runners[I],R=N.runner;let P=_;const F=this._time-N.start;if(F<=0){S=!0;continue}else F<P&&(P=F);if(!R.active())continue;R.step(P).done?N.persist!==!0&&R.duration()-R.time()+this._time+N.persist<this._time&&(R.unschedule(),--I,--D):S=!0}return S&&!(this._speed<0&&this._time===0)||this._runnerIds.length&&this._speed<0&&this._time>0?this._continue():(this.pause(),this.fire("finished")),this}}registerMethods({Element:{timeline:function(m){return m==null?(this._timeline=this._timeline||new Timeline,this._timeline):(this._timeline=m,this)}}});class Runner extends EventTarget{constructor(s){super(),this.id=Runner.id++,s=s??timeline.duration,s=typeof s=="function"?new Controller(s):s,this._element=null,this._timeline=null,this.done=!1,this._queue=[],this._duration=typeof s=="number"&&s,this._isDeclarative=s instanceof Controller,this._stepper=this._isDeclarative?s:new Ease,this._history={},this.enabled=!0,this._time=0,this._lastTime=0,this._reseted=!0,this.transforms=new Matrix,this.transformId=1,this._haveReversed=!1,this._reverse=!1,this._loopsDone=0,this._swing=!1,this._wait=0,this._times=1,this._frameId=null,this._persist=this._isDeclarative?!0:null}static sanitise(s,d,v){let _=1,S=!1,I=0;return s=s||timeline.duration,d=d||timeline.delay,v=v||"last",typeof s=="object"&&!(s instanceof Stepper)&&(d=s.delay||d,v=s.when||v,S=s.swing||S,_=s.times||_,I=s.wait||I,s=s.duration||timeline.duration),{duration:s,delay:d,swing:S,times:_,wait:I,when:v}}active(s){return s==null?this.enabled:(this.enabled=s,this)}addTransform(s,d){return this.transforms.lmultiplyO(s),this}after(s){return this.on("finished",s)}animate(s,d,v){const _=Runner.sanitise(s,d,v),S=new Runner(_.duration);return this._timeline&&S.timeline(this._timeline),this._element&&S.element(this._element),S.loop(_).schedule(_.delay,_.when)}clearTransform(){return this.transforms=new Matrix,this}clearTransformsFromQueue(){(!this.done||!this._timeline||!this._timeline._runnerIds.includes(this.id))&&(this._queue=this._queue.filter(s=>!s.isTransform))}delay(s){return this.animate(0,s)}duration(){return this._times*(this._wait+this._duration)-this._wait}during(s){return this.queue(null,s)}ease(s){return this._stepper=new Ease(s),this}element(s){return s==null?this._element:(this._element=s,s._prepareRunner(),this)}finish(){return this.step(1/0)}loop(s,d,v){return typeof s=="object"&&(d=s.swing,v=s.wait,s=s.times),this._times=s||1/0,this._swing=d||!1,this._wait=v||0,this._times===!0&&(this._times=1/0),this}loops(s){const d=this._duration+this._wait;if(s==null){const I=Math.floor(this._time/d),N=(this._time-I*d)/this._duration;return Math.min(I+N,this._times)}const v=Math.floor(s),_=s%1,S=d*v+this._duration*_;return this.time(S)}persist(s){return s==null?this._persist:(this._persist=s,this)}position(s){const d=this._time,v=this._duration,_=this._wait,S=this._times,I=this._swing,D=this._reverse;let N;if(s==null){const H=function(st){const ot=I*Math.floor(st%(2*(_+v))/(_+v)),mt=ot&&!D||!ot&&D,ht=Math.pow(-1,mt)*(st%(_+v))/v+mt;return Math.max(Math.min(ht,1),0)},W=S*(_+v)-_;return N=d<=0?Math.round(H(1e-5)):d<W?H(d):Math.round(H(W-1e-5)),N}const R=Math.floor(this.loops()),P=I&&R%2===0;return N=R+(P&&!D||D&&P?s:1-s),this.loops(N)}progress(s){return s==null?Math.min(1,this._time/this.duration()):this.time(s*this.duration())}queue(s,d,v,_){return this._queue.push({initialiser:s||noop,runner:d||noop,retarget:v,isTransform:_,initialised:!1,finished:!1}),this.timeline()&&this.timeline()._continue(),this}reset(){return this._reseted?this:(this.time(0),this._reseted=!0,this)}reverse(s){return this._reverse=s??!this._reverse,this}schedule(s,d,v){if(s instanceof Timeline||(v=d,d=s,s=this.timeline()),!s)throw Error("Runner cannot be scheduled without timeline");return s.schedule(this,d,v),this}step(s){if(!this.enabled)return this;s=s??16,this._time+=s;const d=this.position(),v=this._lastPosition!==d&&this._time>=0;this._lastPosition=d;const _=this.duration(),S=this._lastTime<=0&&this._time>0,I=this._lastTime<_&&this._time>=_;this._lastTime=this._time,S&&this.fire("start",this);const D=this._isDeclarative;this.done=!D&&!I&&this._time>=_,this._reseted=!1;let N=!1;return(v||D)&&(this._initialise(v),this.transforms=new Matrix,N=this._run(D?s:d),this.fire("step",this)),this.done=this.done||N&&D,I&&this.fire("finished",this),this}time(s){if(s==null)return this._time;const d=s-this._time;return this.step(d),this}timeline(s){return typeof s>"u"?this._timeline:(this._timeline=s,this)}unschedule(){const s=this.timeline();return s&&s.unschedule(this),this}_initialise(s){if(!(!s&&!this._isDeclarative))for(let d=0,v=this._queue.length;d<v;++d){const _=this._queue[d],S=this._isDeclarative||!_.initialised&&s;s=!_.finished,S&&s&&(_.initialiser.call(this),_.initialised=!0)}}_rememberMorpher(s,d){if(this._history[s]={morpher:d,caller:this._queue[this._queue.length-1]},this._isDeclarative){const v=this.timeline();v&&v.play()}}_run(s){let d=!0;for(let v=0,_=this._queue.length;v<_;++v){const S=this._queue[v],I=S.runner.call(this,s);S.finished=S.finished||I===!0,d=d&&S.finished}return d}_tryRetarget(s,d,v){if(this._history[s]){if(!this._history[s].caller.initialised){const S=this._queue.indexOf(this._history[s].caller);return this._queue.splice(S,1),!1}this._history[s].caller.retarget?this._history[s].caller.retarget.call(this,d,v):this._history[s].morpher.to(d),this._history[s].caller.finished=!1;const _=this.timeline();return _&&_.play(),!0}return!1}}Runner.id=0;class FakeRunner{constructor(s=new Matrix,d=-1,v=!0){this.transforms=s,this.id=d,this.done=v}clearTransformsFromQueue(){}}extend([Runner,FakeRunner],{mergeWith(m){return new FakeRunner(m.transforms.lmultiply(this.transforms),m.id)}});const lmultiply=(m,s)=>m.lmultiplyO(s),getRunnerTransform=m=>m.transforms;function mergeTransforms(){const s=this._transformationRunners.runners.map(getRunnerTransform).reduce(lmultiply,new Matrix);this.transform(s),this._transformationRunners.merge(),this._transformationRunners.length()===1&&(this._frameId=null)}class RunnerArray{constructor(){this.runners=[],this.ids=[]}add(s){if(this.runners.includes(s))return;const d=s.id+1;return this.runners.push(s),this.ids.push(d),this}clearBefore(s){const d=this.ids.indexOf(s+1)||1;return this.ids.splice(0,d,0),this.runners.splice(0,d,new FakeRunner).forEach(v=>v.clearTransformsFromQueue()),this}edit(s,d){const v=this.ids.indexOf(s+1);return this.ids.splice(v,1,s+1),this.runners.splice(v,1,d),this}getByID(s){return this.runners[this.ids.indexOf(s+1)]}length(){return this.ids.length}merge(){let s=null;for(let d=0;d<this.runners.length;++d){const v=this.runners[d];if(s&&v.done&&s.done&&(!v._timeline||!v._timeline._runnerIds.includes(v.id))&&(!s._timeline||!s._timeline._runnerIds.includes(s.id))){this.remove(v.id);const S=v.mergeWith(s);this.edit(s.id,S),s=S,--d}else s=v}return this}remove(s){const d=this.ids.indexOf(s+1);return this.ids.splice(d,1),this.runners.splice(d,1),this}}registerMethods({Element:{animate(m,s,d){const v=Runner.sanitise(m,s,d),_=this.timeline();return new Runner(v.duration).loop(v).element(this).timeline(_.play()).schedule(v.delay,v.when)},delay(m,s){return this.animate(0,m,s)},_clearTransformRunnersBefore(m){this._transformationRunners.clearBefore(m.id)},_currentTransform(m){return this._transformationRunners.runners.filter(s=>s.id<=m.id).map(getRunnerTransform).reduce(lmultiply,new Matrix)},_addRunner(m){this._transformationRunners.add(m),Animator.cancelImmediate(this._frameId),this._frameId=Animator.immediate(mergeTransforms.bind(this))},_prepareRunner(){this._frameId==null&&(this._transformationRunners=new RunnerArray().add(new FakeRunner(new Matrix(this))))}}});const difference=(m,s)=>m.filter(d=>!s.includes(d));extend(Runner,{attr(m,s){return this.styleAttr("attr",m,s)},css(m,s){return this.styleAttr("css",m,s)},styleAttr(m,s,d){if(typeof s=="string")return this.styleAttr(m,{[s]:d});let v=s;if(this._tryRetarget(m,v))return this;let _=new Morphable(this._stepper).to(v),S=Object.keys(v);return this.queue(function(){_=_.from(this.element()[m](S))},function(I){return this.element()[m](_.at(I).valueOf()),_.done()},function(I){const D=Object.keys(I),N=difference(D,S);if(N.length){const P=this.element()[m](N),F=new ObjectBag(_.from()).valueOf();Object.assign(F,P),_.from(F)}const R=new ObjectBag(_.to()).valueOf();Object.assign(R,I),_.to(R),S=D,v=I}),this._rememberMorpher(m,_),this},zoom(m,s){if(this._tryRetarget("zoom",m,s))return this;let d=new Morphable(this._stepper).to(new SVGNumber(m));return this.queue(function(){d=d.from(this.element().zoom())},function(v){return this.element().zoom(d.at(v),s),d.done()},function(v,_){s=_,d.to(v)}),this._rememberMorpher("zoom",d),this},transform(m,s,d){if(s=m.relative||s,this._isDeclarative&&!s&&this._tryRetarget("transform",m))return this;const v=Matrix.isMatrixLike(m);d=m.affine!=null?m.affine:d??!v;const _=new Morphable(this._stepper).type(d?TransformBag:Matrix);let S,I,D,N,R;function P(){I=I||this.element(),S=S||getOrigin(m,I),R=new Matrix(s?void 0:I),I._addRunner(this),s||I._clearTransformRunnersBefore(this)}function F(W){s||this.clearTransform();const{x:st,y:ot}=new Point(S).transform(I._currentTransform(this));let mt=new Matrix({...m,origin:[st,ot]}),ht=this._isDeclarative&&D?D:R;if(d){mt=mt.decompose(st,ot),ht=ht.decompose(st,ot);const Ot=mt.rotate,Pt=ht.rotate,$t=[Ot-360,Ot,Ot+360],Rt=$t.map(ae=>Math.abs(ae-Pt)),Ut=Math.min(...Rt),Ft=Rt.indexOf(Ut);mt.rotate=$t[Ft]}s&&(v||(mt.rotate=m.rotate||0),this._isDeclarative&&N&&(ht.rotate=N)),_.from(ht),_.to(mt);const Tt=_.at(W);return N=Tt.rotate,D=new Matrix(Tt),this.addTransform(D),I._addRunner(this),_.done()}function H(W){(W.origin||"center").toString()!==(m.origin||"center").toString()&&(S=getOrigin(W,I)),m={...W,origin:S}}return this.queue(P,F,H,!0),this._isDeclarative&&this._rememberMorpher("transform",_),this},x(m,s){return this._queueNumber("x",m)},y(m){return this._queueNumber("y",m)},dx(m=0){return this._queueNumberDelta("x",m)},dy(m=0){return this._queueNumberDelta("y",m)},dmove(m,s){return this.dx(m).dy(s)},_queueNumberDelta(m,s){if(s=new SVGNumber(s),this._tryRetarget(m,s))return this;const d=new Morphable(this._stepper).to(s);let v=null;return this.queue(function(){v=this.element()[m](),d.from(v),d.to(v+s)},function(_){return this.element()[m](d.at(_)),d.done()},function(_){d.to(v+new SVGNumber(_))}),this._rememberMorpher(m,d),this},_queueObject(m,s){if(this._tryRetarget(m,s))return this;const d=new Morphable(this._stepper).to(s);return this.queue(function(){d.from(this.element()[m]())},function(v){return this.element()[m](d.at(v)),d.done()}),this._rememberMorpher(m,d),this},_queueNumber(m,s){return this._queueObject(m,new SVGNumber(s))},cx(m){return this._queueNumber("cx",m)},cy(m){return this._queueNumber("cy",m)},move(m,s){return this.x(m).y(s)},center(m,s){return this.cx(m).cy(s)},size(m,s){let d;return(!m||!s)&&(d=this._element.bbox()),m||(m=d.width/d.height*s),s||(s=d.height/d.width*m),this.width(m).height(s)},width(m){return this._queueNumber("width",m)},height(m){return this._queueNumber("height",m)},plot(m,s,d,v){if(arguments.length===4)return this.plot([m,s,d,v]);if(this._tryRetarget("plot",m))return this;const _=new Morphable(this._stepper).type(this._element.MorphArray).to(m);return this.queue(function(){_.from(this._element.array())},function(S){return this._element.plot(_.at(S)),_.done()}),this._rememberMorpher("plot",_),this},leading(m){return this._queueNumber("leading",m)},viewbox(m,s,d,v){return this._queueObject("viewbox",new Box(m,s,d,v))},update(m){return typeof m!="object"?this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]}):(m.opacity!=null&&this.attr("stop-opacity",m.opacity),m.color!=null&&this.attr("stop-color",m.color),m.offset!=null&&this.attr("offset",m.offset),this)}});extend(Runner,{rx,ry,from,to});register(Runner,"Runner");class Svg extends Container$1{constructor(s,d=s){super(nodeOrNew("svg",s),d),this.namespace()}defs(){return this.isRoot()?adopt(this.node.querySelector("defs"))||this.put(new Defs):this.root().defs()}isRoot(){return!this.node.parentNode||!(this.node.parentNode instanceof globals.window.SVGElement)&&this.node.parentNode.nodeName!=="#document-fragment"}namespace(){return this.isRoot()?this.attr({xmlns:svg,version:"1.1"}).attr("xmlns:xlink",xlink,xmlns).attr("xmlns:svgjs",svgjs,xmlns):this.root().namespace()}removeNamespace(){return this.attr({xmlns:null,version:null}).attr("xmlns:xlink",null,xmlns).attr("xmlns:svgjs",null,xmlns)}root(){return this.isRoot()?this:super.root()}}registerMethods({Container:{nested:wrapWithAttrCheck(function(){return this.put(new Svg)})}});register(Svg,"Svg",!0);let Symbol$1=class extends Container$1{constructor(s,d=s){super(nodeOrNew("symbol",s),d)}};registerMethods({Container:{symbol:wrapWithAttrCheck(function(){return this.put(new Symbol$1)})}});register(Symbol$1,"Symbol");function plain(m){return this._build===!1&&this.clear(),this.node.appendChild(globals.document.createTextNode(m)),this}function length(){return this.node.getComputedTextLength()}function x$1(m,s=this.bbox()){return m==null?s.x:this.attr("x",this.attr("x")+m-s.x)}function y$1(m,s=this.bbox()){return m==null?s.y:this.attr("y",this.attr("y")+m-s.y)}function move$1(m,s,d=this.bbox()){return this.x(m,d).y(s,d)}function cx(m,s=this.bbox()){return m==null?s.cx:this.attr("x",this.attr("x")+m-s.cx)}function cy(m,s=this.bbox()){return m==null?s.cy:this.attr("y",this.attr("y")+m-s.cy)}function center(m,s,d=this.bbox()){return this.cx(m,d).cy(s,d)}function ax(m){return this.attr("x",m)}function ay(m){return this.attr("y",m)}function amove(m,s){return this.ax(m).ay(s)}function build(m){return this._build=!!m,this}var textable={__proto__:null,plain,length,x:x$1,y:y$1,move:move$1,cx,cy,center,ax,ay,amove,build};class Text extends Shape{constructor(s,d=s){super(nodeOrNew("text",s),d),this.dom.leading=new SVGNumber(1.3),this._rebuild=!0,this._build=!1}leading(s){return s==null?this.dom.leading:(this.dom.leading=new SVGNumber(s),this.rebuild())}rebuild(s){if(typeof s=="boolean"&&(this._rebuild=s),this._rebuild){const d=this;let v=0;const _=this.dom.leading;this.each(function(S){const I=globals.window.getComputedStyle(this.node).getPropertyValue("font-size"),D=_*new SVGNumber(I);this.dom.newLined&&(this.attr("x",d.attr("x")),this.text()===`
`?v+=D:(this.attr("dy",S?D+v:0),v=0))}),this.fire("rebuild")}return this}setData(s){return this.dom=s,this.dom.leading=new SVGNumber(s.leading||1.3),this}text(s){if(s===void 0){const d=this.node.childNodes;let v=0;s="";for(let _=0,S=d.length;_<S;++_){if(d[_].nodeName==="textPath"){_===0&&(v=1);continue}_!==v&&d[_].nodeType!==3&&adopt(d[_]).dom.newLined===!0&&(s+=`
`),s+=d[_].textContent}return s}if(this.clear().build(!0),typeof s=="function")s.call(this,this);else{s=(s+"").split(`
`);for(let d=0,v=s.length;d<v;d++)this.newLine(s[d])}return this.build(!1).rebuild()}}extend(Text,textable);registerMethods({Container:{text:wrapWithAttrCheck(function(m=""){return this.put(new Text).text(m)}),plain:wrapWithAttrCheck(function(m=""){return this.put(new Text).plain(m)})}});register(Text,"Text");class Tspan extends Shape{constructor(s,d=s){super(nodeOrNew("tspan",s),d),this._build=!1}dx(s){return this.attr("dx",s)}dy(s){return this.attr("dy",s)}newLine(){this.dom.newLined=!0;const s=this.parent();if(!(s instanceof Text))return this;const d=s.index(this),v=globals.window.getComputedStyle(this.node).getPropertyValue("font-size"),_=s.dom.leading*new SVGNumber(v);return this.dy(d?_:0).attr("x",s.x())}text(s){return s==null?this.node.textContent+(this.dom.newLined?`
`:""):(typeof s=="function"?(this.clear().build(!0),s.call(this,this),this.build(!1)):this.plain(s),this)}}extend(Tspan,textable);registerMethods({Tspan:{tspan:wrapWithAttrCheck(function(m=""){const s=new Tspan;return this._build||this.clear(),this.put(s).text(m)})},Text:{newLine:function(m=""){return this.tspan(m).newLine()}}});register(Tspan,"Tspan");class Circle extends Shape{constructor(s,d=s){super(nodeOrNew("circle",s),d)}radius(s){return this.attr("r",s)}rx(s){return this.attr("r",s)}ry(s){return this.rx(s)}size(s){return this.radius(new SVGNumber(s).divide(2))}}extend(Circle,{x:x$3,y:y$3,cx:cx$1,cy:cy$1,width:width$2,height:height$2});registerMethods({Container:{circle:wrapWithAttrCheck(function(m=0){return this.put(new Circle).size(m).move(0,0)})}});register(Circle,"Circle");class ClipPath extends Container$1{constructor(s,d=s){super(nodeOrNew("clipPath",s),d)}remove(){return this.targets().forEach(function(s){s.unclip()}),super.remove()}targets(){return baseFind("svg [clip-path*="+this.id()+"]")}}registerMethods({Container:{clip:wrapWithAttrCheck(function(){return this.defs().put(new ClipPath)})},Element:{clipper(){return this.reference("clip-path")},clipWith(m){const s=m instanceof ClipPath?m:this.parent().clip().add(m);return this.attr("clip-path","url(#"+s.id()+")")},unclip(){return this.attr("clip-path",null)}}});register(ClipPath,"ClipPath");class ForeignObject extends Element{constructor(s,d=s){super(nodeOrNew("foreignObject",s),d)}}registerMethods({Container:{foreignObject:wrapWithAttrCheck(function(m,s){return this.put(new ForeignObject).size(m,s)})}});register(ForeignObject,"ForeignObject");function dmove(m,s){return this.children().forEach((d,v)=>{let _;try{_=d.bbox()}catch{return}const S=new Matrix(d),I=S.translate(m,s).transform(S.inverse()),D=new Point(_.x,_.y).transform(I);d.move(D.x,D.y)}),this}function dx(m){return this.dmove(m,0)}function dy(m){return this.dmove(0,m)}function height(m,s=this.bbox()){return m==null?s.height:this.size(s.width,m,s)}function move(m=0,s=0,d=this.bbox()){const v=m-d.x,_=s-d.y;return this.dmove(v,_)}function size(m,s,d=this.bbox()){const v=proportionalSize(this,m,s,d),_=v.width/d.width,S=v.height/d.height;return this.children().forEach((I,D)=>{const N=new Point(d).transform(new Matrix(I).inverse());I.scale(_,S,N.x,N.y)}),this}function width(m,s=this.bbox()){return m==null?s.width:this.size(m,s.height,s)}function x(m,s=this.bbox()){return m==null?s.x:this.move(m,s.y,s)}function y(m,s=this.bbox()){return m==null?s.y:this.move(s.x,m,s)}var containerGeometry={__proto__:null,dmove,dx,dy,height,move,size,width,x,y};class G extends Container$1{constructor(s,d=s){super(nodeOrNew("g",s),d)}}extend(G,containerGeometry);registerMethods({Container:{group:wrapWithAttrCheck(function(){return this.put(new G)})}});register(G,"G");class A extends Container$1{constructor(s,d=s){super(nodeOrNew("a",s),d)}target(s){return this.attr("target",s)}to(s){return this.attr("href",s,xlink)}}extend(A,containerGeometry);registerMethods({Container:{link:wrapWithAttrCheck(function(m){return this.put(new A).to(m)})},Element:{unlink(){const m=this.linker();if(!m)return this;const s=m.parent();if(!s)return this.remove();const d=s.index(m);return s.add(this,d),m.remove(),this},linkTo(m){let s=this.linker();return s||(s=new A,this.wrap(s)),typeof m=="function"?m.call(s,s):s.to(m),this},linker(){const m=this.parent();return m&&m.node.nodeName.toLowerCase()==="a"?m:null}}});register(A,"A");class Mask extends Container$1{constructor(s,d=s){super(nodeOrNew("mask",s),d)}remove(){return this.targets().forEach(function(s){s.unmask()}),super.remove()}targets(){return baseFind("svg [mask*="+this.id()+"]")}}registerMethods({Container:{mask:wrapWithAttrCheck(function(){return this.defs().put(new Mask)})},Element:{masker(){return this.reference("mask")},maskWith(m){const s=m instanceof Mask?m:this.parent().mask().add(m);return this.attr("mask","url(#"+s.id()+")")},unmask(){return this.attr("mask",null)}}});register(Mask,"Mask");class Stop extends Element{constructor(s,d=s){super(nodeOrNew("stop",s),d)}update(s){return(typeof s=="number"||s instanceof SVGNumber)&&(s={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),s.opacity!=null&&this.attr("stop-opacity",s.opacity),s.color!=null&&this.attr("stop-color",s.color),s.offset!=null&&this.attr("offset",new SVGNumber(s.offset)),this}}registerMethods({Gradient:{stop:function(m,s,d){return this.put(new Stop).update(m,s,d)}}});register(Stop,"Stop");function cssRule(m,s){if(!m)return"";if(!s)return m;let d=m+"{";for(const v in s)d+=unCamelCase(v)+":"+s[v]+";";return d+="}",d}class Style extends Element{constructor(s,d=s){super(nodeOrNew("style",s),d)}addText(s=""){return this.node.textContent+=s,this}font(s,d,v={}){return this.rule("@font-face",{fontFamily:s,src:d,...v})}rule(s,d){return this.addText(cssRule(s,d))}}registerMethods("Dom",{style(m,s){return this.put(new Style).rule(m,s)},fontface(m,s,d){return this.put(new Style).font(m,s,d)}});register(Style,"Style");class TextPath extends Text{constructor(s,d=s){super(nodeOrNew("textPath",s),d)}array(){const s=this.track();return s?s.array():null}plot(s){const d=this.track();let v=null;return d&&(v=d.plot(s)),s==null?v:this}track(){return this.reference("href")}}registerMethods({Container:{textPath:wrapWithAttrCheck(function(m,s){return m instanceof Text||(m=this.text(m)),m.path(s)})},Text:{path:wrapWithAttrCheck(function(m,s=!0){const d=new TextPath;m instanceof Path||(m=this.defs().path(m)),d.attr("href","#"+m,xlink);let v;if(s)for(;v=this.node.firstChild;)d.node.appendChild(v);return this.put(d)}),textPath(){return this.findOne("textPath")}},Path:{text:wrapWithAttrCheck(function(m){return m instanceof Text||(m=new Text().addTo(this.parent()).text(m)),m.path(this)}),targets(){return baseFind("svg textPath").filter(m=>(m.attr("href")||"").includes(this.id()))}}});TextPath.prototype.MorphArray=PathArray;register(TextPath,"TextPath");class Use extends Shape{constructor(s,d=s){super(nodeOrNew("use",s),d)}use(s,d){return this.attr("href",(d||"")+"#"+s,xlink)}}registerMethods({Container:{use:wrapWithAttrCheck(function(m,s){return this.put(new Use).use(m,s)})}});register(Use,"Use");const SVG=makeInstance;extend([Svg,Symbol$1,Image,Pattern,Marker],getMethodsFor("viewbox"));extend([Line,Polyline,Polygon,Path],getMethodsFor("marker"));extend(Text,getMethodsFor("Text"));extend(Path,getMethodsFor("Path"));extend(Defs,getMethodsFor("Defs"));extend([Text,Tspan],getMethodsFor("Tspan"));extend([Rect,Ellipse,Gradient,Runner],getMethodsFor("radius"));extend(EventTarget,getMethodsFor("EventTarget"));extend(Dom,getMethodsFor("Dom"));extend(Element,getMethodsFor("Element"));extend(Shape,getMethodsFor("Shape"));extend([Container$1,Fragment],getMethodsFor("Container"));extend(Gradient,getMethodsFor("Gradient"));extend(Runner,getMethodsFor("Runner"));List.extend(getMethodNames());registerMorphableType([SVGNumber,Color,Box,Matrix,SVGArray,PointArray,PathArray,Point]);makeMorphable();class Hooks{add(s,d,v){if(typeof arguments[0]!="string")for(let _ in arguments[0])this.add(_,arguments[0][_],arguments[1]);else(Array.isArray(s)?s:[s]).forEach(function(_){this[_]=this[_]||[],d&&this[_][v?"unshift":"push"](d)},this)}run(s,d){this[s]=this[s]||[],this[s].forEach(function(v){v.call(d&&d.context?d.context:d,d)})}}class Plugins{constructor(s){this.jsep=s,this.registered={}}register(...s){s.forEach(d=>{if(typeof d!="object"||!d.name||!d.init)throw new Error("Invalid JSEP plugin format");this.registered[d.name]||(d.init(this.jsep),this.registered[d.name]=d)})}}class Jsep{static get version(){return"1.3.8"}static toString(){return"JavaScript Expression Parser (JSEP) v"+Jsep.version}static addUnaryOp(s){return Jsep.max_unop_len=Math.max(s.length,Jsep.max_unop_len),Jsep.unary_ops[s]=1,Jsep}static addBinaryOp(s,d,v){return Jsep.max_binop_len=Math.max(s.length,Jsep.max_binop_len),Jsep.binary_ops[s]=d,v?Jsep.right_associative.add(s):Jsep.right_associative.delete(s),Jsep}static addIdentifierChar(s){return Jsep.additional_identifier_chars.add(s),Jsep}static addLiteral(s,d){return Jsep.literals[s]=d,Jsep}static removeUnaryOp(s){return delete Jsep.unary_ops[s],s.length===Jsep.max_unop_len&&(Jsep.max_unop_len=Jsep.getMaxKeyLen(Jsep.unary_ops)),Jsep}static removeAllUnaryOps(){return Jsep.unary_ops={},Jsep.max_unop_len=0,Jsep}static removeIdentifierChar(s){return Jsep.additional_identifier_chars.delete(s),Jsep}static removeBinaryOp(s){return delete Jsep.binary_ops[s],s.length===Jsep.max_binop_len&&(Jsep.max_binop_len=Jsep.getMaxKeyLen(Jsep.binary_ops)),Jsep.right_associative.delete(s),Jsep}static removeAllBinaryOps(){return Jsep.binary_ops={},Jsep.max_binop_len=0,Jsep}static removeLiteral(s){return delete Jsep.literals[s],Jsep}static removeAllLiterals(){return Jsep.literals={},Jsep}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(s){this.expr=s,this.index=0}static parse(s){return new Jsep(s).parse()}static getMaxKeyLen(s){return Math.max(0,...Object.keys(s).map(d=>d.length))}static isDecimalDigit(s){return s>=48&&s<=57}static binaryPrecedence(s){return Jsep.binary_ops[s]||0}static isIdentifierStart(s){return s>=65&&s<=90||s>=97&&s<=122||s>=128&&!Jsep.binary_ops[String.fromCharCode(s)]||Jsep.additional_identifier_chars.has(String.fromCharCode(s))}static isIdentifierPart(s){return Jsep.isIdentifierStart(s)||Jsep.isDecimalDigit(s)}throwError(s){const d=new Error(s+" at character "+this.index);throw d.index=this.index,d.description=s,d}runHook(s,d){if(Jsep.hooks[s]){const v={context:this,node:d};return Jsep.hooks.run(s,v),v.node}return d}searchHook(s){if(Jsep.hooks[s]){const d={context:this};return Jsep.hooks[s].find(function(v){return v.call(d.context,d),d.node}),d.node}}gobbleSpaces(){let s=this.code;for(;s===Jsep.SPACE_CODE||s===Jsep.TAB_CODE||s===Jsep.LF_CODE||s===Jsep.CR_CODE;)s=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const s=this.gobbleExpressions(),d=s.length===1?s[0]:{type:Jsep.COMPOUND,body:s};return this.runHook("after-all",d)}gobbleExpressions(s){let d=[],v,_;for(;this.index<this.expr.length;)if(v=this.code,v===Jsep.SEMCOL_CODE||v===Jsep.COMMA_CODE)this.index++;else if(_=this.gobbleExpression())d.push(_);else if(this.index<this.expr.length){if(v===s)break;this.throwError('Unexpected "'+this.char+'"')}return d}gobbleExpression(){const s=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",s)}gobbleBinaryOp(){this.gobbleSpaces();let s=this.expr.substr(this.index,Jsep.max_binop_len),d=s.length;for(;d>0;){if(Jsep.binary_ops.hasOwnProperty(s)&&(!Jsep.isIdentifierStart(this.code)||this.index+s.length<this.expr.length&&!Jsep.isIdentifierPart(this.expr.charCodeAt(this.index+s.length))))return this.index+=d,s;s=s.substr(0,--d)}return!1}gobbleBinaryExpression(){let s,d,v,_,S,I,D,N,R;if(I=this.gobbleToken(),!I||(d=this.gobbleBinaryOp(),!d))return I;for(S={value:d,prec:Jsep.binaryPrecedence(d),right_a:Jsep.right_associative.has(d)},D=this.gobbleToken(),D||this.throwError("Expected expression after "+d),_=[I,S,D];d=this.gobbleBinaryOp();){if(v=Jsep.binaryPrecedence(d),v===0){this.index-=d.length;break}S={value:d,prec:v,right_a:Jsep.right_associative.has(d)},R=d;const P=F=>S.right_a&&F.right_a?v>F.prec:v<=F.prec;for(;_.length>2&&P(_[_.length-2]);)D=_.pop(),d=_.pop().value,I=_.pop(),s={type:Jsep.BINARY_EXP,operator:d,left:I,right:D},_.push(s);s=this.gobbleToken(),s||this.throwError("Expected expression after "+R),_.push(S,s)}for(N=_.length-1,s=_[N];N>1;)s={type:Jsep.BINARY_EXP,operator:_[N-1].value,left:_[N-2],right:s},N-=2;return s}gobbleToken(){let s,d,v,_;if(this.gobbleSpaces(),_=this.searchHook("gobble-token"),_)return this.runHook("after-token",_);if(s=this.code,Jsep.isDecimalDigit(s)||s===Jsep.PERIOD_CODE)return this.gobbleNumericLiteral();if(s===Jsep.SQUOTE_CODE||s===Jsep.DQUOTE_CODE)_=this.gobbleStringLiteral();else if(s===Jsep.OBRACK_CODE)_=this.gobbleArray();else{for(d=this.expr.substr(this.index,Jsep.max_unop_len),v=d.length;v>0;){if(Jsep.unary_ops.hasOwnProperty(d)&&(!Jsep.isIdentifierStart(this.code)||this.index+d.length<this.expr.length&&!Jsep.isIdentifierPart(this.expr.charCodeAt(this.index+d.length)))){this.index+=v;const S=this.gobbleToken();return S||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:Jsep.UNARY_EXP,operator:d,argument:S,prefix:!0})}d=d.substr(0,--v)}Jsep.isIdentifierStart(s)?(_=this.gobbleIdentifier(),Jsep.literals.hasOwnProperty(_.name)?_={type:Jsep.LITERAL,value:Jsep.literals[_.name],raw:_.name}:_.name===Jsep.this_str&&(_={type:Jsep.THIS_EXP})):s===Jsep.OPAREN_CODE&&(_=this.gobbleGroup())}return _?(_=this.gobbleTokenProperty(_),this.runHook("after-token",_)):this.runHook("after-token",!1)}gobbleTokenProperty(s){this.gobbleSpaces();let d=this.code;for(;d===Jsep.PERIOD_CODE||d===Jsep.OBRACK_CODE||d===Jsep.OPAREN_CODE||d===Jsep.QUMARK_CODE;){let v;if(d===Jsep.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==Jsep.PERIOD_CODE)break;v=!0,this.index+=2,this.gobbleSpaces(),d=this.code}this.index++,d===Jsep.OBRACK_CODE?(s={type:Jsep.MEMBER_EXP,computed:!0,object:s,property:this.gobbleExpression()},this.gobbleSpaces(),d=this.code,d!==Jsep.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):d===Jsep.OPAREN_CODE?s={type:Jsep.CALL_EXP,arguments:this.gobbleArguments(Jsep.CPAREN_CODE),callee:s}:(d===Jsep.PERIOD_CODE||v)&&(v&&this.index--,this.gobbleSpaces(),s={type:Jsep.MEMBER_EXP,computed:!1,object:s,property:this.gobbleIdentifier()}),v&&(s.optional=!0),this.gobbleSpaces(),d=this.code}return s}gobbleNumericLiteral(){let s="",d,v;for(;Jsep.isDecimalDigit(this.code);)s+=this.expr.charAt(this.index++);if(this.code===Jsep.PERIOD_CODE)for(s+=this.expr.charAt(this.index++);Jsep.isDecimalDigit(this.code);)s+=this.expr.charAt(this.index++);if(d=this.char,d==="e"||d==="E"){for(s+=this.expr.charAt(this.index++),d=this.char,(d==="+"||d==="-")&&(s+=this.expr.charAt(this.index++));Jsep.isDecimalDigit(this.code);)s+=this.expr.charAt(this.index++);Jsep.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+s+this.char+")")}return v=this.code,Jsep.isIdentifierStart(v)?this.throwError("Variable names cannot start with a number ("+s+this.char+")"):(v===Jsep.PERIOD_CODE||s.length===1&&s.charCodeAt(0)===Jsep.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:Jsep.LITERAL,value:parseFloat(s),raw:s}}gobbleStringLiteral(){let s="";const d=this.index,v=this.expr.charAt(this.index++);let _=!1;for(;this.index<this.expr.length;){let S=this.expr.charAt(this.index++);if(S===v){_=!0;break}else if(S==="\\")switch(S=this.expr.charAt(this.index++),S){case"n":s+=`
`;break;case"r":s+="\r";break;case"t":s+="	";break;case"b":s+="\b";break;case"f":s+="\f";break;case"v":s+="\v";break;default:s+=S}else s+=S}return _||this.throwError('Unclosed quote after "'+s+'"'),{type:Jsep.LITERAL,value:s,raw:this.expr.substring(d,this.index)}}gobbleIdentifier(){let s=this.code,d=this.index;for(Jsep.isIdentifierStart(s)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(s=this.code,Jsep.isIdentifierPart(s));)this.index++;return{type:Jsep.IDENTIFIER,name:this.expr.slice(d,this.index)}}gobbleArguments(s){const d=[];let v=!1,_=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let S=this.code;if(S===s){v=!0,this.index++,s===Jsep.CPAREN_CODE&&_&&_>=d.length&&this.throwError("Unexpected token "+String.fromCharCode(s));break}else if(S===Jsep.COMMA_CODE){if(this.index++,_++,_!==d.length){if(s===Jsep.CPAREN_CODE)this.throwError("Unexpected token ,");else if(s===Jsep.CBRACK_CODE)for(let I=d.length;I<_;I++)d.push(null)}}else if(d.length!==_&&_!==0)this.throwError("Expected comma");else{const I=this.gobbleExpression();(!I||I.type===Jsep.COMPOUND)&&this.throwError("Expected comma"),d.push(I)}}return v||this.throwError("Expected "+String.fromCharCode(s)),d}gobbleGroup(){this.index++;let s=this.gobbleExpressions(Jsep.CPAREN_CODE);if(this.code===Jsep.CPAREN_CODE)return this.index++,s.length===1?s[0]:s.length?{type:Jsep.SEQUENCE_EXP,expressions:s}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:Jsep.ARRAY_EXP,elements:this.gobbleArguments(Jsep.CBRACK_CODE)}}}const hooks=new Hooks;Object.assign(Jsep,{hooks,plugins:new Plugins(Jsep),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},right_associative:new Set,additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});Jsep.max_unop_len=Jsep.getMaxKeyLen(Jsep.unary_ops);Jsep.max_binop_len=Jsep.getMaxKeyLen(Jsep.binary_ops);const jsep=m=>new Jsep(m).parse(),staticMethods=Object.getOwnPropertyNames(Jsep);staticMethods.forEach(m=>{jsep[m]===void 0&&m!=="prototype"&&(jsep[m]=Jsep[m])});jsep.Jsep=Jsep;const CONDITIONAL_EXP="ConditionalExpression";var ternary={name:"ternary",init(m){m.hooks.add("after-expression",function(d){if(d.node&&this.code===m.QUMARK_CODE){this.index++;const v=d.node,_=this.gobbleExpression();if(_||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===m.COLON_CODE){this.index++;const S=this.gobbleExpression();if(S||this.throwError("Expected expression"),d.node={type:CONDITIONAL_EXP,test:v,consequent:_,alternate:S},v.operator&&m.binary_ops[v.operator]<=.9){let I=v;for(;I.right.operator&&m.binary_ops[I.right.operator]<=.9;)I=I.right;d.node.test=I.right,I.right=d.node,d.node=v}}else this.throwError("Expected :")}})}};jsep.plugins.register(ternary);class Container{x(s){if(typeof s<"u")this._x=s,this.group.x(s);else return this.group.x()}y(s){if(typeof s<"u")this._y=s,this.group.y(s);else return this.group.y()}dy(s){if(typeof s<"u")this._y+=s,this.group.dy(s);else return this._y}getItemStartPoints(s){return s.noStartPoints?[]:s.getStartPoints?s.getStartPoints():[[s.x(),s.y()+s.height()/2]]}getItemEndPoints(s){return s.getEndPointsFrom&&(s=s.getEndPointsFrom),s.noEndPoints?[]:s.getEndPoints?s.getEndPoints():[[s.x()+s.width(),s.y()+s.height()/2]]}getStartPoints(){if(this.noStartPoints)return[];switch(this.type){case"serial":if(this.c.length){let s=this.c[0];return this.getItemStartPoints(s)}else return[];case"parallel":{let s=[];for(let d=0;d<this.c.length;d++)s=s.concat(this.getItemStartPoints(this.c[d]));return s}}}getEndPoints(){if(this.noEndPoints)return[];switch(this.type){case"serial":if(this.c.length){let s=this.c[this.c.length-1];return this.getItemEndPoints(s)}else return[];case"parallel":{let s=[];for(let d=0;d<this.c.length;d++)s=s.concat(this.getItemEndPoints(this.c[d]));return s}}}width(s){if(typeof s>"u")return this.group.width()}height(s){if(typeof s>"u")return this.group.height()}addTo(s){return this.group.addTo(s),this}constructor(s,d){this.gap=30,this.c=[],this.type=s,this.myNode=d,this.group=SVG().group()}push(s){switch(this.type){case"serial":this.c.length?s.x(this.c[this.c.length-1].x()+this.c[this.c.length-1].width()+this.gap):s.x(10),s.y(10),this.c.push(s);let d=0;for(let v=0;v<this.c.length;v++)d=Math.max(d,this.c[v].height()/2);for(let v=0;v<this.c.length;v++)this.c[v].y(d-this.c[v].height()/2);break;case"parallel":if(this.c.length){let v=this.c[this.c.length-1].y()+this.c[this.c.length-1].height()+this.gap;s.y(v)}else s.y(10);s.x(10),this.c.push(s);break}s instanceof Container?s.group.addTo(this.group):s.addTo(this.group)}makeLines(s,d){let v=SVG().group();for(let _=0;_<s.length;_++)for(let S=0;S<d.length;S++){let I=s[_],D=d[S],R=mySVG.bezier(I[0],I[1],D[0],D[1],-1);this.strokeDashArray&&R.attr({"stroke-dasharray":this.strokeDashArray}),this.type=="serial"&&!this.strokeDashArray&&R.attr({"marker-end":"url(#arrow)"}),R.addTo(v)}return v}renderLines(){let s=SVG().group();for(let d=0;d<this.c.length-1;d++)if(this.c[d]instanceof Container&&this.c[d].renderLines().addTo(s),this.type==="serial"){let v=this.getItemEndPoints(this.c[d]),_=this.getItemStartPoints(this.c[d+1]),S=this.makeLines(v,_);S&&S.addTo(s)}return this.c[this.c.length-1]instanceof Container&&this.c[this.c.length-1].renderLines().addTo(s),s}applyItemsAfterwards(){this.group.applyItemsAfterwards&&this.group.applyItemsAfterwards();for(let s=0;s<this.c.length;s++)this.c[s].applyItemsAfterwards&&this.c[s].applyItemsAfterwards()}breakLine(){switch(this.type){case"serial":for(let s=0;s<c.length-1;s++)w+=c[s].width()+this.gap;return w+=c[c.length-1].width(),w}}}class mySVG{model(s){if(s&&Object.keys(this.modellingFunctions).indexOf(s.nodeName)!==-1)return this.elementsFound.indexOf(s.nodeName)==-1&&this.elementsFound.push(s.nodeName),this.modellingFunctions[s.nodeName](s)}constructor(){this.elementsFound=[]}render(s){if(!s)return;let d=SVG();SVG(`<defs>
            <marker id="arrow" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,4 L5,2 z" fill="#000" />
            </marker>
          </defs>`).addTo(d);let _=this.model(s);return _.addTo(d),_.renderLines&&_.renderLines().addTo(_.group),_.x(10),_.y(10),_.applyItemsAfterwards&&_.applyItemsAfterwards(),d.node.dataset.source=encodeURIComponent(s.outerHTML.replace(/\n/g," ").replace(/\t/g," ").replace(/\s\s+/g," ").trim()),d.size(_.width()+100,_.height()+100),this.svg=d.node,d.node}renderKey(){let s=SVG().group();for(let v=0;v<this.elementsFound.length;v++){let _=this.examples[this.elementsFound[v]];if(!_)continue;let S=document.createElement("div");S.innerHTML=_.html;let I=this.model(S);I.addTo(s),I.y(s.height()+25),I.renderLines&&I.renderLines().addTo(I.group)}let d=SVG().size(s.width()+50,s.height()+50);return s.x(10),s.y(10),s.addTo(d),d.node}download(s){let d=new Blob([this.svg.outerHTML]),v=document.createElement("a");v.download=s,v.href=window.URL.createObjectURL(d),v.click(),v.remove()}static bezier(s,d,v,_){let S=s+(v-s)/1.5,I=d,D=v-(v-s)/1.5,R=`M ${s},${d} C${S},${I} ${D},${_} ${v},${_}`,P=SVG().path(R);return P.attr({fill:"none",stroke:"black","stroke-width":3}),P}get modellingFunctions(){return{"AA-SESSION":s=>{let d=new Container("parallel",s);for(let v=0;v<s.originalChildNodes.length;v++){let _=this.model(s.originalChildNodes[v]);_&&d.push(_)}return d.myNode=s,d},"AA-SEQUENCE":s=>{let d=new Container("serial",s);for(let v=0;v<s.childNodes.length;v++){let _=this.model(s.childNodes[v]);_&&d.push(_)}return d.myNode=s,d},"AA-SCREEN":s=>{let d=SVG().group(),v=SVG().rect(30,50).attr({fill:"none",stroke:"black","stroke-width":5,rx:3}).addTo(d),_;if(s.getAttribute("name")){let S=s.getAttribute("name");S.length>14&&(S=S.substr(0,11)+"..."),_=SVG().text(function(I){I.tspan(S).font({family:"serif",style:"italic",size:"12px",weight:"bold"})}),v.x(d.x()+d.width()/2-v.width()/2),v.y(d.height()/2-v.height()/2)+10,_.y(v.y()+v.height()+5)}return d.myNode=s,d.nocentering=!0,d.getEndPoints=()=>[[v.x()+v.width(),v.y()+v.height()/2]],d.getStartPoints=()=>[[v.x(),v.y()+v.height()/2]],_&&(d.applyItemsAfterwards=()=>{_.addTo(d),_.x(v.x()+v.width()/2-_.bbox().width/2),_.y(v.y()+v.height()+7)}),d},"AA-CHOOSE":s=>{let d=new Container("serial",s);d.strokeDashArray="3";let v=SVG().circle(20).attr({fill:"none",stroke:"black","stroke-width":5,"stroke-dasharray":0}),_=SVG().circle(2).attr({fill:"black",stroke:"black","stroke-width":5}),S=new Container("parallel",s),I=0,D=!1;for(let N=0;N<s.childNodes.length;N++){s.childNodes[N].nodeName==="AA-OTHERWISE"&&(D=!0);let R=this.model(s.childNodes[N]);R&&(S.push(R),I=Math.max(R.width(),I))}if(!D){let N=new Container("serial"),R=SVG().line();N.push(R),R.plot(10,100,I,100),R.attr({fill:"black",stroke:"black","stroke-dasharray":3,"stroke-width":3}),S.push(N)}for(let N=0;N<S.c.length;N++){let R=S.c[N];R.x(I/2-R.width()/2)}return d.push(v),d.push(S),d.push(_),d.myNode=s,d.applyItemsAfterwards=()=>{for(let N=0;N<S.c.length;N++)S.c[N].applyItemsAfterwards&&S.c[N].applyItemsAfterwards()},d},"AA-FUNCTION-RANDOM":s=>{let d=new Container("serial",s),v=SVG().group();SVG().text(function(I){I.tspan("f").font({family:"serif",style:"italic",size:"50px",weight:"bold"}),I.tspan("random ").font({family:"serif",style:"italic",size:"15px"})}).addTo(v);let S=SVG().text(function(I){I.tspan(s.getAttribute("name")).font({family:"monospace",size:"12px",weight:"bold"})});return S.addTo(v),S.dy(20),S.dx(-10),d.push(v),d.myNode=s,d},"AA-WHEN":s=>{let d=SVG().group(),v=new Container("parallel");for(let I=0;I<s.childNodes.length;I++){let D=this.model(s.childNodes[I]);D&&v.push(D)}let _=SVG().text(function(I){I.tspan("when").font({family:"serif",style:"italic",size:"30px",weight:"bold"})}),S=SVG().text(function(I){let D=s.getAttribute("test");if(D){let N=jsep(D);if(N.left&&N.left.name&&N.left.name.length>7){let R=N.left.name.substr(0,5)+"...";D=D.replace(N.left.name,R)}}I.tspan(D).font({family:"monospace",size:"12px",weight:"bold"})});return v.addTo(d),_.addTo(d),S.addTo(d),S.y(_.y()+_.bbox().height),v.x(_.x()+_.bbox().width+40),v.y(_.y()+_.bbox().height/1.5-v.height()/2),d.strokeDashArray="3",d.myNode=s,d.getEndPoints=()=>[[v.x()+v.width(),v.y()+v.height()/2]],d.getStartPoints=()=>[[_.bbox().x,_.bbox().y+_.bbox().height/2]],d.applyItemsAfterwards=()=>{for(let I=0;I<v.c.length;I++)console.log(v.c[I]),v.c[I].applyItemsAfterwards&&v.c[I].applyItemsAfterwards()},d},"AA-OTHERWISE":s=>{let d=SVG().group(),v=new Container("parallel");for(let S=0;S<s.childNodes.length;S++){let I=this.model(s.childNodes[S]);I&&v.push(I)}let _=SVG().text(function(S){S.tspan("otherwise").font({family:"serif",style:"italic",size:"30px",weight:"bold"})});return v.addTo(d),_.addTo(d),v.x(_.x()+_.bbox().width+10),v.y(_.y()+_.bbox().height/1.5-v.height()/2),d.strokeDashArray="3",d.myNode=s,d.getEndPoints=()=>[[v.x()+v.width(),v.y()+v.height()/2]],d.getStartPoints=()=>[[_.bbox().x,_.bbox().y+_.bbox().height/2]],d.applyItemsAfterwards=()=>{for(let S=0;S<v.c.length;S++)console.log(v.c[S]),v.c[S].applyItemsAfterwards&&v.c[S].applyItemsAfterwards()},d},DIV:s=>{let d=new Container("parallel",s);for(let v=0;v<s.childNodes.length;v++){let _=this.model(s.childNodes[v]);_&&d.push(_)}return d.myNode=s,d}}}get examples(){return{"AA-SEQUENCE":{html:'<aa-sequence><aa-screen name="first screen"></aa-screen><aa-screen name="second screen"></aa-screen></aa-sequence>',comment:"sequence"},"AA-SCREEN":{html:'<aa-screen name="<name>"></aa-screen>',comment:"screen"},"AA-FUNCTION-RANDOM":{html:"<aa-function-random></aa-function-random>",comment:"random number generator"},"AA-CHOOSE":{html:"<aa-choose><aa-when><aa-screen></aa-screen></aa-when></aa-choose>",comment:"random number generator"}}}}const html=function(m,...s){let d=m[0];for(let v=0;v<s.length;v++)d+=s[v],d+=m[v+1];return d};window&&(window.html=html);const AAClasses=[];window.AAClasses=AAClasses;class AABaseElement extends HTMLElement{constructor(){super(),this._attachedTimestamp=0,this._debug=!1,this._props=this.makePropertiesFromAttributes()}static get properties(){return{name:{type:String,userDefined:!0},diagram:{type:Boolean,value:!1,userDefined:!0},"diagram-transparent":{type:Boolean,value:!1,userDefined:!0}}}static registerAAElement(s,d){customElements.get(s)||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push(s.toUpperCase()),customElements.define(s,d)),AAClasses[s.toUpperCase()]=d}static isAAElement(s){return AANodeNames.indexOf(s.nodeName.toUpperCase())!=-1}static createFragmentForNode(s){let d=document.createDocumentFragment();for(let v=0;v<s.childNodes.length;v++)d.append(s.childNodes[v].cloneNode(!0));return d}static createHolderForNode(s){let d=s.cloneNode(!1);return d.innerFragment=AABaseElement.createFragmentForNode(s),d}static scanAndReplace(s){if(s.nodeName==="TEMPLATE")AABaseElement.scanAndReplace(s.content);else if(AABaseElement.isAAElement(s)){let d=AABaseElement.createHolderForNode(s);s.replaceWith(d)}else for(let d=0;d<s.childNodes.length;d++)AABaseElement.scanAndReplace(s.childNodes[d])}connectedCallback(){if(this._attachedTimestamp=new Date().getTime(),this._debug=this.debug===!0||this.debug===null,this.innerFragment)for(let s=0;s<this.innerFragment.childNodes.length;s++)this.appendChild(AABaseElement.copy(this.innerFragment.childNodes[s]));this.setAttributeDefaultValues()}getMemory(){let s=this;for(;s.parentNode!=null;){if(s._mem)return s._mem;s=s.parentNode}return null}makePropertiesFromAttributes(){let d=customElements.get(this.tagName.toLowerCase()).observedAttributes;if(!d)return null;let v={};for(let _=0;_<d.length;_++){let S=this.toCamelCase(d[_]);v[S]=d[_],!(typeof this[S]<"u")&&Object.defineProperty(this,S,{get:()=>{let I=this.getAttribute(d[_]);return I==="true"?!0:I==="false"?!1:I==="null"?null:I},set:I=>{this.setAttribute(d[_],I)}})}return v}toCamelCase(s){let d=s.split("-"),v=d[0];for(let _=1;_<d.length;_++)v+=d[_][0].toUpperCase()+d[_].substr(1);return v}toHyphenated(s){let d="";for(let v=0;v<s.length;v++){let _=s[v];_.toLowerCase()!==_?d+=`-${_.toLowerCase()}`:d+=_}return d}setAttributeDefaultValues(){let s=this.constructor.properties;if(s){let d=Object.keys(s);for(let v=0;v<d.length;v++){let _=this.toCamelCase(d[v]);if(typeof this[_]>"u"||this[_]===null||this[_]==="")if(s[d[v]].type===Boolean)this.getAttribute(d[v])===""?this.setAttribute(d[v],"true"):this.getAttribute(d[v])==="true"?this.setAttribute(d[v],"true"):this.getAttribute(d[v])==="false"?this.setAttribute(d[v],"false"):this.getAttribute(d[v])===null&&this.setAttribute(d[v],s[d[v]].value);else{let S=this.getAttribute(d[v])||s[d[v]].value||null;S&&this.setAttribute(d[v],S),S===!1&&this.setAttribute(d[v],String(S))}}}}static copy(s){let d;return AABaseElement.isAAElement(s)?s.innerFragment?(d=s.cloneNode(),d.innerFragment=AABaseElement.createFragmentForNode(s.innerFragment)):(d=s.cloneNode(),d.innerFragment=AABaseElement.createFragmentForNode(s)):d=s.cloneNode(!0),d}getAttributes(){let s={},d=Object.keys(this.constructor.properties);for(let v=0;v<d.length;v++)if(this.constructor.properties[d[v]].userDefined&&typeof this.getAttribute(d[v])<"u"&&this.getAttribute(d[v])!=="undefined"){if(this.constructor.properties[d[v]].value==this.getAttribute(d[v]))continue;s[d[v]]=this.getAttribute(d[v])}return s}toJSON(){let s={},d=this.tagName.toLowerCase();return s[d]=this.getAttributes(),this.childNodes.length&&(s[d].childNodes=[],this.childNodes.forEach(v=>{s[d].childNodes.push(AABaseElement.nodeToJSON(v))})),s}static nodeToJSON(s){if(s.nodeType===document.TEXT_NODE||s.nodeType===document.COMMENT_NODE){let d={},v=s.textContent.replace(/\n/g," ").replace(/\t/g," ").replace(/\s\s+/g," ").trim();return v!==""?(d[s.nodeName]=v,d):null}else{if(s.toJSON)return s.toJSON();try{let d={},v=s.getAttributeNames(),_={};for(let I=0;I<v.length;I++)_[v[I]]=s.getAttribute(v[I]);let S=[];for(let I=0;I<s.childNodes.length;I++)AABaseElement.nodeToJSON(s.childNodes[I])&&S.push(AABaseElement.nodeToJSON(s.childNodes[I]));return d[s.tagName]=_,d[s.tagName].childNodes=S,d}catch(d){console.error(d)}}}toYAML(){return jsyaml.dump(this.toJSON())}toJSL(){return nodeToJSL(this)}produceDiagram(){this.root||(this.root=this.attachShadow({mode:"open"})),this.root.innerHTML='<div id="svgContainer" ></div>';let s=this.root.childNodes[0],d=new mySVG,v=d.render(this),_=document.createElement("paper-button");_.innerHTML="download",_.raised=!0,_.style.backgroundColor="#0d47a1",_.style.color="white",_.classList.add("indigo"),s.appendChild(v),s.appendChild(_);let S="";this.name?S=this.name+"."+this.nodeName.toLowerCase()+".svg":S=this.nodeName.toLowerCase()+".svg",_.addEventListener("click",()=>{d.download(S)})}static getDomPathAsName(s){for(var d=[],v=0,_=0;s.nodeName!=="AA-SESSION"&&s.parentNode!=null;){v=0,_=0;for(var S=0;S<s.parentNode.childNodes.length;S++){var I=s.parentNode.childNodes[S];I.nodeName==s.nodeName&&(I===s&&(_=v),v++)}if(!AABaseElement.isAAElement(s)){s=s.parentNode;continue}s.hasAttribute("name")&&s.name!=""?d.unshift(s.name):s.hasAttribute("id")&&s.id!=""?d.unshift(s.nodeName.toLowerCase()+"#"+s.id):v>1?d.unshift(s.nodeName.toLowerCase()+":eq("+_+")"):d.unshift(s.nodeName.toLowerCase()),s=s.parentNode}s.nodeName==="AA-SESSION"&&(s.hasAttribute("name")&&s.name!=""?d.unshift(s.name):s.hasAttribute("id")&&s.id!=""?d.unshift(s.nodeName.toLowerCase()+"#"+s.id):v>1?d.unshift(s.nodeName.toLowerCase()+":eq("+_+")"):d.unshift(s.nodeName.toLowerCase()));let D="";for(let N=0;N<d.length-1;N++)D+=d[N]+".";return D+=d[d.length-1],D}static getVariableName(s){const d=s.getAttribute("name");return d||AABaseElement.getDomPathAsName(s)}_dispatchDebugEvent(s){this.debug&&this.dispatchEvent(new CustomEvent("debugEvent",{detail:s,bubbles:!0}))}_dispatchEndEvent(s){this.dispatchEvent(new CustomEvent("endEvent",{bubbles:!0,detail:s}))}_getParentSession(){let s=this;for(;s!=null&&s.nodeName!="AA-SESSION";)s=s.parentNode;return s}}customElements.get("aa-base-element")||(window.AANodeNames=window.AANodeNames||[],window.AANodeNames.push("AA-BASE-ELEMENT"),customElements.define("aa-base-element",AABaseElement));window.nodeToJSON=AABaseElement.nodeToJSON;class AAScreen extends AABaseElement{constructor(){super(),this.submitButton=null,this.submitButtonContainer=null,this._started=!1,this._attachedTimestamp=new Date().getTime(),this.root=this.attachShadow({mode:"open"})}static get category(){return"UI"}static get tag(){return"aa-screen"}static get properties(){return{...AABaseElement.properties,"submit-button-text":{type:String,value:"submit",userDefined:!0},"submit-button-hidden":{type:Boolean,value:!1,userDefined:!0},"expect-wait":{type:Boolean,userDefined:!1,value:!0},autohide:{type:Boolean,userDefined:!1,value:!0}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAScreen.properties)}attributeChangedCallback(s,d,v){switch(s){case"submit-button-text":this.submitButton&&(this.submitButton.innerHTML=v);break;case"submit-button-hidden":this.submitButtonContainer&&(v!==!0||v!=="true"?this.submitButtonContainer.style.display="block":this.submitButtonContainer.style.display="none");break}}connectedCallback(){var s;if(super.connectedCallback(),this.diagram){this.produceDiagram();return}this.root.innerHTML=this.css+this.html,this.submitButtonContainer=this.root.querySelector(".submitButtonContainer"),!this._started&&(this._started=!0,this.submitButtonHidden&&this.submitButtonContainer&&(this.submitButtonContainer.style.display="none"),this.submitButton=this.root.querySelector(".submitButton"),(s=this.submitButton)==null||s.addEventListener("click",d=>{this.submitButtonClick(d)}))}get css(){return html`<style>
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
                </div>`}getSubmitButton(){let s=this.submitButtonText||this.getAttribute("submit-button-text")||"submit";return customElements.get("sl-button")?html`<sl-button variant="primary" class='submitButton'>${s}</sl-button>`:html`<button class='submitButton'>${s}</button>`}async submitButtonClick(s){(await this.hasChildrenThatRequireResponse()).length>0||this.collectValues().then(v=>{try{const _={value:v};let S=new CustomEvent("valueSubmit",{bubbles:!0,detail:_});this.dispatchEvent(S),this._dispatchEndEvent(v),typeof(s==null?void 0:s.detail.callback)<"u"&&(s==null||s.detail.callback(s)),this.getAttribute("autohide")==="true"&&this.hide()}catch(_){console.error(_)}})}collectValues(){return new Promise((s,d)=>{let v={attachedTimestamp:this._attachedTimestamp,submitTimestamp:new Date().getTime()};this.getChildrenValues(this).then(_=>{_.__meta=v,s(_)})})}doesArrayConsistOfNullsOrUndefined(s){return s.every(d=>d==null)}async getNodeValue(s){return s.getValue?s.getValue():s.value?s.value.then?await s.value:lodashExports.isArray(s.value)&&this.doesArrayConsistOfNullsOrUndefined(s.value)?null:s.value:null}async hasChildrenThatRequireResponse(){const s=this.querySelectorAll("[required]"),d=[];for(const v of Array.from(s)){const _=await this.getNodeValue(v);["",null,void 0].includes(_)?(v.classList.add("missing-value"),d.push(v)):v.classList.remove("missing-value")}return d}getAAChildren(s,d,v){d=d||[],s=s||this;for(let _=0;_<s.children.length;_++)AABaseElement.isAAElement(s.children[_])?v?s.children[_].nodeName===v&&d.push(s.children[_]):d.push(s.children[_]):this.getAAChildren(s.children[_],d,v);return d}async getChildrenValues(s,d){s=s||this,d=d||{};for(let v=0;v<s.children.length;v++){let _=s.children[v];if(_.nodeName!="AA-LABEL"){let S=AABaseElement.getVariableName(_);_.getValue?d[S]=_.getValue():_.value?_.value.then?d[S]=await _.value:d[S]=_.value:await this.getChildrenValues(_,d)}else await this.getChildrenValues(_,d)}return d}get value(){return this.collectValues()}valueWithKey(){return new Promise((s,d)=>{this.value.then(v=>{let _={};_[this.getAttribute("name")]=v,s(_)})})}automate(){for(let s=0;s<this.children.length;s++)AABaseElement.isAAElement(this.children[s])&&typeof this.children[s].automate<"u"&&this.children[s].automate();this.submitButtonClick()}hide(){let s=this.getAAChildren(this,[]);for(let d=0;d<s.length;d++)s[d].stop&&s[d].stop();this.style.display="none"}show(){this.style.display="block"}}AABaseElement.registerAAElement("aa-screen",AAScreen);class AAAffectGrid extends AABaseElement{constructor(){super(),this.grid=null,this.selectedCell=null,this.totalContainer=null,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-affect-grid"}static get properties(){return{...super.properties,"top-label":{type:String,userDefined:!0,value:""},"bottom-label":{type:String,userDefined:!0,value:""},"left-label":{type:String,userDefined:!0,value:""},"center-label":{type:String,userDefined:!0,value:""},"right-label":{type:String,userDefined:!0,value:""},"top-left-label":{type:String,userDefined:!0,value:""},"top-right-label":{type:String,userDefined:!0,value:""},"bottom-left-label":{type:String,userDefined:!0,value:""},"bottom-right-label":{type:String,userDefined:!0,value:""},"left-top-label":{type:String,userDefined:!0,value:""},"left-bottom-label":{type:String,userDefined:!0,value:""},"right-top-label":{type:String,userDefined:!0,value:""},"right-bottom-label":{type:String,userDefined:!0,value:""},rows:{type:Number,userDefined:!0,value:11},columns:{type:Number,userDefined:!0,value:11},value:{type:Array},required:{type:Boolean,userDefined:!0,value:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AAAffectGrid.properties)}get x(){let s=this.getAttribute("value");return s?parseInt(s.split(",")[0]):null}get y(){let s=this.getAttribute("value");return s?parseInt(s.split(",")[1]):null}get value(){let s=this.getAttribute("value");if(!s)return null;let d=s.split(",");return[parseInt(d[0]),parseInt(d[1])]}set value(s){this.setAttribute("value",s)}get minLabel(){return this.getAttribute("min-label")}get maxLabel(){return this.getAttribute("max-label")}set minLabel(s){this.setAttribute("min-label",s)}set maxLabel(s){this.setAttribute("max-label",s)}set min(s){this.setAttribute("min",s)}set max(s){this.setAttribute("max",s)}connectedCallback(){super.connectedCallback(),this.topLeftLabel===null&&(this.topLeftLabel=""),this.topLabel===null&&(this.topLabel=""),this.topRightLabel===null&&(this.topRightLabel=""),this.leftTopLabel===null&&(this.leftTopLabel=""),this.leftLabel===null&&(this.leftLabel=""),this.leftBottomLabel===null&&(this.leftBottomLabel=""),this.rightTopLabel===null&&(this.rightTopLabel=""),this.rightLabel===null&&(this.rightLabel=""),this.rightBottomLabel===null&&(this.rightBottomLabel=""),this.bottomLeftLabel===null&&(this.bottomLeftLabel=""),this.bottomLabel===null&&(this.bottomLabel=""),this.root.innerHTML=this.css+this.html,this.grid=this.root.querySelector(".grid"),this.grid.addEventListener("mousedown",s=>{let d=this.value,v=s.target;this.value=[v.dataset.x,v.dataset.y],this.selectedCell&&this.selectedCell.classList.remove("selected"),this.selectedCell=v,this.selectedCell.classList.add("selected");let _=this.value;d?(d[0]!=_[0]||d[1]!=_[1])&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})):this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.totalContainer=this.root.querySelector(".total-container"),this.totalContainer.style.height=window.getComputedStyle(this.totalContainer).width,this.root.querySelector(".leftLabels").style.width=window.getComputedStyle(this.grid).height,this.root.querySelector(".rightLabels").style.width=window.getComputedStyle(this.grid).height,ResizeObserver&&new ResizeObserver(()=>{this.totalContainer.style.height=window.getComputedStyle(this.totalContainer).width,this.root.querySelector(".leftLabels").style.width=window.getComputedStyle(this.grid).height,this.root.querySelector(".rightLabels").style.width=window.getComputedStyle(this.grid).height}).observe(this.root.querySelector(".top-label"))}get css(){return html`<style>
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

        `}}AABaseElement.registerAAElement("aa-affect-grid",AAAffectGrid);class AACamera extends AABaseElement{constructor(){super(),this._stream=null,this._videoEl=null,this._canvasEl=null,this._imgEl=null,this._captureBtn=null,this._retakeBtn=null,this._flipBtn=null,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-camera"}static get properties(){return{name:{type:String,userDefined:!0},facing:{type:String,userDefined:!0,value:"environment",valuesAllowed:["environment","user"]},value:{type:String,userDefined:!1},width:{type:Number,userDefined:!0,value:640},height:{type:Number,userDefined:!0,value:480}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AACamera.properties)}get value(){return this.getAttribute("value")}set value(s){s?this.setAttribute("value",s):this.removeAttribute("value");let d=this.getMemory();d&&d.setData(AABaseElement.getVariableName(this),s)}connectedCallback(){super.connectedCallback(),this.root.innerHTML=this.css+this.htmlTemplate,this._videoEl=this.root.querySelector(".preview"),this._canvasEl=this.root.querySelector(".canvas"),this._imgEl=this.root.querySelector(".captured"),this._captureBtn=this.root.querySelector(".capture-btn"),this._retakeBtn=this.root.querySelector(".retake-btn"),this._flipBtn=this.root.querySelector(".flip-btn"),this._captureBtn.addEventListener("click",()=>this._capture()),this._retakeBtn.addEventListener("click",()=>this._retake()),this._flipBtn.addEventListener("click",()=>this._flipCamera()),this._startCamera()}disconnectedCallback(){this._stopStream()}async _startCamera(){this._stopStream();try{const s=this.getAttribute("facing")||"environment";this._stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:s}}),this._videoEl&&(this._videoEl.srcObject=this._stream)}catch(s){console.error("aa-camera: could not access camera",s)}}_stopStream(){this._stream&&(this._stream.getTracks().forEach(s=>s.stop()),this._stream=null)}_capture(){if(!this._videoEl||!this._canvasEl||!this._imgEl)return;const s=Number(this.getAttribute("width"))||640,d=Number(this.getAttribute("height"))||480;this._canvasEl.width=s,this._canvasEl.height=d;const v=this._canvasEl.getContext("2d");if(!v)return;v.drawImage(this._videoEl,0,0,s,d);const _=this._canvasEl.toDataURL("image/jpeg");this.value=_,this._imgEl.src=_,this._imgEl.style.display="block",this._videoEl.style.display="none",this._captureBtn&&(this._captureBtn.style.display="none"),this._flipBtn&&(this._flipBtn.style.display="none"),this._retakeBtn&&(this._retakeBtn.style.display="inline-block"),this.dispatchEvent(new CustomEvent("change"))}_retake(){this.value=null,this._imgEl&&(this._imgEl.style.display="none",this._imgEl.src=""),this._videoEl&&(this._videoEl.style.display="block"),this._captureBtn&&(this._captureBtn.style.display="inline-block"),this._flipBtn&&(this._flipBtn.style.display="inline-block"),this._retakeBtn&&(this._retakeBtn.style.display="none"),this._startCamera()}_flipCamera(){const d=(this.getAttribute("facing")||"environment")==="environment"?"user":"environment";this.setAttribute("facing",d),this._startCamera()}get css(){return html`<style>
        :host {
            display: block;
            overflow: hidden;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
        .preview, .captured {
            width: 100%;
            max-width: 640px;
            border-radius: 8px;
            background: #000;
            object-fit: cover;
        }
        .canvas {
            display: none;
        }
        .captured {
            display: none;
        }
        .controls {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .controls button {
            font-family: sans-serif;
            font-size: 16px;
            padding: 10px 20px;
            border: 1px solid #ccc;
            border-radius: 6px;
            background: #fff;
            cursor: pointer;
            transition: background 0.15s;
        }
        .controls button:hover {
            background: #f0f0f0;
        }
        .capture-btn {
            background: #4CAF50 !important;
            color: #fff;
            border-color: #4CAF50 !important;
        }
        .capture-btn:hover {
            background: #43A047 !important;
        }
        </style>`}get htmlTemplate(){return html`
        <div class="container">
            <video class="preview" autoplay playsinline></video>
            <canvas class="canvas"></canvas>
            <img class="captured" alt="Captured photo">
            <div class="controls">
                <button class="flip-btn" type="button">\u27F2 Flip</button>
                <button class="capture-btn" type="button">\uD83D\uDCF7 Capture</button>
                <button class="retake-btn" type="button" style="display:none">\u21BA Retake</button>
            </div>
        </div>`}}AABaseElement.registerAAElement("aa-camera",AACamera);class AAChoiceItem extends AABaseElement{static get tag(){return"aa-choice-item"}static get properties(){return{value:{type:String,userDefined:!0},checked:{type:Boolean,value:!1}}}static get observedAttributes(){return["name"]}static get acceptsElements(){return["#text"]}get staticObject(){return AAChoiceItem}set orientation(s){this._orientation=s,s=="vertical"?(this.itemBlock.style.flexDirection="column",this.label.classList.add("label-vertical"),this.label.classList.remove("label-horizontal")):s=="horizontal"&&(this.itemBlock.style.flexDirection="row",this.itemBlock.style.alignItems="center",this.label.classList.remove("label-vertical"),this.label.classList.add("label-horizontal"))}get orientation(){return this._orientation}get checked(){if(this.item)return this.item.checked}set checked(s){this.item&&(this.item.checked=s==="false"?!1:s==="true"?!0:s)}get value(){const s=this.getAttribute("value");return s||this.innerHTML.trim()}set value(s){this.setAttribute("value",s)}constructor(){super(),this.kind="radioButton",this.item=null,this.itemBlock=document.createElement("div"),this.label=document.createElement("div"),this._orientation="vertical",this.root=this.attachShadow({mode:"open"}),this.root.innerHTML=this.css}getRadioButton(){if(customElements.get("sl-radio"))return document.createElement("sl-radio");const s=document.createElement("input");return s.type="radio",s}getCheckbox(){if(customElements.get("sl-checkbox"))return document.createElement("sl-checkbox");const s=document.createElement("input");return s.type="checkbox",s}connectedCallback(){super.connectedCallback(),this.slot=document.createElement("slot"),this.label.innerHTML="<slot></slot>",this.parentElement.tagName==="AA-CHECKBOXES"&&(this.kind="checkBox"),this.parentElement.value===this.value&&(this.checked=!0),this.kind=="radioButton"?(this.item&&this.item.remove(),this.item=this.getRadioButton(),this.item.style.display="block",this.item.checked=this.checked,this.item.addEventListener("click",()=>{this.item.checked=!this.item.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.label.addEventListener("click",()=>{this.item.checked=!0,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.itemBlock.appendChild(this.item),this.itemBlock.appendChild(this.label),this.root.appendChild(this.itemBlock)):(this.item&&this.item.remove(),this.item=this.getCheckbox(),this.item.style.display="block",this.item.checked=this.checked,this.item.addEventListener("click",()=>{this.item.checked=!this.item.checked,this.checked=this.item.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.label.addEventListener("click",()=>{this.item.checked=!this.item.checked,this.checked=this.item.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}),this.itemBlock.appendChild(this.item),this.itemBlock.appendChild(this.label),this.root.appendChild(this.itemBlock)),this.label.classList.add("label-horizontal"),this.itemBlock.style.display="flex",this.itemBlock.style.alignItems="center",this.itemBlock.style.padding="10px"}get css(){return html`<style>
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
        </style>`}toJSON(){return super.toJSON()}}AABaseElement.registerAAElement("aa-choice-item",AAChoiceItem);class AACheckboxes extends AABaseElement{static get category(){return"response item"}static get tag(){return"aa-checkboxes"}static get properties(){return{horizontal:{type:Boolean,value:!1,userDefined:!0},vertical:{type:Boolean,value:!0,userDefined:!0},name:{type:String,userDefined:!0},value:{type:String,userDefined:!1}}}static get acceptsElements(){return["aa-choice-item"]}static get observedAttributes(){return["horizontal","vertical"]}get value(){const s=[];for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(v.checked?s.push(v.value):s.push(null))}return s}set value(s){Array.isArray(s)||(s=[s]);for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(s.includes(v.value)?v.checked=!0:v.checked=!1)}}constructor(){super(),this.horizontal_wasChangedInternally__=!1,this.vertical_wasChangedInternally__=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("change",s=>{s.stopPropagation(),this.parentElement.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{value:this.value}}))})}toJSON(){let s=super.toJSON(),d=[];for(let v=0;v<this.children.length;v++)d.push(this.children[v].toJSON());return s[this.tagName.toLowerCase()].items=d,s}}AABaseElement.registerAAElement("aa-checkboxes",AACheckboxes);class AAMultipleChoice extends AABaseElement{static get category(){return"response item"}static get tag(){return"aa-multiple-choice"}static get properties(){return{horizontal:{type:Boolean,value:!1,userDefined:!0},vertical:{type:Boolean,value:!0,userDefined:!0},name:{type:String,userDefined:!0},value:{type:String,userDefined:!0}}}static get acceptsElements(){return["aa-choice-item"]}static get observedAttributes(){return["horizontal","vertical"]}attributeChangedCallback(s,d,v){switch(s){case"horizontal":if(v=="true"){this.style.display="flex";for(let _=0;_<this.children.length;_++){const S=this.children[_];S.tagName=="AA-CHOICE-ITEM"&&(S.orientation="vertical")}}if(this.vertical_wasChangedInternally__){this.vertical_wasChangedInternally__=!1;return}this.vertical_wasChangedInternally__=!0,v==="false"||!v?this.vertical=!0:this.vertical=!1;return;case"vertical":if(v=="true"){this.style.display="block";for(let _=0;_<this.children.length;_++){const S=this.children[_];S.tagName=="AA-CHOICE-ITEM"&&(S.orientation="horizontal")}}if(this.vertical_wasChangedInternally__){this.vertical_wasChangedInternally__=!1;return}this.horizontal_wasChangedInternally__=!0,v==="false"||!v?this.horizontal=!0:this.horizontal=!1;return}}get staticObject(){return AAMultipleChoice}get value(){return this.getValueOfSelectedItem()}set value(s){for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(v.value!==s?v.checked=!1:v.checked=!0)}}constructor(){super(),this.horizontal_wasChangedInternally__=!1,this.vertical_wasChangedInternally__=!1}updateState(s){for(let d=0;d<this.children.length;d++){const v=this.children[d];v.tagName==="AA-CHOICE-ITEM"&&(v!==s?v.checked=!1:v.checked=!0)}}getValueOfSelectedItem(){for(let s=0;s<this.children.length;s++){const d=this.children[s];if(d.tagName==="AA-CHOICE-ITEM"&&d.checked)return d.value}}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value"),this.addEventListener("change",s=>{s.stopPropagation(),this.updateState(s.target),this.parentElement.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{value:this.value}}))})}toJSON(){let s=super.toJSON();return s.horizontal&&(s.horizontal=!0),s}}AABaseElement.registerAAElement("aa-multiple-choice",AAMultipleChoice);class AAWhen extends AABaseElement{static get category(){return"control"}static get tag(){return"aa-when"}static get properties(){return{name:{type:String,userDefined:!1},"should-run":{type:Boolean,value:!0,userDefined:!1},debug:{type:Boolean,value:!1,userDefined:!1},test:{type:String,userDefined:!0}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AAWhen.properties)}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>"}connectedCallback(){super.connectedCallback()}}AABaseElement.registerAAElement("aa-when",AAWhen);class AAOtherwise extends AABaseElement{static get category(){return"control"}static get tag(){return"aa-otherwise"}static get acceptsElements(){return null}constructor(){super()}connectedCallback(){super.connectedCallback()}}AABaseElement.registerAAElement("aa-otherwise",AAOtherwise);class AAChoose extends AABaseElement{constructor(){super(),this._shouldRun=!1,this.root=this.attachShadow({mode:"open"}),this.root.innerHTML="<slot></slot>",this.originalContent=this.innerHTML}static get category(){return"control"}static get tag(){return"aa-choose"}static get properties(){return{...AABaseElement.properties,name:{type:String,userDefined:!0},"should-run":{type:Boolean,value:!0,userDefined:!1},debug:{type:Boolean,value:!1,userDefined:!1}}}static get acceptsElements(){return["aa-when","aa-otherwise"]}static get observedAttributes(){return Object.keys(AAChoose.properties)}connectedCallback(){if(this.setAttributeDefaultValues(),this.diagram){this.produceDiagram();return}if(this._shouldRun=this.shouldRun===null||this.shouldRun===!0,this.sessionElement=this._getParentSession(),this._shouldRun)if(typeof this.innerFragment<"u"){AABaseElement.scanAndReplace(this.innerFragment);let m=this._getNodeToInstantiate();if(m.length===0)this._dispatchEndEvent();else{let s=!1;for(let d=0;d<m.length;d++){let v=m[d];if(typeof v<"u"){for(let _=0;_<v.childNodes.length;_++)v.childNodes[_].constructor&&v.childNodes[_].constructor.properties&&v.childNodes[_].constructor.properties["expect-wait"]&&(s=!0);this.parentNode.insertBefore(v,this.nextSibling)}}s||this._dispatchEndEvent()}}else this.childNodes.length===0&&this._dispatchEndEvent();this.remove()}_getNodeToInstantiate(){let m=[],s=[],d=!1;for(let v=0;v<this.innerFragment.children.length;v++){let _=this.innerFragment.children[v];_.nodeName==="AA-WHEN"?(d=this.evaluate(_),d&&m.push(AABaseElement.copy(_).innerFragment)):_.nodeName==="AA-OTHERWISE"&&s.push(AABaseElement.copy(_).innerFragment)}return m.length===0?s:m}evaluate(m){let s=m.getAttribute("test");return s==null||s==""?null:this.evaluateTestExpression(s)}evaluateTestExpression(test){let expr=this.replaceExpressionIdentifiersWithValues(test);try{var parseTree=jsep(expr);return parseTree.left.type==="Literal"&&parseTree.right.type==="Literal"?eval(expr):eval(`${parseTree.left.value}${parseTree.operator}${parseTree.right.value}`)}catch(m){console.error("parse error:",m)}}replaceExpressionIdentifiersWithValues(m,s){let d=this.getMemory()||s,v=m.toUpperCase(),_=Object.keys(d.getDataDump()),S=_.map(I=>I.toUpperCase());for(let I in _){let D=d.getData(_[I]),N=parseInt(D);N!=D&&(D==="null"?N="null":D==="true"?N="true":D==="false"?N="false":N=`"${D}"`);let R=new RegExp(S[I],"g");v=v.replace(R,N)}return v}}AABaseElement.registerAAElement("aa-choose",AAChoose);class AAFunctionRandom extends AABaseElement{static get tag(){return"aa-function-random"}static get properties(){return{name:{type:String,userDefined:!0},debug:{type:Boolean,value:!1,userDefined:!1},value:{type:Number,userDefined:!1},min:{type:Number,userDefined:!0},max:{type:Number,userDefined:!0}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AAFunctionRandom.properties)}constructor(){super()}connectedCallback(){let s=this.getMemory();s&&s.setData(this.name,this.value),this._dispatchEndEvent({autoDispatch:!0}),this.debug||this.remove()}get value(){var s=parseFloat(this.min),d=parseFloat(this.max);let v=this.getRandomInt(s,d),_=this.getMemory();return _&&_.setData(AABaseElement.getVariableName(this),v),v}getRandomInt(s,d){return s=Math.ceil(s),d=Math.floor(d),Math.floor(Math.random()*(d-s)+.5)+s}}AABaseElement.registerAAElement("aa-function-random",AAFunctionRandom);class AAGeolocation extends AABaseElement{constructor(){super(),this._ready=!1,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-geolocation"}static get properties(){return{name:{type:String,userDefined:!0},"get-on-request":{type:Boolean,userDefined:!0,value:!1},ready:{type:Boolean,userDefined:!1,value:!1}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAGeolocation.properties)}get value(){return this._getLocation()}set value(s){this.setAttribute("value",s)}async _getValue(){return await this._getLocation()}_getLocation(){return new Promise((s,d)=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(v=>{let _=v.coords.latitude,S=v.coords.longitude;s({lat:_,lon:S,timestamp:new Date})}):d()})}connectedCallback(){super.connectedCallback(),this._ready=!0,this.getOnRequest||this._getLocation().then(s=>{var d=new CustomEvent("valueSubmit",{bubbles:!0,detail:{value:s}});this.dispatchEvent(d),this._dispatchEndEvent({value:s,autoDispatch:!0})})}}AABaseElement.registerAAElement("aa-geolocation",AAGeolocation);class AALabel extends AABaseElement{static get tag(){return"aa-label"}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){super.connectedCallback(),this.root.innerHTML=this.css+this.html}get css(){return html`
            <style>
                    :host{
                        display:block;
                        font-family: "Roboto Flex", Roboto, Noto, sans-serif;
                        font-weight:bold;
                        margin-top:40px;
                        margin-bottom:10px;
                        
                    }

            </style>
        `}get html(){return"<slot></slot>"}}AABaseElement.registerAAElement("aa-label",AALabel);class AALikertScale extends AABaseElement{static get category(){return"response item"}static get tag(){return"aa-likert-scale"}static get properties(){return{name:{type:String,userDefined:!0},debug:{type:Boolean,value:!1,userDefined:!1},value:{type:Number,userDefined:!1},items:{type:String,userDefined:!0},"start-label":{type:String,userDefined:!0,value:""},"middle-label":{type:String,userDefined:!0,value:""},"end-label":{type:String,userDefined:!0,value:""},"start-item":{type:Number,userDefined:!0,value:1},"show-radio-numbers":{type:Boolean,userDefined:!0,value:!0},"number-position":{type:String,userDefined:!0,value:"right"}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AALikertScale.properties)}constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.value=this.getAttribute("value")}connectedCallback(){super.connectedCallback(),this.items||(this.items=5),this.root.innerHTML=this.css+this.html,this.root.querySelectorAll("sl-radio").forEach(s=>{s.addEventListener("sl-change",()=>{this.value=s.value}),s.addEventListener("change",()=>{this.value=s.value})}),this.arrangeLabels(),this.addEventListener("click",()=>{this.currentvalue?(this.currentvalue!=this.value&&this.dispatchEvent(new CustomEvent("change")),this.currentvalue=this.value):this.dispatchEvent(new CustomEvent("change"))})}getTags(){let s="",d=`<div class='start-label'>${this.getAttribute("start-label")||""}</div>`,v=`<div class='middle-label'>${this.getAttribute("middle-label")||""}</div>`,_=`<div class='end-label'>${this.getAttribute("end-label")||""}</div>`,S=parseInt(this.items);for(let D=1;D<=S;D++)D==1?s+=d:D==Math.floor((S+1)/2)?s+=v:D==S&&(s+=_);return`<div class="label-container">${s}</div>`}get css(){return html`<style>
           
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
            </style>`}get html(){const s=this.startItem?parseInt(this.startItem):0,d=this.name??v4();let v="";for(let _=0;_<this.items;_++){const S=_+s;v+=`<div class="radio-container"><sl-radio id="${d}-${S}" class="radio" name="${d}" value=${S}></sl-radio>`,v+=`<label for="${d}-${S}">${S}</label></div>`}return`
        
        <div class="container">
            <div class="group-container">
            ${v}
            </div>
            ${this.getTags()}
        </div>
        `}arrangeLabels(){const s=this.root.querySelector(".label-container"),d=this.root.querySelector(".group-container");d.getBoundingClientRect().width;const v=this.root.querySelector(".start-label"),_=this.root.querySelector(".middle-label"),S=this.root.querySelector(".end-label");setTimeout(()=>{s.style.width=d.getBoundingClientRect().width+"px";const I=_.getBoundingClientRect().width,D=d.getBoundingClientRect().width;_.style.left=D/2-I/2+"px",s.style.height=Math.max(v.getBoundingClientRect().height,_.getBoundingClientRect().height,S.getBoundingClientRect().height)+"px"},0)}}AABaseElement.registerAAElement("aa-likert-scale",AALikertScale);class AAMemory extends AABaseElement{static get tag(){return"aa-memory"}get observedAttributes(){return["name"]}constructor(){super()}connectedCallback(){}setData(s,d){localStorage.setItem(s,d)}getData(s){return localStorage[s]}getDataDump(){return localStorage}}AABaseElement.registerAAElement("aa-memory",AAMemory);class AAJump extends AABaseElement{static get category(){return"control"}static get tag(){return"aa-jump"}static get properties(){return{name:{type:String,userDefined:!0},goto:{type:String,userDefined:!0}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAJump.properties)}connectedCallback(){this._dispatchEndEvent({goto:this.goto,autoDispatch:!0}),this.remove()}}AABaseElement.registerAAElement("aa-jump",AAJump);class AASequence extends AABaseElement{constructor(){super(),this.target=null,this.sIndex=0}static get category(){return"control"}static get tag(){return"aa-sequence"}static get properties(){return{...AABaseElement.properties,name:{type:String,userDefined:!0},"write-into":{type:String,userDefined:!0},"should-run":{type:Boolean,userDefined:!0,value:!0},debug:{type:Boolean,value:!1,userDefined:!1},type:{type:String,userDefined:!1},stopped:{type:Boolean,userDefined:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AASequence.properties)}connectedCallback(){if(this.setAttributeDefaultValues(),this.diagram){this.produceDiagram();return}this.addEventListener("endEvent",this.endEventListener.bind(this)),(this.shouldRun===null||this.shouldRun===!0)&&this.init()}get css(){return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `}get html(){return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `}init(){if(this.stopped=!1,this.writeInto?this.target=document.querySelector(this.writeInto):this.target=this,typeof this.innerFragment>"u"){console.warn(".innerFragment is undefined");return}this.sIndex=0,this.stopped||this.start()}start(){this.stopped=!1,this.next()}stop(){this.stopped=!0}next(s){return new Promise((d,v)=>{if(this.stopped)return;if(this.sIndex>=this.innerFragment.childNodes.length){this.parentElement&&this.parentElement.dispatchEvent(new CustomEvent("endEvent",{detail:{autoDispatch:!0},bubbles:!0,composed:!0}));return}if(typeof s=="string"){for(let I=0;I<this.innerFragment.childNodes.length;I++)if(this.innerFragment.childNodes[I].getAttribute&&this.innerFragment.childNodes[I].getAttribute("name")==s){this.sIndex=I;break}}let _=this.innerFragment.childNodes[this.sIndex];for(;_.nodeType!=Node.ELEMENT_NODE;){let I=AABaseElement.copy(_);if(this.target.appendChild(I),this.currentNode=I,this.sIndex++,this.sIndex>=this.innerFragment.childNodes.length)return this.parentElement&&this.parentElement.dispatchEvent(new CustomEvent("endEvent",{detail:{autoDispatch:!0},bubbles:!0,composed:!0})),d();_=this.innerFragment.childNodes[this.sIndex]}let S=AABaseElement.copy(_);this.currentNode=S,this.sIndex+=1,this.target.appendChild(S),setTimeout(()=>d())})}endEventListener(s){s.stopPropagation();const d=s.detail;d?d.goto?this.next(d.goto):d.autoDispatch?this.next(!0):setTimeout(()=>this.next(!0)):setTimeout(()=>this.next(!0))}}AABaseElement.registerAAElement("aa-sequence",AASequence);class AASession extends AABaseElement{constructor(){super(),this.sessionId=v4(),this.sessionTime=0,this.myTemplate=document.createElement("template"),this.myTemplate.innerHTML=this.innerHTML,this.innerHTML="",this._mem=document.createElement("aa-memory"),this.addEventListener("valueSubmit",s=>{const d=s.detail;let v={data:d.value,sessionId:this.sessionId,sessionTimestamp:this.sessionTime,sessionName:this.name,variables:Object.keys(d.value)};Object.keys(s.detail.value).forEach(I=>{this._mem.setData(I,s.detail.value[I])});const _={input:v};let S=new CustomEvent("sessionInputSubmit",{bubbles:!0,detail:_,composed:!0});this.dispatchEvent(S)}),this.addEventListener("endEvent",s=>{this.debug||s.stopPropagation();let d=new CustomEvent("sessionEndEvent",{bubbles:!0,detail:"sessionEnd"});this.dispatchEvent(d)})}static get tag(){return"aa-session"}static get properties(){return{...AABaseElement.properties,"should-run":{type:Boolean,userDefined:!0,value:!0},debug:{type:Boolean,value:!1,userDefined:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AASession.properties)}myIdGenerator(){return v4()}connectedCallback(){if(this.innerHTML="",this.setAttributeDefaultValues(),this.diagram===!0){this.produceDiagram();return}this.sessionId=this.myIdGenerator(),this.sessionTime=new Date().getTime();let s=Object.keys(this.dataset);for(let d in s)this.setData(s[d],this.dataset[s[d]]);(this.shouldRun===null||this.shouldRun===!0)&&this.run(),setTimeout(()=>{this.dispatchEvent(new CustomEvent("sessionReady",{bubbles:!0}))},0)}attachTemplateChildNodesToMyself(s){for(;s.content.childNodes.length;)if(s.content.childNodes[0].nodeName==="TEMPLATE"){for(;s.content.childNodes[0].content.childNodes.length;)this.appendChild(s.content.childNodes[0].content.childNodes[0]);s.content.childNodes[0].remove()}else this.appendChild(s.content.childNodes[0])}run(){let s=this.myTemplate.cloneNode(!0);AABaseElement.scanAndReplace(s),this.attachTemplateChildNodesToMyself(s)}getData(s){return this._mem.getData(s)}setData(s,d){return this._mem.setData(s,d)}getDataDump(){return this._mem.getDataDump()}toJSON(){let s={};s[this.tagName]=this.getAttributes();let d=[];for(let v=0;v<this.originalChildNodes.length;v++){let _=this.originalChildNodes[v],S=AABaseElement.nodeToJSON(_);S&&d.push(S)}return s[this.tagName].childNodes=[{template:{childNodes:d}}],s}toJSL(){let s=this.getAttributeNames(),d={};for(let D=0;D<s.length;D++)this.getAttribute(s[D])!=="undefined"&&(d[s[D]]=this.getAttribute(s[D]));let v=[],_=this.myTemplate.content.childNodes[0].content.childNodes;for(let D=0;D<_.length;D++)nodeToJSL(_[D])&&v.push(nodeToJSL(_[D]));let S=formatJSLResult("TEMPLATE",{},v);return formatJSLResult("AA_SESSION",d,[S])}get originalChildNodes(){return this.myTemplate.content.childNodes.length==0?[]:this.myTemplate.content.childNodes[0].content?this.myTemplate.content.childNodes[0].content.childNodes:this.childNodes}}AABaseElement.registerAAElement("aa-session",AASession);class AAScheduleWarnings extends HTMLElement{constructor(){super(...arguments),this._warnings=[]}get warnings(){return this._warnings}set warnings(s){this._warnings=s,this._render()}connectedCallback(){this._render()}_render(){if(!this.isConnected)return;if(this._warnings.length===0){this.innerHTML="";return}const s=this._warnings.map(d=>html`<div style="background:#fff3e0;border-left:3px solid #ff9800;padding:6px 12px;margin-bottom:4px;font-size:13px;font-family:sans-serif;">${d}</div>`).join("");this.innerHTML=html`<div style="margin-bottom:12px;">${s}</div>`}}customElements.define("aa-schedule-warnings",AAScheduleWarnings);function pad(m){return String(m).padStart(2,"0")}function fmtDate(m){return`${m.getFullYear()}-${pad(m.getMonth()+1)}-${pad(m.getDate())}`}function fmtTime(m){return`${pad(m.getHours())}:${pad(m.getMinutes())}`}const DAY_NAMES$1=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],MONTH_NAMES=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function parseTimeToMinutes(m){const[s,d]=m.split(":").map(Number);return s*60+(d||0)}function parseTimeRanges(m){return m.split(";").map(s=>s.trim()).filter(Boolean).map(s=>{const[d,v]=s.split("-");return{start:parseTimeToMinutes(d),end:parseTimeToMinutes(v)}})}function parseDurationToMinutes(m){const s=m.match(/^(\d+(?:\.\d+)?)\s*(s|sec|min|h|hr|d)$/i);if(!s)return 0;const d=parseFloat(s[1]);switch(s[2].toLowerCase()){case"s":case"sec":return d/60;case"min":return d;case"h":case"hr":return d*60;case"d":return d*1440;default:return 0}}function isWeekend(m){const s=m.getDay();return s===0||s===6}const DAY_NAME_MAP={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6};function isDayActive(m,s){const d=s.trim().toLowerCase();if(d===""||d==="all")return!0;if(d==="weekdays")return!isWeekend(m);if(d==="weekends")return isWeekend(m);const v=d.split(",").map(S=>S.trim()),_=m.getDay();return v.some(S=>DAY_NAME_MAP[S]===_)}function isDayExcluded(m,s){if(!s)return!1;const d=fmtDate(m);return s.split(",").map(v=>v.trim()).includes(d)}class AAScheduleStats extends HTMLElement{constructor(){super(...arguments),this._signals=[],this._rangeStart=new Date,this._rangeEnd=new Date}get signals(){return this._signals}set signals(s){this._signals=s,this._render()}get rangeStart(){return this._rangeStart}set rangeStart(s){this._rangeStart=s,this._render()}get rangeEnd(){return this._rangeEnd}set rangeEnd(s){this._rangeEnd=s,this._render()}connectedCallback(){this._render()}_render(){if(!this.isConnected)return;const s=Math.round((this._rangeEnd.getTime()-this._rangeStart.getTime())/864e5)+1,d=new Set(this._signals.map(fmtDate)),v=d.size>0?(this._signals.length/d.size).toFixed(1):"0";this.innerHTML=html`<div style="display:flex;gap:28px;margin-bottom:16px;font-family:sans-serif;font-size:13px;flex-wrap:wrap;">
      <div><strong>${this._signals.length}</strong> total signals</div>
      <div><strong>${d.size}</strong> / ${s} days active</div>
      <div><strong>${v}</strong> signals / active day</div>
    </div>`}}customElements.define("aa-schedule-stats",AAScheduleStats);const PX_PER_HOUR$1=52;class AAScheduleDayColumn extends HTMLElement{constructor(){super(...arguments),this._day=new Date,this._signals=[],this._minHour=6,this._maxHour=23,this._isFirstColumn=!1,this._config=null}get day(){return this._day}set day(s){this._day=s,this._render()}get signals(){return this._signals}set signals(s){this._signals=s,this._render()}get minHour(){return this._minHour}set minHour(s){this._minHour=s,this._render()}get maxHour(){return this._maxHour}set maxHour(s){this._maxHour=s,this._render()}get isFirstColumn(){return this._isFirstColumn}set isFirstColumn(s){this._isFirstColumn=s,this._render()}get config(){return this._config}set config(s){this._config=s,this._render()}connectedCallback(){this._render()}_minToPx(s){return(s-this._minHour*60)/60*PX_PER_HOUR$1}_getWindowRanges(){const s=this._config;if(!s)return null;const d=isWeekend(this._day),v=d&&s.weekendSignalWindows||s.signalWindows;if(v)return parseTimeRanges(v);const _=d&&s.weekendWindowStart||s.windowStart,S=d&&s.weekendWindowEnd||s.windowEnd;return _&&S?[{start:parseTimeToMinutes(_),end:parseTimeToMinutes(S)}]:null}_getFixedTimesMinutes(){const s=this._config;if(!s)return[];const v=isWeekend(this._day)&&s.weekendFixedTimes||s.fixedTimes;return v?v.split(",").map(_=>_.trim()).filter(Boolean).map(parseTimeToMinutes):[]}_render(){if(!this.isConnected)return;const s=this._day,d=this._config,v=(this._maxHour-this._minHour)*PX_PER_HOUR$1,_=isWeekend(s),S=s.getDay()===1&&!this._isFirstColumn,I=DAY_NAMES$1[s.getDay()],D=MONTH_NAMES[s.getMonth()],N=d?isDayExcluded(s,d.excludeDates):!1,R=d?!isDayActive(s,d.activeDays):!1,P=N||R,F=P?[]:[...this._signals].sort((Nt,Vt)=>Nt.getTime()-Vt.getTime()),H=F.length>0,W=_?"#f8f9fa":"#fff",st=S?"2px solid #dadce0":"1px solid #ebebeb",ot=H?_?"#0b8043":"#1a73e8":"#70757a",mt=P?"0.35":"1",ht=this._getFixedTimesMinutes(),Tt=new Set(ht);let Ot=20;if(d&&d.signalExpiry){const Nt=parseDurationToMinutes(d.signalExpiry);Nt>0&&(Ot=Math.max(14,Math.min(80,Math.round(Nt/60*PX_PER_HOUR$1))))}let Pt=0;if(d&&d.minInterval){const Nt=parseDurationToMinutes(d.minInterval);Nt>0&&(Pt=Math.round(Nt/60*PX_PER_HOUR$1))}let $t=0,Rt=0;d&&d.reminderAfter&&($t=parseDurationToMinutes(d.reminderAfter),Rt=d.reminderCount||1);let Ut="";for(let Nt=this._minHour;Nt<=this._maxHour;Nt++){const Vt=(Nt-this._minHour)*PX_PER_HOUR$1;if(Nt>this._minHour&&(Ut+=html`<div style="position:absolute;top:${Vt}px;left:0;right:0;border-top:1px solid #ebebeb;"></div>`),Nt<this._maxHour){const Xt=Vt+PX_PER_HOUR$1/2;Ut+=html`<div style="position:absolute;top:${Xt}px;left:0;right:0;border-top:1px dotted #f5f5f5;"></div>`}}let Ft="";if(d){const Nt=this._getWindowRanges();if(Nt&&Nt.length>0){const Vt=this._minHour*60,Xt=this._maxHour*60,Et=[...Nt].sort((he,pt)=>he.start-pt.start);let Yt=Vt;for(const he of Et){const pt=Math.max(Yt,Vt),Qt=Math.min(he.start,Xt);if(Qt>pt){const de=this._minToPx(pt),ie=this._minToPx(Qt)-de;Ft+=`<div style="position:absolute;top:${Math.round(de)}px;left:0;right:0;height:${Math.round(ie)}px;background:rgba(0,0,0,0.04);z-index:0;pointer-events:none;"></div>`}Yt=he.end}if(Yt<Xt){const he=this._minToPx(Yt),pt=this._minToPx(Xt)-he;Ft+=`<div style="position:absolute;top:${Math.round(he)}px;left:0;right:0;height:${Math.round(pt)}px;background:rgba(0,0,0,0.04);z-index:0;pointer-events:none;"></div>`}}}let ae="";if(d&&d.excludeTimes&&!P){const Nt=parseTimeRanges(d.excludeTimes);for(const Vt of Nt){const Xt=this._minToPx(Vt.start),Et=this._minToPx(Vt.end)-Xt;Et>0&&(ae+=`<div title="Excluded: ${Math.floor(Vt.start/60)}:${String(Vt.start%60).padStart(2,"0")}–${Math.floor(Vt.end/60)}:${String(Vt.end%60).padStart(2,"0")}" style="position:absolute;top:${Math.round(Xt)}px;left:0;right:0;height:${Math.round(Et)}px;background:repeating-linear-gradient(135deg,transparent,transparent 3px,rgba(211,47,47,0.12) 3px,rgba(211,47,47,0.12) 6px);z-index:1;pointer-events:none;"></div>`)}}let en="";if(d&&ht.length>0&&!P)for(const Nt of ht){const Vt=this._minToPx(Nt),Xt=Math.floor(Nt/60),Et=Nt%60,Yt=`${String(Xt).padStart(2,"0")}:${String(Et).padStart(2,"0")}`;en+=`<div style="position:absolute;top:${Math.round(Vt)}px;left:0;right:0;border-top:1px dotted rgba(156,39,176,0.4);z-index:2;pointer-events:none;"></div>`,en+=`<div style="position:absolute;top:${Math.round(Vt)-9}px;left:1px;font-size:8px;color:rgba(156,39,176,0.7);font-family:sans-serif;z-index:2;pointer-events:none;">${Yt}</div>`}let $e="";for(const Nt of F){const Vt=Nt.getHours()*60+Nt.getMinutes(),Xt=this._minToPx(Vt),Et=fmtTime(Nt),Yt=Tt.has(Vt),he=Yt?_?"rgba(11,128,67,0.55)":"rgba(26,115,232,0.55)":_?"#0b8043":"#1a73e8",pt=Yt?"2px dashed #fff":"none",Qt=Yt&&(d!=null&&d.fixedTimesLabel)?` · ${d.fixedTimesLabel}`:"";if(Pt>0&&($e+=`<div style="position:absolute;top:${Math.round(Xt-Pt)}px;left:4px;right:4px;height:${Pt}px;border:1px dashed rgba(0,0,0,0.12);border-bottom:none;border-radius:4px 4px 0 0;background:rgba(26,115,232,0.03);z-index:3;pointer-events:none;"></div>`,$e+=`<div style="position:absolute;top:${Math.round(Xt+Ot)}px;left:4px;right:4px;height:${Pt}px;border:1px dashed rgba(0,0,0,0.12);border-top:none;border-radius:0 0 4px 4px;background:rgba(26,115,232,0.03);z-index:3;pointer-events:none;"></div>`),$e+=html`<div title="${I} ${s.getDate()} ${D} at ${Et}${Yt?" (fixed)":""}" style="position:absolute;top:${Math.round(Xt)}px;left:2px;right:2px;height:${Ot}px;background:${he};border:${pt};color:#fff;font-size:10px;font-weight:500;font-family:sans-serif;line-height:${Ot}px;padding:0 4px;border-radius:4px;overflow:hidden;white-space:nowrap;z-index:4;box-shadow:0 1px 2px rgba(0,0,0,.2);box-sizing:border-box;">${Et}${Qt}</div>`,$t>0&&Rt>0)for(let de=1;de<=Rt;de++){const ie=Vt+$t*de,vn=this._minToPx(ie);$e+=`<div title="Reminder ${de} at +${Math.round($t*de)}min" style="position:absolute;top:${Math.round(vn)-3}px;left:2px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:6px solid rgba(255,152,0,0.8);z-index:6;pointer-events:none;"></div>`}}let Je="";N?Je='<div style="font-size:8px;color:#c62828;font-weight:600;letter-spacing:.3px;">EXCLUDED</div>':R&&(Je='<div style="font-size:8px;color:#9e9e9e;font-weight:600;letter-spacing:.3px;">INACTIVE</div>');const bn=N?"line-through":"none";this.style.cssText=`flex:1;min-width:72px;position:relative;border-left:${st};background:${W};opacity:${mt};`,this.innerHTML=`<div style="height:56px;padding:6px 4px 2px;text-align:center;border-bottom:1px solid #dadce0;font-family:sans-serif;">
      <div style="font-size:10px;color:#70757a;text-transform:uppercase;letter-spacing:.5px;">${I}</div>
      <div style="font-size:22px;font-weight:${H?500:400};color:${ot};line-height:1.3;text-decoration:${bn};">${s.getDate()}</div>
      <div style="font-size:9px;color:#70757a;">${D}</div>
      ${Je}
    </div>
    <div style="position:relative;height:${v}px;">${Ut}${Ft}${ae}${en}${$e}</div>`}}customElements.define("aa-schedule-day-column",AAScheduleDayColumn);const PX_PER_HOUR=52;class AAScheduleWeekGrid extends HTMLElement{constructor(){super(...arguments),this._signals=[],this._rangeStart=new Date,this._rangeEnd=new Date,this._minHour=6,this._maxHour=23,this._config=null}get signals(){return this._signals}set signals(s){this._signals=s,this._render()}get rangeStart(){return this._rangeStart}set rangeStart(s){this._rangeStart=s,this._render()}get rangeEnd(){return this._rangeEnd}set rangeEnd(s){this._rangeEnd=s,this._render()}get minHour(){return this._minHour}set minHour(s){this._minHour=s,this._render()}get maxHour(){return this._maxHour}set maxHour(s){this._maxHour=s,this._render()}get config(){return this._config}set config(s){this._config=s,this._render()}connectedCallback(){this._render()}_render(){if(!this.isConnected)return;const s=(this._maxHour-this._minHour)*PX_PER_HOUR,d=new Map;for(const R of this._signals){const P=fmtDate(R);d.has(P)||d.set(P,[]),d.get(P).push(R)}const v=[],_=new Date(this._rangeStart.getFullYear(),this._rangeStart.getMonth(),this._rangeStart.getDate()),S=new Date(this._rangeEnd.getFullYear(),this._rangeEnd.getMonth(),this._rangeEnd.getDate());for(;_<=S;)v.push(new Date(_)),_.setDate(_.getDate()+1);let I="";for(let R=this._minHour;R<=this._maxHour;R++){const P=(R-this._minHour)*PX_PER_HOUR;R>this._minHour&&(I+=html`<div style="position:absolute;top:${P-7}px;right:8px;font-size:10px;color:#70757a;font-family:sans-serif;white-space:nowrap;">${pad(R)}:00</div>`)}const D=v.map(()=>html`<aa-schedule-day-column></aa-schedule-day-column>`).join("");this.innerHTML=html`<div style="display:flex;overflow-x:auto;border:1px solid #dadce0;border-radius:8px;background:#fff;">
      <div style="width:48px;flex-shrink:0;border-right:1px solid #dadce0;">
        <div style="height:56px;"></div>
        <div style="position:relative;height:${s}px;">${I}</div>
      </div>
      ${D}
    </div>`,this.querySelectorAll("aa-schedule-day-column").forEach((R,P)=>{const F=R,H=v[P];F.isFirstColumn=P===0,F.minHour=this._minHour,F.maxHour=this._maxHour,F.config=this._config,F.day=H,F.signals=d.get(fmtDate(H))||[]})}}customElements.define("aa-schedule-week-grid",AAScheduleWeekGrid);class AAScheduleSignalList extends HTMLElement{constructor(){super(...arguments),this._signals=[]}get signals(){return this._signals}set signals(s){this._signals=s,this._render()}connectedCallback(){this._render()}_render(){if(!this.isConnected)return;if(this._signals.length===0){this.innerHTML=html`<p style="color:#888;font-family:sans-serif;">No signals generated for this date range.</p>`;return}let s="",d="",v=0;for(const _ of this._signals){const S=fmtDate(_),I=S!==d;I&&(v=0),v++;const D=_.getDay()===0||_.getDay()===6,N=I&&d?"border-top:1px solid #ddd;":"",R=D?"background:#fafafa;":"";d=S;const P=`${MONTH_NAMES[_.getMonth()]} ${_.getDate()}, ${_.getFullYear()}`;s+=html`<tr style="${N}${R}">
        <td style="padding:3px 10px;white-space:nowrap;color:${I?"#333":"#ccc"};">${I?P:""}</td>
        <td style="padding:3px 10px;color:${I?"#333":"#ccc"};">${I?DAY_NAMES$1[_.getDay()]:""}</td>
        <td style="padding:3px 10px;font-variant-numeric:tabular-nums;">${fmtTime(_)}</td>
        <td style="padding:3px 10px;color:#888;">${v}</td>
      </tr>`}this.innerHTML=html`<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:13px;">
      <thead><tr>
        <th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Date</th>
        <th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Day</th>
        <th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Time</th>
        <th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">#</th>
      </tr></thead>
      <tbody>${s}</tbody>
    </table>`}}customElements.define("aa-schedule-signal-list",AAScheduleSignalList);function computeHourRange(m,s,d){let v=6,_=23;if(m.length>0){const S=m.map(I=>I.getHours());v=Math.max(0,Math.min(...S)-1),_=Math.min(24,Math.max(...S)+2)}if(s){const S=parseInt(s,10);isNaN(S)||(v=Math.min(v,Math.max(0,S-1)))}if(d){const S=parseInt(d,10);isNaN(S)||(_=Math.max(_,Math.min(24,S+1)))}return _-v<4&&(_=Math.min(24,v+4)),{minHour:v,maxHour:_}}class AAScheduleCalendar extends HTMLElement{constructor(){super(...arguments),this._signals=[],this._rangeStart=new Date,this._rangeEnd=new Date,this._windowStart="",this._windowEnd="",this._warnings=[],this._showRegenerate=!1,this._generation=1,this._config=null,this.onregenerate=null}get signals(){return this._signals}set signals(s){this._signals=s,this._render()}get rangeStart(){return this._rangeStart}set rangeStart(s){this._rangeStart=s,this._render()}get rangeEnd(){return this._rangeEnd}set rangeEnd(s){this._rangeEnd=s,this._render()}get windowStart(){return this._windowStart}set windowStart(s){this._windowStart=s,this._render()}get windowEnd(){return this._windowEnd}set windowEnd(s){this._windowEnd=s,this._render()}get warnings(){return this._warnings}set warnings(s){this._warnings=s,this._render()}get showRegenerate(){return this._showRegenerate}set showRegenerate(s){this._showRegenerate=s,this._render()}get config(){return this._config}set config(s){this._config=s,this._render()}refresh(s,d){this._signals=s,d!==void 0&&(this._warnings=d),this._generation++,this._render()}connectedCallback(){this._render()}_render(){var W,st;if(!this.isConnected)return;const s=((W=this._config)==null?void 0:W.windowStart)||this._windowStart,d=((st=this._config)==null?void 0:st.windowEnd)||this._windowEnd,{minHour:v,maxHour:_}=computeHourRange(this._signals,s,d),S="sc-"+(this.id||Math.random().toString(36).slice(2,8));let I="";this._showRegenerate&&(I=html`<button id="${S}-btn" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:#1a73e8;color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:500;font-family:sans-serif;cursor:pointer;white-space:nowrap;">&#x21bb; Regenerate<span style="font-size:11px;opacity:.7;">&thinsp;#<span id="${S}-counter">${this._generation}</span></span></button>`),this.innerHTML=html`<div style="font-family:sans-serif;">
      <aa-schedule-warnings></aa-schedule-warnings>
      <aa-schedule-stats></aa-schedule-stats>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <button id="${S}-key-btn" title="Show calendar key" style="width:28px;height:28px;border-radius:50%;border:1.5px solid #dadce0;background:#fff;color:#5f6368;font-size:15px;font-weight:700;font-family:sans-serif;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1;">?</button>
        <span style="font-size:12px;color:#9e9e9e;flex:1;">Hover blocks for details</span>
        ${I}
      </div>
      <div id="${S}-key-panel" style="display:none;margin-bottom:14px;"></div>
      <aa-schedule-week-grid></aa-schedule-week-grid>
      <details open style="margin-top:24px;">
        <summary style="font-size:16px;font-weight:700;cursor:pointer;margin-bottom:8px;">Signal List (${this._signals.length} total)</summary>
        <div style="max-height:500px;overflow-y:auto;border:1px solid #eee;border-radius:4px;">
          <aa-schedule-signal-list></aa-schedule-signal-list>
        </div>
      </details>
    </div>`;const D=this.querySelector("aa-schedule-warnings");D.warnings=this._warnings;const N=this.querySelector("aa-schedule-stats");N.rangeStart=this._rangeStart,N.rangeEnd=this._rangeEnd,N.signals=this._signals;const R=this.querySelector("aa-schedule-week-grid");R.rangeStart=this._rangeStart,R.rangeEnd=this._rangeEnd,R.minHour=v,R.maxHour=_,R.config=this._config,R.signals=this._signals;const P=this.querySelector("aa-schedule-signal-list");P.signals=this._signals;const F=this.querySelector(`#${S}-key-btn`),H=this.querySelector(`#${S}-key-panel`);if(F&&H&&F.addEventListener("click",()=>{H.style.display!=="none"?(H.style.display="none",F.style.background="#fff",F.style.color="#5f6368"):(H.innerHTML=this._buildKeyPanel(),H.style.display="block",F.style.background="#1a73e8",F.style.color="#fff")}),this._showRegenerate){const ot=this.querySelector(`#${S}-btn`);ot&&ot.addEventListener("click",()=>{this.onregenerate&&this.onregenerate(),ot.style.background="#0b8043",setTimeout(()=>{ot.style.background="#1a73e8"},200)})}}_buildKeyPanel(){const s=this._config,d=S=>`display:inline-block;vertical-align:middle;${S}`,v=(S,I,D)=>`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid #f5f5f5;">
        <div style="flex-shrink:0;width:48px;height:28px;position:relative;display:flex;align-items:center;justify-content:center;">${S}</div>
        <div><span style="font-weight:600;font-size:12px;color:#202124;">${I}</span><br><span style="font-size:11px;color:#5f6368;">${D}</span></div>
      </div>`;let _="";if(_+=v(`<div style="${d("width:42px;height:16px;background:#1a73e8;border-radius:3px;")}"></div>`,"Weekday signal","Random or stratified signal scheduled on a weekday"),_+=v(`<div style="${d("width:42px;height:16px;background:#0b8043;border-radius:3px;")}"></div>`,"Weekend signal","Signal scheduled on Saturday or Sunday"),s){if(s.fixedTimes){const S=s.fixedTimesLabel||"fixed";_+=v(`<div style="${d("width:42px;height:16px;background:rgba(26,115,232,0.55);border:2px dashed #fff;border-radius:3px;box-sizing:border-box;")}"></div>`,`Fixed signal (${S})`,`Fires at exact times: ${s.fixedTimes}`)}if(s.fixedTimes&&(_+=v(`<div style="${d("width:42px;height:0;border-top:1px dotted rgba(156,39,176,0.5);")}"></div>`,"Fixed-time marker","Dotted line at each fixed signal time with a time label")),s.signalExpiry&&s.signalExpiry!=="0"&&(_+=v(`<div style="position:relative;width:42px;height:26px;">
            <div style="${d("width:42px;height:26px;background:#1a73e8;border-radius:3px;opacity:0.7;")}"></div>
            <div style="position:absolute;right:-2px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:space-between;">
              <div style="font-size:7px;color:#5f6368;line-height:1;">↑</div>
              <div style="font-size:7px;color:#5f6368;line-height:1;">↓</div>
            </div>
          </div>`,`Signal expiry (${s.signalExpiry})`,"Block height represents the response window duration")),s.windowStart||s.windowEnd||s.signalWindows){const S=s.signalWindows?s.signalWindows.replace(/;/g,", "):`${s.windowStart||"?"}–${s.windowEnd||"?"}`;_+=v(`<div style="${d("width:42px;height:20px;background:rgba(0,0,0,0.04);border:1px solid #e0e0e0;border-radius:2px;")}"></div>`,"Outside signal window",`Gray shading marks hours outside the active window (${S})`)}if(s.excludeTimes&&(_+=v(`<div style="${d("width:42px;height:20px;background:repeating-linear-gradient(135deg,transparent,transparent 3px,rgba(211,47,47,0.12) 3px,rgba(211,47,47,0.12) 6px);border:1px solid rgba(211,47,47,0.2);border-radius:2px;")}"></div>`,"Excluded time range",`Diagonal hatching over blackout periods: ${s.excludeTimes.replace(/;/g,", ")}`)),s.minInterval&&s.minInterval!=="0"&&(_+=v(`<div style="${d("width:42px;height:20px;border:1px dashed rgba(0,0,0,0.15);border-radius:3px;background:rgba(26,115,232,0.03);")}"></div>`,`Min-interval buffer (${s.minInterval})`,"Dashed zone above and below each signal where no other signal can occur")),s.reminderAfter){const S=s.reminderCount||1;let I="";for(let D=0;D<Math.min(S,3);D++)I+='<div style="width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:7px solid rgba(255,152,0,0.8);margin-right:4px;"></div>';_+=v(`<div style="display:flex;align-items:center;">${I}</div>`,`Reminder (${s.reminderAfter} × ${S})`,"Orange triangle(s) at reminder offset(s) after each signal")}s.excludeDates&&(_+=v(`<div style="${d("width:42px;height:20px;background:#fff;border:1px solid #e0e0e0;border-radius:2px;opacity:0.35;display:flex;align-items:center;justify-content:center;")}"><span style="font-size:10px;color:#c62828;font-weight:700;text-decoration:line-through;">15</span></div>`,"Excluded date",`Column dimmed and crossed out on: ${s.excludeDates}`)),s.activeDays&&s.activeDays!=="all"&&(_+=v(`<div style="${d("width:42px;height:20px;background:#fff;border:1px solid #e0e0e0;border-radius:2px;opacity:0.35;display:flex;align-items:center;justify-content:center;")}"><span style="font-size:7px;color:#9e9e9e;font-weight:600;">INACTIVE</span></div>`,`Inactive day (active: ${s.activeDays})`,"Column dimmed on days outside the active-days schedule"))}return`<div style="border:1px solid #dadce0;border-radius:8px;padding:12px 16px;background:#fafafa;max-width:440px;">
      <div style="font-size:13px;font-weight:700;color:#202124;margin-bottom:4px;font-family:sans-serif;">Calendar Key</div>
      <div style="font-family:sans-serif;">${_}</div>
    </div>`}}customElements.define("aa-schedule-calendar",AAScheduleCalendar);function parseDuration(m){const s=m.trim().match(/^(\d+)(s|min|h|d)$/);if(!s)throw new Error(`Invalid duration format: "${m}". Expected format like 30s, 15min, 2h, 1d`);const d=parseInt(s[1],10),v=s[2];switch(v){case"s":return d*1e3;case"min":return d*60*1e3;case"h":return d*60*60*1e3;case"d":return d*24*60*60*1e3;default:throw new Error(`Unknown duration unit: ${v}`)}}function parseTime(m){const s=m.trim().match(/^(\d{1,2}):(\d{2})$/);if(!s)throw new Error(`Invalid time format: "${m}". Expected HH:MM`);const d=parseInt(s[1],10),v=parseInt(s[2],10);if(d<0||d>23||v<0||v>59)throw new Error(`Invalid time value: "${m}". Hours must be 0-23 and minutes must be 0-59`);return{hours:d,minutes:v}}function parseTimeRange(m){const s=m.trim().split("-");if(s.length!==2)throw new Error(`Invalid time range: "${m}". Expected HH:MM-HH:MM`);const d=parseTime(s[0]),v=parseTime(s[1]),_=d.hours*60+d.minutes,S=v.hours*60+v.minutes;if(S<=_)throw new Error(`Invalid time range: "${m}". End time must be after start time (cross-midnight ranges are not supported)`);return{startMinutes:_,endMinutes:S}}function subtractExclusions(m,s){let d=[...m];for(const v of s){const _=[];for(const S of d)v.startMinutes>=S.endMinutes||v.endMinutes<=S.startMinutes?_.push(S):(v.startMinutes>S.startMinutes&&_.push({startMinutes:S.startMinutes,endMinutes:v.startMinutes}),v.endMinutes<S.endMinutes&&_.push({startMinutes:v.endMinutes,endMinutes:S.endMinutes}));d=_}return d}const DAY_NAMES=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];class AASignalProtocol extends AABaseElement{static get tag(){return"aa-signal-protocol"}static get properties(){return{...AABaseElement.properties,"schedule-type":{type:String,userDefined:!0},"signals-per-day":{type:Number,userDefined:!0},"window-start":{type:String,userDefined:!0},"window-end":{type:String,userDefined:!0},"signal-windows":{type:String,userDefined:!0},"min-interval":{type:String,value:"15min",userDefined:!0},"signal-expiry":{type:String,value:"15min",userDefined:!0},"reminder-after":{type:String,userDefined:!0},"reminder-count":{type:Number,value:"1",userDefined:!0},"study-days":{type:Number,userDefined:!0},"start-date":{type:String,userDefined:!0},"end-date":{type:String,userDefined:!0},"active-days":{type:String,value:"all",userDefined:!0},"fixed-times":{type:String,userDefined:!0},"fixed-times-label":{type:String,userDefined:!0},"exclude-dates":{type:String,userDefined:!0},"exclude-times":{type:String,userDefined:!0},"weekend-signals-per-day":{type:Number,userDefined:!0},"weekend-window-start":{type:String,userDefined:!0},"weekend-window-end":{type:String,userDefined:!0},"weekend-signal-windows":{type:String,userDefined:!0},"weekend-fixed-times":{type:String,userDefined:!0}}}static get observedAttributes(){return Object.keys(AASignalProtocol.properties)}constructor(){super()}connectedCallback(){super.connectedCallback();try{this.validate()}catch(s){console.error("[aa-signal-protocol] Failed to validate protocol configuration:",s)}setTimeout(()=>{this.dispatchEvent(new CustomEvent("protocolReady",{bubbles:!0}))},0)}validate(){const s=[],d=this.scheduleType;if(d==="fixed"&&(this.fixedTimes||s.push('schedule-type="fixed" requires fixed-times attribute')),(d==="random"||d==="stratified-random")&&(this.signalsPerDay||s.push(`schedule-type="${d}" requires signals-per-day attribute`),!this.signalWindows&&(!this.windowStart||!this.windowEnd)&&s.push(`schedule-type="${d}" requires either signal-windows or both window-start and window-end`)),this.signalWindows&&(this.windowStart||this.windowEnd)&&s.push("signal-windows overrides window-start/window-end; both are set"),(d==="random"||d==="stratified-random")&&this.signalsPerDay){const _=this._getEffectiveWindows(!1).reduce((N,R)=>N+(R.endMinutes-R.startMinutes),0),S=parseInt(this.signalsPerDay,10),D=parseDuration(this.minInterval||"15min")/6e4;S>0&&_/S<D&&s.push(`Infeasible: total window duration (${_}min) / signals-per-day (${S}) < min-interval (${D}min)`)}if(this.activeDays==="weekdays"&&(this.weekendSignalsPerDay||this.weekendWindowStart||this.weekendWindowEnd||this.weekendSignalWindows||this.weekendFixedTimes)&&s.push('active-days="weekdays" but weekend-* overrides are present (they will be ignored)'),this.excludeDates){const v=this.excludeDates.split(",").map(_=>_.trim());for(const _ of v)(!/^\d{4}-\d{2}-\d{2}$/.test(_)||isNaN(new Date(_).getTime()))&&s.push(`Invalid exclude-dates value: "${_}". Expected YYYY-MM-DD`)}if(this.excludeTimes){const v=this._getBaseWindows(!1),_=this.excludeTimes.split(";").map(I=>parseTimeRange(I));subtractExclusions(v,_).length===0&&s.push("exclude-times completely covers the signal window; no room for signals")}for(const v of s)console.warn(`[aa-signal-protocol "${this.name||""}"] ${v}`);return s}_getBaseWindows(s){const d=s&&this.weekendSignalWindows?this.weekendSignalWindows:this.signalWindows;if(d)return d.split(";").map(S=>parseTimeRange(S));const v=s&&this.weekendWindowStart?this.weekendWindowStart:this.windowStart,_=s&&this.weekendWindowEnd?this.weekendWindowEnd:this.windowEnd;if(v&&_){const S=parseTime(v),I=parseTime(_);return[{startMinutes:S.hours*60+S.minutes,endMinutes:I.hours*60+I.minutes}]}return[]}_getEffectiveWindows(s){let d=this._getBaseWindows(s);if(this.excludeTimes){const v=this.excludeTimes.split(";").map(_=>parseTimeRange(_));d=subtractExclusions(d,v)}return d}_isDayActive(s){const d=s.getDay(),v=DAY_NAMES[d],_=this.activeDays||"all";if(_!=="all"&&(_==="weekdays"&&(d===0||d===6)||_==="weekends"&&d!==0&&d!==6||_!=="weekdays"&&_!=="weekends"&&!_.split(",").map(I=>I.trim()).includes(v)))return!1;if(this.excludeDates){const S=s.getFullYear()+"-"+String(s.getMonth()+1).padStart(2,"0")+"-"+String(s.getDate()).padStart(2,"0");if(this.excludeDates.split(",").map(D=>D.trim()).includes(S))return!1}return!0}getProtocol(){return{name:this.name,scheduleType:this.scheduleType,signalsPerDay:this.signalsPerDay?parseInt(this.signalsPerDay,10):null,windowStart:this.windowStart||null,windowEnd:this.windowEnd||null,signalWindows:this.signalWindows||null,minInterval:this.minInterval||"15min",signalExpiry:this.signalExpiry||"15min",reminderAfter:this.reminderAfter||null,reminderCount:this.reminderCount?parseInt(this.reminderCount,10):1,studyDays:this.studyDays?parseInt(this.studyDays,10):null,startDate:this.startDate||null,endDate:this.endDate||null,activeDays:this.activeDays||"all",fixedTimes:this.fixedTimes||null,fixedTimesLabel:this.fixedTimesLabel||null,excludeDates:this.excludeDates||null,excludeTimes:this.excludeTimes||null,weekendSignalsPerDay:this.weekendSignalsPerDay?parseInt(this.weekendSignalsPerDay,10):null,weekendWindowStart:this.weekendWindowStart||null,weekendWindowEnd:this.weekendWindowEnd||null,weekendSignalWindows:this.weekendSignalWindows||null,weekendFixedTimes:this.weekendFixedTimes||null}}getSignallingTimes(s,d){const v=[],_=new Date(s.getFullYear(),s.getMonth(),s.getDate()),S=new Date(d.getFullYear(),d.getMonth(),d.getDate());for(;_<=S;){if(this._isDayActive(_)){const I=_.getDay()===0||_.getDay()===6,D=this._generateDaySignals(_,I);v.push(...D)}_.setDate(_.getDate()+1)}return v.sort((I,D)=>I.getTime()-D.getTime()),v}_generateDaySignals(s,d){const v=[],_=this.scheduleType,S=d&&this.weekendSignalsPerDay?this.weekendSignalsPerDay:this.signalsPerDay,I=S?parseInt(String(S),10):0,D=this._getEffectiveWindows(d),R=parseDuration(this.minInterval||"15min")/6e4;if(_!=="fixed"){if(_==="random"){const F=this._generateRandomSignals(s,D,I,R);v.push(...F)}else if(_==="stratified-random"){const F=this._generateStratifiedRandomSignals(s,D,I,R);v.push(...F)}}const P=d&&this.weekendFixedTimes?this.weekendFixedTimes:this.fixedTimes;if(P){const F=P.split(",").map(H=>H.trim());for(const H of F){const W=parseTime(H),st=new Date(s.getFullYear(),s.getMonth(),s.getDate(),W.hours,W.minutes);v.push(st)}}return v}_generateRandomSignals(s,d,v,_){if(d.length===0||v<=0)return[];const S=d.reduce((R,P)=>R+(P.endMinutes-P.startMinutes),0);if(S<=0)return[];const I=[];let D=0;const N=v*100;for(;I.length<v&&D<N;){D++;const R=Math.random()*S;let P=0,F=0;for(const W of d){const st=W.endMinutes-W.startMinutes;if(F+st>R){P=W.startMinutes+(R-F);break}F+=st}I.some(W=>Math.abs(W-P)<_)||I.push(P)}return I.map(R=>{const P=Math.floor(R/60),F=Math.floor(R%60);return new Date(s.getFullYear(),s.getMonth(),s.getDate(),P,F)})}_generateStratifiedRandomSignals(s,d,v,_){if(d.length===0||v<=0)return[];const S=d.reduce((N,R)=>N+(R.endMinutes-R.startMinutes),0);if(S<=0)return[];const I=S/v,D=[];for(let N=0;N<v;N++){const R=N*I,P=(N+1)*I;let F=R+Math.random()*(P-R),H=this._offsetToMinuteOfDay(d,F),W=0;for(;W<50&&D.some(mt=>Math.abs(mt-H)<_);)F=R+Math.random()*(P-R),H=this._offsetToMinuteOfDay(d,F),W++;D.some(ot=>Math.abs(ot-H)<_)&&console.warn(`[aa-signal-protocol] Could not satisfy min-interval constraint after ${W} retries; relaxing constraint for one signal (minInterval=${_}min, minuteOfDay=${Math.round(H)})`),D.push(H)}return D.map(N=>{const R=Math.floor(N/60),P=Math.floor(N%60);return new Date(s.getFullYear(),s.getMonth(),s.getDate(),R,P)})}_offsetToMinuteOfDay(s,d){let v=0;for(const _ of s){const S=_.endMinutes-_.startMinutes;if(v+S>d)return _.startMinutes+(d-v);v+=S}return s[s.length-1].endMinutes}toJSON(){const s={},d=this.tagName.toLowerCase();return s[d]=this.getAttributes(),this.childNodes.length&&(s[d].childNodes=[],this.childNodes.forEach(v=>{const _=AABaseElement.nodeToJSON(v);_&&s[d].childNodes.push(_)})),s}}AABaseElement.registerAAElement("aa-signal-protocol",AASignalProtocol);class AASlider extends AABaseElement{constructor(){super(),this.minLabelItem=null,this.maxLabelItem=null,this.root=this.attachShadow({mode:"open"})}static get category(){return"response item"}static get tag(){return"aa-slider"}static get properties(){return{name:{type:String,userDefined:!0},min:{type:Number,userDefined:!0},max:{type:Number,userDefined:!0},"min-label":{type:String,userDefined:!0},"max-label":{type:String,userDefined:!0},value:{type:Number,userDefined:!1}}}static get acceptsElements(){return null}static get observedAttributes(){return Object.keys(AASlider.properties)}get value(){return this.inputItem?this.inputItem.value:this.getAttribute("value")}set value(s){this.setAttribute("value",s),this.inputItem&&(this.inputItem.value=s)}get minLabel(){return this.getAttribute("min-label")}get maxLabel(){return this.getAttribute("max-label")}set minLabel(s){this.setAttribute("min-label",s),this.inputItem&&(this.inputItem.minLabel=s)}set maxLabel(s){this.setAttribute("max-label",s),this.inputItem&&(this.inputItem.maxLabel=s)}set min(s){this.setAttribute("min",s),this.inputItem&&(this.inputItem.min=s)}set max(s){this.setAttribute("max",s),this.inputItem&&(this.inputItem.max=s)}connectedCallback(){super.connectedCallback();let s=this.css+`<div class='inputContainer'>${this.html}</div>`;this.root.innerHTML=s;let d=this.minLabel,v=this.maxLabel,_=this.value||(this.min+this.max)/2;this.inputItem=this.root.querySelector(".inputItem"),this.minLabelItem=this.root.querySelector(".minLabel"),this.maxLabelItem=this.root.querySelector(".maxLabel"),d&&(this.minLabelItem.innerHTML=d),v&&(this.maxLabelItem.innerHTML=v),_&&(this.inputItem.value=_),this.inputItem.addEventListener("sl-change",S=>{this.value=S.target.value}),this.inputItem.addEventListener("change",S=>{this.value=S.target.value})}get css(){return`<style>
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
        
        </style>`}get html(){let s=customElements.get("sl-input")?`<sl-input type='${this.type}' class='inputItem'></sl-input>`:`<input type='${this.type}' class='inputItem'>`;return html`${s}`}}AABaseElement.registerAAElement("aa-text-answer",AATextAnswer);class AAVariable extends AABaseElement{static get tag(){return"aa-variable"}static get properties(){return{name:{type:String,userDefined:!0},value:{type:String,userDefined:!0}}}static get acceptsElements(){return[]}static get observedAttributes(){return Object.keys(AAVariable.properties)}constructor(){super(),this.root=this.attachShadow({mode:"open"})}connectedCallback(){let m=this.getMemory(),s=this.value;m&&m.setData(this.name,s),this._dispatchEndEvent({autoDispatch:!0}),this.debug||this.remove()}evaluateValueExpression(test){let expr=this.replaceExpressionIdentifiersWithValues(test);try{var parseTree=jsep(expr);if(parseTree.type!=="Identifier"){if(parseTree.type!=="Literal")return parseTree.left.type==="Literal"&&parseTree.right.type==="Literal"?eval(expr):eval(`${parseTree.left.value}${parseTree.operator}${parseTree.right.value}`)}}catch(m){console.error("parse error:",m)}}replaceExpressionIdentifiersWithValues(m,s){let d=this.getMemory()||s,v=m.toUpperCase(),_=Object.keys(d.getDataDump()),S=_.map(I=>I.toUpperCase());for(let I in _){let D=d.getData(_[I]),N=parseInt(D);N!=D&&(D==="null"?N="null":D==="true"?N="true":D==="false"?N="false":N=`"${D}"`);let R=new RegExp(S[I],"g");v=v.replace(R,N)}return v}}AABaseElement.registerAAElement("aa-variable",AAVariable);const preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:{order:["Introduction","User Interface","Control Flow","Data & Utility"]}}}};export{preview as default};
