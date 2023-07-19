goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37437 = arguments.length;
var i__5770__auto___37438 = (0);
while(true){
if((i__5770__auto___37438 < len__5769__auto___37437)){
args__5775__auto__.push((arguments[i__5770__auto___37438]));

var G__37439 = (i__5770__auto___37438 + (1));
i__5770__auto___37438 = G__37439;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37012){
var G__37013 = cljs.core.first(seq37012);
var seq37012__$1 = cljs.core.next(seq37012);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37013,seq37012__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37017 = cljs.core.seq(sources);
var chunk__37018 = null;
var count__37019 = (0);
var i__37020 = (0);
while(true){
if((i__37020 < count__37019)){
var map__37027 = chunk__37018.cljs$core$IIndexed$_nth$arity$2(null,i__37020);
var map__37027__$1 = cljs.core.__destructure_map(map__37027);
var src = map__37027__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37027__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37027__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37027__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37027__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37028){var e_37440 = e37028;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37440);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37440.message)].join('')));
}

var G__37441 = seq__37017;
var G__37442 = chunk__37018;
var G__37443 = count__37019;
var G__37444 = (i__37020 + (1));
seq__37017 = G__37441;
chunk__37018 = G__37442;
count__37019 = G__37443;
i__37020 = G__37444;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37017);
if(temp__5804__auto__){
var seq__37017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37017__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37017__$1);
var G__37449 = cljs.core.chunk_rest(seq__37017__$1);
var G__37450 = c__5568__auto__;
var G__37451 = cljs.core.count(c__5568__auto__);
var G__37452 = (0);
seq__37017 = G__37449;
chunk__37018 = G__37450;
count__37019 = G__37451;
i__37020 = G__37452;
continue;
} else {
var map__37030 = cljs.core.first(seq__37017__$1);
var map__37030__$1 = cljs.core.__destructure_map(map__37030);
var src = map__37030__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37032){var e_37465 = e37032;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37465);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37465.message)].join('')));
}

var G__37467 = cljs.core.next(seq__37017__$1);
var G__37468 = null;
var G__37469 = (0);
var G__37470 = (0);
seq__37017 = G__37467;
chunk__37018 = G__37468;
count__37019 = G__37469;
i__37020 = G__37470;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37037 = cljs.core.seq(js_requires);
var chunk__37038 = null;
var count__37039 = (0);
var i__37040 = (0);
while(true){
if((i__37040 < count__37039)){
var js_ns = chunk__37038.cljs$core$IIndexed$_nth$arity$2(null,i__37040);
var require_str_37478 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37478);


var G__37479 = seq__37037;
var G__37480 = chunk__37038;
var G__37481 = count__37039;
var G__37482 = (i__37040 + (1));
seq__37037 = G__37479;
chunk__37038 = G__37480;
count__37039 = G__37481;
i__37040 = G__37482;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37037);
if(temp__5804__auto__){
var seq__37037__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37037__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37037__$1);
var G__37483 = cljs.core.chunk_rest(seq__37037__$1);
var G__37484 = c__5568__auto__;
var G__37485 = cljs.core.count(c__5568__auto__);
var G__37486 = (0);
seq__37037 = G__37483;
chunk__37038 = G__37484;
count__37039 = G__37485;
i__37040 = G__37486;
continue;
} else {
var js_ns = cljs.core.first(seq__37037__$1);
var require_str_37487 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37487);


