goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38806 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38807 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38807);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___38915 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___38915)){
var new_db_38916 = temp__5804__auto___38915;
var fexpr__38809_38917 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38809_38917.cljs$core$IFn$_invoke$arity$1 ? fexpr__38809_38917.cljs$core$IFn$_invoke$arity$1(new_db_38916) : fexpr__38809_38917.call(null,new_db_38916));
} else {
}

var seq__38810 = cljs.core.seq(effects_without_db);
var chunk__38811 = null;
var count__38812 = (0);
var i__38813 = (0);
while(true){
if((i__38813 < count__38812)){
var vec__38821 = chunk__38811.cljs$core$IIndexed$_nth$arity$2(null,i__38813);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38821,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38821,(1),null);
var temp__5802__auto___38920 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___38920)){
var effect_fn_38921 = temp__5802__auto___38920;
(effect_fn_38921.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38921.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38921.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38922 = seq__38810;
var G__38923 = chunk__38811;
var G__38924 = count__38812;
var G__38925 = (i__38813 + (1));
seq__38810 = G__38922;
chunk__38811 = G__38923;
count__38812 = G__38924;
i__38813 = G__38925;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38810);
if(temp__5804__auto__){
var seq__38810__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38810__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38810__$1);
var G__38928 = cljs.core.chunk_rest(seq__38810__$1);
var G__38929 = c__5568__auto__;
var G__38930 = cljs.core.count(c__5568__auto__);
var G__38931 = (0);
seq__38810 = G__38928;
chunk__38811 = G__38929;
count__38812 = G__38930;
i__38813 = G__38931;
continue;
} else {
var vec__38831 = cljs.core.first(seq__38810__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38831,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38831,(1),null);
var temp__5802__auto___38932 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___38932)){
var effect_fn_38933 = temp__5802__auto___38932;
(effect_fn_38933.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38933.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38933.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38934 = cljs.core.next(seq__38810__$1);
var G__38935 = null;
var G__38936 = (0);
var G__38937 = (0);
seq__38810 = G__38934;
chunk__38811 = G__38935;
count__38812 = G__38936;
i__38813 = G__38937;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38423__auto___38939 = re_frame.interop.now();
var duration__38424__auto___38940 = (end__38423__auto___38939 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38424__auto___38940,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38423__auto___38939);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38806);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___38942 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___38942)){
var new_db_38943 = temp__5804__auto___38942;
var fexpr__38837_38944 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38837_38944.cljs$core$IFn$_invoke$arity$1 ? fexpr__38837_38944.cljs$core$IFn$_invoke$arity$1(new_db_38943) : fexpr__38837_38944.call(null,new_db_38943));
} else {
}

