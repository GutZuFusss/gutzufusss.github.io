goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37711 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37712 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37712);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__37714 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37715 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37715);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37714);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37711);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37733 = arguments.length;
switch (G__37733) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__37744 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__37756_37779 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__37757_37780 = null;
var count__37758_37781 = (0);
var i__37759_37782 = (0);
while(true){
if((i__37759_37782 < count__37758_37781)){
var vec__37769_37783 = chunk__37757_37780.cljs$core$IIndexed$_nth$arity$2(null,i__37759_37782);
var container_37784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37769_37783,(0),null);
var comp_37785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37769_37783,(1),null);
reagent.dom.re_render_component(comp_37785,container_37784);


var G__37786 = seq__37756_37779;
var G__37787 = chunk__37757_37780;
var G__37788 = count__37758_37781;
var G__37789 = (i__37759_37782 + (1));
seq__37756_37779 = G__37786;
chunk__37757_37780 = G__37787;
count__37758_37781 = G__37788;
i__37759_37782 = G__37789;
continue;
} else {
var temp__5753__auto___37790 = cljs.core.seq(seq__37756_37779);
if(temp__5753__auto___37790){
var seq__37756_37791__$1 = temp__5753__auto___37790;
if(cljs.core.chunked_seq_QMARK_(seq__37756_37791__$1)){
var c__5568__auto___37792 = cljs.core.chunk_first(seq__37756_37791__$1);
var G__37793 = cljs.core.chunk_rest(seq__37756_37791__$1);
var G__37794 = c__5568__auto___37792;
var G__37795 = cljs.core.count(c__5568__auto___37792);
var G__37796 = (0);
seq__37756_37779 = G__37793;
chunk__37757_37780 = G__37794;
count__37758_37781 = G__37795;
i__37759_37782 = G__37796;
continue;
} else {
var vec__37773_37797 = cljs.core.first(seq__37756_37791__$1);
var container_37798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37773_37797,(0),null);
var comp_37799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37773_37797,(1),null);
reagent.dom.re_render_component(comp_37799,container_37798);


var G__37800 = cljs.core.next(seq__37756_37791__$1);
var G__37801 = null;
var G__37802 = (0);
var G__37803 = (0);
seq__37756_37779 = G__37800;
chunk__37757_37780 = G__37801;
count__37758_37781 = G__37802;
i__37759_37782 = G__37803;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
