!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e=e||self).firebase)}(this,function(A){"use strict";try{(function(){A=A&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A;var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function e(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function t(e,a,s,u){return new(s=s||Promise)(function(n,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function i(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,i)}o((u=u.apply(e,a||[])).next())})}function d(n,r){var i,o,a,e,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{i=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var i,h=(e(o,i=Error),o);function o(e,t){var n=i.call(this,t)||this;return n.code=e,n.name="FirebaseError",Object.setPrototypeOf(n,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,a.prototype.create),n}var a=(n.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r,i=t[0]||{},o=this.service+"/"+e,a=this.errors[e],s=a?(r=i,a.replace(v,function(e,t){var n=r[t];return null!=n?n.toString():"<"+t+"?>"})):"Error",u=this.serviceName+": "+s+" ("+o+").",c=new h(o,u),l=0,f=Object.keys(i);l<f.length;l++){var p=f[l];"_"!==p.slice(-1)&&(p in c&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),c[p]=i[p])}return c},n);function n(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var v=/\{\$([^}]+)}/g,s=(u.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},u.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},u.prototype.setServiceProps=function(e){return this.serviceProps=e,this},u);function u(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}var c,l={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},y=(e(f,c=Error),f);function f(e,t,n){var r=c.call(this,t)||this;return Object.setPrototypeOf(r,f.prototype),r.code=e,r.details=n,r}function g(e,t,n){var r=function(e){if(200<=e&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r,o=void 0;try{var a=t&&t.error;if(a){var s=a.status;if("string"==typeof s){if(!l[s])return new y("internal","internal");r=l[s],i=s}var u=a.message;"string"==typeof u&&(i=u),void 0!==(o=a.details)&&(o=n.decode(o))}}catch(e){}return"ok"===r?null:new y(r,i,o)}var p=(b.prototype.getAuthToken=function(){return t(this,void 0,void 0,function(){var t;return d(this,function(e){switch(e.label){case 0:if(!this.auth)return[2,void 0];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.auth.getToken()];case 2:return(t=e.sent())?[2,t.accessToken]:[2,void 0];case 3:return e.sent(),[2,void 0];case 4:return[2]}})})},b.prototype.getInstanceIdToken=function(){return t(this,void 0,void 0,function(){return d(this,function(e){if(!(this.messaging&&"Notification"in self&&"granted"===Notification.permission))return[2,void 0];try{return[2,this.messaging.getToken()]}catch(e){return[2,void 0]}return[2]})})},b.prototype.getContext=function(){return t(this,void 0,void 0,function(){var t,n;return d(this,function(e){switch(e.label){case 0:return[4,this.getAuthToken()];case 1:return t=e.sent(),[4,this.getInstanceIdToken()];case 2:return n=e.sent(),[2,{authToken:t,instanceIdToken:n}]}})})},b);function b(e,t){var n=this;this.auth=null,this.messaging=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(function(e){return n.auth=e},function(){}),this.messaging||t.get().then(function(e){return n.messaging=e},function(){})}function m(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}var w=(E.prototype.encode=function(e){var t=this;if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(Array.isArray(e))return e.map(function(e){return t.encode(e)});if("function"==typeof e||"object"==typeof e)return m(e,function(e){return t.encode(e)});throw new Error("Data cannot be encoded in JSON: "+e)},E.prototype.decode=function(e){var t=this;if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":var n=Number(e.value);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+e);return n;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(function(e){return t.decode(e)}):"function"==typeof e||"object"==typeof e?m(e,function(e){return t.decode(e)}):e},E);function E(){}var N=(Object.defineProperty(O.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),O.prototype._url=function(e){var t=this.app_.options.projectId,n=this.region_;return null===this.emulatorOrigin?"https://"+n+"-"+t+".cloudfunctions.net/"+e:this.emulatorOrigin+"/"+t+"/"+n+"/"+e},O.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},O.prototype.httpsCallable=function(t,n){var r=this;return function(e){return r.call(t,e,n||{})}},O.prototype.postJSON=function(r,i,o){return t(this,void 0,void 0,function(){var t,n;return d(this,function(e){switch(e.label){case 0:o.append("Content-Type","application/json"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(r,{method:"POST",body:JSON.stringify(i),headers:o})];case 2:return t=e.sent(),[3,4];case 3:return e.sent(),[2,{status:0,json:null}];case 4:n=null,e.label=5;case 5:return e.trys.push([5,7,,8]),[4,t.json()];case 6:return n=e.sent(),[3,8];case 7:return e.sent(),[3,8];case 8:return[2,{status:t.status,json:n}]}})})},O.prototype.call=function(l,f,p){return t(this,void 0,void 0,function(){var t,r,i,o,a,s,u,c;return d(this,function(e){switch(e.label){case 0:return t=this._url(l),f=this.serializer.encode(f),r={data:f},i=new Headers,[4,this.contextProvider.getContext()];case 1:return(o=e.sent()).authToken&&i.append("Authorization","Bearer "+o.authToken),o.instanceIdToken&&i.append("Firebase-Instance-ID-Token",o.instanceIdToken),a=p.timeout||7e4,[4,Promise.race([this.postJSON(t,r,i),(n=a,new Promise(function(e,t){setTimeout(function(){t(new y("deadline-exceeded","deadline-exceeded"))},n)})),this.cancelAllRequests])];case 2:if(!(s=e.sent()))throw new y("cancelled","Firebase Functions instance was deleted.");if(u=g(s.status,s.json,this.serializer))throw u;if(!s.json)throw new y("internal","Response is not valid JSON object.");if(void 0===(c=s.json.data)&&(c=s.json.result),void 0===c)throw new y("internal","Response is missing data field.");return[2,{data:this.serializer.decode(c)}]}var n})})},O);function O(e,t,n,r){var i=this;void 0===r&&(r="us-central1"),this.app_=e,this.region_=r,this.serializer=new w,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return i.deleteService()}},this.contextProvider=new p(t,n),this.cancelAllRequests=new Promise(function(e){i.deleteService=function(){return e()}})}function I(e,t){var n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("messaging");return new N(n,r,i,t)}var T;T={Functions:N},A.INTERNAL.registerComponent(new s("functions",I,"PUBLIC").setServiceProps(T).setMultipleInstances(!0)),A.registerVersion("@firebase/functions","0.4.41")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-functions.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-functions.js.map
