(this["webpackJsonpchem-cash"]=this["webpackJsonpchem-cash"]||[]).push([[1],{54:function(e,t,a){"use strict";var n=a(17),r=a(18),o=a(20),s=a(19),c=a(0),l=a.n(c),u=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.errors;return e?l.a.createElement("ul",{className:"error-messages"},Object.keys(e).map((function(t){return l.a.createElement("li",{key:t},t," ",e[t])}))):null}}]),a}(l.a.PureComponent);t.a=u},56:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(18),o=a(20),s=a(19),c=a(12),l=a(11),u=a(54),i=a(0),m=a.n(i),p=a(14),h=a(1),f=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).changeEmail=function(t){return e.props.onChangeEmail(t.target.value)},e.changePassword=function(t){return e.props.onChangePassword(t.target.value)},e.submitForm=function(t,a){return function(n){n.preventDefault(),e.props.onSubmit(t,a)}},e}return Object(r.a)(a,[{key:"componentWillUnmount",value:function(){this.props.onUnload()}},{key:"render",value:function(){var e=this.props.email,t=this.props.password;return m.a.createElement("div",{className:"auth-page"},m.a.createElement("div",{className:"container page"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},m.a.createElement("h1",{className:"text-xs-center"},"Sign In"),m.a.createElement("p",{className:"text-xs-center"},m.a.createElement(l.a,{to:"/register"},"Need an account?")),m.a.createElement(u.a,{errors:this.props.errors}),m.a.createElement("form",{onSubmit:this.submitForm(e,t)},m.a.createElement("fieldset",null,m.a.createElement("fieldset",{className:"form-group"},m.a.createElement("input",{className:"form-control form-control-lg",autoComplete:"username",type:"email",placeholder:"Email",value:e||"",onChange:this.changeEmail})),m.a.createElement("fieldset",{className:"form-group"},m.a.createElement("input",{className:"form-control form-control-lg",type:"password",autoComplete:"current-password",placeholder:"Password",value:t||"",onChange:this.changePassword})),m.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:this.props.inProgress},"Sign in")))))))}}]),a}(m.a.PureComponent);t.default=Object(c.c)((function(e){return e.auth}),(function(e){return{onChangeEmail:function(t){return e({type:h.n,key:"email",value:t})},onChangePassword:function(t){return e({type:h.n,key:"password",value:t})},onSubmit:function(t,a){return e({type:h.f,payload:p.a.Auth.login(t,a)})},onUnload:function(){return e({type:h.g})}}}))(f)}}]);
//# sourceMappingURL=Login.0ce8df14.chunk.js.map