goog.provide('openllm.components.side_bar.db');
/**
 * Returns the key sequence to access the side-bar-db This is useful for
 * `assoc-in` and `get-in`. The `more-keys` argument is optional and can be
 * used to access a sub-key of the side-bar-db
 * Returns the key sequence to access the side-bar-db
 */
openllm.components.side_bar.db.key_seq = (function openllm$components$side_bar$db$key_seq(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28439 = arguments.length;
var i__5770__auto___28440 = (0);
while(true){
if((i__5770__auto___28440 < len__5769__auto___28439)){
args__5775__auto__.push((arguments[i__5770__auto___28440]));

var G__28441 = (i__5770__auto___28440 + (1));
i__5770__auto___28440 = G__28441;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return openllm.components.side_bar.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(openllm.components.side_bar.db.key_seq.cljs$core$IFn$_invoke$arity$variadic = (function (more_keys){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components-db","components-db",502469729),new cljs.core.Keyword(null,"side-bar-db","side-bar-db",1420625631)], null),more_keys);
}));

(openllm.components.side_bar.db.key_seq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(openllm.components.side_bar.db.key_seq.cljs$lang$applyTo = (function (seq28437){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28437));
}));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.db","side-bar-open?","openllm.components.side-bar.db/side-bar-open?",1443366701),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.db","side-bar-db","openllm.components.side-bar.db/side-bar-db",-865581219),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.db","side-bar-open?","openllm.components.side-bar.db/side-bar-open?",1443366701),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-selection-db","openllm.components.side-bar.model-selection.db/model-selection-db",1108706750),new cljs.core.Keyword("openllm.components.side-bar.model-params.db","model-params-db","openllm.components.side-bar.model-params.db/model-params-db",-649035959)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.db","side-bar-open?","openllm.components.side-bar.db/side-bar-open?",1443366701),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-selection-db","openllm.components.side-bar.model-selection.db/model-selection-db",1108706750),new cljs.core.Keyword("openllm.components.side-bar.model-params.db","model-params-db","openllm.components.side-bar.model-params.db/model-params-db",-649035959)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__28438){
return cljs.core.map_QMARK_(G__28438);
}),(function (G__28438){
return cljs.core.contains_QMARK_(G__28438,new cljs.core.Keyword(null,"side-bar-open?","side-bar-open?",-842217809));
}),(function (G__28438){
return cljs.core.contains_QMARK_(G__28438,new cljs.core.Keyword(null,"model-selection-db","model-selection-db",232338294));
}),(function (G__28438){
return cljs.core.contains_QMARK_(G__28438,new cljs.core.Keyword(null,"model-params-db","model-params-db",-916825849));
})], null),(function (G__28438){
return ((cljs.core.map_QMARK_(G__28438)) && (((cljs.core.contains_QMARK_(G__28438,new cljs.core.Keyword(null,"side-bar-open?","side-bar-open?",-842217809))) && (((cljs.core.contains_QMARK_(G__28438,new cljs.core.Keyword(null,"model-selection-db","model-selection-db",232338294))) && (cljs.core.contains_QMARK_(G__28438,new cljs.core.Keyword(null,"model-params-db","model-params-db",-916825849))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.db","side-bar-open?","openllm.components.side-bar.db/side-bar-open?",1443366701),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-selection-db","openllm.components.side-bar.model-selection.db/model-selection-db",1108706750),new cljs.core.Keyword("openllm.components.side-bar.model-params.db","model-params-db","openllm.components.side-bar.model-params.db/model-params-db",-649035959)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"side-bar-open?","side-bar-open?",-842217809),new cljs.core.Keyword(null,"model-selection-db","model-selection-db",232338294),new cljs.core.Keyword(null,"model-params-db","model-params-db",-916825849)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"side-bar-open?","side-bar-open?",-842217809))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"model-selection-db","model-selection-db",232338294))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"model-params-db","model-params-db",-916825849)))], null),null])));
/**
 * Initial values for this branch of the app-db.
 */
openllm.components.side_bar.db.initial_db = (function openllm$components$side_bar$db$initial_db(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side-bar-open?","side-bar-open?",-842217809),true,new cljs.core.Keyword(null,"model-selection-db","model-selection-db",232338294),openllm.components.side_bar.model_selection.db.initial_db(),new cljs.core.Keyword(null,"model-params-db","model-params-db",-916825849),openllm.components.side_bar.model_params.db.initial_db()], null);
});

//# sourceMappingURL=openllm.components.side_bar.db.js.map
