(this["webpackJsonpname-service"]=this["webpackJsonpname-service"]||[]).push([[0],{235:function(e,t){},324:function(e,t,a){e.exports=a.p+"static/media/backArrow.9849fc2e.svg"},337:function(e,t,a){e.exports=a.p+"static/media/cosmWasmLogo.15dccd19.svg"},338:function(e,t,a){e.exports=a.p+"static/media/failIcon.71513020.svg"},339:function(e,t,a){e.exports=a.p+"static/media/successIcon.2e305b66.svg"},343:function(e,t,a){e.exports=a(736)},348:function(e,t,a){},364:function(e,t){},366:function(e,t){},376:function(e,t){},378:function(e,t){},420:function(e,t){},421:function(e,t){},426:function(e,t){},428:function(e,t){},452:function(e,t){},531:function(e,t,a){},532:function(e,t,a){},533:function(e,t,a){},536:function(e,t,a){},599:function(e,t,a){},730:function(e,t,a){},731:function(e,t,a){},732:function(e,t,a){},733:function(e,t,a){},734:function(e,t,a){},735:function(e,t,a){},736:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),s=a.n(r),o=(a(348),a(53)),l=a(17);const i={httpUrl:"https://lcd.coralnet.cosmwasm.com",feeToken:"ushell",gasPrice:.025,faucetUrl:"https://faucet.coralnet.cosmwasm.com/credit",faucetToken:"SHELL",addressPrefix:"coral",codeId:5},m=n.createContext({setError:()=>{},clearError:()=>{}}),u=()=>n.useContext(m);function d({children:e}){const[t,a]=n.useState(),c={error:t,setError:a,clearError:()=>{a(void 0)}};return n.createElement(m.Provider,{value:c},e)}var f=a(323),E=a(60),h=a(102);function g(){const e="burner-wallet",t=localStorage.getItem(e);if(t)return t;const a=E.Bip39.encode(E.Random.getBytes(16)).toString();return localStorage.setItem(e,a),a}async function p(e){const t=g(),a=Object(h.makeCosmoshubPath)(0);return await h.Secp256k1Wallet.fromMnemonic(t,a,e)}async function b(e,t){const a=(await t.getAccounts())[0].address,n=function({feeToken:e,gasPrice:t}){const a=(e,t,a)=>({amount:[{amount:Math.floor(e*a).toString(),denom:t}],gas:e.toString()});return{upload:a(15e5,e,t),init:a(6e5,e,t),exec:a(2e5,e,t),migrate:a(6e5,e,t),send:a(8e4,e,t),changeAdmin:a(8e4,e,t)}}(i);return new f.SigningCosmWasmClient(e,a,t,n)}const S={initialized:!1,address:"",init:()=>{},getClient:()=>{throw new Error("not yet initialized")}},v=n.createContext(S),x=()=>n.useContext(v);function C({config:e,children:t}){return n.createElement(T,{config:e,loadWallet:p},t)}function T({config:e,loadWallet:t,children:a}){const c={...S,init:function(){t(e.addressPrefix).then(t=>b(e.httpUrl,t)).then(async t=>{const a=t.senderAddress;if(e.faucetUrl){var n;const c=await t.getAccount();(null===c||void 0===c||null===(n=c.balance)||void 0===n?void 0:n.length)||await fetch(e.faucetUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:e.faucetToken,address:a})})}s({initialized:!0,address:a,init:()=>{},getClient:()=>t})})}},[r,s]=Object(n.useState)(c);return n.createElement(v.Provider,{value:r},a)}const N=n.createContext({refreshAccount:()=>{}}),y=()=>n.useContext(N);function A({children:e}){const{setError:t}=u(),a=x(),[c,r]=n.useState({});function s(){a.initialized&&a.getClient().getAccount().then(e=>r({account:e})).catch(t)}n.useEffect(s,[a,t]);const o={refreshAccount:s,account:c.account};return n.createElement(N.Provider,{value:o},e)}var O=function({children:e,location:t}){const{initialized:a}=x();return a?c.a.createElement(l.d,{location:t},e):c.a.createElement(l.a,{to:{pathname:"/names/login",state:{redirectPathname:t.pathname,redirectState:t.state}}})},j=(a(84),a(26)),B=a.n(j),k=a(3),w=a.n(k);a(531);var $=function({tag:e="div",className:t,children:a,...c}){const r=w()("Center",t);return n.createElement(e,Object.assign({className:r},c),a)};a(532);var L=function({tag:e="div",className:t,children:a,...c}){const r=w()("Stack",t);return n.createElement(e,Object.assign({className:r},c),a)},P=a(324),R=a.n(P);a(533);var z=function({path:e}){const t=Object(l.g)(),a=e?()=>t.push(e):t.goBack;return c.a.createElement("img",{src:R.a,alt:"Back arrow",className:"BackButton",onClick:a})},I=(a(534),a(327)),W=a.n(I),q=a(743);a(536);const U=c.a.createElement(q.a,{style:{fontSize:"6.25rem"},spin:!0});var M=function({loadingText:e}){const t=e||"Loading...";return c.a.createElement($,{tag:"main",className:"Loading"},c.a.createElement(W.a,{indicator:U,tip:t,className:"Spin"}))},H=(a(85),a(32)),V=a.n(H),_=(a(597),a(332)),J=a.n(_),D=a(153),F=a.n(D),Y=a(70);function K(e){if(!e)return"0";if(e.denom.startsWith("u")){const t=e.denom.slice(1).toUpperCase();return Y.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}a(599);const{Title:G,Text:Q}=B.a;var X=function(e){const t=y();return c.a.createElement($,Object.assign({className:"YourAccount"},e),c.a.createElement(L,null,c.a.createElement("header",null,c.a.createElement(G,{level:3},"Your Account"),c.a.createElement(J.a,null)),t.account&&c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,null,c.a.createElement(Q,null,t.account.address),c.a.createElement(Q,null,"(",(a=t.account.balance)&&0!==a.length?a.map(K).join(", "):"\u2013",")")),c.a.createElement(V.a,{type:"primary",onClick:()=>F()(t.account.address)},"Copy Account Address"))));var a},Z=a(36),ee=a(741),te=a(336),ae=(a(188),a(90)),ne=a.n(ae),ce=a(167);const re=n.forwardRef(({name:e,validate:t,fast:a,onChange:c,onBlur:r,...s},o)=>n.createElement(ce.a,{name:e,validate:t,fast:a},({field:{value:t,onChange:a,onBlur:l}})=>n.createElement(ne.a,Object.assign({ref:o,name:e,value:t,onChange:e=>{a(e),c&&c(e)},onBlur:e=>{l(e),r&&r(e)}},s))));re.Search=n.forwardRef(({name:e,validate:t,fast:a,onChange:c,onBlur:r,...s},o)=>n.createElement(ce.a,{name:e,validate:t,fast:a},({field:{value:t,onChange:a,onBlur:l}})=>n.createElement(ne.a.Search,Object.assign({ref:o,name:e,value:t,onChange:e=>{a(e),c&&c(e)},onBlur:e=>{l(e),r&&r(e)}},s))));var se=re.Search,oe=a(131);const le=oe.a().shape({name:oe.b().min(4,"Name can not be less than 4 characters").required("A Name is required")}),ie=oe.a().shape({address:oe.b().min(45,"Address invalid").required("An address is required")});var me=function({initialName:e,setSearchedName:t}){return c.a.createElement(Z.c,{initialValues:{name:e},validationSchema:le,onSubmit:e=>{t(e.name)}},e=>c.a.createElement(ee.a,null,c.a.createElement(te.a,{name:"name"},c.a.createElement(se,{name:"name",placeholder:"Name",enterButton:!0,onSearch:a=>{e.isValid&&t(a)}}))))};function ue(e){const t=(e||"").toString().match(/.*\s*$/g)[0];return t.substring(0,t.lastIndexOf(";"))}a(730);const{Text:de}=B.a;var fe=function({contractLabel:e,contractAddress:t,name:a,setLoading:r}){const s=`/names/contract/${e}/${t}/${a}`,o=Object(l.g)(),{setError:i,error:m}=u(),{getClient:d}=x(),f=y(),[E,h]=Object(n.useState)(""),[g,p]=Object(n.useState)({});Object(n.useEffect)(()=>{d().queryContractSmart(t,{resolve_record:{name:a}}).then(e=>{h(e.address)}).catch(e=>{e.toString().includes("NameRecord not found")||i(e)})},[i,t,d,a]),Object(n.useEffect)(()=>{d().queryContractSmart(t,{config:{}}).then(e=>{p({purchase:e.purchase_price,transfer:e.transfer_price})}).catch(i)},[i,t,d]);const{message:b,actionText:S,action:v}=function(e,t,a,n,c){return t?e===t?{message:"is owned by you !",actionText:"Transfer "+K(a.transfer),action:c}:{message:"is owned by "+t,actionText:"Copy Owner Address",action:()=>{F()(t)}}:{message:"is available!",actionText:"Register "+K(a.purchase),action:n}}(f.account.address,E,g,(function(){r(!0);const e=g.purchase,n=e?[e]:void 0;d().execute(t,{register:{name:a}},"Buying my name",n).then(()=>{f.refreshAccount(),o.push({pathname:"/names/result",state:{success:!0,message:"Succesfully registered "+a,customButtonText:"Name details",customButtonActionPath:s}})}).catch(e=>{console.error(e),o.push({pathname:"/names/result",state:{success:!1,message:"Name register failed:",error:ue(e),customButtonActionPath:s}})})}),(function(){o.push(`/names/transfer/${e}/${t}/${a}`)}));return c.a.createElement($,{tag:"main",className:"SearchResult"},c.a.createElement(L,null,c.a.createElement(de,null,m),c.a.createElement(de,{className:"SearchedName"},a),c.a.createElement(de,{className:"LightText"},b),c.a.createElement(V.a,{type:"primary",onClick:v},S)))};a(731);const{Title:Ee,Text:he}=B.a;var ge=function(){const{label:e,address:t,name:a}=Object(l.h)(),[r,s]=Object(n.useState)(!1),[o,i]=Object(n.useState)(a);return r&&c.a.createElement(M,{loadingText:`Registering name: ${o}...`})||!r&&c.a.createElement($,{tag:"main",className:"Contract"},c.a.createElement(L,null,c.a.createElement(z,{path:"/names/home"}),c.a.createElement(L,{className:"SearchAndResultStack"},c.a.createElement(L,{className:"SearchStack"},c.a.createElement(Ee,null,e),c.a.createElement(he,null,"(",t,")"),c.a.createElement(me,{initialName:a,setSearchedName:function(e){i(e.toLowerCase())}})),o&&c.a.createElement(fe,{contractLabel:e,contractAddress:t,name:o,setLoading:s})),c.a.createElement(X,{tag:"footer"})))};a(732);const{Title:pe}=B.a;var be=function(){const{setError:e}=u(),{getClient:t}=x(),[a,r]=Object(n.useState)([]);return Object(n.useEffect)(()=>{t().getContracts(i.codeId).then(e=>r(e)).catch(e)},[t,e]),c.a.createElement($,{tag:"main",className:"Home"},c.a.createElement(L,null,c.a.createElement(pe,null,"Name Service"),c.a.createElement(L,{tag:"nav"},a.map(({label:e,address:t})=>c.a.createElement(o.b,{key:t,to:`/names/contract/${e.toLowerCase()}/${t}`},c.a.createElement(V.a,{type:"primary"},e)))),c.a.createElement(X,{tag:"footer"})))},Se=a(337),ve=a.n(Se);a(733);const{Title:xe,Text:Ce}=B.a;var Te=function(){const e=Object(l.g)(),t=e.location.state,a=x(),{refreshAccount:r,account:s}=y(),[o,i]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{a.initialized&&r()},[a.initialized,r]),Object(n.useEffect)(()=>{s&&(t?e.push(t.redirectPathname,t.redirectState):e.push("/names/home"))},[s,t,e]),o?c.a.createElement(M,{loadingText:"Initializing app..."}):c.a.createElement($,{tag:"main",className:"Login"},c.a.createElement(L,{className:"MainStack"},c.a.createElement("img",{src:ve.a,alt:"CosmWasm logo"}),c.a.createElement(L,{className:"WelcomeStack"},c.a.createElement(B.a,null,c.a.createElement(xe,{level:2},"Hello!"),c.a.createElement(Ce,{className:"LightText"},"Select one of the following options to start:")),c.a.createElement(V.a,{type:"primary",onClick:function(){i(!0),a.init()}},"Browser (Demo)"),c.a.createElement(V.a,{disabled:!0,type:"primary"},"Keplr (Secure)"))))},Ne=a(338),ye=a.n(Ne),Ae=a(339),Oe=a.n(Ae);a(734);const{Text:je}=B.a;var Be=function(){const e=Object(l.g)(),{success:t,message:a,error:n,customButtonText:r,customButtonActionPath:s}=e.location.state,{icon:o,textClass:i,buttonText:m,buttonAction:u}=function(e,t){return e?{icon:Oe.a,textClass:"SuccessText",buttonText:"Home",buttonAction:()=>function(e){e.push("/names/home")}(t)}:{icon:ye.a,textClass:"FailText",buttonText:"Retry",buttonAction:t.goBack}}(t,e),d=r||m,f=s?()=>e.push(s):u;return c.a.createElement($,{tag:"main",className:"OperationResult"},c.a.createElement(L,{className:"MainStack"},c.a.createElement("img",{src:o,alt:"Result icon"}),c.a.createElement(je,{className:i},a),n&&c.a.createElement(je,{className:i},n),c.a.createElement(V.a,{type:"primary",onClick:f},d)))},ke=a(742);var we=function({setNewOwnerAddress:e,transferButtonText:t,transferButtonAction:a}){return c.a.createElement(Z.c,{initialValues:{address:""},validationSchema:ie,onSubmit:a},n=>c.a.createElement(ee.a,null,c.a.createElement(te.a,{name:"address"},c.a.createElement(ke.a,{name:"address",placeholder:"Enter address",onChange:t=>{e(t.target.value)}})),c.a.createElement(V.a,{type:"primary",onClick:a,disabled:!(n.isValid&&n.dirty)},t)))};a(735);const{Title:$e,Text:Le}=B.a;var Pe=function(){const{contractLabel:e,contractAddress:t,name:a}=Object(l.h)(),r=`/names/contract/${e}/${t}/${a}`,s=Object(l.g)(),{setError:o}=u(),{getClient:i}=x(),m=y(),[d,f]=Object(n.useState)(!1),[E,h]=Object(n.useState)(""),[g,p]=Object(n.useState)();return Object(n.useEffect)(()=>{i().queryContractSmart(t,{config:{}}).then(e=>{p(e.transfer_price)}).catch(o)},[o,t,i]),d&&c.a.createElement(M,{loadingText:`Transferring name: ${a}...`})||!d&&c.a.createElement($,{tag:"main",className:"Transfer"},c.a.createElement(L,null,c.a.createElement(z,{path:r}),c.a.createElement(L,{className:"TransferStack"},c.a.createElement($e,null,"Transfer"),c.a.createElement(B.a,null,c.a.createElement(Le,null,"Name: "),c.a.createElement(Le,null,a)),c.a.createElement(Le,null,"to"),c.a.createElement(we,{setNewOwnerAddress:h,transferButtonText:"Transfer "+K(g),transferButtonAction:function(){f(!0);const n=g?[g]:void 0;i().execute(t,{transfer:{name:a,to:E}},"Transferring my name",n).then(()=>{m.refreshAccount(),s.push({pathname:"/names/result",state:{success:!0,message:`Succesfully transferred ${a} to ${E}`,customButtonText:"Name details",customButtonActionPath:r}})}).catch(n=>{console.error(n),s.push({pathname:"/names/result",state:{success:!1,message:"Name transfer failed:",error:ue(n),customButtonActionPath:`/names/transfer/${e}/${t}/${a}`}})})}})),c.a.createElement(X,{tag:"footer"})))};var Re=function(){return c.a.createElement(d,null,c.a.createElement(C,{config:i},c.a.createElement(A,null,c.a.createElement(o.a,{basename:"/names"},c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:"/names/"},c.a.createElement(l.a,{to:"/names/login"})),c.a.createElement(l.b,{exact:!0,path:"/names/login",component:Te}),c.a.createElement(O,null,c.a.createElement(l.b,{exact:!0,path:"/names/home",component:be}),c.a.createElement(l.b,{exact:!0,path:"/names/contract/:label/:address/:name?",component:ge}),c.a.createElement(l.b,{exact:!0,path:"/names/transfer/:contractLabel/:contractAddress/:name",component:Pe}),c.a.createElement(l.b,{exact:!0,path:"/names/result",component:Be})))))))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Re,null)),document.getElementById("root"))}},[[343,1,2]]]);
//# sourceMappingURL=main.0792361f.chunk.js.map