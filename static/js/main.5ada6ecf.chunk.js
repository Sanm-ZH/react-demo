(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(8),r=n.n(l),o=(n(15),n(1)),i=n(2),u=n(4),s=n(3),m=n(5),p=n(6),d=n(9),v=n.n(d),h=(n(17),n(19),n(21),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n.state={value:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=new RegExp("\\n","g"),n=new RegExp("\\s","g"),a=e.target.value.replace(t,"<br/>").replace(n,"&nbsp;");console.log(a),this.setState({value:a})}},{key:"getData",value:function(){return{__html:'<div class="input-output">'.concat(this.state.value,"</div>")}}},{key:"render",value:function(){var e=this.state.value,t=this.props.claName;return c.a.createElement("div",{className:t},c.a.createElement("h3",null,"Input"),c.a.createElement("textarea",{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",onChange:this.handleChange,defaultValue:e,className:"input-textarea"}),c.a.createElement("h3",null,"Output"),c.a.createElement("div",{dangerouslySetInnerHTML:this.getData()}))}}]),t}(c.a.Component)),f=function(e,t){var n=new Date,a=n.getFullYear(),c=n.getMonth()+1,l=n.getDate(),r=n.getHours(),o=n.getMinutes(),i=n.getSeconds(),u=new Date(e),s=u.getFullYear(),m=u.getMonth()+1,p=u.getDate(),d=u.getHours(),v=u.getMinutes(),h=u.getSeconds(),f=i-h;f<0&&(o-=1,f=60-h+i);var g=o-v;g<0&&(r-=1,g=60-v+o);var y=r-d;y<0&&(l-=1,y=24-d+r);var k=l-p;k<0&&(c-=1,k=b(e)-p+l);var j=c-m;j<0&&(a-=1,j=12-m+c);var E=a-s;E<0&&(E=0);var O=E>0?E+"\u5c81 ":"",x=E>0?E+"\u5e74 ":"",D=j>0?j+"\u6708 ":"",C=k>0?k+"\u5929 ":"",T=y>0?y+"\u65f6 ":"",w=g>0?g+"\u5206 ":"",M=f>0?f+"\u79d2 ":"",N="";switch(t){case"all":N="".concat(O).concat(D).concat(C).concat(T).concat(w).concat(M);break;case"all1":N="".concat(x).concat(D).concat(C).concat(T).concat(w).concat(M);break;case"month":N="".concat(O).concat(D);break;case"day":N="".concat(O).concat(D).concat(C);break;case"hour":case"minute":case"second":N="".concat(O).concat(D).concat(C).concat(T).concat(w).concat(M);break;default:N="".concat(O)}return N},b=function(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1;return 2===a?g(n)?29:28:1===a||3===a||5===a||7===a||8===a||10===a||12===a?31:30},g=function(e){return e%4===0&&e%100!==0||e%400===0},y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={name:"\u5f20\u4e09",age:f("1990-1-1"),seconds:f("1990-1-1","all1")},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"tick",value:function(){this.setState(function(){return{seconds:f("1990-1-1","all1")}})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.age,a=e.seconds;return c.a.createElement("div",{className:"flex flex-column justify-center align-center"},c.a.createElement("span",null,"\u59d3\u540d\uff1a",t," "),c.a.createElement("span",null,"\u5e74\u9f84\uff1a",n),c.a.createElement("span",null,a))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={title:document.title,inputoutText:["<div>componentWillMount</div><div>\u5f53\u524d\u7248\u672c\u6302\u8f7d\u524d\u5df2\u5f03\u7528\uff0c\u53ef\u4ee5\u5728 constructor \u4e2d\u521d\u59cb\u5316\u6570\u636e</div>"]},document.title="\u751f\u547d\u5468\u671f",n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState(function(e){var t=e.inputoutText;return t.push("<br/><div>componentDidMount</div><div>\u6302\u8f7d\u540e\u94a9\u5b50</div>"),{inputoutText:t}}),console.log("\u6302\u8f7d\u540e")}},{key:"componentDidUpdate",value:function(){this.setState(function(e){var t=e.inputoutText;return t.push("<br/><div>componentDidUpdate</div><div>\u6709\u66f4\u65b0\u540e\u94a9\u5b50</div>"),{inputoutText:t}}),console.log("\u6709\u66f4\u65b0")}},{key:"componentWillUnmount",value:function(){this.setState(function(e){var t=e.inputoutText;return t.push("<br/><div>componentWillUnmount</div><div>\u5378\u8f7d\u540e\u94a9\u5b50</div>"),{inputoutText:t}}),document.title=this.state.title,console.log("\u5378\u8f7d\u540e")}},{key:"handelStringToHTML",value:function(e){return{__html:e.join("")}}},{key:"render",value:function(){var e=this.state.inputoutText;return c.a.createElement("div",{className:"flex flex-column justify-center align-center"},c.a.Children.map(this.props.children,function(e){return e}),c.a.createElement("br",null),c.a.createElement("div",{dangerouslySetInnerHTML:this.handelStringToHTML(e)}))}}]),t}(a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,this.props.context)}}]),t}(a.Component);function E(e){var t="";switch(e.type){case"input":t=c.a.createElement(h,{claName:"flex flex-column justify-center align-center"});break;case"time":t=c.a.createElement(y,null);break;case"life":t=c.a.createElement(k,null,c.a.createElement("div",null,"\u5b50\u8282\u70b91"),c.a.createElement("div",null,"\u5b50\u8282\u70b92"));break;case"proptypes":t=c.a.createElement(j,{context:"\u5fc5\u4f20\u5165\u53c2"});break;default:t=c.a.createElement("span",null)}return t}function O(e){return c.a.createElement("div",{className:"flex justify-center align-center margin-bottom-20 font-20 ".concat(""===e.type?"":"none")},"\u8bf7\u9009\u62e9\u4e0b\u9762\u4e00\u4e2a\u6848\u4f8b\uff1a")}function x(e){var t=[{label:"\u4e2a\u4eba\u4fe1\u606f",type:"time"},{label:"\u8f93\u5165\u6846",type:"input"},{label:"\u751f\u547d\u5468\u671f",type:"life"},{label:"propTypes",type:"proptypes"}].map(function(t){return c.a.createElement("li",{key:t.type,className:"list-item ".concat(t.type===e.type?"live-active":""),value:t.type},t.label)});return c.a.createElement("ul",{className:"flex justify-center align-center margin-bottom-30",onClick:function(t){t.preventDefault(),"LI"===t.target.nodeName&&e.handelDemoListClick(t.target.getAttribute("value"))}},t)}var D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={demoType:""},n.handelDemoListClick=n.handelDemoListClick.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handelDemoListClick",value:function(e){this.setState({demoType:e})}},{key:"render",value:function(){var e=this.state.demoType;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),c.a.createElement("h2",null,"ReactJS Demo")),c.a.createElement(O,{type:e}),c.a.createElement(x,{handelDemoListClick:this.handelDemoListClick,type:e}),c.a.createElement(E,{type:e}))}}]),t}(a.Component);r.a.render(c.a.createElement(D,{name:"app"}),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.5ada6ecf.chunk.js.map