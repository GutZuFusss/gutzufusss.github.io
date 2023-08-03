goog.provide('openllm.views');
/**
 * The content of the currently active tab. Essentially, this is the
 * main router of the app, deciding what content should be rendered
 * based on the current screen-id.
 */
openllm.views.tab_content = (function openllm$views$tab_content(screen_id){
var G__28645 = screen_id;
var G__28645__$1 = (((G__28645 instanceof cljs.core.Keyword))?G__28645.fqn:null);
switch (G__28645__$1) {
case "playground":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.playground.views.playground_tab_contents], null);

break;
case "chat":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.chat.views.chat_tab_contents], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28645__$1)].join('')));

}
});
/**
 * The main dashboard component, which is rendered into the DOM. Called
 * directly by the `app` function residing inside the `app` namespace,
 * which is the main component and rendered by the root rendering function
 * of this application. Called is putting it mildly, as this function is
 * basically wrapped by the `app` function, thus this component contains
 * everything that is rendered into the DOM as it's children.
 */
openllm.views.dashboard = (function openllm$views$dashboard(){
var screen_id = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-id","screen-id",9826069)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.nav_bar.views.nav_bar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-[calc(100vh-3rem)] flex bg-white overflow-hidden"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col flex-1 w-screen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 relative z-0 overflow-hidden focus:outline-none",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-2 pr-0.5 pl-4 w-full h-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.views.tab_content,cljs.core.deref(screen_id)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.components.side_bar.views.side_bar], null)], null)], null);
});
});

//# sourceMappingURL=openllm.views.js.map
