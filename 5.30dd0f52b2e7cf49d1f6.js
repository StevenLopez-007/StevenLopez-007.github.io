(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{bPOv:function(e,t){Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var o={};o[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",o)}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml},s8uC:function(e,t,n){"use strict";n.r(t),n.d(t,"LandingPage4Module",function(){return P});var a=n("ofXK"),o=n("fXoL"),i=(n("wZee"),n("bPOv"),n("kmnG")),r=n("qFsG"),s=n("1jcm"),c=n("NFeN");const l=["seccion1"],g=["cloud3"],d=["cloud2"];function u(e,t){if(1&e&&(o.Ub(0,"div",65),o.Ub(1,"mat-icon",66),o.Dc(2,"verified"),o.Tb(),o.Dc(3),o.Tb()),2&e){const e=t.$implicit,n=t.index;o.Db("data-aos-delay",250*n),o.Cb(3),o.Gc(" ",e," ",250*n," ")}}let m=(()=>{class e{constructor(e){this.renderer=e,this.chipsSeccion4=["Email notification","File uploads","Submissions archive","Administration panel","Spam blocker","Privacy compliant","Custom success page","JavaScript submissions","Data storage in the E.U","Export all submissions"],this.code='\n  <form action="https://form.taxi/s/FORM_CODE" method="POST">\n    <input type="text" name="Name">\n    <input type="email" name="Email">\n    <textarea name="Message"></textarea>\n    <input type="submit" value="Submit">\n  </form>\n  '}ngOnInit(){this.code=Prism.highlight(this.code,Prism.languages.markup)}ngAfterViewInit(){this.heightSeccion1=this.seccion1.nativeElement.offsetHeight}scrollWindow(){let e=window.scrollY/this.heightSeccion1*100;this.renderer.setStyle(this.cloud3.nativeElement,"bottom",`-${e>50?50:e}px`),this.renderer.setStyle(this.cloud2.nativeElement,"bottom",`-${e>50?50:e/2}px`)}hola(){console.log("hol")}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(o.G))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-landing-page4"]],viewQuery:function(e,t){if(1&e&&(o.Hc(l,1,o.l),o.Hc(g,1,o.l),o.Hc(d,1,o.l)),2&e){let e;o.pc(e=o.cc())&&(t.seccion1=e.first),o.pc(e=o.cc())&&(t.cloud3=e.first),o.pc(e=o.cc())&&(t.cloud2=e.first)}},hostBindings:function(e,t){1&e&&o.bc("scroll",function(){return t.scrollWindow()},!1,o.sc)},decls:176,vars:2,consts:[[1,"container-fluid","p-0"],["seccion1",""],[1,"cloud1"],[1,"cloud2"],["cloud2",""],[1,"cloud3"],["cloud3",""],[1,"row","cont"],[1,"row","seccion1"],[1,"pl-lg-5","col-lg-12","col-xl-6","col-md-12","d-flex","justify-content-center"],[1,"titles"],["data-aos","zoom-in"],["data-aos-delay","150","data-aos","zoom-in",1,"mt-4"],["data-aos-delay","300","data-aos","zoom-in",1,"mt-1"],["data-aos-delay","450","data-aos","zoom-in",1,"mt-5"],["data-aos-delay","600","data-aos","zoom-in",1,"buttons","mt-4"],[3,"click"],[1,"ml-0","ml-sm-3","ml-md-3"],[1,"airplane"],[1,"row","seccion2","pt-5","mt-5"],[1,"pb-5","pb-md-5","pb-sm-5","col-lg-6","col-md-12","pl-md-5","pl-lg-5","pl-xl-5","d-flex","justify-content-start","align-items-center"],[1,"titles2"],["data-aos-delay","0","data-aos","fade-right"],["data-aos-delay","150","data-aos","fade-right"],[1,"subtitle","mt-5","mb-5","pr-5"],["data-aos-delay","300","data-aos","fade-right"],["data-aos-delay","450","data-aos","fade-right"],["data-aos-delay","600","data-aos","fade-right"],["data-aos-delay","750","data-aos","fade-right"],["data-aos-offset","300","data-aos","zoom-in",1,"pt-5","pt-md-4","pt-sm-4","col-lg-6","col-md-12","col-sm-12","col-12","px-4","px-sm-5","px-md-5","px-lg-5"],[1,"codeSeccion2"],[1,"language-markup",2,"display","flex","margin","0"],[1,"language-markup",3,"innerHTML"],[1,"row","seccion3","pt-5","mt-5"],[1,"col-lg-7"],["data-aos-offset","0","data-aos","fade-up","class","chip",4,"ngFor","ngForOf"],[1,"col-lg-5"],["data-aos-delay","150","data-aos","zoom-in"],["data-aos-delay","300","data-aos","zoom-in",2,"line-height","1"],["data-aos-delay","450","data-aos","zoom-in",1,"pr-0","pr-sm-0","pr-md-0","pr-lg5","pr-xl-5"],["data-aos-delay","450","data-aos","zoom-in",1,"pr-5","pr-sm-0","pr-md-5","pr-lg5","pr-xl-5"],["data-aos-delay","600","data-aos","zoom-in"],[1,"row","seccion4"],[1,"col-lg-4","pl-lg-5"],["data-aos","fade-right"],["data-aos","fade-right","data-aos-delay","150",1,"mt-4"],["data-aos","fade-right","data-aos-delay","300",1,"mt-1"],["data-aos","fade-right","data-aos-delay","450",1,"mt-5"],["data-aos","fade-right","data-aos-delay","450"],[1,"col-lg-8","mt-md-5","mt-sm-5","mt-5"],[1,"contactForm"],["appearance","outline"],["matInput","","placeholder","Contact Form"],["matInput",""],[1,"no-white-space-toogle"],[1,"buttonFormRegister"],[1,"container"],[1,"row","pb-4"],[1,"col-lg-6","col-md-12"],[1,"writeMessage"],["src","../../../../assets/landingPage4/paper-plane.svg","alt",""],[1,"d-flex","align-items-center"],[1,"mr-3"],[1,"col-lg-2","col-md-4","col-sm-4","col-12","list"],[1,"m-0","py-5"],["data-aos-offset","0","data-aos","fade-up",1,"chip"],[1,"m-1"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"header",null,1),o.Pb(3,"div",2),o.Pb(4,"div",3,4),o.Pb(6,"div",5,6),o.Ub(8,"div",7),o.Ub(9,"div",8),o.Ub(10,"div",9),o.Ub(11,"div",10),o.Ub(12,"h2",11),o.Dc(13,"The Form Engine:"),o.Tb(),o.Ub(14,"h1",12),o.Dc(15,"Reliable backend for"),o.Tb(),o.Ub(16,"h3",13),o.Dc(17,"HTML forms!"),o.Tb(),o.Ub(18,"p",14),o.Dc(19," Submit your web forms with form.taxi \u2014 no programming, PHP scripting, or FormMailer required. Just connect your web form to our backend, and we will take care of storage, spam filtering, and email notification."),o.Tb(),o.Ub(20,"div",15),o.Ub(21,"button",16),o.bc("click",function(){return t.hola()}),o.Dc(22,"GET STARTED"),o.Tb(),o.Ub(23,"button",17),o.Dc(24,"FEATURES"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Pb(25,"div",18),o.Tb(),o.Tb(),o.Tb(),o.Ub(26,"div",19),o.Ub(27,"div",20),o.Ub(28,"div",21),o.Ub(29,"h2",22),o.Dc(30,"get ready"),o.Tb(),o.Ub(31,"h1",23),o.Dc(32,"In just "),o.Ub(33,"span"),o.Dc(34,"2 steps"),o.Tb(),o.Dc(35,"!"),o.Tb(),o.Ub(36,"div",24),o.Ub(37,"ol"),o.Ub(38,"li",25),o.Dc(39,"Create your form in HTML with the entry fields you need (such as contact form, order form,or registration form) depending on your requirements. You'll also find ready-made HTML code in our "),o.Ub(40,"span"),o.Dc(41,"form Templates."),o.Tb(),o.Tb(),o.Ub(42,"li",26),o.Dc(43," Connect with form.taxi: Register your form on form.taxi and insert the individual send address in the HTML source code. "),o.Tb(),o.Tb(),o.Tb(),o.Ub(44,"p",27),o.Dc(45,"And the form is ready to use! "),o.Pb(46,"br"),o.Dc(47," You'll find all the setup information in the "),o.Pb(48,"br"),o.Ub(49,"span"),o.Dc(50,"documentation."),o.Tb(),o.Tb(),o.Ub(51,"div",28),o.Ub(52,"button"),o.Dc(53,"REGISTER FORM"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(54,"div",29),o.Ub(55,"div",30),o.Ub(56,"pre",31),o.Dc(57,"          "),o.Pb(58,"code",32),o.Dc(59,"\n        "),o.Tb(),o.Tb(),o.Pb(60,"div"),o.Pb(61,"div"),o.Tb(),o.Tb(),o.Ub(62,"div",33),o.Ub(63,"div",34),o.Bc(64,u,4,3,"div",35),o.Tb(),o.Ub(65,"div",36),o.Ub(66,"div",21),o.Ub(67,"h2",37),o.Dc(68,"easy & powerful"),o.Tb(),o.Ub(69,"h1",38),o.Ub(70,"span"),o.Dc(71,"Rich featur set"),o.Tb(),o.Dc(72," for individual usage."),o.Tb(),o.Ub(73,"p",39),o.Dc(74,"Messages are always reliably delivered: With form.taxi, you can absolutely submit your online forms securely and reliably. We offer you a comprehensive et of features and settings so that you can customize your forms and transmit them easily."),o.Tb(),o.Ub(75,"p",40),o.Dc(76,"Start with our free basic plan! For extended use, you can switch to our PRO plan at any time. You can find an overview of the plans and features at:"),o.Tb(),o.Ub(77,"div",41),o.Ub(78,"button"),o.Dc(79,"FEATURES & PLANS"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(80,"div",42),o.Ub(81,"div",43),o.Ub(82,"div",10),o.Ub(83,"h2",44),o.Dc(84,"start free "),o.Tb(),o.Ub(85,"h1",45),o.Dc(86,"Basic plan for "),o.Tb(),o.Ub(87,"h3",46),o.Dc(88,"beginners"),o.Tb(),o.Ub(89,"p",47),o.Dc(90," Do you want to register your first form? This is how it works: Enter a suitable form name, such as "),o.Ub(91,"i"),o.Dc(92,'"Contact form"'),o.Tb(),o.Dc(93," along with your email address. We will create a free user account for you and send you a message with the activation link. "),o.Tb(),o.Ub(94,"p",48),o.Ub(95,"b"),o.Dc(96," Do you already have a user account?"),o.Tb(),o.Pb(97,"br"),o.Dc(98," In the Administration panel, create your new form. "),o.Tb(),o.Tb(),o.Tb(),o.Ub(99,"div",49),o.Ub(100,"form",11),o.Ub(101,"div",50),o.Ub(102,"div",21),o.Ub(103,"h2"),o.Dc(104,"Register form"),o.Tb(),o.Tb(),o.Ub(105,"p"),o.Ub(106,"mat-form-field",51),o.Ub(107,"mat-label"),o.Dc(108,"Name of your form"),o.Tb(),o.Pb(109,"input",52),o.Tb(),o.Tb(),o.Ub(110,"p"),o.Ub(111,"mat-form-field",51),o.Ub(112,"mat-label"),o.Dc(113,"Outline form field"),o.Tb(),o.Pb(114,"input",53),o.Tb(),o.Tb(),o.Ub(115,"p"),o.Ub(116,"mat-slide-toggle",54),o.Dc(117,"I agree to the Terms of Use and Privacy Policy. "),o.Tb(),o.Tb(),o.Ub(118,"div"),o.Ub(119,"mat-slide-toggle",54),o.Dc(120,"I would like to subscribe to the newsletter (we will send only important "),o.Pb(121,"br"),o.Dc(122," news, max. of 3 emails per year). "),o.Tb(),o.Tb(),o.Ub(123,"button",55),o.Dc(124,"REGISTER"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(125,"footer"),o.Ub(126,"div",56),o.Ub(127,"div",57),o.Ub(128,"div",58),o.Ub(129,"div",59),o.Pb(130,"img",60),o.Ub(131,"h1"),o.Dc(132,"You have "),o.Ub(133,"span"),o.Dc(134,"a question"),o.Tb(),o.Dc(135,"?"),o.Tb(),o.Ub(136,"button",61),o.Ub(137,"mat-icon",62),o.Dc(138,"message"),o.Tb(),o.Dc(139," WRITE MESSAGE "),o.Tb(),o.Tb(),o.Tb(),o.Ub(140,"div",63),o.Ub(141,"h3"),o.Dc(142,"OFFER"),o.Tb(),o.Ub(143,"ul"),o.Ub(144,"li"),o.Dc(145,"Home Page"),o.Tb(),o.Ub(146,"li"),o.Dc(147,"Features"),o.Tb(),o.Ub(148,"li"),o.Dc(149,"Prices"),o.Tb(),o.Ub(150,"li"),o.Dc(151,"Newsletter"),o.Tb(),o.Tb(),o.Tb(),o.Ub(152,"div",63),o.Ub(153,"h3"),o.Dc(154,"Usage"),o.Tb(),o.Ub(155,"ul"),o.Ub(156,"li"),o.Dc(157,"Documentation"),o.Tb(),o.Ub(158,"li"),o.Dc(159,"Form templates"),o.Tb(),o.Ub(160,"li"),o.Dc(161,"Panel Login"),o.Tb(),o.Ub(162,"li"),o.Dc(163,"Blog"),o.Tb(),o.Tb(),o.Tb(),o.Ub(164,"div",63),o.Ub(165,"h3"),o.Dc(166,"Legal"),o.Tb(),o.Ub(167,"ul"),o.Ub(168,"li"),o.Dc(169,"Terms of use"),o.Tb(),o.Ub(170,"li"),o.Dc(171,"Privacy policy"),o.Tb(),o.Ub(172,"li"),o.Dc(173,"Imprint"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(174,"h2",64),o.Dc(175,"Steven L\xf3pez"),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Cb(58),o.lc("innerHTML",t.code,o.uc),o.Cb(6),o.lc("ngForOf",t.chipsSeccion4))},directives:[a.j,i.b,i.e,r.b,s.a,c.a],styles:['.row[_ngcontent-%COMP%]{margin-left:0;margin-right:0}header[_ngcontent-%COMP%]{background:linear-gradient(180deg,#1a6ef4 0,#3f83f8 50%,#3f83f8 0);overflow:hidden}.seccion1[_ngcontent-%COMP%], header[_ngcontent-%COMP%]{position:relative}.seccion1[_ngcontent-%COMP%]{overflow:visible}.seccion1[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{padding-bottom:45%;padding-left:5%;position:relative;z-index:1000}@media only screen and (max-width:992px){.seccion1[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{padding-right:5%}}@media only screen and (max-width:480px){.seccion1[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{padding-bottom:67%}}.cloud1[_ngcontent-%COMP%]{background-image:url(cloud1.b4bb3a8c33a78a3c3dee.svg);z-index:5}.cloud2[_ngcontent-%COMP%]{background-image:url(cloud2.8f240d6de5e6cbddaa2c.svg);z-index:3}.cloud3[_ngcontent-%COMP%]{background-image:url(cloud3.59f91c7962292afad564.svg);z-index:2}.airplane[_ngcontent-%COMP%]{background-image:url(airplane.e1f12adff307947f596d.svg);background-position:100% 100%!important;background-size:auto 50%!important;transform:translate(-10%,-25%);z-index:4}@media only screen and (max-width:1280px){.airplane[_ngcontent-%COMP%]{transform:translate(-10%,-5%)}}.airplane[_ngcontent-%COMP%], .cloud1[_ngcontent-%COMP%], .cloud2[_ngcontent-%COMP%], .cloud3[_ngcontent-%COMP%]{background-position:bottom;background-repeat:no-repeat;background-size:100% auto;bottom:0;left:0;position:absolute;right:0;top:0}.titles[_ngcontent-%COMP%]{padding:10% 0 0 5%}.titles[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#dbeafe;font-family:BalBold;font-size:1.875rem}.titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .titles[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1f2937;font-family:BalBold;font-size:3.57rem;line-height:.7}.titles[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff}.titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#dbeafe;font-family:BalR;font-size:1.25rem}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{background-color:#e0478b;border:0;border-radius:.375rem;color:#fff;font-family:BalR;font-size:1.125rem;padding:16px 40px;transition:.25s}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child:hover{background-color:#fff;color:#1a6ef4}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){background-color:#77b2fb;border:0;border-radius:.375rem;color:#fff;font-family:BalR;font-size:1.125rem;padding:16px 40px;transition:.25s}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover{background-color:#fff;color:#1a6ef4}.codeSeccion2[_ngcontent-%COMP%]{position:relative}.codeSeccion2[_ngcontent-%COMP%]:before{background-color:#c3ddfd;transform:rotate(-4deg) scale(1.05);z-index:5}.codeSeccion2[_ngcontent-%COMP%]:after, .codeSeccion2[_ngcontent-%COMP%]:before{border-radius:25px;bottom:0;content:"";left:0;position:absolute;right:0;top:0}.codeSeccion2[_ngcontent-%COMP%]:after{background-color:#e2e8f0;transform:rotate(4deg) scale(1.05);z-index:4}.codeSeccion2[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{border-radius:25px;overflow:auto;position:relative;transform:rotate(2deg);z-index:10}.titles2[_ngcontent-%COMP%]{color:#374151;line-height:2rem}.titles2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:BalBold;font-size:2rem}.titles2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:BalBold;font-size:3.5rem}.titles2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1a6ef4}.titles2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.125rem}.titles2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1a6ef4}.titles2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;border-radius:10px;color:#4b5563;font-family:BalR;font-size:1.125rem;line-height:1.75rem;padding:1rem 2.5rem;transition:.25s}.titles2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#e5e7eb}.subtitle[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem!important}.subtitle[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{counter-reset:li;list-style:none}.subtitle[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{counter-increment:li;margin:1rem 0}.subtitle[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{color:#374151;content:counter(li) ".";display:inline-block;font-family:BalBold;margin-left:-1em;width:1em}.subtitle[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1a6ef4}.seccion3[_ngcontent-%COMP%]{padding-bottom:20rem;position:relative}.seccion3[_ngcontent-%COMP%]:before{background-image:url(waves.af321d5d7e259773764b.svg);background-position-y:101%;background-repeat:no-repeat;bottom:0;content:"";left:0;position:absolute;right:0;top:0}.seccion3[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{display:flex;flex-wrap:wrap;justify-content:center;padding-top:7rem}.seccion3[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]{align-items:center;background-color:#dbeafe;border-radius:30px;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);color:#4b5563;display:flex;font-family:BalR;font-size:1.125rem;margin:.5rem .75rem;padding:1rem 1.5rem}.seccion3[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#e0478b}.seccion4[_ngcontent-%COMP%]{background-color:#b39ef7;padding-bottom:5rem;position:relative}.seccion4[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#ede9fe;line-height:1.25}form[_ngcontent-%COMP%]{align-items:center;display:flex;height:100%;justify-content:center;width:100%}form[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px;box-shadow:0 25px 50px -12px rgba(0,0,0,.25);padding:2rem;width:80%}form[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#1f2937;font-size:1.25rem}form[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{color:#4e5c73;font-family:BalRs;font-size:1rem;height:auto!important}form[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .buttonFormRegister[_ngcontent-%COMP%]{background-color:#2e70f0;border:none;border-radius:5px;color:#fff;font-family:BalR;font-size:1rem;letter-spacing:1px;margin:2.5rem 0 0;padding:1.5rem 0;transition:.25s;width:100%}form[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .buttonFormRegister[_ngcontent-%COMP%]:hover{background-color:#3b82f6}footer[_ngcontent-%COMP%]{background-color:#1f2937;padding-top:5rem}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #9ca3af}footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#9ca3af;font-family:BalBold;font-size:1rem}footer[_ngcontent-%COMP%]   .writeMessage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:10%;margin:1.25rem 0;width:10%}footer[_ngcontent-%COMP%]   .writeMessage[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#9ca3af;font-family:BalR;font-size:1.5rem}footer[_ngcontent-%COMP%]   .writeMessage[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}footer[_ngcontent-%COMP%]   .writeMessage[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:initial;border:1px solid #fff;border-radius:5px;color:#9ca3af;font-family:BalBold;font-size:1rem;padding:1rem 1.5rem;transition:.25s}footer[_ngcontent-%COMP%]   .writeMessage[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#fff;color:#1f2937}footer[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0}footer[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#dbeafe;font-family:BalR;font-size:1rem;margin:1rem 0}footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#9ca3af;font-family:BalR;text-align:center}@media only screen and (max-width:1200px){.titles[_ngcontent-%COMP%]{padding-right:5%}}@media only screen and (min-width:1280px){.cont[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;top:0}header[_ngcontent-%COMP%]{padding-top:60%}}@media only screen and (max-width:992px){.titles[_ngcontent-%COMP%]{text-align:center}.titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .titles[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2.75rem}.titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 auto;max-width:36rem}.airplane[_ngcontent-%COMP%]{transform:translate(-35%,10%)}.seccion3[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse}.seccion3[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{padding-top:2rem}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{margin:0;max-width:100%;width:100%}footer[_ngcontent-%COMP%]   .writeMessage[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center}footer[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{padding-top:4rem}}@media only screen and (max-width:768px){.airplane[_ngcontent-%COMP%]{background-size:auto 30%!important;transform:translate(-35%,1%)}}@media only screen and (max-width:668px){.titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .titles[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.75rem}.titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}.titles2[_ngcontent-%COMP%]{line-height:1.5rem}.titles2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.titles2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.25rem}.titles2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1rem}.titles2[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin:2rem 0!important;padding:0!important}.titles2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:1rem}.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px 0!important}.seccion3[_ngcontent-%COMP%]{padding-bottom:8rem}.seccion3[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{display:block}.seccion3[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]{padding:.5rem 1.5rem}form[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]{padding:1.25rem;width:100%}form[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .buttonFormRegister[_ngcontent-%COMP%]{padding:1rem 0}}@media only screen and (max-width:578px){footer[_ngcontent-%COMP%]   .writeMessage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;width:20%}footer[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{padding-top:1.5rem;text-align:center}}']}),e})();var p=n("tyNb");const f=[{path:"",component:m}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({imports:[[p.e.forChild(f)],p.e]}),e})();var h=n("vvyD");let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({imports:[[a.c,b,h.a]]}),e})()},wZee:function(e,t,n){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof o?new o(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var o,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var r in n[i]=o={},t)t.hasOwnProperty(r)&&(o[r]=e(t[r],n));return o;case"Array":return i=a.util.objId(t),n[i]?n[i]:(n[i]=o=[],t.forEach(function(t,a){o[a]=e(t,n)}),o);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var o=e.classList;if(o.contains(t))return!0;if(o.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var o in t)n[o]=t[o];return n},insertBefore:function(e,t,n,o){var i=(o=o||a.languages)[e],r={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var c in n)n.hasOwnProperty(c)&&(r[c]=n[c]);n.hasOwnProperty(s)||(r[s]=i[s])}var l=o[e];return o[e]=r,a.languages.DFS(a.languages,function(t,n){n===l&&t!=e&&(this[t]=r)}),r},DFS:function e(t,n,o,i){i=i||{};var r=a.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],o||s);var c=t[s],l=a.util.type(c);"Object"!==l||i[r(c)]?"Array"!==l||i[r(c)]||(i[r(c)]=!0,e(c,n,s,i)):(i[r(c)]=!0,e(c,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var o={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",o),o.elements=Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)),a.hooks.run("before-all-elements-highlight",o);for(var i,r=0;i=o.elements[r++];)a.highlightElement(i,!0===t,o.callback)},highlightElement:function(n,o,i){var r=a.util.getLanguage(n),s=a.languages[r];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+r;var c=n.parentElement;c&&"pre"===c.nodeName.toLowerCase()&&(c.className=c.className.replace(t,"").replace(/\s+/g," ")+" language-"+r);var l={element:n,language:r,grammar:s,code:n.textContent};function g(e){l.highlightedCode=e,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),i&&i.call(l.element)}if(a.hooks.run("before-sanity-check",l),!l.code)return a.hooks.run("complete",l),void(i&&i.call(l.element));if(a.hooks.run("before-highlight",l),l.grammar)if(o&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){g(e.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else g(a.highlight(l.code,l.grammar,l.language));else g(a.util.encode(l.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),o.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var o=new s;return c(o,o.head,e),r(e,o,t,o.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(o)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var o,i=0;o=n[i++];)o(t)}},Token:o};function o(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(e,t,n,a){e.lastIndex=t;var o=e.exec(n);if(o&&a&&o[1]){var i=o[1].length;o.index+=i,o[0]=o[0].slice(i)}return o}function r(e,t,n,s,g,d){for(var u in n)if(n.hasOwnProperty(u)&&n[u]){var m=n[u];m=Array.isArray(m)?m:[m];for(var p=0;p<m.length;++p){if(d&&d.cause==u+","+p)return;var f=m[p],b=f.inside,h=!!f.lookbehind,P=!!f.greedy,y=f.alias;if(P&&!f.pattern.global){var C=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,C+"g")}for(var _=f.pattern||f,v=s.next,O=g;v!==t.tail&&!(d&&O>=d.reach);O+=v.value.length,v=v.next){var M=v.value;if(t.length>e.length)return;if(!(M instanceof o)){var x,w=1;if(P){if(!(x=i(_,O,e,h)))break;var k=x.index,T=x.index+x[0].length,F=O;for(F+=v.value.length;k>=F;)F+=(v=v.next).value.length;if(O=F-=v.value.length,v.value instanceof o)continue;for(var U=v;U!==t.tail&&(F<T||"string"==typeof U.value);U=U.next)w++,F+=U.value.length;w--,M=e.slice(O,F),x.index-=O}else if(!(x=i(_,0,M,h)))continue;var A=x[0],D=M.slice(0,k=x.index),S=M.slice(k+A.length),z=O+M.length;d&&z>d.reach&&(d.reach=z);var E=v.prev;D&&(E=c(t,E,D),O+=D.length),l(t,E,w),v=c(t,E,new o(u,b?a.tokenize(A,b):A,y,A)),S&&c(t,v,S),w>1&&r(e,t,n,v.prev,O,{cause:u+","+p,reach:z})}}}}}function s(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var a=t.next,o={value:n,prev:t,next:a};return t.next=o,a.prev=o,e.length++,o}function l(e,t,n){for(var a=t.next,o=0;o<n&&a!==e.tail;o++)a=a.next;t.next=a,a.prev=t,e.length-=o}if(e.Prism=a,o.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var o="";return t.forEach(function(t){o+=e(t,n)}),o}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},r=t.alias;r&&(Array.isArray(r)?Array.prototype.push.apply(i.classes,r):i.classes.push(r)),a.hooks.run("wrap",i);var s="";for(var c in i.attributes)s+=" "+c+'="'+(i.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),o=n.language,i=n.immediateClose;e.postMessage(a.highlight(n.code,a.languages[o],o)),i&&e.close()},!1),a):a;var g=a.util.currentScript();function d(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var u=document.readyState;"loading"===u||"interactive"===u&&g&&g.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};o["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:o},a.languages.insertBefore("markup","cdata",i)}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},n.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=window.Prism,t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",a='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',o=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",function(e){e.selector+=", "+a}),e.hooks.add("before-sanity-check",function(o){var i=o.element;if(i.matches(a)){o.code="",i.setAttribute(n,"loading");var s=i.appendChild(document.createElement("CODE"));s.textContent="Loading\u2026";var c=i.getAttribute("data-src"),l=o.language;if("none"===l){var g=(/\.(\w+)$/.exec(c)||[,"none"])[1];l=t[g]||g}r(s,l),r(i,l);var d=e.plugins.autoloader;d&&d.loadLanguages(l);var u=new XMLHttpRequest;u.open("GET",c,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(i.setAttribute(n,"loaded"),s.textContent=u.responseText,e.highlightElement(s)):(i.setAttribute(n,"failed"),s.textContent=u.status>=400?"\u2716 Error "+u.status+" while fetching file: "+u.statusText:"\u2716 Error: File does not exist or is empty"))},u.send(null)}}),e.plugins.fileHighlight={highlight:function(t){for(var n,o=(t||document).querySelectorAll(a),i=0;n=o[i++];)e.highlightElement(n)}};var i=!1;e.fileHighlight=function(){i||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),i=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function r(e,t){var n=e.className;n=n.replace(o," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}()}}]);