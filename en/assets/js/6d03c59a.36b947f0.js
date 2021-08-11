"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[298],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3954:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],p={title:"Old application transformation",slug:"/issues/oldApp",order:3},s=void 0,l={unversionedId:"issues/oldApp",id:"issues/oldApp",isDocsHomePage:!1,title:"Old application transformation",description:"How to access sub-applications of an already existing SPA application",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/issues/oldApp.md",sourceDirName:"issues",slug:"/issues/oldApp",permalink:"/en/issues/oldApp",editUrl:"https://github.com/bytedance/garfish/docs/issues/oldApp.md",version:"current",lastUpdatedBy:"zhoushaw",lastUpdatedAt:1628694227,formattedLastUpdatedAt:"8/11/2021",frontMatter:{title:"Old application transformation",slug:"/issues/oldApp",order:3},sidebar:"issues",previous:{title:"Multiple Garfish Instances",permalink:"/en/issues/multipleApp"},next:{title:"routing problem",permalink:"/en/issues/router"}},c=[{value:"How to access sub-applications of an already existing <code>SPA</code> application",id:"how-to-access-sub-applications-of-an-already-existing-spa-application",children:[{value:"Scenario Description",id:"scenario-description",children:[]},{value:"How to transform step by step (using <code>react</code> as an example)",id:"how-to-transform-step-by-step-using-react-as-an-example",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-access-sub-applications-of-an-already-existing-spa-application"},"How to access sub-applications of an already existing ",(0,a.kt)("inlineCode",{parentName:"h2"},"SPA")," application"),(0,a.kt)("h3",{id:"scenario-description"},"Scenario Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Many ",(0,a.kt)("inlineCode",{parentName:"li"},"SPA")," applications that need to be transformed into micro front ends are old applications that already exist."),(0,a.kt)("li",{parentName:"ul"},"It may be necessary to gradually disassemble some of the routes within the application and turn them into sub-applications."),(0,a.kt)("li",{parentName:"ul"},"How the existing routes of the main application coexist with the micro front-end route driver is commonly encountered during the migration process.")),(0,a.kt)("h3",{id:"how-to-transform-step-by-step-using-react-as-an-example"},"How to transform step by step (using ",(0,a.kt)("inlineCode",{parentName:"h3"},"react")," as an example)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"add ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," as a mount point for ",(0,a.kt)("inlineCode",{parentName:"li"},"micro-app"),", set aside for subapplication mount, and the content of ",(0,a.kt)("inlineCode",{parentName:"li"},"Router")," section is for other routes of the main application."),(0,a.kt)("li",{parentName:"ol"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"Router")," content to be empty when the main application matches the subapplication route prefix."),(0,a.kt)("li",{parentName:"ol"},"When configuring the subapplication list, the prefix when the ",(0,a.kt)("inlineCode",{parentName:"li"},"Router")," content is empty is used as the subapplication activation condition prefix.")),(0,a.kt)("p",null,"The root component of the main application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<BrowserRouter getUserConfirmation={getConfirmation}>\n  <RootContext.Provider value={provider}>\n    <Header />\n    <div className="container">\n      <Router routes={routes} />\n      <div id="micro-app" />\n    </div>\n  </RootContext.Provider>\n</BrowserRouter>\n')),(0,a.kt)("p",null,"routes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default [\n  {\n    path: '/platform/search',\n    component: Search,\n  },\n  {\n    // Applications starting with /platform/micro-app are not displayed in Router\n    path: '/platform/micro-app',\n    component: function () {\n      return null;\n    },\n  },\n  {\n    component: Home,\n  },\n];\n")),(0,a.kt)("p",null,"Main entry point."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.run({\n  domGetter: '#micro-app',\n  basename: '/platform/micro-app',\n  apps: [\n    ...\n  ],\n});\n")))}d.isMDXComponent=!0}}]);