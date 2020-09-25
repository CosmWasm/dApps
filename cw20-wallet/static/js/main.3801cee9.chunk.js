(this["webpackJsonpcw20-wallet"]=this["webpackJsonpcw20-wallet"]||[]).push([[0],{263:function(e,t){},372:function(e,t,n){e.exports=n.p+"static/media/edit.fdc29000.svg"},373:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.15dccd19.svg"},374:function(e,t,n){e.exports=n.p+"static/media/failIcon.71513020.svg"},375:function(e,t,n){e.exports=n.p+"static/media/successIcon.2e305b66.svg"},381:function(e,t,n){e.exports=n(806)},408:function(e,t){},410:function(e,t){},420:function(e,t){},422:function(e,t){},464:function(e,t){},465:function(e,t){},470:function(e,t){},472:function(e,t){},496:function(e,t){},62:function(e,t,n){e.exports=n.p+"static/media/backArrow.9849fc2e.svg"},805:function(e,t,n){},806:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),l=(n(192),n(121)),s=n.n(l),i=(n(68),n(30)),u=n.n(i),m=(n(73),n(27)),d=n.n(m),f=(n(391),n(366)),p=n.n(f),h=n(6),v=n(37),b=n(817),g=n(362),E=n(77),w=n(118),j=n(23),y={setError:function(){},clearError:function(){}},O=Object(a.createContext)(y),x=function(){return Object(a.useContext)(O)};function A(e){var t=e.children,n=Object(a.useState)(),r=n[0],c=n[1],o={error:r,setError:c,clearError:function(){c(void 0)}};return Object(a.createElement)(O.Provider,{value:o},t)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e){if(!e)return"0";if(e.denom.startsWith("u")){var t=e.denom.slice(1).toUpperCase();return j.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}var C=function(e,t){try{return Promise.resolve(t.getAccounts()).then((function(n){var a=n[0].address,r=function(e){var t=e.feeToken,n=e.gasPrice,a=function(e,t,n){return{amount:[{amount:Math.floor(e*n).toString(),denom:t}],gas:e.toString()}};return{upload:a(15e5,t,n),init:a(6e5,t,n),exec:a(2e5,t,n),migrate:a(6e5,t,n),send:a(8e4,t,n),changeAdmin:a(8e4,t,n)}}(e);return new g.SigningCosmWasmClient(e.httpUrl,a,t,r)}))}catch(n){return Promise.reject(n)}},T=function(e){try{var t=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=E.Bip39.encode(E.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),n=Object(w.makeCosmoshubPath)(0);return Promise.resolve(w.Secp256k1Wallet.fromMnemonic(t,n,e))}catch(a){return Promise.reject(a)}};var P={initialized:!1,address:"",init:function(){},getClient:function(){throw new Error("not yet initialized")}},z=Object(a.createContext)(P),B=function(){return Object(a.useContext)(z)};function $(e){var t=e.config,n=e.loadWallet,r=e.children,c=S({},P,{init:function(){n(t.addressPrefix).then((function(e){return C(t,e)})).then((function(e){try{var n=function(){s({initialized:!0,address:a,init:function(){},getClient:function(){return e}})},a=e.senderAddress,r=function(){if(t.faucetUrl)return Promise.resolve(e.getAccount()).then((function(e){var n=function(){var n;if(!(null===e||void 0===e||null===(n=e.balance)||void 0===n?void 0:n.length))return Promise.resolve(fetch(t.faucetUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:t.faucetToken,address:a})})).then((function(){}))}();if(n&&n.then)return n.then((function(){}))}))}();return Promise.resolve(r&&r.then?r.then(n):n())}catch(c){return Promise.reject(c)}}))}}),o=Object(a.useState)(c),l=o[0],s=o[1];return Object(a.createElement)(z.Provider,{value:l},r)}function I(e){var t=e.config,n=e.children;return Object(a.createElement)($,{config:t,loadWallet:T},n)}var D={refreshAccount:function(){}},N=Object(a.createContext)(D),q=function(){return Object(a.useContext)(N)};function L(e){var t=e.children,n=x().setError,r=B(),c=Object(a.useState)({}),o=c[0],l=c[1];function s(){r.initialized&&r.getClient().getAccount().then((function(e){return l({account:e})})).catch(n)}Object(a.useEffect)(s,[r,n]);var i={refreshAccount:s,account:o.account};return Object(a.createElement)(N.Provider,{value:i},t)}function F(e){var t=e.authPath,n=e.children,a=e.location;return B().initialized?r.a.createElement(v.d,{location:a},n):r.a.createElement(v.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function V(e){var t=(e||"").toString().match(/.*\s*$/g)[0];return t.substring(0,t.lastIndexOf(";"))}var H=n(363),W=n.n(H);function U(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function R(e,t){return t||(t=e.slice(0)),e.raw=t,e}function _(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,c=U(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},c),r)}function M(){var e=R(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return M=function(){return e},e}var J=Object(h.b)(_)(M());function Y(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,c=U(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},c),r)}function G(){var e=R(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return G=function(){return e},e}var K=Object(h.b)(Y)(G());function Q(e){var t=e.children,n=U(e,["children"]);return Object(a.createElement)(J,Object.assign({tag:"main"},n),t)}function X(){var e=R(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return X=function(){return e},e}var Z=Object(h.b)(Q)(X());function ee(e){var t=e.icon,n=e.path,a=e.state,c=U(e,["icon","path","state"]),o=Object(v.g)(),l=n?function(){return o.push(n,a)}:o.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:l},c))}function te(){var e=R(["\n  cursor: pointer;\n"]);return te=function(){return e},e}var ne=Object(h.b)(ee)(te());function ae(){var e=R(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return ae=function(){return e},e}var re=Object(h.b)(p.a)(ae()),ce=Object(a.createElement)(b.a,{style:{fontSize:"6.25rem"},spin:!0});function oe(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(Z,null,Object(a.createElement)(re,{indicator:ce,tip:t}))}function le(){var e=R(["\n  display: block;\n  font-weight: lighter;\n"]);return le=function(){return e},e}function se(){var e=R(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return se=function(){return e},e}function ie(){var e=R(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return ie=function(){return e},e}var ue=d.a.Text,me=Object(h.b)(K)(ie()),de=Object(h.b)(K)(se()),fe=Object(h.b)(ue)(le()),pe=d.a.Title;function he(e){var t=e.pathAfterLogin,n=e.appName,c=e.appLogo,o=Object(v.g)(),l=o.location.state,s=B(),i=q(),m=i.refreshAccount,f=i.account,p=Object(a.useState)(!1),h=p[0],b=p[1];return Object(a.useEffect)((function(){s.initialized&&m()}),[s.initialized,m]),Object(a.useEffect)((function(){f&&(l?o.push(l.redirectPathname,l.redirectState):o.push(t))}),[f,l,o]),h?r.a.createElement(oe,{loadingText:"Initializing app..."}):r.a.createElement(Z,null,r.a.createElement(me,null,r.a.createElement("img",{src:c,alt:"CosmWasm logo"}),r.a.createElement(de,null,r.a.createElement(d.a,null,r.a.createElement(pe,{level:2},"Hello!"),r.a.createElement(fe,null,"Welcome to your ",n),r.a.createElement(fe,null,"Select one of the following options to start:")),r.a.createElement(u.a,{type:"primary",onClick:function(){b(!0),s.init()}},"Browser (Demo)"),r.a.createElement(u.a,{disabled:!0,type:"primary"},"Keplr (Secure)"))))}function ve(){var e=R(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return ve=function(){return e},e}function be(){var e=R(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return be=function(){return e},e}var ge=d.a.Text,Ee=Object(h.b)(K)(be()),we=Object(h.b)(ge)(ve());function je(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,c=Object(v.g)(),o=c.location.state,l=o.success,s=o.message,i=o.error,m=o.customButtonText,d=o.customButtonActionPath,f=o.customButtonActionState;var p=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(c)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:c.goBack}}(l),h=p.icon,b=p.result,g=p.buttonText,E=p.buttonAction,w=m||g,j=d?function(){return c.push(d,f)}:E;return r.a.createElement(Z,null,r.a.createElement(Ee,null,r.a.createElement("img",{src:h,alt:"Result icon"}),r.a.createElement(we,{"data-result":b},s),i&&r.a.createElement(we,{"data-result":b},i),r.a.createElement(u.a,{type:"primary",onClick:j},w)))}function ye(){var e=R(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return ye=function(){return e},e}var Oe=Object(h.b)(K)(ye()),xe=d.a.Title,Ae=d.a.Text;function Se(e){var t,n=e.tag,a=e.hideTitle,c=e.hideBalance,o=null!==(t=q().account)&&void 0!==t?t:{address:"",balance:[]},l=o.address,i=o.balance;return r.a.createElement(Oe,{tag:n},!a&&r.a.createElement("header",null,r.a.createElement(xe,{level:3},"Your Account"),!c&&r.a.createElement(s.a,null)),r.a.createElement(Ae,null,l),!c&&r.a.createElement(Ae,null,"(",function(e){return e&&0!==e.length?e.map(k).join(", "):"\u2013"}(i),")"),r.a.createElement(u.a,{type:"primary",onClick:function(){return W()(l)}},"Copy Account Address"))}function ke(){var e=R(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return ke=function(){return e},e}var Ce=Object(h.a)(ke());function Te(){var e=R(["\n  :root {\n    --color-black: #333;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Te=function(){return e},e}var Pe=Object(h.a)(Te());function ze(){var e=R(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return ze=function(){return e},e}var Be=Object(h.a)(ze());function $e(){var e=R(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return $e=function(){return e},e}var Ie=Object(h.a)($e());function De(){var e=R(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return De=function(){return e},e}var Ne=Object(h.a)(De());function qe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie,null),r.a.createElement(Ne,null),r.a.createElement(Pe,null),r.a.createElement(Be,null),r.a.createElement(Ce,null))}var Le=n(55);const Fe={httpUrl:"https://lcd.coralnet.cosmwasm.com",feeToken:"ushell",gasPrice:.025,faucetUrl:"https://faucet.coralnet.cosmwasm.com/credit",faucetToken:"SHELL",addressPrefix:"coral",coinMap:{ushell:{denom:"SHELL",fractionalDigits:6},ureef:{denom:"REEF",fractionalDigits:6}},codeId:40};var Ve=n(38),He=n(814),We=n(371),Ue=n(815),Re=n(62),_e=n.n(Re),Me=n(66);const Je=new RegExp("^"+Fe.addressPrefix),Ye=Me.d().matches(Je,`"${Fe.addressPrefix}" prefix required`).length(39+Fe.addressPrefix.length,"Address invalid"),Ge=Ye.required("An address is required"),Ke=Me.b().required("An amount is required").positive("Amount should be positive"),Qe=Me.c().shape({contract:Me.a(e=>Number.isNaN(Number(e))?Ge:Me.b().positive())}),Xe=Me.c().shape({address:Ye}),Ze=Me.c().shape({address:Ge}),et=Me.c().shape({newAmount:Ke}),tt=Me.c().shape({address:Ge,amount:Ke}),nt=e=>({use:t=>({contractAddress:t,balance:async n=>{const a=n||e.senderAddress;return(await e.queryContractSmart(t,{balance:{address:a}})).balance},allowance:async(n,a)=>e.queryContractSmart(t,{allowance:{owner:n,spender:a}}),allAllowances:async(n,a,r)=>e.queryContractSmart(t,{all_allowances:{owner:n,start_after:a,limit:r}}),allAccounts:async(n,a)=>(await e.queryContractSmart(t,{all_accounts:{start_after:n,limit:a}})).accounts,tokenInfo:async()=>e.queryContractSmart(t,{token_info:{}}),minter:async()=>e.queryContractSmart(t,{minter:{}}),mint:async(n,a)=>(await e.execute(t,{mint:{recipient:n,amount:a}})).transactionHash,transfer:async(n,a)=>(await e.execute(t,{transfer:{recipient:n,amount:a}})).transactionHash,burn:async n=>(await e.execute(t,{burn:{amount:n}})).transactionHash,increaseAllowance:async(n,a)=>(await e.execute(t,{increase_allowance:{spender:n,amount:a}})).transactionHash,decreaseAllowance:async(n,a)=>(await e.execute(t,{decrease_allowance:{spender:n,amount:a}})).transactionHash,transferFrom:async(n,a,r)=>(await e.execute(t,{transfer_from:{owner:n,recipient:a,amount:r}})).transactionHash})}),at=Object(h.b)(K)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,rt=Object(h.b)(K)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`,ct=Object(h.b)(K)`
  & > * {
    --gap: var(--s2);
  }
`,ot=h.b.div`
  display: flex;
  align-items: baseline;

  span {
    margin-left: var(--s1);
    font-family: var(--ff-iceland);
    font-size: var(--s1);
  }
`,{Title:lt,Text:st}=d.a;var it=function(){const[e,t]=Object(a.useState)(!1),n=Object(v.g)(),{getClient:c}=B(),{account:o}=q(),{contractAddress:l}=Object(v.h)(),[s,i]=Object(a.useState)(""),[m,d]=Object(a.useState)(0);return Object(a.useEffect)(()=>{nt(c()).use(l).tokenInfo().then(e=>{i(e.symbol),d(e.decimals)})},[c,l]),e&&r.a.createElement(oe,{loadingText:"Adding allowance..."})||!e&&r.a.createElement(Z,null,r.a.createElement(at,null,r.a.createElement(ne,{icon:_e.a,path:"/tokens"}),r.a.createElement(lt,null,"Add Allowance"),r.a.createElement(Ve.c,{initialValues:{address:"",amount:""},onSubmit:e=>{t(!0);const{address:a,amount:r}=e,i=nt(c()).use(l);i.allowance(o.address,a).then(({allowance:e})=>{const t=j.Decimal.fromUserInput(r,m),c=j.Decimal.fromAtomics(e,m);try{let e=Promise.reject("");e=t.isGreaterThan(c)?i.increaseAllowance(a,t.minus(c).atomics):i.decreaseAllowance(a,c.minus(t).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${r} ${s} allowance for ${a} successfully added `,customButtonText:"Tokens"}})})}catch(o){console.error(o),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:V(o),customButtonActionPath:"/allowances/"+l}})}})},validationSchema:tt},e=>r.a.createElement(He.a,null,r.a.createElement(rt,null,r.a.createElement(ct,null,r.a.createElement(We.a,{name:"address"},r.a.createElement(Ue.a,{name:"address",placeholder:"Enter address"})),r.a.createElement(ot,null,r.a.createElement(We.a,{name:"amount"},r.a.createElement(Ue.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(st,null,s))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))))};const ut=Object(h.b)(K)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`;function mt({submitChangeAmount:e}){return r.a.createElement(Ve.c,{initialValues:{newAmount:""},onSubmit:e,validationSchema:et},e=>r.a.createElement(He.a,null,r.a.createElement(ut,null,r.a.createElement(We.a,{name:"newAmount"},r.a.createElement(Ue.a,{name:"newAmount",placeholder:"Enter new amount"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))}const dt=Object(h.b)(K)`
  & > * {
    --gap: var(--s3);
  }

  h1 {
    margin: 0;
  }

  & > span {
    font-size: var(--s-1);
  }
