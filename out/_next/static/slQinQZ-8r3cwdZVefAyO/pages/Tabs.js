(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7L3P":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),s=t.n(l),n=t("ok1R"),r=t("rhny"),i=t("1Yj4"),o=t("9a8N"),c=t("F66N"),d=t("arvA"),u=t("wx14"),b=t("dI71"),p=t("VCL8"),m=t("17x9"),g=t.n(m),f=t("TSYQ"),v=t.n(f),h=s.a.createContext({}),N=t("33Jr"),j={tag:N.l,activeTab:g.a.any,className:g.a.string,cssModule:g.a.object},y=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(b.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,n=Object(N.j)(this.props,Object.keys(j)),r=Object(N.i)(v()("tab-content",a),t);return s.a.createElement(h.Provider,{value:{activeTabId:this.state.activeTab}},s.a.createElement(l,Object(u.a)({},n,{className:r})))},a}(l.Component);Object(p.polyfill)(y);var O=y;y.propTypes=j,y.defaultProps={tag:"div"};var T=t("zLVn"),x={tag:N.l,className:g.a.string,cssModule:g.a.object,tabId:g.a.any};function M(e){var a=e.className,t=e.cssModule,l=e.tabId,n=e.tag,r=Object(T.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(N.i)(v()("tab-pane",a,{active:l===e}),t)};return s.a.createElement(h.Consumer,null,(function(e){var a=e.activeTabId;return s.a.createElement(n,Object(u.a)({},r,{className:i(a)}))}))}M.propTypes=x,M.defaultProps={tag:"div"};var w=t("hAPS"),P=t("R8/+");s.a.createElement;var S={className:g.a.string,cssModule:g.a.object,size:g.a.string,bordered:g.a.bool,borderless:g.a.bool,striped:g.a.bool,dark:g.a.bool,hover:g.a.bool,responsive:g.a.oneOfType([g.a.bool,g.a.string]),tag:N.l,responsiveTag:N.l,innerRef:g.a.oneOfType([g.a.func,g.a.string,g.a.object])},C=function(e){var a=e.className,t=e.cssModule,l=e.size,n=e.bordered,r=e.borderless,i=e.striped,o=e.dark,c=e.hover,d=e.responsive,b=e.tag,p=e.responsiveTag,m=e.innerRef,g=Object(T.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),f=Object(N.i)(v()(a,"table",!!l&&"table-"+l,!!n&&"table-bordered",!!r&&"table-borderless",!!i&&"table-striped",!!o&&"table-dark",!!c&&"table-hover"),t),h=s.a.createElement(b,Object(u.a)({},g,{ref:m,className:f}));if(d){var j=Object(N.i)(!0===d?"table-responsive":"table-responsive-"+d,t);return s.a.createElement(p,{className:j},h)}return h};C.propTypes=S,C.defaultProps={tag:"table",responsiveTag:"div"};var E=C,R={children:g.a.node,className:g.a.string,listClassName:g.a.string,cssModule:g.a.object,size:g.a.string,tag:N.l,listTag:N.l,"aria-label":g.a.string},z=function(e){var a,t=e.className,l=e.listClassName,n=e.cssModule,r=e.size,i=e.tag,o=e.listTag,c=e["aria-label"],d=Object(T.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(N.i)(v()(t),n),p=Object(N.i)(v()(l,"pagination",((a={})["pagination-"+r]=!!r,a)),n);return s.a.createElement(i,{className:b,"aria-label":c},s.a.createElement(o,Object(u.a)({},d,{className:p})))};z.propTypes=R,z.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var k=z,J={active:g.a.bool,children:g.a.node,className:g.a.string,cssModule:g.a.object,disabled:g.a.bool,tag:N.l},L=function(e){var a=e.active,t=e.className,l=e.cssModule,n=e.disabled,r=e.tag,i=Object(T.a)(e,["active","className","cssModule","disabled","tag"]),o=Object(N.i)(v()(t,"page-item",{active:a,disabled:n}),l);return s.a.createElement(r,Object(u.a)({},i,{className:o}))};L.propTypes=J,L.defaultProps={tag:"li"};var V=L,A={"aria-label":g.a.string,children:g.a.node,className:g.a.string,cssModule:g.a.object,next:g.a.bool,previous:g.a.bool,first:g.a.bool,last:g.a.bool,tag:N.l},U=function(e){var a,t=e.className,l=e.cssModule,n=e.next,r=e.previous,i=e.first,o=e.last,c=e.tag,d=Object(T.a)(e,["className","cssModule","next","previous","first","last","tag"]),b=Object(N.i)(v()(t,"page-link"),l);r?a="Previous":n?a="Next":i?a="First":o&&(a="Last");var p,m=e["aria-label"]||a;r?p="\u2039":n?p="\u203a":i?p="\xab":o&&(p="\xbb");var g=e.children;return g&&Array.isArray(g)&&0===g.length&&(g=null),d.href||"a"!==c||(c="button"),(r||n||i||o)&&(g=[s.a.createElement("span",{"aria-hidden":"true",key:"caret"},g||p),s.a.createElement("span",{className:"sr-only",key:"sr"},m)]),s.a.createElement(c,Object(u.a)({},d,{className:b,"aria-label":m}),g)};U.propTypes=A,U.defaultProps={tag:"a"};var I=U,D=s.a.createElement,X=function(e){return D("div",null,D(E,{striped:!0,responsive:!0},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Emisi\xf3n-Venc."),D("th",null,"Proveedor"),D("th",null,"Concepto"),D("th",null,"Monto"),D("th",null,"Descargas"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"JUN 19 - JUL 18"),D("td",null,"Sociedad Integra Cartomex S.A. de C.V."),D("td",null,"Gastos general"),D("td",null,"$ 4444,4444,4444.00 MXN"),D("td",null,"Descarga")),D("tr",null,D("th",{scope:"row"},"2"),D("td",null,"JUN 19 - JUL 18"),D("td",null,"Sociedad Integra Cartomex S.A. de C.V."),D("td",null,"Gastos general"),D("td",null,"$ 4444,4444,4444.00 MXN"),D("td",null,"Descarga")),D("tr",null,D("th",{scope:"row"},"3"),D("td",null,"JUN 19 - JUL 18"),D("td",null,"Sociedad Integra Cartomex S.A. de C.V."),D("td",null,"Gastos general"),D("td",null,"$ 4444,4444,4444.00 MXN"),D("td",null,"Descarga")),D("tr",null,D("th",{scope:"row"},"4"),D("td",null,"JUN 19 - JUL 18"),D("td",null,"Sociedad de Abogados S.A. de C.V."),D("td",null,"Gastos general"),D("td",null,"$ 4444,4444,4444.00 MXN"),D("td",null,"Descarga")),D("tr",null,D("th",{scope:"row"},"5"),D("td",null,"JUN 19 - JUL 18"),D("td",null,"Sociedad de Abogados S.A. de C.V."),D("td",null,"Gastos general"),D("td",null,"$ 4444,4444,4444.00 MXN"),D("td",null,"Descarga")),D("tr",null,D("th",{scope:"row"},"6"),D("td",null,"JUN 19 - JUL 18"),D("td",null,"Sociedad de Abogados S.A. de C.V."),D("td",null,"Gastos general"),D("td",null,"$ 4444,4444,4444.00 MXN"),D("td",null,"Descarga")),D("tr",null,D("th",{scope:"row"},"7"),D("td",null,"JUN 19 - JUL 18"),D("td",null,"Sociedad de Abogados S.A. de C.V."),D("td",null,"Gastos general"),D("td",null,"$ 4444,4444,4444.00 MXN"),D("td",null,"Descarga")),D("tr",null,D("th",{scope:"row"},"8"),D("td",null,"JUN 19 - JUL 18"),D("td",null,"Sociedad de Abogados S.A. de C.V."),D("td",null,"Gastos general"),D("td",null,"$ 4444,4444,4444.00 MXN"),D("td",null,"Descarga")))),D(k,{size:"sm","aria-label":"Page navigation example"},D(V,null,D(I,{previous:!0,href:"#"})),D(V,{active:!0},D(I,{href:"#"},"1")),D(V,null,D(I,{href:"#"},"2")),D(V,null,D(I,{href:"#"},"3")),D(V,null,D(I,{href:"#"},"4")),D(V,null,D(I,{href:"#"},"5")),D(V,null,D(I,{href:"#"},"6")),D(V,null,D(I,{href:"#"},"7")),D(V,null,D(I,{href:"#"},"8")),D(V,null,D(I,{href:"#"},"9")),D(V,null,D(I,{next:!0,href:"#"}))))},G=t("JX7q"),$={children:g.a.node,inline:g.a.bool,tag:N.l,innerRef:g.a.oneOfType([g.a.object,g.a.func,g.a.string]),className:g.a.string,cssModule:g.a.object},_=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(G.a)(t)),t.submit=t.submit.bind(Object(G.a)(t)),t}Object(b.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,n=e.tag,r=e.innerRef,i=Object(T.a)(e,["className","cssModule","inline","tag","innerRef"]),o=Object(N.i)(v()(a,!!l&&"form-inline"),t);return s.a.createElement(n,Object(u.a)({},i,{ref:r,className:o}))},a}(l.Component);_.propTypes=$,_.defaultProps={tag:"form"};var F=_,q={children:g.a.node,row:g.a.bool,check:g.a.bool,inline:g.a.bool,disabled:g.a.bool,tag:N.l,className:g.a.string,cssModule:g.a.object},Y=function(e){var a=e.className,t=e.cssModule,l=e.row,n=e.disabled,r=e.check,i=e.inline,o=e.tag,c=Object(T.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),d=Object(N.i)(v()(a,!!l&&"row",r?"form-check":"form-group",!(!r||!i)&&"form-check-inline",!(!r||!n)&&"disabled"),t);return"fieldset"===o&&(c.disabled=n),s.a.createElement(o,Object(u.a)({},c,{className:d}))};Y.propTypes=q,Y.defaultProps={tag:"div"};var B=Y,Q={children:g.a.node,type:g.a.string,size:g.a.string,bsSize:g.a.string,valid:g.a.bool,invalid:g.a.bool,tag:N.l,innerRef:g.a.oneOfType([g.a.object,g.a.func,g.a.string]),plaintext:g.a.bool,addon:g.a.bool,className:g.a.string,cssModule:g.a.object},H=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(G.a)(t)),t.focus=t.focus.bind(Object(G.a)(t)),t}Object(b.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,n=e.bsSize,r=e.valid,i=e.invalid,o=e.tag,c=e.addon,d=e.plaintext,b=e.innerRef,p=Object(T.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),m=["radio","checkbox"].indexOf(l)>-1,g=new RegExp("\\D","g"),f=o||("select"===l||"textarea"===l?l:"input"),h="form-control";d?(h+="-plaintext",f=o||"input"):"file"===l?h+="-file":m&&(h=c?null:"form-check-input"),p.size&&g.test(p.size)&&(Object(N.m)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),n=p.size,delete p.size);var j=Object(N.i)(v()(a,i&&"is-invalid",r&&"is-valid",!!n&&"form-control-"+n,h),t);return("input"===f||o&&"function"===typeof o)&&(p.type=l),p.children&&!d&&"select"!==l&&"string"===typeof f&&"select"!==f&&(Object(N.m)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete p.children),s.a.createElement(f,Object(u.a)({},p,{ref:b,className:j}))},a}(s.a.Component);H.propTypes=Q,H.defaultProps={type:"text"};var K=H,W=s.a.createElement,Z=function(e){return W(F,null,W(B,null,W(K,{type:"date",name:"date",id:"exampleDate",placeholder:"date placeholder"})),W(B,null,W(K,{type:"search",name:"search",id:"exampleSearch",placeholder:"Proveedor"})))},ee=t("dOs6"),ae=t("BLzl"),te=t("ezmu"),le=s.a.createElement,se=function(e){return le("div",null,le(ae.a,{body:!0,className:"text-center"},le("img",{src:ee.a,alt:"multitud",width:"80px"}),le(te.a,null,"Pymes registradas en Visor. Lorem ipsum dolor sit amet.")),le(ae.a,{body:!0,className:"text-center"},le("img",{src:ee.a,alt:"multitud",width:"80px"}),le(te.a,null,"Pymes registradas en Visor. Lorem ipsum dolor sit amet.")),le(ae.a,{body:!0,className:"text-center"},le("img",{src:ee.a,alt:"multitud",width:"80px"}),le(te.a,null,"Pymes registradas en Visor. Lorem ipsum dolor sit amet.")),le(ae.a,{body:!0,className:"text-center"},le("img",{src:ee.a,alt:"multitud",width:"80px"}),le(te.a,null,"Pymes registradas en Visor. Lorem ipsum dolor sit amet.")),le(ae.a,{body:!0,className:"text-center"},le("img",{src:ee.a,alt:"multitud",width:"80px"}),le(te.a,null,"Pymes registradas en Visor. Lorem ipsum dolor sit amet.")),le(ae.a,{body:!0,className:"text-center"},le("img",{src:ee.a,alt:"multitud",width:"80px"}),le(te.a,null,"Pymes registradas en Visor. Lorem ipsum dolor sit amet.")))},ne=s.a.createElement;a.default=function(e){var a=Object(l.useState)("1"),t=a[0],s=a[1],u=function(e){t!==e&&s(e)};return ne("div",{className:"container-fluid",id:"menu-tabs"},ne(n.a,null,ne(r.a,{md:"3",className:"pad-left"},ne(w.a,null)),ne(r.a,{md:"9"},ne(P.a,null),ne(i.a,{fluid:!0},ne(o.a,{tabs:!0},ne(c.a,null,ne(d.a,{className:v()({active:"1"===t}),onClick:function(){u("1")}},"Tabla")),ne(c.a,null,ne(d.a,{className:v()({active:"2"===t}),onClick:function(){u("2")}},"Cards"))),ne(O,{activeTab:t},ne(M,{tabId:"1"},ne(n.a,null,ne(r.a,{sm:"12"},ne(Z,null),ne(X,null)))),ne(M,{tabId:"2"},ne(se,null)))))))}},"yjw/":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tabs",function(){return t("7L3P")}])}},[["yjw/",1,2,0,3]]]);