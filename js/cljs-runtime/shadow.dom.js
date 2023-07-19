goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34987 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34987(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34992 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34992(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33293 = coll;
var G__33294 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33293,G__33294) : shadow.dom.lazy_native_coll_seq.call(null,G__33293,G__33294));
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
var G__33343 = arguments.length;
switch (G__33343) {
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
var G__33363 = arguments.length;
switch (G__33363) {
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
var G__33377 = arguments.length;
switch (G__33377) {
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
var G__33411 = arguments.length;
switch (G__33411) {
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
var G__33441 = arguments.length;
switch (G__33441) {
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
var G__33477 = arguments.length;
switch (G__33477) {
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
}catch (e33501){if((e33501 instanceof Object)){
var e = e33501;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33501;

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
var seq__33532 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33533 = null;
var count__33534 = (0);
var i__33535 = (0);
while(true){
if((i__33535 < count__33534)){
var el = chunk__33533.cljs$core$IIndexed$_nth$arity$2(null,i__33535);
var handler_35015__$1 = ((function (seq__33532,chunk__33533,count__33534,i__33535,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33532,chunk__33533,count__33534,i__33535,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35015__$1);


var G__35016 = seq__33532;
var G__35017 = chunk__33533;
var G__35018 = count__33534;
var G__35019 = (i__33535 + (1));
seq__33532 = G__35016;
chunk__33533 = G__35017;
count__33534 = G__35018;
i__33535 = G__35019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33532);
if(temp__5804__auto__){
var seq__33532__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33532__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33532__$1);
var G__35020 = cljs.core.chunk_rest(seq__33532__$1);
var G__35021 = c__5568__auto__;
var G__35022 = cljs.core.count(c__5568__auto__);
var G__35023 = (0);
seq__33532 = G__35020;
chunk__33533 = G__35021;
count__33534 = G__35022;
i__33535 = G__35023;
continue;
} else {
var el = cljs.core.first(seq__33532__$1);
var handler_35024__$1 = ((function (seq__33532,chunk__33533,count__33534,i__33535,el,seq__33532__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33532,chunk__33533,count__33534,i__33535,el,seq__33532__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35024__$1);


var G__35027 = cljs.core.next(seq__33532__$1);
var G__35028 = null;
var G__35029 = (0);
var G__35030 = (0);
seq__33532 = G__35027;
chunk__33533 = G__35028;
count__33534 = G__35029;
i__33535 = G__35030;
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
var G__33578 = arguments.length;
switch (G__33578) {
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
var seq__33614 = cljs.core.seq(events);
var chunk__33615 = null;
var count__33616 = (0);
var i__33617 = (0);
while(true){
if((i__33617 < count__33616)){
var vec__33652 = chunk__33615.cljs$core$IIndexed$_nth$arity$2(null,i__33617);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33652,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35032 = seq__33614;
var G__35033 = chunk__33615;
var G__35034 = count__33616;
var G__35035 = (i__33617 + (1));
seq__33614 = G__35032;
chunk__33615 = G__35033;
count__33616 = G__35034;
i__33617 = G__35035;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33614);
if(temp__5804__auto__){
var seq__33614__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33614__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33614__$1);
var G__35036 = cljs.core.chunk_rest(seq__33614__$1);
var G__35037 = c__5568__auto__;
var G__35038 = cljs.core.count(c__5568__auto__);
var G__35039 = (0);
seq__33614 = G__35036;
chunk__33615 = G__35037;
count__33616 = G__35038;
i__33617 = G__35039;
continue;
} else {
var vec__33662 = cljs.core.first(seq__33614__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33662,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33662,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35040 = cljs.core.next(seq__33614__$1);
var G__35041 = null;
var G__35042 = (0);
var G__35043 = (0);
seq__33614 = G__35040;
chunk__33615 = G__35041;
count__33616 = G__35042;
i__33617 = G__35043;
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
var seq__33682 = cljs.core.seq(styles);
var chunk__33683 = null;
var count__33684 = (0);
var i__33685 = (0);
while(true){
if((i__33685 < count__33684)){
var vec__33710 = chunk__33683.cljs$core$IIndexed$_nth$arity$2(null,i__33685);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35048 = seq__33682;
var G__35049 = chunk__33683;
var G__35050 = count__33684;
var G__35051 = (i__33685 + (1));
seq__33682 = G__35048;
chunk__33683 = G__35049;
count__33684 = G__35050;
i__33685 = G__35051;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33682);
if(temp__5804__auto__){
var seq__33682__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33682__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33682__$1);
var G__35054 = cljs.core.chunk_rest(seq__33682__$1);
var G__35055 = c__5568__auto__;
var G__35056 = cljs.core.count(c__5568__auto__);
var G__35057 = (0);
seq__33682 = G__35054;
chunk__33683 = G__35055;
count__33684 = G__35056;
i__33685 = G__35057;
continue;
} else {
var vec__33714 = cljs.core.first(seq__33682__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35059 = cljs.core.next(seq__33682__$1);
var G__35060 = null;
var G__35061 = (0);
var G__35062 = (0);
seq__33682 = G__35059;
chunk__33683 = G__35060;
count__33684 = G__35061;
i__33685 = G__35062;
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
var G__33724_35063 = key;
var G__33724_35064__$1 = (((G__33724_35063 instanceof cljs.core.Keyword))?G__33724_35063.fqn:null);
switch (G__33724_35064__$1) {
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
var ks_35066 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_35066,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_35066,"aria-");
}
})())){
el.setAttribute(ks_35066,value);
} else {
(el[ks_35066] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33752){
var map__33753 = p__33752;
var map__33753__$1 = cljs.core.__destructure_map(map__33753);
var props = map__33753__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33753__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33755 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33755,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33755,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33755,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33759 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33759,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33759;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33761 = arguments.length;
switch (G__33761) {
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33775){
var vec__33776 = p__33775;
var seq__33777 = cljs.core.seq(vec__33776);
var first__33778 = cljs.core.first(seq__33777);
var seq__33777__$1 = cljs.core.next(seq__33777);
var nn = first__33778;
var first__33778__$1 = cljs.core.first(seq__33777__$1);
var seq__33777__$2 = cljs.core.next(seq__33777__$1);
var np = first__33778__$1;
var nc = seq__33777__$2;
var node = vec__33776;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33781 = nn;
var G__33782 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33781,G__33782) : create_fn.call(null,G__33781,G__33782));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33785 = nn;
var G__33786 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33785,G__33786) : create_fn.call(null,G__33785,G__33786));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33795 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33795,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33795,(1),null);
var seq__33799_35083 = cljs.core.seq(node_children);
var chunk__33800_35084 = null;
var count__33801_35085 = (0);
var i__33802_35086 = (0);
while(true){
if((i__33802_35086 < count__33801_35085)){
var child_struct_35088 = chunk__33800_35084.cljs$core$IIndexed$_nth$arity$2(null,i__33802_35086);
var children_35089 = shadow.dom.dom_node(child_struct_35088);
if(cljs.core.seq_QMARK_(children_35089)){
var seq__33910_35090 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35089));
var chunk__33912_35091 = null;
var count__33913_35092 = (0);
var i__33914_35093 = (0);
while(true){
if((i__33914_35093 < count__33913_35092)){
var child_35094 = chunk__33912_35091.cljs$core$IIndexed$_nth$arity$2(null,i__33914_35093);
if(cljs.core.truth_(child_35094)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35094);


var G__35095 = seq__33910_35090;
var G__35096 = chunk__33912_35091;
var G__35097 = count__33913_35092;
var G__35098 = (i__33914_35093 + (1));
seq__33910_35090 = G__35095;
chunk__33912_35091 = G__35096;
count__33913_35092 = G__35097;
i__33914_35093 = G__35098;
continue;
} else {
var G__35099 = seq__33910_35090;
var G__35100 = chunk__33912_35091;
var G__35101 = count__33913_35092;
var G__35102 = (i__33914_35093 + (1));
seq__33910_35090 = G__35099;
chunk__33912_35091 = G__35100;
count__33913_35092 = G__35101;
i__33914_35093 = G__35102;
continue;
}
} else {
var temp__5804__auto___35103 = cljs.core.seq(seq__33910_35090);
if(temp__5804__auto___35103){
var seq__33910_35104__$1 = temp__5804__auto___35103;
if(cljs.core.chunked_seq_QMARK_(seq__33910_35104__$1)){
var c__5568__auto___35105 = cljs.core.chunk_first(seq__33910_35104__$1);
var G__35106 = cljs.core.chunk_rest(seq__33910_35104__$1);
var G__35107 = c__5568__auto___35105;
var G__35108 = cljs.core.count(c__5568__auto___35105);
var G__35109 = (0);
seq__33910_35090 = G__35106;
chunk__33912_35091 = G__35107;
count__33913_35092 = G__35108;
i__33914_35093 = G__35109;
continue;
} else {
var child_35110 = cljs.core.first(seq__33910_35104__$1);
if(cljs.core.truth_(child_35110)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35110);


var G__35111 = cljs.core.next(seq__33910_35104__$1);
var G__35112 = null;
var G__35113 = (0);
var G__35114 = (0);
seq__33910_35090 = G__35111;
chunk__33912_35091 = G__35112;
count__33913_35092 = G__35113;
i__33914_35093 = G__35114;
continue;
} else {
var G__35115 = cljs.core.next(seq__33910_35104__$1);
var G__35116 = null;
var G__35117 = (0);
var G__35118 = (0);
seq__33910_35090 = G__35115;
chunk__33912_35091 = G__35116;
count__33913_35092 = G__35117;
i__33914_35093 = G__35118;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35089);
}


var G__35119 = seq__33799_35083;
var G__35120 = chunk__33800_35084;
var G__35121 = count__33801_35085;
var G__35122 = (i__33802_35086 + (1));
seq__33799_35083 = G__35119;
chunk__33800_35084 = G__35120;
count__33801_35085 = G__35121;
i__33802_35086 = G__35122;
continue;
} else {
var temp__5804__auto___35123 = cljs.core.seq(seq__33799_35083);
if(temp__5804__auto___35123){
var seq__33799_35124__$1 = temp__5804__auto___35123;
if(cljs.core.chunked_seq_QMARK_(seq__33799_35124__$1)){
var c__5568__auto___35125 = cljs.core.chunk_first(seq__33799_35124__$1);
var G__35126 = cljs.core.chunk_rest(seq__33799_35124__$1);
var G__35127 = c__5568__auto___35125;
var G__35128 = cljs.core.count(c__5568__auto___35125);
var G__35129 = (0);
seq__33799_35083 = G__35126;
chunk__33800_35084 = G__35127;
count__33801_35085 = G__35128;
i__33802_35086 = G__35129;
continue;
} else {
var child_struct_35130 = cljs.core.first(seq__33799_35124__$1);
var children_35131 = shadow.dom.dom_node(child_struct_35130);
if(cljs.core.seq_QMARK_(children_35131)){
var seq__33942_35132 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35131));
var chunk__33944_35133 = null;
var count__33945_35134 = (0);
var i__33946_35135 = (0);
while(true){
if((i__33946_35135 < count__33945_35134)){
var child_35136 = chunk__33944_35133.cljs$core$IIndexed$_nth$arity$2(null,i__33946_35135);
if(cljs.core.truth_(child_35136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35136);


var G__35137 = seq__33942_35132;
var G__35138 = chunk__33944_35133;
var G__35139 = count__33945_35134;
var G__35140 = (i__33946_35135 + (1));
seq__33942_35132 = G__35137;
chunk__33944_35133 = G__35138;
count__33945_35134 = G__35139;
i__33946_35135 = G__35140;
continue;
} else {
var G__35141 = seq__33942_35132;
var G__35142 = chunk__33944_35133;
var G__35143 = count__33945_35134;
var G__35144 = (i__33946_35135 + (1));
seq__33942_35132 = G__35141;
chunk__33944_35133 = G__35142;
count__33945_35134 = G__35143;
i__33946_35135 = G__35144;
continue;
}
} else {
var temp__5804__auto___35145__$1 = cljs.core.seq(seq__33942_35132);
if(temp__5804__auto___35145__$1){
var seq__33942_35146__$1 = temp__5804__auto___35145__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33942_35146__$1)){
var c__5568__auto___35147 = cljs.core.chunk_first(seq__33942_35146__$1);
var G__35148 = cljs.core.chunk_rest(seq__33942_35146__$1);
var G__35149 = c__5568__auto___35147;
var G__35150 = cljs.core.count(c__5568__auto___35147);
var G__35151 = (0);
seq__33942_35132 = G__35148;
chunk__33944_35133 = G__35149;
count__33945_35134 = G__35150;
i__33946_35135 = G__35151;
continue;
} else {
var child_35152 = cljs.core.first(seq__33942_35146__$1);
if(cljs.core.truth_(child_35152)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35152);


var G__35153 = cljs.core.next(seq__33942_35146__$1);
var G__35154 = null;
var G__35155 = (0);
var G__35156 = (0);
seq__33942_35132 = G__35153;
chunk__33944_35133 = G__35154;
count__33945_35134 = G__35155;
i__33946_35135 = G__35156;
continue;
} else {
var G__35157 = cljs.core.next(seq__33942_35146__$1);
var G__35158 = null;
var G__35159 = (0);
var G__35160 = (0);
seq__33942_35132 = G__35157;
chunk__33944_35133 = G__35158;
count__33945_35134 = G__35159;
i__33946_35135 = G__35160;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35131);
}


var G__35162 = cljs.core.next(seq__33799_35124__$1);
var G__35163 = null;
var G__35164 = (0);
var G__35165 = (0);
seq__33799_35083 = G__35162;
chunk__33800_35084 = G__35163;
count__33801_35085 = G__35164;
i__33802_35086 = G__35165;
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
var seq__34034 = cljs.core.seq(node);
var chunk__34035 = null;
var count__34036 = (0);
var i__34037 = (0);
while(true){
if((i__34037 < count__34036)){
var n = chunk__34035.cljs$core$IIndexed$_nth$arity$2(null,i__34037);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35174 = seq__34034;
var G__35175 = chunk__34035;
var G__35176 = count__34036;
var G__35177 = (i__34037 + (1));
seq__34034 = G__35174;
chunk__34035 = G__35175;
count__34036 = G__35176;
i__34037 = G__35177;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34034);
if(temp__5804__auto__){
var seq__34034__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34034__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34034__$1);
var G__35180 = cljs.core.chunk_rest(seq__34034__$1);
var G__35181 = c__5568__auto__;
var G__35182 = cljs.core.count(c__5568__auto__);
var G__35183 = (0);
seq__34034 = G__35180;
chunk__34035 = G__35181;
count__34036 = G__35182;
i__34037 = G__35183;
continue;
} else {
var n = cljs.core.first(seq__34034__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35184 = cljs.core.next(seq__34034__$1);
var G__35185 = null;
var G__35186 = (0);
var G__35187 = (0);
seq__34034 = G__35184;
chunk__34035 = G__35185;
count__34036 = G__35186;
i__34037 = G__35187;
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
var G__34074 = arguments.length;
switch (G__34074) {
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
var G__34087 = arguments.length;
switch (G__34087) {
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
var G__34104 = arguments.length;
switch (G__34104) {
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
var len__5769__auto___35200 = arguments.length;
var i__5770__auto___35201 = (0);
while(true){
if((i__5770__auto___35201 < len__5769__auto___35200)){
args__5775__auto__.push((arguments[i__5770__auto___35201]));

var G__35202 = (i__5770__auto___35201 + (1));
i__5770__auto___35201 = G__35202;
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
var seq__34149_35204 = cljs.core.seq(nodes);
var chunk__34150_35205 = null;
var count__34151_35206 = (0);
var i__34152_35207 = (0);
while(true){
if((i__34152_35207 < count__34151_35206)){
var node_35209 = chunk__34150_35205.cljs$core$IIndexed$_nth$arity$2(null,i__34152_35207);
fragment.appendChild(shadow.dom._to_dom(node_35209));


var G__35210 = seq__34149_35204;
var G__35211 = chunk__34150_35205;
var G__35212 = count__34151_35206;
var G__35213 = (i__34152_35207 + (1));
seq__34149_35204 = G__35210;
chunk__34150_35205 = G__35211;
count__34151_35206 = G__35212;
i__34152_35207 = G__35213;
continue;
} else {
var temp__5804__auto___35214 = cljs.core.seq(seq__34149_35204);
if(temp__5804__auto___35214){
var seq__34149_35215__$1 = temp__5804__auto___35214;
if(cljs.core.chunked_seq_QMARK_(seq__34149_35215__$1)){
var c__5568__auto___35216 = cljs.core.chunk_first(seq__34149_35215__$1);
var G__35217 = cljs.core.chunk_rest(seq__34149_35215__$1);
var G__35218 = c__5568__auto___35216;
var G__35219 = cljs.core.count(c__5568__auto___35216);
var G__35220 = (0);
seq__34149_35204 = G__35217;
chunk__34150_35205 = G__35218;
count__34151_35206 = G__35219;
i__34152_35207 = G__35220;
continue;
} else {
var node_35221 = cljs.core.first(seq__34149_35215__$1);
fragment.appendChild(shadow.dom._to_dom(node_35221));


var G__35222 = cljs.core.next(seq__34149_35215__$1);
var G__35223 = null;
var G__35224 = (0);
var G__35225 = (0);
seq__34149_35204 = G__35222;
chunk__34150_35205 = G__35223;
count__34151_35206 = G__35224;
i__34152_35207 = G__35225;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34128){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34128));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34173_35226 = cljs.core.seq(scripts);
var chunk__34174_35227 = null;
var count__34175_35228 = (0);
var i__34176_35229 = (0);
while(true){
if((i__34176_35229 < count__34175_35228)){
var vec__34190_35230 = chunk__34174_35227.cljs$core$IIndexed$_nth$arity$2(null,i__34176_35229);
var script_tag_35231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34190_35230,(0),null);
var script_body_35232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34190_35230,(1),null);
eval(script_body_35232);


var G__35237 = seq__34173_35226;
var G__35238 = chunk__34174_35227;
var G__35239 = count__34175_35228;
var G__35240 = (i__34176_35229 + (1));
seq__34173_35226 = G__35237;
chunk__34174_35227 = G__35238;
count__34175_35228 = G__35239;
i__34176_35229 = G__35240;
continue;
} else {
var temp__5804__auto___35241 = cljs.core.seq(seq__34173_35226);
if(temp__5804__auto___35241){
var seq__34173_35242__$1 = temp__5804__auto___35241;
if(cljs.core.chunked_seq_QMARK_(seq__34173_35242__$1)){
var c__5568__auto___35243 = cljs.core.chunk_first(seq__34173_35242__$1);
var G__35244 = cljs.core.chunk_rest(seq__34173_35242__$1);
var G__35245 = c__5568__auto___35243;
var G__35246 = cljs.core.count(c__5568__auto___35243);
var G__35247 = (0);
seq__34173_35226 = G__35244;
chunk__34174_35227 = G__35245;
count__34175_35228 = G__35246;
i__34176_35229 = G__35247;
continue;
} else {
var vec__34200_35248 = cljs.core.first(seq__34173_35242__$1);
var script_tag_35249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34200_35248,(0),null);
var script_body_35250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34200_35248,(1),null);
eval(script_body_35250);


var G__35251 = cljs.core.next(seq__34173_35242__$1);
var G__35252 = null;
var G__35253 = (0);
var G__35254 = (0);
seq__34173_35226 = G__35251;
chunk__34174_35227 = G__35252;
count__34175_35228 = G__35253;
i__34176_35229 = G__35254;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34203){
var vec__34205 = p__34203;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34205,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34205,(1),null);
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
var G__34230 = arguments.length;
switch (G__34230) {
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
var seq__34283 = cljs.core.seq(style_keys);
var chunk__34284 = null;
var count__34285 = (0);
var i__34286 = (0);
while(true){
if((i__34286 < count__34285)){
var it = chunk__34284.cljs$core$IIndexed$_nth$arity$2(null,i__34286);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35266 = seq__34283;
var G__35267 = chunk__34284;
var G__35268 = count__34285;
var G__35269 = (i__34286 + (1));
seq__34283 = G__35266;
chunk__34284 = G__35267;
count__34285 = G__35268;
i__34286 = G__35269;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34283);
if(temp__5804__auto__){
var seq__34283__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34283__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34283__$1);
var G__35274 = cljs.core.chunk_rest(seq__34283__$1);
var G__35275 = c__5568__auto__;
var G__35276 = cljs.core.count(c__5568__auto__);
var G__35277 = (0);
seq__34283 = G__35274;
chunk__34284 = G__35275;
count__34285 = G__35276;
i__34286 = G__35277;
continue;
} else {
var it = cljs.core.first(seq__34283__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35278 = cljs.core.next(seq__34283__$1);
var G__35279 = null;
var G__35280 = (0);
var G__35281 = (0);
seq__34283 = G__35278;
chunk__34284 = G__35279;
count__34285 = G__35280;
i__34286 = G__35281;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34318,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34332 = k34318;
var G__34332__$1 = (((G__34332 instanceof cljs.core.Keyword))?G__34332.fqn:null);
switch (G__34332__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34318,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34338){
var vec__34340 = p__34338;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34340,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34340,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34317){
var self__ = this;
var G__34317__$1 = this;
return (new cljs.core.RecordIter((0),G__34317__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34319,other34320){
var self__ = this;
var this34319__$1 = this;
return (((!((other34320 == null)))) && ((((this34319__$1.constructor === other34320.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34319__$1.x,other34320.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34319__$1.y,other34320.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34319__$1.__extmap,other34320.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34318){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34383 = k34318;
var G__34383__$1 = (((G__34383 instanceof cljs.core.Keyword))?G__34383.fqn:null);
switch (G__34383__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34318);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34317){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34393 = cljs.core.keyword_identical_QMARK_;
var expr__34395 = k__5352__auto__;
if(cljs.core.truth_((pred__34393.cljs$core$IFn$_invoke$arity$2 ? pred__34393.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34395) : pred__34393.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34395)))){
return (new shadow.dom.Coordinate(G__34317,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34393.cljs$core$IFn$_invoke$arity$2 ? pred__34393.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34395) : pred__34393.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34395)))){
return (new shadow.dom.Coordinate(self__.x,G__34317,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34317),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34317){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34317,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34325){
var extmap__5385__auto__ = (function (){var G__34468 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34325,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34325)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34468);
} else {
return G__34468;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34325),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34325),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34510,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34527 = k34510;
var G__34527__$1 = (((G__34527 instanceof cljs.core.Keyword))?G__34527.fqn:null);
switch (G__34527__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34510,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34534){
var vec__34536 = p__34534;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34509){
var self__ = this;
var G__34509__$1 = this;
return (new cljs.core.RecordIter((0),G__34509__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34511,other34512){
var self__ = this;
var this34511__$1 = this;
return (((!((other34512 == null)))) && ((((this34511__$1.constructor === other34512.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34511__$1.w,other34512.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34511__$1.h,other34512.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34511__$1.__extmap,other34512.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34510){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34599 = k34510;
var G__34599__$1 = (((G__34599 instanceof cljs.core.Keyword))?G__34599.fqn:null);
switch (G__34599__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34510);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34509){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34612 = cljs.core.keyword_identical_QMARK_;
var expr__34613 = k__5352__auto__;
if(cljs.core.truth_((pred__34612.cljs$core$IFn$_invoke$arity$2 ? pred__34612.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34613) : pred__34612.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34613)))){
return (new shadow.dom.Size(G__34509,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34612.cljs$core$IFn$_invoke$arity$2 ? pred__34612.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34613) : pred__34612.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34613)))){
return (new shadow.dom.Size(self__.w,G__34509,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34509),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34509){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34509,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34519){
var extmap__5385__auto__ = (function (){var G__34666 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34519,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34519)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34666);
} else {
return G__34666;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34519),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34519),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__35314 = (i + (1));
var G__35315 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35314;
ret = G__35315;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34769){
var vec__34771 = p__34769;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34783 = arguments.length;
switch (G__34783) {
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
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
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
var G__35325 = ps;
var G__35326 = (i + (1));
el__$1 = G__35325;
i = G__35326;
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
var vec__34829 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34832_35328 = cljs.core.seq(props);
var chunk__34833_35329 = null;
var count__34834_35330 = (0);
var i__34835_35331 = (0);
while(true){
if((i__34835_35331 < count__34834_35330)){
var vec__34845_35332 = chunk__34833_35329.cljs$core$IIndexed$_nth$arity$2(null,i__34835_35331);
var k_35333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34845_35332,(0),null);
var v_35334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34845_35332,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_35333);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35333),v_35334);


var G__35339 = seq__34832_35328;
var G__35340 = chunk__34833_35329;
var G__35341 = count__34834_35330;
var G__35342 = (i__34835_35331 + (1));
seq__34832_35328 = G__35339;
chunk__34833_35329 = G__35340;
count__34834_35330 = G__35341;
i__34835_35331 = G__35342;
continue;
} else {
var temp__5804__auto___35343 = cljs.core.seq(seq__34832_35328);
if(temp__5804__auto___35343){
var seq__34832_35344__$1 = temp__5804__auto___35343;
if(cljs.core.chunked_seq_QMARK_(seq__34832_35344__$1)){
var c__5568__auto___35345 = cljs.core.chunk_first(seq__34832_35344__$1);
var G__35346 = cljs.core.chunk_rest(seq__34832_35344__$1);
var G__35347 = c__5568__auto___35345;
var G__35348 = cljs.core.count(c__5568__auto___35345);
var G__35349 = (0);
seq__34832_35328 = G__35346;
chunk__34833_35329 = G__35347;
count__34834_35330 = G__35348;
i__34835_35331 = G__35349;
continue;
} else {
var vec__34848_35350 = cljs.core.first(seq__34832_35344__$1);
var k_35351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34848_35350,(0),null);
var v_35352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34848_35350,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_35351);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35351),v_35352);


var G__35353 = cljs.core.next(seq__34832_35344__$1);
var G__35354 = null;
var G__35355 = (0);
var G__35356 = (0);
seq__34832_35328 = G__35353;
chunk__34833_35329 = G__35354;
count__34834_35330 = G__35355;
i__34835_35331 = G__35356;
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
var vec__34864 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34864,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34864,(1),null);
var seq__34867_35357 = cljs.core.seq(node_children);
var chunk__34869_35358 = null;
var count__34870_35359 = (0);
var i__34871_35360 = (0);
while(true){
if((i__34871_35360 < count__34870_35359)){
var child_struct_35361 = chunk__34869_35358.cljs$core$IIndexed$_nth$arity$2(null,i__34871_35360);
if((!((child_struct_35361 == null)))){
if(typeof child_struct_35361 === 'string'){
var text_35362 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35362),child_struct_35361].join(''));
} else {
var children_35363 = shadow.dom.svg_node(child_struct_35361);
if(cljs.core.seq_QMARK_(children_35363)){
var seq__34913_35364 = cljs.core.seq(children_35363);
var chunk__34915_35365 = null;
var count__34916_35366 = (0);
var i__34917_35367 = (0);
while(true){
if((i__34917_35367 < count__34916_35366)){
var child_35368 = chunk__34915_35365.cljs$core$IIndexed$_nth$arity$2(null,i__34917_35367);
if(cljs.core.truth_(child_35368)){
node.appendChild(child_35368);


var G__35369 = seq__34913_35364;
var G__35370 = chunk__34915_35365;
var G__35371 = count__34916_35366;
var G__35372 = (i__34917_35367 + (1));
seq__34913_35364 = G__35369;
chunk__34915_35365 = G__35370;
count__34916_35366 = G__35371;
i__34917_35367 = G__35372;
continue;
} else {
var G__35373 = seq__34913_35364;
var G__35374 = chunk__34915_35365;
var G__35375 = count__34916_35366;
var G__35376 = (i__34917_35367 + (1));
seq__34913_35364 = G__35373;
chunk__34915_35365 = G__35374;
count__34916_35366 = G__35375;
i__34917_35367 = G__35376;
continue;
}
} else {
var temp__5804__auto___35377 = cljs.core.seq(seq__34913_35364);
if(temp__5804__auto___35377){
var seq__34913_35378__$1 = temp__5804__auto___35377;
if(cljs.core.chunked_seq_QMARK_(seq__34913_35378__$1)){
var c__5568__auto___35379 = cljs.core.chunk_first(seq__34913_35378__$1);
var G__35380 = cljs.core.chunk_rest(seq__34913_35378__$1);
var G__35381 = c__5568__auto___35379;
var G__35382 = cljs.core.count(c__5568__auto___35379);
var G__35383 = (0);
seq__34913_35364 = G__35380;
chunk__34915_35365 = G__35381;
count__34916_35366 = G__35382;
i__34917_35367 = G__35383;
continue;
} else {
var child_35384 = cljs.core.first(seq__34913_35378__$1);
if(cljs.core.truth_(child_35384)){
node.appendChild(child_35384);


var G__35385 = cljs.core.next(seq__34913_35378__$1);
var G__35386 = null;
var G__35387 = (0);
var G__35388 = (0);
seq__34913_35364 = G__35385;
chunk__34915_35365 = G__35386;
count__34916_35366 = G__35387;
i__34917_35367 = G__35388;
continue;
} else {
var G__35389 = cljs.core.next(seq__34913_35378__$1);
var G__35390 = null;
var G__35391 = (0);
var G__35392 = (0);
seq__34913_35364 = G__35389;
chunk__34915_35365 = G__35390;
count__34916_35366 = G__35391;
i__34917_35367 = G__35392;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35363);
}
}


var G__35393 = seq__34867_35357;
var G__35394 = chunk__34869_35358;
var G__35395 = count__34870_35359;
var G__35396 = (i__34871_35360 + (1));
seq__34867_35357 = G__35393;
chunk__34869_35358 = G__35394;
count__34870_35359 = G__35395;
i__34871_35360 = G__35396;
continue;
} else {
var G__35399 = seq__34867_35357;
var G__35400 = chunk__34869_35358;
var G__35401 = count__34870_35359;
var G__35402 = (i__34871_35360 + (1));
seq__34867_35357 = G__35399;
chunk__34869_35358 = G__35400;
count__34870_35359 = G__35401;
i__34871_35360 = G__35402;
continue;
}
} else {
var temp__5804__auto___35403 = cljs.core.seq(seq__34867_35357);
if(temp__5804__auto___35403){
var seq__34867_35404__$1 = temp__5804__auto___35403;
if(cljs.core.chunked_seq_QMARK_(seq__34867_35404__$1)){
var c__5568__auto___35405 = cljs.core.chunk_first(seq__34867_35404__$1);
var G__35406 = cljs.core.chunk_rest(seq__34867_35404__$1);
var G__35407 = c__5568__auto___35405;
var G__35408 = cljs.core.count(c__5568__auto___35405);
var G__35409 = (0);
seq__34867_35357 = G__35406;
chunk__34869_35358 = G__35407;
count__34870_35359 = G__35408;
i__34871_35360 = G__35409;
continue;
} else {
var child_struct_35410 = cljs.core.first(seq__34867_35404__$1);
if((!((child_struct_35410 == null)))){
if(typeof child_struct_35410 === 'string'){
var text_35411 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35411),child_struct_35410].join(''));
} else {
var children_35412 = shadow.dom.svg_node(child_struct_35410);
if(cljs.core.seq_QMARK_(children_35412)){
var seq__34923_35414 = cljs.core.seq(children_35412);
var chunk__34925_35415 = null;
var count__34926_35416 = (0);
var i__34927_35417 = (0);
while(true){
if((i__34927_35417 < count__34926_35416)){
var child_35418 = chunk__34925_35415.cljs$core$IIndexed$_nth$arity$2(null,i__34927_35417);
if(cljs.core.truth_(child_35418)){
node.appendChild(child_35418);


var G__35420 = seq__34923_35414;
var G__35421 = chunk__34925_35415;
var G__35422 = count__34926_35416;
var G__35423 = (i__34927_35417 + (1));
seq__34923_35414 = G__35420;
chunk__34925_35415 = G__35421;
count__34926_35416 = G__35422;
i__34927_35417 = G__35423;
continue;
} else {
var G__35424 = seq__34923_35414;
var G__35425 = chunk__34925_35415;
var G__35426 = count__34926_35416;
var G__35427 = (i__34927_35417 + (1));
seq__34923_35414 = G__35424;
chunk__34925_35415 = G__35425;
count__34926_35416 = G__35426;
i__34927_35417 = G__35427;
continue;
}
} else {
var temp__5804__auto___35428__$1 = cljs.core.seq(seq__34923_35414);
if(temp__5804__auto___35428__$1){
var seq__34923_35429__$1 = temp__5804__auto___35428__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34923_35429__$1)){
var c__5568__auto___35430 = cljs.core.chunk_first(seq__34923_35429__$1);
var G__35431 = cljs.core.chunk_rest(seq__34923_35429__$1);
var G__35432 = c__5568__auto___35430;
var G__35433 = cljs.core.count(c__5568__auto___35430);
var G__35434 = (0);
seq__34923_35414 = G__35431;
chunk__34925_35415 = G__35432;
count__34926_35416 = G__35433;
i__34927_35417 = G__35434;
continue;
} else {
var child_35435 = cljs.core.first(seq__34923_35429__$1);
if(cljs.core.truth_(child_35435)){
node.appendChild(child_35435);


var G__35436 = cljs.core.next(seq__34923_35429__$1);
var G__35437 = null;
var G__35438 = (0);
var G__35439 = (0);
seq__34923_35414 = G__35436;
chunk__34925_35415 = G__35437;
count__34926_35416 = G__35438;
i__34927_35417 = G__35439;
continue;
} else {
var G__35440 = cljs.core.next(seq__34923_35429__$1);
var G__35441 = null;
var G__35442 = (0);
var G__35443 = (0);
seq__34923_35414 = G__35440;
chunk__34925_35415 = G__35441;
count__34926_35416 = G__35442;
i__34927_35417 = G__35443;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35412);
}
}


var G__35445 = cljs.core.next(seq__34867_35404__$1);
var G__35446 = null;
var G__35447 = (0);
var G__35448 = (0);
seq__34867_35357 = G__35445;
chunk__34869_35358 = G__35446;
count__34870_35359 = G__35447;
i__34871_35360 = G__35448;
continue;
} else {
var G__35450 = cljs.core.next(seq__34867_35404__$1);
var G__35451 = null;
var G__35452 = (0);
var G__35453 = (0);
seq__34867_35357 = G__35450;
chunk__34869_35358 = G__35451;
count__34870_35359 = G__35452;
i__34871_35360 = G__35453;
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
var len__5769__auto___35459 = arguments.length;
var i__5770__auto___35460 = (0);
while(true){
if((i__5770__auto___35460 < len__5769__auto___35459)){
args__5775__auto__.push((arguments[i__5770__auto___35460]));

var G__35461 = (i__5770__auto___35460 + (1));
i__5770__auto___35460 = G__35461;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34939){
var G__34940 = cljs.core.first(seq34939);
var seq34939__$1 = cljs.core.next(seq34939);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34940,seq34939__$1);
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
var G__34958 = arguments.length;
switch (G__34958) {
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
var c__29736__auto___35479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_34963){
var state_val_34964 = (state_34963[(1)]);
if((state_val_34964 === (1))){
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34963__$1,(2),once_or_cleanup);
} else {
if((state_val_34964 === (2))){
var inst_34960 = (state_34963[(2)]);
var inst_34961 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34963__$1 = (function (){var statearr_34970 = state_34963;
(statearr_34970[(7)] = inst_34960);

return statearr_34970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34963__$1,inst_34961);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29095__auto__ = null;
var shadow$dom$state_machine__29095__auto____0 = (function (){
var statearr_34978 = [null,null,null,null,null,null,null,null];
(statearr_34978[(0)] = shadow$dom$state_machine__29095__auto__);

(statearr_34978[(1)] = (1));

return statearr_34978;
});
var shadow$dom$state_machine__29095__auto____1 = (function (state_34963){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_34963);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e34979){var ex__29098__auto__ = e34979;
var statearr_34980_35480 = state_34963;
(statearr_34980_35480[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_34963[(4)]))){
var statearr_34981_35481 = state_34963;
(statearr_34981_35481[(1)] = cljs.core.first((state_34963[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35488 = state_34963;
state_34963 = G__35488;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
shadow$dom$state_machine__29095__auto__ = function(state_34963){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29095__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29095__auto____1.call(this,state_34963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29095__auto____0;
shadow$dom$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29095__auto____1;
return shadow$dom$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_34982 = f__29737__auto__();
(statearr_34982[(6)] = c__29736__auto___35479);

return statearr_34982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
