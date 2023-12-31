goog.provide('openllm.api.indexed_db.core');
openllm.api.indexed_db.core.READ_WRITE = "readwrite";
openllm.api.indexed_db.core.READ_ONLY = "readonly";
/**
 * This map will hold the database objects for each database name.
 * The database name is the key and the database object is the value.
 * This map is used to prevent the creation of multiple database objects
 * for the same database name. This is important, because the database
 * object is the only way to interact with the database.
 * 
 * The lookup into this map is automatically done. While using an atom
 * adds state to the namespace, the performance and convinience gains
 * are worth it.
 */
openllm.api.indexed_db.core.name__GT_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * This function is called when an error occurs during an IndexedDB
 * request.
 * It will log the error to the browser's console.
 */
openllm.api.indexed_db.core.idb_error_callback = (function openllm$api$indexed_db$core$idb_error_callback(e){
return openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error during IndexedDB request",e], 0));
});
/**
 * Create a transaction for the object store identified by the
 * `obj-store-fqn` (see namespace docstring for more information). This
 * function is meant to be used by the object store ('os-*') functions.
 * This function will create a transaction and return the object store,
 * which can be used to interact with the database right away.
 * 
 * We consider this function semi-pure since there are no *notable*
 * direct side effects.
 */
openllm.api.indexed_db.core.create_transaction = (function openllm$api$indexed_db$core$create_transaction(obj_store_fqn,mode){
var map__27772 = obj_store_fqn;
var map__27772__$1 = cljs.core.__destructure_map(map__27772);
var db_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27772__$1,new cljs.core.Keyword(null,"db-name","db-name",1157928745));
var os_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27772__$1,new cljs.core.Keyword(null,"os-name","os-name",-2109973734));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(openllm.api.indexed_db.core.name__GT_db),db_name);
var transaction = db.transaction([os_name],mode);
(transaction.onerror = openllm.api.indexed_db.core.idb_error_callback);

return transaction.objectStore(os_name);
});
/**
 * This function is called as a callback when the database is upgraded.
 * It will create the object stores for the application and and save the
 * backing database in the app-db for later use.
 * 
 * There are two possible reasons that the database got upgraded:
 * 1. The database did not exist before and was created.
 * 2. The database existed before, but the version (and presumably the
 *    schema) was lower/older than the current version.
 * 
 * Returns `nil`.
 */
openllm.api.indexed_db.core.on_upgrade_needed_BANG_ = (function openllm$api$indexed_db$core$on_upgrade_needed_BANG_(table_info,user_callback,e){
var db = e.target.result;
var old_version = db.oldVersion;
var new_version = db.version;
if(((((0) > old_version)) && ((user_callback == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The database version was upgraded, but no 'on-upgrade-db-version' callback was provided to 'initialize!'.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-version","old-version",1152554917),old_version,new cljs.core.Keyword(null,"new-version","new-version",-172869195),new_version], null));
} else {
}

if((!((user_callback == null)))){
openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Received upgrade needed event, current version is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_version),", old version is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_version),". Calling user callback."].join('')], 0));

(user_callback.cljs$core$IFn$_invoke$arity$2 ? user_callback.cljs$core$IFn$_invoke$arity$2(old_version,new_version) : user_callback.call(null,old_version,new_version));
} else {
openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Database and object store created. Current database version is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(db.version),"."].join('')], 0));

var G__27777_27839 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db-name","db-name",1157928745),db,new cljs.core.Keyword(null,"os-name","os-name",-2109973734),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(table_info)], null);
var G__27778_27840 = table_info;
(openllm.api.indexed_db.core.create_object_store_BANG_.cljs$core$IFn$_invoke$arity$2 ? openllm.api.indexed_db.core.create_object_store_BANG_.cljs$core$IFn$_invoke$arity$2(G__27777_27839,G__27778_27840) : openllm.api.indexed_db.core.create_object_store_BANG_.call(null,G__27777_27839,G__27778_27840));
}

