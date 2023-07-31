goog.provide('openllm.components.apis.views');
var module$node_modules$highlight_DOT_js$lib$languages$json=shadow.js.require("module$node_modules$highlight_DOT_js$lib$languages$json", {});
re_highlight.core.register_language("json",module$node_modules$highlight_DOT_js$lib$languages$json);
/**
 * A single endpoint in the list of endpoints.
 */
openllm.components.apis.views.single_endpoint = (function openllm$components$apis$views$single_endpoint(endpoint_data){
var selected_api = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.subs","selected-api","openllm.components.apis.subs/selected-api",-389681935)], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rounded-l-md w-full py-2 px-2 text-left text-sm font-medium text-gray-700",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_api),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(endpoint_data)))?" bg-gray-700 text-white font-bold":" bg-gray-200 hover:bg-gray-100 hover:text-gray-900  border-t border-l border-b border-gray-300")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.events","set-selected-api","openllm.components.apis.events/set-selected-api",-1282705715),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(endpoint_data)], null));
})], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(endpoint_data))], null)], null);
})], null);
});
/**
 * The list on the left containing all the endpoints available.
 */
openllm.components.apis.views.endpoints_list = (function openllm$components$apis$views$endpoints_list(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(openllm.components.apis.views.single_endpoint,openllm.components.apis.data.endpoints_data));
});
/**
 * The input field for the data to send to the backend.
 */
openllm.components.apis.views.request_input_field = (function openllm$components$apis$views$request_input_field(selected_api,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-3 mt-1 font-mono w-full h-64 block",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28870_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.events","set-input-value","openllm.components.apis.events/set-input-value",-1125604677),selected_api,p1__28870_SHARP_.target.value], null));
})], null)], null);
});
/**
 * Control buttons for the input field, where the user enters his/her
 * request body.
 */
openllm.components.apis.views.input_field_controls = (function openllm$components$apis$views$input_field_controls(selected_api,value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2"], null),"maybe",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-3 flex justify-end"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.events","set-input-value","openllm.components.apis.events/set-input-value",-1125604677),selected_api,""], null));
})], null),"Clear"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"end-icon","end-icon",280632578),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.send.send], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.events","on-send-button-click","openllm.components.apis.events/on-send-button-click",50596077),selected_api,value], null));
})], null),"Send"], null)], null)], null)], null);
});
/**
 * The latest response retrieved from the backend will be displayed in
 * this component.
 */
openllm.components.apis.views.result_area = (function openllm$components$apis$views$result_area(){
var last_message = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.subs","response-message","openllm.components.apis.subs/response-message",583171590)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.common.views.headline,"Response",(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_highlight.core.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"json"], null),cljs.core.deref(last_message)], null)], null);
});
});
/**
 * The request and response area of the selected endpoint.
 */
openllm.components.apis.views.endpoint_request_response = (function openllm$components$apis$views$endpoint_request_response(){
var selected_api = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.subs","selected-api","openllm.components.apis.subs/selected-api",-389681935)], null));
var input_value = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.apis.subs","input-value","openllm.components.apis.subs/input-value",766503174)], null));
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-2 ml-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.common.views.headline,"Request",(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.apis.views.request_input_field,cljs.core.deref(selected_api),cljs.core.deref(input_value)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.apis.views.input_field_controls,cljs.core.deref(selected_api),cljs.core.deref(input_value)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.apis.views.result_area], null)], null);
});
});
/**
 * The contents of the APIs tab.
 */
openllm.components.apis.views.apis_tab_contents = (function openllm$components$apis$views$apis_tab_contents(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-6 px-4 h-[calc(100%-14.5rem)]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-6 grid-container grid grid-cols-4 h-full"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.common.views.headline,"Endpoint",(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-gray-200 mt-1"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.apis.views.endpoints_list], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-3 border-l border-gray-200 h-full overflow-y-scroll no-scrollbar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.common.views.headline,"Data",(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-gray-200 mt-1 w-fill"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.apis.views.endpoint_request_response], null)], null)], null)], null);
});

//# sourceMappingURL=openllm.components.apis.views.js.map
