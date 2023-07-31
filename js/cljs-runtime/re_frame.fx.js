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
var _STAR_current_trace_STAR__orig_val__38940 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38941 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38941);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___39006 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___39006)){
var new_db_39007 = temp__5804__auto___39006;
var fexpr__38942_39008 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38942_39008.cljs$core$IFn$_invoke$arity$1 ? fexpr__38942_39008.cljs$core$IFn$_invoke$arity$1(new_db_39007) : fexpr__38942_39008.call(null,new_db_39007));
} else {
}

var seq__38943 = cljs.core.seq(effects_without_db);
var chunk__38944 = null;
var count__38945 = (0);
var i__38946 = (0);
while(true){
if((i__38946 < count__38945)){
var vec__38953 = chunk__38944.cljs$core$IIndexed$_nth$arity$2(null,i__38946);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38953,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38953,(1),null);
var temp__5802__auto___39009 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39009)){
var effect_fn_39010 = temp__5802__auto___39009;
(effect_fn_39010.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39010.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39010.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39011 = seq__38943;
var G__39012 = chunk__38944;
var G__39013 = count__38945;
var G__39014 = (i__38946 + (1));
seq__38943 = G__39011;
chunk__38944 = G__39012;
count__38945 = G__39013;
i__38946 = G__39014;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38943);
if(temp__5804__auto__){
var seq__38943__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38943__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38943__$1);
var G__39015 = cljs.core.chunk_rest(seq__38943__$1);
var G__39016 = c__5568__auto__;
var G__39017 = cljs.core.count(c__5568__auto__);
var G__39018 = (0);
seq__38943 = G__39015;
chunk__38944 = G__39016;
count__38945 = G__39017;
i__38946 = G__39018;
continue;
} else {
var vec__38956 = cljs.core.first(seq__38943__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38956,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38956,(1),null);
var temp__5802__auto___39019 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39019)){
var effect_fn_39020 = temp__5802__auto___39019;
(effect_fn_39020.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39020.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39020.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39021 = cljs.core.next(seq__38943__$1);
var G__39022 = null;
var G__39023 = (0);
var G__39024 = (0);
seq__38943 = G__39021;
chunk__38944 = G__39022;
count__38945 = G__39023;
i__38946 = G__39024;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38557__auto___39025 = re_frame.interop.now();
var duration__38558__auto___39026 = (end__38557__auto___39025 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38558__auto___39026,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38557__auto___39025);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38940);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___39027 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___39027)){
var new_db_39028 = temp__5804__auto___39027;
var fexpr__38959_39029 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38959_39029.cljs$core$IFn$_invoke$arity$1 ? fexpr__38959_39029.cljs$core$IFn$_invoke$arity$1(new_db_39028) : fexpr__38959_39029.call(null,new_db_39028));
} else {
}

