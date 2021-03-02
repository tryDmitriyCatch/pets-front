(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[9],{262:function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"b",(function(){return d}));var t=a(335),i=a(278),r=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n=Object(t.a)(Number(e),new Date,{locale:i.a});return r(n)}return""},d=function(e){return e?"".concat(e,"kg"):""}},337:function(e,n,a){"use strict";a.r(n);var t=a(4),i=a(304),r=a.n(i),c=a(0),d=a.n(c),l=a(18),s=a(69),o=a(310),m=a(74),u=a(220),v=a(222),j=a(240),b=a(227),h=a(182),k=a(31),O=a(79),p=a(7),x=a(320),g=a(323),f=a(225),N=a(331),S=a(332),F=a(340),w=a(261),y=a.n(w),D=a(308),A=a.n(D);function E(e){var n=e.eventName,a=e.date,i=e.author,r=e.description,d=G(),l=Object(c.useState)(!1),s=Object(O.a)(l,2),o=s[0],u=s[1];return Object(t.jsxs)(x.a,{className:d.root,children:[Object(t.jsx)(g.a,{avatar:Object(t.jsx)(F.a,{"aria-label":"event",alt:"event",children:"E"}),title:Object(t.jsx)(m.a,{noWrap:!0,className:d.eventName,children:n}),action:Object(t.jsx)(f.a,{className:Object(p.a)(d.expand,Object(k.a)({},d.expandOpen,o)),onClick:function(){return u(!o)},"aria-expanded":o,"aria-label":"show more",children:Object(t.jsx)(A.a,{})}),subheader:Object(t.jsx)(m.a,{noWrap:!0,children:a})}),Object(t.jsx)(N.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(t.jsxs)(S.a,{className:d.content,children:[Object(t.jsx)(m.a,{paragraph:!0,children:i}),Object(t.jsx)(m.a,{paragraph:!0,children:r})]})})]})}var G=y()((function(e){var n;return{root:{width:"100%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},eventName:(n={maxWidth:160},Object(k.a)(n,e.breakpoints.up("md"),{maxWidth:350}),Object(k.a)(n,e.breakpoints.up("lg"),{maxWidth:600}),n),content:{wordBreak:"break-word"}}})),W=Object(u.a)((function(){return Object(v.a)({root:{width:"100%"}})}));var C=function(){var e=W();return Object(t.jsx)(b.a,{className:e.root,children:[0,1,2,3].map((function(e){return Object(t.jsx)(h.a,{children:Object(t.jsx)(E,{eventName:"Event".concat(e),date:"2020-01-0".concat(e),author:"Author".concat(e),description:"Description".concat(e)})},e)}))})},U=a(281),q=Object(u.a)((function(){return Object(v.a)({root:{flexGrow:1}})}));var I=function(e){var n=e.children,a=q(),i=d.a.Children.count(n),r=!!Math.floor(12/i);if(!i||i>4)return null;var c=[];return d.a.Children.forEach(n,(function(e,n){c.push(Object(t.jsx)(U.a,{item:!0,xs:12,sm:r,children:e},"grid-col-".concat(n)))})),Object(t.jsx)("div",{className:a.root,children:Object(t.jsx)(U.a,{container:!0,spacing:3,children:c})})},M=a(262),V={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimal"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"allergy"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"food"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"breed"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:413,source:{body:"query GetAnimal($id: Int!) {\n    animal(id: $id) {\n        id\n        name\n        details {\n            gender {\n                value\n            }\n            color {\n                id\n                value\n            }\n            birthDate\n            weight\n            allergy\n            food\n            breed {\n                id\n                value\n            }\n        }\n        imageUrl\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},J=Object(u.a)((function(e){return Object(v.a)({root:{flexGrow:1},animalName:{color:e.palette.primary.dark},animalMeta:{color:e.palette.grey[600]}})}));n.default=function(){var e,n=Object(l.i)().id,a=J(),i=Object(s.useQuery)(V,{variables:{id:Number(n)}}),c=i.loading,d=i.error,u=i.data;if(c)return Object(t.jsx)(j.a,{animation:"wave",height:"70vh"});if(d)return Object(t.jsx)("p",{children:"Error!"});if(!(null===u||void 0===u?void 0:u.animal))return Object(t.jsx)("p",{children:"No data!"});var v=u.animal,b=(null===(e=v.details)||void 0===e?void 0:e.birthDate)?Object(M.a)(v.details.birthDate):"";return Object(t.jsxs)("div",{className:a.root,children:[Object(t.jsxs)(I,{children:[Object(t.jsx)(r.a,{src:v.imageUrl,aspectRatio:16/9}),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(o.a,{mt:1,children:Object(t.jsx)(m.a,{className:a.animalName,variant:"h3",component:"h1",children:v.name})}),v.details&&Object(t.jsx)(o.a,{mt:1,children:Object(t.jsx)(m.a,{className:a.animalMeta,variant:"body1",children:"".concat(v.details.breed,", ").concat(v.details.gender,", ").concat(Object(M.b)(v.details.weight),", ").concat(v.details.color,", ").concat(b)})}),Object(t.jsx)(o.a,{mt:1,children:Object(t.jsxs)(m.a,{variant:"body1",children:["Referencing Animal ID:",n]})})]})]}),Object(t.jsx)(o.a,{mt:2,mb:2,children:Object(t.jsx)(m.a,{variant:"h5",component:"h3",children:"Events"})}),Object(t.jsx)(C,{})]})}}}]);
//# sourceMappingURL=9.aa27d4aa.chunk.js.map