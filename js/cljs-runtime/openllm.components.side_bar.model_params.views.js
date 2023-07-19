goog.provide('openllm.components.side_bar.model_params.views');
/**
 * Renders a slider with an input field next to it. The num-type logic needs to be
 * revamped big time xx
 */
openllm.components.side_bar.model_params.views.parameter_slider = (function openllm$components$side_bar$model_params$views$parameter_slider(id,value){
var min_max = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"val-constraint","val-constraint",-1665060530)], null));
var num_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"type-pred","type-pred",670733862)], null)));
var on_change = (function (p1__28593_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-params.events","set-model-config-parameter","openllm.components.side-bar.model-params.events/set-model-config-parameter",1676339857),id,p1__28593_SHARP_.target.value], null));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row items-center w-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),cljs.core.first(min_max),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.second(min_max),new cljs.core.Keyword(null,"step","step",1288888124),((num_type_QMARK_)?(1):0.01),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full mt-2 mb-1",new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null)], null);
});
/**
 * Renders a small input field, used in combination with the sliders. The num-type logic
 * needs to be revamped big time xx
 */
openllm.components.side_bar.model_params.views.parameter_small_input = (function openllm$components$side_bar$model_params$views$parameter_small_input(id,value){
var on_change = (function (p1__28594_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-params.events","set-model-config-parameter","openllm.components.side-bar.model-params.events/set-model-config-parameter",1676339857),id,p1__28594_SHARP_.target.value], null));
});
var num_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"type-pred","type-pred",670733862)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"display-none absolute right-5 w-12 px-0 py-0 pr-0.5 text-xs text-center",new cljs.core.Keyword(null,"step","step",1288888124),((num_type_QMARK_)?(1):0.01),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
});
/**
 * Renders a checkbox.
 */
openllm.components.side_bar.model_params.views.parameter_checkbox = (function openllm$components$side_bar$model_params$views$parameter_checkbox(id,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"ml-6 mt-1",new cljs.core.Keyword(null,"checked","checked",-50955819),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-params.events","set-model-config-parameter","openllm.components.side-bar.model-params.events/set-model-config-parameter",1676339857),id,cljs.core.not(value)], null));
})], null)], null);
});
/**
 * Renders a number input field.
 */
openllm.components.side_bar.model_params.views.parameter_number = (function openllm$components$side_bar$model_params$views$parameter_number(id,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-5 -mt-0.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"px-1 py-0 text-xs rounded w-16",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28599_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-params.events","set-model-config-parameter","openllm.components.side-bar.model-params.events/set-model-config-parameter",1676339857),id,cljs.core.parse_long(p1__28599_SHARP_.target.value)], null));
})], null)], null)], null);
});
/**
 * Renders a single parameter in the sidebar's parameter list. Used as a mapping function
 * on the collection of all parameters.
 */
openllm.components.side_bar.model_params.views.parameter_list_entry = (function openllm$components$side_bar$model_params$views$parameter_list_entry(p__28600){
var vec__28601 = p__28600;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28601,(0),null);
var map__28604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28601,(1),null);
var map__28604__$1 = cljs.core.__destructure_map(map__28604);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28604__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28604__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var display_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"display-type","display-type",-749971179)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col px-2 py-1"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex w-fit text-xs"], null),name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slider","slider",-472668865),display_type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.model_params.views.parameter_small_input,id,value], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binary","binary",-1802232288),display_type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.model_params.views.parameter_checkbox,id,value], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),display_type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.model_params.views.parameter_number,id,value], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slider","slider",-472668865),display_type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-0.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.model_params.views.parameter_slider,id,value], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-1.5 border-1 border-gray-100"], null)], null)], null);
});
/**
 * Renders the parameters in the sidebar. The parameters are retrieved from the
 * `human-readable-config` subscription.
 */
openllm.components.side_bar.model_params.views.parameter_list = (function openllm$components$side_bar$model_params$views$parameter_list(){
var model_config = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-params.subs","human-readable-config","openllm.components.side-bar.model-params.subs/human-readable-config",215692576)], null));
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.views.parameter_list_entry,cljs.core.deref(model_config)));
});
});

//# sourceMappingURL=openllm.components.side_bar.model_params.views.js.map
