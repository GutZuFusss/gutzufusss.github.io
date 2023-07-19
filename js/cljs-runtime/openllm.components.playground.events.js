goog.provide('openllm.components.playground.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.playground.events","set-prompt-input","openllm.components.playground.events/set-prompt-input",-1413458575),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__28640){
var vec__28641 = p__28640;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28641,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28641,(1),null);
return cljs.core.assoc_in(db,openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playground-input-value","playground-input-value",1271962687)], 0)),value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.playground.events","send-prompt-success","openllm.components.playground.events/send-prompt-success",-653271490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__28644){
var vec__28645 = p__28644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28645,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28645,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playground-last-response","playground-last-response",952245930)], 0)),cljs.core.first(new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(response))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.events","toggle-modal","openllm.components.playground.events/toggle-modal",-1254246349)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.playground.events","send-prompt-failure","openllm.components.playground.events/send-prompt-failure",-1228778344),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (p__28648,p__28649){
var map__28650 = p__28648;
var map__28650__$1 = cljs.core.__destructure_map(map__28650);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28650__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28651 = p__28649;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28651,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28651,(1),null);
openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failed to send prompt",e], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playground-last-response","playground-last-response",952245930)], 0)),"Sorry, something went wrong."),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.events","toggle-modal","openllm.components.playground.events/toggle-modal",-1254246349)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.playground.events","on-send-button-click","openllm.components.playground.events/on-send-button-click",-1111011821),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (_,p__28654){
var vec__28655 = p__28654;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28655,(0),null);
var prompt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28655,(1),null);
var llm_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28655,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.api.http","v1-generate","openllm.api.http/v1-generate",1611535773),prompt,llm_config,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.events","send-prompt-success","openllm.components.playground.events/send-prompt-success",-653271490)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.events","send-prompt-failure","openllm.components.playground.events/send-prompt-failure",-1228778344)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.playground.events","toggle-modal","openllm.components.playground.events/toggle-modal",-1254246349),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,_){
var new_value = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response-modal-open?","response-modal-open?",2021336734)], 0))));
return cljs.core.assoc_in(db,openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response-modal-open?","response-modal-open?",2021336734)], 0)),new_value);
}));

//# sourceMappingURL=openllm.components.playground.events.js.map
