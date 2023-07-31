goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37626 = arguments.length;
var i__5770__auto___37627 = (0);
while(true){
if((i__5770__auto___37627 < len__5769__auto___37626)){
args__5775__auto__.push((arguments[i__5770__auto___37627]));

var G__37628 = (i__5770__auto___37627 + (1));
i__5770__auto___37627 = G__37628;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37183){
var G__37184 = cljs.core.first(seq37183);
var seq37183__$1 = cljs.core.next(seq37183);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37184,seq37183__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37188 = cljs.core.seq(sources);
var chunk__37189 = null;
var count__37190 = (0);
var i__37191 = (0);
while(true){
if((i__37191 < count__37190)){
var map__37196 = chunk__37189.cljs$core$IIndexed$_nth$arity$2(null,i__37191);
var map__37196__$1 = cljs.core.__destructure_map(map__37196);
var src = map__37196__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37197){var e_37629 = e37197;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37629);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37629.message)].join('')));
}

var G__37630 = seq__37188;
var G__37631 = chunk__37189;
var G__37632 = count__37190;
var G__37633 = (i__37191 + (1));
seq__37188 = G__37630;
chunk__37189 = G__37631;
count__37190 = G__37632;
i__37191 = G__37633;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37188);
if(temp__5804__auto__){
var seq__37188__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37188__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37188__$1);
var G__37634 = cljs.core.chunk_rest(seq__37188__$1);
var G__37635 = c__5568__auto__;
var G__37636 = cljs.core.count(c__5568__auto__);
var G__37637 = (0);
seq__37188 = G__37634;
chunk__37189 = G__37635;
count__37190 = G__37636;
i__37191 = G__37637;
continue;
} else {
var map__37198 = cljs.core.first(seq__37188__$1);
var map__37198__$1 = cljs.core.__destructure_map(map__37198);
var src = map__37198__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37198__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37198__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37198__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37198__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37199){var e_37638 = e37199;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37638);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37638.message)].join('')));
}

var G__37639 = cljs.core.next(seq__37188__$1);
var G__37640 = null;
var G__37641 = (0);
var G__37642 = (0);
seq__37188 = G__37639;
chunk__37189 = G__37640;
count__37190 = G__37641;
i__37191 = G__37642;
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
var seq__37202 = cljs.core.seq(js_requires);
var chunk__37203 = null;
var count__37204 = (0);
var i__37205 = (0);
while(true){
if((i__37205 < count__37204)){
var js_ns = chunk__37203.cljs$core$IIndexed$_nth$arity$2(null,i__37205);
var require_str_37644 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37644);


var G__37645 = seq__37202;
var G__37646 = chunk__37203;
var G__37647 = count__37204;
var G__37648 = (i__37205 + (1));
seq__37202 = G__37645;
chunk__37203 = G__37646;
count__37204 = G__37647;
i__37205 = G__37648;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37202);
if(temp__5804__auto__){
var seq__37202__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37202__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37202__$1);
var G__37649 = cljs.core.chunk_rest(seq__37202__$1);
var G__37650 = c__5568__auto__;
var G__37651 = cljs.core.count(c__5568__auto__);
var G__37652 = (0);
seq__37202 = G__37649;
chunk__37203 = G__37650;
count__37204 = G__37651;
i__37205 = G__37652;
continue;
} else {
var js_ns = cljs.core.first(seq__37202__$1);
var require_str_37653 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37653);


