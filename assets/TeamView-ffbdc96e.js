import{_ as c,o as i,c as _,b as a,t as l,p as u,k as b,r as g,f as o,g as y,s as h,l as v,h as T,j as p}from"./index-844268ba.js";const f={name:"TeamMemberCard",props:{name:{type:String,required:!0},image:{type:String,required:!0},role:{type:String,required:!0}}},M=e=>(u("data-v-d344b832"),e=e(),b(),e),$={class:"member"},S={class:"top"},w=["src"],x={class:"bottom"},C=M(()=>a("span",{class:"divider"},null,-1));function D(e,r,s,m,t,d){return i(),_("div",$,[a("div",S,[a("img",{src:"/"+s.image},null,8,w)]),a("div",x,[a("h2",null,l(s.name),1),a("p",null,l(s.role),1),C])])}const I=c(f,[["render",D],["__scopeId","data-v-d344b832"]]);const k={name:"TeamMemberDisplay",data(){return{roles:["Co-Main Developer","Cheerleaderka","Leworęczny tenisista","Hardware"]}},components:{TeamMemberCard:I}},V={class:"teamwrapper"};function q(e,r,s,m,t,d){const n=g("TeamMemberCard");return i(),_("div",V,[o(n,{name:"Kacper Hanus",role:t.roles[2],image:"memberhomoser.png"},null,8,["role"]),o(n,{name:"Kacper Bronka",role:t.roles[0],image:"member1.png"},null,8,["role"]),o(n,{name:"Sebastian Drabik",role:t.roles[0],image:"member2.png"},null,8,["role"])])}const B=c(k,[["render",q],["__scopeId","data-v-0eeb5469"]]);const E={name:"TeamView",setup(){y(()=>{if(!p.TEAM){const e=[[".mainTitle",{y:[-300,0]},{duration:.8,easing:h()}],[".member",{opacity:[0,1],y:[-999,0]},{delay:v(.5),duration:.4,easing:"ease-in-out"}]];T(e,{defaultOptions:{duration:1}}).play(),p.TEAM=!0}})},components:{TeamMembersDisplay:B}},A=e=>(u("data-v-c559d891"),e=e(),b(),e),H=A(()=>a("h1",{class:"mainTitle"},"Meet Our Team",-1));function K(e,r,s,m,t,d){const n=g("TeamMembersDisplay");return i(),_("main",null,[H,o(n)])}const O=c(E,[["render",K],["__scopeId","data-v-c559d891"]]);export{O as default};
