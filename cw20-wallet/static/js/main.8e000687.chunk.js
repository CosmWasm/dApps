(this["webpackJsonpcw20-wallet"]=this["webpackJsonpcw20-wallet"]||[]).push([[0],{327:function(e,t){},473:function(e,t,n){e.exports=n.p+"static/media/edit.fdc29000.svg"},474:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.15dccd19.svg"},475:function(e,t,n){e.exports=n.p+"static/media/failIcon.71513020.svg"},476:function(e,t,n){e.exports=n.p+"static/media/successIcon.2e305b66.svg"},482:function(e,t,n){e.exports=n(996)},519:function(e,t){},521:function(e,t){},531:function(e,t){},533:function(e,t){},575:function(e,t){},576:function(e,t){},581:function(e,t){},583:function(e,t){},607:function(e,t){},68:function(e,t,n){e.exports=n.p+"static/media/backArrow.9849fc2e.svg"},995:function(e,t,n){},996:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),c=n.n(o),i=(n(228),n(139)),s=n.n(i),l=(n(74),n(29)),u=n.n(l),m=(n(82),n(30)),f=n.n(m),d=(n(492),n(467)),h=n.n(d),v=n(6),p=n(39),b=n(1007),g=n(458),E=n(51),y=n(41),w=n(459),j=n(116),x=n(115),S=n(460),O=n(463),P=n(17);var k={contracts:[],addContract:function(){}},A=r.a.createContext(k),C=function(){return r.a.useContext(A)};function T(e){var t=e.children,n=Object(a.useState)(k.contracts),o=n[0],c=n[1];var i={contracts:o,addContract:function(e){c((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(A.Provider,{value:i},t)}var I=function(e){return{use:function(t){return{contractAddress:t,balance:function(n){try{return Promise.resolve(e.queryContractSmart(t,{balance:{address:n}})).then((function(e){return e.balance}))}catch(a){return Promise.reject(a)}},allowance:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{allowance:{owner:n,spender:a}}))}catch(r){return Promise.reject(r)}},allAllowances:function(n,a,r){try{return Promise.resolve(e.queryContractSmart(t,{all_allowances:{owner:n,start_after:a,limit:r}}))}catch(o){return Promise.reject(o)}},allAccounts:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{all_accounts:{start_after:n,limit:a}})).then((function(e){return e.accounts}))}catch(r){return Promise.reject(r)}},tokenInfo:function(){try{return Promise.resolve(e.queryContractSmart(t,{token_info:{}}))}catch(n){return Promise.reject(n)}},investment:function(){try{return Promise.resolve(e.queryContractSmart(t,{investment:{}}))}catch(n){return Promise.reject(n)}},claims:function(n){try{return Promise.resolve(e.queryContractSmart(t,{claims:{address:n}}))}catch(a){return Promise.reject(a)}},minter:function(){try{return Promise.resolve(e.queryContractSmart(t,{minter:{}}))}catch(n){return Promise.reject(n)}},mint:function(n,a,r){try{return Promise.resolve(e.execute(n,t,{mint:{recipient:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},transfer:function(n,a,r){try{return Promise.resolve(e.execute(n,t,{transfer:{recipient:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},burn:function(n,a){try{return Promise.resolve(e.execute(n,t,{burn:{amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},increaseAllowance:function(n,a,r){try{return Promise.resolve(e.execute(n,t,{increase_allowance:{spender:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},decreaseAllowance:function(n,a,r){try{return Promise.resolve(e.execute(n,t,{decrease_allowance:{spender:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},transferFrom:function(n,a,r,o){try{return Promise.resolve(e.execute(n,t,{transfer_from:{owner:a,recipient:r,amount:o}})).then((function(e){return e.transactionHash}))}catch(c){return Promise.reject(c)}},bond:function(n,a){try{return Promise.resolve(e.execute(n,t,{bond:{}},void 0,[a])).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},unbond:function(n,a){try{return Promise.resolve(e.execute(n,t,{unbond:{amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},claim:function(n){try{return Promise.resolve(e.execute(n,t,{claim:{}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}}}}}},B={setError:function(){},clearError:function(){}},D=Object(a.createContext)(B),z=function(){return Object(a.useContext)(D)};function $(e){var t=e.children,n=Object(a.useState)(),r=n[0],o=n[1],c={error:r,setError:o,clearError:function(){o(void 0)}};return Object(a.createElement)(D.Provider,{value:c},t)}var M=function(e){try{var t,n=window;if(!n.getOfflineSigner)throw new Error("Keplr extension is not available");var a=n.getOfflineSigner(e);return a.signAmino=null!==(t=a.signAmino)&&void 0!==t?t:a.sign,Promise.resolve(a)}catch(r){return Promise.reject(r)}},N=function(e,t){try{return Promise.resolve(S.a.create(12e4,12e4)).then((function(e){return new w.LedgerSigner(e,{hdPaths:[Object(y.makeCosmoshubPath)(0)],prefix:t})}))}catch(n){return Promise.reject(n)}},U=function(e,t){try{var n=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=E.Bip39.encode(E.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),a=Object(y.makeCosmoshubPath)(0);return Promise.resolve(y.Secp256k1HdWallet.fromMnemonic(n,a,t))}catch(r){return Promise.reject(r)}};function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var F=function(){function e(){}return e.prototype.then=function(t,n){var a=new e,r=this.s;if(r){var o=1&r?t:n;if(o){try{L(a,1,o(this.v))}catch(c){L(a,2,c)}return a}return this}return this.o=function(e){try{var r=e.v;1&e.s?L(a,1,t?t(r):r):n?L(a,1,n(r)):L(a,2,r)}catch(c){L(a,2,c)}},a},e}();function L(e,t,n){if(!e.s){if(n instanceof F){if(!n.s)return void(n.o=L.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(L.bind(null,e,t),L.bind(null,e,2));e.s=t,e.v=n;var a=e.o;a&&a(e)}}function V(e,t,n){var a=[];for(var r in e)a.push(r);return function(e,t,n){var a,r,o=-1;return function c(i){try{for(;++o<e.length&&(!n||!n());)if((i=t(o))&&i.then){if(!((s=i)instanceof F&&1&s.s))return void i.then(c,r||(r=L.bind(null,a=new F,2)));i=i.v}a?L(a,1,i):a=i}catch(l){L(a||(a=new F),2,l)}var s}(),a}(a,(function(e){return t(a[e])}),n)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function H(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function W(){throw new Error("Not yet initialized")}var R={initialized:!1,init:W,clear:W,config:{},changeConfig:W,address:"",balance:[],refreshBalance:W,hitFaucet:W,getSigner:W,changeSigner:W,getClient:W,getStakingClient:W},_=Object(a.createContext)(R),Y=function(){return Object(a.useContext)(_)};function G(e){var t=function(e){try{if(!s.faucetUrl||!s.feeToken)return Promise.resolve();var t=H((function(){var t=new O.FaucetClient(s.faucetUrl);return Promise.resolve(t.credit(e,s.feeToken)).then((function(){}))}),(function(e){c(e.message),console.error(e)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(n){return Promise.reject(n)}},n=function(e,t){try{if(!h)return Promise.resolve();t.length=0;var n=V(s.coinMap,(function(n){return Promise.resolve(h.getBalance(e,n)).then((function(e){e&&t.push(e)}))}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},r=e.config,o=e.children,c=z().setError,i=Object(a.useState)(r),s=i[0],l=i[1],u=Object(a.useState)(),m=u[0],f=u[1],d=Object(a.useState)(),h=d[0],v=d[1],p=q({},R,{init:f}),b=Object(a.useState)(p),E=b[0],w=b[1];function S(){w(q({},p)),v(void 0),f(void 0),l(r)}function P(e){l((function(t){return q({},t,e)}))}return Object(a.useEffect)((function(){m&&function(){try{var e=H((function(){return Promise.resolve(function(e,t){try{return Promise.resolve(g.SigningCosmWasmClient.connectWithSigner(e.rpcUrl,t,{prefix:e.addressPrefix,gasPrice:y.GasPrice.fromString(""+e.gasPrice+e.feeToken),gasLimits:{upload:15e5,init:6e5,exec:4e5,migrate:6e5,send:8e4,changeAdmin:8e4}}))}catch(n){return Promise.reject(n)}}(s,m)).then((function(e){v(e)}))}),(function(e){c(e.message)}));e&&e.then&&e.then((function(){}))}catch(t){Promise.reject(t)}}()}),[m,s]),Object(a.useEffect)((function(){if(m&&h){var e=[];!function(){try{Promise.resolve(m.getAccounts()).then((function(a){var r=a[0].address;return Promise.resolve(n(r,e)).then((function(){function a(){return Promise.resolve(n(r,e)).then((function(){return Promise.resolve(function(e){try{return Promise.resolve(x.Client.connect(e,x.adaptor34)).then((function(e){return j.QueryClient.withExtensions(e,j.setupStakingExtension,j.setupDistributionExtension)}))}catch(t){return Promise.reject(t)}}(s.rpcUrl)).then((function(a){w({initialized:!0,init:function(){},clear:S,config:s,changeConfig:P,address:r,balance:e,refreshBalance:n.bind(null,r,e),hitFaucet:t.bind(null,r),getSigner:function(){return m},changeSigner:f,getClient:function(){return h},getStakingClient:function(){return a}})}))}))}var o=function(){if(!e.find((function(e){return e.denom===s.feeToken})))return Promise.resolve(t(r)).then((function(){}))}();return o&&o.then?o.then(a):a()}))}))}catch(a){Promise.reject(a)}}()}}),[h]),Object(a.createElement)(_.Provider,{value:E},o)}function J(e){var t=e.authPath,n=e.children,a=e.location;return Y().initialized?r.a.createElement(p.d,{location:a},n):r.a.createElement(p.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function K(e){if(!e)return"0";if(e.denom.startsWith("u")){var t=e.denom.slice(1).toUpperCase();return P.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}function Q(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var X=n(464),Z=n.n(X);function ee(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function te(e,t){return t||(t=e.slice(0)),e.raw=t,e}function ne(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=ee(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function ae(){var e=te(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ae=function(){return e},e}var re=Object(v.b)(ne)(ae());function oe(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=ee(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function ce(){var e=te(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return ce=function(){return e},e}var ie=Object(v.b)(oe)(ce());function se(e){var t=e.children,n=ee(e,["children"]);return Object(a.createElement)(re,Object.assign({tag:"main"},n),t)}function le(){var e=te(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return le=function(){return e},e}var ue=Object(v.b)(se)(le());function me(e){var t=e.icon,n=e.path,a=e.state,o=ee(e,["icon","path","state"]),c=Object(p.g)(),i=n?function(){return c.push(n,a)}:c.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:i},o))}function fe(){var e=te(["\n  cursor: pointer;\n"]);return fe=function(){return e},e}var de=Object(v.b)(me)(fe());function he(){var e=te(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return he=function(){return e},e}var ve=Object(v.b)(h.a)(he()),pe=Object(a.createElement)(b.a,{style:{fontSize:"6.25rem"},spin:!0});function be(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(ue,null,Object(a.createElement)(ve,{indicator:pe,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function ge(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function Ee(){var e=te(["\n  color: var(--color-red);\n"]);return Ee=function(){return e},e}function ye(){var e=te(["\n  display: block;\n  font-weight: lighter;\n"]);return ye=function(){return e},e}function we(){var e=te(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return we=function(){return e},e}function je(){var e=te(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return je=function(){return e},e}var xe=f.a.Text,Se=Object(v.b)(ie)(je()),Oe=Object(v.b)(ie)(we()),Pe=Object(v.b)(xe)(ye()),ke=Object(v.b)(xe)(Ee()),Ae=f.a.Title;function Ce(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function Te(e){var t=function(e){try{w(!0),b();var t=ge((function(){return Promise.resolve(e(n.chainId,n.addressPrefix)).then((function(e){g.init(e)}))}),(function(e){console.error(e),v(Error(e).message),w(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.config,o=e.pathAfterLogin,c=e.appName,i=e.appLogo,s=ee(e,["config","pathAfterLogin","appName","appLogo"]),l=Object(p.g)(),m=l.location.state,d=z(),h=d.error,v=d.setError,b=d.clearError,g=Y(),E=Object(a.useState)(!1),y=E[0],w=E[1];return Object(a.useEffect)((function(){g.initialized&&(m?l.push(m.redirectPathname,m.redirectState):l.push(o))}),[g.initialized,m,l]),y?r.a.createElement(be,{loadingText:"Initializing app..."}):r.a.createElement(ue,Object.assign({},s),r.a.createElement(Se,null,r.a.createElement("img",{src:i,alt:"CosmWasm logo"}),r.a.createElement(Oe,null,r.a.createElement(f.a,null,r.a.createElement(Ae,{level:2},"Hello!"),r.a.createElement(Pe,null,"Welcome to your ",c),r.a.createElement(Pe,null,"Select one of the following options to start:")),h&&r.a.createElement(ke,null,h),r.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(U)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),r.a.createElement(u.a,{type:"primary",disabled:Ce(),onClick:function(){try{return Promise.resolve(t(N)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure, Chrome)"),r.a.createElement(u.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,a=ge((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118}}(n))).then((function(){return Promise.resolve(e.keplr.enable(n.chainId)).then((function(){return Promise.resolve(t(M)).then((function(){}))}))}))}),(function(e){console.error(e),v(Error(e).message)}));return Promise.resolve(a&&a.then?a.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}},"Keplr (Secure)"))))}function Ie(){var e=te(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return Ie=function(){return e},e}function Be(){var e=te(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Be=function(){return e},e}var De=f.a.Text,ze=Object(v.b)(ie)(Be()),$e=Object(v.b)(De)(Ie());function Me(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,o=Object(p.g)(),c=o.location.state,i=c.success,s=c.message,l=c.error,m=c.customButtonText,f=c.customButtonActionPath,d=c.customButtonActionState;var h=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(o)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:o.goBack}}(i),v=h.icon,b=h.result,g=h.buttonText,E=h.buttonAction,y=m||g,w=f?function(){return o.push(f,d)}:E;return r.a.createElement(ue,null,r.a.createElement(ze,null,r.a.createElement("img",{src:v,alt:"Result icon"}),r.a.createElement($e,{"data-result":b},s),l&&r.a.createElement($e,{"data-result":b},l),r.a.createElement(u.a,{type:"primary",onClick:w},y)))}function Ne(){var e=te(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return Ne=function(){return e},e}var Ue=Object(v.b)(ie)(Ne()),qe=f.a.Title,Fe=f.a.Text;function Le(e){var t=e.tag,n=e.hideTitle,a=e.hideBalance,o=Y(),c=o.address,i=o.balance;return r.a.createElement(Ue,{tag:t},!n&&r.a.createElement("header",null,r.a.createElement(qe,{level:3},"Your Account"),!a&&r.a.createElement(s.a,null)),r.a.createElement(Fe,null,c),!a&&r.a.createElement(Fe,null,"(",function(e){return e&&0!==e.length?e.map(K).join(", "):"\u2013"}(i),")"),r.a.createElement(u.a,{type:"primary",onClick:function(){return Z()(c)}},"Copy Account Address"))}function Ve(){var e=te(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Ve=function(){return e},e}var He=Object(v.a)(Ve());function We(){var e=te(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return We=function(){return e},e}var Re=Object(v.a)(We());function _e(){var e=te(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return _e=function(){return e},e}var Ye=Object(v.a)(_e());function Ge(){var e=te(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return Ge=function(){return e},e}var Je=Object(v.a)(Ge());function Ke(){var e=te(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return Ke=function(){return e},e}var Qe=Object(v.a)(Ke());function Xe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Je,null),r.a.createElement(Qe,null),r.a.createElement(Re,null),r.a.createElement(Ye,null),r.a.createElement(He,null))}var Ze=n(61);const et=function(e){var t=e.musselnet;if(!t)throw new Error("No configuration found for network musselnet");return t}({local:{chainId:"testing",chainName:"Testing",addressPrefix:"wasm",rpcUrl:"http://localhost:26659",httpUrl:"http://localhost:1317",faucetUrl:"http://localhost:8000",feeToken:"ucosm",stakingToken:"uatom",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},uatom:{denom:"ATOM",fractionalDigits:6}},gasPrice:.025,codeId:2},musselnet:{chainId:"musselnet-2",chainName:"Musselnet",addressPrefix:"wasm",rpcUrl:"https://rpc.musselnet.cosmwasm.com",httpUrl:"https://lcd.musselnet.cosmwasm.com",faucetUrl:"https://faucet.musselnet.cosmwasm.com",feeToken:"umayo",stakingToken:"ufrites",coinMap:{umayo:{denom:"MAYO",fractionalDigits:6},ufrites:{denom:"FRITES",fractionalDigits:6}},gasPrice:.025,codeId:4}});var tt=n(40),nt=n(1004),at=n(472),rt=n(1005),ot=n(68),ct=n.n(ot),it=n(72);const st=new RegExp("^"+et.addressPrefix),lt=it.d().matches(st,`"${et.addressPrefix}" prefix required`).length(39+et.addressPrefix.length,"Address invalid"),ut=lt.required("An address is required"),mt=it.b().required("An amount is required").positive("Amount should be positive"),ft=it.c().shape({contract:it.a(e=>Number.isNaN(Number(e))?ut:it.b().positive())}),dt=it.c().shape({address:lt}),ht=it.c().shape({address:ut}),vt=it.c().shape({newAmount:mt}),pt=it.c().shape({address:ut,amount:mt}),bt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,gt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`,Et=Object(v.b)(ie)`
  & > * {
    --gap: var(--s2);
  }
`,yt=v.b.div`
  display: flex;
  align-items: baseline;

  span {
    margin-left: var(--s1);
    font-family: var(--ff-iceland);
    font-size: var(--s1);
  }
`,{Title:wt,Text:jt}=f.a;var xt=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:o,address:c}=Y(),{contractAddress:i}=Object(p.h)(),[s,l]=Object(a.useState)(""),[m,f]=Object(a.useState)(0);return Object(a.useEffect)(()=>{I(o()).use(i).tokenInfo().then(e=>{l(e.symbol),f(e.decimals)})},[o,i]),e&&r.a.createElement(be,{loadingText:"Adding allowance..."})||!e&&r.a.createElement(ue,null,r.a.createElement(bt,null,r.a.createElement(de,{icon:ct.a,path:"/tokens"}),r.a.createElement(wt,null,"Add Allowance"),r.a.createElement(tt.c,{initialValues:{address:"",amount:""},onSubmit:e=>{t(!0);const{address:a,amount:r}=e,l=I(o()).use(i);l.allowance(c,a).then(({allowance:e})=>{const t=P.Decimal.fromUserInput(r,m),o=P.Decimal.fromAtomics(e,m);try{let e=Promise.reject("");e=t.isGreaterThan(o)?l.increaseAllowance(c,a,t.minus(o).atomics):l.decreaseAllowance(c,a,o.minus(t).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${r} ${s} allowance for ${a} successfully added `,customButtonText:"Tokens"}})})}catch(u){console.error(u),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:Q(u),customButtonActionPath:"/allowances/"+i}})}})},validationSchema:pt},e=>r.a.createElement(nt.a,null,r.a.createElement(gt,null,r.a.createElement(Et,null,r.a.createElement(at.a,{name:"address"},r.a.createElement(rt.a,{name:"address",placeholder:"Enter address"})),r.a.createElement(yt,null,r.a.createElement(at.a,{name:"amount"},r.a.createElement(rt.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(jt,null,s))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))))};const St=Object(v.b)(ie)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`;function Ot({submitChangeAmount:e}){return r.a.createElement(tt.c,{initialValues:{newAmount:""},onSubmit:e,validationSchema:vt},e=>r.a.createElement(nt.a,null,r.a.createElement(St,null,r.a.createElement(at.a,{name:"newAmount"},r.a.createElement(rt.a,{name:"newAmount",placeholder:"Enter new amount"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))}const Pt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s3);
  }

  h1 {
    margin: 0;
  }

  & > span {
    font-size: var(--s-1);
  }
`,kt=v.b.div`
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
`,{Title:At,Text:Ct}=f.a;var Tt=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:o,address:c}=Y(),{contractAddress:i,spenderAddress:s}=Object(p.h)(),[l,u]=Object(a.useState)(""),[m,f]=Object(a.useState)(0),[d,h]=Object(a.useState)("0");Object(a.useEffect)(()=>{const e=I(o()).use(i);e.tokenInfo().then(e=>{u(e.symbol),f(e.decimals)}),e.allowance(c,s).then(({allowance:e})=>h(e))},[o,i,c,s]);const v=P.Decimal.fromAtomics(d,m).toString();return e&&r.a.createElement(be,{loadingText:"Changing allowance..."})||!e&&r.a.createElement(ue,null,r.a.createElement(Pt,null,r.a.createElement(de,{icon:ct.a,path:"/tokens"}),r.a.createElement(At,null,"Allowance"),r.a.createElement(Ct,null,s),r.a.createElement(kt,null,r.a.createElement(Ct,null,"Current"),r.a.createElement(Ct,null,v),r.a.createElement(Ct,null,l)),r.a.createElement(Ot,{submitChangeAmount:e=>{t(!0);const{newAmount:a}=e,r=P.Decimal.fromUserInput(a,m),u=P.Decimal.fromAtomics(d,m),f=I(o()).use(i);try{let e=Promise.reject("");e=r.isGreaterThan(u)?f.increaseAllowance(c,s,r.minus(u).atomics):f.decreaseAllowance(c,s,u.minus(r).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${l} allowance successfully set to ${a} for ${s}`,customButtonText:"Tokens"}})})}catch(h){console.error(h),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:Q(h),customButtonActionPath:"/allowances/"+i}})}}})))},It=n(473),Bt=n.n(It);const Dt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,zt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s2);
  }
`,$t=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,Mt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }
`,Nt=v.b.div`
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
`,Ut=v.b.div`
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
`,{Title:qt,Text:Ft}=f.a;var Lt=function(){const e=Object(p.g)(),{getClient:t,address:n}=Y(),{contractAddress:o}=Object(p.h)(),[c,i]=Object(a.useState)([]),[l,m]=Object(a.useState)(""),[f,d]=Object(a.useState)("0"),[h,v]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=I(t()).use(o);e.tokenInfo().then(({symbol:e,decimals:t})=>{m(e),v(t)}),e.balance(n).then(e=>d(e)),e.allAllowances(n).then(({allowances:e})=>i(e))},[t,o,n]);const b=P.Decimal.fromAtomics(f,h).toString(),[g,E]=b.split("."),y=null!==E&&void 0!==E?E:"";return r.a.createElement(ue,null,r.a.createElement(Dt,null,r.a.createElement(de,{icon:ct.a,path:"/tokens"}),r.a.createElement(zt,null,r.a.createElement(qt,null,"Allowances"),r.a.createElement($t,null,r.a.createElement(Ft,null,`${g}${y?".":""}`),r.a.createElement(Ft,null,y," ",l),r.a.createElement(Ft,null," tokens"))),r.a.createElement(Mt,null,c.map((t,n)=>{const a=P.Decimal.fromAtomics(t.allowance,h).toString();return r.a.createElement(r.a.Fragment,null,n>0&&r.a.createElement(s.a,null),r.a.createElement(Nt,null,r.a.createElement(Ft,null,t.spender),r.a.createElement(Ut,null,r.a.createElement(Ft,null,a),r.a.createElement("img",{alt:"Edit allowance",src:Bt.a,onClick:()=>{return n=t.spender,void e.push(`/allowances/${o}/edit/${n}`);var n}}))))})),r.a.createElement(u.a,{type:"primary",onClick:function(){e.push(`/allowances/${o}/add`)}},"Add New")))},Vt=n(474),Ht=n.n(Vt);var Wt=function(){return r.a.createElement(Te,{pathAfterLogin:"/tokens",appName:"CW20 Wallet",appLogo:Ht.a,config:et})},Rt=n(475),_t=n.n(Rt),Yt=n(476),Gt=n.n(Yt);function Jt(e){e.push("/tokens")}var Kt=function(){return r.a.createElement(Me,{defaultButtonAction:Jt,successIcon:Gt.a,failIcon:_t.a})},Qt=(n(176),n(107)),Xt=n.n(Qt),Zt=n(155);const en=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:o,...c},i)=>a.createElement(Zt.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Xt.a,Object.assign({ref:i,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),o&&o(e)}},c))));en.Search=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:o,...c},i)=>a.createElement(Zt.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Xt.a.Search,Object.assign({ref:i,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),o&&o(e)}},c))));var tn=en.Search;var nn=function({initialAddress:e,setSearchedAddress:t}){return r.a.createElement(tt.c,{initialValues:{address:e},validationSchema:dt,onSubmit:e=>{t(e.address)}},e=>r.a.createElement(nt.a,null,r.a.createElement(at.a,{name:"address"},r.a.createElement(tn,{name:"address",placeholder:"Search",enterButton:!0,onSearch:n=>{e.isValid&&t(n)}}))))};const an=Object(v.b)(ie)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,rn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s2);
  }
`,on=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,cn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }
`,sn=v.b.div`
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
`,{Title:ln,Text:un}=f.a;var mn=function(){const e=Object(p.g)(),{getClient:t,address:n}=Y(),{contractAddress:o,allowingAddress:c}=Object(p.h)(),[i,l]=Object(a.useState)(c),[m,f]=Object(a.useState)(),[d,h]=Object(a.useState)(""),[v,b]=Object(a.useState)("0"),[g,E]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=I(t()).use(o),a=null!==i&&void 0!==i?i:n;e.tokenInfo().then(({symbol:e,decimals:t})=>{h(e),E(t)}),e.balance(a).then(e=>b(e))},[t,o,i,n]);const y=P.Decimal.fromAtomics(v,g).toString(),[w,j]=y.split("."),x=P.Decimal.fromAtomics(m,g).toString(),S=!!m&&"0"!==m,O=!m||"0"!==m,k="0"===v,A=!i;return r.a.createElement(ue,null,r.a.createElement(an,null,r.a.createElement(de,{icon:ct.a,path:"/tokens"}),r.a.createElement(rn,null,r.a.createElement(ln,null,d),r.a.createElement(Le,{hideTitle:!0,hideBalance:!0})),r.a.createElement(on,null,r.a.createElement(un,null,`${w}${j?".":""}`),j&&r.a.createElement(un,null,j),r.a.createElement(un,null," tokens")),r.a.createElement(nn,{initialAddress:i,setSearchedAddress:function(e){if(!e)return l(void 0),void f(void 0);l(e),I(t()).use(o).allowance(e,n).then(e=>f(e.allowance))}}),S&&r.a.createElement(cn,null,r.a.createElement(s.a,null),r.a.createElement(sn,null,r.a.createElement(un,null,"Your allowance"),r.a.createElement(un,null,x))),O&&r.a.createElement(u.a,{type:"primary",onClick:function(){const t=i||"";e.push(`/token/send/${o}/${t}`)},disabled:k},"Send"),A&&r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/allowances/"+o)}},"My allowances")))};const fn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,dn=Object(v.b)(ie)`
  & > * {
    --gap: 0;
  }
`,hn=v.b.div`
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
`,vn=v.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:pn}=f.a;function bn(e,t){return e.coin.denom<t.coin.denom?-1:e.coin.denom>t.coin.denom?1:0}var gn=function(){const e=Object(p.g)(),{getClient:t,address:n}=Y(),{contracts:o,addContract:c}=C(),[i,s]=Object(a.useState)([]),l=Object(a.useCallback)((async function(e){const{symbol:t,decimals:a}=await e.tokenInfo();return{coin:{denom:t,amount:await e.balance(n)},fractionalDigits:a,address:e.contractAddress}}),[n]);return Object(a.useEffect)(()=>{if(!et.codeId)return;const e=t();e.getContracts(et.codeId).then(t=>{t.forEach(t=>{const n=I(e).use(t.address);c(n)})})},[t,c]),Object(a.useEffect)(()=>{const e=o.map(l);Promise.all(e).then(e=>s(e.sort(bn)))},[o,l]),r.a.createElement(dn,null,i.map(t=>{const n=P.Decimal.fromAtomics(t.coin.amount,t.fractionalDigits).toString();return r.a.createElement(hn,{key:t.address,onClick:()=>{return n=t.address,void e.push("/token/detail/"+n);var n}},r.a.createElement(vn,null,r.a.createElement(pn,null,t.coin.denom),r.a.createElement(pn,null,"0"!==n?n:"No tokens")))}))};const{Title:En}=f.a;var yn=function(){return r.a.createElement(ue,null,r.a.createElement(fn,null,r.a.createElement(En,null,"Tokens"),r.a.createElement(gn,null),r.a.createElement(Ze.b,{to:"/tokens/add"},r.a.createElement(u.a,{type:"primary"},"Add another")),r.a.createElement(Le,{hideBalance:!0})))},wn=n(1006);const jn=Object(v.b)(ie)`
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
`,xn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s4);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,{Title:Sn}=f.a;var On=function(){const{getClient:e}=Y(),{setError:t}=z(),{addContract:n}=C(),o=Object(p.g)(),[c,i]=Object(a.useState)(),[s,l]=Object(a.useState)([]),[m,f]=Object(a.useState)([]);function d(e){f(e)}function h(e,t){return t.title.toLowerCase().indexOf(e.toLowerCase())>=0}const v=!c,b=!v;return r.a.createElement(ue,null,r.a.createElement(de,{icon:ct.a,path:"/tokens"}),r.a.createElement(jn,null,r.a.createElement(Sn,null,"Add Other"),v&&r.a.createElement(tt.c,{initialValues:{contract:""},onSubmit:function({contract:a}){const r=!Number.isNaN(Number(a))&&Number(a);if(r)e().getContracts(r).then(e=>{l(e),i(r)}).catch(t);else{const t=String(a),r=I(e()).use(t);r.tokenInfo().then(()=>n(r)).then(()=>o.push({pathname:"/result",state:{success:!0,message:`"${t}" was successfully added :)`,customButtonText:"Tokens"}})).catch(e=>o.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:Q(e),customButtonActionPath:"/tokens/add"}}))}},validationSchema:ft},e=>r.a.createElement(nt.a,null,r.a.createElement(xn,null,r.a.createElement(at.a,{name:"contract"},r.a.createElement(rt.a,{name:"contract",placeholder:"Enter a contract address or codeID"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Continue")))),b&&r.a.createElement(tt.c,{initialValues:{},onSubmit:function(){m.forEach(t=>{const a=I(e()).use(t);a.tokenInfo().then(()=>n(a)).catch(e=>o.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:Q(e),customButtonActionPath:"/tokens/add"}}))}),o.push({pathname:"/result",state:{success:!0,message:`"Your CodeID: ${c}" were successfully added :)`,customButtonText:"Tokens"}})}},e=>r.a.createElement(nt.a,null,r.a.createElement(xn,null,r.a.createElement(at.a,{name:"contracts"},r.a.createElement(wn.a,{name:"contracts",showSearch:!0,filterOption:h,dataSource:s.map(e=>({key:e.address,title:e.label})),onSelectChange:d,listStyle:{listStyle:"none"},render:e=>e.title})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!m.length},"Continue"))))))};const Pn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,kn=v.b.div`
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
`,{Text:An}=f.a;function Cn({tokenName:e,maxAmount:t,sendTokensAction:n}){const a=it.c().shape({amount:mt.max(t.toFloatApproximation(),"Amount cannot be greater than "+t.toString())}).concat(ht);return r.a.createElement(tt.c,{initialValues:{amount:"",address:""},onSubmit:n,validationSchema:a},t=>r.a.createElement(nt.a,null,r.a.createElement(Pn,null,r.a.createElement(kn,null,r.a.createElement(An,null,"Send"),r.a.createElement(at.a,{name:"amount"},r.a.createElement(rt.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(An,null,e)),r.a.createElement(kn,null,r.a.createElement(An,null,"to"),r.a.createElement(at.a,{name:"address"},r.a.createElement(rt.a,{name:"address",placeholder:"Enter address"}))),r.a.createElement(u.a,{type:"primary",onClick:t.submitForm,disabled:!(t.isValid&&t.dirty)},"Send"))))}const Tn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,In=Object(v.b)(ie)`
  & > * {
    --gap: var(--s2);
  }
`,Bn=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:Dn,Text:zn}=f.a;var $n=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:o,address:c,refreshBalance:i}=Y(),{contractAddress:s,allowingAddress:l}=Object(p.h)(),u=`/token/detail/${s}/${null!==l&&void 0!==l?l:""}`,[m,f]=Object(a.useState)(""),[d,h]=Object(a.useState)("0"),[v,b]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=I(o()).use(s),t=null!==l&&void 0!==l?l:c;e.tokenInfo().then(({symbol:e,decimals:t})=>{f(e),b(t)}),l?e.allowance(l,c).then(e=>h(e.allowance)):e.balance(t).then(e=>h(e))},[o,s,l,c]);const g=P.Decimal.fromAtomics(d,v).toString(),[E,y]=g.split("."),w=P.Decimal.fromAtomics(d,v);return e&&r.a.createElement(be,{loadingText:`Sending ${m}...`})||!e&&r.a.createElement(ue,null,r.a.createElement(Tn,null,r.a.createElement(de,{icon:ct.a,path:"/tokens"}),r.a.createElement(In,null,r.a.createElement(Dn,null,m),r.a.createElement(Le,{hideTitle:!0,hideBalance:!0})),r.a.createElement(Bn,null,r.a.createElement(zn,null,`${E}${y?".":""}`),y&&r.a.createElement(zn,null,y),r.a.createElement(zn,null," tokens")),r.a.createElement(Cn,{tokenName:m,maxAmount:w,sendTokensAction:e=>{t(!0);const{address:a,amount:r}=e,f=P.Decimal.fromUserInput(r,v).atomics,d=I(o()).use(s);try{l?d.transferFrom(c,l,a,f).then(e=>{if(!e)return Promise.reject("Transfer from failed");i(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a} with allowance from ${l}`,customButtonText:"Token detail",customButtonActionPath:u}})}):d.transfer(c,a,f).then(e=>{if(!e)return Promise.reject("Transfer failed");i(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a}`,customButtonText:"Token detail",customButtonActionPath:u}})})}catch(h){console.error(h),n.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:Q(h),customButtonActionPath:u}})}}})))};var Mn=function(){return r.a.createElement($,null,r.a.createElement(G,{config:et},r.a.createElement(T,null,r.a.createElement(Xe,null),r.a.createElement(Ze.a,{basename:"/cw20-wallet"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:Wt}),r.a.createElement(p.b,{exact:!0,path:"/login",component:Wt}),r.a.createElement(J,{authPath:"/login"},r.a.createElement(p.b,{exact:!0,path:"/tokens",component:yn}),r.a.createElement(p.b,{exact:!0,path:"/tokens/add/:codeId?",component:On}),r.a.createElement(p.b,{exact:!0,path:"/token/detail/:contractAddress/:allowingAddress?",component:mn}),r.a.createElement(p.b,{exact:!0,path:"/token/send/:contractAddress/:allowingAddress?",component:$n}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress",component:Lt}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress/add",component:xt}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress/edit/:spenderAddress",component:Tt}),r.a.createElement(p.b,{exact:!0,path:"/result",component:Kt})))))))};n(995);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Mn,null)),document.getElementById("root"))}},[[482,1,2]]]);
//# sourceMappingURL=main.8e000687.chunk.js.map