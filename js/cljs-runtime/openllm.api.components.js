goog.provide('openllm.api.components');
/**
 * The file upload reagent custom component.
 */
openllm.api.components.file_upload_button = (function openllm$api$components$file_upload_button(p__40209){
var map__40210 = p__40209;
var map__40210__$1 = cljs.core.__destructure_map(map__40210);
var callback_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40210__$1,new cljs.core.Keyword(null,"callback-event","callback-event",-861154138));
var file_reader = (new FileReader());
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return file_reader.addEventListener("load",(function (evt){
var content = evt.target.result;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_event,content], null));
}));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"file-upload",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (evt){
var file = (evt.target.files[(0)]);
return file_reader.readAsText(file);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return document.querySelector("#file-upload").click();
}),new cljs.core.Keyword(null,"color","color",1011675173),"primary"], null),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.file_upload.file_upload], null))], null)], null);
})], null));
});

//# sourceMappingURL=openllm.api.components.js.map
