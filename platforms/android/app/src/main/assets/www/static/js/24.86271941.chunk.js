(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{581:function(e,a,t){},717:function(e,a,t){},988:function(e,a,t){"use strict";t.r(a);var n=t(6),c=t(7),s=t(13),r=t(11),i=t(12),l=t(56),o=t(0),m=t.n(o),u=(t(717),t(182)),d=t.n(u),v=(t(581),function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"sa"},m.a.createElement("div",{className:"sa-success"},m.a.createElement("div",{className:"sa-success-tip"}),m.a.createElement("div",{className:"sa-success-long"}),m.a.createElement("div",{className:"sa-success-placeholder"}),m.a.createElement("div",{className:"sa-success-fix"})))}}]),a}(o.Component)),h=t(416),E=t(154),f=t.n(E),b=t(51),p=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"sa"},m.a.createElement("div",{className:"sa-warning"},m.a.createElement("div",{className:"sa-warning-body"}),m.a.createElement("div",{className:"sa-warning-dot"})))}}]),a}(o.Component),N=function(e){function a(e){var t;Object(n.a)(this,a),t=Object(s.a)(this,Object(r.a)(a).call(this,e));var c=f.a.parse(t.props.location.search);return t.state={Token:c.verify_token,TokenVerified:!1,SubmitErrors:""},t.vm=b.react.connect("EmailVerification",Object(l.a)(Object(l.a)(t)),{vmArg:{Token:c.verify_token}}),t}return Object(i.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"_handleRedirect",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this.state,a=e.TokenVerified,t=e.SubmitErrors;return console.log(this.state.TokenVerified,this.state.SubmitErrors),m.a.createElement("div",{className:"col-xs-12 no-horizantal"},m.a.createElement("div",{className:"col-xs-12 main-div"},m.a.createElement("div",{className:"email-verification-container"},m.a.createElement("div",{className:"col-xs-12 text-center alert-container"},a?m.a.createElement(v,null):m.a.createElement(p,null)),a?m.a.createElement("div",null,m.a.createElement("h1",{className:"col-xs-12 text-center"},"Email address verified"),m.a.createElement("p",{className:"col-xs-12 text-center greeting-text"}," Thank you for verifing your email address")):m.a.createElement("div",null,m.a.createElement("h1",{className:"col-xs-12 text-center h1-error"},t)),m.a.createElement("div",{className:"col-xs-12 text-center"},m.a.createElement(d.a,{variant:"contained",color:"primary",className:"redirect-to_home",onClick:this._handleRedirect.bind(this)},"Home Page")))))}}]),a}(o.Component);a.default=Object(h.a)(N)}}]);
//# sourceMappingURL=24.86271941.chunk.js.map