
shadow.cljs.devtools.client.env.module_loaded('main');

try { openllm.app.init(); } catch (e) { console.error("An error occurred when calling (openllm.app/init)"); throw(e); }