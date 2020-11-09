/*! For license information please see has-cts.js.LICENSE.txt */
(()=>{var __webpack_modules__={184:(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}},__webpack_module_cache__={};function __webpack_require__(moduleId){if(__webpack_module_cache__[moduleId])return __webpack_module_cache__[moduleId].exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),(()=>{"use strict";var classnames=__webpack_require__(184),classnames_default=__webpack_require__.n(classnames);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var _wp$element=wp.element,Component=_wp$element.Component,Fragment=_wp$element.Fragment,__=wp.i18n.__,_wp$components=(wp.htmlEntities.decodeEntities,wp.apiFetch,wp.data.registerStore,wp.components),PanelBody=_wp$components.PanelBody,RangeControl=(_wp$components.Placeholder,_wp$components.QueryControls,_wp$components.RangeControl),SelectControl=_wp$components.SelectControl,TextControl=(_wp$components.Spinner,_wp$components.TextControl),_wp$editor=(_wp$components.ToggleControl,_wp$components.Toolbar,_wp$components.withAPIData,wp.editor),InspectorControls=_wp$editor.InspectorControls,RichText=_wp$editor.RichText,PanelColorSettings=_wp$editor.PanelColorSettings;const edit=function(_Component){!function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(HAS_Click_To_Share,_Component);var Constructor,protoProps,staticProps,_super=_createSuper(HAS_Click_To_Share);function HAS_Click_To_Share(){var _this;return _classCallCheck(this,HAS_Click_To_Share),_defineProperty(_assertThisInitialized(_this=_super.apply(this,arguments)),"onChangeValue",(function(value){_this.setState({shareText:value})})),_defineProperty(_assertThisInitialized(_this),"borderRoundedChange",(function(value){_this.setState({borderRadius:value})})),_this.state={shareText:__("Click to Share","highlight-and-share"),borderRadius:_this.props.attributes.borderRadius},_this}return Constructor=HAS_Click_To_Share,(protoProps=[{key:"render",value:function(){var _this2=this,_this$props=this.props,_this$props$attribute=_this$props.attributes,shareText=_this$props$attribute.shareText,backgroundColor=_this$props$attribute.backgroundColor,textColor=_this$props$attribute.textColor,fontSize=_this$props$attribute.fontSize,clickText=_this$props$attribute.clickText,padding=_this$props$attribute.padding,border=_this$props$attribute.border,borderRadius=_this$props$attribute.borderRadius,borderColor=_this$props$attribute.borderColor,fontWeight=_this$props$attribute.fontWeight,clickShareFontSize=_this$props$attribute.clickShareFontSize,maxWidth=_this$props$attribute.maxWidth,alignment=_this$props$attribute.alignment,marginTop=_this$props$attribute.marginTop,marginRight=_this$props$attribute.marginRight,marginBottom=_this$props$attribute.marginBottom,marginLeft=_this$props$attribute.marginLeft,setAttributes=(_this$props.attributes,_this$props.isSelected,_this$props.editable,_this$props.className,_this$props.setAttributes),hasStyles={fontSize:fontSize+"px",padding:padding+"px",border:"".concat(border,"px solid ").concat(borderColor),borderRadius:borderRadius+"px",backgroundColor,color:textColor,maxWidth:"".concat(maxWidth,"%"),marginLeft:marginLeft+"px",marginRight:marginRight+"px",marginBottom:marginBottom+"px",marginTop:marginTop+"px"};"center"==alignment&&(hasStyles.margin="0 auto"),"left"==alignment&&(hasStyles.float="left"),"right"==alignment&&(hasStyles.float="right");var fontWeightArr=Array();fontWeightArr.push({label:__("Normal","highlight-and-share"),value:100}),fontWeightArr.push({label:__("Bold","highlight-and-share"),value:400}),fontWeightArr.push({label:__("Bolder","highlight-and-share"),value:700});var alignmentArr=Array();return alignmentArr.push({label:__("Left","highlight-and-share"),value:"left"}),alignmentArr.push({label:__("center","highlight-and-share"),value:"center"}),alignmentArr.push({label:__("right","highlight-and-share"),value:"right"}),React.createElement(Fragment,null,React.createElement(InspectorControls,null,React.createElement(PanelBody,{title:__("Highlight and Share Settings","highlight-and-share")},React.createElement(PanelColorSettings,{title:__("Background Color","highlight-and-share"),initialOpen:!1,colorSettings:[{value:backgroundColor,onChange:function(value){return setAttributes({backgroundColor:value})},label:__("Background Color","highlight-and-share")}]}),React.createElement(PanelColorSettings,{title:__("Text Color","highlight-and-share"),initialOpen:!1,colorSettings:[{value:textColor,onChange:function(value){return setAttributes({textColor:value})},label:__("Text Color","highlight-and-share")}]}),React.createElement(SelectControl,{label:__("Font Weight","highlight-and-share"),value:fontWeight,options:fontWeightArr,onChange:function(value){setAttributes({fontWeight:value})}}),React.createElement(TextControl,{label:__("Click to Share Text","highlight-and-share"),value:clickText,onChange:function(value){_this2.props.setAttributes({clickText:value})}})),React.createElement(PanelBody,{title:__("Spacing and Font Settings","highlight-and-share"),initialOpen:!1},React.createElement(RangeControl,{label:__("Font Size","highlight-and-share"),value:fontSize,onChange:function(value){return _this2.props.setAttributes({fontSize:value})},min:10,max:40,step:1}),React.createElement(RangeControl,{label:__("Click to Share Font Size","highlight-and-share"),value:clickShareFontSize,onChange:function(value){return _this2.props.setAttributes({clickShareFontSize:value})},min:10,max:40,step:1}),React.createElement(RangeControl,{label:__("Padding","highlight-and-share"),value:padding,onChange:function(value){return _this2.props.setAttributes({padding:value})},min:0,max:60,step:1}),React.createElement(RangeControl,{label:__("Border","highlight-and-share"),value:border,onChange:function(value){return _this2.props.setAttributes({border:value})},min:0,max:10,step:1}),React.createElement(RangeControl,{label:__("Border Rounded","highlight-and-share"),value:this.state.borderRadius,onChange:function(value){_this2.borderRoundedChange(value),_this2.props.setAttributes({borderRadius:value})},min:0,max:30,step:1}),React.createElement(PanelColorSettings,{title:__("Border Color","highlight-and-share"),initialOpen:!1,colorSettings:[{value:borderColor,onChange:function(value){return setAttributes({borderColor:value})},label:__("Border Color","highlight-and-share")}]})),React.createElement(PanelBody,{title:__("Alignment, Width, and Margins","highlight-and-share")},React.createElement(RangeControl,{label:__("Max Width","highlight-and-share"),value:maxWidth,onChange:function(value){return _this2.props.setAttributes({maxWidth:value})},min:0,max:100,step:5}),React.createElement(SelectControl,{label:__("Alignment","highlight-and-share"),value:alignment,options:alignmentArr,onChange:function(value){setAttributes({alignment:value})}}),React.createElement(RangeControl,{label:__("Margin Left","highlight-and-share"),value:marginLeft,onChange:function(value){return _this2.props.setAttributes({marginLeft:value})},min:0,max:20,step:1}),React.createElement(RangeControl,{label:__("Margin Right","highlight-and-share"),value:marginRight,onChange:function(value){return _this2.props.setAttributes({marginRight:value})},min:0,max:20,step:1}),React.createElement(RangeControl,{label:__("Margin Top","highlight-and-share"),value:marginTop,onChange:function(value){return _this2.props.setAttributes({marginTop:value})},min:0,max:20,step:1}),React.createElement(RangeControl,{label:__("Margin Bottom","highlight-and-share"),value:marginBottom,onChange:function(value){return _this2.props.setAttributes({marginBottom:value})},min:0,max:20,step:1}))),React.createElement(Fragment,null,React.createElement("div",{className:classnames_default()("has-click-to-share"),style:hasStyles},React.createElement("div",{className:"has-click-to-share-wrapper"},React.createElement(RichText,{tagName:"div",placeholder:__("Add share text","highlight-and-share"),value:shareText,className:"has-click-to-share-text",style:{color:textColor,fontSize:fontSize+"px",fontWeight},formattingControls:[],onChange:function(value){_this2.onChangeValue(value),setAttributes({shareText:value})}}),React.createElement("div",{className:"has-click-to-share-cta",style:{fontSize:clickShareFontSize}},clickText," ",React.createElement("svg",{style:{width:clickShareFontSize,height:clickShareFontSize},"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"share-alt",class:"svg-inline--fa fa-share-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},React.createElement("path",{fill:"currentColor",d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"})))))))}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),HAS_Click_To_Share}(Component);var _temp,block_=wp.i18n.__,registerBlockType=wp.blocks.registerBlockType;wp.element.Component;function blocks_typeof(obj){return(blocks_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function blocks_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function blocks_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function blocks_setPrototypeOf(o,p){return(blocks_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function blocks_createSuper(Derived){var hasNativeReflectConstruct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=blocks_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=blocks_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return blocks_possibleConstructorReturn(this,result)}}function blocks_possibleConstructorReturn(self,call){return!call||"object"!==blocks_typeof(call)&&"function"!=typeof call?blocks_assertThisInitialized(self):call}function blocks_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function blocks_getPrototypeOf(o){return(blocks_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function blocks_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}registerBlockType("has/click-to-share",{title:block_("Highlight and Share: Click to Share","highlight-and-share"),desription:block_("A block for clicking and sharing text.","highlight-and-share"),icon:React.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"share-alt",class:"svg-inline--fa fa-share-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},React.createElement("path",{fill:"currentColor",d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"})),category:"common",keywords:[block_("click","highlight-and-share"),block_("social","highlight-and-share"),block_("better","highlight-and-share"),block_("tweet","highlight-and-share"),block_("twitter","highlight-and-share"),block_("facebook","highlight-and-share"),block_("share","highlight-and-share"),block_("feature","highlight-and-share")],edit,save:function(){return null}});var blocks_wp$components=wp.components,withSpokenMessages=(blocks_wp$components.PanelBody,blocks_wp$components.PanelRow,blocks_wp$components.TextControl,blocks_wp$components.Popover,blocks_wp$components.Button,blocks_wp$components.CheckboxControl,blocks_wp$components.withSpokenMessages),_wp$i18n=wp.i18n,blocks_=_wp$i18n.__,_window$wp$richText=(_wp$i18n._x,window.wp.richText),registerFormatType=_window$wp$richText.registerFormatType,getActiveFormat=_window$wp$richText.getActiveFormat,applyFormat=_window$wp$richText.applyFormat,removeFormat=(_window$wp$richText.toggleFormat,_window$wp$richText.removeFormat),blocks_wp$element=wp.element,blocks_Fragment=blocks_wp$element.Fragment,blocks_Component=blocks_wp$element.Component,_window$wp$editor=window.wp.editor,RichTextToolbarButton=(_window$wp$editor.InspectorControls,_window$wp$editor.BlockControls,_window$wp$editor.MediaUpload,_window$wp$editor.RichText,_window$wp$editor.AlignmentToolbar,_window$wp$editor.PanelColorSettings,_window$wp$editor.RichTextToolbarButton);registerFormatType("has/inline",{title:blocks_("Inline Share","metronet-tag-manager"),tagName:"span",attributes:{onclick:"onclick",className:"has-inline-text"},className:"has-inline-text",edit:withSpokenMessages((_temp=function(_Component){!function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&blocks_setPrototypeOf(subClass,superClass)}(HASInline,_Component);var Constructor,protoProps,staticProps,_super=blocks_createSuper(HASInline);function HASInline(){var _this;return blocks_classCallCheck(this,HASInline),blocks_defineProperty(blocks_assertThisInitialized(_this=_super.apply(this,arguments)),"onClick",(function(){_this.props.isActive?_this.props.onChange(removeFormat(_this.props.value,"has/inline")):_this.props.onChange(applyFormat(_this.props.value,{type:"has/inline",attributes:{}}))})),blocks_defineProperty(blocks_assertThisInitialized(_this),"onRemove",(function(){_this.props.onChange(removeFormat(_this.props.value,"has/inline"))})),blocks_defineProperty(blocks_assertThisInitialized(_this),"onSave",(function(){_this.props.onChange(applyFormat(_this.props.value,{type:"has/inline",attributes:{}}))})),_this.state={},_this}return Constructor=HASInline,(protoProps=[{key:"render",value:function(){return this.props.isActive,getActiveFormat(this.props.value,"has/inline"),React.createElement(blocks_Fragment,null,!1===this.props.isActive&&React.createElement(RichTextToolbarButton,{icon:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},React.createElement("g",null,React.createElement("rect",{fill:"none",height:"24",width:"24"})),React.createElement("g",null,React.createElement("g",null,React.createElement("g",null,React.createElement("path",{d:"M6,14l3,3v5h6v-5l3-3V9H6V14z M11,2h2v3h-2V2z M3.5,5.88l1.41-1.41l2.12,2.12L5.62,8L3.5,5.88z M16.96,6.59l2.12-2.12 l1.41,1.41L18.38,8L16.96,6.59z"}))))),title:blocks_("Highlight and Share","highlight-and-share"),onClick:this.onClick}),!0===this.props.isActive&&React.createElement(RichTextToolbarButton,{icon:React.createElement("svg",{style:{backgroundColor:"#555d66",color:"#FFFFFF"},xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},React.createElement("g",null,React.createElement("rect",{fill:"none",height:"24",width:"24"})),React.createElement("g",null,React.createElement("g",null,React.createElement("g",null,React.createElement("path",{d:"M6,14l3,3v5h6v-5l3-3V9H6V14z M11,2h2v3h-2V2z M3.5,5.88l1.41-1.41l2.12,2.12L5.62,8L3.5,5.88z M16.96,6.59l2.12-2.12 l1.41,1.41L18.38,8L16.96,6.59z"}))))),title:blocks_("Highlight and Share","highlight-and-share"),onClick:this.onClick}))}}])&&blocks_defineProperties(Constructor.prototype,protoProps),staticProps&&blocks_defineProperties(Constructor,staticProps),HASInline}(blocks_Component),_temp))})})()})();