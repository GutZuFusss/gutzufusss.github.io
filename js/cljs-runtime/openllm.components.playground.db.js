goog.provide('openllm.components.playground.db');
/**
 * Returns the key sequence to access the playground-db This is useful for
 * `assoc-in` and `get-in`. The `more-keys` argument is optional and can be
 * used to access a sub-key of the playground-db
 * Returns the key sequence to access the playground-db
 */
openllm.components.playground.db.key_seq = (function openllm$components$playground$db$key_seq(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38932 = arguments.length;
var i__5770__auto___38933 = (0);
while(true){
if((i__5770__auto___38933 < len__5769__auto___38932)){
args__5775__auto__.push((arguments[i__5770__auto___38933]));

var G__38934 = (i__5770__auto___38933 + (1));
i__5770__auto___38933 = G__38934;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(openllm.components.playground.db.key_seq.cljs$core$IFn$_invoke$arity$variadic = (function (more_keys){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components-db","components-db",502469729),new cljs.core.Keyword(null,"playground-db","playground-db",1021669158)], null),more_keys);
}));

(openllm.components.playground.db.key_seq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(openllm.components.playground.db.key_seq.cljs$lang$applyTo = (function (seq38900){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38900));
}));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.playground.db","playground-input-value","openllm.components.playground.db/playground-input-value",-1989143469),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.playground.db","playground-last-response","openllm.components.playground.db/playground-last-response",-496810546),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.playground.db","response-modal-open?","openllm.components.playground.db/response-modal-open?",-1545974342),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.playground.db","playground-db","openllm.components.playground.db/playground-db",-41695486),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.db","playground-input-value","openllm.components.playground.db/playground-input-value",-1989143469),new cljs.core.Keyword("openllm.components.playground.db","playground-last-response","openllm.components.playground.db/playground-last-response",-496810546),new cljs.core.Keyword("openllm.components.playground.db","response-modal-open?","openllm.components.playground.db/response-modal-open?",-1545974342)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.db","playground-input-value","openllm.components.playground.db/playground-input-value",-1989143469),new cljs.core.Keyword("openllm.components.playground.db","playground-last-response","openllm.components.playground.db/playground-last-response",-496810546),new cljs.core.Keyword("openllm.components.playground.db","response-modal-open?","openllm.components.playground.db/response-modal-open?",-1545974342)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38906){
return cljs.core.map_QMARK_(G__38906);
}),(function (G__38906){
return cljs.core.contains_QMARK_(G__38906,new cljs.core.Keyword(null,"playground-input-value","playground-input-value",1271962687));
}),(function (G__38906){
return cljs.core.contains_QMARK_(G__38906,new cljs.core.Keyword(null,"playground-last-response","playground-last-response",952245930));
}),(function (G__38906){
return cljs.core.contains_QMARK_(G__38906,new cljs.core.Keyword(null,"response-modal-open?","response-modal-open?",2021336734));
})], null),(function (G__38906){
return ((cljs.core.map_QMARK_(G__38906)) && (((cljs.core.contains_QMARK_(G__38906,new cljs.core.Keyword(null,"playground-input-value","playground-input-value",1271962687))) && (((cljs.core.contains_QMARK_(G__38906,new cljs.core.Keyword(null,"playground-last-response","playground-last-response",952245930))) && (cljs.core.contains_QMARK_(G__38906,new cljs.core.Keyword(null,"response-modal-open?","response-modal-open?",2021336734))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.playground.db","playground-input-value","openllm.components.playground.db/playground-input-value",-1989143469),new cljs.core.Keyword("openllm.components.playground.db","playground-last-response","openllm.components.playground.db/playground-last-response",-496810546),new cljs.core.Keyword("openllm.components.playground.db","response-modal-open?","openllm.components.playground.db/response-modal-open?",-1545974342)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground-input-value","playground-input-value",1271962687),new cljs.core.Keyword(null,"playground-last-response","playground-last-response",952245930),new cljs.core.Keyword(null,"response-modal-open?","response-modal-open?",2021336734)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"playground-input-value","playground-input-value",1271962687))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"playground-last-response","playground-last-response",952245930))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"response-modal-open?","response-modal-open?",2021336734)))], null),null])));
/**
 * Initial values for this branch of the app-db.
 */
openllm.components.playground.db.initial_db = (function openllm$components$playground$db$initial_db(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"playground-input-value","playground-input-value",1271962687),"",new cljs.core.Keyword(null,"playground-last-response","playground-last-response",952245930),"",new cljs.core.Keyword(null,"response-modal-open?","response-modal-open?",2021336734),false], null);
});

//# sourceMappingURL=openllm.components.playground.db.js.map
