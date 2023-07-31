goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37281 = arguments.length;
var i__5770__auto___37282 = (0);
while(true){
if((i__5770__auto___37282 < len__5769__auto___37281)){
args__5775__auto__.push((arguments[i__5770__auto___37282]));

var G__37283 = (i__5770__auto___37282 + (1));
i__5770__auto___37282 = G__37283;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36772){
var G__36773 = cljs.core.first(seq36772);
var seq36772__$1 = cljs.core.next(seq36772);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36773,seq36772__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36774 = cljs.core.seq(sources);
var chunk__36775 = null;
var count__36776 = (0);
var i__36777 = (0);
while(true){
if((i__36777 < count__36776)){
var map__36785 = chunk__36775.cljs$core$IIndexed$_nth$arity$2(null,i__36777);
var map__36785__$1 = cljs.core.__destructure_map(map__36785);
var src = map__36785__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36785__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36785__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36785__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36785__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36786){var e_37288 = e36786;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37288);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37288.message)].join('')));
}

var G__37289 = seq__36774;
var G__37290 = chunk__36775;
var G__37291 = count__36776;
var G__37292 = (i__36777 + (1));
seq__36774 = G__37289;
chunk__36775 = G__37290;
count__36776 = G__37291;
i__36777 = G__37292;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36774);
if(temp__5753__auto__){
var seq__36774__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36774__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36774__$1);
var G__37293 = cljs.core.chunk_rest(seq__36774__$1);
var G__37294 = c__5568__auto__;
var G__37295 = cljs.core.count(c__5568__auto__);
var G__37296 = (0);
seq__36774 = G__37293;
chunk__36775 = G__37294;
count__36776 = G__37295;
i__36777 = G__37296;
continue;
} else {
var map__36789 = cljs.core.first(seq__36774__$1);
var map__36789__$1 = cljs.core.__destructure_map(map__36789);
var src = map__36789__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36789__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36789__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36789__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36789__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36793){var e_37297 = e36793;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37297);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37297.message)].join('')));
}

var G__37298 = cljs.core.next(seq__36774__$1);
var G__37299 = null;
var G__37300 = (0);
var G__37301 = (0);
seq__36774 = G__37298;
chunk__36775 = G__37299;
count__36776 = G__37300;
i__36777 = G__37301;
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
var seq__36822 = cljs.core.seq(js_requires);
var chunk__36823 = null;
var count__36824 = (0);
var i__36825 = (0);
while(true){
if((i__36825 < count__36824)){
var js_ns = chunk__36823.cljs$core$IIndexed$_nth$arity$2(null,i__36825);
var require_str_37302 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37302);


var G__37303 = seq__36822;
var G__37304 = chunk__36823;
var G__37305 = count__36824;
var G__37306 = (i__36825 + (1));
seq__36822 = G__37303;
chunk__36823 = G__37304;
count__36824 = G__37305;
i__36825 = G__37306;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36822);
if(temp__5753__auto__){
var seq__36822__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36822__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36822__$1);
var G__37307 = cljs.core.chunk_rest(seq__36822__$1);
var G__37308 = c__5568__auto__;
var G__37309 = cljs.core.count(c__5568__auto__);
var G__37310 = (0);
seq__36822 = G__37307;
chunk__36823 = G__37308;
count__36824 = G__37309;
i__36825 = G__37310;
continue;
} else {
var js_ns = cljs.core.first(seq__36822__$1);
var require_str_37311 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37311);


