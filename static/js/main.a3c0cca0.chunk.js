(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{10:function(e,t,a){e.exports={list:"TodoList_list__1PSNh"}},11:function(e,t,a){e.exports={form:"AddNewTodo_form__14LBH"}},13:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),s=a(7),l=a(12),c=a(2),u=a(3),d=a(5),m=a(4),h=(a(18),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=a(1),v=a.n(b),g=v.a.shape({title:v.a.string.isRequired,userId:v.a.number.isRequired,id:v.a.number.isRequired,completed:v.a.bool.isRequired}),f=(v.a.arrayOf(g),v.a.shape({name:v.a.string.isRequired,userId:v.a.number.isRequired})),y=(v.a.arrayOf(f),function(e){var t=e.content,a=t.title,n=t.userId;return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null,a),r.a.createElement("span",null," id".concat(n))))}),E=function(e){var t=e.todos;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(y,{content:e})})))},S=a(10),w=a.n(S),C=function(e){var t=e.list;return r.a.createElement("div",{className:w.a.list},r.a.createElement(E,{todos:t}))},k=a(6),P=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange,n=e.name;return r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:n,placeholder:"What do you want to do ?",onChange:function(e){var t=e.target;return a(t.name,t.value)},value:t}))}}]),a}(n.Component);P.defaultProps={value:""};var j=function(e){var t=e.text,a=e.disabled,n=e.value;return r.a.createElement("option",{value:n,disabled:a},t)};j.defaultProps={disabled:!1};var x=function(e){var t=e.users,a=e.onChange,n=e.name,i=e.value;return r.a.createElement("select",{value:i,name:n,onChange:function(e){var n=e.target,r=t.find((function(e){return e.userId===+n.value}));a(n.name,r.userId)}},r.a.createElement(j,{value:"",text:"Choose a user",disabled:!0}),t.map((function(e){return r.a.createElement(j,{key:e.id,text:e.name,value:e.userId})})))},z=function(e){var t=e.message;return r.a.createElement("div",null,t)};z.defaultProps={message:""};var O=a(11),H=a.n(O),R={input:{value:"",isValid:!0},select:{value:"",isValid:!0}},A=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state=R,e.changeHandler=function(t,a){e.setState((function(e){return Object(k.a)({},t,{value:a,isValid:!0})}))},e.submitHandler=function(t){t.preventDefault();var a=e.state,n=a.select,r=a.input;return r.value&&r.value.trim()?n.value?(e.props.addTodo({title:r.value,userId:n.value}),e.setState(R)):e.setState((function(e){return{select:{isValid:!1}}})):e.setState((function(e){return{input:{isValid:!1}}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.input,a=e.select,n=this.props.names;return r.a.createElement("form",{onSubmit:this.submitHandler,className:H.a.form},r.a.createElement("div",null,t.isValid?null:r.a.createElement(z,{message:"Please enter the title"}),r.a.createElement(P,{name:"input",onChange:this.changeHandler,value:t.value})),r.a.createElement("div",null,a.isValid?null:r.a.createElement(z,{message:"Please choose a user"}),r.a.createElement(x,{name:"select",users:n,onChange:this.changeHandler,value:a.value})),r.a.createElement("button",{type:"submit"},"Add"))}}]),a}(n.Component),L=h.map((function(e){return{name:e.name,userId:e.id}})),_=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={todosFromServer:p},e.addTodoHandler=function(t){e.setState((function(e){return{todosFromServer:[].concat(Object(l.a)(e.todosFromServer),[Object(s.a)(Object(s.a)({},t),{},{id:e.todosFromServer.length+1})])}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.todosFromServer;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement(A,{names:L,addTodo:this.addTodoHandler}),r.a.createElement(C,{list:e}))}}]),a}(n.Component);o.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a3c0cca0.chunk.js.map