var G__37488 = cljs.core.next(seq__37037__$1);
var G__37489 = null;
var G__37490 = (0);
var G__37491 = (0);
seq__37037 = G__37488;
chunk__37038 = G__37489;
count__37039 = G__37490;
i__37040 = G__37491;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37044){
var map__37045 = p__37044;
var map__37045__$1 = cljs.core.__destructure_map(map__37045);
var msg = map__37045__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37045__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37046(s__37047){
return (new cljs.core.LazySeq(null,(function (){
var s__37047__$1 = s__37047;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37047__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__37052 = cljs.core.first(xs__6360__auto__);
var map__37052__$1 = cljs.core.__destructure_map(map__37052);
var src = map__37052__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37052__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37052__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__37047__$1,map__37052,map__37052__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37045,map__37045__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37046_$_iter__37048(s__37049){
return (new cljs.core.LazySeq(null,((function (s__37047__$1,map__37052,map__37052__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37045,map__37045__$1,msg,info,reload_info){
return (function (){
var s__37049__$1 = s__37049;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__37049__$1);
if(temp__5804__auto____$1){
var s__37049__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37049__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37049__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37051 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37050 = (0);
while(true){
if((i__37050 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__37050);
cljs.core.chunk_append(b__37051,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37492 = (i__37050 + (1));
i__37050 = G__37492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37051),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37046_$_iter__37048(cljs.core.chunk_rest(s__37049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37051),null);
}
} else {
var warning = cljs.core.first(s__37049__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37046_$_iter__37048(cljs.core.rest(s__37049__$2)));
}
} else {
return null;
}
break;
}
});})(s__37047__$1,map__37052,map__37052__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37045,map__37045__$1,msg,info,reload_info))
,null,null));
});})(s__37047__$1,map__37052,map__37052__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37045,map__37045__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37046(cljs.core.rest(s__37047__$1)));
} else {
var G__37493 = cljs.core.rest(s__37047__$1);
s__37047__$1 = G__37493;
continue;
}
} else {
var G__37494 = cljs.core.rest(s__37047__$1);
s__37047__$1 = G__37494;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37053_37496 = cljs.core.seq(warnings);
var chunk__37054_37497 = null;
var count__37055_37498 = (0);
var i__37056_37499 = (0);
while(true){
if((i__37056_37499 < count__37055_37498)){
var map__37059_37502 = chunk__37054_37497.cljs$core$IIndexed$_nth$arity$2(null,i__37056_37499);
var map__37059_37503__$1 = cljs.core.__destructure_map(map__37059_37502);
var w_37504 = map__37059_37503__$1;
var msg_37505__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37059_37503__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37059_37503__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37059_37503__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37059_37503__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37508)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37506),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37507),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37505__$1)].join(''));


var G__37510 = seq__37053_37496;
var G__37511 = chunk__37054_37497;
var G__37512 = count__37055_37498;
var G__37513 = (i__37056_37499 + (1));
seq__37053_37496 = G__37510;
chunk__37054_37497 = G__37511;
count__37055_37498 = G__37512;
i__37056_37499 = G__37513;
continue;
} else {
var temp__5804__auto___37514 = cljs.core.seq(seq__37053_37496);
if(temp__5804__auto___37514){
var seq__37053_37515__$1 = temp__5804__auto___37514;
if(cljs.core.chunked_seq_QMARK_(seq__37053_37515__$1)){
var c__5568__auto___37516 = cljs.core.chunk_first(seq__37053_37515__$1);
var G__37517 = cljs.core.chunk_rest(seq__37053_37515__$1);
var G__37518 = c__5568__auto___37516;
var G__37519 = cljs.core.count(c__5568__auto___37516);
var G__37520 = (0);
seq__37053_37496 = G__37517;
chunk__37054_37497 = G__37518;
count__37055_37498 = G__37519;
i__37056_37499 = G__37520;
continue;
} else {
var map__37060_37521 = cljs.core.first(seq__37053_37515__$1);
var map__37060_37522__$1 = cljs.core.__destructure_map(map__37060_37521);
var w_37523 = map__37060_37522__$1;
var msg_37524__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060_37522__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060_37522__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060_37522__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060_37522__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37527)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37525),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37526),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37524__$1)].join(''));


