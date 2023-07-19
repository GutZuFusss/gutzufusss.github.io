goog.provide('openllm.components.common.views');
/**
 * The headlines in bold font and all caps found all over the application.
 */
openllm.components.common.views.headline = (function openllm$components$common$views$headline(text,padding_x){
var padding_x__$1 = (function (){var or__5045__auto__ = padding_x;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (4);
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["px-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(padding_x__$1)," text-xs font-semibold text-gray-500 uppercase tracking-wider"].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),["headline-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')], null),text], null);
});

//# sourceMappingURL=openllm.components.common.views.js.map
