!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(O,t),s?p(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=g();if(w(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?y(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&o?p(e):(o=i=void 0,u)}function T(){var e=g(),n=w(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},T.flush=function(){return void 0===f?u:h(g())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector('[name="email"]'),w=document.querySelector('[name="message"]'),O=document.querySelector("form"),h=document.querySelector('[type="submit"]'),T={},E=e(t)((function(){T.email=j.value,T.message=w.value,x(T)}),500);O.addEventListener("input",E);var x=function(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))};window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e)try{var t=JSON.parse(e);null==t.email?j.value="":j.value=t.email,null==t.message?w.value="":w.value=t.message}catch(e){console.error("Error parsing stored value:",e)}})),h.addEventListener("click",(function(e){e.preventDefault(),console.log("Email: ".concat(j.value)),console.log("Message: ".concat(w.value)),localStorage.removeItem("feedback-form-state"),document.querySelector("form").reset()}))}();
//# sourceMappingURL=03-feedback.18595e61.js.map