var G__37654 = cljs.core.next(seq__37202__$1);
var G__37655 = null;
var G__37656 = (0);
var G__37657 = (0);
seq__37202 = G__37654;
chunk__37203 = G__37655;
count__37204 = G__37656;
i__37205 = G__37657;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37211){
var map__37212 = p__37211;
var map__37212__$1 = cljs.core.__destructure_map(map__37212);
var msg = map__37212__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37212__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37212__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37213(s__37214){
return (new cljs.core.LazySeq(null,(function (){
var s__37214__$1 = s__37214;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37214__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__37223 = cljs.core.first(xs__6360__auto__);
var map__37223__$1 = cljs.core.__destructure_map(map__37223);
var src = map__37223__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__37214__$1,map__37223,map__37223__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37212,map__37212__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37213_$_iter__37215(s__37216){
return (new cljs.core.LazySeq(null,((function (s__37214__$1,map__37223,map__37223__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37212,map__37212__$1,msg,info,reload_info){
return (function (){
var s__37216__$1 = s__37216;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__37216__$1);
if(temp__5804__auto____$1){
var s__37216__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37216__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37216__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37218 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37217 = (0);
while(true){
if((i__37217 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__37217);
cljs.core.chunk_append(b__37218,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37658 = (i__37217 + (1));
i__37217 = G__37658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37218),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37213_$_iter__37215(cljs.core.chunk_rest(s__37216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37218),null);
}
} else {
var warning = cljs.core.first(s__37216__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37213_$_iter__37215(cljs.core.rest(s__37216__$2)));
}
} else {
return null;
}
break;
}
});})(s__37214__$1,map__37223,map__37223__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37212,map__37212__$1,msg,info,reload_info))
,null,null));
});})(s__37214__$1,map__37223,map__37223__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37212,map__37212__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37213(cljs.core.rest(s__37214__$1)));
} else {
var G__37659 = cljs.core.rest(s__37214__$1);
s__37214__$1 = G__37659;
continue;
}
} else {
var G__37660 = cljs.core.rest(s__37214__$1);
s__37214__$1 = G__37660;
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
var seq__37224_37661 = cljs.core.seq(warnings);
var chunk__37225_37662 = null;
var count__37226_37663 = (0);
var i__37227_37664 = (0);
while(true){
if((i__37227_37664 < count__37226_37663)){
var map__37237_37665 = chunk__37225_37662.cljs$core$IIndexed$_nth$arity$2(null,i__37227_37664);
var map__37237_37666__$1 = cljs.core.__destructure_map(map__37237_37665);
var w_37667 = map__37237_37666__$1;
var msg_37668__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37237_37666__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37237_37666__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37237_37666__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37237_37666__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37671)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37669),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37670),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37668__$1)].join(''));


var G__37673 = seq__37224_37661;
var G__37674 = chunk__37225_37662;
var G__37675 = count__37226_37663;
var G__37676 = (i__37227_37664 + (1));
seq__37224_37661 = G__37673;
chunk__37225_37662 = G__37674;
count__37226_37663 = G__37675;
i__37227_37664 = G__37676;
continue;
} else {
var temp__5804__auto___37677 = cljs.core.seq(seq__37224_37661);
if(temp__5804__auto___37677){
var seq__37224_37678__$1 = temp__5804__auto___37677;
if(cljs.core.chunked_seq_QMARK_(seq__37224_37678__$1)){
var c__5568__auto___37679 = cljs.core.chunk_first(seq__37224_37678__$1);
var G__37680 = cljs.core.chunk_rest(seq__37224_37678__$1);
var G__37681 = c__5568__auto___37679;
var G__37682 = cljs.core.count(c__5568__auto___37679);
var G__37683 = (0);
seq__37224_37661 = G__37680;
chunk__37225_37662 = G__37681;
count__37226_37663 = G__37682;
i__37227_37664 = G__37683;
continue;
} else {
var map__37240_37684 = cljs.core.first(seq__37224_37678__$1);
var map__37240_37685__$1 = cljs.core.__destructure_map(map__37240_37684);
var w_37686 = map__37240_37685__$1;
var msg_37687__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37240_37685__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37240_37685__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37240_37685__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37240_37685__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37690)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37688),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37689),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37687__$1)].join(''));


