(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jkDv:function(t,e,a){"use strict";a.r(e),a.d(e,"AdminModule",(function(){return It}));var i=a("ofXK"),r=a("tyNb"),n=a("lJxs"),o=a("0MNC"),c=a("fXoL"),b=a("zkoq"),s=a("Wp6s"),d=a("bTqV"),m=a("STbY"),l=a("NFeN");function u(t,e){if(1&t&&(c.Vb(0,"mat-grid-tile",4),c.Vb(1,"mat-card",5),c.Vb(2,"mat-card-header"),c.Vb(3,"mat-card-title"),c.Ac(4),c.Vb(5,"button",6),c.Vb(6,"mat-icon"),c.Ac(7,"more_vert"),c.Ub(),c.Ub(),c.Vb(8,"mat-menu",7,8),c.Vb(10,"button",9),c.Ac(11,"Expand"),c.Ub(),c.Vb(12,"button",9),c.Ac(13,"Remove"),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Vb(14,"mat-card-content",10),c.Vb(15,"div"),c.Ac(16,"Card Content Here"),c.Ub(),c.Ub(),c.Ub(),c.Ub()),2&t){const t=e.$implicit,a=c.rc(9);c.nc("colspan",t.cols)("rowspan",t.rows),c.Db(4),c.Cc(" ",t.title," "),c.Db(1),c.nc("matMenuTriggerFor",a)}}let p=(()=>{class t{constructor(t){this.breakpointObserver=t,this.cards=this.breakpointObserver.observe(o.b.Handset).pipe(Object(n.a)(({matches:t})=>t?[{title:"Card 1",cols:1,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}]))}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(o.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-dashboard"]],decls:6,vars:3,consts:[[1,"grid-container"],[1,"mat-h1"],["cols","2","rowHeight","350px"],[3,"colspan","rowspan",4,"ngFor","ngForOf"],[3,"colspan","rowspan"],[1,"dashboard-card"],["mat-icon-button","","aria-label","Toggle menu",1,"more-button",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item",""],[1,"dashboard-card-content"]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.Vb(1,"h1",1),c.Ac(2,"Dashboard"),c.Ub(),c.Vb(3,"mat-grid-list",2),c.zc(4,u,17,4,"mat-grid-tile",3),c.ic(5,"async"),c.Ub(),c.Ub()),2&t&&(c.Db(4),c.nc("ngForOf",c.jc(5,1,e.cards)))},directives:[b.a,i.k,b.c,s.a,s.d,s.g,d.b,m.c,l.a,m.d,m.a,s.c],pipes:[i.b],styles:[".grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;top:15px;left:15px;right:15px;bottom:15px}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center}"]}),t})();var f=a("3Pt+");class h{static isPriceValid(t){const e=t.value;return console.log(e),e>1e4?{price_invalid:!0}:null}}var g=a("nYR2"),v=a("f+7+"),V=a("BAab"),U=a("kmnG"),C=a("qFsG");function A(t,e){1&t&&(c.Vb(0,"p"),c.Ac(1,"Valor superado"),c.Ub())}function D(t,e){1&t&&(c.Vb(0,"p"),c.Ac(1,"Este campo es requerido"),c.Ub())}function w(t,e){if(1&t&&(c.Vb(0,"div"),c.zc(1,A,2,0,"p",6),c.zc(2,D,2,0,"p",6),c.Ub()),2&t){const t=c.hc();c.Db(1),c.nc("ngIf",t.priceField.hasError("price_invalid")),c.Db(1),c.nc("ngIf",t.priceField.hasError("required"))}}function y(t,e){1&t&&c.Qb(0,"img",11),2&t&&c.nc("src",e.ngIf,c.uc)}let I=(()=>{class t{constructor(t,e,a,i){this.formBuilder=t,this.productsService=e,this.router=a,this.angularFireSto=i,this.buildForm()}ngOnInit(){}uploadFile(t){const e=t.target.files[0],a=this.angularFireSto.ref("images");this.angularFireSto.upload("images",e).snapshotChanges().pipe(Object(g.a)(()=>{this.image$=a.getDownloadURL(),this.image$.subscribe(t=>{console.log(t),this.form.get("image").setValue(t)})})).subscribe()}buildForm(){this.form=this.formBuilder.group({id:["",[f.q.required]],title:["",[f.q.required]],price:["",[f.q.required,h.isPriceValid]],image:[""],description:["",[f.q.required]]})}saveproduct(t){t.preventDefault(),this.form.valid&&this.productsService.createProduct(this.form.value).subscribe(t=>{console.log(t),this.router.navigate(["./admin/products"])}),console.log(this.form.value)}get priceField(){return this.form.get("price")}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(f.b),c.Pb(v.a),c.Pb(r.c),c.Pb(V.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-form-product"]],decls:31,vars:6,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xs"],["placeholder","Id","formControlName","id","matInput","","type","text"],["placeholder","Title","formControlName","title","matInput","","type","text"],["placeholder","Price","formControlName","price","matInput","","type","number"],[4,"ngIf"],["placeholder","Description","formControlName","description","matInput",""],["alt","",3,"src",4,"ngIf"],["type","file",3,"change"],["mat-raised-button","","type","submit",3,"disabled"],["alt","",3,"src"]],template:function(t,e){1&t&&(c.Vb(0,"form",0),c.dc("ngSubmit",(function(t){return e.saveproduct(t)})),c.Vb(1,"mat-card"),c.Vb(2,"mat-card-header"),c.Vb(3,"mat-card-title"),c.Ac(4," Producto "),c.Ub(),c.Ub(),c.Vb(5,"mat-card-content"),c.Vb(6,"div",1),c.Vb(7,"div",2),c.Vb(8,"mat-form-field"),c.Qb(9,"input",3),c.Ub(),c.Ub(),c.Ub(),c.Vb(10,"div",1),c.Vb(11,"div",2),c.Vb(12,"mat-form-field"),c.Qb(13,"input",4),c.Ub(),c.Ub(),c.Ub(),c.Vb(14,"div",1),c.Vb(15,"div",2),c.Vb(16,"mat-form-field"),c.Qb(17,"input",5),c.Ub(),c.zc(18,w,3,2,"div",6),c.Ub(),c.Ub(),c.Vb(19,"div",1),c.Vb(20,"div",2),c.Vb(21,"mat-form-field"),c.Qb(22,"textarea",7),c.Ub(),c.Ub(),c.Ub(),c.Vb(23,"div",1),c.Vb(24,"div",2),c.zc(25,y,1,1,"img",8),c.ic(26,"async"),c.Vb(27,"input",9),c.dc("change",(function(t){return e.uploadFile(t)})),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Vb(28,"mat-card-actions"),c.Vb(29,"button",10),c.Ac(30,"Guardar"),c.Ub(),c.Ub(),c.Ub(),c.Ub()),2&t&&(c.nc("formGroup",e.form),c.Db(18),c.nc("ngIf",e.priceField.errors&&e.priceField.dirty),c.Db(7),c.nc("ngIf",c.jc(26,4,e.image$)),c.Db(4),c.nc("disabled",e.form.invalid))},directives:[f.r,f.l,f.f,s.a,s.d,s.g,s.c,U.c,f.a,C.a,f.k,f.e,f.o,i.l,s.b,d.b],pipes:[i.b],styles:[""]}),t})();var P=a("UXun"),S=a("7dP1"),N=a("XhcP"),M=a("/t3+"),q=a("MutI");function O(t,e){if(1&t){const t=c.Wb();c.Vb(0,"button",10),c.dc("click",(function(){return c.tc(t),c.hc(),c.rc(2).toggle()})),c.Vb(1,"mat-icon",11),c.Ac(2,"menu"),c.Ub(),c.Ub()}}let F=(()=>{class t{constructor(t,e,a){this.breakpointObserver=t,this.auth=e,this.router=a,this.isHandset$=this.breakpointObserver.observe(o.b.Handset).pipe(Object(n.a)(t=>t.matches),Object(P.a)())}ngOnInit(){}logout(){this.auth.logout().then(()=>{this.router.navigate(["./home"])})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(o.a),c.Pb(S.a),c.Pb(r.c))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-nav"]],decls:26,vars:12,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],["mat-list-item","","routerLink","/admin/create"],["mat-list-item","","routerLink","/admin/dashboard"],["mat-list-item","","routerLink","/admin/table"],["mat-list-item","","routerLink","/admin/products"],["mat-list-item","",3,"click"],["color","primary"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"]],template:function(t,e){1&t&&(c.Vb(0,"mat-sidenav-container",0),c.Vb(1,"mat-sidenav",1,2),c.ic(3,"async"),c.ic(4,"async"),c.ic(5,"async"),c.Vb(6,"mat-toolbar"),c.Ac(7,"Menu"),c.Ub(),c.Vb(8,"mat-nav-list"),c.Vb(9,"a",3),c.Ac(10,"Crear Producto"),c.Ub(),c.Vb(11,"a",4),c.Ac(12,"Home"),c.Ub(),c.Vb(13,"a",5),c.Ac(14,"Inventario"),c.Ub(),c.Vb(15,"a",6),c.Ac(16,"Productos"),c.Ub(),c.Vb(17,"a",7),c.dc("click",(function(){return e.logout()})),c.Ac(18,"Cerrar Sesi\xf3n"),c.Ub(),c.Ub(),c.Ub(),c.Vb(19,"mat-sidenav-content"),c.Vb(20,"mat-toolbar",8),c.zc(21,O,3,0,"button",9),c.ic(22,"async"),c.Vb(23,"span"),c.Ac(24,"appPlat-store"),c.Ub(),c.Ub(),c.Qb(25,"router-outlet"),c.Ub(),c.Ub()),2&t&&(c.Db(1),c.nc("mode",c.jc(4,6,e.isHandset$)?"over":"side")("opened",!1===c.jc(5,8,e.isHandset$)),c.Eb("role",c.jc(3,4,e.isHandset$)?"dialog":"navigation"),c.Db(20),c.nc("ngIf",c.jc(22,10,e.isHandset$)))},directives:[N.b,N.a,M.a,q.c,q.a,r.e,N.c,i.l,r.g,d.b,l.a],pipes:[i.b],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1}"]}),t})();var k=a("d3UM"),z=a("QibW"),x=a("FKr1");function T(t,e){1&t&&(c.Vb(0,"mat-error"),c.Ac(1," First name is "),c.Vb(2,"strong"),c.Ac(3,"required"),c.Ub(),c.Ub())}function H(t,e){1&t&&(c.Vb(0,"mat-error"),c.Ac(1," Last name is "),c.Vb(2,"strong"),c.Ac(3,"required"),c.Ub(),c.Ub())}function Q(t,e){1&t&&(c.Vb(0,"mat-error"),c.Ac(1," Address is "),c.Vb(2,"strong"),c.Ac(3,"required"),c.Ub(),c.Ub())}function R(t,e){if(1&t){const t=c.Wb();c.Vb(0,"div",2),c.Vb(1,"div",3),c.Vb(2,"button",22),c.dc("click",(function(){c.tc(t);const e=c.hc();return e.hasUnitNumber=!e.hasUnitNumber})),c.Ac(3," + Add C/O, Apt, Suite, Unit "),c.Ub(),c.Ub(),c.Ub()}}function _(t,e){1&t&&(c.Vb(0,"div",2),c.Vb(1,"div",3),c.Vb(2,"mat-form-field",4),c.Qb(3,"textarea",23),c.Ub(),c.Ub(),c.Ub())}function j(t,e){1&t&&(c.Vb(0,"mat-error"),c.Ac(1," City is "),c.Vb(2,"strong"),c.Ac(3,"required"),c.Ub(),c.Ub())}function E(t,e){if(1&t&&(c.Vb(0,"mat-option",24),c.Ac(1),c.Ub()),2&t){const t=e.$implicit;c.nc("value",t.abbreviation),c.Db(1),c.Cc(" ",t.name," ")}}function L(t,e){1&t&&(c.Vb(0,"mat-error"),c.Ac(1," State is "),c.Vb(2,"strong"),c.Ac(3,"required"),c.Ub(),c.Ub())}let $=(()=>{class t{constructor(t){this.fb=t,this.addressForm=this.fb.group({company:null,firstName:[null,f.q.required],lastName:[null,f.q.required],address:[null,f.q.required],address2:null,city:[null,f.q.required],state:[null,f.q.required],postalCode:[null,f.q.compose([f.q.required,f.q.minLength(5),f.q.maxLength(5)])],shipping:["free",f.q.required]}),this.hasUnitNumber=!1,this.states=[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"American Samoa",abbreviation:"AS"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District Of Columbia",abbreviation:"DC"},{name:"Federated States Of Micronesia",abbreviation:"FM"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Guam",abbreviation:"GU"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Palau",abbreviation:"PW"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virgin Islands",abbreviation:"VI"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}]}onSubmit(){alert("Thanks!")}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(f.b))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-product-form"]],decls:55,vars:10,consts:[["novalidate","",3,"formGroup","ngSubmit"],[1,"shipping-card"],[1,"row"],[1,"col"],[1,"full-width"],["matInput","","placeholder","Company","formControlName","company"],["matInput","","placeholder","First name","formControlName","firstName"],[4,"ngIf"],["matInput","","placeholder","Last name","formControlName","lastName"],["matInput","","placeholder","Address","formControlName","address"],["class","row",4,"ngIf"],["matInput","","placeholder","City","formControlName","city"],["placeholder","State","formControlName","state"],[3,"value",4,"ngFor","ngForOf"],["matInput","","maxlength","5","placeholder","Postal Code","type","number","formControlName","postalCode"],["postalCode",""],["align","end"],["formControlName","shipping"],["value","free"],["value","priority"],["value","nextday"],["mat-raised-button","","color","primary","type","submit"],["mat-button","","type","button",3,"click"],["matInput","","placeholder","Address 2","formControlName","address2"],[3,"value"]],template:function(t,e){if(1&t&&(c.Vb(0,"form",0),c.dc("ngSubmit",(function(){return e.onSubmit()})),c.Vb(1,"mat-card",1),c.Vb(2,"mat-card-header"),c.Vb(3,"mat-card-title"),c.Ac(4,"Shipping Information"),c.Ub(),c.Ub(),c.Vb(5,"mat-card-content"),c.Vb(6,"div",2),c.Vb(7,"div",3),c.Vb(8,"mat-form-field",4),c.Qb(9,"input",5),c.Ub(),c.Ub(),c.Ub(),c.Vb(10,"div",2),c.Vb(11,"div",3),c.Vb(12,"mat-form-field",4),c.Qb(13,"input",6),c.zc(14,T,4,0,"mat-error",7),c.Ub(),c.Ub(),c.Vb(15,"div",3),c.Vb(16,"mat-form-field",4),c.Qb(17,"input",8),c.zc(18,H,4,0,"mat-error",7),c.Ub(),c.Ub(),c.Ub(),c.Vb(19,"div",2),c.Vb(20,"div",3),c.Vb(21,"mat-form-field",4),c.Qb(22,"textarea",9),c.zc(23,Q,4,0,"mat-error",7),c.Ub(),c.Ub(),c.Ub(),c.zc(24,R,4,0,"div",10),c.zc(25,_,4,0,"div",10),c.Vb(26,"div",2),c.Vb(27,"div",3),c.Vb(28,"mat-form-field",4),c.Qb(29,"input",11),c.zc(30,j,4,0,"mat-error",7),c.Ub(),c.Ub(),c.Vb(31,"div",3),c.Vb(32,"mat-form-field",4),c.Vb(33,"mat-select",12),c.zc(34,E,2,2,"mat-option",13),c.Ub(),c.zc(35,L,4,0,"mat-error",7),c.Ub(),c.Ub(),c.Ub(),c.Vb(36,"div",2),c.Vb(37,"div",3),c.Vb(38,"mat-form-field",4),c.Qb(39,"input",14,15),c.Vb(41,"mat-hint",16),c.Ac(42),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Vb(43,"div",2),c.Vb(44,"div",3),c.Vb(45,"mat-radio-group",17),c.Vb(46,"mat-radio-button",18),c.Ac(47,"Free Shipping"),c.Ub(),c.Vb(48,"mat-radio-button",19),c.Ac(49,"Priority Shipping"),c.Ub(),c.Vb(50,"mat-radio-button",20),c.Ac(51,"Next Day Shipping"),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Vb(52,"mat-card-actions"),c.Vb(53,"button",21),c.Ac(54,"Submit"),c.Ub(),c.Ub(),c.Ub(),c.Ub()),2&t){const t=c.rc(40);c.nc("formGroup",e.addressForm),c.Db(14),c.nc("ngIf",e.addressForm.controls.firstName.hasError("required")),c.Db(4),c.nc("ngIf",e.addressForm.controls.lastName.hasError("required")),c.Db(5),c.nc("ngIf",e.addressForm.controls.address.hasError("required")),c.Db(1),c.nc("ngIf",!e.hasUnitNumber),c.Db(1),c.nc("ngIf",e.hasUnitNumber),c.Db(5),c.nc("ngIf",e.addressForm.controls.city.hasError("required")),c.Db(4),c.nc("ngForOf",e.states),c.Db(1),c.nc("ngIf",e.addressForm.controls.state.hasError("required")),c.Db(7),c.Cc("",t.value.length," / 5")}},directives:[f.r,f.l,f.f,s.a,s.d,s.g,s.c,U.c,C.a,f.a,f.k,f.e,i.l,k.a,i.k,f.o,f.h,U.f,z.b,z.a,s.b,d.b,U.b,x.j],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto}.mat-radio-button[_ngcontent-%COMP%]{display:block;margin:5px 0}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.col[_ngcontent-%COMP%]{flex:1;margin-right:20px}.col[_ngcontent-%COMP%]:last-child{margin-right:0}"]}),t})();var G=a("+0xr");function W(t,e){1&t&&(c.Vb(0,"th",10),c.Ac(1," Id "),c.Ub())}function J(t,e){if(1&t&&(c.Vb(0,"td",11),c.Ac(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Cc(" ",t.id," ")}}function B(t,e){1&t&&(c.Vb(0,"th",10),c.Ac(1," Titulo "),c.Ub())}function K(t,e){if(1&t&&(c.Vb(0,"td",11),c.Ac(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Cc(" ",t.title," ")}}function Y(t,e){1&t&&(c.Vb(0,"th",10),c.Ac(1," Precio "),c.Ub())}function X(t,e){if(1&t&&(c.Vb(0,"td",11),c.Ac(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Cc(" ",t.price," ")}}function Z(t,e){1&t&&(c.Vb(0,"th",10),c.Ac(1," Actions "),c.Ub())}const tt=function(t){return["edit",t]};function et(t,e){if(1&t){const t=c.Wb();c.Vb(0,"td",11),c.Vb(1,"a",12),c.Ac(2,"Editar"),c.Ub(),c.Vb(3,"button",13),c.dc("click",(function(){c.tc(t);const a=e.$implicit;return c.hc().deleteProduct(a.id)})),c.Ac(4,"Eliminar"),c.Ub(),c.Ub()}if(2&t){const t=e.$implicit;c.Db(1),c.nc("routerLink",c.pc(1,tt,t.id))}}function at(t,e){1&t&&c.Qb(0,"tr",14)}function it(t,e){1&t&&c.Qb(0,"tr",15)}let rt=(()=>{class t{constructor(t){this.productsService=t,this.productsArr=[],this.displayedColumns=["id","title","price","actions"]}ngOnInit(){this.fetchProducts()}fetchProducts(){this.productsService.getAllproducts().subscribe(t=>{this.productsArr=t})}deleteProduct(t){this.productsService.deleteProduct(t).subscribe(t=>{console.log(t),this.fetchProducts()})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(v.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-product-list"]],decls:17,vars:3,consts:[["mat-raised-button","","routerLink","create"],["mat-table","",1,"mat-elevation-z8","products-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","price"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Vb(0,"a",0),c.Ac(1,"Crear Nuevo Producto"),c.Ub(),c.Vb(2,"table",1),c.Tb(3,2),c.zc(4,W,2,0,"th",3),c.zc(5,J,2,1,"td",4),c.Sb(),c.Tb(6,5),c.zc(7,B,2,0,"th",3),c.zc(8,K,2,1,"td",4),c.Sb(),c.Tb(9,6),c.zc(10,Y,2,0,"th",3),c.zc(11,X,2,1,"td",4),c.Sb(),c.Tb(12,7),c.zc(13,Z,2,0,"th",3),c.zc(14,et,5,3,"td",4),c.Sb(),c.zc(15,at,1,0,"tr",8),c.zc(16,it,1,0,"tr",9),c.Ub()),2&t&&(c.Db(2),c.nc("dataSource",e.productsArr),c.Db(13),c.nc("matHeaderRowDef",e.displayedColumns),c.Db(1),c.nc("matRowDefColumns",e.displayedColumns))},directives:[d.a,r.e,G.j,G.c,G.e,G.b,G.g,G.i,G.d,G.a,d.b,G.f,G.h],styles:[".products-table[_ngcontent-%COMP%]{width:96%;margin:2%}"]}),t})();var nt=a("M9IT"),ot=a("Dh3D"),ct=a("0EQZ"),bt=a("LRne"),st=a("VRyK");const dt=[{id:1,name:"Hydrogen"},{id:2,name:"Helium"},{id:3,name:"Lithium"},{id:4,name:"Beryllium"},{id:5,name:"Boron"},{id:6,name:"Carbon"},{id:7,name:"Nitrogen"},{id:8,name:"Oxygen"},{id:9,name:"Fluorine"},{id:10,name:"Neon"},{id:11,name:"Sodium"},{id:12,name:"Magnesium"},{id:13,name:"Aluminum"},{id:14,name:"Silicon"},{id:15,name:"Phosphorus"},{id:16,name:"Sulfur"},{id:17,name:"Chlorine"},{id:18,name:"Argon"},{id:19,name:"Potassium"},{id:20,name:"Calcium"}];class mt extends ct.b{constructor(){super(),this.data=dt}connect(){const t=[Object(bt.a)(this.data),this.paginator.page,this.sort.sortChange];return Object(st.a)(...t).pipe(Object(n.a)(()=>this.getPagedData(this.getSortedData([...this.data]))))}disconnect(){}getPagedData(t){return t.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize)}getSortedData(t){return this.sort.active&&""!==this.sort.direction?t.sort((t,e)=>{const a="asc"===this.sort.direction;switch(this.sort.active){case"name":return lt(t.name,e.name,a);case"id":return lt(+t.id,+e.id,a);default:return 0}}):t}}function lt(t,e,a){return(t<e?-1:1)*(a?1:-1)}function ut(t,e){1&t&&(c.Vb(0,"th",10),c.Ac(1,"Id"),c.Ub())}function pt(t,e){if(1&t&&(c.Vb(0,"td",11),c.Ac(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Bc(t.id)}}function ft(t,e){1&t&&(c.Vb(0,"th",10),c.Ac(1,"Name"),c.Ub())}function ht(t,e){if(1&t&&(c.Vb(0,"td",11),c.Ac(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Bc(t.name)}}function gt(t,e){1&t&&c.Qb(0,"tr",12)}function vt(t,e){1&t&&c.Qb(0,"tr",13)}const Vt=function(){return[25,50,100,250]};function Ut(t,e){1&t&&(c.Vb(0,"p"),c.Ac(1,"Valor superado"),c.Ub())}function Ct(t,e){1&t&&(c.Vb(0,"p"),c.Ac(1,"Este campo es requerido"),c.Ub())}function At(t,e){if(1&t&&(c.Vb(0,"div"),c.zc(1,Ut,2,0,"p",5),c.zc(2,Ct,2,0,"p",5),c.Ub()),2&t){const t=c.hc();c.Db(1),c.nc("ngIf",t.priceField.hasError("price_invalid")),c.Db(1),c.nc("ngIf",t.priceField.hasError("required"))}}const Dt=[{path:"",component:F,children:[{path:"create",component:$},{path:"table",component:(()=>{class t{constructor(){this.displayedColumns=["id","name"]}ngOnInit(){this.dataSource=new mt}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.table.dataSource=this.dataSource}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Jb({type:t,selectors:[["app-table"]],viewQuery:function(t,e){var a;1&t&&(c.Fc(nt.a,!0),c.Fc(ot.a,!0),c.Fc(G.j,!0)),2&t&&(c.qc(a=c.ec())&&(e.paginator=a.first),c.qc(a=c.ec())&&(e.sort=a.first),c.qc(a=c.ec())&&(e.table=a.first))},decls:12,vars:7,consts:[[1,"mat-elevation-z8"],["mat-table","","matSort","","aria-label","Elements",1,"full-width-table"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageIndex","pageSize","pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.Vb(1,"table",1),c.Tb(2,2),c.zc(3,ut,2,0,"th",3),c.zc(4,pt,2,1,"td",4),c.Sb(),c.Tb(5,5),c.zc(6,ft,2,0,"th",3),c.zc(7,ht,2,1,"td",4),c.Sb(),c.zc(8,gt,1,0,"tr",6),c.zc(9,vt,1,0,"tr",7),c.Ub(),c.Qb(10,"mat-paginator",8,9),c.Ub()),2&t&&(c.Db(8),c.nc("matHeaderRowDef",e.displayedColumns),c.Db(1),c.nc("matRowDefColumns",e.displayedColumns),c.Db(1),c.nc("length",null==e.dataSource?null:e.dataSource.data.length)("pageIndex",0)("pageSize",50)("pageSizeOptions",c.oc(6,Vt)))},directives:[G.j,ot.a,G.c,G.e,G.b,G.g,G.i,nt.a,G.d,ot.b,G.a,G.f,G.h],styles:[".full-width-table[_ngcontent-%COMP%]{width:100%}"]}),t})()},{path:"dashboard",component:p},{path:"products",component:rt},{path:"products/create",component:I},{path:"products/edit/:id",component:(()=>{class t{constructor(t,e,a,i){this.formBuilder=t,this.productsService=e,this.router=a,this.activeRoute=i,this.buildForm()}ngOnInit(){this.activeRoute.params.subscribe(t=>{this.id=t.id,this.productsService.getProduct(this.id).subscribe(t=>{this.form.patchValue(t)})})}buildForm(){this.form=this.formBuilder.group({title:["",[f.q.required]],price:["",[f.q.required,h.isPriceValid]],image:[""],description:["",[f.q.required]]})}saveproduct(t){t.preventDefault(),this.form.valid&&this.productsService.updateProduct(this.id,this.form.value).subscribe(t=>{console.log(t),this.router.navigate(["./admin/products"])}),console.log(this.form.value)}get priceField(){return this.form.get("price")}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(f.b),c.Pb(v.a),c.Pb(r.c),c.Pb(r.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-product-edit"]],decls:22,vars:3,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xs"],["placeholder","Title","formControlName","title","matInput","","type","text"],["placeholder","Price","formControlName","price","matInput","","type","number"],[4,"ngIf"],["placeholder","Description","formControlName","description","matInput",""],["mat-raised-button","","type","submit",3,"disabled"]],template:function(t,e){1&t&&(c.Vb(0,"form",0),c.dc("ngSubmit",(function(t){return e.saveproduct(t)})),c.Vb(1,"mat-card"),c.Vb(2,"mat-card-header"),c.Vb(3,"mat-card-title"),c.Ac(4," Producto "),c.Ub(),c.Ub(),c.Vb(5,"mat-card-content"),c.Vb(6,"div",1),c.Vb(7,"div",2),c.Vb(8,"mat-form-field"),c.Qb(9,"input",3),c.Ub(),c.Ub(),c.Ub(),c.Vb(10,"div",1),c.Vb(11,"div",2),c.Vb(12,"mat-form-field"),c.Qb(13,"input",4),c.Ub(),c.zc(14,At,3,2,"div",5),c.Ub(),c.Ub(),c.Vb(15,"div",1),c.Vb(16,"div",2),c.Vb(17,"mat-form-field"),c.Qb(18,"textarea",6),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Vb(19,"mat-card-actions"),c.Vb(20,"button",7),c.Ac(21,"Guardar"),c.Ub(),c.Ub(),c.Ub(),c.Ub()),2&t&&(c.nc("formGroup",e.form),c.Db(14),c.nc("ngIf",e.priceField.errors&&e.priceField.dirty),c.Db(6),c.nc("disabled",e.form.invalid))},directives:[f.r,f.l,f.f,s.a,s.d,s.g,s.c,U.c,f.a,C.a,f.k,f.e,f.o,i.l,s.b,d.b],styles:[""]}),t})()}]}];let wt=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[r.f.forChild(Dt)],r.f]}),t})();var yt=a("hctd");let It=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[i.c,wt,f.p,yt.a]]}),t})()}}]);