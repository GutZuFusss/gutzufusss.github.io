goog.provide('openllm.api.http');
openllm.api.http.api_base_url = "http://localhost:3000";
/**
 * Returns the URI for the given endpoint.
 */
openllm.api.http.get_uri = (function openllm$api$http$get_uri(endpoint){
return [openllm.api.http.api_base_url,cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint)].join('');
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.http","v1-generate","openllm.api.http/v1-generate",1611535773),cljs.core.PersistentVector.EMPTY,(function (_,p__39497){
var vec__39498 = p__39497;
var seq__39499 = cljs.core.seq(vec__39498);
var first__39500 = cljs.core.first(seq__39499);
var seq__39499__$1 = cljs.core.next(seq__39499);
var ___$1 = first__39500;
var first__39500__$1 = cljs.core.first(seq__39499__$1);
var seq__39499__$2 = cljs.core.next(seq__39499__$1);
var prompt = first__39500__$1;
var first__39500__$2 = cljs.core.first(seq__39499__$2);
var seq__39499__$3 = cljs.core.next(seq__39499__$2);
var llm_config = first__39500__$2;
var map__39501 = seq__39499__$3;
var map__39501__$1 = cljs.core.__destructure_map(map__39501);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),openllm.api.http.get_uri("/v1/generate"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prompt","prompt",-78109487),prompt,new cljs.core.Keyword(null,"llm_config","llm_config",2014551170),llm_config], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.http","v1-metadata","openllm.api.http/v1-metadata",1130086212),cljs.core.PersistentVector.EMPTY,(function (_,p__39502){
var vec__39503 = p__39502;
var seq__39504 = cljs.core.seq(vec__39503);
var first__39505 = cljs.core.first(seq__39504);
var seq__39504__$1 = cljs.core.next(seq__39504);
var ___$1 = first__39505;
var first__39505__$1 = cljs.core.first(seq__39504__$1);
var seq__39504__$2 = cljs.core.next(seq__39504__$1);
var json = first__39505__$1;
var map__39506 = seq__39504__$2;
var map__39506__$1 = cljs.core.__destructure_map(map__39506);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39506__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39506__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),openllm.api.http.get_uri("/v1/metadata"),new cljs.core.Keyword(null,"params","params",710516235),json,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
}));

//# sourceMappingURL=openllm.api.http.js.map
