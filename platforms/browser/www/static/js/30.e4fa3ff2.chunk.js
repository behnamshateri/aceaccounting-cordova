(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{453:function(e,a,t){},965:function(e,a,t){"use strict";t.r(a);var n=t(6),s=t(7),i=t(13),l=t(11),r=t(12),o=t(0),c=t.n(o),m=t(984),d=t(411),u=(t(453),t(85)),h=t.n(u),p=t(425),f=t.n(p),b=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(l.a)(a).call(this,e))).state={fields:{email:""},errors:{}},t}return Object(r.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){var a=this.state.fields;a[e.target.name]=e.target.value,this.setState({fields:a})}},{key:"handleValidation",value:function(e){var a=this.state.fields,t={},n=!0;f.a.isEmpty(a.email)?(n=!1,t.email="Email address can't be empty."):f.a.isEmail(a.email)||(n=!1,t.email="Email address is invalid."),this.setState({errors:t},function(){return e(n)})}},{key:"handlesubmit",value:function(e){e.preventDefault(),this.handleValidation(function(e){e&&console.log("forgetpass word")})}},{key:"render",value:function(){return c.a.createElement("div",{className:"col-xs-12 no-horizantal"},c.a.createElement("div",{className:"col-xs-12 main-div"},c.a.createElement("div",{className:"form-signin-or-up-container"},c.a.createElement("h1",{className:"text-center colored-header-box"},"Forgot your password?"),c.a.createElement("form",{className:"register-form",onSubmit:this.handlesubmit.bind(this)},c.a.createElement(m.a,{type:"text",className:"sign-up-form",value:this.state.fields.email,placeholder:"Email address",name:"email",onChange:this.handleChange.bind(this)}),this.state.errors.email?c.a.createElement("span",{className:"input-errors"},this.state.errors.email):null,c.a.createElement(h.a,{variant:"contained",color:"primary",className:"submit-btn",type:"submit"},"Reset password")),c.a.createElement("div",{className:"col-xs-12 no-horizantal go-to-login text-center"},c.a.createElement("span",null,"Remember your password? "),c.a.createElement("span",null,c.a.createElement(d.a,{to:"/login"},"Log in"))))))}}]),a}(o.Component);a.default=b}}]);
//# sourceMappingURL=30.e4fa3ff2.chunk.js.map