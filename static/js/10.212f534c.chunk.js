(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[10],{298:function(e,n,a){"use strict";a.d(n,"a",(function(){return t}));var t=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},301:function(e,n,a){"use strict";a.d(n,"a",(function(){return l})),a.d(n,"b",(function(){return r}));var t=a(395),i=a(306),c=a(298),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n=Object(t.a)(Number(e),new Date,{locale:i.a});return Object(c.a)(n)}return""},r=function(e){return e?"".concat(e,"kg"):""}},394:function(e,n,a){"use strict";a.r(n);var t=a(300),i=a(82),c=a(4),l=a(0),r=a(286),s=a(144),o=a.n(s),d=a(284),u=a(76),j=a(288),m=a(36),v=a(368),b=a(369),h=a(370),O=a(371),g=a(269),p=a(81),x=a(404),f=a(293),k=a.n(f),S=a(327),N=a.n(S),C=a(67),F=["1","2"],y=["1","2"];function L(e){var n,a=e.animal,t=A();return Object(c.jsx)(r.a,{item:!0,xs:10,md:6,lg:3,children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(b.a,{component:m.c,to:"/animal/".concat(a.id),children:Object(c.jsx)(h.a,{className:t.media,image:a.imageUrl||"https://eu.ui-avatars.com/api/?name=".concat(a.name),title:"Animal picture"})}),Object(c.jsx)(O.a,{avatar:Object(c.jsx)(x.a,{"aria-label":"specie",alt:"specie",src:T(a)}),action:Object(c.jsx)(g.a,{"aria-label":"add to favorites",children:Object(c.jsx)(N.a,{})}),title:Object(c.jsx)(p.a,{className:t.headerText,noWrap:!0,children:a.name}),subheader:Object(c.jsx)(p.a,{className:t.headerText,noWrap:!0,children:null===(n=a.registration)||void 0===n?void 0:n.registrationDate})})]})})}function T(e){var n,a;if(!(null===(n=e.details)||void 0===n?void 0:n.gender)||!F.includes(e.details.gender.id))return"".concat(C.a.PUBLIC_URL,"/logo192.png");var t="0";return(null===e||void 0===e||null===(a=e.details)||void 0===a?void 0:a.species)&&y.includes(e.details.species.id)&&(t=e.details.species.id),"".concat(C.a.PUBLIC_URL,"/gender").concat(e.details.gender.id,"-species").concat(t,".png")}var A=k()((function(){return{media:{height:0,paddingTop:"56.25%"},headerText:{maxWidth:150}}}));function w(e){var n=e.animals;return Object(c.jsx)(r.a,{container:!0,component:"ul",spacing:2,justify:"center",children:n.map((function(e){return Object(c.jsx)(L,{animal:e},e.id)}))})}var B=a(19),D=a(372),E=a(22),I=a(373),R=a(377),U=a(376),W=a(374),G=a(375),V=a(301);function P(e){var n=e.animals,a=Object(B.f)(),t=q();return Object(c.jsx)(D.a,{children:Object(c.jsxs)(I.a,{className:t.table,size:"small","aria-label":"animals",children:[Object(c.jsx)(W.a,{children:Object(c.jsxs)(G.a,{className:t.headRow,children:[Object(c.jsx)(U.a,{align:"center",className:t.head}),Object(c.jsx)(U.a,{align:"center",className:t.head,children:"Specie"}),Object(c.jsx)(U.a,{align:"center",className:t.head,children:"Name"}),Object(c.jsx)(U.a,{align:"center",className:t.head,children:"Breed"}),Object(c.jsx)(U.a,{align:"center",className:t.head,children:"Weight, kg"}),Object(c.jsx)(U.a,{align:"center",className:t.head,children:"Age"}),Object(c.jsx)(U.a,{align:"center",className:t.head,children:"Checked in"})]})}),Object(c.jsx)(R.a,{children:n.map((function(e){var n,i;return Object(c.jsxs)(G.a,{hover:!0,onClick:function(){return n=e.id,void a.push("/animal/".concat(n));var n},className:t.row,children:[Object(c.jsx)(U.a,{align:"center",children:Object(c.jsx)(x.a,{alt:"Animal picture",src:e.imageUrl?e.imageUrl:"https://eu.ui-avatars.com/api/?name=".concat(e.name)})}),Object(c.jsx)(U.a,{align:"center",children:"Dog"}),Object(c.jsx)(U.a,{align:"center",children:e.name}),Object(c.jsx)(U.a,{align:"center",children:"Puddle"}),Object(c.jsx)(U.a,{align:"center",children:null===(n=e.details)||void 0===n?void 0:n.weight}),Object(c.jsx)(U.a,{align:"center",children:Object(V.a)(null===(i=e.details)||void 0===i?void 0:i.birthDate)}),Object(c.jsx)(U.a,{align:"center",children:"check-in date"})]},e.id)}))})]})})}var _,q=k()((function(e){return{headRow:{backgroundColor:Object(E.c)(e.palette.primary.dark,.75)},head:{color:e.palette.text.secondary},table:{width:"100%",backgroundColor:Object(E.c)(e.palette.background.paper,.4)},row:{cursor:"pointer",textDecoration:"none"}}})),z=a(329),J=a.n(z),Q=a(328),M=a.n(Q),H=a(403),K=a(378);function X(e){var n=e.value,a=e.onChange;return Object(c.jsxs)(H.a,{size:"small",exclusive:!0,value:n,onChange:function(e,n){return a(n)},"aria-label":"view selector",children:[Object(c.jsx)(K.a,{value:_.LIST,"aria-label":_.LIST,children:Object(c.jsx)(M.a,{})}),Object(c.jsx)(K.a,{value:_.TABLE,"aria-label":_.TABLE,children:Object(c.jsx)(J.a,{})})]})}!function(e){e.LIST="list",e.TABLE="table"}(_||(_={}));var Y={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimalsList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animals"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"species"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:324,source:{body:"query GetAnimalsList {\n    animals {\n        id\n        name\n        imageUrl\n        status\n        details {\n            gender {\n                id\n                value\n            }\n            species {\n                id\n                value\n            }\n            birthDate\n            weight\n        }\n    }\n}\n\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function Z(e){var n=e.viewType,a=Object(u.useQuery)(Y),t=a.loading,i=a.error,l=a.data;return t?Object(c.jsx)(j.a,{animation:"wave",variant:"rect",height:500}):i?Object(c.jsx)("p",{children:"Error!"}):(null===l||void 0===l?void 0:l.animals.length)?n===_.TABLE?Object(c.jsx)(P,{animals:l.animals}):Object(c.jsx)(w,{animals:l.animals}):Object(c.jsx)("p",{children:"No data"})}var $=a(405),ee=a(279);function ne(e){var n=e.filters,a=e.onDelete,i=e.onClearFilters;if(!n.some((function(e){return e.value})))return null;return Object(c.jsxs)(r.a,{container:!0,spacing:1,children:[n.filter((function(e){return e.value})).map((function(e){return Object(c.jsx)(r.a,{item:!0,children:Object(c.jsx)($.a,{label:e.displayValue,onDelete:function(){return a(e)}})},e.name)})),Object(c.jsx)(ee.a,{onClick:function(){var e=Object(t.a)(n);e.forEach((function(e){e.value=void 0,e.displayValue=void 0})),i(e)},children:"Clear"})]})}var ae=a(42),te=a(383),ie=a(289),ce=a(384),le=a(382),re=a(330),se=a.n(re),oe=a(379),de=a(406),ue=a(398),je=a(280);function me(e){var n=e.value,a=e.label,t=e.options,i=e.onChange,l="".concat(a,"-select"),r="".concat(l,"-label");return Object(c.jsx)(ie.a,{marginTop:2.5,marginBottom:2.5,children:Object(c.jsxs)(oe.a,{variant:"outlined",fullWidth:!0,children:[Object(c.jsx)(de.a,{id:r,htmlFor:l,children:a}),Object(c.jsx)(ue.a,{labelId:r,id:l,label:a,value:null!==n&&void 0!==n?n:"",onChange:function(e){return i(e.target.value)},children:t.map((function(e){return Object(c.jsx)(je.a,{value:e.value,children:e.title},e.value)}))})]})})}function ve(e){var n=e.filters,a=e.onReset,s=e.onApply,o=e.count,u=Object(ae.a)(),j=Object(d.a)(u.breakpoints.down("sm")),m=Object(l.useState)(!1),v=Object(i.a)(m,2),b=v[0],h=v[1],O=Object(l.useState)(n),g=Object(i.a)(O,2),x=g[0],f=g[1],k=function(){h(!1)};return Object(c.jsxs)(r.a,{container:!0,alignItems:"center",spacing:1,children:[Object(c.jsx)(r.a,{item:!0,children:o}),Object(c.jsx)(r.a,{item:!0,children:Object(c.jsx)(se.a,{onClick:function(){h(!0)}})}),Object(c.jsxs)(le.a,{fullWidth:!0,maxWidth:"sm",open:b,fullScreen:j,onClose:k,children:[Object(c.jsxs)(te.a,{children:[Object(c.jsxs)(ie.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(c.jsx)(p.a,{variant:"h6",children:"Search Filters"}),Object(c.jsx)(ee.a,{onClick:function(){var e=Object(t.a)(x);e.forEach((function(e){e.value=void 0,e.displayValue=void 0})),f(e),a(e)},children:"RESET ALL"})]}),n.map((function(e){return Object(c.jsx)(me,{value:e.value,label:e.name,options:e.options,onChange:function(n){return function(e,n){var a=x.indexOf(e);e.value=n,e.displayValue=e.options.filter((function(e){return e.value===n}))[0].title,f([].concat(Object(t.a)(x.slice(0,a)),[e],Object(t.a)(x.slice(a+1))))}(e,n)}})}))]}),Object(c.jsxs)(ce.a,{children:[Object(c.jsx)(ee.a,{variant:"outlined",onClick:k,children:"Cancel"}),Object(c.jsx)(ee.a,{variant:"contained",onClick:function(){k(),s(x)},color:"secondary",autoFocus:!0,children:"Apply"})]})]})]})}var be=a(131);function he(e){var n=e.viewType,a=e.onChange,t=e.mobile,i=e.filters,l=e.onFiltersClear,s=e.onFiltersApply,o=e.onFilterRemove;return Object(c.jsxs)(r.a,{container:!0,spacing:2,alignItems:"center",children:[Object(c.jsxs)(r.a,{container:!0,item:!0,xs:10,alignItems:"center",spacing:1,children:[Object(c.jsx)(r.a,{item:!0,children:Object(c.jsx)(ve,{filters:i,onReset:l,onApply:s,count:34})}),Object(c.jsx)(r.a,{item:!0,children:Object(c.jsx)(ne,{filters:i,onDelete:o,onClearFilters:l})})]}),!t&&Object(c.jsx)(r.a,{item:!0,xs:2,style:{textAlign:"right"},children:Object(c.jsx)(X,{value:n,onChange:a})})]})}n.default=function(){var e=o()(),n=Object(l.useState)(_.LIST),a=Object(i.a)(n,2),r=a[0],s=a[1],u=Object(d.a)(e.breakpoints.down("sm")),j=Object(l.useState)(Oe),m=Object(i.a)(j,2),v=m[0],b=m[1];Object(l.useEffect)((function(){u&&r===_.TABLE&&s(_.LIST)}),[u,r]);var h=function(e){console.log("Updating animals based on active filters..."),console.log(e.filter((function(e){return e.value})))};return Object(c.jsx)(be.a,{title:"Animals List",topSection:Object(c.jsx)(he,{viewType:r,onChange:function(){s(r===_.TABLE?_.LIST:_.TABLE)},mobile:u,filters:v,onFiltersClear:function(e){b(e),h(e)},onFiltersApply:function(e){b(e),h(e)},onFilterRemove:function(e){var n=v.indexOf(e);e.value=void 0,e.displayValue=void 0;var a=[].concat(Object(t.a)(v.slice(0,n)),[e],Object(t.a)(v.slice(n+1)));b(a),h(a)}}),children:Object(c.jsx)(Z,{viewType:r})})};var Oe=[{name:"Species",options:[{value:"dog",title:"Dog"},{value:"cat",title:"Cat"}]},{name:"Gender",options:[{value:"male",title:"Male"},{value:"female",title:"Female"}]},{name:"Color",options:[{value:"green",title:"Green"},{value:"black",title:"Black"},{value:"red",title:"Red"}]},{name:"Breed",options:[{value:"german_shephard",title:"German Shephard"},{value:"bulldog",title:"Bulldog"},{value:"poodle",title:"Poodle"},{value:"labdaror_retriever",title:"Labrador Retriever"}]}]}}]);
//# sourceMappingURL=10.212f534c.chunk.js.map