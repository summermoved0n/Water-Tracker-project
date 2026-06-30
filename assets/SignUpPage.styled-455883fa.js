import{l as qA,n as fA,r as U,o as MA,F as jA,E as PA,j as s,i as KA,p as VA,q as D,u as WA,v as UA,w as Q,L as NA,x as HA,y as GA,z as $A}from"./index-0ad28ca0.js";function oA(){return oA=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)({}).hasOwnProperty.call(r,t)&&(A[t]=r[t])}return A},oA.apply(null,arguments)}var RA={exports:{}},_A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ae=_A,ee=Ae;function OA(){}function CA(){}CA.resetWarningCache=OA;var re=function(){function A(t,n,i,a,o,u){if(u!==ee){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}A.isRequired=A;function e(){return A}var r={array:A,bigint:A,bool:A,func:A,number:A,object:A,string:A,symbol:A,any:A,arrayOf:e,element:A,elementType:A,instanceOf:e,node:A,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:CA,resetWarningCache:OA};return r.PropTypes=r,r};RA.exports=re();var te=RA.exports;const I=qA(te);function ne(A){if(A.sheet)return A.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===A)return document.styleSheets[e]}function ie(A){var e=document.createElement("style");return e.setAttribute("data-emotion",A.key),A.nonce!==void 0&&e.setAttribute("nonce",A.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var ae=function(){function A(r){var t=this;this._insertTag=function(n){var i;t.tags.length===0?t.insertionPoint?i=t.insertionPoint.nextSibling:t.prepend?i=t.container.firstChild:i=t.before:i=t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(n,i),t.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=A.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ie(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ne(n);try{i.insertRule(t,i.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),this.tags=[],this.ctr=0},A}(),T="-ms-",eA="-moz-",l="-webkit-",zA="comm",dA="rule",uA="decl",se="@import",BA="@keyframes",oe="@layer",ce=Math.abs,rA=String.fromCharCode,le=Object.assign;function de(A,e){return w(A,0)^45?(((e<<2^w(A,0))<<2^w(A,1))<<2^w(A,2))<<2^w(A,3):0}function XA(A){return A.trim()}function ue(A,e){return(A=e.exec(A))?A[0]:A}function d(A,e,r){return A.replace(e,r)}function cA(A,e){return A.indexOf(e)}function w(A,e){return A.charCodeAt(e)|0}function J(A,e,r){return A.slice(e,r)}function R(A){return A.length}function pA(A){return A.length}function G(A,e){return e.push(A),A}function pe(A,e){return A.map(e).join("")}var tA=1,F=1,FA=0,E=0,v=0,L="";function nA(A,e,r,t,n,i,a){return{value:A,root:e,parent:r,type:t,props:n,children:i,line:tA,column:F,length:a,return:""}}function Z(A,e){return le(nA("",null,null,"",null,null,0),A,{length:-A.length},e)}function fe(){return v}function he(){return v=E>0?w(L,--E):0,F--,v===10&&(F=1,tA--),v}function V(){return v=E<FA?w(L,E++):0,F++,v===10&&(F=1,tA++),v}function C(){return w(L,E)}function $(){return E}function M(A,e){return J(L,A,e)}function Y(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function LA(A){return tA=F=1,FA=R(L=A),E=0,[]}function IA(A){return L="",A}function _(A){return XA(M(E-1,lA(A===91?A+2:A===40?A+1:A)))}function me(A){for(;(v=C())&&v<33;)V();return Y(A)>2||Y(v)>3?"":" "}function ge(A,e){for(;--e&&V()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return M(A,$()+(e<6&&C()==32&&V()==32))}function lA(A){for(;V();)switch(v){case A:return E;case 34:case 39:A!==34&&A!==39&&lA(v);break;case 40:A===41&&lA(A);break;case 92:V();break}return E}function xe(A,e){for(;V()&&A+v!==47+10;)if(A+v===42+42&&C()===47)break;return"/*"+M(e,E-1)+"*"+rA(A===47?A:V())}function be(A){for(;!Y(C());)V();return M(A,E)}function ye(A){return IA(AA("",null,null,null,[""],A=LA(A),0,[0],A))}function AA(A,e,r,t,n,i,a,o,u){for(var g=0,p=0,h=a,N=0,j=0,m=0,c=1,x=1,b=1,y=0,k="",z=n,W=i,P=t,f=k;x;)switch(m=y,y=V()){case 40:if(m!=108&&w(f,h-1)==58){cA(f+=d(_(y),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:f+=_(y);break;case 9:case 10:case 13:case 32:f+=me(m);break;case 92:f+=ge($()-1,7);continue;case 47:switch(C()){case 42:case 47:G(ve(xe(V(),$()),e,r),u);break;default:f+="/"}break;case 123*c:o[g++]=R(f)*b;case 125*c:case 59:case 0:switch(y){case 0:case 125:x=0;case 59+p:b==-1&&(f=d(f,/\f/g,"")),j>0&&R(f)-h&&G(j>32?mA(f+";",t,r,h-1):mA(d(f," ","")+";",t,r,h-2),u);break;case 59:f+=";";default:if(G(P=hA(f,e,r,g,p,n,o,k,z=[],W=[],h),i),y===123)if(p===0)AA(f,e,P,P,z,i,h,o,W);else switch(N===99&&w(f,3)===110?100:N){case 100:case 108:case 109:case 115:AA(A,P,P,t&&G(hA(A,P,P,0,0,n,o,k,n,z=[],h),W),n,W,h,o,t?z:W);break;default:AA(f,P,P,P,[""],W,0,o,W)}}g=p=j=0,c=b=1,k=f="",h=a;break;case 58:h=1+R(f),j=m;default:if(c<1){if(y==123)--c;else if(y==125&&c++==0&&he()==125)continue}switch(f+=rA(y),y*c){case 38:b=p>0?1:(f+="\f",-1);break;case 44:o[g++]=(R(f)-1)*b,b=1;break;case 64:C()===45&&(f+=_(V())),N=C(),p=h=R(k=f+=be($())),y++;break;case 45:m===45&&R(f)==2&&(c=0)}}return i}function hA(A,e,r,t,n,i,a,o,u,g,p){for(var h=n-1,N=n===0?i:[""],j=pA(N),m=0,c=0,x=0;m<t;++m)for(var b=0,y=J(A,h+1,h=ce(c=a[m])),k=A;b<j;++b)(k=XA(c>0?N[b]+" "+y:d(y,/&\f/g,N[b])))&&(u[x++]=k);return nA(A,e,r,n===0?dA:o,u,g,p)}function ve(A,e,r){return nA(A,e,r,zA,rA(fe()),J(A,2,-2),0)}function mA(A,e,r,t){return nA(A,e,r,uA,J(A,0,t),J(A,t+1,-1),t)}function X(A,e){for(var r="",t=pA(A),n=0;n<t;n++)r+=e(A[n],n,A,e)||"";return r}function we(A,e,r,t){switch(A.type){case oe:if(A.children.length)break;case se:case uA:return A.return=A.return||A.value;case zA:return"";case BA:return A.return=A.value+"{"+X(A.children,t)+"}";case dA:A.value=A.props.join(",")}return R(r=X(A.children,t))?A.return=A.value+"{"+r+"}":""}function Se(A){var e=pA(A);return function(r,t,n,i){for(var a="",o=0;o<e;o++)a+=A[o](r,t,n,i)||"";return a}}function ke(A){return function(e){e.root||(e=e.return)&&A(e)}}function Te(A){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=A(r)),e[r]}}var Ee=function(e,r,t){for(var n=0,i=0;n=i,i=C(),n===38&&i===12&&(r[t]=1),!Y(i);)V();return M(e,E)},je=function(e,r){var t=-1,n=44;do switch(Y(n)){case 0:n===38&&C()===12&&(r[t]=1),e[t]+=Ee(E-1,r,t);break;case 2:e[t]+=_(n);break;case 4:if(n===44){e[++t]=C()===58?"&\f":"",r[t]=e[t].length;break}default:e[t]+=rA(n)}while(n=V());return e},Pe=function(e,r){return IA(je(LA(e),r))},gA=new WeakMap,Ve=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;t.type!=="rule";)if(t=t.parent,!t)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!gA.get(t))&&!n){gA.set(e,!0);for(var i=[],a=Pe(r,i),o=t.props,u=0,g=0;u<a.length;u++)for(var p=0;p<o.length;p++,g++)e.props[g]=i[u]?a[u].replace(/&\f/g,o[p]):o[p]+" "+a[u]}}},We=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function ZA(A,e){switch(de(A,e)){case 5103:return l+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return l+A+eA+A+T+A+A;case 6828:case 4268:return l+A+T+A+A;case 6165:return l+A+T+"flex-"+A+A;case 5187:return l+A+d(A,/(\w+).+(:[^]+)/,l+"box-$1$2"+T+"flex-$1$2")+A;case 5443:return l+A+T+"flex-item-"+d(A,/flex-|-self/,"")+A;case 4675:return l+A+T+"flex-line-pack"+d(A,/align-content|flex-|-self/,"")+A;case 5548:return l+A+T+d(A,"shrink","negative")+A;case 5292:return l+A+T+d(A,"basis","preferred-size")+A;case 6060:return l+"box-"+d(A,"-grow","")+l+A+T+d(A,"grow","positive")+A;case 4554:return l+d(A,/([^-])(transform)/g,"$1"+l+"$2")+A;case 6187:return d(d(d(A,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),A,"")+A;case 5495:case 3959:return d(A,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return d(d(A,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+T+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+A+A;case 4095:case 3583:case 4068:case 2532:return d(A,/(.+)-inline(.+)/,l+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(A)-1-e>6)switch(w(A,e+1)){case 109:if(w(A,e+4)!==45)break;case 102:return d(A,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+eA+(w(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~cA(A,"stretch")?ZA(d(A,"stretch","fill-available"),e)+A:A}break;case 4949:if(w(A,e+1)!==115)break;case 6444:switch(w(A,R(A)-3-(~cA(A,"!important")&&10))){case 107:return d(A,":",":"+l)+A;case 101:return d(A,/(.+:)([^;!]+)(;|!.+)?/,"$1"+l+(w(A,14)===45?"inline-":"")+"box$3$1"+l+"$2$3$1"+T+"$2box$3")+A}break;case 5936:switch(w(A,e+11)){case 114:return l+A+T+d(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return l+A+T+d(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return l+A+T+d(A,/[svh]\w+-[tblr]{2}/,"lr")+A}return l+A+T+A+A}return A}var Ue=function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case uA:e.return=ZA(e.value,e.length);break;case BA:return X([Z(e,{value:d(e.value,"@","@"+l)})],n);case dA:if(e.length)return pe(e.props,function(i){switch(ue(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([Z(e,{props:[d(i,/:(read-\w+)/,":"+eA+"$1")]})],n);case"::placeholder":return X([Z(e,{props:[d(i,/:(plac\w+)/,":"+l+"input-$1")]}),Z(e,{props:[d(i,/:(plac\w+)/,":"+eA+"$1")]}),Z(e,{props:[d(i,/:(plac\w+)/,T+"input-$1")]})],n)}return""})}},Ne=[Ue],Re=function(e){var r=e.key;if(r==="css"){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,function(c){var x=c.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(c),c.setAttribute("data-s",""))})}var n=e.stylisPlugins||Ne,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(c){for(var x=c.getAttribute("data-emotion").split(" "),b=1;b<x.length;b++)i[x[b]]=!0;o.push(c)});var u,g=[Ve,We];{var p,h=[we,ke(function(c){p.insert(c)})],N=Se(g.concat(n,h)),j=function(x){return X(ye(x),N)};u=function(x,b,y,k){p=y,j(x?x+"{"+b.styles+"}":b.styles),k&&(m.inserted[b.name]=!0)}}var m={key:r,sheet:new ae({key:r,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:u};return m.sheet.hydrate(o),m},Oe=!0;function Ce(A,e,r){var t="";return r.split(" ").forEach(function(n){A[n]!==void 0?e.push(A[n]+";"):t+=n+" "}),t}var DA=function(e,r,t){var n=e.key+"-"+r.name;(t===!1||Oe===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},ze=function(e,r,t){DA(e,r,t);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var i=r;do e.insert(r===i?"."+n:"",i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Be(A){for(var e=0,r,t=0,n=A.length;n>=4;++t,n-=4)r=A.charCodeAt(t)&255|(A.charCodeAt(++t)&255)<<8|(A.charCodeAt(++t)&255)<<16|(A.charCodeAt(++t)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(A.charCodeAt(t+2)&255)<<16;case 2:e^=(A.charCodeAt(t+1)&255)<<8;case 1:e^=A.charCodeAt(t)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Xe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fe=/[A-Z]|^ms/g,Le=/_EMO_([^_]+?)_([^]*?)_EMO_/g,QA=function(e){return e.charCodeAt(1)===45},xA=function(e){return e!=null&&typeof e!="boolean"},iA=Te(function(A){return QA(A)?A:A.replace(Fe,"-$&").toLowerCase()}),bA=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Le,function(t,n,i){return O={name:n,styles:i,next:O},n})}return Xe[e]!==1&&!QA(e)&&typeof r=="number"&&r!==0?r+"px":r};function q(A,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return O={name:r.name,styles:r.styles,next:O},r.name;if(r.styles!==void 0){var t=r.next;if(t!==void 0)for(;t!==void 0;)O={name:t.name,styles:t.styles,next:O},t=t.next;var n=r.styles+";";return n}return Ie(A,e,r)}case"function":{if(A!==void 0){var i=O,a=r(A);return O=i,q(A,e,a)}break}}if(e==null)return r;var o=e[r];return o!==void 0?o:r}function Ie(A,e,r){var t="";if(Array.isArray(r))for(var n=0;n<r.length;n++)t+=q(A,e,r[n])+";";else for(var i in r){var a=r[i];if(typeof a!="object")e!=null&&e[a]!==void 0?t+=i+"{"+e[a]+"}":xA(a)&&(t+=iA(i)+":"+bA(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var o=0;o<a.length;o++)xA(a[o])&&(t+=iA(i)+":"+bA(i,a[o])+";");else{var u=q(A,e,a);switch(i){case"animation":case"animationName":{t+=iA(i)+":"+u+";";break}default:t+=i+"{"+u+"}"}}}return t}var yA=/label:\s*([^\s;\n{]+)\s*(;|$)/g,O,Ze=function(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,i="";O=void 0;var a=e[0];a==null||a.raw===void 0?(n=!1,i+=q(t,r,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=q(t,r,e[o]),n&&(i+=a[o]);yA.lastIndex=0;for(var u="",g;(g=yA.exec(i))!==null;)u+="-"+g[1];var p=Be(i)+u;return{name:p,styles:i,next:O}},De=function(e){return e()},Qe=fA["useInsertionEffect"]?fA["useInsertionEffect"]:!1,Je=Qe||De,JA=U.createContext(typeof HTMLElement<"u"?Re({key:"css"}):null);JA.Provider;var Ye=function(e){return U.forwardRef(function(r,t){var n=U.useContext(JA);return e(r,n,t)})},qe=U.createContext({}),Me=MA,Ke=function(e){return e!=="theme"},vA=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Me:Ke},wA=function(e,r,t){var n;if(r){var i=r.shouldForwardProp;n=e.__emotion_forwardProp&&i?function(a){return e.__emotion_forwardProp(a)&&i(a)}:i}return typeof n!="function"&&t&&(n=e.__emotion_forwardProp),n},He=function(e){var r=e.cache,t=e.serialized,n=e.isStringTag;return DA(r,t,n),Je(function(){return ze(r,t,n)}),null},Ge=function A(e,r){var t=e.__emotion_real===e,n=t&&e.__emotion_base||e,i,a;r!==void 0&&(i=r.label,a=r.target);var o=wA(e,r,t),u=o||vA(n),g=!u("as");return function(){var p=arguments,h=t&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(i!==void 0&&h.push("label:"+i+";"),p[0]==null||p[0].raw===void 0)h.push.apply(h,p);else{h.push(p[0][0]);for(var N=p.length,j=1;j<N;j++)h.push(p[j],p[0][j])}var m=Ye(function(c,x,b){var y=g&&c.as||n,k="",z=[],W=c;if(c.theme==null){W={};for(var P in c)W[P]=c[P];W.theme=U.useContext(qe)}typeof c.className=="string"?k=Ce(x.registered,z,c.className):c.className!=null&&(k=c.className+" ");var f=Ze(h.concat(z),x.registered,W);k+=x.key+"-"+f.name,a!==void 0&&(k+=" "+a);var YA=g&&o===void 0?vA(y):u,K={};for(var H in c)g&&H==="as"||YA(H)&&(K[H]=c[H]);return K.className=k,K.ref=b,U.createElement(U.Fragment,null,U.createElement(He,{cache:x,serialized:f,isStringTag:typeof y=="string"}),U.createElement(y,K))});return m.displayName=i!==void 0?i:"Styled("+(typeof n=="string"?n:n.displayName||n.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=n,m.__emotion_styles=h,m.__emotion_forwardProp=o,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(c,x){return A(c,oA({},r,x,{shouldForwardProp:wA(m,x,!0)})).apply(void 0,h)},m}},$e=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],S=Ge.bind();$e.forEach(function(A){S[A]=S(A)});const _e="data:image/png;base64,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",Ar="/Water-Tracker-project/assets/background-element-main-page@2x-3b9a03f0.png",er="_signInFields_gdlfs_1",rr={signInFields:er},tr=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,nr=S(jA)`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 280px;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1440px) {
    margin-top: 140px;
    margin-right: 104px;
    margin-left: auto;
  }
  h1 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
    color: var(--primery-color-black);
  }
  label {
    position: relative;
    margin-top: 16px;
  }
  input {
    padding: 12px 10px;
    width: 280px;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
    border: 0;
    outline: 1px solid var(--secondary-color---5);
    color: var(--primery-color-blue);
  }
  input::placeholder {
    color: var(--secondary-color-lightblue);
  }
  input:focus {
    outline-color: var(--primery-color-blue);
  }

  input:invalid {
    color: var(--secondary-color-red);
    border: 1px solid var(--secondary-color-red);
  }
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
  a {
    width: fit-content;
    font-size: 16px;
    line-height: 1.25;
    color: var(--primery-color-blue);
    transition: color ease-in-out 250ms;
  }
  a:hover {
    color: var(--secondary-color-orange);
  }
  svg {
    color: var(--primery-color-blue);
  }
`,ir=S.button`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 8px 30px;
  width: 280px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: var(--primery-color-blue);
  color: var(--primery-color-white);
  transition: box-shadow 250ms ease;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    font-size: 18px;
  }
  :hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
`,SA=S.span`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--primery-color-black);
`,ar=S.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: var(--primery-color-blue);
`,kA=S(PA)`
  margin-left: 4px;
  font-size: 14px;
  color: var(--secondary-color-red);
`,B=({iconName:A,width:e,height:r,stroke:t,fill:n})=>s.jsx("svg",{width:e||"24px",height:r||"24px",children:s.jsx("use",{href:`${KA}#${A}`,stroke:t,fill:n})});B.propTypes={iconName:I.string.isRequired,width:I.string,height:I.string,stroke:I.string,fill:I.string};const sr=VA().shape({email:D().email("Please enter a valid email").required("E-mail is required"),password:D().min(8,"Password must be 8 or more characters").max(64).required("Password is required")}),or=()=>{const[A,e]=U.useState(!1),r=WA(),t={email:"",password:""},n=async({email:i,password:a},{resetForm:o})=>{try{await r(HA({email:i,password:a})),o()}catch{}};return s.jsx(UA,{initialValues:t,validationSchema:sr,onSubmit:n,children:s.jsx(tr,{children:s.jsxs(nr,{children:[s.jsx("h1",{children:"Sign In"}),s.jsxs("div",{className:rr.signInFields,children:[s.jsxs("label",{children:[s.jsx(SA,{children:"Enter your email"}),s.jsx(Q,{name:"email",type:"email",placeholder:"E-mail"}),s.jsx(kA,{name:"email",component:"span"})]}),s.jsxs("label",{children:[s.jsx(SA,{children:"Enter your password"}),s.jsxs("div",{children:[s.jsx(Q,{name:"password",type:A?"text":"password",placeholder:"Password"}),s.jsx(ar,{type:"button",onClick:()=>e(!A),children:A?s.jsx(B,{iconName:"icon-eye",width:"16px",height:"16px"}):s.jsx(B,{iconName:"icon-eye-slash",width:"16px",height:"16px"})})]}),s.jsx(kA,{name:"password",component:"span"})]}),s.jsx(ir,{type:"submit",children:"Sign In"})]}),s.jsx(NA,{to:"/signup",children:"Sign Up"})]})})})},cr="_inputFields_lufqz_1",TA={inputFields:cr},lr=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,dr=S(jA)`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 280px;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1440px) {
    margin-top: 140px;
    margin-right: 104px;
    margin-left: auto;
  }
  h1 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
    color: var(--primery-color-black);
  }
  label {
    position: relative;
    margin-top: 16px;
  }
  input {
    padding: 12px 10px;
    width: 280px;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
    border: 0;
    outline: 1px solid var(--secondary-color---5);
    color: var(--primery-color-blue);
  }
  input::placeholder {
    color: var(--secondary-color-lightblue);
  }
  input:focus {
    outline-color: var(--primery-color-blue);
  }
  input:invalid {
    color: var(--secondary-color-red);
    border: 1px solid var(--secondary-color-red);
  }
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
  a {
    width: fit-content;
    font-size: 16px;
    line-height: 1.25;
    color: var(--primery-color-blue);
    transition: color ease-in-out 250ms;
  }
  a:hover {
    color: var(--secondary-color-orange);
  }
  svg {
    color: var(--primery-color-blue);
  }
`,ur=S.button`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 8px 30px;
  width: 280px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: var(--primery-color-blue);
  color: var(--primery-color-white);
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  transition: box-shadow 250ms ease;


  @media (min-width: 768px) {
    font-size: 18px;
  }
  :hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
`,aA=S.span`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--primery-color-black);
`,EA=S.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: var(--primery-color-blue);
`,sA=S(PA)`
  margin-left: 4px;
  font-size: 14px;
  color: var(--secondary-color-red);
`,pr=VA().shape({email:D().email("Please enter a valid email").required("E-mail is required"),password:D().min(8,"Password must be 8 or more characters").max(64).required("Password is required"),repeatPassword:D().oneOf([GA("password"),null],"The passwords do not match").required("Repeat password field is required")}),fr=()=>{const[A,e]=U.useState(!1),[r,t]=U.useState(!1),n=WA(),i={email:"",password:"",repeatPassword:""},a=async({email:o,password:u},{resetForm:g})=>{const p={email:o,password:u};try{await n($A(p)).unwrap(),g()}catch{}};return s.jsx(UA,{initialValues:i,validationSchema:pr,onSubmit:a,children:o=>s.jsx(lr,{children:s.jsxs(dr,{children:[s.jsx("h1",{children:"Sign Up"}),s.jsxs("div",{className:TA.inputFields,children:[s.jsxs("label",{children:[s.jsx(aA,{children:"Enter your email"}),s.jsx(Q,{name:"email",type:"email",placeholder:"E-mail"}),s.jsx(sA,{name:"email",component:"span"})]}),s.jsxs("label",{children:[s.jsx(aA,{children:"Enter your password"}),s.jsxs("div",{children:[s.jsx(Q,{name:"password",type:A?"text":"password",placeholder:"Password"}),s.jsx(EA,{type:"button",onClick:()=>e(!A),children:A?s.jsx(B,{iconName:"icon-eye",width:"16px",height:"16px"}):s.jsx(B,{iconName:"icon-eye-slash",width:"16px",height:"16px"})})]}),s.jsx(sA,{name:"password",component:"span"})]}),s.jsxs("label",{children:[s.jsx(aA,{children:"Repeat password"}),s.jsxs("div",{children:[s.jsx(Q,{name:"repeatPassword",type:r?"text":"password",placeholder:"Password"}),s.jsx(EA,{type:"button",onClick:()=>t(!r),children:r?s.jsx(B,{iconName:"icon-eye",width:"16px",height:"16px"}):s.jsx(B,{iconName:"icon-eye-slash",width:"16px",height:"16px"})})]}),s.jsx(sA,{name:"repeatPassword",component:"span"})]}),s.jsx(ur,{type:"submit",children:"Sign Up"})]}),s.jsx(NA,{className:TA.signInLink,to:"/signin",onClick:()=>{o.handleReset()},children:"Sign in"})]})})})},Er=({isRegister:A=!1})=>A?s.jsx(fr,{}):s.jsx(or,{}),hr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAADQCAMAAADrnI7TAAAAAXNSR0IArs4c6QAAAJZQTFRFR3BMOXf/+Pj4O3v/PXr/Pnv/9/f3PXr/Pnv/8/PzP3z/QHz/RH//Pnr/cJ3/8/PzQH3/i7D/QHz/P3v/rsn/P33/QX7/QX7/P3z/9PT0ob//Zpf/QXz/P3z/P3z/k7X/QHz/daH/9fX1ssn7QHz/QHz/b53+hqz99PT1vdD39fX13OT3v9H4ssn5ia77VIn/S4L/QHv/gRl8uQAAACp0Uk5TAAcQEBgeICg0PkFMVF5jZm92d36BgYWJjpCRlpqgpqmytcHAwM3T1+LkHCnv3wAADLxJREFUeNrs2N1OtDAQgOESPgLptKT0hxIX9DPCscv935yUugabdUEPmXkIpMdvOoXACCGEEEIIIYQQQggh5CFulORVQSEScr6ZxnEIkThFCsZ5vl7nRXh8j2RCpBx9mPfl3i5vpoqhNMUO8Xl3OTKU5t0wM4W5v5wYRkV6uqRLrKPEKcyfwwyIwzw8aAzW13V0pTAJ9X+cppjnfiPJcCqdc60zxvh+eF4jTd8bFQynAkAIKZVSWmu38H65u2GIkUZgSJWwkURqW83QquBHQghgWGXwUMVokijMVgEU5liXFMMoq2BXwfDJOezjGY0RlQmyEo6omxpXmYzDEY21tq5ojFK1DeqKvuoSjV2Jkt7SaRhMZXI4rLZfZWiM0jARlNj+MuzPUiQKBF2kUlIe3zIRFGefI6H7Vavkb7ZMA/m5P1+Eds73UWf22giLoEz83NUu8P2NUeLgMDU8O/EgKffJd/2N1xJxmbhhhAuSNkGrpfhxmp6eXpbLNlCd9oTRbquNbTZ1lJRSiLWHEFIpZXzXP7+urAD4x06oSjaMeXu7hDohzkOd95fLxTsA4OyEAEC6rZclTBDrdH13p0nn3costzrnr858PXp3tN5/sG9Gu46CQABdI5vbVHtDpQMTGaD//5Ur2jRZdNXV3peB0/QHToaR00YcMcZoSGmb5sJTTAeniCNTsdy9Ck7RNU0jWIqBc8T1+8XxetfCOTTLJXM5LwZuTMXcipifEWPv3wzFXE+LsaF/fH9xvPhKOEUIjyJmiT6KYdcE1YcmRuRWBEgI66hRTJ2ZGPLeO1hFh56jGLGeSj5iYA0TJ6atMkslH8HNp/WjyS2V3OZRUnmKAXKkd4i5liJYFHMvqTRnFFNS6V9iShEsXnzvJZVmqJB9KtkQ7IKYDFMpffqACrak0owAClRYSKWQWSqljE6WxPSZpVJK0ADWZpNK+8WYMJBPKrW3jsjAGnmmkpSKiExJpYR2EkOlCBJuUgINmCLmb6SUei4GyWHeqRTFGBrA2e+ZLu9/laSUSMmSIT+CsAueDSmWxDi/NTL8U+n3W4w+KEbzFUMjZnaUCFbgnkqXtxhMz5LTsAc7ivmVhxhNzpGGXWieqXSVsqMJOEaaShWPU9XEIpj4SCpVtRCi5pNKEfOBIqjESM0jlT4oRrxgk0oR/D8dIehZKtWsxBg6sGRC/KapVAk2Yqquk3hYTJpKtRBcdkyNiP7pI84ZrfeLsWBDkkp8BmYS454vHEWS17VWloyCyCSG1cBENCI9n3760Iw1SSpNJTYDE5GIODiJJGI2JaWpVLHxErkgoksmZht8WdIazDuVajHBJLTVuH4n6AA2hL4fJuZPd+einLYOBFDryo6EDYXABYtgCZGmKU3a+/+fd7WSEXiRH4SU2Jw8BjyZhJzZXe1aY+MziUb3QSIM0pUZWVzODouJ7oVMGAoNfETM1ojZpMcSE90PWS4MqMh0RNpMmtv0uTcvibvjtZBKyUJcKsYGzDgC6H15YTNg7owcLsqHGOpYYZ6enmbUn6K6HxKvBVjhBm5V3rqgJpS2cJeUOY/uDzrx5x3aT8kcJPn6AuGymfHoDuHeywWnZBZOEmh5nE2S6B6ZwLlwJKYr8w3ciDSlUQB//peSQe9DepYXYc1kJApDYwsZ7K7Sh8Uslpun2pvXkriEDnxXCVffC7Znk6CXoYtZXCNmsYEz4TzkZdhixliMWF4ITAQTGvDiIQMVsywqfETMN47/+fiEoa7Wq0vF5JXdfxDzyGm9Fzr0XSU/FLQglCpOLDkxMV6nj0SDxLcxnryDGHnyrBRDUIEZeMBQJKZT9T2NqpWwNYbFZNiJhEk6isE0iqHIy1DFFIjlJeROTBIP3AuGXS1mY/uYOL6PDgaPSh/vfcWZGORluGLmnyBmHNN78IJHJYS4qPbak3hZTO/BCx6VMBfVXhDzmMXkDuoLHpWuESPEDsSkMUHrUTIEL4R0HJWkbB4KVit8wIuhhNDB9XUsIydrKSV1o5JSSjZVXyFEjjNJbJ0YBB3Ipfi8smZQEhQjlUGGq29uLRhwwDgxfIBeAJqSavNFQ6OSssiAmELBQC0AHDCHiaBKNBQIxV0pvogLAsabwV7c8XMxokZMNDxiD/GjUpuYlXIUWEzuxSSD9gLQqhmGxQB4WRLKokFMjipMOREk8cAbGNyB8ZAYiZal/CRiTpUJoLBiel54CSOdcwkglVFJHZC4+pbKhAEnUjkq9TyR0ixLOucSQE5HJeU5KzLS6TJgL+Wo1PMC0+m9luNTxg1i8I1rhSFHXpyYf7OeFxiWGeglIeOuVcJighdDOjHIi58Iet7ZcfRey60hM5vPViExXgBag3LsBYvp882D2AUL03yBJgJHcCgQQOnIk/tRCSUSpZT0zQzpbmaxWIhLxazgUTViOE4k2r+8omnGOzczzIgpAmJkES4xGDwREPT7Sb+amYyGKy4l2AwHMfLzxJyV96hX0KS24Ho1RzFShcSsArU3QF5URqWDdA8ZziBQOZIaMUZDQEweKDFBkBhCB3FepmGvh5RiltYDoE7FiG6Z5HeVEIMTA9DjocyJUdIFTEPvmzeJGQ9XTDXA/aHxYpErQEqpGsWIWjFPPRZDEsYtjJLWkAFIeWQCYhDolEwwYMBigUalIOTL30jWkzLaEjIAsQcSI0YoRLD6ilMKbVFoIgiBX+mNxWRVUkZqQyZhPE1TzmLLrJMYHDBaH81sGsXgBitLbz0HYDgJm0knJWOrZl4vRtT1MP6KW60LtKvUmEhJBtw4ZpL0XA2NEM6Lh7lRqVCIQPUVFbRHlmJ4By8MQpnT6MaQLmpoPJ4cyUxeNYjZHe+aLoJilPks+zve7oUYoq+B8jM3PMbFaFIJGVYvZrdbLkszAuGcWDdoVOrtHgpl2E2aVItRNWTcqBT2InNjxnrBKJRKIKbvnR2OG5zXsH4d3XA7KgX5qZQAMaHZsXDxorTyo1Jf4wW7ybAbn+88O1UzrhWzVUrm+Rb1daiPKfx2G2OsoxeCzux9eSlOOWNJ4lLNq1ks3aiE0S8vr1qJzU6EKaDIqMOotF1ZyWmLF0KTQzSznoQNxqtZyTxX57wAP1+3W9ECiNntdquyZjV4oazyeiBm+hQ2WI1QqgiLAbRoZ/NqxCz8Muc4t4JXy+iLwWqwGQFZoxVGdxYjd0bM5iAmDQ2OhPFQW95vNcJJ0DUhI0Ub2oqZH2p5DFAcLJgk6gVxg5pCSu2CI2hGiRZUVUyGEykOFDo/4PY5aoqiADGArrjplktSOzGz01RCNa4/WghNkiSmpIOa8UGMl6OrRUaKRrTWxstRDDtJJMKyxuGNxAlPUzgY33iVTnlCgycmbDVwj0CMfqlF66I5YFDEgJdaLTwhx1iqpNgtogXn9FFOWmlgQE0p5qXJjBINqDJiiklJEse1WihapW7b1PAsAOcsSXiGxICaGYhpMqOazBS6FCP8b+Qx5EjDQkQC5ZhFNxWDwWKAudb6BwiAbyHsQNRZDLiugRG/dt/cCxBnHZh4FtrEy48f5tPzAh8eDcj6TFJWTD45kNWT8jQYzrQPExIOmZkVAx9hwExt0EgNgJgVCphm0IbGzSAs7W5Gv6CIQfjIcZu45152blS63EvKk5jcfnrkHdVIYwbLwGJQAygNRWG1uFXJj0rjjkZYQkn0ZcS8i5o55FKrGI+1ATr8kddjxIz7rqT7WQcDtDHaa4CvypNWXsHMot0LZzHp6znOsBpt+xhUf+2TTmLAi54hL4Ems3cQ3hI2M/3i3PgEOQmaNrTx8rorkBc8B/QUwlrU5CDFu/FPDPZREz9swCwnk46LMSGU0uGomQilT+PmYEcqg1SA1l4XLjAmYMYdrNCEHYI36VNCZc3AFQW5KKR0huBLhfGSXH153clJWz9L/N6EF9NnNeNvwKPlybEt+el4beTwQ9snx6PlGzBOT3dMcCjFUR94eHgYjUbT6XS9/g78+v7L8Od3PX8Q//35r4nfYd7f9/tfv+Dvff8Orq04o4zR6Gv4x3gAC+vn5+f9/q3K+29ERz+/ax01GP5z7ur9zbDfm5dmXuB0Oho9/PO348LKMCreMFeoAUCK/QbAY4t/3o13UFLHHiyBo08OkNF0jXS0ugE5NwAZaccYmo4+JYRG6+e3D2Feb3+EYD3rUXQl07ereDd8tg8Qcj3TawvLev92Pe9W0PuHRIAKJON69utr04kYN6jCXK8JPhqBn/hrQJWJPgPiCvDIrUiDZQ91Fwrv3wEMjVwLs9/33sX+0Mw8PEQ3gJz2NgZob8AUuNp/mQTX0wFT29ahvq4/EwIIA2XWmjPn2B9p+189zyXrEvi9hpHhwfAX3oX1f60xCcWdQrLwAAAAAElFTkSuQmCC",mr="data:image/png;base64,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",gr="/Water-Tracker-project/assets/bottle-home-screen@2x-9b831dcb.png",xr="data:image/png;base64,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",br="/Water-Tracker-project/assets/bottle-home-screen@1x-3e49b9b1.png",yr="data:image/png;base64,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",vr="/Water-Tracker-project/assets/bottle-home-screen@2x-f33f821a.png",wr="/Water-Tracker-project/assets/background-element-home-screen@2x-6484bcc9.png",Sr="/Water-Tracker-project/assets/bottle-home-screen@1x-844f0318.png",kr="/Water-Tracker-project/assets/bottle-home-screen@2x-9f5b1d1b.png",jr=S.div`
  position: relative;
  isolation: isolate;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 60px);
  min-height: calc(100svh - 60px);
  padding: 0 20px 40px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
  }

  @media (min-width: 1440px) {
    padding-right: 112px;
    padding-left: 112px;
  }
`,Pr=S.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: url(${hr}), url(${mr});
  background-size:
    min(280px, calc(100% - 40px)) auto,
    100% auto;
  background-repeat: no-repeat;
  background-position:
    center bottom 16px,
    center top;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${gr}), url(${xr});
  }

  @media (min-width: 768px) {
    background-image: url(${br}), url(${yr});
    background-size:
      518px 386px,
      768px 1280px;
    background-position:
      right bottom 24px,
      center top;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${vr}), url(${wr});
    }
  }

  @media (min-width: 1440px) {
    background-image: url(${Sr}), url(${_e});
    background-size:
      738px 548px,
      1404px 582px;
    background-position:
      calc(50% - 620px) bottom,
      center top;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${kr}), url(${Ar});
    }
  }
`,Vr=S.p`
  margin-top: 20px;
  width: 280px;
  font-size: 18px;
  text-align: left;
  color: var(--secondary-color-red);
  @media (min-width: 768px) {
    width: 320px;
    margin-right: auto;
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    margin-left: auto;
    margin-right: 133px;
  }
`;export{Er as A,jr as S,Ar as a,Pr as b,Vr as c,_e as d,S as n};
