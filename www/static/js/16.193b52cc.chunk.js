(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{421:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=function(t){return l.default.createElement(i.default.Consumer,null,function(a){return l.default.createElement(e,(0,o.default)({muiFormControl:a},t))})};0;return(0,r.default)(t,e),t};var o=n(a(3)),l=n(a(0)),r=n(a(57)),i=n(a(423));a(46)},423:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)).default.createContext();t.default=o},427:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(3)),l=n(a(14)),r=n(a(4)),i=n(a(0)),s=(n(a(1)),n(a(8))),c=n(a(421)),u=n(a(9)),d=n(a(86)),m=a(36),h=function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-14,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-14},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}};function p(e){e.checked;var t,a=e.classes,n=e.className,c=e.control,u=e.disabled,h=(e.inputRef,e.label),p=e.labelPlacement,f=e.muiFormControl,b=(e.name,e.onChange,e.value,(0,r.default)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","muiFormControl","name","onChange","value"])),v=u;"undefined"===typeof v&&"undefined"!==typeof c.props.disabled&&(v=c.props.disabled),"undefined"===typeof v&&f&&(v=f.disabled);var y={disabled:v};return["checked","name","onChange","value","inputRef"].forEach(function(t){"undefined"===typeof c.props[t]&&"undefined"!==typeof e[t]&&(y[t]=e[t])}),i.default.createElement("label",(0,o.default)({className:(0,s.default)(a.root,(t={},(0,l.default)(t,a["labelPlacement".concat((0,m.capitalize)(p))],"end"!==p),(0,l.default)(t,a.disabled,v),t),n)},b),i.default.cloneElement(c,y),i.default.createElement(d.default,{component:"span",className:(0,s.default)(a.label,(0,l.default)({},a.disabled,v))},h))}t.styles=h,p.propTypes={},p.defaultProps={labelPlacement:"end"};var f=(0,u.default)(h,{name:"MuiFormControlLabel"})((0,c.default)(p));t.default=f},428:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(3)),l=n(a(14)),r=n(a(4)),i=n(a(0)),s=(n(a(1)),n(a(8))),c=n(a(435)),u=n(a(442)),d=n(a(443)),m=n(a(444)),h=a(36),p=n(a(9)),f=function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.action.disabled}}}};function b(e){var t=e.checkedIcon,a=e.classes,n=e.className,u=e.color,d=e.icon,m=e.indeterminate,p=e.indeterminateIcon,f=e.inputProps,b=(0,r.default)(e,["checkedIcon","classes","className","color","icon","indeterminate","indeterminateIcon","inputProps"]);return i.default.createElement(c.default,(0,o.default)({type:"checkbox",checkedIcon:m?p:t,className:(0,s.default)((0,l.default)({},a.indeterminate,m),n),classes:{root:(0,s.default)(a.root,a["color".concat((0,h.capitalize)(u))]),checked:a.checked,disabled:a.disabled},inputProps:(0,o.default)({"data-indeterminate":m},f),icon:m?p:d},b))}t.styles=f,b.propTypes={},b.defaultProps={checkedIcon:i.default.createElement(d.default,null),color:"secondary",icon:i.default.createElement(u.default,null),indeterminate:!1,indeterminateIcon:i.default.createElement(m.default,null)};var v=(0,p.default)(f,{name:"MuiCheckbox"})(b);t.default=v},435:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(3)),l=n(a(14)),r=n(a(4)),i=n(a(16)),s=n(a(17)),c=n(a(18)),u=n(a(19)),d=n(a(20)),m=n(a(0)),h=(n(a(1)),n(a(8))),p=n(a(421)),f=n(a(9)),b=n(a(110)),v={root:{display:"inline-flex",alignItems:"center",transition:"none","&:hover":{backgroundColor:"transparent"}},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0}};t.styles=v;var y=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,c.default)(this,(0,u.default)(t).call(this))).handleFocus=function(e){a.props.onFocus&&a.props.onFocus(e);var t=a.props.muiFormControl;t&&t.onFocus&&t.onFocus(e)},a.handleBlur=function(e){a.props.onBlur&&a.props.onBlur(e);var t=a.props.muiFormControl;t&&t.onBlur&&t.onBlur(e)},a.handleInputChange=function(e){var t=e.target.checked;a.isControlled||a.setState({checked:t}),a.props.onChange&&a.props.onChange(e,t)},a.isControlled=null!=e.checked,a.state={},a.isControlled||(a.state.checked=void 0!==e.defaultChecked&&e.defaultChecked),a}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.autoFocus,n=t.checked,i=t.checkedIcon,s=t.classes,c=t.className,u=t.defaultChecked,d=t.disabled,p=t.icon,f=t.id,v=t.inputProps,y=t.inputRef,g=t.muiFormControl,C=t.name,E=(t.onBlur,t.onChange,t.onFocus,t.readOnly),k=t.required,N=t.tabIndex,P=t.type,S=t.value,I=(0,r.default)(t,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","muiFormControl","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),x=d;g&&"undefined"===typeof x&&(x=g.disabled);var w=this.isControlled?n:this.state.checked,O="checkbox"===P||"radio"===P;return m.default.createElement(b.default,(0,o.default)({component:"span",className:(0,h.default)(s.root,(e={},(0,l.default)(e,s.checked,w),(0,l.default)(e,s.disabled,x),e),c),disabled:x,tabIndex:null,role:void 0,onFocus:this.handleFocus,onBlur:this.handleBlur},I),w?i:p,m.default.createElement("input",(0,o.default)({autoFocus:a,checked:n,defaultChecked:u,className:s.input,disabled:x,id:O&&f,name:C,onChange:this.handleInputChange,readOnly:E,ref:y,required:k,tabIndex:N,type:P,value:S},v)))}}]),t}(m.default.Component);y.propTypes={};var g=(0,f.default)(v,{name:"MuiPrivateSwitchBase"})((0,p.default)(y));t.default=g},442:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(181)),r=n(a(107)),i=o.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),s=function(e){return o.default.createElement(r.default,e,i)};(s=(0,l.default)(s)).muiName="SvgIcon";var c=s;t.default=c},443:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(181)),r=n(a(107)),i=o.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),s=function(e){return o.default.createElement(r.default,e,i)};(s=(0,l.default)(s)).muiName="SvgIcon";var c=s;t.default=c},444:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(181)),r=n(a(107)),i=o.default.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),s=function(e){return o.default.createElement(r.default,e,i)};(s=(0,l.default)(s)).muiName="SvgIcon";var c=s;t.default=c},453:function(e,t,a){},503:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(427))},504:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(428))},963:function(e,t,a){"use strict";a.r(t);var n=a(6),o=a(7),l=a(13),r=a(11),i=a(12),s=a(56),c=a(0),u=a.n(c),d=a(984),m=a(411),h=a(85),p=a.n(h),f=a(504),b=a.n(f),v=(a(453),a(503)),y=a.n(v),g=(a(494),a(425)),C=a.n(g),E=a(35),k=a(41),N=a(499),P=a.n(N),S=a(24),I=a(65),x=a(51),w=a.n(x),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).vm=w.a.react.connect("Login",Object(s.a)(Object(s.a)(a)),{base_url:"wss://devdash.aceaccounting.nl"}),a.state={checked:!0,LoginType:!0,validation:!0,inputName:"email",inputValue:"email",placeholder:"Email address",phoneValidate:!1,countryName:"",flag:"",countryCode:"",fields:{email:"",password:"",phonenumber:""},loginError:"",loginErrorWithPhone:"",SubmitSuccuss:!1,errors:{},WhatsMyInfo:{CountryCodeISO2:"",CountryName:"",CountryCodePhone:0,ExternalIPAddress:""}},a.myRef=u.a.createRef(),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"handleChangeCheckbox",value:function(){this.setState({checked:!this.state.checked})}},{key:"handleChange",value:function(e){var t=this.state.fields;t[e.target.name]=e.target.value,this.setState({fields:t})}},{key:"handleValidation",value:function(e){var t=this.state.fields,a={},n=!0;this.state.LoginType?(C.a.isEmpty(t.email)?(n=!1,a.email="Email address can't be empty."):C.a.isEmail(t.email)||(n=!1,a.email="Email address is invalid."),C.a.isEmpty(t.password)?(n=!1,a.password="Password can't be empty."):C.a.isLength(t.password,{min:6,max:void 0})||(n=!1,a.password="Email must be more than 6 character.")):C.a.isEmpty(t.phonenumber)?(n=!1,a.phonenumber="Phone number can't be empty."):C.a.isLength(t.phonenumber,{min:3,max:void 0})?C.a.isNumeric(t.phonenumber)?this.state.phoneValidate||(n=!1,a.phonenumber="Phone number is not compatible."):(n=!1,a.phonenumber="Phone number only must contain number."):(n=!1,a.phonenumber="Phone number is invalid."),this.setState({errors:a},function(){return e(n)})}},{key:"handlesubmit",value:function(e){var t=this;e.preventDefault(),this.setState({error:null}),this.handleValidation(function(e){if(e)if(t.state.LoginType)I.a.signInWithEmail(t.state.fields.email,t.state.fields.password,t.state.LoginType).then(function(e){t.props.HandleLogin(),t.props.history.push("/dashboards")}).catch(function(e){"400"===e.message?t.setState({loginError:"Invalid user or password"}):t.setState({loginError:"There is no such user"})});else{var a=t.state,n=a.flag,o=a.fields,l=a.WhatsMyInfo;t.vm.$dispatch({PhoneLogin:{phone:o.phonenumber,countryISO2:n||l.CountryCodeISO2}})}})}},{key:"componentDidUpdate",value:function(e){if(this.state.SubmitSuccuss!==e.SubmitSuccuss&&this.state.SubmitSuccuss&&!this.state.LoginType){var t=this.state,a=t.flag,n=t.fields,o=t.countryName,l=t.countryCode,r=t.WhatsMyInfo;localStorage.setItem("countryCode",l||r.CountryCodePhone),localStorage.setItem("countryISO2",a||r.CountryCodeISO2),localStorage.setItem("phonenumber",n.phonenumber),localStorage.setItem("country",o||r.CountryCodePhone),this.props.history.push("/signin-phone-verification")}}},{key:"selectcountry",value:function(e,t){this.myRef.current.state.value="",this.setState({countryCode:this.myRef.current.selectedCountryData.dialCode,countryName:this.myRef.current.selectedCountryData.name,flag:this.myRef.current.selectedCountryData.iso2,valid:!1})}},{key:"changeLoginType",value:function(){this.setState({LoginType:!this.state.LoginType}),this.state.LoginType?this.setState({placeholder:"phone number",inputName:"phonenumber",inputValue:"phonenumber",loginError:"",LoginErrorWithPhone:""}):this.setState({placeholder:"Email address",inputName:"email",inputValue:"email",loginError:"",LoginErrorWithPhone:""})}},{key:"handlePhone",value:function(e,t){var a=this.state.fields;a.phonenumber=t,this.setState({fields:a,phoneValidate:e})}},{key:"isValid",value:function(){this.state.valid?this.setState({validation:!0}):this.setState({validation:!1})}},{key:"componentWillUnmount",value:function(){this.vm.$destroy()}},{key:"render",value:function(){var e=this.props.t,t=this.state.fields,a=t.email,n=t.password,o=this.state,l=o.loginError,r=o.WhatsMyInfo,i=o.LoginErrorWithPhone;return u.a.createElement("div",{className:"col-xs-12 no-horizantal"},u.a.createElement("div",{className:"col-xs-12 main-div"},u.a.createElement("div",{className:"form-signin-or-up-container"},u.a.createElement("h1",{className:"text-center colored-header-box"},u.a.createElement(S.a,{i18nKey:"login.title"},"Login to your account")),u.a.createElement("div",{className:"switch-login-container text-center"},u.a.createElement("p",{className:"switch-login text-center",onClick:this.changeLoginType.bind(this)},this.state.LoginType?u.a.createElement(S.a,{i18nKey:"login.login-with-mobile"},"Switch to login with phone number"):u.a.createElement(S.a,{i18nKey:"login.login-with-email"},"Switch to login with email address"))),u.a.createElement("form",{className:"register-form",onSubmit:this.handlesubmit.bind(this)},this.state.LoginType?u.a.createElement("div",{className:"col-xs-12 no-horizantal"},u.a.createElement(d.a,{type:"text",className:"sign-up-form",value:a,name:"email",placeholder:"Email address",onChange:this.handleChange.bind(this)}),this.state.errors.email?u.a.createElement("span",{className:"input-errors"},this.state.errors.email):null,u.a.createElement(d.a,{type:"password",className:"sign-up-form",value:n,name:"password",placeholder:"Password",onChange:this.handleChange.bind(this)}),this.state.errors.password?u.a.createElement("span",{className:"input-errors"},this.state.errors.password):null):u.a.createElement("div",{className:"col-xs-12 no-horizantal"},r.CountryCodeISO2?u.a.createElement(P.a,{ref:this.myRef,onPhoneNumberBlur:this.isValid.bind(this),preferredCountries:[r.CountryCodeISO2],onPhoneNumberChange:this.handlePhone.bind(this),onSelectFlag:this.selectcountry.bind(this),separateDialCode:!0,fieldName:"phonenumber",fieldId:"phonenumber"}):null,this.state.errors.phonenumber?u.a.createElement("span",{className:"input-errors"},this.state.errors.phonenumber):null),u.a.createElement("div",{className:"col xs-12 no-horizantal remember-section"},u.a.createElement(y.a,{control:u.a.createElement(b.a,{color:"default",checked:this.state.checked,value:"remember-me",onChange:this.handleChangeCheckbox.bind(this),className:"remember-me",name:"remember-me"}),label:e("login.remember-me"),className:"label-remember-me"}),u.a.createElement(m.a,{to:"/forget-password"},u.a.createElement(S.a,{i18nKey:"login.forgetpassword"},"Forgot your password?"))),l?u.a.createElement("span",{className:"input-errors text-center",style:{marginTop:"15px",marginBottom:"-10px"}},l):null,i?u.a.createElement("span",{className:"input-errors text-center",style:{marginTop:"15px",marginBottom:"-10px"}},i):null,u.a.createElement(p.a,{variant:"contained",color:"primary",className:"submit-btn",type:"submit"},u.a.createElement(S.a,{i18nKey:"login.login-btn"},"LOG IN"))),u.a.createElement("div",{className:"col-xs-12 no-horizantal go-to-login text-center"},u.a.createElement("span",null,u.a.createElement(S.a,{i18nKey:"login.without-account"},"No account yet?")),u.a.createElement("span",null,u.a.createElement(m.a,{to:"/signup"},u.a.createElement(S.a,{i18nKey:"login.signup"},"Sign up")))))))}}]),t}(c.Component);t.default=Object(S.c)("translation")(Object(k.b)(null,{HandleLogin:E.c})(O))}}]);
//# sourceMappingURL=16.193b52cc.chunk.js.map