goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__29675){
var map__29676 = p__29675;
var map__29676__$1 = cljs.core.__destructure_map(map__29676);
var runtime = map__29676__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29676__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_29884 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_29884)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__29706 = runtime;
var G__29707 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_29884);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__29706,G__29707) : shadow.remote.runtime.shared.process.call(null,G__29706,G__29707));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__29710,res){
var map__29711 = p__29710;
var map__29711__$1 = cljs.core.__destructure_map(map__29711);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29711__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29711__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__29714 = res;
var G__29714__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29714,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__29714);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29714__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__29714__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__29720 = arguments.length;
switch (G__29720) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__29721,msg,handlers,timeout_after_ms){
var map__29722 = p__29721;
var map__29722__$1 = cljs.core.__destructure_map(map__29722);
var runtime = map__29722__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29722__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29894 = arguments.length;
var i__5770__auto___29895 = (0);
while(true){
if((i__5770__auto___29895 < len__5769__auto___29894)){
args__5775__auto__.push((arguments[i__5770__auto___29895]));

var G__29896 = (i__5770__auto___29895 + (1));
i__5770__auto___29895 = G__29896;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__29760,ev,args){
var map__29761 = p__29760;
var map__29761__$1 = cljs.core.__destructure_map(map__29761);
var runtime = map__29761__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29761__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__29762 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29765 = null;
var count__29766 = (0);
var i__29767 = (0);
while(true){
if((i__29767 < count__29766)){
var ext = chunk__29765.cljs$core$IIndexed$_nth$arity$2(null,i__29767);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29906 = seq__29762;
var G__29907 = chunk__29765;
var G__29908 = count__29766;
var G__29909 = (i__29767 + (1));
seq__29762 = G__29906;
chunk__29765 = G__29907;
count__29766 = G__29908;
i__29767 = G__29909;
continue;
} else {
var G__29910 = seq__29762;
var G__29911 = chunk__29765;
var G__29912 = count__29766;
var G__29913 = (i__29767 + (1));
seq__29762 = G__29910;
chunk__29765 = G__29911;
count__29766 = G__29912;
i__29767 = G__29913;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29762);
if(temp__5804__auto__){
var seq__29762__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29762__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29762__$1);
var G__29914 = cljs.core.chunk_rest(seq__29762__$1);
var G__29915 = c__5568__auto__;
var G__29916 = cljs.core.count(c__5568__auto__);
var G__29917 = (0);
seq__29762 = G__29914;
chunk__29765 = G__29915;
count__29766 = G__29916;
i__29767 = G__29917;
continue;
} else {
var ext = cljs.core.first(seq__29762__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29919 = cljs.core.next(seq__29762__$1);
var G__29920 = null;
var G__29921 = (0);
var G__29922 = (0);
seq__29762 = G__29919;
chunk__29765 = G__29920;
count__29766 = G__29921;
i__29767 = G__29922;
continue;
} else {
var G__29923 = cljs.core.next(seq__29762__$1);
var G__29924 = null;
var G__29925 = (0);
var G__29926 = (0);
seq__29762 = G__29923;
chunk__29765 = G__29924;
count__29766 = G__29925;
i__29767 = G__29926;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq29730){
var G__29731 = cljs.core.first(seq29730);
var seq29730__$1 = cljs.core.next(seq29730);
var G__29732 = cljs.core.first(seq29730__$1);
var seq29730__$2 = cljs.core.next(seq29730__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29731,G__29732,seq29730__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__29800,p__29801){
var map__29802 = p__29800;
var map__29802__$1 = cljs.core.__destructure_map(map__29802);
var runtime = map__29802__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29802__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29803 = p__29801;
var map__29803__$1 = cljs.core.__destructure_map(map__29803);
var msg = map__29803__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__29808 = cljs.core.deref(state_ref);
var map__29808__$1 = cljs.core.__destructure_map(map__29808);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29808__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29808__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__29809,msg){
var map__29810 = p__29809;
var map__29810__$1 = cljs.core.__destructure_map(map__29810);
var runtime = map__29810__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29810__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__29818,key,p__29819){
var map__29820 = p__29818;
var map__29820__$1 = cljs.core.__destructure_map(map__29820);
var state = map__29820__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29820__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__29821 = p__29819;
var map__29821__$1 = cljs.core.__destructure_map(map__29821);
var spec = map__29821__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29821__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__29822,key,spec){
var map__29823 = p__29822;
var map__29823__$1 = cljs.core.__destructure_map(map__29823);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29823__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__29826_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__29826_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__29827_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__29827_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__29828_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__29828_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__29829_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__29829_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__29830_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__29830_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__29844,key){
var map__29846 = p__29844;
var map__29846__$1 = cljs.core.__destructure_map(map__29846);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29846__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__29851,msg){
var map__29852 = p__29851;
var map__29852__$1 = cljs.core.__destructure_map(map__29852);
var runtime = map__29852__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29852__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__29856,p__29857){
var map__29858 = p__29856;
var map__29858__$1 = cljs.core.__destructure_map(map__29858);
var runtime = map__29858__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29859 = p__29857;
var map__29859__$1 = cljs.core.__destructure_map(map__29859);
var msg = map__29859__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29859__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29859__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__29862 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29864 = null;
var count__29865 = (0);
var i__29866 = (0);
while(true){
if((i__29866 < count__29865)){
var map__29874 = chunk__29864.cljs$core$IIndexed$_nth$arity$2(null,i__29866);
var map__29874__$1 = cljs.core.__destructure_map(map__29874);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29874__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29979 = seq__29862;
var G__29980 = chunk__29864;
var G__29981 = count__29865;
var G__29982 = (i__29866 + (1));
seq__29862 = G__29979;
chunk__29864 = G__29980;
count__29865 = G__29981;
i__29866 = G__29982;
continue;
} else {
var G__29983 = seq__29862;
var G__29984 = chunk__29864;
var G__29985 = count__29865;
var G__29986 = (i__29866 + (1));
seq__29862 = G__29983;
chunk__29864 = G__29984;
count__29865 = G__29985;
i__29866 = G__29986;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29862);
if(temp__5804__auto__){
var seq__29862__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29862__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29862__$1);
var G__29987 = cljs.core.chunk_rest(seq__29862__$1);
var G__29988 = c__5568__auto__;
var G__29989 = cljs.core.count(c__5568__auto__);
var G__29990 = (0);
seq__29862 = G__29987;
chunk__29864 = G__29988;
count__29865 = G__29989;
i__29866 = G__29990;
continue;
} else {
var map__29877 = cljs.core.first(seq__29862__$1);
var map__29877__$1 = cljs.core.__destructure_map(map__29877);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29877__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29992 = cljs.core.next(seq__29862__$1);
var G__29993 = null;
var G__29994 = (0);
var G__29995 = (0);
seq__29862 = G__29992;
chunk__29864 = G__29993;
count__29865 = G__29994;
i__29866 = G__29995;
continue;
} else {
var G__29999 = cljs.core.next(seq__29862__$1);
var G__30000 = null;
var G__30001 = (0);
var G__30002 = (0);
seq__29862 = G__29999;
chunk__29864 = G__30000;
count__29865 = G__30001;
i__29866 = G__30002;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