var G__37528 = cljs.core.next(seq__37053_37515__$1);
var G__37529 = null;
var G__37530 = (0);
var G__37531 = (0);
seq__37053_37496 = G__37528;
chunk__37054_37497 = G__37529;
count__37055_37498 = G__37530;
i__37056_37499 = G__37531;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37043_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37043_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37067){
var map__37068 = p__37067;
var map__37068__$1 = cljs.core.__destructure_map(map__37068);
var msg = map__37068__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37068__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37068__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37069 = cljs.core.seq(updates);
var chunk__37071 = null;
var count__37072 = (0);
var i__37073 = (0);
while(true){
if((i__37073 < count__37072)){
var path = chunk__37071.cljs$core$IIndexed$_nth$arity$2(null,i__37073);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37229_37539 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37233_37540 = null;
var count__37234_37541 = (0);
var i__37235_37542 = (0);
while(true){
if((i__37235_37542 < count__37234_37541)){
var node_37543 = chunk__37233_37540.cljs$core$IIndexed$_nth$arity$2(null,i__37235_37542);
if(cljs.core.not(node_37543.shadow$old)){
var path_match_37544 = shadow.cljs.devtools.client.browser.match_paths(node_37543.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37544)){
var new_link_37545 = (function (){var G__37272 = node_37543.cloneNode(true);
G__37272.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37544),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37272;
})();
(node_37543.shadow$old = true);

(new_link_37545.onload = ((function (seq__37229_37539,chunk__37233_37540,count__37234_37541,i__37235_37542,seq__37069,chunk__37071,count__37072,i__37073,new_link_37545,path_match_37544,node_37543,path,map__37068,map__37068__$1,msg,updates,reload_info){
return (function (e){
var seq__37276_37546 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37278_37547 = null;
var count__37279_37548 = (0);
var i__37280_37549 = (0);
while(true){
if((i__37280_37549 < count__37279_37548)){
var map__37284_37550 = chunk__37278_37547.cljs$core$IIndexed$_nth$arity$2(null,i__37280_37549);
var map__37284_37551__$1 = cljs.core.__destructure_map(map__37284_37550);
var task_37552 = map__37284_37551__$1;
var fn_str_37553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37284_37551__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37284_37551__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37555 = goog.getObjectByName(fn_str_37553,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37554)].join(''));

(fn_obj_37555.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37555.cljs$core$IFn$_invoke$arity$2(path,new_link_37545) : fn_obj_37555.call(null,path,new_link_37545));


var G__37556 = seq__37276_37546;
var G__37557 = chunk__37278_37547;
var G__37558 = count__37279_37548;
var G__37559 = (i__37280_37549 + (1));
seq__37276_37546 = G__37556;
chunk__37278_37547 = G__37557;
count__37279_37548 = G__37558;
i__37280_37549 = G__37559;
continue;
} else {
var temp__5804__auto___37560 = cljs.core.seq(seq__37276_37546);
if(temp__5804__auto___37560){
var seq__37276_37561__$1 = temp__5804__auto___37560;
if(cljs.core.chunked_seq_QMARK_(seq__37276_37561__$1)){
var c__5568__auto___37562 = cljs.core.chunk_first(seq__37276_37561__$1);
var G__37563 = cljs.core.chunk_rest(seq__37276_37561__$1);
var G__37564 = c__5568__auto___37562;
var G__37565 = cljs.core.count(c__5568__auto___37562);
var G__37566 = (0);
seq__37276_37546 = G__37563;
chunk__37278_37547 = G__37564;
count__37279_37548 = G__37565;
i__37280_37549 = G__37566;
continue;
} else {
var map__37285_37567 = cljs.core.first(seq__37276_37561__$1);
var map__37285_37568__$1 = cljs.core.__destructure_map(map__37285_37567);
var task_37569 = map__37285_37568__$1;
var fn_str_37570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37285_37568__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37285_37568__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37572 = goog.getObjectByName(fn_str_37570,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37571)].join(''));

(fn_obj_37572.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37572.cljs$core$IFn$_invoke$arity$2(path,new_link_37545) : fn_obj_37572.call(null,path,new_link_37545));


var G__37573 = cljs.core.next(seq__37276_37561__$1);
var G__37574 = null;
var G__37575 = (0);
var G__37576 = (0);
seq__37276_37546 = G__37573;
chunk__37278_37547 = G__37574;
count__37279_37548 = G__37575;
i__37280_37549 = G__37576;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37543);
});})(seq__37229_37539,chunk__37233_37540,count__37234_37541,i__37235_37542,seq__37069,chunk__37071,count__37072,i__37073,new_link_37545,path_match_37544,node_37543,path,map__37068,map__37068__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37544], 0));

goog.dom.insertSiblingAfter(new_link_37545,node_37543);


var G__37577 = seq__37229_37539;
var G__37578 = chunk__37233_37540;
var G__37579 = count__37234_37541;
var G__37580 = (i__37235_37542 + (1));
seq__37229_37539 = G__37577;
chunk__37233_37540 = G__37578;
count__37234_37541 = G__37579;
i__37235_37542 = G__37580;
continue;
} else {
var G__37581 = seq__37229_37539;
var G__37582 = chunk__37233_37540;
var G__37583 = count__37234_37541;
var G__37584 = (i__37235_37542 + (1));
seq__37229_37539 = G__37581;
chunk__37233_37540 = G__37582;
count__37234_37541 = G__37583;
i__37235_37542 = G__37584;
continue;
}
} else {
var G__37585 = seq__37229_37539;
var G__37586 = chunk__37233_37540;
var G__37587 = count__37234_37541;
var G__37588 = (i__37235_37542 + (1));
seq__37229_37539 = G__37585;
chunk__37233_37540 = G__37586;
count__37234_37541 = G__37587;
i__37235_37542 = G__37588;
continue;
}
} else {
var temp__5804__auto___37589 = cljs.core.seq(seq__37229_37539);
if(temp__5804__auto___37589){
var seq__37229_37590__$1 = temp__5804__auto___37589;
if(cljs.core.chunked_seq_QMARK_(seq__37229_37590__$1)){
var c__5568__auto___37591 = cljs.core.chunk_first(seq__37229_37590__$1);
var G__37592 = cljs.core.chunk_rest(seq__37229_37590__$1);
var G__37593 = c__5568__auto___37591;
var G__37594 = cljs.core.count(c__5568__auto___37591);
var G__37595 = (0);
seq__37229_37539 = G__37592;
chunk__37233_37540 = G__37593;
count__37234_37541 = G__37594;
i__37235_37542 = G__37595;
continue;
} else {
var node_37596 = cljs.core.first(seq__37229_37590__$1);
if(cljs.core.not(node_37596.shadow$old)){
var path_match_37597 = shadow.cljs.devtools.client.browser.match_paths(node_37596.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37597)){
var new_link_37598 = (function (){var G__37286 = node_37596.cloneNode(true);
G__37286.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37597),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37286;
})();
(node_37596.shadow$old = true);

(new_link_37598.onload = ((function (seq__37229_37539,chunk__37233_37540,count__37234_37541,i__37235_37542,seq__37069,chunk__37071,count__37072,i__37073,new_link_37598,path_match_37597,node_37596,seq__37229_37590__$1,temp__5804__auto___37589,path,map__37068,map__37068__$1,msg,updates,reload_info){
return (function (e){
var seq__37287_37599 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37289_37600 = null;
var count__37290_37601 = (0);
var i__37291_37602 = (0);
while(true){
if((i__37291_37602 < count__37290_37601)){
var map__37297_37603 = chunk__37289_37600.cljs$core$IIndexed$_nth$arity$2(null,i__37291_37602);
var map__37297_37604__$1 = cljs.core.__destructure_map(map__37297_37603);
var task_37605 = map__37297_37604__$1;
var fn_str_37606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297_37604__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297_37604__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37608 = goog.getObjectByName(fn_str_37606,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37607)].join(''));

(fn_obj_37608.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37608.cljs$core$IFn$_invoke$arity$2(path,new_link_37598) : fn_obj_37608.call(null,path,new_link_37598));


var G__37611 = seq__37287_37599;
var G__37612 = chunk__37289_37600;
var G__37613 = count__37290_37601;
var G__37614 = (i__37291_37602 + (1));
seq__37287_37599 = G__37611;
chunk__37289_37600 = G__37612;
count__37290_37601 = G__37613;
i__37291_37602 = G__37614;
continue;
} else {
var temp__5804__auto___37615__$1 = cljs.core.seq(seq__37287_37599);
if(temp__5804__auto___37615__$1){
var seq__37287_37616__$1 = temp__5804__auto___37615__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37287_37616__$1)){
var c__5568__auto___37617 = cljs.core.chunk_first(seq__37287_37616__$1);
var G__37618 = cljs.core.chunk_rest(seq__37287_37616__$1);
var G__37619 = c__5568__auto___37617;
var G__37620 = cljs.core.count(c__5568__auto___37617);
var G__37621 = (0);
seq__37287_37599 = G__37618;
chunk__37289_37600 = G__37619;
count__37290_37601 = G__37620;
i__37291_37602 = G__37621;
continue;
} else {
var map__37300_37622 = cljs.core.first(seq__37287_37616__$1);
var map__37300_37623__$1 = cljs.core.__destructure_map(map__37300_37622);
var task_37624 = map__37300_37623__$1;
var fn_str_37625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37300_37623__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37300_37623__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37627 = goog.getObjectByName(fn_str_37625,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37626)].join(''));

(fn_obj_37627.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37627.cljs$core$IFn$_invoke$arity$2(path,new_link_37598) : fn_obj_37627.call(null,path,new_link_37598));


var G__37628 = cljs.core.next(seq__37287_37616__$1);
var G__37629 = null;
var G__37630 = (0);
var G__37631 = (0);
seq__37287_37599 = G__37628;
chunk__37289_37600 = G__37629;
count__37290_37601 = G__37630;
i__37291_37602 = G__37631;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37596);
});})(seq__37229_37539,chunk__37233_37540,count__37234_37541,i__37235_37542,seq__37069,chunk__37071,count__37072,i__37073,new_link_37598,path_match_37597,node_37596,seq__37229_37590__$1,temp__5804__auto___37589,path,map__37068,map__37068__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37597], 0));

goog.dom.insertSiblingAfter(new_link_37598,node_37596);


var G__37632 = cljs.core.next(seq__37229_37590__$1);
var G__37633 = null;
var G__37634 = (0);
var G__37635 = (0);
seq__37229_37539 = G__37632;
chunk__37233_37540 = G__37633;
count__37234_37541 = G__37634;
i__37235_37542 = G__37635;
continue;
} else {
var G__37636 = cljs.core.next(seq__37229_37590__$1);
var G__37637 = null;
var G__37638 = (0);
var G__37639 = (0);
seq__37229_37539 = G__37636;
chunk__37233_37540 = G__37637;
count__37234_37541 = G__37638;
i__37235_37542 = G__37639;
continue;
}
} else {
var G__37640 = cljs.core.next(seq__37229_37590__$1);
var G__37641 = null;
var G__37642 = (0);
var G__37643 = (0);
seq__37229_37539 = G__37640;
chunk__37233_37540 = G__37641;
count__37234_37541 = G__37642;
i__37235_37542 = G__37643;
continue;
}
}
} else {
}
}
break;
}