var G__37312 = cljs.core.next(seq__36822__$1);
var G__37313 = null;
var G__37314 = (0);
var G__37315 = (0);
seq__36822 = G__37312;
chunk__36823 = G__37313;
count__36824 = G__37314;
i__36825 = G__37315;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36861){
var map__36862 = p__36861;
var map__36862__$1 = cljs.core.__destructure_map(map__36862);
var msg = map__36862__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36862__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36862__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36869(s__36870){
return (new cljs.core.LazySeq(null,(function (){
var s__36870__$1 = s__36870;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36870__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36884 = cljs.core.first(xs__6308__auto__);
var map__36884__$1 = cljs.core.__destructure_map(map__36884);
var src = map__36884__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36884__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36884__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__36870__$1,map__36884,map__36884__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36862,map__36862__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36869_$_iter__36871(s__36872){
return (new cljs.core.LazySeq(null,((function (s__36870__$1,map__36884,map__36884__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36862,map__36862__$1,msg,info,reload_info){
return (function (){
var s__36872__$1 = s__36872;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36872__$1);
if(temp__5753__auto____$1){
var s__36872__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36872__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36872__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36874 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36873 = (0);
while(true){
if((i__36873 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__36873);
cljs.core.chunk_append(b__36874,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37316 = (i__36873 + (1));
i__36873 = G__37316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36874),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36869_$_iter__36871(cljs.core.chunk_rest(s__36872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36874),null);
}
} else {
var warning = cljs.core.first(s__36872__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36869_$_iter__36871(cljs.core.rest(s__36872__$2)));
}
} else {
return null;
}
break;
}
});})(s__36870__$1,map__36884,map__36884__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36862,map__36862__$1,msg,info,reload_info))
,null,null));
});})(s__36870__$1,map__36884,map__36884__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36862,map__36862__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36869(cljs.core.rest(s__36870__$1)));
} else {
var G__37317 = cljs.core.rest(s__36870__$1);
s__36870__$1 = G__37317;
continue;
}
} else {
var G__37318 = cljs.core.rest(s__36870__$1);
s__36870__$1 = G__37318;
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
var seq__36889_37319 = cljs.core.seq(warnings);
var chunk__36890_37320 = null;
var count__36891_37321 = (0);
var i__36892_37322 = (0);
while(true){
if((i__36892_37322 < count__36891_37321)){
var map__36895_37323 = chunk__36890_37320.cljs$core$IIndexed$_nth$arity$2(null,i__36892_37322);
var map__36895_37324__$1 = cljs.core.__destructure_map(map__36895_37323);
var w_37325 = map__36895_37324__$1;
var msg_37326__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36895_37324__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36895_37324__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36895_37324__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36895_37324__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37329)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37327),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37328),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37326__$1)].join(''));


var G__37330 = seq__36889_37319;
var G__37331 = chunk__36890_37320;
var G__37332 = count__36891_37321;
var G__37333 = (i__36892_37322 + (1));
seq__36889_37319 = G__37330;
chunk__36890_37320 = G__37331;
count__36891_37321 = G__37332;
i__36892_37322 = G__37333;
continue;
} else {
var temp__5753__auto___37334 = cljs.core.seq(seq__36889_37319);
if(temp__5753__auto___37334){
var seq__36889_37335__$1 = temp__5753__auto___37334;
if(cljs.core.chunked_seq_QMARK_(seq__36889_37335__$1)){
var c__5568__auto___37336 = cljs.core.chunk_first(seq__36889_37335__$1);
var G__37337 = cljs.core.chunk_rest(seq__36889_37335__$1);
var G__37338 = c__5568__auto___37336;
var G__37339 = cljs.core.count(c__5568__auto___37336);
var G__37340 = (0);
seq__36889_37319 = G__37337;
chunk__36890_37320 = G__37338;
count__36891_37321 = G__37339;
i__36892_37322 = G__37340;
continue;
} else {
var map__36896_37342 = cljs.core.first(seq__36889_37335__$1);
var map__36896_37343__$1 = cljs.core.__destructure_map(map__36896_37342);
var w_37344 = map__36896_37343__$1;
var msg_37345__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36896_37343__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36896_37343__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36896_37343__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36896_37343__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37348)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37346),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37347),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37345__$1)].join(''));


