goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35282 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_35282(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35283 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_35283(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33836 = coll;
var G__33837 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33836,G__33837) : shadow.dom.lazy_native_coll_seq.call(null,G__33836,G__33837));
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
var G__33922 = arguments.length;
switch (G__33922) {
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
var G__33946 = arguments.length;
switch (G__33946) {
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
var G__33959 = arguments.length;
switch (G__33959) {
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
var G__33975 = arguments.length;
switch (G__33975) {
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
var G__33998 = arguments.length;
switch (G__33998) {
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
var G__34035 = arguments.length;
switch (G__34035) {
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
}catch (e34059){if((e34059 instanceof Object)){
var e = e34059;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34059;

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
var seq__34074 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34075 = null;
var count__34076 = (0);
var i__34077 = (0);
while(true){
if((i__34077 < count__34076)){
var el = chunk__34075.cljs$core$IIndexed$_nth$arity$2(null,i__34077);
var handler_35302__$1 = ((function (seq__34074,chunk__34075,count__34076,i__34077,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34074,chunk__34075,count__34076,i__34077,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35302__$1);


var G__35303 = seq__34074;
var G__35304 = chunk__34075;
var G__35305 = count__34076;
var G__35306 = (i__34077 + (1));
seq__34074 = G__35303;
chunk__34075 = G__35304;
count__34076 = G__35305;
i__34077 = G__35306;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34074);
if(temp__5804__auto__){
var seq__34074__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34074__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34074__$1);
var G__35307 = cljs.core.chunk_rest(seq__34074__$1);
var G__35308 = c__5568__auto__;
var G__35309 = cljs.core.count(c__5568__auto__);
var G__35310 = (0);
seq__34074 = G__35307;
chunk__34075 = G__35308;
count__34076 = G__35309;
i__34077 = G__35310;
continue;
} else {
var el = cljs.core.first(seq__34074__$1);
var handler_35311__$1 = ((function (seq__34074,chunk__34075,count__34076,i__34077,el,seq__34074__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34074,chunk__34075,count__34076,i__34077,el,seq__34074__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35311__$1);


var G__35312 = cljs.core.next(seq__34074__$1);
var G__35313 = null;
var G__35314 = (0);
var G__35315 = (0);
seq__34074 = G__35312;
chunk__34075 = G__35313;
count__34076 = G__35314;
i__34077 = G__35315;
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
var G__34093 = arguments.length;
switch (G__34093) {
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
var seq__34114 = cljs.core.seq(events);
var chunk__34115 = null;
var count__34116 = (0);
var i__34117 = (0);
while(true){
if((i__34117 < count__34116)){
var vec__34138 = chunk__34115.cljs$core$IIndexed$_nth$arity$2(null,i__34117);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35318 = seq__34114;
var G__35319 = chunk__34115;
var G__35320 = count__34116;
var G__35321 = (i__34117 + (1));
seq__34114 = G__35318;
chunk__34115 = G__35319;
count__34116 = G__35320;
i__34117 = G__35321;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34114);
if(temp__5804__auto__){
var seq__34114__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34114__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34114__$1);
var G__35322 = cljs.core.chunk_rest(seq__34114__$1);
var G__35323 = c__5568__auto__;
var G__35324 = cljs.core.count(c__5568__auto__);
var G__35325 = (0);
seq__34114 = G__35322;
chunk__34115 = G__35323;
count__34116 = G__35324;
i__34117 = G__35325;
continue;
} else {
var vec__34145 = cljs.core.first(seq__34114__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34145,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34145,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35326 = cljs.core.next(seq__34114__$1);
var G__35327 = null;
var G__35328 = (0);
var G__35329 = (0);
seq__34114 = G__35326;
chunk__34115 = G__35327;
count__34116 = G__35328;
i__34117 = G__35329;
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
var seq__34158 = cljs.core.seq(styles);
var chunk__34159 = null;
var count__34160 = (0);
var i__34161 = (0);
while(true){
if((i__34161 < count__34160)){
var vec__34178 = chunk__34159.cljs$core$IIndexed$_nth$arity$2(null,i__34161);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34178,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35330 = seq__34158;
var G__35331 = chunk__34159;
var G__35332 = count__34160;
var G__35333 = (i__34161 + (1));
seq__34158 = G__35330;
chunk__34159 = G__35331;
count__34160 = G__35332;
i__34161 = G__35333;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34158);
if(temp__5804__auto__){
var seq__34158__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34158__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34158__$1);
var G__35337 = cljs.core.chunk_rest(seq__34158__$1);
var G__35338 = c__5568__auto__;
var G__35339 = cljs.core.count(c__5568__auto__);
var G__35340 = (0);
seq__34158 = G__35337;
chunk__34159 = G__35338;
count__34160 = G__35339;
i__34161 = G__35340;
continue;
} else {
var vec__34183 = cljs.core.first(seq__34158__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34183,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34183,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35344 = cljs.core.next(seq__34158__$1);
var G__35345 = null;
var G__35346 = (0);
var G__35347 = (0);
seq__34158 = G__35344;
chunk__34159 = G__35345;
count__34160 = G__35346;
i__34161 = G__35347;
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
var G__34196_35348 = key;
var G__34196_35349__$1 = (((G__34196_35348 instanceof cljs.core.Keyword))?G__34196_35348.fqn:null);
switch (G__34196_35349__$1) {
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
var ks_35353 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_35353,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_35353,"aria-");
}
})())){
el.setAttribute(ks_35353,value);
} else {
(el[ks_35353] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34243){
var map__34245 = p__34243;
var map__34245__$1 = cljs.core.__destructure_map(map__34245);
var props = map__34245__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34245__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34246 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34246,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34246,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34246,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34250 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34250,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34250;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34253 = arguments.length;
switch (G__34253) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34268){
var vec__34271 = p__34268;
var seq__34272 = cljs.core.seq(vec__34271);
var first__34273 = cljs.core.first(seq__34272);
var seq__34272__$1 = cljs.core.next(seq__34272);
var nn = first__34273;
var first__34273__$1 = cljs.core.first(seq__34272__$1);
var seq__34272__$2 = cljs.core.next(seq__34272__$1);
var np = first__34273__$1;
var nc = seq__34272__$2;
var node = vec__34271;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34276 = nn;
var G__34277 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34276,G__34277) : create_fn.call(null,G__34276,G__34277));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34278 = nn;
var G__34279 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34278,G__34279) : create_fn.call(null,G__34278,G__34279));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34282 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34282,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34282,(1),null);
var seq__34285_35363 = cljs.core.seq(node_children);
var chunk__34286_35364 = null;
var count__34287_35365 = (0);
var i__34288_35366 = (0);
while(true){
if((i__34288_35366 < count__34287_35365)){
var child_struct_35368 = chunk__34286_35364.cljs$core$IIndexed$_nth$arity$2(null,i__34288_35366);
var children_35369 = shadow.dom.dom_node(child_struct_35368);
if(cljs.core.seq_QMARK_(children_35369)){
var seq__34433_35371 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35369));
var chunk__34435_35372 = null;
var count__34436_35373 = (0);
var i__34437_35374 = (0);
while(true){
if((i__34437_35374 < count__34436_35373)){
var child_35376 = chunk__34435_35372.cljs$core$IIndexed$_nth$arity$2(null,i__34437_35374);
if(cljs.core.truth_(child_35376)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35376);


var G__35377 = seq__34433_35371;
var G__35378 = chunk__34435_35372;
var G__35379 = count__34436_35373;
var G__35380 = (i__34437_35374 + (1));
seq__34433_35371 = G__35377;
chunk__34435_35372 = G__35378;
count__34436_35373 = G__35379;
i__34437_35374 = G__35380;
continue;
} else {
var G__35381 = seq__34433_35371;
var G__35382 = chunk__34435_35372;
var G__35383 = count__34436_35373;
var G__35384 = (i__34437_35374 + (1));
seq__34433_35371 = G__35381;
chunk__34435_35372 = G__35382;
count__34436_35373 = G__35383;
i__34437_35374 = G__35384;
continue;
}
} else {
var temp__5804__auto___35385 = cljs.core.seq(seq__34433_35371);
if(temp__5804__auto___35385){
var seq__34433_35386__$1 = temp__5804__auto___35385;
if(cljs.core.chunked_seq_QMARK_(seq__34433_35386__$1)){
var c__5568__auto___35387 = cljs.core.chunk_first(seq__34433_35386__$1);
var G__35388 = cljs.core.chunk_rest(seq__34433_35386__$1);
var G__35389 = c__5568__auto___35387;
var G__35390 = cljs.core.count(c__5568__auto___35387);
var G__35391 = (0);
seq__34433_35371 = G__35388;
chunk__34435_35372 = G__35389;
count__34436_35373 = G__35390;
i__34437_35374 = G__35391;
continue;
} else {
var child_35392 = cljs.core.first(seq__34433_35386__$1);
if(cljs.core.truth_(child_35392)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35392);


var G__35393 = cljs.core.next(seq__34433_35386__$1);
var G__35394 = null;
var G__35395 = (0);
var G__35396 = (0);
seq__34433_35371 = G__35393;
chunk__34435_35372 = G__35394;
count__34436_35373 = G__35395;
i__34437_35374 = G__35396;
continue;
} else {
var G__35397 = cljs.core.next(seq__34433_35386__$1);
var G__35398 = null;
var G__35399 = (0);
var G__35400 = (0);
seq__34433_35371 = G__35397;
chunk__34435_35372 = G__35398;
count__34436_35373 = G__35399;
i__34437_35374 = G__35400;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35369);
}


var G__35401 = seq__34285_35363;
var G__35402 = chunk__34286_35364;
var G__35403 = count__34287_35365;
var G__35404 = (i__34288_35366 + (1));
seq__34285_35363 = G__35401;
chunk__34286_35364 = G__35402;
count__34287_35365 = G__35403;
i__34288_35366 = G__35404;
continue;
} else {
var temp__5804__auto___35406 = cljs.core.seq(seq__34285_35363);
if(temp__5804__auto___35406){
var seq__34285_35407__$1 = temp__5804__auto___35406;
if(cljs.core.chunked_seq_QMARK_(seq__34285_35407__$1)){
var c__5568__auto___35409 = cljs.core.chunk_first(seq__34285_35407__$1);
var G__35410 = cljs.core.chunk_rest(seq__34285_35407__$1);
var G__35411 = c__5568__auto___35409;
var G__35412 = cljs.core.count(c__5568__auto___35409);
var G__35413 = (0);
seq__34285_35363 = G__35410;
chunk__34286_35364 = G__35411;
count__34287_35365 = G__35412;
i__34288_35366 = G__35413;
continue;
} else {
var child_struct_35414 = cljs.core.first(seq__34285_35407__$1);
var children_35415 = shadow.dom.dom_node(child_struct_35414);
if(cljs.core.seq_QMARK_(children_35415)){
var seq__34480_35416 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35415));
var chunk__34482_35417 = null;
var count__34483_35418 = (0);
var i__34484_35419 = (0);
while(true){
if((i__34484_35419 < count__34483_35418)){
var child_35421 = chunk__34482_35417.cljs$core$IIndexed$_nth$arity$2(null,i__34484_35419);
if(cljs.core.truth_(child_35421)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35421);


var G__35423 = seq__34480_35416;
var G__35424 = chunk__34482_35417;
var G__35425 = count__34483_35418;
var G__35426 = (i__34484_35419 + (1));
seq__34480_35416 = G__35423;
chunk__34482_35417 = G__35424;
count__34483_35418 = G__35425;
i__34484_35419 = G__35426;
continue;
} else {
var G__35429 = seq__34480_35416;
var G__35430 = chunk__34482_35417;
var G__35431 = count__34483_35418;
var G__35432 = (i__34484_35419 + (1));
seq__34480_35416 = G__35429;
chunk__34482_35417 = G__35430;
count__34483_35418 = G__35431;
i__34484_35419 = G__35432;
continue;
}
} else {
var temp__5804__auto___35434__$1 = cljs.core.seq(seq__34480_35416);
if(temp__5804__auto___35434__$1){
var seq__34480_35437__$1 = temp__5804__auto___35434__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34480_35437__$1)){
var c__5568__auto___35438 = cljs.core.chunk_first(seq__34480_35437__$1);
var G__35439 = cljs.core.chunk_rest(seq__34480_35437__$1);
var G__35440 = c__5568__auto___35438;
var G__35441 = cljs.core.count(c__5568__auto___35438);
var G__35442 = (0);
seq__34480_35416 = G__35439;
chunk__34482_35417 = G__35440;
count__34483_35418 = G__35441;
i__34484_35419 = G__35442;
continue;
} else {
var child_35447 = cljs.core.first(seq__34480_35437__$1);
if(cljs.core.truth_(child_35447)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35447);


var G__35452 = cljs.core.next(seq__34480_35437__$1);
var G__35453 = null;
var G__35454 = (0);
var G__35455 = (0);
seq__34480_35416 = G__35452;
chunk__34482_35417 = G__35453;
count__34483_35418 = G__35454;
i__34484_35419 = G__35455;
continue;
} else {
var G__35456 = cljs.core.next(seq__34480_35437__$1);
var G__35457 = null;
var G__35458 = (0);
var G__35459 = (0);
seq__34480_35416 = G__35456;
chunk__34482_35417 = G__35457;
count__34483_35418 = G__35458;
i__34484_35419 = G__35459;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35415);
}


var G__35462 = cljs.core.next(seq__34285_35407__$1);
var G__35463 = null;
var G__35464 = (0);
var G__35465 = (0);
seq__34285_35363 = G__35462;
chunk__34286_35364 = G__35463;
count__34287_35365 = G__35464;
i__34288_35366 = G__35465;
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
var seq__34547 = cljs.core.seq(node);
var chunk__34548 = null;
var count__34549 = (0);
var i__34550 = (0);
while(true){
if((i__34550 < count__34549)){
var n = chunk__34548.cljs$core$IIndexed$_nth$arity$2(null,i__34550);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35475 = seq__34547;
var G__35476 = chunk__34548;
var G__35477 = count__34549;
var G__35478 = (i__34550 + (1));
seq__34547 = G__35475;
chunk__34548 = G__35476;
count__34549 = G__35477;
i__34550 = G__35478;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34547);
if(temp__5804__auto__){
var seq__34547__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34547__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34547__$1);
var G__35479 = cljs.core.chunk_rest(seq__34547__$1);
var G__35480 = c__5568__auto__;
var G__35481 = cljs.core.count(c__5568__auto__);
var G__35482 = (0);
seq__34547 = G__35479;
chunk__34548 = G__35480;
count__34549 = G__35481;
i__34550 = G__35482;
continue;
} else {
var n = cljs.core.first(seq__34547__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35484 = cljs.core.next(seq__34547__$1);
var G__35485 = null;
var G__35486 = (0);
var G__35487 = (0);
seq__34547 = G__35484;
chunk__34548 = G__35485;
count__34549 = G__35486;
i__34550 = G__35487;
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
var G__34591 = arguments.length;
switch (G__34591) {
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
var G__34601 = arguments.length;
switch (G__34601) {
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
var G__34633 = arguments.length;
switch (G__34633) {
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
var len__5769__auto___35496 = arguments.length;
var i__5770__auto___35497 = (0);
while(true){
if((i__5770__auto___35497 < len__5769__auto___35496)){
args__5775__auto__.push((arguments[i__5770__auto___35497]));

var G__35498 = (i__5770__auto___35497 + (1));
i__5770__auto___35497 = G__35498;
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
var seq__34672_35506 = cljs.core.seq(nodes);
var chunk__34673_35507 = null;
var count__34674_35508 = (0);
var i__34675_35509 = (0);
while(true){
if((i__34675_35509 < count__34674_35508)){
var node_35515 = chunk__34673_35507.cljs$core$IIndexed$_nth$arity$2(null,i__34675_35509);
fragment.appendChild(shadow.dom._to_dom(node_35515));


var G__35516 = seq__34672_35506;
var G__35517 = chunk__34673_35507;
var G__35518 = count__34674_35508;
var G__35519 = (i__34675_35509 + (1));
seq__34672_35506 = G__35516;
chunk__34673_35507 = G__35517;
count__34674_35508 = G__35518;
i__34675_35509 = G__35519;
continue;
} else {
var temp__5804__auto___35520 = cljs.core.seq(seq__34672_35506);
if(temp__5804__auto___35520){
var seq__34672_35521__$1 = temp__5804__auto___35520;
if(cljs.core.chunked_seq_QMARK_(seq__34672_35521__$1)){
var c__5568__auto___35522 = cljs.core.chunk_first(seq__34672_35521__$1);
var G__35523 = cljs.core.chunk_rest(seq__34672_35521__$1);
var G__35524 = c__5568__auto___35522;
var G__35525 = cljs.core.count(c__5568__auto___35522);
var G__35526 = (0);
seq__34672_35506 = G__35523;
chunk__34673_35507 = G__35524;
count__34674_35508 = G__35525;
i__34675_35509 = G__35526;
continue;
} else {
var node_35527 = cljs.core.first(seq__34672_35521__$1);
fragment.appendChild(shadow.dom._to_dom(node_35527));


var G__35528 = cljs.core.next(seq__34672_35521__$1);
var G__35529 = null;
var G__35530 = (0);
var G__35531 = (0);
seq__34672_35506 = G__35528;
chunk__34673_35507 = G__35529;
count__34674_35508 = G__35530;
i__34675_35509 = G__35531;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34659){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34659));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34726_35535 = cljs.core.seq(scripts);
var chunk__34727_35536 = null;
var count__34728_35537 = (0);
var i__34729_35538 = (0);
while(true){
if((i__34729_35538 < count__34728_35537)){
var vec__34744_35539 = chunk__34727_35536.cljs$core$IIndexed$_nth$arity$2(null,i__34729_35538);
var script_tag_35540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34744_35539,(0),null);
var script_body_35541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34744_35539,(1),null);
eval(script_body_35541);


var G__35543 = seq__34726_35535;
var G__35544 = chunk__34727_35536;
var G__35545 = count__34728_35537;
var G__35546 = (i__34729_35538 + (1));
seq__34726_35535 = G__35543;
chunk__34727_35536 = G__35544;
count__34728_35537 = G__35545;
i__34729_35538 = G__35546;
continue;
} else {
var temp__5804__auto___35548 = cljs.core.seq(seq__34726_35535);
if(temp__5804__auto___35548){
var seq__34726_35549__$1 = temp__5804__auto___35548;
if(cljs.core.chunked_seq_QMARK_(seq__34726_35549__$1)){
var c__5568__auto___35550 = cljs.core.chunk_first(seq__34726_35549__$1);
var G__35551 = cljs.core.chunk_rest(seq__34726_35549__$1);
var G__35552 = c__5568__auto___35550;
var G__35553 = cljs.core.count(c__5568__auto___35550);
var G__35554 = (0);
seq__34726_35535 = G__35551;
chunk__34727_35536 = G__35552;
count__34728_35537 = G__35553;
i__34729_35538 = G__35554;
continue;
} else {
var vec__34765_35555 = cljs.core.first(seq__34726_35549__$1);
var script_tag_35556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765_35555,(0),null);
var script_body_35557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765_35555,(1),null);
eval(script_body_35557);


var G__35558 = cljs.core.next(seq__34726_35549__$1);
var G__35559 = null;
var G__35560 = (0);
var G__35561 = (0);
seq__34726_35535 = G__35558;
chunk__34727_35536 = G__35559;
count__34728_35537 = G__35560;
i__34729_35538 = G__35561;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34775){
var vec__34777 = p__34775;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777,(1),null);
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
var G__34826 = arguments.length;
switch (G__34826) {
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
var seq__34880 = cljs.core.seq(style_keys);
var chunk__34881 = null;
var count__34882 = (0);
var i__34883 = (0);
while(true){
if((i__34883 < count__34882)){
var it = chunk__34881.cljs$core$IIndexed$_nth$arity$2(null,i__34883);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35590 = seq__34880;
var G__35591 = chunk__34881;
var G__35592 = count__34882;
var G__35593 = (i__34883 + (1));
seq__34880 = G__35590;
chunk__34881 = G__35591;
count__34882 = G__35592;
i__34883 = G__35593;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34880);
if(temp__5804__auto__){
var seq__34880__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34880__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34880__$1);
var G__35596 = cljs.core.chunk_rest(seq__34880__$1);
var G__35597 = c__5568__auto__;
var G__35598 = cljs.core.count(c__5568__auto__);
var G__35599 = (0);
seq__34880 = G__35596;
chunk__34881 = G__35597;
count__34882 = G__35598;
i__34883 = G__35599;
continue;
} else {
var it = cljs.core.first(seq__34880__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35600 = cljs.core.next(seq__34880__$1);
var G__35601 = null;
var G__35602 = (0);
var G__35603 = (0);
seq__34880 = G__35600;
chunk__34881 = G__35601;
count__34882 = G__35602;
i__34883 = G__35603;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34897,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34908 = k34897;
var G__34908__$1 = (((G__34908 instanceof cljs.core.Keyword))?G__34908.fqn:null);
switch (G__34908__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34897,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34914){
var vec__34915 = p__34914;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34915,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34915,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34896){
var self__ = this;
var G__34896__$1 = this;
return (new cljs.core.RecordIter((0),G__34896__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34898,other34899){
var self__ = this;
var this34898__$1 = this;
return (((!((other34899 == null)))) && ((((this34898__$1.constructor === other34899.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34898__$1.x,other34899.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34898__$1.y,other34899.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34898__$1.__extmap,other34899.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34897){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34967 = k34897;
var G__34967__$1 = (((G__34967 instanceof cljs.core.Keyword))?G__34967.fqn:null);
switch (G__34967__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34897);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34896){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34974 = cljs.core.keyword_identical_QMARK_;
var expr__34975 = k__5352__auto__;
if(cljs.core.truth_((pred__34974.cljs$core$IFn$_invoke$arity$2 ? pred__34974.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34975) : pred__34974.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34975)))){
return (new shadow.dom.Coordinate(G__34896,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34974.cljs$core$IFn$_invoke$arity$2 ? pred__34974.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34975) : pred__34974.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34975)))){
return (new shadow.dom.Coordinate(self__.x,G__34896,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34896),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34896){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34896,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34900){
var extmap__5385__auto__ = (function (){var G__34991 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34900,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34900)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34991);
} else {
return G__34991;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34900),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34900),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35002,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35022 = k35002;
var G__35022__$1 = (((G__35022 instanceof cljs.core.Keyword))?G__35022.fqn:null);
switch (G__35022__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35002,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35027){
var vec__35029 = p__35027;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35029,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35029,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35001){
var self__ = this;
var G__35001__$1 = this;
return (new cljs.core.RecordIter((0),G__35001__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35003,other35004){
var self__ = this;
var this35003__$1 = this;
return (((!((other35004 == null)))) && ((((this35003__$1.constructor === other35004.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35003__$1.w,other35004.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35003__$1.h,other35004.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35003__$1.__extmap,other35004.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35002){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35072 = k35002;
var G__35072__$1 = (((G__35072 instanceof cljs.core.Keyword))?G__35072.fqn:null);
switch (G__35072__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35002);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35001){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35080 = cljs.core.keyword_identical_QMARK_;
var expr__35081 = k__5352__auto__;
if(cljs.core.truth_((pred__35080.cljs$core$IFn$_invoke$arity$2 ? pred__35080.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35081) : pred__35080.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35081)))){
return (new shadow.dom.Size(G__35001,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35080.cljs$core$IFn$_invoke$arity$2 ? pred__35080.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35081) : pred__35080.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35081)))){
return (new shadow.dom.Size(self__.w,G__35001,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35001),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35001){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35001,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35008){
var extmap__5385__auto__ = (function (){var G__35096 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35008,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35008)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35096);
} else {
return G__35096;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35008),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35008),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__35631 = (i + (1));
var G__35632 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35631;
ret = G__35632;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35104){
var vec__35105 = p__35104;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35109 = arguments.length;
switch (G__35109) {
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
var G__35642 = ps;
var G__35643 = (i + (1));
el__$1 = G__35642;
i = G__35643;
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
var vec__35134 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35138_35648 = cljs.core.seq(props);
var chunk__35139_35649 = null;
var count__35140_35650 = (0);
var i__35141_35651 = (0);
while(true){
if((i__35141_35651 < count__35140_35650)){
var vec__35154_35652 = chunk__35139_35649.cljs$core$IIndexed$_nth$arity$2(null,i__35141_35651);
var k_35653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154_35652,(0),null);
var v_35654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154_35652,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_35653);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35653),v_35654);


var G__35656 = seq__35138_35648;
var G__35657 = chunk__35139_35649;
var G__35658 = count__35140_35650;
var G__35659 = (i__35141_35651 + (1));
seq__35138_35648 = G__35656;
chunk__35139_35649 = G__35657;
count__35140_35650 = G__35658;
i__35141_35651 = G__35659;
continue;
} else {
var temp__5804__auto___35661 = cljs.core.seq(seq__35138_35648);
if(temp__5804__auto___35661){
var seq__35138_35662__$1 = temp__5804__auto___35661;
if(cljs.core.chunked_seq_QMARK_(seq__35138_35662__$1)){
var c__5568__auto___35663 = cljs.core.chunk_first(seq__35138_35662__$1);
var G__35664 = cljs.core.chunk_rest(seq__35138_35662__$1);
var G__35665 = c__5568__auto___35663;
var G__35666 = cljs.core.count(c__5568__auto___35663);
var G__35667 = (0);
seq__35138_35648 = G__35664;
chunk__35139_35649 = G__35665;
count__35140_35650 = G__35666;
i__35141_35651 = G__35667;
continue;
} else {
var vec__35162_35668 = cljs.core.first(seq__35138_35662__$1);
var k_35669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35162_35668,(0),null);
var v_35670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35162_35668,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_35669);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35669),v_35670);


var G__35673 = cljs.core.next(seq__35138_35662__$1);
var G__35674 = null;
var G__35675 = (0);
var G__35676 = (0);
seq__35138_35648 = G__35673;
chunk__35139_35649 = G__35674;
count__35140_35650 = G__35675;
i__35141_35651 = G__35676;
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
var vec__35173 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173,(1),null);
var seq__35176_35678 = cljs.core.seq(node_children);
var chunk__35178_35679 = null;
var count__35179_35680 = (0);
var i__35180_35681 = (0);
while(true){
if((i__35180_35681 < count__35179_35680)){
var child_struct_35682 = chunk__35178_35679.cljs$core$IIndexed$_nth$arity$2(null,i__35180_35681);
if((!((child_struct_35682 == null)))){
if(typeof child_struct_35682 === 'string'){
var text_35683 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35683),child_struct_35682].join(''));
} else {
var children_35684 = shadow.dom.svg_node(child_struct_35682);
if(cljs.core.seq_QMARK_(children_35684)){
var seq__35208_35685 = cljs.core.seq(children_35684);
var chunk__35210_35686 = null;
var count__35211_35687 = (0);
var i__35212_35688 = (0);
while(true){
if((i__35212_35688 < count__35211_35687)){
var child_35689 = chunk__35210_35686.cljs$core$IIndexed$_nth$arity$2(null,i__35212_35688);
if(cljs.core.truth_(child_35689)){
node.appendChild(child_35689);


var G__35690 = seq__35208_35685;
var G__35691 = chunk__35210_35686;
var G__35692 = count__35211_35687;
var G__35693 = (i__35212_35688 + (1));
seq__35208_35685 = G__35690;
chunk__35210_35686 = G__35691;
count__35211_35687 = G__35692;
i__35212_35688 = G__35693;
continue;
} else {
var G__35694 = seq__35208_35685;
var G__35695 = chunk__35210_35686;
var G__35696 = count__35211_35687;
var G__35697 = (i__35212_35688 + (1));
seq__35208_35685 = G__35694;
chunk__35210_35686 = G__35695;
count__35211_35687 = G__35696;
i__35212_35688 = G__35697;
continue;
}
} else {
var temp__5804__auto___35699 = cljs.core.seq(seq__35208_35685);
if(temp__5804__auto___35699){
var seq__35208_35700__$1 = temp__5804__auto___35699;
if(cljs.core.chunked_seq_QMARK_(seq__35208_35700__$1)){
var c__5568__auto___35701 = cljs.core.chunk_first(seq__35208_35700__$1);
var G__35702 = cljs.core.chunk_rest(seq__35208_35700__$1);
var G__35703 = c__5568__auto___35701;
var G__35704 = cljs.core.count(c__5568__auto___35701);
var G__35705 = (0);
seq__35208_35685 = G__35702;
chunk__35210_35686 = G__35703;
count__35211_35687 = G__35704;
i__35212_35688 = G__35705;
continue;
} else {
var child_35706 = cljs.core.first(seq__35208_35700__$1);
if(cljs.core.truth_(child_35706)){
node.appendChild(child_35706);


var G__35707 = cljs.core.next(seq__35208_35700__$1);
var G__35708 = null;
var G__35709 = (0);
var G__35710 = (0);
seq__35208_35685 = G__35707;
chunk__35210_35686 = G__35708;
count__35211_35687 = G__35709;
i__35212_35688 = G__35710;
continue;
} else {
var G__35711 = cljs.core.next(seq__35208_35700__$1);
var G__35712 = null;
var G__35713 = (0);
var G__35714 = (0);
seq__35208_35685 = G__35711;
chunk__35210_35686 = G__35712;
count__35211_35687 = G__35713;
i__35212_35688 = G__35714;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35684);
}
}


var G__35715 = seq__35176_35678;
var G__35716 = chunk__35178_35679;
var G__35717 = count__35179_35680;
var G__35718 = (i__35180_35681 + (1));
seq__35176_35678 = G__35715;
chunk__35178_35679 = G__35716;
count__35179_35680 = G__35717;
i__35180_35681 = G__35718;
continue;
} else {
var G__35719 = seq__35176_35678;
var G__35720 = chunk__35178_35679;
var G__35721 = count__35179_35680;
var G__35722 = (i__35180_35681 + (1));
seq__35176_35678 = G__35719;
chunk__35178_35679 = G__35720;
count__35179_35680 = G__35721;
i__35180_35681 = G__35722;
continue;
}
} else {
var temp__5804__auto___35723 = cljs.core.seq(seq__35176_35678);
if(temp__5804__auto___35723){
var seq__35176_35724__$1 = temp__5804__auto___35723;
if(cljs.core.chunked_seq_QMARK_(seq__35176_35724__$1)){
var c__5568__auto___35725 = cljs.core.chunk_first(seq__35176_35724__$1);
var G__35727 = cljs.core.chunk_rest(seq__35176_35724__$1);
var G__35728 = c__5568__auto___35725;
var G__35729 = cljs.core.count(c__5568__auto___35725);
var G__35730 = (0);
seq__35176_35678 = G__35727;
chunk__35178_35679 = G__35728;
count__35179_35680 = G__35729;
i__35180_35681 = G__35730;
continue;
} else {
var child_struct_35731 = cljs.core.first(seq__35176_35724__$1);
if((!((child_struct_35731 == null)))){
if(typeof child_struct_35731 === 'string'){
var text_35732 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35732),child_struct_35731].join(''));
} else {
var children_35733 = shadow.dom.svg_node(child_struct_35731);
if(cljs.core.seq_QMARK_(children_35733)){
var seq__35223_35734 = cljs.core.seq(children_35733);
var chunk__35225_35735 = null;
var count__35226_35736 = (0);
var i__35227_35737 = (0);
while(true){
if((i__35227_35737 < count__35226_35736)){
var child_35739 = chunk__35225_35735.cljs$core$IIndexed$_nth$arity$2(null,i__35227_35737);
if(cljs.core.truth_(child_35739)){
node.appendChild(child_35739);


var G__35741 = seq__35223_35734;
var G__35742 = chunk__35225_35735;
var G__35743 = count__35226_35736;
var G__35744 = (i__35227_35737 + (1));
seq__35223_35734 = G__35741;
chunk__35225_35735 = G__35742;
count__35226_35736 = G__35743;
i__35227_35737 = G__35744;
continue;
} else {
var G__35745 = seq__35223_35734;
var G__35746 = chunk__35225_35735;
var G__35747 = count__35226_35736;
var G__35748 = (i__35227_35737 + (1));
seq__35223_35734 = G__35745;
chunk__35225_35735 = G__35746;
count__35226_35736 = G__35747;
i__35227_35737 = G__35748;
continue;
}
} else {
var temp__5804__auto___35749__$1 = cljs.core.seq(seq__35223_35734);
if(temp__5804__auto___35749__$1){
var seq__35223_35750__$1 = temp__5804__auto___35749__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35223_35750__$1)){
var c__5568__auto___35751 = cljs.core.chunk_first(seq__35223_35750__$1);
var G__35752 = cljs.core.chunk_rest(seq__35223_35750__$1);
var G__35753 = c__5568__auto___35751;
var G__35754 = cljs.core.count(c__5568__auto___35751);
var G__35755 = (0);
seq__35223_35734 = G__35752;
chunk__35225_35735 = G__35753;
count__35226_35736 = G__35754;
i__35227_35737 = G__35755;
continue;
} else {
var child_35756 = cljs.core.first(seq__35223_35750__$1);
if(cljs.core.truth_(child_35756)){
node.appendChild(child_35756);


var G__35757 = cljs.core.next(seq__35223_35750__$1);
var G__35758 = null;
var G__35759 = (0);
var G__35760 = (0);
seq__35223_35734 = G__35757;
chunk__35225_35735 = G__35758;
count__35226_35736 = G__35759;
i__35227_35737 = G__35760;
continue;
} else {
var G__35761 = cljs.core.next(seq__35223_35750__$1);
var G__35762 = null;
var G__35763 = (0);
var G__35764 = (0);
seq__35223_35734 = G__35761;
chunk__35225_35735 = G__35762;
count__35226_35736 = G__35763;
i__35227_35737 = G__35764;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35733);
}
}


var G__35766 = cljs.core.next(seq__35176_35724__$1);
var G__35767 = null;
var G__35768 = (0);
var G__35769 = (0);
seq__35176_35678 = G__35766;
chunk__35178_35679 = G__35767;
count__35179_35680 = G__35768;
i__35180_35681 = G__35769;
continue;
} else {
var G__35770 = cljs.core.next(seq__35176_35724__$1);
var G__35771 = null;
var G__35772 = (0);
var G__35773 = (0);
seq__35176_35678 = G__35770;
chunk__35178_35679 = G__35771;
count__35179_35680 = G__35772;
i__35180_35681 = G__35773;
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
var len__5769__auto___35776 = arguments.length;
var i__5770__auto___35777 = (0);
while(true){
if((i__5770__auto___35777 < len__5769__auto___35776)){
args__5775__auto__.push((arguments[i__5770__auto___35777]));

var G__35778 = (i__5770__auto___35777 + (1));
i__5770__auto___35777 = G__35778;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35235){
var G__35236 = cljs.core.first(seq35235);
var seq35235__$1 = cljs.core.next(seq35235);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35236,seq35235__$1);
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
var G__35246 = arguments.length;
switch (G__35246) {
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
var c__30242__auto___35781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_35261){
var state_val_35262 = (state_35261[(1)]);
if((state_val_35262 === (1))){
var state_35261__$1 = state_35261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35261__$1,(2),once_or_cleanup);
} else {
if((state_val_35262 === (2))){
var inst_35258 = (state_35261[(2)]);
var inst_35259 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35261__$1 = (function (){var statearr_35266 = state_35261;
(statearr_35266[(7)] = inst_35258);

return statearr_35266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35261__$1,inst_35259);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29200__auto__ = null;
var shadow$dom$state_machine__29200__auto____0 = (function (){
var statearr_35269 = [null,null,null,null,null,null,null,null];
(statearr_35269[(0)] = shadow$dom$state_machine__29200__auto__);

(statearr_35269[(1)] = (1));

return statearr_35269;
});
var shadow$dom$state_machine__29200__auto____1 = (function (state_35261){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_35261);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e35270){var ex__29203__auto__ = e35270;
var statearr_35271_35782 = state_35261;
(statearr_35271_35782[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_35261[(4)]))){
var statearr_35272_35783 = state_35261;
(statearr_35272_35783[(1)] = cljs.core.first((state_35261[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35784 = state_35261;
state_35261 = G__35784;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
shadow$dom$state_machine__29200__auto__ = function(state_35261){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29200__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29200__auto____1.call(this,state_35261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29200__auto____0;
shadow$dom$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29200__auto____1;
return shadow$dom$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_35275 = f__30243__auto__();
(statearr_35275[(6)] = c__30242__auto___35781);

return statearr_35275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
