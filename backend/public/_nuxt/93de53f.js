(window.webpackJsonp=window.webpackJsonp||[]).push([[30,14],{436:function(e,t,r){"use strict";r.r(t);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(5),o=r(11);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=c,m=r(16),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.errorData?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[e._v(e._s(e.$t("error.feo")))]),e._v(" "),e._l(e.errorData,(function(t,n){return r("li",{key:n},[e._v("\n    "+e._s(t)+"\n  ")])}))],2):e._e()}),[],!1,null,null,null);t.default=component.exports},439:function(e,t,r){"use strict";r(25),r(37);t.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,passwordLength:6,maxImageSize:1,maxExcelSize:2,maxVideoSize:2,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return e.size>1024*t*1024?this.$t("util.fSize",{size:t}):this.allowedExcelExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.size>1024*t*1024?this.$t("util.fSize",{size:t}):r&&!this.allowedImageExtensions.exec(e.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidEmail:function(e){return this.reg.test(e)},isValidLength:function(e){return e&&e.length>=this.passwordLength||!1}}}},719:function(e,t,r){"use strict";r.r(t);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(1),o=r(5),l=(r(100),r(21),r(148)),c=(r(439),r(48)),d=r(436),m=r(80),v=r(11),f=r(149);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var w={name:"MediaStorageSetting",data:function(){return{gettingData:!1,updating:!1,loading:!1,hasError:!1,result:{mediaStorage:null}}},props:{},mixins:[m.a],components:{Dropdown:f.default,AjaxButton:l.default,Spinner:c.default,ErrorFormatter:d.default},computed:{},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({changeMediaStorage:function(data){this.result.mediaStorage=data.key},fetchingData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.getRequest({api:"mediaStorageFind"});case 4:(data=t.sent)&&(e.result=data),e.loading=!1,t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",e.$nuxt.error(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},updateData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.result.mediaStorage){t.next=15;break}return e.updating=!0,t.prev=2,t.next=5,e.setRequest({params:e.result,api:"mediaStorageAction"});case 5:(data=t.sent)&&(e.result=data,setTimeout((function(){window.location.reload()}),1e3)),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",e.$nuxt.error(t.t0));case 12:e.updating=!1,t.next=16;break;case 15:e.hasError=!0;case 16:case"end":return t.stop()}}),t,null,[[2,9]])})))()}},Object(v.b)("common",["setRequest","getRequest"])),created:function(){},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchingData();case 2:case"end":return t.stop()}}),t)})))()}},x=w,_=r(16),component=Object(_.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{class:{"has-error":e.hasError},on:{submit:function(t){return t.preventDefault(),e.updateData.apply(null,arguments)}}},[e.loading?r("div",{staticClass:"spinner-wrapper"},[r("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):e._e(),e._v(" "),r("div",{staticClass:" "},[r("div",{staticClass:"input-wrapper single-line"},[r("label",[e._v("\n        "+e._s(e.$t("list.ms"))+"\n      ")]),e._v(" "),r("dropdown",{attrs:{options:e.mediaStorages,"selected-key":e.result.mediaStorage},on:{clicked:e.changeMediaStorage}})],1),e._v(" "),r("div",{staticClass:"input-wrapper single-line"},[r("label",[e._v("\n        "+e._s(e.$t("list.tp"))+"\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.thumbPrefix,expression:"result.thumbPrefix"}],attrs:{type:"text",placeholder:"eg. thumb-"},domProps:{value:e.result.thumbPrefix},on:{input:function(t){t.target.composing||e.$set(e.result,"thumbPrefix",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-wrapper single-line"},[r("label",[e._v("\n        "+e._s(e.$t("list.di"))+"\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.defaultImage,expression:"result.defaultImage"}],attrs:{type:"text",placeholder:"eg. default-image.webp"},domProps:{value:e.result.defaultImage},on:{input:function(t){t.target.composing||e.$set(e.result,"defaultImage",t.target.value)}}})]),e._v(" "),"URL"===e.result.mediaStorage?r("div",{staticClass:"input-wrapper single-line"},[r("label",[e._v("\n        "+e._s(e.$t("list.cu"))+"\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.cdnUrl,expression:"result.cdnUrl"}],attrs:{type:"text",placeholder:e.$t("list.cu")},domProps:{value:e.result.cdnUrl},on:{input:function(t){t.target.composing||e.$set(e.result,"cdnUrl",t.target.value)}}})]):"GCS"===e.result.mediaStorage?[r("div",{staticClass:"input-wrapper single-line"},[r("label",[e._v("\n          "+e._s(e.$t("list.cu"))+"\n        ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.cdnUrl,expression:"result.cdnUrl"}],attrs:{type:"text",placeholder:e.$t("list.cu")},domProps:{value:e.result.cdnUrl},on:{input:function(t){t.target.composing||e.$set(e.result,"cdnUrl",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-wrapper single-line"},[r("label",[e._v("\n          "+e._s(e.$t("dataPage.gcpi"))+"\n        ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.gcProjectId,expression:"result.gcProjectId"}],attrs:{type:"password",placeholder:e.$t("dataPage.gcpi")},domProps:{value:e.result.gcProjectId},on:{input:function(t){t.target.composing||e.$set(e.result,"gcProjectId",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-wrapper single-line"},[r("label",[e._v("\n          "+e._s(e.$t("dataPage.gcsb"))+"\n        ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.gcStorageBucket,expression:"result.gcStorageBucket"}],attrs:{type:"password",placeholder:e.$t("dataPage.gcsb")},domProps:{value:e.result.gcStorageBucket},on:{input:function(t){t.target.composing||e.$set(e.result,"gcStorageBucket",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-wrapper single-line"},[r("label",[e._v("\n          "+e._s(e.$t("dataPage.gcspp"))+"\n        ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.result.gcStoragePathPrefix,expression:"result.gcStoragePathPrefix"}],attrs:{type:"password",placeholder:e.$t("dataPage.gcspp")},domProps:{value:e.result.gcStoragePathPrefix},on:{input:function(t){t.target.composing||e.$set(e.result,"gcStoragePathPrefix",t.target.value)}}})])]:e._e()],2),e._v(" "),r("div",{staticClass:"oflow-hidden"},[e.$can("setting","edit")?r("ajax-button",{staticClass:"primary-btn",attrs:{"fetching-data":e.updating}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:r(48).default,Dropdown:r(149).default,AjaxButton:r(148).default})}}]);