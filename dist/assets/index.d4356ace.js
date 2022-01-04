import{c as e,j as t,r as n,O as o,a as r}from"./vendor.5883a874.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,a)=>{const s=new URL(e,o);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const l=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){a(new Error(`Failed to import: ${e}`)),r(c)},onload(){n(self[t].moduleMap[s]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const a=({children:n})=>{const o=e`
    position: absolute;
    top: 0;

    color: #fff;
    font-size: 32px;
    z-index: 1;

    @media screen and (min-width: 1367px) {
      font-size: 62px;
    }
  `;return t("h1",{css:o},n)},s=()=>{const[e,t]=n.useState([""]),[r,s]=n.useState(null);return n.useEffect((()=>{r||async function(){const e=new o({auth:"token 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"}),n=await e.request("GET /orgs/{org}/repos",{org:"imbox",type:"private",per_page:100,page:2}),r=await e.request("GET /orgs/{org}/repos",{org:"imbox",type:"private",per_page:100,page:1}),a=n.data.map((e=>e.name)),s=r.data.map((e=>e.name)),l=a.concat(s);console.log(`${l.length} repos found.`),t(l)}()})),n.createElement(n.Fragment,null,n.createElement(a,null,"PR Data in ImBox"),n.createElement("p",null,r))};function l(){return n.createElement("div",{className:"App"},n.createElement(s,null))}r.render(n.createElement(n.StrictMode,null,n.createElement(l,null)),document.getElementById("root"));
