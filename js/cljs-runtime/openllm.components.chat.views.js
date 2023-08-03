goog.provide('openllm.components.chat.views');
/**
 * The chat input field. The `on-submit` callback is called when the user
 * presses the enter key without pressing the shift key.
 * The same event is also dispatched in the `chat-controls` function, if
 * the user clicks the send button.
 */
openllm.components.chat.views.chat_input_field = (function openllm$components$chat$views$chat_input_field(on_submit){
var chat_input_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.subs","chat-input-value","openllm.components.chat.subs/chat-input-value",-1630109332)], null));
var on_change = (function (p1__28641_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","set-chat-input-value","openllm.components.chat.events/set-chat-input-value",990254050),p1__28641_SHARP_.target.value], null));
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1 h-10 w-[calc(100%_-_195px)] block self-end",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resize","resize",297367086),"none"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(chat_input_sub),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.charCode,(13))) && (cljs.core.not(e.shiftKey)))){
return (on_submit.cljs$core$IFn$_invoke$arity$0 ? on_submit.cljs$core$IFn$_invoke$arity$0() : on_submit.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"id","id",-1388402092),"chat-input"], null)], null);
});
});
/**
 * Aggregates the chat input field and the send button as well as the
 * prompt layout button.
 */
openllm.components.chat.views.chat_controls = (function openllm$components$chat$views$chat_controls(){
var llm_config = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-params.subs","model-config","openllm.components.side-bar.model-params.subs/model-config",2080539653)], null));
var submit_prompt = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.subs","prompt","openllm.components.chat.subs/prompt",-885374803)], null));
var on_submit_event = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","on-send-button-click","openllm.components.chat.events/on-send-button-click",-708855792),cljs.core.deref(submit_prompt),cljs.core.deref(llm_config)], null);
return (function openllm$components$chat$views$chat_controls_$_chat_controls(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex mr-2.5 mt-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.chat.views.chat_input_field,(function (){
return re_frame.core.dispatch(on_submit_event);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-1.5 mr-0.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.tooltip.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Edit prompt layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","toggle-modal","openllm.components.chat.events/toggle-modal",-1388708298)], null));
}),new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"size","size",1098693007),"medium"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.design_services.design_services], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.tooltip.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Clear chat history"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","clear-chat-history","openllm.components.chat.events/clear-chat-history",1098955562)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.api.persistence","clear-chat-history","openllm.api.persistence/clear-chat-history",908737784)], null));
}),new cljs.core.Keyword(null,"size","size",1098693007),"medium",new cljs.core.Keyword(null,"color","color",1011675173),"primary"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.delete_forever.delete_forever], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(on_submit_event);
}),new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"end-icon","end-icon",280632578),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.send.send], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"96px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"8px"], null),new cljs.core.Keyword(null,"color","color",1011675173),"primary"], null),"Send"], null)], null)], null);
});
});
/**
 * Produces additional style attributes for a chatbubble contingent upon
 * the provided user.
 * This can be done a lot smarter, but it works for now.
 */
openllm.components.chat.views.user__GT_bubble_style = (function openllm$components$chat$views$user__GT_bubble_style(user){
return ["p-2 rounded-xl border ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword(null,"model","model",331153215)))?"bg-gray-50 mr-10 rounded-bl-none border-gray-200":"bg-gray-300 ml-10 rounded-br-none border-gray-400")].join('');
});
/**
 * Produces additional style attributes forthe text of a text message
 * upon the provided user.
 * This can be done a lot smarter, but it works for now.
 */
openllm.components.chat.views.user__GT_text_style = (function openllm$components$chat$views$user__GT_text_style(user){
return ["whitespace-pre-wrap ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword(null,"model","model",331153215)))?"text-gray-700":"text-gray-950")].join('');
});
/**
 * Displays a single chat message of the chat history.
 * Will be used as a mapping function in the `chat-history` function. The collection
 * being mapped is the entire chat history.
 */
openllm.components.chat.views.chat_message_entry = (function openllm$components$chat$views$chat_message_entry(p__28642){
var map__28643 = p__28642;
var map__28643__$1 = cljs.core.__destructure_map(map__28643);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28643__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28643__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var display_user = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword(null,"model","model",331153215)))?"System":"You");
var alignment = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword(null,"model","model",331153215)))?"flex-row":"flex-row-reverse");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex ",alignment," items-end my-2 w-full"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-lg mx-2"], null),display_user], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),openllm.components.chat.views.user__GT_bubble_style(user)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),openllm.components.chat.views.user__GT_text_style(user)], null),text], null)], null)], null);
});
/**
 * The chat history. Transforms the chat history into DOM/hiccup elements by
 * mapping the `chat-message-entry` function over the chat history.
 */
openllm.components.chat.views.chat_history = (function openllm$components$chat$views$chat_history(){
var history__$1 = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.subs","chat-history","openllm.components.chat.subs/chat-history",-1501250194)], null));
return (function openllm$components$chat$views$chat_history_$_chat_history(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-8 flex flex-col items-center"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(openllm.components.chat.views.chat_message_entry,cljs.core.deref(history__$1)));
});
});
/**
 * The modal for editing the prompt layout. The modal is opened by the
 * `toggle-modal` event and closed by the `toggle-modal` event. The modal
 * is closed by clicking the save button or somewhere outside of the modal.
 */
openllm.components.chat.views.prompt_layout_modal = (function openllm$components$chat$views$prompt_layout_modal(){
var modal_open_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.subs","modal-open?","openllm.components.chat.subs/modal-open?",2097497535)], null));
var prompt_layout_value = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.subs","prompt-layout","openllm.components.chat.subs/prompt-layout",-1833402282)], null));
var on_change = (function (p1__28644_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","set-prompt-layout","openllm.components.chat.events/set-prompt-layout",-1573538316),p1__28644_SHARP_.target.value], null));
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.modal.modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(modal_open_QMARK_),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","toggle-modal","openllm.components.chat.events/toggle-modal",-1388708298)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.box.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%, -50%)"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.paper.paper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(24),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"20px 30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),"Prompt Layout"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-3 mt-1 w-full h-64 block border bg-gray-200",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(prompt_layout_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-4 flex justify-end space-x-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.api.components.file_upload_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback-event","callback-event",-861154138),new cljs.core.Keyword("openllm.components.chat.events","set-prompt-layout","openllm.components.chat.events/set-prompt-layout",-1573538316)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.events","toggle-modal","openllm.components.chat.events/toggle-modal",-1388708298)], null));
})], null),"Save"], null)], null)], null)], null)], null);
});
});
/**
 * The component rendered if the chat tab is active. It contains the chat
 * history, the chat input field and the chat controls.
 */
openllm.components.chat.views.chat_tab_contents = (function openllm$components$chat$views$chat_tab_contents(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.chat.views.prompt_layout_modal], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.paper.paper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-3.5 mt-6 h-[calc(100%_-_78px)]",new cljs.core.Keyword(null,"square","square",812434677),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"chat-history-container",new cljs.core.Keyword(null,"class","class",-2030961996),"overflow-y-scroll w-full h-full no-scrollbar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollBehavior","scrollBehavior",-1056092838),"smooth"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.chat.views.chat_history], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.chat.views.chat_controls], null)], null);
});

//# sourceMappingURL=openllm.components.chat.views.js.map
