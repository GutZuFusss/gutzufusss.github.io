goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38445){
var map__38446 = p__38445;
var map__38446__$1 = cljs.core.__destructure_map(map__38446);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38446__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38446__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38446__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38446__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38450_38480 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38451_38481 = null;
var count__38452_38482 = (0);
var i__38453_38483 = (0);
while(true){
if((i__38453_38483 < count__38452_38482)){
var vec__38464_38484 = chunk__38451_38481.cljs$core$IIndexed$_nth$arity$2(null,i__38453_38483);
var k_38485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38464_38484,(0),null);
var cb_38486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38464_38484,(1),null);
try{var G__38468_38487 = cljs.core.deref(re_frame.trace.traces);
(cb_38486.cljs$core$IFn$_invoke$arity$1 ? cb_38486.cljs$core$IFn$_invoke$arity$1(G__38468_38487) : cb_38486.call(null,G__38468_38487));
}catch (e38467){var e_38488 = e38467;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38485,"while storing",cljs.core.deref(re_frame.trace.traces),e_38488], 0));
}

var G__38489 = seq__38450_38480;
var G__38490 = chunk__38451_38481;
var G__38491 = count__38452_38482;
var G__38492 = (i__38453_38483 + (1));
seq__38450_38480 = G__38489;
chunk__38451_38481 = G__38490;
count__38452_38482 = G__38491;
i__38453_38483 = G__38492;
continue;
} else {
var temp__5804__auto___38493 = cljs.core.seq(seq__38450_38480);
if(temp__5804__auto___38493){
var seq__38450_38494__$1 = temp__5804__auto___38493;
if(cljs.core.chunked_seq_QMARK_(seq__38450_38494__$1)){
var c__5568__auto___38495 = cljs.core.chunk_first(seq__38450_38494__$1);
var G__38496 = cljs.core.chunk_rest(seq__38450_38494__$1);
var G__38497 = c__5568__auto___38495;
var G__38498 = cljs.core.count(c__5568__auto___38495);
var G__38499 = (0);
seq__38450_38480 = G__38496;
chunk__38451_38481 = G__38497;
count__38452_38482 = G__38498;
i__38453_38483 = G__38499;
continue;
} else {
var vec__38470_38500 = cljs.core.first(seq__38450_38494__$1);
var k_38501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38470_38500,(0),null);
var cb_38502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38470_38500,(1),null);
try{var G__38474_38503 = cljs.core.deref(re_frame.trace.traces);
(cb_38502.cljs$core$IFn$_invoke$arity$1 ? cb_38502.cljs$core$IFn$_invoke$arity$1(G__38474_38503) : cb_38502.call(null,G__38474_38503));
}catch (e38473){var e_38504 = e38473;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38501,"while storing",cljs.core.deref(re_frame.trace.traces),e_38504], 0));
}

var G__38505 = cljs.core.next(seq__38450_38494__$1);
var G__38506 = null;
var G__38507 = (0);
var G__38508 = (0);
seq__38450_38480 = G__38505;
chunk__38451_38481 = G__38506;
count__38452_38482 = G__38507;
i__38453_38483 = G__38508;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
