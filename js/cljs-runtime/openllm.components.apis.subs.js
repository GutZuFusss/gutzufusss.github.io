goog.provide('openllm.components.apis.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.apis.subs","selected-api","openllm.components.apis.subs/selected-api",-389681935),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"selected-api","selected-api",-1662928330).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.apis.subs","input-value","openllm.components.apis.subs/input-value",766503174),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apis-data","apis-data",-2046478433),new cljs.core.Keyword(null,"selected-api","selected-api",-1662928330).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"input-value","input-value",-1719954369)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.apis.subs","last-response","openllm.components.apis.subs/last-response",-443069185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apis-data","apis-data",-2046478433),new cljs.core.Keyword(null,"selected-api","selected-api",-1662928330).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"last-response","last-response",-1850515372)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.apis.subs","response-message","openllm.components.apis.subs/response-message",583171590),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.subs","last-response","openllm.components.apis.subs/last-response",-443069185)], null),(function (last_response){
if(cljs.core.map_QMARK_(last_response)){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28858_28863 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28859_28864 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28860_28865 = true;
var _STAR_print_fn_STAR__temp_val__28861_28866 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28860_28865);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28861_28866);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(last_response);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28859_28864);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28858_28863);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
} else {
try{return JSON.stringify(JSON.parse(last_response),cljs.core.clj__GT_js(null),cljs.core.clj__GT_js((2)));
}catch (e28862){if((e28862 instanceof Error)){
var _ = e28862;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_response);
} else {
throw e28862;

}
}}
})], 0));

//# sourceMappingURL=openllm.components.apis.subs.js.map
