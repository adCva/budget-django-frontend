"use strict";(self.webpackChunkbudget_django_frontend=self.webpackChunkbudget_django_frontend||[]).push([[585],{585:function(e,n,t){t.r(n);var a=t(885),r=t(791),s=t(434),l=t(11),o=t(870),u=t(184);n.default=function(){var e=(0,s.I0)(),n=(0,s.v9)((function(e){return e.edit.editExp})),t=(0,s.v9)((function(e){return e.edit.editFormOpened})),i=(0,r.useState)(""),c=(0,a.Z)(i,2),d=c[0],p=c[1],f=(0,r.useState)(""),m=(0,a.Z)(f,2),h=m[0],x=m[1],j=(0,r.useState)(),v=(0,a.Z)(j,2),g=v[0],b=v[1],N=(0,r.useState)(""),C=(0,a.Z)(N,2),w=C[0],y=C[1];return(0,r.useEffect)((function(){p(n.name),x(n.desc),b(n.spent),y(n.type)}),[t]),(0,u.jsx)("div",{className:t?"form-wrapper":"form-wrapper form-wrapper-show",children:(0,u.jsxs)("div",{className:"form-container",children:[(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(d),console.log(n.name);var a={id:n.id,name:d,desc:h,spent:g,type:w,created_at:n.created_at};e((0,l.VA)({updatedElelemnt:a})),e((0,o.F2)())},className:"form",children:[(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{children:"Name"}),(0,u.jsx)("input",{type:"text",onChange:function(e){return p(e.target.value)},defaultValue:d})]}),(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{children:"Description"}),(0,u.jsx)("textarea",{onChange:function(e){return x(e.target.value)},defaultValue:h})]}),(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{children:"Total spent"}),(0,u.jsx)("input",{type:"number",onChange:function(e){return b(e.target.value)},defaultValue:g})]}),(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{children:"Expenditure type"}),(0,u.jsxs)("select",{onChange:function(e){return y(e.target.value)},value:w,children:[(0,u.jsx)("option",{value:"HM",children:"Home"}),(0,u.jsx)("option",{value:"BL",children:"Bill"}),(0,u.jsx)("option",{value:"FD",children:"Food"}),(0,u.jsx)("option",{value:"TR",children:"Transport"}),(0,u.jsx)("option",{value:"MC",children:"Miscellaneous"})]})]}),(0,u.jsx)("button",{type:"submit",className:"update-btn",children:"Update"})]}),(0,u.jsx)("button",{onClick:function(){return e((0,o.F2)())},className:"close-form",children:"Close form"})]})})}}}]);
//# sourceMappingURL=585.97c989ee.chunk.js.map