goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__39304 = e.target.readyState;
var fexpr__39303 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__39303.cljs$core$IFn$_invoke$arity$1 ? fexpr__39303.cljs$core$IFn$_invoke$arity$1(G__39304) : fexpr__39303.call(null,G__39304));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__39317,handler){
var map__39319 = p__39317;
var map__39319__$1 = cljs.core.__destructure_map(map__39319);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39319__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39319__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39319__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39319__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39319__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39319__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39319__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__39312_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__39312_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___39355 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___39355)){
var response_type_39356 = temp__5804__auto___39355;
(this$__$1.responseType = cljs.core.name(response_type_39356));
} else {
}

var seq__39324_39357 = cljs.core.seq(headers);
var chunk__39325_39358 = null;
var count__39326_39359 = (0);
var i__39327_39360 = (0);
while(true){
if((i__39327_39360 < count__39326_39359)){
var vec__39337_39361 = chunk__39325_39358.cljs$core$IIndexed$_nth$arity$2(null,i__39327_39360);
var k_39362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39337_39361,(0),null);
var v_39363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39337_39361,(1),null);
this$__$1.setRequestHeader(k_39362,v_39363);


var G__39364 = seq__39324_39357;
var G__39365 = chunk__39325_39358;
var G__39366 = count__39326_39359;
var G__39367 = (i__39327_39360 + (1));
seq__39324_39357 = G__39364;
chunk__39325_39358 = G__39365;
count__39326_39359 = G__39366;
i__39327_39360 = G__39367;
continue;
} else {
var temp__5804__auto___39368 = cljs.core.seq(seq__39324_39357);
if(temp__5804__auto___39368){
var seq__39324_39369__$1 = temp__5804__auto___39368;
if(cljs.core.chunked_seq_QMARK_(seq__39324_39369__$1)){
var c__5568__auto___39370 = cljs.core.chunk_first(seq__39324_39369__$1);
var G__39371 = cljs.core.chunk_rest(seq__39324_39369__$1);
var G__39372 = c__5568__auto___39370;
var G__39373 = cljs.core.count(c__5568__auto___39370);
var G__39374 = (0);
seq__39324_39357 = G__39371;
chunk__39325_39358 = G__39372;
count__39326_39359 = G__39373;
i__39327_39360 = G__39374;
continue;
} else {
var vec__39341_39375 = cljs.core.first(seq__39324_39369__$1);
var k_39376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39341_39375,(0),null);
var v_39377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39341_39375,(1),null);
this$__$1.setRequestHeader(k_39376,v_39377);


var G__39379 = cljs.core.next(seq__39324_39369__$1);
var G__39380 = null;
var G__39381 = (0);
var G__39382 = (0);
seq__39324_39357 = G__39379;
chunk__39325_39358 = G__39380;
count__39326_39359 = G__39381;
i__39327_39360 = G__39382;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
