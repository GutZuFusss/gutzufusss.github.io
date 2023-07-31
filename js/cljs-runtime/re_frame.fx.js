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
var _STAR_current_trace_STAR__orig_val__38845 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38846 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38846);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___38940 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___38940)){
var new_db_38941 = temp__5753__auto___38940;
var fexpr__38847_38942 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38847_38942.cljs$core$IFn$_invoke$arity$1 ? fexpr__38847_38942.cljs$core$IFn$_invoke$arity$1(new_db_38941) : fexpr__38847_38942.call(null,new_db_38941));
} else {
}

var seq__38848 = cljs.core.seq(effects_without_db);
var chunk__38849 = null;
var count__38850 = (0);
var i__38851 = (0);
while(true){
if((i__38851 < count__38850)){
var vec__38858 = chunk__38849.cljs$core$IIndexed$_nth$arity$2(null,i__38851);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38858,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38858,(1),null);
var temp__5751__auto___38943 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38943)){
var effect_fn_38944 = temp__5751__auto___38943;
(effect_fn_38944.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38944.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38944.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38945 = seq__38848;
var G__38946 = chunk__38849;
var G__38947 = count__38850;
var G__38948 = (i__38851 + (1));
seq__38848 = G__38945;
chunk__38849 = G__38946;
count__38850 = G__38947;
i__38851 = G__38948;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38848);
if(temp__5753__auto__){
var seq__38848__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38848__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38848__$1);
var G__38949 = cljs.core.chunk_rest(seq__38848__$1);
var G__38950 = c__5568__auto__;
var G__38951 = cljs.core.count(c__5568__auto__);
var G__38952 = (0);
seq__38848 = G__38949;
chunk__38849 = G__38950;
count__38850 = G__38951;
i__38851 = G__38952;
continue;
} else {
var vec__38861 = cljs.core.first(seq__38848__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38861,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38861,(1),null);
var temp__5751__auto___38953 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38953)){
var effect_fn_38954 = temp__5751__auto___38953;
(effect_fn_38954.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38954.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38954.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38955 = cljs.core.next(seq__38848__$1);
var G__38956 = null;
var G__38957 = (0);
var G__38958 = (0);
seq__38848 = G__38955;
chunk__38849 = G__38956;
count__38850 = G__38957;
i__38851 = G__38958;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38494__auto___38959 = re_frame.interop.now();
var duration__38495__auto___38960 = (end__38494__auto___38959 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38495__auto___38960,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38494__auto___38959);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38845);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___38961 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___38961)){
var new_db_38962 = temp__5753__auto___38961;
var fexpr__38865_38963 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38865_38963.cljs$core$IFn$_invoke$arity$1 ? fexpr__38865_38963.cljs$core$IFn$_invoke$arity$1(new_db_38962) : fexpr__38865_38963.call(null,new_db_38962));
} else {
}