var G__37644 = seq__37069;
var G__37645 = chunk__37071;
var G__37646 = count__37072;
var G__37647 = (i__37073 + (1));
seq__37069 = G__37644;
chunk__37071 = G__37645;
count__37072 = G__37646;
i__37073 = G__37647;
continue;
} else {
var G__37648 = seq__37069;
var G__37649 = chunk__37071;
var G__37650 = count__37072;
var G__37651 = (i__37073 + (1));
seq__37069 = G__37648;
chunk__37071 = G__37649;
count__37072 = G__37650;
i__37073 = G__37651;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37069);
if(temp__5804__auto__){
var seq__37069__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37069__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37069__$1);
var G__37655 = cljs.core.chunk_rest(seq__37069__$1);
var G__37656 = c__5568__auto__;
var G__37657 = cljs.core.count(c__5568__auto__);
var G__37658 = (0);
seq__37069 = G__37655;
chunk__37071 = G__37656;
count__37072 = G__37657;
i__37073 = G__37658;
continue;
} else {
var path = cljs.core.first(seq__37069__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37301_37659 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37305_37660 = null;
var count__37306_37661 = (0);
var i__37307_37662 = (0);
while(true){
if((i__37307_37662 < count__37306_37661)){
var node_37663 = chunk__37305_37660.cljs$core$IIndexed$_nth$arity$2(null,i__37307_37662);
if(cljs.core.not(node_37663.shadow$old)){
var path_match_37664 = shadow.cljs.devtools.client.browser.match_paths(node_37663.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37664)){
var new_link_37665 = (function (){var G__37335 = node_37663.cloneNode(true);
G__37335.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37664),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37335;
})();
(node_37663.shadow$old = true);

(new_link_37665.onload = ((function (seq__37301_37659,chunk__37305_37660,count__37306_37661,i__37307_37662,seq__37069,chunk__37071,count__37072,i__37073,new_link_37665,path_match_37664,node_37663,path,seq__37069__$1,temp__5804__auto__,map__37068,map__37068__$1,msg,updates,reload_info){
return (function (e){
var seq__37336_37666 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37338_37667 = null;
var count__37339_37668 = (0);
var i__37340_37669 = (0);
while(true){
if((i__37340_37669 < count__37339_37668)){
var map__37344_37670 = chunk__37338_37667.cljs$core$IIndexed$_nth$arity$2(null,i__37340_37669);
var map__37344_37671__$1 = cljs.core.__destructure_map(map__37344_37670);
var task_37672 = map__37344_37671__$1;
var fn_str_37673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37344_37671__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37344_37671__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37675 = goog.getObjectByName(fn_str_37673,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37674)].join(''));

(fn_obj_37675.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37675.cljs$core$IFn$_invoke$arity$2(path,new_link_37665) : fn_obj_37675.call(null,path,new_link_37665));


var G__37676 = seq__37336_37666;
var G__37677 = chunk__37338_37667;
var G__37678 = count__37339_37668;
var G__37679 = (i__37340_37669 + (1));
seq__37336_37666 = G__37676;
chunk__37338_37667 = G__37677;
count__37339_37668 = G__37678;
i__37340_37669 = G__37679;
continue;
} else {
var temp__5804__auto___37680__$1 = cljs.core.seq(seq__37336_37666);
if(temp__5804__auto___37680__$1){
var seq__37336_37681__$1 = temp__5804__auto___37680__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37336_37681__$1)){
var c__5568__auto___37682 = cljs.core.chunk_first(seq__37336_37681__$1);
var G__37683 = cljs.core.chunk_rest(seq__37336_37681__$1);
var G__37684 = c__5568__auto___37682;
var G__37685 = cljs.core.count(c__5568__auto___37682);
var G__37686 = (0);
seq__37336_37666 = G__37683;
chunk__37338_37667 = G__37684;
count__37339_37668 = G__37685;
i__37340_37669 = G__37686;
continue;
} else {
var map__37346_37687 = cljs.core.first(seq__37336_37681__$1);
var map__37346_37688__$1 = cljs.core.__destructure_map(map__37346_37687);
var task_37689 = map__37346_37688__$1;
var fn_str_37690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346_37688__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346_37688__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37693 = goog.getObjectByName(fn_str_37690,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37691)].join(''));

(fn_obj_37693.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37693.cljs$core$IFn$_invoke$arity$2(path,new_link_37665) : fn_obj_37693.call(null,path,new_link_37665));


var G__37694 = cljs.core.next(seq__37336_37681__$1);
var G__37695 = null;
var G__37696 = (0);
var G__37697 = (0);
seq__37336_37666 = G__37694;
chunk__37338_37667 = G__37695;
count__37339_37668 = G__37696;
i__37340_37669 = G__37697;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37663);
});})(seq__37301_37659,chunk__37305_37660,count__37306_37661,i__37307_37662,seq__37069,chunk__37071,count__37072,i__37073,new_link_37665,path_match_37664,node_37663,path,seq__37069__$1,temp__5804__auto__,map__37068,map__37068__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37664], 0));

goog.dom.insertSiblingAfter(new_link_37665,node_37663);


var G__37698 = seq__37301_37659;
var G__37699 = chunk__37305_37660;
var G__37700 = count__37306_37661;
var G__37701 = (i__37307_37662 + (1));
seq__37301_37659 = G__37698;
chunk__37305_37660 = G__37699;
count__37306_37661 = G__37700;
i__37307_37662 = G__37701;
continue;
} else {
var G__37702 = seq__37301_37659;
var G__37703 = chunk__37305_37660;
var G__37704 = count__37306_37661;
var G__37705 = (i__37307_37662 + (1));
seq__37301_37659 = G__37702;
chunk__37305_37660 = G__37703;
count__37306_37661 = G__37704;
i__37307_37662 = G__37705;
continue;
}
} else {
var G__37706 = seq__37301_37659;
var G__37707 = chunk__37305_37660;
var G__37708 = count__37306_37661;
var G__37709 = (i__37307_37662 + (1));
seq__37301_37659 = G__37706;
chunk__37305_37660 = G__37707;
count__37306_37661 = G__37708;
i__37307_37662 = G__37709;
continue;
}
} else {
var temp__5804__auto___37710__$1 = cljs.core.seq(seq__37301_37659);
if(temp__5804__auto___37710__$1){
var seq__37301_37711__$1 = temp__5804__auto___37710__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37301_37711__$1)){
var c__5568__auto___37712 = cljs.core.chunk_first(seq__37301_37711__$1);
var G__37713 = cljs.core.chunk_rest(seq__37301_37711__$1);
var G__37714 = c__5568__auto___37712;
var G__37715 = cljs.core.count(c__5568__auto___37712);
var G__37716 = (0);
seq__37301_37659 = G__37713;
chunk__37305_37660 = G__37714;
count__37306_37661 = G__37715;
i__37307_37662 = G__37716;
continue;
} else {
var node_37717 = cljs.core.first(seq__37301_37711__$1);
if(cljs.core.not(node_37717.shadow$old)){
var path_match_37718 = shadow.cljs.devtools.client.browser.match_paths(node_37717.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37718)){
var new_link_37719 = (function (){var G__37350 = node_37717.cloneNode(true);
G__37350.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37718),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37350;
})();
(node_37717.shadow$old = true);

(new_link_37719.onload = ((function (seq__37301_37659,chunk__37305_37660,count__37306_37661,i__37307_37662,seq__37069,chunk__37071,count__37072,i__37073,new_link_37719,path_match_37718,node_37717,seq__37301_37711__$1,temp__5804__auto___37710__$1,path,seq__37069__$1,temp__5804__auto__,map__37068,map__37068__$1,msg,updates,reload_info){
return (function (e){
var seq__37351_37721 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37353_37722 = null;
var count__37354_37723 = (0);
var i__37355_37724 = (0);
while(true){
if((i__37355_37724 < count__37354_37723)){
var map__37361_37725 = chunk__37353_37722.cljs$core$IIndexed$_nth$arity$2(null,i__37355_37724);
var map__37361_37726__$1 = cljs.core.__destructure_map(map__37361_37725);
var task_37727 = map__37361_37726__$1;
var fn_str_37728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37361_37726__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37361_37726__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37730 = goog.getObjectByName(fn_str_37728,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37729)].join(''));

(fn_obj_37730.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37730.cljs$core$IFn$_invoke$arity$2(path,new_link_37719) : fn_obj_37730.call(null,path,new_link_37719));


var G__37731 = seq__37351_37721;
var G__37732 = chunk__37353_37722;
var G__37733 = count__37354_37723;
var G__37734 = (i__37355_37724 + (1));
seq__37351_37721 = G__37731;
chunk__37353_37722 = G__37732;
count__37354_37723 = G__37733;
i__37355_37724 = G__37734;
continue;
} else {
var temp__5804__auto___37735__$2 = cljs.core.seq(seq__37351_37721);
if(temp__5804__auto___37735__$2){
var seq__37351_37736__$1 = temp__5804__auto___37735__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37351_37736__$1)){
var c__5568__auto___37737 = cljs.core.chunk_first(seq__37351_37736__$1);
var G__37738 = cljs.core.chunk_rest(seq__37351_37736__$1);
var G__37739 = c__5568__auto___37737;
var G__37740 = cljs.core.count(c__5568__auto___37737);
var G__37741 = (0);
seq__37351_37721 = G__37738;
chunk__37353_37722 = G__37739;
count__37354_37723 = G__37740;
i__37355_37724 = G__37741;
continue;
} else {
var map__37362_37742 = cljs.core.first(seq__37351_37736__$1);
var map__37362_37743__$1 = cljs.core.__destructure_map(map__37362_37742);
var task_37744 = map__37362_37743__$1;
var fn_str_37745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37362_37743__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37362_37743__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37747 = goog.getObjectByName(fn_str_37745,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37746)].join(''));

(fn_obj_37747.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37747.cljs$core$IFn$_invoke$arity$2(path,new_link_37719) : fn_obj_37747.call(null,path,new_link_37719));


var G__37748 = cljs.core.next(seq__37351_37736__$1);
var G__37749 = null;
var G__37750 = (0);
var G__37751 = (0);
seq__37351_37721 = G__37748;
chunk__37353_37722 = G__37749;
count__37354_37723 = G__37750;
i__37355_37724 = G__37751;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37717);
});})(seq__37301_37659,chunk__37305_37660,count__37306_37661,i__37307_37662,seq__37069,chunk__37071,count__37072,i__37073,new_link_37719,path_match_37718,node_37717,seq__37301_37711__$1,temp__5804__auto___37710__$1,path,seq__37069__$1,temp__5804__auto__,map__37068,map__37068__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37718], 0));

