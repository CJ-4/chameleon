(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_loader_style=lit_element.b`
  :host {
    box-sizing: border-box;
    --loader-color: var(--color-primary, #2c6fb7);
  }

  :host * {
    box-sizing: border-box;
  }
`,chameleon_loader_spinner_style=lit_element.b`
  /* SVG styles. */
  svg {
    animation: 2s linear infinite svg-animation;
  }

  /* SVG animation. */
  @keyframes svg-animation {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  /* Circle styles. */
  circle {
    animation: 1.4s ease-in-out infinite both circle-animation;
    display: block;
    fill: transparent;
    stroke: var(--loader-color, #2c6fb7);
    stroke-linecap: round;
    stroke-dasharray: 283;
    stroke-dashoffset: 280;
    stroke-width: 10px;
    transform-origin: 50% 50%;
  }

  /* Circle animation. */
  @keyframes circle-animation {
    0%,
    25% {
      stroke-dashoffset: 280;
      transform: rotate(0);
    }

    50%,
    75% {
      stroke-dashoffset: 75;
      transform: rotate(45deg);
    }

    100% {
      stroke-dashoffset: 280;
      transform: rotate(360deg);
    }
  }
`,chameleon_loader_ellipsis_style=lit_element.b`
  .ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }

  .ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--loader-color);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .ellipsis div:nth-child(1) {
    left: 6px;
    animation: ellipsis1 0.6s infinite;
  }

  .ellipsis div:nth-child(2) {
    left: 6px;
    animation: ellipsis2 0.6s infinite;
  }

  .ellipsis div:nth-child(3) {
    left: 26px;
    animation: ellipsis2 0.6s infinite;
  }

  .ellipsis div:nth-child(4) {
    left: 45px;
    animation: ellipsis3 0.6s infinite;
  }

  @keyframes ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_loader_ChameleonLoader=class ChameleonLoader extends lit_element.a{constructor(){super(...arguments),this.loader="spinner",this.size="auto"}render(){switch(this.loader){case"ellipsis":return this.renderEllipsisLoader();case"spinner":default:return this.renderSpinnerLoader()}}renderEllipsisLoader(){return lit_element.d`
      <style>
        ${chameleon_loader_ellipsis_style}
      </style>

      <div class="ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `}renderSpinnerLoader(){return lit_element.d`
      <style>
        ${chameleon_loader_spinner_style}
      </style>

      <svg
        class="spinner"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        height=${this.size}
        width=${this.size}
      >
        <circle cx="50" cy="50" r="45" />
      </svg>
    `}};chameleon_loader_ChameleonLoader.styles=[chameleon_loader_style],__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_loader_ChameleonLoader.prototype,"loader",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_loader_ChameleonLoader.prototype,"size",void 0);chameleon_loader_ChameleonLoader=__decorate([Object(lit_element.c)("chameleon-loader")],chameleon_loader_ChameleonLoader)},279:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_paginator_style=lit_element.b`
  :host {
    align-items: center;
    display: flex;
  }

  .pages {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .page {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    margin: 18px;
  }

  .separator {
    cursor: auto;
    margin: 14px;
  }

  .current,
  .page:not(.separator):hover {
    color: var(--color-surface, #ffffff);
    margin: 0 4px;
  }

  .current span,
  .page:not(.separator):hover {
    align-items: center;
    background-color: var(--color-primary, #2c6fb7);
    border-radius: 50%;
    display: inline-flex;
    height: 36px;
    justify-content: center;
    width: 36px;
  }

  .placeholder {
    width: 68px;
  }
`,__decorate=(__webpack_require__(98),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let chameleon_paginator_ChameleonPaginator=class ChameleonPaginator extends lit_element.a{constructor(){super(...arguments),this.totalItems=null,this.pageSize=null,this.currentPage=1,this.maxLength=7,this.separator="..."}render(){return lit_element.d`
      ${this.isFirstPage?lit_element.d`
            <div class="placeholder"></div>
          `:lit_element.d`
            <chameleon-button
              theme="text"
              name="prev"
              @click="${this._previous}"
              >${this.iconLeftCircle}</chameleon-button
            >
          `}
      <ul class="pages">
        ${this.pages.map(page=>page===this.currentPage?lit_element.d`
              <li
                class="page current"
                data-page="${page}"
                @click="${this._goToPage}"
              >
                <span>${page}</span>
              </li>
            `:page!==this.separator?lit_element.d`
              <li class="page" data-page="${page}" @click="${this._goToPage}">
                <span>${page}</span>
              </li>
            `:lit_element.d`
              <li class="page separator"><span>${page}</span></li>
            `)}
      </ul>
      ${this.isLastPage?lit_element.d`
            <div class="placeholder"></div>
          `:lit_element.d`
            <chameleon-button theme="text" name="next" @click="${this._next}">
              ${this.iconRightCircle}
            </chameleon-button>
          `}
    `}get iconLeftCircle(){return lit_element.f`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>`}get iconRightCircle(){return lit_element.f`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>`}get isFirstPage(){return 1===this.currentPage}get isLastPage(){return this.currentPage===this.totalPages}get totalPages(){const totalItems=this.totalItems,pageSize=this.pageSize;return null===totalItems||null===pageSize?0:Math.ceil(totalItems/pageSize)}get pages(){const result=[],midPoint=Math.round(this.maxLength/2);if(this.currentPage=Math.max(1,Math.min(this.currentPage,this.totalPages)),this.totalPages<=this.maxLength)for(let i=1;i<=this.totalPages;i++)result.push(i);else if(this.currentPage<midPoint&&this.currentPage<this.maxLength){const highestNum=Math.max(midPoint,this.maxLength-1);for(let i=1;i<highestNum;i++)result.push(i);result.push(this.separator),result.push(this.totalPages)}else if(this.currentPage>this.totalPages-this.maxLength+3){result.push(1),result.push(this.separator);const offset=3;for(let i=this.totalPages-this.maxLength+offset;i<=this.totalPages;i++)result.push(i)}else{result.push(1),result.push(this.separator);const midPages=this.maxLength-4,first=this.currentPage-Math.ceil(midPages/2)+1;for(let i=0;i<midPages;i++)result.push(first+i);result.push(this.separator),result.push(this.totalPages)}return result}_previous(){this.currentPage--,this.dispatchChange()}_next(){this.currentPage++,this.dispatchChange()}_goToPage(e){const page=e.target.closest("[data-page]").dataset.page,currentPage=parseInt(String(page));this.currentPage=isNaN(currentPage)?1:currentPage,this.dispatchChange()}dispatchChange(){this.dispatchEvent(new CustomEvent("page-change",{detail:{currentPage:this.currentPage},composed:!0,bubbles:!0}))}};chameleon_paginator_ChameleonPaginator.styles=[chameleon_paginator_style],__decorate([Object(lit_element.e)({type:Number})],chameleon_paginator_ChameleonPaginator.prototype,"totalItems",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_paginator_ChameleonPaginator.prototype,"pageSize",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_paginator_ChameleonPaginator.prototype,"currentPage",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_paginator_ChameleonPaginator.prototype,"maxLength",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_paginator_ChameleonPaginator.prototype,"separator",void 0);chameleon_paginator_ChameleonPaginator=__decorate([Object(lit_element.c)("chameleon-paginator")],chameleon_paginator_ChameleonPaginator)},280:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),class_map=__webpack_require__(16),repeat=__webpack_require__(127),chameleon_multiselect_style=lit_element.b`
  :host {
    align-items: center;
    display: flex;
    border: 1px solid var(--color-gray-dark, #9fa4a8);
    border-radius: var(--border-radius-input, 0.313rem);
    box-sizing: border-box;
    min-height: 2.5rem;
    padding: var(--multiselect-padding, 0.438rem 0.5rem);
    position: relative;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) chameleon-chip {
    background-color: var(--color-gray-light, #c4c7ca);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .tags.tags-active {
    margin-bottom: -7px;
  }

  .tags chameleon-chip {
    white-space: nowrap;
    margin-bottom: 7px;
    margin-right: 7px;
  }

  input {
    align-self: stretch;
    border: none;
    color: var(--color-gray-darkest, #6c737a);
    flex-grow: 1;
    font-size: var(--font-size-label, 0.938rem);
    height: 23px;
    padding: 0;
  }

  input.tags-active {
    margin-bottom: 7px;
  }

  input::placeholder {
    color: var(--color-gray-darkest, #6c737a);
  }

  input::-webkit-input-placeholder {
    color: var(--color-gray-darkest, #6c737a);
  }

  input::-moz-placeholder {
    color: var(--color-gray-darkest, #6c737a);
  }

  input:-ms-input-placeholder {
    color: var(--color-gray-darkest, #6c737a);
  }

  input:focus {
    outline: none;
  }

  .options {
    background-color: var(--color-surface, #ffffff);
    border-radius: var(--border-radius-input, 0.313rem);
    box-shadow: 0 5px 12px 0 rgba(31, 40, 91, 0.2),
      0 2px 6px -1px rgba(31, 40, 91, 0.12), 0 1px 4px 0 rgba(31, 40, 91, 0.14);
    left: 0;
    max-height: 175px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    top: calc(100% + 13px);
    width: 100%;
    z-index: 1;
  }

  .options__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .options__option {
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 0.5rem 1rem;
  }

  .options__option:hover {
    background-color: rgba(44, 111, 183, 0.26);
  }

  .options__option:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-lightest, #e1e3e4);
  }

  .options__option-preLabel {
    margin-right: 10px;
  }

  .options__option-preLabel img,
  svg {
    border-radius: 50%;
    height: 34px;
    vertical-align: top;
    width: 34px;
  }

  .options__option-group span {
    display: block;
  }

  .options__option-label {
    color: var(--color-black, #252a33);
    font-size: var(--font-size-input, 0.938rem);
    font-weight: bold;
    letter-spacing: 0.016rem;
    line-height: 21px;
  }

  .options__option-subLabel {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-input, 0.938rem);
    letter-spacing: 0.016rem;
    line-height: 21px;
  }

  .options__option-postLabel {
    align-self: flex-start;
    color: var(--color-gray-darkest, #6c737a);
    dipslay: block;
    font-size: 0.75rem;
    margin-left: auto;
  }

  ::slotted(svg) {
    color: var(--color-gray-darkest, #6c737a);
    height: 16px;
  }

  chameleon-loader {
    height: 24px;
    width: 24px;
  }
`,__decorate=(__webpack_require__(282),__webpack_require__(179),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let chameleon_multiselect_ChameleonMultiselect=class ChameleonMultiselect extends lit_element.a{constructor(){super(),this.options=[],this.filteredOptions=[],this.selectedOptions=[],this.active=!1,this.disabled=!1,this.valid=!0,this.label="",this.placeholder="",this.instantSearch=!1,this.instantSearchValue="",this.loading=!1,this.addEventListener("remove-chip",this.handleChipClose)}disconnectedCallback(){this.removeEventListener("remove-chip",this.handleChipClose)}render(){return lit_element.d`
      <div
        class="tags ${Object(class_map.a)({"tags-active":this.selectedOptions.length>0})}"
      >
        ${this.renderedSelectedOptions}
        <input
          class="${Object(class_map.a)({"tags-active":this.selectedOptions.length>0})}"
          type="text"
          placeholder="${this.renderedOptions.length>0||this.instantSearch?this.placeholder:""}"
          @focus="${this.setActive}"
          @input="${this.handleSearch}"
        />
      </div>
      ${this.optionsList}
      ${this.loading?lit_element.d`
            <chameleon-loader loader="spinner" size="24px"></chameleon-loader>
          `:lit_element.d`
            <slot name="icon"></slot>
          `}
    `}get value(){return this.selectedOptions.map(option=>option.value)}set value(values){const selectedOptions=[];values.forEach(value=>{const option=this.options.find(option=>option.value===value);if(!option)throw new Error(`${value} doesn't exist within the options array`);selectedOptions.push(option)}),this.selectedOptions=[...selectedOptions]}get optionsList(){return this.active?lit_element.d`
          <div class="options">
            <ul class="options__list">
              ${Object(repeat.a)(this.filteredOptions.length>0?this.filteredOptions:this.renderedOptions,option=>lit_element.d`
                  <li
                    class="options__option"
                    data-value="${option.value}"
                    @click="${this.addSelection}"
                  >
                    ${option.preLabel?lit_element.d`
                          <div class="options__option-preLabel">
                            ${option.preLabel}
                          </div>
                        `:lit_html.nothing}
                    <div class="options__option-group">
                      <span class="options__option-label">${option.label}</span>
                      ${option.subLabel?lit_element.d`
                            <span class="options__option-subLabel">
                              ${option.subLabel}
                            </span>
                          `:lit_html.nothing}
                    </div>
                    ${option.postLabel?lit_element.d`
                          <span class="options__option-postLabel">
                            ${option.postLabel}</span
                          >
                        `:lit_html.nothing}
                  </li>
                `)}
            </ul>
          </div>
        `:lit_html.nothing}get renderedSelectedOptions(){return this.selectedOptions.length>0?this.selectedOptions.map(option=>lit_element.d`
            <chameleon-chip .value="${option.value}" closeable
              >${option.label}</chameleon-chip
            >
          `):lit_html.nothing}get renderedOptions(){return this.options.filter(option=>!this.selectedOptions.some(selectedOption=>option.value===selectedOption.value))}setActive(){this.active=!0}toggleActive(){this.active=!this.active}addSelection(e){const value=e.composedPath().find(el=>el.hasAttribute("data-value")).dataset.value,selection=this.options.find(option=>option.value===value);this.filteredOptions=[],this.shadowRoot.querySelector("input").value="",e.stopPropagation(),selection&&(this.selectedOptions=[...this.selectedOptions,selection]),this.dispatchChangeEvent(),this.toggleActive()}handleSearch(e){const query=e.target.value.toLowerCase();this.instantSearch?(this.instantSearchValue=query,this.dispatchSearchEvent()):this.filteredOptions=this.renderedOptions.filter(option=>option.label.toLowerCase().includes(query))}handleChipClose(e){this.selectedOptions=[...this.selectedOptions.filter(option=>option.value!==e.detail.value)],this.dispatchChangeEvent()}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("chameleon.select",{detail:{value:this.value,selectedOptions:this.selectedOptions},bubbles:!0,composed:!0}))}dispatchSearchEvent(){this.dispatchEvent(new CustomEvent("chameleon.search",{detail:{value:this.instantSearchValue},bubbles:!0,composed:!0}))}};chameleon_multiselect_ChameleonMultiselect.styles=[chameleon_multiselect_style],__decorate([Object(lit_element.e)({type:Array,reflect:!0})],chameleon_multiselect_ChameleonMultiselect.prototype,"options",void 0),__decorate([Object(lit_element.e)({type:Array,reflect:!0})],chameleon_multiselect_ChameleonMultiselect.prototype,"filteredOptions",void 0),__decorate([Object(lit_element.e)({type:Array})],chameleon_multiselect_ChameleonMultiselect.prototype,"selectedOptions",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_multiselect_ChameleonMultiselect.prototype,"active",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_multiselect_ChameleonMultiselect.prototype,"disabled",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_multiselect_ChameleonMultiselect.prototype,"valid",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_multiselect_ChameleonMultiselect.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_multiselect_ChameleonMultiselect.prototype,"placeholder",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_multiselect_ChameleonMultiselect.prototype,"instantSearch",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_multiselect_ChameleonMultiselect.prototype,"instantSearchValue",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_multiselect_ChameleonMultiselect.prototype,"loading",void 0);chameleon_multiselect_ChameleonMultiselect=__decorate([Object(lit_element.c)("chameleon-multiselect")],chameleon_multiselect_ChameleonMultiselect)},281:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),class_map=__webpack_require__(16),chameleon_input_style=lit_element.b`
  :host {
    display: inline-block;
    font-family: var(--font-family, sans-serif);
  }

  .component-wrapper {
    display: inline-flex;
    flex-direction: column;
    //width: 100%;
  }

  input {
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-radius: var(--border-radius-input, 0.313rem);
    box-sizing: border-box;
    font-size: var(--font-size-input, 0.938rem);
    font-family: var(--font-family, sans-serif);
    //width: 100%;
    padding: var(--input-padding, 0.625rem 0.5rem);
  }

  .invalid input {
    border-color: var(--color-error, #bc1c16);
  }

  .component-wrapper:hover:not(.invalid) input:not([disabled]),
  .component-wrapper:active:not(.invalid) input:not([disabled]) {
    border-color: var(--color-primary, #2c6fb7);
  }

  .label-row {
    display: flex;
  }
  .label-row.split-row {
    justify-content: space-between;
  }
  label,
  .label-row span {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-label, 0.875rem);
    margin-bottom: 10px;
  }

  .component-wrapper.invalid .label-row span,
  label.invalid {
    color: var(--color-error, #bc1c16);
  }

  .label-row span {
    display: flex;
    align-items: flex-end;
  }

  .label-row span svg {
    padding-right: 3px;
  }

  .component-wrapper:hover:not(.invalid):not(.disabled) label,
  .component-wrapper:active:not(.invalid):not(.disabled) label,
  .component-wrapper:hover:not(.invalid):not(.disabled) .label-row span,
  .component-wrapper:active:not(.invalid):not(.disabled) .label-row span {
    color: var(--color-primary, #2c6fb7);
  }

  .error {
    color: var(--color-error, #bc1c16);
    font-size: var(--font-size-label, 0.875rem);
    margin-top: 3px;
    display: flex;
    align-items: center;
  }

  .error svg {
    padding-right: 0.5rem;
  }

  .input-wrapper {
    position: relative;
  }

  .input-wrapper.icon-left input {
    padding-left: 45px;
  }

  .input-wrapper.icon-right input {
    padding-right: 45px;
  }

  // We currently only support svg icons
  svg {
    width: 100%;
    height: 100%;
    color: var(--color-gray-darkest, #6c737a);
  }

  ::slotted(*) {
    color: var(--color-gray-darkest, #6c737a);
    height: 18px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
  }

  .invalid ::slotted(svg) {
    color: var(--color-error, #bc1c16);
  }

  ::slotted([slot="icon-left"]) {
    left: 13px;
  }

  ::slotted([slot="icon-right"]) {
    right: 13px;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_input_ChameleonInput=class ChameleonInput extends lit_element.a{constructor(){super(...arguments),this.autocomplete=!1,this.autofocus=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.toggleable=!1,this.type="text",this.placeholder="",this.value="",this.min=null,this.max=null,this.label="",this.validationMessage="",this["icon-left"]=!1,this["icon-right"]=!1}firstUpdated(){this.requestUpdate()}render(){return lit_element.d`
      <div
        class="
        ${Object(class_map.a)({"component-wrapper":!0,invalid:this._invalidState,disabled:this.disabled})}"
      >
        <div
          class="${Object(class_map.a)({"label-row":!0,"split-row":this.toggleable})}"
        >
          ${this.labelText}${this.toggleText}
        </div>

        <div
          class="
          ${Object(class_map.a)({"input-wrapper":!0,"icon-left":this["icon-left"],"icon-right":this["icon-right"]})}"
        >
          <slot name="icon-left"></slot>

          ${this._inputEl}

          <slot name="icon-right"></slot>
        </div>

        ${this.errorText}
      </div>
    `}get _inputEl(){switch(this.type){case"number":return lit_element.d`
          <input
            name="cha-input"
            .type="${this.type}"
            .placeholder="${this.placeholder}"
            .value="${this.value}"
            .min="${this.min}"
            .max="${this.max}"
            ?autocomplete="${this.autocomplete}"
            ?autofocus="${this.autofocus}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            @input="${this._handleInput}"
            @blur="${this._handleBlur}"
            @invalid="${this._handleInvalid}"
          />
        `;case"text":default:return lit_element.d`
          <input
            name="cha-input"
            .type="${this.type}"
            .placeholder="${this.placeholder}"
            .value="${this.value}"
            ?autocomplete="${this.autocomplete}"
            ?autofocus="${this.autofocus}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            @input="${this._handleInput}"
            @blur="${this._handleBlur}"
            @invalid="${this._handleInvalid}"
          />
        `}}get _el(){return null!==this.shadowRoot?this.shadowRoot.querySelector("input"):null}get labelText(){return""!==this.label?lit_element.d`
        <label
          for="cha-input"
          class="${Object(class_map.a)({invalid:this._invalidState})}"
          >${this.label}</label
        >
      `:lit_html.nothing}get toggleText(){return this.toggleable?lit_element.d`
        <span @click="${this._toggleType}">
          ${"password"==this.type?this.eyeIcon:this.eyeOffIcon}
          ${"password"==this.type?"Show":"Hide"}
        </span>
      `:lit_html.nothing}_toggleType(){"password"==this.type?this.type="text":this.type="password"}get errorText(){return""!==this.validationMessage?lit_element.d`
        <span class="error">${this.warningIcon} ${this.validationMessage}</span>
      `:lit_html.nothing}get validity(){return null!==this._el?this._el.validity:void 0}get willValidate(){return null!==this._el&&this._el.willValidate}checkValidity(){return null!==this._el&&this._el.checkValidity()}get _invalidState(){return null===this._el||(!this.checkValidity()||this.validationMessage.length>0)}_handleInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("chameleon.input.input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleBlur(){this.checkValidity()&&(this.validationMessage="")}_handleInvalid(){this.validationMessage=null!==this._el?this._el.validationMessage:""}get warningIcon(){return lit_html.svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-search"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
  `}get eyeIcon(){return lit_html.svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    `}get eyeOffIcon(){return lit_html.svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    `}};chameleon_input_ChameleonInput.styles=[chameleon_input_style],__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"autocomplete",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"autofocus",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"disabled",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"readonly",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"required",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"toggleable",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_input_ChameleonInput.prototype,"type",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_input_ChameleonInput.prototype,"placeholder",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_input_ChameleonInput.prototype,"value",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_input_ChameleonInput.prototype,"min",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_input_ChameleonInput.prototype,"max",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_input_ChameleonInput.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_input_ChameleonInput.prototype,"validationMessage",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"icon-left",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_input_ChameleonInput.prototype,"icon-right",void 0);chameleon_input_ChameleonInput=__decorate([Object(lit_element.c)("chameleon-input")],chameleon_input_ChameleonInput)},282:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_chip_style=lit_element.b`
  :host {
    align-items: center;
    background-color: var(--color-primary, #2c6fb7);
    border-radius: 1.25rem;
    color: var(--color-surface, #ffffff);
    display: inline-flex;
    flex-direction: row;
    font-size: var(--font-size-input, 0.938rem);
    line-height: 1.125rem;
    padding: 4px 11px;
    transition: background-color 0.3s ease;
  }

  :host([closeable]:hover) {
    background-color: var(--color-primary-dark, #004587);
  }

  span {
    display: flex;
    cursor: pointer;
  }

  svg {
    padding-left: 10px;
    height: 13px;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_chip_ChameleonChip=class ChameleonChip extends lit_element.a{constructor(){super(...arguments),this.closeable=!1,this._value=""}render(){return lit_element.d`
      <slot></slot>
      ${this.closeable?lit_element.d`
            <span @click="${this._remove}">${this.removeIcon}</span>
          `:lit_html.nothing}
    `}_remove(){const e=new CustomEvent("remove-chip",{detail:{value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(e)}get removeIcon(){return lit_element.f`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`}get value(){return""!==this._value?this._value:this.innerText}set value(value){this._value=value}};chameleon_chip_ChameleonChip.styles=[chameleon_chip_style],__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_chip_ChameleonChip.prototype,"closeable",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_chip_ChameleonChip.prototype,"_value",void 0);chameleon_chip_ChameleonChip=__decorate([Object(lit_element.c)("chameleon-chip")],chameleon_chip_ChameleonChip)},283:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_card_style=lit_element.b`
  :host {
    background-color: var(--color-surface, #ffffff);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
  }

  :host([outline]) {
    border: 1px solid var(--color-gray-lightest, #e1e3e4);
  }

  :host([rounded]) {
    border-radius: var(--border-radius, 0.5rem);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_ChameleonCard=class ChameleonCard extends lit_element.a{constructor(){super(...arguments),this.accentColor=null}render(){return lit_element.d`
      <slot></slot>
    `}updated(changedProperties){changedProperties.has("accentColor")&&""!==this.accentColor&&(this.style.borderTop=`7px solid ${this.accentColor}`),changedProperties.has("accentColor")&&""===this.accentColor&&void 0!==this.accentColor&&(this.style.borderTop="7px solid var(--color-primary)")}};chameleon_card_ChameleonCard.styles=[chameleon_card_style],__decorate([Object(lit_element.e)({type:String})],chameleon_card_ChameleonCard.prototype,"accentColor",void 0);chameleon_card_ChameleonCard=__decorate([Object(lit_element.c)("chameleon-card")],chameleon_card_ChameleonCard)},284:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_skeleton_style=lit_element.b`
  .rectangle {
    fill: var(--color-gray-lightest, #e1e3e4);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_skeleton_ChameleonSkeleton=class ChameleonSkeleton extends lit_element.a{constructor(){super(...arguments),this.disabled=!1,this.theme="primary",this.height="100%",this.width="100%"}render(){return lit_element.d`
      <svg height="${this.height}" width="${this.width}">
        <rect
          class="rectangle"
          height="100%"
          width="100%"
          x="0"
          y="0"
          rx="10"
          ry="10"
        />
      </svg>
    `}};chameleon_skeleton_ChameleonSkeleton.styles=[chameleon_skeleton_style],__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"disabled",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"theme",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"height",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_skeleton_ChameleonSkeleton.prototype,"width",void 0);chameleon_skeleton_ChameleonSkeleton=__decorate([Object(lit_element.c)("chameleon-skeleton")],chameleon_skeleton_ChameleonSkeleton)},287:function(module,exports,__webpack_require__){__webpack_require__(288),__webpack_require__(400),module.exports=__webpack_require__(401)},309:function(module,exports){},401:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);const req=__webpack_require__(581);Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach(req)}),module)}.call(this,__webpack_require__(12)(module))},581:function(module,exports,__webpack_require__){var map={"./alert.stories.ts":582,"./button.stories.ts":592,"./card.stories.ts":593,"./checkbox.stories.ts":594,"./chip.stories.ts":595,"./dialog.stories.ts":608,"./hero.stories.ts":609,"./input.stories.ts":610,"./loader.stories.ts":611,"./multiselect.stories.ts":612,"./paginator.stories.ts":613,"./radio.stories.ts":614,"./rice-ball-dessert.stories.ts":615,"./select.stories.ts":616,"./sheet.stories.ts":617,"./skeleton.stories.ts":618,"./switch.stories.ts":619,"./table.stories.ts":620,"./tabs.stories.ts":621,"./textarea.stories.ts":622,"./toast.stories.ts":623};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=581},582:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(632);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Alert",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Alert (Default)",()=>{const message=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Alert Message","This is an alert message from chameleon!");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-alert .message="${message}"> </chameleon-alert>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},592:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(98);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Button",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs);stories.add("Primary",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1),href=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Link",""),newTab=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open Link in New Tab",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled=${disabled}
        ?loading=${loading}
        theme="primary"
        ?full-width=${fullWidth}
        href=${href}
        ?new-tab=${newTab}
      >
        Button
      </chameleon-button>
    `},{info:{inline:!0}}),stories.add("Secondary",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1),href=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Link",""),newTab=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open Link in New Tab",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled=${disabled}
        ?loading=${loading}
        theme="secondary"
        ?full-width=${fullWidth}
        href=${href}
        ?new-tab=${newTab}
        >Button</chameleon-button
      >
    `},{info:{inline:!0}}),stories.add("Text",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1),href=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Link",""),newTab=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open Link in New Tab",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled=${disabled}
        ?loading=${loading}
        theme="text"
        ?full-width=${fullWidth}
        href=${href}
        ?new-tab=${newTab}
        >Button</chameleon-button
      >
    `},{info:{inline:!0}}),stories.add("Text with Icon",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1),fullWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Full Width",!1),href=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Link",""),newTab=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open Link in New Tab",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled=${disabled}
        ?loading=${loading}
        theme="text"
        ?full-width=${fullWidth}
        icon-left
        href=${href}
        ?new-tab=${newTab}
        >${(slot=>lit_html__WEBPACK_IMPORTED_MODULE_2__.svg`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus" slot="${slot}"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
`)("icon-left")}Add</chameleon-button
      >
    `},{info:{inline:!0}}),stories.add("Icon Only",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1),href=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Link",""),newTab=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open Link in New Tab",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-button
        ?disabled=${disabled}
        ?loading=${loading}
        icon-only
        theme="text"
        href=${href}
        ?new-tab=${newTab}
        >${(slot=>lit_html__WEBPACK_IMPORTED_MODULE_2__.svg`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right" slot="${slot}"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
`)("icon-only")}</chameleon-button
      >
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},593:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(283),__webpack_require__(637),__webpack_require__(636),__webpack_require__(635),__webpack_require__(98);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Card",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.addParameters({backgrounds:[{name:"gray",value:"#f5f5f8",default:!0},{name:"black",value:"#252a33"}]}),stories.add("Basic",()=>{const subtitleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),titleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <style>
        chameleon-card {
          max-width: 400px;
        }
      </style>
      <chameleon-card>
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `},{info:{inline:!0}}),stories.add("Outline",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <style>
        chameleon-card {
          max-width: 400px;
        }
      </style>
      <chameleon-card outline>
        <h3>Card</h3>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `,{info:{inline:!0}}),stories.add("Image",()=>{const subtitleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),titleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO"),imageSrc=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Image Source","https://images.unsplash.com/photo-1474644746397-786f431dc663?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80"),altText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("ALT Text","St. Louis Landscape");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <style>
        chameleon-card {
          max-width: 400px;
        }
      </style>
      <chameleon-card rounded>
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <chameleon-card-image
          src="${imageSrc}"
          alt="${altText}"
        ></chameleon-card-image>
        <p>
          Sample text…Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
          turpis.
        </p>
      </chameleon-card>
    `},{info:{inline:!0}}),stories.add("Border",()=>{const subtitleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),titleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO"),rounded=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Rounded",!0),accentColorSelected=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Top Border","green");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <style>
        chameleon-card {
          max-width: 400px;
        }
      </style>
      <chameleon-card
        ?rounded="${rounded}"
        accentColor="${accentColorSelected}"
      >
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `},{info:{inline:!0}}),stories.add("Footer",()=>{const subtitleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),titleText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <style>
        chameleon-card {
          max-width: 400px;
        }
      </style>
      <chameleon-card>
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <p>Here is some sample content for the card</p>
        <chameleon-card-footer>
          <chameleon-button theme="secondary">Button</chameleon-button>
        </chameleon-card-footer>
      </chameleon-card>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},594:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(634);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Checkbox",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Checkbox",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-checkbox
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-checkbox>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},595:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),lit_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);__webpack_require__(282);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Chip",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Chip",()=>{const valueText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Value","Salty");return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-chip @remove-chip=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("remove-chip")}
        >${valueText}</chameleon-chip
      >
    `},{info:{inline:!0}}),stories.add("With Icon",()=>{const valueText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Value","Crunchy");return document.addEventListener("remove-chip",e=>console.log("Chameleon Chip Close Event: ",e.detail.value)),lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-chip
        .value="${valueText}"
        closeable
        @remove-chip=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("remove-chip")}
        >${valueText}</chameleon-chip
      >
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},6:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return eventDetails}));var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(285);const eventDetails=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.decorate)([args=>args.map(arg=>({type:arg.type,detail:arg.detail}))])},608:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),lit_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);__webpack_require__(625);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Dialog",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs);stories.add("Basic",()=>{const dialogVisible=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open",!0),dismissible=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Dismissible",!0);return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-dialog
        ?open="${dialogVisible}"
        ?dismissible="${dismissible}"
        @toggle-dialog=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("toggle-dialog")}
      >
        ${(slot=>lit_html__WEBPACK_IMPORTED_MODULE_3__.svg`
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle" slot="${slot}"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>
`)("icon")}
        <h1 slot="title">Title</h1>
        We’re sorry but your session has expired. You will need to log back in
        to continue.
        <div slot="accept-action">
          <chameleon-button
            full-width
            theme="primary"
            @click="${()=>console.log("Accept")}"
            >Okay</chameleon-button
          >
        </div>
        <div slot="decline-action">
          <chameleon-button
            full-width
            theme="secondary"
            @click="${()=>console.log("Cancel")}"
            >Cancel</chameleon-button
          >
        </div>
      </chameleon-dialog>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},609:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(626);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Hero",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("CSS Gradient",()=>{const title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","St. Louis, MO"),subtitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),heroText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Viverra adipiscing at in tellus integer feugiat."),gradientColors=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Hex Colors","#B72126, #14264B"),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
        gradient="${gradientColors}"
        type="${"gradient"}"
        ?loading="${loading}"
      >
      </chameleon-hero>
    `},{info:{inline:!0}}),stories.add("Background Image",()=>{const title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","Washington, DC"),subtitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),heroText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","Cursus eget nunc scelerisque viverra mauris in. Tellus integer feugiat scelerisque varius. Nisl purus in mollis nunc sed id. Risus viverra adipiscing at in tellus."),imageUrl=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Image URL","https://picsum.photos/id/122/2100/856"),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
        imageUrl="${imageUrl}"
        type="${"image"}"
        ?loading="${loading}"
      >
      </chameleon-hero>
    `},{info:{inline:!0}}),stories.add("Image Gradient",()=>{const title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","New York, NY"),subtitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Subtitle","Destination"),heroText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","Cursus eget nunc scelerisque viverra mauris in. Tellus integer feugiat scelerisque varius. Nisl purus in mollis nunc sed id. Risus viverra adipiscing at in tellus."),imageUrl=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Image URL","https://picsum.photos/id/703/2100/856"),gradientColors=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Hex Colors","#B72126, #14264B"),gradientAlpha=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Gradient Alpha",.5),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
        imageUrl="${imageUrl}"
        type="${"imageGradient"}"
        gradient="${gradientColors}"
        gradientAlpha="${gradientAlpha}"
        ?loading="${loading}"
      >
      </chameleon-hero>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},610:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),lit_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);__webpack_require__(281);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Input",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs);const searchIcon=slot=>lit_html__WEBPACK_IMPORTED_MODULE_3__.svg`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-search"
    slot="${slot}"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
`;stories.add("Basic",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),toggleable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Toggleable password visibility",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),typeSelection=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios)("Type",{Text:"text",Password:"password",Email:"email",Number:"number",Search:"search",Tel:"tel",Url:"url"},"text");return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-input
        ?disabled="${disabled}"
        ?toggleable="${toggleable}"
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
        @chameleon.input.input=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon.input.input")}
      ></chameleon-input>
    `},{info:{inline:!0}}),stories.add("Icon Left",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),toggleable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Toggleable password visibility",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),typeSelection=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios)("Type",{Text:"text",Password:"password",Email:"email",Number:"number",Search:"search",Tel:"tel",Url:"url"},"text");return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-input
        ?disabled="${disabled}"
        ?toggleable="${toggleable}"
        icon-left
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
        @chameleon.input.input=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon.input.input")}
      >
        ${searchIcon("icon-left")}
      </chameleon-input>
    `},{info:{inline:!0}}),stories.add("Icon Right",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),toggleable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Toggleable password visibility",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),typeSelection=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios)("Type",{Text:"text",Password:"password",Email:"email",Number:"number",Search:"search",Tel:"tel",Url:"url"},"text");return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-input
        ?disabled="${disabled}"
        ?toggleable="${toggleable}"
        icon-right
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
        @chameleon.input.input=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon.input.input")}
      >
        ${searchIcon("icon-right")}
      </chameleon-input>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},611:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(179);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Loader",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Spinner (Default)",()=>{const size=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Size","21px");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-loader loader="spinner" size="${size}"></chameleon-loader>
    `},{info:{inline:!0}}),stories.add("Ellipsis",()=>lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-loader loader="ellipsis"></chameleon-loader>
    `,{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},612:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),lit_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);__webpack_require__(280);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Multiselect",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs);const options=[{value:"arch",label:"Gateway Arch",subLabel:"Historical Landmark",preLabel:lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/00/St_Louis_night_expblend_cropped.jpg"
      />
    `,postLabel:"St. Louis, MO"},{value:"union-station",label:"Union Station",subLabel:"Historical Landmark",preLabel:lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/St._Louis_Union_Station_%2817577826564%29.jpg/320px-St._Louis_Union_Station_%2817577826564%29.jpg"
      />
    `,postLabel:"St. Louis, MO"},{value:"scott-joplin-house",label:"Scott Joplin House",subLabel:"Historical Landmark",preLabel:lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Scott_Joplin_House.jpg/568px-Scott_Joplin_House.jpg"
      />
    `,postLabel:"St. Louis, MO"}];stories.add("Multiselect",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Select an option...");return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-multiselect
        ?disabled="${disabled}"
        ?loading="${loading}"
        .label="${label}"
        .placeholder="${placeholder}"
        .options="${options}"
        @chameleon.select=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon.select")}
      ></chameleon-multiselect>
    `},{info:{inline:!0},options:{enableShortcuts:!1}}),stories.add("Pre-Selected Values",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Select an option...");return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-multiselect
        ?disabled="${disabled}"
        ?loading="${loading}"
        .label="${label}"
        .placeholder="${placeholder}"
        .options="${options}"
        .value="${["arch"]}"
        @chameleon.select=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon.select")}
      ></chameleon-multiselect>
    `},{info:{inline:!0},options:{enableShortcuts:!1}}),stories.add("With Icon",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),loading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Loading",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Select an option...");return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-multiselect
        ?disabled="${disabled}"
        ?loading="${loading}"
        .label="${label}"
        .placeholder="${placeholder}"
        .options="${options}"
        @chameleon.select=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon.select")}
      >
        ${(slot=>lit_html__WEBPACK_IMPORTED_MODULE_3__.svg`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-search"
    slot="${slot}"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
`)("icon")}
      </chameleon-multiselect>
    `},{info:{inline:!0},options:{enableShortcuts:!1}})}.call(this,__webpack_require__(12)(module))},613:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),lit_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);__webpack_require__(279);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Paginator",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Paginator",()=>{const totalItems=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Total Items",100),pageSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Page Size",10);return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-paginator
        totalItems="${totalItems||0}"
        pageSize="${pageSize||0}"
        @page-change=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("page-change")}
      ></chameleon-paginator>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},614:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(630);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Radio",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Radio",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-radio
        label="${label}"
        name="test"
        ?checked="${checked}"
        ?disabled=${disabled}
      ></chameleon-radio>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},615:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(629);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Rice Ball Dessert",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Basic",()=>{const ballColor=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Ball Color","");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-rice-ball-dessert
        riceBallColor=${ballColor}
      ></chameleon-rice-ball-dessert>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},616:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),lit_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);__webpack_require__(628);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Select",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs);const exampleData=[{value:"value-0",label:"Direct Marketing",preLabel:"pre-label",postLabel:"Custom"},{value:"value-1",label:"District 1",preLabel:"pre-label",postLabel:"Custom"},{value:"value-2",label:"District 2",preLabel:"pre-label",postLabel:"Enrollment"},{value:"value-3",label:"District 3",preLabel:"pre-label",postLabel:"Custom"},{value:"value-4",label:"four",preLabel:"pre-label",postLabel:"Enrollment"},{value:"value-5",label:"five",preLabel:"pre-label",postLabel:"Custom"},{value:"value-6",label:"six",preLabel:"pre-label",postLabel:"Custom"},{value:"value-7",label:"seven",preLabel:"pre-label",postLabel:"Custom"},{value:"value-8",label:"eight",preLabel:"pre-label",postLabel:"Enrollment"},{value:"value-9",label:"nine",preLabel:"pre-label",postLabel:"Custom"},{value:"value-10",label:"ten",preLabel:"pre-label",postLabel:"Custom"}];stories.add("Basic",()=>{const placeHolder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Place Holder","Please select an option"),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label","");return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-select
        .options="${exampleData}"
        .label="${label}"
        placeHolder="${placeHolder}"
        @chameleon.select=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon.select")}
        @chameleon-select.close=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon-select.close")}
        >select
      </chameleon-select>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},617:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),lit_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);__webpack_require__(627);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Sheet",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.addParameters({backgrounds:[{name:"gray",value:"#f5f5f8",default:!0},{name:"black",value:"#252a33"}]}),stories.add("Sheet",()=>{const header=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label","Missouri"),subHeader=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Sub Label","Tour Guide"),sheetOpened=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Open",!1);return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-sheet
        header="${header}"
        subHeader="${subHeader}"
        ?sheetOpened="${sheetOpened}"
        @toggle-sheet=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("toggle-sheet")}
      >
        <section slot="details">
          <p>City: Saint Louis</p>
          <p>Parks: Forest Park</p>
        </section>
        <section slot="content">
          <p>Food: Blue Ocean Sushi</p>
          <p>Art: Saint Louis Art Gallery</p>
        </section>
        <section slot="actions">
          <p>Hockey: Blues</p>
          <p>Baseball: Cards</p>
          <p>Famous People: Nelly</p>
        </section></chameleon-sheet
      >
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},618:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(284);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Skeleton",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Skeleton",()=>{const height=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Height","100%"),width=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Width","100%");return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-skeleton height="${height}" width="${width}">
      </chameleon-skeleton>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},619:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(639);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Switch",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Switch",()=>{const label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Checked",!0);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-switch
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-switch>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},620:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),lit_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),lit_html__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2);__webpack_require__(638);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Table",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Basic",()=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
      <chameleon-table
        .columns=${columns}
        .rows=${rows}
        .pageSize=${pageSize}
        .currentPage=${currentPage}
        .totalItems=${totalItems}
        @chameleon.table.change=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon.table.change")}
      ></chameleon-table>
    `,{info:{inline:!0}}),stories.add("Details Rows",()=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
      <chameleon-table
        .columns=${columnsWithDetailFields}
        .rows=${rows}
        .pageSize=${pageSize}
        .currentPage=${currentPage}
        .totalItems=${totalItems}
        @chameleon.table.change=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon.table.change")}
      ></chameleon-table>
    `,{info:{inline:!0}}),stories.add("Filters",()=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
      <chameleon-table
        .columns=${columnsWithFilters}
        .rows=${rows}
        .pageSize=${pageSize}
        .currentPage=${currentPage}
        .totalItems=${totalItems}
        @chameleon.table.change=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("chameleon.table.change")}
      ></chameleon-table>
    `,{info:{inline:!0}});const columns=[{header:"Column 1",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field1}
      `},{header:"Column 2",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field2}
      `},{header:"Column 3",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field3}
      `},{header:"Column 4",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field4}
      `}],columnsWithDetailFields=[{header:"Column 1",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field1}
      `,detailsRow:()=>lit_html__WEBPACK_IMPORTED_MODULE_4__.nothing},{header:"Column 2",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field2}
      `,detailsRow:detailsRow=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${detailsRow.detailsField2}
      `},{header:"Column 3",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field3}
      `,detailsRow:detailsRow=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${detailsRow.detailsField3}
      `},{header:"Column 4",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field4}
      `,detailsRow:detailsRow=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${detailsRow.detailsField4}
      `}],columnsWithFilters=[{header:"Column 1",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field1}
      `},{header:"Column 2",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field2}
      `,filter:{name:"column2"},sortable:!0},{header:"Column 3",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field3}
      `,filter:{name:"filterName_column3"},searchable:!0},{header:"Column 4",row:row=>lit_element__WEBPACK_IMPORTED_MODULE_3__.d`
        ${row.field4}
      `,filter:{name:"filterName_column4",items:[{value:"filter1",label:"Filter 1"},{value:"filter2",label:"Filter 2"},{value:"filter3",label:"Filter 3"}]},searchable:!0,sortable:!0}],rows=[{field1:"Row 1 - Field 1",field2:"Row 1 - Field 2",field3:"Row 1 - Field 3",field4:"Row 1 - Field 4",showDetails:!1,details:[{detailsField2:"Details Row 1 - Field 2",detailsField3:"Details Row 1 - Field 3",detailsField4:"Details Row 1 - Field 4"}]},{field1:"Row 2 - Field 1",field2:"Row 2 - Field 2",field3:"Row 2 - Field 3",field4:"Row 2 - Field 4",showDetails:!0,details:[{detailsField2:"Details Row 1 - Field 2",detailsField3:"Details Row 1 - Field 3",detailsField4:"Details Row 1 - Field 4"},{detailsField2:"Details Row 2 - Field 2",detailsField3:"Details Row 2 - Field 3",detailsField4:"Details Row 2 - Field 4"}]},{field1:"Row 3 - Field 1",field2:"Row 3 - Field 2",field3:"Row 3 - Field 3",field4:"Row 3 - Field 4",showDetails:!0,details:[]},{field1:"Row 4 - Field 1",field2:"Row 4 - Field 2",field3:"Row 4 - Field 3",field4:"Row 4 - Field 4",showDetails:!0,details:[{detailsField2:"Details Row 1 - Field 2",detailsField3:"Details Row 1 - Field 3",detailsField4:"Details Row 1 - Field 4"},{detailsField2:"Details Row 2 - Field 2",detailsField3:"Details Row 2 - Field 3",detailsField4:"Details Row 2 - Field 4"},{detailsField2:"Details Row 3 - Field 2",detailsField3:"Details Row 3 - Field 3",detailsField4:"Details Row 3 - Field 4"},{detailsField2:"Details Row 4 - Field 2",detailsField3:"Details Row 4 - Field 3",detailsField4:"Details Row 4 - Field 4"}]}],pageSize=6,currentPage=1,totalItems=4}.call(this,__webpack_require__(12)(module))},621:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),lit_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);__webpack_require__(624);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Tabs",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Tabs",()=>lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-tabs
        selected="0"
        @selected-changed=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("selected-changed")}
      >
        <chameleon-tab>
          Tab One
        </chameleon-tab>
        <chameleon-tab>
          Tab Two
        </chameleon-tab>
        <chameleon-tab>
          Tab Three
        </chameleon-tab>
      </chameleon-tabs>
    `,{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},622:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);__webpack_require__(633);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Textarea",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Textarea",()=>{const disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label",""),error=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Error",""),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Placeholder","Text..."),minlength=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("minlength",0),maxlength=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("maxlength",500),rows=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Rows",2),cols=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Columns",20),nonresizeable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("non-resizeable",!1);return lit_html__WEBPACK_IMPORTED_MODULE_2__.html`
      <chameleon-textarea
        ?disabled="${disabled}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
        .minlength="${minlength}"
        .maxlength="${maxlength}"
        .rows="${rows}"
        .cols="${cols}"
        .nonresizeable="${nonresizeable}"
      ></chameleon-textarea>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},623:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_polymer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),lit_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2);__webpack_require__(631);const stories=Object(_storybook_polymer__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Toast",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),stories.add("Toast",()=>{const color=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Color",""),backgroundColor=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Background Color",""),showCloseable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Show",!0),imageUrl=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Image Url","https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?k=6&m=517109442&s=612x612&w=0&h=NvQ5y8ENWZvpr84vEFWmxUgV2rCgtOGEsjJXa3IYsZ4="),toastText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","This website uses cookies to remember you and improve your experience. By using our site, you accept our use of cookies.");return lit_html__WEBPACK_IMPORTED_MODULE_3__.html`
      <chameleon-toast
        color="${color}"
        backgroundColor="${backgroundColor}"
        ?showCloseable="${showCloseable}"
        @close-toast=${_utils__WEBPACK_IMPORTED_MODULE_2__.a.action("close-toast")}
      >
        <span slot="toast-text">${toastText}</span>
        <img slot="closed-icon" src="${imageUrl}" />
      </chameleon-toast>
    `},{info:{inline:!0}})}.call(this,__webpack_require__(12)(module))},624:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0);let chameleon_tab_ChameleonTab=class ChameleonTab extends lit_element.a{constructor(){super(),this.addEventListener("click",this.handleToggle)}render(){return lit_element.d`
      <slot></slot>
    `}handleToggle(){this.dispatchEvent(new CustomEvent("selected-changed",{detail:{value:this.dataset.index},bubbles:!0,composed:!0}))}};chameleon_tab_ChameleonTab=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}([Object(lit_element.c)("chameleon-tab")],chameleon_tab_ChameleonTab);var chameleon_tabs_style=lit_element.b`
  :host {
    box-shadow: inset 0 -1px 0 0 rgba(26, 57, 96, 0.1);
    display: flex;
    justify-content: space-around;
  }

  ::slotted(chameleon-tab) {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    font-size: 1.125em;
    height: 65px;
    justify-content: center;
    padding: 8px 12px;
    color: var(--color-gray-light, #c4c7ca);
  }

  ::slotted(chameleon-tab:hover) {
    cursor: pointer;
    color: var(--color-secondary, #69c9b9);
  }

  ::slotted([active]) {
    border-bottom: solid 1px var(--color-secondary, #69c9b9);
    box-shadow: inset 0 -2px 0 0 var(--color-secondary, #69c9b9);
    color: var(--color-secondary, #69c9b9);
  }
`,chameleon_tabs_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_tabs_ChameleonTabs=class ChameleonTabs extends lit_element.a{constructor(){super(),this.selected=0,this.addEventListener("selected-changed",this._handleSelectedChanged)}firstUpdated(){const tabs=Array.from(this.querySelectorAll("chameleon-tab"));if(tabs.length<=0)throw new Error("<chameleon-tabs> must have at least one <chameleon-tab> element");tabs.forEach((tab,i)=>tab.setAttribute("data-index",i.toString()))}updated(changedProperties){if(changedProperties.has("selected")){Array.from(this.querySelectorAll("chameleon-tab")).forEach((tab,i)=>{tab.removeAttribute("active"),i===this.selected&&tab.setAttribute("active","true")})}}render(){return lit_element.d`
      <slot></slot>
    `}_handleSelectedChanged(e){e.preventDefault(),this.selected=parseInt(e.detail.value)}};chameleon_tabs_ChameleonTabs.styles=[chameleon_tabs_style],chameleon_tabs_decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_tabs_ChameleonTabs.prototype,"selected",void 0);chameleon_tabs_ChameleonTabs=chameleon_tabs_decorate([Object(lit_element.c)("chameleon-tabs")],chameleon_tabs_ChameleonTabs)},625:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),class_map=__webpack_require__(16),base=lit_element.b`
  :host {
    --border-radius: 0.5rem;
    --border-radius-input: 0.313rem;
    --button-padding: 0.75rem 1.375rem;
    --input-padding: 0.625rem 0.5rem;
    --textarea-padding: 0.438rem 0.813rem;
    --multiselect-padding: 0.438rem 0.5rem;

    --color-surface: #ffffff;
    --color-black: #252a33;
    --color-background: #f5f5f8;
    --color-primary: #2c6fb7;
    --color-primary-light: #679dea;
    --color-primary-dark: #004587;
    --color-secondary: #69c9b9;
    --color-secondary-light: #9cfceb;
    --color-secondary-dark: #349889;
    --color-gray-lightest: #e1e3e4;
    --color-gray-light: #c4c7ca;
    --color-gray-dark: #9fa4a8;
    --color-gray-darkest: #6c737a;
    --color-warning: #fcb61a;
    --color-warning-light: #fdd375;
    --color-warning-lightest: #fef0d1;
    --color-error: #bc1c16;
    --color-error-light: #fdd375;
    --color-error-lightest: #fef0d1;
    --color-success: #00870a;
    --color-success-light: #fdd375;
    --color-success-lightest: #fef0d1;
    --color-box-shadow: rgba(159, 164, 168, 0.6);

    --font-letter-spacing: 0.018rem;
    --font-size-paragraph-medium: 0.938rem;
    --font-size-subtitle: 0.938rem;
    --font-size-title: 1.4rem;
    --font-size-input: 0.938rem;
    --font-size-label: 0.875rem;
    --font-family: sans-serif;
    --font-size-table-header: 1rem;
    --font-size-table-content: 0.875rem;
  }
`,chameleon_dialog_style=lit_element.b`
  .open {
    display: flex;
  }
  .close {
    display: none;
  }
  .dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding: 0.5em;
  }

  .overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
  }

  chameleon-card {
    flex-direction: column;
    border-top: solid var(--color-secondary) 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 0 5px 12px 0 rgba(44, 111, 183, 0.2),
      0 2px 6px -1px rgba(44, 111, 183, 0.12),
      0 1px 4px 0 rgba(44, 111, 183, 0.14);
    margin: auto;
    background-color: #ffffff;
    width: 300px;
    padding: 48px;
    animation-name: dialogopen;
    animation-duration: 1s;
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    margin-top: 1.5em;
  }

  .close-icon {
    display: flex;
    cursor: pointer;
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }

  svg {
    width: 100%;
    height: 100%;
    color: var(--color-gray-darkest);
  }

  :slotted(*) {
    color: var(--color-gray-darkest);
    height: 1.125em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
  }

  ::slotted([slot="icon"]) {
    color: var(--color-secondary-dark);
    height: 2.625em;
  }

  ::slotted([slot="title"]) {
    color: var(--color-primary);
    font-size: 2em;
    font-weight: 300;
    letter-spacing: 0.016em;
    margin: 1em 0;
  }

  ::slotted([slot="accept-action"]) {
    margin-top: 1em;
  }

  ::slotted([slot="decline-action"]) {
    margin-top: 1em;
  }

  @keyframes dialogopen {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,__decorate=(__webpack_require__(283),__webpack_require__(98),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let chameleon_dialog_ChameleonDialog=class ChameleonDialog extends lit_element.a{constructor(){super(...arguments),this.open=!0,this.icon=!1,this.dismissible=!1}render(){return lit_element.d`
      <div
        class="${Object(class_map.a)({overlay:!0,open:this.open,close:!this.open})}"
      >
        <chameleon-card>
          <div class="dialog">
          ${this.dismissible?lit_element.d`
                  <chameleon-button
                    theme="text"
                    class="close-icon"
                    icon-only
                    @click="${this._toggleDialog}"
                  >
                    ${this.closeIcon}
                  </chameleon-button>
                `:lit_html.nothing}
          
        </div>
            <slot name="icon"></slot>
            <slot name="title"></slot>
            <slot></slot>
            <div class="actions">
              <slot name="accept-action"></slot>
              <slot name="decline-action"></slot>
            </div>
          </div>
        </div>
      </chameleon-card>
    `}_toggleDialog(){this.open=!this.open;const e=new CustomEvent("toggle-dialog",{bubbles:!0,composed:!0});this.dispatchEvent(e)}get closeIcon(){return void 0===Array.from(this.querySelectorAll("[slot]")).find(slot=>"close-icon"===slot.slot)?lit_html.svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`:lit_element.d`
        <slot name="close-icon"></slot>
      `}};chameleon_dialog_ChameleonDialog.styles=[base,chameleon_dialog_style],__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_dialog_ChameleonDialog.prototype,"open",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_dialog_ChameleonDialog.prototype,"icon",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_dialog_ChameleonDialog.prototype,"dismissible",void 0);chameleon_dialog_ChameleonDialog=__decorate([Object(lit_element.c)("chameleon-dialog")],chameleon_dialog_ChameleonDialog)},626:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),style_map=__webpack_require__(286),lit_html=__webpack_require__(2),chameleon_hero_style=lit_element.b`
  header {
    padding: 0 5em;
  }

  .hero {
    align-items: center;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    min-height: 400px;
    width: 100%;
  }

  .hero-title {
    font-size: var(--font-size-hero-title, 3rem);
    font-weight: normal;
    letter-spacing: -0.72px;
    margin: 0 0 8px;
  }

  .hero-subtitle {
    font-size: var(--font-size-hero-subtitle, 1.375rem);
    font-weight: normal;
    margin: 0 0 16px;
  }

  .hero-text {
    font-size: var(--font-size-paragraph-medium);
    letter-spacing: 0.25px;
    margin: 0;
  }

  .hero-title,
  .hero-subtitle,
  .hero-text {
    color: var(--color-hero-text, #ffffff);
  }
`,__decorate=(__webpack_require__(284),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let chameleon_hero_ChameleonHero=class ChameleonHero extends lit_element.a{constructor(){super(...arguments),this.title="",this.subTitle="",this.heroText="",this.imageUrl="",this.type="gradient",this.gradient="var(--color-primary-dark), var(--color-secondary-dark)",this.gradientAlpha=.5,this.loading=!1}render(){return lit_element.d`
      ${this.loading?lit_element.d`
            <chameleon-skeleton height="${400}"></chameleon-skeleton>
          `:lit_element.d`
            <div class="hero" style="${Object(style_map.a)(this.backgroundImageStyles)}">
              <header class="heading">
                ${this.title?lit_element.d`
                      <h1 class="hero-title surface-color">${this.title}</h1>
                    `:lit_html.nothing}
                ${this.subTitle?lit_element.d`
                      <h3 class="hero-subtitle surface-color">
                        ${this.subTitle}
                      </h3>
                    `:lit_html.nothing}
                ${this.heroText?lit_element.d`
                      <p class="hero-text surface-color">
                        ${this.heroText}
                      </p>
                    `:lit_html.nothing}
                <slot></slot>
              </header>
            </div>
          `}
    `}get backgroundImageStyles(){switch(this.type){case"imageGradient":return{backgroundImage:`linear-gradient(to right, ${this.gradientOverlay}), url(${this.imageUrl})`};case"gradient":return{backgroundImage:`linear-gradient(to right, ${this.gradientHex})`};case"image":return{backgroundImage:`url(${this.imageUrl})`};default:return{backgroundImage:`linear-gradient(to right, ${this.gradientHex})`}}}get gradientHex(){return this.gradient.split(",").map(h=>h.trim())}get gradientOverlay(){return this.gradient.split(",").map(h=>this.hex2rgba(h.trim(),this.gradientAlpha))}hex2rgba(hex,alpha=.5){const[r,g,b]=hex.match(/\w\w/g).map(x=>parseInt(x,16));return`rgba(${r},${g},${b},${alpha})`}};chameleon_hero_ChameleonHero.styles=[chameleon_hero_style],__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"title",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"subTitle",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"heroText",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"imageUrl",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"type",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_hero_ChameleonHero.prototype,"gradient",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_hero_ChameleonHero.prototype,"gradientAlpha",void 0),__decorate([Object(lit_element.e)({type:Boolean})],chameleon_hero_ChameleonHero.prototype,"loading",void 0);chameleon_hero_ChameleonHero=__decorate([Object(lit_element.c)("chameleon-hero")],chameleon_hero_ChameleonHero)},627:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_sheet_style=lit_element.b`
  :host {
    position: fixed;
    display: inline-block;
    height: 100%;
    right: 0;
    min-width: 320px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    background-color: var(--color-surface, #ffffff);
  }

  :host([sheetopened]) {
    transform: translateX(0);
  }

  .head-container {
    position: relative;
    padding: 20px;
  }

  .header {
    font-family: var(--font-family, sans-serif);
    color: var(--color-primary, #2c6fb7);
    font-size: var(--font-size-title, 1.4rem);
    font-weight: 400;
    margin-top: 0;
  }

  .sub-header {
    display: block;
    font-family: var(--font-family, sans-serif);
    color: var(--color-primary, #2c6fb7);
    font-size: 1rem;
    font-weight: 400;
    margin: 16px 20px 0 20px;
  }

  .close-icon {
    display: flex;
    cursor: pointer;
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
  }

  ::slotted(p) {
    color: var(--color-gray-darkest, #6c737a);
  }

  ::slotted([slot="details"]) {
    font-size: var(--font-size-subtitle, 0.938rem);
  }

  ::slotted([slot="actions"]) {
    border-top: solid 2px #e1e3e4;
    border-bottom: solid 2px #e1e3e4;
    padding: 20px;
    font-size: var(--font-size-subtitle, 0.938rem);
  }

  ::slotted([slot="content"]) {
    padding: 0 20px;
    font-size: var(--font-size-label, 0.875rem);
  }
`,__decorate=(__webpack_require__(98),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let chameleon_sheet_ChameleonSheet=class ChameleonSheet extends lit_element.a{constructor(){super(...arguments),this.header="",this.subHeader="",this.sheetOpened=!1}render(){return lit_element.d`
      <header class="head-container">
        <chameleon-button
          class="close-icon"
          icon-only
          theme="text"
          @click="${this._toggleSheet}"
          >${this.closeIcon}</chameleon-button
        >

        <h3 class="header">${this.header}</h3>

        <slot name="details"></slot>
      </header>

      <slot name="actions"></slot>
      ${this.subHeader?lit_element.d`
            <span class="sub-header">${this.subHeader}</span>
          `:lit_html.nothing}
      <slot name="content"></slot>
    `}_toggleSheet(){this.sheetOpened=!this.sheetOpened;const e=new CustomEvent("toggle-sheet",{bubbles:!0,composed:!0});this.dispatchEvent(e)}get closeIcon(){return void 0===Array.from(this.querySelectorAll("[slot]")).find(slot=>"close-icon"===slot.slot)?lit_html.svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`:lit_element.d`
        <slot name="close-icon"></slot>
      `}};chameleon_sheet_ChameleonSheet.styles=[chameleon_sheet_style],__decorate([Object(lit_element.e)({type:String})],chameleon_sheet_ChameleonSheet.prototype,"header",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_sheet_ChameleonSheet.prototype,"subHeader",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_sheet_ChameleonSheet.prototype,"sheetOpened",void 0);chameleon_sheet_ChameleonSheet=__decorate([Object(lit_element.c)("chameleon-sheet")],chameleon_sheet_ChameleonSheet)},628:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),repeat=__webpack_require__(127),class_map=__webpack_require__(16),lit_html=__webpack_require__(2),chameleon_select_style=lit_element.b`
  :host {
    font-family: var(--font-family, sans-serif);
    display: block;
    box-sizing: border-box;
    position: relative;
  }

  :host * {
    box-sizing: border-box;
  }

  :host([disabled]) .container {
    cursor: not-allowed;
  }

  :host([disabled]) .svg-inline--fa {
    color: var(--color-gray-light, #c4c7ca);
  }

  :host([disabled]) .options__option-selected {
    color: var(--color-gray-light, #c4c7ca);
  }

  .container {
    background: var(--color-surface, #ffffff);
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-radius: var(--border-radius, 5px);
    cursor: pointer;
    min-height: 40px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .container.active {
    border-bottom: none;
    border-radius: var(--border-radius, 5px) var(--border-radius, 5px) 0 0;
  }

  .tags {
    padding: var(--input-padding, 15px);
    padding-right: 40px;
  }

  .select {
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
  }

  .container.active .select {
    height: 50px;
  }

  .search {
    padding: var(--input-padding, 15px);
  }

  .search__input {
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-radius: 5px;
    font-size: var(--font-size-input, 0.938rem);
    padding: 10px;
    width: 100%;
  }

  .svg-inline--fa {
    height: 15px;
  }

  .placeholder {
    color: var(--color-gray-light-dark, #6c737a);
  }

  .options {
    background-color: #ffffff;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  .container.active .options {
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-top: none;
    border-radius: 0px 0px var(--border-radius, 5px) var(--border-radius, 5px);
  }

  .options__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .options__option {
    align-items: center;
    display: flex;
    padding: var(--input-padding, 15px);
  }

  .options__option .svg-inline--fa,
  .options__option-selected .svg-inline--fa {
    height: 25px;
    color: var(--color-primary, #2c6fb7);
  }

  .options__option:hover .svg-inline--fa {
    color: #ffffff;
  }

  .options__option-selected {
    align-items: center;
    display: flex;
  }

  .options__option-labels {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: 0 10px;
  }

  .options__option-label,
  .options__option-subLabel {
    display: block;
  }

  .options__option:hover .options__option-label,
  .options__option:hover .options__option-subLabel {
    color: #ffffff;
  }

  .options__option-subLabel {
    display: inline;
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-input, 0.938rem);
    margin: 5px 0;
  }

  .options__option-label.bold {
    font-weight: bold;
  }

  .options__option:hover {
    background-color: var(--color-primary, #2c6fb7);
    color: #ffffff;
  }

  .options__option-postLabel {
    display: inline;
  }

  .options_dates {
    display: flex;
    flex-direction: row;
    margin-right: 30px;
  }

  .options__option-startDateLabel {
    margin-bottom: 10px;
  }

  .options__option-startDateLabel,
  .options__option-endDateLabel {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-input, 0.938rem);
    display: block;
  }

  .label-container {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-label, 0.875rem);
    margin-bottom: 10px;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_select_ChameleonSelect=class ChameleonSelect extends lit_element.a{constructor(){super(),this.options=[],this.filteredOptions=[],this.selectedOption={},this._value="",this.placeHolder="",this.active=!1,this.disabled=!1,this.searchable=!1,this.label="",this.valid=!0,document.addEventListener("click",this.closeOptionsList),document.addEventListener("chameleon-select.close",()=>{this.active=!1})}updated(changedProperties){changedProperties.has("_value")&&this.setSelection(this._value),changedProperties.has("options")&&(this.options.find(option=>option.value===this._value)&&this.setSelection(this._value),this.options.forEach(option=>{option.selected&&!0===option.selected&&this.setSelection(option)}))}disconnectedCallback(){document.removeEventListener("click",this.closeOptionsList),document.removeEventListener("chameleon-select.close",()=>{this.active=!1})}render(){return lit_element.d`
      ${this.labelText}
      <div
        class="${Object(class_map.a)({"chameleon-select":!0,container:!0,active:this.active})}"
        @click="${this.activateSelections}"
      >
        <div class="chameleon-select tags">
          ${this.renderedselectedOption}
        </div>
        <div class="chameleon-select select">
          ${this.selectCaret}
        </div>
        ${this.searchBar} ${this.optionsList}
      </div>
    `}get value(){return this.selectedOption.value}set value(value){this._value=value}get selectCaret(){return!1===this.active?this.carrotDown:!0===this.active?this.carrotUp:this.carrotDown}get optionsList(){return!0===this.active?lit_element.d`
        <div class="chameleon-select options">
          <ul class="options__list">
            ${Object(repeat.a)(this.filteredOptions.length>0?this.filteredOptions:this.options,option=>lit_element.d`
                <li
                  class="options__option"
                  value="${option.value}"
                  @click="${this.addSelection}"
                >
                  ${option.preLabel?option.preLabel:lit_html.nothing}
                  <div class="options__option-labels">
                    <div class="options__option-group">
                      <span
                        class="options__option-label ${option.subLabel?"bold":""}"
                        >${option.label}</span
                      >
                      ${option.subLabel?lit_element.d`
                            <span class="options__option-subLabel">
                              ${option.subLabel}
                            </span>
                          `:lit_html.nothing}
                    </div>
                    ${option.postLabel?lit_element.d`
                          <span class="options__option-postLabel">
                            ${option.postLabel}</span
                          >
                        `:lit_html.nothing}
                  </div>
                </li>
              `)}
          </ul>
        </div>
      `:lit_html.nothing}get renderedselectedOption(){if(void 0!==this.selectedOption.value){const option=this.selectedOption;return lit_element.d`
        <span class="chameleon-select options__option-selected">
          ${option.preLabel?option.preLabel:lit_html.nothing}
          <div class="options__option-labels">
            <div class="options__option-group">
              <span
                class="options__option-label ${option.subLabel?"bold":""}"
                >${option.label}</span
              >
              ${option.subLabel?lit_element.d`
                    <span class="options__option-subLabel">
                      ${option.subLabel}
                    </span>
                  `:lit_html.nothing}
            </div>
            ${option.postLabel?lit_element.d`
                  <span class="options__option-postLabel">
                    ${option.postLabel}</span
                  >
                `:lit_html.nothing}
          </div>
        </span>
      `}return lit_element.d`
        <span class="chameleon-select placeholder">${this.placeHolder}</span>
      `}get searchBar(){return this.active&&this.searchable?lit_element.d`
        <div class="chameleon-select search">
          <input
            class="chameleon-select search__input"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="true"
            type="text"
            @input="${this.handleSearch}"
          />
        </div>
      `:lit_html.nothing}get labelText(){return""!==this.label?lit_element.d`
        <div class="label-container">
          <label>${this.label}</label>
        </div>
      `:lit_html.nothing}activateSelections(){this.disabled||(this.active=!0)}addSelection(e){console.log(e);let value=e.composedPath().find(e=>e.hasAttribute("value"));console.log(value),this.filteredOptions=[],e.stopPropagation();const option=this.options.find(option=>option.value===value.getAttribute("value"));this.selectedOption=option||{},this.dispatchEvent(new CustomEvent("chameleon.select",{detail:{value:this.value,selectedOption:this.selectedOption},bubbles:!0,composed:!0})),this.active=!1}setSelection(value){if(""===value||void 0===value)return;const found=this.options.find(option=>value===option.value);if(void 0===found)throw new Error("Value not found within the options array!");this.selectedOption=Object.assign({},found)}clearSelections(){this.selectedOption={}}handleSearch(e){const query=e.target.value.toLowerCase();this.filteredOptions=this.options.filter(option=>{option.label&&option.label.toLowerCase().includes(query)})}closeOptionsList(e){if(e.composedPath&&e.composedPath()[0]&&e.composedPath()[0].classList){const classes=Array.from(e.composedPath()[0].classList);if(classes.includes("chameleon-select")&&!classes.includes("active"))return void e.stopPropagation();classes.includes("chameleon-select")||this.dispatchEvent(new CustomEvent("chameleon-select.close"))}}get carrotDown(){return lit_element.f`
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      class="feather feather-chevron-down">
      <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
  `}get carrotUp(){return lit_element.f`
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      class="feather feather-chevron-up">
      <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
  `}};chameleon_select_ChameleonSelect.styles=[chameleon_select_style],__decorate([Object(lit_element.e)({type:Array})],chameleon_select_ChameleonSelect.prototype,"options",void 0),__decorate([Object(lit_element.e)({type:Array})],chameleon_select_ChameleonSelect.prototype,"filteredOptions",void 0),__decorate([Object(lit_element.e)({type:Object})],chameleon_select_ChameleonSelect.prototype,"selectedOption",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_select_ChameleonSelect.prototype,"_value",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_select_ChameleonSelect.prototype,"placeHolder",void 0),__decorate([Object(lit_element.e)({type:Boolean})],chameleon_select_ChameleonSelect.prototype,"active",void 0),__decorate([Object(lit_element.e)({type:Boolean})],chameleon_select_ChameleonSelect.prototype,"disabled",void 0),__decorate([Object(lit_element.e)({type:Boolean})],chameleon_select_ChameleonSelect.prototype,"searchable",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_select_ChameleonSelect.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:Boolean})],chameleon_select_ChameleonSelect.prototype,"valid",void 0);chameleon_select_ChameleonSelect=__decorate([Object(lit_element.c)("chameleon-select")],chameleon_select_ChameleonSelect)},629:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_rice_ball_dessert_style=lit_element.b`
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    background: #f7e5d7;
  }

  .riceball {
    position: absolute;
    width: 200px;
    height: 200px;
    background: #fff;
    border-radius: 50%;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/10em 10em, #fff;
    background-blend-mode: hard-light;
    box-shadow: inset -25px -25px 25px rgba(229, 219, 211, 0.8),
      5px 5px 15px 5px rgba(216, 200, 190, 0.3);
    -webkit-clip-path: inset(-40px -30px 25% -20px);
    clip-path: inset(-40px -30px 25% -20px);
  }

  .riceball .face {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(5deg);
    transform: translate(-50%, -50%) rotate(5deg);
    width: 30px;
    height: 20px;
    background: #000;
    border-radius: 50%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .riceball .face::before,
  .riceball .face::after {
    display: block;
    content: "";
    position: absolute;
    top: -5px;
    width: 12px;
    height: 12px;
    background: #000;
    border-radius: 50%;
  }

  .riceball .face::before {
    left: -40px;
  }

  .riceball .face::after {
    right: -40px;
  }

  .riceball.uno {
    left: 150px;
    bottom: 65px;
    -webkit-animation: 3s rice-up infinite;
    animation: 3s rice-up infinite;
  }

  .riceball.uno .face {
    -webkit-transform: translate(-50%, -50%) rotate(-20deg);
    transform: translate(-50%, -50%) rotate(-20deg);
    -webkit-animation: 3s face-bob infinite;
    animation: 3s face-bob infinite;
  }

  .riceball.uno .face::before,
  .riceball.uno .face::after {
    -webkit-animation: 3s eye-bulge infinite;
    animation: 3s eye-bulge infinite;
  }

  .riceball.dos {
    left: 20px;
    bottom: -35px;
    -webkit-animation: 1s little-bob1 linear infinite;
    animation: 1s little-bob1 linear infinite;
  }

  .riceball.dos .face {
    -webkit-transform: translate(-50%, -50%) rotate(-5deg);
    transform: translate(-50%, -50%) rotate(-5deg);
  }

  .riceball.tres {
    bottom: 0;
    right: 30px;
    -webkit-animation: 1.2s little-bob2 linear infinite;
    animation: 1.2s little-bob2 linear infinite;
  }

  .syrup {
    position: absolute;
    bottom: -50px;
    width: 500px;
    height: 200px;
    border-radius: 50%;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/10em 10em,
      radial-gradient(
        ellipse at bottom center,
        #f0ad42 0%,
        #feda90 31%,
        #f0ad42 66%,
        #feda90 86%,
        #f0ad42 100%
      );
    background-blend-mode: hard-light;
  }

  .bowl {
    position: absolute;
    top: calc(50% + 100px);
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 500px;
    height: 250px;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/15em 15em,
      radial-gradient(
        ellipse at top left,
        #fff 0%,
        #fcfcfc 35%,
        #f1ccbb 60%,
        #fdf1dd 70%,
        #fff 80%
      );
    background-blend-mode: hard-light;
    border-bottom-left-radius: 230px;
    border-bottom-right-radius: 230px;
    box-shadow: 15px 40px 80px -30px #c5ae9f;
  }

  .back {
    position: absolute;
    top: -100px;
    width: 500px;
    height: 200px;
    border-radius: 50%;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/10em 10em,
      radial-gradient(
        ellipse at bottom right,
        #fff 0%,
        #fcfcfc 35%,
        #f1ccbb 60%,
        #fdf1dd 75%,
        #fff 90%
      );
    background-blend-mode: hard-light;
  }

  .contents {
    position: fixed;
    bottom: 150px;
    width: 500px;
    height: 400px;
    border-bottom-left-radius: 50% 100px;
    border-bottom-right-radius: 50% 100px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    overflow: hidden;
  }

  .spoon {
    position: absolute;
    top: -60%;
    left: -200px;
    -webkit-transform: rotate(25deg);
    transform: rotate(25deg);
    width: 300px;
    height: 40px;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/5em 10em,
      linear-gradient(to bottom, #fff 40%, #e2d7cb 100%);
    background-blend-mode: hard-light;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    -webkit-animation: spoon-up 3s infinite;
    animation: spoon-up 3s infinite;
  }

  .spoon .scoop {
    position: absolute;
    top: 50%;
    right: -200px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 220px;
    height: 140px;
    border-radius: 50%;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/10em 10em, #fff;
    background-blend-mode: hard-light;
    box-shadow: inset -10px -5px 15px #ceb499, 10px 10px 50px -10px #c5ae9f;
  }

  .spoon .scoop::before {
    display: block;
    content: "";
    position: absolute;
    top: 2px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 200px;
    height: 120px;
    background: url(https://i.postimg.cc/25nGjYrD/felt.jpg) 0 0/10em 10em,
      linear-gradient(to bottom, #e2d7cb 20%, #fff 100%);
    background-blend-mode: hard-light;
    border-radius: 50%;
  }

  @-webkit-keyframes spoon-up {
    0% {
      top: -60%;
      left: -200px;
    }

    25% {
      top: -80%;
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    50% {
      top: -90%;
      left: -300px;
      -webkit-transform: rotate(25deg);
      transform: rotate(25deg);
    }

    100% {
      top: -60%;
      left: -200px;
      -webkit-transform: rotate(25deg);
      transform: rotate(25deg);
    }
  }

  @keyframes spoon-up {
    0% {
      top: -60%;
      left: -200px;
    }

    25% {
      top: -80%;
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    50% {
      top: -90%;
      left: -300px;
      -webkit-transform: rotate(25deg);
      transform: rotate(25deg);
    }

    100% {
      top: -60%;
      left: -200px;
      -webkit-transform: rotate(25deg);
      transform: rotate(25deg);
    }
  }

  @-webkit-keyframes rice-up {
    0% {
      left: 150px;
      bottom: 65px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    25% {
      bottom: 160px;
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    50% {
      left: 20px;
      bottom: 140px;
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    55% {
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    100% {
      left: 150px;
      bottom: 65px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }

  @keyframes rice-up {
    0% {
      left: 150px;
      bottom: 65px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    25% {
      bottom: 160px;
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    50% {
      left: 20px;
      bottom: 140px;
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    55% {
      -webkit-clip-path: inset(-40px -30px 0 -20px);
      clip-path: inset(-40px -30px 0 -20px);
    }

    100% {
      left: 150px;
      bottom: 65px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }

  @-webkit-keyframes face-bob {
    0% {
      -webkit-transform: translate(-50%, -50%) rotate(10deg);
      transform: translate(-50%, -50%) rotate(10deg);
    }

    50% {
      height: 10px;
      -webkit-transform: translate(-50%, -50%) rotate(-10deg);
      transform: translate(-50%, -50%) rotate(-10deg);
    }

    100% {
      -webkit-transform: translate(-50%, -50%) rotate(10deg);
      transform: translate(-50%, -50%) rotate(10deg);
    }
  }

  @keyframes face-bob {
    0% {
      -webkit-transform: translate(-50%, -50%) rotate(10deg);
      transform: translate(-50%, -50%) rotate(10deg);
    }

    50% {
      height: 10px;
      -webkit-transform: translate(-50%, -50%) rotate(-10deg);
      transform: translate(-50%, -50%) rotate(-10deg);
    }

    100% {
      -webkit-transform: translate(-50%, -50%) rotate(10deg);
      transform: translate(-50%, -50%) rotate(10deg);
    }
  }

  @-webkit-keyframes eye-bulge {
    0% {
      width: 12px;
      height: 12px;
    }

    50% {
      width: 18px;
      height: 18px;
    }

    100% {
      width: 12px;
      height: 12px;
    }
  }

  @keyframes eye-bulge {
    0% {
      width: 12px;
      height: 12px;
    }

    50% {
      width: 18px;
      height: 18px;
    }

    100% {
      width: 12px;
      height: 12px;
    }
  }

  @-webkit-keyframes little-bob1 {
    0% {
      bottom: -35px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    50% {
      bottom: -33px;
      -webkit-clip-path: inset(-40px -30px 23% -20px);
      clip-path: inset(-40px -30px 23% -20px);
    }

    100% {
      bottom: -35px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }

  @keyframes little-bob1 {
    0% {
      bottom: -35px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    50% {
      bottom: -33px;
      -webkit-clip-path: inset(-40px -30px 23% -20px);
      clip-path: inset(-40px -30px 23% -20px);
    }

    100% {
      bottom: -35px;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }

  @-webkit-keyframes little-bob2 {
    0% {
      bottom: 0;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    50% {
      bottom: -2px;
      -webkit-clip-path: inset(-40px -30px 26% -20px);
      clip-path: inset(-40px -30px 26% -20px);
    }

    100% {
      bottom: 0;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }

  @keyframes little-bob2 {
    0% {
      bottom: 0;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }

    50% {
      bottom: -2px;
      -webkit-clip-path: inset(-40px -30px 26% -20px);
      clip-path: inset(-40px -30px 26% -20px);
    }

    100% {
      bottom: 0;
      -webkit-clip-path: inset(-40px -30px 25% -20px);
      clip-path: inset(-40px -30px 25% -20px);
    }
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_rice_ball_dessert_ChameleonRiceBallDessert=class ChameleonRiceBallDessert extends lit_element.a{constructor(){super(...arguments),this.riceBallColor="red"}render(){return lit_element.d`
      <div class="bowl">
        <div class="back"></div>
        <div class="spoon">
          <div class="scoop"></div>
        </div>
        <div class="contents">
          <div class="syrup"></div>
          <div class="riceball uno" style="background: ${this.riceBallColor}">
            <div class="face"></div>
          </div>
          <div class="riceball dos" style="background: ${this.riceBallColor}">
            <div class="face"></div>
          </div>
          <div class="riceball tres" style="background: ${this.riceBallColor}">
            <div class="face"></div>
          </div>
        </div>
      </div>
    `}};chameleon_rice_ball_dessert_ChameleonRiceBallDessert.styles=[chameleon_rice_ball_dessert_style],__decorate([Object(lit_element.e)({type:String})],chameleon_rice_ball_dessert_ChameleonRiceBallDessert.prototype,"riceBallColor",void 0);chameleon_rice_ball_dessert_ChameleonRiceBallDessert=__decorate([Object(lit_element.c)("chameleon-rice-ball-dessert")],chameleon_rice_ball_dessert_ChameleonRiceBallDessert)},630:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_radio_style=lit_element.b`
  :host {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    font-size: var(--font-size-input, 0.938rem);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input {
    cursor: pointer;
    display: none;
  }

  .checkmark {
    background-color: var(--color-surface, #ffffff);
    border: 2px solid var(--color-gray-lightest, #e1e3e4);
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 20px;
  }

  :host:hover input ~ .checkmark {
    background-color: var(--color-surface, #ffffff);
  }

  input:checked ~ .checkmark {
    background-color: var(--color-primary, #2c6fb7);
    border: none;
  }

  .checkmark:after {
    content: "";
    display: none;
    position: absolute;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    background: var(--color-surface, #ffffff);
    border-radius: 50%;
    height: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
  }

  :host([disabled]),
  input[disabled] {
    pointer-events: none;
  }

  input:checked ~ .checkmark.disabled {
    background-color: var(--color-gray-lightest, #e1e3e4);
    pointer-events: none;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_radio_ChameleonRadio=class ChameleonRadio extends lit_element.a{constructor(){super(...arguments),this.label="",this.checked=!1,this.value="",this.disabled=!1}render(){return lit_element.d`
      <input
        type="radio"
        ?checked="${this.checked}"
        value="${this.value}"
        ?disabled="${this.disabled}"
      />
      <span class="checkmark ${this.disabled?"disabled":""}"></span>
      ${this.labelText}
    `}get labelText(){return""!==this.label?this.label:lit_html.nothing}};chameleon_radio_ChameleonRadio.styles=[chameleon_radio_style],__decorate([Object(lit_element.e)({type:String})],chameleon_radio_ChameleonRadio.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_radio_ChameleonRadio.prototype,"checked",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_radio_ChameleonRadio.prototype,"value",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_radio_ChameleonRadio.prototype,"disabled",void 0);chameleon_radio_ChameleonRadio=__decorate([Object(lit_element.c)("chameleon-radio")],chameleon_radio_ChameleonRadio)},631:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),class_map=__webpack_require__(16),chameleon_toast_style=lit_element.b`
  /* The toast - position it at the bottom and in the middle of the screen */
  #toast {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 28%; /* Set a default minimum width */
    max-width: 28%; /* Set a default max width */
    background-color: #333; /* Black background color */
    color: #f5f5f8; /* off white text color */
    text-align: left; /* left-aligned text */
    border-radius: 10px; /* Rounded borders */
    padding: 1rem; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    bottom: 30px; /* 30px from the bottom */
    font-size: 14px;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
  }

  .toast-text {
    margin: 0 5px;
  }

  @media (max-width: 768px) {
    #toast {
      min-width: 90%;
      max-width: 90%;
    }
  }

  @media (max-width: 420px) {
    #toast {
      bottom: 70px;
      min-width: 0px;
    }
  }

  /* Show the toast */
  #toast.show-closeable {
    visibility: visible; /* Show the toast */
    /* Add animation: Take 0.5 seconds to fade in the toast.*/
    -webkit-animation: fadein 0.5s;
    animation: fadein 0.5s;
  }

  /* Hide the toast */
  #toast.hide-closeable {
    visibility: visible;
    -webkit-animation: fadeout 0.5s forwards;
    animation: fadeout 0.5s forwards;
    /* Show the toast */
    /* Add animation: Take 0.5 seconds to fade out the toast. */
  }

  .closed-icon {
    align-self: center;
    display: flex;
  }

  ::slotted(*) {
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }

  /* Animations to fade the toast in */
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }
  /* Animations to fade the toast out */
  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @media (max-width: 420px) {
    @-webkit-keyframes fadeout {
      from {
        bottom: 70px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }
    @keyframes fadeout {
      from {
        bottom: 70px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_toast_ChameleonToast=class ChameleonToast extends lit_element.a{constructor(){super(...arguments),this.color="",this.showCloseable=!0,this.backgroundColor=""}render(){return lit_element.d`
      <div
        id="toast"
        class="
        ${Object(class_map.a)({"show-closeable":this.showCloseable,"hide-closeable":!this.showCloseable})}"
        style="background-color: ${this.backgroundColor}"
      >
        <div class="toast-text" style="color: ${this.color};">
          <slot name="toast-text">
            This website uses cookies to remember you and improve your
            experience. By using our site, you accept our use of cookies.
          </slot>
        </div>
        <a class="closed-icon" @click="${this.closeToast}">
          <slot name="closed-icon">x</slot>
        </a>
      </div>
    `}closeToast(){const x=this.shadowRoot.getElementById("toast");x.className=x.className.replace("show-closeable",""),this.showCloseable=!this.showCloseable,this.dispatchEvent(new CustomEvent("close-toast",{bubbles:!0,composed:!0}))}};chameleon_toast_ChameleonToast.styles=[chameleon_toast_style],__decorate([Object(lit_element.e)({type:String})],chameleon_toast_ChameleonToast.prototype,"color",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_toast_ChameleonToast.prototype,"showCloseable",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_toast_ChameleonToast.prototype,"backgroundColor",void 0);chameleon_toast_ChameleonToast=__decorate([Object(lit_element.c)("chameleon-toast")],chameleon_toast_ChameleonToast)},632:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_alert_style=lit_element.b`
  :host {
    align-items: center;
    background-color: var(--color-error-lightest, #f1d1d0);
    border: 1px solid var(--color-error, #bc1c16);
    border-radius: var(--border-radius-input, 0.313rem);
    color: var(--color-error, #bc1c16);
    display: inline-flex;
    padding: 14px 10px;
  }

  .closebtn {
    color: var(--color-error, #bc1c16);
    cursor: pointer;
    display: flex;
    margin: 0px 0px 0px 15px;
  }

  .icon {
    height: 24px;
    margin: 0px 15px 0px 0px;
  }

  .message {
    font-size: var(--font-size-input, 0.938rem);
    font-weight: 600;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_alert_ChameleonAlert=class ChameleonAlert extends lit_element.a{constructor(){super(...arguments),this.message=""}render(){return lit_element.d`
      <span class="icon">${this.alertIcon}</span>
      <span class="message">${this.message}</span>
      <span class="closebtn" @click="${this.handleClose}">
        ${this.closeIcon}
      </span>
    `}handleClose(){this.remove()}get alertIcon(){return lit_element.f`
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="feather feather-alert-circle">
            <circle cx="12" cy="12" r="10">
            </circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
    `}get closeIcon(){return lit_element.f`
      <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `}};chameleon_alert_ChameleonAlert.styles=[chameleon_alert_style],__decorate([Object(lit_element.e)({type:String})],chameleon_alert_ChameleonAlert.prototype,"message",void 0);chameleon_alert_ChameleonAlert=__decorate([Object(lit_element.c)("chameleon-alert")],chameleon_alert_ChameleonAlert)},633:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_textarea_style=lit_element.b`
  :host {
    display: inline-flex;
    flex-direction: column;
  }

  textarea {
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-radius: var(--border-radius-input, 0.313rem);
    font-size: var(--font-size-input, 0.938rem);
    padding: var(--textarea-padding, 0.438rem 0.813rem);
  }

  textarea[nonresizeable] {
    resize: none;
  }

  label {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-label, 0.875rem);
    margin-bottom: 10px;
  }

  .error {
    color: var(--color-error, #bc1c16);
    font-size: var(--font-size-label, 0.875rem);
    margin-top: 3px;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_textarea_ChameleonTextarea=class ChameleonTextarea extends lit_element.a{constructor(){super(...arguments),this.autocomplete=!1,this.autofocus=!1,this.cols=20,this.disabled=!1,this.maxlength=null,this.minlength=null,this.placeholder="",this.readonly=!1,this.required=!1,this.rows=2,this.spellcheck=!1,this.value="",this.label="",this.validationMessage="",this.nonresizeable=!1}render(){return lit_element.d`
      ${this.labelText}
      <textarea
        name="cha-textarea"
        ?autocomplete="${this.autocomplete}"
        ?autofocus="${this.autofocus}"
        cols="${this.cols}"
        ?disabled="${this.disabled}"
        maxlength="${this.maxlength}"
        minlength="${this.minlength}"
        placeholder="${this.placeholder}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        rows="${this.rows}"
        spellcheck="${this.spellcheck}"
        ?nonresizeable="${this.nonresizeable}"
        @blur="${this._handleBlur}"
        @invalid="${this._handleInvalid}"
        @input="${this._handleInput}"
      ></textarea>
      ${this.errorText}
    `}get _el(){return null!==this.shadowRoot?this.shadowRoot.querySelector("textarea"):null}get labelText(){return""!==this.label?lit_element.d`
        <label for="cha-textarea">${this.label}</label>
      `:lit_html.nothing}get errorText(){return""!==this.validationMessage?lit_element.d`
        <span class="error">${this.validationMessage}</span>
      `:lit_html.nothing}get validity(){return null!==this._el?this._el.validity:void 0}get willValidate(){return null!==this._el&&this._el.willValidate}checkValidity(){return null!==this._el&&this._el.checkValidity()}_handleBlur(){this.checkValidity()}_handleInvalid(){this.validationMessage=null!==this._el?this._el.validationMessage:""}_handleInput(e){this.value=e.target.value}};chameleon_textarea_ChameleonTextarea.styles=[chameleon_textarea_style],__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"autocomplete",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"autofocus",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"cols",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"disabled",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"maxlength",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"minlength",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"placeholder",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"readonly",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"required",void 0),__decorate([Object(lit_element.e)({type:Number,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"rows",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_textarea_ChameleonTextarea.prototype,"spellcheck",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"value",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_textarea_ChameleonTextarea.prototype,"validationMessage",void 0),__decorate([Object(lit_element.e)({type:Boolean})],chameleon_textarea_ChameleonTextarea.prototype,"nonresizeable",void 0);chameleon_textarea_ChameleonTextarea=__decorate([Object(lit_element.c)("chameleon-textarea")],chameleon_textarea_ChameleonTextarea)},634:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_checkbox_style=lit_element.b`
  :host {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    font-size: var(--font-size-input, 0.938rem);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: top;
  }

  input {
    cursor: pointer;
    display: none;
  }

  .checkmark {
    background-color: transparent;
    border: 2px solid var(--color-gray-lightest, #e1e3e4);
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 20px;
  }

  :host:hover input ~ .checkmark {
    background-color: var(--color-surface, #ffffff);
  }

  input:checked ~ .checkmark {
    background-color: var(--color-primary, #2c6fb7);
    border: none;
  }

  .checkmark:after {
    border-bottom: 2px solid var(--color-surface, #ffffff);
    border-right: 2px solid var(--color-surface, #ffffff);
    content: "";
    display: none;
    height: 13px;
    margin-left: 7px;
    margin-top: 1px;
    transform: rotate(45deg);
    width: 4px;
  }

  input:checked ~ .checkmark::after {
    display: inline-block;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_checkbox_ChameleonCheckbox=class ChameleonCheckbox extends lit_element.a{constructor(){super(...arguments),this.label="",this.checked=!1,this.value=""}render(){return lit_element.d`
      <input type="checkbox" ?checked="${this.checked}" value="${this.value}" />
      <span class="checkmark"></span>
      ${this.labelText}
    `}get labelText(){return""!==this.label?this.label:lit_html.nothing}};chameleon_checkbox_ChameleonCheckbox.styles=[chameleon_checkbox_style],__decorate([Object(lit_element.e)({type:String})],chameleon_checkbox_ChameleonCheckbox.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_checkbox_ChameleonCheckbox.prototype,"checked",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_checkbox_ChameleonCheckbox.prototype,"value",void 0);chameleon_checkbox_ChameleonCheckbox=__decorate([Object(lit_element.c)("chameleon-checkbox")],chameleon_checkbox_ChameleonCheckbox)},635:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_card_footer_style=lit_element.b`
  :host {
    display: flex;
    margin: 1.5rem 0 0.625rem 0;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_footer_ChameleonCardFooter=class ChameleonCardFooter extends lit_element.a{render(){return lit_element.d`
      <slot></slot>
    `}};chameleon_card_footer_ChameleonCardFooter.styles=[chameleon_card_footer_style];chameleon_card_footer_ChameleonCardFooter=__decorate([Object(lit_element.c)("chameleon-card-footer")],chameleon_card_footer_ChameleonCardFooter)},636:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),chameleon_card_image_style=lit_element.b`
  :host {
    display: inline-block;
  }

  img {
    border-radius: var(--border-radius, 0.5rem);
    vertical-align: top;
    width: 100%;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_image_ChameleonCardImage=class ChameleonCardImage extends lit_element.a{constructor(){super(...arguments),this.src="",this.alt=""}render(){return lit_element.d`
      <img src="${this.src}" alt="${this.alt}" />
    `}};chameleon_card_image_ChameleonCardImage.styles=[chameleon_card_image_style],__decorate([Object(lit_element.e)({type:String})],chameleon_card_image_ChameleonCardImage.prototype,"src",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_card_image_ChameleonCardImage.prototype,"alt",void 0);chameleon_card_image_ChameleonCardImage=__decorate([Object(lit_element.c)("chameleon-card-image")],chameleon_card_image_ChameleonCardImage)},637:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_card_header_style=lit_element.b`
  :host {
    display: block;
    margin-bottom: 11px;
  }

  h3,
  h2 {
    overflow: hidden;
    margin: 0;
    text-overflow: ellipsis;
  }

  h3 {
    color: var(--color-secondary-dark, #349889);
    font-size: var(--font-size-subtitle, 0.938rem);
    line-height: 21px;
    white-space: nowrap;
  }

  h2 {
    font-size: var(--font-size-title, 1.4rem);
    line-height: 27px;
    max-height: 52px;
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_card_header_ChameleonCardHeader=class ChameleonCardHeader extends lit_element.a{constructor(){super(...arguments),this.title="",this.subtitle=""}render(){return lit_element.d`
      ${""!==this.subtitle?lit_element.d`
            <h3>${this.subtitle}</h3>
          `:lit_html.nothing}
      ${""!==this.title?lit_element.d`
            <h2>${this.title}</h2>
          `:lit_html.nothing}
    `}};chameleon_card_header_ChameleonCardHeader.styles=[chameleon_card_header_style],__decorate([Object(lit_element.e)({type:String})],chameleon_card_header_ChameleonCardHeader.prototype,"title",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_card_header_ChameleonCardHeader.prototype,"subtitle",void 0);chameleon_card_header_ChameleonCardHeader=__decorate([Object(lit_element.c)("chameleon-card-header")],chameleon_card_header_ChameleonCardHeader)},638:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),class_map=__webpack_require__(16),chameleon_table_style=(__webpack_require__(281),__webpack_require__(280),__webpack_require__(279),lit_element.b`
  :host {
    --th-and-td-text-align: left;

    --row-hover-color: var(--color-surface, #ffffff);
    --row-highlight-color: var(--color-primary-light, #679dea);

    display: block;
    font-family: var(--font-family, sans-serif);
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  table th,
  table td {
    color: var(--color-black, #252a33);
    line-height: 1.4;
    text-align: var(--th-and-td-text-align, initial);
    width: var(--table-column-width, initial);
  }

  table th {
    border-bottom: 3px solid var(--color-secondary, #69c9b9);
    font-size: var(--font-size-table-header, 1rem);
    padding: 1rem 0.5rem;
    vertical-align: top;
  }

  table td {
    border-bottom: 1px solid var(--color-gray-light, #c4c7ca);
    border-top: 1px solid var(--color-gray-light, #c4c7ca);
    font-size: var(--font-size-table-content, 0.875rem);
    padding: 1.5rem 0.5rem;
  }

  table th:first-child,
  table td:first-child {
    @media (min-width: 480px) {
      padding-left: 1rem;
    }
  }

  table th:last-child,
  table td:last-child {
    @media (min-width: 480px) {
      padding-right: 1rem;
    }
  }

  table tr.details-row td {
    border: 0;
  }

  table tr:last-child td,
  table tr.details-row:last-child td {
    border-bottom: 1px solid var(--color-gray-light, #c4c7ca);
  }

  table tr.active,
  tbody:hover tr {
    background-color: var(--row-hover-color);
    transition: background-color 0.25s ease;
  }

  tr.highlight-row {
    background-color: var(--row-highlight-color);
  }

  table th .header-container {
    align-items: center;
    display: grid;
    grid-auto-rows: 2em 1fr;
    width: 100%;
  }

  table th .column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  table th .sort-icons {
    margin-right: 0.5rem;
    opacity: 0.5;
  }

  table th .sort-icons .icon-container {
    color: var(--color-primary-light, #679dea);
    cursor: pointer;
    height: 1rem;
    opacity: 0.5;
    transition: all 0.1s ease;
  }

  table th .sort-icons .icon-container.active,
  table th .sort-icons .icon-container:hover {
    color: var(--color-primary, #2c6fb7);
    opacity: 1;
    transition: all 0.2s ease;
  }

  table th .sort-icons .icon-container svg {
    height: 1rem;
    width: 1rem;
  }

  table th .filter,
  table th .search {
    display: flex;
    margin-top: 0.5rem;
  }

  chameleon-paginator {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
`),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_table_ChameleonTable=class ChameleonTable extends lit_element.a{constructor(){super(...arguments),this.columns=[],this.rows=[],this.highlightRow=null,this.filters={},this.sort={orderBy:"",order:"ASC"},this.pageSize=null,this.totalItems=null,this.currentPage=1}render(){return lit_element.d`
      <table>
        <thead>
          <tr>
            ${this.columns.map(column=>lit_element.d`
                <th>
                  <div class="header-container">
                    ${this.renderColumnHeader(column)}
                  </div>
                </th>
              `)}
          </tr>
        </thead>

        ${this.rows.map((row,index)=>lit_element.d`
              <tbody>
                <tr
                  class=${Object(class_map.a)({"highlight-row":index===this.highlightRow,"show-details":row.showDetails||!1})}
                  data-row=${index}
                >
                  ${this.columns.map(column=>lit_element.d`
                        <td>
                          ${column.row(row)}
                        </td>
                      `)}
                </tr>

                ${row.details&&row.showDetails?row.details.map((detailsRow,index)=>lit_element.d`
                          <tr
                            class="details-row ${Object(class_map.a)({"highlight-row":index===this.highlightRow,"show-details":row.showDetails||!1})}"
                            data-row=${index}
                          >
                            ${this.columns.map(column=>column.detailsRow?lit_element.d`
                                    <td>
                                      ${column.detailsRow(detailsRow,row)}
                                    </td>
                                  `:lit_html.nothing)}
                          </tr>
                        `):lit_html.nothing}
              </tbody>
            `)}
      </table>

      <chameleon-paginator
        totalItems=${this.totalItems}
        pageSize=${this.pageSize}
        currentPage=${this.currentPage}
        @page-change=${this.handlePageChange}
      ></chameleon-paginator>
    `}renderColumnHeader(column){var _a,_b;return column.filter&&column.filter.name?column.filter.items?lit_element.d`
            <div class="column-header">
              ${column.header} ${this.renderColumnSort(column)}
            </div>

            <chameleon-multiselect
              class="filter"
              .placeholder="${_a=column.filter.placeholder,null!=_a?_a:"Filter by"}"
              .options=${column.filter.items}
              @chameleon.select=${e=>this.handleFilterChange(e.detail.value,column)}
            >
              ${this.chevronDownIcon}
            </chameleon-multiselect>
          `:lit_element.d`
            <div class="column-header">
              ${column.header} ${this.renderColumnSort(column)}
            </div>

            ${column.searchable&&lit_element.d`
                <chameleon-input
                  class="search"
                  outlined
                  .placeholder="${_b=column.filter.placeholder,null!=_b?_b:"Search"}"
                  name=${column.filter.name}
                  @chameleon.input.input=${e=>this.handleFilterChange(e.detail.value,column)}
                ></chameleon-input>
              `}
          `:lit_element.d`
          <div class="column-header">
            ${column.header}
          </div>
        `}renderColumnSort(column){return column.sortable?lit_element.d`
          <div class="sort-icons">
            <div
              class="
              icon-container
              sort-ascending
              ${this.sortActiveClass(column,"ASC")}
              "
              @click=${()=>this.handleSort(column,"ASC")}
            >
              ${this.chevronUpIcon}
            </div>

            <div
              class="
              icon-container
              sort-descending
              ${this.sortActiveClass(column,"DESC")}
              "
              @click=${()=>this.handleSort(column,"DESC")}
            >
              ${this.chevronDownIcon}
            </div>
          </div>
        `:lit_html.nothing}sortActiveClass(column,order){return column.filter&&column.filter.name&&this.sort.orderBy===column.filter.name&&this.sort.order===order?"active":""}handleFilterChange(filterValue,column){var _a,_b;(null===(_b=null===(_a=column)||void 0===_a?void 0:_a.filter)||void 0===_b?void 0:_b.name)&&(this.filters[column.filter.name]=filterValue,this.dispatchChangeEvent())}handleSort(column,order){var _a,_b;this.sort={order:order,orderBy:(null===(_b=null===(_a=column)||void 0===_a?void 0:_a.filter)||void 0===_b?void 0:_b.name)||""},this.dispatchChangeEvent(),this.requestUpdate()}handlePageChange(e){this.currentPage=e.detail.currentPage,this.dispatchChangeEvent()}dispatchChangeEvent(){const eventDetail={detail:{filters:this.filters,sort:this.sort,page:this.currentPage},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("chameleon.table.change",eventDetail))}get chevronUpIcon(){return lit_html.svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-up"
      >
        <polyline points="4 18 12 10 20 18"></polyline>
      </svg>
    `}get chevronDownIcon(){return lit_html.svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-down"
        slot="icon"
      >
        <polyline points="4 6 12 14 20 6"></polyline>
      </svg>
    `}};chameleon_table_ChameleonTable.styles=[chameleon_table_style],__decorate([Object(lit_element.e)({type:Array})],chameleon_table_ChameleonTable.prototype,"columns",void 0),__decorate([Object(lit_element.e)({type:Array})],chameleon_table_ChameleonTable.prototype,"rows",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_table_ChameleonTable.prototype,"highlightRow",void 0),__decorate([Object(lit_element.e)({type:Object})],chameleon_table_ChameleonTable.prototype,"filters",void 0),__decorate([Object(lit_element.e)({type:Object})],chameleon_table_ChameleonTable.prototype,"sort",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_table_ChameleonTable.prototype,"pageSize",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_table_ChameleonTable.prototype,"totalItems",void 0),__decorate([Object(lit_element.e)({type:Number})],chameleon_table_ChameleonTable.prototype,"currentPage",void 0);chameleon_table_ChameleonTable=__decorate([Object(lit_element.c)("chameleon-table")],chameleon_table_ChameleonTable)},639:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),chameleon_switch_style=lit_element.b`
  :host {
    align-items: center;
    display: inline-flex;
    font-size: var(--font-size-input, 0.938rem);
  }

  .switch {
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 32px;
  }

  .switch input {
    display: none;
  }

  .slider {
    background-color: var(--color-gray-lightest, #e1e3e4);
    border-radius: 10px;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: var(--color-surface, #ffffff);
    border-radius: 50%;
    bottom: 2px;
    box-shadow: 1px 0 3px var(--color-box-shadow, rgba(159, 164, 168, 0.6));
    content: "";
    height: 16px;
    left: 2px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
  }

  input:checked + .slider {
    background-color: var(--color-primary, #2c6fb7);
  }

  input:focus + .slider {
    box-shadow: 0 0 3px var(--color-gray-dark, #9fa4a8);
  }

  input:checked + .slider:before {
    box-shadow: none;
    transform: translateX(12px);
  }
`,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let chameleon_switch_ChameleonSwitch=class ChameleonSwitch extends lit_element.a{constructor(){super(...arguments),this.label="",this.checked=!1,this.value=""}render(){return lit_element.d`
      <div class="switch">
        <input type="radio" ?checked="${this.checked}" value="${this.value}" />
        <span class="slider"></span>
      </div>
      ${this.labelText}
    `}get labelText(){return""!==this.label?this.label:lit_html.nothing}};chameleon_switch_ChameleonSwitch.styles=[chameleon_switch_style],__decorate([Object(lit_element.e)({type:String})],chameleon_switch_ChameleonSwitch.prototype,"label",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_switch_ChameleonSwitch.prototype,"checked",void 0),__decorate([Object(lit_element.e)({type:String})],chameleon_switch_ChameleonSwitch.prototype,"value",void 0);chameleon_switch_ChameleonSwitch=__decorate([Object(lit_element.c)("chameleon-switch")],chameleon_switch_ChameleonSwitch)},98:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(0),lit_html=__webpack_require__(2),class_map=__webpack_require__(16),chameleon_button_style=lit_element.b`
  :host {
    --button-border-color: var(--color-primary, #2c6fb7);
    --button-hover-color: var(--color-primary-dark, #004587);
    --button-hover-text-color: var(--color-surface, #ffffff);
    --button-text-color: var(--color-primary, #2c6fb7);
    display: inline-flex;
    height: var(--button-height, 40px);
  }

  :host([full-width]) {
    width: 100%;
  }

  :host([full-width]) a,
  :host([full-width]) button {
    width: 100%;
  }

  :host([icon-only]) button,
  :host([icon-left]) button,
  :host([icon-right]) button {
    padding: 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  button[disabled] {
    background-color: var(--color-gray-lightest, #e1e3e4);
    border-color: var(--color-gray-lightest, #e1e3e4);
    color: var(--color-gray-darkest, #6c737a);
    pointer-events: none;
  }

  button {
    align-items: center;
    background-color: var(--color-primary, #2c6fb7);
    border-radius: var(--border-radius-input, 0.313rem);
    border: 1px solid var(--button-border-color);
    color: var(--color-surface, #ffffff);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family, sans-serif);
    font-weight: var(--font-weight, normal);
    font-size: var(--font-size-paragraph-medium, 0.938rem);
    justify-content: center;
    letter-spacing: var(--font-letter-spacing, 0.018rem);
    line-height: 1;
    padding: var(--button-padding, 0.75rem 1.375rem);
    position: relative;
    transition: all 150ms linear;
    height: 100%;
    width: 100%;
  }

  button:hover {
    background-color: var(--button-hover-color);
    border-color: var(--button-hover-color);
  }

  .secondary {
    background-color: var(--color-surface, #ffffff);
    color: var(--button-text-color);
  }

  .secondary:hover {
    color: var(--button-hover-text-color);
  }

  .text {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary, #2c6fb7);
    text-decoration: underline;
    align-self: center;
  }

  .text:hover {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary-dark, #004587);
  }

  button[disabled].text {
    background-color: transparent;
    border-color: transparent;
  }

  ::slotted([slot="icon-left"]) {
    margin-right: 0.1875rem;
  }

  ::slotted([slot="icon-right"]) {
    margin-left: 0.1875rem;
  }

  ::slotted([slot="icon-only"]) {
    padding: 0.1875rem;
  }

  slot[name="icon-loading"] > * {
    height: calc(100% - 1rem);
    margin: 0.5rem 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  /* If the loading icon is rendered, hide the rest of the button content */
  slot[name="icon-loading"] ~ * {
    visibility: hidden;
  }
`,__decorate=(__webpack_require__(179),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let chameleon_button_ChameleonButton=class ChameleonButton extends lit_element.a{constructor(){super(...arguments),this.disabled=!1,this.loading=!1,this.theme="primary",this["icon-left"]=!1,this["icon-right"]=!1,this["icon-only"]=!1,this.href=null,this["new-tab"]=!1}render(){return lit_element.d`
      ${this.href&&!this.disabled?lit_element.d`
            <a
              href=${this.href}
              target=${this.getTarget()}
              rel=${this.getRel()}
            >
              ${this.renderButton()}
            </a>
          `:lit_element.d`
            ${this.renderButton()}
          `}
    `}renderButton(){return lit_element.d`
      <button
        class=${Object(class_map.a)({[this.theme]:!0})}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?lit_element.d`
              <slot name="icon-loading">
                <chameleon-loader></chameleon-loader>
              </slot>
            `:lit_html.nothing}
        <slot name="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right"></slot>
        <slot name="icon-only"></slot>
      </button>
    `}getTarget(){return this["new-tab"]?"_blank":"_top"}getRel(){return this["new-tab"]?"noopener noreferrer":""}};chameleon_button_ChameleonButton.styles=[chameleon_button_style],__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"disabled",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"loading",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_button_ChameleonButton.prototype,"theme",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"icon-left",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"icon-right",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"icon-only",void 0),__decorate([Object(lit_element.e)({type:String,reflect:!0})],chameleon_button_ChameleonButton.prototype,"href",void 0),__decorate([Object(lit_element.e)({type:Boolean,reflect:!0})],chameleon_button_ChameleonButton.prototype,"new-tab",void 0);chameleon_button_ChameleonButton=__decorate([Object(lit_element.c)("chameleon-button")],chameleon_button_ChameleonButton)}},[[287,1,2]]]);
//# sourceMappingURL=main.bccd0db292ee2b3c6ba0.bundle.js.map