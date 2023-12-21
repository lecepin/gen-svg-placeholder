(self.webpackChunkgen_svg_placeholder=self.webpackChunkgen_svg_placeholder||[]).push([[514],{4192:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>Ke});var a=t(959),o=t(5924),i=t(7335),r=t(81),l=t(9210),d=t(2480),s=t(8525),c=t(6243),u=t(6542),m=t(9712),b=t(8316),p=t(354);var v=t(8737),h=t.n(v),f=t(6761).Z;function g(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),o=t[0],i=t[1],r=(0,a.useRef)(!1),l=(0,b.Ct)(),d=l.startScroll,s=l.cancelScroll;return(0,b.RF)((function(e,t){var a=e.scrollY,o=null==t?void 0:t.scrollY;o&&(r.current?r.current=!1:a>=o?(s(),i(!1)):a<n?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,p.S)((function(e){e.location.hash&&(r.current=!0,i(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return f("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,h().backToTopButton,n&&h().backToTopButtonShow),type:"button",onClick:t})}var k=t(2484),_=t(8903),C=t(4616),Z=t(9679),S=t(5639),I=t(6920),x=t(6761).Z;function N(e){return x("svg",(0,I.Z)({width:"20",height:"20","aria-hidden":"true"},e),x("g",{fill:"#7a7a7a"},x("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),x("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var T=t(5672),B=t.n(T),L=t(6761).Z;function y(e){var n=e.onClick;return L("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",B().collapseSidebarButton),onClick:n},L(N,{className:B().collapseSidebarButtonIcon}))}var A=t(4996),E=t(3804),H=t(6431),w=t(6761).Z,M=Symbol("EmptyContext"),P=a.createContext(M);function W(e){var n=e.children,t=(0,a.useState)(null),o=t[0],i=t[1],r=(0,a.useMemo)((function(){return{expandedItem:o,setExpandedItem:i}}),[o]);return w(P.Provider,{value:r},n)}var D=t(7323),R=t(9370),V=t(7597),F=t(2733),q=t(6761).Z,O=["item","onItemClick","activePath","level","index"];function z(e){var n=e.categoryLabel,t=e.onClick;return q("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:t})}function U(e){var n=e.item,t=e.onItemClick,i=e.activePath,l=e.level,s=e.index,c=(0,E.Z)(e,O),u=n.items,m=n.label,b=n.collapsible,p=n.className,v=n.href,h=(0,Z.L)().docs.sidebar.autoCollapseCategories,f=function(e){var n=(0,F.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!n&&e.collapsible?(0,d.Wl)(e):void 0}),[e,n])}(n),g=(0,d._F)(n,i),k=(0,R.Mg)(v,i),_=(0,D.u)({initialState:function(){return!!b&&(!g&&n.collapsed)}}),C=_.collapsed,S=_.setCollapsed,x=function(){var e=(0,a.useContext)(P);if(e===M)throw new H.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=x.expandedItem,T=x.setExpandedItem,B=function(e){void 0===e&&(e=!C),T(e?null:s),S(e)};return function(e){var n=e.isActive,t=e.collapsed,o=e.updateCollapsed,i=(0,H.D9)(n);(0,a.useEffect)((function(){n&&!i&&t&&o(!1)}),[n,i,t,o])}({isActive:g,collapsed:C,updateCollapsed:B}),(0,a.useEffect)((function(){b&&null!=N&&N!==s&&h&&S(!0)}),[b,N,s,S,h]),q("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":C},p)},q("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},q(V.Z,(0,I.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":g}),onClick:b?function(e){null==t||t(n),v?B(!1):(e.preventDefault(),B())}:function(){null==t||t(n)},"aria-current":k?"page":void 0,"aria-expanded":b?!C:void 0,href:b?null!=f?f:"#":f},c),m),v&&b&&q(z,{categoryLabel:m,onClick:function(e){e.preventDefault(),B()}})),q(D.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},q(se,{items:u,tabIndex:C?-1:0,onItemClick:t,activePath:i,level:l+1})))}var Y=t(7973),G=t(9554),j=t(878),J=t.n(j),K=t(6761).Z,Q=["item","onItemClick","activePath","level","index"];function X(e){var n=e.item,t=e.onItemClick,a=e.activePath,i=e.level,l=(e.index,(0,E.Z)(e,Q)),s=n.href,c=n.label,u=n.className,m=n.autoAddBaseUrl,b=(0,d._F)(n,a),p=(0,Y.Z)(s);return K("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:c},K(V.Z,(0,I.Z)({className:(0,o.Z)("menu__link",!p&&J().menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:m,"aria-current":b?"page":void 0,to:s},p&&{onClick:t?function(){return t(n)}:void 0},l),c,!p&&K(G.Z,null)))}var $=t(8024),ee=t.n($),ne=t(6761).Z;function te(e){var n=e.item,t=e.level,a=e.index,i=n.value,l=n.defaultStyle,d=n.className;return ne("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(t),l&&[ee().menuHtmlItem,"menu__list-item"],d),key:a,dangerouslySetInnerHTML:{__html:i}})}var ae=t(6761).Z,oe=["item"];function ie(e){var n=e.item,t=(0,E.Z)(e,oe);switch(n.type){case"category":return ae(U,(0,I.Z)({item:n},t));case"html":return ae(te,(0,I.Z)({item:n},t));default:return ae(X,(0,I.Z)({item:n},t))}}var re=t(6761).Z,le=["items"];function de(e){var n=e.items,t=(0,E.Z)(e,le);return re(W,null,n.map((function(e,n){return re(ie,(0,I.Z)({key:n,item:e,index:n},t))})))}const se=(0,a.memo)(de);var ce=t(5712),ue=t.n(ce),me=t(6761).Z;function be(e){var n=e.path,t=e.sidebar,i=e.className,l=function(){var e=(0,A.nT)().isActive,n=(0,a.useState)(e),t=n[0],o=n[1];return(0,b.RF)((function(n){var t=n.scrollY;e&&o(0===t)}),[e]),e&&t}();return me("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",ue().menu,l&&ue().menuWithAnnouncementBar,i)},me("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},me(se,{items:t,activePath:n,level:1})))}var pe=t(5931),ve=t.n(pe),he=t(6761).Z;function fe(e){var n=e.path,t=e.sidebar,a=e.onCollapse,i=e.isHidden,r=(0,Z.L)(),l=r.navbar.hideOnScroll,d=r.docs.sidebar.hideable;return he("div",{className:(0,o.Z)(ve().sidebar,l&&ve().sidebarWithHideableNavbar,i&&ve().sidebarHidden)},l&&he(S.Z,{tabIndex:-1,className:ve().sidebarLogo}),he(be,{path:n,sidebar:t}),d&&he(y,{onClick:a}))}const ge=a.memo(fe);var ke=t(5198),_e=t(1984),Ce=t(6761).Z,Ze=function(e){var n=e.sidebar,t=e.path,a=(0,_e.e)();return Ce("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},Ce(se,{items:n,activePath:t,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};function Se(e){return Ce(ke.Zo,{component:Ze,props:e})}const Ie=a.memo(Se);var xe=t(6761).Z,Ne=t(959).Fragment;function Te(e){var n=(0,C.i)(),t="mobile"===n;return xe(Ne,null,("desktop"===n||"ssr"===n)&&xe(ge,e),t&&xe(Ie,e))}var Be=t(1673),Le=t.n(Be),ye=t(6761).Z;function Ae(e){var n=e.toggleSidebar;return ye("div",{className:Le().expandButton,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n},ye(N,{className:Le().expandButtonIcon}))}var Ee=t(6565),He=t.n(Ee),we=t(6761).Z;function Me(e){var n,t=e.children,o=(0,c.V)();return we(a.Fragment,{key:null!=(n=null==o?void 0:o.name)?n:"noSidebar"},t)}function Pe(e){var n=e.sidebar,t=e.hiddenSidebarContainer,i=e.setHiddenSidebarContainer,l=(0,_.TH)().pathname,d=(0,a.useState)(!1),s=d[0],c=d[1],u=(0,a.useCallback)((function(){s&&c(!1),!s&&(0,k.n)()&&c(!0),i((function(e){return!e}))}),[i,s]);return we("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,He().docSidebarContainer,t&&He().docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(He().docSidebarContainer)&&t&&c(!0)}},we(Me,null,we("div",{className:(0,o.Z)(He().sidebarViewport,s&&He().sidebarViewportHidden)},we(Te,{sidebar:n,path:l,onCollapse:u,isHidden:s}),s&&we(Ae,{toggleSidebar:u}))))}var We=t(2697),De=t.n(We),Re=t(6761).Z;function Ve(e){var n=e.hiddenSidebarContainer,t=e.children,a=(0,c.V)();return Re("main",{className:(0,o.Z)(De().docMainContainer,(n||!a)&&De().docMainContainerEnhanced)},Re("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",De().docItemWrapper,n&&De().docItemWrapperEnhanced)},t))}var Fe=t(3363),qe=t.n(Fe),Oe=t(6761).Z;function ze(e){var n=e.children,t=(0,c.V)(),o=(0,a.useState)(!1),i=o[0],r=o[1];return Oe(u.Z,{wrapperClassName:qe().docsWrapper},Oe(g,null),Oe("div",{className:qe().docPage},t&&Oe(Pe,{sidebar:t.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:r}),Oe(Ve,{hiddenSidebarContainer:i},n)))}var Ue=t(8032),Ye=t(2125),Ge=t(6761).Z,je=t(959).Fragment;function Je(e){var n=e.versionMetadata;return Ge(je,null,Ge(Ye.Z,{version:n.version,tag:(0,l.os)(n.pluginId,n.version)}),Ge(i.d,null,n.noIndex&&Ge("meta",{name:"robots",content:"noindex, nofollow"})))}function Ke(e){var n=e.versionMetadata,t=(0,d.hI)(e);if(!t)return Ge(Ue.default,null);var a=t.docElement,l=t.sidebarName,u=t.sidebarItems;return Ge(je,null,Ge(Je,e),Ge(i.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},Ge(s.q,{version:n},Ge(c.b,{name:l,items:u},Ge(ze,null,a)))))}},8737:e=>{e.exports={backToTopButton:"backToTopButton_uBEo",backToTopButtonShow:"backToTopButtonShow_JLok"}},2697:e=>{e.exports={docMainContainer:"docMainContainer_ZUhq",docMainContainerEnhanced:"docMainContainerEnhanced_ntqu",docItemWrapperEnhanced:"docItemWrapperEnhanced_Go9v"}},1673:e=>{e.exports={expandButton:"expandButton_qDKg",expandButtonIcon:"expandButtonIcon_OHRb"}},6565:e=>{e.exports={docSidebarContainer:"docSidebarContainer_Oryy",docSidebarContainerHidden:"docSidebarContainerHidden_NGnb",sidebarViewport:"sidebarViewport_Nt9n"}},3363:e=>{e.exports={docPage:"docPage_joi9",docsWrapper:"docsWrapper_SJ8O","themedComponent--light":"themedComponent--light_OVAP"}},5672:e=>{e.exports={collapseSidebarButton:"collapseSidebarButton_egCh",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_LZ2B"}},5712:e=>{e.exports={menu:"menu_wLni",menuWithAnnouncementBar:"menuWithAnnouncementBar_k4Ye"}},5931:e=>{e.exports={sidebar:"sidebar_Vq9o",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_DEHk",sidebarHidden:"sidebarHidden_U2Ej",sidebarLogo:"sidebarLogo_Dnv4"}},8024:e=>{e.exports={menuHtmlItem:"menuHtmlItem_tT5i"}},878:e=>{e.exports={menuExternalLink:"menuExternalLink_ahdE"}}}]);