goog.dom.insertSiblingAfter(new_link_37719,node_37717);


var G__37752 = cljs.core.next(seq__37301_37711__$1);
var G__37753 = null;
var G__37754 = (0);
var G__37755 = (0);
seq__37301_37659 = G__37752;
chunk__37305_37660 = G__37753;
count__37306_37661 = G__37754;
i__37307_37662 = G__37755;
continue;
} else {
var G__37756 = cljs.core.next(seq__37301_37711__$1);
var G__37757 = null;
var G__37758 = (0);
var G__37759 = (0);
seq__37301_37659 = G__37756;
chunk__37305_37660 = G__37757;
count__37306_37661 = G__37758;
i__37307_37662 = G__37759;
continue;
}
} else {
var G__37760 = cljs.core.next(seq__37301_37711__$1);
var G__37761 = null;
var G__37762 = (0);
var G__37763 = (0);
seq__37301_37659 = G__37760;
chunk__37305_37660 = G__37761;
count__37306_37661 = G__37762;
i__37307_37662 = G__37763;
continue;
}
}
} else {
}
}
break;
}


var G__37764 = cljs.core.next(seq__37069__$1);
var G__37765 = null;
var G__37766 = (0);
var G__37767 = (0);
seq__37069 = G__37764;
chunk__37071 = G__37765;
count__37072 = G__37766;
i__37073 = G__37767;
continue;
} else {
var G__37768 = cljs.core.next(seq__37069__$1);
var G__37769 = null;
var G__37770 = (0);
var G__37771 = (0);
seq__37069 = G__37768;
chunk__37071 = G__37769;
count__37072 = G__37770;
i__37073 = G__37771;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__37380){
var map__37381 = p__37380;
var map__37381__$1 = cljs.core.__destructure_map(map__37381);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37383,done,error){
var map__37384 = p__37383;
var map__37384__$1 = cljs.core.__destructure_map(map__37384);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37384__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37385,done,error){
var map__37386 = p__37385;
var map__37386__$1 = cljs.core.__destructure_map(map__37386);
var msg = map__37386__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37386__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37387){
var map__37388 = p__37387;
var map__37388__$1 = cljs.core.__destructure_map(map__37388);
var src = map__37388__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37388__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37389 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37389) : done.call(null,G__37389));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37390){
var map__37391 = p__37390;
var map__37391__$1 = cljs.core.__destructure_map(map__37391);
var msg__$1 = map__37391__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37391__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37392){var ex = e37392;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37394){
var map__37395 = p__37394;
var map__37395__$1 = cljs.core.__destructure_map(map__37395);
var env = map__37395__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37395__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37400){
var map__37401 = p__37400;
var map__37401__$1 = cljs.core.__destructure_map(map__37401);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37402){
var map__37403 = p__37402;
var map__37403__$1 = cljs.core.__destructure_map(map__37403);
var svc = map__37403__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
