(self.webpackChunkgen_svg_placeholder=self.webpackChunkgen_svg_placeholder||[]).push([[514,32],{4192:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ke});var a=n(959),o=n(5924),i=n(7335),r=n(81),l=n(9210),d=n(2480),s=n(8525),c=n(6243),u=n(6542),m=n(9712),b=n(8316),p=n(354);var h=n(8737),v=n.n(h),f=n(6761).Z;function g(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),o=n[0],i=n[1],r=(0,a.useRef)(!1),l=(0,b.Ct)(),d=l.startScroll,s=l.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:a>=o?(s(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,p.S)((function(e){e.location.hash&&(r.current=!0,i(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return f("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,v().backToTopButton,t&&v().backToTopButtonShow),type:"button",onClick:n})}var k=n(2484),_=n(8903),Z=n(4616),C=n(9679),I=n(5639),S=n(6920),x=n(6761).Z;function N(e){return x("svg",(0,S.Z)({width:"20",height:"20","aria-hidden":"true"},e),x("g",{fill:"#7a7a7a"},x("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),x("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var T=n(5672),B=n.n(T),y=n(6761).Z;function L(e){var t=e.onClick;return y("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",B().collapseSidebarButton),onClick:t},y(N,{className:B().collapseSidebarButtonIcon}))}var w=n(4996),A=n(3804),E=n(6431),H=n(6761).Z,P=Symbol("EmptyContext"),M=a.createContext(P);function F(e){var t=e.children,n=(0,a.useState)(null),o=n[0],i=n[1],r=(0,a.useMemo)((function(){return{expandedItem:o,setExpandedItem:i}}),[o]);return H(M.Provider,{value:r},t)}var W=n(7323),D=n(9370),R=n(7597),V=n(2733),q=n(6761).Z,O=["item","onItemClick","activePath","level","index"];function U(e){var t=e.categoryLabel,n=e.onClick;return q("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function z(e){var t=e.item,n=e.onItemClick,i=e.activePath,l=e.level,s=e.index,c=(0,A.Z)(e,O),u=t.items,m=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,C.L)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,V.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,d.Wl)(e):void 0}),[e,t])}(t),g=(0,d._F)(t,i),k=(0,D.Mg)(h,i),_=(0,W.u)({initialState:function(){return!!b&&(!g&&t.collapsed)}}),Z=_.collapsed,I=_.setCollapsed,x=function(){var e=(0,a.useContext)(M);if(e===P)throw new E.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=x.expandedItem,T=x.setExpandedItem,B=function(e){void 0===e&&(e=!Z),T(e?null:s),I(e)};return function(e){var t=e.isActive,n=e.collapsed,o=e.updateCollapsed,i=(0,E.D9)(t);(0,a.useEffect)((function(){t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:g,collapsed:Z,updateCollapsed:B}),(0,a.useEffect)((function(){b&&null!=N&&N!==s&&v&&I(!0)}),[b,N,s,I,v]),q("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":Z},p)},q("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},q(R.Z,(0,S.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?function(e){null==n||n(t),h?B(!1):(e.preventDefault(),B())}:function(){null==n||n(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!Z:void 0,href:b?null!=f?f:"#":f},c),m),h&&b&&q(U,{categoryLabel:m,onClick:function(e){e.preventDefault(),B()}})),q(W.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:Z},q(se,{items:u,tabIndex:Z?-1:0,onItemClick:n,activePath:i,level:l+1})))}var Y=n(7973),G=n(9554),j=n(878),J=n.n(j),K=n(6761).Z,Q=["item","onItemClick","activePath","level","index"];function X(e){var t=e.item,n=e.onItemClick,a=e.activePath,i=e.level,l=(e.index,(0,A.Z)(e,Q)),s=t.href,c=t.label,u=t.className,m=t.autoAddBaseUrl,b=(0,d._F)(t,a),p=(0,Y.Z)(s);return K("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:c},K(R.Z,(0,S.Z)({className:(0,o.Z)("menu__link",!p&&J().menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:m,"aria-current":b?"page":void 0,to:s},p&&{onClick:n?function(){return n(t)}:void 0},l),c,!p&&K(G.Z,null)))}var $=n(8024),ee=n.n($),te=n(6761).Z;function ne(e){var t=e.item,n=e.level,a=e.index,i=t.value,l=t.defaultStyle,d=t.className;return te("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),l&&[ee().menuHtmlItem,"menu__list-item"],d),key:a,dangerouslySetInnerHTML:{__html:i}})}var ae=n(6761).Z,oe=["item"];function ie(e){var t=e.item,n=(0,A.Z)(e,oe);switch(t.type){case"category":return ae(z,(0,S.Z)({item:t},n));case"html":return ae(ne,(0,S.Z)({item:t},n));default:return ae(X,(0,S.Z)({item:t},n))}}var re=n(6761).Z,le=["items"];function de(e){var t=e.items,n=(0,A.Z)(e,le);return re(F,null,t.map((function(e,t){return re(ie,(0,S.Z)({key:t,item:e,index:t},n))})))}const se=(0,a.memo)(de);var ce=n(5712),ue=n.n(ce),me=n(6761).Z;function be(e){var t=e.path,n=e.sidebar,i=e.className,l=function(){var e=(0,w.nT)().isActive,t=(0,a.useState)(e),n=t[0],o=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&o(0===n)}),[e]),e&&n}();return me("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",ue().menu,l&&ue().menuWithAnnouncementBar,i)},me("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},me(se,{items:n,activePath:t,level:1})))}var pe=n(5931),he=n.n(pe),ve=n(6761).Z;function fe(e){var t=e.path,n=e.sidebar,a=e.onCollapse,i=e.isHidden,r=(0,C.L)(),l=r.navbar.hideOnScroll,d=r.docs.sidebar.hideable;return ve("div",{className:(0,o.Z)(he().sidebar,l&&he().sidebarWithHideableNavbar,i&&he().sidebarHidden)},l&&ve(I.Z,{tabIndex:-1,className:he().sidebarLogo}),ve(be,{path:t,sidebar:n}),d&&ve(L,{onClick:a}))}const ge=a.memo(fe);var ke=n(5198),_e=n(1984),Ze=n(6761).Z,Ce=function(e){var t=e.sidebar,n=e.path,a=(0,_e.e)();return Ze("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},Ze(se,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};function Ie(e){return Ze(ke.Zo,{component:Ce,props:e})}const Se=a.memo(Ie);var xe=n(6761).Z,Ne=n(959).Fragment;function Te(e){var t=(0,Z.i)(),n="mobile"===t;return xe(Ne,null,("desktop"===t||"ssr"===t)&&xe(ge,e),n&&xe(Se,e))}var Be=n(1673),ye=n.n(Be),Le=n(6761).Z;function we(e){var t=e.toggleSidebar;return Le("div",{className:ye().expandButton,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},Le(N,{className:ye().expandButtonIcon}))}var Ae=n(6565),Ee=n.n(Ae),He=n(6761).Z;function Pe(e){var t,n=e.children,o=(0,c.V)();return He(a.Fragment,{key:null!=(t=null==o?void 0:o.name)?t:"noSidebar"},n)}function Me(e){var t=e.sidebar,n=e.hiddenSidebarContainer,i=e.setHiddenSidebarContainer,l=(0,_.TH)().pathname,d=(0,a.useState)(!1),s=d[0],c=d[1],u=(0,a.useCallback)((function(){s&&c(!1),!s&&(0,k.n)()&&c(!0),i((function(e){return!e}))}),[i,s]);return He("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,Ee().docSidebarContainer,n&&Ee().docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ee().docSidebarContainer)&&n&&c(!0)}},He(Pe,null,He("div",{className:(0,o.Z)(Ee().sidebarViewport,s&&Ee().sidebarViewportHidden)},He(Te,{sidebar:t,path:l,onCollapse:u,isHidden:s}),s&&He(we,{toggleSidebar:u}))))}var Fe=n(2697),We=n.n(Fe),De=n(6761).Z;function Re(e){var t=e.hiddenSidebarContainer,n=e.children,a=(0,c.V)();return De("main",{className:(0,o.Z)(We().docMainContainer,(t||!a)&&We().docMainContainerEnhanced)},De("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",We().docItemWrapper,t&&We().docItemWrapperEnhanced)},n))}var Ve=n(3363),qe=n.n(Ve),Oe=n(6761).Z;function Ue(e){var t=e.children,n=(0,c.V)(),o=(0,a.useState)(!1),i=o[0],r=o[1];return Oe(u.Z,{wrapperClassName:qe().docsWrapper},Oe(g,null),Oe("div",{className:qe().docPage},n&&Oe(Me,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:r}),Oe(Re,{hiddenSidebarContainer:i},t)))}var ze=n(8032),Ye=n(2125),Ge=n(6761).Z,je=n(959).Fragment;function Je(e){var t=e.versionMetadata;return Ge(je,null,Ge(Ye.Z,{version:t.version,tag:(0,l.os)(t.pluginId,t.version)}),Ge(i.d,null,t.noIndex&&Ge("meta",{name:"robots",content:"noindex, nofollow"})))}function Ke(e){var t=e.versionMetadata,n=(0,d.hI)(e);if(!n)return Ge(ze.default,null);var a=n.docElement,l=n.sidebarName,u=n.sidebarItems;return Ge(je,null,Ge(Je,e),Ge(i.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},Ge(s.q,{version:t},Ge(c.b,{name:l,items:u},Ge(Ue,null,a)))))}},8032:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});n(959);var a=n(9712),o=n(7335),i=n(6542),r=n(6761).Z,l=n(959).Fragment;function d(){return r(l,null,r(o.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),r(i.Z,null,r("main",{className:"container margin-vert--xl"},r("div",{className:"row"},r("div",{className:"col col--6 col--offset-3"},r("h1",{className:"hero__title"},r(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r("p",null,r(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r("p",null,r(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},8525:(e,t,n)=>{"use strict";n.d(t,{E:()=>d,q:()=>l});var a=n(959),o=n(6431),i=n(6761).Z,r=a.createContext(null);function l(e){var t=e.children,n=e.version;return i(r.Provider,{value:n},t)}function d(){var e=(0,a.useContext)(r);if(null===e)throw new o.i6("DocsVersionProvider");return e}},8737:e=>{e.exports={backToTopButton:"backToTopButton_uBEo",backToTopButtonShow:"backToTopButtonShow_JLok"}},2697:e=>{e.exports={docMainContainer:"docMainContainer_ZUhq",docMainContainerEnhanced:"docMainContainerEnhanced_ntqu",docItemWrapperEnhanced:"docItemWrapperEnhanced_Go9v"}},1673:e=>{e.exports={expandButton:"expandButton_qDKg",expandButtonIcon:"expandButtonIcon_OHRb"}},6565:e=>{e.exports={docSidebarContainer:"docSidebarContainer_Oryy",docSidebarContainerHidden:"docSidebarContainerHidden_NGnb",sidebarViewport:"sidebarViewport_Nt9n"}},3363:e=>{e.exports={docPage:"docPage_joi9",docsWrapper:"docsWrapper_SJ8O","themedComponent--light":"themedComponent--light_OVAP"}},5672:e=>{e.exports={collapseSidebarButton:"collapseSidebarButton_egCh",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_LZ2B"}},5712:e=>{e.exports={menu:"menu_wLni",menuWithAnnouncementBar:"menuWithAnnouncementBar_k4Ye"}},5931:e=>{e.exports={sidebar:"sidebar_Vq9o",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_DEHk",sidebarHidden:"sidebarHidden_U2Ej",sidebarLogo:"sidebarLogo_Dnv4"}},8024:e=>{e.exports={menuHtmlItem:"menuHtmlItem_tT5i"}},878:e=>{e.exports={menuExternalLink:"menuExternalLink_ahdE"}}}]);