(this["webpackJsonpcss-flexbox-simulator"]=this["webpackJsonpcss-flexbox-simulator"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"id":"justifyContent","title":"Justify Content","values":["flex-start","flex-end","center","space-between","space-around"],"documentation":{"globalDescription":"The <b>justify-content</b> property is used to align the flex items.","valuesDescription":[{"id":"flex-start","description":"The <b>flex-start</b> value aligns the flex items at the beginning of the container. <em>This is default</em>."},{"id":"flex-end","description":"The <b>flex-end</b> value aligns the flex items at the end of the container."},{"id":"center","description":"The <b>center</b> value aligns the flex items at the center of the container."},{"id":"space-between","description":"The <b>space-between</b> value displays the flex items with space between the lines."},{"id":"space-around","description":"The <b>space-around</b> value displays the flex items with space before, between, and after the lines."}]}},{"id":"flexWrap","title":"Flex Wrap","values":["nowrap","wrap","wrap-reverse"],"documentation":{"globalDescription":"The <b>flex-wrap</b> property specifies whether the flex items should wrap or not.","valuesDescription":[{"id":"nowrap","description":"The <b>nowrap</b> value specifies that the flex items will not wrap. <em>This is default</em>."},{"id":"wrap","description":"The <b>wrap</b> value specifies that the flex items will wrap if necessary."},{"id":"wrap-reverse","description":"The <b>wrap-reverse</b> value specifies that the flexible items will wrap if necessary, in reverse order."}]}},{"id":"alignItems","title":"Align Items","values":["stretch","flex-start","flex-end","center","baseline"],"documentation":{"globalDescription":"The <b>align-items</b> property is used to align the flex items vertically.","valuesDescription":[{"id":"stretch","description":"The <b>stretch</b> value stretches the flex items to fill the container. <em>This is default</em>."},{"id":"flex-start","description":"The <b>flex-start</b> value aligns the flex items at the top of the container."},{"id":"flex-end","description":"The <b>flex-end</b> value aligns the flex items at the bottom of the container."},{"id":"center","description":"The <b>center</b> value aligns the flex items in the middle of the container."},{"id":"baseline","description":"The <b>baseline</b> value aligns the flex items such as their baselines aligns."}]}},{"id":"flexDirection","title":"Flex Direction","values":["row","row-reverse","column","column-reverse"],"documentation":{"globalDescription":"The <b>flex-direction</b> property defines in which direction the container wants to stack the flex items.","valuesDescription":[{"id":"row","description":"The <b>row</b> value stacks the flex items horizontally (from left to right). <em>This is the default</em>."},{"id":"row-reverse","description":"The <b>row-reverse</b> value stacks the flex items horizontally (but from right to left)."},{"id":"column","description":"The <b>column</b> value stacks the flex items vertically (from top to bottom)."},{"id":"column-reverse","description":"The <b>column-reverse</b> value stacks the flex items vertically (but from bottom to top)."}]}},{"id":"alignContent","title":"Align Content","values":["stretch","flex-start","flex-end","center","space-between","space-around"],"documentation":{"globalDescription":"The <b>align-content</b> property is used to align the flex lines.","valuesDescription":[{"id":"stretch","description":"The <b>stretch</b> value stretches the flex lines to take up the remaining space. <em>This is default</em>."},{"id":"flex-start","description":"The <b>flex-start</b> value displays the flex lines at the start of the container."},{"id":"flex-end","description":"The <b>flex-end</b> value displays the flex lines at the end of the container."},{"id":"center","description":"The <b>center</b> value displays display the flex lines in the middle of the container."},{"id":"space-between","description":"The <b>space-between</b> value displays the flex lines with equal space between them."},{"id":"space-around","description":"The <b>space-around</b> value displays the flex lines with space before, between, and after them."}]}}]')},29:function(e,t,n){e.exports=n.p+"static/media/background-simulator.70a1a6a2.jpg"},31:function(e,t,n){e.exports=n(43)},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(23),o=n.n(a),l=(n(36),n(10)),c=n.n(l),s=n(11),u=n(13),d=n(4),p=n(5),h=n(7),f=n(6),b=n(1),m=n(2);function v(){var e=Object(b.a)(["\n   grid-template-rows: 1fr;\n"]);return v=function(){return e},e}function g(){var e=Object(b.a)(["\n   grid-column-start: 2;\n   overflow: auto;\n"]);return g=function(){return e},e}function x(){var e=Object(b.a)(["\n   grid-column: 1 / 2;\n   overflow-y: scroll;\n\n"]);return x=function(){return e},e}function w(){var e=Object(b.a)(["\n   display: grid;\n   grid-template-rows: 1fr;\n   grid-template-columns: 40% 60%;\n   @media (max-width: 768px) {\n      grid-template-columns: 50% 50%;\n   }\n   @media (max-width: 500) {\n      grid-template-columns: 60% 40%;\n   }\n\n"]);return w=function(){return e},e}function y(){var e=Object(b.a)(["\n   grid-row: 1 / 2;\n"]);return y=function(){return e},e}function j(){var e=Object(b.a)(["\n   display: grid;\n   grid-template-rows: 70px minmax(200px , auto) 50px;\n   grid-template-columns: 1fr;\n   width: 100vw;\n   height: 100vh;\n"]);return j=function(){return e},e}var O=m.a.div(j()),k=m.a.div(y()),C=m.a.div(w()),E=m.a.div(x()),T=m.a.div(g()),S=m.a.div(v());function I(){var e=Object(b.a)(["  \n   font-size: 27px;\n   padding: 18px 40px;\n"]);return I=function(){return e},e}function z(){var e=Object(b.a)(["  \n   height: 100%;\n   width: 100%;\n   background-color: #0C090A;;\n   color: white;\n"]);return z=function(){return e},e}var D=m.a.div(z()),F=m.a.div(I()),W=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return i.a.createElement(D,null,i.a.createElement(F,null,"CSS Flexbox Simulator"))}}]),n}(r.Component);function B(){var e=Object(b.a)(["\n   color: white;\n   margin-right: 15px;\n   font-size: 18px;\n   cursor: pointer;\n"]);return B=function(){return e},e}function Q(){var e=Object(b.a)(["\n   font-size: 14px;\n   margin-right: 20px;\n   color: white;\n"]);return Q=function(){return e},e}function R(){var e=Object(b.a)(["\n   font-size: 14px;\n   margin-right: 20px;\n   font-weight: 700;\n"]);return R=function(){return e},e}function P(){var e=Object(b.a)(["\n   height: 100%;\n   width: 100%;\n   background-color: #0C090A;\n   color: white;\n   display: flex;\n   align-items: center;\n   justify-content: flex-end;\n"]);return P=function(){return e},e}var A=m.a.div(P()),J=m.a.div(R()),_=m.a.div(Q()),M=m.a.a(B()),H=n(9),L=n(15),V=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return i.a.createElement(A,null,i.a.createElement(J,null,"Juli\xe1n Scialabba"),i.a.createElement(_,null,i.a.createElement(M,{href:"http://twitter.com/juliansci"},i.a.createElement(H.a,{icon:L.c})),i.a.createElement(M,{href:"https://www.linkedin.com/in/julianscialabba/"},i.a.createElement(H.a,{icon:L.b})),i.a.createElement(M,{href:"http://github.com/juliansci"},i.a.createElement(H.a,{icon:L.a}))))}}]),n}(r.Component),q=n(12);function N(){var e=Object(b.a)(["  \n   margin-top: 10px;\n"]);return N=function(){return e},e}function $(){var e=Object(b.a)(["\n   font-weigth: 700;\n\n"]);return $=function(){return e},e}function G(){var e=Object(b.a)(["  \n   margin: 15px 0px;\n"]);return G=function(){return e},e}function K(){var e=Object(b.a)(["\n"]);return K=function(){return e},e}function U(){var e=Object(b.a)(["\n   background-color: red;\n   margin-right: 10px;\n"]);return U=function(){return e},e}function X(){var e=Object(b.a)(["\n   background-color: green;\n"]);return X=function(){return e},e}function Y(){var e=Object(b.a)([" \n   font-size: 16px;\n   padding: 10px;\n   text-align: center;\n   color: white;\n   cursor: pointer;\n   width: 20px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(b.a)([" \n   font-size: 20px;\n   font-weight: 700;\n   flex-grow: 1;\n"]);return Z=function(){return e},e}function ee(){var e=Object(b.a)(["\n   display:flex;\n   flex-wrap: wrap;\n"]);return ee=function(){return e},e}function te(){var e=Object(b.a)(["  \n   margin-top: 20px;\n   position:relative;\n"]);return te=function(){return e},e}function ne(){var e=Object(b.a)(["  \n   height: 100%;\n   width: 100%;\n   padding: 10px 20px;\n   box-sizing: border-box;\n   @media (max-width: 768px) {\n      padding: 5px 5px;\n   }\n"]);return ne=function(){return e},e}var re=m.a.div(ne()),ie=m.a.div(te()),ae=m.a.div(ee()),oe=m.a.div(Z()),le=m.a.div(Y()),ce=Object(m.a)(le)(X()),se=Object(m.a)(le)(U()),ue=m.a.div(K()),de=m.a.div(G()),pe=m.a.div($()),he=m.a.div(N()),fe=n(30),be=n(8);var me=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r,i=e.children,a=e.value;Object(d.a)(this,n),r=t.call(this);var o,l=i.findIndex((function(e){return e.props.value===a}));return o=void 0===a?-1:l>-1&&!i[l].props.disabled?l:function(e){for(var t,n=0;n<e.length;n++)if(!e[n].props.disabled){t=n;break}return t}(i),r.state={checkedIndex:o},r.renderChild=r.renderChild.bind(Object(be.a)(r)),r.onChange=r.onChange.bind(Object(be.a)(r)),r}return Object(p.a)(n,[{key:"componentWillReceiveProps",value:function(e){var t=this.props.children.findIndex((function(t){return t.props.value===e.value&&!t.props.disabled}));-1!==t&&t!==this.state.checkedIndex&&this.setState({checkedIndex:t})}},{key:"onChange",value:function(e){var t=this.props,n=t.onChange,r=t.children[e];r&&(this.setState({checkedIndex:e}),n&&n(r.props.value||""))}},{key:"renderChild",value:function(e,t,n){var r=this.props,a=r.children,o=r.horizontal;return i.a.cloneElement(e,Object(s.a)({horizontal:o,index:t,checked:n,key:t,last:t===a.length-1,onChange:this.onChange},e.props))}},{key:"render",value:function(){var e=this,t=this.state.checkedIndex,n=this.props,r=n.horizontal,a=n.children,o=Object(fe.a)(n,["horizontal","children"]),l=r?{display:"flex",flexWrap:"wrap"}:{};return i.a.createElement("div",Object.assign({style:l},o),a.map((function(n,r){return e.renderChild(n,r,r===t)})))}},{key:"value",get:function(){var e=this.state.checkedIndex,t=this.props.children.find((function(t){return t.props.index===e}));return t&&t.props.value||""}}]),n}(r.Component),ve=(r.Component,function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).getStyles=e.getStyles.bind(Object(be.a)(e)),e.onClick=e.onClick.bind(Object(be.a)(e)),e}return Object(p.a)(n,[{key:"getStyles",value:function(){var e=this.props,t=e.horizontal,n=e.last,r=e.padding,i=e.rootColor,a=e.pointColor,o=e.disabled,l=e.disabledColor;e.label;return{root:{cursor:o?"not-allowed":"pointer",color:o?l||"#e1e1e1":i||"#999999",borderWidth:1,borderStyle:"solid",borderColor:o?l||"#e1e1e1":i||"#999999",borderRadius:1,padding:r||16,paddingTop:10,width:150,height:13,marginBottom:t?10:r||16,marginRight:t&&!n?(r||16)/2:0},label:{color:a||"#8CB9FD",borderStyle:"none",padding:r||8,marginBottom:t?0:r||8,marginRight:t&&!n?(r||8)/2:0},checked:{borderColor:a||"#8CB9FD",color:a||"#8CB9FD"}}}},{key:"onClick",value:function(){var e=this.props,t=e.onChange,n=(e.checked,e.index);!e.disabled&&t&&t(n)}},{key:"render",value:function(){var e=this.props,t=e.checked,n=e.iconSize,r=e.iconInnerSize,a=e.rootColor,o=e.pointColor,l=e.children,c=e.disabled,s=e.disabledColor,u=e.padding,d=e.label,p=this.getStyles(),h=Object.assign({},p.root,t?p.checked:{}),f=Object.assign({},p.root,p.label);return i.a.createElement("div",{style:h,onClick:this.onClick},i.a.createElement("div",{style:{display:"inline-flex",width:"100%"}},i.a.createElement(ge,{size:n,innerSize:r,checked:t,rootColor:a,pointColor:o,disabled:c,disabledColor:s,marginRight:u||7}),i.a.createElement("div",{style:{flex:1}},l)),d?i.a.createElement("div",{style:f},i.a.createElement("div",null,d)):"")}}]),n}(r.Component)),ge=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).getStyles=e.getStyles.bind(Object(be.a)(e)),e}return Object(p.a)(n,[{key:"getStyles",value:function(){var e=this.props,t=e.size,n=e.innerSize,r=e.rootColor,i=e.pointColor,a=e.disabled,o=e.disabledColor;e.marginRight;return{root:{width:t||7,height:t||7,padding:3,backgroundColor:"#FFF",borderWidth:2,borderRadius:"50%",borderStyle:"solid",borderColor:a?o||"#e1e1e1":r||"#9E9E9E",marginRight:5},checked:{borderColor:i||"#8CB9FD"},inner:{width:n||7,height:n||7,borderRadius:"50%",background:i||"#8CB9FD"}}}},{key:"render",value:function(){var e=this.props.checked,t=this.getStyles(),n=Object.assign(t.root,e?t.checked:{});return i.a.createElement("div",{style:n},e&&i.a.createElement("div",{style:t.inner}))}}]),n}(r.Component),xe=n(27),we=n(19);function ye(){var e=Object(b.a)(["\n"]);return ye=function(){return e},e}function je(){var e=Object(b.a)(["\n   font-weight:bolder;\n"]);return je=function(){return e},e}function Oe(){var e=Object(b.a)(["\n   display:flex;\n   margin-top:5px;\n"]);return Oe=function(){return e},e}function ke(){var e=Object(b.a)(["\n\n"]);return ke=function(){return e},e}function Ce(){var e=Object(b.a)(["\n   margin-bottom:15px;\n"]);return Ce=function(){return e},e}function Ee(){var e=Object(b.a)(["\n   position: absolute;\n   display: block;\n   padding: 2px 5px;\n   line-height: 20px;\n   right: -10px;\n   top: -10px;\n   font-size: 24px;\n   background: #ffffff;\n   border-radius: 18px;\n   border: 1px solid #cfcece;\n"]);return Ee=function(){return e},e}function Te(){var e=Object(b.a)(["\n   width: 100%;\n   padding: 30px 25px;\n"]);return Te=function(){return e},e}function Se(){var e=Object(b.a)(["\n   width: 100%;\n   border-bottom: 1px solid gray;\n   font-size: 22px;\n   text-align: center;\n   padding: 5px;\n   font-weight:bolder;\n"]);return Se=function(){return e},e}function Ie(){var e=Object(b.a)(["\n   font-size: 15px;\n"]);return Ie=function(){return e},e}var ze=m.a.div(Ie()),De=m.a.div(Se()),Fe=m.a.div(Te()),We=m.a.div(Ee()),Be=m.a.div(Ce()),Qe=m.a.div(ke()),Re=m.a.div(Oe()),Pe=m.a.div(je()),Ae=m.a.div(ye()),Je=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement(xe.a,{trigger:i.a.createElement(H.a,{icon:we.a}),modal:!0},(function(t){return i.a.createElement(ze,null,i.a.createElement(We,{onClick:t}," ",i.a.createElement(H.a,{icon:we.b})," "),i.a.createElement(De,null," ",e.props.title," "),i.a.createElement(Fe,null,i.a.createElement(Be,{dangerouslySetInnerHTML:{__html:e.props.description.globalDescription}}),i.a.createElement(Qe,null,e.props.description.valuesDescription.map((function(e,t){return i.a.createElement(Re,{key:t},i.a.createElement(Pe,null,e.id,":"),i.a.createElement(Ae,{dangerouslySetInnerHTML:{__html:e.description}}))})))))}))}}]),n}(r.Component),_e=n(28),Me=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={justifyContent:"flex-start",alignItems:"stretch",flexDirection:"row",flexWrap:"nowrap",alignContent:"stretch"},r}return Object(p.a)(n,[{key:"onChangeOption",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(Object(q.a)({},t,n));case 2:this.props.updateValues(this.state);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement(re,null,i.a.createElement(ie,null,i.a.createElement(ae,null,i.a.createElement(oe,null,"Container Properties"),i.a.createElement(se,{onClick:this.props.removeItem},"-"),i.a.createElement(ce,{onClick:this.props.addItem},"+")),i.a.createElement(ue,null,_e.map((function(t,n){return i.a.createElement(de,{key:n},i.a.createElement(pe,null,t.title,": ",i.a.createElement(Je,{title:t.title,description:t.documentation})),i.a.createElement(he,null,i.a.createElement(me,{onChange:function(n){return e.onChangeOption(t.id,n)},value:e.state[t.id],horizontal:!0},t.values.map((function(e,t){return i.a.createElement(ve,{value:e,key:t},e)})))))})))))}}]),n}(r.Component);function He(){var e=Object(b.a)(["\n   width: 200px; \n   height: 200px;\n   border: 2px solid white;\n   color: white;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   font-size:40px;\n   font-weight: bolder;\n"]);return He=function(){return e},e}function Le(){var e=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-image: url(",");\n  background-size: cover;\n  display: flex;\n  justify-content: ",";\n  align-items: ",";\n  flex-direction: ",";\n  flex-wrap: ",";\n  align-content: ",";\n\n\n"]);return Le=function(){return e},e}var Ve=m.a.div(Le(),(function(e){return e.backgroundImg}),(function(e){return e.simulatorProps.justifyContent}),(function(e){return e.simulatorProps.alignItems}),(function(e){return e.simulatorProps.flexDirection}),(function(e){return e.simulatorProps.flexWrap}),(function(e){return e.simulatorProps.alignContent})),qe=m.a.div(He()),Ne=n(29),$e=n.n(Ne),Ge=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.itemsQuantity,n=e.values;return console.log("itemsQuantity: ",t),i.a.createElement(Ve,{backgroundImg:$e.a,simulatorProps:n},Array.apply(null,{length:t}).map((function(e,t){return i.a.createElement(qe,null,t+1)})))}}]),n}(r.Component),Ke=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).updateStateActions=function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setState({simulator:Object(s.a)({},t)});case 2:console.log("state app",r.state);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.removeItem=function(){var e=r.state.itemsQuantity;if(e>1){var t=e-1;r.setState({itemsQuantity:t})}},r.addItem=function(){var e=r.state.itemsQuantity;if(e<20){var t=e+1;r.setState({itemsQuantity:t})}},r.state={itemsQuantity:3,simulator:{justifyContent:"flex-start",alignItems:"stretch",flexDirection:"row",flexWrap:"nowrap",alignContent:"stretch"}},r}return Object(p.a)(n,[{key:"render",value:function(){return i.a.createElement(O,null,i.a.createElement(k,null,i.a.createElement(W,null)),i.a.createElement(C,null,i.a.createElement(E,null,i.a.createElement(Me,{updateValues:this.updateStateActions,removeItem:this.removeItem,addItem:this.addItem})),i.a.createElement(T,null,i.a.createElement(Ge,{values:this.state.simulator,itemsQuantity:this.state.itemsQuantity}))),i.a.createElement(S,null,i.a.createElement(V,null)))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.78ed1a57.chunk.js.map