goog.provide('openllm.components.chat.events');
re_frame.core.reg_cofx(new cljs.core.Keyword("openllm.components.chat.events","chat-history-element","openllm.components.chat.events/chat-history-element",-1202851412),(function (cofx,_){
var element = document.getElementById("chat-history-container");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"chat-history-element","chat-history-element",-1508763090),element);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.chat.events","set-chat-input-value","openllm.components.chat.events/set-chat-input-value",990254050),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__39531){
var vec__39532 = p__39531;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39532,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39532,(1),null);
return cljs.core.assoc_in(db,openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chat-input-value","chat-input-value",790175504)], 0)),new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.chat.events","add-to-app-db-history","openllm.components.chat.events/add-to-app-db-history",-634158144),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__39535){
var vec__39536 = p__39535;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39536,(0),null);
var timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39536,(1),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39536,(2),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39536,(3),null);
return cljs.core.assoc_in(db,openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chat-history","chat-history",912746146)], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chat-history","chat-history",912746146)], 0))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp], null)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.chat.events","add-to-chat-history","openllm.components.chat.events/add-to-chat-history",-176125614),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"time-now","time-now",-206239031))], null),(function (cofx,p__39539){
var vec__39540 = p__39539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39540,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39540,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39540,(2),null);
var map__39543 = cofx;
var map__39543__$1 = cljs.core.__destructure_map(map__39543);
var time_now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39543__$1,new cljs.core.Keyword(null,"time-now","time-now",-206239031));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","add-to-app-db-history","openllm.components.chat.events/add-to-app-db-history",-634158144),time_now,user,text,time_now], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.api.persistence","add-to-indexed-db-history","openllm.api.persistence/add-to-indexed-db-history",-504590727),time_now,user,text], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.chat.events","send-prompt-success","openllm.components.chat.events/send-prompt-success",-1055704007),cljs.core.PersistentVector.EMPTY,(function (_,p__39544){
var vec__39545 = p__39544;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39545,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39545,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","add-to-chat-history","openllm.components.chat.events/add-to-chat-history",-176125614),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.first(new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(response))], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.chat.events","send-prompt-failure","openllm.components.chat.events/send-prompt-failure",-1094313335),cljs.core.PersistentVector.EMPTY,(function (_,p__39548){
var vec__39549 = p__39548;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39549,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39549,(1),null);
openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failed to send prompt",e], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(10),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","add-to-chat-history","openllm.components.chat.events/add-to-chat-history",-176125614),new cljs.core.Keyword(null,"model","model",331153215),"Sorry, something went wrong."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(20),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","auto-scroll","openllm.components.chat.events/auto-scroll",1391549912)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.chat.events","on-send-button-click","openllm.components.chat.events/on-send-button-click",-708855792),cljs.core.PersistentVector.EMPTY,(function (p__39552,p__39553){
var map__39554 = p__39552;
var map__39554__$1 = cljs.core.__destructure_map(map__39554);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39554__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39555 = p__39553;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39555,(0),null);
var prompt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39555,(1),null);
var llm_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39555,(2),null);
var input_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chat-input-value","chat-input-value",790175504)], 0)));
if((!(clojure.string.blank_QMARK_(input_value)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","add-to-chat-history","openllm.components.chat.events/add-to-chat-history",-176125614),new cljs.core.Keyword(null,"user","user",1532431356),input_value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.api.http","v1-generate","openllm.api.http/v1-generate",1611535773),prompt,llm_config,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","send-prompt-success","openllm.components.chat.events/send-prompt-success",-1055704007)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","send-prompt-failure","openllm.components.chat.events/send-prompt-failure",-1094313335)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","set-chat-input-value","openllm.components.chat.events/set-chat-input-value",990254050),""], null)], null),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(10),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","auto-scroll","openllm.components.chat.events/auto-scroll",1391549912)], null)], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.chat.events","toggle-modal","openllm.components.chat.events/toggle-modal",-1388708298),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__39558){
var vec__39559 = p__39558;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39559,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39559,(1),null);
var new_value = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout-modal-open?","layout-modal-open?",1071362944)], 0))));
return cljs.core.assoc_in(db,openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout-modal-open?","layout-modal-open?",1071362944)], 0)),new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.chat.events","set-prompt-layout","openllm.components.chat.events/set-prompt-layout",-1573538316),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__39562){
var vec__39563 = p__39562;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563,(0),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563,(1),null);
return cljs.core.assoc_in(db,openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prompt-layout","prompt-layout",-476570062)], 0)),layout);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.chat.events","auto-scroll","openllm.components.chat.events/auto-scroll",1391549912),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("openllm.components.chat.events","chat-history-element","openllm.components.chat.events/chat-history-element",-1202851412))], null),(function (cofx,_){
var history_elem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.Keyword(null,"chat-history-element","chat-history-element",-1508763090));
if((!((history_elem == null)))){
(history_elem.scrollTop = history_elem.scrollHeight);

return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(10),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","auto-scroll","openllm.components.chat.events/auto-scroll",1391549912)], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.chat.events","clear-chat-history","openllm.components.chat.events/clear-chat-history",1098955562),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,_){
return cljs.core.assoc_in(db,openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chat-history","chat-history",912746146)], 0)),cljs.core.PersistentVector.EMPTY);
}));

//# sourceMappingURL=openllm.components.chat.events.js.map
