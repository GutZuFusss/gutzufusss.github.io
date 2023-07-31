goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34283 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34283(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34284 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34284(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32916 = coll;
var G__32917 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32916,G__32917) : shadow.dom.lazy_native_coll_seq.call(null,G__32916,G__32917));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33043 = arguments.length;
switch (G__33043) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33057 = arguments.length;
switch (G__33057) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33072 = arguments.length;
switch (G__33072) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33085 = arguments.length;
switch (G__33085) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33104 = arguments.length;
switch (G__33104) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33209 = arguments.length;
switch (G__33209) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33223){if((e33223 instanceof Object)){
var e = e33223;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33223;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33288 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33289 = null;
var count__33290 = (0);
var i__33291 = (0);
while(true){
if((i__33291 < count__33290)){
var el = chunk__33289.cljs$core$IIndexed$_nth$arity$2(null,i__33291);
var handler_34294__$1 = ((function (seq__33288,chunk__33289,count__33290,i__33291,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33288,chunk__33289,count__33290,i__33291,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34294__$1);


var G__34295 = seq__33288;
var G__34296 = chunk__33289;
var G__34297 = count__33290;
var G__34298 = (i__33291 + (1));
seq__33288 = G__34295;
chunk__33289 = G__34296;
count__33290 = G__34297;
i__33291 = G__34298;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33288);
if(temp__5753__auto__){
var seq__33288__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33288__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33288__$1);
var G__34299 = cljs.core.chunk_rest(seq__33288__$1);
var G__34300 = c__5568__auto__;
var G__34301 = cljs.core.count(c__5568__auto__);
var G__34302 = (0);
seq__33288 = G__34299;
chunk__33289 = G__34300;
count__33290 = G__34301;
i__33291 = G__34302;
continue;
} else {
var el = cljs.core.first(seq__33288__$1);
var handler_34303__$1 = ((function (seq__33288,chunk__33289,count__33290,i__33291,el,seq__33288__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33288,chunk__33289,count__33290,i__33291,el,seq__33288__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34303__$1);


var G__34304 = cljs.core.next(seq__33288__$1);
var G__34305 = null;
var G__34306 = (0);
var G__34307 = (0);
seq__33288 = G__34304;
chunk__33289 = G__34305;
count__33290 = G__34306;
i__33291 = G__34307;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33311 = arguments.length;
switch (G__33311) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33344 = cljs.core.seq(events);
var chunk__33345 = null;
var count__33346 = (0);
var i__33347 = (0);
while(true){
if((i__33347 < count__33346)){
var vec__33396 = chunk__33345.cljs$core$IIndexed$_nth$arity$2(null,i__33347);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33396,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33396,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34309 = seq__33344;
var G__34310 = chunk__33345;
var G__34311 = count__33346;
var G__34312 = (i__33347 + (1));
seq__33344 = G__34309;
chunk__33345 = G__34310;
count__33346 = G__34311;
i__33347 = G__34312;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33344);
if(temp__5753__auto__){
var seq__33344__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33344__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33344__$1);
var G__34313 = cljs.core.chunk_rest(seq__33344__$1);
var G__34314 = c__5568__auto__;
var G__34315 = cljs.core.count(c__5568__auto__);
var G__34316 = (0);
seq__33344 = G__34313;
chunk__33345 = G__34314;
count__33346 = G__34315;
i__33347 = G__34316;
continue;
} else {
var vec__33406 = cljs.core.first(seq__33344__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34317 = cljs.core.next(seq__33344__$1);
var G__34318 = null;
var G__34319 = (0);
var G__34320 = (0);
seq__33344 = G__34317;
chunk__33345 = G__34318;
count__33346 = G__34319;
i__33347 = G__34320;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33421 = cljs.core.seq(styles);
var chunk__33422 = null;
var count__33423 = (0);
var i__33424 = (0);
while(true){
if((i__33424 < count__33423)){
var vec__33455 = chunk__33422.cljs$core$IIndexed$_nth$arity$2(null,i__33424);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33455,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34321 = seq__33421;
var G__34322 = chunk__33422;
var G__34323 = count__33423;
var G__34324 = (i__33424 + (1));
seq__33421 = G__34321;
chunk__33422 = G__34322;
count__33423 = G__34323;
i__33424 = G__34324;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33421);
if(temp__5753__auto__){
var seq__33421__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33421__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33421__$1);
var G__34325 = cljs.core.chunk_rest(seq__33421__$1);
var G__34326 = c__5568__auto__;
var G__34327 = cljs.core.count(c__5568__auto__);
var G__34328 = (0);
seq__33421 = G__34325;
chunk__33422 = G__34326;
count__33423 = G__34327;
i__33424 = G__34328;
continue;
} else {
var vec__33461 = cljs.core.first(seq__33421__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33461,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33461,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34330 = cljs.core.next(seq__33421__$1);
var G__34331 = null;
var G__34332 = (0);
var G__34333 = (0);
seq__33421 = G__34330;
chunk__33422 = G__34331;
count__33423 = G__34332;
i__33424 = G__34333;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33464_34334 = key;
var G__33464_34335__$1 = (((G__33464_34334 instanceof cljs.core.Keyword))?G__33464_34334.fqn:null);
switch (G__33464_34335__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34337 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_34337,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_34337,"aria-");
}
})())){
el.setAttribute(ks_34337,value);
} else {
(el[ks_34337] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33503){
var map__33504 = p__33503;
var map__33504__$1 = cljs.core.__destructure_map(map__33504);
var props = map__33504__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33504__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33507 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33507,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33507,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33507,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33515 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33515,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33515;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33521 = arguments.length;
switch (G__33521) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33537){
var vec__33538 = p__33537;
var seq__33539 = cljs.core.seq(vec__33538);
var first__33540 = cljs.core.first(seq__33539);
var seq__33539__$1 = cljs.core.next(seq__33539);
var nn = first__33540;
var first__33540__$1 = cljs.core.first(seq__33539__$1);
var seq__33539__$2 = cljs.core.next(seq__33539__$1);
var np = first__33540__$1;
var nc = seq__33539__$2;
var node = vec__33538;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33542 = nn;
var G__33543 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33542,G__33543) : create_fn.call(null,G__33542,G__33543));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33545 = nn;
var G__33546 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33545,G__33546) : create_fn.call(null,G__33545,G__33546));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33550 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33550,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33550,(1),null);
var seq__33557_34345 = cljs.core.seq(node_children);
var chunk__33558_34346 = null;
var count__33559_34347 = (0);
var i__33560_34348 = (0);
while(true){
if((i__33560_34348 < count__33559_34347)){
var child_struct_34349 = chunk__33558_34346.cljs$core$IIndexed$_nth$arity$2(null,i__33560_34348);
var children_34350 = shadow.dom.dom_node(child_struct_34349);
if(cljs.core.seq_QMARK_(children_34350)){
var seq__33613_34351 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34350));
var chunk__33615_34352 = null;
var count__33616_34353 = (0);
var i__33617_34354 = (0);
while(true){
if((i__33617_34354 < count__33616_34353)){
var child_34355 = chunk__33615_34352.cljs$core$IIndexed$_nth$arity$2(null,i__33617_34354);
if(cljs.core.truth_(child_34355)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34355);


var G__34356 = seq__33613_34351;
var G__34357 = chunk__33615_34352;
var G__34358 = count__33616_34353;
var G__34359 = (i__33617_34354 + (1));
seq__33613_34351 = G__34356;
chunk__33615_34352 = G__34357;
count__33616_34353 = G__34358;
i__33617_34354 = G__34359;
continue;
} else {
var G__34360 = seq__33613_34351;
var G__34361 = chunk__33615_34352;
var G__34362 = count__33616_34353;
var G__34363 = (i__33617_34354 + (1));
seq__33613_34351 = G__34360;
chunk__33615_34352 = G__34361;
count__33616_34353 = G__34362;
i__33617_34354 = G__34363;
continue;
}
} else {
var temp__5753__auto___34364 = cljs.core.seq(seq__33613_34351);
if(temp__5753__auto___34364){
var seq__33613_34365__$1 = temp__5753__auto___34364;
if(cljs.core.chunked_seq_QMARK_(seq__33613_34365__$1)){
var c__5568__auto___34366 = cljs.core.chunk_first(seq__33613_34365__$1);
var G__34367 = cljs.core.chunk_rest(seq__33613_34365__$1);
var G__34368 = c__5568__auto___34366;
var G__34369 = cljs.core.count(c__5568__auto___34366);
var G__34370 = (0);
seq__33613_34351 = G__34367;
chunk__33615_34352 = G__34368;
count__33616_34353 = G__34369;
i__33617_34354 = G__34370;
continue;
} else {
var child_34372 = cljs.core.first(seq__33613_34365__$1);
if(cljs.core.truth_(child_34372)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34372);


var G__34373 = cljs.core.next(seq__33613_34365__$1);
var G__34374 = null;
var G__34375 = (0);
var G__34376 = (0);
seq__33613_34351 = G__34373;
chunk__33615_34352 = G__34374;
count__33616_34353 = G__34375;
i__33617_34354 = G__34376;
continue;
} else {
var G__34377 = cljs.core.next(seq__33613_34365__$1);
var G__34378 = null;
var G__34379 = (0);
var G__34380 = (0);
seq__33613_34351 = G__34377;
chunk__33615_34352 = G__34378;
count__33616_34353 = G__34379;
i__33617_34354 = G__34380;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34350);
}


var G__34381 = seq__33557_34345;
var G__34382 = chunk__33558_34346;
var G__34383 = count__33559_34347;
var G__34384 = (i__33560_34348 + (1));
seq__33557_34345 = G__34381;
chunk__33558_34346 = G__34382;
count__33559_34347 = G__34383;
i__33560_34348 = G__34384;
continue;
} else {
var temp__5753__auto___34385 = cljs.core.seq(seq__33557_34345);
if(temp__5753__auto___34385){
var seq__33557_34386__$1 = temp__5753__auto___34385;
if(cljs.core.chunked_seq_QMARK_(seq__33557_34386__$1)){
var c__5568__auto___34387 = cljs.core.chunk_first(seq__33557_34386__$1);
var G__34388 = cljs.core.chunk_rest(seq__33557_34386__$1);
var G__34389 = c__5568__auto___34387;
var G__34390 = cljs.core.count(c__5568__auto___34387);
var G__34391 = (0);
seq__33557_34345 = G__34388;
chunk__33558_34346 = G__34389;
count__33559_34347 = G__34390;
i__33560_34348 = G__34391;
continue;
} else {
var child_struct_34392 = cljs.core.first(seq__33557_34386__$1);
var children_34393 = shadow.dom.dom_node(child_struct_34392);
if(cljs.core.seq_QMARK_(children_34393)){
var seq__33634_34394 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34393));
var chunk__33636_34395 = null;
var count__33637_34396 = (0);
var i__33638_34397 = (0);
while(true){
if((i__33638_34397 < count__33637_34396)){
var child_34398 = chunk__33636_34395.cljs$core$IIndexed$_nth$arity$2(null,i__33638_34397);
if(cljs.core.truth_(child_34398)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34398);


var G__34399 = seq__33634_34394;
var G__34400 = chunk__33636_34395;
var G__34401 = count__33637_34396;
var G__34402 = (i__33638_34397 + (1));
seq__33634_34394 = G__34399;
chunk__33636_34395 = G__34400;
count__33637_34396 = G__34401;
i__33638_34397 = G__34402;
continue;
} else {
var G__34403 = seq__33634_34394;
var G__34404 = chunk__33636_34395;
var G__34405 = count__33637_34396;
var G__34406 = (i__33638_34397 + (1));
seq__33634_34394 = G__34403;
chunk__33636_34395 = G__34404;
count__33637_34396 = G__34405;
i__33638_34397 = G__34406;
continue;
}
} else {
var temp__5753__auto___34407__$1 = cljs.core.seq(seq__33634_34394);
if(temp__5753__auto___34407__$1){
var seq__33634_34408__$1 = temp__5753__auto___34407__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33634_34408__$1)){
var c__5568__auto___34409 = cljs.core.chunk_first(seq__33634_34408__$1);
var G__34410 = cljs.core.chunk_rest(seq__33634_34408__$1);
var G__34411 = c__5568__auto___34409;
var G__34412 = cljs.core.count(c__5568__auto___34409);
var G__34413 = (0);
seq__33634_34394 = G__34410;
chunk__33636_34395 = G__34411;
count__33637_34396 = G__34412;
i__33638_34397 = G__34413;
continue;
} else {
var child_34414 = cljs.core.first(seq__33634_34408__$1);
if(cljs.core.truth_(child_34414)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34414);


var G__34415 = cljs.core.next(seq__33634_34408__$1);
var G__34416 = null;
var G__34417 = (0);
var G__34418 = (0);
seq__33634_34394 = G__34415;
chunk__33636_34395 = G__34416;
count__33637_34396 = G__34417;
i__33638_34397 = G__34418;
continue;
} else {
var G__34419 = cljs.core.next(seq__33634_34408__$1);
var G__34420 = null;
var G__34421 = (0);
var G__34422 = (0);
seq__33634_34394 = G__34419;
chunk__33636_34395 = G__34420;
count__33637_34396 = G__34421;
i__33638_34397 = G__34422;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34393);
}


var G__34427 = cljs.core.next(seq__33557_34386__$1);
var G__34428 = null;
var G__34429 = (0);
var G__34430 = (0);
seq__33557_34345 = G__34427;
chunk__33558_34346 = G__34428;
count__33559_34347 = G__34429;
i__33560_34348 = G__34430;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33669 = cljs.core.seq(node);
var chunk__33670 = null;
var count__33671 = (0);
var i__33672 = (0);
while(true){
if((i__33672 < count__33671)){
var n = chunk__33670.cljs$core$IIndexed$_nth$arity$2(null,i__33672);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34435 = seq__33669;
var G__34436 = chunk__33670;
var G__34437 = count__33671;
var G__34438 = (i__33672 + (1));
seq__33669 = G__34435;
chunk__33670 = G__34436;
count__33671 = G__34437;
i__33672 = G__34438;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33669);
if(temp__5753__auto__){
var seq__33669__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33669__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33669__$1);
var G__34439 = cljs.core.chunk_rest(seq__33669__$1);
var G__34440 = c__5568__auto__;
var G__34441 = cljs.core.count(c__5568__auto__);
var G__34442 = (0);
seq__33669 = G__34439;
chunk__33670 = G__34440;
count__33671 = G__34441;
i__33672 = G__34442;
continue;
} else {
var n = cljs.core.first(seq__33669__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34443 = cljs.core.next(seq__33669__$1);
var G__34444 = null;
var G__34445 = (0);
var G__34446 = (0);
seq__33669 = G__34443;
chunk__33670 = G__34444;
count__33671 = G__34445;
i__33672 = G__34446;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33683 = arguments.length;
switch (G__33683) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33690 = arguments.length;
switch (G__33690) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33761 = arguments.length;
switch (G__33761) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34452 = arguments.length;
var i__5770__auto___34453 = (0);
while(true){
if((i__5770__auto___34453 < len__5769__auto___34452)){
args__5775__auto__.push((arguments[i__5770__auto___34453]));

var G__34454 = (i__5770__auto___34453 + (1));
i__5770__auto___34453 = G__34454;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33766_34455 = cljs.core.seq(nodes);
var chunk__33767_34456 = null;
var count__33768_34457 = (0);
var i__33769_34458 = (0);
while(true){
if((i__33769_34458 < count__33768_34457)){
var node_34459 = chunk__33767_34456.cljs$core$IIndexed$_nth$arity$2(null,i__33769_34458);
fragment.appendChild(shadow.dom._to_dom(node_34459));


var G__34460 = seq__33766_34455;
var G__34461 = chunk__33767_34456;
var G__34462 = count__33768_34457;
var G__34463 = (i__33769_34458 + (1));
seq__33766_34455 = G__34460;
chunk__33767_34456 = G__34461;
count__33768_34457 = G__34462;
i__33769_34458 = G__34463;
continue;
} else {
var temp__5753__auto___34464 = cljs.core.seq(seq__33766_34455);
if(temp__5753__auto___34464){
var seq__33766_34465__$1 = temp__5753__auto___34464;
if(cljs.core.chunked_seq_QMARK_(seq__33766_34465__$1)){
var c__5568__auto___34466 = cljs.core.chunk_first(seq__33766_34465__$1);
var G__34467 = cljs.core.chunk_rest(seq__33766_34465__$1);
var G__34468 = c__5568__auto___34466;
var G__34469 = cljs.core.count(c__5568__auto___34466);
var G__34470 = (0);
seq__33766_34455 = G__34467;
chunk__33767_34456 = G__34468;
count__33768_34457 = G__34469;
i__33769_34458 = G__34470;
continue;
} else {
var node_34471 = cljs.core.first(seq__33766_34465__$1);
fragment.appendChild(shadow.dom._to_dom(node_34471));


var G__34472 = cljs.core.next(seq__33766_34465__$1);
var G__34473 = null;
var G__34474 = (0);
var G__34475 = (0);
seq__33766_34455 = G__34472;
chunk__33767_34456 = G__34473;
count__33768_34457 = G__34474;
i__33769_34458 = G__34475;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33765){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33765));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33776_34476 = cljs.core.seq(scripts);
var chunk__33777_34477 = null;
var count__33778_34478 = (0);
var i__33779_34479 = (0);
while(true){
if((i__33779_34479 < count__33778_34478)){
var vec__33796_34480 = chunk__33777_34477.cljs$core$IIndexed$_nth$arity$2(null,i__33779_34479);
var script_tag_34481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33796_34480,(0),null);
var script_body_34482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33796_34480,(1),null);
eval(script_body_34482);


var G__34483 = seq__33776_34476;
var G__34484 = chunk__33777_34477;
var G__34485 = count__33778_34478;
var G__34486 = (i__33779_34479 + (1));
seq__33776_34476 = G__34483;
chunk__33777_34477 = G__34484;
count__33778_34478 = G__34485;
i__33779_34479 = G__34486;
continue;
} else {
var temp__5753__auto___34487 = cljs.core.seq(seq__33776_34476);
if(temp__5753__auto___34487){
var seq__33776_34488__$1 = temp__5753__auto___34487;
if(cljs.core.chunked_seq_QMARK_(seq__33776_34488__$1)){
var c__5568__auto___34489 = cljs.core.chunk_first(seq__33776_34488__$1);
var G__34490 = cljs.core.chunk_rest(seq__33776_34488__$1);
var G__34491 = c__5568__auto___34489;
var G__34492 = cljs.core.count(c__5568__auto___34489);
var G__34493 = (0);
seq__33776_34476 = G__34490;
chunk__33777_34477 = G__34491;
count__33778_34478 = G__34492;
i__33779_34479 = G__34493;
continue;
} else {
var vec__33803_34494 = cljs.core.first(seq__33776_34488__$1);
var script_tag_34495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33803_34494,(0),null);
var script_body_34496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33803_34494,(1),null);
eval(script_body_34496);


var G__34497 = cljs.core.next(seq__33776_34488__$1);
var G__34498 = null;
var G__34499 = (0);
var G__34500 = (0);
seq__33776_34476 = G__34497;
chunk__33777_34477 = G__34498;
count__33778_34478 = G__34499;
i__33779_34479 = G__34500;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33811){
var vec__33812 = p__33811;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33812,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33812,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33851 = arguments.length;
switch (G__33851) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33882 = cljs.core.seq(style_keys);
var chunk__33883 = null;
var count__33884 = (0);
var i__33885 = (0);
while(true){
if((i__33885 < count__33884)){
var it = chunk__33883.cljs$core$IIndexed$_nth$arity$2(null,i__33885);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34505 = seq__33882;
var G__34506 = chunk__33883;
var G__34507 = count__33884;
var G__34508 = (i__33885 + (1));
seq__33882 = G__34505;
chunk__33883 = G__34506;
count__33884 = G__34507;
i__33885 = G__34508;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33882);
if(temp__5753__auto__){
var seq__33882__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33882__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33882__$1);
var G__34509 = cljs.core.chunk_rest(seq__33882__$1);
var G__34510 = c__5568__auto__;
var G__34511 = cljs.core.count(c__5568__auto__);
var G__34512 = (0);
seq__33882 = G__34509;
chunk__33883 = G__34510;
count__33884 = G__34511;
i__33885 = G__34512;
continue;
} else {
var it = cljs.core.first(seq__33882__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34513 = cljs.core.next(seq__33882__$1);
var G__34514 = null;
var G__34515 = (0);
var G__34516 = (0);
seq__33882 = G__34513;
chunk__33883 = G__34514;
count__33884 = G__34515;
i__33885 = G__34516;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k33930,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__33942 = k33930;
var G__33942__$1 = (((G__33942 instanceof cljs.core.Keyword))?G__33942.fqn:null);
switch (G__33942__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33930,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__33945){
var vec__33946 = p__33945;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33946,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33946,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33929){
var self__ = this;
var G__33929__$1 = this;
return (new cljs.core.RecordIter((0),G__33929__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33931,other33932){
var self__ = this;
var this33931__$1 = this;
return (((!((other33932 == null)))) && ((((this33931__$1.constructor === other33932.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33931__$1.x,other33932.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33931__$1.y,other33932.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33931__$1.__extmap,other33932.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k33930){
var self__ = this;
var this__5350__auto____$1 = this;
var G__33987 = k33930;
var G__33987__$1 = (((G__33987 instanceof cljs.core.Keyword))?G__33987.fqn:null);
switch (G__33987__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33930);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__33929){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__33991 = cljs.core.keyword_identical_QMARK_;
var expr__33992 = k__5352__auto__;
if(cljs.core.truth_((pred__33991.cljs$core$IFn$_invoke$arity$2 ? pred__33991.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33992) : pred__33991.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33992)))){
return (new shadow.dom.Coordinate(G__33929,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33991.cljs$core$IFn$_invoke$arity$2 ? pred__33991.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33992) : pred__33991.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33992)))){
return (new shadow.dom.Coordinate(self__.x,G__33929,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__33929),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__33929){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33929,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33934){
var extmap__5385__auto__ = (function (){var G__34016 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33934,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33934)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34016);
} else {
return G__34016;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33934),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33934),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34030,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34034 = k34030;
var G__34034__$1 = (((G__34034 instanceof cljs.core.Keyword))?G__34034.fqn:null);
switch (G__34034__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34030,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34035){
var vec__34036 = p__34035;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34036,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34036,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34029){
var self__ = this;
var G__34029__$1 = this;
return (new cljs.core.RecordIter((0),G__34029__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34031,other34032){
var self__ = this;
var this34031__$1 = this;
return (((!((other34032 == null)))) && ((((this34031__$1.constructor === other34032.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34031__$1.w,other34032.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34031__$1.h,other34032.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34031__$1.__extmap,other34032.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34030){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34054 = k34030;
var G__34054__$1 = (((G__34054 instanceof cljs.core.Keyword))?G__34054.fqn:null);
switch (G__34054__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34030);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34029){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34055 = cljs.core.keyword_identical_QMARK_;
var expr__34056 = k__5352__auto__;
if(cljs.core.truth_((pred__34055.cljs$core$IFn$_invoke$arity$2 ? pred__34055.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34056) : pred__34055.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34056)))){
return (new shadow.dom.Size(G__34029,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34055.cljs$core$IFn$_invoke$arity$2 ? pred__34055.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34056) : pred__34055.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34056)))){
return (new shadow.dom.Size(self__.w,G__34029,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34029),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34029){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34029,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34033){
var extmap__5385__auto__ = (function (){var G__34058 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34033,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34033)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34058);
} else {
return G__34058;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34033),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34033),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__34531 = (i + (1));
var G__34532 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34531;
ret = G__34532;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34080){
var vec__34081 = p__34080;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34081,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34085 = arguments.length;
switch (G__34085) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34534 = ps;
var G__34535 = (i + (1));
el__$1 = G__34534;
i = G__34535;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34108 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34108,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34108,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34108,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34114_34539 = cljs.core.seq(props);
var chunk__34115_34540 = null;
var count__34116_34541 = (0);
var i__34117_34542 = (0);
while(true){
if((i__34117_34542 < count__34116_34541)){
var vec__34133_34543 = chunk__34115_34540.cljs$core$IIndexed$_nth$arity$2(null,i__34117_34542);
var k_34544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34133_34543,(0),null);
var v_34545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34133_34543,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34544);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34544),v_34545);


var G__34546 = seq__34114_34539;
var G__34547 = chunk__34115_34540;
var G__34548 = count__34116_34541;
var G__34549 = (i__34117_34542 + (1));
seq__34114_34539 = G__34546;
chunk__34115_34540 = G__34547;
count__34116_34541 = G__34548;
i__34117_34542 = G__34549;
continue;
} else {
var temp__5753__auto___34550 = cljs.core.seq(seq__34114_34539);
if(temp__5753__auto___34550){
var seq__34114_34551__$1 = temp__5753__auto___34550;
if(cljs.core.chunked_seq_QMARK_(seq__34114_34551__$1)){
var c__5568__auto___34553 = cljs.core.chunk_first(seq__34114_34551__$1);
var G__34554 = cljs.core.chunk_rest(seq__34114_34551__$1);
var G__34555 = c__5568__auto___34553;
var G__34556 = cljs.core.count(c__5568__auto___34553);
var G__34557 = (0);
seq__34114_34539 = G__34554;
chunk__34115_34540 = G__34555;
count__34116_34541 = G__34556;
i__34117_34542 = G__34557;
continue;
} else {
var vec__34143_34558 = cljs.core.first(seq__34114_34551__$1);
var k_34559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34143_34558,(0),null);
var v_34560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34143_34558,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34559);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34559),v_34560);


var G__34561 = cljs.core.next(seq__34114_34551__$1);
var G__34562 = null;
var G__34563 = (0);
var G__34564 = (0);
seq__34114_34539 = G__34561;
chunk__34115_34540 = G__34562;
count__34116_34541 = G__34563;
i__34117_34542 = G__34564;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34152 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34152,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34152,(1),null);
var seq__34155_34565 = cljs.core.seq(node_children);
var chunk__34157_34566 = null;
var count__34158_34567 = (0);
var i__34159_34568 = (0);
while(true){
if((i__34159_34568 < count__34158_34567)){
var child_struct_34569 = chunk__34157_34566.cljs$core$IIndexed$_nth$arity$2(null,i__34159_34568);
if((!((child_struct_34569 == null)))){
if(typeof child_struct_34569 === 'string'){
var text_34570 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34570),child_struct_34569].join(''));
} else {
var children_34571 = shadow.dom.svg_node(child_struct_34569);
if(cljs.core.seq_QMARK_(children_34571)){
var seq__34187_34572 = cljs.core.seq(children_34571);
var chunk__34189_34573 = null;
var count__34190_34574 = (0);
var i__34191_34575 = (0);
while(true){
if((i__34191_34575 < count__34190_34574)){
var child_34576 = chunk__34189_34573.cljs$core$IIndexed$_nth$arity$2(null,i__34191_34575);
if(cljs.core.truth_(child_34576)){
node.appendChild(child_34576);


var G__34577 = seq__34187_34572;
var G__34578 = chunk__34189_34573;
var G__34579 = count__34190_34574;
var G__34580 = (i__34191_34575 + (1));
seq__34187_34572 = G__34577;
chunk__34189_34573 = G__34578;
count__34190_34574 = G__34579;
i__34191_34575 = G__34580;
continue;
} else {
var G__34581 = seq__34187_34572;
var G__34582 = chunk__34189_34573;
var G__34583 = count__34190_34574;
var G__34584 = (i__34191_34575 + (1));
seq__34187_34572 = G__34581;
chunk__34189_34573 = G__34582;
count__34190_34574 = G__34583;
i__34191_34575 = G__34584;
continue;
}
} else {
var temp__5753__auto___34585 = cljs.core.seq(seq__34187_34572);
if(temp__5753__auto___34585){
var seq__34187_34586__$1 = temp__5753__auto___34585;
if(cljs.core.chunked_seq_QMARK_(seq__34187_34586__$1)){
var c__5568__auto___34587 = cljs.core.chunk_first(seq__34187_34586__$1);
var G__34588 = cljs.core.chunk_rest(seq__34187_34586__$1);
var G__34589 = c__5568__auto___34587;
var G__34590 = cljs.core.count(c__5568__auto___34587);
var G__34591 = (0);
seq__34187_34572 = G__34588;
chunk__34189_34573 = G__34589;
count__34190_34574 = G__34590;
i__34191_34575 = G__34591;
continue;
} else {
var child_34592 = cljs.core.first(seq__34187_34586__$1);
if(cljs.core.truth_(child_34592)){
node.appendChild(child_34592);


var G__34593 = cljs.core.next(seq__34187_34586__$1);
var G__34594 = null;
var G__34595 = (0);
var G__34596 = (0);
seq__34187_34572 = G__34593;
chunk__34189_34573 = G__34594;
count__34190_34574 = G__34595;
i__34191_34575 = G__34596;
continue;
} else {
var G__34597 = cljs.core.next(seq__34187_34586__$1);
var G__34598 = null;
var G__34599 = (0);
var G__34600 = (0);
seq__34187_34572 = G__34597;
chunk__34189_34573 = G__34598;
count__34190_34574 = G__34599;
i__34191_34575 = G__34600;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34571);
}
}


var G__34601 = seq__34155_34565;
var G__34602 = chunk__34157_34566;
var G__34603 = count__34158_34567;
var G__34604 = (i__34159_34568 + (1));
seq__34155_34565 = G__34601;
chunk__34157_34566 = G__34602;
count__34158_34567 = G__34603;
i__34159_34568 = G__34604;
continue;
} else {
var G__34605 = seq__34155_34565;
var G__34606 = chunk__34157_34566;
var G__34607 = count__34158_34567;
var G__34608 = (i__34159_34568 + (1));
seq__34155_34565 = G__34605;
chunk__34157_34566 = G__34606;
count__34158_34567 = G__34607;
i__34159_34568 = G__34608;
continue;
}
} else {
var temp__5753__auto___34609 = cljs.core.seq(seq__34155_34565);
if(temp__5753__auto___34609){
var seq__34155_34611__$1 = temp__5753__auto___34609;
if(cljs.core.chunked_seq_QMARK_(seq__34155_34611__$1)){
var c__5568__auto___34612 = cljs.core.chunk_first(seq__34155_34611__$1);
var G__34613 = cljs.core.chunk_rest(seq__34155_34611__$1);
var G__34614 = c__5568__auto___34612;
var G__34615 = cljs.core.count(c__5568__auto___34612);
var G__34616 = (0);
seq__34155_34565 = G__34613;
chunk__34157_34566 = G__34614;
count__34158_34567 = G__34615;
i__34159_34568 = G__34616;
continue;
} else {
var child_struct_34618 = cljs.core.first(seq__34155_34611__$1);
if((!((child_struct_34618 == null)))){
if(typeof child_struct_34618 === 'string'){
var text_34619 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34619),child_struct_34618].join(''));
} else {
var children_34620 = shadow.dom.svg_node(child_struct_34618);
if(cljs.core.seq_QMARK_(children_34620)){
var seq__34198_34621 = cljs.core.seq(children_34620);
var chunk__34200_34622 = null;
var count__34201_34623 = (0);
var i__34202_34624 = (0);
while(true){
if((i__34202_34624 < count__34201_34623)){
var child_34628 = chunk__34200_34622.cljs$core$IIndexed$_nth$arity$2(null,i__34202_34624);
if(cljs.core.truth_(child_34628)){
node.appendChild(child_34628);


var G__34629 = seq__34198_34621;
var G__34630 = chunk__34200_34622;
var G__34631 = count__34201_34623;
var G__34632 = (i__34202_34624 + (1));
seq__34198_34621 = G__34629;
chunk__34200_34622 = G__34630;
count__34201_34623 = G__34631;
i__34202_34624 = G__34632;
continue;
} else {
var G__34633 = seq__34198_34621;
var G__34634 = chunk__34200_34622;
var G__34635 = count__34201_34623;
var G__34636 = (i__34202_34624 + (1));
seq__34198_34621 = G__34633;
chunk__34200_34622 = G__34634;
count__34201_34623 = G__34635;
i__34202_34624 = G__34636;
continue;
}
} else {
var temp__5753__auto___34637__$1 = cljs.core.seq(seq__34198_34621);
if(temp__5753__auto___34637__$1){
var seq__34198_34638__$1 = temp__5753__auto___34637__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34198_34638__$1)){
var c__5568__auto___34639 = cljs.core.chunk_first(seq__34198_34638__$1);
var G__34640 = cljs.core.chunk_rest(seq__34198_34638__$1);
var G__34641 = c__5568__auto___34639;
var G__34642 = cljs.core.count(c__5568__auto___34639);
var G__34643 = (0);
seq__34198_34621 = G__34640;
chunk__34200_34622 = G__34641;
count__34201_34623 = G__34642;
i__34202_34624 = G__34643;
continue;
} else {
var child_34644 = cljs.core.first(seq__34198_34638__$1);
if(cljs.core.truth_(child_34644)){
node.appendChild(child_34644);


var G__34645 = cljs.core.next(seq__34198_34638__$1);
var G__34646 = null;
var G__34647 = (0);
var G__34648 = (0);
seq__34198_34621 = G__34645;
chunk__34200_34622 = G__34646;
count__34201_34623 = G__34647;
i__34202_34624 = G__34648;
continue;
} else {
var G__34649 = cljs.core.next(seq__34198_34638__$1);
var G__34650 = null;
var G__34651 = (0);
var G__34652 = (0);
seq__34198_34621 = G__34649;
chunk__34200_34622 = G__34650;
count__34201_34623 = G__34651;
i__34202_34624 = G__34652;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34620);
}
}


var G__34653 = cljs.core.next(seq__34155_34611__$1);
var G__34654 = null;
var G__34655 = (0);
var G__34656 = (0);
seq__34155_34565 = G__34653;
chunk__34157_34566 = G__34654;
count__34158_34567 = G__34655;
i__34159_34568 = G__34656;
continue;
} else {
var G__34657 = cljs.core.next(seq__34155_34611__$1);
var G__34658 = null;
var G__34659 = (0);
var G__34660 = (0);
seq__34155_34565 = G__34657;
chunk__34157_34566 = G__34658;
count__34158_34567 = G__34659;
i__34159_34568 = G__34660;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34664 = arguments.length;
var i__5770__auto___34665 = (0);
while(true){
if((i__5770__auto___34665 < len__5769__auto___34664)){
args__5775__auto__.push((arguments[i__5770__auto___34665]));

var G__34666 = (i__5770__auto___34665 + (1));
i__5770__auto___34665 = G__34666;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34224){
var G__34226 = cljs.core.first(seq34224);
var seq34224__$1 = cljs.core.next(seq34224);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34226,seq34224__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34238 = arguments.length;
switch (G__34238) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__29713__auto___34678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_34254){
var state_val_34255 = (state_34254[(1)]);
if((state_val_34255 === (1))){
var state_34254__$1 = state_34254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34254__$1,(2),once_or_cleanup);
} else {
if((state_val_34255 === (2))){
var inst_34251 = (state_34254[(2)]);
var inst_34252 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34254__$1 = (function (){var statearr_34258 = state_34254;
(statearr_34258[(7)] = inst_34251);

return statearr_34258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34254__$1,inst_34252);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29505__auto__ = null;
var shadow$dom$state_machine__29505__auto____0 = (function (){
var statearr_34260 = [null,null,null,null,null,null,null,null];
(statearr_34260[(0)] = shadow$dom$state_machine__29505__auto__);

(statearr_34260[(1)] = (1));

return statearr_34260;
});
var shadow$dom$state_machine__29505__auto____1 = (function (state_34254){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_34254);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e34265){var ex__29509__auto__ = e34265;
var statearr_34266_34679 = state_34254;
(statearr_34266_34679[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_34254[(4)]))){
var statearr_34267_34683 = state_34254;
(statearr_34267_34683[(1)] = cljs.core.first((state_34254[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34684 = state_34254;
state_34254 = G__34684;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
shadow$dom$state_machine__29505__auto__ = function(state_34254){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29505__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29505__auto____1.call(this,state_34254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29505__auto____0;
shadow$dom$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29505__auto____1;
return shadow$dom$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_34268 = f__29714__auto__();
(statearr_34268[(6)] = c__29713__auto___34678);

return statearr_34268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