return null;
});
/**
 * This function is called as a callback when the database is initialized.
 * It will save the database object in our `name->db` atom for later use.
 * 
 * Returns `nil`.
 */
openllm.api.indexed_db.core.on_initialize_success_BANG_ = (function openllm$api$indexed_db$core$on_initialize_success_BANG_(db_name,user_callback,e){
var db_27843 = e.target.result;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(openllm.api.indexed_db.core.name__GT_db,cljs.core.assoc,db_name,db_27843);

(user_callback.cljs$core$IFn$_invoke$arity$0 ? user_callback.cljs$core$IFn$_invoke$arity$0() : user_callback.call(null));

openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Database initialized and callback function triggered.",e], 0));

return null;
});
/**
 * Create an object store identified by the `obj-store-fqn` (see namespace
 * docstring for more information) inside a database. The `:os-name` key of
 * the `obj-store-fqn` parameter can be chosen freely, but it must be unique
 * within the database (see namespace docstring for more info) and it should
 * match the `:name` key of the `table-info` parameter. The `table-info`
 * parameter must be a map with the following structure:
 *  ```clojure
 *  {:name "my-obj-store-name"
 *   :index [{:name "my-field"
 *            :unique false}]}
 *  ```
 * The `:index` key is a vector of maps, each of which will describe one
 * index (aka field) of the object store. The `:name` key of the index map
 * must be unique within the object store.
 * 
 * Will return the object store object with an open transaction attached,
 * so that it can be used right away.
 */
