"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[66],{4137:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,r(r({ref:t},l),{},{components:a})):n.createElement(m,r({ref:t},l))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7906:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=a(7462),i=a(3366),o=(a(7294),a(4137)),r=["components"],p={title:"routing problem",slug:"/issues/router",order:4},s=void 0,c={unversionedId:"issues/router",id:"issues/router",isDocsHomePage:!1,title:"routing problem",description:"The main application routing is currently only supported in history mode, the basename of the child application routing is based on the main application, please refer to child application basename configuration for details.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/issues/router.md",sourceDirName:"issues",slug:"/issues/router",permalink:"/en/issues/router",editUrl:"https://github.com/bytedance/garfish/docs/issues/router.md",version:"current",lastUpdatedBy:"zhoushaw",lastUpdatedAt:1628694227,formattedLastUpdatedAt:"8/11/2021",frontMatter:{title:"routing problem",slug:"/issues/router",order:4},sidebar:"issues",previous:{title:"Old application transformation",permalink:"/en/issues/oldApp"},next:{title:"style question",permalink:"/en/issues/style"}},l=[{value:"Why does the main application only support history mode?",id:"why-does-the-main-application-only-support-history-mode",children:[]},{value:"Why can&#39;t the root route be used as an activation condition for a child application?",id:"why-cant-the-root-route-be-used-as-an-activation-condition-for-a-child-application",children:[]},{value:"What is the basename that the child application render function gets and what does it do?",id:"what-is-the-basename-that-the-child-application-render-function-gets-and-what-does-it-do",children:[]}],h={toc:l};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The main application routing is currently only supported in ",(0,o.kt)("inlineCode",{parentName:"p"},"history")," mode, the ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," of the child application routing is based on the main application, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/api/#basename"},"child application basename configuration")," for details."),(0,o.kt)("h2",{id:"why-does-the-main-application-only-support-history-mode"},"Why does the main application only support history mode?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Garfish currently uses namespaces to avoid routing conflicts between applications.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The reason why the main application only supports ",(0,o.kt)("inlineCode",{parentName:"p"},"history")," mode is that ",(0,o.kt)("inlineCode",{parentName:"p"},"hash")," routes cannot be used as the base routes for child applications, which may lead to route conflicts between the main application and child applications."))),(0,o.kt)("h2",{id:"why-cant-the-root-route-be-used-as-an-activation-condition-for-a-child-application"},"Why can't the root route be used as an activation condition for a child application?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some businesses want to use the root route as the activation condition of the sub-application, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"garfish.bytedance.net")," triggers the rendering of the sub-application. Since the activation condition of the current sub-application ",(0,o.kt)("strong",{parentName:"p"},"string is the shortest match principle"),", if the sub-application ",(0,o.kt)("inlineCode",{parentName:"p"},"activeWhen: '/'")," indicates that ",(0,o.kt)("inlineCode",{parentName:"p"},"'/xxx'")," will be activated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The reason for the shortest match principle is that we need to determine if a child route of a child application is active, and if it is likely to be a child route of a child application, we may activate that application.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The reason for this restriction is that if the activation condition of a child application is ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"/xx")," of that application may be a child route of another child application, which may cause conflicts with other applications and cause confusion."))),(0,o.kt)("h2",{id:"what-is-the-basename-that-the-child-application-render-function-gets-and-what-does-it-do"},"What is the basename that the child application render function gets and what does it do?"),(0,o.kt)("p",null,"Why is it recommended that the sub-application take the ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," passed through the ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," as the ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," of the sub-application, some business parties directly add ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," to the sub-application by agreement in the actual process to achieve the effect of isolation, but the use of this method may lead to the main application if the change ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," may cause the sub-application can not be isolated. basename` may cause the child application can not be changed together to take effect."),(0,o.kt)("p",null,"For example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"the main application currently visits ",(0,o.kt)("inlineCode",{parentName:"p"},"garfish.bytedance.net")," to access the site's home page, the current ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", the sub-application vue, the access path is ",(0,o.kt)("inlineCode",{parentName:"p"},"garfish.bytedance.net/vue"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"if the main application wants to change ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"/site"),", the access path of the main application becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"garfish.bytedance.net/site")," and the access path of the child vue becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"garfish.bytedance.net/site/vue"),". 3.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"So it is recommended that the sub-application use the ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," passed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," as the base route for its own application, to ensure that the relative path of the sub-application still matches the overall change after the main application changes its route"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In micro front-end scenario, each sub-application may have its own routing scenario. To ensure that the routes between sub-applications do not conflict, the Garfish framework uses the configured ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"sub-application's activeWhen")," matching path as the sub-application's base path."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"basename: /demo")," is configured on Garfish and the active path of the child application is: ",(0,o.kt)("inlineCode",{parentName:"p"},"/vue2"),", then the child application gets the active path as: ",(0,o.kt)("inlineCode",{parentName:"p"},"/demo/vue2"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the activation condition of the sub-application is a function, each time a route change occurs, the activation function of the sub-application will be verified by checking that the function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", which means that the current activation condition is met and will trigger the activation of the route.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Garfish will pass the current path into the activation function to get the longest activation path of the sub-application, and pass ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"longest activation path of the sub-application")," to the sub-application parameters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sub-applications that have their own routes must use basename as the base path for the sub-application in a micro front-end scenario, without which the sub-application's routes may conflict with the main application and other applications"),"\n:::"))))))}u.isMDXComponent=!0}}]);