var G__37691 = cljs.core.next(seq__37224_37678__$1);
var G__37692 = null;
var G__37693 = (0);
var G__37694 = (0);
seq__37224_37661 = G__37691;
chunk__37225_37662 = G__37692;
count__37226_37663 = G__37693;
i__37227_37664 = G__37694;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37210_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37210_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37248){
var map__37249 = p__37248;
var map__37249__$1 = cljs.core.__destructure_map(map__37249);
var msg = map__37249__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37249__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37249__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37251 = cljs.core.seq(updates);
var chunk__37253 = null;
var count__37254 = (0);
var i__37255 = (0);
while(true){
if((i__37255 < count__37254)){
var path = chunk__37253.cljs$core$IIndexed$_nth$arity$2(null,i__37255);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37398_37695 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37402_37696 = null;
var count__37403_37697 = (0);
var i__37404_37698 = (0);
while(true){
if((i__37404_37698 < count__37403_37697)){
var node_37699 = chunk__37402_37696.cljs$core$IIndexed$_nth$arity$2(null,i__37404_37698);
if(cljs.core.not(node_37699.shadow$old)){
var path_match_37700 = shadow.cljs.devtools.client.browser.match_paths(node_37699.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37700)){
var new_link_37701 = (function (){var G__37504 = node_37699.cloneNode(true);
G__37504.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37700),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37504;
})();
(node_37699.shadow$old = true);

(new_link_37701.onload = ((function (seq__37398_37695,chunk__37402_37696,count__37403_37697,i__37404_37698,seq__37251,chunk__37253,count__37254,i__37255,new_link_37701,path_match_37700,node_37699,path,map__37249,map__37249__$1,msg,updates,reload_info){
return (function (e){
var seq__37505_37702 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37507_37703 = null;
var count__37508_37704 = (0);
var i__37509_37705 = (0);
while(true){
if((i__37509_37705 < count__37508_37704)){
var map__37513_37706 = chunk__37507_37703.cljs$core$IIndexed$_nth$arity$2(null,i__37509_37705);
var map__37513_37707__$1 = cljs.core.__destructure_map(map__37513_37706);
var task_37708 = map__37513_37707__$1;
var fn_str_37709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37513_37707__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37513_37707__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37711 = goog.getObjectByName(fn_str_37709,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37710)].join(''));

(fn_obj_37711.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37711.cljs$core$IFn$_invoke$arity$2(path,new_link_37701) : fn_obj_37711.call(null,path,new_link_37701));


var G__37712 = seq__37505_37702;
var G__37713 = chunk__37507_37703;
var G__37714 = count__37508_37704;
var G__37715 = (i__37509_37705 + (1));
seq__37505_37702 = G__37712;
chunk__37507_37703 = G__37713;
count__37508_37704 = G__37714;
i__37509_37705 = G__37715;
continue;
} else {
var temp__5804__auto___37716 = cljs.core.seq(seq__37505_37702);
if(temp__5804__auto___37716){
var seq__37505_37717__$1 = temp__5804__auto___37716;
if(cljs.core.chunked_seq_QMARK_(seq__37505_37717__$1)){
var c__5568__auto___37718 = cljs.core.chunk_first(seq__37505_37717__$1);
var G__37719 = cljs.core.chunk_rest(seq__37505_37717__$1);
var G__37720 = c__5568__auto___37718;
var G__37721 = cljs.core.count(c__5568__auto___37718);
var G__37722 = (0);
seq__37505_37702 = G__37719;
chunk__37507_37703 = G__37720;
count__37508_37704 = G__37721;
i__37509_37705 = G__37722;
continue;
} else {
var map__37515_37723 = cljs.core.first(seq__37505_37717__$1);
var map__37515_37724__$1 = cljs.core.__destructure_map(map__37515_37723);
var task_37725 = map__37515_37724__$1;
var fn_str_37726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37515_37724__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37515_37724__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37728 = goog.getObjectByName(fn_str_37726,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37727)].join(''));

(fn_obj_37728.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37728.cljs$core$IFn$_invoke$arity$2(path,new_link_37701) : fn_obj_37728.call(null,path,new_link_37701));


var G__37729 = cljs.core.next(seq__37505_37717__$1);
var G__37730 = null;
var G__37731 = (0);
var G__37732 = (0);
seq__37505_37702 = G__37729;
chunk__37507_37703 = G__37730;
count__37508_37704 = G__37731;
i__37509_37705 = G__37732;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37699);
});})(seq__37398_37695,chunk__37402_37696,count__37403_37697,i__37404_37698,seq__37251,chunk__37253,count__37254,i__37255,new_link_37701,path_match_37700,node_37699,path,map__37249,map__37249__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37700], 0));

goog.dom.insertSiblingAfter(new_link_37701,node_37699);


var G__37733 = seq__37398_37695;
var G__37734 = chunk__37402_37696;
var G__37735 = count__37403_37697;
var G__37736 = (i__37404_37698 + (1));
seq__37398_37695 = G__37733;
chunk__37402_37696 = G__37734;
count__37403_37697 = G__37735;
i__37404_37698 = G__37736;
continue;
} else {
var G__37737 = seq__37398_37695;
var G__37738 = chunk__37402_37696;
var G__37739 = count__37403_37697;
var G__37740 = (i__37404_37698 + (1));
seq__37398_37695 = G__37737;
chunk__37402_37696 = G__37738;
count__37403_37697 = G__37739;
i__37404_37698 = G__37740;
continue;
}
} else {
var G__37741 = seq__37398_37695;
var G__37742 = chunk__37402_37696;
var G__37743 = count__37403_37697;
var G__37744 = (i__37404_37698 + (1));
seq__37398_37695 = G__37741;
chunk__37402_37696 = G__37742;
count__37403_37697 = G__37743;
i__37404_37698 = G__37744;
continue;
}
} else {
var temp__5804__auto___37746 = cljs.core.seq(seq__37398_37695);
if(temp__5804__auto___37746){
var seq__37398_37747__$1 = temp__5804__auto___37746;
if(cljs.core.chunked_seq_QMARK_(seq__37398_37747__$1)){
var c__5568__auto___37748 = cljs.core.chunk_first(seq__37398_37747__$1);
var G__37749 = cljs.core.chunk_rest(seq__37398_37747__$1);
var G__37750 = c__5568__auto___37748;
var G__37751 = cljs.core.count(c__5568__auto___37748);
var G__37752 = (0);
seq__37398_37695 = G__37749;
chunk__37402_37696 = G__37750;
count__37403_37697 = G__37751;
i__37404_37698 = G__37752;
continue;
} else {
var node_37753 = cljs.core.first(seq__37398_37747__$1);
if(cljs.core.not(node_37753.shadow$old)){
var path_match_37754 = shadow.cljs.devtools.client.browser.match_paths(node_37753.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37754)){
var new_link_37755 = (function (){var G__37516 = node_37753.cloneNode(true);
G__37516.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37754),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37516;
})();
(node_37753.shadow$old = true);

(new_link_37755.onload = ((function (seq__37398_37695,chunk__37402_37696,count__37403_37697,i__37404_37698,seq__37251,chunk__37253,count__37254,i__37255,new_link_37755,path_match_37754,node_37753,seq__37398_37747__$1,temp__5804__auto___37746,path,map__37249,map__37249__$1,msg,updates,reload_info){
return (function (e){
var seq__37517_37756 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37519_37757 = null;
var count__37520_37758 = (0);
var i__37521_37759 = (0);
while(true){
if((i__37521_37759 < count__37520_37758)){
var map__37525_37760 = chunk__37519_37757.cljs$core$IIndexed$_nth$arity$2(null,i__37521_37759);
var map__37525_37761__$1 = cljs.core.__destructure_map(map__37525_37760);
var task_37762 = map__37525_37761__$1;
var fn_str_37763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37525_37761__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37525_37761__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37765 = goog.getObjectByName(fn_str_37763,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37764)].join(''));

(fn_obj_37765.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37765.cljs$core$IFn$_invoke$arity$2(path,new_link_37755) : fn_obj_37765.call(null,path,new_link_37755));


var G__37766 = seq__37517_37756;
var G__37767 = chunk__37519_37757;
var G__37768 = count__37520_37758;
var G__37769 = (i__37521_37759 + (1));
seq__37517_37756 = G__37766;
chunk__37519_37757 = G__37767;
count__37520_37758 = G__37768;
i__37521_37759 = G__37769;
continue;
} else {
var temp__5804__auto___37770__$1 = cljs.core.seq(seq__37517_37756);
if(temp__5804__auto___37770__$1){
var seq__37517_37771__$1 = temp__5804__auto___37770__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37517_37771__$1)){
var c__5568__auto___37772 = cljs.core.chunk_first(seq__37517_37771__$1);
var G__37773 = cljs.core.chunk_rest(seq__37517_37771__$1);
var G__37774 = c__5568__auto___37772;
var G__37775 = cljs.core.count(c__5568__auto___37772);
var G__37776 = (0);
seq__37517_37756 = G__37773;
chunk__37519_37757 = G__37774;
count__37520_37758 = G__37775;
i__37521_37759 = G__37776;
continue;
} else {
var map__37526_37777 = cljs.core.first(seq__37517_37771__$1);
var map__37526_37778__$1 = cljs.core.__destructure_map(map__37526_37777);
var task_37779 = map__37526_37778__$1;
var fn_str_37780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37526_37778__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37526_37778__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37782 = goog.getObjectByName(fn_str_37780,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37781)].join(''));

(fn_obj_37782.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37782.cljs$core$IFn$_invoke$arity$2(path,new_link_37755) : fn_obj_37782.call(null,path,new_link_37755));


var G__37783 = cljs.core.next(seq__37517_37771__$1);
var G__37784 = null;
var G__37785 = (0);
var G__37786 = (0);
seq__37517_37756 = G__37783;
chunk__37519_37757 = G__37784;
count__37520_37758 = G__37785;
i__37521_37759 = G__37786;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37753);
});})(seq__37398_37695,chunk__37402_37696,count__37403_37697,i__37404_37698,seq__37251,chunk__37253,count__37254,i__37255,new_link_37755,path_match_37754,node_37753,seq__37398_37747__$1,temp__5804__auto___37746,path,map__37249,map__37249__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37754], 0));

goog.dom.insertSiblingAfter(new_link_37755,node_37753);


var G__37787 = cljs.core.next(seq__37398_37747__$1);
var G__37788 = null;
var G__37789 = (0);
var G__37790 = (0);
seq__37398_37695 = G__37787;
chunk__37402_37696 = G__37788;
count__37403_37697 = G__37789;
i__37404_37698 = G__37790;
continue;
} else {
var G__37791 = cljs.core.next(seq__37398_37747__$1);
var G__37792 = null;
var G__37793 = (0);
var G__37794 = (0);
seq__37398_37695 = G__37791;
chunk__37402_37696 = G__37792;
count__37403_37697 = G__37793;
i__37404_37698 = G__37794;
continue;
}
} else {
var G__37795 = cljs.core.next(seq__37398_37747__$1);
var G__37796 = null;
var G__37797 = (0);
var G__37798 = (0);
seq__37398_37695 = G__37795;
chunk__37402_37696 = G__37796;
count__37403_37697 = G__37797;
i__37404_37698 = G__37798;
continue;
}
}
} else {
}
}
break;
}