`,ft=h.b.div`
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
`,{Title:pt,Text:ht}=d.a;var vt=function(){const[e,t]=Object(a.useState)(!1),n=Object(v.g)(),{getClient:c}=B(),{account:o}=q(),{contractAddress:l,spenderAddress:s}=Object(v.h)(),[i,u]=Object(a.useState)(""),[m,d]=Object(a.useState)(0),[f,p]=Object(a.useState)("0");Object(a.useEffect)(()=>{const e=nt(c()).use(l);e.tokenInfo().then(e=>{u(e.symbol),d(e.decimals)}),e.allowance(o.address,s).then(({allowance:e})=>p(e))},[c,l,o.address,s]);const h=j.Decimal.fromAtomics(f,m).toString();return e&&r.a.createElement(oe,{loadingText:"Changing allowance..."})||!e&&r.a.createElement(Z,null,r.a.createElement(dt,null,r.a.createElement(ne,{icon:_e.a,path:"/tokens"}),r.a.createElement(pt,null,"Allowance"),r.a.createElement(ht,null,s),r.a.createElement(ft,null,r.a.createElement(ht,null,"Current"),r.a.createElement(ht,null,h),r.a.createElement(ht,null,i)),r.a.createElement(mt,{submitChangeAmount:e=>{t(!0);const{newAmount:a}=e,r=j.Decimal.fromUserInput(a,m),o=j.Decimal.fromAtomics(f,m),u=nt(c()).use(l);try{let e=Promise.reject("");e=r.isGreaterThan(o)?u.increaseAllowance(s,r.minus(o).atomics):u.decreaseAllowance(s,o.minus(r).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${i} allowance successfully set to ${a} for ${s}`,customButtonText:"Tokens"}})})}catch(d){console.error(d),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:V(d),customButtonActionPath:"/allowances/"+l}})}}})))},bt=n(372),gt=n.n(bt);const Et=Object(h.b)(K)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,wt=Object(h.b)(K)`
  & > * {
    --gap: var(--s2);
  }
`,jt=h.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,yt=Object(h.b)(K)`
  & > * {
    --gap: var(--s0);
  }
`,Ot=h.b.div`
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
`,xt=h.b.div`
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
`,{Title:At,Text:St}=d.a;var kt=function(){const e=Object(v.g)(),{getClient:t}=B(),{account:n}=q(),{contractAddress:c}=Object(v.h)(),[o,l]=Object(a.useState)([]),[i,m]=Object(a.useState)(""),[d,f]=Object(a.useState)("0"),[p,h]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=nt(t()).use(c);e.tokenInfo().then(({symbol:e,decimals:t})=>{m(e),h(t)}),e.balance(n.address).then(e=>f(e)),e.allAllowances(n.address).then(({allowances:e})=>l(e))},[t,c,n.address]);const b=j.Decimal.fromAtomics(d,p).toString(),[g,E]=b.split("."),w=null!==E&&void 0!==E?E:"";return r.a.createElement(Z,null,r.a.createElement(Et,null,r.a.createElement(ne,{icon:_e.a,path:"/tokens"}),r.a.createElement(wt,null,r.a.createElement(At,null,"Allowances"),r.a.createElement(jt,null,r.a.createElement(St,null,`${g}${w?".":""}`),r.a.createElement(St,null,w," ",i),r.a.createElement(St,null," tokens"))),r.a.createElement(yt,null,o.map((t,n)=>{const a=j.Decimal.fromAtomics(t.allowance,p).toString();return r.a.createElement(r.a.Fragment,null,n>0&&r.a.createElement(s.a,null),r.a.createElement(Ot,null,r.a.createElement(St,null,t.spender),r.a.createElement(xt,null,r.a.createElement(St,null,a),r.a.createElement("img",{alt:"Edit allowance",src:gt.a,onClick:()=>{return n=t.spender,void e.push(`/allowances/${c}/edit/${n}`);var n}}))))})),r.a.createElement(u.a,{type:"primary",onClick:function(){e.push(`/allowances/${c}/add`)}},"Add New")))},Ct=n(373),Tt=n.n(Ct);var Pt=function(){return r.a.createElement(he,{pathAfterLogin:"/tokens",appName:"CW20 Wallet",appLogo:Tt.a})},zt=n(374),Bt=n.n(zt),$t=n(375),It=n.n($t);function Dt(e){e.push("/tokens")}var Nt=function(){return r.a.createElement(je,{defaultButtonAction:Dt,successIcon:It.a,failIcon:Bt.a})},qt=(n(152),n(96)),Lt=n.n(qt),Ft=n(136);const Vt=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:c,...o},l)=>a.createElement(Ft.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Lt.a,Object.assign({ref:l,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),c&&c(e)}},o))));Vt.Search=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:c,...o},l)=>a.createElement(Ft.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Lt.a.Search,Object.assign({ref:l,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),c&&c(e)}},o))));var Ht=Vt.Search;var Wt=function({initialAddress:e,setSearchedAddress:t}){return r.a.createElement(Ve.c,{initialValues:{address:e},validationSchema:Xe,onSubmit:e=>{t(e.address)}},e=>r.a.createElement(He.a,null,r.a.createElement(We.a,{name:"address"},r.a.createElement(Ht,{name:"address",placeholder:"Search",enterButton:!0,onSearch:n=>{e.isValid&&t(n)}}))))};const Ut=Object(h.b)(K)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,Rt=Object(h.b)(K)`
  & > * {
    --gap: var(--s2);
  }
`,_t=h.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,Mt=Object(h.b)(K)`
  & > * {
    --gap: var(--s0);
  }
`,Jt=h.b.div`
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
`,{Title:Yt,Text:Gt}=d.a;var Kt=function(){const e=Object(v.g)(),{getClient:t}=B(),{account:n}=q(),{contractAddress:c,allowingAddress:o}=Object(v.h)(),[l,i]=Object(a.useState)(o),[m,d]=Object(a.useState)(),[f,p]=Object(a.useState)(""),[h,b]=Object(a.useState)("0"),[g,E]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=nt(t()).use(c),a=null!==l&&void 0!==l?l:n.address;e.tokenInfo().then(({symbol:e,decimals:t})=>{p(e),E(t)}),e.balance(a).then(e=>b(e))},[t,c,l,n.address]);const w=j.Decimal.fromAtomics(h,g).toString(),[y,O]=w.split("."),x=j.Decimal.fromAtomics(m,g).toString(),A=!!m&&"0"!==m,S=!m||"0"!==m,k="0"===h,C=!l;return r.a.createElement(Z,null,r.a.createElement(Ut,null,r.a.createElement(ne,{icon:_e.a,path:"/tokens"}),r.a.createElement(Rt,null,r.a.createElement(Yt,null,f),r.a.createElement(Se,{hideTitle:!0,hideBalance:!0})),r.a.createElement(_t,null,r.a.createElement(Gt,null,`${y}${O?".":""}`),O&&r.a.createElement(Gt,null,O),r.a.createElement(Gt,null," tokens")),r.a.createElement(Wt,{initialAddress:l,setSearchedAddress:function(e){if(!e)return i(void 0),void d(void 0);i(e),nt(t()).use(c).allowance(e,n.address).then(e=>d(e.allowance))}}),A&&r.a.createElement(Mt,null,r.a.createElement(s.a,null),r.a.createElement(Jt,null,r.a.createElement(Gt,null,"Your allowance"),r.a.createElement(Gt,null,x))),S&&r.a.createElement(u.a,{type:"primary",onClick:function(){const t=l||"";e.push(`/token/send/${c}/${t}`)},disabled:k},"Send"),C&&r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/allowances/"+c)}},"My allowances")))};const Qt=Object(h.b)(K)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,Xt={contracts:[],addContract:function(){}},Zt=r.a.createContext(Xt),en=()=>r.a.useContext(Zt);function tn({children:e}){const[t,n]=Object(a.useState)(Xt.contracts);const c={contracts:t,addContract:function(e){n(t=>!t.find(t=>t.contractAddress===e.contractAddress)?[...t,e]:t)}};return r.a.createElement(Zt.Provider,{value:c},e)}const nn=Object(h.b)(K)`
  & > * {
    --gap: 0;
  }
`,an=h.b.div`
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
`,rn=h.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:cn}=d.a;async function on(e){const{symbol:t,decimals:n}=await e.tokenInfo(),a=e.contractAddress;return{coin:{denom:t,amount:await e.balance()},fractionalDigits:n,address:a}}function ln(e,t){return e.coin.denom<t.coin.denom?-1:e.coin.denom>t.coin.denom?1:0}var sn=function(){const e=Object(v.g)(),{getClient:t}=B(),{contracts:n,addContract:c}=en(),[o,l]=Object(a.useState)([]);return Object(a.useEffect)(()=>{const e=t();e.getContracts(Fe.codeId).then(t=>{t.forEach(t=>{const n=nt(e).use(t.address);c(n)})})},[t,c]),Object(a.useEffect)(()=>{const e=n.map(on);Promise.all(e).then(e=>l(e.sort(ln)))},[n]),r.a.createElement(nn,null,o.map(t=>{const n=j.Decimal.fromAtomics(t.coin.amount,t.fractionalDigits).toString();return r.a.createElement(an,{key:t.address,onClick:()=>{return n=t.address,void e.push("/token/detail/"+n);var n}},r.a.createElement(rn,null,r.a.createElement(cn,null,t.coin.denom),r.a.createElement(cn,null,"0"!==n?n:"No tokens")))}))};const{Title:un}=d.a;var mn=function(){return r.a.createElement(Z,null,r.a.createElement(Qt,null,r.a.createElement(un,null,"Tokens"),r.a.createElement(sn,null),r.a.createElement(Le.b,{to:"/tokens/add"},r.a.createElement(u.a,{type:"primary"},"Add another")),r.a.createElement(Se,{hideBalance:!0})))},dn=n(816);const fn=Object(h.b)(K)`
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
`,pn=Object(h.b)(K)`
  & > * {
    --gap: var(--s4);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,{Title:hn}=d.a;var vn=function(){const{getClient:e}=B(),{setError:t}=x(),{addContract:n}=en(),c=Object(v.g)(),[o,l]=Object(a.useState)(),[s,i]=Object(a.useState)([]),[m,d]=Object(a.useState)([]);function f(e){d(e)}function p(e,t){return t.title.toLowerCase().indexOf(e.toLowerCase())>=0}const h=!o,b=!h;return r.a.createElement(Z,null,r.a.createElement(ne,{icon:_e.a,path:"/tokens"}),r.a.createElement(fn,null,r.a.createElement(hn,null,"Add Other"),h&&r.a.createElement(Ve.c,{initialValues:{contract:""},onSubmit:function({contract:a}){const r=!Number.isNaN(Number(a))&&Number(a);if(r)e().getContracts(r).then(e=>{i(e),l(r)}).catch(t);else{const t=String(a),r=nt(e()).use(t);r.tokenInfo().then(()=>n(r)).then(()=>c.push({pathname:"/result",state:{success:!0,message:`"${t}" was successfully added :)`,customButtonText:"Tokens"}})).catch(e=>c.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:V(e),customButtonActionPath:"/tokens/add"}}))}},validationSchema:Qe},e=>r.a.createElement(He.a,null,r.a.createElement(pn,null,r.a.createElement(We.a,{name:"contract"},r.a.createElement(Ue.a,{name:"contract",placeholder:"Enter a contract address or codeID"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Continue")))),b&&r.a.createElement(Ve.c,{initialValues:{},onSubmit:function(){m.forEach(t=>{const a=nt(e()).use(t);a.tokenInfo().then(()=>n(a)).catch(e=>c.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:V(e),customButtonActionPath:"/tokens/add"}}))}),c.push({pathname:"/result",state:{success:!0,message:`"Your CodeID: ${o}" were successfully added :)`,customButtonText:"Tokens"}})}},e=>r.a.createElement(He.a,null,r.a.createElement(pn,null,r.a.createElement(We.a,{name:"contracts"},r.a.createElement(dn.a,{name:"contracts",showSearch:!0,filterOption:p,dataSource:s.map(e=>({key:e.address,title:e.label})),onSelectChange:f,listStyle:{listStyle:"none"},render:e=>e.title})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!m.length},"Continue"))))))};const bn=Object(h.b)(K)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,gn=h.b.div`
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
`,{Text:En}=d.a;function wn({tokenName:e,maxAmount:t,sendTokensAction:n}){const a=Me.c().shape({amount:Ke.max(t.toFloatApproximation(),"Amount cannot be greater than "+t.toString())}).concat(Ze);return r.a.createElement(Ve.c,{initialValues:{amount:"",address:""},onSubmit:n,validationSchema:a},t=>r.a.createElement(He.a,null,r.a.createElement(bn,null,r.a.createElement(gn,null,r.a.createElement(En,null,"Send"),r.a.createElement(We.a,{name:"amount"},r.a.createElement(Ue.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(En,null,e)),r.a.createElement(gn,null,r.a.createElement(En,null,"to"),r.a.createElement(We.a,{name:"address"},r.a.createElement(Ue.a,{name:"address",placeholder:"Enter address"}))),r.a.createElement(u.a,{type:"primary",onClick:t.submitForm,disabled:!(t.isValid&&t.dirty)},"Send"))))}const jn=Object(h.b)(K)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,yn=Object(h.b)(K)`
  & > * {
    --gap: var(--s2);
  }
`,On=h.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:xn,Text:An}=d.a;var Sn=function(){const[e,t]=Object(a.useState)(!1),n=Object(v.g)(),{getClient:c}=B(),{account:o,refreshAccount:l}=q(),{contractAddress:s,allowingAddress:i}=Object(v.h)(),u=`/token/detail/${s}/${null!==i&&void 0!==i?i:""}`,[m,d]=Object(a.useState)(""),[f,p]=Object(a.useState)("0"),[h,b]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=nt(c()).use(s),t=null!==i&&void 0!==i?i:o.address;e.tokenInfo().then(({symbol:e,decimals:t})=>{d(e),b(t)}),i?e.allowance(i,o.address).then(e=>p(e.allowance)):e.balance(t).then(e=>p(e))},[c,s,i,o.address]);const g=j.Decimal.fromAtomics(f,h).toString(),[E,w]=g.split("."),y=j.Decimal.fromAtomics(f,h);return e&&r.a.createElement(oe,{loadingText:`Sending ${m}...`})||!e&&r.a.createElement(Z,null,r.a.createElement(jn,null,r.a.createElement(ne,{icon:_e.a,path:"/tokens"}),r.a.createElement(yn,null,r.a.createElement(xn,null,m),r.a.createElement(Se,{hideTitle:!0,hideBalance:!0})),r.a.createElement(On,null,r.a.createElement(An,null,`${E}${w?".":""}`),w&&r.a.createElement(An,null,w),r.a.createElement(An,null," tokens")),r.a.createElement(wn,{tokenName:m,maxAmount:y,sendTokensAction:e=>{t(!0);const{address:a,amount:r}=e,o=j.Decimal.fromUserInput(r,h).atomics,d=nt(c()).use(s);try{i?d.transferFrom(i,a,o).then(e=>{if(!e)return Promise.reject("Transfer from failed");l(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a} with allowance from ${i}`,customButtonText:"Token detail",customButtonActionPath:u}})}):d.transfer(a,o).then(e=>{if(!e)return Promise.reject("Transfer failed");l(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a}`,customButtonText:"Token detail",customButtonActionPath:u}})})}catch(f){console.error(f),n.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:V(f),customButtonActionPath:u}})}}})))};var kn=function(){return r.a.createElement(A,null,r.a.createElement(I,{config:Fe},r.a.createElement(L,null,r.a.createElement(tn,null,r.a.createElement(qe,null),r.a.createElement(Le.a,{basename:"/cw20-wallet"},r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/",component:Pt}),r.a.createElement(v.b,{exact:!0,path:"/login",component:Pt}),r.a.createElement(F,{authPath:"/login"},r.a.createElement(v.b,{exact:!0,path:"/tokens",component:mn}),r.a.createElement(v.b,{exact:!0,path:"/tokens/add/:codeId?",component:vn}),r.a.createElement(v.b,{exact:!0,path:"/token/detail/:contractAddress/:allowingAddress?",component:Kt}),r.a.createElement(v.b,{exact:!0,path:"/token/send/:contractAddress/:allowingAddress?",component:Sn}),r.a.createElement(v.b,{exact:!0,path:"/allowances/:contractAddress",component:kt}),r.a.createElement(v.b,{exact:!0,path:"/allowances/:contractAddress/add",component:it}),r.a.createElement(v.b,{exact:!0,path:"/allowances/:contractAddress/edit/:spenderAddress",component:vt}),r.a.createElement(v.b,{exact:!0,path:"/result",component:Nt}))))))))};n(805);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(kn,null)),document.getElementById("root"))}},[[381,1,2]]]);
//# sourceMappingURL=main.3801cee9.chunk.js.map