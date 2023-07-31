goog.provide('openllm.components.nav_bar.db');
/**
 * Returns the key sequence to access the nav-bar-db This is useful for
 * `assoc-in` and `get-in`. The `more-keys` argument is optional and can be
 * used to access a sub-key of the nav-bar-db
 * Returns the key sequence to access the nav-bar-db
 */
openllm.components.nav_bar.db.key_seq = (function openllm$components$nav_bar$db$key_seq(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38914 = arguments.length;
var i__5770__auto___38915 = (0);
while(true){
if((i__5770__auto___38915 < len__5769__auto___38914)){
args__5775__auto__.push((arguments[i__5770__auto___38915]));

var G__38916 = (i__5770__auto___38915 + (1));
i__5770__auto___38915 = G__38916;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return openllm.components.nav_bar.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(openllm.components.nav_bar.db.key_seq.cljs$core$IFn$_invoke$arity$variadic = (function (more_keys){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components-db","components-db",502469729),new cljs.core.Keyword(null,"nav-bar-db","nav-bar-db",-792003264)], null),more_keys);
}));

(openllm.components.nav_bar.db.key_seq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(openllm.components.nav_bar.db.key_seq.cljs$lang$applyTo = (function (seq38899){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38899));
}));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.nav-bar.db","nav-bar-db","openllm.components.nav-bar.db/nav-bar-db",-84263152),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__38905_SHARP_){
return ((cljs.core.map_QMARK_(p1__38905_SHARP_)) && (cljs.core.empty_QMARK_(p1__38905_SHARP_)));
}));
/**
 * Initial values for this branch of the app-db.
 */
openllm.components.nav_bar.db.initial_db = (function openllm$components$nav_bar$db$initial_db(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=openllm.components.nav_bar.db.js.map
