(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{454:function(e,t,n){},991:function(e,t,n){"use strict";n.r(t);var a=n(6),o=n(7),r=n(13),i=n(11),s=n(12),l=n(56),c=n(0),u=n.n(c),m=n(85),h=n.n(m),p=n(1),b=n.n(p),d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},v=function(e){function t(){return d(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c["Component"]),f(t,[{key:"render",value:function(){var e=this.props,t=e.cdnUrl,n=e.code,a=e.styleProps,o=e.svg,r=""+t+n.toLowerCase()+".svg",i=n.toUpperCase().replace(/./g,function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)});return o?u.a.createElement("span",{"aria-label":n,role:"img",style:g({position:"relative",display:"inline-block",width:"1.3333333333em",height:"1em",backgroundImage:"url("+r+")",backgroundPosition:"50%",backgroundRepeat:"no-repeat",backgroundSize:"contain",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},a),title:n}):u.a.createElement("span",{"aria-label":n,role:"img",style:g({verticalAlign:"middle"},a),title:n},i)}}]),t}();v.propTypes={cdnUrl:b.a.string,code:b.a.string.isRequired,styleProps:b.a.object,svg:b.a.bool},v.defaultProps={cdnUrl:"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/",svg:!1};var P=v,S=n(425),O=n.n(S),C=(n(454),n(499)),E=n.n(C),N=(n(494),n(51)),x=n.n(N),k=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={country:localStorage.getItem("country"),CountryCode:localStorage.getItem("countryCode"),isLogin:!0,Phonenumber:localStorage.getItem("phonenumber"),OldPhonenumber:localStorage.getItem("phonenumber"),changePhoneNumber:!1,error:"",PhoneValidate:!1,CountryISO2:localStorage.getItem("countryISO2"),CountryNameFormISO2:"",ChangePhoneNumberError:"",SubmitSuccuss:!1},n.myRef=u.a.createRef(),n.vm=x.a.react.connect("MobileVerfication",Object(l.a)(Object(l.a)(n))),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"handlePhone",value:function(e,t){console.log(e),O.a.isNumeric(t)&&this.setState({Phonenumber:t,PhoneValidate:e}),0===t.length&&this.setState({Phonenumber:"",PhoneValidate:!1})}},{key:"BackToOtp",value:function(){this.props.history.push({pathname:"/phone-confirmation"})}},{key:"handleValidation",value:function(e){var t=this.state,n=t.Phonenumber,a=t.error,o=!0;O.a.isEmpty(n)?(o=!1,a="phone number can't be empty."):O.a.isLength(n,{min:3,max:void 0})?O.a.isNumeric(n)?this.state.PhoneValidate||(o=!1,a="Phone number is not compatible."):(o=!1,a="Phone number only must contain number."):(o=!1,a="Phone number is invalid."),this.setState({error:a},function(){return e(o)})}},{key:"handlesubmit",value:function(e){var t=this;e.preventDefault(),this.handleValidation(function(e){e?t.vm.$dispatch({ChangePhone:{newPhone:t.state.Phonenumber,oldPhone:t.state.OldPhonenumber,countryISO2:t.state.CountryISO2}}):console.log("its not valid")})}},{key:"componentDidUpdate",value:function(e){this.state.SubmitSuccuss!==e.SubmitSuccuss&&this.state.SubmitSuccuss&&(localStorage.setItem("phonenumber",this.state.Phonenumber),this.props.history.push({pathname:"/signup-phone-verification"}))}},{key:"componentWillUnmount",value:function(){this.vm.$destroy()}},{key:"render",value:function(){var e=this.state.CountryISO2;return u.a.createElement("div",{className:"col-xs-12 no-horizantal edit-Signup-Mobile_phone"},u.a.createElement("div",{className:"col-xs-12 main-div"},u.a.createElement("div",{className:"form-signin-or-up-container"},u.a.createElement("h1",{className:"text-center colored-header-box"},"Please Verify Your number"),u.a.createElement("form",{className:"register-form verifynumber",onSubmit:this.handlesubmit.bind(this)},u.a.createElement("div",{className:"col-xs-12 no-horizantal "},u.a.createElement(P,{styleProps:{width:"20px",height:"20px",left:"5px",position:"absolute"},code:"".concat(e),svg:!0}),u.a.createElement("span",{className:"col-xs-12 no-horizantal text-right",style:{marginBottom:"15px"}},this.state.country+"( "+this.state.CountryCode+" ) ")),u.a.createElement("div",{className:"clearfix"}),u.a.createElement("div",{className:"col-xs-12 no-horizantal"},e?u.a.createElement(E.a,{preferredCountries:[e.toLowerCase()],onPhoneNumberChange:this.handlePhone.bind(this),separateDialCode:!0,value:this.state.Phonenumber,fieldName:"phonenumber",fieldId:"phonenumber"}):null),this.state.error?u.a.createElement("span",{className:"input-errors"},this.state.error):null,this.state.ChangePhoneNumberError?u.a.createElement("span",{className:"input-errors text-center",style:{marginTop:"15px",marginBottom:"-10px"}},this.state.ChangePhoneNumberError):null,u.a.createElement(h.a,{variant:"contained",color:"primary",className:"submit-btn",type:"submit"},"Continue"),u.a.createElement("div",{className:"text-center changenumber"},u.a.createElement(h.a,{color:"primary",className:"change-phone-number",onClick:this.BackToOtp.bind(this)},"Back"))))))}}]),t}(c.Component);t.default=k}}]);
//# sourceMappingURL=29.1f2a9410.chunk.js.map