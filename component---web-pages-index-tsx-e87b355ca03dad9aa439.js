(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{132:function(e,t,r){"use strict";var n;function a(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    text-align: center;\n    font-size: 19px;\n"]);return a=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.Logo=t.ColoredText=void 0,r(143);var o=((n=r(90))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"Logo__ColoredText"})(["font-weight:bold;color:#1890ff;display:inline-block;text-decoration:none;background-image:linear-gradient(to right,#1890ff 25%,#c4ce35 50%,#ac24e2 75%,#1890ff 100%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;background-size:300% auto;&.static{background-position:-215% center;}&.animated{@keyframes text-gradient{to{background-position:-300% center;}}animation:text-gradient 16s ease-in-out infinite;}"]);t.ColoredText=o;var i=o.extend(a());t.Logo=i},137:function(e,t,r){var n;e.exports=(n=r(138))&&n.default||n},138:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(0)),a=l(r(2)),o=l(r(23)),i=l(r(6));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.location,r=i.default.getResourcesForPathname(t.pathname);return n.default.createElement(o.default,{location:t,pageResources:r})};c.propTypes={location:a.default.shape({pathname:a.default.string.isRequired}).isRequired};var d=c;t.default=d},139:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return a.createElement(o.default,{key:"helmet",title:"Aida",meta:[{name:"description",content:"Build amazing conversational experiences"},{content:"aida, chatito, chatbots, ai chatbots, nlu, nlp, natural language processing, tensorflowjs, keras, named entity recognition, text classification",name:"keywords"}]},a.createElement("link",{rel:"shortcut icon",href:"/favicon.ico"}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),a.createElement("meta",{name:"theme-color",content:"#fcfcfc"}))};var n,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=(n=r(191))&&n.__esModule?n:{default:n}},190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return o.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return o.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return o.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return o.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return o.navigateTo}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return l.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var n=c(r(0)),a=c(r(2)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(93)),i=c(r(137)),l=c(r(22));function c(e){return e&&e.__esModule?e:{default:e}}var d=n.default.createContext({});t.StaticQueryContext=d;var u=function(e){return n.default.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=u,u.propTypes={data:a.default.object,query:a.default.string.isRequired,render:a.default.func,children:a.default.func}},61:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=d(r(139)),o=d(r(903)),i=d(r(904)),l=d(r(905)),c=d(r(913));function d(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return[n.createElement(i.default,{key:"header"}),n.createElement(l.default,{key:"main"}),n.createElement(c.default,{key:"secondary"}),n.createElement(o.default,{key:"footer"}),n.createElement(a.default,{key:"default_header"})]}},903:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return o.createElement(l,{id:"footer"},o.createElement(n.default,{className:"bottom-bar"},o.createElement(a.default,{lg:6,sm:24}),o.createElement(a.default,{lg:18,sm:24},o.createElement("span",{style:{marginRight:12}},"© 2018 Rodrigo Pimentel"))))},r(133);var n=i(r(125));r(135);var a=i(r(126)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));function i(e){return e&&e.__esModule?e:{default:e}}var l=i(r(90)).default.footer.withConfig({displayName:"LandingFooter__Footer"})(["background-color:#4c4c4c;color:rgba(255,255,255,0.65);clear:both;font-size:12px;position:relative;.bottom-bar{border-top:1px solid #4c4c4c;text-align:right;padding:20px 24px;margin:0;line-height:24px;}"])},904:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return o.createElement(d,{key:"landing-header"},o.createElement(l.Logo,{style:{lineHeight:"64px"},className:"static"},o.createElement(a.default,{to:"/"},"< Aida />")),o.createElement("div",{className:"github-link"},o.createElement("a",{href:"https://github.com/rodrigopivi/aida",title:"Aida",style:{fontSize:26}},o.createElement(n.default,{type:"github"}))))},r(173);var n=c(r(105)),a=c(r(93)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=c(r(90)),l=r(132);function c(e){return e&&e.__esModule?e:{default:e}}var d=i.default.header.withConfig({displayName:"LandingHeader__Header"})(["height:64px;padding:0 32px;width:100%;.github-link{float:right;height:100%;line-height:64px;}"])},905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return l.createElement(m,{component:"section"},l.createElement(n.default,{type:"flex",className:"page text-center"},l.createElement(a.default,{span:17},l.createElement(f,{type:"bottom",leaveReverse:!0,key:"landing-main"},l.createElement(d.ColoredText,{style:{display:"block"},className:"animated"},l.createElement("h2",{key:"title"},"Build conversational user experiences")),l.createElement("span",{key:"line",className:"separator"}),l.createElement(f,{type:"bottom",className:"info-content",key:"landing-main-content"},l.createElement("span",{key:"1"},"Your application can understand natural language privately and without infrastructure."),l.createElement("br",null),l.createElement("span",{key:"2"},"Use open source AI models that can train from the browser, nodejs or python and can run everywhere."),l.createElement("br",null),l.createElement(i.default,{to:"/demo",key:"3"},l.createElement(o.default,{type:"primary"},"Get started"))))),l.createElement(a.default,{span:7,style:{textAlign:"center",margin:"auto"}},l.createElement(u.default,null))))},r(133);var n=s(r(125));r(135);var a=s(r(126));r(216);var o=s(r(217)),i=s(r(93)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),c=s(r(90)),d=r(132),u=s(r(906));function s(e){return e&&e.__esModule?e:{default:e}}var f=r(477).default,p=r(910),m=(0,c.default)(p).withConfig({displayName:"LandingMain__OP"})(["background-color:#f8fafe;width:100%;padding:0;overflow:hidden;min-height:405px;.page{width:90%;max-width:1200px;margin:auto;position:relative;h2{margin-bottom:30px;font-size:2rem;}.separator{margin-bottom:35px;display:inline-block;width:30px;height:5px;background:#1890ff;border-radius:2.5px;}}.page{padding:62px 0 32px;}.info-content{max-width:900px;line-height:48px;margin:0 auto;font-size:20px;font-weight:300;}.text-center:{text-align:center;}"])},906:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.createElement("svg",{fill:"#51A7F9",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 100"},n.createElement("g",null,n.createElement("rect",{x:"5",y:"38.9",width:"4.2",height:"8.3"}),n.createElement("rect",{x:"90.8",y:"38.9",width:"4.2",height:"8.3"}),n.createElement("polygon",{points:"50.7,16 51.9,16 51.9,12 47.9,12 47.9,16 49.1,16  "}),n.createElement("path",{d:"M80.9,21.6H50.7V16h-1.6v5.6H19.3c-3.7,0-6.7,3-6.7,6.8v43.8v15.6c0,0.2,0.2,0.3,0.4,0.2l20.1-15.7c0,0,0.1-0.1,0.2-0.1   h47.4c3.7,0,6.7-3,6.7-6.8V28.1C87.4,24.5,84.5,21.6,80.9,21.6z M40,53.2h-6V38.9h6V53.2z M66.1,53.2h-6V38.9h6V53.2z"})))};var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0))},913:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return l.createElement(s,null,l.createElement(u,{component:n.default,type:"bottom",className:"page row text-center",delay:500},l.createElement(a.default,{className:"card-wrapper",key:"1",md:8,xs:24},l.createElement(i.default,{className:"card",to:"/demo"},l.createElement("h3",null,"Dataset generation"),l.createElement(o.default,{type:"database",style:{color:"#1890ff",fontWeight:"bold",fontSize:"6em",paddingBottom:".3em"}}),l.createElement("div",{className:"card-body"},l.createElement("span",{className:"title"},"Generate and modularize datasets for natural language understanding neural network models in a breeze using Chatito DSL.")))),l.createElement(a.default,{className:"card-wrapper",key:"2",md:8,xs:24},l.createElement(i.default,{className:"card",to:"/demo"},l.createElement("h3",null,"Run everywhere"),l.createElement(o.default,{type:"rocket",style:{color:"#1890ff",fontWeight:"bold",fontSize:"6em",paddingBottom:".3em"}}),l.createElement("div",{className:"card-body"},l.createElement("span",{className:"title"},"Implemented with TF.js and Keras to train from browsers, nodejs or python and run everywhere including iOS, Android and IoT.")))),l.createElement(a.default,{className:"card-wrapper",key:"3",md:8,xs:24},l.createElement(i.default,{className:"card",to:"/demo"},l.createElement("h3",null,"Easy integration"),l.createElement(o.default,{type:"api",style:{color:"#1890ff",fontWeight:"bold",fontSize:"6em",paddingBottom:".3em"}}),l.createElement("div",{className:"card-body"},l.createElement("span",{className:"title"},"Fully customizable, open source, low memory, works offline, runs in device. Use the tools and environment you choose."))))))},r(133);var n=d(r(125));r(135);var a=d(r(126));r(173);var o=d(r(105)),i=d(r(93)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),c=d(r(90));function d(e){return e&&e.__esModule?e:{default:e}}var u=r(477).default,s=c.default.section.withConfig({displayName:"LandingSecondary__Wrapper"})(["width:100%;padding:0;overflow:hidden;background:#f8fafe;padding-bottom:100px;overflow:initial;min-height:372px;.page{width:90%;max-width:1200px;margin:auto;position:relative;h2{margin-bottom:30px;font-size:2rem;}.separator{margin-bottom:65px;display:inline-block;width:30px;height:5px;background:#1890ff;border-radius:2.5px;}}.card{transition:transform 0.3s ease-out,box-shadow 0.3s ease-out;position:relative;color:#868e96;display:inline-block;max-width:360px;width:100%;height:312px;padding:32px;box-shadow:0 2px 2px rgba(84,48,132,0.06);margin:0 auto;flex-direction:column;word-wrap:break-word;background-color:#fcfcfc;background-clip:border-box;text-align:center;border-radius:4px;.card-img-top{width:100%;border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px);}h3{font-size:30px;}img{height:50px;margin:20px 0;}&:hover{text-decoration:none;transform:translateY(-12px);box-shadow:0 12px 24px rgba(84,48,132,0.06);}}"])}}]);
//# sourceMappingURL=component---web-pages-index-tsx-e87b355ca03dad9aa439.js.map