var seq__38960 = cljs.core.seq(effects_without_db);
var chunk__38961 = null;
var count__38962 = (0);
var i__38963 = (0);
while(true){
if((i__38963 < count__38962)){
var vec__38970 = chunk__38961.cljs$core$IIndexed$_nth$arity$2(null,i__38963);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38970,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38970,(1),null);
var temp__5802__auto___39030 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39030)){
var effect_fn_39031 = temp__5802__auto___39030;
(effect_fn_39031.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39031.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39031.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39032 = seq__38960;
var G__39033 = chunk__38961;
var G__39034 = count__38962;
var G__39035 = (i__38963 + (1));
seq__38960 = G__39032;
chunk__38961 = G__39033;
count__38962 = G__39034;
i__38963 = G__39035;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38960);
if(temp__5804__auto__){
var seq__38960__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38960__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38960__$1);
var G__39036 = cljs.core.chunk_rest(seq__38960__$1);
var G__39037 = c__5568__auto__;
var G__39038 = cljs.core.count(c__5568__auto__);
var G__39039 = (0);
seq__38960 = G__39036;
chunk__38961 = G__39037;
count__38962 = G__39038;
i__38963 = G__39039;
continue;
} else {
var vec__38973 = cljs.core.first(seq__38960__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38973,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38973,(1),null);
var temp__5802__auto___39040 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39040)){
var effect_fn_39041 = temp__5802__auto___39040;
(effect_fn_39041.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39041.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39041.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39042 = cljs.core.next(seq__38960__$1);
var G__39043 = null;
var G__39044 = (0);
var G__39045 = (0);
seq__38960 = G__39042;
chunk__38961 = G__39043;
count__38962 = G__39044;
i__38963 = G__39045;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38976){
var map__38977 = p__38976;
var map__38977__$1 = cljs.core.__destructure_map(map__38977);
var effect = map__38977__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38977__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38977__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__38978 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38979 = null;
var count__38980 = (0);
var i__38981 = (0);
while(true){
if((i__38981 < count__38980)){
var effect = chunk__38979.cljs$core$IIndexed$_nth$arity$2(null,i__38981);
re_frame.fx.dispatch_later(effect);


var G__39046 = seq__38978;
var G__39047 = chunk__38979;
var G__39048 = count__38980;
var G__39049 = (i__38981 + (1));
seq__38978 = G__39046;
chunk__38979 = G__39047;
count__38980 = G__39048;
i__38981 = G__39049;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38978);
if(temp__5804__auto__){
var seq__38978__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38978__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38978__$1);
var G__39050 = cljs.core.chunk_rest(seq__38978__$1);
var G__39051 = c__5568__auto__;
var G__39052 = cljs.core.count(c__5568__auto__);
var G__39053 = (0);
seq__38978 = G__39050;
chunk__38979 = G__39051;
count__38980 = G__39052;
i__38981 = G__39053;
continue;
} else {
var effect = cljs.core.first(seq__38978__$1);
re_frame.fx.dispatch_later(effect);


var G__39054 = cljs.core.next(seq__38978__$1);
var G__39055 = null;
var G__39056 = (0);
var G__39057 = (0);
seq__38978 = G__39054;
chunk__38979 = G__39055;
count__38980 = G__39056;
i__38981 = G__39057;
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
var seq__38982 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38983 = null;
var count__38984 = (0);
var i__38985 = (0);
while(true){
if((i__38985 < count__38984)){
var vec__38992 = chunk__38983.cljs$core$IIndexed$_nth$arity$2(null,i__38985);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38992,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38992,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___39058 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39058)){
var effect_fn_39059 = temp__5802__auto___39058;
(effect_fn_39059.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39059.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39059.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39060 = seq__38982;
var G__39061 = chunk__38983;
var G__39062 = count__38984;
var G__39063 = (i__38985 + (1));
seq__38982 = G__39060;
chunk__38983 = G__39061;
count__38984 = G__39062;
i__38985 = G__39063;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38982);
if(temp__5804__auto__){
var seq__38982__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38982__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38982__$1);
var G__39064 = cljs.core.chunk_rest(seq__38982__$1);
var G__39065 = c__5568__auto__;
var G__39066 = cljs.core.count(c__5568__auto__);
var G__39067 = (0);
seq__38982 = G__39064;
chunk__38983 = G__39065;
count__38984 = G__39066;
i__38985 = G__39067;
continue;
} else {
var vec__38995 = cljs.core.first(seq__38982__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38995,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38995,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___39068 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39068)){
var effect_fn_39069 = temp__5802__auto___39068;
(effect_fn_39069.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39069.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39069.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39070 = cljs.core.next(seq__38982__$1);
var G__39071 = null;
var G__39072 = (0);
var G__39073 = (0);
seq__38982 = G__39070;
chunk__38983 = G__39071;
count__38984 = G__39072;
i__38985 = G__39073;
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
var seq__38998 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38999 = null;
var count__39000 = (0);
var i__39001 = (0);
while(true){
if((i__39001 < count__39000)){
var event = chunk__38999.cljs$core$IIndexed$_nth$arity$2(null,i__39001);
re_frame.router.dispatch(event);


var G__39074 = seq__38998;
var G__39075 = chunk__38999;
var G__39076 = count__39000;
var G__39077 = (i__39001 + (1));
seq__38998 = G__39074;
chunk__38999 = G__39075;
count__39000 = G__39076;
i__39001 = G__39077;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38998);
if(temp__5804__auto__){
var seq__38998__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38998__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38998__$1);
var G__39078 = cljs.core.chunk_rest(seq__38998__$1);
var G__39079 = c__5568__auto__;
var G__39080 = cljs.core.count(c__5568__auto__);
var G__39081 = (0);
seq__38998 = G__39078;
chunk__38999 = G__39079;
count__39000 = G__39080;
i__39001 = G__39081;
continue;
} else {
var event = cljs.core.first(seq__38998__$1);
re_frame.router.dispatch(event);


var G__39082 = cljs.core.next(seq__38998__$1);
var G__39083 = null;
var G__39084 = (0);
var G__39085 = (0);
seq__38998 = G__39082;
chunk__38999 = G__39083;
count__39000 = G__39084;
i__39001 = G__39085;
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
var seq__39002 = cljs.core.seq(value);
var chunk__39003 = null;
var count__39004 = (0);
var i__39005 = (0);
while(true){
if((i__39005 < count__39004)){
var event = chunk__39003.cljs$core$IIndexed$_nth$arity$2(null,i__39005);
clear_event(event);


var G__39086 = seq__39002;
var G__39087 = chunk__39003;
var G__39088 = count__39004;
var G__39089 = (i__39005 + (1));
seq__39002 = G__39086;
chunk__39003 = G__39087;
count__39004 = G__39088;
i__39005 = G__39089;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39002);
if(temp__5804__auto__){
var seq__39002__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39002__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39002__$1);
var G__39090 = cljs.core.chunk_rest(seq__39002__$1);
var G__39091 = c__5568__auto__;
var G__39092 = cljs.core.count(c__5568__auto__);
var G__39093 = (0);
seq__39002 = G__39090;
chunk__39003 = G__39091;
count__39004 = G__39092;
i__39005 = G__39093;
continue;
} else {
var event = cljs.core.first(seq__39002__$1);
clear_event(event);


var G__39094 = cljs.core.next(seq__39002__$1);
var G__39095 = null;
var G__39096 = (0);
var G__39097 = (0);
seq__39002 = G__39094;
chunk__39003 = G__39095;
count__39004 = G__39096;
i__39005 = G__39097;
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