var G__37799 = seq__37251;
var G__37800 = chunk__37253;
var G__37801 = count__37254;
var G__37802 = (i__37255 + (1));
seq__37251 = G__37799;
chunk__37253 = G__37800;
count__37254 = G__37801;
i__37255 = G__37802;
continue;
} else {
var G__37803 = seq__37251;
var G__37804 = chunk__37253;
var G__37805 = count__37254;
var G__37806 = (i__37255 + (1));
seq__37251 = G__37803;
chunk__37253 = G__37804;
count__37254 = G__37805;
i__37255 = G__37806;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37251);
if(temp__5804__auto__){
var seq__37251__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37251__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37251__$1);
var G__37807 = cljs.core.chunk_rest(seq__37251__$1);
var G__37808 = c__5568__auto__;
var G__37809 = cljs.core.count(c__5568__auto__);
var G__37810 = (0);
seq__37251 = G__37807;
chunk__37253 = G__37808;
count__37254 = G__37809;
i__37255 = G__37810;
continue;
} else {
var path = cljs.core.first(seq__37251__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37527_37811 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37531_37812 = null;
var count__37532_37813 = (0);
var i__37533_37814 = (0);
while(true){
if((i__37533_37814 < count__37532_37813)){
var node_37815 = chunk__37531_37812.cljs$core$IIndexed$_nth$arity$2(null,i__37533_37814);
if(cljs.core.not(node_37815.shadow$old)){
var path_match_37816 = shadow.cljs.devtools.client.browser.match_paths(node_37815.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37816)){
var new_link_37817 = (function (){var G__37560 = node_37815.cloneNode(true);
G__37560.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37816),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37560;
})();
(node_37815.shadow$old = true);

(new_link_37817.onload = ((function (seq__37527_37811,chunk__37531_37812,count__37532_37813,i__37533_37814,seq__37251,chunk__37253,count__37254,i__37255,new_link_37817,path_match_37816,node_37815,path,seq__37251__$1,temp__5804__auto__,map__37249,map__37249__$1,msg,updates,reload_info){
return (function (e){
var seq__37561_37818 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37563_37819 = null;
var count__37564_37820 = (0);
var i__37565_37821 = (0);
while(true){
if((i__37565_37821 < count__37564_37820)){
var map__37574_37822 = chunk__37563_37819.cljs$core$IIndexed$_nth$arity$2(null,i__37565_37821);
var map__37574_37823__$1 = cljs.core.__destructure_map(map__37574_37822);
var task_37824 = map__37574_37823__$1;
var fn_str_37825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574_37823__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574_37823__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37827 = goog.getObjectByName(fn_str_37825,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37826)].join(''));

(fn_obj_37827.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37827.cljs$core$IFn$_invoke$arity$2(path,new_link_37817) : fn_obj_37827.call(null,path,new_link_37817));


var G__37828 = seq__37561_37818;
var G__37829 = chunk__37563_37819;
var G__37830 = count__37564_37820;
var G__37831 = (i__37565_37821 + (1));
seq__37561_37818 = G__37828;
chunk__37563_37819 = G__37829;
count__37564_37820 = G__37830;
i__37565_37821 = G__37831;
continue;
} else {
var temp__5804__auto___37832__$1 = cljs.core.seq(seq__37561_37818);
if(temp__5804__auto___37832__$1){
var seq__37561_37833__$1 = temp__5804__auto___37832__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37561_37833__$1)){
var c__5568__auto___37834 = cljs.core.chunk_first(seq__37561_37833__$1);
var G__37835 = cljs.core.chunk_rest(seq__37561_37833__$1);
var G__37836 = c__5568__auto___37834;
var G__37837 = cljs.core.count(c__5568__auto___37834);
var G__37838 = (0);
seq__37561_37818 = G__37835;
chunk__37563_37819 = G__37836;
count__37564_37820 = G__37837;
i__37565_37821 = G__37838;
continue;
} else {
var map__37575_37839 = cljs.core.first(seq__37561_37833__$1);
var map__37575_37840__$1 = cljs.core.__destructure_map(map__37575_37839);
var task_37841 = map__37575_37840__$1;
var fn_str_37842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575_37840__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575_37840__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37844 = goog.getObjectByName(fn_str_37842,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37843)].join(''));

(fn_obj_37844.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37844.cljs$core$IFn$_invoke$arity$2(path,new_link_37817) : fn_obj_37844.call(null,path,new_link_37817));


var G__37845 = cljs.core.next(seq__37561_37833__$1);
var G__37846 = null;
var G__37847 = (0);
var G__37848 = (0);
seq__37561_37818 = G__37845;
chunk__37563_37819 = G__37846;
count__37564_37820 = G__37847;
i__37565_37821 = G__37848;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37815);
});})(seq__37527_37811,chunk__37531_37812,count__37532_37813,i__37533_37814,seq__37251,chunk__37253,count__37254,i__37255,new_link_37817,path_match_37816,node_37815,path,seq__37251__$1,temp__5804__auto__,map__37249,map__37249__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37816], 0));

goog.dom.insertSiblingAfter(new_link_37817,node_37815);


var G__37849 = seq__37527_37811;
var G__37850 = chunk__37531_37812;
var G__37851 = count__37532_37813;
var G__37852 = (i__37533_37814 + (1));
seq__37527_37811 = G__37849;
chunk__37531_37812 = G__37850;
count__37532_37813 = G__37851;
i__37533_37814 = G__37852;
continue;
} else {
var G__37853 = seq__37527_37811;
var G__37854 = chunk__37531_37812;
var G__37855 = count__37532_37813;
var G__37856 = (i__37533_37814 + (1));
seq__37527_37811 = G__37853;
chunk__37531_37812 = G__37854;
count__37532_37813 = G__37855;
i__37533_37814 = G__37856;
continue;
}
} else {
var G__37857 = seq__37527_37811;
var G__37858 = chunk__37531_37812;
var G__37859 = count__37532_37813;
var G__37860 = (i__37533_37814 + (1));
seq__37527_37811 = G__37857;
chunk__37531_37812 = G__37858;
count__37532_37813 = G__37859;
i__37533_37814 = G__37860;
continue;
}
} else {
var temp__5804__auto___37861__$1 = cljs.core.seq(seq__37527_37811);
if(temp__5804__auto___37861__$1){
var seq__37527_37862__$1 = temp__5804__auto___37861__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37527_37862__$1)){
var c__5568__auto___37863 = cljs.core.chunk_first(seq__37527_37862__$1);
var G__37864 = cljs.core.chunk_rest(seq__37527_37862__$1);
var G__37865 = c__5568__auto___37863;
var G__37866 = cljs.core.count(c__5568__auto___37863);
var G__37867 = (0);
seq__37527_37811 = G__37864;
chunk__37531_37812 = G__37865;
count__37532_37813 = G__37866;
i__37533_37814 = G__37867;
continue;
} else {
var node_37868 = cljs.core.first(seq__37527_37862__$1);
if(cljs.core.not(node_37868.shadow$old)){
var path_match_37869 = shadow.cljs.devtools.client.browser.match_paths(node_37868.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37869)){
var new_link_37870 = (function (){var G__37577 = node_37868.cloneNode(true);
G__37577.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37869),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37577;
})();
(node_37868.shadow$old = true);

(new_link_37870.onload = ((function (seq__37527_37811,chunk__37531_37812,count__37532_37813,i__37533_37814,seq__37251,chunk__37253,count__37254,i__37255,new_link_37870,path_match_37869,node_37868,seq__37527_37862__$1,temp__5804__auto___37861__$1,path,seq__37251__$1,temp__5804__auto__,map__37249,map__37249__$1,msg,updates,reload_info){
return (function (e){
var seq__37579_37871 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37581_37872 = null;
var count__37582_37873 = (0);
var i__37583_37874 = (0);
while(true){
if((i__37583_37874 < count__37582_37873)){
var map__37587_37875 = chunk__37581_37872.cljs$core$IIndexed$_nth$arity$2(null,i__37583_37874);
var map__37587_37876__$1 = cljs.core.__destructure_map(map__37587_37875);
var task_37877 = map__37587_37876__$1;
var fn_str_37878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587_37876__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587_37876__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37880 = goog.getObjectByName(fn_str_37878,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37879)].join(''));

(fn_obj_37880.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37880.cljs$core$IFn$_invoke$arity$2(path,new_link_37870) : fn_obj_37880.call(null,path,new_link_37870));


var G__37881 = seq__37579_37871;
var G__37882 = chunk__37581_37872;
var G__37883 = count__37582_37873;
var G__37884 = (i__37583_37874 + (1));
seq__37579_37871 = G__37881;
chunk__37581_37872 = G__37882;
count__37582_37873 = G__37883;
i__37583_37874 = G__37884;
continue;
} else {
var temp__5804__auto___37885__$2 = cljs.core.seq(seq__37579_37871);
if(temp__5804__auto___37885__$2){
var seq__37579_37886__$1 = temp__5804__auto___37885__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37579_37886__$1)){
var c__5568__auto___37887 = cljs.core.chunk_first(seq__37579_37886__$1);
var G__37888 = cljs.core.chunk_rest(seq__37579_37886__$1);
var G__37889 = c__5568__auto___37887;
var G__37890 = cljs.core.count(c__5568__auto___37887);
var G__37891 = (0);
seq__37579_37871 = G__37888;
chunk__37581_37872 = G__37889;
count__37582_37873 = G__37890;
i__37583_37874 = G__37891;
continue;
} else {
var map__37588_37892 = cljs.core.first(seq__37579_37886__$1);
var map__37588_37893__$1 = cljs.core.__destructure_map(map__37588_37892);
var task_37894 = map__37588_37893__$1;
var fn_str_37895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37588_37893__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37588_37893__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37897 = goog.getObjectByName(fn_str_37895,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37896)].join(''));

(fn_obj_37897.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37897.cljs$core$IFn$_invoke$arity$2(path,new_link_37870) : fn_obj_37897.call(null,path,new_link_37870));


var G__37898 = cljs.core.next(seq__37579_37886__$1);
var G__37899 = null;
var G__37900 = (0);
var G__37901 = (0);
seq__37579_37871 = G__37898;
chunk__37581_37872 = G__37899;
count__37582_37873 = G__37900;
i__37583_37874 = G__37901;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37868);
});})(seq__37527_37811,chunk__37531_37812,count__37532_37813,i__37533_37814,seq__37251,chunk__37253,count__37254,i__37255,new_link_37870,path_match_37869,node_37868,seq__37527_37862__$1,temp__5804__auto___37861__$1,path,seq__37251__$1,temp__5804__auto__,map__37249,map__37249__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37869], 0));

