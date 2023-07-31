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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38518){
var map__38519 = p__38518;
var map__38519__$1 = cljs.core.__destructure_map(map__38519);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38519__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38519__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38519__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38519__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__38520_38553 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38521_38557 = null;
var count__38522_38558 = (0);
var i__38523_38559 = (0);
while(true){
if((i__38523_38559 < count__38522_38558)){
var vec__38536_38560 = chunk__38521_38557.cljs$core$IIndexed$_nth$arity$2(null,i__38523_38559);
var k_38561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38536_38560,(0),null);
var cb_38562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38536_38560,(1),null);
try{var G__38540_38564 = cljs.core.deref(re_frame.trace.traces);
(cb_38562.cljs$core$IFn$_invoke$arity$1 ? cb_38562.cljs$core$IFn$_invoke$arity$1(G__38540_38564) : cb_38562.call(null,G__38540_38564));
}catch (e38539){var e_38565 = e38539;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38561,"while storing",cljs.core.deref(re_frame.trace.traces),e_38565], 0));
}

var G__38569 = seq__38520_38553;
var G__38570 = chunk__38521_38557;
var G__38571 = count__38522_38558;
var G__38572 = (i__38523_38559 + (1));
seq__38520_38553 = G__38569;
chunk__38521_38557 = G__38570;
count__38522_38558 = G__38571;
i__38523_38559 = G__38572;
continue;
} else {
var temp__5753__auto___38573 = cljs.core.seq(seq__38520_38553);
if(temp__5753__auto___38573){
var seq__38520_38574__$1 = temp__5753__auto___38573;
if(cljs.core.chunked_seq_QMARK_(seq__38520_38574__$1)){
var c__5568__auto___38575 = cljs.core.chunk_first(seq__38520_38574__$1);
var G__38576 = cljs.core.chunk_rest(seq__38520_38574__$1);
var G__38577 = c__5568__auto___38575;
var G__38578 = cljs.core.count(c__5568__auto___38575);
var G__38579 = (0);
seq__38520_38553 = G__38576;
chunk__38521_38557 = G__38577;
count__38522_38558 = G__38578;
i__38523_38559 = G__38579;
continue;
} else {
var vec__38541_38580 = cljs.core.first(seq__38520_38574__$1);
var k_38581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38541_38580,(0),null);
var cb_38582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38541_38580,(1),null);
try{var G__38545_38586 = cljs.core.deref(re_frame.trace.traces);
(cb_38582.cljs$core$IFn$_invoke$arity$1 ? cb_38582.cljs$core$IFn$_invoke$arity$1(G__38545_38586) : cb_38582.call(null,G__38545_38586));
}catch (e38544){var e_38587 = e38544;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38581,"while storing",cljs.core.deref(re_frame.trace.traces),e_38587], 0));
}

var G__38590 = cljs.core.next(seq__38520_38574__$1);
var G__38591 = null;
var G__38592 = (0);
var G__38593 = (0);
seq__38520_38553 = G__38590;
chunk__38521_38557 = G__38591;
count__38522_38558 = G__38592;
i__38523_38559 = G__38593;
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
