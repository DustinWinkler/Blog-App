(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(36),o=n.n(c),s=n(2),u=n(13),i=n(4),l=n.n(i),d=n(6),b=n(8),j=n.n(b),m=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/login",{username:t,password:n}).catch((function(e){}));case 2:if(!(r=e.sent)){e.next=7;break}return e.abrupt("return",r.data.token);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/signup",{username:t,password:n});case 2:if(200!==e.sent.status){e.next=7;break}return e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/getuserdetails",{headers:{Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(0);var f=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(""),u=Object(s.a)(o,2),i=u[0],b=u[1],j=Object(r.useState)(""),x=Object(s.a)(j,2),p=x[0],f=x[1],g=Object(r.useState)(!1),O=Object(s.a)(g,2),v=O[0],y=O[1];function w(){return(w=Object(d.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,m(i,p);case 3:r=t.sent,console.log(r),r?(e.toggleFunc(),e.loginFunc(r,i)):y(!0);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){c(!0)}),[]),document.addEventListener("click",(function(t){"outside"===t.target.id&&e.toggleFunc()})),Object(h.jsx)("div",{id:"outside",className:"absolute z-50 w-full h-screen text-center p-2 bg-gray-700 z-0 inset-0 transition-all "+(a?"bg-opacity-80":"bg-opacity-0"),children:Object(h.jsxs)("div",{className:"relative mt-12 p-6 m-auto border-2 border-gray-600 rounded-md bg-gray-100 text-black w-max h-auto transition-all "+(a?"inset-0":"top-44"),children:[Object(h.jsx)("h1",{className:"text-3xl",children:"Login"}),v?Object(h.jsx)("h1",{className:"text-red-500 text-sm mt-1 -mb-3",children:"Incorrect Username or Password"}):"",Object(h.jsxs)("form",{className:"mt-4",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{className:"pl-1 block border border-gray-600 rounded mx-auto mb-2",value:i,onChange:function(e){b(e.target.value)}}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{className:"pl-1 block border border-gray-600 rounded mx-auto mb-2",value:p,onChange:function(e){f(e.target.value)}}),Object(h.jsx)("button",{className:"border border-gray-600 px-4 py-1 rounded bg-white",onClick:function(e){return w.apply(this,arguments)},children:"Submit"})]})]})})};var g=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(""),u=Object(s.a)(o,2),i=u[0],b=u[1],j=Object(r.useState)(""),m=Object(s.a)(j,2),p=m[0],f=m[1],g=Object(r.useState)(!1),O=Object(s.a)(g,2),v=O[0],y=O[1],w=Object(r.useState)(!1),k=Object(s.a)(w,2),N=k[0],S=k[1];function C(){return(C=Object(d.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),y(!1),S(!1),t.next=5,x(i,p);case 5:r=t.sent,console.log(r),r?(S(!0),setTimeout((function(){e.toggleFunc()}),5e3)):y(!0);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){c(!0)}),[]),document.addEventListener("click",(function(t){"outside"===t.target.id&&e.toggleFunc()})),Object(h.jsxs)("div",{id:"outside",className:"absolute z-50 w-full h-screen text-center p-2 bg-gray-700 z-0 inset-0 transition-all "+(a?"bg-opacity-80":"bg-opacity-0"),children:[N?Object(h.jsxs)("div",{className:"relative mx-auto mt-4 -mb-4 bg-green-200 border-2 border-green-700 rounded text-green-700 py-2 px-4 w-max",children:["Signup Successful ",Object(h.jsx)("br",{}),"Go ahead and login"]}):"",v?Object(h.jsx)("div",{className:"relative mx-auto mt-4 -mb-4 bg-red-200 border-2 border-red-700 rounded text-red-700 py-2 px-4 w-max",children:"There was an error signing up"}):"",Object(h.jsxs)("div",{className:"relative mt-12 p-6 m-auto border-2 border-gray-600 rounded-md bg-gray-100 text-black w-max h-auto transition-all "+(a?"inset-0":"top-44"),children:[Object(h.jsx)("h1",{className:"text-3xl",children:"Sign Up"}),Object(h.jsxs)("form",{className:"mt-4",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{className:"pl-1 block border border-gray-600 rounded mx-auto mb-2",value:i,onChange:function(e){b(e.target.value)}}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{className:"pl-1 block border border-gray-600 rounded mx-auto mb-2",value:p,onChange:function(e){f(e.target.value)}}),Object(h.jsx)("button",{className:"border border-gray-600 px-4 py-1 rounded bg-white",onClick:function(e){return C.apply(this,arguments)},children:"Submit"})]})]})]})};var O=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(s.a)(o,2),l=i[0],d=i[1],b=function(){c(!a),d(!1)},j=function(){d(!l),c(!1)};return Object(h.jsxs)("div",{className:"py-6 px-3 bg-gray-800 text-white md:flex text-center w-full mx-auto",children:[a?Object(h.jsx)(f,{loginFunc:e.loginFunc,toggleFunc:b}):"",l?Object(h.jsx)(g,{toggleFunc:j}):"",Object(h.jsx)("h1",{className:"text-5xl font-mono font-bold m-auto w-full text-center ",children:Object(h.jsx)(u.b,{to:"/",children:"Dustin's Blog"})}),Object(h.jsx)("nav",{className:"w-max w-full md:absolute mx-auto mt-4 right-4 top-3",children:e.loggedIn?Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{className:"",children:["Welcome ",e.userDetails.username,"!"]}),Object(h.jsx)("button",{onClick:e.signoutFunc,children:"Sign Out"})]}):Object(h.jsxs)("ul",{children:[Object(h.jsx)("button",{className:"block",onClick:b,children:"Log in"}),Object(h.jsx)("button",{onClick:j,children:"Sign up"})]})})]})},v=n(22),y=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/posts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/posts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/posts",n,{headers:{authorization:"Bearer ".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(l.a.mark((function e(t,n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.put("/api/posts/".concat(n),{title:r.title,content:r.content},{headers:{authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("/api/posts/".concat(n),{headers:{authorization:"Bearer ".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=n(15),D=n.n(C),I=n(16),E=n(17);var F=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){c(!0)}),[]),document.addEventListener("click",(function(t){"outside"===t.target.id&&e.toggleFunc()})),console.log("weiner"),Object(h.jsx)("div",{id:"outside",className:"fixed z-50 w-full h-screen text-center p-2 bg-gray-700 z-0 inset-0 transition-all "+(a?"bg-opacity-80":"bg-opacity-0"),children:Object(h.jsxs)("div",{className:"relative mt-12 p-6 m-auto border-2 border-gray-600 rounded-md bg-gray-100 text-black w-max h-auto transition-all "+(a?"inset-0":"top-44"),children:[Object(h.jsx)("h1",{className:"text-3xl",children:"Delete?"}),Object(h.jsxs)("div",{className:"w-full flex justify-around mt-2",children:[Object(h.jsx)("button",{onClick:e.deleteFunc,className:"border-2 py-2 px-4 rounded-md hover:bg-gray-100 hover:border-gray-800",children:"Yes"}),Object(h.jsx)("button",{onClick:e.toggleFunc,className:"border-2 py-2 px-4 rounded-md hover:bg-gray-100 hover:border-gray-800",children:"No"})]})]})})};var T=function(e){var t=Object(r.useState)(null),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(null),i=Object(s.a)(o,2),l=i[0],d=i[1],b=Object(r.useState)(""),j=Object(s.a)(b,2),m=j[0],x=j[1],p=Object(r.useState)(""),f=Object(s.a)(p,2),g=f[0],O=f[1],w=Object(r.useState)(!1),T=Object(s.a)(w,2),z=T[0],B=T[1],_=Object(r.useState)(""),L=Object(s.a)(_,2),A=L[0],P=L[1],U=Object(r.useState)(!1),M=Object(s.a)(U,2),J=M[0],R=M[1],G=Object(r.useState)(null),W=Object(s.a)(G,2),Y=W[0],q=W[1];return Object(r.useEffect)((function(){y().then((function(e){e.map((function(e){return e.shortContent=e.content.substring(0,300)+(e.content.length>300?"...":"")})),c(e)})),document.getElementById("posttextbox").addEventListener("keydown",(function(e){"Tab"===e.key&&(e.preventDefault(),x((function(e){return e.concat("  ")})))}))}),[]),Object(h.jsxs)("div",{className:"w-4/5 mx-auto mt-4",children:[e.loggedIn&&e.userDetails.isAdmin?Object(h.jsx)("div",{children:Object(h.jsxs)("button",{className:"block text-center w-48 py-2 bg-white px-3 rounded-md mx-auto -mt-4 mb-4 border-2 hover:border-gray-700 hover:bg-gray-100",onClick:function(){d(!l)},children:["Add Post ",l?"-":"+"]})}):"",Object(h.jsx)("div",{className:"font-bold transition-all duration-500 bg-white overflow-hidden w-4/5 rounded-md border-2 box-border text-center mx-auto my-4 "+(l?"max-h-screen border-gray-500":"max-h-0 border-gray-800"),children:Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{className:"block mt-2",children:"Title"}),Object(h.jsx)("input",{className:"block resize-none w-4/5 px-10 mx-auto border-2 rounded-md pl-2 py-1 focus:border-gray-700 focus:outline-none",value:g,onChange:function(e){e.preventDefault(),O(e.target.value)}}),Object(h.jsx)("label",{className:"block mt-2",children:"Content"}),Object(h.jsx)("textarea",{id:"posttextbox",rows:"15",className:"block resize-none w-4/5 px-10 mx-auto border-2 rounded-md pl-2 py-1 focus:border-gray-700 focus:outline-none",value:m,onChange:function(e){e.preventDefault(),x(e.target.value)}}),Object(h.jsx)("button",{className:"my-2 border-2 rounded-md px-4 py-2 mx-auto mr-2 hover:bg-gray-100 hover:border-blue-200",onClick:function(t){t.preventDefault();var n=localStorage.getItem("userToken");if(z){var r=a.findIndex((function(e,t){return e._id===A})),o=a;o[r].content=m,o[r].title=g,o[r].shortContent=o[r].content.substring(0,300)+(o[r].content.length>300?"...":""),c(o),d(!1),B(!1),setTimeout((function(){x(""),O("")}),400),N(n,A,o[r])}else{var s={comments:[],author:e.userDetails.id,title:g,content:m};k(n,s).then((function(t){var n=t.data;n.content=m,n.title=g,n.shortContent=n.content.substring(0,300)+(n.content.length>300?"...":""),n.author={username:e.userDetails.username},console.log(n),c([].concat(Object(v.a)(a),[n])),d(!1)}))}},children:"Submit"}),z?Object(h.jsx)("button",{className:"my-2 border-2 rounded-md px-4 py-2 mx-auto hover:bg-gray-100 hover:border-red-200",onClick:function(){B(!1),P(""),d(!1),setTimeout((function(){x(""),O("")}),400)},children:"Exit Edit Mode"}):""]})}),Object(h.jsx)(C.ResponsiveMasonry,{className:"w-full",columnsCountBreakPoints:{0:1,768:2},children:Object(h.jsx)(D.a,{gutter:"15px",children:a?a.map((function(t,n){return Object(h.jsxs)("div",{className:"relative border-2 bg-white w-full inline-block p-4 pb-8 box-border rounded-md hover:border-gray-500 hover:bg-gray-100 cursor-pointer",children:[Object(h.jsxs)(u.b,{to:"/".concat(t._id),className:"w-max",children:[Object(h.jsx)("h1",{className:"text-2xl mb-2 text-center font-bold",children:t.title}),Object(h.jsx)("p",{className:"whitespace-pre-wrap",children:t.shortContent}),Object(h.jsx)("div",{className:"border-b -mx-3 pb-2 mb-2"})]},t._id),Object(h.jsx)("p",{className:"absolute",children:"- "+t.author.username}),e.loggedIn&&e.userDetails.isAdmin?Object(h.jsxs)("div",{children:[Object(h.jsx)(I.a,{onClick:function(){R(!0),q(n)},className:"text-red-200 absolute bg-white bottom-2 right-1 p-1 text-2xl rounded-lg z-10 hover:text-red-400",icon:E.b}),Object(h.jsx)(I.a,{onClick:function(){!function(e){B(!0),P(e._id),O(e.title),x(e.content),d(!0)}(t)},className:"text-blue-200 absolute bg-white bottom-2 right-8 block p-1 text-2xl rounded-lg hover:text-blue-400",icon:E.a})]}):""]},n)})):"Loading..."})}),J?Object(h.jsx)(F,{toggleFunc:function(){R(!J)},deleteFunc:function(){!function(){var e=a[Y]._id,t=a;t=t.filter((function(e,t){return t!==Y})),c(t),R(!1),q(null);var n=localStorage.getItem("userToken");S(n,e)}()}}):""]})},z=n(5),B=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/posts/".concat(t,"/comments"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(l.a.mark((function e(t,n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/posts/".concat(t,"/comments"),{content:n},{headers:{authorization:"Bearer ".concat(r)}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(l.a.mark((function e(t,n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.put("/api/posts/".concat(t,"/comments/").concat(n._id),{content:n.content},{headers:{authorization:"Bearer ".concat(r)}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(l.a.mark((function e(t,n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("/api/posts/".concat(t,"/comments/").concat(n),{headers:{authorization:"Bearer ".concat(r)}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();var P=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){c(!1)}),[]),Object(h.jsxs)("div",{className:"relative border-2 rounded-md p-2 hover:border-gray-800",children:[Object(h.jsx)("h1",{className:"text-xl font-bold text-center",children:e.comment.author.username}),Object(h.jsx)("pre",{className:"whitespace-pre-wrap",children:e.comment.content}),e.userDetails.isAdmin?Object(h.jsx)(I.a,{onClick:function(){c(!a)},className:"text-red-200 absolute bg-white bottom-1 right-1 p-1 text-2xl rounded-lg cursor-pointer hover:text-red-400",icon:E.b}):"",e.userDetails.id===e.comment.author._id?Object(h.jsx)(I.a,{onClick:function(){e.handleUpdate(e.comment)},className:"text-blue-200 absolute bg-white bottom-1 right-8 block p-1 text-2xl rounded-lg cursor-pointer hover:text-blue-400",icon:E.a}):"",a?Object(h.jsx)(F,{toggleFunc:function(){c(!a)},deleteFunc:e.handleDelete}):""]},e.comment.content)};var U=function(e){var t=Object(r.useState)(null),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(null),u=Object(s.a)(o,2),i=u[0],l=u[1],d=Object(r.useState)(!0),b=Object(s.a)(d,2),j=b[0],m=b[1],x=Object(r.useState)(!0),p=Object(s.a)(x,2),f=p[0],g=p[1],O=Object(r.useState)(!1),y=Object(s.a)(O,2),k=y[0],N=y[1],S=Object(r.useState)(""),I=Object(s.a)(S,2),E=I[0],F=I[1],T=Object(r.useState)(!1),U=Object(s.a)(T,2),M=U[0],J=U[1],R=Object(r.useState)(""),G=Object(s.a)(R,2),W=G[0],Y=G[1],q=Object(z.f)().postid;function H(e){J(!0),Y(e._id),F(e.content),N(!0)}return Object(r.useEffect)((function(){w(q).then((function(e){c(e),setTimeout((function(){m(!1)}),500)})),B(q).then((function(e){l(e),setTimeout((function(){g(!1)}),500)}))}),[q]),Object(r.useEffect)((function(){e.loggedIn||N(!1)}),[e.loggedIn]),Object(r.useEffect)((function(){f||j||document.getElementById("textbox").addEventListener("keydown",(function(e){"Tab"===e.key&&(e.preventDefault(),F((function(e){return e.concat("  ")})))}))}),[j,f]),Object(h.jsx)("div",{className:"w-11/12 md:w-4/5 mx-auto bg-white p-8 rounded-md mt-4",children:f&&j?"Loading...":Object(h.jsxs)("article",{children:[Object(h.jsx)("h1",{className:"text-center text-3xl font-bold border-b pb-1",children:a.title}),Object(h.jsx)("pre",{className:"mt-3 p-1 whitespace-pre-wrap",children:a.content}),Object(h.jsx)("p",{className:"border-b pb-1 text-right pr-8",children:"- "+a.author.username}),Object(h.jsxs)("div",{className:"mt-2 p-4",children:[Object(h.jsxs)("h1",{className:"mt-3 mx-auto text-center font-bold text-2xl",children:["Comments - ",i.length]}),e.loggedIn?Object(h.jsx)("div",{children:Object(h.jsxs)("button",{className:"block text-center w-48 py-2 px-3 rounded-md mx-auto my-4 border-2 hover:border-gray-700",onClick:function(){N(!k)},children:["Add Comment ",k?"-":"+"]})}):Object(h.jsx)("p",{className:"my-3 w-full text-center",children:"Login to post comments :)"}),Object(h.jsx)("div",{className:"font-bold transition-all duration-500 overflow-hidden w-full text-center mx-auto my-4 "+(k?"h-60 ":"h-0 "),children:Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{className:"block mt-2",children:"Comment"}),Object(h.jsx)("textarea",{id:"textbox",rows:"5",className:"block resize-none w-4/5 px-10 mx-auto border-2 rounded-md pl-2 py-1 focus:border-gray-700 focus:outline-none",value:E,onChange:function(e){F(e.target.value)}}),Object(h.jsx)("button",{className:"my-2 mr-2 border-2 rounded-md px-4 py-2 mx-auto hover:bg-gray-100 hover:border-blue-300",onClick:function(t){t.preventDefault();var n=localStorage.getItem("userToken");if(M){var r=i.findIndex((function(e,t){return e._id===W})),a=i;a[r].content=E,l(a),N(!1),J(!1),setTimeout((function(){F("")}),400),L(q,a[r],n)}else{var c={content:E,author:{_id:e.userDetails.id,username:e.userDetails.username}};_(q,c.content,n).then((function(t){console.log(t);var n=t.data.newComment,r={_id:e.userDetails.id,username:e.userDetails.username};n.author=r,l([].concat(Object(v.a)(i),[n])),N(!1)}))}},children:"Submit"}),M?Object(h.jsx)("button",{className:"my-2 border-2 rounded-md px-4 py-2 mx-auto hover:bg-gray-100 hover:border-red-300",onClick:function(){J(!1),Y(""),N(!1),setTimeout((function(){F("")}),400)},children:"Exit Edit Mode"}):""]})}),Object(h.jsx)(C.ResponsiveMasonry,{columnsCountBreakPoints:{0:1,768:2},children:Object(h.jsx)(D.a,{gutter:"10px",children:i.map((function(t){return Object(h.jsx)(P,{comment:t,handleUpdate:H,handleDelete:function(){!function(e){var t=i.findIndex((function(t,n){return t._id===e})),n=i;n=n.filter((function(e,n){return n!==t})),l(n),J(!1),Y("");var r=localStorage.getItem("userToken");A(q,e,r)}(t._id)},userDetails:e.userDetails})}))})})]})]})})};var M=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({username:" ",id:" ",isAdmin:!1}),o=Object(s.a)(c,2),i=o[0],l=o[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("userToken");e&&(a(!0),p(e).then((function(e){l(e)})))}),[]),Object(h.jsx)("div",{className:"font-mono bg-gray-800 min-h-screen h-full",children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(O,{userDetails:i,loggedIn:n,loginFunc:function(e,t){p(e).then((function(t){l(t),a(!0),localStorage.setItem("userToken",e)}))},signoutFunc:function(){localStorage.removeItem("userToken"),a(!1),l({username:" ",id:" ",isAdmin:!1})}}),Object(h.jsxs)(z.c,{children:[Object(h.jsx)(z.a,{exact:!0,path:"/",component:T,children:Object(h.jsx)(T,{loggedIn:n,userDetails:i})}),Object(h.jsx)(z.a,{path:"/:postid",meme:i,component:U,children:Object(h.jsx)(U,{loggedIn:n,userDetails:i})})]})]})})};n(72);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.b5185e85.chunk.js.map