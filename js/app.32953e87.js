(function(e){function t(t){for(var o,s,l=t[0],a=t[1],d=t[2],u=0,h=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);c&&c(t);while(h.length)h.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],o=!0,l=1;l<i.length;l++){var a=i[l];0!==n[a]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=i[0]))}return e}var o={},n={app:0},r=[];function s(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=o,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(i,o,function(t){return e[t]}.bind(null,o));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=a;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},2309:function(e,t,i){},"490c":function(e,t,i){"use strict";i("2309")},"7ae3":function(e,t,i){},"920c":function(e,t,i){"use strict";i("ba0e")},"95a6":function(e,t,i){},9645:function(e,t,i){"use strict";i("a339")},a339:function(e,t,i){},ba0e:function(e,t,i){},cd49:function(e,t,i){"use strict";i.r(t);var o=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-navigation-drawer",{attrs:{absolute:"",width:"360"},on:{transitionend:function(t){!e.drawer&&(e.drawerSwitch=!0)}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("v-toolbar",{attrs:{color:"primary"}},[i("v-toolbar-title",[e._v("Live2D Viewer")]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(t){e.creation.dialog=!0}}},[i("v-icon",[e._v("mdi-plus")])],1),i("v-btn",{attrs:{icon:""},on:{click:function(t){return e.showUI(!1)}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-divider"),i("ModelEditor",{attrs:{id:e.selectedModelID}})],1),i("v-main",[i("v-container",{staticClass:"pa-0 fill-height flex-column",attrs:{fluid:""}},[i("v-spacer"),i("ModelList",{attrs:{show:e.modelList.visible},model:{value:e.selectedModelID,callback:function(t){e.selectedModelID=t},expression:"selectedModelID"}})],1),i("ModelCreation",{on:{create:function(t){e.selectedModelID=t}},model:{value:e.creation.dialog,callback:function(t){e.$set(e.creation,"dialog",t)},expression:"creation.dialog"}})],1),i("v-fab-transition",[i("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.drawerSwitch,expression:"drawerSwitch"}],attrs:{fab:"",top:"",left:"",absolute:"",dark:"",color:"accent"},on:{click:function(t){return e.showUI(!0)}}},[i("v-icon",[e._v("mdi-plus")])],1)],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-slide-y-reverse-transition",[e.show&&e.models.length?i("v-sheet",{attrs:{width:"100%"}},[i("v-row",{staticClass:"ma-0"},[i("v-item-group",{staticClass:"model-list d-flex pa-2",attrs:{mandatory:"",value:e.selectedIndex},on:{change:e.select}},e._l(e.models,(function(t,o){return i("v-item",{key:t.id,scopedSlots:e._u([{key:"default",fn:function(o){var n=o.active,r=o.toggle;return[i("v-card",{staticClass:"ma-2",attrs:{color:t.error?"#631f1f":n?"blue-grey darken-3":"blue-grey darken-4"},on:{click:r}},[i("v-tooltip",{attrs:{top:"",disabled:!t.error},scopedSlots:e._u([{key:"activator",fn:function(o){var n=o.on,r=o.attrs;return[i("v-img",e._g(e._b({attrs:{contain:"",src:t.thumbnail,width:t.error?void 0:192*t.aspectRatio,height:"192"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t.error?i("v-icon",[e._v("mdi-alert-circle")]):i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},"v-img",r,!1),n),[i("v-card-title",{staticClass:"pa-1 subtitle-1"},[e._v(e._s("#"+t.id+" "+t.name))])],1)]}}],null,!0)},[e._v(" "+e._s(t.error)+" ")])],1)]}}],null,!0)})})),1)],1)],1):e._e()],1)},l=[],a=o["a"].extend({name:"ModelList",props:{value:Number,show:Boolean},data:()=>({models:[]}),computed:{selectedIndex(){return this.models.findIndex(e=>e.id===this.value)}},created(){this.models=this.$live2dApp.models},methods:{select(e){var t,i;const o=null!==(i=null===(t=this.models[e])||void 0===t?void 0:t.id)&&void 0!==i?i:-1;this.$emit("input",o)}}}),d=a,c=(i("d4f2"),i("2877")),u=i("6544"),h=i.n(u),v=i("b0af"),p=i("99d9"),m=i("132d"),f=i("adda"),g=i("d903"),x=i("604c"),b=i("490a"),M=i("0fd9"),w=i("8dd9"),y=i("0789"),_=i("3a2f"),F=Object(c["a"])(d,s,l,!1,null,"517b1072",null),I=F.exports;h()(F,{VCard:v["a"],VCardTitle:p["c"],VIcon:m["a"],VImg:f["a"],VItem:g["a"],VItemGroup:x["b"],VProgressCircular:b["a"],VRow:M["a"],VSheet:w["a"],VSlideYReverseTransition:y["f"],VTooltip:_["a"]});var V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{value:e.value,width:"800"},on:{input:function(t){return e.$emit("input",t)}}},[i("v-card",[i("v-toolbar",{staticClass:"flex-grow-0",attrs:{color:"primary",flat:"",dense:""}},[i("v-toolbar-title",[e._v("Create Model")]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:e.create}},[i("v-icon",[e._v("mdi-checkbox-marked-circle-outline")])],1)],1),i("v-card-text",{staticClass:"pa-8"},[i("v-row",[i("v-text-field",{attrs:{label:"URL","single-line":"",filled:"",messages:e.urlMessages,error:e.urlError},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),i("v-row",[i("v-spacer"),i("v-btn",{attrs:{color:"blue-grey"},on:{click:function(t){e.picker.dialog=!0}}},[e._v(" From source... "),i("v-icon",{attrs:{right:""}},[e._v(" mdi-cloud-search ")])],1)],1)],1)],1),i("ModelPicker",{on:{select:function(t){e.url=t}},model:{value:e.picker.dialog,callback:function(t){e.$set(e.picker,"dialog",t)},expression:"picker.dialog"}})],1)},A=[],k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{value:e.value,width:"80vw"},on:{input:function(t){return e.$emit("input",t)}}},[i("v-card",{staticClass:"d-flex flex-column",attrs:{height:"80vh"}},[i("v-toolbar",{staticClass:"flex-grow-0",attrs:{color:"primary",flat:"",dense:""}},[i("v-toolbar-title",[e._v("Select a Model")]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:e.submit}},[i("v-icon",[e._v("mdi-checkbox-marked-circle-outline")])],1)],1),i("v-row",{staticClass:"content-row flex-grow-1",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"content-col"},[i("v-card-text",[i("v-treeview",{attrs:{activatable:"","return-object":"","load-children":e.fetchModels,active:e.activeFolders,items:e.tree,"item-key":"id","open-on-click":""},on:{"update:active":function(t){t.length&&(e.activeFolders=t)},"update:open":e.folderOpened},scopedSlots:e._u([{key:"prepend",fn:function(t){var o=t.open;return[i("v-icon",[e._v(" "+e._s(o?"mdi-folder-open":"mdi-folder")+" ")])]}}])})],1)],1),i("v-divider",{attrs:{vertical:""}}),i("v-col",{staticClass:"content-col"},[i("v-card-text",[i("v-list-item-group",{model:{value:e.selectedFileIndex,callback:function(t){e.selectedFileIndex=t},expression:"selectedFileIndex"}},e._l(e.activeFolderFiles,(function(t,o){return i("v-list-item",{key:t,attrs:{color:"primary"},nativeOn:{dblclick:function(t){e.selectedFileIndex=o,e.submit()}}},[i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(t))])],1)],1)})),1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-alert",{directives:[{name:"visible",rawName:"v-visible",value:e.alert,expression:"alert"}],staticClass:"mb-0",attrs:{dense:"",text:"",type:"error"}},[e._v(e._s(e.alert))])],1)],1)],1)},C=[],S=i("41c6"),R=i.n(S);let L=0;const O="https://cdn.jsdelivr.net/gh/",j=new Map,T=[{id:L++,name:"Eikanya/Live2d-model",children:[],files:[]}],E={};function $(){return T}function P(e){if(!T.includes(e))return Promise.resolve();if(!j.get(e)){const t=fetch(e.name.toLowerCase().replace("/","")+".json").then(e=>e.json()).then(t=>{e.name=t.models.name,e.children=t.models.children,e.files=t.models.files,D(e,e=>e.id=L++),Object.assign(E,t.settings)});return j.set(e,t),t}return j.get(e)}function D(e,t){if(t(e),e.children)for(const i of e.children)D(i,t)}function U(e,t){const i=B(e);if(i){const e=encodeURI(i+"/"+t);return"https://cdn.jsdelivr.net/gh/"+e}}function B(e){const t=i=>{for(const o of i){if(o===e)return o.name;if(o.children){const e=t(o.children);if(e)return o.name+"/"+e}}};return t(T)}function G(e){if(!e.endsWith("model.json")&&!e.endsWith("model3.json")){if(e.endsWith(".moc")||e.endsWith(".moc3")){if(X(e))return;return"Error: Cannot display a moc file that doesn't belong to any resource repository"}return"Warning: Unknown URL. The model may not be loaded correctly"}}function X(e){if(e.startsWith(O)){let t=e.replace(O,"");return t=decodeURI(t),E[t]}}T.forEach(P);var N=o["a"].extend({name:"ModelPicker",props:{value:Boolean},data:()=>({search:"",tree:$(),openedFolders:[],activeFolders:[],selectedFileIndex:-1,alert:""}),computed:{activeFolderFiles(){return this.activeFolders.length&&this.activeFolders[0].files||[]}},watch:{activeFolders(e,t){const i=0!==R()(e,t).length;i&&(this.selectedFileIndex=-1)},selectedFileIndex(){this.alert=""}},created(){},methods:{async fetchModels(e){var t,i;await P(e),(null===(t=e.files)||void 0===t?void 0:t.length)&&!(null===(i=e.children)||void 0===i?void 0:i.length)&&(e.children=[{id:Math.random(),name:""}])},folderOpened(e){const t=R()(e,this.openedFolders);t.length?(this.activeFolders=t.slice(0),this.openedFolders=e):this.activeFolders=this.tree.slice(0,1)},submit(){if(this.activeFolders.length&&this.selectedFileIndex>=0){const e=U(this.activeFolders[0],this.activeFolderFiles[this.selectedFileIndex]);e&&this.$emit("select",e)}this.$emit("input",!1)},log(...e){console.log(...e)}}}),W=N,Y=(i("920c"),i("0798")),z=i("8336"),J=i("62ad"),H=i("169a"),q=i("ce7e"),Z=i("da13"),K=i("5d23"),Q=i("1baa"),ee=i("2fa4"),te=i("71d9"),ie=i("2a7f"),oe=i("eb2a"),ne=Object(c["a"])(W,k,C,!1,null,"b084a5a2",null),re=ne.exports;h()(ne,{VAlert:Y["a"],VBtn:z["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VCol:J["a"],VDialog:H["a"],VDivider:q["a"],VIcon:m["a"],VListItem:Z["a"],VListItemContent:K["a"],VListItemGroup:Q["a"],VListItemTitle:K["b"],VRow:M["a"],VSpacer:ee["a"],VToolbar:te["a"],VToolbarTitle:ie["a"],VTreeview:oe["a"]});var se=o["a"].extend({components:{ModelPicker:re},name:"ModelCreation",props:{value:Boolean},data:()=>({url:"",picker:{dialog:!1},urlError:!1,urlMessages:[]}),watch:{url(e){const t=G(e)||"";this.urlError=/error/i.test(t),this.urlMessages=[t].filter(Boolean)}},methods:{create(){if(this.url=this.url.replace(/\s/,""),this.urlError)return;const e=this.$live2dApp.addModel(this.url);this.$emit("input",!1),this.$emit("create",e)}}}),le=se,ae=i("8654"),de=Object(c["a"])(le,V,A,!1,null,"5b7fd624",null),ce=de.exports;h()(de,{VBtn:z["a"],VCard:v["a"],VCardText:p["b"],VDialog:H["a"],VIcon:m["a"],VRow:M["a"],VSpacer:ee["a"],VTextField:ae["a"],VToolbar:te["a"],VToolbarTitle:ie["a"]});var ue=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.model?i("div",{staticClass:"model-editor"},[i("div",{staticClass:"model-title pa-2 text-h5"},[e._v(e._s("#"+e.model.id+" "+e.model.name))]),i("v-list",{attrs:{expand:""}},[i("v-list-group",{attrs:{value:!0},scopedSlots:e._u([{key:"activator",fn:function(){return[i("v-list-item-content",[i("v-list-item-title",[e._v("Display")])],1)]},proxy:!0}],null,!1,1435882642)},[i("v-list-item",[i("v-list-item-content",[i("div",[i("v-slider",{staticClass:"mt-2",attrs:{dense:"","prepend-icon":"mdi-magnify",messages:String(e.model.scaleX),min:"0.01",max:"3",step:"0.01"},model:{value:e.model.scaleX,callback:function(t){e.$set(e.model,"scaleX",t)},expression:"model.scaleX"}}),i("v-slider",{staticClass:"mt-2",attrs:{dense:"","prepend-icon":"mdi-rotate-right",messages:e.rotationDeg,min:"0",max:"6.28",step:"0.01"},model:{value:e.model.rotation,callback:function(t){e.$set(e.model,"rotation",t)},expression:"model.rotation"}})],1)])],1)],1),i("v-list-group",{scopedSlots:e._u([{key:"activator",fn:function(){return[i("v-list-item-content",[i("v-list-item-title",[e._v("Motions")])],1)]},proxy:!0},{key:"default",fn:function(){return[e._l(e.motionGroups,(function(t){return[i("v-subheader",{key:t.name,staticClass:"px-3"},[e._v(e._s(t.name||"(Nameless)"))]),e._l(t.motions,(function(o,n){return i("v-list-item",{key:t.name+n,attrs:{ripple:""},on:{click:function(i){return e.startMotion(t,n)}}},[i("v-list-item-content",[i("v-list-item-title",{class:{"primary--text":e.motionState.currentGroup===t.name&&e.motionState.currentIndex===n}},[e._v(" "+e._s(o.file)+" ")])],1),i("v-list-item-icon",{staticClass:"my-0 align-self-center"},[e.motionState.currentGroup===t.name&&e.motionState.currentIndex===n?i("v-icon",{attrs:{size:"32",color:"primary"}},[e._v("mdi-play")]):e.motionState.reservedGroup===t.name&&e.motionState.reservedIndex===n||e.motionState.reservedIdleGroup===t.name&&e.motionState.reservedIdleIndex===n?i("v-progress-circular",{attrs:{indeterminate:"",size:"20"}}):e._e()],1)],1)}))]}))]},proxy:!0}],null,!1,847292484)})],1)],1):e._e()},he=[],ve=i("0949"),pe=o["a"].extend({name:"ModelEditor",props:{id:{type:Number,default:-1}},data:()=>({model:null,selectedMotionGroup:"",selectedMotionIndex:-1,motionGroups:[],motionState:null,activeMotionIndex:-1}),computed:{rotationDeg(){var e;return Math.round(((null===(e=this.model)||void 0===e?void 0:e.rotation)||0)/Math.PI*180)+"°"}},watch:{id:{immediate:!0,handler(){this.updateModel()}},scaleX(e){this.model.scale(e,e)},rotation(e){this.model.rotate(e)}},methods:{updateModel(){this.resetModel(),this.model=this.$live2dApp.getModel(this.id),this.model&&(this.model.pixiModel?this.pixiModelLoaded(this.model.pixiModel):this.model.once("modelLoaded",this.pixiModelLoaded))},resetModel(){this.model&&(this.model.off("modelLoaded",this.pixiModelLoaded),this.motionGroups=[])},pixiModelLoaded(e){const t=[],i=e.internalModel.motionManager.definitions;for(const[o,n]of Object.entries(i))t.push({name:o,motions:(null===n||void 0===n?void 0:n.map(e=>({file:e.file||e.File})))||[]});this.motionGroups=t,this.motionState=e.internalModel.motionManager.state},startMotion(e,t){this.model.pixiModel.motion(e.name,t,ve["MotionPriority"].FORCE)}}}),me=pe,fe=(i("f8a6"),i("8860")),ge=i("56b0"),xe=i("34c3"),be=i("ba0d"),Me=i("e0c7"),we=Object(c["a"])(me,ue,he,!1,null,"7daf5656",null),ye=we.exports;h()(we,{VIcon:m["a"],VList:fe["a"],VListGroup:ge["a"],VListItem:Z["a"],VListItemContent:K["a"],VListItemIcon:xe["a"],VListItemTitle:K["b"],VProgressCircular:b["a"],VSlider:be["a"],VSubheader:Me["a"]});var _e=o["a"].extend({name:"App",components:{ModelList:I,ModelCreation:ce,ModelEditor:ye},data:()=>({drawer:!0,drawerSwitch:!1,loading:!1,modelList:{visible:!0},selectedModelID:-1,creation:{dialog:!1,result:null},models:[]}),computed:{},methods:{showUI(e){this.drawer=e,this.modelList.visible=e,this.drawerSwitch=!1},log(...e){console.log(...e)}},created(){this.models=this.$live2dApp.models,this.creation.dialog=!0}}),Fe=_e,Ie=(i("9645"),i("490c"),i("7496")),Ve=i("a523"),Ae=i("f6c4"),ke=i("f774"),Ce=Object(c["a"])(Fe,n,r,!1,null,"8539cb2c",null),Se=Ce.exports;h()(Ce,{VApp:Ie["a"],VBtn:z["a"],VContainer:Ve["a"],VDivider:q["a"],VFabTransition:y["b"],VIcon:m["a"],VMain:Ae["a"],VNavigationDrawer:ke["a"],VSpacer:ee["a"],VToolbar:te["a"],VToolbarTitle:ie["a"]});var Re=i("f309");o["a"].use(Re["a"]);var Le=new Re["a"]({theme:{dark:!0,options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),Oe=i("3e85"),je=i("5e48"),Te=i.n(je);async function Ee(e){try{return(await fetch(e)).ok}catch(t){return!1}}var $e=i("aa81");async function Pe(e){var t,i,o,n;let r;if(e.endsWith(".moc")||e.endsWith(".moc3")){if(r=X(e),!r)throw new Error("Cannot find settings JSON from moc");if(e.endsWith("moc3")){r.url=$e["url"].resolve(e,"dummy.model3.json");const o=r;o.FileReferences.Moc=e,(null===(i=null===(t=o.FileReferences.Motions)||void 0===t?void 0:t[""])||void 0===i?void 0:i.length)&&(o.FileReferences.Motions[""]=o.FileReferences.Motions[""].map(e=>({File:e})))}else{r.url=$e["url"].resolve(e,"dummy.model.json");const t=r;t.model=e,(null===(n=null===(o=t.motions)||void 0===o?void 0:o[""])||void 0===n?void 0:n.length)&&(t.motions[""]=t.motions[""].map(e=>({file:e})))}}else{let t=await fetch(e).then(e=>e.text());t=De(t,e),r=Te.a.parse(t),r.url=e}return await Ue(r,e),Ge(r),console.log(r),r}function De(e,t){for(const i of Be)t.includes(encodeURI(i.search))&&i.replace&&(e=i.replace(e,t));return e}async function Ue(e,t){for(const i of Be)t.includes(encodeURI(i.search))&&i.patch&&await i.patch(e,t)}const Be=[{search:"魂器学院",replace(e){return e.replace(/mtn"([^,])/gm,'mtn",$1')},patch(e){if(e.textures&&!Array.isArray(e.textures)){const t=Object.values(e.textures)[0];Array.isArray(t)&&(e.textures=t.map(e=>e.startsWith("textures/")?e:"textures/"+e))}}},{search:"少女前线",async patch(e,t){var i,o,n;if(null===(o=null===(i=e.motions)||void 0===i?void 0:i.idle)||void 0===o?void 0:o.length){const i=e.motions.idle[0];if(null===(n=i.file)||void 0===n?void 0:n.startsWith("daiji")){const e=await Ee($e["url"].resolve(t,i.file));e||(i.file="motions/"+i.file)}}Xe(e,["daiji"])}},{search:"アンノウンブライド",async patch(e,t){var i,o;if(0===(null===(o=null===(i=e.FileReferences)||void 0===i?void 0:i.Textures)||void 0===o?void 0:o.length)){const i=await Ee($e["url"].resolve(t,"textures/texture_00.png"));e.FileReferences.Textures.push(i?"textures/texture_00.png":"textures/texture_00 .png")}Ne(e,["home","gacha"])}},{search:"凍京",async patch(e,t){var i,o,n,r,s;const l=async e=>await Ee($e["url"].resolve(t,e))?e:e.replace("/texture","/android/texture");if(ve["Cubism2ModelSettings"].isValidJSON(e)){if(e.textures&&(e.textures=await Promise.all(e.textures.map(l))),e.motions){for(const t of Object.values(e.motions))if(null===t||void 0===t?void 0:t.length)for(const e of t)e.file=null!==(i=e.file)&&void 0!==i?i:e.File,delete e.File;!(null===(o=e.motions.idle)||void 0===o?void 0:o.length)&&e.motions[""]&&(e.motions.idle=e.motions[""].filter(e=>{var t;return null===(t=e.file)||void 0===t?void 0:t.includes("loop")}))}}else ve["Cubism4ModelSettings"].isValidJSON(e)&&((null===(n=e.FileReferences)||void 0===n?void 0:n.Textures)&&(e.FileReferences.Textures=await Promise.all(e.FileReferences.Textures.map(l))),(null===(r=e.FileReferences)||void 0===r?void 0:r.Motions)&&!(null===(s=e.FileReferences.Motions.Idle)||void 0===s?void 0:s.length)&&e.FileReferences.Motions[""]&&(e.FileReferences.Motions.Idle=e.FileReferences.Motions[""].filter(e=>{var t;return null===(t=e.File)||void 0===t?void 0:t.includes("loop")})))}},{search:"天命之子",patch(e){var t,i,o,n,r;(null===(i=null===(t=e.motions)||void 0===t?void 0:t[""])||void 0===i?void 0:i.length)&&!(null===(n=null===(o=e.motions)||void 0===o?void 0:o.idle)||void 0===n?void 0:n.length)&&(e.motions.idle=null===(r=e.motions)||void 0===r?void 0:r[""].map(e=>Object.assign({},e)))}},{search:"碧蓝航线",patch(e){Ne(e,["idle"])}},{search:"少女咖啡枪",patch(e){Ne(e,["stand"])}},{search:"princesses",patch(e){Xe(e,["default","loop"])}},{search:"崩坏",patch(e){We(e)}},{search:"战舰少女",patch(e){We(e)}},{search:"机动战队",patch(e){We(e)}}];function Ge(e){var t,i,o;const n=null===(t=e.FileReferences)||void 0===t?void 0:t.Motions;n&&((null===(i=n.Idle)||void 0===i?void 0:i[0])||1!==(null===(o=n[""])||void 0===o?void 0:o.length)||(n.Idle=n[""].map(e=>Object.assign({},e))))}function Xe(e,t){if(e.motions){const i=[];for(const[o,n]of Object.entries(e.motions))if("idle"!==o&&Array.isArray(n))for(const e of n)for(const o of t)e.file&&e.file.toLowerCase().includes(o)&&i.push(e);i&&(e.motions.idle=(e.motions.idle||[]).concat(i))}}function Ne(e,t){var i;if(null===(i=e.FileReferences)||void 0===i?void 0:i.Motions){const i=[];for(const[o,n]of Object.entries(e.FileReferences.Motions))if("Idle"!==o&&Array.isArray(n))for(const e of n)for(const o of t)e.File&&e.File.toLowerCase().includes(o)&&i.push(e);i&&(e.FileReferences.Motions.Idle=(e.FileReferences.Motions.Idle||[]).concat(i))}}function We(e){if(e.motions)for(const t of Object.values(e.motions))if(null===t||void 0===t?void 0:t.length)for(const e of t)e.sound=void 0}async function Ye(e){const t=await Pe(e);return ve["Live2DModel"].from.call(ze,t)}class ze extends ve["Live2DModel"]{constructor(){super(),this.once("modelLoaded",this._init)}_init(){var e,t;this.hitAreaFrames=new Oe["a"],this.addChild(this.hitAreaFrames),this.anchor.set(.5,.5),this.on("hit",this.startHitMotion),null===(t=(e=this.internalModel.motionManager.queueManager).setEventCallback)||void 0===t||t.call(e,(e,t)=>{this.emit("motion:"+t)})}startHitMotion(e){for(let t of e){t=t.toLowerCase();const e=[t,"tap"+t,"tap_"+t,"tap"];for(const t of e)for(let e of Object.keys(this.internalModel.motionManager.definitions))if(t===e.toLowerCase())return void this.motion(e)}}}function Je(e){const t=e;t.buttonMode=!0,t.on("pointerdown",He),t.on("pointermove",qe),t.on("pointerup",Ze),t.on("pointerupoutside",Ze)}function He(e){this.dragging=!0,this._pointerX=e.data.global.x-this.x,this._pointerY=e.data.global.y-this.y}function qe(e){this.dragging&&(this.position.x=e.data.global.x-this._pointerX,this.position.y=e.data.global.y-this._pointerY)}function Ze(e){this.dragging=!1}ze.from=Ye;const Ke="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMU22h6EgADqAHHuWdgTgAAAABJRU5ErkJggg==";let Qe=1;class et extends $e["EventEmitter"]{constructor(e){super(),this.id=Qe++,this.url="",this.thumbnail="",this.aspectRatio=1,this.name="New Model",this.visible=!0,this._scaleX=1,this._scaleY=1,this._rotation=0,this._zIndex=0,this.error="",this.url=e,this.loadModel().then()}async loadModel(){try{this.pixiModel=await ze.from(this.url)}catch(e){this.error=e instanceof Error?e.message:e+""}this.pixiModel&&(this.initModel(this.pixiModel),this.emit("modelLoaded",this.pixiModel))}initModel(e){this.pixiModel=e,this.name=e.internalModel.settings.name,this.thumbnail=Ke,this.aspectRatio=e.width/e.height,Je(e)}fit(e,t){if(this.pixiModel){let i=Math.min(e/this.pixiModel.width,t/this.pixiModel.height);i=Math.round(10*i)/10,this.scale(i,i)}}scale(e,t){this._scaleX=null!==e&&void 0!==e?e:this._scaleX,this._scaleY=null!==t&&void 0!==t?t:this._scaleY,this.pixiModel&&this.pixiModel.scale.set(this._scaleX,this._scaleY)}rotate(e){this._rotation=e,this.pixiModel&&(this.pixiModel.rotation=e)}setZIndex(e){this._zIndex=e,this.pixiModel&&(this.pixiModel.zIndex=e)}setVisible(e){this.visible=e,this.pixiModel&&(this.pixiModel.visible=e)}destroy(){this.pixiModel&&(this.pixiModel.destroy({children:!0}),this.pixiModel=void 0)}get zIndex(){return this._zIndex}set zIndex(e){this.setZIndex(e)}get rotation(){return this._rotation}set rotation(e){this.rotate(e)}get scaleY(){return this._scaleY}set scaleY(e){this.scale(void 0,e)}get scaleX(){return this._scaleX}set scaleX(e){this.scale(e,e)}}var tt=i("568e"),it=i("c29d"),ot=i("e3e9"),nt=i("6129"),rt=i("9bfd"),st=i("b0a0"),lt=i("8730"),at=i.n(lt);tt["a"].registerPlugin(ot["b"]),ze.registerTicker(ot["a"]),it["Renderer"].registerPlugin("extract",rt["a"]),it["Renderer"].registerPlugin("batch",it["BatchRenderer"]),it["Renderer"].registerPlugin("interaction",nt["a"]),ve["config"].logLevel=ve["config"].LOG_LEVEL_VERBOSE;class dt{constructor(e){this.models=[],this.pixiApp=new tt["a"]({view:e,resizeTo:window}),this.pixiApp.stage.interactive=!0}addModel(e){const t=new et(e);return this.initModel(t),this.models.push(t),t.id}getModel(e){return this.models.find(t=>t.id===e)}initModel(e){e.on("modelLoaded",t=>{if(!this.pixiApp.stage.children.includes(t)){this.pixiApp.stage.addChild(t),t.position.set(this.pixiApp.renderer.width/2,this.pixiApp.renderer.height/2),e.fit(this.pixiApp.renderer.width,this.pixiApp.renderer.height);try{e.thumbnail=this.createThumbnail(t)}catch(i){e.error=i.message}}})}createThumbnail(e){let t;st["b"].RESOLUTION=.2,e.hitAreaFrames.visible=!1;try{t=this.pixiApp.renderer.extract.base64(e,"image/webp",.01)}finally{st["b"].RESOLUTION=1,e.hitAreaFrames.visible=!0}return t}removeModel(e){const t=this.models.find(t=>t.id===e);t&&(at()(this.models,t),t.pixiModel&&this.pixiApp.stage.removeChild(t.pixiModel),t.destroy())}}const ct=new dt(document.getElementById("canvas"));o["a"].prototype.$live2dApp=ct,o["a"].config.productionTip=!1,o["a"].directive("visible",(function(e,t){e.style.visibility=t.value?"visible":"hidden"})),window.app=new o["a"]({vuetify:Le,render:e=>e(Se)}).$mount("#app"),window.config=ve["config"]},d4f2:function(e,t,i){"use strict";i("7ae3")},f8a6:function(e,t,i){"use strict";i("95a6")}});
//# sourceMappingURL=app.32953e87.js.map