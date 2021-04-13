(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(g,c(c({ref:t},l),{},{components:n})):o.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(120)),i={id:"keeping-ccf-updated",title:"Keeping Cloud Carbon Footprint Updated"},c={unversionedId:"keeping-ccf-updated",id:"keeping-ccf-updated",isDocsHomePage:!1,title:"Keeping Cloud Carbon Footprint Updated",description:"Cloud Carbon Footprint is always improving, so it's a good idea to stay in sync with the latest releases. Cloud Carbon Footprint is more of a library than an application or service; similar to create-react-app, the @cloud-carbon-footprint/create-app tool gives you a starting point that's meant to be evolved.",source:"@site/docs/KeepingCCFUpdated.md",slug:"/keeping-ccf-updated",permalink:"/docs/keeping-ccf-updated",version:"current",sidebar:"tryNowSidebar",previous:{title:"Deploying",permalink:"/docs/deploying"}},p=[{value:"Updating Cloud Carbon Footprint versions",id:"updating-cloud-carbon-footprint-versions",children:[]},{value:"Following create-app template changes",id:"following-create-app-template-changes",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Cloud Carbon Footprint is always improving, so it's a good idea to stay in sync with the latest releases. Cloud Carbon Footprint is more of a library than an application or service; similar to create-react-app, the ",Object(a.b)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/create-app")," tool gives you a starting point that's meant to be evolved."),Object(a.b)("h3",{id:"updating-cloud-carbon-footprint-versions"},"Updating Cloud Carbon Footprint versions"),Object(a.b)("p",null,"Currently, when you create a Cloud Carbon Footprint app using the create-app package, there is only one package dependency which is ",Object(a.b)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/core"),"\nThe command to used to bump the core package dependency to the latest version is:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"yarn up @cloud-carbon-footprint/core\n")),Object(a.b)("p",null,"Please note that depending on the current version of the core package, the update command may only update it to the next highest minor version as referenced ",Object(a.b)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/dependency-versions/#toc-caret-ranges"},"here"),". Beware that once the core package is ",Object(a.b)("inlineCode",{parentName:"p"},">= v1.0.0"),", running the command will update to the latest core package with breaking changes."),Object(a.b)("h3",{id:"following-create-app-template-changes"},"Following create-app template changes"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/create-app")," command creates the initial structure of your Cloud Carbon Footprint installation from a template. The source of this template in the Cloud Carbon Footprint repository is updated periodically, but your local app and backend packages are established at create-app time and won't automatically get these template updates."),Object(a.b)("p",null,"For this reason, any changes made to the template are documented along with upgrade instructions in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/create-app/CHANGELOG.md"},"changelog")," of the ",Object(a.b)("inlineCode",{parentName:"p"},"@cloud-carbon-footprint/create-app")," package. We recommend peeking at this changelog for any applicable updates when upgrading packages."))}s.isMDXComponent=!0}}]);