var seq__38866 = cljs.core.seq(effects_without_db);
var chunk__38867 = null;
var count__38868 = (0);
var i__38869 = (0);
while(true){
if((i__38869 < count__38868)){
var vec__38891 = chunk__38867.cljs$core$IIndexed$_nth$arity$2(null,i__38869);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38891,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38891,(1),null);
var temp__5751__auto___38964 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38964)){
var effect_fn_38965 = temp__5751__auto___38964;
(effect_fn_38965.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38965.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38965.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38966 = seq__38866;
var G__38967 = chunk__38867;
var G__38968 = count__38868;
var G__38969 = (i__38869 + (1));
seq__38866 = G__38966;
chunk__38867 = G__38967;
count__38868 = G__38968;
i__38869 = G__38969;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38866);
if(temp__5753__auto__){
var seq__38866__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38866__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38866__$1);
var G__38970 = cljs.core.chunk_rest(seq__38866__$1);
var G__38971 = c__5568__auto__;
var G__38972 = cljs.core.count(c__5568__auto__);
var G__38973 = (0);
seq__38866 = G__38970;
chunk__38867 = G__38971;
count__38868 = G__38972;
i__38869 = G__38973;
continue;
} else {
var vec__38894 = cljs.core.first(seq__38866__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38894,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38894,(1),null);
var temp__5751__auto___38974 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38974)){
var effect_fn_38975 = temp__5751__auto___38974;
(effect_fn_38975.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38975.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38975.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38976 = cljs.core.next(seq__38866__$1);
var G__38977 = null;
var G__38978 = (0);
var G__38979 = (0);
seq__38866 = G__38976;
chunk__38867 = G__38977;
count__38868 = G__38978;
i__38869 = G__38979;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38897){
var map__38898 = p__38897;
var map__38898__$1 = cljs.core.__destructure_map(map__38898);
var effect = map__38898__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__38901 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38902 = null;
var count__38903 = (0);
var i__38904 = (0);
while(true){
if((i__38904 < count__38903)){
var effect = chunk__38902.cljs$core$IIndexed$_nth$arity$2(null,i__38904);
re_frame.fx.dispatch_later(effect);


var G__38980 = seq__38901;
var G__38981 = chunk__38902;
var G__38982 = count__38903;
var G__38983 = (i__38904 + (1));
seq__38901 = G__38980;
chunk__38902 = G__38981;
count__38903 = G__38982;
i__38904 = G__38983;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38901);
if(temp__5753__auto__){
var seq__38901__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38901__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38901__$1);
var G__38984 = cljs.core.chunk_rest(seq__38901__$1);
var G__38985 = c__5568__auto__;
var G__38986 = cljs.core.count(c__5568__auto__);
var G__38987 = (0);
seq__38901 = G__38984;
chunk__38902 = G__38985;
count__38903 = G__38986;
i__38904 = G__38987;
continue;
} else {
var effect = cljs.core.first(seq__38901__$1);
re_frame.fx.dispatch_later(effect);


var G__38988 = cljs.core.next(seq__38901__$1);
var G__38989 = null;
var G__38990 = (0);
var G__38991 = (0);
seq__38901 = G__38988;
chunk__38902 = G__38989;
count__38903 = G__38990;
i__38904 = G__38991;
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
var seq__38907 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38908 = null;
var count__38909 = (0);
var i__38910 = (0);
while(true){
if((i__38910 < count__38909)){
var vec__38920 = chunk__38908.cljs$core$IIndexed$_nth$arity$2(null,i__38910);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38920,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38920,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___38992 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38992)){
var effect_fn_38993 = temp__5751__auto___38992;
(effect_fn_38993.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38993.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38993.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38994 = seq__38907;
var G__38995 = chunk__38908;
var G__38996 = count__38909;
var G__38997 = (i__38910 + (1));
seq__38907 = G__38994;
chunk__38908 = G__38995;
count__38909 = G__38996;
i__38910 = G__38997;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38907);
if(temp__5753__auto__){
var seq__38907__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38907__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38907__$1);
var G__38998 = cljs.core.chunk_rest(seq__38907__$1);
var G__38999 = c__5568__auto__;
var G__39000 = cljs.core.count(c__5568__auto__);
var G__39001 = (0);
seq__38907 = G__38998;
chunk__38908 = G__38999;
count__38909 = G__39000;
i__38910 = G__39001;
continue;
} else {
var vec__38924 = cljs.core.first(seq__38907__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38924,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38924,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39002 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39002)){
var effect_fn_39003 = temp__5751__auto___39002;
(effect_fn_39003.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39003.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39003.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39004 = cljs.core.next(seq__38907__$1);
var G__39005 = null;
var G__39006 = (0);
var G__39007 = (0);
seq__38907 = G__39004;
chunk__38908 = G__39005;
count__38909 = G__39006;
i__38910 = G__39007;
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
var seq__38928 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38929 = null;
var count__38930 = (0);
var i__38931 = (0);
while(true){
if((i__38931 < count__38930)){
var event = chunk__38929.cljs$core$IIndexed$_nth$arity$2(null,i__38931);
re_frame.router.dispatch(event);


var G__39008 = seq__38928;
var G__39009 = chunk__38929;
var G__39010 = count__38930;
var G__39011 = (i__38931 + (1));
seq__38928 = G__39008;
chunk__38929 = G__39009;
count__38930 = G__39010;
i__38931 = G__39011;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38928);
if(temp__5753__auto__){
var seq__38928__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38928__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38928__$1);
var G__39012 = cljs.core.chunk_rest(seq__38928__$1);
var G__39013 = c__5568__auto__;
var G__39014 = cljs.core.count(c__5568__auto__);
var G__39015 = (0);
seq__38928 = G__39012;
chunk__38929 = G__39013;
count__38930 = G__39014;
i__38931 = G__39015;
continue;
} else {
var event = cljs.core.first(seq__38928__$1);
re_frame.router.dispatch(event);


var G__39016 = cljs.core.next(seq__38928__$1);
var G__39017 = null;
var G__39018 = (0);
var G__39019 = (0);
seq__38928 = G__39016;
chunk__38929 = G__39017;
count__38930 = G__39018;
i__38931 = G__39019;
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
var seq__38936 = cljs.core.seq(value);
var chunk__38937 = null;
var count__38938 = (0);
var i__38939 = (0);
while(true){
if((i__38939 < count__38938)){
var event = chunk__38937.cljs$core$IIndexed$_nth$arity$2(null,i__38939);
clear_event(event);


var G__39020 = seq__38936;
var G__39021 = chunk__38937;
var G__39022 = count__38938;
var G__39023 = (i__38939 + (1));
seq__38936 = G__39020;
chunk__38937 = G__39021;
count__38938 = G__39022;
i__38939 = G__39023;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38936);
if(temp__5753__auto__){
var seq__38936__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38936__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38936__$1);
var G__39025 = cljs.core.chunk_rest(seq__38936__$1);
var G__39026 = c__5568__auto__;
var G__39027 = cljs.core.count(c__5568__auto__);
var G__39028 = (0);
seq__38936 = G__39025;
chunk__38937 = G__39026;
count__38938 = G__39027;
i__38939 = G__39028;
continue;
} else {
var event = cljs.core.first(seq__38936__$1);
clear_event(event);


var G__39030 = cljs.core.next(seq__38936__$1);
var G__39031 = null;
var G__39032 = (0);
var G__39033 = (0);
seq__38936 = G__39030;
chunk__38937 = G__39031;
count__38938 = G__39032;
i__38939 = G__39033;
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
