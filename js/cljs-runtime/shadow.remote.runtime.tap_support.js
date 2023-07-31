goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36231,p__36232){
var map__36233 = p__36231;
var map__36233__$1 = cljs.core.__destructure_map(map__36233);
var svc = map__36233__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36233__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36233__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36233__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36234 = p__36232;
var map__36234__$1 = cljs.core.__destructure_map(map__36234);
var msg = map__36234__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36234__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36234__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36234__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36234__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36241,p__36242){
var map__36243 = p__36241;
var map__36243__$1 = cljs.core.__destructure_map(map__36243);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36243__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36244 = p__36242;
var map__36244__$1 = cljs.core.__destructure_map(map__36244);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36244__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36246,p__36247){
var map__36248 = p__36246;
var map__36248__$1 = cljs.core.__destructure_map(map__36248);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36248__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36248__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36249 = p__36247;
var map__36249__$1 = cljs.core.__destructure_map(map__36249);
var msg = map__36249__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36249__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36252,tid){
var map__36253 = p__36252;
var map__36253__$1 = cljs.core.__destructure_map(map__36253);
var svc = map__36253__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36263 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36264 = null;
var count__36265 = (0);
var i__36266 = (0);
while(true){
if((i__36266 < count__36265)){
var vec__36280 = chunk__36264.cljs$core$IIndexed$_nth$arity$2(null,i__36266);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36280,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36280,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36319 = seq__36263;
var G__36320 = chunk__36264;
var G__36321 = count__36265;
var G__36322 = (i__36266 + (1));
seq__36263 = G__36319;
chunk__36264 = G__36320;
count__36265 = G__36321;
i__36266 = G__36322;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36263);
if(temp__5753__auto__){
var seq__36263__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36263__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36263__$1);
var G__36323 = cljs.core.chunk_rest(seq__36263__$1);
var G__36324 = c__5568__auto__;
var G__36325 = cljs.core.count(c__5568__auto__);
var G__36326 = (0);
seq__36263 = G__36323;
chunk__36264 = G__36324;
count__36265 = G__36325;
i__36266 = G__36326;
continue;
} else {
var vec__36299 = cljs.core.first(seq__36263__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36299,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36299,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36332 = cljs.core.next(seq__36263__$1);
var G__36333 = null;
var G__36334 = (0);
var G__36335 = (0);
seq__36263 = G__36332;
chunk__36264 = G__36333;
count__36265 = G__36334;
i__36266 = G__36335;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36255_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36255_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36256_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36256_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36257_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36257_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36258_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36258_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36307){
var map__36308 = p__36307;
var map__36308__$1 = cljs.core.__destructure_map(map__36308);
var svc = map__36308__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36308__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36308__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
