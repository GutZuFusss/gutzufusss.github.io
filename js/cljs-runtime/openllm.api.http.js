goog.provide('openllm.api.http');
/**
 * Returns the URI for the given endpoint.
 */
openllm.api.http.get_uri = (function openllm$api$http$get_uri(api_base_url,endpoint){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint)].join('');
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.http","v1-generate","openllm.api.http/v1-generate",1611535773),cljs.core.PersistentVector.EMPTY,(function (p__29077,p__29078){
var map__29079 = p__29077;
var map__29079__$1 = cljs.core.__destructure_map(map__29079);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29079__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29080 = p__29078;
var seq__29081 = cljs.core.seq(vec__29080);
var first__29082 = cljs.core.first(seq__29081);
var seq__29081__$1 = cljs.core.next(seq__29081);
var _ = first__29082;
var first__29082__$1 = cljs.core.first(seq__29081__$1);
var seq__29081__$2 = cljs.core.next(seq__29081__$1);
var prompt = first__29082__$1;
var first__29082__$2 = cljs.core.first(seq__29081__$2);
var seq__29081__$3 = cljs.core.next(seq__29081__$2);
var llm_config = first__29082__$2;
var map__29083 = seq__29081__$3;
var map__29083__$1 = cljs.core.__destructure_map(map__29083);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29083__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29083__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"api-base-url","api-base-url",-307501116));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),openllm.api.http.get_uri(base_url,"/v1/generate"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prompt","prompt",-78109487),prompt,new cljs.core.Keyword(null,"llm_config","llm_config",2014551170),llm_config], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.http","v1-metadata","openllm.api.http/v1-metadata",1130086212),cljs.core.PersistentVector.EMPTY,(function (p__29084,p__29085){
var map__29086 = p__29084;
var map__29086__$1 = cljs.core.__destructure_map(map__29086);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29086__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29087 = p__29085;
var seq__29088 = cljs.core.seq(vec__29087);
var first__29089 = cljs.core.first(seq__29088);
var seq__29088__$1 = cljs.core.next(seq__29088);
var _ = first__29089;
var first__29089__$1 = cljs.core.first(seq__29088__$1);
var seq__29088__$2 = cljs.core.next(seq__29088__$1);
var json = first__29089__$1;
var map__29090 = seq__29088__$2;
var map__29090__$1 = cljs.core.__destructure_map(map__29090);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29090__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29090__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"api-base-url","api-base-url",-307501116));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),openllm.api.http.get_uri(base_url,"/v1/metadata"),new cljs.core.Keyword(null,"params","params",710516235),json,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
}));

//# sourceMappingURL=openllm.api.http.js.map
