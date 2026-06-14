import{h as Xe,k as fe,r as I,l as Ge,F as Ce,E as Ee,j as o,i as De,n as Fe,o as Z,u as Ie,p as Me,q as Y,L as Oe,v as He,w as $e,x as _e}from"./index-a659894d.js";function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ce.apply(null,arguments)}var Ve={exports:{}},er="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rr=er,tr=rr;function Ne(){}function Re(){}Re.resetWarningCache=Ne;var nr=function(){function e(n,i,a,s,c,u){if(u!==tr){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Re,resetWarningCache:Ne};return t.PropTypes=t,t};Ve.exports=nr();var ir=Ve.exports;const Q=Xe(ir);function ar(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function sr(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var or=function(){function e(t){var n=this;this._insertTag=function(i){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,a),n.tags.push(i)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(sr(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=ar(i);try{a.insertRule(n,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),j="-ms-",re="-moz-",l="-webkit-",Ue="comm",de="rule",ue="decl",cr="@import",Le="@keyframes",Ar="@layer",lr=Math.abs,te=String.fromCharCode,dr=Object.assign;function ur(e,r){return w(e,0)^45?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function ze(e){return e.trim()}function pr(e,r){return(e=r.exec(e))?e[0]:e}function d(e,r,t){return e.replace(r,t)}function Ae(e,r){return e.indexOf(r)}function w(e,r){return e.charCodeAt(r)|0}function W(e,r,t){return e.slice(r,t)}function O(e){return e.length}function pe(e){return e.length}function H(e,r){return r.push(e),e}function fr(e,r){return e.map(r).join("")}var ne=1,z=1,Be=0,P=0,v=0,B="";function ie(e,r,t,n,i,a,s){return{value:e,root:r,parent:t,type:n,props:i,children:a,line:ne,column:z,length:s,return:""}}function q(e,r){return dr(ie("",null,null,"",null,null,0),e,{length:-e.length},r)}function hr(){return v}function mr(){return v=P>0?w(B,--P):0,z--,v===10&&(z=1,ne--),v}function E(){return v=P<Be?w(B,P++):0,z++,v===10&&(z=1,ne++),v}function N(){return w(B,P)}function $(){return P}function X(e,r){return W(B,e,r)}function J(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qe(e){return ne=z=1,Be=O(B=e),P=0,[]}function qe(e){return B="",e}function _(e){return ze(X(P-1,le(e===91?e+2:e===40?e+1:e)))}function xr(e){for(;(v=N())&&v<33;)E();return J(e)>2||J(v)>3?"":" "}function gr(e,r){for(;--r&&E()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return X(e,$()+(r<6&&N()==32&&E()==32))}function le(e){for(;E();)switch(v){case e:return P;case 34:case 39:e!==34&&e!==39&&le(v);break;case 40:e===41&&le(e);break;case 92:E();break}return P}function br(e,r){for(;E()&&e+v!==47+10;)if(e+v===42+42&&N()===47)break;return"/*"+X(r,P-1)+"*"+te(e===47?e:E())}function yr(e){for(;!J(N());)E();return X(e,P)}function vr(e){return qe(ee("",null,null,null,[""],e=Qe(e),0,[0],e))}function ee(e,r,t,n,i,a,s,c,u){for(var x=0,f=0,h=s,M=0,T=0,m=0,A=1,g=1,b=1,y=0,k="",R=i,F=a,C=n,p=k;g;)switch(m=y,y=E()){case 40:if(m!=108&&w(p,h-1)==58){Ae(p+=d(_(y),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:p+=_(y);break;case 9:case 10:case 13:case 32:p+=xr(m);break;case 92:p+=gr($()-1,7);continue;case 47:switch(N()){case 42:case 47:H(wr(br(E(),$()),r,t),u);break;default:p+="/"}break;case 123*A:c[x++]=O(p)*b;case 125*A:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+f:b==-1&&(p=d(p,/\f/g,"")),T>0&&O(p)-h&&H(T>32?me(p+";",n,t,h-1):me(d(p," ","")+";",n,t,h-2),u);break;case 59:p+=";";default:if(H(C=he(p,r,t,x,f,i,c,k,R=[],F=[],h),a),y===123)if(f===0)ee(p,r,C,C,R,a,h,c,F);else switch(M===99&&w(p,3)===110?100:M){case 100:case 108:case 109:case 115:ee(e,C,C,n&&H(he(e,C,C,0,0,i,c,k,i,R=[],h),F),i,F,h,c,n?R:F);break;default:ee(p,C,C,C,[""],F,0,c,F)}}x=f=T=0,A=b=1,k=p="",h=s;break;case 58:h=1+O(p),T=m;default:if(A<1){if(y==123)--A;else if(y==125&&A++==0&&mr()==125)continue}switch(p+=te(y),y*A){case 38:b=f>0?1:(p+="\f",-1);break;case 44:c[x++]=(O(p)-1)*b,b=1;break;case 64:N()===45&&(p+=_(E())),M=N(),f=h=O(k=p+=yr($())),y++;break;case 45:m===45&&O(p)==2&&(A=0)}}return a}function he(e,r,t,n,i,a,s,c,u,x,f){for(var h=i-1,M=i===0?a:[""],T=pe(M),m=0,A=0,g=0;m<n;++m)for(var b=0,y=W(e,h+1,h=lr(A=s[m])),k=e;b<T;++b)(k=ze(A>0?M[b]+" "+y:d(y,/&\f/g,M[b])))&&(u[g++]=k);return ie(e,r,t,i===0?de:c,u,x,f)}function wr(e,r,t){return ie(e,r,t,Ue,te(hr()),W(e,2,-2),0)}function me(e,r,t,n){return ie(e,r,t,ue,W(e,0,n),W(e,n+1,-1),n)}function L(e,r){for(var t="",n=pe(e),i=0;i<n;i++)t+=r(e[i],i,e,r)||"";return t}function Sr(e,r,t,n){switch(e.type){case Ar:if(e.children.length)break;case cr:case ue:return e.return=e.return||e.value;case Ue:return"";case Le:return e.return=e.value+"{"+L(e.children,n)+"}";case de:e.value=e.props.join(",")}return O(t=L(e.children,n))?e.return=e.value+"{"+t+"}":""}function kr(e){var r=pe(e);return function(t,n,i,a){for(var s="",c=0;c<r;c++)s+=e[c](t,n,i,a)||"";return s}}function jr(e){return function(r){r.root||(r=r.return)&&e(r)}}function Pr(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Tr=function(r,t,n){for(var i=0,a=0;i=a,a=N(),i===38&&a===12&&(t[n]=1),!J(a);)E();return X(r,P)},Cr=function(r,t){var n=-1,i=44;do switch(J(i)){case 0:i===38&&N()===12&&(t[n]=1),r[n]+=Tr(P-1,t,n);break;case 2:r[n]+=_(i);break;case 4:if(i===44){r[++n]=N()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=te(i)}while(i=E());return r},Er=function(r,t){return qe(Cr(Qe(r),t))},xe=new WeakMap,Fr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,i=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!xe.get(n))&&!i){xe.set(r,!0);for(var a=[],s=Er(t,a),c=n.props,u=0,x=0;u<s.length;u++)for(var f=0;f<c.length;f++,x++)r.props[x]=a[u]?s[u].replace(/&\f/g,c[f]):c[f]+" "+s[u]}}},Ir=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ze(e,r){switch(ur(e,r)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+re+e+j+e+e;case 6828:case 4268:return l+e+j+e+e;case 6165:return l+e+j+"flex-"+e+e;case 5187:return l+e+d(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return l+e+j+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return l+e+j+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return l+e+j+d(e,"shrink","negative")+e;case 5292:return l+e+j+d(e,"basis","preferred-size")+e;case 6060:return l+"box-"+d(e,"-grow","")+l+e+j+d(e,"grow","positive")+e;case 4554:return l+d(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-r>6)switch(w(e,r+1)){case 109:if(w(e,r+4)!==45)break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+re+(w(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Ae(e,"stretch")?Ze(d(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(w(e,r+1)!==115)break;case 6444:switch(w(e,O(e)-3-(~Ae(e,"!important")&&10))){case 107:return d(e,":",":"+l)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+l+(w(e,14)===45?"inline-":"")+"box$3$1"+l+"$2$3$1"+j+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return l+e+j+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+j+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+j+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return l+e+j+e+e}return e}var Mr=function(r,t,n,i){if(r.length>-1&&!r.return)switch(r.type){case ue:r.return=Ze(r.value,r.length);break;case Le:return L([q(r,{value:d(r.value,"@","@"+l)})],i);case de:if(r.length)return fr(r.props,function(a){switch(pr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return L([q(r,{props:[d(a,/:(read-\w+)/,":"+re+"$1")]})],i);case"::placeholder":return L([q(r,{props:[d(a,/:(plac\w+)/,":"+l+"input-$1")]}),q(r,{props:[d(a,/:(plac\w+)/,":"+re+"$1")]}),q(r,{props:[d(a,/:(plac\w+)/,j+"input-$1")]})],i)}return""})}},Or=[Mr],Vr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(A){var g=A.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(A),A.setAttribute("data-s",""))})}var i=r.stylisPlugins||Or,a={},s,c=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(A){for(var g=A.getAttribute("data-emotion").split(" "),b=1;b<g.length;b++)a[g[b]]=!0;c.push(A)});var u,x=[Fr,Ir];{var f,h=[Sr,jr(function(A){f.insert(A)})],M=kr(x.concat(i,h)),T=function(g){return L(vr(g),M)};u=function(g,b,y,k){f=y,T(g?g+"{"+b.styles+"}":b.styles),k&&(m.inserted[b.name]=!0)}}var m={key:t,sheet:new or({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:a,registered:{},insert:u};return m.sheet.hydrate(c),m},Nr=!0;function Rr(e,r,t){var n="";return t.split(" ").forEach(function(i){e[i]!==void 0?r.push(e[i]+";"):n+=i+" "}),n}var Ye=function(r,t,n){var i=r.key+"-"+t.name;(n===!1||Nr===!1)&&r.registered[i]===void 0&&(r.registered[i]=t.styles)},Ur=function(r,t,n){Ye(r,t,n);var i=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var a=t;do r.insert(t===a?"."+i:"",a,r.sheet,!0),a=a.next;while(a!==void 0)}};function Lr(e){for(var r=0,t,n=0,i=e.length;i>=4;++n,i-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(i){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var zr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Br=/[A-Z]|^ms/g,Qr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,We=function(r){return r.charCodeAt(1)===45},ge=function(r){return r!=null&&typeof r!="boolean"},ae=Pr(function(e){return We(e)?e:e.replace(Br,"-$&").toLowerCase()}),be=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(Qr,function(n,i,a){return V={name:i,styles:a,next:V},i})}return zr[r]!==1&&!We(r)&&typeof t=="number"&&t!==0?t+"px":t};function K(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return V={name:t.name,styles:t.styles,next:V},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)V={name:n.name,styles:n.styles,next:V},n=n.next;var i=t.styles+";";return i}return qr(e,r,t)}case"function":{if(e!==void 0){var a=V,s=t(e);return V=a,K(e,r,s)}break}}if(r==null)return t;var c=r[t];return c!==void 0?c:t}function qr(e,r,t){var n="";if(Array.isArray(t))for(var i=0;i<t.length;i++)n+=K(e,r,t[i])+";";else for(var a in t){var s=t[a];if(typeof s!="object")r!=null&&r[s]!==void 0?n+=a+"{"+r[s]+"}":ge(s)&&(n+=ae(a)+":"+be(a,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var c=0;c<s.length;c++)ge(s[c])&&(n+=ae(a)+":"+be(a,s[c])+";");else{var u=K(e,r,s);switch(a){case"animation":case"animationName":{n+=ae(a)+":"+u+";";break}default:n+=a+"{"+u+"}"}}}return n}var ye=/label:\s*([^\s;\n{]+)\s*(;|$)/g,V,Zr=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var i=!0,a="";V=void 0;var s=r[0];s==null||s.raw===void 0?(i=!1,a+=K(n,t,s)):a+=s[0];for(var c=1;c<r.length;c++)a+=K(n,t,r[c]),i&&(a+=s[c]);ye.lastIndex=0;for(var u="",x;(x=ye.exec(a))!==null;)u+="-"+x[1];var f=Lr(a)+u;return{name:f,styles:a,next:V}},Yr=function(r){return r()},Wr=fe["useInsertionEffect"]?fe["useInsertionEffect"]:!1,Jr=Wr||Yr,Je=I.createContext(typeof HTMLElement<"u"?Vr({key:"css"}):null);Je.Provider;var Kr=function(r){return I.forwardRef(function(t,n){var i=I.useContext(Je);return r(t,i,n)})},Xr=I.createContext({}),Gr=Ge,Dr=function(r){return r!=="theme"},ve=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Gr:Dr},we=function(r,t,n){var i;if(t){var a=t.shouldForwardProp;i=r.__emotion_forwardProp&&a?function(s){return r.__emotion_forwardProp(s)&&a(s)}:a}return typeof i!="function"&&n&&(i=r.__emotion_forwardProp),i},Hr=function(r){var t=r.cache,n=r.serialized,i=r.isStringTag;return Ye(t,n,i),Jr(function(){return Ur(t,n,i)}),null},$r=function e(r,t){var n=r.__emotion_real===r,i=n&&r.__emotion_base||r,a,s;t!==void 0&&(a=t.label,s=t.target);var c=we(r,t,n),u=c||ve(i),x=!u("as");return function(){var f=arguments,h=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(a!==void 0&&h.push("label:"+a+";"),f[0]==null||f[0].raw===void 0)h.push.apply(h,f);else{h.push(f[0][0]);for(var M=f.length,T=1;T<M;T++)h.push(f[T],f[0][T])}var m=Kr(function(A,g,b){var y=x&&A.as||i,k="",R=[],F=A;if(A.theme==null){F={};for(var C in A)F[C]=A[C];F.theme=I.useContext(Xr)}typeof A.className=="string"?k=Rr(g.registered,R,A.className):A.className!=null&&(k=A.className+" ");var p=Zr(h.concat(R),g.registered,F);k+=g.key+"-"+p.name,s!==void 0&&(k+=" "+s);var Ke=x&&c===void 0?ve(y):u,G={};for(var D in A)x&&D==="as"||Ke(D)&&(G[D]=A[D]);return G.className=k,G.ref=b,I.createElement(I.Fragment,null,I.createElement(Hr,{cache:g,serialized:p,isStringTag:typeof y=="string"}),I.createElement(y,G))});return m.displayName=a!==void 0?a:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=r.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=h,m.__emotion_forwardProp=c,Object.defineProperty(m,"toString",{value:function(){return"."+s}}),m.withComponent=function(A,g){return e(A,ce({},t,g,{shouldForwardProp:we(m,g,!0)})).apply(void 0,h)},m}},_r=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],S=$r.bind();_r.forEach(function(e){S[e]=S(e)});const et="data:image/png;base64,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",Se="data:image/png;base64,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",rt="/Water-Tracker-project/assets/bottle-sign-in@2x-240239e6.png",tt="/Water-Tracker-project/assets/bottle-for-sign-in@1x-611ab1e8.png",nt="/Water-Tracker-project/assets/bottle-for-sign-in@2x-ad8ad7bb.png",it="/Water-Tracker-project/assets/bottle-for-sign-in@1x-899234c8.png",at="data:image/png;base64,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",st="/Water-Tracker-project/assets/bottle-for-sign-in@2x-1e16e44b.png",ot="/Water-Tracker-project/assets/background-element-main-page@2x-3b9a03f0.png",ct="_signInFields_gdlfs_1",At={signInFields:ct},lt=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,dt=S(Ce)`
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
    outline-color: var(--secondary-color---5);
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
`,ut=S.button`
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
  @media (min-width: 768px) {
    font-size: 18px;
  }
  :hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
`,ke=S.span`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--primery-color-black);
`,pt=S.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: var(--primery-color-blue);
`,je=S(Ee)`
  margin-left: 4px;
  font-size: 14px;
  color: var(--secondary-color-red);
`,U=({iconName:e,width:r,height:t,stroke:n,fill:i})=>o.jsx("svg",{width:r||"24px",height:t||"24px",children:o.jsx("use",{href:`${De}#${e}`,stroke:n,fill:i})});U.propTypes={iconName:Q.string.isRequired,width:Q.string,height:Q.string,stroke:Q.string,fill:Q.string};const ft=Fe().shape({email:Z().email("Please enter a valid email").required("E-mail is required"),password:Z().min(8,"Password must be 8 or more characters").max(64).required("Password is required")}),ht=()=>{const[e,r]=I.useState(!1),t=Ie(),n={email:"",password:""},i=({email:a,password:s},{resetForm:c})=>{event.preventDefault(),t(He({email:a,password:s})),c()};return o.jsx(Me,{initialValues:n,validationSchema:ft,onSubmit:i,children:o.jsx(lt,{children:o.jsxs(dt,{children:[o.jsx("h1",{children:"Sign In"}),o.jsxs("div",{className:At.signInFields,children:[o.jsxs("label",{children:[o.jsx(ke,{children:"Enter your email"}),o.jsx(Y,{name:"email",type:"email",placeholder:"E-mail"}),o.jsx(je,{name:"email",component:"span"})]}),o.jsxs("label",{children:[o.jsx(ke,{children:"Enter your password"}),o.jsxs("div",{children:[o.jsx(Y,{name:"password",type:e?"text":"password",placeholder:"Password"}),o.jsx(pt,{type:"button",onClick:()=>r(!e),children:e?o.jsx(U,{iconName:"icon-eye",width:"16px",height:"16px"}):o.jsx(U,{iconName:"icon-eye-slash",width:"16px",height:"16px"})})]}),o.jsx(je,{name:"password",component:"span"})]}),o.jsx(ut,{type:"submit",children:"Sign In"})]}),o.jsx(Oe,{to:"/signup",children:"Sign Up"})]})})})},mt="_inputFields_lufqz_1",Pe={inputFields:mt},xt=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,gt=S(Ce)`
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
    outline-color: var(--secondary-color---5);
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
`,bt=S.button`
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
  @media (min-width: 768px) {
    font-size: 18px;
  }
  :hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
`,se=S.span`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--primery-color-black);
`,Te=S.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: var(--primery-color-blue);
`,oe=S(Ee)`
  margin-left: 4px;
  font-size: 14px;
  color: var(--secondary-color-red);
`,yt=Fe().shape({email:Z().email("Please enter a valid email").required("E-mail is required"),password:Z().min(8,"Password must be 8 or more characters").max(64).required("Password is required"),repeatPassword:Z().oneOf([$e("password"),null],"The passwords do not match").required("Repeat password field is required")}),vt=()=>{const[e,r]=I.useState(!1),[t,n]=I.useState(!1),i=Ie(),a={email:"",password:"",repeatPassword:""},s=({email:c,password:u},{resetForm:x})=>{event.preventDefault(),i(_e({email:c,password:u})),x()};return o.jsx(Me,{initialValues:a,validationSchema:yt,onSubmit:s,children:c=>o.jsx(xt,{children:o.jsxs(gt,{children:[o.jsx("h1",{children:"Sign Up"}),o.jsxs("div",{className:Pe.inputFields,children:[o.jsxs("label",{children:[o.jsx(se,{children:"Enter your email"}),o.jsx(Y,{name:"email",type:"email",placeholder:"E-mail"}),o.jsx(oe,{name:"email",component:"span"})]}),o.jsxs("label",{children:[o.jsx(se,{children:"Enter your password"}),o.jsxs("div",{children:[o.jsx(Y,{name:"password",type:e?"text":"password",placeholder:"Password"}),o.jsx(Te,{type:"button",onClick:()=>r(!e),children:e?o.jsx(U,{iconName:"icon-eye",width:"16px",height:"16px"}):o.jsx(U,{iconName:"icon-eye-slash",width:"16px",height:"16px"})})]}),o.jsx(oe,{name:"password",component:"span"})]}),o.jsxs("label",{children:[o.jsx(se,{children:"Repeat password"}),o.jsxs("div",{children:[o.jsx(Y,{name:"repeatPassword",type:t?"text":"password",placeholder:"Password"}),o.jsx(Te,{type:"button",onClick:()=>n(!t),children:t?o.jsx(U,{iconName:"icon-eye",width:"16px",height:"16px"}):o.jsx(U,{iconName:"icon-eye-slash",width:"16px",height:"16px"})})]}),o.jsx(oe,{name:"repeatPassword",component:"span"})]}),o.jsx(bt,{type:"submit",children:"Sign Up"})]}),o.jsx(Oe,{className:Pe.signInLink,to:"/signin",onClick:()=>{c.handleReset()},children:"Sign in"})]})})})},St=({isRegister:e=!1})=>e?o.jsx(vt,{}):o.jsx(ht,{}),kt=S.div`
  margin: 0 auto;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
`,jt=S.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: -10;
  background-image: url(${et}), url(${Se});
  background-size: 100%, cover;
  background-repeat: no-repeat;
  background-position:
    top 400px left 20px,
    center;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${rt}), url(${Se});
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 768px;
    width: 100%;
    height: 100vh;
    top: -20px;
    left: 0;
    right: 30px;
    background-image: url(${tt});
    background-size: cover;
    background-position: center;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${nt});
    }
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1404px;
    width: 100%;
    height: 100vh;
    top: 60px;
    left: 18px;
    background-image: url(${it}), url(${at});
    background-size: 916px, 1404px;
    background-position:
      top 28px left -51px,
      center;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${st}), url(${ot});
    }
  }
`,Pt=S.p`
  margin-top: 20px;
  width: 280px;
  font-size: 18px;
  text-align: center;
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
`;export{St as A,kt as S,Se as a,rt as b,nt as c,it as d,at as e,st as f,ot as g,jt as h,Pt as i,et as m,S as n,tt as t};
