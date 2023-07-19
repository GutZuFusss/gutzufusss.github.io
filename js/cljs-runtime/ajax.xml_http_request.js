goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__39732 = e.target.readyState;
var fexpr__39731 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__39731.cljs$core$IFn$_invoke$arity$1 ? fexpr__39731.cljs$core$IFn$_invoke$arity$1(G__39732) : fexpr__39731.call(null,G__39732));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__39737,handler){
var map__39738 = p__39737;
var map__39738__$1 = cljs.core.__destructure_map(map__39738);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39738__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39738__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39738__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39738__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39738__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39738__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39738__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__39733_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__39733_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___39771 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___39771)){
var response_type_39772 = temp__5804__auto___39771;
(this$__$1.responseType = cljs.core.name(response_type_39772));
} else {
}

var seq__39739_39773 = cljs.core.seq(headers);
var chunk__39740_39774 = null;
var count__39741_39775 = (0);
var i__39742_39776 = (0);
while(true){
if((i__39742_39776 < count__39741_39775)){
var vec__39752_39777 = chunk__39740_39774.cljs$core$IIndexed$_nth$arity$2(null,i__39742_39776);
var k_39778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39752_39777,(0),null);
var v_39779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39752_39777,(1),null);
this$__$1.setRequestHeader(k_39778,v_39779);


var G__39780 = seq__39739_39773;
var G__39781 = chunk__39740_39774;
var G__39782 = count__39741_39775;
var G__39783 = (i__39742_39776 + (1));
seq__39739_39773 = G__39780;
chunk__39740_39774 = G__39781;
count__39741_39775 = G__39782;
i__39742_39776 = G__39783;
continue;
} else {
var temp__5804__auto___39784 = cljs.core.seq(seq__39739_39773);
if(temp__5804__auto___39784){
var seq__39739_39785__$1 = temp__5804__auto___39784;
if(cljs.core.chunked_seq_QMARK_(seq__39739_39785__$1)){
var c__5568__auto___39786 = cljs.core.chunk_first(seq__39739_39785__$1);
var G__39787 = cljs.core.chunk_rest(seq__39739_39785__$1);
var G__39788 = c__5568__auto___39786;
var G__39789 = cljs.core.count(c__5568__auto___39786);
var G__39790 = (0);
seq__39739_39773 = G__39787;
chunk__39740_39774 = G__39788;
count__39741_39775 = G__39789;
i__39742_39776 = G__39790;
continue;
} else {
var vec__39759_39791 = cljs.core.first(seq__39739_39785__$1);
var k_39792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39759_39791,(0),null);
var v_39793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39759_39791,(1),null);
this$__$1.setRequestHeader(k_39792,v_39793);


var G__39794 = cljs.core.next(seq__39739_39785__$1);
var G__39795 = null;
var G__39796 = (0);
var G__39797 = (0);
seq__39739_39773 = G__39794;
chunk__39740_39774 = G__39795;
count__39741_39775 = G__39796;
i__39742_39776 = G__39797;
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
