(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),i=a.n(c),o=(a(16),a(2)),r=a(3),s=a(5),u=a(4),d=a(6),m=a(1),p=a(9),h=a.n(p),f=(a(18),a(20),a(22),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.state={value:""},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=new RegExp("\\n","g"),a=new RegExp("\\s","g"),n=e.target.value.replace(t,"<br/>").replace(a,"&nbsp;");console.log(n),this.setState({value:n})}},{key:"getData",value:function(){return{__html:'<div class="input-output">'.concat(this.state.value,"</div>")}}},{key:"render",value:function(){var e=this.state.value,t=this.props.claName;return l.a.createElement("div",{className:t},l.a.createElement("h3",null,"Input"),l.a.createElement("textarea",{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",onChange:this.handleChange,defaultValue:e,className:"input-textarea"}),l.a.createElement("h3",null,"Output"),l.a.createElement("div",{dangerouslySetInnerHTML:this.getData()}))}}]),t}(l.a.Component)),b=function(e,t){var a=new Date,n=a.getFullYear(),l=a.getMonth()+1,c=a.getDate(),i=a.getHours(),o=a.getMinutes(),r=a.getSeconds(),s=new Date(e),u=s.getFullYear(),d=s.getMonth()+1,m=s.getDate(),p=s.getHours(),h=s.getMinutes(),f=s.getSeconds(),b=r-f;b<0&&(o-=1,b=60-f+r);var k=o-h;k<0&&(i-=1,k=60-h+o);var j=i-p;j<0&&(c-=1,j=24-p+i);var O=c-m;O<0&&(l-=1,O=v(e)-m+c);var g=l-d;g<0&&(n-=1,g=12-d+l);var E=n-u;E<0&&(E=0);var C=E>0?E+"\u5c81 ":"",y=E>0?E+"\u5e74 ":"",N=g>0?g+"\u6708 ":"",T=O>0?O+"\u5929 ":"",x=j>0?j+"\u65f6 ":"",D=k>0?k+"\u5206 ":"",S=b>0?b+"\u79d2 ":"",I="";switch(t){case"all":I="".concat(C).concat(N).concat(T).concat(x).concat(D).concat(S);break;case"all1":I="".concat(y).concat(N).concat(T).concat(x).concat(D).concat(S);break;case"month":I="".concat(C).concat(N);break;case"day":I="".concat(C).concat(N).concat(T);break;case"hour":case"minute":case"second":I="".concat(C).concat(N).concat(T).concat(x).concat(D).concat(S);break;default:I="".concat(C)}return I},v=function(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1;return 2===n?k(a)?29:28:1===n||3===n||5===n||7===n||8===n||10===n||12===n?31:30},k=function(e){return e%4===0&&e%100!==0||e%400===0},j=function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){a=!1;break}return a},O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:"\u5f20\u4e09",age:b("1990-1-1"),seconds:b("1990-1-1","all1")},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"tick",value:function(){this.setState(function(){return{seconds:b("1990-1-1","all1")}})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.age,n=e.seconds;return l.a.createElement("div",{className:"flex flex-column justify-center align-center"},l.a.createElement("span",null,"\u59d3\u540d\uff1a",t," "),l.a.createElement("span",null,"\u5e74\u9f84\uff1a",a),l.a.createElement("span",null,n))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={title:document.title,inputoutText:["<div>componentWillMount</div><div>\u5f53\u524d\u7248\u672c\u6302\u8f7d\u524d\u5df2\u5f03\u7528\uff0c\u53ef\u4ee5\u5728 constructor \u4e2d\u521d\u59cb\u5316\u6570\u636e</div>"]},document.title="React App | \u751f\u547d\u5468\u671f",a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState(function(e){var t=e.inputoutText;return t.push("<br/><div>componentDidMount</div><div>\u6302\u8f7d\u540e\u94a9\u5b50</div>"),{inputoutText:t}}),console.log("\u6302\u8f7d\u540e")}},{key:"shouldComponentUpdate",value:function(){return console.log("\u4e0d\u5e38\u7528\u7684\u751f\u547d\u5468\u671f","\u6570\u636e\u6709\u66f4\u65b0\u4f1a\u89e6\u53d1"),!0}},{key:"componentDidUpdate",value:function(e,t){t.inputoutText.length<3&&this.setState(function(e){var t=e.inputoutText;return t.push("<br/><div>componentDidUpdate</div><div>\u6709\u66f4\u65b0\u540e\u94a9\u5b50</div>"),{inputoutText:t}}),console.log("\u6709\u66f4\u65b0")}},{key:"componentWillUnmount",value:function(){this.setState(function(e){var t=e.inputoutText;return t.push("<br/><div>componentWillUnmount</div><div>\u5378\u8f7d\u540e\u94a9\u5b50</div>"),{inputoutText:t}}),document.title=this.state.title,console.log("\u5378\u8f7d\u540e")}},{key:"handelStringToHTML",value:function(e){return{__html:e.join("")}}},{key:"render",value:function(){var e=this.state.inputoutText;return l.a.createElement("div",{className:"flex flex-column justify-center align-center"},l.a.Children.map(this.props.children,function(e){return e}),l.a.createElement("br",null),l.a.createElement("div",{dangerouslySetInnerHTML:this.handelStringToHTML(e)}))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"flex justify-center align-center"},this.props.context)}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={context:""},a.inputRef=l.a.createRef(),a.handelFocusClick=a.handelFocusClick.bind(Object(m.a)(Object(m.a)(a))),a.handelSubmitClick=a.handelSubmitClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handelFocusClick",value:function(){this.inputRef.current.focus()}},{key:"handelSubmitClick",value:function(){this.setState({context:this.inputRef.current.value})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"flex justify-center align-center"},l.a.createElement("input",{type:"text",ref:this.inputRef}),l.a.createElement("input",{type:"button",onClick:this.handelFocusClick,value:"click focus"}),l.a.createElement("input",{type:"button",onClick:this.handelSubmitClick,value:"submit"})),l.a.createElement("div",{className:"flex justify-center align-center col-61dafb margin-top-20"},this.state.context))}}]),t}(n.Component),y=a(10),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handelOptCompletedClick=a.handelOptCompletedClick.bind(Object(m.a)(Object(m.a)(a))),a.hendelDeleteTodoClick=a.hendelDeleteTodoClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handelOptCompletedClick",value:function(){this.props.handelOptCompletedItem(this.props.todo.id)}},{key:"hendelDeleteTodoClick",value:function(){this.props.handelDeleteTodoItem(this.props.todo.id)}},{key:"render",value:function(){return l.a.createElement("div",{className:"todo-item ".concat(this.props.todo.completed?"finish":""," ").concat(this.props.isPc?"":"notPc")},l.a.createElement("input",{type:"checkbox",className:"toggle",value:+this.props.todo.completed,defaultChecked:+this.props.todo.completed,onClick:this.handelOptCompletedClick}),l.a.createElement("label",null,this.props.todo.content),l.a.createElement("button",{className:"destroy",onClick:this.hendelDeleteTodoClick}))}}]),t}(n.Component),T=(a(24),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={status:["all","active","completed"],unFinishedNum:function(){return a.props.todos.filter(function(e){return!e.completed}).length}},a.handleClearAllCompletedClick=a.handleClearAllCompletedClick.bind(Object(m.a)(Object(m.a)(a))),a.handelToggleFilterClick=a.handelToggleFilterClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleClearAllCompletedClick",value:function(){this.props.handelClearAllCompleted()}},{key:"handelToggleFilterClick",value:function(e){var t=this;this.props.handelToggleFilter(e),this.setState({unFinishedNum:function(){return t.props.todos.filter(function(e){return!e.completed}).length}})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"helper"},l.a.createElement("span",{className:"left"},l.a.createElement("b",null,this.state.unFinishedNum())," iteams left"),l.a.createElement("span",{className:"tabs"},this.state.status.map(function(t){return l.a.createElement("span",{key:t,className:"".concat(t," ").concat(e.props.filter===t?"actived":""),onClick:e.handelToggleFilterClick.bind(e,t)},t)})),l.a.createElement("span",{className:"clear",onClick:this.handleClearAllCompletedClick},"Clear completed"))}}]),t}(n.Component)),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"author",className:"margin-bottom-30"},l.a.createElement("span",null,"Written by ",this.props.author))}}]),t}(n.Component),D=(a(26),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={title:document.title,todos:[],isPc:j(),filter:"all"},a.handelFilteredTodos=Object(y.a)(function(e,t){if("all"===e)return t;var a="completed"===e;return t.filter(function(e){return a===e.completed})}),document.title="React App | Todo List",a.inputRef=l.a.createRef(),a.handelAddItem=a.handelAddItem.bind(Object(m.a)(Object(m.a)(a))),a.handelDeleteTodoItem=a.handelDeleteTodoItem.bind(Object(m.a)(Object(m.a)(a))),a.handelClearAllCompleted=a.handelClearAllCompleted.bind(Object(m.a)(Object(m.a)(a))),a.handelOptCompletedItem=a.handelOptCompletedItem.bind(Object(m.a)(Object(m.a)(a))),a.handelToggleFilter=a.handelToggleFilter.bind(Object(m.a)(Object(m.a)(a))),setTimeout(function(){a.inputRef.current.focus()},300),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentWillUnmount",value:function(){document.title=this.state.title}},{key:"handelAddItem",value:function(e){if(13===e.which&&e.target.value.trim()){var t=e.target.value.trim();this.setState(function(e){return e.todos.unshift({id:+new Date,content:t,completed:!1}),{todos:e.todos}}),e.target.value=""}}},{key:"handelDeleteTodoItem",value:function(e){this.setState(function(t){return t.todos.splice(t.todos.findIndex(function(t){return t.id===e}),1),{todos:t.todos}}),this.inputRef.current.focus()}},{key:"handelClearAllCompleted",value:function(){this.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}}),this.inputRef.current.focus()}},{key:"handelOptCompletedItem",value:function(e){this.setState(function(t){var a=t.todos.findIndex(function(t){return t.id===e});return t.todos[a].completed=!t.todos[a].completed,{todos:t.todos}}),this.inputRef.current.focus()}},{key:"handelToggleFilter",value:function(e){this.setState({filter:e}),this.inputRef.current.focus()}},{key:"render",value:function(){var e=this,t=this.state,a=t.filter,n=t.todos,c=t.isPc,i=this.handelFilteredTodos(this.state.filter,this.state.todos);return l.a.createElement("div",null,l.a.createElement("div",{className:"todo-app"},l.a.createElement("input",{type:"text",className:"add-input",ref:this.inputRef,placeholder:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48\uff1f",onKeyPress:this.handelAddItem}),i.map(function(t){return l.a.createElement(N,{todo:t,isPc:c,key:t.id,handelOptCompletedItem:e.handelOptCompletedItem,handelDeleteTodoItem:e.handelDeleteTodoItem})}),l.a.createElement(T,{filter:a,todos:n,handelToggleFilter:this.handelToggleFilter,handelClearAllCompleted:this.handelClearAllCompleted})),l.a.createElement(x,{author:this.props.author}))}}]),t}(n.Component)),S=(a(28),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"scorll-cont"},l.a.createElement("div",{className:"title"},"\u4e8b\u4ef6\u8109\u7edc"),l.a.createElement("div",null,l.a.createElement("ul",{className:"timeline-cont max-height-175"},l.a.createElement("li",{className:"timeline-item"},l.a.createElement("div",{className:"timeline-content"},l.a.createElement("div",{className:"timeline-date"},l.a.createElement("span",null,"\u6628\u5929 13:24"),l.a.createElement("span",{className:""},"\u65b0")),l.a.createElement("a",{className:"",href:"https://haokan.baidu.com/v?pd=wisenatural&vid=17310174340877101451",target:"\\u blank"},l.a.createElement("em",null,"\u5fbd\u5dde\u5bb4\u8001\u677f\u66ff\u8001\u5a46\u516c\u5f00\u9053\u6b49")))),l.a.createElement("li",{className:"timeline-item"},l.a.createElement("div",{className:"timeline-content"},l.a.createElement("div",{className:"timeline-date"},l.a.createElement("span",null,"7\u67086\u65e5 16:23")),l.a.createElement("a",{className:"",href:"https://baijiahao.baidu.com/s?id=1704522973900753936&wfr=spider&for=pc",target:"\\u blank"},"\u5b89",l.a.createElement("em",null,"\u5fbd"),"\u868c\u57e0\u8b66\u65b9\u901a\u62a5\uff1a\u53cc\u65b9\u5747\u88ab\u884c\u653f\u62d8\u7559"))),l.a.createElement("li",{className:"timeline-item"},l.a.createElement("div",{className:"timeline-content"},l.a.createElement("div",{className:"timeline-date"},l.a.createElement("span",null,"7\u67084\u65e5 18:07")),l.a.createElement("a",{className:"",href:"https://baijiahao.baidu.com/s?id=1704348590932198387&wfr=spider&for=pc",target:"\\u blank"},"\u868c\u57e0",l.a.createElement("em",null,"\u5fbd\u5dde\u5bb4"),"\u9910\u996e\u6709\u9650\u516c\u53f8\u53d1\u5e03\u58f0\u660e\uff1a\u89e3\u9664\u8058\u7528\u5173\u7cfb"))),l.a.createElement("li",{className:"timeline-item"},l.a.createElement("div",{className:"timeline-content"},l.a.createElement("div",{className:"timeline-date"},l.a.createElement("span",null,"7\u67082\u65e5 14:16")),l.a.createElement("a",{className:"",href:"https://haokan.baidu.com/v?vid=4712701945432170599&pd=bjh&fr=bjhauthor&type=video",target:"\\u blank"},"\u56e0\u905b\u72d7\u7ea0\u7eb7 \u4e00\u81ea\u79f0",l.a.createElement("em",null,"\u5fbd\u5dde\u5bb4\u8001\u677f"),"\u7684\u5973\u5b50\u5a01\u80c1\u4ed6\u4eba"))))))}}]),t}(n.Component));function I(e){var t="";switch(e.type){case"input":t=l.a.createElement(f,{claName:"flex flex-column justify-center align-center"});break;case"time":t=l.a.createElement(O,null);break;case"life":t=l.a.createElement(g,null,l.a.createElement("div",null,"\u5b50\u8282\u70b91"),l.a.createElement("div",null,"\u5b50\u8282\u70b92"));break;case"proptypes":t=l.a.createElement(E,{context:"\u5fc5\u4f20\u5165\u53c2"});break;case"ref":t=l.a.createElement(C,null);break;case"todo":t=l.a.createElement(D,{author:e.author});break;case"scorll1":t=l.a.createElement(S,null);break;default:t=l.a.createElement("span",null)}return t}function w(e){return l.a.createElement("div",{className:"flex justify-center align-center margin-bottom-20 font-20 ".concat(""===e.type?"":"none")},"\u8bf7\u9009\u62e9\u4e0b\u9762\u4e00\u4e2a\u6848\u4f8b\uff1a")}function A(e){var t=[{label:"\u4e2a\u4eba\u4fe1\u606f",type:"time"},{label:"\u8f93\u5165\u6846",type:"input"},{label:"\u751f\u547d\u5468\u671f",type:"life"},{label:"propTypes",type:"proptypes"},{label:"\u83b7\u53d6dom\u8282\u70b9",type:"ref"},{label:"todo-list",type:"todo"},{label:"scorll\u6837\u5f0f1",type:"scorll1"}].map(function(t){return l.a.createElement("li",{key:t.type,className:"list-item word-wrap ".concat(t.type===e.type?"live-active":""),value:t.type},t.label)});return l.a.createElement("div",{className:"flex justify-center align-center margin-bottom-20"},l.a.createElement("ul",{className:"inline-flex flex-row justify-center flex-wrap width-700",onClick:function(t){t.preventDefault(),"LI"===t.target.nodeName&&e.handelDemoListClick(t.target.getAttribute("value"))}},t))}var F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={demoType:"",author:"Sanm-ZH"},a.handelDemoListClick=a.handelDemoListClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handelDemoListClick",value:function(e){this.setState({demoType:e})}},{key:"render",value:function(){var e=this.state,t=e.demoType,a=e.author;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),l.a.createElement("h2",null,"ReactJS App")),l.a.createElement(w,{type:t}),l.a.createElement(A,{handelDemoListClick:this.handelDemoListClick,type:t}),l.a.createElement(I,{type:t,author:a}))}}]),t}(n.Component);i.a.render(l.a.createElement(F,{name:"app"}),document.getElementById("root"))}],[[11,2,1]]]);
//# sourceMappingURL=main.360a39a3.chunk.js.map