(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{453:function(e,t,a){},964:function(e,t,a){"use strict";a.r(t);var n=a(6),s=a(7),r=a(13),i=a(11),o=a(12),l=a(56),m=a(0),u=a.n(m),c=a(499),h=a.n(c),d=(a(494),a(453),a(716)),p=a.n(d),f=a(984),y=a(411),b=a(85),v=a.n(b),C=a(425),g=a.n(C),S=a(41),E=a(35),N=a(51),w=a.n(N),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).vm=w.a.react.connect("SignUp",Object(l.a)(Object(l.a)(a)),{vmArg:{CountryISO2:"nl"}}),a.state={valid:"",validation:!0,countryName:"",flag:"",countryCode:"",country_code_ios2:"",phoneValidate:!1,fields:{firstname:"",lastname:"",email:"",password:"",phonenumber:""},errors:{},SubmitErrors:"",SubmitSuccuss:!1,WhatsMyInfo:{CountryCodeISO2:"",CountryName:"",CountryCodePhone:0,ExternalIPAddress:""}},a.myRef=u.a.createRef(),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=this.state.fields;t[e.target.name]=e.target.value,this.setState({fields:t})}},{key:"handleValidation",value:function(e){var t=this.state.fields,a={},n=!0;g.a.isEmpty(t.firstname)?(n=!1,a.firstname="First name can't be empty."):g.a.isLength(t.firstname,{min:3,max:void 0})||(n=!1,a.firstname="First name must be more than 3 character."),g.a.isEmpty(t.lastname)?(n=!1,a.lastname="Last name address can't be empty."):g.a.isLength(t.lastname,{min:3,max:void 0})||(n=!1,a.lastname="Last name must be more than 3 character."),g.a.isEmpty(t.email)?(n=!1,a.email="Email address can't be empty."):g.a.isEmail(t.email)||(n=!1,a.email="Email address is invalid."),g.a.isEmpty(t.password)?(n=!1,a.password="Password can't be empty."):g.a.isLength(t.password,{min:6,max:void 0})||(n=!1,a.password="Email must be more than 6 character."),g.a.isEmpty(t.phonenumber)?(n=!1,a.phonenumber="Phone number can't be empty."):g.a.isLength(t.phonenumber,{min:3,max:void 0})?g.a.isNumeric(t.phonenumber)?this.state.phoneValidate||(n=!1,a.phonenumber="Phone number is not compatible."):(n=!1,a.phonenumber="Phone number only must contain number."):(n=!1,a.phonenumber="Phone number is invalid."),this.setState({errors:a},function(){return e(n)})}},{key:"handlesubmit",value:function(e){var t=this;e.preventDefault(),this.handleValidation(function(e){if(e){var a=t.state,n=a.fields,s=a.country_code_ios2,r=a.WhatsMyInfo;t.vm.$dispatch({Submit:{firstname:n.firstname,lastname:n.lastname,email:n.email,phone:n.phonenumber,password:n.password,userCountryISO2:s||r.CountryCodeISO2}})}})}},{key:"componentDidUpdate",value:function(e){if(this.state.SubmitSuccuss!==e.SubmitSuccuss&&this.state.SubmitSuccuss){var t=this.state.WhatsMyInfo;localStorage.setItem("phonenumber",this.state.fields.phonenumber),localStorage.setItem("country",this.state.countryName||t.CountryName),localStorage.setItem("countryISO2",this.state.flag||t.CountryCodeISO2),localStorage.setItem("countryCode",this.state.countryCode||t.CountryCodePhone),this.props.history.push("/signup-phone-verification")}}},{key:"handlePhone",value:function(e,t){var a=this.state.fields;a.phonenumber=t,this.setState({fields:a,phoneValidate:e})}},{key:"handler",value:function(e,t){e?this.setState({valid:!0}):this.setState({valid:!1})}},{key:"isValid",value:function(){this.state.valid?this.setState({validation:!0}):this.setState({validation:!1})}},{key:"selectcountry",value:function(e,t){this.myRef.current.state.value="",this.setState({countryCode:this.myRef.current.selectedCountryData.dialCode,countryName:this.myRef.current.selectedCountryData.name,flag:this.myRef.current.selectedCountryData.iso2,valid:!1,country_code_ios2:t.iso2})}},{key:"_handleChangepasswordCallBack",value:function(e){this.state.fields.password=e.password}},{key:"componentWillUnmount",value:function(){this.vm.$destroy()}},{key:"render",value:function(){var e=this.state.fields,t=e.firstname,a=e.lastname,n=e.email;return u.a.createElement("div",{className:"col-xs-12 no-horizantal"},u.a.createElement("div",{className:"col-xs-12 main-div"},u.a.createElement("div",{className:"form-signin-or-up-container"},u.a.createElement("h1",{className:"text-center colored-header-box"},"Create your account"),u.a.createElement("form",{className:"register-form",onSubmit:this.handlesubmit.bind(this)},u.a.createElement(f.a,{type:"text",value:t,className:"sign-up-form",placeholder:"First Name",onChange:this.handleChange.bind(this),name:"firstname"}),this.state.errors.firstname?u.a.createElement("span",{className:"input-errors"},this.state.errors.firstname):null,u.a.createElement(f.a,{type:"text",value:a,className:"sign-up-form",placeholder:"Last Name",onChange:this.handleChange.bind(this),name:"lastname"}),this.state.errors.lastname?u.a.createElement("span",{className:"input-errors"},this.state.errors.lastname):null,u.a.createElement(f.a,{type:"text",className:"sign-up-form",value:n,placeholder:"Email address",onChange:this.handleChange.bind(this),name:"email"}),this.state.errors.email?u.a.createElement("span",{className:"input-errors"},this.state.errors.email):null,u.a.createElement(p.a,{style:{marginBottom:"8px",borderRadius:"4px"},minLength:0,scoreWords:["Weak","Good","Strong","Secure"],changeCallback:this._handleChangepasswordCallBack.bind(this),inputProps:{name:"password",autoComplete:"off",className:"form-control sign-up-form",placeholder:"Password"}}),this.state.errors.password?u.a.createElement("span",{className:"input-errors"},this.state.errors.password):null,this.state.WhatsMyInfo.CountryCodeISO2?u.a.createElement(h.a,{ref:this.myRef,onPhoneNumberBlur:this.isValid.bind(this),preferredCountries:[this.state.WhatsMyInfo.CountryCodeISO2.toLowerCase()],onPhoneNumberChange:this.handlePhone.bind(this),onSelectFlag:this.selectcountry.bind(this),separateDialCode:!0,fieldName:"phonenumber",fieldId:"phonenumber"}):null,this.state.errors.phonenumber?u.a.createElement("span",{className:"input-errors"},this.state.errors.phonenumber):null,this.state.SubmitErrors?u.a.createElement("span",{className:"input-errors text-center",style:{marginTop:"15px",marginBottom:"-10px"}},this.state.SubmitErrors):null,u.a.createElement(v.a,{variant:"contained",color:"primary",className:"submit-btn",type:"submit"},"Create account")),u.a.createElement("div",{className:"col-xs-12 no-horizantal go-to-login text-center"},u.a.createElement("span",null,"Already have an account? "),u.a.createElement("span",null,u.a.createElement(y.a,{to:"/login"},"Log in"))))))}}]),t}(m.Component);t.default=Object(S.b)(null,{HandleSignup:E.f})(x)}}]);
//# sourceMappingURL=31.e953d5a0.chunk.js.map