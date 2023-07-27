goog.provide('openllm.components.side_bar.model_params.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.side-bar.model-params.events","set-model-config-parameter","openllm.components.side-bar.model-params.events/set-model-config-parameter",1676339857),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__31131){
var vec__31132 = p__31131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132,(2),null);
var type_pred = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parameter,new cljs.core.Keyword(null,"type-pred","type-pred",670733862)], null));
var value__$1 = (function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var parsed_value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_pred,cljs.core.float_QMARK_))?cljs.core.parse_double(value__$1):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_pred,cljs.core.int_QMARK_)) && ((!(cljs.core.int_QMARK_(value__$1))))))?cljs.core.parse_long(value__$1):value__$1));
return cljs.core.assoc_in(db,openllm.components.side_bar.model_params.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parameter], 0)),parsed_value);
}));

//# sourceMappingURL=openllm.components.side_bar.model_params.events.js.map
