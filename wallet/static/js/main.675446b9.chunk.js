(this.webpackJsonpwallet=this.webpackJsonpwallet||[]).push([[0],{236:function(e,n){},337:function(e,n,t){e.exports=t.p+"static/media/cosmWasmLogo.15dccd19.svg"},338:function(e,n,t){e.exports=t.p+"static/media/failIcon.71513020.svg"},339:function(e,n,t){e.exports=t.p+"static/media/successIcon.2e305b66.svg"},340:function(e,n,t){e.exports=t.p+"static/media/backArrow.9849fc2e.svg"},348:function(e,n,t){e.exports=t(730)},377:function(e,n){},379:function(e,n){},389:function(e,n){},391:function(e,n){},433:function(e,n){},434:function(e,n){},439:function(e,n){},441:function(e,n){},465:function(e,n){},729:function(e,n,t){},730:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),c=t.n(o),i=(t(353),t(336)),l=t.n(i),s=(t(167),t(78)),u=t.n(s),m=(t(117),t(31)),d=t.n(m),f=(t(360),t(329)),v=t.n(f),p=t(9),g=t(18),h=t(737),b=t(324),E=t(60),j=t(71),x=t(61),O={setError:function(){},clearError:function(){}},y=Object(a.createContext)(O),k=function(){return Object(a.useContext)(y)};function w(e){var n=e.children,t=Object(a.useState)(),r=t[0],o=t[1],c={error:r,setError:o,clearError:function(){o(void 0)}};return Object(a.createElement)(y.Provider,{value:c},n)}function A(){return(A=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function S(e){if(!e)return"0";if(e.denom.startsWith("u")){var n=e.denom.slice(1).toUpperCase();return x.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+n}return e.amount+"\u202f"+e.denom}function T(e,n){if(!n)return e;var t=n[e.denom];if(!t)return e;var a=x.Decimal.fromAtomics(e.amount,t.fractionalDigits).toString();return{denom:t.denom,amount:a}}var C=function(e,n){try{return Promise.resolve(n.getAccounts()).then((function(t){var a=t[0].address,r=function(e){var n=e.feeToken,t=e.gasPrice,a=function(e,n,t){return{amount:[{amount:Math.floor(e*t).toString(),denom:n}],gas:e.toString()}};return{upload:a(15e5,n,t),init:a(6e5,n,t),exec:a(2e5,n,t),migrate:a(6e5,n,t),send:a(8e4,n,t),changeAdmin:a(8e4,n,t)}}(e);return new b.SigningCosmWasmClient(e.httpUrl,a,n,r)}))}catch(t){return Promise.reject(t)}},P=function(e){try{var n=function(){var e="burner-wallet",n=localStorage.getItem(e);if(n)return n;var t=E.Bip39.encode(E.Random.getBytes(16)).toString();return localStorage.setItem(e,t),t}(),t=Object(j.makeCosmoshubPath)(0);return Promise.resolve(j.Secp256k1Wallet.fromMnemonic(n,t,e))}catch(a){return Promise.reject(a)}};var z={initialized:!1,address:"",init:function(){},getClient:function(){throw new Error("not yet initialized")}},B=Object(a.createContext)(z),I=function(){return Object(a.useContext)(B)};function L(e){var n=e.config,t=e.loadWallet,r=e.children,o=A({},z,{init:function(){t(n.addressPrefix).then((function(e){return C(n,e)})).then((function(e){try{var t=function(){l({initialized:!0,address:a,init:function(){},getClient:function(){return e}})},a=e.senderAddress,r=function(){if(n.faucetUrl)return Promise.resolve(e.getAccount()).then((function(e){var t=function(){var t;if(!(null===e||void 0===e||null===(t=e.balance)||void 0===t?void 0:t.length))return Promise.resolve(fetch(n.faucetUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:n.faucetToken,address:a})})).then((function(){}))}();if(t&&t.then)return t.then((function(){}))}))}();return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}}))}}),c=Object(a.useState)(o),i=c[0],l=c[1];return Object(a.createElement)(B.Provider,{value:i},r)}function W(e){var n=e.config,t=e.children;return Object(a.createElement)(L,{config:n,loadWallet:P},t)}var D={refreshAccount:function(){}},M=Object(a.createContext)(D),N=function(){return Object(a.useContext)(M)};function R(e){var n=e.children,t=k().setError,r=I(),o=Object(a.useState)({}),c=o[0],i=o[1];function l(){r.initialized&&r.getClient().getAccount().then((function(e){return i({account:e})})).catch(t)}Object(a.useEffect)(l,[r,t]);var s={refreshAccount:l,account:c.account};return Object(a.createElement)(M.Provider,{value:s},n)}function $(e){var n=e.authPath,t=e.children,a=e.location;return I().initialized?r.a.createElement(g.d,{location:a},t):r.a.createElement(g.a,{to:{pathname:n,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function U(e){var n=(e||"").toString().match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))}var q=t(325),F=t.n(q);function H(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}function J(e,n){return n||(n=e.slice(0)),e.raw=n,e}function V(e){var n=e.tag,t=void 0===n?"div":n,r=e.children,o=H(e,["tag","children"]);return Object(a.createElement)(t,Object.assign({},o),r)}function K(){var e=J(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return K=function(){return e},e}var Y=Object(p.b)(V)(K());function G(e){var n=e.tag,t=void 0===n?"div":n,r=e.children,o=H(e,["tag","children"]);return Object(a.createElement)(t,Object.assign({},o),r)}function Q(){var e=J(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return Q=function(){return e},e}var X=Object(p.b)(G)(Q());function Z(e){var n=e.children,t=H(e,["children"]);return Object(a.createElement)(Y,Object.assign({tag:"main"},t),n)}function _(){var e=J(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return _=function(){return e},e}var ee=Object(p.b)(Z)(_());function ne(e){var n=e.icon,t=e.path,a=e.state,o=H(e,["icon","path","state"]),c=Object(g.g)(),i=t?function(){return c.push(t,a)}:c.goBack;return r.a.createElement("img",Object.assign({src:n,alt:"Back arrow",onClick:i},o))}function te(){var e=J(["\n  cursor: pointer;\n"]);return te=function(){return e},e}var ae=Object(p.b)(ne)(te());function re(){var e=J(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return re=function(){return e},e}var oe=Object(p.b)(v.a)(re()),ce=Object(a.createElement)(h.a,{style:{fontSize:"6.25rem"},spin:!0});function ie(e){var n=e.loadingText||"Loading...";return Object(a.createElement)(ee,null,Object(a.createElement)(oe,{indicator:ce,tip:n}))}function le(){var e=J(["\n  display: block;\n  font-weight: lighter;\n"]);return le=function(){return e},e}function se(){var e=J(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return se=function(){return e},e}function ue(){var e=J(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return ue=function(){return e},e}var me=d.a.Text,de=Object(p.b)(X)(ue()),fe=Object(p.b)(X)(se()),ve=Object(p.b)(me)(le()),pe=d.a.Title;function ge(e){var n=e.pathAfterLogin,t=e.appName,o=e.appLogo,c=Object(g.g)(),i=c.location.state,l=I(),s=N(),m=s.refreshAccount,f=s.account,v=Object(a.useState)(!1),p=v[0],h=v[1];return Object(a.useEffect)((function(){l.initialized&&m()}),[l.initialized,m]),Object(a.useEffect)((function(){f&&(i?c.push(i.redirectPathname,i.redirectState):c.push(n))}),[f,i,c]),p?r.a.createElement(ie,{loadingText:"Initializing app..."}):r.a.createElement(ee,null,r.a.createElement(de,null,r.a.createElement("img",{src:o,alt:"CosmWasm logo"}),r.a.createElement(fe,null,r.a.createElement(d.a,null,r.a.createElement(pe,{level:2},"Hello!"),r.a.createElement(ve,null,"Welcome to your ",t),r.a.createElement(ve,null,"Select one of the following options to start:")),r.a.createElement(u.a,{type:"primary",onClick:function(){h(!0),l.init()}},"Browser (Demo)"),r.a.createElement(u.a,{disabled:!0,type:"primary"},"Keplr (Secure)"))))}function he(){var e=J(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return he=function(){return e},e}function be(){var e=J(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return be=function(){return e},e}var Ee=d.a.Text,je=Object(p.b)(X)(be()),xe=Object(p.b)(Ee)(he());function Oe(e){var n=e.defaultButtonAction,t=e.successIcon,a=e.failIcon,o=Object(g.g)(),c=o.location.state,i=c.success,l=c.message,s=c.error,m=c.customButtonText,d=c.customButtonActionPath,f=c.customButtonActionState;var v=function(e){return e?{result:"success",icon:t,buttonText:"Home",buttonAction:function(){return n(o)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:o.goBack}}(i),p=v.icon,h=v.result,b=v.buttonText,E=v.buttonAction,j=m||b,x=d?function(){return o.push(d,f)}:E;return r.a.createElement(ee,null,r.a.createElement(je,null,r.a.createElement("img",{src:p,alt:"Result icon"}),r.a.createElement(xe,{"data-result":h},l),s&&r.a.createElement(xe,{"data-result":h},s),r.a.createElement(u.a,{type:"primary",onClick:x},j)))}function ye(){var e=J(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return ye=function(){return e},e}var ke=Object(p.b)(X)(ye()),we=d.a.Title,Ae=d.a.Text;function Se(e){var n,t=e.tag,a=e.hideTitle,o=e.hideBalance,c=null!==(n=N().account)&&void 0!==n?n:{address:"",balance:[]},i=c.address,s=c.balance;return r.a.createElement(ke,{tag:t},!a&&r.a.createElement("header",null,r.a.createElement(we,{level:3},"Your Account"),!o&&r.a.createElement(l.a,null)),r.a.createElement(Ae,null,i),!o&&r.a.createElement(Ae,null,"(",function(e){return e&&0!==e.length?e.map(S).join(", "):"\u2013"}(s),")"),r.a.createElement(u.a,{type:"primary",onClick:function(){return F()(i)}},"Copy Account Address"))}function Te(){var e=J(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Te=function(){return e},e}var Ce=Object(p.a)(Te());function Pe(){var e=J(["\n  :root {\n    --color-black: #333;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Pe=function(){return e},e}var ze=Object(p.a)(Pe());function Be(){var e=J(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return Be=function(){return e},e}var Ie=Object(p.a)(Be());function Le(){var e=J(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return Le=function(){return e},e}var We=Object(p.a)(Le());function De(){var e=J(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return De=function(){return e},e}var Me=Object(p.a)(De());function Ne(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(We,null),r.a.createElement(Me,null),r.a.createElement(ze,null),r.a.createElement(Ie,null),r.a.createElement(Ce,null))}var Re=t(103);const $e={httpUrl:"https://lcd.coralnet.cosmwasm.com",feeToken:"ushell",gasPrice:.025,faucetUrl:"https://faucet.coralnet.cosmwasm.com/credit",faucetToken:"SHELL",addressPrefix:"coral",coinMap:{ushell:{denom:"SHELL",fractionalDigits:6},ureef:{denom:"REEF",fractionalDigits:6}}};var Ue=t(337),qe=t.n(Ue);function Fe(){return r.a.createElement(ge,{pathAfterLogin:"/tokens",appName:"Wallet",appLogo:qe.a})}var He=t(338),Je=t.n(He),Ve=t(339),Ke=t.n(Ve);function Ye(e){e.push("/tokens")}function Ge(){return r.a.createElement(Oe,{defaultButtonAction:Ye,successIcon:Ke.a,failIcon:Je.a})}var Qe=t(340),Xe=t.n(Qe),Ze=t(36),_e=t(735),en=t(344),nn=t(736),tn=t(91);const an=new RegExp("^"+$e.addressPrefix),rn={address:tn.c().required("An address is required").matches(an,`"${$e.addressPrefix}" prefix required`).length(39+$e.addressPrefix.length,"Address invalid")},on=tn.b().shape(rn),cn=tn.b().shape(rn),ln=Object(p.b)(X)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,sn=p.b.div`
  display: flex;
  align-items: baseline;

  & > * + * {
    margin-left: var(--s0);
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }
`,{Text:un}=d.a;function mn({tokenName:e,tokenAmount:n,sendTokensAction:t}){const a=tn.b().shape({amount:tn.a().required("An amount is required").positive("Amount should be positive").max(parseFloat(n),"Amount cannot be greater than "+n)}).concat(cn);return r.a.createElement(Ze.c,{initialValues:{amount:"",address:""},onSubmit:t,validationSchema:a},n=>r.a.createElement(_e.a,null,r.a.createElement(ln,null,r.a.createElement(sn,null,r.a.createElement(un,null,"Send"),r.a.createElement(en.a,{name:"amount"},r.a.createElement(nn.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(un,null,e)),r.a.createElement(sn,null,r.a.createElement(un,null,"to"),r.a.createElement(en.a,{name:"address"},r.a.createElement(nn.a,{name:"address",placeholder:"Enter address"}))),r.a.createElement(u.a,{type:"primary",onClick:n.submitForm,disabled:!(n.isValid&&n.dirty)},"Send"))))}const dn=Object(p.b)(X)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,fn=Object(p.b)(X)`
  & > * {
    --gap: var(--s2);
  }
`,vn=p.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:pn,Text:gn}=d.a;function hn(){const[e,n]=Object(a.useState)(!1),t=Object(g.g)(),{tokenName:o}=Object(g.h)(),{tokenAmount:c}=t.location.state,{getClient:i}=I(),l=N(),s={denom:o,amount:c},{denom:u,amount:m}=T(s,$e.coinMap),[d,f]=m.split(".");return e&&r.a.createElement(ie,{loadingText:`Sending ${u}...`})||!e&&r.a.createElement(ee,null,r.a.createElement(dn,null,r.a.createElement(ae,{icon:Xe.a,path:"/tokens"}),r.a.createElement(fn,null,r.a.createElement(pn,null,u),r.a.createElement(Se,{hideTitle:!0,hideBalance:!0})),r.a.createElement(vn,null,r.a.createElement(gn,null,`${d}${f?".":""}`),f&&r.a.createElement(gn,null,f),r.a.createElement(gn,null," tokens")),r.a.createElement(mn,{tokenName:u,tokenAmount:m,sendTokensAction:e=>{n(!0);const{address:a,amount:r}=e,s=a,u=function(e,n,t){var a,r=null===(a=n[t])||void 0===a?void 0:a.fractionalDigits;return r?x.Decimal.fromUserInput(e,r).atomics:e}(r,$e.coinMap,o),m=[{denom:o,amount:u}];i().sendTokens(s,m).then(e=>{if(Object(j.isPostTxFailure)(e))return Promise.reject(e.rawLog);l.refreshAccount(),t.push({pathname:"/result",state:{success:!0,message:`${r} ${o} successfully sent to ${s}`,customButtonText:"Tokens"}})}).catch(e=>{console.error(e);const n="/tokens/"+o,a={tokenAmount:c};t.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:U(e),customButtonActionPath:n,customButtonActionState:a}})})}})))}t(168);var bn=t(90),En=t.n(bn),jn=t(166);const xn=a.forwardRef(({name:e,validate:n,fast:t,onChange:r,onBlur:o,...c},i)=>a.createElement(jn.a,{name:e,validate:n,fast:t},({field:{value:n,onChange:t,onBlur:l}})=>a.createElement(En.a,Object.assign({ref:i,name:e,value:n,onChange:e=>{t(e),r&&r(e)},onBlur:e=>{l(e),o&&o(e)}},c))));xn.Search=a.forwardRef(({name:e,validate:n,fast:t,onChange:r,onBlur:o,...c},i)=>a.createElement(jn.a,{name:e,validate:n,fast:t},({field:{value:n,onChange:t,onBlur:l}})=>a.createElement(En.a.Search,Object.assign({ref:i,name:e,value:n,onChange:e=>{t(e),r&&r(e)},onBlur:e=>{l(e),o&&o(e)}},c))));var On=xn.Search;function yn({currentAddress:e,setCurrentAddress:n}){return r.a.createElement(Ze.c,{initialValues:{address:e},validationSchema:on,onSubmit:e=>{n(e.address)}},e=>r.a.createElement(_e.a,null,r.a.createElement(en.a,{name:"address"},r.a.createElement(On,{name:"address",placeholder:"Enter address",enterButton:!0,onSearch:e.submitForm}))))}const kn=Object(p.b)(X)`
  & > * {
    --gap: 0;
  }
`,wn=p.b.div`
  --v-padding: var(--s-2);
  --border-size: 1px;

  padding-top: var(--v-padding);
  padding-bottom: var(--v-padding);

  padding-left: var(--s4);
  margin-left: calc(-1 * var(--s4));
  padding-right: var(--s4);
  margin-right: calc(-1 * var(--s4));

  margin-bottom: calc(-1 * var(--border-size));

  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-primary);

    & * {
      color: white;
    }
  }

  &:first-child > * {
    --border-size: 0;
  }

  & > * {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    span:first-child {
      font-family: var(--ff-iceland);
      font-size: var(--s2);
    }

    span:not(:first-child) {
      font-weight: bolder;
      font-size: var(--s-1);
    }
  }

  &[data-state="forbidden"] {
    &:hover,
    &:active,
    &:focus {
      background-color: var(--color-black);
      cursor: not-allowed;
    }
  }
`,An=p.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:Sn}=d.a;function Tn({currentAddress:e}){const{getClient:n}=I(),{setError:t}=k(),[o,c]=Object(a.useState)([]);Object(a.useEffect)(()=>{n().getAccount(e).then(({balance:e})=>c(e)).catch(t)},[n,e,t]);const{account:i}=N(),l=i.address===e,s=Object(g.g)();return r.a.createElement(kn,null,o.map(e=>{const{denom:n,amount:t}=T(e,$e.coinMap);return r.a.createElement(wn,{key:e.denom,"data-state":l?"":"forbidden",onClick:()=>{var n;l&&(n=e,s.push("/tokens/"+n.denom,{tokenAmount:n.amount}))}},r.a.createElement(An,null,r.a.createElement(Sn,null,n),r.a.createElement(Sn,null,"0"!==t?t:"No tokens")))}))}const Cn=Object(p.b)(X)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,{Title:Pn}=d.a;function zn(){const{account:e}=N(),[n,t]=Object(a.useState)(e.address);return r.a.createElement(ee,null,r.a.createElement(Cn,null,r.a.createElement(Pn,null,"Tokens"),r.a.createElement(yn,{currentAddress:n,setCurrentAddress:t}),r.a.createElement(Tn,{currentAddress:n}),r.a.createElement(Se,{hideTitle:!0,hideBalance:!0})))}function Bn(){return r.a.createElement(w,null,r.a.createElement(W,{config:$e},r.a.createElement(R,null,r.a.createElement(Ne,null),r.a.createElement(Re.a,{basename:"/wallet"},r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:Fe}),r.a.createElement(g.b,{exact:!0,path:"/login",component:Fe}),r.a.createElement($,{authPath:"/login"},r.a.createElement(g.b,{exact:!0,path:"/tokens",component:zn}),r.a.createElement(g.b,{exact:!0,path:"/tokens/:tokenName",component:hn}),r.a.createElement(g.b,{exact:!0,path:"/result",component:Ge})))))))}t(729);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Bn,null)),document.getElementById("root"))}},[[348,1,2]]]);
//# sourceMappingURL=main.675446b9.chunk.js.map