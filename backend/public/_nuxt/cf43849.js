(window.webpackJsonp=window.webpackJsonp||[]).push([[37,14],{436:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(5),c=r(11);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(c.c)("ui",["errors"]))},d=l,f=r(16),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.errorData?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(e,n){return r("li",{key:n},[t._v("\n    "+t._s(e)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},442:function(t,e,r){var n=r(12);t.exports=function(t){return n(Set.prototype.values,t)}},452:function(t,e,r){var n=r(4),c=r(273).values;n({target:"Object",stat:!0},{values:function(t){return c(t)}})},603:function(t,e,r){r(623)},604:function(t,e,r){"use strict";r(4)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:r(624)})},605:function(t,e,r){"use strict";r(4)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:r(277)})},606:function(t,e,r){"use strict";var n=r(4),c=r(35),o=r(12),l=r(34),d=r(10),f=r(81),v=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=d(this),r=new(f(e,c("Set")))(e),n=l(r.delete);return v(t,(function(t){o(n,r,t)})),r}})},607:function(t,e,r){"use strict";var n=r(4),c=r(10),o=r(36),l=r(442),d=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=c(this),r=l(e),n=o(t,arguments.length>1?arguments[1]:void 0);return!d(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},608:function(t,e,r){"use strict";var n=r(4),c=r(35),o=r(12),l=r(34),d=r(10),f=r(36),v=r(81),h=r(442),m=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=d(this),r=h(e),n=f(t,arguments.length>1?arguments[1]:void 0),y=new(v(e,c("Set"))),_=l(y.add);return m(r,(function(t){n(t,t,e)&&o(_,y,t)}),{IS_ITERATOR:!0}),y}})},609:function(t,e,r){"use strict";var n=r(4),c=r(10),o=r(36),l=r(442),d=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=c(this),r=l(e),n=o(t,arguments.length>1?arguments[1]:void 0);return d(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},610:function(t,e,r){"use strict";var n=r(4),c=r(35),o=r(12),l=r(34),d=r(10),f=r(81),v=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=d(this),r=new(f(e,c("Set"))),n=l(e.has),h=l(r.add);return v(t,(function(t){o(n,e,t)&&o(h,r,t)})),r}})},611:function(t,e,r){"use strict";var n=r(4),c=r(12),o=r(34),l=r(10),d=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=l(this),r=o(e.has);return!d(t,(function(t,n){if(!0===c(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},612:function(t,e,r){"use strict";var n=r(4),c=r(35),o=r(12),l=r(34),d=r(14),f=r(10),v=r(151),h=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=v(this),r=f(t),n=r.has;return d(n)||(r=new(c("Set"))(t),n=l(r.has)),!h(e,(function(t,e){if(!1===o(n,r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},613:function(t,e,r){"use strict";var n=r(4),c=r(12),o=r(34),l=r(10),d=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=l(this),r=o(e.has);return!d(t,(function(t,n){if(!1===c(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},614:function(t,e,r){"use strict";var n=r(4),c=r(6),o=r(10),l=r(26),d=r(442),f=r(33),v=c([].join),h=[].push;n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=o(this),r=d(e),n=void 0===t?",":l(t),c=[];return f(r,h,{that:c,IS_ITERATOR:!0}),v(c,n)}})},615:function(t,e,r){"use strict";var n=r(4),c=r(35),o=r(36),l=r(12),d=r(34),f=r(10),v=r(81),h=r(442),m=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=f(this),r=h(e),n=o(t,arguments.length>1?arguments[1]:void 0),y=new(v(e,c("Set"))),_=d(y.add);return m(r,(function(t){l(_,y,n(t,t,e))}),{IS_ITERATOR:!0}),y}})},616:function(t,e,r){"use strict";var n=r(4),c=r(2),o=r(34),l=r(10),d=r(442),f=r(33),v=c.TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=l(this),r=d(e),n=arguments.length<2,c=n?void 0:arguments[1];if(o(t),f(r,(function(r){n?(n=!1,c=r):c=t(c,r,r,e)}),{IS_ITERATOR:!0}),n)throw v("Reduce of empty set with no initial value");return c}})},617:function(t,e,r){"use strict";var n=r(4),c=r(10),o=r(36),l=r(442),d=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=c(this),r=l(e),n=o(t,arguments.length>1?arguments[1]:void 0);return d(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},618:function(t,e,r){"use strict";var n=r(4),c=r(35),o=r(12),l=r(34),d=r(10),f=r(81),v=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=d(this),r=new(f(e,c("Set")))(e),n=l(r.delete),h=l(r.add);return v(t,(function(t){o(n,r,t)||o(h,r,t)})),r}})},619:function(t,e,r){"use strict";var n=r(4),c=r(35),o=r(34),l=r(10),d=r(81),f=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=l(this),r=new(d(e,c("Set")))(e);return f(t,o(r.add),{that:r}),r}})},620:function(t,e,r){var content=r(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("61ef1aa8",content,!0,{sourceMap:!1})},623:function(t,e,r){"use strict";r(275)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(276))},624:function(t,e,r){"use strict";var n=r(12),c=r(34),o=r(10);t.exports=function(){for(var t=o(this),e=c(t.add),r=0,l=arguments.length;r<l;r++)n(e,t,arguments[r]);return t}},638:function(t,e,r){"use strict";r(620)},639:function(t,e,r){var n=r(60)(!1);n.push([t.i,".atr-wrapper{border-radius:5px;border:1px solid #ddd;background:#f7f7f5}.atr-wrapper .single-atr{display:flex;flex-wrap:wrap;align-items:center;border-bottom:1px solid #ddd}.atr-wrapper .single-atr label{padding:15px}.atr-wrapper .single-atr .atr-title{width:120px;max-width:120px}.atr-wrapper .single-atr:last-child{border-bottom:none}",""]),t.exports=n},646:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(27),r(28);var n=r(189),c=r(1),o=r(5),l=(r(21),r(271),r(37),r(150),r(52),r(8),r(17),r(53),r(272),r(23),r(187),r(452),r(120),r(40),r(603),r(38),r(604),r(605),r(606),r(607),r(608),r(609),r(610),r(611),r(612),r(613),r(614),r(615),r(616),r(617),r(618),r(619),r(148)),d=r(436),f=r(11);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"ProductInventory",data:function(){return{inventoryOpen:!1,result:[],selectedAttributes:[],selectedAttributeValues:[],selected:{},combinations:[],formSubmitting:!1,redirect:!1,existing:{}}},props:{attributes:{type:Array,default:[]},productPrice:{type:Number,default:0}},mixins:[],components:{AjaxButton:l.default,ErrorFormatter:d.default},computed:h({currencyIcon:function(){var t;return(null===(t=this.setting)||void 0===t?void 0:t.currency_icon)||"$"},productId:function(){return this.$route.params.id}},Object(f.c)("setting",["setting"])),methods:h({redirectingEnable:function(t){this.redirect="save"===t},fetchingData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.getById({id:t.productId,params:{},api:"getInventory"});case 4:t.result=e.sent,t.loading=!1,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",t.$nuxt.error(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},saveInventory:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.redirectingEnable(event.submitter.name),t.formSubmitting=!0,e.prev=2,e.next=5,t.setById({id:t.productId,params:{inventories:t.combinations},api:"setInventory"});case 5:if(!(data=e.sent)){e.next=13;break}return t.result=data,e.next=10,t.mappingData();case 10:t.$router.push({path:"/products".concat(t.redirect?"":"/"+t.productId)}),e.next=14;break;case 13:t.$emit("has-error");case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(2),e.abrupt("return",t.$nuxt.error(e.t0));case 19:t.formSubmitting=!1;case 20:case"end":return e.stop()}}),e,null,[[2,16]])})))()},renderLabel:function(t){return t.map((function(i){return i.title})).join(" + ")},combos:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(r===t.length){var l={id:"",sku:"",price:this.productPrice,quantity:0},d=o.map((function(t){return t.id})).join("-");void 0!==this.existing[d]&&(l={id:this.existing[d].id,sku:this.existing[d].sku,price:this.existing[d].price,quantity:this.existing[d].quantity}),c.push(h(h({},l),{values:o}))}else t[r].forEach((function(l){return e.combos(t,r+1,c,[].concat(Object(n.a)(o),[l]))}));return c},attributeValueChanged:function(t,e){var r,n,c;if(e.target.checked)-1===(null===(r=this.selectedAttributes)||void 0===r?void 0:r.findIndex((function(i){return i===(null==t?void 0:t.attribute_id)})))&&(this.selectedAttributes.push(t.attribute_id),this.selected=h(h({},this.selected),Object(o.a)({},t.attribute_id,[]))),-1===(null===(n=this.selected[t.attribute_id])||void 0===n?void 0:n.findIndex((function(i){return i===t.id})))&&this.selected[t.attribute_id].push(t);else if(this.selected[t.attribute_id]=this.selected[null==t?void 0:t.attribute_id].filter((function(i){return i.id!==t.id})),null===(c=this.selected[t.attribute_id])||void 0===c||!c.length){delete this.selected[t.attribute_id];var l=this.selectedAttributes.findIndex((function(i){return t.attribute_id===i}));this.selectedAttributes.splice(l,1)}this.combinations=this.combos(Object.values(this.selected))},attributeChanged:function(t,e){if(e.target.checked){var r,c=null===(r=this.attributes.find((function(i){return i.id===t.id})))||void 0===r?void 0:r.values;this.selected=h(h({},this.selected),Object(o.a)({},t.id,c));var l=null==c?void 0:c.map((function(i){return i.id}));this.selectedAttributeValues=Object(n.a)(new Set(this.selectedAttributeValues.concat(l)))}else{var d,f=null===(d=this.selected[t.id])||void 0===d?void 0:d.map((function(i){return i.id}));delete this.selected[t.id],this.selectedAttributeValues=this.selectedAttributeValues.filter((function(t){return-1===f.indexOf(t)}))}this.combinations=this.combos(Object.values(this.selected))},mappingData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.result||null===(r=t.result)||void 0===r||!r.length){e.next=11;break}return t.selected={},t.combinations=[],l=[],d=[],e.next=7,null===(c=Object.values(t.result))||void 0===c?void 0:c.forEach((function(i){var e=[];i.inventory_attributes.forEach((function(r){l.push(r.attribute_value.attribute_id),d.push(r.attribute_value.id),e.push(r.attribute_value),void 0===t.selected[r.attribute_value.attribute_id]&&(t.selected=h(h({},t.selected),Object(o.a)({},r.attribute_value.attribute_id,[]))),-1===t.selected[r.attribute_value.attribute_id].findIndex((function(i){return r.attribute_value.id===i.id}))&&t.selected[r.attribute_value.attribute_id].push(r.attribute_value)})),t.existing[e.map((function(t){return t.id})).join("-")]={id:i.id,price:parseFloat(i.price)>0?i.price:t.productPrice,sku:i.sku,quantity:i.quantity},t.combinations.push({id:i.id,sku:i.sku,price:parseFloat(i.price)>0?i.price:t.productPrice,quantity:i.quantity,values:e})}));case 7:t.selectedAttributes=Object(n.a)(new Set(l)),t.selectedAttributeValues=Object(n.a)(new Set(d)),e.next=12;break;case 11:t.combinations=[{price:t.productPrice,quantity:0,sku:"",values:[]}];case 12:case"end":return e.stop()}}),e)})))()}},Object(f.b)("common",["getById","setById"])),beforeCreate:function(){},destroyed:function(){},created:function(){},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchingData();case 2:return e.next=4,t.mappingData();case 4:case"end":return e.stop()}}),e)})))()}},y=m,_=(r(638),r(16)),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"dply-felx gap-15 title ptb-5 b-0"},[r("h5",{},[t._v(t._s(t.$t("prod.pInv")))]),t._v(" "),r("button",{staticClass:"btn-clear dply-felx",on:{click:function(e){e.preventDefault(),t.inventoryOpen=!t.inventoryOpen}}},[r("i",{staticClass:"icon black ignore-click",class:[{"arrow-up":t.inventoryOpen},{"arrow-down":!t.inventoryOpen}]})])]),t._v(" "),t.inventoryOpen?r("div",{staticClass:"form-wrapper attr-inventory b-t"},[r("error-formatter",{attrs:{type:"inventory"}}),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.saveInventory.apply(null,arguments)}}},[t.attributes&&t.attributes.length?r("div",{staticClass:"mb-20 mb-sm-15 atr-wrapper"},t._l(t.attributes,(function(e,n){return r("div",{key:n,staticClass:"single-atr"},[e.values.length?[r("label",{staticClass:"cb atr-title f-1-2 bold"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAttributes,expression:"selectedAttributes"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.selectedAttributes)?t._i(t.selectedAttributes,e.id)>-1:t.selectedAttributes},on:{change:[function(r){var n=t.selectedAttributes,c=r.target,o=!!c.checked;if(Array.isArray(n)){var l=e.id,d=t._i(n,l);c.checked?d<0&&(t.selectedAttributes=n.concat([l])):d>-1&&(t.selectedAttributes=n.slice(0,d).concat(n.slice(d+1)))}else t.selectedAttributes=o},function(r){return t.attributeChanged(e,r)}]}}),t._v(" "),r("span",[t._v(t._s(e.title))])]),t._v(" "),t._l(e.values,(function(e,i){return r("label",{key:i,staticClass:"cb"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAttributeValues,expression:"selectedAttributeValues"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.selectedAttributeValues)?t._i(t.selectedAttributeValues,e.id)>-1:t.selectedAttributeValues},on:{change:[function(r){var n=t.selectedAttributeValues,c=r.target,o=!!c.checked;if(Array.isArray(n)){var l=e.id,d=t._i(n,l);c.checked?d<0&&(t.selectedAttributeValues=n.concat([l])):d>-1&&(t.selectedAttributeValues=n.slice(0,d).concat(n.slice(d+1)))}else t.selectedAttributeValues=o},function(r){return t.attributeValueChanged(e,r)}]}}),t._v(" "),r("span",[t._v(t._s(e.title))])])}))]:t._e()],2)})),0):t._e(),t._v(" "),r("div",{staticClass:"table-wrapper mb-20 mb-sm-15"},[r("table",{staticClass:"mn-w-400x"},[r("tr",{staticClass:"lite-bold"},[r("th",[t._v(t._s(t.$t("list.attr")))]),t._v(" "),r("th",[t._v(t._s(t.$t("title.sku")))]),t._v(" "),r("th",[t._v(t._s(t.$t("brand.price"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),r("th",[t._v(t._s(t.$t("fSale.qty")))])]),t._v(" "),t._l(t.combinations,(function(e,n){return r("tr",{key:n},[r("td",[e.values.length?r("h5",{staticClass:"mx-w-400x"},[t._v(t._s(t.renderLabel(e.values)))]):r("h5",{staticClass:"mx-w-400x"},[t._v(t._s(t.$t("list.aq")))])]),t._v(" "),r("td",{staticClass:"w-120x"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sku,expression:"item.sku"}],attrs:{type:"text",placeholder:t.$t("title.sku")},domProps:{value:e.sku},on:{input:function(r){r.target.composing||t.$set(e,"sku",r.target.value)}}})]),t._v(" "),r("td",{staticClass:"w-120x"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"item.price"}],attrs:{disabled:!e.values.length,type:"number",step:"any",placeholder:t.$t("brand.price")},domProps:{value:e.price},on:{input:function(r){r.target.composing||t.$set(e,"price",r.target.value)}}})]),t._v(" "),r("td",{staticClass:"w-120x"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],attrs:{type:"number",step:"any",placeholder:t.$t("fSale.qty")},domProps:{value:e.quantity},on:{input:function(r){r.target.composing||t.$set(e,"quantity",r.target.value)}}})])])}))],2)]),t._v(" "),t.$can("product","edit")||t.$can("product","create")?r("div",{staticClass:"dply-felx j-right"},[r("ajax-button",{staticClass:"primary-btn mr-10",attrs:{name:"save-edit",text:t.$t("list.svn"),"fetching-data":t.formSubmitting&&!t.redirect}}),t._v(" "),r("ajax-button",{staticClass:"primary-btn",attrs:{name:"save",text:t.$t("setting.sv"),"fetching-data":t.formSubmitting&&t.redirect}})],1):t._e()])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(436).default,AjaxButton:r(148).default})}}]);