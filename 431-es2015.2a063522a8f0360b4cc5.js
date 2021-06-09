(self.webpackChunksaraphan=self.webpackChunksaraphan||[]).push([[431],{4431:function(t,e,n){"use strict";n.r(e),n.d(e,{ProvidersFeatureSearchModule:function(){return $},ProvidersSearchComponent:function(){return M}});var i=n(1116),r=n(1671),o=n(5366),s=function(t){return t[t.EntitiesOnly=0]="EntitiesOnly",t[t.Both=1]="Both",t[t.None=2]="None",t}({});function c(t){return function(e,n){const i={ids:[...n.ids],entities:Object.assign({},n.entities)},r=t(e,i);return r===s.Both?Object.assign({},n,i):r===s.EntitiesOnly?Object.assign(Object.assign({},n),{entities:i.entities}):n}}function a(t,e){const n=e(t);return(0,o.X6Q)()&&void 0===n&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",t,"The `selectId` implementation:",e.toString()),n}function u(t){function e(e,n){const i=a(e,t);return i in n.entities?s.None:(n.ids.push(i),n.entities[i]=e,s.Both)}function n(t,n){let i=!1;for(const r of t)i=e(r,n)!==s.None||i;return i?s.Both:s.None}function i(t,e){const n=(t instanceof Array?t:e.ids.filter(n=>t(e.entities[n]))).filter(t=>t in e.entities).map(t=>delete e.entities[t]).length>0;return n&&(e.ids=e.ids.filter(t=>t in e.entities)),n?s.Both:s.None}function r(t,e){return o([t],e)}function o(e,n){const i={};return(e=e.filter(t=>t.id in n.entities)).length>0?e.filter(e=>function(e,n,i){const r=Object.assign({},i.entities[n.id],n.changes),o=a(r,t),s=o!==n.id;return s&&(e[n.id]=o,delete i.entities[n.id]),i.entities[o]=r,s}(i,e,n)).length>0?(n.ids=n.ids.map(t=>i[t]||t),s.Both):s.EntitiesOnly:s.None}function u(e,i){const r=[],c=[];for(const n of e){const e=a(n,t);e in i.entities?c.push({id:e,changes:n}):r.push(n)}const u=o(c,i),d=n(r,i);switch(!0){case d===s.None&&u===s.None:return s.None;case d===s.Both||u===s.Both:return s.Both;default:return s.EntitiesOnly}}return{removeAll:function(t){return Object.assign({},t,{ids:[],entities:{}})},addOne:c(e),addMany:c(n),setAll:c(function(t,e){return e.ids=[],e.entities={},n(t,e),s.Both}),setOne:c(function(e,n){const i=a(e,t);return i in n.entities?(n.entities[i]=e,s.EntitiesOnly):(n.ids.push(i),n.entities[i]=e,s.Both)}),updateOne:c(r),updateMany:c(o),upsertOne:c(function(t,e){return u([t],e)}),upsertMany:c(u),removeOne:c(function(t,e){return i([t],e)}),removeMany:c(i),map:c(function(t,e){return o(e.ids.reduce((n,i)=>{const r=t(e.entities[i]);return r!==e.entities[i]&&n.push({id:i,changes:r}),n},[]).filter(({id:t})=>t in e.entities),e)}),mapOne:c(function({map:t,id:e},n){const i=n.entities[e];return i?r({id:e,changes:t(i)},n):s.None})}}const d=(0,r.PH)("[Providers] Load Providers"),l=(0,r.PH)("[Providers] Load Providers Success",(0,r.Ky)()),p=(0,r.PH)("[Providers] Load Providers Failure",(0,r.Ky)()),h=function(t={}){const{selectId:e,sortComparer:n}=Object.assign({sortComparer:!1,selectId:t=>t.id},t),i={getInitialState:function(t={}){return Object.assign({ids:[],entities:{}},t)}},o={getSelectors:function(t){const e=t=>t.ids,n=t=>t.entities,i=(0,r.P1)(e,n,(t,e)=>t.map(t=>e[t])),o=(0,r.P1)(e,t=>t.length);return t?{selectIds:(0,r.P1)(t,e),selectEntities:(0,r.P1)(t,n),selectAll:(0,r.P1)(t,i),selectTotal:(0,r.P1)(t,o)}:{selectIds:e,selectEntities:n,selectAll:i,selectTotal:o}}},d=n?function(t,e){const{removeOne:n,removeMany:i,removeAll:r}=u(t);function o(t,e){return d([t],e)}function d(e,n){const i=e.filter(e=>!(a(e,t)in n.entities));return 0===i.length?s.None:(f(i,n),s.Both)}function l(t,e){return p([t],e)}function p(e,n){const i=[],r=e.filter(e=>function(e,n,i){if(!(n.id in i.entities))return!1;const r=Object.assign({},i.entities[n.id],n.changes),o=a(r,t);return delete i.entities[n.id],e.push(r),o!==n.id}(i,e,n)).length>0;if(0===i.length)return s.None;{const t=n.ids,e=[];return n.ids=n.ids.filter((t,i)=>t in n.entities||(e.push(i),!1)),f(i,n),!r&&e.every(e=>n.ids[e]===t[e])?s.EntitiesOnly:s.Both}}function h(e,n){const i=[],r=[];for(const s of e){const e=a(s,t);e in n.entities?r.push({id:e,changes:s}):i.push(s)}const o=p(r,n),c=d(i,n);switch(!0){case c===s.None&&o===s.None:return s.None;case c===s.Both||o===s.Both:return s.Both;default:return s.EntitiesOnly}}function f(n,i){n.sort(e);const r=[];let o=0,s=0;for(;o<n.length&&s<i.ids.length;){const c=n[o],u=a(c,t),d=i.ids[s];e(c,i.entities[d])<=0?(r.push(u),o++):(r.push(d),s++)}i.ids=r.concat(o<n.length?n.slice(o).map(t):i.ids.slice(s)),n.forEach((e,n)=>{i.entities[t(e)]=e})}return{removeOne:n,removeMany:i,removeAll:r,addOne:c(o),updateOne:c(l),upsertOne:c(function(t,e){return h([t],e)}),setAll:c(function(t,e){return e.entities={},e.ids=[],d(t,e),s.Both}),setOne:c(function(e,n){const i=a(e,t);return i in n.entities?(n.ids=n.ids.filter(t=>t!==i),f([e],n),s.Both):o(e,n)}),addMany:c(d),updateMany:c(p),upsertMany:c(h),map:c(function(t,e){return p(e.ids.reduce((n,i)=>{const r=t(e.entities[i]);return r!==e.entities[i]&&n.push({id:i,changes:r}),n},[]),e)}),mapOne:c(function({map:t,id:e},n){const i=n.entities[e];return i?l({id:e,changes:t(i)},n):s.None})}}(e,n):u(e);return Object.assign(Object.assign(Object.assign({selectId:e,sortComparer:n},i),o),d)}(),f=h.getInitialState({loaded:!1}),m=(0,r.Lq)(f,(0,r.on)(d,t=>Object.assign(Object.assign({},t),{loaded:!1,error:null})),(0,r.on)(l,(t,{providers:e})=>h.setAll(e,Object.assign(Object.assign({},t),{loaded:!0}))),(0,r.on)(p,(t,{error:e})=>Object.assign(Object.assign({},t),{error:e})));function g(t,e){return m(t,e)}const v=(0,r.ZF)("providers"),{selectAll:b,selectEntities:O}=h.getSelectors(),Z=(0,r.P1)(v,t=>t.loaded),y=((0,r.P1)(v,t=>t.error),(0,r.P1)(v,t=>b(t))),A=(0,r.P1)(v,t=>O(t)),P=(0,r.P1)(v,t=>t.selectedId),w=(0,r.P1)(A,P,(t,e)=>e&&t[e]);let B=(()=>{class t{constructor(t){this.store=t,this.loaded$=this.store.pipe((0,r.Ys)(Z)),this.allProviders$=this.store.pipe((0,r.Ys)(y)),this.selectedProviders$=this.store.pipe((0,r.Ys)(w))}dispatch(t){this.store.dispatch(t)}loadProviders(){this.store.dispatch(d())}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(r.yh))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),t})();var T=n(4809),j=n(480),q=n(9996),E=n(878),N=n(2693);let x=(()=>{class t{constructor(t){this.http=t}load(){return(0,E.of)([{id:1,name:"Lorem ipsum",description:"Lorem ipsum dolor sit amet"},{id:2,name:"At vero eos",description:"At vero eos et accusam et justo duo dolores"},{id:3,name:"Duis autem",description:"Duis autem vel eum iriure dolor in hendrerit"}])}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(N.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),_=(()=>{class t{constructor(t,e){this.actions$=t,this.providerDataService=e,this.loadProviders$=(0,T.GW)(()=>this.actions$.pipe((0,T.l4)(d),(0,j.he)({run:()=>(console.log("effect"),this.providerDataService.load().pipe((0,q.U)(t=>l({providers:t})))),onError:(t,e)=>(console.error("Error",e),p({error:e}))})))}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(T.eX),o.LFG(x))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),t})(),S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.Aw.forFeature("providers",g),T.sQ.forFeature([_])]]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[B],imports:[[i.ez,S]]}),t})();var F=n(2852);function I(t,e){if(1&t&&(o.TgZ(0,"div"),o.TgZ(1,"mat-card"),o.TgZ(2,"mat-card-title"),o._uU(3),o.qZA(),o.TgZ(4,"mat-card-content"),o._uU(5),o.qZA(),o.TgZ(6,"mat-card-actions"),o.TgZ(7,"a",1),o._uU(8,"Edit"),o.qZA(),o.TgZ(9,"a",1),o._uU(10,"Calendar"),o.qZA(),o.qZA(),o.TgZ(11,"mat-card-footer"),o.TgZ(12,"button",2),o.TgZ(13,"mat-icon"),o._uU(14,"more_vert"),o.qZA(),o.qZA(),o.TgZ(15,"button",3),o.TgZ(16,"mat-icon"),o._uU(17,"home"),o.qZA(),o.qZA(),o.TgZ(18,"button",4),o.TgZ(19,"mat-icon"),o._uU(20,"menu"),o.qZA(),o.qZA(),o.TgZ(21,"button",5),o.TgZ(22,"mat-icon"),o._uU(23,"favorite"),o.qZA(),o.qZA(),o.TgZ(24,"button",6),o.TgZ(25,"mat-icon"),o._uU(26,"open_in_new"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t){const t=e.$implicit;o.xp6(3),o.Oqu(t.name),o.xp6(2),o.Oqu(t.description)}}let M=(()=>{class t{constructor(t){this.app=t,this.providerList$=this.app.allProviders$,this.app.loadProviders()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(B))},t.\u0275cmp=o.Xpm({type:t,selectors:[["providers-search"]],decls:4,vars:3,consts:[[4,"ngFor","ngForOf"],["mat-raised-button","","href","https://www.google.com/","target","_blank"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon"]],template:function(t,e){1&t&&(o.TgZ(0,"h1"),o._uU(1,"providers-search"),o.qZA(),o.YNc(2,I,27,2,"div",0),o.ALo(3,"async")),2&t&&(o.xp6(2),o.Q6J("ngForOf",o.lcZ(3,1,e.providerList$)))},directives:[i.sg],pipes:[i.Ov],styles:["mat-card[_ngcontent-%COMP%]{margin-top:10px;cursor:pointer}mat-card[_ngcontent-%COMP%]:hover{box-shadow:0 2px 2px 2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 2px 2px 0 rgba(0,0,0,.12);transform:translateZ(0)}"],changeDetection:0}),t})();const U=[{path:"",component:M}];let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[F.Bz.forChild(U)],F.Bz]}),t})(),$=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.ez,L,C]]}),t})()}}]);