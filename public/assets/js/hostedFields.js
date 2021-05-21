function hostedCardFields() {

  (function(e,t,n,s){'use strict';var l="https://gateway.cardstream.com/sdk/web/v1/js/hostedfields.min.js",p=[];function m(){0&&console.log.apply(console,arguments)};function a(e){Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){for(var i in t){if(t.hasOwnProperty(i)){var s=Object.getOwnPropertyDescriptor(t,i);if(s){Object.defineProperty(e,i,s)}
else{e[i]=t[i]}}}}});return e};if(!String.prototype.endsWith){String.prototype.endsWith=function(e,t){if(t===s||t>this.length){t=this.length};return this.substring(t-e.length,t)===e}};function i(t,s){if(i._getElementInstance(t,this.constructor)){e.error('An instance of '+this.namespace+' has already been created for this element')};if(this._allowedElementTypes&&this._allowedElementTypes.indexOf(t.tagName)===-1){e.error('An instance of '+this.namespace+' can not be created on an element of type: '+t.tagName)};this._$element=e(t);this._options=this._mergeOptions(s);this._domId=this._$element.attr('id');this._objId=i._addInstance(this);i._setElementInstance(t,this);try{this._create();this._trigger(this.namespace+':create');this._init()}catch(n){if(!this.destroying){this.destroy()};throw n}};i.prototype={namespace:'hostedbase',constructor:i,defaultOptions:null,_allowedElementTypes:null,className:function(){return this.constructor.name},destroy:function(){this.destroying=!0;this._trigger(this.namespace+':destroy');this._destroy();i._delInstance(this.objId);i._delElementInstance(this._$element,this)},refresh:function(){this._setOptions(this._options)},_create:e.noop,_init:e.noop,_destroy:e.noop,_setOptions:e.noop,_trigger:function(t,i){t=(t instanceof e.Event?t:new e.Event(t,((typeof t==='string')?null:t)));t.isHostedFields=!0;this._$element.trigger(t,i,this);return!t.isDefaultPrevented()},_getMetaData:function(){var t=this._$element.data(),s=this.namespace.length,i=(t[this.namespace]?t[this.namespace]:{});for(var e in t){if(e!==this.namespace&&t.hasOwnProperty(e)&&e.indexOf(this.namespace)===0){var n=e[s].toLowerCase()+e.substr(s+1);i[n]=t[e]}};return i},_mergeOptions:function(t){return e.extend({},this.defaultOptions,this._getMetaData(),t)},_monitorPropertyChange:function(e,t){i._monitorPropertyChange(this._$element[0],e,t)},_monitorAttributeChange:function(e,t){i._monitorAttributeChange(this._$element[0],e,t)},_monitorMethodCall:function(e,t){i._monitorMethodCall(this._$element[0],e,t)},_silentPropertyChange:function(e,t){var s=this._$element[0],o=i._monitorPropertyChange(s,e,!1),n=s[e]=t;i._monitorPropertyChange(s,e,o);return n},_silentAttributeChange:function(t,s){var n=this._$element[0],r=i._monitorAttributeChange(n,t,!1),o=e(n).attr('attribute',s);i._monitorAttributeChange(n,t,r);return o},_silentMethodCall:function(e){var t=this._$element[0],n=i._monitorMethodCall(t,e,!1),e=Array.prototype.shift.apply(arguments),s=t[e].apply(t,arguments);i._monitorMethodCall(t,e,n);return s}};a(i,{findLabel:function(t){var i;if(t.id&&(i=e('label[for="'+t.id+'"]')).length){return i}
else{return e(t).closest('label')}},_instances:[],_addInstance:function(e){var t=i._instances.length;i._instances[t]=e;return t},_delInstance:function(e){i._instances[e]=null},_getInstance:function(t,s,n){var o=i._instances[t];if(s&&!(o instanceof s)){o=null};if(n&&!o){e.error('Can not get an instance of '+s.prototype.namespace+' with id: '+t)};return o},_setElementInstance:function(t,i){e(t).data(i.namespace,i)},_delElementInstance:function(t,i){e(t).removeData(i.namespace)},_getElementInstance:function(t,i,s){var n=e(t).data(i.prototype.namespace);if(i&&!(n instanceof i)){n=null};if(s&&!n){e.error('Can not get an instance of '+i.prototype.namespace+' associated with element: '+t)};return n},_getPropertyDescriptor:function(e,t){var s,n;if(!(s=Object.getOwnPropertyDescriptor(e,t))){if((n=Object.getPrototypeOf(e))){s=i._getPropertyDescriptor(n,t)}};return s},_monitorPrepare:function(e){if(!e.__hostedfield){e.__hostedfield={}};if(!e.__hostedfield.monitor){e.__hostedfield.monitor={property:{},attribute:{},method:{}}}},_monitorPropertyChange:function(t,s,n){try{i._monitorPrepare(t);if(!t.__hostedfield.monitor.property[s]){var r={enabled:!0,descriptor:i._getPropertyDescriptor(t,s),callbacks:e.Callbacks()};if(!r.descriptor){e.error('Element has no \''+s+'\' property to monitor');return!1};Object.defineProperty(t,s,a({},r.descriptor,{set:function(){if(!r.descriptor.get){};var e=r.descriptor.get.apply(this);r.descriptor.set.apply(this,arguments);if(r.enabled){var i=r.descriptor.get.apply(this);r.callbacks.fireWith(t,[s,e,i])}}}));t.__hostedfield.monitor.property[s]=r};if(n===!0||n===!1){t.__hostedfield.monitor.property[s].enabled=n}
else{t.__hostedfield.monitor.property[s].callbacks.add(n)}}catch(o){0&&console.error('Can not monitor property \''+s+'\'',t,o)};return!0},_monitorAttributeChange:function(t,s,n){try{i._monitorPrepare(t);if(!t.__hostedfield.monitor.attribute[s]){var r={enabled:!0,observer:null,callbacks:e.Callbacks()};var a=(typeof WebKitMutationObserver!=='undefined'?WebKitMutationObserver:(typeof MutationObserver!=='undefined'?MutationObserver:null));if(a){var r={enabled:!0,callbacks:e.Callbacks()};r.observer=new a(function(e){for(var i=0,n=e.length;i<n;i++){if(e[i].type==='attributes'&&e[i].attributeName===s){if(r.enabled){var a=e[i].oldValue,o=(e[i].target.attributes[s]?e[i].target.attributes[s].value:null);r.callbacks.fireWith(t,[s,a,o])}}}});r.observer.observe(t,{attributes:!0,attributeFilter:[s]})}
else{e.Error('MutationObserver not supported')};t.__hostedfield.monitor.attribute[s]=r};if(n===!0||n===!1){t.__hostedfield.monitor.attribute[s].enabled=n}
else{t.__hostedfield.monitor.attribute[s].callbacks.add(n)}}catch(o){0&&console.error('Can not monitor attribute \''+s+'\'',t,o)};return!0},_monitorMethodCall:function(t,s,n){try{i._monitorPrepare(t);if(!t.__hostedfield.monitor.method[s]){var r={enabled:!0,method:t.method,callbacks:e.Callbacks()};if(!t[s]||typeof t[s]!=='function'){e.error('Element has no \''+s+'\' method to monitor');return!1};t.method=function(){var e=r.method.apply(this,arguments);if(r.enabled){r.callbacks.fireWith(t,[s,arguments,e])};return e};t.__hostedfield.monitor.method[s]=r};if(n===!0||n===!1){t.__hostedfield.monitor.method[s].enabled=n}
else{t.__hostedfield.monitor.method[s].callbacks.add(n)}}catch(o){0&&console.error('Can not monitor method \''+s+'\'',t,o)};return!0},_extend:function(t){if(!t.hasOwnProperty('namespace')){e.error('Prototype must include a namespace property')};var s=(t.hasOwnProperty('constructor')?t.constructor:function(e,t){i.call(this,e,t)});s.prototype=a({},i.prototype,t);return s},_bridge:function(t,n,o){var a=n,r=(o.length>0&&typeof o[0]==='string'?Array.prototype.shift.call(o):null);n.each(function(){if(e(this).hasClass('hostedfield-wrapper')){var n=i._getElementInstance(e(this).children('.hostedfield-element'),t)}
else{var n=i._getElementInstance(this,t)};if(r!==null){if(r==='instance'){a=n;return!1};if(!n){return e.error('Cannot call method \''+r+'\' on \''+t.prototype.namespace+'\' prior to initialization')};var l;if(r==='options'){if(o.length){var d=e.extend.apply(null,[{}].concat(Array.prototype.slice.call(o)));n._setOptions(d);if(n._init){n._init()}}
else{l=n._options}}
else{if(!n[r]){return e.error('No such method \''+r+'\' on '+t.prototype.namespace+'\'')};l=n[r].apply(n,o)};if(l!==n&&l!==s){a=(l&&l.jquery?a.pushStack(l.get()):l);return!1}}
else{var d=(o.length?e.extend.apply(null,[{}].concat(Array.prototype.slice.call(o))):null);if(n){n._setOptions(d||{});if(n._init){n._init()}}
else{i._setElementInstance(this,new t(this,d))}}});return a}});function d(e,t){this._style=new r();this.fields=[];i.call(this,e,t)};i._extend({constructor:d,namespace:'hostedform',defaultOptions:{locale:s,merchantID:s,stylesheet:'link.hostedfield[rel=stylesheet], style.hostedfield',tokenise:'INPUT.hostedfield-tokenise:not(:disabled),INPUT[data-hostedfield-tokenise]:not(:disabled),INPUT[name^="paymentToken["]:not(:disabled)',fields:s,autoSetup:!0,autoSubmit:!0,classes:{}},setMerchantID:function(e){this._options.merchantID=e},setStylesheet:function(t){this._style.clear();if(t){this._style.addStylesheet(e(t),!0)};this.fields.forEach(function(e){e.refresh()});this._options.stylesheet=t},addField:function(i){if(!(i instanceof t.hostedFields.classes.Field)){e.error('Can not add field to form as it is not an instance of the correct type')};if(!i._$element[0].form){e.error('Hosted field has no associated form')}
else if(i._$element[0].form!==this._$element[0]){e.error('Hosted field is for a different form')};this.fields.push(i);return!0},delField:function(e){for(var t=0,i=this.fields.length;t<i;t++){if(this.fields[t]===e){this.fields.splice(t,1);return!0}};return!1},reset:function(){this.submitted=!1;this._resetTokenisedFields();this._postMessage('resetForm')},validate:function(e){var t=this;this.submitted=!!e;return this._postMessage('validateForm',{'submitting':e},!0).then(function(e){return t._$element[0].checkValidity()},function(){return new Error('Failed to validate form')})},getInvalidElements:function(){var e=[];this._$element.find(':invalid').each(function(s,n){e.push({element:n,message:n.validationMessage||'Invalid value',label:i.findLabel(n).first().text(),field:i._getElementInstance(n,t.hostedFields.classes.Field),})});return(e.length?e:null)},getValidationErrors:function(){var t=this.getInvalidElements();if(!t){return null};var i={};for(var e=0,s=t.length;e<s;e++){var n=t[e].label||t[e].element.name||t[e].element.id||e;i[n]=(t[e].element.validationMessage||'Invalid value')};return i},getPaymentDetails:function(t,i){var n=this,d=e(this._$element[0].elements);if(!t){t={}};if(d.filter('.hostedfield-element:enabled').length===0){return e.Deferred().reject(new Error('There are no hosted fields enabled'))};if(this._options.tokenise){this._resetTokenisedFields();var a=function(i,n){d.filter(i).each(function(){var o=e(this);if(this.disabled){return};var r,i=(n||o.data('hostedfield-tokenise')||this.name);if(i&&i.indexOf('paymentToken')===0){var r=i.match(/^paymentToken\[(.+)\]$/);i=(r?r[1]:mull)};if(!i){0&&console.error('Form.getPaymentDetails() - cannot get token field name for element: ',this)}
else{if(t[i]!==s){0&&console.warn('Form.getPaymentDetails() - duplicate value for token field \'',i,'\' ignored on element: ',this)}
else{t[i]=o.val()};o.addClass('hf-tokenised').prop('disabled',!0)}})};try{if(typeof this._options.tokenise==='string'){a(this._options.tokenise,null)}
else if(e.isArray(this._options.tokenise)){var l=e();this._options.tokenise.foreach(function(e){l.add(e)});a(l,null)}
else if(e.isPlainObject(this._options.tokenise)){for(var r in this._options.tokenise){if(this._options.tokenise.hasOwnProperty(r)){a(r,this._options.tokenise[r])}}}}catch(o){this._resetTokenisedFields();0&&console.error('getPaymentDetails() - exception tokenising additional fields: ',o);return e.Deferred().reject(new Error('Unable to tokenise the additional fields'))}};return e.when(i?this.validate(!0):!0).then(function(i){if(i){var s={merchantId:n._options.merchantID,tokenData:t};return n._postMessage('getPaymentDetails',s,!0).then(function(t){if(!t.success){n._resetTokenisedFields();if(t.errors){var i,o,s;for(i in t.errors){if((o=n._$element[0].elements[i])){s=e(o);if(!s.hostedfield('instance')){if(t.errors[i]===!0){t.errors[i]=(s.data('validation-message')||t.defaultErrorMessage)};o.setCustomValidity(t.errors[i]);e(el).trigger('invalid')}}}};t.invalid=n.getValidationErrors()};return t},function(e){n._resetTokenisedFields();return e})}
else{n._resetTokenisedFields();return{success:!1,invalid:n.getValidationErrors(),message:'Please correct the invalid fields'}}},function(e){n._resetTokenisedFields();return new Error('There was a problem validating the form: '+e)})},addPaymentToken:function(t){if(this._$element[0].elements['paymentToken']){this._$element[0].elements['paymentToken'].value=t}
else{this._$element.append(e('<input type="hidden" name="paymentToken" value="" />').val(t))}},autoSetup:function(){var d=this;try{var l=e(d._$element[0].elements).filter('INPUT');if(this._options.fields){var r,n,a,o;for(r in this._options.fields){n=this._options.fields[r];if(n.selector){if(!(o=l.filter(n.selector))||o.length!==1){e.error('Cannot find form input field: '+n.selector)};if(!(a=i._getElementInstance(o[0],t.hostedFields.classes.Field))){n.type=r;o.hostedField(n)}}}};l.filter('INPUT[type^="hostedfield:"],:attrNamePrefixed("data-hostedfield")').each(function(){if(!(a=i._getElementInstance(this,t.hostedFields.classes.Field))){e(this).hostedField()}})}catch(s){0&&console.error('Unable to create hostedfields: ',s);e.error('Unable to create hostedfields: '+s)}},autoSubmit:function(e){var i=this,t={success:!0,message:null,invalid:null,submitting:!0,};try{e.preventDefault();if(!i._trigger('hostedform:presubmit',t)){return!1};var o=function(){t.success=!1;t.message=null;t.invalid=i.getValidationErrors();t.submitting=!0;if(i._trigger('hostedform:invalid',t)){i._$element[0].reportValidity()};return!1},n=function(e){t.success=!1;t.message=e;t.invalid=i.getValidationErrors();t.submitting=!0;if(i._trigger('hostedform:error',t)){alert(t.message)};return!1};this.validate(!0).then(function(e){try{if(e!==!0){return o()};t.success=!0;t.message=null;t.invalid=null;t.submitting=!0;if(!i._trigger('hostedform:valid',t)){return!1};if(!i._$element[0].checkValidity()){return o()};i.getPaymentDetails().then(function(e){try{if(!e.success){return n(e.message)};i.addPaymentToken(e.paymentToken);t.success=!0;t.message=null;t.paymentToken=e.paymentToken;t.submitting=!0;if(!i._trigger('hostedform:submit',t)){return!1};i._$element.off('submit.hostedform');i._$element.submit()}catch(s){0&&console.error('autoSubmit() - exception submitting form: ',s);return n(s)}},function(e){0&&console.error('autoSubmit() - failure requesting payment token: ',e);return n(e)})}catch(s){0&&console.error('autoSubmit() - exception getting payment token: ',s);return n(s)}},function(e){0&&console.error('autoSubmit() - failure validating the form: ',e);return n(e)})}catch(s){0&&console.error('autoSubmit() - exception: ',s);return n(s)}},defaultFieldOptions:function(t){var i=null;if(this._options.fields&&(this._options.fields.any||this._options.fields[t])){i=e.extend({},this._options.fields.any,this._options.fields[t])};return i},forceSubmit:function(){e('<input type="submit">').appendTo(this._$element).click().remove()},_allowedElementTypes:['FORM'],_create:function(){if(!this._options.merchantID&&!(this._options.merchantID=this._$element.find('input[name=merchantID]').val())){e.error('MerchantID required')};if(this._options.fields){for(var t in this._options.fields){if(t==='any'){if(this._options.fields[t].selector){e.error('Form options.fields[\'any\'] cannot have a selector value.')}}
else if(this._options.fields[t].type&&this._options.fields[t].type!==t){e.error('Form options.fields[\''+t+'\'].type === \''+this._options.fields[t].type+'\' when it should be either undefined or the same type.')}}};if(e('#--hostedfield-styles--').length===0){e('head').prepend(e('<style id="--hostedfield-styles--">	.hostedfield-wrapper {		display: inline-block;		cursor: text;		letter-spacing: normal;		word-spacing: normal;		text-transform: none;		text-indent: 0px;		text-shadow: none;		display: inline-block;		text-align: start;		background-color: #ffff;		cursor: text;		margin: 0em;		font: 400 13.3333px Arial;		padding: 1px 0px;		border-width: 2px;		border-style: inset;		border-color: initial;		border-image: initial;		overflow: hidden !important;	}	.hostedfield-wrapper.hf-disabled {		cursor: default;	}	.hostedfield-wrapper > div {		position: relative;	}	.hostedfield-frame {		display: table-cell !important;		border: none !important;		margin: 0px !important;		padding: 0px !important;		width: 100% !important;		height: 100% !important;		overflow: hidden !important;	}	.hostedfield-input {		border: none !important;		display: block !important;		position: absolute !important;		height: 1px !important;		bottom: 0px;		left: 0px !important;		padding: 0px !important;		margin: 0px !important;		width: 100% !important;		opacity: 0 !important;		background: transparent !important;		pointer-events: none !important;		font-size: 16px !important;	}	/* Emulate webkit auto fill style */	.hostedfield.hf-autofill { 		background-color: rgb(250, 255, 189) !important; 		background-image: none !important; 		color: rgb(0, 0, 0) !important; 	}<style>'))};if(!this._options.locale){this._options.locale=this._$element.closest('[lang]').attr('lang')};if(this._options.locale){this._$element.attr('lang',this._options.locale)};if(this._options.stylesheet){this._style.addStylesheet(e(this._options.stylesheet),!0)};if(this._options.autoSetup){this.autoSetup()};if(this._options.autoSubmit||(this._options.autoSubmit===s&&this._options.autoSetup)){this._$element.on('submit.hostedform',this.autoSubmit.bind(this))};this._$element.on('reset.hostedform',this.reset.bind(this));return this},_resetTokenisedFields:function(){if(this._options.tokenise){e(this._$element[0].elements).filter('.hf-tokenised').prop('disabled',!1)}},_destroy:function(){this._resetTokenisedFields();while(this.fields.length){this.fields[0].destroy()};if(e(':data("hostedform")').length===0){e('#--hostedfield-styles--').remove()}},_setOptions:function(t){var i;for(i in t){var s=t[i];switch(i){case'locale':e.Error('The field\'s \''+i+'\' option cannot be changed');break;case'merchantID':this.setMerchantID(s);break;case'stylesheet':this.setStylesheet(s);break}}},_postMessage:function(e,t,i){var t=t||{};t.formId=this._objId;t.fields=[];for(var s=0,n=this.fields.length;s<n;s++){t.fields[s]=this.fields[s]._objId};return this.fields[0]._postMessage(e,t,i)},_receiveMessage:function(e){}});function o(e,t){this._type=null;this._style=new r();this._$iframe=null;this._$wrapper=null;this._$styled=null;this._$label=null;this._state={isReady:!1,isValid:s,isEmpty:s,isComplete:s,isDisabled:s,isRequired:s,isReadOnly:s,},this._settingCustomValidity=!1;i.call(this,e,t)};i._extend({constructor:o,namespace:'hostedfield',defaultOptions:{type:s,locale:s,value:s,style:s,stylesheet:s,placeholder:s,submitOnEnter:!0,disabled:s,required:s,readOnly:s,validity:s,noIcon:s,classes:{}},setValue:function(e){if(this._state.isReady){this._options.value=String(e).trim();this._toggleStyling('empty',(this._options.value==''));this._silentPropertyChange('value',(this._options.value==''?'':'*'));this._postMessage('setValue',{value:this._options.value})}},getValue:function(){return this._options.value},setStyle:function(e){if(this._state.isReady){this._options.style=String(e).trim();this._$wrapper.attr('style',this._options.style);this._postMessage('setStyle',{style:this._buildStyle()})}},getStyle:function(){return this._options.style},setStylesheet:function(e){if(this._state.isReady){this._options.stylesheet=e;this._postMessage('setStylesheet',{stylesheet:this._buildStylesheet()})}},getStylesheet:function(){return this._options.stylesheet},setPlaceholder:function(e){if(this._state.isReady){this._postMessage('setPlaceholder',{placeholder:this._options.placeholder=String(e).trim()})}},getPlaceholder:function(){return this._options.placeholder},setDisabled:function(e){if(this._state.isReady){this._postMessage('setDisabled',{disabled:this._options.disabled=!!e})}},getDisabled:function(){return this._options.disabled},setRequired:function(e){if(this._state.isReady){this._postMessage('setRequired',{required:this._options.required=!!e})}},getRequired:function(){return this._options.required},setReadOnly:function(e){if(this._state.isReady){this._postMessage('setReadOnly',{readOnly:this._options.readOnly=!!e})}},getReadOnly:function(){return this._options.readOnly},setFocused:function(e){if(this._state.isReady){this._postMessage('setFocused',{focused:!!e})}},setValidity:function(e){if(this._state.isReady){this._postMessage('setValidity',{validity:e})}},getValidity:function(){return this._$input[0].validationMessage},validate:function(){if(this._state.isReady){return this._postMessage('validateField',null,!0)}
else{e.when(!0)}},isEmpty:function(){return this._state.isEmpty||!0},isComplete:function(){return this._state.isComplete||!1},getState:function(){return this._state},reset:function(){if(this._state.isReady){this._postMessage('resetField')}},_allowedElementTypes:['INPUT'],_create:function(){var r=this._$element[0];this._initialAttributes={};for(var n in{style:null,placeholder:null,disabled:null,readOnly:null,required:null,value:null,autocomplete:null,'aria-invalid':null,'lang':null}){this._initialAttributes[n]=this._$element.attr(n)};this._$label=i.findLabel(r);if(!r.form){e.error('All hostedfield instances must be associated with a FORM')};this._type=this._determineType();if(!(this.form=i._getElementInstance(r.form,t.hostedFields.classes.Form))){this.form=new t.hostedFields.classes.Form(r.form,{autoSetup:!1,autoSubmit:!1})};var o=this.form.defaultFieldOptions(this._type);if(o){if(o.selector&&!this._$element.is(o.selector)){e.error('Form field default options for field type "'+this._type+'" contains a selector that doesn\'t match the element on which the field is created: '+o.selector)};this._options=e.extend({},o,this._options)};if(this._options.style===s){this._options.style=this._$element.attr('style')};for(var n in{placeholder:'',disabled:!1,readOnly:!1,required:!1,value:''}){if(this._options[n]===s){this._options[n]=this._$element.prop(n)}};if(this._options.value==='*'){this._options.value=this._$element.prop('defaultValue')};if(this._options.label==null){this._options.label=this._$label.first().text()};if(!this._options.locale){if(!(this._options.locale=this._$element.closest('[lang]').attr('lang'))){this._options.locale=this.form._options.locale}};if(this._options.locale){this._$element.attr('lang',this._options.locale)};this._options.classes=e.extend({},this.form._options.classes,this._options.classes);this._initialyDisabled=this._options.disabled;this._createMarkup();this._bindEvents();this.form.addField(this);return this},_destroy:function(){if(this.form){this.form.delField(this)};if(this._$wrapper){this._$iframe.remove();this._$input.remove();this._$element.unwrap().unwrap();this._$element.show()};for(var e in this._initialAttributes){var t=this._initialAttributes[e];if(t===s){this._$element.removeAttr(e)}
else{this._$element.attr(e,t)}}},_determineType:function(){var t=null;if(this._options.type){t=this._options.type};var i;if((i=this._$element.attr('type'))&&(i.length>12)&&(i.indexOf('hostedfield:')===0)){i=i.split(':');if(t&&t!==i[1]){e.error('Attribute type of "hostedfield:'+i[1]+'" conflicts with options type of "'+t+'"')};t=i[1]};var s=['cardDetails','cardNumber','cardStartDate','cardExpiryDate','cardCVV','cardIssueNumber'];if(!t||!s.indexOf(t)<0){e.error('All hostedfield instances must be one of the following types: '+s.join(', '))};return t},_getIframeUrl:function(){var e=l.substring(0,l.lastIndexOf('/'))+'/private/hostedfields.php';return e+'?type='+encodeURIComponent(this._type)+'&formId='+encodeURIComponent(this.form._objId)+'&fieldId='+encodeURIComponent(this._objId)+'&domId='+encodeURIComponent(this._domId)+'&locale='+encodeURIComponent((this._options.locale||'en'))+'&min='+(l.indexOf('.min.js')!==-1?1:0)},_createMarkup:function(){var n=this._$element.height();this._$wrapper=e('<div class="hostedfield hostedfield-wrapper" disabled="disabled">  <div>    <iframe id="hostedfield-frame-'+this._objId+'" name="hostedfield-frame-'+this._objId+'"class="hostedfield-frame"  src="'+this._getIframeUrl()+'" frameBorder="0" transparent="yes" scrolling="no" seamless="seamless" style="display: table-cell !important; border: none !important; margin: 0px !important; padding: 0px !important; width: 100% !important; height: '+n+'px !important; overflow: hidden !important;" title="Secure input"></iframe>    <input id="hostedfield-input-'+this._objId+'" tabindex="-1" class="hostedfield-input" type="text" />  </div></div>');this._$iframe=this._$wrapper.find('iframe');this._$input=this._$wrapper.find('input');var s=this._$element[0],o=this._$wrapper[0];for(var i=0,r=s.attributes.length;i<r;i++){var t=s.attributes.item(i);if(t!=='id'){o.setAttribute(t.nodeName,t.nodeValue)}};this._$element.hide();this._$element.attr('aria-hidden',!0);this._$wrapper.prop('id',this._$element.prop('id')+'-hostedfield');this._$wrapper.addClass('hostedfield hostedfield-wrapper');this._$element.addClass('hostedfield-element');this._$element.attr('autocomplete','off');this._$element.val(this._options.value?'*':'');this._$input.val(this._options.value?'*':'');this._$styled=e(this._$wrapper).add(this._$element);this._toggleStyling('readonly',this._options.readOnly);this._toggleStyling('readwrite',!this._options.readOnly);this._toggleStyling('required',this._options.required);this._toggleStyling('optional',!this._options.required);this._toggleStyling('empty',(this._options.value==''));this._addStyling('disabled');this._$wrapper.attr('disabled','disabled');this._$element.prop('disabled',!0);this._$element.before(this._$wrapper);this._$iframe.before(this._$element);var a=parseInt(this._$wrapper.css('border-bottom-width'))+parseInt(this._$wrapper.css('padding-bottom'));this._$input.css('bottom',-a);this._$iframe.on('load',this._loaded.bind(this));return this},_sizing:function(e){var n=['box-sizing','height','width','padding-top','padding-right','padding-bottom','padding-left','border-top-width','border-right-width','border-bottom-width','border-left-width','margin-top','margin-right','margin-bottom','margin-left'];for(var t=0,r=n.length;t<r;t++){var i=n[t],s=this._$element.css(i),o=this._$wrapper.css(i);if(s!==o){this._$wrapper.css(i,s)}}},_loaded:function(t){var i=e.extend({},this._options);delete i.selector;delete i.stylesheet;delete i.style;this._postMessage('initialise',{formId:this.form._objId,fieldId:this._objId,merchantId:this.form._options.merchantID,domId:this._domId,type:this._type,stylesheet:this._buildStylesheet(),style:this._buildStyle(),options:i,},!0).then(this._initialised.bind(this))},_initialised:function(){this._state.isReady=!0;this.setDisabled(this._initialyDisabled);this._trigger(this.namespace+':ready',this._state)},_buildStylesheet:function(){this._style.clear();this._style.add(this.form._style);if(this._options.stylesheet){this._style.addStylesheet(e(this._options.stylesheet),!0)};return this._style.rules},_buildStyle:function(){if(!this._options.style||this._options.style==''){return null};var e=new r();e.addCssText('.hostedfield { '+this._options.style+'}');return(e.rules.length?e.rules[0][1]:null)},_bindEvents:function(){var e=this;this._$label.add(this._$wrapper).on('click',function(){e._postMessage('setFocused',{focused:!0})});var t={'mouseenter.hostedfield':function(t){if(!e._options.disabled){e._addStyling('hover');e._postMessage('mouseenter')};t.stopPropagation()},'mouseleave.hostedfield':function(t){if(!e._options.disabled){e._removeStyling('hover');e._postMessage('mouseleave');e._$element.triggerHandler('mouseleave')};t.stopPropagation()},'mouseover.hostedfield':function(t,i){if(!e._options.disabled&&!i){if(e._trigger(e.namespace+':mouseover',e._state)&&e._options.nativeEvents){e._trigger('mouseover',e._state)}};t.stopPropagation()},'mouseout.hostedfield':function(t,i){if(!e._options.disabled&&!i){if(e._trigger(e.namespace+':mouseout',e._state)&&e._options.nativeEvents){e._trigger('mouseout',e._state)}};t.stopPropagation()},};this._$wrapper.on(t);for(var i in{disabled:!0,required:!0,readOnly:!0,placeholder:!0,value:!0}){this._monitorPropertyChange(i,function(t,i,s){switch(t){case'disabled':e.setDisabled(s);break;case'required':e.setRequired(s);break;case'readOnly':e.setReadOnly(s);break;case'placeholder':e.setPlaceholder(s);break;case'value':e.setValue(s);break}})};for(var s in{style:0}){this._monitorAttributeChange(s,function(t,i,s){switch(t){case'style':e.setStyle(s);break}})};for(var n in{focus:!0,blur:!0,setCustomValidity:!0,checkValidity:!0}){this._monitorMethodCall(n,function(t,i,s){switch(t){case'focus':e.setFocused(!0);break;case'blur':e.setFocused(!1);break;case'setCustomValidity':e.setValidity(i[1]);break;case'checkValidity':e.validate();break}})};var t={'invalid.hostedfield valid.hostedfield':function(t,i){if(!t.isHostedFields&&!e._settingCustomValidity&&!i){0&&console.trace();e.validate()};return!1},'focus.hostedfield blur.hostedfield':function(t,i){if(!t.isHostedFields){e.setFocused(t.type==='focus')};t.preventDefault();return!1}};this._$element.on(t);this._$input.on('focus',function(){return!1})},_setOptions:function(t){var s;for(s in t){var i=t[s];switch(s){case'type':case'locale':e.Error('The field\'s \''+s+'\' option cannot be changed');break;case'disabled':this.setDisabled(i);break;case'readOnly':this.setReadOnly(i);break;case'required':this.setRequired(i);break;case'validity':this.setValidity(i);break;case'placeholder':this.setPlaceholder(i);break;case'style':this.setStyle(i);break;case'stylesheet':this.setStylesheet(i);break}}},_cn:function(e){return'hf-'+e+(this._options.classes[e]?' '+this._options.classes[e]:'')},_addStyling:function(e){this._$styled.addClass(this._cn(e))},_removeStyling:function(e){this._$styled.removeClass(this._cn(e))},_toggleStyling:function(e,t){this._$styled.toggleClass(this._cn(e),t)},_switchStyling:function(e,t){this._removeStyling(e);this._addStyling(t)},_onDisabled:function(e){this._switchStyling('enabled','disabled');this._$wrapper.attr('disabled','disabled');this._silentPropertyChange('disabled',!0);this._removeStyling('hover');this._removeStyling('focus');this._state.isDisabled=!0;this._options.disabled=!0},_onEnabled:function(e){this._switchStyling('disabled','enabled');this._$wrapper.removeAttr('disabled');this._silentPropertyChange('disabled',!1);this._state.isDisabled=!1;this._options.disabled=!1},_onReadOnly:function(e){this._switchStyling('readwrite','readonly');this._$wrapper.attr('readonly','readonly');this._silentPropertyChange('readOnly',!0);this._state.isReadOnly=!0;this._options.readOnly=!0},_onReadWrite:function(e){this._switchStyling('readonly','readwrite');this._$wrapper.removeAttr('readonly');this._silentPropertyChange('readOnly',!1);this._state.isReadOnly=!1;this._options.readOnly=!1},_onRequired:function(e){this._switchStyling('optional','required');this._$wrapper.attr('required','required');this._$wrapper.attr('aria-required',!0);this._silentPropertyChange('required',!0);this._state.isRequired=!0;this._options.required=!0},_onOptional:function(e){this._switchStyling('required','optional');this._$wrapper.removeAttr('required');this._$wrapper.removeAttr('aria-required');this._silentPropertyChange('required',!1);this._state.isRequired=!1;this._options.readOnly=!1},_onValid:function(e){this._switchStyling('invalid','valid');this._settingCustomValidity=!0;this._$element.attr('aria-invalid',!1);this._$input.attr('aria-invalid',!1);this._silentMethodCall('setCustomValidity','');this._$input[0].setCustomValidity('');this._settingCustomValidity=!1;this._state.isValid=!0;this._options.invalid=!1},_onInvalid:function(e){this._switchStyling('valid','invalid');this._settingCustomValidity=!0;this._$element.attr('aria-invalid',!0);this._$input.attr('aria-invalid',!0);var t=(e.field.validity||this._$input[0].validationMessage||'Please provide a valid value for this field');this._silentMethodCall('setCustomValidity',t);this._$input[0].setCustomValidity(t);this._settingCustomValidity=!1;this._state.isValid=!1;this._options.invalid=!0},_onUserValid:function(e){this._switchStyling('user-invalid','user-valid')},_onUserInvalid:function(e){this._switchStyling('user-valid','user-invalid')},_onFocus:function(e){this._addStyling('focus')},_onBlur:function(e){this._removeStyling('focus')},_onAutoFill:function(e){this._addStyling('autofill')},_onAutoFillCancel:function(e){this._removeStyling('autofill')},_onMouseEnter:function(e){if(!this._options.disabled){this._addStyling('hover')}},_onMouseLeave:function(e){if(!this._options.disabled){this._removeStyling('hover')}},_postMessage:function(t,i,s){if(s){s=e.Deferred()};if(this._$iframe){var n=i||{};n.messageType=t;n.formId=this.form._objId;n.fieldId=this._objId;if(s){n.postback=o._postbacks.length++;o._postbacks[n.postback]=s};this._$iframe[0].contentWindow.postMessage(n,'*')}
else if(s){s.reject(new Error('No iframe to send message to'))};return(s?s.promise():null)},_receiveMessage:function(t){if(t.data.messageType==='postback'){if(t.data.postback>=0&&o._postbacks[t.data.postback]){var i=o._postbacks[t.data.postback];if(t.data.hasOwnProperty('result')){i.resolve(t.data.result)}
else if(t.data.hasOwnProperty('exception')){0&&console.error('Exception postback received: ',t.data.exception);i.reject(new Error(t.data.exception))}
else{0&&console.error('Invalid postback received: ',i);i.reject(new Error('Invalid message received'))};delete o._postbacks[t.data.postback]}
else{0&&console.error('Unexpected postback message received')};return};switch(t.data.messageType){case'fieldEvent':{var r={change:'_onChange',valid:'_onValid',uservalid:'_onUserValid',invalid:'_onInvalid',userinvalid:'_onUserInvalid',enabled:'_onEnabled',disabled:'_onDisabled',readonly:'_onReadOnly',readwrite:'_onReadWrite',required:'_onRequired',optional:'_onOptional',focus:'_onFocus',blur:'_onBlur',keyup:'_onKeyUp',keydown:'_onKeyDown',keypress:'_onKeyPress',mouseover:'_onMouseOver',mouseout:'_onMouseOut',mouseenter:'_onMouseEnter',mouseleave:'_onMouseLeave',autofill:'_onAutoFill',autofillcancel:'_onAutoFillCancel',};var n=t.data.event.eventType,s=(r[n]?r[n]:null);if(s&&this[s]){this[s](t.data.event)}
else{};this._toggleStyling('empty',t.data.event.field.isEmpty);this._toggleStyling('placeholder-shown',t.data.event.field.isEmpty&&this._options.placeholder!=='');this._toggleStyling('complete',t.data.event.field.isComplete);this._state=t.data.event.field;this._silentPropertyChange('value',t.data.event.field.isEmpty?'':'*');this._$input.val(t.data.event.field.isEmpty?'':'*');if(this._trigger(this.namespace+':'+t.data.event.eventType,this._state)&&this._options.nativeEvents){this._trigger(t.data.event.eventType,this._state)};break};case'submitOnEnter':{this.form.forceSubmit();break};default:{e.error('Unsupported hostedfield message received: '+t.data.messageType)}}}});o._postbacks={length:0};function r(){this.selector_re=/((?:\:(?:focus|hover|enabled|disabled|valid|invalid|user-valid|user-invalid|optional|required|empty|complete|autofill|placeholder-shown|readonly|readwrite|-webkit-autofill))*)((?:(?:\.hf-(?:focus|hover|enabled|disabled|valid|invalid|user-valid|user-invalid|optional|required|empty|complete|autofill|placeholder-shown|readonly|readwrite))|(?:\:-webkit-autofill))*)((?:#[\w-]+-hostedfield)|(?:\.hostedfield))((?:(?:(?:\.hf-|\:)(?:focus|hover|enabled|disabled|valid|invalid|user-valid|user-invalid|optional|required|empty|complete|autofill|placeholder-shown|readonly|readwrite))|(?:\:-webkit-autofill))*)(?:(?:\s+\.hf-icon)|(\:\:(?:-moz-|-webkit-input-|-ms-input-|)?placeholder))?(?=\s*(?:$|,))/g;this.validCSSProperties=['caret-color','color','cursor','direction','fill','filter','font','font-family','font-feature-settings','font-kerning','font-language-override','font-size','font-size-adjust','font-smooth','font-stretch','font-style','font-synthesis','font-variant','font-variant-alternates','font-variant-caps','font-variant-east-asian','font-variant-ligatures','font-variant-numeric','font-variant-position','font-weight','letter-spacing','line-height','stroke','text-align','text-decoration','text-decoration-color','text-decoration-line','text-decoration-style','text-emphasis','text-emphasis-color','text-emphasis-position','text-emphasis-style','text-indent','text-rendering','text-shadow','text-transform','text-underline-position','-moz-osx-font-smoothing','-webkit-font-smoothing','-webkit-text-fill-color'];this.rules=[]};r.prototype={extractSelector:function(e){var t,i=[];while((t=this.selector_re.exec(e))){i.push((t[3]||'')+(t[4]||'')+(t[2]||'')+(t[1]||'')+(t[5]||''))};return(i.length?i.join(','):null)},clear:function(){this.rules=[]},add:function(t){if(!(t instanceof r)){e.error('CSSRules::add() - parameter one must be an instance of another CSSRules object')};this.rules=this.rules.concat(t.rules);return this},addRules:function(e){this.rules=this.rules.concat(e);return this},addCssText:function(e){var s=t.document.implementation.createHTMLDocument(''),i=n.createElement('style');i.textContent=e;s.body.appendChild(i);if(i.sheet&&i.sheet.cssRules){this.addCssRuleList(i.sheet.cssRules)};s.body.removeChild(i);return this},addCssRuleList:function(t,i){var o=/([\w-]):([\w-])/g,n,r=e.isArray(i);for(var s=0,a=t.length;s<a;s++){if(!(n=this.extractSelector(t[s].selectorText))){}
else{if(n.match(o)){n+=', '+n.replace(o,'$1.hf-$2').replace('hf--webkit-autofill','hf-autofill');if(r){i[s]=t[s].selectorText.replace(o,'$1.hf-$2').replace('hf--webkit-autofill','hf-autofill')+', '+t[s].cssText}};this.addCssStyleDeclaration(n,t[s].style)}};return this},addCssStyleDeclaration:function(e,t){var s=[];for(var n=0,r=t.length;n<r;n++){var i=t[n],o=t.getPropertyValue(i);if(this.validCSSProperties.indexOf(i)<0){}
else if(o.match(/url|image/i)){}
else{var a=(e.match(/hf-autofill/)?'important':t.getPropertyPriority(i));s.push([i,o,a]);if(i==='color'&&e.match(/hf-autofill/)){s.push(['-webkit-text-fill-color',t.getPropertyValue(i),''])}}};if(s.length){this.rules.push([e,s])};return this},addStylesheet:function(t,i){if(t instanceof jQuery){t=t.get()};if(!e.isArray(t)){t=[t]};for(var s=0,r=t.length;s<r;s++){if(!t[s].sheet||!t[s].sheet.cssRules){continue};var n=(i?[]:!1);this.addCssRuleList(t[s].sheet.cssRules,n);if(i&&n.length){for(var o in n){t[s].sheet.deleteRule(o);t[s].sheet.insertRule(n[o],o)}}};return this},addComputedStyles:function(e,i,s){this.addCssStyleDeclaration(e,t.getComputedStyle(i,s));return this}};function c(e){if(e.data.fieldId) { i._getInstance(e.data.fieldId,t.hostedFields.classes.Field,!0)._receiveMessage(e)}};t.addEventListener('message',c,!1);t.hostedFields={forms:p,classes:{Form:d,Field:o}};e.fn.hostedForm=function(){return i._bridge(t.hostedFields.classes.Form,this,arguments)};e.fn.hostedField=function(){return i._bridge(t.hostedFields.classes.Field,this,arguments)};e.extend(e.expr[':'],{hostedfield:function(e){return!!i._getElementInstance(e,t.hostedFields.classes.Field)}});function f(e,t){t=t.toLowerCase();for(var i=0,s=e.attributes.length;i<s;i++){if(e.attributes[i].nodeName.toLowerCase().indexOf(t)===0){return!0}};return!1};function h(e,t){var t=t.toLowerCase(),s=suffix.length;for(var i=0,r=e.attributes.length;i<r;i++){var o=e.attributes[i].nodeName.toLowerCase(),n=name.length;if(n>=s&&o.substring(n-s)===t){return!0}}};function u(e,t){var t=sfx.toLowerCase();for(var i=0,s=e.attributes.length;i<s;i++){if(e.attributes[i].nodeName.toLowerCase().indexOf(t)!==-1){return!0}};return!1};e.extend(e.expr[':'],{data:(e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])}),attrNamePrefixed:(e.expr.createPseudo?e.expr.createPseudo(function(e){return function(t){return f(t,e)}}):function(e,t,i){return f(e,i[3])}),attrNameSuffixed:(e.expr.createPseudo?e.expr.createPseudo(function(e){return function(t){return h(t,e)}}):function(e,t,i){return h(e,i[3])}),attrNameContaining:(e.expr.createPseudo?e.expr.createPseudo(function(e){return function(t){return u(t,e)}}):function(e,t,i){return u(e,i[3])})})})(jQuery,window,document);

  // This example demonstrates both automatic and manual form setup
  var automatic_setup = true;
  
  var $form = $('#form');

  // Listen for events on the form to see those sent from the Hosted Payment Fields
  // (For demonstration purposes only)
  $form.on(events);

  if (automatic_setup) {
     ///////////////////////////////////////////////////////////////
     // FORM AUTOMATIC SETUP
     ///////////////////////////////////////////////////////////////

     var opts = {
        // Auto setup the form creating all hosted fields (default)
        autoSetup: true,
     
        // Auto validate, tokenise and submit the form (default)
        autoSubmit: true,
     
        // Optional field configuration (by type)
        fields: {
           any: {
              nativeEvents: true,
           },
           cardNumber: {
              selector: $('#form-card-number'),
              style: 'text-decoration: green wavy underline;',
              stylesheet: $('style.hostedfields, style.card-number')
           }
        }
     };

     try {
        // Create form, automatically creating all child Hosted Payment Fields
        $form.hostedForm(opts);
     } catch(e) {
        showError('Failed to create hosted form: ' + e);
        throw e; // Can't continue with this script
     }

     // Listen for some events from the form thrown by the auto methods
     $form.on({
        // Let jQuery Validator check the form on submission
        'hostedform:presubmit': function (event) {
           console.log('Form submitting');
           return $form.valid();
        },
     
        // Show form is valid
        'hostedform:valid': function (event) {
           console.log('Form valid');
           return true;
        },
     
        // Show any validation errors 
        
        'hostedform:invalid': function (event, details) {
           console.log('Form invalid');
           showFieldErrors(details.invalid);
           return true;
        },
     
        // Show general error
        'hostedform:error': function (event, details) {
           showError(details.message);
           return true;
        }
     });

     // Use jQuery validator to validate the form
     $form.validate();

     // End of form automatic setup

  } else {
     ///////////////////////////////////////////////////////////////
     // FORM MANUAL SETUP
     ///////////////////////////////////////////////////////////////

     try {
        // Create the card number field with custom options
        $('#form-card-number').hostedField({
           nativeEvents: true,
           style: 'text-decoration: green wavy underline;',
           stylesheet: $('style.hostedfields, style.card-number')
        });

        // Create the remaining hosted fields
        $('.form-control-hosted:input', $form).hostedField({nativeEvents: true});

     } catch (e) {
        showError('Failed to create hosted fields: ' + e);
        throw e; // Can't continue with this script
     }

     $form.validate({
        // Get the hosted form widget for the submitted form (Form1 only)
        submitHandler: function () {
           try {
              console.log('getPaymentToken');

              // Check we have some enabled fields to submit
              if ($($form[0].elements).filter(':enabled:not([type="hidden"])').length === 0) {
                 showError('You must enable some fields');
                 return false;
              }

              var hostedform = $form.hostedForm('instance');

              var also = {
                 customerName: $('#form-customer-name').val()
              };
  
              hostedform.getPaymentDetails(also, true).then(

                 // Success validating the form and requesting a payment token
                 function (details) {
                    if (details.success) {
                       $form[0].elements['paymentToken'].value = details.paymentToken;
                       $form[0].submit();
                    } else if (details.invalid) {
                       $form.valid();
                       showFieldErrors(details.invalid); 
                 
                    } else {
                       showError('There was a problem fetching the payment token. Please seek assistance.');
                    }
                 },

                 // Failure either validating the form or requesting the payment details
                 function (e) {
                    showError('There was a problem fetching the payment token. Please seek assistance.');
                 }
              );

           } catch (e) {
              showError('There was a problem fetching the payment token. Please seek assistance.');
           }
        }
     });

     // End of form manual setup

  }

  // Hide errors once all fields are valid
  $('#form :input').on('valid', function () {
     if ($(this.form).find(':invalid').length === 0) {
        hideError($(this.form));
     }
  })

  // Listen for some events on the none Hosted Fields
  $('.form-control-native').on('invalid', bsMarkInvalid);
  $('.form-control-native').on('valid', bsMarkValid);

  // Check we can see the Hosted Fields via their new class
  // (For demonstration purposes only)
  console.log($('.form-control-hosted.hostedfield-element'));

  // Check we can see the Hosted Fields via the psuedo element
  // (For demonstration purposes only)
  console.log($('.form-control:hostedfield'));
  
  
  
  ///////////////////////////////////////////////////////////////////
  // Supporting functions
  ///////////////////////////////////////////////////////////////////
  
  // Display events that are passed from hosted field
  var events = {
     'hostedfield:create.example' : showEvent,
     'hostedfield:destroy.example' : showEvent,
     'hostedfield:ready.example' : showEvent,
     'hostedfield:style.example' : showEvent,
     'hostedfield:placeholder.example' : showEvent,
     'hostedfield:invalid.example invalid.example' : showEvent,
     'hostedfield:userinvalid.example userinvalid.example' : showEvent,
     'hostedfield:valid.example valid.example' : showEvent,
     'hostedfield:uservalid.example uservalid.example' : showEvent,
     'hostedfield:disabled.example disabled.example' : showEvent,
     'hostedfield:enabled.example enabled.example' : showEvent,
     'hostedfield:required.example required.example' : showEvent,
     'hostedfield:optional.example optional.example' : showEvent,
     'hostedfield:readonly.example readonly.example' : showEvent,
     'hostedfield:readwrite.example readwrite.example' : showEvent,
     'hostedfield:focus.example focus.example' : showEvent,
     'hostedfield:blur.example blur.example' : showEvent,
     'hostedfield:mouseenter.example mouseenter.example' : showEvent,
     'hostedfield:mouseleave.example mouseleave.example' : showEvent, 
     
     'hostedfield:mouseover.example mouseover.example' : showEvent,
     'hostedfield:mouseout.example mouseout.example' : showEvent,
     'hostedfield:mousemove.example mousemove.example' : showEvent,
     'hostedfield:keydown.example keydown.example' : showEvent,
     'hostedfield:keypress.example keypress.example' : showEvent,
     'hostedfield:keyup.example keyup.example' : showEvent,
     'hostedfield:change.example change.example' : showEvent,
     'hostedfield:input.example input.example' : showEvent,
     
     'hostedfield:invalid.example invalid.example' : bsMarkInvalid,
     'hostedfield:valid.example valid.example' : bsMarkValid,
     'hostedfield:valid.example valid.example' : hideError,
  };
  
  function isInvalid(element) {
     return !element[0].checkValidity();
  }
  
  function showError(msg) {
     $('#error-info').html(msg).show();
  }
  
  function hideError($form, msg) {
     $('#error-info', $form).hide();
  }
  
  function showFieldErrors(errors) {
     var msg = '<h5>Error</h5><p>The following fields are invalid:</p><ul>';
     for (var p in errors) {
        msg += '<li><b>' + p + ':</b> ' + errors[p] + '</li>';
     }
     msg += '</ul>'
     showError(msg);
  }
  
  function bsMarkInvalid(e) {
     var element = (e instanceof $.Event ? this : e);
     $(element).closest('.form-group').addClass('has-error');
  }
  
  function bsMarkValid(e) {
     var element = (e instanceof $.Event ? this : e);
     $(element).closest('.form-group').removeClass('has-error');
  }
  
  function showEvent(event) {
     console.log(event);
     console.log('Field ' + event.type + ' event: ', this, arguments);
  }
  
  jQuery.validator.setDefaults({
     ignore: [],
     rules: {
        'customer-name': {
           checkValidity: true,
           required: false
        },
        'card-details': {
           checkValidity: true,
           required: false
        },
        'card-number': {
           checkValidity: true,
           required: false
        },
        'card-expiry-date': {
           checkValidity: true, 
        
           required: false
        },
        'card-start-date': {
           checkValidity: true,
           required: false
        },
        'card-issue-number': {
           checkValidity: true,
           required: false
        },
        'card-cvv': {
           checkValidity: true,
           required: false
        }
     },
     keyup: null, // Don\'t validate on keyup
     showErrors: function (errorMap, errorList) {
        if (errorList && errorList.length) {
           var errors = {};
           for (var i = 0, max_i = errorList.length; i < max_i; i++ ) {
              var label = $('label[for="' + errorList[i].element.id + '"]:not(".error")').text();
              errors[label] = errorList[i].message;
           }
           showFieldErrors(errors);
        }
        this.defaultShowErrors(errorMap, errorList);
     },
     highlight: bsMarkInvalid,
     unhighlight: bsMarkValid,
     errorPlacement: function (error, element) {
        $(element).closest('.form-control:not(".hostedfield-element")').after(error);
     }
  });
  
  $.validator.addMethod('checkValidity',
     function (value, element, params, message) {
        element.checkValidity();
        var valid = (element.validationMessage === '');
        $(element).attr('aria-invalid', !valid);
        return valid;
     },
     function (params, element) {
        return element.validationMessage;
     }
  );

}