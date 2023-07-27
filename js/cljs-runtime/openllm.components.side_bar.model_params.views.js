goog.provide('openllm.components.side_bar.model_params.views');
/**
 * Renders a slider with an input field next to it. The num-type logic needs to be
 * revamped big time xx
 */
openllm.components.side_bar.model_params.views.parameter_slider = (function openllm$components$side_bar$model_params$views$parameter_slider(id,value){
var min_max = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"val-constraint","val-constraint",-1665060530)], null));
var num_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"type-pred","type-pred",670733862)], null)));
var on_change = (function (p1__31135_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-params.events","set-model-config-parameter","openllm.components.side-bar.model-params.events/set-model-config-parameter",1676339857),id,p1__31135_SHARP_.target.value], null));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row items-center w-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),cljs.core.first(min_max),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.second(min_max),new cljs.core.Keyword(null,"step","step",1288888124),((num_type_QMARK_)?(1):0.01),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full mt-2 mb-1",new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null)], null);
});
/**
 * Renders a small input field, used in combination with the sliders. The num-type logic
 * needs to be revamped big time xx
 */
openllm.components.side_bar.model_params.views.parameter_small_input = (function openllm$components$side_bar$model_params$views$parameter_small_input(id,value){
var on_change = (function (p1__31136_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-params.events","set-model-config-parameter","openllm.components.side-bar.model-params.events/set-model-config-parameter",1676339857),id,p1__31136_SHARP_.target.value], null));
});
var num_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"type-pred","type-pred",670733862)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.input.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"w-10 text-center border",new cljs.core.Keyword(null,"input-props","input-props",-1504868202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"height","height",1025178622),"12px"], null)], null),new cljs.core.Keyword(null,"step","step",1288888124),((num_type_QMARK_)?(1):0.01),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.input.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"w-16 border",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31137_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-params.events","set-model-config-parameter","openllm.components.side-bar.model-params.events/set-model-config-parameter",1676339857),id,cljs.core.parse_long(p1__31137_SHARP_.target.value)], null));
})], null)], null);
});
/**
 * Renders a single parameter in the sidebar's parameter list. Used as a mapping function
 * on the collection of all parameters.
 */
openllm.components.side_bar.model_params.views.parameter_list_entry = (function openllm$components$side_bar$model_params$views$parameter_list_entry(p__31138){
var vec__31139 = p__31138;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31139,(0),null);
var map__31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31139,(1),null);
var map__31142__$1 = cljs.core.__destructure_map(map__31142);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31142__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31142__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var display_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"display-type","display-type",-749971179)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col px-2 py-1"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex w-full text-xs justify-between"], null),name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slider","slider",-472668865),display_type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.model_params.views.parameter_small_input,id,value], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binary","binary",-1802232288),display_type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.model_params.views.parameter_checkbox,id,value], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),display_type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.model_params.views.parameter_number,id,value], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slider","slider",-472668865),display_type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-0.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.model_params.views.parameter_slider,id,value], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-1.5 border-1 border-gray-100"], null)], null)], null);
});
/**
 * Renders the parameters in the sidebar. The parameters are retrieved from the
 * `human-readable-config` subscription.
 */
openllm.components.side_bar.model_params.views.parameter_list = (function openllm$components$side_bar$model_params$views$parameter_list(){
var model_config = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-params.subs","human-readable-config","openllm.components.side-bar.model-params.subs/human-readable-config",215692576)], null));
return (function (){
var basic_params = cljs.core.filterv((function (p__31143){
var vec__31144 = p__31143;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31144,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31144,(1),null);
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"advanced-opt","advanced-opt",1252488754)], null)));
}),cljs.core.deref(model_config));
var advanced_params = cljs.core.filterv((function (p__31147){
var vec__31148 = p__31147;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31148,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31148,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.db.parameter_meta_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"advanced-opt","advanced-opt",1252488754)], null));
}),cljs.core.deref(model_config));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.views.parameter_list_entry,basic_params)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-2 -mx-1.75"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.accordion.accordion,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),true,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.accordion_summary.accordion_summary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expand-icon","expand-icon",563490473),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.expand_more.expand_more], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.typography.typography,"Advanced"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.accordion_details.accordion_details,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-2 -mx-3"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(openllm.components.side_bar.model_params.views.parameter_list_entry,advanced_params))], null)], null)], null)], null);
});
});

//# sourceMappingURL=openllm.components.side_bar.model_params.views.js.map
