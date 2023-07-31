goog.provide('cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection');
goog.scope(function(){
  cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object = goog.module.get('goog.object');
});
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__33902 = Object.getPrototypeOf(obj__$1);
var G__33903 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__33902;
protos = G__33903;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$property_names_and_types(var_args){
var G__33889 = arguments.length;
switch (G__33889) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var iter__5523__auto__ = (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__33890(s__33891){
return (new cljs.core.LazySeq(null,(function (){
var s__33891__$1 = s__33891;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33891__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__33896 = cljs.core.first(xs__6360__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33896,(0),null);
var map__33899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33896,(1),null);
var map__33899__$1 = cljs.core.__destructure_map(map__33899);
var _obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33899__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33899__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__5519__auto__ = ((function (s__33891__$1,vec__33896,i,map__33899,map__33899__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__33890_$_iter__33892(s__33893){
return (new cljs.core.LazySeq(null,((function (s__33891__$1,vec__33896,i,map__33899,map__33899__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function (){
var s__33893__$1 = s__33893;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__33893__$1);
if(temp__5804__auto____$1){
var s__33893__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33893__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33893__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33895 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33894 = (0);
while(true){
if((i__33894 < size__5522__auto__)){
var key = cljs.core._nth(c__5521__auto__,i__33894);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__33895,(function (){var prop = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5045__auto__ = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e33900){if((e33900 instanceof Error)){
var _e = e33900;
return "var";
} else {
throw e33900;

}
}})()], null);
})());

var G__33905 = (i__33894 + (1));
i__33894 = G__33905;
continue;
} else {
var G__33906 = (i__33894 + (1));
i__33894 = G__33906;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33895),cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__33890_$_iter__33892(cljs.core.chunk_rest(s__33893__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33895),null);
}
} else {
var key = cljs.core.first(s__33893__$2);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5045__auto__ = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e33901){if((e33901 instanceof Error)){
var _e = e33901;
return "var";
} else {
throw e33901;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__33890_$_iter__33892(cljs.core.rest(s__33893__$2)));
} else {
var G__33907 = cljs.core.rest(s__33893__$2);
s__33893__$1 = G__33907;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__33891__$1,vec__33896,i,map__33899,map__33899__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
,null,null));
});})(s__33891__$1,vec__33896,i,map__33899,map__33899__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.js_keys(props)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__33890(cljs.core.rest(s__33891__$1)));
} else {
var G__33908 = cljs.core.rest(s__33891__$1);
s__33891__$1 = G__33908;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.js.map
