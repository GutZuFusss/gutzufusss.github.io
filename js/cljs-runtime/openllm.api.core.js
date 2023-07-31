goog.provide('openllm.api.core');
/**
 * The file upload reagent custom component.
 */
openllm.api.core.file_upload = (function openllm$api$core$file_upload(p__38175){
var map__38176 = p__38175;
var map__38176__$1 = cljs.core.__destructure_map(map__38176);
var callback_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38176__$1,new cljs.core.Keyword(null,"callback-event","callback-event",-861154138));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38176__$1,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full mt-3 shadow-sm rounded-md focus:z-10 file:bg-transparent file:border-0 file:bg-blue-800 file:mr-4 file:py-2 file:px-4 bg-blue-600 text-white hover:bg-blue-700 file:text-white");
var file_reader = (new FileReader());
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return file_reader.addEventListener("load",(function (evt){
var content = evt.target.result;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_event,content], null));
}));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (evt){
var file = (evt.target.files[(0)]);
return file_reader.readAsText(file);
})], null)], null);
})], null));
});

//# sourceMappingURL=openllm.api.core.js.map
