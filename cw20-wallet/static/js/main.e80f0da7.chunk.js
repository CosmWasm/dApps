(this["webpackJsonpcw20-wallet"]=this["webpackJsonpcw20-wallet"]||[]).push([[0],{289:function(e,t){},409:function(e,t,n){e.exports=n.p+"static/media/edit.fdc29000.svg"},410:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.15dccd19.svg"},411:function(e,t,n){e.exports=n.p+"static/media/failIcon.71513020.svg"},412:function(e,t,n){e.exports=n.p+"static/media/successIcon.2e305b66.svg"},418:function(e,t,n){e.exports=n(871)},444:function(e,t){},446:function(e,t){},456:function(e,t){},458:function(e,t){},500:function(e,t){},501:function(e,t){},506:function(e,t){},508:function(e,t){},532:function(e,t){},65:function(e,t,n){e.exports=n.p+"static/media/backArrow.9849fc2e.svg"},870:function(e,t,n){},871:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),l=(n(209),n(127)),s=n.n(l),i=(n(71),n(28)),u=n.n(i),m=(n(79),n(29)),d=n.n(m),f=(n(428),n(403)),h=n.n(f),v=n(6),p=n(37),b=n(882),g=n(395),E=n(74),y=n(58),j=n(396),w=n(397),O=n(22),x={setError:function(){},clearError:function(){}},S=Object(a.createContext)(x),A=function(){return Object(a.useContext)(S)};function P(e){var t=e.children,n=Object(a.useState)(),r=n[0],c=n[1],o={error:r,setError:c,clearError:function(){c(void 0)}};return Object(a.createElement)(S.Provider,{value:o},t)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var C=function(e){try{return Promise.resolve(w.a.create(12e4,12e4)).then((function(t){return new j.LedgerSigner(t,{hdPaths:[Object(y.makeCosmoshubPath)(0)],prefix:e})}))}catch(t){return Promise.reject(t)}},T=function(e){try{var t=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=E.Bip39.encode(E.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),n=Object(y.makeCosmoshubPath)(0);return Promise.resolve(y.Secp256k1HdWallet.fromMnemonic(t,n,e))}catch(a){return Promise.reject(a)}};var z={initialized:!1,address:"",init:function(){return Promise.resolve()},clear:function(){},getClient:function(){throw new Error("not yet initialized")},getStakingClient:function(){throw new Error("not yet initialized")}},B=Object(a.createContext)(z),I=function(){return Object(a.useContext)(B)};function $(e){var t=e.config,n=e.children,r=k({},z,{init:function(e){try{return Promise.resolve(function(e,t){try{return Promise.resolve(t.getAccounts()).then((function(n){var a=n[0].address,r=y.GasPrice.fromString(""+e.gasPrice+e.feeToken);return new g.SigningCosmWasmClient(e.httpUrl,a,t,r,{upload:15e5,init:6e5,exec:2e5,migrate:6e5,send:8e4,changeAdmin:8e4})}))}catch(n){return Promise.reject(n)}}(t,e)).then((function(e){function n(){var n,r=(n=t.httpUrl,y.LcdClient.withExtensions({apiUrl:n},y.setupStakingExtension));l({initialized:!0,address:a,init:function(){return Promise.resolve()},clear:s,getClient:function(){return e},getStakingClient:function(){return r}})}var a=e.senderAddress,r=function(){if(t.faucetUrl)return Promise.resolve(e.getAccount()).then((function(e){var n=function(){var n;if(!(null===e||void 0===e||null===(n=e.balance)||void 0===n?void 0:n.length))return Promise.resolve(fetch(t.faucetUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:t.faucetToken,address:a})})).then((function(){}))}();if(n&&n.then)return n.then((function(){}))}))}();return r&&r.then?r.then(n):n()}))}catch(n){return Promise.reject(n)}}}),c=Object(a.useState)(r),o=c[0],l=c[1];function s(){l(k({},r))}return Object(a.createElement)(B.Provider,{value:o},n)}var D={refreshAccount:function(){}},N=Object(a.createContext)(D),L=function(){return Object(a.useContext)(N)};function q(e){var t=e.children,n=A().setError,r=I(),c=Object(a.useState)({}),o=c[0],l=c[1];function s(){r.initialized&&r.getClient().getAccount().then((function(e){return l({account:e})})).catch(n)}Object(a.useEffect)(s,[r,n]);var i={refreshAccount:s,account:o.account};return Object(a.createElement)(N.Provider,{value:i},t)}var H={contracts:[],addContract:function(){}},F=r.a.createContext(H),U=function(){return r.a.useContext(F)};function V(e){var t=e.children,n=Object(a.useState)(H.contracts),c=n[0],o=n[1];var l={contracts:c,addContract:function(e){o((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(F.Provider,{value:l},t)}var R=function(e){return{use:function(t){return{contractAddress:t,balance:function(n){try{var a=n||e.senderAddress;return Promise.resolve(e.queryContractSmart(t,{balance:{address:a}})).then((function(e){return e.balance}))}catch(r){return Promise.reject(r)}},allowance:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{allowance:{owner:n,spender:a}}))}catch(r){return Promise.reject(r)}},allAllowances:function(n,a,r){try{return Promise.resolve(e.queryContractSmart(t,{all_allowances:{owner:n,start_after:a,limit:r}}))}catch(c){return Promise.reject(c)}},allAccounts:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{all_accounts:{start_after:n,limit:a}})).then((function(e){return e.accounts}))}catch(r){return Promise.reject(r)}},tokenInfo:function(){try{return Promise.resolve(e.queryContractSmart(t,{token_info:{}}))}catch(n){return Promise.reject(n)}},investment:function(){try{return Promise.resolve(e.queryContractSmart(t,{investment:{}}))}catch(n){return Promise.reject(n)}},claims:function(n){try{return Promise.resolve(e.queryContractSmart(t,{claims:{address:n}}))}catch(a){return Promise.reject(a)}},minter:function(){try{return Promise.resolve(e.queryContractSmart(t,{minter:{}}))}catch(n){return Promise.reject(n)}},mint:function(n,a){try{return Promise.resolve(e.execute(t,{mint:{recipient:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},transfer:function(n,a){try{return Promise.resolve(e.execute(t,{transfer:{recipient:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},burn:function(n){try{return Promise.resolve(e.execute(t,{burn:{amount:n}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},increaseAllowance:function(n,a){try{return Promise.resolve(e.execute(t,{increase_allowance:{spender:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},decreaseAllowance:function(n,a){try{return Promise.resolve(e.execute(t,{decrease_allowance:{spender:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},transferFrom:function(n,a,r){try{return Promise.resolve(e.execute(t,{transfer_from:{owner:n,recipient:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(c){return Promise.reject(c)}},bond:function(n){try{return Promise.resolve(e.execute(t,{bond:{}},void 0,[n])).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},unbond:function(n){try{return Promise.resolve(e.execute(t,{unbond:{amount:n}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}}}}}};function W(e){var t=e.authPath,n=e.children,a=e.location;return I().initialized?r.a.createElement(p.d,{location:a},n):r.a.createElement(p.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function _(e){if(!e)return"0";if(e.denom.startsWith("u")){var t=e.denom.slice(1).toUpperCase();return O.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}function M(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var G=n(400),J=n.n(G);function Y(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function K(e,t){return t||(t=e.slice(0)),e.raw=t,e}function Q(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,c=Y(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},c),r)}function X(){var e=K(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return X=function(){return e},e}var Z=Object(v.b)(Q)(X());function ee(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,c=Y(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},c),r)}function te(){var e=K(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return te=function(){return e},e}var ne=Object(v.b)(ee)(te());function ae(e){var t=e.children,n=Y(e,["children"]);return Object(a.createElement)(Z,Object.assign({tag:"main"},n),t)}function re(){var e=K(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return re=function(){return e},e}var ce=Object(v.b)(ae)(re());function oe(e){var t=e.icon,n=e.path,a=e.state,c=Y(e,["icon","path","state"]),o=Object(p.g)(),l=n?function(){return o.push(n,a)}:o.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:l},c))}function le(){var e=K(["\n  cursor: pointer;\n"]);return le=function(){return e},e}var se=Object(v.b)(oe)(le());function ie(){var e=K(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return ie=function(){return e},e}var ue=Object(v.b)(h.a)(ie()),me=Object(a.createElement)(b.a,{style:{fontSize:"6.25rem"},spin:!0});function de(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(ce,null,Object(a.createElement)(ue,{indicator:me,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function fe(){var e=K(["\n  color: var(--color-red);\n"]);return fe=function(){return e},e}function he(){var e=K(["\n  display: block;\n  font-weight: lighter;\n"]);return he=function(){return e},e}function ve(){var e=K(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return ve=function(){return e},e}function pe(){var e=K(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return pe=function(){return e},e}var be=d.a.Text,ge=Object(v.b)(ne)(pe()),Ee=Object(v.b)(ne)(ve()),ye=Object(v.b)(be)(he()),je=Object(v.b)(be)(fe()),we=d.a.Title;function Oe(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function xe(e){var t=function(e){try{O(!0),v();var t=function(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}((function(){return Promise.resolve(e(n)).then((function(e){return Promise.resolve(b.init(e)).then((function(){}))}))}),(function(e){console.error(e),h(Error(e).message),O(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.addressPrefix,c=e.pathAfterLogin,o=e.appName,l=e.appLogo,s=Object(p.g)(),i=s.location.state,m=A(),f=m.error,h=m.setError,v=m.clearError,b=I(),g=L(),E=g.refreshAccount,y=g.account,j=Object(a.useState)(!1),w=j[0],O=j[1];return Object(a.useEffect)((function(){b.initialized&&E()}),[b.initialized,E]),Object(a.useEffect)((function(){y&&(i?s.push(i.redirectPathname,i.redirectState):s.push(c))}),[y,i,s]),w?r.a.createElement(de,{loadingText:"Initializing app..."}):r.a.createElement(ce,null,r.a.createElement(ge,null,r.a.createElement("img",{src:l,alt:"CosmWasm logo"}),r.a.createElement(Ee,null,r.a.createElement(d.a,null,r.a.createElement(we,{level:2},"Hello!"),r.a.createElement(ye,null,"Welcome to your ",o),r.a.createElement(ye,null,"Select one of the following options to start:")),f&&r.a.createElement(je,null,f),r.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(T)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),r.a.createElement(u.a,{type:"primary",disabled:Oe(),onClick:function(){try{return Promise.resolve(t(C)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure)"),r.a.createElement(u.a,{type:"primary",disabled:!0},"Keplr (Secure)"))))}function Se(){var e=K(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return Se=function(){return e},e}function Ae(){var e=K(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Ae=function(){return e},e}var Pe=d.a.Text,ke=Object(v.b)(ne)(Ae()),Ce=Object(v.b)(Pe)(Se());function Te(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,c=Object(p.g)(),o=c.location.state,l=o.success,s=o.message,i=o.error,m=o.customButtonText,d=o.customButtonActionPath,f=o.customButtonActionState;var h=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(c)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:c.goBack}}(l),v=h.icon,b=h.result,g=h.buttonText,E=h.buttonAction,y=m||g,j=d?function(){return c.push(d,f)}:E;return r.a.createElement(ce,null,r.a.createElement(ke,null,r.a.createElement("img",{src:v,alt:"Result icon"}),r.a.createElement(Ce,{"data-result":b},s),i&&r.a.createElement(Ce,{"data-result":b},i),r.a.createElement(u.a,{type:"primary",onClick:j},y)))}function ze(){var e=K(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return ze=function(){return e},e}var Be=Object(v.b)(ne)(ze()),Ie=d.a.Title,$e=d.a.Text;function De(e){var t,n=e.tag,a=e.hideTitle,c=e.hideBalance,o=null!==(t=L().account)&&void 0!==t?t:{address:"",balance:[]},l=o.address,i=o.balance;return r.a.createElement(Be,{tag:n},!a&&r.a.createElement("header",null,r.a.createElement(Ie,{level:3},"Your Account"),!c&&r.a.createElement(s.a,null)),r.a.createElement($e,null,l),!c&&r.a.createElement($e,null,"(",function(e){return e&&0!==e.length?e.map(_).join(", "):"\u2013"}(i),")"),r.a.createElement(u.a,{type:"primary",onClick:function(){return J()(l)}},"Copy Account Address"))}function Ne(){var e=K(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Ne=function(){return e},e}var Le=Object(v.a)(Ne());function qe(){var e=K(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return qe=function(){return e},e}var He=Object(v.a)(qe());function Fe(){var e=K(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return Fe=function(){return e},e}var Ue=Object(v.a)(Fe());function Ve(){var e=K(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return Ve=function(){return e},e}var Re=Object(v.a)(Ve());function We(){var e=K(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return We=function(){return e},e}var _e=Object(v.a)(We());function Me(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,null),r.a.createElement(_e,null),r.a.createElement(He,null),r.a.createElement(Ue,null),r.a.createElement(Le,null))}var Ge=n(57);const Je={httpUrl:"https://lcd.coralnet.cosmwasm.com",feeToken:"ushell",gasPrice:.025,faucetUrl:"https://faucet.coralnet.cosmwasm.com/credit",faucetToken:"SHELL",addressPrefix:"coral",coinMap:{ushell:{denom:"SHELL",fractionalDigits:6},ureef:{denom:"REEF",fractionalDigits:6}},codeId:40};var Ye=n(38),Ke=n(879),Qe=n(408),Xe=n(880),Ze=n(65),et=n.n(Ze),tt=n(69);const nt=new RegExp("^"+Je.addressPrefix),at=tt.d().matches(nt,`"${Je.addressPrefix}" prefix required`).length(39+Je.addressPrefix.length,"Address invalid"),rt=at.required("An address is required"),ct=tt.b().required("An amount is required").positive("Amount should be positive"),ot=tt.c().shape({contract:tt.a(e=>Number.isNaN(Number(e))?rt:tt.b().positive())}),lt=tt.c().shape({address:at}),st=tt.c().shape({address:rt}),it=tt.c().shape({newAmount:ct}),ut=tt.c().shape({address:rt,amount:ct}),mt=Object(v.b)(ne)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,dt=Object(v.b)(ne)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`,ft=Object(v.b)(ne)`
  & > * {
    --gap: var(--s2);
  }
`,ht=v.b.div`
  display: flex;
  align-items: baseline;

  span {
    margin-left: var(--s1);
    font-family: var(--ff-iceland);
    font-size: var(--s1);
  }
`,{Title:vt,Text:pt}=d.a;var bt=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:c}=I(),{account:o}=L(),{contractAddress:l}=Object(p.h)(),[s,i]=Object(a.useState)(""),[m,d]=Object(a.useState)(0);return Object(a.useEffect)(()=>{R(c()).use(l).tokenInfo().then(e=>{i(e.symbol),d(e.decimals)})},[c,l]),e&&r.a.createElement(de,{loadingText:"Adding allowance..."})||!e&&r.a.createElement(ce,null,r.a.createElement(mt,null,r.a.createElement(se,{icon:et.a,path:"/tokens"}),r.a.createElement(vt,null,"Add Allowance"),r.a.createElement(Ye.c,{initialValues:{address:"",amount:""},onSubmit:e=>{t(!0);const{address:a,amount:r}=e,i=R(c()).use(l);i.allowance(o.address,a).then(({allowance:e})=>{const t=O.Decimal.fromUserInput(r,m),c=O.Decimal.fromAtomics(e,m);try{let e=Promise.reject("");e=t.isGreaterThan(c)?i.increaseAllowance(a,t.minus(c).atomics):i.decreaseAllowance(a,c.minus(t).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${r} ${s} allowance for ${a} successfully added `,customButtonText:"Tokens"}})})}catch(o){console.error(o),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:M(o),customButtonActionPath:"/allowances/"+l}})}})},validationSchema:ut},e=>r.a.createElement(Ke.a,null,r.a.createElement(dt,null,r.a.createElement(ft,null,r.a.createElement(Qe.a,{name:"address"},r.a.createElement(Xe.a,{name:"address",placeholder:"Enter address"})),r.a.createElement(ht,null,r.a.createElement(Qe.a,{name:"amount"},r.a.createElement(Xe.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(pt,null,s))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))))};const gt=Object(v.b)(ne)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`;function Et({submitChangeAmount:e}){return r.a.createElement(Ye.c,{initialValues:{newAmount:""},onSubmit:e,validationSchema:it},e=>r.a.createElement(Ke.a,null,r.a.createElement(gt,null,r.a.createElement(Qe.a,{name:"newAmount"},r.a.createElement(Xe.a,{name:"newAmount",placeholder:"Enter new amount"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))}const yt=Object(v.b)(ne)`
  & > * {
    --gap: var(--s3);
  }

  h1 {
    margin: 0;
  }

  & > span {
    font-size: var(--s-1);
  }
