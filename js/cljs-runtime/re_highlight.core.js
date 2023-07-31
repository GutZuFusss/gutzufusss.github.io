goog.provide('re_highlight.core');
goog.scope(function(){
  re_highlight.core.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$highlight_DOT_js$lib$core=shadow.js.require("module$node_modules$highlight_DOT_js$lib$core", {});
var module$node_modules$highlight_DOT_js$lib$languages$clojure=shadow.js.require("module$node_modules$highlight_DOT_js$lib$languages$clojure", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
re_highlight.core.hljs_highlight_element = re_highlight.core.goog$module$goog$object.get(module$node_modules$highlight_DOT_js$lib$core,"highlightElement");
re_highlight.core.hljs_init_highlighting = re_highlight.core.goog$module$goog$object.get(module$node_modules$highlight_DOT_js$lib$core,"initHighlighting");
re_highlight.core.hljs_register_language = re_highlight.core.goog$module$goog$object.get(module$node_modules$highlight_DOT_js$lib$core,"registerLanguage");
/**
 * Return true if the Highlight.js library exposes the API we expect to see in
 * a compatible version, otherwise false. If this returns false, it is likely
 * that your transitive dependencies are pulling in a different version of
 * Highlight.js to the version that re-highlight depends on.
 */
re_highlight.core.hljs_compatible_QMARK_ = (function re_highlight$core$hljs_compatible_QMARK_(){
return ((cljs.core.fn_QMARK_(re_highlight.core.hljs_highlight_element)) && (((cljs.core.fn_QMARK_(re_highlight.core.hljs_init_highlighting)) && (cljs.core.fn_QMARK_(re_highlight.core.hljs_register_language)))));
});
re_highlight.core.register_language = (function re_highlight$core$register_language(label,js_obj){
if(cljs.core.fn_QMARK_(re_highlight.core.hljs_register_language)){
return (re_highlight.core.hljs_register_language.cljs$core$IFn$_invoke$arity$2 ? re_highlight.core.hljs_register_language.cljs$core$IFn$_invoke$arity$2(label,js_obj) : re_highlight.core.hljs_register_language.call(null,label,js_obj));
} else {
return null;
}
});
re_highlight.core.register_language("clojure",module$node_modules$highlight_DOT_js$lib$languages$clojure);
re_highlight.core.highlight = (function re_highlight$core$highlight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28234 = arguments.length;
var i__5770__auto___28235 = (0);
while(true){
if((i__5770__auto___28235 < len__5769__auto___28234)){
args__5775__auto__.push((arguments[i__5770__auto___28235]));

var G__28236 = (i__5770__auto___28235 + (1));
i__5770__auto___28235 = G__28236;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_highlight.core.highlight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_highlight.core.highlight.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var ref = module$node_modules$react$index.createRef();
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (___$1){
var temp__5753__auto__ = re_highlight.core.goog$module$goog$object.get(ref.current,"firstChild");
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return (re_highlight.core.hljs_highlight_element.cljs$core$IFn$_invoke$arity$1 ? re_highlight.core.hljs_highlight_element.cljs$core$IFn$_invoke$arity$1(el) : re_highlight.core.hljs_highlight_element.call(null,el));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (___$1,___$2,___$3,___$4){
var temp__5753__auto__ = re_highlight.core.goog$module$goog$object.get(ref.current,"firstChild");
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
re_highlight.core.goog$module$goog$object.set(re_highlight.core.hljs_init_highlighting,"called",false);

return (re_highlight.core.hljs_highlight_element.cljs$core$IFn$_invoke$arity$1 ? re_highlight.core.hljs_highlight_element.cljs$core$IFn$_invoke$arity$1(el) : re_highlight.core.hljs_highlight_element.call(null,el));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__28237__delegate = function (p__28230,children){
var map__28231 = p__28230;
var map__28231__$1 = cljs.core.__destructure_map(map__28231);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28231__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28231__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28231__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),language], null)], null),children)], null);
};
var G__28237 = function (p__28230,var_args){
var children = null;
if (arguments.length > 1) {
var G__28238__i = 0, G__28238__a = new Array(arguments.length -  1);
while (G__28238__i < G__28238__a.length) {G__28238__a[G__28238__i] = arguments[G__28238__i + 1]; ++G__28238__i;}
  children = new cljs.core.IndexedSeq(G__28238__a,0,null);
} 
return G__28237__delegate.call(this,p__28230,children);};
G__28237.cljs$lang$maxFixedArity = 1;
G__28237.cljs$lang$applyTo = (function (arglist__28239){
var p__28230 = cljs.core.first(arglist__28239);
var children = cljs.core.rest(arglist__28239);
return G__28237__delegate(p__28230,children);
});
G__28237.cljs$core$IFn$_invoke$arity$variadic = G__28237__delegate;
return G__28237;
})()
], null));
}));

(re_highlight.core.highlight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_highlight.core.highlight.cljs$lang$applyTo = (function (seq28223){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28223));
}));


//# sourceMappingURL=re_highlight.core.js.map