var G__37349 = cljs.core.next(seq__36889_37335__$1);
var G__37350 = null;
var G__37351 = (0);
var G__37352 = (0);
seq__36889_37319 = G__37349;
chunk__36890_37320 = G__37350;
count__36891_37321 = G__37351;
i__36892_37322 = G__37352;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36856_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36856_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36897){
var map__36898 = p__36897;
var map__36898__$1 = cljs.core.__destructure_map(map__36898);
var msg = map__36898__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36898__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36898__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36899 = cljs.core.seq(updates);
var chunk__36901 = null;
var count__36902 = (0);
var i__36903 = (0);
while(true){
if((i__36903 < count__36902)){
var path = chunk__36901.cljs$core$IIndexed$_nth$arity$2(null,i__36903);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37126_37354 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37130_37355 = null;
var count__37131_37356 = (0);
var i__37132_37357 = (0);
while(true){
if((i__37132_37357 < count__37131_37356)){
var node_37358 = chunk__37130_37355.cljs$core$IIndexed$_nth$arity$2(null,i__37132_37357);
if(cljs.core.not(node_37358.shadow$old)){
var path_match_37359 = shadow.cljs.devtools.client.browser.match_paths(node_37358.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37359)){
var new_link_37360 = (function (){var G__37165 = node_37358.cloneNode(true);
G__37165.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37359),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37165;
})();
(node_37358.shadow$old = true);

(new_link_37360.onload = ((function (seq__37126_37354,chunk__37130_37355,count__37131_37356,i__37132_37357,seq__36899,chunk__36901,count__36902,i__36903,new_link_37360,path_match_37359,node_37358,path,map__36898,map__36898__$1,msg,updates,reload_info){
return (function (e){
var seq__37169_37361 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37171_37362 = null;
var count__37172_37363 = (0);
var i__37173_37364 = (0);
while(true){
if((i__37173_37364 < count__37172_37363)){
var map__37178_37365 = chunk__37171_37362.cljs$core$IIndexed$_nth$arity$2(null,i__37173_37364);
var map__37178_37366__$1 = cljs.core.__destructure_map(map__37178_37365);
var task_37367 = map__37178_37366__$1;
var fn_str_37368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37178_37366__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37178_37366__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37370 = goog.getObjectByName(fn_str_37368,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37369)].join(''));

(fn_obj_37370.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37370.cljs$core$IFn$_invoke$arity$2(path,new_link_37360) : fn_obj_37370.call(null,path,new_link_37360));


var G__37371 = seq__37169_37361;
var G__37372 = chunk__37171_37362;
var G__37373 = count__37172_37363;
var G__37374 = (i__37173_37364 + (1));
seq__37169_37361 = G__37371;
chunk__37171_37362 = G__37372;
count__37172_37363 = G__37373;
i__37173_37364 = G__37374;
continue;
} else {
var temp__5753__auto___37375 = cljs.core.seq(seq__37169_37361);
if(temp__5753__auto___37375){
var seq__37169_37376__$1 = temp__5753__auto___37375;
if(cljs.core.chunked_seq_QMARK_(seq__37169_37376__$1)){
var c__5568__auto___37377 = cljs.core.chunk_first(seq__37169_37376__$1);
var G__37378 = cljs.core.chunk_rest(seq__37169_37376__$1);
var G__37379 = c__5568__auto___37377;
var G__37380 = cljs.core.count(c__5568__auto___37377);
var G__37381 = (0);
seq__37169_37361 = G__37378;
chunk__37171_37362 = G__37379;
count__37172_37363 = G__37380;
i__37173_37364 = G__37381;
continue;
} else {
var map__37181_37382 = cljs.core.first(seq__37169_37376__$1);
var map__37181_37383__$1 = cljs.core.__destructure_map(map__37181_37382);
var task_37384 = map__37181_37383__$1;
var fn_str_37385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37181_37383__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37181_37383__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37387 = goog.getObjectByName(fn_str_37385,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37386)].join(''));

(fn_obj_37387.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37387.cljs$core$IFn$_invoke$arity$2(path,new_link_37360) : fn_obj_37387.call(null,path,new_link_37360));


var G__37388 = cljs.core.next(seq__37169_37376__$1);
var G__37389 = null;
var G__37390 = (0);
var G__37391 = (0);
seq__37169_37361 = G__37388;
chunk__37171_37362 = G__37389;
count__37172_37363 = G__37390;
i__37173_37364 = G__37391;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37358);
});})(seq__37126_37354,chunk__37130_37355,count__37131_37356,i__37132_37357,seq__36899,chunk__36901,count__36902,i__36903,new_link_37360,path_match_37359,node_37358,path,map__36898,map__36898__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37359], 0));

goog.dom.insertSiblingAfter(new_link_37360,node_37358);


var G__37392 = seq__37126_37354;
var G__37393 = chunk__37130_37355;
var G__37394 = count__37131_37356;
var G__37395 = (i__37132_37357 + (1));
seq__37126_37354 = G__37392;
chunk__37130_37355 = G__37393;
count__37131_37356 = G__37394;
i__37132_37357 = G__37395;
continue;
} else {
var G__37396 = seq__37126_37354;
var G__37397 = chunk__37130_37355;
var G__37398 = count__37131_37356;
var G__37399 = (i__37132_37357 + (1));
seq__37126_37354 = G__37396;
chunk__37130_37355 = G__37397;
count__37131_37356 = G__37398;
i__37132_37357 = G__37399;
continue;
}
} else {
var G__37400 = seq__37126_37354;
var G__37401 = chunk__37130_37355;
var G__37402 = count__37131_37356;
var G__37403 = (i__37132_37357 + (1));
seq__37126_37354 = G__37400;
chunk__37130_37355 = G__37401;
count__37131_37356 = G__37402;
i__37132_37357 = G__37403;
continue;
}
} else {
var temp__5753__auto___37404 = cljs.core.seq(seq__37126_37354);
if(temp__5753__auto___37404){
var seq__37126_37405__$1 = temp__5753__auto___37404;
if(cljs.core.chunked_seq_QMARK_(seq__37126_37405__$1)){
var c__5568__auto___37406 = cljs.core.chunk_first(seq__37126_37405__$1);
var G__37407 = cljs.core.chunk_rest(seq__37126_37405__$1);
var G__37408 = c__5568__auto___37406;
var G__37409 = cljs.core.count(c__5568__auto___37406);
var G__37410 = (0);
seq__37126_37354 = G__37407;
chunk__37130_37355 = G__37408;
count__37131_37356 = G__37409;
i__37132_37357 = G__37410;
continue;
} else {
var node_37411 = cljs.core.first(seq__37126_37405__$1);
if(cljs.core.not(node_37411.shadow$old)){
var path_match_37412 = shadow.cljs.devtools.client.browser.match_paths(node_37411.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37412)){
var new_link_37413 = (function (){var G__37182 = node_37411.cloneNode(true);
G__37182.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37412),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37182;
})();
(node_37411.shadow$old = true);

(new_link_37413.onload = ((function (seq__37126_37354,chunk__37130_37355,count__37131_37356,i__37132_37357,seq__36899,chunk__36901,count__36902,i__36903,new_link_37413,path_match_37412,node_37411,seq__37126_37405__$1,temp__5753__auto___37404,path,map__36898,map__36898__$1,msg,updates,reload_info){
return (function (e){
var seq__37183_37414 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37185_37415 = null;
var count__37186_37416 = (0);
var i__37187_37417 = (0);
while(true){
if((i__37187_37417 < count__37186_37416)){
var map__37191_37418 = chunk__37185_37415.cljs$core$IIndexed$_nth$arity$2(null,i__37187_37417);
var map__37191_37419__$1 = cljs.core.__destructure_map(map__37191_37418);
var task_37420 = map__37191_37419__$1;
var fn_str_37421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191_37419__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191_37419__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37423 = goog.getObjectByName(fn_str_37421,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37422)].join(''));

(fn_obj_37423.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37423.cljs$core$IFn$_invoke$arity$2(path,new_link_37413) : fn_obj_37423.call(null,path,new_link_37413));


var G__37424 = seq__37183_37414;
var G__37425 = chunk__37185_37415;
var G__37426 = count__37186_37416;
var G__37427 = (i__37187_37417 + (1));
seq__37183_37414 = G__37424;
chunk__37185_37415 = G__37425;
count__37186_37416 = G__37426;
i__37187_37417 = G__37427;
continue;
} else {
var temp__5753__auto___37428__$1 = cljs.core.seq(seq__37183_37414);
if(temp__5753__auto___37428__$1){
var seq__37183_37429__$1 = temp__5753__auto___37428__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37183_37429__$1)){
var c__5568__auto___37430 = cljs.core.chunk_first(seq__37183_37429__$1);
var G__37431 = cljs.core.chunk_rest(seq__37183_37429__$1);
var G__37432 = c__5568__auto___37430;
var G__37433 = cljs.core.count(c__5568__auto___37430);
var G__37434 = (0);
seq__37183_37414 = G__37431;
chunk__37185_37415 = G__37432;
count__37186_37416 = G__37433;
i__37187_37417 = G__37434;
continue;
} else {
var map__37192_37435 = cljs.core.first(seq__37183_37429__$1);
var map__37192_37436__$1 = cljs.core.__destructure_map(map__37192_37435);
var task_37437 = map__37192_37436__$1;
var fn_str_37438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37192_37436__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37192_37436__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37440 = goog.getObjectByName(fn_str_37438,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37439)].join(''));

(fn_obj_37440.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37440.cljs$core$IFn$_invoke$arity$2(path,new_link_37413) : fn_obj_37440.call(null,path,new_link_37413));


var G__37441 = cljs.core.next(seq__37183_37429__$1);
var G__37442 = null;
var G__37443 = (0);
var G__37444 = (0);
seq__37183_37414 = G__37441;
chunk__37185_37415 = G__37442;
count__37186_37416 = G__37443;
i__37187_37417 = G__37444;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37411);
});})(seq__37126_37354,chunk__37130_37355,count__37131_37356,i__37132_37357,seq__36899,chunk__36901,count__36902,i__36903,new_link_37413,path_match_37412,node_37411,seq__37126_37405__$1,temp__5753__auto___37404,path,map__36898,map__36898__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37412], 0));

goog.dom.insertSiblingAfter(new_link_37413,node_37411);


var G__37445 = cljs.core.next(seq__37126_37405__$1);
var G__37446 = null;
var G__37447 = (0);
var G__37448 = (0);
seq__37126_37354 = G__37445;
chunk__37130_37355 = G__37446;
count__37131_37356 = G__37447;
i__37132_37357 = G__37448;
continue;
} else {
var G__37449 = cljs.core.next(seq__37126_37405__$1);
var G__37450 = null;
var G__37451 = (0);
var G__37452 = (0);
seq__37126_37354 = G__37449;
chunk__37130_37355 = G__37450;
count__37131_37356 = G__37451;
i__37132_37357 = G__37452;
continue;
}
} else {
var G__37453 = cljs.core.next(seq__37126_37405__$1);
var G__37454 = null;
var G__37455 = (0);
var G__37456 = (0);
seq__37126_37354 = G__37453;
chunk__37130_37355 = G__37454;
count__37131_37356 = G__37455;
i__37132_37357 = G__37456;
continue;
}
}
} else {
}
}
break;
}


