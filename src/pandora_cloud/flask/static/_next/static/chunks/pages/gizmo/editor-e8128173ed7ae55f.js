(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9698,8107,8238,5663,273,4779],{15773:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gizmo/editor",function(){return n(82007)}])},82007:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return l},default:function(){return f}});var o=n(35250),i=n(20522),r=n(49652),a=n(32877),s=n(78931),c=n(77010),d=n(60554),u=n(70079),l=!0;function f(){var e=(0,d.useRouter)(),t=e.query,n=t.id,l=t.remixFrom,f=(0,s.$T)(),g=(0,s.hz)(),p=g.has(a.PL),h=(0,i.Ml)();return((0,u.useEffect)(function(){p&&c.Z.gatherData()},[p]),(0,u.useEffect)(function(){f||h||e.push("/")},[f,g,e,h]),h)?(0,o.jsx)(r.V,{conversationTemplateId:n,remixSourceTemplateId:l}):null}},53776:function(e,t,n){"use strict";n.d(t,{W:function(){return i},x:function(){return r}});var o=n(42569),i={id:void 0,name:"",owner_id:"",author_name:void 0,description:null,published_at:void 0,icon:void 0,color:void 0,updated_at:void 0,profile_pic_id:void 0,profile_pic_permalink:void 0,config:{context_message:"",model_slug:o.S0,assistant_welcome_message:void 0,enabled_tools:void 0}},r={id:void 0,name:"",owner_id:"",author_name:void 0,description:null,published_at:void 0,icon:void 0,color:void 0,updated_at:void 0,profile_pic_id:void 0,profile_pic_permalink:void 0,config:{context_message:"",model_slug:o.dO,assistant_welcome_message:void 0,enabled_tools:void 0}}},98107:function(e,t,n){"use strict";n.d(t,{YM:function(){return r},ap:function(){return o},bS:function(){return i}});var o={DALLE:"gizmo_6BCNM3ELMB8TALHWU0kav1gg",CODE_COMPANION:"gizmo_PgeEdpiH5xhqtjZtnODS9byu",BROWSER:"gizmo_yTzFvQfxGJsJhmcAQGFFzbUN",NEW_GPT:"8b251995-a2cf-49cf-b383-6424267676f7",LACROIX_GENERATOR:"64018dfa-1c06-4667-a32d-3035a5e74ad1",PNG_PANTHER:"2f38f2b8-e925-4f26-9770-b9dace18b5be",LANGUAGE_PRACTICE:"86eff182-d5d4-4391-aa60-0c0c54df8060",DALLE_NAVIGATOR:"0b1a5d0f-4a99-4421-a02c-cce08b7897c6",COPY_PROOFREADER:"4ea96bef-bb1c-483e-81f7-77949de1a37f",DALLE_8BIT:"495fb028-c966-4a53-8b0a-8cbc91739b04",DUNGEON_MASTER:"4559c961-8a15-49b6-bc3e-586f105c010c",SLIDEMASTER:"4f55d33f-3cec-442b-909e-a70f5c938767",POSTERIZER:"9cb8c072-dc05-4288-92a8-c59a27e59e74",ASTROLOGY:"f450b8e4-2baa-4c81-9f1a-ddfd0f1ef1ac",FANTASY_FOOTBALL:"37fb82bd-b9b5-4244-9c01-2b5d6916473f",JEOPARDY:"ee8fddfc-52b2-484d-839b-288f4bf2f7e2"},i=[o.DALLE,o.CODE_COMPANION,o.BROWSER],r=[o.LACROIX_GENERATOR,o.PNG_PANTHER,o.LANGUAGE_PRACTICE,o.DALLE_NAVIGATOR,o.COPY_PROOFREADER,o.DALLE_8BIT,o.DUNGEON_MASTER,o.SLIDEMASTER,o.POSTERIZER,o.ASTROLOGY,o.FANTASY_FOOTBALL,o.JEOPARDY]},58659:function(e,t,n){"use strict";n.d(t,{O:function(){return y}});var o=n(39324),i=n(71209),r=n(22830),a=n(35250),s=n(75641),c=n(70079),d=n(76483),u=n(70671),l=n(6038),f=n(67273),g=n(56309),p=n(47044),h=n(65261),b=n(98439),m=n(77224),v=n(89314),_=n(63031);function y(e){var t=e.conversationTemplate,n=e.onFileChange,y=(0,u.Z)(),A=(0,r._)((0,c.useState)(void 0),2),k=A[0],C=A[1],E=(0,c.useRef)(n);(0,c.useEffect)(function(){E.current=n});var T=(0,d.uI)((0,o._)({disabled:!1,noClick:!0,onDropAccepted:function(e){if(e.length>0){var t=e[0],n=(0,v.W7)(t);C({tempId:n,type:m.A.ProfilePicture,file:t,status:m.X.Uploading,progress:1,fileId:null,cdnUrl:null}),E.current("uploading"),(0,v.lU)(n,t,y,s.Ei.ProfilePicture,{onFileCreated:function(e,t,n){C(function(r){return"initial"!==r&&(null==r?void 0:r.tempId)===e&&r.status===m.X.Uploading?(0,i._)((0,o._)({},r),{progress:10,fileId:t,cdnUrl:n}):r})},onFileUploadProgress:function(e,t){C(function(n){return"initial"!==n&&(null==n?void 0:n.tempId)===e&&n.status===m.X.Uploading?(0,i._)((0,o._)({},n),{progress:t}):n})},onFileUploaded:function(e,t){C(function(n){return"initial"!==n&&(null==n?void 0:n.tempId)===e?(E.current(n),(0,i._)((0,o._)({},n),{status:m.X.Ready,progress:100,fileSpec:(0,o._)({name:n.file.name,id:n.fileId,size:n.file.size},null!=t?t:{})})):n})},onError:function(e){C(function(t){return"initial"!==t&&(null==t?void 0:t.tempId)===e?void 0:t})}})}},onDropRejected:function(e){return(0,h.UJ)(e,y,m.A.ProfilePicture)},multiple:!0,maxSize:p.xC},(0,_.Z8)(_.KL))).open;return(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"h-10 w-10",children:"initial"===k||null==k?(0,a.jsx)(l.Py,{conversationTemplate:t,className:"!h-full !w-full !rounded-2xl"}):null!=k?(0,a.jsxs)("div",{className:"relative h-full w-full overflow-hidden rounded-2xl",children:[(0,a.jsx)(b.l,{file:k.file}),k.status===m.X.Uploading&&k.progress<90?(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black/5 text-white",children:(0,a.jsx)(g.Z,{percentage:k.progress,className:"h-6 w-6"})}):null]}):(0,a.jsx)("div",{className:"h-full w-full rounded-2xl border border-token-border-medium"})}),(0,a.jsxs)("div",{className:"space-x-2",children:[(0,a.jsx)(f.z,{color:"neutral",type:"button",onClick:function(){T()},children:"Upload"}),(0,a.jsx)(f.z,{color:"neutral",type:"button",onClick:function(){n(void 0),C(void 0)},children:"Remove"})]})]})}},67:function(e,t,n){"use strict";n.d(t,{X:function(){return d},m:function(){return u}});var o=n(4337),i=n(35250),r=n(19841),a=n(9181),s=n.n(a);function c(){var e=(0,o._)(["rounded-full bg-black dark:bg-gray-100"]);return c=function(){return e},e}var d=n(21389).Z.div(c());function u(e){var t=e.className;return(0,i.jsx)(s(),{href:"/",shallow:!0,className:(0,r.default)("block h-8 w-8 cursor-pointer",t),children:(0,i.jsx)(d,{className:"h-full w-full"})})}},99805:function(e,t,n){"use strict";n.d(t,{QT:function(){return p},UA:function(){return h},i1:function(){return g},y4:function(){return b}});var o=n(39324),i=n(71209),r=n(4337),a=n(35250),s=n(47428),c=n(19841),d=n(21389),u=n(67273),l=n(45635);function f(){var e=(0,r._)(["sticky top-0 flex items-center justify-between z-10 h-14 bg-white/95 p-2 font-semibold dark:bg-gray-800/90 ",""]);return f=function(){return e},e}function g(e){var t=e.children,n=e.className,o=e.size;return(0,a.jsxs)("div",{className:(0,c.default)("relative flex-shrink-0 overflow-hidden","small"===o&&"rounded-sm","medium"===o&&"rounded-md","large"===o&&"rounded-lg","cover"===o&&"rounded-[38px]",n),children:[t,(0,a.jsx)("div",{className:(0,c.default)("absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]","small"===o&&"rounded-sm","medium"===o&&"rounded-md","large"===o&&"rounded-lg","cover"===o&&"rounded-[38px]")})]})}var p=d.Z.div(f(),function(e){return e.$spaceForCollapsedSidebar&&"pl-12"});function h(e){return(0,a.jsx)(s.ck,(0,i._)((0,o._)({},e),{className:(0,c.default)("flex cursor-pointer gap-2 px-5 py-3 text-sm hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-800",e.disabled&&"pointer-events-none opacity-50",e.className)}))}function b(e){var t=(0,a.jsx)(u.z,(0,i._)((0,o._)({color:"neutral",size:"small"},e),{className:(0,c.default)("h-10 whitespace-nowrap rounded-lg border border-token-border-medium px-3 py-2 shadow-[0_1px_1px_0_rgba(0,0,0,0.08)] focus:ring-0",e.className)}));return null!=e.label?(0,a.jsx)(l.u,{side:"left",label:e.label,className:"h-fit w-fit",children:t}):t}},2864:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});var o=n(39324),i=n(95137),r=n(5268);function a(e){var t,n=(0,r.a)(["template-plugins",(0,o._)({},e)],function(){return i.ZP.publicGetPluginsById({ids:e})},{onError:function(e){console.error(e)}}),a=n.data,s=n.isLoading;return{plugins:null!==(t=null==a?void 0:a.items)&&void 0!==t?t:[],isLoading:s}}},10664:function(e,t,n){"use strict";n.d(t,{n:function(){return O},A3:function(){return S},yx:function(){return B},JS:function(){return D}});var o,i,r,a=n(96237),s=n(39324),c=n(81949),d=n(15858),u=n(18719),l=n(73426),f=n(11084),g=n(82534),p=n(61888),h=n(70079),b=n(94968),m=n(95954),v=n(50253),_=n(88798),y=n(32877),A=n(37469),k=n(46020),C=n(78931),E=n(640),T=n(52787),x=n(45248),N=h.useLayoutEffect,R=RegExp("```.*?\\n([\\s\\S]+?)\\n?```[^`]*$","gms");(o=i||(i={})).Core="Core",o.Chat="Chat",o.Settings="Settings";var w=(0,s._)({Mod:"mod",Comma:","},d.s),L=(r={},(0,a._)(r,w.Mod,/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"⌘":"Ctrl"),(0,a._)(r,w.Comma,","),(0,a._)(r,w.Enter,"⏎"),(0,a._)(r,w.Escape,"Esc"),(0,a._)(r,w.ArrowUp,"↑"),(0,a._)(r,w.ArrowDown,"↓"),(0,a._)(r,w.ArrowLeft,"←"),(0,a._)(r,w.ArrowRight,"→"),(0,a._)(r,w.Backspace,"⌫"),(0,a._)(r,w.Delete,"⌦"),(0,a._)(r,w.Tab,"⇥"),(0,a._)(r,w.Control,"Ctrl"),(0,a._)(r,w.Shift,"Shift"),r),S=function(e){var t;return e.map(function(e){return null!==(t=L[e])&&void 0!==t?t:e})},M=(0,b.vU)({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat",description:"Keyboard shortcut to open a new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input",description:"Keyboard shortcut to focus the chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block",description:"Keyboard shortcut to copy the last code block in the chat"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response",description:"Keyboard shortcut to copy the last response in the chat"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions",description:"Keyboard shortcut to toggle custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar",description:"Keyboard shortcut to toggle navigation"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat",description:"Keyboard shortcut to delete chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts",description:"Keyboard shortcut to toggle keyboard actions"}}),O=new E.V,P=function(e){var t=e.resetThreadAction,n=e.clientThreadId,o=e.features;return[{key:"newChat",action:t||p.noop,actionMessageDescriptor:M.newChat,group:i.Core,keyboardBinding:[w.Mod,w.Shift,"o"],altKeyboardBindings:[[w.Mod,"k"]]},{key:"focusPromptTextarea",action:v.go,actionMessageDescriptor:M.focusPromptTextarea,group:i.Chat,keyboardBinding:[w.Shift,w.Escape]},{key:"copyLastCodeBlock",action:function(){if(null!=n)for(var e=A.tQ.getThreadCurrentLeafId(n),t=A.tQ.getThreadConversationTurns(n,e),o=t.length-1;o>=0;o--){var i=t[o].messages.reduce(function(e,t){return null==t.err&&t.message.author.role===m.uU.Assistant&&"all"===t.message.recipient?e+(e?"\n\n":"")+(0,T.RR)(t.message):e},""),r=(0,c._)(i.matchAll(R)),a=r.length?r[r.length-1][1]:null;if(null!=a){(0,f.S)(a).then(function(){_.m.success("Copied code block to clipboard")});break}}},actionMessageDescriptor:M.copyLastCodeBlock,group:i.Chat,keyboardBinding:[w.Mod,w.Shift,";"],altKeyboardBindings:[[w.Mod,w.Shift,":"]]},{key:"copyLastResponse",action:function(){null!=n&&A.tQ.copyLastMessageToClipboard(n,"keyboard").then(function(){_.m.success("Last response copied to clipboard")})},actionMessageDescriptor:M.copyLastResponse,group:i.Chat,keyboardBinding:[w.Mod,w.Shift,"c"]},{key:"toggleCustomInstructions",action:function(){return k.vm.toggleModal(k.B.UserContext)},actionMessageDescriptor:M.toggleCustomInstructions,group:i.Settings,keyboardBinding:[w.Mod,w.Shift,"i"],enabled:o.has(y.Rw)||o.has(y.uo)},{key:"navigationToggle",action:function(){return k.vm.toggleDesktopNavCollapsed()},actionMessageDescriptor:M.navigationToggle,group:i.Core,keyboardBinding:[w.Mod,w.Shift,"s"]},{key:"deleteChat",action:function(){O.publish({kind:"deleteChat"})},actionMessageDescriptor:M.deleteChat,group:i.Chat,keyboardBinding:[w.Mod,w.Shift,w.Backspace],altKeyboardBindings:[[w.Mod,w.Shift,w.Delete]]},{key:"toggleKeyboardActions",action:function(){return k.vm.toggleModal(k.B.KeyboardActions)},actionMessageDescriptor:M.toggleKeyboardActions,group:i.Settings,keyboardBinding:[w.Mod,"/"]}]},I=function(e){var t,n,o,i=(0,C.hz)().has(y.rk);return t=function(e){u.A.logEvent(l.M.keyboardShortcut,{keyboardActionKey:e.key}),g.U.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:e.key})},n={enabled:i},o=e.map(function(e){var t=e.keyboardBinding.join("+");if(e.altKeyboardBindings){t=[t];var n=e.altKeyboardBindings.map(function(e){return e.join("+")});t=t.concat(n)}return(0,x.ZP)(t,{byKey:!0})}),void N(function(){if((null==n?void 0:n.enabled)!==!1){var i=function(n){if(!n.repeat)for(var i=0;i<o.length;i++)o[i](n)&&(void 0===e[i].enabled||e[i].enabled)&&(n.preventDefault(),t(e[i]),e[i].action())},r=function(e){void 0!==e.key&&i(e)},a=document;return a.addEventListener("keydown",r),function(){a.removeEventListener("keydown",r)}}},[e,n])},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resetThreadAction,n=e.clientThreadId,o=(0,C.hz)();return(0,h.useMemo)(function(){return P({features:o,resetThreadAction:t,clientThreadId:n}).filter(function(e){var t=e.enabled;return void 0===t||t})},[n,o,t])},B=function(e){I(D({resetThreadAction:e.resetThreadAction,clientThreadId:e.clientThreadId}))}}},function(e){e.O(0,[8682,6786,3656,5960,2104,1438,7985,4137,5427,8937,2357,4099,9774,2888,179],function(){return e(e.s=15773)}),_N_E=e.O()}]);