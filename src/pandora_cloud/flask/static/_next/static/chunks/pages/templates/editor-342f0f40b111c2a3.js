(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3264],{64641:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/templates/editor",function(){return n(94670)}])},94670:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return et},default:function(){return en}});var s=n(35250),a=n(75641),r=n(21722),o=n(39324),i=n(71209),l=n(22830),c=n(4337),d=n(38104),u=n(37469),m=n(78931),h=n(6013),x=n(35427),p=n(19841),g=n(60554),v=n(70079),f=n(1454),b=n(21389),y=n(67273),j=n(79579),_=n(89368),k=n(1821),w=n(88798),N=n(42569),C=n(53776),T=n(36338),I=n(64082),S=n(95954),P=n(58914),O=n(80479),W=n(61888),M=n(14099),Z=v.memo(function(e){var t=e.playgroundTemplate,n=e.clientThreadId,a=e.onInitiated;(0,u.ax)(n);var r=(0,u.UL)(n),o=(0,u.oq)(n),i=(0,u.JI)(n,o).some(function(e){return e.role===S.uU.User});(0,T.BZ)(n,t.config.assistant_welcome_message),(0,v.useEffect)(function(){i&&a()},[i,a]),(0,v.useEffect)(function(){var e=(0,O.jh)(t.config.enabled_tools);!(0,u.Zz)(n)||r.lastModelUsed===t.config.model_slug&&(0,W.isEqual)(r.pluginIds,e)||u.tQ.updateInitialThreadDataForNewThread(n,t.config.model_slug,e)},[n,r.lastModelUsed,r.pluginIds,t.config.model_slug,t.config.enabled_tools]);var l=(0,v.useMemo)(function(){return{playgroundTemplate:t}},[t]);return(0,s.jsx)(P.h.Provider,{value:l,children:(0,s.jsx)(M.Z,{initialThreadData:r,clientThreadId:n})})});function D(){var e=(0,c._)(["block font-medium text-lg text-token-text-primary"]);return D=function(){return e},e}function E(){var e=(0,c._)(["mb-4"]);return E=function(){return e},e}function A(){var e=(0,c._)(["w-full resize-none overflow-y-auto rounded border bg-transparent px-3 py-2 focus:ring-2 focus:ring-blue-400 dark:border-gray-900 dark:bg-gray-700"]);return A=function(){return e},e}function z(){var e=(0,c._)(["text-sm text-red-500"]);return z=function(){return e},e}function B(e){var t=e.icon,n=e.color,a=e.setIcon,r=e.setColor;return(0,s.jsxs)("div",{className:"my-1 rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",children:[(0,s.jsx)("div",{className:"my-1.5 grid grid-cols-5 justify-items-center gap-3 border-b border-gray-200 px-4 py-4 dark:border-gray-700",children:T.nm.map(function(e){var t=(0,T.uJ)(e);return(0,s.jsxs)("button",{className:"relative h-6 w-6",onClick:function(){r(e)},children:[(0,s.jsx)("div",{className:"h-full w-full rounded",style:{backgroundColor:(0,T.uJ)(e)},children:(0,s.jsx)("div",{className:(0,p.default)("flex cursor-pointer flex-col items-center justify-center rounded p-2")},e)}),(0,s.jsx)("div",{className:(0,p.default)("absolute inset-0 rounded outline outline-2 outline-offset-2",e===n?"opacity-100":"opacity-0 hover:opacity-20"),style:{outlineColor:t}})]},e)})}),(0,s.jsx)("div",{className:"grid grid-cols-5 gap-3 p-4",children:T.Ap.map(function(e){var n=(0,T.i_)(e);return(0,s.jsx)("div",{className:(0,p.default)("flex cursor-pointer flex-col items-center justify-center rounded p-1.5 text-gray-800 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",e===t?"bg-gray-100 text-black dark:bg-gray-700 dark:text-white":""),onClick:function(){a(e)},children:(0,s.jsx)(n,{className:"icon-lg"})},e)})})]})}function q(e){var t=e.icon,n=e.color,a=e.setIcon,r=e.setColor,o=(0,T.i_)(t);return(0,s.jsxs)(h.fC,{children:[(0,s.jsx)(h.xz,{asChild:!0,children:(0,s.jsxs)("button",{className:"relative overflow-hidden rounded",children:[(0,s.jsx)("div",{className:"absolute inset-0 opacity-20",style:{backgroundColor:(0,T.uJ)(n)}}),(0,s.jsxs)("div",{className:"relative flex text-white",children:[(0,s.jsx)("div",{className:"rounded p-1.5",style:{backgroundColor:(0,T.uJ)(n)},children:(0,s.jsx)(o,{className:"icon-lg"})}),(0,s.jsx)("div",{className:"flex items-center",style:{color:(0,T.uJ)(n)},children:(0,s.jsx)(f.bTu,{className:"icon-sm"})})]})]})}),(0,s.jsx)(h.h_,{children:(0,s.jsx)(h.VY,{sideOffset:0,align:"start",children:(0,s.jsx)(B,{icon:t,color:n,setIcon:a,setColor:r})})})]})}var J=b.Z.label(D()),L=b.Z.div(E());function U(e){var t=e.value,n=e.icon,a=e.label;return(0,s.jsxs)(x.ck,{value:t,className:"inline-flex items-center gap-2 bg-gray-100 px-3 py-2 text-sm radix-state-checked:bg-green-600 radix-state-checked:text-white dark:bg-gray-500 dark:radix-state-checked:bg-green-600",children:[(0,s.jsx)(n,{className:"icon-sm"}),a]})}function R(e){var t=e.value,n=e.onValueChange;return(0,s.jsxs)(x.fC,{value:t,onValueChange:n,className:"inline-flex overflow-hidden rounded",children:[(0,s.jsx)(U,{value:T.Ou.Private,icon:f.UIZ,label:"Private"}),(0,s.jsx)(U,{value:T.Ou.Published,icon:f._rq,label:"Published"})]})}function G(e){var t=e.onDelete,n=e.onClose;return(0,s.jsx)(_.Z,{isOpen:!0,onClose:n,type:"danger",title:"Delete chat template",primaryButton:(0,s.jsx)(j.ZP.Button,{title:"Delete template",color:"danger",onClick:function(){t()}}),secondaryButton:(0,s.jsx)(j.ZP.Button,{title:"Cancel",color:"neutral",onClick:n}),children:(0,s.jsx)("div",{className:"text-sm",children:"Are you sure you want to delete this template? This cannot be undone."})})}function V(e){var t=e.workspaceId,n=e.conversationTemplate,a=(0,T.Zv)(t),o=(0,l._)((0,v.useState)(!1),2),i=o[0],c=o[1],u=(0,g.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y.z,{type:"button",onClick:function(){c(!0)},disabled:a.isLoading,color:"danger-outline",children:[(0,s.jsx)(f.Ybf,{className:"icon-sm"}),"Delete template"]}),i&&(0,s.jsx)(G,{onDelete:(0,r._)(function(){return(0,d.Jh)(this,function(e){switch(e.label){case 0:return[4,a.mutateAsync({conversationTemplateId:n.id})];case 1:return e.sent(),w.m.success("Chat template deleted",{duration:3}),u.push("/templates",void 0,{shallow:!0}),[2]}})}),onClose:function(){c(!1)}})]})}function X(e){var t,n,a,o,i,c,u=e.conversationTemplate,m=e.workspaceId,h=e.configContextMessage,x=e.setConfigContextMessage,p=e.configAssistantWelcomeMessage,f=e.setConfigAssistantWelcomeMessage,b=e.onNewPlaygroundConversation,j=(0,g.useRouter)(),_=(0,l._)((0,v.useState)(null!==(t=null==u?void 0:u.name)&&void 0!==t?t:""),2),k=_[0],N=_[1],C=(0,l._)((0,v.useState)(null!==(n=null==u?void 0:u.icon)&&void 0!==n?n:T.bj.Box),2),I=C[0],S=C[1],P=(0,l._)((0,v.useState)(null!==(a=null==u?void 0:u.color)&&void 0!==a?a:(0,T.yq)()),2),O=P[0],W=P[1],M=(0,l._)((0,v.useState)(null!==(o=null==u?void 0:u.config.context_message)&&void 0!==o?o:""),2),Z=M[0],D=M[1],E=(0,l._)((0,v.useState)(null!==(i=null==u?void 0:u.config.assistant_welcome_message)&&void 0!==i?i:""),2),A=E[0],z=E[1],B=(0,l._)((0,v.useState)((null==u?void 0:u.published_at)!=null?T.Ou.Published:T.Ou.Private),2),U=B[0],G=B[1],X=(0,l._)((0,v.useState)(null!==(c=null==u?void 0:u.description)&&void 0!==c?c:""),2),H=X[0],Y=X[1],$=U===T.Ou.Published&&(null==u?void 0:u.published_at)==null,Q=(0,T.jc)(m),ee=(0,T.h$)(m),et=k.length>T.h5,en=H.length>T.Ip;function es(){return(es=(0,r._)(function(){var e,t;return(0,d.Jh)(this,function(n){switch(n.label){case 0:if(e={name:k,description:H,config:{contextMessage:Z,assistantWelcomeMessage:A},publish:U===T.Ou.Published,icon:I,color:O,profilePicId:void 0},!(null!=u))return[3,2];return t=Z!==u.config.context_message,[4,ee.mutateAsync({conversationTemplateId:u.id,templateData:e},{onSuccess:function(){j.push("/?".concat(T.t9,"=").concat(u.id),void 0,{shallow:!0}),t?w.m.success($?"Template saved and published. Changes only apply to new chats. Try it out here.":"Template saved. Changes only apply to new chats. Try it out here.",{duration:3}):w.m.success($?"Template saved and published.":"Template saved.",{duration:3})}})];case 1:return n.sent(),[3,4];case 2:return[4,Q.mutateAsync({templateData:e},{onSuccess:function(e){j.push("/?".concat(T.t9,"=").concat(e.id),void 0,{shallow:!0}),w.m.success($?"Template created and published. Try it out here.":"Template created. Try it out here.",{duration:3})}})];case 3:n.sent(),n.label=4;case 4:return[2]}})})).apply(this,arguments)}return(0,s.jsxs)("div",{className:"flex h-full flex-col",children:[(0,s.jsxs)("div",{className:"grow overflow-auto px-10 py-6 md:py-10 lg:px-16",children:[(0,s.jsxs)(L,{children:[(0,s.jsxs)("div",{className:"mb-2 flex items-center gap-2",children:[(0,s.jsx)(q,{icon:I,color:O,setIcon:S,setColor:W}),(0,s.jsx)(J,{children:"Template name"})]}),(0,s.jsx)("input",{type:"text",className:"w-full resize-none overflow-y-auto rounded border bg-transparent px-3 py-2 outline-none focus:border-brand-green focus:ring-2 focus:ring-blue-400 dark:border-gray-900 dark:bg-gray-700",placeholder:"Short descriptive name",value:null!=k?k:"",onChange:function(e){return N(e.target.value)}}),et?(0,s.jsxs)(K,{className:"mt-1",children:["Template names cannot be longer than"," ",T.h5," characters."]}):null]}),(0,s.jsxs)(L,{children:[(0,s.jsx)(J,{children:"Instructions"}),(0,s.jsx)("div",{className:"text-md mb-2 text-token-text-secondary",children:"How should this template respond?"}),(0,s.jsx)(F,{rows:8,placeholder:"Give your template access to any content it should use to answer questions. What should your template do? What makes it special?",value:Z,onChange:function(e){return D(e.target.value)},onBlurCapture:function(){Z.trim()!==h.trim()&&(x(Z),b())}}),(0,s.jsx)("div",{className:"text-token-text-tertiary",children:"Tip: You can include extra information that ChatGPT will draw on when responding."})]}),(0,s.jsxs)(L,{children:[(0,s.jsx)(J,{children:"Welcome Message"}),(0,s.jsx)("div",{className:"text-md mb-2 text-token-text-secondary",children:"How should the chat begin?"}),(0,s.jsx)(F,{rows:8,placeholder:"Hi! What's up?",value:A,onChange:function(e){return z(e.target.value)},onBlurCapture:function(){A.trim()!==p.trim()&&(f(A),b())}})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mb-3 text-lg font-medium",children:"Sharing"}),(0,s.jsx)(R,{value:U,onValueChange:G}),(0,s.jsx)("div",{className:"mb-2 mt-3 text-xs text-token-text-secondary",children:U===T.Ou.Private?"This template can only be used by you.":"This template can be used by anyone in this workspace."}),U===T.Ou.Published&&(0,s.jsxs)(L,{className:"mt-4",children:[(0,s.jsx)(J,{children:"Description"}),(0,s.jsx)("div",{className:"text-md mb-2 text-token-text-secondary",children:"A publicly visible blurb about this template."}),(0,s.jsx)("textarea",{value:H,rows:5,placeholder:"What can this template do? What kinds of questions should users ask?",onChange:function(e){return Y(e.target.value)},className:"w-full resize-none overflow-y-auto rounded border bg-transparent px-3 py-2 focus:ring-2 focus:ring-blue-400 dark:border-gray-900 dark:bg-gray-700"}),en?(0,s.jsxs)(K,{className:"mt-1",children:["Template descriptions cannot be longer than"," ",T.Ip," characters."]}):null]}),null!=u&&(0,s.jsx)(L,{className:"mt-8",children:(0,s.jsx)(V,{workspaceId:m,conversationTemplate:u})})]})]}),(0,s.jsx)("div",{className:"border-t border-gray-100 dark:border-gray-700",children:(0,s.jsxs)("div",{className:"space-x-2 px-10 py-4 text-right lg:px-16",children:[(0,s.jsx)(y.z,{color:"neutral",as:"button",onClick:function(e){e.preventDefault(),j.back()},children:"Cancel"}),(0,s.jsx)(y.z,{loading:Q.isLoading||ee.isLoading,onClick:function(){return es.apply(this,arguments)},className:"cursor-pointer",disabled:Q.isLoading||ee.isLoading||Q.isSuccess||ee.isSuccess||""===k||""===Z||et||en,children:null!=u?$?"Save and publish template":"Save template":$?"Create and publish template":"Create template"})]})})]})}var F=b.Z.textarea(A()),H=function(e){var t,n,a=e.workspace,r=e.conversationTemplate,c=(0,g.useRouter)(),d=(0,l._)((0,v.useState)(function(){return(0,u.OX)()}),2),m=d[0],h=d[1],x=(0,l._)((0,v.useState)(null!==(t=null==r?void 0:r.config.context_message)&&void 0!==t?t:""),2),p=x[0],b=x[1],y=(0,l._)((0,v.useState)(!0),2),j=y[0],_=y[1],k=(0,l._)((0,v.useState)(null!==(n=null==r?void 0:r.config.assistant_welcome_message)&&void 0!==n?n:""),2),w=k[0],T=k[1],I=(0,v.useMemo)(function(){return(0,i._)((0,o._)({},C.W),{id:void 0,config:{context_message:p,assistant_welcome_message:w,model_slug:N.S0,plugin_ids:[],enabled_tools:[]}})},[p,w]),S=(0,v.useCallback)(function(){_(!1)},[]);return(0,s.jsxs)("div",{className:"flex h-screen flex-col overflow-hidden",children:[(0,s.jsxs)("div",{className:"max-md:px-8 max-md:py-4 flex justify-between bg-gray-800 px-10 py-6 lg:px-16",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsx)("div",{className:"max-md:text-lg text-xl font-medium text-white",children:void 0!==r?"Edit your template":"Create a template"}),(0,s.jsx)("div",{className:"max-md:text-sm text-gray-400",children:"Design a custom chat experience where you guide how ChatGPT responds."})]}),(0,s.jsx)("button",{className:"cursor-pointer text-gray-200",onClick:function(e){e.preventDefault(),c.back()},children:(0,s.jsx)(f.q5L,{className:"icon-lg"})})]}),(0,s.jsxs)("div",{className:"flex grow overflow-hidden",children:[(0,s.jsx)("div",{className:"relative grow dark:bg-gray-900",children:(0,s.jsx)(X,{conversationTemplate:r,workspaceId:a.id,configContextMessage:p,setConfigContextMessage:b,configAssistantWelcomeMessage:w,setConfigAssistantWelcomeMessage:T,onNewPlaygroundConversation:function(){h((0,u.OX)()),_(!0)}})}),(0,s.jsx)("div",{className:"relative hidden w-1/2 flex-shrink-0 bg-gray-50 dark:bg-gray-700 md:block",children:(0,s.jsxs)("div",{className:"max-lg:inset-10 absolute inset-12 overflow-auto rounded-xl bg-token-surface-primary shadow-lg dark:border dark:border-token-border-light dark:bg-gray-800",children:[(0,s.jsx)(Z,{playgroundTemplate:I,clientThreadId:m,onInitiated:S},m),j&&(0,s.jsxs)("div",{className:"max-md:left-6 max-md:right-6 absolute inset-y-1/2 left-16 right-16 flex h-fit flex-col items-center justify-center space-y-2 rounded border bg-gray-50 px-2 py-4 opacity-80 dark:border-gray-700 dark:bg-gray-900",children:[(0,s.jsx)(f.nrB,{className:"icon-xl"}),(0,s.jsx)("div",{className:"text-center text-lg font-medium text-token-text-primary",children:"Test your template"}),(0,s.jsx)("div",{className:"text-center text-token-text-tertiary",children:"This temporary chat updates every time you modify your template. It won’t be saved in your chat history."})]})]})})]})]})};function Y(e){var t=e.workspace,n=e.conversationTemplateId,a=(0,T.GS)(t.id,n).data,r=(0,m.ec)(m.F_.accountUserId),o=(null==a?void 0:a.owner_id)===r;return(0,v.useEffect)(function(){a&&void 0!==r&&!o&&(0,I.O)(a.id)},[o,r,a]),null!=a&&o?(0,s.jsx)(H,{workspace:t,conversationTemplate:a}):null}function $(e){var t=e.conversationTemplateId,n=(0,m.ec)().currentWorkspace;return null!=n?(0,s.jsx)("div",{children:void 0!=t?(0,s.jsx)(Y,{workspace:n,conversationTemplateId:t}):(0,s.jsx)(H,{workspace:n})}):(0,s.jsx)("div",{className:"flex min-h-screen items-center justify-center",children:(0,s.jsx)(k.Z,{})})}var K=b.Z.div(z()),Q=n(32877),ee=n(77010),et=!0;function en(){var e=(0,g.useRouter)(),t=e.query.id,n=(0,m.$T)(),r=(0,m.ec)(function(e){return e.currentWorkspace}),o=(0,m.hz)(),i=o.has(Q.PL);return(0,v.useEffect)(function(){i&&ee.Z.gatherData()},[i]),(0,v.useEffect)(function(){n||(null==r?void 0:r.structure)===a.CZ.WORKSPACE||e.push("/")},[n,r,o,e]),null!==r?(0,s.jsx)($,{conversationTemplateId:t}):null}},53776:function(e,t,n){"use strict";n.d(t,{W:function(){return a},x:function(){return r}});var s=n(42569),a={id:void 0,name:"",owner_id:"",author_name:void 0,description:null,published_at:void 0,icon:void 0,color:void 0,updated_at:void 0,profile_pic_id:void 0,profile_pic_permalink:void 0,config:{context_message:"",model_slug:s.S0,assistant_welcome_message:void 0,enabled_tools:void 0}},r={id:void 0,name:"",owner_id:"",author_name:void 0,description:null,published_at:void 0,icon:void 0,color:void 0,updated_at:void 0,profile_pic_id:void 0,profile_pic_permalink:void 0,config:{context_message:"",model_slug:s.dO,assistant_welcome_message:void 0,enabled_tools:void 0}}}},function(e){e.O(0,[6786,3656,5960,2104,7985,4137,5427,8937,2357,4099,9774,2888,179],function(){return e(e.s=64641)}),_N_E=e.O()}]);