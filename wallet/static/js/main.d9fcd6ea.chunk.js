(this.webpackJsonpwallet=this.webpackJsonpwallet||[]).push([[0],{262:function(e,n){},374:function(e,n,t){e.exports=t.p+"static/media/cosmWasmLogo.15dccd19.svg"},375:function(e,n,t){e.exports=t.p+"static/media/failIcon.71513020.svg"},376:function(e,n,t){e.exports=t.p+"static/media/successIcon.2e305b66.svg"},377:function(e,n,t){e.exports=t.p+"static/media/backArrow.9849fc2e.svg"},385:function(e,n,t){e.exports=t(795)},413:function(e,n){},415:function(e,n){},425:function(e,n){},427:function(e,n){},469:function(e,n){},470:function(e,n){},475:function(e,n){},477:function(e,n){},501:function(e,n){},794:function(e,n,t){},795:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(17),c=t.n(o),i=(t(390),t(373)),l=t.n(i),s=(t(184),t(69)),u=t.n(s),m=(t(125),t(35)),f=t.n(m),d=(t(397),t(366)),v=t.n(d),h=t(10),p=t(18),g=t(802),b=t(357),E=t(59),x=t(33),y=t(358),k=t(359),j=t(48);var O={setError:function(){},clearError:function(){}},P=Object(r.createContext)(O),w=function(){return Object(r.useContext)(P)};function S(e){var n=e.children,t=Object(r.useState)(),a=t[0],o=t[1],c={error:a,setError:o,clearError:function(){o(void 0)}};return Object(r.createElement)(P.Provider,{value:c},n)}function A(){return(A=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var T=function(e){try{var n=window;if(!n.getOfflineSigner)throw new Error("Keplr extension is not available");return Promise.resolve(n.getOfflineSigner(e))}catch(t){return Promise.reject(t)}},C=function(e,n){try{return Promise.resolve(k.a.create(12e4,12e4)).then((function(e){return new y.LedgerSigner(e,{hdPaths:[Object(x.makeCosmoshubPath)(0)],prefix:n})}))}catch(t){return Promise.reject(t)}},z=function(e,n){try{var t=function(){var e="burner-wallet",n=localStorage.getItem(e);if(n)return n;var t=E.Bip39.encode(E.Random.getBytes(16)).toString();return localStorage.setItem(e,t),t}(),r=Object(x.makeCosmoshubPath)(0);return Promise.resolve(x.Secp256k1HdWallet.fromMnemonic(t,r,n))}catch(a){return Promise.reject(a)}};var B={initialized:!1,address:"",init:function(){return Promise.resolve()},clear:function(){},getClient:function(){throw new Error("not yet initialized")},getStakingClient:function(){throw new Error("not yet initialized")}},D=Object(r.createContext)(B),I=function(){return Object(r.useContext)(D)};function M(e){var n=e.config,t=e.children,a=A({},B,{init:function(e){try{return Promise.resolve(function(e,n){try{return Promise.resolve(n.getAccounts()).then((function(t){var r=t[0].address,a=x.GasPrice.fromString(""+e.gasPrice+e.feeToken);return new b.SigningCosmWasmClient(e.httpUrl,r,n,a,{upload:15e5,init:6e5,exec:4e5,migrate:6e5,send:8e4,changeAdmin:8e4})}))}catch(t){return Promise.reject(t)}}(n,e)).then((function(e){function t(){var t,a=(t=n.httpUrl,x.LcdClient.withExtensions({apiUrl:t},x.setupStakingExtension));i({initialized:!0,address:r,init:function(){return Promise.resolve()},clear:l,getClient:function(){return e},getStakingClient:function(){return a}})}var r=e.senderAddress,a=function(){if(n.faucetUrl)return Promise.resolve(e.getAccount()).then((function(e){var t=function(){var t;if(!(null===e||void 0===e||null===(t=e.balance)||void 0===t?void 0:t.length))return Promise.resolve(fetch(n.faucetUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:n.faucetToken,address:r})})).then((function(){}))}();if(t&&t.then)return t.then((function(){}))}))}();return a&&a.then?a.then(t):t()}))}catch(t){return Promise.reject(t)}}}),o=Object(r.useState)(a),c=o[0],i=o[1];function l(){i(A({},a))}return Object(r.createElement)(D.Provider,{value:c},t)}var L={refreshAccount:function(){}},U=Object(r.createContext)(L),N=function(){return Object(r.useContext)(U)};function R(e){var n=e.children,t=w().setError,a=I(),o=Object(r.useState)({}),c=o[0],i=o[1];function l(){a.initialized&&a.getClient().getAccount().then((function(e){return i({account:e})})).catch(t)}Object(r.useEffect)(l,[a,t]);var s={refreshAccount:l,account:c.account};return Object(r.createElement)(U.Provider,{value:s},n)}function $(e){var n=e.authPath,t=e.children,r=e.location;return I().initialized?a.a.createElement(p.d,{location:r},t):a.a.createElement(p.a,{to:{pathname:n,state:r?{redirectPathname:r.pathname,redirectState:r.state}:void 0}})}function W(e){if(!e)return"0";if(e.denom.startsWith("u")){var n=e.denom.slice(1).toUpperCase();return j.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+n}return e.amount+"\u202f"+e.denom}function q(e,n){if(!n)return e;var t=n[e.denom];if(!t)return e;var r=j.Decimal.fromAtomics(e.amount,t.fractionalDigits).toString();return{denom:t.denom,amount:r}}function F(e){var n=(e||"").toString(),t=n.match(/.*\s*$/g)[0];return t.substring(0,t.lastIndexOf(";"))||n}var H=t(362),V=t.n(H);function J(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function K(e,n){return n||(n=e.slice(0)),e.raw=n,e}function G(e){var n=e.tag,t=void 0===n?"div":n,a=e.children,o=J(e,["tag","children"]);return Object(r.createElement)(t,Object.assign({},o),a)}function Y(){var e=K(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Y=function(){return e},e}var Q=Object(h.b)(G)(Y());function X(e){var n=e.tag,t=void 0===n?"div":n,a=e.children,o=J(e,["tag","children"]);return Object(r.createElement)(t,Object.assign({},o),a)}function Z(){var e=K(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return Z=function(){return e},e}var _=Object(h.b)(X)(Z());function ee(e){var n=e.children,t=J(e,["children"]);return Object(r.createElement)(Q,Object.assign({tag:"main"},t),n)}function ne(){var e=K(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return ne=function(){return e},e}var te=Object(h.b)(ee)(ne());function re(e){var n=e.icon,t=e.path,r=e.state,o=J(e,["icon","path","state"]),c=Object(p.g)(),i=t?function(){return c.push(t,r)}:c.goBack;return a.a.createElement("img",Object.assign({src:n,alt:"Back arrow",onClick:i},o))}function ae(){var e=K(["\n  cursor: pointer;\n"]);return ae=function(){return e},e}var oe=Object(h.b)(re)(ae());function ce(){var e=K(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return ce=function(){return e},e}var ie=Object(h.b)(v.a)(ce()),le=Object(r.createElement)(g.a,{style:{fontSize:"6.25rem"},spin:!0});function se(e){var n=e.loadingText||"Loading...";return Object(r.createElement)(te,null,Object(r.createElement)(ie,{indicator:le,tip:n}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function ue(e,n){try{var t=e()}catch(r){return n(r)}return t&&t.then?t.then(void 0,n):t}function me(){var e=K(["\n  color: var(--color-red);\n"]);return me=function(){return e},e}function fe(){var e=K(["\n  display: block;\n  font-weight: lighter;\n"]);return fe=function(){return e},e}function de(){var e=K(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return de=function(){return e},e}function ve(){var e=K(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return ve=function(){return e},e}var he=f.a.Text,pe=Object(h.b)(_)(ve()),ge=Object(h.b)(_)(de()),be=Object(h.b)(he)(fe()),Ee=Object(h.b)(he)(me()),xe=f.a.Title;function ye(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function ke(e){var n=function(e){try{j(!0),h();var n=ue((function(){return Promise.resolve(e(t.chainId,t.addressPrefix)).then((function(e){return Promise.resolve(g.init(e)).then((function(){}))}))}),(function(e){console.error(e),v(Error(e).message),j(!1)}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(r){return Promise.reject(r)}},t=e.config,o=e.pathAfterLogin,c=e.appName,i=e.appLogo,l=Object(p.g)(),s=l.location.state,m=w(),d=m.error,v=m.setError,h=m.clearError,g=I(),b=N(),E=b.refreshAccount,x=b.account,y=Object(r.useState)(!1),k=y[0],j=y[1];return Object(r.useEffect)((function(){g.initialized&&E()}),[g.initialized,E]),Object(r.useEffect)((function(){x&&(s?l.push(s.redirectPathname,s.redirectState):l.push(o))}),[x,s,l]),k?a.a.createElement(se,{loadingText:"Initializing app..."}):a.a.createElement(te,null,a.a.createElement(pe,null,a.a.createElement("img",{src:i,alt:"CosmWasm logo"}),a.a.createElement(ge,null,a.a.createElement(f.a,null,a.a.createElement(xe,{level:2},"Hello!"),a.a.createElement(be,null,"Welcome to your ",c),a.a.createElement(be,null,"Select one of the following options to start:")),d&&a.a.createElement(Ee,null,d),a.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(n(z)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),a.a.createElement(u.a,{type:"primary",disabled:ye(),onClick:function(){try{return Promise.resolve(n(C)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure, Chrome)"),a.a.createElement(u.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,r=ue((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118}}(t))).then((function(){return Promise.resolve(e.keplr.enable(t.chainId)).then((function(){return Promise.resolve(n(T)).then((function(){}))}))}))}),(function(e){console.error(e),v(Error(e).message)}));return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(a){return Promise.reject(a)}}},"Keplr (Secure)"))))}function je(){var e=K(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return je=function(){return e},e}function Oe(){var e=K(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Oe=function(){return e},e}var Pe=f.a.Text,we=Object(h.b)(_)(Oe()),Se=Object(h.b)(Pe)(je());function Ae(e){var n=e.defaultButtonAction,t=e.successIcon,r=e.failIcon,o=Object(p.g)(),c=o.location.state,i=c.success,l=c.message,s=c.error,m=c.customButtonText,f=c.customButtonActionPath,d=c.customButtonActionState;var v=function(e){return e?{result:"success",icon:t,buttonText:"Home",buttonAction:function(){return n(o)}}:{result:"failure",icon:r,buttonText:"Retry",buttonAction:o.goBack}}(i),h=v.icon,g=v.result,b=v.buttonText,E=v.buttonAction,x=m||b,y=f?function(){return o.push(f,d)}:E;return a.a.createElement(te,null,a.a.createElement(we,null,a.a.createElement("img",{src:h,alt:"Result icon"}),a.a.createElement(Se,{"data-result":g},l),s&&a.a.createElement(Se,{"data-result":g},s),a.a.createElement(u.a,{type:"primary",onClick:y},x)))}function Te(){var e=K(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return Te=function(){return e},e}var Ce=Object(h.b)(_)(Te()),ze=f.a.Title,Be=f.a.Text;function De(e){var n,t=e.tag,r=e.hideTitle,o=e.hideBalance,c=null!==(n=N().account)&&void 0!==n?n:{address:"",balance:[]},i=c.address,s=c.balance;return a.a.createElement(Ce,{tag:t},!r&&a.a.createElement("header",null,a.a.createElement(ze,{level:3},"Your Account"),!o&&a.a.createElement(l.a,null)),a.a.createElement(Be,null,i),!o&&a.a.createElement(Be,null,"(",function(e){return e&&0!==e.length?e.map(W).join(", "):"\u2013"}(s),")"),a.a.createElement(u.a,{type:"primary",onClick:function(){return V()(i)}},"Copy Account Address"))}function Ie(){var e=K(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Ie=function(){return e},e}var Me=Object(h.a)(Ie());function Le(){var e=K(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Le=function(){return e},e}var Ue=Object(h.a)(Le());function Ne(){var e=K(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return Ne=function(){return e},e}var Re=Object(h.a)(Ne());function $e(){var e=K(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return $e=function(){return e},e}var We=Object(h.a)($e());function qe(){var e=K(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return qe=function(){return e},e}var Fe=Object(h.a)(qe());function He(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(We,null),a.a.createElement(Fe,null),a.a.createElement(Ue,null),a.a.createElement(Re,null),a.a.createElement(Me,null))}var Ve=t(109);const Je={chainId:"cosmwasm-coral",chainName:"Coral",addressPrefix:"coral",rpcUrl:"https://rpc.coralnet.cosmwasm.com",httpUrl:"https://lcd.coralnet.cosmwasm.com",faucetUrl:"https://faucet.coralnet.cosmwasm.com/credit",feeToken:"ushell",stakingToken:"ureef",faucetToken:"SHELL",coinMap:{ushell:{denom:"SHELL",fractionalDigits:6},ureef:{denom:"REEF",fractionalDigits:6}},gasPrice:.025};var Ke=t(374),Ge=t.n(Ke);function Ye(){return a.a.createElement(ke,{pathAfterLogin:"/tokens",appName:"Wallet",appLogo:Ge.a,config:Je})}var Qe=t(375),Xe=t.n(Qe),Ze=t(376),_e=t.n(Ze);function en(e){e.push("/tokens")}function nn(){return a.a.createElement(Ae,{defaultButtonAction:en,successIcon:_e.a,failIcon:Xe.a})}var tn=t(377),rn=t.n(tn),an=t(39),on=t(800),cn=t(381),ln=t(801),sn=t(96);const un=new RegExp("^"+Je.addressPrefix),mn={address:sn.c().required("An address is required").matches(un,`"${Je.addressPrefix}" prefix required`).length(39+Je.addressPrefix.length,"Address invalid")},fn=sn.b().shape(mn),dn=sn.b().shape(mn),vn=Object(h.b)(_)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,hn=h.b.div`
  display: flex;
  align-items: baseline;

  & > * + * {
    margin-left: var(--s0);
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }
`,{Text:pn}=f.a;function gn({tokenName:e,tokenAmount:n,sendTokensAction:t}){const r=sn.b().shape({amount:sn.a().required("An amount is required").positive("Amount should be positive").max(parseFloat(n),"Amount cannot be greater than "+n)}).concat(dn);return a.a.createElement(an.c,{initialValues:{amount:"",address:""},onSubmit:t,validationSchema:r},n=>a.a.createElement(on.a,null,a.a.createElement(vn,null,a.a.createElement(hn,null,a.a.createElement(pn,null,"Send"),a.a.createElement(cn.a,{name:"amount"},a.a.createElement(ln.a,{name:"amount",placeholder:"Enter amount"})),a.a.createElement(pn,null,e)),a.a.createElement(hn,null,a.a.createElement(pn,null,"to"),a.a.createElement(cn.a,{name:"address"},a.a.createElement(ln.a,{name:"address",placeholder:"Enter address"}))),a.a.createElement(u.a,{type:"primary",onClick:n.submitForm,disabled:!(n.isValid&&n.dirty)},"Send"))))}const bn=Object(h.b)(_)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,En=Object(h.b)(_)`
  & > * {
    --gap: var(--s2);
  }
`,xn=h.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:yn,Text:kn}=f.a;function jn(){const[e,n]=Object(r.useState)(!1),t=Object(p.g)(),{tokenName:o}=Object(p.h)(),{tokenAmount:c}=t.location.state,{getClient:i}=I(),l=N(),s={denom:o,amount:c},{denom:u,amount:m}=q(s,Je.coinMap),[f,d]=m.split(".");return e&&a.a.createElement(se,{loadingText:`Sending ${u}...`})||!e&&a.a.createElement(te,null,a.a.createElement(bn,null,a.a.createElement(oe,{icon:rn.a,path:"/tokens"}),a.a.createElement(En,null,a.a.createElement(yn,null,u),a.a.createElement(De,{hideTitle:!0,hideBalance:!0})),a.a.createElement(xn,null,a.a.createElement(kn,null,`${f}${d?".":""}`),d&&a.a.createElement(kn,null,d),a.a.createElement(kn,null," tokens")),a.a.createElement(gn,{tokenName:u,tokenAmount:m,sendTokensAction:e=>{n(!0);const{address:r,amount:a}=e,s=r,u=function(e,n,t){var r,a=null===(r=n[t])||void 0===r?void 0:r.fractionalDigits;return a?j.Decimal.fromUserInput(e,a).atomics:e}(a,Je.coinMap,o),m=[{denom:o,amount:u}];i().sendTokens(s,m).then(e=>{if(Object(x.isBroadcastTxFailure)(e))return Promise.reject(e.rawLog);l.refreshAccount(),t.push({pathname:"/result",state:{success:!0,message:`${a} ${o} successfully sent to ${s}`,customButtonText:"Tokens"}})}).catch(e=>{console.error(e);const n="/tokens/"+o,r={tokenAmount:c};t.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:F(e),customButtonActionPath:n,customButtonActionState:r}})})}})))}t(185);var On=t(95),Pn=t.n(On),wn=t(183);const Sn=r.forwardRef(({name:e,validate:n,fast:t,onChange:a,onBlur:o,...c},i)=>r.createElement(wn.a,{name:e,validate:n,fast:t},({field:{value:n,onChange:t,onBlur:l}})=>r.createElement(Pn.a,Object.assign({ref:i,name:e,value:n,onChange:e=>{t(e),a&&a(e)},onBlur:e=>{l(e),o&&o(e)}},c))));Sn.Search=r.forwardRef(({name:e,validate:n,fast:t,onChange:a,onBlur:o,...c},i)=>r.createElement(wn.a,{name:e,validate:n,fast:t},({field:{value:n,onChange:t,onBlur:l}})=>r.createElement(Pn.a.Search,Object.assign({ref:i,name:e,value:n,onChange:e=>{t(e),a&&a(e)},onBlur:e=>{l(e),o&&o(e)}},c))));var An=Sn.Search;function Tn({currentAddress:e,setCurrentAddress:n}){return a.a.createElement(an.c,{initialValues:{address:e},validationSchema:fn,onSubmit:e=>{n(e.address)}},e=>a.a.createElement(on.a,null,a.a.createElement(cn.a,{name:"address"},a.a.createElement(An,{name:"address",placeholder:"Enter address",enterButton:!0,onSearch:e.submitForm}))))}const Cn=Object(h.b)(_)`
  & > * {
    --gap: 0;
  }
`,zn=h.b.div`
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
`,Bn=h.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:Dn}=f.a;function In({currentAddress:e}){const{getClient:n}=I(),{setError:t}=w(),[o,c]=Object(r.useState)([]);Object(r.useEffect)(()=>{n().getAccount(e).then(({balance:e})=>c(e)).catch(t)},[n,e,t]);const{account:i}=N(),l=i.address===e,s=Object(p.g)();return a.a.createElement(Cn,null,o.map(e=>{const{denom:n,amount:t}=q(e,Je.coinMap);return a.a.createElement(zn,{key:e.denom,"data-state":l?"":"forbidden",onClick:()=>{var n;l&&(n=e,s.push("/tokens/"+n.denom,{tokenAmount:n.amount}))}},a.a.createElement(Bn,null,a.a.createElement(Dn,null,n),a.a.createElement(Dn,null,"0"!==t?t:"No tokens")))}))}const Mn=Object(h.b)(_)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,{Title:Ln}=f.a;function Un(){const{account:e}=N(),[n,t]=Object(r.useState)(e.address);return a.a.createElement(te,null,a.a.createElement(Mn,null,a.a.createElement(Ln,null,"Tokens"),a.a.createElement(Tn,{currentAddress:n,setCurrentAddress:t}),a.a.createElement(In,{currentAddress:n}),a.a.createElement(De,{hideTitle:!0,hideBalance:!0})))}function Nn(){return a.a.createElement(S,null,a.a.createElement(M,{config:Je},a.a.createElement(R,null,a.a.createElement(He,null),a.a.createElement(Ve.a,{basename:"/wallet"},a.a.createElement(p.d,null,a.a.createElement(p.b,{exact:!0,path:"/",component:Ye}),a.a.createElement(p.b,{exact:!0,path:"/login",component:Ye}),a.a.createElement($,{authPath:"/login"},a.a.createElement(p.b,{exact:!0,path:"/tokens",component:Un}),a.a.createElement(p.b,{exact:!0,path:"/tokens/:tokenName",component:jn}),a.a.createElement(p.b,{exact:!0,path:"/result",component:nn})))))))}t(794);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Nn,null)),document.getElementById("root"))}},[[385,1,2]]]);
//# sourceMappingURL=main.d9fcd6ea.chunk.js.map