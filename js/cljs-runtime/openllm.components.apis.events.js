goog.provide('openllm.components.apis.events');
/**
 * Returns the http event for the given `api-id`.
 */
openllm.components.apis.events.api_id__GT_http_event = (function openllm$components$apis$events$api_id__GT_http_event(api_id){
return new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28840_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28840_SHARP_),api_id);
}),openllm.components.apis.data.endpoints_data)));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.apis.events","set-selected-api","openllm.components.apis.events/set-selected-api",-1282705715),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__28841){
var vec__28842 = p__28841;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842,(0),null);
var selected_api = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-api","selected-api",-1662928330),selected_api);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.apis.events","set-input-value","openllm.components.apis.events/set-input-value",-1125604677),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__28845){
var vec__28846 = p__28845;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apis-data","apis-data",-2046478433),id,new cljs.core.Keyword(null,"input-value","input-value",-1719954369)], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.apis.events","set-last-response","openllm.components.apis.events/set-last-response",944515469),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__28849){
var vec__28850 = p__28849;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28850,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28850,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28850,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apis-data","apis-data",-2046478433),id,new cljs.core.Keyword(null,"last-response","last-response",-1850515372)], null),value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.apis.events","on-send-button-click","openllm.components.apis.events/on-send-button-click",50596077),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (_,p__28853){
var vec__28854 = p__28853;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.into.cljs$core$IFn$_invoke$arity$2(openllm.components.apis.events.api_id__GT_http_event(id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.events","set-last-response","openllm.components.apis.events/set-last-response",944515469),id], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.events","set-last-response","openllm.components.apis.events/set-last-response",944515469),id], null)], null)], null))], null);
}));

//# sourceMappingURL=openllm.components.apis.events.js.map
