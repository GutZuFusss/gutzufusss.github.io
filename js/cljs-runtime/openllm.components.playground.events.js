goog.provide('openllm.components.playground.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.playground.events","set-prompt-input","openllm.components.playground.events/set-prompt-input",-1413458575),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__40187){
var vec__40188 = p__40187;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40188,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40188,(1),null);
return cljs.core.assoc_in(db,openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playground-input-value","playground-input-value",1271962687)], 0)),value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.playground.events","send-prompt-success","openllm.components.playground.events/send-prompt-success",-653271490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__40191){
var vec__40192 = p__40191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40192,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40192,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playground-last-response","playground-last-response",952245930)], 0)),cljs.core.first(new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(response))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.events","toggle-modal","openllm.components.playground.events/toggle-modal",-1254246349)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.playground.events","send-prompt-failure","openllm.components.playground.events/send-prompt-failure",-1228778344),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (p__40195,p__40196){
var map__40197 = p__40195;
var map__40197__$1 = cljs.core.__destructure_map(map__40197);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40197__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40198 = p__40196;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198,(1),null);
openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failed to send prompt",e], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playground-last-response","playground-last-response",952245930)], 0)),"Sorry, something went wrong."),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.events","toggle-modal","openllm.components.playground.events/toggle-modal",-1254246349)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.playground.events","on-send-button-click","openllm.components.playground.events/on-send-button-click",-1111011821),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (_,p__40201){
var vec__40202 = p__40201;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40202,(0),null);
var prompt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40202,(1),null);
var llm_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40202,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.api.http","v1-generate","openllm.api.http/v1-generate",1611535773),prompt,llm_config,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.events","send-prompt-success","openllm.components.playground.events/send-prompt-success",-653271490)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.events","send-prompt-failure","openllm.components.playground.events/send-prompt-failure",-1228778344)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.playground.events","toggle-modal","openllm.components.playground.events/toggle-modal",-1254246349),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,_){
var new_value = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response-modal-open?","response-modal-open?",2021336734)], 0))));
return cljs.core.assoc_in(db,openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response-modal-open?","response-modal-open?",2021336734)], 0)),new_value);
}));

//# sourceMappingURL=openllm.components.playground.events.js.map