var seq__38838 = cljs.core.seq(effects_without_db);
var chunk__38839 = null;
var count__38840 = (0);
var i__38841 = (0);
while(true){
if((i__38841 < count__38840)){
var vec__38864 = chunk__38839.cljs$core$IIndexed$_nth$arity$2(null,i__38841);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38864,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38864,(1),null);
var temp__5802__auto___38947 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___38947)){
var effect_fn_38948 = temp__5802__auto___38947;
(effect_fn_38948.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38948.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38948.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38949 = seq__38838;
var G__38950 = chunk__38839;
var G__38951 = count__38840;
var G__38952 = (i__38841 + (1));
seq__38838 = G__38949;
chunk__38839 = G__38950;
count__38840 = G__38951;
i__38841 = G__38952;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38838);
if(temp__5804__auto__){
var seq__38838__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38838__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38838__$1);
var G__38953 = cljs.core.chunk_rest(seq__38838__$1);
var G__38954 = c__5568__auto__;
var G__38955 = cljs.core.count(c__5568__auto__);
var G__38956 = (0);
seq__38838 = G__38953;
chunk__38839 = G__38954;
count__38840 = G__38955;
i__38841 = G__38956;
continue;
} else {
var vec__38870 = cljs.core.first(seq__38838__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38870,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38870,(1),null);
var temp__5802__auto___38957 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___38957)){
var effect_fn_38958 = temp__5802__auto___38957;
(effect_fn_38958.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38958.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38958.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38959 = cljs.core.next(seq__38838__$1);
var G__38960 = null;
var G__38961 = (0);
var G__38962 = (0);
seq__38838 = G__38959;
chunk__38839 = G__38960;
count__38840 = G__38961;
i__38841 = G__38962;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38874){
var map__38875 = p__38874;
var map__38875__$1 = cljs.core.__destructure_map(map__38875);
var effect = map__38875__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38875__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38875__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__38877 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38878 = null;
var count__38879 = (0);
var i__38880 = (0);
while(true){
if((i__38880 < count__38879)){
var effect = chunk__38878.cljs$core$IIndexed$_nth$arity$2(null,i__38880);
re_frame.fx.dispatch_later(effect);


var G__38963 = seq__38877;
var G__38964 = chunk__38878;
var G__38965 = count__38879;
var G__38966 = (i__38880 + (1));
seq__38877 = G__38963;
chunk__38878 = G__38964;
count__38879 = G__38965;
i__38880 = G__38966;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38877);
if(temp__5804__auto__){
var seq__38877__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38877__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38877__$1);
var G__38968 = cljs.core.chunk_rest(seq__38877__$1);
var G__38969 = c__5568__auto__;
var G__38970 = cljs.core.count(c__5568__auto__);
var G__38971 = (0);
seq__38877 = G__38968;
chunk__38878 = G__38969;
count__38879 = G__38970;
i__38880 = G__38971;
continue;
} else {
var effect = cljs.core.first(seq__38877__$1);
re_frame.fx.dispatch_later(effect);


var G__38974 = cljs.core.next(seq__38877__$1);
var G__38975 = null;
var G__38976 = (0);
var G__38977 = (0);
seq__38877 = G__38974;
chunk__38878 = G__38975;
count__38879 = G__38976;
i__38880 = G__38977;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__38882 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38883 = null;
var count__38884 = (0);
var i__38885 = (0);
while(true){
if((i__38885 < count__38884)){
var vec__38893 = chunk__38883.cljs$core$IIndexed$_nth$arity$2(null,i__38885);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38893,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38893,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___38979 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___38979)){
var effect_fn_38980 = temp__5802__auto___38979;
(effect_fn_38980.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38980.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38980.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38981 = seq__38882;
var G__38982 = chunk__38883;
var G__38983 = count__38884;
var G__38984 = (i__38885 + (1));
seq__38882 = G__38981;
chunk__38883 = G__38982;
count__38884 = G__38983;
i__38885 = G__38984;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38882);
if(temp__5804__auto__){
var seq__38882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38882__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38882__$1);
var G__38988 = cljs.core.chunk_rest(seq__38882__$1);
var G__38989 = c__5568__auto__;
var G__38990 = cljs.core.count(c__5568__auto__);
var G__38991 = (0);
seq__38882 = G__38988;
chunk__38883 = G__38989;
count__38884 = G__38990;
i__38885 = G__38991;
continue;
} else {
var vec__38896 = cljs.core.first(seq__38882__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38896,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38896,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___38994 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___38994)){
var effect_fn_38995 = temp__5802__auto___38994;
(effect_fn_38995.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38995.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38995.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38996 = cljs.core.next(seq__38882__$1);
var G__38997 = null;
var G__38998 = (0);
var G__38999 = (0);
seq__38882 = G__38996;
chunk__38883 = G__38997;
count__38884 = G__38998;
i__38885 = G__38999;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__38899 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38900 = null;
var count__38901 = (0);
var i__38902 = (0);
while(true){
if((i__38902 < count__38901)){
var event = chunk__38900.cljs$core$IIndexed$_nth$arity$2(null,i__38902);
re_frame.router.dispatch(event);


var G__39002 = seq__38899;
var G__39003 = chunk__38900;
var G__39004 = count__38901;
var G__39005 = (i__38902 + (1));
seq__38899 = G__39002;
chunk__38900 = G__39003;
count__38901 = G__39004;
i__38902 = G__39005;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38899);
if(temp__5804__auto__){
var seq__38899__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38899__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38899__$1);
var G__39008 = cljs.core.chunk_rest(seq__38899__$1);
var G__39009 = c__5568__auto__;
var G__39010 = cljs.core.count(c__5568__auto__);
var G__39011 = (0);
seq__38899 = G__39008;
chunk__38900 = G__39009;
count__38901 = G__39010;
i__38902 = G__39011;
continue;
} else {
var event = cljs.core.first(seq__38899__$1);
re_frame.router.dispatch(event);


var G__39012 = cljs.core.next(seq__38899__$1);
var G__39013 = null;
var G__39014 = (0);
var G__39015 = (0);
seq__38899 = G__39012;
chunk__38900 = G__39013;
count__38901 = G__39014;
i__38902 = G__39015;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38905 = cljs.core.seq(value);
var chunk__38906 = null;
var count__38907 = (0);
var i__38908 = (0);
while(true){
if((i__38908 < count__38907)){
var event = chunk__38906.cljs$core$IIndexed$_nth$arity$2(null,i__38908);
clear_event(event);


var G__39016 = seq__38905;
var G__39017 = chunk__38906;
var G__39018 = count__38907;
var G__39019 = (i__38908 + (1));
seq__38905 = G__39016;
chunk__38906 = G__39017;
count__38907 = G__39018;
i__38908 = G__39019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38905);
if(temp__5804__auto__){
var seq__38905__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38905__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38905__$1);
var G__39021 = cljs.core.chunk_rest(seq__38905__$1);
var G__39022 = c__5568__auto__;
var G__39023 = cljs.core.count(c__5568__auto__);
var G__39024 = (0);
seq__38905 = G__39021;
chunk__38906 = G__39022;
count__38907 = G__39023;
i__38908 = G__39024;
continue;
} else {
var event = cljs.core.first(seq__38905__$1);
clear_event(event);


var G__39025 = cljs.core.next(seq__38905__$1);
var G__39026 = null;
var G__39027 = (0);
var G__39028 = (0);
seq__38905 = G__39025;
chunk__38906 = G__39026;
count__38907 = G__39027;
i__38908 = G__39028;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