`,jt=v.b.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  & > * + * {
    margin-left: var(--s-1);
  }

  span {
    font-size: var(--s-1);
  }

  span + span {
    font-size: var(--s1);
    font-weight: bolder;
  }
`,{Title:wt,Text:Ot}=d.a;var xt=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:c}=I(),{account:o}=L(),{contractAddress:l,spenderAddress:s}=Object(p.h)(),[i,u]=Object(a.useState)(""),[m,d]=Object(a.useState)(0),[f,h]=Object(a.useState)("0");Object(a.useEffect)(()=>{const e=R(c()).use(l);e.tokenInfo().then(e=>{u(e.symbol),d(e.decimals)}),e.allowance(o.address,s).then(({allowance:e})=>h(e))},[c,l,o.address,s]);const v=O.Decimal.fromAtomics(f,m).toString();return e&&r.a.createElement(de,{loadingText:"Changing allowance..."})||!e&&r.a.createElement(ce,null,r.a.createElement(yt,null,r.a.createElement(se,{icon:et.a,path:"/tokens"}),r.a.createElement(wt,null,"Allowance"),r.a.createElement(Ot,null,s),r.a.createElement(jt,null,r.a.createElement(Ot,null,"Current"),r.a.createElement(Ot,null,v),r.a.createElement(Ot,null,i)),r.a.createElement(Et,{submitChangeAmount:e=>{t(!0);const{newAmount:a}=e,r=O.Decimal.fromUserInput(a,m),o=O.Decimal.fromAtomics(f,m),u=R(c()).use(l);try{let e=Promise.reject("");e=r.isGreaterThan(o)?u.increaseAllowance(s,r.minus(o).atomics):u.decreaseAllowance(s,o.minus(r).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${i} allowance successfully set to ${a} for ${s}`,customButtonText:"Tokens"}})})}catch(d){console.error(d),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:M(d),customButtonActionPath:"/allowances/"+l}})}}})))},St=n(409),At=n.n(St);const Pt=Object(v.b)(ne)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,kt=Object(v.b)(ne)`
  & > * {
    --gap: var(--s2);
  }
`,Ct=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,Tt=Object(v.b)(ne)`
  & > * {
    --gap: var(--s0);
  }
`,zt=v.b.div`
  max-width: var(--max-width);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: var(--s1);
  }

  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: var(--s-1);
  }
`,Bt=v.b.div`
  display: flex;
  align-items: center;

  span + img {
    margin-left: var(--s-2);
  }

  span {
    font-size: var(--s1);
    font-weight: bolder;
  }

  img {
    cursor: pointer;
    height: var(--s-1);
  }
`,{Title:It,Text:$t}=d.a;var Dt=function(){const e=Object(p.g)(),{getClient:t}=I(),{account:n}=L(),{contractAddress:c}=Object(p.h)(),[o,l]=Object(a.useState)([]),[i,m]=Object(a.useState)(""),[d,f]=Object(a.useState)("0"),[h,v]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=R(t()).use(c);e.tokenInfo().then(({symbol:e,decimals:t})=>{m(e),v(t)}),e.balance(n.address).then(e=>f(e)),e.allAllowances(n.address).then(({allowances:e})=>l(e))},[t,c,n.address]);const b=O.Decimal.fromAtomics(d,h).toString(),[g,E]=b.split("."),y=null!==E&&void 0!==E?E:"";return r.a.createElement(ce,null,r.a.createElement(Pt,null,r.a.createElement(se,{icon:et.a,path:"/tokens"}),r.a.createElement(kt,null,r.a.createElement(It,null,"Allowances"),r.a.createElement(Ct,null,r.a.createElement($t,null,`${g}${y?".":""}`),r.a.createElement($t,null,y," ",i),r.a.createElement($t,null," tokens"))),r.a.createElement(Tt,null,o.map((t,n)=>{const a=O.Decimal.fromAtomics(t.allowance,h).toString();return r.a.createElement(r.a.Fragment,null,n>0&&r.a.createElement(s.a,null),r.a.createElement(zt,null,r.a.createElement($t,null,t.spender),r.a.createElement(Bt,null,r.a.createElement($t,null,a),r.a.createElement("img",{alt:"Edit allowance",src:At.a,onClick:()=>{return n=t.spender,void e.push(`/allowances/${c}/edit/${n}`);var n}}))))})),r.a.createElement(u.a,{type:"primary",onClick:function(){e.push(`/allowances/${c}/add`)}},"Add New")))},Nt=n(410),Lt=n.n(Nt);var qt=function(){return r.a.createElement(xe,{pathAfterLogin:"/tokens",appName:"CW20 Wallet",appLogo:Lt.a,addressPrefix:Je.addressPrefix})},Ht=n(411),Ft=n.n(Ht),Ut=n(412),Vt=n.n(Ut);function Rt(e){e.push("/tokens")}var Wt=function(){return r.a.createElement(Te,{defaultButtonAction:Rt,successIcon:Vt.a,failIcon:Ft.a})},_t=(n(161),n(102)),Mt=n.n(_t),Gt=n(143);const Jt=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:c,...o},l)=>a.createElement(Gt.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Mt.a,Object.assign({ref:l,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),c&&c(e)}},o))));Jt.Search=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:c,...o},l)=>a.createElement(Gt.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Mt.a.Search,Object.assign({ref:l,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),c&&c(e)}},o))));var Yt=Jt.Search;var Kt=function({initialAddress:e,setSearchedAddress:t}){return r.a.createElement(Ye.c,{initialValues:{address:e},validationSchema:lt,onSubmit:e=>{t(e.address)}},e=>r.a.createElement(Ke.a,null,r.a.createElement(Qe.a,{name:"address"},r.a.createElement(Yt,{name:"address",placeholder:"Search",enterButton:!0,onSearch:n=>{e.isValid&&t(n)}}))))};const Qt=Object(v.b)(ne)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,Xt=Object(v.b)(ne)`
  & > * {
    --gap: var(--s2);
  }
`,Zt=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,en=Object(v.b)(ne)`
  & > * {
    --gap: var(--s0);
  }
`,tn=v.b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }

  span + span {
    font-family: var(--ff-montserrat);
    font-size: var(--s1);
    font-weight: bolder;
  }
`,{Title:nn,Text:an}=d.a;var rn=function(){const e=Object(p.g)(),{getClient:t}=I(),{account:n}=L(),{contractAddress:c,allowingAddress:o}=Object(p.h)(),[l,i]=Object(a.useState)(o),[m,d]=Object(a.useState)(),[f,h]=Object(a.useState)(""),[v,b]=Object(a.useState)("0"),[g,E]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=R(t()).use(c),a=null!==l&&void 0!==l?l:n.address;e.tokenInfo().then(({symbol:e,decimals:t})=>{h(e),E(t)}),e.balance(a).then(e=>b(e))},[t,c,l,n.address]);const y=O.Decimal.fromAtomics(v,g).toString(),[j,w]=y.split("."),x=O.Decimal.fromAtomics(m,g).toString(),S=!!m&&"0"!==m,A=!m||"0"!==m,P="0"===v,k=!l;return r.a.createElement(ce,null,r.a.createElement(Qt,null,r.a.createElement(se,{icon:et.a,path:"/tokens"}),r.a.createElement(Xt,null,r.a.createElement(nn,null,f),r.a.createElement(De,{hideTitle:!0,hideBalance:!0})),r.a.createElement(Zt,null,r.a.createElement(an,null,`${j}${w?".":""}`),w&&r.a.createElement(an,null,w),r.a.createElement(an,null," tokens")),r.a.createElement(Kt,{initialAddress:l,setSearchedAddress:function(e){if(!e)return i(void 0),void d(void 0);i(e),R(t()).use(c).allowance(e,n.address).then(e=>d(e.allowance))}}),S&&r.a.createElement(en,null,r.a.createElement(s.a,null),r.a.createElement(tn,null,r.a.createElement(an,null,"Your allowance"),r.a.createElement(an,null,x))),A&&r.a.createElement(u.a,{type:"primary",onClick:function(){const t=l||"";e.push(`/token/send/${c}/${t}`)},disabled:P},"Send"),k&&r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/allowances/"+c)}},"My allowances")))};const cn=Object(v.b)(ne)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,on=Object(v.b)(ne)`
  & > * {
    --gap: 0;
  }
`,ln=v.b.div`
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
`,sn=v.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:un}=d.a;async function mn(e){const{symbol:t,decimals:n}=await e.tokenInfo(),a=e.contractAddress;return{coin:{denom:t,amount:await e.balance()},fractionalDigits:n,address:a}}function dn(e,t){return e.coin.denom<t.coin.denom?-1:e.coin.denom>t.coin.denom?1:0}var fn=function(){const e=Object(p.g)(),{getClient:t}=I(),{contracts:n,addContract:c}=U(),[o,l]=Object(a.useState)([]);return Object(a.useEffect)(()=>{const e=t();e.getContracts(Je.codeId).then(t=>{t.forEach(t=>{const n=R(e).use(t.address);c(n)})})},[t,c]),Object(a.useEffect)(()=>{const e=n.map(mn);Promise.all(e).then(e=>l(e.sort(dn)))},[n]),r.a.createElement(on,null,o.map(t=>{const n=O.Decimal.fromAtomics(t.coin.amount,t.fractionalDigits).toString();return r.a.createElement(ln,{key:t.address,onClick:()=>{return n=t.address,void e.push("/token/detail/"+n);var n}},r.a.createElement(sn,null,r.a.createElement(un,null,t.coin.denom),r.a.createElement(un,null,"0"!==n?n:"No tokens")))}))};const{Title:hn}=d.a;var vn=function(){return r.a.createElement(ce,null,r.a.createElement(cn,null,r.a.createElement(hn,null,"Tokens"),r.a.createElement(fn,null),r.a.createElement(Ge.b,{to:"/tokens/add"},r.a.createElement(u.a,{type:"primary"},"Add another")),r.a.createElement(De,{hideBalance:!0})))},pn=n(881);const bn=Object(v.b)(ne)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-transfer {
    width: 100%;

    & > *:first-child {
      width: 100%;
    }

    & > *:not(:first-child) {
      display: none;
    }

    .ant-transfer-list {
      height: auto;
      max-height: 300px;
    }

    .ant-transfer-list-content-item-text {
      text-align: left;
    }
  }
`,gn=Object(v.b)(ne)`
  & > * {
    --gap: var(--s4);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,{Title:En}=d.a;var yn=function(){const{getClient:e}=I(),{setError:t}=A(),{addContract:n}=U(),c=Object(p.g)(),[o,l]=Object(a.useState)(),[s,i]=Object(a.useState)([]),[m,d]=Object(a.useState)([]);function f(e){d(e)}function h(e,t){return t.title.toLowerCase().indexOf(e.toLowerCase())>=0}const v=!o,b=!v;return r.a.createElement(ce,null,r.a.createElement(se,{icon:et.a,path:"/tokens"}),r.a.createElement(bn,null,r.a.createElement(En,null,"Add Other"),v&&r.a.createElement(Ye.c,{initialValues:{contract:""},onSubmit:function({contract:a}){const r=!Number.isNaN(Number(a))&&Number(a);if(r)e().getContracts(r).then(e=>{i(e),l(r)}).catch(t);else{const t=String(a),r=R(e()).use(t);r.tokenInfo().then(()=>n(r)).then(()=>c.push({pathname:"/result",state:{success:!0,message:`"${t}" was successfully added :)`,customButtonText:"Tokens"}})).catch(e=>c.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:M(e),customButtonActionPath:"/tokens/add"}}))}},validationSchema:ot},e=>r.a.createElement(Ke.a,null,r.a.createElement(gn,null,r.a.createElement(Qe.a,{name:"contract"},r.a.createElement(Xe.a,{name:"contract",placeholder:"Enter a contract address or codeID"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Continue")))),b&&r.a.createElement(Ye.c,{initialValues:{},onSubmit:function(){m.forEach(t=>{const a=R(e()).use(t);a.tokenInfo().then(()=>n(a)).catch(e=>c.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:M(e),customButtonActionPath:"/tokens/add"}}))}),c.push({pathname:"/result",state:{success:!0,message:`"Your CodeID: ${o}" were successfully added :)`,customButtonText:"Tokens"}})}},e=>r.a.createElement(Ke.a,null,r.a.createElement(gn,null,r.a.createElement(Qe.a,{name:"contracts"},r.a.createElement(pn.a,{name:"contracts",showSearch:!0,filterOption:h,dataSource:s.map(e=>({key:e.address,title:e.label})),onSelectChange:f,listStyle:{listStyle:"none"},render:e=>e.title})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!m.length},"Continue"))))))};const jn=Object(v.b)(ne)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,wn=v.b.div`
  display: flex;
  align-items: baseline;

  & > * + * {
    margin-left: var(--s0);
  }

  .ant-form-item {
    flex-grow: 1;
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }
`,{Text:On}=d.a;function xn({tokenName:e,maxAmount:t,sendTokensAction:n}){const a=tt.c().shape({amount:ct.max(t.toFloatApproximation(),"Amount cannot be greater than "+t.toString())}).concat(st);return r.a.createElement(Ye.c,{initialValues:{amount:"",address:""},onSubmit:n,validationSchema:a},t=>r.a.createElement(Ke.a,null,r.a.createElement(jn,null,r.a.createElement(wn,null,r.a.createElement(On,null,"Send"),r.a.createElement(Qe.a,{name:"amount"},r.a.createElement(Xe.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(On,null,e)),r.a.createElement(wn,null,r.a.createElement(On,null,"to"),r.a.createElement(Qe.a,{name:"address"},r.a.createElement(Xe.a,{name:"address",placeholder:"Enter address"}))),r.a.createElement(u.a,{type:"primary",onClick:t.submitForm,disabled:!(t.isValid&&t.dirty)},"Send"))))}const Sn=Object(v.b)(ne)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,An=Object(v.b)(ne)`
  & > * {
    --gap: var(--s2);
  }
`,Pn=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:kn,Text:Cn}=d.a;var Tn=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:c}=I(),{account:o,refreshAccount:l}=L(),{contractAddress:s,allowingAddress:i}=Object(p.h)(),u=`/token/detail/${s}/${null!==i&&void 0!==i?i:""}`,[m,d]=Object(a.useState)(""),[f,h]=Object(a.useState)("0"),[v,b]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=R(c()).use(s),t=null!==i&&void 0!==i?i:o.address;e.tokenInfo().then(({symbol:e,decimals:t})=>{d(e),b(t)}),i?e.allowance(i,o.address).then(e=>h(e.allowance)):e.balance(t).then(e=>h(e))},[c,s,i,o.address]);const g=O.Decimal.fromAtomics(f,v).toString(),[E,y]=g.split("."),j=O.Decimal.fromAtomics(f,v);return e&&r.a.createElement(de,{loadingText:`Sending ${m}...`})||!e&&r.a.createElement(ce,null,r.a.createElement(Sn,null,r.a.createElement(se,{icon:et.a,path:"/tokens"}),r.a.createElement(An,null,r.a.createElement(kn,null,m),r.a.createElement(De,{hideTitle:!0,hideBalance:!0})),r.a.createElement(Pn,null,r.a.createElement(Cn,null,`${E}${y?".":""}`),y&&r.a.createElement(Cn,null,y),r.a.createElement(Cn,null," tokens")),r.a.createElement(xn,{tokenName:m,maxAmount:j,sendTokensAction:e=>{t(!0);const{address:a,amount:r}=e,o=O.Decimal.fromUserInput(r,v).atomics,d=R(c()).use(s);try{i?d.transferFrom(i,a,o).then(e=>{if(!e)return Promise.reject("Transfer from failed");l(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a} with allowance from ${i}`,customButtonText:"Token detail",customButtonActionPath:u}})}):d.transfer(a,o).then(e=>{if(!e)return Promise.reject("Transfer failed");l(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a}`,customButtonText:"Token detail",customButtonActionPath:u}})})}catch(f){console.error(f),n.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:M(f),customButtonActionPath:u}})}}})))};var zn=function(){return r.a.createElement(P,null,r.a.createElement($,{config:Je},r.a.createElement(q,null,r.a.createElement(V,null,r.a.createElement(Me,null),r.a.createElement(Ge.a,{basename:"/cw20-wallet"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:qt}),r.a.createElement(p.b,{exact:!0,path:"/login",component:qt}),r.a.createElement(W,{authPath:"/login"},r.a.createElement(p.b,{exact:!0,path:"/tokens",component:vn}),r.a.createElement(p.b,{exact:!0,path:"/tokens/add/:codeId?",component:yn}),r.a.createElement(p.b,{exact:!0,path:"/token/detail/:contractAddress/:allowingAddress?",component:rn}),r.a.createElement(p.b,{exact:!0,path:"/token/send/:contractAddress/:allowingAddress?",component:Tn}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress",component:Dt}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress/add",component:bt}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress/edit/:spenderAddress",component:xt}),r.a.createElement(p.b,{exact:!0,path:"/result",component:Wt}))))))))};n(870);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(zn,null)),document.getElementById("root"))}},[[418,1,2]]]);
//# sourceMappingURL=main.e80f0da7.chunk.js.map