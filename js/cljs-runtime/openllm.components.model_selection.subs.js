goog.provide('openllm.components.model_selection.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.model-selection.subs","selected-model","openllm.components.model-selection.subs/selected-model",417563610),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.subs","model-selection-db","openllm.components.subs/model-selection-db",-391409674)], null),(function (model_selection_db,_){
return new cljs.core.Keyword(null,"selected-model","selected-model",1480568100).cljs$core$IFn$_invoke$arity$1(model_selection_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.model-selection.subs","all-models-data","openllm.components.model-selection.subs/all-models-data",-2000953348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.subs","model-selection-db","openllm.components.subs/model-selection-db",-391409674)], null),(function (model_selection_db,_){
return new cljs.core.Keyword(null,"all-models","all-models",-326178653).cljs$core$IFn$_invoke$arity$1(model_selection_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.model-selection.subs","selected-model-type","openllm.components.model-selection.subs/selected-model-type",561540643),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.subs","selected-model","openllm.components.model-selection.subs/selected-model",417563610)], null),(function (selected_model,_){
return new cljs.core.Keyword(null,"model-type","model-type",398058196).cljs$core$IFn$_invoke$arity$1(selected_model);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.model-selection.subs","selected-model-id","openllm.components.model-selection.subs/selected-model-id",1144514052),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.subs","selected-model","openllm.components.model-selection.subs/selected-model",417563610)], null),(function (selected_model,_){
return new cljs.core.Keyword(null,"model-id","model-id",-467101728).cljs$core$IFn$_invoke$arity$1(selected_model);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.model-selection.subs","all-model-types","openllm.components.model-selection.subs/all-model-types",-924490445),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.subs","all-models-data","openllm.components.model-selection.subs/all-models-data",-2000953348)], null),(function (all_models_data,_){
return cljs.core.keys(all_models_data);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.model-selection.subs","all-model-ids","openllm.components.model-selection.subs/all-model-ids",371003061),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.subs","selected-model-type","openllm.components.model-selection.subs/selected-model-type",561540643)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.subs","all-models-data","openllm.components.model-selection.subs/all-models-data",-2000953348)], null),(function (p__29468,_){
var vec__29469 = p__29468;
var selected_model_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29469,(0),null);
var all_models_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29469,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(all_models_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_model_type,new cljs.core.Keyword(null,"model_id","model_id",-2010580717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.model_selection.db.loading_text], null));
})], 0));

//# sourceMappingURL=openllm.components.model_selection.subs.js.map
