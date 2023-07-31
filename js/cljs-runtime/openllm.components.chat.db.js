goog.provide('openllm.components.chat.db');
/**
 * Returns the key sequence to access the chat-db. This is useful for
 * `assoc-in` and `get-in`. The `more-keys` argument is optional and can be
 * used to access a sub-key of the chat-db.
 * Returns the key sequence to access the chat-db.
 */
openllm.components.chat.db.key_seq = (function openllm$components$chat$db$key_seq(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36764 = arguments.length;
var i__5770__auto___36765 = (0);
while(true){
if((i__5770__auto___36765 < len__5769__auto___36764)){
args__5775__auto__.push((arguments[i__5770__auto___36765]));

var G__36766 = (i__5770__auto___36765 + (1));
i__5770__auto___36765 = G__36766;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic = (function (more_keys){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components-db","components-db",502469729),new cljs.core.Keyword(null,"chat-db","chat-db",-1256745319)], null),more_keys);
}));

(openllm.components.chat.db.key_seq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(openllm.components.chat.db.key_seq.cljs$lang$applyTo = (function (seq36499){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36499));
}));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.chat.db","chat-input-value","openllm.components.chat.db/chat-input-value",-1361004569),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.chat.db","chat-history","openllm.components.chat.db/chat-history",-1211178567),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.db","user","openllm.components.chat.db/user",-787574623),new cljs.core.Keyword("openllm.components.chat.db","text","openllm.components.chat.db/text",351186822)], null)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.db","user","openllm.components.chat.db/user",-787574623),new cljs.core.Keyword("openllm.components.chat.db","text","openllm.components.chat.db/text",351186822)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.db","user","openllm.components.chat.db/user",-787574623),new cljs.core.Keyword("openllm.components.chat.db","text","openllm.components.chat.db/text",351186822)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36510){
return cljs.core.map_QMARK_(G__36510);
}),(function (G__36510){
return cljs.core.contains_QMARK_(G__36510,new cljs.core.Keyword(null,"user","user",1532431356));
}),(function (G__36510){
return cljs.core.contains_QMARK_(G__36510,new cljs.core.Keyword(null,"text","text",-1790561697));
})], null),(function (G__36510){
return ((cljs.core.map_QMARK_(G__36510)) && (((cljs.core.contains_QMARK_(G__36510,new cljs.core.Keyword(null,"user","user",1532431356))) && (cljs.core.contains_QMARK_(G__36510,new cljs.core.Keyword(null,"text","text",-1790561697))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.db","user","openllm.components.chat.db/user",-787574623),new cljs.core.Keyword("openllm.components.chat.db","text","openllm.components.chat.db/text",351186822)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"text","text",-1790561697)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"user","user",1532431356))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"text","text",-1790561697)))], null),null])),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__36505){
return cljs.core.vector_QMARK_(G__36505);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.db","user","openllm.components.chat.db/user",-787574623),new cljs.core.Keyword("openllm.components.chat.db","text","openllm.components.chat.db/text",351186822)], null)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.chat.db","layout-modal-open?","openllm.components.chat.db/layout-modal-open?",-1084999641),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.chat.db","prompt-layout","openllm.components.chat.db/prompt-layout",1660070095),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.chat.db","chat-db","openllm.components.chat.db/chat-db",895551938),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.db","chat-input-value","openllm.components.chat.db/chat-input-value",-1361004569),new cljs.core.Keyword("openllm.components.chat.db","chat-history","openllm.components.chat.db/chat-history",-1211178567),new cljs.core.Keyword("openllm.components.chat.db","layout-modal-open?","openllm.components.chat.db/layout-modal-open?",-1084999641),new cljs.core.Keyword("openllm.components.chat.db","prompt-layout","openllm.components.chat.db/prompt-layout",1660070095)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.db","chat-input-value","openllm.components.chat.db/chat-input-value",-1361004569),new cljs.core.Keyword("openllm.components.chat.db","chat-history","openllm.components.chat.db/chat-history",-1211178567),new cljs.core.Keyword("openllm.components.chat.db","layout-modal-open?","openllm.components.chat.db/layout-modal-open?",-1084999641),new cljs.core.Keyword("openllm.components.chat.db","prompt-layout","openllm.components.chat.db/prompt-layout",1660070095)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36544){
return cljs.core.map_QMARK_(G__36544);
}),(function (G__36544){
return cljs.core.contains_QMARK_(G__36544,new cljs.core.Keyword(null,"chat-input-value","chat-input-value",790175504));
}),(function (G__36544){
return cljs.core.contains_QMARK_(G__36544,new cljs.core.Keyword(null,"chat-history","chat-history",912746146));
}),(function (G__36544){
return cljs.core.contains_QMARK_(G__36544,new cljs.core.Keyword(null,"layout-modal-open?","layout-modal-open?",1071362944));
}),(function (G__36544){
return cljs.core.contains_QMARK_(G__36544,new cljs.core.Keyword(null,"prompt-layout","prompt-layout",-476570062));
})], null),(function (G__36544){
return ((cljs.core.map_QMARK_(G__36544)) && (((cljs.core.contains_QMARK_(G__36544,new cljs.core.Keyword(null,"chat-input-value","chat-input-value",790175504))) && (((cljs.core.contains_QMARK_(G__36544,new cljs.core.Keyword(null,"chat-history","chat-history",912746146))) && (((cljs.core.contains_QMARK_(G__36544,new cljs.core.Keyword(null,"layout-modal-open?","layout-modal-open?",1071362944))) && (cljs.core.contains_QMARK_(G__36544,new cljs.core.Keyword(null,"prompt-layout","prompt-layout",-476570062))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.db","chat-input-value","openllm.components.chat.db/chat-input-value",-1361004569),new cljs.core.Keyword("openllm.components.chat.db","chat-history","openllm.components.chat.db/chat-history",-1211178567),new cljs.core.Keyword("openllm.components.chat.db","layout-modal-open?","openllm.components.chat.db/layout-modal-open?",-1084999641),new cljs.core.Keyword("openllm.components.chat.db","prompt-layout","openllm.components.chat.db/prompt-layout",1660070095)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chat-input-value","chat-input-value",790175504),new cljs.core.Keyword(null,"chat-history","chat-history",912746146),new cljs.core.Keyword(null,"layout-modal-open?","layout-modal-open?",1071362944),new cljs.core.Keyword(null,"prompt-layout","prompt-layout",-476570062)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"chat-input-value","chat-input-value",790175504))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"chat-history","chat-history",912746146))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layout-modal-open?","layout-modal-open?",1071362944))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"prompt-layout","prompt-layout",-476570062)))], null),null])));
/**
 * Initial values for this branch of the app-db.
 */
openllm.components.chat.db.initial_db = (function openllm$components$chat$db$initial_db(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chat-input-value","chat-input-value",790175504),"",new cljs.core.Keyword(null,"chat-history","chat-history",912746146),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prompt-layout","prompt-layout",-476570062),"",new cljs.core.Keyword(null,"layout-modal-open?","layout-modal-open?",1071362944),false], null);
});

//# sourceMappingURL=openllm.components.chat.db.js.map