var G__37457 = seq__36899;
var G__37458 = chunk__36901;
var G__37459 = count__36902;
var G__37460 = (i__36903 + (1));
seq__36899 = G__37457;
chunk__36901 = G__37458;
count__36902 = G__37459;
i__36903 = G__37460;
continue;
} else {
var G__37461 = seq__36899;
var G__37462 = chunk__36901;
var G__37463 = count__36902;
var G__37464 = (i__36903 + (1));
seq__36899 = G__37461;
chunk__36901 = G__37462;
count__36902 = G__37463;
i__36903 = G__37464;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36899);
if(temp__5753__auto__){
var seq__36899__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36899__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36899__$1);
var G__37465 = cljs.core.chunk_rest(seq__36899__$1);
var G__37466 = c__5568__auto__;
var G__37467 = cljs.core.count(c__5568__auto__);
var G__37468 = (0);
seq__36899 = G__37465;
chunk__36901 = G__37466;
count__36902 = G__37467;
i__36903 = G__37468;
continue;
} else {
var path = cljs.core.first(seq__36899__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37193_37469 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37197_37470 = null;
var count__37198_37471 = (0);
var i__37199_37472 = (0);
while(true){
if((i__37199_37472 < count__37198_37471)){
var node_37473 = chunk__37197_37470.cljs$core$IIndexed$_nth$arity$2(null,i__37199_37472);
if(cljs.core.not(node_37473.shadow$old)){
var path_match_37474 = shadow.cljs.devtools.client.browser.match_paths(node_37473.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37474)){
var new_link_37475 = (function (){var G__37225 = node_37473.cloneNode(true);
G__37225.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37474),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37225;
})();
(node_37473.shadow$old = true);

(new_link_37475.onload = ((function (seq__37193_37469,chunk__37197_37470,count__37198_37471,i__37199_37472,seq__36899,chunk__36901,count__36902,i__36903,new_link_37475,path_match_37474,node_37473,path,seq__36899__$1,temp__5753__auto__,map__36898,map__36898__$1,msg,updates,reload_info){
return (function (e){
var seq__37226_37476 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37228_37477 = null;
var count__37229_37478 = (0);
var i__37230_37479 = (0);
while(true){
if((i__37230_37479 < count__37229_37478)){
var map__37234_37480 = chunk__37228_37477.cljs$core$IIndexed$_nth$arity$2(null,i__37230_37479);
var map__37234_37481__$1 = cljs.core.__destructure_map(map__37234_37480);
var task_37482 = map__37234_37481__$1;
var fn_str_37483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37234_37481__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37234_37481__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37485 = goog.getObjectByName(fn_str_37483,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37484)].join(''));

(fn_obj_37485.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37485.cljs$core$IFn$_invoke$arity$2(path,new_link_37475) : fn_obj_37485.call(null,path,new_link_37475));


var G__37486 = seq__37226_37476;
var G__37487 = chunk__37228_37477;
var G__37488 = count__37229_37478;
var G__37489 = (i__37230_37479 + (1));
seq__37226_37476 = G__37486;
chunk__37228_37477 = G__37487;
count__37229_37478 = G__37488;
i__37230_37479 = G__37489;
continue;
} else {
var temp__5753__auto___37490__$1 = cljs.core.seq(seq__37226_37476);
if(temp__5753__auto___37490__$1){
var seq__37226_37491__$1 = temp__5753__auto___37490__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37226_37491__$1)){
var c__5568__auto___37492 = cljs.core.chunk_first(seq__37226_37491__$1);
var G__37493 = cljs.core.chunk_rest(seq__37226_37491__$1);
var G__37494 = c__5568__auto___37492;
var G__37495 = cljs.core.count(c__5568__auto___37492);
var G__37496 = (0);
seq__37226_37476 = G__37493;
chunk__37228_37477 = G__37494;
count__37229_37478 = G__37495;
i__37230_37479 = G__37496;
continue;
} else {
var map__37235_37497 = cljs.core.first(seq__37226_37491__$1);
var map__37235_37498__$1 = cljs.core.__destructure_map(map__37235_37497);
var task_37499 = map__37235_37498__$1;
var fn_str_37500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37235_37498__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37235_37498__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37502 = goog.getObjectByName(fn_str_37500,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37501)].join(''));

(fn_obj_37502.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37502.cljs$core$IFn$_invoke$arity$2(path,new_link_37475) : fn_obj_37502.call(null,path,new_link_37475));


var G__37503 = cljs.core.next(seq__37226_37491__$1);
var G__37504 = null;
var G__37505 = (0);
var G__37506 = (0);
seq__37226_37476 = G__37503;
chunk__37228_37477 = G__37504;
count__37229_37478 = G__37505;
i__37230_37479 = G__37506;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37473);
});})(seq__37193_37469,chunk__37197_37470,count__37198_37471,i__37199_37472,seq__36899,chunk__36901,count__36902,i__36903,new_link_37475,path_match_37474,node_37473,path,seq__36899__$1,temp__5753__auto__,map__36898,map__36898__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37474], 0));

goog.dom.insertSiblingAfter(new_link_37475,node_37473);


var G__37507 = seq__37193_37469;
var G__37508 = chunk__37197_37470;
var G__37509 = count__37198_37471;
var G__37510 = (i__37199_37472 + (1));
seq__37193_37469 = G__37507;
chunk__37197_37470 = G__37508;
count__37198_37471 = G__37509;
i__37199_37472 = G__37510;
continue;
} else {
var G__37511 = seq__37193_37469;
var G__37512 = chunk__37197_37470;
var G__37513 = count__37198_37471;
var G__37514 = (i__37199_37472 + (1));
seq__37193_37469 = G__37511;
chunk__37197_37470 = G__37512;
count__37198_37471 = G__37513;
i__37199_37472 = G__37514;
continue;
}
} else {
var G__37515 = seq__37193_37469;
var G__37516 = chunk__37197_37470;
var G__37517 = count__37198_37471;
var G__37518 = (i__37199_37472 + (1));
seq__37193_37469 = G__37515;
chunk__37197_37470 = G__37516;
count__37198_37471 = G__37517;
i__37199_37472 = G__37518;
continue;
}
} else {
var temp__5753__auto___37519__$1 = cljs.core.seq(seq__37193_37469);
if(temp__5753__auto___37519__$1){
var seq__37193_37520__$1 = temp__5753__auto___37519__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37193_37520__$1)){
var c__5568__auto___37521 = cljs.core.chunk_first(seq__37193_37520__$1);
var G__37522 = cljs.core.chunk_rest(seq__37193_37520__$1);
var G__37523 = c__5568__auto___37521;
var G__37524 = cljs.core.count(c__5568__auto___37521);
var G__37525 = (0);
seq__37193_37469 = G__37522;
chunk__37197_37470 = G__37523;
count__37198_37471 = G__37524;
i__37199_37472 = G__37525;
continue;
} else {
var node_37526 = cljs.core.first(seq__37193_37520__$1);
if(cljs.core.not(node_37526.shadow$old)){
var path_match_37527 = shadow.cljs.devtools.client.browser.match_paths(node_37526.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37527)){
var new_link_37528 = (function (){var G__37236 = node_37526.cloneNode(true);
G__37236.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37527),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37236;
})();
(node_37526.shadow$old = true);

(new_link_37528.onload = ((function (seq__37193_37469,chunk__37197_37470,count__37198_37471,i__37199_37472,seq__36899,chunk__36901,count__36902,i__36903,new_link_37528,path_match_37527,node_37526,seq__37193_37520__$1,temp__5753__auto___37519__$1,path,seq__36899__$1,temp__5753__auto__,map__36898,map__36898__$1,msg,updates,reload_info){
return (function (e){
var seq__37237_37529 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37239_37530 = null;
var count__37240_37531 = (0);
var i__37241_37532 = (0);
while(true){
if((i__37241_37532 < count__37240_37531)){
var map__37245_37533 = chunk__37239_37530.cljs$core$IIndexed$_nth$arity$2(null,i__37241_37532);
var map__37245_37534__$1 = cljs.core.__destructure_map(map__37245_37533);
var task_37535 = map__37245_37534__$1;
var fn_str_37536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37245_37534__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37245_37534__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37538 = goog.getObjectByName(fn_str_37536,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37537)].join(''));

(fn_obj_37538.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37538.cljs$core$IFn$_invoke$arity$2(path,new_link_37528) : fn_obj_37538.call(null,path,new_link_37528));


var G__37539 = seq__37237_37529;
var G__37540 = chunk__37239_37530;
var G__37541 = count__37240_37531;
var G__37542 = (i__37241_37532 + (1));
seq__37237_37529 = G__37539;
chunk__37239_37530 = G__37540;
count__37240_37531 = G__37541;
i__37241_37532 = G__37542;
continue;
} else {
var temp__5753__auto___37543__$2 = cljs.core.seq(seq__37237_37529);
if(temp__5753__auto___37543__$2){
var seq__37237_37544__$1 = temp__5753__auto___37543__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37237_37544__$1)){
var c__5568__auto___37545 = cljs.core.chunk_first(seq__37237_37544__$1);
var G__37546 = cljs.core.chunk_rest(seq__37237_37544__$1);
var G__37547 = c__5568__auto___37545;
var G__37548 = cljs.core.count(c__5568__auto___37545);
var G__37549 = (0);
seq__37237_37529 = G__37546;
chunk__37239_37530 = G__37547;
count__37240_37531 = G__37548;
i__37241_37532 = G__37549;
continue;
} else {
var map__37251_37550 = cljs.core.first(seq__37237_37544__$1);
var map__37251_37551__$1 = cljs.core.__destructure_map(map__37251_37550);
var task_37552 = map__37251_37551__$1;
var fn_str_37553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37251_37551__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37251_37551__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37555 = goog.getObjectByName(fn_str_37553,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37554)].join(''));

(fn_obj_37555.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37555.cljs$core$IFn$_invoke$arity$2(path,new_link_37528) : fn_obj_37555.call(null,path,new_link_37528));


var G__37556 = cljs.core.next(seq__37237_37544__$1);
var G__37557 = null;
var G__37558 = (0);
var G__37559 = (0);
seq__37237_37529 = G__37556;
chunk__37239_37530 = G__37557;
count__37240_37531 = G__37558;
i__37241_37532 = G__37559;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37526);
});})(seq__37193_37469,chunk__37197_37470,count__37198_37471,i__37199_37472,seq__36899,chunk__36901,count__36902,i__36903,new_link_37528,path_match_37527,node_37526,seq__37193_37520__$1,temp__5753__auto___37519__$1,path,seq__36899__$1,temp__5753__auto__,map__36898,map__36898__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37527], 0));

