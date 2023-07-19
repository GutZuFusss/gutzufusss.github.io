goog.provide('openllm.components.side_bar.model_selection.views');
/**
 * The dropdowns selecting the model. The `model-type` dropdown is populated
 * with the available `model-types`, the `model-id` dropdown is populated with
 * the available `model-ids` for the currently selected `model-type`.
 */
openllm.components.side_bar.model_selection.views.model_selection = (function openllm$components$side_bar$model_selection$views$model_selection(){
var model_type = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","selected-model-type","openllm.components.side-bar.model-selection.subs/selected-model-type",-2111453602)], null));
var model_id = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","selected-model-id","openllm.components.side-bar.model-selection.subs/selected-model-id",-1611858261)], null));
var all_model_types = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","all-model-types","openllm.components.side-bar.model-selection.subs/all-model-types",1745796026)], null));
var all_model_ids = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","all-model-ids","openllm.components.side-bar.model-selection.subs/all-model-ids",-1365811858)], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-5 mb-3 mt-1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-black"], null),"Model-Type",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full pl-3 pr-10 py-1 mb-1",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(model_type),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28595_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.events","set-model-type","openllm.components.side-bar.model-selection.events/set-model-type",948077236),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__28595_SHARP_.target.value)], null));
})], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28596_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),p1__28596_SHARP_], null),p1__28596_SHARP_], null);
}),cljs.core.deref(all_model_types)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-black"], null),"Model-ID",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full pl-3 pr-10 py-1",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(model_id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28597_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.events","set-model-id","openllm.components.side-bar.model-selection.events/set-model-id",-391349662),p1__28597_SHARP_.target.value], null));
})], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28598_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),p1__28598_SHARP_], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28598_SHARP_)], null);
}),cljs.core.deref(all_model_ids)))], null)], null);
});
});

//# sourceMappingURL=openllm.components.side_bar.model_selection.views.js.map
