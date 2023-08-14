!function(t){function e(e){for(var n,r,s=e[0],i=e[1],c=0,l=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);for(a&&a(e);l.length;)l.shift()()}var n={},o={0:0};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=s);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(t){return r.p+""+t+".app.js"}(t);var a=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,n[1](a)}o[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="assets/scripts/",r.oe=function(t){throw console.error(t),t};var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var a=i;r(r.s=0)}([function(t,e,n){"use strict";n.r(e),console.log("DOM Helper executing!");class o{static clearEventListeners(t){const e=t.cloneNode(!0);return t.replaceWith(e),e}static moveElement(t,e){const n=document.getElementById(t);document.querySelector(e).append(n),n.scrollIntoView({behavior:"smooth"})}}console.log("Project Item created!");class r{constructor(t,e,n){this.id=t,this.hasActiveTooltip=!1,this.updateProjectListsHandler=e,this.connectMoreInfoButton(),this.connectSwitchButton(n),this.connectDrag()}showMoreInfoHandler(){if(this.hasActiveTooltip)return;const t=document.getElementById(this.id).dataset.extraInfo;n.e(1).then(n.bind(null,1)).then(e=>{new e.Tooltip(()=>{this.hasActiveTooltip=!1},t,this.id).attach(),this.hasActiveTooltip=!0})}connectDrag(){const t=document.getElementById(this.id);t.addEventListener("dragstart",t=>{t.dataTransfer.setData("text/plain",this.id),t.dataTransfer.effectAllowed="move"}),t.addEventListener("dragend",t=>{console.log(t)})}connectMoreInfoButton(){document.getElementById(this.id).querySelector("button:first-of-type").addEventListener("click",this.showMoreInfoHandler.bind(this))}connectSwitchButton(t){let e=document.getElementById(this.id).querySelector("button:last-of-type");(e=o.clearEventListeners(e)).textContent="active"===t?"Finish":"Activate",e.addEventListener("click",this.updateProjectListsHandler.bind(null,this.id))}update(t,e){this.updateProjectListsHandler=t,this.connectSwitchButton(e)}}class s{constructor(t){this.type=t,this.projects=[];const e=document.querySelectorAll(`#${t}-projects li`);for(const t of e)this.projects.push(new r(t.id,this.switchProject.bind(this),this.type));console.log(this.projects),this.connectDroppable()}connectDroppable(){const t=document.querySelector(`#${this.type}-projects ul`);t.addEventListener("dragenter",e=>{"text/plain"===e.dataTransfer.types[0]&&(t.parentElement.classList.add("droppable"),e.preventDefault())}),t.addEventListener("dragover",t=>{"text/plain"===t.dataTransfer.types[0]&&t.preventDefault()}),t.addEventListener("dragleave",e=>{e.relatedTarget.closest(`#${this.type}-projects ul`)!==t&&t.parentElement.classList.remove("droppable")}),t.addEventListener("drop",e=>{const n=e.dataTransfer.getData("text/plain");this.projects.find(t=>t.id===n)||(document.getElementById(n).querySelector("button:last-of-type").click(),t.parentElement.classList.remove("droppable"))})}setSwitchHandlerFunction(t){this.switchHandler=t}addProject(t){this.projects.push(t),function(t,e){const n=document.getElementById(t);document.querySelector(e).append(n),n.scrollIntoView({behavior:"smooth"})}(t.id,`#${this.type}-projects ul`),t.update(this.switchProject.bind(this),this.type)}switchProject(t){this.switchHandler(this.projects.find(e=>e.id===t)),this.projects=this.projects.filter(e=>e.id!==t)}}globalThis.DEFAULT_VALUE="MAX";(class{static init(){const t=new s("active"),e=new s("finished");t.setSwitchHandlerFunction(e.addProject.bind(e)),e.setSwitchHandlerFunction(t.addProject.bind(t))}static startAnalytics(){const t=document.createElement("script");t.src="assets/scripts/Utility/Analytics.js",t.defer=!0,document.head.append(t)}}).init()}]);
//# sourceMappingURL=app.js.map