goog.dom.insertSiblingAfter(new_link_37528,node_37526);


var G__37560 = cljs.core.next(seq__37193_37520__$1);
var G__37561 = null;
var G__37562 = (0);
var G__37563 = (0);
seq__37193_37469 = G__37560;
chunk__37197_37470 = G__37561;
count__37198_37471 = G__37562;
i__37199_37472 = G__37563;
continue;
} else {
var G__37564 = cljs.core.next(seq__37193_37520__$1);
var G__37565 = null;
var G__37566 = (0);
var G__37567 = (0);
seq__37193_37469 = G__37564;
chunk__37197_37470 = G__37565;
count__37198_37471 = G__37566;
i__37199_37472 = G__37567;
continue;
}
} else {
var G__37569 = cljs.core.next(seq__37193_37520__$1);
var G__37570 = null;
var G__37571 = (0);
var G__37572 = (0);
seq__37193_37469 = G__37569;
chunk__37197_37470 = G__37570;
count__37198_37471 = G__37571;
i__37199_37472 = G__37572;
continue;
}
}
} else {
}
}
break;
}


var G__37573 = cljs.core.next(seq__36899__$1);
var G__37574 = null;
var G__37575 = (0);
var G__37576 = (0);
seq__36899 = G__37573;
chunk__36901 = G__37574;
count__36902 = G__37575;
i__36903 = G__37576;
continue;
} else {
var G__37577 = cljs.core.next(seq__36899__$1);
var G__37578 = null;
var G__37579 = (0);
var G__37580 = (0);
seq__36899 = G__37577;
chunk__36901 = G__37578;
count__36902 = G__37579;
i__36903 = G__37580;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__37257){
var map__37258 = p__37257;
var map__37258__$1 = cljs.core.__destructure_map(map__37258);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37258__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37259,done,error){
var map__37260 = p__37259;
var map__37260__$1 = cljs.core.__destructure_map(map__37260);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37260__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37263,done,error){
var map__37264 = p__37263;
var map__37264__$1 = cljs.core.__destructure_map(map__37264);
var msg = map__37264__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37264__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37264__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37264__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37265){
var map__37266 = p__37265;
var map__37266__$1 = cljs.core.__destructure_map(map__37266);
var src = map__37266__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37266__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37267 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37267) : done.call(null,G__37267));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37268){
var map__37269 = p__37268;
var map__37269__$1 = cljs.core.__destructure_map(map__37269);
var msg__$1 = map__37269__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37269__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37270){var ex = e37270;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37272){
var map__37273 = p__37272;
var map__37273__$1 = cljs.core.__destructure_map(map__37273);
var env = map__37273__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37273__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37276){
var map__37277 = p__37276;
var map__37277__$1 = cljs.core.__destructure_map(map__37277);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37277__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37277__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37279){
var map__37280 = p__37279;
var map__37280__$1 = cljs.core.__destructure_map(map__37280);
var svc = map__37280__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37280__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