goog.dom.insertSiblingAfter(new_link_37870,node_37868);


var G__37902 = cljs.core.next(seq__37527_37862__$1);
var G__37903 = null;
var G__37904 = (0);
var G__37905 = (0);
seq__37527_37811 = G__37902;
chunk__37531_37812 = G__37903;
count__37532_37813 = G__37904;
i__37533_37814 = G__37905;
continue;
} else {
var G__37906 = cljs.core.next(seq__37527_37862__$1);
var G__37907 = null;
var G__37908 = (0);
var G__37909 = (0);
seq__37527_37811 = G__37906;
chunk__37531_37812 = G__37907;
count__37532_37813 = G__37908;
i__37533_37814 = G__37909;
continue;
}
} else {
var G__37910 = cljs.core.next(seq__37527_37862__$1);
var G__37911 = null;
var G__37912 = (0);
var G__37913 = (0);
seq__37527_37811 = G__37910;
chunk__37531_37812 = G__37911;
count__37532_37813 = G__37912;
i__37533_37814 = G__37913;
continue;
}
}
} else {
}
}
break;
}


var G__37914 = cljs.core.next(seq__37251__$1);
var G__37915 = null;
var G__37916 = (0);
var G__37917 = (0);
seq__37251 = G__37914;
chunk__37253 = G__37915;
count__37254 = G__37916;
i__37255 = G__37917;
continue;
} else {
var G__37918 = cljs.core.next(seq__37251__$1);
var G__37919 = null;
var G__37920 = (0);
var G__37921 = (0);
seq__37251 = G__37918;
chunk__37253 = G__37919;
count__37254 = G__37920;
i__37255 = G__37921;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__37596){
var map__37597 = p__37596;
var map__37597__$1 = cljs.core.__destructure_map(map__37597);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37597__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37598,done,error){
var map__37599 = p__37598;
var map__37599__$1 = cljs.core.__destructure_map(map__37599);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37599__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37601,done,error){
var map__37602 = p__37601;
var map__37602__$1 = cljs.core.__destructure_map(map__37602);
var msg = map__37602__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37602__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37602__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37602__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37603){
var map__37604 = p__37603;
var map__37604__$1 = cljs.core.__destructure_map(map__37604);
var src = map__37604__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37604__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37607 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37607) : done.call(null,G__37607));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37608){
var map__37609 = p__37608;
var map__37609__$1 = cljs.core.__destructure_map(map__37609);
var msg__$1 = map__37609__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37609__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37610){var ex = e37610;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37611){
var map__37612 = p__37611;
var map__37612__$1 = cljs.core.__destructure_map(map__37612);
var env = map__37612__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37612__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37613){
var map__37614 = p__37613;
var map__37614__$1 = cljs.core.__destructure_map(map__37614);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37614__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37614__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37621){
var map__37623 = p__37621;
var map__37623__$1 = cljs.core.__destructure_map(map__37623);
var svc = map__37623__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37623__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
