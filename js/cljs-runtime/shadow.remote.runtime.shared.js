goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__29963){
var map__29965 = p__29963;
var map__29965__$1 = cljs.core.__destructure_map(map__29965);
var runtime = map__29965__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29965__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_30332 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_30332)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__29975 = runtime;
var G__29976 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_30332);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__29975,G__29976) : shadow.remote.runtime.shared.process.call(null,G__29975,G__29976));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__29981,res){
var map__29982 = p__29981;
var map__29982__$1 = cljs.core.__destructure_map(map__29982);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29982__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29982__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__29984 = res;
var G__29984__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29984,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__29984);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29984__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__29984__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__29994 = arguments.length;
switch (G__29994) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__29995,msg,handlers,timeout_after_ms){
var map__29996 = p__29995;
var map__29996__$1 = cljs.core.__destructure_map(map__29996);
var runtime = map__29996__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5769__auto___30347 = arguments.length;
var i__5770__auto___30348 = (0);
while(true){
if((i__5770__auto___30348 < len__5769__auto___30347)){
args__5775__auto__.push((arguments[i__5770__auto___30348]));

var G__30349 = (i__5770__auto___30348 + (1));
i__5770__auto___30348 = G__30349;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30026,ev,args){
var map__30027 = p__30026;
var map__30027__$1 = cljs.core.__destructure_map(map__30027);
var runtime = map__30027__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30027__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__30029 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30032 = null;
var count__30033 = (0);
var i__30034 = (0);
while(true){
if((i__30034 < count__30033)){
var ext = chunk__30032.cljs$core$IIndexed$_nth$arity$2(null,i__30034);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30359 = seq__30029;
var G__30360 = chunk__30032;
var G__30361 = count__30033;
var G__30362 = (i__30034 + (1));
seq__30029 = G__30359;
chunk__30032 = G__30360;
count__30033 = G__30361;
i__30034 = G__30362;
continue;
} else {
var G__30363 = seq__30029;
var G__30364 = chunk__30032;
var G__30365 = count__30033;
var G__30366 = (i__30034 + (1));
seq__30029 = G__30363;
chunk__30032 = G__30364;
count__30033 = G__30365;
i__30034 = G__30366;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30029);
if(temp__5753__auto__){
var seq__30029__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30029__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30029__$1);
var G__30367 = cljs.core.chunk_rest(seq__30029__$1);
var G__30368 = c__5568__auto__;
var G__30369 = cljs.core.count(c__5568__auto__);
var G__30370 = (0);
seq__30029 = G__30367;
chunk__30032 = G__30368;
count__30033 = G__30369;
i__30034 = G__30370;
continue;
} else {
var ext = cljs.core.first(seq__30029__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30372 = cljs.core.next(seq__30029__$1);
var G__30373 = null;
var G__30374 = (0);
var G__30375 = (0);
seq__30029 = G__30372;
chunk__30032 = G__30373;
count__30033 = G__30374;
i__30034 = G__30375;
continue;
} else {
var G__30376 = cljs.core.next(seq__30029__$1);
var G__30377 = null;
var G__30378 = (0);
var G__30379 = (0);
seq__30029 = G__30376;
chunk__30032 = G__30377;
count__30033 = G__30378;
i__30034 = G__30379;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq30012){
var G__30013 = cljs.core.first(seq30012);
var seq30012__$1 = cljs.core.next(seq30012);
var G__30014 = cljs.core.first(seq30012__$1);
var seq30012__$2 = cljs.core.next(seq30012__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30013,G__30014,seq30012__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__30094,p__30095){
var map__30098 = p__30094;
var map__30098__$1 = cljs.core.__destructure_map(map__30098);
var runtime = map__30098__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30099 = p__30095;
var map__30099__$1 = cljs.core.__destructure_map(map__30099);
var msg = map__30099__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30099__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__30104 = cljs.core.deref(state_ref);
var map__30104__$1 = cljs.core.__destructure_map(map__30104);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30104__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30104__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__30123,msg){
var map__30129 = p__30123;
var map__30129__$1 = cljs.core.__destructure_map(map__30129);
var runtime = map__30129__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30129__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__30146,key,p__30147){
var map__30150 = p__30146;
var map__30150__$1 = cljs.core.__destructure_map(map__30150);
var state = map__30150__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30150__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__30151 = p__30147;
var map__30151__$1 = cljs.core.__destructure_map(map__30151);
var spec = map__30151__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30151__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__30156,key,spec){
var map__30157 = p__30156;
var map__30157__$1 = cljs.core.__destructure_map(map__30157);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30157__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__30159_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__30159_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__30161_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__30161_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__30162_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__30162_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__30163_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__30163_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__30164_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__30164_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__30208,key){
var map__30210 = p__30208;
var map__30210__$1 = cljs.core.__destructure_map(map__30210);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30210__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__30224,msg){
var map__30225 = p__30224;
var map__30225__$1 = cljs.core.__destructure_map(map__30225);
var runtime = map__30225__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30225__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__30239,p__30240){
var map__30241 = p__30239;
var map__30241__$1 = cljs.core.__destructure_map(map__30241);
var runtime = map__30241__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30241__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30242 = p__30240;
var map__30242__$1 = cljs.core.__destructure_map(map__30242);
var msg = map__30242__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30242__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30242__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__30257 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30259 = null;
var count__30260 = (0);
var i__30261 = (0);
while(true){
if((i__30261 < count__30260)){
var map__30283 = chunk__30259.cljs$core$IIndexed$_nth$arity$2(null,i__30261);
var map__30283__$1 = cljs.core.__destructure_map(map__30283);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30283__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__30411 = seq__30257;
var G__30412 = chunk__30259;
var G__30413 = count__30260;
var G__30414 = (i__30261 + (1));
seq__30257 = G__30411;
chunk__30259 = G__30412;
count__30260 = G__30413;
i__30261 = G__30414;
continue;
} else {
var G__30415 = seq__30257;
var G__30416 = chunk__30259;
var G__30417 = count__30260;
var G__30418 = (i__30261 + (1));
seq__30257 = G__30415;
chunk__30259 = G__30416;
count__30260 = G__30417;
i__30261 = G__30418;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30257);
if(temp__5753__auto__){
var seq__30257__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30257__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30257__$1);
var G__30420 = cljs.core.chunk_rest(seq__30257__$1);
var G__30421 = c__5568__auto__;
var G__30422 = cljs.core.count(c__5568__auto__);
var G__30423 = (0);
seq__30257 = G__30420;
chunk__30259 = G__30421;
count__30260 = G__30422;
i__30261 = G__30423;
continue;
} else {
var map__30301 = cljs.core.first(seq__30257__$1);
var map__30301__$1 = cljs.core.__destructure_map(map__30301);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30301__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__30426 = cljs.core.next(seq__30257__$1);
var G__30427 = null;
var G__30428 = (0);
var G__30429 = (0);
seq__30257 = G__30426;
chunk__30259 = G__30427;
count__30260 = G__30428;
i__30261 = G__30429;
continue;
} else {
var G__30432 = cljs.core.next(seq__30257__$1);
var G__30433 = null;
var G__30434 = (0);
var G__30435 = (0);
seq__30257 = G__30432;
chunk__30259 = G__30433;
count__30260 = G__30434;
i__30261 = G__30435;
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
