(this.webpackJsonpwallet=this.webpackJsonpwallet||[]).push([[0],{262:function(e,n){},374:function(e,n,t){e.exports=t.p+"static/media/cosmWasmLogo.15dccd19.svg"},375:function(e,n,t){e.exports=t.p+"static/media/failIcon.71513020.svg"},376:function(e,n,t){e.exports=t.p+"static/media/successIcon.2e305b66.svg"},377:function(e,n,t){e.exports=t.p+"static/media/backArrow.9849fc2e.svg"},385:function(e,n,t){e.exports=t(795)},413:function(e,n){},415:function(e,n){},425:function(e,n){},427:function(e,n){},469:function(e,n){},470:function(e,n){},475:function(e,n){},477:function(e,n){},501:function(e,n){},794:function(e,n,t){},795:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(17),c=t.n(o),i=(t(390),t(373)),l=t.n(i),s=(t(184),t(69)),u=t.n(s),m=(t(125),t(35)),d=t.n(m),f=(t(397),t(366)),v=t.n(f),p=t(10),h=t(18),b=t(802),g=t(357),E=t(59),y=t(33),j=t(358),x=t(359),O=t(48),k={setError:function(){},clearError:function(){}},S=Object(r.createContext)(k),w=function(){return Object(r.useContext)(S)};function A(e){var n=e.children,t=Object(r.useState)(),a=t[0],o=t[1],c={error:a,setError:o,clearError:function(){o(void 0)}};return Object(r.createElement)(S.Provider,{value:c},n)}function P(){return(P=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var C=function(e){try{return Promise.resolve(x.a.create(12e4,12e4)).then((function(n){return new j.LedgerSigner(n,{hdPaths:[Object(y.makeCosmoshubPath)(0)],prefix:e})}))}catch(n){return Promise.reject(n)}},T=function(e){try{var n=function(){var e="burner-wallet",n=localStorage.getItem(e);if(n)return n;var t=E.Bip39.encode(E.Random.getBytes(16)).toString();return localStorage.setItem(e,t),t}(),t=Object(y.makeCosmoshubPath)(0);return Promise.resolve(y.Secp256k1HdWallet.fromMnemonic(n,t,e))}catch(r){return Promise.reject(r)}};var z={initialized:!1,address:"",init:function(){return Promise.resolve()},clear:function(){},getClient:function(){throw new Error("not yet initialized")},getStakingClient:function(){throw new Error("not yet initialized")}},B=Object(r.createContext)(z),I=function(){return Object(r.useContext)(B)};function L(e){var n=e.config,t=e.children,a=P({},z,{init:function(e){try{return Promise.resolve(function(e,n){try{return Promise.resolve(n.getAccounts()).then((function(t){var r=t[0].address,a=y.GasPrice.fromString(""+e.gasPrice+e.feeToken);return new g.SigningCosmWasmClient(e.httpUrl,r,n,a,{upload:15e5,init:6e5,exec:2e5,migrate:6e5,send:8e4,changeAdmin:8e4})}))}catch(t){return Promise.reject(t)}}(n,e)).then((function(e){function t(){var t,a=(t=n.httpUrl,y.LcdClient.withExtensions({apiUrl:t},y.setupStakingExtension));i({initialized:!0,address:r,init:function(){return Promise.resolve()},clear:l,getClient:function(){return e},getStakingClient:function(){return a}})}var r=e.senderAddress,a=function(){if(n.faucetUrl)return Promise.resolve(e.getAccount()).then((function(e){var t=function(){var t;if(!(null===e||void 0===e||null===(t=e.balance)||void 0===t?void 0:t.length))return Promise.resolve(fetch(n.faucetUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:n.faucetToken,address:r})})).then((function(){}))}();if(t&&t.then)return t.then((function(){}))}))}();return a&&a.then?a.then(t):t()}))}catch(t){return Promise.reject(t)}}}),o=Object(r.useState)(a),c=o[0],i=o[1];function l(){i(P({},a))}return Object(r.createElement)(B.Provider,{value:c},t)}var U={refreshAccount:function(){}},D=Object(r.createContext)(U),N=function(){return Object(r.useContext)(D)};function R(e){var n=e.children,t=w().setError,a=I(),o=Object(r.useState)({}),c=o[0],i=o[1];function l(){a.initialized&&a.getClient().getAccount().then((function(e){return i({account:e})})).catch(t)}Object(r.useEffect)(l,[a,t]);var s={refreshAccount:l,account:c.account};return Object(r.createElement)(D.Provider,{value:s},n)}function $(e){var n=e.authPath,t=e.children,r=e.location;return I().initialized?a.a.createElement(h.d,{location:r},t):a.a.createElement(h.a,{to:{pathname:n,state:r?{redirectPathname:r.pathname,redirectState:r.state}:void 0}})}function M(e){if(!e)return"0";if(e.denom.startsWith("u")){var n=e.denom.slice(1).toUpperCase();return O.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+n}return e.amount+"\u202f"+e.denom}function W(e,n){if(!n)return e;var t=n[e.denom];if(!t)return e;var r=O.Decimal.fromAtomics(e.amount,t.fractionalDigits).toString();return{denom:t.denom,amount:r}}function q(e){var n=(e||"").toString(),t=n.match(/.*\s*$/g)[0];return t.substring(0,t.lastIndexOf(";"))||n}var F=t(362),H=t.n(F);function J(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function V(e,n){return n||(n=e.slice(0)),e.raw=n,e}function G(e){var n=e.tag,t=void 0===n?"div":n,a=e.children,o=J(e,["tag","children"]);return Object(r.createElement)(t,Object.assign({},o),a)}function K(){var e=V(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return K=function(){return e},e}var Y=Object(p.b)(G)(K());function Q(e){var n=e.tag,t=void 0===n?"div":n,a=e.children,o=J(e,["tag","children"]);return Object(r.createElement)(t,Object.assign({},o),a)}function X(){var e=V(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return X=function(){return e},e}var Z=Object(p.b)(Q)(X());function _(e){var n=e.children,t=J(e,["children"]);return Object(r.createElement)(Y,Object.assign({tag:"main"},t),n)}function ee(){var e=V(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return ee=function(){return e},e}var ne=Object(p.b)(_)(ee());function te(e){var n=e.icon,t=e.path,r=e.state,o=J(e,["icon","path","state"]),c=Object(h.g)(),i=t?function(){return c.push(t,r)}:c.goBack;return a.a.createElement("img",Object.assign({src:n,alt:"Back arrow",onClick:i},o))}function re(){var e=V(["\n  cursor: pointer;\n"]);return re=function(){return e},e}var ae=Object(p.b)(te)(re());function oe(){var e=V(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return oe=function(){return e},e}var ce=Object(p.b)(v.a)(oe()),ie=Object(r.createElement)(b.a,{style:{fontSize:"6.25rem"},spin:!0});function le(e){var n=e.loadingText||"Loading...";return Object(r.createElement)(ne,null,Object(r.createElement)(ce,{indicator:ie,tip:n}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function se(){var e=V(["\n  color: var(--color-red);\n"]);return se=function(){return e},e}function ue(){var e=V(["\n  display: block;\n  font-weight: lighter;\n"]);return ue=function(){return e},e}function me(){var e=V(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return me=function(){return e},e}function de(){var e=V(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return de=function(){return e},e}var fe=d.a.Text,ve=Object(p.b)(Z)(de()),pe=Object(p.b)(Z)(me()),he=Object(p.b)(fe)(ue()),be=Object(p.b)(fe)(se()),ge=d.a.Title;function Ee(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function ye(e){var n=function(e){try{O(!0),p();var n=function(e,n){try{var t=e()}catch(r){return n(r)}return t&&t.then?t.then(void 0,n):t}((function(){return Promise.resolve(e(t)).then((function(e){return Promise.resolve(b.init(e)).then((function(){}))}))}),(function(e){console.error(e),v(Error(e).message),O(!1)}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(r){return Promise.reject(r)}},t=e.addressPrefix,o=e.pathAfterLogin,c=e.appName,i=e.appLogo,l=Object(h.g)(),s=l.location.state,m=w(),f=m.error,v=m.setError,p=m.clearError,b=I(),g=N(),E=g.refreshAccount,y=g.account,j=Object(r.useState)(!1),x=j[0],O=j[1];return Object(r.useEffect)((function(){b.initialized&&E()}),[b.initialized,E]),Object(r.useEffect)((function(){y&&(s?l.push(s.redirectPathname,s.redirectState):l.push(o))}),[y,s,l]),x?a.a.createElement(le,{loadingText:"Initializing app..."}):a.a.createElement(ne,null,a.a.createElement(ve,null,a.a.createElement("img",{src:i,alt:"CosmWasm logo"}),a.a.createElement(pe,null,a.a.createElement(d.a,null,a.a.createElement(ge,{level:2},"Hello!"),a.a.createElement(he,null,"Welcome to your ",c),a.a.createElement(he,null,"Select one of the following options to start:")),f&&a.a.createElement(be,null,f),a.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(n(T)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),a.a.createElement(u.a,{type:"primary",disabled:Ee(),onClick:function(){try{return Promise.resolve(n(C)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure)"),a.a.createElement(u.a,{type:"primary",disabled:!0},"Keplr (Secure)"))))}function je(){var e=V(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return je=function(){return e},e}function xe(){var e=V(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return xe=function(){return e},e}var Oe=d.a.Text,ke=Object(p.b)(Z)(xe()),Se=Object(p.b)(Oe)(je());function we(e){var n=e.defaultButtonAction,t=e.successIcon,r=e.failIcon,o=Object(h.g)(),c=o.location.state,i=c.success,l=c.message,s=c.error,m=c.customButtonText,d=c.customButtonActionPath,f=c.customButtonActionState;var v=function(e){return e?{result:"success",icon:t,buttonText:"Home",buttonAction:function(){return n(o)}}:{result:"failure",icon:r,buttonText:"Retry",buttonAction:o.goBack}}(i),p=v.icon,b=v.result,g=v.buttonText,E=v.buttonAction,y=m||g,j=d?function(){return o.push(d,f)}:E;return a.a.createElement(ne,null,a.a.createElement(ke,null,a.a.createElement("img",{src:p,alt:"Result icon"}),a.a.createElement(Se,{"data-result":b},l),s&&a.a.createElement(Se,{"data-result":b},s),a.a.createElement(u.a,{type:"primary",onClick:j},y)))}function Ae(){var e=V(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return Ae=function(){return e},e}var Pe=Object(p.b)(Z)(Ae()),Ce=d.a.Title,Te=d.a.Text;function ze(e){var n,t=e.tag,r=e.hideTitle,o=e.hideBalance,c=null!==(n=N().account)&&void 0!==n?n:{address:"",balance:[]},i=c.address,s=c.balance;return a.a.createElement(Pe,{tag:t},!r&&a.a.createElement("header",null,a.a.createElement(Ce,{level:3},"Your Account"),!o&&a.a.createElement(l.a,null)),a.a.createElement(Te,null,i),!o&&a.a.createElement(Te,null,"(",function(e){return e&&0!==e.length?e.map(M).join(", "):"\u2013"}(s),")"),a.a.createElement(u.a,{type:"primary",onClick:function(){return H()(i)}},"Copy Account Address"))}function Be(){var e=V(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Be=function(){return e},e}var Ie=Object(p.a)(Be());function Le(){var e=V(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Le=function(){return e},e}var Ue=Object(p.a)(Le());function De(){var e=V(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return De=function(){return e},e}var Ne=Object(p.a)(De());function Re(){var e=V(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return Re=function(){return e},e}var $e=Object(p.a)(Re());function Me(){var e=V(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return Me=function(){return e},e}var We=Object(p.a)(Me());function qe(){return a.a.createElement(a.a.Fragment,null,a.a.createElement($e,null),a.a.createElement(We,null),a.a.createElement(Ue,null),a.a.createElement(Ne,null),a.a.createElement(Ie,null))}var Fe=t(109);const He={httpUrl:"https://lcd.coralnet.cosmwasm.com",feeToken:"ushell",gasPrice:.025,faucetUrl:"https://faucet.coralnet.cosmwasm.com/credit",faucetToken:"SHELL",addressPrefix:"coral",coinMap:{ushell:{denom:"SHELL",fractionalDigits:6},ureef:{denom:"REEF",fractionalDigits:6}}};var Je=t(374),Ve=t.n(Je);function Ge(){return a.a.createElement(ye,{pathAfterLogin:"/tokens",appName:"Wallet",appLogo:Ve.a,addressPrefix:He.addressPrefix})}var Ke=t(375),Ye=t.n(Ke),Qe=t(376),Xe=t.n(Qe);function Ze(e){e.push("/tokens")}function _e(){return a.a.createElement(we,{defaultButtonAction:Ze,successIcon:Xe.a,failIcon:Ye.a})}var en=t(377),nn=t.n(en),tn=t(39),rn=t(800),an=t(381),on=t(801),cn=t(96);const ln=new RegExp("^"+He.addressPrefix),sn={address:cn.c().required("An address is required").matches(ln,`"${He.addressPrefix}" prefix required`).length(39+He.addressPrefix.length,"Address invalid")},un=cn.b().shape(sn),mn=cn.b().shape(sn),dn=Object(p.b)(Z)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,fn=p.b.div`
  display: flex;
  align-items: baseline;

  & > * + * {
    margin-left: var(--s0);
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }
`,{Text:vn}=d.a;function pn({tokenName:e,tokenAmount:n,sendTokensAction:t}){const r=cn.b().shape({amount:cn.a().required("An amount is required").positive("Amount should be positive").max(parseFloat(n),"Amount cannot be greater than "+n)}).concat(mn);return a.a.createElement(tn.c,{initialValues:{amount:"",address:""},onSubmit:t,validationSchema:r},n=>a.a.createElement(rn.a,null,a.a.createElement(dn,null,a.a.createElement(fn,null,a.a.createElement(vn,null,"Send"),a.a.createElement(an.a,{name:"amount"},a.a.createElement(on.a,{name:"amount",placeholder:"Enter amount"})),a.a.createElement(vn,null,e)),a.a.createElement(fn,null,a.a.createElement(vn,null,"to"),a.a.createElement(an.a,{name:"address"},a.a.createElement(on.a,{name:"address",placeholder:"Enter address"}))),a.a.createElement(u.a,{type:"primary",onClick:n.submitForm,disabled:!(n.isValid&&n.dirty)},"Send"))))}const hn=Object(p.b)(Z)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,bn=Object(p.b)(Z)`
  & > * {
    --gap: var(--s2);
  }
`,gn=p.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:En,Text:yn}=d.a;function jn(){const[e,n]=Object(r.useState)(!1),t=Object(h.g)(),{tokenName:o}=Object(h.h)(),{tokenAmount:c}=t.location.state,{getClient:i}=I(),l=N(),s={denom:o,amount:c},{denom:u,amount:m}=W(s,He.coinMap),[d,f]=m.split(".");return e&&a.a.createElement(le,{loadingText:`Sending ${u}...`})||!e&&a.a.createElement(ne,null,a.a.createElement(hn,null,a.a.createElement(ae,{icon:nn.a,path:"/tokens"}),a.a.createElement(bn,null,a.a.createElement(En,null,u),a.a.createElement(ze,{hideTitle:!0,hideBalance:!0})),a.a.createElement(gn,null,a.a.createElement(yn,null,`${d}${f?".":""}`),f&&a.a.createElement(yn,null,f),a.a.createElement(yn,null," tokens")),a.a.createElement(pn,{tokenName:u,tokenAmount:m,sendTokensAction:e=>{n(!0);const{address:r,amount:a}=e,s=r,u=function(e,n,t){var r,a=null===(r=n[t])||void 0===r?void 0:r.fractionalDigits;return a?O.Decimal.fromUserInput(e,a).atomics:e}(a,He.coinMap,o),m=[{denom:o,amount:u}];i().sendTokens(s,m).then(e=>{if(Object(y.isBroadcastTxFailure)(e))return Promise.reject(e.rawLog);l.refreshAccount(),t.push({pathname:"/result",state:{success:!0,message:`${a} ${o} successfully sent to ${s}`,customButtonText:"Tokens"}})}).catch(e=>{console.error(e);const n="/tokens/"+o,r={tokenAmount:c};t.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:q(e),customButtonActionPath:n,customButtonActionState:r}})})}})))}t(185);var xn=t(95),On=t.n(xn),kn=t(183);const Sn=r.forwardRef(({name:e,validate:n,fast:t,onChange:a,onBlur:o,...c},i)=>r.createElement(kn.a,{name:e,validate:n,fast:t},({field:{value:n,onChange:t,onBlur:l}})=>r.createElement(On.a,Object.assign({ref:i,name:e,value:n,onChange:e=>{t(e),a&&a(e)},onBlur:e=>{l(e),o&&o(e)}},c))));Sn.Search=r.forwardRef(({name:e,validate:n,fast:t,onChange:a,onBlur:o,...c},i)=>r.createElement(kn.a,{name:e,validate:n,fast:t},({field:{value:n,onChange:t,onBlur:l}})=>r.createElement(On.a.Search,Object.assign({ref:i,name:e,value:n,onChange:e=>{t(e),a&&a(e)},onBlur:e=>{l(e),o&&o(e)}},c))));var wn=Sn.Search;function An({currentAddress:e,setCurrentAddress:n}){return a.a.createElement(tn.c,{initialValues:{address:e},validationSchema:un,onSubmit:e=>{n(e.address)}},e=>a.a.createElement(rn.a,null,a.a.createElement(an.a,{name:"address"},a.a.createElement(wn,{name:"address",placeholder:"Enter address",enterButton:!0,onSearch:e.submitForm}))))}const Pn=Object(p.b)(Z)`
  & > * {
    --gap: 0;
  }
`,Cn=p.b.div`
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
`,Tn=p.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:zn}=d.a;function Bn({currentAddress:e}){const{getClient:n}=I(),{setError:t}=w(),[o,c]=Object(r.useState)([]);Object(r.useEffect)(()=>{n().getAccount(e).then(({balance:e})=>c(e)).catch(t)},[n,e,t]);const{account:i}=N(),l=i.address===e,s=Object(h.g)();return a.a.createElement(Pn,null,o.map(e=>{const{denom:n,amount:t}=W(e,He.coinMap);return a.a.createElement(Cn,{key:e.denom,"data-state":l?"":"forbidden",onClick:()=>{var n;l&&(n=e,s.push("/tokens/"+n.denom,{tokenAmount:n.amount}))}},a.a.createElement(Tn,null,a.a.createElement(zn,null,n),a.a.createElement(zn,null,"0"!==t?t:"No tokens")))}))}const In=Object(p.b)(Z)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,{Title:Ln}=d.a;function Un(){const{account:e}=N(),[n,t]=Object(r.useState)(e.address);return a.a.createElement(ne,null,a.a.createElement(In,null,a.a.createElement(Ln,null,"Tokens"),a.a.createElement(An,{currentAddress:n,setCurrentAddress:t}),a.a.createElement(Bn,{currentAddress:n}),a.a.createElement(ze,{hideTitle:!0,hideBalance:!0})))}function Dn(){return a.a.createElement(A,null,a.a.createElement(L,{config:He},a.a.createElement(R,null,a.a.createElement(qe,null),a.a.createElement(Fe.a,{basename:"/wallet"},a.a.createElement(h.d,null,a.a.createElement(h.b,{exact:!0,path:"/",component:Ge}),a.a.createElement(h.b,{exact:!0,path:"/login",component:Ge}),a.a.createElement($,{authPath:"/login"},a.a.createElement(h.b,{exact:!0,path:"/tokens",component:Un}),a.a.createElement(h.b,{exact:!0,path:"/tokens/:tokenName",component:jn}),a.a.createElement(h.b,{exact:!0,path:"/result",component:_e})))))))}t(794);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Dn,null)),document.getElementById("root"))}},[[385,1,2]]]);
//# sourceMappingURL=main.a267b34d.chunk.js.map