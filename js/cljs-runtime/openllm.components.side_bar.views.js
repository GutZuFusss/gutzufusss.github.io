goog.provide('openllm.components.side_bar.views');
/**
 * The sidebar wrapped with a Material UI Collapse component. The collapse
 * component is used to animate the sidebar when it is opened or closed.
 */
openllm.components.side_bar.views.side_bar_with_mui_collapse = (function openllm$components$side_bar$views$side_bar_with_mui_collapse(){
var side_bar_open_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.subs","side-bar-open?","openllm.components.side-bar.subs/side-bar-open?",1372785530)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.collapse.collapse,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.deref(side_bar_open_QMARK_),new cljs.core.Keyword(null,"orientation","orientation",623557579),"horizontal",new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col h-full w-80"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col w-80 h-screen border-l border-gray-200 pt-0.5 pb-4 bg-gray-50"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.model_selection.views.model_selection], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-2 border-1 border-gray-200"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.common.views.headline,"Parameters"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-0 h-0 flex-1 flex flex-col overflow-y-auto scrollbar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 mt-0 relative inline-block text-left"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.model_params.views.parameter_list], null)], null)], null)], null)], null);
});
});
/**
 * The render function of the toolbar on the very right of the screen. Contains the
 * model selection dropdowns and the parameter list.
 */
openllm.components.side_bar.views.side_bar = (function openllm$components$side_bar$views$side_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hidden lg:flex lg:flex-shrink-0"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.views.side_bar_with_mui_collapse], null)], null);
});

//# sourceMappingURL=openllm.components.side_bar.views.js.map
