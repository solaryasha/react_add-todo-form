(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports={list:"TodoList_list__1PSNh"}},function(e,a,t){e.exports={message:"Error_message__AdiGa"}},function(e,a,t){e.exports={form:"AddNewTodo_form__14LBH"}},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),s=t.n(i),o=t(7),l=t(13),c=t(2),u=t(3),d=t(5),m=t(4),p=(t(19),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),h=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=t(1),v=t.n(b),g=v.a.shape({title:v.a.string.isRequired,userId:v.a.number.isRequired,id:v.a.number.isRequired,completed:v.a.bool.isRequired}),f=(v.a.arrayOf(g),v.a.shape({name:v.a.string.isRequired,userId:v.a.number.isRequired})),y=(v.a.arrayOf(f),function(e){var a=e.content,t=a.title,n=a.userId;return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null,t),r.a.createElement("span",null," id".concat(n))))}),E=function(e){var a=e.todos;return r.a.createElement("div",null,a.map((function(e){return r.a.createElement(y,{content:e})})))},S=t(10),w=t.n(S),C=function(e){var a=e.list;return r.a.createElement("div",{className:w.a.list},r.a.createElement("h1",null,"Todos"),r.a.createElement(E,{todos:a}))},k=t(6),P=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.value,t=e.onChange,n=e.name;return r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:n,placeholder:"What do you want to do ?",onChange:function(e){var a=e.target;return t(a.name,a.value)},value:a}))}}]),t}(n.Component);P.defaultProps={value:""};var x=function(e){var a=e.text,t=e.disabled,n=e.value;return r.a.createElement("option",{value:n,disabled:t},a)};x.defaultProps={disabled:!1};var j=function(e){var a=e.users,t=e.onChange,n=e.name,i=e.value;return r.a.createElement("select",{value:i,name:n,onChange:function(e){var n=e.target,r=a.find((function(e){return e.userId===+n.value}));t(n.name,r.userId)}},r.a.createElement(x,{value:"",text:"Choose a user",disabled:!0}),a.map((function(e){return r.a.createElement(x,{key:e.id,text:e.name,value:e.userId})})))},z=t(11),O=t.n(z),_=function(e){var a=e.message;return r.a.createElement("div",null,r.a.createElement("p",{className:O.a.message},a))};_.defaultProps={message:""};var H=t(12),R=t.n(H),A={input:{value:"",isValid:!0},select:{value:"",isValid:!0}},L=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state=A,e.changeHandler=function(a,t){e.setState((function(e){return Object(k.a)({},a,{value:t,isValid:!0})}))},e.submitHandler=function(a){a.preventDefault();var t=e.state,n=t.select,r=t.input;return r.value&&r.value.trim()?n.value?(e.props.addTodo({title:r.value,userId:n.value}),e.setState(A)):e.setState((function(e){return{select:{isValid:!1}}})):e.setState((function(e){return{input:{isValid:!1}}}))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,a=e.input,t=e.select,n=this.props.names;return r.a.createElement("form",{onSubmit:this.submitHandler,className:R.a.form},r.a.createElement("div",null,a.isValid?null:r.a.createElement(_,{message:"Please enter the title"}),r.a.createElement(P,{name:"input",onChange:this.changeHandler,value:a.value})),r.a.createElement("div",null,t.isValid?null:r.a.createElement(_,{message:"Please choose a user"}),r.a.createElement(j,{name:"select",users:n,onChange:this.changeHandler,value:t.value})),r.a.createElement("button",{type:"submit"},"Add"))}}]),t}(n.Component),I=p.map((function(e){return{name:e.name,userId:e.id}})),D=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={todosFromServer:h},e.addTodoHandler=function(a){e.setState((function(e){return{todosFromServer:[].concat(Object(l.a)(e.todosFromServer),[Object(o.a)(Object(o.a)({},a),{},{id:e.todosFromServer.length+1})])}}))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state.todosFromServer;return r.a.createElement("div",{className:"App"},r.a.createElement(L,{names:I,addTodo:this.addTodoHandler}),r.a.createElement(C,{list:e}))}}]),t}(n.Component);s.a.render(r.a.createElement(D,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.ea11d322.chunk.js.map