openllm.api.indexed_db.core.create_object_store_BANG_ = (function openllm$api$indexed_db$core$create_object_store_BANG_(obj_store_fqn,table_info){
var map__27779 = obj_store_fqn;
var map__27779__$1 = cljs.core.__destructure_map(map__27779);
var db_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27779__$1,new cljs.core.Keyword(null,"db-name","db-name",1157928745));
var os_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27779__$1,new cljs.core.Keyword(null,"os-name","os-name",-2109973734));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(openllm.api.indexed_db.core.name__GT_db),db_name);
var object_store = db.createObjectStore(os_name,({"keyPath": "id", "autoIncrement": true}));
var iter__5523__auto___27848 = (function openllm$api$indexed_db$core$create_object_store_BANG__$_iter__27780(s__27781){
return (new cljs.core.LazySeq(null,(function (){
var s__27781__$1 = s__27781;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27781__$1);
if(temp__5804__auto__){
var s__27781__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27781__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27781__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27783 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27782 = (0);
while(true){
if((i__27782 < size__5522__auto__)){
var table_idx = cljs.core._nth(c__5521__auto__,i__27782);
cljs.core.chunk_append(b__27783,object_store.createIndex(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(table_idx),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(table_idx),({"unique": new cljs.core.Keyword(null,"unique","unique",329397282).cljs$core$IFn$_invoke$arity$1(table_idx)})));

var G__27849 = (i__27782 + (1));
i__27782 = G__27849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27783),openllm$api$indexed_db$core$create_object_store_BANG__$_iter__27780(cljs.core.chunk_rest(s__27781__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27783),null);
}
} else {
var table_idx = cljs.core.first(s__27781__$2);
return cljs.core.cons(object_store.createIndex(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(table_idx),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(table_idx),({"unique": new cljs.core.Keyword(null,"unique","unique",329397282).cljs$core$IFn$_invoke$arity$1(table_idx)})),openllm$api$indexed_db$core$create_object_store_BANG__$_iter__27780(cljs.core.rest(s__27781__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__5523__auto___27848(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(table_info));

return (object_store.transaction.oncomplete = (function (){
return db.transaction(os_name,"readwrite").objectStore(os_name);
}));
});
/**
 * Add a single object to the given object store identified by the
 * `obj-store-fqn` (see namespace docstring for more information). This
 * function will create a transaction and add the object to the object store.
 * 
 * Returns `nil`.
 */
openllm.api.indexed_db.core.os_add_BANG_ = (function openllm$api$indexed_db$core$os_add_BANG_(obj_store_fqn,entry){
var object_store_27850 = openllm.api.indexed_db.core.create_transaction(obj_store_fqn,"readwrite");
object_store_27850.put(cljs.core.clj__GT_js(entry));

return null;
});
/**
 * Add an vector of objects to the given object store identified by the
 * `obj-store-fqn` (see namespace docstring for more information). This
 * function will create a transaction and add the objects to the object store.
 * Note that we create a new transaction for each object.
 * TODO: Figure out if there is a way with clojure looping constructs to
 * create a single transaction and add all objects to the object store
 * at once.
 * 
 * An exception will be thrown, if the second argument is not a vector!
 * There are no guarantees that the objects will be added in the excpected
 * order if the algorithm is not adjusted, so for not no other collections
 * are allowed.
 * 
 * Returns `nil`.
 */
openllm.api.indexed_db.core.os_add_all_BANG_ = (function openllm$api$indexed_db$core$os_add_all_BANG_(obj_store_fqn,entries){
if(cljs.core.vector_QMARK_(entries)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("os-add-all! expects a vector of objects as its third argument.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),entries], null));
}

var entries__$1 = entries;
while(true){
if(cljs.core.empty_QMARK_(entries__$1)){
return null;
} else {
openllm.api.indexed_db.core.os_add_BANG_(obj_store_fqn,cljs.core.first(entries__$1));

var G__27851 = cljs.core.rest(entries__$1);
entries__$1 = G__27851;
continue;
}
break;
}
});
/**
 * Use this function to retrieve a single object from the object store. In
 * order to retrieve all objects from the object store, use the function
 * `os-get-all` instead.
 * You will need to pass `callback-fn`, which must be a function that takes
 * a single argument. This argument will be the object that was retrieved
 * from the object store.
 * 
 * Returns `nil`.
 */
openllm.api.indexed_db.core.os_index__GT_object = (function openllm$api$indexed_db$core$os_index__GT_object(obj_store_fqn,idx,callback_fn){
var object_store_27852 = openllm.api.indexed_db.core.create_transaction(obj_store_fqn,"readonly");
var request_27853 = object_store_27852.get(idx);
(request_27853.onerror = openllm.api.indexed_db.core.idb_error_callback);

(request_27853.onsuccess = (function (e){
var G__27784 = e.target.result;
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__27784) : callback_fn.call(null,G__27784));
}));

return null;
});
/**
 * Get all objects from the object store identified by the `obj-store-fqn`
 * (see namespace docstring for more information). This function will create
 * a transaction and get all objects from the object store.
 * `callback-fn` should be a function that takes a vector of objects
 * as its only argument.
 * 
 * It is up for discussion, whether this function should be considered
 * to have side effects or not. I think it should be given some thoughts,
 * because it opens a transaction and thus locks the data-base, and it
 * will call the `callback-fn` with the objects from the object store.
 * 
 * Returns `nil`.
 */
openllm.api.indexed_db.core.os_get_all = (function openllm$api$indexed_db$core$os_get_all(obj_store_fqn,callback_fn){
var values_27854 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var request_27855 = openllm.api.indexed_db.core.create_transaction(obj_store_fqn,"readonly").openCursor();
(request_27855.onerror = openllm.api.indexed_db.core.idb_error_callback);

(request_27855.onsuccess = (function (e){
var temp__5802__auto__ = e.target.result;
if(cljs.core.truth_(temp__5802__auto__)){
var cursor = temp__5802__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(values_27854,cljs.core.conj,cursor.value);

return cursor.continue();
} else {
var G__27785 = cljs.core.deref(values_27854);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__27785) : callback_fn.call(null,G__27785));
}
}));

return null;
});
/**
 * Wipe the object store identified by the `obj-store-fqn`, see the
 * docstring of this namespace for more information.
 * This function should be used with great care, as the wipe will not be
 * reversible. It will create a transaction and clear the object store.
 * 
 * Returns `nil`.
 */
openllm.api.indexed_db.core.wipe_object_store_BANG_ = (function openllm$api$indexed_db$core$wipe_object_store_BANG_(obj_store_fqn){
var object_store_27856 = openllm.api.indexed_db.core.create_transaction(obj_store_fqn,"readwrite");
var transaction_27857 = object_store_27856.transaction;
(transaction_27857.oncomplete = (function (){
return openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Object store wiped."], 0));
}));

(transaction_27857.onerror = openllm.api.indexed_db.core.idb_error_callback);

object_store_27856.clear();

return null;
});
/**
 * Initialize the indexed-db. This function should be called once
 * when the application starts. The `db-init-callback` function will
 * be called when the database is initialized.
 * You should retain the db-name and os-name, as they are required to
 * interact with the database and object store. For more information see:
 * `obj-store-fqn` docstring of this namespace.
 * 
 * The `table-info` parameter must be a map with the following structure:
 *  ```clojure
 *  {:name "my-obj-store-name"
 *   :index [{:name "my-field"
 *            :unique false}]}
 *  ```
 * The `:index` key is a vector of maps, each of which will describe one
 * index (the equivalend of a field in a SQL table) of the object store.
 * 
 * Optionally, you may pass a `success-callback` function, which will be
 * called when the database is initialized. The function will be called
 * with no arguments.
 * 
 * Also optionally, you can pass an `on-upgrade` callback function, which
 * will be called when the database is upgraded to a new version. The
 * function will be called with the old version number as its first
 * and the new version as it's second argument. If you do pass a function,
 * it will be called *instead* of the default callback function. This
 * means, that you will have to create the object store yourself!
 * An example of how to do this:
 * ```clojure
 * (create-object-store! {:db-name db-name :os-name store-name}
 *                       your-table-definition)
 * ```
 * 
 * Returns `nil`.
 */
openllm.api.indexed_db.core.initialize_BANG_ = (function openllm$api$indexed_db$core$initialize_BANG_(var_args){
var G__27787 = arguments.length;
switch (G__27787) {
case 2:
return openllm.api.indexed_db.core.initialize_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return openllm.api.indexed_db.core.initialize_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return openllm.api.indexed_db.core.initialize_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(openllm.api.indexed_db.core.initialize_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (db_info,table_info){
return openllm.api.indexed_db.core.initialize_BANG_.cljs$core$IFn$_invoke$arity$4(db_info,table_info,null,null);
}));

(openllm.api.indexed_db.core.initialize_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (db_info,table_info,success_callback){
return openllm.api.indexed_db.core.initialize_BANG_.cljs$core$IFn$_invoke$arity$4(db_info,table_info,success_callback,null);
}));

(openllm.api.indexed_db.core.initialize_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (db_info,table_info,success_callback,on_upgrade_db_version){
var map__27790_27859 = db_info;
var map__27790_27860__$1 = cljs.core.__destructure_map(map__27790_27859);
var db_name_27861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27790_27860__$1,new cljs.core.Keyword(null,"db-name","db-name",1157928745));
var db_version_27862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27790_27860__$1,new cljs.core.Keyword(null,"db-version","db-version",2088342971));
var upgrade_callback_BANG__27863 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(openllm.api.indexed_db.core.on_upgrade_needed_BANG_,table_info,on_upgrade_db_version);
var request_27864 = window.indexedDB.open(db_name_27861,db_version_27862);
(request_27864.onerror = openllm.api.indexed_db.core.idb_error_callback);

(request_27864.onupgradeneeded = upgrade_callback_BANG__27863);

(request_27864.onsuccess = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(openllm.api.indexed_db.core.on_initialize_success_BANG_,db_name_27861,success_callback));

return null;
}));

(openllm.api.indexed_db.core.initialize_BANG_.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=openllm.api.indexed_db.core.js.map
