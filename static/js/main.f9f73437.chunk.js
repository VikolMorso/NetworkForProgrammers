(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a(91),r=n.create({withCredentials:!0,headers:{"API-KEY":"f31e96ab-e0de-473e-a59d-f95043afee5c"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),o={follow:function(e){return r.delete("follow/".concat(e)).then((function(e){if(0===e.data.resultCode)return e}))},unFollow:function(e){return r.post("follow/".concat(e)).then((function(e){if(0===e.data.resultCode)return e}))},getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t," ")).then((function(e){return e.data}))},getOurUser:function(){return r.get("auth/me ")},getProfileUser:function(e){return s.getProfileUser(e)},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:a})},logout:function(){return r.delete("auth/login")}},s={getProfileUser:function(e){return r.get("profile/"+e)},getStatusUser:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){if(0===e.data.resultCode)return e}))}}},132:function(e,t,a){e.exports=a.p+"static/media/preloader.e32b9873.gif"},134:function(e,t,a){e.exports={profile:"Profile_profile__MlfjR"}},14:function(e,t,a){e.exports={main:"Navigation_main__2C-tC",nav:"Navigation_nav__1Wiob",nav__menu:"Navigation_nav__menu__3nb_X",link:"Navigation_link__1dNPx",active:"Navigation_active__2ciC5",setting:"Navigation_setting__3jc6B",tittle:"Navigation_tittle__27AHv",users:"Navigation_users__3dn1Z"}},15:function(e,t,a){e.exports={preloader:"Users_preloader__3fofS",ggg:"Users_ggg__B85QW",btn_follow:"Users_btn_follow__3i8Fx",bold:"Users_bold__1Mqcn",number__page:"Users_number__page__2QZm3",block:"Users_block__1zTto",main:"Users_main__2bL3X",AvatarkaAndBtn:"Users_AvatarkaAndBtn__2mvj3",ava:"Users_ava__2BmYi",info__users:"Users_info__users___-DMr",location:"Users_location__3txoh"}},161:function(e,t,a){e.exports=a(289)},166:function(e,t,a){},167:function(e,t){},172:function(e,t,a){},173:function(e,t,a){},18:function(e,t,a){e.exports={content:"Dialogs_content__Tdm4x",main:"Dialogs_main__i1RaT",dialogs:"Dialogs_dialogs__32peQ",dialog:"Dialogs_dialog__2rWZE",messages:"Dialogs_messages__2WeUS",message:"Dialogs_message__3G1qD",ava_user:"Dialogs_ava_user__2TLgm",form__send:"Dialogs_form__send__3sVJD",textarea:"Dialogs_textarea__1QJ-j",send:"Dialogs_send__2Oh3v",error__textarea:"Dialogs_error__textarea__1zygd",error__span:"Dialogs_error__span__1w0xN"}},289:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(68),s=a.n(o),i=(a(166),a(27)),c=a(28),u=a(31),l=a(30),m=a(10),f=a(14),p=a.n(f);a(167);var _=function(e){return r.a.createElement("div",{className:p.a.main},r.a.createElement("nav",{className:p.a.nav},r.a.createElement("ul",{className:p.a.nav__menu},r.a.createElement("li",{className:p.a.link},r.a.createElement(m.b,{to:"/Profile",activeClassName:p.a.active},"Profile")),r.a.createElement("li",{className:p.a.link},r.a.createElement(m.b,{to:"/Dialogs",activeClassName:p.a.active},"Dialogs")),r.a.createElement("li",{className:p.a.link},r.a.createElement(m.b,{to:"/News",activeClassName:p.a.active},"News")),r.a.createElement("li",{className:p.a.link},r.a.createElement(m.b,{to:"/Music",activeClassName:p.a.active},"Music")),r.a.createElement("li",{className:p.a.link},r.a.createElement(m.b,{to:"/Users",activeClassName:p.a.active},"Users")),r.a.createElement("li",{className:"".concat(p.a.link," ").concat(p.a.setting)},r.a.createElement(m.b,{to:"/Settings",activeClassName:p.a.active},"Settings")))),r.a.createElement("h3",{className:p.a.tittle},"Friends"))},d=a(9);a(172);var g=function(e){return r.a.createElement("div",null,"Settings")},h=a(11),v=(a(173),a(8)),b=a(50),E=a(4),O={DialogsUser:[{id:1,name:"Max"},{id:2,name:"Manya"},{id:3,name:"Nikitos"},{id:4,name:"Nastya"},{id:5,name:"Inga"},{id:6,name:"React"}],MessageUser:[{id:1,message:"Priv"},{id:2,message:"opyt"},{id:3,message:"skolko mozhno, Max"},{id:4,message:"test"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;if("ADD-MESSAGE"===t.type){var a={id:5,message:t.message.message};return Object(E.a)(Object(E.a)({},e),{},{MessageUser:[].concat(Object(b.a)(e.MessageUser),[a]),onMessageChange:""})}return e},w=a(127),j=a(18),N=a.n(j);var S=function(e){return r.a.createElement("div",{className:N.a.dialog},r.a.createElement("div",{className:N.a.avatarka},r.a.createElement("img",{src:"https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",alt:"",className:N.a.ava_user})),r.a.createElement(m.b,{to:"/Dialogs/"+e.id},e.name))};var U=function(e){return r.a.createElement("div",{className:N.a.message},e.message)},y=a(128),D=a(41),k=a(33);var C=Object(k.a)(100),A=Object(y.a)({form:"MessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(w.a,{name:"message",className:N.a.textarea,placeholder:"enter your message",component:D.b,validate:[k.b,C]}),r.a.createElement("button",{className:N.a.send},"Send"))})),x=function(e){var t=e.DialogsUser.map((function(e){return r.a.createElement(S,{name:e.name,id:e.id})})),a=e.MessageUser.map((function(e){return r.a.createElement(U,{message:e.message})}));return r.a.createElement("div",{className:N.a.content},r.a.createElement("h1",null,"Dialogs"),r.a.createElement("div",{className:N.a.main},r.a.createElement("div",{className:N.a.dialogs},t),r.a.createElement("div",{className:N.a.messages},a,r.a.createElement("div",{className:N.a.form__send},r.a.createElement(A,{onSubmit:function(t){e.newMessage(t)}})))))},T=Object(v.d)(Object(d.b)((function(e){return{DialogsUser:e.DialogsPage.DialogsUser,MessageUser:e.DialogsPage.MessageUser}}),(function(e){return{newMessage:function(t){e(function(e){return{type:"ADD-MESSAGE",message:e}}(t))}}})),(function(e){return Object(d.b)((function(e){return{isAuth:e.Auth.isAuth}}))((function(t){return t.isAuth?r.a.createElement(e,t):r.a.createElement(h.a,{to:"/login"})}))}))(x),F=a(12),I=a.n(F),M=a(22),R=a(13),B={Users:[],page:5,count:10,currentPage:1,isFetching:!1,followInProgress:[]},L=function(e){return{type:"IS_FETCHING",isFetching:e}},G=function(e){return{type:"SET_CURRENT",currentPage:e}},H=function(e){return{type:"FOLLOW",id:e}},W=function(e){return{type:"UNFOLLOW",id:e}},z=function(e){return{type:"SET-USERS",Users:e}},V=function(e){return{type:"SET_USER_TOTAL_COUNT",count:e}},q=function(e,t){return{type:"FOLLOW_PROGRESS",id:e,isFollow:t}},J=function(){var e=Object(M.a)(I.a.mark((function e(t,a,n,r){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(q(a,!0)),e.next=3,r(a);case 3:e.sent,t(n(a)),t(q(a,!1));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;if("FOLLOW"===t.type){var a=Object(E.a)(Object(E.a)({},e),{},{Users:e.Users.map((function(e){return e.id===t.id?Object(E.a)(Object(E.a)({},e),{},{followed:!1}):e}))});return a}if("UNFOLLOW"===t.type){var n=Object(E.a)(Object(E.a)({},e),{},{Users:e.Users.map((function(e){return e.id===t.id?Object(E.a)(Object(E.a)({},e),{},{followed:!0}):e}))});return n}if("SET-USERS"===t.type){var r=Object(E.a)(Object(E.a)({},e),{},{Users:t.Users});return r}if("SET_CURRENT"===t.type)return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.currentPage});if("SET_USER_TOTAL_COUNT"===t.type)return Object(E.a)(Object(E.a)({},e),{},{count:t.count});if("IS_FETCHING"===t.type){var o=Object(E.a)(Object(E.a)({},e),{},{isFetching:t.isFetching});return o}return"FOLLOW_PROGRESS"===t.type?Object(E.a)(Object(E.a)({},e),{},{followInProgress:t.isFollow?[].concat(Object(b.a)(e.followInProgress),[t.id]):e.followInProgress.filter((function(e){return e!==t.id}))}):e},K=a(15),Y=a.n(K);var Q=function(e){var t=e.u,a=e.followInProgress,n=e.Following,o=e.UnFollowing;return r.a.createElement("div",{key:t.id,className:Y.a.main},r.a.createElement("div",{className:Y.a.AvatarkaAndBtn},r.a.createElement(m.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:"https://i2.wp.com/info-4all.ru/images/1f71bd35f30694013d926809865f554d.jpg",alt:"",className:Y.a.ava})),t.followed?r.a.createElement("button",{href:"#",className:Y.a.btn_follow,disabled:a.some((function(e){return e===t.id})),onClick:function(){return n(t.id)}},"UnFollow"):r.a.createElement("button",{href:"#",className:Y.a.btn_follow,disabled:a.some((function(e){return e===t.id})),onClick:function(){return o(t.id)}},"Follow")),r.a.createElement("div",{className:Y.a.info__users},r.a.createElement(m.b,{to:"/profile/"+t.id},r.a.createElement("p",{className:Y.a.name},t.name)),r.a.createElement("p",{className:Y.a.status},null!=t.status?t.status:"no status")),r.a.createElement("div",{className:Y.a.location},r.a.createElement("p",{className:Y.a.city},"u.city",","),r.a.createElement("p",{className:Y.a.country},"u.country")))};var Z=function(e){return r.a.createElement("div",{className:Y.a.block},e.Users.map((function(t){return r.a.createElement(Q,{u:t,followInProgress:e.followInProgress,Following:e.Following,UnFollowing:e.UnFollowing})})))},$=(a(91),a(132)),ee=a.n($),te=function(e){return r.a.createElement("img",{src:ee.a})},ae=function(e){return e.UsersPage.Users},ne=function(e){return e.UsersPage.page},re=function(e){return e.UsersPage.count},oe=function(e){return e.UsersPage.currentPage},se=function(e){return e.UsersPage.isFetching},ie=function(e){return e.UsersPage.followInProgress},ce=a(135),ue=a(0).useState,le=function(e){for(var t=e.count,a=e.page,n=e.currentPage,o=e.onPageChanget,s=e.portSize,i=void 0===s?10:s,c=Math.ceil(t/a),u=[],l=1;l<=c;l++)u.push(l);var m=ue(1),f=Object(ce.a)(m,2),p=f[0],_=f[1],d=Math.ceil(c/i),g=(p-1)*i+1,h=g+i-1;return r.a.createElement("div",null,p>1&&r.a.createElement("button",{onClick:function(){return _(p-1)}},"PREV"),u.filter((function(e){return e>=g&&e<=h})).map((function(e){return r.a.createElement("span",{className:Y.a.number__page},r.a.createElement("span",{className:n===e&&Y.a.bold,onClick:function(){return o(e)}},e))})),d>p&&r.a.createElement("button",{onClick:function(){return _(p+1)}},"NEXT"))},me=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanget=function(t){e.props.onPageChanget(t,e.props.currentPage,e.props.page)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.GetUsersThunk(this.props.currentPage,this.props.page)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(le,{count:this.props.count,page:this.props.page,currentPage:this.props.currentPage,onPageChanget:this.onPageChanget}),this.props.isFetching?r.a.createElement(te,null):r.a.createElement(Z,{count:this.props.count,page:this.props.page,currentPage:this.props.currentPage,onPageChanget:this.onPageChanget,Users:this.props.Users,Follow:this.props.Follow,UnFollow:this.props.UnFollow,followInProgress:this.props.followInProgress,isFollow:this.props.isFollow,Following:this.props.Following,UnFollowing:this.props.UnFollowing}))}}]),a}(r.a.Component),fe=Object(d.b)((function(e){return{Users:ae(e),page:ne(e),count:re(e),currentPage:oe(e),isFetching:se(e),followInProgress:ie(e)}}),(function(e){return{Follow:function(t){e(H(t))},UnFollow:function(t){e(W(t))},SetUsers:function(t){e(z(t))},SetCurrent:function(t){e(G(t))},SetUsersTotalCountAC:function(t){e(V(t))},isFetchingAC:function(t){e(L(t))},isFollow:function(t,a){e(q(t,a))},GetUsersThunk:function(t,a){e(function(e,t){return function(a){a(L(!0)),R.b.getUsers(e,t).then((function(e){a(L(!1)),a(z(e.items)),a(V(e.totalCount))}))}}(t,a))},onPageChanget:function(t,a,n){e(function(e,t,a){return function(){var n=Object(M.a)(I.a.mark((function n(r){var o;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(L(!0)),r(G(e)),n.next=4,R.b.getUsers(t,a);case 4:o=n.sent,r(L(!1)),r(z(o.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,a,n))},Following:function(t){e(function(e){return function(){var t=Object(M.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:J(a,e,H,R.b.follow.bind(R.b));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},UnFollowing:function(t){e(function(e){return function(){var t=Object(M.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:J(a,e,W,R.b.unFollow.bind(R.b));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(me),pe=a(29),_e={PostUser:[{id:1,post:"Priv",likecount:2},{id:2,post:"opyat \u0434\u0440\u043e\u0447\u0435\u0448\u044c",likecount:0},{id:3,post:"skolko mozhno, Max",likecount:66}],profile:null,status:""},de=function(e){return{type:"SET_USERS_PROFILE",profile:e}},ge=function(e){return{type:"SET_STATUS_USER",status:e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;if("ADD-POST"===t.type){if(""===e.onPostChange)return alert("\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435");var a={id:5,post:t.textPost.newPost,likecount:0};return Object(E.a)(Object(E.a)({},e),{},{PostUser:[].concat(Object(b.a)(e.PostUser),[a])})}return"SET_USERS_PROFILE"===t.type?Object(E.a)(Object(E.a)({},e),{},{profile:t.profile}):"SET_STATUS_USER"===t.type?Object(E.a)(Object(E.a)({},e),{},{status:t.status}):e},ve=[{id:1,avatarka:"https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",name:"Max"},{id:1,avatarka:"https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",name:"Vika"},{id:1,avatarka:"https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",name:"Masha"}],be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve;return e},Ee=a(133),Oe=a(129),Pe={inition:!1},we="INITIALED",je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(E.a)(Object(E.a)({},e),{},{inition:!0});default:return e}},Ne={propertyValue:0,initialPayment:0,creditTerm:0,interestRates:0,monthlyPayment:0,requiredIncome:0,overpayment:0,bodyCredit:0},Se="CHANGE_PROPERTY_VALUE",Ue="CHANGE_INITIAL_PAYMENT",ye="CHANGE_CREDIT_TERM",De="CHANGE_INTEREST_RATES",ke="SAVE",Ce="CLEAR",Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(E.a)(Object(E.a)({},e),{},{propertyValue:t.propertyValue});case Ue:return Object(E.a)(Object(E.a)({},e),{},{initialPayment:t.initialPayment});case ye:return Object(E.a)(Object(E.a)({},e),{},{creditTerm:t.creditTerm});case De:return Object(E.a)(Object(E.a)({},e),{},{interestRates:t.interestRates});case ke:return Object(E.a)({},e);case Ce:return Object(E.a)(Object(E.a)({},e),{},{propertyValue:0,initialPayment:0,creditTerm:0,interestRates:0});default:return e}},xe=Object(v.c)({ProfilePage:he,DialogsPage:P,Sidebar:be,UsersPage:X,Auth:pe.b,form:Oe.a,App:je,News:Ae}),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,Fe=Object(v.e)(xe,Te(Object(v.a)(Ee.a)));window.store=Fe;var Ie=Fe,Me=a(73),Re=a.n(Me),Be=a(74),Le=a.n(Be);var Ge=function(e){return r.a.createElement("div",{className:Le.a.post},r.a.createElement("img",{src:"https://archilab.online/images/1/123.jpg",className:Le.a.ava_user}),r.a.createElement("p",null,e.post),r.a.createElement("div",{className:Le.a.like},"Like: ",e.likecount))},He=Object(k.a)(15);var We=Object(y.a)({form:"post"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(w.a,{className:Re.a.Field,name:"newPost",component:D.b,validate:[k.b,He]}),r.a.createElement("br",null),r.a.createElement("button",{className:Re.a.send},"Send"))})),ze=function(e){console.log("render my posts");var t=e.PostUser.map((function(e){return r.a.createElement(Ge,{post:e.post,key:e.id,likecount:e.likecount})}));return r.a.createElement("div",{className:Re.a.myposts},r.a.createElement("p",null,"My posts"),r.a.createElement(We,{onSubmit:function(t){e.sendPost(t)}}),t)},Ve=Object(d.b)((function(e){return{PostUser:e.ProfilePage.PostUser}}),(function(e){return{sendPost:function(t){e(function(e){return{type:"ADD-POST",textPost:e}}(t))}}}))(ze),qe=a(134),Je=a.n(qe),Xe=a(32),Ke=a.n(Xe),Ye=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={editMod:!1,localStatus:e.props.status},e.switchStatusOn=function(){e.setState({editMod:!0})},e.switchStatusOff=function(){e.setState({editMod:!1}),e.props.updateStatus(e.state.localStatus)},e.onChangeStatus=function(t){e.setState({localStatus:t.currentTarget.value})},e.postStatus=function(){e.props.updateStatus(e.state.localStatus)},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({localStatus:this.props.status})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.editMod?r.a.createElement("div",null,r.a.createElement("textarea",{onBlur:this.switchStatusOff,autoFocus:!0,onChange:this.onChangeStatus,value:this.state.localStatus}),r.a.createElement("button",{onClick:this.postStatus},"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")):r.a.createElement("div",{onClick:this.switchStatusOn,className:Ke.a.status},this.props.status||"no status"))}}]),a}(r.a.Component);var Qe=function(e){return e.profile?r.a.createElement("div",null,r.a.createElement("div",{className:Ke.a.about},r.a.createElement("div",{className:Ke.a.about__your},r.a.createElement("div",{className:Ke.a.ava},null===e.profile.photos.large?r.a.createElement("img",{src:"https://i2.wp.com/info-4all.ru/images/1f71bd35f30694013d926809865f554d.jpg",alt:"",className:Ke.a.ava__img}):r.a.createElement("img",{src:e.profile.photos.large,alt:"",className:Ke.a.ava__img})),r.a.createElement("div",{className:Ke.a.about__your__main},r.a.createElement("div",{className:Ke.a.name},e.profile.fullName),r.a.createElement(Ye,{status:e.status,updateStatus:e.updateStatus}))))):r.a.createElement(te,null)};var Ze=function(e){return r.a.createElement("section",{className:Je.a.profile},r.a.createElement(Qe,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(Ve,{store:e.store}))},$e=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.idUser;if(e)this.props.getProfileUser(e);else{var t=this.props.myID;this.props.getProfileUser(t)}this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(Ze,this.props)}}]),a}(r.a.Component),et=Object(v.d)(Object(d.b)((function(e){return{status:e.ProfilePage.status,myID:e.Auth.id,profile:e.ProfilePage.profile}}),{SetUsersProfile:de,getProfileUser:function(e){return function(){var t=Object(M.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.b.getProfileUser(e);case 2:n=t.sent,a(de(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(M.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.a.getStatusUser(e);case 2:n=t.sent,a(ge(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(M.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.a.updateStatus(e);case 2:t.sent,a(ge(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),h.f)($e),tt=a(44),at=a.n(tt);var nt=function(e){return r.a.createElement("header",{className:at.a.header},r.a.createElement("h1",{className:at.a.header__karen},"social programmers"),e.isAuth?r.a.createElement("div",{className:at.a.main__auth},r.a.createElement(m.b,{to:"/profile",className:at.a.auth},e.login),r.a.createElement("button",{onClick:e.logout,className:at.a.auth__btn},"Loguot")):r.a.createElement(m.b,{to:"/login",className:at.a.auth},"Login Helllooo"))},rt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(nt,this.props)}}]),a}(r.a.Component),ot=Object(d.b)((function(e){return{login:e.Auth.login,isAuth:e.Auth.isAuth}}),{SetAuth:pe.a,getOurUser:pe.c,logout:pe.e})(rt),st=a(43),it=a.n(st),ct=Object(y.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},e.error&&r.a.createElement("div",{className:it.a.main__error},e.error),r.a.createElement("div",null,r.a.createElement(w.a,{name:"login",placeholder:"login",component:D.a,validate:[k.b]})),r.a.createElement("div",null,r.a.createElement(w.a,{name:"password",placeholder:"password",component:D.a,validate:[k.b]})),r.a.createElement("div",null,r.a.createElement(w.a,{name:"checkbox",type:"checkbox",component:"input"})," remember me"),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),ut=Object(d.b)((function(e){return{auth:e.Auth.isAuth}}),{login:pe.d})((function(e){return!0===e.auth?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(ct,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}}))})),lt=r.a.lazy((function(){return a.e(4).then(a.bind(null,291))})),mt=r.a.lazy((function(){return a.e(3).then(a.bind(null,292))})),ft=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.InitialApp()}},{key:"render",value:function(){var e=this;return this.props.inition?r.a.createElement(m.a,null,r.a.createElement("div",{className:"main"},r.a.createElement(ot,null),r.a.createElement("div",{className:"content"},r.a.createElement(_,null),r.a.createElement(h.b,{path:"/Profile/:idUser?",render:function(){return r.a.createElement(et,{store:e.props.store})}}),r.a.createElement(h.b,{path:"/Dialogs",render:function(){return r.a.createElement(T,{store:e.props.store})}}),r.a.createElement(h.b,{path:"/login",render:function(){return r.a.createElement(ut,null)}}),r.a.createElement(h.b,{path:"/News",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading")},r.a.createElement(lt,null))}}),r.a.createElement(h.b,{path:"/Music",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading")},r.a.createElement(mt,null))}}),r.a.createElement(h.b,{path:"/Settings",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(h.b,{path:"/Users",render:function(){return r.a.createElement(fe,{store:e.props.store})}})))):r.a.createElement(te,null)}}]),a}(r.a.Component),pt=Object(v.d)(Object(d.b)((function(e){return{inition:e.App.inition}}),{InitialApp:function(){return function(e){var t=e(Object(pe.c)());Promise.all([t]).then((function(){return e({type:we})}))}}}))(ft),_t=function(e){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:Ie},r.a.createElement(pt,e)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_t,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return f})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return _}));var n=a(12),r=a.n(n),o=a(22),s=a(4),i=a(36),c=a(13),u={id:null,email:null,login:null,isAuth:!1},l="IS_AUTH",m=function(e,t,a,n){return{type:l,payload:{id:e,email:t,login:a,isAuth:n}}},f=function(){return function(e){return c.b.getOurUser().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,r=a.email,o=a.login;e(m(n,r,o,!0))}}))}},p=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var n=Object(o.a)(r.a.mark((function n(o){var s,u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.b.login(e,t,a);case 2:0===(s=n.sent).data.resultCode?o(f()):(u=s.data.messages.length>0?s.data.messages[0]:"some error",o(Object(i.a)("login",{_error:u})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b.logout();case 2:0===e.sent.data.resultCode&&t(m(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}},32:function(e,t,a){e.exports={banner:"ProfileInfo_banner__1hfrF",about:"ProfileInfo_about__3iB3O",about__your:"ProfileInfo_about__your__3-wi7",ava:"ProfileInfo_ava__1GWrz",ava__img:"ProfileInfo_ava__img__26OKz",about__your__main:"ProfileInfo_about__your__main__224eB",name:"ProfileInfo_name__3REcW",dataBirth:"ProfileInfo_dataBirth__3qP_b",city:"ProfileInfo_city__ldJDk",edication:"ProfileInfo_edication__3OPjF",site:"ProfileInfo_site__20iJI",posts:"ProfileInfo_posts__3584F",status:"ProfileInfo_status__JisL2"}},33:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));a(0);var n=function(e){if(!e)return"fill in the field"},r=function(e){return function(t){if(t.length>e)return"maximum length ".concat(e)}}},41:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),o=a(43),s=a.n(o),i=function(e){var t=e.meta.touched&&e.meta.error;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({},e.input,{className:t?s.a.error__textarea:""}))),r.a.createElement("div",null,t&&r.a.createElement("span",{className:s.a.error__span},e.meta.error)))},c=function(e){var t=e.meta.touched&&e.meta.error;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",Object.assign({},e.input,e,{className:t?s.a.error__textarea:""}))),r.a.createElement("div",null,t&&r.a.createElement("span",{className:s.a.error__span},e.meta.error)))}},43:function(e,t,a){e.exports={error__textarea:"Textarea_error__textarea__1XPxm",error__span:"Textarea_error__span__9ZhLR",main__error:"Textarea_main__error__3zLbM"}},44:function(e,t,a){e.exports={header:"Header_header__b-0vY",header__karen:"Header_header__karen__3fhyA",main__auth:"Header_main__auth__2EaTU",auth:"Header_auth__BK54q",auth__btn:"Header_auth__btn__qA_Kq"}},73:function(e,t,a){e.exports={textarea:"MyPosts_textarea__2r6hw",send:"MyPosts_send__3kS6o"}},74:function(e,t,a){e.exports={ava_user:"Post_ava_user__2kRuz",post:"Post_post__bBK4D"}}},[[161,1,2]]]);
//# sourceMappingURL=main.f9f73437.chunk.js.map