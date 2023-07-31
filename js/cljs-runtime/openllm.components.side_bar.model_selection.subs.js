goog.provide('openllm.components.side_bar.model_selection.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","selected-model","openllm.components.side-bar.model-selection.subs/selected-model",-1200739167),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.subs","model-selection-db","openllm.components.side-bar.subs/model-selection-db",1775732399)], null),(function (model_selection_db,_){
return new cljs.core.Keyword(null,"selected-model","selected-model",1480568100).cljs$core$IFn$_invoke$arity$1(model_selection_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","all-models-data","openllm.components.side-bar.model-selection.subs/all-models-data",698718291),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.subs","model-selection-db","openllm.components.side-bar.subs/model-selection-db",1775732399)], null),(function (model_selection_db,_){
return new cljs.core.Keyword(null,"all-models","all-models",-326178653).cljs$core$IFn$_invoke$arity$1(model_selection_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","selected-model-type","openllm.components.side-bar.model-selection.subs/selected-model-type",-2111453602),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","selected-model","openllm.components.side-bar.model-selection.subs/selected-model",-1200739167)], null),(function (selected_model,_){
return new cljs.core.Keyword(null,"model-type","model-type",398058196).cljs$core$IFn$_invoke$arity$1(selected_model);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","selected-model-id","openllm.components.side-bar.model-selection.subs/selected-model-id",-1611858261),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","selected-model","openllm.components.side-bar.model-selection.subs/selected-model",-1200739167)], null),(function (selected_model,_){
return new cljs.core.Keyword(null,"model-id","model-id",-467101728).cljs$core$IFn$_invoke$arity$1(selected_model);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","all-model-types","openllm.components.side-bar.model-selection.subs/all-model-types",1745796026),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","all-models-data","openllm.components.side-bar.model-selection.subs/all-models-data",698718291)], null),(function (all_models_data,_){
return cljs.core.keys(all_models_data);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","all-model-ids","openllm.components.side-bar.model-selection.subs/all-model-ids",-1365811858),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.subs","all-models-data","openllm.components.side-bar.model-selection.subs/all-models-data",698718291)], null),(function (all_models_data,_){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__40327){
var vec__40328 = p__40327;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40328,(0),null);
var model_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40328,(1),null);
return new cljs.core.Keyword(null,"model_id","model_id",-2010580717).cljs$core$IFn$_invoke$arity$1(model_type);
}),all_models_data)));
})], 0));

//# sourceMappingURL=openllm.components.side_bar.model_selection.subs.js.map
