(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(146),o=a(153),c=a(151),l=a(156);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(l.a,{menuItem1:"page2_menu_item1",menuItem2:"page2_menu_item2",menuItem3:"page2_menu_item1"}),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(147);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Artur Kroschel"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(155),u=a.n(l);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,s=t||l.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=s},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Artur Kroschel",description:"Explore Artur Kroschel's music compositions, activities, biography and contact him. ",author:"Krzysztof Klapczyński"}}}}},153:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(146),u=a(148),s=u.a.header.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-0"})(["background:rebeccapurple;marginBottom:1.45rem;"]),m=u.a.div.withConfig({displayName:"header__SiteTitleWrapper",componentId:"sc-31ozxh-1"})(["margin:0 auto;maxWidth:960;padding:1.45rem 1.0875rem;"]),d=u.a.h1.withConfig({displayName:"header__SiteTitle",componentId:"sc-31ozxh-2"})(["margin:0;"]),p=Object(u.a)(l.a).withConfig({displayName:"header__StyledLink",componentId:"sc-31ozxh-3"})(["color:white;text-decoration:none;"]),g=function(e){var t=e.siteTitle;return i.a.createElement(s,null,i.a.createElement(m,null,i.a.createElement(d,null,i.a.createElement(p,{to:"/"},t))))};g.propTypes={siteTitle:c.a.string},g.defaultProps={siteTitle:""};var h=g,f=(a(154),u.a.div.withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["margin:0 auto,maxWidth:960,padding:0px 1.0875rem 1.45rem,paddingTop:0,"])),y=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(f,null,i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};y.propTypes={children:c.a.node.isRequired};t.a=y},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("ul",null,r.a.createElement("li",null,e.menuItem1),r.a.createElement("li",null,e.menuItem2),r.a.createElement("li",null,e.menuItem3))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-cbe843577714c1aef67a.js.map